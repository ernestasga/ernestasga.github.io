"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faClock, faTrophy } from '@fortawesome/free-solid-svg-icons';

interface QuickStatsProps {
  viewTime: number;
  viewCount: number;
  achievements: string[];
}

const QuickStats: React.FC<QuickStatsProps> = ({ viewTime, viewCount, achievements }) => {
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const stats = [
    {
      icon: faEye,
      label: 'Total Views',
      value: viewCount.toString(),
      color: '#3b82f6',
    },
    {
      icon: faClock,
      label: 'Time Viewing',
      value: formatTime(viewTime),
      color: '#10b981',
    },
    {
      icon: faTrophy,
      label: 'Achievements',
      value: achievements.length.toString(),
      color: '#f59e0b',
    },
  ];

  return (
    <div className="space-y-4">
      {/* Stats Cards */}
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="glass-card group cursor-default"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${stat.color}20` }}
            >
              <FontAwesomeIcon
                icon={stat.icon}
                className="text-lg"
                style={{ color: stat.color }}
              />
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
              <div
                className="text-xl font-bold"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Achievements */}
      <AnimatePresence>
        {achievements.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card"
          >
            <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
              🏆 Unlocked Achievements
            </h4>
            <div className="space-y-2">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-xs"
                >
                  <span className="text-accent-500">✨</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {achievement}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fun Fact */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="glass-card bg-gradient-to-br from-primary-500/10 to-secondary-500/10"
      >
        <p className="text-xs text-gray-600 dark:text-gray-400 text-center italic">
          &quot;You&apos;re viewer #{viewCount}! Thanks for checking out my resume 🚀&quot;
        </p>
      </motion.div>
    </div>
  );
};

export default QuickStats;
