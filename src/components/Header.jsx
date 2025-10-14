
// src/components/Header.jsx
import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { NAV_LINKS, SOCIAL_LINKS } from '../utils/constants'

export default function Header({ isDark, toggleTheme }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-md">
            <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                    Portfolio
                </div>

                {/* Menu Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Actions Droite */}
                <div className="flex items-center gap-4">
                    {/* Toggle Theme */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {isDark ? (
                            <Sun size={20} className="text-yellow-400" />
                        ) : (
                            <Moon size={20} className="text-slate-700" />
                        )}
                    </button>

                    {/* Hamburger Menu Mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X size={24} className="text-slate-900 dark:text-white" />
                        ) : (
                            <Menu size={24} className="text-slate-900 dark:text-white" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Menu Mobile */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                    <div className="px-4 py-4 space-y-3">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}