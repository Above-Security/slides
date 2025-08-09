# Best Practices & Design Patterns

## Design Philosophy

### Core Principles

#### 1. **Progressive Disclosure**
Show only what's necessary at each stage. Details emerge through interaction and scroll.

```jsx
// Bad: Everything visible at once
<Card>
  <Title />
  <Description />
  <Details />
  <Actions />
  <Metadata />
</Card>

// Good: Progressive reveal
<Card>
  <Title />
  <Description />
  <motion.div
    initial={{ height: 0 }}
    animate={{ height: isExpanded ? "auto" : 0 }}
  >
    <Details />
  </motion.div>
  <Actions onClick={() => setIsExpanded(!isExpanded)} />
</Card>
```

#### 2. **Contextual Guidance**
Provide help where and when users need it, not in separate documentation.

```jsx
// Bad: Generic error
<Error>Something went wrong</Error>

// Good: Contextual guidance
<NudgeToast
  title="Permission Required"
  message="This action requires approval from your manager"
  actions={[
    { label: "Request Approval", onClick: handleRequest },
    { label: "Learn Why", onClick: showPolicy }
  ]}
/>
```

#### 3. **Subtle Sophistication**
Effects should enhance understanding, not distract from content.

```jsx
// Bad: Excessive animation
<motion.div
  animate={{ 
    rotate: [0, 360],
    scale: [1, 1.5, 1],
    backgroundColor: ["#fff", "#f00", "#fff"]
  }}
  transition={{ repeat: Infinity }}
/>

// Good: Purposeful motion
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
/>
```

## Component Patterns

### Container Pattern
Separate logic from presentation for reusability.

```jsx
// Container (logic)
function TimelineContainer() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState('all');
  
  const filteredEvents = useMemo(
    () => events.filter(e => filter === 'all' || e.type === filter),
    [events, filter]
  );
  
  return (
    <Timeline 
      events={filteredEvents}
      onFilterChange={setFilter}
    />
  );
}

// Presentational (display)
function Timeline({ events, onFilterChange }) {
  return (
    <div className="space-y-4">
      <FilterBar onChange={onFilterChange} />
      {events.map(event => (
        <SceneCard key={event.id} {...event} />
      ))}
    </div>
  );
}
```

### Compound Component Pattern
Create flexible, composable interfaces.

```jsx
// Define compound components
const Card = ({ children }) => (
  <div className="rounded-xl bg-white p-6">{children}</div>
);

Card.Header = ({ children }) => (
  <header className="mb-4">{children}</header>
);

Card.Body = ({ children }) => (
  <div className="space-y-3">{children}</div>
);

Card.Footer = ({ children }) => (
  <footer className="mt-4 border-t pt-4">{children}</footer>
);

// Usage - flexible composition
<Card>
  <Card.Header>
    <h3>Custom Title</h3>
  </Card.Header>
  <Card.Body>
    <p>Content goes here</p>
  </Card.Body>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

### Render Props Pattern
Share code between components using a prop whose value is a function.

```jsx
// Scroll progress provider
function ScrollProgress({ children }) {
  const { scrollYProgress } = useScroll();
  
  return children(scrollYProgress);
}

// Usage
<ScrollProgress>
  {(progress) => (
    <motion.div
      style={{
        scaleX: progress,
        transformOrigin: "0%"
      }}
      className="h-1 bg-gradient-to-r from-violet-400 to-cyan-400"
    />
  )}
</ScrollProgress>
```

### Custom Hook Pattern
Extract and share component logic.

```jsx
// Custom hook for intersection observer
function useInView(options = {}) {
  const ref = useRef();
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      options
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [options]);
  
  return [ref, isInView];
}

// Usage
function AnimatedSection() {
  const [ref, isInView] = useInView({ threshold: 0.5 });
  
  return (
    <motion.div
      ref={ref}
      animate={{ opacity: isInView ? 1 : 0 }}
    >
      Content appears when in view
    </motion.div>
  );
}
```

## Responsive Design Patterns

### Mobile-First Development
Start with mobile design, enhance for larger screens.

```jsx
// Mobile-first CSS classes
<div className="
  grid grid-cols-1 gap-4 p-4
  md:grid-cols-2 md:gap-6 md:p-6
  lg:grid-cols-3 lg:gap-8 lg:p-8
