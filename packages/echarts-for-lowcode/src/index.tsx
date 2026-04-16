import React from 'react';
import * as echartsModule from 'echarts';
import 'echarts-extension-amap';
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
  private resizeObserver: ResizeObserver | null = null;

  componentDidMount() {
    this.initChart();
    
    this.resizeObserver = new ResizeObserver(() => {
      if (this.chartInstance) {
        this.chartInstance.resize();
      }
    });
    
    setTimeout(() => {
      if (this.chartDom) {
        this.resizeObserver?.observe(this.chartDom);
      }
    }, 100);
  }

  componentDidUpdate(prevProps: EChartsForLowCodeProps) {
    if (this.props.option !== prevProps.option && this.chartInstance) {
      this.chartInstance.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate !== false);
    }
  }

  componentWillUnmount() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
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

export interface AMapConfig {
  key?: string;
  version?: string;
  plugins?: string[];
}

export interface EChartsMapProps extends EChartsForLowCodeProps {
  mapType?: string;
  visualType?: 'fillColor' | 'scatter' | 'effectScatter' | 'heatMap' | 'lines';
  roam?: boolean;
  zoom?: number;
  useAMap?: boolean;
  amapConfig?: AMapConfig;
  fetchWeatherData?: boolean;
  weatherApiKey?: string;
}

let mapRegistered = false;
let amapLoaded = false;
let amapLoadPromise: Promise<void> | null = null;

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

function loadAMapAPI(config: AMapConfig = {}): Promise<void> {
  if (amapLoaded && (window as any).AMap) {
    return Promise.resolve();
  }

  if (amapLoadPromise) {
    return amapLoadPromise;
  }

  const key = config.key || 'YOUR_AMAP_KEY';
  const version = config.version || '2.0';
  const plugins = config.plugins || ['AMap.Scale', 'AMap.ToolBar'];

  amapLoadPromise = new Promise((resolve, reject) => {
    if ((window as any).AMap) {
      amapLoaded = true;
      resolve();
      return;
    }

    console.log('[EChartsMap] Loading AMap API with key:', key.substring(0, 8) + '...');
    
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://webapi.amap.com/maps?v=${version}&key=${key}&plugin=${plugins.join(',')}`;
    script.onload = () => {
      amapLoaded = true;
      console.log('[EChartsMap] AMap API loaded successfully');
      resolve();
    };
    script.onerror = (err) => {
      console.error('[EChartsMap] Failed to load AMap API:', err);
      reject(new Error('Failed to load AMap API'));
    };
    document.head.appendChild(script);
  });

  return amapLoadPromise;
}

export interface WeatherData {
  name: string;
  value: [number, number, number];
  temperature: string;
  weather: string;
  humidity: string;
  windDirection: string;
  windPower: string;
}

const CITY_AD_CODE_MAP: { [key: string]: { adcode: string; lng: number; lat: number } } = {
  '北京': { adcode: '110000', lng: 116.46, lat: 39.92 },
  '上海': { adcode: '310000', lng: 121.48, lat: 31.22 },
  '广州': { adcode: '440100', lng: 113.23, lat: 23.16 },
  '深圳': { adcode: '440300', lng: 114.07, lat: 22.62 },
  '杭州': { adcode: '330100', lng: 120.19, lat: 30.26 },
  '南京': { adcode: '320100', lng: 118.78, lat: 32.04 },
  '武汉': { adcode: '420100', lng: 114.31, lat: 30.52 },
  '成都': { adcode: '510100', lng: 104.06, lat: 30.67 },
  '重庆': { adcode: '500000', lng: 106.54, lat: 29.59 },
  '西安': { adcode: '610100', lng: 108.95, lat: 34.27 },
  '天津': { adcode: '120000', lng: 117.2, lat: 39.13 },
  '苏州': { adcode: '320500', lng: 120.62, lat: 31.32 },
  '郑州': { adcode: '410100', lng: 113.65, lat: 34.76 },
  '长沙': { adcode: '430100', lng: 112.94, lat: 28.23 },
  '沈阳': { adcode: '210100', lng: 123.38, lat: 41.8 },
  '青岛': { adcode: '370200', lng: 120.33, lat: 36.07 },
  '大连': { adcode: '210200', lng: 121.62, lat: 38.92 },
  '厦门': { adcode: '350200', lng: 118.1, lat: 24.46 },
  '济南': { adcode: '370100', lng: 117, lat: 36.65 },
  '哈尔滨': { adcode: '230100', lng: 126.63, lat: 45.75 },
  '长春': { adcode: '220100', lng: 125.35, lat: 43.88 },
  '昆明': { adcode: '530100', lng: 102.73, lat: 25.04 },
  '贵阳': { adcode: '520100', lng: 106.71, lat: 26.57 },
  '南宁': { adcode: '450100', lng: 108.33, lat: 22.84 },
  '海口': { adcode: '460100', lng: 110.35, lat: 20.02 },
  '兰州': { adcode: '620100', lng: 103.73, lat: 36.03 },
  '乌鲁木齐': { adcode: '650100', lng: 87.68, lat: 43.77 },
  '拉萨': { adcode: '540100', lng: 91.11, lat: 29.97 },
  '呼和浩特': { adcode: '150100', lng: 111.65, lat: 40.82 },
  '银川': { adcode: '640100', lng: 106.27, lat: 38.47 }
};

