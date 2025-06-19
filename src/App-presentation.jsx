import React, { useState, useEffect } from 'react';
import './App.css';
import { slideData } from './slides';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const slides = slideData;

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

