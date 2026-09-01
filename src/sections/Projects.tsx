import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import Section from '../components/Section'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      intro="A collection of both work and personal projects"
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <li key={project.slug} className="h-full">
            <Reveal delay={index * 70} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
