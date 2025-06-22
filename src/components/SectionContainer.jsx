import React, { useEffect, useRef, useState } from 'react';
import styles from './SectionContainer.module.css';

/**
 * SectionContainer - Clean, professional container for content sections
 * 
 * Features:
 * - Brand-aligned design tokens and typography
 * - Simple entrance animations with intersection observer
 * - Clean variants for different content types
 * - Responsive design and accessibility support
 */
const SectionContainer = ({ 
  id, 
  title, 
  children, 
  className = '',
  variant = 'default', // default, vision, executive
  priority = 'normal' // high, normal, low
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection observer for entrance animations
  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Stagger content animation
          setTimeout(() => {
            setIsContentVisible(true);
          }, 150);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  // Compute classes
  const sectionClasses = [
    styles.sectionContainer,
    isVisible ? styles.visible : '',
    styles[variant],
    priority === 'high' ? styles.priority : '',
    className
  ].filter(Boolean).join(' ');

  const contentClasses = [
    styles.sectionContent,
    isContentVisible ? styles.contentVisible : ''
  ].filter(Boolean).join(' ');

  return (
    <section
      ref={sectionRef}
      id={id}
      className={sectionClasses}
    >
      <div className={styles.sectionInner}>
        {title && (
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {title}
            </h2>
            <div className={styles.titleUnderline} />
          </header>
        )}
        
        <div className={contentClasses}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionContainer;
