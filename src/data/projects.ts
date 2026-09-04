import ukSearchImg from '../assets/uk-search.png'
import auUnitySearchImg from '../assets/au-unity-search.png'
import engineeringAutomationImg from '../assets/engineering_automation.png'
import craneImg from '../assets/crane.jpeg'
import worldExplorerImg from '../assets/3D-world-explorer.png'
import stockWatchImg from '../assets/stock-watch.png'
import jjaNotesImg from '../assets/jja-notes.png'
import gymImg from '../assets/gym.png'
import crossRiverImg from '../assets/cross-river-rail.png'

export interface ImageSlot {
  /** Caption shown inside the placeholder — describe the image that belongs here. */
  label: string
  /** CSS aspect-ratio value, e.g. '16 / 9'. */
  ratio: string
  /** Imported image source. Omit to render PlaceholderImage instead. */
  src?: string
  /** Where object-cover anchors when cropping to `ratio`. Omit for centered (default). */
  focus?: 'top' | 'center'
}

export interface Project {
  /** URL segment: /projects/:slug */
  slug: string
  title: string
  /** One line, shown on the card. */
  tagline: string
  year: string
  role: string
  /** Optional — shown alongside role/year when the client/employer isn't obvious from context. */
  company?: string
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
    title: 'Unity Search UK (Spider/PieCloud)',
    tagline: 'Azure-hosted platform for ordering conveyancing searches.',
    year: '2025-Now',
    role: 'Software Engineer',
    tags: ['Angular', 'ASP.NET MVC', 'C# .NET 4.8', '.NET Core 3.1/8', 'Azure', 'SQL Server'],
    cover: { label: 'Unity Search UK platform screenshot', ratio: '16 / 9', src: ukSearchImg },
    summary:
      'The platform conveyancers use to order the due diligence searches a property transaction needs. Several web applications share one SQL Server database, all hosted on Azure.',
    body: [
      'Unity Search UK covers the searches that sit behind a property transaction: local authority, drainage and water, environmental, corporate and court checks. Orders leave the platform over supplier web services and the results come back in for the solicitor to review.',
      'The codebase spans two generations. Angular 13 and 15 carry newer screens while Angular 2.0 and ASP.NET 4.8 MVC with Razor still serve older ones. Behind them, services run on C# .NET Framework 4.8 alongside .NET Core 3.1 and .NET 8.',
      'Everything sits on Azure: App Services with deployment slots, Azure Functions, SQL Server, Service Bus for messaging, plus VMs and Storage.',
    ],
    highlights: [
      'Shipped features across Angular 2.0, 13 and 15, plus legacy ASP.NET MVC and Razor views.',
      'Built and maintained services on both .NET Framework 4.8 and .NET Core 3.1/8.',
      'Integrated client and supplier web services to move search orders and results between systems.',
      'Deployed through Azure App Services and slots, with Service Bus handling messaging between components.',
    ],
    gallery: [],
  },
  {
    slug: 'unity-search-australia',
    title: 'Unity Search Australia (Search Manager 22)',
    tagline: 'Property and company search platform for Australian legal firms.',
    year: '2023-2024',
    role: 'Software Engineer',
    tags: ['Angular', 'Flutter', 'C# .NET', 'Kubernetes', 'Google Cloud', 'PostgreSQL', 'RabbitMQ'],
    cover: {
      label: 'Unity Search Australia platform screenshot',
      ratio: '16 / 9',
      src: auUnitySearchImg,
      focus: 'top',
    },
    summary:
      'Dye & Durham\'s search platform for Australian solicitors, conveyancers and insolvency agents. Title searches, company and bankruptcy checks, PPSR registrations and due-diligence reports, all ordered from one application.',
    body: [
      'A conveyancer settling a property deal needs a title certificate, an ASIC company extract, a PPSR security check and a bankruptcy search, each from a different registry. Unity Search puts them behind one interface, with thousands of products drawn from state and federal data sources. Dye & Durham is an approved ASIC, PPSR and AFSA broker, so results come straight from the registries rather than a cached copy.',
      'The platform runs as microservices on Kubernetes in Google Cloud. Flux deploys from Git, with older components still on Windows Server 2016 VMs. The frontends are Angular, Flutter and .NET MVC; the services behind them are C# on .NET Core 6-8 and .NET Framework, backed by PostgreSQL and MSSQL, with RabbitMQ carrying messages between them.',
    ],
    highlights: [
      'Built and maintained .NET Core services running on Kubernetes in Google Cloud, deployed through Flux and CI/CD pipelines.',
      'Built and maintained features in the Angular frontend.',
      'Integrated third-party registry APIs across the microservice architecture, mapping their request and response formats onto the platform\'s internal contracts.',
      'Used RabbitMQ to move long-running search orders off the request path and process them in the background.',
    ],
    gallery: [],
  },
  {
    slug: 'structural-engineering-automation',
    title: 'Structural Engineering Automation',
    tagline: 'Self-taught Python tooling that took the repetitive work out of crane analysis and drafting.',
    year: '2020-2022',
    role: 'Senior Structural Engineer',
    company: 'Robert Bird Group',
    tags: ['Python', 'Automation', 'Grasshopper', 'Microstran', 'Crane Analysis'],
    cover: {
      label: 'Automation tooling screenshot',
      ratio: '16 / 9',
      src: engineeringAutomationImg,
    },
    summary:
      'I taught myself Python while working as a structural engineer, first to analyse output from Microstran models, then to build the tools that removed the slowest manual steps in crane analysis and lifting chart drafting.',
    body: [
      'I taught myself Python while working as a structural engineer. It started with the data coming out of Microstran, which I was reading through by hand, and turned into a habit of treating anything repetitive as a problem worth solving in code.',
      'The first real tool was a Python desktop app that handled the Microstran data output for crane analysis. It cut the time spent on that task by 67% and saved around £18k a year.',
      'I then moved into Grasshopper, building tower crane steel grillage models and pulling out the reaction loads on the supporting permanent structure. That gave the other designers on the project the numbers they needed without a round of manual rework. The same plugin generated lifting capacity charts end to end, halving manual drafting time and saving £25,000 a year.',
      'The appeal was never the syntax. It was pulling a messy manual process apart into steps a machine could take over, then getting the tedious work off my plate so I could spend the time on the harder engineering problems. That is where the move into software started.',
    ],
    highlights: [
      'Self-taught Python for Microstran model data analysis, then for bespoke automation tools.',
      'Built a Python desktop app that cut crane analysis data output time by 67%, saving £18k a year.',
      'Modelled tower crane steel grillages in Grasshopper and output reaction loads for the permanent structure designers.',
      'Automated lifting capacity chart generation, halving manual drafting time and saving £25,000 a year.',
    ],
    gallery: [],
  },
  {
    slug: 'cross-river-rail',
    title: 'Cross River Rail',
    tagline: 'Led engineering and drafting on the Woolloongabba Underground Station, Brisbane.',
    year: '2019-2022',
    role: 'Senior Structural Engineer',
    company: 'Robert Bird Group',
    tags: [
      'Structural Engineering',
      'Tunnelling',
      'Construction Sequencing',
      'Temporary Works',
      'Condition Assessment',
      'Stakeholder Engagement',
    ],
    cover: {
      label: 'Woolloongabba Underground Station construction',
      ratio: '16 / 9',
      src: crossRiverImg,
    },
    summary:
      'Cross River Rail is a 10.2 km, £3 billion (equivalent) rail infrastructure project in Brisbane, Australia, featuring twin tunnels under the CBD and Brisbane River and four new underground stations.',
    body: [
      'Cross River Rail is a 10.2 km rail line running through central Brisbane, Australia, at a cost of roughly £3 billion. At the centre of it are 5.9 km of twin tunnels beneath the CBD and the Brisbane River, plus four new underground stations at Boggo Road, Woolloongabba, Albert Street and Roma Street. The programme also covers upgrades to existing surface stations and new stations on the Gold Coast line. Services are due to start in 2026.',
      'I led a team of six engineers and four drafters on the Woolloongabba Underground Station, working alongside CPB Contractors. The work covered construction-phase engineering, build sequencing and temporary works. The station sits in a live rail corridor, so each stage of the sequence had to hold the surrounding ground and structures while trains kept running a short distance away.',
      'On the design side I worked on the initial retention systems and the temporary steel decking platforms that carried the plant and equipment used to excavate the station caverns and tunnels below. Before any of that, I ran condition assessments on the existing infrastructure in the corridor and set out how each structure would be propped or supported as the works moved around it.',
      'A lot of the job was talking to people rather than designing. I met regularly with architects, site teams and subcontractors, and spent time on site checking that what had been installed matched what we had designed. Where the drawings and the site disagreed, it was either sorted there and then or fed back into the next stage of the sequence.',
      'Public safety shaped most of the sequencing decisions. The rail network stayed open throughout, so I worked with the network departments on access, staging and protection of the operating railway, and took part in the safety briefings that went with each phase of the works.',
    ],
    highlights: [
      'Led a team of six engineers and four drafters through construction-phase engineering and sequencing.',
      'Designed initial retention systems and temporary steel decking platforms carrying the plant used to excavate the station caverns.',
      'Assessed the condition of existing rail corridor structures and specified how to support them during the build.',
      'Ran the day-to-day interface with architects, site teams and subcontractors, including regular site inspections.',
      'Worked with rail network departments to keep the operating railway and the public safe through every stage.',
      'Contributed to one of Australia\'s largest infrastructure projects, spanning 5.9 km of twin tunnels under Brisbane\'s CBD.',
    ],
    gallery: [],
  },
  {
    slug: 'tower-crane-projects',
    title: 'Tower Crane Projects',
    tagline: 'Bespoke structural design for tower cranes on construction sites worldwide.',
    year: '2016-2022',
    role: 'Structural Engineer',
    company: 'Robert Bird Group',
    tags: [
      'Structural Design',
      'Tower Cranes',
      'Construction Engineering',
      'Design Standards',
      'Client & Contract Management',
    ],
    cover: { label: 'Tower crane design drawing', ratio: '16 / 9', src: craneImg },
    summary:
      'Before I moved into software, I spent seven years as a structural engineer designing tower cranes for construction sites around the world. Every design had to work around the site it stood on and satisfy the crane standards of the country it was built in.',
    body: [
      'Every crane was a one-off. Sites came with their own problems, whether that was a footprint too tight for a standard base, an awkward tie-in to the building, or foundations that had to sit over existing structures. I worked with the crane contractor to design something that fit the site and still gave them the lifting capacity their program needed.',
      'The clearest example is the <a href="https://www.marr.com.au/projects/tx-tower/" target="_blank" rel="noopener noreferrer">TX Tower deconstruction</a> in Sydney, delivered by the Robert Bird Group team I was part of, with Marr Contracting as the crane contractor we worked with on the solution. The 233 metre transmission tower at Willoughby could not take lateral supports, so the crane had to reach over the top of it without a temporary structure propping it up.',
      'We landed on a freestanding Favelle Favco M310D on 193 metres of tower, guyed at 81 metres into four rock anchors set 41 metres out from the centreline. That gave an underhook height of 248 metres. Swapping to a 150 tonne heavy lift luffer partway down meant the tower came off in whole layers rather than pieces, cutting the job from 90 planned lifts to 36. It finished three months early with no incidents.',
      'Each design was signed off against the local code for wherever the crane was going, so I worked across different national standards rather than one house method. Getting that right at the start mattered. A design that ignores the local code is a design the site cannot build.',
      'I also ran the contracts with the crane contractor clients, worth AUD $10,000 to $100,000 per job. That covered scoping the work, agreeing what we would deliver, and being their point of contact through to the crane going up.',
    ],
    highlights: [
      'Part of the Robert Bird Group team on the TX Tower deconstruction in Sydney, a 233m transmission tower taken down three months ahead of schedule.',
      'Designed one-off tower crane solutions for sites with tight footprints, awkward tie-ins and existing structures in the way.',
      'Designed to the local code in each country a crane was installed, rather than a single house standard.',
      'Managed client contracts worth AUD $10,000 to $100,000 from quote through to delivery.',
    ],
    gallery: [],
  },
  {
    slug: 'world-explorer',
    title: '3D World Explorer',
    tagline: 'A 3D world map for learning flags and geography.',
    year: '2026',
    role: 'Creator & Developer',
    tags: ['3D', 'WebGL', 'React', 'Three.js', 'Geography', 'Education'],
    cover: { label: '3D world map interface', ratio: '16 / 9', src: worldExplorerImg },
    summary:
      'Currently building a 3D world map flag and geography learning tool that turns exploring countries, flags, and borders into an interactive experience.',
    body: [
      'A 3D world map flag and geography learning tool, built to make exploring the world\'s countries, flags, and geography interactive rather than rote memorisation. Built with React, react-globe.gl, and Three.js, rendering all 241 countries from Natural Earth boundary data with no runtime network calls — country geometry, metadata, and flags are baked into the app at build time.',
      'Every country is filled with a colour that differs from all of its neighbours, computed with a Welsh–Powell greedy graph colouring over adjacency derived two ways: shared borders from the boundary data\'s topology, and visual adjacency from a spatial hash over each country\'s vertices (plain bounding-box checks fail badly for countries like Russia that span half the globe).',
      'Solved a few nontrivial rendering problems along the way: hover and selection are expressed purely through material colour rather than polygon altitude, since changing altitude forces the underlying library to rebuild all ~241 extruded meshes and stalls the main thread; and borders are drawn as their own mesh layer rather than using the built-in polygon stroke, which loses the depth test at the globe\'s surface and renders invisibly.',
    ],
    highlights: [
      'Interactive 3D globe for exploring countries, borders, and their geography, with click-through detail panels (flag, capital, population, region, area, clickable neighbours).',
      'Flag-learning mode paired with a two-tier location and geography quiz — Easy shows the flag, Hard doesn\'t, revealing it after each answer.',
      'Predictive search with historical alias support (USA, UK, Holland, Burma, Ivory Coast, Persia, …) that flies the camera to and highlights the matched country.',
      'Custom map-colouring algorithm combining topological and visual adjacency so no two neighbouring countries ever share a fill colour.',
    ],
    liveUrl: 'https://anico94.github.io/3D-World-Explorer/',
    repoUrl: 'https://github.com/Anico94/3D-World-Explorer',
    gallery: [],
  },
  {
    slug: 'stock-watch',
    title: 'Stock Watch',
    tagline: 'Track a personal stock portfolio with real-time and historical US stock data.',
    year: '2022',
    role: 'Creator & Developer',
    tags: ['Full-Stack', 'Vue.js', 'Node.js', 'MongoDB', 'Alpha Vantage API'],
    cover: { label: 'Stock Watch dashboard', ratio: '16 / 9', src: stockWatchImg },
    summary:
      'Stock Watch is a full-stack web application that allows users to track and manage their personal stock portfolio, and access real-time stock prices and historical data for US stocks, utilising the Alpha Vantage API.',
    body: [
      'Stock Watch is a full-stack web application that allows users to track and manage their personal stock portfolio, and access real-time stock prices and historical data for US stocks, utilising the Alpha Vantage API.',
      'The frontend is built with Vue.js, using Bootstrap-Vue for UI components and Chart.js to render historical price charts on individual stock pages. The backend is a Node.js/Express REST API backed by MongoDB, with user accounts secured through bcrypt password hashing and JSON Web Tokens for authenticated access to a user\u2019s watchlist.',
      'Users can sign up, log in, and build a personal watchlist of US stocks, adding and removing holdings which are persisted to their account. The app also integrates the Marketaux API to surface the latest news articles for a user\u2019s tracked companies, helping them stay on top of market developments.',
      'The app was deployed with the client on Netlify and the server on Heroku.',
    ],
    highlights: [
      'Real-time and historical US stock price data via the Alpha Vantage API, visualised with Chart.js.',
      'Personal portfolio (watchlist) tracking and management, backed by a MongoDB-persisted user account.',
      'JWT-based authentication with bcrypt password hashing for secure sign-up and login.',
      'Latest company news via the Marketaux API to help users stay informed on their holdings.',
    ],
    repoUrl: 'https://github.com/Anico94/Stocks-and-Crypto-Client',
    gallery: [],
  },
  {
    slug: 'jja-notes',
    title: 'JJA Notes',
    tagline: 'A simple note-taking app for Notebooks and Pages in one central place.',
    year: '2022',
    role: 'Creator & Developer',
    tags: ['Full-Stack', 'Note-Taking', 'React', 'Firebase'],
    cover: { label: 'JJA Notes interface', ratio: '16 / 9', src: jjaNotesImg },
    summary:
      'JJA Notes is a simple and easy to use note taking app that allows users to store Notebooks and Pages in one central location.',
    body: [
      'JJA Notes is a simple and easy to use note taking app that allows users to store Notebooks and Pages in one central location.',
      'Built with React and Firebase, the app pairs a real-time Firestore backend with Firebase Authentication, so notes are saved securely to each user\u2019s account and stay in sync across sessions. A rich-text editor (TinyMCE) powers the Pages view, letting users format notes with headings, lists, and other styling rather than plain text.',
      'The app is structured around two core entities: Notebooks, which group related content, and Pages, which hold the actual note content within a notebook. This mirrors how people naturally organise notes by topic or project, then drill down into individual entries.',
      'Developed collaboratively with Joshua Luo and Jiakai Ren, and deployed with Firebase Hosting.',
    ],
    highlights: [
      'Organises notes into Notebooks and Pages for structured note-taking.',
      'Designed for simplicity and ease of use.',
      'Rich-text page editing powered by TinyMCE.',
      'User accounts and data persistence via Firebase Authentication and Firestore.',
      'Responsive UI built with React, MUI, and Chakra UI.',
    ],
    repoUrl: 'https://github.com/Anico94/jja-notes',
    gallery: [],
  },
  {
    slug: 'gym-tracker',
    title: 'Gym Tracker',
    tagline: 'Record workouts and generate shareable PDF summaries.',
    year: '2022',
    role: 'Creator & Developer',
    tags: ['Ruby on Rails', 'PostgreSQL', 'PDF Generation', 'Fitness'],
    cover: { label: 'Gym Tracker workout log', ratio: '16 / 9', src: gymImg },
    summary:
      'Sign up, set your profile information and start creating or recording workouts. Add exercises to each workout and produce a PDF copy to send to friends, family, or clients.',
    body: [
      'Gym Tracker is a full-stack Ruby on Rails app for logging workouts and sharing progress. Users sign up with a secure, hashed-password account, then record workouts with a date, focus (e.g. push, pull, legs), and duration.',
      'Each workout holds a list of exercises, with per-exercise tracking for weight, sets, reps, distance, and duration — covering both strength training and cardio in the same log.',
      'A profile page calculates BMI automatically from the user\'s recorded height and weight, categorizing it (underweight, healthy, overweight, etc.) so users get instant feedback alongside their workout history.',
      'The standout feature is one-click PDF export: any workout can be rendered as a formatted PDF (via wicked_pdf/wkhtmltopdf) directly from the workout page, making it easy to hand a session log to a trainer, training partner, or client.',
      'Built with Rails, PostgreSQL, Bootstrap/SCSS for styling, and jQuery for interactivity, and deployed to Heroku.',
    ],
    highlights: [
      'Secure authentication with per-user workout and exercise ownership.',
      'Automatic BMI calculation and categorization from profile height/weight.',
      'Flexible per-exercise logging: weight, sets, reps, distance, and duration.',
      'One-click PDF export of any workout for sharing with trainers or friends.',
      'Full CRUD on workouts and exercises with a Bootstrap-styled UI.',
    ],
    repoUrl: 'https://github.com/Anico94/Gym_tracker',
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
