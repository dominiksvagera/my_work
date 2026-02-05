'use client';

import React from 'react';

const InteractiveMap = () => {
    return (
        <section className="section bg-white py-12 sm:py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-8 sm:mb-10 md:mb-12 tracking-wider text-gray-800">
                    MAPA
                </h2>
                <div className="flex justify-center">
                    <iframe
                        title="Google Maps - Dohnalův mlýn"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2609.051543529645!2d17.215227276616922!3d49.16162987137488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47131d83961caf25%3A0xbafdfca8a9efeb3c!2zRG9obmFsxa92IG1sw71u!5e0!3m2!1scs!2scz!4v1770192711969!5m2!1scs!2scz"
                        width="100%"
                        className="max-w-full rounded-lg border-0"
                        height="450"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
};

export default InteractiveMap;
