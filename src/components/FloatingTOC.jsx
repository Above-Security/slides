import React, { useState, useEffect, useRef } from 'react';
import styles from './FloatingTOC.module.css';

/**
 * FloatingTOC - Modern, scroll-aware table of contents
 * 
 * Features:
 * - Floating card design with subtle shadow and backdrop blur
 * - IntersectionObserver for scroll awareness
 * - Smooth scroll navigation
 * - Responsive: floating on desktop, drawer on mobile
 * - Elegant entrance animation
 * - Self-contained with isolated CSS
 */
const FloatingTOC = ({ sections = [], className = '' }) => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const observerRef = useRef(null);
  const tocRef = useRef(null);

  // Initialize IntersectionObserver for scroll awareness
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -60% 0px', // More sensitive detection
      threshold: [0, 0.1, 0.3, 0.5, 0.7, 1]
    };

    observerRef.current = new IntersectionObserver((entries) => {
      // Get all currently intersecting sections
      const intersectingSections = entries
        .filter(entry => entry.isIntersecting)
        .map(entry => ({
          id: entry.target.id,
          ratio: entry.intersectionRatio,
          top: entry.boundingClientRect?.top || 0
        }))
        .sort((a, b) => {
          // Sort by intersection ratio first, then by position
          if (Math.abs(a.ratio - b.ratio) < 0.1) {
            return a.top - b.top; // Closer to top wins
          }
          return b.ratio - a.ratio; // Higher ratio wins
        });

      if (intersectingSections.length > 0) {
        const newActiveSection = intersectingSections[0].id;
        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
        }
      }
    }, observerOptions);

    // Observe all sections with a delay to ensure DOM is ready
    const timer = setTimeout(() => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element && observerRef.current) {
          observerRef.current.observe(element);
        }
      });
      
      // Set initial active section
      if (sections.length > 0 && !activeSection) {
        setActiveSection(sections[0].id);
      }
    }, 100);

    // Entrance animation trigger
    const visibilityTimer = setTimeout(() => setIsVisible(true), 200);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearTimeout(timer);
      clearTimeout(visibilityTimer);
    };
  }, [sections, activeSection]);

  // Smooth scroll to section
  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    
    const element = document.getElementById(sectionId);
    if (element) {
      // Temporarily set active section for immediate feedback
      setActiveSection(sectionId);
      
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close mobile drawer after navigation
      setIsMobileOpen(false);
    }
  };

  // Handle escape key for mobile drawer
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileOpen]);

  if (!sections.length) return null;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className={styles.mobileToggle}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle table of contents"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Desktop Floating TOC */}
      <nav 
        ref={tocRef}
        className={`${styles.floatingTOC} ${isVisible ? styles.visible : ''} ${className}`}
        role="navigation"
        aria-label="Table of contents"
      >
        <div className={styles.tocHeader}>
          <h3 className={styles.tocTitle}>Contents</h3>
        </div>
        
        <ul className={styles.tocList}>
          {sections.map(({ id, title, level = 1 }) => (
            <li key={id} className={styles.tocItem}>
              <a
                href={`#${id}`}
                onClick={(e) => scrollToSection(id, e)}
                className={`${styles.tocLink} ${
                  activeSection === id ? styles.active : ''
                } ${styles[`level${level}`]}`}
                data-level={level}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div 
          className={styles.mobileOverlay}
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <nav 
        className={`${styles.mobileDrawer} ${isMobileOpen ? styles.open : ''}`}
        role="navigation"
        aria-label="Table of contents"
      >
        <div className={styles.drawerHeader}>
          <h3 className={styles.drawerTitle}>Contents</h3>
          <button
            className={styles.closeButton}
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close table of contents"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <ul className={styles.drawerList}>
          {sections.map(({ id, title, level = 1 }) => (
            <li key={id} className={styles.drawerItem}>
              <a
                href={`#${id}`}
                onClick={(e) => scrollToSection(id, e)}
                className={`${styles.drawerLink} ${
                  activeSection === id ? styles.activeDrawer : ''
                } ${styles[`drawerLevel${level}`]}`}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default FloatingTOC;
