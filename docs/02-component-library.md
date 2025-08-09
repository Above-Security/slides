# Component Library

## Overview
The Above component library is organized into primitive components (building blocks) and composed components (feature-complete UI elements). All components follow consistent patterns for props, styling, and animation.

## Primitive Components

### GlassPanel
**Location:** `components/primitives/GlassPanel.jsx`

A foundational component that creates the signature glass morphism effect used throughout the site.

#### Props
```jsx
{
  children: ReactNode,     // Content to display
  className?: string,      // Additional CSS classes
  variant?: 'light' | 'strong' | 'colored', // Glass strength
  animate?: boolean        // Enable entrance animation
}
```

#### Usage
```jsx
<GlassPanel variant="strong" className="p-6">
  <h2>Content inside glass panel</h2>
</GlassPanel>
```

#### Styling Guidelines
- Always include padding when using GlassPanel
- Ensure sufficient contrast between content and background
- Use `variant="strong"` for primary content areas
- Apply rounded corners with `rounded-xl` or `rounded-2xl`

### TimePill
**Location:** `components/primitives/TimePill.jsx`

A small status indicator showing time or status information with an animated gradient dot.

#### Props
```jsx
{
  time: string,           // Time string to display
  status?: 'active' | 'inactive' | 'pending', // Dot color
  showDot?: boolean,      // Show/hide status dot
  size?: 'sm' | 'md'     // Component size
}
```

#### Usage
```jsx
<TimePill 
  time="Mon 9:12 AM" 
  status="active"
  showDot={true}
/>
```

#### Best Practices
- Use for timestamps in timelines and activity logs
- Keep time strings concise (use abbreviated formats)
- Status dot should reflect real-time state

### UIChrome
**Location:** `components/primitives/UIChrome.jsx`

Simulates a browser or application window with title bar and window controls.

#### Props
```jsx
{
  title: string,          // Window title
  subtitle?: string,      // Additional context
  children: ReactNode,    // Window content
  variant?: 'browser' | 'app' | 'terminal', // Chrome style
  showControls?: boolean  // Show minimize/maximize/close
}
```

#### Usage
```jsx
<UIChrome title="CRM Dashboard" variant="browser">
  <div className="p-4">
    {/* Application content */}
  </div>
</UIChrome>
```

#### Design Notes
- Use to showcase application interfaces
- Maintains consistent window styling across demos
- Content area should have its own padding

## Composed Components

### Hero
**Location:** `components/Hero.jsx`

The main landing section with parallax scrolling effects and CTAs.

#### Structure
```jsx
<Hero>
  <Hero.Badge />        {/* Optional announcement */}
  <Hero.Title />        {/* Main headline */}
  <Hero.Description />  {/* Supporting text */}
  <Hero.Features />     {/* Feature list */}
  <Hero.Actions />      {/* CTA buttons */}
</Hero>
```

#### Animation Patterns
- Title fades in with staggered word animation
- Background elements have parallax scroll
- CTAs have hover lift effects

#### Responsive Behavior
- Mobile: Single column, reduced font sizes
- Desktop: Centered content with max-width constraint
- Breakpoint: md (768px)

### UnifiedDashboard
**Location:** `components/UnifiedDashboard.jsx`

Complex data visualization component with skeleton loading states.

#### Props
```jsx
{
  data?: DashboardData,   // Dashboard data object
  loading?: boolean,      // Show skeleton state
  compact?: boolean,      // Reduced spacing mode
  onAction?: Function     // Handle user interactions
}
```

#### Features
- Animated skeleton loading states
- Responsive grid layout
- Interactive hover states on data points
- Real-time update animations

#### Usage Guidelines
- Always provide loading state for async data
- Use compact mode in sidebars or small containers
- Ensure data updates trigger smooth transitions

### NudgeToast
**Location:** `components/nudge/NudgeToast.jsx`

Interactive notification component for contextual guidance.

#### Props
```jsx
{
  title: string,          // Toast header
  message: string | ReactNode, // Main content
  actions?: Array<{       // Action buttons
    label: string,
    onClick: Function,
    variant: 'primary' | 'secondary'
  }>,
  icon?: ReactNode,       // Optional icon
  dismissible?: boolean   // Show close button
}
```

#### Animation Behavior
- Slides in from top with fade
- Auto-dismisses after 6 seconds (configurable)
- Exit animation on dismiss
- Stacks multiple toasts vertically

#### Best Practices
- Keep messages concise and actionable
- Provide clear CTA buttons
- Use appropriate urgency in styling
- Test stacking behavior with multiple toasts

