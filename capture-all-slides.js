const { chromium } = require('playwright');
const fs = require('fs');
const { PDFDocument, rgb } = require('pdf-lib');
const sharp = require('sharp');
const path = require('path');

async function captureAllSlides() {
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--disable-dev-shm-usage']
  });
  
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2, // Higher quality screenshots
  });
  
  const page = await context.newPage();
  
  console.log('Navigating to slides...');
  await page.goto('http://localhost:3001/slides', { waitUntil: 'networkidle' });
  
  // Wait for slides to be available (already logged in from previous session)
  await page.waitForSelector('button:has-text("Go to slide 2")', { timeout: 5000 }).catch(() => {
    console.log('Slides might need email, trying to enter...');
    return page.fill('input[type="email"]', 'test@example.com')
      .then(() => page.click('button:has-text("Access Protected Content")'))
      .then(() => page.waitForSelector('button:has-text("Go to slide 2")', { timeout: 10000 }));
  });
  
  console.log('Slides loaded successfully!');
  
  // Hide unnecessary elements for cleaner screenshots
  await page.addStyleTag({
    content: `
      nav { display: none !important; }
      button[aria-label*="slide"] { display: none !important; }
      .fixed.bottom-8 { display: none !important; }
      [role="alert"] { display: none !important; }
      body { background: white !important; }
      .w-full.max-w-7xl { 
        max-width: 100% !important; 
        padding: 60px !important;
      }
    `
  });

  // Create directory for screenshots
  const screenshotDir = 'slide-screenshots-final';
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
  }

  const totalSlides = 11;
  const screenshots = [];
  
  for (let i = 1; i <= totalSlides; i++) {
    console.log(`Capturing slide ${i} of ${totalSlides}...`);
    
    // Navigate to slide
    await page.click(`button:has-text("Go to slide ${i}")`);
    
    // Wait for animations and content to load
    await page.waitForTimeout(2000);
    
    // Verify we're on the correct slide
    const slideIndicator = await page.textContent('.text-xs:has-text("Slide")').catch(() => '');
    console.log(`  Confirmed: ${slideIndicator}`);
    
    // Take screenshot
    const screenshotPath = path.join(screenshotDir, `slide-${String(i).padStart(2, '0')}.png`);
    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
      type: 'png'
    });
    screenshots.push(screenshotPath);
  }
  
  console.log('All slides captured! Creating PDF...');
  
  // Create PDF from screenshots
  const pdfDoc = await PDFDocument.create();
  
  for (const [index, screenshotPath] of screenshots.entries()) {
    console.log(`Adding slide ${index + 1} to PDF...`);
    
    // Read and optimize the image
    const imageBuffer = await sharp(screenshotPath)
      .resize(2480, 1754, { // A4 landscape at 300 DPI
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toBuffer();
    
    // Embed image in PDF
    const pngImage = await pdfDoc.embedPng(imageBuffer);
    
    // Add page in landscape A4
    const page = pdfDoc.addPage([841.89, 595.28]); // A4 landscape in points
    
    // Calculate dimensions to fit page
    const { width, height } = pngImage.scale(0.24); // Adjust scale as needed
    
    // Center the image on the page
    const x = (841.89 - width) / 2;
    const y = (595.28 - height) / 2;
    
    page.drawImage(pngImage, {
      x: Math.max(0, x),
      y: Math.max(0, y),
      width: Math.min(841.89, width),
      height: Math.min(595.28, height),
    });
  }
  
  // Save the PDF
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('above-security-slides.pdf', pdfBytes);
  
  console.log('✅ PDF created successfully: above-security-slides.pdf');
  console.log(`   File size: ${(pdfBytes.length / 1024 / 1024).toFixed(2)} MB`);
  
  // Clean up screenshots directory (optional)
  // fs.rmSync(screenshotDir, { recursive: true });
  
  await browser.close();
}

captureAllSlides().catch(console.error);