import { Link } from 'react-router-dom'
import { ClipboardList } from 'lucide-react'
import { Badge, EmptyState } from '../common'
import { taskPriority, taskStatus } from '../../utils/status'
import { formatDate } from '../../utils/date'

// tasks: [{ id, title, projectName, status, priority, dueDate }]
export default function MyTasksTable({ tasks }) {
  if (tasks.length === 0) {
    return <EmptyState icon={ClipboardList} title="No tasks yet" description="Tasks assigned to you will appear here." />
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead className="bg-gray-50 text-xs uppercase tracking-wide text-ink-soft">
          <tr>
            <th scope="col" className="px-5 py-3 font-medium">Task</th>
            <th scope="col" className="px-5 py-3 font-medium">Project</th>
            <th scope="col" className="px-5 py-3 font-medium">Status</th>
            <th scope="col" className="px-5 py-3 font-medium">Priority</th>
            <th scope="col" className="px-5 py-3 font-medium">Due Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {tasks.map((task) => (
            <tr key={task.id} className="hover:bg-gray-50">
              <td className="px-5 py-3.5 font-medium text-ink">
                <Link to={`/employee/tasks/${task.id}`} className="hover:text-primary-600 hover:underline">
                  {task.title}
                </Link>
              </td>
              <td className="px-5 py-3.5 text-ink-soft">{task.projectName}</td>
              <td className="px-5 py-3.5">
                <Badge variant={taskStatus[task.status].variant}>{taskStatus[task.status].label}</Badge>
              </td>
              <td className="px-5 py-3.5">
                <Badge variant={taskPriority[task.priority].variant}>{taskPriority[task.priority].label}</Badge>
              </td>
              <td className="whitespace-nowrap px-5 py-3.5 text-ink-soft">{formatDate(task.dueDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
