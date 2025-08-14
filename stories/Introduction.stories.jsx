export default {
  title: 'Introduction',
  parameters: {
    layout: 'centered',
    docs: {
      page: null,
    },
  },
};

export const Welcome = {
  render: () => (
    <div className="max-w-4xl mx-auto p-8 prose prose-lg">
      <h1>Above Security Design System</h1>
      
      <p>
        Welcome to the Above Security Design System Storybook! This comprehensive library showcases 
        all the components, patterns, and features that power the Above Security platform.
      </p>

      <h2>🎯 Purpose</h2>
      
      <p>This Storybook serves as:</p>
      <ul>
        <li><strong>Component Library</strong>: Browse and interact with all UI components</li>
        <li><strong>Documentation Hub</strong>: Learn how to use each component effectively</li>
        <li><strong>Testing Ground</strong>: Verify component behavior across different states</li>
        <li><strong>Design Reference</strong>: Ensure consistency across the platform</li>
      </ul>

      <h2>🏗️ Architecture</h2>
      
      <p>Our design system is organized into several key categories:</p>

      <h3>Slides</h3>
      <p>Presentation components used for showcasing Above Security features and capabilities.</p>

      <h3>UI Components</h3>
      <p>Core interface elements including buttons, forms, cards, and navigation components.</p>

      <h3>Primitives</h3>
      <p>Basic building blocks like panels, chrome elements, and visual effects.</p>

      <h3>Demos</h3>
      <p>Interactive demonstrations of key security features:</p>
      <ul>
        <li>Evidence Timeline</li>
        <li>Application Discovery</li>
        <li>Risk Dashboard</li>
        <li>Phishing Detection</li>
        <li>Nudge System</li>
      </ul>

      <h3>Sections</h3>
      <p>Full-width page sections for building complete layouts.</p>

      <h3>Timeline</h3>
      <p>Components for displaying chronological security events and activities.</p>

      <h2>🎨 Design Principles</h2>
      
      <ol>
        <li><strong>Security-First</strong>: Every component is designed with security in mind</li>
        <li><strong>Accessibility</strong>: All components meet WCAG 2.1 AA standards</li>
        <li><strong>Responsive</strong>: Mobile-first design that works on all devices</li>
        <li><strong>Performance</strong>: Optimized for speed and efficiency</li>
        <li><strong>Consistency</strong>: Unified visual language across all components</li>
      </ol>

      <h2>🚀 Getting Started</h2>

      <h3>Installation</h3>
      
      <pre className="bg-gray-100 p-4 rounded">
        <code>
{`npm install
npm run storybook`}
        </code>
      </pre>

      <h3>Using Components</h3>
      
      <p>Import components directly from their source:</p>
      
      <pre className="bg-gray-100 p-4 rounded">
        <code>
{`import Logo from '@/components/ui/Logo';
import GlassPanel from '@/components/primitives/GlassPanel';`}
        </code>
      </pre>

      <h3>Theming</h3>
      
      <p>
        Components support both light and dark themes. Use the theme switcher in the toolbar 
        to preview components in different modes.
      </p>

      <h2>📚 Resources</h2>
      
      <ul>
        <li>Component Guidelines</li>
        <li>Design Tokens</li>
        <li>Accessibility Guide</li>
        <li>Contributing</li>
      </ul>

      <h2>🤝 Contributing</h2>
      
      <p>We welcome contributions! Please see our contributing guide for details on:</p>
      <ul>
        <li>Component standards</li>
        <li>Documentation requirements</li>
        <li>Testing procedures</li>
        <li>Code review process</li>
      </ul>

      <h2>📝 License</h2>
      
      <p>© 2024 Above Security. All rights reserved.</p>
    </div>
  ),
};