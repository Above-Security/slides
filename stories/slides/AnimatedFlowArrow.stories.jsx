import AnimatedFlowArrow from '../../components/slides/AnimatedFlowArrow';

export default {
  title: 'Slides/AnimatedFlowArrow',
  component: AnimatedFlowArrow,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    dataFlow: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    dataFlow: false,
  },
};

export const WithDataFlow = {
  args: {
    dataFlow: true,
  },
};

export const AnimationDemo = {
  render: () => (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-gray-600 mb-2">Static Arrow</p>
        <AnimatedFlowArrow dataFlow={false} />
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">Animated Data Flow</p>
        <AnimatedFlowArrow dataFlow={true} />
      </div>
    </div>
  ),
};

export const MultipleArrows = {
  render: () => (
    <div className="flex items-center gap-8">
      <AnimatedFlowArrow dataFlow={true} />
      <AnimatedFlowArrow dataFlow={true} />
      <AnimatedFlowArrow dataFlow={true} />
    </div>
  ),
};