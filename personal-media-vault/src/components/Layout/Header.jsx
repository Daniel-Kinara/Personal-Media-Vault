import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './Sidebar'
import './Header.css'

const Header = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleLogout = () => {
    onLogout()
    navigate('/')
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <span className="logo-icon">📦</span>
              <span className="logo-text">Media Vault</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="nav-menu">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="nav-link">
                  <span className="nav-icon">📊</span>
                  Dashboard
                </Link>
                <Link to="/profile" className="nav-link">
                  <span className="nav-icon">👤</span>
                  Profile
                </Link>
                <button onClick={handleLogout} className="logout-btn">
                  <span className="logout-icon">🚪</span>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">
                  <span className="nav-icon">🔑</span>
                  Login
                </Link>
                <Link to="/register" className="nav-link register-btn">
                  <span className="nav-icon">📝</span>
                  Sign Up
                </Link>
              </>
            )}
          </nav>
          
          {/* Mobile Hamburger Menu Button */}
          <button 
            className={`mobile-menu-btn ${isSidebarOpen ? 'active' : ''}`}
            onClick={toggleSidebar}
            aria-label="Toggle menu"
            aria-expanded={isSidebarOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </header>

      {/* Sidebar Component */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />
    </>
  )
}

export default Header