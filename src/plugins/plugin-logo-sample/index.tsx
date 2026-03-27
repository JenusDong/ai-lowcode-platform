import React from 'react';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';
import { Dropdown, Menu } from 'antd';
import type { MenuProps } from 'antd';
import './index.scss';
export interface IProps {
  logo?: string;
  href?: string;
  scenarioInfo?: any;
  scenarioDisplayName?: string;
}

const Logo: React.FC<IProps> = (props): React.ReactElement => {
  const { scenarioDisplayName, scenarioInfo } = props;
  const urls = scenarioInfo?.urls || [];
  
  const menuItems: MenuProps['items'] = urls.map((url: any) => ({
    key: url.value,
    label: url.key,
  }));

  const onMenuClick: MenuProps['onClick'] = (e) => {
    window.open(e.key, '_blank');
  };

  return (
    <div className="lowcode-plugin-logo">
      <a className="logo" target="blank" href={props.href || 'https://lowcode-engine.cn'} style={{ backgroundImage: `url(${props.logo})` }} />
      <div className="scenario-name">{scenarioDisplayName}</div>
      {
      urls && urls.length > 0 && (
        <Dropdown
          menu={{ items: menuItems, onClick: onMenuClick }}
          trigger={['click']}
        >
          <img
            style={{
              height: '18px',
              position: 'relative',
              top: '-2px',
              cursor: 'pointer',
            }}
            src="https://img.alicdn.com/imgextra/i4/O1CN013upU1R1yl5wVezP8k_!!6000000006618-2-tps-512-512.png"
          />
        </Dropdown>
      )
    }
    </div>
  );
};
const LogoSamplePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    async init() {
      const { skeleton, config } = ctx;
      const scenarioDisplayName = config.get('scenarioDisplayName');
      const scenarioInfo = config.get('scenarioInfo');
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'logo',
        content: <Logo scenarioDisplayName={scenarioDisplayName} scenarioInfo={scenarioInfo}  />,
        contentProps: {
          logo: 'https://img.alicdn.com/imgextra/i4/O1CN013w2bmQ25WAIha4Hx9_!!6000000007533-55-tps-137-26.svg',
          href: 'https://lowcode-engine.cn',
        },
        props: {
          align: 'left',
        },
      });
    },
  };
}
LogoSamplePlugin.pluginName = 'LogoSamplePlugin';
LogoSamplePlugin.meta = {
  dependencies: ['EditorInitPlugin'],
};
export default LogoSamplePlugin;
