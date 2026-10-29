import { useId } from 'react'
import { cn } from '../../utils/cn'

export default function Input({ label, error, hint, id, className, ...props }) {
  const autoId = useId()
  const inputId = id ?? autoId

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-ink">
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        className={cn(
          'h-10 w-full rounded-lg border bg-white px-3 text-sm text-ink placeholder:text-gray-400',
          'transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100',
          'disabled:cursor-not-allowed disabled:bg-gray-50',
          error ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-line',
        )}
        {...props}
      />
      {error ? (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      ) : (
        hint && <p className="mt-1 text-xs text-ink-soft">{hint}</p>
      )}
    </div>
  )
}
