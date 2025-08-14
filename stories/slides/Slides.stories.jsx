import Slide1 from '../../components/slides/Slide1';
import Slide2 from '../../components/slides/Slide2';
import Slide3 from '../../components/slides/Slide3';
import Slide4 from '../../components/slides/Slide4';
import Slide5 from '../../components/slides/Slide5';
import Slide6 from '../../components/slides/Slide6';
import Slide7 from '../../components/slides/Slide7';
import Slide8 from '../../components/slides/Slide8';
import Slide9 from '../../components/slides/Slide9';
import Slide10 from '../../components/slides/Slide10';

export default {
  title: 'Slides/Presentations',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete presentation slides showcasing Above Security features',
      },
    },
  },
};

export const TitleSlide = {
  render: () => <Slide1 />,
  name: 'Slide 1: Title',
};

export const ProblemStatement = {
  render: () => <Slide2 />,
  name: 'Slide 2: Problem Statement',
};

export const TraditionalApproach = {
  render: () => <Slide3 />,
  name: 'Slide 3: Traditional Approach',
};

export const ModernSolution = {
  render: () => <Slide4 />,
  name: 'Slide 4: Modern Solution',
};

export const HowItWorks = {
  render: () => <Slide5 />,
  name: 'Slide 5: How It Works',
};

export const KeyCapabilities = {
  render: () => <Slide6 />,
  name: 'Slide 6: Key Capabilities',
};

export const ComparisonTable = {
  render: () => <Slide7 />,
  name: 'Slide 7: Comparison Table',
};

export const ValueProposition = {
  render: () => <Slide8 />,
  name: 'Slide 8: Value Proposition',
};

export const CallToAction = {
  render: () => <Slide9 />,
  name: 'Slide 9: Call to Action',
};

export const AIMonitoring = {
  render: () => <Slide10 />,
  name: 'Slide 10: AI Agent Monitoring',
};

export const FullPresentation = {
  render: () => (
    <div className="space-y-8">
      <Slide1 />
      <div className="border-t border-gray-200" />
      <Slide2 />
      <div className="border-t border-gray-200" />
      <Slide3 />
      <div className="border-t border-gray-200" />
      <Slide4 />
      <div className="border-t border-gray-200" />
      <Slide5 />
      <div className="border-t border-gray-200" />
      <Slide6 />
      <div className="border-t border-gray-200" />
      <Slide7 />
      <div className="border-t border-gray-200" />
      <Slide8 />
      <div className="border-t border-gray-200" />
      <Slide9 />
      <div className="border-t border-gray-200" />
      <Slide10 />
    </div>
  ),
  name: 'Full Presentation',
};