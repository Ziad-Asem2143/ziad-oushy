import { cn } from '../../utils/cn'

const tones = {
  blue: 'bg-primary-50 text-primary-600',
  indigo: 'bg-indigo-50 text-indigo-600',
  green: 'bg-green-50 text-green-600',
  amber: 'bg-amber-50 text-amber-600',
  red: 'bg-red-50 text-red-600',
}

export default function StatCard({ label, value, icon: Icon, tone = 'blue' }) {
  return (
    <div className="card flex items-center gap-4 p-5">
      <span className={cn('flex size-12 shrink-0 items-center justify-center rounded-xl', tones[tone])}>
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-sm text-ink-soft">{label}</p>
        <p className="text-2xl font-semibold text-ink">{value}</p>
      </div>
    </div>
  )
}
