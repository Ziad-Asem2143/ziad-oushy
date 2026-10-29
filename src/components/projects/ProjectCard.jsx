import { Link } from 'react-router-dom'
import { CalendarDays, ListChecks } from 'lucide-react'
import { Badge } from '../common'
import ProgressBar from './ProgressBar'
import { projectStatus } from '../../utils/status'
import { formatDate } from '../../utils/date'

// project: { id, name, description, status, progress, deadline, totalTasks }, myTaskCount: number
export default function ProjectCard({ project, myTaskCount }) {
  const status = projectStatus[project.status]
  return (
    <Link
      to={`/employee/projects/${project.id}`}
      className="card flex flex-col p-5 transition-shadow hover:shadow-pop"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="min-w-0">{project.name}</h3>
        <Badge variant={status.variant} className="shrink-0">{status.label}</Badge>
      </div>
      <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{project.description}</p>

      <div className="mt-4">
        <p className="mb-1.5 text-xs font-medium text-ink-soft">Progress</p>
        <ProgressBar value={project.progress} label={`${project.name} progress`} />
      </div>

      <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4 text-xs text-ink-soft">
        <div className="flex items-center gap-1.5">
          <CalendarDays className="size-4" aria-hidden="true" />
          <dt className="sr-only">Deadline</dt>
          <dd>{formatDate(project.deadline)}</dd>
        </div>
        <div className="flex items-center gap-1.5">
          <ListChecks className="size-4" aria-hidden="true" />
          <dt className="sr-only">Tasks</dt>
          <dd>
            {project.totalTasks} tasks · {myTaskCount} mine
          </dd>
        </div>
      </dl>
    </Link>
  )
}
