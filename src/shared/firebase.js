// src/shared/firebase.js
// The ONE place where Firebase is initialised. Everyone imports from here:
//   import { auth, db, storage } from '../shared/firebase'
// Owner: Member 1. Don't initialise Firebase anywhere else.

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Give a clear message instead of a cryptic Firebase error when .env.local is missing.
const missing = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key)

if (missing.length > 0) {
  console.error(
    `[firebase] Missing config values: ${missing.join(', ')}.\n` +
      'Copy .env.example to .env.local, fill in the values Member 1 sent you, ' +
      'then stop and restart "npm run dev".',
  )
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
// Storage needs the Blaze plan and isn't enabled yet. Initialising it is safe;
// uploads will only work once Storage is turned on in the console.
export const storage = getStorage(app)
