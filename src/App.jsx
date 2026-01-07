import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load non-critical components
const Services = lazy(() => import('./components/Services'));
const AmbientsCarousel = lazy(() => import('./components/AmbientsCarousel'));
const About = lazy(() => import('./components/About'));
const Differentials = lazy(() => import('./components/Differentials'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Hero />
                <Suspense fallback={<div className="h-96 flex items-center justify-center">Carregando...</div>}>
                    <About />
                    <AmbientsCarousel />
                    <Services />
                    <Differentials />
                    <HowItWorks />
                </Suspense>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default App;
