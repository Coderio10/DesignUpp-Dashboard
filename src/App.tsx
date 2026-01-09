import { useState } from 'react'
import './App.css'
import * as FiIcons from 'react-icons/fi'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { OverviewPage } from './components/OverviewPage'
import { AdvertisersPage } from './components/AdvertisersPage'
import { AddAdvertiserPage } from './components/AddAdvertiserPage'
import { AdvertiserDetailPage } from './components/AdvertiserDetailPage'
import { InvoicesPage } from './components/InvoicesPage'
import type { Advertiser, Notification, User } from './types'

const iconMap: Record<string, React.ComponentType<any>> = {
  'bar-chart-3': FiIcons.FiBarChart2,
  'users': FiIcons.FiUsers,
  'settings': FiIcons.FiSettings,
  'log-out': FiIcons.FiLogOut,
  'chevron-left': FiIcons.FiChevronLeft,
  'search': FiIcons.FiSearch,
  'bell': FiIcons.FiBell,
  'mouse-pointer': FiIcons.FiMousePointer,
  'clock': FiIcons.FiClock,
  'file-text': FiIcons.FiFileText,
  'filter': FiIcons.FiFilter,
  'plus': FiIcons.FiPlus,
  'more-vertical': FiIcons.FiMoreVertical,
  'chevron-right': FiIcons.FiChevronRight,
  'upload': FiIcons.FiUpload,
  'trending-up': FiIcons.FiTrendingUp,
  'info': FiIcons.FiInfo,
  'download': FiIcons.FiDownload,
};

interface IconProps {
  name: string;
  size?: number;
}

export const Icon = ({ name, size = 20 }: IconProps) => {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} />;
};

export default function App() {

  const [currentPage, setCurrentPage] = useState('overview');
  const [selectedAdvertiser, setSelectedAdvertiser] = useState<Advertiser | null>(null);
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);

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

  const notifications: Notification[] = [
    { id: 1, type: 'ad-clicked', title: 'Ad Clicked', description: 'Big Season Sale ad banner was clicked.', time: 'Just now', isRead: false },
    { id: 2, type: 'expiring-ad', title: 'Expiring Ad', description: 'Big Season Sale ad banner will be expiring in 2 days.', time: '1h ago', isRead: true },
    { id: 3, type: 'expiring-ad', title: 'Expiring Ad', description: 'Big Season Sale ad banner will be expiring in 2 days.', time: '1h ago', isRead: true },
    { id: 4, type: 'expiring-ad', title: 'Expiring Ad', description: 'Big Season Sale ad banner will be expiring in 2 days.', time: '1h ago', isRead: true }
  ];



  return (
    <>
      <div className="dashboard">
        {/* Sidebar Component */}
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />

        {/* Main Content */}
        <main className="main-content">
          {/* Header Component */}
          <Header
            currentPage={currentPage}
            onBackClick={() => {
              if (currentPage === 'advertiser-detail') setCurrentPage('advertisers');
              else if (currentPage === 'add-advertiser') setCurrentPage('advertisers');
              else if (currentPage === 'invoices') setCurrentPage('advertisers');
            }}
            user={user}
            showNotificationPopup={showNotificationPopup}
            onNotificationToggle={() => setShowNotificationPopup(!showNotificationPopup)}
            notifications={notifications}
          />

          <div className="page-content">
            {currentPage === 'overview' && <OverviewPage />}

            {currentPage === 'advertisers' && (
              <AdvertisersPage
                advertisers={advertisers}
                onAddClick={() => setCurrentPage('add-advertiser')}
                onViewClick={(adv) => {
                  setSelectedAdvertiser(adv);
                  setCurrentPage('advertiser-detail');
                }}
                onViewInvoicesClick={() => setCurrentPage('invoices')}
              />
            )}

            {currentPage === 'add-advertiser' && (
              <AddAdvertiserPage
                onCancel={() => setCurrentPage('advertisers')}
                onAdd={() => setCurrentPage('advertisers')}
              />
            )}

            {currentPage === 'advertiser-detail' && selectedAdvertiser && (
              <AdvertiserDetailPage advertiser={selectedAdvertiser} />
            )}

            {currentPage === 'invoices' && (
              <InvoicesPage
                onDownloadClick={() => {}}
                onAddClick={() => {}}
              />
            )}
          </div>
        </main>
      </div>

    </>
  )
}


