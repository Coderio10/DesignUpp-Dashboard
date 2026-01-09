import { Icon } from '../App';
import type { Advertiser } from '../types';

interface AdvertisersPageProps {
  advertisers: Advertiser[];
  onAddClick: () => void;
  onViewClick: (advertiser: Advertiser) => void;
  onViewInvoicesClick: () => void;
}

export const AdvertisersPage: React.FC<AdvertisersPageProps> = ({
  advertisers,
  onAddClick,
  onViewClick,
  onViewInvoicesClick
}) => {
  return (
    <div className="advertisers-page">
      <div className="page-header">
        <div className="tabs">
          <button className="tab active">All <span className="tab-count">6</span></button>
          <button className="tab">Active <span className="tab-count">5</span></button>
          <button className="tab">Expired <span className="tab-count">1</span></button>
          <button className="filter-btn">Filter by <Icon name="filter" size={16} /></button>
        </div>
        <button className="primary-btn" onClick={onAddClick}>
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
                  <button className="action-link" onClick={() => onViewClick(adv)}>view</button>
                  <button className="action-menu"><Icon name="more-vertical" size={18} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="table-footer">
        <button className="view-invoices-btn" onClick={onViewInvoicesClick}>View Sent Invoices</button>
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
  );
};
