import { useState } from 'react'
import './App.css'

export default function App() {

  const [currentPage, setCurrentPage] = useState('overview');
  const [selectedAdvertiser, setSelectedAdvertiser] = useState(null);
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);


  // Simple Icon Component
  const Icon = ({ name, size = 20 }) => {

    const icons = {
      'bar-chart-3': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg>,
      'users': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
      'settings': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>,
      'log-out': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>,
      'bell': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>,
      'search': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>,
      'plus': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>,
      'more-vertical': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>,
      'clock': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
      'mouse-pointer': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" /><path d="m13 13 6 6" /></svg>,
      'trending-up': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>,
      'file-text': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></svg>,
      'upload': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" /></svg>,
      'chevron-left': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>,
      'chevron-right': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>,
      'filter': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>,
      'download': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>,
      'info': <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
    };

    return icons[name] || null;
  };


  type User = {
    name: string,
    role: string,
    avatar: string
  }

  const user: User = {
    name: 'Oluwaseyi Akeredolu',
    role: 'Admin',
    avatar: '👤'
  };

  const advertisers = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: 'Oluwaseyi Akeredolu',
    advertiserId: 'ADV-2041',
    email: 'oluwaseyiakeredolu2@gmail.com',
    avatar: '👤',
    uploadedAds: 1,
    status: i === 5 || i === 7 || i === 8 ? 'Expired' : 'Active'
  }));

  type Notification = {
    id: number,
    type: string,
    title: string,
    description: string,
    time: string,
    isRead: boolean
  }

  const notifications: Notification = [
    { id: 1, type: 'ad-clicked', title: 'Ad Clicked', description: 'Big Season Sale ad banner was clicked.', time: 'Just now', isRead: false },
    { id: 2, type: 'expiring-ad', title: 'Expiring Ad', description: 'Big Season Sale ad banner will be expiring in 2 days.', time: '1h ago', isRead: true },
    { id: 3, type: 'expiring-ad', title: 'Expiring Ad', description: 'Big Season Sale ad banner will be expiring in 2 days.', time: '1h ago', isRead: true },
    { id: 4, type: 'expiring-ad', title: 'Expiring Ad', description: 'Big Season Sale ad banner will be expiring in 2 days.', time: '1h ago', isRead: true }
  ];



  return (
    <>
      <div className="dashboard">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="logo">
            <div className="logo-icon">
              <div className="logo-circle"></div>
              <div className="logo-semicircle"></div>
            </div>
            <span className="logo-text">DesignUpp <span className="logo-admin">Admin</span></span>
          </div>

          <nav className="nav-menu">
            <button className={`nav-item ${currentPage === 'overview' ? 'active' : ''}`} onClick={() => setCurrentPage('overview')}>
              <Icon name="bar-chart-3" size={20} />
              <span>Overview</span>
            </button>
            <button className={`nav-item ${currentPage === 'ad-management' ? 'active' : ''}`} onClick={() => setCurrentPage('ad-management')}>
              <Icon name="bar-chart-3" size={20} />
              <span>Ad Management</span>
            </button>
            <button className={`nav-item ${currentPage === 'advertisers' ? 'active' : ''}`} onClick={() => setCurrentPage('advertisers')}>
              <Icon name="users" size={20} />
              <span>Advertisers</span>
            </button>
            <button className={`nav-item ${currentPage === 'settings' ? 'active' : ''}`} onClick={() => setCurrentPage('settings')}>
              <Icon name="settings" size={20} />
              <span>Settings</span>
            </button>
          </nav>

          <button className="logout-btn">
            <Icon name="log-out" size={20} />
            <span>Logout</span>
          </button>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <header className="header">
            <div className="header-left">
              {currentPage !== 'overview' && (
                <button className="back-btn" onClick={() => {
                  if (currentPage === 'advertiser-detail') setCurrentPage('advertisers');
                  else if (currentPage === 'add-advertiser') setCurrentPage('advertisers');
                  else if (currentPage === 'invoices') setCurrentPage('advertisers');
                }}>
                  <Icon name="chevron-left" size={24} />
                </button>
              )}
              <h1 className="page-title">
                {currentPage === 'overview' && 'Overview'}
                {currentPage === 'advertisers' && 'Advertisers'}
                {currentPage === 'add-advertiser' && 'Add Advertiser'}
                {currentPage === 'advertiser-detail' && "Advertiser's Details"}
                {currentPage === 'invoices' && 'Invoices'}
              </h1>
            </div>
            <div className="header-right">
              {(currentPage === 'overview' || currentPage === 'advertisers' || currentPage === 'invoices') && (
                <div className="search-bar">
                  <Icon name="search" size={18} />
                  <input type="text" placeholder={
                    currentPage === 'overview' ? 'Search' :
                      currentPage === 'advertisers' ? 'Search by advertiser name, ID' :
                        'Search by Invoice ID, Advertiser, Email'
                  } />
                </div>
              )}
              <button className="notification-btn" onClick={() => setShowNotificationPopup(!showNotificationPopup)}>
                <Icon name="bell" size={20} />
                <span className="notification-badge">4</span>
              </button>
              <div className="user-profile">
                <div className="user-avatar">{user.avatar}</div>
                <div className="user-info">
                  <div className="user-name">{user.name}</div>
                  <div className="user-role">{user.role}</div>
                </div>
              </div>
            </div>
          </header>

          {showNotificationPopup && (
            <div className="notification-popup">
              <div className="notification-popup-header">
                <h3>Notification Center</h3>
                <button className="mark-read-btn">See All</button>
              </div>
              <div className="notification-tabs">
                <button className="notification-tab active">Today</button>
                <button className="notification-tab">This Week</button>
                <button className="notification-tab">All Time</button>
              </div>
              <div className="notification-list">
                {notifications.map(notif => (
                  <div key={notif.id} className={`notification-item ${notif.isRead ? 'read' : ''}`}>
                    <div className={`notification-icon ${notif.type}`}>
                      {notif.type === 'ad-clicked' && <Icon name="mouse-pointer" size={16} />}
                      {notif.type === 'expiring-ad' && <Icon name="clock" size={16} />}
                      {notif.type === 'advertiser-login' && <Icon name="users" size={16} />}
                    </div>
                    <div className="notification-content">
                      <div className="notification-title">{notif.title}</div>
                      <div className="notification-description">{notif.description}</div>
                    </div>
                    <div className="notification-time">{notif.time}</div>
                  </div>
                ))}
              </div>
              <button className="mark-all-read-btn">Mark all as read</button>
            </div>
          )}

          <div className="page-content">
            {currentPage === 'overview' && (
              <div className="overview-page">
                <div className="greeting-section">
                  <h2 className="greeting">Hello Maurice 👋</h2>
                  <div className="time-filters">
                    <button className="time-filter">Today</button>
                    <button className="time-filter">Last 7 Days</button>
                    <button className="time-filter active">Last 30 Days</button>
                    <button className="time-filter">All Time</button>
                  </div>
                </div>

                <div className="stats-grid">
                  {[
                    { label: 'Total Ads', value: '6', icon: 'file-text' },
                    { label: 'Active Ads', value: '20', icon: 'file-text' },
                    { label: 'Expired Ads', value: '10', icon: 'file-text' },
                    { label: 'Advertisers', value: '24', icon: 'users' },
                    { label: 'Total Clicks', value: '2,080', icon: 'mouse-pointer', change: '25.2%' },
                    { label: 'Bounce Rate', value: '35.82%', icon: 'trending-up', change: '50.6%' },
                    { label: 'Average Sessions', value: '20s', icon: 'clock', change: '50.6%' },
                    { label: 'Unique Visitors', value: '31', icon: 'users', change: '50.6%' }
                  ].map((stat, i) => (
                    <div key={i} className="stat-card">
                      <div className="stat-icon blue">
                        <Icon name={stat.icon} size={20} />
                      </div>
                      <div className="stat-content">
                        <div className="stat-label">{stat.label}</div>
                        <div className="stat-value">{stat.value}</div>
                        {stat.change && <div className="stat-change positive">{stat.change}</div>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="chart-section">
                  <h3 className="section-title">Impressions vs Clicks per ad</h3>
                  <div className="chart-legend">
                    <div className="legend-item">
                      <span className="legend-dot impressions"></span>
                      <span>Impressions</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-dot clicks"></span>
                      <span>Clicks</span>
                    </div>
                  </div>
                  <div className="chart-placeholder">
                    <svg viewBox="0 0 800 200" className="line-chart">
                      <polyline points="0,150 100,120 200,80 300,100 400,60 500,90 600,75 700,110 800,90" fill="none" stroke="#4A90E2" strokeWidth="2" />
                      <polyline points="0,170 100,140 200,100 300,120 400,80 500,110 600,95 700,130 800,110" fill="none" stroke="#F5A623" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                <div style={{ marginTop: '24px', textAlign: 'center', color: '#7F8C9A', padding: '40px', background: 'white', borderRadius: '12px' }}>
                  <p style={{ fontSize: '16px', marginBottom: '12px' }}>✨ Explore More Features</p>
                  <p style={{ fontSize: '14px' }}>Navigate to <strong>Advertisers</strong> section to manage advertisers, view invoices, and see detailed analytics</p>
                </div>
              </div>
            )}

            {currentPage === 'advertisers' && (
              <div className="advertisers-page">
                <div className="page-header">
                  <div className="tabs">
                    <button className="tab active">All <span className="tab-count">6</span></button>
                    <button className="tab">Active <span className="tab-count">5</span></button>
                    <button className="tab">Expired <span className="tab-count">1</span></button>
                    <button className="filter-btn">Filter by <Icon name="filter" size={16} /></button>
                  </div>
                  <button className="primary-btn" onClick={() => setCurrentPage('add-advertiser')}>
                    <Icon name="plus" size={18} />
                    Add New Advertiser
                  </button>
                </div>

                <table className="data-table">
                  <thead>
                    <tr>
                      <th><input type="checkbox" /></th>
                      <th>S/N</th>
                      <th>Advertiser Name</th>
                      <th>Advertiser ID</th>
                      <th>Email</th>
                      <th>Uploaded Ads</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {advertisers.slice(0, 8).map((adv, index) => (
                      <tr key={adv.id}>
                        <td><input type="checkbox" /></td>
                        <td>{index + 1}</td>
                        <td>
                          <div className="advertiser-cell">
                            <div className="advertiser-avatar">{adv.avatar}</div>
                            <span>{adv.name}</span>
                          </div>
                        </td>
                        <td>{adv.advertiserId}</td>
                        <td className="email-cell">{adv.email}</td>
                        <td>{adv.uploadedAds}</td>
                        <td>
                          <span className={`status-badge ${adv.status.toLowerCase()}`}>{adv.status}</span>
                        </td>
                        <td>
                          <div className="actions-cell">
                            <button className="action-link" onClick={() => {
                              setSelectedAdvertiser(adv);
                              setCurrentPage('advertiser-detail');
                            }}>view</button>
                            <button className="action-menu"><Icon name="more-vertical" size={18} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="table-footer">
                  <button className="view-invoices-btn" onClick={() => setCurrentPage('invoices')}>View Sent Invoices</button>
                  <div className="pagination">
                    <span className="pagination-info">Showing 8 of 8</span>
                    <div className="pagination-controls">
                      <button className="pagination-btn"><Icon name="chevron-left" size={18} /></button>
                      <button className="pagination-btn active">1</button>
                      <button className="pagination-btn"><Icon name="chevron-right" size={18} /></button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentPage === 'add-advertiser' && (
              <div className="add-advertiser-page">
                <div className="form-container">
                  <h2 className="form-title">Advertiser Details</h2>
                  <div className="form-layout">
                    <div className="upload-section">
                      <div className="profile-upload">
                        <div className="upload-circle"><Icon name="upload" size={24} /></div>
                        <div className="upload-text">Profile Picture</div>
                        <div className="upload-hint">Max: 120KB, PNG, JPEG</div>
                        <button className="browse-btn">Browse file</button>
                      </div>
                    </div>
                    <div className="form-fields">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Enter advertiser's name" />
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="Enter advertiser's email address" />
                      </div>
                      <div className="form-group">
                        <label>Duration</label>
                        <select>
                          <option>Select Duration</option>
                          <option>1 Month</option>
                          <option>3 Months</option>
                          <option>6 Months</option>
                          <option>1 Year</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-actions">
                    <button className="secondary-btn" onClick={() => setCurrentPage('advertisers')}>Cancel</button>
                    <button className="primary-btn">Add</button>
                  </div>
                </div>
              </div>
            )}

            {currentPage === 'advertiser-detail' && selectedAdvertiser && (
              <div className="advertiser-detail-page">
                <div className="detail-header">
                  <h2 className="detail-title">Advertiser's Details</h2>
                  <button className="edit-btn"><span>✏️</span> Edit</button>
                </div>
                <div className="detail-card">
                  <h3 className="card-title">Personal Information</h3>
                  <div className="personal-info">
                    <div className="profile-section">
                      <div className="profile-image">
                        <div className="profile-avatar-large">{selectedAdvertiser.avatar}</div>
                      </div>
                      <div className="profile-details">
                        <div className="detail-row">
                          <div className="detail-item">
                            <div className="detail-label">First Name</div>
                            <div className="detail-value">Oluwaseyi</div>
                          </div>
                          <div className="detail-item">
                            <div className="detail-label">Last Name</div>
                            <div className="detail-value">Akeredolu</div>
                          </div>
                        </div>
                        <div className="detail-row">
                          <div className="detail-item">
                            <div className="detail-label">Email Address</div>
                            <div className="detail-value">{selectedAdvertiser.email}</div>
                          </div>
                          <div className="detail-item">
                            <div className="detail-label">Phone</div>
                            <div className="detail-value">+234 9033995310</div>
                          </div>
                        </div>
                        <div className="detail-row">
                          <div className="detail-item">
                            <div className="detail-label">Advertiser ID</div>
                            <div className="detail-value">{selectedAdvertiser.advertiserId}</div>
                          </div>
                          <div className="detail-item">
                            <div className="detail-label">Status</div>
                            <div className="detail-value">
                              <span className={`status-badge ${selectedAdvertiser.status.toLowerCase()}`}>{selectedAdvertiser.status}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="action-buttons">
                      <button className="send-metrics-btn">📊 Send traffic metrics</button>
                      <button className="remove-btn">Remove</button>
                    </div>
                  </div>
                </div>
                <div className="ads-section">
                  <h3 className="section-title">Uploaded Ads (2)</h3>
                  <div style={{ padding: '40px', textAlign: 'center', color: '#7F8C9A' }}>
                    <p>Ad cards would display here with upload details, status, metrics, etc.</p>
                  </div>
                </div>
              </div>
            )}

            {currentPage === 'invoices' && (
              <div className="invoices-page">
                <div className="page-header">
                  <div className="invoices-header">
                    <h3 className="invoices-title">Invoices <Icon name="info" size={18} /></h3>
                    <div className="invoices-actions">
                      <button className="filter-btn">Filter by <Icon name="filter" size={16} /></button>
                      <button className="export-btn"><Icon name="download" size={16} /> Export</button>
                      <button className="primary-btn"><Icon name="plus" size={18} />Add New Invoice</button>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '60px', textAlign: 'center', color: '#7F8C9A', background: 'white', borderRadius: '12px' }}>
                  <Icon name="file-text" size={48} />
                  <p style={{ marginTop: '16px', fontSize: '16px' }}>Invoice table would display here</p>
                  <p style={{ fontSize: '14px', marginTop: '8px' }}>With invoice IDs, advertisers, dates, amounts, and statuses</p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

    </>
  )
}


