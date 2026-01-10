import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './Sidebar.css'

const Sidebar = ({ isOpen, onClose, isAuthenticated, onLogout }) => {
  const navigate = useNavigate()
  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    
    // Only add overlay click listener on mobile
    if (window.innerWidth <= 768) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    if (isOpen) {
      document.body.classList.add('sidebar-open')
    } else {
      document.body.classList.remove('sidebar-open')
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.classList.remove('sidebar-open')
    }
  }, [isOpen, onClose])

  const handleLinkClick = (href) => {
    onClose()
    setTimeout(() => {
      navigate(href)
    }, 300)
  }

  const handleLogout = () => {
    onLogout()
    onClose()
    setTimeout(() => {
      navigate('/')
    }, 300)
  }

  const getStorageUsage = () => {
    const media = JSON.parse(localStorage.getItem('media') || '[]')
    const totalSize = media.reduce((sum, item) => sum + (item.size || 0), 0)
    const usedMB = (totalSize / (1024 * 1024)).toFixed(2)
    const percentage = Math.min((usedMB / 5120) * 100, 100) // 5GB = 5120MB
    
    return {
      used: usedMB,
      total: 5120,
      percentage: percentage
    }
  }

  const storageUsage = getStorageUsage()

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
        className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}
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
                <button 
                  className="nav-link" 
                  onClick={() => handleLinkClick('/')}
                >
                  <span className="nav-icon">🏠</span>
                  <span className="nav-text">Home</span>
                </button>
              </li>
              
              {isAuthenticated ? (
                <>
                  <li>
                    <button 
                      className="nav-link" 
                      onClick={() => handleLinkClick('/dashboard')}
                    >
                      <span className="nav-icon">📊</span>
                      <span className="nav-text">Dashboard</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      className="nav-link" 
                      onClick={() => handleLinkClick('/profile')}
                    >
                      <span className="nav-icon">👤</span>
                      <span className="nav-text">Profile</span>
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <button 
                      className="nav-link" 
                      onClick={() => handleLinkClick('/login')}
                    >
                      <span className="nav-icon">🔑</span>
                      <span className="nav-text">Login</span>
                    </button>
                  </li>
                  <li>
                    <button 
                      className="nav-link" 
                      onClick={() => handleLinkClick('/register')}
                    >
                      <span className="nav-icon">📝</span>
                      <span className="nav-text">Register</span>
                    </button>
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
                    onClick={() => handleLinkClick('/dashboard?view=images')}
                  >
                    <span className="nav-icon">🖼️</span>
                    <span className="nav-text">My Images</span>
                  </button>
                </li>
                <li>
                  <button 
                    className="nav-link" 
                    onClick={() => handleLinkClick('/dashboard?view=videos')}
                  >
                    <span className="nav-icon">🎥</span>
                    <span className="nav-text">My Videos</span>
                  </button>
                </li>
                <li>
                  <button 
                    className="nav-link" 
                    onClick={() => handleLinkClick('/dashboard?view=upload')}
                  >
                    <span className="nav-icon">⬆️</span>
                    <span className="nav-text">Upload New</span>
                  </button>
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
                      onClick={() => handleLinkClick('/settings')}
                    >
                      <span className="nav-icon">⚙️</span>
                      <span className="nav-text">Settings</span>
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button 
                    className="nav-link" 
                    onClick={() => handleLinkClick('/login')}
                  >
                    <span className="nav-icon">🔐</span>
                    <span className="nav-text">Secure Login</span>
                  </button>
                </li>
              )}
            </ul>
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="storage-info">
            <div className="storage-label">
              <span className="storage-icon">💾</span>
              Storage Used
            </div>
            <div className="storage-bar">
              <div 
                className="storage-progress" 
                style={{ width: `${storageUsage.percentage}%` }}
              ></div>
            </div>
            <span className="storage-text">
              {(storageUsage.used / 1024).toFixed(2)} GB / {(storageUsage.total / 1024).toFixed(0)} GB
            </span>
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