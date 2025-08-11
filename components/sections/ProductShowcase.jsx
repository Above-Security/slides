export default function ProductShowcase({ src, alt }) {
  return (
    <div className="w-full px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl pt-12 overflow-hidden relative">
          {/* Grainy gradient background */}
          <div 
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, #D4E9FF 0%, #E8D9FF 25%, #FFE0EC 50%, #FFD4C9 75%, #D4E9FF 100%)',
            }}
          />
          <div 
            className="absolute inset-0 rounded-2xl opacity-60"
            style={{
              background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              mixBlendMode: 'overlay',
              filter: 'contrast(170%) brightness(1000%)',
            }}
          />
          
          <div className="bg-white/80 mx-8 px-4 pt-4 rounded-t-xl relative z-10">
            <div className="relative rounded-t-lg border-white-200 overflow-hidden">
              <img
                src={src}
                alt={alt}
                className="w-full h-auto block"
              />
              {/* Subtle fade overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/100 via-white/70 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}