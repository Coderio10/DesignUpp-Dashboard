import { Icon } from '../App';

interface InvoicesPageProps {
  onDownloadClick: () => void;
  onAddClick: () => void;
}

export const InvoicesPage: React.FC<InvoicesPageProps> = ({ onDownloadClick, onAddClick }) => {
  return (
    <div className="invoices-page">
      <div className="page-header">
        <div className="invoices-header">
          <h3 className="invoices-title">Invoices <Icon name="info" size={18} /></h3>
          <div className="invoices-actions">
            <button className="filter-btn">Filter by <Icon name="filter" size={16} /></button>
            <button className="export-btn" onClick={onDownloadClick}><Icon name="download" size={16} /> Export</button>
            <button className="primary-btn" onClick={onAddClick}><Icon name="plus" size={18} />Add New Invoice</button>
          </div>
        </div>
      </div>
      <div style={{ padding: '60px', textAlign: 'center', color: '#7F8C9A', background: 'white', borderRadius: '12px' }}>
        <Icon name="file-text" size={48} />
        <p style={{ marginTop: '16px', fontSize: '16px' }}>Invoice table would display here</p>
        <p style={{ fontSize: '14px', marginTop: '8px' }}>With invoice IDs, advertisers, dates, amounts, and statuses</p>
      </div>
    </div>
  );
};
