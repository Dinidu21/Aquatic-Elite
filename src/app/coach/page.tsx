// src/app/coach/page.tsx
import React from 'react';
import { Award, BookOpen, Users, Target, Clock, Trophy } from 'lucide-react';

export default function CoachPage() {
    const qualifications = [
        'USA Swimming Certified Coach - Gold Level',
        'International Swimming Federation (FINA) Certification',
        'Sports Psychology Specialization - Stanford University',
        'Biomechanics in Swimming - Australian Institute of Sport',
        'Youth Development & Leadership - Olympic Training Center'
    ];

    const achievements = [
        'Coached 8 Olympic Trial Qualifiers',
        'Developed 12 National Record Holders',
        'Mentored 35+ State Champions',
        'Produced 50+ Regional Champions',
        '15 Years Elite Coaching Experience'
    ];

    const philosophyPoints = [
        {
            icon: Target,
            title: 'Precision-Based Training',
            description: 'Every stroke, every breath, every movement is analyzed and optimized for maximum efficiency and speed.'
        },
        {
            icon: Users,
            title: 'Individualized Approach',
            description: 'No two swimmers are alike. We create personalized training programs that adapt to each athlete&apos;s unique strengths and areas for improvement.'
        },
        {
            icon: Clock,
            title: 'Long-term Development',
            description: 'Building champions takes time. We focus on sustainable progress that develops both technical skills and mental resilience.'
        },
        {
            icon: Trophy,
            title: 'Competitive Excellence',
            description: 'From local meets to international competitions, we prepare our athletes to perform at their peak when it matters most.'
        }
    ];

    return (
        <main className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
                <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <Award className="h-4 w-4" />
                                <span>Elite Swimming Coach</span>
                            </div>

                            <h1 className="text-5xl font-bold text-white mb-6">
                                Coach
                                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                    Alexandra Rivers
                                </span>
                            </h1>

                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Transforming swimmers into champions through innovative training methodologies,
                                personalized coaching, and unwavering dedication to excellence.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm">
                                    <div className="text-3xl font-bold text-cyan-400 mb-1">15+</div>
                                    <div className="text-sm text-slate-400">Years Experience</div>
                                </div>
                                <div className="text-center p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm">
                                    <div className="text-3xl font-bold text-cyan-400 mb-1">200+</div>
                                    <div className="text-sm text-slate-400">Athletes Coached</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
                                <div className="w-full h-full rounded-xl bg-slate-800 flex items-center justify-center overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                                        <div className="text-center text-slate-400">
                                            <Users className="h-20 w-20 mx-auto mb-4" />
                                            <p>Coach Alexandra Rivers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Biography Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
                            My Journey in
                            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                Competitive Swimming
                            </span>
                        </h2>

                        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                            <p className="text-xl mb-6">
                                My passion for swimming began at age 6 when I first stepped onto a pool deck.
                                What started as childhood curiosity evolved into a lifelong dedication to the sport
                                that has shaped not only my career but my entire philosophy of life.
                            </p>

                            <p className="mb-6">
                                As a competitive swimmer, I represented my state at national championships for four
                                consecutive years, specializing in distance freestyle and individual medley events.
                                This experience taught me the value of discipline, perseverance, and the pursuit of
                                excellence – qualities I now instill in every athlete I coach.
                            </p>

                            <p className="mb-6">
                                After retiring from competitive swimming, I pursued my passion for coaching by
                                obtaining certifications from USA Swimming and the International Swimming Federation.
                                I&apos;ve had the privilege of working with athletes at every level, from beginners taking
                                their first strokes to Olympic hopefuls chasing their dreams.
                            </p>

                            <p className="mb-6">
                                My coaching philosophy centers on the belief that every swimmer has untapped potential.
                                Through personalized training programs, technical analysis, and mental preparation,
                                I help athletes not just improve their times, but develop the confidence and resilience
                                that extends far beyond the pool.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">
                            Coaching
                            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                Philosophy
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            My approach to coaching is built on four fundamental pillars that have consistently
                            produced championship-level results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {philosophyPoints.map((point, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                                        <point.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{point.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Qualifications Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Qualifications */}
                        <div>
                            <div className="flex items-center space-x-3 mb-8">
                                <BookOpen className="h-8 w-8 text-cyan-600" />
                                <h3 className="text-3xl font-bold text-slate-900">Certifications & Education</h3>
                            </div>

                            <ul className="space-y-4">
                                {qualifications.map((qualification, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                                        <span className="text-slate-700 leading-relaxed">{qualification}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Achievements */}
                        <div>
                            <div className="flex items-center space-x-3 mb-8">
                                <Trophy className="h-8 w-8 text-cyan-600" />
                                <h3 className="text-3xl font-bold text-slate-900">Coaching Achievements</h3>
                            </div>

                            <ul className="space-y-4">
                                {achievements.map((achievement, index) => (
                                    <li key={index} className="flex items-start space-x-3">
                                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                                        <span className="text-slate-700 leading-relaxed">{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <blockquote className="text-2xl md:text-3xl font-light text-white mb-8 leading-relaxed">
                            &quot;Every swimmer who steps into my program isn&apos;t just learning to move through water –
                            they&apos;re discovering their potential, building unshakeable confidence, and developing
                            the mindset of a champion that will serve them for life.&quot;
                        </blockquote>
                        <div className="text-cyan-400 font-semibold text-lg">
                            — Coach Alexandra Rivers
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}