import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ProcessFlowSlide = ({ slide }) => {
    return (
        <div className="text-center space-y-8 md:space-y-12 animate-fadeIn w-full max-w-7xl px-4 h-full flex flex-col justify-center">

            {/* Title and subtitle */}
            <div className="relative z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-emerald-500/20 blur-[60px] rounded-full -z-10" />
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-xl uppercase">
                    {slide.title}
                </h2>
                <div className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                    <p className="text-lg md:text-2xl text-emerald-200 font-light italic">
                        "{slide.subtitle}"
                    </p>
                </div>
            </div>

            {/* Steps container */}
            <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-4 relative">

                {/* Background connector line (desktop only) */}
                <div className="absolute top-[40%] left-10 right-10 h-1 bg-gradient-to-r from-emerald-900/0 via-emerald-500/20 to-emerald-900/0 hidden md:block -translate-y-1/2 z-0" />

                {slide.steps.map((step, idx) => (
                    <React.Fragment key={idx}>

                        {/* Step card */}
                        <div
                            className="relative flex-1 group z-10"
                            style={{ animationDelay: `${idx * 200}ms` }}
                        >
                            <div className="h-full bg-slate-900/80 border border-emerald-500/20 p-6 rounded-[2.5rem] hover:bg-slate-800 hover:border-emerald-400/50 transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] flex flex-col items-center gap-4 backdrop-blur-xl relative overflow-hidden mx-1">

                                {/* Decorative step index */}
                                <span className="absolute -right-2 -top-4 text-[8rem] font-black text-white/5 select-none pointer-events-none group-hover:text-emerald-500/10 transition-colors duration-500">
                                    {idx + 1}
                                </span>

                                {/* Step icon */}
                                <div className="relative p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                                    <div className="text-emerald-300 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]">
                                        {React.cloneElement(step.icon, { size: 36 })}
                                    </div>
                                </div>

                                {/* Step header */}
                                <div className="relative z-10 text-center">
                                    <h3 className="text-2xl font-black text-white uppercase tracking-wide group-hover:text-emerald-300 transition-colors">
                                        {step.title.split('. ')[1] || step.title}
                                    </h3>
                                    <p className="text-emerald-400/80 text-sm font-bold tracking-widest uppercase mt-1">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Step actions */}
                                <div className="w-full mt-2 pt-4 border-t border-white/10 flex flex-col gap-3 text-left">
                                    {step.actions && step.actions.map((action, actionIdx) => (
                                        <div key={actionIdx} className="flex items-start gap-3 group/item">
                                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover/item:bg-emerald-400 group-hover/item:shadow-[0_0_5px_rgba(52,211,153,0.8)] transition-all shrink-0" />
                                            <p className="text-gray-400 text-xs md:text-sm font-medium leading-tight group-hover/item:text-gray-200 transition-colors">
                                                {action}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Step connector */}
                        {idx < slide.steps.length - 1 && (
                            <div className="flex items-center justify-center relative z-20 py-2 md:py-0 md:px-1">
                                <div className="md:hidden text-emerald-500/50 animate-bounce">
                                    <ArrowRight className="rotate-90 w-6 h-6" />
                                </div>
                                <div className="hidden md:flex gap-1 opacity-50 items-center -mt-20">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse delay-75" />
                                    <ArrowRight className="text-emerald-400 w-5 h-5 ml-1 animate-pulse" />
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
