// Simplified components for debugging CodeSandbox preview
// Pure React + div implementation, no antd dependencies

const React = require('react') || window.React || {}

const SimpleAdminLayout = ({ children, className, style }) => {
  return React.createElement('div', {
    className: `admin-layout-simple ${className || ''}`,
    style: style,
    'data-component': 'AdminLayout'
  }, 
    React.createElement('div', { className: 'admin-layout-header' }, 'Admin Layout Header'),
    React.createElement('div', { className: 'admin-layout-content' }, children || 'Content Area')
  )
}

const SimpleTabPane = ({ children, tabKey, activeTabKey, tab }) => {
  const isActive = activeTabKey === tabKey
  return React.createElement('div', {
    className: `tab-pane-simple ${isActive ? 'active' : ''}`,
    style: { display: isActive ? 'block' : 'none' },
    'data-tab-key': tabKey,
    'data-active': String(isActive)
  },
    React.createElement('div', { className: 'tab-pane-header' }, `Tab: ${tab || tabKey}`),
    React.createElement('div', { className: 'tab-pane-body' }, children || `Content for ${tabKey}`)
  )
}

const MallComponents = {
  AdminLayout: SimpleAdminLayout,
  TabPane: SimpleTabPane,
}

module.exports = MallComponents
if (typeof window !== 'undefined') {
  window.MallComponents = MallComponents
}
