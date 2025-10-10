"use client"

import { useState, useEffect, useRef } from 'react';

interface UseResumeModalReturn {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  viewTime: number;
  viewCount: number;
  achievements: string[];
}

export const useResumeModal = (): UseResumeModalReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewTime, setViewTime] = useState(0);
  const [viewCount, setViewCount] = useState(0);
  const [achievements, setAchievements] = useState<string[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load view count from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('resumeViewCount');
    if (stored) {
      setViewCount(parseInt(stored, 10));
    }
  }, []);

  const openModal = () => {
    setIsOpen(true);
    setViewTime(0);

    // Increment view count
    const newCount = viewCount + 1;
    setViewCount(newCount);
    localStorage.setItem('resumeViewCount', newCount.toString());

    // Start timer
    intervalRef.current = setInterval(() => {
      setViewTime(prev => prev + 1);
    }, 1000);
  };

  const closeModal = () => {
    setIsOpen(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Achievement triggers based on viewTime
  useEffect(() => {
    if (!isOpen) return;

    if (viewTime === 10 && !achievements.includes('Quick Peek')) {
      setAchievements(prev => [...prev, 'Quick Peek']);
    }
    if (viewTime === 30 && !achievements.includes('Resume Detective')) {
      setAchievements(prev => [...prev, 'Resume Detective']);
    }
    if (viewTime === 60 && !achievements.includes('Thorough Reviewer')) {
      setAchievements(prev => [...prev, 'Thorough Reviewer']);
    }
  }, [viewTime, isOpen, achievements]);

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return {
    isOpen,
    openModal,
    closeModal,
    viewTime,
    viewCount,
    achievements,
  };
};
