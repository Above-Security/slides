"use client";

import Link from "next/link";

export default function Logo({ 
    size = "large", 
    className = "", 
    href = "/",
    showText = false 
}) {
    // Define actual pixel sizes for each size variant
    const sizes = {
        tiny: 36,
        small: 44,
        medium: 52,
        large: 60,
        xlarge: 72
    };

    const pixelSize = sizes[size] || sizes.large;

    return (
        <Link 
            href={href}
            className={`inline-flex items-center gap-3 group transition-all duration-300 ${className}`}
        >
            <div 
                className="relative transition-all duration-200 ease-out group-hover:scale-105"
                style={{ width: `${pixelSize}px`, height: `${pixelSize}px` }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-above-rose-400/10 to-above-lavender-400/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-200" />
                <img
                    src="/logo-black.svg"
                    alt="Above Security Logo"
                    className="w-full h-full object-contain relative z-10 drop-shadow-md group-hover:drop-shadow-lg transition-all duration-200"
                />
            </div>
            {showText && (
                <span className="text-2xl font-bold bg-gradient-to-r from-above-rose-500 to-above-lavender-500 bg-clip-text text-transparent group-hover:from-above-rose-600 group-hover:to-above-lavender-600 transition-all duration-300">
                    Above Security
                </span>
            )}
        </Link>
    );
}