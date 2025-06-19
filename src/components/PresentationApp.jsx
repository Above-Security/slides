import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { slideData } from '../slides';
import { clarityEvent, claritySet, trackPresentationEngagement } from '../utils/clarity';
import { getStoredEmail, getSessionInfo } from '../utils/emailGating';
import EmailGate from './EmailGate';

const getSlideIndexFromUrl = (params, location) => {
  // First try to get from React Router params
  if (params.slideNumber) {
    const idx = parseInt(params.slideNumber, 10) - 1;
    if (!isNaN(idx) && idx >= 0 && idx < slideData.length) return idx;
  }

  // Fallback: parse from URL pathname
  let pathname = location.pathname;

  // Handle hash routing (from 404.html redirect)
  if (window.location.hash && window.location.hash.startsWith('#/')) {
    pathname = window.location.hash.substring(1); // Remove the #
  }

  const match = pathname.match(/\/slide\/(\d+)/);
  if (match) {
    const idx = parseInt(match[1], 10) - 1;
    if (!isNaN(idx) && idx >= 0 && idx < slideData.length) return idx;
  }
  return 0;
};

const PresentationApp = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [currentSlide, setCurrentSlide] = useState(getSlideIndexFromUrl(params, location));
  const [showMenu, setShowMenu] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [userEmail, setUserEmail] = useState(null);
  const slides = slideData;

  // Track presentation session start (with email context)
  useEffect(() => {
    // Check for stored email and session info
    const sessionInfo = getSessionInfo();
    if (sessionInfo.email) {
      setUserEmail(sessionInfo.email);
    }

    // Enhanced session tracking with email context
    clarityEvent('presentation_session_start');
    claritySet('presentation_name', 'Above Security Pitch Deck');
    claritySet('session_id', sessionInfo.sessionId);

    if (sessionInfo.email) {
      claritySet('user_has_email', 'true');
      claritySet('user_email_domain', sessionInfo.email.split('@')[1]);
      clarityEvent('presentation_start_with_email');
    } else {
      claritySet('user_has_email', 'false');
      clarityEvent('presentation_start_without_email');
    }

    setIsInitialLoad(false);
  }, []); // Empty dependency array - only run once on mount

  // Enhanced slide tracking with email context
  useEffect(() => {
    // Update URL when slide changes
    if (!isInitialLoad) {
      navigate(`/slide/${currentSlide + 1}`, { replace: false });
    }

    // Enhanced slide tracking with presentation engagement
    const currentSlideData = slides[currentSlide];
    trackPresentationEngagement(
      currentSlide + 1,
      currentSlideData?.title || `Slide ${currentSlide + 1}`,
      userEmail
    );

    claritySet('current_slide_number', currentSlide + 1);
    if (currentSlideData?.title) {
      claritySet('current_slide_title', currentSlideData.title);
    }
  }, [currentSlide, isInitialLoad, userEmail, navigate]);

  // Update slide when URL params change
  useEffect(() => {
    const newSlideIndex = getSlideIndexFromUrl(params, location);
    if (newSlideIndex !== currentSlide) {
      setCurrentSlide(newSlideIndex);
    }
  }, [params, location]);

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
    const newSlide = (currentSlide + 1) % slides.length;
    setCurrentSlide(newSlide);

    // Track navigation with email context
    clarityEvent('slide_navigation', {
      direction: 'next',
      from_slide: currentSlide + 1,
      to_slide: newSlide + 1,
      has_email: !!userEmail
    });
  };

  const prevSlide = () => {
    const newSlide = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newSlide);

    // Track navigation with email context
    clarityEvent('slide_navigation', {
      direction: 'previous',
      from_slide: currentSlide + 1,
      to_slide: newSlide + 1,
      has_email: !!userEmail
    });
  };

  const goToSlide = (index) => {
    const previousSlide = currentSlide;
    setCurrentSlide(index);
    setShowMenu(false);

    // Track menu navigation
    clarityEvent('slide_menu_navigation', {
      from_slide: previousSlide + 1,
      to_slide: index + 1,
      has_email: !!userEmail
    });
  };

  const renderSlide = () => {
    const SlideComponent = slides[currentSlide].Component;
    return <SlideComponent />;
  };

  // Handle email submission from EmailGate
  const handleEmailSubmitted = (email) => {
    setUserEmail(email);
    clarityEvent('email_gate_completed', {
      email_domain: email.split('@')[1],
      timestamp: new Date().toISOString()
    });
  };

  return (
    <EmailGate onEmailSubmitted={handleEmailSubmitted}>
      {/* Dynamic title for presentation slides */}
      <title>{`Above Security - Slide ${currentSlide + 1} | Runtime ITDR Platform`}</title>
      <meta name="description" content={`Above Security presentation slide ${currentSlide + 1} - Runtime Identity Threat Detection & Response platform.`} />
      
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
    </EmailGate>
  );
};

export default PresentationApp;
