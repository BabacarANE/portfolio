// src/data/experience.js
export const experience = [
    {
        id: 1,
        company: 'Africa Mobile Network Service - DAKAR',
        position: 'Technicien Telecom',
        startDate: 'Janv. 2025',
        endDate: 'Juill. 2025',
        description: 'Contrôle du respect des consignes de travail et des procédures de sécurité et d\'hygiène. Gestion des équipes et respect des protocoles de travail. Configuration des scripts XML pour le chargement dans la baseband et gestion des équipements Ericsson.',
        technologies: ['Gestion d\'équipe', 'Procédures de sécurité', 'Protocoles telecom', 'XML', 'Configuration baseband', 'Équipements Ericsson'],
        images: [
            '/images/telecom-1.jpg',
            '/images/telecom-2.jpg',
            '/images/telecom-3.jpg',
            '/images/telecom-4.jpg'
        ], // Plusieurs images
    },
    {
        id: 2,
        company: 'TMI - DAKAR',
        position: 'Technicien Informatique',
        startDate: 'Juill. 2024',
        endDate: 'Déc. 2024',
        description: 'Maintenance préventive et curative des équipements informatiques des clients sur site. Installation et configuration des logiciels sur les postes de travail. Diagnostic et résolution des pannes informatiques.',
        technologies: ['Maintenance informatique', 'Installation logiciels', 'Diagnostic pannes', 'Support technique'],
        images: [
            '/images/informatique-1.jpg',
            '/images/informatique-2.jpg'
        ],
    },
    {
        id: 3,
        company: 'Workshop',
        position: 'Développeur Full-Stack',
        startDate: '2024',
        endDate: '2024',
        description: 'Conception et développement d\'un escape game interactif en ligne. Mise en place d\'un système de chat en temps réel permettant aux joueurs de collaborer pour résoudre les énigmes. Gestion complète du projet du cahier des charges au déploiement.',
        technologies: ['React', 'Node.js', 'Supabase', 'Socket.io', 'JavaScript', 'CSS'],
        images: [
            '/images/development-1.jpg'
        ],
    },
]