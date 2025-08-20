import React from 'react';
import Head from 'next/head';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard - Above</title>
        <meta name="description" content="Above Security Dashboard" />
      </Head>
      
      <div className="dashboard-wrapper">
        <div className="dashboard-container">
          {/* Background gradient layers - exactly as in Figma */}
          <div className="gradient-layer gradient-1">
            <div className="noise-overlay"></div>
          </div>
          <div className="gradient-layer gradient-2">
            <div className="noise-overlay"></div>
          </div>

          {/* Top Navigation Bar - exactly positioned as in Figma */}
          <nav className="top-bar">
            <div className="logo-container">
              <img src="/dashboard-assets/logo-d84357.png" alt="Above" className="logo-icon" />
              <span className="logo-text">Above</span>
            </div>
            
            <div className="nav-links">
              <div className="nav-link active">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path d="M3 4L18 4M3 17L18 17" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="10" cy="11" r="1.5" fill="url(#grad1)"/>
                  <circle cx="8" cy="7" r="1.5" fill="url(#grad1)"/>
                  <circle cx="6" cy="13" r="1.5" fill="url(#grad1)"/>
                  <circle cx="13" cy="9" r="1.5" fill="url(#grad1)"/>
                  <circle cx="15" cy="6" r="1.5" fill="url(#grad1)"/>
                  <circle cx="14" cy="13" r="1.5" fill="url(#grad1)"/>
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#144892', stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'#C28ECF', stopOpacity:1}} />
                    </linearGradient>
                  </defs>
                </svg>
                <span>Analytics</span>
              </div>
              <div className="nav-link">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path d="M1 10.5H6.5M14.5 10.5H20" stroke="#8F8F9E" strokeWidth="1"/>
                  <circle cx="10.5" cy="10.5" r="3.5" stroke="#8F8F9E" strokeWidth="1" fill="none"/>
                </svg>
                <span>Incidents</span>
              </div>
              <div className="nav-link">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path d="M10.5 5V19M2 5H19V15C19 17 17 19 15 19H6C4 19 2 17 2 15V5Z" stroke="#8F8F9E" strokeWidth="1"/>
                </svg>
                <span>Policies</span>
              </div>
              <div className="nav-link">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <rect x="2" y="6" width="7" height="10" stroke="#8F8F9E" strokeWidth="1"/>
                  <circle cx="11" cy="3" r="2.5" stroke="#8F8F9E" strokeWidth="1" fill="none"/>
                  <rect x="11" y="13" width="7" height="5" stroke="#8F8F9E" strokeWidth="1"/>
                  <path d="M6 6V10" stroke="#8F8F9E" strokeWidth="1.2"/>
                </svg>
                <span>Devices</span>
              </div>
            </div>
            
            <div className="settings-container">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10Z" stroke="#8C8C8C" strokeWidth="1.2"/>
                <path d="M13 8C13 8.3 12.9 8.7 12.7 9L14 10L12.7 12.3L11 11.7C10.7 11.9 10.3 12.1 10 12.2V14H6.9V12.2C6.6 12.1 6.3 11.9 5.9 11.7L4.3 12.3L2.9 10L4.2 9C4.1 8.7 4.1 8.3 4.1 8C4.1 7.7 4.1 7.3 4.2 7L2.9 6L4.3 3.7L5.9 4.3C6.3 4.1 6.6 3.9 6.9 3.8V2H10V3.8C10.3 3.9 10.7 4.1 11 4.3L12.7 3.7L14 6L12.7 7C12.9 7.3 13 7.7 13 8Z" stroke="#8C8C8C" strokeWidth="1.2"/>
              </svg>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 11.3C2 11.3 4 10 4 5.3C4 4.3 4.4 3.3 5.2 2.5C5.9 1.8 6.9 1.3 8 1.3C9.1 1.3 10.1 1.8 10.8 2.5C11.6 3.3 12 4.3 12 5.3C12 10 14 11.3 14 11.3H2Z" stroke="#8C8C8C" strokeWidth="1.2"/>
                <path d="M6.8 14C6.9 14.2 7.1 14.4 7.3 14.5C7.5 14.6 7.8 14.7 8 14.7C8.2 14.7 8.5 14.6 8.7 14.5C8.9 14.4 9 14.2 9.2 14" stroke="#8C8C8C" strokeWidth="1.2"/>
              </svg>
            </div>
          </nav>

          {/* Main Content Area - exact Figma structure */}
          <main className="main-container">
            {/* Left Container */}
            <div className="left-container">
              {/* Header Container */}
              <div className="header-container">
                <div className="header-title-container">
                  <h1 className="header-title">Coverage and Visibility</h1>
                </div>
                <div className="status-buttons-container">
                  <div className="status-button department">
                    <span>Department</span>
                    <span className="value">All</span>
                  </div>
                  <div className="status-button">
                    <span className="value">2.4k</span>
                  </div>
                  <div className="status-button">
                    <span className="value">2.4k</span>
                  </div>
                  <div className="status-button">
                    <span className="value">2.4k</span>
                  </div>
                  <div className="status-button">
                    <span className="value">2.4k</span>
                  </div>
                  <div className="status-button managed-devices">
                    <span>Managed devices</span>
                    <span className="value">56%</span>
                  </div>
                  <div className="status-button authenticated">
                    <span>Authenticated sessions</span>
                    <span className="value">43K</span>
                  </div>
                  <div className="status-button app-visibility">
                    <span>App visibility</span>
                    <span className="value">77%</span>
                  </div>
                </div>
              </div>

              {/* Detection Pipeline */}
              <div className="funnel-graph">
                <h2 className="section-title">Detection pipeline</h2>
                <div className="pipeline-container">
                  <div className="pipeline-bars">
                    <div className="pipeline-bar" style={{height: '87px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), #C9AFCF)'}}></div>
                    <div className="pipeline-bar" style={{height: '55px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.7), #C9AFCF)'}}></div>
                    <div className="pipeline-bar" style={{height: '38px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), #C9AFCF)'}}></div>
                    <div className="pipeline-bar" style={{height: '21px', background: '#C9AFCF'}}></div>
                  </div>
                  <div className="pipeline-columns">
                    <div className="pipeline-col">
                      <span className="col-label">Monitored Events</span>
                      <span className="col-value">9835</span>
                    </div>
                    <div className="pipeline-col">
                      <div>
                        <span className="col-label">Triggers</span>
                        <span className="col-value">4875</span>
                      </div>
                      <div className="false-positives">
                        <span className="fp-badge">57%</span>
                        <span className="fp-label">false positives</span>
                      </div>
                    </div>
                    <div className="pipeline-col">
                      <span className="col-label">True Incidents</span>
                      <span className="col-value">2155</span>
                    </div>
                    <div className="pipeline-col">
                      <span className="col-label">Malicious Incidents</span>
                      <span className="col-value">756</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Incidents Row */}
              <div className="incidents-row">
                <div className="funnel-graph small">
                  <div className="graph-header">
                    <h3 className="graph-title">Incidents By Status</h3>
                  </div>
                  <div className="donut-container">
                    <div className="donut-center">756</div>
                    <svg className="donut-chart" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#E8E8E8" strokeWidth="8"/>
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#C9AFCF" strokeWidth="8"
                        strokeDasharray="230 251.2" strokeDashoffset="0" transform="rotate(-90 50 50)"/>
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#E63D67" strokeWidth="8"
                        strokeDasharray="21 251.2" strokeDashoffset="-230" transform="rotate(-90 50 50)"/>
                    </svg>
                  </div>
                  <div className="legend">
                    <div className="legend-item">
                      <span className="legend-dot auto"></span>
                      <span className="legend-label">Auto Resolved</span>
                      <span className="legend-value">702</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-dot attention"></span>
                      <span className="legend-label">Requires Attention</span>
                      <span className="legend-value">54</span>
                    </div>
                  </div>
                </div>
                <div className="funnel-graph small">
                  <div className="graph-header">
                    <h3 className="graph-title">Resolved Incidents by verdict</h3>
                    <span className="graph-value">153</span>
                  </div>
                  <div className="verdict-bars">
                    <div className="verdict-item">
                      <div className="verdict-bar malicious" style={{width: '10%'}}></div>
                      <span className="verdict-label">Malicious by Intent</span>
                      <span className="verdict-value">10%</span>
                    </div>
                    <div className="verdict-item">
                      <div className="verdict-bar human" style={{width: '73%'}}></div>
                      <span className="verdict-label">Human Error</span>
                      <span className="verdict-value">73%</span>
                    </div>
                    <div className="verdict-item">
                      <div className="verdict-bar justified" style={{width: '27%'}}></div>
                      <span className="verdict-label">Justified</span>
                      <span className="verdict-value">27%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Risks By Type */}
              <div className="funnel-graph flex-1">
                <h2 className="section-title">Top Risks By Type</h2>
                <div className="risks-container">
                  <div className="risk-item unsanctioned">
                    <div className="risk-content">
                      <span className="risk-label">Unsanctioned Apps</span>
                      <span className="risk-value">16%</span>
                    </div>
                  </div>
                  <div className="risk-item unauthorized">
                    <div className="risk-content">
                      <span className="risk-label">Unauthorized 3rd Party</span>
                      <span className="risk-value">23%</span>
                    </div>
                  </div>
                  <div className="risk-item ip-theft">
                    <div className="risk-content">
                      <span className="risk-label">IP Theft</span>
                      <span className="risk-value">8%</span>
                    </div>
                  </div>
                  <div className="risk-item data-leakage">
                    <div className="risk-content">
                      <span className="risk-label">Data Leakage</span>
                      <span className="risk-value">12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Container */}
            <div className="right-container">
              {/* Tabs */}
              <div className="tabs-container">
                <div className="tab">
                  <span>Actionable Insights</span>
                </div>
                <div className="tab active">
                  <span>Analytics</span>
                </div>
              </div>

              {/* Right Content */}
              <div className="right-content">
                {/* Average MTTR */}
                <div className="insight-card">
                  <div className="card-header">
                    <h3>Average MTTR Overtime</h3>
                    <span className="badge">6D</span>
                  </div>
                  <div className="mttr-chart">
                    <div className="y-axis">
                      <span>15</span>
                      <span>10</span>
                      <span>5</span>
                      <span>0</span>
                    </div>
                    <div className="chart-area">
                      <svg viewBox="0 0 300 100" preserveAspectRatio="none">
                        <path d="M0,80 L50,60 L100,70 L150,40 L200,50 L250,30 L300,35" 
                          fill="none" stroke="#C9AFCF" strokeWidth="2"/>
                        <path d="M0,80 L50,60 L100,70 L150,40 L200,50 L250,30 L300,35 L300,100 L0,100 Z" 
                          fill="url(#mttrGradient)" opacity="0.3"/>
                        <defs>
                          <linearGradient id="mttrGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor:'#C9AFCF', stopOpacity:0.3}} />
                            <stop offset="100%" style={{stopColor:'#C9AFCF', stopOpacity:0}} />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Risk Associated Applications */}
                <div className="insight-card">
                  <div className="card-header">
                    <h3>Risk Associated Applications</h3>
                  </div>
                  <div className="apps-section">
                    <div className="app-group">
                      <span className="app-label">Sanctioned Apps</span>
                      <div className="app-icons">
                        <div className="app-icon"></div>
                        <div className="app-icon"></div>
                        <div className="app-icon"></div>
                        <div className="app-icon"></div>
                        <div className="app-icon"></div>
                      </div>
                    </div>
                    <div className="app-group">
                      <span className="app-label">Unsanctioned Apps</span>
                      <div className="app-icons">
                        <div className="app-icon"></div>
                        <div className="app-icon"></div>
                        <div className="app-icon"></div>
                        <div className="app-icon"></div>
                        <div className="app-icon"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Risky User */}
                <div className="insight-card">
                  <div className="card-header">
                    <h3>Top Risky User</h3>
                  </div>
                  <div className="risky-users">
                    <div className="user-group">
                      <div className="user-label">
                        <span className="indicator malicious"></span>
                        <span>Malicious by Intent</span>
                      </div>
                      <div className="user-list">
                        <div className="user-item"></div>
                        <div className="user-item highlighted"></div>
                      </div>
                    </div>
                    <div className="user-group">
                      <div className="user-label">
                        <span className="indicator human"></span>
                        <span>Human Error</span>
                      </div>
                      <div className="user-list">
                        <div className="user-item"></div>
                        <div className="user-item highlighted"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .dashboard-wrapper {
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FDFDFD;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        .dashboard-container {
          position: relative;
          width: 1440px;
          height: 840px;
          background: #FDFDFD;
          overflow: hidden;
        }

        /* Gradient Layers - exact Figma positioning */
        .gradient-layer {
          position: absolute;
          pointer-events: none;
        }

        .gradient-1 {
          left: 8px;
          top: 43px;
          width: 1424px;
          height: 785px;
          background: #EDEDED;
          opacity: 0.5;
          border-radius: 13px;
          overflow: hidden;
        }

        .gradient-2 {
          left: 0;
          top: 0;
          width: 1447px;
          height: 840px;
          background: #FEFEFE;
          opacity: 0.5;
        }

        .noise-overlay {
          position: absolute;
          inset: 0;
          background-image: url('/dashboard-assets/noise-texture.png');
          background-repeat: repeat;
          background-size: 200px;
          opacity: 0.4;
          mix-blend-mode: overlay;
        }

        /* Top Bar - exact Figma positioning */
        .top-bar {
          position: absolute;
          left: 33px;
          top: 4px;
          width: 1387px;
          height: 40px;
          display: flex;
          align-items: center;
          gap: 8.21px;
          z-index: 10;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 8.21px;
        }

        .logo-icon {
          width: 24.62px;
          height: 24.62px;
        }

        .logo-text {
          font-family: 'Geist', sans-serif;
          font-weight: 600;
          font-size: 16.41px;
          line-height: 1em;
          color: #1A1B23;
        }

        .nav-links {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 8.21px;
          padding: 8.21px 12.31px;
          border-radius: 5.13px;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 14.36px;
          font-weight: 400;
          color: #282828;
          letter-spacing: 0.03em;
        }

        .nav-link.active {
          background: rgba(255, 255, 255, 0.15);
          border: 1.54px solid #FFFFFF;
          backdrop-filter: blur(16.41px);
          font-weight: 600;
          color: #000000;
        }

        .nav-link:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .settings-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .settings-container svg {
          width: 16.41px;
          height: 16.41px;
          cursor: pointer;
        }

        /* Main Container - exact Figma positioning */
        .main-container {
          position: absolute;
          left: 8px;
          top: 44px;
          width: 1424px;
          height: 784px;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid #EBECF0;
          border-radius: 12px;
          box-shadow: -1px 0px 7px 0px rgba(52, 52, 59, 0.04);
          display: flex;
        }

        /* Left Container */
        .left-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 24px 16px 16px;
          flex: 1;
        }

        .header-container {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .header-title-container {
          padding: 0 9px;
        }

        .header-title {
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;
          letter-spacing: 0.0143em;
          color: #000000;
        }

        .status-buttons-container {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          padding: 4px 0 4px 4px;
        }

        .status-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 6px 8px;
          height: 32px;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid #FFFFFF;
          border-radius: 6px;
          box-shadow: 0px 1px 4px 0px rgba(38, 35, 52, 0.12);
          font-size: 12px;
          color: #000;
        }

        .status-button.department {
          width: 141px;
        }

        .status-button.managed-devices {
          width: 192px;
        }

        .status-button.authenticated {
          width: 223px;
        }

        .status-button.app-visibility {
          width: 158px;
        }

        .status-button span {
          font-size: 12px;
          color: #8F8F9E;
        }

        .status-button .value {
          font-weight: 600;
          color: #000;
        }

        /* Funnel Graph Widget */
        .funnel-graph {
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid #FFFFFF;
          border-radius: 6px;
          padding: 12px 16px 20px;
          box-shadow: 0px 1px 4px 0px rgba(38, 35, 52, 0.12);
        }

        .funnel-graph.small {
          flex: 1;
        }

        .funnel-graph.flex-1 {
          flex: 1;
        }

        .section-title {
          font-weight: 500;
          font-size: 14px;
          line-height: 32px;
          letter-spacing: 0.0143em;
          color: #000000;
          margin-bottom: 12px;
        }

        /* Pipeline */
        .pipeline-container {
          position: relative;
          height: 148px;
        }

        .pipeline-bars {
          position: absolute;
          display: flex;
          align-items: flex-end;
          gap: 1px;
          width: 100%;
          height: 100%;
        }

        .pipeline-bar {
          flex: 1;
          border: 4px solid #FFFFFF;
          box-shadow: 2px 0px 7px 0px rgba(38, 35, 52, 0.08);
        }

        .pipeline-columns {
          position: relative;
          display: flex;
          height: 100%;
        }

        .pipeline-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 8px;
          border-right: 1px solid #E8E8E8;
        }

        .pipeline-col:last-child {
          border-right: none;
        }

        .col-label {
          font-size: 14px;
          color: #8F8F9E;
          margin-bottom: 8px;
        }

        .col-value {
          font-weight: 500;
          font-size: 24px;
          letter-spacing: 0.0083em;
          color: #000000;
        }

        .false-positives {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 8px;
        }

        .fp-badge {
          background: rgba(14, 156, 141, 0.08);
          border-radius: 3px;
          padding: 2px 4px;
          font-size: 10px;
          color: #0E9C8D;
        }

        .fp-label {
          font-size: 12px;
          color: #656571;
        }

        /* Incidents Row */
        .incidents-row {
          display: flex;
          gap: 20px;
        }

        .graph-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .graph-title {
          font-size: 14px;
          font-weight: 500;
          color: #000;
        }

        .graph-value {
          font-size: 16px;
          font-weight: 600;
          color: #000;
        }

        /* Donut Chart */
        .donut-container {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 20px auto;
        }

        .donut-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 24px;
          font-weight: 600;
          color: #000;
        }

        .donut-chart {
          width: 100%;
          height: 100%;
        }

        .legend {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .legend-dot.auto {
          background: #C9AFCF;
        }

        .legend-dot.attention {
          background: #E63D67;
        }

        .legend-label {
          flex: 1;
          font-size: 12px;
          color: #8F8F9E;
        }

        .legend-value {
          font-size: 12px;
          font-weight: 500;
          color: #000;
        }

        /* Verdict Bars */
        .verdict-bars {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .verdict-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .verdict-bar {
          height: 20px;
          border-radius: 2px;
        }

        .verdict-bar.malicious {
          background: #E63D67;
        }

        .verdict-bar.human {
          background: #C28ECF;
        }

        .verdict-bar.justified {
          background: #0E9C8D;
        }

        .verdict-label {
          font-size: 12px;
          color: #8F8F9E;
          min-width: 120px;
        }

        .verdict-value {
          font-size: 12px;
          font-weight: 500;
          color: #000;
        }

        /* Risks Container */
        .risks-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .risk-item {
          background: rgba(240, 243, 246, 0.5);
          border: 1.5px solid #FFFFFF;
          border-radius: 6px;
          padding: 12px;
          box-shadow: inset 0px 0px 11px 0px rgba(220, 220, 228, 0.6);
        }

        .risk-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .risk-label {
          font-size: 12px;
          color: #8F8F9E;
        }

        .risk-value {
          font-size: 20px;
          font-weight: 600;
          color: #000;
        }

        /* Right Container */
        .right-container {
          width: 564px;
          background: rgba(255, 255, 255, 0.2);
          border-left: 1px solid #EBECF0;
          box-shadow: -1px 0px 5px 0px rgba(38, 35, 52, 0.04);
          display: flex;
          flex-direction: column;
        }

        .tabs-container {
          display: flex;
        }

        .tab {
          flex: 1;
          padding: 20px 16px 12px;
          text-align: center;
          font-size: 12px;
          font-weight: 500;
          color: #8F8F9E;
          cursor: pointer;
          border-bottom: 1px solid rgba(143, 143, 158, 0.3);
        }

        .tab.active {
          color: #2F2F37;
          border-bottom: 1px solid #2F2F37;
        }

        .right-content {
          flex: 1;
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Insight Cards */
        .insight-card {
          background: rgba(255, 255, 255, 0.5);
          border: 1.5px solid #FFFFFF;
          border-radius: 6px;
          padding: 16px;
          box-shadow: 0px 1px 5px 0px rgba(38, 35, 52, 0.08);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .card-header h3 {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.0143em;
          color: #000;
        }

        .badge {
          background: rgba(14, 156, 141, 0.08);
          border-radius: 3px;
          padding: 2px 6px;
          font-size: 10px;
          font-weight: 500;
          color: #0E9C8D;
        }

        /* MTTR Chart */
        .mttr-chart {
          display: flex;
          gap: 8px;
          height: 100px;
        }

        .y-axis {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 20px;
        }

        .y-axis span {
          font-size: 10px;
          color: #8F8F9E;
        }

        .chart-area {
          flex: 1;
        }

        .chart-area svg {
          width: 100%;
          height: 100%;
        }

        /* Apps Section */
        .apps-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .app-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .app-label {
          font-size: 14px;
          color: #8F8F9E;
        }

        .app-icons {
          display: flex;
          gap: 6px;
        }

        .app-icon {
          width: 28px;
          height: 28px;
          background: #FFFFFF;
          border: 1px solid #FFFFFF;
          border-radius: 30px;
          box-shadow: 0px 1px 4px 0px rgba(38, 35, 52, 0.12);
        }

        /* Risky Users */
        .risky-users {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .user-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .user-label {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 14px;
          color: #8F8F9E;
        }

        .indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .indicator.malicious {
          background: #E63D67;
        }

        .indicator.human {
          background: #C28ECF;
        }

        .user-list {
          display: flex;
          gap: 10px;
        }

        .user-item {
          width: 106px;
          height: 25px;
          background: #FFFFFF;
          border: 1px solid #FFFFFF;
          border-radius: 4px;
          box-shadow: 0px 1px 4px 0px rgba(38, 35, 52, 0.12);
        }

        .user-item.highlighted {
          background: rgba(201, 175, 207, 0.1);
        }
      `}</style>
    </>
  );
}