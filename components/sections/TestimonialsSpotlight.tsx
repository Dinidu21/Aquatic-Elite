// components/sections/TestimonialsSpotlight.tsx
import React from 'react';
import Link from 'next/link';
import { Star, Quote, ArrowRight, User } from 'lucide-react';
import { testimonialsData } from '../../lib/data';

const TestimonialsSpotlight: React.FC = () => {
    const spotlightTestimonials = testimonialsData.slice(0, 3);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                        <Star className="h-4 w-4" />
                        <span>Parent & Student Testimonials</span>
                    </div>

                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                        What Families{' '}
                        <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                            Are Saying
                        </span>
                    </h2>

                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Real stories from parents and students who have experienced transformational growth in their swimming journey with us.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {spotlightTestimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="group relative bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Quote Icon */}
                            <div className="absolute -top-4 left-6">
                                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg">
                                    <Quote className="h-5 w-5 text-white" />
                                </div>
                            </div>

                            {/* Rating Stars */}
                            <div className="flex items-center space-x-1 mb-4 mt-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-slate-700 mb-6 leading-relaxed">
                                &quot;{testimonial.quote}&quot;
                            </blockquote>

                            {/* Author Info */}
                            <div className="border-t border-slate-200 pt-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                                        <User className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-900">{testimonial.parentName}</div>
                                        <div className="text-sm text-slate-600">Parent of {testimonial.studentName}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-8 border border-cyan-100">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                        Ready to Share Your Success Story?
                    </h3>
                    <p className="text-slate-600 mb-6 max-w-md mx-auto">
                        Join hundreds of families who have transformed their swimming journey with our expert coaching.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/testimonials"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 group"
                        >
                            <span>Read All Testimonials</span>
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center space-x-2 bg-white text-slate-700 px-6 py-3 rounded-xl font-semibold border border-slate-300 hover:bg-slate-50 transition-all duration-300"
                        >
                            <span>Start Your Journey</span>
                        </Link>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 mb-2">98%</div>
                        <div className="text-sm text-slate-600">Satisfaction Rate</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 mb-2">4.9</div>
                        <div className="text-sm text-slate-600">Average Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 mb-2">150+</div>
                        <div className="text-sm text-slate-600">Happy Families</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-slate-900 mb-2">5</div>
                        <div className="text-sm text-slate-600">Years Excellence</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSpotlight;