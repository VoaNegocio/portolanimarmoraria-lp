import React from 'react';
import { FiAward, FiTruck, FiDollarSign, FiGrid, FiUserCheck } from 'react-icons/fi';

const features = [
    {
        icon: <FiAward className="w-8 h-8 text-moria-green" />,
        title: "Experiência Comprovada",
        description: "Mais de 20 anos atendendo com excelência e rapidez."
    },
    {
        icon: <FiTruck className="w-8 h-8 text-moria-green" />,
        title: "Entrega Rápida",
        description: "Nosso caminhão próprio garante instalação no menor tempo possível."
    },
    {
        icon: <FiDollarSign className="w-8 h-8 text-moria-green" />,
        title: "Flexibilidade de Pagamento",
        description: "Parcele em até 10x e realize seu projeto sem comprometer seu orçamento."
    },
    {
        icon: <FiGrid className="w-8 h-8 text-moria-green" />,
        title: "Variedade de Opções",
        description: "Ampla gama de pedras e aplicações para atender todas as necessidades."
    },
    {
        icon: <FiUserCheck className="w-8 h-8 text-moria-green" />,
        title: "Atendimento Personalizado",
        description: "Nossos especialistas estão prontos para encontrar a solução perfeita para você."
    }
];

const Differentials = () => {
    return (
        <section id="differentials" className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Por Que Escolher a Marmoraria Moriá?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg hover:border-green-100 transition-colors">
                            <div className="mb-4 p-3 bg-green-50 rounded-full">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Differentials;
