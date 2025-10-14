// src/components/Projects.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './common/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
    const [filter, setFilter] = useState('tous')

    const technologies = ['tous', 'React', 'Node.js', 'Laravel', 'Vue.js', 'PostgreSQL', 'Supabase', 'Socket.io']

    const filteredProjects = filter === 'tous'
        ? projects
        : projects.filter(p => p.technologies.includes(filter))

    return (
        <section id="projects" className="py-20">
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
                        Mes Projets
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Découvrez mes réalisations techniques
                    </p>
                </motion.div>

                {/* Filtres */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {technologies.map(tech => (
                        <button
                            key={tech}
                            onClick={() => setFilter(tech)}
                            className={`px-6 py-2 rounded-lg font-medium transition-all ${
                                filter === tech
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600'
                            }`}
                        >
                            {tech.charAt(0).toUpperCase() + tech.slice(1)}
                        </button>
                    ))}
                </motion.div>

                {/* Grille de Projets */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1, duration: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="col-span-full text-center py-12"
                        >
                            <p className="text-slate-600 dark:text-slate-400 text-lg">
                                Aucun projet trouvé pour ce filtre
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    )
}