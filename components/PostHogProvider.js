import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initPostHog } from '../lib/posthog';
import posthog from 'posthog-js';

export default function PostHogProvider({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize PostHog
    initPostHog();

    // Track page views on route change
    const handleRouteChange = (url) => {
      if (typeof window !== 'undefined' && posthog.__loaded) {
        posthog.capture('$pageview', {
          $current_url: url,
          $pathname: new URL(url, window.location.origin).pathname
        });
      }
    };

    // Track initial page view
    handleRouteChange(window.location.href);

    // Listen to route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Track page performance metrics
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = window.performance.timing;
          const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
          const domReadyTime = perfData.domContentLoadedEventEnd - perfData.navigationStart;
          const firstPaint = performance.getEntriesByType('paint').find(
            ({ name }) => name === 'first-contentful-paint'
          );

          if (posthog.__loaded) {
            posthog.capture('page_performance', {
              page_load_time: pageLoadTime,
              dom_ready_time: domReadyTime,
              first_contentful_paint: firstPaint ? firstPaint.startTime : null,
              url: window.location.href,
              pathname: window.location.pathname
            });
          }
        }, 0);
      });
    }
  }, []);

  return children;
}