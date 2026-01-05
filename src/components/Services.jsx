import React from 'react';

const StoneCard = ({ title, image }) => {
    return (
        <div className="group h-80 perspective-1000">
            {/* Flip Wrapper - Reacts to Hover */}
            <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180 rounded-lg shadow-sm hover:shadow-2xl">

                {/* Front Face */}
                <div className="absolute w-full h-full backface-hidden bg-gray-50 rounded-lg transform-style-3d flex flex-col items-center justify-center pt-8 pb-4">
                    {/* Floating Image Layer */}
                    <div className="w-10/12 h-48 rounded-lg overflow-hidden transform-style-3d shadow-xl translate-z-30">
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

                {/* Clássicas */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-moria-green pl-4">
                        Pedras Clássicas
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StoneCard title="Verde Ubatuba" image="https://unsplash.com/pt-br/fotografias/um-close-up-de-uma-superficie-de-marmore-verde-bAtRq2rH1Io" />
                        <StoneCard title="Preto São Gabriel" image="https://images.unsplash.com/photo-1617136746864-f3a74312ce0f?q=80&w=1000&auto=format&fit=crop" />
                        <StoneCard title="Cinza Andorinha" image="https://images.unsplash.com/photo-1598555836952-b4c48398436e?q=80&w=1000&auto=format&fit=crop" />
                    </div>
                </div>

                {/* Refinadas */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-moria-green pl-4">
                        Opções Refinadas
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StoneCard title="Branco Paraná" image="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000&auto=format&fit=crop" />
                        <StoneCard title="Mármore Carrara" image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop" />
                        <StoneCard title="Granito Preto Absoluto" image="https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&w=1000&auto=format&fit=crop" />
                    </div>
                </div>

                {/* Exóticas */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-moria-green pl-4">
                        Pedras Exóticas
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StoneCard title="Azul Bahia" image="https://images.unsplash.com/photo-1618212641753-41bbd93bd3dd?q=80&w=1000&auto=format&fit=crop" />
                        <StoneCard title="Sodalita" image="https://images.unsplash.com/photo-1633512392765-5c743845b4c4?q=80&w=1000&auto=format&fit=crop" />
                        <StoneCard title="Ônix" image="https://plus.unsplash.com/premium_photo-1664303499312-917c50e4047b?q=80&w=1000&auto=format&fit=crop" />
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
