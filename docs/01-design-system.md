# Above Design System

## Overview
The Above design system is built on principles of clarity, subtle sophistication, and contextual awareness. It combines glassmorphism effects with careful typography and motion to create an interface that feels both advanced and approachable.

## Core Principles

### 1. **Clarity Through Hierarchy**
- Information is presented in clear visual layers
- Typography scales consistently from hero to micro text
- Color usage is intentional and minimal

### 2. **Subtle Sophistication**
- Glass effects create depth without distraction
- Animations enhance understanding, not decoration
- Borders and shadows are light but purposeful

### 3. **Contextual Awareness**
- Components adapt to their container and content
- Responsive design that maintains hierarchy across devices
- Motion responds to user scroll and interaction patterns

## Design Tokens

### Colors

#### Brand Palette
```css
/* Primary Brand Colors */
--brand-50:  #f5f7ff;  /* Lightest - backgrounds */
--brand-100: #eef1ff;  /* Light - hover states */
--brand-200: #dfe4ff;  /* Light accent */
--brand-300: #c9d1ff;  /* Medium light */
--brand-400: #a7b2ff;  /* Medium - secondary actions */
--brand-500: #8a95ff;  /* Primary brand color */
--brand-600: #6c78f7;  /* Primary dark */
--brand-700: #515cda;  /* Dark - active states */
--brand-800: #3842b1;  /* Very dark - headers */
--brand-900: #2e378f;  /* Darkest - high contrast */
```

#### Semantic Colors
```css
/* Text */
--text-primary:   slate-900;  /* Main content */
--text-secondary: slate-700;  /* Supporting text */
--text-tertiary:  slate-600;  /* Metadata */
--text-muted:     slate-500;  /* Disabled/placeholder */

/* Backgrounds */
--bg-primary:   white;       /* Main surfaces */
--bg-secondary: slate-50;    /* Alternate sections */
--bg-tertiary:  slate-100;   /* Nested containers */

/* Borders */
--border-default: slate-200;  /* Standard borders */
--border-light:   black/5;    /* Subtle glass borders */
```

### Typography

#### Type Scale
```css
/* Display */
--text-7xl: 7rem;    /* 112px - Hero only */
--text-6xl: 6rem;    /* 96px - Main headline */
--text-5xl: 3rem;    /* 48px - Section titles */
--text-3xl: 1.875rem;/* 30px - Subsections */
--text-2xl: 1.5rem;  /* 24px - Cards */
--text-xl:  1.25rem; /* 20px - Large body */
--text-lg:  1.125rem;/* 18px - Emphasis */
--text-base: 1rem;   /* 16px - Default */
--text-sm:  0.875rem;/* 14px - Body text */
--text-xs:  0.75rem; /* 12px - Labels */
--text-tiny: 0.6875rem; /* 11px - Micro */
```

#### Font Weights
```css
--font-black:    900;  /* Hero headlines */
--font-bold:     700;  /* Strong emphasis */
--font-semibold: 600;  /* Section headers */
--font-medium:   500;  /* Interactive elements */
--font-normal:   400;  /* Body text */
--font-light:    300;  /* Subtle text */
```

### Spacing

#### Base Scale
```css
--space-0:  0;
--space-1:  0.25rem;  /* 4px */
--space-2:  0.5rem;   /* 8px */
--space-3:  0.75rem;  /* 12px */
--space-4:  1rem;     /* 16px */
--space-5:  1.25rem;  /* 20px */
--space-6:  1.5rem;   /* 24px */
--space-7:  1.75rem;  /* 28px */
--space-8:  2rem;     /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
```

### Border Radius
```css
--radius-sm:   0.125rem;  /* 2px - Subtle */
--radius-md:   0.375rem;  /* 6px - Default */
--radius-lg:   0.5rem;    /* 8px - Cards */
--radius-xl:   0.75rem;   /* 12px - Panels */
--radius-2xl:  1rem;      /* 16px - Large cards */
--radius-3xl:  1.5rem;    /* 24px - Hero elements */
--radius-full: 9999px;    /* Pills and circles */
```

