const { chromium } = require('playwright');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const path = require('path');

async function captureAllSlidesWithKeyboard() {
  const browser = await chromium.launch({ 
    headless: true,
    args: ['--disable-dev-shm-usage']
  });
  
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1.5,
  });
  
  const page = await context.newPage();
  
  console.log('Navigating to slides...');
  await page.goto('http://localhost:3001/slides', { waitUntil: 'networkidle' });
  
  // Check if we need to enter email
  const emailInput = await page.$('input[type="email"]');
  if (emailInput) {
    console.log('Entering email to access slides...');
    await page.fill('input[type="email"]', 'test@example.com');
    await page.click('button:has-text("Access Protected Content")');
    await page.waitForTimeout(3000);
  }
  
  // Wait for slides to be ready
  await page.waitForSelector('h1', { timeout: 10000 });
  
  console.log('Slides loaded! Hiding UI elements...');
  
  // Hide UI elements for cleaner screenshots
  await page.addStyleTag({
    content: `
      nav { display: none !important; }
      .fixed.bottom-8 { display: none !important; }
      button[aria-label*="slide"] { display: none !important; }
      [role="alert"] { display: none !important; }
      body { background: white !important; }
    `
  });

  // Create directory for screenshots
  const screenshotDir = 'slides-final';
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir);
  }

  const totalSlides = 11;
  const screenshots = [];
  
  // Start from slide 1 (press 1 key)
  console.log('Navigating to slide 1...');
  await page.keyboard.press('1');
  await page.waitForTimeout(2000);
  
  // Capture each slide
  for (let i = 1; i <= totalSlides; i++) {
    console.log(`Capturing slide ${i} of ${totalSlides}...`);
    
    // Navigate to specific slide using number keys
    if (i === 10) {
      await page.keyboard.press('0'); // 0 key for slide 10
    } else if (i === 11) {
      await page.keyboard.press('0'); // Go to slide 10 first
      await page.waitForTimeout(1000);
      await page.keyboard.press('ArrowRight'); // Then arrow right to 11
    } else if (i < 10) {
      await page.keyboard.press(String(i));
    }
    
    // Wait for slide transition
    await page.waitForTimeout(2000);
    
    // Take screenshot
    const screenshotPath = path.join(screenshotDir, `slide-${String(i).padStart(2, '0')}.png`);
    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
      type: 'png'
    });
    screenshots.push(screenshotPath);
    console.log(`  Saved: ${screenshotPath}`);
  }
  
  console.log('All slides captured! Creating PDF...');
  
  // Create PDF from screenshots
  const pdfDoc = await PDFDocument.create();
  
  for (const [index, screenshotPath] of screenshots.entries()) {
    console.log(`Adding slide ${index + 1} to PDF...`);
    
    const imageBuffer = fs.readFileSync(screenshotPath);
    const pngImage = await pdfDoc.embedPng(imageBuffer);
    
    // Add page in landscape A4
    const page = pdfDoc.addPage([841.89, 595.28]);
    
    // Scale image to fit
    const scale = Math.min(
      841.89 / pngImage.width,
      595.28 / pngImage.height
    ) * 0.95; // 95% to add some margin
    
    const scaledWidth = pngImage.width * scale;
    const scaledHeight = pngImage.height * scale;
    
    // Center on page
    const x = (841.89 - scaledWidth) / 2;
    const y = (595.28 - scaledHeight) / 2;
    
    page.drawImage(pngImage, {
      x,
      y,
      width: scaledWidth,
      height: scaledHeight,
    });
  }
  
  // Save the PDF
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('above-security-slides-final.pdf', pdfBytes);
  
  console.log('✅ PDF created successfully: above-security-slides-final.pdf');
  console.log(`   File size: ${(pdfBytes.length / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Total pages: ${pdfDoc.getPageCount()}`);
  
  await browser.close();
}

captureAllSlidesWithKeyboard().catch(console.error);