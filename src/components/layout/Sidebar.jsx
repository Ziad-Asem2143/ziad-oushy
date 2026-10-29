import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { LogOut, Workflow, X } from 'lucide-react'
import { cn } from '../../utils/cn'

function SidebarContent({ sections, onNavigate, onLogout, onClose }) {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-5">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary-600 text-white">
            <Workflow className="size-4" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-ink">WorkFlow</span>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-lg p-1.5 text-ink-soft hover:bg-gray-100 lg:hidden"
          >
            <X className="size-5" />
          </button>
        )}
      </div>

      <nav aria-label="Main navigation" className="flex-1 space-y-6 overflow-y-auto px-3 py-5">
        {sections.map((section) => (
          <div key={section.label}>
            <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-ink-soft">
              {section.label}
            </p>
            <ul className="space-y-1">
              {section.items.map(({ to, label, icon: Icon }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-ink-soft hover:bg-gray-100 hover:text-ink',
                      )
                    }
                  >
                    <Icon className="size-5 shrink-0" aria-hidden="true" />
                    {label}
                  </NavLink>
                </li>
              ))}
              {section.label === 'Account' && (
                <li>
                  <button
                    type="button"
                    onClick={onLogout}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-red-50 hover:text-red-600"
                  >
                    <LogOut className="size-5 shrink-0" aria-hidden="true" />
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  )
}

// Desktop: fixed sidebar. Mobile/tablet: slide-in drawer controlled by `open`.
export default function Sidebar({ sections, open, onClose, onLogout }) {
  // Close the drawer with Escape and stop the page behind it from scrolling
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <>
      {/* Desktop */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-line lg:block">
        <SidebarContent sections={sections} onLogout={onLogout} />
      </aside>

      {/* Mobile drawer */}
      <div className={cn('fixed inset-0 z-40 lg:hidden', !open && 'pointer-events-none')} aria-hidden={!open}>
        <div
          onClick={onClose}
          className={cn(
            'absolute inset-0 bg-gray-900/40 transition-opacity duration-200',
            open ? 'opacity-100' : 'opacity-0',
          )}
        />
        <aside
          className={cn(
            'absolute inset-y-0 left-0 w-72 max-w-[85%] shadow-pop transition-transform duration-200',
            open ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <SidebarContent sections={sections} onNavigate={onClose} onLogout={onLogout} onClose={onClose} />
        </aside>
      </div>
    </>
  )
}
