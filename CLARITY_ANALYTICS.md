# Microsoft Clarity Analytics Integration

This project includes Microsoft Clarity for session recording and user analytics. Clarity provides insights into user behavior, including:

## Features Tracked

### 🔍 Session Recording
- Full session recordings of user interactions
- Heatmaps showing user click patterns
- Scroll behavior and page engagement

### 📊 Custom Events Tracked
- **Slide Navigation**: Track when users move between slides
- **Keyboard Navigation**: Record arrow key and spacebar usage
- **Menu Interactions**: Monitor menu opens/closes and slide selections
- **Browser Navigation**: Track back/forward button usage
- **Session Start**: Record initial presentation load with device info

### 📈 Analytics Data
- Current slide position and titles
- Navigation patterns and user flow
- Device and viewport information
- User engagement metrics

## Configuration

The Clarity project ID is configured in `/src/utils/clarity.js`:
```javascript
const clarityProjectId = 's1vq4848wx';
```

## Tracked Events

| Event Name | Description | Data Captured |
|------------|-------------|---------------|
| `presentation_session_start` | User loads the presentation | Initial slide, device info, viewport size |
| `slide_navigation` | User navigates between slides | From/to slide numbers, method (button/keyboard/menu) |
| `keyboard_navigation` | User uses keyboard shortcuts | Direction, key pressed |
| `menu_interaction` | User interacts with the menu | Action (open/close/select), slide context |
| `browser_navigation` | User uses browser back/forward | Slide navigation via browser controls |

## Custom Tags Set

- `presentation_name`: "Above Security Pitch Deck"
- `current_slide`: Current slide title
- `slide_number`: Current slide index
- `total_slides`: Total number of slides

## Usage

The integration is automatic and requires no additional setup. Analytics data is available in the Microsoft Clarity dashboard at [https://clarity.microsoft.com/](https://clarity.microsoft.com/).

## Privacy

Clarity respects user privacy and GDPR compliance. The integration includes consent management functions if needed:

```javascript
import { clarityConsent } from './utils/clarity';

// Grant consent for tracking
clarityConsent(true);

// Revoke consent
clarityConsent(false);
```
