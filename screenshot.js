import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function takeScreenshot() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
    });

    const page = await browser.newPage();

    // Set viewport to OG image dimensions (1200x630)
    await page.setViewport({
        width: 1200,
        height: 630,
        deviceScaleFactor: 2 // For high quality
    });

    try {
        // Navigate to the local development server
        await page.goto('http://localhost:5175', {
            waitUntil: 'networkidle0',
            timeout: 30000
        });

        // Wait a bit more for any animations to settle
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Take screenshot
        const screenshotPath = path.join(__dirname, 'public', 'og-image.png');
        await page.screenshot({
            path: screenshotPath,
            type: 'png',
            clip: {
                x: 0,
                y: 0,
                width: 1200,
                height: 630
            }
        });

        console.log(`✅ Screenshot saved to: ${screenshotPath}`);

    } catch (error) {
        console.error('❌ Error taking screenshot:', error);
    } finally {
        await browser.close();
    }
}

takeScreenshot();
