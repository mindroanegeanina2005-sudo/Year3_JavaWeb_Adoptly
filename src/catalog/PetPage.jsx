// src/catalog/PetPage.jsx: PLACEHOLDER.
// Route: /pets/:petId  (petId = Firestore document id in "pets")

import { useParams } from 'react-router-dom'
import PlaceholderPage from '../shared/PlaceholderPage'

export default function PetPage() {
  const { petId } = useParams()

  return (
    <PlaceholderPage title="Pet profile" owner="Member 2" file="src/catalog/PetPage.jsx">
      <p>
        Pet id from URL: <code>{petId}</code>
      </p>
      <p>Description, temperament, activity level, gallery and "Request a meeting" go here.</p>
    </PlaceholderPage>
  )
}
