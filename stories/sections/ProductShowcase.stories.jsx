import ProductShowcase from '../../components/sections/ProductShowcase';

export default {
  title: 'Sections/ProductShowcase',
  component: ProductShowcase,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
  },
};

export const Default = {
  args: {
    src: '/api/placeholder/600/400',
    alt: 'Product screenshot',
  },
};

export const DashboardView = {
  args: {
    src: '/api/placeholder/800/600',
    alt: 'Security dashboard view',
  },
};

export const MobileView = {
  args: {
    src: '/api/placeholder/375/667',
    alt: 'Mobile application view',
  },
};

export const AnalyticsView = {
  args: {
    src: '/api/placeholder/1200/800',
    alt: 'Analytics dashboard',
  },
};

export const WithoutImage = {
  render: () => (
    <div className="bg-gray-100 p-8">
      <ProductShowcase />
    </div>
  ),
};