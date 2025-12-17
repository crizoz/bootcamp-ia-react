import { Terminal } from 'lucide-react';

export const BigStatementSlide = ({ slide, theme = 'indigo' }) => {

    /**
     * Theme-based visual configuration.
     * Allows the same slide layout to be reused across modules
     * while preserving strong visual identity per section.
     */
    const styles = {
        indigo: {
            topLine: "from-blue-600 via-purple-500 to-indigo-400",
            pretitle: "text-blue-400/80",
            boxGlow: "from-blue-600 via-indigo-600 to-purple-600",
            highlight: "from-cyan-400 to-blue-500"
        },
        emerald: {
            topLine: "from-emerald-600 via-teal-500 to-cyan-400",
            pretitle: "text-emerald-400/80",
            boxGlow: "from-emerald-600 via-teal-600 to-cyan-600",
            highlight: "from-teal-400 to-emerald-500"
        },
        orange: {
            topLine: "from-orange-600 via-amber-500 to-yellow-400",
            pretitle: "text-orange-400/80",
            boxGlow: "from-orange-600 via-amber-600 to-yellow-600",
            highlight: "from-amber-400 to-orange-500"
        },
        amber: {
            topLine: "from-red-600 via-amber-500 to-yellow-400",
            pretitle: "text-red-400/80",
            boxGlow: "from-red-600 via-amber-600 to-yellow-500",
            highlight: "from-amber-400 to-red-500"
        }
    };

    const s = styles[theme] || styles.indigo;

    return (
        <div className="flex flex-col items-center justify-center animate-fadeIn w-full h-full p-4 overflow-hidden">
            <div className="relative w-full max-w-[90vw] bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl p-12 md:p-16 flex flex-col items-center gap-8 shadow-2xl overflow-hidden">

                {/* Decorative top accent tied to the active theme */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${s.topLine} opacity-60`} />

                {/* Optional terminal-style pretitle for contextual framing */}
                {slide.pretitle && (
                    <div
                        className={`absolute top-4 md:top-8 left-6 md:left-10 flex items-center gap-2 ${s.pretitle} font-mono text-xs md:text-sm tracking-widest`}
                    >
                        <Terminal size={14} />
                        {slide.pretitle}
                    </div>
                )}

                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight mt-4 text-center uppercase">
                    {slide.title}
                </h2>

                {/* Main statement container with theme-driven glow effect */}
                <div className="relative group w-auto inline-block mt-4 max-w-full">
                    <div
                        className={`absolute -inset-4 bg-gradient-to-r ${s.boxGlow} rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500`}
                    />
                    <div className="relative bg-gray-900 rounded-2xl px-8 py-6 md:px-12 md:py-8 text-center shadow-2xl flex items-center justify-center h-full">
                        <p className="text-lg md:text-3xl font-medium text-white leading-normal">
                            {slide.content}
                        </p>
                    </div>
                </div>

                {/* Optional emphasis line used as a closing or punchline */}
                {slide.highlight && (
                    <div
                        className={`text-2xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${s.highlight} tracking-tighter drop-shadow-lg mt-6 text-center`}
                    >
                        {slide.highlight}
                    </div>
                )}
            </div>
        </div>
    );
};
