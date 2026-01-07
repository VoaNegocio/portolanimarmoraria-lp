import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            src="/logomarmoraria.png"
                            alt="Marmoraria Portolani Logo"
                            className="h-12 w-auto md:h-20 object-contain"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#hero" className="text-gray-600 hover:text-moria-green font-medium transition-colors">Início</a>
                        <a href="#services" className="text-gray-600 hover:text-moria-green font-medium transition-colors">Pedras</a>
                        <a href="#differentials" className="text-gray-600 hover:text-moria-green font-medium transition-colors">Sobre</a>
                        <a href="#contact" className="text-gray-600 hover:text-moria-green font-medium transition-colors">Contato</a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#hero" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-moria-green hover:bg-gray-50" onClick={() => setIsOpen(false)}>Início</a>
                        <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-moria-green hover:bg-gray-50" onClick={() => setIsOpen(false)}>Pedras</a>
                        <a href="#differentials" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-moria-green hover:bg-gray-50" onClick={() => setIsOpen(false)}>Sobre</a>
                        <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-moria-green hover:bg-gray-50" onClick={() => setIsOpen(false)}>Contato</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
