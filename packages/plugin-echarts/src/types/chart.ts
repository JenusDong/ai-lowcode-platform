export interface ChartOption {
  title?: {
    text?: string;
    subtext?: string;
    left?: string;
    top?: string;
  };
  tooltip?: {
    trigger?: string;
    formatter?: string | ((params: any) => string);
  };
  legend?: {
    orient?: string;
    left?: string;
    top?: string;
    data?: string[];
    textStyle?: { fontSize: number };
  };
  color?: string[];
  series?: ChartSeries[];
  xAxis?: any;
  yAxis?: any;
  grid?: any;
  radar?: {
    indicator?: Array<{ name: string; max: number }>;
    center?: string[];
    radius?: string;
  };
}

export interface ChartSeries {
  name?: string;
  type?: string;
  radius?: string | string[];
  center?: string[];
  data?: any[];
  roseType?: string | boolean;
  label?: any;
  labelLine?: any;
  itemStyle?: any;
  emphasis?: any;
  animationType?: string;
  animationEasing?: string;
  smooth?: boolean;
  areaStyle?: any;
  stack?: string;
  symbolSize?: number;
  indicator?: Array<{ name: string; max: number }>;
  detail?: any;
  pointer?: any;
  axisLine?: any;
  axisTick?: any;
  splitLine?: any;
  axisLabel?: any;
  min?: number;
  max?: number;
  minSize?: string;
  maxSize?: string;
  sort?: string;
  gap?: number;
  left?: string;
  top?: number;
  bottom?: number;
  width?: string;
}

export interface ChartDataItem {
  name: string;
  value: number | number[];
  [key: string]: any;
}

export type ChartType = 'pie' | 'line' | 'bar' | 'area' | 'scatter' | 'radar' | 'gauge' | 'funnel';

export interface ChartConfig {
  type: ChartType;
  defaultOption: ChartOption;
  configure: object;
}
