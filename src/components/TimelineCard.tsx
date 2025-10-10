"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { TimelineMilestone } from '@/types/journey';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  milestone: TimelineMilestone;
  index: number;
}

const TimelineCard: React.FC<Props> = ({ milestone, index }) => {
  const isLeft = milestone.side === 'left';

  return (
    <div className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} mb-16 w-full`}>
      {/* Timeline Node (center) */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
        className="absolute left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          whileHover={{ scale: 1.3, rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-full flex items-center justify-center glass shadow-xl"
          style={{
            background: `linear-gradient(135deg, ${milestone.color} 0%, ${milestone.color}88 100%)`
          }}
        >
          <FontAwesomeIcon
            icon={milestone.icon}
            className="text-2xl text-white"
          />
        </motion.div>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? -100 : 100,
          y: 50
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0
        }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.2 + 0.1,
          duration: 0.6,
          type: "spring",
          stiffness: 100
        }}
        className={`w-full md:w-[calc(50%-4rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}
      >
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="glass-card relative group cursor-pointer overflow-hidden"
        >
          {/* Glow effect */}
          <div
            className="absolute -inset-0.5 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"
            style={{
              background: `linear-gradient(135deg, ${milestone.color} 0%, ${milestone.color}88 100%)`
            }}
          />

          {/* Badge */}
          {milestone.badge && (
            <motion.div
              initial={{ rotate: -12, scale: 0 }}
              whileInView={{ rotate: -12, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
              className="absolute -top-3 -right-3 bg-gradient-to-br from-accent-500 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10"
            >
              {milestone.badge}
            </motion.div>
          )}

          {/* Content */}
          <div className="relative z-10 space-y-4 p-6">
            {/* Year Badge */}
            <div
              className="inline-block px-4 py-1 rounded-full text-white font-bold text-sm"
              style={{
                background: `linear-gradient(135deg, ${milestone.color} 0%, ${milestone.color}dd 100%)`
              }}
            >
              {milestone.year}
            </div>

            {/* Title */}
            <div>
              <h3 className="text-3xl font-bold gradient-text mb-2">
                {milestone.title}
              </h3>
              <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                {milestone.subtitle}
              </h4>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
              &quot;{milestone.description}&quot;
            </p>

            {/* Achievements */}
            <div className="space-y-2">
              <h5 className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                Key Milestones:
              </h5>
              <ul className="space-y-2">
                {milestone.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.4 + idx * 0.05 }}
                    className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 group/item"
                  >
                    <div
                      className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 group-hover/item:w-2 group-hover/item:h-2 transition-all"
                      style={{ backgroundColor: milestone.color }}
                    />
                    <span className="group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors">
                      {achievement}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            {milestone.techStack && milestone.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                {milestone.techStack.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 + idx * 0.05, type: "spring" }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="px-3 py-1 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-400/10 dark:to-secondary-400/10 rounded-full text-xs font-semibold text-primary-600 dark:text-primary-400 border border-primary-500/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            )}
          </div>

          {/* Corner accent */}
          <div
            className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${milestone.color} 0%, transparent 100%)`
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TimelineCard;
