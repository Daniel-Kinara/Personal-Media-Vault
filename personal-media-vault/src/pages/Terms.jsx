import './Terms.css'

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="page-header">
        <h1>Terms of Service</h1>
        <p>Last updated: March 15, 2024</p>
      </div>

      <div className="terms-content">
        <div className="acceptance-notice">
          <div className="notice-icon">⚠️</div>
          <div className="notice-content">
            <h3>Important Notice</h3>
            <p>
              By accessing or using Media Vault, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </div>
        </div>

        <div className="terms-sections">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              These Terms of Service ("Terms") govern your access to and use of Media Vault's 
              website, services, and applications (collectively, the "Services"). By accessing 
              or using our Services, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2>2. Account Registration</h2>
            <p>
              To use certain features of our Services, you must register for an account. You agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your password</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2>3. Acceptable Use</h2>
            <p>You agree not to use our Services to:</p>
            <ul>
              <li>Upload or share illegal content</li>
              <li>Violate intellectual property rights</li>
              <li>Distribute malware or harmful code</li>
              <li>Harass or threaten others</li>
              <li>Attempt to gain unauthorized access</li>
              <li>Interfere with service operation</li>
            </ul>
          </section>

          <section>
            <h2>4. Content Ownership</h2>
            <p>
              You retain ownership of any intellectual property rights that you hold in the 
              content you upload to our Services. By uploading content, you grant us a 
              worldwide license to host, store, reproduce, and display your content solely 
              for the purpose of providing the Services.
            </p>
          </section>

          <section>
            <h2>5. Service Availability</h2>
            <p>
              We strive to maintain 99.9% service availability but do not guarantee 
              uninterrupted access. We may perform maintenance, updates, or improvements 
              that temporarily affect service availability.
            </p>
          </section>

          <section>
            <h2>6. Subscription and Payments</h2>
            <p>
              Certain features may require payment. By subscribing, you agree to:
            </p>
            <ul>
              <li>Pay all applicable fees</li>
              <li>Authorize recurring payments for subscription plans</li>
              <li>Cancel at least 24 hours before renewal to avoid charges</li>
              <li>Accept our refund policy as stated</li>
            </ul>
          </section>

          <section>
            <h2>7. Termination</h2>
            <p>
              We may suspend or terminate your access to our Services if you violate these 
              Terms. Upon termination, your right to use the Services will immediately cease.
            </p>
          </section>

          <section>
            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Media Vault shall not be liable for 
              any indirect, incidental, special, consequential, or punitive damages, 
              including loss of profits, data, or use, arising from your use of the Services.
            </p>
          </section>

          <section>
            <h2>9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice 
              of material changes via email or through our Services. Continued use after 
              changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of 
              the State of California, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2>11. Contact Information</h2>
            <p>
              For questions about these Terms, please contact us at:
            </p>
            <div className="contact-details">
              <p><strong>Email:</strong> legal@mediavault.com</p>
              <p><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94107</p>
            </div>
          </section>
        </div>

        <div className="agreement-section">
          <h3>User Agreement</h3>
          <p>
            By using Media Vault, you acknowledge that you have read, understood, 
            and agree to be bound by these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Terms