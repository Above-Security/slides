import React from 'react';

const MetricsCard = ({ dimension, kpi, baseline, target, description, icon, variant = 'default' }) => {
  return (
    <div 
      className="metrics-card"
      data-component="metrics-card"
      style={{
        background: 'var(--color-background-primary)',
        border: '1px solid var(--color-border-primary)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-xl)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'all var(--transition-normal)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}>
      {/* Brand accent border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'var(--color-primary-gradient)',
        borderTopLeftRadius: 'var(--radius-lg)',
        borderTopRightRadius: 'var(--radius-lg)'
      }} />
      
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-lg)'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: 'var(--radius-md)',
          background: 'var(--color-primary-gradient)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          boxShadow: 'var(--shadow-sm)'
        }}>
          <i 
            className={icon} 
            style={{ 
              color: 'var(--color-text-inverse)', 
              fontSize: 'var(--font-size-lg)'
            }} 
          />
        </div>
        
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-text-primary)',
            margin: '0 0 var(--spacing-xs) 0',
            lineHeight: '1.3'
          }}>
            {dimension}
          </h3>
          <p style={{
            color: 'var(--color-text-secondary)',
            fontSize: 'var(--font-size-sm)',
            margin: 0,
            lineHeight: '1.6'
          }}>
            {description}
          </p>
        </div>
      </div>
      
      <div style={{
        borderTop: '1px solid var(--color-border-primary)',
        paddingTop: 'var(--spacing-lg)',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
          <label style={{
            display: 'block',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--color-text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: 'var(--spacing-xs)'
          }}>
            KPI Measurement
          </label>
          <span style={{
            fontSize: 'var(--font-size-md)',
            fontWeight: 'var(--font-weight-medium)',
            color: 'var(--color-text-primary)',
            lineHeight: '1.4'
          }}>
            {kpi}
          </span>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--spacing-lg)'
        }}>
          <div style={{
            textAlign: 'center',
            padding: 'var(--spacing-md)',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(209, 36, 47, 0.1)',
            border: '1px solid rgba(209, 36, 47, 0.2)'
          }}>
            <label style={{
              display: 'block',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 'var(--font-weight-semibold)',
              marginBottom: 'var(--spacing-xs)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: 'var(--color-danger)'
            }}>
              Current State
            </label>
            <span style={{
              color: 'var(--color-danger)',
              fontWeight: 'var(--font-weight-bold)',
              fontSize: 'var(--font-size-lg)'
            }}>
              {baseline}
            </span>
          </div>
          
          <div style={{
            textAlign: 'center',
            padding: 'var(--spacing-md)',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(8, 135, 43, 0.1)',
            border: '1px solid rgba(8, 135, 43, 0.2)'
          }}>
            <label style={{
              display: 'block',
              fontSize: 'var(--font-size-xs)',
              fontWeight: 'var(--font-weight-semibold)',
              marginBottom: 'var(--spacing-xs)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: 'var(--color-primary)'
            }}>
              Target Goal
            </label>
            <span style={{
              color: 'var(--color-primary)',
              fontWeight: 'var(--font-weight-bold)',
              fontSize: 'var(--font-size-lg)'
            }}>
              {target}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsCard;
