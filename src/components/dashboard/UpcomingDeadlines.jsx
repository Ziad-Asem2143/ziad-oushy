import { Link } from 'react-router-dom'
import { CalendarCheck } from 'lucide-react'
import { EmptyState } from '../common'
import { cn } from '../../utils/cn'
import { daysUntil, formatDate, relativeDue } from '../../utils/date'

// tasks: already filtered/sorted by the page
export default function UpcomingDeadlines({ tasks }) {
  if (tasks.length === 0) {
    return <EmptyState icon={CalendarCheck} title="No upcoming deadlines" description="You're all caught up." />
  }

  return (
    <ul className="divide-y divide-line">
      {tasks.map((task) => {
        const days = daysUntil(task.dueDate)
        const urgent = days <= 1
        return (
          <li key={task.id}>
            <Link to={`/employee/tasks/${task.id}`} className="flex items-start justify-between gap-3 px-5 py-3.5 hover:bg-gray-50">
              <div className="min-w-0">
                <p className="truncate font-medium text-ink">{task.title}</p>
                <p className="truncate text-xs text-ink-soft">{task.projectName}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className={cn('text-xs font-medium', urgent ? 'text-red-600' : 'text-ink')}>{relativeDue(task.dueDate)}</p>
                <p className="text-xs text-ink-soft">{formatDate(task.dueDate)}</p>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
