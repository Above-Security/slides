import posthog from 'posthog-js';

export const initPostHog = () => {
  if (typeof window !== 'undefined' && !posthog.__loaded) {
    // Generate or retrieve a persistent distinct_id
    let distinctId = localStorage.getItem('posthog_distinct_id');
    if (!distinctId) {
      distinctId = `anon-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      localStorage.setItem('posthog_distinct_id', distinctId);
    }

    posthog.init('phc_BgWA3cz0tZjUtKxkPJUvulSMm01Q8Ewyu6PZPY2ZEjK', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'always',
      bootstrap: {
        distinctID: distinctId,
        isIdentifiedID: false // false because it's an anonymous ID
      },
      loaded: (posthog) => {
        // Call identify to ensure the distinct_id is set
        posthog.identify(distinctId);
      }
    });
  }
};

export default posthog;