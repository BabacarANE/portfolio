// src/components/Skills.jsx
import { motion } from 'framer-motion'
import SkillBar from './common/SkillBar'
import { skillsByCategory } from '../data/skills'

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
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
                        Mes Compétences
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Technologies et outils que je maîtrise
                    </p>
                </motion.div>

                {/* Grille des catégories */}
                <div className="grid md:grid-cols-3 gap-8">
                    {Object.entries(skillsByCategory).map(([category, skills], catIdx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: catIdx * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md"
                        >
                            {/* Titre catégorie */}
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 capitalize">
                                {category}
                            </h3>

                            {/* Compétences */}
                            {skills.map((skill, idx) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: (catIdx * 0.1) + (idx * 0.05), duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <SkillBar name={skill.name} level={skill.level} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}