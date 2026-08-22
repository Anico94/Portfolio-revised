export interface TechGroup {
  title: string
  /** Lucide icon name, resolved in TechStack.tsx. */
  icon: 'Code2' | 'Layout' | 'Server' | 'Wrench'
  items: string[]
}

/** TODO: swap these for the tools you actually use. */
export const techStack: TechGroup[] = [
  {
    title: 'Languages',
    icon: 'Code2',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    icon: 'Layout',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'React Router', 'Zustand'],
  },
  {
    title: 'Backend & Data',
    icon: 'Server',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Redis', 'REST & GraphQL'],
  },
  {
    title: 'Tooling & Practice',
    icon: 'Wrench',
    items: ['Git', 'Docker', 'GitHub Actions', 'Vitest', 'Playwright', 'Figma'],
  },
]
