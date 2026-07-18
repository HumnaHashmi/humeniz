import { motion } from 'framer-motion'

// Wrap any section content in <Reveal> to fade + slide it up as it
// scrolls into view. Pass a `delay` (seconds) to stagger items in a grid.
export default function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
