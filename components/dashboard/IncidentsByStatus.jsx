import React from 'react';

// Node ID: 0:4851 - "funnel graph" (Incidents By Status)
export default function IncidentsByStatus() {
  return (
    <div className="funnel-graph">
      {/* Node ID: 0:4852 - Incidents By Status Title Container */}
      <div className="incidents-by-status-title-container">
        <h3 className="incidents-by-status-title">Incidents By Status</h3>
      </div>
      
      {/* Node ID: 0:4854 - Incidents By Status Content Container */}
      <div className="incidents-by-status-content-container">
        {/* Node ID: 0:4855 - Incidents By Status Chart Container */}
        <div className="incidents-by-status-chart-container">
          <svg width="204" height="116" viewBox="0 0 204 116">
            {/* Node ID: 0:4856 - Ellipse 4053 (outer ring background) */}
            <ellipse cx="94" cy="58" rx="76" ry="76" 
              fill="#E4F0F0" 
              stroke="#FFFFFF" 
              strokeWidth="1.5"
              filter="drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1))"
            />
            {/* Node ID: 0:4857 - Ellipse 4052 (Auto Resolved) */}
            <ellipse cx="94" cy="58" rx="65" ry="66" 
              fill="#0E9C8D"
            />
            {/* Node ID: 0:4858 - Ellipse 4059 (outer ring for Requires Attention) */}
            <ellipse cx="94" cy="58" rx="76" ry="76" 
              fill="#FDEFE8" 
              stroke="#FFFFFF" 
              strokeWidth="1.5"
              filter="drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1))"
              mask="url(#mask-attention)"
            />
            {/* Node ID: 0:4859 - Ellipse 4058 (Requires Attention) */}
            <ellipse cx="94" cy="58" rx="65" ry="66" 
              fill="url(#gradient-attention)"
              mask="url(#mask-attention)"
            />
            
            <defs>
              <linearGradient id="gradient-attention" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(230, 61, 103, 0.2)" />
                <stop offset="100%" stopColor="#F8A76F" />
              </linearGradient>
              
              <mask id="mask-attention">
                <rect width="204" height="116" fill="white"/>
                <path d="M 94 58 L 170 58 A 76 76 0 0 1 94 134 Z" fill="black"/>
              </mask>
            </defs>
          </svg>
          
          {/* Node ID: 0:4860 - Incidents By Status Value */}
          <div className="incidents-by-status-value">756</div>
        </div>
        
        {/* Node ID: 0:4861 - By Investigations status */}
        <div className="by-investigations-status">
          {/* Node ID: 0:4862 - Investigation /Pending User Input */}
          <div className="investigation-item">
            <div className="auto-resolved-indicator"></div>
            <span className="auto-resolved-label">Auto Resolved</span>
            <span className="auto-resolved-value">702</span>
          </div>
          
          {/* Node ID: 0:4866 - Investigation /Completed */}
          <div className="investigation-item">
            <div className="requires-attention-indicator"></div>
            <span className="requires-attention-label">Requires Attention</span>
            <span className="requires-attention-value">54</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .funnel-graph {
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid #FFFFFF;
          border-radius: 6px;
          padding: 12px 24px 0;
          box-shadow: 0px 1px 4px 0px rgba(38, 35, 52, 0.12);
        }
        
        .incidents-by-status-title-container {
          display: flex;
          align-items: center;
          height: 32px;
        }
        
        .incidents-by-status-title {
          font-family: 'Switzer Variable', sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 1.32em;
          letter-spacing: 0.0143em;
          color: #000000;
        }
        
        .incidents-by-status-content-container {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 0 8px 0 0;
        }
        
        .incidents-by-status-chart-container {
          position: relative;
          width: 204px;
          height: 116px;
        }
        
        .incidents-by-status-value {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: 'Switzer Variable', sans-serif;
          font-weight: 500;
          font-size: 24px;
          line-height: 1.32em;
          letter-spacing: 0.0083em;
          color: #000000;
        }
        
        .by-investigations-status {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 172px;
        }
        
        .investigation-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .auto-resolved-indicator,
        .requires-attention-indicator {
          width: 8px;
          height: 8px;
          border-radius: 1px;
        }
        
        .auto-resolved-indicator {
          background: #0E9C8D;
        }
        
        .requires-attention-indicator {
          background: linear-gradient(135deg, rgba(230, 61, 103, 0.2) 0%, #F8A76F 100%);
        }
        
        .auto-resolved-label,
        .requires-attention-label {
          flex: 1;
          font-family: 'Switzer Variable', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.143em;
          color: #8F8F9E;
        }
        
        .auto-resolved-value,
        .requires-attention-value {
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