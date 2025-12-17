import React, { useState, useCallback, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { slidesModule3 } from '../data/module3';

// Slide layout components used by the Slide Engine
import { HeroSlide } from '../components/slides/HeroSlide';
import { BigStatementSlide } from '../components/slides/BigStatementSlide';
import { InteractiveSlide } from '../components/slides/InteractiveSlide';
import { ChecklistSlide } from '../components/slides/ChecklistSlide';
import { QuizSimulationSlide } from '../components/slides/QuizSimulationSlide';
import { DesignPromptSlide } from '../components/slides/DesignPromptSlide';
import { MindMapSlide } from '../components/slides/MindMapSlide';
import { RubricSimulationSlide } from '../components/slides/RubricSimulationSlide';

/**
 * Module3
 *
 * Controller component for Module 3 of the Bootcamp IA platform.
 * This module focuses on applied reasoning, evaluation and structured thinking,
 * using interactive simulations such as quizzes, rubrics and mind maps.
 *
 * The component follows the same Slide Engine contract as other modules,
 * ensuring architectural consistency across the platform.
 */
const Module3 = () => {
    // Current slide index within the module
    const [currentSlide, setCurrentSlide] = useState(0);

    // Tracks fullscreen state to keep UI controls synchronized
    const [isFullscreen, setIsFullscreen] = useState(false);

    /**
     * Advances to the next slide.
     * Prevents overflow beyond the available slide range.
     */
    const nextSlide = useCallback(() => {
        if (currentSlide < slidesModule3.length - 1) {
            setCurrentSlide(c => c + 1);
        }
    }, [currentSlide]);

    /**
     * Returns to the previous slide.
     * Prevents underflow below index 0.
     */
    const prevSlide = useCallback(() => {
        if (currentSlide > 0) {
            setCurrentSlide(c => c - 1);
        }
    }, [currentSlide]);

    /**
     * Toggles browser fullscreen mode.
     * Uses the Fullscreen API and mirrors its state internally.
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
     * Enables keyboard-based slide navigation.
     * Designed to emulate a presentation-style experience.
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
     * Core Slide Engine router.
     * Maps `slide.layout` values to concrete slide components.
     *
     * This pattern allows new interactive slide types to be added
     * without changing module-level navigation or layout logic.
     */
    const renderContent = (slide) => {
        switch (slide.layout) {
            case 'hero-slide':
                return <HeroSlide slide={slide} theme="orange" />;

            case 'big-statement-slide':
                return <BigStatementSlide slide={slide} theme="orange" />;

            case 'interactive-slide':
                return <InteractiveSlide slide={slide} />;

            case 'rubric-simulation-slide':
                return <RubricSimulationSlide slide={slide} />;

            case 'quiz-simulation-slide':
                return <QuizSimulationSlide slide={slide} />;

            case 'design-prompt-slide':
                return <DesignPromptSlide slide={slide} />;

            case 'mind-map-slide':
                return <MindMapSlide slide={slide} />;

            case 'checklist-slide':
                return <ChecklistSlide slide={slide} />;

            // Fallback for undefined or unregistered slide layouts
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
            theme="orange" // Module 3 visual identity
            currentSlide={currentSlide}
            totalSlides={slidesModule3.length}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            toggleFullscreen={toggleFullscreen}
            isFullscreen={isFullscreen}
        >
            {renderContent(slidesModule3[currentSlide])}
        </Layout>
    );
};

export default Module3;
