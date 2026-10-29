import { Search, X } from 'lucide-react'
import { cn } from '../../utils/cn'

export default function SearchInput({ value, onChange, placeholder = 'Search...', className }) {
  return (
    <div className={cn('relative w-full', className)}>
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className={cn(
          'h-10 w-full rounded-lg border border-line bg-white pl-9 pr-9 text-sm text-ink placeholder:text-gray-400',
          'transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100',
          '[&::-webkit-search-cancel-button]:hidden',
        )}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-gray-400 hover:text-ink"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  )
}
