import SceneCard from '../../components/timeline/SceneCard';

export default {
  title: 'Timeline/SceneCard',
  component: SceneCard,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    time: { control: 'text' },
    headline: { control: 'text' },
    sub: { control: 'text' },
    bgKind: {
      control: { type: 'select' },
      options: [
        'hr',
        'org-crm-deep',
        'org-staging',
        'org-oauth-consent',
        'org-shadow-saas',
        'insider-start',
        'insider-crm-deep',
        'insider-staging',
        'insider-oauth-consent',
        'insider-shadow-saas',
        'cta-org',
        'cta-insider'
      ],
    },
    index: { control: 'number' },
    total: { control: 'number' },
  },
};

export const Default = {
  args: {
    time: '10:30 AM',
    headline: 'HR System Activity',
    sub: 'Employee record modification detected in the system',
    bgKind: 'hr',
    index: 0,
    total: 3,
  },
};

export const OrgCRMDeep = {
  args: {
    time: '2:15 PM',
    headline: 'Deep CRM Analysis',
    sub: 'Organization-wide opportunity pipeline enumeration and analysis',
    bgKind: 'org-crm-deep',
    index: 1,
    total: 3,
  },
};

export const OrgDataStaging = {
  args: {
    time: '3:45 PM',
    headline: 'Data Staging Activity',
    sub: 'Multiple exports and copy operations detected across organization',
    bgKind: 'org-staging',
    index: 0,
    total: 5,
  },
};

export const OAuthConsent = {
  args: {
    time: '11:20 AM',
    headline: 'OAuth Authorization',
    sub: 'Third-party application consent granted with sensitive scopes',
    bgKind: 'org-oauth-consent',
    index: 2,
    total: 4,
  },
};

export const ShadowSaaS = {
  args: {
    time: '1:30 PM',
    headline: 'Unapproved Tool Usage',
    sub: 'Shadow SaaS application detected running alongside approved systems',
    bgKind: 'org-shadow-saas',
    index: 3,
    total: 5,
  },
};

export const InsiderStart = {
  args: {
    time: '9:00 AM',
    headline: 'Week Initialization',
    sub: 'Normal startup sequence with no unusual activity detected',
    bgKind: 'insider-start',
    index: 0,
    total: 1,
  },
};

export const InsiderCRMDeep = {
  args: {
    time: '2:45 PM',
    headline: 'Unusual Data Access',
    sub: 'Employee accessing data outside their typical scope - guidance provided',
    bgKind: 'insider-crm-deep',
    index: 1,
    total: 4,
  },
};

export const InsiderStaging = {
  args: {
    time: '4:10 PM',
    headline: 'Export Attempt',
    sub: 'Bulk data export attempted - redirected to approved channels',
    bgKind: 'insider-staging',
    index: 2,
    total: 4,
  },
};

export const InsiderOAuth = {
  args: {
    time: '11:45 AM',
    headline: 'Authorization Review',
    sub: 'Third-party app permissions reviewed - approval process initiated',
    bgKind: 'insider-oauth-consent',
    index: 1,
    total: 3,
  },
};

export const InsiderShadowSaaS = {
  args: {
    time: '1:15 PM',
    headline: 'Tool Guidance',
    sub: 'Unapproved application usage - guidance provided to use approved tools',
    bgKind: 'insider-shadow-saas',
    index: 0,
    total: 2,
  },
};

export const CTAOrg = {
  args: {
    time: '5:30 PM',
    headline: 'Chain of Attribution Complete',
    sub: 'Comprehensive timeline compiled with full context and provenance',
    bgKind: 'cta-org',
    index: 4,
    total: 5,
  },
};

export const CTAInsider = {
  args: {
    time: '5:45 PM',
    headline: 'Guidance Summary',
    sub: 'All interactions guided successfully with no incidents recorded',
    bgKind: 'cta-insider',
    index: 3,
    total: 4,
  },
};