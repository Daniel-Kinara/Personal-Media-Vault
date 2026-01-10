import './Careers.css'

const Careers = () => {
  const positions = [
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build beautiful, responsive UIs with React'
    },
    {
      title: 'Backend Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design scalable APIs and microservices'
    },
    {
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create amazing user experiences'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Contract',
      description: 'Manage cloud infrastructure and CI/CD'
    },
    {
      title: 'Customer Success',
      department: 'Support',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help customers get the most from Media Vault'
    },
    {
      title: 'Security Analyst',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      description: 'Protect our systems and user data'
    }
  ]

  const benefits = [
    { icon: '💰', title: 'Competitive Salary', description: 'Above market rates' },
    { icon: '🏖️', title: 'Unlimited PTO', description: 'Take time when you need it' },
    { icon: '🏥', title: 'Health Insurance', description: 'Comprehensive coverage' },
    { icon: '🏡', title: 'Remote First', description: 'Work from anywhere' },
    { icon: '🎓', title: 'Learning Budget', description: 'Ksh40,000/year for growth' },
    { icon: '🍕', title: 'Team Events', description: 'Regular team gatherings' }
  ]

  return (
    <div className="careers-page">
      <div className="page-header">
        <h1>Join Our Team</h1>
        <p>Build the future of media storage with us</p>
      </div>

      <div className="intro-section">
        <div className="intro-content">
          <h2>Why Work With Us?</h2>
          <p>
            At Media Vault, we're building tools that help people preserve their memories. 
            Join us in creating secure, accessible, and intelligent media storage solutions.
          </p>
          <a href="#openings" className="cta-button">View Open Positions</a>
        </div>
        <div className="intro-image">
          <div className="image-placeholder">💼</div>
        </div>
      </div>

      <div className="benefits-section">
        <h2>Employee Benefits</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="openings" className="openings-section">
        <h2>Open Positions</h2>
        <div className="positions-grid">
          {positions.map((position, index) => (
            <div key={index} className="position-card">
              <div className="position-header">
                <h3>{position.title}</h3>
                <div className="position-tags">
                  <span className="tag department">{position.department}</span>
                  <span className="tag location">{position.location}</span>
                  <span className="tag type">{position.type}</span>
                </div>
              </div>
              <p className="position-description">{position.description}</p>
              <a href={`mailto:careers@mediavault.com?subject=Application: ${position.title}`} className="apply-button">
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="process-section">
        <h2>Hiring Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Application</h3>
            <p>Submit your resume and portfolio</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Screening</h3>
            <p>Initial call with our HR team</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Interview</h3>
            <p>Technical and cultural interviews</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Offer</h3>
            <p>Welcome to the team!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers