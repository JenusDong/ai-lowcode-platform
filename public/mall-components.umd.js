
// MallComponents - Uses Global React via shims (same instance as LowCode Engine)
// Prevents "Invalid hook call" error from multiple React copies

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
      var React13 = typeof window !== "undefined" && window.React || {};
      module.exports = React13;
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

  // src/shims/icons.js
  var require_icons = __commonJS({
    "src/shims/icons.js"(exports, module) {
      "use strict";
      var React13 = typeof window !== "undefined" && window.React || {};
      var globalIcons = typeof window !== "undefined" && window.icons || null;
      if (globalIcons) {
        module.exports = globalIcons;
      } else {
        createIcon = function(name) {
          var iconMap = {
            DashboardOutlined: "M924 283.6c-18.8-18.9-49.2-18.9-68 0L512 627.6 168 283.6c-18.8-18.9-49.2-18.9-67.9 0s-18.8 49.3 0 68.1l360 360.4c18.8 18.9 49.2 18.9 68 0l359.9-360.4c18.8-18.9 18.8-49.3 0-68.1z",
            ShoppingOutlined: "M826 320H698l-36.8-92a78 78 0 0 0-72.1-48H434.9a78 78 0 0 0-72.1 48L326 320H198c-37.5 0-68 30.5-68 68v444c0 37.5 30.5 68 68 68h628c37.5 0 68-30.5 68-68V388c0-37.5-30.5-68-68-68zM512 760c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm212-340H300v-32c0-17.6 14.4-32 32-32h360c17.6 0 32 14.4 32 32v32z",
            FileTextOutlined: "M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.6 3.4 22.6 9.4l215.3 215.3zM790.2 326L602 137.8V326h188.2zM512 572c-55.2 0-100 44.8-100 100s44.8 100 100 100 100-44.8 100-100-44.8-100-100-100zm0 156c-30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z",
            TeamOutlined: "M323 667c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zm327 0c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zm295 0c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96zM128 384c0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64-64 28.7-64 64zm256 0c0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64-64 28.7-64 64zm256 0c0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64-64 28.7-64 64z",
            SettingOutlined: "M924 480H544V200c0-17.7-14.3-32-32-32H320c-17.7 0-32 14.3-32 32v280H108c-17.7 0-32 14.3-32 32v312c0 17.7 14.3 32 32 32h180v136c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V856h180c17.7 0 32-14.3 32-32V512c0-17.7-14.3-32-32-32zm-396-232v200H344V248h184zm-360 304h152v248H168V552zm520 408H504V720h184v240zm168-160H740V552h152v248z",
            SafetyCertificateOutlined: "M866.9 169.9L527.1 54.5C523 52.7 517.5 52 512 52s-11 .7-15.1 2.5L157.1 169.9c-8.3 3-15.1 12.9-15.1 21.9v487.8c0 8.7 5.5 19.5 12.2 24.1l339.9 228.9c3.6 2.4 8.3 3.8 13 3.8s9.4-1.4 13-3.8l339.9-228.9c6.7-4.5 12.2-15.3 12.2-24.1V191.8c0-9-6.8-18.9-15.1-21.9zM810 654.3L512 886.5 214 654.3V226.7l298-109.8 298 109.8v427.6zM402.5 331.4L320 413.9l82.5 82.5-45 45L275 458.9l127.5-127.5 45 45zm219 0l45 45L794 458.9 650.9 541.4l-45-45L677.5 413.9 595 331.4z",
            UserOutlined: "M862 460.6c-18.8-18.9-49.2-18.9-68 0L512 742.6 230 460.6c-18.8-18.9-49.2-18.9-68 0s-18.8 49.3 0 68.1l306 306.4c18.8 18.9 49.2 18.9 68 0l306-306.4c18.8-18.9 18.8-49.3 0-68.1zM512 128c70.7 0 128 57.3 128 128S582.7 384 512 384 384 326.7 384 256 441.3 128 512 128m0-64C400.6 64 304 160.6 304 272s96.6 208 208 208 208-96.6 208-208S623.4 64 512 64z",
            MenuFoldOutlined: "M488 424.4V207.6c0-17.7-14.3-32-32-32s-32 14.3-32 32v216.8c0 17.7 14.3 32 32 32s32-14.4 32-32.1zm144-216.8v216.8c0 17.7 14.3 32 32 32s32-14.3 32-32V207.6c0-17.7-14.3-32-32-32s-32 14.3-32 32zM176 80h672c17.7 0 32-14.3 32-32s-14.3-32-32-32H176c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0 800h672c17.7 0 32-14.3 32-32s-14.3-32-32-32H176c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-536h672c17.7 0 32-14.3 32-32s-14.3-32-32-32H176c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0 272h672c17.7 0 32-14.3 32-32s-14.3-32-32-32H176c-17.7 0-32 14.3-32 32s14.3 32 32 32z",
            MenuUnfoldOutlined: "M424 207.6v216.8c0 17.7 14.3 32 32 32s32-14.3 32-32V207.6c0-17.7-14.3-32-32-32s-32 14.3-32 32.1zm-144 0v216.8c0 17.7 14.3 32 32 32s32-14.3 32-32V207.6c0-17.7-14.3-32-32-32s-32 14.3-32 32.1zM848 16H176c-17.7 0-32 14.3-32 32s14.3 32 32 32h672c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 800H176c-17.7 0-32 14.3-32 32s14.3 32 32 32h672c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0-536H176c-17.7 0-32 14.3-32 32s14.3 32 32 32h672c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 272H176c-17.7 0-32 14.3-32 32s14.3 32 32 32h672c17.7 0 32-14.3 32-32s-14.3-32-32-32z",
            LogoutOutlined: "M862 464H594a30 30 0 0 0-30 30v84a30 30 0 0 0 30 30h268a30 30 0 0 0 30-30v-84a30 30 0 0 0-30-30zM758.8 550L618.4 409.6c-11.7-11.7-30.7-11.7-42.4 0-11.7 11.7-11.7 30.7 0 42.4l140.4 140.4c11.7 11.7 30.7 11.7 42.4 0 11.7-11.7 11.7-30.7 0-42.4zM162 464h268a30 30 0 0 1 30 30v84a30 30 0 0 1-30 30H162a30 30 0 0 1-30-30v-84a30 30 0 0 1 30-30zM265.2 550l140.4-140.4c11.7-11.7 11.7-30.7 0-42.4-11.7-11.7-30.7-11.7-42.4 0L222.8 507.6c-11.7 11.7-11.7 30.7 0 42.4 11.7 11.7 30.7 11.7 42.4 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
            CloseOutlined: "M563.8 512l262.5-262.5c12.3-12.3 12.3-32.2 0-44.5s-32.2-12.3-44.5 0L519.3 467.5 256.9 205.1c-12.3-12.3-32.2-12.3-44.5 0s-12.3 32.2 0 44.5L474.8 512 212.4 774.5c-12.3 12.3-12.3 32.2 0 44.5s32.2 12.3 44.5 0l262.5-262.5 262.5 262.5c12.3 12.3 32.2 12.3 44.5 0s12.3-32.2 0-44.5L563.8 512z",
            CloseCircleOutlined: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 522l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z",
            ReloadOutlined: "M909.6 854.5L649.9 594.8C690.2 542.7 714.7 477.2 714.7 406c0-165.7-134.4-300.1-300.1-300.1S114.6 240.3 114.6 406s134.4 300.1 300.1 300.1c71.2 0 136.7-24.6 188.8-64.9l259.7 259.7c3.2 3.2 8.4 3.2 11.6 0l34.8-34.8c3.2-3.2 3.2-8.4 0-11.6zM414.6 632.8c-125.1 0-226.8-101.7-226.8-226.8s101.7-226.8 226.8-226.8 226.8 101.7 226.8 226.8-101.7 226.8-226.8 226.8z",
            GiftOutlined: "M160 892c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V380H160v512zm192-308c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V584zm192 0c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V584zm192 0c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V584zM892 120H768c0-52.9-43.1-96-96-96H352c-52.9 0-96 43.1-96 96H132c-17.7 0-32 14.3-32 32v104h824V152c0-17.7-14.3-32-32-32zM512 64c26.5 0 48 21.5 48 48H464c0-26.5 21.5-48 48-48z",
            TagsOutlined: "M483.1 537.4l113-113c4.5-4.5 4.5-11.8 0-16.3l-113-113c-4.5-4.5-11.8-4.5-16.3 0l-113 113c-4.5 4.5-4.5 11.8 0 16.3l113 113c4.5 4.5 11.8 4.5 16.3 0zM903.1 537.4l113-113c4.5-4.5 4.5-11.8 0-16.3l-113-113c-4.5-4.5-11.8-4.5-16.3 0l-113 113c-4.5 4.5-4.5 11.8 0 16.3l113 113c4.5 4.5 11.8 4.5 16.3 0zM63.1 537.4l113-113c4.5-4.5 4.5-11.8 0-16.3l-113-113c-4.5-4.5-11.8-4.5-16.3 0l-113 113c-4.5 4.5-4.5 11.8 0 16.3l113 113c4.5 4.5 11.8 4.5 16.3 0zM693.1 217.4l113-113c4.5-4.5 4.5-11.8 0-16.3l-113-113c-4.5-4.5-11.8-4.5-16.3 0l-113 113c-4.5 4.5-4.5 11.8 0 16.3l113 113c4.5 4.5 11.8 4.5 16.3 0zM330.9 217.4l-113-113c-4.5-4.5-11.8-4.5-16.3 0l-113 113c-4.5 4.5-4.5 11.8 0 16.3l113 113c4.5 4.5 11.8 4.5 16.3 0l113-113c4.5-4.5 4.5-11.8 0-16.3z",
            InboxOutlined: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L518.6 598.2c-3.7 3.7-10.3 3.7-14 0L176.9 268.9A8.01 8.01 0 0 1 182.5 256h659a8.01 8.01 0 0 1 5.7 12.9z",
            DollarOutlined: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm.4-592c-48.3 0-87.4 39.1-87.4 87.4 0 48.3 39.1 87.4 87.4 87.4 48.3 0 87.4-39.1 87.4-87.4 0-48.3-39.1-87.4-87.4-87.4zm0 140c-29 0-52.6-23.6-52.6-52.6s23.6-52.6 52.6-52.6 52.6 23.6 52.6 52.6-23.6 52.6-52.6 52.6z",
            ThunderboltOutlined: "M848 359.3H627.7L698 163.6c5.8-14.3-.3-30.7-14.6-36.6-14.3-5.8-30.7.3-36.6 14.6L505.2 361.3c-3.5 8.7-.7 18.7 6.9 24.3l141.3 105.8c4.8 3.6 10.6 5.5 16.5 5.5 7.5 0 14.8-3.3 19.7-9.5 9.1-11.5 7.2-28.2-4.3-37.4L576.8 416H800c13.3 0 24-10.7 24-24s-10.7-24-24-24H648zM344 648h220.3L494 843.7c-5.8 14.3.3 30.7 14.6 36.6 14.3 5.8 30.7-.3 36.6-14.6l141.8-319.7c3.5-8.7.7-18.7-6.9-24.3L539 415.9c-4.8-3.6-10.6-5.5-16.5-5.5-7.5 0-14.8 3.3-19.7 9.5-9.1 11.5-7.2 28.2 4.3 37.4L447.2 592H224c-13.3 0-24 10.7-24 24s10.7 24 24 24h152z",
            FireOutlined: "M834.1 463.6c-19.6-39.4-48.7-73.2-84.2-97.6-35.5-24.4-76.6-39.2-119.4-43-10.2-.9-19.5 5.9-20.4 16.1-.9 10.2 5.9 19.5 16.1 20.4 36.2 3.2 70.9 15.8 100.8 36.4 29.9 20.6 54.4 49.4 71 83.1 16.6 33.7 24.4 71.2 22.6 109.2-1.8 38-13.4 74.4-33.6 106-20.2 31.6-48.2 57.4-81.2 75.4-33 18-70 26.6-107.6 24.8-37.6-1.8-73.6-14-104.8-34.6-31.2-20.6-56.4-49.2-73.2-83-16.8-33.8-24.8-71.6-23-110 1.8-38.4 13.6-75.2 34-107 20.4-31.8 48.8-57.8 82.2-76 33.4-18.2 70.8-27 108.8-25.2 10.2.5 18.9-7.4 19.4-17.6.5-10.2-7.4-18.9-17.6-19.4-43.8-2.1-86.6 8.2-124.4 29-37.8 20.8-69.8 51-92.4 87.8-22.6 36.8-35.6 79-37.6 122.8-2 43.8 8 86.2 29.2 124 21.2 37.8 51.6 69.4 88.6 91.8 37 22.4 79.4 34.2 123.2 36.2 3.2.2 6.4.2 9.6.2 41.4 0 81.8-10.2 117.6-29.8 35.8-19.6 66-48.2 87.8-83 21.8-34.8 34.4-74.8 36.4-116.2 2-41.4-7.2-81.8-27.2-117.8z"
          };
          var pathD = iconMap[name];
          return function(props) {
            var className = (props && props.className || "") + " anticon";
            var style = props && props.style ? props.style : {};
            style.fontSize = style.fontSize || "14px";
            if (pathD) {
              return React13.createElement("svg", {
                className,
                viewBox: "0 0 1024 1024",
                width: "1em",
                height: "1em",
                fill: "currentColor",
                style
              }, React13.createElement("path", { d: pathD }));
            }
            return React13.createElement("i", { className, style });
          };
        };
        icons = {
          PieChartOutlined: createIcon("PieChartOutlined"),
          LineChartOutlined: createIcon("LineChartOutlined"),
          BarChartOutlined: createIcon("BarChartOutlined"),
          DotChartOutlined: createIcon("DotChartOutlined"),
          AreaChartOutlined: createIcon("AreaChartOutlined"),
          DashboardFilled: createIcon("DashboardFilled"),
          FunnelPlotOutlined: createIcon("FunnelPlotOutlined"),
          PlusOutlined: createIcon("PlusOutlined"),
          MinusOutlined: createIcon("MinusOutlined"),
          EditOutlined: createIcon("EditOutlined"),
          DeleteOutlined: createIcon("DeleteOutlined"),
          SearchOutlined: createIcon("SearchOutlined"),
          SettingOutlined: createIcon("SettingOutlined"),
          ReloadOutlined: createIcon("ReloadOutlined"),
          CloseOutlined: createIcon("CloseOutlined"),
          CloseCircleOutlined: createIcon("CloseCircleOutlined"),
          MenuFoldOutlined: createIcon("MenuFoldOutlined"),
          MenuUnfoldOutlined: createIcon("MenuUnfoldOutlined"),
          HomeOutlined: createIcon("HomeOutlined"),
          UserOutlined: createIcon("UserOutlined"),
          TeamOutlined: createIcon("TeamOutlined"),
          SafetyCertificateOutlined: createIcon("SafetyCertificateOutlined"),
          LogoutOutlined: createIcon("LogoutOutlined"),
          ShoppingCartOutlined: createIcon("ShoppingCartOutlined"),
          ShoppingOutlined: createIcon("ShoppingOutlined"),
          ShopOutlined: createIcon("ShopOutlined"),
          GiftOutlined: createIcon("GiftOutlined"),
          TagsOutlined: createIcon("TagsOutlined"),
          InboxOutlined: createIcon("InboxOutlined"),
          DollarOutlined: createIcon("DollarOutlined"),
          FileTextOutlined: createIcon("FileTextOutlined"),
          ThunderboltOutlined: createIcon("ThunderboltOutlined"),
          FireOutlined: createIcon("FireOutlined"),
          DashboardOutlined: createIcon("DashboardOutlined")
        };
        if (typeof window !== "undefined") {
          window.icons = icons;
        }
        module.exports = icons;
      }
      var createIcon;
      var icons;
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
  var import_react11 = __toESM(require_react());

  // src/plugins/plugin-mall-components/components/AdminLayout/Sidebar.tsx
  var import_react6 = __toESM(require_react());
  var import_antd6 = __toESM(require_antd());
  var import_icons = __toESM(require_icons());
  var { SubMenu } = import_antd6.Menu;
  var defaultMenuItems = [
    {
      key: "dashboard",
      label: "工作台",
      icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.DashboardOutlined, null),
      path: "/dashboard"
    },
    {
      key: "permission",
      label: "权限管理",
      icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.SafetyCertificateOutlined, null),
      children: [
        {
          key: "permission/users",
          label: "用户管理",
          icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.UserOutlined, null),
          path: "/permission/users"
        },
        {
          key: "permission/roles",
          label: "角色管理",
          icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.TeamOutlined, null),
          path: "/permission/roles"
        },
        {
          key: "permission/resources",
          label: "资源管理",
          icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.SettingOutlined, null),
          path: "/permission/resources"
        },
        {
          key: "permission/menus",
          label: "菜单管理",
          icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.FileTextOutlined, null),
          path: "/permission/menus"
        }
      ]
    },
    {
      key: "product",
      label: "商品管理",
      icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.ShoppingOutlined, null),
      children: [
        {
          key: "product/list",
          label: "商品列表",
          icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.InboxOutlined, null),
          path: "/product/list"
        },
        {
          key: "product/add",
          label: "添加商品",
          icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.ShoppingOutlined, null),
          path: "/product/add"
        },
        {
          key: "product/category",
          label: "商品分类",
          icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.TagsOutlined, null),
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
      icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.FileTextOutlined, null),
      children: [
        {
          key: "order/list",
          label: "订单列表",
          icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.FileTextOutlined, null),
          path: "/order/list"
        },
        {
          key: "order/setting",
          label: "订单设置",
          icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.SettingOutlined, null),
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
      icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.GiftOutlined, null),
      children: [
        {
          key: "marketing/coupon",
          label: "优惠券管理",
          icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.GiftOutlined, null),
          path: "/marketing/coupon"
        },
        {
          key: "marketing/promotion",
          label: "促销活动",
          icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.DollarOutlined, null),
          path: "/marketing/promotion"
        },
        {
          key: "marketing/flash",
          label: "秒杀活动",
          icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.ThunderboltOutlined, null),
          path: "/marketing/flash"
        },
        {
          key: "marketing/new",
          label: "新品推荐",
          icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.FireOutlined, null),
          path: "/marketing/new"
        },
        {
          key: "marketing/hot",
          label: "人气推荐",
          icon: /* @__PURE__ */ import_react6.default.createElement(import_icons.FireOutlined, null),
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
    const [internalOpenKeys, setInternalOpenKeys] = (0, import_react6.useState)(
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
    return /* @__PURE__ */ import_react6.default.createElement("div", { className: `sidebar-container ${collapsed ? "collapsed" : ""}` }, /* @__PURE__ */ import_react6.default.createElement("div", { className: "sidebar-logo" }, !collapsed && /* @__PURE__ */ import_react6.default.createElement("span", { className: "logo-text" }, "Mall Admin"), collapsed && /* @__PURE__ */ import_react6.default.createElement("span", { className: "logo-icon" }, "M")), /* @__PURE__ */ import_react6.default.createElement(
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
  var import_react8 = __toESM(require_react());
  var import_antd8 = __toESM(require_antd());
  var import_icons2 = __toESM(require_icons());

  // src/plugins/plugin-mall-components/components/AdminLayout/Breadcrumb.tsx
  var import_react7 = __toESM(require_react());
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
    return /* @__PURE__ */ import_react7.default.createElement(import_antd7.Breadcrumb, null, items.map((item) => /* @__PURE__ */ import_react7.default.createElement(import_antd7.Breadcrumb.Item, { key: item.key }, /* @__PURE__ */ import_react7.default.createElement("a", { onClick: () => onNavigate(item.key) }, item.label || getLabel(item.key)))));
  };
  var Breadcrumb_default = BreadcrumbNav;

  // src/plugins/plugin-mall-components/components/AdminLayout/Navbar.tsx
  var Navbar = ({ collapsed, onToggleCollapse, breadcrumbItems, onNavigate }) => {
    const userMenuItems = [
      {
        key: "profile",
        icon: /* @__PURE__ */ import_react8.default.createElement(import_icons2.UserOutlined, null),
        label: "个人中心"
      },
      {
        key: "settings",
        icon: /* @__PURE__ */ import_react8.default.createElement(import_icons2.SettingOutlined, null),
        label: "系统设置"
      },
      {
        type: "divider"
      },
      {
        key: "logout",
        icon: /* @__PURE__ */ import_react8.default.createElement(import_icons2.LogoutOutlined, null),
        label: "退出登录",
        danger: true
      }
    ];
    const handleUserMenuClick = ({ key }) => {
      if (key === "logout") {
        console.log("User logged out");
      }
    };
    const menu = /* @__PURE__ */ import_react8.default.createElement(import_antd8.Menu, { items: userMenuItems, onClick: handleUserMenuClick });
    return /* @__PURE__ */ import_react8.default.createElement("div", { className: "navbar-container" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "navbar-left" }, /* @__PURE__ */ import_react8.default.createElement("button", { className: "hamburger-btn", onClick: onToggleCollapse }, collapsed ? /* @__PURE__ */ import_react8.default.createElement(import_icons2.MenuUnfoldOutlined, null) : /* @__PURE__ */ import_react8.default.createElement(import_icons2.MenuFoldOutlined, null)), /* @__PURE__ */ import_react8.default.createElement(Breadcrumb_default, { items: breadcrumbItems, onNavigate })), /* @__PURE__ */ import_react8.default.createElement("div", { className: "navbar-right" }, /* @__PURE__ */ import_react8.default.createElement(import_antd8.Dropdown, { overlay: menu, placement: "bottomRight" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "user-info" }, /* @__PURE__ */ import_react8.default.createElement(import_antd8.Avatar, { size: 32, icon: /* @__PURE__ */ import_react8.default.createElement(import_icons2.UserOutlined, null), className: "user-avatar" }), /* @__PURE__ */ import_react8.default.createElement(import_antd8.Space, { size: 4, className: "username" }, /* @__PURE__ */ import_react8.default.createElement("span", null, "管理员"))))));
  };
  var Navbar_default = Navbar;

  // src/plugins/plugin-mall-components/components/AdminLayout/MainContent.tsx
  var import_react10 = __toESM(require_react());

  // src/plugins/plugin-mall-components/components/AdminLayout/TabBar.tsx
  var import_react9 = __toESM(require_react());
  var import_antd9 = __toESM(require_antd());
  var import_icons3 = __toESM(require_icons());
  var TabBar = ({
    tabs,
    activeTabKey,
    onTabClick,
    onCloseTab,
    onCloseOther,
    onCloseAll,
    closableTabs = true
  }) => {
    const [hoveredKey, setHoveredKey] = (0, import_react9.useState)(null);
    const [contextMenuVisible, setContextMenuVisible] = (0, import_react9.useState)(false);
    const [contextMenuKey, setContextMenuKey] = (0, import_react9.useState)("");
    const [menuPosition, setMenuPosition] = (0, import_react9.useState)({ x: 0, y: 0 });
    const scrollContainerRef = (0, import_react9.useRef)(null);
    (0, import_react9.useEffect)(() => {
      if (scrollContainerRef.current && activeTabKey) {
        const activeElement = scrollContainerRef.current.querySelector(`[data-tab-key="${activeTabKey}"]`);
        if (activeElement) {
          activeElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
      }
    }, [activeTabKey]);
    (0, import_react9.useEffect)(() => {
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
        icon: /* @__PURE__ */ import_react9.default.createElement(import_icons3.ReloadOutlined, null),
        label: "刷新当前页"
      },
      {
        key: "close",
        icon: /* @__PURE__ */ import_react9.default.createElement(import_icons3.CloseOutlined, null),
        label: "关闭当前",
        disabled: !closableTabs || tabs.find((t) => t.key === contextMenuKey)?.closable === false
      },
      {
        type: "divider"
      },
      {
        key: "closeOther",
        icon: /* @__PURE__ */ import_react9.default.createElement(import_icons3.CloseCircleOutlined, null),
        label: "关闭其他",
        disabled: tabs.length <= 1
      },
      {
        key: "closeAll",
        icon: /* @__PURE__ */ import_react9.default.createElement(import_icons3.CloseCircleOutlined, null),
        label: "关闭所有"
      }
    ];
    const menu = /* @__PURE__ */ import_react9.default.createElement(import_antd9.Menu, { items: contextMenuItems, onClick: ({ key }) => handleMenuClick(key) });
    return /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement("div", { className: "tab-bar-container" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "tab-bar-scroll", ref: scrollContainerRef }, tabs.map((tab) => /* @__PURE__ */ import_react9.default.createElement(
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
      tab.icon && /* @__PURE__ */ import_react9.default.createElement("span", { className: "tab-icon" }, tab.icon),
      /* @__PURE__ */ import_react9.default.createElement("span", { className: "tab-label" }, tab.label),
      closableTabs && tab.closable && /* @__PURE__ */ import_react9.default.createElement(
        "span",
        {
          className: `tab-close-btn ${hoveredKey === tab.key || activeTabKey === tab.key ? "visible" : ""}`,
          onClick: (e) => {
            e.stopPropagation();
            onCloseTab(tab.key);
          }
        },
        /* @__PURE__ */ import_react9.default.createElement(import_icons3.CloseOutlined, { style: { fontSize: 10 } })
      )
    ))), closableTabs && tabs.length > 1 && /* @__PURE__ */ import_react9.default.createElement("div", { className: "tab-actions" }, /* @__PURE__ */ import_react9.default.createElement(
      "button",
      {
        className: "close-all-btn",
        onClick: onCloseAll,
        title: "关闭全部标签"
      },
      /* @__PURE__ */ import_react9.default.createElement(import_icons3.CloseCircleOutlined, null)
    ))), contextMenuVisible && /* @__PURE__ */ import_react9.default.createElement(
      "div",
      {
        style: {
          position: "fixed",
          left: menuPosition.x,
          top: menuPosition.y,
          zIndex: 1e3
        }
      },
      /* @__PURE__ */ import_react9.default.createElement(
        import_antd9.Dropdown,
        {
          overlay: menu,
          visible: contextMenuVisible,
          onVisibleChange: setContextMenuVisible,
          trigger: ["click"]
        },
        /* @__PURE__ */ import_react9.default.createElement("div", { style: { width: 0, height: 0 } })
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
    return /* @__PURE__ */ import_react10.default.createElement("main", { className: `main-content ${className}` }, enableTabs && tabs.length > 0 && /* @__PURE__ */ import_react10.default.createElement(
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
    ), /* @__PURE__ */ import_react10.default.createElement("div", { className: "content-wrapper" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "page-container", key: pageKey }, children)));
  };
  var MainContent_default = MainContent;

  // src/plugins/plugin-mall-components/components/AdminLayout/AdminLayout.tsx
  var SCENARIO_NAME = "general";
  var saveSchemaToLocalStorage = () => {
    try {
      const engine = window.AliLowCodeEngine;
      if (!engine?.project) return;
      const schema = engine.project.exportSchema("save");
      const key = `${SCENARIO_NAME}:projectSchema`;
      localStorage.setItem(key, JSON.stringify(schema));
      console.log("[AdminLayout] 💾 Schema saved to localStorage");
    } catch (e) {
      console.error("[AdminLayout] Failed to save schema:", e);
    }
  };
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
    const [collapsed, setCollapsed] = (0, import_react11.useState)(false);
    const [selectedKey, setSelectedKey] = (0, import_react11.useState)(defaultSelectedKey);
    const [openKeys, setOpenKeys] = (0, import_react11.useState)(defaultOpenKeys || []);
    const [tabs, setTabs] = (0, import_react11.useState)(() => {
      const initialItem = findMenuItem(items, defaultSelectedKey);
      return [{
        key: defaultSelectedKey,
        label: initialItem?.label || getLabelFromKey(defaultSelectedKey),
        icon: initialItem?.icon,
        closable: false,
        path: initialItem?.path || `/${defaultSelectedKey}`
      }];
    });
    const [activeTabKey, setActiveTabKey] = (0, import_react11.useState)(defaultSelectedKey);
    const activeTabKeyRef = (0, import_react11.useRef)(activeTabKey);
    activeTabKeyRef.current = activeTabKey;
    const initializedRef = (0, import_react11.useRef)(false);
    (0, import_react11.useEffect)(() => {
      if (__designMode !== "design" || !componentId || initializedRef.current) return;
      const timer = setTimeout(() => {
        try {
          const engine = window.AliLowCodeEngine;
          if (!engine?.project?.currentDocument) return;
          const documentModel = engine.project.currentDocument;
          const adminLayoutNode = documentModel.getNodeById(componentId);
          if (!adminLayoutNode) {
            console.log("[AdminLayout] ⚠️ AdminLayout node not found");
            return;
          }
          const schemaChildren = adminLayoutNode.schema?.children || [];
          console.log("[AdminLayout] 🔍 Schema children:", schemaChildren.length, schemaChildren.map((c) => c.componentName));
          const existingTabPanes = schemaChildren.filter((child) => child.componentName === "TabPane");
          console.log("[AdminLayout] 🔍 Found existing TabPanes:", existingTabPanes.length);
          if (existingTabPanes.length > 0) {
            const restoredTabs = existingTabPanes.map((tpSchema) => {
              const tabKey = tpSchema.props?.tabKey || "unknown";
              const tabLabel = tpSchema.props?.tab || getLabelFromKey(tabKey);
              const menuItem = findMenuItem(items, tabKey);
              console.log("[AdminLayout] 📋 Restoring tab:", tabKey, tabLabel);
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
            console.log("[AdminLayout] 📋 No TabPane found, creating default dashboard TabPane");
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
    (0, import_react11.useEffect)(() => {
      if (__designMode !== "design") return;
      const engine = window.AliLowCodeEngine;
      if (!engine?.project?.currentDocument) return;
      const documentModel = engine.project.currentDocument;
      let saveTimer = null;
      const debouncedSave = () => {
        if (saveTimer) clearTimeout(saveTimer);
        saveTimer = setTimeout(() => {
          saveSchemaToLocalStorage();
        }, 500);
      };
      const offAddNode = documentModel.onAddNode?.(() => {
        console.log("[AdminLayout] 📌 onAddNode triggered");
        debouncedSave();
      });
      const offRemoveNode = documentModel.onRemoveNode?.(() => {
        console.log("[AdminLayout] 📌 onRemoveNode triggered");
        debouncedSave();
      });
      const offMountNode = documentModel.onMountNode?.(() => {
        console.log("[AdminLayout] 📌 onMountNode triggered");
        debouncedSave();
      });
      return () => {
        if (saveTimer) clearTimeout(saveTimer);
        offAddNode?.();
        offRemoveNode?.();
        offMountNode?.();
      };
    }, [__designMode]);
    (0, import_react11.useEffect)(() => {
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
    const handleToggleCollapse = (0, import_react11.useCallback)(() => {
      if (collapsible) setCollapsed((prev) => !prev);
    }, [collapsible]);
    const createTabPane = (0, import_react11.useCallback)((tabKey, tabLabel) => {
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
        setTimeout(() => saveSchemaToLocalStorage(), 100);
        return true;
      } catch (error) {
        console.error("[AdminLayout] createTabPane error:", error);
        return false;
      }
    }, [componentId]);
    const removeTabPane = (0, import_react11.useCallback)((tabKey) => {
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
              setTimeout(() => saveSchemaToLocalStorage(), 100);
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
    const handleMenuClick = (0, import_react11.useCallback)((key) => {
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
    const handleOpenChange = (0, import_react11.useCallback)((keys) => setOpenKeys(keys), []);
    const handleNavigate = (0, import_react11.useCallback)((key) => {
      setSelectedKey(key);
      setActiveTabKey(key);
    }, []);
    const handleTabClick = (0, import_react11.useCallback)((key) => {
      setSelectedKey(key);
      setActiveTabKey(key);
    }, []);
    const handleCloseTab = (0, import_react11.useCallback)((key) => {
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
    const handleCloseOther = (0, import_react11.useCallback)((keepKey) => {
      tabs.forEach((tab) => {
        if (tab.key !== keepKey && tab.key !== "dashboard") {
          removeTabPane(tab.key);
        }
      });
      setTabs((prev) => prev.filter((tab) => tab.key === keepKey || tab.key === "dashboard"));
      setSelectedKey(keepKey);
      setActiveTabKey(keepKey);
    }, [tabs, removeTabPane]);
    const handleCloseAll = (0, import_react11.useCallback)(() => {
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
    const breadcrumbItems = (0, import_react11.useMemo)(() => {
      if (selectedKey === "dashboard") return [];
      const parts = selectedKey.split("/");
      if (parts.length === 1) return [{ key: selectedKey, label: "", path: selectedKey }];
      return [{ key: selectedKey, label: "", path: selectedKey }];
    }, [selectedKey]);
    const filteredChildren = (0, import_react11.useMemo)(() => {
      if (!children) return null;
      if (__designMode === "design") {
        const childArray = import_react11.Children.toArray(children);
        const activeTabPane = childArray.find((child) => {
          if ((0, import_react11.isValidElement)(child)) {
            const childProps = child.props;
            return childProps?.tabKey === activeTabKey;
          }
          return false;
        });
        return activeTabPane || null;
      }
      return children;
    }, [children, activeTabKey, __designMode]);
    const defaultContent = /* @__PURE__ */ import_react11.default.createElement("div", { style: { padding: 24, color: "#999" } }, "点击侧边栏菜单创建选项卡，然后拖拽组件到对应面板");
    const content = filteredChildren || defaultContent;
    return /* @__PURE__ */ import_react11.default.createElement("div", { className: `admin-layout ${collapsed ? "is-collapse" : ""} ${className || ""}`, style, "data-active-tab": activeTabKey }, /* @__PURE__ */ import_react11.default.createElement(
      Sidebar_default,
      {
        collapsed,
        selectedKey,
        openKeys,
        onMenuClick: handleMenuClick,
        onOpenChange: handleOpenChange,
        menuItems: items
      }
    ), /* @__PURE__ */ import_react11.default.createElement("div", { className: "layout-right" }, /* @__PURE__ */ import_react11.default.createElement(
      Navbar_default,
      {
        collapsed,
        onToggleCollapse: handleToggleCollapse,
        breadcrumbItems,
        onNavigate: handleNavigate
      }
    ), /* @__PURE__ */ import_react11.default.createElement(
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
    )), collapsible && /* @__PURE__ */ import_react11.default.createElement(
      "div",
      {
        className: `mobile-overlay ${!collapsed ? "visible" : ""}`,
        onClick: handleToggleCollapse
      }
    ));
  };
  var AdminLayout_default = AdminLayout;

  // src/plugins/plugin-mall-components/components/AdminLayout/TabPane.tsx
  var import_react12 = __toESM(require_react());
  var TabPane = ({
    tab,
    tabKey,
    activeTabKey,
    children,
    className,
    style
  }) => {
    const isActive = activeTabKey === tabKey;
    return /* @__PURE__ */ import_react12.default.createElement(
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

var _MC = typeof MallComponents !== 'undefined' ? (MallComponents.default || MallComponents) : {};

if (_MC.AdminLayout && _MC.TabPane) {
  if (typeof window !== 'undefined') {
    window.MallComponents = _MC;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.MallComponents = _MC;
  }
  console.log('[MallComponents] ✅ Registered:', Object.keys(_MC));
  console.log('[MallComponents] ✅ AdminLayout:', typeof _MC.AdminLayout);
} else {
  console.error('[MallComponents] ❌ Build incomplete!');
}

