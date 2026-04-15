import React, { useState } from 'react';
import EChartsMap, { MapDataItem, EChartsMapProps } from './components/EChartsMap';

const MapDemo: React.FC = () => {
  const [visualType, setVisualType] = useState<EChartsMapProps['visualType']>('fillColor');
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  const sampleData: MapDataItem[] = [
    { name: '北京', value: 1000, code: '11' },
    { name: '上海', value: 1300, code: '31' },
    { name: '广东', value: 1500, code: '44' },
    { name: '浙江', value: 1250, code: '33' },
    { name: '江苏', value: 1400, code: '32' },
    { name: '山东', value: 1350, code: '37' },
    { name: '河南', value: 1150, code: '41' },
    { name: '四川', value: 1180, code: '51' },
    { name: '湖北', value: 1080, code: '42' },
    { name: '湖南', value: 1020, code: '43' }
  ];

  const handleRegionClick = (params: any) => {
    console.log('区域点击:', params);
    setSelectedRegion(params.name);
  };

  const handleRegionHover = (params: any) => {
    console.log('区域悬停:', params.name);
  };

  return (
    <div style={{ padding: '20px', background: '#1a1a2e', minHeight: '100vh' }}>
      <h1 style={{ color: '#fff', textAlign: 'center', marginBottom: '30px' }}>
        ECharts 地图组件示例
      </h1>

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={() => setVisualType('fillColor')}
          style={{
            padding: '10px 20px',
            background: visualType === 'fillColor' ? '#1a90ff' : '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          分省填色
        </button>
        <button
          onClick={() => setVisualType('scatter')}
          style={{
            padding: '10px 20px',
            background: visualType === 'scatter' ? '#1a90ff' : '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          散点图
        </button>
        <button
          onClick={() => setVisualType('effectScatter')}
          style={{
            padding: '10px 20px',
            background: visualType === 'effectScatter' ? '#1a90ff' : '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          动态散点
        </button>
        <button
          onClick={() => setVisualType('heatMap')}
          style={{
            padding: '10px 20px',
            background: visualType === 'heatMap' ? '#1a90ff' : '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          热力图
        </button>
        <button
          onClick={() => setVisualType('lines')}
          style={{
            padding: '10px 20px',
            background: visualType === 'lines' ? '#1a90ff' : '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          流向线
        </button>
      </div>

      {selectedRegion && (
        <div style={{
          background: 'rgba(26, 144, 255, 0.1)',
          border: '1px solid #1a90ff',
          padding: '10px 20px',
          marginBottom: '20px',
          borderRadius: '4px',
          color: '#fff',
          textAlign: 'center'
        }}>
          当前选中区域: {selectedRegion}
        </div>
      )}

      <EChartsMap
        mapType="china"
        visualType={visualType}
        data={sampleData}
        theme="dark"
        backgroundColor="#0a1a3a"
        showLegend={true}
        showTooltip={true}
        roam={true}
        zoom={1.2}
        center={[104, 35]}
        colorScheme="blue"
        title={{
          text: `${getVisualTypeName(visualType)} - 中国数据可视化`,
          subtext: '点击区域查看详情',
          left: 'center',
          textStyle: {
            color: '#ffffff',
            fontSize: 18
          }
        }}
        enableDrillDown={true}
        onRegionClick={handleRegionClick}
        onRegionHover={handleRegionHover}
        onMapReady={(instance) => {
          console.log('地图已就绪:', instance);
        }}
        style={{ width: '100%', height: '600px' }}
      />

      <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
        <h3 style={{ color: '#fff', marginBottom: '15px' }}>使用说明</h3>
        <pre style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.6' }}>
{`// 基础用法
<EChartsMap
  mapType="china"
  visualType="fillColor"
  data={[
    { name: '北京', value: 1000 },
    { name: '上海', value: 1300 }
  ]}
/>

// 支持的可视化类型:
// - fillColor: 分省填色（默认）
// - scatter: 散点图
// - effectScatter: 动态散点
// - heatMap: 热力图
// - lines: 流向线

// 配置主题风格
theme="dark" | "light" | "custom"

// 配色方案
colorScheme="blue" | "red" | "green" | "rainbow" | "custom"

// 交互事件
onRegionClick={(params) => console.log(params)}
onRegionHover={(params) => console.log(params)}
onMapReady={(instance) => console.log(instance)}

// 数据钻取
enableDrillDown={true}`}
        </pre>
      </div>
    </div>
  );
};

function getVisualTypeName(type: string): string {
  const names: Record<string, string> = {
    fillColor: '分省填色图',
    scatter: '散点图',
    effectScatter: '动态散点图',
    heatMap: '热力图',
    lines: '流向线图'
  };
  return names[type] || type;
}

export default MapDemo;
