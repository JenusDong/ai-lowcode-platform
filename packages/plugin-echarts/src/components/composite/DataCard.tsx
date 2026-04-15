import React from 'react';

export interface DataCardProps {
  title: string;
  value: string | number;
  unit?: string;
  trend?: {
    value: string;
    type: 'up' | 'down' | 'stable';
  };
  icon?: string;
  color?: string;
  style?: React.CSSProperties;
}

const DataCard: React.FC<DataCardProps> = ({
  title,
  value,
  unit = '',
  trend,
  icon,
  color = '#1a90ff',
  style = {}
}) => {
  const trendColor = trend?.type === 'up' ? '#52c41a' : trend?.type === 'down' ? '#d94e5d' : '#ffcc00';
  const trendIcon = trend?.type === 'up' ? '↑' : trend?.type === 'down' ? '↓' : '→';

  return (
    <div
      style={{
        flex: 1,
        background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`,
        border: `1px solid ${color}`,
        borderRadius: '8px',
        padding: '20px',
        boxShadow: `0 4px 15px ${color}20`,
        ...style
      }}
    >
      <div style={{ color, fontSize: '14px', marginBottom: '10px' }}>
        {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
        {title}
      </div>
      <div style={{ color: '#ffffff', fontSize: '32px', fontWeight: 'bold' }}>
        {value}
        {unit && <span style={{ fontSize: '16px', marginLeft: '4px' }}>{unit}</span>}
      </div>
      {trend && (
        <div style={{ color: trendColor, fontSize: '12px', marginTop: '5px' }}>
          {trendIcon} {trend.value}
        </div>
      )}
    </div>
  );
};

export default DataCard;
