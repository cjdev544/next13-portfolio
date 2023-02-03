'use client'

import { useState } from 'react'

import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Skills from '@/components/Skills'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div
      style={{ background: isDarkMode && '#000', color: isDarkMode && '#fff' }}
    >
      <header className={!isDarkMode ? 'header' : ''}>
        <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <About isDarkMode={isDarkMode} />
      </header>
      <main>
        <Services isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <Footer />
      </main>
    </div>
  )
}
