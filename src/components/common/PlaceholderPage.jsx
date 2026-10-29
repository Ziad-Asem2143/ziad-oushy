import { Link } from 'react-router-dom'
import { useAuth } from '../../utils/AuthContext'
import Button from './Button'

// Temporary page body used until each page is built in a later step.
export default function PlaceholderPage({ title, path, params }) {
  const { user, logout } = useAuth()

  return (
    <div className="flex min-h-[60vh] items-center justify-center p-4">
      <div className="card w-full max-w-md space-y-2 p-6 text-center">
        <h1>{title}</h1>
        <p className="text-ink-soft">
          Route: <code className="rounded bg-gray-100 px-1.5 py-0.5">{path}</code>
        </p>
        {params?.id && <p className="text-ink-soft">ID: {params.id}</p>}
        <p className="text-xs text-ink-soft">Placeholder page — will be built in a later step.</p>
        {/* Temporary Logout for Manager pages only (they get a real sidebar in Step 14) */}
        {user?.role === 'manager' && (
          <div className="space-y-2 pt-2">
            <p className="text-xs text-ink-soft">
              Signed in as <span className="font-medium text-ink">{user.name}</span> ({user.role})
            </p>
            <Button variant="outline" size="sm" onClick={logout}>
              Logout (temporary)
            </Button>
          </div>
        )}
        {!user && (
          <Link to="/login" className="inline-block pt-2 text-sm font-medium text-primary-600 hover:underline">
            Go to login
          </Link>
        )}
      </div>
    </div>
  )
}
