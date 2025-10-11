"use client"

import React, { useState, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { type Project } from '@/types/project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface Props {
    item: Project;
    index: number;
}

const statusConfig = {
  live: { color: '#10b981', label: 'Live', glow: 'rgba(16, 185, 129, 0.3)' },
  active: { color: '#3b82f6', label: 'Active', glow: 'rgba(59, 130, 246, 0.3)' },
  'open-source': { color: '#8b5cf6', label: 'Open Source', glow: 'rgba(139, 92, 246, 0.3)' },
  archived: { color: '#6b7280', label: 'Archived', glow: 'rgba(107, 114, 128, 0.3)' }
};

const ProjectCard: React.FC<Props> = React.memo(({ item, index }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number | null>(null);
    const status = useMemo(() => statusConfig[item.status], [item.status]);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        // Cancel previous RAF if it exists
        if (rafRef.current !== null) {
            cancelAnimationFrame(rafRef.current);
        }

        // Throttle using RAF
        rafRef.current = requestAnimationFrame(() => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
            rafRef.current = null;
        });
    }, []);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            className="relative group"
        >
            <div className="glass-card h-full relative overflow-hidden">
                {/* Magnetic glow effect */}
                <motion.div
                    className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-primary-500/30 to-secondary-500/30 blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        left: mousePosition.x - 128,
                        top: mousePosition.y - 128,
                    }}
                />

                <div className="relative z-10 flex flex-col h-full gap-4">
                    {/* Header with status badge */}
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform mb-2">
                                {item.name}
                            </h3>
                            {item.year && (
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {item.year}
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            {/* Status badge */}
                            <div
                                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border"
                                style={{
                                    borderColor: status.color,
                                    color: status.color,
                                    backgroundColor: `${status.color}15`
                                }}
                            >
                                <div
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{ backgroundColor: status.color }}
                                />
                                {status.label}
                            </div>
                            {item.github && (
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.2 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Link
                                        href={item.github}
                                        target="_blank"
                                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                                    >
                                        <FontAwesomeIcon icon={faGithub} className="text-xl" />
                                    </Link>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 flex-grow text-sm leading-relaxed">
                        {item.desc}
                    </p>

                    {/* Tech stack */}
                    {item.techStack && item.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                            {item.techStack.slice(0, 5).map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="px-2 py-0.5 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-md text-xs font-semibold text-primary-600 dark:text-primary-400"
                                >
                                    {tech}
                                </span>
                            ))}
                            {item.techStack.length > 5 && (
                                <span className="px-2 py-0.5 text-xs text-gray-500 dark:text-gray-400">
                                    +{item.techStack.length - 5} more
                                </span>
                            )}
                        </div>
                    )}

                    {/* Links */}
                    <div className="flex flex-row flex-wrap items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                        {item.link && (
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={item.link.path}
                                    target="_blank"
                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg text-sm font-semibold hover:shadow-neon transition-all"
                                >
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    <span>{item.link.name}</span>
                                </Link>
                            </motion.div>
                        )}
                        {item.link2 && (
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={item.link2.path}
                                    target="_blank"
                                    className="flex items-center gap-2 px-4 py-2 border-2 border-primary-500 text-primary-600 dark:text-primary-400 rounded-lg text-sm font-semibold hover:bg-primary-500 hover:text-white transition-all"
                                >
                                    <FontAwesomeIcon icon={faArrowRight} />
                                    <span>{item.link2.name}</span>
                                </Link>
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </motion.div>
    );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
