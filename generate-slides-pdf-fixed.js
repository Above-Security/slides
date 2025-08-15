const { chromium } = require('playwright');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const path = require('path');

async function generateSlidesPDF() {
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--disable-dev-shm-usage']
  });
  
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  const page = await context.newPage();
  
  console.log('Navigating to slides...');
  await page.goto('http://localhost:3001/slides', { waitUntil: 'networkidle' });
  
  // Enter email to access slides
  console.log('Entering email to access slides...');
  await page.fill('input[type="email"]', 'test@example.com');
  await page.click('button:has-text("Access Protected Content")');
  
  // Wait for slides to load
  await page.waitForSelector('button:has-text("Go to slide 2")', { timeout: 10000 });
  
  // Hide navigation elements for cleaner PDFs
  await page.addStyleTag({
    content: `
      nav { opacity: 0.1; }
      button:has-text("Go to slide") { display: none !important; }
      button:has-text("Previous slide"), button:has-text("Next slide") { display: none !important; }
      [role="alert"] { display: none !important; }
    `
  });

  // Create directory for individual PDFs
  const pdfDir = 'slide-pdfs';
  if (!fs.existsSync(pdfDir)) {
    fs.mkdirSync(pdfDir);
  }

  const totalSlides = 11;
  const pdfPaths = [];
  
  // Define unique content identifiers for each slide to verify they've loaded
  const slideIdentifiers = [
    'Insider Protection Platform', // Slide 1
    'The gap between access and action', // Slide 2
    'Insider risks cost', // Slide 3 (Statistics)
    'Above discovers everything', // Slide 3
    'How Above works', // Slide 4
    'See everything users do', // Slide 5
    'Built for scale and privacy', // Slide 6
    'Evidence that proves what happened', // Slide 7
    'Built for modern work', // Slide 8
    'Every insider risk', // Slide 9
    'Experience the difference', // Slide 10
  ];
  
  for (let i = 1; i <= totalSlides; i++) {
    console.log(`Capturing slide ${i} of ${totalSlides}...`);
    
    // Navigate to slide using keyboard shortcut (more reliable)
    if (i === 10) {
      await page.keyboard.press('0'); // 0 key goes to slide 10
    } else if (i === 11) {
      // For slide 11, we need to navigate from 10
      await page.keyboard.press('0');
      await page.waitForTimeout(500);
      await page.keyboard.press('ArrowRight');
    } else if (i < 10) {
      await page.keyboard.press(String(i));
    }
    
    // Wait for the specific slide content to appear
    if (i <= slideIdentifiers.length) {
      try {
        await page.waitForSelector(`text="${slideIdentifiers[i-1]}"`, { timeout: 5000 });
      } catch (e) {
        console.log(`Warning: Could not find identifier for slide ${i}, waiting instead...`);
        await page.waitForTimeout(3000);
      }
    } else {
      await page.waitForTimeout(3000);
    }
    
    // Additional wait for animations to complete
    await page.waitForTimeout(1500);
    
    // Log current slide number indicator to verify we're on the right slide
    const slideIndicator = await page.textContent('.text-xs.text-slate-400:has-text("Slide")').catch(() => null);
    if (slideIndicator) {
      console.log(`  Current position: ${slideIndicator}`);
    }
    
    // Generate PDF for this slide
    const pdfPath = path.join(pdfDir, `slide-${String(i).padStart(2, '0')}.pdf`);
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      landscape: true,
      printBackground: true,
      preferCSSPageSize: false,
      margin: {
        top: '30px',
        bottom: '30px',
        left: '30px',
        right: '30px'
      }
    });
    pdfPaths.push(pdfPath);
  }
  
  console.log('Merging PDFs...');
  
  // Merge all PDFs into one
  const mergedPdf = await PDFDocument.create();
  
  for (const pdfPath of pdfPaths) {
    const pdfBytes = fs.readFileSync(pdfPath);
    const pdf = await PDFDocument.load(pdfBytes);
    const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    pages.forEach(page => mergedPdf.addPage(page));
  }
  
  const mergedPdfBytes = await mergedPdf.save();
  fs.writeFileSync('above-security-slides-final.pdf', mergedPdfBytes);
  
  console.log('Final PDF created: above-security-slides-final.pdf');
  
  // Clean up individual PDFs
  fs.rmSync(pdfDir, { recursive: true });
  
  await browser.close();
}

generateSlidesPDF().catch(console.error);