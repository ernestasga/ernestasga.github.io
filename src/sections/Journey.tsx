"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { journeyContent, timelineMilestones, journeyStats } from '@/data/journey';
import TimelineCard from '@/components/TimelineCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Journey: React.FC = () => {
  return (
    <section id="journey" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-neon">
              <FontAwesomeIcon
                icon={journeyContent.icon}
                className="text-4xl text-white"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">{journeyContent.title}</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {journeyContent.subtitle}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {Object.entries(journeyStats).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card cursor-pointer"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 z-0">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 rounded-full shadow-glow"
            />
          </div>

          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 z-0">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 rounded-full"
            />
          </div>

          {/* Timeline Cards */}
          <div className="relative z-10 md:hidden">
            {/* Mobile: All cards on right side */}
            {timelineMilestones.map((milestone, index) => (
              <div key={milestone.id} className="pl-16 mb-16">
                {/* Mobile Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: "spring" }}
                  className="absolute left-4 z-20"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
                    style={{
                      background: `linear-gradient(135deg, ${milestone.color} 0%, ${milestone.color}88 100%)`
                    }}
                  >
                    <FontAwesomeIcon
                      icon={milestone.icon}
                      className="text-lg text-white"
                    />
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.1, duration: 0.6 }}
                >
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass-card relative group cursor-pointer overflow-hidden"
                  >
                    <div
                      className="absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"
                      style={{
                        background: `linear-gradient(135deg, ${milestone.color} 0%, ${milestone.color}88 100%)`
                      }}
                    />

                    {milestone.badge && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-br from-accent-500 to-accent-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                        {milestone.badge}
                      </div>
                    )}

                    <div className="relative z-10 space-y-3 p-4">
                      <div
                        className="inline-block px-3 py-1 rounded-full text-white font-bold text-xs"
                        style={{
                          background: `linear-gradient(135deg, ${milestone.color} 0%, ${milestone.color}dd 100%)`
                        }}
                      >
                        {milestone.year}
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold gradient-text mb-1">
                          {milestone.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                          {milestone.subtitle}
                        </h4>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        &quot;{milestone.description}&quot;
                      </p>

                      <div className="space-y-1">
                        {milestone.achievements.slice(0, 3).map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                            <div
                              className="flex-shrink-0 w-1 h-1 rounded-full mt-1.5"
                              style={{ backgroundColor: milestone.color }}
                            />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {milestone.techStack && (
                        <div className="flex flex-wrap gap-1 pt-2">
                          {milestone.techStack.slice(0, 4).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full text-xs font-semibold text-primary-600 dark:text-primary-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Desktop: Alternating sides */}
          <div className="hidden md:block relative z-10">
            {timelineMilestones.map((milestone, index) => (
              <TimelineCard
                key={milestone.id}
                milestone={milestone}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Decorative gradient blobs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-gradient-to-br from-secondary-500/10 to-accent-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
};

export default Journey;
