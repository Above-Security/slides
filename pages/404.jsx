import SEO from '../components/SEO';
import BrandLogo from '../components/ui/BrandLogo';

export default function Custom404() {
  return (
    <>
      <SEO 
        title="Page Not Found - Above Security"
        description="The page you're looking for doesn't exist. Return to Above Security's homepage to explore our insider threat protection solutions."
        canonicalUrl="https://abovesec.com/404"
        keywords="404, page not found, Above Security"
      />
      <div className="min-h-screen flex items-center justify-center bg-above-gradient px-6">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <BrandLogo size="small" showText={true} showUnderline={false} layout="vertical" />
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-slate-700 mb-4">Page Not Found</h2>
            <p className="text-slate-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <div className="space-x-4">
            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
            >
              Go Home
            </a>
            <a 
              href="/features" 
              className="inline-flex items-center px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              View Features
            </a>
          </div>
        </div>
      </div>
    </>
  );
}