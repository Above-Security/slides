# Metadata & SEO Implementation

## Overview
The Above platform now includes comprehensive metadata, favicons, and Open Graph tags for both the homepage and presentation slides using React 19's native document head support.

## Implementation Details

### Homepage Metadata (/slides/home)
The HomePage component includes:
- **Title**: "Above - Coming Soon | Revolutionary Security Technology"
- **Description**: Investor-focused coming soon messaging
- **Open Graph**: Optimized for social media sharing
- **Twitter Cards**: Large image cards for Twitter
- **Favicons**: Complete favicon set (SVG, PNG sizes, Apple touch icon)
- **Mobile**: Proper viewport and mobile app meta tags
- **Canonical URL**: Points to https://abovesec.com/

### Presentation Metadata (/slides/slide/N)
The PresentationApp component includes:
- **Dynamic Titles**: "Above Security - Slide X | Runtime ITDR Platform"
- **Dynamic Descriptions**: Slide-specific descriptions
- **Base Metadata**: Inherits from index.html for consistency

## Assets Included
All assets are automatically copied to build output:
- ✅ `/favicon.svg` - Primary SVG favicon
- ✅ `/favicon-32x32.png` - 32px PNG favicon
- ✅ `/favicon-16x16.png` - 16px PNG favicon
- ✅ `/apple-touch-icon.png` - iOS home screen icon
- ✅ `/og-image.png` - Open Graph social media image
- ✅ `/site.webmanifest` - Web app manifest
- ✅ `/robots.txt` - Search engine directives
- ✅ `/sitemap.xml` - Site structure for SEO

## React 19 Native Support
Using React 19's native metadata support means:
- No external dependencies (no React Helmet needed)
- Meta tags are automatically hoisted to document head
- Better performance and smaller bundle size
- Native React support for title and meta elements

## SEO Benefits
- **Search Engines**: Proper titles, descriptions, and canonical URLs
- **Social Media**: Rich preview cards for Twitter, Facebook, LinkedIn
- **Mobile**: Optimized for mobile browsers and PWA installation
- **Branding**: Consistent favicon and app icons across platforms

## Testing
All metadata can be tested using:
- Browser dev tools (Elements tab, head section)
- Social media debuggers (Facebook Sharing Debugger, Twitter Card Validator)
- SEO tools (Google Search Console, lighthouse audit)
- Mobile testing (iOS Safari, Android Chrome)

## Build Process
The Vite build process automatically:
1. Includes all public assets in the dist folder
2. Optimizes images and icons
3. Copies CNAME file for custom domain
4. Maintains all metadata in the built HTML
