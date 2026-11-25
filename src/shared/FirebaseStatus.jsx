// src/shared/FirebaseStatus.jsx
// DEV ONLY: proves the app can talk to Firestore. Rendered on the home page in dev mode.

import { useEffect, useState } from 'react'
import { collection, getDocs, limit, query } from 'firebase/firestore'
import { db } from './firebase'

export default function FirebaseStatus() {
  const [state, setState] = useState({ status: 'checking', detail: '' })

  useEffect(() => {
    let cancelled = false

    getDocs(query(collection(db, 'pets'), limit(50)))
      .then((snapshot) => {
        if (!cancelled) {
          setState({ status: 'ok', detail: `${snapshot.size} document(s) in "pets" (max 50 counted)` })
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setState({ status: 'error', detail: error.code || error.message })
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  const labels = {
    checking: 'Firestore: checking…',
    ok: 'Firestore: connected ✔',
    error: 'Firestore: ERROR ✖',
  }

  return (
    <div className={`status-box status-${state.status}`} role="status">
      <strong>{labels[state.status]}</strong>
      {state.detail && <span> · {state.detail}</span>}
    </div>
  )
}
