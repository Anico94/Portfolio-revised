/**
 * Site-wide identity and copy.
 *
 * TODO: replace every placeholder below with your real details.
 */
export const site = {
  name: 'Alex Nicolaidis',
  initials: 'AN',
  role: 'Software Engineer',
  tagline:
    'I build conveyancing and due diligence platforms for a legal tech company, using .NET and Angular to help UK clients move property deals forward.',
  location: 'London, UK',
  email: 'a.nicolaidis@outlook.com',
  socials: {
    github: 'https://github.com/Anico94',
    linkedin: 'https://www.linkedin.com/in/alexnicolaidis/',
  },
} as const

export const navLinks = [
  { label: 'About', hash: '#about' },
  { label: 'Projects', hash: '#projects' },
  { label: 'Tech Stack', hash: '#tech-stack' },
  { label: 'User Manual', hash: '#user-manual' },
  { label: 'Contact', hash: '#contact' },
] as const
