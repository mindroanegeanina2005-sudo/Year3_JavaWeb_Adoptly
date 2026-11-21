// Temporary preview of the layout until Step 8 replaces this with the route table.
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './shared/AuthContext'
import Layout from './shared/Layout'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<h1>Adoptly</h1>} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
