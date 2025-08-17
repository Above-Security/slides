"use client";
import { motion } from "framer-motion";

// Component for underlined gradient text
function UnderlinedText({ children }) {
  return (
    <span className="relative inline-block">
      <span className="font-semibold text-slate-900">
        {children}
      </span>
      <span className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-above-rose-400 to-above-peach-400" />
    </span>
  );
}

export default function SlideTestimonials({ isPresenterMode, slideNumber }) {
  const testimonials = [
    {
      quote: (
        <>
          For truly harmful insider threats, proving and documenting malicious intent is too often a <UnderlinedText>backwards looking process</UnderlinedText> and a real challenge when the activity and data are in third party web applications. You don&apos;t want to be sifting through logs, you want <UnderlinedText>timely notification and evidence</UnderlinedText> to be able to hand to your HR and Legal investigative partners.
        </>
      ),
      author: "Carl Erickson",
      title: "Former CISO, Johnson Controls",
      delay: 0.3
    },
    {
      quote: (
        <>
          The greatest insider risks don&apos;t happen at the perimeter—they happen <UnderlinedText>after login</UnderlinedText>. The market urgently needs solutions that illuminate <UnderlinedText>post-authentication blind spots</UnderlinedText>, where trust is assumed but visibility is lost.
        </>
      ),
      author: "Jane Schalk",
      title: "Advisory CISO, Trace3",
      delay: 0.5
    },
    {
      quote: (
        <>
          Insider risk is hard to measure and get right. Above is solving that by providing <UnderlinedText>visibility into post authentication</UnderlinedText> behaviours, showing <UnderlinedText>user intent</UnderlinedText> and helping CISOs gather evidence on user actions.
        </>
      ),
      author: "Israel Bryski",
      title: "CISO, MIO Partners",
      delay: 0.7
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {!isPresenterMode && (
        <div className="absolute top-8 right-8 text-xs text-slate-400">
          {slideNumber}/13
        </div>
      )}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
          Industry Validation
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          CISOs Know the Truth
        </h1>
      </motion.div>

      {/* Testimonials Container with grainy gradient */}
      <div className="relative rounded-2xl overflow-hidden">
        {/* Grainy gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #D4E9FF 0%, #E8D9FF 25%, #FFE0EC 50%, #FFD4C9 75%, #D4E9FF 100%)',
          }}
        />
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            mixBlendMode: 'overlay',
            filter: 'contrast(170%) brightness(1000%)',
          }}
        />
        
        {/* Testimonials Grid */}
        <div className="relative p-8">
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: testimonial.delay }}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Quote Icon */}
                <div className="mb-3">
                  <svg 
                    className="w-8 h-8 text-above-rose-400/50" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                {/* Quote Text */}
                <div className="text-sm text-slate-700 leading-relaxed mb-4">
                  {testimonial.quote}
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-above-rose-400 to-above-peach-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-slate-600">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="text-center mt-6"
      >
        <div className="inline-block bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 border border-slate-200">
          <p className="text-sm font-semibold text-slate-900">
            Security leaders recognize the critical gap Above fills
          </p>
        </div>
      </motion.div>
    </div>
  );
}