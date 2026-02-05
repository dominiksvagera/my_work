'use client';

import React from 'react';

const WeddingParty = () => {
    const party = [
        {
            id: 1,
            name: 'Blanka',
            role: 'Koordinátorka svatby',
            phone: '+420 123 456 789',
            image: '',
        },
    ];

    return (
        <section className="section bg-white py-12 sm:py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-10 sm:mb-12 md:mb-16 tracking-wider text-gray-800">
                    DŮLEŽITÉ KONTAKTNÍ OSOBY
                </h2>
                <div className={`flex ${party.length === 1 ? 'justify-center' : ''}`}>
                    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-6 sm:gap-8 mb-8">
                        {party.map((person) => (
                            <div key={person.id} className="text-center">
                                <div className="mb-3 sm:mb-4 overflow-hidden rounded-2xl shadow-lg">
                                    {person.image ? (
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            className="w-full h-40 sm:h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="w-full h-40 sm:h-48 md:h-56 bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-4xl mb-2">👤</div>
                                                <p className="text-gray-500 text-sm">Fotka</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-lg sm:text-xl font-light text-gray-800 tracking-wide mb-1">
                                    {person.name}
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm">{person.role}</p>
                                <p className="text-gray-700 text-xs sm:text-sm font-medium mt-2">{person.phone}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeddingParty;
