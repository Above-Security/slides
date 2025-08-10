// Above Brand Gradient Component
// Applies the signature gradient with grain texture

export default function BrandGradient({ 
  variant = 'default', // default, subtle, light, empathy, tech, action, insight
  animated = false,
  className = '',
  children 
}) {
  const getVariantClass = () => {
    switch(variant) {
      case 'subtle':
        return 'above-gradient-subtle';
      case 'light':
        return 'above-gradient-light';
      case 'empathy':
        return 'above-gradient-empathy';
      case 'tech':
        return 'above-gradient-tech';
      case 'action':
        return 'above-gradient-action';
      case 'insight':
        return 'above-gradient-insight';
      default:
        return 'above-gradient';
    }
  };

  const baseClasses = getVariantClass();
  const animationClass = animated ? 'above-gradient-animated' : '';
  
  return (
    <div className={`${baseClasses} ${animationClass} ${className}`}>
      {children}
    </div>
  );
}

// Tailwind-only version for simpler use cases
export function GradientBackground({ children, className = '' }) {
  return (
    <div className={`relative bg-above-gradient ${className}`}>
      {/* Grain overlay */}
      <div 
        className="absolute inset-0 opacity-4 mix-blend-overlay pointer-events-none z-10"
        style={{ backgroundImage: "url('/noise.svg')", backgroundRepeat: 'repeat' }}
      />
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}