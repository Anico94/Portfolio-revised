import {
  Clock,
  HandHeart,
  MessageSquare,
  MessagesSquare,
  Sparkles,
  TriangleAlert,
  type LucideIcon,
} from 'lucide-react'
import { userManual } from '../data/userManual'
import Reveal from '../components/Reveal'
import Section from '../components/Section'

const icons: Record<string, LucideIcon> = {
  MessageSquare,
  Sparkles,
  Clock,
  MessagesSquare,
  HandHeart,
  TriangleAlert,
}

export default function UserManual() {
  return (
    <Section
      id="user-manual"
      eyebrow="User manual"
      title="How to work with me"
      intro="Think of this as the README for working together, how I communicate, when I do my best work, and what I need from the people around me."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {userManual.map((entry, index) => {
          const Icon = icons[entry.icon]
          return (
            <Reveal key={entry.title} delay={index * 70} className="h-full">
              <article className="surface hover:border-emerald/30 flex h-full flex-col p-6 transition-colors">
                <span className="bg-emerald/15 text-emerald mb-4 grid size-11 place-items-center rounded-xl">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-lg">{entry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{entry.body}</p>
                <ul className="mt-4 space-y-2 border-t border-custard/10 pt-4">
                  {entry.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm">
                      <span
                        aria-hidden
                        className="bg-emerald mt-[0.45rem] size-1.5 shrink-0 rounded-full"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
