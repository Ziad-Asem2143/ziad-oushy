import { createContext, useContext, useState } from 'react'
import { users } from '../data/users'

const STORAGE_KEY = 'workflow_user'
const AuthContext = createContext(null)

// "Remember me" saves the session in localStorage (survives closing the browser);
// otherwise it uses sessionStorage (cleared when the tab closes).
function loadUser() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) ?? sessionStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : null
  } catch {
    return null
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadUser)

  // Returns { ok: true, user } or { ok: false, error }
  function login(email, password, remember = false) {
    const found = users.find(
      (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password,
    )
    if (!found) return { ok: false, error: 'Invalid email or password.' }

    // Never keep the password in the session
    const { password: _password, ...safeUser } = found
    const storage = remember ? localStorage : sessionStorage
    storage.setItem(STORAGE_KEY, JSON.stringify(safeUser))
    setUser(safeUser)
    return { ok: true, user: safeUser }
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY)
    sessionStorage.removeItem(STORAGE_KEY)
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>')
  return ctx
}
