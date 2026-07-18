import { Check } from 'lucide-react'
import Reveal from './Reveal.jsx'

const solutions = [
  { name: 'AI Sales Employee', items: ['Qualifies leads', 'Books meetings', 'Follows up automatically', 'Updates your CRM'] },
  { name: 'AI Receptionist', items: ['Answers calls', 'Replies on WhatsApp', 'Books appointments', 'Manages your calendar'] },
  { name: 'AI Customer Support', items: ['Handles FAQs', 'Supports over email', 'Creates tickets when needed', 'Live chat, instantly'] },
  { name: 'AI Operations Assistant', items: ['Builds reports', 'Sends notifications', 'Runs internal workflows', 'Keeps processes moving'] },
]

export default function Solutions() {
  return (
    <section id="solutions" className="border-y border-border bg-graybg">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <Reveal className="mb-14 max-w-xl">
          <p className="font-mono text-xs mb-3 text-accent">THE SOLUTION</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3">Meet your AI team</h2>
          <p className="text-muted">Each one handles a specific job in your business — quietly, reliably, every day.</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {solutions.map((s, i) => (
            <Reveal
              key={s.name}
              delay={i * 0.08}
              className="card p-8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-5">
                <p className="font-display font-semibold text-lg">{s.name}</p>
                <span className="dot animate-pulse" />
              </div>
              <ul className="space-y-2.5 text-sm text-muted">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-indigo shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal
            delay={0.4}
            className="card p-8 bg-white md:col-span-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between mb-5">
              <p className="font-display font-semibold text-lg">AI Finance Assistant</p>
              <span className="dot animate-pulse" />
            </div>
            <ul className="grid sm:grid-cols-3 gap-2.5 text-sm text-muted">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo shrink-0" /> Sends invoices automatically
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo shrink-0" /> Chases late payments
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-indigo shrink-0" /> Delivers weekly reports
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
