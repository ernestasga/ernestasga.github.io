"use client"

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faDownload,
  faPrint,
  faExternalLinkAlt,
  faEnvelope,
  faExpand
} from '@fortawesome/free-solid-svg-icons';
import confetti from 'canvas-confetti';
import QuickStats from './QuickStats';
import { Rnd } from 'react-rnd';
import heroContent from '@/data/hero';
import ShareModal from './ShareModal';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
  viewTime: number;
  viewCount: number;
  achievements: string[];
}

const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  resumeUrl,
  viewTime,
  viewCount,
  achievements,
}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 0, height: 0 });
  const hasInitialized = useRef(false);

  // Initialize position and size only on first open
  useEffect(() => {
    if (isOpen && !hasInitialized.current) {
      const defaultWidth = 1200;
      const defaultHeight = window.innerHeight - 100; // Use most of viewport height
      const centerX = (window.innerWidth - defaultWidth) / 2;
      const centerY = (window.innerHeight - defaultHeight) / 2;
      setPosition({ x: Math.max(0, centerX), y: Math.max(0, centerY) });
      setSize({
        width: Math.min(defaultWidth, window.innerWidth - 64),
        height: Math.min(defaultHeight, window.innerHeight - 64)
      });
      setIsMinimized(false);
      hasInitialized.current = true;
    }

    // Reset on close
    if (!isOpen) {
      hasInitialized.current = false;
    }
  }, [isOpen]);

  // Confetti on open
  useEffect(() => {
    if (isOpen && !isMinimized) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#8b5cf6', '#ec4899'],
      });
    }
  }, [isOpen, isMinimized]);

  const handlePrint = () => {
    window.open(resumeUrl, '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = `${heroContent.name.replace(/\s+/g, '_')}_Resume.pdf`;
    link.click();
  };


  const handleViewInTab = () => {
    window.open(resumeUrl, '_blank');
  };

  const handleEmail = () => {
    window.location.href = `mailto:?subject=${heroContent.name} Resume&body=Check out my resume: ${window.location.origin}${resumeUrl}`;
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const actions = [
    { icon: faPrint, label: 'Print', onClick: handlePrint, color: '#3b82f6' },
    { icon: faDownload, label: 'Download', onClick: handleDownload, color: '#10b981' },
    { icon: faExternalLinkAlt, label: 'New Tab', onClick: handleViewInTab, color: '#f59e0b' },
    { icon: faEnvelope, label: 'Email', onClick: handleEmail, color: '#ec4899' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Only show when not minimized */}
          {!isMinimized && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            />
          )}

          {/* Modal - Draggable & Resizable */}
          <div className="fixed inset-0 z-[9999] pointer-events-none">
            <Rnd
              position={position}
              size={size}
              onDragStop={(_e, d) => setPosition({ x: d.x, y: d.y })}
              onResizeStop={(_e, _direction, ref, _delta, newPosition) => {
                setSize({
                  width: parseInt(ref.style.width),
                  height: parseInt(ref.style.height)
                });
                setPosition(newPosition);
              }}
              minWidth={600}
              minHeight={400}
              bounds="parent"
              dragHandleClassName="drag-handle"
              className="pointer-events-auto"
              style={{ display: isMinimized ? 'none' : 'block' }}
            >
              <div className="w-full h-full flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                {/* macOS Title Bar */}
                <div className="drag-handle flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 cursor-move">
                  {/* Traffic Lights */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={onClose}
                      className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                      aria-label="Close"
                    />
                    <button
                      onClick={toggleMinimize}
                      className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
                      aria-label="Minimize"
                    />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>

                  {/* Title */}
                  <div className="flex-1 text-center">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {heroContent.name.replace(/\s+/g, '_')}_Resume.pdf
                    </span>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 transition-colors"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-row overflow-hidden">
                  {/* PDF Viewer */}
                  <div className="flex-1 relative bg-gray-50 dark:bg-gray-900">
                    <iframe
                      src={resumeUrl}
                      className="w-full h-full"
                      title="Resume PDF"
                    />
                    {/* Loading State */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-400 dark:text-gray-600"
                      >
                        Loading resume...
                      </motion.div>
                    </div>
                  </div>

                  {/* Sidebar - Stats & Fun */}
                  <div className="w-72 flex-shrink-0 p-4 bg-gray-50 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 overflow-y-auto">
                    <QuickStats
                      viewTime={viewTime}
                      viewCount={viewCount}
                      achievements={achievements}
                    />
                  </div>
                </div>

                {/* Action Bar */}
                <div className="flex flex-wrap items-center justify-center gap-2 p-4 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                  {actions.map((action) => (
                    <motion.button
                      key={action.label}
                      onClick={action.onClick}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all group"
                    >
                      <FontAwesomeIcon
                        icon={action.icon}
                        className="text-sm"
                        style={{ color: action.color }}
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
                        {action.label}
                      </span>
                    </motion.button>
                  ))}
                  <ShareModal resumeUrl={resumeUrl} userName={heroContent.name} />
                </div>
              </div>
            </Rnd>

            {/* Minimized Dock Icon */}
            {isMinimized && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto"
              >
                <button
                  onClick={toggleMinimize}
                  className="px-6 py-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-full shadow-2xl hover:scale-110 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faExpand}
                      className="text-primary-600 dark:text-primary-400 group-hover:rotate-180 transition-transform duration-300"
                    />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Resume
                    </span>
                  </div>
                </button>
              </motion.div>
            )}
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
