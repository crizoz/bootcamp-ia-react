import { Eye, ShieldCheck, Layers, Cpu } from 'lucide-react';

export const ProjectStackSlide = ({ slide }) => {
    return (
        <div className="w-full max-w-5xl animate-fadeIn flex flex-col items-center gap-10 px-4 h-full justify-center">

            {/* Title section */}
            <div className="text-center mb-4">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight">
                    {slide.title}
                </h2>
                <p className="text-xl text-amber-200/80 font-light">
                    {slide.subtitle}
                </p>
            </div>

            {/* Stack layers */}
            <div className="w-full max-w-3xl flex flex-col gap-3 perspective-[1000px]">
                {slide.layers.map((layer, idx) => {

                    /* Icon mapping based on layer type */
                    const Icon = {
                        Eye: Eye,
                        ShieldCheck: ShieldCheck,
                        Database: Layers,
                        Cpu: Cpu
                    }[layer.icon] || Layers;

                    return (
                        <div
                            key={idx}
                            className="
                                group relative w-full p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md
                                transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:z-10
                                flex flex-col md:flex-row items-center justify-between gap-4 overflow-hidden
                                bg-gradient-to-r animate-fadeInUp cursor-default
                            "
                            style={{
                                animationDelay: `${idx * 0.15}s`,
                                animationFillMode: 'both',
                                backgroundImage: layer.color
                            }}
                        >
                            {/* Background noise texture */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                            {/* Decorative oversized icon */}
                            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity transform rotate-12 group-hover:scale-125 duration-700 pointer-events-none">
                                <Icon size={150} className="text-white" />
                            </div>

                            {/* Layer header */}
                            <div className="flex items-center gap-4 z-10 w-full md:w-auto">
                                <div className="w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center border border-white/20 shadow-inner">
                                    <Icon size={24} className="text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-mono font-bold text-white/60 uppercase tracking-widest">
                                        {layer.tech}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-black text-white tracking-wide uppercase drop-shadow-md">
                                        {layer.name}
                                    </h3>
                                </div>
                            </div>

                            {/* Layer description */}
                            <div className="z-10 text-center md:text-right max-w-md">
                                <p className="text-white/90 text-sm md:text-base font-medium leading-snug">
                                    {layer.desc}
                                </p>
                            </div>

                            {/* Hover highlight overlay */}
                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
