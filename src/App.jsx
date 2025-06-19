import React, { useState, useEffect } from 'react';
import './App.css';
import { slideData } from './slides';
import { clarityEvent, claritySet } from './utils/clarity';

const getSlideIndexFromUrl = () => {
  const match = window.location.pathname.match(/slide\/(\d+)/);
  if (match) {
    const idx = parseInt(match[1], 10) - 1;
    if (!isNaN(idx) && idx >= 0 && idx < slideData.length) return idx;
  }
  return 0;
};

const App = () => {
  // Redirect to /slides/slide/1 if not already on a valid slide path
  useEffect(() => {
    const isOnSlides = window.location.pathname.startsWith('/slides/slide/');
    if (!isOnSlides) {
      window.history.replaceState(null, '', '/slides/slide/1');
    }
  }, []);

  const [currentSlide, setCurrentSlide] = useState(getSlideIndexFromUrl());
  const [showMenu, setShowMenu] = useState(false);
  const slides = slideData;

  // Track presentation session start
  useEffect(() => {
    clarityEvent('presentation_session_start', {
      initial_slide: currentSlide + 1,
      total_slides: slides.length,
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`
    });
    
    // Set session-level tags
    claritySet('presentation_name', 'Above Security Pitch Deck');
    claritySet('total_slides', slides.length);
  }, []); // Empty dependency array - only run once on mount

  // Sync URL with current slide and track in Clarity
  useEffect(() => {
    const url = `/slides/slide/${currentSlide + 1}`;
    if (window.location.pathname !== url) {
      window.history.replaceState(null, '', url);
    }
    
    // Track slide navigation in Clarity
    const slideTitle = slides[currentSlide]?.title || `Slide ${currentSlide + 1}`;
    clarityEvent('slide_navigation', {
      slide_index: currentSlide + 1,
      slide_title: slideTitle,
      total_slides: slides.length
    });
    
    // Set custom Clarity tags for current slide
    claritySet('current_slide', slideTitle);
    claritySet('slide_number', currentSlide + 1);
  }, [currentSlide]);

  // Listen for browser navigation (back/forward)
  useEffect(() => {
    const onPopState = () => {
      const newSlideIndex = getSlideIndexFromUrl();
      setCurrentSlide(newSlideIndex);
      
      // Track browser navigation
      clarityEvent('browser_navigation', {
        slide_index: newSlideIndex + 1,
        navigation_type: 'browser_button'
      });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        nextSlide();
        clarityEvent('keyboard_navigation', { direction: 'next', key: event.key });
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
        clarityEvent('keyboard_navigation', { direction: 'previous', key: event.key });
      } else if (event.key === 'Escape') {
        setShowMenu(false);
        clarityEvent('menu_interaction', { action: 'close_via_escape' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    const previousSlide = currentSlide;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    clarityEvent('slide_navigation', { 
      action: 'next', 
      method: 'button_click',
      from_slide: previousSlide + 1,
      to_slide: ((previousSlide + 1) % slides.length) + 1
    });
  };

  const prevSlide = () => {
    const previousSlide = currentSlide;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    clarityEvent('slide_navigation', { 
      action: 'previous', 
      method: 'button_click',
      from_slide: previousSlide + 1,
      to_slide: ((previousSlide - 1 + slides.length) % slides.length) + 1
    });
  };

  const goToSlide = (index) => {
    const previousSlide = currentSlide;
    setCurrentSlide(index);
    setShowMenu(false);
    
    clarityEvent('slide_navigation', { 
      action: 'direct_navigation', 
      method: 'menu_click',
      from_slide: previousSlide + 1,
      to_slide: index + 1,
      slide_title: slides[index]?.title
    });
    
    clarityEvent('menu_interaction', { action: 'slide_selected', slide_index: index + 1 });
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
          onClick={() => {
            const newShowMenu = !showMenu;
            setShowMenu(newShowMenu);
            clarityEvent('menu_interaction', { 
              action: newShowMenu ? 'open' : 'close',
              method: 'button_click',
              current_slide: currentSlide + 1
            });
          }}
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

