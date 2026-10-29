import {
  Bell,
  CalendarDays,
  FolderKanban,
  LayoutDashboard,
  Megaphone,
  Settings,
  SquareCheckBig,
  UserCircle,
} from 'lucide-react'

// Each section has a label and a list of links. Logout is added by the Sidebar itself.
export const employeeNav = [
  {
    label: 'Workspace',
    items: [
      { to: '/employee/dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { to: '/employee/projects', label: 'My Projects', icon: FolderKanban },
      { to: '/employee/tasks', label: 'My Tasks', icon: SquareCheckBig },
      { to: '/employee/leave-requests', label: 'Leave Requests', icon: CalendarDays },
      { to: '/employee/announcements', label: 'Announcements', icon: Megaphone },
    ],
  },
  {
    label: 'Account',
    items: [
      { to: '/employee/notifications', label: 'Notifications', icon: Bell },
      { to: '/employee/profile', label: 'Profile', icon: UserCircle },
      { to: '/employee/settings', label: 'Settings', icon: Settings },
    ],
  },
]
