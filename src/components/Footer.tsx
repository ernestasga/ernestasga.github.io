"use client"

import Image from 'next/image'
import React from 'react'
import footerContent from '@/data/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope, faHeart, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import socialItems from '@/data/social'
import Link from 'next/link'
import { ThemeSwitcher } from './ThemeSwitcher';
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="get-in-touch" className="relative overflow-hidden bg-transparent">
            {/* Main Footer Content */}
            <div className="relative z-10 py-20 px-4">
                <div className="container mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold mb-4">
                            <span className="gradient-text">{footerContent.title}</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 italic mb-4">{footerContent.description}</p>
                        <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">{footerContent.bio}</p>
                    </motion.div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                        {/* Profile Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center lg:items-start gap-6"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative group"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                                <Image
                                    src={footerContent.avatar_url}
                                    alt="profile pic"
                                    className="relative rounded-full border-4 border-white/10"
                                    width={180}
                                    height={180}
                                />
                            </motion.div>
                            <div className="flex items-center gap-3 glass px-4 py-2 rounded-lg">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary-500 dark:text-primary-400" />
                                <span className="font-semibold text-gray-700 dark:text-white">{footerContent.location}</span>
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col gap-6"
                        >
                            <h3 className="text-2xl font-bold gradient-text mb-2">Get In Touch</h3>

                            <motion.a
                                href={`mailto:${footerContent.email}`}
                                whileHover={{ x: 5 }}
                                className="glass-card group cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <FontAwesomeIcon icon={faEnvelope} className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                        <p className="font-semibold text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                            {footerContent.email}
                                        </p>
                                    </div>
                                </div>
                            </motion.a>

                            <motion.a
                                href={`tel:${footerContent.phone}`}
                                whileHover={{ x: 5 }}
                                className="glass-card group cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <FontAwesomeIcon icon={faPhone} className="text-white text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                        <p className="font-semibold text-gray-800 dark:text-white group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">
                                            {footerContent.phone}
                                        </p>
                                    </div>
                                </div>
                            </motion.a>
                        </motion.div>

                        {/* Social & Theme */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col gap-6"
                        >
                            <h3 className="text-2xl font-bold gradient-text mb-2">Connect With Me</h3>

                            <div className="flex flex-wrap gap-3">
                                {socialItems.map((item, index) => item.icon && (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            href={item.path}
                                            target='_blank'
                                            className="w-12 h-12 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow"
                                            style={{ backgroundColor: item.color }}
                                        >
                                            <FontAwesomeIcon icon={item.icon} className="text-white text-xl" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="pt-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Theme Preference</p>
                                <ThemeSwitcher />
                            </div>
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <div className="relative my-12">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <motion.button
                                onClick={scrollToTop}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <FontAwesomeIcon icon={faArrowUp} className="text-white" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-center text-gray-600 dark:text-gray-400 text-sm"
                    >
                        <p className="flex items-center justify-center gap-2 flex-wrap">
                            <span>© {new Date().getFullYear()} Ernestas Garjonis.</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-1">
                                Built with
                                <FontAwesomeIcon icon={faHeart} className="text-red-500 animate-pulse" />
                                and lots of coffee
                            </span>
                        </p>
                    </motion.div>
                </div>

                {/* Decorative gradient blobs */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-accent-500/5 to-primary-500/5 dark:from-accent-500/10 dark:to-primary-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>
        </footer>
    )
}

export default Footer