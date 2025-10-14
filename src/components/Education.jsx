// src/components/Education.jsx
import { motion } from 'framer-motion'
import Timeline from './common/Timeline'
import { education } from '../data/education'

export default function Education() {
    return (
        <section id="education" className="py-20 bg-slate-50 dark:bg-slate-800">
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
                        Formation
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Mes études et certifications
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Timeline items={education} isEducation={true} />
                </motion.div>
            </div>
        </section>
    )
}