const { chromium } = require('playwright');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const path = require('path');

async function generateCompletePDF() {
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
  await page.waitForTimeout(3000);
  
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
  
  for (let i = 1; i <= totalSlides; i++) {
    console.log(`Capturing slide ${i} of ${totalSlides}...`);
    
    // Navigate to slide
    if (i > 1) {
      await page.evaluate((slideNum) => {
        const buttons = document.querySelectorAll('button');
        for (const button of buttons) {
          if (button.textContent === `Go to slide ${slideNum}`) {
            button.click();
            break;
          }
        }
      }, i);
      
      // Wait for animation to complete
      await page.waitForTimeout(2000);
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
  fs.writeFileSync('above-security-slides-complete.pdf', mergedPdfBytes);
  
  console.log('Complete PDF created: above-security-slides-complete.pdf');
  
  // Clean up individual PDFs
  fs.rmSync(pdfDir, { recursive: true });
  
  await browser.close();
}

generateCompletePDF().catch(console.error);