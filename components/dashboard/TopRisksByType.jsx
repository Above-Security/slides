import React from 'react';

// Node ID: 0:4892 - "funnel graph" (Top Risks By Type)
export default function TopRisksByType() {
  return (
    <div className="funnel-graph">
      {/* Node ID: 0:4893 - Top Risks By Type Title */}
      <h2 className="top-risks-by-type-title">Top Risks By Type</h2>
      
      {/* Node ID: 0:4894 - Top Risks By Type Content Container */}
      <div className="top-risks-by-type-content-container">
        {/* Node ID: 0:4895 - Unsanctioned Apps Container */}
        <div className="unsanctioned-apps-container">
          <div className="unsanctioned-apps-label-container">
            <div className="unsanctioned-apps-label">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.5" stroke="#CC7A3C" strokeWidth="1"/>
                <circle cx="8" cy="8" r="4" fill="#CC7A3C"/>
              </svg>
              <span>Unsanctioned Apps</span>
            </div>
            <span className="unsanctioned-apps-percentage">16%</span>
          </div>
        </div>
        
        {/* Node ID: 0:4903 - Unauthorized 3rd Party Container (column) */}
        <div className="risk-column">
          {/* Node ID: 0:4904 - Unauthorized 3rd Party Label Container */}
          <div className="unauthorized-3rd-party-container">
            <div className="unauthorized-3rd-party-label">
              <div className="label-with-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="4" r="2" stroke="#8F8F9E" strokeWidth="1"/>
                  <circle cx="4" cy="12" r="2" stroke="#8F8F9E" strokeWidth="1"/>
                  <circle cx="12" cy="12" r="2" stroke="#8F8F9E" strokeWidth="1"/>
                  <path d="M8 6V10M6 8L4 10M10 8L12 10" stroke="#8F8F9E" strokeWidth="1"/>
                </svg>
                <span>Unauthorized 3rd Party</span>
              </div>
              <span className="percentage">21%</span>
            </div>
          </div>
          
          {/* Node ID: 0:4912 - Sharing on AI Chatbot Platforms Container */}
          <div className="sharing-on-ai-chatbot-container">
            <div className="sharing-on-ai-chatbot-label">
              <div className="label-with-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L10 6L14 6.5L11 9.5L11.5 13.5L8 11.5L4.5 13.5L5 9.5L2 6.5L6 6L8 2Z" 
                    stroke="#8F8F9E" strokeWidth="1" fill="none"/>
                </svg>
                <span>Sharing on AI Chatbot Platforms</span>
              </div>
              <span className="percentage">26%</span>
            </div>
          </div>
        </div>
        
        {/* Node ID: 0:4920 - IP Theft Container (column) */}
        <div className="risk-column">
          {/* Node ID: 0:4921 - IP Theft Label Container */}
          <div className="ip-theft-container">
            <div className="ip-theft-label">
              <div className="label-with-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <ellipse cx="8" cy="8" rx="5" ry="3" stroke="#8F8F9E" strokeWidth="1"/>
                  <path d="M3 8C3 10 5 12 8 12C11 12 13 10 13 8" stroke="#8F8F9E" strokeWidth="1"/>
                </svg>
                <span>IP theft</span>
              </div>
              <span className="percentage">23%</span>
            </div>
          </div>
          
          {/* Node ID: 0:4928 - Excess Personal Use Container */}
          <div className="excess-personal-use-container">
            <div className="excess-personal-use-label">
              <div className="label-with-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="5" r="2" stroke="#8F8F9E" strokeWidth="1"/>
                  <path d="M8 7V11M6 13L8 11L10 13" stroke="#8F8F9E" strokeWidth="1"/>
                  <path d="M5 15L8 13L11 15" stroke="#8F8F9E" strokeWidth="1"/>
                </svg>
                <span>Excess Personal use</span>
              </div>
              <span className="percentage">26%</span>
            </div>
          </div>
        </div>
        
        {/* Node ID: 0:4936 - Data Leakage Container */}
        <div className="data-leakage-container">
          <div className="data-leakage-label-container">
            <div className="data-leakage-label">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2C6 2 4 4 4 6C4 10 8 14 8 14C8 14 12 10 12 6C12 4 10 2 8 2Z" 
                  stroke="#49BCBA" strokeWidth="1" fill="none"/>
                <path d="M6 6C6 8 8 10 8 10C8 10 10 8 10 6C10 5 9 4 8 4C7 4 6 5 6 6Z" 
                  fill="#49BCBA"/>
              </svg>
              <span>Data Leakage</span>
            </div>
            <span className="data-leakage-percentage">16%</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .funnel-graph {
          flex: 1;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid #FFFFFF;
          border-radius: 6px;
          padding: 12px 16px 16px;
          box-shadow: 0px 1px 4px 0px rgba(38, 35, 52, 0.12);
        }
        
        .top-risks-by-type-title {
          font-family: 'Switzer Variable', sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 1.32em;
          letter-spacing: 0.0143em;
          color: #000000;
          height: 32px;
          display: flex;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .top-risks-by-type-content-container {
          display: flex;
          gap: 8px;
        }
        
        .unsanctioned-apps-container,
        .unauthorized-3rd-party-container,
        .sharing-on-ai-chatbot-container,
        .ip-theft-container,
        .excess-personal-use-container,
        .data-leakage-container {
          background: rgba(240, 243, 246, 0.5);
          border: 1.5px solid #FFFFFF;
          border-radius: 6px;
          padding: 4px 12px;
          box-shadow: inset 0px 0px 11px 0px rgba(220, 220, 228, 0.6);
        }
        
        .unsanctioned-apps-container {
          width: 286px;
          display: flex;
          align-items: stretch;
        }
        
        .data-leakage-container {
          flex: 1;
          display: flex;
          align-items: stretch;
        }
        
        .risk-column {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        
        .unauthorized-3rd-party-container,
        .sharing-on-ai-chatbot-container,
        .ip-theft-container,
        .excess-personal-use-container {
          flex: 1;
          display: flex;
          align-items: stretch;
        }
        
        .unsanctioned-apps-label-container,
        .data-leakage-label-container {
          display: flex;
          flex-direction: column;
          padding: 12px 0 0;
          gap: 8px;
          flex: 1;
        }
        
        .unsanctioned-apps-label,
        .data-leakage-label {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        
        .unauthorized-3rd-party-label,
        .sharing-on-ai-chatbot-label,
        .ip-theft-label,
        .excess-personal-use-label {
          display: flex;
          padding: 12px 0 0;
          gap: 8px;
          flex: 1;
        }
        
        .label-with-icon {
          display: flex;
          gap: 8px;
          align-items: center;
          flex: 1;
        }
        
        span {
          font-family: 'Switzer Variable', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.143em;
          color: #8F8F9E;
        }
        
        .unsanctioned-apps-percentage,
        .data-leakage-percentage,
        .percentage {
          font-family: 'Switzer Variable', sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 1.32em;
          color: #000000;
        }
      `}</style>
    </div>
  );
}