import { Navigate, Route, Routes } from 'react-router-dom'

import Login from '../pages/auth/Login'
import ForgotPassword from '../pages/auth/ForgotPassword'
import NotFound from '../pages/NotFound'
import ProtectedRoute from './ProtectedRoute'
import PublicOnlyRoute from './PublicOnlyRoute'
import EmployeeLayout from '../layouts/EmployeeLayout'

import EmployeeDashboard from '../pages/employee/Dashboard'
import EmployeeProjects from '../pages/employee/Projects'
import EmployeeProjectDetails from '../pages/employee/ProjectDetails'
import EmployeeTasks from '../pages/employee/Tasks'
import EmployeeTaskDetails from '../pages/employee/TaskDetails'
import EmployeeLeaveRequests from '../pages/employee/LeaveRequests'
import EmployeeAnnouncements from '../pages/employee/Announcements'
import EmployeeNotifications from '../pages/employee/Notifications'
import EmployeeProfile from '../pages/employee/Profile'
import EmployeeSettings from '../pages/employee/Settings'

import ManagerDashboard from '../pages/manager/Dashboard'
import ManagerProjects from '../pages/manager/Projects'
import ManagerCreateProject from '../pages/manager/CreateProject'
import ManagerProjectDetails from '../pages/manager/ProjectDetails'
import ManagerEmployees from '../pages/manager/Employees'
import ManagerTasks from '../pages/manager/Tasks'
import ManagerCreateTask from '../pages/manager/CreateTask'
import ManagerLeaveRequests from '../pages/manager/LeaveRequests'
import ManagerAnnouncements from '../pages/manager/Announcements'
import ManagerNotifications from '../pages/manager/Notifications'
import ManagerProfile from '../pages/manager/Profile'

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route element={<PublicOnlyRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* Employee */}
      <Route element={<ProtectedRoute role="employee" />}>
        <Route element={<EmployeeLayout />}>
          <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
          <Route path="/employee/projects" element={<EmployeeProjects />} />
          <Route path="/employee/projects/:id" element={<EmployeeProjectDetails />} />
          <Route path="/employee/tasks" element={<EmployeeTasks />} />
          <Route path="/employee/tasks/:id" element={<EmployeeTaskDetails />} />
          <Route path="/employee/leave-requests" element={<EmployeeLeaveRequests />} />
          <Route path="/employee/announcements" element={<EmployeeAnnouncements />} />
          <Route path="/employee/notifications" element={<EmployeeNotifications />} />
          <Route path="/employee/profile" element={<EmployeeProfile />} />
          <Route path="/employee/settings" element={<EmployeeSettings />} />
        </Route>
      </Route>

      {/* Manager */}
      <Route element={<ProtectedRoute role="manager" />}>
        <Route path="/manager/dashboard" element={<ManagerDashboard />} />
        <Route path="/manager/projects" element={<ManagerProjects />} />
        <Route path="/manager/projects/create" element={<ManagerCreateProject />} />
        <Route path="/manager/projects/:id" element={<ManagerProjectDetails />} />
        <Route path="/manager/employees" element={<ManagerEmployees />} />
        <Route path="/manager/tasks" element={<ManagerTasks />} />
        <Route path="/manager/tasks/create" element={<ManagerCreateTask />} />
        <Route path="/manager/leave-requests" element={<ManagerLeaveRequests />} />
        <Route path="/manager/announcements" element={<ManagerAnnouncements />} />
        <Route path="/manager/notifications" element={<ManagerNotifications />} />
        <Route path="/manager/profile" element={<ManagerProfile />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
