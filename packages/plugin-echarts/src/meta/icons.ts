import React from 'react';

const getIconComponent = (iconName: string) => {
  const icons = (window as any).icons;
  if (!icons || !icons[iconName]) {
    console.warn(`[PluginEcharts] Icon "${iconName}" not found in window.icons`);
    return null;
  }
  return icons[iconName];
};

export const Icons = {
  get pie() {
    const Icon = getIconComponent('PieChartOutlined');
    return Icon ? React.createElement(Icon) : null;
  },
  get line() {
    const Icon = getIconComponent('LineChartOutlined');
    return Icon ? React.createElement(Icon) : null;
  },
  get bar() {
    const Icon = getIconComponent('BarChartOutlined');
    return Icon ? React.createElement(Icon) : null;
  },
  get area() {
    const Icon = getIconComponent('AreaChartOutlined');
    return Icon ? React.createElement(Icon) : null;
  },
  get scatter() {
    const Icon = getIconComponent('DotChartOutlined');
    return Icon ? React.createElement(Icon) : null;
  },
  get radar() {
    const Icon = getIconComponent('DotChartOutlined');
    return Icon ? React.createElement(Icon) : null;
  },
  get gauge() {
    const Icon = getIconComponent('DashboardFilled');
    return Icon ? React.createElement(Icon) : null;
  },
  get funnel() {
    const Icon = getIconComponent('FunnelPlotOutlined');
    return Icon ? React.createElement(Icon) : null;
  },
};