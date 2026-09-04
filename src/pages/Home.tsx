import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'
import TechStack from '../sections/TechStack'
import UserManual from '../sections/UserManual'
import Contact from '../sections/Contact'
import { site } from '../data/site'
import useDocumentMeta from '../hooks/useDocumentMeta'

export default function Home() {
  useDocumentMeta({
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    path: '/',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: site.name,
      jobTitle: site.role,
      description: site.tagline,
      address: site.location,
      sameAs: Object.values(site.socials),
    },
  })

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
