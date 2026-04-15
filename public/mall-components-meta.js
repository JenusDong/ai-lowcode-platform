
  if (typeof window !== 'undefined') {
    const es = new window.EventSource('http://localhost:5557/esbuild-livereload');
    es.onmessage = () => {
      try {
        if (window.AliLowCodeEngine && window.AliLowCodeEngine.project) {
          const scenarioName = 'general';
          const schema = window.AliLowCodeEngine.project.exportSchema('save');
          window.localStorage.setItem(scenarioName + ':projectSchema', JSON.stringify(schema));
          console.log('Auto-saved schema before reload.');
        }
      } catch (e) {
        console.error('Auto-save failed:', e);
      }
      console.log('Reloading page due to UMD changes...');
      window.location.reload();
    };
  }

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
          function createElement(type, config, children) {
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
          function createContext(defaultValue, calculateChangedBits) {
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
          function forwardRef(render) {
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
          function useContext(Context, unstable_observedBits) {
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
          function useEffect(create, deps) {
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
            var element = createElement.apply(this, arguments);
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
          exports.createContext = createContext;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef;
          exports.isValidElement = isValidElement;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.useCallback = useCallback;
          exports.useContext = useContext;
          exports.useDebugValue = useDebugValue;
          exports.useEffect = useEffect;
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

  // src/plugins/plugin-mall-components/entry-meta.ts
  var entry_meta_exports = {};
  __export(entry_meta_exports, {
    default: () => entry_meta_default,
    meta: () => meta
  });

  // src/plugins/plugin-mall-components/meta/icons.ts
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
      version: "1.0.9",
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
                    { label: "Mock 数据", value: "mock" },
                    { label: "数据源绑定", value: "variable" }
                  ]
                }
              },
              extraProps: {
                display: "block"
              }
            },
            {
              name: "mockData",
              title: "Mock 数据",
              setter: {
                componentName: "TextAreaSetter",
                props: {
                  rows: 10,
                  placeholder: "请输入 JSON 格式的 Mock 数据"
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
              name: "dataSource",
              title: "绑定数据源",
              setter: {
                componentName: "MixedSetter",
                props: {
                  setters: [
                    "JsonSetter",
                    "VariableSetter"
                  ]
                }
              },
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
    icon: Icons.list,
    category: "电商业务组件",
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
      },
      {
        title: "纯搜索商品列表",
        schema: {
          componentName: "ProductList",
          props: {
            dataSourceType: "mock",
            mockData: JSON.stringify(defaultMockData),
            showFilter: true,
            showAction: false,
            showSelection: false,
            showOperation: false,
            showStatus: false,
            showPagination: true
          }
        }
      }
    ]
  };

  // src/plugins/plugin-mall-components/meta/productFormMeta.ts
  var ProductFormMeta = {
    componentName: "ProductForm",
    title: "商品表单",
    docUrl: "https://github.com/alibaba/lowcode-engine",
    screenshot: "",
    npm: {
      package: "mall-components",
      version: "1.0.9",
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
    icon: Icons.form,
    category: "电商业务组件",
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
      },
      {
        title: "只读商品表单",
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
              sale: 120,
              brandName: "时尚运动",
              productCategoryName: "鞋子",
              pic: "https://img.yzcdn.cn/vant/cat.jpeg",
              publishStatus: 1,
              newStatus: 1,
              recommandStatus: 1,
              verifyStatus: 1,
              description: "这是一款时尚的运动鞋，适合日常穿着。",
              note: "热销商品"
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
        title: "简洁商品表单",
        schema: {
          componentName: "ProductForm",
          props: {
            mode: "create",
            initialValues: "{}",
            showBasicInfo: true,
            showPriceInfo: true,
            showStockInfo: false,
            showStatusInfo: false,
            showDescription: false
          }
        }
      }
    ]
  };
  var productFormMeta_default = ProductFormMeta;

  // src/plugins/plugin-mall-components/meta/orderListMeta.ts
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
          payType: 2,
          sourceType: 1,
          status: 2,
          orderType: 0,
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
          payType: 1,
          sourceType: 0,
          status: 3,
          orderType: 0,
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
          payType: 0,
          sourceType: 1,
          status: 0,
          orderType: 1,
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
          payType: 2,
          sourceType: 0,
          status: 4,
          orderType: 0,
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
  var orderListMeta = {
    componentName: "OrderList",
    title: "订单列表",
    docUrl: "https://github.com/alibaba/lowcode-engine",
    screenshot: "",
    npm: {
      package: "mall-components",
      version: "1.0.9",
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
        defaultValue: JSON.stringify(defaultMockData2)
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
        name: "showPagination",
        propType: "bool",
        description: "是否显示分页区域",
        defaultValue: true
      },
      {
        name: "defaultPageSize",
        propType: "number",
        description: "默认每页条数",
        defaultValue: 10
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
                    { label: "Mock 数据", value: "mock" },
                    { label: "数据源绑定", value: "variable" }
                  ]
                }
              },
              extraProps: {
                display: "block"
              }
            },
            {
              name: "mockData",
              title: "Mock 数据",
              setter: {
                componentName: "TextAreaSetter",
                props: {
                  rows: 10,
                  placeholder: "请输入 JSON 格式的 Mock 数据"
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
              name: "dataSource",
              title: "绑定数据源",
              setter: {
                componentName: "MixedSetter",
                props: {
                  setters: [
                    "JsonSetter",
                    "VariableSetter"
                  ]
                }
              },
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
            { name: "showStatusFilter", title: "显示状态筛选", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showSearch", title: "显示搜索框", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showDatePicker", title: "显示日期选择", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showActions", title: "显示操作按钮", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showBatchOperations", title: "显示批量操作", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showExport", title: "显示导出按钮", setter: "BoolSetter", extraProps: { display: "block" } },
            { name: "showPagination", title: "显示分页", setter: "BoolSetter", extraProps: { display: "block" } }
          ]
        },
        {
          type: "group",
          title: "分页配置",
          display: "accordion",
          items: [
            {
              name: "defaultPageSize",
              title: "默认每页条数",
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
    category: "电商业务组件",
    group: "订单管理",
    snippets: [
      {
        title: "完整订单列表",
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
        title: "简洁订单列表",
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
        title: "只读订单列表",
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
      },
      {
        title: "纯搜索订单列表",
        schema: {
          componentName: "OrderList",
          props: {
            dataSourceType: "mock",
            mockData: JSON.stringify(defaultMockData2),
            showFilter: true,
            showStatusFilter: false,
            showSearch: true,
            showDatePicker: false,
            showActions: false,
            showBatchOperations: false,
            showExport: false,
            showPagination: true,
            defaultPageSize: 10
          }
        }
      },
      {
        title: "待发货订单列表",
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
            showExport: false,
            showPagination: true,
            defaultPageSize: 10
          }
        }
      }
    ]
  };
  var orderListMeta_default = orderListMeta;

  // src/plugins/plugin-mall-components/meta/marketingManagerMeta.ts
  var MarketingManagerMeta = {
    componentName: "MarketingManager",
    title: "营销活动管理",
    docUrl: "https://github.com/alibaba/lowcode-engine",
    screenshot: "",
    npm: {
      package: "mall-components",
      version: "1.0.9",
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
      version: "1.0.9",
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
        isContainer: true,
        nestingRule: {
          childWhitelist: ["TabPane"]
        }
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

  // src/plugins/plugin-mall-components/meta/tabPaneMeta.ts
  var TabPaneMeta = {
    componentName: "TabPane",
    title: "选项卡面板",
    docUrl: "https://github.com/alibaba/lowcode-engine",
    screenshot: "",
    npm: {
      package: "mall-components",
      version: "1.0.9",
      exportName: "TabPane",
      destructuring: true
    },
    props: [
      {
        name: "tab",
        propType: "string",
        description: "选项卡标题",
        defaultValue: "新选项卡"
      },
      {
        name: "tabKey",
        propType: "string",
        description: "选项卡唯一标识",
        defaultValue: "tab1"
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
          title: "基础配置",
          display: "accordion",
          items: [
            {
              name: "tab",
              title: "选项卡标题",
              setter: "InputSetter",
              extraProps: { display: "block", placeholder: "例如：商品列表" }
            },
            {
              name: "tabKey",
              title: "选项卡标识",
              setter: "InputSetter",
              extraProps: { display: "block", placeholder: "例如：product" }
            }
          ]
        }
      ],
      component: {
        isContainer: true,
        nestingRule: {
          parentWhitelist: ["AdminLayout"]
        },
        // 只禁用 TabPane 本身的删除，不影响内部组件
        disableBehaviors: ["remove"],
        // 确保内部组件可以被选中
        // 当点击 TabPane 内部时，不阻止事件传播，让内部组件可以被选中
        callbacks: {
          onClickHook: (e, node) => {
            console.log("[TabPane Meta] 🎯 onClickHook triggered:", {
              event: e,
              node: node?.componentName,
              target: e?.target,
              targetClassName: e?.target?.className
            });
            return false;
          },
          // 添加 onSelect 回调，调试选择行为
          onSelect: (node) => {
            console.log("[TabPane Meta] ✅ onSelect triggered:", {
              node: node?.componentName,
              nodeId: node?.id
            });
          }
        },
        // 选择器配置，确保可以选中内部组件
        selectionSelector: ".tab-pane > *"
      }
    },
    icon: "",
    category: "隐藏组件",
    group: "布局容器",
    snippets: []
  };
  var tabPaneMeta_default = TabPaneMeta;

  // src/plugins/plugin-mall-components/entry-meta.ts
  var meta = {
    components: [
      adminLayoutMeta_default,
      tabPaneMeta_default,
      productListMeta_default,
      productFormMeta_default,
      orderListMeta_default,
      marketingManagerMeta_default
    ]
  };
  var entry_meta_default = meta;
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
*/
MallComponentsMeta = MallComponentsMeta.default || MallComponentsMeta;
