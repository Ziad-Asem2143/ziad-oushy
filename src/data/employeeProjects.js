import { daysFromNow } from '../utils/date'

// Mock data for Employee projects. Ids match `myProjects` / `myTasks` in employeeDashboard.js.
// `totalTasks` = all tasks in the project (whole team); the employee's own tasks come from myTasks.
export const projects = [
  {
    id: 1,
    name: 'Customer Portal Redesign',
    description:
      'Redesign the customer-facing portal with a modern look, faster navigation and full mobile support. Includes a new design system and component library.',
    status: 'active',
    progress: 68,
    startDate: daysFromNow(-45),
    deadline: daysFromNow(21),
    totalTasks: 24,
    manager: 'Sara Mahmoud',
    team: ['Sara Mahmoud', 'Ahmed Hassan', 'Layla Nasser', 'Omar Khaled', 'Nour Ali'],
    activity: [
      { id: 1, text: 'Ahmed Hassan completed "Update design tokens"', time: '2 hours ago' },
      { id: 2, text: 'Layla Nasser uploaded new dashboard mockups', time: 'Yesterday' },
      { id: 3, text: 'Sara Mahmoud moved the deadline to next month', time: '3 days ago' },
      { id: 4, text: 'Omar Khaled joined the project', time: '1 week ago' },
    ],
  },
  {
    id: 2,
    name: 'Mobile App Launch',
    description:
      'Prepare and ship the first public version of the WorkFlow mobile app to the App Store and Google Play, including QA, onboarding and release notes.',
    status: 'active',
    progress: 82,
    startDate: daysFromNow(-70),
    deadline: daysFromNow(9),
    totalTasks: 31,
    manager: 'Sara Mahmoud',
    team: ['Sara Mahmoud', 'Ahmed Hassan', 'Omar Khaled', 'Huda Salem'],
    activity: [
      { id: 1, text: 'Omar Khaled commented on "Fix login form validation bugs"', time: 'Yesterday' },
      { id: 2, text: 'Ahmed Hassan moved "Fix login form validation bugs" to In Review', time: 'Yesterday' },
      { id: 3, text: 'Huda Salem finished the onboarding screens', time: '2 days ago' },
    ],
  },
  {
    id: 3,
    name: 'Internal Analytics Dashboard',
    description:
      'Build an internal dashboard that gives leadership live visibility into team workload, delivery speed and project health.',
    status: 'planning',
    progress: 22,
    startDate: daysFromNow(-10),
    deadline: daysFromNow(60),
    totalTasks: 18,
    manager: 'Sara Mahmoud',
    team: ['Sara Mahmoud', 'Ahmed Hassan', 'Nour Ali'],
    activity: [
      { id: 1, text: 'Ahmed Hassan completed "Set up project repository"', time: '1 week ago' },
      { id: 2, text: 'Sara Mahmoud shared the requirements document', time: '1 week ago' },
    ],
  },
  {
    id: 4,
    name: 'Website Performance Audit',
    description:
      'Audit the public website for speed, accessibility and SEO issues, then fix the highest-impact problems.',
    status: 'on-hold',
    progress: 45,
    startDate: daysFromNow(-30),
    deadline: daysFromNow(35),
    totalTasks: 12,
    manager: 'Sara Mahmoud',
    team: ['Sara Mahmoud', 'Ahmed Hassan', 'Layla Nasser'],
    activity: [
      { id: 1, text: 'Ahmed Hassan completed "Audit Lighthouse scores"', time: '5 days ago' },
      { id: 2, text: 'Sara Mahmoud put the project on hold until next sprint', time: '4 days ago' },
    ],
  },
  {
    id: 5,
    name: 'Onboarding Documentation',
    description: 'Write and publish onboarding guides for new engineers, covering tooling, workflows and team practices.',
    status: 'completed',
    progress: 100,
    startDate: daysFromNow(-90),
    deadline: daysFromNow(-12),
    totalTasks: 9,
    manager: 'Sara Mahmoud',
    team: ['Sara Mahmoud', 'Ahmed Hassan'],
    activity: [{ id: 1, text: 'Sara Mahmoud marked the project as completed', time: '2 weeks ago' }],
  },
]

export function getProjectById(id) {
  return projects.find((p) => p.id === Number(id))
}
