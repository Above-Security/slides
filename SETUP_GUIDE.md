# Above React Presentation - Complete Setup Guide

## 🚀 Quick Setup Instructions

### 1. Copy These Files to Your Repository

**Root Level Files:**
- `package.json` - Dependencies and build scripts
- `vite.config.js` - Build configuration for GitHub Pages
- `index.html` - Main HTML entry point

**Source Files:**
- `src/main.jsx` - React entry point
- `deck/App.jsx` - Complete presentation component
- `deck/App.css` - Full styling

**GitHub Actions:**
- `.github/workflows/deploy.yml` - Auto-deployment workflow

### 2. Enable GitHub Pages

1. Go to repository Settings → Pages
2. Set source to "GitHub Actions"
3. The workflow will auto-deploy on push to main

### 3. Build and Deploy

```bash
# Install dependencies
npm install

# Build for production
npm run build

# The GitHub Action will automatically deploy to:
# https://above-security.github.io/slides/
```

## ✅ What's Included

### Technical Content (6 Slides)
1. **Above Runtime Insider Protection** - Core value proposition with key differentiators
2. **The Problem** - Real attack examples (Cyberhaven incident, OAuth abuse, session theft)
3. **Technical Approach** - Browser extension deployment, LLM normalization engine
4. **Detection Capabilities** - Specific examples with concrete scenarios
5. **Real-World Use Cases** - Evidence-based detection scenarios for technical buyers
6. **Deployment** - Technical implementation and integration details

### Features
- ✅ Professional GitHub-style design
- ✅ Smooth animations and transitions
- ✅ Keyboard navigation (arrow keys, spacebar, escape)
- ✅ Menu system for direct slide access
- ✅ Mobile-responsive design
- ✅ Logo watermarks on every slide

### Content Quality
- ✅ Eliminated all marketing fluff and repetition
- ✅ Evidence-based content with real examples
- ✅ Technical focus for CISOs and SecOps leads
- ✅ No fake metrics or unsubstantiated claims
- ✅ Use-case oriented scenarios

## 🔧 Troubleshooting

If the GitHub Action fails:
1. Check that GitHub Pages is enabled in repository settings
2. Ensure the workflow has proper permissions
3. Verify all files are committed to the main branch

The presentation will be available at: https://above-security.github.io/slides/

