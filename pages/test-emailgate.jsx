import SEO from '../components/SEO';
import EmailGate from '../components/ui/EmailGate';

export default function TestEmailGate() {
  return (
    <>
      <SEO 
        title="Email Gate Demo - Above Security"
        description="Test the Above Security email gate component - experience our premium content access system with elegant design and smooth user experience."
        canonicalUrl="https://abovesec.com/test-emailgate"
        keywords="email gate demo, content access, Above Security demo"
      />
    <EmailGate 
      title="Access Above Insider Protection Slides"
      subtitle="Get exclusive access to our latest security insights and protection strategies designed for modern businesses."
    >
      <div className="min-h-screen bg-above-gradient p-8">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-white/80 rounded-3xl shadow-soft-xl border border-white/40 p-8 mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">🎉 Access Granted!</h1>
            <p className="text-xl text-slate-700 mb-8">
              Welcome to our exclusive insider content. Here you would see the protected slides and materials.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-above-rose-50 to-above-peach-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Security Framework</h3>
                <p className="text-slate-600">Advanced protection strategies for your business infrastructure.</p>
              </div>
              
              <div className="bg-gradient-to-br from-above-blue-50 to-above-lavender-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Threat Intelligence</h3>
                <p className="text-slate-600">Latest insights on emerging security threats and countermeasures.</p>
              </div>
              
              <div className="bg-gradient-to-br from-above-peach-50 to-above-rose-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Implementation Guide</h3>
                <p className="text-slate-600">Step-by-step guide to implement Above's security solutions.</p>
              </div>
              
              <div className="bg-gradient-to-br from-above-lavender-50 to-above-blue-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Best Practices</h3>
                <p className="text-slate-600">Industry-leading security practices and recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EmailGate>
    </>
  );
}