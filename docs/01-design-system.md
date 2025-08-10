# Above Design System

## Overview
The Above design system is built on principles of clarity, subtle sophistication, and contextual awareness. It emphasizes restraint and professionalism through minimal use of color, subtle effects, and clear information hierarchy.

## Core Principles

### 1. **Clarity Through Hierarchy**
- Information is presented in clear visual layers
- Typography scales consistently from hero to micro text
- Color usage is intentional and minimal

### 2. **Subtle Sophistication**
- Minimal use of visual effects for maximum clarity
- Animations are functional, not decorative
- Borders and shadows are extremely light
- Brand colors used sparingly as accents only

### 3. **Contextual Awareness**
- Components adapt to their container and content
- Responsive design that maintains hierarchy across devices
- Motion responds to user scroll and interaction patterns

## Design Tokens

### Colors

#### Brand Palette (Use Sparingly)
```css
/* Subtle Brand Accents - Use with extreme restraint */
--above-rose-200: #FFE0EC;     /* Very subtle rose accent */
--above-peach-200: #FFD4C4;    /* Very subtle peach accent */
--above-blue-200: #D4E9FF;     /* Very subtle blue accent */
--above-lavender-200: #E0D4FF; /* Very subtle lavender accent */

/* Primary UI Colors - Use as main palette */
--slate-900: #0f172a;  /* Primary text, buttons */
--slate-800: #1e293b;  /* Secondary text */
--slate-700: #334155;  /* Tertiary text */
--slate-600: #475569;  /* Body text */
--slate-200: #e2e8f0;  /* Borders */
--white: #ffffff;      /* Backgrounds */
```

#### Semantic Colors
```css
/* Text */
--text-primary:   #0f172a;  /* Main content (slate-900) */
--text-secondary: #1e293b;  /* Supporting text (slate-800) */
--text-tertiary:  #334155;  /* Metadata (slate-700) */
--text-body:      #475569;  /* Body text (slate-600) */
--text-muted:     #64748b;  /* Disabled (slate-500) */

/* Backgrounds */
--bg-primary:   #ffffff;    /* Main surfaces */
--bg-secondary: #FFFAF8;    /* Subtle cream background */
--bg-tertiary:  #f8fafc;    /* Alternate sections (slate-50) */

/* Borders */
--border-default: #e2e8f0;  /* Standard borders (slate-200) */
--border-light:   rgba(0,0,0,0.05);  /* Very subtle borders */
```

### Typography

#### Type Scale
```css
/* Display */
--text-6xl: 3.75rem; /* 60px - Hero only (reduced) */
--text-5xl: 3rem;    /* 48px - Main headline */
--text-4xl: 2.25rem; /* 36px - Section titles */
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
--font-bold:     700;  /* Primary headings only */
--font-semibold: 600;  /* Section headers */
--font-medium:   500;  /* Buttons, labels */
--font-normal:   400;  /* Body text */
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
/* Elevation Levels - Keep subtle */
--shadow-sm:   0 1px 2px rgba(0,0,0,0.05);
--shadow:      0 1px 3px rgba(0,0,0,0.1);
--shadow-md:   0 4px 6px -1px rgba(0,0,0,0.1);
--shadow-lg:   0 10px 15px -3px rgba(0,0,0,0.1);
```

## Glass Morphism System

### Glass Panel Variants

#### Subtle Glass (Primary)
```css
.glass-subtle {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(226, 232, 240, 1); /* slate-200 */
}
```

#### Light Glass (Secondary)
```css
.glass-light {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(226, 232, 240, 0.5);
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
- Minimal Y-axis lift (-1px to -2px max)
- Subtle color transitions instead of shadow changes
- Duration: 200ms with ease-out
- Focus on color and opacity changes over movement

#### Ambient Motion (Use Very Sparingly)
- Floating elements with 8-12s loops
- Extremely subtle scale changes (1-3% max)
- Minimal rotation (0-8 degrees max)
- Only for decorative background elements, never content

## Gradient System

### Brand Gradients

#### Subtle Background Gradient (Use Sparingly)
```css
.gradient-subtle {
  background: 
    radial-gradient(ellipse at top left, rgba(255, 224, 236, 0.15), transparent 50%),
    radial-gradient(ellipse at bottom right, rgba(212, 233, 255, 0.12), transparent 50%),
    linear-gradient(135deg, #FFFAF8 0%, #FFF5F0 100%);
}
```

#### Very Light Gradient (For large areas)
```css
.gradient-light {
  background: 
    radial-gradient(ellipse at top left, rgba(255, 224, 236, 0.08), transparent 50%),
    linear-gradient(135deg, #FFFFFF 0%, #FFFAF8 100%);
}
```

#### No Gradients on Interactive Elements
```css
/* Buttons and interactive elements should use solid colors */
.button-primary {
  background: #0f172a; /* slate-900 */
  color: white;
}

.button-secondary {
  background: white;
  border: 1px solid #e2e8f0; /* slate-200 */
  color: #334155; /* slate-700 */
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