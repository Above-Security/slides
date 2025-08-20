import React from 'react';

// Node ID: 0:4787 - Status Buttons Container
export default function StatusButtons() {
  return (
    <div className="status-buttons-container">
      {/* Node ID: 0:4788 - Issue Status Button (Department) */}
      <div className="issue-status-button department">
        <span className="department-label">Department</span>
        <span className="department-value">All</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 6L8 10L13 6" stroke="#000000" strokeWidth="1"/>
        </svg>
      </div>
      
      {/* Node ID: 0:4794 - Issue Status Button */}
      <div className="issue-status-button">
        <img src="/dashboard-assets/status-icon-1.png" alt="" className="status-icon" />
        <span className="status-value">2.4k</span>
      </div>
      
      {/* Node ID: 0:4797 - Issue Status Button */}
      <div className="issue-status-button">
        <img src="/dashboard-assets/status-icon-2.png" alt="" className="status-icon" />
        <span className="status-value">2.4k</span>
      </div>
      
      {/* Node ID: 0:4800 - Issue Status Button */}
      <div className="issue-status-button">
        <img src="/dashboard-assets/status-icon-3.png" alt="" className="status-icon" />
        <span className="status-value">2.4k</span>
      </div>
      
      {/* Node ID: 0:4803 - Issue Status Button */}
      <div className="issue-status-button">
        <img src="/dashboard-assets/status-icon-4.png" alt="" className="status-icon" />
        <span className="status-value">2.4k</span>
      </div>
      
      {/* Node ID: 0:4806 - Managed Devices Container */}
      <div className="managed-devices-container">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2.5" y="1.5" width="11" height="13" stroke="#707079" strokeWidth="1"/>
        </svg>
        <span className="managed-devices-label">Managed devices</span>
        <span className="managed-devices-value">56%</span>
      </div>
      
      {/* Node ID: 0:4811 - Authenticated Sessions Container */}
      <div className="authenticated-sessions-container">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2.5L2 5.5V8C2 11 4.5 13.5 8 14C11.5 13.5 14 11 14 8V5.5L8 2.5Z" stroke="#707079" strokeWidth="1"/>
          <path d="M6 8L7.5 9.5L10 7" stroke="#707079" strokeWidth="1"/>
        </svg>
        <span className="authenticated-sessions-label">Authenticated sessions</span>
        <span className="authenticated-sessions-value">43K</span>
      </div>
      
      {/* Node ID: 0:4816 - App Visibility Container */}
      <div className="app-visibility-container">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="4.5" cy="8" r="2.5" stroke="#707079" strokeWidth="1" fill="none"/>
          <circle cx="11.5" cy="8" r="2.5" stroke="#707079" strokeWidth="1" fill="none"/>
          <path d="M4.5 5.5L11.5 5.5" stroke="#707079" strokeWidth="1"/>
        </svg>
        <span className="app-visibility-label">App visibility</span>
        <span className="app-visibility-value">77%</span>
      </div>
      
      <style jsx>{`
        .status-buttons-container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          padding: 4px 0 4px 4px;
        }
        
        .issue-status-button,
        .managed-devices-container,
        .authenticated-sessions-container,
        .app-visibility-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          padding: 6px 8px;
          height: 32px;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid #FFFFFF;
          border-radius: 6px;
          box-shadow: 0px 1px 4px 0px rgba(38, 35, 52, 0.12);
        }
        
        .issue-status-button.department {
          width: 141px;
        }
        
        .managed-devices-container {
          width: 192px;
        }
        
        .authenticated-sessions-container {
          width: 223px;
        }
        
        .app-visibility-container {
          width: 158px;
        }
        
        .status-icon {
          width: 16px;
          height: 16px;
        }
        
        .department-label,
        .managed-devices-label,
        .authenticated-sessions-label,
        .app-visibility-label {
          font-family: 'Switzer Variable', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.143em;
          color: #8F8F9E;
        }
        
        .department-value {
          font-family: 'Switzer Variable', sans-serif;
          font-weight: 500;
          font-size: 14px;
          color: #1A1B23;
        }
        
        .status-value,
        .managed-devices-value,
        .authenticated-sessions-value,
        .app-visibility-value {
          font-family: 'Switzer Variable', sans-serif;
          font-weight: 500;
          font-size: 16px;
          line-height: 1.32em;
          letter-spacing: 0.00937em;
          color: #000000;
        }
      `}</style>
    </div>
  );
}