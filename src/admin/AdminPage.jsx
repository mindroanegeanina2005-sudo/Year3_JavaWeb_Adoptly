// src/admin/AdminPage.jsx: PLACEHOLDER.
// Route: /admin/*. The "/*" means Member 3 can define nested routes INSIDE this
// component (e.g. /admin/pets, /admin/pets/new, /admin/requests) with
// <Routes><Route path="pets" element={...} /></Routes>, without touching App.jsx.

import { useAuth } from '../shared/AuthContext'
import PlaceholderPage from '../shared/PlaceholderPage'

export default function AdminPage() {
  const { role, user } = useAuth()

  return (
    <PlaceholderPage title="Shelter admin" owner="Member 3" file="src/admin/AdminPage.jsx">
      <p>
        Current role: <code>{role ?? 'guest'}</code>
        {user && (
          <>
            {' '}
            · uid <code>{user.uid}</code>
          </>
        )}
      </p>
      <p>Listings, image upload, request management and dashboard go here.</p>
      {role !== 'admin' && (
        <p className="form-error">
          Not an admin. Real access blocking (403) comes with the route guards (Member 1, Day 4).
        </p>
      )}
    </PlaceholderPage>
  )
}
