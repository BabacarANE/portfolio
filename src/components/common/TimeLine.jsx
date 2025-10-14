// src/components/common/Timeline.jsx
export default function Timeline({ items, isEducation = false }) {
    return (
        <div className="relative">
            {/* Ligne verticale */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent" />

            {/* Items */}
            <div className="space-y-12">
                {items.map((item, idx) => (
                    <div key={item.id} className="md:flex md:gap-8">
                        {/* Alternance gauche/droite sur desktop */}
                        <div className={`md:w-1/2 ${idx % 2 === 0 ? '' : 'md:order-2'}`}>
                            {/* Point de la timeline */}
                            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 border-4 border-white dark:border-slate-900 rounded-full" />

                            {/* Contenu */}
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                        {isEducation ? item.degree : item.position}
                                    </h3>
                                </div>

                                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                                    {isEducation ? item.institution : item.company}
                                </p>

                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                                    {isEducation ? item.year : `${item.startDate} - ${item.endDate}`}
                                </p>

                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                                    {item.description}
                                </p>

                                {item.technologies && (
                                    <div className="flex flex-wrap gap-2">
                                        {item.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}