/**
 * Site-wide identity and copy.
 *
 * TODO: replace every placeholder below with your real details.
 */
export const site = {
  name: 'Your Name',
  initials: 'YN',
  role: 'Full-Stack Developer',
  tagline:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  location: 'City, Country',
  email: 'you@example.com',
  socials: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
  },
} as const

export const navLinks = [
  { label: 'About', hash: '#about' },
  { label: 'Projects', hash: '#projects' },
  { label: 'Tech Stack', hash: '#tech-stack' },
  { label: 'User Manual', hash: '#user-manual' },
  { label: 'Contact', hash: '#contact' },
] as const
