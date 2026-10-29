import { Workflow } from 'lucide-react'

// Shared centered card used by Login and Forgot Password.
export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-50 via-app to-app p-4">
      <div className="w-full max-w-md">
        <div className="mb-6 flex items-center justify-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary-600 text-white shadow-sm">
            <Workflow className="size-5" aria-hidden="true" />
          </span>
          <span className="text-2xl font-semibold tracking-tight text-ink">WorkFlow</span>
        </div>

        <div className="card p-6 sm:p-8">
          <div className="mb-6 text-center">
            <h1 className="text-xl">{title}</h1>
            {subtitle && <p className="mt-1.5 text-ink-soft">{subtitle}</p>}
          </div>
          {children}
        </div>

        {footer && <div className="mt-4 text-center text-sm text-ink-soft">{footer}</div>}
      </div>
    </div>
  )
}
