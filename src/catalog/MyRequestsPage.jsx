// src/catalog/MyRequestsPage.jsx: PLACEHOLDER.
// Route: /my-requests. Live list of the logged-in adopter's requests
// (query requests where adopterId == user.uid).

import { useAuth } from '../shared/AuthContext'
import PlaceholderPage from '../shared/PlaceholderPage'

export default function MyRequestsPage() {
  const { user } = useAuth()

  return (
    <PlaceholderPage title="My meeting requests" owner="Member 2" file="src/catalog/MyRequestsPage.jsx">
      {user ? (
        <p>
          Requests for adopterId = <code>{user.uid}</code> will be listed here with live status.
        </p>
      ) : (
        <p>Log in to see your requests.</p>
      )}
    </PlaceholderPage>
  )
}
