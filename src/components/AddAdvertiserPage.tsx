import { Icon } from '../App';

interface AddAdvertiserPageProps {
  onCancel: () => void;
  onAdd: () => void;
}

export const AddAdvertiserPage: React.FC<AddAdvertiserPageProps> = ({ onCancel, onAdd }) => {
  return (
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
          <button className="secondary-btn" onClick={onCancel}>Cancel</button>
          <button className="primary-btn" onClick={onAdd}>Add</button>
        </div>
      </div>
    </div>
  );
};
