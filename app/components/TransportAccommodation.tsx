'use client';

import React from 'react';

const TransportAccommodation = () => {
    return (
        <section className="section bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-14 md:mb-16">
                    <div className="text-center">
                        <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4 tracking-wider text-gray-800">DOPRAVA</h3>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            TBD
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4 tracking-wider text-gray-800">UBYTOVÁNÍ</h3>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            TBD
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransportAccommodation;