let weatherCache: WeatherData[] | null = null;
let weatherLoadPromise: Promise<WeatherData[]> | null = null;

const PRESET_WEATHER_DATA: { [key: string]: Omit<WeatherData, 'name' | 'value'> } = {
  '北京': { temperature: '18', weather: '晴', humidity: '35', windDirection: '北', windPower: '3级' },
  '广州': { temperature: '28', weather: '多云', humidity: '75', windDirection: '南', windPower: '2级' },
  '深圳': { temperature: '27', weather: '晴', humidity: '70', windDirection: '东南', windPower: '2级' },
  '杭州': { temperature: '22', weather: '多云', humidity: '65', windDirection: '东', windPower: '2级' },
  '南京': { temperature: '20', weather: '晴', humidity: '55', windDirection: '东北', windPower: '3级' },
  '武汉': { temperature: '24', weather: '阴', humidity: '68', windDirection: '西', windPower: '2级' },
  '成都': { temperature: '21', weather: '阴', humidity: '72', windDirection: '北', windPower: '1级' },
  '重庆': { temperature: '23', weather: '多云', humidity: '70', windDirection: '东北', windPower: '1级' },
  '西安': { temperature: '19', weather: '晴', humidity: '45', windDirection: '西北', windPower: '3级' },
  '天津': { temperature: '17', weather: '晴', humidity: '38', windDirection: '北', windPower: '4级' },
  '苏州': { temperature: '21', weather: '多云', humidity: '62', windDirection: '东', windPower: '2级' },
  '郑州': { temperature: '20', weather: '晴', humidity: '48', windDirection: '西', windPower: '3级' },
  '长沙': { temperature: '25', weather: '多云', humidity: '72', windDirection: '南', windPower: '2级' },
  '沈阳': { temperature: '12', weather: '晴', humidity: '42', windDirection: '北', windPower: '4级' },
  '青岛': { temperature: '15', weather: '晴', humidity: '58', windDirection: '东', windPower: '3级' },
  '大连': { temperature: '14', weather: '多云', humidity: '60', windDirection: '东北', windPower: '4级' },
  '厦门': { temperature: '26', weather: '晴', humidity: '78', windDirection: '东南', windPower: '3级' },
  '济南': { temperature: '18', weather: '晴', humidity: '50', windDirection: '北', windPower: '3级' },
  '哈尔滨': { temperature: '8', weather: '多云', humidity: '55', windDirection: '西北', windPower: '4级' },
  '长春': { temperature: '10', weather: '晴', humidity: '48', windDirection: '西', windPower: '3级' },
  '昆明': { temperature: '20', weather: '晴', humidity: '65', windDirection: '西南', windPower: '2级' },
  '贵阳': { temperature: '19', weather: '多云', humidity: '70', windDirection: '南', windPower: '2级' },
  '南宁': { temperature: '27', weather: '多云', humidity: '80', windDirection: '南', windPower: '2级' },
  '海口': { temperature: '29', weather: '多云', humidity: '82', windDirection: '东南', windPower: '3级' },
  '兰州': { temperature: '16', weather: '晴', humidity: '35', windDirection: '西北', windPower: '3级' },
  '乌鲁木齐': { temperature: '12', weather: '晴', humidity: '30', windDirection: '北', windPower: '3级' },
  '拉萨': { temperature: '14', weather: '晴', humidity: '25', windDirection: '西', windPower: '2级' },
  '呼和浩特': { temperature: '11', weather: '晴', humidity: '32', windDirection: '西北', windPower: '4级' },
  '银川': { temperature: '15', weather: '晴', humidity: '28', windDirection: '北', windPower: '3级' }
};

