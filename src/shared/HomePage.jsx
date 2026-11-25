// src/shared/HomePage.jsx (Member 1). Simple landing page; polish later.

import { Link } from 'react-router-dom'
import { useAuth } from './AuthContext'
import FirebaseStatus from './FirebaseStatus'

export default function HomePage() {
  const { user, profile } = useAuth()

  return (
    <section>
      <h1>Find the pet that fits your life</h1>
      <p>
        Browse animals from our shelter, or take a 2-minute personality quiz to see which kind of
        animal suits you best.
      </p>
      <p style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Link to="/pets" className="btn">
          Browse pets
        </Link>
        <Link to="/quiz" className="btn btn-secondary">
          Take the pet quiz
        </Link>
      </p>

      {user && <p>Welcome back, {profile?.fullName ?? user.email}!</p>}

      {import.meta.env.DEV && <FirebaseStatus />}
    </section>
  )
}
