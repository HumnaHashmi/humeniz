export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { messages } = req.body

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 400,
        system: `You are the AI assistant on the Humeniz website. Humeniz builds AI systems for service businesses (clinics, law firms, real estate, agencies, accounting firms, consultants, coaches) — including an AI Sales Employee, AI Receptionist, AI Customer Support, and Finance Automation, all working together as one system.

Speak like a helpful, friendly team member — not a salesperson. Keep answers short (2-4 sentences). Never mention n8n, APIs, or technical implementation details. If someone seems interested or asks about pricing, encourage them to book the free AI Audit rather than quoting a price yourself.`,
        messages,
      }),
    })

    const data = await response.json()

    if (data.error) {
      return res.status(500).json({ error: data.error.message })
    }

    const reply = data.content.find((block) => block.type === 'text')?.text || ''
    return res.status(200).json({ reply })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}