import { useState } from 'react'
import { FolderKanban } from 'lucide-react'
import PageHeader from '../../components/layout/PageHeader'
import { EmptyState, SearchInput } from '../../components/common'
import { ProjectCard } from '../../components/projects'
import { projects } from '../../data/employeeProjects'
import { myTasks } from '../../data/employeeDashboard'
import { projectStatus } from '../../utils/status'
import { cn } from '../../utils/cn'

const filters = [{ value: 'all', label: 'All' }, ...Object.entries(projectStatus).map(([value, s]) => ({ value, label: s.label }))]

export default function Projects() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')

  const visible = projects.filter(
    (p) =>
      (status === 'all' || p.status === status) &&
      p.name.toLowerCase().includes(search.trim().toLowerCase()),
  )

  return (
    <div>
      <PageHeader title="My Projects" description="Projects you are assigned to." />

      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <SearchInput value={search} onChange={setSearch} placeholder="Search projects..." className="lg:max-w-sm" />
        <div role="group" aria-label="Filter by status" className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              aria-pressed={status === f.value}
              onClick={() => setStatus(f.value)}
              className={cn(
                'rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors',
                status === f.value
                  ? 'border-primary-600 bg-primary-600 text-white'
                  : 'border-line bg-white text-ink-soft hover:bg-gray-50',
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <div className="card">
          <EmptyState icon={FolderKanban} title="No projects found" description="Try a different search or filter." />
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard key={p.id} project={p} myTaskCount={myTasks.filter((t) => t.projectId === p.id).length} />
          ))}
        </div>
      )}
    </div>
  )
}
