"use client";
import { useState, useEffect } from "react";
import SEO from "../components/SEO";
import BrandLogo from "../components/ui/BrandLogo";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductDemo() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate iframe loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO 
        title="Product Demo - Above Security"
        description="See Above Security in action. Watch our comprehensive product demonstration showcasing real-time insider threat protection capabilities."
        canonicalUrl="https://abovesec.com/product-demo"
        keywords="product demo, Above Security demo, insider threat protection demo, security platform demonstration"
      />
      
      <div className="min-h-screen w-full overflow-hidden">
        {/* Static gradient background - matching homepage */}
        <div className="fixed inset-0 bg-gradient-to-br from-above-cream via-white to-above-white">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-above-rose-700/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-above-lavender-700/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-above-peach-700/15 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Navigation - matching homepage */}
        <nav className="relative z-10 px-6 py-6 md:px-12 md:py-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <BrandLogo size="medium" showText={true} showUnderline={true} />
            <div className="flex items-center gap-6 text-sm">
              <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">
                Home
              </Link>
              <Link href="/platform" className="text-slate-600 hover:text-slate-900 transition-colors">
                Platform
              </Link>
              <Link href="/features" className="text-slate-600 hover:text-slate-900 transition-colors">
                Features
              </Link>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="relative z-10 flex flex-col items-center px-6 md:px-12">
          <div className="max-w-5xl mx-auto w-full">
            {/* Header - minimalist like homepage */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                  See Above
                </span>
                <span className="text-above-rose-700">.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                Experience intelligent insider protection in action
              </p>
            </motion.div>

            {/* Video container - clean and minimal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-soft-sm mb-16"
              style={{ aspectRatio: '16 / 9' }}
            >
              {/* Loading state */}
              {isLoading && (
                <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-10">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                      <svg className="animate-spin h-10 w-10 text-above-rose-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                    <p className="text-slate-500 text-sm">Loading demonstration...</p>
                  </div>
                </div>
              )}
              
              {/* Video iframe */}
              <iframe
                src="https://drive.google.com/file/d/1qvDH0bVcrLj55O5U914vcG8zHvH8nirW/preview?hd=1&vq=hd1080&embedded=true&controls=1"
                allow="autoplay"
                allowFullScreen
                className="w-full h-full border-0"
                aria-label="Above Security Product Demonstration Video"
                title="Above Security Product Demo"
                onLoad={() => setIsLoading(false)}
              />
            </motion.div>

            {/* Simple navigation cards - minimal design */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
            >
              {/* Platform card */}
              <Link href="/platform" className="block">
                <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 p-8 transition-all duration-200 hover:shadow-soft-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-above-rose-700 mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Platform Overview</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Explore how Above protects your organization with real-time behavioral analytics and empathetic security.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Features card */}
              <Link href="/features" className="block">
                <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 p-8 transition-all duration-200 hover:shadow-soft-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-above-lavender-700 mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Key Features</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Discover intelligent nudges, OAuth monitoring, and comprehensive threat detection capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Key points - ultra minimal */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <div className="inline-flex flex-wrap justify-center gap-8 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-above-rose-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Real-time Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-above-lavender-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Intelligent Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-above-peach-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Behavioral Analytics</span>
                </div>
              </div>
            </motion.div>

            {/* CTA - matching homepage style */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="text-center mb-20"
            >
              <p className="text-sm text-slate-500 mb-6">Ready to protect what matters?</p>
              <Link href="/" className="inline-block px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl font-medium hover:from-slate-800 hover:to-slate-600 transition-all duration-200">
                Join Waitlist
              </Link>
            </motion.div>
          </div>
        </main>

        {/* Footer - matching homepage */}
        <footer className="relative z-10 px-6 py-6 md:px-12 text-center text-xs text-slate-500">
          <p>© 2025 Above Security. Protecting what matters.</p>
        </footer>
      </div>
    </>
  );
}