"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo({ 
    size = "large", 
    className = "", 
    href = "/",
    showText = false 
}) {
    const sizeClasses = {
        small: "w-10 h-10",
        medium: "w-16 h-16",
        large: "w-24 h-24",
        xlarge: "w-32 h-32"
    };

    const logoSize = sizeClasses[size] || sizeClasses.large;

    return (
        <Link 
            href={href}
            className={`inline-flex items-center gap-3 group transition-all duration-300 ${className}`}
        >
            <div className={`relative ${logoSize} transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3`}>
                <div className="absolute inset-0 bg-gradient-to-br from-above-rose-400/20 to-above-lavender-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                    src="/logo.png"
                    alt="Above Security Logo"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain relative z-10 drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                    priority
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