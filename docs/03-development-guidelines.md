# Development Guidelines

## Getting Started

### Prerequisites
- Node.js 18+ and npm 9+
- Git for version control
- Modern browser for testing
- Code editor with ESLint support

### Initial Setup
```bash
# Clone the repository
git clone https://github.com/above/above.github.io.git
cd above.github.io

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Project Structure
```
above.github.io/
├── components/          # React components
│   ├── primitives/     # Base UI components
│   ├── timeline/       # Timeline-specific components
│   └── nudge/          # Nudge system components
├── pages/              # Next.js pages
│   ├── _app.js        # App wrapper
│   └── index.jsx      # Homepage
├── public/             # Static assets
│   ├── favicon.svg    # Site favicon
│   └── CNAME          # GitHub Pages domain
├── styles/             # Global styles
│   └── globals.css    # Tailwind imports
├── lib/                # Utilities and constants
│   └── constants.js   # Shared constants
└── docs/               # Documentation
```

## Code Style Guide

### React Components

#### Component Structure
```jsx
"use client"; // If using client-side features

// 1. Imports - grouped and ordered
import React from "react";
import { motion } from "framer-motion";
import ComponentName from "../ComponentName";

// 2. Type definitions (if using TypeScript)
interface Props {
  // ...
}

// 3. Component definition
export default function ComponentName({ prop1, prop2 }) {
  // 4. Hooks first
  const [state, setState] = useState();
  const ref = useRef();
  
  // 5. Computed values
  const computedValue = useMemo(() => {}, []);
  
  // 6. Effects
  useEffect(() => {}, []);
  
  // 7. Handlers
  const handleClick = () => {};
  
  // 8. Render
  return (
    <div>
      {/* Component JSX */}
    </div>
  );
}
```

#### Naming Conventions
- **Components:** PascalCase (e.g., `SceneCard`, `GlassPanel`)
- **Props:** camelCase (e.g., `showTitle`, `isActive`)
- **Files:** Match component name (e.g., `SceneCard.jsx`)
- **Hooks:** Start with "use" (e.g., `useScrollProgress`)
- **Event handlers:** Start with "handle" (e.g., `handleSubmit`)
- **Boolean props:** Start with "is", "has", "should" (e.g., `isLoading`)

### CSS and Styling

#### Tailwind Classes Order
Follow this order for consistency:
1. Layout (display, position)
2. Spacing (margin, padding)
3. Sizing (width, height)
4. Typography (font, text)
5. Visual (background, border)
6. Effects (shadow, transform)
7. Interactions (hover, focus)
8. Responsive (sm:, md:, lg:)

```jsx
<div className="
  relative flex 
  px-6 py-4 
  w-full max-w-4xl 
  text-lg font-semibold 
  bg-white border border-slate-200 rounded-xl 
  shadow-soft 
  hover:shadow-lg transition-shadow 
  md:px-8 md:py-6
">
```

#### Custom CSS Guidelines
- Avoid inline styles except for dynamic values
- Use CSS modules for component-specific styles
- Keep global styles minimal
- Prefer Tailwind utilities over custom CSS

### Animation Guidelines

#### Framer Motion Patterns
```jsx
// 1. Simple hover animation
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
/>

// 2. Scroll-triggered animation
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

<motion.div style={{ y }}>
  Parallax content
</motion.div>

// 3. Staggered children
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  }}
>
  {items.map(item => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    />
  ))}
</motion.div>
```

#### Performance Best Practices
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Avoid animating `width`, `height`, or `top/left`
- Add `will-change` for complex animations
- Use `useReducedMotion` hook for accessibility

## State Management

### Local State Patterns
```jsx
// Simple state
const [isOpen, setIsOpen] = useState(false);

// Complex state with reducer
const [state, dispatch] = useReducer(reducer, initialState);

// Derived state
const filteredItems = useMemo(
  () => items.filter(item => item.active),
  [items]
);
```

### Context Usage
```jsx
// Create context
const ThemeContext = createContext();

// Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

## Performance Optimization

