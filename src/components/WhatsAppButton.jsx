import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=5516997531780&text=Ol%C3%A1!%20Estou%20no%20site%20e%20gostaria%20de%20um%20Or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center"
            aria-label="Fale conosco no WhatsApp"
        >
            <FaWhatsapp size={32} />
        </a>
    );
};

export default WhatsAppButton;
