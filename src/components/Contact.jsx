// src/components/Contact.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import Button from './common/Button'
import { Mail, Linkedin, Github, Twitter, CheckCircle, AlertCircle, Phone, MapPin } from 'lucide-react'
import { SOCIAL_LINKS, PERSONAL_INFO } from '../utils/constants'
import { EMAILJS_CONFIG, CONTACT_EMAIL } from '../utils/emailConfig'

export default function Contact() {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
    const [submitMessage, setSubmitMessage] = useState(null)

    const onSubmit = async (data) => {
        try {
            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                {
                    to_email: CONTACT_EMAIL,
                    from_name: data.nom,
                    from_email: data.email,
                    subject: data.sujet,
                    message: data.message,
                    reply_to: data.email,
                },
                EMAILJS_CONFIG.PUBLIC_KEY
            )

            setSubmitMessage({
                type: 'success',
                text: 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.'
            })
            reset()

            setTimeout(() => setSubmitMessage(null), 5000)
        } catch (error) {
            setSubmitMessage({
                type: 'error',
                text: 'Erreur lors de l\'envoi. Vous pouvez me contacter directement à anebabacar221@gmail.com'
            })
            console.error('Error sending email:', error)
        }
    }

    return (
        <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-800">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                {/* Titre */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        Contactez-moi
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Discutons de vos projets et opportunités
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Formulaire */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {/* Nom */}
                            <div>
                                <label className="block text-slate-900 dark:text-white font-medium mb-2">
                                    Nom complet
                                </label>
                                <input
                                    type="text"
                                    placeholder="Votre nom complet"
                                    {...register('nom', {
                                        required: 'Le nom est requis',
                                        minLength: {
                                            value: 2,
                                            message: 'Le nom doit contenir au moins 2 caractères'
                                        }
                                    })}
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                                />
                                {errors.nom && <span className="text-red-500 text-sm mt-1">{errors.nom.message}</span>}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-slate-900 dark:text-white font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="votre@email.com"
                                    {...register('email', {
                                        required: 'L\'email est requis',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Adresse email invalide'
                                        }
                                    })}
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                                />
                                {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
                            </div>

                            {/* Sujet */}
                            <div>
                                <label className="block text-slate-900 dark:text-white font-medium mb-2">
                                    Sujet
                                </label>
                                <input
                                    type="text"
                                    placeholder="Sujet de votre message"
                                    {...register('sujet', {
                                        required: 'Le sujet est requis',
                                        minLength: {
                                            value: 5,
                                            message: 'Le sujet doit contenir au moins 5 caractères'
                                        }
                                    })}
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
                                />
                                {errors.sujet && <span className="text-red-500 text-sm mt-1">{errors.sujet.message}</span>}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-slate-900 dark:text-white font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    placeholder="Décrivez votre projet ou demande..."
                                    rows="6"
                                    {...register('message', {
                                        required: 'Le message est requis',
                                        minLength: {
                                            value: 10,
                                            message: 'Le message doit contenir au moins 10 caractères'
                                        }
                                    })}
                                    className="w-full px-4 py-3 bg-white dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors resize-none"
                                />
                                {errors.message && <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>}
                            </div>

                            {/* Message de soumission */}
                            {submitMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-lg flex items-center gap-3 ${
                                        submitMessage.type === 'success'
                                            ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                                            : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                                    }`}
                                >
                                    {submitMessage.type === 'success' ? (
                                        <CheckCircle size={20} />
                                    ) : (
                                        <AlertCircle size={20} />
                                    )}
                                    <span>{submitMessage.text}</span>
                                </motion.div>
                            )}

                            {/* Bouton Envoyer */}
                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                            </Button>
                        </form>
                    </motion.div>

                    {/* Informations de contact */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                Coordonnées
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
                            </p>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-700 rounded-lg">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                                <Mail size={24} className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">Email</p>
                                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                                    {SOCIAL_LINKS.email}
                                </a>
                            </div>
                        </div>

                        {/* Téléphone */}
                        <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-700 rounded-lg">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                                <Phone size={24} className="text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">Téléphone</p>
                                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-green-600 dark:text-green-400 font-semibold hover:underline">
                                    {PERSONAL_INFO.phone}
                                </a>
                            </div>
                        </div>

                        {/* Adresse */}
                        <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-700 rounded-lg">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                                <MapPin size={24} className="text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">Localisation</p>
                                <p className="text-purple-600 dark:text-purple-400 font-semibold">
                                    {PERSONAL_INFO.address}
                                </p>
                            </div>
                        </div>

                        {/* Réseaux sociaux */}
                        <div>
                            <p className="text-slate-600 dark:text-slate-400 font-medium mb-4">Réseaux sociaux</p>
                            <div className="space-y-3">
                                {[
                                    { icon: Linkedin, label: 'LinkedIn', url: SOCIAL_LINKS.linkedin, color: 'text-blue-600' },
                                    { icon: Github, label: 'GitHub', url: SOCIAL_LINKS.github, color: 'text-gray-700 dark:text-gray-300' },
                                    { icon: Twitter, label: 'Twitter', url: SOCIAL_LINKS.twitter, color: 'text-sky-500' },
                                ].map((social) => {
                                    const Icon = social.icon
                                    return (
                                        <a
                                            key={social.label}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 p-3 bg-white dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                                        >
                                            <Icon size={20} className={social.color} />
                                            <span className="text-slate-900 dark:text-white font-medium">{social.label}</span>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}