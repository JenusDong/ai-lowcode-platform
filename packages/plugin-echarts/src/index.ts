import React from 'react';
import { EChartsBase } from './components/EChartsBase';

const EChartsPie = (props) => React.createElement(EChartsBase, { ...props });
const EChartsLine = (props) => React.createElement(EChartsBase, { ...props });
const EChartsBar = (props) => React.createElement(EChartsBase, { ...props });
const EChartsArea = (props) => React.createElement(EChartsBase, { ...props });
const EChartsScatter = (props) => React.createElement(EChartsBase, { ...props });
const EChartsRadar = (props) => React.createElement(EChartsBase, { ...props });
const EChartsGauge = (props) => React.createElement(EChartsBase, { ...props });
const EChartsFunnel = (props) => React.createElement(EChartsBase, { ...props });

const PluginEcharts = {
  EChartsPie,
  EChartsLine,
  EChartsBar,
  EChartsArea,
  EChartsScatter,
  EChartsRadar,
  EChartsGauge,
  EChartsFunnel,
  EChartsBase,
  version: '1.0.0',
  name: 'plugin-echarts',
  description: 'ECharts 图表组件库',
}

export default PluginEcharts
export {
  EChartsPie,
  EChartsLine,
  EChartsBar,
  EChartsArea,
  EChartsScatter,
  EChartsRadar,
  EChartsGauge,
  EChartsFunnel,
  EChartsBase,
}

export type { EChartsComponentProps } from './components/EChartsBase'

export * from './types/chart'
export * from './setters'
