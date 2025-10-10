"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { experienceContent, experienceJobs } from '@/data/experience'
import ExperienceCard from '@/components/ExperienceCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 px-4 relative">
            <div className="container mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex flex-col gap-4 text-left max-w-3xl">
                        <div className="flex flex-row gap-4 items-center">
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.2 }}
                                transition={{ duration: 0.5 }}
                            >
                                <FontAwesomeIcon
                                    icon={experienceContent.icon}
                                    className="text-5xl text-primary-600 dark:text-primary-400"
                                />
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-bold">
                                <span className="gradient-text">{experienceContent.title}</span>
                            </h2>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            {experienceContent.description}
                        </p>
                    </div>
                </motion.div>

                {/* Experience Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {experienceJobs.map((item, index) => (
                        <ExperienceCard key={index} item={item} index={index} />
                    ))}
                </div>

                {/* Decorative blobs */}
                <div className="absolute -top-20 left-0 w-96 h-96 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 right-0 w-96 h-96 bg-gradient-to-br from-secondary-500/10 to-accent-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>
        </section>
    )
}

export default Experience
