import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function takeBlackHatScreenshot() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
    });

    const page = await browser.newPage();

    // Set viewport to exact LinkedIn post dimensions
    await page.setViewport({
        width: 1200,
        height: 630,
        deviceScaleFactor: 2 // For high quality
    });

    try {
        // Navigate to the BlackHat LinkedIn post
        const templatePath = `file://${path.join(__dirname, 'public', 'blackhat-2025-linkedin.html')}`;
        console.log(`📸 Taking screenshot of BlackHat LinkedIn post: ${templatePath}`);

        await page.goto(templatePath, {
            waitUntil: 'networkidle0',
            timeout: 30000
        });

        // Wait for fonts, animations, and content to load
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Take screenshot
        const screenshotPath = path.join(__dirname, 'public', 'blackhat-2025-linkedin.png');
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

        console.log(`✅ BlackHat LinkedIn post screenshot created: ${screenshotPath}`);
        console.log(`🚀 Ready to upload to LinkedIn!`);

    } catch (error) {
        console.error('❌ Error creating BlackHat screenshot:', error);
    } finally {
        await browser.close();
    }
}

takeBlackHatScreenshot();
