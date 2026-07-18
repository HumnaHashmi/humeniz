import Reveal from './Reveal.jsx'

const points = [
  { title: 'We understand your business first', text: 'No system gets built until we know exactly how you work.' },
  { title: 'Custom-built, not templated', text: 'Every AI system is built around your workflow — not a one-size-fits-all bot.' },
  { title: 'Works with what you already use', text: "It connects to your existing calendar, CRM, and inbox — nothing to switch." },
  { title: 'We stay after launch', text: 'We monitor and improve your system every month, for as long as we work together.' },
  { title: 'Outcomes, not tools', text: "We're judged on booked calls and faster replies — not on which AI model we used." },
]

export default function WhyHumeniz() {
  return (
    <section id="why" className="max-w-6xl mx-auto px-6 py-24">
      <Reveal className="mb-14 max-w-xl">
        <p className="font-mono text-xs mb-3 text-accent">WHY HUMENIZ</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold">
          We solve business problems — not sell AI tools
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-5">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <p className="font-medium mb-2">{p.title}</p>
            <p className="text-sm text-muted">{p.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
