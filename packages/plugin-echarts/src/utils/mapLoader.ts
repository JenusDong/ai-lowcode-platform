import { MapDataItem, ScatterDataItem } from '../components/EChartsMap';

export interface MapLoaderConfig {
  mapType: string;
  url?: string;
  data?: any;
}

class MapDataLoader {
  private static cache: Map<string, any> = new Map();
  private static loadingPromises: Map<string, Promise<any>> = new Map();

  static async loadMap(mapType: string, customUrl?: string): Promise<any> {
    const cacheKey = `${mapType}-${customUrl || 'default'}`;

    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    if (this.loadingPromises.has(cacheKey)) {
      return this.loadingPromises.get(cacheKey);
    }

    const loadPromise = this.fetchMapData(mapType, customUrl)
      .then(data => {
        this.cache.set(cacheKey, data);
        this.loadingPromises.delete(cacheKey);
        return data;
      })
      .catch(error => {
        this.loadingPromises.delete(cacheKey);
        throw error;
      });

    this.loadingPromises.set(cacheKey, loadPromise);
    return loadPromise;
  }

  private static async fetchMapData(mapType: string, customUrl?: string): Promise<any> {
    try {
      if (customUrl) {
        const response = await fetch(customUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch map from ${customUrl}`);
        }
        return await response.json();
      }

      switch (mapType) {
        case 'china':
          return await this.loadChinaMap();
        case 'world':
          return await this.loadWorldMap();
        default:
          throw new Error(`Unsupported map type: ${mapType}`);
      }
    } catch (error) {
      console.error('Error loading map data:', error);
      throw error;
    }
  }

  private static async loadChinaMap(): Promise<any> {
    const urls = [
      'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json',
      '/mapData/china.json',
      './china.json'
    ];

    for (const url of urls) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          return await response.json();
        }
      } catch (error) {
        console.warn(`Failed to load from ${url}, trying next...`);
        continue;
      }
    }

    throw new Error('All China map loading attempts failed');
  }

  private static async loadWorldMap(): Promise<any> {
    const urls = [
      'https://echarts-maps.github.io/echarts-geomapping-book-en/data/world.json'
    ];

    for (const url of urls) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          return await response.json();
        }
      } catch (error) {
        console.warn(`Failed to load from ${url}, trying next...`);
        continue;
      }
    }

    throw new Error('All world map loading attempts failed');
  }

  static clearCache(): void {
    this.cache.clear();
    this.loadingPromises.clear();
  }

  static isLoaded(mapType: string): boolean {
    return this.cache.has(mapType);
  }
}

export default MapDataLoader;
