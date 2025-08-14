import NudgeDemo from '../../components/demos/NudgeDemo';

export default {
  title: 'Demos/NudgeDemo',
  component: NudgeDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Demonstration of the intelligent nudge system for security recommendations',
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
      <NudgeDemo />
    </div>
  ),
  name: 'Nudge Demo in Container',
};