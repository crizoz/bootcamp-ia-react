import { useState } from 'react';
import { Users, Smartphone, Copy, ExternalLink, Zap } from 'lucide-react';

export const InteractiveSlide = ({ slide }) => {
    const [copied, setCopied] = useState(false);

    // Dynamically generate QR image URL based on slide code
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(slide.code)}&color=ffffff&bgcolor=000000`;

    const handleCopy = () => {
        navigator.clipboard.writeText(slide.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full max-w-6xl flex flex-col items-center justify-center py-4 md:py-0 px-4 animate-fadeIn relative z-10">

            {/* Header */}
            <div className="text-center space-y-2 md:space-y-4 mb-6 md:mb-8 w-full px-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 border border-emerald-400/50 rounded-full text-emerald-300 font-bold uppercase tracking-widest text-xs md:text-sm animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    ¡Entra ahora!
                </div>

                <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter drop-shadow-lg leading-tight break-words">
                    {slide.title}
                </h2>
            </div>

            {/* Main Card */}
            <div className="group relative w-full max-w-5xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />

                <div className="relative bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-12 overflow-hidden">

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                        {/* Left Column */}
                        <div className="flex flex-col items-start gap-4 md:gap-6 relative z-10 w-full">
                            <div className="p-3 md:p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                                {slide.icon}
                            </div>

                            <div className="space-y-3 md:space-y-4 w-full">
                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight break-words">
                                    {slide.question}
                                </h3>
                                <p className="text-base md:text-xl text-slate-400 font-light border-l-4 border-emerald-500 pl-4 break-words">
                                    {slide.subtext}
                                </p>
                            </div>

                            {/* Supporting hint */}
                            <div className="flex items-start gap-3 text-xs md:text-sm text-slate-500 font-mono mt-2 md:mt-4 w-full">
                                <Users size={16} className="shrink-0 mt-0.5" />
                                <span className="leading-snug break-words">
                                    Revisa las respuestas de los estudiantes en tiempo real
                                </span>
                            </div>
                        </div>

                        {/* Right Column: QR + Link */}
                        <div className="flex max-w-full flex-col items-center justify-center relative w-full p-4 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-full blur-3xl animate-pulse" />

                            <div className="bg-white p-3 md:p-4 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 relative">
                                <img
                                    src={qrUrl}
                                    alt="QR Code"
                                    className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-contain rounded-xl"
                                />

                                <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-black text-white px-3 py-1.5 md:px-4 md:py-2 rounded-xl font-bold text-xs md:text-sm shadow-xl flex items-center gap-2 animate-bounce">
                                    <Smartphone size={14} className="md:w-4 md:h-4" />
                                    Escanea
                                </div>
                            </div>

                            {/* URL bar */}
                            <div className="mt-6 md:mt-8 max-w-full w-full bg-black/40 border border-white/10 rounded-xl p-2 flex items-center justify-between pl-3 md:pl-4 backdrop-blur-sm">
                                <span className="text-emerald-400 font-mono truncate mr-2 md:mr-4 text-xs md:text-sm lg:text-base opacity-80 min-w-0 flex-1">
                                    {slide.code}
                                </span>

                                <div className="flex gap-2 shrink-0">
                                    <button
                                        onClick={handleCopy}
                                        className="p-2 md:p-3 hover:bg-white/10 rounded-lg text-white transition-colors relative"
                                    >
                                        {copied && (
                                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-[10px] md:text-xs px-2 py-1 rounded font-bold">
                                                Copiado
                                            </span>
                                        )}
                                        <Copy size={18} className="md:w-5 md:h-5" />
                                    </button>

                                    <a
                                        href={slide.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 md:p-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-white transition-colors shadow-lg"
                                    >
                                        <ExternalLink size={18} className="md:w-5 md:h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative background icon */}
                    <div className="absolute top-0 right-0 p-10 md:p-20 opacity-5 pointer-events-none">
                        <Zap size={150} className="md:w-[300px] md:h-[300px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};
