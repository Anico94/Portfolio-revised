import Section from '../components/Section'
import Reveal from '../components/Reveal'
import PlaceholderImage from '../components/PlaceholderImage'

/** TODO: replace with your own facts. */
const facts = [
  { label: 'Experience', value: '8+ years' },
  { label: 'Projects shipped', value: '40+' },
  { label: 'Current focus', value: 'Product engineering' },
  { label: 'Open to', value: 'Contract & full-time' },
]

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="A developer who cares about the details"
      intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
        <Reveal>
          <div className="surface p-3">
            <PlaceholderImage label="Photo of you at work" ratio="1 / 1" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>

            <dl className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label} className="surface p-4">
                  <dt className="text-custard/55 text-xs tracking-wide uppercase">{fact.label}</dt>
                  <dd className="text-custard mt-1 text-sm font-semibold">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
