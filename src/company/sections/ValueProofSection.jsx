import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import ValueProofCard from '../components/ValueProofCard';
import CalloutBox from '../components/CalloutBox';

const ValueProofSection = () => {
  const useCasesAndVisibility = [
    {
      category: 'Phishing aftermath',
      whatWeSee: 'OAuth grants, session token persistence',
      icon: 'fas fa-fish',
      priority: 'critical'
    },
    {
      category: 'Insider misuse',
      whatWeSee: 'Role misuse, scraping, drift',
      icon: 'fas fa-user-secret',
      priority: 'critical'
    },
    {
      category: 'AI misuse',
      whatWeSee: 'Use of consumer LLMs in unsanctioned places',
      icon: 'fas fa-robot',
      priority: 'high'
    },
    {
      category: 'Real-time nudging',
      whatWeSee: 'In-browser policy-based user guidance',
      icon: 'fas fa-hand-point-right',
      priority: 'high'
    },
    {
      category: 'SaaS misuse',
      whatWeSee: 'Shadow tools, exports, public shares',
      icon: 'fas fa-cloud-download-alt',
      priority: 'high'
    },
    {
      category: 'Offboarding',
      whatWeSee: 'Tokens still alive, old SSO sessions reused',
      icon: 'fas fa-door-open',
      priority: 'high'
    },
    {
      category: 'Excessive personal use',
      whatWeSee: 'YouTube, ChatGPT, consumer shopping by internal users',
      icon: 'fas fa-shopping-cart',
      priority: 'default'
    },
    {
      category: 'Unauthorized software',
      whatWeSee: 'Risky extensions, downloads from unvetted SaaS',
      icon: 'fas fa-download',
      priority: 'default'
    }
  ];

  return (
    <SectionContainer id="value-proof" title="7 | USE CASES, VISIBILITY, WHAT WE SHOW">
      <div>
        <div style={{ 
          marginBottom: 'var(--spacing-xl)', 
          padding: 'var(--spacing-lg)', 
          background: 'var(--color-background-secondary)', 
          borderRadius: 'var(--radius-lg)',
          borderLeft: '4px solid var(--color-primary)'
        }}>
          <strong>Behavioral Visibility:</strong> We give teams visibility into user behavior they've never had — detecting intent, catching insider threats, and shutting down account misuse before it escalates.
        </div>

        {/* Use Cases & Visibility Table */}
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse', 
            marginBottom: 'var(--spacing-lg)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: 'var(--border-radius-md)',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
          }}>
            <thead>
              <tr style={{ 
                backgroundColor: 'rgba(0, 135, 43, 0.05)',
                borderBottom: '2px solid rgba(0, 135, 43, 0.1)'
              }}>
                <th style={{ 
                  padding: 'var(--spacing-md)', 
                  textAlign: 'left',
                  fontWeight: '600',
                  color: 'var(--color-text-primary)',
                  fontSize: 'var(--font-size-sm)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  <i className="fas fa-list-alt" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                  Category
                </th>
                <th style={{ 
                  padding: 'var(--spacing-md)', 
                  textAlign: 'left',
                  fontWeight: '600',
                  color: 'var(--color-text-primary)',
                  fontSize: 'var(--font-size-sm)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  <i className="fas fa-eye" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                  What We See
                </th>
              </tr>
            </thead>
            <tbody>
              {useCasesAndVisibility.map((useCase, index) => (
                <tr key={index} style={{ 
                  backgroundColor: index % 2 === 1 ? 'rgba(0, 0, 0, 0.02)' : 'transparent',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <td style={{ 
                    padding: 'var(--spacing-md)', 
                    fontWeight: '600',
                    color: 'var(--color-text-primary)',
                    verticalAlign: 'top'
                  }}>
                    <i className={useCase.icon} style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                    {useCase.category}
                  </td>
                  <td style={{ 
                    padding: 'var(--spacing-md)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: '1.5',
                    verticalAlign: 'top'
                  }}>
                    {useCase.whatWeSee}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ 
          padding: 'var(--spacing-lg)',
          backgroundColor: 'rgba(0, 135, 43, 0.03)',
          borderRadius: 'var(--border-radius-md)',
          border: '1px solid rgba(0, 135, 43, 0.1)',
          textAlign: 'center'
        }}>
          <p style={{ 
            margin: 0,
            fontSize: 'var(--font-size-lg)',
            fontWeight: '600',
            color: 'var(--color-text-primary)'
          }}>
            <i className="fas fa-quote-left" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
            We give teams <strong>visibility into user behavior</strong> they've never had — and we do it in <strong>weeks, not quarters</strong>.
            <i className="fas fa-quote-right" style={{ marginLeft: '8px', color: 'var(--color-primary)' }}></i>
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: 'var(--spacing-lg)', 
          marginBottom: 'var(--spacing-xl)'
        }}>
          {useCasesAndVisibility.map((useCase, index) => (
            <ValueProofCard
              key={index}
              title={useCase.category}
              description={useCase.whatWeSee}
              icon={useCase.icon}
              priority={useCase.priority}
            />
          ))}
        </div>
        
        <CalloutBox variant="blunt">
          <em>"If in 14 days we don't surface anything you find useful, we deserve to lose."</em>
        </CalloutBox>
      </div>
    </SectionContainer>
  );
};

export default ValueProofSection;
