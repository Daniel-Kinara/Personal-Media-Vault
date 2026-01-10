import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './Sidebar.css'

const Sidebar = ({ isOpen, onClose, isAuthenticated, onLogout }) => {
  const navigate = useNavigate()

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    
    if (isOpen) {
      document.body.classList.add('sidebar-open')
    } else {
      document.body.classList.remove('sidebar-open')
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.classList.remove('sidebar-open')
    }
  }, [isOpen, onClose])

  const handleLinkClick = () => {
    onClose()
  }

  const handleLogout = () => {
    onLogout()
    onClose()
    navigate('/')
  }

  if (!isOpen) return null

  return (
    <>
      <div className="sidebar-overlay" onClick={onClose} />
      
      <aside className="sidebar">
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
                <Link to="/" className="nav-link" onClick={handleLinkClick}>
                  <span className="nav-icon">🏠</span>
                  <span className="nav-text">Home</span>
                </Link>
              </li>
              
              {isAuthenticated ? (
                <>
                  <li>
                    <Link to="/dashboard" className="nav-link" onClick={handleLinkClick}>
                      <span className="nav-icon">📊</span>
                      <span className="nav-text">Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" className="nav-link" onClick={handleLinkClick}>
                      <span className="nav-icon">👤</span>
                      <span className="nav-text">Profile</span>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="nav-link" onClick={handleLinkClick}>
                      <span className="nav-icon">🔑</span>
                      <span className="nav-text">Login</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="nav-link" onClick={handleLinkClick}>
                      <span className="nav-icon">📝</span>
                      <span className="nav-text">Register</span>
                    </Link>
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
                  <Link to="/dashboard?view=images" className="nav-link" onClick={handleLinkClick}>
                    <span className="nav-icon">🖼️</span>
                    <span className="nav-text">My Images</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard?view=videos" className="nav-link" onClick={handleLinkClick}>
                    <span className="nav-icon">🎥</span>
                    <span className="nav-text">My Videos</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard?view=upload" className="nav-link" onClick={handleLinkClick}>
                    <span className="nav-icon">⬆️</span>
                    <span className="nav-text">Upload New</span>
                  </Link>
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
                    <button className="nav-link logout-btn" onClick={handleLogout}>
                      <span className="nav-icon">🚪</span>
                      <span className="nav-text">Logout</span>
                    </button>
                  </li>
                  <li>
                    <Link to="/settings" className="nav-link" onClick={handleLinkClick}>
                      <span className="nav-icon">⚙️</span>
                      <span className="nav-text">Settings</span>
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login" className="nav-link" onClick={handleLinkClick}>
                    <span className="nav-icon">🔐</span>
                    <span className="nav-text">Secure Login</span>
                  </Link>
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