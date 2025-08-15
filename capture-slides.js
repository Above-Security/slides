const { chromium } = require('playwright');
const path = require('path');

async function captureSlides() {
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
  
  // Remove navigation and controls for cleaner PDF
  await page.addStyleTag({
    content: `
      nav, .fixed, button:has-text("Go to slide"), 
      button:has-text("Previous slide"), 
      button:has-text("Next slide"),
      [role="alert"] { 
        display: none !important; 
      }
      .w-full.max-w-7xl.mx-auto {
        padding: 40px !important;
        min-height: 100vh !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
      }
    `
  });

  // Navigate through all slides and capture
  const slides = [];
  const totalSlides = 11;
  
  for (let i = 1; i <= totalSlides; i++) {
    console.log(`Processing slide ${i} of ${totalSlides}...`);
    
    // Navigate to slide
    await page.evaluate((slideNum) => {
      const buttons = document.querySelectorAll('button');
      for (const button of buttons) {
        if (button.textContent === `Go to slide ${slideNum}`) {
          button.click();
          break;
        }
      }
    }, i);
    
    // Wait for animation
    await page.waitForTimeout(1500);
    
    // Capture the current state
    slides.push(await page.content());
  }
  
  console.log('Generating PDF...');
  
  // Generate PDF with all slides
  await page.pdf({
    path: 'above-security-slides.pdf',
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: {
      top: '20px',
      bottom: '20px',
      left: '20px',
      right: '20px'
    }
  });
  
  console.log('PDF created successfully: above-security-slides.pdf');
  
  await browser.close();
}

captureSlides().catch(console.error);