'use client';

import React from 'react';

const WeddingSchedule = () => {
    const schedule = [
        { time: '13:00', event: 'Obřad' },
        { time: '14:00', event: 'Hostina' },
        { time: '16:00', event: 'Krájení dortu' },
        { time: '18:00', event: 'První tanec' },
    ];

    return (
        <section className="section bg-gray-50 py-12 sm:py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-8 sm:mb-12 md:mb-16 tracking-wider text-gray-800">
                    SVATEBNÍ PROGRAM
                </h2>

                <div className="flex flex-col items-center">
                    <div className="w-full max-w-3xl">
                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

                            <div className="space-y-8 sm:space-y-12">
                                {schedule.map((item, index) => {
                                    const isLeft = index % 2 === 0;
                                    return (
                                        <div key={index} className={`flex items-center gap-4 sm:gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                                            <div className={`w-1/2 ${isLeft ? 'text-right pr-4 sm:pr-6' : 'text-left pl-4 sm:pl-6'}`}>
                                                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border-2 border-gray-200 hover:shadow-lg transition">
                                                    <div className="text-2xl sm:text-3xl font-light text-gray-800 mb-2">
                                                        {item.time}
                                                    </div>
                                                    <p className="text-gray-700 font-medium text-sm sm:text-base">{item.event}</p>
                                                </div>
                                            </div>

                                            <div className="flex justify-center">
                                                <div className="w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-md z-10"></div>
                                            </div>

                                            <div className="w-1/2"></div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-center items-start mt-8 sm:mt-10 md:mt-12">
                        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md border-4 border-gray-300">
                            <div className="w-32 sm:w-40 h-32 sm:h-40 bg-gray-100 flex items-center justify-center rounded">
                                <div className="text-center text-gray-500 text-xs sm:text-sm px-2">
                                    <p className="font-light">QR kód</p>
                                    <p className="text-xs mt-2">TBD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeddingSchedule;
