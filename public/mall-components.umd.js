
// MallComponents - LowCode Component Library
// Uses global React/AntD instances (shared with LowCode Engine)
// No duplicate React instances!

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
      var React31 = typeof window !== "undefined" && window.React || {};
      module.exports = React31;
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
    CouponCard: () => CouponCard_default,
    OrderForm: () => OrderForm_default,
    OrderList: () => OrderList_default,
    ProductForm: () => ProductForm_default2,
    ProductList: () => ProductList_default2,
    PromotionCard: () => PromotionCard_default,
    RestApiTester: () => RestApiTester_default,
    RoleCard: () => RoleCard_default,
    UserCard: () => UserCard_default,
    default: () => entry_components_default
  });

  // src/plugins/plugin-mall-components/components/ProductList/ProductList.tsx
  var import_react3 = __toESM(require_react());
  var import_antd = __toESM(require_antd());

  // node_modules/@ant-design/icons/es/components/Context.js
  var import_react = __toESM(require_react());
  var IconContext = /* @__PURE__ */ (0, import_react.createContext)({});
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
  var React2 = __toESM(require_react());
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
  var import_react2 = __toESM(require_react());

  // node_modules/rc-util/es/warning.js
  var warned = {};
  var preWarningFns = [];
  var preMessage = function preMessage2(fn) {
    preWarningFns.push(fn);
  };
  function warning(valid, message8) {
    if (false) {
      var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
        return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "warning");
      }, message8);
      if (finalMessage) {
        console.error("Warning: ".concat(finalMessage));
      }
    }
  }
  function note(valid, message8) {
    if (false) {
      var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
        return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "note");
      }, message8);
      if (finalMessage) {
        console.warn("Note: ".concat(finalMessage));
      }
    }
  }
  function resetWarned() {
    warned = {};
  }
  function call(method, valid, message8) {
    if (!valid && !warned[message8]) {
      method(false, message8);
      warned[message8] = true;
    }
  }
  function warningOnce(valid, message8) {
    call(warning, valid, message8);
  }
  function noteOnce(valid, message8) {
    call(note, valid, message8);
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
  function warning2(valid, message8) {
    warning_default(valid, "[@ant-design/icons] ".concat(message8));
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
      return /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread2({
        key
      }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index) {
        return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
      }));
    }
    return /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread2(_objectSpread2({
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
    var _useContext = (0, import_react2.useContext)(Context_default), csp = _useContext.csp;
    (0, import_react2.useEffect)(function() {
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
  var Icon = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
    var _classNames;
    var className = props.className, icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded2);
    var _React$useContext = React2.useContext(Context_default), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
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
    return /* @__PURE__ */ React2.createElement("span", _objectSpread2(_objectSpread2({
      role: "img",
      "aria-label": icon.name
    }, restProps), {}, {
      ref,
      tabIndex: iconTabIndex,
      onClick,
      className: classString
    }), /* @__PURE__ */ React2.createElement(IconBase_default, {
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

  // node_modules/@ant-design/icons/es/icons/CarOutlined.js
  var React3 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/CarOutlined.js
  var CarOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M380 704h264c4.4 0 8-3.6 8-8v-84c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v36H428v-36c0-4.4-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8v84c0 4.4 3.6 8 8 8zm340-123a40 40 0 1080 0 40 40 0 10-80 0zm239-167.6L935.3 372a8 8 0 00-10.9-2.9l-50.7 29.6-78.3-216.2a63.9 63.9 0 00-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2-50.8-29.6a8 8 0 00-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40 60.3-35.2a8 8 0 003-10.8zM840 517v237H184V517l15.6-43h624.8l15.6 43zM292.7 218.1l.5-1.3.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220l72.7-199.9zM224 581a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, "name": "car", "theme": "outlined" };
  var CarOutlined_default = CarOutlined;

  // node_modules/@ant-design/icons/es/icons/CarOutlined.js
  var CarOutlined2 = function CarOutlined3(props, ref) {
    return /* @__PURE__ */ React3.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: CarOutlined_default
    }));
  };
  CarOutlined2.displayName = "CarOutlined";
  var CarOutlined_default2 = /* @__PURE__ */ React3.forwardRef(CarOutlined2);

  // node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js
  var React4 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/CheckCircleOutlined.js
  var CheckCircleOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z" } }, { "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, "name": "check-circle", "theme": "outlined" };
  var CheckCircleOutlined_default = CheckCircleOutlined;

  // node_modules/@ant-design/icons/es/icons/CheckCircleOutlined.js
  var CheckCircleOutlined2 = function CheckCircleOutlined3(props, ref) {
    return /* @__PURE__ */ React4.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: CheckCircleOutlined_default
    }));
  };
  CheckCircleOutlined2.displayName = "CheckCircleOutlined";
  var CheckCircleOutlined_default2 = /* @__PURE__ */ React4.forwardRef(CheckCircleOutlined2);

  // node_modules/@ant-design/icons/es/icons/ClockCircleOutlined.js
  var React5 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/ClockCircleOutlined.js
  var ClockCircleOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" } }] }, "name": "clock-circle", "theme": "outlined" };
  var ClockCircleOutlined_default = ClockCircleOutlined;

  // node_modules/@ant-design/icons/es/icons/ClockCircleOutlined.js
  var ClockCircleOutlined2 = function ClockCircleOutlined3(props, ref) {
    return /* @__PURE__ */ React5.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: ClockCircleOutlined_default
    }));
  };
  ClockCircleOutlined2.displayName = "ClockCircleOutlined";
  var ClockCircleOutlined_default2 = /* @__PURE__ */ React5.forwardRef(ClockCircleOutlined2);

  // node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js
  var React6 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/CloseCircleOutlined.js
  var CloseCircleOutlined = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm128.01 198.83c.03 0 .05.01.09.06l45.02 45.01a.2.2 0 01.05.09.12.12 0 010 .07c0 .02-.01.04-.05.08L557.25 512l127.87 127.86a.27.27 0 01.05.06v.02a.12.12 0 010 .07c0 .03-.01.05-.05.09l-45.02 45.02a.2.2 0 01-.09.05.12.12 0 01-.07 0c-.02 0-.04-.01-.08-.05L512 557.25 384.14 685.12c-.04.04-.06.05-.08.05a.12.12 0 01-.07 0c-.03 0-.05-.01-.09-.05l-45.02-45.02a.2.2 0 01-.05-.09.12.12 0 010-.07c0-.02.01-.04.06-.08L466.75 512 338.88 384.14a.27.27 0 01-.05-.06l-.01-.02a.12.12 0 010-.07c0-.03.01-.05.05-.09l45.02-45.02a.2.2 0 01.09-.05.12.12 0 01.07 0c.02 0 .04.01.08.06L512 466.75l127.86-127.86c.04-.05.06-.06.08-.06a.12.12 0 01.07 0z" } }] }, "name": "close-circle", "theme": "outlined" };
  var CloseCircleOutlined_default = CloseCircleOutlined;

  // node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js
  var CloseCircleOutlined2 = function CloseCircleOutlined3(props, ref) {
    return /* @__PURE__ */ React6.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: CloseCircleOutlined_default
    }));
  };
  CloseCircleOutlined2.displayName = "CloseCircleOutlined";
  var CloseCircleOutlined_default2 = /* @__PURE__ */ React6.forwardRef(CloseCircleOutlined2);

  // node_modules/@ant-design/icons/es/icons/DeleteOutlined.js
  var React7 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/DeleteOutlined.js
  var DeleteOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, "name": "delete", "theme": "outlined" };
  var DeleteOutlined_default = DeleteOutlined;

  // node_modules/@ant-design/icons/es/icons/DeleteOutlined.js
  var DeleteOutlined2 = function DeleteOutlined3(props, ref) {
    return /* @__PURE__ */ React7.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: DeleteOutlined_default
    }));
  };
  DeleteOutlined2.displayName = "DeleteOutlined";
  var DeleteOutlined_default2 = /* @__PURE__ */ React7.forwardRef(DeleteOutlined2);

  // node_modules/@ant-design/icons/es/icons/DownloadOutlined.js
  var React8 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/DownloadOutlined.js
  var DownloadOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, "name": "download", "theme": "outlined" };
  var DownloadOutlined_default = DownloadOutlined;

  // node_modules/@ant-design/icons/es/icons/DownloadOutlined.js
  var DownloadOutlined2 = function DownloadOutlined3(props, ref) {
    return /* @__PURE__ */ React8.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: DownloadOutlined_default
    }));
  };
  DownloadOutlined2.displayName = "DownloadOutlined";
  var DownloadOutlined_default2 = /* @__PURE__ */ React8.forwardRef(DownloadOutlined2);

  // node_modules/@ant-design/icons/es/icons/EditOutlined.js
  var React9 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/EditOutlined.js
  var EditOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, "name": "edit", "theme": "outlined" };
  var EditOutlined_default = EditOutlined;

  // node_modules/@ant-design/icons/es/icons/EditOutlined.js
  var EditOutlined2 = function EditOutlined3(props, ref) {
    return /* @__PURE__ */ React9.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: EditOutlined_default
    }));
  };
  EditOutlined2.displayName = "EditOutlined";
  var EditOutlined_default2 = /* @__PURE__ */ React9.forwardRef(EditOutlined2);

  // node_modules/@ant-design/icons/es/icons/ExportOutlined.js
  var React10 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/ExportOutlined.js
  var ExportOutlined = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z" } }] }, "name": "export", "theme": "outlined" };
  var ExportOutlined_default = ExportOutlined;

  // node_modules/@ant-design/icons/es/icons/ExportOutlined.js
  var ExportOutlined2 = function ExportOutlined3(props, ref) {
    return /* @__PURE__ */ React10.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: ExportOutlined_default
    }));
  };
  ExportOutlined2.displayName = "ExportOutlined";
  var ExportOutlined_default2 = /* @__PURE__ */ React10.forwardRef(ExportOutlined2);

  // node_modules/@ant-design/icons/es/icons/EyeOutlined.js
  var React11 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/EyeOutlined.js
  var EyeOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, "name": "eye", "theme": "outlined" };
  var EyeOutlined_default = EyeOutlined;

  // node_modules/@ant-design/icons/es/icons/EyeOutlined.js
  var EyeOutlined2 = function EyeOutlined3(props, ref) {
    return /* @__PURE__ */ React11.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: EyeOutlined_default
    }));
  };
  EyeOutlined2.displayName = "EyeOutlined";
  var EyeOutlined_default2 = /* @__PURE__ */ React11.forwardRef(EyeOutlined2);

  // node_modules/@ant-design/icons/es/icons/LoadingOutlined.js
  var React12 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/LoadingOutlined.js
  var LoadingOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
  var LoadingOutlined_default = LoadingOutlined;

  // node_modules/@ant-design/icons/es/icons/LoadingOutlined.js
  var LoadingOutlined2 = function LoadingOutlined3(props, ref) {
    return /* @__PURE__ */ React12.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: LoadingOutlined_default
    }));
  };
  LoadingOutlined2.displayName = "LoadingOutlined";
  var LoadingOutlined_default2 = /* @__PURE__ */ React12.forwardRef(LoadingOutlined2);

  // node_modules/@ant-design/icons/es/icons/MoreOutlined.js
  var React13 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/MoreOutlined.js
  var MoreOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "more", "theme": "outlined" };
  var MoreOutlined_default = MoreOutlined;

  // node_modules/@ant-design/icons/es/icons/MoreOutlined.js
  var MoreOutlined2 = function MoreOutlined3(props, ref) {
    return /* @__PURE__ */ React13.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: MoreOutlined_default
    }));
  };
  MoreOutlined2.displayName = "MoreOutlined";
  var MoreOutlined_default2 = /* @__PURE__ */ React13.forwardRef(MoreOutlined2);

  // node_modules/@ant-design/icons/es/icons/PlayCircleOutlined.js
  var React14 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/PlayCircleOutlined.js
  var PlayCircleOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { "tag": "path", "attrs": { "d": "M719.4 499.1l-296.1-215A15.9 15.9 0 00398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 000-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z" } }] }, "name": "play-circle", "theme": "outlined" };
  var PlayCircleOutlined_default = PlayCircleOutlined;

  // node_modules/@ant-design/icons/es/icons/PlayCircleOutlined.js
  var PlayCircleOutlined2 = function PlayCircleOutlined3(props, ref) {
    return /* @__PURE__ */ React14.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: PlayCircleOutlined_default
    }));
  };
  PlayCircleOutlined2.displayName = "PlayCircleOutlined";
  var PlayCircleOutlined_default2 = /* @__PURE__ */ React14.forwardRef(PlayCircleOutlined2);

  // node_modules/@ant-design/icons/es/icons/PlusOutlined.js
  var React15 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/PlusOutlined.js
  var PlusOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { "tag": "path", "attrs": { "d": "M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z" } }] }, "name": "plus", "theme": "outlined" };
  var PlusOutlined_default = PlusOutlined;

  // node_modules/@ant-design/icons/es/icons/PlusOutlined.js
  var PlusOutlined2 = function PlusOutlined3(props, ref) {
    return /* @__PURE__ */ React15.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: PlusOutlined_default
    }));
  };
  PlusOutlined2.displayName = "PlusOutlined";
  var PlusOutlined_default2 = /* @__PURE__ */ React15.forwardRef(PlusOutlined2);

  // node_modules/@ant-design/icons/es/icons/ReloadOutlined.js
  var React16 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/ReloadOutlined.js
  var ReloadOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" } }] }, "name": "reload", "theme": "outlined" };
  var ReloadOutlined_default = ReloadOutlined;

  // node_modules/@ant-design/icons/es/icons/ReloadOutlined.js
  var ReloadOutlined2 = function ReloadOutlined3(props, ref) {
    return /* @__PURE__ */ React16.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: ReloadOutlined_default
    }));
  };
  ReloadOutlined2.displayName = "ReloadOutlined";
  var ReloadOutlined_default2 = /* @__PURE__ */ React16.forwardRef(ReloadOutlined2);

  // node_modules/@ant-design/icons/es/icons/SearchOutlined.js
  var React17 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/SearchOutlined.js
  var SearchOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, "name": "search", "theme": "outlined" };
  var SearchOutlined_default = SearchOutlined;

  // node_modules/@ant-design/icons/es/icons/SearchOutlined.js
  var SearchOutlined2 = function SearchOutlined3(props, ref) {
    return /* @__PURE__ */ React17.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: SearchOutlined_default
    }));
  };
  SearchOutlined2.displayName = "SearchOutlined";
  var SearchOutlined_default2 = /* @__PURE__ */ React17.forwardRef(SearchOutlined2);

  // node_modules/@ant-design/icons/es/icons/TeamOutlined.js
  var React18 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/TeamOutlined.js
  var TeamOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z" } }] }, "name": "team", "theme": "outlined" };
  var TeamOutlined_default = TeamOutlined;

  // node_modules/@ant-design/icons/es/icons/TeamOutlined.js
  var TeamOutlined2 = function TeamOutlined3(props, ref) {
    return /* @__PURE__ */ React18.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: TeamOutlined_default
    }));
  };
  TeamOutlined2.displayName = "TeamOutlined";
  var TeamOutlined_default2 = /* @__PURE__ */ React18.forwardRef(TeamOutlined2);

  // node_modules/@ant-design/icons/es/icons/ThunderboltOutlined.js
  var React19 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/ThunderboltOutlined.js
  var ThunderboltOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z" } }] }, "name": "thunderbolt", "theme": "outlined" };
  var ThunderboltOutlined_default = ThunderboltOutlined;

  // node_modules/@ant-design/icons/es/icons/ThunderboltOutlined.js
  var ThunderboltOutlined2 = function ThunderboltOutlined3(props, ref) {
    return /* @__PURE__ */ React19.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: ThunderboltOutlined_default
    }));
  };
  ThunderboltOutlined2.displayName = "ThunderboltOutlined";
  var ThunderboltOutlined_default2 = /* @__PURE__ */ React19.forwardRef(ThunderboltOutlined2);

  // node_modules/@ant-design/icons/es/icons/UploadOutlined.js
  var React20 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/UploadOutlined.js
  var UploadOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" } }] }, "name": "upload", "theme": "outlined" };
  var UploadOutlined_default = UploadOutlined;

  // node_modules/@ant-design/icons/es/icons/UploadOutlined.js
  var UploadOutlined2 = function UploadOutlined3(props, ref) {
    return /* @__PURE__ */ React20.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: UploadOutlined_default
    }));
  };
  UploadOutlined2.displayName = "UploadOutlined";
  var UploadOutlined_default2 = /* @__PURE__ */ React20.forwardRef(UploadOutlined2);

  // node_modules/@ant-design/icons/es/icons/UserOutlined.js
  var React21 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/UserOutlined.js
  var UserOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" } }] }, "name": "user", "theme": "outlined" };
  var UserOutlined_default = UserOutlined;

  // node_modules/@ant-design/icons/es/icons/UserOutlined.js
  var UserOutlined2 = function UserOutlined3(props, ref) {
    return /* @__PURE__ */ React21.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: UserOutlined_default
    }));
  };
  UserOutlined2.displayName = "UserOutlined";
  var UserOutlined_default2 = /* @__PURE__ */ React21.forwardRef(UserOutlined2);

  // src/plugins/plugin-mall-components/adapters/DataSourceAdapter.ts
  var DataSourceAdapterFactory = class {
    static create(config) {
      if (!config) {
        console.warn("[DataSourceAdapterFactory] config is undefined, using mock adapter");
        return new MockDataAdapter({
          type: "mock",
          mockData: {
            code: 200,
            message: "success",
            data: {
              pageNum: 1,
              pageSize: 10,
              total: 0,
              list: []
            }
          }
        });
      }
      if (!config.type) {
        console.warn("[DataSourceAdapterFactory] config.type is undefined, using mock adapter");
        return new MockDataAdapter({
          type: "mock",
          mockData: config.mockData || {
            code: 200,
            message: "success",
            data: {
              pageNum: 1,
              pageSize: 10,
              total: 0,
              list: []
            }
          }
        });
      }
      switch (config.type) {
        case "rest":
          return new RestApiAdapter(config);
        case "mock":
          return new MockDataAdapter(config);
        case "variable":
          return new VariableAdapter(config);
        default:
          console.warn(`[DataSourceAdapterFactory] Unsupported data source type: ${config.type}, using mock adapter`);
          return new MockDataAdapter({
            type: "mock",
            mockData: {
              code: 200,
              message: "success",
              data: {
                pageNum: 1,
                pageSize: 10,
                total: 0,
                list: []
              }
            }
          });
      }
    }
  };
  var RestApiAdapter = class {
    config;
    constructor(config) {
      this.config = config;
    }
    async fetch(params) {
      const url = this.buildUrl(params);
      const response = await fetch(url, {
        method: this.config.method || "GET",
        headers: {
          "Content-Type": "application/json",
          ...this.config.headers
        },
        body: this.config.method !== "GET" ? JSON.stringify(params) : void 0
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();
      if (this.config.transform) {
        try {
          const transformFn = new Function("data", this.config.transform);
          data = transformFn(data);
        } catch (error) {
          console.error("Transform function error:", error);
        }
      }
      return data;
    }
    async submit(data) {
      const response = await fetch(this.config.api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...this.config.headers
        },
        body: JSON.stringify(data)
      });
      return response.json();
    }
    async delete(id) {
      const response = await fetch(`${this.config.api}/${id}`, {
        method: "DELETE",
        headers: this.config.headers
      });
      return response.json();
    }
    async update(id, data) {
      const response = await fetch(`${this.config.api}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...this.config.headers
        },
        body: JSON.stringify(data)
      });
      return response.json();
    }
    buildUrl(params) {
      if (!params || this.config.method !== "GET") {
        return this.config.api;
      }
      const url = new URL(this.config.api, window.location.origin);
      Object.keys(params).forEach((key) => {
        if (params[key] !== void 0 && params[key] !== null && params[key] !== "") {
          url.searchParams.append(key, params[key]);
        }
      });
      return url.toString();
    }
  };
  var MockDataAdapter = class {
    config;
    constructor(config) {
      this.config = config;
    }
    async fetch(params) {
      console.log("[MockDataAdapter] fetch 被调用，config:", this.config, "params:", params);
      await new Promise((resolve) => setTimeout(resolve, 300));
      let data = this.config.mockData;
      console.log("[MockDataAdapter] 原始 mockData:", data, "类型:", typeof data);
      if (!data || data === "") {
        console.log("[MockDataAdapter] mockData 为空，使用默认数据");
        data = {
          code: 200,
          message: "success",
          data: {
            pageNum: 1,
            pageSize: 10,
            total: 50,
            list: [
              {
                id: 1,
                name: "时尚运动鞋",
                productSn: "PRODUCT001",
                price: 269,
                stock: 100,
                sale: 120,
                brandName: "时尚运动",
                productCategoryName: "鞋子",
                pic: "https://img.yzcdn.cn/vant/cat.jpeg",
                publishStatus: 1,
                newStatus: 1,
                recommandStatus: 1,
                verifyStatus: 1
              },
              {
                id: 2,
                name: "休闲T恤",
                productSn: "PRODUCT002",
                price: 99,
                stock: 200,
                sale: 350,
                brandName: "休闲服饰",
                productCategoryName: "衣服",
                pic: "https://img.yzcdn.cn/vant/cat.jpeg",
                publishStatus: 1,
                newStatus: 1,
                recommandStatus: 0,
                verifyStatus: 1
              },
              {
                id: 3,
                name: "双肩背包",
                productSn: "PRODUCT003",
                price: 189,
                stock: 80,
                sale: 80,
                brandName: "旅行箱包",
                productCategoryName: "配饰",
                pic: "https://img.yzcdn.cn/vant/cat.jpeg",
                publishStatus: 1,
                newStatus: 0,
                recommandStatus: 1,
                verifyStatus: 1
              },
              {
                id: 4,
                name: "运动手表",
                productSn: "PRODUCT004",
                price: 499,
                stock: 50,
                sale: 60,
                brandName: "智能数码",
                productCategoryName: "数码",
                pic: "https://img.yzcdn.cn/vant/cat.jpeg",
                publishStatus: 1,
                newStatus: 1,
                recommandStatus: 1,
                verifyStatus: 1
              },
              {
                id: 5,
                name: "牛仔裤",
                productSn: "PRODUCT005",
                price: 199,
                stock: 150,
                sale: 280,
                brandName: "时尚牛仔",
                productCategoryName: "衣服",
                pic: "https://img.yzcdn.cn/vant/cat.jpeg",
                publishStatus: 1,
                newStatus: 0,
                recommandStatus: 0,
                verifyStatus: 1
              }
            ]
          }
        };
      } else {
        try {
          if (typeof data === "string") {
            data = JSON.parse(data);
          }
          console.log("[MockDataAdapter] JSON 解析后的数据:", data);
        } catch (error) {
          console.error("[MockDataAdapter] JSON 解析失败:", error);
          data = {
            code: 200,
            message: "success",
            data: {
              pageNum: 1,
              pageSize: 10,
              total: 0,
              list: []
            }
          };
        }
      }
      if (this.config.transform) {
        try {
          const transformFn = new Function("data", this.config.transform);
          data = transformFn(data);
        } catch (error) {
          console.error("Transform function error:", error);
        }
      }
      console.log("[MockDataAdapter] 最终返回数据:", data);
      if (params?.pageNum && params?.pageSize && data?.data?.list) {
        const start = (params.pageNum - 1) * params.pageSize;
        const end = start + params.pageSize;
        return {
          ...data,
          data: {
            ...data.data,
            list: data.data.list.slice(start, end)
          }
        };
      }
      return data;
    }
    async submit(data) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return { code: 200, message: "success", data };
    }
    async delete(id) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return { code: 200, message: "success" };
    }
    async update(id, data) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return { code: 200, message: "success", data };
    }
  };
  var VariableAdapter = class {
    config;
    constructor(config) {
      this.config = config;
    }
    async fetch(params) {
      const variableName = this.config.variableName;
      if (!variableName) {
        throw new Error("Variable name is required for variable adapter");
      }
      const value = window[variableName];
      return { code: 200, message: "success", data: value };
    }
    async submit(data) {
      const variableName = this.config.variableName;
      if (!variableName) {
        throw new Error("Variable name is required for variable adapter");
      }
      window[variableName] = data;
      return { code: 200, message: "success", data };
    }
    async delete(id) {
      return { code: 200, message: "success" };
    }
    async update(id, data) {
      return this.submit(data);
    }
  };

  // src/plugins/plugin-mall-components/components/ProductList/ProductList.tsx
  var ProductList = ({
    dataSourceType = "mock",
    api,
    method = "GET",
    mockData,
    variableName,
    showFilter = true,
    showAction = true,
    showSelection = true,
    showOperation = true,
    showStatus = true,
    showPagination = true,
    filterFields = [],
    actionButtons = [],
    columns,
    batchOperations = [],
    onRowClick,
    onSearch,
    onPageChange,
    onActionClick,
    onBatchOperation,
    style,
    className
  }) => {
    const [loading, setLoading] = import_react3.default.useState(false);
    const [data, setData] = import_react3.default.useState([]);
    const [total, setTotal] = import_react3.default.useState(0);
    const [currentPage, setCurrentPage] = import_react3.default.useState(1);
    const [pageSize, setPageSize] = import_react3.default.useState(10);
    const [searchText, setSearchText] = import_react3.default.useState("");
    const [selectedRowKeys, setSelectedRowKeys] = import_react3.default.useState([]);
    const [selectedRows, setSelectedRows] = import_react3.default.useState([]);
    const [batchOperation, setBatchOperation] = import_react3.default.useState();
    const defaultMockDataObj = {
      code: 200,
      message: "success",
      data: {
        pageNum: 1,
        pageSize: 10,
        total: 50,
        list: [
          {
            id: 1,
            name: "时尚运动鞋",
            productSn: "PRODUCT001",
            price: 269,
            stock: 100,
            sale: 120,
            brandName: "时尚运动",
            productCategoryName: "鞋子",
            pic: "https://img.yzcdn.cn/vant/cat.jpeg",
            publishStatus: 1,
            newStatus: 1,
            recommandStatus: 1,
            verifyStatus: 1
          },
          {
            id: 2,
            name: "休闲T恤",
            productSn: "PRODUCT002",
            price: 99,
            stock: 200,
            sale: 350,
            brandName: "休闲服饰",
            productCategoryName: "衣服",
            pic: "https://img.yzcdn.cn/vant/cat.jpeg",
            publishStatus: 1,
            newStatus: 0,
            recommandStatus: 1,
            verifyStatus: 1
          },
          {
            id: 3,
            name: "双肩背包",
            productSn: "PRODUCT003",
            price: 189,
            stock: 80,
            sale: 80,
            brandName: "旅行箱包",
            productCategoryName: "配饰",
            pic: "https://img.yzcdn.cn/vant/cat.jpeg",
            publishStatus: 1,
            newStatus: 1,
            recommandStatus: 0,
            verifyStatus: 1
          },
          {
            id: 4,
            name: "运动手表",
            productSn: "PRODUCT004",
            price: 499,
            stock: 50,
            sale: 60,
            brandName: "智能数码",
            productCategoryName: "数码",
            pic: "https://img.yzcdn.cn/vant/cat.jpeg",
            publishStatus: 1,
            newStatus: 1,
            recommandStatus: 1,
            verifyStatus: 1
          },
          {
            id: 5,
            name: "牛仔裤",
            productSn: "PRODUCT005",
            price: 199,
            stock: 150,
            sale: 280,
            brandName: "时尚牛仔",
            productCategoryName: "衣服",
            pic: "https://img.yzcdn.cn/vant/cat.jpeg",
            publishStatus: 1,
            newStatus: 0,
            recommandStatus: 0,
            verifyStatus: 1
          }
        ]
      }
    };
    const defaultMockData = JSON.stringify(defaultMockDataObj);
    let actualMockData = mockData;
    if (!actualMockData) {
      actualMockData = defaultMockData;
    }
    console.log("[ProductList] 处理后的 mockData:", actualMockData);
    const dataSource = {
      type: dataSourceType,
      api: api || "",
      method,
      mockData: actualMockData,
      variableName: variableName || ""
    };
    console.log("[ProductList] 组件渲染，props:", {
      dataSourceType,
      api,
      method,
      mockData,
      variableName,
      showFilter,
      showAction,
      showSelection
    });
    const adapter = DataSourceAdapterFactory.create(dataSource);
    console.log("[ProductList] DataSourceAdapter 创建完成:", adapter);
    import_react3.default.useEffect(() => {
      console.log("[ProductList] useEffect 触发，开始获取数据");
      fetchData();
    }, [currentPage, pageSize, dataSourceType, api, method, mockData, variableName]);
    const fetchData = async () => {
      console.log("[ProductList] fetchData 开始，参数:", { currentPage, pageSize, searchText });
      setLoading(true);
      try {
        const params = {
          pageNum: currentPage,
          pageSize,
          keyword: searchText || void 0
        };
        console.log("[ProductList] 调用 adapter.fetch，参数:", params);
        const response = await adapter.fetch(params);
        console.log("[ProductList] adapter.fetch 返回结果:", response);
        if (response.code === 200) {
          setData(response.data.list);
          setTotal(response.data.total);
          console.log("[ProductList] 数据更新成功，总数:", response.data.total);
        }
      } catch (error) {
        console.error("[ProductList] 获取数据失败:", error);
      } finally {
        setLoading(false);
      }
    };
    const handleSearch = () => {
      setCurrentPage(1);
      fetchData();
      onSearch?.(searchText);
    };
    const handlePageChange = (page, size) => {
      setCurrentPage(page);
      setPageSize(size);
      onPageChange?.(page, size);
    };
    const handleBatchOperation = () => {
      if (batchOperation && selectedRows.length > 0) {
        onBatchOperation?.(batchOperation, selectedRows);
      }
    };
    const defaultColumns = [
      {
        title: "商品图片",
        dataIndex: "pic",
        key: "pic",
        width: 100,
        render: (text) => /* @__PURE__ */ import_react3.default.createElement("img", { src: text, alt: "商品图片", style: { width: 60, height: 60, objectFit: "cover" } })
      },
      {
        title: "商品名称",
        dataIndex: "name",
        key: "name",
        width: 200
      },
      {
        title: "商品编号",
        dataIndex: "productSn",
        key: "productSn",
        width: 150
      },
      {
        title: "价格",
        dataIndex: "price",
        key: "price",
        width: 100,
        render: (price) => `¥${price.toFixed(2)}`
      },
      {
        title: "库存",
        dataIndex: "stock",
        key: "stock",
        width: 80
      },
      {
        title: "销量",
        dataIndex: "sale",
        key: "sale",
        width: 80
      },
      {
        title: "品牌",
        dataIndex: "brandName",
        key: "brandName",
        width: 100
      },
      {
        title: "分类",
        dataIndex: "productCategoryName",
        key: "productCategoryName",
        width: 100
      },
      ...showStatus ? [
        {
          title: "状态",
          dataIndex: "publishStatus",
          key: "publishStatus",
          width: 100,
          render: (status) => /* @__PURE__ */ import_react3.default.createElement(import_antd.Switch, { checked: status === 1, checkedChildren: "上架", unCheckedChildren: "下架" })
        }
      ] : [],
      ...showOperation ? [
        {
          title: "操作",
          key: "operation",
          width: 150,
          render: (_, record) => /* @__PURE__ */ import_react3.default.createElement(import_antd.Space, { size: "small" }, /* @__PURE__ */ import_react3.default.createElement(import_antd.Button, { type: "link", size: "small", onClick: () => onRowClick?.(record) }, "查看"), /* @__PURE__ */ import_react3.default.createElement(import_antd.Button, { type: "link", size: "small" }, "编辑"), /* @__PURE__ */ import_react3.default.createElement(import_antd.Button, { type: "link", size: "small", danger: true }, "删除"))
        }
      ] : []
    ];
    const rowSelection = showSelection ? {
      selectedRowKeys,
      onChange: (newSelectedRowKeys, newSelectedRows) => {
        setSelectedRowKeys(newSelectedRowKeys);
        setSelectedRows(newSelectedRows);
      }
    } : void 0;
    const getIcon = (iconName) => {
      switch (iconName) {
        case "plus":
          return /* @__PURE__ */ import_react3.default.createElement(PlusOutlined_default2, null);
        case "download":
          return /* @__PURE__ */ import_react3.default.createElement(DownloadOutlined_default2, null);
        case "upload":
          return /* @__PURE__ */ import_react3.default.createElement(UploadOutlined_default2, null);
        default:
          return null;
      }
    };
    return /* @__PURE__ */ import_react3.default.createElement("div", { className: `mall-product-list ${className || ""}`, style }, showFilter && /* @__PURE__ */ import_react3.default.createElement(import_antd.Card, { className: "mall-product-list-filter", size: "small" }, /* @__PURE__ */ import_react3.default.createElement(import_antd.Space, null, /* @__PURE__ */ import_react3.default.createElement(
      import_antd.Input,
      {
        placeholder: "请输入商品名称或编号",
        prefix: /* @__PURE__ */ import_react3.default.createElement(SearchOutlined_default2, null),
        value: searchText,
        onChange: (e) => setSearchText(e.target.value),
        onPressEnter: handleSearch,
        style: { width: 300 }
      }
    ), /* @__PURE__ */ import_react3.default.createElement(import_antd.Button, { type: "primary", icon: /* @__PURE__ */ import_react3.default.createElement(SearchOutlined_default2, null), onClick: handleSearch }, "搜索"), /* @__PURE__ */ import_react3.default.createElement(import_antd.Button, { icon: /* @__PURE__ */ import_react3.default.createElement(ReloadOutlined_default2, null), onClick: () => fetchData() }, "刷新"))), showAction && /* @__PURE__ */ import_react3.default.createElement(import_antd.Card, { className: "mall-product-list-action", size: "small" }, /* @__PURE__ */ import_react3.default.createElement(import_antd.Space, null, actionButtons.map((btn, index) => /* @__PURE__ */ import_react3.default.createElement(import_antd.Button, { key: index, type: btn.type || "default", icon: getIcon(btn.icon), onClick: () => onActionClick?.(btn.onClick || "") }, btn.text)), showSelection && batchOperations.length > 0 && /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement(
      import_antd.Select,
      {
        placeholder: "批量操作",
        value: batchOperation,
        onChange: setBatchOperation,
        style: { width: 150 }
      },
      batchOperations.map((op, index) => /* @__PURE__ */ import_react3.default.createElement(import_antd.Select.Option, { key: index, value: op.value }, op.text))
    ), /* @__PURE__ */ import_react3.default.createElement(import_antd.Button, { onClick: handleBatchOperation }, "执行")))), /* @__PURE__ */ import_react3.default.createElement("div", { className: "mall-product-list-table" }, /* @__PURE__ */ import_react3.default.createElement(
      import_antd.Table,
      {
        rowKey: "id",
        columns: columns || defaultColumns,
        dataSource: data,
        loading,
        rowSelection,
        pagination: false,
        scroll: { x: 1200 }
      }
    )), showPagination && /* @__PURE__ */ import_react3.default.createElement("div", { className: "pagination-wrapper" }, /* @__PURE__ */ import_react3.default.createElement(
      import_antd.Pagination,
      {
        current: currentPage,
        pageSize,
        total,
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total2) => `共 ${total2} 条`,
        onChange: handlePageChange
      }
    )));
  };
  var ProductList_default = ProductList;

  // src/plugins/plugin-mall-components/components/ProductList/index.ts
  var ProductList_default2 = ProductList_default;

  // src/plugins/plugin-mall-components/components/ProductForm/ProductForm.tsx
  var import_react4 = __toESM(require_react());
  var import_antd2 = __toESM(require_antd());
  var ProductForm = ({
    initialValues,
    mode = "create",
    showBasicInfo = true,
    showPriceInfo = true,
    showStockInfo = true,
    showStatusInfo = true,
    showDescription = true,
    onSubmit,
    onCancel,
    style,
    className
  }) => {
    const [form] = import_antd2.Form.useForm();
    const [activeTab, setActiveTab] = (0, import_react4.useState)("basic");
    (0, import_react4.useEffect)(() => {
      if (initialValues) {
        let parsedValues = initialValues;
        if (typeof initialValues === "string") {
          try {
            parsedValues = JSON.parse(initialValues);
          } catch (e) {
            console.error("Failed to parse initialValues:", e);
            parsedValues = {};
          }
        }
        form.setFieldsValue(parsedValues);
      }
    }, [initialValues, form]);
    const handleSubmit = async () => {
      try {
        const values = await form.validateFields();
        onSubmit?.(values);
        import_antd2.message.success("提交成功");
      } catch (error) {
        console.error("Validation failed:", error);
        import_antd2.message.error("请检查表单填写是否正确");
      }
    };
    const handleCancel = () => {
      form.resetFields();
      onCancel?.();
    };
    const handleReset = () => {
      form.resetFields();
    };
    const getParsedInitialValues = () => {
      if (typeof initialValues === "string") {
        try {
          return JSON.parse(initialValues);
        } catch (e) {
          return {};
        }
      }
      return initialValues || {};
    };
    const isViewMode = mode === "view";
    const basicInfoItems = [
      /* @__PURE__ */ import_react4.default.createElement(import_antd2.Row, { gutter: 16, key: "basic-row-1" }, /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 12 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "name",
          label: "商品名称",
          rules: [{ required: true, message: "请输入商品名称" }]
        },
        /* @__PURE__ */ import_react4.default.createElement(import_antd2.Input, { placeholder: "请输入商品名称", disabled: isViewMode })
      )), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 12 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "productSn",
          label: "商品货号",
          rules: [{ required: true, message: "请输入商品货号" }]
        },
        /* @__PURE__ */ import_react4.default.createElement(import_antd2.Input, { placeholder: "请输入商品货号", disabled: isViewMode })
      ))),
      /* @__PURE__ */ import_react4.default.createElement(import_antd2.Row, { gutter: 16, key: "basic-row-2" }, /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 12 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "brandName",
          label: "品牌名称"
        },
        /* @__PURE__ */ import_react4.default.createElement(import_antd2.Input, { placeholder: "请输入品牌名称", disabled: isViewMode })
      )), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 12 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "productCategoryName",
          label: "商品分类"
        },
        /* @__PURE__ */ import_react4.default.createElement(import_antd2.Select, { placeholder: "请选择商品分类", disabled: isViewMode }, /* @__PURE__ */ import_react4.default.createElement(import_antd2.Select.Option, { value: "手机" }, "手机"), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Select.Option, { value: "笔记本" }, "笔记本"), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Select.Option, { value: "平板" }, "平板"), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Select.Option, { value: "耳机" }, "耳机"), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Select.Option, { value: "手表" }, "手表"), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Select.Option, { value: "衣服" }, "衣服"), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Select.Option, { value: "鞋子" }, "鞋子"), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Select.Option, { value: "配饰" }, "配饰"), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Select.Option, { value: "数码" }, "数码"))
      ))),
      /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          key: "pic",
          name: "pic",
          label: "商品图片"
        },
        /* @__PURE__ */ import_react4.default.createElement(import_antd2.Input, { placeholder: "请输入商品图片 URL", disabled: isViewMode })
      ),
      /* @__PURE__ */ import_react4.default.createElement(import_antd2.Row, { gutter: 16, key: "basic-row-3" }, /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 12 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "subTitle",
          label: "商品副标题"
        },
        /* @__PURE__ */ import_react4.default.createElement(import_antd2.Input, { placeholder: "请输入商品副标题", disabled: isViewMode })
      )), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 12 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "keywords",
          label: "商品关键词"
        },
        /* @__PURE__ */ import_react4.default.createElement(import_antd2.Input, { placeholder: "多个关键词用逗号分隔", disabled: isViewMode })
      )))
    ];
    const priceInfoItems = [
      /* @__PURE__ */ import_react4.default.createElement(import_antd2.Row, { gutter: 16, key: "price-row-1" }, /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 12 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "price",
          label: "商品价格",
          rules: [{ required: true, message: "请输入商品价格" }]
        },
        /* @__PURE__ */ import_react4.default.createElement(
          import_antd2.InputNumber,
          {
            placeholder: "请输入商品价格",
            style: { width: "100%" },
            min: 0,
            precision: 2,
            prefix: "¥",
            disabled: isViewMode
          }
        )
      )), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 12 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "originalPrice",
          label: "原价"
        },
        /* @__PURE__ */ import_react4.default.createElement(
          import_antd2.InputNumber,
          {
            placeholder: "请输入原价",
            style: { width: "100%" },
            min: 0,
            precision: 2,
            prefix: "¥",
            disabled: isViewMode
          }
        )
      ))),
      /* @__PURE__ */ import_react4.default.createElement(import_antd2.Row, { gutter: 16, key: "price-row-2" }, /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 12 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "promotionPrice",
          label: "促销价"
        },
        /* @__PURE__ */ import_react4.default.createElement(
          import_antd2.InputNumber,
          {
            placeholder: "请输入促销价",
            style: { width: "100%" },
            min: 0,
            precision: 2,
            prefix: "¥",
            disabled: isViewMode
          }
        )
      )), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 12 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "unit",
          label: "商品单位"
        },
        /* @__PURE__ */ import_react4.default.createElement(import_antd2.Select, { placeholder: "请选择商品单位", disabled: isViewMode }, /* @__PURE__ */ import_react4.default.createElement(import_antd2.Select.Option, { value: "件" }, "件"), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Select.Option, { value: "台" }, "台"), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Select.Option, { value: "部" }, "部"), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Select.Option, { value: "块" }, "块"), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Select.Option, { value: "副" }, "副"))
      )))
    ];
    const stockInfoItems = [
      /* @__PURE__ */ import_react4.default.createElement(import_antd2.Row, { gutter: 16, key: "stock-row-1" }, /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 12 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "stock",
          label: "商品库存",
          rules: [{ required: true, message: "请输入商品库存" }]
        },
        /* @__PURE__ */ import_react4.default.createElement(
          import_antd2.InputNumber,
          {
            placeholder: "请输入商品库存",
            style: { width: "100%" },
            min: 0,
            disabled: isViewMode
          }
        )
      )), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 12 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "lowStock",
          label: "库存预警值"
        },
        /* @__PURE__ */ import_react4.default.createElement(
          import_antd2.InputNumber,
          {
            placeholder: "请输入库存预警值",
            style: { width: "100%" },
            min: 0,
            disabled: isViewMode
          }
        )
      ))),
      /* @__PURE__ */ import_react4.default.createElement(import_antd2.Row, { gutter: 16, key: "stock-row-2" }, /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 12 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "weight",
          label: "商品重量(kg)"
        },
        /* @__PURE__ */ import_react4.default.createElement(
          import_antd2.InputNumber,
          {
            placeholder: "请输入商品重量",
            style: { width: "100%" },
            min: 0,
            precision: 2,
            disabled: isViewMode
          }
        )
      )), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 12 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "sort",
          label: "排序"
        },
        /* @__PURE__ */ import_react4.default.createElement(
          import_antd2.InputNumber,
          {
            placeholder: "请输入排序",
            style: { width: "100%" },
            min: 0,
            disabled: isViewMode
          }
        )
      )))
    ];
    const statusInfoItems = [
      /* @__PURE__ */ import_react4.default.createElement(import_antd2.Row, { gutter: 16, key: "status-row-1" }, /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 8 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "publishStatus",
          label: "上架状态",
          valuePropName: "checked",
          getValueFromEvent: (checked) => checked ? 1 : 0,
          getValueProps: (value) => ({ checked: value === 1 })
        },
        /* @__PURE__ */ import_react4.default.createElement(import_antd2.Switch, { checkedChildren: "上架", unCheckedChildren: "下架", disabled: isViewMode })
      )), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 8 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "newStatus",
          label: "新品状态",
          valuePropName: "checked",
          getValueFromEvent: (checked) => checked ? 1 : 0,
          getValueProps: (value) => ({ checked: value === 1 })
        },
        /* @__PURE__ */ import_react4.default.createElement(import_antd2.Switch, { checkedChildren: "是", unCheckedChildren: "否", disabled: isViewMode })
      )), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 8 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "recommandStatus",
          label: "推荐状态",
          valuePropName: "checked",
          getValueFromEvent: (checked) => checked ? 1 : 0,
          getValueProps: (value) => ({ checked: value === 1 })
        },
        /* @__PURE__ */ import_react4.default.createElement(import_antd2.Switch, { checkedChildren: "是", unCheckedChildren: "否", disabled: isViewMode })
      ))),
      /* @__PURE__ */ import_react4.default.createElement(import_antd2.Row, { gutter: 16, key: "status-row-2" }, /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 12 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "verifyStatus",
          label: "审核状态",
          valuePropName: "checked",
          getValueFromEvent: (checked) => checked ? 1 : 0,
          getValueProps: (value) => ({ checked: value === 1 })
        },
        /* @__PURE__ */ import_react4.default.createElement(import_antd2.Switch, { checkedChildren: "已审核", unCheckedChildren: "未审核", disabled: isViewMode })
      )), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Col, { span: 12 }, /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          name: "deleteStatus",
          label: "删除状态",
          valuePropName: "checked",
          getValueFromEvent: (checked) => checked ? 1 : 0,
          getValueProps: (value) => ({ checked: value === 1 })
        },
        /* @__PURE__ */ import_react4.default.createElement(import_antd2.Switch, { checkedChildren: "已删除", unCheckedChildren: "正常", disabled: isViewMode })
      )))
    ];
    const descriptionItems = [
      /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          key: "description",
          name: "description",
          label: "商品描述"
        },
        /* @__PURE__ */ import_react4.default.createElement(import_antd2.Input.TextArea, { rows: 4, placeholder: "请输入商品描述", disabled: isViewMode })
      ),
      /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Form.Item,
        {
          key: "note",
          name: "note",
          label: "备注"
        },
        /* @__PURE__ */ import_react4.default.createElement(import_antd2.Input.TextArea, { rows: 2, placeholder: "请输入备注", disabled: isViewMode })
      )
    ];
    const tabItems = [
      {
        key: "basic",
        label: "基本信息",
        children: showBasicInfo ? basicInfoItems : null
      },
      {
        key: "price",
        label: "价格信息",
        children: showPriceInfo ? priceInfoItems : null
      },
      {
        key: "stock",
        label: "库存信息",
        children: showStockInfo ? stockInfoItems : null
      },
      {
        key: "status",
        label: "状态信息",
        children: showStatusInfo ? statusInfoItems : null
      },
      {
        key: "description",
        label: "描述信息",
        children: showDescription ? descriptionItems : null
      }
    ];
    return /* @__PURE__ */ import_react4.default.createElement("div", { className: `mall-product-form ${className || ""}`, style }, /* @__PURE__ */ import_react4.default.createElement(import_antd2.Card, null, /* @__PURE__ */ import_react4.default.createElement(
      import_antd2.Form,
      {
        form,
        layout: "vertical",
        initialValues: getParsedInitialValues(),
        disabled: isViewMode
      },
      /* @__PURE__ */ import_react4.default.createElement(
        import_antd2.Tabs,
        {
          activeKey: activeTab,
          onChange: setActiveTab,
          items: tabItems
        }
      ),
      /* @__PURE__ */ import_react4.default.createElement(import_antd2.Divider, null),
      /* @__PURE__ */ import_react4.default.createElement(import_antd2.Form.Item, null, /* @__PURE__ */ import_react4.default.createElement(import_antd2.Space, null, !isViewMode && /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(import_antd2.Button, { type: "primary", onClick: handleSubmit }, mode === "create" ? "创建" : "保存"), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Button, { onClick: handleReset }, "重置")), /* @__PURE__ */ import_react4.default.createElement(import_antd2.Button, { onClick: handleCancel }, isViewMode ? "关闭" : "取消")))
    )));
  };
  var ProductForm_default = ProductForm;

  // src/plugins/plugin-mall-components/components/ProductForm/index.ts
  var ProductForm_default2 = ProductForm_default;

  // src/plugins/plugin-mall-components/components/OrderList/OrderList.tsx
  var import_react5 = __toESM(require_react());
  var import_antd3 = __toESM(require_antd());

  // src/plugins/plugin-mall-components/types/order.ts
  var ORDER_STATUS = {
    PENDING_PAYMENT: 0,
    PENDING_DELIVERY: 1,
    DELIVERED: 2,
    COMPLETED: 3,
    CLOSED: 4,
    INVALID: 5
  };
  var PAY_TYPE = {
    UNPAID: 0,
    ALIPAY: 1,
    WECHAT: 2
  };
  var SOURCE_TYPE = {
    PC: 0,
    APP: 1
  };
  var ORDER_TYPE = {
    NORMAL: 0,
    SECKILL: 1
  };
  var ORDER_STATUS_OPTIONS = [
    { label: "待付款", value: ORDER_STATUS.PENDING_PAYMENT },
    { label: "待发货", value: ORDER_STATUS.PENDING_DELIVERY },
    { label: "已发货", value: ORDER_STATUS.DELIVERED },
    { label: "已完成", value: ORDER_STATUS.COMPLETED },
    { label: "已关闭", value: ORDER_STATUS.CLOSED }
  ];
  var PAY_TYPE_OPTIONS = [
    { label: "未支付", value: PAY_TYPE.UNPAID },
    { label: "支付宝", value: PAY_TYPE.ALIPAY },
    { label: "微信", value: PAY_TYPE.WECHAT }
  ];
  var SOURCE_TYPE_OPTIONS = [
    { label: "PC订单", value: SOURCE_TYPE.PC },
    { label: "APP订单", value: SOURCE_TYPE.APP }
  ];
  var ORDER_TYPE_OPTIONS = [
    { label: "正常订单", value: ORDER_TYPE.NORMAL },
    { label: "秒杀订单", value: ORDER_TYPE.SECKILL }
  ];

  // src/plugins/plugin-mall-components/components/OrderList/OrderList.tsx
  var { RangePicker } = import_antd3.DatePicker;
  var OrderList = ({
    dataSource,
    showFilter = true,
    showStatusFilter = true,
    showSearch = true,
    showDatePicker = true,
    showActions = true,
    showBatchOperations = true,
    showExport = true,
    defaultPageSize = 10,
    onRowClick,
    onSearch,
    onPageChange,
    onActionClick,
    onBatchOperation,
    style,
    className
  }) => {
    const [loading, setLoading] = (0, import_react5.useState)(false);
    const [data, setData] = (0, import_react5.useState)([]);
    const [total, setTotal] = (0, import_react5.useState)(0);
    const [currentPage, setCurrentPage] = (0, import_react5.useState)(1);
    const [pageSize, setPageSize] = (0, import_react5.useState)(defaultPageSize);
    const [searchText, setSearchText] = (0, import_react5.useState)("");
    const [selectedRowKeys, setSelectedRowKeys] = (0, import_react5.useState)([]);
    const [selectedRows, setSelectedRows] = (0, import_react5.useState)([]);
    const [batchOperation, setBatchOperation] = (0, import_react5.useState)();
    const [filterStatus, setFilterStatus] = (0, import_react5.useState)();
    const [filterOrderType, setFilterOrderType] = (0, import_react5.useState)();
    const [filterSourceType, setFilterSourceType] = (0, import_react5.useState)();
    const [dateRange, setDateRange] = (0, import_react5.useState)();
    const [detailVisible, setDetailVisible] = (0, import_react5.useState)(false);
    const [currentOrder, setCurrentOrder] = (0, import_react5.useState)();
    const [deliveryVisible, setDeliveryVisible] = (0, import_react5.useState)(false);
    const [deliveryOrder, setDeliveryOrder] = (0, import_react5.useState)();
    const [deliveryCompany, setDeliveryCompany] = (0, import_react5.useState)("");
    const [deliverySn, setDeliverySn] = (0, import_react5.useState)("");
    const defaultMockDataObj = {
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
            payType: PAY_TYPE.ALIPAY,
            sourceType: SOURCE_TYPE.PC,
            status: ORDER_STATUS.PENDING_DELIVERY,
            orderType: ORDER_TYPE.NORMAL,
            receiverName: "张三",
            receiverPhone: "13800138000",
            receiverProvince: "北京市",
            receiverCity: "北京市",
            receiverRegion: "朝阳区",
            receiverDetailAddress: "某某街道某某小区1号楼",
            createTime: "2024-01-01 10:00:00",
            paymentTime: "2024-01-01 10:05:00",
            deliveryTime: "",
            receiveTime: "",
            commentTime: "",
            promotionInfo: "满减优惠"
          },
          {
            id: 2,
            orderSn: "202401010002",
            memberUsername: "user002",
            totalAmount: 1299,
            payAmount: 1299,
            freightAmount: 0,
            discountAmount: 0,
            payType: PAY_TYPE.WECHAT,
            sourceType: SOURCE_TYPE.APP,
            status: ORDER_STATUS.DELIVERED,
            orderType: ORDER_TYPE.NORMAL,
            receiverName: "李四",
            receiverPhone: "13900139000",
            receiverProvince: "上海市",
            receiverCity: "上海市",
            receiverRegion: "浦东新区",
            receiverDetailAddress: "某某路某某号",
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
            payType: PAY_TYPE.ALIPAY,
            sourceType: SOURCE_TYPE.PC,
            status: ORDER_STATUS.COMPLETED,
            orderType: ORDER_TYPE.NORMAL,
            receiverName: "王五",
            receiverPhone: "13700137000",
            receiverProvince: "广东省",
            receiverCity: "深圳市",
            receiverRegion: "南山区",
            receiverDetailAddress: "某某大厦A座",
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
            payType: PAY_TYPE.UNPAID,
            sourceType: SOURCE_TYPE.APP,
            status: ORDER_STATUS.PENDING_PAYMENT,
            orderType: ORDER_TYPE.SECKILL,
            receiverName: "赵六",
            receiverPhone: "13600136000",
            receiverProvince: "浙江省",
            receiverCity: "杭州市",
            receiverRegion: "西湖区",
            receiverDetailAddress: "某某花园小区",
            createTime: "2024-01-01 13:00:00",
            paymentTime: "",
            deliveryTime: "",
            receiveTime: "",
            commentTime: "",
            promotionInfo: "秒杀活动"
          },
          {
            id: 5,
            orderSn: "202401010005",
            memberUsername: "user005",
            totalAmount: 4599,
            payAmount: 4599,
            freightAmount: 0,
            discountAmount: 0,
            payType: PAY_TYPE.WECHAT,
            sourceType: SOURCE_TYPE.PC,
            status: ORDER_STATUS.CLOSED,
            orderType: ORDER_TYPE.NORMAL,
            receiverName: "孙七",
            receiverPhone: "13500135000",
            receiverProvince: "江苏省",
            receiverCity: "南京市",
            receiverRegion: "鼓楼区",
            receiverDetailAddress: "某某广场B座",
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
    (0, import_react5.useEffect)(() => {
      fetchData();
    }, [currentPage, pageSize]);
    const fetchData = async () => {
      setLoading(true);
      try {
        const adapter = DataSourceAdapterFactory.create({
          type: "mock",
          mockData: defaultMockDataObj
        });
        const params = {
          pageNum: currentPage,
          pageSize,
          orderSn: searchText || void 0,
          status: filterStatus,
          orderType: filterOrderType,
          sourceType: filterSourceType,
          createTime: dateRange ? `${dateRange[0]?.format("YYYY-MM-DD")},${dateRange[1]?.format("YYYY-MM-DD")}` : void 0
        };
        let result;
        if (dataSource) {
          result = await adapter.fetch(params);
        } else {
          result = defaultMockDataObj;
        }
        setData(result.data.list || []);
        setTotal(result.data.total || 0);
      } catch (error) {
        console.error("Failed to fetch order list:", error);
        import_antd3.message.error("获取订单列表失败");
      } finally {
        setLoading(false);
      }
    };
    const handleSearch = () => {
      setCurrentPage(1);
      fetchData();
      onSearch?.({
        orderSn: searchText || void 0,
        status: filterStatus,
        orderType: filterOrderType,
        sourceType: filterSourceType,
        createTime: dateRange ? `${dateRange[0]?.format("YYYY-MM-DD")},${dateRange[1]?.format("YYYY-MM-DD")}` : void 0
      });
    };
    const handleReset = () => {
      setSearchText("");
      setFilterStatus(void 0);
      setFilterOrderType(void 0);
      setFilterSourceType(void 0);
      setDateRange(void 0);
      setCurrentPage(1);
      fetchData();
    };
    const handleExport = () => {
      import_antd3.message.success("导出功能开发中...");
    };
    const handleRefresh = () => {
      fetchData();
    };
    const handleBatchOperation = () => {
      if (!batchOperation) {
        import_antd3.message.warning("请选择批量操作类型");
        return;
      }
      if (selectedRowKeys.length === 0) {
        import_antd3.message.warning("请选择要操作的订单");
        return;
      }
      onBatchOperation?.(batchOperation, selectedRowKeys);
      import_antd3.message.success(`批量${batchOperation}成功`);
      setSelectedRowKeys([]);
      setSelectedRows([]);
      setBatchOperation(void 0);
      fetchData();
    };
    const handleViewDetail = (record) => {
      setCurrentOrder(record);
      setDetailVisible(true);
      onActionClick?.("view", record);
    };
    const handleDeliver = (record) => {
      setDeliveryOrder(record);
      setDeliveryVisible(true);
      onActionClick?.("deliver", record);
    };
    const handleCloseOrder = (record) => {
      import_antd3.Modal.confirm({
        title: "确认关闭订单",
        content: `确定要关闭订单 ${record.orderSn} 吗？`,
        onOk: () => {
          onActionClick?.("close", record);
          import_antd3.message.success("订单已关闭");
          fetchData();
        }
      });
    };
    const handleDeleteOrder = (record) => {
      import_antd3.Modal.confirm({
        title: "确认删除订单",
        content: `确定要删除订单 ${record.orderSn} 吗？`,
        onOk: () => {
          onActionClick?.("delete", record);
          import_antd3.message.success("订单已删除");
          fetchData();
        }
      });
    };
    const handleDeliverySubmit = () => {
      if (!deliveryCompany || !deliverySn) {
        import_antd3.message.warning("请填写物流公司和物流单号");
        return;
      }
      const params = {
        orderId: deliveryOrder.id,
        deliveryCompany,
        deliverySn
      };
      onActionClick?.("deliverSubmit", deliveryOrder);
      import_antd3.message.success("发货成功");
      setDeliveryVisible(false);
      setDeliveryCompany("");
      setDeliverySn("");
      fetchData();
    };
    const getStatusTag = (status) => {
      const statusMap = {
        [ORDER_STATUS.PENDING_PAYMENT]: { color: "orange", text: "待付款" },
        [ORDER_STATUS.PENDING_DELIVERY]: { color: "blue", text: "待发货" },
        [ORDER_STATUS.DELIVERED]: { color: "cyan", text: "已发货" },
        [ORDER_STATUS.COMPLETED]: { color: "green", text: "已完成" },
        [ORDER_STATUS.CLOSED]: { color: "default", text: "已关闭" },
        [ORDER_STATUS.INVALID]: { color: "red", text: "无效订单" }
      };
      const { color, text } = statusMap[status] || { color: "default", text: "未知" };
      return /* @__PURE__ */ import_react5.default.createElement(import_antd3.Tag, { color }, text);
    };
    const getPayTypeTag = (payType) => {
      const payTypeMap = {
        [PAY_TYPE.UNPAID]: { color: "default", text: "未支付" },
        [PAY_TYPE.ALIPAY]: { color: "blue", text: "支付宝" },
        [PAY_TYPE.WECHAT]: { color: "green", text: "微信" }
      };
      const { color, text } = payTypeMap[payType] || { color: "default", text: "未知" };
      return /* @__PURE__ */ import_react5.default.createElement(import_antd3.Tag, { color }, text);
    };
    const getSourceTypeTag = (sourceType) => {
      return sourceType === SOURCE_TYPE.APP ? /* @__PURE__ */ import_react5.default.createElement(import_antd3.Tag, { color: "purple" }, "APP") : /* @__PURE__ */ import_react5.default.createElement(import_antd3.Tag, { color: "geekblue" }, "PC");
    };
    const getOrderTypeTag = (orderType) => {
      return orderType === ORDER_TYPE.SECKILL ? /* @__PURE__ */ import_react5.default.createElement(import_antd3.Tag, { color: "red" }, "秒杀") : /* @__PURE__ */ import_react5.default.createElement(import_antd3.Tag, null, "正常");
    };
    const columns = [
      {
        title: "订单编号",
        dataIndex: "orderSn",
        key: "orderSn",
        width: 180,
        fixed: "left",
        render: (text) => /* @__PURE__ */ import_react5.default.createElement(import_antd3.Tooltip, { title: text }, /* @__PURE__ */ import_react5.default.createElement("span", { className: "order-sn" }, text))
      },
      {
        title: "用户账号",
        dataIndex: "memberUsername",
        key: "memberUsername",
        width: 120
      },
      {
        title: "订单金额",
        dataIndex: "totalAmount",
        key: "totalAmount",
        width: 120,
        render: (amount) => /* @__PURE__ */ import_react5.default.createElement("span", { className: "order-amount" }, "¥", amount.toFixed(2))
      },
      {
        title: "实付金额",
        dataIndex: "payAmount",
        key: "payAmount",
        width: 120,
        render: (amount) => /* @__PURE__ */ import_react5.default.createElement("span", { className: "pay-amount" }, "¥", amount.toFixed(2))
      },
      {
        title: "支付方式",
        dataIndex: "payType",
        key: "payType",
        width: 100,
        render: (payType) => getPayTypeTag(payType)
      },
      {
        title: "订单来源",
        dataIndex: "sourceType",
        key: "sourceType",
        width: 100,
        render: (sourceType) => getSourceTypeTag(sourceType)
      },
      {
        title: "订单类型",
        dataIndex: "orderType",
        key: "orderType",
        width: 100,
        render: (orderType) => getOrderTypeTag(orderType)
      },
      {
        title: "订单状态",
        dataIndex: "status",
        key: "status",
        width: 100,
        render: (status) => getStatusTag(status)
      },
      {
        title: "收货人",
        dataIndex: "receiverName",
        key: "receiverName",
        width: 100
      },
      {
        title: "收货电话",
        dataIndex: "receiverPhone",
        key: "receiverPhone",
        width: 130
      },
      {
        title: "下单时间",
        dataIndex: "createTime",
        key: "createTime",
        width: 180,
        sorter: true
      },
      {
        title: "操作",
        key: "action",
        width: 200,
        fixed: "right",
        render: (_, record) => {
          const menu = /* @__PURE__ */ import_react5.default.createElement(import_antd3.Menu, null, /* @__PURE__ */ import_react5.default.createElement(
            import_antd3.Menu.Item,
            {
              key: "view",
              icon: /* @__PURE__ */ import_react5.default.createElement(EyeOutlined_default2, null),
              onClick: () => handleViewDetail(record)
            },
            "查看详情"
          ), record.status === ORDER_STATUS.PENDING_DELIVERY && /* @__PURE__ */ import_react5.default.createElement(
            import_antd3.Menu.Item,
            {
              key: "deliver",
              icon: /* @__PURE__ */ import_react5.default.createElement(CarOutlined_default2, null),
              onClick: () => handleDeliver(record)
            },
            "发货"
          ), record.status !== ORDER_STATUS.CLOSED && /* @__PURE__ */ import_react5.default.createElement(
            import_antd3.Menu.Item,
            {
              key: "close",
              icon: /* @__PURE__ */ import_react5.default.createElement(CloseCircleOutlined_default2, null),
              onClick: () => handleCloseOrder(record)
            },
            "关闭订单"
          ), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Menu.Divider, null), /* @__PURE__ */ import_react5.default.createElement(
            import_antd3.Menu.Item,
            {
              key: "delete",
              icon: /* @__PURE__ */ import_react5.default.createElement(DeleteOutlined_default2, null),
              danger: true,
              onClick: () => handleDeleteOrder(record)
            },
            "删除订单"
          ));
          return /* @__PURE__ */ import_react5.default.createElement(import_antd3.Space, { size: "small" }, /* @__PURE__ */ import_react5.default.createElement(
            import_antd3.Button,
            {
              type: "link",
              size: "small",
              onClick: () => handleViewDetail(record)
            },
            "详情"
          ), record.status === ORDER_STATUS.PENDING_DELIVERY && /* @__PURE__ */ import_react5.default.createElement(
            import_antd3.Button,
            {
              type: "link",
              size: "small",
              onClick: () => handleDeliver(record)
            },
            "发货"
          ), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Dropdown, { overlay: menu, trigger: ["click"] }, /* @__PURE__ */ import_react5.default.createElement(import_antd3.Button, { type: "link", size: "small", icon: /* @__PURE__ */ import_react5.default.createElement(MoreOutlined_default2, null) })));
        }
      }
    ];
    const rowSelection = {
      selectedRowKeys,
      onChange: (selectedKeys, selectedRows2) => {
        setSelectedRowKeys(selectedKeys);
        setSelectedRows(selectedRows2);
      }
    };
    return /* @__PURE__ */ import_react5.default.createElement("div", { className: `mall-order-list ${className || ""}`, style }, /* @__PURE__ */ import_react5.default.createElement(import_antd3.Card, null, showFilter && /* @__PURE__ */ import_react5.default.createElement("div", { className: "filter-section" }, /* @__PURE__ */ import_react5.default.createElement(import_antd3.Row, { gutter: [16, 16] }, showSearch && /* @__PURE__ */ import_react5.default.createElement(import_antd3.Col, { span: 6 }, /* @__PURE__ */ import_react5.default.createElement(
      import_antd3.Input,
      {
        placeholder: "订单编号",
        value: searchText,
        onChange: (e) => setSearchText(e.target.value),
        onPressEnter: handleSearch,
        prefix: /* @__PURE__ */ import_react5.default.createElement(SearchOutlined_default2, null)
      }
    )), showStatusFilter && /* @__PURE__ */ import_react5.default.createElement(import_antd3.Col, { span: 4 }, /* @__PURE__ */ import_react5.default.createElement(
      import_antd3.Select,
      {
        placeholder: "订单状态",
        value: filterStatus,
        onChange: setFilterStatus,
        style: { width: "100%" },
        allowClear: true
      },
      ORDER_STATUS_OPTIONS.map((option) => /* @__PURE__ */ import_react5.default.createElement(import_antd3.Select.Option, { key: option.value, value: option.value }, option.label))
    )), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Col, { span: 4 }, /* @__PURE__ */ import_react5.default.createElement(
      import_antd3.Select,
      {
        placeholder: "订单类型",
        value: filterOrderType,
        onChange: setFilterOrderType,
        style: { width: "100%" },
        allowClear: true
      },
      ORDER_TYPE_OPTIONS.map((option) => /* @__PURE__ */ import_react5.default.createElement(import_antd3.Select.Option, { key: option.value, value: option.value }, option.label))
    )), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Col, { span: 4 }, /* @__PURE__ */ import_react5.default.createElement(
      import_antd3.Select,
      {
        placeholder: "订单来源",
        value: filterSourceType,
        onChange: setFilterSourceType,
        style: { width: "100%" },
        allowClear: true
      },
      SOURCE_TYPE_OPTIONS.map((option) => /* @__PURE__ */ import_react5.default.createElement(import_antd3.Select.Option, { key: option.value, value: option.value }, option.label))
    )), showDatePicker && /* @__PURE__ */ import_react5.default.createElement(import_antd3.Col, { span: 6 }, /* @__PURE__ */ import_react5.default.createElement(
      RangePicker,
      {
        value: dateRange,
        onChange: setDateRange,
        style: { width: "100%" }
      }
    ))), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Row, { gutter: [16, 16], style: { marginTop: 16 } }, /* @__PURE__ */ import_react5.default.createElement(import_antd3.Col, null, /* @__PURE__ */ import_react5.default.createElement(import_antd3.Space, null, /* @__PURE__ */ import_react5.default.createElement(import_antd3.Button, { type: "primary", onClick: handleSearch }, "查询"), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Button, { onClick: handleReset }, "重置"))))), showBatchOperations && /* @__PURE__ */ import_react5.default.createElement("div", { className: "batch-operation-section" }, /* @__PURE__ */ import_react5.default.createElement(import_antd3.Space, null, /* @__PURE__ */ import_react5.default.createElement(
      import_antd3.Select,
      {
        placeholder: "批量操作",
        value: batchOperation,
        onChange: setBatchOperation,
        style: { width: 150 },
        allowClear: true
      },
      /* @__PURE__ */ import_react5.default.createElement(import_antd3.Select.Option, { value: "deliver" }, "批量发货"),
      /* @__PURE__ */ import_react5.default.createElement(import_antd3.Select.Option, { value: "close" }, "关闭订单"),
      /* @__PURE__ */ import_react5.default.createElement(import_antd3.Select.Option, { value: "delete" }, "删除订单")
    ), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Button, { onClick: handleBatchOperation }, "确定")), selectedRowKeys.length > 0 && /* @__PURE__ */ import_react5.default.createElement("span", { className: "selected-info" }, "已选择 ", /* @__PURE__ */ import_react5.default.createElement("strong", null, selectedRowKeys.length), " 项")), showActions && /* @__PURE__ */ import_react5.default.createElement("div", { className: "action-section" }, /* @__PURE__ */ import_react5.default.createElement(import_antd3.Space, null, /* @__PURE__ */ import_react5.default.createElement(import_antd3.Button, { icon: /* @__PURE__ */ import_react5.default.createElement(ReloadOutlined_default2, null), onClick: handleRefresh }, "刷新"), showExport && /* @__PURE__ */ import_react5.default.createElement(import_antd3.Button, { icon: /* @__PURE__ */ import_react5.default.createElement(ExportOutlined_default2, null), onClick: handleExport }, "导出"))), /* @__PURE__ */ import_react5.default.createElement(
      import_antd3.Table,
      {
        columns,
        dataSource: data,
        rowKey: "id",
        loading,
        pagination: {
          current: currentPage,
          pageSize,
          total,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total2) => `共 ${total2} 条`,
          onChange: (page, pageSize2) => {
            setCurrentPage(page);
            setPageSize(pageSize2);
            onPageChange?.(page, pageSize2);
          }
        },
        rowSelection,
        scroll: { x: 1500 },
        onRow: (record) => ({
          onClick: () => onRowClick?.(record)
        })
      }
    )), /* @__PURE__ */ import_react5.default.createElement(
      import_antd3.Modal,
      {
        title: "订单详情",
        visible: detailVisible,
        onCancel: () => setDetailVisible(false),
        footer: null,
        width: 800
      },
      currentOrder && /* @__PURE__ */ import_react5.default.createElement(import_antd3.Descriptions, { bordered: true, column: 2 }, /* @__PURE__ */ import_react5.default.createElement(import_antd3.Descriptions.Item, { label: "订单编号" }, currentOrder.orderSn), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Descriptions.Item, { label: "用户账号" }, currentOrder.memberUsername), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Descriptions.Item, { label: "订单金额" }, "¥", currentOrder.totalAmount.toFixed(2)), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Descriptions.Item, { label: "实付金额" }, "¥", currentOrder.payAmount.toFixed(2)), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Descriptions.Item, { label: "运费" }, "¥", currentOrder.freightAmount.toFixed(2)), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Descriptions.Item, { label: "优惠金额" }, "¥", currentOrder.discountAmount.toFixed(2)), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Descriptions.Item, { label: "支付方式" }, getPayTypeTag(currentOrder.payType)), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Descriptions.Item, { label: "订单状态" }, getStatusTag(currentOrder.status)), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Descriptions.Item, { label: "收货人" }, currentOrder.receiverName), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Descriptions.Item, { label: "收货电话" }, currentOrder.receiverPhone), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Descriptions.Item, { label: "收货地址", span: 2 }, currentOrder.receiverProvince, currentOrder.receiverCity, currentOrder.receiverRegion, currentOrder.receiverDetailAddress), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Descriptions.Item, { label: "下单时间" }, currentOrder.createTime), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Descriptions.Item, { label: "支付时间" }, currentOrder.paymentTime || "-"), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Descriptions.Item, { label: "发货时间" }, currentOrder.deliveryTime || "-"), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Descriptions.Item, { label: "完成时间" }, currentOrder.receiveTime || "-"), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Descriptions.Item, { label: "订单备注", span: 2 }, currentOrder.note || "-"))
    ), /* @__PURE__ */ import_react5.default.createElement(
      import_antd3.Modal,
      {
        title: "订单发货",
        visible: deliveryVisible,
        onOk: handleDeliverySubmit,
        onCancel: () => setDeliveryVisible(false)
      },
      /* @__PURE__ */ import_react5.default.createElement(import_antd3.Form, { layout: "vertical" }, /* @__PURE__ */ import_react5.default.createElement(import_antd3.Form.Item, { label: "物流公司", required: true }, /* @__PURE__ */ import_react5.default.createElement(
        import_antd3.Select,
        {
          value: deliveryCompany,
          onChange: setDeliveryCompany,
          placeholder: "请选择物流公司"
        },
        /* @__PURE__ */ import_react5.default.createElement(import_antd3.Select.Option, { value: "顺丰速运" }, "顺丰速运"),
        /* @__PURE__ */ import_react5.default.createElement(import_antd3.Select.Option, { value: "圆通快递" }, "圆通快递"),
        /* @__PURE__ */ import_react5.default.createElement(import_antd3.Select.Option, { value: "中通快递" }, "中通快递"),
        /* @__PURE__ */ import_react5.default.createElement(import_antd3.Select.Option, { value: "韵达快递" }, "韵达快递"),
        /* @__PURE__ */ import_react5.default.createElement(import_antd3.Select.Option, { value: "申通快递" }, "申通快递"),
        /* @__PURE__ */ import_react5.default.createElement(import_antd3.Select.Option, { value: "邮政EMS" }, "邮政EMS")
      )), /* @__PURE__ */ import_react5.default.createElement(import_antd3.Form.Item, { label: "物流单号", required: true }, /* @__PURE__ */ import_react5.default.createElement(
        import_antd3.Input,
        {
          value: deliverySn,
          onChange: (e) => setDeliverySn(e.target.value),
          placeholder: "请输入物流单号"
        }
      )))
    ));
  };
  var OrderList_default = OrderList;

  // src/plugins/plugin-mall-components/components/OrderForm/OrderForm.tsx
  var import_react6 = __toESM(require_react());
  var import_antd4 = __toESM(require_antd());
  var { TextArea } = import_antd4.Input;
  var OrderForm = ({
    initialValues,
    mode = "create",
    showBasicInfo = true,
    showReceiverInfo = true,
    showMoneyInfo = true,
    showOrderItems = true,
    showStatusInfo = true,
    onSubmit,
    onCancel,
    style,
    className
  }) => {
    const [form] = import_antd4.Form.useForm();
    const [activeTab, setActiveTab] = (0, import_react6.useState)("basic");
    const [orderItems, setOrderItems] = (0, import_react6.useState)([]);
    (0, import_react6.useEffect)(() => {
      if (initialValues) {
        let parsedValues = initialValues;
        if (typeof initialValues === "string") {
          try {
            parsedValues = JSON.parse(initialValues);
          } catch (e) {
            console.error("Failed to parse initialValues:", e);
            parsedValues = {};
          }
        }
        form.setFieldsValue(parsedValues);
        if (parsedValues.orderItemList) {
          setOrderItems(parsedValues.orderItemList);
        }
      }
    }, [initialValues, form]);
    const handleSubmit = async () => {
      try {
        const values = await form.validateFields();
        onSubmit?.(values);
        import_antd4.message.success("提交成功");
      } catch (error) {
        console.error("Validation failed:", error);
        import_antd4.message.error("请检查表单填写是否正确");
      }
    };
    const handleCancel = () => {
      form.resetFields();
      onCancel?.();
    };
    const handleReset = () => {
      form.resetFields();
    };
    const getParsedInitialValues = () => {
      if (typeof initialValues === "string") {
        try {
          return JSON.parse(initialValues);
        } catch (e) {
          return {};
        }
      }
      return initialValues || {};
    };
    const isViewMode = mode === "view";
    const getStatusTag = (status) => {
      const statusMap = {
        [ORDER_STATUS.PENDING_PAYMENT]: { color: "orange", text: "待付款" },
        [ORDER_STATUS.PENDING_DELIVERY]: { color: "blue", text: "待发货" },
        [ORDER_STATUS.DELIVERED]: { color: "cyan", text: "已发货" },
        [ORDER_STATUS.COMPLETED]: { color: "green", text: "已完成" },
        [ORDER_STATUS.CLOSED]: { color: "default", text: "已关闭" },
        [ORDER_STATUS.INVALID]: { color: "red", text: "无效订单" }
      };
      const { color, text } = statusMap[status] || { color: "default", text: "未知" };
      return /* @__PURE__ */ import_react6.default.createElement(import_antd4.Tag, { color }, text);
    };
    const orderItemColumns = [
      {
        title: "商品图片",
        dataIndex: "productPic",
        key: "productPic",
        width: 80,
        render: (pic) => /* @__PURE__ */ import_react6.default.createElement("img", { src: pic, alt: "商品图片", style: { width: 50, height: 50, objectFit: "cover" } })
      },
      {
        title: "商品名称",
        dataIndex: "productName",
        key: "productName",
        width: 200
      },
      {
        title: "商品货号",
        dataIndex: "productSn",
        key: "productSn",
        width: 120
      },
      {
        title: "商品品牌",
        dataIndex: "productBrand",
        key: "productBrand",
        width: 100
      },
      {
        title: "销售价格",
        dataIndex: "productPrice",
        key: "productPrice",
        width: 100,
        render: (price) => `¥${price.toFixed(2)}`
      },
      {
        title: "购买数量",
        dataIndex: "productQuantity",
        key: "productQuantity",
        width: 100
      },
      {
        title: "小计",
        key: "subtotal",
        width: 100,
        render: (_, record) => `¥${(record.productPrice * record.productQuantity).toFixed(2)}`
      }
    ];
    const basicInfoItems = [
      /* @__PURE__ */ import_react6.default.createElement(import_antd4.Row, { gutter: 16, key: "basic-row-1" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 12 }, /* @__PURE__ */ import_react6.default.createElement(
        import_antd4.Form.Item,
        {
          name: "orderSn",
          label: "订单编号",
          rules: [{ required: true, message: "请输入订单编号" }]
        },
        /* @__PURE__ */ import_react6.default.createElement(import_antd4.Input, { placeholder: "请输入订单编号", disabled: isViewMode })
      )), /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 12 }, /* @__PURE__ */ import_react6.default.createElement(
        import_antd4.Form.Item,
        {
          name: "memberUsername",
          label: "用户账号",
          rules: [{ required: true, message: "请输入用户账号" }]
        },
        /* @__PURE__ */ import_react6.default.createElement(import_antd4.Input, { placeholder: "请输入用户账号", disabled: isViewMode })
      ))),
      /* @__PURE__ */ import_react6.default.createElement(import_antd4.Row, { gutter: 16, key: "basic-row-2" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 8 }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { name: "payType", label: "支付方式", rules: [{ required: true }] }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Select, { placeholder: "请选择支付方式", disabled: isViewMode }, PAY_TYPE_OPTIONS.map((option) => /* @__PURE__ */ import_react6.default.createElement(import_antd4.Select.Option, { key: option.value, value: option.value }, option.label))))), /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 8 }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { name: "sourceType", label: "订单来源", rules: [{ required: true }] }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Select, { placeholder: "请选择订单来源", disabled: isViewMode }, SOURCE_TYPE_OPTIONS.map((option) => /* @__PURE__ */ import_react6.default.createElement(import_antd4.Select.Option, { key: option.value, value: option.value }, option.label))))), /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 8 }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { name: "orderType", label: "订单类型", rules: [{ required: true }] }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Select, { placeholder: "请选择订单类型", disabled: isViewMode }, ORDER_TYPE_OPTIONS.map((option) => /* @__PURE__ */ import_react6.default.createElement(import_antd4.Select.Option, { key: option.value, value: option.value }, option.label)))))),
      /* @__PURE__ */ import_react6.default.createElement(import_antd4.Row, { gutter: 16, key: "basic-row-3" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 12 }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { name: "createTime", label: "下单时间" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Input, { placeholder: "下单时间", disabled: true }))), /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 12 }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { name: "paymentTime", label: "支付时间" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Input, { placeholder: "支付时间", disabled: true }))))
    ];
    const receiverInfoItems = [
      /* @__PURE__ */ import_react6.default.createElement(import_antd4.Row, { gutter: 16, key: "receiver-row-1" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 12 }, /* @__PURE__ */ import_react6.default.createElement(
        import_antd4.Form.Item,
        {
          name: "receiverName",
          label: "收货人姓名",
          rules: [{ required: true, message: "请输入收货人姓名" }]
        },
        /* @__PURE__ */ import_react6.default.createElement(import_antd4.Input, { placeholder: "请输入收货人姓名", disabled: isViewMode })
      )), /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 12 }, /* @__PURE__ */ import_react6.default.createElement(
        import_antd4.Form.Item,
        {
          name: "receiverPhone",
          label: "收货人电话",
          rules: [{ required: true, message: "请输入收货人电话" }]
        },
        /* @__PURE__ */ import_react6.default.createElement(import_antd4.Input, { placeholder: "请输入收货人电话", disabled: isViewMode })
      ))),
      /* @__PURE__ */ import_react6.default.createElement(import_antd4.Row, { gutter: 16, key: "receiver-row-2" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 8 }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { name: "receiverProvince", label: "省份" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Input, { placeholder: "省份", disabled: isViewMode }))), /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 8 }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { name: "receiverCity", label: "城市" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Input, { placeholder: "城市", disabled: isViewMode }))), /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 8 }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { name: "receiverRegion", label: "区" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Input, { placeholder: "区", disabled: isViewMode })))),
      /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { key: "receiverDetailAddress", name: "receiverDetailAddress", label: "详细地址" }, /* @__PURE__ */ import_react6.default.createElement(TextArea, { rows: 2, placeholder: "请输入详细地址", disabled: isViewMode })),
      /* @__PURE__ */ import_react6.default.createElement(import_antd4.Row, { gutter: 16, key: "receiver-row-3" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 12 }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { name: "deliveryCompany", label: "物流公司" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Input, { placeholder: "物流公司", disabled: isViewMode }))), /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 12 }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { name: "deliverySn", label: "物流单号" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Input, { placeholder: "物流单号", disabled: isViewMode }))))
    ];
    const moneyInfoItems = [
      /* @__PURE__ */ import_react6.default.createElement(import_antd4.Row, { gutter: 16, key: "money-row-1" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 8 }, /* @__PURE__ */ import_react6.default.createElement(
        import_antd4.Form.Item,
        {
          name: "totalAmount",
          label: "订单总金额",
          rules: [{ required: true, message: "请输入订单总金额" }]
        },
        /* @__PURE__ */ import_react6.default.createElement(
          import_antd4.InputNumber,
          {
            placeholder: "订单总金额",
            style: { width: "100%" },
            min: 0,
            precision: 2,
            prefix: "¥",
            disabled: isViewMode
          }
        )
      )), /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 8 }, /* @__PURE__ */ import_react6.default.createElement(
        import_antd4.Form.Item,
        {
          name: "payAmount",
          label: "实付金额",
          rules: [{ required: true, message: "请输入实付金额" }]
        },
        /* @__PURE__ */ import_react6.default.createElement(
          import_antd4.InputNumber,
          {
            placeholder: "实付金额",
            style: { width: "100%" },
            min: 0,
            precision: 2,
            prefix: "¥",
            disabled: isViewMode
          }
        )
      )), /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 8 }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { name: "freightAmount", label: "运费金额" }, /* @__PURE__ */ import_react6.default.createElement(
        import_antd4.InputNumber,
        {
          placeholder: "运费金额",
          style: { width: "100%" },
          min: 0,
          precision: 2,
          prefix: "¥",
          disabled: isViewMode
        }
      )))),
      /* @__PURE__ */ import_react6.default.createElement(import_antd4.Row, { gutter: 16, key: "money-row-2" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 8 }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { name: "discountAmount", label: "折扣金额" }, /* @__PURE__ */ import_react6.default.createElement(
        import_antd4.InputNumber,
        {
          placeholder: "折扣金额",
          style: { width: "100%" },
          min: 0,
          precision: 2,
          prefix: "¥",
          disabled: isViewMode
        }
      ))), /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 8 }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { name: "promotionAmount", label: "促销优惠" }, /* @__PURE__ */ import_react6.default.createElement(
        import_antd4.InputNumber,
        {
          placeholder: "促销优惠",
          style: { width: "100%" },
          min: 0,
          precision: 2,
          prefix: "¥",
          disabled: isViewMode
        }
      ))), /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 8 }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { name: "couponAmount", label: "优惠券抵扣" }, /* @__PURE__ */ import_react6.default.createElement(
        import_antd4.InputNumber,
        {
          placeholder: "优惠券抵扣",
          style: { width: "100%" },
          min: 0,
          precision: 2,
          prefix: "¥",
          disabled: isViewMode
        }
      ))))
    ];
    const statusInfoItems = [
      /* @__PURE__ */ import_react6.default.createElement(import_antd4.Row, { gutter: 16, key: "status-row-1" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 12 }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { name: "status", label: "订单状态", rules: [{ required: true }] }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Select, { placeholder: "请选择订单状态", disabled: isViewMode }, ORDER_STATUS_OPTIONS.map((option) => /* @__PURE__ */ import_react6.default.createElement(import_antd4.Select.Option, { key: option.value, value: option.value }, option.label))))), /* @__PURE__ */ import_react6.default.createElement(import_antd4.Col, { span: 12 }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { name: "confirmStatus", label: "确认收货状态" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Select, { placeholder: "请选择确认收货状态", disabled: isViewMode }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Select.Option, { value: 0 }, "未确认"), /* @__PURE__ */ import_react6.default.createElement(import_antd4.Select.Option, { value: 1 }, "已确认"))))),
      /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { key: "promotionInfo", name: "promotionInfo", label: "活动信息" }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Input, { placeholder: "活动信息", disabled: isViewMode })),
      /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, { key: "note", name: "note", label: "订单备注" }, /* @__PURE__ */ import_react6.default.createElement(TextArea, { rows: 3, placeholder: "请输入订单备注", disabled: isViewMode }))
    ];
    const tabItems = [
      {
        key: "basic",
        label: "基本信息",
        children: showBasicInfo ? basicInfoItems : null
      },
      {
        key: "receiver",
        label: "收货信息",
        children: showReceiverInfo ? receiverInfoItems : null
      },
      {
        key: "money",
        label: "费用信息",
        children: showMoneyInfo ? moneyInfoItems : null
      },
      {
        key: "items",
        label: "商品信息",
        children: showOrderItems ? /* @__PURE__ */ import_react6.default.createElement(
          import_antd4.Table,
          {
            columns: orderItemColumns,
            dataSource: orderItems,
            rowKey: "id",
            pagination: false,
            scroll: { x: 900 }
          }
        ) : null
      },
      {
        key: "status",
        label: "状态信息",
        children: showStatusInfo ? statusInfoItems : null
      }
    ];
    return /* @__PURE__ */ import_react6.default.createElement("div", { className: `mall-order-form ${className || ""}`, style }, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Card, null, /* @__PURE__ */ import_react6.default.createElement(
      import_antd4.Form,
      {
        form,
        layout: "vertical",
        initialValues: getParsedInitialValues(),
        disabled: isViewMode
      },
      /* @__PURE__ */ import_react6.default.createElement(import_antd4.Tabs, { activeKey: activeTab, onChange: setActiveTab, items: tabItems }),
      /* @__PURE__ */ import_react6.default.createElement(import_antd4.Divider, null),
      /* @__PURE__ */ import_react6.default.createElement(import_antd4.Form.Item, null, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Space, null, !isViewMode && /* @__PURE__ */ import_react6.default.createElement(import_react6.default.Fragment, null, /* @__PURE__ */ import_react6.default.createElement(import_antd4.Button, { type: "primary", onClick: handleSubmit }, mode === "create" ? "创建" : "保存"), /* @__PURE__ */ import_react6.default.createElement(import_antd4.Button, { onClick: handleReset }, "重置")), /* @__PURE__ */ import_react6.default.createElement(import_antd4.Button, { onClick: handleCancel }, isViewMode ? "关闭" : "取消")))
    )));
  };
  var OrderForm_default = OrderForm;

  // src/plugins/plugin-mall-components/components/CouponCard/CouponCard.tsx
  var import_react7 = __toESM(require_react());
  var import_antd5 = __toESM(require_antd());

  // src/plugins/plugin-mall-components/types/marketing.ts
  var COUPON_TYPE = {
    FULL_REDUCTION: 0,
    DISCOUNT: 1
  };
  var COUPON_PLATFORM = {
    ALL: 0,
    MOBILE: 1,
    PC: 2,
    APP: 3
  };
  var COUPON_USE_TYPE = {
    ALL: 0,
    CATEGORY: 1,
    PRODUCT: 2
  };
  var COUPON_TYPE_OPTIONS = [
    { label: "满减券", value: COUPON_TYPE.FULL_REDUCTION },
    { label: "折扣券", value: COUPON_TYPE.DISCOUNT }
  ];
  var COUPON_PLATFORM_OPTIONS = [
    { label: "全平台", value: COUPON_PLATFORM.ALL },
    { label: "移动端", value: COUPON_PLATFORM.MOBILE },
    { label: "PC端", value: COUPON_PLATFORM.PC },
    { label: "APP端", value: COUPON_PLATFORM.APP }
  ];
  var COUPON_USE_TYPE_OPTIONS = [
    { label: "全场通用", value: COUPON_USE_TYPE.ALL },
    { label: "指定分类", value: COUPON_USE_TYPE.CATEGORY },
    { label: "指定商品", value: COUPON_USE_TYPE.PRODUCT }
  ];
  var PROMOTION_STATUS = {
    ENABLED: 1,
    DISABLED: 0
  };
  var PROMOTION_STATUS_OPTIONS = [
    { label: "启用", value: PROMOTION_STATUS.ENABLED },
    { label: "禁用", value: PROMOTION_STATUS.DISABLED }
  ];

  // src/plugins/plugin-mall-components/components/CouponCard/CouponCard.tsx
  var { RangePicker: RangePicker2 } = import_antd5.DatePicker;
  var CouponCard = ({
    dataSource,
    showCreateButton = true,
    showFilter = true,
    showStatistics = true,
    onCreateCoupon,
    onEditCoupon,
    onDeleteCoupon,
    style,
    className
  }) => {
    const [loading, setLoading] = (0, import_react7.useState)(false);
    const [data, setData] = (0, import_react7.useState)([]);
    const [total, setTotal] = (0, import_react7.useState)(0);
    const [currentPage, setCurrentPage] = (0, import_react7.useState)(1);
    const [pageSize, setPageSize] = (0, import_react7.useState)(10);
    const [filterName, setFilterName] = (0, import_react7.useState)("");
    const [filterType, setFilterType] = (0, import_react7.useState)();
    const [filterPlatform, setFilterPlatform] = (0, import_react7.useState)();
    const [modalVisible, setModalVisible] = (0, import_react7.useState)(false);
    const [editingCoupon, setEditingCoupon] = (0, import_react7.useState)(null);
    const [form] = import_antd5.Form.useForm();
    const mockData = [
      {
        id: 1,
        name: "新用户专享券",
        type: COUPON_TYPE.FULL_REDUCTION,
        platform: COUPON_PLATFORM.ALL,
        count: 1e3,
        amount: 50,
        perLimit: 1,
        minPoint: 200,
        startTime: "2024-01-01",
        endTime: "2024-12-31",
        useType: COUPON_USE_TYPE.ALL,
        note: "新用户首单满200减50",
        publishCount: 500,
        useCount: 320,
        receiveCount: 450,
        enableTime: "7",
        code: "NEWUSER50",
        memberLevel: 0
      },
      {
        id: 2,
        name: "限时折扣券",
        type: COUPON_TYPE.DISCOUNT,
        platform: COUPON_PLATFORM.APP,
        count: 500,
        amount: 8,
        perLimit: 2,
        minPoint: 100,
        startTime: "2024-01-15",
        endTime: "2024-02-15",
        useType: COUPON_USE_TYPE.CATEGORY,
        note: "APP专享8折券",
        publishCount: 300,
        useCount: 180,
        receiveCount: 280,
        enableTime: "3",
        code: "APPDISCOUNT",
        memberLevel: 1
      },
      {
        id: 3,
        name: "会员专享券",
        type: COUPON_TYPE.FULL_REDUCTION,
        platform: COUPON_PLATFORM.ALL,
        count: 200,
        amount: 100,
        perLimit: 1,
        minPoint: 500,
        startTime: "2024-01-01",
        endTime: "2024-06-30",
        useType: COUPON_USE_TYPE.PRODUCT,
        note: "会员专享满500减100",
        publishCount: 150,
        useCount: 80,
        receiveCount: 120,
        enableTime: "15",
        code: "VIP100",
        memberLevel: 2
      }
    ];
    (0, import_react7.useEffect)(() => {
      fetchData();
    }, [currentPage, pageSize]);
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        let filtered = [...mockData];
        if (filterName) {
          filtered = filtered.filter(
            (item) => item.name.toLowerCase().includes(filterName.toLowerCase())
          );
        }
        if (filterType !== void 0) {
          filtered = filtered.filter((item) => item.type === filterType);
        }
        if (filterPlatform !== void 0) {
          filtered = filtered.filter((item) => item.platform === filterPlatform);
        }
        setData(filtered);
        setTotal(filtered.length);
      } catch (error) {
        console.error("Failed to fetch coupon list:", error);
        import_antd5.message.error("获取优惠券列表失败");
      } finally {
        setLoading(false);
      }
    };
    const handleSearch = () => {
      setCurrentPage(1);
      fetchData();
    };
    const handleReset = () => {
      setFilterName("");
      setFilterType(void 0);
      setFilterPlatform(void 0);
      setCurrentPage(1);
      fetchData();
    };
    const handleCreate = () => {
      setEditingCoupon(null);
      form.resetFields();
      setModalVisible(true);
    };
    const handleEdit = (record) => {
      setEditingCoupon(record);
      form.setFieldsValue({
        ...record,
        dateRange: [record.startTime, record.endTime]
      });
      setModalVisible(true);
    };
    const handleDelete = (id) => {
      import_antd5.Modal.confirm({
        title: "确认删除",
        content: "确定要删除该优惠券吗？",
        onOk: () => {
          onDeleteCoupon?.(id);
          import_antd5.message.success("删除成功");
          fetchData();
        }
      });
    };
    const handleSubmit = async () => {
      try {
        const values = await form.validateFields();
        const couponData = {
          ...values,
          startTime: values.dateRange?.[0],
          endTime: values.dateRange?.[1]
        };
        if (editingCoupon) {
          onEditCoupon?.(editingCoupon.id, couponData);
          import_antd5.message.success("编辑成功");
        } else {
          onCreateCoupon?.(couponData);
          import_antd5.message.success("创建成功");
        }
        setModalVisible(false);
        fetchData();
      } catch (error) {
        console.error("Validation failed:", error);
      }
    };
    const getCouponTypeTag = (type) => {
      const typeMap = {
        [COUPON_TYPE.FULL_REDUCTION]: { color: "red", text: "满减券" },
        [COUPON_TYPE.DISCOUNT]: { color: "blue", text: "折扣券" }
      };
      const { color, text } = typeMap[type] || { color: "default", text: "未知" };
      return /* @__PURE__ */ import_react7.default.createElement(import_antd5.Tag, { color }, text);
    };
    const getPlatformTag = (platform) => {
      const platformMap = {
        [COUPON_PLATFORM.ALL]: { color: "green", text: "全平台" },
        [COUPON_PLATFORM.MOBILE]: { color: "purple", text: "移动端" },
        [COUPON_PLATFORM.PC]: { color: "geekblue", text: "PC端" },
        [COUPON_PLATFORM.APP]: { color: "cyan", text: "APP" }
      };
      const { color, text } = platformMap[platform] || {
        color: "default",
        text: "未知"
      };
      return /* @__PURE__ */ import_react7.default.createElement(import_antd5.Tag, { color }, text);
    };
    const columns = [
      {
        title: "优惠券名称",
        dataIndex: "name",
        key: "name",
        width: 150,
        render: (text) => /* @__PURE__ */ import_react7.default.createElement(import_antd5.Tooltip, { title: text }, /* @__PURE__ */ import_react7.default.createElement("span", { className: "coupon-name" }, text))
      },
      {
        title: "类型",
        dataIndex: "type",
        key: "type",
        width: 80,
        render: (type) => getCouponTypeTag(type)
      },
      {
        title: "优惠内容",
        key: "content",
        width: 120,
        render: (_, record) => /* @__PURE__ */ import_react7.default.createElement("span", null, record.type === COUPON_TYPE.FULL_REDUCTION ? `满${record.minPoint}减${record.amount}` : `${record.amount}折`)
      },
      {
        title: "适用平台",
        dataIndex: "platform",
        key: "platform",
        width: 80,
        render: (platform) => getPlatformTag(platform)
      },
      {
        title: "发行量",
        dataIndex: "count",
        key: "count",
        width: 80,
        render: (count) => /* @__PURE__ */ import_react7.default.createElement(import_antd5.Badge, { count, showZero: true, color: "blue" })
      },
      {
        title: "已领取",
        dataIndex: "receiveCount",
        key: "receiveCount",
        width: 80
      },
      {
        title: "已使用",
        dataIndex: "useCount",
        key: "useCount",
        width: 80
      },
      {
        title: "有效期",
        key: "validity",
        width: 180,
        render: (_, record) => /* @__PURE__ */ import_react7.default.createElement(import_antd5.Space, null, /* @__PURE__ */ import_react7.default.createElement(ClockCircleOutlined_default2, null), /* @__PURE__ */ import_react7.default.createElement("span", null, record.startTime, " ~ ", record.endTime))
      },
      {
        title: "操作",
        key: "action",
        width: 150,
        render: (_, record) => /* @__PURE__ */ import_react7.default.createElement(import_antd5.Space, null, /* @__PURE__ */ import_react7.default.createElement(
          import_antd5.Button,
          {
            type: "link",
            size: "small",
            icon: /* @__PURE__ */ import_react7.default.createElement(EditOutlined_default2, null),
            onClick: () => handleEdit(record)
          },
          "编辑"
        ), /* @__PURE__ */ import_react7.default.createElement(
          import_antd5.Button,
          {
            type: "link",
            size: "small",
            danger: true,
            icon: /* @__PURE__ */ import_react7.default.createElement(DeleteOutlined_default2, null),
            onClick: () => handleDelete(record.id)
          },
          "删除"
        ))
      }
    ];
    const statistics = {
      totalCoupons: mockData.length,
      activeCoupons: mockData.filter((c) => c.useCount > 0).length,
      totalUsed: mockData.reduce((sum, c) => sum + c.useCount, 0),
      totalReceived: mockData.reduce((sum, c) => sum + c.receiveCount, 0)
    };
    return /* @__PURE__ */ import_react7.default.createElement("div", { className: `mall-coupon-card ${className || ""}`, style }, /* @__PURE__ */ import_react7.default.createElement(import_antd5.Card, null, showStatistics && /* @__PURE__ */ import_react7.default.createElement("div", { className: "statistics-section" }, /* @__PURE__ */ import_react7.default.createElement(import_antd5.Space, { size: "large" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "stat-item" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "stat-value" }, statistics.totalCoupons), /* @__PURE__ */ import_react7.default.createElement("div", { className: "stat-label" }, "优惠券总数")), /* @__PURE__ */ import_react7.default.createElement(import_antd5.Divider, { type: "vertical", style: { height: 40 } }), /* @__PURE__ */ import_react7.default.createElement("div", { className: "stat-item" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "stat-value" }, statistics.activeCoupons), /* @__PURE__ */ import_react7.default.createElement("div", { className: "stat-label" }, "活跃优惠券")), /* @__PURE__ */ import_react7.default.createElement(import_antd5.Divider, { type: "vertical", style: { height: 40 } }), /* @__PURE__ */ import_react7.default.createElement("div", { className: "stat-item" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "stat-value" }, statistics.totalReceived), /* @__PURE__ */ import_react7.default.createElement("div", { className: "stat-label" }, "已领取")), /* @__PURE__ */ import_react7.default.createElement(import_antd5.Divider, { type: "vertical", style: { height: 40 } }), /* @__PURE__ */ import_react7.default.createElement("div", { className: "stat-item" }, /* @__PURE__ */ import_react7.default.createElement("div", { className: "stat-value" }, statistics.totalUsed), /* @__PURE__ */ import_react7.default.createElement("div", { className: "stat-label" }, "已使用")))), showFilter && /* @__PURE__ */ import_react7.default.createElement("div", { className: "filter-section" }, /* @__PURE__ */ import_react7.default.createElement(import_antd5.Space, { wrap: true }, /* @__PURE__ */ import_react7.default.createElement(
      import_antd5.Input,
      {
        placeholder: "优惠券名称",
        value: filterName,
        onChange: (e) => setFilterName(e.target.value),
        style: { width: 200 }
      }
    ), /* @__PURE__ */ import_react7.default.createElement(
      import_antd5.Select,
      {
        placeholder: "优惠券类型",
        value: filterType,
        onChange: setFilterType,
        style: { width: 120 },
        allowClear: true
      },
      COUPON_TYPE_OPTIONS.map((option) => /* @__PURE__ */ import_react7.default.createElement(import_antd5.Select.Option, { key: option.value, value: option.value }, option.label))
    ), /* @__PURE__ */ import_react7.default.createElement(
      import_antd5.Select,
      {
        placeholder: "适用平台",
        value: filterPlatform,
        onChange: setFilterPlatform,
        style: { width: 120 },
        allowClear: true
      },
      COUPON_PLATFORM_OPTIONS.map((option) => /* @__PURE__ */ import_react7.default.createElement(import_antd5.Select.Option, { key: option.value, value: option.value }, option.label))
    ), /* @__PURE__ */ import_react7.default.createElement(import_antd5.Button, { type: "primary", onClick: handleSearch }, "查询"), /* @__PURE__ */ import_react7.default.createElement(import_antd5.Button, { onClick: handleReset }, "重置"))), showCreateButton && /* @__PURE__ */ import_react7.default.createElement("div", { className: "action-section" }, /* @__PURE__ */ import_react7.default.createElement(import_antd5.Button, { type: "primary", icon: /* @__PURE__ */ import_react7.default.createElement(PlusOutlined_default2, null), onClick: handleCreate }, "创建优惠券")), /* @__PURE__ */ import_react7.default.createElement(
      import_antd5.Table,
      {
        columns,
        dataSource: data,
        rowKey: "id",
        loading,
        pagination: {
          current: currentPage,
          pageSize,
          total,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total2) => `共 ${total2} 条`,
          onChange: (page, pageSize2) => {
            setCurrentPage(page);
            setPageSize(pageSize2);
          }
        }
      }
    )), /* @__PURE__ */ import_react7.default.createElement(
      import_antd5.Modal,
      {
        title: editingCoupon ? "编辑优惠券" : "创建优惠券",
        visible: modalVisible,
        onOk: handleSubmit,
        onCancel: () => setModalVisible(false),
        width: 600
      },
      /* @__PURE__ */ import_react7.default.createElement(import_antd5.Form, { form, layout: "vertical" }, /* @__PURE__ */ import_react7.default.createElement(
        import_antd5.Form.Item,
        {
          name: "name",
          label: "优惠券名称",
          rules: [{ required: true, message: "请输入优惠券名称" }]
        },
        /* @__PURE__ */ import_react7.default.createElement(import_antd5.Input, { placeholder: "请输入优惠券名称" })
      ), /* @__PURE__ */ import_react7.default.createElement(
        import_antd5.Form.Item,
        {
          name: "type",
          label: "优惠券类型",
          rules: [{ required: true, message: "请选择优惠券类型" }]
        },
        /* @__PURE__ */ import_react7.default.createElement(import_antd5.Radio.Group, null, /* @__PURE__ */ import_react7.default.createElement(import_antd5.Radio, { value: COUPON_TYPE.FULL_REDUCTION }, "满减券"), /* @__PURE__ */ import_react7.default.createElement(import_antd5.Radio, { value: COUPON_TYPE.DISCOUNT }, "折扣券"))
      ), /* @__PURE__ */ import_react7.default.createElement(
        import_antd5.Form.Item,
        {
          name: "amount",
          label: "优惠额度",
          rules: [{ required: true, message: "请输入优惠额度" }]
        },
        /* @__PURE__ */ import_react7.default.createElement(
          import_antd5.InputNumber,
          {
            placeholder: "满减金额或折扣",
            min: 0,
            style: { width: "100%" }
          }
        )
      ), /* @__PURE__ */ import_react7.default.createElement(
        import_antd5.Form.Item,
        {
          name: "minPoint",
          label: "最低消费金额",
          rules: [{ required: true, message: "请输入最低消费金额" }]
        },
        /* @__PURE__ */ import_react7.default.createElement(
          import_antd5.InputNumber,
          {
            placeholder: "最低消费金额",
            min: 0,
            style: { width: "100%" }
          }
        )
      ), /* @__PURE__ */ import_react7.default.createElement(
        import_antd5.Form.Item,
        {
          name: "platform",
          label: "适用平台",
          rules: [{ required: true, message: "请选择适用平台" }]
        },
        /* @__PURE__ */ import_react7.default.createElement(import_antd5.Select, { placeholder: "请选择适用平台" }, COUPON_PLATFORM_OPTIONS.map((option) => /* @__PURE__ */ import_react7.default.createElement(import_antd5.Select.Option, { key: option.value, value: option.value }, option.label)))
      ), /* @__PURE__ */ import_react7.default.createElement(
        import_antd5.Form.Item,
        {
          name: "count",
          label: "发行数量",
          rules: [{ required: true, message: "请输入发行数量" }]
        },
        /* @__PURE__ */ import_react7.default.createElement(
          import_antd5.InputNumber,
          {
            placeholder: "发行数量",
            min: 1,
            style: { width: "100%" }
          }
        )
      ), /* @__PURE__ */ import_react7.default.createElement(
        import_antd5.Form.Item,
        {
          name: "perLimit",
          label: "每人限领",
          rules: [{ required: true, message: "请输入每人限领数量" }]
        },
        /* @__PURE__ */ import_react7.default.createElement(
          import_antd5.InputNumber,
          {
            placeholder: "每人限领数量",
            min: 1,
            style: { width: "100%" }
          }
        )
      ), /* @__PURE__ */ import_react7.default.createElement(
        import_antd5.Form.Item,
        {
          name: "dateRange",
          label: "有效期",
          rules: [{ required: true, message: "请选择有效期" }]
        },
        /* @__PURE__ */ import_react7.default.createElement(RangePicker2, { style: { width: "100%" } })
      ), /* @__PURE__ */ import_react7.default.createElement(import_antd5.Form.Item, { name: "note", label: "备注" }, /* @__PURE__ */ import_react7.default.createElement(import_antd5.Input.TextArea, { rows: 3, placeholder: "请输入备注" })))
    ));
  };
  var CouponCard_default = CouponCard;

  // src/plugins/plugin-mall-components/components/PromotionCard/PromotionCard.tsx
  var import_react8 = __toESM(require_react());
  var import_antd6 = __toESM(require_antd());
  var { RangePicker: RangePicker3 } = import_antd6.DatePicker;
  var PromotionCard = ({
    dataSource,
    showCreateButton = true,
    showFilter = true,
    showStatistics = true,
    showTimeline = true,
    onCreatePromotion,
    onEditPromotion,
    onDeletePromotion,
    onToggleStatus,
    style,
    className
  }) => {
    const [loading, setLoading] = (0, import_react8.useState)(false);
    const [data, setData] = (0, import_react8.useState)([]);
    const [total, setTotal] = (0, import_react8.useState)(0);
    const [currentPage, setCurrentPage] = (0, import_react8.useState)(1);
    const [pageSize, setPageSize] = (0, import_react8.useState)(10);
    const [filterTitle, setFilterTitle] = (0, import_react8.useState)("");
    const [filterStatus, setFilterStatus] = (0, import_react8.useState)();
    const [modalVisible, setModalVisible] = (0, import_react8.useState)(false);
    const [editingPromotion, setEditingPromotion] = (0, import_react8.useState)(null);
    const [form] = import_antd6.Form.useForm();
    const mockData = [
      {
        id: 1,
        title: "双十一大促",
        startDate: "2024-11-01",
        endDate: "2024-11-11",
        status: PROMOTION_STATUS.ENABLED,
        createTime: "2024-10-15 10:00:00"
      },
      {
        id: 2,
        title: "618年中大促",
        startDate: "2024-06-01",
        endDate: "2024-06-18",
        status: PROMOTION_STATUS.ENABLED,
        createTime: "2024-05-20 09:00:00"
      },
      {
        id: 3,
        title: "新春季促销",
        startDate: "2024-01-20",
        endDate: "2024-02-10",
        status: PROMOTION_STATUS.DISABLED,
        createTime: "2024-01-10 08:00:00"
      },
      {
        id: 4,
        title: "会员日特惠",
        startDate: "2024-03-15",
        endDate: "2024-03-17",
        status: PROMOTION_STATUS.ENABLED,
        createTime: "2024-03-01 10:00:00"
      }
    ];
    (0, import_react8.useEffect)(() => {
      fetchData();
    }, [currentPage, pageSize]);
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        let filtered = [...mockData];
        if (filterTitle) {
          filtered = filtered.filter(
            (item) => item.title.toLowerCase().includes(filterTitle.toLowerCase())
          );
        }
        if (filterStatus !== void 0) {
          filtered = filtered.filter((item) => item.status === filterStatus);
        }
        setData(filtered);
        setTotal(filtered.length);
      } catch (error) {
        console.error("Failed to fetch promotion list:", error);
        import_antd6.message.error("获取促销活动列表失败");
      } finally {
        setLoading(false);
      }
    };
    const handleSearch = () => {
      setCurrentPage(1);
      fetchData();
    };
    const handleReset = () => {
      setFilterTitle("");
      setFilterStatus(void 0);
      setCurrentPage(1);
      fetchData();
    };
    const handleCreate = () => {
      setEditingPromotion(null);
      form.resetFields();
      setModalVisible(true);
    };
    const handleEdit = (record) => {
      setEditingPromotion(record);
      form.setFieldsValue({
        ...record,
        dateRange: [record.startDate, record.endDate]
      });
      setModalVisible(true);
    };
    const handleDelete = (id) => {
      import_antd6.Modal.confirm({
        title: "确认删除",
        content: "确定要删除该促销活动吗？",
        onOk: () => {
          onDeletePromotion?.(id);
          import_antd6.message.success("删除成功");
          fetchData();
        }
      });
    };
    const handleToggleStatus = (record) => {
      const newStatus = record.status === PROMOTION_STATUS.ENABLED ? PROMOTION_STATUS.DISABLED : PROMOTION_STATUS.ENABLED;
      onToggleStatus?.(record.id, newStatus);
      import_antd6.message.success(
        newStatus === PROMOTION_STATUS.ENABLED ? "已启用" : "已禁用"
      );
      fetchData();
    };
    const handleSubmit = async () => {
      try {
        const values = await form.validateFields();
        const promotionData = {
          ...values,
          startDate: values.dateRange?.[0],
          endDate: values.dateRange?.[1]
        };
        if (editingPromotion) {
          onEditPromotion?.(editingPromotion.id, promotionData);
          import_antd6.message.success("编辑成功");
        } else {
          onCreatePromotion?.(promotionData);
          import_antd6.message.success("创建成功");
        }
        setModalVisible(false);
        fetchData();
      } catch (error) {
        console.error("Validation failed:", error);
      }
    };
    const getStatusTag = (status) => {
      const statusMap = {
        [PROMOTION_STATUS.ENABLED]: {
          color: "success",
          text: "已启用",
          icon: /* @__PURE__ */ import_react8.default.createElement(CheckCircleOutlined_default2, null)
        },
        [PROMOTION_STATUS.DISABLED]: {
          color: "default",
          text: "已禁用",
          icon: /* @__PURE__ */ import_react8.default.createElement(CloseCircleOutlined_default2, null)
        }
      };
      const { color, text, icon } = statusMap[status] || {
        color: "default",
        text: "未知",
        icon: null
      };
      return /* @__PURE__ */ import_react8.default.createElement(import_antd6.Tag, { color, icon }, text);
    };
    const columns = [
      {
        title: "活动名称",
        dataIndex: "title",
        key: "title",
        width: 200,
        render: (text) => /* @__PURE__ */ import_react8.default.createElement(import_antd6.Tooltip, { title: text }, /* @__PURE__ */ import_react8.default.createElement("span", { className: "promotion-title" }, /* @__PURE__ */ import_react8.default.createElement(ThunderboltOutlined_default2, { style: { color: "#faad14", marginRight: 8 } }), text))
      },
      {
        title: "活动时间",
        key: "dateRange",
        width: 220,
        render: (_, record) => /* @__PURE__ */ import_react8.default.createElement(import_antd6.Space, null, /* @__PURE__ */ import_react8.default.createElement(ClockCircleOutlined_default2, null), /* @__PURE__ */ import_react8.default.createElement("span", null, record.startDate, " ~ ", record.endDate))
      },
      {
        title: "状态",
        dataIndex: "status",
        key: "status",
        width: 100,
        render: (status) => getStatusTag(status)
      },
      {
        title: "创建时间",
        dataIndex: "createTime",
        key: "createTime",
        width: 180
      },
      {
        title: "操作",
        key: "action",
        width: 200,
        render: (_, record) => /* @__PURE__ */ import_react8.default.createElement(import_antd6.Space, null, /* @__PURE__ */ import_react8.default.createElement(
          import_antd6.Button,
          {
            type: "link",
            size: "small",
            icon: /* @__PURE__ */ import_react8.default.createElement(EditOutlined_default2, null),
            onClick: () => handleEdit(record)
          },
          "编辑"
        ), /* @__PURE__ */ import_react8.default.createElement(
          import_antd6.Button,
          {
            type: "link",
            size: "small",
            onClick: () => handleToggleStatus(record)
          },
          record.status === PROMOTION_STATUS.ENABLED ? "禁用" : "启用"
        ), /* @__PURE__ */ import_react8.default.createElement(
          import_antd6.Button,
          {
            type: "link",
            size: "small",
            danger: true,
            icon: /* @__PURE__ */ import_react8.default.createElement(DeleteOutlined_default2, null),
            onClick: () => handleDelete(record.id)
          },
          "删除"
        ))
      }
    ];
    const statistics = {
      totalPromotions: mockData.length,
      activePromotions: mockData.filter((p) => p.status === PROMOTION_STATUS.ENABLED).length,
      upcomingPromotions: mockData.filter((p) => {
        const today = /* @__PURE__ */ new Date();
        const startDate = new Date(p.startDate);
        return startDate > today;
      }).length
    };
    const timelineData = mockData.filter((p) => p.status === PROMOTION_STATUS.ENABLED).slice(0, 5).map((p) => ({
      color: "green",
      children: /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement("div", { className: "timeline-title" }, p.title), /* @__PURE__ */ import_react8.default.createElement("div", { className: "timeline-date" }, p.startDate, " ~ ", p.endDate))
    }));
    return /* @__PURE__ */ import_react8.default.createElement("div", { className: `mall-promotion-card ${className || ""}`, style }, /* @__PURE__ */ import_react8.default.createElement(import_antd6.Card, null, showStatistics && /* @__PURE__ */ import_react8.default.createElement("div", { className: "statistics-section" }, /* @__PURE__ */ import_react8.default.createElement(import_antd6.Row, { gutter: 16 }, /* @__PURE__ */ import_react8.default.createElement(import_antd6.Col, { span: 8 }, /* @__PURE__ */ import_react8.default.createElement(
      import_antd6.Statistic,
      {
        title: "促销活动总数",
        value: statistics.totalPromotions,
        prefix: /* @__PURE__ */ import_react8.default.createElement(ThunderboltOutlined_default2, null)
      }
    )), /* @__PURE__ */ import_react8.default.createElement(import_antd6.Col, { span: 8 }, /* @__PURE__ */ import_react8.default.createElement(
      import_antd6.Statistic,
      {
        title: "进行中的活动",
        value: statistics.activePromotions,
        valueStyle: { color: "#3f8600" }
      }
    )), /* @__PURE__ */ import_react8.default.createElement(import_antd6.Col, { span: 8 }, /* @__PURE__ */ import_react8.default.createElement(
      import_antd6.Statistic,
      {
        title: "即将开始",
        value: statistics.upcomingPromotions,
        valueStyle: { color: "#faad14" }
      }
    )))), showFilter && /* @__PURE__ */ import_react8.default.createElement("div", { className: "filter-section" }, /* @__PURE__ */ import_react8.default.createElement(import_antd6.Space, { wrap: true }, /* @__PURE__ */ import_react8.default.createElement(
      import_antd6.Input,
      {
        placeholder: "活动名称",
        value: filterTitle,
        onChange: (e) => setFilterTitle(e.target.value),
        style: { width: 200 }
      }
    ), /* @__PURE__ */ import_react8.default.createElement(
      import_antd6.Select,
      {
        placeholder: "活动状态",
        value: filterStatus,
        onChange: setFilterStatus,
        style: { width: 120 },
        allowClear: true
      },
      PROMOTION_STATUS_OPTIONS.map((option) => /* @__PURE__ */ import_react8.default.createElement(import_antd6.Select.Option, { key: option.value, value: option.value }, option.label))
    ), /* @__PURE__ */ import_react8.default.createElement(import_antd6.Button, { type: "primary", onClick: handleSearch }, "查询"), /* @__PURE__ */ import_react8.default.createElement(import_antd6.Button, { onClick: handleReset }, "重置"))), showCreateButton && /* @__PURE__ */ import_react8.default.createElement("div", { className: "action-section" }, /* @__PURE__ */ import_react8.default.createElement(import_antd6.Button, { type: "primary", icon: /* @__PURE__ */ import_react8.default.createElement(PlusOutlined_default2, null), onClick: handleCreate }, "创建促销活动")), /* @__PURE__ */ import_react8.default.createElement("div", { className: "content-section" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "table-section" }, /* @__PURE__ */ import_react8.default.createElement(
      import_antd6.Table,
      {
        columns,
        dataSource: data,
        rowKey: "id",
        loading,
        pagination: {
          current: currentPage,
          pageSize,
          total,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total2) => `共 ${total2} 条`,
          onChange: (page, pageSize2) => {
            setCurrentPage(page);
            setPageSize(pageSize2);
          }
        }
      }
    )), showTimeline && timelineData.length > 0 && /* @__PURE__ */ import_react8.default.createElement("div", { className: "timeline-section" }, /* @__PURE__ */ import_react8.default.createElement(import_antd6.Card, { title: "活动时间线", size: "small" }, /* @__PURE__ */ import_react8.default.createElement(import_antd6.Timeline, { items: timelineData }))))), /* @__PURE__ */ import_react8.default.createElement(
      import_antd6.Modal,
      {
        title: editingPromotion ? "编辑促销活动" : "创建促销活动",
        visible: modalVisible,
        onOk: handleSubmit,
        onCancel: () => setModalVisible(false),
        width: 500
      },
      /* @__PURE__ */ import_react8.default.createElement(import_antd6.Form, { form, layout: "vertical" }, /* @__PURE__ */ import_react8.default.createElement(
        import_antd6.Form.Item,
        {
          name: "title",
          label: "活动名称",
          rules: [{ required: true, message: "请输入活动名称" }]
        },
        /* @__PURE__ */ import_react8.default.createElement(import_antd6.Input, { placeholder: "请输入活动名称" })
      ), /* @__PURE__ */ import_react8.default.createElement(
        import_antd6.Form.Item,
        {
          name: "dateRange",
          label: "活动时间",
          rules: [{ required: true, message: "请选择活动时间" }]
        },
        /* @__PURE__ */ import_react8.default.createElement(RangePicker3, { style: { width: "100%" } })
      ), /* @__PURE__ */ import_react8.default.createElement(
        import_antd6.Form.Item,
        {
          name: "status",
          label: "活动状态",
          initialValue: PROMOTION_STATUS.ENABLED
        },
        /* @__PURE__ */ import_react8.default.createElement(
          import_antd6.Switch,
          {
            checkedChildren: "启用",
            unCheckedChildren: "禁用",
            defaultChecked: true
          }
        )
      ))
    ));
  };
  var PromotionCard_default = PromotionCard;

  // src/plugins/plugin-mall-components/components/UserCard/UserCard.tsx
  var import_react9 = __toESM(require_react());
  var import_antd7 = __toESM(require_antd());

  // src/plugins/plugin-mall-components/types/permission.ts
  var USER_STATUS = {
    DISABLED: 0,
    ENABLED: 1
  };
  var ROLE_STATUS = {
    DISABLED: 0,
    ENABLED: 1
  };
  var PERMISSION_TYPE = {
    DIRECTORY: 0,
    MENU: 1,
    BUTTON: 2
  };
  var USER_STATUS_OPTIONS = [
    { label: "禁用", value: USER_STATUS.DISABLED },
    { label: "启用", value: USER_STATUS.ENABLED }
  ];
  var ROLE_STATUS_OPTIONS = [
    { label: "禁用", value: ROLE_STATUS.DISABLED },
    { label: "启用", value: ROLE_STATUS.ENABLED }
  ];
  var PERMISSION_TYPE_OPTIONS = [
    { label: "目录", value: PERMISSION_TYPE.DIRECTORY },
    { label: "菜单", value: PERMISSION_TYPE.MENU },
    { label: "按钮", value: PERMISSION_TYPE.BUTTON }
  ];

  // src/plugins/plugin-mall-components/components/UserCard/UserCard.tsx
  var UserCard = ({
    dataSource,
    showCreateButton = true,
    showFilter = true,
    showStatistics = true,
    onCreateUser,
    onEditUser,
    onDeleteUser,
    onToggleStatus,
    style,
    className
  }) => {
    const [loading, setLoading] = (0, import_react9.useState)(false);
    const [data, setData] = (0, import_react9.useState)([]);
    const [total, setTotal] = (0, import_react9.useState)(0);
    const [currentPage, setCurrentPage] = (0, import_react9.useState)(1);
    const [pageSize, setPageSize] = (0, import_react9.useState)(10);
    const [filterUsername, setFilterUsername] = (0, import_react9.useState)("");
    const [filterStatus, setFilterStatus] = (0, import_react9.useState)();
    const [modalVisible, setModalVisible] = (0, import_react9.useState)(false);
    const [editingUser, setEditingUser] = (0, import_react9.useState)(null);
    const [form] = import_antd7.Form.useForm();
    const mockData = [
      {
        id: 1,
        username: "admin",
        nickName: "超级管理员",
        email: "admin@example.com",
        phone: "13800138000",
        status: USER_STATUS.ENABLED,
        createTime: "2024-01-01 10:00:00",
        loginTime: "2024-04-02 09:30:00",
        roleIds: [1],
        roleNames: ["超级管理员"]
      },
      {
        id: 2,
        username: "operator",
        nickName: "运营人员",
        email: "operator@example.com",
        phone: "13900139000",
        status: USER_STATUS.ENABLED,
        createTime: "2024-01-15 14:00:00",
        loginTime: "2024-04-01 16:20:00",
        roleIds: [2],
        roleNames: ["运营"]
      },
      {
        id: 3,
        username: "viewer",
        nickName: "访客用户",
        email: "viewer@example.com",
        phone: "13700137000",
        status: USER_STATUS.DISABLED,
        createTime: "2024-02-01 09:00:00",
        loginTime: "2024-03-15 10:00:00",
        roleIds: [3],
        roleNames: ["访客"]
      }
    ];
    (0, import_react9.useEffect)(() => {
      fetchData();
    }, [currentPage, pageSize]);
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        let filtered = [...mockData];
        if (filterUsername) {
          filtered = filtered.filter(
            (item) => item.username.toLowerCase().includes(filterUsername.toLowerCase()) || item.nickName?.toLowerCase().includes(filterUsername.toLowerCase())
          );
        }
        if (filterStatus !== void 0) {
          filtered = filtered.filter((item) => item.status === filterStatus);
        }
        setData(filtered);
        setTotal(filtered.length);
      } catch (error) {
        console.error("Failed to fetch user list:", error);
        import_antd7.message.error("获取用户列表失败");
      } finally {
        setLoading(false);
      }
    };
    const handleSearch = () => {
      setCurrentPage(1);
      fetchData();
    };
    const handleReset = () => {
      setFilterUsername("");
      setFilterStatus(void 0);
      setCurrentPage(1);
      fetchData();
    };
    const handleCreate = () => {
      setEditingUser(null);
      form.resetFields();
      setModalVisible(true);
    };
    const handleEdit = (record) => {
      setEditingUser(record);
      form.setFieldsValue(record);
      setModalVisible(true);
    };
    const handleDelete = (id) => {
      import_antd7.Modal.confirm({
        title: "确认删除",
        content: "确定要删除该用户吗？",
        onOk: () => {
          onDeleteUser?.(id);
          import_antd7.message.success("删除成功");
          fetchData();
        }
      });
    };
    const handleToggleStatus = (record) => {
      const newStatus = record.status === USER_STATUS.ENABLED ? USER_STATUS.DISABLED : USER_STATUS.ENABLED;
      onToggleStatus?.(record.id, newStatus);
      import_antd7.message.success(newStatus === USER_STATUS.ENABLED ? "已启用" : "已禁用");
      fetchData();
    };
    const handleSubmit = async () => {
      try {
        const values = await form.validateFields();
        if (editingUser) {
          onEditUser?.(editingUser.id, values);
          import_antd7.message.success("编辑成功");
        } else {
          onCreateUser?.(values);
          import_antd7.message.success("创建成功");
        }
        setModalVisible(false);
        fetchData();
      } catch (error) {
        console.error("Validation failed:", error);
      }
    };
    const getStatusTag = (status) => {
      const statusMap = {
        [USER_STATUS.ENABLED]: { color: "success", text: "已启用" },
        [USER_STATUS.DISABLED]: { color: "default", text: "已禁用" }
      };
      const { color, text } = statusMap[status] || { color: "default", text: "未知" };
      return /* @__PURE__ */ import_react9.default.createElement(import_antd7.Tag, { color }, text);
    };
    const columns = [
      {
        title: "用户信息",
        key: "userInfo",
        width: 200,
        render: (_, record) => /* @__PURE__ */ import_react9.default.createElement(import_antd7.Space, null, /* @__PURE__ */ import_react9.default.createElement(import_antd7.Avatar, { icon: /* @__PURE__ */ import_react9.default.createElement(UserOutlined_default2, null), style: { backgroundColor: "#1890ff" } }), /* @__PURE__ */ import_react9.default.createElement("div", null, /* @__PURE__ */ import_react9.default.createElement("div", { className: "user-name" }, record.nickName || record.username), /* @__PURE__ */ import_react9.default.createElement("div", { className: "user-username" }, "@", record.username)))
      },
      {
        title: "邮箱",
        dataIndex: "email",
        key: "email",
        width: 180
      },
      {
        title: "手机号",
        dataIndex: "phone",
        key: "phone",
        width: 130
      },
      {
        title: "角色",
        dataIndex: "roleNames",
        key: "roleNames",
        width: 150,
        render: (roleNames) => /* @__PURE__ */ import_react9.default.createElement(import_antd7.Space, { wrap: true }, roleNames?.map((name, index) => /* @__PURE__ */ import_react9.default.createElement(import_antd7.Tag, { key: index, color: "blue" }, name)))
      },
      {
        title: "状态",
        dataIndex: "status",
        key: "status",
        width: 80,
        render: (status) => getStatusTag(status)
      },
      {
        title: "最后登录",
        dataIndex: "loginTime",
        key: "loginTime",
        width: 160
      },
      {
        title: "操作",
        key: "action",
        width: 180,
        render: (_, record) => /* @__PURE__ */ import_react9.default.createElement(import_antd7.Space, null, /* @__PURE__ */ import_react9.default.createElement(
          import_antd7.Button,
          {
            type: "link",
            size: "small",
            icon: /* @__PURE__ */ import_react9.default.createElement(EditOutlined_default2, null),
            onClick: () => handleEdit(record)
          },
          "编辑"
        ), /* @__PURE__ */ import_react9.default.createElement(import_antd7.Button, { type: "link", size: "small", onClick: () => handleToggleStatus(record) }, record.status === USER_STATUS.ENABLED ? "禁用" : "启用"), /* @__PURE__ */ import_react9.default.createElement(
          import_antd7.Button,
          {
            type: "link",
            size: "small",
            danger: true,
            icon: /* @__PURE__ */ import_react9.default.createElement(DeleteOutlined_default2, null),
            onClick: () => handleDelete(record.id)
          },
          "删除"
        ))
      }
    ];
    const statistics = {
      totalUsers: mockData.length,
      activeUsers: mockData.filter((u) => u.status === USER_STATUS.ENABLED).length,
      disabledUsers: mockData.filter((u) => u.status === USER_STATUS.DISABLED).length
    };
    return /* @__PURE__ */ import_react9.default.createElement("div", { className: `mall-user-card ${className || ""}`, style }, /* @__PURE__ */ import_react9.default.createElement(import_antd7.Card, null, showStatistics && /* @__PURE__ */ import_react9.default.createElement("div", { className: "statistics-section" }, /* @__PURE__ */ import_react9.default.createElement(import_antd7.Space, { size: "large" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "stat-item" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "stat-value" }, statistics.totalUsers), /* @__PURE__ */ import_react9.default.createElement("div", { className: "stat-label" }, "用户总数")), /* @__PURE__ */ import_react9.default.createElement(import_antd7.Divider, { type: "vertical", style: { height: 40 } }), /* @__PURE__ */ import_react9.default.createElement("div", { className: "stat-item" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "stat-value", style: { color: "#52c41a" } }, statistics.activeUsers), /* @__PURE__ */ import_react9.default.createElement("div", { className: "stat-label" }, "活跃用户")), /* @__PURE__ */ import_react9.default.createElement(import_antd7.Divider, { type: "vertical", style: { height: 40 } }), /* @__PURE__ */ import_react9.default.createElement("div", { className: "stat-item" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "stat-value", style: { color: "#8c8c8c" } }, statistics.disabledUsers), /* @__PURE__ */ import_react9.default.createElement("div", { className: "stat-label" }, "已禁用")))), showFilter && /* @__PURE__ */ import_react9.default.createElement("div", { className: "filter-section" }, /* @__PURE__ */ import_react9.default.createElement(import_antd7.Space, { wrap: true }, /* @__PURE__ */ import_react9.default.createElement(
      import_antd7.Input,
      {
        placeholder: "用户名/昵称",
        value: filterUsername,
        onChange: (e) => setFilterUsername(e.target.value),
        style: { width: 200 }
      }
    ), /* @__PURE__ */ import_react9.default.createElement(
      import_antd7.Select,
      {
        placeholder: "用户状态",
        value: filterStatus,
        onChange: setFilterStatus,
        style: { width: 120 },
        allowClear: true
      },
      USER_STATUS_OPTIONS.map((option) => /* @__PURE__ */ import_react9.default.createElement(import_antd7.Select.Option, { key: option.value, value: option.value }, option.label))
    ), /* @__PURE__ */ import_react9.default.createElement(import_antd7.Button, { type: "primary", onClick: handleSearch }, "查询"), /* @__PURE__ */ import_react9.default.createElement(import_antd7.Button, { onClick: handleReset }, "重置"))), showCreateButton && /* @__PURE__ */ import_react9.default.createElement("div", { className: "action-section" }, /* @__PURE__ */ import_react9.default.createElement(import_antd7.Button, { type: "primary", icon: /* @__PURE__ */ import_react9.default.createElement(PlusOutlined_default2, null), onClick: handleCreate }, "创建用户")), /* @__PURE__ */ import_react9.default.createElement(
      import_antd7.Table,
      {
        columns,
        dataSource: data,
        rowKey: "id",
        loading,
        pagination: {
          current: currentPage,
          pageSize,
          total,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total2) => `共 ${total2} 条`,
          onChange: (page, pageSize2) => {
            setCurrentPage(page);
            setPageSize(pageSize2);
          }
        }
      }
    )), /* @__PURE__ */ import_react9.default.createElement(
      import_antd7.Modal,
      {
        title: editingUser ? "编辑用户" : "创建用户",
        visible: modalVisible,
        onOk: handleSubmit,
        onCancel: () => setModalVisible(false),
        width: 500
      },
      /* @__PURE__ */ import_react9.default.createElement(import_antd7.Form, { form, layout: "vertical" }, /* @__PURE__ */ import_react9.default.createElement(
        import_antd7.Form.Item,
        {
          name: "username",
          label: "用户名",
          rules: [{ required: true, message: "请输入用户名" }]
        },
        /* @__PURE__ */ import_react9.default.createElement(import_antd7.Input, { placeholder: "请输入用户名", disabled: !!editingUser })
      ), /* @__PURE__ */ import_react9.default.createElement(
        import_antd7.Form.Item,
        {
          name: "nickName",
          label: "昵称",
          rules: [{ required: true, message: "请输入昵称" }]
        },
        /* @__PURE__ */ import_react9.default.createElement(import_antd7.Input, { placeholder: "请输入昵称" })
      ), /* @__PURE__ */ import_react9.default.createElement(
        import_antd7.Form.Item,
        {
          name: "email",
          label: "邮箱",
          rules: [
            { required: true, message: "请输入邮箱" },
            { type: "email", message: "请输入有效的邮箱地址" }
          ]
        },
        /* @__PURE__ */ import_react9.default.createElement(import_antd7.Input, { placeholder: "请输入邮箱" })
      ), /* @__PURE__ */ import_react9.default.createElement(
        import_antd7.Form.Item,
        {
          name: "phone",
          label: "手机号",
          rules: [{ required: true, message: "请输入手机号" }]
        },
        /* @__PURE__ */ import_react9.default.createElement(import_antd7.Input, { placeholder: "请输入手机号" })
      ), /* @__PURE__ */ import_react9.default.createElement(import_antd7.Form.Item, { name: "status", label: "状态", initialValue: USER_STATUS.ENABLED }, /* @__PURE__ */ import_react9.default.createElement(
        import_antd7.Switch,
        {
          checkedChildren: "启用",
          unCheckedChildren: "禁用",
          defaultChecked: true
        }
      )))
    ));
  };
  var UserCard_default = UserCard;

  // src/plugins/plugin-mall-components/components/RoleCard/RoleCard.tsx
  var import_react10 = __toESM(require_react());
  var import_antd8 = __toESM(require_antd());
  var RoleCard = ({
    dataSource,
    showCreateButton = true,
    showFilter = true,
    showStatistics = true,
    showPermissionTree = true,
    onCreateRole,
    onEditRole,
    onDeleteRole,
    onToggleStatus,
    style,
    className
  }) => {
    const [loading, setLoading] = (0, import_react10.useState)(false);
    const [data, setData] = (0, import_react10.useState)([]);
    const [total, setTotal] = (0, import_react10.useState)(0);
    const [currentPage, setCurrentPage] = (0, import_react10.useState)(1);
    const [pageSize, setPageSize] = (0, import_react10.useState)(10);
    const [filterName, setFilterName] = (0, import_react10.useState)("");
    const [filterStatus, setFilterStatus] = (0, import_react10.useState)();
    const [modalVisible, setModalVisible] = (0, import_react10.useState)(false);
    const [editingRole, setEditingRole] = (0, import_react10.useState)(null);
    const [form] = import_antd8.Form.useForm();
    const mockData = [
      {
        id: 1,
        name: "超级管理员",
        description: "拥有所有权限",
        adminCount: 2,
        status: ROLE_STATUS.ENABLED,
        sort: 0,
        createTime: "2024-01-01 10:00:00"
      },
      {
        id: 2,
        name: "运营",
        description: "负责商品和订单管理",
        adminCount: 5,
        status: ROLE_STATUS.ENABLED,
        sort: 1,
        createTime: "2024-01-15 14:00:00"
      },
      {
        id: 3,
        name: "客服",
        description: "负责订单处理和客户服务",
        adminCount: 3,
        status: ROLE_STATUS.ENABLED,
        sort: 2,
        createTime: "2024-02-01 09:00:00"
      },
      {
        id: 4,
        name: "访客",
        description: "只读权限",
        adminCount: 10,
        status: ROLE_STATUS.DISABLED,
        sort: 3,
        createTime: "2024-02-15 11:00:00"
      }
    ];
    const permissionTreeData = [
      {
        title: "商品管理",
        key: "product",
        children: [
          { title: "商品列表", key: "product:list" },
          { title: "添加商品", key: "product:create" },
          { title: "编辑商品", key: "product:edit" },
          { title: "删除商品", key: "product:delete" }
        ]
      },
      {
        title: "订单管理",
        key: "order",
        children: [
          { title: "订单列表", key: "order:list" },
          { title: "订单详情", key: "order:detail" },
          { title: "发货", key: "order:deliver" },
          { title: "关闭订单", key: "order:close" }
        ]
      },
      {
        title: "营销管理",
        key: "marketing",
        children: [
          { title: "优惠券管理", key: "marketing:coupon" },
          { title: "促销活动", key: "marketing:promotion" }
        ]
      },
      {
        title: "权限管理",
        key: "permission",
        children: [
          { title: "用户管理", key: "permission:user" },
          { title: "角色管理", key: "permission:role" }
        ]
      }
    ];
    (0, import_react10.useEffect)(() => {
      fetchData();
    }, [currentPage, pageSize]);
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
        let filtered = [...mockData];
        if (filterName) {
          filtered = filtered.filter(
            (item) => item.name.toLowerCase().includes(filterName.toLowerCase()) || item.description?.toLowerCase().includes(filterName.toLowerCase())
          );
        }
        if (filterStatus !== void 0) {
          filtered = filtered.filter((item) => item.status === filterStatus);
        }
        setData(filtered);
        setTotal(filtered.length);
      } catch (error) {
        console.error("Failed to fetch role list:", error);
        import_antd8.message.error("获取角色列表失败");
      } finally {
        setLoading(false);
      }
    };
    const handleSearch = () => {
      setCurrentPage(1);
      fetchData();
    };
    const handleReset = () => {
      setFilterName("");
      setFilterStatus(void 0);
      setCurrentPage(1);
      fetchData();
    };
    const handleCreate = () => {
      setEditingRole(null);
      form.resetFields();
      setModalVisible(true);
    };
    const handleEdit = (record) => {
      setEditingRole(record);
      form.setFieldsValue(record);
      setModalVisible(true);
    };
    const handleDelete = (id) => {
      import_antd8.Modal.confirm({
        title: "确认删除",
        content: "确定要删除该角色吗？",
        onOk: () => {
          onDeleteRole?.(id);
          import_antd8.message.success("删除成功");
          fetchData();
        }
      });
    };
    const handleToggleStatus = (record) => {
      const newStatus = record.status === ROLE_STATUS.ENABLED ? ROLE_STATUS.DISABLED : ROLE_STATUS.ENABLED;
      onToggleStatus?.(record.id, newStatus);
      import_antd8.message.success(newStatus === ROLE_STATUS.ENABLED ? "已启用" : "已禁用");
      fetchData();
    };
    const handleSubmit = async () => {
      try {
        const values = await form.validateFields();
        if (editingRole) {
          onEditRole?.(editingRole.id, values);
          import_antd8.message.success("编辑成功");
        } else {
          onCreateRole?.(values);
          import_antd8.message.success("创建成功");
        }
        setModalVisible(false);
        fetchData();
      } catch (error) {
        console.error("Validation failed:", error);
      }
    };
    const getStatusTag = (status) => {
      const statusMap = {
        [ROLE_STATUS.ENABLED]: { color: "success", text: "已启用" },
        [ROLE_STATUS.DISABLED]: { color: "default", text: "已禁用" }
      };
      const { color, text } = statusMap[status] || { color: "default", text: "未知" };
      return /* @__PURE__ */ import_react10.default.createElement(import_antd8.Tag, { color }, text);
    };
    const columns = [
      {
        title: "角色名称",
        dataIndex: "name",
        key: "name",
        width: 150,
        render: (text) => /* @__PURE__ */ import_react10.default.createElement(import_antd8.Space, null, /* @__PURE__ */ import_react10.default.createElement(TeamOutlined_default2, { style: { color: "#1890ff" } }), /* @__PURE__ */ import_react10.default.createElement("span", { className: "role-name" }, text))
      },
      {
        title: "描述",
        dataIndex: "description",
        key: "description",
        width: 200
      },
      {
        title: "用户数",
        dataIndex: "adminCount",
        key: "adminCount",
        width: 80,
        render: (count) => /* @__PURE__ */ import_react10.default.createElement(import_antd8.Tag, { color: "blue" }, count, " 人")
      },
      {
        title: "状态",
        dataIndex: "status",
        key: "status",
        width: 80,
        render: (status) => getStatusTag(status)
      },
      {
        title: "排序",
        dataIndex: "sort",
        key: "sort",
        width: 60
      },
      {
        title: "创建时间",
        dataIndex: "createTime",
        key: "createTime",
        width: 160
      },
      {
        title: "操作",
        key: "action",
        width: 180,
        render: (_, record) => /* @__PURE__ */ import_react10.default.createElement(import_antd8.Space, null, /* @__PURE__ */ import_react10.default.createElement(
          import_antd8.Button,
          {
            type: "link",
            size: "small",
            icon: /* @__PURE__ */ import_react10.default.createElement(EditOutlined_default2, null),
            onClick: () => handleEdit(record)
          },
          "编辑"
        ), /* @__PURE__ */ import_react10.default.createElement(import_antd8.Button, { type: "link", size: "small", onClick: () => handleToggleStatus(record) }, record.status === ROLE_STATUS.ENABLED ? "禁用" : "启用"), /* @__PURE__ */ import_react10.default.createElement(
          import_antd8.Button,
          {
            type: "link",
            size: "small",
            danger: true,
            icon: /* @__PURE__ */ import_react10.default.createElement(DeleteOutlined_default2, null),
            onClick: () => handleDelete(record.id)
          },
          "删除"
        ))
      }
    ];
    const statistics = {
      totalRoles: mockData.length,
      activeRoles: mockData.filter((r) => r.status === ROLE_STATUS.ENABLED).length,
      totalAdmins: mockData.reduce((sum, r) => sum + r.adminCount, 0)
    };
    return /* @__PURE__ */ import_react10.default.createElement("div", { className: `mall-role-card ${className || ""}`, style }, /* @__PURE__ */ import_react10.default.createElement(import_antd8.Card, null, showStatistics && /* @__PURE__ */ import_react10.default.createElement("div", { className: "statistics-section" }, /* @__PURE__ */ import_react10.default.createElement(import_antd8.Space, { size: "large" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "stat-item" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "stat-value" }, statistics.totalRoles), /* @__PURE__ */ import_react10.default.createElement("div", { className: "stat-label" }, "角色总数")), /* @__PURE__ */ import_react10.default.createElement(import_antd8.Divider, { type: "vertical", style: { height: 40 } }), /* @__PURE__ */ import_react10.default.createElement("div", { className: "stat-item" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "stat-value", style: { color: "#52c41a" } }, statistics.activeRoles), /* @__PURE__ */ import_react10.default.createElement("div", { className: "stat-label" }, "启用角色")), /* @__PURE__ */ import_react10.default.createElement(import_antd8.Divider, { type: "vertical", style: { height: 40 } }), /* @__PURE__ */ import_react10.default.createElement("div", { className: "stat-item" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "stat-value", style: { color: "#1890ff" } }, statistics.totalAdmins), /* @__PURE__ */ import_react10.default.createElement("div", { className: "stat-label" }, "用户总数")))), showFilter && /* @__PURE__ */ import_react10.default.createElement("div", { className: "filter-section" }, /* @__PURE__ */ import_react10.default.createElement(import_antd8.Space, { wrap: true }, /* @__PURE__ */ import_react10.default.createElement(
      import_antd8.Input,
      {
        placeholder: "角色名称/描述",
        value: filterName,
        onChange: (e) => setFilterName(e.target.value),
        style: { width: 200 }
      }
    ), /* @__PURE__ */ import_react10.default.createElement(
      import_antd8.Select,
      {
        placeholder: "角色状态",
        value: filterStatus,
        onChange: setFilterStatus,
        style: { width: 120 },
        allowClear: true
      },
      ROLE_STATUS_OPTIONS.map((option) => /* @__PURE__ */ import_react10.default.createElement(import_antd8.Select.Option, { key: option.value, value: option.value }, option.label))
    ), /* @__PURE__ */ import_react10.default.createElement(import_antd8.Button, { type: "primary", onClick: handleSearch }, "查询"), /* @__PURE__ */ import_react10.default.createElement(import_antd8.Button, { onClick: handleReset }, "重置"))), showCreateButton && /* @__PURE__ */ import_react10.default.createElement("div", { className: "action-section" }, /* @__PURE__ */ import_react10.default.createElement(import_antd8.Button, { type: "primary", icon: /* @__PURE__ */ import_react10.default.createElement(PlusOutlined_default2, null), onClick: handleCreate }, "创建角色")), /* @__PURE__ */ import_react10.default.createElement("div", { className: "content-section" }, /* @__PURE__ */ import_react10.default.createElement("div", { className: "table-section" }, /* @__PURE__ */ import_react10.default.createElement(
      import_antd8.Table,
      {
        columns,
        dataSource: data,
        rowKey: "id",
        loading,
        pagination: {
          current: currentPage,
          pageSize,
          total,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total2) => `共 ${total2} 条`,
          onChange: (page, pageSize2) => {
            setCurrentPage(page);
            setPageSize(pageSize2);
          }
        }
      }
    )), showPermissionTree && /* @__PURE__ */ import_react10.default.createElement("div", { className: "permission-section" }, /* @__PURE__ */ import_react10.default.createElement(import_antd8.Card, { title: "权限树", size: "small" }, /* @__PURE__ */ import_react10.default.createElement(
      import_antd8.Tree,
      {
        checkable: true,
        defaultExpandedKeys: ["product", "order"],
        treeData: permissionTreeData
      }
    ))))), /* @__PURE__ */ import_react10.default.createElement(
      import_antd8.Modal,
      {
        title: editingRole ? "编辑角色" : "创建角色",
        visible: modalVisible,
        onOk: handleSubmit,
        onCancel: () => setModalVisible(false),
        width: 500
      },
      /* @__PURE__ */ import_react10.default.createElement(import_antd8.Form, { form, layout: "vertical" }, /* @__PURE__ */ import_react10.default.createElement(
        import_antd8.Form.Item,
        {
          name: "name",
          label: "角色名称",
          rules: [{ required: true, message: "请输入角色名称" }]
        },
        /* @__PURE__ */ import_react10.default.createElement(import_antd8.Input, { placeholder: "请输入角色名称" })
      ), /* @__PURE__ */ import_react10.default.createElement(import_antd8.Form.Item, { name: "description", label: "描述" }, /* @__PURE__ */ import_react10.default.createElement(import_antd8.Input.TextArea, { rows: 3, placeholder: "请输入角色描述" })), /* @__PURE__ */ import_react10.default.createElement(import_antd8.Form.Item, { name: "sort", label: "排序", initialValue: 0 }, /* @__PURE__ */ import_react10.default.createElement(import_antd8.Input, { type: "number", placeholder: "排序值" })), /* @__PURE__ */ import_react10.default.createElement(import_antd8.Form.Item, { name: "status", label: "状态", initialValue: ROLE_STATUS.ENABLED }, /* @__PURE__ */ import_react10.default.createElement(
        import_antd8.Switch,
        {
          checkedChildren: "启用",
          unCheckedChildren: "禁用",
          defaultChecked: true
        }
      )))
    ));
  };
  var RoleCard_default = RoleCard;

  // src/plugins/plugin-mall-components/setters/RestApiTester.tsx
  var import_react11 = __toESM(require_react());
  var import_antd9 = __toESM(require_antd());
  var { TextArea: TextArea2 } = import_antd9.Input;
  var { Text } = import_antd9.Typography;
  var RestApiTester = ({ value, onChange, multi }) => {
    const [loading, setLoading] = (0, import_react11.useState)(false);
    const [response, setResponse] = (0, import_react11.useState)("");
    const [error, setError] = (0, import_react11.useState)("");
    const [status, setStatus] = (0, import_react11.useState)("idle");
    const api = value?.api || "";
    const method = value?.method || "GET";
    const handleTestApi = async () => {
      if (!api.trim()) {
        setError("请输入 API 地址");
        setStatus("error");
        return;
      }
      setLoading(true);
      setError("");
      setResponse("");
      setStatus("idle");
      try {
        let url = api;
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
          url = `http://${url}`;
        }
        console.log("[RestApiTester] 开始测试 API:", { url, method });
        const fetchOptions = {
          method,
          headers: {
            "Content-Type": "application/json"
          }
        };
        if (method === "POST") {
          fetchOptions.body = JSON.stringify({
            pageNum: 1,
            pageSize: 10
          });
        }
        const res = await fetch(url, fetchOptions);
        const data = await res.json();
        console.log("[RestApiTester] API 响应:", data);
        if (res.ok) {
          setResponse(JSON.stringify(data, null, 2));
          setStatus("success");
          if (data.code === 200 && data.data && data.data.list) {
            console.log(`[RestApiTester] 成功获取 ${data.data.list.length} 条数据`);
          }
        } else {
          setError(`HTTP ${res.status}: ${res.statusText}`);
          setStatus("error");
          setResponse(JSON.stringify(data, null, 2));
        }
      } catch (err) {
        console.error("[RestApiTester] API 测试失败:", err);
        setError(err.message || "请求失败");
        setStatus("error");
      } finally {
        setLoading(false);
      }
    };
    const handleApiChange = (newApi) => {
      onChange?.({
        ...value,
        api: newApi
      });
    };
    const handleMethodChange = (newMethod) => {
      onChange?.({
        ...value,
        method: newMethod
      });
    };
    return /* @__PURE__ */ import_react11.default.createElement("div", { style: { width: "100%", padding: "8px 0" } }, /* @__PURE__ */ import_react11.default.createElement(import_antd9.Space, { direction: "vertical", style: { width: "100%" }, size: "middle" }, /* @__PURE__ */ import_react11.default.createElement("div", null, /* @__PURE__ */ import_react11.default.createElement("div", { style: { marginBottom: 8 } }, /* @__PURE__ */ import_react11.default.createElement(Text, { strong: true, style: { fontSize: 14 } }, "API 配置")), /* @__PURE__ */ import_react11.default.createElement(import_antd9.Space.Compact, { style: { width: "100%" } }, /* @__PURE__ */ import_react11.default.createElement(
      import_antd9.Select,
      {
        value: method,
        onChange: handleMethodChange,
        style: { width: 120 },
        options: [
          { label: "GET", value: "GET" },
          { label: "POST", value: "POST" }
        ]
      }
    ), /* @__PURE__ */ import_react11.default.createElement(
      import_antd9.Input,
      {
        placeholder: "请输入 API 地址，如 http://localhost:3000/lowcode/products",
        value: api,
        onChange: (e) => handleApiChange(e.target.value),
        onPressEnter: handleTestApi,
        style: { flex: 1 },
        allowClear: true
      }
    ), /* @__PURE__ */ import_react11.default.createElement(
      import_antd9.Button,
      {
        type: "primary",
        icon: loading ? /* @__PURE__ */ import_react11.default.createElement(LoadingOutlined_default2, null) : /* @__PURE__ */ import_react11.default.createElement(PlayCircleOutlined_default2, null),
        onClick: handleTestApi,
        loading,
        disabled: !api.trim()
      },
      "执行"
    ))), status === "success" && /* @__PURE__ */ import_react11.default.createElement(
      import_antd9.Alert,
      {
        message: "API 请求成功",
        type: "success",
        showIcon: true,
        icon: /* @__PURE__ */ import_react11.default.createElement(CheckCircleOutlined_default2, null),
        closable: true,
        onClose: () => setStatus("idle")
      }
    ), status === "error" && /* @__PURE__ */ import_react11.default.createElement(
      import_antd9.Alert,
      {
        message: `请求失败：${error}`,
        type: "error",
        showIcon: true,
        icon: /* @__PURE__ */ import_react11.default.createElement(CloseCircleOutlined_default2, null),
        closable: true,
        onClose: () => {
          setError("");
          setStatus("idle");
        }
      }
    ), (response || status === "error") && /* @__PURE__ */ import_react11.default.createElement(
      import_antd9.Card,
      {
        size: "small",
        title: /* @__PURE__ */ import_react11.default.createElement("span", null, "Response", status === "success" && /* @__PURE__ */ import_react11.default.createElement(Text, { type: "success", style: { marginLeft: 8 } }, "✓"), status === "error" && /* @__PURE__ */ import_react11.default.createElement(Text, { type: "danger", style: { marginLeft: 8 } }, "✗")),
        style: {
          backgroundColor: "#f5f5f5",
          maxHeight: 400,
          overflow: "auto"
        }
      },
      /* @__PURE__ */ import_react11.default.createElement(import_antd9.Spin, { spinning: loading }, /* @__PURE__ */ import_react11.default.createElement(
        TextArea2,
        {
          value: response || `Error: ${error}`,
          autoSize: { minRows: 6, maxRows: 15 },
          readOnly: true,
          style: {
            backgroundColor: status === "error" ? "#fff2f0" : "#fafafa",
            fontFamily: 'Monaco, Menlo, Consolas, "Courier New", monospace',
            fontSize: 12,
            color: status === "error" ? "#ff4d4f" : "#262626",
            resize: "none"
          }
        }
      )),
      status === "success" && response && (() => {
        try {
          const jsonData = JSON.parse(response);
          if (jsonData.code === 200 && jsonData.data && Array.isArray(jsonData.data.list)) {
            return /* @__PURE__ */ import_react11.default.createElement("div", { style: { marginTop: 12, padding: "8px 12px", backgroundColor: "#f6ffed", borderRadius: 4, border: "1px solid #b7eb8f" } }, /* @__PURE__ */ import_react11.default.createElement(Text, { type: "success", strong: true }, "✓ 数据验证通过：共获取 ", jsonData.data.total, " 条数据，当前页显示 ", jsonData.data.list.length, " 条"));
          }
        } catch (e) {
        }
        return null;
      })()
    )));
  };
  var RestApiTester_default = RestApiTester;

  // src/plugins/plugin-mall-components/entry-components.ts
  var MallComponents = {
    ProductList: ProductList_default2,
    ProductForm: ProductForm_default2,
    OrderList: OrderList_default,
    OrderForm: OrderForm_default,
    CouponCard: CouponCard_default,
    PromotionCard: PromotionCard_default,
    UserCard: UserCard_default,
    RoleCard: RoleCard_default,
    RestApiTester: RestApiTester_default
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

