import { useState, useEffect } from 'react'
import './Profile.css'

const Profile = () => {
  const [user, setUser] = useState(null)
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: ''
  })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    const storedUser = JSON.parse(localStorage.getItem('user'))
    if (storedUser) {
      setUser(storedUser)
      setFormData({
        name: storedUser.name || '',
        email: storedUser.email || '',
        phone: storedUser.phone || '',
        bio: storedUser.bio || ''
      })
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = () => {
    const updatedUser = { ...user, ...formData }
    localStorage.setItem('user', JSON.stringify(updatedUser))
    setUser(updatedUser)
    setEditing(false)
    alert('Profile updated successfully!')
  }

  const handleCancel = () => {
    setFormData({
      name: user.name || '',
      email: user.email || '',
      phone: user.phone || '',
      bio: user.bio || ''
    })
    setEditing(false)
  }

  const getStorageUsage = () => {
    const media = JSON.parse(localStorage.getItem('media') || '[]')
    const totalSize = media.reduce((sum, item) => sum + (item.size || 0), 0)
    const usedGB = (totalSize / (1024 * 1024 * 1024)).toFixed(2)
    const percentage = Math.min((usedGB / 5) * 100, 100)
    
    return {
      used: usedGB,
      total: 5,
      percentage: percentage
    }
  }

  const storageUsage = getStorageUsage()

  if (!user) {
    return (
      <div className="profile-loading">
        <div className="loading-spinner"></div>
        <p>Loading profile...</p>
      </div>
    )
  }

  return (
    <div className="profile">
      <div className="profile-header">
        <h1>My Profile</h1>
        <p>Manage your account settings and preferences</p>
      </div>

      <div className="profile-content">
        <div className="profile-sidebar">
          <div className="profile-avatar">
            <div className="avatar-circle">
              {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <h3>{user.name || 'User'}</h3>
            <p className="user-email">{user.email}</p>
            <p className="user-joined">
              Joined {new Date(user.createdAt || Date.now()).toLocaleDateString()}
            </p>
          </div>

          <div className="storage-info">
            <div className="storage-header">
              <h4>Storage Usage</h4>
              <span className="storage-percentage">
                {storageUsage.percentage.toFixed(1)}%
              </span>
            </div>
            <div className="storage-bar">
              <div 
                className="storage-used" 
                style={{ width: `${storageUsage.percentage}%` }}
              ></div>
            </div>
            <p className="storage-text">
              {storageUsage.used} GB of {storageUsage.total} GB used
            </p>
          </div>

          <div className="account-stats">
            <div className="stat-item">
              <span className="stat-label">Media Files</span>
              <span className="stat-value">
                {JSON.parse(localStorage.getItem('media') || '[]').length}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Account Type</span>
              <span className="stat-value free">Free</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Status</span>
              <span className="stat-value active">Active</span>
            </div>
          </div>
        </div>

        <div className="profile-main">
          <div className="profile-card">
            <div className="card-header">
              <h2>Personal Information</h2>
              {!editing ? (
                <button 
                  className="edit-btn"
                  onClick={() => setEditing(true)}
                >
                  <span className="btn-icon">✏️</span>
                  Edit Profile
                </button>
              ) : (
                <div className="edit-actions">
                  <button 
                    className="save-btn"
                    onClick={handleSave}
                  >
                    <span className="btn-icon">💾</span>
                    Save
                  </button>
                  <button 
                    className="cancel-btn"
                    onClick={handleCancel}
                  >
                    <span className="btn-icon">✖️</span>
                    Cancel
                  </button>
                </div>
              )}
            </div>

            <div className="profile-form">
              <div className="form-row">
                <div className="form-group">
                  <label>
                    <span className="label-icon">👤</span>
                    Full Name
                  </label>
                  {editing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                  ) : (
                    <p className="form-value">{user.name || 'Not set'}</p>
                  )}
                </div>
                <div className="form-group">
                  <label>
                    <span className="label-icon">📧</span>
                    Email Address
                  </label>
                  {editing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  ) : (
                    <p className="form-value">{user.email}</p>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>
                    <span className="label-icon">📱</span>
                    Phone Number
                  </label>
                  {editing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  ) : (
                    <p className="form-value">{user.phone || 'Not set'}</p>
                  )}
                </div>
                <div className="form-group">
                  <label>
                    <span className="label-icon">🏷️</span>
                    Account Type
                  </label>
                  <p className="form-value">Free Account</p>
                </div>
              </div>

              <div className="form-group">
                <label>
                  <span className="label-icon">📝</span>
                  Bio
                </label>
                {editing ? (
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Tell us about yourself..."
                    rows="4"
                  />
                ) : (
                  <p className="form-value bio">{user.bio || 'No bio yet'}</p>
                )}
              </div>
            </div>
          </div>

          <div className="profile-card">
            <h2>
              <span className="section-icon">🔒</span>
              Account Security
            </h2>
            <div className="security-options">
              <div className="security-item">
                <div className="security-icon">🔑</div>
                <div className="security-content">
                  <h4>Change Password</h4>
                  <p>Update your password regularly to keep your account secure</p>
                </div>
                <button className="security-btn">Change</button>
              </div>
              <div className="security-item">
                <div className="security-icon">🔐</div>
                <div className="security-content">
                  <h4>Two-Factor Authentication</h4>
                  <p>Add an extra layer of security to your account</p>
                </div>
                <button className="security-btn disabled" disabled>
                  Coming Soon
                </button>
              </div>
              <div className="security-item">
                <div className="security-icon">📋</div>
                <div className="security-content">
                  <h4>Login Activity</h4>
                  <p>View your recent login history</p>
                </div>
                <button className="security-btn">View</button>
              </div>
            </div>
          </div>

          <div className="danger-zone">
            <div className="danger-header">
              <span className="danger-icon">⚠️</span>
              <h3>Danger Zone</h3>
            </div>
            <p>Permanently delete your account and all stored media. This action cannot be undone.</p>
            <button className="delete-btn">
              <span className="delete-icon">🗑️</span>
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile