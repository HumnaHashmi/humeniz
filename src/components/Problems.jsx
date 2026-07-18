import { ArrowDown } from 'lucide-react'
import Reveal from './Reveal.jsx'

import { UserX, PhoneMissed, Clock, Repeat, Cable } from 'lucide-react'

const problems = [
  { icon: UserX, title: 'Lost leads', text: "Someone reaches out and never hears back in time — so they go to a competitor." },
  { icon: PhoneMissed, title: 'Missed calls', text: "Every unanswered call is a customer who just found someone else." },
  { icon: Clock, title: 'Slow support', text: "Customers expect an answer in minutes, not by tomorrow." },
  { icon: Repeat, title: 'Manual work', text: "Your team spends hours a day on tasks that don't need a human." },
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
