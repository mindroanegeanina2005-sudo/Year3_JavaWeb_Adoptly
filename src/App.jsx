// src/App.jsx: route table. Anyone can add or change routes here
// (admin sub-pages can also be nested routes inside AdminPage).

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './shared/AuthContext'
import Layout from './shared/Layout'
import HomePage from './shared/HomePage'
import NotFoundPage from './shared/NotFoundPage'

import LoginPage from './auth/LoginPage'
import RegisterPage from './auth/RegisterPage'
import ProfilePage from './auth/ProfilePage'

import QuizPage from './quiz/QuizPage'
import ResultPage from './quiz/ResultPage'

import CatalogPage from './catalog/CatalogPage'
import PetPage from './catalog/PetPage'
import MyRequestsPage from './catalog/MyRequestsPage'
import SpeciesPage from './catalog/SpeciesPage'

import AdminPage from './admin/AdminPage'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />

            {/* Member 2: catalog */}
            <Route path="pets" element={<CatalogPage />} />
            <Route path="pets/:petId" element={<PetPage />} />
            <Route path="species" element={<SpeciesPage />} />
            <Route path="my-requests" element={<MyRequestsPage />} />

            {/* Member 1: quiz + auth */}
            <Route path="quiz" element={<QuizPage />} />
            <Route path="quiz/result" element={<ResultPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="profile" element={<ProfilePage />} />

            {/* Member 3: admin (nested routes live inside AdminPage) */}
            <Route path="admin/*" element={<AdminPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
