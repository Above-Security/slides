import Logo from '../../components/ui/Logo';

export default {
  title: 'UI/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['tiny', 'small', 'medium', 'large', 'xlarge'],
    },
    className: { control: 'text' },
    href: { control: 'text' },
    showText: { control: 'boolean' },
  },
};

export const Default = {
  args: {},
};

export const Tiny = {
  args: {
    size: 'tiny',
  },
};

export const Small = {
  args: {
    size: 'small',
  },
};

export const Medium = {
  args: {
    size: 'medium',
  },
};

export const Large = {
  args: {
    size: 'large',
  },
};

export const ExtraLarge = {
  args: {
    size: 'xlarge',
  },
};

export const WithText = {
  args: {
    showText: true,
  },
};

export const CustomLink = {
  args: {
    href: '/home',
    showText: true,
  },
};

export const AllSizes = {
  render: () => (
    <div className="flex items-center gap-4">
      <Logo size="tiny" />
      <Logo size="small" />
      <Logo size="medium" />
      <Logo size="large" />
      <Logo size="xlarge" />
    </div>
  ),
};