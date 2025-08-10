// Test script to verify PostHog proxy is working
const https = require('https');

const testUrls = [
  'https://abovegithub-h0g90yika-aviv-nahums-projects.vercel.app/ingest',
  'https://abovegithub-h0g90yika-aviv-nahums-projects.vercel.app/ingest/decide',
  'https://abovegithub-h0g90yika-aviv-nahums-projects.vercel.app/ingest/static/array.js'
];

console.log('Testing PostHog proxy endpoints...\n');

testUrls.forEach(url => {
  https.get(url, (res) => {
    console.log(`Testing: ${url}`);
    console.log(`Status: ${res.statusCode}`);
    console.log(`Headers:`, res.headers.location || 'No redirect');
    
    // Check if it's redirecting to PostHog
    if (res.statusCode === 308 || res.statusCode === 301) {
      console.log('✅ Proxy rewrite configured (redirect detected)');
    } else if (res.statusCode === 200) {
      console.log('✅ Endpoint accessible');
    } else if (res.statusCode === 404) {
      console.log('❌ Endpoint not found - proxy may not be working');
    }
    console.log('---\n');
  }).on('error', (err) => {
    console.error(`Error testing ${url}:`, err.message);
  });
});

// Test with curl to see actual behavior
console.log('\nFor manual verification, run these commands:');
console.log('curl -I https://abovegithub-h0g90yika-aviv-nahums-projects.vercel.app/ingest');
console.log('curl -I https://abovegithub-h0g90yika-aviv-nahums-projects.vercel.app/ingest/decide');