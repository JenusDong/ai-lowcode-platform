import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
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
    
    const loadPreview = async () => {
      try {
        const scenarioName = getScenarioName();
        console.log('Loading preview for scenario:', scenarioName);
        
        const projectSchema = getProjectSchemaFromLocalStorage(scenarioName);
        console.log('projectSchema:', projectSchema);
        
        if (!projectSchema) {
          if (mounted) {
            setError('未找到页面 Schema，请先在编辑器中保存页面');
            setLoading(false);
          }
          return;
        }
        
        const { componentsMap: componentsMapArray, componentsTree } = projectSchema;
        const schema = componentsTree[0];
        console.log('schema:', schema);
        console.log('componentsMapArray:', componentsMapArray);
        
        const packages = getPackagesFromLocalStorage(scenarioName);
        console.log('packages:', packages);
        
        if (!packages || packages.length === 0) {
          if (mounted) {
            setError('未找到资源包配置');
            setLoading(false);
          }
          return;
        }

        const libraryMap: Record<string, any> = {};
        const libraryAsset: any[] = [];
        
        packages.forEach((pkg: any) => {
          const { package: packageName, library, urls, renderUrls } = pkg;
          console.log('Processing package:', packageName, 'library:', library);
          
          if (library) {
            libraryMap[packageName] = library;
          }
          
          if (renderUrls) {
            libraryAsset.push(renderUrls);
          } else if (urls) {
            libraryAsset.push(urls);
          }
        });

        console.log('libraryMap:', libraryMap);
        console.log('libraryMap keys:', Object.keys(libraryMap));
        console.log('libraryAsset:', libraryAsset);

        const assetLoader = new AssetLoader();
        await assetLoader.load(libraryAsset);
        console.log('Assets loaded');

        const componentsMap: Record<string, any> = {};
        componentsMapArray.forEach((item: any) => {
          if (item.componentName) {
            componentsMap[item.componentName] = item;
          }
        });
        console.log('componentsMap:', componentsMap);
        
        console.log('About to call buildComponents with:');
        console.log('  libraryMap:', libraryMap);
        console.log('  componentsMap:', componentsMap);
        
        const components = buildComponents(libraryMap, componentsMap);
        console.log('Built components:', components);
        console.log('Built components keys:', Object.keys(components));
        
        const injectedComponents = await injectComponents(components);
        console.log('Injected components:', injectedComponents);
        console.log('Injected components keys:', Object.keys(injectedComponents));
        
        if (mounted) {
          setData({
            schema,
            components: injectedComponents,
          });
          setLoading(false);
        }
      } catch (err: any) {
        console.error('Failed to load preview:', err);
        if (mounted) {
          setError('加载失败: ' + err.message);
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <h2>预览错误</h2>
        <p>{error}</p>
        <a href="./">返回编辑器</a>
      </div>
    );
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" tip="加载中..." />
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
