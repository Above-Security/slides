import ProtectionStepCard from '../../components/slides/ProtectionStepCard';

export default {
  title: 'Slides/ProtectionStepCard',
  component: ProtectionStepCard,
  argTypes: {
    step: { control: 'number' },
    title: { control: 'text' },
    description: { control: 'text' },
    details: { control: 'text' },
    isActive: { control: 'boolean' },
    isVisible: { control: 'boolean' },
    variant: {
      control: { type: 'select' },
      options: ['rose', 'lavender', 'peach', 'green'],
    },
  },
};

export const Default = {
  args: {
    step: 1,
    title: 'Default Protection Step',
    description: 'This is a basic protection step card',
    variant: 'rose',
  },
};

export const Active = {
  args: {
    step: 2,
    title: 'Active Step',
    description: 'This step is currently active',
    isActive: true,
    isVisible: true,
  },
};

export const RoseVariant = {
  args: {
    step: 1,
    title: 'Detection Phase',
    description: 'Analyzing potential threats in real-time',
    variant: 'rose',
  },
};

export const LavenderVariant = {
  args: {
    step: 2,
    title: 'Analysis Step',
    description: 'Deep analysis of security patterns',
    variant: 'lavender',
    isActive: false,
  },
};

export const PeachVariant = {
  args: {
    step: 3,
    title: 'Verification Step',
    description: 'Verifying security measures',
    variant: 'peach',
  },
};

export const GreenStep = {
  args: {
    step: 4,
    title: 'Verification Complete',
    description: 'All security checks have passed successfully',
    variant: 'green',
    isActive: true,
    isVisible: true,
  },
};

export const WithDetails = {
  args: {
    step: 5,
    title: 'Comprehensive Analysis',
    description: 'This protection step involves multiple layers',
    details: 'Including behavioral analysis, pattern recognition, and real-time threat intelligence correlation',
    variant: 'lavender',
    isVisible: true,
  },
};