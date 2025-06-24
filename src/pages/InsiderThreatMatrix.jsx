import React, { useState, useMemo, useEffect } from 'react';
import './InsiderThreatMatrix.css';

// Import the insider threat matrix data
import insiderThreatData from '../data/insider-threat-matrix.json';
import aboveCoverageMap from '../data/above-coverage-map.json';

const InsiderThreatMatrix = () => {
  // Core state
  const [currentView, setCurrentView] = useState('dashboard'); // dashboard, matrix, detail
  const [selectedThreat, setSelectedThreat] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Enhanced UX state
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [breadcrumbs, setBreadcrumbs] = useState([{ label: 'Dashboard', view: 'dashboard' }]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(!localStorage.getItem('matrix-visited'));

  // Calculate comprehensive statistics
  const stats = useMemo(() => {
    const allThreats = [];
    const categoryStats = {};

    insiderThreatData.articles.forEach(article => {
      const categoryThreats = [];

      article.sections.forEach(section => {
        const coverage = aboveCoverageMap[section.id] || {
          level: 'none',
          explanation: 'Not currently covered by Above Security.',
          capabilities: [],
          scenario: 'Outside browser-based detection scope.'
        };

        const threat = {
          category: article.title,
          id: section.id,
          title: section.title,
          description: section.description,
          coverage: coverage
        };

        allThreats.push(threat);
        categoryThreats.push(threat);
      });

      const categoryDirect = categoryThreats.filter(t => t.coverage.level === 'direct').length;
      const categoryPartial = categoryThreats.filter(t => t.coverage.level === 'partial').length;
      const categoryTotal = categoryThreats.length;
      const categoryPercentage = Math.round(((categoryDirect + categoryPartial * 0.5) / categoryTotal) * 100);

      categoryStats[article.title] = {
        total: categoryTotal,
        direct: categoryDirect,
        partial: categoryPartial,
        none: categoryTotal - categoryDirect - categoryPartial,
        percentage: categoryPercentage,
        threats: categoryThreats
      };
    });

    const coverageCounts = {
      direct: allThreats.filter(t => t.coverage.level === 'direct').length,
      partial: allThreats.filter(t => t.coverage.level === 'partial').length,
      none: allThreats.filter(t => t.coverage.level === 'none').length
    };

    const totalThreats = allThreats.length;
    const coveragePercentage = Math.round(((coverageCounts.direct + coverageCounts.partial * 0.5) / totalThreats) * 100);

    return {
      allThreats,
      coverageCounts,
      totalThreats,
      coveragePercentage,
      categoryStats
    };
  }, []);

  // Get filtered threats for matrix view
  const filteredThreats = useMemo(() => {
    if (selectedCategory === 'all') {
      return stats.allThreats;
    }
    return stats.categoryStats[selectedCategory]?.threats || [];
  }, [stats, selectedCategory]);

  // Search filtered threats
  const searchFilteredThreats = useMemo(() => {
    if (!searchTerm) return filteredThreats;

    return filteredThreats.filter(threat =>
      threat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      threat.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [filteredThreats, searchTerm]);

  // Enhanced search functionality with suggestions
  const generateSearchSuggestions = useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) return [];

    const allTerms = stats.allThreats.flatMap(threat => [
      threat.title,
      threat.id,
      threat.category,
      ...threat.coverage.capabilities
    ]);

    return allTerms
      .filter(term => term.toLowerCase().includes(searchTerm.toLowerCase()))
      .slice(0, 6)
      .filter((term, index, arr) => arr.indexOf(term) === index); // Remove duplicates
  }, [searchTerm, stats.allThreats]);

  const getCoverageIcon = (level) => {
    switch (level) {
      case 'direct': return <i className="fas fa-bullseye" aria-label="Direct coverage"></i>;
      case 'partial': return <i className="fas fa-search" aria-label="Partial coverage"></i>;
      default: return <i className="fas fa-times" aria-label="No coverage"></i>;
    }
  };

  const getCoverageClass = (level) => {
    switch (level) {
      case 'direct': return 'coverage-direct';
      case 'partial': return 'coverage-partial';
      default: return 'coverage-none';
    }
  };

  // Security impact calculator based on coverage data
  const getSecurityImpactMetrics = useMemo(() => {
    // Calculate risk exposure based on coverage gaps
    const uncoveredThreats = stats.allThreats.filter(t => t.coverage.level === 'none');
    const partiallyUncovered = stats.allThreats.filter(t => t.coverage.level === 'partial');

    // Risk scoring based on threat categories (higher = more critical)
    const riskWeights = {
      'Data Destruction': 0.9,
      'Data Exfiltration': 1.0,
      'Data Manipulation': 0.8,
      'Resource Hijacking': 0.6,
      'Denial of Service': 0.7
    };

    const totalRiskExposure = uncoveredThreats.reduce((total, threat) => {
      const weight = riskWeights[threat.category] || 0.5;
      return total + weight;
    }, 0);

    const partialRiskExposure = partiallyUncovered.reduce((total, threat) => {
      const weight = (riskWeights[threat.category] || 0.5) * 0.3; // 30% risk for partial coverage
      return total + weight;
    }, 0);

    const totalPossibleRisk = stats.allThreats.reduce((total, threat) => {
      return total + (riskWeights[threat.category] || 0.5);
    }, 0);

    const riskReduction = Math.round(((totalPossibleRisk - totalRiskExposure - partialRiskExposure) / totalPossibleRisk) * 100);

    // Time to deployment calculation
    const traditionalDeploymentWeeks = 12; // Typical enterprise security tool deployment
    const aboveDeploymentHours = 24;
    const timeSavings = traditionalDeploymentWeeks * 7 * 24 - aboveDeploymentHours;

    // Calculate detection speed advantage
    const traditionalDetectionDays = 287; // Industry average breach detection time
    const aboveDetectionMinutes = 5; // Real-time detection
    const detectionSpeedUp = Math.round((traditionalDetectionDays * 24 * 60) / aboveDetectionMinutes);

    return {
      riskReduction,
      uncoveredCount: uncoveredThreats.length,
      partialCount: partiallyUncovered.length,
      timeSavingsDays: Math.round(timeSavings / 24),
      deploymentSpeedMultiplier: Math.round(traditionalDeploymentWeeks * 168 / 24),
      detectionSpeedUp: detectionSpeedUp > 1000 ? `${Math.round(detectionSpeedUp / 1000)}` : detectionSpeedUp,
      coverageEffectiveness: Math.round((stats.coverageCounts.direct + stats.coverageCounts.partial * 0.5) / stats.totalThreats * 100)
    };
  }, [stats]);

  // Enhanced navigation with breadcrumbs
  const updateBreadcrumbs = (view, threat = null, category = null) => {
    const newBreadcrumbs = [{ label: 'Dashboard', view: 'dashboard' }];

    if (view === 'matrix') {
      const categoryLabel = category === 'all' ? 'All Threats' : category;
      newBreadcrumbs.push({ label: categoryLabel, view: 'matrix', category });
    } else if (view === 'detail' && threat) {
      if (selectedCategory !== 'all') {
        newBreadcrumbs.push({ label: selectedCategory, view: 'matrix', category: selectedCategory });
      } else {
        newBreadcrumbs.push({ label: 'All Threats', view: 'matrix', category: 'all' });
      }
      newBreadcrumbs.push({ label: `${threat.id}: ${threat.title}`, view: 'detail', threat });
    }

    setBreadcrumbs(newBreadcrumbs);
  };

  // Enhanced view transitions with loading states
  const changeView = (newView, options = {}) => {
    setIsLoading(true);

    setTimeout(() => {
      setCurrentView(newView);

      if (options.threat) setSelectedThreat(options.threat);
      if (options.category !== undefined) setSelectedCategory(options.category);

      updateBreadcrumbs(newView, options.threat, options.category);
      setIsLoading(false);
    }, 80); // Faster loading state for better responsiveness
  };

  // Initialize component and handle first visit
  useEffect(() => {
    if (isFirstVisit) {
      setShowOnboarding(true);
      localStorage.setItem('matrix-visited', 'true');
      setIsFirstVisit(false);
    }
    updateBreadcrumbs(currentView, selectedThreat, selectedCategory);
  }, []);

  // Update breadcrumbs when view changes
  useEffect(() => {
    updateBreadcrumbs(currentView, selectedThreat, selectedCategory);
  }, [currentView, selectedThreat, selectedCategory]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Only handle if no input is focused
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'SELECT') {
        return;
      }

      switch (e.key) {
        case '1':
          changeView('dashboard');
          break;
        case '2':
          changeView('matrix', { category: selectedCategory });
          break;
        case 'Escape':
          if (currentView === 'detail') {
            changeView('matrix', { category: selectedCategory });
          } else if (currentView === 'matrix') {
            changeView('dashboard');
          }
          if (showOnboarding) {
            setShowOnboarding(false);
          }
          break;
        case '/':
          e.preventDefault();
          if (currentView === 'matrix') {
            document.querySelector('.threat-search')?.focus();
          }
          break;
        case '?':
          setShowOnboarding(true);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [currentView, selectedCategory, showOnboarding]);

  // Dashboard View - High-level insights
  const renderDashboard = () => (
    <div className="dashboard-container">
      <div className="dashboard-hero">
        <div className="hero-stats">
          <div className="primary-metric">
            <div className="metric-value">{stats.coveragePercentage}%</div>
            <div className="metric-label">Insider Threat Coverage</div>
            <div className="metric-subtitle">Industry-leading runtime detection</div>
          </div>

          <div className="secondary-metrics">
            <div className="metric-card">
              <div className="metric-icon"><i className="fas fa-bullseye"></i></div>
              <div className="metric-number">{stats.coverageCounts.direct}</div>
              <div className="metric-text">Direct Coverage</div>
            </div>
            <div className="metric-card">
              <div className="metric-icon"><i className="fas fa-search"></i></div>
              <div className="metric-number">{stats.coverageCounts.partial}</div>
              <div className="metric-text">Partial Coverage</div>
            </div>
            <div className="metric-card">
              <div className="metric-icon"><i className="fas fa-bolt"></i></div>
              <div className="metric-number">&lt;24h</div>
              <div className="metric-text">Deployment</div>
            </div>
          </div>
        </div>
      </div>

      <div className="category-heatmap">
        <h2>Coverage by Threat Category</h2>
        <div className="heatmap-grid">
          {Object.entries(stats.categoryStats).map(([category, data]) => (
            <div
              key={category}
              className="heatmap-category"
              onClick={() => changeView('matrix', { category })}
            >
              <div className="category-header">
                <div className="category-name">{category}</div>
                <div className="category-score">{data.percentage}%</div>
              </div>

              <div className="coverage-bar">
                <div
                  className="bar-fill direct"
                  style={{ width: `${(data.direct / data.total) * 100}%` }}
                />
                <div
                  className="bar-fill partial"
                  style={{ width: `${(data.partial / data.total) * 100}%` }}
                />
              </div>

              <div className="category-stats">
                <span className="stat-direct">{data.direct}</span>
                <span className="stat-partial">{data.partial}</span>
                <span className="stat-total">/ {data.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="value-proposition">
        <h2>Why Above Leads in Runtime Threat Detection</h2>
        <div className="value-grid">
          <div className="value-card">
            <div className="value-icon"><i className="fas fa-bullseye"></i></div>
            <h3>Runtime Visibility</h3>
            <p>First platform to monitor user behavior inside applications in real-time</p>
            <div className="value-metric">100% session coverage</div>
          </div>

          <div className="value-card">
            <div className="value-icon"><i className="fas fa-brain"></i></div>
            <h3>AI-Powered Intent</h3>
            <p>LLM-based semantic understanding of user actions and motivations</p>
            <div className="value-metric">90% accuracy</div>
          </div>

          <div className="value-card">
            <div className="value-icon"><i className="fas fa-bolt"></i></div>
            <h3>Instant Deployment</h3>
            <p>Browser-native deployment without infrastructure changes</p>
            <div className="value-metric">&lt;24 hour rollout</div>
          </div>
        </div>

        {/* Security Impact Calculator Section */}
        <div className="security-calculator">
          <h3>
            <i className="fas fa-calculator"></i>
            Security Impact Calculator
          </h3>
          <div className="calculator-grid">
            <div className="calc-card primary">
              <div className="calc-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="calc-content">
                <div className="calc-value">{getSecurityImpactMetrics.riskReduction}%</div>
                <div className="calc-label">Risk Reduction</div>
                <div className="calc-subtitle">With Above deployment</div>
              </div>
            </div>

            <div className="calc-card">
              <div className="calc-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="calc-content">
                <div className="calc-value">{getSecurityImpactMetrics.deploymentSpeedMultiplier}x</div>
                <div className="calc-label">Faster Deployment</div>
                <div className="calc-subtitle">vs traditional tools</div>
              </div>
            </div>

            <div className="calc-card">
              <div className="calc-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <div className="calc-content">
                <div className="calc-value">{getSecurityImpactMetrics.detectionSpeedUp}x</div>
                <div className="calc-label">Faster Detection</div>
                <div className="calc-subtitle">Real-time vs 287-day average</div>
              </div>
            </div>

            <div className="calc-card">
              <div className="calc-icon">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <div className="calc-content">
                <div className="calc-value">{getSecurityImpactMetrics.uncoveredCount}</div>
                <div className="calc-label">Uncovered Threats</div>
                <div className="calc-subtitle">Require additional controls</div>
              </div>
            </div>
          </div>

          <div className="calculator-summary">
            <p>
              <strong>Bottom Line:</strong> Above Security provides immediate coverage for {stats.coverageCounts.direct + stats.coverageCounts.partial} out of {stats.totalThreats} insider threats,
              reducing your organization's risk exposure by {getSecurityImpactMetrics.riskReduction}% within 24 hours.
            </p>
            <div className="time-savings">
              <i className="fas fa-clock"></i>
              <span>Save {getSecurityImpactMetrics.timeSavingsDays} days compared to traditional security deployments</span>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <button
            className="cta-button"
            onClick={() => changeView('matrix', { category: 'all' })}
          >
            Explore Full Matrix →
          </button>
        </div>
      </div>
    </div>
  );

  // Matrix View - Interactive grid
  const renderMatrix = () => (
    <div className="matrix-container">
      <div className="matrix-header">
        <div className="matrix-title">
          <h2>
            {selectedCategory === 'all' ? 'Complete Threat Matrix' : `${selectedCategory} Threats`}
          </h2>
          <p>
            {selectedCategory === 'all'
              ? `All ${stats.totalThreats} insider threat vectors`
              : `${stats.categoryStats[selectedCategory]?.total || 0} threats in this category`
            }
          </p>
        </div>

        <div className="matrix-controls">
          <select
            value={selectedCategory}
            onChange={(e) => {
              changeView('matrix', { category: e.target.value });
            }}
            className="category-selector"
          >
            <option value="all">All Categories</option>
            {Object.entries(stats.categoryStats).map(([category, data]) => (
              <option key={category} value={category}>
                {category} ({data.total})
              </option>
            ))}
          </select>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search threats, IDs, or capabilities..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowSearchSuggestions(e.target.value.length >= 2);
              }}
              onFocus={() => setShowSearchSuggestions(searchTerm.length >= 2)}
              onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 200)}
              className="threat-search"
            />
            <i className="fas fa-search search-icon"></i>

            {showSearchSuggestions && generateSearchSuggestions.length > 0 && (
              <div className="search-suggestions">
                {generateSearchSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    className="suggestion-item"
                    onClick={() => {
                      setSearchTerm(suggestion);
                      setShowSearchSuggestions(false);
                    }}
                  >
                    <i className="fas fa-search suggestion-icon"></i>
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="matrix-legend">
        <div className="legend-item">
          <span className="legend-icon"><i className="fas fa-bullseye"></i></span>
          <span>Direct Coverage</span>
        </div>
        <div className="legend-item">
          <span className="legend-icon"><i className="fas fa-search"></i></span>
          <span>Partial Coverage</span>
        </div>
        <div className="legend-item">
          <span className="legend-icon">❌</span>
          <span>No Coverage</span>
        </div>
      </div>

      <div className="threat-matrix">
        {searchFilteredThreats.map(threat => (
          <div
            key={threat.id}
            className={`matrix-cell ${getCoverageClass(threat.coverage.level)}`}
            onClick={() => changeView('detail', { threat })}
          >
            <div className="cell-id">{threat.id}</div>
            <div className="cell-icon">{getCoverageIcon(threat.coverage.level)}</div>
            <div className="cell-title">{threat.title}</div>
            <div className="cell-category">{threat.category}</div>
          </div>
        ))}
      </div>

      {searchFilteredThreats.length === 0 && (
        <div className="no-results">
          <div className="no-results-icon"><i className="fas fa-search"></i></div>
          <h3>No threats found</h3>
          <p>Try adjusting your search or category filter</p>
        </div>
      )}
    </div>
  );

  // Detail View - Deep dive into specific threat
  const renderDetail = () => {
    if (!selectedThreat) return null;

    return (
      <div className="detail-container">
        <div className="detail-header">
          <div className="threat-meta">
            <div className="threat-id-large">{selectedThreat.id}</div>
            <div className="threat-category-tag">{selectedThreat.category}</div>
          </div>

          <h1 className="threat-title-large">{selectedThreat.title}</h1>

          <div className={`coverage-badge ${getCoverageClass(selectedThreat.coverage.level)}`}>
            <span className="badge-icon">{getCoverageIcon(selectedThreat.coverage.level)}</span>
            <span className="badge-text">
              {selectedThreat.coverage.level === 'direct' ? 'Direct Coverage' :
                selectedThreat.coverage.level === 'partial' ? 'Partial Coverage' : 'No Coverage'}
            </span>
          </div>
        </div>

        <div className="detail-content">
          <div className="threat-description-section">
            <h3>Threat Overview</h3>
            <div
              className="threat-description-full"
              dangerouslySetInnerHTML={{ __html: selectedThreat.description }}
            />
          </div>

          <div className="above-analysis-section">
            <h3>Above Security Analysis</h3>
            <p className="analysis-explanation">{selectedThreat.coverage.explanation}</p>

            {selectedThreat.coverage.capabilities.length > 0 && (
              <div className="capabilities-section">
                <h4>Detection Capabilities</h4>
                <div className="capabilities-grid">
                  {selectedThreat.coverage.capabilities.map((capability, index) => (
                    <div key={index} className="capability-tag">
                      {capability}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedThreat.coverage.scenario && (
              <div className="scenario-section">
                <h4>Real-World Scenario</h4>
                <div className="scenario-card">
                  <p>{selectedThreat.coverage.scenario}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="detail-actions">
          <button
            className="back-button"
            onClick={() => changeView('matrix', { category: selectedCategory })}
          >
            ← Back to Matrix
          </button>

          <button
            className="next-button"
            onClick={() => {
              const currentIndex = searchFilteredThreats.findIndex(t => t.id === selectedThreat.id);
              const nextThreat = searchFilteredThreats[currentIndex + 1];
              if (nextThreat) {
                changeView('detail', { threat: nextThreat });
              }
            }}
            disabled={searchFilteredThreats.findIndex(t => t.id === selectedThreat.id) === searchFilteredThreats.length - 1}
          >
            Next Threat →
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="insider-threat-matrix">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner">
            <i className="fas fa-spinner fa-spin"></i>
            <span>Loading...</span>
          </div>
        </div>
      )}

      {/* Onboarding Modal */}
      {showOnboarding && (
        <div className="onboarding-overlay">
          <div className="onboarding-modal">
            <div className="onboarding-header">
              <h2>Welcome to the Insider Threat Matrix</h2>
              <button
                className="close-onboarding"
                onClick={() => setShowOnboarding(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="onboarding-content">
              <div className="onboarding-step">
                <div className="step-icon">
                  <i className="fas fa-chart-bar"></i>
                </div>
                <div className="step-content">
                  <h3>Dashboard Overview</h3>
                  <p>Get a high-level view of Above Security's comprehensive threat coverage across all insider threat categories.</p>
                </div>
              </div>
              <div className="onboarding-step">
                <div className="step-icon">
                  <i className="fas fa-th"></i>
                </div>
                <div className="step-content">
                  <h3>Interactive Matrix</h3>
                  <p>Explore individual threats, filter by categories, and search for specific threat vectors.</p>
                </div>
              </div>
              <div className="onboarding-step">
                <div className="step-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <div className="step-content">
                  <h3>Coverage Analysis</h3>
                  <p>See detailed analysis of Above's detection capabilities for each threat, including real-world scenarios.</p>
                </div>
              </div>
            </div>
            <div className="onboarding-actions">
              <button
                className="start-exploring"
                onClick={() => setShowOnboarding(false)}
              >
                Start Exploring →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Navigation with Breadcrumbs */}
      <nav className="matrix-navigation">
        <div className="nav-brand">
          <h1>Above Security × Insider Threat Matrix</h1>
          <button
            className="onboarding-trigger"
            onClick={() => setShowOnboarding(true)}
            title="Take a guided tour"
          >
            <i className="fas fa-question-circle"></i>
          </button>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb navigation">
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="breadcrumb-item">
                {index < breadcrumbs.length - 1 ? (
                  <button
                    className="breadcrumb-link"
                    onClick={() => {
                      if (crumb.view === 'dashboard') {
                        changeView('dashboard');
                      } else if (crumb.view === 'matrix') {
                        changeView('matrix', { category: crumb.category || 'all' });
                      }
                    }}
                  >
                    {crumb.label}
                  </button>
                ) : (
                  <span className="breadcrumb-current">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <i className="fas fa-chevron-right breadcrumb-separator"></i>
                )}
              </span>
            ))}
          </nav>
        </div>

        <div className="nav-controls">
          <button
            className={`nav-tab ${currentView === 'dashboard' ? 'active' : ''}`}
            onClick={() => changeView('dashboard')}
          >
            <i className="fas fa-chart-bar"></i> Dashboard
          </button>
          <button
            className={`nav-tab ${currentView === 'matrix' ? 'active' : ''}`}
            onClick={() => changeView('matrix', { category: selectedCategory })}
          >
            <i className="fas fa-th"></i> Matrix
          </button>
          {selectedThreat && (
            <button
              className={`nav-tab ${currentView === 'detail' ? 'active' : ''}`}
              onClick={() => changeView('detail', { threat: selectedThreat })}
            >
              <i className="fas fa-file-alt"></i> {selectedThreat.id}
            </button>
          )}
        </div>
      </nav>

      <main className="matrix-main">
        {currentView === 'dashboard' && renderDashboard()}
        {currentView === 'matrix' && renderMatrix()}
        {currentView === 'detail' && renderDetail()}
      </main>
    </div>
  );
};

export default InsiderThreatMatrix;
