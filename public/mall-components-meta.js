"use strict";
var MallComponentsMeta = (() => {
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

  // node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = ReactPropTypesSecret;
    }
  });

  // node_modules/prop-types/lib/has.js
  var require_has = __commonJS({
    "node_modules/prop-types/lib/has.js"(exports, module) {
      module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
    }
  });

  // node_modules/prop-types/checkPropTypes.js
  var require_checkPropTypes = __commonJS({
    "node_modules/prop-types/checkPropTypes.js"(exports, module) {
      "use strict";
      var printWarning = function() {
      };
      if (true) {
        ReactPropTypesSecret = require_ReactPropTypesSecret();
        loggedTypeFailures = {};
        has = require_has();
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      var ReactPropTypesSecret;
      var loggedTypeFailures;
      var has;
      function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
        if (true) {
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error(
                    (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  err.name = "Invariant Violation";
                  throw err;
                }
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              if (error && !(error instanceof Error)) {
                printWarning(
                  (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                );
              }
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                loggedTypeFailures[error.message] = true;
                var stack = getStack ? getStack() : "";
                printWarning(
                  "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
                );
              }
            }
          }
        }
      }
      checkPropTypes.resetWarningCache = function() {
        if (true) {
          loggedTypeFailures = {};
        }
      };
      module.exports = checkPropTypes;
    }
  });

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var _assign = require_object_assign();
          var checkPropTypes = require_checkPropTypes();
          var ReactVersion = "16.14.0";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.context") : 60110;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
          var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactCurrentBatchConfig = {
            suspense: null
          };
          var ReactCurrentOwner = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
          function describeComponentFrame(name, source, ownerName) {
            var sourceInfo = "";
            if (source) {
              var path = source.fileName;
              var fileName = path.replace(BEFORE_SLASH_RE, "");
              {
                if (/^index\./.test(fileName)) {
                  var match = path.match(BEFORE_SLASH_RE);
                  if (match) {
                    var pathBeforeSlash = match[1];
                    if (pathBeforeSlash) {
                      var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, "");
                      fileName = folderName + "/" + fileName;
                    }
                  }
                }
              }
              sourceInfo = " (at " + fileName + ":" + source.lineNumber + ")";
            } else if (ownerName) {
              sourceInfo = " (created by " + ownerName + ")";
            }
            return "\n    in " + (name || "Unknown") + sourceInfo;
          }
          var Resolved = 1;
          function refineResolvedLazyComponent(lazyComponent) {
            return lazyComponent._status === Resolved ? lazyComponent._result : null;
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var functionName = innerType.displayName || innerType.name || "";
            return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
          }
          function getComponentName(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  return "Context.Consumer";
                case REACT_PROVIDER_TYPE:
                  return "Context.Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  return getComponentName(type.type);
                case REACT_BLOCK_TYPE:
                  return getComponentName(type.render);
                case REACT_LAZY_TYPE: {
                  var thenable = type;
                  var resolvedThenable = refineResolvedLazyComponent(thenable);
                  if (resolvedThenable) {
                    return getComponentName(resolvedThenable);
                  }
                  break;
                }
              }
            }
            return null;
          }
          var ReactDebugCurrentFrame = {};
          var currentlyValidatingElement = null;
          function setCurrentlyValidatingElement(element) {
            {
              currentlyValidatingElement = element;
            }
          }
          {
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentlyValidatingElement) {
                var name = getComponentName(currentlyValidatingElement.type);
                var owner = currentlyValidatingElement._owner;
                stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var IsSomeRendererActing = {
            current: false
          };
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner,
            IsSomeRendererActing,
            // Used by renderers to avoid bundling object-assign twice in UMD bundles:
            assign: _assign
          };
          {
            _assign(ReactSharedInternals, {
              // These should not be included in production.
              ReactDebugCurrentFrame,
              // Shim for React DOM 16.0.0 which still destructured (but not used) this.
              // TODO: remove in React 17.0.
              ReactComponentTreeHook: {}
            });
          }
          function warn(format) {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
          function error(format) {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
          function printWarning(level, format, args) {
            {
              var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === "string" && args[args.length - 1].indexOf("\n    in") === 0;
              if (!hasExistingStack) {
                var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame2.getStackAddendum();
                if (stack !== "") {
                  format += "%s";
                  args = args.concat([stack]);
                }
              }
              var argsWithFormat = args.map(function(item) {
                return "" + item;
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
              try {
                var argIndex = 0;
                var message = "Warning: " + format.replace(/%s/g, function() {
                  return args[argIndex++];
                });
                throw new Error(message);
              } catch (x) {
              }
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            /**
             * Checks whether or not this composite component is mounted.
             * @param {ReactClass} publicInstance The instance we want to test.
             * @return {boolean} True if mounted, false otherwise.
             * @protected
             * @final
             */
            isMounted: function(publicInstance) {
              return false;
            },
            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            /**
             * Replaces all of the state. Always use this or `setState` to mutate state.
             * You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} completeState Next state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            /**
             * Sets a subset of the state. This only exists because _pendingState is
             * internal. This provides a merging strategy that is not available to deep
             * properties which is confusing. TODO: Expose pendingState or don't use it
             * during the merge.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} partialState Next partial state to be merged with state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} Name of the calling function in the public API.
             * @internal
             */
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
              {
                throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
              }
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          _assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentName(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function(type, key, ref, self, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement9(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                key = "" + config.key;
              }
              self = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          function cloneElement(element, config, children) {
            if (!!(element === null || element === void 0)) {
              {
                throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
              }
            }
            var propName;
            var props = _assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                key = "" + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self, source, owner, props);
          }
          function isValidElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = ("" + key).replace(escapeRegex, function(match) {
              return escaperLookup[match];
            });
            return "$" + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return ("" + text).replace(userProvidedKeyEscapeRegex, "$&/");
          }
          var POOL_SIZE = 10;
          var traverseContextPool = [];
          function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
            if (traverseContextPool.length) {
              var traverseContext = traverseContextPool.pop();
              traverseContext.result = mapResult;
              traverseContext.keyPrefix = keyPrefix;
              traverseContext.func = mapFunction;
              traverseContext.context = mapContext;
              traverseContext.count = 0;
              return traverseContext;
            } else {
              return {
                result: mapResult,
                keyPrefix,
                func: mapFunction,
                context: mapContext,
                count: 0
              };
            }
          }
          function releaseTraverseContext(traverseContext) {
            traverseContext.result = null;
            traverseContext.keyPrefix = null;
            traverseContext.func = null;
            traverseContext.context = null;
            traverseContext.count = 0;
            if (traverseContextPool.length < POOL_SIZE) {
              traverseContextPool.push(traverseContext);
            }
          }
          function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              callback(
                traverseContext,
                children,
                // If it's the only child, treat the name as if it was wrapped in an array
                // so that it's consistent if the number of children grows.
                nameSoFar === "" ? SEPARATOR + getComponentKey(children, 0) : nameSoFar
              );
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (Array.isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getComponentKey(child, i);
                subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                {
                  if (iteratorFn === children.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is deprecated and will be removed in a future major release. Consider converting children to an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(children);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getComponentKey(child, ii++);
                  subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
                }
              } else if (type === "object") {
                var addendum = "";
                {
                  addendum = " If you meant to render a collection of children, use an array instead." + ReactDebugCurrentFrame.getStackAddendum();
                }
                var childrenString = "" + children;
                {
                  {
                    throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + ")." + addendum);
                  }
                }
              }
            }
            return subtreeCount;
          }
          function traverseAllChildren(children, callback, traverseContext) {
            if (children == null) {
              return 0;
            }
            return traverseAllChildrenImpl(children, "", callback, traverseContext);
          }
          function getComponentKey(component, index) {
            if (typeof component === "object" && component !== null && component.key != null) {
              return escape(component.key);
            }
            return index.toString(36);
          }
          function forEachSingleChild(bookKeeping, child, name) {
            var func = bookKeeping.func, context = bookKeeping.context;
            func.call(context, child, bookKeeping.count++);
          }
          function forEachChildren(children, forEachFunc, forEachContext) {
            if (children == null) {
              return children;
            }
            var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
            traverseAllChildren(children, forEachSingleChild, traverseContext);
            releaseTraverseContext(traverseContext);
          }
          function mapSingleChildIntoContext(bookKeeping, child, childKey) {
            var result = bookKeeping.result, keyPrefix = bookKeeping.keyPrefix, func = bookKeeping.func, context = bookKeeping.context;
            var mappedChild = func.call(context, child, bookKeeping.count++);
            if (Array.isArray(mappedChild)) {
              mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + "/" : "") + childKey
                );
              }
              result.push(mappedChild);
            }
          }
          function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
            var escapedPrefix = "";
            if (prefix != null) {
              escapedPrefix = escapeUserProvidedKey(prefix) + "/";
            }
            var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
            traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
            releaseTraverseContext(traverseContext);
          }
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            mapIntoWithKeyPrefixInternal(children, result, null, func, context);
            return result;
          }
          function countChildren(children) {
            return traverseAllChildren(children, function() {
              return null;
            }, null);
          }
          function toArray(children) {
            var result = [];
            mapIntoWithKeyPrefixInternal(children, result, null, function(child) {
              return child;
            });
            return result;
          }
          function onlyChild(children) {
            if (!isValidElement(children)) {
              {
                throw Error("React.Children.only expected to receive a single React element child.");
              }
            }
            return children;
          }
          function createContext2(defaultValue, calculateChangedBits) {
            if (calculateChangedBits === void 0) {
              calculateChangedBits = null;
            } else {
              {
                if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                  error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
                }
              }
            }
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              _calculateChangedBits: calculateChangedBits,
              // As a workaround to support multiple concurrent renderers, we categorize
              // some renderers as primary and others as secondary. We only expect
              // there to be two concurrent renderers at most: React Native (primary) and
              // Fabric (secondary); React DOM (primary) and React ART (secondary).
              // Secondary renderers store their context values on separate fields.
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              // Used to track how many concurrent renderers this context currently
              // supports within in a single renderer. Such as parallel server rendering.
              _threadCount: 0,
              // These are circular
              Provider: null,
              Consumer: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context,
                _calculateChangedBits: context._calculateChangedBits
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          function lazy(ctor) {
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _ctor: ctor,
              // React uses these fields to store the result.
              _status: -1,
              _result: null
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          function forwardRef9(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            return {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
          }
          function isValidElementType(type) {
            return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
          }
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            return {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            if (!(dispatcher !== null)) {
              {
                throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          function useContext3(Context, unstable_observedBits) {
            var dispatcher = resolveDispatcher();
            {
              if (unstable_observedBits !== void 0) {
                error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks" : "");
              }
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context, unstable_observedBits);
          }
          function useState(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          function useRef(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect2(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentName(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement(element);
            {
              error('Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
            }
            setCurrentlyValidatingElement(null);
          }
          function validateChildKeys(node, parentType) {
            if (typeof node !== "object") {
              return;
            }
            if (Array.isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var name = getComponentName(type);
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                setCurrentlyValidatingElement(element);
                checkPropTypes(propTypes, element.props, "prop", name, ReactDebugCurrentFrame.getStackAddendum);
                setCurrentlyValidatingElement(null);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              setCurrentlyValidatingElement(fragment);
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  break;
                }
              }
              if (fragment.ref !== null) {
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
              }
              setCurrentlyValidatingElement(null);
            }
          }
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (Array.isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement9.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          {
            try {
              var frozenObject = Object.freeze({});
              var testMap = /* @__PURE__ */ new Map([[frozenObject, null]]);
              var testSet = /* @__PURE__ */ new Set([frozenObject]);
              testMap.set(0, 0);
              testSet.add(0);
            } catch (e) {
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children;
          exports.Component = Component;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.Profiler = REACT_PROFILER_TYPE;
          exports.PureComponent = PureComponent;
          exports.StrictMode = REACT_STRICT_MODE_TYPE;
          exports.Suspense = REACT_SUSPENSE_TYPE;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext2;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef9;
          exports.isValidElement = isValidElement;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.useCallback = useCallback;
          exports.useContext = useContext3;
          exports.useDebugValue = useDebugValue;
          exports.useEffect = useEffect2;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo;
          exports.useReducer = useReducer;
          exports.useRef = useRef;
          exports.useState = useState;
          exports.version = ReactVersion;
        })();
      }
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
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

  // src/plugins/plugin-mall-components/entry-meta.ts
  var entry_meta_exports = {};
  __export(entry_meta_exports, {
    default: () => entry_meta_default
  });

  // src/plugins/plugin-mall-components/meta/productListMeta.ts
  var import_react3 = __toESM(require_react());

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
  function warning(valid, message) {
    if (!valid && console !== void 0) {
      var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
        return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "warning");
      }, message);
      if (finalMessage) {
        console.error("Warning: ".concat(finalMessage));
      }
    }
  }
  function note(valid, message) {
    if (!valid && console !== void 0) {
      var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
        return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "note");
      }, message);
      if (finalMessage) {
        console.warn("Note: ".concat(finalMessage));
      }
    }
  }
  function resetWarned() {
    warned = {};
  }
  function call(method, valid, message) {
    if (!valid && !warned[message]) {
      method(false, message);
      warned[message] = true;
    }
  }
  function warningOnce(valid, message) {
    call(warning, valid, message);
  }
  function noteOnce(valid, message) {
    call(note, valid, message);
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
  function warning2(valid, message) {
    warning_default(valid, "[@ant-design/icons] ".concat(message));
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

  // node_modules/@ant-design/icons/es/icons/BarsOutlined.js
  var React3 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/BarsOutlined.js
  var BarsOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "bars", "theme": "outlined" };
  var BarsOutlined_default = BarsOutlined;

  // node_modules/@ant-design/icons/es/icons/BarsOutlined.js
  var BarsOutlined2 = function BarsOutlined3(props, ref) {
    return /* @__PURE__ */ React3.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: BarsOutlined_default
    }));
  };
  BarsOutlined2.displayName = "BarsOutlined";
  var BarsOutlined_default2 = /* @__PURE__ */ React3.forwardRef(BarsOutlined2);

  // node_modules/@ant-design/icons/es/icons/FileTextOutlined.js
  var React4 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/FileTextOutlined.js
  var FileTextOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z" } }] }, "name": "file-text", "theme": "outlined" };
  var FileTextOutlined_default = FileTextOutlined;

  // node_modules/@ant-design/icons/es/icons/FileTextOutlined.js
  var FileTextOutlined2 = function FileTextOutlined3(props, ref) {
    return /* @__PURE__ */ React4.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: FileTextOutlined_default
    }));
  };
  FileTextOutlined2.displayName = "FileTextOutlined";
  var FileTextOutlined_default2 = /* @__PURE__ */ React4.forwardRef(FileTextOutlined2);

  // node_modules/@ant-design/icons/es/icons/FormOutlined.js
  var React5 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/FormOutlined.js
  var FormOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z" } }, { "tag": "path", "attrs": { "d": "M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z" } }] }, "name": "form", "theme": "outlined" };
  var FormOutlined_default = FormOutlined;

  // node_modules/@ant-design/icons/es/icons/FormOutlined.js
  var FormOutlined2 = function FormOutlined3(props, ref) {
    return /* @__PURE__ */ React5.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: FormOutlined_default
    }));
  };
  FormOutlined2.displayName = "FormOutlined";
  var FormOutlined_default2 = /* @__PURE__ */ React5.forwardRef(FormOutlined2);

  // node_modules/@ant-design/icons/es/icons/GiftOutlined.js
  var React6 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/GiftOutlined.js
  var GiftOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 310H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v200c0 4.4 3.6 8 8 8h40v344c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V550h40c4.4 0 8-3.6 8-8V342c0-17.7-14.3-32-32-32zm-334-74c0-38.6 31.4-70 70-70s70 31.4 70 70-31.4 70-70 70h-70v-70zm-138-70c38.6 0 70 31.4 70 70v70h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70zM180 482V378h298v104H180zm48 68h250v308H228V550zm568 308H546V550h250v308zm48-376H546V378h298v104z" } }] }, "name": "gift", "theme": "outlined" };
  var GiftOutlined_default = GiftOutlined;

  // node_modules/@ant-design/icons/es/icons/GiftOutlined.js
  var GiftOutlined2 = function GiftOutlined3(props, ref) {
    return /* @__PURE__ */ React6.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: GiftOutlined_default
    }));
  };
  GiftOutlined2.displayName = "GiftOutlined";
  var GiftOutlined_default2 = /* @__PURE__ */ React6.forwardRef(GiftOutlined2);

  // node_modules/@ant-design/icons/es/icons/StarOutlined.js
  var React7 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/StarOutlined.js
  var StarOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z" } }] }, "name": "star", "theme": "outlined" };
  var StarOutlined_default = StarOutlined;

  // node_modules/@ant-design/icons/es/icons/StarOutlined.js
  var StarOutlined2 = function StarOutlined3(props, ref) {
    return /* @__PURE__ */ React7.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: StarOutlined_default
    }));
  };
  StarOutlined2.displayName = "StarOutlined";
  var StarOutlined_default2 = /* @__PURE__ */ React7.forwardRef(StarOutlined2);

  // node_modules/@ant-design/icons/es/icons/TeamOutlined.js
  var React8 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/TeamOutlined.js
  var TeamOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z" } }] }, "name": "team", "theme": "outlined" };
  var TeamOutlined_default = TeamOutlined;

  // node_modules/@ant-design/icons/es/icons/TeamOutlined.js
  var TeamOutlined2 = function TeamOutlined3(props, ref) {
    return /* @__PURE__ */ React8.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: TeamOutlined_default
    }));
  };
  TeamOutlined2.displayName = "TeamOutlined";
  var TeamOutlined_default2 = /* @__PURE__ */ React8.forwardRef(TeamOutlined2);

  // node_modules/@ant-design/icons/es/icons/UserOutlined.js
  var React9 = __toESM(require_react());

  // node_modules/@ant-design/icons-svg/es/asn/UserOutlined.js
  var UserOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" } }] }, "name": "user", "theme": "outlined" };
  var UserOutlined_default = UserOutlined;

  // node_modules/@ant-design/icons/es/icons/UserOutlined.js
  var UserOutlined2 = function UserOutlined3(props, ref) {
    return /* @__PURE__ */ React9.createElement(AntdIcon_default, _objectSpread2(_objectSpread2({}, props), {}, {
      ref,
      icon: UserOutlined_default
    }));
  };
  UserOutlined2.displayName = "UserOutlined";
  var UserOutlined_default2 = /* @__PURE__ */ React9.forwardRef(UserOutlined2);

  // src/plugins/plugin-mall-components/meta/productListMeta.ts
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
          name: "时尚运动鞋",
          productSn: "PRODUCT001",
          price: 299,
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
  var productListMeta_default = {
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
        name: "api",
        propType: "string",
        description: "API 地址"
      },
      {
        name: "method",
        propType: "string",
        description: "请求方法",
        defaultValue: "GET"
      },
      {
        name: "mockData",
        propType: "string",
        description: "Mock 数据",
        defaultValue: JSON.stringify(defaultMockData)
      },
      {
        name: "variableName",
        propType: "string",
        description: "变量名称"
      },
      {
        name: "showFilter",
        propType: "bool",
        description: "是否显示筛选搜索区域",
        defaultValue: true
      },
      {
        name: "showAction",
        propType: "bool",
        description: "是否显示操作区域",
        defaultValue: true
      },
      {
        name: "showSelection",
        propType: "bool",
        description: "是否显示选择列",
        defaultValue: true
      },
      {
        name: "showOperation",
        propType: "bool",
        description: "是否显示操作列",
        defaultValue: true
      },
      {
        name: "showStatus",
        propType: "bool",
        description: "是否显示状态列",
        defaultValue: true
      },
      {
        name: "showPagination",
        propType: "bool",
        description: "是否显示分页区域",
        defaultValue: true
      },
      {
        name: "actionButtons",
        propType: "array",
        description: "操作按钮配置"
      },
      {
        name: "batchOperations",
        propType: "array",
        description: "批量操作配置"
      }
    ],
    configure: {
      supports: {
        style: true,
        events: [
          { name: "onRowClick", description: "行点击" },
          { name: "onSearch", description: "搜索" },
          { name: "onPageChange", description: "分页变化" },
          { name: "onActionClick", description: "操作按钮点击" },
          { name: "onBatchOperation", description: "批量操作" }
        ]
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
                    { label: "REST API", value: "rest" },
                    { label: "Mock 数据", value: "mock" },
                    { label: "变量绑定", value: "variable" }
                  ]
                }
              },
              extraProps: {
                display: "block"
              }
            },
            {
              name: "api",
              title: "REST API 配置",
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
              title: "Mock 数据",
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
              title: "变量名称",
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
          title: "区域显示控制",
          display: "accordion",
          items: [
            { name: "showFilter", title: "显示筛选区域", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showAction", title: "显示操作区域", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showSelection", title: "显示选择列", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showOperation", title: "显示操作列", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showStatus", title: "显示状态列", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showPagination", title: "显示分页", setter: "BoolSetter", extraProps: { display: "block" } }
          ]
        },
        {
          type: "group",
          title: "操作配置",
          display: "accordion",
          items: [
            {
              name: "actionButtons",
              title: "操作按钮",
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
                              { name: "text", description: "按钮文本", setter: "StringSetter" },
                              {
                                name: "icon",
                                description: "图标",
                                setter: {
                                  componentName: "SelectSetter",
                                  props: {
                                    options: [
                                      { label: "加号", value: "plus" },
                                      { label: "下载", value: "download" },
                                      { label: "上传", value: "upload" }
                                    ]
                                  }
                                }
                              },
                              {
                                name: "type",
                                description: "按钮类型",
                                setter: {
                                  componentName: "SelectSetter",
                                  props: {
                                    options: [
                                      { label: "主要按钮", value: "primary" },
                                      { label: "默认按钮", value: "default" },
                                      { label: "虚线按钮", value: "dashed" },
                                      { label: "链接按钮", value: "link" },
                                      { label: "文本按钮", value: "text" }
                                    ]
                                  }
                                }
                              },
                              { name: "onClick", description: "点击事件", setter: "StringSetter" }
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
              title: "批量操作",
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
                              { name: "text", description: "操作名称", setter: "StringSetter" },
                              { name: "value", description: "操作值", setter: "StringSetter" },
                              { name: "action", description: "操作动作", setter: "StringSetter" }
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
    icon: import_react3.default.createElement(BarsOutlined_default2),
    category: "电商业务",
    group: "商品管理",
    snippets: [
      {
        title: "完整商品列表",
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
              { text: "添加商品", icon: "plus", type: "primary", onClick: "addProduct" },
              { text: "导出", icon: "download", type: "default" }
            ],
            batchOperations: [
              { text: "批量上架", value: "publishOn" },
              { text: "批量下架", value: "publishOff" },
              { text: "批量删除", value: "delete" }
            ]
          }
        }
      },
      {
        title: "简洁商品列表",
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
        title: "只读商品列表",
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

  // src/plugins/plugin-mall-components/meta/productFormMeta.ts
  var import_react4 = __toESM(require_react());
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
        propType: "string",
        description: "表单初始值（JSON 格式）",
        defaultValue: "{}"
      },
      {
        name: "mode",
        propType: "string",
        description: "表单模式",
        defaultValue: "create",
        setter: {
          componentName: "SelectSetter",
          props: {
            options: [
              { label: "创建模式", value: "create" },
              { label: "编辑模式", value: "edit" },
              { label: "查看模式", value: "view" }
            ]
          }
        }
      },
      {
        name: "showBasicInfo",
        propType: "bool",
        description: "是否显示基本信息",
        defaultValue: true,
        setter: "BoolSetter"
      },
      {
        name: "showPriceInfo",
        propType: "bool",
        description: "是否显示价格信息",
        defaultValue: true,
        setter: "BoolSetter"
      },
      {
        name: "showStockInfo",
        propType: "bool",
        description: "是否显示库存信息",
        defaultValue: true,
        setter: "BoolSetter"
      },
      {
        name: "showStatusInfo",
        propType: "bool",
        description: "是否显示状态信息",
        defaultValue: true,
        setter: "BoolSetter"
      },
      {
        name: "showDescription",
        propType: "bool",
        description: "是否显示描述信息",
        defaultValue: true,
        setter: "BoolSetter"
      }
    ],
    configure: {
      supports: {
        style: true,
        events: [
          { name: "onSubmit", description: "提交" },
          { name: "onCancel", description: "取消" }
        ]
      },
      props: [
        {
          type: "group",
          title: "表单配置",
          display: "accordion",
          items: [
            {
              name: "mode",
              title: "表单模式",
              setter: {
                componentName: "SelectSetter",
                props: {
                  options: [
                    { label: "创建模式", value: "create" },
                    { label: "编辑模式", value: "edit" },
                    { label: "查看模式", value: "view" }
                  ]
                }
              }
            },
            {
              name: "initialValues",
              title: "表单初始值",
              setter: {
                componentName: "TextAreaSetter",
                props: {
                  rows: 10,
                  placeholder: "请输入 JSON 格式的表单初始值"
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
          title: "标签页显示控制",
          display: "accordion",
          items: [
            { name: "showBasicInfo", title: "显示基本信息", setter: "BoolSetter" },
            { name: "showPriceInfo", title: "显示价格信息", setter: "BoolSetter" },
            { name: "showStockInfo", title: "显示库存信息", setter: "BoolSetter" },
            { name: "showStatusInfo", title: "显示状态信息", setter: "BoolSetter" },
            { name: "showDescription", title: "显示描述信息", setter: "BoolSetter" }
          ]
        }
      ]
    },
    icon: import_react4.default.createElement(FormOutlined_default2),
    category: "电商业务",
    group: "商品管理",
    snippets: [
      {
        title: "创建商品表单",
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
        title: "编辑商品表单",
        schema: {
          componentName: "ProductForm",
          props: {
            mode: "edit",
            initialValues: JSON.stringify({
              id: 1,
              name: "时尚运动鞋",
              productSn: "PRODUCT001",
              price: 269,
              stock: 100,
              brandName: "时尚运动",
              productCategoryName: "鞋子",
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
        title: "查看商品表单",
        schema: {
          componentName: "ProductForm",
          props: {
            mode: "view",
            initialValues: JSON.stringify({
              id: 1,
              name: "时尚运动鞋",
              productSn: "PRODUCT001",
              price: 269,
              stock: 100,
              brandName: "时尚运动",
              productCategoryName: "鞋子",
              publishStatus: 1,
              newStatus: 1,
              recommandStatus: 1,
              description: "这是一款时尚的运动鞋，适合日常穿着。"
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

  // src/plugins/plugin-mall-components/meta/orderListMeta.ts
  var import_react5 = __toESM(require_react());
  var orderListMeta = {
    componentName: "OrderList",
    title: "订单列表",
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: {
      package: "mall-components",
      version: "1.0.0",
      exportName: "OrderList",
      main: "lib/index.js",
      destructuring: true,
      subName: ""
    },
    category: "电商业务",
    group: "订单管理",
    icon: import_react5.default.createElement(FileTextOutlined_default2),
    props: [
      {
        name: "dataSource",
        propType: "string",
        description: "数据源配置"
      },
      {
        name: "showFilter",
        propType: "bool",
        description: "是否显示筛选区域",
        defaultValue: true
      },
      {
        name: "showStatusFilter",
        propType: "bool",
        description: "是否显示状态筛选",
        defaultValue: true
      },
      {
        name: "showSearch",
        propType: "bool",
        description: "是否显示搜索框",
        defaultValue: true
      },
      {
        name: "showDatePicker",
        propType: "bool",
        description: "是否显示日期选择器",
        defaultValue: true
      },
      {
        name: "showActions",
        propType: "bool",
        description: "是否显示操作按钮",
        defaultValue: true
      },
      {
        name: "showBatchOperations",
        propType: "bool",
        description: "是否显示批量操作",
        defaultValue: true
      },
      {
        name: "showExport",
        propType: "bool",
        description: "是否显示导出按钮",
        defaultValue: true
      },
      {
        name: "defaultPageSize",
        propType: "number",
        description: "默认每页条数",
        defaultValue: 10
      },
      {
        name: "style",
        propType: "object",
        description: "自定义样式"
      },
      {
        name: "className",
        propType: "string",
        description: "自定义类名"
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
            name: "showFilter",
            setter: {
              componentName: "BoolSetter"
            }
          },
          {
            name: "showStatusFilter",
            setter: {
              componentName: "BoolSetter"
            }
          },
          {
            name: "showSearch",
            setter: {
              componentName: "BoolSetter"
            }
          },
          {
            name: "showDatePicker",
            setter: {
              componentName: "BoolSetter"
            }
          },
          {
            name: "showActions",
            setter: {
              componentName: "BoolSetter"
            }
          },
          {
            name: "showBatchOperations",
            setter: {
              componentName: "BoolSetter"
            }
          },
          {
            name: "showExport",
            setter: {
              componentName: "BoolSetter"
            }
          },
          {
            name: "defaultPageSize",
            setter: {
              componentName: "NumberSetter"
            }
          }
        ]
      },
      component: {
        isContainer: false,
        isModal: false,
        rootSelector: ".mall-order-list",
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
        title: "订单列表",
        screenshot: "",
        schema: {
          componentName: "OrderList",
          props: {
            showFilter: true,
            showStatusFilter: true,
            showSearch: true,
            showDatePicker: true,
            showActions: true,
            showBatchOperations: true,
            showExport: true,
            defaultPageSize: 10
          }
        }
      },
      {
        title: "订单列表（简洁模式）",
        screenshot: "",
        schema: {
          componentName: "OrderList",
          props: {
            showFilter: false,
            showActions: false,
            showBatchOperations: false,
            showExport: false,
            defaultPageSize: 10
          }
        }
      },
      {
        title: "订单列表（只读模式）",
        screenshot: "",
        schema: {
          componentName: "OrderList",
          props: {
            showFilter: true,
            showStatusFilter: true,
            showSearch: true,
            showDatePicker: true,
            showActions: false,
            showBatchOperations: false,
            showExport: false,
            defaultPageSize: 10
          }
        }
      }
    ]
  };
  var orderListMeta_default = orderListMeta;

  // src/plugins/plugin-mall-components/meta/orderFormMeta.ts
  var import_react6 = __toESM(require_react());
  var orderFormMeta = {
    componentName: "OrderForm",
    title: "订单表单",
    docUrl: "",
    screenshot: "",
    devMode: "proCode",
    npm: {
      package: "mall-components",
      version: "1.0.0",
      exportName: "OrderForm",
      main: "lib/index.js",
      destructuring: true,
      subName: ""
    },
    category: "电商业务",
    group: "订单管理",
    icon: import_react6.default.createElement(FormOutlined_default2),
    props: [
      {
        name: "initialValues",
        propType: "string",
        description: "初始值（JSON字符串）"
      },
      {
        name: "mode",
        propType: "string",
        description: "表单模式",
        defaultValue: "create"
      },
      {
        name: "onSubmit",
        propType: "func",
        description: "提交回调"
      },
      {
        name: "onCancel",
        propType: "func",
        description: "取消回调"
      },
      {
        name: "style",
        propType: "object",
        description: "自定义样式"
      },
      {
        name: "className",
        propType: "string",
        description: "自定义类名"
      }
    ],
    configure: {
      props: [
        {
          name: "mode",
          title: "表单模式",
          setter: {
            componentName: "RadioGroupSetter",
            props: {
              options: [
                { title: "创建", value: "create" },
                { title: "编辑", value: "edit" },
                { title: "查看", value: "view" }
              ]
            }
          }
        }
      ],
      component: {
        isContainer: false,
        isModal: false,
        rootSelector: ".mall-order-form",
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
        title: "订单表单",
        screenshot: "",
        schema: {
          componentName: "OrderForm",
          props: {
            mode: "create"
          }
        }
      },
      {
        title: "订单表单（查看模式）",
        screenshot: "",
        schema: {
          componentName: "OrderForm",
          props: {
            mode: "view"
          }
        }
      }
    ]
  };
  var orderFormMeta_default = orderFormMeta;

  // src/plugins/plugin-mall-components/meta/couponCardMeta.ts
  var import_react7 = __toESM(require_react());
  var couponCardMeta = {
    componentName: "CouponCard",
    title: "优惠券管理",
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
    category: "电商业务",
    group: "营销管理",
    icon: import_react7.default.createElement(GiftOutlined_default2),
    props: [
      {
        name: "dataSource",
        propType: "string",
        description: "数据源配置"
      },
      {
        name: "showCreateButton",
        propType: "bool",
        description: "是否显示创建按钮",
        defaultValue: true
      },
      {
        name: "showFilter",
        propType: "bool",
        description: "是否显示筛选区域",
        defaultValue: true
      },
      {
        name: "showStatistics",
        propType: "bool",
        description: "是否显示统计信息",
        defaultValue: true
      },
      {
        name: "style",
        propType: "object",
        description: "自定义样式"
      },
      {
        name: "className",
        propType: "string",
        description: "自定义类名"
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
        rootSelector: ".mall-coupon-card",
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
        title: "优惠券管理",
        screenshot: "",
        schema: {
          componentName: "CouponCard",
          props: {
            showCreateButton: true,
            showFilter: true,
            showStatistics: true
          }
        }
      },
      {
        title: "优惠券管理（简洁模式）",
        screenshot: "",
        schema: {
          componentName: "CouponCard",
          props: {
            showCreateButton: false,
            showFilter: false,
            showStatistics: false
          }
        }
      }
    ]
  };
  var couponCardMeta_default = couponCardMeta;

  // src/plugins/plugin-mall-components/meta/promotionCardMeta.ts
  var import_react8 = __toESM(require_react());
  var promotionCardMeta = {
    componentName: "PromotionCard",
    title: "促销活动管理",
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
    category: "电商业务",
    group: "营销管理",
    icon: import_react8.default.createElement(StarOutlined_default2),
    props: [
      {
        name: "dataSource",
        propType: "string",
        description: "数据源配置"
      },
      {
        name: "showCreateButton",
        propType: "bool",
        description: "是否显示创建按钮",
        defaultValue: true
      },
      {
        name: "showFilter",
        propType: "bool",
        description: "是否显示筛选区域",
        defaultValue: true
      },
      {
        name: "showStatistics",
        propType: "bool",
        description: "是否显示统计信息",
        defaultValue: true
      },
      {
        name: "showTimeline",
        propType: "bool",
        description: "是否显示时间线",
        defaultValue: true
      },
      {
        name: "style",
        propType: "object",
        description: "自定义样式"
      },
      {
        name: "className",
        propType: "string",
        description: "自定义类名"
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
            name: "showTimeline",
            setter: {
              componentName: "BoolSetter"
            }
          }
        ]
      },
      component: {
        isContainer: false,
        isModal: false,
        rootSelector: ".mall-promotion-card",
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
        title: "促销活动管理",
        screenshot: "",
        schema: {
          componentName: "PromotionCard",
          props: {
            showCreateButton: true,
            showFilter: true,
            showStatistics: true,
            showTimeline: true
          }
        }
      },
      {
        title: "促销活动管理（简洁模式）",
        screenshot: "",
        schema: {
          componentName: "PromotionCard",
          props: {
            showCreateButton: false,
            showFilter: false,
            showStatistics: false,
            showTimeline: false
          }
        }
      }
    ]
  };
  var promotionCardMeta_default = promotionCardMeta;

  // src/plugins/plugin-mall-components/meta/userCardMeta.ts
  var import_react9 = __toESM(require_react());
  var userCardMeta = {
    componentName: "UserCard",
    title: "用户管理",
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
    category: "电商业务",
    group: "权限管理",
    icon: import_react9.default.createElement(UserOutlined_default2),
    props: [
      {
        name: "dataSource",
        propType: "string",
        description: "数据源配置"
      },
      {
        name: "showCreateButton",
        propType: "bool",
        description: "是否显示创建按钮",
        defaultValue: true
      },
      {
        name: "showFilter",
        propType: "bool",
        description: "是否显示筛选区域",
        defaultValue: true
      },
      {
        name: "showStatistics",
        propType: "bool",
        description: "是否显示统计信息",
        defaultValue: true
      },
      {
        name: "style",
        propType: "object",
        description: "自定义样式"
      },
      {
        name: "className",
        propType: "string",
        description: "自定义类名"
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
        title: "用户管理",
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
        title: "用户管理（简洁模式）",
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

  // src/plugins/plugin-mall-components/meta/roleCardMeta.ts
  var import_react10 = __toESM(require_react());
  var roleCardMeta = {
    componentName: "RoleCard",
    title: "角色管理",
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
    category: "电商业务",
    group: "权限管理",
    icon: import_react10.default.createElement(TeamOutlined_default2),
    props: [
      {
        name: "dataSource",
        propType: "string",
        description: "数据源配置"
      },
      {
        name: "showCreateButton",
        propType: "bool",
        description: "是否显示创建按钮",
        defaultValue: true
      },
      {
        name: "showFilter",
        propType: "bool",
        description: "是否显示筛选区域",
        defaultValue: true
      },
      {
        name: "showStatistics",
        propType: "bool",
        description: "是否显示统计信息",
        defaultValue: true
      },
      {
        name: "showPermissionTree",
        propType: "bool",
        description: "是否显示权限树",
        defaultValue: true
      },
      {
        name: "style",
        propType: "object",
        description: "自定义样式"
      },
      {
        name: "className",
        propType: "string",
        description: "自定义类名"
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
        title: "角色管理",
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
        title: "角色管理（简洁模式）",
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

  // src/plugins/plugin-mall-components/entry-meta.ts
  var entry_meta_default = [
    productListMeta_default,
    productFormMeta_default,
    orderListMeta_default,
    orderFormMeta_default,
    couponCardMeta_default,
    promotionCardMeta_default,
    userCardMeta_default,
    roleCardMeta_default
  ];
  return __toCommonJS(entry_meta_exports);
})();
/*! Bundled license information:

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

react/cjs/react.development.js:
  (** @license React v16.14.0
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
MallComponentsMeta = MallComponentsMeta.default || MallComponentsMeta;
