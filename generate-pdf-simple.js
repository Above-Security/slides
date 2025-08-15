const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const sharp = require('sharp');
const path = require('path');

async function createPDFFromScreenshots() {
  const screenshotDir = 'slides-final';
  const screenshots = [];
  
  // List of screenshot files we'll create
  for (let i = 1; i <= 11; i++) {
    screenshots.push(path.join(screenshotDir, `slide-${String(i).padStart(2, '0')}.png`));
  }
  
  console.log('Creating PDF from screenshots...');
  
  // Create PDF
  const pdfDoc = await PDFDocument.create();
  
  for (const [index, screenshotPath] of screenshots.entries()) {
    if (!fs.existsSync(screenshotPath)) {
      console.log(`Warning: ${screenshotPath} not found, skipping...`);
      continue;
    }
    
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
    const { width, height } = pngImage.scale(0.24);
    
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
  fs.writeFileSync('above-security-slides-final.pdf', pdfBytes);
  
  console.log('✅ PDF created successfully: above-security-slides-final.pdf');
  console.log(`   File size: ${(pdfBytes.length / 1024 / 1024).toFixed(2)} MB`);
}

// This will be called after screenshots are taken
if (require.main === module) {
  createPDFFromScreenshots().catch(console.error);
}

module.exports = { createPDFFromScreenshots };