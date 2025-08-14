import EvidenceTimelineDemo from '../../components/demos/EvidenceTimelineDemo';

export default {
  title: 'Demos/EvidenceTimelineDemo',
  component: EvidenceTimelineDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Interactive demonstration of the evidence timeline feature showing security event tracking',
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
      <EvidenceTimelineDemo />
    </div>
  ),
  name: 'Timeline Demo in Container',
};