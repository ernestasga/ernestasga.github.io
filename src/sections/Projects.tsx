"use client"

import ProjectCard from '@/components/ProjectCard'
import FeaturedProjectCard from '@/components/FeaturedProjectCard'
import { projectContent, projects } from '@/data/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faChevronDown, faChevronUp, faBriefcase } from '@fortawesome/free-solid-svg-icons'

const Projects: React.FC = () => {
  const [showArchived, setShowArchived] = useState(false);

  // Organize projects by category
  const featuredProjects = projects.filter(p => p.featured);
  const activeProjects = projects.filter(p => !p.featured && (p.status === 'live' || p.status === 'active' || p.status === 'open-source'));
  const archivedProjects = projects.filter(p => !p.featured && p.status === 'archived');

  return (
      <section id="projects" className="py-20 px-4 relative overflow-hidden">
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
                              icon={projectContent.icon}
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
                      <span className="gradient-text">{projectContent.title}</span>
                  </motion.h2>

                  {/* Subtitle */}
                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
                  >
                      {projectContent.description}
                  </motion.p>
              </motion.div>

              {/* Featured Projects - Hero Layout */}
              {featuredProjects.length > 0 && (
                  <div className="mb-20">
                      <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 mb-8"
                      >
                          <div className="h-1 w-12 bg-gradient-to-r from-accent-500 to-transparent rounded-full" />
                          <h3 className="text-2xl font-bold gradient-text">Featured Projects</h3>
                      </motion.div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          {featuredProjects.map((project, index) => (
                              <FeaturedProjectCard key={project.name} project={project} index={index} />
                          ))}
                      </div>
                  </div>
              )}

              {/* Active Projects - Grid Layout */}
              {activeProjects.length > 0 && (
                  <div className="mb-20">
                      <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 mb-8"
                      >
                          <div className="h-1 w-12 bg-gradient-to-r from-primary-500 to-transparent rounded-full" />
                          <h3 className="text-2xl font-bold gradient-text">Active Projects</h3>
                      </motion.div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {activeProjects.map((project, index) => (
                              <ProjectCard key={project.name} item={project} index={index} />
                          ))}
                      </div>
                  </div>
              )}

              {/* Archived Projects - Collapsible */}
              {archivedProjects.length > 0 && (
                  <div className="mb-12">
                      <motion.button
                          onClick={() => setShowArchived(!showArchived)}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full glass-card cursor-pointer mb-6 group"
                      >
                          <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                  <div className="h-1 w-12 bg-gradient-to-r from-gray-500 to-transparent rounded-full" />
                                  <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">
                                      Portfolio & Demo Projects
                                  </h3>
                                  <span className="text-sm text-gray-500 dark:text-gray-400">
                                      ({archivedProjects.length})
                                  </span>
                              </div>
                              <motion.div
                                  animate={{ rotate: showArchived ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                              >
                                  <FontAwesomeIcon
                                      icon={showArchived ? faChevronUp : faChevronDown}
                                      className="text-gray-600 dark:text-gray-400 text-xl group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                                  />
                              </motion.div>
                          </div>
                      </motion.button>

                      <AnimatePresence>
                          {showArchived && (
                              <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                              >
                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                      {archivedProjects.map((project, index) => (
                                          <ProjectCard key={project.name} item={project} index={index} />
                                      ))}
                                  </div>
                              </motion.div>
                          )}
                      </AnimatePresence>
                  </div>
              )}

              {/* Private Work Card - Finale */}
              <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="max-w-2xl mx-auto"
              >
                  <div className="glass-card relative overflow-hidden group cursor-default">
                      {/* Animated background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-secondary-500/5 to-accent-500/5 group-hover:from-primary-500/10 group-hover:via-secondary-500/10 group-hover:to-accent-500/10 transition-all duration-500" />

                      <div className="relative z-10 text-center py-8 px-6 space-y-4">
                          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg mb-4">
                              <FontAwesomeIcon icon={faBriefcase} className="text-2xl text-white" />
                          </div>
                          <h3 className="text-2xl font-bold gradient-text">
                              Enterprise & Client Work
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto">
                              The projects showcased above represent my publicly available work.
                              The majority of my professional experience involves enterprise-level applications,
                              internal tools, and custom client solutions protected under NDAs.
                          </p>
                          <div className="flex flex-wrap justify-center gap-3 pt-4">
                              <span className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full text-sm font-semibold text-primary-600 dark:text-primary-400">
                                  🏢 Enterprise Systems
                              </span>
                              <span className="px-4 py-2 bg-gradient-to-r from-secondary-500/10 to-accent-500/10 rounded-full text-sm font-semibold text-secondary-600 dark:text-secondary-400">
                                  🔒 Confidential Projects
                              </span>
                              <span className="px-4 py-2 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-full text-sm font-semibold text-accent-600 dark:text-accent-400">
                                  🤝 Client Solutions
                              </span>
                          </div>
                      </div>
                  </div>
              </motion.div>

              {/* Decorative gradient blobs */}
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-secondary-500/10 to-accent-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>
      </section>
  )
}

export default Projects