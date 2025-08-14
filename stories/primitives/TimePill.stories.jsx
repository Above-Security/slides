import TimePill from '../../components/primitives/TimePill';

export default {
  title: 'Primitives/TimePill',
  component: TimePill,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export const Default = {
  args: {
    children: '2:30 PM',
  },
};

export const JustNow = {
  args: {
    children: 'Just now',
  },
};

export const TimeAgo = {
  args: {
    children: '5 min ago',
  },
};

export const DateFormat = {
  args: {
    children: 'Dec 25, 2024',
  },
};

export const ShortText = {
  args: {
    children: 'Now',
  },
};

export const LongText = {
  args: {
    children: 'December 25, 2024 at 3:45:22 PM',
  },
};

export const MultiplePills = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <TimePill>9:00 AM</TimePill>
      <TimePill>10:30 AM</TimePill>
      <TimePill>12:00 PM</TimePill>
      <TimePill>2:15 PM</TimePill>
      <TimePill>4:30 PM</TimePill>
    </div>
  ),
};

export const DifferentFormats = {
  render: () => (
    <div className="flex flex-col gap-2">
      <TimePill>Just now</TimePill>
      <TimePill>2 min ago</TimePill>
      <TimePill>Today 3:30 PM</TimePill>
      <TimePill>Yesterday</TimePill>
      <TimePill>Dec 25, 2024</TimePill>
      <TimePill>Q4 2024</TimePill>
    </div>
  ),
};