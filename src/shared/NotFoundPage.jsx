// src/shared/NotFoundPage.jsx (Member 1)

import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section>
      <h1>Page not found</h1>
      <p>We couldn't find that page. Maybe the pet already went home? 🐾</p>
      <Link to="/" className="btn">
        Back to home
      </Link>
    </section>
  )
}
