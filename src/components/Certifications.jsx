// src/components/Certifications.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { certifications, certifCategories } from '../data/certifications'

const categoryColors = {
    Frontend: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    Backend:  'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    Data:     'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    Business: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
}

const categoryIcons = {
    Frontend: '🎨',
    Backend:  '⚙️',
    Data:     '📊',
    Business: '💼',
}

export default function Certifications() {
    const [filter, setFilter] = useState('tous')

    const filtered = filter === 'tous'
        ? certifications
        : certifications.filter(c => c.category === filter)

    return (
        <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-800/50">
            <div className="max-w-6xl mx-auto px-4 md:px-8">

                {/* Titre */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Certifications
                    </h2>

                </motion.div>

                {/* Filtres */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {certifCategories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-lg font-medium transition-all ${
                                filter === cat
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600'
                            }`}
                        >
                            {cat !== 'tous' && <span className="mr-2">{categoryIcons[cat]}</span>}
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </motion.div>

                {/* Grille */}
                <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filtered.map((cert, idx) => (
                            <motion.div
                                key={cert.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: idx * 0.05, duration: 0.3 }}
                                className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-600 flex flex-col gap-4"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between gap-3">
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[cert.category]}`}>
                                        {categoryIcons[cert.category]} {cert.category}
                                    </span>

                                </div>

                                {/* Titre */}
                                <div className="flex-1">
                                    <h3 className="font-semibold text-slate-900 dark:text-white text-base leading-snug">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                                        </svg>
                                        {cert.platform}
                                    </p>
                                </div>


                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    )
}
