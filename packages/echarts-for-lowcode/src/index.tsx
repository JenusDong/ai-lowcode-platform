import React from 'react';
import * as echartsModule from 'echarts';
import chinaGeoJson from './china.json';

const getEChartsInstance = () => {
  if (typeof window !== 'undefined' && (window as any).echarts) {
    return (window as any).echarts;
  }
  return echartsModule;
};

export interface EChartsForLowCodeProps {
  option?: any;
  style?: React.CSSProperties;
  className?: string;
  theme?: string | object;
  notMerge?: boolean;
  lazyUpdate?: boolean;
  __id?: string;
  __designMode?: string;
}

export class EChartsForLowCode extends React.Component<EChartsForLowCodeProps> {
  static displayName = 'EChartsForLowCode';
  
  static defaultProps: EChartsForLowCodeProps = {
    option: {},
    style: { height: '400px', width: '100%' },
    notMerge: false,
    lazyUpdate: true,
  };

  private chartDom: HTMLDivElement | null = null;
  private chartInstance: any = null;

  componentDidMount() {
    this.initChart();
  }

  componentDidUpdate(prevProps: EChartsForLowCodeProps) {
    if (this.props.option !== prevProps.option && this.chartInstance) {
      this.chartInstance.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate !== false);
    }
  }

  componentWillUnmount() {
    if (this.chartInstance) {
      this.chartInstance.dispose();
      this.chartInstance = null;
    }
  }

  initChart() {
    const echarts = getEChartsInstance();
    if (!echarts) {
      console.warn('[EChartsForLowCode] echarts not found');
      return;
    }
    if (!this.chartDom) {
      console.warn('[EChartsForLowCode] chart DOM not ready');
      return;
    }

    try {
      this.chartInstance = echarts.init(this.chartDom, this.props.theme);
      if (this.props.option) {
        this.chartInstance.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate !== false);
      }
      console.log('[EChartsForLowCode] Chart initialized successfully');
    } catch (e) {
      console.error('[EChartsForLowCode] Failed to init chart:', e);
    }
  }

  render() {
    const style: React.CSSProperties = {
      height: '400px',
      width: '100%',
      ...this.props.style,
    };
    return React.createElement('div', {
      ref: (el: HTMLDivElement | null) => { this.chartDom = el; },
      style,
      className: this.props.className,
      'data-leaf': true,
    });
  }
}

export class EChartsPie extends EChartsForLowCode {
  static displayName = 'EChartsPie';
}

export class EChartsLine extends EChartsForLowCode {
  static displayName = 'EChartsLine';
}

export class EChartsBar extends EChartsForLowCode {
  static displayName = 'EChartsBar';
}

export class EChartsScatter extends EChartsForLowCode {
  static displayName = 'EChartsScatter';
}

export class EChartsArea extends EChartsForLowCode {
  static displayName = 'EChartsArea';
}

export class EChartsRadar extends EChartsForLowCode {
  static displayName = 'EChartsRadar';
}

export class EChartsGauge extends EChartsForLowCode {
  static displayName = 'EChartsGauge';
}

export class EChartsFunnel extends EChartsForLowCode {
  static displayName = 'EChartsFunnel';
}

export interface EChartsMapProps extends EChartsForLowCodeProps {
  mapType?: string;
  visualType?: 'fillColor' | 'scatter' | 'effectScatter' | 'heatMap' | 'lines';
  roam?: boolean;
  zoom?: number;
}

let mapRegistered = false;

function registerChinaMap(): boolean {
  if (mapRegistered) {
    return true;
  }
  
  const echarts = getEChartsInstance();
  if (!echarts) {
    console.warn('[EChartsMap] echarts not found');
    return false;
  }
  
  try {
    echarts.registerMap('china', chinaGeoJson as any);
    mapRegistered = true;
    console.log('[EChartsMap] China map registered successfully from embedded data');
    return true;
  } catch (err) {
    console.error('[EChartsMap] Failed to register map:', err);
    return false;
  }
}

export class EChartsMap extends React.Component<EChartsMapProps, { mapReady: boolean; error: string | null }> {
  static displayName = 'EChartsMap';
  
  static defaultProps: EChartsMapProps = {
    option: {},
    style: { height: '500px', width: '100%' },
    notMerge: false,
    lazyUpdate: true,
    mapType: 'china',
    visualType: 'fillColor',
    roam: true,
    zoom: 1.2,
  };

  private chartDom: HTMLDivElement | null = null;
  private chartInstance: any = null;

  constructor(props: EChartsMapProps) {
    super(props);
    this.state = { mapReady: false, error: null };
  }

  componentDidMount() {
    const success = registerChinaMap();
    if (success) {
      this.setState({ mapReady: true }, () => this.initChart());
    } else {
      this.setState({ error: '地图数据注册失败' });
    }
  }

  componentDidUpdate(prevProps: EChartsMapProps) {
    if (this.state.mapReady && this.props.option !== prevProps.option && this.chartInstance) {
      this.chartInstance.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate !== false);
    }
  }

  componentWillUnmount() {
    if (this.chartInstance) {
      this.chartInstance.dispose();
      this.chartInstance = null;
    }
  }

  initChart() {
    if (!this.state.mapReady || this.state.error) return;
    
    const echarts = getEChartsInstance();
    if (!echarts || !this.chartDom) return;

    try {
      this.chartInstance = echarts.init(this.chartDom, this.props.theme);
      if (this.props.option) {
        this.chartInstance.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate !== false);
      }
      console.log('[EChartsMap] Chart initialized successfully');
    } catch (e) {
      console.error('[EChartsMap] Failed to init chart:', e);
    }
  }

  render() {
    const { style, className } = this.props;
    const { mapReady, error } = this.state;

    if (error) {
      return React.createElement('div', {
        style: { ...style, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', color: '#ff4d4f' },
        className,
      }, error);
    }

    if (!mapReady) {
      return React.createElement('div', {
        style: { ...style, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', color: '#666' },
        className,
      }, '正在初始化地图...');
    }

    const mergedStyle: React.CSSProperties = {
      height: '500px',
      width: '100%',
      ...style,
    };

    return React.createElement('div', {
      ref: (el: HTMLDivElement | null) => { this.chartDom = el; },
      style: mergedStyle,
      className,
      'data-leaf': true,
    });
  }
}

export default EChartsForLowCode;
