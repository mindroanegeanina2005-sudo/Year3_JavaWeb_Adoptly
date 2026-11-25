// src/auth/RegisterPage.jsx
// DEMO (Member 1). Uses the mock register(). Real form + validation in main guide Step 5.

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../shared/AuthContext'

const EMPTY_FORM = { fullName: '', email: '', password: '', address: '', phone: '' }

export default function RegisterPage() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState(EMPTY_FORM)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  function update(field) {
    return (event) => setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setBusy(true)
    try {
      await register(form)
      navigate('/', { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <section>
      <h1>Create your account</h1>
      <p className="placeholder-meta">Demo: nothing is saved yet; you become the test adopter.</p>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <label>
          Full name
          <input value={form.fullName} onChange={update('fullName')} autoComplete="name" />
        </label>
        <label>
          Email
          <input type="email" value={form.email} onChange={update('email')} autoComplete="email" />
        </label>
        <label>
          Password
          <input type="password" value={form.password} onChange={update('password')} autoComplete="new-password" />
        </label>
        <label>
          Address
          <input value={form.address} onChange={update('address')} autoComplete="street-address" />
        </label>
        <label>
          Phone
          <input type="tel" value={form.phone} onChange={update('phone')} autoComplete="tel" />
        </label>
        {error && <p className="form-error">{error}</p>}
        <button type="submit" className="btn" disabled={busy}>
          {busy ? 'Creating account…' : 'Register'}
        </button>
      </form>

      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </section>
  )
}
