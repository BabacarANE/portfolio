// src/components/common/Timeline.jsx
import { useState } from 'react'

export default function Timeline({ items, isEducation = false }) {
    return (
        <div className="relative">
            {/* Ligne verticale */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent" />

            {/* Items */}
            <div className="space-y-16">
                {items.map((item, idx) => (
                    <TimelineItem key={item.id} item={item} idx={idx} isEducation={isEducation} />
                ))}
            </div>
        </div>
    )
}

function TimelineItem({ item, idx, isEducation }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const images = item.images || (item.image ? [item.image] : [])
    const hasMultipleImages = images.length > 1

    const nextImage = (e) => {
        e?.stopPropagation()
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = (e) => {
        e?.stopPropagation()
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <>
            <div className="relative md:flex md:gap-10 md:items-start">
                {/* Point de la timeline */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 border-4 border-white dark:border-slate-900 rounded-full z-10 shadow-lg" />

                {/* Carrousel d'images (uniquement pour expérience, pas pour éducation) */}
                {!isEducation && images.length > 0 && (
                    <div className={`w-full md:w-5/12 mb-8 md:mb-0 ${idx % 2 === 0 ? '' : 'md:order-2'}`}>
                        <div
                            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group cursor-pointer bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900"
                            onClick={openModal}
                        >
                            {/* Image actuelle avec effet */}
                            <img
                                src={images[currentImageIndex]}
                                alt={`${item.company} - ${item.position} - Photo ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Overlay gradient amélioré */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/20 opacity-70 group-hover:opacity-50 transition-opacity" />

                            {/* Icône zoom */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-white/90 dark:bg-slate-800/90 rounded-full p-4 backdrop-blur-sm">
                                    <svg className="w-8 h-8 text-slate-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Boutons de navigation (si plusieurs images) */}
                            {hasMultipleImages && (
                                <>
                                    {/* Bouton précédent */}
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all hover:scale-110 backdrop-blur-sm shadow-lg"
                                        aria-label="Image précédente"
                                    >
                                        <svg className="w-6 h-6 text-slate-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>

                                    {/* Bouton suivant */}
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all hover:scale-110 backdrop-blur-sm shadow-lg"
                                        aria-label="Image suivante"
                                    >
                                        <svg className="w-6 h-6 text-slate-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>

                                    {/* Indicateurs de position améliorés */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full">
                                        {images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setCurrentImageIndex(index)
                                                }}
                                                className={`h-2 rounded-full transition-all ${
                                                    index === currentImageIndex
                                                        ? 'bg-white w-8'
                                                        : 'bg-white/50 hover:bg-white/75 w-2'
                                                }`}
                                                aria-label={`Aller à l'image ${index + 1}`}
                                            />
                                        ))}
                                    </div>

                                    {/* Compteur d'images amélioré */}
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-sm font-medium px-3 py-1.5 rounded-full shadow-lg">
                                        {currentImageIndex + 1} / {images.length}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* Contenu */}
                <div className={`w-full ${!isEducation && images.length > 0 ? 'md:w-5/12' : 'md:w-1/2'} ${idx % 2 === 0 ? '' : 'md:order-2'}`}>
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                                {isEducation ? item.degree : item.position}
                            </h3>
                        </div>

                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3 text-base">
                            {isEducation ? item.institution : item.company}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-medium">
                                {isEducation ? item.year : `${item.startDate} - ${item.endDate}`}
                            </span>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                            {item.description}
                        </p>

                        {item.technologies && (
                            <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-200/50 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal plein écran */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Bouton fermer */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-md transition-all hover:scale-110 z-10"
                            aria-label="Fermer"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Image en grand */}
                        <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
                            <img
                                src={images[currentImageIndex]}
                                alt={`${item.company} - ${item.position} - Photo ${currentImageIndex + 1}`}
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />

                            {/* Navigation dans le modal */}
                            {hasMultipleImages && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-4 backdrop-blur-md transition-all hover:scale-110"
                                        aria-label="Image précédente"
                                    >
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>

                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-4 backdrop-blur-md transition-all hover:scale-110"
                                        aria-label="Image suivante"
                                    >
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>

                                    {/* Compteur dans le modal */}
                                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full">
                                        {currentImageIndex + 1} / {images.length}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Info de l'expérience dans le modal */}
                        <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md text-white px-4 py-3 rounded-lg max-w-md">
                            <p className="font-semibold">{item.position}</p>
                            <p className="text-sm text-white/80">{item.company}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}