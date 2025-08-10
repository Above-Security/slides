import { useEffect } from 'react';
import { initPostHog } from '../lib/posthog';

export default function PostHogProvider({ children }) {
  useEffect(() => {
    initPostHog();
  }, []);

  return children;
}