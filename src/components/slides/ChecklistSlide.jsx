import React from 'react';
import { CheckSquare, MessageCircle, Sparkles } from 'lucide-react';

export const ChecklistSlide = ({ slide }) => {
    return (
        <div className="flex flex-col items-center animate-fadeIn w-full max-w-5xl px-4 h-full justify-center">

            {/* Header section */}
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 mb-4 px-5 py-2 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <CheckSquare size={20} className="animate-pulse" />
                    <span className="text-sm md:text-base font-mono font-bold tracking-widest">
                        ESTADO DE MISIÓN: ACTIVO
                    </span>
                </div>

                <h2 className="text-4xl md:text-7xl font-black text-white leading-none tracking-tight drop-shadow-2xl">
                    {slide.title}
                </h2>

                <p className="text-lg md:text-2xl text-slate-400 mt-4 font-light max-w-2xl mx-auto">
                    {slide.subtitle}
                </p>
            </div>

            {/* Task list */}
            <div className="w-full grid gap-4 relative z-10">
                {slide.tasks.map((task, index) => {
                    const isGpt = task.tool === 'ChatGPT';

                    // Conditional styling based on the tool type
                    const borderClass = isGpt
                        ? 'group-hover:border-emerald-500/50'
                        : 'group-hover:border-indigo-500/50';

                    const bgHoverClass = isGpt
                        ? 'group-hover:bg-emerald-900/20'
                        : 'group-hover:bg-indigo-900/20';

                    const iconBg = isGpt ? 'bg-emerald-500' : 'bg-indigo-500';
                    const textColor = isGpt ? 'text-emerald-300' : 'text-indigo-300';

                    return (
                        <div
                            key={index}
                            className={`
                                relative group bg-slate-900/60 border border-white/10
                                p-4 md:p-6 rounded-2xl flex items-center gap-4 md:gap-6
                                transition-all duration-300 backdrop-blur-md
                                hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl
                                ${borderClass} ${bgHoverClass}
                            `}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Step indicator / completion state */}
                            <div
                                className={`
                                    w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center
                                    font-black text-xl md:text-2xl shrink-0 transition-all duration-300
                                    bg-white/5 text-white/40 shadow-inner
                                    group-hover:text-white group-hover:scale-110
                                    group-hover:${iconBg}
                                `}
                            >
                                <span className="group-hover:hidden">{index + 1}</span>
                                <CheckSquare className="hidden group-hover:block w-6 h-6 md:w-8 md:h-8 animate-bounce" />
                            </div>

                            {/* Task content */}
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                    <span
                                        className={`
                                            text-xs font-mono font-bold uppercase tracking-wider
                                            px-2 py-0.5 rounded border border-white/10 bg-white/5
                                            ${textColor}
                                        `}
                                    >
                                        {task.tool}
                                    </span>
                                </div>

                                <h3 className="text-xl md:text-3xl font-bold text-white mb-1 transition-colors">
                                    {task.title}
                                </h3>

                                <p className="text-sm md:text-base text-gray-400 font-mono group-hover:text-gray-300">
                                    {task.desc}
                                </p>
                            </div>

                            {/* Decorative icon (hover-only, desktop) */}
                            <div
                                className={`
                                    hidden md:flex absolute right-4 scale-150
                                    opacity-0 group-hover:opacity-20
                                    transition-opacity duration-500
                                    ${textColor}
                                `}
                            >
                                {isGpt ? <MessageCircle size={60} /> : <Sparkles size={60} />}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