export async function fetchAMapWeatherData(apiKey?: string): Promise<WeatherData[]> {
  if (weatherCache) {
    return weatherCache;
  }

  if (weatherLoadPromise) {
    return weatherLoadPromise;
  }

  const key = apiKey || 'YOUR_AMAP_KEY';

  weatherLoadPromise = (async () => {
    const results: WeatherData[] = [];
    
    for (const [city, info] of Object.entries(CITY_AD_CODE_MAP)) {
      if (city === '上海') {
        try {
          console.log('[EChartsMap] Fetching real-time weather for Shanghai...');
          const url = `https://restapi.amap.com/v3/weather/weatherInfo?city=${info.adcode}&key=${key}&extensions=base&output=JSON`;
          const response = await fetch(url);
          const data = await response.json();
          
          if (data.status === '1' && data.lives && data.lives.length > 0) {
            const live = data.lives[0];
            results.push({
              name: city,
              value: [info.lng, info.lat, parseFloat(live.temperature_float)] as [number, number, number],
              temperature: live.temperature,
              weather: live.weather,
              humidity: live.humidity,
              windDirection: live.winddirection,
              windPower: live.windpower
            });
            console.log('[EChartsMap] Shanghai weather loaded:', live);
          } else {
            console.warn('[EChartsMap] Failed to get Shanghai weather:', data);
            const preset = PRESET_WEATHER_DATA[city];
            results.push({
              name: city,
              value: [info.lng, info.lat, parseFloat(preset.temperature)] as [number, number, number],
              ...preset
            });
          }
        } catch (err) {
          console.error('[EChartsMap] Error fetching Shanghai weather:', err);
          const preset = PRESET_WEATHER_DATA[city];
          results.push({
            name: city,
            value: [info.lng, info.lat, parseFloat(preset.temperature)] as [number, number, number],
            ...preset
          });
        }
      } else {
        const preset = PRESET_WEATHER_DATA[city];
        results.push({
          name: city,
          value: [info.lng, info.lat, parseFloat(preset.temperature)] as [number, number, number],
          ...preset
        });
      }
    }
    
    weatherCache = results;
    console.log('[EChartsMap] Weather data loaded:', results.length, 'cities (Shanghai real-time, others preset)');
    return results;
  })();

  return weatherLoadPromise;
}

