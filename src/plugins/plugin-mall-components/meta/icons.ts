import React from 'react';

const getIconComponent = (iconName: string) => {
  const icons = (window as any).icons;
  if (!icons || !icons[iconName]) {
    console.warn(`[MallComponents] Icon "${iconName}" not found in window.icons`);
    return null;
  }
  return icons[iconName];
};

export const Icons = {
  get list() {
    const Icon = getIconComponent('BarsOutlined');
    return Icon ? React.createElement(Icon) : null;
  },
  get form() {
    const Icon = getIconComponent('FormOutlined');
    return Icon ? React.createElement(Icon) : null;
  },
  get gift() {
    const Icon = getIconComponent('GiftOutlined');
    return Icon ? React.createElement(Icon) : null;
  },
  get star() {
    const Icon = getIconComponent('StarOutlined');
    return Icon ? React.createElement(Icon) : null;
  },
  get user() {
    const Icon = getIconComponent('UserOutlined');
    return Icon ? React.createElement(Icon) : null;
  },
  get team() {
    const Icon = getIconComponent('TeamOutlined');
    return Icon ? React.createElement(Icon) : null;
  },
  get file() {
    const Icon = getIconComponent('FileOutlined');
    return Icon ? React.createElement(Icon) : null;
  },
};
