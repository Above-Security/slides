/**
 * Email Gating Utility Functions
 * Provides email validation, storage, and user identification for the email gate
 */

// Email validation with business email detection
export const validateEmail = (email) => {
    if (!email || typeof email !== 'string') {
        return { isValid: false, error: 'Email is required' };
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return { isValid: false, error: 'Please enter a valid email address' };
    }

    // Length validation
    if (email.length > 254) {
        return { isValid: false, error: 'Email address is too long' };
    }

    // Extract domain for business email detection
    const domain = email.split('@')[1].toLowerCase();

    // Common personal email domains (not exhaustive but covers most cases)
    const personalEmailDomains = new Set([
        'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
        'icloud.com', 'me.com', 'live.com', 'msn.com', 'ymail.com',
        'protonmail.com', 'mail.com', 'gmx.com', 'zoho.com', 'tutanota.com'
    ]);

    const isBusinessEmail = !personalEmailDomains.has(domain);

    // Additional validation for suspicious patterns
    if (email.includes('..') || email.startsWith('.') || email.endsWith('.')) {
        return { isValid: false, error: 'Invalid email format' };
    }

    return {
        isValid: true,
        isBusinessEmail,
        domain,
        error: null
    };
};

// Storage keys
const EMAIL_STORAGE_KEY = 'above_user_email';
const EMAIL_TIMESTAMP_KEY = 'above_email_timestamp';
const SESSION_ID_KEY = 'above_session_id';

// Store email with timestamp
export const storeEmail = (email) => {
    try {
        const timestamp = Date.now();
        const sessionId = generateSessionId();

        // Store in localStorage for persistence across sessions
        localStorage.setItem(EMAIL_STORAGE_KEY, email);
        localStorage.setItem(EMAIL_TIMESTAMP_KEY, timestamp.toString());
        localStorage.setItem(SESSION_ID_KEY, sessionId);

        // Also store in sessionStorage as backup
        sessionStorage.setItem(EMAIL_STORAGE_KEY, email);
        sessionStorage.setItem(EMAIL_TIMESTAMP_KEY, timestamp.toString());

        return true;
    } catch (error) {
        console.error('Failed to store email:', error);
        return false;
    }
};

// Retrieve stored email
export const getStoredEmail = () => {
    try {
        // Try localStorage first
        let email = localStorage.getItem(EMAIL_STORAGE_KEY);
        let timestamp = localStorage.getItem(EMAIL_TIMESTAMP_KEY);

        // Fallback to sessionStorage
        if (!email) {
            email = sessionStorage.getItem(EMAIL_STORAGE_KEY);
            timestamp = sessionStorage.getItem(EMAIL_TIMESTAMP_KEY);
        }

        if (!email) return null;

        // Check if email is expired (optional: 30 days)
        if (timestamp) {
            const emailAge = Date.now() - parseInt(timestamp, 10);
            const thirtyDays = 30 * 24 * 60 * 60 * 1000;

            if (emailAge > thirtyDays) {
                clearStoredEmail();
                return null;
            }
        }

        return email;
    } catch (error) {
        console.error('Failed to retrieve stored email:', error);
        return null;
    }
};

// Clear stored email data
export const clearStoredEmail = () => {
    try {
        localStorage.removeItem(EMAIL_STORAGE_KEY);
        localStorage.removeItem(EMAIL_TIMESTAMP_KEY);
        localStorage.removeItem(SESSION_ID_KEY);
        sessionStorage.removeItem(EMAIL_STORAGE_KEY);
        sessionStorage.removeItem(EMAIL_TIMESTAMP_KEY);
        return true;
    } catch (error) {
        console.error('Failed to clear stored email:', error);
        return false;
    }
};

// Generate consistent user ID from email for Clarity
export const generateUserId = (email) => {
    if (!email) return null;

    // Create a simple hash of the email for consistent user identification
    // This is not cryptographically secure but sufficient for analytics
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
        const char = email.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }

    // Convert to positive number and prefix with 'user_'
    return `user_${Math.abs(hash)}`;
};

// Generate session ID
export const generateSessionId = () => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Get current session info
export const getSessionInfo = () => {
    try {
        const sessionId = localStorage.getItem(SESSION_ID_KEY) || generateSessionId();
        const email = getStoredEmail();
        const timestamp = localStorage.getItem(EMAIL_TIMESTAMP_KEY);

        return {
            sessionId,
            email,
            timestamp: timestamp ? parseInt(timestamp, 10) : null,
            userId: email ? generateUserId(email) : null
        };
    } catch (error) {
        console.error('Failed to get session info:', error);
        return {
            sessionId: generateSessionId(),
            email: null,
            timestamp: null,
            userId: null
        };
    }
};

// Email domain categorization for analytics
export const categorizeEmailDomain = (email) => {
    if (!email) return 'unknown';

    const domain = email.split('@')[1].toLowerCase();

    // Technology companies
    const techDomains = new Set([
        'google.com', 'microsoft.com', 'apple.com', 'amazon.com', 'meta.com',
        'facebook.com', 'netflix.com', 'salesforce.com', 'oracle.com', 'adobe.com',
        'ibm.com', 'intel.com', 'nvidia.com', 'cisco.com', 'vmware.com'
    ]);

    // Financial services
    const financeDomains = new Set([
        'jpmorgan.com', 'bankofamerica.com', 'wellsfargo.com', 'goldmansachs.com',
        'morganstanley.com', 'citi.com', 'americanexpress.com', 'visa.com',
        'mastercard.com', 'paypal.com'
    ]);

    // Healthcare
    const healthcareDomains = new Set([
        'pfizer.com', 'jnj.com', 'abbvie.com', 'merck.com', 'novartis.com',
        'roche.com', 'sanofi.com', 'gsk.com', 'bms.com', 'lilly.com'
    ]);

    // Government domains
    if (domain.endsWith('.gov') || domain.endsWith('.mil')) {
        return 'government';
    }

    // Educational domains
    if (domain.endsWith('.edu')) {
        return 'education';
    }

    if (techDomains.has(domain)) return 'technology';
    if (financeDomains.has(domain)) return 'finance';
    if (healthcareDomains.has(domain)) return 'healthcare';

    return 'business';
};

// Validate storage availability
export const isStorageAvailable = () => {
    try {
        const test = '__storage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (error) {
        return false;
    }
};
