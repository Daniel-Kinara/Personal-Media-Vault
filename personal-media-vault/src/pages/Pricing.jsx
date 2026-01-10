import './Pricing.css'

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        '5 GB Storage',
        'Basic Upload',
        'Mobile Access',
        'Community Support',
        'File Preview'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: 'per month',
      features: [
        '100 GB Storage',
        'Unlimited Upload',
        'Priority Support',
        'Advanced Analytics',
        'Auto Backup',
        'Custom Branding'
      ],
      buttonText: 'Try Free for 14 Days',
      popular: true
    },
    {
      name: 'Business',
      price: '$29.99',
      period: 'per month',
      features: [
        '1 TB Storage',
        'Team Collaboration',
        '24/7 Phone Support',
        'API Access',
        'SSO Integration',
        'Custom Workflows',
        'Dedicated Account Manager'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <div className="pricing-page">
      <div className="page-header">
        <h1>Simple, Transparent Pricing</h1>
        <p>Choose the perfect plan for your needs</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            
            <div className="plan-header">
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">/{plan.period}</span>
              </div>
            </div>

            <ul className="features-list">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="check-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a 
              href={plan.name === 'Free' ? '/register' : '/dashboard'} 
              className={`select-button ${plan.popular ? 'primary' : 'secondary'}`}
            >
              {plan.buttonText}
            </a>
          </div>
        ))}
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Can I change plans later?</h3>
            <p>Yes, you can upgrade or downgrade your plan at any time.</p>
          </div>
          <div className="faq-item">
            <h3>Is there a free trial?</h3>
            <p>All paid plans come with a 14-day free trial, no credit card required.</p>
          </div>
          <div className="faq-item">
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, PayPal, and bank transfers.</p>
          </div>
          <div className="faq-item">
            <h3>Can I get a refund?</h3>
            <p>Yes, we offer a 30-day money-back guarantee on all annual plans.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing