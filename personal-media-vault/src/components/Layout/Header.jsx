import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Header.css'

const Header = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const handleLogout = () => {
    onLogout()
    navigate('/')
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen
    setIsMobileMenuOpen(newState)
    
    // Toggle body scroll lock
    if (newState) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.classList.remove('menu-open')
  }

  const handleNavClick = (e) => {
    if (isMobile) {
      closeMobileMenu()
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={closeMobileMenu}>
            <span className="logo-icon">📦</span>
            <span className="logo-text">Media Vault</span>
          </Link>
        </div>
        
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="nav-link" onClick={handleNavClick}>
                <span className="nav-icon">📊</span>
                Dashboard
              </Link>
              <Link to="/profile" className="nav-link" onClick={handleNavClick}>
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
              <Link to="/login" className="nav-link" onClick={handleNavClick}>
                <span className="nav-icon">🔑</span>
                Login
              </Link>
              <Link to="/register" className="nav-link register-btn" onClick={handleNavClick}>
                <span className="nav-icon">📝</span>
                Sign Up
              </Link>
            </>
          )}
        </nav>
        
        {/* Mobile menu backdrop */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-menu-backdrop"
            onClick={closeMobileMenu}
          />
        )}
      </div>
    </header>
  )
}

export default Header