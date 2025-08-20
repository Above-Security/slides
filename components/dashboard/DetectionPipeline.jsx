import React from 'react';

// Node ID: 0:4821 - "funnel graph"
export default function DetectionPipeline() {
  return (
    <div className="funnel-graph">
      {/* Node ID: 0:4822 - Detection Pipeline Title */}
      <h2 className="detection-pipeline-title">Detection pipeline</h2>
      
      {/* Node ID: 0:4823 - cols */}
      <div className="cols">
        {/* Node ID: 0:4824 - graph (background bars) */}
        <div className="graph">
          <div className="bar bar-1" style={{height: '87px'}}></div>
          <div className="bar bar-2" style={{height: '55px'}}></div>
          <div className="bar bar-3" style={{height: '38px'}}></div>
          <div className="bar bar-4" style={{height: '20.98px'}}></div>
        </div>
        
        {/* Node ID: 0:4829 - col (Monitored Events) */}
        <div className="col">
          <span className="monitored-events-label">Monitored Events</span>
          <span className="monitored-events-value">9835</span>
        </div>
        
        {/* Node ID: 0:4832 - col (Triggers) */}
        <div className="col">
          {/* Node ID: 0:4833 - Triggers Container */}
          <div className="triggers-container">
            {/* Node ID: 0:4834 - Triggers Label Container */}
            <div className="triggers-label-container">
              <span className="triggers-label">Triggers</span>
              <span className="triggers-value">4875</span>
            </div>
            {/* Node ID: 0:4837 - False Positives Container */}
            <div className="false-positives-container">
              <div className="false-positives-value-container">
                <span className="false-positives-value">57%</span>
              </div>
              <span className="false-positives-label">false positives</span>
            </div>
          </div>
        </div>
        
        {/* Node ID: 0:4841 - col (True Incidents) */}
        <div className="col">
          {/* Node ID: 0:4842 - True Incidents Container */}
          <div className="true-incidents-container">
            <span className="true-incidents-label">True Incidents</span>
            <span className="true-incidents-value">2155</span>
          </div>
        </div>
        
        {/* Node ID: 0:4845 - col (Malicious Incidents) */}
        <div className="col">
          {/* Node ID: 0:4846 - Malicious Incidents Container */}
          <div className="malicious-incidents-container">
            <span className="malicious-incidents-label">Malicious Incidents</span>
            <span className="malicious-incidents-value">756</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .funnel-graph {
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid #FFFFFF;
          border-radius: 6px;
          padding: 12px 16px 20px;
          box-shadow: 0px 1px 4px 0px rgba(38, 35, 52, 0.12);
        }
        
        .detection-pipeline-title {
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
        
        .cols {
          display: flex;
          align-items: flex-end;
          position: relative;
          height: 148px;
        }
        
        .graph {
          position: absolute;
          left: -1.03px;
          top: 0;
          width: 986.1px;
          height: 148.24px;
          display: flex;
          align-items: flex-end;
          gap: -1px;
        }
        
        .bar {
          flex: 1;
          border: 4px solid #FFFFFF;
          box-shadow: 2px 0px 7px 0px rgba(38, 35, 52, 0.08);
        }
        
        .bar-1 {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), #C9AFCF);
        }
        
        .bar-2 {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7), #C9AFCF);
        }
        
        .bar-3 {
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), #C9AFCF);
        }
        
        .bar-4 {
          background: #C9AFCF;
        }
        
        .col {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 8px;
          border-right: 1px solid #E8E8E8;
          position: relative;
          z-index: 1;
        }
        
        .col:last-child {
          border-right: none;
        }
        
        .col:nth-child(3) {
          padding: 0 16px;
          height: 110px;
        }
        
        .col:nth-child(4) {
          padding: 0 16px;
          height: 127px;
        }
        
        .monitored-events-label,
        .triggers-label,
        .true-incidents-label,
        .malicious-incidents-label {
          font-family: 'Switzer Variable', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.143em;
          color: #8F8F9E;
        }
        
        .monitored-events-value,
        .triggers-value,
        .true-incidents-value,
        .malicious-incidents-value {
          font-family: 'Switzer Variable', sans-serif;
          font-weight: 500;
          font-size: 24px;
          line-height: 1.32em;
          letter-spacing: 0.0083em;
          color: #000000;
        }
        
        .triggers-container {
          display: flex;
          gap: 8px;
        }
        
        .triggers-label-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        
        .false-positives-container {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .false-positives-value-container {
          background: rgba(14, 156, 141, 0.08);
          border-radius: 3px;
          padding: 2px 4px;
        }
        
        .false-positives-value {
          font-family: 'Switzer Variable', sans-serif;
          font-weight: 500;
          font-size: 12px;
          line-height: 1.333em;
          color: #0E9C8D;
        }
        
        .false-positives-label {
          font-family: 'Switzer Variable', sans-serif;
          font-weight: 400;
          font-size: 12px;
          line-height: 1.333em;
          color: #656571;
        }
        
        .true-incidents-container,
        .malicious-incidents-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
      `}</style>
    </div>
  );
}