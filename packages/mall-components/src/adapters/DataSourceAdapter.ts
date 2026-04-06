export type DataSourceType = 'rest' | 'mock' | 'variable'

export type DataSourceConfig = {
  type: DataSourceType
  api?: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: Record<string, string>
  mockData?: any
  variableName?: string
  transform?: string
}

export interface DataSourceAdapter {
  fetch(params?: any): Promise<any>
  submit(data: any): Promise<any>
  delete(id: string | number): Promise<any>
  update(id: string | number, data: any): Promise<any>
}

export class DataSourceAdapterFactory {
  static create(config: DataSourceConfig): DataSourceAdapter {
    if (!config) {
      console.warn('[DataSourceAdapterFactory] config is undefined, using mock adapter')
      return new MockDataAdapter({
        type: 'mock',
        mockData: {
          code: 200,
          message: 'success',
          data: {
            pageNum: 1,
            pageSize: 10,
            total: 0,
            list: [],
          },
        },
      })
    }

    if (!config.type) {
      console.warn('[DataSourceAdapterFactory] config.type is undefined, using mock adapter')
      return new MockDataAdapter({
        type: 'mock',
        mockData: config.mockData || {
          code: 200,
          message: 'success',
          data: {
            pageNum: 1,
            pageSize: 10,
            total: 0,
            list: [],
          },
        },
      })
    }

    switch (config.type) {
      case 'rest':
        return new RestApiAdapter(config)
      case 'mock':
        return new MockDataAdapter(config)
      case 'variable':
        return new VariableAdapter(config)
      default:
        console.warn(`[DataSourceAdapterFactory] Unsupported data source type: ${config.type}, using mock adapter`)
        return new MockDataAdapter({
          type: 'mock',
          mockData: {
            code: 200,
            message: 'success',
            data: {
              pageNum: 1,
              pageSize: 10,
              total: 0,
              list: [],
            },
          },
        })
    }
  }
}

import type { DataSourceConfig as IDataSourceConfig } from './DataSourceAdapter'

export class RestApiAdapter implements DataSourceAdapter {
  private config: IDataSourceConfig

  constructor(config: IDataSourceConfig) {
    this.config = config
  }

  async fetch(params?: any): Promise<any> {
    const url = this.buildUrl(params)
    const response = await fetch(url, {
      method: this.config.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...this.config.headers,
      },
      body: this.config.method !== 'GET' ? JSON.stringify(params) : undefined,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    let data = await response.json()

    if (this.config.transform) {
      try {
        const transformFn = new Function('data', this.config.transform)
        data = transformFn(data)
      } catch (error) {
        console.error('Transform function error:', error)
      }
    }

    return data
  }

  async submit(data: any): Promise<any> {
    const response = await fetch(this.config.api!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.config.headers,
      },
      body: JSON.stringify(data),
    })

