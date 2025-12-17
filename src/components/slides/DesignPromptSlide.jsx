import React, { useState, useEffect } from 'react';
import { Terminal, Zap, Share2 } from 'lucide-react';

export const DesignPromptSlide = ({ slide }) => {
    const [scanProgress, setScanProgress] = useState(0);

    // Simulates scanning progress animation
    useEffect(() => {
        setScanProgress(0);
        const interval = setInterval(() => {
            setScanProgress(prev => (prev >= 100 ? 100 : prev + 1));
        }, 35);

        return () => clearInterval(interval);
    }, [slide]);

    return (
        <div className="w-full h-[85vh] md:h-full overflow-y-auto custom-scrollbar flex flex-col items-center px-4 py-6 md:justify-center animate-fadeIn">
            <div className="w-full max-w-6xl flex flex-col gap-6 md:gap-10 pb-8">

                {/* Header */}
                <div className="text-center shrink-0">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-2 md:mb-3 uppercase tracking-tight leading-tight">
                        {slide.title}
                    </h2>
                    <p className="text-base md:text-xl text-orange-200/80 font-light">
                        {slide.subtitle}
                    </p>
                </div>

                {/* Main Content */}
                <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch shrink-0">

                    {/* Left: Prompt Console */}
                    <div className="w-full lg:flex-1 bg-slate-900/80 p-6 md:p-8 rounded-3xl md:rounded-[2rem] border border-white/10 flex flex-col justify-between shadow-xl backdrop-blur-md min-h-[200px]">
                        <div>
                            <div className="flex items-center gap-3 mb-4 md:mb-6 text-indigo-400 text-xs md:text-sm font-bold uppercase border-b border-white/5 pb-3 md:pb-4">
                                <Terminal size={16} className="md:w-[18px]" />
                                Generation Console
                            </div>

                            <p className="text-gray-500 font-mono text-[10px] md:text-xs mb-2">
                                user@assistant:~$ /imagine prompt:
                            </p>

                            <p className="text-sm md:text-lg text-white font-mono leading-relaxed break-words">
                                "{slide.prompt}"
                            </p>
                        </div>

                        <div className="mt-4 bg-orange-500/10 border border-orange-500/30 p-3 rounded-xl flex gap-3 items-start">
                            <Zap size={16} className="text-orange-400 mt-0.5 shrink-0" />
                            <p className="text-[10px] md:text-xs text-orange-200 leading-snug">
                                <strong>Tip:</strong> Usa prompts que combinen concepto + visualización concreta + estilo claro, por ejemplo: “Explica X como una ilustración clara y educativa”.
                            </p>
                        </div>
                    </div>

                    {/* Right: Visual Scanner */}
                    <div className="w-full lg:flex-1 relative aspect-square lg:aspect-auto lg:h-[450px] bg-black rounded-3xl md:rounded-[2rem] border-2 border-dashed border-white/10 overflow-hidden shadow-2xl group shrink-0">

                        {/* Technical grid background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                        {/* Revealed artwork */}
                        <div
                            className="absolute inset-0 w-full h-full bg-slate-900 transition-all duration-75"
                            style={{ clipPath: `inset(0 0 ${100 - scanProgress}% 0)` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900"></div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-indigo-500/20 rounded-full blur-[50px]"></div>

                            {/* Responsive geometric SVG */}
                            <svg
                                className="absolute inset-0 w-full h-full p-8 md:p-12"
                                viewBox="0 0 400 400"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="rgb(99,102,241)" />
                                        <stop offset="100%" stopColor="rgb(249,115,22)" />
                                    </linearGradient>
                                </defs>

                                <path d="M200 50 L350 125 L350 275 L200 350 L50 275 L50 125 Z" fill="none" stroke="url(#grad1)" strokeWidth="4" />
                                <path d="M200 50 L200 350" fill="none" stroke="url(#grad1)" strokeWidth="2" strokeDasharray="10,5" />
                                <path d="M50 125 L200 200 L350 125" fill="none" stroke="url(#grad1)" strokeWidth="2" />
                                <path d="M50 275 L200 200 L350 275" fill="none" stroke="url(#grad1)" strokeWidth="2" />

                                <circle cx="200" cy="200" r="40" fill="rgba(255,255,255,0.1)" stroke="white" strokeWidth="1" />
                                <circle cx="200" cy="50" r="10" fill="#f97316" className="animate-pulse" />
                                <circle cx="350" cy="275" r="10" fill="#6366f1" className="animate-pulse delay-75" />
                                <circle cx="50" cy="275" r="10" fill="#6366f1" className="animate-pulse delay-150" />
                            </svg>

                            <div className="absolute bottom-4 right-6 text-white/30 text-[8px] md:text-[10px] font-mono tracking-widest uppercase">
                                Render_Engine_V4.0 // 4K
                            </div>
                        </div>

                        {/* Scanning line */}
                        {scanProgress < 100 && (
                            <div
                                className="absolute left-0 w-full h-1 bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,1)] z-20 transition-all duration-75 ease-linear"
                                style={{ top: `${scanProgress}%` }}
                            >
                                <div className="absolute right-2 -top-6 text-orange-400 font-mono text-xs font-bold">
                                    {scanProgress}%
                                </div>
                            </div>
                        )}

                        {/* Overlay UI */}
                        <div className="absolute inset-0 pointer-events-none">
                            {scanProgress < 100 ? (
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="text-orange-500/80 font-mono text-xs md:text-sm tracking-widest animate-pulse bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm border border-orange-500/20 whitespace-nowrap">
                                        {slide.placeholderText || 'GENERATING...'}
                                    </div>
                                </div>
                            ) : (
                                <div className="absolute top-4 right-4 pointer-events-auto animate-fadeIn">
                                    <button className="bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-md p-2 rounded-lg transition-all shadow-lg">
                                        <Share2 size={16} className="text-white md:w-[18px]" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

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
