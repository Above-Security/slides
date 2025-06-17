# Above Security - Runtime ITDR Presentation

A professional React-based presentation showcasing Above Security's Runtime Identity Threat Detection & Response platform.

## 🎯 Overview

This presentation is designed for technical buyers including CISOs, SecOps leads, and threat analysts. It focuses on evidence-based content, real-world use cases, and technical implementation details without marketing fluff.

## 🌐 Live Demo

**Production URL:** https://above-security.github.io/slides/

## 📋 Presentation Content

### 6 Focused Slides:

1. **Above Runtime ITDR** - Core value proposition and key differentiators
2. **The Problem** - Real attack examples (Cyberhaven incident, OAuth abuse, session theft)
3. **Technical Approach** - Browser extension deployment, LLM normalization, behavioral baselines
4. **Detection Capabilities** - Specific examples with concrete scenarios
5. **Real-World Use Cases** - Evidence-based detection scenarios for technical buyers
6. **Deployment** - Technical implementation and integration details

## 🎨 Design Features

- **GitHub-style aesthetic** with professional white background
- **Interactive navigation** with keyboard support (arrow keys, spacebar, escape)
- **Menu system** for direct slide access
- **Mobile-responsive design** with touch support
- **Professional animations** and hover effects
- **Logo watermarks** on every slide

## 🚀 Technical Stack

- **React 18** with modern hooks
- **Vite** for fast development and optimized builds
- **CSS3** with animations and responsive design
- **FontAwesome** for professional icons
- **GitHub Pages** for deployment

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development URLs

- **Dev Server:** http://localhost:5173
- **Preview:** http://localhost:4173

## 🚀 Deployment

The presentation is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the main branch.

### Deployment Process

1. **Build:** Vite builds the React app to `dist/` folder
2. **Deploy:** GitHub Actions uploads the build artifacts to GitHub Pages
3. **Live:** Available at https://above-security.github.io/slides/

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains the deployable files
```

## 📁 Project Structure

```
├── src/
│   ├── App.jsx          # Main React component with all slides
│   ├── App.css          # Complete styling and animations
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Actions deployment
```

## 🎮 Navigation

### Keyboard Controls
- **Arrow Right / Spacebar:** Next slide
- **Arrow Left:** Previous slide
- **Escape:** Close menu

### Mouse Controls
- **Menu Button:** Access slide navigation
- **Navigation Arrows:** Previous/next slide
- **Slide Counter:** Shows current position

## 🎯 Content Philosophy

### Evidence-Based Approach
- **Real-world examples** with technical details
- **Specific detection scenarios** with concrete use cases
- **No fake metrics** or unsubstantiated claims
- **Technical focus** for security professionals

### Use-Case Oriented
- **Cyberhaven 2024 incident** - Employee data exfiltration example
- **OAuth app abuse** - Legitimate consent leading to scope creep
- **Session token theft** - Behavioral inconsistency detection
- **Insider threat patterns** - Gradual privilege escalation detection

## 🔧 Configuration

### Vite Configuration
- **Base path:** `/slides/` for GitHub Pages
- **Build output:** `dist/` folder
- **Development server:** Hot reload enabled

### GitHub Actions
- **Trigger:** Push to main branch
- **Build:** `npm ci && npm run build`
- **Deploy:** Upload `dist/` to GitHub Pages

## 📱 Responsive Design

- **Desktop:** Full-featured experience with animations
- **Tablet:** Optimized layout with touch support
- **Mobile:** Simplified navigation and typography

## 🎨 Brand Guidelines

### Colors
- **Primary Green:** #00872b (Above Security brand)
- **Light Green:** #5fed83 (Hover states)
- **GitHub Gray:** #24292f (Text)
- **Light Gray:** #656d76 (Secondary text)
- **Background:** #ffffff (Clean white)

### Typography
- **Font:** Inter (Google Fonts)
- **Headers:** 800 weight, 48px
- **Subtitles:** 500 weight, 20px
- **Body:** 400 weight, 14-16px

## 🔒 Security Considerations

- **No sensitive data** in the presentation
- **Privacy-preserving** content approach
- **Professional branding** suitable for enterprise audiences

## 📄 License

This presentation is proprietary to Above Security. All rights reserved.

## 🤝 Contributing

This is a private repository for Above Security's presentation materials. For updates or modifications, please contact the development team.

---

**Built with ❤️ for Above Security**

