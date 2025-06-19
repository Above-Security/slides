import React, { useState, useEffect } from 'react';
import './App.css';
import { slideData } from './slides';
import { clarityEvent, claritySet } from './utils/clarity';

const getSlideIndexFromUrl = () => {
  let pathname = window.location.pathname;
  
  // Handle hash routing (from 404.html redirect)
  if (window.location.hash && window.location.hash.startsWith('#/')) {
    pathname = '/slides/' + window.location.hash.substring(2);
    // Clean up the hash by replacing the URL
    window.history.replaceState(null, '', pathname);
  }
  
  const match = pathname.match(/\/slides\/slide\/(\d+)/);
  if (match) {
    const idx = parseInt(match[1], 10) - 1;
    if (!isNaN(idx) && idx >= 0 && idx < slideData.length) return idx;
  }
  return 0;
};

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(getSlideIndexFromUrl());
  const [showMenu, setShowMenu] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const slides = slideData;

  // Track presentation session start (simplified)
  useEffect(() => {
    // Simple session tracking without complex data
    clarityEvent('presentation_session_start');
    claritySet('presentation_name', 'Above Security Pitch Deck');
    setIsInitialLoad(false);
  }, []); // Empty dependency array - only run once on mount

  // Sync URL with current slide (simplified tracking)
  useEffect(() => {
    const url = `/slides/slide/${currentSlide + 1}`;
    if (window.location.pathname !== url && !isInitialLoad) {
      window.history.pushState(null, '', url);
    }

    // Simple slide tracking
    claritySet('current_slide_number', currentSlide + 1);
  }, [currentSlide, isInitialLoad]);

  // Listen for browser navigation (back/forward)
  useEffect(() => {
    const onPopState = () => {
      const newSlideIndex = getSlideIndexFromUrl();
      setCurrentSlide(newSlideIndex);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'Escape') {
        setShowMenu(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setShowMenu(false);
  };

  const renderSlide = () => {
    const SlideComponent = slides[currentSlide].Component;
    return <SlideComponent />;
  };

  // Update meta tags for each slide
  useEffect(() => {
    const currentSlideData = slides[currentSlide];
    const slideTitle = currentSlideData?.title || 'Above Security';
    const slideNumber = currentSlide + 1;
    
    // Update page title
    document.title = `${slideTitle} - Above Security Pitch Deck`;
    
    // Update OG meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${slideTitle} - Above Security`);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://above-security.github.io/slides/slide/${slideNumber}`);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', `Slide ${slideNumber}: ${slideTitle}. Above Security's Runtime ITDR platform for sophisticated phishing detection and insider threat prevention.`);
    }
    
    // Update Twitter meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', `${slideTitle} - Above Security`);
    }
    
    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', `https://above-security.github.io/slides/slide/${slideNumber}`);
    }
  }, [currentSlide, slides]);

  return (
    <div className="presentation-container">
      <div className="presentation-controls">
        <button
          className="menu-button"
          onClick={() => setShowMenu(!showMenu)}
        >
          Menu
        </button>

        <div className="navigation-controls">
          <button
            className="nav-button prev"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            ←
          </button>
          <button
            className="nav-button next"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            →
          </button>
        </div>

        <div className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {showMenu && (
        <div className="menu-overlay">
          <div className="menu-content">
            <h3 className="menu-title">Navigate to Slide</h3>
            <div className="menu-items">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  className={`menu-item ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  <span className="menu-item-number">{index + 1}</span>
                  <span className="menu-item-title">{slide.title}</span>
                </button>
              ))}
            </div>
            <button
              className="menu-close"
              onClick={() => setShowMenu(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <main className="slide-content">
        {renderSlide()}
      </main>
    </div>
  );
};

export default App;

