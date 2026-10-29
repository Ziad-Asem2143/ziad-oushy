import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
import { dashboardPathByRole } from '../data/users'

// Wraps a group of routes. `role` is "employee" or "manager".
// - Not logged in        -> /login
// - Logged in, wrong role -> that user's own dashboard
export default function ProtectedRoute({ role }) {
  const { user } = useAuth()

  if (!user) return <Navigate to="/login" replace />
  if (user.role !== role) return <Navigate to={dashboardPathByRole[user.role]} replace />

  return <Outlet />
}
