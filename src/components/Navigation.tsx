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
        <nav ref={navRef} className={`${isSticky ? 'fixed bg-bg-dark text-white' : 'relative'} top-0 w-full z-50 shadow px-4 py-2 transition-[top] duration-1000 ease-in-out`}>
            <div className="max-w-6xl conainer mx-auto">
                <div className={`flex justify-between items-center  md:space-x-10 ${mobileMenuOpen && 'hidden'}`}>
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
                    <div className="hidden md:flex items-center justify-end space-x-10">
                        {navigationItems.map((item, index) => item.visible !== false && (
                            <Link key={index} href={item.path} className='hover:scale-110 hover:text-primary'>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden md:flex flex-row items-center gap-4 my-4">
                        {socialItems.map((item, index) => (item.visible !== false && item.icon) && (
                            <Link key={index} href={item.path} className="hover:scale-125 hover:text-secondary">
                                <FontAwesomeIcon icon={item.icon} />
                            </Link>
                        ))}
                        <div className="ml-4">
                            <ThemeSwitcher />
                        </div>
                    </div>                
                </div>
            </div>

            {/* Mobile menu, toggle classes based on menu state. */}
            <div ref={mobileMenuRef} className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-bg-light text-text-light absolute top-2 left-8 right-8 p-8 rounded-xl`}>
                <div id="nav-title" className="flex justify-between lg:w-0 lg:flex-1 text-2xl mb-4">
                    <Link href={navigationItems[0].path}>{navigationItems[0].name}</Link>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        type="button"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Close menu</span>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <hr className="border-1 border-gray-400 my-2" />
                <div className="flex flex-col items-center gap-4 mt-4">
                    {navigationItems.map((item, index) => item.visible !== false && (
                        <Link key={index} href={item.path}>
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex flex-row gap-4 my-4">
                        {socialItems.map((item, index) => (item.visible !== false && item.icon) && (
                            <Link key={index} href={item.path}>
                                <FontAwesomeIcon icon={item.icon} />
                            </Link>
                        ))}
                    </div>
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;