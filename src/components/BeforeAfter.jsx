import { X, Check } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function BeforeAfter() {
  return (
    <section className="border-y border-border bg-graybg">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Reveal className="mb-14 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">What changes</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          <Reveal className="card p-8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <p className="font-mono text-xs mb-5 text-muted">BEFORE</p>
            <ul className="space-y-4 text-sm">
              {['Missed leads', 'Manual work, every day', 'Slow replies', 'Lost revenue'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <X className="w-4 h-4 text-muted shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal
            delay={0.15}
            className="card p-8 bg-indigo border-indigo transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="font-mono text-xs mb-5 text-muted">AFTER</p>
            <ul className="space-y-4 text-sm">
              {['A 24/7 AI team', 'Automatic follow-ups', 'Faster service', 'More sales'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0 text-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