### Component Optimization
```jsx
// 1. Memoize expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Complex render */}</div>;
});

// 2. Optimize callbacks
const handleClick = useCallback(() => {
  // Handler logic
}, [dependency]);

// 3. Lazy load components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>
```

### Image Optimization
```jsx
import Image from 'next/image';

<Image
  src="/hero-image.jpg"
  alt="Description"
  width={1200}
  height={600}
  priority={false} // true for above-fold images
  placeholder="blur"
  blurDataURL={shimmerBase64}
/>
```

### Bundle Optimization
- Use dynamic imports for large dependencies
- Tree-shake unused code
- Analyze bundle with `npm run analyze`
- Keep dependencies up-to-date

## Testing Strategy

### Component Testing
```jsx
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('handles click', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalled();
  });
});
```

### Visual Testing
- Test at multiple breakpoints (375px, 768px, 1440px)
- Verify animations and transitions
- Check loading and error states
- Test with keyboard navigation
- Verify focus management

## Accessibility Standards

### ARIA Guidelines
```jsx
// Proper button
<button
  aria-label="Close dialog"
  aria-pressed={isPressed}
  onClick={handleClose}
>
  <CloseIcon aria-hidden="true" />
</button>

// Accessible form
<label htmlFor="email" className="sr-only">
  Email address
</label>
<input
  id="email"
  type="email"
  required
  aria-describedby="email-error"
/>
{error && (
  <span id="email-error" role="alert">
    {error}
  </span>
)}
```

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Use proper focus indicators
- Implement focus trapping for modals
- Support Escape key for dismissible elements

### Screen Reader Support
- Use semantic HTML elements
- Provide alternative text for images
- Use ARIA labels for icon buttons
- Announce dynamic content changes

## Git Workflow

### Branch Naming
- `feature/component-name` - New features
- `fix/issue-description` - Bug fixes
- `docs/section-name` - Documentation
- `refactor/component-name` - Code refactoring

### Commit Messages
```bash
# Format: type(scope): description

feat(timeline): add scroll animations
fix(hero): correct mobile padding
docs(components): update usage examples
style(global): format with prettier
refactor(dashboard): optimize render logic
test(button): add interaction tests
```

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Components render correctly
- [ ] Animations work smoothly
- [ ] Mobile responsive
- [ ] Keyboard accessible
- [ ] No console errors

## Screenshots
[Attach relevant screenshots]
```

## Deployment

### Production Build
```bash
# Build and analyze
npm run build
npm run analyze # Check bundle size

# Test production build locally
npm run start
```

### Pre-deployment Checklist
- [ ] All tests passing
- [ ] No console errors or warnings
- [ ] Images optimized
- [ ] SEO meta tags updated
- [ ] Accessibility audit passed
- [ ] Performance metrics acceptable
- [ ] CNAME file in place for custom domain

### GitHub Pages Deployment
The site automatically deploys to GitHub Pages when changes are pushed to the main branch. The build output in `/dist` is served at the configured domain.

## Debugging Tips

### Common Issues

#### Hydration Errors
- Ensure consistent rendering between server and client
- Avoid using `window` or `document` in initial render
- Use `useEffect` for client-only code

#### Animation Jank
- Use transform instead of position properties
- Enable GPU acceleration with `will-change`
- Reduce animation complexity on mobile

#### Build Failures
- Clear cache: `rm -rf .next node_modules`
- Reinstall dependencies: `npm clean-install`
- Check for circular dependencies
- Verify environment variables

### Performance Profiling
```jsx
// Measure component render time
import { Profiler } from 'react';

<Profiler
  id="ComponentName"
  onRender={(id, phase, actualDuration) => {
    console.log(`${id} (${phase}) took ${actualDuration}ms`);
  }}
>
  <Component />
</Profiler>
```

## Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### Tools
- [Tailwind Play](https://play.tailwindcss.com/) - Test Tailwind classes
- [Motion DevTools](https://www.framer.com/motion/devtools/) - Debug animations
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audit
- [WAVE](https://wave.webaim.org/) - Accessibility evaluation