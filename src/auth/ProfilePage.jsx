// src/auth/ProfilePage.jsx
// DEMO (Member 1). Shows the profile from useAuth(). Edit mode + quiz card in main guide Step 8.

import { Link } from 'react-router-dom'
import { useAuth } from '../shared/AuthContext'
import PlaceholderPage from '../shared/PlaceholderPage'

export default function ProfilePage() {
  const { user, profile } = useAuth()

  if (!user) {
    return (
      <section>
        <h1>Profile</h1>
        <p>
          Please <Link to="/login">log in</Link> to see your profile.
        </p>
      </section>
    )
  }

  return (
    <PlaceholderPage title="Your profile" owner="Member 1" file="src/auth/ProfilePage.jsx">
      <ul>
        <li>Name: {profile?.fullName}</li>
        <li>Email: {profile?.email}</li>
        <li>Address: {profile?.address}</li>
        <li>Phone: {profile?.phone}</li>
        <li>Role: {profile?.role}</li>
      </ul>
    </PlaceholderPage>
  )
}
