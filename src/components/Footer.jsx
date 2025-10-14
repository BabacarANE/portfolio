// src/components/Footer.jsx
import { ArrowUp } from 'lucide-react'
import { SOCIAL_LINKS } from '../utils/constants'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-slate-900 dark:bg-black text-white py-12">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Portfolio</h3>
                        <p className="text-slate-400 text-sm">
                            Développeur Full-Stack passionné par la création d'expériences web modernes.
                        </p>
                    </div>

                    {/* Liens rapides */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li><a href="#hero" className="hover:text-blue-400 transition-colors">Accueil</a></li>
                            <li><a href="#about" className="hover:text-blue-400 transition-colors">À propos</a></li>
                            <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projets</a></li>
                            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Réseaux */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Réseaux sociaux</h3>
                        <div className="flex gap-4">
                            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                                <span className="text-sm">GH</span>
                            </a>
                            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                                <span className="text-sm">IN</span>
                            </a>
                            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                                <span className="text-sm">TW</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Séparateur */}
                <div className="border-t border-slate-800 pt-8 flex justify-between items-center">
                    <p className="text-slate-400 text-sm">
                        © 2025 Babacar ANE. Tous droits réservés.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    )
}