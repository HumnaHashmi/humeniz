import { Stethoscope, Scale, Home, Megaphone, Calculator, Users } from 'lucide-react'
import Reveal from './Reveal.jsx'

const industries = [
{ icon: Megaphone, name: 'Marketing Agencies', problem: 'Manual reporting, client updates' },
  { icon: Home, name: 'Real Estate', problem: 'Leads going cold overnight' },
  { icon: Calculator, name: 'Accounting Firms', problem: 'Invoice chasing, slow replies' },
  { icon: Users, name: 'Consultants & Coaches', problem: 'Booking and follow-up admin' },
  { icon: Stethoscope, name: 'Medical Clinics', problem: 'Missed calls and no-shows' },
  { icon: Scale, name: 'Law Firms', problem: 'Slow intake, lost leads' },
]

export default function Industries() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <Reveal className="mb-14 max-w-xl">
        <p className="font-mono text-xs mb-3 text-accent">WHO WE HELP</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold">Industries we help</h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {industries.map((ind, i) => (
          <Reveal key={ind.name} delay={i * 0.06} className="card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <ind.icon className="w-5 h-5 text-indigo mb-4" />
            <p className="font-medium mb-1">{ind.name}</p>
            <p className="text-sm text-muted">{ind.problem}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}