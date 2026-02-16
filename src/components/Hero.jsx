// src/components/Hero.jsx
import { ChevronDown, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from './common/Button'

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center pt-20">
            {/* Background blur */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
            >
                {/* Avatar */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mx-auto"
                >
                    <img
                        src="/images/profile.jpg"
                        alt="Profile"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-600 shadow-2xl object-cover"
                    />
                </motion.div>

                {/* Titre */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white"
                >
                    Bonjour, je suis
                    <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Babacar ANE
          </span>
                </motion.h1>

                {/* Sous-titre */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
                >
                    Développeur Full-Stack passionné par la création d'expériences web modernes et performantes
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
                >
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Voir mes projets
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Me contacter
                    </Button>
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => {
                            // Créer un lien de téléchargement temporaire
                            const link = document.createElement('a');
                            link.href = '/documents/cv_babacar_ane.pdf';
                            link.download = 'CV_Babacar_ANE.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                        className="flex items-center gap-2"
                    >
                        <Download size={20} />
                        Télécharger CV
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10"
            >
                <ChevronDown size={32} className="text-blue-600 dark:text-blue-400" />
            </motion.div>
        </section>
    )
}