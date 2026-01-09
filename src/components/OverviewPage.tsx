import { StatCard } from './StatCard';

export const OverviewPage: React.FC = () => {
  const stats = [
    { label: 'Total Ads', value: '6', icon: 'file-text' },
    { label: 'Active Ads', value: '20', icon: 'file-text' },
    { label: 'Expired Ads', value: '10', icon: 'file-text' },
    { label: 'Advertisers', value: '24', icon: 'users' },
    { label: 'Total Clicks', value: '2,080', icon: 'mouse-pointer', change: '25.2%' },
    { label: 'Bounce Rate', value: '35.82%', icon: 'trending-up', change: '50.6%' },
    { label: 'Average Sessions', value: '20s', icon: 'clock', change: '50.6%' },
    { label: 'Unique Visitors', value: '31', icon: 'users', change: '50.6%' }
  ];

  return (
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
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
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
  );
};
