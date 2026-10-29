import { useId } from 'react'
import { ChevronDown } from 'lucide-react'

// options: [{ value, label }]
export default function FilterSelect({ label, value, onChange, options }) {
  const id = useId()
  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">{label}</label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 w-full appearance-none rounded-lg border border-line bg-white pl-3 pr-9 text-sm text-ink transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" aria-hidden="true" />
    </div>
  )
}
