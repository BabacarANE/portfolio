// src/components/Experience.jsx
import { motion } from 'framer-motion'
import Timeline from './common/TimeLine.jsx'
import { experience } from '../data/experience'

export default function Experience() {
    return (
        <section id="experience" className="py-20">
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
                        Expérience Professionnelle
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Mon parcours et mes réalisations
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Timeline items={experience} />
                </motion.div>
            </div>
        </section>
    )
}
