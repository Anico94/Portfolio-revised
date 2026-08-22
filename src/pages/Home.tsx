import { useEffect } from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'
import TechStack from '../sections/TechStack'
import UserManual from '../sections/UserManual'
import Contact from '../sections/Contact'
import { site } from '../data/site'

export default function Home() {
  useEffect(() => {
    document.title = `${site.name} — ${site.role}`
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <UserManual />
      <Contact />
    </>
  )
}
