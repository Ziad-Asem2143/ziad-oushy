import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CalendarCheck, CalendarDays, ClipboardList, FolderKanban } from 'lucide-react'
import PageHeader from '../../components/layout/PageHeader'
import { Badge, Button, EmptyState } from '../../components/common'
import { SectionCard } from '../../components/dashboard'
import { ProgressBar } from '../../components/projects'
import { getTaskById } from '../../data/employeeTasks'
import { taskPriority, taskStatus } from '../../utils/status'
import { formatDate, relativeDue } from '../../utils/date'

export default function TaskDetails() {
  const { id } = useParams()
  const task = getTaskById(id)

  if (!task) {
    return (
      <div className="card">
        <EmptyState
          icon={ClipboardList}
          title="Task not found"
          description="This task doesn't exist or isn't assigned to you."
          action={
            <Link to="/employee/tasks">
              <Button>Back to tasks</Button>
            </Link>
          }
        />
      </div>
    )
  }

  const status = taskStatus[task.status]
  const priority = taskPriority[task.priority]
  const completed = task.status === 'completed'

  return (
    <div>
      <Link
        to="/employee/tasks"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-primary-600"
      >
        <ArrowLeft className="size-4" aria-hidden="true" /> Back to tasks
      </Link>

      <PageHeader
        title={task.title}
        actions={
          <>
            <Badge variant={status.variant}>{status.label}</Badge>
            <Badge variant={priority.variant}>{priority.label} priority</Badge>
          </>
        }
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <SectionCard title="Description">
            <p className="p-5 text-sm leading-relaxed text-ink">{task.description}</p>
          </SectionCard>

          <SectionCard title="Activity">
            <ul className="space-y-4 p-5">
              {task.activity.map((a) => (
                <li key={a.id} className="flex gap-3">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary-500" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="text-sm text-ink">{a.text}</p>
                    <p className="text-xs text-ink-soft">{a.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <SectionCard title="Details" className="self-start">
          <div className="space-y-5 p-5">
            <div>
              <p className="mb-1.5 text-xs font-medium text-ink-soft">Progress</p>
              <ProgressBar value={task.progress} label="Task progress" />
            </div>
            <dl className="space-y-4">
              <div>
                <dt className="flex items-center gap-1.5 text-xs text-ink-soft">
                  <FolderKanban className="size-4" aria-hidden="true" /> Project
                </dt>
                <dd className="mt-1 font-medium">
                  <Link to={`/employee/projects/${task.projectId}`} className="hover:text-primary-600 hover:underline">
                    {task.projectName}
                  </Link>
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-xs text-ink-soft">
                  <CalendarCheck className="size-4" aria-hidden="true" /> Assigned date
                </dt>
                <dd className="mt-1 font-medium">{formatDate(task.assignedDate)}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-1.5 text-xs text-ink-soft">
                  <CalendarDays className="size-4" aria-hidden="true" /> Due date
                </dt>
                <dd className="mt-1 font-medium">{formatDate(task.dueDate)}</dd>
                {!completed && (
                  <dd className="text-xs text-ink-soft">{relativeDue(task.dueDate)}</dd>
                )}
              </div>
            </dl>
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
