import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideDeployment.module.css';

const SlideDeployment = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Deployment</h1>
      <p className="slide-subtitle">Implementation &amp; Limitations</p>
    </header>

    <div className="content-section">
      <div className={styles['deployment-overview']}>
        <div className={styles['deployment-method']}>
          <h3 className={styles['deployment-title']}>
            <i className="fas fa-rocket"></i>
            Deployment Model
          </h3>

          <div className={styles['deployment-steps']}>
            <div className={styles['deployment-step']}>
              <div className={styles['step-number']}>1</div>
              <div className={styles['step-content']}>
                <h4 className={styles['step-title']}>Browser Extension Distribution</h4>
                <p className={styles['step-description']}>Deploy via enterprise browser management (Chrome, Edge, Firefox)</p>
              </div>
            </div>

            <div className={styles['deployment-step']}>
              <div className={styles['step-number']}>2</div>
              <div className={styles['step-content']}>
                <h4 className={styles['step-title']}>Cloud Backend Configuration</h4>
                <p className={styles['step-description']}>SaaS platform processes behavioral data and provides threat detection</p>
              </div>
            </div>

            <div className={styles['deployment-step']}>
              <div className={styles['step-number']}>3</div>
              <div className={styles['step-content']}>
                <h4 className={styles['step-title']}>Baseline Establishment</h4>
                <p className={styles['step-description']}>Learn normal user behavior patterns across applications</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['deployment-constraints']}>
          <div className={styles['constraints-grid']}>
            <div className={`${styles['constraint-card']} ${styles['supported']}`}>
              <h3 className={styles['constraint-header']}>
                <i className="fas fa-check-circle"></i>
                Supported Environments
              </h3>
              <ul className={styles['constraint-list']}>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Managed corporate devices</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Enterprise browser policies</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Any web-based application</span>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <span>Real-time threat prevention</span>
                </li>
              </ul>
            </div>

            <div className={`${styles['constraint-card']} ${styles['limitations']}`}>
              <h3 className={styles['constraint-header']}>
                <i className="fas fa-exclamation-triangle"></i>
                Current Limitations
              </h3>
              <ul className={styles['constraint-list']}>
                <li>
                  <i className="fas fa-times"></i>
                  <span>BYOD/unmanaged devices (extension removal risk)</span>
                </li>
                <li>
                  <i className="fas fa-times"></i>
                  <span>Native mobile applications</span>
                </li>
                <li>
                  <i className="fas fa-times"></i>
                  <span>Desktop applications outside browser</span>
                </li>
                <li>
                  <i className="fas fa-times"></i>
                  <span>Offline application usage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideDeployment;
