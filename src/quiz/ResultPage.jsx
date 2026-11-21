// src/quiz/ResultPage.jsx: PLACEHOLDER (Member 1). Built in main guide Step 13.
// The final page links to /pets?species=<species>&activityLevel=<level>.
// The example link below already uses those query parameters, so Member 2 can test reading them.

import { Link } from 'react-router-dom'
import PlaceholderPage from '../shared/PlaceholderPage'

export default function ResultPage() {
  return (
    <PlaceholderPage title="Your quiz result" owner="Member 1" file="src/quiz/ResultPage.jsx">
      <p>Archetype, radar chart and top 3 matches will appear here.</p>
      <Link to="/pets?species=dog&activityLevel=high" className="btn">
        See dogs available for adoption (example link)
      </Link>
    </PlaceholderPage>
  )
}
