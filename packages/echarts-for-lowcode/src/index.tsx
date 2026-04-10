import React from 'react';
import * as echartsModule from 'echarts';

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

export default EChartsForLowCode;
