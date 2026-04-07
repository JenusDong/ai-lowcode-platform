"use strict";
var MallComponents = (() => {
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

  // src/shims/react.js
  var require_react = __commonJS({
    "src/shims/react.js"(exports, module) {
      "use strict";
      var React34 = typeof window !== "undefined" && window.React || {};
      module.exports = React34;
    }
  });

  // src/shims/antd.js
  var require_antd = __commonJS({
    "src/shims/antd.js"(exports, module) {
      "use strict";
      var antd = typeof window !== "undefined" && window.antd || {};
      module.exports = antd;
    }
  });

  // node_modules/classnames/index.js
  var require_classnames = __commonJS({
    "node_modules/classnames/index.js"(exports, module) {
      (function() {
        "use strict";
        var hasOwn = {}.hasOwnProperty;
        function classNames2() {
          var classes = "";
          for (var i = 0; i < arguments.length; i++) {
            var arg = arguments[i];
            if (arg) {
              classes = appendClass(classes, parseValue(arg));
            }
          }
          return classes;
        }
        function parseValue(arg) {
          if (typeof arg === "string" || typeof arg === "number") {
            return arg;
          }
          if (typeof arg !== "object") {
            return "";
          }
          if (Array.isArray(arg)) {
            return classNames2.apply(null, arg);
          }
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            return arg.toString();
          }
          var classes = "";
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes = appendClass(classes, key);
            }
          }
          return classes;
        }
        function appendClass(value, newClass) {
          if (!newClass) {
            return value;
          }
          if (value) {
            return value + " " + newClass;
          }
          return value + newClass;
        }
        if (typeof module !== "undefined" && module.exports) {
          classNames2.default = classNames2;
          module.exports = classNames2;
        } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
          define("classnames", [], function() {
            return classNames2;
          });
        } else {
          window.classNames = classNames2;
        }
      })();
    }
  });

  // src/plugins/plugin-mall-components/entry-components.ts
  var entry_components_exports = {};
  __export(entry_components_exports, {
    MallComponents: () => MallComponents,
    default: () => entry_components_default
  });

  // src/plugins/plugin-mall-components/components/ProductList/ProductList.tsx
  var import_react = __toESM(require_react());
  var import_antd = __toESM(require_antd());
  var ProductList = ({
    style,
    className
  }) => {
    const columns2 = [
      {
        title: "商品名称",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "商品货号",
        dataIndex: "productSn",
        key: "productSn"
      },
      {
        title: "价格",
        dataIndex: "price",
        key: "price",
        render: (price) => `¥${price}`
      },
      {
        title: "库存",
        dataIndex: "stock",
        key: "stock"
      },
      {
        title: "状态",
        dataIndex: "status",
        key: "status",
        render: (status) => /* @__PURE__ */ import_react.default.createElement(import_antd.Tag, { color: status === 1 ? "green" : "red" }, status === 1 ? "上架" : "下架")
      },
      {
        title: "操作",
        key: "action",
        render: () => /* @__PURE__ */ import_react.default.createElement(import_antd.Space, { size: "middle" }, /* @__PURE__ */ import_react.default.createElement("a", null, "编辑"), /* @__PURE__ */ import_react.default.createElement("a", null, "删除"))
      }
    ];
    const data = [
      { key: "1", name: "示例商品1", productSn: "SN001", price: 99.99, stock: 100, status: 1 },
      { key: "2", name: "示例商品2", productSn: "SN002", price: 199.99, stock: 50, status: 1 },
      { key: "3", name: "示例商品3", productSn: "SN003", price: 299.99, stock: 0, status: 0 }
    ];
    return /* @__PURE__ */ import_react.default.createElement("div", { className: `mall-product-list ${className || ""}`, style }, /* @__PURE__ */ import_react.default.createElement(import_antd.Table, { columns: columns2, dataSource: data }));
  };
  var ProductList_default = ProductList;

  // src/plugins/plugin-mall-components/components/ProductForm/ProductForm.tsx
  var import_react2 = __toESM(require_react());
  var import_antd2 = __toESM(require_antd());
  var ProductForm = ({
    showName = true,
    showProductSn = true,
    showBrandName = true,
    showCategory = true,
    showPrice = true,
    showStock = true,
    showDescription = true,
    onSubmit,
    onCancel,
    style,
    className
  }) => {
    const [form] = import_antd2.Form.useForm();
    const handleSubmit = async () => {
      try {
        const values = await form.validateFields();
        onSubmit?.(values);
        import_antd2.message.success("提交成功");
      } catch (error) {
        console.error("Validation failed:", error);
      }
    };
    return /* @__PURE__ */ import_react2.default.createElement("div", { className: `mall-product-form ${className || ""}`, style }, /* @__PURE__ */ import_react2.default.createElement(import_antd2.Card, null, /* @__PURE__ */ import_react2.default.createElement(
      import_antd2.Form,
      {
        form,
        layout: "vertical"
      },
      showName && /* @__PURE__ */ import_react2.default.createElement(import_antd2.Form.Item, { name: "name", label: "商品名称", rules: [{ required: true }] }, /* @__PURE__ */ import_react2.default.createElement(import_antd2.Input, { placeholder: "请输入商品名称" })),
      showProductSn && /* @__PURE__ */ import_react2.default.createElement(import_antd2.Form.Item, { name: "productSn", label: "商品货号", rules: [{ required: true }] }, /* @__PURE__ */ import_react2.default.createElement(import_antd2.Input, { placeholder: "请输入商品货号" })),
      showBrandName && /* @__PURE__ */ import_react2.default.createElement(import_antd2.Form.Item, { name: "brandName", label: "品牌名称" }, /* @__PURE__ */ import_react2.default.createElement(import_antd2.Input, { placeholder: "请输入品牌名称" })),
      showCategory && /* @__PURE__ */ import_react2.default.createElement(import_antd2.Form.Item, { name: "productCategoryName", label: "商品分类" }, /* @__PURE__ */ import_react2.default.createElement(import_antd2.Select, { placeholder: "请选择" }, /* @__PURE__ */ import_react2.default.createElement(import_antd2.Select.Option, { value: "手机" }, "手机"), /* @__PURE__ */ import_react2.default.createElement(import_antd2.Select.Option, { value: "笔记本" }, "笔记本"))),
      showPrice && /* @__PURE__ */ import_react2.default.createElement(import_antd2.Form.Item, { name: "price", label: "价格", rules: [{ required: true }] }, /* @__PURE__ */ import_react2.default.createElement(import_antd2.InputNumber, { style: { width: "100%" }, min: 0, prefix: "¥" })),
      showStock && /* @__PURE__ */ import_react2.default.createElement(import_antd2.Form.Item, { name: "stock", label: "库存", rules: [{ required: true }] }, /* @__PURE__ */ import_react2.default.createElement(import_antd2.InputNumber, { style: { width: "100%" }, min: 0 })),
      showDescription && /* @__PURE__ */ import_react2.default.createElement(import_antd2.Form.Item, { name: "description", label: "描述" }, /* @__PURE__ */ import_react2.default.createElement(import_antd2.Input.TextArea, { rows: 4 })),
      /* @__PURE__ */ import_react2.default.createElement(import_antd2.Form.Item, null, /* @__PURE__ */ import_react2.default.createElement(import_antd2.Space, null, /* @__PURE__ */ import_react2.default.createElement(import_antd2.Button, { type: "primary", onClick: handleSubmit }, "提交"), /* @__PURE__ */ import_react2.default.createElement(import_antd2.Button, { onClick: onCancel }, "取消")))
    )));
  };
  var ProductForm_default = ProductForm;

  // src/plugins/plugin-mall-components/components/OrderList/OrderList.tsx
  var import_react3 = __toESM(require_react());
  var import_antd3 = __toESM(require_antd());
  var mockData = [
    {
      key: "1",
      orderNo: "ORD-20240101-001",
      customer: "张三",
      amount: 299,
      status: "paid",
      createTime: "2024-01-01 10:30:00"
    },
    {
      key: "2",
      orderNo: "ORD-20240101-002",
      customer: "李四",
      amount: 599,
      status: "shipped",
      createTime: "2024-01-01 11:20:00"
    },
    {
      key: "3",
      orderNo: "ORD-20240101-003",
      customer: "王五",
      amount: 129,
      status: "pending",
      createTime: "2024-01-01 14:15:00"
    }
  ];
  var columns = [
    {
      title: "订单号",
      dataIndex: "orderNo",
      key: "orderNo",
      width: 180
    },
    {
      title: "客户",
      dataIndex: "customer",
      key: "customer"
    },
    {
      title: "金额 (¥)",
      dataIndex: "amount",
      key: "amount",
      render: (amount) => /* @__PURE__ */ import_react3.default.createElement("span", { style: { color: "#f5222d", fontWeight: 500 } }, amount.toFixed(2))
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        const colorMap = {
          pending: "orange",
          paid: "blue",
          shipped: "green",
          completed: "default",
          cancelled: "red"
        };
        const labelMap2 = {
          pending: "待付款",
          paid: "已付款",
          shipped: "已发货",
          completed: "已完成",
          cancelled: "已取消"
        };
        return /* @__PURE__ */ import_react3.default.createElement(import_antd3.Tag, { color: colorMap[status] }, labelMap2[status]);
      }
    },
    {
      title: "创建时间",
      dataIndex: "createTime",
      key: "createTime"
    }
  ];
  var OrderList = ({ status }) => {
    const filteredData = status ? mockData.filter((item) => item.status === status) : mockData;
    return /* @__PURE__ */ import_react3.default.createElement("div", { className: "order-list" }, /* @__PURE__ */ import_react3.default.createElement("h3", { style: { marginBottom: 16 } }, "订单列表"), /* @__PURE__ */ import_react3.default.createElement(
      import_antd3.Table,
      {
        dataSource: filteredData,
        columns,
        pagination: { pageSize: 10 },
        size: "middle"
      }
    ));
  };
  var OrderList_default = OrderList;

  // src/plugins/plugin-mall-components/components/MarketingManager/MarketingManager.tsx
  var import_react4 = __toESM(require_react());
  var import_antd4 = __toESM(require_antd());
  var MarketingManager = ({ type = "coupon", showStats = true }) => {
    const typeLabels = {
      coupon: "优惠券管理",
      promotion: "促销活动",
      flash: "秒杀活动",
      new: "新品推荐",
      hot: "人气推荐"
    };
    return /* @__PURE__ */ import_react4.default.createElement("div", { className: "marketing-manager" }, /* @__PURE__ */ import_react4.default.createElement("h3", { style: { marginBottom: 16 } }, typeLabels[type] || type), showStats && /* @__PURE__ */ import_react4.default.createElement(import_antd4.Row, { gutter: 16, style: { marginBottom: 24 } }, /* @__PURE__ */ import_react4.default.createElement(import_antd4.Col, { span: 6 }, /* @__PURE__ */ import_react4.default.createElement(import_antd4.Card, { size: "small" }, /* @__PURE__ */ import_react4.default.createElement(import_antd4.Statistic, { title: "活动总数", value: 12 }))), /* @__PURE__ */ import_react4.default.createElement(import_antd4.Col, { span: 6 }, /* @__PURE__ */ import_react4.default.createElement(import_antd4.Card, { size: "small" }, /* @__PURE__ */ import_react4.default.createElement(import_antd4.Statistic, { title: "进行中", value: 5, valueStyle: { color: "#3f8600" } }))), /* @__PURE__ */ import_react4.default.createElement(import_antd4.Col, { span: 6 }, /* @__PURE__ */ import_react4.default.createElement(import_antd4.Card, { size: "small" }, /* @__PURE__ */ import_react4.default.createElement(import_antd4.Statistic, { title: "已结束", value: 7 }))), /* @__PURE__ */ import_react4.default.createElement(import_antd4.Col, { span: 6 }, /* @__PURE__ */ import_react4.default.createElement(import_antd4.Card, { size: "small" }, /* @__PURE__ */ import_react4.default.createElement(import_antd4.Statistic, { title: "参与人数", value: 1234, suffix: "人" })))), /* @__PURE__ */ import_react4.default.createElement(import_antd4.Space, { direction: "vertical", style: { width: "100%" }, size: "middle" }, [
      { id: 1, name: "新年优惠券", status: "active", discount: 20, count: 500 },
      { id: 2, name: "会员专享", status: "active", discount: 15, count: 1e3 },
      { id: 3, name: "满减优惠", status: "expired", discount: 30, count: 200 },
      { id: 4, name: "新人礼包", status: "pending", discount: 50, count: 800 }
    ].map((item) => /* @__PURE__ */ import_react4.default.createElement(import_antd4.Card, { key: item.id, size: "small", hoverable: true }, /* @__PURE__ */ import_react4.default.createElement(import_antd4.Row, { justify: "space-between", align: "middle" }, /* @__PURE__ */ import_react4.default.createElement(import_antd4.Col, null, /* @__PURE__ */ import_react4.default.createElement("strong", null, item.name), /* @__PURE__ */ import_react4.default.createElement(import_antd4.Tag, { color: item.status === "active" ? "green" : item.status === "expired" ? "red" : "orange", style: { marginLeft: 8 } }, item.status === "active" ? "进行中" : item.status === "expired" ? "已过期" : "未开始")), /* @__PURE__ */ import_react4.default.createElement(import_antd4.Col, null, /* @__PURE__ */ import_react4.default.createElement("span", { style: { marginRight: 16 } }, "折扣：", item.discount, "%"), /* @__PURE__ */ import_react4.default.createElement("span", null, "剩余：", item.count, " 张")), /* @__PURE__ */ import_react4.default.createElement(import_antd4.Col, null, /* @__PURE__ */ import_react4.default.createElement(import_antd4.Button, { type: "link", size: "small" }, "编辑"), /* @__PURE__ */ import_react4.default.createElement(import_antd4.Button, { type: "link", size: "small" }, "查看")))))), /* @__PURE__ */ import_react4.default.createElement("div", { style: { marginTop: 16, textAlign: "right" } }, /* @__PURE__ */ import_react4.default.createElement(import_antd4.Button, { type: "primary" }, "+ 创建新", typeLabels[type])));
  };
  var MarketingManager_default = MarketingManager;

  // src/plugins/plugin-mall-components/setters/RestApiTester.tsx
  var import_react5 = __toESM(require_react());
  var import_antd5 = __toESM(require_antd());
  var { TextArea } = import_antd5.Input;
  var RestApiTester = ({ style, className }) => {
    const [url, setUrl] = (0, import_react5.useState)("");
    const [method, setMethod] = (0, import_react5.useState)("GET");
    const [response, setResponse] = (0, import_react5.useState)("");
    const [loading, setLoading] = (0, import_react5.useState)(false);
    const handleExecute = async () => {
      if (!url) return;
      setLoading(true);
      try {
        const res = await fetch(url, { method });
        const data = await res.json();
        setResponse(JSON.stringify(data, null, 2));
      } catch (err) {
        setResponse(`Error: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    return /* @__PURE__ */ import_react5.default.createElement("div", { className: `rest-api-tester ${className || ""}`, style }, /* @__PURE__ */ import_react5.default.createElement(import_antd5.Card, { title: "REST API 测试" }, /* @__PURE__ */ import_react5.default.createElement(import_antd5.Space, { direction: "vertical", style: { width: "100%" }, size: "middle" }, /* @__PURE__ */ import_react5.default.createElement(
      import_antd5.Input,
      {
        placeholder: "API 地址",
        value: url,
        onChange: (e) => setUrl(e.target.value)
      }
    ), /* @__PURE__ */ import_react5.default.createElement(
      import_antd5.Select,
      {
        value: method,
        onChange: setMethod,
        options: [
          { label: "GET", value: "GET" },
          { label: "POST", value: "POST" },
          { label: "PUT", value: "PUT" },
          { label: "DELETE", value: "DELETE" }
        ],
        style: { width: 120 }
      }
    ), /* @__PURE__ */ import_react5.default.createElement(import_antd5.Button, { type: "primary", onClick: handleExecute, loading }, "执行"), /* @__PURE__ */ import_react5.default.createElement(
      TextArea,
      {
        value: response,
        readOnly: true,
        rows: 10,
        placeholder: "响应结果"
      }
    ))));
  };
  var RestApiTester_default = RestApiTester;

  // src/plugins/plugin-mall-components/components/AdminLayout/AdminLayout.tsx
  var import_react13 = __toESM(require_react());

  // src/plugins/plugin-mall-components/components/AdminLayout/Sidebar.tsx
  var import_react8 = __toESM(require_react());
  var import_antd6 = __toESM(require_antd());

  // node_modules/@ant-design/icons/es/components/Context.js
  var import_react6 = __toESM(require_react());
  var IconContext = /* @__PURE__ */ (0, import_react6.createContext)({});
  var Context_default = IconContext;

  // node_modules/@babel/runtime/helpers/esm/typeof.js
  function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof(o);
  }

  // node_modules/@babel/runtime/helpers/esm/toPrimitive.js
  function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }

  // node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
  function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
  }

  // node_modules/@babel/runtime/helpers/esm/defineProperty.js
  function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[r] = t, e;
  }

  // node_modules/@babel/runtime/helpers/esm/objectSpread2.js
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
        _defineProperty(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }

  // node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }

  // node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e, n, i, u, a = [], f = true, o = false;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = false;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
      } catch (r2) {
        o = true, n = r2;
      } finally {
        try {
          if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }

  // node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }

  // node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  // node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  // node_modules/@babel/runtime/helpers/esm/slicedToArray.js
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }

  // node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
  function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r[n];
    }
    return t;
  }

  // node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
  function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }

  // node_modules/@ant-design/icons/es/components/AntdIcon.js
  var React7 = __toESM(require_react());
  var import_classnames = __toESM(require_classnames());

  // node_modules/@ctrl/tinycolor/dist/module/util.js
  function bound01(n, max) {
    if (isOnePointZero(n)) {
      n = "100%";
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    if (isPercent) {
      n = parseInt(String(n * max), 10) / 100;
    }
    if (Math.abs(n - max) < 1e-6) {
      return 1;
    }
    if (max === 360) {
      n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
    } else {
      n = n % max / parseFloat(String(max));
    }
    return n;
  }
  function isOnePointZero(n) {
    return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
  }
  function isPercentage(n) {
    return typeof n === "string" && n.indexOf("%") !== -1;
  }
  function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
      a = 1;
    }
    return a;
  }
  function convertToPercentage(n) {
    if (n <= 1) {
      return "".concat(Number(n) * 100, "%");
    }
    return n;
  }
  function pad2(c) {
    return c.length === 1 ? "0" + c : String(c);
  }

  // node_modules/@ctrl/tinycolor/dist/module/conversion.js
  function rgbToRgb(r, g, b) {
    return {
      r: bound01(r, 255) * 255,
      g: bound01(g, 255) * 255,
      b: bound01(b, 255) * 255
    };
  }
  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1 / 6) {
      return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
      return q;
    }
    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
  }
  function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
      g = l;
      b = l;
      r = l;
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
  }
  function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
      h = 0;
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          break;
      }
      h /= 6;
    }
    return { h, s, v };
  }
  function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
  }
  function rgbToHex(r, g, b, allow3Char) {
    var hex = [
      pad2(Math.round(r).toString(16)),
      pad2(Math.round(g).toString(16)),
      pad2(Math.round(b).toString(16))
    ];
    if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join("");
  }
  function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
  }
  function parseIntFromHex(val) {
    return parseInt(val, 16);
  }

  // node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
  var names = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };

  // node_modules/@ctrl/tinycolor/dist/module/format-input.js
  function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === "string") {
      color = stringInputToObject(color);
    }
    if (typeof color === "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s = convertToPercentage(color.s);
        v = convertToPercentage(color.v);
        rgb = hsvToRgb(color.h, s, v);
        ok = true;
        format = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s = convertToPercentage(color.s);
        l = convertToPercentage(color.l);
        rgb = hslToRgb(color.h, s, l);
        ok = true;
        format = "hsl";
      }
      if (Object.prototype.hasOwnProperty.call(color, "a")) {
        a = color.a;
      }
    }
    a = boundAlpha(a);
    return {
      ok,
      format: color.format || format,
      r: Math.min(255, Math.max(rgb.r, 0)),
      g: Math.min(255, Math.max(rgb.g, 0)),
      b: Math.min(255, Math.max(rgb.b, 0)),
      a
    };
  }
  var CSS_INTEGER = "[-\\+]?\\d+%?";
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
  var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
  var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
  function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
      return false;
    }
    var named = false;
    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color === "transparent") {
      return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    }
    var match = matchers.rgb.exec(color);
    if (match) {
      return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
      return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
      return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
      return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
      return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
      return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        a: convertHexToDecimal(match[4]),
        format: named ? "name" : "hex8"
      };
    }
    match = matchers.hex6.exec(color);
    if (match) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        format: named ? "name" : "hex"
      };
    }
    match = matchers.hex4.exec(color);
    if (match) {
      return {
        r: parseIntFromHex(match[1] + match[1]),
        g: parseIntFromHex(match[2] + match[2]),
        b: parseIntFromHex(match[3] + match[3]),
        a: convertHexToDecimal(match[4] + match[4]),
        format: named ? "name" : "hex8"
      };
    }
    match = matchers.hex3.exec(color);
    if (match) {
      return {
        r: parseIntFromHex(match[1] + match[1]),
        g: parseIntFromHex(match[2] + match[2]),
        b: parseIntFromHex(match[3] + match[3]),
        format: named ? "name" : "hex"
      };
    }
    return false;
  }
  function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
  }

  // node_modules/@ant-design/colors/dist/index.esm.js
  var hueStep = 2;
  var saturationStep = 0.16;
  var saturationStep2 = 0.05;
  var brightnessStep1 = 0.05;
  var brightnessStep2 = 0.15;
  var lightColorCount = 5;
  var darkColorCount = 4;
  var darkColorMap = [{
    index: 7,
    opacity: 0.15
  }, {
    index: 6,
    opacity: 0.25
  }, {
    index: 5,
    opacity: 0.3
  }, {
    index: 5,
    opacity: 0.45
  }, {
    index: 5,
    opacity: 0.65
  }, {
    index: 5,
    opacity: 0.85
  }, {
    index: 4,
    opacity: 0.9
  }, {
    index: 3,
    opacity: 0.95
  }, {
    index: 2,
    opacity: 0.97
  }, {
    index: 1,
    opacity: 0.98
  }];
  function toHsv(_ref) {
    var r = _ref.r, g = _ref.g, b = _ref.b;
    var hsv = rgbToHsv(r, g, b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v
    };
  }
  function toHex(_ref2) {
    var r = _ref2.r, g = _ref2.g, b = _ref2.b;
    return "#".concat(rgbToHex(r, g, b, false));
  }
  function mix(rgb1, rgb2, amount) {
    var p = amount / 100;
    var rgb = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b
    };
    return rgb;
  }
  function getHue(hsv, i, light) {
    var hue;
    if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
      hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
    } else {
      hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
    }
    if (hue < 0) {
      hue += 360;
    } else if (hue >= 360) {
      hue -= 360;
    }
    return hue;
  }
  function getSaturation(hsv, i, light) {
    if (hsv.h === 0 && hsv.s === 0) {
      return hsv.s;
    }
    var saturation;
    if (light) {
      saturation = hsv.s - saturationStep * i;
    } else if (i === darkColorCount) {
      saturation = hsv.s + saturationStep;
    } else {
      saturation = hsv.s + saturationStep2 * i;
    }
    if (saturation > 1) {
      saturation = 1;
    }
    if (light && i === lightColorCount && saturation > 0.1) {
      saturation = 0.1;
    }
    if (saturation < 0.06) {
      saturation = 0.06;
    }
    return Number(saturation.toFixed(2));
  }
  function getValue(hsv, i, light) {
    var value;
    if (light) {
      value = hsv.v + brightnessStep1 * i;
    } else {
      value = hsv.v - brightnessStep2 * i;
    }
    if (value > 1) {
      value = 1;
    }
    return Number(value.toFixed(2));
  }
  function generate(color) {
    var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var patterns = [];
    var pColor = inputToRGB(color);
    for (var i = lightColorCount; i > 0; i -= 1) {
      var hsv = toHsv(pColor);
      var colorString = toHex(inputToRGB({
        h: getHue(hsv, i, true),
        s: getSaturation(hsv, i, true),
        v: getValue(hsv, i, true)
      }));
      patterns.push(colorString);
    }
    patterns.push(toHex(pColor));
    for (var _i = 1; _i <= darkColorCount; _i += 1) {
      var _hsv = toHsv(pColor);
      var _colorString = toHex(inputToRGB({
        h: getHue(_hsv, _i),
        s: getSaturation(_hsv, _i),
        v: getValue(_hsv, _i)
      }));
      patterns.push(_colorString);
    }
    if (opts.theme === "dark") {
      return darkColorMap.map(function(_ref3) {
        var index = _ref3.index, opacity = _ref3.opacity;
        var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index]), opacity * 100));
        return darkColorString;
      });
    }
    return patterns;
  }
  var presetPrimaryColors = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1890FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666"
  };
  var presetPalettes = {};
  var presetDarkPalettes = {};
  Object.keys(presetPrimaryColors).forEach(function(key) {
    presetPalettes[key] = generate(presetPrimaryColors[key]);
    presetPalettes[key].primary = presetPalettes[key][5];
    presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
      theme: "dark",
      backgroundColor: "#141414"
    });
    presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
  });
  var red = presetPalettes.red;
  var volcano = presetPalettes.volcano;
  var gold = presetPalettes.gold;
  var orange = presetPalettes.orange;
  var yellow = presetPalettes.yellow;
  var lime = presetPalettes.lime;
  var green = presetPalettes.green;
  var cyan = presetPalettes.cyan;
  var blue = presetPalettes.blue;
  var geekblue = presetPalettes.geekblue;
  var purple = presetPalettes.purple;
  var magenta = presetPalettes.magenta;
  var grey = presetPalettes.grey;

  // node_modules/@ant-design/icons/es/utils.js
  var import_react7 = __toESM(require_react());

  // node_modules/rc-util/es/warning.js
  var warned = {};
  var preWarningFns = [];
  var preMessage = function preMessage2(fn) {
    preWarningFns.push(fn);
  };
  function warning(valid, message2) {
    if (false) {
      var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
        return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "warning");
      }, message2);
      if (finalMessage) {
        console.error("Warning: ".concat(finalMessage));
      }
    }
  }
  function note(valid, message2) {
    if (false) {
      var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
        return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "note");
      }, message2);
      if (finalMessage) {
        console.warn("Note: ".concat(finalMessage));
      }
    }
  }
  function resetWarned() {
    warned = {};
  }
  function call(method, valid, message2) {
    if (!valid && !warned[message2]) {
      method(false, message2);
      warned[message2] = true;
    }
  }
  function warningOnce(valid, message2) {
    call(warning, valid, message2);
  }
  function noteOnce(valid, message2) {
    call(note, valid, message2);
  }
  warningOnce.preMessage = preMessage;
  warningOnce.resetWarned = resetWarned;
  warningOnce.noteOnce = noteOnce;
  var warning_default = warningOnce;

  // node_modules/rc-util/es/Dom/canUseDom.js
  function canUseDom() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  }

  // node_modules/rc-util/es/Dom/contains.js
  function contains(root, n) {
    if (!root) {
      return false;
    }
    if (root.contains) {
      return root.contains(n);
    }
    var node = n;
    while (node) {
      if (node === root) {
        return true;
      }
      node = node.parentNode;
    }
    return false;
  }

  // node_modules/rc-util/es/Dom/dynamicCSS.js
  var APPEND_ORDER = "data-rc-order";
  var APPEND_PRIORITY = "data-rc-priority";
  var MARK_KEY = "rc-util-key";
  var containerCache = /* @__PURE__ */ new Map();
  function getMark() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref.mark;
    if (mark) {
      return mark.startsWith("data-") ? mark : "data-".concat(mark);
    }
    return MARK_KEY;
  }
  function getContainer(option) {
    if (option.attachTo) {
      return option.attachTo;
    }
    var head = document.querySelector("head");
    return head || document.body;
  }
  function getOrder(prepend) {
    if (prepend === "queue") {
      return "prependQueue";
    }
    return prepend ? "prepend" : "append";
  }
  function findStyles(container) {
    return Array.from((containerCache.get(container) || container).children).filter(function(node) {
      return node.tagName === "STYLE";
    });
  }
  function injectCSS(css) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!canUseDom()) {
      return null;
    }
    var csp = option.csp, prepend = option.prepend, _option$priority = option.priority, priority = _option$priority === void 0 ? 0 : _option$priority;
    var mergedOrder = getOrder(prepend);
    var isPrependQueue = mergedOrder === "prependQueue";
    var styleNode = document.createElement("style");
    styleNode.setAttribute(APPEND_ORDER, mergedOrder);
    if (isPrependQueue && priority) {
      styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
    }
    if (csp !== null && csp !== void 0 && csp.nonce) {
      styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
    }
    styleNode.innerHTML = css;
    var container = getContainer(option);
    var firstChild = container.firstChild;
    if (prepend) {
      if (isPrependQueue) {
        var existStyle = (option.styles || findStyles(container)).filter(function(node) {
          if (!["prepend", "prependQueue"].includes(node.getAttribute(APPEND_ORDER))) {
            return false;
          }
          var nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
          return priority >= nodePriority;
        });
        if (existStyle.length) {
          container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
          return styleNode;
        }
      }
      container.insertBefore(styleNode, firstChild);
    } else {
      container.appendChild(styleNode);
    }
    return styleNode;
  }
  function findExistNode(key) {
    var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var container = getContainer(option);
    return (option.styles || findStyles(container)).find(function(node) {
      return node.getAttribute(getMark(option)) === key;
    });
  }
  function syncRealContainer(container, option) {
    var cachedRealContainer = containerCache.get(container);
    if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
      var placeholderStyle = injectCSS("", option);
      var parentNode = placeholderStyle.parentNode;
      containerCache.set(container, parentNode);
      container.removeChild(placeholderStyle);
    }
  }
  function updateCSS(css, key) {
    var originOption = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var container = getContainer(originOption);
    var styles = findStyles(container);
    var option = _objectSpread2(_objectSpread2({}, originOption), {}, {
      styles
    });
    syncRealContainer(container, option);
    var existNode = findExistNode(key, option);
    if (existNode) {
      var _option$csp, _option$csp2;
      if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
        var _option$csp3;
        existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
      }
      if (existNode.innerHTML !== css) {
        existNode.innerHTML = css;
      }
      return existNode;
    }
    var newNode = injectCSS(css, option);
    newNode.setAttribute(getMark(option), key);
    return newNode;
  }

  // node_modules/@ant-design/icons/es/utils.js
  function warning2(valid, message2) {
    warning_default(valid, "[@ant-design/icons] ".concat(message2));
  }
  function isIconDefinition(target) {
    return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
  }
  function normalizeAttrs() {
    var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Object.keys(attrs).reduce(function(acc, key) {
      var val = attrs[key];
      switch (key) {
        case "class":
          acc.className = val;
          delete acc.class;
          break;
        default:
          acc[key] = val;
      }
      return acc;
    }, {});
  }
  function generate2(node, key, rootProps) {
    if (!rootProps) {
      return /* @__PURE__ */ import_react7.default.createElement(node.tag, _objectSpread2({
        key
      }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index) {
        return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
      }));
    }
    return /* @__PURE__ */ import_react7.default.createElement(node.tag, _objectSpread2(_objectSpread2({
      key
    }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function(child, index) {
      return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }
  function getSecondaryColor(primaryColor) {
    return generate(primaryColor)[0];
  }
  function normalizeTwoToneColors(twoToneColor) {
    if (!twoToneColor) {
      return [];
    }
    return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
  }
  var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
  var useInsertStyles = function useInsertStyles2() {
    var styleStr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : iconStyles;
    var _useContext = (0, import_react7.useContext)(Context_default), csp = _useContext.csp;
    (0, import_react7.useEffect)(function() {
      updateCSS(styleStr, "@ant-design-icons", {
        prepend: true,
        csp
      });
    }, []);
  };

  // node_modules/@ant-design/icons/es/components/IconBase.js
  var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
  var twoToneColorPalette = {
    primaryColor: "#333",
    secondaryColor: "#E6E6E6",
    calculated: false
  };
  function setTwoToneColors(_ref) {
    var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
    twoToneColorPalette.calculated = !!secondaryColor;
  }
  function getTwoToneColors() {
    return _objectSpread2({}, twoToneColorPalette);
  }
  var IconBase = function IconBase2(props) {
    var icon = props.icon, className = props.className, onClick = props.onClick, style = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded);
    var colors = twoToneColorPalette;
    if (primaryColor) {
      colors = {
        primaryColor,
        secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
      };
    }
    useInsertStyles();
    warning2(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
    if (!isIconDefinition(icon)) {
      return null;
    }
    var target = icon;
    if (target && typeof target.icon === "function") {
      target = _objectSpread2(_objectSpread2({}, target), {}, {
        icon: target.icon(colors.primaryColor, colors.secondaryColor)
      });
    }
    return generate2(target.icon, "svg-".concat(target.name), _objectSpread2({
      className,
      onClick,
      style,
      "data-icon": target.name,
      width: "1em",
      height: "1em",
      fill: "currentColor",
      "aria-hidden": "true"
    }, restProps));
  };
  IconBase.displayName = "IconReact";
  IconBase.getTwoToneColors = getTwoToneColors;
  IconBase.setTwoToneColors = setTwoToneColors;
  var IconBase_default = IconBase;

  // node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js
  function setTwoToneColor(twoToneColor) {
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return IconBase_default.setTwoToneColors({
      primaryColor,
      secondaryColor
    });
  }
  function getTwoToneColor() {
    var colors = IconBase_default.getTwoToneColors();
    if (!colors.calculated) {
      return colors.primaryColor;
    }
    return [colors.primaryColor, colors.secondaryColor];
  }

  // node_modules/@ant-design/icons/es/components/AntdIcon.js
  var _excluded2 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
  setTwoToneColor("#1890ff");
  var Icon = /* @__PURE__ */ React7.forwardRef(function(props, ref) {
    var _classNames;
    var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded2);
    var _React$useContext = React7.useContext(Context_default), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
    var classString = (0, import_classnames.default)(rootClassName, prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), _classNames), className);
    var iconTabIndex = tabIndex;
    if (iconTabIndex === void 0 && onClick) {
      iconTabIndex = -1;
    }
    var svgStyle = rotate ? {
      msTransform: "rotate(".concat(rotate, "deg)"),
      transform: "rotate(".concat(rotate, "deg)")
    } : void 0;
    var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
    return /* @__PURE__ */ React7.createElement("span", _objectSpread2(_objectSpread2({
      role: "img",
      "aria-label": icon.name
    }, restProps), {}, {
      ref,
      tabIndex: iconTabIndex,
      onClick,
      className: classString
    }), /* @__PURE__ */ React7.createElement(IconBase_default, {
      icon,
      primaryColor,
      secondaryColor,
      style: svgStyle
    }));
  });
  Icon.displayName = "AntdIcon";
  Icon.getTwoToneColor = getTwoToneColor;
  Icon.setTwoToneColor = setTwoToneColor;
  var AntdIcon_default = Icon;

  // node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js
  var React8 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/CloseCircleOutlined.js
  var CloseCircleOutlined = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, "name": "close-circle", "theme": "outlined" };
  var CloseCircleOutlined_default = CloseCircleOutlined;

  // node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js
  var CloseCircleOutlined2 = function CloseCircleOutlined3(props, ref) {
    return /* @__PURE__ */ React8.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: CloseCircleOutlined_default
    }));
  };
  CloseCircleOutlined2.displayName = "CloseCircleOutlined";
  var CloseCircleOutlined_default2 = /* @__PURE__ */ React8.forwardRef(CloseCircleOutlined2);

  // node_modules/@ant-design/icons/es/icons/CloseOutlined.js
  var React9 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/CloseOutlined.js
  var CloseOutlined = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, "name": "close", "theme": "outlined" };
  var CloseOutlined_default = CloseOutlined;

  // node_modules/@ant-design/icons/es/icons/CloseOutlined.js
  var CloseOutlined2 = function CloseOutlined3(props, ref) {
    return /* @__PURE__ */ React9.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: CloseOutlined_default
    }));
  };
  CloseOutlined2.displayName = "CloseOutlined";
  var CloseOutlined_default2 = /* @__PURE__ */ React9.forwardRef(CloseOutlined2);

  // node_modules/@ant-design/icons/es/icons/DashboardOutlined.js
  var React10 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/DashboardOutlined.js
  var DashboardOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M924.8 385.6a446.7 446.7 0 00-96-142.4 446.7 446.7 0 00-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 00-142.4 96 446.7 446.7 0 00-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 01140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276zM623.5 421.5a8.03 8.03 0 00-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 000 79.2 55.95 55.95 0 0079.2 0 55.87 55.87 0 0014.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm12.7-197.2l-31.1-31.1a8.03 8.03 0 00-11.3 0l-56.6 56.6a8.03 8.03 0 000 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zm-458.6-31.1a8.03 8.03 0 00-11.3 0l-31.1 31.1a8.03 8.03 0 000 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z" } }] }, "name": "dashboard", "theme": "outlined" };
  var DashboardOutlined_default = DashboardOutlined;

  // node_modules/@ant-design/icons/es/icons/DashboardOutlined.js
  var DashboardOutlined2 = function DashboardOutlined3(props, ref) {
    return /* @__PURE__ */ React10.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: DashboardOutlined_default
    }));
  };
  DashboardOutlined2.displayName = "DashboardOutlined";
  var DashboardOutlined_default2 = /* @__PURE__ */ React10.forwardRef(DashboardOutlined2);

  // node_modules/@ant-design/icons/es/icons/DollarOutlined.js
  var React11 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/DollarOutlined.js
  var DollarOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119 0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7 4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124-.1-69.4-44.2-100.4-109-116.4zm-68.6-16.2c-5.6-1.6-10.3-3.1-15-5-33.8-12.2-49.5-31.9-49.5-57.3 0-36.3 27.5-57 64.5-61.7v124zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2 47.3 14.4 63.2 34.4 63.2 65.1 0 39.1-29.4 62.6-72 66.4z" } }] }, "name": "dollar", "theme": "outlined" };
  var DollarOutlined_default = DollarOutlined;

  // node_modules/@ant-design/icons/es/icons/DollarOutlined.js
  var DollarOutlined2 = function DollarOutlined3(props, ref) {
    return /* @__PURE__ */ React11.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: DollarOutlined_default
    }));
  };
  DollarOutlined2.displayName = "DollarOutlined";
  var DollarOutlined_default2 = /* @__PURE__ */ React11.forwardRef(DollarOutlined2);

  // node_modules/@ant-design/icons/es/icons/FileTextOutlined.js
  var React12 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/FileTextOutlined.js
  var FileTextOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z" } }] }, "name": "file-text", "theme": "outlined" };
  var FileTextOutlined_default = FileTextOutlined;

  // node_modules/@ant-design/icons/es/icons/FileTextOutlined.js
  var FileTextOutlined2 = function FileTextOutlined3(props, ref) {
    return /* @__PURE__ */ React12.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: FileTextOutlined_default
    }));
  };
  FileTextOutlined2.displayName = "FileTextOutlined";
  var FileTextOutlined_default2 = /* @__PURE__ */ React12.forwardRef(FileTextOutlined2);

  // node_modules/@ant-design/icons/es/icons/FireOutlined.js
  var React13 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/FireOutlined.js
  var FireOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M834.1 469.2A347.49 347.49 0 00751.2 354l-29.1-26.7a8.09 8.09 0 00-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 01-47.5 46.1 352.6 352.6 0 00-100.3 121.5A347.75 347.75 0 00160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0075.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 00760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0027.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4 0-43.5 9.8-85.2 29.1-124 18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0058.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0012.1-46.5c24.1 22.2 44.3 49 61.2 80.4 33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0024.4 59.8 73.36 73.36 0 0053.4 18.8c19.7-1 37.8-9.7 51-24.4 13.3-14.9 24.8-30.1 34.4-45.6 14 17.9 25.7 37.4 35 58.4 15.9 35.8 24 73.9 24 113.1 0 74.9-29.5 145.4-83 198.4z" } }] }, "name": "fire", "theme": "outlined" };
  var FireOutlined_default = FireOutlined;

  // node_modules/@ant-design/icons/es/icons/FireOutlined.js
  var FireOutlined2 = function FireOutlined3(props, ref) {
    return /* @__PURE__ */ React13.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: FireOutlined_default
    }));
  };
  FireOutlined2.displayName = "FireOutlined";
  var FireOutlined_default2 = /* @__PURE__ */ React13.forwardRef(FireOutlined2);

  // node_modules/@ant-design/icons/es/icons/GiftOutlined.js
  var React14 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/GiftOutlined.js
  var GiftOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 310H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v200c0 4.4 3.6 8 8 8h40v344c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V550h40c4.4 0 8-3.6 8-8V342c0-17.7-14.3-32-32-32zm-334-74c0-38.6 31.4-70 70-70s70 31.4 70 70-31.4 70-70 70h-70v-70zm-138-70c38.6 0 70 31.4 70 70v70h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70zM180 482V378h298v104H180zm48 68h250v308H228V550zm568 308H546V550h250v308zm48-376H546V378h298v104z" } }] }, "name": "gift", "theme": "outlined" };
  var GiftOutlined_default = GiftOutlined;

  // node_modules/@ant-design/icons/es/icons/GiftOutlined.js
  var GiftOutlined2 = function GiftOutlined3(props, ref) {
    return /* @__PURE__ */ React14.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: GiftOutlined_default
    }));
  };
  GiftOutlined2.displayName = "GiftOutlined";
  var GiftOutlined_default2 = /* @__PURE__ */ React14.forwardRef(GiftOutlined2);

  // node_modules/@ant-design/icons/es/icons/InboxOutlined.js
  var React15 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/InboxOutlined.js
  var InboxOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z" } }] }, "name": "inbox", "theme": "outlined" };
  var InboxOutlined_default = InboxOutlined;

  // node_modules/@ant-design/icons/es/icons/InboxOutlined.js
  var InboxOutlined2 = function InboxOutlined3(props, ref) {
    return /* @__PURE__ */ React15.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: InboxOutlined_default
    }));
  };
  InboxOutlined2.displayName = "InboxOutlined";
  var InboxOutlined_default2 = /* @__PURE__ */ React15.forwardRef(InboxOutlined2);

  // node_modules/@ant-design/icons/es/icons/LogoutOutlined.js
  var React16 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/LogoutOutlined.js
  var LogoutOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z" } }] }, "name": "logout", "theme": "outlined" };
  var LogoutOutlined_default = LogoutOutlined;

  // node_modules/@ant-design/icons/es/icons/LogoutOutlined.js
  var LogoutOutlined2 = function LogoutOutlined3(props, ref) {
    return /* @__PURE__ */ React16.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: LogoutOutlined_default
    }));
  };
  LogoutOutlined2.displayName = "LogoutOutlined";
  var LogoutOutlined_default2 = /* @__PURE__ */ React16.forwardRef(LogoutOutlined2);

  // node_modules/@ant-design/icons/es/icons/MenuFoldOutlined.js
  var React17 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/MenuFoldOutlined.js
  var MenuFoldOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z" } }] }, "name": "menu-fold", "theme": "outlined" };
  var MenuFoldOutlined_default = MenuFoldOutlined;

  // node_modules/@ant-design/icons/es/icons/MenuFoldOutlined.js
  var MenuFoldOutlined2 = function MenuFoldOutlined3(props, ref) {
    return /* @__PURE__ */ React17.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: MenuFoldOutlined_default
    }));
  };
  MenuFoldOutlined2.displayName = "MenuFoldOutlined";
  var MenuFoldOutlined_default2 = /* @__PURE__ */ React17.forwardRef(MenuFoldOutlined2);

  // node_modules/@ant-design/icons/es/icons/MenuUnfoldOutlined.js
  var React18 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/MenuUnfoldOutlined.js
  var MenuUnfoldOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z" } }] }, "name": "menu-unfold", "theme": "outlined" };
  var MenuUnfoldOutlined_default = MenuUnfoldOutlined;

  // node_modules/@ant-design/icons/es/icons/MenuUnfoldOutlined.js
  var MenuUnfoldOutlined2 = function MenuUnfoldOutlined3(props, ref) {
    return /* @__PURE__ */ React18.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: MenuUnfoldOutlined_default
    }));
  };
  MenuUnfoldOutlined2.displayName = "MenuUnfoldOutlined";
  var MenuUnfoldOutlined_default2 = /* @__PURE__ */ React18.forwardRef(MenuUnfoldOutlined2);

  // node_modules/@ant-design/icons/es/icons/ReloadOutlined.js
  var React19 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/ReloadOutlined.js
  var ReloadOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" } }] }, "name": "reload", "theme": "outlined" };
  var ReloadOutlined_default = ReloadOutlined;

  // node_modules/@ant-design/icons/es/icons/ReloadOutlined.js
  var ReloadOutlined2 = function ReloadOutlined3(props, ref) {
    return /* @__PURE__ */ React19.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: ReloadOutlined_default
    }));
  };
  ReloadOutlined2.displayName = "ReloadOutlined";
  var ReloadOutlined_default2 = /* @__PURE__ */ React19.forwardRef(ReloadOutlined2);

  // node_modules/@ant-design/icons/es/icons/SafetyCertificateOutlined.js
  var React20 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/SafetyCertificateOutlined.js
  var SafetyCertificateOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM810 654.3L512 886.5 214 654.3V226.7l298-101.6 298 101.6v427.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0026 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4l-64.7-89.1z" } }] }, "name": "safety-certificate", "theme": "outlined" };
  var SafetyCertificateOutlined_default = SafetyCertificateOutlined;

  // node_modules/@ant-design/icons/es/icons/SafetyCertificateOutlined.js
  var SafetyCertificateOutlined2 = function SafetyCertificateOutlined3(props, ref) {
    return /* @__PURE__ */ React20.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: SafetyCertificateOutlined_default
    }));
  };
  SafetyCertificateOutlined2.displayName = "SafetyCertificateOutlined";
  var SafetyCertificateOutlined_default2 = /* @__PURE__ */ React20.forwardRef(SafetyCertificateOutlined2);

  // node_modules/@ant-design/icons/es/icons/SettingOutlined.js
  var React21 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/SettingOutlined.js
  var SettingOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z" } }] }, "name": "setting", "theme": "outlined" };
  var SettingOutlined_default = SettingOutlined;

  // node_modules/@ant-design/icons/es/icons/SettingOutlined.js
  var SettingOutlined2 = function SettingOutlined3(props, ref) {
    return /* @__PURE__ */ React21.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: SettingOutlined_default
    }));
  };
  SettingOutlined2.displayName = "SettingOutlined";
  var SettingOutlined_default2 = /* @__PURE__ */ React21.forwardRef(SettingOutlined2);

  // node_modules/@ant-design/icons/es/icons/ShoppingOutlined.js
  var React22 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/ShoppingOutlined.js
  var ShoppingOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z" } }] }, "name": "shopping", "theme": "outlined" };
  var ShoppingOutlined_default = ShoppingOutlined;

  // node_modules/@ant-design/icons/es/icons/ShoppingOutlined.js
  var ShoppingOutlined2 = function ShoppingOutlined3(props, ref) {
    return /* @__PURE__ */ React22.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: ShoppingOutlined_default
    }));
  };
  ShoppingOutlined2.displayName = "ShoppingOutlined";
  var ShoppingOutlined_default2 = /* @__PURE__ */ React22.forwardRef(ShoppingOutlined2);

  // node_modules/@ant-design/icons/es/icons/TagsOutlined.js
  var React23 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/TagsOutlined.js
  var TagsOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 000 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm62.6-651.7l224.6 19 19 224.6L477.5 694 233.9 450.5l311.9-311.9zm60.16 186.23a48 48 0 1067.88-67.89 48 48 0 10-67.88 67.89zM889.7 539.8l-39.6-39.5a8.03 8.03 0 00-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 00-11.3 0l-39.6 39.5a8.03 8.03 0 000 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z" } }] }, "name": "tags", "theme": "outlined" };
  var TagsOutlined_default = TagsOutlined;

  // node_modules/@ant-design/icons/es/icons/TagsOutlined.js
  var TagsOutlined2 = function TagsOutlined3(props, ref) {
    return /* @__PURE__ */ React23.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: TagsOutlined_default
    }));
  };
  TagsOutlined2.displayName = "TagsOutlined";
  var TagsOutlined_default2 = /* @__PURE__ */ React23.forwardRef(TagsOutlined2);

  // node_modules/@ant-design/icons/es/icons/TeamOutlined.js
  var React24 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/TeamOutlined.js
  var TeamOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z" } }] }, "name": "team", "theme": "outlined" };
  var TeamOutlined_default = TeamOutlined;

  // node_modules/@ant-design/icons/es/icons/TeamOutlined.js
  var TeamOutlined2 = function TeamOutlined3(props, ref) {
    return /* @__PURE__ */ React24.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: TeamOutlined_default
    }));
  };
  TeamOutlined2.displayName = "TeamOutlined";
  var TeamOutlined_default2 = /* @__PURE__ */ React24.forwardRef(TeamOutlined2);

  // node_modules/@ant-design/icons/es/icons/ThunderboltOutlined.js
  var React25 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/ThunderboltOutlined.js
  var ThunderboltOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z" } }] }, "name": "thunderbolt", "theme": "outlined" };
  var ThunderboltOutlined_default = ThunderboltOutlined;

  // node_modules/@ant-design/icons/es/icons/ThunderboltOutlined.js
  var ThunderboltOutlined2 = function ThunderboltOutlined3(props, ref) {
    return /* @__PURE__ */ React25.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: ThunderboltOutlined_default
    }));
  };
  ThunderboltOutlined2.displayName = "ThunderboltOutlined";
  var ThunderboltOutlined_default2 = /* @__PURE__ */ React25.forwardRef(ThunderboltOutlined2);

  // node_modules/@ant-design/icons/es/icons/UserOutlined.js
  var React26 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/UserOutlined.js
  var UserOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" } }] }, "name": "user", "theme": "outlined" };
  var UserOutlined_default = UserOutlined;

  // node_modules/@ant-design/icons/es/icons/UserOutlined.js
  var UserOutlined2 = function UserOutlined3(props, ref) {
    return /* @__PURE__ */ React26.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: UserOutlined_default
    }));
  };
  UserOutlined2.displayName = "UserOutlined";
  var UserOutlined_default2 = /* @__PURE__ */ React26.forwardRef(UserOutlined2);

  // src/plugins/plugin-mall-components/components/AdminLayout/Sidebar.tsx
  var { SubMenu } = import_antd6.Menu;
  var defaultMenuItems = [
    {
      key: "dashboard",
      label: "工作台",
      icon: /* @__PURE__ */ import_react8.default.createElement(DashboardOutlined_default2, null),
      path: "/dashboard"
    },
    {
      key: "permission",
      label: "权限管理",
      icon: /* @__PURE__ */ import_react8.default.createElement(SafetyCertificateOutlined_default2, null),
      children: [
        {
          key: "permission/users",
          label: "用户管理",
          icon: /* @__PURE__ */ import_react8.default.createElement(UserOutlined_default2, null),
          path: "/permission/users"
        },
        {
          key: "permission/roles",
          label: "角色管理",
          icon: /* @__PURE__ */ import_react8.default.createElement(TeamOutlined_default2, null),
          path: "/permission/roles"
        },
        {
          key: "permission/resources",
          label: "资源管理",
          icon: /* @__PURE__ */ import_react8.default.createElement(SettingOutlined_default2, null),
          path: "/permission/resources"
        },
        {
          key: "permission/menus",
          label: "菜单管理",
          icon: /* @__PURE__ */ import_react8.default.createElement(FileTextOutlined_default2, null),
          path: "/permission/menus"
        }
      ]
    },
    {
      key: "product",
      label: "商品管理",
      icon: /* @__PURE__ */ import_react8.default.createElement(ShoppingOutlined_default2, null),
      children: [
        {
          key: "product/list",
          label: "商品列表",
          icon: /* @__PURE__ */ import_react8.default.createElement(InboxOutlined_default2, null),
          path: "/product/list"
        },
        {
          key: "product/add",
          label: "添加商品",
          icon: /* @__PURE__ */ import_react8.default.createElement(ShoppingOutlined_default2, null),
          path: "/product/add"
        },
        {
          key: "product/category",
          label: "商品分类",
          icon: /* @__PURE__ */ import_react8.default.createElement(TagsOutlined_default2, null),
          path: "/product/category"
        },
        {
          key: "product/brand",
          label: "品牌管理",
          path: "/product/brand"
        },
        {
          key: "product/attribute",
          label: "商品属性",
          path: "/product/attribute"
        }
      ]
    },
    {
      key: "order",
      label: "订单管理",
      icon: /* @__PURE__ */ import_react8.default.createElement(FileTextOutlined_default2, null),
      children: [
        {
          key: "order/list",
          label: "订单列表",
          icon: /* @__PURE__ */ import_react8.default.createElement(FileTextOutlined_default2, null),
          path: "/order/list"
        },
        {
          key: "order/setting",
          label: "订单设置",
          icon: /* @__PURE__ */ import_react8.default.createElement(SettingOutlined_default2, null),
          path: "/order/setting"
        },
        {
          key: "order/return",
          label: "退货申请",
          path: "/order/return"
        },
        {
          key: "order/reason",
          label: "退货原因",
          path: "/order/reason"
        }
      ]
    },
    {
      key: "marketing",
      label: "营销管理",
      icon: /* @__PURE__ */ import_react8.default.createElement(GiftOutlined_default2, null),
      children: [
        {
          key: "marketing/coupon",
          label: "优惠券管理",
          icon: /* @__PURE__ */ import_react8.default.createElement(GiftOutlined_default2, null),
          path: "/marketing/coupon"
        },
        {
          key: "marketing/promotion",
          label: "促销活动",
          icon: /* @__PURE__ */ import_react8.default.createElement(DollarOutlined_default2, null),
          path: "/marketing/promotion"
        },
        {
          key: "marketing/flash",
          label: "秒杀活动",
          icon: /* @__PURE__ */ import_react8.default.createElement(ThunderboltOutlined_default2, null),
          path: "/marketing/flash"
        },
        {
          key: "marketing/new",
          label: "新品推荐",
          icon: /* @__PURE__ */ import_react8.default.createElement(FireOutlined_default2, null),
          path: "/marketing/new"
        },
        {
          key: "marketing/hot",
          label: "人气推荐",
          icon: /* @__PURE__ */ import_react8.default.createElement(FireOutlined_default2, null),
          path: "/marketing/hot"
        },
        {
          key: "marketing/advertise",
          label: "广告管理",
          path: "/marketing/advertise"
        },
        {
          key: "marketing/subject",
          label: "专题管理",
          path: "/marketing/subject"
        },
        {
          key: "marketing/brand",
          label: "品牌推荐",
          path: "/marketing/brand"
        }
      ]
    }
  ];
  var Sidebar = ({
    collapsed,
    selectedKey,
    openKeys,
    onMenuClick,
    onOpenChange,
    menuItems: customMenuItems
  }) => {
    const items = customMenuItems || defaultMenuItems;
    const [internalOpenKeys, setInternalOpenKeys] = (0, import_react8.useState)(
      items.filter((item) => item.children).map((item) => item.key)
    );
    const handleOpenChange = (keys) => {
      const latestKey = keys[keys.length - 1];
      if (latestKey && items.some((item) => item.key === latestKey)) {
        setInternalOpenKeys(keys);
        onOpenChange(keys);
      } else {
        setInternalOpenKeys(latestKey ? [latestKey] : []);
        onOpenChange(latestKey ? [latestKey] : []);
      }
    };
    const handleClick = ({ key }) => {
      onMenuClick(key);
    };
    return /* @__PURE__ */ import_react8.default.createElement("div", { className: `sidebar-container ${collapsed ? "collapsed" : ""}` }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "sidebar-logo" }, !collapsed && /* @__PURE__ */ import_react8.default.createElement("span", { className: "logo-text" }, "Mall Admin"), collapsed && /* @__PURE__ */ import_react8.default.createElement("span", { className: "logo-icon" }, "M")), /* @__PURE__ */ import_react8.default.createElement(
      import_antd6.Menu,
      {
        mode: "inline",
        theme: "dark",
        inlineCollapsed: collapsed,
        selectedKeys: [selectedKey],
        defaultOpenKeys: internalOpenKeys,
        openKeys: openKeys.length > 0 ? openKeys : internalOpenKeys,
        onClick: handleClick,
        onOpenChange: handleOpenChange,
        items: items.map((item) => {
          if (item.children && item.children.length > 0) {
            return {
              key: item.key,
              icon: item.icon,
              label: item.label,
              children: item.children.map((child) => ({
                key: child.key,
                icon: child.icon,
                label: child.label
              }))
            };
          }
          return {
            key: item.key,
            icon: item.icon,
            label: item.label
          };
        })
      }
    ));
  };
  var Sidebar_default = Sidebar;

  // src/plugins/plugin-mall-components/components/AdminLayout/Navbar.tsx
  var import_react10 = __toESM(require_react());
  var import_antd8 = __toESM(require_antd());

  // src/plugins/plugin-mall-components/components/AdminLayout/Breadcrumb.tsx
  var import_react9 = __toESM(require_react());
  var import_antd7 = __toESM(require_antd());
  var labelMap = {
    dashboard: "工作台",
    permission: "权限管理",
    product: "商品管理",
    order: "订单管理",
    marketing: "营销管理",
    users: "用户管理",
    roles: "角色管理",
    resources: "资源管理",
    menus: "菜单管理",
    list: "列表",
    add: "添加",
    category: "分类",
    brand: "品牌",
    attribute: "属性",
    setting: "设置",
    return: "退货",
    reason: "原因",
    coupon: "优惠券",
    promotion: "促销",
    flash: "秒杀",
    new: "新品",
    hot: "人气",
    advertise: "广告",
    subject: "专题"
  };
  var BreadcrumbNav = ({ items, onNavigate }) => {
    const getLabel = (key) => {
      const parts = key.split("/");
      return parts.map((part) => labelMap[part] || part).join(" / ");
    };
    if (!items || items.length === 0) {
      return null;
    }
    return /* @__PURE__ */ import_react9.default.createElement(import_antd7.Breadcrumb, null, items.map((item) => /* @__PURE__ */ import_react9.default.createElement(import_antd7.Breadcrumb.Item, { key: item.key }, /* @__PURE__ */ import_react9.default.createElement("a", { onClick: () => onNavigate(item.key) }, item.label || getLabel(item.key)))));
  };
  var Breadcrumb_default = BreadcrumbNav;

  // src/plugins/plugin-mall-components/components/AdminLayout/Navbar.tsx
  var Navbar = ({ collapsed, onToggleCollapse, breadcrumbItems, onNavigate }) => {
    const userMenuItems = [
      {
        key: "profile",
        icon: /* @__PURE__ */ import_react10.default.createElement(UserOutlined_default2, null),
        label: "个人中心"
      },
      {
        key: "settings",
        icon: /* @__PURE__ */ import_react10.default.createElement(SettingOutlined_default2, null),
        label: "系统设置"
      },
      {
        type: "divider"
      },
      {
        key: "logout",
        icon: /* @__PURE__ */ import_react10.default.createElement(LogoutOutlined_default2, null),
        label: "退出登录",
        danger: true
      }
    ];
    const handleUserMenuClick = ({ key }) => {
      if (key === "logout") {
        console.log("User logged out");
      }
    };
    const menu = /* @__PURE__ */ import_react10.default.createElement(import_antd8.Menu, { items: userMenuItems, onClick: handleUserMenuClick });
    return /* @__PURE__ */ import_react10.default.createElement("div", { className: "navbar-container" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "navbar-left" }, /* @__PURE__ */ import_react10.default.createElement("button", { className: "hamburger-btn", onClick: onToggleCollapse }, collapsed ? /* @__PURE__ */ import_react10.default.createElement(MenuUnfoldOutlined_default2, null) : /* @__PURE__ */ import_react10.default.createElement(MenuFoldOutlined_default2, null)), /* @__PURE__ */ import_react10.default.createElement(Breadcrumb_default, { items: breadcrumbItems, onNavigate })), /* @__PURE__ */ import_react10.default.createElement("div", { className: "navbar-right" }, /* @__PURE__ */ import_react10.default.createElement(import_antd8.Dropdown, { overlay: menu, placement: "bottomRight" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "user-info" }, /* @__PURE__ */ import_react10.default.createElement(import_antd8.Avatar, { size: 32, icon: /* @__PURE__ */ import_react10.default.createElement(UserOutlined_default2, null), className: "user-avatar" }), /* @__PURE__ */ import_react10.default.createElement(import_antd8.Space, { size: 4, className: "username" }, /* @__PURE__ */ import_react10.default.createElement("span", null, "管理员"))))));
  };
  var Navbar_default = Navbar;

  // src/plugins/plugin-mall-components/components/AdminLayout/MainContent.tsx
  var import_react12 = __toESM(require_react());

  // src/plugins/plugin-mall-components/components/AdminLayout/TabBar.tsx
  var import_react11 = __toESM(require_react());
  var import_antd9 = __toESM(require_antd());
  var TabBar = ({
    tabs,
    activeTabKey,
    onTabClick,
    onCloseTab,
    onCloseOther,
    onCloseAll,
    closableTabs = true
  }) => {
    const [hoveredKey, setHoveredKey] = (0, import_react11.useState)(null);
    const [contextMenuVisible, setContextMenuVisible] = (0, import_react11.useState)(false);
    const [contextMenuKey, setContextMenuKey] = (0, import_react11.useState)("");
    const [menuPosition, setMenuPosition] = (0, import_react11.useState)({ x: 0, y: 0 });
    const scrollContainerRef = (0, import_react11.useRef)(null);
    (0, import_react11.useEffect)(() => {
      if (scrollContainerRef.current && activeTabKey) {
        const activeElement = scrollContainerRef.current.querySelector(`[data-tab-key="${activeTabKey}"]`);
        if (activeElement) {
          activeElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
      }
    }, [activeTabKey]);
    (0, import_react11.useEffect)(() => {
      const handleClick = () => setContextMenuVisible(false);
      if (contextMenuVisible) {
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
      }
    }, [contextMenuVisible]);
    const handleContextMenu = (e, tabKey) => {
      e.preventDefault();
      e.stopPropagation();
      setContextMenuKey(tabKey);
      setMenuPosition({ x: e.clientX, y: e.clientY });
      setContextMenuVisible(true);
    };
    const handleMenuClick = (key) => {
      setContextMenuVisible(false);
      switch (key) {
        case "close":
          onCloseTab(contextMenuKey);
          break;
        case "closeOther":
          onCloseOther(contextMenuKey);
          break;
        case "closeAll":
          onCloseAll();
          break;
        case "refresh":
          window.location.reload();
          break;
      }
    };
    if (!tabs || tabs.length === 0) {
      return null;
    }
    const contextMenuItems = [
      {
        key: "refresh",
        icon: /* @__PURE__ */ import_react11.default.createElement(ReloadOutlined_default2, null),
        label: "刷新当前页"
      },
      {
        key: "close",
        icon: /* @__PURE__ */ import_react11.default.createElement(CloseOutlined_default2, null),
        label: "关闭当前",
        disabled: !closableTabs || tabs.find((t) => t.key === contextMenuKey)?.closable === false
      },
      {
        type: "divider"
      },
      {
        key: "closeOther",
        icon: /* @__PURE__ */ import_react11.default.createElement(CloseCircleOutlined_default2, null),
        label: "关闭其他",
        disabled: tabs.length <= 1
      },
      {
        key: "closeAll",
        icon: /* @__PURE__ */ import_react11.default.createElement(CloseCircleOutlined_default2, null),
        label: "关闭所有"
      }
    ];
    const menu = /* @__PURE__ */ import_react11.default.createElement(import_antd9.Menu, { items: contextMenuItems, onClick: ({ key }) => handleMenuClick(key) });
    return /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement("div", { className: "tab-bar-container" }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "tab-bar-scroll", ref: scrollContainerRef }, tabs.map((tab) => /* @__PURE__ */ import_react11.default.createElement(
      "div",
      {
        key: tab.key,
        "data-tab-key": tab.key,
        className: `tab-item ${activeTabKey === tab.key ? "active" : ""} ${hoveredKey === tab.key ? "hovered" : ""}`,
        onClick: () => onTabClick(tab.key),
        onMouseEnter: () => setHoveredKey(tab.key),
        onMouseLeave: () => setHoveredKey(null),
        onContextMenu: (e) => handleContextMenu(e, tab.key)
      },
      tab.icon && /* @__PURE__ */ import_react11.default.createElement("span", { className: "tab-icon" }, tab.icon),
      /* @__PURE__ */ import_react11.default.createElement("span", { className: "tab-label" }, tab.label),
      closableTabs && tab.closable && /* @__PURE__ */ import_react11.default.createElement(
        "span",
        {
          className: `tab-close-btn ${hoveredKey === tab.key || activeTabKey === tab.key ? "visible" : ""}`,
          onClick: (e) => {
            e.stopPropagation();
            onCloseTab(tab.key);
          }
        },
        /* @__PURE__ */ import_react11.default.createElement(CloseOutlined_default2, { style: { fontSize: 10 } })
      )
    ))), closableTabs && tabs.length > 1 && /* @__PURE__ */ import_react11.default.createElement("div", { className: "tab-actions" }, /* @__PURE__ */ import_react11.default.createElement(
      "button",
      {
        className: "close-all-btn",
        onClick: onCloseAll,
        title: "关闭全部标签"
      },
      /* @__PURE__ */ import_react11.default.createElement(CloseCircleOutlined_default2, null)
    ))), contextMenuVisible && /* @__PURE__ */ import_react11.default.createElement(
      "div",
      {
        style: {
          position: "fixed",
          left: menuPosition.x,
          top: menuPosition.y,
          zIndex: 1e3
        }
      },
      /* @__PURE__ */ import_react11.default.createElement(
        import_antd9.Dropdown,
        {
          overlay: menu,
          visible: contextMenuVisible,
          onVisibleChange: setContextMenuVisible,
          trigger: ["click"]
        },
        /* @__PURE__ */ import_react11.default.createElement("div", { style: { width: 0, height: 0 } })
      )
    ));
  };
  var TabBar_default = TabBar;

  // src/plugins/plugin-mall-components/components/AdminLayout/MainContent.tsx
  var MainContent = ({
    children,
    pageKey,
    tabs,
    activeTabKey,
    onTabClick,
    onCloseTab,
    onCloseOther,
    onCloseAll,
    enableTabs = true,
    closableTabs = true,
    className = ""
  }) => {
    return /* @__PURE__ */ import_react12.default.createElement("main", { className: `main-content ${className}` }, enableTabs && tabs.length > 0 && /* @__PURE__ */ import_react12.default.createElement(
      TabBar_default,
      {
        tabs,
        activeTabKey,
        onTabClick,
        onCloseTab,
        onCloseOther,
        onCloseAll,
        closableTabs
      }
    ), /* @__PURE__ */ import_react12.default.createElement("div", { className: "content-wrapper" }, /* @__PURE__ */ import_react12.default.createElement("div", { className: "page-container", key: pageKey }, children)));
  };
  var MainContent_default = MainContent;

  // src/plugins/plugin-mall-components/components/AdminLayout/AdminLayout.tsx
  var findMenuItem = (items, key) => {
    for (const item of items) {
      if (item.key === key) return item;
      if (item.children) {
        const found = findMenuItem(item.children, key);
        if (found) return found;
      }
    }
    return void 0;
  };
  var getLabelFromKey = (key) => {
    const parts = key.split("/");
    const labelMap2 = {
      dashboard: "工作台",
      permission: "权限管理",
      product: "商品管理",
      order: "订单管理",
      marketing: "营销管理",
      users: "用户管理",
      roles: "角色管理",
      resources: "资源管理",
      menus: "菜单管理",
      list: "列表",
      add: "添加",
      category: "分类",
      brand: "品牌",
      attribute: "属性",
      setting: "设置",
      return: "退货申请",
      reason: "退货原因",
      coupon: "优惠券管理",
      promotion: "促销活动",
      flash: "秒杀活动",
      new: "新品推荐",
      hot: "人气推荐",
      advertise: "广告管理",
      subject: "专题管理"
    };
    return labelMap2[parts[parts.length - 1]] || parts[parts.length - 1];
  };
  var AdminLayout = ({
    defaultSelectedKey = "dashboard",
    defaultOpenKeys,
    collapsible = true,
    enableTabs = true,
    maxTabs = 10,
    closableTabs = true,
    logoText = "Mall Admin",
    menuItems: customMenuItems,
    style,
    className,
    children,
    __designMode,
    componentId
  }) => {
    const items = customMenuItems || defaultMenuItems;
    const [collapsed, setCollapsed] = (0, import_react13.useState)(false);
    const [selectedKey, setSelectedKey] = (0, import_react13.useState)(defaultSelectedKey);
    const [openKeys, setOpenKeys] = (0, import_react13.useState)(defaultOpenKeys || []);
    const [tabs, setTabs] = (0, import_react13.useState)(() => {
      const initialItem = findMenuItem(items, defaultSelectedKey);
      return [{
        key: defaultSelectedKey,
        label: initialItem?.label || getLabelFromKey(defaultSelectedKey),
        icon: initialItem?.icon,
        closable: false,
        path: initialItem?.path || `/${defaultSelectedKey}`
      }];
    });
    const [activeTabKey, setActiveTabKey] = (0, import_react13.useState)(defaultSelectedKey);
    const activeTabKeyRef = (0, import_react13.useRef)(activeTabKey);
    activeTabKeyRef.current = activeTabKey;
    const initializedRef = (0, import_react13.useRef)(false);
    (0, import_react13.useEffect)(() => {
      if (__designMode !== "design" || !componentId || initializedRef.current) return;
      const timer = setTimeout(() => {
        try {
          const engine = window.AliLowCodeEngine;
          if (!engine?.project?.currentDocument) return;
          const documentModel = engine.project.currentDocument;
          const adminLayoutNode = documentModel.getNodeById(componentId);
          if (!adminLayoutNode) return;
          const childrenArr = Array.isArray(adminLayoutNode.children) ? adminLayoutNode.children : adminLayoutNode.children?.toArray ? adminLayoutNode.children.toArray() : [];
          const existingTabPanes = childrenArr.filter((child) => child.componentName === "TabPane");
          console.log("[AdminLayout] 🔍 Found existing TabPanes:", existingTabPanes.length);
          if (existingTabPanes.length > 0) {
            const restoredTabs = existingTabPanes.map((tp) => {
              const tabKey = tp.props?.tabKey || tp.getPropValue?.("tabKey") || "unknown";
              const tabLabel = tp.props?.tab || tp.getPropValue?.("tab") || getLabelFromKey(tabKey);
              const menuItem = findMenuItem(items, tabKey);
              return {
                key: tabKey,
                label: tabLabel,
                icon: menuItem?.icon,
                closable: tabKey !== "dashboard",
                path: menuItem?.path || `/${tabKey}`
              };
            });
            console.log("[AdminLayout] 📋 Restored tabs from schema:", restoredTabs.map((t) => t.key));
            setTabs(restoredTabs);
            const currentActiveTab = restoredTabs[restoredTabs.length - 1];
            if (currentActiveTab) {
              setActiveTabKey(currentActiveTab.key);
              setSelectedKey(currentActiveTab.key);
            }
          } else {
            const tabPaneNode = documentModel.createNode({
              componentName: "TabPane",
              props: {
                tab: "工作台",
                tabKey: "dashboard",
                activeTabKey: "dashboard"
              }
            });
            if (tabPaneNode) {
              documentModel.insertNode(adminLayoutNode, tabPaneNode);
              console.log("[AdminLayout] ✅ Created default TabPane for dashboard");
            }
          }
          initializedRef.current = true;
        } catch (e) {
          console.error("[AdminLayout] Init TabPane error:", e);
        }
      }, 100);
      return () => clearTimeout(timer);
    }, [componentId, __designMode, items]);
    (0, import_react13.useEffect)(() => {
      if (__designMode !== "design" || !componentId) return;
      try {
        const engine = window.AliLowCodeEngine;
        if (!engine?.project?.currentDocument) return;
        const documentModel = engine.project.currentDocument;
        const adminLayoutNode = documentModel.getNodeById(componentId);
        if (adminLayoutNode?.children) {
          const childrenArr = Array.isArray(adminLayoutNode.children) ? adminLayoutNode.children : adminLayoutNode.children.toArray ? adminLayoutNode.children.toArray() : [];
          childrenArr.forEach((child) => {
            if (child.componentName === "TabPane") {
              child.setPropValue("activeTabKey", activeTabKey);
            }
          });
        }
      } catch (e) {
      }
    }, [activeTabKey, componentId, __designMode]);
    const handleToggleCollapse = (0, import_react13.useCallback)(() => {
      if (collapsible) setCollapsed((prev) => !prev);
    }, [collapsible]);
    const createTabPane = (0, import_react13.useCallback)((tabKey, tabLabel) => {
      if (typeof window === "undefined") return false;
      try {
        const engine = window.AliLowCodeEngine;
        if (!engine?.project?.currentDocument) return false;
        const documentModel = engine.project.currentDocument;
        const adminLayoutNode = componentId ? documentModel.getNodeById(componentId) : null;
        if (!adminLayoutNode) return false;
        const allChildren = Array.isArray(adminLayoutNode.children) ? adminLayoutNode.children : adminLayoutNode.children?.toArray ? adminLayoutNode.children.toArray() : [];
        console.log(
          "[AdminLayout] 🔍 All children before create:",
          allChildren.map((c) => ({ id: c.id, name: c.componentName, tabKey: c.props?.tabKey }))
        );
        for (const child of allChildren) {
          const ck = child.props?.tabKey || child.getPropValue?.("tabKey");
          if (child.componentName === "TabPane" && ck === tabKey) {
            console.log("[AdminLayout] ⚠️ Found existing TabPane, removing first:", child.id);
            if (child.children) {
              const grandChildren = Array.isArray(child.children) ? [...child.children] : child.children.toArray ? [...child.children.toArray()] : [];
              console.log("[AdminLayout] 🗑️ Removing", grandChildren.length, "children from existing TabPane");
              for (const gc of grandChildren) {
                try {
                  documentModel.removeNode(gc);
                } catch (e) {
                }
              }
            }
            documentModel.removeNode(child);
            break;
          }
        }
        const tabPaneNode = documentModel.createNode({
          componentName: "TabPane",
          props: {
            tab: tabLabel,
            tabKey,
            activeTabKey: activeTabKeyRef.current
          }
        });
        if (!tabPaneNode) return false;
        documentModel.insertNode(adminLayoutNode, tabPaneNode);
        console.log("[AdminLayout] ✅ Created new TabPane:", tabKey, "nodeId:", tabPaneNode.id);
        return true;
      } catch (error) {
        console.error("[AdminLayout] createTabPane error:", error);
        return false;
      }
    }, [componentId]);
    const removeTabPane = (0, import_react13.useCallback)((tabKey) => {
      if (typeof window === "undefined") return false;
      let removed = false;
      try {
        const engine = window.AliLowCodeEngine;
        if (!engine?.project?.currentDocument) return false;
        const documentModel = engine.project.currentDocument;
        const adminLayoutNode = componentId ? documentModel.getNodeById(componentId) : null;
        console.log("[AdminLayout] 🗑️ removeTabPane called:", tabKey);
        console.log("[AdminLayout] componentId:", componentId);
        console.log("[AdminLayout] adminLayoutNode:", adminLayoutNode ? "found" : "NOT FOUND");
        console.log("[AdminLayout] adminLayoutNode.id:", adminLayoutNode?.id);
        console.log("[AdminLayout] adminLayoutNode.componentName:", adminLayoutNode?.componentName);
        if (!adminLayoutNode) return false;
        let childrenArr = [];
        if (adminLayoutNode.children) {
          if (Array.isArray(adminLayoutNode.children)) {
            childrenArr = adminLayoutNode.children;
          } else if (typeof adminLayoutNode.children.toArray === "function") {
            childrenArr = adminLayoutNode.children.toArray();
          } else if (typeof adminLayoutNode.children.map === "function") {
            childrenArr = adminLayoutNode.children.map((c) => c);
          }
        }
        if (childrenArr.length === 0 && adminLayoutNode.schema?.children) {
          console.log("[AdminLayout] Trying schema.children...");
          const schemaChildren = adminLayoutNode.schema.children;
          if (Array.isArray(schemaChildren)) {
            childrenArr = schemaChildren.map((childSchema) => {
              return documentModel.getNodeById(childSchema.id);
            }).filter(Boolean);
          }
        }
        if (childrenArr.length === 0) {
          console.log("[AdminLayout] Trying documentModel.getRoot()...");
          const root = documentModel.getRoot();
          console.log("[AdminLayout] Root node:", root?.componentName);
          const findNode = (node, targetId) => {
            if (!targetId) return null;
            if (node.id === targetId) return node;
            if (node.children) {
              const arr = Array.isArray(node.children) ? node.children : node.children.toArray ? node.children.toArray() : [];
              for (const child of arr) {
                const found = findNode(child, targetId);
                if (found) return found;
              }
            }
            return null;
          };
          const foundNode = findNode(root, componentId);
          if (foundNode && foundNode.children) {
            childrenArr = Array.isArray(foundNode.children) ? foundNode.children : foundNode.children.toArray ? foundNode.children.toArray() : [];
          }
        }
        console.log("[AdminLayout] Final children count:", childrenArr.length);
        console.log(
          "[AdminLayout] Children details:",
          childrenArr.map((c) => ({
            id: c?.id,
            name: c?.componentName,
            tabKey: c?.props?.tabKey || c?.getPropValue?.("tabKey"),
            childrenCount: c?.children ? Array.isArray(c.children) ? c.children.length : c.children.toArray ? c.children.toArray().length : 0 : 0
          }))
        );
        childrenArr.forEach((c, idx) => {
          console.log(`[AdminLayout] Child[${idx}] ${c?.componentName}:`, {
            id: c?.id,
            tabKey: c?.props?.tabKey || c?.getPropValue?.("tabKey"),
            hasChildren: !!c?.children,
            childrenType: c?.children ? Array.isArray(c.children) ? "array" : typeof c.children.toArray === "function" ? "array-like" : typeof c.children : "none"
          });
          if (c?.componentName === "TabPane" && c?.children) {
            const tpChildren = Array.isArray(c.children) ? c.children : c.children.toArray ? c.children.toArray() : [];
            console.log(
              `[AdminLayout]   TabPane children:`,
              tpChildren.map((gc) => ({ id: gc?.id, name: gc?.componentName }))
            );
            if (tpChildren.length === 0) {
              console.log(`[AdminLayout]   Trying alternative methods...`);
              if (c.schema?.children) {
                console.log(`[AdminLayout]   schema.children:`, c.schema.children);
              }
              if (typeof c.getChildren === "function") {
                const gChildren = c.getChildren();
                console.log(`[AdminLayout]   getChildren():`, gChildren);
              }
              if (c.slots) {
                console.log(`[AdminLayout]   slots:`, c.slots);
              }
            }
          }
          if (c?.componentName !== "TabPane") {
            console.log(`[AdminLayout] ⚠️ Found non-TabPane child! This might be a dragged component.`);
          }
        });
        for (const child of childrenArr) {
          if (!child) continue;
          const childTabKey = child.props?.tabKey || child.getPropValue?.("tabKey");
          if (child.componentName === "TabPane" && childTabKey === tabKey) {
            console.log("[AdminLayout] ✅ Found TabPane to remove:", child.id);
            const schemaChildren = child.schema?.children;
            if (schemaChildren && Array.isArray(schemaChildren) && schemaChildren.length > 0) {
              console.log("[AdminLayout] Removing", schemaChildren.length, "grandchildren from schema.children");
              for (let i = schemaChildren.length - 1; i >= 0; i--) {
                const childSchema = schemaChildren[i];
                const grandChildNode = documentModel.getNodeById(childSchema.id);
                if (grandChildNode) {
                  try {
                    documentModel.removeNode(grandChildNode);
                    console.log("[AdminLayout]   ✓ Removed grandchild:", grandChildNode.id, grandChildNode.componentName);
                  } catch (e) {
                    console.warn("[AdminLayout]   ✗ Failed to remove grandchild:", e);
                  }
                }
              }
            } else {
              console.log("[AdminLayout] No grandchildren to remove");
            }
            try {
              documentModel.removeNode(child);
              removed = true;
              console.log("[AdminLayout] ✅ Removed TabPane node:", tabKey);
            } catch (e) {
              console.error("[AdminLayout] Failed to remove TabPane:", e);
            }
            break;
          }
        }
        if (!removed) {
          console.warn("[AdminLayout] ⚠️ TabPane not found for key:", tabKey);
        }
        return removed;
      } catch (error) {
        console.error("[AdminLayout] removeTabPane error:", error);
        return false;
      }
    }, [componentId]);
    const handleMenuClick = (0, import_react13.useCallback)((key) => {
      setSelectedKey(key);
      const existingTab = tabs.find((tab) => tab.key === key);
      if (!existingTab) {
        const menuItem = findMenuItem(items, key);
        const newTab = {
          key,
          label: menuItem?.label || getLabelFromKey(key),
          icon: menuItem?.icon,
          closable: key !== "dashboard",
          path: menuItem?.path || `/${key}`
        };
        setTabs((prev) => {
          if (prev.length >= maxTabs) {
            const filtered = prev.filter((t) => t.closable);
            if (filtered.length > 0) {
              return [...prev.filter((t) => t.key !== filtered[0].key), newTab];
            }
          }
          return [...prev, newTab];
        });
        if (__designMode === "design") {
          setTimeout(() => createTabPane(key, menuItem?.label || getLabelFromKey(key)), 0);
        }
      }
      setActiveTabKey(key);
    }, [tabs, items, maxTabs, __designMode, createTabPane]);
    const handleOpenChange = (0, import_react13.useCallback)((keys) => setOpenKeys(keys), []);
    const handleNavigate = (0, import_react13.useCallback)((key) => {
      setSelectedKey(key);
      setActiveTabKey(key);
    }, []);
    const handleTabClick = (0, import_react13.useCallback)((key) => {
      setSelectedKey(key);
      setActiveTabKey(key);
    }, []);
    const handleCloseTab = (0, import_react13.useCallback)((key) => {
      if (key === "dashboard") return;
      removeTabPane(key);
      setTabs((prev) => prev.filter((tab) => tab.key !== key));
      if (key === activeTabKey) {
        const remainingTabs = tabs.filter((tab) => tab.key !== key);
        if (remainingTabs.length > 0) {
          const currentIndex = tabs.findIndex((tab) => tab.key === key);
          const nextTab = remainingTabs[currentIndex] || remainingTabs[remainingTabs.length - 1];
          setSelectedKey(nextTab.key);
          setActiveTabKey(nextTab.key);
        }
      }
    }, [tabs, activeTabKey, removeTabPane]);
    const handleCloseOther = (0, import_react13.useCallback)((keepKey) => {
      tabs.forEach((tab) => {
        if (tab.key !== keepKey && tab.key !== "dashboard") {
          removeTabPane(tab.key);
        }
      });
      setTabs((prev) => prev.filter((tab) => tab.key === keepKey || tab.key === "dashboard"));
      setSelectedKey(keepKey);
      setActiveTabKey(keepKey);
    }, [tabs, removeTabPane]);
    const handleCloseAll = (0, import_react13.useCallback)(() => {
      tabs.forEach((tab) => {
        if (tab.key !== "dashboard") {
          removeTabPane(tab.key);
        }
      });
      const dashboardTab = tabs.find((tab) => tab.key === "dashboard");
      if (dashboardTab) {
        setTabs([dashboardTab]);
        setSelectedKey("dashboard");
        setActiveTabKey("dashboard");
      }
    }, [tabs, removeTabPane]);
    const breadcrumbItems = (0, import_react13.useMemo)(() => {
      if (selectedKey === "dashboard") return [];
      const parts = selectedKey.split("/");
      if (parts.length === 1) return [{ key: selectedKey, label: "", path: selectedKey }];
      return [{ key: selectedKey, label: "", path: selectedKey }];
    }, [selectedKey]);
    const filteredChildren = (0, import_react13.useMemo)(() => {
      if (!children) return null;
      if (__designMode === "design") {
        const childArray = import_react13.Children.toArray(children);
        const activeTabPane = childArray.find((child) => {
          if ((0, import_react13.isValidElement)(child)) {
            const childProps = child.props;
            return childProps?.tabKey === activeTabKey;
          }
          return false;
        });
        return activeTabPane || null;
      }
      return children;
    }, [children, activeTabKey, __designMode]);
    const defaultContent = /* @__PURE__ */ import_react13.default.createElement("div", { style: { padding: 24, color: "#999" } }, "点击侧边栏菜单创建选项卡，然后拖拽组件到对应面板");
    const content = filteredChildren || defaultContent;
    return /* @__PURE__ */ import_react13.default.createElement("div", { className: `admin-layout ${collapsed ? "is-collapse" : ""} ${className || ""}`, style, "data-active-tab": activeTabKey }, /* @__PURE__ */ import_react13.default.createElement(
      Sidebar_default,
      {
        collapsed,
        selectedKey,
        openKeys,
        onMenuClick: handleMenuClick,
        onOpenChange: handleOpenChange,
        menuItems: items
      }
    ), /* @__PURE__ */ import_react13.default.createElement("div", { className: "layout-right" }, /* @__PURE__ */ import_react13.default.createElement(
      Navbar_default,
      {
        collapsed,
        onToggleCollapse: handleToggleCollapse,
        breadcrumbItems,
        onNavigate: handleNavigate
      }
    ), /* @__PURE__ */ import_react13.default.createElement(
      MainContent_default,
      {
        pageKey: selectedKey,
        tabs,
        activeTabKey,
        onTabClick: handleTabClick,
        onCloseTab: handleCloseTab,
        onCloseOther: handleCloseOther,
        onCloseAll: handleCloseAll,
        enableTabs,
        closableTabs,
        className: collapsed ? "collapsed" : ""
      },
      content
    )), collapsible && /* @__PURE__ */ import_react13.default.createElement(
      "div",
      {
        className: `mobile-overlay ${!collapsed ? "visible" : ""}`,
        onClick: handleToggleCollapse
      }
    ));
  };
  var AdminLayout_default = AdminLayout;

  // src/plugins/plugin-mall-components/components/AdminLayout/TabPane.tsx
  var import_react14 = __toESM(require_react());
  var TabPane = ({
    tab,
    tabKey,
    activeTabKey,
    children,
    className,
    style
  }) => {
    const isActive = activeTabKey === tabKey;
    return /* @__PURE__ */ import_react14.default.createElement(
      "div",
      {
        className: `tab-pane ${isActive ? "tab-pane--active" : ""} ${className || ""}`,
        style: {
          ...style,
          display: isActive ? void 0 : "none"
        },
        "data-tab-key": tabKey,
        "data-active": isActive ? "true" : "false"
      },
      children
    );
  };
  var TabPane_default = TabPane;

  // src/plugins/plugin-mall-components/entry-components.ts
  var MallComponents = {
    ProductList: ProductList_default,
    ProductForm: ProductForm_default,
    OrderList: OrderList_default,
    MarketingManager: MarketingManager_default,
    RestApiTester: RestApiTester_default,
    AdminLayout: AdminLayout_default,
    TabPane: TabPane_default
  };
  var entry_components_default = MallComponents;
  return __toCommonJS(entry_components_exports);
})();
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/

MallComponents = MallComponents.default || MallComponents;

if (typeof window !== 'undefined') {
  window.MallComponents = MallComponents;
  console.log('[MallComponents] Registered:', Object.keys(MallComponents));
}

