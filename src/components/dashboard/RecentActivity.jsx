import { CalendarDays, CheckCircle2, ClipboardPlus, MessageSquare, RefreshCw } from 'lucide-react'
import { cn } from '../../utils/cn'

const types = {
  completed: { icon: CheckCircle2, style: 'bg-green-50 text-green-600' },
  assigned: { icon: ClipboardPlus, style: 'bg-primary-50 text-primary-600' },
  comment: { icon: MessageSquare, style: 'bg-indigo-50 text-indigo-600' },
  status: { icon: RefreshCw, style: 'bg-amber-50 text-amber-600' },
  leave: { icon: CalendarDays, style: 'bg-gray-100 text-gray-600' },
}

export default function RecentActivity({ items }) {
  return (
    <ul className="space-y-4 p-5">
      {items.map(({ id, type, text, time }) => {
        const { icon: Icon, style } = types[type]
        return (
          <li key={id} className="flex gap-3">
            <span className={cn('flex size-8 shrink-0 items-center justify-center rounded-full', style)}>
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-sm text-ink">{text}</p>
              <p className="text-xs text-ink-soft">{time}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
