"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import BrandLogo from "../components/ui/BrandLogo";
import EmailGate from "../components/ui/EmailGate";

// Import all slides
import Slide1 from "../components/slides/Slide1";
import Slide2 from "../components/slides/Slide2";
import Slide3 from "../components/slides/Slide3";
import Slide4 from "../components/slides/Slide4";
import Slide5 from "../components/slides/Slide5";
import Slide6 from "../components/slides/Slide6";
import Slide7 from "../components/slides/Slide7";
import Slide8 from "../components/slides/Slide8";
import Slide9 from "../components/slides/Slide9";
import Slide10 from "../components/slides/Slide10";

const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6,
  Slide7, Slide8, Slide9, Slide10
];

export default function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPresenterMode, setIsPresenterMode] = useState(false);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Escape") {
        setIsPresenterMode(false);
      } else if (e.key === "f" || e.key === "F") {
        setIsPresenterMode(!isPresenterMode);
      } else if (e.key >= "1" && e.key <= "9") {
        const slideNum = parseInt(e.key);
        if (slideNum <= slides.length) {
          goToSlide(slideNum - 1);
        }
      } else if (e.key === "0") {
        if (slides.length >= 10) goToSlide(9);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, nextSlide, prevSlide, goToSlide, isPresenterMode]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <>
      <SEO 
        title="Above Security - Insider Protection Platform Slides"
        description="Discover everything. See intent. Stop risk. Above Security's comprehensive presentation on insider protection."
        canonicalUrl="https://abovesec.com/slides"
        keywords="Above Security, insider protection, presentation, slides"
      />
      
      <EmailGate
        title="Access Above Security Presentation"
        subtitle="Get exclusive access to our insider protection platform slides and discover how Above stops risk before it happens."
      >
        <div className="min-h-screen w-full overflow-hidden">
        {/* Static gradient background - matching homepage */}
        <div className="fixed inset-0 bg-gradient-to-br from-above-cream via-white to-above-white">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-above-rose-700/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-above-lavender-700/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-above-peach-700/15 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Navigation header - minimal like homepage */}
        {!isPresenterMode && (
          <nav className="relative z-20 px-6 py-4 md:px-12">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <BrandLogo size="small" showText={true} showUnderline={true} href="/" />
              <div className="flex items-center gap-6 text-sm">
                <span className="text-slate-500">
                  Slide {currentSlide + 1} of {slides.length}
                </span>
                <button
                  onClick={() => setIsPresenterMode(true)}
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Fullscreen (F)
                </button>
              </div>
            </div>
          </nav>
        )}

        {/* Slide content */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`min-h-${isPresenterMode ? 'screen' : '[calc(100vh-120px)]'} flex items-center justify-center px-6 md:px-12`}
            >
              <CurrentSlideComponent isPresenterMode={isPresenterMode} slideNumber={currentSlide + 1} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom navigation - minimal dots like homepage */}
        {!isPresenterMode && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft-sm">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-200 ${
                    index === currentSlide 
                      ? 'w-8 h-2 bg-above-rose-700 rounded-full' 
                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-400 rounded-full'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Presenter mode indicator */}
        {isPresenterMode && (
          <div className="fixed top-4 right-4 text-xs text-slate-400 z-20">
            ESC to exit • ← → to navigate • 1-9 to jump
          </div>
        )}

        {/* Invisible navigation buttons for keyboard users */}
        <button
          onClick={prevSlide}
          className="fixed left-0 top-1/2 -translate-y-1/2 w-20 h-40 opacity-0 cursor-w-resize"
          aria-label="Previous slide"
        />
        <button
          onClick={nextSlide}
          className="fixed right-0 top-1/2 -translate-y-1/2 w-20 h-40 opacity-0 cursor-e-resize"
          aria-label="Next slide"
        />
      </div>
      </EmailGate>
    </>
  );
}