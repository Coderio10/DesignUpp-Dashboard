import { useState } from 'react'
import Icon from './iconsComponent'

export default function Sidebar() {

    const [currentPage, setCurrentPage] = useState('overview');

    return (
        <>
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
        </>
    )
}