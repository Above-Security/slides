# PostHog Analytics Integration

This project includes PostHog for event tracking and user analytics. PostHog provides insights into user behavior, including:

- **Event Tracking**: Custom events for user interactions and feature usage
- **User Identification**: Track users across sessions with email identification
- **Feature Flags**: A/B testing and feature rollout capabilities
- **User Properties**: Rich user context and segmentation
- **Conversion Tracking**: Track user journeys and conversion funnels

## Key Features

- **Privacy Focused**: GDPR compliant with built-in consent management
- **Self-hosted Option**: Can be deployed on your own infrastructure
- **Real-time Analytics**: Live dashboard with real-time event tracking
- **User Journeys**: Track complete user flows across sessions
- **Retention Analysis**: Understand user engagement and retention patterns

## Implementation

The PostHog project key is configured in `/src/utils/posthog.js`:

```javascript
const posthogProjectKey = 'phc_BgWA3cz0tZjUtKxkPJUvulSMm01Q8Ewyu6PZPY2ZEjK';
```

## Integration Functions

The project includes several utility functions for tracking:

- `posthogEvent(eventName, properties)`: Track custom events
- `posthogIdentify(distinctId, properties)`: Identify users
- `posthogSet(properties)`: Set user properties
- `trackEmailGateEvent()`: Specialized email gate tracking
- `trackPresentationEngagement()`: Presentation slide tracking

## Usage

The integration is automatic and requires no additional setup. Analytics data is available in the PostHog dashboard.

## Privacy & Consent

PostHog respects user privacy and GDPR compliance. The integration includes consent management functions:

```javascript
import { posthogConsent } from './utils/posthog';

// Grant consent
posthogConsent(true);

// Revoke consent  
posthogConsent(false);
```
