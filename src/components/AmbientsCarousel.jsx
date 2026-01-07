import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
    {
        title: "Bancadas de Cozinha",
        desc: "Funcionalidade e elegância para o coração do seu lar.",
        image: "/bancadacozinha.webp"
    },
    {
        title: "Banheiros de Luxo",
        desc: "Transforme seu banho em um spa particular com mármores exclusivos.",
        image: "/banheirodeluxo.webp"
    },
    {
        title: "Áreas Gourmet",
        desc: "Resistência e beleza para receber amigos e família.",
        image: "/areagourmet.webp"
    },
    {
        title: "Escadas e Pisos",
        desc: "Acabamentos perfeitos que valorizam cada passo.",
        image: "/escada.webp"
    }
];

const AmbientsCarousel = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    return (
        <section className="bg-gray-900 py-16 text-white relative overflow-hidden">
            {/* Background elements if needed */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Nossos Serviços Abrangem:
                </h2>

                <div className="relative max-w-5xl mx-auto">

                    {/* Main Image Container */}
                    <div className="relative h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Gradient Overlay for better text visibility potentially, though design shows specific card */}
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                        ))}

                        {/* Floating Info Card - Bottom Left */}
                        <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl max-w-sm shadow-xl z-20">
                            <h3 className="text-xl font-bold mb-2 text-white">
                                {slides[current].title}
                            </h3>
                            <p className="text-white/90 text-sm">
                                {slides[current].desc}
                            </p>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white backdrop-blur-sm transition-colors z-30"
                        aria-label="Anterior"
                    >
                        <FaChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full text-white backdrop-blur-sm transition-colors z-30"
                        aria-label="Próximo"
                    >
                        <FaChevronRight size={24} />
                    </button>

                </div>

                {/* Dots Indicators (Optional but good for UX) */}
                <div className="flex justify-center mt-8 space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${index === current ? 'bg-white' : 'bg-white/40'
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AmbientsCarousel;
