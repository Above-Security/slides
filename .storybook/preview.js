import '../styles/globals.css';

/** @type { import('@storybook/nextjs-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1a1a1a',
        },
        {
          name: 'above-gradient',
          value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
      ],
    },
    docs: {
      theme: {
        base: 'light',
        brandTitle: 'Above Security Design System',
        brandUrl: 'https://abovesec.com',
        // Fix for color function error - provide all required theme colors
        colorPrimary: '#FFB5CA',
        colorSecondary: '#B0D5FF',
        
        // UI colors
        appBg: '#FFFAF8',
        appContentBg: '#FFFFFF',
        appPreviewBg: '#FFFFFF',
        appBorderColor: '#E0E0E0',
        appBorderRadius: 4,
        
        // Typography
        fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        fontCode: 'monospace',
        
        // Text colors
        textColor: '#1A1A1A',
        textInverseColor: '#FFFFFF',
        textMutedColor: '#6B7280',
        
        // Toolbar default and active colors
        barTextColor: '#6B7280',
        barHoverColor: '#FFB5CA',
        barSelectedColor: '#FFB5CA',
        barBg: '#FFFFFF',
        
        // Form colors
        inputBg: '#FFFFFF',
        inputBorder: '#E0E0E0',
        inputTextColor: '#1A1A1A',
        inputBorderRadius: 4,
      },
    },
    layout: 'padded',
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
        showName: true,
      },
    },
  },
};

export default preview;