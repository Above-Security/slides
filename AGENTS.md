# AGENTS.md - Development Guidelines & Best Practices

A comprehensive guide for AI coding agents and developers working on the Above Security React application platform. This document captures architectural patterns, best practices, and guidelines for maintaining high-quality, consistent code.

*Created: June 25, 2025*  
*Version: 1.0.0*

---

## 📖 **Table of Contents**

1. [Project Overview](#project-overview)
2. [Architecture Principles](#architecture-principles)  
3. [Design System Guidelines](#design-system-guidelines)
4. [Component Architecture](#component-architecture)
5. [Routing & Navigation](#routing--navigation)
6. [Testing Strategy](#testing-strategy)
7. [CSS Architecture](#css-architecture)
8. [Performance Guidelines](#performance-guidelines)
9. [Accessibility Standards](#accessibility-standards)
10. [Analytics Integration](#analytics-integration)
11. [Build & Deployment](#build--deployment)
12. [Code Quality Standards](#code-quality-standards)
13. [Error Handling](#error-handling)
14. [Security Considerations](#security-considerations)
15. [Maintenance Guidelines](#maintenance-guidelines)

---

## 🎯 **Project Overview**

### **Application Purpose**
Professional React platform showcasing Above Security's Runtime Identity Threat Detection & Response capabilities for technical buyers (CISOs, SecOps leads, threat analysts).

### **Core Sections**
- **Homepage**: Professional landing page with navigation hub
- **Presentation Slides**: 15-slide executive deck with dynamic navigation
- **Use Cases**: 4 technical implementation scenarios with detailed walkthroughs
- **Company Narrative**: Strategic business overview with interactive components
- **Insider Threat Matrix**: Interactive threat analysis and filtering

### **Technology Stack**
```json
{
  "framework": "React 18.2.0",
  "routing": "React Router DOM 7.6.2", 
  "buildTool": "Vite 5.0.8",
  "testing": "Vitest 3.2.4 + React Testing Library",
  "analytics": "Microsoft Clarity 1.0.0",
  "deployment": "GitHub Pages"
}
```

---

## 🏗️ **Architecture Principles**

### **1. Modular Section-Based Architecture**

**Pattern**: Each major section (slides, use-cases, company) has its own module with:
- Dedicated folder structure (`/src/slides/`, `/src/use-cases/`, `/src/company/`)
- Index file with barrel exports
- Section-specific components and styles
- Standalone navigation and routing

**Example Structure**:
```
src/
├── slides/
│   ├── index.js              # Barrel exports
│   ├── components/           # Slide components
│   └── styles/              # Section-specific styles
├── use-cases/
│   ├── index.js
│   ├── components/
│   └── pages/               # Individual use case pages
└── company/
    ├── index.js
    ├── components/
    └── pages/
```

### **2. Shared Component Philosophy**

**Guideline**: Create reusable components for cross-section functionality:
- `FloatingNavigation`: Consistent navigation across sections
- `SectionContainer`: Standardized page layout wrapper
- `TableOfContents`: Interactive content navigation

**Implementation Rule**: If a component is used in 2+ sections, extract to `/src/components/`

### **3. Design-First Development**

**Principle**: All visual decisions must reference the design token system:
- Use CSS custom properties from `/src/styles/tokens/design-tokens.css`
- Maintain 95%+ token coverage for consistency
- Never hardcode colors, spacing, or typography values

---

## 🎨 **Design System Guidelines**

### **1. Design Token Usage**

**Primary Design Tokens**:
```css
/* Brand Colors */
--brand-primary: #00872b;           /* Above Security green */
--brand-primary-light: #5fed83;     /* Light green accent */
--brand-gradient: linear-gradient(90deg, #5fed83, #00872b);

/* Typography Scale */
--font-size-hero: clamp(2.5rem, 8vw, 4rem);
--font-size-xl: clamp(1.5rem, 4vw, 2.25rem);
--font-size-lg: clamp(1.125rem, 2.5vw, 1.5rem);

/* Spacing System */
--spacing-xs: 0.25rem;    /* 4px */
--spacing-sm: 0.5rem;     /* 8px */
--spacing-md: 1rem;       /* 16px */
--spacing-lg: 1.5rem;     /* 24px */
--spacing-xl: 2rem;       /* 32px */
--spacing-2xl: 3rem;      /* 48px */
--spacing-3xl: 4rem;      /* 64px */
```

**Token Usage Rules**:
1. **Always use tokens**: Never hardcode values that have token equivalents
2. **Semantic naming**: Use semantic tokens (`--text-primary`) over specific ones (`#24292f`)
3. **Consistent spacing**: Use the 8px grid system via spacing tokens
4. **Brand compliance**: Maintain GitHub brand color harmony

### **2. Typography Hierarchy**

**Responsive Typography Pattern**:
```css
/* Use clamp() for fluid typography */
.hero-title {
  font-size: var(--font-size-hero);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
}

.section-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
}
```

### **3. Color System**

**State Colors**:
- **Success**: `var(--state-success)` - #00872b
- **Danger**: `var(--state-danger)` - #d1242f  
- **Warning**: `var(--state-warning)` - #fd7e14
- **Info**: `var(--state-info)` - #6f42c1

**Usage Guidelines**:
- Use semantic color tokens for consistent meaning
- Maintain WCAG AA contrast ratios (4.5:1 minimum)
- Test colors across light/dark themes if implementing

---

## 🧱 **Component Architecture**

### **1. Component Structure Standards**

**Functional Component Pattern**:
```jsx
import React, { useMemo, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ComponentName.css';

/**
 * ComponentName Component
 * 
 * Detailed description of component purpose and functionality.
 * 
 * Features:
 * - List key features
 * - Performance optimizations
 * - Accessibility compliance
 * 
 * @param {Object} props - Component props
 * @param {Array} props.data - Required prop description
 * @param {string} props.className - Optional prop description
 * @param {Function} props.onAction - Callback prop description
 */
const ComponentName = ({ 
    data = [], 
    className = '',
    onAction = null
}) => {
    // State management
    const [localState, setLocalState] = useState(initialValue);
    
    // Refs for DOM manipulation
    const elementRef = useRef(null);
    
    // Memoized calculations
    const processedData = useMemo(() => {
        return data.map(item => /* processing logic */);
    }, [data]);

    // Effect hooks
    useEffect(() => {
        // Setup logic
        return () => {
            // Cleanup logic
        };
    }, [dependencies]);

    return (
        <div className={`component-name ${className}`} ref={elementRef}>
            {/* Component JSX */}
        </div>
    );
};

export default ComponentName;
```

### **2. Props and State Management**

**Props Guidelines**:
- Use destructuring with defaults for optional props
- Provide comprehensive JSDoc documentation
- Use TypeScript-style prop descriptions in JSDoc
- Group related props together

**State Management Rules**:
- Use `useState` for component-local state
- Use `useRef` for DOM manipulation and mutable values
- Use `useMemo` for expensive calculations
- Use `useCallback` for function props to prevent re-renders

### **3. Performance Optimization Patterns**

**Memoization Strategy**:
```jsx
// Memoize expensive calculations
const processedData = useMemo(() => {
    return data.filter(item => item.active)
               .sort((a, b) => a.priority - b.priority);
}, [data]);

// Memoize callback functions
const handleAction = useCallback((itemId) => {
    if (onAction) {
        onAction(itemId);
    }
}, [onAction]);
```

**Component Splitting**: Break large components into smaller, focused components for better performance and maintainability.

---

## 🛣️ **Routing & Navigation**

### **1. Router Configuration**

**HashRouter Implementation**:
```jsx
// Use HashRouter for GitHub Pages compatibility
import { HashRouter as Router } from 'react-router-dom';

// In main.jsx
<Router>
  <App />
</Router>
```

**Route Structure Pattern**:
```jsx
<Routes>
  {/* Root routes */}
  <Route path="/" element={<HomePage />} />
  
  {/* Section routes with redirects */}
  <Route path="/slides" element={<Navigate to="/slides/1" replace />} />
  <Route path="/slides/:slideNumber" element={<PresentationApp />} />
  
  {/* Use case routes with case sensitivity */}
  <Route path="/use-cases" element={<UseCasesIndex />} />
  <Route
    path="/use-cases/phishing-detection"
    element={<PhishingDetection />}
    caseSensitive
  />
  
  {/* Fallback redirects */}
  <Route path="/use-cases/*" element={<Navigate to="/" replace />} />
</Routes>
```

### **2. Navigation Patterns**

**Floating Navigation Component**:
- Sticky positioning with configurable offset
- Active route highlighting
- Keyboard navigation support
- Mobile-responsive collapse behavior

**Navigation Implementation**:
```jsx
const navigationLinks = [
    {
        to: '/use-cases',
        icon: 'fas fa-layer-group',
        label: 'All Use Cases',
        ariaLabel: 'View all security use cases'
    }
];

<FloatingNavigation 
    links={navigationLinks}
    topOffset={20}
    showTooltips={false}
    onNavigate={handleNavigation}
/>
```

### **3. URL Structure Standards**

**Route Naming Conventions**:
- Use kebab-case for multi-word routes (`/insider-threat-matrix`)
- Implement case-sensitive routing for exact matching
- Provide meaningful redirects for user experience
- Use semantic URL structure reflecting content hierarchy

---

## 🧪 **Testing Strategy**

### **1. Testing Framework Setup**

**Vitest Configuration**:
```javascript
// vitest.config.js
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js']
  }
})
```

**Testing Dependencies**:
- **Vitest**: Test runner with Jest compatibility
- **React Testing Library**: Component testing utilities
- **@testing-library/user-event**: User interaction simulation
- **@testing-library/jest-dom**: Custom Jest matchers

### **2. Component Testing Patterns**

**Test File Structure**:
```jsx
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import ComponentName from '../src/components/ComponentName'

// Mock external dependencies
global.IntersectionObserver = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}))

// Test wrapper for routing context
const TestWrapper = ({ children, initialEntries = ['/'] }) => (
    <MemoryRouter initialEntries={initialEntries}>
        {children}
    </MemoryRouter>
)

describe('ComponentName', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('Rendering and Basic Functionality', () => {
        it('renders component with default props', () => {
            render(
                <TestWrapper>
                    <ComponentName />
                </TestWrapper>
            );

            expect(screen.getByRole('button')).toBeInTheDocument();
        });
    });

    describe('User Interactions', () => {
        it('handles click events correctly', async () => {
            const user = userEvent.setup();
            const mockCallback = vi.fn();

            render(
                <TestWrapper>
                    <ComponentName onAction={mockCallback} />
                </TestWrapper>
            );

            await user.click(screen.getByRole('button'));
            expect(mockCallback).toHaveBeenCalledOnce();
        });
    });
});
```

### **3. Testing Best Practices**

**Test Organization**:
- Group tests by functionality using `describe` blocks
- Use descriptive test names that explain expected behavior
- Test user interactions, not implementation details
- Mock external dependencies and APIs

**Coverage Guidelines**:
- Aim for 80%+ test coverage
- Focus on critical user paths and business logic
- Test error states and edge cases
- Ensure accessibility features are tested

**Command Usage**:
```bash
npm test              # Run tests in watch mode
npm run test:run      # Run tests once
npm run test:coverage # Generate coverage report
npm run test:ui       # Run tests with UI
```

---

## 🎨 **CSS Architecture**

### **1. CSS Modules Pattern**

**File Structure**:
```
src/
├── styles/
│   ├── tokens/
│   │   └── design-tokens.css    # Global design system
│   ├── components/
│   │   ├── Button.module.css    # Component-specific styles
│   │   └── Card.module.css
│   └── global/
│       └── reset.css            # Global resets and base styles
```

**CSS Module Implementation**:
```css
/* Component.module.css */
.container {
  padding: var(--spacing-lg);
  background: var(--bg-primary);
  border-radius: var(--border-radius-md);
}

.title {
  font-size: var(--font-size-xl);
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

.actionButton {
  background: var(--brand-gradient);
  color: var(--text-inverse);
  border: none;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: var(--transition-standard);
}

.actionButton:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-lg);
}
```

### **2. Responsive Design Patterns**

**Mobile-First Approach**:
```css
/* Base styles for mobile */
.component {
  padding: var(--spacing-md);
  font-size: var(--font-size-sm);
}

/* Tablet styles */
@media (min-width: 768px) {
  .component {
    padding: var(--spacing-lg);
    font-size: var(--font-size-md);
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .component {
    padding: var(--spacing-xl);
    font-size: var(--font-size-lg);
  }
}
```

**Fluid Typography**:
```css
.heading {
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  line-height: var(--line-height-tight);
}
```

### **3. Animation and Transitions**

**Standard Transitions**:
```css
/* Use consistent transition timings */
.interactive-element {
  transition: var(--transition-standard); /* 0.2s ease-in-out */
}

.slow-transition {
  transition: var(--transition-slow); /* 0.3s ease-in-out */
}

/* Hover states with subtle transforms */
.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

---

## ⚡ **Performance Guidelines**

### **1. Bundle Optimization**

**Vite Configuration**:
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Let Vite handle chunking automatically
      },
    },
  },
})
```

**Code Splitting Strategy**:
- Use React.lazy() for route-based code splitting
- Implement component-level lazy loading for heavy components
- Avoid premature optimization - measure first

### **2. Asset Optimization**

**Image Guidelines**:
- Use WebP format for better compression
- Implement responsive images with srcset
- Optimize SVG files and prefer them for icons
- Use appropriate image sizes (avoid oversized images)

**Asset Loading**:
```jsx
// Lazy load images
const LazyImage = ({ src, alt, ...props }) => (
  <img 
    src={src} 
    alt={alt} 
    loading="lazy" 
    {...props} 
  />
);
```

### **3. Runtime Performance**

**React Optimization**:
```jsx
// Memoize expensive calculations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// Prevent unnecessary re-renders
const MemoizedComponent = React.memo(({ prop1, prop2 }) => {
  return <div>{prop1} {prop2}</div>;
});

// Use callback memoization
const handleClick = useCallback((id) => {
  onItemClick(id);
}, [onItemClick]);
```

**Performance Monitoring**:
- Use React DevTools Profiler for component analysis
- Monitor Core Web Vitals in production
- Implement performance budgets in CI/CD

---

## ♿ **Accessibility Standards**

### **1. WCAG 2.1 AA Compliance**

**Color Contrast Requirements**:
- Normal text: 4.5:1 contrast ratio minimum
- Large text: 3:1 contrast ratio minimum
- Use design tokens that meet contrast requirements

**Focus Management**:
```css
/* Visible focus indicators */
.interactive-element:focus {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}

/* Remove default outline only when providing custom focus */
.custom-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px var(--border-focus);
}
```

### **2. Semantic HTML and ARIA**

**Semantic Structure**:
```jsx
// Use proper heading hierarchy
<main>
  <h1>Main Page Title</h1>
  <section>
    <h2>Section Title</h2>
    <article>
      <h3>Article Title</h3>
    </article>
  </section>
</main>

// Navigation landmarks
<nav aria-label="Main navigation">
  <ul role="list">
    <li><a href="/use-cases">Use Cases</a></li>
  </ul>
</nav>
```

**ARIA Implementation**:
```jsx
// Interactive components
<button 
  aria-label="Open navigation menu"
  aria-expanded={isOpen}
  aria-controls="navigation-menu"
>
  Menu
</button>

// Status updates
<div 
  role="status" 
  aria-live="polite"
  aria-atomic="true"
>
  {statusMessage}
</div>
```

### **3. Keyboard Navigation**

**Navigation Patterns**:
```jsx
// Handle keyboard events
const handleKeyDown = (event) => {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault();
      handleAction();
      break;
    case 'Escape':
      handleClose();
      break;
  }
};

// Tab order management
<div tabIndex={0} onKeyDown={handleKeyDown}>
  Interactive Content
</div>
```

---

## 📊 **Analytics Integration**

### **1. Microsoft Clarity Setup**

**Implementation Pattern**:
```jsx
// In main.jsx or App.jsx
import { clarity } from '@microsoft/clarity';

// Initialize Clarity with project ID
if (import.meta.env.PROD) {
  clarity.init('PROJECT_ID');
}
```

**Event Tracking**:
```jsx
// Track custom events
const trackUserAction = (actionName, properties = {}) => {
  if (window.clarity) {
    window.clarity('event', actionName, properties);
  }
};

// Usage in components
const handleSlideNavigation = (slideNumber) => {
  trackUserAction('slide_navigation', {
    slide_number: slideNumber,
    section: 'presentation'
  });
};
```

### **2. Analytics Best Practices**

**Event Naming Convention**:
- Use snake_case for event names
- Include section context in event properties
- Track user journey through major sections

**Privacy Considerations**:
- Only track in production environment
- Avoid collecting PII in event properties
- Respect user privacy preferences

---

## 🚀 **Build & Deployment**

### **1. Build Configuration**

**Vite Build Setup**:
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
```

**Package.json Scripts**:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage"
  }
}
```

### **2. GitHub Pages Deployment**

**Deployment Strategy**:
- Use HashRouter for client-side routing compatibility
- Build to `dist/` directory
- Deploy via GitHub Actions or manual upload

**Environment Configuration**:
```javascript
// Check environment in code
const isDevelopment = import.meta.env.DEV;
const isProduction = import.meta.env.PROD;

// Environment-specific features
if (isProduction) {
  // Enable analytics, error reporting
}
```

### **3. CI/CD Pipeline**

**Quality Gates**:
1. **Linting**: ESLint for code quality
2. **Testing**: Vitest test suite must pass
3. **Build**: Successful production build
4. **Performance**: Bundle size checks

**Recommended GitHub Actions**:
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test:run
      - run: npm run build
```

---

## 🔧 **Code Quality Standards**

### **1. Code Style Guidelines**

**JavaScript/JSX Standards**:
- Use functional components with hooks
- Prefer arrow functions for consistency
- Use template literals for string interpolation
- Implement proper error boundaries

**Import Organization**:
```jsx
// External libraries
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Internal components
import FloatingNavigation from '../components/FloatingNavigation';
import SectionContainer from '../components/SectionContainer';

// Styles (always last)
import './ComponentName.css';
```

### **2. Documentation Standards**

**Component Documentation**:
```jsx
/**
 * ComponentName Component
 * 
 * Brief description of component purpose and main functionality.
 * 
 * Features:
 * - List key features and capabilities
 * - Performance optimizations implemented
 * - Accessibility compliance level
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Required prop with description
 * @param {Array} props.items - Optional prop with default value
 * @param {Function} props.onAction - Callback function description
 * @param {string} props.className - Additional CSS classes
 */
```

**Code Comments**:
- Document complex business logic
- Explain non-obvious performance optimizations
- Comment accessibility implementations
- Document browser compatibility workarounds

### **3. File Organization**

**Component File Structure**:
```
ComponentName/
├── ComponentName.jsx          # Main component file
├── ComponentName.css          # Component styles
├── ComponentName.test.jsx     # Component tests
├── index.js                   # Barrel export
└── README.md                  # Component documentation
```

**Naming Conventions**:
- **Components**: PascalCase (`FloatingNavigation`)
- **Files**: Match component name (`FloatingNavigation.jsx`)
- **CSS Classes**: kebab-case (`floating-navigation`)
- **Functions**: camelCase (`handleNavigation`)

---

## 🛡️ **Error Handling**

### **1. Error Boundary Implementation**

**Error Boundary Component**:
```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Log to error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Something went wrong</h2>
          <p>Please refresh the page or try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### **2. Graceful Degradation**

**Feature Detection**:
```jsx
// Check for browser API support
const supportsIntersectionObserver = 'IntersectionObserver' in window;

// Provide fallbacks
if (!supportsIntersectionObserver) {
  // Use scroll event fallback
}
```

**Loading States**:
```jsx
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

// Handle async operations
useEffect(() => {
  fetchData()
    .then(setData)
    .catch(setError)
    .finally(() => setLoading(false));
}, []);

if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;
```

### **3. User-Friendly Error Messages**

**Error Message Guidelines**:
- Provide clear, actionable error messages
- Avoid technical jargon in user-facing errors
- Offer recovery options when possible
- Log detailed errors for debugging

---

## 🔒 **Security Considerations**

### **1. Content Security Policy**

**CSP Implementation**:
```html
<!-- In index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' clarity.ms;
               style-src 'self' 'unsafe-inline';
               img-src 'self' data: https:;">
```

### **2. Data Sanitization**

**Input Sanitization**:
```jsx
// Sanitize user input
const sanitizeInput = (input) => {
  return input.replace(/[<>]/g, '');
};

// Use dangerouslySetInnerHTML carefully
const SafeHtmlContent = ({ content }) => {
  const sanitizedContent = DOMPurify.sanitize(content);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
};
```

### **3. Dependency Management**

**Security Practices**:
- Regularly audit dependencies with `npm audit`
- Keep dependencies updated to latest secure versions
- Review third-party package security before adding
- Use exact version pinning for production builds

---

## 🔄 **Maintenance Guidelines**

### **1. Regular Maintenance Tasks**

**Weekly Tasks**:
- Review and address any new security vulnerabilities
- Check for dependency updates
- Monitor application performance metrics
- Review error logs and user feedback

**Monthly Tasks**:
- Update dependencies to latest stable versions
- Review and update documentation
- Analyze user behavior data and optimize accordingly
- Conduct accessibility audits

### **2. Version Control Practices**

**Commit Message Format**:
```
type(scope): brief description

Longer description if needed

- List any breaking changes
- Reference issue numbers
```

**Branch Strategy**:
- `main`: Production-ready code
- `develop`: Integration branch for features
- `feature/*`: Individual feature development
- `hotfix/*`: Critical production fixes

### **3. Performance Monitoring**

**Key Metrics to Track**:
- **Core Web Vitals**: LCP, FID, CLS
- **Bundle Size**: Monitor for bloat
- **Test Coverage**: Maintain 80%+ coverage
- **User Engagement**: Section usage analytics

**Monitoring Tools**:
- Microsoft Clarity for user behavior
- Chrome DevTools for performance profiling
- GitHub Actions for automated testing
- Bundle analyzer for asset optimization

---

## 📚 **Additional Resources**

### **Documentation References**
- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
- [Vitest Documentation](https://vitest.dev)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### **Design System Resources**
- [GitHub Design System](https://primer.style/)
- [Material Design Guidelines](https://material.io/design)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### **Performance Resources**
- [Web Vitals](https://web.dev/vitals/)
- [React Performance](https://react.dev/learn/render-and-commit)
- [Bundle Analysis](https://vitejs.dev/guide/build.html#build-optimizations)

---

## 🤝 **Contributing Guidelines**

### **For AI Agents**
1. **Always reference this guide** before making code changes
2. **Follow established patterns** rather than introducing new approaches
3. **Maintain consistency** with existing component and style structures
4. **Test thoroughly** using the established testing patterns
5. **Document changes** following the JSDoc standards

### **For Human Developers**
1. **Read this guide completely** before contributing
2. **Follow code style guidelines** and maintain consistency
3. **Write comprehensive tests** for new features
4. **Update documentation** when adding new patterns
5. **Consider accessibility** in all implementations

---

*This document should be updated whenever significant architectural changes or new patterns are introduced to the codebase.*

**Last Updated**: June 25, 2025  
**Next Review**: July 25, 2025
