import { Terminal, ArrowRight, CheckSquare, Bot } from 'lucide-react';

export const RubricSimulationSlide = ({ slide }) => {

    return (
        <div className="w-full max-w-6xl animate-fadeIn flex flex-col items-center gap-10 px-4 h-full justify-center">

            {/* Title and subtitle */}
            <div className="text-center">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight">
                    {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-orange-200/80 font-light">
                    {slide.subtitle}
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 w-full items-stretch justify-center">

                {/* Prompt construction panel */}
                <div className="flex-1 bg-slate-900/60 border border-white/10 rounded-[2rem] p-8 backdrop-blur-md flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6 text-orange-400">
                        <Terminal size={24} />
                        <h3 className="text-xl font-bold font-mono tracking-widest uppercase">
                            Input: El Prompt Perfecto
                        </h3>
                    </div>

                    <div className="space-y-4">
                        {slide.promptFormula.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-black/30 rounded-xl p-4 border-l-4 border-orange-500 flex flex-col gap-1"
                            >
                                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">
                                    {item.label}
                                </span>
                                <p className="text-white font-mono text-sm md:text-base">
                                    "{item.text}"
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Visual flow indicator */}
                    <div className="mt-6 flex items-center justify-center">
                        <ArrowRight className="text-white/20 rotate-90 lg:rotate-0 w-8 h-8 animate-bounce" />
                    </div>
                </div>

                {/* AI evaluation result panel */}
                <div className="flex-1 bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <CheckSquare size={120} className="text-white" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <Bot size={28} className="text-indigo-400" />
                                Evaluación Gemini
                            </h3>
                            <span className="bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
                                Nota Final: 5.8
                            </span>
                        </div>

                        <div className="space-y-6">
                            {slide.simulation.map((item, idx) => (
                                <div key={idx} className="group">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-gray-300 font-medium text-sm md:text-base">
                                            {item.criteria}
                                        </span>
                                        <span className="text-white font-bold font-mono">
                                            {item.score}{' '}
                                            <span className="text-gray-500 text-xs">
                                                / {item.max}
                                            </span>
                                        </span>
                                    </div>

                                    {/* Animated score bar */}
                                    <div className="w-full h-3 bg-slate-700/50 rounded-full overflow-hidden mb-2">
                                        <div
                                            className={`h-full ${item.color} rounded-full shadow-[0_0_10px_currentColor]`}
                                            style={{
                                                width: `${(item.score / item.max) * 100}%`,
                                                transition: 'width 1.5s ease-out',
                                                animation: `growWidth 1.5s ease-out forwards ${idx * 0.3}s`
                                            }}
                                        />
                                    </div>

                                    <p className="text-xs text-gray-400 italic pl-2 border-l-2 border-white/10">
                                        "{item.feedback}"
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Disclaimer */}
                        <div className="mt-8 pt-4 border-t border-white/10 text-center">
                            <p className="text-orange-200/60 text-sm">
                                *Gemini detecta automáticamente tus debilidades.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Local keyframes for progress animation */}
            <style>{`
              @keyframes growWidth {
                from { width: 0%; opacity: 0; }
                to { opacity: 1; }
              }
            `}</style>
        </div>
    );
};
