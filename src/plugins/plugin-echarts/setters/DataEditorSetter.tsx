import React, { Component } from 'react';

function parsePath(path: string): (string | number)[] {
  const parts: (string | number)[] = [];
  const segments = path.split('.');
  for (const seg of segments) {
    if (seg === '') continue;
    const num = parseInt(seg, 10);
    parts.push(isNaN(num) ? seg : num);
  }
  return parts;
}

function getNestedValue(obj: any, path: string): any {
  const keys = parsePath(path);
  let current = obj;
  for (const key of keys) {
    if (current === undefined || current === null) return undefined;
    current = current[key];
  }
  return current;
}

function setNestedValue(obj: any, path: string, value: any): void {
  const keys = parsePath(path);
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (current[key] === undefined || current[key] === null) {
      const nextKey = keys[i + 1];
      current[key] = typeof nextKey === 'number' ? [] : {};
    }
    current = current[key];
  }
  const lastKey = keys[keys.length - 1];
  if (value === undefined || value === null || value === '') {
    if (Array.isArray(current)) {
      current.splice(Number(lastKey), 1);
    } else {
      delete current[lastKey];
    }
  } else {
    current[lastKey] = value;
  }
}

function deepEqual(a: any, b: any): boolean {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (typeof a !== 'object' || a === null || b === null) return false;
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(key => deepEqual(a[key], b[key]));
}

function applyChartDataToOption(option: any, chartData: any[]): void {
  if (!Array.isArray(chartData) || chartData.length === 0) return;

  const firstItem = chartData[0];
  
  if (!option.series || !Array.isArray(option.series) || option.series.length === 0) {
    if (firstItem.xValue !== undefined && firstItem.yValue !== undefined) {
      option.series = [{ type: 'scatter', data: [] }];
    } else {
      option.series = [{ type: 'line', data: [] }];
    }
  }

  const chartType = option.series[0].type;

  if (chartType === 'pie') {
    option.series[0].data = chartData.map(item => ({
      name: item.name,
      value: item.value
    }));
  } else if (chartType === 'scatter') {
    option.series[0].data = chartData.map(item => [item.xValue, item.yValue]);
  } else {
    const names = chartData.map(item => item.name);
    
    if (!option.xAxis) {
      option.xAxis = { type: 'category', data: names };
    } else {
      option.xAxis.data = names;
    }

    if (!option.yAxis) {
      option.yAxis = { type: 'value' };
    }

    const isMultiSeries = option.series.length > 1;

    if (isMultiSeries) {
      for (let i = 0; i < option.series.length; i++) {
        const valueKey = `value${i + 1}`;
        if (firstItem[valueKey] !== undefined) {
          option.series[i].data = chartData.map(item => item[valueKey]);
        }
      }
    } else {
      if (firstItem.value !== undefined) {
        option.series[0].data = chartData.map(item => item.value);
      }
    }
  }
}

interface DataEditorSetterProps {
  value?: any;
  onChange: (value: any) => void;
  field?: any;
  jsonPath?: string;
  placeholder?: string;
  defaultValue?: any;
}

interface DataSourceConfig {
  mode: 'static' | 'api';
  url: string;
  method: 'GET' | 'POST';
  headers: string;
  body: string;
  dataPath: string;
  refreshInterval: number;
  enabled: boolean;
}

interface DataEditorSetterState {
  modalVisible: boolean;
  editorText: string;
  originalText: string;
  initialDefaultValue: string;
  initialized: boolean;
  lastOptionJson: string | undefined;
  errorText: string;
  dataSource: DataSourceConfig;
  apiPreviewData: string;
  apiLoading: boolean;
  apiError: string;
  activeTab: 'static' | 'api';
}

const DEFAULT_DATA_SOURCE: DataSourceConfig = {
  mode: 'static',
  url: '',
  method: 'GET',
  headers: '{"Content-Type":"application/json"}',
  body: '{}',
  dataPath: 'data.list',
  refreshInterval: 0,
  enabled: true,
};

class DataEditorSetter extends Component<DataEditorSetterProps, DataEditorSetterState> {

  private refreshTimer: ReturnType<typeof setInterval> | null = null;

  constructor(props: DataEditorSetterProps) {
    super(props);
    this.state = {
      modalVisible: false,
      editorText: '',
      originalText: '',
      initialDefaultValue: props.defaultValue || '',
      initialized: false,
      lastOptionJson: undefined,
      errorText: '',
      dataSource: { ...DEFAULT_DATA_SOURCE },
      apiPreviewData: '',
      apiLoading: false,
      apiError: '',
      activeTab: 'static',
    };
  }

  getOptionJson = (): string | undefined => {
    const { field, value } = this.props;
    
    if (field && typeof field.getPropValue === 'function') {
      try {
        const val = field.getPropValue('optionJson');
        if (val) return val;
      } catch (e) { /* continue */ }
    }
    
    if (field && typeof field.node === 'object') {
      try {
        if (typeof field.node.getPropValue === 'function') {
          const val = field.node.getPropValue('optionJson');
          if (val) return val;
        }
        const val = field.node.props?.optionJson;
        if (val) return val;
      } catch (e) { /* continue */ }
    }
    
    if (typeof value === 'string' && value.trim().startsWith('{')) {
      return value;
    }
    return undefined;
  };

  getDataValue = (): any => {
    const { defaultValue } = this.props;
    const optionJson = this.getOptionJson();
    if (!optionJson && defaultValue !== undefined) return defaultValue;
    if (!optionJson) return undefined;
    try {
      const option = JSON.parse(optionJson);
      
      const chartType = option.series?.[0]?.type;
      
      if (chartType === 'pie') {
        return option.series?.[0]?.data || defaultValue;
      } else if (chartType === 'scatter') {
        const scatterData = option.series?.[0]?.data || [];
        return scatterData.map((item: any, index: number) => ({
          name: `P${index + 1}`,
          xValue: Array.isArray(item) ? item[0] : item.xValue,
          yValue: Array.isArray(item) ? item[1] : item.yValue,
        }));
      } else {
        const xAxisData = option.xAxis?.data || [];
        const seriesData = option.series || [];
        
        if (xAxisData.length === 0) {
          return defaultValue;
        }
        
        const result: any[] = [];
        const isMultiSeries = seriesData.length > 1;
        
        for (let i = 0; i < xAxisData.length; i++) {
          const item: any = { name: xAxisData[i] };
          
          if (isMultiSeries) {
            for (let s = 0; s < seriesData.length; s++) {
              if (seriesData[s]?.data?.[i] !== undefined) {
                item[`value${s + 1}`] = seriesData[s].data[i];
              }
            }
          } else {
            if (seriesData[0]?.data?.[i] !== undefined) {
              item.value = seriesData[0].data[i];
            }
          }
          
          result.push(item);
        }
        
        return result;
      }
    } catch {
      if (defaultValue !== undefined) return defaultValue;
      return undefined;
    }
  };

  formatEditorData = (data: any): string => {
    try {
      if (typeof data === 'string') {
        JSON.parse(data);
        return data;
      }
      return JSON.stringify(data, null, 2);
    } catch {
      return '';
    }
  };

  openModal = () => {
    const dataValue = this.getDataValue();
    const formatted = this.formatEditorData(dataValue);

    let ds: DataSourceConfig = { ...DEFAULT_DATA_SOURCE };
    try {
      const opt = this.getOptionJson();
      if (opt) {
        const parsed = JSON.parse(opt);
        ds = parsed._dataSource || { ...DEFAULT_DATA_SOURCE };
      }
    } catch (e) { /* use default */ }

    this.setState({
      modalVisible: true,
      editorText: formatted,
      originalText: formatted,
      errorText: '',
      dataSource: ds,
      activeTab: ds.mode || 'static',
      apiPreviewData: '',
      apiError: '',
    });
  };

  closeModal = () => {
    this.clearRefreshTimer();
    this.setState({
      modalVisible: false,
      editorText: '',
      originalText: '',
      errorText: '',
      apiLoading: false,
    });
  };

  clearRefreshTimer = () => {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer);
      this.refreshTimer = null;
    }
  };

  handleConfirm = () => {
    const { editorText, dataSource } = this.state;

    if (dataSource.mode === 'api') {
      this.saveDataSource();
      return;
    }

    try {
      const parsedData = JSON.parse(editorText);
      this.setState({ errorText: '' });

      const optionJson = this.getOptionJson();

      try {
        const baseOption = optionJson ? JSON.parse(optionJson) : {};
        
        if (Array.isArray(parsedData)) {
          applyChartDataToOption(baseOption, parsedData);
          delete baseOption._chartData;
        }

        const newOptionJson = JSON.stringify(baseOption, null, 2);
        this.applyOptionJson(newOptionJson);
        this.closeModal();
      } catch (e) {
        console.error('[DataEditorSetter] Failed to update:', e);
      }
    } catch (e) {
      this.setState({ errorText: 'JSON 格式错误，请检查语法：' + String((e as Error).message).substring(0, 80) });
    }
  };

  saveDataSource = () => {
    const { dataSource } = this.state;
    const optionJson = this.getOptionJson();

    try {
      const baseOption = optionJson ? JSON.parse(optionJson) : {};

      baseOption._dataSource = {
        mode: 'api',
        url: dataSource.url,
        method: dataSource.method,
        headers: dataSource.headers,
        body: dataSource.body,
        dataPath: dataSource.dataPath,
        refreshInterval: dataSource.refreshInterval,
        enabled: dataSource.enabled,
      };

      const newOptionJson = JSON.stringify(baseOption, null, 2);
      this.applyOptionJson(newOptionJson);
      this.setupAutoRefresh(dataSource);
      this.closeModal();
    } catch (e) {
      console.error('[DataEditorSetter] Failed to save data source:', e);
    }
  };

  applyOptionJson = (newOptionJson: string) => {
    const { field, onChange } = this.props;
    if (field && typeof field.node === 'object' && field.node.setPropValue) {
      field.node.setPropValue('optionJson', newOptionJson);
    } else if (field && typeof field.setPropValue === 'function') {
      field.setPropValue('optionJson', newOptionJson);
    } else if (onChange) {
      onChange(newOptionJson);
    }
    this.setState({ lastOptionJson: newOptionJson });
  };

  handleReset = () => {
    const { initialDefaultValue } = this.state;
    if (initialDefaultValue) {
      try {
        const parsedData = JSON.parse(initialDefaultValue);
        const optionJson = this.getOptionJson();
        const baseOption = optionJson ? JSON.parse(optionJson) : {};
        
        if (Array.isArray(parsedData)) {
          applyChartDataToOption(baseOption, parsedData);
          delete baseOption._chartData;
        }

        const newOptionJson = JSON.stringify(baseOption, null, 2);
        this.applyOptionJson(newOptionJson);
        this.setState({ 
          editorText: initialDefaultValue, 
          errorText: '' 
        });
      } catch (e) {
        this.setState({ editorText: initialDefaultValue, errorText: '' });
      }
    }
  };

  setupAutoRefresh = (ds: DataSourceConfig) => {
    this.clearRefreshTimer();
    if (ds.enabled && ds.mode === 'api' && ds.refreshInterval && ds.refreshInterval > 0) {
      this.refreshTimer = setInterval(() => {
        this.fetchApiData(false);
      }, ds.refreshInterval * 1000);
    }
  };

  fetchApiData = async (showLoading = true) => {
    const { dataSource } = this.state;
    if (!dataSource.url.trim()) {
      this.setState({ apiError: '请输入 API 地址' });
      return;
    }

    if (showLoading) this.setState({ apiLoading: true, apiError: '' });

    try {
      let headers: Record<string, string> = {};
      try {
        const parsedHeaders = JSON.parse(dataSource.headers || '{}');
        headers = parsedHeaders;
      } catch (e) {
        headers = { 'Content-Type': 'application/json' };
      }

      const options: RequestInit = {
        method: dataSource.method,
        headers,
      };

      if (dataSource.method === 'POST' && dataSource.body) {
        options.body = dataSource.body;
      }

      const response = await fetch(dataSource.url, options);
      const jsonData = await response.json();

      const pathToUse = dataSource.dataPath && dataSource.dataPath.trim() 
        ? dataSource.dataPath 
        : 'data.list';
      
      let extractedData = getNestedValue(jsonData, pathToUse) || jsonData;

      const previewStr = JSON.stringify(extractedData, null, 2);
      this.setState({
        apiPreviewData: JSON.stringify(jsonData, null, 2),
        apiLoading: false,
        editorText: previewStr,
        errorText: '',
      });
    } catch (e: any) {
      this.setState({
        apiError: `请求失败: ${e.message}`,
        apiLoading: false,
      });
    }
  };

  handleCancel = () => {
    this.closeModal();
  };

  handleEditorChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ editorText: e.target.value, errorText: '' });
  };

  handleDsChange = (key: keyof DataSourceConfig, value: any) => {
    this.setState((prev) => ({
      dataSource: { ...prev.dataSource, [key]: value },
    }));
  };

  handleApplyApiData = () => {
    const { apiPreviewData, dataSource } = this.state;
    if (!apiPreviewData) {
      this.setState({ apiError: '没有可应用的数据，请先获取数据' });
      return;
    }
    try {
      const fullResponse = JSON.parse(apiPreviewData);

      let extractedData: any = fullResponse;

      const pathToUse = dataSource.dataPath && dataSource.dataPath.trim() 
        ? dataSource.dataPath 
        : 'data.list';
      
      const pathParts = pathToUse.split('.').filter(Boolean);
      for (const part of pathParts) {
        if (extractedData && typeof extractedData === 'object' && part in extractedData) {
          extractedData = extractedData[part];
        } else {
          this.setState({ errorText: `数据路径 "${pathToUse}" 提取失败，路径不存在` });
          return;
        }
      }

      if (Array.isArray(extractedData)) {
        const optionJson = this.getOptionJson();
        const baseOption = optionJson ? JSON.parse(optionJson) : {};
        
        applyChartDataToOption(baseOption, extractedData);
        delete baseOption._chartData;
        
        const newOptionJson = JSON.stringify(baseOption, null, 2);
        this.applyOptionJson(newOptionJson);
        this.closeModal();
      } else {
        this.setState({ errorText: '提取的数据格式不正确，期望数组' });
      }
    } catch (e) {
      this.setState({ errorText: 'API 返回数据格式异常: ' + String((e as Error).message).substring(0, 60) });
    }
  };

  componentDidMount() {
    const dataValue = this.getDataValue();
    this.setState({
      initialized: true,
      lastOptionJson: this.getOptionJson(),
    });
  }

  componentDidUpdate(prevProps: DataEditorSetterProps) {
    const optionJson = this.getOptionJson();
    const { lastOptionJson } = this.state;
    if (optionJson !== lastOptionJson) {
      this.setState({ lastOptionJson: optionJson });
    }
  }

  componentWillUnmount() {
    this.clearRefreshTimer();
  }

  renderLineNumbers(text: string): string[] {
    const lines = text.split('\n');
    const maxDigits = String(lines.length).length;
    return lines.map((_, i) => String(i + 1).padStart(maxDigits, ' '));
  }

  render() {
    const { modalVisible, editorText, errorText, dataSource, apiPreviewData, apiLoading, apiError, activeTab } = this.state;

    const safeText = editorText || '';
    const lineNumbers = this.renderLineNumbers(safeText);

    return (
      <div className="data-editor-setter">
        <button type="button" className="data-editor-btn" onClick={this.openModal}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 4 }}>
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          编辑数据
        </button>

        {modalVisible && (
          <>
            <div className="data-editor-overlay" onClick={this.handleCancel} />
            <div className="data-editor-modal">
              <div className="data-editor-header">
                <span className="data-editor-title">数据编辑</span>
                <button type="button" className="data-editor-close-btn" onClick={this.closeModal}>✕</button>
              </div>

              <div className="data-editor-tabs">
                <button
                  type="button"
                  className={`data-editor-tab ${activeTab === 'static' ? 'active' : ''}`}
                  onClick={() => this.setState({ activeTab: 'static' })}
                >
                  📝 静态数据
                </button>
                <button
                  type="button"
                  className={`data-editor-tab ${activeTab === 'api' ? 'active' : ''}`}
                  onClick={() => this.setState({ activeTab: 'api' })}
                >
                  🔗 API 数据源
                </button>
              </div>

              <div className="data-editor-body">
                {activeTab === 'static' ? (
                  <>
                    <div className="data-editor-code-container">
                      <div className="data-editor-line-numbers">
                        {lineNumbers.map((num, idx) => (
                          <div key={idx} className="data-editor-line-num">{num}</div>
                        ))}
                      </div>
                      <textarea
                        className="data-editor-textarea"
                        value={safeText}
                        onChange={this.handleEditorChange}
                        spellCheck={false}
                        autoFocus
                      />
                    </div>
                    {errorText && <div className="data-editor-error">{errorText}</div>}
                    <div className="data-editor-actions">
                      <button
                        type="button"
                        className="data-editor-reset-btn"
                        onClick={this.handleReset}
                        disabled={!this.state.initialDefaultValue}
                      >
                        ↺ 重置为默认值
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="data-api-config">
                    <div className="api-row">
                      <label className="api-label">请求地址</label>
                      <input
                        type="text"
                        className="api-input"
                        value={dataSource.url}
                        placeholder="https://api.example.com/data"
                        onChange={(e) => this.handleDsChange('url', e.target.value)}
                      />
                    </div>
                    <div className="api-row-group">
                      <div className="api-row-half">
                        <label className="api-label">请求方法</label>
                        <select
                          className="api-select"
                          value={dataSource.method}
                          onChange={(e) => this.handleDsChange('method', e.target.value)}
                        >
                          <option value="GET">GET</option>
                          <option value="POST">POST</option>
                        </select>
                      </div>
                      <div className="api-row-half">
                        <label className="api-label">自动刷新(秒)</label>
                        <input
                          type="number"
                          className="api-input-sm"
                          value={dataSource.refreshInterval || ''}
                          placeholder="0=不刷新"
                          min={0}
                          onChange={(e) => this.handleDsChange('refreshInterval', parseInt(e.target.value) || 0)}
                        />
                      </div>
                    </div>
                    <div className="api-row">
                      <label className="api-label">请求头 (JSON)</label>
                      <textarea
                        className="api-textarea-sm"
                        value={dataSource.headers}
                        rows={2}
                        onChange={(e) => this.handleDsChange('headers', e.target.value)}
                      />
                    </div>
                    {dataSource.method === 'POST' && (
                      <div className="api-row">
                        <label className="api-label">请求体 (JSON)</label>
                        <textarea
                          className="api-textarea-sm"
                          value={dataSource.body}
                          rows={3}
                          onChange={(e) => this.handleDsChange('body', e.target.value)}
                        />
                      </div>
                    )}
                    <div className="api-row">
                      <label className="api-label">数据路径</label>
                      <input
                        type="text"
                        className="api-input"
                        value={dataSource.dataPath}
                        placeholder="默认: data.list"
                        onChange={(e) => this.handleDsChange('dataPath', e.target.value)}
                      />
                    </div>
                    <div className="api-actions">
                      <button
                        type="button"
                        className="api-fetch-btn"
                        onClick={() => this.fetchApiData(true)}
                        disabled={apiLoading}
                      >
                        {apiLoading ? '⏳ 请求中...' : '🚀 测试获取'}
                      </button>
                    </div>
                    {apiError && <div className="data-editor-error">{apiError}</div>}
                    {apiPreviewData && (
                      <div className="api-preview-section">
                        <div className="api-preview-header">
                          <span>API 返回数据预览</span>
                          <button
                            type="button"
                            className="api-apply-btn"
                            onClick={this.handleApplyApiData}
                          >
                            ✓ 应用到静态数据
                          </button>
                        </div>
                        <pre className="api-preview-data">{apiPreviewData}</pre>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="data-editor-footer">
                <button type="button" className="data-editor-confirm-btn" onClick={this.handleConfirm}>
                  确认
                </button>
                <button type="button" className="data-editor-cancel-btn" onClick={this.handleCancel}>
                  取消
                </button>
              </div>
            </div>
          </>
        )}

        <style>{`
          .data-editor-setter { display: inline-block; }
          .data-editor-btn {
            display: inline-flex; align-items: center; padding: 4px 12px; font-size: 13px;
            color: #fff; background-color: #1890ff; border: none; border-radius: 4px;
            cursor: pointer; transition: background-color 0.2s;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 22px;
          }
          .data-editor-btn:hover { background-color: #40a9ff; }
          .data-editor-overlay {
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background-color: rgba(0, 0, 0, 0.45); z-index: 10000; animation: fadeIn 0.2s ease;
          }
          .data-editor-modal {
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            width: 640px; max-height: 80vh; background: #fff; border-radius: 8px;
            box-shadow: 0 6px 30px rgba(0, 0, 0, 0.15); z-index: 10001;
            display: flex; flex-direction: column; overflow: hidden;
            animation: slideIn 0.25s ease;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          }
          .data-editor-header {
            display: flex; align-items: center; justify-content: space-between;
            padding: 16px 20px; border-bottom: 1px solid #f0f0f0;
          }
          .data-editor-title { font-size: 15px; font-weight: 600; color: #333; }
          .data-editor-close-btn {
            width: 28px; height: 28px; display: flex; align-items: center; justify-content: center;
            border: none; background: transparent; cursor: pointer; border-radius: 4px;
            color: #999; font-size: 16px; transition: all 0.2s;
          }
          .data-editor-close-btn:hover { background: #f5f5f5; color: #666; }

          .data-editor-tabs {
            display: flex; border-bottom: 1px solid #f0f0f0; padding: 0 20px;
          }
          .data-editor-tab {
            padding: 10px 18px; font-size: 13px; color: #666; background: transparent;
            border: none; cursor: pointer; position: relative; transition: all 0.2s;
            font-family: inherit;
          }
          .data-editor-tab.active {
            color: #1890ff; font-weight: 500;
          }
          .data-editor-tab.active::after {
            content: ''; position: absolute; bottom: -1px; left: 0; right: 0;
            height: 2px; background: #1890ff;
          }
          .data-editor-tab:hover:not(.active) { color: #333; }

          .data-editor-body { flex: 1; overflow-y: auto; padding: 0; }
          .data-editor-code-container { display: flex; min-height: 340px; max-height: 480px; }
          .data-editor-line-numbers {
            flex-shrink: 0; width: 48px; padding: 12px 8px; background: #fafafa;
            border-right: 1px solid #f0f0f0; text-align: right; user-select: none; overflow: hidden;
          }
          .data-editor-line-num {
            font-family: "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
            font-size: 13px; line-height: 21px; color: #bbb; height: 21px;
          }
          .data-editor-textarea {
            flex: 1; padding: 12px 16px; border: none; outline: none; resize: none;
            font-family: "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
            font-size: 13px; line-height: 21px; color: #333; background: #fff; tab-size: 2;
          }
          .data-editor-error {
            padding: 10px 16px; background: #fff2f0; border-top: 1px solid #ffccc7;
            color: #ff4d4f; font-size: 13px; word-break: break-all;
          }
          .data-editor-actions {
            padding: 10px 16px; border-top: 1px solid #f0f0f0; display: flex; justify-content: flex-start;
          }
          .data-editor-reset-btn {
            padding: 6px 12px; font-size: 13px; color: #666; background: #fff;
            border: 1px solid #d9d9d9; border-radius: 4px; cursor: pointer; transition: all 0.2s; font-family: inherit;
          }
          .data-editor-reset-btn:hover:not(:disabled) { border-color: #1890ff; color: #1890ff; }
          .data-editor-reset-btn:disabled { opacity: 0.5; cursor: not-allowed; }
          .data-editor-footer {
            display: flex; justify-content: flex-end; gap: 8px; padding: 12px 20px;
            border-top: 1px solid #f0f0f0;
          }
          .data-editor-confirm-btn {
            padding: 6px 20px; font-size: 14px; color: #fff; background: #1890ff;
            border: none; border-radius: 4px; cursor: pointer; transition: background 0.2s; font-family: inherit;
          }
          .data-editor-confirm-btn:hover { background: #40a9ff; }
          .data-editor-cancel-btn {
            padding: 6px 20px; font-size: 14px; color: #666; background: #fff;
            border: 1px solid #d9d9d9; border-radius: 4px; cursor: pointer; transition: all 0.2s; font-family: inherit;
          }
          .data-editor-cancel-btn:hover { border-color: #1890ff; color: #1890ff; }

          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideIn {
            from { opacity: 0; transform: translate(-50%, -48%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
          }

          .data-api-config { padding: 16px 20px; }
          .api-row { margin-bottom: 14px; }
          .api-row-group { display: flex; gap: 12px; margin-bottom: 14px; }
          .api-row-half { flex: 1; }
          .api-label {
            display: block; font-size: 12px; color: #666; margin-bottom: 4px; font-weight: 500;
          }
          .api-input {
            width: 100%; padding: 7px 10px; border: 1px solid #d9d9d9; border-radius: 4px;
            font-size: 13px; outline: none; transition: border-color 0.2s;
            font-family: inherit;
          }
          .api-input:focus { border-color: #1890ff; box-shadow: 0 0 0 2px rgba(24,144,255,0.1); }
          .api-input-sm {
            width: 100%; padding: 7px 10px; border: 1px solid #d9d9d9; border-radius: 4px;
            font-size: 13px; outline: none;
          }
          .api-select {
            width: 100%; padding: 7px 10px; border: 1px solid #d9d9d9; border-radius: 4px;
            font-size: 13px; outline: none; background: #fff;
          }
          .api-textarea-sm {
            width: 100%; padding: 7px 10px; border: 1px solid #d9d9d9; border-radius: 4px;
            font-size: 12px; font-family: "SF Mono", Menlo, Consolas, monospace;
            resize: vertical; outline: none;
          }
          .api-actions { margin: 16px 0; }
          .api-fetch-btn {
            padding: 8px 20px; font-size: 13px; color: #fff; background: #52c41a;
            border: none; border-radius: 4px; cursor: pointer; transition: background 0.2s;
            font-family: inherit;
          }
          .api-fetch-btn:hover { background: #73d13d; }
          .api-fetch-btn:disabled { background: #bfbfbf; cursor: not-allowed; }
          .api-preview-section {
            margin-top: 16px; border: 1px solid #e8e8e8; border-radius: 6px; overflow: hidden;
          }
          .api-preview-header {
            display: flex; justify-content: space-between; align-items: center;
            padding: 8px 12px; background: #fafafa; border-bottom: 1px solid #e8e8e8;
            font-size: 12px; color: #666; font-weight: 500;
          }
          .api-apply-btn {
            padding: 3px 10px; font-size: 12px; color: #1890ff; background: #e6f7ff;
            border: 1px solid #91d5ff; border-radius: 3px; cursor: pointer; font-family: inherit;
          }
          .api-apply-btn:hover { background: #bae7ff; }
          .api-preview-data {
            margin: 0; padding: 12px; max-height: 200px; overflow: auto;
            font-family: "SF Mono", Menlo, Consolas, monospace; font-size: 12px;
            line-height: 1.6; color: #333; background: #fff; white-space: pre-wrap;
            word-break: break-all;
          }
        `}</style>
      </div>
    );
  }
}

export default DataEditorSetter;
