import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initPostHog } from '../lib/posthog';
import posthog from 'posthog-js';

export default function PostHogProvider({ children }) {
  const router = useRouter();

  useEffect(() => {
    initPostHog();

    const handleRouteChange = () => {
      if (posthog.__loaded) {
        posthog.capture('$pageview');
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return children;
}