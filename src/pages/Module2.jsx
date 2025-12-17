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
    // Current slide index within the module
    const [currentSlide, setCurrentSlide] = useState(0);

    // Tracks fullscreen state for UI synchronization
    const [isFullscreen, setIsFullscreen] = useState(false);

    /**
     * Advances to the next slide.
     * Guarded to prevent overflow beyond slide array length.
     */
    const nextSlide = useCallback(() => {
        if (currentSlide < slidesModule2.length - 1) {
            setCurrentSlide(c => c + 1);
        }
    }, [currentSlide]);

    /**
     * Returns to the previous slide.
     * Guarded to prevent negative indices.
     */
    const prevSlide = useCallback(() => {
        if (currentSlide > 0) {
            setCurrentSlide(c => c - 1);
        }
    }, [currentSlide]);

    /**
     * Toggles browser fullscreen mode.
     * Keeps internal state in sync with the Fullscreen API.
     */
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

    /**
     * Keyboard navigation handler.
     * Enables presentation-style controls:
     * - ArrowRight / Space → next slide
     * - ArrowLeft → previous slide
     */
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    /**
     * Slide Engine router.
     * Selects which slide component to render based on `slide.layout`.
     *
     * This switch is the core extensibility point of the platform:
     * new slide types can be added without modifying the Layout or data model.
     */
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

            // Fallback for unregistered or missing slide layouts
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
            theme="emerald" // Module 2 visual identity
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
