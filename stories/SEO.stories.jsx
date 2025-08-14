import SEO from '../components/SEO';

export default {
  title: 'Components/SEO',
  component: SEO,
  parameters: {
    docs: {
      description: {
        component: 'SEO component for managing page metadata and Open Graph tags. Note: This component renders to <head> so visual changes won\'t be visible in the preview.',
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    ogTitle: { control: 'text' },
    ogDescription: { control: 'text' },
    ogImage: { control: 'text' },
    ogType: {
      control: { type: 'select' },
      options: ['website', 'article', 'product', 'profile'],
    },
    canonicalUrl: { control: 'text' },
    keywords: { control: 'text' },
    pageType: {
      control: { type: 'select' },
      options: ['website', 'article', 'product'],
    },
    article: { control: 'object' },
    breadcrumbs: { control: 'object' },
  },
};

export const Default = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default SEO configuration with standard Above Security metadata',
      },
    },
  },
};

export const CustomPage = {
  args: {
    title: 'Features - Above Security',
    description: 'Explore the comprehensive security features of Above Security platform',
    keywords: 'security features, AI protection, threat detection',
  },
};

export const ArticlePage = {
  args: {
    title: 'Understanding Zero-Day Threats',
    description: 'Learn how AI can protect against zero-day vulnerabilities and unknown threats',
    ogType: 'article',
    pageType: 'article',
    article: {
      publishedTime: '2024-01-15',
      modifiedTime: '2024-01-16',
      author: 'Security Team',
      section: 'Blog',
    },
  },
};

export const ProductPage = {
  args: {
    title: 'Security Dashboard - Real-time Monitoring',
    description: 'Monitor your application security in real-time with our advanced dashboard',
    ogType: 'product',
    pageType: 'product',
    ogImage: '/images/dashboard-preview.png',
  },
};

export const WithBreadcrumbs = {
  args: {
    title: 'API Security',
    description: 'Protect your APIs with Above Security',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Features', url: '/features' },
      { name: 'API Security', url: '/features/api-security' },
    ],
  },
};

export const CompleteMetadata = {
  args: {
    title: 'Above Security - Enterprise Security Platform',
    description: 'Comprehensive security solution for modern enterprises. AI-powered threat detection, real-time monitoring, and automated response.',
    ogTitle: 'Above Security Platform',
    ogDescription: 'Enterprise-grade security with AI-powered protection',
    ogImage: 'https://abovesec.com/og-image.png',
    ogType: 'website',
    canonicalUrl: 'https://abovesec.com',
    keywords: 'security, AI, enterprise, threat detection, monitoring, compliance',
    pageType: 'website',
  },
};