export interface TechGroup {
  title: string
  /** Lucide icon name, resolved in TechStack.tsx. */
  icon: 'Layout' | 'Server' | 'Wrench' | 'Bot'
  items: string[]
}

export const techStack: TechGroup[] = [
  {
    title: 'Backend',
    icon: 'Server',
    items: [
      'C#',
      '.NET / .NET Core',
      'EF & EF Core',
      'OpenAPI',
      'RabbitMQ',
      'Azure Service Bus',
      'xUnit',
      'NSubstitute',
      'Python',
      'Postman',
    ],
  },
  {
    title: 'Frontend',
    icon: 'Layout',
    items: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'RxJS',
      'Angular Material',
      'HTML',
      'CSS',
      'Sass',
      'Tailwind',
      'Jest',
    ],
  },
  {
    title: 'Data / DevOps',
    icon: 'Wrench',
    items: [
      'SQL',
      'PostgreSQL',
      'SQL Server',
      'Docker',
      'GCP',
      'Azure',
      'Git',
      'GitHub',
      'GitHub Actions',
      'Bitbucket',
      'Jira',
    ],
  },
  {
    title: 'AI Tools',
    icon: 'Bot',
    items: ['GitHub Copilot', 'Claude Code', 'Opencode', 'ChatGPT', 'MCP/Docker MCP Gateway'],
  },
]
