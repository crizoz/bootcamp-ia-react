import React, { useState } from 'react';
import { MessageCircle, Sparkles, Layout } from 'lucide-react';

export const VersusSlide2 = ({ slide }) => {
    const [versusSide, setVersusSide] = useState(null);

    // LÓGICA DE TAMAÑO ADAPTATIVA
    const getSizeClasses = (side) => {
        const isSelected = versusSide === side;

        let classes = "relative flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden ";

        if (versusSide === null) {
            classes += "h-1/2 w-full md:h-full md:w-1/2";
        } else if (isSelected) {
            classes += "h-[60%] w-full md:h-full md:w-[60%]";
        } else {
            classes += "h-[40%] w-full md:h-full md:w-[40%]";
        }
        return classes;
    };

    // MANEJADOR DE INTERACCIÓN
    const handleInteraction = (side) => {
        if (versusSide === side) setVersusSide(null);
        else setVersusSide(side);
    };

    return (
        <div className="w-full h-[85vh] md:h-[65vh] max-w-6xl flex flex-col md:flex-row relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-white/10 shadow-2xl bg-slate-900 mx-auto group/container">

            <h2 className="absolute top-4 md:top-6 left-0 right-0 text-center text-xl md:text-4xl font-black uppercase tracking-[0.2em] text-white/20 z-20 pointer-events-none select-none mix-blend-overlay">
                {slide.title}
            </h2>
            <div
                onMouseEnter={() => setVersusSide('left')}
                onMouseLeave={() => setVersusSide(null)}
                onClick={() => handleInteraction('left')}
                className={`${getSizeClasses('left')} group/left cursor-pointer border-b md:border-b-0 md:border-r border-white/5 bg-slate-900`}
            >
                {/* Fondos y Gradientes */}
                <div className={`absolute inset-0 bg-gradient-to-br from-teal-900/90 via-emerald-950/90 to-black transition-opacity duration-700 ${versusSide === 'right' ? 'opacity-30' : 'opacity-100'}`}></div>
                <div className={`absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-teal-500/10 blur-[60px] md:blur-[120px] rounded-full transition-[transform,opacity] duration-700 ${versusSide === 'left' ? 'scale-110 opacity-60' : 'scale-75 opacity-20'}`}></div>

                {/* Contenido Principal */}
                <div className={`relative z-20 flex flex-col items-center w-full max-w-lg transition-transform duration-500 ease-out px-4
                    ${versusSide === 'left' ? '-translate-y-4 md:-translate-y-20' : versusSide === 'right' ? 'scale-90 opacity-40 blur-[2px] translate-y-0' : 'translate-y-0'}
                `}>
                    {/* Icono SVG */}
                    <div className="relative w-14 h-14 md:w-24 md:h-24 mb-3 md:mb-6 shrink-0">
                        <div className="absolute inset-0 bg-teal-400 rounded-full blur-md opacity-50 animate-pulse group-hover/left:opacity-100 transition-opacity"></div>
                        <div className="relative w-full h-full bg-gradient-to-tr from-teal-600 to-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(20,184,166,0.6)] group-hover/left:rotate-12 transition-transform duration-500 border-2 border-teal-300/50">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-10 md:h-10 text-white drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0916-2.3229L15.0859 7.28l.9652.563-5.666 3.269zM19.345 9.87l-5.6708 3.2642-.9652-.563 5.6707-3.2641zm-6.7237 5.253L6.965 11.87l-.9652.5583 5.666 3.269z" />
                            </svg>
                        </div>
                    </div>

                    <h3 className="text-2xl md:text-5xl font-black text-white mb-1 md:mb-2 tracking-tight drop-shadow-lg">{slide.leftName}</h3>
                    <div className="px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/30 mb-2 md:mb-5">
                        <span className="text-teal-300 font-mono text-[10px] md:text-sm tracking-[0.2em] uppercase font-bold">
                            {slide.leftRole}
                        </span>
                    </div>
                    <div className={`transition-opacity duration-300 ${versusSide === 'right' ? 'opacity-0 h-0 overflow-hidden md:h-auto md:opacity-100' : 'opacity-100'}`}>
                        <p className="text-center text-teal-100/90 text-xs md:text-base leading-relaxed font-light max-w-sm hidden md:block">
                            {slide.leftDesc}
                        </p>
                    </div>
                </div>
                <div className={`absolute bottom-4 md:bottom-16 w-full max-w-sm px-6 transition-all ease-out z-30 
                    ${versusSide === 'left' ? 'opacity-100 translate-y-0 duration-700 delay-100' : 'opacity-0 translate-y-8 duration-150 pointer-events-none'}`}>
                    <div className="w-full bg-black/40 border-l-2 border-teal-500 rounded-r-xl p-3 md:p-5 backdrop-blur-xl shadow-xl">
                        <h4 className="text-teal-400 font-bold mb-2 md:mb-3 text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 pb-2 border-b border-teal-500/10">
                            <MessageCircle size={14} /> Habilidades Clave
                        </h4>
                        <ul className="space-y-1 md:space-y-3">
                            {slide.leftStats && slide.leftStats.map((stat, i) => (
                                <li key={i} className="flex items-center gap-2 md:gap-3 text-gray-300 text-[10px] md:text-sm font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]"></div>
                                    {stat}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`absolute z-40 pointer-events-none transition-all duration-700 ease-out
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                ${versusSide === 'left' ? 'md:translate-x-[20vw] md:rotate-12 translate-y-[15vh] md:translate-y-[-50%] scale-110' : ''} 
                ${versusSide === 'right' ? 'md:-translate-x-[20vw] md:-rotate-12 -translate-y-[15vh] md:translate-y-[-50%] scale-110' : ''}
            `}>
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-24 h-48 md:w-32 md:h-64 bg-white/20 blur-[60px] mix-blend-overlay"></div>
                    <span className="relative z-10 text-5xl md:text-8xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">VS</span>
                </div>
            </div>
            <div
                onMouseEnter={() => setVersusSide('right')}
                onMouseLeave={() => setVersusSide(null)}
                onClick={() => handleInteraction('right')}
                className={`${getSizeClasses('right')} group/right cursor-pointer bg-slate-900`}
            >
                <div className={`absolute inset-0 bg-gradient-to-bl from-indigo-900/90 via-slate-900/95 to-black transition-opacity duration-700 ${versusSide === 'left' ? 'opacity-30' : 'opacity-100'}`}></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] opacity-50"></div>
                <div className={`absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-indigo-500/10 blur-[60px] md:blur-[120px] rounded-full transition-[transform,opacity] duration-700 ${versusSide === 'right' ? 'scale-110 opacity-60' : 'scale-75 opacity-20'}`}></div>
                <div className={`relative z-20 flex flex-col items-center w-full max-w-lg transition-transform duration-500 ease-out px-4
                    ${versusSide === 'right' ? '-translate-y-4 md:-translate-y-20' : versusSide === 'left' ? 'scale-90 opacity-40 blur-[2px] translate-y-0' : 'translate-y-0'}
                `}>
                    <div className="relative w-14 h-14 md:w-24 md:h-24 mb-3 md:mb-6 shrink-0">
                        <div className="absolute inset-0 bg-indigo-400 rounded-full blur-xl opacity-40 animate-pulse group-hover/right:opacity-80 transition-opacity"></div>
                        <div className="relative w-full h-full bg-gradient-to-tl from-indigo-600 to-blue-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.5)] group-hover/right:-rotate-12 transition-transform duration-500 border border-indigo-300/30">
                            <Sparkles size={28} className="text-white drop-shadow-lg md:w-10 md:h-10" />
                        </div>
                    </div>
                    <h3 className="text-2xl md:text-5xl font-black text-white mb-1 md:mb-2 tracking-tight drop-shadow-lg">{slide.rightName}</h3>
                    <div className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-2 md:mb-5">
                        <span className="text-indigo-300 font-mono text-[10px] md:text-sm tracking-[0.2em] uppercase font-bold">
                            {slide.rightRole}
                        </span>
                    </div>
                    <div className={`transition-opacity duration-300 ${versusSide === 'left' ? 'opacity-0 h-0 overflow-hidden md:h-auto md:opacity-100' : 'opacity-100'}`}>
                        <p className="text-center text-indigo-100/90 text-xs md:text-base leading-relaxed font-light max-w-sm hidden md:block">
                            {slide.rightDesc}
                        </p>
                    </div>
                </div>
                <div className={`absolute bottom-4 md:bottom-16 w-full max-w-sm px-6 transition-all ease-out z-30 
                    ${versusSide === 'right' ? 'opacity-100 translate-y-0 duration-700 delay-100' : 'opacity-0 translate-y-8 duration-150 pointer-events-none'}`}>
                    <div className="w-full bg-black/40 border-r-2 border-indigo-500 rounded-l-xl p-3 md:p-5 backdrop-blur-xl shadow-xl text-right">
                        <h4 className="text-indigo-400 font-bold mb-2 md:mb-3 text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-end gap-2 pb-2 border-b border-indigo-500/10">
                            Habilidades Clave <Layout size={14} />
                        </h4>
                        <ul className="space-y-1 md:space-y-3">
                            {slide.rightStats && slide.rightStats.map((stat, i) => (
                                <li key={i} className="flex items-center justify-end gap-2 md:gap-3 text-gray-300 text-[10px] md:text-sm font-medium">
                                    {stat}
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]"></div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};