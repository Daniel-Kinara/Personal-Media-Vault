import './Privacy.css'

const Privacy = () => {
  return (
    <div className="privacy-page">
      <div className="page-header">
        <h1>Privacy Policy</h1>
        <p>Last updated: March 15, 2024</p>
      </div>

      <div className="privacy-content">
        <div className="toc">
          <h3>Table of Contents</h3>
          <ul>
            <li><a href="#introduction">1. Introduction</a></li>
            <li><a href="#data-collection">2. Data We Collect</a></li>
            <li><a href="#data-use">3. How We Use Your Data</a></li>
            <li><a href="#data-sharing">4. Data Sharing</a></li>
            <li><a href="#data-security">5. Data Security</a></li>
            <li><a href="#your-rights">6. Your Rights</a></li>
            <li><a href="#cookies">7. Cookies</a></li>
            <li><a href="#changes">8. Changes to Policy</a></li>
            <li><a href="#contact">9. Contact Us</a></li>
          </ul>
        </div>

        <div className="policy-content">
          <section id="introduction">
            <h2>1. Introduction</h2>
            <p>
              Welcome to Media Vault. We respect your privacy and are committed to protecting 
              your personal data. This privacy policy will inform you about how we look after 
              your personal data when you visit our website and tell you about your privacy rights.
            </p>
          </section>

          <section id="data-collection">
            <h2>2. Data We Collect</h2>
            <p>We collect several types of information from and about users:</p>
            <ul>
              <li>
                <strong>Personal Identification Information:</strong> Name, email address, 
                phone number, etc.
              </li>
              <li>
                <strong>Account Information:</strong> Username, password, profile information.
              </li>
              <li>
                <strong>Media Files:</strong> Photos, videos, and other files you upload.
              </li>
              <li>
                <strong>Usage Data:</strong> How you interact with our services.
              </li>
              <li>
                <strong>Device Information:</strong> IP address, browser type, operating system.
              </li>
            </ul>
          </section>

          <section id="data-use">
            <h2>3. How We Use Your Data</h2>
            <p>We use your data to:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you service-related communications</li>
              <li>Improve and personalize your experience</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section id="data-sharing">
            <h2>4. Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share your information with:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who help us operate 
                our services (hosting, payment processing, etc.).
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law or to protect our rights.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger, acquisition, 
                or sale of assets.
              </li>
            </ul>
          </section>

          <section id="data-security">
            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect 
              your personal data, including:
            </p>
            <ul>
              <li>AES-256 encryption for data at rest</li>
              <li>TLS/SSL encryption for data in transit</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Data backup and disaster recovery procedures</li>
            </ul>
          </section>

          <section id="your-rights">
            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your personal data</li>
              <li>Restrict processing of your data</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us at privacy@mediavault.com.
            </p>
          </section>

          <section id="cookies">
            <h2>7. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our service 
              and hold certain information. Cookies are files with a small amount of data which 
              may include an anonymous unique identifier.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie 
              is being sent. However, if you do not accept cookies, you may not be able to use 
              some portions of our service.
            </p>
          </section>

          <section id="changes">
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the 
              "Last updated" date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. 
              Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section id="contact">
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="contact-info">
              <p>
                <strong>Email:</strong> privacy@mediavault.com
              </p>
              <p>
                <strong>Address:</strong> 123 Tech Street, San Francisco, CA 94107
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Privacy