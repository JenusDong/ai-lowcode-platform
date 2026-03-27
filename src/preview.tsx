import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { buildComponents, assetBundle, AssetLevel, AssetLoader } from '@alilc/lowcode-utils';
import { ReactRenderer } from '@alilc/lowcode-react-renderer';
import { injectComponents } from '@alilc/lowcode-plugin-inject';
import { getProjectSchemaFromLocalStorage, getPackagesFromLocalStorage } from './services/mockService';

const getScenarioName = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  return params.get('scenarioName') || 'index';
};

const Preview = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const scenarioName = getScenarioName();
    const projectSchema = getProjectSchemaFromLocalStorage(scenarioName);
    if (!projectSchema) {
      window.location.href = './';
      return;
    }
    const { componentsMap: componentsMapArray, componentsTree } = projectSchema;
    const componentsMap: any = {};
    componentsMapArray.forEach((component: any) => {
      componentsMap[component.componentName] = component;
    });
    const schema = componentsTree[0];
    const packages = getPackagesFromLocalStorage(scenarioName);
    if (!packages || !packages.packages) {
      window.location.href = './';
      return;
    }
    const libraryMap = {};
    const libraryAsset = [];
    packages.packages.forEach((pkg: any) => {
      const { package: packageName, library, urls, renderUrls } = pkg;
      if (library && urls) {
        libraryMap[packageName] = library;
      }
      if (renderUrls) {
        libraryAsset.push(renderUrls);
      } else if (urls) {
        libraryAsset.push(urls);
      }
    });
    const assetLoader = new AssetLoader();
    assetLoader.load(libraryAsset).then(() => {
      const components = buildComponents(libraryMap, componentsMap, null);
      injectComponents(components).then((components) => {
        setData({
          schema,
          components,
        });
      });
    });
  }, []);

  const { schema, components } = data as any;
  if (!schema || !components) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" tip="加载中..." />
      </div>
    );
  }

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
