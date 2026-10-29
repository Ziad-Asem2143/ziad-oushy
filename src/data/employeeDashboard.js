import { daysFromNow } from '../utils/date'

// Mock data for the Employee dashboard (logged-in employee: Ahmed).
export const myProjects = [
  { id: 1, name: 'Customer Portal Redesign' },
  { id: 2, name: 'Mobile App Launch' },
  { id: 3, name: 'Internal Analytics Dashboard' },
  { id: 4, name: 'Website Performance Audit' },
  { id: 5, name: 'Onboarding Documentation' },
]

export const myTasks = [
  { id: 101, title: 'Build responsive navigation bar', projectId: 1, status: 'in-progress', priority: 'high', dueDate: daysFromNow(2) },
  { id: 102, title: 'Fix login form validation bugs', projectId: 2, status: 'review', priority: 'high', dueDate: daysFromNow(1) },
  { id: 103, title: 'Create dashboard chart components', projectId: 3, status: 'todo', priority: 'medium', dueDate: daysFromNow(6) },
  { id: 104, title: 'Write unit tests for API service', projectId: 2, status: 'in-progress', priority: 'medium', dueDate: daysFromNow(4) },
  { id: 105, title: 'Optimize image loading', projectId: 4, status: 'todo', priority: 'low', dueDate: daysFromNow(10) },
  { id: 106, title: 'Update design tokens', projectId: 1, status: 'completed', priority: 'medium', dueDate: daysFromNow(-3) },
  { id: 107, title: 'Set up project repository', projectId: 3, status: 'completed', priority: 'low', dueDate: daysFromNow(-8) },
  { id: 108, title: 'Audit Lighthouse scores', projectId: 4, status: 'completed', priority: 'medium', dueDate: daysFromNow(-5) },
  { id: 109, title: 'Prepare sprint demo slides', projectId: 1, status: 'in-progress', priority: 'low', dueDate: daysFromNow(0) },
]

export const recentActivity = [
  { id: 1, type: 'completed', text: 'You completed "Update design tokens"', time: '2 hours ago' },
  { id: 2, type: 'assigned', text: 'Sara Mahmoud assigned you "Prepare sprint demo slides"', time: '5 hours ago' },
  { id: 3, type: 'comment', text: 'Omar Khaled commented on "Fix login form validation bugs"', time: 'Yesterday' },
  { id: 4, type: 'status', text: 'You moved "Fix login form validation bugs" to In Review', time: 'Yesterday' },
  { id: 5, type: 'leave', text: 'Your leave request was approved', time: '2 days ago' },
]
