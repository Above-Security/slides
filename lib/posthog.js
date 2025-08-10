import posthog from 'posthog-js';

export const initPostHog = () => {
  if (typeof window !== 'undefined' && !posthog.__loaded) {
    // Deployment version identifier
    window.__POSTHOG_DEPLOYMENT_VERSION = 'v2-fix-distinct-id-2025-01-13-0055';
    console.log('[PostHog] Initializing with version:', window.__POSTHOG_DEPLOYMENT_VERSION);
    
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY || 'phc_BgWA3cz0tZjUtKxkPJUvulSMm01Q8Ewyu6PZPY2ZEjK';
    // Use our proxy endpoint with non-obvious path name
    const host = typeof window !== 'undefined' 
      ? `${window.location.protocol}//${window.location.host}/ph-proxy`
      : '/ph-proxy';
    
    // Generate a distinct_id before initialization
    const distinctId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    posthog.init(key, {
      api_host: host,
      ui_host: 'https://us.posthog.com',
      person_profiles: 'identified_only',
      bootstrap: {
        distinctID: distinctId,
        isIdentifiedID: true
      },
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug();
        console.log('[PostHog] Loaded with distinct_id:', posthog.get_distinct_id());
      },
      // Completely disable feature flags to prevent the distinct_id error
      disable_decide: true,
      advanced_disable_decide: true,
      autocapture: true,
      capture_pageview: true,
      capture_pageleave: true,
      session_recording: {
        enabled: true,
        sample_rate: 1.0,
        minimum_duration_milliseconds: 1000,
        console_log_recording_enabled: true,
        network_payload_capture: {
          recordHeaders: true,
          recordBody: true
        }
      },
      persistence: 'localStorage+cookie',
      cross_subdomain_cookie: true,
      secure_cookie: true,
      // Let PostHog auto-generate the distinct ID
      disable_session_recording: false,
      mask_all_text: false,
      mask_all_element_attributes: false,
      enable_recording_console_log: true,
      capture_performance: true,
      sanitize_properties: (properties) => {
        if (properties['$ip']) {
          delete properties['$ip'];
        }
        return properties;
      }
    });
  }
  return posthog;
};

export default posthog;