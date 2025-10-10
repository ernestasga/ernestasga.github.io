"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { educationContent, education } from '@/data/education'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EducationCard from '@/components/EducationCard'

const Education: React.FC = () => {
    return (
        <section id="education" className="py-20 px-4 relative">
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
                                    icon={educationContent.icon}
                                    className="text-5xl text-primary-600 dark:text-primary-400"
                                />
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-bold">
                                <span className="gradient-text">{educationContent.title}</span>
                            </h2>
                        </div>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            {educationContent.description}
                        </p>
                    </div>
                </motion.div>

                {/* Education Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
                    {education.map((item, index) => (
                        <EducationCard key={index} item={item} index={index} />
                    ))}
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>
        </section>
    )
}

export default Education
