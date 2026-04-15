import React, { useState } from 'react';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Button, Tooltip, Modal, message } from 'antd';
import {
  DatabaseOutlined,
  RobotOutlined,
  SettingOutlined,
  AppstoreAddOutlined,
} from '@ant-design/icons';
import TemplateSelector from './TemplateSelector';
import './index.scss';

const ToolbarContent: React.FC<{
  ctx: IPublicModelPluginContext;
}> = ({ ctx }) => {
  const [templateVisible, setTemplateVisible] = useState(false);

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

  const handleTemplateClick = () => {
    setTemplateVisible(true);
  };

  const handleTemplateImport = (schema: any) => {
    try {
      const { project } = ctx;
      if (!project) {
        message.error('project 对象不存在');
        return;
      }
      if (typeof project.importSchema !== 'function') {
        message.error('importSchema 方法不存在');
        return;
      }
      project.importSchema(schema);
      project.simulatorHost?.rerender();
      message.success('模板导入成功');
      setTemplateVisible(false);
    } catch (error: any) {
      console.error('导入模板失败:', error);
      message.error(`导入失败：${error.message || '未知错误'}`);
    }
  };

  return (
    <div className="custom-toolbar">
      <Tooltip title="模板市场 - 快速创建页面">
        <Button
          type="primary"
          ghost
          icon={<AppstoreAddOutlined />}
          onClick={handleTemplateClick}
          className="toolbar-btn template-btn"
        >
          模板
        </Button>
      </Tooltip>
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
      <TemplateSelector
        visible={templateVisible}
        onClose={() => setTemplateVisible(false)}
        onImport={handleTemplateImport}
      />
    </div>
  );
};

const CustomToolbarPlugin = (ctx: IPublicModelPluginContext) => {
  const { skeleton } = ctx;

  return {
    async init() {
      skeleton.add({
        name: 'customToolbar',
        area: 'topArea',
        type: 'Widget',
        props: {
          align: 'left',
        },
        content: <ToolbarContent ctx={ctx} />,
      });
    },
  };
};

CustomToolbarPlugin.pluginName = 'CustomToolbarPlugin';
CustomToolbarPlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};

export default CustomToolbarPlugin;
