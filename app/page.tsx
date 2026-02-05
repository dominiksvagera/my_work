'use client';

import React, { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from './components/HeroSection';
import TransportAccommodation from './components/TransportAccommodation';
import ColorSelection from './components/ColorSelection';
import WeddingParty from './components/WeddingParty';
import WeddingSchedule from './components/WeddingSchedule';
import RSVPForm from './components/RSVPForm';

const InteractiveMap = dynamic(() => import('./components/InteractiveMap'), {
  loading: () => (
    <div className="section bg-white py-20">
      <div className="text-center text-gray-500">Načítání mapy...</div>
    </div>
  ),
  ssr: false,
});

export default function Home() {
  const [isDarkText, setIsDarkText] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('[style*="landing.JPEG"]');
      if (!heroSection) return;

      const heroRect = heroSection.getBoundingClientRect();
      const isHeroVisible = heroRect.bottom > 0;

      setIsDarkText(!isHeroVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="w-full">
      <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-xl font-light tracking-wider transition-colors cursor-pointer ${isDarkText ? 'text-gray-800' : 'text-white'}`}
          >
            Švagerovi
          </button>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#program" className={`transition ${isDarkText ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'}`}>
              Program
            </a>
            <a href="#mapa" className={`transition ${isDarkText ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'}`}>
              Mapa
            </a>
            <a href="#tym" className={`transition ${isDarkText ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'}`}>
              Kontaktní osoby
            </a>
            <a href="#rsvp" className={`transition ${isDarkText ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'}`}>
              Potvrzení účasti
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            <span className={`w-6 h-0.5 block transition-all ${isDarkText ? 'bg-gray-800' : 'bg-white'}`}></span>
            <span className={`w-6 h-0.5 block transition-all ${isDarkText ? 'bg-gray-800' : 'bg-white'}`}></span>
            <span className={`w-6 h-0.5 block transition-all ${isDarkText ? 'bg-gray-800' : 'bg-white'}`}></span>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm">
            <div className="px-6 py-4 space-y-3">
              <a
                href="#program"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-amber-600 transition py-2"
              >
                Program
              </a>
              <a
                href="#mapa"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-amber-600 transition py-2"
              >
                Mapa
              </a>
              <a
                href="#tym"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-amber-600 transition py-2"
              >
                Tým
              </a>
              <a
                href="#rsvp"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-800 hover:text-amber-600 transition py-2"
              >
                Potvrzení účasti
              </a>
            </div>
          </div>
        )}
      </nav>
      <HeroSection />
      <section id="program">
        <WeddingSchedule />
      </section>

      <section id="mapa">
        <Suspense fallback={<div className="section bg-white">Načítání mapy...</div>}>
          <InteractiveMap />
        </Suspense>
      </section>

      <TransportAccommodation />

      <ColorSelection />

      <section id="tym">
        <WeddingParty />
      </section>

      <section id="rsvp">
        <RSVPForm />
      </section>

      <footer className="bg-gray-800 text-white py-8 sm:py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="mb-2 text-sm sm:text-base">Michaela & Dominik</p>
          <p className="text-xs sm:text-sm text-gray-400">
            Děkujeme, že se chcete zúčastnit naší velké chvíle ❤️
          </p>
          <p className="text-xs text-gray-500 mt-4">
            © 2026 Svagerovi.cz. Vytvořeno s láskou.
          </p>
        </div>
      </footer>
    </main>
  );
}
