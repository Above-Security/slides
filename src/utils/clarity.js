// Microsoft Clarity initialization utility using the npm package
import Clarity from '@microsoft/clarity';

export const initializeClarity = () => {
    // Initialize Microsoft Clarity with the project ID
    const clarityProjectId = 's1vq4848wx';

    try {
        Clarity.init(clarityProjectId);
        console.log('Microsoft Clarity initialized successfully with project ID:', clarityProjectId);
    } catch (error) {
        console.error('Failed to initialize Microsoft Clarity:', error);
    }
};

// Clarity API wrapper functions for custom events and tracking
export const clarityEvent = (eventName, data = {}) => {
    try {
        if (window.clarity) {
            Clarity.event(eventName);
        }
    } catch (error) {
        console.warn('Clarity event failed:', error);
    }
};

export const clarityIdentify = (customerId, customSessionId, customPageId, friendlyName) => {
    try {
        if (window.clarity) {
            Clarity.identify(customerId, customSessionId, customPageId, friendlyName);
        }
    } catch (error) {
        console.warn('Clarity identify failed:', error);
    }
};

export const claritySet = (key, value) => {
    try {
        if (window.clarity) {
            Clarity.setTag(key, value);
        }
    } catch (error) {
        console.warn('Clarity set failed:', error);
    }
};

// Additional utility functions
export const clarityConsent = (consent = true) => {
    try {
        Clarity.consent(consent);
        console.log('Microsoft Clarity consent granted');
    } catch (error) {
        console.warn('Clarity consent failed:', error);
    }
};

export const clarityUpgrade = (reason) => {
    try {
        Clarity.upgrade(reason);
        console.log('Microsoft Clarity session upgraded:', reason);
    } catch (error) {
        console.warn('Clarity upgrade failed:', error);
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
        }

        clarityEvent(`email_gate_${eventType}`, eventData);

        // Set tags for filtering in Clarity
        if (email) {
            claritySet('user_has_email', 'true');
            claritySet('user_email_domain', domain);
        }

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
            engagementData.user_domain = email.split('@')[1];
        }

        clarityEvent('presentation_slide_view', engagementData);
        claritySet('current_slide', slideNumber);
        claritySet('last_slide_title', slideTitle);

    } catch (error) {
        console.warn('Presentation engagement tracking failed:', error);
    }
};
