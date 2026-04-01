import * as React from 'react';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import './index.scss';

const ThemeTogglePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'ThemeTogglePlugin',
    async init() {
      const { skeleton } = ctx;
      
      // 主题切换组件
      const ThemeToggleComponent = () => {
        const [isDark, setIsDark] = React.useState(() => {
          // 初始化时读取 localStorage
          const savedTheme = localStorage.getItem('theme');
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          
          // 优先使用保存的主题，否则使用系统偏好
          const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark;
          
          // 应用主题
          if (shouldBeDark) {
            document.body.setAttribute('data-theme', 'dark');
          } else {
            document.body.removeAttribute('data-theme');
          }
          
          return shouldBeDark;
        });
        
        const toggleTheme = () => {
          const newIsDark = !isDark;
          setIsDark(newIsDark);
          
          if (newIsDark) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
          } else {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
          }
        };
        
        return (
          <div className="theme-toggle-plugin">
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={isDark ? '切换到浅色模式' : '切换到深色模式'}
            >
              <span className="theme-icon">{isDark ? '☀️' : '🌙'}</span>
              <span className="theme-text">{isDark ? '浅色模式' : '深色模式'}</span>
            </button>
          </div>
        );
      };
      
      // 添加到工具栏
      skeleton.add({
        area: 'toolbar',
        type: 'Widget',
        name: 'themeToggle',
        content: <ThemeToggleComponent />,
      });
    },
  };
};

ThemeTogglePlugin.pluginName = 'ThemeTogglePlugin';

export default ThemeTogglePlugin;
