import { daysFromNow } from '../utils/date'
import { myProjects, myTasks } from './employeeDashboard'

// Extra detail for each task in myTasks (same ids): description, assigned date, progress, activity.
const details = {
  101: {
    description: 'Create a responsive navigation bar for the customer portal with a collapsible mobile menu, active link states and keyboard support.',
    assignedDate: daysFromNow(-9),
    progress: 60,
    activity: [
      { id: 1, text: 'You updated progress to 60%', time: 'Today' },
      { id: 2, text: 'Layla Nasser shared the final navigation design', time: '3 days ago' },
      { id: 3, text: 'Sara Mahmoud assigned this task to you', time: '9 days ago' },
    ],
  },
  102: {
    description: 'Fix the validation bugs on the mobile login form: empty email, invalid email format and wrong password messages are not shown correctly.',
    assignedDate: daysFromNow(-6),
    progress: 90,
    activity: [
      { id: 1, text: 'Omar Khaled commented: "Looks good, one small spacing issue."', time: 'Yesterday' },
      { id: 2, text: 'You moved this task to In Review', time: 'Yesterday' },
      { id: 3, text: 'Sara Mahmoud assigned this task to you', time: '6 days ago' },
    ],
  },
  103: {
    description: 'Build reusable chart components (line, bar and donut) for the internal analytics dashboard using the shared design tokens.',
    assignedDate: daysFromNow(-2),
    progress: 0,
    activity: [{ id: 1, text: 'Sara Mahmoud assigned this task to you', time: '2 days ago' }],
  },
  104: {
    description: 'Write unit tests for the API service layer, covering success responses, error handling and request retries.',
    assignedDate: daysFromNow(-5),
    progress: 40,
    activity: [
      { id: 1, text: 'You updated progress to 40%', time: '2 days ago' },
      { id: 2, text: 'Sara Mahmoud assigned this task to you', time: '5 days ago' },
    ],
  },
  105: {
    description: 'Optimize image loading on the public website with lazy loading, modern formats and correct image sizes to improve page speed.',
    assignedDate: daysFromNow(-1),
    progress: 0,
    activity: [{ id: 1, text: 'Sara Mahmoud assigned this task to you', time: 'Yesterday' }],
  },
  106: {
    description: 'Update the design tokens (colors, spacing and typography) so the portal matches the new brand guidelines.',
    assignedDate: daysFromNow(-14),
    progress: 100,
    activity: [
      { id: 1, text: 'You completed this task', time: '2 hours ago' },
      { id: 2, text: 'Sara Mahmoud assigned this task to you', time: '2 weeks ago' },
    ],
  },
  107: {
    description: 'Set up the project repository with the base folder structure, linting rules and CI workflow.',
    assignedDate: daysFromNow(-16),
    progress: 100,
    activity: [
      { id: 1, text: 'You completed this task', time: '1 week ago' },
      { id: 2, text: 'Sara Mahmoud assigned this task to you', time: '2 weeks ago' },
    ],
  },
  108: {
    description: 'Run Lighthouse audits on the main pages and document performance, accessibility and SEO scores.',
    assignedDate: daysFromNow(-12),
    progress: 100,
    activity: [
      { id: 1, text: 'You completed this task', time: '5 days ago' },
      { id: 2, text: 'Sara Mahmoud assigned this task to you', time: '12 days ago' },
    ],
  },
  109: {
    description: 'Prepare the slides for the sprint demo: completed work, screenshots and next sprint goals.',
    assignedDate: daysFromNow(-3),
    progress: 70,
    activity: [
      { id: 1, text: 'You updated progress to 70%', time: '5 hours ago' },
      { id: 2, text: 'Sara Mahmoud assigned this task to you', time: '5 hours ago' },
    ],
  },
}

// All employee tasks with project name and detail fields attached.
export const employeeTasks = myTasks.map((t) => ({
  ...t,
  projectName: myProjects.find((p) => p.id === t.projectId)?.name ?? 'Unknown project',
  ...details[t.id],
}))

export function getTaskById(id) {
  return employeeTasks.find((t) => t.id === Number(id))
}
