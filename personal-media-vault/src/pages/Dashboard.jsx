import { useState, useEffect } from 'react'
import MediaUpload from '../components/Media/MediaUpload'
import MediaGallery from '../components/Media/MediaGallery'
import LoadingSpinner from '../components/Common/LoadingSpinner'
import './Dashboard.css'

const Dashboard = () => {
  const [media, setMedia] = useState([])
  const [stats, setStats] = useState({
    total: 0,
    images: 0,
    videos: 0,
    totalSize: 0
  })
  const [isLoading, setIsLoading] = useState(true)

  const loadMedia = () => {
    setIsLoading(true)
    setTimeout(() => {
      const storedMedia = JSON.parse(localStorage.getItem('media') || '[]')
      setMedia(storedMedia)
      
      // Calculate statistics
      const stats = storedMedia.reduce((acc, item) => {
        acc.total++
        if (item.type === 'image') acc.images++
        if (item.type === 'video') acc.videos++
        acc.totalSize += item.size || 0
        return acc
      }, { total: 0, images: 0, videos: 0, totalSize: 0 })
      
      setStats(stats)
      setIsLoading(false)
    }, 500)
  }

  useEffect(() => {
    loadMedia()
  }, [])

  const formatSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Media Dashboard</h1>
        <p>Manage your photos and videos</p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>{stats.total}</h3>
            <p>Total Files</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🖼️</div>
          <div className="stat-content">
            <h3>{stats.images}</h3>
            <p>Images</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🎥</div>
          <div className="stat-content">
            <h3>{stats.videos}</h3>
            <p>Videos</p>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">💾</div>
          <div className="stat-content">
            <h3>{formatSize(stats.totalSize)}</h3>
            <p>Total Size</p>
          </div>
        </div>
      </div>
      
      <MediaUpload onUpload={loadMedia} />
      
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <MediaGallery media={media} onDelete={loadMedia} />
      )}
    </div>
  )
}

export default Dashboard