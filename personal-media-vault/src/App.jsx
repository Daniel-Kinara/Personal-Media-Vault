import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import ProtectedRoute from './components/Common/ProtectedRoute'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    const closeMobileMenu = () => {
      const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
      const navMenu = document.querySelector('.nav-menu')
      
      if (mobileMenuBtn?.classList.contains('active')) {
        mobileMenuBtn.classList.remove('active')
      }
      if (navMenu?.classList.contains('active')) {
        navMenu.classList.remove('active')
      }
      document.body.classList.remove('menu-open')
    }
    
    // Listen for route changes
    const handleRouteChange = () => {
      closeMobileMenu()
    }
    
    // Add event listener for clicks (alternative to detecting route changes)
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('/')) {
        setTimeout(closeMobileMenu, 100)
      }
    })
    
    return () => {
      document.removeEventListener('click', handleRouteChange)
    }
  }, [])

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App