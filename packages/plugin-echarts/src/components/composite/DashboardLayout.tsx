import React from 'react';

export interface DashboardLayoutProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  title = '数据可视化大屏',
  subtitle,
  backgroundColor = '#0a1a3a',
  children,
  style = {}
}) => {
  return (
    <div
      style={{
        backgroundColor,
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
        fontFamily: 'Arial, sans-serif',
        ...style
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1
          style={{
            fontSize: '36px',
            color: '#ffffff',
            fontWeight: 'bold',
            textShadow: '0 0 20px rgba(26, 144, 255, 0.5)',
            letterSpacing: '2px',
            margin: 0
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: '14px',
              color: '#00ffcc',
              marginTop: '10px',
              marginBottom: 0
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
