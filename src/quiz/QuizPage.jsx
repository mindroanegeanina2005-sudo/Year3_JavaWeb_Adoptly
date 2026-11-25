// src/quiz/QuizPage.jsx: PLACEHOLDER (Member 1). Built in main guide Step 12.

import { Link } from 'react-router-dom'
import PlaceholderPage from '../shared/PlaceholderPage'

export default function QuizPage() {
  return (
    <PlaceholderPage title="Pet personality quiz" owner="Member 1" file="src/quiz/QuizPage.jsx">
      <p>12 quick statements, about 2 minutes. Coming soon.</p>
      <Link to="/quiz/result" className="btn">
        See example result page
      </Link>
    </PlaceholderPage>
  )
}
