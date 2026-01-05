import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold uppercase mb-2">Marmoraria Moriá</h3>
                        <p className="text-gray-400 text-sm">Qualidade e tradição em mármores e granitos.</p>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-sm text-gray-500">
                            &copy; {new Date().getFullYear()} Marmoraria Moriá. Todos os direitos reservados.
                        </p>
                        <p className="text-xs text-gray-600 mt-2">
                            Desenvolvido por Voa Negócio
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
