// components/Header.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Waves } from 'lucide-react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/coach', label: 'Coach' },
        { href: '/achievements', label: 'Achievements' },
        { href: '/testimonials', label: 'Testimonials' },
        { href: '/programs', label: 'Programs' },
        { href: '/contact', label: 'Contact' },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="relative">
                            <Waves className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                            <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            Aether Aquatic
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors relative group ${isActive(item.href)
                                        ? 'text-cyan-400'
                                        : 'text-slate-300 hover:text-cyan-400'
                                    }`}
                            >
                                {item.label}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} />
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-md border-b border-cyan-500/20">
                        <nav className="container mx-auto px-4 py-4 space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block py-2 px-3 rounded-lg text-sm font-medium transition-colors ${isActive(item.href)
                                            ? 'text-cyan-400 bg-cyan-400/10'
                                            : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;