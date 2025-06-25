'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Medal, Trophy, Star, Filter, Search } from 'lucide-react';

// TypeScript interfaces
interface Achievement {
  id: string;
  studentName: string;
  event: string;
  medal: 'Gold' | 'Silver' | 'Bronze';
  competition: string;
  year: number;
  category: 'Local' | 'National' | 'International';
  time?: string;
  imageUrl?: string;
  description?: string;
}

interface AchievementGridProps {
  achievements?: Achievement[];
  className?: string;
}

// Sample data - replace with real data later
const sampleAchievements: Achievement[] = [
  {
    id: '1',
    studentName: 'Emma Chen',
    event: '100m Freestyle',
    medal: 'Gold',
    competition: 'National Championships',
    year: 2024,
    category: 'National',
    time: '52.34',
    description: 'New national record in the 16-18 age group'
  },
  {
    id: '2',
    studentName: 'Marcus Johnson',
    event: '200m Butterfly',
    medal: 'Silver',
    competition: 'Olympic Trials',
    year: 2024,
    category: 'International',
    time: '1:56.78',
    description: 'Qualified for Olympic team selection'
  },
  {
    id: '3',
    studentName: 'Sofia Rodriguez',
    event: '50m Backstroke',
    medal: 'Gold',
    competition: 'State Championships',
    year: 2024,
    category: 'Local',
    time: '27.89',
    description: 'Dominated state competition with personal best'
  },
  {
    id: '4',
    studentName: 'Alex Thompson',
    event: '400m Individual Medley',
    medal: 'Bronze',
    competition: 'World Championships',
    year: 2023,
    category: 'International',
    time: '4:12.45',
    description: 'First world championship medal'
  },
  {
    id: '5',
    studentName: 'Maya Patel',
    event: '100m Breaststroke',
    medal: 'Gold',
    competition: 'Junior Nationals',
    year: 2024,
    category: 'National',
    time: '1:07.23',
    description: 'Youngest winner in event history'
  },
  {
    id: '6',
    studentName: 'Jake Williams',
    event: '200m Freestyle',
    medal: 'Silver',
    competition: 'Regional Championships',
    year: 2024,
    category: 'Local',
    time: '1:48.56',
    description: 'Breakthrough performance leading to national team selection'
  }
];

const medalColors = {
  Gold: 'from-yellow-400 to-yellow-600',
  Silver: 'from-gray-300 to-gray-500',
  Bronze: 'from-amber-600 to-amber-800'
};

const categoryColors = {
  Local: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  National: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  International: 'bg-red-500/20 text-red-300 border-red-500/30'
};

export default function AchievementGrid({ 
  achievements = sampleAchievements, 
  className = '' 
}: AchievementGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const categories = ['All', 'Local', 'National', 'International'];

  const filteredAchievements = achievements.filter(achievement => {
    const matchesCategory = selectedCategory === 'All' || achievement.category === selectedCategory;
    const matchesSearch = achievement.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         achievement.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         achievement.competition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getMedalIcon = (medal: string) => {
    switch (medal) {
      case 'Gold': return <Trophy className="h-6 w-6 text-yellow-400" />;
      case 'Silver': return <Medal className="h-6 w-6 text-gray-400" />;
      case 'Bronze': return <Star className="h-6 w-6 text-amber-600" />;
      default: return <Trophy className="h-6 w-6 text-gray-400" />;
    }
  };

  return (
    <section className={`py-16 bg-gradient-to-br from-slate-900 to-slate-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Championship <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Achievements</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Celebrating the remarkable success of our athletes across local, national, and international competitions
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
                }`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search achievements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* Achievement Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence>
            {filteredAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedAchievement(achievement)}
              >
                {/* Medal Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${medalColors[achievement.medal]} flex items-center justify-center shadow-lg`}>
                    {getMedalIcon(achievement.medal)}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[achievement.category]}`}>
                    {achievement.category}
                  </span>
                </div>

                {/* Student Info */}
                <h3 className="text-xl font-bold text-white mb-2">{achievement.studentName}</h3>
                <p className="text-cyan-400 font-medium mb-2">{achievement.event}</p>
                
                {/* Competition Details */}
                <div className="space-y-2 mb-4">
                  <p className="text-slate-300 text-sm">{achievement.competition}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-sm">{achievement.year}</span>
                    {achievement.time && (
                      <span className="text-green-400 font-mono font-medium">{achievement.time}</span>
                    )}
                  </div>
                </div>

                {/* Medal Badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${medalColors[achievement.medal]} text-white`}>
                  {getMedalIcon(achievement.medal)}
                  <span className="ml-2">{achievement.medal} Medal</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredAchievements.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-slate-400 text-lg">No achievements found matching your criteria.</div>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Achievement Modal (Simple version) */}
        <AnimatePresence>
          {selectedAchievement && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAchievement(null)}
            >
              <motion.div
                className="bg-slate-800 rounded-xl p-6 max-w-md w-full border border-slate-600"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{selectedAchievement.studentName}</h3>
                  <button
                    onClick={() => setSelectedAchievement(null)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <div className="space-y-3">
                  <p className="text-cyan-400 font-medium">{selectedAchievement.event}</p>
                  <p className="text-slate-300">{selectedAchievement.competition} • {selectedAchievement.year}</p>
                  {selectedAchievement.time && (
                    <p className="text-green-400 font-mono">Time: {selectedAchievement.time}</p>
                  )}
                  {selectedAchievement.description && (
                    <p className="text-slate-300 leading-relaxed">{selectedAchievement.description}</p>
                  )}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${medalColors[selectedAchievement.medal]} text-white`}>
                    {getMedalIcon(selectedAchievement.medal)}
                    <span className="ml-2">{selectedAchievement.medal} Medal</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}