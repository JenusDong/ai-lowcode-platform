import React from 'react';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Select } from 'antd';

const LocaleSelect: React.FC<{
  currentLocale: string;
  onChange: (value: string) => void;
}> = (props): React.ReactElement => {
  const { currentLocale, onChange } = props;
  const currentLocaleValue = currentLocale || 'zh-CN';
  
  const options = [
    { value: 'zh-CN', label: '中文' },
    { value: 'en-US', label: 'English' },
  ];

  return (
    <div className="lowcode-plugin-simulator-locale-select">
      <Select
        id="select"
        onChange={onChange}
        defaultValue={currentLocaleValue}
        aria-label="切换画布区域 locale"
        style={{ marginRight: 8, width: 100 }}
        options={options}
      />
    </div>
  );
};

const SimulatorLocalePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { project, skeleton } = ctx;
      const currentLocale = project.simulatorHost?.get('locale') || 'zh-CN';
      const onLocaleChange = (value: string): void => {
        project.simulatorHost.set('locale', value);
      }
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'simulatorLocale',
        content: <LocaleSelect currentLocale={currentLocale} onChange={onLocaleChange} />,
        props: {
          align: 'center',
        },
      });
    },
  };
}
SimulatorLocalePlugin.pluginName = 'SimulatorLocalePlugin';
SimulatorLocalePlugin.meta = {
};
export default SimulatorLocalePlugin;
