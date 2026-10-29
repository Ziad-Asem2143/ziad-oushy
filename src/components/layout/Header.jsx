import { Link } from 'react-router-dom'
import { Bell, Menu } from 'lucide-react'
import { Avatar } from '../common'

// Top bar. `basePath` is "/employee" or "/manager" so links stay inside the right area.
export default function Header({ user, basePath, onMenuClick }) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-3 border-b border-line bg-white/90 px-4 backdrop-blur sm:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open menu"
        className="rounded-lg p-2 text-ink-soft hover:bg-gray-100 lg:hidden"
      >
        <Menu className="size-5" />
      </button>

      <div className="ml-auto flex items-center gap-1 sm:gap-3">
        <Link
          to={`${basePath}/notifications`}
          aria-label="Notifications"
          className="relative rounded-lg p-2 text-ink-soft hover:bg-gray-100 hover:text-ink"
        >
          <Bell className="size-5" />
          <span className="absolute right-2 top-2 size-2 rounded-full bg-red-500 ring-2 ring-white" />
        </Link>

        <Link
          to={`${basePath}/profile`}
          className="flex items-center gap-2.5 rounded-lg p-1.5 hover:bg-gray-100"
        >
          <Avatar name={user.name} size="sm" />
          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium leading-tight text-ink">{user.name}</p>
            <p className="text-xs capitalize leading-tight text-ink-soft">{user.role}</p>
          </div>
        </Link>
      </div>
    </header>
  )
}
