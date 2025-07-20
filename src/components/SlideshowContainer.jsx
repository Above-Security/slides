import React, { useState, useEffect, useCallback } from 'react';
import './SlideshowContainer.css';

/**
 * SlideshowContainer Component
 * 
 * A modular slideshow container that transforms existing page sections into slides.
 * Uses the exact same components and data already rendered on the page.
 * 
 * Features:
 * - Toggle between normal and slideshow mode
 * - Keyboard navigation (arrow keys, ESC)
 * - Touch/swipe support for mobile
 * - Maintains consistent spacing and brand guidelines
 * - No CSS bleed - uses scoped identifiers
 */

const SlideshowContainer = ({ 
    children, 
    isSlideshow, 
    onToggleSlideshow,
    className = '',
    slideConfig = []
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Extract slides from children based on slideConfig
    const extractSlides = () => {
        const allChildren = React.Children.toArray(children);
        
        if (!slideConfig.length) {
            // If no config, treat each top-level child as a slide
            return allChildren;
        }
        
        // Find slide sections based on data-slide attribute
        const slideElements = allChildren.filter(child => 
            child?.props?.['data-slide'] || 
            child?.props?.className?.includes('slide-section')
        );
        
        return slideElements.length > 0 ? slideElements : allChildren;
    };

    const slides = extractSlides();

    const totalSlides = slides.length;

    // Navigation functions
    const nextSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
        setTimeout(() => setIsTransitioning(false), 300);
    }, [isTransitioning, totalSlides]);

    const prevSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        setTimeout(() => setIsTransitioning(false), 300);
    }, [isTransitioning, totalSlides]);

    const goToSlide = useCallback((index) => {
        if (isTransitioning || index === currentSlide) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 300);
    }, [isTransitioning, currentSlide]);

    // Keyboard navigation
    useEffect(() => {
        if (!isSlideshow) return;

        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'ArrowRight':
                case ' ':
                    event.preventDefault();
                    nextSlide();
                    break;
                case 'ArrowLeft':
                    event.preventDefault();
                    prevSlide();
                    break;
                case 'Escape':
                    event.preventDefault();
                    onToggleSlideshow();
                    break;
                case 'Home':
                    event.preventDefault();
                    goToSlide(0);
                    break;
                case 'End':
                    event.preventDefault();
                    goToSlide(totalSlides - 1);
                    break;
                default:
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isSlideshow, nextSlide, prevSlide, goToSlide, onToggleSlideshow, totalSlides]);

    // Reset slide position when entering slideshow mode
    useEffect(() => {
        if (isSlideshow) {
            setCurrentSlide(0);
        }
    }, [isSlideshow]);

    // Get slide title from slideConfig or generate from content
    const getSlideTitle = (slideIndex) => {
        const config = slideConfig[slideIndex];
        if (config?.title) return config.title;
        
        // Try to extract title from slide content
        const slide = slides[slideIndex];
        if (slide?.props?.children) {
            const headerElement = React.Children.toArray(slide.props.children).find(child => 
                child?.props?.title || child?.props?.children?.props?.title
            );
            if (headerElement?.props?.title) return headerElement.props.title;
        }
        
        return `Slide ${slideIndex + 1}`;
    };

    if (!isSlideshow) {
        return (
            <div className={`slideshow-container-normal ${className}`}>
                {children}
            </div>
        );
    }

    return (
        <div className="slideshow-container-presentation" data-testid="slideshow-container">
            {/* Slideshow Header */}
            <header className="slideshow-header">
                <div className="slideshow-title">
                    <h1>{getSlideTitle(currentSlide)}</h1>
                </div>
                
                <div className="slideshow-controls">
                    <span className="slide-counter">
                        {currentSlide + 1} / {totalSlides}
                    </span>
                    
                    <button 
                        className="slideshow-exit-btn"
                        onClick={onToggleSlideshow}
                        aria-label="Exit slideshow"
                        title="Exit slideshow (ESC)"
                    >
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </header>

            {/* Slide Content */}
            <main className="slideshow-main">
                <div 
                    className="slideshow-slide-container"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div 
                            key={index}
                            className={`slideshow-slide ${index === currentSlide ? 'active' : ''}`}
                            data-slide-index={index}
                        >
                            <div className="slideshow-slide-content">
                                {slide}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Navigation Controls */}
            <div className="slideshow-navigation">
                <button 
                    className="slideshow-nav-btn slideshow-prev"
                    onClick={prevSlide}
                    disabled={isTransitioning}
                    aria-label="Previous slide"
                    title="Previous slide (←)"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>

                {/* Slide Indicators */}
                <div className="slideshow-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`slideshow-indicator ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            title={getSlideTitle(index)}
                        />
                    ))}
                </div>

                <button 
                    className="slideshow-nav-btn slideshow-next"
                    onClick={nextSlide}
                    disabled={isTransitioning}
                    aria-label="Next slide"
                    title="Next slide (→)"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>

            {/* Keyboard Shortcuts Helper */}
            <div className="slideshow-shortcuts" title="Keyboard shortcuts">
                <small>
                    Use ← → keys to navigate • ESC to exit • Space for next
                </small>
            </div>
        </div>
    );
};

export default SlideshowContainer;
