import CapabilityComparison from '../../components/slides/CapabilityComparison';

export default {
  title: 'Slides/CapabilityComparison',
  component: CapabilityComparison,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    leftTitle: { control: 'text' },
    rightTitle: { control: 'text' },
    leftItems: { control: 'object' },
    rightItems: { control: 'object' },
    leftColor: {
      control: { type: 'select' },
      options: ['rose', 'lavender', 'blue'],
    },
    rightColor: {
      control: { type: 'select' },
      options: ['rose', 'lavender', 'blue'],
    },
  },
};

export const Default = {
  args: {
    leftTitle: 'Traditional Approach',
    rightTitle: 'Above Security',
    leftItems: [
      'Manual threat detection',
      'Reactive security measures',
      'Limited visibility',
    ],
    rightItems: [
      'AI-powered detection',
      'Proactive protection',
      'Complete visibility',
    ],
    leftColor: 'rose',
    rightColor: 'lavender',
  },
};

export const ExtendedComparison = {
  args: {
    leftTitle: 'Legacy Systems',
    rightTitle: 'Modern Solution',
    leftItems: [
      'Signature-based detection',
      'High false positive rate',
      'Slow response time',
      'Limited scalability',
      'Manual configuration',
    ],
    rightItems: [
      'Behavioral analysis',
      'Minimal false positives',
      'Real-time response',
      'Cloud-native scalability',
      'Auto-configuration',
    ],
    leftColor: 'blue',
    rightColor: 'rose',
  },
};

export const FeatureComparison = {
  args: {
    leftTitle: 'Basic Plan',
    rightTitle: 'Premium Plan',
    leftItems: [
      'Core security features',
      'Email support',
      'Monthly reports',
      'Standard SLA',
    ],
    rightItems: [
      'Advanced AI features',
      '24/7 phone support',
      'Real-time dashboards',
      'Priority SLA',
      'Custom integrations',
    ],
    leftColor: 'lavender',
    rightColor: 'rose',
  },
};