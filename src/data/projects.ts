export interface ImageSlot {
  /** Caption shown inside the placeholder — describe the image that belongs here. */
  label: string
  /** CSS aspect-ratio value, e.g. '16 / 9'. */
  ratio: string
}

export interface Project {
  /** URL segment: /projects/:slug */
  slug: string
  title: string
  /** One line, shown on the card. */
  tagline: string
  year: string
  role: string
  /** Tech chips. */
  tags: string[]
  /** Omit to hide the live-site link. */
  liveUrl?: string
  /** Omit to hide the source-code link. */
  repoUrl?: string
  cover: ImageSlot
  /** Short paragraph used on the card and as the detail-page intro. */
  summary: string
  /** Detail-page body paragraphs. */
  body: string[]
  /** Detail-page bullet list. */
  highlights: string[]
  gallery: ImageSlot[]
}

const lorem = {
  a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  b: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  c: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
}

/**
 * TODO: replace with your real projects. Every field is used by the card and
 * the detail page — see the Project interface above.
 */
export const projects: Project[] = [
  {
    slug: 'orbit-analytics',
    title: 'Orbit Analytics',
    tagline: 'Real-time dashboard for product usage telemetry.',
    year: '2025',
    role: 'Lead Frontend Engineer',
    tags: ['React', 'TypeScript', 'D3', 'Node.js'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/your-username/orbit-analytics',
    cover: { label: 'Dashboard overview screenshot', ratio: '16 / 9' },
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    body: [lorem.a, lorem.b, lorem.c],
    highlights: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Sed do eiusmod tempor incididunt ut labore et dolore magna.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      'Duis aute irure dolor in reprehenderit in voluptate velit.',
    ],
    gallery: [
      { label: 'Chart drill-down view', ratio: '4 / 3' },
      { label: 'Mobile layout', ratio: '4 / 3' },
    ],
  },
  {
    slug: 'fernwood-cms',
    title: 'Fernwood CMS',
    tagline: 'Headless content platform with a block-based editor.',
    year: '2025',
    role: 'Full-Stack Developer',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'tRPC'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/your-username/fernwood-cms',
    cover: { label: 'Editor interface screenshot', ratio: '16 / 9' },
    summary:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    body: [lorem.b, lorem.c, lorem.a],
    highlights: [
      'Excepteur sint occaecat cupidatat non proident sunt in culpa.',
      'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
    ],
    gallery: [
      { label: 'Block editor close-up', ratio: '16 / 9' },
      { label: 'Content model diagram', ratio: '4 / 3' },
    ],
  },
  {
    slug: 'trailhead-mobile',
    title: 'Trailhead',
    tagline: 'Offline-first hiking companion for iOS and Android.',
    year: '2024',
    role: 'Mobile Developer',
    tags: ['React Native', 'Expo', 'SQLite', 'MapLibre'],
    liveUrl: 'https://example.com',
    cover: { label: 'App screens collage', ratio: '16 / 9' },
    summary:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    body: [lorem.c, lorem.a],
    highlights: [
      'At vero eos et accusamus et iusto odio dignissimos ducimus.',
      'Qui blanditiis praesentium voluptatum deleniti atque corrupti.',
      'Similique sunt in culpa qui officia deserunt mollitia animi.',
    ],
    gallery: [
      { label: 'Offline map view', ratio: '9 / 16' },
      { label: 'Route detail screen', ratio: '9 / 16' },
    ],
  },
  {
    slug: 'custard-design-system',
    title: 'Custard Design System',
    tagline: 'Accessible component library shared across four products.',
    year: '2024',
    role: 'Design Engineer',
    tags: ['React', 'Tailwind', 'Storybook', 'a11y'],
    repoUrl: 'https://github.com/your-username/custard-ds',
    cover: { label: 'Component library overview', ratio: '16 / 9' },
    summary:
      'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
    body: [lorem.a, lorem.c],
    highlights: [
      'Temporibus autem quibusdam et aut officiis debitis aut rerum.',
      'Necessitatibus saepe eveniet ut et voluptates repudiandae.',
      'Itaque earum rerum hic tenetur a sapiente delectus.',
    ],
    gallery: [{ label: 'Token documentation page', ratio: '16 / 9' }],
  },
  {
    slug: 'spruce-scheduler',
    title: 'Spruce Scheduler',
    tagline: 'Shift planning tool for small hospitality teams.',
    year: '2023',
    role: 'Full-Stack Developer',
    tags: ['Vue', 'Laravel', 'MySQL', 'Redis'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/your-username/spruce-scheduler',
    cover: { label: 'Weekly roster view', ratio: '16 / 9' },
    summary:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    body: [lorem.b, lorem.a],
    highlights: [
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam.',
      'Corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.',
      'Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.',
    ],
    gallery: [
      { label: 'Drag-and-drop shift assignment', ratio: '16 / 9' },
      { label: 'Availability heatmap', ratio: '4 / 3' },
    ],
  },
  {
    slug: 'shadow-cli',
    title: 'Shadow CLI',
    tagline: 'Developer tooling that scaffolds services in seconds.',
    year: '2023',
    role: 'Creator & Maintainer',
    tags: ['Node.js', 'TypeScript', 'Vitest', 'OSS'],
    repoUrl: 'https://github.com/your-username/shadow-cli',
    cover: { label: 'Terminal session recording', ratio: '16 / 9' },
    summary:
      'Et harum quidem rerum facilis est et expedita distinctio, nam libero tempore cum soluta nobis est eligendi.',
    body: [lorem.c, lorem.b],
    highlights: [
      'Omnis voluptas assumenda est, omnis dolor repellendus.',
      'Temporibus autem quibusdam et aut officiis debitis aut rerum.',
      'Ut et voluptates repudiandae sint et molestiae non recusandae.',
    ],
    gallery: [{ label: 'Plugin architecture diagram', ratio: '16 / 9' }],
  },
]

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

/** Neighbouring projects, wrapping around the ends, for detail-page paging. */
export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return { previous: undefined, next: undefined }
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  }
}
