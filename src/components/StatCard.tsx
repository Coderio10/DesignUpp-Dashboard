import { Icon } from '../App';

interface StatCardProps {
  label: string;
  value: string;
  icon: string;
  change?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, icon, change }) => {
  return (
    <div className="stat-card">
      <div className="stat-icon blue">
        <Icon name={icon} size={20} />
      </div>
      <div className="stat-content">
        <div className="stat-label">{label}</div>
        <div className="stat-value">{value}</div>
        {change && <div className="stat-change positive">{change}</div>}
      </div>
    </div>
  );
};
