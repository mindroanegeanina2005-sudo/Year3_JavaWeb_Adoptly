// src/shared/Layout.jsx
// App shell: header + navigation + page content (<Outlet/>) + footer.
// Anyone can add or change nav links here.

import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import DevRoleToggle from './DevRoleToggle'
import './layout.css'

const navClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

export default function Layout() {
  const { user, role, profile, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    await logout()
    navigate('/')
  }

  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="logo">
            Adoptly
          </NavLink>

          <nav className="main-nav" aria-label="Main navigation">
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
            <NavLink to="/pets" className={navClass}>
              Pets
            </NavLink>
            <NavLink to="/species" className={navClass}>
              Species info
            </NavLink>
            <NavLink to="/quiz" className={navClass}>
              Pet Quiz
            </NavLink>

            {!user && (
              <>
                <NavLink to="/login" className={navClass}>
                  Log in
                </NavLink>
                <NavLink to="/register" className={navClass}>
                  Register
                </NavLink>
              </>
            )}

            {user && (
              <>
                <NavLink to="/my-requests" className={navClass}>
                  My requests
                </NavLink>
                <NavLink to="/profile" className={navClass}>
                  Profile
                </NavLink>
              </>
            )}

            {role === 'admin' && (
              <NavLink to="/admin" className={navClass}>
                Admin
              </NavLink>
            )}

            {user && (
              <button type="button" className="nav-button" onClick={handleLogout}>
                Log out{profile?.fullName ? ` (${profile.fullName})` : ''}
              </button>
            )}
          </nav>
        </div>
      </header>

      <main className="container main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Adoptly · animal shelter</span>
          <DevRoleToggle />
        </div>
      </footer>
    </div>
  )
}
