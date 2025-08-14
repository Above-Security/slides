import NudgeToast from '../../components/nudge/NudgeToast';

export default {
  title: 'Nudge/NudgeToast',
  component: NudgeToast,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    body: { control: 'text' },
    primary: { control: 'text' },
    secondary: { control: 'text' },
  },
};

export const Default = {
  args: {},
};

export const CustomContent = {
  args: {
    title: 'Security Alert',
    subtitle: 'Unusual activity detected',
    body: 'We noticed unusual login attempts from a new location',
    primary: 'Block Access',
    secondary: 'View Details',
  },
};

export const Warning = {
  args: {
    title: 'Action Required',
    subtitle: 'Password expiring soon',
    body: 'Your password will expire in 3 days',
    primary: 'Change Password',
    secondary: 'Remind Later',
  },
};

export const Success = {
  args: {
    title: 'Scan Complete',
    subtitle: 'All systems secure',
    body: 'No threats detected in the latest security scan',
    primary: 'View Report',
    secondary: 'Dismiss',
  },
};

export const LongContent = {
  args: {
    title: 'Comprehensive Security Analysis',
    subtitle: 'Multiple issues detected',
    body: 'Our advanced AI system has detected several potential security vulnerabilities that require your immediate attention to ensure continued protection',
    primary: 'Fix All Issues',
    secondary: 'Review One by One',
  },
};

export const MinimalToast = {
  args: {
    title: 'Quick Update',
    subtitle: 'New version available',
  },
};

export const MultipleToasts = {
  render: () => (
    <div className="space-y-4">
      <NudgeToast 
        title="First Alert"
        subtitle="High priority"
        primary="Action 1"
      />
      <NudgeToast 
        title="Second Alert"
        subtitle="Medium priority"
        primary="Action 2"
      />
      <NudgeToast 
        title="Third Alert"
        subtitle="Low priority"
        primary="Action 3"
      />
    </div>
  ),
};