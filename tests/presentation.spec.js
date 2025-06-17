import { test, expect } from '@playwright/test';

test.describe('Above Security Presentation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the presentation without errors', async ({ page }) => {
    // Check for console errors
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.waitForLoadState('networkidle');
    expect(errors).toHaveLength(0);
  });

  test('should display the first slide correctly', async ({ page }) => {
    // Check slide title
    await expect(page.locator('h1')).toContainText('Above');
    await expect(page.locator('.slide-subtitle')).toContainText('Runtime Identity Threat Detection & Response');
    
    // Check key points are visible
    await expect(page.locator('.key-point-card')).toHaveCount(3);
    await expect(page.locator('.key-point-title').first()).toContainText('Browser Extension');
  });

  test('should have working navigation', async ({ page }) => {
    // Test next button
    await page.click('button:has-text("→")');
    await expect(page.locator('h1')).toContainText('The Problem');
    
    // Test previous button
    await page.click('button:has-text("←")');
    await expect(page.locator('h1')).toContainText('Above');
  });

  test('should have working menu', async ({ page }) => {
    // Open menu
    await page.click('button:has-text("Menu")');
    await expect(page.locator('.menu-overlay')).toBeVisible();
    
    // Check all slides are listed
    await expect(page.locator('.menu-item')).toHaveCount(6);
    
    // Navigate to slide 3
    await page.click('button:has-text("3How It Works")');
    await expect(page.locator('h1')).toContainText('How It Works');
    
    // Menu should close
    await expect(page.locator('.menu-overlay')).not.toBeVisible();
  });

  test('should display all slides correctly', async ({ page }) => {
    const expectedTitles = [
      'Above',
      'The Problem',
      'How It Works',
      'Cyberhaven Case Study',
      'Real-World Detection',
      'Deployment'
    ];

    for (let i = 0; i < expectedTitles.length; i++) {
      // Navigate to slide
      if (i > 0) {
        await page.click('button:has-text("→")');
      }
      
      // Check title
      await expect(page.locator('h1')).toContainText(expectedTitles[i]);
      
      // Check slide counter
      await expect(page.locator('.slide-counter')).toContainText(`${i + 1} / 6`);
    }
  });

  test('should have proper CSS styling', async ({ page }) => {
    // Check header styling
    const header = page.locator('.presentation-header');
    await expect(header).toHaveCSS('background-color', 'rgb(246, 248, 250)');
    
    // Check menu button styling
    const menuBtn = page.locator('.menu-button');
    await expect(menuBtn).toHaveCSS('background-color', 'rgb(0, 135, 43)');
    await expect(menuBtn).toHaveCSS('color', 'rgb(255, 255, 255)');
    
    // Check slide container
    const slideContainer = page.locator('.slide-container');
    await expect(slideContainer).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check that content is still visible and accessible
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.menu-button')).toBeVisible();
    await expect(page.locator('.nav-button')).toBeVisible();
  });

  test('should have working keyboard navigation', async ({ page }) => {
    // Focus on the page
    await page.click('body');
    
    // Test arrow key navigation
    await page.keyboard.press('ArrowRight');
    await expect(page.locator('h1')).toContainText('The Problem');
    
    await page.keyboard.press('ArrowLeft');
    await expect(page.locator('h1')).toContainText('Above');
    
    // Test escape key for menu
    await page.click('button:has-text("Menu")');
    await expect(page.locator('.menu-overlay')).toBeVisible();
    
    await page.keyboard.press('Escape');
    await expect(page.locator('.menu-overlay')).not.toBeVisible();
  });

  test('should load all assets correctly', async ({ page }) => {
    // Check that CSS is loaded
    const stylesheets = await page.locator('link[rel="stylesheet"]').count();
    expect(stylesheets).toBeGreaterThan(0);
    
    // Check that JavaScript is loaded
    const scripts = await page.locator('script[src]').count();
    expect(scripts).toBeGreaterThan(0);
    
    // Check for 404 errors
    const failedRequests = [];
    page.on('response', response => {
      if (response.status() >= 400) {
        failedRequests.push(response.url());
      }
    });
    
    await page.reload();
    await page.waitForLoadState('networkidle');
    expect(failedRequests).toHaveLength(0);
  });

  test('should have proper content structure', async ({ page }) => {
    // Check slide 2 - The Problem
    await page.click('button:has-text("→")');
    await expect(page.locator('.landscape-card')).toHaveCount(2);
    await expect(page.locator('.threat-item')).toHaveCount(3);
    
    // Check slide 4 - Cyberhaven Case Study
    await page.click('button:has-text("→")');
    await page.click('button:has-text("→")');
    await expect(page.locator('.detection-item')).toHaveCount(4);
    
    // Check slide 5 - Real-World Detection
    await page.click('button:has-text("→")');
    await expect(page.locator('.scenario-card')).toHaveCount(4);
    
    // Check slide 6 - Deployment
    await page.click('button:has-text("→")');
    await expect(page.locator('.deployment-step')).toHaveCount(3);
    await expect(page.locator('.constraint-card')).toHaveCount(2);
  });
});

