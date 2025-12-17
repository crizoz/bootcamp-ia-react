import React, { useState } from 'react';
import { Terminal, User, Cpu, Code2, ShieldCheck, Check } from 'lucide-react';

export const IdeChecklistSlide = ({ slide }) => {
    const [completedSteps, setCompletedSteps] = useState([]);

    const toggleStep = (index) => {
        setCompletedSteps(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        /*
         * Fixed viewport-based height to prevent the slide from exceeding screen size.
         * Forces internal scrolling instead of breaking the layout.
         */
        <div className="w-full max-w-5xl h-[85vh] md:h-[75vh] flex flex-col items-center justify-center animate-fadeIn px-2 md:px-0">

            <div className="w-full bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-white/10 flex flex-col h-full relative">

                {/* Fixed header (non-scrollable) */}
                <div className="bg-[#2d2d2d] px-3 md:px-4 py-2 md:py-3 flex items-center justify-between border-b border-black/50 shrink-0 z-20">
                    <div className="flex gap-1.5 md:gap-2">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80" />
                    </div>

                    <div className="text-gray-400 font-mono text-[10px] md:text-xs flex items-center gap-2 opacity-70">
                        <Terminal size={10} className="md:w-3 md:h-3" />
                        <span className="truncate max-w-[150px] md:max-w-none">
                            bash — setup_agent.sh
                        </span>
                    </div>

                    <div className="w-8 md:w-10" />
                </div>

                {/* Scrollable content container */}
                <div className="flex-1 p-4 md:p-12 font-mono flex flex-col relative overflow-y-auto custom-scrollbar scroll-smooth">

                    {/* Subtle decorative grid background */}
                    <div
                        className="absolute inset-0 opacity-5 pointer-events-none z-0"
                        style={{
                            backgroundImage:
                                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }}
                    />

                    {/* Content wrapper (centers vertically when possible) */}
                    <div className="z-10 flex flex-col justify-start md:justify-center min-h-full">

                        {/* Title */}
                        <div className="mb-6 md:mb-10 text-center mt-2 md:mt-0 shrink-0">
                            <h2 className="text-2xl sm:text-3xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-2 md:mb-4 tracking-tighter leading-tight">
                                {'>'} {slide.title}
                                <span className="animate-pulse">_</span>
                            </h2>
                            <p className="text-gray-400 text-xs sm:text-sm md:text-xl font-light">
                                // {slide.subtitle}
                            </p>
                        </div>

                        {/* Tasks grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 pb-4 shrink-0">
                            {slide.tasks.map((task, index) => {
                                const isCompleted = completedSteps.includes(index);

                                const colors = {
                                    blue: 'border-blue-500',
                                    purple: 'border-purple-500',
                                    green: 'border-green-500',
                                    red: 'border-red-500'
                                };

                                const textColors = {
                                    blue: 'text-blue-400',
                                    purple: 'text-purple-400',
                                    green: 'text-green-400',
                                    red: 'text-red-400'
                                };

                                const Icons = [User, Cpu, Code2, ShieldCheck];
                                const CurrentIcon = Icons[index] || Terminal;

                                return (
                                    <div
                                        key={index}
                                        onClick={() => toggleStep(index)}
                                        className={`group relative bg-[#252526] border-l-4 rounded-r-lg transition-all duration-300 cursor-pointer
                                            ${isCompleted
                                                ? 'border-emerald-500 bg-[#2a2d2a]'
                                                : colors[task.color]}
                                            hover:bg-[#2a2a2d] active:scale-[0.98] p-3 md:p-5
                                        `}
                                    >
                                        <div className="flex items-start gap-3 md:gap-4">

                                            {/* Step number */}
                                            <div
                                                className={`text-lg md:text-2xl font-black transition-opacity
                                                    ${isCompleted
                                                        ? 'text-emerald-500 opacity-100'
                                                        : `${textColors[task.color]} opacity-30 group-hover:opacity-100`
                                                    }`}
                                            >
                                                {task.step}
                                            </div>

                                            <div className="flex-1">
                                                <h3
                                                    className={`font-bold text-[10px] md:text-sm mb-1 tracking-wider uppercase flex items-center gap-2
                                                        ${isCompleted
                                                            ? 'text-emerald-400'
                                                            : textColors[task.color]
                                                        }`}
                                                >
                                                    <CurrentIcon size={14} className="md:w-4 md:h-4" />
                                                    <span className={isCompleted ? 'line-through opacity-70' : ''}>
                                                        {task.label}
                                                    </span>
                                                </h3>

                                                <p
                                                    className={`text-[10px] sm:text-xs md:text-base leading-relaxed transition-colors
                                                        ${isCompleted ? 'text-gray-500' : 'text-gray-300'}
                                                    `}
                                                >
                                                    {task.text}
                                                </p>
                                            </div>

                                            {/* Completion checkbox */}
                                            <div
                                                className={`w-5 h-5 md:w-6 md:h-6 border rounded flex items-center justify-center transition-colors shrink-0
                                                    ${isCompleted
                                                        ? 'border-emerald-500 bg-emerald-500/20'
                                                        : 'border-gray-600 group-hover:border-white'
                                                    }`}
                                            >
                                                {isCompleted ? (
                                                    <Check size={14} className="text-emerald-500 md:w-4 md:h-4" />
                                                ) : (
                                                    <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Footer status */}
                        <div className="mt-4 md:mt-10 text-center pb-6 shrink-0">
                            <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-green-900/20 border border-green-500/30 rounded text-green-400 text-[10px] md:text-xs font-mono animate-pulse">
                                {completedSteps.length === slide.tasks.length
                                    ? 'SYSTEM READY. INITIALIZING AGENT...'
                                    : 'WAITING FOR USER INPUT...'}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Custom scrollbar styles */}
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #1e1e1e;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #444;
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
            `}</style>
        </div>
    );
};
