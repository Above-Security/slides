import ThreeColumnGrid from '../../components/ui/FeatureGrid';

export default {
  title: 'UI/FeatureGrid',
  component: ThreeColumnGrid,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    items: { control: 'object' },
  },
};

const sampleItems = [
  {
    title: 'Fast Deployment',
    description: 'Get up and running in minutes',
  },
  {
    title: 'Secure by Default',
    description: 'Enterprise-grade security built-in',
  },
  {
    title: 'Scalable',
    description: 'Grows with your business',
  },
  {
    title: 'Accurate',
    description: '99.9% detection accuracy',
  },
  {
    title: 'Customizable',
    description: 'Adapt to your needs',
  },
  {
    title: 'Global Coverage',
    description: 'Protection worldwide',
  },
];

export const Default = {
  args: {
    items: sampleItems,
  },
};

export const FourItems = {
  args: {
    items: sampleItems.slice(0, 4),
  },
};

export const SixItems = {
  args: {
    items: sampleItems,
  },
};

export const ThreeItems = {
  args: {
    items: sampleItems.slice(0, 3),
  },
};

export const SingleItem = {
  args: {
    items: [sampleItems[0]],
  },
};

export const ManyItems = {
  args: {
    items: [
      ...sampleItems,
      {
        title: 'Innovative',
        description: 'Cutting-edge technology',
      },
      {
        title: 'Support',
        description: '24/7 customer support',
      },
      {
        title: 'Documentation',
        description: 'Comprehensive guides',
      },
    ],
  },
};

export const NoDescriptions = {
  args: {
    items: sampleItems.map(item => ({ ...item, description: undefined })),
  },
};