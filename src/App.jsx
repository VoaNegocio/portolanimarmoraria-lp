import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Differentials from './components/Differentials';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Hero />
                <Services />
                <Differentials />
                <HowItWorks />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default App;
