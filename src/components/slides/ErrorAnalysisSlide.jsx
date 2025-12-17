import React, { useState } from 'react';
import { Bot } from 'lucide-react';

export const ErrorAnalysisSlide = ({ slide }) => {
    // Controls whether the correction has been revealed (click / tap)
    const [isRevealed, setIsRevealed] = useState(false);

    const toggleReveal = () => {
        setIsRevealed(prev => !prev);
    };

    return (
        <div className="w-full max-w-5xl animate-fadeIn flex flex-col items-center gap-6 md:gap-8 px-4 py-8 h-full justify-center overflow-y-auto custom-scrollbar">

            {/* Title */}
            <div className="text-center shrink-0">
                <h2 className="text-3xl md:text-6xl font-bold text-white leading-tight">
                    {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-red-200 mt-2">
                    {slide.subtitle}
                </p>
            </div>

            {/* Interactive comparison container */}
            <div
                className="relative w-full group cursor-pointer"
                onClick={toggleReveal}
            >
                {/* AI-generated response (initial state) */}
                <div
                    className={`bg-slate-800 border-2 border-red-500/30 p-6 md:p-12 rounded-3xl relative overflow-hidden transition-all duration-300
                        ${isRevealed ? 'blur-sm' : 'group-hover:blur-sm'}
                    `}
                >
                    <div className="absolute top-4 left-4 flex items-center gap-2 text-red-400 font-mono text-xs md:text-sm">
                        <Bot size={16} />
                        AI GENERATED RESPONSE
                    </div>

                    <p className="text-lg md:text-3xl font-serif text-gray-300 leading-relaxed mt-6">
                        {slide.aiText}
                    </p>
                </div>

                {/* Correction overlay (hover / revealed state) */}
                <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-10
                        ${isRevealed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                    `}
                >
                    <div
                        className={`bg-red-900/90 border border-red-500 p-6 md:p-8 rounded-2xl max-w-2xl text-center shadow-2xl transition-transform duration-300
                            ${isRevealed ? 'scale-100' : 'scale-95 group-hover:scale-100'}
                        `}
                    >
                        <div className="flex justify-center mb-2 md:mb-4 text-red-400">
                            {slide.icon}
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                            HALLUCINATION DETECTED
                        </h3>

                        <p className="text-base md:text-lg text-red-100">
                            {slide.correction}
                        </p>
                    </div>
                </div>
            </div>

            {/* Interaction hint */}
            <p className="text-xs md:text-sm text-gray-500 font-mono animate-pulse shrink-0">
                {isRevealed
                    ? '(Tap again to hide)'
                    : 'Hover or tap to reveal the truth'}
            </p>

            {/* Custom scrollbar */}
            <style>{`
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255,255,255,0.2);
                    border-radius: 4px;
                }
            `}</style>
        </div>
    );
};
