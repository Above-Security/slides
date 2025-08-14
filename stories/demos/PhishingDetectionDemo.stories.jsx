import PhishingDetectionDemo from '../../components/demos/PhishingDetectionDemo';

export default {
  title: 'Demos/PhishingDetectionDemo',
  component: PhishingDetectionDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Interactive demonstration of AI-powered phishing detection capabilities',
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
      <PhishingDetectionDemo />
    </div>
  ),
  name: 'Phishing Detection in Container',
};