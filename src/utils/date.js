// Date helpers. Mock data uses daysFromNow() so dates always look current in demos.
export function daysFromNow(n) {
  const d = new Date()
  d.setHours(12, 0, 0, 0)
  d.setDate(d.getDate() + n)
  return d.toISOString().slice(0, 10) // "YYYY-MM-DD"
}

export function formatDate(iso) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

// Whole days from today to the given date (negative = overdue)
export function daysUntil(iso) {
  const today = new Date()
  today.setHours(12, 0, 0, 0)
  return Math.round((new Date(`${iso}T12:00:00`) - today) / 86400000)
}

export function relativeDue(iso) {
  const n = daysUntil(iso)
  if (n === 0) return 'Due today'
  if (n === 1) return 'Due tomorrow'
  if (n > 1) return `Due in ${n} days`
  return `Overdue by ${Math.abs(n)} day${n === -1 ? '' : 's'}`
}
