import React from 'react';
import { Modal, Card, Row, Col, Tag, message, Spin } from 'antd';
import { FileImageOutlined, ImportOutlined } from '@ant-design/icons';

const TEMPLATE_LIST = [
  {
    id: 'interactive-map-dashboard',
    name: '交互地图大屏',
    description: '地图数据可视化大屏，支持区域交互过滤',
    tags: ['地图', '大屏', '交互'],
    file: '/templates/interactive-map-dashboard.json',
  },
  {
    id: 'weather-dashboard',
    name: '全国天气大屏',
    description: '全国今日天气数据可视化大屏，展示气温分布',
    tags: ['天气', '大屏', '地图'],
    file: '/templates/weather-dashboard.json',
  },
  {
    id: 'amap-weather-dashboard',
    name: '高德地图天气大屏',
    description: '使用高德地图展示全国天气数据（需配置API密钥）',
    tags: ['高德地图', '天气', '大屏'],
    file: '/templates/amap-weather-dashboard.json',
  },
  {
    id: 'sales-dashboard',
    name: '销售数据大屏',
    description: '销售数据可视化大屏，包含多种图表展示',
    tags: ['销售', '大屏', '图表'],
    file: '/templates/sales-dashboard.json',
  },
  {
    id: 'logistics-dashboard',
    name: '物流监控大屏',
    description: '物流实时监控大屏，展示运输路线和仓储状态',
    tags: ['物流', '大屏', '监控'],
    file: '/templates/logistics-dashboard.json',
  },
  {
    id: 'population-dashboard',
    name: '人口统计大屏',
    description: '人口数据统计分析大屏',
    tags: ['人口', '统计', '大屏'],
    file: '/templates/population-dashboard.json',
  },
  {
    id: 'finance-dashboard',
    name: '金融数据大屏',
    description: '金融数据分析大屏，展示KPI指标',
    tags: ['金融', '数据', '大屏'],
    file: '/templates/finance-dashboard.json',
  },
];

interface TemplateSelectorProps {
  visible: boolean;
  onClose: () => void;
  onImport: (schema: any) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ visible, onClose, onImport }) => {
  const [importing, setImporting] = React.useState<string | null>(null);

  const handleImport = async (template: typeof TEMPLATE_LIST[0]) => {
    setImporting(template.id);
    try {
      const response = await fetch(template.file);
      if (!response.ok) {
        throw new Error('模板文件不存在');
      }
      const schema = await response.json();
      onImport(schema);
      message.success(`已导入模板：${template.name}`);
      onClose();
    } catch (error: any) {
      message.error(`导入失败：${error.message || '未知错误'}`);
    } finally {
      setImporting(null);
    }
  };

  return (
    <Modal
      title="模板市场"
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={800}
    >
      <Row gutter={[16, 16]}>
        {TEMPLATE_LIST.map((template) => (
          <Col span={8} key={template.id}>
            <Card
              hoverable
              style={{
                background: '#f5f5f5',
                border: '1px solid #d9d9d9',
                borderRadius: 8,
                cursor: importing ? 'wait' : 'pointer'
              }}
              bodyStyle={{ padding: 16 }}
              onClick={() => !importing && handleImport(template)}
            >
              <div
                style={{
                  height: 100,
                  background: 'linear-gradient(135deg, #1890ff 0%, #096dd9 100%)',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 12,
                  color: '#fff',
                  fontSize: 36,
                }}
              >
                <FileImageOutlined />
              </div>
              <div style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
                {template.name}
              </div>
              <div style={{ color: '#666', fontSize: 12, marginBottom: 8, minHeight: 36 }}>
                {template.description}
              </div>
              <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 8 }}>
                {template.tags.map((tag) => (
                  <Tag key={tag} color="blue" style={{ fontSize: 11 }}>
                    {tag}
                  </Tag>
                ))}
              </div>
              <div style={{ textAlign: 'center', paddingTop: 8, borderTop: '1px solid #e8e8e8' }}>
                {importing === template.id ? (
                  <Spin size="small" />
                ) : (
                  <span style={{ color: '#1890ff', fontSize: 13 }}>
                    <ImportOutlined style={{ marginRight: 4 }} />
                    点击导入
                  </span>
                )}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Modal>
  );
};

export default TemplateSelector;
