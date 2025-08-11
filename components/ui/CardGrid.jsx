export default function CardGrid({ cards, columns = 3 }) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns] || 'md:grid-cols-3'} gap-8`}>
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-soft transition-shadow">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            {card.title}
          </h3>
          <p className="text-sm text-slate-600 mb-4">
            {card.description}
          </p>
          {card.items && (
            <div className="space-y-2">
              {card.items.map((item, j) => (
                <div key={j} className="flex items-center gap-2 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}