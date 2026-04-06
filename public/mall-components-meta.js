"use strict";
var MallComponentsMeta = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/plugins/plugin-mall-components/entry-meta.ts
  var entry_meta_exports = {};
  __export(entry_meta_exports, {
    default: () => entry_meta_default,
    meta: () => meta
  });

  // src/plugins/plugin-mall-components/meta/productListMeta.ts
  var ProductListMeta = {
    componentName: "ProductList",
    title: "商品列表",
    docUrl: "https://github.com/alibaba/lowcode-engine",
    screenshot: "",
    npm: {
      package: "mall-components",
      version: "1.0.0",
      exportName: "ProductList",
      destructuring: true
    },
    props: [
      {
        name: "dataSourceType",
        propType: "string",
        description: "数据源类型",
        defaultValue: "mock"
      },
      {
        name: "dataSource",
        propType: "string",
        description: "数据源配置",
        defaultValue: ""
      }
    ],
    configure: {
      supports: {
        style: true,
        events: []
      },
      props: [
        {
          type: "group",
          title: "数据源配置",
          display: "accordion",
          items: [
            {
              name: "dataSourceType",
              title: "数据源类型",
              setter: {
                componentName: "SelectSetter",
                props: {
                  options: [
                    { label: "Mock 数据", value: "mock" },
                    { label: "REST API", value: "rest" },
                    { label: "变量绑定", value: "variable" }
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    icon: "https://img.alicdn.com/tfs/TB1p9Nqy.T1gK0jSZFrXXcNCXXa-200-200.png",
    category: "电商业务组件",
    group: "商品管理",
    snippets: [
      {
        title: "商品列表",
        schema: {
          componentName: "ProductList",
          props: {}
        }
      }
    ]
  };
  var productListMeta_default = ProductListMeta;

  // src/plugins/plugin-mall-components/meta/productFormMeta.ts
  var ProductFormMeta = {
    componentName: "ProductForm",
    title: "商品表单",
    docUrl: "https://github.com/alibaba/lowcode-engine",
    screenshot: "",
    npm: {
      package: "mall-components",
      version: "1.0.0",
      exportName: "ProductForm",
      destructuring: true
    },
    props: [
      {
        name: "initialValues",
        propType: "object",
        description: "表单初始值",
        defaultValue: "{}"
      },
      {
        name: "showBasicInfo",
        propType: "bool",
        description: "显示基本信息字段",
        defaultValue: true
      },
      {
        name: "showPriceInfo",
        propType: "bool",
        description: "显示价格信息字段",
        defaultValue: true
      },
      {
        name: "showStockInfo",
        propType: "bool",
        description: "显示库存信息字段",
        defaultValue: true
      },
      {
        name: "showDescription",
        propType: "bool",
        description: "显示描述字段",
        defaultValue: true
      }
    ],
    configure: {
      supports: {
        style: true,
        events: []
      },
      props: [
        {
          type: "group",
          title: "表单配置",
          display: "accordion",
          items: [
            {
              name: "initialValues",
              title: "初始值 (JSON)",
              setter: "TextAreaSetter",
              extraProps: { display: "block", placeholder: '{"name": "", "price": 0}' }
            }
          ]
        },
        {
          type: "group",
          title: "字段显示控制",
          display: "accordion",
          items: [
            {
              name: "showBasicInfo",
              title: "基本信息",
              setter: "BoolSetter",
              extraProps: { display: "block" }
            },
            {
              name: "showPriceInfo",
              title: "价格信息",
              setter: "BoolSetter",
              extraProps: { display: "block" }
            },
            {
              name: "showStockInfo",
              title: "库存信息",
              setter: "BoolSetter",
              extraProps: { display: "block" }
            },
            {
              name: "showDescription",
              title: "描述信息",
              setter: "BoolSetter",
              extraProps: { display: "block" }
            }
          ]
        }
      ]
    },
    icon: "https://img.alicdn.com/tfs/TB1p9Nqy.T1gK0jSZFrXXcNCXXa-200-200.png",
    category: "电商业务组件",
    group: "商品管理",
    snippets: [
      {
        title: "商品表单",
        schema: {
          componentName: "ProductForm",
          props: {
            showBasicInfo: true,
            showPriceInfo: true,
            showStockInfo: true,
            showDescription: true
          }
        }
      }
    ]
  };
  var productFormMeta_default = ProductFormMeta;

  // src/plugins/plugin-mall-components/meta/orderListMeta.ts
  var OrderListMeta = {
    componentName: "OrderList",
    title: "订单列表",
    docUrl: "https://github.com/alibaba/lowcode-engine",
    screenshot: "",
    npm: {
      package: "mall-components",
      version: "1.0.0",
      exportName: "OrderList",
      destructuring: true
    },
    props: [
      {
        name: "dataSourceType",
        propType: "string",
        description: "数据源类型",
        defaultValue: "mock"
      },
      {
        name: "status",
        propType: "string",
        description: "订单状态筛选",
        defaultValue: ""
      }
    ],
    configure: {
      supports: {
        style: true,
        events: []
      },
      props: [
        {
          type: "group",
          title: "数据源配置",
          display: "accordion",
          items: [
            {
              name: "dataSourceType",
              title: "数据源类型",
              setter: {
                componentName: "SelectSetter",
                props: {
                  options: [
                    { label: "Mock 数据", value: "mock" },
                    { label: "REST API", value: "rest" }
                  ]
                }
              }
            },
            {
              name: "status",
              title: "状态筛选",
              setter: {
                componentName: "SelectSetter",
                props: {
                  options: [
                    { label: "全部", value: "" },
                    { label: "待付款", value: "pending" },
                    { label: "已付款", value: "paid" },
                    { label: "已发货", value: "shipped" },
                    { label: "已完成", value: "completed" },
                    { label: "已取消", value: "cancelled" }
                  ]
                }
              }
            }
          ]
        }
      ]
    },
    icon: "https://img.alicdn.com/tfs/TB1p9Nqy.T1gK0jSZFrXXcNCXXa-200-200.png",
    category: "电商业务组件",
    group: "订单管理",
    snippets: [
      {
        title: "订单列表",
        schema: {
          componentName: "OrderList",
          props: {}
        }
      }
    ]
  };
  var orderListMeta_default = OrderListMeta;

  // src/plugins/plugin-mall-components/meta/marketingManagerMeta.ts
  var MarketingManagerMeta = {
    componentName: "MarketingManager",
    title: "营销活动管理",
    docUrl: "https://github.com/alibaba/lowcode-engine",
    screenshot: "",
    npm: {
      package: "mall-components",
      version: "1.0.0",
      exportName: "MarketingManager",
      destructuring: true
    },
    props: [
      {
        name: "type",
        propType: "string",
        description: "营销类型",
        defaultValue: "coupon"
      },
      {
        name: "showStats",
        propType: "bool",
        description: "显示统计数据",
        defaultValue: true
      }
    ],
    configure: {
      supports: {
        style: true,
        events: []
      },
      props: [
        {
          type: "group",
          title: "营销配置",
          display: "accordion",
          items: [
            {
              name: "type",
              title: "营销类型",
              setter: {
                componentName: "SelectSetter",
                props: {
                  options: [
                    { label: "优惠券管理", value: "coupon" },
                    { label: "促销活动", value: "promotion" },
                    { label: "秒杀活动", value: "flash" },
                    { label: "新品推荐", value: "new" },
                    { label: "人气推荐", value: "hot" }
                  ]
                }
              }
            },
            {
              name: "showStats",
              title: "显示统计",
              setter: "BoolSetter",
              extraProps: { display: "block" }
            }
          ]
        }
      ]
    },
    icon: "https://img.alicdn.com/tfs/TB1p9Nqy.T1gK0jSZFrXXcNCXXa-200-200.png",
    category: "电商业务组件",
    group: "营销管理",
    snippets: [
      {
        title: "营销活动管理",
        schema: {
          componentName: "MarketingManager",
          props: {
            type: "coupon",
            showStats: true
          }
        }
      }
    ]
  };
  var marketingManagerMeta_default = MarketingManagerMeta;

  // src/plugins/plugin-mall-components/meta/adminLayoutMeta.ts
  var AdminLayoutMeta = {
    componentName: "AdminLayout",
    title: "管理后台布局",
    docUrl: "https://github.com/alibaba/lowcode-engine",
    screenshot: "",
    npm: {
      package: "mall-components",
      version: "1.0.0",
      exportName: "AdminLayout",
      destructuring: true
    },
    props: [
      {
        name: "defaultSelectedKey",
        propType: "string",
        description: "默认选中的菜单项",
        defaultValue: "dashboard"
      },
      {
        name: "collapsible",
        propType: "bool",
        description: "允许折叠侧边栏",
        defaultValue: true,
        setter: "BoolSetter"
      },
      {
        name: "enableTabs",
        propType: "bool",
        description: "启用多标签页功能",
        defaultValue: true,
        setter: "BoolSetter"
      },
      {
        name: "maxTabs",
        propType: "number",
        description: "最大标签页数量",
        defaultValue: 10,
        setter: "NumberSetter"
      },
      {
        name: "closableTabs",
        propType: "bool",
        description: "标签页可关闭",
        defaultValue: true,
        setter: "BoolSetter"
      },
      {
        name: "logoText",
        propType: "string",
        description: "Logo 文字",
        defaultValue: "Mall Admin"
      }
    ],
    configure: {
      supports: {
        style: true,
        events: [],
        loop: false
      },
      props: [
        {
          type: "group",
          title: "布局配置",
          display: "accordion",
          items: [
            {
              name: "defaultSelectedKey",
              title: "默认选中菜单",
              setter: "InputSetter",
              extraProps: { display: "block", placeholder: "例如：dashboard" }
            },
            {
              name: "collapsible",
              title: "允许折叠侧边栏",
              setter: "BoolSetter",
              extraProps: { display: "block" }
            },
            {
              name: "logoText",
              title: "Logo 文字",
              setter: "InputSetter",
              extraProps: { display: "block" }
            }
          ]
        },
        {
          type: "group",
          title: "标签页配置",
          display: "accordion",
          items: [
            {
              name: "enableTabs",
              title: "启用多标签页",
              setter: "BoolSetter",
              extraProps: { display: "block" }
            },
            {
              name: "maxTabs",
              title: "最大标签数",
              setter: "NumberSetter",
              extraProps: { display: "block", min: 1, max: 20, step: 1 }
            },
            {
              name: "closableTabs",
              title: "标签可关闭",
              setter: "BoolSetter",
              extraProps: { display: "block" }
            }
          ]
        }
      ],
      component: {
        isContainer: true
      }
    },
    icon: "https://img.alicdn.com/tfs/TB1p9Nqy.T1gK0jSZFrXXcNCXXa-200-200.png",
    category: "电商业务组件",
    group: "布局容器",
    snippets: [
      {
        title: "管理后台布局（带 Tab）",
        schema: {
          componentName: "AdminLayout",
          props: {
            defaultSelectedKey: "dashboard",
            collapsible: true,
            enableTabs: true,
            maxTabs: 10,
            closableTabs: true,
            logoText: "Mall Admin"
          }
        }
      },
      {
        title: "管理后台布局（无 Tab）",
        schema: {
          componentName: "AdminLayout",
          props: {
            defaultSelectedKey: "dashboard",
            collapsible: true,
            enableTabs: false,
            logoText: "Mall Admin"
          }
        }
      }
    ]
  };
  var adminLayoutMeta_default = AdminLayoutMeta;

  // src/plugins/plugin-mall-components/entry-meta.ts
  var meta = {
    components: [
      adminLayoutMeta_default,
      productListMeta_default,
      productFormMeta_default,
      orderListMeta_default,
      marketingManagerMeta_default
    ]
  };
  var entry_meta_default = meta;
  return __toCommonJS(entry_meta_exports);
})();
MallComponentsMeta = MallComponentsMeta.default || MallComponentsMeta;
