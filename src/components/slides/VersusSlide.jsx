import React, { useState } from 'react';
import { Zap, MessageCircle, Sparkles, Bot } from 'lucide-react';

export const VersusSlide = ({ slide }) => {
    const [versusSide, setVersusSide] = useState(null);

    /**
     * Responsive sizing logic.
     * Mobile: height-based layout
     * Desktop: width-based layout
     * The two sides always sum to 100% to avoid layout gaps.
     */
    const getSizeClasses = (side) => {
        const isSelected = versusSide === side;

        let classes =
            "relative flex flex-col items-center justify-center transition-all duration-500 ease-in-out overflow-hidden ";

        if (versusSide === null) {
            classes += "h-1/2 w-full md:h-full md:w-1/2 ";
        } else if (isSelected) {
            classes += "h-[65%] w-full md:h-full md:w-[60%] ";
        } else {
            classes += "h-[35%] w-full md:h-full md:w-[40%] ";
        }

        return classes;
    };

    const handleInteraction = (side) => {
        setVersusSide(prev => (prev === side ? null : side));
    };

    return (
        <div className="w-full h-[80vh] md:h-[65vh] max-w-6xl animate-fadeIn flex flex-col md:flex-row relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl bg-slate-900 mx-auto">

            {/* Slide title (decorative, non-interactive) */}
            <h2 className="absolute top-4 left-0 right-0 text-center text-xl md:text-4xl font-black uppercase tracking-[0.2em] text-white/30 z-20 pointer-events-none select-none mix-blend-overlay">
                {slide.title}
            </h2>

            {/* LEFT SIDE — ChatGPT */}
            <div
                onMouseEnter={() => setVersusSide('left')}
                onMouseLeave={() => setVersusSide(null)}
                onClick={() => handleInteraction('left')}
                className={`${getSizeClasses('left')} group/left border-b md:border-b-0 md:border-r border-white/5 cursor-pointer bg-slate-900`}
            >
                <div className={`absolute inset-0 bg-gradient-to-br from-teal-900/40 via-slate-900 to-black transition-opacity duration-500 ${versusSide === 'right' ? 'opacity-20' : 'opacity-100'}`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-teal-500/10 blur-[80px] rounded-full transition-all duration-500 ${versusSide === 'left' ? 'scale-100 opacity-50' : 'scale-50 opacity-0'}`} />

                <div className={`relative z-20 flex flex-col items-center w-full max-w-lg transition-all duration-500 px-4
                    ${versusSide === 'left' ? '-translate-y-4 md:-translate-y-16' : versusSide === 'right' ? 'opacity-60 scale-90' : ''}
                `}>
                    <div className="relative w-14 h-14 md:w-20 md:h-20 mb-2 md:mb-4">
                        <div className="absolute inset-0 bg-teal-400 rounded-full blur-md opacity-50 animate-pulse" />
                        <div className="relative w-full h-full bg-gradient-to-tr from-teal-600 to-emerald-500 rounded-full flex items-center justify-center border-2 border-teal-300/50">
                            <MessageCircle size={28} className="text-white md:w-8 md:h-8" />
                        </div>
                    </div>

                    <h3 className="text-2xl md:text-5xl font-black text-white mb-1 tracking-tight">
                        {slide.leftName}
                    </h3>

                    <div className={`flex flex-col items-center transition-opacity duration-300 ${versusSide === 'right' ? 'opacity-0 h-0 overflow-hidden md:opacity-100 md:h-auto' : ''}`}>
                        <span className="text-teal-400 font-mono text-[10px] md:text-sm tracking-[0.2em] uppercase font-bold mb-2">
                            {slide.leftRole}
                        </span>
                        <p className="text-center text-teal-100/80 text-xs md:text-base font-light max-w-xs hidden md:block">
                            {slide.leftDesc}
                        </p>
                    </div>
                </div>

                <div className={`absolute bottom-4 md:bottom-16 w-full max-w-sm px-6 transition-all duration-500 z-30 
                    ${versusSide === 'left' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                    <div className="w-full bg-teal-950/60 border border-teal-500/20 rounded-xl p-3 md:p-6 backdrop-blur-md">
                        <h4 className="text-teal-400 font-bold mb-2 text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 border-b border-teal-500/20 pb-2">
                            <Zap size={12} /> Arsenal
                        </h4>
                        <ul className="space-y-1">
                            {slide.leftStats.map((stat, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-200 text-[10px] md:text-sm">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400" />
                                    {stat}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* VS indicator (repositions to avoid content overlap) */}
            <div className={`absolute z-40 pointer-events-none transition-all duration-500
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                ${versusSide === 'left' ? 'translate-y-[15vh] md:translate-y-[-50%] md:translate-x-[4rem]' : ''}
                ${versusSide === 'right' ? '-translate-y-[15vh] md:translate-y-[-50%] md:-translate-x-[4rem]' : ''}
            `}>
                <span className="text-4xl md:text-6xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-white to-blue-200">
                    VS
                </span>
            </div>

            {/* RIGHT SIDE — Gemini */}
            <div
                onMouseEnter={() => setVersusSide('right')}
                onMouseLeave={() => setVersusSide(null)}
                onClick={() => handleInteraction('right')}
                className={`${getSizeClasses('right')} group/right cursor-pointer bg-slate-900`}
            >
                <div className={`absolute inset-0 bg-gradient-to-bl from-blue-900/40 via-slate-900 to-black transition-opacity duration-500 ${versusSide === 'left' ? 'opacity-20' : 'opacity-100'}`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-500/10 blur-[80px] rounded-full transition-all duration-500 ${versusSide === 'right' ? 'scale-100 opacity-50' : 'scale-50 opacity-0'}`} />

                <div className={`relative z-20 flex flex-col items-center w-full max-w-lg transition-all duration-500 px-4
                    ${versusSide === 'right' ? '-translate-y-4 md:-translate-y-16' : versusSide === 'left' ? 'opacity-60 scale-90' : ''}
                `}>
                    <div className="relative w-14 h-14 md:w-20 md:h-20 mb-2 md:mb-4">
                        <div className="absolute inset-0 bg-blue-400 rounded-full blur-md opacity-50 animate-pulse" />
                        <div className="relative w-full h-full bg-gradient-to-tl from-blue-600 to-indigo-500 rounded-full flex items-center justify-center border-2 border-blue-300/50">
                            <Sparkles size={28} className="text-white md:w-8 md:h-8" />
                        </div>
                    </div>

                    <h3 className="text-2xl md:text-5xl font-black text-white mb-1 tracking-tight">
                        {slide.rightName}
                    </h3>

                    <div className={`flex flex-col items-center transition-opacity duration-300 ${versusSide === 'left' ? 'opacity-0 h-0 overflow-hidden md:opacity-100 md:h-auto' : ''}`}>
                        <span className="text-blue-400 font-mono text-[10px] md:text-sm tracking-[0.2em] uppercase font-bold mb-2">
                            {slide.rightRole}
                        </span>
                        <p className="text-center text-blue-100/80 text-xs md:text-base font-light max-w-xs hidden md:block">
                            {slide.rightDesc}
                        </p>
                    </div>
                </div>

                <div className={`absolute bottom-4 md:bottom-16 w-full max-w-sm px-6 transition-all duration-500 z-30 
                    ${versusSide === 'right' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                    <div className="w-full bg-blue-950/60 border border-blue-500/20 rounded-xl p-3 md:p-6 backdrop-blur-md">
                        <h4 className="text-blue-400 font-bold mb-2 text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 border-b border-blue-500/20 pb-2">
                            <Bot size={12} /> Arsenal
                        </h4>
                        <ul className="space-y-1">
                            {slide.rightStats.map((stat, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-200 text-[10px] md:text-sm">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                                    {stat}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
