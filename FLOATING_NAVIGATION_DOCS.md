# Floating Navigation Component Documentation

## Overview

The `FloatingNavigation` component is a reusable, sticky navigation element designed specifically for the use cases section of the Above Security presentation platform. It provides a modern, pill-like navigation interface that remains visible while scrolling and maintains consistency with our brand guidelines.

## Features

### Design & Visual
- **Pill-like Design**: Rounded corners (9999px border-radius) for a modern, floating appearance
- **Brand Compliance**: Uses design system tokens for colors, spacing, and typography
- **Sticky Positioning**: Remains visible with configurable top offset (default: 20px)
- **Visual Feedback**: Subtle hover effects and active state highlighting
- **Glass Effect**: Backdrop blur for modern aesthetic

### Accessibility & UX
- **Semantic HTML**: Proper `<nav>`, `<ul>`, `<li>` structure with ARIA labels
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Screen Reader Support**: Comprehensive ARIA attributes and proper labeling
- **Touch Targets**: Minimum 44px height for touch accessibility
- **Reduced Motion**: Respects user motion preferences

### Responsive Behavior
- **Desktop**: Full text and icon display
- **Tablet**: Compressed spacing with maintained readability
- **Mobile**: Icon-only display for space optimization
- **Print**: Hidden in print mode to save space

## Implementation

### Basic Usage

```jsx
import FloatingNavigation from '../../components/FloatingNavigation';

// Default usage (shows all use case links)
<FloatingNavigation />

// Custom top offset
<FloatingNavigation topOffset={30} />

// Custom links
<FloatingNavigation 
  links={[
    {
      to: '/custom-path',
      icon: 'fas fa-home',
      text: 'Custom Link',
      ariaLabel: 'Navigate to custom page'
    }
  ]}
/>
```

### Integration in Use Case Pages

The component has been integrated into all use case pages:

1. **UseCasesIndex.jsx** - Overview page with all use cases
2. **PhishingDetection.jsx** - Phishing prevention use case
3. **AccountTakeover.jsx** - Account takeover prevention use case
4. **InsiderThreat.jsx** - Insider threat detection use case
5. **ZeroDayProtection.jsx** - Zero-day protection use case

### CSS Architecture

The component uses a modular CSS approach:

- **FloatingNavigation.css** - Core component styling
- **FloatingNavigationIntegration.css** - Layout integration adjustments

## Design System Integration

### CSS Custom Properties Used

```css
/* Colors */
--color-primary: Primary brand color for active states
--color-text-primary: Main text color
--color-text-secondary: Secondary text color
--color-text-inverse: Inverse text color (white)
--color-background-primary: Primary background color
--color-background-secondary: Secondary background color
--color-border-primary: Border color
--color-border-focus: Focus state border color

/* Typography */
--font-family-primary: Primary font family
--font-size-sm: Small font size
--font-size-xs: Extra small font size
--font-weight-medium: Medium font weight

/* Spacing */
--spacing-xs through --spacing-xl: Consistent spacing scale
--spacing-md: Medium spacing
--spacing-lg: Large spacing

/* Effects */
--shadow-sm: Small shadow
--shadow-md: Medium shadow
--transition-normal: Standard transition duration
--z-index-controls: Z-index for interactive controls
```

### Brand Guidelines Compliance

- **Colors**: Uses brand primary color (#00872b) for active states
- **Typography**: Uses Mona Sans font family
- **Spacing**: Follows consistent spacing scale
- **Shadows**: GitHub-brand compliant shadow patterns
- **Interactions**: Subtle animations that respect reduced motion preferences

## Technical Details

### Props Interface

```typescript
interface FloatingNavigationProps {
  links?: Array<{
    to: string;           // Route path
    icon?: string;        // FontAwesome icon class
    text: string;         // Display text
    ariaLabel: string;    // Accessibility label
  }>;
  className?: string;     // Additional CSS classes
  topOffset?: number;     // Top offset in pixels (default: 20)
}
```

### Default Navigation Links

```javascript
const defaultLinks = [
  {
    to: '/use-cases',
    icon: 'fas fa-th-large',
    text: 'All Use Cases',
    ariaLabel: 'Navigate to all use cases overview'
  },
  {
    to: '/use-cases/phishing-detection',
    icon: 'fas fa-shield-alt',
    text: 'Phishing',
    ariaLabel: 'Navigate to phishing detection use case'
  },
  // ... additional links
];
```

### Active State Logic

The component automatically detects the current route and highlights the appropriate navigation item:

- **Exact Match**: For the use cases index (`/use-cases`)
- **Partial Match**: For individual use case pages (starts with the link path)

## Performance Considerations

- **CSS Custom Properties**: Efficient styling with minimal runtime calculations
- **Backdrop Filter**: Modern browsers only (graceful degradation)
- **Transition Optimization**: Uses hardware acceleration where appropriate
- **Print Optimization**: Hidden in print mode to reduce ink usage

## Browser Support

- **Modern Browsers**: Full feature support including backdrop filter
- **Legacy Browsers**: Graceful degradation without backdrop filter
- **Mobile Browsers**: Optimized touch targets and responsive behavior
- **Screen Readers**: Full accessibility support

## Maintenance Notes

### Adding New Use Cases

To add a new use case to the navigation:

1. Update the `defaultLinks` array in `FloatingNavigation.jsx`
2. Ensure the route exists in the router configuration
3. Test active state detection with the new route

### Customizing Appearance

To modify the visual appearance:

1. Update CSS custom properties in `variables.css` for global changes
2. Modify `FloatingNavigation.css` for component-specific changes
3. Ensure changes maintain accessibility standards

### Integration in New Pages

To integrate in a new page:

```jsx
// 1. Import the component and integration CSS
import FloatingNavigation from '../../components/FloatingNavigation';
import '../../components/FloatingNavigationIntegration.css';

// 2. Add to the page layout (after the main container)
<div className="page-container">
  <FloatingNavigation />
  <div className="page-content">
    {/* Page content */}
  </div>
</div>
```

## Testing Recommendations

### Manual Testing
- Verify sticky positioning across different scroll positions
- Test keyboard navigation with Tab, Enter, and Space keys
- Validate active state highlighting on all routes
- Check responsive behavior on various screen sizes
- Test with screen readers for accessibility

### Automated Testing
- Unit tests for active state logic
- Integration tests for React Router compatibility
- Visual regression tests for design consistency
- Accessibility tests for ARIA compliance

## Future Enhancements

### Potential Improvements
- **Animation Timing**: Fine-tune transition durations based on user feedback
- **Context Awareness**: Different link sets for different sections
- **Keyboard Shortcuts**: Add keyboard shortcuts for quick navigation
- **Analytics Integration**: Track navigation usage patterns

### Accessibility Enhancements
- **Voice Navigation**: Support for voice navigation commands
- **High Contrast**: Enhanced high contrast mode support
- **Focus Management**: Advanced focus management for complex interactions

---

*This documentation is part of the Above Security presentation platform design system. Last updated: June 21, 2025*
