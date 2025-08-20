import React from 'react';
import Head from 'next/head';
import StatusButtons from '../components/dashboard/StatusButtons';
import DetectionPipeline from '../components/dashboard/DetectionPipeline';
import IncidentsByStatus from '../components/dashboard/IncidentsByStatus';
import TopRisksByType from '../components/dashboard/TopRisksByType';

// Node ID: 0:4722 - Dashboard V1
export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard - Above</title>
        <meta name="description" content="Above Security Dashboard" />
      </Head>
      
      {/* Dashboard V1 Container */}
      <div className="dashboard-v1">
        {/* Node ID: 0:4723 - Gardient (Background Layer 1) */}
        <div className="gradient-layer-1">
          <div className="noise-overlay"></div>
        </div>
        
        {/* Node ID: 0:4729 - Gardient (Background Layer 2) */}
        <div className="gradient-layer-2">
          <div className="noise-overlay"></div>
        </div>
        
        {/* Node ID: 0:4737 - Top Bar Container */}
        <nav className="top-bar-container">
          {/* Node ID: 0:4741 - Logo Container */}
          <div className="logo-container">
            <img src="/dashboard-assets/logo-d84357.png" alt="Above" className="logo" />
            <span className="logo-text">Above</span>
          </div>
          
          {/* Node ID: 0:4744 - Top Bar Links Container */}
          <div className="top-bar-links-container">
            {/* Node ID: 0:4745 - Analytics Link Container */}
            <div className="analytics-link-container active">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M3 4L18 4M3 17L18 17" stroke="currentColor" strokeWidth="1"/>
                <circle cx="10" cy="11" r="1.5" fill="url(#analytics-grad)"/>
                <circle cx="8" cy="7" r="1.5" fill="url(#analytics-grad)"/>
                <circle cx="6" cy="13" r="1.5" fill="url(#analytics-grad)"/>
                <circle cx="13" cy="9" r="1.5" fill="url(#analytics-grad)"/>
                <circle cx="15" cy="6" r="1.5" fill="url(#analytics-grad)"/>
                <circle cx="14" cy="13" r="1.5" fill="url(#analytics-grad)"/>
                <defs>
                  <linearGradient id="analytics-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#144892" />
                    <stop offset="100%" stopColor="#C28ECF" />
                  </linearGradient>
                </defs>
              </svg>
              <span>Analytics</span>
            </div>
            
            {/* Node ID: 0:4756 - Incidents Link Container */}
            <div className="incidents-link-container">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M1 10.5H6.5M14.5 10.5H20" stroke="#8F8F9E" strokeWidth="1"/>
                <circle cx="10.5" cy="10.5" r="3.5" stroke="#8F8F9E" strokeWidth="1" fill="none"/>
              </svg>
              <span>Incidents</span>
            </div>
            
            {/* Node ID: 0:4763 - Policies Link Container */}
            <div className="policies-link-container">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M10.5 5V19M2 5H19V15C19 17 17 19 15 19H6C4 19 2 17 2 15V5Z" stroke="#8F8F9E" strokeWidth="1"/>
              </svg>
              <span>Policies</span>
            </div>
            
            {/* Node ID: 0:4769 - Devices Link Container */}
            <div className="devices-link-container">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                <rect x="2" y="6" width="7" height="10" stroke="#8F8F9E" strokeWidth="1"/>
                <circle cx="11" cy="3" r="2.5" stroke="#8F8F9E" strokeWidth="1" fill="none"/>
                <rect x="11" y="13" width="7" height="5" stroke="#8F8F9E" strokeWidth="1"/>
                <path d="M6 6V10" stroke="#8F8F9E" strokeWidth="1.2"/>
              </svg>
              <span>Devices</span>
            </div>
          </div>
          
          {/* Node ID: 0:4777 - Settings Container */}
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
        
        {/* Node ID: 0:4782 - Main Container */}
        <main className="main-container">
          {/* Node ID: 0:4783 - Left Container */}
          <div className="left-container">
            {/* Node ID: 0:4784 - Header Container */}
            <div className="header-container">
              {/* Node ID: 0:4785 - Header Title Container */}
              <div className="header-title-container">
                <h1 className="header-title">Coverage and Visibility</h1>
              </div>
              {/* Node ID: 0:4787 - Status Buttons Container */}
              <StatusButtons />
            </div>
            
            {/* Node ID: 0:4821 - funnel graph (Detection Pipeline) */}
            <DetectionPipeline />
            
            {/* Node ID: 0:4850 - Incidents By Status Container */}
            <div className="incidents-by-status-container">
              <IncidentsByStatus />
              
              {/* Node ID: 0:4870 - funnel graph (Resolved Incidents) */}
              <div className="funnel-graph resolved-incidents">
                {/* Implementation continues... */}
              </div>
            </div>
            
            {/* Node ID: 0:4892 - funnel graph (Top Risks By Type) */}
            <TopRisksByType />
          </div>
          
          {/* Node ID: 0:4944 - Right Container */}
          <div className="right-container">
            {/* Right panel implementation... */}
          </div>
        </main>
      </div>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .dashboard-v1 {
          position: relative;
          width: 1440px;
          height: 840px;
          background: #FDFDFD;
          margin: 0 auto;
          overflow: hidden;
        }
        
        /* Background Gradient Layers */
        .gradient-layer-1 {
          position: absolute;
          left: 8px;
          top: 43px;
          width: 1424px;
          height: 785px;
          background: #EDEDED;
          opacity: 0.5;
          border-radius: 13px;
          overflow: hidden;
        }
        
        .gradient-layer-2 {
          position: absolute;
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
        
        /* Top Bar */
        .top-bar-container {
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
        
        .logo {
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
        
        .top-bar-links-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 24px;
        }
        
        .analytics-link-container,
        .incidents-link-container,
        .policies-link-container,
        .devices-link-container {
          display: flex;
          align-items: center;
          gap: 8.21px;
          padding: 8.21px 12.31px;
          border-radius: 5.13px;
          cursor: pointer;
          font-family: 'Switzer Variable', sans-serif;
          font-size: 14.36px;
          letter-spacing: 0.03em;
          color: #282828;
        }
        
        .analytics-link-container.active {
          background: rgba(255, 255, 255, 0.15);
          border: 1.54px solid #FFFFFF;
          backdrop-filter: blur(16.41px);
          font-weight: 600;
          color: #000000;
        }
        
        .settings-container {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        /* Main Container */
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
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 24px 16px 16px;
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
          font-family: 'Switzer Variable', sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 1.32em;
          letter-spacing: 0.0143em;
          color: #000000;
        }
        
        .incidents-by-status-container {
          display: flex;
          gap: 20px;
        }
        
        /* Right Container */
        .right-container {
          width: 564px;
          background: rgba(255, 255, 255, 0.2);
          border-left: 1px solid #EBECF0;
          box-shadow: -1px 0px 5px 0px rgba(38, 35, 52, 0.04);
        }
      `}</style>
    </>
  );
}