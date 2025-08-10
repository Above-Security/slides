import posthog from 'posthog-js';

export const initPostHog = () => {
  if (typeof window !== 'undefined' && !posthog.__loaded) {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY || 'phc_BgWA3cz0tZjUtKxkPJUvulSMm01Q8Ewyu6PZPY2ZEjK';
    // Use our proxy endpoint with non-obvious path name
    const host = typeof window !== 'undefined' 
      ? `${window.location.protocol}//${window.location.host}/ph-proxy`
      : '/ph-proxy';
    
    posthog.init(key, {
      api_host: host,
      ui_host: 'https://us.posthog.com',
      person_profiles: 'identified_only',
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug();
      },
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
      bootstrap: {
        distinctID: null,
        isIdentifiedID: false
      },
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