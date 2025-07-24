import React, { useEffect, useState, useCallback } from 'react';
import { initializePostHog, posthogEvent } from '../../utils/posthog';
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
      initializePostHog();
      posthogEvent('company_narrative_view');
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

        {/* Action Buttons - Moved to top */}
        <div className={styles["hero-actions"]}>
          <a href="/#/insider-threat-matrix" className={styles["primary-cta-button"]}>
            <i className="fas fa-shield-alt" />
            Explore Insider Threat Matrix
          </a>
          <a href="/#/slides" className={styles["secondary-cta-button"]}>
            <i className="fas fa-presentation" />
            View Presentation Deck
          </a>
        </div>

        {/* Strategic Overview Cards with integrated quotes */}
        <div className={styles["overview-cards"]}>
          <div className={styles["overview-card"]}>
            <div className={styles["card-icon"]}>
              <i className="fas fa-eye" />
            </div>
            <h3>Real-time Visibility</h3>
            <p>Post-authentication behavioral visibility into what every user actually does in SaaS and web apps</p>
            <div className={styles["card-quote"]}>
              <em>"This is the first tool I've seen that tells me what's happening after login."</em>
              <span>— Carl, former CISO @ Johnson Controls</span>
            </div>
          </div>
          <div className={styles["overview-card"]}>
            <div className={styles["card-icon"]}>
              <i className="fas fa-clock" />
            </div>
            <h3>Weeks, Not Quarters</h3>
            <p>Fast setup (&lt;1 hr), evidence delivered in Week 1, actionable insights from day one</p>
            <div className={styles["card-quote"]}>
              <em>"If I can replace Cyberhaven + SSPM with this, I'm in."</em>
              <span>— Israel, CISO @ MIO Partners</span>
            </div>
          </div>
          <div className={styles["overview-card"]}>
            <div className={styles["card-icon"]}>
              <i className="fas fa-globe" />
            </div>
            <h3>Browser-Native</h3>
            <p>Chrome-only deployment with no agents, no traffic routing, no log parsing required</p>
            <div className={styles["card-quote"]}>
              <em>"I want to guide users, not punish them. Real-time nudges are powerful."</em>
              <span>— Leon, CISO @ OpenLane</span>
            </div>
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
              <div className={styles["ciso-insight"]}>
                <blockquote>
                  "We don't call it insider threat anymore. We call it <strong>insider protection</strong>."
                </blockquote>
                <cite>— Janel, Field CISO @ Trace3</cite>
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

      {/* CISO Advisory Board Quotes Section */}
      <section className={styles["ciso-quotes-section"]}>
        <div className={styles["content-wrapper"]}>
          <div className={styles["section-header"]}>
            <h2>What CISOs Are Saying</h2>
            <p>Insights from our advisory board validate Above's unique position in insider protection</p>
          </div>

          <div className={styles["quotes-grid"]}>
            <div className={styles["quote-card"]}>
              <div className={styles["quote-content"]}>
                <blockquote>
                  "This is the first tool I've seen that tells me what's happening <em>after</em> login."
                </blockquote>
                <cite>— Carl, former CISO at Johnson Controls</cite>
              </div>
            </div>

            <div className={styles["quote-card"]}>
              <div className={styles["quote-content"]}>
                <blockquote>
                  "I want to guide users, not punish them. Real-time nudges are powerful."
                </blockquote>
                <cite>— Leon, CISO at OpenLane</cite>
              </div>
            </div>

            <div className={styles["quote-card"]}>
              <div className={styles["quote-content"]}>
                <blockquote>
                  "If I can replace Cyberhaven + SSPM with this, I'm in."
                </blockquote>
                <cite>— Israel, CISO at MIO Partners</cite>
              </div>
            </div>

            <div className={styles["quote-card"]}>
              <div className={styles["quote-content"]}>
                <blockquote>
                  "We don't call it insider threat anymore. We call it <strong>insider protection</strong>."
                </blockquote>
                <cite>— Janel, Field CISO @ Trace3</cite>
              </div>
            </div>
          </div>

          <div className={styles["ciso-insights"]}>
            <h3>Key Validated Themes</h3>
            <div className={styles["insights-grid"]}>
              <div className={styles["insight-item"]}>
                <i className="fas fa-eye" />
                <span><strong>Post-login visibility</strong> fills a critical blind spot</span>
              </div>
              <div className={styles["insight-item"]}>
                <i className="fas fa-shield-alt" />
                <span><strong>Insider protection</strong> over threat detection</span>
              </div>
              <div className={styles["insight-item"]}>
                <i className="fas fa-compress-arrows-alt" />
                <span><strong>Tool consolidation</strong> is a priority for 2025</span>
              </div>
              <div className={styles["insight-item"]}>
                <i className="fas fa-users" />
                <span><strong>Real-time guidance</strong> prevents user mistakes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className={styles["advisory-board-section"]}>
        <div className={styles["content-wrapper"]}>
          <div className={styles["section-header"]}>
            <h2>Backed by Industry Leaders</h2>
            <p>Our advisory board includes CEOs, CISOs, and security leaders from the world's most innovative companies</p>
          </div>

          <div className={styles["advisors-grid"]}>
            <div className={styles["advisor-card"]}>
              <div className={styles["advisor-info"]}>
                <h4>Ofer Ben Noon</h4>
                <p>CEO @ Talon</p>
              </div>
            </div>

            <div className={styles["advisor-card"]}>
              <div className={styles["advisor-info"]}>
                <h4>Ofer Smadari</h4>
                <p>CEO @ Torq</p>
              </div>
            </div>

            <div className={styles["advisor-card"]}>
              <div className={styles["advisor-info"]}>
                <h4>Etay Bogner</h4>
                <p>GM @ Proofpoint</p>
              </div>
            </div>

            <div className={styles["advisor-card"]}>
              <div className={styles["advisor-info"]}>
                <h4>Karl Mattson</h4>
                <p>CISO @ Endor Labs</p>
              </div>
            </div>

            <div className={styles["advisor-card"]}>
              <div className={styles["advisor-info"]}>
                <h4>Matan Fattal</h4>
                <p>CEO @ Ivix / Silverfort</p>
              </div>
            </div>
          </div>

          <div className={styles["additional-advisors"]}>
            <p className={styles["additional-text"]}>
              <strong>Plus directors and executives from</strong> Wiz, Island, and other leading security companies
            </p>
          </div>
        </div>
      </section>

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
              <a href="/#/insider-threat-matrix" className={styles["cta-button"]}>
                <i className="fas fa-shield-alt" />
                Explore Insider Threat Matrix
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompanyIndex;