    return response.json()
  }

  async delete(id: string | number): Promise<any> {
    const response = await fetch(`${this.config.api}/${id}`, {
      method: 'DELETE',
      headers: this.config.headers,
    })

    return response.json()
  }

  async update(id: string | number, data: any): Promise<any> {
    const response = await fetch(`${this.config.api}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...this.config.headers,
      },
      body: JSON.stringify(data),
    })

    return response.json()
  }

  private buildUrl(params?: any): string {
    if (!params || this.config.method !== 'GET') {
      return this.config.api!
    }

    const url = new URL(this.config.api!, window.location.origin)
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== null && params[key] !== '') {
        url.searchParams.append(key, params[key])
      }
    })

    return url.toString()
  }
}

export class MockDataAdapter implements DataSourceAdapter {
  private config: IDataSourceConfig

  constructor(config: IDataSourceConfig) {
    this.config = config
  }

  async fetch(params?: any): Promise<any> {
    console.log('[MockDataAdapter] fetch 被调用，config:', this.config, 'params:', params)
    await new Promise(resolve => setTimeout(resolve, 300))
    
    let data = this.config.mockData
    console.log('[MockDataAdapter] 原始 mockData:', data, '类型:', typeof data)

    if (!data || data === '') {
      console.log('[MockDataAdapter] mockData 为空，使用默认数据')
      data = {
        code: 200,
        message: 'success',
        data: {
          pageNum: 1,
          pageSize: 10,
          total: 50,
          list: [
            {
              id: 1,
              name: '时尚运动鞋',
              productSn: 'PRODUCT001',
              price: 269,
              stock: 100,
              sale: 120,
              brandName: '时尚运动',
              productCategoryName: '鞋子',
              pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
              publishStatus: 1,
              newStatus: 1,
              recommandStatus: 1,
              verifyStatus: 1,
            },
            {
              id: 2,
              name: '休闲T恤',
              productSn: 'PRODUCT002',
              price: 99,
              stock: 200,
              sale: 350,
              brandName: '休闲服饰',
              productCategoryName: '衣服',
              pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
              publishStatus: 1,
              newStatus: 1,
              recommandStatus: 0,
              verifyStatus: 1,
            },
            {
              id: 3,
              name: '双肩背包',
              productSn: 'PRODUCT003',
              price: 189,
              stock: 80,
              sale: 80,
              brandName: '旅行箱包',
              productCategoryName: '配饰',
              pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
              publishStatus: 1,
              newStatus: 0,
              recommandStatus: 1,
              verifyStatus: 1,
            },
            {
              id: 4,
              name: '运动手表',
              productSn: 'PRODUCT004',
              price: 499,
              stock: 50,
              sale: 60,
              brandName: '智能数码',
              productCategoryName: '数码',
              pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
              publishStatus: 1,
              newStatus: 1,
              recommandStatus: 1,
              verifyStatus: 1,
            },
            {
              id: 5,
              name: '牛仔裤',
              productSn: 'PRODUCT005',
              price: 199,
              stock: 150,
              sale: 280,
              brandName: '时尚牛仔',
              productCategoryName: '衣服',
              pic: 'https://img.yzcdn.cn/vant/cat.jpeg',
              publishStatus: 1,
              newStatus: 0,
              recommandStatus: 0,
              verifyStatus: 1,
            },
          ],
        },
      }
    } else {
      try {
        if (typeof data === 'string') {
          data = JSON.parse(data)
        }
        console.log('[MockDataAdapter] JSON 解析后的数据:', data)
      } catch (error) {
        console.error('[MockDataAdapter] JSON 解析失败:', error)
        data = {
          code: 200,
          message: 'success',
          data: {
            pageNum: 1,
            pageSize: 10,
            total: 0,
            list: [],
          },
        }
      }
    }

    if (this.config.transform) {
      try {
        const transformFn = new Function('data', this.config.transform)
        data = transformFn(data)
      } catch (error) {
        console.error('Transform function error:', error)
      }
    }

    console.log('[MockDataAdapter] 最终返回数据:', data)

    if (params?.pageNum && params?.pageSize && data?.data?.list) {
      const start = (params.pageNum - 1) * params.pageSize
      const end = start + params.pageSize
      return {
        ...data,
        data: {
          ...data.data,
          list: data.data.list.slice(start, end),
        },
      }
    }

    return data
  }

  async submit(data: any): Promise<any> {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { code: 200, message: 'success', data }
  }

  async delete(id: string | number): Promise<any> {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { code: 200, message: 'success' }
  }

  async update(id: string | number, data: any): Promise<any> {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { code: 200, message: 'success', data }
  }
}

export class VariableAdapter implements DataSourceAdapter {
  private config: IDataSourceConfig

  constructor(config: IDataSourceConfig) {
    this.config = config
  }

  async fetch(params?: any): Promise<any> {
    const variableName = this.config.variableName
    if (!variableName) {
      throw new Error('Variable name is required for variable adapter')
    }

    const value = (window as any)[variableName]
    return { code: 200, message: 'success', data: value }
  }

  async submit(data: any): Promise<any> {
    const variableName = this.config.variableName
    if (!variableName) {
      throw new Error('Variable name is required for variable adapter')
    }

    (window as any)[variableName] = data
    return { code: 200, message: 'success', data }
  }

  async delete(id: string | number): Promise<any> {
    return { code: 200, message: 'success' }
  }

  async update(id: string | number, data: any): Promise<any> {
    return this.submit(data)
  }
}
