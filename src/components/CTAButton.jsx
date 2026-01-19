import React from 'react';
import { twMerge } from 'tailwind-merge';

const CTAButton = ({
    children,
    href,
    onClick,
    variant = 'primary',
    className = '',
    pulse = false,
    shimmer = true,
    ...props
}) => {
    const baseStyles = "relative inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group";

    const variants = {
        primary: "bg-moria-green hover:bg-[#20bd5a] text-white",
        secondary: "bg-gray-900 hover:bg-gray-800 text-white",
        outline: "bg-transparent border-2 border-moria-green text-moria-green hover:bg-moria-green hover:text-white"
    };

    const pulseClass = pulse ? "animate-pulse-glow-green" : "";

    const Component = href ? 'a' : 'button';

    return (
        <Component
            href={href}
            onClick={onClick}
            className={twMerge(baseStyles, variants[variant], pulseClass, className)}
            {...props}
        >
            {/* Shimmer Effect Container (Clipped) */}
            {shimmer && (
                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none z-10">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] skew-x-[-15deg] animate-shimmer"></div>
                </div>
            )}

            {/* Content */}
            <span className="relative z-20 flex items-center gap-2">
                {children}
            </span>
        </Component>
    );
};

export default CTAButton;
