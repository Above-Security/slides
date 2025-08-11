export default function StepsList({ steps }) {
  return (
    <div className="space-y-12">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-above-rose-100 to-above-rose-50 flex items-center justify-center text-lg font-bold text-slate-900">
              {step.number}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              {step.title}
            </h3>
            <p className="text-slate-600">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}