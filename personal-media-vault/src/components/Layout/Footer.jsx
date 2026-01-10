import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [collapsedSections, setCollapsedSections] = useState([])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const toggleSection = (index) => {
    if (!isMobile) return
    
    setCollapsedSections(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index)
      } else {
        return [...prev, index]
      }
    })
  }

  const sections = [
    {
      title: "Product",
      links: [
        { to: "/features", label: "Features" },
        { to: "/pricing", label: "Pricing" },
        { to: "/apps", label: "Mobile Apps" },
        { to: "/api", label: "API" }
      ]
    },
    {
      title: "Company",
      links: [
        { to: "/about", label: "About Us" },
        { to: "/careers", label: "Careers" },
        { to: "/blog", label: "Blog" },
        { to: "/press", label: "Press" }
      ]
    },
    {
      title: "Support",
      links: [
        { to: "/help", label: "Help Center" },
        { to: "/contact", label: "Contact Us" },
        { href: "mailto:support@example.com", label: "Email Support" },
        { href: "tel:+1234567890", label: "Phone Support" }
      ]
    },
    {
      title: "Connect",
      links: [
        { href: "https://twitter.com", label: "Twitter" },
        { href: "https://facebook.com", label: "Facebook" },
        { href: "https://linkedin.com", label: "LinkedIn" },
        { href: "https://instagram.com", label: "Instagram" }
      ]
    }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Top Section: Main Footer Links */}
        <div className="footer-top">
          {sections.map((section, index) => (
            <div 
              key={index} 
              className={`footer-section ${collapsedSections.includes(index) ? 'collapsed' : ''}`}
            >
              <h4 
                onClick={() => toggleSection(index)}
                role={isMobile ? "button" : undefined}
                tabIndex={isMobile ? 0 : -1}
                aria-expanded={!collapsedSections.includes(index)}
              >
                {section.title}
              </h4>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.to ? (
                      <Link to={link.to}>{link.label}</Link>
                    ) : (
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Legal and Copyright */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <Link to="/">
              © {new Date().getFullYear()} Media Vault. All rights reserved.
            </Link>
          </div>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">•</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="separator">•</span>
            <a href="/sitemap.xml">Sitemap</a>
            <span className="separator">•</span>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer