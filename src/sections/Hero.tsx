"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import heroContent from '@/data/hero'
import socialItems from '@/data/social'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import ParticleBackground from '@/components/ParticleBackground'
import TypingAnimation from '@/components/TypingAnimation'
import ResumeModal from '@/components/ResumeModal'
import { useResumeModal } from '@/hooks/useResumeModal'

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isOpen, openModal, closeModal, viewTime, viewCount, achievements } = useResumeModal();

  useEffect(() => {
    let rafId: number | null = null;
    let lastUpdate = 0;
    const THROTTLE_MS = 16; // ~60fps max update rate

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();

      // Throttle updates to max 60fps
      if (now - lastUpdate < THROTTLE_MS) {
        return;
      }

      // Use RAF to batch DOM updates
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        lastUpdate = now;
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const typingTexts = [
    "Full-Stack Developer",
    "Blockchain Enthusiast",
    "Cybersecurity Expert",
    "AI Enthusiast",
    "Problem Solver"
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-12">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x / 50,
            y: mousePosition.y / 50,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-secondary-500/30 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x / 50,
            y: -mousePosition.y / 50,
          }}
          transition={{ type: "spring", stiffness: 50 }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            {/* Greeting with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <span className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-semibold">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-text">
                Ernestas
              </span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
            >
              <TypingAnimation texts={typingTexts} />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            >
              {heroContent.description}
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-row gap-4 flex-wrap"
            >
              {socialItems.map((item, index) => item.icon && (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={item.path}
                    target='_blank'
                    className="w-12 h-12 flex items-center justify-center rounded-xl glass hover:shadow-neon transition-all duration-300"
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-xl"
                      style={{ color: item.color }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <button
                  onClick={openModal}
                  className="magnetic-button flex items-center justify-center gap-2 w-full"
                >
                  <FontAwesomeIcon icon={faFile} />
                  <span>View Resume</span>
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="#projects"
                  className="px-8 py-4 rounded-full font-semibold border-2 border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-500 hover:text-white dark:hover:text-white transition-all duration-300 flex items-center justify-center w-full"
                >
                  View Projects
                </Link>
              </motion.div>

              {/* Scroll Indicator - Mobile only, below buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="sm:hidden mt-4"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="flex flex-col items-center gap-2 text-gray-400"
                >
                  <FontAwesomeIcon icon={faArrowDown} className="text-xl" />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Decorative 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="relative flex items-center justify-center mt-8 lg:mt-0 w-full"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full max-w-lg px-4 sm:px-0"
            >
              {/* Glowing card */}
              <div className="glass-card p-4 sm:p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 space-y-4 sm:space-y-6">
                  {/* Code-like decoration */}
                  <div className="font-mono text-xs sm:text-sm space-y-2 text-gray-600 dark:text-gray-400 overflow-x-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-accent-500">const</span>
                      <span className="text-secondary-500">developer</span>
                      <span>=</span>
                      <span className="text-primary-500">{`{`}</span>
                    </div>
                    <div className="pl-4 space-y-1">
                      <div>
                        <span className="text-purple-500">name:</span>{' '}
                        <span className="text-green-500">&apos;{heroContent.name}&apos;</span>,
                      </div>
                      <div>
                        <span className="text-purple-500">skills:</span>{' '}
                        <span className="text-yellow-500">[{heroContent.skills.map((skill, i) => `'${skill}'`).join(', ')}]</span>,
                      </div>
                      <div>
                        <span className="text-purple-500">passion:</span>{' '}
                        <span className="text-green-500">&apos;Building scalable solutions&apos;</span>,
                      </div>
                      <div>
                        <span className="text-purple-500">available:</span>{' '}
                        <span className="text-blue-500">true</span>
                      </div>
                    </div>
                    <div className="text-primary-500">{`}`}</div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-300 dark:border-gray-700">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">10+</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Years Exp</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">50+</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">100%</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Dedication</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Desktop only, at bottom center */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="hidden sm:flex absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-400"
          >
            <span className="text-sm">Scroll to explore</span>
            <FontAwesomeIcon icon={faArrowDown} className="text-xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isOpen}
        onClose={closeModal}
        resumeUrl={heroContent.resumeLink}
        viewTime={viewTime}
        viewCount={viewCount}
        achievements={achievements}
      />
    </section>
  )
}

export default Hero