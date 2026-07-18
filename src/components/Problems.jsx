import { ArrowDown } from 'lucide-react'
import Reveal from './Reveal.jsx'

const problems = [
  { title: 'Losing leads', text: 'AI captures and follows up automatically, the moment someone reaches out.' },
  { title: 'Missed calls', text: 'An AI receptionist answers around the clock, so no call goes unanswered.' },
  { title: 'Too much manual work', text: "AI takes over the repetitive tasks eating into your team's day." },
  { title: 'Slow customer support', text: 'Customers get an instant, accurate response — day or night.' },
]

export default function Problems() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <Reveal className="mb-14 max-w-xl">
        <p className="font-mono text-xs mb-3 text-accent">THE PROBLEM</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold">
          Where businesses are quietly losing money
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-5">
        {problems.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 0.08}
            className="card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="font-medium mb-2">{p.title}</p>
            <div className="flex items-center gap-2 text-sm text-muted">
              <ArrowDown className="w-4 h-4 shrink-0" />
              <span>{p.text}</span>
            </div>
          </Reveal>
        ))}
        <Reveal
          delay={0.32}
          className="card p-7 md:col-span-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="font-medium mb-2">Disconnected systems</p>
          <div className="flex items-center gap-2 text-sm text-muted">
            <ArrowDown className="w-4 h-4 shrink-0" />
            <span>Your calendar, CRM, inbox, and payments finally work as one system.</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
