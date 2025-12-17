import { Share2, Brain, Layers, MessageSquare, Bot, FileText } from 'lucide-react';

export const MindMapSlide = ({ slide }) => {
    return (
        // Uses flexible height and vertical scrolling to support small screens
        <div className="w-full max-w-6xl animate-fadeIn flex flex-col items-center gap-6 px-4 py-8 h-full md:justify-center overflow-y-auto custom-scrollbar">

            {/* Header */}
            <div className="text-center z-10 shrink-0">
                <h2 className="text-3xl md:text-6xl font-black text-white mb-2 tracking-tight drop-shadow-xl">
                    {slide.title}
                </h2>
                <p className="text-base md:text-xl text-indigo-200/80 max-w-3xl mx-auto font-light px-2">
                    {slide.subtitle}
                </p>
            </div>

            {/* Mind map container */}
            {/* Uses stacked layout on mobile and absolute positioning on desktop */}
            <div className="relative w-full h-auto min-h-[600px] md:min-h-0 md:h-[500px] bg-slate-900/40 border border-white/5 rounded-[2rem] md:rounded-[3rem] shadow-2xl backdrop-blur-xl flex flex-col md:block items-center justify-start md:justify-center group/map p-6 md:p-0 gap-8 md:gap-0">

                {/* Decorative radial background */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent rounded-[2rem] md:rounded-[3rem]" />

                {/* Connector lines (desktop only) */}
                {/* Hidden on mobile to avoid visual clutter in stacked layout */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#818cf8" stopOpacity="1" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>
                    <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
                    <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse delay-75" />
                    <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse delay-150" />
                    <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse delay-300" />
                </svg>

                {/* Central node */}
                {/* Relative on mobile, absolutely centered on desktop */}
                <div className="relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 group cursor-default mb-4 md:mb-0 shrink-0">
                    <div className="absolute -inset-4 bg-indigo-500/30 rounded-full blur-xl animate-pulse group-hover:bg-indigo-400/50 transition-all" />
                    <div className="relative bg-gradient-to-br from-indigo-600 to-violet-700 text-white w-28 h-28 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center text-center p-3 md:p-4 border-4 border-indigo-400/30 shadow-[0_0_50px_rgba(79,70,229,0.5)] transition-transform duration-500 hover:scale-110">
                        <Share2 size={24} className="mb-1 md:mb-2 text-indigo-200 md:w-8 md:h-8" />
                        <span className="font-black text-xs md:text-xl leading-tight uppercase tracking-wide">
                            {slide.centerNode}
                        </span>
                    </div>
                </div>

                {/* Node grid for mobile */}
                {/* Displays nodes in two columns to reduce vertical scrolling */}
                <div className="w-full grid grid-cols-2 gap-4 md:block">
                    {slide.nodes.map((node, index) => {
                        const IconComponent =
                            { Brain, Eye: Layers, MessageSquare, Bot }[node.icon] || FileText;

                        // Absolute positioning applied only on desktop
                        const posClasses = {
                            'top-left': 'md:top-[12%] md:left-[12%]',
                            'top-right': 'md:top-[12%] md:right-[12%]',
                            'bottom-left': 'md:bottom-[12%] md:left-[12%]',
                            'bottom-right': 'md:bottom-[12%] md:right-[12%]',
                        }[node.pos];

                        return (
                            // Relative on mobile, absolute on desktop
                            <div
                                key={index}
                                className={`relative md:absolute ${posClasses} z-10 flex flex-col items-center`}
                            >
                                <div className="group relative w-full flex flex-col items-center">
                                    <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/20 rounded-2xl blur-lg transition-all duration-500" />

                                    {/* Node card */}
                                    <div className="relative bg-slate-800/90 border border-white/10 hover:border-orange-500/50 backdrop-blur-md p-3 md:p-5 rounded-2xl w-full md:w-48 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center gap-2 md:gap-3 h-full min-h-[120px] justify-center">
                                        <div className="p-2 md:p-3 rounded-full bg-white/5 text-indigo-300 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition-colors">
                                            <IconComponent size={20} className="md:w-6 md:h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-xs md:text-base leading-tight mb-1 group-hover:text-orange-200 transition-colors">
                                                {node.label}
                                            </h3>
                                            <p className="text-[10px] md:text-xs text-indigo-200/60 group-hover:text-indigo-100 transition-colors leading-tight line-clamp-3">
                                                {node.sub}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Footer description */}
            <p className="text-xs md:text-sm text-gray-400 font-mono bg-black/30 px-4 py-2 rounded-full border border-white/5 text-center max-w-2xl shrink-0 mt-4 md:mt-0">
                💡 {slide.desc}
            </p>

            {/* Custom scrollbar for WebKit browsers */}
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
