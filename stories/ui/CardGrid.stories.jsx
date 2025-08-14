import CardGrid from '../../components/ui/CardGrid';

export default {
  title: 'UI/CardGrid',
  component: CardGrid,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    cards: { control: 'object' },
    columns: {
      control: { type: 'select' },
      options: [2, 3, 4],
    },
  },
};

const sampleCards = [
  {
    title: 'Security Dashboard',
    description: 'Real-time monitoring and alerts',
    items: [
      'Live threat monitoring',
      'Custom alert rules',
      'Automated responses',
    ],
  },
  {
    title: 'Threat Intelligence',
    description: 'Advanced threat detection and analysis',
    items: [
      'AI-powered detection',
      'Pattern recognition',
      'Threat scoring',
    ],
  },
  {
    title: 'Compliance Tools',
    description: 'Automated compliance reporting',
    items: [
      'Regulatory frameworks',
      'Audit trails',
      'Compliance dashboards',
    ],
  },
];

export const Default = {
  args: {
    cards: sampleCards,
  },
};

export const TwoColumns = {
  args: {
    cards: sampleCards.slice(0, 2),
    columns: 2,
  },
};

export const FourColumns = {
  args: {
    cards: [
      ...sampleCards,
      {
        title: 'API Security',
        description: 'Protect your APIs',
        items: [
          'RESTful API protection',
          'GraphQL security',
          'Rate limiting',
        ],
      },
    ],
    columns: 4,
  },
};

export const NoItems = {
  args: {
    cards: sampleCards.map(card => ({ ...card, items: undefined })),
  },
};

export const SimpleCards = {
  args: {
    cards: [
      {
        title: 'Simple Card 1',
        description: 'Just a title and description',
      },
      {
        title: 'Simple Card 2',
        description: 'Another simple card',
      },
      {
        title: 'Simple Card 3',
        description: 'One more simple card',
      },
    ],
  },
};

export const MixedContent = {
  args: {
    cards: [
      {
        title: 'Full Featured',
        description: 'Card with all properties',
        items: [
          'Feature one',
          'Feature two',
          'Feature three',
        ],
      },
      {
        title: 'With Items',
        description: 'Card with feature list',
        items: [
          'Only two items',
          'In this card',
        ],
      },
      {
        title: 'No Items',
        description: 'Card without items list',
      },
      {
        title: 'Minimal',
        description: 'Just title and description',
      },
    ],
  },
};