import GlassPanel from '../../components/primitives/GlassPanel';

export default {
  title: 'Primitives/GlassPanel',
  component: GlassPanel,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'gradient',
      values: [
        {
          name: 'gradient',
          value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
      ],
    },
  },
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: 'This is a glass panel with backdrop blur effect',
  },
};

export const WithPadding = {
  args: {
    children: 'Glass panel with padding',
    className: 'p-8',
  },
};

export const LargePanel = {
  args: {
    children: 'Large glass panel',
    className: 'p-12 min-w-[400px] min-h-[300px]',
  },
};

export const CustomStyling = {
  args: {
    children: 'Custom styled glass panel',
    className: 'p-8 rounded-2xl border border-white/20',
  },
};

export const WithComplexContent = {
  render: () => (
    <GlassPanel className="p-6 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-2">Glass Panel</h3>
      <p className="text-white/80">
        This panel has a beautiful glassmorphism effect with backdrop blur.
      </p>
      <button className="mt-4 px-4 py-2 bg-white/20 rounded-lg text-white hover:bg-white/30 transition">
        Click Me
      </button>
    </GlassPanel>
  ),
};

export const NestedPanels = {
  render: () => (
    <GlassPanel className="p-8 rounded-2xl">
      <h2 className="text-2xl font-bold text-white mb-4">Outer Panel</h2>
      <GlassPanel className="p-4 rounded-lg bg-white/10">
        <p className="text-white">Nested glass panel with additional transparency</p>
      </GlassPanel>
    </GlassPanel>
  ),
};