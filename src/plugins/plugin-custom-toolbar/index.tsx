import React from 'react';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Button, Tooltip, Modal, message } from 'antd';
import {
  DatabaseOutlined,
  RobotOutlined,
  SettingOutlined,
  ApiOutlined,
} from '@ant-design/icons';
import './index.scss';

const CustomToolbarPlugin = (ctx: IPublicModelPluginContext) => {
  const { skeleton, config } = ctx;
  const scenarioName = config.get('scenarioName');

  const handleDataSourceClick = () => {
    message.info('数据源管理功能开发中...');
  };

  const handleAICopilotClick = () => {
    Modal.info({
      title: 'AI Copilot',
      content: (
        <div>
          <p>AI 辅助功能即将上线：</p>
          <ul>
            <li>🤖 自然语言生成页面</li>
            <li>📊 智能数据映射</li>
            <li>⚡ 自动逻辑生成</li>
          </ul>
          <p>敬请期待！</p>
        </div>
      ),
      okText: '知道了',
    });
  };

  const handleSettingsClick = () => {
    message.info('设置功能开发中...');
  };

  return {
    async init() {
      skeleton.add({
        name: 'customToolbar',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'left',
        },
        content: (
          <div className="custom-toolbar">
            <Tooltip title="数据源管理">
              <Button
                type="text"
                icon={<DatabaseOutlined />}
                onClick={handleDataSourceClick}
                className="toolbar-btn"
              >
                数据源
              </Button>
            </Tooltip>
            <Tooltip title="AI Copilot - 智能辅助">
              <Button
                type="primary"
                icon={<RobotOutlined />}
                onClick={handleAICopilotClick}
                className="toolbar-btn ai-btn"
              >
                AI Copilot
              </Button>
            </Tooltip>
            <Tooltip title="设置">
              <Button
                type="text"
                icon={<SettingOutlined />}
                onClick={handleSettingsClick}
                className="toolbar-btn"
              />
            </Tooltip>
          </div>
        ),
      });
    },
  };
};

CustomToolbarPlugin.pluginName = 'CustomToolbarPlugin';
CustomToolbarPlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};

export default CustomToolbarPlugin;
