import './About.css'

const About = () => {
  const team = [
    { name: 'Daniel Kinara', role: 'CEO & Founder', avatar: '👨‍💼' },
    { name: 'Edwin Sinya', role: 'CTO', avatar: '👩‍💻' },
    { name: 'Mike Ombura', role: 'Lead Developer', avatar: '👨‍🔬' },
    { name: 'Emma Wilson', role: 'Design Director', avatar: '👩‍🎨' },
    { name: 'David Kim', role: 'Security Expert', avatar: '👨‍💂' },
    { name: 'Lisa Wilkis', role: 'Customer Success', avatar: '👩‍💼' }
  ]

  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About Media Vault</h1>
        <p>Secure. Simple. Smart media storage</p>
      </div>

      <div className="hero-section">
        <div className="hero-content">
          <h2>Our Mission</h2>
          <p>
            At Media Vault, we believe your memories deserve the best protection. 
            We're on a mission to provide secure, accessible, and intelligent media 
            storage for everyone.
          </p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <h3>10K+</h3>
            <p>Active Users</p>
          </div>
          <div className="stat">
            <h3>5M+</h3>
            <p>Photos Stored</p>
          </div>
          <div className="stat">
            <h3>99.9%</h3>
            <p>Uptime</p>
          </div>
        </div>
      </div>

      <div className="story-section">
        <h2>Our Story</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="year">2025</div>
            <div className="content">
              <h3>Founded</h3>
              <p>Media Vault was born from a simple idea: making media storage secure and accessible for everyone.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="year">2026</div>
            <div className="content">
              <h3>Launch</h3>
              <p>Released our first version with basic upload and storage features.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="year">2026</div>
            <div className="content">
              <h3>Growth</h3>
              <p>Reached 10,000+ users and introduced AI-powered features.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="avatar">{member.avatar}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🔒</div>
            <h3>Security First</h3>
            <p>Your data is encrypted and protected with industry-leading security.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">✨</div>
            <h3>Simplicity</h3>
            <p>Beautiful, intuitive design that just works.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h3>Trust</h3>
            <p>We're transparent about how we handle your data.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About