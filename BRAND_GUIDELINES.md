# Above Security Brand Guidelines

Comprehensive brand and design system documentation for the Above Security Runtime Insider Protection presentation platform, fully aligned with **[GitHub's Official Brand Guidelines](https://brand.github.com/)**.

## 🔗 Official GitHub Brand Resources

This design system is built on GitHub's official brand foundations:

- **[GitHub Brand Toolkit](https://brand.github.com/)** - Official brand guidelines and resources
- **[Typography Guidelines](https://brand.github.com/foundations/typography)** - Mona Sans and Monaspace typography system
- **[Color Foundations](https://brand.github.com/foundations/color)** - Official GitHub color palettes and usage
- **[Accessibility Standards](https://brand.github.com/foundations/accessibility)** - Inclusive design principles
- **[Primer Design System](https://primer.style/brand)** - GitHub's design system for marketing UI
- **[Presentation Guidelines](https://brand.github.com/brand-in-action/presentations)** - Official presentation standards

## 🎯 Brand Philosophy

### Core Principles (Aligned with GitHub Brand)
- **Developer-First** - Clean, technical aesthetic that resonates with GitHub's developer audience
- **Enterprise Professionalism** - Sophisticated design suitable for CISO and technical decision makers
- **GitHub Brand Compliance** - Strict adherence to GitHub's official typography, colors, and design principles
- **Evidence-Based Content** - Technical accuracy and real-world examples, avoiding marketing hyperbole
- **Accessibility-First** - Following GitHub's accessibility standards for inclusive design

### Visual Identity
- **Clean & Modern** - Minimalist design with purposeful use of white space per GitHub aesthetics
- **Technical Credibility** - Professional design language that builds trust with security professionals
- **Brand Consistency** - Coherent visual language following GitHub's established patterns

## 🎨 Typography System (GitHub Official)

> **Reference:** [GitHub Typography Guidelines](https://brand.github.com/foundations/typography)

GitHub's typography system is "centered on **Mona Sans SemiBold** and **Monaspace Neon Medium**" and comes in three scales: title, headline, and body styles. Our presentation follows these exact specifications.

### GitHub Brand Typography Fonts

#### Mona Sans (Primary Brand Font)
- **Official GitHub Description**: "GitHub's own expressive typeface"
- **Primary Weight**: **SemiBold (600)** - Official GitHub brand weight
- **Usage**: All brand elements, headings, UI text, and body content
- **Download**: [Mona Sans on GitHub](https://github.com/github/mona-sans/)

```css
--font-primary: 'Mona Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-brand: 'Mona Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-display: 'Mona Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

#### Monaspace Neon (Monospace Font)
- **Official GitHub Description**: "GitHub's monospace font family"
- **Primary Weight**: **Medium (500)** - Official GitHub recommendation
- **Usage**: Code blocks, technical content, data display
- **Download**: [Monaspace on GitHub](https://github.com/githubnext/monaspace)

```css
--font-mono: 'Monaspace Neon', 'SF Mono', Monaco, 'Cascadia Code', monospace;
--font-mono-code: 'Monaspace Neon', 'SF Mono', Monaco, 'Cascadia Code', monospace;
```

### GitHub Typography Scale Implementation

Following GitHub's official type scale system:

#### Font Weight System (GitHub Official Weights)
```css
--weight-thin: 200;         /* Decorative use only */
--weight-light: 300;        /* Minimal use, special cases */
--weight-normal: 400;       /* Body text, standard content */
--weight-medium: 500;       /* Emphasis, secondary headings, Monaspace default */
--weight-semibold: 600;     /* PRIMARY BRAND WEIGHT (Mona Sans SemiBold) */
--weight-bold: 700;         /* Strong emphasis, important headings */
--weight-extrabold: 800;    /* Hero text, major headings */
--weight-black: 900;        /* Maximum impact, rare use */
```

#### Font Size Scale (Based on GitHub Typography)
```css
/* GitHub Type Scale - Body Styles */
--text-xs: 12px;      /* Fine print, captions */
--text-sm: 13px;      /* Small labels, metadata */
--text-base: 14px;    /* Base body text */
--text-md: 16px;      /* Comfortable reading */
--text-lg: 18px;      /* Large body text */

/* GitHub Type Scale - Headline Styles */
--text-xl: 20px;      /* Subtitle text */
--text-2xl: 24px;     /* Section headings */
--text-3xl: 28px;     /* Page titles */
--text-4xl: 32px;     /* Hero text */

/* GitHub Type Scale - Title Styles */
--text-5xl: 48px;     /* Display headings */
--text-6xl: 64px;     /* Maximum impact */
```

#### Line Height System (GitHub Standards)
```css
--leading-tight: 1.2;     /* Dense text, headlines */
--leading-snug: 1.3;      /* Comfortable headlines */
--leading-normal: 1.4;    /* Standard body text */
--leading-relaxed: 1.6;   /* Comfortable reading */
--leading-loose: 1.8;     /* Maximum readability */
```

### Typography Usage Guidelines (GitHub Brand Compliant)

#### Slide Titles (GitHub Title Style)
- **Font**: Mona Sans SemiBold (600) - Official GitHub brand weight
- **Size**: 48px (--text-5xl) - GitHub title scale
- **Color**: GitHub primary text (#24292f)
- **Line Height**: Tight (1.2) - GitHub standard

#### Slide Subtitles (GitHub Headline Style)
- **Font**: Mona Sans Medium (500)
- **Size**: 20px (--text-xl) - GitHub headline scale
- **Color**: GitHub secondary text (#656d76)
- **Line Height**: Snug (1.3)

#### Body Text (GitHub Body Style)
- **Font**: Mona Sans Normal (400)
- **Size**: 16px (--text-md) - GitHub body scale
- **Color**: GitHub primary text (#24292f)
- **Line Height**: Relaxed (1.6) - GitHub standard for readability

#### Code/Technical Text (GitHub Monospace Standard)
- **Font**: Monaspace Neon Medium (500) - Official GitHub mono weight
- **Size**: 14px (--text-base) - GitHub mono scale
- **Color**: GitHub primary text (#24292f)
- **Background**: GitHub surface (#f6f8fa)

## 🌈 Color System (GitHub Official)

> **Reference:** [GitHub Color Guidelines](https://brand.github.com/foundations/color)

Our color system is built directly on GitHub's official color palettes, which "anchor around GitHub Green" and derive from the [Primer library](https://primer.style/brand/primitives/color) with enhanced saturation for vibrancy.

### GitHub Brand Primary Palette

Following GitHub's official primary palette that "anchors around green":

```css
/* GitHub Green Scale (Official Brand Colors) */
--brand-green-1: #BFFFD1;    /* HEX: #BFFFD1, RGB: 191/255/209, CMYK: 20/0/30/0 */
--brand-green-3: #5FED83;    /* HEX: #5FED83, RGB: 95/237/131, CMYK: 43/0/60/0 */
--brand-green-4: #08872B;    /* HEX: #08872B, RGB: 8/135/43, CMYK: 100/0/86/3 */
--brand-green-5: #104C35;    /* HEX: #104C35, RGB: 16/76/53, CMYK: 100/0/71/43 */

/* Above Security Implementation */
--brand-primary: #08872B;        /* GitHub Green 4 - Primary brand color */
--brand-primary-light: #5FED83;  /* GitHub Green 3 - Light brand color */
--brand-primary-dark: #104C35;   /* GitHub Green 5 - Dark brand color */
```

### GitHub Brand Gradients

```css
/* GitHub-inspired gradients using official brand colors */
--brand-gradient: linear-gradient(90deg, #5FED83, #08872B);
--brand-gradient-vertical: linear-gradient(135deg, #08872B 0%, #5FED83 100%);
```

### GitHub Security Color Palette

> **Reference:** [GitHub Security Palette](https://brand.github.com/foundations/color#security-color-palette)

Since Above Security focuses on security, we incorporate GitHub's official Security palette which "leverages blue to communicate trust, reliability, and protection":

```css
/* GitHub Security Blues (Official) */
--security-blue-1: #9EECFF;    /* HEX: #9EECFF, RGB: 158/236/255 */
--security-blue-2: #3094FF;    /* HEX: #3094FF, RGB: 48/148/255 */
--security-blue-4: #0527FC;    /* HEX: #0527FC, RGB: 5/39/252 */
--security-blue-6: #001C4D;    /* HEX: #001C4D, RGB: 0/28/77 */
```

### Primer Color System (GitHub Foundation)

Based on GitHub's Primer design system colors for UI consistency:

#### Text Colors (Primer Foundation)
```css
--text-primary: #24292f;      /* Primer gray-900 - Primary text */
--text-secondary: #656d76;    /* Primer gray-600 - Secondary text */
--text-tertiary: #8b949e;     /* Primer gray-500 - Tertiary text */
--text-inverse: #ffffff;      /* Pure white for dark backgrounds */
```

#### Semantic Colors (Primer System)
```css
/* GitHub Status Colors */
--text-success: #1a7f37;     /* Primer green-600 - Success states */
--text-danger: #d1242f;      /* Primer red-600 - Error/danger states */
--text-warning: #d1242f;     /* Primer orange-600 - Warning states */
--text-info: #0969da;        /* Primer blue-600 - Information states */
```

#### Background Colors (Primer Foundation)
```css
/* GitHub Surface Colors */
--bg-primary: #ffffff;       /* Pure white - Primary background */
--bg-secondary: #f6f8fa;     /* Primer gray-100 - Secondary background */
--bg-tertiary: #eaeef2;      /* Primer gray-200 - Tertiary background */
--bg-dark: #24292f;          /* Primer gray-900 - Dark background */
--bg-darker: #1c2128;        /* Primer gray-950 - Darker background */

/* GitHub State Backgrounds */
--bg-success: #d4f7dc;       /* Primer green-100 - Success background */
--bg-danger: #ffeef0;        /* Primer red-100 - Error background */
--bg-warning: #fff8f0;       /* Primer orange-100 - Warning background */
```

#### Surface Colors (Primer System)
```css
--surface-primary: #ffffff;    /* Primary surfaces - cards, modals */
--surface-secondary: #f6f8fa;  /* Secondary surfaces - sidebars */
--surface-raised: #ffffff;     /* Elevated surfaces - overlays */
--surface-hover: #f0f6fc;      /* Hover states - Primer blue-50 */
```

#### Border Colors (Primer Foundation)
```css
--border-primary: #d1d9e0;    /* Primer gray-300 - Primary borders */
--border-secondary: #eaeef2;  /* Primer gray-200 - Secondary borders */
--border-focus: #0969da;      /* Primer blue-600 - Focus states */
--border-danger: #d1242f;     /* Primer red-600 - Error borders */
--border-warning: #d1242f;    /* Primer orange-600 - Warning borders */
```

### GitHub Color Usage Guidelines

#### Brand Color Usage (GitHub Standards)
Per GitHub's guidelines, green should be "the key player" in brand applications:

- **Primary Actions** - Buttons, CTAs, important links (GitHub Green #08872B)
- **Brand Elements** - Logo highlights, success states, key features
- **Interactive States** - Hover effects, active states, focus indicators
- **Gradients** - Hero sections, call-to-action backgrounds

#### Color Proportion Guidelines (GitHub Recommended)
Following GitHub's proportion recommendations:
- **80%** - Black, white, and neutral colors
- **10%** - GitHub Gray tones for structure
- **5%** - GitHub Green for brand elements
- **5%** - Security blue for trust/security elements

#### Text Color Hierarchy (GitHub/Primer)
1. **Primary (#24292f)** - Main content, headings, important text
2. **Secondary (#656d76)** - Supporting text, subtitles, descriptions  
3. **Tertiary (#8b949e)** - Captions, metadata, least important text

#### Accessibility Compliance (GitHub Standards)
> **Reference:** [GitHub Accessibility](https://brand.github.com/foundations/accessibility)

All color combinations maintain:
- **Minimum AA contrast ratio** for all text
- **Never use color alone** to convey meaning
- **Light and dark mode** considerations for versatility

## 📐 Layout & Spacing (GitHub Standards)

> **Reference:** [Primer Design System](https://primer.style/brand) and [GitHub Layouts](https://brand.github.com/graphic-elements/layouts)

### Spacing Scale (8px Base Grid - GitHub Standard)

Following GitHub/Primer's 8px base grid system for consistent spacing:

```css
/* GitHub/Primer Spacing Scale */
--space-1: 4px;      /* 0.5 × base (tight spacing) */
--space-2: 8px;      /* 1 × base (base unit) */
--space-3: 12px;     /* 1.5 × base (small gaps) */
--space-4: 16px;     /* 2 × base (standard spacing) */
--space-5: 20px;     /* 2.5 × base (medium spacing) */
--space-6: 24px;     /* 3 × base (large spacing) */
--space-7: 28px;     /* 3.5 × base (extra large) */
--space-8: 32px;     /* 4 × base (section spacing) */
--space-9: 36px;     /* 4.5 × base (major spacing) */
--space-10: 40px;    /* 5 × base (maximum spacing) */
```

### Border Radius System (GitHub/Primer)

```css
/* GitHub/Primer Border Radius */
--radius-none: 0px;      /* Sharp corners */
--radius-sm: 3px;        /* Primer small radius */
--radius-md: 6px;        /* Primer medium radius */
--radius-lg: 8px;        /* Primer large radius */
--radius-xl: 12px;       /* Extended large radius */
--radius-2xl: 16px;      /* Maximum rectangular radius */
--radius-full: 50%;      /* Circular elements */
```

### Shadow System (GitHub/Primer Depth)

Based on GitHub's elevation system:

```css
/* GitHub/Primer Shadow Scale */
--shadow-xs: 0 1px 2px rgba(31, 35, 40, 0.04);    /* Primer shadow-resting */
--shadow-sm: 0 1px 3px rgba(31, 35, 40, 0.12);    /* Primer shadow-small */
--shadow-md: 0 3px 6px rgba(31, 35, 40, 0.12);    /* Primer shadow-medium */
--shadow-lg: 0 8px 24px rgba(31, 35, 40, 0.12);   /* Primer shadow-large */
--shadow-xl: 0 12px 48px rgba(31, 35, 40, 0.18);  /* Primer shadow-extra-large */
```

## 🎭 Animation & Motion (GitHub Standards)

> **Reference:** [GitHub Motion Guidelines](https://brand.github.com/motion-identity/motion-guidelines)

### Animation Principles (GitHub Brand)
- **Subtle & Professional** - Animations enhance without distracting from content
- **Performance Optimized** - GPU-accelerated transforms and opacity only
- **Purposeful Motion** - Every animation serves a clear functional or brand purpose
- **Accessibility Conscious** - Respects `prefers-reduced-motion` media queries

### GitHub Timing Functions

```css
/* GitHub Brand Easing */
--ease-github: cubic-bezier(0.2, 0, 0, 1);           /* GitHub brand easing curve */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);         /* Smooth transitions */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Playful interactions */
```

### Transition Durations (GitHub Standards)

```css
/* GitHub Motion Timing */
--transition-fast: 150ms;      /* Quick hover states and micro-interactions */
--transition-github: 250ms;    /* Standard GitHub interaction timing */
--transition-slow: 400ms;      /* Complex state changes */
--transition-page: 600ms;      /* Page and slide transitions */
```

### GitHub Animation Patterns
- **Slide Reveals** - Content appearing with directional emphasis
- **Scale Animations** - Subtle growth/shrink for interaction feedback  
- **Fade Transitions** - Smooth opacity changes for state transitions
- **GitHub Green Gradients** - Brand gradient movement for emphasis
- **Professional Hover Effects** - Elevation and subtle transforms

## 🏗️ Component Patterns (GitHub Design Language)

> **Reference:** [GitHub Layouts](https://brand.github.com/graphic-elements/layouts) and [Primer Components](https://primer.style/brand)

### Card Pattern (GitHub Style)
Following GitHub's card design patterns with clean surfaces and subtle elevation:

```css
.github-card {
  background: var(--surface-primary);        /* Pure white surface */
  border: 1px solid var(--border-primary);   /* Primer gray-300 border */
  border-radius: var(--radius-lg);           /* 8px GitHub radius */
  box-shadow: var(--shadow-sm);              /* Subtle Primer shadow */
  padding: var(--space-6);                   /* 24px GitHub spacing */
  transition: all var(--transition-github);   /* 250ms GitHub timing */
}

.github-card:hover {
  box-shadow: var(--shadow-md);              /* Elevated on hover */
  transform: translateY(-2px);               /* Subtle lift */
  border-color: var(--border-focus);         /* GitHub blue focus */
}
```

### Button Pattern (GitHub Brand)
Following GitHub's button design system with brand color integration:

```css
/* Primary Button - GitHub Green */
.btn-primary {
  background: var(--brand-primary);          /* GitHub Green #08872B */
  color: var(--text-inverse);               /* White text */
  border: 1px solid var(--brand-primary);   /* Matching border */
  border-radius: var(--radius-md);          /* GitHub medium radius */
  padding: var(--space-3) var(--space-5);   /* GitHub button padding */
  font-family: var(--font-brand);           /* Mona Sans */
  font-weight: var(--weight-semibold);      /* 600 GitHub brand weight */
}

/* Secondary Button - GitHub Style */
.btn-secondary {
  background: var(--surface-primary);       /* White background */
  color: var(--text-primary);              /* GitHub gray text */
  border: 1px solid var(--border-primary); /* Primer border */
  border-radius: var(--radius-md);         /* Consistent radius */
}

/* Ghost Button - Minimal GitHub Style */
.btn-ghost {
  background: transparent;                   /* No background */
  color: var(--brand-primary);             /* GitHub green text */
  border: 1px solid var(--brand-primary);  /* GitHub green border */
}
```

### Slide Header Pattern (GitHub Typography)
Implementing GitHub's typography hierarchy for presentation headers:

```css
.slide-header {
  text-align: center;
  margin-bottom: var(--space-8);            /* GitHub section spacing */
}

.slide-title {
  font-family: var(--font-brand);           /* Mona Sans */
  font-weight: var(--weight-semibold);      /* 600 GitHub brand weight */
  font-size: var(--text-5xl);              /* 48px GitHub title scale */
  line-height: var(--leading-tight);       /* 1.2 GitHub tight leading */
  color: var(--text-primary);              /* Primer gray-900 */
  margin-bottom: var(--space-4);           /* GitHub spacing */
}

.slide-subtitle {
  font-family: var(--font-brand);           /* Mona Sans */
  font-weight: var(--weight-medium);        /* 500 medium weight */
  font-size: var(--text-xl);               /* 20px GitHub headline */
  line-height: var(--leading-snug);        /* 1.3 GitHub snug leading */
  color: var(--text-secondary);            /* Primer gray-600 */
}
```

### Competitor Comparison Pattern (GitHub Enterprise Style)
Professional comparison tables following GitHub's data presentation patterns:

```css
.comparison-grid {
  display: grid;
  gap: var(--space-6);                      /* GitHub grid spacing */
  background: var(--bg-primary);           /* Pure white background */
}

.comparison-card {
  background: var(--surface-primary);       /* White surface */
  border: 1px solid var(--border-primary); /* Primer border */
  border-radius: var(--radius-lg);         /* GitHub large radius */
  padding: var(--space-6);                 /* Consistent padding */
  transition: all var(--transition-github); /* GitHub timing */
}

.comparison-card:hover {
  box-shadow: var(--shadow-lg);            /* GitHub large shadow */
  border-color: var(--brand-primary);      /* GitHub green accent */
}
```

## 📱 Responsive Design (GitHub Standards)

> **Reference:** [GitHub Responsive Patterns](https://brand.github.com/graphic-elements/layouts)

### Breakpoint System (Mobile-First GitHub Approach)
```css
/* GitHub/Primer Responsive Breakpoints */
@media (min-width: 544px)  { /* sm - Small tablets */ }
@media (min-width: 768px)  { /* md - Tablets */ }
@media (min-width: 1012px) { /* lg - Small laptops */ }
@media (min-width: 1280px) { /* xl - Large laptops */ }
@media (min-width: 1400px) { /* xxl - Desktop monitors */ }
```

### GitHub Mobile Adaptations
- **Typography Scaling** - Reduced font sizes maintaining GitHub hierarchy
- **Spacing Adjustments** - Proportional reduction using GitHub spacing scale
- **Grid Simplification** - Single column layouts for mobile readability
- **Touch Targets** - Minimum 44px GitHub touch standards
- **Navigation** - GitHub-style mobile menu patterns

## 🎯 Content Guidelines (GitHub Voice & Tone)

> **Reference:** [GitHub Voice and Tone](https://brand.github.com/brand-identity/voice-and-tone)

### GitHub Brand Voice Attributes
- **Human** - Conversational yet professional
- **Technical** - Accurate and credible for developer audiences  
- **Inclusive** - Accessible and welcoming to all skill levels
- **Confident** - Authoritative without being arrogant
- **Clear** - Concise and jargon-free when possible

### Content Principles (GitHub-Aligned)
- **Developer-Focused** - Technical accuracy and respect for audience expertise
- **Evidence-Based** - Facts, metrics, and real examples over marketing claims
- **Inclusive Language** - GitHub's commitment to inclusive communication
- **Authentic** - Honest about capabilities and limitations
- **Actionable** - Clear next steps and practical information

### Presentation Content Strategy
- **Technical Credibility** - Detailed technical information for security professionals
- **Real-World Focus** - Actual incidents, case studies, and concrete examples
- **Honest Comparisons** - Fair and factual competitive positioning
- **Clear Value** - Specific benefits and measurable outcomes

## 🔧 Implementation Guidelines (GitHub Best Practices)

> **Reference:** [Primer Design System](https://primer.style/brand) and [GitHub Development Standards](https://brand.github.com/)

### CSS Architecture (GitHub/Primer Standards)
Following GitHub's design system architecture principles:

- **Design Tokens First** - All values use GitHub-aligned design system tokens
- **Component Modularity** - Each component follows GitHub's modular CSS patterns  
- **Utility Classes** - Atomic CSS utilities following Primer patterns
- **Performance** - GitHub-optimized loading and animation performance

### GitHub Token Usage Best Practices
```css
/* ✅ CORRECT - Using GitHub-aligned design tokens */
.github-compliant-card {
  background: var(--surface-primary);      /* GitHub white surface */
  border: 1px solid var(--border-primary); /* Primer gray-300 */
  border-radius: var(--radius-lg);         /* GitHub 8px radius */
  padding: var(--space-6);                 /* GitHub 24px spacing */
  font-family: var(--font-brand);          /* Mona Sans */
  font-weight: var(--weight-semibold);     /* GitHub 600 weight */
  color: var(--text-primary);              /* Primer gray-900 */
}

/* ❌ INCORRECT - Hardcoded values that break GitHub compliance */
.non-compliant-card {
  background: #ffffff;
  border: 1px solid #d1d9e0;
  border-radius: 8px;
  padding: 24px;
  font-family: 'Inter', sans-serif;        /* Wrong font */
  font-weight: 600;
  color: #24292f;
}
```

### GitHub Font Loading Optimization
Following GitHub's font loading best practices:

```html
<!-- GitHub Official Font Loading Pattern -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Mona Sans - Official GitHub Brand Font -->
<link href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

<!-- Font loading optimization -->
<link rel="preload" href="path/to/mona-sans-semibold.woff2" as="font" type="font/woff2" crossorigin>
```

### GitHub Accessibility Implementation
> **Reference:** [GitHub Accessibility Standards](https://brand.github.com/foundations/accessibility)

```css
/* GitHub Accessibility Best Practices */
.accessible-component {
  /* Ensure AA contrast ratio */
  color: var(--text-primary);              /* #24292f on white = 16.7:1 ratio */
  background: var(--surface-primary);      /* White background */
  
  /* Respect reduced motion preferences */
  transition: var(--transition-github);
  animation: none;
}

@media (prefers-reduced-motion: reduce) {
  .accessible-component {
    animation: none;
    transition: none;
  }
}

/* Focus states for keyboard navigation */
.accessible-component:focus {
  outline: 2px solid var(--border-focus);   /* GitHub blue focus */
  outline-offset: 2px;
}
```

## 📊 GitHub Brand Compliance Checklist

### Typography Compliance ✅
- [ ] **Mona Sans** used for all brand elements and body text
- [ ] **Monaspace Neon** used for code and technical content
- [ ] **SemiBold (600)** used as primary brand weight per GitHub guidelines
- [ ] **Google Fonts CDN** with `display=swap` optimization
- [ ] **Fallback fonts** match GitHub's font stack
- [ ] **Font loading** follows GitHub performance patterns

### Color Compliance ✅  
- [ ] **GitHub Green (#08872B)** used for primary brand elements
- [ ] **Primer color palette** used for all UI colors
- [ ] **GitHub Security blues** integrated for security-focused content
- [ ] **AA contrast ratios** maintained for all text combinations
- [ ] **Color proportion** follows GitHub's 80/10/5/5 guideline
- [ ] **Semantic naming** follows GitHub/Primer conventions

### Layout Compliance ✅
- [ ] **8px base grid** used for all spacing decisions
- [ ] **GitHub/Primer breakpoints** implemented for responsive design
- [ ] **Shadow system** follows GitHub's elevation standards
- [ ] **Border radius** uses GitHub's radius scale
- [ ] **Component patterns** align with GitHub design language

### Animation Compliance ✅
- [ ] **GitHub easing curves** used for all transitions
- [ ] **Performance optimized** animations (GPU-accelerated only)
- [ ] **Accessibility considered** with `prefers-reduced-motion` support
- [ ] **Purposeful motion** following GitHub's motion principles
- [ ] **GitHub timing** (250ms standard) for interactions

### Content Compliance ✅
- [ ] **GitHub voice and tone** reflected in all copy
- [ ] **Technical accuracy** appropriate for developer audience
- [ ] **Inclusive language** following GitHub's standards
- [ ] **Evidence-based content** with real examples and metrics
- [ ] **Professional presentation** suitable for enterprise contexts

## 🚀 Maintenance & GitHub Standards

### Design System Evolution
- **Version Control** - Track changes to maintain GitHub compliance
- **Documentation** - Keep guidelines updated with GitHub brand changes
- **Testing** - Validate against GitHub's official brand resources
- **Performance** - Monitor against GitHub's performance standards

### GitHub Brand Consistency
- **Regular Audits** - Quarterly review against [brand.github.com](https://brand.github.com)
- **Token Coverage** - Maintain 95%+ usage of GitHub-aligned tokens
- **Component Reuse** - Prefer GitHub patterns over custom solutions
- **Visual QA** - Regular comparison with GitHub's official examples

### Official GitHub Resources Monitoring
- **Brand Updates** - Monitor [brand.github.com](https://brand.github.com) for changes
- **Primer Updates** - Track [primer.style](https://primer.style) design system evolution  
- **Font Updates** - Watch [Mona Sans](https://github.com/github/mona-sans/) and [Monaspace](https://github.com/githubnext/monaspace) repositories
- **Accessibility** - Follow [accessibility.github.com](https://accessibility.github.com) for standards

---

**Above Security Brand Guidelines v2.0**  
*Built in full compliance with [GitHub's Official Brand Guidelines](https://brand.github.com/)*

**Official GitHub Resources:**
- [GitHub Brand Toolkit](https://brand.github.com/)
- [GitHub Typography](https://brand.github.com/foundations/typography)  
- [GitHub Color System](https://brand.github.com/foundations/color)
- [GitHub Accessibility](https://brand.github.com/foundations/accessibility)
- [Primer Design System](https://primer.style/brand)
- [Mona Sans Font](https://github.com/github/mona-sans/)
- [Monaspace Font](https://github.com/githubnext/monaspace)
