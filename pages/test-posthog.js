import { useEffect, useState } from 'react';
import posthog from 'posthog-js';

export default function TestPostHog() {
  const [status, setStatus] = useState({});

  useEffect(() => {
    // Check PostHog initialization
    const checkStatus = {
      loaded: posthog.__loaded || false,
      apiHost: posthog.config?.api_host || 'Not configured',
      distinctId: posthog.get_distinct_id ? posthog.get_distinct_id() : 'Not available',
    };
    setStatus(checkStatus);

    // Send a test event
    if (posthog.__loaded) {
      posthog.capture('test_page_view', {
        test: true,
        timestamp: new Date().toISOString(),
        page: 'test-posthog',
      });
    }
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>PostHog Proxy Test Page</h1>
      
      <h2>PostHog Status</h2>
      <pre>{JSON.stringify(status, null, 2)}</pre>
      
      <h2>Network Requests</h2>
      <p>Open DevTools Network tab to see requests to:</p>
      <ul>
        <li>/ph-proxy/batch (events)</li>
        <li>/ph-proxy/decide (feature flags)</li>
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