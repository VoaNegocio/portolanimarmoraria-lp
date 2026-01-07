import React from 'react';
import { FaWhatsapp, FaComments, FaFileInvoiceDollar, FaTools } from 'react-icons/fa';

const steps = [
    {
        icon: <FaWhatsapp size={24} />,
        title: "Entre em Contato",
        description: "Inicie uma conversa conosco pelo WhatsApp."
    },
    {
        icon: <FaComments size={24} />,
        title: "Consultoria Personalizada",
        description: "Discutimos suas ideias, necessidades e escolha de pedras."
    },
    {
        icon: <FaFileInvoiceDollar size={24} />,
        title: "Orçamento Transparente",
        description: "Receba um orçamento detalhado e sem surpresas."
    },
    {
        icon: <FaTools size={24} />,
        title: "Instalação Profissional",
        description: "Nossa equipe cuida de tudo, da medição à instalação final."
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 md:py-28 bg-[#F9FAFB] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex flex-col md:flex-row items-center justify-end">

                    {/* Imagem de Contexto (Direita) */}
                    <div className="w-full md:w-3/5 h-[500px] md:h-[650px] relative z-0 order-1 md:order-2">
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
                            alt="Escada de Mármore Luxuosa"
                            className="w-full h-full object-cover rounded-lg shadow-xl"
                        />
                        {/* Elemento decorativo */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-moria-green/10 rounded-full -z-10 hidden md:block"></div>
                    </div>

                    {/* Card de Conteúdo (Esquerda - Sobreposto) */}
                    <div className="w-full md:w-1/2 md:-mr-24 mt-8 md:mt-0 relative z-10 order-2 md:order-1">
                        <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl border border-gray-100">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 leading-tight">
                                Como Funciona?
                            </h2>

                            <div className="space-y-8 mb-10">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 mr-4 text-[#127D86] mt-1">
                                            {step.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800 mb-1">{step.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="https://api.whatsapp.com/send?phone=5516997730808&text=Ol%C3%A1!%20Gostaria%20de%20iniciar%20um%20projeto."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg group w-full md:w-auto"
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

export default HowItWorks;
