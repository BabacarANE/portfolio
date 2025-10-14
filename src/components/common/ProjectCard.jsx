// src/components/common/ProjectCard.jsx
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ project }) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            {/* Image */}
            <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-400 to-blue-600">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
            </div>

            {/* Contenu */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                        >
              {tech}
            </span>
                    ))}
                </div>

                {/* Infos */}
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-4 space-y-1">
                    <p><strong>Rôle:</strong> {project.role}</p>
                    <p><strong>Durée:</strong> {project.duration}</p>
                </div>

                {/* Liens */}
                <div className="flex gap-3">
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                        <ExternalLink size={16} />
                        Voir le projet
                    </a>
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
                    >
                        <Github size={16} />
                        Code
                    </a>
                </div>
            </div>
        </div>
    )
}
