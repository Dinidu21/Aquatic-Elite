// src/app/achievements/page.tsx
'use client';

import React, { useState, useMemo } from 'react';
import { Trophy, Medal, Star, Search, User, Calendar, MapPin } from 'lucide-react';
import { achievements } from '@/lib/data';

type FilterType = 'all' | 'local' | 'national' | 'international';
type SortType = 'recent' | 'level' | 'name';

export default function AchievementsPage() {
    const [filter, setFilter] = useState<FilterType>('all');
    const [sortBy, setSortBy] = useState<SortType>('recent');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredAndSortedAchievements = useMemo(() => {
        let filtered = achievements;

        // Apply filter
        if (filter !== 'all') {
            filtered = achievements.filter(achievement => achievement.level === filter);
        }

        // Apply search
        if (searchTerm) {
            filtered = filtered.filter(achievement =>
                achievement.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                achievement.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
                achievement.competition.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Apply sort
        filtered.sort((a, b) => {
            switch (sortBy) {
                case 'recent':
                    return b.year - a.year;
                case 'level':
                    const levelOrder = { international: 3, national: 2, local: 1 };
                    return levelOrder[b.level] - levelOrder[a.level];
                case 'name':
                    return a.studentName.localeCompare(b.studentName);
                default:
                    return 0;
            }
        });

        return filtered;
    }, [filter, sortBy, searchTerm]);

    const filterOptions = [
        { value: 'all', label: 'All Achievements', icon: Trophy },
        { value: 'international', label: 'International', icon: Star },
        { value: 'national', label: 'National', icon: Medal },
        { value: 'local', label: 'Local', icon: Trophy },
    ];

    const getAchievementIcon = (level: string, result: string) => {
        if (result.toLowerCase().includes('gold') || result.toLowerCase().includes('1st')) {
            return '🥇';
        } else if (result.toLowerCase().includes('silver') || result.toLowerCase().includes('2nd')) {
            return '🥈';
        } else if (result.toLowerCase().includes('bronze') || result.toLowerCase().includes('3rd')) {
            return '🥉';
        } else if (result.toLowerCase().includes('record')) {
            return '🏆';
        }
        return '🏅';
    };

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'international':
                return 'from-purple-500 to-pink-500';
            case 'national':
                return 'from-yellow-500 to-orange-500';
            case 'local':
                return 'from-cyan-500 to-blue-500';
            default:
                return 'from-slate-500 to-slate-600';
        }
    };

    const stats = {
        total: achievements.length,
        international: achievements.filter(a => a.level === 'international').length,
        national: achievements.filter(a => a.level === 'national').length,
        local: achievements.filter(a => a.level === 'local').length,
    };

    return (
        <main className="min-h-screen pt-16 bg-slate-50">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/api/placeholder/1920/800')] bg-cover bg-center opacity-10"></div>
                <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Trophy className="h-4 w-4" />
                            <span>Student Success Stories</span>
                        </div>

                        <h1 className="text-5xl font-bold text-white mb-6">
                            Championship
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                Achievements
                            </span>
                        </h1>

                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
                            Celebrating the remarkable accomplishments of our swimmers across local,
                            national, and international competitions.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                                <div className="text-3xl font-bold text-cyan-400 mb-1">{stats.total}</div>
                                <div className="text-sm text-slate-400">Total Achievements</div>
                            </div>
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                                <div className="text-3xl font-bold text-purple-400 mb-1">{stats.international}</div>
                                <div className="text-sm text-slate-400">International</div>
                            </div>
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                                <div className="text-3xl font-bold text-yellow-400 mb-1">{stats.national}</div>
                                <div className="text-sm text-slate-400">National</div>
                            </div>
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700">
                                <div className="text-3xl font-bold text-cyan-400 mb-1">{stats.local}</div>
                                <div className="text-sm text-slate-400">Local</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters and Search */}
            <section className="py-8 bg-white border-b border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        {/* Filter Tabs */}
                        <div className="flex flex-wrap gap-2">
                            {filterOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => setFilter(option.value as FilterType)}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${filter === option.value
                                            ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                >
                                    <option.icon className="h-4 w-4" />
                                    <span>{option.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Search and Sort */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                                <input
                                    type="text"
                                    placeholder="Search achievements..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                />
                            </div>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortType)}
                                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                            >
                                <option value="recent">Most Recent</option>
                                <option value="level">By Level</option>
                                <option value="name">By Name</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    {filteredAndSortedAchievements.length === 0 ? (
                        <div className="text-center py-20">
                            <Trophy className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-slate-600 mb-2">No achievements found</h3>
                            <p className="text-slate-500">Try adjusting your search or filter criteria.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredAndSortedAchievements.map((achievement) => (
                                <div
                                    key={achievement.id}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 group hover:-translate-y-1"
                                >
                                    {/* Header */}
                                    <div className={`p-6 bg-gradient-to-br ${getLevelColor(achievement.level)} text-white relative overflow-hidden`}>
                                        <div className="absolute top-0 right-0 text-6xl opacity-20">
                                            {getAchievementIcon(achievement.level, achievement.result)}
                                        </div>
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full capitalize">
                                                    {achievement.level}
                                                </span>
                                                <span className="text-sm font-medium">{achievement.year}</span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-1">{achievement.studentName}</h3>
                                            <p className="text-sm opacity-90">{achievement.event}</p>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-2">
                                                <Trophy className="h-4 w-4 text-slate-500" />
                                                <span className="font-semibold text-slate-900">{achievement.result}</span>
                                            </div>

                                            <div className="flex items-center space-x-2">
                                                <MapPin className="h-4 w-4 text-slate-500" />
                                                <span className="text-slate-600">{achievement.competition}</span>
                                            </div>

                                            <div className="flex items-center space-x-2">
                                                <Calendar className="h-4 w-4 text-slate-500" />
                                                <span className="text-slate-600">{achievement.year}</span>
                                            </div>

                                            <div className="flex items-center space-x-2">
                                                <User className="h-4 w-4 text-slate-500" />
                                                <span className="text-slate-600">Age {achievement.age}</span>
                                            </div>
                                        </div>

                                        {achievement.description && (
                                            <div className="mt-4 pt-4 border-t border-slate-200">
                                                <p className="text-sm text-slate-600 leading-relaxed">
                                                    {achievement.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Add Your Name to Our Wall of Fame?
                    </h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                        Join our community of champions and start your journey toward achieving your swimming goals.
                    </p>
                    <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                        Start Your Journey
                    </button>
                </div>
            </section>
        </main>
    );
}