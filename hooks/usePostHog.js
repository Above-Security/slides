import { useEffect, useState } from 'react';
import posthog from 'posthog-js';

export function usePostHog() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && posthog.__loaded) {
      setIsLoaded(true);
    }
  }, []);

  const identify = (distinctId, properties = {}) => {
    if (isLoaded) {
      posthog.identify(distinctId, properties);
    }
  };

  const capture = (event, properties = {}) => {
    if (isLoaded) {
      posthog.capture(event, properties);
    }
  };

  const setPersonProperties = (properties) => {
    if (isLoaded) {
      posthog.people.set(properties);
    }
  };

  const setPersonPropertiesForFlags = (properties) => {
    if (isLoaded) {
      posthog.setPersonPropertiesForFlags(properties);
    }
  };

  const reset = () => {
    if (isLoaded) {
      posthog.reset();
    }
  };

  const getDistinctId = () => {
    if (isLoaded) {
      return posthog.get_distinct_id();
    }
    return null;
  };

  const getSessionId = () => {
    if (isLoaded) {
      return posthog.get_session_id();
    }
    return null;
  };

  const alias = (alias) => {
    if (isLoaded) {
      posthog.alias(alias);
    }
  };

  const startSessionRecording = () => {
    if (isLoaded) {
      posthog.startSessionRecording();
    }
  };

  const stopSessionRecording = () => {
    if (isLoaded) {
      posthog.stopSessionRecording();
    }
  };

  const isFeatureEnabled = (flag) => {
    if (isLoaded) {
      return posthog.isFeatureEnabled(flag);
    }
    return false;
  };

  const getFeatureFlag = (flag) => {
    if (isLoaded) {
      return posthog.getFeatureFlag(flag);
    }
    return null;
  };

  const reloadFeatureFlags = () => {
    if (isLoaded) {
      posthog.reloadFeatureFlags();
    }
  };

  return {
    posthog: isLoaded ? posthog : null,
    isLoaded,
    identify,
    capture,
    setPersonProperties,
    setPersonPropertiesForFlags,
    reset,
    getDistinctId,
    getSessionId,
    alias,
    startSessionRecording,
    stopSessionRecording,
    isFeatureEnabled,
    getFeatureFlag,
    reloadFeatureFlags
  };
}