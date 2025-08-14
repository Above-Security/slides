import TimelineBox from '../../components/timeline/TimelineBox';
import { useMotionValue } from 'framer-motion';

export default {
  title: 'Timeline/TimelineBox',
  component: TimelineBox,
  parameters: {
    layout: 'padded',
  },
};

const MockScene = ({ title, time }) => (
  <div className="p-2 bg-white rounded border border-gray-200">
    <div className="text-sm font-medium">{title}</div>
    <div className="text-xs text-gray-500">{time}</div>
  </div>
);

const TimelineBoxWithProgress = ({ progressValue, ...props }) => {
  const progress = useMotionValue(progressValue);
  return <TimelineBox progress={progress} {...props} />;
};

export const Default = {
  render: () => (
    <TimelineBoxWithProgress 
      progressValue={0.5}
      label="Security Timeline"
      highlight="Active monitoring"
      scenes={[
        <MockScene key="1" title="Login detected" time="10:30 AM" />,
        <MockScene key="2" title="Access granted" time="10:31 AM" />,
        <MockScene key="3" title="Activity logged" time="10:32 AM" />,
      ]}
    />
  ),
};

export const NoProgress = {
  render: () => (
    <TimelineBoxWithProgress 
      progressValue={0}
      label="Pending Events"
      scenes={[
        <MockScene key="1" title="Scheduled scan" time="2:00 PM" />,
        <MockScene key="2" title="Report generation" time="3:00 PM" />,
      ]}
    />
  ),
};

export const FullProgress = {
  render: () => (
    <TimelineBoxWithProgress 
      progressValue={1}
      label="Completed Events"
      highlight="All tasks done"
      scenes={[
        <MockScene key="1" title="Scan complete" time="9:00 AM" />,
        <MockScene key="2" title="Threats mitigated" time="9:15 AM" />,
        <MockScene key="3" title="Report sent" time="9:30 AM" />,
      ]}
    />
  ),
};

export const SingleScene = {
  render: () => (
    <TimelineBoxWithProgress 
      progressValue={0.3}
      label="Current Activity"
      scenes={[
        <MockScene key="1" title="System monitoring" time="Now" />,
      ]}
    />
  ),
};

export const ManyScenes = {
  render: () => (
    <TimelineBoxWithProgress 
      progressValue={0.6}
      label="Today's Activity"
      highlight="6 events processed"
      scenes={[
        <MockScene key="1" title="System startup" time="8:00 AM" />,
        <MockScene key="2" title="User login" time="8:30 AM" />,
        <MockScene key="3" title="File accessed" time="9:15 AM" />,
        <MockScene key="4" title="API call" time="10:00 AM" />,
        <MockScene key="5" title="Data export" time="11:30 AM" />,
        <MockScene key="6" title="Logout" time="12:00 PM" />,
      ]}
    />
  ),
};