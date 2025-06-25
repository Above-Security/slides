import React from 'react';

const PositioningCard = ({ tool, stance, talkTrack, risk, stanceType, icon }) => {
  const getStanceColor = (type) => {
    const colors = {
      'enhance': { bg: '#e8f5e8', border: '#4caf50', text: '#2e7d32' },
      'augment': { bg: '#e3f2fd', border: '#2196f3', text: '#1565c0' },
      'supersede': { bg: '#fff3e0', border: '#ff9800', text: '#ef6c00' },
      'alternative': { bg: '#fce4ec', border: '#e91e63', text: '#c2185b' },
      'default': { bg: '#f5f5f5', border: '#9e9e9e', text: '#616161' }
    };
    return colors[type] || colors.default;
  };

  const stanceColors = getStanceColor(stanceType);

  return (
    <div 
      className="positioning-card"
      data-component="positioning-card"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-light)',
        borderRadius: '12px',
        padding: 'var(--spacing-lg)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-md)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.2s ease'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--spacing-md)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-md)',
          flex: 1
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'var(--bg-secondary)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            color: 'var(--text-primary)',
            flexShrink: 0
          }}>
            <i className={icon} style={{ display: 'block' }} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 8px 0',
              lineHeight: '1.4'
            }}>{tool}</h3>
            <span style={{
              display: 'inline-block',
              padding: '4px 12px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '500',
              background: stanceColors.bg,
              border: `1px solid ${stanceColors.border}`,
              color: stanceColors.text
            }}>
              {stance}
            </span>
          </div>
        </div>
      </div>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--spacing-md)',
        flex: 1
      }}>
        <div>
          <label style={{
            display: 'block',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: 'var(--text-secondary)',
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>Key Message</label>
          <blockquote style={{
            margin: '0',
            padding: '16px',
            background: 'var(--bg-secondary)',
            borderLeft: '4px solid var(--border-accent)',
            borderRadius: '0 8px 8px 0',
            fontSize: '0.95rem',
            color: 'var(--text-primary)',
            lineHeight: '1.6',
            fontStyle: 'italic'
          }}>{talkTrack}</blockquote>
        </div>
        
        <div>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: 'var(--text-secondary)',
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            <i className="fas fa-exclamation-triangle" style={{ 
              color: '#ff9800',
              display: 'block'
            }} /> 
            Risk to Mitigate
          </label>
          <p style={{
            margin: '0',
            fontSize: '0.9rem',
            color: 'var(--text-primary)',
            lineHeight: '1.6'
          }}>{risk}</p>
        </div>
      </div>
    </div>
  );
};

export default PositioningCard;
