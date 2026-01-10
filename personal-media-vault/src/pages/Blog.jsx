import './Blog.css'

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Organize Your Digital Photos',
      excerpt: 'Learn the best practices for organizing thousands of photos efficiently.',
      author: 'Edwin Sinya',
      date: '2026-01-05',
      readTime: '5 min read',
      category: 'Tips & Tricks'
    },
    {
      id: 2,
      title: 'The Future of Cloud Storage Security',
      excerpt: 'Exploring new security measures for protecting your digital assets.',
      author: 'Daniel Kinara',
      date: '2026-01-10',
      readTime: '8 min read',
      category: 'Security'
    },
    {
      id: 3,
      title: 'Introducing AI-Powered Photo Organization',
      excerpt: 'How AI is revolutionizing the way we organize and find our photos.',
      author: 'Mike Ombura',
      date: '2026-01-05',
      readTime: '6 min read',
      category: 'Product Update'
    },
    {
      id: 4,
      title: 'Top 10 Photography Storage Tips',
      excerpt: 'Essential tips every photographer should know about digital storage.',
      author: 'Emma Wilson',
      date: '2026-01-08',
      readTime: '4 min read',
      category: 'Photography'
    },
    {
      id: 5,
      title: 'Building Scalable Cloud Infrastructure',
      excerpt: 'A technical deep dive into our infrastructure architecture.',
      author: 'David Kim',
      date: '2026-01-09',
      readTime: '10 min read',
      category: 'Engineering'
    },
    {
      id: 6,
      title: 'Why Privacy Matters in Media Storage',
      excerpt: 'Understanding the importance of privacy in the digital age.',
      author: 'Lisa Wilkis',
      date: '2026-02-15',
      readTime: '7 min read',
      category: 'Privacy'
    }
  ]

  const categories = ['All', 'Product Update', 'Security', 'Tips & Tricks', 'Engineering', 'Photography', 'Privacy']

  return (
    <div className="blog-page">
      <div className="page-header">
        <h1>Blog & Insights</h1>
        <p>Latest news, tips, and updates from Media Vault</p>
      </div>

      <div className="featured-post">
        <div className="featured-content">
          <span className="featured-badge">Featured</span>
          <h2>Introducing Media Vault 2.0</h2>
          <p className="excerpt">
            We're excited to announce our biggest update yet with new AI features, 
            enhanced security, and a completely redesigned interface.
          </p>
          <div className="meta">
            <span className="author">By Daniel Kinara</span>
            <span className="date">January 10, 2026</span>
            <span className="read-time">8 min read</span>
          </div>
          <a href="#read-more" className="read-more">Read Article →</a>
        </div>
        <div className="featured-image">
          <div className="image-placeholder">📰</div>
        </div>
      </div>

      <div className="blog-content">
        <div className="sidebar">
          <div className="categories">
            <h3>Categories</h3>
            <ul>
              {categories.map((category, index) => (
                <li key={index}>
                  <button className={`category-btn ${index === 0 ? 'active' : ''}`}>
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="newsletter">
            <h3>Stay Updated</h3>
            <p>Get the latest articles delivered to your inbox</p>
            <div className="subscribe-form">
              <input type="email" placeholder="Your email address" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <span className="category">{post.category}</span>
                <span className="read-time">{post.readTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p className="excerpt">{post.excerpt}</p>
              <div className="post-footer">
                <div className="author-info">
                  <div className="author-avatar">{post.author.charAt(0)}</div>
                  <div>
                    <div className="author">{post.author}</div>
                    <div className="date">{post.date}</div>
                  </div>
                </div>
                <a href={`/blog/${post.id}`} className="read-link">Read →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog