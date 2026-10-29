// Maps task status / priority to a Badge variant and label.
export const taskStatus = {
  todo: { label: 'To Do', variant: 'neutral' },
  'in-progress': { label: 'In Progress', variant: 'primary' },
  review: { label: 'In Review', variant: 'warning' },
  completed: { label: 'Completed', variant: 'success' },
}

export const taskPriority = {
  low: { label: 'Low', variant: 'neutral' },
  medium: { label: 'Medium', variant: 'warning' },
  high: { label: 'High', variant: 'danger' },
}

export const projectStatus = {
  planning: { label: 'Planning', variant: 'neutral' },
  active: { label: 'Active', variant: 'primary' },
  'on-hold': { label: 'On Hold', variant: 'warning' },
  completed: { label: 'Completed', variant: 'success' },
}

export const leaveStatus = {
  pending: { label: 'Pending', variant: 'warning' },
  approved: { label: 'Approved', variant: 'success' },
  rejected: { label: 'Rejected', variant: 'danger' },
}
