import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import CTAButton from './CTAButton';

const Hero = () => {
    return (
        <section id="hero" className="relative w-full h-[600px] md:h-[700px] flex items-center bg-gray-100">
            {/* Background Image */}
            {/* Background Image */}
            {/* Background Image (LCP Optimized) */}
            <div className="absolute inset-0 w-full h-full">
                <picture>
                    <source media="(max-width: 767px)" srcSet="/hero3-mobile.webp" />
                    <source media="(min-width: 768px)" srcSet="/hero3.webp" />
                    <img
                        src="/hero3.webp"
                        alt="Cozinha com mármore"
                        className="w-full h-full object-cover object-center"
                        fetchpriority="high"
                    />
                </picture>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>
            </div>

            {/* Content Card */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
                <div className="md:max-w-xl pointer-events-auto bg-white/90 md:bg-white p-8 md:p-12 rounded-lg shadow-sm backdrop-blur-sm md:backdrop-blur-none">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Transforme Seu Espaço com a Beleza Atemporal do Mármore e Granito
                    </h1>
                    <p className="text-lg text-gray-700 mb-8">
                        Marmoraria Portolani: Qualidade, versatilidade e condições que cabem no seu bolso.
                    </p>

                    <CTAButton
                        href="https://api.whatsapp.com/send?phone=5516997531780&text=Ol%C3%A1!%20Estou%20no%20site%20e%20gostaria%20de%20um%20Or%C3%A7amento."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto py-4 px-8 text-sm tracking-wide uppercase gap-2"
                        pulse={true}
                    >
                        <FaWhatsapp size={20} />
                        Fale Conosco Pelo WhatsApp
                    </CTAButton>
                </div>
            </div>
        </section>
    );
};

export default Hero;
