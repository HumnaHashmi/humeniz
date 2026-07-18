import Reveal from './Reveal.jsx'

const steps = [
  { n: '01', title: 'Free AI Audit', text: 'We understand your business.' },
  { n: '02', title: 'Design your system', text: 'We recommend the right solution.' },
  { n: '03', title: 'Build & integrate', text: 'We build and connect everything.' },
  { n: '04', title: 'Launch', text: 'Your AI team starts working.' },
  { n: '05', title: 'Keep improving', text: 'We monitor and improve it monthly.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-24">
      <Reveal className="mb-14 max-w-xl">
        <p className="font-mono text-xs mb-3 text-accent">THE PROCESS</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold">How it works</h2>
      </Reveal>
      <div className="grid md:grid-cols-5 gap-6">
        {steps.map((step, i) => (
          <Reveal key={step.n} delay={i * 0.08}>
            <p className="font-mono text-sm mb-3 text-accent">{step.n}</p>
            <p className="font-medium mb-1.5">{step.title}</p>
            <p className="text-sm text-muted">{step.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
