import { Link } from 'react-router-dom'
import { Badge } from '../common'
import { ProgressBar } from '../projects'
import { taskPriority, taskStatus } from '../../utils/status'
import { formatDate } from '../../utils/date'

// tasks: [{ id, title, projectId, projectName, status, priority, dueDate, progress }]
export default function TaskTable({ tasks }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[820px] text-left text-sm">
        <thead className="bg-gray-50 text-xs uppercase tracking-wide text-ink-soft">
          <tr>
            <th scope="col" className="px-5 py-3 font-medium">Task</th>
            <th scope="col" className="px-5 py-3 font-medium">Project</th>
            <th scope="col" className="px-5 py-3 font-medium">Status</th>
            <th scope="col" className="px-5 py-3 font-medium">Priority</th>
            <th scope="col" className="px-5 py-3 font-medium">Progress</th>
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
              <td className="px-5 py-3.5">
                <Link to={`/employee/projects/${task.projectId}`} className="text-ink-soft hover:text-primary-600 hover:underline">
                  {task.projectName}
                </Link>
              </td>
              <td className="px-5 py-3.5">
                <Badge variant={taskStatus[task.status].variant}>{taskStatus[task.status].label}</Badge>
              </td>
              <td className="px-5 py-3.5">
                <Badge variant={taskPriority[task.priority].variant}>{taskPriority[task.priority].label}</Badge>
              </td>
              <td className="w-44 px-5 py-3.5">
                <ProgressBar value={task.progress} label={`${task.title} progress`} />
              </td>
              <td className="whitespace-nowrap px-5 py-3.5 text-ink-soft">{formatDate(task.dueDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
