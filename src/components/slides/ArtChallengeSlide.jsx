import React, { useState } from 'react';
import { Palette, Cpu } from 'lucide-react';

/**
 * ArtChallengeSlide
 *
 * Interactive slide that challenges the user to identify
 * human-made art versus AI-generated art.
 *
 * Supports both hover (desktop) and click/touch (mobile)
 * to ensure consistent interaction across devices.
 *
 * This component is purely presentational and relies on
 * the Slide Engine for data injection.
 */
export const ArtChallengeSlide = ({ slide }) => {
    // Controls whether the answer is permanently revealed (mobile-friendly)
    const [isRevealed, setIsRevealed] = useState(false);

    const toggleReveal = () => {
        setIsRevealed(!isRevealed);
    };

    return (
        <div className="w-full max-w-6xl animate-fadeIn flex flex-col items-center gap-4 md:gap-8 px-2 md:px-4 justify-center min-h-min">

            <div className="text-center mt-2 md:mt-0">
                <h2 className="text-3xl md:text-6xl font-bold text-white mb-2 leading-tight">
                    {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-purple-200">
                    {slide.subtitle}
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full justify-center items-center">

                {/* Artwork A */}
                <div className="flex-1 flex flex-col items-center gap-2 md:gap-4 group w-full max-w-sm md:max-w-md">
                    <div className="relative w-full aspect-square bg-slate-800 rounded-2xl md:rounded-3xl overflow-hidden border-4 border-white/5 group-hover:border-purple-500 transition-all shadow-2xl">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-black/40">
                            <Palette size={48} className="md:w-16 md:h-16" />
                        </div>
                        <img
                            src={slide.imgReal}
                            alt="Artwork A"
                            className="relative w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
                        />
                    </div>
                    <span className="text-lg md:text-2xl font-bold text-white bg-white/10 px-6 py-1 md:py-2 rounded-full border border-white/5">
                        OBRA A
                    </span>
                </div>

                <div className="flex items-center justify-center py-2 md:py-0">
                    <span className="text-3xl md:text-5xl font-black text-white/20 italic">
                        VS
                    </span>
                </div>

                {/* Artwork B */}
                <div className="flex-1 flex flex-col items-center gap-2 md:gap-4 group w-full max-w-sm md:max-w-md">
                    <div className="relative w-full aspect-square bg-slate-800 rounded-2xl md:rounded-3xl overflow-hidden border-4 border-white/5 group-hover:border-pink-500 transition-all shadow-2xl">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-black/40">
                            <Cpu size={48} className="md:w-16 md:h-16" />
                        </div>
                        <img
                            src={slide.imgAI}
                            alt="Artwork B"
                            className="relative w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
                        />
                    </div>
                    <span className="text-lg md:text-2xl font-bold text-white bg-white/10 px-6 py-1 md:py-2 rounded-full border border-white/5">
                        OBRA B
                    </span>
                </div>
            </div>

            {/* Reveal interaction container */}
            <div
                onClick={toggleReveal}
                className={`mt-2 md:mt-4 bg-black/40 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/10 text-center w-full max-w-3xl cursor-pointer md:cursor-help group transition-all duration-300 ${isRevealed
                        ? 'bg-black/80 border-purple-500/50'
                        : 'hover:bg-black/80 hover:border-purple-500/50'
                    }`}
            >
                <div className="relative min-h-[3.5rem] md:min-h-[3rem] flex items-center justify-center">

                    <p
                        className={`text-lg md:text-2xl text-white font-medium transition-all duration-300 absolute w-full leading-snug 
                        ${isRevealed
                                ? 'opacity-0 -translate-y-2'
                                : 'group-hover:opacity-0 group-hover:-translate-y-2'}`}
                    >
                        {slide.instruction || '¿Cuál es humana?'}
                    </p>

                    <p
                        className={`text-lg md:text-2xl text-green-400 font-bold transition-all duration-300 absolute w-full leading-snug
                        ${isRevealed
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}
                    >
                        RESPUESTA: Obra B es IA.
                    </p>

                    <p className="text-lg md:text-2xl opacity-0 pointer-events-none">
                        ¿Cuál tiene la pincelada humana?
                    </p>
                </div>

                <div
                    className={`mt-2 text-[10px] md:text-xs text-gray-500 font-mono uppercase tracking-widest transition-opacity
                    ${isRevealed ? 'opacity-0' : 'group-hover:opacity-0'}`}
                >
                    (Toca o pasa el mouse para revelar)
                </div>
            </div>
        </div>
    );
};
