import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CalendarDays, FolderKanban, UserRound } from 'lucide-react'
import PageHeader from '../../components/layout/PageHeader'
import { Avatar, Badge, Button, EmptyState } from '../../components/common'
import { MyTasksTable, SectionCard } from '../../components/dashboard'
import { ProgressBar } from '../../components/projects'
import { getProjectById } from '../../data/employeeProjects'
import { myTasks } from '../../data/employeeDashboard'
import { projectStatus } from '../../utils/status'
import { daysUntil, formatDate, relativeDue } from '../../utils/date'

export default function ProjectDetails() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return (
      <div className="card">
        <EmptyState
          icon={FolderKanban}
          title="Project not found"
          description="This project doesn't exist or you don't have access to it."
          action={
            <Link to="/employee/projects">
              <Button>Back to projects</Button>
            </Link>
          }
        />
      </div>
    )
  }

  const status = projectStatus[project.status]
  const tasks = myTasks
    .filter((t) => t.projectId === project.id)
    .map((t) => ({ ...t, projectName: project.name }))
  const done = tasks.filter((t) => t.status === 'completed').length
  const overdue = project.status !== 'completed' && daysUntil(project.deadline) < 0

  return (
    <div>
      <Link
        to="/employee/projects"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-primary-600"
      >
        <ArrowLeft className="size-4" aria-hidden="true" /> Back to projects
      </Link>

      <PageHeader
        title={project.name}
        description={project.description}
        actions={<Badge variant={status.variant}>{status.label}</Badge>}
      />

      <div className="space-y-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <SectionCard title="Project Information" className="lg:col-span-2">
            <div className="space-y-5 p-5">
              <div>
                <p className="mb-1.5 text-xs font-medium text-ink-soft">Overall progress</p>
                <ProgressBar value={project.progress} label="Overall project progress" />
              </div>
              <dl className="grid gap-4 sm:grid-cols-3">
                <div>
                  <dt className="flex items-center gap-1.5 text-xs text-ink-soft">
                    <CalendarDays className="size-4" aria-hidden="true" /> Start date
                  </dt>
                  <dd className="mt-1 font-medium">{formatDate(project.startDate)}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1.5 text-xs text-ink-soft">
                    <CalendarDays className="size-4" aria-hidden="true" /> Deadline
                  </dt>
                  <dd className="mt-1 font-medium">{formatDate(project.deadline)}</dd>
                  {project.status !== 'completed' && (
                    <dd className={overdue ? 'text-xs text-red-600' : 'text-xs text-ink-soft'}>
                      {relativeDue(project.deadline)}
                    </dd>
                  )}
                </div>
                <div>
                  <dt className="flex items-center gap-1.5 text-xs text-ink-soft">
                    <UserRound className="size-4" aria-hidden="true" /> Manager
                  </dt>
                  <dd className="mt-1 font-medium">{project.manager}</dd>
                </div>
              </dl>
            </div>
          </SectionCard>

          <SectionCard title={`Team Members (${project.team.length})`}>
            <ul className="divide-y divide-line">
              {project.team.map((name) => (
                <li key={name} className="flex items-center gap-3 px-5 py-3">
                  <Avatar name={name} size="sm" />
                  <span className="font-medium">{name}</span>
                  {name === project.manager && <Badge variant="primary" className="ml-auto">Manager</Badge>}
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <SectionCard title={`My Tasks (${done}/${tasks.length} done)`} linkTo="/employee/tasks">
          <MyTasksTable tasks={tasks} />
        </SectionCard>

        <SectionCard title="Activity">
          <ul className="space-y-4 p-5">
            {project.activity.map((a) => (
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
    </div>
  )
}
