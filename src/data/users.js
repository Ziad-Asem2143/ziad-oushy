// Mock users for demo login only. No backend — never store real passwords like this.
export const users = [
  {
    id: 1,
    name: 'Ahmed Hassan',
    email: 'employee@workflow.com',
    password: 'employee123',
    role: 'employee',
    jobTitle: 'Frontend Developer',
    department: 'Engineering',
  },
  {
    id: 2,
    name: 'Sara Mahmoud',
    email: 'manager@workflow.com',
    password: 'manager123',
    role: 'manager',
    jobTitle: 'Engineering Manager',
    department: 'Engineering',
  },
]

export const dashboardPathByRole = {
  employee: '/employee/dashboard',
  manager: '/manager/dashboard',
}
