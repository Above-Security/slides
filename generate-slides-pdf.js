const { chromium } = require('playwright');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const sharp = require('sharp');

async function generateSlidesPDF() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  console.log('Navigating to slides...');
  await page.goto('http://localhost:3001/slides');
  
  // Enter email to access slides
  console.log('Entering email to access slides...');
  await page.fill('input[type="email"]', 'test@example.com');
  await page.click('button:has-text("Access Protected Content")');
  
  // Wait for slides to load
  await page.waitForTimeout(3000);
  
  // Create screenshots directory
  if (!fs.existsSync('slide-screenshots')) {
    fs.mkdirSync('slide-screenshots');
  }

  // Capture each slide
  const totalSlides = 11;
  for (let i = 1; i <= totalSlides; i++) {
    console.log(`Capturing slide ${i} of ${totalSlides}...`);
    
    // Click on the slide button to navigate
    if (i > 1) {
      await page.click(`button:has-text("Go to slide ${i}")`);
      await page.waitForTimeout(1500); // Wait for animation
    }
    
    // Take screenshot of the slide content area
    const slideElement = await page.locator('.w-full.max-w-7xl.mx-auto').first();
    await slideElement.screenshot({
      path: `slide-screenshots/slide-${String(i).padStart(2, '0')}.png`,
      fullPage: false
    });
  }

  console.log('All slides captured!');
  
  // Create PDF from screenshots
  console.log('Creating PDF...');
  const pdfDoc = await PDFDocument.create();
  
  for (let i = 1; i <= totalSlides; i++) {
    const imagePath = `slide-screenshots/slide-${String(i).padStart(2, '0')}.png`;
    const imageBuffer = fs.readFileSync(imagePath);
    
    // Embed the PNG image
    const pngImage = await pdfDoc.embedPng(imageBuffer);
    
    // Get image dimensions
    const { width, height } = pngImage;
    
    // Create a page with landscape orientation
    const page = pdfDoc.addPage([width * 0.75, height * 0.75]);
    
    // Draw the image on the page
    page.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: width * 0.75,
      height: height * 0.75
    });
  }

  // Save the PDF
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync('above-security-slides.pdf', pdfBytes);
  
  console.log('PDF created successfully: above-security-slides.pdf');
  
  // Clean up
  await browser.close();
  
  // Optionally remove screenshot directory
  // fs.rmSync('slide-screenshots', { recursive: true });
}

generateSlidesPDF().catch(console.error);