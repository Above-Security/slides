"use client";
import { useState, useEffect } from "react";
import SEO from "../components/SEO";
import BrandLogo from "../components/ui/BrandLogo";
import { motion, AnimatePresence } from "framer-motion";
import { usePostHog } from "../hooks/usePostHog";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { identify, capture } = usePostHog();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // PostHog tracking
    identify(email, {
      email: email,
      waitlist_signup_date: new Date().toISOString(),
      source: 'homepage_waitlist'
    });
    
    capture('waitlist_signup', {
      email: email,
      page: 'homepage'
    });
    
    // Here you would normally send to your backend
    console.log("Waitlist submission:", email);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
  };

  return (
    <>
      <SEO 
        title="Above Security - Insider Protection"
        description="The future of insider threat protection. Protect your organization and your people with empathetic, intelligent security."
        canonicalUrl="https://above.security"
        keywords="insider protection, security, threat detection, enterprise security, data protection"
      />
      
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Static gradient background */}
        <div className="fixed inset-0 bg-gradient-to-br from-above-cream via-white to-above-white">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-96 h-96 bg-above-rose-700/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-above-lavender-700/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-above-peach-700/15 rounded-full blur-3xl" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 px-6 py-6 md:px-12 md:py-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <BrandLogo size="medium" showText={true} showUnderline={true} />
            <a 
              href="/platform" 
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              Platform →
            </a>
          </div>
        </nav>

        {/* Main content */}
        <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8"
            >
              <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                Insider Protection
              </span>
              <span className="text-above-rose-700">.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed"
            >
              Protect your organization and your people. 
              <span className="block mt-2 text-slate-500">
                Security that understands intent, not just actions.
              </span>
            </motion.p>

            {/* Waitlist form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="max-w-md mx-auto"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="relative"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="relative">
                      <div className="relative flex items-center bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-soft-sm">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your work email"
                          className="flex-1 px-6 py-4 bg-transparent outline-none text-slate-800 placeholder-slate-400"
                          disabled={isSubmitting}
                          required
                        />
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-3 mr-2 bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl font-medium hover:from-slate-800 hover:to-slate-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Joining...
                            </span>
                          ) : (
                            "Join Waitlist"
                          )}
                        </button>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-4 text-center">
                      Early access for forward-thinking security teams
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center py-8"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-above-rose-200 to-above-lavender-200 rounded-full mb-4">
                      <svg className="w-8 h-8 text-above-rose-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">You're on the list</h3>
                    <p className="text-slate-600">We'll be in touch soon with early access.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 px-6 py-6 md:px-12 text-center text-xs text-slate-500">
          <p>© 2025 Above Security. Protecting what matters.</p>
        </footer>
      </div>
    </>
  );
}