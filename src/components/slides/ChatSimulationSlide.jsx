import React, { useState, useEffect } from 'react';
import { User, Zap, Bot, MessageSquare, Layout } from 'lucide-react';

export const ChatSimulationSlide = ({ slide }) => {
    const [showPrompt, setShowPrompt] = useState(false);
    const [isThinking, setIsThinking] = useState(false);
    const [showResponse, setShowResponse] = useState(false);
    const [displayedText, setDisplayedText] = useState('');

    /**
     * Reset and orchestrate the chat animation timeline
     * whenever the slide content changes.
     */
    useEffect(() => {
        setShowPrompt(false);
        setIsThinking(false);
        setShowResponse(false);
        setDisplayedText('');

        const t1 = setTimeout(() => setShowPrompt(true), 500);
        const t2 = setTimeout(() => setIsThinking(true), 1500);
        const t3 = setTimeout(() => {
            setIsThinking(false);
            setShowResponse(true);
        }, 3000);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [slide]);

    /**
     * Typewriter effect for text-based responses.
     * Tables are rendered instantly.
     */
    useEffect(() => {
        if (showResponse && slide.type === 'text') {
            let i = 0;
            const text = slide.response;
            const speed = 20;

            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    setDisplayedText((prev) => prev + text.charAt(i));
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, speed);

            return () => clearInterval(typingInterval);
        }

        if (showResponse && slide.type === 'table') {
            setDisplayedText(slide.response);
        }
    }, [showResponse, slide]);

    /**
     * Minimal markdown table parser for structured AI output.
     * Assumes a valid markdown table format.
     */
    const renderMarkdownTable = (markdown) => {
        const rows = markdown.split('\n').filter(row => row.trim() !== '');
        const headers = rows[0]
            .split('|')
            .filter(cell => cell.trim() !== '')
            .map(c => c.trim());

        const dataRows = rows.slice(2).map(row =>
            row.split('|')
                .filter(cell => cell.trim() !== '')
                .map(c => c.trim())
        );

        return (
            <div className="overflow-hidden rounded-xl border border-white/20 my-2 shadow-lg animate-fadeIn w-full overflow-x-auto">
                <table className="w-full text-left text-sm md:text-base border-collapse">
                    <thead className="bg-indigo-900/50 text-indigo-200">
                        <tr>
                            {headers.map((h, i) => (
                                <th
                                    key={i}
                                    className="p-3 md:p-4 font-bold border-b border-white/10 uppercase tracking-wider text-xs md:text-sm whitespace-nowrap"
                                >
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 bg-black/20">
                        {dataRows.map((row, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                                {row.map((cell, j) => (
                                    <td
                                        key={j}
                                        className="p-3 md:p-4 text-gray-300 whitespace-nowrap md:whitespace-normal"
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    /**
     * Simple inline bold formatter for **highlighted** sections.
     */
    const renderStyledText = (text) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);

        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return (
                    <strong key={index} className="text-teal-300 font-bold">
                        {part.slice(2, -2)}
                    </strong>
                );
            }
            return part;
        });
    };

    return (
        <div className="w-full max-w-5xl flex flex-col items-center gap-6 md:gap-8 px-4 h-full justify-center">
            <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-2 tracking-tight drop-shadow-lg uppercase">
                {slide.title}
            </h2>

            <div className="w-full bg-slate-900/80 border border-white/10 rounded-[2rem] p-4 md:p-8 flex flex-col gap-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative min-h-[50vh] backdrop-blur-xl">

                {/* Simulated window header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-2">
                    <div className="flex items-center gap-2 opacity-50">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs font-mono text-white/30 tracking-widest uppercase">
                        {slide.botName}_KERNEL_V2.4
                    </span>
                </div>

                {/* User prompt */}
                <div
                    className={`flex gap-4 flex-row-reverse items-end transition-all duration-500 transform ${showPrompt ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg border border-white/20">
                        <User size={20} className="text-white" />
                    </div>

                    <div className="bg-white/10 border border-white/10 text-emerald-50 p-4 md:p-5 rounded-3xl rounded-tr-sm text-base md:text-xl max-w-[85%] shadow-md backdrop-blur-md">
                        <p className="font-bold text-[10px] md:text-xs text-emerald-400 mb-2 uppercase tracking-wider flex items-center gap-2">
                            <Zap size={10} /> Tú (Prompt)
                        </p>
                        {slide.prompt}
                    </div>
                </div>

                {/* AI thinking state */}
                {isThinking && (
                    <div className="flex gap-4 items-end animate-pulse">
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${slide.botName === 'ChatGPT' ? 'bg-teal-600' : 'bg-indigo-600'
                                } opacity-50`}
                        >
                            <Bot size={20} className="text-white" />
                        </div>

                        <div className="text-gray-400 text-sm font-mono flex items-center gap-2 pb-2">
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75" />
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150" />
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300" />
                            Generando respuesta...
                        </div>
                    </div>
                )}

                {/* AI response */}
                {showResponse && (
                    <div className="flex gap-4 items-end animate-fadeIn">
                        <div
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.2)] border border-white/20 ${slide.botName === 'ChatGPT'
                                    ? 'bg-gradient-to-tr from-teal-600 to-emerald-500'
                                    : 'bg-gradient-to-tr from-indigo-600 to-blue-500'
                                }`}
                        >
                            {slide.botIcon}
                        </div>

                        <div
                            className={`bg-black/40 border border-white/10 text-white p-5 md:p-6 rounded-3xl rounded-tl-sm text-base md:text-lg max-w-[95%] shadow-xl backdrop-blur-md ${slide.type === 'table' ? 'w-full' : ''
                                }`}
                        >
                            <p className={`font-bold text-[10px] md:text-xs mb-3 uppercase tracking-wider flex items-center gap-2 ${slide.color}`}>
                                {slide.botName === 'ChatGPT'
                                    ? <MessageSquare size={12} />
                                    : <Layout size={12} />}
                                {slide.botName}
                            </p>

                            <div className="leading-relaxed whitespace-pre-line text-gray-100">
                                {slide.type === 'table'
                                    ? renderMarkdownTable(slide.response)
                                    : renderStyledText(displayedText)
                                }

                                {slide.type === 'text' &&
                                    displayedText.length < slide.response.length && (
                                        <span className="inline-block w-2 h-4 bg-teal-400 ml-1 animate-pulse align-middle" />
                                    )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
