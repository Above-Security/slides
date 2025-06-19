import React, { useState, useEffect } from 'react';
import './App.css';
import { slideData } from './slides';
import { clarityEvent, claritySet } from './utils/clarity';

const getSlideIndexFromUrl = () => {
  const match = window.location.pathname.match(/\/slides\/slide\/(\d+)/);
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

