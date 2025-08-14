import Connector from '../../components/timeline/Connector';
import { useMotionValue } from 'framer-motion';

export default {
  title: 'Timeline/Connector',
  component: Connector,
  parameters: {
    layout: 'centered',
  },
};

const ConnectorWithProgress = ({ progressValue }) => {
  const progress = useMotionValue(progressValue);
  return <Connector progress={progress} />;
};

export const Default = {
  render: () => <ConnectorWithProgress progressValue={0.5} />,
};

export const NoProgress = {
  render: () => <ConnectorWithProgress progressValue={0} />,
};

export const QuarterProgress = {
  render: () => <ConnectorWithProgress progressValue={0.25} />,
};

export const HalfProgress = {
  render: () => <ConnectorWithProgress progressValue={0.5} />,
};

export const ThreeQuarterProgress = {
  render: () => <ConnectorWithProgress progressValue={0.75} />,
};

export const FullProgress = {
  render: () => <ConnectorWithProgress progressValue={1} />,
};

export const TimelineContext = {
  render: () => (
    <div className="flex flex-col items-center space-y-4">
      <div className="p-4 bg-blue-100 rounded">Event 1</div>
      <ConnectorWithProgress progressValue={1} />
      <div className="p-4 bg-blue-100 rounded">Event 2</div>
      <ConnectorWithProgress progressValue={0.5} />
      <div className="p-4 bg-gray-100 rounded">Event 3 (in progress)</div>
      <ConnectorWithProgress progressValue={0} />
      <div className="p-4 bg-gray-50 rounded">Event 4 (pending)</div>
    </div>
  ),
  name: 'Timeline Context Example',
};