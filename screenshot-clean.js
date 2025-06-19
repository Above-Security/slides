import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function takeCleanScreenshot() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
    });

    const page = await browser.newPage();

    // Set a larger viewport to capture full content, then we'll crop intelligently
    await page.setViewport({
        width: 1200,
        height: 1000, // Taller to capture full slide content
        deviceScaleFactor: 2 // For high quality
    });

    try {
        // Navigate to the OG template instead of the main app
        const templatePath = `file://${path.join(__dirname, 'public', 'og-template-new.html')}`;
        await page.goto(templatePath, {
            waitUntil: 'networkidle0',
            timeout: 30000
        });

        // Wait for content to load and animations to settle
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Find the actual slide content bounds
        const contentInfo = await page.evaluate(() => {
            const slideContainer = document.querySelector('.slide-container');
            const slideContent = document.querySelector('.slide-content');

            if (slideContent) {
                const rect = slideContent.getBoundingClientRect();
                return {
                    x: rect.x,
                    y: rect.y,
                    width: rect.width,
                    height: rect.height,
                    contentFound: true
                };
            } else if (slideContainer) {
                const rect = slideContainer.getBoundingClientRect();
                return {
                    x: rect.x,
                    y: rect.y,
                    width: rect.width,
                    height: rect.height,
                    contentFound: true
                };
            }

            return { x: 0, y: 0, width: 1200, height: 630, contentFound: false };
        });

        console.log('Content bounds:', contentInfo);

        // Calculate optimal crop area for OG image (1200x630)
        let cropY = 0;
        if (contentInfo.contentFound && contentInfo.height > 630) {
            // If content is taller than OG height, center it or crop from top
            cropY = Math.max(0, Math.min(contentInfo.y - 50, contentInfo.height - 630 + contentInfo.y));
        } else if (contentInfo.contentFound) {
            // If content fits, center it vertically
            cropY = Math.max(0, (1000 - 630) / 2);
        }

        // Take screenshot of just the content area
        const screenshotPath = path.join(__dirname, 'public', 'og-image.png');
        await page.screenshot({
            path: screenshotPath,
            type: 'png',
            clip: {
                x: 0,
                y: cropY,
                width: 1200,
                height: 630
            }
        });

        console.log(`✅ Clean screenshot saved to: ${screenshotPath}`);
        console.log(`📏 Cropped from Y: ${cropY} to fit OG dimensions`);

    } catch (error) {
        console.error('❌ Error taking screenshot:', error);
    } finally {
        await browser.close();
    }
}

takeCleanScreenshot();
