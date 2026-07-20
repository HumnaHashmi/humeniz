import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, RotateCcw } from 'lucide-react'
import emailjs from '@emailjs/browser'

const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID
const EMAILJS_CLIENT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID

console.log('EmailJS config:', EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_ADMIN_TEMPLATE_ID, EMAILJS_CLIENT_TEMPLATE_ID)
const businesses = [
  'Medical Clinic',
  'Law Firm',
  'Real Estate',
  'Marketing Agency',
  'Accounting Firm',
  'Consultant / Coach',
  'Home Services',
  'Other',
]

const problems = [
  { id: 'leads', label: 'We miss leads or calls' },
  { id: 'booking', label: 'Appointment booking is a mess' },
  { id: 'support', label: 'Customer support is too slow' },
  { id: 'manual', label: 'Too much manual admin work' },
  { id: 'finance', label: 'Invoicing & payments take forever' },
  { id: 'other', label: 'Something else — let me explain' },
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState('start') // start -> business -> problem -> custom -> email -> sending -> done
  const [business, setBusiness] = useState(null)
  const [problem, setProblem] = useState(null)
  const [customProblem, setCustomProblem] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const reset = () => {
    setStep('start')
    setBusiness(null)
    setProblem(null)
    setCustomProblem('')
    setEmail('')
    setError('')
  }

  const chooseBusiness = (b) => {
    setBusiness(b)
    setStep('problem')
  }

  const chooseProblem = (p) => {
    setProblem(p)
    setError('')
    if (p === 'other') {
      setStep('custom')
    } else {
      setStep('email')
    }
  }

  const submitCustom = () => {
    if (!customProblem.trim()) {
      setError('Please describe your issue.')
      return
    }
    setError('')
    setStep('email')
  }

  const submit = async () => {
    if (!email.includes('@')) {
      setError('Please enter a valid email.')
      return
    }
    setError('')
    setStep('sending')

    const problemLabel =
      problem === 'other' ? customProblem : problems.find((p) => p.id === problem)?.label || problem

    const templateParams = {
      business,
      problem: problemLabel,
      visitor_email: email,
      to_email: email,
    }

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_ADMIN_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CLIENT_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      setStep('done')
    } catch (err) {
      setError('Something went wrong sending your request. Please try again.')
      setStep('email')
    }
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-indigo text-white flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[90vw] max-h-[70vh] card shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-indigo px-5 py-4 flex items-center gap-2.5">
              <img src="/logo.svg" alt="Humeniz" className="w-6 h-6 rounded-md" />
              <div className="flex-1">
                <p className="text-white font-medium text-sm">Humeniz Assistant</p>
                <p className="text-white/60 text-xs">Let's find your fit</p>
              </div>
              {step !== 'start' && (
                <button onClick={reset} className="text-white/60 hover:text-white transition-colors">
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-graybg">
              <div className="flex justify-start">
                <div className="max-w-[85%] text-sm px-3.5 py-2.5 rounded-2xl bg-white border border-border text-ink">
                  Hi! Answer a couple quick questions and we'll follow up with the right solution for you.
                </div>
              </div>

              {step === 'start' && (
                <div className="flex justify-start">
                  <button
                    onClick={() => setStep('business')}
                    className="text-sm font-medium px-4 py-2 rounded-full bg-accent text-ink hover:bg-accent-dark transition-colors"
                  >
                    Let's go
                  </button>
                </div>
              )}

              {step !== 'start' && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] text-sm px-3.5 py-2.5 rounded-2xl bg-white border border-border text-ink">
                    What best describes your business?
                  </div>
                </div>
              )}
              {business && (
                <div className="flex justify-end">
                  <div className="max-w-[85%] text-sm px-3.5 py-2.5 rounded-2xl bg-indigo text-white">{business}</div>
                </div>
              )}
              {step === 'business' && (
                <div className="flex flex-wrap gap-2">
                  {businesses.map((b) => (
                    <button
                      key={b}
                      onClick={() => chooseBusiness(b)}
                      className="text-sm px-3.5 py-2 rounded-full border border-border bg-white hover:border-indigo hover:-translate-y-0.5 transition-all"
                    >
                      {b}
                    </button>
                  ))}
                </div>
              )}

              {business && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] text-sm px-3.5 py-2.5 rounded-2xl bg-white border border-border text-ink">
                    What's the biggest issue you're facing right now?
                  </div>
                </div>
              )}
              {problem && step !== 'custom' && (
                <div className="flex justify-end">
                  <div className="max-w-[85%] text-sm px-3.5 py-2.5 rounded-2xl bg-indigo text-white">
                    {problem === 'other' ? customProblem : problems.find((p) => p.id === problem)?.label}
                  </div>
                </div>
              )}
              {step === 'problem' && (
                <div className="flex flex-col gap-2 items-start">
                  {problems.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => chooseProblem(p.id)}
                      className="text-sm px-3.5 py-2 rounded-full border border-border bg-white hover:border-indigo hover:-translate-y-0.5 transition-all text-left"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              )}

              {step === 'custom' && (
                <div className="flex flex-col gap-2 items-start w-full">
                  <textarea
                    value={customProblem}
                    onChange={(e) => setCustomProblem(e.target.value)}
                    placeholder="Tell us what's going on..."
                    rows={3}
                    className="w-full text-sm px-3.5 py-2.5 rounded-2xl border border-border outline-none focus:border-indigo transition-colors resize-none"
                  />
                  {error && <p className="text-xs text-red-500 px-1">{error}</p>}
                  <button
                    onClick={submitCustom}
                    className="text-sm font-medium px-4 py-2 rounded-full bg-accent text-ink hover:bg-accent-dark transition-colors"
                  >
                    Continue
                  </button>
                </div>
              )}

              {problem && (step === 'email' || step === 'sending' || step === 'done') && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] text-sm px-3.5 py-2.5 rounded-2xl bg-white border border-border text-ink">
                    Great — what's your email so we can get back to you?
                  </div>
                </div>
              )}

              {step === 'email' && (
                <div className="flex flex-col gap-2 items-start w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && submit()}
                    placeholder="you@business.com"
                    className="w-full text-sm px-3.5 py-2.5 rounded-full border border-border outline-none focus:border-indigo transition-colors"
                  />
                  {error && <p className="text-xs text-red-500 px-1">{error}</p>}
                  <button
                    onClick={submit}
                    className="text-sm font-medium px-4 py-2 rounded-full bg-accent text-ink hover:bg-accent-dark transition-colors"
                  >
                    Submit
                  </button>
                </div>
              )}

              {step === 'sending' && (
                <div className="flex justify-start">
                  <div className="bg-white border border-border rounded-2xl px-3.5 py-2.5 flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              {step === 'done' && (
                <div className="flex justify-start">
                  <div className="max-w-[90%] text-sm px-4 py-3.5 rounded-2xl bg-white border border-border text-ink">
                    <p className="font-medium mb-1">Thank you for submitting your requirement!</p>
                    <p className="text-muted">We'll get back to you shortly at {email}.</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}