">
```

### Responsive Typography Scale
```jsx
// Define responsive text sizes
const textSizes = {
  'display': 'text-4xl md:text-6xl lg:text-7xl',
  'heading': 'text-2xl md:text-3xl lg:text-4xl',
  'subheading': 'text-xl md:text-2xl',
  'body': 'text-sm md:text-base',
  'caption': 'text-xs md:text-sm'
};

// Usage
<h1 className={textSizes.display}>Responsive Title</h1>
```

### Adaptive Layouts
```jsx
// Show/hide based on screen size
<>
  {/* Mobile layout */}
  <div className="md:hidden">
    <MobileMenu />
  </div>
  
  {/* Desktop layout */}
  <div className="hidden md:block">
    <DesktopNav />
  </div>
</>
```

## Animation Best Practices

### Performance-First Animations
```jsx
// Good: GPU-accelerated properties
<motion.div
  animate={{
    x: 100,              // translateX
    y: 50,               // translateY
    scale: 1.2,          // scale
    rotate: 45,          // rotate
    opacity: 0.5         // opacity
  }}
/>

// Avoid: Layout-triggering properties
<motion.div
  animate={{
    width: '200px',      // Causes reflow
    height: '100px',     // Causes reflow
    padding: '20px',     // Causes reflow
    fontSize: '20px'     // Causes reflow
  }}
/>
```

### Reduced Motion Support
```jsx
// Respect user preferences
function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return reducedMotion;
}

// Usage
const reducedMotion = useReducedMotion();
const animation = reducedMotion ? {} : {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};
```

### Scroll-Linked Animations
```jsx
// Parallax with performance in mind
function ParallaxSection({ children, offset = 50 }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [offset, -offset]
  );
  
  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}
```

## State Management Best Practices

### State Colocation
Keep state as close to where it's used as possible.

```jsx
// Bad: Global state for local UI
const [allModalsOpen, setAllModalsOpen] = useState({});

// Good: Local state where needed
function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  // State only exists where needed
}
```

### Derived State
Calculate values from existing state rather than storing separately.

```jsx
// Bad: Redundant state
const [items, setItems] = useState([]);
const [itemCount, setItemCount] = useState(0);
const [hasItems, setHasItems] = useState(false);

// Good: Derived values
const [items, setItems] = useState([]);
const itemCount = items.length;
const hasItems = items.length > 0;
```

### Optimistic Updates
Update UI immediately for better perceived performance.

```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = async (text) => {
    // Optimistic update
    const tempId = Date.now();
    const newTodo = { id: tempId, text, pending: true };
    setTodos(prev => [...prev, newTodo]);
    
    try {
      const savedTodo = await api.createTodo(text);
      // Replace temp with real
      setTodos(prev => 
        prev.map(t => t.id === tempId ? savedTodo : t)
      );
    } catch (error) {
      // Revert on failure
      setTodos(prev => prev.filter(t => t.id !== tempId));
      showError(error);
    }
  };
}
```

## Error Handling Patterns

### Error Boundaries
```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center">
          <h2>Something went wrong</h2>
          <button onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </div>
      );
    }
    
    return this.props.children;
  }
}
```

### Graceful Degradation
```jsx
function DataDisplay({ data, loading, error }) {
  // Handle loading state
  if (loading) {
    return <SkeletonLoader />;
  }
  
  // Handle error state with fallback
  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4">
        <p>Unable to load data</p>
        <button onClick={retry}>Try Again</button>
      </div>
    );
  }
  
  // Handle empty state
  if (!data || data.length === 0) {
    return (
      <div className="text-center text-slate-500">
        No data available
      </div>
    );
  }
  
  // Normal render
  return <DataList items={data} />;
}
```

## Performance Optimization Patterns

### Code Splitting
```jsx
// Route-based splitting
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}
```

### Image Optimization
```jsx
// Responsive images with Next.js
import Image from 'next/image';

