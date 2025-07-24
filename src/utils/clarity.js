// PostHog analytics initialization utility
import posthog from 'posthog-js';

export const initializePostHog = () => {
    // Initialize PostHog with the project key
    const posthogProjectKey = 'phc_BgWA3cz0tZjUtKxkPJUvulSMm01Q8Ewyu6PZPY2ZEjK';

    try {
        posthog.init(posthogProjectKey, {
            api_host: 'https://app.posthog.com',
        });
        console.log('PostHog initialized successfully with project key:', posthogProjectKey);
    } catch (error) {
        console.error('Failed to initialize PostHog:', error);
    }
};

// PostHog API wrapper functions for custom events and tracking
export const posthogEvent = (eventName, properties = {}) => {
    try {
        posthog.capture(eventName, properties);
    } catch (error) {
        console.warn('PostHog event failed:', error);
    }
};

export const posthogIdentify = (distinctId, properties = {}) => {
    try {
        posthog.identify(distinctId, properties);
    } catch (error) {
        console.warn('PostHog identify failed:', error);
    }
};

export const posthogSet = (properties) => {
    try {
        posthog.setPersonProperties(properties);
    } catch (error) {
        console.warn('PostHog set properties failed:', error);
    }
};

// Additional utility functions
export const posthogConsent = (consent = true) => {
    try {
        if (consent) {
            posthog.opt_in_capturing();
            console.log('PostHog consent granted');
        } else {
            posthog.opt_out_capturing();
            console.log('PostHog consent revoked');
        }
    } catch (error) {
        console.warn('PostHog consent failed:', error);
    }
};

export const posthogReset = () => {
    try {
        posthog.reset();
        console.log('PostHog session reset');
    } catch (error) {
        console.warn('PostHog reset failed:', error);
    }
};

// Enhanced tracking functions for email gating
export const trackEmailGateEvent = (eventType, email = null, additionalData = {}) => {
    try {
        const eventData = {
            event_type: eventType,
            timestamp: new Date().toISOString(),
            ...additionalData
        };

        if (email) {
            const domain = email.split('@')[1];
            eventData.email_domain = domain;
            eventData.has_email = true;

            // Identify the user with their email
            posthogIdentify(email, {
                email: email,
                email_domain: domain,
                user_has_email: true
            });
        }

        posthogEvent(`email_gate_${eventType}`, eventData);

    } catch (error) {
        console.warn('Email gate tracking failed:', error);
    }
};

// Track presentation engagement with email context
export const trackPresentationEngagement = (slideNumber, slideTitle, email = null) => {
    try {
        const engagementData = {
            slide_number: slideNumber,
            slide_title: slideTitle,
            has_user_email: !!email,
            timestamp: new Date().toISOString()
        };

        if (email) {
            const domain = email.split('@')[1];
            engagementData.user_domain = domain;

            // Identify the user with their email for engagement tracking
            posthogIdentify(email, {
                email: email,
                email_domain: domain,
                current_slide: slideNumber,
                last_slide_title: slideTitle
            });
        }

        posthogEvent('presentation_slide_view', engagementData);

    } catch (error) {
        console.warn('Presentation engagement tracking failed:', error);
    }
};
