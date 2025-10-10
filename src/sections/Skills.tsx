"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { skillsContent, skillBadges, skills, proficiency } from '@/data/skills'
import SkillCard from '@/components/SkillCard'

const Skills: React.FC = () => {
    return (
        <section id="what-i-do" className="py-20 px-4 relative">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        <span className="gradient-text">{skillsContent.title}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                    >
                        {skillsContent.description}
                    </motion.p>
                </motion.div>

                {/* Tech Stack Grid - Compact */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-16"
                >
                    <h3 className="text-xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
                        Technologies & Tools
                    </h3>
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 max-w-5xl mx-auto">
                        {skillBadges.map((item, index) => (
                            <SkillCard
                                key={index}
                                icon={item.fontAwesomeClassname}
                                name={item.skillName}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* What I Do Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
                    {/* Left - Skills List */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h3 className="text-3xl font-bold mb-6 gradient-text">
                            What I Bring to the Table
                        </h3>
                        {skills.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="glass-card group cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-4 transition-all duration-300" />
                                    <p className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {item}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right - Proficiency Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold mb-6 gradient-text">
                            {skillsContent.proficiencyTitle}
                        </h3>
                        {proficiency.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                className="glass-card group cursor-pointer relative overflow-hidden"
                            >
                                {/* Progress bar animation */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                <h4 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2 uppercase tracking-wide">
                                    {item.subject}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Decorative gradient blob */}
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>
        </section>
    )
}

export default Skills