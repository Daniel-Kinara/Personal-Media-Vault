import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We're here to help. Get in touch with us.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Email</h3>
            <p>General Inquiries</p>
            <a href="mailto:info@mediavault.com">info@mediavault.com</a>
          </div>

          <div className="info-card">
            <div className="info-icon">🔧</div>
            <h3>Support</h3>
            <p>Technical Support</p>
            <a href="mailto:support@mediavault.com">support@mediavault.com</a>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Phone</h3>
            <p>Mon-Fri, 9AM-6PM EST</p>
            <a href="tel:+254727750894">+254 727 750 894</a>
          </div>

          <div className="info-card">
            <div className="info-icon">🏢</div>
            <h3>Office</h3>
            <p>Visit Us</p>
            <address>
              Tom Mboya Street<br />
              Nairobi City<br />
              Kenya
            </address>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="form-header">
            <h2>Send us a message</h2>
            <p>Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can we help you?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select id="category" name="category" required>
                <option value="">Select a category</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="feedback">Feedback & Suggestions</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Please describe your inquiry in detail..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="faq-preview">
        <h2>Quick Answers</h2>
        <div className="quick-answers">
          <div className="answer-item">
            <h3>How long does support take to respond?</h3>
            <p>We typically respond within 24 hours during business days.</p>
          </div>
          <div className="answer-item">
            <h3>Do you offer phone support?</h3>
            <p>Yes, phone support is available for Pro and Business plans.</p>
          </div>
          <div className="answer-item">
            <h3>Can I schedule a demo?</h3>
            <p>Absolutely! Contact our sales team to schedule a personalized demo.</p>
          </div>
        </div>
      </div>

      <div className="map-section">
        <div className="map-placeholder">
          <div className="map-content">
            <div className="map-icon">🗺️</div>
            <h3>Our Location</h3>
            <p>Tom Mboya Street,Nairobi, Kenya</p>
            <a 
              href="https://maps.google.com/?q=123+Tech+Street+San+Francisco+CA+94107" 
              target="_blank" 
              rel="noopener noreferrer"
              className="directions-btn"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact