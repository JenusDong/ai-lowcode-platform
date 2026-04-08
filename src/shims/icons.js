var React = (typeof window !== 'undefined' && window.React) || {};

var createFallbackIcon = function(name) {
  return function(props) {
    return React.createElement('span', {
      className: (props && props.className ? props.className + ' ' : '') + 'anticon anticon-' + name.toLowerCase(),
      style: props && props.style || {}
    });
  };
};

var getIconComponent = function(name) {
  return function(props) {
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    var IconComponent = globalIcons[name];
    if (IconComponent) {
      return IconComponent(props);
    }
    return createFallbackIcon(name)(props);
  };
};

var icons = {
  get DashboardOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.DashboardOutlined || getIconComponent('DashboardOutlined');
  },
  get PieChartOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.PieChartOutlined || getIconComponent('PieChartOutlined');
  },
  get LineChartOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.LineChartOutlined || getIconComponent('LineChartOutlined');
  },
  get BarChartOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.BarChartOutlined || getIconComponent('BarChartOutlined');
  },
  get DotChartOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.DotChartOutlined || getIconComponent('DotChartOutlined');
  },
  get AreaChartOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.AreaChartOutlined || getIconComponent('AreaChartOutlined');
  },
  get DashboardFilled() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.DashboardFilled || getIconComponent('DashboardFilled');
  },
  get FunnelPlotOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.FunnelPlotOutlined || getIconComponent('FunnelPlotOutlined');
  },
  get PlusOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.PlusOutlined || getIconComponent('PlusOutlined');
  },
  get MinusOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.MinusOutlined || getIconComponent('MinusOutlined');
  },
  get EditOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.EditOutlined || getIconComponent('EditOutlined');
  },
  get DeleteOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.DeleteOutlined || getIconComponent('DeleteOutlined');
  },
  get SearchOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.SearchOutlined || getIconComponent('SearchOutlined');
  },
  get SettingOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.SettingOutlined || getIconComponent('SettingOutlined');
  },
  get ReloadOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.ReloadOutlined || getIconComponent('ReloadOutlined');
  },
  get CloseOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.CloseOutlined || getIconComponent('CloseOutlined');
  },
  get CloseCircleOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.CloseCircleOutlined || getIconComponent('CloseCircleOutlined');
  },
  get MenuFoldOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.MenuFoldOutlined || getIconComponent('MenuFoldOutlined');
  },
  get MenuUnfoldOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.MenuUnfoldOutlined || getIconComponent('MenuUnfoldOutlined');
  },
  get HomeOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.HomeOutlined || getIconComponent('HomeOutlined');
  },
  get UserOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.UserOutlined || getIconComponent('UserOutlined');
  },
  get TeamOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.TeamOutlined || getIconComponent('TeamOutlined');
  },
  get SafetyCertificateOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.SafetyCertificateOutlined || getIconComponent('SafetyCertificateOutlined');
  },
  get LogoutOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.LogoutOutlined || getIconComponent('LogoutOutlined');
  },
  get ShoppingCartOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.ShoppingCartOutlined || getIconComponent('ShoppingCartOutlined');
  },
  get ShoppingOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.ShoppingOutlined || getIconComponent('ShoppingOutlined');
  },
  get ShopOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.ShopOutlined || getIconComponent('ShopOutlined');
  },
  get GiftOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.GiftOutlined || getIconComponent('GiftOutlined');
  },
  get TagsOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.TagsOutlined || getIconComponent('TagsOutlined');
  },
  get InboxOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.InboxOutlined || getIconComponent('InboxOutlined');
  },
  get DollarOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.DollarOutlined || getIconComponent('DollarOutlined');
  },
  get FileTextOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.FileTextOutlined || getIconComponent('FileTextOutlined');
  },
  get ThunderboltOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.ThunderboltOutlined || getIconComponent('ThunderboltOutlined');
  },
  get FireOutlined() { 
    var globalIcons = (typeof window !== 'undefined' && window.icons) || {};
    return globalIcons.FireOutlined || getIconComponent('FireOutlined');
  },
};

module.exports = icons;
