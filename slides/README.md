# Above Security Slides Documentation

## Overview
This presentation system is a sophisticated React-based slideshow featuring 11 slides that showcase Above Security's insider protection platform. Built with Next.js and Framer Motion, it delivers a smooth, professional presentation experience with advanced navigation and visual effects.

## Architecture

### Core Structure
```
pages/slides.jsx          # Main presentation controller
components/slides/        # Individual slide components
├── Slide1-10.jsx        # Content slides
├── SlideStatistics.jsx # Market data slide
├── SlideLayout.jsx      # Base template
└── Supporting components (Badge, TileCard, etc.)
```

### Slide Inventory (11 Total)
1. **Slide1**: Title slide - "Insider Protection Platform"
2. **Slide2**: Problem statement - "The gap between access and action"
3. **SlideStatistics**: Market reality - "$17.4M annual insider risk cost"
4. **Slide3-10**: Product features and capabilities
5. **Slide11**: Final slide (referenced in navigation)

## Design System

### Brand Colors (Above Palette)
```css
Rose:     #FFB5CA - Empathy & Protection
Peach:    #FFBAA0 - Warmth & Trust  
Blue:     #B0D5FF - Technology & Clarity
Lavender: #D8C9FF - Innovation & Insight
Cream:    #FFFAF8 - Base backgrounds
White:    #FFF5F0 - Light backgrounds
```

### Visual Effects

#### Glass Morphism
```css
background: rgba(255, 255, 255, 0.75);
backdrop-filter: blur(16px) saturate(1.1);
border: 1px solid rgba(255, 255, 255, 0.4);
box-shadow: 
  0 20px 40px rgba(0, 0, 0, 0.08),
  0 0 80px rgba(255, 182, 193, 0.2);
```

#### Grainy Gradients
- SVG turbulence filters for organic texture
- `baseFrequency: 0.65-0.95` for grain density
- Overlay blend mode at 30-60% opacity
- Applied to backgrounds and accent panels

#### Soft Shadows
```css
soft:    0 12px 45px -20px rgba(2,6,23,0.25)
soft-sm: 0 4px 15px -8px rgba(2,6,23,0.15)
soft-lg: 0 20px 60px -30px rgba(2,6,23,0.30)
```

## Component Patterns

### SlideLayout
Base template providing:
- Consistent padding (small/default/large)
- Slide numbering
- Title/subtitle headers
- Centered content option
- Animation coordination

### Reusable Components

#### GlassPanel
```jsx
<GlassPanel className="p-8">
  {/* Glass morphism container */}
</GlassPanel>
```

#### UnderlinedGradientText
```jsx
<UnderlinedGradientText 
  gradientClass="bg-gradient-to-r from-above-rose-600 to-above-peach-600"
  underlineGradientClass="bg-gradient-to-r from-above-rose-400 to-above-peach-400"
>
  Important Text
</UnderlinedGradientText>
```

#### Badge System
```jsx
<Badge variant="primary">LLM semantics</Badge>   // Rose
<Badge variant="secondary">In-app protection</Badge> // Lavender
<Badge variant="accent">Minutes to value</Badge>  // Peach
```

#### StatCard
Data visualization cards with:
- Large value display
- Label and description
- Source attribution
- Glass morphism styling
- Hover effects

## Navigation System

### Keyboard Controls
- **Arrow Right / Space**: Next slide
- **Arrow Left**: Previous slide
- **1-9 keys**: Jump to slide 1-9
- **0 key**: Jump to slide 10
- **F key**: Toggle fullscreen/presenter mode
- **ESC**: Exit presenter mode

### Visual Navigation
- Dot indicators at bottom
- Active slide highlighted with expanded pill
- Click dots to jump to specific slides
- Invisible side click zones for prev/next

### Modes
- **Standard Mode**: Shows header, slide numbers, navigation dots
- **Presenter Mode**: Fullscreen, minimal UI, keyboard hints

## Animation Strategy

### Framer Motion Animations
```jsx
// Slide transitions
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.3, ease: "easeInOut" }}

// Content reveals
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: stagger }}
```

### Staggered Reveals
- Headers appear first
- Content cards stagger in sequence
- Delays: 0.2s increments typically
- Smooth easing functions

## Responsive Design

### Breakpoints
- Mobile: Default styles
- Tablet: `md:` prefix (768px+)
- Desktop: `lg:` prefix (1024px+)

### Typography Scaling
```jsx
text-3xl md:text-4xl lg:text-5xl  // Titles
text-xl md:text-2xl lg:text-3xl   // Subtitles
text-sm md:text-base              // Body text
```

### Layout Adaptations
- Grid columns collapse on mobile
- Padding adjusts per viewport
- Font sizes scale appropriately
- Touch-friendly tap targets

## Key Slide Patterns

### Title Slides (Slide1)
- Large branded logo
- Gradient text effects
- Badge highlights
- Bullet point lists

### Data Slides (SlideStatistics)
- Grid of StatCards
- ThreatCards with percentages
- Cost breakdowns
- Source citations

### Comparison Slides (Slide2)
- Side-by-side panels
- Good/bad bullet points
- Visual timeline
- Gap visualization

## Performance Optimizations

### Code Splitting
- Individual slide components
- Lazy loading with dynamic imports
- AnimatePresence for smooth transitions

### Visual Performance
- CSS gradients over images
- SVG patterns for textures
- Optimized blur effects
- Hardware-accelerated transforms

### Bundle Optimization
- Tailwind CSS purging
- Component reuse
- Minimal dependencies
- Efficient animation library

## Email Gate Integration
The presentation is protected by an email gate (`EmailGate` component) that requires user registration before viewing. This enables:
- Lead capture
- Analytics tracking
- Access control
- Follow-up capabilities

## Development Guidelines

### Adding New Slides
1. Create component in `components/slides/SlideN.jsx`
2. Import in `pages/slides.jsx`
3. Add to slides array
4. Follow existing animation patterns
5. Use design system tokens

### Styling Best Practices
- Use Tailwind utilities first
- Apply Above brand colors
- Maintain consistent spacing
- Follow glass morphism patterns
- Add appropriate shadows

### Animation Guidelines
- Keep transitions under 0.5s
- Use staggered delays sparingly
- Prefer opacity/transform animations
- Test on slower devices
- Respect prefers-reduced-motion

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS backdrop-filter for glass effects
- Fallbacks for older browsers
- Touch device support
- Keyboard accessibility

## Maintenance Notes
- Slide count hardcoded in UI (update if adding slides)
- Brand colors defined in Tailwind config
- Glass effects in gradients.css
- Animation timings in component files
- Navigation logic in slides.jsx

## Future Enhancements
- [ ] Dynamic slide loading from CMS
- [ ] Speaker notes support
- [ ] Export to PDF functionality
- [ ] Slide thumbnails overview
- [ ] Timer/progress indicator
- [ ] Remote control support
- [ ] Offline mode with service worker