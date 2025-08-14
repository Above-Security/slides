import SectionHeader from '../../components/ui/SectionHeader';

export default {
  title: 'UI/SectionHeader',
  component: SectionHeader,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    label: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export const Default = {
  args: {
    title: 'Section Title',
    description: 'This is a description that provides additional context',
  },
};

export const WithLabel = {
  args: {
    label: 'Features',
    title: 'Everything You Need',
    description: 'Comprehensive security features in one platform',
  },
};

export const TitleOnly = {
  args: {
    title: 'Simple Title',
  },
};

export const Complete = {
  args: {
    label: 'Security',
    title: 'Advanced Protection',
    description: 'State-of-the-art security measures to keep your applications safe',
  },
};

export const LongContent = {
  args: {
    label: 'Platform',
    title: 'This is a Very Long Section Title That Should Wrap Properly on Smaller Screens',
    description: 'And this description contains even more text to explain the purpose of this section in great detail, ensuring that readers understand exactly what content follows below',
  },
};

export const WithEmoji = {
  args: {
    label: '🎯 Goal',
    title: '🚀 Launch Your Security',
    description: '🛡️ Protect your applications with advanced AI-powered security',
  },
};

export const NoDescription = {
  args: {
    label: 'About',
    title: 'Our Mission',
  },
};