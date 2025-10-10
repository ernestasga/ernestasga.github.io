"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from "@iconify/react";

interface SkillCardProps {
  icon: string;
  name: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, index }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
      className="w-full"
    >
      <motion.div
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="glass-card group cursor-pointer relative overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-2 p-3 aspect-square">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon
              icon={icon}
              className="text-3xl sm:text-4xl text-primary-600 dark:text-primary-400"
            />
          </motion.div>
          <span className="text-[0.65rem] sm:text-xs font-semibold text-center text-gray-700 dark:text-gray-300 leading-tight">
            {name}
          </span>
        </div>

        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
