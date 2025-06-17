#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔍 Validating build output...');

const distPath = './dist';
const indexPath = path.join(distPath, 'index.html');

// Check if dist directory exists
if (!fs.existsSync(distPath)) {
  console.error('❌ ERROR: dist directory not found');
  process.exit(1);
}

// Check if index.html exists
if (!fs.existsSync(indexPath)) {
  console.error('❌ ERROR: dist/index.html not found');
  process.exit(1);
}

// Read index.html content
const htmlContent = fs.readFileSync(indexPath, 'utf8');

// Check for source file references (should not exist in production)
if (htmlContent.includes('/src/')) {
  console.error('❌ ERROR: Built HTML still references source files!');
  console.error('Found references:');
  const lines = htmlContent.split('\n');
  lines.forEach((line, index) => {
    if (line.includes('/src/')) {
      console.error(`  Line ${index + 1}: ${line.trim()}`);
    }
  });
  process.exit(1);
}

// Check for CSS files
if (!htmlContent.includes('.css')) {
  console.error('❌ ERROR: No CSS files referenced in HTML');
  process.exit(1);
}

// Check for JS files
if (!htmlContent.includes('.js')) {
  console.error('❌ ERROR: No JS files referenced in HTML');
  process.exit(1);
}

// Check for proper title
if (!htmlContent.includes('Above') || !htmlContent.includes('Runtime Identity')) {
  console.error('❌ ERROR: Missing or incorrect page title');
  process.exit(1);
}

// Check assets directory
const assetsPath = path.join(distPath, 'assets');
if (!fs.existsSync(assetsPath)) {
  console.error('❌ ERROR: dist/assets directory not found');
  process.exit(1);
}

// Count assets
const assets = fs.readdirSync(assetsPath);
const cssFiles = assets.filter(file => file.endsWith('.css'));
const jsFiles = assets.filter(file => file.endsWith('.js'));

if (cssFiles.length === 0) {
  console.error('❌ ERROR: No CSS files found in assets');
  process.exit(1);
}

if (jsFiles.length === 0) {
  console.error('❌ ERROR: No JS files found in assets');
  process.exit(1);
}

console.log('✅ Build validation passed');
console.log(`📦 Assets: ${cssFiles.length} CSS, ${jsFiles.length} JS files`);
console.log(`📄 HTML size: ${Math.round(htmlContent.length / 1024)}KB`);

// Calculate total bundle size
let totalSize = 0;
assets.forEach(file => {
  const filePath = path.join(assetsPath, file);
  const stats = fs.statSync(filePath);
  totalSize += stats.size;
});

console.log(`📊 Total bundle size: ${Math.round(totalSize / 1024)}KB`);

if (totalSize > 5 * 1024 * 1024) { // 5MB warning
  console.warn('⚠️  Warning: Bundle size is quite large (>5MB)');
}

