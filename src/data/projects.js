// src/data/projects.js
export const projects = [
   /* {
        id: 6,
        title: 'Collab Editor',
        description: 'Éditeur de texte collaboratif temps réel — architecture production-grade avec CRDT, construite from scratch.',
        image: '/images/collab-editor.png',
        technologies: ['React', 'Tiptap', 'Yjs', 'Fastify', 'PostgreSQL', 'Redis', 'Kafka', 'Kubernetes'],
        liveLink: null,
        githubLink: 'https://github.com/BabacarANE/collab-editor.git',
        role: 'Développeur Full-Stack',
        duration: '—',
        details: 'Édition collaborative temps réel avec convergence garantie (CRDT via Yjs), curseurs et avatars en direct, commentaires ancrés, historique de versions avec diff visuel, export PDF/HTML/Markdown, import .md/.docx/.txt, recherche full-text, mentions avec notifications, permissions par document, mode hors-ligne avec resynchronisation automatique, PWA installable.'
    },*/
    {
        id: 7,
        title: 'SmartMarket Intelligence',
        description: 'Plateforme data end-to-end d\'analyse et de prédiction du marché de l\'emploi tech en France.',
        image: '/images/smartmarket.png',
        technologies: ['Airflow', 'dbt', 'PostgreSQL', 'LightGBM', 'MLflow', 'FastAPI', 'Streamlit'],
        liveLink: null,
        githubLink: 'https://github.com/BabacarANE/SmartMarket.git',
        role: 'Data Engineer / ML',
        duration: ' 3 semaines',
        details: 'Pipeline complet : collecte automatique des offres d\'emploi (APIs France Travail & Adzuna) → nettoyage et transformation dbt → entraînement d\'un modèle LightGBM pour la prédiction de salaires → exposition via API REST et dashboard interactif. 2 DAGs Airflow, détection de data drift avec Evidently AI, tracking MLflow, 71 tests unitaires, CI/CD GitHub Actions.'
    },
    {
        id: 8,
        title: 'FutureKawa',
        description: 'Système IoT de suivi des stocks de café vert multi-pays (Brésil, Équateur, Colombie), architecture microservices.',
        image: '/images/futurekawa.png',
        technologies: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'MQTT', 'ESP8266/MicroPython', 'Docker', 'Jenkins'],
        liveLink: null,
        githubLink: 'https://github.com/BabacarANE/futureKAWA.git',
        role: 'Développeur Full-Stack / IoT',
        duration: '2 mois',
        details: 'Architecture microservices avec une API par pays et un agrégateur central. Capteurs IoT (ESP8266 + DHT22) publiant température/humidité en temps réel via MQTT. Système d\'alertes automatiques en cas de dépassement de seuils. Dashboard React/TypeScript avec authentification JWT par rôle. Pipeline CI/CD Jenkins.'
    },
    {
        id: 9,
        title: 'MSPR — ElectioAnalytics',
        description: 'Preuve de concept de prédiction des tendances électorales à l\'échelle communale (Département du Nord).',
        image: '/images/mspr-electioanalytics.png',
        technologies: ['Python', 'scikit-learn', 'pandas', 'PostgreSQL', 'SQLAlchemy'],
        liveLink: null,
        githubLink: 'https://github.com/BabacarANE/MSPR.git',
        role: 'Data Analyst',
        duration: '2 mois',
        details: 'Apprentissage supervisé (classification binaire & multiclasse) sur 648 communes × 2 années (2017/2022), 1 296 observations, 5 indicateurs socio-économiques. Variable cible : bloc vainqueur (Droite/Centre/Gauche). Projection 2027 via modèle socio-économique pur.'
    },

    // --- Projets existants conservés ---
    {
        id: 2,
        title: 'Système de Vote Électronique',
        description: 'Application sécurisée pour la gestion des votes en ligne avec authentification et résultats en temps réel.',
        image: '/images/voting.png',
        technologies: ['Laravel', 'Vue.js', 'PostgreSQL'],
        liveLink: null,
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
        liveLink: null,
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
        liveLink: null,
        githubLink: 'https://github.com/BabacarANE/portfolio.git',
        role: 'Développeur Frontend',
        duration: '1 semaine',
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