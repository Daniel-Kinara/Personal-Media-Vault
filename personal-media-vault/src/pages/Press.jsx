import './Press.css'

const Press = () => {
  const pressReleases = [
    {
      title: 'Media Vault Raises $10M Series A Funding',
      date: 'March 15, 2024',
      summary: 'Funding will accelerate product development and expand team.',
      link: '#'
    },
    {
      title: 'Launch of AI-Powered Photo Organization',
      date: 'February 28, 2024',
      summary: 'New AI features revolutionize media management.',
      link: '#'
    },
    {
      title: 'Partnership with Major Cloud Provider',
      date: 'January 20, 2024',
      summary: 'Strategic partnership to enhance storage infrastructure.',
      link: '#'
    }
  ]

  const mediaCoverage = [
    {
      outlet: 'TechCrunch',
      title: 'Media Vault Secures Major Funding Round',
      date: 'March 16, 2024',
      link: '#'
    },
    {
      outlet: 'Wired',
      title: 'How AI is Changing Photo Storage',
      date: 'March 1, 2024',
      link: '#'
    },
    {
      outlet: 'Forbes',
      title: 'Top 10 Cloud Storage Startups to Watch',
      date: 'February 15, 2024',
      link: '#'
    },
    {
      outlet: 'The Verge',
      title: 'Media Vault Review: Secure Storage Done Right',
      date: 'January 30, 2024',
      link: '#'
    }
  ]

  const logos = [
    { name: 'TechCrunch', logo: '📰' },
    { name: 'Forbes', logo: '💰' },
    { name: 'Wired', logo: '🔌' },
    { name: 'The Verge', logo: '⚡' },
    { name: 'Bloomberg', logo: '📈' },
    { name: 'Business Insider', logo: '💼' }
  ]

  return (
    <div className="press-page">
      <div className="page-header">
        <h1>Press Center</h1>
        <p>Latest news and media resources</p>
      </div>

      <div className="contact-section">
        <div className="contact-card">
          <h2>Press Contact</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span className="label">Email:</span>
              <a href="mailto:press@mediavault.com">press@mediavault.com</a>
            </div>
            <div className="contact-item">
              <span className="label">Phone:</span>
              <a href="tel:+15551234567">+1 (555) 123-4567</a>
            </div>
            <div className="contact-item">
              <span className="label">Address:</span>
              <span>123 Tech Street, San Francisco, CA 94107</span>
            </div>
          </div>
        </div>

        <div className="resources-card">
          <h2>Media Resources</h2>
          <div className="resources-grid">
            <a href="#" className="resource-item">
              <div className="resource-icon">📱</div>
              <div>
                <h3>Brand Assets</h3>
                <p>Logos, colors, and guidelines</p>
              </div>
            </a>
            <a href="#" className="resource-item">
              <div className="resource-icon">📸</div>
              <div>
                <h3>Product Images</h3>
                <p>Screenshots and product shots</p>
              </div>
            </a>
            <a href="#" className="resource-item">
              <div className="resource-icon">👤</div>
              <div>
                <h3>Team Photos</h3>
                <p>Executive headshots</p>
              </div>
            </a>
            <a href="#" className="resource-item">
              <div className="resource-icon">📊</div>
              <div>
                <h3>Company Facts</h3>
                <p>Statistics and milestones</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="press-releases">
        <h2>Press Releases</h2>
        <div className="releases-grid">
          {pressReleases.map((release, index) => (
            <div key={index} className="release-card">
              <span className="date">{release.date}</span>
              <h3>{release.title}</h3>
              <p>{release.summary}</p>
              <a href={release.link} className="read-more">Read More →</a>
            </div>
          ))}
        </div>
      </div>

      <div className="media-coverage">
        <h2>Media Coverage</h2>
        <div className="coverage-grid">
          {mediaCoverage.map((article, index) => (
            <div key={index} className="article-card">
              <div className="outlet">{article.outlet}</div>
              <h3>{article.title}</h3>
              <span className="date">{article.date}</span>
              <a href={article.link} className="read-link">Read Article →</a>
            </div>
          ))}
        </div>
      </div>

      <div className="logos-section">
        <h2>Featured In</h2>
        <div className="logos-grid">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <div className="logo-icon">{logo.logo}</div>
              <span>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="download-section">
        <h2>Download Press Kit</h2>
        <p>Everything you need in one package</p>
        <div className="download-buttons">
          <a href="#" className="download-btn">
            <span className="btn-icon">📥</span>
            Download Press Kit (ZIP)
          </a>
          <a href="#" className="download-btn secondary">
            <span className="btn-icon">📄</span>
            View Fact Sheet (PDF)
          </a>
        </div>
      </div>
    </div>
  )
}

export default Press