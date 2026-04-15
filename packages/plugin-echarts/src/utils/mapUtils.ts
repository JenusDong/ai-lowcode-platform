import { MapDataItem, ScatterDataItem } from '../components/EChartsMap';
import * as echarts from 'echarts';

export interface MapThemeConfig {
  backgroundColor: string;
  titleColor: string;
  labelColor: string;
  borderColor: string;
  areaColor: string;
  emphasisAreaColor: string;
  emphasisBorderColor: string;
  visualMapColors: string[];
}

export const MAP_THEMES: Record<string, MapThemeConfig> = {
  dark: {
    backgroundColor: '#0a1a3a',
    titleColor: '#ffffff',
    labelColor: '#ffffff',
    borderColor: '#1a90ff',
    areaColor: '#1a5276',
    emphasisAreaColor: '#2980b9',
    emphasisBorderColor: '#ffcc00',
    visualMapColors: ['#50a3ba', '#eac736', '#d94e5d']
  },
  light: {
    backgroundColor: '#f5f5f5',
    titleColor: '#333333',
    labelColor: '#666666',
    borderColor: '#ccc',
    areaColor: '#e6f3ff',
    emphasisAreaColor: '#99ccff',
    emphasisBorderColor: '#1890ff',
    visualMapColors: ['#91d5ff', '#69c0ff', '#1890ff']
  },
  custom: {
    backgroundColor: '#0a1a3a',
    titleColor: '#ffffff',
    labelColor: '#ffffff',
    borderColor: '#1a90ff',
    areaColor: '#1a5276',
    emphasisAreaColor: '#2980b9',
    emphasisBorderColor: '#ffcc00',
    visualMapColors: ['#50a3ba', '#eac736', '#d94e5d']
  }
};

export const COLOR_SCHEMES: Record<string, string[]> = {
  blue: ['#50a3ba', '#eac736', '#d94e5d'],
  red: ['#ff4d4f', '#ff7a45', '#ffa940'],
  green: ['#52c41a', '#73d13d', '#95de64'],
  rainbow: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622'],
  custom: []
};

export function getThemeConfig(theme: string): MapThemeConfig {
  return MAP_THEMES[theme] || MAP_THEMES.dark;
}

export function getColorScheme(scheme: string, customColors?: string[]): string[] {
  if (scheme === 'custom' && customColors && customColors.length > 0) {
    return customColors;
  }
  return COLOR_SCHEMES[scheme] || COLOR_SCHEMES.blue;
}

export function normalizeData(data: any[]): MapDataItem[] {
  return data.map(item => ({
    name: item.name || item.province || item.region || '未知区域',
    value: typeof item.value === 'number' ? item.value : 0,
    code: item.code || item.adcode,
    ...item
  }));
}

export function normalizeScatterData(data: any[]): ScatterDataItem[] {
  return data.map(item => ({
    name: item.name || item.city || '未知点',
    value: Array.isArray(item.value) ? item.value : [item.lng || 0, item.lat || 0, item.value || 0],
    ...item
  }));
}

export function createVisualMapOption(
  data: MapDataItem[],
  colors: string[],
  theme: MapThemeConfig
): echarts.VisualMapComponentOption {
  const values = data.map(d => d.value);
  const maxVal = Math.max(...values, 100);

  return {
    min: 0,
    max: Math.ceil(maxVal * 1.2),
    left: 'left',
    bottom: 20,
    text: ['高', '低'],
    calculable: true,
    inRange: {
      color: colors
    },
    textStyle: {
      color: theme.labelColor
    },
    show: true
  };
}

export function createGeoOption(
  mapType: string,
  config: {
    roam?: boolean;
    zoom?: number;
    center?: [number, number];
    theme?: MapThemeConfig;
  }
): echarts.GeoComponentOption {
  const theme = config.theme || getThemeConfig('dark');

  return {
    map: mapType,
    roam: config.roam !== false,
    zoom: config.zoom || 1.2,
    center: config.center || (mapType === 'china' ? [104, 35] : [0, 20]),
    label: {
      show: true,
      color: theme.labelColor,
      fontSize: 10
    },
    itemStyle: {
      areaColor: theme.areaColor,
      borderColor: theme.borderColor,
      borderWidth: 1
    },
    emphasis: {
      itemStyle: {
        areaColor: theme.emphasisAreaColor,
        borderColor: theme.emphasisBorderColor,
        borderWidth: 2
      },
      label: {
        color: theme.emphasisBorderColor,
        fontSize: 12,
        fontWeight: 'bold'
      }
    },
    select: {
      itemStyle: {
        areaColor: '#1abc9c',
        borderColor: '#00ffcc',
        borderWidth: 2
      }
    }
  };
}

export function createTooltipFormatter(visualType: string): ((params: any) => string) | undefined {
  switch (visualType) {
    case 'fillColor':
      return (params: any) => {
        if (!params.data) return params.name;
        return `<div style="padding:8px;font-family:sans-serif;">
          <div style="font-weight:bold;margin-bottom:4px;color:#fff;">${params.name}</div>
          <div style="color:#ddd;">数值: <strong>${(params.value || 0).toLocaleString()}</strong></div>
        </div>`;
      };
    case 'scatter':
    case 'effectScatter':
      return (params: any) => {
        if (!params.value) return params.name;
        return `<div style="padding:8px;">
          <div><strong>${params.name}</strong></div>
          <div>经度: ${params.value[0]?.toFixed(2)}</div>
          <div>纬度: ${params.value[1]?.toFixed(2)}</div>
          <div>数值: ${params.value[2]}</div>
        </div>`;
      };
    default:
      return undefined;
  }
}

export function validateMapData(data: any[]): { valid: boolean; errors: string[]; normalized?: MapDataItem[] } {
  const errors: string[] = [];

  if (!Array.isArray(data)) {
    return { valid: false, errors: ['数据必须是数组'] };
  }

  if (data.length === 0) {
    return { valid: false, errors: ['数据不能为空'] };
  }

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (!item.name) {
      errors.push(`第${i + 1}项缺少name字段`);
    }
    if (typeof item.value !== 'number') {
      errors.push(`第${i + 1}项的value字段不是有效数字`);
    }
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: [],
    normalized: normalizeData(data)
  };
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
