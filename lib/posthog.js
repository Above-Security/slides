import posthog from 'posthog-js';

export const initPostHog = () => {
  if (typeof window !== 'undefined' && !posthog.__loaded) {
    posthog.init('phc_BgWA3cz0tZjUtKxkPJUvulSMm01Q8Ewyu6PZPY2ZEjK', {
      api_host: 'https://us.i.posthog.com',
      defaults:'2025-05-24'
    });
  }
};

export default posthog;