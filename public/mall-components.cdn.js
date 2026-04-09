(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MallComponents = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {
  'use strict';

  // Check if React is available
  if (typeof React === 'undefined') {
    console.error('[MallComponents] React is not loaded!');
    return {};
  }

  console.log('[MallComponents CDN] Loading...');

  // Styles
  var styles = '\
.admin-layout{display:flex;height:100vh;width:100%;overflow:hidden;background-color:#f0f2f5}\
.sidebar-container{width:256px;height:100vh;background:linear-gradient(180deg,#001529 0%,#002140 100%);transition:all .3s;overflow-y:auto;overflow-x:hidden;flex-shrink:0;z-index:10;box-shadow:2px 0 8px rgba(0,0,0,.15)}\
.sidebar-logo{height:64px;display:flex;align-items:center;justify-content:center;padding:16px;border-bottom:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.02)}\
.logo-text{color:#fff;font-size:20px;font-weight:600;white-space:nowrap;letter-spacing:1px}\
.logo-icon{color:#fff;font-size:24px;font-weight:700}\
.sidebar-container.collapsed{width:80px}\
.layout-right{flex:1;display:flex;flex-direction:column;overflow:hidden;min-width:0}\
.navbar-container{height:64px;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.06);display:flex;align-items:center;justify-content:space-between;padding:0 24px;z-index:9;flex-shrink:0}\
.hamburger-btn{width:40px;height:40px;border:none;background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:8px;font-size:18px;color:rgba(0,0,0,.65);transition:all .3s}\
.hamburger-btn:hover{background:rgba(24,144,255,.08);color:#1890ff}\
.user-info{cursor:pointer;display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:8px;transition:all .3s}\
.user-info:hover{background:rgba(0,0,0,.04)}\
.user-avatar{background:linear-gradient(135deg,#1890ff 0%,#096dd9 100%)}\
.username{color:rgba(0,0,0,.85);font-size:14px;font-weight:500}\
.main-content{flex:1;display:flex;flex-direction:column;overflow:hidden;background:#f0f2f5}\
.tab-bar-container{background:#fff;display:flex;align-items:center;border-bottom:1px solid #e8e8e8;padding:0 16px;height:44px;flex-shrink:0;box-shadow:0 1px 4px rgba(0,0,0,.04)}\
.tab-bar-scroll{flex:1;overflow-x:auto;overflow-y:hidden;white-space:nowrap;display:flex;align-items:center;gap:8px}\
.tab-item{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;cursor:pointer;border-radius:4px 4px 0 0;position:relative;transition:all .25s;height:36px;font-size:13px;color:rgba(0,0,0,.65);background:transparent;border:1px solid transparent;border-bottom:none;margin-bottom:-1px}\
.tab-item:hover{color:#1890ff;background:rgba(24,144,255,.06)}\
.tab-item.active{color:#1890ff;background:#fff;border-color:#e8e8e8;font-weight:500}\
.tab-item.active::after{content:"";position:absolute;bottom:-1px;left:0;right:0;height:2px;background:linear-gradient(90deg,#1890ff 0%,#096dd9 100%)}\
.tab-close-btn{display:flex;align-items:center;justify-content:center;width:16px;height:16px;border-radius:50%;opacity:0;transition:all .2s;margin-left:4px}\
.tab-close-btn.visible{opacity:1}\
.tab-close-btn:hover{background:rgba(0,0,0,.15);color:#fff}\
.close-all-btn{width:32px;height:32px;border:none;background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;border-radius:8px;color:rgba(0,0,0,.45);transition:all .2s}\
.close-all-btn:hover{background:rgba(255,77,79,.08);color:#ff4d4f}\
.content-wrapper{flex:1;overflow:auto;background:#f0f2f5;padding:24px}\
.page-container{min-height:100%;background:#fff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,.06);padding:24px}\
.tab-pane{display:none}\
.tab-pane--active{display:block}\
';

  // Inject styles
  if (typeof document !== 'undefined') {
    var styleEl = document.createElement('style');
    styleEl.textContent = styles;
    document.head.appendChild(styleEl);
    console.log('[MallComponents CDN] Styles injected');
  }

  // Helper: createElement with props
  var h = React.createElement;

  // TabPane Component
  function TabPane(props) {
    var isActive = props.activeTabKey === props.tabKey;
    return h('div', {
      className: 'tab-pane' + (isActive ? ' tab-pane--active' : ''),
      'data-tab-key': props.tabKey,
      'data-active': isActive ? 'true' : 'false'
    }, props.children);
  }

  // AdminLayout Component (simplified)
  function AdminLayout(props) {
    var children = props.children;
    
    return h('div', { className: 'admin-layout' },
      h('div', { className: 'sidebar-container' },
        h('div', { className: 'sidebar-logo' },
          h('span', { className: 'logo-text' }, 
            'Mall Admin@',
            h('span', { 
              style: { 
                marginLeft: '8px', 
                padding: '2px 8px', 
                background: '#fa8c16', 
                color: '#fff', 
                borderRadius: '4px', 
                fontSize: '10px' 
              } 
            }, 'CDN')
          )
        ),
        h('div', { style: { padding: '16px', color: '#fff' } },
          h('div', { style: { marginBottom: '8px' } }, '工作台'),
          h('div', { style: { marginBottom: '8px' } }, '权限管理'),
          h('div', { style: { marginBottom: '8px' } }, '商品管理'),
          h('div', { style: { marginBottom: '8px' } }, '订单管理'),
          h('div', null, '营销管理')
        )
      ),
      h('div', { className: 'layout-right' },
        h('div', { className: 'navbar-container' },
          h('div', { className: 'navbar-left' },
            h('button', { className: 'hamburger-btn' }, '☰'),
            h('span', { style: { marginLeft: '16px', fontSize: '14px', color: 'rgba(0,0,0,.65)' } }, '首页')
          ),
          h('div', { className: 'navbar-right' },
            h('div', { className: 'user-info' },
              h('div', { 
                className: 'user-avatar',
                style: {
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg,#1890ff 0%,#096dd9 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }
              }, '管'),
              h('span', { className: 'username' }, '管理员')
            )
          )
        ),
        h('div', { className: 'main-content' },
          h('div', { className: 'tab-bar-container' },
            h('div', { className: 'tab-bar-scroll' },
              h('div', { className: 'tab-item active' }, '工作台')
            )
          ),
          h('div', { className: 'content-wrapper' },
            h('div', { className: 'page-container' }, children)
          )
        )
      )
    );
  }

  console.log('[MallComponents CDN] Loaded successfully!');
  console.log('[MallComponents CDN] AdminLayout:', typeof AdminLayout);
  console.log('[MallComponents CDN] TabPane:', typeof TabPane);

  return {
    AdminLayout: AdminLayout,
    TabPane: TabPane,
    default: {
      AdminLayout: AdminLayout,
      TabPane: TabPane
    }
  };
}));
