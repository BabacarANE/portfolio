// src/components/About.jsx
import { motion } from 'framer-motion'
import { Code2, Zap, Target } from 'lucide-react'

export default function About() {
    const highlights = [
        {
            icon: Code2,
            title: 'Development',
            description: 'Développement d\'applications web modernes et performantes'
        },
        {
            icon: Zap,
            title: 'Performance',
            description: 'Optimisation des performances et best practices'
        },
        {
            icon: Target,
            title: 'UX Design',
            description: 'Interfaces intuitives et expériences utilisateur optimales'
        }
    ]

    return (
        <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* Titre */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        À propos de moi
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Découvrez mon parcours et mes compétences
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    {/* Texte */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-4 text-slate-600 dark:text-slate-300"
                    >
                        <p>
                            Bienvenue sur mon portfolio ! Je suis un développeur passionné avec une expertise dans le développement web full-stack.
                        </p>
                        <p>
                            Avec plusieurs années d'expérience, j'ai travaillé sur des projets variés en utilisant les dernières technologies du web.
                        </p>
                        <p>
                            Mon objectif est de créer des solutions innovantes qui allient performance, esthétique et expérience utilisateur exceptionnelle.
                        </p>
                        <p>
                            En dehors du code, j'aime apprendre de nouvelles technologies et contribuer à des projets open source.
                        </p>
                    </motion.div>

                    {/* Image ou Points clés */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {highlights.map((item, idx) => {
                            const Icon = item.icon
                            return (
                                <div key={idx} className="flex gap-4 p-4 bg-white dark:bg-slate-700 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                                        <Icon size={24} className="text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </motion.div>
                </div>

                {/* Statistiques */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-3 gap-4 md:gap-8 text-center bg-white dark:bg-slate-700 p-8 rounded-lg"
                >
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                        <p className="text-slate-600 dark:text-slate-400 mt-2">Projets réalisés</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">2</div>
                        <p className="text-slate-600 dark:text-slate-400 mt-2">Années d'expérience</p>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">+5</div>
                        <p className="text-slate-600 dark:text-slate-400 mt-2">Langage de programmation</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
