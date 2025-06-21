// Use Cases Data Module
// Centralized data for all use cases with comprehensive mock scenarios

export const useCasesData = {
    'phishing-detection': {
        id: 'phishing-detection',
        title: 'Phishing Detection',
        subtitle: 'Real-time detection of sophisticated phishing attacks',
        description: 'Above Security\'s runtime analysis detects sophisticated phishing attacks that bypass traditional email security, including AiTM phishing, consent phishing, and brand impersonation attacks.',
        icon: 'fas fa-shield-alt',
        color: 'var(--brand-primary)',
        scenarios: [
            {
                id: 'aitm-phishing',
                title: 'Fake Microsoft Login Page (AiTM Phish)',
                icon: 'fas fa-fish',
                attack: 'Attacker sends link to pixel-perfect fake Microsoft login hosted on compromised SharePoint subdomain. Uses AiTM kit to harvest credentials + session cookies.',
                detection: 'Above flags form structure and JavaScript behavior inconsistent with legitimate login flow — semantic model detects spoofed branding and session token theft pattern.',
                outcome: 'Session blocked before credentials submitted',
                severity: 'critical',
                techniques: ['AiTM (Adversary-in-the-Middle)', 'Brand Impersonation', 'Session Token Theft'],
                indicators: ['Suspicious form behavior', 'Spoofed branding patterns', 'Session manipulation']
            },
            {
                id: 'oauth-consent',
                title: 'Consent Phishing via OAuth (LOTS)',
                icon: 'fab fa-google',
                attack: 'Attacker sends fake "Google Workspace Backup" OAuth app with Google branding. App asks for Gmail read/send + Drive access.',
                detection: 'Above detects mismatch between app identity, permissions requested, and consent screen branding — LOTS signature pattern flagged.',
                outcome: 'OAuth token request blocked before consent',
                severity: 'high',
                techniques: ['LOTS (Living off Trusted Sites)', 'OAuth Abuse', 'Consent Phishing'],
                indicators: ['App identity mismatch', 'Excessive permissions', 'Branding inconsistencies']
            },
            {
                id: 'credential-harvesting',
                title: 'Credential Harvesting Portal',
                icon: 'fas fa-key',
                attack: 'Sophisticated portal mimicking company SSO login, deployed on legitimate cloud infrastructure with valid TLS certificate.',
                detection: 'Runtime analysis detects form submission patterns and endpoint behavior inconsistent with legitimate SSO flow.',
                outcome: 'Portal access blocked and credentials protected',
                severity: 'high',
                techniques: ['Credential Harvesting', 'Domain Spoofing', 'SSO Impersonation'],
                indicators: ['Form behavior analysis', 'Endpoint validation', 'SSL certificate anomalies']
            },
            {
                id: 'business-email',
                title: 'Business Email Compromise (BEC)',
                icon: 'fas fa-envelope-open-text',
                attack: 'Compromised executive email account used to send wire transfer requests to finance team, appearing from legitimate internal address.',
                detection: 'Behavioral analysis detects writing style, timing, and request pattern deviations from executive\'s historical communication.',
                outcome: 'Fraudulent transfer request flagged and blocked',
                severity: 'critical',
                techniques: ['Account Takeover', 'Social Engineering', 'Financial Fraud'],
                indicators: ['Communication pattern analysis', 'Behavioral deviation', 'Transaction anomalies']
            }
        ],
        metrics: {
            detectionRate: '99.7%',
            falsePositives: '<0.1%',
            responseTime: '<200ms',
            coverage: 'All major SaaS platforms'
        }
    },
    'account-takeover': {
        id: 'account-takeover',
        title: 'Account Takeover Prevention',
        subtitle: 'Behavioral analysis to detect unauthorized access',
        description: 'Advanced behavioral monitoring and session analysis to detect account takeovers, session hijacking, and unauthorized access patterns across all connected applications.',
        icon: 'fas fa-user-shield',
        color: 'var(--security-blue-2)',
        scenarios: [
            {
                id: 'shared-cookie',
                title: 'Account Takeover via Shared Cookie',
                icon: 'fas fa-cookie-bite',
                attack: 'Attacker reuses session cookie from shared browser profile to access internal CRM without triggering MFA.',
                detection: 'Above detects behavioral mismatch with historical user — different location, click cadence, app navigation pattern triggers identity drift model.',
                outcome: 'Session terminated before data access',
                severity: 'high',
                techniques: ['Session Hijacking', 'Cookie Theft', 'MFA Bypass'],
                indicators: ['Behavioral drift', 'Geolocation anomalies', 'Navigation pattern changes']
            },
            {
                id: 'credential-stuffing',
                title: 'Credential Stuffing Attack',
                icon: 'fas fa-key',
                attack: 'Automated bot attempts login with leaked credentials from previous breaches across multiple corporate accounts.',
                detection: 'Runtime analysis identifies non-human interaction patterns and correlates with threat intelligence feeds.',
                outcome: 'Automated login attempts blocked',
                severity: 'medium',
                techniques: ['Credential Stuffing', 'Automation', 'Password Reuse'],
                indicators: ['Bot behavior patterns', 'Credential correlation', 'Automation signatures']
            },
            {
                id: 'privilege-escalation',
                title: 'Privilege Escalation Attack',
                icon: 'fas fa-user-crown',
                attack: 'Compromised standard user account attempts to access admin functions through API manipulation and role exploitation.',
                detection: 'Cross-application privilege monitoring detects unauthorized access attempts and role boundary violations.',
                outcome: 'Privilege escalation blocked and admin alerted',
                severity: 'critical',
                techniques: ['Privilege Escalation', 'API Abuse', 'Role Exploitation'],
                indicators: ['Privilege boundary violations', 'API anomalies', 'Role escalation patterns']
            }
        ],
        metrics: {
            detectionRate: '99.5%',
            falsePositives: '<0.2%',
            responseTime: '<150ms',
            coverage: 'Cross-platform behavioral analysis'
        }
    },
    'insider-threat': {
        id: 'insider-threat',
        title: 'Insider Threat Detection',
        subtitle: 'Cross-app behavior correlation for privileged misuse',
        description: 'Comprehensive monitoring of privileged user activities across all connected applications to detect data exfiltration, policy violations, and malicious insider behavior.',
        icon: 'fas fa-user-times',
        color: 'var(--text-danger)',
        scenarios: [
            {
                id: 'privileged-misuse',
                title: 'Privileged Misuse by Insider',
                icon: 'fas fa-user-tie',
                attack: 'Departing finance exec accesses acquisition documents across multiple apps two days before exit.',
                detection: 'Above correlates cross-app access behavior, detects deviation from peer role norms, and flags intent mismatch.',
                outcome: 'Real-time alert triggered with full session trace',
                severity: 'critical',
                techniques: ['Data Exfiltration', 'Privileged Abuse', 'Policy Violation'],
                indicators: ['Cross-app correlation', 'Peer behavior deviation', 'Access pattern anomalies']
            },
            {
                id: 'data-exfiltration',
                title: 'Mass Data Download',
                icon: 'fas fa-download',
                attack: 'Employee downloads unusually large amounts of customer data from CRM and file shares before leaving company.',
                detection: 'Volume-based anomaly detection combined with contextual analysis of user lifecycle and access patterns.',
                outcome: 'Data transfer blocked and security team alerted',
                severity: 'high',
                techniques: ['Data Theft', 'Mass Download', 'Exfiltration'],
                indicators: ['Volume anomalies', 'Lifecycle correlation', 'Download pattern analysis']
            },
            {
                id: 'policy-violation',
                title: 'Compliance Policy Violation',
                icon: 'fas fa-exclamation-triangle',
                attack: 'HR manager accesses employee records outside normal business hours and shares sensitive information externally.',
                detection: 'Time-based access monitoring combined with data sharing pattern analysis detects policy violations.',
                outcome: 'Policy violation logged and manager notified',
                severity: 'medium',
                techniques: ['Policy Violation', 'Unauthorized Sharing', 'Time-based Abuse'],
                indicators: ['Time-based anomalies', 'Sharing pattern analysis', 'Policy correlation']
            }
        ],
        metrics: {
            detectionRate: '98.9%',
            falsePositives: '<0.3%',
            responseTime: '<300ms',
            coverage: 'All privileged user activities'
        }
    },
    'zero-day-protection': {
        id: 'zero-day-protection',
        title: 'Zero-Day Protection',
        subtitle: 'Runtime analysis for unknown threat detection',
        description: 'Behavioral and runtime analysis to detect unknown threats and novel attack patterns that bypass signature-based security solutions.',
        icon: 'fas fa-bug',
        color: 'var(--text-warning)',
        scenarios: [
            {
                id: 'novel-malware',
                title: 'Novel Browser-Based Malware',
                icon: 'fas fa-virus',
                attack: 'Unknown JavaScript-based malware exploits browser vulnerability to establish persistence and steal session tokens.',
                detection: 'Runtime behavior analysis detects unusual DOM manipulation patterns and suspicious network communications.',
                outcome: 'Malware execution blocked and browser quarantined',
                severity: 'critical',
                techniques: ['Zero-Day Exploit', 'Browser Hijacking', 'Token Theft'],
                indicators: ['DOM manipulation anomalies', 'Network behavior analysis', 'Execution pattern detection']
            },
            {
                id: 'unknown-c2',
                title: 'Unknown Command & Control',
                icon: 'fas fa-satellite-dish',
                attack: 'Novel C2 protocol uses legitimate SaaS applications to tunnel commands and exfiltrate data without detection.',
                detection: 'Machine learning models detect abnormal data flow patterns and communication timing inconsistent with legitimate usage.',
                outcome: 'C2 communication blocked and IOCs extracted',
                severity: 'high',
                techniques: ['C2 Communication', 'Living off the Land', 'Steganography'],
                indicators: ['Communication pattern analysis', 'Data flow anomalies', 'Timing correlation']
            }
        ],
        metrics: {
            detectionRate: '97.8%',
            falsePositives: '<0.5%',
            responseTime: '<500ms',
            coverage: 'Unknown and novel threats'
        }
    }
};

// Helper function to get a specific use case by ID
export const getUseCaseById = (id) => {
    return useCasesData[id] || null;
};

// Helper function to get all use cases as an array
export const getAllUseCases = () => {
    return Object.values(useCasesData);
};

// Helper function to get use case IDs
export const getUseCaseIds = () => {
    return Object.keys(useCasesData);
};
