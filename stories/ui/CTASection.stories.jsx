import CTASection from '../../components/ui/CTASection';

export default {
  title: 'UI/CTASection',
  component: CTASection,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    primaryButton: { control: 'object' },
    secondaryButton: { control: 'object' },
  },
};

export const Default = {
  args: {
    title: 'Ready to Get Started?',
    description: 'Join thousands of companies securing their applications',
    primaryButton: {
      text: 'Start Free Trial',
      href: '/signup',
    },
    secondaryButton: {
      text: 'Learn More',
      href: '/docs',
    },
  },
};

export const SingleButton = {
  args: {
    title: 'Transform Your Security',
    description: 'Experience the future of application protection',
    primaryButton: {
      text: 'Get Started Now',
      href: '/signup',
    },
  },
};

export const LongContent = {
  args: {
    title: 'Revolutionize Your Application Security with AI-Powered Protection',
    description: 'Our cutting-edge platform provides comprehensive security coverage, real-time threat detection, and automated response mechanisms to keep your applications safe from evolving cyber threats',
    primaryButton: {
      text: 'Start Your Journey',
      href: '/signup',
    },
    secondaryButton: {
      text: 'Schedule a Demo',
      href: '/demo',
    },
  },
};

export const MinimalCTA = {
  args: {
    title: 'Join Above',
    primaryButton: {
      text: 'Sign Up',
      href: '/signup',
    },
  },
};

export const WithCustomStyling = {
  render: () => (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8">
      <CTASection
        title="Special Offer"
        description="Limited time discount for new customers"
        primaryButton={{
          text: 'Claim Offer',
          href: '/offer',
        }}
      />
    </div>
  ),
};