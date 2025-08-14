import BrandLogo from '../../components/ui/BrandLogo';

export default {
  title: 'UI/BrandLogo',
  component: BrandLogo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: { control: 'text' },
  },
};

export const Default = {
  args: {},
};

export const CustomSize = {
  args: {
    className: 'w-32 h-32',
  },
};

export const Small = {
  args: {
    className: 'w-16 h-16',
  },
};

export const WithCustomStyling = {
  args: {
    className: 'w-24 h-24 opacity-75 hover:opacity-100 transition-opacity',
  },
};

export const MultipleSizes = {
  render: () => (
    <div className="flex items-center gap-4">
      <BrandLogo className="w-12 h-12" />
      <BrandLogo className="w-16 h-16" />
      <BrandLogo className="w-20 h-20" />
      <BrandLogo className="w-24 h-24" />
    </div>
  ),
};