### Shadows
```css
/* Elevation Levels */
--shadow-xs:   0 1px 2px rgba(0,0,0,0.05);
--shadow-sm:   0 2px 4px rgba(0,0,0,0.07);
--shadow-md:   0 4px 8px rgba(0,0,0,0.10);
--shadow-lg:   0 8px 16px rgba(0,0,0,0.12);
--shadow-xl:   0 12px 24px rgba(0,0,0,0.15);
--shadow-soft: 0 12px 45px -20px rgba(2,6,23,0.25);
```

## Glass Morphism System

### Glass Panel Variants

#### Light Glass (Default)
```css
.glass-light {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.05);
}
```

#### Strong Glass
```css
.glass-strong {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.08);
}
```

#### Colored Glass
```css
.glass-brand {
  background: linear-gradient(
    135deg,
    rgba(138, 149, 255, 0.1),
    rgba(255, 255, 255, 0.7)
  );
  backdrop-filter: blur(16px);
  border: 1px solid rgba(138, 149, 255, 0.2);
}
```

## Motion Guidelines

### Animation Durations
```css
--duration-instant: 100ms;  /* Micro interactions */
--duration-fast:    200ms;  /* Hover states */
--duration-normal:  300ms;  /* Standard transitions */
--duration-slow:    500ms;  /* Complex animations */
--duration-slower:  800ms;  /* Page transitions */
```

### Easing Functions
```css
--ease-out:     cubic-bezier(0.0, 0, 0.2, 1);
--ease-in-out:  cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Motion Patterns

#### Entrance Animations
- Elements fade in with subtle upward movement
- Stagger delays create cascading reveals
- Duration: 400-600ms with ease-out

#### Scroll Animations
- Parallax effects use 0-40px transforms
- Opacity scales from 0.35 to 1
- Tied to scroll progress for smooth feel

#### Hover Interactions
- Subtle Y-axis lift (-2px)
- Shadow enhancement for depth
- Duration: 200ms with ease-out

#### Ambient Motion
- Floating elements with 6-10s loops
- Subtle scale and rotation changes
- Creates life without distraction

## Gradient System

### Brand Gradients

#### Primary Gradient
```css
.gradient-primary {
  background: linear-gradient(
    135deg,
    #a78bfa,  /* violet-400 */
    #22d3ee   /* cyan-400 */
  );
}
```

#### Extended Gradient
```css
.gradient-extended {
  background: linear-gradient(
    135deg,
    #a78bfa,     /* violet-400 */
    #22d3ee,     /* cyan-400 */
    transparent
  );
}
```

#### Subtle Background
```css
.gradient-subtle {
  background: radial-gradient(
    circle at center,
    rgba(167, 139, 250, 0.15),
    transparent 70%
  );
}
```

## Responsive System

### Breakpoints
```css
--screen-sm: 640px;   /* Mobile landscape */
--screen-md: 768px;   /* Tablet */
--screen-lg: 1024px;  /* Desktop */
--screen-xl: 1280px;  /* Wide desktop */
--screen-2xl: 1536px; /* Ultra wide */
```

### Container Widths
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1152px; /* Primary max-width */
```

### Responsive Patterns
1. **Mobile-first approach** - Base styles for mobile, enhance for desktop
2. **Typography scaling** - Consistent size increases at md breakpoint
3. **Grid adaptation** - Single column to multi-column layouts
4. **Spacing progression** - Padding and margins scale with viewport

## Accessibility Considerations

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Focus States
- All interactive elements have visible focus indicators
- Focus rings use brand colors for consistency
- Keyboard navigation follows logical flow

### Color Contrast
- Text maintains WCAG AA compliance
- Interactive elements have distinct hover/active states
- Glass effects tested against various backgrounds