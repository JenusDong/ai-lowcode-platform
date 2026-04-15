import React from 'react';

export interface ChartPanelProps {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const ChartPanel: React.FC<ChartPanelProps> = ({ title, children, style = {} }) => {
  return (
    <div
      style={{
        background: 'rgba(26, 144, 255, 0.05)',
        border: '1px solid #18579e',
        borderRadius: '8px',
        padding: '20px',
        ...style
      }}
    >
      <div
        style={{
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '15px'
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
};

export default ChartPanel;
