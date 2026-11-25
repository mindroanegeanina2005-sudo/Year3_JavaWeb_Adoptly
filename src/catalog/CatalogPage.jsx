// src/catalog/CatalogPage.jsx: PLACEHOLDER.
// Route: /pets. Quiz results link here with ?species=...&activityLevel=...

import { useSearchParams } from 'react-router-dom'
import PlaceholderPage from '../shared/PlaceholderPage'

export default function CatalogPage() {
  const [searchParams] = useSearchParams()
  const species = searchParams.get('species')
  const activityLevel = searchParams.get('activityLevel')

  return (
    <PlaceholderPage title="Pets for adoption" owner="Member 2" file="src/catalog/CatalogPage.jsx">
      <p>Catalog with filters (species, breed, age, location) goes here.</p>
      {(species || activityLevel) && (
        <p>
          Filters from URL: species = <code>{species ?? '-'}</code>, activityLevel ={' '}
          <code>{activityLevel ?? '-'}</code>
        </p>
      )}
    </PlaceholderPage>
  )
}
