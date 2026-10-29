import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 p-4 text-center">
      <h1>404 — Page not found</h1>
      <p className="text-ink-soft">The page you are looking for does not exist.</p>
      <Link to="/login" className="text-sm font-medium text-primary-600 hover:underline">
        Go to login
      </Link>
    </div>
  )
}
