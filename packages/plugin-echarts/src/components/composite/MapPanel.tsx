import React from 'react';
import EChartsMap from '../EChartsMap';
import * as echarts from 'echarts';

export interface MapPanelProps {
  title: string;
  mapType?: 'fillColor' | 'scatter' | 'effectScatter' | 'heatMap' | 'lines';
  data?: Array<{ name: string; value: number }>;
  height?: string;
  style?: React.CSSProperties;
}

const MapPanel: React.FC<MapPanelProps> = ({
  title,
  mapType = 'fillColor',
  data = [],
  height = '500px',
  style = {}
}) => {
  const getMapOption = (): echarts.EChartsOption => {
    const baseOption = {
      backgroundColor: 'transparent',
      title: {
        text: title,
        left: 'center',
        top: 10,
        textStyle: { color: '#ffffff', fontSize: 16 }
      },
      tooltip: { trigger: 'item' },
      geo: {
        map: 'china',
        roam: true,
        zoom: 1.2,
        center: [104, 35],
        label: { show: false },
        itemStyle: {
          areaColor: '#1a5276',
          borderColor: '#1a90ff',
          borderWidth: 1
        },
        emphasis: {
          itemStyle: {
            areaColor: '#2980b9',
            borderColor: '#ffcc00',
            borderWidth: 2
          }
        }
      }
    };

    switch (mapType) {
      case 'fillColor':
        return {
          ...baseOption,
          visualMap: {
            min: 0,
            max: Math.max(...data.map(d => d.value), 2000),
            left: 'left',
            bottom: 10,
            text: ['高', '低'],
            calculable: true,
            inRange: { color: ['#50a3ba', '#eac736', '#d94e5d'] },
            textStyle: { color: '#ffffff' },
            show: false
          },
          series: [{
            name: '数据',
            type: 'map',
            geoIndex: 0,
            data
          }]
        };
      default:
        return baseOption;
    }
  };

  return (
    <div
      style={{
        background: 'rgba(26, 144, 255, 0.05)',
        border: '1px solid #18579e',
        borderRadius: '8px',
        padding: '20px',
        ...style
      }}
    >
      <EChartsMap
        option={getMapOption()}
        style={{ width: '100%', height }}
      />
    </div>
  );
};

export default MapPanel;
