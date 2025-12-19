import React, { useState, useEffect, useCallback } from 'react';
import { Layout } from '../components/Layout';
import { slidesModule4 } from '../data/module4';
import { HeroSlide } from '../components/slides/HeroSlide';
import { BigStatementSlide } from '../components/slides/BigStatementSlide';
import { ErrorAnalysisSlide } from '../components/slides/ErrorAnalysisSlide';
import { EthicsAccordionSlide } from '../components/slides/EthicsAccordionSlide';
import { RubricGridSlide } from '../components/slides/RubricGridSlide';
import { ProjectStackSlide } from '../components/slides/ProjectStackSlide';
import { DeploymentChecklistSlide } from '../components/slides/DeploymentChecklistSlide';
import { FinalChecklistSlide } from '../components/slides/FinalChecklistSlide';
import { ModuleFinalQuizSlide } from '../components/slides/ModuleFinalQuizSlide';
import { GrandFinaleSlide } from '../components/slides/GrandFinaleSlide';

/**
 * Module4
 *
 * Final module of the Bootcamp IA interactive platform.
 * This module consolidates technical, ethical and deployment concepts,
 * and concludes the experience with a structured graduation flow.
 *
 * It follows the same Slide Engine architecture used across the platform,
 * ensuring consistency, maintainability and scalability.
 */
const Module4 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const nextSlide = useCallback(() => {
        if (currentSlide < slidesModule4.length - 1) {
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
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
            setIsFullscreen(false);
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
                return <HeroSlide slide={slide} theme="amber" />;

            case 'big-statement-slide':
                return <BigStatementSlide slide={slide} theme="amber" />;

            case 'error-analysis-slide':
                return <ErrorAnalysisSlide slide={slide} />;

            case 'ethics-accordion-slide':
                return <EthicsAccordionSlide slide={slide} />;

            case 'rubric-grid-slide':
                return <RubricGridSlide slide={slide} />;

            case 'project-stack-slide':
                return <ProjectStackSlide slide={slide} />;

            case 'deployment-checklist-slide':
                return <DeploymentChecklistSlide slide={slide} />;

            case 'final-checklist-slide':
                return <FinalChecklistSlide slide={slide} />;

            case 'module-final-quiz-slide':
                return <ModuleFinalQuizSlide slide={slide} />;

            case 'grand-finale-slide':
                return <GrandFinaleSlide slide={slide} />;

            default:
                return null;
        }
    };

    return (
        <Layout
            theme="amber"
            currentSlide={currentSlide}
            totalSlides={slidesModule4.length}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            toggleFullscreen={toggleFullscreen}
            isFullscreen={isFullscreen}
        >
            {renderContent(slidesModule4[currentSlide])}

            {/* Module-specific animation utilities scoped locally */}
            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95) translateY(20px);
                        filter: blur(10px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                        filter: blur(0);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.5s ease-out forwards;
                }
            `}</style>
        </Layout>
    );
};

export default Module4;
