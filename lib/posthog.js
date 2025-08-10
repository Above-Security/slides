import posthog from 'posthog-js';

export const initPostHog = () => {
  if (typeof window !== 'undefined' && !posthog.__loaded) {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY || 'phc_BgWA3cz0tZjUtKxkPJUvulSMm01Q8Ewyu6PZPY2ZEjK';
    // Use our proxy endpoint
    const host = typeof window !== 'undefined' 
      ? `${window.location.protocol}//${window.location.host}/ph-proxy`
      : '/ph-proxy';
    
    posthog.init(key, {
      api_host: host,
      ui_host: 'https://us.posthog.com',
      advanced_disable_decide: true // Disable feature flags completely
    });
  }
  return posthog;
};

export default posthog;