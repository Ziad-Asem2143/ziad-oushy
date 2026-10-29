import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
import { dashboardPathByRole } from '../data/users'

// Login / forgot-password: if already logged in, go straight to the dashboard.
export default function PublicOnlyRoute() {
  const { user } = useAuth()
  if (user) return <Navigate to={dashboardPathByRole[user.role]} replace />
  return <Outlet />
}
