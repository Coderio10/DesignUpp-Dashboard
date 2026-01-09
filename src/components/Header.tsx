import { Icon } from '../App';
import '../styles/Header.css';

type User = {
  name: string;
  role: string;
  avatar: string;
};

type Notification = {
  id: number;
  type: string;
  title: string;
  description: string;
  time: string;
  isRead: boolean;
};

type HeaderProps = {
  currentPage: string;
  onBackClick: () => void;
  user: User;
  showNotificationPopup: boolean;
  onNotificationToggle: () => void;
  notifications: Notification[];
};

export default function Header({
  currentPage,
  onBackClick,
  user,
  showNotificationPopup,
  onNotificationToggle,
  notifications
}: HeaderProps) {
  return (
    <>
      <header className="header">
        <div className="header-left">
          {currentPage !== 'overview' && (
            <button className="back-btn" onClick={onBackClick}>
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
              <input
                type="text"
                placeholder={
                  currentPage === 'overview'
                    ? 'Search'
                    : currentPage === 'advertisers'
                      ? 'Search by advertiser name, ID'
                      : 'Search by Invoice ID, Advertiser, Email'
                }
              />
            </div>
          )}
          <button className="notification-btn" onClick={onNotificationToggle}>
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
            {notifications.map((notif) => (
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
    </>
  );
}
