import { Code2, Layout, Server, Wrench, type LucideIcon } from 'lucide-react'
import { techStack } from '../data/techStack'
import Reveal from '../components/Reveal'
import Section from '../components/Section'

const icons: Record<string, LucideIcon> = { Code2, Layout, Server, Wrench }

export default function TechStack() {
  return (
    <Section
      id="tech-stack"
      eyebrow="Tech stack"
      title="Tools I reach for"
      intro="Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. The list below is what I use day to day rather than everything I have ever touched."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map((group, index) => {
          const Icon = icons[group.icon]
          return (
            <Reveal key={group.title} delay={index * 70} className="h-full">
              <div className="surface h-full p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="bg-emerald/15 text-emerald grid size-10 place-items-center rounded-lg">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="text-base">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-custard/10 bg-shadow/40 text-custard/75 rounded-full border px-2.5 py-1 text-xs"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
