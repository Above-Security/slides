# Above Brand Guidelines

## Brand Philosophy
Above's visual identity emphasizes trust, clarity, and protection through subtle, sophisticated design. Our approach prioritizes functionality and accessibility while maintaining a distinctive presence.

## Core Principles

### 1. Subtlety Over Aggression
- Use muted, professional color palettes
- Implement gradients sparingly and with low opacity
- Favor clean, minimal interfaces over heavy visual elements
- Maintain high contrast for text readability

### 2. Trust Through Transparency
- Use translucent elements with backdrop blur for depth
- Apply subtle shadows instead of heavy drops
- Implement gentle animations that don't distract
- Keep visual noise to a minimum

### 3. Professional Restraint
- Avoid excessive use of brand colors
- Use neutral grays as primary palette
- Apply brand colors as subtle accents only
- Maintain consistent, understated styling

## Color System

### Primary Palette
```css
--slate-900: #0f172a   /* Primary text */
--slate-800: #1e293b   /* Secondary text */
--slate-700: #334155   /* Tertiary text */
--slate-600: #475569   /* Body text */
--white: #ffffff       /* Background */
--slate-50: #f8fafc    /* Light background */
```

### Brand Accent Colors (Use Sparingly)
```css
--above-rose-200: #FFE0EC     /* Very subtle rose */
--above-peach-200: #FFD4C4    /* Very subtle peach */
--above-blue-200: #D4E9FF     /* Very subtle blue */
--above-lavender-200: #E0D4FF /* Very subtle lavender */
```

### Background Colors
```css
--above-cream: #FFFAF8    /* Primary background */
--above-white: #FFF5F0    /* Secondary background */
```

## Typography

### Font Hierarchy
- **Headings**: Inter, system-ui, sans-serif
- **Body**: Inter, system-ui, sans-serif
- **Monospace**: 'SF Mono', Monaco, monospace

### Size Scale
- **Hero**: 2xl-4xl (32-48px) - Use sparingly
- **Section Headers**: xl-2xl (20-32px)
- **Subsection**: lg-xl (18-20px)
- **Body**: base (16px)
- **Small**: sm (14px)
- **Micro**: xs (12px)

### Weight Guidelines
- **Bold (700)**: Primary headings only
- **Semibold (600)**: Section headers, emphasis
- **Medium (500)**: Buttons, labels
- **Regular (400)**: Body text

## Component Styling

### Buttons
```jsx
// Primary - High contrast, no gradients
className="rounded-xl bg-slate-900 text-white px-5 py-2.5 text-sm font-medium shadow-sm hover:bg-slate-800 transition-colors"

// Secondary - Subtle borders
className="rounded-xl border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-white/90 transition-colors"
```

### Cards & Panels
```jsx
// Standard card
className="rounded-xl border border-slate-200 bg-white/95 backdrop-blur shadow-sm"

// Glass effect (use sparingly)
className="rounded-xl border border-slate-200/50 bg-white/80 backdrop-blur-sm shadow-sm"
```

### Gradients
Use gradients only for:
1. Very subtle background accents (opacity < 30%)
2. Decorative elements that don't interfere with content
3. Never on interactive elements or text

```css
/* Subtle background gradient */
.above-gradient-subtle {
  background: 
    radial-gradient(ellipse at top left, rgba(255, 224, 236, 0.15), transparent 50%),
    radial-gradient(ellipse at bottom right, rgba(212, 233, 255, 0.12), transparent 50%),
    linear-gradient(135deg, #FFFAF8 0%, #FFF5F0 100%);
}
```

## Animation Guidelines

### Performance First
- Use `transform` and `opacity` only
- Keep durations short (200-400ms for micro, 400-800ms for larger)
- Use `ease-out` or `ease-in-out` timing
- Respect `prefers-reduced-motion`

### Subtle Interactions
```jsx
// Hover states
hover:shadow-md hover:translate-y-[-2px] transition-all duration-200

// Focus states
focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:ring-offset-2
```

## Spacing System

Use consistent spacing based on 4px grid:
- `space-1`: 4px
- `space-2`: 8px
- `space-3`: 12px
- `space-4`: 16px
- `space-5`: 20px
- `space-6`: 24px
- `space-8`: 32px
- `space-10`: 40px
- `space-12`: 48px

## Shadow System

Keep shadows subtle and functional:
```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
```

## Accessibility Requirements

### Color Contrast
- Normal text: Minimum 4.5:1 ratio
- Large text: Minimum 3:1 ratio
- Interactive elements: Minimum 3:1 ratio
- Always test with color blindness simulators

### Focus Management
- All interactive elements must have visible focus states
- Use focus rings, not just color changes
- Ensure keyboard navigation is logical

### Motion
- Always respect `prefers-reduced-motion`
- Provide controls for auto-playing content
- Keep essential information static

## Implementation Examples

### Hero Section
```jsx
<header className="relative isolate overflow-hidden above-gradient-subtle">
  <h1 className="text-2xl md:text-4xl font-semibold text-slate-800">
    Insider Protection
  </h1>
  <p className="text-slate-600 md:text-lg">
    Clear, professional messaging without visual noise
  </p>
</header>
```

### Card Component
```jsx
<div className="rounded-xl border border-slate-200 bg-white/95 p-4 shadow-sm">
  <h3 className="text-lg font-semibold text-slate-900">Title</h3>
  <p className="text-sm text-slate-600">Description text</p>
</div>
```

### Interactive Element
```jsx
<button className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-colors">
  Take Action
</button>
```

## Don'ts

- ❌ Heavy gradients on primary UI elements
- ❌ Bright, saturated colors for large areas
- ❌ Multiple competing visual effects
- ❌ Animations longer than 1 second
- ❌ Low contrast text on colored backgrounds
- ❌ Decorative elements that distract from content
- ❌ Inconsistent spacing or alignment
- ❌ Multiple font weights in close proximity

## Brand Voice in Design

- **Professional**: Clean, organized layouts
- **Trustworthy**: Consistent, predictable interactions
- **Protective**: Clear visual hierarchy and guidance
- **Intelligent**: Thoughtful use of space and emphasis
- **Human**: Warm neutrals, not cold or clinical