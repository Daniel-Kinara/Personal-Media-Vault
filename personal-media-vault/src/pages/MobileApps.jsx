import './MobileApps.css'

const MobileApps = () => {
  const apps = [
    {
      platform: 'iOS',
      icon: '📱',
      description: 'Optimized for iPhone and iPad',
      features: ['Face ID/Touch ID', 'Offline Access', 'Background Upload', 'Widget Support'],
      storeLink: '#',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://apps.apple.com'
    },
    {
      platform: 'Android',
      icon: '🤖',
      description: 'Available on Google Play Store',
      features: ['Fingerprint Auth', 'Auto Backup', 'Dark Mode', 'Quick Share'],
      storeLink: '#',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://play.google.com'
    }
  ]

  return (
    <div className="mobile-apps-page">
      <div className="page-header">
        <h1>Mobile Apps</h1>
        <p>Take your media vault everywhere you go</p>
      </div>

      <div className="apps-grid">
        {apps.map((app, index) => (
          <div key={index} className="app-card">
            <div className="app-header">
              <div className="app-icon">{app.icon}</div>
              <div>
                <h3>{app.platform}</h3>
                <p className="app-description">{app.description}</p>
              </div>
            </div>

            <ul className="features-list">
              {app.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="check-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="download-section">
              <div className="qr-code">
                <img src={app.qrCode} alt={`Download ${app.platform} app`} />
              </div>
              <div className="store-buttons">
                <a href={app.storeLink} className="store-button">
                  Download on {app.platform === 'iOS' ? 'App Store' : 'Play Store'}
                </a>
                <p className="scan-text">Scan QR code or click to download</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="app-features-section">
        <h2>App Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h3>Secure Access</h3>
            <p>Biometric authentication for maximum security</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3>Fast Upload</h3>
            <p>Upload photos and videos directly from your camera</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📱</div>
            <h3>Offline Viewing</h3>
            <p>Access your favorite media without internet</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔄</div>
            <h3>Auto Sync</h3>
            <p>Changes sync across all your devices instantly</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileApps