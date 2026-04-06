import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { Spin, Alert } from 'antd';
import { buildComponents, AssetLoader } from '@alilc/lowcode-utils';
import ReactRenderer from '@alilc/lowcode-react-renderer';
import { injectComponents } from '@alilc/lowcode-plugin-inject';
import { getProjectSchemaFromLocalStorage, getPackagesFromLocalStorage } from './services/mockService';

const getScenarioName = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  return params.get('scenarioName') || 'index';
};

const Preview = () => {
  const [data, setData] = useState<any>({});
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    let retryCount = 0;
    const MAX_RETRIES = 2;

    const loadPreview = async (attempt: number = 0) => {
      try {
        const scenarioName = getScenarioName();
        console.log(`[Preview] Loading preview for scenario: ${scenarioName} (attempt ${attempt + 1})`);
        
        const projectSchema = getProjectSchemaFromLocalStorage(scenarioName);
        
        if (!projectSchema) {
          if (mounted) {
            setError('未找到页面 Schema，请先在编辑器中保存页面（点击工具栏"保存"按钮）');
            setLoading(false);
          }
          return;
        }

        const { componentsMap: componentsMapArray, componentsTree } = projectSchema;
        const schema = componentsTree[0];
        
        if (!schema) {
          if (mounted) {
            setError('页面 Schema 结构异常，componentsTree 为空');
            setLoading(false);
          }
          return;
        }
        
        console.log('[Preview] schema loaded, componentName:', schema.componentName);
        console.log('[Preview] componentsMap count:', componentsMapArray?.length || 0);
        
        const packages = getPackagesFromLocalStorage(scenarioName);
        
        if (!packages || packages.length === 0) {
          if (mounted) {
            setError('未找到资源包配置，请确认编辑器已正确初始化物料');
            setLoading(false);
          }
          return;
        }

        console.log('[Preview] packages count:', packages.length);
        console.log('[Preview] packages:', packages.map((p: any) => p.package).join(', '));

        const libraryMap: Record<string, any> = {};
        const libraryAsset: any[] = [];
        
        packages.forEach((pkg: any) => {
          const { package: packageName, library, urls, renderUrls } = pkg;
          
          if (library) {
            libraryMap[packageName] = library;
          }
          
          if (renderUrls) {
            libraryAsset.push(renderUrls);
          } else if (urls) {
            libraryAsset.push(urls);
          }
        });

        console.log('[Preview] libraryMap keys:', Object.keys(libraryMap));
        console.log('[Preview] asset URLs to load:', libraryAsset.flat().length);

        const assetLoader = new AssetLoader();
        
        try {
          await assetLoader.load(libraryAsset);
          console.log('[Preview] All assets loaded successfully via AssetLoader');
        } catch (assetErr: any) {
          console.warn('[Preview] AssetLoader load error (non-fatal):', assetErr.message);
          if (attempt < MAX_RETRIES) {
            console.log(`[Preview] Retrying... (${attempt + 1}/${MAX_RETRIES})`);
            await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
            if (!mounted) return;
            return loadPreview(attempt + 1);
          }
          console.warn('[Preview] Asset loading failed after retries, attempting to continue with pre-loaded globals...');
        }

        const componentsMap: Record<string, any> = {};
        componentsMapArray.forEach((item: any) => {
          if (item.componentName) {
            componentsMap[item.componentName] = item;
          }
        });
        
        let components: Record<string, any>;
        try {
          components = buildComponents(libraryMap, componentsMap);
          console.log('[Preview] buildComponents success, keys:', Object.keys(components));
        } catch (buildErr: any) {
          console.error('[Preview] buildComponents failed:', buildErr);
          throw new Error(`组件构建失败: ${buildErr.message}。请检查依赖库是否已正确加载。`);
        }
        
        let injectedComponents: Record<string, any>;
        try {
          injectedComponents = await injectComponents(components);
          console.log('[Preview] injectComponents success, keys:', Object.keys(injectedComponents));
        } catch (injectErr: any) {
          console.error('[Preview] injectComponents failed:', injectErr);
          throw new Error(`组件注入失败: ${injectErr.message}`);
        }
        
        if (mounted) {
          setData({
            schema,
            components: injectedComponents,
          });
          setLoading(false);
        }
      } catch (err: any) {
        console.error('[Preview] Failed to load preview:', err);
        if (mounted && attempt < MAX_RETRIES) {
          console.log(`[Preview] Retrying due to error... (${attempt + 1}/${MAX_RETRIES})`);
          await new Promise(resolve => setTimeout(resolve, 1500 * (attempt + 1)));
          if (mounted) return loadPreview(attempt + 1);
        }
        if (mounted) {
          const errMsg = err.message || String(err);
          if (errMsg.includes('fetch') || errMsg.includes('network') || errMsg.includes('load') || errMsg.includes('Failed to fetch')) {
            setError('无法加载依赖资源，可能原因：\n\n' +
              '1. CDN 网络不可达（unpkg.com / alicdn.com）\n' +
              '2. 本地 UMD 文件缺失（echarts-component.umd.js 等）\n' +
              '3. 请检查浏览器控制台 Network 面板查看具体失败请求\n\n' +
              '技术详情: ' + errMsg);
          } else {
            setError('加载失败: ' + errMsg);
          }
          setLoading(false);
        }
      }
    };

    loadPreview();
    
    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', padding: '40px' }}>
        <Alert
          type="error"
          message="预览错误"
          description={
            <div style={{ whiteSpace: 'pre-wrap', maxHeight: '400px', overflow: 'auto' }}>
              {error}
            </div>
          }
          style={{ maxWidth: 600, marginBottom: 16 }}
        />
        <a href="./">返回编辑器</a>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <Spin size="large" tip="正在加载页面资源和依赖..." />
        <p style={{ color: '#999', marginTop: 12 }}>首次加载可能需要较长时间，请耐心等待</p>
      </div>
    );
  }

  const { schema, components } = data;

  return (
    <div className="lowcode-plugin-preview">
      <ReactRenderer
        className="lowcode-plugin-preview-content"
        schema={schema}
        components={components}
      />
    </div>
  );
};

ReactDOM.render(<Preview />, document.getElementById('lce-container'));
