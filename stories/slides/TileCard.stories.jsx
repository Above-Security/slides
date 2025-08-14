import TileCard from '../../components/slides/TileCard';

export default {
  title: 'Slides/TileCard',
  component: TileCard,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    icon: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'accent'],
    },
    delay: { control: 'number' },
    className: { control: 'text' },
  },
};

export const Default = {
  args: {
    title: 'Default Tile',
    description: 'This is a default tile card with basic styling',
    icon: '🚀',
  },
};

export const PrimaryVariant = {
  args: {
    title: 'Primary Card',
    description: 'A tile card with primary variant',
    icon: '🌹',
    variant: 'primary',
  },
};

export const SecondaryVariant = {
  args: {
    title: 'Secondary Card',
    description: 'A tile card with secondary variant',
    icon: '💜',
    variant: 'secondary',
  },
};

export const AccentVariant = {
  args: {
    title: 'Accent Card',
    description: 'A tile card with accent variant',
    icon: '🍑',
    variant: 'accent',
  },
};

export const LongContent = {
  args: {
    title: 'Card with Extended Content',
    description: 'This card contains a much longer description to test how the component handles text overflow and wrapping in various viewport sizes',
    icon: '📝',
    variant: 'default',
  },
};

export const NoIcon = {
  args: {
    title: 'No Icon Card',
    description: 'This card has no icon to test the layout',
    variant: 'primary',
  },
};

export const WithDelay = {
  args: {
    title: 'Animated Card',
    description: 'This card appears with a delay',
    icon: '⏱️',
    delay: 0.5,
  },
};