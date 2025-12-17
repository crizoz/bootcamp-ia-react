import React, { useCallback, useEffect, useState } from 'react';

import { Layout } from '../components/Layout';
import { slidesModule1 } from '../data/module1';

import { HeroSlide } from '../components/slides/HeroSlide';
import { BigStatementSlide } from '../components/slides/BigStatementSlide';
import { ArtChallengeSlide } from '../components/slides/ArtChallengeSlide';
import { InteractiveSlide } from '../components/slides/InteractiveSlide';
import { VersusSlide } from '../components/slides/VersusSlide';
import { CenterIconSlide } from '../components/slides/CenterIconSlide';
import { FormulaSlide } from '../components/slides/FormulaSlide';
import { ComparisonVerticalSlide } from '../components/slides/ComparisonVerticalSlide';
import { IdeChecklistSlide } from '../components/slides/IdeChecklistSlide';

/**
 * Module1
 *
 * Interactive presentation page for Module 1 of the Bootcamp IA platform.
 * This module is rendered using a data-driven Slide Engine, where each slide
 * defines its layout type and content through a configuration object.
 *
 * Navigation is handled via keyboard controls and UI buttons provided
 * by the shared Layout component.
 */
const Module1 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const nextSlide = useCallback(() => {
        if (currentSlide < slidesModule1.length - 1) {
            setCurrentSlide((c) => c + 1);
        }
    }, [currentSlide]);

    const prevSlide = useCallback(() => {
        if (currentSlide > 0) {
            setCurrentSlide((c) => c - 1);
        }
    }, [currentSlide]);

    /**
     * Toggles browser fullscreen mode.
     * This enhances the presentation experience during live classes
     * or projected sessions.
     */
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
        /**
         * Global keyboard navigation handler.
         * Arrow keys and spacebar allow slide navigation without UI interaction,
         * mimicking a traditional presentation workflow.
         */
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'Space') {
                nextSlide();
            }

            if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [nextSlide, prevSlide]);

    /**
     * Resolves which slide layout component should be rendered
     * based on the `layout` property of the slide configuration.
     *
     * This switch acts as the core of the Slide Engine and allows
     * new layouts to be added without modifying navigation logic.
     */
    const renderContent = (slide) => {
        switch (slide.layout) {
            case 'hero-slide':
                return <HeroSlide slide={slide} theme="indigo" />;

            case 'art-challenge-slide':
                return <ArtChallengeSlide slide={slide} />;

            case 'interactive-slide':
                return <InteractiveSlide slide={slide} />;

            case 'big-statement-slide':
                return (
                    <BigStatementSlide slide={slide} theme="indigo" />
                );

            case 'versus-slide':
                return <VersusSlide slide={slide} />;

            case 'center-icon-slide':
                return <CenterIconSlide slide={slide} />;

            case 'formula-slide':
                return <FormulaSlide slide={slide} />;

            case 'comparison-vertical-slide':
                return <ComparisonVerticalSlide slide={slide} />;

            case 'ide-checklist-slide':
                return <IdeChecklistSlide slide={slide} />;

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
            theme="indigo"
            currentSlide={currentSlide}
            totalSlides={slidesModule1.length}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            toggleFullscreen={toggleFullscreen}
            isFullscreen={isFullscreen}
        >
            {renderContent(slidesModule1[currentSlide])}
        </Layout>
    );
};

export default Module1;
