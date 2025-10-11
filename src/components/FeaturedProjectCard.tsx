"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types/project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface Props {
  project: Project;
  index: number;
}

const statusConfig = {
  live: { color: '#10b981', label: 'Live', glow: 'rgba(16, 185, 129, 0.3)' },
  active: { color: '#3b82f6', label: 'Active', glow: 'rgba(59, 130, 246, 0.3)' },
  'open-source': { color: '#8b5cf6', label: 'Open Source', glow: 'rgba(139, 92, 246, 0.3)' },
  archived: { color: '#6b7280', label: 'Archived', glow: 'rgba(107, 114, 128, 0.3)' }
};

const FeaturedProjectCard: React.FC<Props> = React.memo(({ project, index }) => {
  const status = statusConfig[project.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative glass-card overflow-hidden cursor-pointer h-full"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Glow effect on hover */}
        <div
          className="absolute -inset-0.5 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"
          style={{
            background: `linear-gradient(135deg, ${status.color}88 0%, ${status.color}44 100%)`
          }}
        />

        {/* Featured badge */}
        <motion.div
          initial={{ rotate: -12, scale: 0 }}
          whileInView={{ rotate: -12, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
          className="absolute -top-3 -right-3 bg-gradient-to-br from-accent-500 to-accent-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg z-10"
        >
          ⭐ FEATURED
        </motion.div>

        <div className="relative z-10 p-8 space-y-6">
          {/* Header with status badge */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3 }}
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
              >
                {project.name}
              </motion.h3>
              {project.year && (
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {project.year}
                </span>
              )}
            </div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.35, type: "spring" }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border-2"
              style={{
                borderColor: status.color,
                color: status.color,
                backgroundColor: `${status.color}15`
              }}
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: status.color, boxShadow: `0 0 8px ${status.glow}` }}
              />
              {status.label}
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.4 }}
            className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            {project.desc}
          </motion.p>

          {/* Impact metrics */}
          {project.impact && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.45 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg border border-primary-500/20"
            >
              <div className="text-2xl">📊</div>
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                {project.impact}
              </span>
            </motion.div>
          )}

          {/* Tech stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5 + idx * 0.03, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="px-3 py-1.5 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-400/10 dark:to-secondary-400/10 rounded-lg text-sm font-semibold text-primary-600 dark:text-primary-400 border border-primary-500/20"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            {project.link && (
              <motion.a
                href={project.link.path}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                <span>{project.link.name}</span>
              </motion.a>
            )}

            {project.link2 && (
              <motion.a
                href={project.link2.path}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-secondary-600 to-accent-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                <FontAwesomeIcon icon={faMobileAlt} />
                <span>{project.link2.name}</span>
              </motion.a>
            )}

            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 glass border border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:border-primary-500 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>Code</span>
              </motion.a>
            )}
          </div>
        </div>

        {/* Decorative corner gradient */}
        <div
          className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${status.color} 0%, transparent 100%)`
          }}
        />
      </motion.div>
    </motion.div>
  );
});

FeaturedProjectCard.displayName = 'FeaturedProjectCard';

export default FeaturedProjectCard;
