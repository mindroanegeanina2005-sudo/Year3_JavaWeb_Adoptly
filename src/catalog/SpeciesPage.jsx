// src/catalog/SpeciesPage.jsx: PLACEHOLDER.
// Route: /species. Static page with one section per species.

import PlaceholderPage from '../shared/PlaceholderPage'

const SPECIES = ['dog', 'cat', 'rabbit', 'tortoise', 'bird', 'ferret']

export default function SpeciesPage() {
  return (
    <PlaceholderPage title="Species info" owner="Member 2" file="src/catalog/SpeciesPage.jsx">
      <ul>
        {SPECIES.map((species) => (
          <li key={species}>{species}</li>
        ))}
      </ul>
    </PlaceholderPage>
  )
}
