import { useState } from 'react'
import { ClipboardList } from 'lucide-react'
import PageHeader from '../../components/layout/PageHeader'
import { EmptyState, SearchInput } from '../../components/common'
import { FilterSelect, TaskTable } from '../../components/tasks'
import { employeeTasks } from '../../data/employeeTasks'
import { taskPriority, taskStatus } from '../../utils/status'

const statusOptions = [
  { value: 'all', label: 'All statuses' },
  ...Object.entries(taskStatus).map(([value, s]) => ({ value, label: s.label })),
]
const priorityOptions = [
  { value: 'all', label: 'All priorities' },
  ...Object.entries(taskPriority).map(([value, p]) => ({ value, label: p.label })),
]

export default function Tasks() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [priority, setPriority] = useState('all')

  const query = search.trim().toLowerCase()
  const visible = employeeTasks
    .filter(
      (t) =>
        (status === 'all' || t.status === status) &&
        (priority === 'all' || t.priority === priority) &&
        (t.title.toLowerCase().includes(query) || t.projectName.toLowerCase().includes(query)),
    )
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))

  return (
    <div>
      <PageHeader title="My Tasks" description="All tasks assigned to you." />

      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_12rem_12rem]">
        <SearchInput value={search} onChange={setSearch} placeholder="Search tasks..." className="sm:col-span-2 lg:col-span-1" />
        <FilterSelect label="Filter by status" value={status} onChange={setStatus} options={statusOptions} />
        <FilterSelect label="Filter by priority" value={priority} onChange={setPriority} options={priorityOptions} />
      </div>

      <div className="card">
        {visible.length === 0 ? (
          <EmptyState icon={ClipboardList} title="No tasks found" description="Try a different search or filter." />
        ) : (
          <TaskTable tasks={visible} />
        )}
      </div>
    </div>
  )
}
