// Joins class names, ignoring falsy values: cn('a', cond && 'b') -> 'a b'
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
