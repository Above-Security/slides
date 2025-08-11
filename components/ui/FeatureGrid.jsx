export default function ThreeColumnGrid({ items }) {
  return (
    <section className="px-6 pb-32">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              {item.title}
            </h3>
            <p className="text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}