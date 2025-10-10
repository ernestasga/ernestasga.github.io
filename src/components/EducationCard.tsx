"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Education } from '@/types/education';

interface Props {
    item: Education;
    index: number;
}

const EducationCard: React.FC<Props> = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
        >
            <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card relative group cursor-pointer overflow-hidden h-full flex flex-col"
            >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />

                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-6 text-white">
                    <h3 className="text-2xl font-bold">{item.schoolName}</h3>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-6 flex-grow">
                    {/* Degree */}
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                        {item.subHeader}
                    </p>

                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white w-fit rounded-full text-sm font-semibold">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span>{item.duration}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400">
                        {item.desc}
                    </p>

                    {/* Bullet Points */}
                    {item.descBullets && item.descBullets.length > 0 && (
                        <ul className="space-y-2">
                            {item.descBullets.map((bullet, bulletIndex) => (
                                <motion.li
                                    key={bulletIndex}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: bulletIndex * 0.1 }}
                                    className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 group/item"
                                >
                                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 group-hover/item:w-2 group-hover/item:h-2 transition-all" />
                                    <span className="group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors">
                                        {bullet}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Bottom accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
        </motion.div>
    )
}
export default EducationCard