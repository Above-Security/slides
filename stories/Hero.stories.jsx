import Hero from '../components/Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {},
};

export const InContainer = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Hero />
    </div>
  ),
};

export const WithScroll = {
  render: () => (
    <div>
      <Hero />
      <div className="h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-2xl text-gray-600">Scroll up to see parallax effect</p>
      </div>
    </div>
  ),
  name: 'With Scroll Effect',
};