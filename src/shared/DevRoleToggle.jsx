// src/shared/DevRoleToggle.jsx
// Dev-only switch for the mock role. Not shown in production builds, and it
// disappears automatically when real auth replaces the mock (isMock becomes undefined).

import { useAuth } from './AuthContext'

const ROLES = ['guest', 'adopter', 'admin']

export default function DevRoleToggle() {
  const { isMock, mockRole, setMockRole } = useAuth()

  if (!import.meta.env.DEV || !isMock) return null

  return (
    <div className="dev-toggle" role="group" aria-label="Mock role (development only)">
      <span className="dev-toggle-label">Dev · mock role:</span>
      {ROLES.map((roleName) => (
        <button
          key={roleName}
          type="button"
          className={roleName === mockRole ? 'active' : ''}
          aria-pressed={roleName === mockRole}
          onClick={() => setMockRole(roleName)}
        >
          {roleName}
        </button>
      ))}
    </div>
  )
}
