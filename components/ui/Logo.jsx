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
        small: "w-4 h-4",
        medium: "w-6 h-6",
        large: "w-8 h-8",
        xlarge: "w-10 h-10"
    };

    const logoSize = sizeClasses[size] || sizeClasses.large;

    return (
        <Link 
            href={href}
            className={`inline-flex items-center gap-3 group transition-all duration-300 ${className}`}
        >
            <div className={`relative ${logoSize} transition-all duration-200 ease-out group-hover:scale-105`}>
                <div className="absolute inset-0 bg-gradient-to-br from-above-rose-400/10 to-above-lavender-400/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-200" />
                <Image
                    src="/logo-black.svg"
                    alt="Above Security Logo"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain relative z-10 drop-shadow-md group-hover:drop-shadow-lg transition-all duration-200"
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