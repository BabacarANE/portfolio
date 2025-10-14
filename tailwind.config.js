// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    darkMode: 'class', // ← AJOUTEZ CETTE LIGNE
    theme: {
        extend: {
            colors: {
                primary: '#0066CC',
                secondary: '#001F5C',
                accent: '#FF6B6B',
                dark: '#0F172A',
                light: '#F8FAFC',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
            },
            animation: {
                fadeIn: 'fadeIn 0.5s ease-in-out',
                slideUp: 'slideUp 0.5s ease-out',
                bounce: 'bounce 1s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}