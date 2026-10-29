import { cn } from '../../utils/cn'

// value: 0-100
export default function ProgressBar({ value, label = 'Progress', showValue = true, className }) {
  const pct = Math.max(0, Math.min(100, value))
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100"
      >
        <div
          className={cn('h-full rounded-full', pct === 100 ? 'bg-green-500' : 'bg-primary-600')}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showValue && <span className="w-10 text-right text-xs font-medium text-ink-soft">{pct}%</span>}
    </div>
  )
}
