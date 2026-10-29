import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Mail } from 'lucide-react'
import AuthLayout from '../../layouts/AuthLayout'
import { Button, Input } from '../../components/common'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)
    // Mock: no email is really sent
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 600)
  }

  const backLink = (
    <Link to="/login" className="inline-flex items-center gap-1.5 font-medium text-primary-600 hover:underline">
      <ArrowLeft className="size-4" aria-hidden="true" />
      Back to login
    </Link>
  )

  if (sent) {
    return (
      <AuthLayout title="Check your email" footer={backLink}>
        <div className="space-y-3 text-center">
          <CheckCircle2 className="mx-auto size-12 text-green-500" aria-hidden="true" />
          <p className="text-ink-soft">
            If an account exists for <span className="font-medium text-ink">{email.trim()}</span>, we've sent
            instructions to reset your password.
          </p>
          <p className="text-xs text-ink-soft">(Demo only — no email is actually sent.)</p>
        </div>
      </AuthLayout>
    )
  }

  return (
    <AuthLayout
      title="Forgot your password?"
      subtitle="Enter your email and we'll send you reset instructions."
      footer={backLink}
    >
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="relative">
          <Input
            label="Email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
            className="[&_input]:pl-9"
          />
          <Mail className="pointer-events-none absolute left-3 top-[2.45rem] size-4 text-gray-400" aria-hidden="true" />
        </div>
        <Button type="submit" size="lg" loading={loading} className="w-full">
          Send reset link
        </Button>
      </form>
    </AuthLayout>
  )
}
