import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

export interface EChartsComponentProps {
  option?: echarts.EChartsOption;
  style?: React.CSSProperties;
  className?: string;
  theme?: string | object;
  notMerge?: boolean;
  lazyUpdate?: boolean;
  showLoading?: boolean;
  loadingOption?: object;
  onChartReady?: (instance: echarts.ECharts) => void;
  onClick?: (params: any) => void;
}

export const EChartsBase: React.FC<EChartsComponentProps> = ({
  option = {},
  style = { height: '400px', width: '100%' },
  className,
  theme,
  notMerge = false,
  lazyUpdate = true,
  showLoading = false,
  loadingOption,
  onChartReady,
  onClick,
}) => {
  return (
    <ReactECharts
      echarts={echarts}
      option={option}
      style={style}
      className={className}
      theme={theme}
      notMerge={notMerge}
      lazyUpdate={lazyUpdate}
      showLoading={showLoading}
      loadingOption={loadingOption}
      onChartReady={onChartReady}
      onEvents={onClick ? { click: onClick } : undefined}
    />
  );
};

export default EChartsBase;