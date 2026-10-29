import { useCallback, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import { employeeNav } from '../data/navigation'
import { useAuth } from '../utils/AuthContext'

export default function EmployeeLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const closeDrawer = useCallback(() => setDrawerOpen(false), [])

  function handleLogout() {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="min-h-screen bg-app">
      <Sidebar sections={employeeNav} open={drawerOpen} onClose={closeDrawer} onLogout={handleLogout} />

      <div className="lg:pl-64">
        <Header user={user} basePath="/employee" onMenuClick={() => setDrawerOpen(true)} />
        <main className="mx-auto max-w-7xl p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
