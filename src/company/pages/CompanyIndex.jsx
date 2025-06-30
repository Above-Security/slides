import React, { useEffect, useState, useCallback } from 'react';
import { initializeClarity, clarityEvent } from '../../utils/clarity';
import FloatingTOC from '../../components/FloatingTOC';
import VisionHero from '../sections/VisionHero';
import GoToMarket from '../sections/GoToMarket';
import PovPlaybook from '../sections/PovPlaybook';
import MetricsSection from '../sections/MetricsSection';
import PositioningSection from '../sections/PositioningSection';
import RoadmapSection from '../sections/RoadmapSection';
import HypothesesSection from '../sections/HypothesesSection';
import ValueProofSection from '../sections/ValueProofSection';
import RisksSection from '../sections/RisksSection';
import ExecutiveSummarySection from '../sections/ExecutiveSummarySection';
import styles from '../styles/CompanyIndex.module.css';

const CompanyIndex = () => {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress handler
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  }, []);

  useEffect(() => {
    try {
      initializeClarity();
      clarityEvent('company_narrative_view');
    } catch (error) {
      console.warn('Analytics initialization failed:', error);
    }

    // Add scroll listener for progress indicator
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Table of Contents for navigation - Updated from NARRATIVE.md
  const tocSections = [
    { id: 'go-to-market', title: 'Year-1 Go-to-Market', icon: 'fas fa-chart-line' },
    { id: 'pov-playbook', title: 'PoV & Success Playbook', icon: 'fas fa-play-circle' },
    { id: 'metrics', title: 'Metrics That Matter', icon: 'fas fa-chart-bar' },
    { id: 'positioning', title: 'Replace vs Enhance', icon: 'fas fa-crosshairs' },
    { id: 'roadmap', title: 'Year-2 Expansion', icon: 'fas fa-road' },
    { id: 'hypotheses', title: 'Deal-Critical Hypotheses', icon: 'fas fa-lightbulb' },
    { id: 'value-proof', title: 'Use Cases & Visibility', icon: 'fas fa-eye' },
    { id: 'risks', title: 'Critical Risks', icon: 'fas fa-shield-alt' },
    { id: 'executive-summary', title: 'Executive Summary', icon: 'fas fa-flag-checkered' }
  ];

  return (
    <div className={styles["company-narrative-container"]}>
      {/* Progress indicator */}
      <div className={styles["progress-indicator"]}>
        <div 
          className={styles["progress-bar"]} 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Enhanced Hero with gradient background */}
      <div className={styles["hero-wrapper"]}>
        <VisionHero />
        
        {/* Strategic Overview Cards - Updated from NARRATIVE.md */}
        <div className={styles["overview-cards"]}>
          <div className={styles["overview-card"]}>
            <div className={styles["card-icon"]}>
              <i className="fas fa-eye" />
            </div>
            <h3>Real-time Visibility</h3>
            <p>Post-authentication behavioral visibility into what every user actually does in SaaS and web apps</p>
          </div>
          <div className={styles["overview-card"]}>
            <div className={styles["card-icon"]}>
              <i className="fas fa-clock" />
            </div>
            <h3>Weeks, Not Quarters</h3>
            <p>Fast setup (&lt;1 hr), evidence delivered in Week 1, actionable insights from day one</p>
          </div>
          <div className={styles["overview-card"]}>
            <div className={styles["card-icon"]}>
              <i className="fas fa-browser" />
            </div>
            <h3>Browser-Native</h3>
            <p>Chrome-only deployment with no agents, no traffic routing, no log parsing required</p>
          </div>
        </div>
      </div>

      {/* Floating Table of Contents */}
      <FloatingTOC 
        sections={tocSections}
        className={styles["narrative-toc"]}
      />

      {/* Main content with enhanced layout */}
      <main className={styles["company-narrative-content"]}>
        <div className={styles["content-wrapper"]}>
          {/* Section divider with executive context - Updated from NARRATIVE.md */}
          <div className={styles["section-divider"]}>
            <div className={styles["divider-content"]}>
              <h2>Strategic Business Narrative</h2>
              <p>Real-time visibility into what every user actually does in SaaS and web apps — to detect intent, catch insider threats, and shut down account misuse before it escalates.</p>
              <div className={styles["narrative-tagline"]}>
                <strong>Above = post-auth visibility, behavioral detection, and real-time control — built on browser telemetry.</strong>
              </div>
            </div>
          </div>

          <GoToMarket />
          
          <div className={styles["section-break"]} />
          <PovPlaybook />
          
          <div className={styles["section-break"]} />
          <MetricsSection />
          
          <div className={styles["section-break"]} />
          <PositioningSection />
          
          <div className={styles["section-break"]} />
          <RoadmapSection />
          
          <div className={styles["section-break"]} />
          <HypothesesSection />
          
          <div className={styles["section-break"]} />
          <ValueProofSection />
          
          <div className={styles["section-break"]} />
          <RisksSection />
          
          <div className={styles["section-break"]} />
          <ExecutiveSummarySection />
        </div>
      </main>

      {/* Footer with next steps - Updated from NARRATIVE.md */}
      <footer className={styles["narrative-footer"]}>
        <div className={styles["footer-content"]}>
          <div className={styles["footer-cta"]}>
            <h3>Ready to See What Users Actually Do?</h3>
            <p>Discover the behavioral evidence your CASB can't see — OAuth grants, session persistence, AI misuse, and insider intent before it becomes an incident.</p>
            <div className={styles["footer-highlight"]}>
              <p><strong>We give teams visibility into user behavior they've never had — and we do it in weeks, not quarters.</strong></p>
            </div>
            <div className={styles["footer-actions"]}>
              <a href="/use-cases" className={styles["cta-button"]}>
                <i className="fas fa-eye" />
                See Use Cases & Visibility
              </a>
              <a href="/slides" className={styles["cta-button-secondary"]}>
                <i className="fas fa-presentation" />
                View Executive Deck
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompanyIndex;
