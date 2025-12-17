import {
    UploadCloud,
    FileCode,
    Home,
    Image as ImageIcon,
    Layers,
    FileText
} from 'lucide-react';

export const DeploymentChecklistSlide = ({ slide }) => {
    return (
        <div className="w-full max-w-5xl animate-fadeIn flex flex-col items-center gap-10 px-4 h-full justify-center">
            <div className="text-center z-10">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-amber-900/30 border border-amber-500/30 text-amber-400 backdrop-blur-md">
                    <UploadCloud size={16} className="animate-bounce" />
                    <span className="text-xs font-bold tracking-widest uppercase">
                        System Backup Required
                    </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-white mb-3 tracking-tight uppercase">
                    {slide.title}
                </h2>

                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                    {slide.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {slide.steps.map((step, idx) => {
                    // Maps step.icon identifiers to Lucide icons
                    const Icon = {
                        FileCode: FileCode,
                        History: Home,
                        Image: ImageIcon,
                        FolderArchive: Layers
                    }[step.icon] || FileText;

                    return (
                        <div
                            key={idx}
                            className="group relative bg-slate-900/80 border border-white/10 p-6 rounded-2xl overflow-hidden hover:border-amber-500/60 transition-all duration-500"
                        >
                            {/* Progress-style background fill on hover */}
                            <div className="absolute inset-0 bg-amber-600/10 w-0 group-hover:w-full transition-all duration-[1.5s] ease-out"></div>

                            <div className="relative z-10 flex items-start gap-5">
                                <div className="p-4 bg-black/40 rounded-xl border border-white/10 text-gray-400 group-hover:text-amber-400 group-hover:border-amber-500/50 transition-colors">
                                    <Icon size={32} />
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="text-lg font-bold text-white tracking-wider group-hover:text-amber-100">
                                            {step.label}
                                        </h3>

                                        <span className="text-xs font-mono text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity delay-300">
                                            100%
                                        </span>
                                    </div>

                                    <p className="text-sm text-gray-400 leading-snug group-hover:text-gray-300">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="absolute top-0 right-0 p-2">
                                <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-green-500 transition-colors"></div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button className="mt-4 px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg shadow-lg shadow-amber-900/50 transition-all active:scale-95 flex items-center gap-2">
                <UploadCloud size={20} />
                INICIAR RESPALDO
            </button>
        </div>
    );
};
