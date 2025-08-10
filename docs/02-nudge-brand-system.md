# Nudge.png Brand System Analysis

## Visual Elements Breakdown

### 1. Background Gradient
- **Type**: Radial/linear blend gradient
- **Direction**: Top-left to bottom-right diffusion
- **Color Stops**:
  - Top-left: Soft pink/rose (#FFB3C1 approx)
  - Center: Peachy pink blend (#FFD4C9 approx)  
  - Bottom-right: Light peach to white (#FFF5F0 approx)
- **Characteristics**: Soft, diffused edges with no harsh transitions

### 2. Noise & Grain Texture
- **Grain Type**: Fine-grained noise overlay
- **Opacity**: ~30-35% (significant but not overwhelming)
- **Blend Mode**: Overlay or soft-light
- **Pattern**: Organic, non-repeating texture
- **Density**: High frequency, small particle size

### 3. Card/Panel Design
- **Background**: Semi-transparent white (rgba(255,255,255,0.75))
- **Backdrop Filter**: blur(16px) with slight saturation boost
- **Border**: 1px solid rgba(255,255,255,0.4)
- **Border Radius**: 20-24px
- **Shadow**: Multiple layered shadows
  - Primary: 0 20px 40px rgba(0,0,0,0.08)
  - Glow: 0 0 80px rgba(255,182,193,0.2)

### 4. Typography & Colors
- **Title**: Dark gray/black (#1a1a1a)
- **Subtitle**: Medium gray (#4a4a4a)
- **Body**: Slightly lighter gray (#5a5a5a)
- **Warning Icon**: Standard emoji or icon

### 5. Button Styles
- **Primary Button** (Dark):
  - Background: #0f0f0f to #1a1a1a
  - Text: Pure white
  - Border Radius: 8px
  - Padding: 10px 16px
  - No border
  
- **Secondary Button** (Light):
  - Background: rgba(255,255,255,0.9)
  - Border: 1px solid rgba(0,0,0,0.1)
  - Text: #4a4a4a
  - Same radius and padding

### 6. Additional UI Elements
- **Input Field**: 
  - Light gray background with transparency
  - Subtle inset shadow
  - Rounded corners (10px)
- **Bottom Bar Elements**:
  - Semi-transparent overlays
  - Consistent glass morphism

## Implementation Requirements

### CSS Variables Needed
```css
--nudge-gradient-start: #FFB3C1;
--nudge-gradient-mid: #FFD4C9;
--nudge-gradient-end: #FFF5F0;
--nudge-noise-opacity: 0.3;
--nudge-glass-bg: rgba(255,255,255,0.75);
--nudge-glass-border: rgba(255,255,255,0.4);
--nudge-glass-blur: 16px;
--nudge-shadow-primary: 0 20px 40px rgba(0,0,0,0.08);
--nudge-shadow-glow: 0 0 80px rgba(255,182,193,0.2);
```

### Key Implementation Notes
1. Background must be full viewport with gradient
2. Noise texture must overlay entire background
3. All cards need glass morphism treatment
4. Maintain high contrast for text readability
5. Shadows should be soft and layered
6. Keep consistent border radius across similar elements