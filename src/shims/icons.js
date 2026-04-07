var React = (typeof window !== 'undefined' && window.React) || {};

var createIcon = function(name) {
  return function(props) {
    var className = props && props.className ? props.className + ' anticon' : 'anticon';
    return React.createElement('svg', {
      className: className,
      viewBox: '0 0 1024 1024',
      width: '1em',
      height: '1em',
      fill: 'currentColor',
      style: props && props.style || {}
    });
  };
};

var icons = {
  // ========== 图表类 ==========
  PieChartOutlined: createIcon('PieChartOutlined'),
  LineChartOutlined: createIcon('LineChartOutlined'),
  BarChartOutlined: createIcon('BarChartOutlined'),
  DotChartOutlined: createIcon('DotChartOutlined'),
  AreaChartOutlined: createIcon('AreaChartOutlined'),
  
  // ========== 操作类 ==========
  DashboardFilled: createIcon('DashboardFilled'),
  FunnelPlotOutlined: createIcon('FunnelPlotOutlined'),
  PlusOutlined: createIcon('PlusOutlined'),
  MinusOutlined: createIcon('MinusOutlined'),
  EditOutlined: createIcon('EditOutlined'),
  DeleteOutlined: createIcon('DeleteOutlined'),
  SearchOutlined: createIcon('SearchOutlined'),
  SettingOutlined: createIcon('SettingOutlined'),
  ReloadOutlined: createIcon('ReloadOutlined'),
  CloseOutlined: createIcon('CloseOutlined'),
  CloseCircleOutlined: createIcon('CloseCircleOutlined'),
  
  // ========== 导航类 ==========
  MenuFoldOutlined: createIcon('MenuFoldOutlined'),
  MenuUnfoldOutlined: createIcon('MenuUnfoldOutlined'),
  HomeOutlined: createIcon('HomeOutlined'),
  
  // ========== 用户与权限类 ==========
  UserOutlined: createIcon('UserOutlined'),
  TeamOutlined: createIcon('TeamOutlined'),
  SafetyCertificateOutlined: createIcon('SafetyCertificateOutlined'),
  LogoutOutlined: createIcon('LogoutOutlined'),
  
  // ========== 商城与商品类 ==========
  ShoppingCartOutlined: createIcon('ShoppingCartOutlined'),
  ShoppingOutlined: createIcon('ShoppingOutlined'),
  ShopOutlined: createIcon('ShopOutlined'),
  GiftOutlined: createIcon('GiftOutlined'),
  TagsOutlined: createIcon('TagsOutlined'),
  InboxOutlined: createIcon('InboxOutlined'),
  DollarOutlined: createIcon('DollarOutlined'),
  
  // ========== 文件与内容类 ==========
  FileTextOutlined: createIcon('FileTextOutlined'),
  
  // ========== 营销与活动类 ==========
  ThunderboltOutlined: createIcon('ThunderboltOutlined'),
  FireOutlined: createIcon('FireOutlined'),
  
  // ========== 仪表盘类 ==========
  DashboardOutlined: createIcon('DashboardOutlined'),
};

if (typeof window !== 'undefined') {
  window.icons = icons;
}

module.exports = icons;
