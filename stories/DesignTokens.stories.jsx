export default {
  title: 'Design Tokens',
  parameters: {
    layout: 'centered',
    docs: {
      page: null,
    },
  },
};

const ColorSwatch = ({ color, name, description }) => (
  <div className="flex items-center gap-3 mb-2">
    <div 
      className="w-12 h-12 rounded-lg border border-gray-200 shadow-sm"
      style={{ backgroundColor: color }}
    />
    <div>
      <div className="font-medium text-sm">{name}</div>
      <div className="text-xs text-gray-500">{color}</div>
      {description && <div className="text-xs text-gray-600">{description}</div>}
    </div>
  </div>
);

export const Overview = {
  render: () => (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Above Design System</h1>
      
      <p className="text-lg text-gray-600 mb-8">
        Design tokens for Above's empathetic security approach — soft, approachable colors 
        that build trust while maintaining professionalism.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Rose — Empathy & Protection</h2>
          <ColorSwatch color="#FFF5F8" name="Rose 50" description="Lightest" />
          <ColorSwatch color="#FFE8F0" name="Rose 100" />
          <ColorSwatch color="#FFE0EC" name="Rose 200" />
          <ColorSwatch color="#FFD1E3" name="Rose 300" />
          <ColorSwatch color="#FFC4D6" name="Rose 400" />
          <ColorSwatch color="#FFB5CA" name="Rose 500" description="Base" />
          <ColorSwatch color="#FF9FB5" name="Rose 600" />
          <ColorSwatch color="#FF89A1" name="Rose 700" />
          <ColorSwatch color="#FF738C" name="Rose 800" />
          <ColorSwatch color="#FF5D78" name="Rose 900" description="Darkest" />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Peach — Warmth & Trust</h2>
          <ColorSwatch color="#FFF8F5" name="Peach 50" description="Lightest" />
          <ColorSwatch color="#FFEEE8" name="Peach 100" />
          <ColorSwatch color="#FFE0D4" name="Peach 200" />
          <ColorSwatch color="#FFD4C4" name="Peach 300" />
          <ColorSwatch color="#FFC8B3" name="Peach 400" />
          <ColorSwatch color="#FFBAA0" name="Peach 500" description="Base" />
          <ColorSwatch color="#FFAB8D" name="Peach 600" />
          <ColorSwatch color="#FF9C7A" name="Peach 700" />
          <ColorSwatch color="#FF8D67" name="Peach 800" />
          <ColorSwatch color="#FF7E54" name="Peach 900" description="Darkest" />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Blue — Technology & Clarity</h2>
          <ColorSwatch color="#F8FBFF" name="Blue 50" description="Lightest" />
          <ColorSwatch color="#F0F7FF" name="Blue 100" />
          <ColorSwatch color="#E6F3FF" name="Blue 200" />
          <ColorSwatch color="#D4E9FF" name="Blue 300" />
          <ColorSwatch color="#C2DFFF" name="Blue 400" />
          <ColorSwatch color="#B0D5FF" name="Blue 500" description="Base" />
          <ColorSwatch color="#9ECBFF" name="Blue 600" />
          <ColorSwatch color="#8CC1FF" name="Blue 700" />
          <ColorSwatch color="#7AB7FF" name="Blue 800" />
          <ColorSwatch color="#68ADFF" name="Blue 900" description="Darkest" />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Lavender — Innovation & Insight</h2>
          <ColorSwatch color="#FAF8FF" name="Lavender 50" description="Lightest" />
          <ColorSwatch color="#F5F0FF" name="Lavender 100" />
          <ColorSwatch color="#F0E6FF" name="Lavender 200" />
          <ColorSwatch color="#E8D9FF" name="Lavender 300" />
          <ColorSwatch color="#E0D4FF" name="Lavender 400" />
          <ColorSwatch color="#D8C9FF" name="Lavender 500" description="Base" />
          <ColorSwatch color="#D0BEFF" name="Lavender 600" />
          <ColorSwatch color="#C8B3FF" name="Lavender 700" />
          <ColorSwatch color="#C0A8FF" name="Lavender 800" />
          <ColorSwatch color="#B89DFF" name="Lavender 900" description="Darkest" />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Neutral Base Colors</h2>
          <ColorSwatch color="#FFFAF8" name="Cream" description="Soft background" />
          <ColorSwatch color="#FFF5F0" name="Above White" description="Warm white" />
          <ColorSwatch color="#FFFFFF" name="Pure White" description="UI backgrounds" />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Legacy Brand Colors</h2>
          <ColorSwatch color="#f5f7ff" name="Brand 50" />
          <ColorSwatch color="#eef1ff" name="Brand 100" />
          <ColorSwatch color="#dfe4ff" name="Brand 200" />
          <ColorSwatch color="#c9d1ff" name="Brand 300" />
          <ColorSwatch color="#a7b2ff" name="Brand 400" />
          <ColorSwatch color="#8a95ff" name="Brand 500" description="Legacy base" />
          <ColorSwatch color="#6c78f7" name="Brand 600" />
          <ColorSwatch color="#515cda" name="Brand 700" />
          <ColorSwatch color="#3842b1" name="Brand 800" />
          <ColorSwatch color="#2e378f" name="Brand 900" />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Typography</h2>
          
          <h3 className="font-medium mb-2">Font Families</h3>
          <ul className="text-sm space-y-1 mb-4">
            <li><strong>Sans:</strong> Inter, system-ui, -apple-system, sans-serif</li>
            <li><strong>Mono:</strong> 'Fira Code', 'Monaco', monospace</li>
          </ul>

          <h3 className="font-medium mb-2">Font Sizes</h3>
          <div className="space-y-1 text-sm">
            <div>xs: 0.75rem (12px)</div>
            <div>sm: 0.875rem (14px)</div>
            <div>base: 1rem (16px)</div>
            <div>lg: 1.125rem (18px)</div>
            <div>xl: 1.25rem (20px)</div>
            <div>2xl: 1.5rem (24px)</div>
            <div>3xl: 1.875rem (30px)</div>
            <div>4xl: 2.25rem (36px)</div>
            <div>5xl: 3rem (48px)</div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Spacing Scale</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'space-0', value: '0' },
            { name: 'space-1', value: '0.25rem (4px)' },
            { name: 'space-2', value: '0.5rem (8px)' },
            { name: 'space-3', value: '0.75rem (12px)' },
            { name: 'space-4', value: '1rem (16px)' },
            { name: 'space-5', value: '1.25rem (20px)' },
            { name: 'space-6', value: '1.5rem (24px)' },
            { name: 'space-8', value: '2rem (32px)' },
            { name: 'space-10', value: '2.5rem (40px)' },
            { name: 'space-12', value: '3rem (48px)' },
            { name: 'space-16', value: '4rem (64px)' },
            { name: 'space-20', value: '5rem (80px)' },
          ].map(({ name, value }) => (
            <div key={name} className="text-sm">
              <div className="font-medium">{name}</div>
              <div className="text-gray-500">{value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Border Radius</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'radius-none', value: '0' },
            { name: 'radius-sm', value: '0.125rem (2px)' },
            { name: 'radius-base', value: '0.25rem (4px)' },
            { name: 'radius-md', value: '0.375rem (6px)' },
            { name: 'radius-lg', value: '0.5rem (8px)' },
            { name: 'radius-xl', value: '0.75rem (12px)' },
            { name: 'radius-2xl', value: '1rem (16px)' },
            { name: 'radius-3xl', value: '1.5rem (24px)' },
            { name: 'radius-full', value: '9999px' },
          ].map(({ name, value }) => (
            <div key={name} className="text-sm">
              <div className="font-medium">{name}</div>
              <div className="text-gray-500">{value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Soft Shadows</h2>
        <div className="space-y-4">
          {[
            { name: 'soft-sm', value: '0 4px 15px -8px rgba(2,6,23,0.15)', description: 'Small elements' },
            { name: 'soft', value: '0 12px 45px -20px rgba(2,6,23,0.25)', description: 'Default shadow' },
            { name: 'soft-lg', value: '0 20px 60px -30px rgba(2,6,23,0.30)', description: 'Large cards' },
            { name: 'soft-xl', value: '0 30px 80px -40px rgba(2,6,23,0.35)', description: 'Modals' },
            { name: 'soft-rose', value: '0 12px 45px -20px rgba(255, 197, 214, 0.45)', description: 'Rose accent' },
            { name: 'soft-peach', value: '0 12px 45px -20px rgba(255, 186, 160, 0.45)', description: 'Peach accent' },
            { name: 'soft-blue', value: '0 12px 45px -20px rgba(212, 233, 255, 0.45)', description: 'Blue accent' },
            { name: 'soft-lavender', value: '0 12px 45px -20px rgba(224, 212, 255, 0.45)', description: 'Lavender accent' },
          ].map(({ name, value, description }) => (
            <div key={name} className="flex items-center gap-4">
              <div 
                className="w-24 h-12 bg-white rounded-lg"
                style={{ boxShadow: value }}
              />
              <div className="text-sm">
                <div className="font-medium">{name}</div>
                <div className="text-gray-600 text-xs">{description}</div>
                <div className="text-gray-500 text-xs font-mono">{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Gradients</h2>
        <div className="space-y-4">
          {[
            { 
              name: 'above-gradient', 
              value: 'radial-gradient(ellipse at top left, rgba(255, 224, 236, 0.6), transparent 50%), radial-gradient(ellipse at bottom right, rgba(212, 233, 255, 0.5), transparent 50%), radial-gradient(circle at center, rgba(255, 212, 196, 0.4), transparent 60%), linear-gradient(135deg, #FFFAF8 0%, #FFF5F0 100%)',
              description: 'Main brand gradient'
            },
            { 
              name: 'above-gradient-subtle', 
              value: 'radial-gradient(ellipse at top left, rgba(255, 224, 236, 0.3), transparent 50%), radial-gradient(ellipse at bottom right, rgba(212, 233, 255, 0.25), transparent 50%), radial-gradient(circle at center, rgba(255, 212, 196, 0.2), transparent 60%), linear-gradient(135deg, #FFFAF8 0%, #FFF5F0 100%)',
              description: 'Subtle variant'
            },
            { 
              name: 'above-gradient-light', 
              value: 'radial-gradient(ellipse at top left, rgba(255, 224, 236, 0.15), transparent 50%), radial-gradient(ellipse at bottom right, rgba(212, 233, 255, 0.12), transparent 50%), radial-gradient(circle at center, rgba(255, 212, 196, 0.1), transparent 60%), linear-gradient(135deg, #FFFFFF 0%, #FFFAF8 100%)',
              description: 'Light variant'
            },
          ].map(({ name, value, description }) => (
            <div key={name} className="mb-4">
              <div 
                className="w-full h-24 rounded-lg border border-gray-200"
                style={{ background: value }}
              />
              <div className="mt-2 text-sm">
                <div className="font-medium">{name}</div>
                <div className="text-gray-600">{description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Animations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-gradient-to-r from-above-rose-400 to-above-blue-400 rounded-lg animate-gradient-shift mb-2"></div>
            <div className="text-sm font-medium">gradient-shift</div>
            <div className="text-xs text-gray-500">20s ease infinite</div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-above-peach-400 rounded-lg animate-float mb-2"></div>
            <div className="text-sm font-medium">float</div>
            <div className="text-xs text-gray-500">6s ease-in-out infinite</div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="w-12 h-12 bg-above-lavender-400 rounded-lg animate-pulse-soft mb-2"></div>
            <div className="text-sm font-medium">pulse-soft</div>
            <div className="text-xs text-gray-500">3s ease-in-out infinite</div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Breakpoints</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: 'sm', value: '640px' },
            { name: 'md', value: '768px' },
            { name: 'lg', value: '1024px' },
            { name: 'xl', value: '1280px' },
            { name: '2xl', value: '1536px' },
          ].map(({ name, value }) => (
            <div key={name} className="text-sm">
              <div className="font-medium">screen-{name}</div>
              <div className="text-gray-500">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};