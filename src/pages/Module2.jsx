import React, { useState, useCallback, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { slidesModule2 } from '../data/module2';

// Slide layout components used by the Slide Engine
import { HeroSlide } from '../components/slides/HeroSlide';
import { BigStatementSlide } from '../components/slides/BigStatementSlide';
import { InteractiveSlide } from '../components/slides/InteractiveSlide';
import { VersusSlide2 } from '../components/slides/VersusV2Slide';
import { ChatSimulationSlide } from '../components/slides/ChatSimulationSlide';
import { ProcessFlowSlide } from '../components/slides/ProcessFlowSlide';
import { ChecklistSlide } from '../components/slides/ChecklistSlide';
import { ModuleFinalQuizSlide } from '../components/slides/ModuleFinalQuizSlide';

/**
 * Module2
 *
 * Controller component for Module 2 of the Bootcamp IA platform.
 * Acts as the orchestration layer between:
 * - Slide data (slidesModule2)
 * - Slide rendering logic (layout-based switch)
 * - Global layout (Layout component)
 *
 * This component contains NO presentation logic itself.
 * Its responsibility is state, navigation and slide routing.
 */
const Module2 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const nextSlide = useCallback(() => {
        if (currentSlide < slidesModule2.length - 1) {
            setCurrentSlide(c => c + 1);
        }
    }, [currentSlide]);

    const prevSlide = useCallback(() => {
        if (currentSlide > 0) {
            setCurrentSlide(c => c - 1);
        }
    }, [currentSlide]);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    const renderContent = (slide) => {
        switch (slide.layout) {
            case 'hero-slide':
                return <HeroSlide slide={slide} theme="emerald" />;

            case 'big-statement-slide':
                return <BigStatementSlide slide={slide} theme="emerald" />;

            case 'interactive-slide':
                return <InteractiveSlide slide={slide} />;

            case 'versus-v2-slide':
                return <VersusSlide2 slide={slide} />;

            case 'chat-simulation-slide':
                return <ChatSimulationSlide slide={slide} />;

            case 'process-flow-slide':
                return <ProcessFlowSlide slide={slide} />;

            case 'checklist-slide':
                return <ChecklistSlide slide={slide} />;

            case 'module-final-quiz':
                return <ModuleFinalQuizSlide slide={slide} />;

            default:
                return (
                    <div className="text-white">
                        Slide no implementada: {slide.layout}
                    </div>
                );
        }
    };

    return (
        <Layout
            theme="emerald"
            currentSlide={currentSlide}
            totalSlides={slidesModule2.length}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            toggleFullscreen={toggleFullscreen}
            isFullscreen={isFullscreen}
        >
            {renderContent(slidesModule2[currentSlide])}
        </Layout>
    );
};

export default Module2;
