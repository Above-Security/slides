import FeatureSection from '../../components/ui/FeatureSection';

export default {
  title: 'UI/FeatureSection',
  component: FeatureSection,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    features: { control: 'object' },
  },
};

const defaultFeatures = [
  {
    icon: '🛡️',
    title: 'Advanced Protection',
    description: 'Multi-layered security to protect against all threats',
  },
  {
    icon: '⚡',
    title: 'Real-time Detection',
    description: 'Instant threat detection and response',
  },
  {
    icon: '🤖',
    title: 'AI-Powered',
    description: 'Machine learning algorithms for smart protection',
  },
];

export const Default = {
  args: {
    title: 'Key Features',
    subtitle: 'Everything you need for complete security',
    features: defaultFeatures,
  },
};

export const TwoColumns = {
  args: {
    title: 'Core Capabilities',
    features: defaultFeatures.slice(0, 2),
  },
};

export const FourFeatures = {
  args: {
    title: 'Complete Security Suite',
    subtitle: 'Comprehensive protection for your applications',
    features: [
      ...defaultFeatures,
      {
        icon: '📊',
        title: 'Analytics Dashboard',
        description: 'Detailed insights and reporting',
      },
    ],
  },
};

export const SixFeatures = {
  args: {
    title: 'Enterprise Features',
    subtitle: 'Everything your organization needs',
    features: [
      ...defaultFeatures,
      {
        icon: '📊',
        title: 'Analytics',
        description: 'Comprehensive reporting',
      },
      {
        icon: '🔄',
        title: 'Integration',
        description: 'Seamless API connectivity',
      },
      {
        icon: '📱',
        title: 'Mobile Ready',
        description: 'Full mobile support',
      },
    ],
  },
};

export const NoSubtitle = {
  args: {
    title: 'Features',
    features: defaultFeatures,
  },
};

export const CustomIcons = {
  args: {
    title: 'Security Layers',
    features: [
      {
        icon: '1️⃣',
        title: 'First Layer',
        description: 'Initial threat detection',
      },
      {
        icon: '2️⃣',
        title: 'Second Layer',
        description: 'Deep analysis and verification',
      },
      {
        icon: '3️⃣',
        title: 'Third Layer',
        description: 'Response and mitigation',
      },
    ],
  },
};