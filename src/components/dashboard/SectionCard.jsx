import { Link } from 'react-router-dom'

// White card with a title and an optional "View all" link. Wraps dashboard sections.
export default function SectionCard({ title, linkTo, linkLabel = 'View all', children, className = '' }) {
  return (
    <section className={`card ${className}`}>
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <h2 className="text-base">{title}</h2>
        {linkTo && (
          <Link to={linkTo} className="text-sm font-medium text-primary-600 hover:underline">
            {linkLabel}
          </Link>
        )}
      </div>
      {children}
    </section>
  )
}
