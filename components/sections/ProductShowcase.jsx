export default function ProductShowcase({ src, alt }) {
  return (
    <div className="w-full px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-above-blue-100 via-above-lavender-100 to-above-rose-100 rounded-2xl pt-12 overflow-hidden">
          <div className="bg-white/80 mx-8 px-4 pt-4 rounded-t-xl">
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