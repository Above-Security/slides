import StepsList from '../../components/ui/StepsList';

export default {
  title: 'UI/StepsList',
  component: StepsList,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    steps: { control: 'object' },
  },
};

const sampleSteps = [
  {
    number: 1,
    title: 'Sign Up',
    description: 'Create your account in seconds',
  },
  {
    number: 2,
    title: 'Configure',
    description: 'Set up your security preferences',
  },
  {
    number: 3,
    title: 'Deploy',
    description: 'Start protecting your applications',
  },
];

export const Default = {
  args: {
    steps: sampleSteps,
  },
};

export const FourSteps = {
  args: {
    steps: [
      ...sampleSteps,
      {
        number: 4,
        title: 'Monitor',
        description: 'Track your security metrics',
      },
    ],
  },
};

export const TwoSteps = {
  args: {
    steps: sampleSteps.slice(0, 2),
  },
};

export const SingleStep = {
  args: {
    steps: [sampleSteps[0]],
  },
};

export const ManySteps = {
  args: {
    steps: [
      ...sampleSteps,
      {
        number: 4,
        title: 'Monitor',
        description: 'Track security metrics',
      },
      {
        number: 5,
        title: 'Optimize',
        description: 'Fine-tune your protection',
      },
    ],
  },
};

export const NoDescriptions = {
  args: {
    steps: sampleSteps.map(step => ({ ...step, description: undefined })),
  },
};

export const DetailedSteps = {
  args: {
    steps: [
      {
        number: 1,
        title: 'Initial Assessment',
        description: 'We analyze your current security posture and identify potential vulnerabilities in your system',
      },
      {
        number: 2,
        title: 'Custom Configuration',
        description: 'Our experts work with you to configure the perfect security setup for your specific needs',
      },
      {
        number: 3,
        title: 'Implementation',
        description: 'Seamlessly deploy our security solution across your entire application infrastructure',
      },
      {
        number: 4,
        title: 'Testing & Validation',
        description: 'Comprehensive testing ensures everything works perfectly before going live',
      },
    ],
  },
};