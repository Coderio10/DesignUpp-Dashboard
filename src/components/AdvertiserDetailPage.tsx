import type { Advertiser } from '../types';
import { Icon } from '../App';

interface AdvertiserDetailPageProps {
  advertiser: Advertiser;
}

export const AdvertiserDetailPage: React.FC<AdvertiserDetailPageProps> = ({ advertiser }) => {
  return (
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
              <div className="profile-avatar-large">{advertiser.avatar}</div>
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
                  <div className="detail-value">{advertiser.email}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Phone</div>
                  <div className="detail-value">+234 9033995310</div>
                </div>
              </div>
              <div className="detail-row">
                <div className="detail-item">
                  <div className="detail-label">Advertiser ID</div>
                  <div className="detail-value">{advertiser.advertiserId}</div>
                </div>
                <div className="detail-item">
                  <div className="detail-label">Status</div>
                  <div className="detail-value">
                    <span className={`status-badge ${advertiser.status.toLowerCase()}`}>{advertiser.status}</span>
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
  );
};
