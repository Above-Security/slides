"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BrandLogo({ 
    size = "medium",
    showText = true,
    showUnderline = true,
    href = "/",
    className = "",
    layout = "horizontal" // horizontal or vertical
}) {
    // Logo sizes should be proportional to text x-height
    // Following typography best practices: logo height ≈ 1.2-1.5x the x-height of text
    const sizes = {
        small: {
            logo: 24,  // For ~20px text (text-xl)
            text: "text-xl",
            textMd: "md:text-2xl",
            gap: "gap-2",
            underlineHeight: "h-[1.5px]"
        },
        medium: {
            logo: 32,  // For ~28px text (text-3xl)
            text: "text-2xl",
            textMd: "md:text-3xl", 
            gap: "gap-2.5",
            underlineHeight: "h-[2px]"
        },
        large: {
            logo: 44,  // For ~36px text (text-4xl)
            text: "text-3xl",
            textMd: "md:text-4xl",
            gap: "gap-3",
            underlineHeight: "h-[2px]"
        },
        xlarge: {
            logo: 56,  // For ~48px text (text-5xl)
            text: "text-4xl",
            textMd: "md:text-5xl",
            gap: "gap-4",
            underlineHeight: "h-[2.5px]"
        }
    };

    const currentSize = sizes[size] || sizes.medium;
    const isVertical = layout === "vertical";

    const content = (
        <div className={`inline-flex ${isVertical ? 'flex-col' : 'flex-row'} items-center ${isVertical ? 'gap-1' : currentSize.gap} group transition-all duration-300 ${className}`}>
            <div 
                className="relative transition-all duration-200 ease-out group-hover:scale-105 flex-shrink-0"
                style={{ 
                    width: `${currentSize.logo}px`, 
                    height: `${currentSize.logo}px` 
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-above-rose-400/10 to-above-lavender-400/10 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-200" />
                <img
                    src="/logo-black.svg"
                    alt="Above Security Logo"
                    className="w-full h-full object-contain relative z-10 drop-shadow-sm group-hover:drop-shadow-md transition-all duration-200"
                    style={{ filter: 'contrast(1.1)' }}
                />
            </div>
            
            {showText && (
                <div className="relative">
                    <div className={`${currentSize.text} ${currentSize.textMd} font-bold tracking-tight leading-none text-slate-900 group-hover:text-slate-800 transition-colors duration-300`}>
                        Above
                    </div>
                    {showUnderline && (
                        <motion.span 
                            aria-hidden 
                            className={`absolute left-0 -bottom-0.5 block ${currentSize.underlineHeight} w-full rounded-full bg-gradient-to-r from-above-rose-400 to-above-peach-400`}
                            initial={{ scaleX: 0, originX: 0 }} 
                            animate={{ scaleX: 1 }} 
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }} 
                        />
                    )}
                </div>
            )}
        </div>
    );

    if (href) {
        return (
            <Link href={href}>
                {content}
            </Link>
        );
    }

    return content;
}