import posthog from 'posthog-js';

export const initPostHog = () => {
  if (typeof window !== 'undefined' && !posthog.__loaded) {
    posthog.init(
      process.env.NEXT_PUBLIC_POSTHOG_KEY || 'phc_BgWA3cz0tZjUtKxkPJUvulSMm01Q8Ewyu6PZPY2ZEjK',
      {
        api_host: '/ph-proxy',
        ui_host: 'https://us.posthog.com',
        advanced_disable_decide: true
      }
    );
  }
};

export default posthog;