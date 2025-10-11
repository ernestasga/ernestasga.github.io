"use client"

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useExtractColors } from 'react-extract-colors';
import { type ExperienceJob } from '@/types/experience';
import Image from 'next/image';

interface Props {
    item: ExperienceJob;
    index: number;
}

const ExperienceCard: React.FC<Props> = React.memo(({ item, index }) => {
    const { dominantColor } = useExtractColors(item.companylogo, {
        maxColors: 1,
        format: 'hex'
    });

    // Memoize the base color to prevent recalculations
    const baseColor = useMemo(() => dominantColor || '#6366f1', [dominantColor]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative h-full"
        >
            <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card relative group cursor-pointer overflow-hidden h-full flex flex-col"
            >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />

                {/* Header with dynamic color */}
                <div
                    className="relative px-6 py-4 text-white text-xl font-bold overflow-hidden"
                    style={{
                        background: `linear-gradient(135deg, ${baseColor} 0%, #4f46e5 100%)`
                    }}
                >
                    <div className="relative z-10">{item.role}</div>
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                    </div>
                </div>

                {/* Company Logo */}
                <div className="flex justify-center -mt-12 mb-4 relative z-10">
                    <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg ring-4 ring-white dark:ring-gray-900"
                    >
                        <Image
                            className="h-20 w-20 object-contain"
                            src={item.companylogo}
                            alt={`${item.company} logo`}
                            width={80}
                            height={80}
                        />
                    </motion.div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 p-6 flex-grow">
                    {/* Company & Date */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-2xl gradient-text">
                            {item.company}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span>{item.date}</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">
                        {item.desc}
                    </p>

                    {/* Bullet Points */}
                    {item.descBullets && item.descBullets.length > 0 && (
                        <ul className="space-y-2 flex-grow">
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

                {/* Bottom accent */}
                <div className="h-1 w-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
        </motion.div>
    );
});

ExperienceCard.displayName = 'ExperienceCard';

export default ExperienceCard;
