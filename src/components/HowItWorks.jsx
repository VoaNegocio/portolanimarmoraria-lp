import React from 'react';

const steps = [
    {
        number: "01",
        title: "Entre em Contato",
        description: "Inicie uma conversa conosco pelo WhatsApp."
    },
    {
        number: "02",
        title: "Consultoria Personalizada",
        description: "Discutimos suas ideias, necessidades e escolha de pedras."
    },
    {
        number: "03",
        title: "Orçamento Transparente",
        description: "Receba um orçamento detalhado e sem surpresas."
    },
    {
        number: "04",
        title: "Instalação Profissional",
        description: "Nossa equipe cuida de tudo, da medição à instalação final."
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-16 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Como Funciona?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="text-5xl font-bold text-gray-200 mb-4">{step.number}</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 relative z-10">{step.title}</h3>
                            <p className="text-gray-600 relative z-10">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
