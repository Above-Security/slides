# CSS Refactoring Analysis & Strategy

## Current Structure Analysis

The `App.css` file (2845 lines) contains the following major sections:

### 1. **Base Styles** (Lines 1-22)
- Font imports (`@import` for Google Fonts)
- Global reset (`*` selector)
- Body styles
- **Rationale for extraction**: These are foundational styles that should be loaded first

### 2. **Layout Components** (Lines 23-217)
- `.presentation-container` - Main layout wrapper
- `.presentation-controls` - Top navigation bar
- `.navigation-controls` - Button groups
- `.menu-overlay` and `.menu-content` - Modal menu system
- **Rationale for extraction**: These define the core layout structure

### 3. **Component Styles** (Lines 218-1537)
- Slide headers and titles
- Brand styling with animations
- Content sections (key points, executive summary)
- Card components (landscape, platform, case study)
- Detection scenarios and deployment sections
- **Rationale for extraction**: These are reusable UI components

### 4. **Utility Styles** (Lines 1538-2845)
- Logo watermark positioning
- Responsive design breakpoints
- Animation keyframes
- Competitive landscape specific styles
- **Rationale for extraction**: These are utility classes and responsive overrides

## Proposed Directory Structure

```
src/
└── styles/
    ├── base/
    │   ├── reset.css          # Global reset and box-sizing
    │   ├── typography.css     # Font imports and text styles
    │   └── variables.css      # CSS custom properties (colors, spacing)
    ├── layout/
    │   ├── presentation.css   # Main container and layout
    │   ├── controls.css       # Navigation and menu controls
    │   └── grid.css          # Grid systems and layouts
    ├── components/
    │   ├── buttons.module.css # Button variants
    │   ├── cards.module.css   # Card components
    │   ├── menu.module.css    # Menu and overlay components
    │   └── slides.module.css  # Slide-specific components
    ├── animations/
    │   └── keyframes.css      # All @keyframes definitions
    └── utils/
        ├── responsive.css     # Media queries and breakpoints
        └── utilities.css      # Utility classes
```

## First Incremental Step: Extract Base Styles

**Why start with base styles?**
1. **Foundation First**: Base styles are the foundation that other styles depend on
2. **Low Risk**: These styles are unlikely to break existing functionality
3. **Clear Boundaries**: Easy to identify what belongs in base vs. components
4. **Immediate Benefit**: Separates global styles from component-specific ones

### Step 1 Details:

**Extract to `src/styles/base/`:**
1. **`variables.css`** - Define CSS custom properties for colors, spacing, fonts
2. **`reset.css`** - Global reset and box-sizing rules
3. **`typography.css`** - Font imports and base typography styles

**Benefits:**
- Centralizes design tokens (colors, spacing) for consistency
- Makes global styles explicit and manageable
- Enables easy theming through CSS custom properties
- Follows Vite's recommendation for explicit imports

**Files to create:**
- `src/styles/base/variables.css` (new CSS custom properties)
- `src/styles/base/reset.css` (extracted global reset)
- `src/styles/base/typography.css` (extracted font imports and base text)
- Update `src/App.css` to import these files

This approach ensures we can test each step and maintain functionality while progressively organizing the codebase.