function HeroImage() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero"
      width={1920}
      height={1080}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority // Load immediately for above-fold
      placeholder="blur"
      blurDataURL={dataUrl}
    />
  );
}
```

### Debouncing & Throttling
```jsx
// Debounce search input
function SearchInput() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const debouncedSearch = useMemo(
    () => debounce(async (q) => {
      const data = await api.search(q);
      setResults(data);
    }, 300),
    []
  );
  
  useEffect(() => {
    if (query) {
      debouncedSearch(query);
    }
  }, [query, debouncedSearch]);
  
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

## Accessibility Patterns

### Focus Management
```jsx
// Trap focus in modal
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef();
  
  useEffect(() => {
    if (isOpen) {
      const previousFocus = document.activeElement;
      modalRef.current?.focus();
      
      return () => {
        previousFocus?.focus();
      };
    }
  }, [isOpen]);
  
  return isOpen ? (
    <div
      ref={modalRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose();
      }}
    >
      {children}
    </div>
  ) : null;
}
```

### Announcements
```jsx
// Live region for dynamic content
function LiveAnnouncement({ message }) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
}
```

### Keyboard Navigation
```jsx
// Keyboard-navigable list
function NavigableList({ items, onSelect }) {
  const [focusedIndex, setFocusedIndex] = useState(0);
  
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(i => Math.min(i + 1, items.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(i => Math.max(i - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        onSelect(items[focusedIndex]);
        break;
    }
  };
  
  return (
    <ul role="listbox" onKeyDown={handleKeyDown}>
      {items.map((item, index) => (
        <li
          key={item.id}
          role="option"
          tabIndex={index === focusedIndex ? 0 : -1}
          aria-selected={index === focusedIndex}
          ref={el => {
            if (index === focusedIndex) el?.focus();
          }}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
}
```

## Security Best Practices

### Input Sanitization
```jsx
// Sanitize user input
function sanitizeInput(input) {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href']
  });
}

// Safe rendering
function Comment({ text }) {
  return (
    <div 
      dangerouslySetInnerHTML={{ 
        __html: sanitizeInput(text) 
      }} 
    />
  );
}
```

### Content Security Policy
```jsx
// Next.js security headers
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ];
  }
};
```

## Testing Patterns

### Component Testing
```jsx
// Test user interactions
describe('NudgeToast', () => {
  it('shows and dismisses correctly', async () => {
    const onDismiss = jest.fn();
    
    render(
      <NudgeToast 
        message="Test message"
        onDismiss={onDismiss}
      />
    );
    
    // Check message appears
    expect(screen.getByText('Test message')).toBeInTheDocument();
    
    // Click dismiss
    fireEvent.click(screen.getByRole('button', { name: /dismiss/i }));
    
    // Verify callback
    expect(onDismiss).toHaveBeenCalled();
  });
});
```

### Integration Testing
```jsx
// Test component interactions
describe('Timeline Integration', () => {
  it('filters events correctly', async () => {
    render(<Timeline events={mockEvents} />);
    
    // Initial state - all events
    expect(screen.getAllByRole('article')).toHaveLength(10);
    
    // Apply filter
    fireEvent.click(screen.getByRole('button', { name: /security/i }));
    
    // Wait for update
    await waitFor(() => {
      expect(screen.getAllByRole('article')).toHaveLength(3);
    });
  });
});
```

## Documentation Patterns

### Component Documentation
```jsx
/**
 * SceneCard - Displays a timeline event with animations
 * 
 * @component
 * @param {Object} props
 * @param {string} props.time - Event timestamp
 * @param {string} props.headline - Main event description
 * @param {string} props.sub - Additional details
 * @param {string} [props.bgKind] - Background pattern type
 * @param {number} props.index - Position in timeline
 * @param {number} props.total - Total timeline items
 * 
 * @example
 * <SceneCard
 *   time="Mon 9:12 AM"
 *   headline="User login detected"
 *   sub="Location: San Francisco"
 *   index={0}
 *   total={5}
 * />
 */
```

### Inline Comments
```jsx
function ComplexAlgorithm() {
  // Step 1: Normalize the input data
  const normalized = normalizeData(input);
  
  // Step 2: Apply transformation matrix
  // This uses the Johnson-Lindenstrauss lemma for dimensionality reduction
  const transformed = applyTransform(normalized, matrix);
  
  // Step 3: Return results with confidence scores
  return calculateConfidence(transformed);
}
```