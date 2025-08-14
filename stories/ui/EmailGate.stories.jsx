import EmailGate from '../../components/ui/EmailGate';

export default {
  title: 'UI/EmailGate',
  component: EmailGate,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    buttonText: { control: 'text' },
    placeholder: { control: 'text' },
    onSubmit: { action: 'submitted' },
  },
};

export const Default = {
  args: {
    onSubmit: (email) => console.log('Email submitted:', email),
  },
};

export const CustomContent = {
  args: {
    title: 'Get Early Access',
    description: 'Be the first to try our new features',
    buttonText: 'Join Waitlist',
    placeholder: 'your@email.com',
    onSubmit: (email) => console.log('Email submitted:', email),
  },
};

export const Newsletter = {
  args: {
    title: 'Subscribe to Our Newsletter',
    description: 'Get weekly security insights and updates',
    buttonText: 'Subscribe',
    placeholder: 'Enter your email address',
    onSubmit: (email) => console.log('Newsletter subscription:', email),
  },
};

export const Demo = {
  args: {
    title: 'Request a Demo',
    description: 'See Above Security in action',
    buttonText: 'Get Demo',
    placeholder: 'Work email address',
    onSubmit: (email) => console.log('Demo request:', email),
  },
};

export const Minimal = {
  args: {
    buttonText: 'Submit',
    onSubmit: (email) => console.log('Email:', email),
  },
};

export const WithValidation = {
  args: {
    title: 'Join the Beta',
    description: 'Limited spots available',
    onSubmit: (email) => {
      if (!email.includes('@')) {
        alert('Please enter a valid email');
        return false;
      }
      console.log('Valid email:', email);
      return true;
    },
  },
};