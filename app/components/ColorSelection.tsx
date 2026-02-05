'use client';

import React from 'react';

const ColorSelection = () => {
    const colors = [
        { name: 'krémová', code: '#c9a876' },
        { name: 'latte', code: '#e0b5a0' },
        { name: 'meruňková', code: '#d97550' },
        { name: 'olivová', code: '#7a8872' },
        { name: 'eukalyptová', code: '#b8cdc5' },
        { name: 'dešťové modrá', code: '#a8c5d6' },
    ];

    return (
        <section className="section bg-gray-50 py-12 sm:py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-8 sm:mb-10 md:mb-12 tracking-wider text-gray-800">
                    CO NA SEBE?
                </h2>
                <p className="text-center text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
                    Budeme rádi, když se s námi sladíte do těchto barev.
                </p>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 mb-8">
                        {colors.map((color) => (
                            <div key={color.name} className="text-center">
                                <div
                                    className="w-full h-24 sm:h-28 md:h-32 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer mb-2 sm:mb-3 border-2 border-transparent hover:border-gray-300"
                                    style={{ backgroundColor: color.code }}
                                    data-color={color.name}
                                />
                                <p className="text-xs sm:text-sm font-medium text-gray-700 leading-tight">{color.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ColorSelection;
