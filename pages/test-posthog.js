import posthog from 'posthog-js';

export default function TestPostHog() {
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>PostHog Test</h1>
      <p>Status: {posthog.__loaded ? '✅ Loaded' : '❌ Not loaded'}</p>
      <button 
        onClick={() => {
          posthog.capture('test_click');
          alert('Event sent!');
        }}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Send Test Event
      </button>
    </div>
  );
}