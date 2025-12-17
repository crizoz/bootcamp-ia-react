import {
    Power,
    Cpu,
    Layers,
    ShieldCheck,
    Eye,
    ToggleLeft,
    ToggleRight,
    Copy,
    Terminal,
    CheckCircle
} from 'lucide-react';

export const FinalChecklistSlide = ({ slide }) => {
    return (
        <div className="w-full max-w-6xl animate-fadeIn flex flex-col items-center gap-8 px-4 h-full justify-center">

            {/* Header */}
            <div className="text-center z-10">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/50 text-amber-400 backdrop-blur-md">
                    <Power size={16} className="animate-pulse" />
                    <span className="text-xs font-bold tracking-widest uppercase">
                        Startup Sequence
                    </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight drop-shadow-2xl uppercase">
                    {slide.title}
                </h2>

                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                    {slide.subtitle}
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 w-full items-center justify-center">

                {/* Checklist levels */}
                <div className="w-full max-w-xl grid gap-4">
                    {slide.levels.map((level, idx) => {
                        // Icon mapping driven by slide configuration
                        const Icon = {
                            Cpu,
                            Database: Layers,
                            ShieldCheck,
                            Eye
                        }[level.icon] || CheckCircle;

                        return (
                            <div
                                key={idx}
                                className="group relative bg-slate-900/80 border border-white/10 p-4 rounded-xl flex items-center justify-between
                                           hover:border-amber-500/50 transition-all duration-300
                                           hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="w-12 h-12 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center
                                                    text-gray-500 group-hover:text-amber-400 group-hover:border-amber-500 transition-all">
                                        <Icon size={24} />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-amber-100 transition-colors">
                                            {level.name}
                                        </h3>
                                        <p className="text-sm text-gray-400 group-hover:text-gray-300">
                                            {level.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Visual toggle indicator (state is illustrative, not interactive logic) */}
                                <div className="relative z-10 pl-4">
                                    <div className="text-gray-600 group-hover:text-green-400 transition-colors duration-300 transform group-hover:scale-110">
                                        <div className="group-hover:hidden">
                                            <ToggleLeft size={40} />
                                        </div>
                                        <div className="hidden group-hover:block">
                                            <ToggleRight size={40} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Master prompt card */}
                <div className="w-full max-w-md">
                    <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-white/20 p-1 rounded-2xl shadow-2xl
                                    transform rotate-1 hover:rotate-0 transition-transform duration-500">
                        <div className="bg-black/80 rounded-xl p-6 border border-white/5 flex flex-col gap-4 relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-red-500 to-amber-500 opacity-50" />

                            <div className="flex items-center justify-between text-amber-500 mb-2">
                                <span className="text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-2">
                                    <Terminal size={14} />
                                    System Key
                                </span>
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse delay-75" />
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-150" />
                                </div>
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed font-mono bg-white/5 p-4 rounded-lg border border-white/10">
                                {slide.usageTip}
                            </p>

                            <button
                                onClick={() => navigator.clipboard.writeText('Prompt copied')}
                                className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg shadow-lg
                                           flex items-center justify-center gap-2 transition-all active:scale-95 group/btn"
                            >
                                <Copy size={18} className="group-hover/btn:scale-110 transition-transform" />
                                COPY MASTER PROMPT
                            </button>

                            <p className="text-[10px] text-center text-gray-600 uppercase tracking-widest mt-2">
                                Access Granted // Level 4
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
