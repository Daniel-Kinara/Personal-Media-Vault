import './Api.css'

const Api = () => {
  const endpoints = [
    {
      method: 'POST',
      endpoint: '/api/v1/upload',
      description: 'Upload media files',
      auth: 'Bearer Token'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/media',
      description: 'List all media',
      auth: 'Bearer Token'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/media/:id',
      description: 'Get media details',
      auth: 'Bearer Token'
    },
    {
      method: 'DELETE',
      endpoint: '/api/v1/media/:id',
      description: 'Delete media',
      auth: 'Bearer Token'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/stats',
      description: 'Get user statistics',
      auth: 'Bearer Token'
    }
  ]

  const codeExample = `const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await fetch('https://api.mediavault.com/v1/upload', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: formData
  });
  
  return await response.json();
};`

  return (
    <div className="api-page">
      <div className="page-header">
        <h1>API Documentation</h1>
        <p>Integrate Media Vault into your applications</p>
      </div>

      <div className="api-overview">
        <div className="overview-card">
          <h3>Quick Start</h3>
          <p>Get started with our API in minutes</p>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <p>Get your API key from Dashboard</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <p>Make your first request</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <p>Integrate into your app</p>
            </div>
          </div>
          <a href="/dashboard" className="api-button">Get API Key</a>
        </div>

        <div className="overview-card">
          <h3>Features</h3>
          <ul className="features">
            <li>RESTful API</li>
            <li>JSON responses</li>
            <li>Rate limiting</li>
            <li>Webhook support</li>
            <li>SDKs available</li>
            <li>24/7 support</li>
          </ul>
        </div>
      </div>

      <div className="endpoints-section">
        <h2>API Endpoints</h2>
        <div className="endpoints-table">
          <div className="table-header">
            <div className="col method">Method</div>
            <div className="col endpoint">Endpoint</div>
            <div className="col description">Description</div>
            <div className="col auth">Authentication</div>
          </div>
          {endpoints.map((endpoint, index) => (
            <div key={index} className="table-row">
              <div className="col method">
                <span className={`method-badge ${endpoint.method.toLowerCase()}`}>
                  {endpoint.method}
                </span>
              </div>
              <div className="col endpoint code">{endpoint.endpoint}</div>
              <div className="col description">{endpoint.description}</div>
              <div className="col auth">{endpoint.auth}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="code-example">
        <h3>Example: Upload File</h3>
        <pre>
          <code>{codeExample}</code>
        </pre>
      </div>

      <div className="sdk-section">
        <h2>SDKs & Libraries</h2>
        <div className="sdk-grid">
          <div className="sdk-card">
            <div className="sdk-icon">⚡</div>
            <h4>JavaScript</h4>
            <code>npm install media-vault-sdk</code>
          </div>
          <div className="sdk-card">
            <div className="sdk-icon">🐍</div>
            <h4>Python</h4>
            <code>pip install media-vault</code>
          </div>
          <div className="sdk-card">
            <div className="sdk-icon">☕</div>
            <h4>Java</h4>
            <code>&lt;dependency&gt;...&lt;/dependency&gt;</code>
          </div>
          <div className="sdk-card">
            <div className="sdk-icon">🦀</div>
            <h4>Rust</h4>
            <code>cargo add media-vault</code>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Api