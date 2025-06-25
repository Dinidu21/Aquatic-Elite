// components/sections/AboutCoachPreview.tsx
import React from 'react';
import Link from 'next/link';
import { Award, Users, Trophy, ArrowRight } from 'lucide-react';

const AboutCoachPreview: React.FC = () => {
    const stats = [
        { icon: Trophy, value: '50+', label: 'Champions Trained' },
        { icon: Award, value: '15', label: 'Years Experience' },
        { icon: Users, value: '200+', label: 'Students Coached' },
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                        <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                            <Award className="h-4 w-4" />
                            <span>Elite Coaching Excellence</span>
                        </div>

                        <h2 className="text-4xl font-bold text-slate-900 mb-6">
                            Meet Your
                            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                {' '}Championship Coach
                            </span>
                        </h2>

                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            With over 15 years of elite coaching experience, our head coach has transformed
                            hundreds of swimmers into national and international champions. Specializing in
                            technique refinement, mental preparation, and personalized training methodologies.
                        </p>

                        <p className="text-slate-600 mb-8 leading-relaxed">
                            From recreational swimmers to Olympic hopefuls, we believe every athlete has
                            untapped potential waiting to be unleashed through proper guidance, innovative
                            training techniques, and unwavering support.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="flex justify-center mb-2">
                                        <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                                            <stat.icon className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                                    <div className="text-sm text-slate-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/coach"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 group"
                        >
                            <span>Learn More About Our Coach</span>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Image */}
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
                            <div className="w-full h-full rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden">
                                {/* Placeholder for coach image */}
                                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                                    <div className="text-center text-slate-500">
                                        <Users className="h-16 w-16 mx-auto mb-2" />
                                        <p className="text-sm">Coach Photo</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCoachPreview;