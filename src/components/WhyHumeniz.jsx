import Reveal from './Reveal.jsx'

const points = [
  {
    title: 'Built around your workflow',
    text: 'Every AI system is customized to how your business actually runs — not a generic template.',
  },
  {
    title: 'We stay after launch',
    text: 'We monitor, adjust, and improve your AI team every month — it gets better the longer we work together.',
  },
  {
    title: 'Outcomes, not features',
    text: "We're focused on what changes for your business — more booked calls, faster replies, fewer things falling through the cracks.",
  },
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
