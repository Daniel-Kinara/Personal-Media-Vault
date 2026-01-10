import './Features.css'

const Features = () => {
  const features = [
    {
      icon: '🔒',
      title: 'Bank-Level Security',
      description: 'Military-grade encryption for all your media files'
    },
    {
      icon: '⚡',
      title: 'High-Speed Upload',
      description: 'Upload multiple files simultaneously'
    },
    {
      icon: '📱',
      title: 'Cross-Platform',
      description: 'Access from any device, anywhere'
    },
    {
      icon: '🔄',
      title: 'Auto Sync',
      description: 'Files sync automatically across devices'
    },
    {
      icon: '🎨',
      title: 'Smart Organization',
      description: 'AI-powered tagging and categorization'
    },
    {
      icon: '🤖',
      title: 'AI Enhancement',
      description: 'Automatic photo enhancement and organization'
    }
  ]

  return (
    <div className="features-page">
      <div className="page-header">
        <h1>Features</h1>
        <p>Discover everything Media Vault has to offer</p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <h2>Ready to get started?</h2>
        <p>Join thousands of satisfied users today</p>
        <a href="/register" className="cta-button">Get Started Free</a>
      </div>
    </div>
  )
}

export default Features