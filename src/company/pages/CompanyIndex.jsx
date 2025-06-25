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

  // Table of Contents for navigation
  const tocSections = [
    { id: 'go-to-market', title: 'Go-to-Market', icon: 'fas fa-chart-line' },
    { id: 'pov-playbook', title: 'PoV Playbook', icon: 'fas fa-play-circle' },
    { id: 'metrics', title: 'Success Metrics', icon: 'fas fa-chart-bar' },
    { id: 'positioning', title: 'Market Position', icon: 'fas fa-crosshairs' },
    { id: 'roadmap', title: 'Product Roadmap', icon: 'fas fa-road' },
    { id: 'hypotheses', title: 'Key Hypotheses', icon: 'fas fa-lightbulb' },
    { id: 'value-proof', title: 'Value Validation', icon: 'fas fa-check-circle' },
    { id: 'risks', title: 'Risk Mitigation', icon: 'fas fa-shield-alt' },
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
        
        {/* Strategic Overview Cards */}
        <div className={styles["overview-cards"]}>
          <div className={styles["overview-card"]}>
            <div className={styles["card-icon"]}>
              <i className="fas fa-target" />
            </div>
            <h3>Mission Critical</h3>
            <p>Browser-native control plane that sees and stops what every other security tool misses</p>
          </div>
          <div className={styles["overview-card"]}>
            <div className={styles["card-icon"]}>
              <i className="fas fa-rocket" />
            </div>
            <h3>Market Ready</h3>
            <p>$7-9B TAM with proven go-to-market strategy and immediate customer validation</p>
          </div>
          <div className={styles["overview-card"]}>
            <div className={styles["card-icon"]}>
              <i className="fas fa-shield-alt" />
            </div>
            <h3>Category Leader</h3>
            <p>Runtime ITDR pioneer with unique post-authentication behavioral visibility</p>
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
          {/* Section divider with executive context */}
          <div className={styles["section-divider"]}>
            <div className={styles["divider-content"]}>
              <h2>Strategic Business Narrative</h2>
              <p>Comprehensive two-year execution plan for Above Security's Runtime Identity Threat Detection & Response platform</p>
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

      {/* Footer with next steps */}
      <footer className={styles["narrative-footer"]}>
        <div className={styles["footer-content"]}>
          <div className={styles["footer-cta"]}>
            <h3>Ready to Transform Your Security Posture?</h3>
            <p>Discover how Above Security's Runtime ITDR platform can provide the post-authentication visibility your organization needs.</p>
            <div className={styles["footer-actions"]}>
              <a href="/use-cases" className={styles["cta-button"]}>
                <i className="fas fa-layer-group" />
                Explore Use Cases
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