export class EChartsMap extends React.Component<EChartsMapProps, { mapReady: boolean; amapReady: boolean; error: string | null }> {
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
    useAMap: false,
    amapConfig: {},
    fetchWeatherData: false,
    weatherApiKey: '',
  };

  private chartDom: HTMLDivElement | null = null;
  private chartInstance: any = null;
  private amapInstance: any = null;
  private resizeObserver: ResizeObserver | null = null;

  constructor(props: EChartsMapProps) {
    super(props);
    this.state = { mapReady: false, amapReady: false, error: null };
  }

  componentDidMount() {
    console.log('[EChartsMap] Props received:', {
      useAMap: this.props.useAMap,
      amapConfig: this.props.amapConfig,
      option: this.props.option ? 'has option' : 'no option'
    });
    
    if (this.props.useAMap) {
      console.log('[EChartsMap] useAMap is true, initializing AMap...');
      this.initAMap();
    } else {
      console.log('[EChartsMap] useAMap is false, using built-in China map');
      const success = registerChinaMap();
      if (success) {
        this.setState({ mapReady: true }, () => this.initChart());
      } else {
        this.setState({ error: '地图数据注册失败' });
      }
    }

    this.resizeObserver = new ResizeObserver(() => {
      if (this.chartInstance && !this.props.useAMap) {
        this.chartInstance.resize();
      }
      if (this.chartInstance && this.props.useAMap && this.state.amapReady) {
        const amapComponent = this.chartInstance.getModel().getComponent('amap');
        if (amapComponent) {
          const amap = amapComponent.getAMap();
          if (amap) {
            try {
              amap.resize();
            } catch (e) {
              console.warn('[EChartsMap] AMap resize failed:', e);
            }
            this.chartInstance.resize();
          }
        }
      }
    });
    
    setTimeout(() => {
      if (this.chartDom) {
        this.resizeObserver?.observe(this.chartDom);
      }
    }, 100);

    if (this.props.fetchWeatherData) {
      setTimeout(() => this.loadWeatherData(), 1500);
    }
  }

  async loadWeatherData() {
    const apiKey = this.props.weatherApiKey || this.props.amapConfig?.key;
    
    if (!apiKey) {
      console.warn('[EChartsMap] fetchWeatherData is true but no API key provided');
      return;
    }

    console.log('[EChartsMap] Loading weather data with key:', apiKey.substring(0, 8) + '...');
    
    try {
      const weatherData = await fetchAMapWeatherData(apiKey);
      
      if (!weatherData || weatherData.length === 0) {
        console.warn('[EChartsMap] No weather data received');
        return;
      }

      console.log('[EChartsMap] Weather data loaded successfully:', weatherData.length, 'cities');

      const updatedOption = {
        ...this.props.option,
        series: [{
          ...this.props.option.series?.[0],
          data: weatherData.map(city => ({
            name: city.name,
            value: city.value as [number, number, number],
            temperature: city.temperature,
            weather: city.weather,
            humidity: city.humidity,
            windDirection: city.windDirection,
            windPower: city.windPower
          }))
        }],
        tooltip: {
          ...this.props.option.tooltip,
          formatter: function(params: any) {
            if (params && params.data) {
              return `${params.data.name}<br/>` +
                     `气温: ${params.data.temperature}°C<br/>` +
                     `天气: ${params.data.weather}<br/>` +
                     `湿度: ${params.data.humidity}%<br/>` +
                     `风向: ${params.data.windDirection}<br/>` +
                     `风力: ${params.data.windPower}`;
            }
            return params.name + '<br/>气温: ' + params.value[2] + '°C';
          }
        },
        visualMap: {
          ...this.props.option.visualMap,
          min: Math.min(...weatherData.map(d => d.value[2])),
          max: Math.max(...weatherData.map(d => d.value[2]))
        }
      };
      
      setTimeout(() => {
        if (this.chartInstance) {
          console.log('[EChartsMap] Updating chart with weather data (merge mode)...');
          
          this.chartInstance.setOption({
            series: [{
              ...this.props.option.series?.[0],
              data: weatherData.map(city => ({
                name: city.name,
                value: city.value as [number, number, number],
                temperature: city.temperature,
                weather: city.weather,
                humidity: city.humidity,
                windDirection: city.windDirection,
                windPower: city.windPower
              }))
            }],
            tooltip: {
              ...this.props.option.tooltip,
              formatter: function(params: any) {
                if (params && params.data) {
                  return `${params.data.name}<br/>` +
                         `气温: ${params.data.temperature}°C<br/>` +
                         `天气: ${params.data.weather}<br/>` +
                         `湿度: ${params.data.humidity}%<br/>` +
                         `风向: ${params.data.windDirection}<br/>` +
                         `风力: ${params.data.windPower}`;
                }
                return params.name + '<br/>气温: ' + params.value[2] + '°C';
              }
            },
            visualMap: {
              ...this.props.option.visualMap,
              min: Math.min(...weatherData.map(d => d.value[2])),
              max: Math.max(...weatherData.map(d => d.value[2]))
            }
          }, false);
          
          console.log('[EChartsMap] Chart updated with real-time weather data');
          
          setTimeout(() => {
            if (this.chartInstance && this.chartDom) {
              const amapComponent = (this.chartInstance as any)?.getModel()?.getComponent('amap');
              
              if (amapComponent) {
                const amapInstance = amapComponent.getAMap();
                
                if (amapInstance) {
                  console.log('[EChartsMap] Resizing AMap after data update...');
                  amapInstance.resize();
                  
                  const mapContainer = this.chartDom?.querySelector('.amap-container');
                  if (mapContainer) {
                    const mapEl = mapContainer as HTMLElement;
                    mapEl.style.cssText = `
                      position: absolute !important;
                      top: 0 !important;
                      left: 0 !important;
                      width: 100% !important;
                      height: 100% !important;
                      z-index: 0 !important;
                    `;
                    
                    const canvases = mapEl.querySelectorAll('canvas');
                    canvases.forEach((canvas, index) => {
                      console.log(`[EChartsMap] Canvas ${index}:`, {
                        actualWidth: (canvas as HTMLCanvasElement).width,
                        actualHeight: (canvas as HTMLCanvasElement).height,
                        clientWidth: canvas.clientWidth,
                        clientHeight: canvas.clientHeight
                      });
                      
                      (canvas as HTMLCanvasElement).style.width = '100%';
                      (canvas as HTMLCanvasElement).style.height = '100%';
                    });
                  }
                }
              }
              
              this.chartInstance.resize();
              console.log('[EChartsMap] Chart and AMap resized after update');
            }
          }, 200);
        }
      }, 500);
      
    } catch (err) {
      console.error('[EChartsMap] Failed to load weather data:', err);
    }
  }

  async initAMap() {
    try {
      await loadAMapAPI(this.props.amapConfig);
      this.setState({ amapReady: true, mapReady: true }, () => this.initChart());
    } catch (err) {
      console.error('[EChartsMap] Failed to init AMap:', err);
      this.setState({ error: '高德地图加载失败' });
    }
  }

  componentDidUpdate(prevProps: EChartsMapProps) {
    const { mapReady, amapReady } = this.state;
    if ((mapReady || amapReady) && this.props.option !== prevProps.option && this.chartInstance) {
      this.chartInstance.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate !== false);
    }
  }

  componentWillUnmount() {
    if (this.chartInstance) {
      this.chartInstance.dispose();
      this.chartInstance = null;
    }
    if (this.amapInstance) {
      this.amapInstance.destroy();
      this.amapInstance = null;
    }
  }

  initChart() {
    if (!this.state.mapReady || this.state.error) return;
    
    const echarts = getEChartsInstance();
    if (!echarts || !this.chartDom) return;

    try {
      if (this.props.useAMap && this.state.amapReady) {
        this.initAMapChart();
      } else {
        this.chartInstance = echarts.init(this.chartDom, this.props.theme);
        if (this.props.option) {
          this.chartInstance.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate !== false);
        }
      }
      console.log('[EChartsMap] Chart initialized successfully');
    } catch (e) {
      console.error('[EChartsMap] Failed to init chart:', e);
    }
  }

  initAMapChart() {
    const AMap = (window as any).AMap;
    if (!AMap) {
      console.error('[EChartsMap] AMap not found');
      this.setState({ error: '高德地图API未加载' });
      return;
    }

    if (!this.chartDom) {
      console.error('[EChartsMap] chartDom not found');
      return;
    }

    try {
      console.log('[EChartsMap] Initializing ECharts with AMap...');
      
      const echarts = getEChartsInstance();
      if (!echarts) {
        console.error('[EChartsMap] ECharts not found');
        return;
      }
      
      const amapCoordSys = (echarts as any).registerCoordinateSystem ? 
        (echarts as any).registerCoordinateSystem : 
        (echarts as any).extendComponentModel?.__proto__?.constructor?.prototype?.registerCoordinateSystem;

      console.log('[EChartsMap] Checking echarts extension support...');
      
      const amapOption = {
        ...this.props.option,
        amap: {
          center: [105, 35],
          zoom: this.props.zoom || 5,
          roam: true,
          viewMode: '2D'
        },
        series: this.props.option.series?.map((series: any) => ({
          ...series,
          coordinateSystem: 'amap',
          data: series.data || []
        })) || []
      };

      console.log('[EChartsMap] Creating ECharts instance with AMap config...');
      console.log('[EChartsMap] AMap config:', amapOption.amap);
      console.log('[EChartsMap] Series count:', amapOption.series.length);
      
      this.chartInstance = echarts.init(this.chartDom);
      
      try {
          this.chartInstance.setOption(amapOption, true);
          
          setTimeout(() => {
            const amapComponent = (this.chartInstance as any)?.getModel()?.getComponent('amap');
            console.log('[EChartsMap] AMap component:', amapComponent ? 'found' : 'not found');
            
            if (amapComponent) {
              const amapInstance = amapComponent.getAMap();
              console.log('[EChartsMap] AMap instance from component:', amapInstance ? 'available' : 'null');
              
              if (amapInstance) {
                console.log('[EChartsMap] Forcing AMap render...');
                
                const container = this.chartDom;
                console.log('[EChartsMap] Main container:', {
                  width: container?.clientWidth,
                  height: container?.clientHeight,
                  offsetWidth: container?.offsetWidth,
                  offsetHeight: container?.offsetHeight,
                  scrollWidth: container?.scrollWidth,
                  scrollHeight: container?.scrollHeight,
                  style: container ? window.getComputedStyle(container) : null
                });
                
                amapInstance.setZoom(this.props.zoom || 5);
                amapInstance.setCenter([105, 35]);
                
                setTimeout(() => {
                  amapInstance.resize();
                  this.chartInstance?.resize();
                  
                  const mapContainer = this.chartDom?.querySelector('.amap-container');
                  console.log('[EChartsMap] AMap container:', mapContainer ? 'found' : 'not found');
                  if (mapContainer) {
                    const mapEl = mapContainer as HTMLElement;
                    console.log('[EChartsMap] AMap container details:', {
                      width: mapEl.clientWidth,
                      height: mapEl.clientHeight,
                      display: window.getComputedStyle(mapEl).display,
                      visibility: window.getComputedStyle(mapEl).visibility,
                      opacity: window.getComputedStyle(mapEl).opacity,
                      overflow: window.getComputedStyle(mapEl).overflow,
                      zIndex: window.getComputedStyle(mapEl).zIndex,
                      position: window.getComputedStyle(mapEl).position,
                      innerHTML_length: mapEl.innerHTML.length
                    });
                    
                    mapEl.style.cssText = `
                      position: absolute !important;
                      top: 0 !important;
                      left: 0 !important;
                      width: 100% !important;
                      height: 100% !important;
                      z-index: 0 !important;
                      display: block !important;
                      visibility: visible !important;
                      opacity: 1 !important;
                      overflow: visible !important;
                    `;
                    
                    const canvasElements = mapEl.querySelectorAll('canvas');
                    console.log('[EChartsMap] Canvas elements in AMap:', canvasElements.length);
                    if (canvasElements.length > 0) {
                      const firstCanvas = canvasElements[0] as HTMLCanvasElement;
                      console.log('[EChartsMap] First canvas:', {
                        width: firstCanvas.width,
                        height: firstCanvas.height,
                        clientWidth: firstCanvas.clientWidth,
                        clientHeight: firstCanvas.clientHeight,
                        display: window.getComputedStyle(firstCanvas).display
                      });
                    }
                    
                    console.log('[EChartsMap] AMap container styled with force');
                  }
                  
                  const allCanvases = this.chartDom?.querySelectorAll('canvas');
                  console.log('[EChartsMap] Total canvases in chartDom:', allCanvases?.length);
                  
                }, 100);
              }
            }
            
            if (this.chartDom && this.chartDom.clientWidth > 0 && this.chartDom.clientHeight > 0) {
              this.chartInstance?.resize();
              console.log('[EChartsMap] Chart resized to:', this.chartDom.clientWidth, 'x', this.chartDom.clientHeight);
            }
          }, 300);
          
          console.log('[EChartsMap] ECharts with AMap initialized successfully');
      } catch (optionErr) {
        console.error('[EChartsMap] Failed to set option:', optionErr);
        throw optionErr;
      }
      
    } catch (e) {
      console.error('[EChartsMap] Failed to initialize AMap chart:', e);
      this.setState({ error: '高德地图初始化失败: ' + (e as Error).message });
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
