(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MallComponentsMeta = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {
var __META_RAW__ = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
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
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // external:react
  var require_react = __commonJS({
    "external:react"(exports, module) {
      module.exports = Object.assign(window.React, { jsx: window.React.createElement, jsxs: window.React.createElement, Fragment: window.React.Fragment });
    }
  });

  // src/meta.ts
  var meta_exports = {};
  __export(meta_exports, {
    default: () => meta_default
  });

  // src/meta/icons.ts
  var import_react = __toESM(require_react());
  var getIconComponent = (iconName) => {
    const icons = window.icons;
    if (!icons || !icons[iconName]) {
      console.warn(`[MallComponents] Icon "${iconName}" not found in window.icons`);
      return null;
    }
    return icons[iconName];
  };
  var Icons = {
    get list() {
      const Icon = getIconComponent("BarsOutlined");
      return Icon ? import_react.default.createElement(Icon) : null;
    },
    get form() {
      const Icon = getIconComponent("FormOutlined");
      return Icon ? import_react.default.createElement(Icon) : null;
    },
    get gift() {
      const Icon = getIconComponent("GiftOutlined");
      return Icon ? import_react.default.createElement(Icon) : null;
    },
    get star() {
      const Icon = getIconComponent("StarOutlined");
      return Icon ? import_react.default.createElement(Icon) : null;
    },
    get user() {
      const Icon = getIconComponent("UserOutlined");
      return Icon ? import_react.default.createElement(Icon) : null;
    },
    get team() {
      const Icon = getIconComponent("TeamOutlined");
      return Icon ? import_react.default.createElement(Icon) : null;
    },
    get file() {
      const Icon = getIconComponent("FileOutlined");
      return Icon ? import_react.default.createElement(Icon) : null;
    }
  };

  // src/meta/productListMeta.ts
  var defaultMockData = {
    code: 200,
    message: "success",
    data: {
      pageNum: 1,
      pageSize: 10,
      total: 50,
      list: [
        {
          id: 1,
          name: "\u65F6\u5C1A\u8FD0\u52A8\u978B",
          productSn: "PRODUCT001",
          price: 299,
          stock: 100,
          sale: 120,
          brandName: "\u65F6\u5C1A\u8FD0\u52A8",
          productCategoryName: "\u978B\u5B50",
          pic: "https://img.yzcdn.cn/vant/cat.jpeg",
          publishStatus: 1,
          newStatus: 1,
          recommandStatus: 1,
          verifyStatus: 1
        },
        {
          id: 2,
          name: "\u4F11\u95F2T\u6064",
          productSn: "PRODUCT002",
          price: 99,
          stock: 200,
          sale: 350,
          brandName: "\u4F11\u95F2\u670D\u9970",
          productCategoryName: "\u8863\u670D",
          pic: "https://img.yzcdn.cn/vant/cat.jpeg",
          publishStatus: 1,
          newStatus: 1,
          recommandStatus: 0,
          verifyStatus: 1
        },
        {
          id: 3,
          name: "\u53CC\u80A9\u80CC\u5305",
          productSn: "PRODUCT003",
          price: 189,
          stock: 80,
          sale: 80,
          brandName: "\u65C5\u884C\u7BB1\u5305",
          productCategoryName: "\u914D\u9970",
          pic: "https://img.yzcdn.cn/vant/cat.jpeg",
          publishStatus: 1,
          newStatus: 0,
          recommandStatus: 1,
          verifyStatus: 1
        },
        {
          id: 4,
          name: "\u8FD0\u52A8\u624B\u8868",
          productSn: "PRODUCT004",
          price: 499,
          stock: 50,
          sale: 60,
          brandName: "\u667A\u80FD\u6570\u7801",
          productCategoryName: "\u6570\u7801",
          pic: "https://img.yzcdn.cn/vant/cat.jpeg",
          publishStatus: 1,
          newStatus: 1,
          recommandStatus: 1,
          verifyStatus: 1
        },
        {
          id: 5,
          name: "\u725B\u4ED4\u88E4",
          productSn: "PRODUCT005",
          price: 199,
          stock: 150,
          sale: 280,
          brandName: "\u65F6\u5C1A\u725B\u4ED4",
          productCategoryName: "\u8863\u670D",
          pic: "https://img.yzcdn.cn/vant/cat.jpeg",
          publishStatus: 1,
          newStatus: 0,
          recommandStatus: 0,
          verifyStatus: 1
        }
      ]
    }
  };
  var productListMeta_default = {
    componentName: "ProductList",
    title: "\u5546\u54C1\u5217\u8868",
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
        description: "\u6570\u636E\u6E90\u7C7B\u578B",
        defaultValue: "mock"
      },
      {
        name: "api",
        propType: "string",
        description: "API \u5730\u5740"
      },
      {
        name: "method",
        propType: "string",
        description: "\u8BF7\u6C42\u65B9\u6CD5",
        defaultValue: "GET"
      },
      {
        name: "mockData",
        propType: "string",
        description: "Mock \u6570\u636E",
        defaultValue: JSON.stringify(defaultMockData)
      },
      {
        name: "variableName",
        propType: "string",
        description: "\u53D8\u91CF\u540D\u79F0"
      },
      {
        name: "showFilter",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u7B5B\u9009\u641C\u7D22\u533A\u57DF",
        defaultValue: true
      },
      {
        name: "showAction",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u64CD\u4F5C\u533A\u57DF",
        defaultValue: true
      },
      {
        name: "showSelection",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u9009\u62E9\u5217",
        defaultValue: true
      },
      {
        name: "showOperation",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u64CD\u4F5C\u5217",
        defaultValue: true
      },
      {
        name: "showStatus",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u72B6\u6001\u5217",
        defaultValue: true
      },
      {
        name: "showPagination",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u5206\u9875\u533A\u57DF",
        defaultValue: true
      },
      {
        name: "actionButtons",
        propType: "array",
        description: "\u64CD\u4F5C\u6309\u94AE\u914D\u7F6E"
      },
      {
        name: "batchOperations",
        propType: "array",
        description: "\u6279\u91CF\u64CD\u4F5C\u914D\u7F6E"
      }
    ],
    configure: {
      supports: {
        style: true,
        events: [
          { name: "onRowClick", description: "\u884C\u70B9\u51FB" },
          { name: "onSearch", description: "\u641C\u7D22" },
          { name: "onPageChange", description: "\u5206\u9875\u53D8\u5316" },
          { name: "onActionClick", description: "\u64CD\u4F5C\u6309\u94AE\u70B9\u51FB" },
          { name: "onBatchOperation", description: "\u6279\u91CF\u64CD\u4F5C" }
        ]
      },
      props: [
        {
          type: "group",
          title: "\u6570\u636E\u6E90\u914D\u7F6E",
          display: "accordion",
          items: [
            {
              name: "dataSourceType",
              title: "\u6570\u636E\u6E90\u7C7B\u578B",
              setter: {
                componentName: "SelectSetter",
                props: {
                  options: [
                    { label: "REST API", value: "rest" },
                    { label: "Mock \u6570\u636E", value: "mock" },
                    { label: "\u53D8\u91CF\u7ED1\u5B9A", value: "variable" }
                  ]
                }
              },
              extraProps: {
                display: "block"
              }
            },
            {
              name: "api",
              title: "REST API \u914D\u7F6E",
              setter: {
                componentName: "RestApiTester",
                props: {}
              },
              extraProps: {
                display: "block"
              },
              condition: (target) => {
                return target.getProps().getPropValue("dataSourceType") === "rest";
              }
            },
            {
              name: "mockData",
              title: "Mock \u6570\u636E",
              setter: "StringSetter",
              extraProps: {
                display: "block"
              },
              condition: (target) => {
                return target.getProps().getPropValue("dataSourceType") === "mock";
              }
            },
            {
              name: "variableName",
              title: "\u53D8\u91CF\u540D\u79F0",
              setter: "StringSetter",
              extraProps: {
                display: "block"
              },
              condition: (target) => {
                return target.getProps().getPropValue("dataSourceType") === "variable";
              }
            }
          ]
        },
        {
          type: "group",
          title: "\u533A\u57DF\u663E\u793A\u63A7\u5236",
          display: "accordion",
          items: [
            { name: "showFilter", title: "\u663E\u793A\u7B5B\u9009\u533A\u57DF", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showAction", title: "\u663E\u793A\u64CD\u4F5C\u533A\u57DF", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showSelection", title: "\u663E\u793A\u9009\u62E9\u5217", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showOperation", title: "\u663E\u793A\u64CD\u4F5C\u5217", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showStatus", title: "\u663E\u793A\u72B6\u6001\u5217", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showPagination", title: "\u663E\u793A\u5206\u9875", setter: "BoolSetter", extraProps: { display: "block" } }
          ]
        },
        {
          type: "group",
          title: "\u64CD\u4F5C\u914D\u7F6E",
          display: "accordion",
          items: [
            {
              name: "actionButtons",
              title: "\u64CD\u4F5C\u6309\u94AE",
              setter: {
                componentName: "ArraySetter",
                props: {
                  item: {
                    setters: [
                      {
                        componentName: "ObjectSetter",
                        props: {
                          config: {
                            items: [
                              { name: "text", description: "\u6309\u94AE\u6587\u672C", setter: "StringSetter" },
                              {
                                name: "icon",
                                description: "\u56FE\u6807",
                                setter: {
                                  componentName: "SelectSetter",
                                  props: {
                                    options: [
                                      { label: "\u52A0\u53F7", value: "plus" },
                                      { label: "\u4E0B\u8F7D", value: "download" },
                                      { label: "\u4E0A\u4F20", value: "upload" }
                                    ]
                                  }
                                }
                              },
                              {
                                name: "type",
                                description: "\u6309\u94AE\u7C7B\u578B",
                                setter: {
                                  componentName: "SelectSetter",
                                  props: {
                                    options: [
                                      { label: "\u4E3B\u8981\u6309\u94AE", value: "primary" },
                                      { label: "\u9ED8\u8BA4\u6309\u94AE", value: "default" },
                                      { label: "\u865A\u7EBF\u6309\u94AE", value: "dashed" },
                                      { label: "\u94FE\u63A5\u6309\u94AE", value: "link" },
                                      { label: "\u6587\u672C\u6309\u94AE", value: "text" }
                                    ]
                                  }
                                }
                              },
                              { name: "onClick", description: "\u70B9\u51FB\u4E8B\u4EF6", setter: "StringSetter" }
                            ]
                          }
                        }
                      }
                    ]
                  }
                }
              },
              extraProps: {
                display: "block"
              }
            },
            {
              name: "batchOperations",
              title: "\u6279\u91CF\u64CD\u4F5C",
              setter: {
                componentName: "ArraySetter",
                props: {
                  item: {
                    setters: [
                      {
                        componentName: "ObjectSetter",
                        props: {
                          config: {
                            items: [
                              { name: "text", description: "\u64CD\u4F5C\u540D\u79F0", setter: "StringSetter" },
                              { name: "value", description: "\u64CD\u4F5C\u503C", setter: "StringSetter" },
                              { name: "action", description: "\u64CD\u4F5C\u52A8\u4F5C", setter: "StringSetter" }
                            ]
                          }
                        }
                      }
                    ]
                  }
                }
              },
              extraProps: {
                display: "block"
              }
            }
          ]
        }
      ]
    },
    icon: Icons.list,
    category: "\u7535\u5546\u4E1A\u52A1",
    group: "\u5546\u54C1\u7BA1\u7406",
    snippets: [
      {
        title: "\u5B8C\u6574\u5546\u54C1\u5217\u8868",
        schema: {
          componentName: "ProductList",
          props: {
            dataSourceType: "mock",
            mockData: JSON.stringify(defaultMockData),
            showFilter: true,
            showAction: true,
            showSelection: true,
            showOperation: true,
            showStatus: true,
            showPagination: true,
            actionButtons: [
              { text: "\u6DFB\u52A0\u5546\u54C1", icon: "plus", type: "primary", onClick: "addProduct" },
              { text: "\u5BFC\u51FA", icon: "download", type: "default" }
            ],
            batchOperations: [
              { text: "\u6279\u91CF\u4E0A\u67B6", value: "publishOn" },
              { text: "\u6279\u91CF\u4E0B\u67B6", value: "publishOff" },
              { text: "\u6279\u91CF\u5220\u9664", value: "delete" }
            ]
          }
        }
      },
      {
        title: "\u7B80\u6D01\u5546\u54C1\u5217\u8868",
        schema: {
          componentName: "ProductList",
          props: {
            dataSourceType: "mock",
            mockData: JSON.stringify(defaultMockData),
            showFilter: false,
            showAction: false,
            showSelection: false,
            showOperation: false,
            showStatus: false,
            showPagination: true
          }
        }
      },
      {
        title: "\u53EA\u8BFB\u5546\u54C1\u5217\u8868",
        schema: {
          componentName: "ProductList",
          props: {
            dataSourceType: "mock",
            mockData: JSON.stringify(defaultMockData),
            showFilter: true,
            showAction: false,
            showSelection: false,
            showOperation: false,
            showStatus: true,
            showPagination: true
          }
        }
      }
    ]
  };

  // src/meta/productFormMeta.ts
  var ProductFormMeta = {
    componentName: "ProductForm",
    title: "\u5546\u54C1\u8868\u5355",
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
        propType: "string",
        description: "\u8868\u5355\u521D\u59CB\u503C\uFF08JSON \u683C\u5F0F\uFF09",
        defaultValue: "{}"
      },
      {
        name: "mode",
        propType: "string",
        description: "\u8868\u5355\u6A21\u5F0F",
        defaultValue: "create",
        setter: {
          componentName: "SelectSetter",
          props: {
            options: [
              { label: "\u521B\u5EFA\u6A21\u5F0F", value: "create" },
              { label: "\u7F16\u8F91\u6A21\u5F0F", value: "edit" },
              { label: "\u67E5\u770B\u6A21\u5F0F", value: "view" }
            ]
          }
        }
      },
      {
        name: "showBasicInfo",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u57FA\u672C\u4FE1\u606F",
        defaultValue: true,
        setter: "BoolSetter"
      },
      {
        name: "showPriceInfo",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u4EF7\u683C\u4FE1\u606F",
        defaultValue: true,
        setter: "BoolSetter"
      },
      {
        name: "showStockInfo",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u5E93\u5B58\u4FE1\u606F",
        defaultValue: true,
        setter: "BoolSetter"
      },
      {
        name: "showStatusInfo",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u72B6\u6001\u4FE1\u606F",
        defaultValue: true,
        setter: "BoolSetter"
      },
      {
        name: "showDescription",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u63CF\u8FF0\u4FE1\u606F",
        defaultValue: true,
        setter: "BoolSetter"
      }
    ],
    configure: {
      supports: {
        style: true,
        events: [
          { name: "onSubmit", description: "\u63D0\u4EA4" },
          { name: "onCancel", description: "\u53D6\u6D88" }
        ]
      },
      props: [
        {
          type: "group",
          title: "\u8868\u5355\u914D\u7F6E",
          display: "accordion",
          items: [
            {
              name: "mode",
              title: "\u8868\u5355\u6A21\u5F0F",
              setter: {
                componentName: "SelectSetter",
                props: {
                  options: [
                    { label: "\u521B\u5EFA\u6A21\u5F0F", value: "create" },
                    { label: "\u7F16\u8F91\u6A21\u5F0F", value: "edit" },
                    { label: "\u67E5\u770B\u6A21\u5F0F", value: "view" }
                  ]
                }
              }
            },
            {
              name: "initialValues",
              title: "\u8868\u5355\u521D\u59CB\u503C",
              setter: {
                componentName: "TextAreaSetter",
                props: {
                  rows: 10,
                  placeholder: "\u8BF7\u8F93\u5165 JSON \u683C\u5F0F\u7684\u8868\u5355\u521D\u59CB\u503C"
                }
              },
              extraProps: {
                display: "block"
              }
            }
          ]
        },
        {
          type: "group",
          title: "\u6807\u7B7E\u9875\u663E\u793A\u63A7\u5236",
          display: "accordion",
          items: [
            { name: "showBasicInfo", title: "\u663E\u793A\u57FA\u672C\u4FE1\u606F", setter: "BoolSetter" },
            { name: "showPriceInfo", title: "\u663E\u793A\u4EF7\u683C\u4FE1\u606F", setter: "BoolSetter" },
            { name: "showStockInfo", title: "\u663E\u793A\u5E93\u5B58\u4FE1\u606F", setter: "BoolSetter" },
            { name: "showStatusInfo", title: "\u663E\u793A\u72B6\u6001\u4FE1\u606F", setter: "BoolSetter" },
            { name: "showDescription", title: "\u663E\u793A\u63CF\u8FF0\u4FE1\u606F", setter: "BoolSetter" }
          ]
        }
      ]
    },
    icon: Icons.form,
    category: "\u7535\u5546\u4E1A\u52A1",
    group: "\u5546\u54C1\u7BA1\u7406",
    snippets: [
      {
        title: "\u521B\u5EFA\u5546\u54C1\u8868\u5355",
        schema: {
          componentName: "ProductForm",
          props: {
            mode: "create",
            initialValues: "{}",
            showBasicInfo: true,
            showPriceInfo: true,
            showStockInfo: true,
            showStatusInfo: true,
            showDescription: true
          }
        }
      },
      {
        title: "\u7F16\u8F91\u5546\u54C1\u8868\u5355",
        schema: {
          componentName: "ProductForm",
          props: {
            mode: "edit",
            initialValues: JSON.stringify({
              id: 1,
              name: "\u65F6\u5C1A\u8FD0\u52A8\u978B",
              productSn: "PRODUCT001",
              price: 269,
              stock: 100,
              brandName: "\u65F6\u5C1A\u8FD0\u52A8",
              productCategoryName: "\u978B\u5B50",
              publishStatus: 1,
              newStatus: 1,
              recommandStatus: 1
            }, null, 2),
            showBasicInfo: true,
            showPriceInfo: true,
            showStockInfo: true,
            showStatusInfo: true,
            showDescription: true
          }
        }
      },
      {
        title: "\u67E5\u770B\u5546\u54C1\u8868\u5355",
        schema: {
          componentName: "ProductForm",
          props: {
            mode: "view",
            initialValues: JSON.stringify({
              id: 1,
              name: "\u65F6\u5C1A\u8FD0\u52A8\u978B",
              productSn: "PRODUCT001",
              price: 269,
              stock: 100,
              brandName: "\u65F6\u5C1A\u8FD0\u52A8",
              productCategoryName: "\u978B\u5B50",
              publishStatus: 1,
              newStatus: 1,
              recommandStatus: 1,
              description: "\u8FD9\u662F\u4E00\u6B3E\u65F6\u5C1A\u7684\u8FD0\u52A8\u978B\uFF0C\u9002\u5408\u65E5\u5E38\u7A7F\u7740\u3002"
            }, null, 2),
            showBasicInfo: true,
            showPriceInfo: true,
            showStockInfo: true,
            showStatusInfo: true,
            showDescription: true
          }
        }
      }
    ]
  };
  var productFormMeta_default = ProductFormMeta;

  // src/meta/orderListMeta.ts
  var defaultMockData2 = {
    code: 200,
    message: "success",
    data: {
      pageNum: 1,
      pageSize: 10,
      total: 50,
      list: [
        {
          id: 1,
          orderSn: "202401010001",
          memberUsername: "user001",
          totalAmount: 599,
          payAmount: 569,
          freightAmount: 0,
          discountAmount: 30,
          payType: 1,
          sourceType: 0,
          status: 1,
          orderType: 0,
          receiverName: "\u5F20\u4E09",
          receiverPhone: "13800138000",
          receiverProvince: "\u5317\u4EAC\u5E02",
          receiverCity: "\u5317\u4EAC\u5E02",
          receiverRegion: "\u671D\u9633\u533A",
          receiverDetailAddress: "\u67D0\u67D0\u8857\u9053\u67D0\u67D0\u5C0F\u533A1\u53F7\u697C",
          createTime: "2024-01-01 10:00:00",
          paymentTime: "2024-01-01 10:05:00",
          deliveryTime: "",
          receiveTime: "",
          commentTime: "",
          promotionInfo: "\u6EE1\u51CF\u4F18\u60E0"
        },
        {
          id: 2,
          orderSn: "202401010002",
          memberUsername: "user002",
          totalAmount: 1299,
          payAmount: 1299,
          freightAmount: 0,
          discountAmount: 0,
          payType: 2,
          sourceType: 1,
          status: 2,
          orderType: 0,
          receiverName: "\u674E\u56DB",
          receiverPhone: "13900139000",
          receiverProvince: "\u4E0A\u6D77\u5E02",
          receiverCity: "\u4E0A\u6D77\u5E02",
          receiverRegion: "\u6D66\u4E1C\u65B0\u533A",
          receiverDetailAddress: "\u67D0\u67D0\u8DEF\u67D0\u67D0\u53F7",
          createTime: "2024-01-01 11:00:00",
          paymentTime: "2024-01-01 11:10:00",
          deliveryTime: "2024-01-02 09:00:00",
          receiveTime: "",
          commentTime: "",
          promotionInfo: ""
        },
        {
          id: 3,
          orderSn: "202401010003",
          memberUsername: "user003",
          totalAmount: 299,
          payAmount: 299,
          freightAmount: 10,
          discountAmount: 0,
          payType: 1,
          sourceType: 0,
          status: 3,
          orderType: 0,
          receiverName: "\u738B\u4E94",
          receiverPhone: "13700137000",
          receiverProvince: "\u5E7F\u4E1C\u7701",
          receiverCity: "\u6DF1\u5733\u5E02",
          receiverRegion: "\u5357\u5C71\u533A",
          receiverDetailAddress: "\u67D0\u67D0\u5927\u53A6A\u5EA7",
          createTime: "2024-01-01 12:00:00",
          paymentTime: "2024-01-01 12:05:00",
          deliveryTime: "2024-01-02 10:00:00",
          receiveTime: "2024-01-05 15:00:00",
          commentTime: "",
          promotionInfo: ""
        },
        {
          id: 4,
          orderSn: "202401010004",
          memberUsername: "user004",
          totalAmount: 899,
          payAmount: 0,
          freightAmount: 0,
          discountAmount: 0,
          payType: 0,
          sourceType: 1,
          status: 0,
          orderType: 1,
          receiverName: "\u8D75\u516D",
          receiverPhone: "13600136000",
          receiverProvince: "\u6D59\u6C5F\u7701",
          receiverCity: "\u676D\u5DDE\u5E02",
          receiverRegion: "\u897F\u6E56\u533A",
          receiverDetailAddress: "\u67D0\u67D0\u82B1\u56ED\u5C0F\u533A",
          createTime: "2024-01-01 13:00:00",
          paymentTime: "",
          deliveryTime: "",
          receiveTime: "",
          commentTime: "",
          promotionInfo: "\u79D2\u6740\u6D3B\u52A8"
        },
        {
          id: 5,
          orderSn: "202401010005",
          memberUsername: "user005",
          totalAmount: 4599,
          payAmount: 4599,
          freightAmount: 0,
          discountAmount: 0,
          payType: 2,
          sourceType: 0,
          status: 4,
          orderType: 0,
          receiverName: "\u5B59\u4E03",
          receiverPhone: "13500135000",
          receiverProvince: "\u6C5F\u82CF\u7701",
          receiverCity: "\u5357\u4EAC\u5E02",
          receiverRegion: "\u9F13\u697C\u533A",
          receiverDetailAddress: "\u67D0\u67D0\u5E7F\u573AB\u5EA7",
          createTime: "2024-01-01 14:00:00",
          paymentTime: "2024-01-01 14:10:00",
          deliveryTime: "",
          receiveTime: "",
          commentTime: "",
          promotionInfo: ""
        }
      ]
    }
  };
  var orderListMeta = {
    componentName: "OrderList",
    title: "\u8BA2\u5355\u5217\u8868",
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
        description: "\u6570\u636E\u6E90\u7C7B\u578B",
        defaultValue: "mock"
      },
      {
        name: "api",
        propType: "string",
        description: "API \u5730\u5740"
      },
      {
        name: "method",
        propType: "string",
        description: "\u8BF7\u6C42\u65B9\u6CD5",
        defaultValue: "GET"
      },
      {
        name: "mockData",
        propType: "string",
        description: "Mock \u6570\u636E",
        defaultValue: JSON.stringify(defaultMockData2)
      },
      {
        name: "variableName",
        propType: "string",
        description: "\u53D8\u91CF\u540D\u79F0"
      },
      {
        name: "showFilter",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u7B5B\u9009\u641C\u7D22\u533A\u57DF",
        defaultValue: true
      },
      {
        name: "showStatusFilter",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u72B6\u6001\u7B5B\u9009",
        defaultValue: true
      },
      {
        name: "showSearch",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u641C\u7D22\u6846",
        defaultValue: true
      },
      {
        name: "showDatePicker",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u65E5\u671F\u9009\u62E9\u5668",
        defaultValue: true
      },
      {
        name: "showActions",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u64CD\u4F5C\u6309\u94AE",
        defaultValue: true
      },
      {
        name: "showBatchOperations",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u6279\u91CF\u64CD\u4F5C",
        defaultValue: true
      },
      {
        name: "showExport",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u5BFC\u51FA\u6309\u94AE",
        defaultValue: true
      },
      {
        name: "showPagination",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u5206\u9875\u533A\u57DF",
        defaultValue: true
      },
      {
        name: "defaultPageSize",
        propType: "number",
        description: "\u9ED8\u8BA4\u6BCF\u9875\u6761\u6570",
        defaultValue: 10
      }
    ],
    configure: {
      supports: {
        style: true,
        events: [
          { name: "onRowClick", description: "\u884C\u70B9\u51FB" },
          { name: "onSearch", description: "\u641C\u7D22" },
          { name: "onPageChange", description: "\u5206\u9875\u53D8\u5316" },
          { name: "onActionClick", description: "\u64CD\u4F5C\u6309\u94AE\u70B9\u51FB" },
          { name: "onBatchOperation", description: "\u6279\u91CF\u64CD\u4F5C" }
        ]
      },
      props: [
        {
          type: "group",
          title: "\u6570\u636E\u6E90\u914D\u7F6E",
          display: "accordion",
          items: [
            {
              name: "dataSourceType",
              title: "\u6570\u636E\u6E90\u7C7B\u578B",
              setter: {
                componentName: "SelectSetter",
                props: {
                  options: [
                    { label: "REST API", value: "rest" },
                    { label: "Mock \u6570\u636E", value: "mock" },
                    { label: "\u53D8\u91CF\u7ED1\u5B9A", value: "variable" }
                  ]
                }
              },
              extraProps: {
                display: "block"
              }
            },
            {
              name: "api",
              title: "REST API \u914D\u7F6E",
              setter: {
                componentName: "RestApiTester",
                props: {}
              },
              extraProps: {
                display: "block"
              },
              condition: (target) => {
                return target.getProps().getPropValue("dataSourceType") === "rest";
              }
            },
            {
              name: "mockData",
              title: "Mock \u6570\u636E",
              setter: "StringSetter",
              extraProps: {
                display: "block"
              },
              condition: (target) => {
                return target.getProps().getPropValue("dataSourceType") === "mock";
              }
            },
            {
              name: "variableName",
              title: "\u53D8\u91CF\u540D\u79F0",
              setter: "StringSetter",
              extraProps: {
                display: "block"
              },
              condition: (target) => {
                return target.getProps().getPropValue("dataSourceType") === "variable";
              }
            }
          ]
        },
        {
          type: "group",
          title: "\u533A\u57DF\u663E\u793A\u63A7\u5236",
          display: "accordion",
          items: [
            { name: "showFilter", title: "\u663E\u793A\u7B5B\u9009\u533A\u57DF", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showStatusFilter", title: "\u663E\u793A\u72B6\u6001\u7B5B\u9009", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showSearch", title: "\u663E\u793A\u641C\u7D22\u6846", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showDatePicker", title: "\u663E\u793A\u65E5\u671F\u9009\u62E9", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showActions", title: "\u663E\u793A\u64CD\u4F5C\u6309\u94AE", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showBatchOperations", title: "\u663E\u793A\u6279\u91CF\u64CD\u4F5C", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showExport", title: "\u663E\u793A\u5BFC\u51FA\u6309\u94AE", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showPagination", title: "\u663E\u793A\u5206\u9875", setter: "BoolSetter", extraProps: { display: "block" } }
          ]
        },
        {
          type: "group",
          title: "\u5206\u9875\u914D\u7F6E",
          display: "accordion",
          items: [
            {
              name: "defaultPageSize",
              title: "\u9ED8\u8BA4\u6BCF\u9875\u6761\u6570",
              setter: {
                componentName: "NumberSetter",
                props: {
                  min: 1,
                  max: 100
                }
              },
              extraProps: {
                display: "block"
              }
            }
          ]
        }
      ]
    },
    icon: Icons.file,
    category: "\u7535\u5546\u4E1A\u52A1",
    group: "\u8BA2\u5355\u7BA1\u7406",
    snippets: [
      {
        title: "\u5B8C\u6574\u8BA2\u5355\u5217\u8868",
        schema: {
          componentName: "OrderList",
          props: {
            dataSourceType: "mock",
            mockData: JSON.stringify(defaultMockData2),
            showFilter: true,
            showStatusFilter: true,
            showSearch: true,
            showDatePicker: true,
            showActions: true,
            showBatchOperations: true,
            showExport: true,
            showPagination: true,
            defaultPageSize: 10
          }
        }
      },
      {
        title: "\u7B80\u6D01\u8BA2\u5355\u5217\u8868",
        schema: {
          componentName: "OrderList",
          props: {
            dataSourceType: "mock",
            mockData: JSON.stringify(defaultMockData2),
            showFilter: false,
            showActions: false,
            showBatchOperations: false,
            showExport: false,
            showPagination: true,
            defaultPageSize: 10
          }
        }
      },
      {
        title: "\u53EA\u8BFB\u8BA2\u5355\u5217\u8868",
        schema: {
          componentName: "OrderList",
          props: {
            dataSourceType: "mock",
            mockData: JSON.stringify(defaultMockData2),
            showFilter: true,
            showStatusFilter: true,
            showSearch: true,
            showDatePicker: true,
            showActions: false,
            showBatchOperations: false,
            showExport: false,
            showPagination: true,
            defaultPageSize: 10
          }
        }
      }
    ]
  };
  var orderListMeta_default = orderListMeta;

  // src/meta/orderFormMeta.ts
  var defaultInitialValues = {
    id: 1,
    orderSn: "202401010001",
    memberUsername: "user001",
    totalAmount: 599,
    payAmount: 569,
    freightAmount: 0,
    discountAmount: 30,
    payType: 1,
    sourceType: 0,
    status: 1,
    orderType: 0,
    receiverName: "\u5F20\u4E09",
    receiverPhone: "13800138000",
    receiverProvince: "\u5317\u4EAC\u5E02",
    receiverCity: "\u5317\u4EAC\u5E02",
    receiverRegion: "\u671D\u9633\u533A",
    receiverDetailAddress: "\u67D0\u67D0\u8857\u9053\u67D0\u67D0\u5C0F\u533A1\u53F7\u697C",
    note: "\u8BF7\u5C3D\u5FEB\u53D1\u8D27"
  };
  var orderFormMeta = {
    componentName: "OrderForm",
    title: "\u8BA2\u5355\u8868\u5355",
    docUrl: "https://github.com/alibaba/lowcode-engine",
    screenshot: "",
    npm: {
      package: "mall-components",
      version: "1.0.0",
      exportName: "OrderForm",
      destructuring: true
    },
    props: [
      {
        name: "initialValues",
        propType: "string",
        description: "\u8868\u5355\u521D\u59CB\u503C\uFF08JSON \u683C\u5F0F\uFF09",
        defaultValue: "{}"
      },
      {
        name: "mode",
        propType: "string",
        description: "\u8868\u5355\u6A21\u5F0F",
        defaultValue: "create",
        setter: {
          componentName: "SelectSetter",
          props: {
            options: [
              { label: "\u521B\u5EFA\u6A21\u5F0F", value: "create" },
              { label: "\u7F16\u8F91\u6A21\u5F0F", value: "edit" },
              { label: "\u67E5\u770B\u6A21\u5F0F", value: "view" }
            ]
          }
        }
      },
      {
        name: "showBasicInfo",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u57FA\u672C\u4FE1\u606F",
        defaultValue: true,
        setter: "BoolSetter"
      },
      {
        name: "showReceiverInfo",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u6536\u8D27\u4FE1\u606F",
        defaultValue: true,
        setter: "BoolSetter"
      },
      {
        name: "showMoneyInfo",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u8D39\u7528\u4FE1\u606F",
        defaultValue: true,
        setter: "BoolSetter"
      },
      {
        name: "showOrderItems",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u5546\u54C1\u4FE1\u606F",
        defaultValue: true,
        setter: "BoolSetter"
      },
      {
        name: "showStatusInfo",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u72B6\u6001\u4FE1\u606F",
        defaultValue: true,
        setter: "BoolSetter"
      }
    ],
    configure: {
      supports: {
        style: true,
        events: [
          { name: "onSubmit", description: "\u63D0\u4EA4" },
          { name: "onCancel", description: "\u53D6\u6D88" }
        ]
      },
      props: [
        {
          type: "group",
          title: "\u8868\u5355\u914D\u7F6E",
          display: "accordion",
          items: [
            {
              name: "mode",
              title: "\u8868\u5355\u6A21\u5F0F",
              setter: {
                componentName: "SelectSetter",
                props: {
                  options: [
                    { label: "\u521B\u5EFA\u6A21\u5F0F", value: "create" },
                    { label: "\u7F16\u8F91\u6A21\u5F0F", value: "edit" },
                    { label: "\u67E5\u770B\u6A21\u5F0F", value: "view" }
                  ]
                }
              }
            },
            {
              name: "initialValues",
              title: "\u8868\u5355\u521D\u59CB\u503C",
              setter: {
                componentName: "TextAreaSetter",
                props: {
                  rows: 10,
                  placeholder: "\u8BF7\u8F93\u5165 JSON \u683C\u5F0F\u7684\u8868\u5355\u521D\u59CB\u503C"
                }
              },
              extraProps: {
                display: "block"
              }
            }
          ]
        },
        {
          type: "group",
          title: "\u6807\u7B7E\u9875\u663E\u793A\u63A7\u5236",
          display: "accordion",
          items: [
            { name: "showBasicInfo", title: "\u663E\u793A\u57FA\u672C\u4FE1\u606F", setter: "BoolSetter" },
            { name: "showReceiverInfo", title: "\u663E\u793A\u6536\u8D27\u4FE1\u606F", setter: "BoolSetter" },
            { name: "showMoneyInfo", title: "\u663E\u793A\u8D39\u7528\u4FE1\u606F", setter: "BoolSetter" },
            { name: "showOrderItems", title: "\u663E\u793A\u5546\u54C1\u4FE1\u606F", setter: "BoolSetter" },
            { name: "showStatusInfo", title: "\u663E\u793A\u72B6\u6001\u4FE1\u606F", setter: "BoolSetter" }
          ]
        }
      ]
    },
    icon: Icons.form,
    category: "\u7535\u5546\u4E1A\u52A1",
    group: "\u8BA2\u5355\u7BA1\u7406",
    snippets: [
      {
        title: "\u521B\u5EFA\u8BA2\u5355\u8868\u5355",
        schema: {
          componentName: "OrderForm",
          props: {
            mode: "create",
            initialValues: "{}",
            showBasicInfo: true,
            showReceiverInfo: true,
            showMoneyInfo: true,
            showOrderItems: true,
            showStatusInfo: true
          }
        }
      },
      {
        title: "\u7F16\u8F91\u8BA2\u5355\u8868\u5355",
        schema: {
          componentName: "OrderForm",
          props: {
            mode: "edit",
            initialValues: JSON.stringify(defaultInitialValues, null, 2),
            showBasicInfo: true,
            showReceiverInfo: true,
            showMoneyInfo: true,
            showOrderItems: true,
            showStatusInfo: true
          }
        }
      },
      {
        title: "\u67E5\u770B\u8BA2\u5355\u8868\u5355",
        schema: {
          componentName: "OrderForm",
          props: {
            mode: "view",
            initialValues: JSON.stringify(
              {
                ...defaultInitialValues,
                orderItemList: [
                  {
                    id: 1,
                    productName: "\u65F6\u5C1A\u8FD0\u52A8\u978B",
                    productSn: "PRODUCT001",
                    productBrand: "\u65F6\u5C1A\u8FD0\u52A8",
                    productPrice: 299,
                    productQuantity: 2,
                    productPic: "https://img.yzcdn.cn/vant/cat.jpeg"
                  }
                ]
              },
              null,
              2
            ),
            showBasicInfo: true,
            showReceiverInfo: true,
            showMoneyInfo: true,
            showOrderItems: true,
            showStatusInfo: true
          }
        }
      }
    ]
  };
  var orderFormMeta_default = orderFormMeta;

  // src/meta/couponCardMeta.ts
  var defaultCouponMockData = {
    code: 200,
    message: "success",
    data: {
      pageNum: 1,
      pageSize: 10,
      total: 3,
      list: [
        {
          id: 1,
          name: "\u65B0\u7528\u6237\u4E13\u4EAB\u5238",
          type: 0,
          platform: 0,
          count: 1e3,
          amount: 50,
          perLimit: 1,
          minPoint: 200,
          startTime: "2024-01-01",
          endTime: "2024-12-31",
          useType: 0,
          note: "\u65B0\u7528\u6237\u9996\u5355\u6EE1200\u51CF50",
          publishCount: 500,
          useCount: 320,
          receiveCount: 450,
          enableTime: "7",
          code: "NEWUSER50",
          memberLevel: 0
        },
        {
          id: 2,
          name: "\u9650\u65F6\u6298\u6263\u5238",
          type: 1,
          platform: 3,
          count: 500,
          amount: 8,
          perLimit: 2,
          minPoint: 100,
          startTime: "2024-01-15",
          endTime: "2024-02-15",
          useType: 1,
          note: "APP\u4E13\u4EAB8\u6298\u5238",
          publishCount: 300,
          useCount: 180,
          receiveCount: 280,
          enableTime: "3",
          code: "APPDISCOUNT",
          memberLevel: 1
        },
        {
          id: 3,
          name: "\u4F1A\u5458\u4E13\u4EAB\u5238",
          type: 0,
          platform: 0,
          count: 200,
          amount: 100,
          perLimit: 1,
          minPoint: 500,
          startTime: "2024-01-01",
          endTime: "2024-06-30",
          useType: 2,
          note: "\u4F1A\u5458\u4E13\u4EAB\u6EE1500\u51CF100",
          publishCount: 150,
          useCount: 80,
          receiveCount: 120,
          enableTime: "15",
          code: "VIP100",
          memberLevel: 2
        }
      ]
    }
  };
  var couponCardMeta = {
    componentName: "CouponCard",
    title: "\u4F18\u60E0\u5238\u7BA1\u7406",
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: {
      package: "mall-components",
      version: "1.0.0",
      exportName: "CouponCard",
      main: "lib/index.js",
      destructuring: true,
      subName: ""
    },
    category: "\u7535\u5546\u4E1A\u52A1",
    group: "\u8425\u9500\u7BA1\u7406",
    icon: Icons.gift,
    props: [
      {
        name: "dataSourceType",
        propType: "string",
        description: "\u6570\u636E\u6E90\u7C7B\u578B",
        defaultValue: "mock"
      },
      {
        name: "api",
        propType: "string",
        description: "API \u5730\u5740"
      },
      {
        name: "method",
        propType: "string",
        description: "\u8BF7\u6C42\u65B9\u6CD5",
        defaultValue: "GET"
      },
      {
        name: "mockData",
        propType: "string",
        description: "Mock \u6570\u636E",
        defaultValue: JSON.stringify(defaultCouponMockData)
      },
      {
        name: "variableName",
        propType: "string",
        description: "\u53D8\u91CF\u540D\u79F0"
      },
      {
        name: "showCreateButton",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u521B\u5EFA\u6309\u94AE",
        defaultValue: true
      },
      {
        name: "showFilter",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u7B5B\u9009\u533A\u57DF",
        defaultValue: true
      },
      {
        name: "showStatistics",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u7EDF\u8BA1\u4FE1\u606F",
        defaultValue: true
      },
      {
        name: "style",
        propType: "object",
        description: "\u81EA\u5B9A\u4E49\u6837\u5F0F"
      },
      {
        name: "className",
        propType: "string",
        description: "\u81EA\u5B9A\u4E49\u7C7B\u540D"
      }
    ],
    configure: {
      supports: {
        style: true,
        className: true,
        events: [
          { name: "onCreateCoupon", description: "\u521B\u5EFA\u4F18\u60E0\u5238" },
          { name: "onEditCoupon", description: "\u7F16\u8F91\u4F18\u60E0\u5238" },
          { name: "onDeleteCoupon", description: "\u5220\u9664\u4F18\u60E0\u5238" },
          { name: "onSearch", description: "\u641C\u7D22" }
        ]
      },
      props: [
        {
          type: "group",
          title: "\u6570\u636E\u6E90\u914D\u7F6E",
          display: "accordion",
          items: [
            {
              name: "dataSourceType",
              title: "\u6570\u636E\u6E90\u7C7B\u578B",
              setter: {
                componentName: "SelectSetter",
                props: {
                  options: [
                    { label: "REST API", value: "rest" },
                    { label: "Mock \u6570\u636E", value: "mock" },
                    { label: "\u53D8\u91CF\u7ED1\u5B9A", value: "variable" }
                  ]
                }
              },
              extraProps: {
                display: "block"
              }
            },
            {
              name: "api",
              title: "API \u5730\u5740",
              setter: "StringSetter",
              extraProps: {
                display: "block",
                placeholder: "\u4F8B\u5982: /api/coupons"
              },
              condition: (target) => {
                return target.getProps().getPropValue("dataSourceType") === "rest";
              }
            },
            {
              name: "method",
              title: "\u8BF7\u6C42\u65B9\u6CD5",
              setter: {
                componentName: "SelectSetter",
                props: {
                  options: [
                    { label: "GET", value: "GET" },
                    { label: "POST", value: "POST" }
                  ]
                }
              },
              extraProps: {
                display: "inline"
              },
              condition: (target) => {
                return target.getProps().getPropValue("dataSourceType") === "rest";
              }
            },
            {
              name: "mockData",
              title: "Mock \u6570\u636E (JSON)",
              setter: {
                componentName: "TextAreaSetter",
                props: {
                  rows: 8,
                  placeholder: "\u8BF7\u8F93\u5165 JSON \u683C\u5F0F\u7684 Mock \u6570\u636E"
                }
              },
              extraProps: {
                display: "block"
              },
              condition: (target) => {
                return target.getProps().getPropValue("dataSourceType") === "mock";
              }
            },
            {
              name: "variableName",
              title: "\u53D8\u91CF\u540D\u79F0",
              setter: "StringSetter",
              extraProps: {
                display: "block",
                placeholder: "\u4F8B\u5982: state.couponList"
              },
              condition: (target) => {
                return target.getProps().getPropValue("dataSourceType") === "variable";
              }
            }
          ]
        },
        {
          type: "group",
          title: "\u663E\u793A\u63A7\u5236",
          display: "accordion",
          items: [
            {
              name: "showCreateButton",
              title: "\u663E\u793A\u521B\u5EFA\u6309\u94AE",
              setter: "BoolSetter",
              extraProps: {
                display: "block"
              }
            },
            {
              name: "showFilter",
              title: "\u663E\u793A\u7B5B\u9009\u533A\u57DF",
              setter: "BoolSetter",
              extraProps: {
                display: "block"
              }
            },
            {
              name: "showStatistics",
              title: "\u663E\u793A\u7EDF\u8BA1\u4FE1\u606F",
              setter: "BoolSetter",
              extraProps: {
                display: "block"
              }
            }
          ]
        }
      ]
    },
    snippets: [
      {
        title: "\u4F18\u60E0\u5238\u7BA1\u7406",
        screenshot: "",
        schema: {
          componentName: "CouponCard",
          props: {
            dataSourceType: "mock",
            mockData: JSON.stringify(defaultCouponMockData),
            showCreateButton: true,
            showFilter: true,
            showStatistics: true
          }
        }
      },
      {
        title: "\u4F18\u60E0\u5238\u7BA1\u7406\uFF08\u7B80\u6D01\u6A21\u5F0F\uFF09",
        screenshot: "",
        schema: {
          componentName: "CouponCard",
          props: {
            dataSourceType: "mock",
            mockData: JSON.stringify(defaultCouponMockData),
            showCreateButton: false,
            showFilter: false,
            showStatistics: false
          }
        }
      },
      {
        title: "\u4F18\u60E0\u5238\u7BA1\u7406\uFF08API\u6A21\u5F0F\uFF09",
        screenshot: "",
        schema: {
          componentName: "CouponCard",
          props: {
            dataSourceType: "rest",
            api: "/api/coupons",
            method: "GET",
            showCreateButton: true,
            showFilter: true,
            showStatistics: true
          }
        }
      }
    ]
  };
  var couponCardMeta_default = couponCardMeta;

  // src/meta/promotionCardMeta.ts
  var defaultPromotionMockData = {
    code: 200,
    message: "success",
    data: {
      pageNum: 1,
      pageSize: 10,
      total: 4,
      list: [
        {
          id: 1,
          title: "\u53CC\u5341\u4E00\u5927\u4FC3",
          startDate: "2024-11-01",
          endDate: "2024-11-11",
          status: 1,
          createTime: "2024-10-15 10:00:00"
        },
        {
          id: 2,
          title: "618\u5E74\u4E2D\u5927\u4FC3",
          startDate: "2024-06-01",
          endDate: "2024-06-18",
          status: 1,
          createTime: "2024-05-20 09:00:00"
        },
        {
          id: 3,
          title: "\u65B0\u6625\u5B63\u4FC3\u9500",
          startDate: "2024-01-20",
          endDate: "2024-02-10",
          status: 0,
          createTime: "2024-01-10 08:00:00"
        },
        {
          id: 4,
          title: "\u4F1A\u5458\u65E5\u7279\u60E0",
          startDate: "2024-03-15",
          endDate: "2024-03-17",
          status: 1,
          createTime: "2024-03-01 10:00:00"
        }
      ]
    }
  };
  var promotionCardMeta = {
    componentName: "PromotionCard",
    title: "\u4FC3\u9500\u6D3B\u52A8\u7BA1\u7406",
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: {
      package: "mall-components",
      version: "1.0.0",
      exportName: "PromotionCard",
      main: "lib/index.js",
      destructuring: true,
      subName: ""
    },
    category: "\u7535\u5546\u4E1A\u52A1",
    group: "\u8425\u9500\u7BA1\u7406",
    icon: Icons.star,
    props: [
      {
        name: "dataSourceType",
        propType: "string",
        description: "\u6570\u636E\u6E90\u7C7B\u578B",
        defaultValue: "mock"
      },
      {
        name: "api",
        propType: "string",
        description: "API \u5730\u5740"
      },
      {
        name: "method",
        propType: "string",
        description: "\u8BF7\u6C42\u65B9\u6CD5",
        defaultValue: "GET"
      },
      {
        name: "mockData",
        propType: "string",
        description: "Mock \u6570\u636E",
        defaultValue: JSON.stringify(defaultPromotionMockData)
      },
      {
        name: "variableName",
        propType: "string",
        description: "\u53D8\u91CF\u540D\u79F0"
      },
      {
        name: "showCreateButton",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u521B\u5EFA\u6309\u94AE",
        defaultValue: true
      },
      {
        name: "showFilter",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u7B5B\u9009\u533A\u57DF",
        defaultValue: true
      },
      {
        name: "showStatistics",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u7EDF\u8BA1\u4FE1\u606F",
        defaultValue: true
      },
      {
        name: "showTimeline",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u65F6\u95F4\u7EBF",
        defaultValue: true
      },
      {
        name: "style",
        propType: "object",
        description: "\u81EA\u5B9A\u4E49\u6837\u5F0F"
      },
      {
        name: "className",
        propType: "string",
        description: "\u81EA\u5B9A\u4E49\u7C7B\u540D"
      }
    ],
    configure: {
      supports: {
        style: true,
        className: true,
        events: [
          { name: "onCreatePromotion", description: "\u521B\u5EFA\u4FC3\u9500\u6D3B\u52A8" },
          { name: "onEditPromotion", description: "\u7F16\u8F91\u4FC3\u9500\u6D3B\u52A8" },
          { name: "onDeletePromotion", description: "\u5220\u9664\u4FC3\u9500\u6D3B\u52A8" },
          { name: "onToggleStatus", description: "\u5207\u6362\u72B6\u6001" },
          { name: "onSearch", description: "\u641C\u7D22" }
        ]
      },
      props: [
        {
          type: "group",
          title: "\u6570\u636E\u6E90\u914D\u7F6E",
          display: "accordion",
          items: [
            {
              name: "dataSourceType",
              title: "\u6570\u636E\u6E90\u7C7B\u578B",
              setter: {
                componentName: "SelectSetter",
                props: {
                  options: [
                    { label: "REST API", value: "rest" },
                    { label: "Mock \u6570\u636E", value: "mock" },
                    { label: "\u53D8\u91CF\u7ED1\u5B9A", value: "variable" }
                  ]
                }
              },
              extraProps: {
                display: "block"
              }
            },
            {
              name: "api",
              title: "API \u5730\u5740",
              setter: "StringSetter",
              extraProps: {
                display: "block",
                placeholder: "\u4F8B\u5982: /api/promotions"
              },
              condition: (target) => {
                return target.getProps().getPropValue("dataSourceType") === "rest";
              }
            },
            {
              name: "method",
              title: "\u8BF7\u6C42\u65B9\u6CD5",
              setter: {
                componentName: "SelectSetter",
                props: {
                  options: [
                    { label: "GET", value: "GET" },
                    { label: "POST", value: "POST" }
                  ]
                }
              },
              extraProps: {
                display: "inline"
              },
              condition: (target) => {
                return target.getProps().getPropValue("dataSourceType") === "rest";
              }
            },
            {
              name: "mockData",
              title: "Mock \u6570\u636E (JSON)",
              setter: {
                componentName: "TextAreaSetter",
                props: {
                  rows: 8,
                  placeholder: "\u8BF7\u8F93\u5165 JSON \u683C\u5F0F\u7684 Mock \u6570\u636E"
                }
              },
              extraProps: {
                display: "block"
              },
              condition: (target) => {
                return target.getProps().getPropValue("dataSourceType") === "mock";
              }
            },
            {
              name: "variableName",
              title: "\u53D8\u91CF\u540D\u79F0",
              setter: "StringSetter",
              extraProps: {
                display: "block",
                placeholder: "\u4F8B\u5982: state.promotionList"
              },
              condition: (target) => {
                return target.getProps().getPropValue("dataSourceType") === "variable";
              }
            }
          ]
        },
        {
          type: "group",
          title: "\u663E\u793A\u63A7\u5236",
          display: "accordion",
          items: [
            {
              name: "showCreateButton",
              title: "\u663E\u793A\u521B\u5EFA\u6309\u94AE",
              setter: "BoolSetter",
              extraProps: {
                display: "block"
              }
            },
            {
              name: "showFilter",
              title: "\u663E\u793A\u7B5B\u9009\u533A\u57DF",
              setter: "BoolSetter",
              extraProps: {
                display: "block"
              }
            },
            {
              name: "showStatistics",
              title: "\u663E\u793A\u7EDF\u8BA1\u4FE1\u606F",
              setter: "BoolSetter",
              extraProps: {
                display: "block"
              }
            },
            {
              name: "showTimeline",
              title: "\u663E\u793A\u65F6\u95F4\u7EBF",
              setter: "BoolSetter",
              extraProps: {
                display: "block"
              }
            }
          ]
        }
      ]
    },
    snippets: [
      {
        title: "\u4FC3\u9500\u6D3B\u52A8\u7BA1\u7406",
        screenshot: "",
        schema: {
          componentName: "PromotionCard",
          props: {
            dataSourceType: "mock",
            mockData: JSON.stringify(defaultPromotionMockData),
            showCreateButton: true,
            showFilter: true,
            showStatistics: true,
            showTimeline: true
          }
        }
      },
      {
        title: "\u4FC3\u9500\u6D3B\u52A8\u7BA1\u7406\uFF08\u7B80\u6D01\u6A21\u5F0F\uFF09",
        screenshot: "",
        schema: {
          componentName: "PromotionCard",
          props: {
            dataSourceType: "mock",
            mockData: JSON.stringify(defaultPromotionMockData),
            showCreateButton: false,
            showFilter: false,
            showStatistics: false,
            showTimeline: false
          }
        }
      },
      {
        title: "\u4FC3\u9500\u6D3B\u52A8\u7BA1\u7406\uFF08API\u6A21\u5F0F\uFF09",
        screenshot: "",
        schema: {
          componentName: "PromotionCard",
          props: {
            dataSourceType: "rest",
            api: "/api/promotions",
            method: "GET",
            showCreateButton: true,
            showFilter: true,
            showStatistics: true,
            showTimeline: true
          }
        }
      }
    ]
  };
  var promotionCardMeta_default = promotionCardMeta;

  // src/meta/userCardMeta.ts
  var userCardMeta = {
    componentName: "UserCard",
    title: "\u7528\u6237\u7BA1\u7406",
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: {
      package: "mall-components",
      version: "1.0.0",
      exportName: "UserCard",
      main: "lib/index.js",
      destructuring: true,
      subName: ""
    },
    category: "\u7535\u5546\u4E1A\u52A1",
    group: "\u6743\u9650\u7BA1\u7406",
    icon: Icons.user,
    props: [
      {
        name: "dataSource",
        propType: "string",
        description: "\u6570\u636E\u6E90\u914D\u7F6E"
      },
      {
        name: "showCreateButton",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u521B\u5EFA\u6309\u94AE",
        defaultValue: true
      },
      {
        name: "showFilter",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u7B5B\u9009\u533A\u57DF",
        defaultValue: true
      },
      {
        name: "showStatistics",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u7EDF\u8BA1\u4FE1\u606F",
        defaultValue: true
      },
      {
        name: "style",
        propType: "object",
        description: "\u81EA\u5B9A\u4E49\u6837\u5F0F"
      },
      {
        name: "className",
        propType: "string",
        description: "\u81EA\u5B9A\u4E49\u7C7B\u540D"
      }
    ],
    configure: {
      props: {
        isExtends: true,
        override: [
          {
            name: "dataSource",
            setter: {
              componentName: "StringSetter"
            }
          },
          {
            name: "showCreateButton",
            setter: {
              componentName: "BoolSetter"
            }
          },
          {
            name: "showFilter",
            setter: {
              componentName: "BoolSetter"
            }
          },
          {
            name: "showStatistics",
            setter: {
              componentName: "BoolSetter"
            }
          }
        ]
      },
      component: {
        isContainer: false,
        isModal: false,
        rootSelector: ".mall-user-card",
        nestingRule: {
          parentWhitelist: "",
          childWhitelist: ""
        }
      },
      supports: {
        style: true,
        className: true
      }
    },
    snippets: [
      {
        title: "\u7528\u6237\u7BA1\u7406",
        screenshot: "",
        schema: {
          componentName: "UserCard",
          props: {
            showCreateButton: true,
            showFilter: true,
            showStatistics: true
          }
        }
      },
      {
        title: "\u7528\u6237\u7BA1\u7406\uFF08\u7B80\u6D01\u6A21\u5F0F\uFF09",
        screenshot: "",
        schema: {
          componentName: "UserCard",
          props: {
            showCreateButton: false,
            showFilter: false,
            showStatistics: false
          }
        }
      }
    ]
  };
  var userCardMeta_default = userCardMeta;

  // src/meta/roleCardMeta.ts
  var roleCardMeta = {
    componentName: "RoleCard",
    title: "\u89D2\u8272\u7BA1\u7406",
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: {
      package: "mall-components",
      version: "1.0.0",
      exportName: "RoleCard",
      main: "lib/index.js",
      destructuring: true,
      subName: ""
    },
    category: "\u7535\u5546\u4E1A\u52A1",
    group: "\u6743\u9650\u7BA1\u7406",
    icon: Icons.team,
    props: [
      {
        name: "dataSource",
        propType: "string",
        description: "\u6570\u636E\u6E90\u914D\u7F6E"
      },
      {
        name: "showCreateButton",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u521B\u5EFA\u6309\u94AE",
        defaultValue: true
      },
      {
        name: "showFilter",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u7B5B\u9009\u533A\u57DF",
        defaultValue: true
      },
      {
        name: "showStatistics",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u7EDF\u8BA1\u4FE1\u606F",
        defaultValue: true
      },
      {
        name: "showPermissionTree",
        propType: "bool",
        description: "\u662F\u5426\u663E\u793A\u6743\u9650\u6811",
        defaultValue: true
      },
      {
        name: "style",
        propType: "object",
        description: "\u81EA\u5B9A\u4E49\u6837\u5F0F"
      },
      {
        name: "className",
        propType: "string",
        description: "\u81EA\u5B9A\u4E49\u7C7B\u540D"
      }
    ],
    configure: {
      props: {
        isExtends: true,
        override: [
          {
            name: "dataSource",
            setter: {
              componentName: "StringSetter"
            }
          },
          {
            name: "showCreateButton",
            setter: {
              componentName: "BoolSetter"
            }
          },
          {
            name: "showFilter",
            setter: {
              componentName: "BoolSetter"
            }
          },
          {
            name: "showStatistics",
            setter: {
              componentName: "BoolSetter"
            }
          },
          {
            name: "showPermissionTree",
            setter: {
              componentName: "BoolSetter"
            }
          }
        ]
      },
      component: {
        isContainer: false,
        isModal: false,
        rootSelector: ".mall-role-card",
        nestingRule: {
          parentWhitelist: "",
          childWhitelist: ""
        }
      },
      supports: {
        style: true,
        className: true
      }
    },
    snippets: [
      {
        title: "\u89D2\u8272\u7BA1\u7406",
        screenshot: "",
        schema: {
          componentName: "RoleCard",
          props: {
            showCreateButton: true,
            showFilter: true,
            showStatistics: true,
            showPermissionTree: true
          }
        }
      },
      {
        title: "\u89D2\u8272\u7BA1\u7406\uFF08\u7B80\u6D01\u6A21\u5F0F\uFF09",
        screenshot: "",
        schema: {
          componentName: "RoleCard",
          props: {
            showCreateButton: false,
            showFilter: false,
            showStatistics: false,
            showPermissionTree: false
          }
        }
      }
    ]
  };
  var roleCardMeta_default = roleCardMeta;

  // src/meta.ts
  var meta_default = {
    components: [
      productListMeta_default,
      productFormMeta_default,
      orderListMeta_default,
      orderFormMeta_default,
      couponCardMeta_default,
      promotionCardMeta_default,
      userCardMeta_default,
      roleCardMeta_default
    ]
  };
  return __toCommonJS(meta_exports);
})();

  var result = __META_RAW__;
  if (result && result.default) result = result.default;
  if (result && result.components) return result;
  return { components: [] };
}));
