'use client';

import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const [countdown, setCountdown] = useState<string>('Načítání...');

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const calculateCountdown = () => {
            const targetDate = new Date('2026-06-18T13:00:00').getTime();
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const remainingAfterDays = difference % (1000 * 60 * 60 * 24);
                const hours = Math.ceil(remainingAfterDays / (1000 * 60 * 60));

                setCountdown(`${days} dní, ${hours} hodin`);
            } else {
                setCountdown('Je čas!');
            }
        };

        calculateCountdown();
        const timer = setInterval(calculateCountdown, 60000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <section
                className="hero-section min-h-screen flex flex-col items-center justify-center relative pt-16 pb-12 sm:pt-20 sm:pb-20 px-4"
                style={{
                    backgroundImage: 'url(/landing.JPEG)'
                }}
                suppressHydrationWarning
            >
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="z-10 relative text-center max-w-4xl px-4 sm:px-6 mt-20 sm:mt-40">

                    <p className="text-xs sm:text-sm uppercase tracking-widest opacity-90 mb-4 sm:mb-8 text-white">
                        Michaela & Dominik
                    </p>


                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6 tracking-wide leading-tight">
                        BUDEME SE BRÁT
                    </h1>

                    {/* Main Info - Datum, Čas, Countdown */}
                    <div className="flex flex-col justify-center items-center gap-4 sm:gap-8 mb-10 sm:mb-16">
                        <div className="text-white">
                            <p className="text-xs sm:text-sm uppercase tracking-widest opacity-80 mb-1 sm:mb-2">Datum</p>
                            <p className="text-xl sm:text-2xl md:text-3xl font-light">18.06.2026</p>
                        </div>
                        <div className="text-white">
                            <p className="text-xs sm:text-sm uppercase tracking-widest opacity-80 mb-1 sm:mb-2">Čas obřadu</p>
                            <p className="text-xl sm:text-2xl md:text-3xl font-light">13:00</p>
                        </div>
                        <div className="text-white">
                            <p className="text-xs sm:text-sm uppercase tracking-widest opacity-80 mb-1 sm:mb-2">Do svatby zbývá</p>
                            <p className="text-xl sm:text-2xl md:text-3xl font-light">{countdown}</p>
                        </div>
                    </div>

                    {/* Icons Section */}
                    <div className="flex flex-row justify-center gap-2 sm:gap-6 lg:gap-24 mb-6 sm:mb-8 flex-wrap">

                        <div className="flex flex-col items-center gap-1 sm:gap-3 w-24 sm:w-32">
                            <img src="/place-svgrepo-com.svg" alt="Místo" className="w-8 h-8 sm:w-12 sm:h-12 brightness-200 invert" />
                            <p className="text-xs sm:text-sm uppercase tracking-widest text-white text-center whitespace-normal sm:whitespace-nowrap leading-tight text-xs">Dohnalův mlýn</p>
                        </div>

                        <div className="flex flex-col items-center gap-1 sm:gap-3 w-24 sm:w-32">
                            <img src="/rings-909-svgrepo-com.svg" alt="Datum" className="w-8 h-8 sm:w-12 sm:h-12 brightness-200 invert" />
                            <p className="text-xs sm:text-sm uppercase tracking-widest text-white text-center leading-tight">18.06.2026</p>
                        </div>

                        <div className="flex flex-col items-center gap-1 sm:gap-3 w-24 sm:w-32">
                            <img src="/cutlery-svgrepo-com.svg" alt="Čas" className="w-8 h-8 sm:w-12 sm:h-12 brightness-200 invert" />
                            <p className="text-xs sm:text-sm uppercase tracking-widest text-white text-center leading-tight">14:00</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
