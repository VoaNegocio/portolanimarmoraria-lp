import React, { useState } from 'react';

const StoneCard = ({ title, image }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="h-[450px] perspective-1000 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            {/* Wrapper que realiza o giro 3D */}
            <div className={`relative w-full h-full transition-transform duration-[1500ms] transform-style-3d rounded-lg shadow-sm hover:shadow-2xl ${isFlipped ? 'rotate-y-180' : ''}`}>

                {/* Front Face */}
                <div className="absolute w-full h-full backface-hidden bg-gray-50 rounded-lg transform-style-3d flex flex-col items-center justify-center pt-8 pb-4">
                    {/* Floating Image Layer */}
                    <div className="w-10/12 h-[320px] rounded-lg overflow-hidden transform-style-3d shadow-xl translate-z-30">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Floating Title Layer */}
                    <div className="p-4 text-center transform-style-3d mt-2">
                        <h3 className="font-bold text-gray-800 text-lg translate-z-50 drop-shadow-lg">{title}</h3>
                    </div>
                </div>

                {/* Back Face */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-900 rounded-lg flex flex-col items-center justify-center p-6 text-center transform-style-3d">
                    <img
                        src={image}
                        alt={title}
                        className="w-24 h-24 rounded-full object-cover mb-3 border-4 border-moria-green/30 translate-z-50 shadow-xl drop-shadow-2xl"
                    />
                    <h3 className="text-xl font-bold text-white mb-2 translate-z-60 drop-shadow-lg">{title}</h3>
                    <p className="text-gray-300 text-sm mb-4 translate-z-60 drop-shadow-xl">Toque de sofisticação para seu ambiente.</p>
                    <button type="button" className="inline-block px-4 py-2 bg-moria-green text-white rounded-full text-xs font-bold uppercase tracking-wide translate-z-60 shadow-lg cursor-pointer hover:scale-105 transition-transform drop-shadow-xl">
                        Ver Detalhes
                    </button>
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <section id="services" className="py-16 md:py-24 bg-[#F9FAFB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Uma Pedra para Cada Estilo e Orçamento
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Oferecemos uma ampla gama de opções para atender todos os gostos e necessidades.
                    </p>
                </div>

                <div className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StoneCard title="Pedras Clássicas" image="./public/pedras/pedrasclassicas.webp" />
                        <StoneCard title="Pedras Refinadas" image="./public/pedras/pedrasrefinadas.webp" />
                        <StoneCard title="Pedras Exóticas" image="./public/pedras/pedrasexoticas.webp" />
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://api.whatsapp.com/send?phone=5516997730808&text=Ol%C3%A1!%20Estou%20no%20site%20e%20gostaria%20de%20um%20Or%C3%A7amento."
                        className="inline-block bg-gray-900 text-white font-medium py-3 px-8 rounded hover:bg-gray-800 transition-colors"
                    >
                        VER CATÁLOGO COMPLETO NO WHATSAPP
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
