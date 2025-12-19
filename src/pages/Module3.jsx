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
import { ModuleFinalQuizSlide } from '../components/slides/ModuleFinalQuizSlide';

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
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const nextSlide = useCallback(() => {
        if (currentSlide < slidesModule3.length - 1) {
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
