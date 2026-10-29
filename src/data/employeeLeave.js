import { daysFromNow } from '../utils/date'

export const leaveTypes = ['Annual Leave', 'Sick Leave', 'Emergency Leave', 'Unpaid Leave']

// Mock leave requests for the logged-in employee.
export const leaveRequests = [
  { id: 1, type: 'Annual Leave', startDate: daysFromNow(20), endDate: daysFromNow(24), requestDate: daysFromNow(-2), status: 'pending', reason: 'Family trip.' },
  { id: 2, type: 'Sick Leave', startDate: daysFromNow(-10), endDate: daysFromNow(-9), requestDate: daysFromNow(-10), status: 'approved', reason: 'Flu, doctor visit.' },
  { id: 3, type: 'Annual Leave', startDate: daysFromNow(-40), endDate: daysFromNow(-36), requestDate: daysFromNow(-55), status: 'approved', reason: 'Personal holiday.' },
  { id: 4, type: 'Emergency Leave', startDate: daysFromNow(-70), endDate: daysFromNow(-70), requestDate: daysFromNow(-71), status: 'rejected', reason: 'Urgent personal matter.' },
]
