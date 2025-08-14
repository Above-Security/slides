import ApplicationDiscoveryDemo from '../../components/demos/ApplicationDiscoveryDemo';

export default {
  title: 'Demos/ApplicationDiscoveryDemo',
  component: ApplicationDiscoveryDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Interactive demo showing automatic application discovery and mapping capabilities',
      },
    },
  },
};

export const Default = {
  args: {},
};

export const InContainer = {
  render: () => (
    <div className="max-w-4xl mx-auto p-8">
      <ApplicationDiscoveryDemo />
    </div>
  ),
  name: 'Discovery Demo in Container',
};