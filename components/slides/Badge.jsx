"use client";

export default function Badge({ children, variant = "default", size = "medium" }) {
  const variants = {
    default: "bg-slate-100 text-slate-700 border-slate-200",
    primary: "bg-above-rose-100 text-above-rose-800 border-above-rose-200",
    secondary: "bg-above-lavender-100 text-above-lavender-800 border-above-lavender-200",
    accent: "bg-above-peach-100 text-above-peach-800 border-above-peach-200",
    success: "bg-green-100 text-green-800 border-green-200",
    warning: "bg-amber-100 text-amber-800 border-amber-200",
  };

  const sizes = {
    small: "text-xs px-2 py-1",
    medium: "text-sm px-3 py-1.5",
    large: "text-base px-4 py-2"
  };

  return (
    <span className={`inline-flex items-center rounded-full border font-medium ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  );
}