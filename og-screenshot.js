import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function takeOGScreenshot() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
    });

    const page = await browser.newPage();

    // Set viewport to exact OG image dimensions
    await page.setViewport({
        width: 1200,
        height: 630,
        deviceScaleFactor: 2 // For high quality
    });

    try {
        // Navigate to the OG template file
        const templatePath = `file://${path.join(__dirname, 'public', 'og-template.html')}`;
        console.log(`📸 Taking screenshot of: ${templatePath}`);

        await page.goto(templatePath, {
            waitUntil: 'networkidle0',
            timeout: 30000
        });

        // Wait for fonts and content to load
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Take screenshot
        const screenshotPath = path.join(__dirname, 'public', 'og-image.png');
        await page.screenshot({
            path: screenshotPath,
            type: 'png',
            fullPage: false,
            clip: {
                x: 0,
                y: 0,
                width: 1200,
                height: 630
            }
        });

        console.log(`✅ OG image created from template: ${screenshotPath}`);

    } catch (error) {
        console.error('❌ Error creating OG image:', error);
    } finally {
        await browser.close();
    }
}

takeOGScreenshot();
