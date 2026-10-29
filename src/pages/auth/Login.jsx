import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import AuthLayout from '../../layouts/AuthLayout'
import { Button, Input } from '../../components/common'
import { useAuth } from '../../utils/AuthContext'
import { dashboardPathByRole, users } from '../../data/users'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!email.trim() || !password) {
      setError('Please enter your email and password.')
      return
    }

    setLoading(true)
    // Small delay to feel like a real request
    setTimeout(() => {
      const result = login(email, password, remember)
      if (result.ok) {
        navigate(dashboardPathByRole[result.user.role], { replace: true })
      } else {
        setError(result.error)
        setLoading(false)
      }
    }, 400)
  }

  function fillDemo(user) {
    setEmail(user.email)
    setPassword(user.password)
    setError('')
  }

  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to your WorkFlow account">
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {error && (
          <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="relative">
          <Input
            label="Email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="[&_input]:pl-9"
          />
          <Mail className="pointer-events-none absolute left-3 top-[2.45rem] size-4 text-gray-400" aria-hidden="true" />
        </div>

        <div className="relative">
          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="[&_input]:px-9"
          />
          <Lock className="pointer-events-none absolute left-3 top-[2.45rem] size-4 text-gray-400" aria-hidden="true" />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute right-2 top-[2.1rem] rounded p-1.5 text-gray-400 hover:text-ink"
          >
            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-ink">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="size-4 rounded border-line accent-primary-600"
            />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-sm font-medium text-primary-600 hover:underline">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" size="lg" loading={loading} className="w-full">
          Log in
        </Button>
      </form>

      {/* Demo helper — remove before real deployment */}
      <div className="mt-6 border-t border-line pt-4">
        <p className="mb-2 text-center text-xs font-medium uppercase tracking-wide text-ink-soft">
          Demo accounts
        </p>
        <div className="grid grid-cols-2 gap-2">
          {users.map((u) => (
            <Button key={u.id} variant="outline" size="sm" onClick={() => fillDemo(u)}>
              {u.role === 'employee' ? 'Employee' : 'Manager'}
            </Button>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-ink-soft">Click one to fill the form, then press Log in.</p>
      </div>
    </AuthLayout>
  )
}
