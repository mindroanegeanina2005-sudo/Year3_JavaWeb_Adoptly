// src/shared/PlaceholderPage.jsx
// Temporary frame for pages that aren't built yet. Delete its usage when you build your page.

export default function PlaceholderPage({ title, owner, file, children }) {
  return (
    <section className="placeholder">
      <h1>{title}</h1>
      <p className="placeholder-meta">
        Placeholder · built by: <strong>{owner}</strong> · replace <code>{file}</code>
      </p>
      {children}
    </section>
  )
}
