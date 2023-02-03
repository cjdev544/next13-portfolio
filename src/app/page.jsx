import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main>
      <header>
        <NavBar />
        <About />
      </header>
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
