#!/usr/bin/env node

import https from 'https';

const SITE_URL = 'https://above-security.github.io/slides/';

console.log('🔍 Checking production health...');

function checkUrl(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          content: data,
          headers: res.headers
        });
      });
    });
    
    req.on('error', (err) => {
      reject(err);
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

async function healthCheck() {
  try {
    console.log(`📡 Checking ${SITE_URL}...`);
    
    const response = await checkUrl(SITE_URL);
    
    // Check HTTP status
    if (response.statusCode !== 200) {
      console.error(`❌ HTTP Error: ${response.statusCode}`);
      process.exit(1);
    }
    
    console.log('✅ Site is accessible (HTTP 200)');
    
    // Check content
    const content = response.content;
    
    if (!content.includes('Above') || !content.includes('Runtime Identity')) {
      console.error('❌ Missing expected page title');
      process.exit(1);
    }
    
    console.log('✅ Page title is correct');
    
    // Check for source file references (should not exist)
    if (content.includes('/src/main.jsx') || content.includes('/src/')) {
      console.error('❌ ERROR: Live site references source files!');
      process.exit(1);
    }
    
    console.log('✅ No source file references found');
    
    // Check for CSS and JS
    if (!content.includes('.css')) {
      console.error('❌ No CSS files found in HTML');
      process.exit(1);
    }
    
    if (!content.includes('.js')) {
      console.error('❌ No JS files found in HTML');
      process.exit(1);
    }
    
    console.log('✅ CSS and JS assets are referenced');
    
    // Check content size
    const sizeKB = Math.round(content.length / 1024);
    console.log(`📄 Page size: ${sizeKB}KB`);
    
    if (sizeKB < 5) {
      console.warn('⚠️  Warning: Page seems unusually small');
    }
    
    // Check response time
    const startTime = Date.now();
    await checkUrl(SITE_URL);
    const responseTime = Date.now() - startTime;
    
    console.log(`⚡ Response time: ${responseTime}ms`);
    
    if (responseTime > 5000) {
      console.warn('⚠️  Warning: Slow response time (>5s)');
    }
    
    console.log('🎉 Production health check passed!');
    console.log(`🌐 Live site: ${SITE_URL}`);
    
  } catch (error) {
    console.error('❌ Health check failed:', error.message);
    process.exit(1);
  }
}

healthCheck();

