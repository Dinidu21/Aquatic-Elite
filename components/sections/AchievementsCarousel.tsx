// components/sections/AchievementsCarousel.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Medal, Trophy, Star, Award } from 'lucide-react';

interface Achievement {
    id: number;
    title: string;
    value: string;
    description: string;
    icon: React.ElementType;
    gradient: string;
}

const AchievementsCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const achievements: Achievement[] = [
        {
            id: 1,
            title: 'Olympic Qualifiers',
            value: '8',
            description: 'Students qualified for Olympic trials',
            icon: Trophy,
            gradient: 'from-yellow-400 to-orange-500'
        },
        {
            id: 2,
            title: 'National Records',
            value: '12',
            description: 'National records broken by our students',
            icon: Medal,
            gradient: 'from-cyan-400 to-blue-500'
        },
        {
            id: 3,
            title: 'State Champions',
            value: '35',
            description: 'State championship titles won',
            icon: Star,
            gradient: 'from-purple-400 to-pink-500'
        },
        {
            id: 4,
            title: 'International Medals',
            value: '24',
            description: 'Medals won at international competitions',
            icon: Award,
            gradient: 'from-emerald-400 to-teal-500'
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % achievements.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [achievements.length]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % achievements.length);
    };

    return (
        <section className="py-20 bg-slate-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
            <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Remarkable
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            &nbsp;Achievements
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Our students&apos; success speaks volumes about our commitment to excellence
                        and innovative training methodologies.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Main carousel */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {achievements.map((achievement) => (
                                <div key={achievement.id} className="w-full flex-shrink-0">
                                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 mx-2">
                                        <div className="text-center">
                                            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${achievement.gradient} mb-6`}>
                                                <achievement.icon className="h-8 w-8 text-white" />
                                            </div>

                                            <div className={`text-6xl font-bold bg-gradient-to-br ${achievement.gradient} bg-clip-text text-transparent mb-4`}>
                                                {achievement.value}
                                            </div>

                                            <h3 className="text-2xl font-bold text-white mb-3">
                                                {achievement.title}
                                            </h3>

                                            <p className="text-slate-400 text-lg">
                                                {achievement.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full transition-colors border border-slate-600"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full transition-colors border border-slate-600"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center space-x-3 mt-8">
                        {achievements.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-gradient-to-r from-cyan-400 to-blue-400 scale-125'
                                        : 'bg-slate-600 hover:bg-slate-500'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    {achievements.map((achievement, index) => (
                        <div
                            key={achievement.id}
                            className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${index === currentIndex
                                    ? 'bg-slate-800/80 border-cyan-500/50'
                                    : 'bg-slate-800/30 border-slate-700 hover:border-slate-600'
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <div className="flex items-center space-x-3">
                                <achievement.icon className={`h-6 w-6 ${index === currentIndex ? 'text-cyan-400' : 'text-slate-400'
                                    }`} />
                                <div>
                                    <div className={`text-2xl font-bold ${index === currentIndex ? 'text-cyan-400' : 'text-white'
                                        }`}>
                                        {achievement.value}
                                    </div>
                                    <div className="text-sm text-slate-400">{achievement.title}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsCarousel;