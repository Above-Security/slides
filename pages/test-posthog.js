import SEO from '../components/SEO';
import posthog from 'posthog-js';

export default function TestPostHog() {
  return (
    <>
      <SEO 
        title="PostHog Analytics Test - Above Security"
        description="Test page for PostHog analytics integration and tracking functionality."
        canonicalUrl="https://abovesec.com/test-posthog"
        keywords="posthog test, analytics test, Above Security test"
      />
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
    </>
  );
}