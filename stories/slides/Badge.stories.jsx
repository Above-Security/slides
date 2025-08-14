import Badge from '../../components/slides/Badge';

export default {
  title: 'Slides/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'accent', 'success', 'warning'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'Default Badge',
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Badge',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Accent = {
  args: {
    variant: 'accent',
    children: 'Accent',
  },
};

export const Success = {
  args: {
    variant: 'success',
    children: 'Success',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
};

export const SmallSize = {
  args: {
    size: 'small',
    children: 'Small Badge',
  },
};

export const LargeSize = {
  args: {
    size: 'large',
    children: 'Large Badge',
  },
};

export const LongText = {
  args: {
    variant: 'primary',
    children: 'This is a badge with much longer text content',
  },
};