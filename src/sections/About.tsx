import Section from '../components/Section'
import Reveal from '../components/Reveal'
import aboutPhoto from '../assets/aboutme.png'

/** TODO: replace with your own facts. */
// const facts = [
//   { label: 'Software Engineering Experience', value: '3+ years' },
//   { label: 'Prior career', value: '7 yrs as a Structural Engineer' },
//   { label: 'Current focus', value: 'Improving workflows with AI' },
//   { label: 'Open to', value: 'Contract & full-time' },
// ]

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="A developer who cares about the details"
      //Re-add if needed
      // intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
        <Reveal>
          <div className="surface p-3">
            <img
              src={aboutPhoto}
              alt="Photo of Alex"
              className="w-full rounded-xl object-cover"
              style={{ aspectRatio: '1 / 1' }}
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-4 text-base leading-relaxed">
            <p>
              I'm a full-stack software engineer with over three years in legal tech. I build .NET
              and Angular applications to meet clients needs.
            </p>
            <p>
              I care as much about the communication side of engineering as the code. I work
              closely with stakeholders to understand what the business actually needs, then build
              features that are practical, secure, and don't take longer to ship than they should.
              I keep documentation updated alongside the code, so the team doesn't lose track of
              how a system works.
            </p>
            <p>
              I use AI to take the boring parts of the job off my plate, boilerplate, repetitive
              refactors, first drafts of documentation, so I can spend the saved time on the harder
              problems. I also use it as a reasoning partner, to stress-test an approach before I
              commit to it or catch a flaw in my own thinking.
            </p>
            <p>
              I do my best work in high-trust teams, where feedback goes both ways and ideas get
              challenged before they get built. Working toward a shared goal, with everyone pushing
              each other to improve, is what makes a team worth being on.
            </p>
            <p>
              Before software, I spent seven years as a chartered structural engineer, leading
              technical teams on multi-billion pound infrastructure projects. That background is
              why I care about reliability and cutting manual work down, rather than just shipping
              something that works.
            </p>
            <p>
              Outside of work I travel, cook, and play a lot of sport. 
              Skiing and hiking in the mountains are amongst my favourite things to do, and I'm always up for a local
              pub quiz.
            </p>

            {/* Hide facts */}
            {/* <dl className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
              {facts.map((fact) => (
                <div key={fact.label} className="surface p-4">
                  <dt className="text-custard/55 text-xs tracking-wide uppercase">{fact.label}</dt>
                  <dd className="text-custard mt-1 text-sm font-semibold">{fact.value}</dd>
                </div>
              ))}
            </dl> */}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
