import HeroHeader from '../../components/sections/HeroHeader';

export default {
  title: 'Sections/HeroHeader',
  component: HeroHeader,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    badge: { control: 'text' },
    headline: { control: 'text' },
    subheadline: { control: 'text' },
    ctaText: { control: 'text' },
    ctaHref: { control: 'text' },
  },
};

export const Default = {
  args: {
    headline: 'Welcome to Above Security',
    subheadline: 'Advanced protection for modern applications',
  },
};

export const WithBadge = {
  args: {
    badge: 'New Release',
    headline: 'Introducing Above Security 2.0',
    subheadline: 'The next generation of application protection',
    ctaText: 'Get Started',
    ctaHref: '/signup',
  },
};

export const WithCTA = {
  args: {
    headline: 'Secure Your Applications',
    subheadline: 'Enterprise-grade security made simple',
    ctaText: 'Start Free Trial',
    ctaHref: '/trial',
  },
};

export const Complete = {
  args: {
    badge: 'Limited Time Offer',
    headline: 'Transform Your Security Today',
    subheadline: 'Join thousands of companies protecting their applications with AI-powered security',
    ctaText: 'Request Demo',
    ctaHref: '/demo',
  },
};

export const Minimal = {
  args: {
    headline: 'Above Security',
  },
};