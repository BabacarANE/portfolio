// src/App.jsx
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme')
        if (saved) {
            return saved === 'dark'
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [isDark])

    const toggleTheme = () => {
        setIsDark(!isDark)
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Education />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App