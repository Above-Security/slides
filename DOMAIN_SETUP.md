# Domain Setup Guide - abovesec.com

## Overview
This guide explains how to configure your custom domain `abovesec.com` to point to your Above Security homepage.

## Repository Information
- **Repository**: `Above-Security/slides`
- **GitHub Pages URL**: `above-security.github.io/slides/`
- **Current Structure**: Project repository with `/slides/` base path

## Files Created/Modified

### 1. CNAME File
- **Location**: `/public/CNAME`
- **Content**: `abovesec.com`
- **Purpose**: Tells GitHub Pages what custom domain to serve this site on

### 2. Routing Updates
- **File**: `/src/App.jsx`
- **Changes**: Updated default routes to redirect to `/home` instead of `/slide/1`
- **Effect**: When someone visits `abovesec.com`, they'll see the homepage instead of the presentation

## Domain Configuration Steps

### 1. GitHub Pages Settings (GitHub Actions Deployment)
Your repository is already configured with GitHub Actions deployment (`.github/workflows/deploy.yml`).

1. Go to your GitHub repository: `https://github.com/Above-Security/slides`
2. Navigate to Settings → Pages
3. Under "Source", ensure "GitHub Actions" is selected (not "Deploy from a branch")
4. Under "Custom domain", enter: `abovesec.com`
5. Enable "Enforce HTTPS" (recommended)
6. GitHub will automatically create a commit with the CNAME file

### 2. Build Configuration
The setup uses:
- **Vite build**: Outputs to `./dist` folder
- **Base path**: `/slides/` (configured in `vite.config.js`)
- **GitHub Actions**: Automatically builds and deploys on push to `main`

### 3. DNS Configuration
Configure your DNS provider (where you bought abovesec.com) with these records:

```
Type: CNAME
Name: www
Value: above-security.github.io

Type: A (for apex domain)
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

### 4. URL Structure After Setup
- `abovesec.com` → Homepage (Coming Soon page)
- `abovesec.com/slide/1` → Presentation (with EmailGate)
- `above-security.github.io/slides/` → GitHub Pages backup URL

## Verification
1. **Local Testing** (✅ Completed): 
   - `npm run build` - Builds successfully with CNAME file included
   - `npm run preview` - Routes work correctly at `/slides/` base path
2. **After DNS Setup** (24-48 hours for propagation):
   - Visit `abovesec.com` - should show the homepage
   - Visit `abovesec.com/slide/1` - should show the presentation with email gate
3. **GitHub Actions**: Check repository Actions tab for successful deployments

## Notes
- ✅ **Build Configuration**: Vite correctly outputs to `./dist` with `/slides/` base path
- ✅ **CNAME File**: Automatically included in build output
- ✅ **GitHub Actions**: Configured for automatic deployment on push to `main`
- ✅ **Routing**: Default route redirects to homepage, preserving presentation access
- ✅ **Best Practices**: Using modern GitHub Actions deployment (not legacy branch deployment)

## Troubleshooting
- If domain doesn't work immediately, check DNS propagation with tools like `dig` or online DNS checkers
- Ensure your GitHub repository is public or has GitHub Pages enabled
- Check GitHub Pages deployment status in repository settings
