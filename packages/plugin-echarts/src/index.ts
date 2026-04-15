import React from 'react';
import { EChartsBase } from './components/EChartsBase';
import EChartsMap from './components/EChartsMap';
import DataCard from './components/composite/DataCard';
import DashboardLayout from './components/composite/DashboardLayout';
import ChartPanel from './components/composite/ChartPanel';
import MapPanel from './components/composite/MapPanel';

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
  EChartsMap,
  EChartsBase,
  DataCard,
  DashboardLayout,
  ChartPanel,
  MapPanel,
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
  EChartsMap,
  EChartsBase,
  DataCard,
  DashboardLayout,
  ChartPanel,
  MapPanel,
}

export type { EChartsComponentProps } from './components/EChartsBase'
export type { MapDataItem, ScatterDataItem, EChartsMapProps } from './components/EChartsMap'
export type { DataCardProps } from './components/composite/DataCard'
export type { DashboardLayoutProps } from './components/composite/DashboardLayout'
export type { ChartPanelProps } from './components/composite/ChartPanel'
export type { MapPanelProps } from './components/composite/MapPanel'

export * from './types/chart'
export * from './setters'