## Timeline Components

### TimelineBox
**Location:** `components/timeline/TimelineBox.jsx`

Container for timeline content with scroll animations.

#### Props
```jsx
{
  children: ReactNode,    // Timeline items
  variant?: 'org' | 'user', // Visual style
  showConnector?: boolean, // Display connecting line
  animated?: boolean      // Enable scroll animations
}
```

#### Structure Pattern
```jsx
<TimelineBox variant="org">
  <SceneCard />
  <Connector />
  <SceneCard />
</TimelineBox>
```

### SceneCard
**Location:** `components/timeline/SceneCard.jsx`

Individual timeline item with rich content display.

#### Props
```jsx
{
  time: string,           // Timestamp
  headline: string,       // Main event description
  sub: string,            // Additional details
  bgKind?: string,        // Background pattern type
  index: number,          // Position in timeline
  total: number           // Total items (for progress)
}
```

#### Animation Features
- Scroll-triggered entrance
- Parallax content movement
- Opacity fade on scroll
- Progress indicator animation

### Connector
**Location:** `components/timeline/Connector.jsx`

Animated line connecting timeline elements.

#### Props
```jsx
{
  progress?: number,      // 0-1 completion value
  gradient?: boolean,     // Use gradient fill
  animated?: boolean,     // Animate on scroll
  orientation?: 'vertical' | 'horizontal'
}
```

#### Visual Patterns
- Gradient fill shows progress
- Dots at connection points
- Smooth curve transitions
- Responsive to container width

## Component Composition Patterns

### Card Pattern
```jsx
<div className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
  <header className="mb-4">
    <h3 className="text-xl font-semibold">Title</h3>
  </header>
  <div className="space-y-3">
    {/* Content */}
  </div>
  <footer className="mt-4 flex gap-3">
    {/* Actions */}
  </footer>
</div>
```

### Section Pattern
```jsx
<section className="px-6 py-12 md:py-16">
  <div className="mx-auto max-w-6xl">
    <header className="mb-8 text-center">
      <h2 className="text-3xl font-semibold md:text-5xl">
        Section Title
      </h2>
      <p className="mt-3 text-slate-600">
        Supporting description
      </p>
    </header>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Grid items */}
    </div>
  </div>
</section>
```

### Interactive Element Pattern
```jsx
<motion.button
  className="rounded-lg bg-slate-900 px-5 py-2.5 text-white"
  whileHover={{ y: -2, boxShadow: "0 12px 30px rgba(2,6,23,.18)" }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.2 }}
>
  Click Me
</motion.button>
```

## State Management Patterns

### Loading States
```jsx
// Skeleton pattern
{loading ? (
  <div className="animate-pulse">
    <div className="h-4 w-3/4 rounded bg-slate-200" />
    <div className="mt-2 h-4 w-1/2 rounded bg-slate-200" />
  </div>
) : (
  <div>{content}</div>
)}
```

### Error States
```jsx
<div className="rounded-lg border border-red-200 bg-red-50 p-4">
  <p className="text-sm text-red-800">
    Error message with helpful context
  </p>
</div>
```

### Empty States
```jsx
<div className="py-12 text-center">
  <Icon className="mx-auto h-12 w-12 text-slate-400" />
  <h3 className="mt-3 text-lg font-medium">No data yet</h3>
  <p className="mt-1 text-sm text-slate-600">
    Get started by adding your first item
  </p>
  <button className="mt-4">Add Item</button>
</div>
```

## Animation Utilities

### Stagger Children
```jsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};
```

### Scroll Progress
```jsx
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"]
});

const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
```

### Presence Animations
```jsx
<AnimatePresence mode="wait">
  {isVisible && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
    >
      Content
    </motion.div>
  )}
</AnimatePresence>
```

## Testing Components

### Visual Testing Checklist
- [ ] Component renders correctly at all breakpoints
- [ ] Animations work with reduced motion preference
- [ ] Focus states are visible and logical
- [ ] Loading and error states display properly
- [ ] Content overflow is handled gracefully

### Interaction Testing
- [ ] All buttons and links are keyboard accessible
- [ ] Hover states work on desktop
- [ ] Touch targets are adequate on mobile (44x44px min)
- [ ] Forms validate and submit correctly
- [ ] Modals trap focus appropriately

### Performance Considerations
- [ ] Images are optimized and lazy-loaded
- [ ] Animations use GPU-accelerated properties
- [ ] Component re-renders are minimized
- [ ] Bundle size impact is reasonable
- [ ] SSR/SSG compatibility is maintained