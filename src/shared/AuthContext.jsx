// src/shared/AuthContext.jsx
// ⚠️ MOCK VERSION. Member 1 will replace the inside with real Firebase Auth
// (by Day 4). The exposed API stays EXACTLY the same, so keep using useAuth().
//
//   const { user, profile, role, loading, login, register, logout } = useAuth()
//
//   user     { uid, email } | null       (null = guest)
//   profile  users/{uid} document | null
//   role     "adopter" | "admin" | null  (null = guest)
//   loading  boolean
//
// Dev only: switch the mock role with the buttons in the footer.

import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)

const ROLE_STORAGE_KEY = 'mockRole'
const MOCK_ROLES = ['guest', 'adopter', 'admin']

// Fixed test identities. Members 2 and 3 can rely on these ids while the mock is active.
const MOCK_USERS = {
  adopter: { uid: 'test-adopter-1', email: 'adopter@test.com' },
  admin: { uid: 'test-admin-1', email: 'admin@test.com' },
}

const MOCK_PROFILES = {
  adopter: {
    fullName: 'Test Adopter',
    address: 'Str. Exemplu 1, Timisoara',
    phone: '+40 700 000 001',
    email: 'adopter@test.com',
    role: 'adopter',
    createdAt: null,
  },
  admin: {
    fullName: 'Test Admin',
    address: 'Adoptly Shelter, Timisoara',
    phone: '+40 700 000 002',
    email: 'admin@test.com',
    role: 'admin',
    createdAt: null,
  },
}

function readStoredRole() {
  try {
    const stored = localStorage.getItem(ROLE_STORAGE_KEY)
    return MOCK_ROLES.includes(stored) ? stored : 'adopter'
  } catch {
    return 'adopter'
  }
}

export function AuthProvider({ children }) {
  const [mockRole, setMockRoleState] = useState(readStoredRole)

  const setMockRole = useCallback((nextRole) => {
    try {
      localStorage.setItem(ROLE_STORAGE_KEY, nextRole)
    } catch {
      // localStorage can be unavailable (private mode); the role then lasts until refresh.
    }
    setMockRoleState(nextRole)
  }, [])

  // Mock implementations: same names and arguments as the real ones will have.
  // login(email, password): any input "works" and logs you in as an adopter.
  const login = useCallback(async () => {
    setMockRole('adopter')
  }, [setMockRole])

  // register({ email, password, fullName, address, phone }): always an adopter.
  const register = useCallback(async () => {
    setMockRole('adopter')
  }, [setMockRole])

  const logout = useCallback(async () => {
    setMockRole('guest')
  }, [setMockRole])

  const value = useMemo(() => {
    const isGuest = mockRole === 'guest'
    return {
      user: isGuest ? null : MOCK_USERS[mockRole],
      profile: isGuest ? null : MOCK_PROFILES[mockRole],
      role: isGuest ? null : mockRole,
      loading: false,
      login,
      register,
      logout,
      // Mock-only extras used by the dev toggle. Don't use these in feature code.
      isMock: true,
      mockRole,
      setMockRole,
    }
  }, [mockRole, login, register, logout, setMockRole])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth() must be used inside <AuthProvider>.')
  }
  return context
}
