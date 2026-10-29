import { cn } from '../../utils/cn'

const sizes = {
  sm: 'size-8 text-xs',
  md: 'size-10 text-sm',
  lg: 'size-14 text-lg',
  xl: 'size-24 text-3xl',
}

function getInitials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')
}

export default function Avatar({ name, src, size = 'md', className }) {
  const base = cn('shrink-0 rounded-full', sizes[size], className)

  if (src) {
    return <img src={src} alt={name ?? 'Avatar'} className={cn(base, 'object-cover')} />
  }

  return (
    <span
      aria-label={name}
      className={cn(base, 'inline-flex items-center justify-center bg-primary-100 font-semibold text-primary-700')}
    >
      {getInitials(name) || '?'}
    </span>
  )
}
