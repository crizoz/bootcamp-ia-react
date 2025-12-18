import { Ghost, XCircle, CheckCircle, Sparkles } from 'lucide-react';

export const ComparisonVerticalSlide = ({ slide }) => {
    return (
        <div className="w-full h-full max-w-6xl animate-fadeIn flex flex-col justify-center mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-6 md:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-purple-200 drop-shadow-sm">
                {slide.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-4">

                {/* Generic / low-context prompt example */}
                <div className="group relative bg-slate-800/50 border border-slate-700 p-6 rounded-3xl backdrop-blur-sm transition-all duration-500 hover:bg-slate-800/80">
                    <div className="absolute -top-4 -left-4 bg-slate-700 text-slate-400 p-3 rounded-2xl shadow-xl border border-slate-600">
                        <Ghost size={24} />
                    </div>

                    <h3 className="text-lg font-bold text-slate-400 mb-4 tracking-widest uppercase border-b border-slate-700 pb-2 flex justify-between">
                        Prompt Genérico
                        <XCircle size={20} className="text-red-500/70" />
                    </h3>

                    <div className="bg-black/30 p-4 rounded-xl mb-6 font-mono text-sm text-slate-400 border border-white/5">
                        &gt; "{slide.bad}"
                    </div>

                    <div className="space-y-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                            Respuesta Generada:
                        </p>
                        <div className="bg-slate-200 text-slate-800 p-4 rounded-r-2xl rounded-bl-2xl text-sm leading-relaxed shadow-inner font-serif italic">
                            "{slide.badOutput}"
                        </div>
                    </div>
                </div>

                {/* Expert / high-context prompt example */}
                <div className="group relative bg-gradient-to-br from-indigo-900/60 to-purple-900/60 border border-indigo-500/30 p-6 rounded-3xl backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]">
                    <div className="absolute -top-6 -right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white p-3 rounded-2xl shadow-xl shadow-orange-500/20 rotate-3 group-hover:rotate-6 transition-transform z-10">
                        <Sparkles size={28} className="animate-pulse" />
                    </div>

                    <h3 className="text-lg font-bold text-indigo-300 mb-4 tracking-widest uppercase border-b border-indigo-500/30 pb-2 flex justify-between">
                        Prompt Experto
                        <CheckCircle size={20} className="text-green-400" />
                    </h3>

                    <div className="bg-black/40 p-4 rounded-xl mb-6 font-mono text-sm text-indigo-100 border border-indigo-400/20 relative overflow-hidden">
                        <p>
                            Eres <span className="text-amber-400 font-bold">"Profe Max"</span>, un experto...
                        </p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs text-indigo-300 uppercase font-bold tracking-wider flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            Respuesta Experto:
                        </p>

                        <div className="bg-white text-indigo-950 p-4 rounded-2xl rounded-tl-none text-sm leading-relaxed shadow-lg font-medium relative transform transition-all duration-300 group-hover:translate-x-1">
                            <div className="absolute top-0 -left-2 w-0 h-0 border-t-[10px] border-t-white border-l-[10px] border-l-transparent"></div>
                            "{slide.goodOutput}"
                        </div>
                    </div>
                </div>
            </div>

            {/* Key takeaway */}
            <div className="mt-8 md:mt-10 flex justify-center">
                <div className="bg-slate-900/80 border border-white/10 px-8 py-3 rounded-full backdrop-blur-xl shadow-2xl flex items-center gap-3 animate-bounce-slow">
                    <span className="text-2xl">💡</span>
                    <p className="text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-purple-300">
                        {slide.result}
                    </p>
                </div>
            </div>
        </div>
    );
};
