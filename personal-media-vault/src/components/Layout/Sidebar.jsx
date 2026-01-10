import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react' // ✅ Added useRef
import './Sidebar.css'

const Sidebar = ({ isOpen, onClose, isAuthenticated, onLogout }) => {
  const navigate = useNavigate()
  const sidebarRef = useRef(null) // ✅ Added ref for click outside detection

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target) && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    
    if (isOpen) {
      document.body.classList.add('sidebar-open')
    } else {
      document.body.classList.remove('sidebar-open')
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.body.classList.remove('sidebar-open')
    }
  }, [isOpen, onClose])

  const handleLinkClick = (e) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href) {
      onClose()
      setTimeout(() => {
        navigate(href)
      }, 300)
    }
  }

  const handleButtonClick = (e) => {
    e.preventDefault()
    onClose()
  }

  const handleLogout = (e) => {
    e.preventDefault()
    onLogout()
    onClose()
    setTimeout(() => {
      navigate('/')
    }, 300)
  }

  if (!isOpen) return null

  return (
    <>
      <div 
        className="sidebar-overlay" 
        onClick={onClose}
        role="button"
        aria-label="Close sidebar"
        tabIndex={0}
      />
      
      <aside 
        className="sidebar" 
        ref={sidebarRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="logo-icon">📦</span>
            <span className="logo-text">Media Vault</span>
          </div>
          <button 
            className="sidebar-close-btn"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        <div className="sidebar-user">
          <div className="user-avatar">
            {isAuthenticated ? '👤' : '🔒'}
          </div>
          <div className="user-info">
            <h3>{isAuthenticated ? 'Welcome Back!' : 'Guest User'}</h3>
            <p>{isAuthenticated ? 'Manage your media' : 'Sign in to access'}</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <h4 className="section-title">Main</h4>
            <ul>
              <li>
                <a 
                  href="/" 
                  className="nav-link" 
                  onClick={handleLinkClick}
                >
                  <span className="nav-icon">🏠</span>
                  <span className="nav-text">Home</span>
                </a>
              </li>
              
              {isAuthenticated ? (
                <>
                  <li>
                    <a 
                      href="/dashboard" 
                      className="nav-link" 
                      onClick={handleLinkClick}
                    >
                      <span className="nav-icon">📊</span>
                      <span className="nav-text">Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/profile" 
                      className="nav-link" 
                      onClick={handleLinkClick}
                    >
                      <span className="nav-icon">👤</span>
                      <span className="nav-text">Profile</span>
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a 
                      href="/login" 
                      className="nav-link" 
                      onClick={handleLinkClick}
                    >
                      <span className="nav-icon">🔑</span>
                      <span className="nav-text">Login</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/register" 
                      className="nav-link" 
                      onClick={handleLinkClick}
                    >
                      <span className="nav-icon">📝</span>
                      <span className="nav-text">Register</span>
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>

          {isAuthenticated && (
            <div className="nav-section">
              <h4 className="section-title">Media</h4>
              <ul>
                <li>
                  <button 
                    className="nav-link" 
                    onClick={handleButtonClick}
                  >
                    <span className="nav-icon">🖼️</span>
                    <span className="nav-text">My Images</span>
                  </button>
                </li>
                <li>
                  <button 
                    className="nav-link" 
                    onClick={handleButtonClick}
                  >
                    <span className="nav-icon">🎥</span>
                    <span className="nav-text">My Videos</span>
                  </button>
                </li>
                <li>
                  <a 
                    href="/dashboard" 
                    className="nav-link" 
                    onClick={handleLinkClick}
                  >
                    <span className="nav-icon">⬆️</span>
                    <span className="nav-text">Upload New</span>
                  </a>
                </li>
              </ul>
            </div>
          )}

          <div className="nav-section">
            <h4 className="section-title">Account</h4>
            <ul>
              {isAuthenticated ? (
                <>
                  <li>
                    <button 
                      className="nav-link logout-btn" 
                      onClick={handleLogout}
                    >
                      <span className="nav-icon">🚪</span>
                      <span className="nav-text">Logout</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      className="nav-link" 
                      onClick={handleButtonClick}
                    >
                      <span className="nav-icon">⚙️</span>
                      <span className="nav-text">Settings</span>
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <a 
                    href="/login" 
                    className="nav-link" 
                    onClick={handleLinkClick}
                  >
                    <span className="nav-icon">🔐</span>
                    <span className="nav-text">Secure Login</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="storage-info">
            <div className="storage-label">
              <span className="storage-icon">💾</span>
              Storage
            </div>
            <div className="storage-bar">
              <div className="storage-progress" style={{ width: '45%' }}></div>
            </div>
            <span className="storage-text">2.3 GB / 5 GB</span>
          </div>
          
          <div className="app-info">
            <p>Media Vault v1.0</p>
            <p className="copyright">© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar