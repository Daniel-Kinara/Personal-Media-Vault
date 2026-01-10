import './HelpCenter.css'

const HelpCenter = () => {
  const categories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      articles: [
        'Creating your account',
        'Uploading your first files',
        'Understanding storage limits',
        'Setting up two-factor authentication'
      ]
    },
    {
      title: 'Managing Files',
      icon: '📁',
      articles: [
        'Organizing with folders',
        'Sharing files securely',
        'Downloading files',
        'Deleting and recovering files'
      ]
    },
    {
      title: 'Account & Billing',
      icon: '💰',
      articles: [
        'Upgrading your plan',
        'Changing payment method',
        'Cancelling subscription',
        'Viewing billing history'
      ]
    },
    {
      title: 'Security & Privacy',
      icon: '🔒',
      articles: [
        'Understanding encryption',
        'Managing devices',
        'Privacy settings',
        'Data retention policy'
      ]
    }
  ]

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'Go to Settings > Security > Change Password. You\'ll receive an email with reset instructions.'
    },
    {
      question: 'What file types are supported?',
      answer: 'We support all common image formats (JPG, PNG, GIF, etc.) and video formats (MP4, MOV, AVI, etc.).'
    },
    {
      question: 'Is there a file size limit?',
      answer: 'Free accounts: 500MB per file. Pro accounts: 2GB per file. Business accounts: 10GB per file.'
    },
    {
      question: 'How secure is my data?',
      answer: 'All files are encrypted at rest and in transit using AES-256 encryption. We never share your data.'
    },
    {
      question: 'Can I share files with non-users?',
      answer: 'Yes! Generate a shareable link with optional password protection and expiration dates.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee for all annual plans.'
    }
  ]

  return (
    <div className="help-center-page">
      <div className="page-header">
        <h1>Help Center</h1>
        <p>Find answers and get support</p>
      </div>

      <div className="search-section">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search for help articles, FAQs, or guides..."
          />
          <button className="search-btn">Search</button>
        </div>
        <p className="search-tip">Try searching for "upload", "billing", or "security"</p>
      </div>

      <div className="categories-section">
        <h2>Browse by Category</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <ul className="articles-list">
                {category.articles.map((article, idx) => (
                  <li key={idx}>
                    <a href="#">{article}</a>
                  </li>
                ))}
              </ul>
              <a href="#" className="view-all">View all articles →</a>
            </div>
          ))}
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <button className="toggle-btn">+</button>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-card">
          <div className="contact-icon">💬</div>
          <div className="contact-content">
            <h3>Still need help?</h3>
            <p>Our support team is here to assist you</p>
          </div>
          <div className="contact-actions">
            <a href="mailto:support@mediavault.com" className="contact-btn">
              <span className="btn-icon">📧</span>
              Email Support
            </a>
            <a href="#" className="contact-btn secondary">
              <span className="btn-icon">💬</span>
              Live Chat
            </a>
          </div>
        </div>
      </div>

      <div className="resources-section">
        <h2>Additional Resources</h2>
        <div className="resources-grid">
          <a href="#" className="resource-card">
            <div className="resource-icon">📚</div>
            <div>
              <h3>User Guide</h3>
              <p>Complete guide to all features</p>
            </div>
          </a>
          <a href="#" className="resource-card">
            <div className="resource-icon">🎥</div>
            <div>
              <h3>Video Tutorials</h3>
              <p>Step-by-step video guides</p>
            </div>
          </a>
          <a href="#" className="resource-card">
            <div className="resource-icon">📋</div>
            <div>
              <h3>API Documentation</h3>
              <p>Developer resources</p>
            </div>
          </a>
          <a href="#" className="resource-card">
            <div className="resource-icon">🏢</div>
            <div>
              <h3>Community Forum</h3>
              <p>Connect with other users</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HelpCenter