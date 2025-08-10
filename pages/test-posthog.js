import { useEffect, useState } from 'react';
import posthog from 'posthog-js';

export default function TestPostHog() {
  const [status, setStatus] = useState({});
  const [proxyTest, setProxyTest] = useState({});

  useEffect(() => {
    // Check PostHog initialization
    const checkStatus = {
      loaded: posthog.__loaded || false,
      apiHost: posthog.config?.api_host || 'Not configured',
      uiHost: posthog.config?.ui_host || 'Not configured',
      projectKey: posthog.config?.token || 'Not configured',
      capturedEvents: posthog._capturedEvents?.length || 0,
      deploymentVersion: window.__POSTHOG_DEPLOYMENT_VERSION || 'Not set',
      disableDecide: posthog.config?.disable_decide || false,
      advancedDisableDecide: posthog.config?.advanced_disable_decide || false,
    };
    setStatus(checkStatus);

    // Test proxy endpoint
    fetch('/ph-proxy/')
      .then(res => {
        setProxyTest({
          status: res.status,
          statusText: res.statusText,
          ok: res.ok,
          url: res.url,
        });
        return res.text();
      })
      .then(text => {
        setProxyTest(prev => ({
          ...prev,
          responseLength: text.length,
          responsePreview: text.substring(0, 100),
        }));
      })
      .catch(err => {
        setProxyTest({
          error: err.message,
        });
      });

    // Send a test event
    if (posthog.__loaded) {
      posthog.capture('test_proxy_event', {
        test: true,
        timestamp: new Date().toISOString(),
        page: 'test-posthog',
      });
    }
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>PostHog Proxy Test Page</h1>
      
      <div style={{
        padding: '10px',
        margin: '10px 0',
        backgroundColor: status.deploymentVersion?.includes('v2-disable-decide') ? '#d4edda' : '#f8d7da',
        border: '1px solid',
        borderColor: status.deploymentVersion?.includes('v2-disable-decide') ? '#c3e6cb' : '#f5c6cb',
        borderRadius: '4px',
        color: status.deploymentVersion?.includes('v2-disable-decide') ? '#155724' : '#721c24',
      }}>
        <strong>Deployment Status:</strong> {status.deploymentVersion}
        {status.deploymentVersion?.includes('v2-disable-decide') && ' ✓ Latest version deployed'}
      </div>
      
      <h2>PostHog Status</h2>
      <pre>{JSON.stringify(status, null, 2)}</pre>
      
      <h2>Proxy Endpoint Test</h2>
      <pre>{JSON.stringify(proxyTest, null, 2)}</pre>
      
      <h2>Network Requests</h2>
      <p>Open DevTools Network tab to see requests to:</p>
      <ul>
        <li>/ph-proxy/ (proxy endpoint)</li>
        <li>/ph-proxy/decide</li>
        <li>/ph-proxy/batch</li>
        <li>/ph-proxy/flags</li>
      </ul>
      
      <button 
        onClick={() => {
          posthog.capture('button_click', {
            button: 'test',
            timestamp: new Date().toISOString(),
          });
          alert('Event sent! Check Network tab');
        }}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '20px',
        }}
      >
        Send Test Event
      </button>
    </div>
  );
}