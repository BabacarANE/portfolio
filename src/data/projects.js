// src/data/projects.js
export const projects = [

    {
        id: 2,
        title: 'Système de Vote Électronique',
        description: 'Application sécurisée pour la gestion des votes en ligne avec authentification et résultats en temps réel.',
        image: '/images/voting.png',
        technologies: ['Laravel', 'Vue.js', 'PostgreSQL'],
        liveLink: '#',
        githubLink: 'https://github.com/BabacarANE/systeme-vote-frontend.git',
        role: 'Développeur Full-Stack',
        duration: '2 mois',
        details: 'Création d\'une plateforme de vote électronique avec sécurité renforcée, vérification des électeurs et génération automatique des résultats.'
    },
    {
        id: 3,
        title: 'Escape Game',
        description: 'Jeu d\'évasion interactif avec chat en temps réel permettant aux joueurs de collaborer pour résoudre des énigmes.',
        image: '/images/escape-game.png',
        technologies: ['React', 'Node.js', 'Supabase', 'Socket.io'],
        liveLink: '#',
        githubLink: 'https://github.com/WalidA2D/NEURALINKED.git',
        role: 'Développeur Full-Stack',
        duration: '2 mois',
        details: 'Développement d\'un escape game multijoueur avec système de chat en temps réel, gestion des sessions de jeu et interface immersive.'
    },
    {
        id: 4,
        title: 'Portfolio Personnel',
        description: 'Site portfolio moderne et responsive présentant mes compétences, projets et expériences professionnelles.',
        image: '/images/portfolio.png',
        technologies: ['React', 'Tailwind css', 'JavaScript'],
        liveLink: '#',
        githubLink: 'https://github.com/BabacarANE/portfolio.git',
        role: 'Développeur Frontend',
        duration: '1 mois',
        details: 'Conception et développement d\'un portfolio personnel avec design moderne, animations fluides et optimisation pour les mobiles.'
    },
    {
        id: 5,
        title: 'Dashboard Analytics Temps Réel',
        description: 'Dashboard de monitoring full-stack avec visualisation de données en temps réel via WebSocket — visiteurs, ventes, performance système.',
        image: '/images/dashboard-analytics.png',
        technologies: ['React', 'Django', 'WebSocket', 'Redis'],
        liveLink: 'https://dashboard-analytics-tawny-pi.vercel.app',
        githubLink: 'https://github.com/BabacarANE/dashboard-analytics.git',
        role: 'Développeur Full-Stack',
        duration: '2-3 semaines',
        details: 'Architecture temps réel avec Django Channels (ASGI) et Redis comme message broker. Le backend broadcast des métriques toutes les 10s via WebSocket à tous les clients connectés. Frontend React avec hook useWebSocket custom, reconnexion automatique avec backoff exponentiel, et graphiques Recharts mis à jour en live.'
    }
]