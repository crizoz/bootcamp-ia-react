import { User, Target, Zap, Sparkles, CheckCircle } from 'lucide-react';

export const RubricGridSlide = ({ slide }) => {
    return (
        <div className="w-full max-w-6xl animate-fadeIn flex flex-col items-center gap-10 px-4 h-full justify-center">

            {/* Title and subtitle */}
            <div className="text-center">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight">
                    {slide.title}
                </h2>
                <p className="text-xl text-amber-200/80 max-w-2xl mx-auto font-light">
                    {slide.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative">
                <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none hidden md:block" />

                {slide.items.map((item, idx) => {
                    // Icon resolver based on rubric item configuration
                    const Icon = {
                        Fingerprint: User,
                        Target: Target,
                        Zap: Zap,
                        Lightbulb: Sparkles
                    }[item.icon] || CheckCircle;

                    return (
                        <div
                            key={idx}
                            className="group relative bg-slate-900/60 border border-white/10 p-6 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                        >
                            {/* Hover background accent */}
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex gap-5 items-start">
                                <div className="bg-white/5 p-4 rounded-xl border border-white/10 group-hover:bg-amber-500/20 group-hover:border-amber-500/50 group-hover:text-amber-400 transition-all text-gray-400">
                                    <Icon size={32} />
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl font-black text-white uppercase tracking-wide group-hover:text-amber-100 transition-colors">
                                            {item.title}
                                        </h3>
                                        <span className="text-xs font-mono text-gray-600 group-hover:text-amber-500 transition-colors">
                                            0{idx + 1}
                                        </span>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {item.desc}
                                    </p>

                                    {/* Visual progress indicator (purely decorative) */}
                                    <div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-amber-500 w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                                    </div>

                                    <div className="flex justify-end mt-1">
                                        <span className="text-[10px] font-mono text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                                            CHECK PASSED
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
