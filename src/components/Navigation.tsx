"use client"

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import socialItems from '@/data/social'
import navigationItems from '@/data/navigation'

const Navigation: React.FC = () => {
    const mobileMenuRef = useRef<any>(null); // Ref for the mobile menu
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const lastScrollTop = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop.current) {
                // Scrolling down
                setIsSticky(false);
            } else {
                // Scrolling up
                setIsSticky(true);
            }
            lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll; // For mobile or negative scrolling
        };

        const handleOutsideClick = (event: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                setMobileMenuOpen(false); // Close the menu
            }
        };

        // Add scroll and mousedown listeners
        window.addEventListener('scroll', handleScroll, { passive: true });
        if (mobileMenuOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        // Clean up the listeners
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [mobileMenuOpen]);

    // Calculate the height of the navbar for spacing when fixed
    useEffect(() => {
        const adjustPadding = () => {
            const navHeight = navRef.current ? navRef.current.offsetHeight : 0;
            document.body.style.paddingTop = isSticky ? `${navHeight}px` : '0';
        };

        window.addEventListener('resize', adjustPadding);
        adjustPadding();

        return () => {
            window.removeEventListener('resize', adjustPadding);
        };
    }, [isSticky]);

    return (
        <nav ref={navRef} className={`${isSticky ? 'fixed glass shadow-lg' : 'relative bg-transparent'} top-0 left-0 right-0 z-50 py-3 transition-all duration-500 ease-in-out`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className={`flex justify-between items-center md:space-x-10 ${mobileMenuOpen && 'hidden'}`}>
                    <div id="nav-title" className="flex justify-start lg:w-0 lg:flex-1 text-3xl">
                        <Link href={navigationItems[0].path}>{navigationItems[0].name}</Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open menu</span>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    <div className="hidden md:flex items-center justify-end space-x-8">
                        {navigationItems.map((item, index) => item.visible !== false && (
                            <Link key={index} href={item.path} className='relative group font-semibold text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors'>
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </div>
                    <div className="hidden md:flex flex-row items-center gap-4">
                        {socialItems.map((item, index) => (item.visible !== false && item.icon) && (
                            <Link key={index} href={item.path} className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-primary-500/10 dark:hover:bg-primary-400/10 hover:scale-110 transition-all" target="_blank">
                                <FontAwesomeIcon icon={item.icon} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400" />
                            </Link>
                        ))}
                        <div className="ml-2 pl-4 border-l border-gray-300 dark:border-gray-700">
                            <ThemeSwitcher />
                        </div>
                    </div>                
                </div>
            </div>

            {/* Mobile menu - Modern glass design */}
            <div
                ref={mobileMenuRef}
                className={`${mobileMenuOpen ? 'block animate-in fade-in slide-in-from-top-5 duration-200' : 'hidden'} md:hidden absolute top-2 left-4 right-4 p-6 rounded-2xl glass-card shadow-2xl border-2 border-gray-200/50 dark:border-white/10`}
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div id="nav-title" className="text-2xl gradient-text">
                        <Link href={navigationItems[0].path} onClick={() => setMobileMenuOpen(false)}>
                            {navigationItems[0].name}
                        </Link>
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        type="button"
                        className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-red-500/10 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-all"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Close menu</span>
                        <FontAwesomeIcon icon={faTimes} className="text-xl" />
                    </button>
                </div>

                {/* Gradient divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent mb-6" />

                {/* Navigation Links */}
                <div className="flex flex-col gap-2 mb-6">
                    {navigationItems.map((item, index) => item.visible !== false && (
                        <Link
                            key={index}
                            href={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="relative group px-4 py-3 rounded-lg text-center font-semibold text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-500/10 dark:hover:bg-primary-400/10 transition-all"
                        >
                            {item.name}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-3/4 transition-all duration-300" />
                        </Link>
                    ))}
                </div>

                {/* Social Links */}
                <div className="flex flex-row justify-center gap-3 mb-6">
                    {socialItems.map((item, index) => (item.visible !== false && item.icon) && (
                        <Link
                            key={index}
                            href={item.path}
                            target="_blank"
                            className="relative w-10 h-10 flex items-center justify-center rounded-lg hover:scale-110 hover:rotate-6 transition-all duration-300 group"
                            style={{ backgroundColor: `${item.color}20` }}
                        >
                            {/* Glow effect on hover */}
                            <div
                                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"
                                style={{ backgroundColor: `${item.color}40` }}
                            />
                            <FontAwesomeIcon
                                icon={item.icon}
                                className="text-lg group-hover:scale-110 transition-transform"
                                style={{ color: item.color }}
                            />
                        </Link>
                    ))}
                </div>

                {/* Gradient divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-secondary-500 to-transparent mb-6" />

                {/* Theme Switcher */}
                <div className="flex justify-center">
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;