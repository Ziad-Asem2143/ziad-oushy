import { CheckCircle2, Clock, FolderKanban, ListChecks } from 'lucide-react'
import PageHeader from '../../components/layout/PageHeader'
import { MyTasksTable, RecentActivity, SectionCard, StatCard, UpcomingDeadlines } from '../../components/dashboard'
import { useAuth } from '../../utils/AuthContext'
import { myProjects, myTasks, recentActivity } from '../../data/employeeDashboard'

export default function Dashboard() {
  const { user } = useAuth()
  const firstName = user.name.split(' ')[0]

  // Attach the project name to each task
  const tasks = myTasks.map((t) => ({
    ...t,
    projectName: myProjects.find((p) => p.id === t.projectId)?.name ?? 'Unknown project',
  }))

  const completed = tasks.filter((t) => t.status === 'completed').length
  const pending = tasks.length - completed

  // Next 5 unfinished tasks by due date
  const upcoming = tasks
    .filter((t) => t.status !== 'completed')
    .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
    .slice(0, 5)

  // Show unfinished tasks first on the dashboard table
  const tableTasks = [...tasks]
    .sort((a, b) => (a.status === 'completed') - (b.status === 'completed') || a.dueDate.localeCompare(b.dueDate))
    .slice(0, 6)

  return (
    <div className="space-y-6">
      <PageHeader
        title={`Welcome back, ${firstName} 👋`}
        description="Here's what's happening with your work today."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="My Projects" value={myProjects.length} icon={FolderKanban} tone="blue" />
        <StatCard label="Total Tasks" value={tasks.length} icon={ListChecks} tone="indigo" />
        <StatCard label="Completed Tasks" value={completed} icon={CheckCircle2} tone="green" />
        <StatCard label="Pending Tasks" value={pending} icon={Clock} tone="amber" />
      </div>

      <SectionCard title="My Tasks" linkTo="/employee/tasks">
        <MyTasksTable tasks={tableTasks} />
      </SectionCard>

      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Upcoming Deadlines" linkTo="/employee/tasks">
          <UpcomingDeadlines tasks={upcoming} />
        </SectionCard>
        <SectionCard title="Recent Activity">
          <RecentActivity items={recentActivity} />
        </SectionCard>
      </div>
    </div>
  )
}
