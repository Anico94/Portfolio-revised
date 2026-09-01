import ukSearchImg from '../assets/uk-search.png'
import auUnitySearchImg from '../assets/au-unity-search.png'
import caUnityImg from '../assets/ca-unity.webp'
import engineeringAutomationImg from '../assets/engineering_automation.png'
import craneImg from '../assets/crane.jpeg'
import worldExplorerImg from '../assets/3D-world-explorer.png'
import stockWatchImg from '../assets/stock-watch.png'
import jjaNotesImg from '../assets/jja-notes.png'
import gymImg from '../assets/gym.png'

export interface ImageSlot {
  /** Caption shown inside the placeholder — describe the image that belongs here. */
  label: string
  /** CSS aspect-ratio value, e.g. '16 / 9'. */
  ratio: string
  /** Imported image source. Omit to render PlaceholderImage instead. */
  src?: string
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

/**
 * TODO: `year` fields below are placeholders — fill in the real date ranges
 * for each role/project. Every field is used by the card and the detail page
 * — see the Project interface above.
 */
export const projects: Project[] = [
  {
    slug: 'unity-search-uk',
    title: 'Unity Search UK',
    tagline: 'Group of Azure-hosted web applications for legal and property search.',
    year: 'TODO',
    role: 'Software Engineer',
    tags: ['Angular', 'ASP.NET MVC', 'C# .NET 4.8', '.NET Core 3.1/8', 'Azure', 'SQL Server'],
    cover: { label: 'Unity Search UK platform screenshot', ratio: '16 / 9', src: ukSearchImg },
    summary:
      'Unity Search UK is a group of web applications communicating with internal and external web services, backed by a single SQL Server database and hosted exclusively on Azure.',
    body: [
      'Unity Search UK is a group of web applications, communicating with internal and external web services and storing its data in a single SQL Server database. The services also communicate with external clients and suppliers via their own web services. The application is hosted exclusively on Azure.',
      'The frontend spans Angular 2.0/13/15 alongside ASP.NET 4.8 MVC with Razor, while the backend runs on C# .NET 4.8 and .NET Core 3.1 & 8. Infrastructure includes Azure App Services, Azure Functions, Application Slots, Azure-hosted SQL Server, Azure Service Bus, VMs, and Azure Storage.',
    ],
    highlights: [
      'Worked across a mixed-generation Angular frontend (versions 2.0, 13, and 15) alongside legacy ASP.NET MVC/Razor views.',
      'Built and maintained services spanning .NET Framework 4.8 and .NET Core 3.1 & 8.',
      'Integrated with external client and supplier web services for legal and property data exchange.',
      'Worked with Azure App Services, Functions, Service Bus, and Application Slots for deployment and messaging.',
    ],
    gallery: [],
  },
  {
    slug: 'unity-search-australia',
    title: 'Unity Search Australia',
    tagline: 'Cloud-native microservice platform for legal and property information searches.',
    year: 'TODO',
    role: 'Software Engineer',
    tags: ['Angular', 'Flutter', '.NET MVC', 'C# .NET Core 6-8', 'Kubernetes', 'PostgreSQL', 'RabbitMQ'],
    cover: {
      label: 'Unity Search Australia platform screenshot',
      ratio: '16 / 9',
      src: auUnitySearchImg,
    },
    summary:
      'Unity Search is a web-based platform for legal and property information searches — a one-stop shop for commercial and business info, due diligence, and risk management, built on a cloud-native microservice architecture.',
    body: [
      "Unity Search is a web based platform for legal and property information searches. It serves as a one stop shop for commercial and business info, due diligence and risk management. It's a cloud based system, with most services deployed through automated deployment tools like Flux and other CI/CD pipelines, following a microservice architecture.",
      'The frontend spans Angular, Flutter, and .NET MVC, with backend services in C# .NET Core 6-8 and .NET Framework. Infrastructure runs on Google Cloud with Kubernetes, alongside Windows Server 2016 VMs, PostgreSQL, MSSQL, and RabbitMQ.',
    ],
    highlights: [
      'Contributed to a microservice architecture deployed via GitOps tooling (Flux) and CI/CD pipelines.',
      'Worked across Angular, Flutter, and .NET MVC frontends serving due-diligence and risk-management workflows.',
      'Built and maintained services on .NET Core 6-8 running on Kubernetes in Google Cloud.',
      'Worked with PostgreSQL, MSSQL, and RabbitMQ for data storage and asynchronous messaging.',
    ],
    gallery: [],
  },
  {
    slug: 'unity-canada',
    title: 'Unity Canada',
    tagline: 'Azure-hosted web applications for legal and property information searches.',
    year: 'TODO',
    role: 'Software Engineer',
    tags: ['Angular 18', 'jQuery', 'Java 17', 'Spring', 'Hibernate', 'AWS', 'PostgreSQL 16'],
    cover: { label: 'Unity Canada platform screenshot', ratio: '16 / 9', src: caUnityImg },
    summary:
      'Unity Canada is a group of web applications communicating with internal and external web services, storing its data in a single SQL Server database and hosted exclusively on Azure.',
    body: [
      "Unity Canada is a group of web applications, communicating with internal and external web services and storing its data in a single SQL Server database. The services also communicate with external clients and suppliers via their own web services. The application is hosted exclusively on Azure.",
      'The frontend uses Angular 18 and jQuery, with a Java backend running on Apache Tomcat 11, Java 17, Spring, and Hibernate. Infrastructure spans AWS, Red Hat Enterprise Linux, Windows Server 2012, and PostgreSQL 16.',
    ],
    highlights: [
      'Worked on an Angular 18 and jQuery frontend integrated with a Java/Spring backend.',
      'Built and maintained services on Apache Tomcat 11 with Java 17, Spring, and Hibernate.',
      'Worked across mixed infrastructure spanning AWS, Red Hat Enterprise Linux, and Windows Server 2012.',
      'Integrated with external client and supplier web services for legal and property data exchange.',
    ],
    gallery: [],
  },
  {
    slug: 'structural-engineering-automation',
    title: 'Structural Engineering Automation',
    tagline: 'Python tooling that eliminated repetitive bottlenecks in crane analysis and drafting.',
    year: 'TODO',
    role: 'Structural Engineer',
    tags: ['Python', 'Automation', 'Grasshopper', 'Crane Analysis'],
    cover: {
      label: 'Automation tooling screenshot',
      ratio: '16 / 9',
      src: engineeringAutomationImg,
    },
    summary:
      'I found my passion for software at the intersection of structural engineering and automation, building tools that eliminated repetitive bottlenecks in crane analysis and lifting capacity chart generation.',
    body: [
      'I found my passion for software at the intersection of structural engineering and automation. Driven by the goal of eliminating repetitive bottlenecks, I developed a Python desktop app that slashed data output time for crane analysis by 67% (£18k/year savings).',
      'I also engineered a graphical coding plugin to automate the end-to-end generation of lifting capacity charts, reducing manual drafting time by half and saving the company £25,000 annually. For me, coding is about more than syntax — it\'s about engineering better ways to work.',
    ],
    highlights: [
      'Developed a Python desktop app that cut crane analysis data output time by 67%, saving £18k/year.',
      'Engineered a graphical coding plugin automating end-to-end lifting capacity chart generation.',
      'Reduced manual drafting time by half, saving the company £25,000 annually.',
    ],
    gallery: [],
  },
  {
    slug: 'cross-river-rail',
    title: 'Cross River Rail',
    tagline: 'Led engineering and drafting on the Woolloongabba Underground Station, Brisbane.',
    year: 'TODO',
    role: 'Engineering Lead',
    tags: ['Structural Engineering', 'Tunnelling', 'Construction Sequencing', 'Temporary Works'],
    cover: {
      label: 'Woolloongabba Underground Station construction',
      ratio: '16 / 9',
      src: craneImg,
    },
    summary:
      'Cross River Rail is a 10.2 km, £3 billion (equivalent) rail infrastructure project in Brisbane, Australia, featuring twin tunnels under the CBD and Brisbane River and four new underground stations.',
    body: [
      'Cross River Rail is a 10.2 km, £3 billion (equivalent) rail line infrastructure project in Brisbane, Australia, featuring 5.9 km of twin tunnels under the CBD and Brisbane River, set for 2026. It includes four new underground stations (Boggo Road, Woolloongabba, Albert Street, Roma Street), upgraded surface stations, and new Gold Coast stations to boost capacity.',
      'Led a team of ~10 engineers and drafters on the construction phases, sequencing, and temporary retention works on the Woolloongabba Underground Station.',
    ],
    highlights: [
      'Led a team of ~10 engineers and drafters on construction-phase engineering.',
      'Directed sequencing and temporary retention works for the Woolloongabba Underground Station.',
      'Contributed to one of Australia\'s largest infrastructure projects, spanning 5.9 km of twin tunnels under Brisbane\'s CBD.',
    ],
    gallery: [],
  },
  {
    slug: 'tower-crane-projects',
    title: 'Tower Crane Projects',
    tagline: 'Bespoke structural design for tower cranes on major global construction projects.',
    year: 'TODO',
    role: 'Structural Engineer',
    tags: ['Structural Design', 'Tower Cranes', 'Construction Engineering'],
    cover: { label: 'Tower crane design drawing', ratio: '16 / 9', src: craneImg },
    summary:
      'Before transitioning into software engineering, I worked as a structural engineer designing tower cranes used on major construction projects around the world.',
    body: [
      'Before transitioning into software engineering, I worked as a structural engineer designing tower cranes used on major construction projects around the world. As part of a multidisciplinary team, I contributed to bespoke engineering solutions tailored to complex site constraints and demanding performance requirements.',
      'The role required solving challenging technical problems with innovative, practical designs — balancing safety, efficiency, and constructability at scale.',
    ],
    highlights: [
      'Designed bespoke tower crane solutions for major construction projects worldwide.',
      'Collaborated within a multidisciplinary team to meet complex site constraints and performance requirements.',
      'Balanced safety, efficiency, and constructability in every design.',
    ],
    gallery: [],
  },
  {
    slug: 'world-explorer',
    title: '3D World Explorer',
    tagline: 'A 3D world map for learning flags and geography.',
    year: 'TODO',
    role: 'Creator & Developer',
    tags: ['3D', 'WebGL', 'Geography', 'Education'],
    cover: { label: '3D world map interface', ratio: '16 / 9', src: worldExplorerImg },
    summary:
      'A 3D world map flag and geography learning tool that turns exploring countries, flags, and borders into an interactive experience.',
    body: [
      'A 3D world map flag and geography learning tool, built to make exploring the world\'s countries, flags, and geography interactive rather than rote memorisation.',
    ],
    highlights: [
      'Interactive 3D globe for exploring countries and their geography.',
      'Flag-learning mode paired with location and geography quizzing.',
    ],
    gallery: [],
  },
  {
    slug: 'stock-watch',
    title: 'Stock Watch',
    tagline: 'Track a personal stock portfolio with real-time and historical US stock data.',
    year: 'TODO',
    role: 'Creator & Developer',
    tags: ['Full-Stack', 'Alpha Vantage API', 'Portfolio Tracking'],
    cover: { label: 'Stock Watch dashboard', ratio: '16 / 9', src: stockWatchImg },
    summary:
      'Stock Watch is a full-stack web application that allows users to track and manage their personal stock portfolio, and access real-time stock prices and historical data for US stocks, utilising the Alpha Vantage API.',
    body: [
      'Stock Watch is a full-stack web application that allows users to track and manage their personal stock portfolio, and access real-time stock prices and historical data for US stocks, utilising the Alpha Vantage API.',
    ],
    highlights: [
      'Real-time and historical US stock price data via the Alpha Vantage API.',
      'Personal portfolio tracking and management.',
    ],
    gallery: [],
  },
  {
    slug: 'jja-notes',
    title: 'JJA Notes',
    tagline: 'A simple note-taking app for Notebooks and Pages in one central place.',
    year: 'TODO',
    role: 'Creator & Developer',
    tags: ['Full-Stack', 'Note-Taking'],
    cover: { label: 'JJA Notes interface', ratio: '16 / 9', src: jjaNotesImg },
    summary:
      'JJA Notes is a simple and easy to use note taking app that allows users to store Notebooks and Pages in one central location.',
    body: [
      'JJA Notes is a simple and easy to use note taking app that allows users to store Notebooks and Pages in one central location.',
    ],
    highlights: [
      'Organises notes into Notebooks and Pages for structured note-taking.',
      'Designed for simplicity and ease of use.',
    ],
    gallery: [],
  },
  {
    slug: 'gym-tracker',
    title: 'Gym Tracker',
    tagline: 'Record workouts and generate shareable PDF summaries.',
    year: 'TODO',
    role: 'Creator & Developer',
    tags: ['Full-Stack', 'PDF Generation', 'Fitness'],
    cover: { label: 'Gym Tracker workout log', ratio: '16 / 9', src: gymImg },
    summary:
      'Sign up, set your profile information and start creating or recording workouts. Add exercises to each workout and produce a PDF copy to send to friends, family, or clients.',
    body: [
      'Sign up, set your profile information and start creating or recording workouts. Add exercises to each workout and produce a PDF copy to send to friends, family, or clients.',
    ],
    highlights: [
      'User profiles with workout creation and recording.',
      'Per-exercise logging within each workout.',
      'One-click PDF export of workouts to share with others.',
    ],
    gallery: [],
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
