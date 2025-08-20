import React from 'react';
import Head from 'next/head';

// EXACT 1:1 Figma implementation - EVERY node with its EXACT properties
export default function DashboardSystematic() {
  return (
    <>
      <Head>
        <title>Dashboard - Above</title>
      </Head>
      
      {/* Node 0:4722 - Dashboard V1 */}
      <div 
        style={{
          width: '1440px',
          height: '840px',
          background: '#FDFDFD',
          position: 'relative',
          margin: '0 auto'
        }}
      >
        {/* Node 0:4723 - Gardient */}
        <div 
          style={{
            position: 'absolute',
            left: '8px',
            top: '43px',
            width: '1424px',
            height: '785px',
            background: '#EDEDED',
            opacity: 0.5,
            borderRadius: '13px'
          }}
        />
        
        {/* Node 0:4729 - Gardient */}
        <div 
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '1447px',
            height: '840px',
            background: '#FEFEFE',
            opacity: 0.5
          }}
        />
        
        {/* Node 0:4737 - Top Bar Container */}
        <div 
          style={{
            position: 'absolute',
            left: '33px',
            top: '4px',
            width: '1387px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8.207100868225098px'
          }}
        >
          {/* Node 0:4741 - Logo Container */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8.207100868225098px'
          }}>
            {/* Node 0:4742 - Logo */}
            <div style={{
              width: '24.62px',
              height: '24.62px',
              backgroundImage: 'url(/dashboard-assets/logo-d84357.png)',
              backgroundSize: 'cover'
            }} />
            {/* Node 0:4743 - Logo Text */}
            <span style={{
              fontFamily: 'Geist',
              fontWeight: 600,
              fontSize: '16.414201736450195px',
              lineHeight: '1em',
              color: '#1A1B23'
            }}>Above</span>
          </div>
          
          {/* Node 0:4744 - Top Bar Links Container */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px'
          }}>
            {/* Node 0:4745 - Analytics Link Container */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'stretch',
              gap: '8.207100868225098px',
              padding: '8.207100868225098px 12.310650825500488px',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1.538831353187561px solid #FFFFFF',
              borderRadius: '5.1294379234313965px',
              backdropFilter: 'blur(16.414201736450195px)'
            }}>
              {/* Node 0:4746 - ChartScatter */}
              <div style={{width: '20.52px', height: '20.52px', position: 'relative'}}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path d="M2.56 3.85H17.95V16.67H2.56V3.85Z" stroke="#8F8F9E" strokeWidth="1.026"/>
                  <circle cx="9.94" cy="11.22" r="0.64" fill="url(#analytics-grad)"/>
                  <circle cx="8.01" cy="6.73" r="0.64" fill="url(#analytics-grad)"/>
                  <circle cx="5.45" cy="12.5" r="0.64" fill="url(#analytics-grad)"/>
                  <circle cx="13.14" cy="8.66" r="0.64" fill="url(#analytics-grad)"/>
                  <circle cx="15.07" cy="5.45" r="0.64" fill="url(#analytics-grad)"/>
                  <circle cx="14.43" cy="12.5" r="0.64" fill="url(#analytics-grad)"/>
                  <defs>
                    <linearGradient id="analytics-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#144892"/>
                      <stop offset="100%" stopColor="#C28ECF"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* Node 0:4755 - Analytics Link */}
              <span style={{
                fontFamily: 'Switzer Variable',
                fontWeight: 600,
                fontSize: '14.362425804138184px',
                lineHeight: '1.32em',
                letterSpacing: '0.0301em',
                color: '#000000'
              }}>Analytics</span>
            </div>
            
            {/* Node 0:4756 - Incidents Link Container */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '8.207100868225098px',
              padding: '8.207100868225098px 12.310650825500488px',
              borderRadius: '5.1294379234313965px',
              backdropFilter: 'blur(16.414201736450195px)'
            }}>
              <div style={{width: '20.52px', height: '20.52px'}}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path d="M0.64 10.26H6.41M14.11 10.26H19.88" stroke="#8F8F9E" strokeWidth="1.026"/>
                  <circle cx="10.26" cy="10.26" r="3.85" stroke="#8F8F9E" strokeWidth="1.026" fill="none"/>
                </svg>
              </div>
              <span style={{
                fontFamily: 'Switzer Variable',
                fontWeight: 400,
                fontSize: '14.362425804138184px',
                lineHeight: '1.32em',
                letterSpacing: '0.0301em',
                color: '#282828'
              }}>Incidents</span>
            </div>
            
            {/* Node 0:4763 - Policies Link Container */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '8.207100868225098px',
              padding: '8.207100868225098px 12.310650825500488px',
              borderRadius: '5.1294379234313965px',
              backdropFilter: 'blur(16.414201736450195px)'
            }}>
              <div style={{width: '20.52px', height: '20.52px'}}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <path d="M10.26 4.49V18.6M1.92 4.49H18.6V14.11C18.6 16.03 16.68 18.6 14.75 18.6H5.77C3.85 18.6 1.92 16.03 1.92 14.11V4.49Z" stroke="#8F8F9E" strokeWidth="1.026"/>
                </svg>
              </div>
              <span style={{
                fontFamily: 'Switzer Variable',
                fontWeight: 400,
                fontSize: '14.362425804138184px',
                lineHeight: '1.32em',
                letterSpacing: '0.0301em',
                color: '#282828'
              }}>Policies</span>
            </div>
            
            {/* Node 0:4769 - Devices Link Container */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '8.207100868225098px',
              padding: '8.207100868225098px 12.310650825500488px',
              borderRadius: '5.1294379234313965px',
              backdropFilter: 'blur(16.414201736450195px)'
            }}>
              <div style={{width: '20.52px', height: '20.52px'}}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                  <rect x="1.92" y="5.13" width="6.41" height="9.62" stroke="#8F8F9E" strokeWidth="1.026"/>
                  <circle cx="10.9" cy="2.57" r="3.53" stroke="#8F8F9E" strokeWidth="1.026" fill="none"/>
                  <rect x="10.9" y="12.18" width="7.05" height="4.49" stroke="#8F8F9E" strokeWidth="1.026"/>
                  <path d="M5.18 5.08V9.7" stroke="#8F8F9E" strokeWidth="1.231"/>
                </svg>
              </div>
              <span style={{
                fontFamily: 'Switzer Variable',
                fontWeight: 400,
                fontSize: '14.362425804138184px',
                lineHeight: '1.32em',
                letterSpacing: '0.0301em',
                color: '#282828'
              }}>Devices</span>
            </div>
          </div>
          
          {/* Node 0:4777 - Settings Container */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px'
          }}>
            {/* Node 0:4778 - GearSix */}
            <div style={{width: '16.41px', height: '16.41px'}}>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M8.21 10.26C9.31 10.26 10.26 9.31 10.26 8.21C10.26 7.1 9.31 6.15 8.21 6.15C7.1 6.15 6.15 7.1 6.15 8.21C6.15 9.31 7.1 10.26 8.21 10.26Z" stroke="#8C8C8C" strokeWidth="1.2"/>
                <path d="M13.34 8.21C13.34 8.51 13.24 8.91 13.04 9.21L14.36 10.26L13.04 12.57L11.28 11.97C10.98 12.17 10.58 12.37 10.26 12.47V14.36H7.15V12.47C6.85 12.37 6.45 12.17 6.05 11.97L4.39 12.57L2.97 10.26L4.29 9.21C4.19 8.91 4.19 8.51 4.19 8.21C4.19 7.9 4.19 7.5 4.29 7.2L2.97 6.15L4.39 3.84L6.05 4.44C6.45 4.24 6.85 4.04 7.15 3.94V2.05H10.26V3.94C10.58 4.04 10.98 4.24 11.28 4.44L13.04 3.84L14.36 6.15L13.04 7.2C13.24 7.5 13.34 7.9 13.34 8.21Z" stroke="#8C8C8C" strokeWidth="1.2"/>
              </svg>
            </div>
            {/* Node 0:4780 - Bell */}
            <div style={{width: '16.41px', height: '16.41px'}}>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M2.05 11.54C2.05 11.54 4.1 10.26 4.1 5.44C4.1 4.39 4.52 3.34 5.35 2.51C6.08 1.78 7.13 1.36 8.21 1.36C9.28 1.36 10.33 1.78 11.06 2.51C11.89 3.34 12.31 4.39 12.31 5.44C12.31 10.26 14.36 11.54 14.36 11.54H2.05Z" stroke="#8C8C8C" strokeWidth="1.2"/>
                <path d="M6.97 14.36C7.08 14.57 7.29 14.78 7.5 14.88C7.71 14.99 8.02 15.1 8.21 15.1C8.41 15.1 8.72 14.99 8.93 14.88C9.13 14.78 9.24 14.57 9.44 14.36" stroke="#8C8C8C" strokeWidth="1.2"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Node 0:4782 - Main Container */}
        <div 
          style={{
            position: 'absolute',
            left: '8px',
            top: '44px',
            width: '1424px',
            height: '784px',
            background: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid #EBECF0',
            borderRadius: '12px',
            boxShadow: '-1px 0px 7px 0px rgba(52, 52, 59, 0.04)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          {/* Node 0:4783 - Left Container */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'stretch',
            gap: '20px',
            padding: '24px 16px 16px',
            flex: 1
          }}>
            {/* Node 0:4784 - Header Container */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'stretch',
              gap: '11px'
            }}>
              {/* Node 0:4785 - Header Title Container */}
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'stretch',
                alignItems: 'stretch',
                alignSelf: 'stretch',
                gap: '8px',
                padding: '0px 9px'
              }}>
                {/* Node 0:4786 - Header Title */}
                <div style={{
                  flex: 1,
                  height: '18px',
                  fontFamily: 'Switzer Variable',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '1.32em',
                  letterSpacing: '0.0143em',
                  color: '#000000',
                  display: 'flex',
                  alignItems: 'center'
                }}>Coverage and Visibility</div>
              </div>
              
              {/* Node 0:4787 - Status Buttons Container */}
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'stretch',
                gap: '12px',
                padding: '4px 0px 4px 4px'
              }}>
                {/* Node 0:4788 - Issue Status Button (Department) */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 8px',
                  width: '141px',
                  height: '32px',
                  background: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid #FFFFFF',
                  borderRadius: '6px',
                  boxShadow: '0px 1px 4px 0px rgba(38, 35, 52, 0.12)'
                }}>
                  <span style={{
                    fontFamily: 'Switzer Variable',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '1.32em',
                    color: '#8F8F9E'
                  }}>Department</span>
                  <span style={{
                    fontFamily: 'Switzer Variable',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '1.32em',
                    color: '#1A1B23'
                  }}>All</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 6L8 10L13 6" stroke="#000000" strokeWidth="1"/>
                  </svg>
                </div>
                
                {/* Node 0:4794, 0:4797, 0:4800, 0:4803 - Issue Status Buttons */}
                {[1, 2, 3, 4].map(i => (
                  <div key={i} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 8px',
                    height: '32px',
                    background: 'rgba(255, 255, 255, 0.5)',
                    border: '1px solid #FFFFFF',
                    borderRadius: '6px',
                    boxShadow: '0px 1px 4px 0px rgba(38, 35, 52, 0.12)'
                  }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      backgroundImage: `url(/dashboard-assets/status-icon-${i}.png)`,
                      backgroundSize: 'cover'
                    }} />
                    <span style={{
                      fontFamily: 'Switzer Variable',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '1.32em',
                      color: '#8F8F9E'
                    }}>2.4k</span>
                  </div>
                ))}
                
                {/* Node 0:4806 - Managed Devices Container */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 8px',
                  width: '192px',
                  height: '32px',
                  background: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid #FFFFFF',
                  borderRadius: '6px',
                  boxShadow: '0px 1px 4px 0px rgba(38, 35, 52, 0.12)'
                }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2.5" y="1.5" width="11" height="13" stroke="#707079" strokeWidth="1"/>
                  </svg>
                  <span style={{
                    fontFamily: 'Switzer Variable',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.143em',
                    color: '#8F8F9E'
                  }}>Managed devices</span>
                  <span style={{
                    fontFamily: 'Switzer Variable',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '1.32em',
                    letterSpacing: '0.00937em',
                    color: '#000000'
                  }}>56%</span>
                </div>
                
                {/* Node 0:4811 - Authenticated Sessions Container */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 8px',
                  width: '223px',
                  height: '32px',
                  background: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid #FFFFFF',
                  borderRadius: '6px',
                  boxShadow: '0px 1px 4px 0px rgba(38, 35, 52, 0.12)'
                }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2.5L2 5.5V8C2 11 4.5 13.5 8 14C11.5 13.5 14 11 14 8V5.5L8 2.5Z" stroke="#707079" strokeWidth="1"/>
                    <path d="M6 8L7.5 9.5L10 7" stroke="#707079" strokeWidth="1"/>
                  </svg>
                  <span style={{
                    fontFamily: 'Switzer Variable',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.143em',
                    color: '#8F8F9E'
                  }}>Authenticated sessions</span>
                  <span style={{
                    fontFamily: 'Switzer Variable',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '1.32em',
                    letterSpacing: '0.00937em',
                    color: '#000000'
                  }}>43K</span>
                </div>
                
                {/* Node 0:4816 - App Visibility Container */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 8px',
                  width: '158px',
                  height: '32px',
                  background: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid #FFFFFF',
                  borderRadius: '6px',
                  boxShadow: '0px 1px 4px 0px rgba(38, 35, 52, 0.12)'
                }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="4.5" cy="8" r="2.5" stroke="#707079" strokeWidth="1" fill="none"/>
                    <circle cx="11.5" cy="8" r="2.5" stroke="#707079" strokeWidth="1" fill="none"/>
                    <path d="M4.5 5.5L11.5 5.5" stroke="#707079" strokeWidth="1"/>
                  </svg>
                  <span style={{
                    fontFamily: 'Switzer Variable',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.143em',
                    color: '#8F8F9E'
                  }}>App visibility</span>
                  <span style={{
                    fontFamily: 'Switzer Variable',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '1.32em',
                    letterSpacing: '0.00937em',
                    color: '#000000'
                  }}>77%</span>
                </div>
              </div>
            </div>
            
            {/* Node 0:4821 - funnel graph (Detection Pipeline) */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'stretch',
              gap: '12px',
              padding: '12px 16px 20px',
              background: 'rgba(255, 255, 255, 0.5)',
              border: '1px solid #FFFFFF',
              borderRadius: '6px',
              boxShadow: '0px 1px 4px 0px rgba(38, 35, 52, 0.12)'
            }}>
              {/* Detection Pipeline content will be added */}
            </div>
            
            {/* Node 0:4850 - Incidents By Status Container */}
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'stretch',
              gap: '20px'
            }}>
              {/* Incidents content will be added */}
            </div>
            
            {/* Node 0:4892 - funnel graph (Top Risks) */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'stretch',
              gap: '12px',
              padding: '12px 16px 16px',
              background: 'rgba(255, 255, 255, 0.5)',
              border: '1px solid #FFFFFF',
              borderRadius: '6px',
              boxShadow: '0px 1px 4px 0px rgba(38, 35, 52, 0.12)',
              flex: 1
            }}>
              {/* Top Risks content will be added */}
            </div>
          </div>
          
          {/* Node 0:4944 - Right Container */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'stretch',
            gap: '16px',
            padding: '0px 1px',
            width: '564px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderLeft: '1px solid #EBECF0',
            boxShadow: '-1px 0px 5px 0px rgba(38, 35, 52, 0.04)'
          }}>
            {/* Right container content will be added */}
          </div>
        </div>
      </div>
    </>
  );
}