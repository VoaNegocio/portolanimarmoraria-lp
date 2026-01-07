import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const About = () => {
    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex flex-col md:flex-row items-center">

                    {/* Imagem de Fundo/Contexto */}
                    <div className="w-full md:w-3/5 h-[400px] md:h-[600px] relative z-0">
                        <img
                            src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2574&auto=format&fit=crop"
                            alt="Banheiro de luxo com mármore"
                            className="w-full h-full object-cover rounded-lg shadow-xl"
                        />
                        {/* Elemento decorativo quadrado */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-moria-green/20 rounded-lg -z-10 hidden md:block"></div>
                    </div>

                    {/* Card de Conteúdo Sobreposto */}
                    <div className="w-full md:w-1/2 md:-ml-20 mt-8 md:mt-0 relative z-10">
                        <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-2xl border border-gray-100">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Soluções Completas para Cada Canto da Sua Casa ou Escritório
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Na Marmoraria Portolani, transformamos seus sonhos em realidade com nossas soluções versáteis em mármore e granito. Seja para uma cozinha moderna, um banheiro luxuoso ou uma área de lazer sofisticada, temos a pedra perfeita e a expertise para executar seu projeto com perfeição.
                            </p>

                            <a
                                href="https://api.whatsapp.com/send?phone=5516997730808&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20socu%C3%A7%C3%B5es%20da%20Marmoraria."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group"
                            >
                                <FaWhatsapp className="mr-2 text-xl group-hover:animate-bounce" />
                                FALE CONOSCO PELO WHATSAPP
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
