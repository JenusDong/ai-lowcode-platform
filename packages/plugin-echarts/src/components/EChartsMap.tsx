import React, { useRef, useEffect, useState } from 'react';
import * as echarts from 'echarts';

export interface MapDataItem {
  name: string;
  value: number;
}

export interface EChartsMapProps {
  option?: echarts.EChartsOption;
  style?: React.CSSProperties;
  className?: string;
  theme?: string;
  notMerge?: boolean;
  lazyUpdate?: boolean;
  showLoading?: boolean;
  loadingOption?: any;
  onChartReady?: (instance: echarts.ECharts) => void;
  onClick?: (params: any) => void;
}

let mapRegistered = false;
let mapRegisterPromise: Promise<void> | null = null;

function registerChinaMap(): Promise<void> {
  if (mapRegistered) {
    return Promise.resolve();
  }
  
  if (mapRegisterPromise) {
    return mapRegisterPromise;
  }
  
  mapRegisterPromise = (async () => {
    const urls = [
      'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json',
      'https://unpkg.com/echarts/map/json/china.json'
    ];
    
    for (const url of urls) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const geoJson = await response.json();
          echarts.registerMap('china', geoJson);
          mapRegistered = true;
          console.log('[EChartsMap] China map registered successfully from', url);
          return;
        }
      } catch (err) {
        console.warn(`[EChartsMap] Failed to load from ${url}:`, err);
      }
    }
    
    throw new Error('[EChartsMap] All map loading attempts failed');
  })();
  
  return mapRegisterPromise;
}

const EChartsMap: React.FC<EChartsMapProps> = ({
  option = {},
  style = { height: '500px', width: '100%' },
  className,
  theme,
  notMerge = false,
  lazyUpdate = true,
  showLoading = false,
  loadingOption,
  onChartReady,
  onClick
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<echarts.ECharts | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    registerChinaMap()
      .then(() => setMapReady(true))
      .catch((err) => {
        console.error('[EChartsMap] Map registration failed:', err);
        setError('地图数据加载失败');
      });
  }, []);

  useEffect(() => {
    if (!containerRef.current || !mapReady || error) return;

    if (!chartRef.current) {
      chartRef.current = echarts.init(containerRef.current, theme);
      if (containerRef.current) {
        (containerRef.current as any)._echarts_instance_ = chartRef.current;
      }
      
      if (onChartReady) {
        onChartReady(chartRef.current);
      }

      if (onClick) {
        chartRef.current.on('click', onClick);
      }
    }

    try {
      chartRef.current.setOption(option, notMerge, lazyUpdate);
    } catch (err: any) {
      console.error('[EChartsMap] setOption error:', err);
    }

    if (showLoading) {
      chartRef.current.showLoading(loadingOption || { text: '加载中...', color: '#1a90ff', maskColor: 'rgba(0,0,0,0.3)' });
    } else {
      chartRef.current.hideLoading();
    }

    const handleResize = () => {
      chartRef.current?.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [option, theme, notMerge, lazyUpdate, showLoading, loadingOption, onChartReady, onClick, mapReady, error]);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.dispose();
        chartRef.current = null;
      }
    };
  }, []);

  if (error) {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a1a3a',
          color: '#ff4d4f'
        }}
      >
        <div>{error}</div>
      </div>
    );
  }

  if (!mapReady) {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a1a3a',
          color: '#ffffff'
        }}
      >
        <div>正在加载地图数据...</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={style}
    />
  );
};

export default EChartsMap;
