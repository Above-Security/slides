import RiskDashboardDemo from '../../components/demos/RiskDashboardDemo';

export default {
  title: 'Demos/RiskDashboardDemo',
  component: RiskDashboardDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Interactive risk assessment dashboard showing real-time security metrics',
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
      <RiskDashboardDemo />
    </div>
  ),
  name: 'Risk Dashboard in Container',
};