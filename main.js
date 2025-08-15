var hS = { exports: {} }, Gp = {}, mS = { exports: {} }, xt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e1;
function ek() {
  if (e1) return xt;
  e1 = 1;
  var te = Symbol.for("react.element"), X = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), It = Symbol.for("react.strict_mode"), Qt = Symbol.for("react.profiler"), Je = Symbol.for("react.provider"), S = Symbol.for("react.context"), Ut = Symbol.for("react.forward_ref"), de = Symbol.for("react.suspense"), pe = Symbol.for("react.memo"), tt = Symbol.for("react.lazy"), ne = Symbol.iterator;
  function me(k) {
    return k === null || typeof k != "object" ? null : (k = ne && k[ne] || k["@@iterator"], typeof k == "function" ? k : null);
  }
  var oe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, $e = Object.assign, Tt = {};
  function pt(k, V, Ue) {
    this.props = k, this.context = V, this.refs = Tt, this.updater = Ue || oe;
  }
  pt.prototype.isReactComponent = {}, pt.prototype.setState = function(k, V) {
    if (typeof k != "object" && typeof k != "function" && k != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, k, V, "setState");
  }, pt.prototype.forceUpdate = function(k) {
    this.updater.enqueueForceUpdate(this, k, "forceUpdate");
  };
  function pn() {
  }
  pn.prototype = pt.prototype;
  function lt(k, V, Ue) {
    this.props = k, this.context = V, this.refs = Tt, this.updater = Ue || oe;
  }
  var Ge = lt.prototype = new pn();
  Ge.constructor = lt, $e(Ge, pt.prototype), Ge.isPureReactComponent = !0;
  var vt = Array.isArray, Ne = Object.prototype.hasOwnProperty, st = { current: null }, Pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function rn(k, V, Ue) {
    var Ve, nt = {}, et = null, yt = null;
    if (V != null) for (Ve in V.ref !== void 0 && (yt = V.ref), V.key !== void 0 && (et = "" + V.key), V) Ne.call(V, Ve) && !Pe.hasOwnProperty(Ve) && (nt[Ve] = V[Ve]);
    var ut = arguments.length - 2;
    if (ut === 1) nt.children = Ue;
    else if (1 < ut) {
      for (var ot = Array(ut), en = 0; en < ut; en++) ot[en] = arguments[en + 2];
      nt.children = ot;
    }
    if (k && k.defaultProps) for (Ve in ut = k.defaultProps, ut) nt[Ve] === void 0 && (nt[Ve] = ut[Ve]);
    return { $$typeof: te, type: k, key: et, ref: yt, props: nt, _owner: st.current };
  }
  function _n(k, V) {
    return { $$typeof: te, type: k.type, key: V, ref: k.ref, props: k.props, _owner: k._owner };
  }
  function Wt(k) {
    return typeof k == "object" && k !== null && k.$$typeof === te;
  }
  function _t(k) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + k.replace(/[=:]/g, function(Ue) {
      return V[Ue];
    });
  }
  var xn = /\/+/g;
  function ze(k, V) {
    return typeof k == "object" && k !== null && k.key != null ? _t("" + k.key) : V.toString(36);
  }
  function Xe(k, V, Ue, Ve, nt) {
    var et = typeof k;
    (et === "undefined" || et === "boolean") && (k = null);
    var yt = !1;
    if (k === null) yt = !0;
    else switch (et) {
      case "string":
      case "number":
        yt = !0;
        break;
      case "object":
        switch (k.$$typeof) {
          case te:
          case X:
            yt = !0;
        }
    }
    if (yt) return yt = k, nt = nt(yt), k = Ve === "" ? "." + ze(yt, 0) : Ve, vt(nt) ? (Ue = "", k != null && (Ue = k.replace(xn, "$&/") + "/"), Xe(nt, V, Ue, "", function(en) {
      return en;
    })) : nt != null && (Wt(nt) && (nt = _n(nt, Ue + (!nt.key || yt && yt.key === nt.key ? "" : ("" + nt.key).replace(xn, "$&/") + "/") + k)), V.push(nt)), 1;
    if (yt = 0, Ve = Ve === "" ? "." : Ve + ":", vt(k)) for (var ut = 0; ut < k.length; ut++) {
      et = k[ut];
      var ot = Ve + ze(et, ut);
      yt += Xe(et, V, Ue, ot, nt);
    }
    else if (ot = me(k), typeof ot == "function") for (k = ot.call(k), ut = 0; !(et = k.next()).done; ) et = et.value, ot = Ve + ze(et, ut++), yt += Xe(et, V, Ue, ot, nt);
    else if (et === "object") throw V = String(k), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(k).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.");
    return yt;
  }
  function jt(k, V, Ue) {
    if (k == null) return k;
    var Ve = [], nt = 0;
    return Xe(k, Ve, "", "", function(et) {
      return V.call(Ue, et, nt++);
    }), Ve;
  }
  function bt(k) {
    if (k._status === -1) {
      var V = k._result;
      V = V(), V.then(function(Ue) {
        (k._status === 0 || k._status === -1) && (k._status = 1, k._result = Ue);
      }, function(Ue) {
        (k._status === 0 || k._status === -1) && (k._status = 2, k._result = Ue);
      }), k._status === -1 && (k._status = 0, k._result = V);
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var ye = { current: null }, J = { transition: null }, _e = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: J, ReactCurrentOwner: st };
  function ie() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return xt.Children = { map: jt, forEach: function(k, V, Ue) {
    jt(k, function() {
      V.apply(this, arguments);
    }, Ue);
  }, count: function(k) {
    var V = 0;
    return jt(k, function() {
      V++;
    }), V;
  }, toArray: function(k) {
    return jt(k, function(V) {
      return V;
    }) || [];
  }, only: function(k) {
    if (!Wt(k)) throw Error("React.Children.only expected to receive a single React element child.");
    return k;
  } }, xt.Component = pt, xt.Fragment = A, xt.Profiler = Qt, xt.PureComponent = lt, xt.StrictMode = It, xt.Suspense = de, xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _e, xt.act = ie, xt.cloneElement = function(k, V, Ue) {
    if (k == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + k + ".");
    var Ve = $e({}, k.props), nt = k.key, et = k.ref, yt = k._owner;
    if (V != null) {
      if (V.ref !== void 0 && (et = V.ref, yt = st.current), V.key !== void 0 && (nt = "" + V.key), k.type && k.type.defaultProps) var ut = k.type.defaultProps;
      for (ot in V) Ne.call(V, ot) && !Pe.hasOwnProperty(ot) && (Ve[ot] = V[ot] === void 0 && ut !== void 0 ? ut[ot] : V[ot]);
    }
    var ot = arguments.length - 2;
    if (ot === 1) Ve.children = Ue;
    else if (1 < ot) {
      ut = Array(ot);
      for (var en = 0; en < ot; en++) ut[en] = arguments[en + 2];
      Ve.children = ut;
    }
    return { $$typeof: te, type: k.type, key: nt, ref: et, props: Ve, _owner: yt };
  }, xt.createContext = function(k) {
    return k = { $$typeof: S, _currentValue: k, _currentValue2: k, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, k.Provider = { $$typeof: Je, _context: k }, k.Consumer = k;
  }, xt.createElement = rn, xt.createFactory = function(k) {
    var V = rn.bind(null, k);
    return V.type = k, V;
  }, xt.createRef = function() {
    return { current: null };
  }, xt.forwardRef = function(k) {
    return { $$typeof: Ut, render: k };
  }, xt.isValidElement = Wt, xt.lazy = function(k) {
    return { $$typeof: tt, _payload: { _status: -1, _result: k }, _init: bt };
  }, xt.memo = function(k, V) {
    return { $$typeof: pe, type: k, compare: V === void 0 ? null : V };
  }, xt.startTransition = function(k) {
    var V = J.transition;
    J.transition = {};
    try {
      k();
    } finally {
      J.transition = V;
    }
  }, xt.unstable_act = ie, xt.useCallback = function(k, V) {
    return ye.current.useCallback(k, V);
  }, xt.useContext = function(k) {
    return ye.current.useContext(k);
  }, xt.useDebugValue = function() {
  }, xt.useDeferredValue = function(k) {
    return ye.current.useDeferredValue(k);
  }, xt.useEffect = function(k, V) {
    return ye.current.useEffect(k, V);
  }, xt.useId = function() {
    return ye.current.useId();
  }, xt.useImperativeHandle = function(k, V, Ue) {
    return ye.current.useImperativeHandle(k, V, Ue);
  }, xt.useInsertionEffect = function(k, V) {
    return ye.current.useInsertionEffect(k, V);
  }, xt.useLayoutEffect = function(k, V) {
    return ye.current.useLayoutEffect(k, V);
  }, xt.useMemo = function(k, V) {
    return ye.current.useMemo(k, V);
  }, xt.useReducer = function(k, V, Ue) {
    return ye.current.useReducer(k, V, Ue);
  }, xt.useRef = function(k) {
    return ye.current.useRef(k);
  }, xt.useState = function(k) {
    return ye.current.useState(k);
  }, xt.useSyncExternalStore = function(k, V, Ue) {
    return ye.current.useSyncExternalStore(k, V, Ue);
  }, xt.useTransition = function() {
    return ye.current.useTransition();
  }, xt.version = "18.3.1", xt;
}
var Kp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Kp.exports;
var t1;
function tk() {
  return t1 || (t1 = 1, function(te, X) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = "18.3.1", It = Symbol.for("react.element"), Qt = Symbol.for("react.portal"), Je = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Ut = Symbol.for("react.profiler"), de = Symbol.for("react.provider"), pe = Symbol.for("react.context"), tt = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), me = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), $e = Symbol.for("react.lazy"), Tt = Symbol.for("react.offscreen"), pt = Symbol.iterator, pn = "@@iterator";
      function lt(h) {
        if (h === null || typeof h != "object")
          return null;
        var x = pt && h[pt] || h[pn];
        return typeof x == "function" ? x : null;
      }
      var Ge = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, vt = {
        transition: null
      }, Ne = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, st = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Pe = {}, rn = null;
      function _n(h) {
        rn = h;
      }
      Pe.setExtraStackFrame = function(h) {
        rn = h;
      }, Pe.getCurrentStack = null, Pe.getStackAddendum = function() {
        var h = "";
        rn && (h += rn);
        var x = Pe.getCurrentStack;
        return x && (h += x() || ""), h;
      };
      var Wt = !1, _t = !1, xn = !1, ze = !1, Xe = !1, jt = {
        ReactCurrentDispatcher: Ge,
        ReactCurrentBatchConfig: vt,
        ReactCurrentOwner: st
      };
      jt.ReactDebugCurrentFrame = Pe, jt.ReactCurrentActQueue = Ne;
      function bt(h) {
        {
          for (var x = arguments.length, z = new Array(x > 1 ? x - 1 : 0), F = 1; F < x; F++)
            z[F - 1] = arguments[F];
          J("warn", h, z);
        }
      }
      function ye(h) {
        {
          for (var x = arguments.length, z = new Array(x > 1 ? x - 1 : 0), F = 1; F < x; F++)
            z[F - 1] = arguments[F];
          J("error", h, z);
        }
      }
      function J(h, x, z) {
        {
          var F = jt.ReactDebugCurrentFrame, K = F.getStackAddendum();
          K !== "" && (x += "%s", z = z.concat([K]));
          var Ae = z.map(function(le) {
            return String(le);
          });
          Ae.unshift("Warning: " + x), Function.prototype.apply.call(console[h], console, Ae);
        }
      }
      var _e = {};
      function ie(h, x) {
        {
          var z = h.constructor, F = z && (z.displayName || z.name) || "ReactClass", K = F + "." + x;
          if (_e[K])
            return;
          ye("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", x, F), _e[K] = !0;
        }
      }
      var k = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
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
        enqueueForceUpdate: function(h, x, z) {
          ie(h, "forceUpdate");
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
        enqueueReplaceState: function(h, x, z, F) {
          ie(h, "replaceState");
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
        enqueueSetState: function(h, x, z, F) {
          ie(h, "setState");
        }
      }, V = Object.assign, Ue = {};
      Object.freeze(Ue);
      function Ve(h, x, z) {
        this.props = h, this.context = x, this.refs = Ue, this.updater = z || k;
      }
      Ve.prototype.isReactComponent = {}, Ve.prototype.setState = function(h, x) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, x, "setState");
      }, Ve.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var nt = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, et = function(h, x) {
          Object.defineProperty(Ve.prototype, h, {
            get: function() {
              bt("%s(...) is deprecated in plain JavaScript React classes. %s", x[0], x[1]);
            }
          });
        };
        for (var yt in nt)
          nt.hasOwnProperty(yt) && et(yt, nt[yt]);
      }
      function ut() {
      }
      ut.prototype = Ve.prototype;
      function ot(h, x, z) {
        this.props = h, this.context = x, this.refs = Ue, this.updater = z || k;
      }
      var en = ot.prototype = new ut();
      en.constructor = ot, V(en, Ve.prototype), en.isPureReactComponent = !0;
      function hr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Br = Array.isArray;
      function vn(h) {
        return Br(h);
      }
      function Wn(h) {
        {
          var x = typeof Symbol == "function" && Symbol.toStringTag, z = x && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return z;
        }
      }
      function Pn(h) {
        try {
          return zn(h), !1;
        } catch {
          return !0;
        }
      }
      function zn(h) {
        return "" + h;
      }
      function kn(h) {
        if (Pn(h))
          return ye("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wn(h)), zn(h);
      }
      function $r(h, x, z) {
        var F = h.displayName;
        if (F)
          return F;
        var K = x.displayName || x.name || "";
        return K !== "" ? z + "(" + K + ")" : z;
      }
      function Yr(h) {
        return h.displayName || "Context";
      }
      function Gn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && ye("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Je:
            return "Fragment";
          case Qt:
            return "Portal";
          case Ut:
            return "Profiler";
          case S:
            return "StrictMode";
          case ne:
            return "Suspense";
          case me:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case pe:
              var x = h;
              return Yr(x) + ".Consumer";
            case de:
              var z = h;
              return Yr(z._context) + ".Provider";
            case tt:
              return $r(h, h.render, "ForwardRef");
            case oe:
              var F = h.displayName || null;
              return F !== null ? F : Gn(h.type) || "Memo";
            case $e: {
              var K = h, Ae = K._payload, le = K._init;
              try {
                return Gn(le(Ae));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var mr = Object.prototype.hasOwnProperty, Ir = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, yr, da, rr;
      rr = {};
      function Qr(h) {
        if (mr.call(h, "ref")) {
          var x = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (x && x.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function hn(h) {
        if (mr.call(h, "key")) {
          var x = Object.getOwnPropertyDescriptor(h, "key").get;
          if (x && x.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function br(h, x) {
        var z = function() {
          yr || (yr = !0, ye("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: z,
          configurable: !0
        });
      }
      function fi(h, x) {
        var z = function() {
          da || (da = !0, ye("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        z.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: z,
          configurable: !0
        });
      }
      function pa(h) {
        if (typeof h.ref == "string" && st.current && h.__self && st.current.stateNode !== h.__self) {
          var x = Gn(st.current.type);
          rr[x] || (ye('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x, h.ref), rr[x] = !0);
        }
      }
      var ee = function(h, x, z, F, K, Ae, le) {
        var Me = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: It,
          // Built-in properties that belong on the element
          type: h,
          key: x,
          ref: z,
          props: le,
          // Record the component responsible for creating this element.
          _owner: Ae
        };
        return Me._store = {}, Object.defineProperty(Me._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Me, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Me, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: K
        }), Object.freeze && (Object.freeze(Me.props), Object.freeze(Me)), Me;
      };
      function ke(h, x, z) {
        var F, K = {}, Ae = null, le = null, Me = null, ct = null;
        if (x != null) {
          Qr(x) && (le = x.ref, pa(x)), hn(x) && (kn(x.key), Ae = "" + x.key), Me = x.__self === void 0 ? null : x.__self, ct = x.__source === void 0 ? null : x.__source;
          for (F in x)
            mr.call(x, F) && !Ir.hasOwnProperty(F) && (K[F] = x[F]);
        }
        var wt = arguments.length - 2;
        if (wt === 1)
          K.children = z;
        else if (wt > 1) {
          for (var Xt = Array(wt), Yt = 0; Yt < wt; Yt++)
            Xt[Yt] = arguments[Yt + 2];
          Object.freeze && Object.freeze(Xt), K.children = Xt;
        }
        if (h && h.defaultProps) {
          var Zt = h.defaultProps;
          for (F in Zt)
            K[F] === void 0 && (K[F] = Zt[F]);
        }
        if (Ae || le) {
          var tn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ae && br(K, tn), le && fi(K, tn);
        }
        return ee(h, Ae, le, Me, ct, st.current, K);
      }
      function rt(h, x) {
        var z = ee(h.type, x, h.ref, h._self, h._source, h._owner, h.props);
        return z;
      }
      function Mt(h, x, z) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, K = V({}, h.props), Ae = h.key, le = h.ref, Me = h._self, ct = h._source, wt = h._owner;
        if (x != null) {
          Qr(x) && (le = x.ref, wt = st.current), hn(x) && (kn(x.key), Ae = "" + x.key);
          var Xt;
          h.type && h.type.defaultProps && (Xt = h.type.defaultProps);
          for (F in x)
            mr.call(x, F) && !Ir.hasOwnProperty(F) && (x[F] === void 0 && Xt !== void 0 ? K[F] = Xt[F] : K[F] = x[F]);
        }
        var Yt = arguments.length - 2;
        if (Yt === 1)
          K.children = z;
        else if (Yt > 1) {
          for (var Zt = Array(Yt), tn = 0; tn < Yt; tn++)
            Zt[tn] = arguments[tn + 2];
          K.children = Zt;
        }
        return ee(h.type, Ae, le, Me, ct, wt, K);
      }
      function At(h) {
        return typeof h == "object" && h !== null && h.$$typeof === It;
      }
      var Dn = ".", mn = ":";
      function gr(h) {
        var x = /[=:]/g, z = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(x, function(K) {
          return z[K];
        });
        return "$" + F;
      }
      var $t = !1, wr = /\/+/g;
      function Ft(h) {
        return h.replace(wr, "$&/");
      }
      function Ht(h, x) {
        return typeof h == "object" && h !== null && h.key != null ? (kn(h.key), gr("" + h.key)) : x.toString(36);
      }
      function Ja(h, x, z, F, K) {
        var Ae = typeof h;
        (Ae === "undefined" || Ae === "boolean") && (h = null);
        var le = !1;
        if (h === null)
          le = !0;
        else
          switch (Ae) {
            case "string":
            case "number":
              le = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case It:
                case Qt:
                  le = !0;
              }
          }
        if (le) {
          var Me = h, ct = K(Me), wt = F === "" ? Dn + Ht(Me, 0) : F;
          if (vn(ct)) {
            var Xt = "";
            wt != null && (Xt = Ft(wt) + "/"), Ja(ct, x, Xt, "", function(Wf) {
              return Wf;
            });
          } else ct != null && (At(ct) && (ct.key && (!Me || Me.key !== ct.key) && kn(ct.key), ct = rt(
            ct,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            z + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ct.key && (!Me || Me.key !== ct.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Ft("" + ct.key) + "/"
            ) : "") + wt
          )), x.push(ct));
          return 1;
        }
        var Yt, Zt, tn = 0, Et = F === "" ? Dn : F + mn;
        if (vn(h))
          for (var ji = 0; ji < h.length; ji++)
            Yt = h[ji], Zt = Et + Ht(Yt, ji), tn += Ja(Yt, x, z, Zt, K);
        else {
          var Yu = lt(h);
          if (typeof Yu == "function") {
            var Zo = h;
            Yu === Zo.entries && ($t || bt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), $t = !0);
            for (var Qf = Yu.call(Zo), ri, Jo = 0; !(ri = Qf.next()).done; )
              Yt = ri.value, Zt = Et + Ht(Yt, Jo++), tn += Ja(Yt, x, z, Zt, K);
          } else if (Ae === "object") {
            var es = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (es === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : es) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return tn;
      }
      function ka(h, x, z) {
        if (h == null)
          return h;
        var F = [], K = 0;
        return Ja(h, F, "", "", function(Ae) {
          return x.call(z, Ae, K++);
        }), F;
      }
      function ol(h) {
        var x = 0;
        return ka(h, function() {
          x++;
        }), x;
      }
      function Ql(h, x, z) {
        ka(h, function() {
          x.apply(this, arguments);
        }, z);
      }
      function Mu(h) {
        return ka(h, function(x) {
          return x;
        }) || [];
      }
      function Li(h) {
        if (!At(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function sl(h) {
        var x = {
          $$typeof: pe,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        x.Provider = {
          $$typeof: de,
          _context: x
        };
        var z = !1, F = !1, K = !1;
        {
          var Ae = {
            $$typeof: pe,
            _context: x
          };
          Object.defineProperties(Ae, {
            Provider: {
              get: function() {
                return F || (F = !0, ye("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), x.Provider;
              },
              set: function(le) {
                x.Provider = le;
              }
            },
            _currentValue: {
              get: function() {
                return x._currentValue;
              },
              set: function(le) {
                x._currentValue = le;
              }
            },
            _currentValue2: {
              get: function() {
                return x._currentValue2;
              },
              set: function(le) {
                x._currentValue2 = le;
              }
            },
            _threadCount: {
              get: function() {
                return x._threadCount;
              },
              set: function(le) {
                x._threadCount = le;
              }
            },
            Consumer: {
              get: function() {
                return z || (z = !0, ye("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), x.Consumer;
              }
            },
            displayName: {
              get: function() {
                return x.displayName;
              },
              set: function(le) {
                K || (bt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", le), K = !0);
              }
            }
          }), x.Consumer = Ae;
        }
        return x._currentRenderer = null, x._currentRenderer2 = null, x;
      }
      var va = -1, di = 0, ha = 1, ei = 2;
      function _r(h) {
        if (h._status === va) {
          var x = h._result, z = x();
          if (z.then(function(Ae) {
            if (h._status === di || h._status === va) {
              var le = h;
              le._status = ha, le._result = Ae;
            }
          }, function(Ae) {
            if (h._status === di || h._status === va) {
              var le = h;
              le._status = ei, le._result = Ae;
            }
          }), h._status === va) {
            var F = h;
            F._status = di, F._result = z;
          }
        }
        if (h._status === ha) {
          var K = h._result;
          return K === void 0 && ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, K), "default" in K || ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, K), K.default;
        } else
          throw h._result;
      }
      function ma(h) {
        var x = {
          // We use these fields to store the result.
          _status: va,
          _result: h
        }, z = {
          $$typeof: $e,
          _payload: x,
          _init: _r
        };
        {
          var F, K;
          Object.defineProperties(z, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(Ae) {
                ye("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = Ae, Object.defineProperty(z, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return K;
              },
              set: function(Ae) {
                ye("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), K = Ae, Object.defineProperty(z, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return z;
      }
      function pi(h) {
        h != null && h.$$typeof === oe ? ye("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? ye("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && ye("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && ye("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var x = {
          $$typeof: tt,
          render: h
        };
        {
          var z;
          Object.defineProperty(x, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return z;
            },
            set: function(F) {
              z = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return x;
      }
      var vi;
      vi = Symbol.for("react.module.reference");
      function C(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Je || h === Ut || Xe || h === S || h === ne || h === me || ze || h === Tt || Wt || _t || xn || typeof h == "object" && h !== null && (h.$$typeof === $e || h.$$typeof === oe || h.$$typeof === de || h.$$typeof === pe || h.$$typeof === tt || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === vi || h.getModuleId !== void 0));
      }
      function I(h, x) {
        C(h) || ye("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var z = {
          $$typeof: oe,
          type: h,
          compare: x === void 0 ? null : x
        };
        {
          var F;
          Object.defineProperty(z, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(K) {
              F = K, !h.name && !h.displayName && (h.displayName = K);
            }
          });
        }
        return z;
      }
      function q() {
        var h = Ge.current;
        return h === null && ye(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Te(h) {
        var x = q();
        if (h._context !== void 0) {
          var z = h._context;
          z.Consumer === h ? ye("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : z.Provider === h && ye("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return x.useContext(h);
      }
      function dt(h) {
        var x = q();
        return x.useState(h);
      }
      function gt(h, x, z) {
        var F = q();
        return F.useReducer(h, x, z);
      }
      function je(h) {
        var x = q();
        return x.useRef(h);
      }
      function at(h, x) {
        var z = q();
        return z.useEffect(h, x);
      }
      function Un(h, x) {
        var z = q();
        return z.useInsertionEffect(h, x);
      }
      function Kt(h, x) {
        var z = q();
        return z.useLayoutEffect(h, x);
      }
      function an(h, x) {
        var z = q();
        return z.useCallback(h, x);
      }
      function Sr(h, x) {
        var z = q();
        return z.useMemo(h, x);
      }
      function hi(h, x, z) {
        var F = q();
        return F.useImperativeHandle(h, x, z);
      }
      function kt(h, x) {
        {
          var z = q();
          return z.useDebugValue(h, x);
        }
      }
      function qn() {
        var h = q();
        return h.useTransition();
      }
      function kr(h) {
        var x = q();
        return x.useDeferredValue(h);
      }
      function it() {
        var h = q();
        return h.useId();
      }
      function Da(h, x, z) {
        var F = q();
        return F.useSyncExternalStore(h, x, z);
      }
      var cl = 0, zu, fl, Wr, Go, Dr, qo, Ko;
      function ec() {
      }
      ec.__reactDisabledLog = !0;
      function Uu() {
        {
          if (cl === 0) {
            zu = console.log, fl = console.info, Wr = console.warn, Go = console.error, Dr = console.group, qo = console.groupCollapsed, Ko = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: ec,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          cl++;
        }
      }
      function dl() {
        {
          if (cl--, cl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: V({}, h, {
                value: zu
              }),
              info: V({}, h, {
                value: fl
              }),
              warn: V({}, h, {
                value: Wr
              }),
              error: V({}, h, {
                value: Go
              }),
              group: V({}, h, {
                value: Dr
              }),
              groupCollapsed: V({}, h, {
                value: qo
              }),
              groupEnd: V({}, h, {
                value: Ko
              })
            });
          }
          cl < 0 && ye("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ti = jt.ReactCurrentDispatcher, Nr;
      function pl(h, x, z) {
        {
          if (Nr === void 0)
            try {
              throw Error();
            } catch (K) {
              var F = K.stack.trim().match(/\n( *(at )?)/);
              Nr = F && F[1] || "";
            }
          return `
` + Nr + h;
        }
      }
      var vl = !1, hl;
      {
        var ju = typeof WeakMap == "function" ? WeakMap : Map;
        hl = new ju();
      }
      function Au(h, x) {
        if (!h || vl)
          return "";
        {
          var z = hl.get(h);
          if (z !== void 0)
            return z;
        }
        var F;
        vl = !0;
        var K = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ae;
        Ae = ti.current, ti.current = null, Uu();
        try {
          if (x) {
            var le = function() {
              throw Error();
            };
            if (Object.defineProperty(le.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(le, []);
              } catch (Et) {
                F = Et;
              }
              Reflect.construct(h, [], le);
            } else {
              try {
                le.call();
              } catch (Et) {
                F = Et;
              }
              h.call(le.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Et) {
              F = Et;
            }
            h();
          }
        } catch (Et) {
          if (Et && F && typeof Et.stack == "string") {
            for (var Me = Et.stack.split(`
`), ct = F.stack.split(`
`), wt = Me.length - 1, Xt = ct.length - 1; wt >= 1 && Xt >= 0 && Me[wt] !== ct[Xt]; )
              Xt--;
            for (; wt >= 1 && Xt >= 0; wt--, Xt--)
              if (Me[wt] !== ct[Xt]) {
                if (wt !== 1 || Xt !== 1)
                  do
                    if (wt--, Xt--, Xt < 0 || Me[wt] !== ct[Xt]) {
                      var Yt = `
` + Me[wt].replace(" at new ", " at ");
                      return h.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", h.displayName)), typeof h == "function" && hl.set(h, Yt), Yt;
                    }
                  while (wt >= 1 && Xt >= 0);
                break;
              }
          }
        } finally {
          vl = !1, ti.current = Ae, dl(), Error.prepareStackTrace = K;
        }
        var Zt = h ? h.displayName || h.name : "", tn = Zt ? pl(Zt) : "";
        return typeof h == "function" && hl.set(h, tn), tn;
      }
      function Mi(h, x, z) {
        return Au(h, !1);
      }
      function If(h) {
        var x = h.prototype;
        return !!(x && x.isReactComponent);
      }
      function mi(h, x, z) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Au(h, If(h));
        if (typeof h == "string")
          return pl(h);
        switch (h) {
          case ne:
            return pl("Suspense");
          case me:
            return pl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case tt:
              return Mi(h.render);
            case oe:
              return mi(h.type, x, z);
            case $e: {
              var F = h, K = F._payload, Ae = F._init;
              try {
                return mi(Ae(K), x, z);
              } catch {
              }
            }
          }
        return "";
      }
      var Dt = {}, Fu = jt.ReactDebugCurrentFrame;
      function Wl(h) {
        if (h) {
          var x = h._owner, z = mi(h.type, h._source, x ? x.type : null);
          Fu.setExtraStackFrame(z);
        } else
          Fu.setExtraStackFrame(null);
      }
      function Hu(h, x, z, F, K) {
        {
          var Ae = Function.call.bind(mr);
          for (var le in h)
            if (Ae(h, le)) {
              var Me = void 0;
              try {
                if (typeof h[le] != "function") {
                  var ct = Error((F || "React class") + ": " + z + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ct.name = "Invariant Violation", ct;
                }
                Me = h[le](x, le, F, z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (wt) {
                Me = wt;
              }
              Me && !(Me instanceof Error) && (Wl(K), ye("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", z, le, typeof Me), Wl(null)), Me instanceof Error && !(Me.message in Dt) && (Dt[Me.message] = !0, Wl(K), ye("Failed %s type: %s", z, Me.message), Wl(null));
            }
        }
      }
      function St(h) {
        if (h) {
          var x = h._owner, z = mi(h.type, h._source, x ? x.type : null);
          _n(z);
        } else
          _n(null);
      }
      var Pu;
      Pu = !1;
      function Vu() {
        if (st.current) {
          var h = Gn(st.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Qe(h) {
        if (h !== void 0) {
          var x = h.fileName.replace(/^.*[\\\/]/, ""), z = h.lineNumber;
          return `

Check your code at ` + x + ":" + z + ".";
        }
        return "";
      }
      function Gl(h) {
        return h != null ? Qe(h.__source) : "";
      }
      var yn = {};
      function Gr(h) {
        var x = Vu();
        if (!x) {
          var z = typeof h == "string" ? h : h.displayName || h.name;
          z && (x = `

Check the top-level render call using <` + z + ">.");
        }
        return x;
      }
      function Or(h, x) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var z = Gr(x);
          if (!yn[z]) {
            yn[z] = !0;
            var F = "";
            h && h._owner && h._owner !== st.current && (F = " It was passed a child from " + Gn(h._owner.type) + "."), St(h), ye('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', z, F), St(null);
          }
        }
      }
      function ml(h, x) {
        if (typeof h == "object") {
          if (vn(h))
            for (var z = 0; z < h.length; z++) {
              var F = h[z];
              At(F) && Or(F, x);
            }
          else if (At(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var K = lt(h);
            if (typeof K == "function" && K !== h.entries)
              for (var Ae = K.call(h), le; !(le = Ae.next()).done; )
                At(le.value) && Or(le.value, x);
          }
        }
      }
      function Cn(h) {
        {
          var x = h.type;
          if (x == null || typeof x == "string")
            return;
          var z;
          if (typeof x == "function")
            z = x.propTypes;
          else if (typeof x == "object" && (x.$$typeof === tt || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          x.$$typeof === oe))
            z = x.propTypes;
          else
            return;
          if (z) {
            var F = Gn(x);
            Hu(z, h.props, "prop", F, h);
          } else if (x.PropTypes !== void 0 && !Pu) {
            Pu = !0;
            var K = Gn(x);
            ye("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
          }
          typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && ye("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Pt(h) {
        {
          for (var x = Object.keys(h.props), z = 0; z < x.length; z++) {
            var F = x[z];
            if (F !== "children" && F !== "key") {
              St(h), ye("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), St(null);
              break;
            }
          }
          h.ref !== null && (St(h), ye("Invalid attribute `ref` supplied to `React.Fragment`."), St(null));
        }
      }
      function tc(h, x, z) {
        var F = C(h);
        if (!F) {
          var K = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ae = Gl(x);
          Ae ? K += Ae : K += Vu();
          var le;
          h === null ? le = "null" : vn(h) ? le = "array" : h !== void 0 && h.$$typeof === It ? (le = "<" + (Gn(h.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : le = typeof h, ye("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", le, K);
        }
        var Me = ke.apply(this, arguments);
        if (Me == null)
          return Me;
        if (F)
          for (var ct = 2; ct < arguments.length; ct++)
            ml(arguments[ct], h);
        return h === Je ? Pt(Me) : Cn(Me), Me;
      }
      var qr = !1;
      function Kn(h) {
        var x = tc.bind(null, h);
        return x.type = h, qr || (qr = !0, bt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(x, "type", {
          enumerable: !1,
          get: function() {
            return bt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), x;
      }
      function yi(h, x, z) {
        for (var F = Mt.apply(this, arguments), K = 2; K < arguments.length; K++)
          ml(arguments[K], F.type);
        return Cn(F), F;
      }
      function nc(h, x) {
        var z = vt.transition;
        vt.transition = {};
        var F = vt.transition;
        vt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (vt.transition = z, z === null && F._updatedFibers) {
            var K = F._updatedFibers.size;
            K > 10 && bt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var zi = !1, yl = null;
      function rc(h) {
        if (yl === null)
          try {
            var x = ("require" + Math.random()).slice(0, 7), z = te && te[x];
            yl = z.call(te, "timers").setImmediate;
          } catch {
            yl = function(K) {
              zi === !1 && (zi = !0, typeof MessageChannel > "u" && ye("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ae = new MessageChannel();
              Ae.port1.onmessage = K, Ae.port2.postMessage(void 0);
            };
          }
        return yl(h);
      }
      var Na = 0, gl = !1;
      function Ui(h) {
        {
          var x = Na;
          Na++, Ne.current === null && (Ne.current = []);
          var z = Ne.isBatchingLegacy, F;
          try {
            if (Ne.isBatchingLegacy = !0, F = h(), !z && Ne.didScheduleLegacyUpdate) {
              var K = Ne.current;
              K !== null && (Ne.didScheduleLegacyUpdate = !1, El(K));
            }
          } catch (Zt) {
            throw Oa(x), Zt;
          } finally {
            Ne.isBatchingLegacy = z;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var Ae = F, le = !1, Me = {
              then: function(Zt, tn) {
                le = !0, Ae.then(function(Et) {
                  Oa(x), Na === 0 ? Bu(Et, Zt, tn) : Zt(Et);
                }, function(Et) {
                  Oa(x), tn(Et);
                });
              }
            };
            return !gl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              le || (gl = !0, ye("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Me;
          } else {
            var ct = F;
            if (Oa(x), Na === 0) {
              var wt = Ne.current;
              wt !== null && (El(wt), Ne.current = null);
              var Xt = {
                then: function(Zt, tn) {
                  Ne.current === null ? (Ne.current = [], Bu(ct, Zt, tn)) : Zt(ct);
                }
              };
              return Xt;
            } else {
              var Yt = {
                then: function(Zt, tn) {
                  Zt(ct);
                }
              };
              return Yt;
            }
          }
        }
      }
      function Oa(h) {
        h !== Na - 1 && ye("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Na = h;
      }
      function Bu(h, x, z) {
        {
          var F = Ne.current;
          if (F !== null)
            try {
              El(F), rc(function() {
                F.length === 0 ? (Ne.current = null, x(h)) : Bu(h, x, z);
              });
            } catch (K) {
              z(K);
            }
          else
            x(h);
        }
      }
      var Sl = !1;
      function El(h) {
        if (!Sl) {
          Sl = !0;
          var x = 0;
          try {
            for (; x < h.length; x++) {
              var z = h[x];
              do
                z = z(!0);
              while (z !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(x + 1), F;
          } finally {
            Sl = !1;
          }
        }
      }
      var ql = tc, $u = yi, Xo = Kn, ni = {
        map: ka,
        forEach: Ql,
        count: ol,
        toArray: Mu,
        only: Li
      };
      X.Children = ni, X.Component = Ve, X.Fragment = Je, X.Profiler = Ut, X.PureComponent = ot, X.StrictMode = S, X.Suspense = ne, X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jt, X.act = Ui, X.cloneElement = $u, X.createContext = sl, X.createElement = ql, X.createFactory = Xo, X.createRef = hr, X.forwardRef = pi, X.isValidElement = At, X.lazy = ma, X.memo = I, X.startTransition = nc, X.unstable_act = Ui, X.useCallback = an, X.useContext = Te, X.useDebugValue = kt, X.useDeferredValue = kr, X.useEffect = at, X.useId = it, X.useImperativeHandle = hi, X.useInsertionEffect = Un, X.useLayoutEffect = Kt, X.useMemo = Sr, X.useReducer = gt, X.useRef = je, X.useState = dt, X.useSyncExternalStore = Da, X.useTransition = qn, X.version = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Kp, Kp.exports)), Kp.exports;
}
process.env.NODE_ENV === "production" ? mS.exports = ek() : mS.exports = tk();
var Qo = mS.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var n1;
function nk() {
  if (n1) return Gp;
  n1 = 1;
  var te = Qo, X = Symbol.for("react.element"), A = Symbol.for("react.fragment"), It = Object.prototype.hasOwnProperty, Qt = te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(Ut, de, pe) {
    var tt, ne = {}, me = null, oe = null;
    pe !== void 0 && (me = "" + pe), de.key !== void 0 && (me = "" + de.key), de.ref !== void 0 && (oe = de.ref);
    for (tt in de) It.call(de, tt) && !Je.hasOwnProperty(tt) && (ne[tt] = de[tt]);
    if (Ut && Ut.defaultProps) for (tt in de = Ut.defaultProps, de) ne[tt] === void 0 && (ne[tt] = de[tt]);
    return { $$typeof: X, type: Ut, key: me, ref: oe, props: ne, _owner: Qt.current };
  }
  return Gp.Fragment = A, Gp.jsx = S, Gp.jsxs = S, Gp;
}
var qp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var r1;
function rk() {
  return r1 || (r1 = 1, process.env.NODE_ENV !== "production" && function() {
    var te = Qo, X = Symbol.for("react.element"), A = Symbol.for("react.portal"), It = Symbol.for("react.fragment"), Qt = Symbol.for("react.strict_mode"), Je = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), Ut = Symbol.for("react.context"), de = Symbol.for("react.forward_ref"), pe = Symbol.for("react.suspense"), tt = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), me = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), $e = Symbol.iterator, Tt = "@@iterator";
    function pt(C) {
      if (C === null || typeof C != "object")
        return null;
      var I = $e && C[$e] || C[Tt];
      return typeof I == "function" ? I : null;
    }
    var pn = te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function lt(C) {
      {
        for (var I = arguments.length, q = new Array(I > 1 ? I - 1 : 0), Te = 1; Te < I; Te++)
          q[Te - 1] = arguments[Te];
        Ge("error", C, q);
      }
    }
    function Ge(C, I, q) {
      {
        var Te = pn.ReactDebugCurrentFrame, dt = Te.getStackAddendum();
        dt !== "" && (I += "%s", q = q.concat([dt]));
        var gt = q.map(function(je) {
          return String(je);
        });
        gt.unshift("Warning: " + I), Function.prototype.apply.call(console[C], console, gt);
      }
    }
    var vt = !1, Ne = !1, st = !1, Pe = !1, rn = !1, _n;
    _n = Symbol.for("react.module.reference");
    function Wt(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === It || C === Je || rn || C === Qt || C === pe || C === tt || Pe || C === oe || vt || Ne || st || typeof C == "object" && C !== null && (C.$$typeof === me || C.$$typeof === ne || C.$$typeof === S || C.$$typeof === Ut || C.$$typeof === de || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === _n || C.getModuleId !== void 0));
    }
    function _t(C, I, q) {
      var Te = C.displayName;
      if (Te)
        return Te;
      var dt = I.displayName || I.name || "";
      return dt !== "" ? q + "(" + dt + ")" : q;
    }
    function xn(C) {
      return C.displayName || "Context";
    }
    function ze(C) {
      if (C == null)
        return null;
      if (typeof C.tag == "number" && lt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
        return C.displayName || C.name || null;
      if (typeof C == "string")
        return C;
      switch (C) {
        case It:
          return "Fragment";
        case A:
          return "Portal";
        case Je:
          return "Profiler";
        case Qt:
          return "StrictMode";
        case pe:
          return "Suspense";
        case tt:
          return "SuspenseList";
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case Ut:
            var I = C;
            return xn(I) + ".Consumer";
          case S:
            var q = C;
            return xn(q._context) + ".Provider";
          case de:
            return _t(C, C.render, "ForwardRef");
          case ne:
            var Te = C.displayName || null;
            return Te !== null ? Te : ze(C.type) || "Memo";
          case me: {
            var dt = C, gt = dt._payload, je = dt._init;
            try {
              return ze(je(gt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Xe = Object.assign, jt = 0, bt, ye, J, _e, ie, k, V;
    function Ue() {
    }
    Ue.__reactDisabledLog = !0;
    function Ve() {
      {
        if (jt === 0) {
          bt = console.log, ye = console.info, J = console.warn, _e = console.error, ie = console.group, k = console.groupCollapsed, V = console.groupEnd;
          var C = {
            configurable: !0,
            enumerable: !0,
            value: Ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: C,
            log: C,
            warn: C,
            error: C,
            group: C,
            groupCollapsed: C,
            groupEnd: C
          });
        }
        jt++;
      }
    }
    function nt() {
      {
        if (jt--, jt === 0) {
          var C = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Xe({}, C, {
              value: bt
            }),
            info: Xe({}, C, {
              value: ye
            }),
            warn: Xe({}, C, {
              value: J
            }),
            error: Xe({}, C, {
              value: _e
            }),
            group: Xe({}, C, {
              value: ie
            }),
            groupCollapsed: Xe({}, C, {
              value: k
            }),
            groupEnd: Xe({}, C, {
              value: V
            })
          });
        }
        jt < 0 && lt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var et = pn.ReactCurrentDispatcher, yt;
    function ut(C, I, q) {
      {
        if (yt === void 0)
          try {
            throw Error();
          } catch (dt) {
            var Te = dt.stack.trim().match(/\n( *(at )?)/);
            yt = Te && Te[1] || "";
          }
        return `
` + yt + C;
      }
    }
    var ot = !1, en;
    {
      var hr = typeof WeakMap == "function" ? WeakMap : Map;
      en = new hr();
    }
    function Br(C, I) {
      if (!C || ot)
        return "";
      {
        var q = en.get(C);
        if (q !== void 0)
          return q;
      }
      var Te;
      ot = !0;
      var dt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var gt;
      gt = et.current, et.current = null, Ve();
      try {
        if (I) {
          var je = function() {
            throw Error();
          };
          if (Object.defineProperty(je.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(je, []);
            } catch (qn) {
              Te = qn;
            }
            Reflect.construct(C, [], je);
          } else {
            try {
              je.call();
            } catch (qn) {
              Te = qn;
            }
            C.call(je.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qn) {
            Te = qn;
          }
          C();
        }
      } catch (qn) {
        if (qn && Te && typeof qn.stack == "string") {
          for (var at = qn.stack.split(`
`), Un = Te.stack.split(`
`), Kt = at.length - 1, an = Un.length - 1; Kt >= 1 && an >= 0 && at[Kt] !== Un[an]; )
            an--;
          for (; Kt >= 1 && an >= 0; Kt--, an--)
            if (at[Kt] !== Un[an]) {
              if (Kt !== 1 || an !== 1)
                do
                  if (Kt--, an--, an < 0 || at[Kt] !== Un[an]) {
                    var Sr = `
` + at[Kt].replace(" at new ", " at ");
                    return C.displayName && Sr.includes("<anonymous>") && (Sr = Sr.replace("<anonymous>", C.displayName)), typeof C == "function" && en.set(C, Sr), Sr;
                  }
                while (Kt >= 1 && an >= 0);
              break;
            }
        }
      } finally {
        ot = !1, et.current = gt, nt(), Error.prepareStackTrace = dt;
      }
      var hi = C ? C.displayName || C.name : "", kt = hi ? ut(hi) : "";
      return typeof C == "function" && en.set(C, kt), kt;
    }
    function vn(C, I, q) {
      return Br(C, !1);
    }
    function Wn(C) {
      var I = C.prototype;
      return !!(I && I.isReactComponent);
    }
    function Pn(C, I, q) {
      if (C == null)
        return "";
      if (typeof C == "function")
        return Br(C, Wn(C));
      if (typeof C == "string")
        return ut(C);
      switch (C) {
        case pe:
          return ut("Suspense");
        case tt:
          return ut("SuspenseList");
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case de:
            return vn(C.render);
          case ne:
            return Pn(C.type, I, q);
          case me: {
            var Te = C, dt = Te._payload, gt = Te._init;
            try {
              return Pn(gt(dt), I, q);
            } catch {
            }
          }
        }
      return "";
    }
    var zn = Object.prototype.hasOwnProperty, kn = {}, $r = pn.ReactDebugCurrentFrame;
    function Yr(C) {
      if (C) {
        var I = C._owner, q = Pn(C.type, C._source, I ? I.type : null);
        $r.setExtraStackFrame(q);
      } else
        $r.setExtraStackFrame(null);
    }
    function Gn(C, I, q, Te, dt) {
      {
        var gt = Function.call.bind(zn);
        for (var je in C)
          if (gt(C, je)) {
            var at = void 0;
            try {
              if (typeof C[je] != "function") {
                var Un = Error((Te || "React class") + ": " + q + " type `" + je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Un.name = "Invariant Violation", Un;
              }
              at = C[je](I, je, Te, q, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Kt) {
              at = Kt;
            }
            at && !(at instanceof Error) && (Yr(dt), lt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Te || "React class", q, je, typeof at), Yr(null)), at instanceof Error && !(at.message in kn) && (kn[at.message] = !0, Yr(dt), lt("Failed %s type: %s", q, at.message), Yr(null));
          }
      }
    }
    var mr = Array.isArray;
    function Ir(C) {
      return mr(C);
    }
    function yr(C) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, q = I && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return q;
      }
    }
    function da(C) {
      try {
        return rr(C), !1;
      } catch {
        return !0;
      }
    }
    function rr(C) {
      return "" + C;
    }
    function Qr(C) {
      if (da(C))
        return lt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yr(C)), rr(C);
    }
    var hn = pn.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fi, pa, ee;
    ee = {};
    function ke(C) {
      if (zn.call(C, "ref")) {
        var I = Object.getOwnPropertyDescriptor(C, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return C.ref !== void 0;
    }
    function rt(C) {
      if (zn.call(C, "key")) {
        var I = Object.getOwnPropertyDescriptor(C, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return C.key !== void 0;
    }
    function Mt(C, I) {
      if (typeof C.ref == "string" && hn.current && I && hn.current.stateNode !== I) {
        var q = ze(hn.current.type);
        ee[q] || (lt('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ze(hn.current.type), C.ref), ee[q] = !0);
      }
    }
    function At(C, I) {
      {
        var q = function() {
          fi || (fi = !0, lt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        q.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: q,
          configurable: !0
        });
      }
    }
    function Dn(C, I) {
      {
        var q = function() {
          pa || (pa = !0, lt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        q.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: q,
          configurable: !0
        });
      }
    }
    var mn = function(C, I, q, Te, dt, gt, je) {
      var at = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: X,
        // Built-in properties that belong on the element
        type: C,
        key: I,
        ref: q,
        props: je,
        // Record the component responsible for creating this element.
        _owner: gt
      };
      return at._store = {}, Object.defineProperty(at._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(at, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Te
      }), Object.defineProperty(at, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: dt
      }), Object.freeze && (Object.freeze(at.props), Object.freeze(at)), at;
    };
    function gr(C, I, q, Te, dt) {
      {
        var gt, je = {}, at = null, Un = null;
        q !== void 0 && (Qr(q), at = "" + q), rt(I) && (Qr(I.key), at = "" + I.key), ke(I) && (Un = I.ref, Mt(I, dt));
        for (gt in I)
          zn.call(I, gt) && !br.hasOwnProperty(gt) && (je[gt] = I[gt]);
        if (C && C.defaultProps) {
          var Kt = C.defaultProps;
          for (gt in Kt)
            je[gt] === void 0 && (je[gt] = Kt[gt]);
        }
        if (at || Un) {
          var an = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          at && At(je, an), Un && Dn(je, an);
        }
        return mn(C, at, Un, dt, Te, hn.current, je);
      }
    }
    var $t = pn.ReactCurrentOwner, wr = pn.ReactDebugCurrentFrame;
    function Ft(C) {
      if (C) {
        var I = C._owner, q = Pn(C.type, C._source, I ? I.type : null);
        wr.setExtraStackFrame(q);
      } else
        wr.setExtraStackFrame(null);
    }
    var Ht;
    Ht = !1;
    function Ja(C) {
      return typeof C == "object" && C !== null && C.$$typeof === X;
    }
    function ka() {
      {
        if ($t.current) {
          var C = ze($t.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
    }
    function ol(C) {
      return "";
    }
    var Ql = {};
    function Mu(C) {
      {
        var I = ka();
        if (!I) {
          var q = typeof C == "string" ? C : C.displayName || C.name;
          q && (I = `

Check the top-level render call using <` + q + ">.");
        }
        return I;
      }
    }
    function Li(C, I) {
      {
        if (!C._store || C._store.validated || C.key != null)
          return;
        C._store.validated = !0;
        var q = Mu(I);
        if (Ql[q])
          return;
        Ql[q] = !0;
        var Te = "";
        C && C._owner && C._owner !== $t.current && (Te = " It was passed a child from " + ze(C._owner.type) + "."), Ft(C), lt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', q, Te), Ft(null);
      }
    }
    function sl(C, I) {
      {
        if (typeof C != "object")
          return;
        if (Ir(C))
          for (var q = 0; q < C.length; q++) {
            var Te = C[q];
            Ja(Te) && Li(Te, I);
          }
        else if (Ja(C))
          C._store && (C._store.validated = !0);
        else if (C) {
          var dt = pt(C);
          if (typeof dt == "function" && dt !== C.entries)
            for (var gt = dt.call(C), je; !(je = gt.next()).done; )
              Ja(je.value) && Li(je.value, I);
        }
      }
    }
    function va(C) {
      {
        var I = C.type;
        if (I == null || typeof I == "string")
          return;
        var q;
        if (typeof I == "function")
          q = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === de || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === ne))
          q = I.propTypes;
        else
          return;
        if (q) {
          var Te = ze(I);
          Gn(q, C.props, "prop", Te, C);
        } else if (I.PropTypes !== void 0 && !Ht) {
          Ht = !0;
          var dt = ze(I);
          lt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", dt || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && lt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function di(C) {
      {
        for (var I = Object.keys(C.props), q = 0; q < I.length; q++) {
          var Te = I[q];
          if (Te !== "children" && Te !== "key") {
            Ft(C), lt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Te), Ft(null);
            break;
          }
        }
        C.ref !== null && (Ft(C), lt("Invalid attribute `ref` supplied to `React.Fragment`."), Ft(null));
      }
    }
    var ha = {};
    function ei(C, I, q, Te, dt, gt) {
      {
        var je = Wt(C);
        if (!je) {
          var at = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (at += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Un = ol();
          Un ? at += Un : at += ka();
          var Kt;
          C === null ? Kt = "null" : Ir(C) ? Kt = "array" : C !== void 0 && C.$$typeof === X ? (Kt = "<" + (ze(C.type) || "Unknown") + " />", at = " Did you accidentally export a JSX literal instead of a component?") : Kt = typeof C, lt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Kt, at);
        }
        var an = gr(C, I, q, dt, gt);
        if (an == null)
          return an;
        if (je) {
          var Sr = I.children;
          if (Sr !== void 0)
            if (Te)
              if (Ir(Sr)) {
                for (var hi = 0; hi < Sr.length; hi++)
                  sl(Sr[hi], C);
                Object.freeze && Object.freeze(Sr);
              } else
                lt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              sl(Sr, C);
        }
        if (zn.call(I, "key")) {
          var kt = ze(C), qn = Object.keys(I).filter(function(Da) {
            return Da !== "key";
          }), kr = qn.length > 0 ? "{key: someKey, " + qn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ha[kt + kr]) {
            var it = qn.length > 0 ? "{" + qn.join(": ..., ") + ": ...}" : "{}";
            lt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, kr, kt, it, kt), ha[kt + kr] = !0;
          }
        }
        return C === It ? di(an) : va(an), an;
      }
    }
    function _r(C, I, q) {
      return ei(C, I, q, !0);
    }
    function ma(C, I, q) {
      return ei(C, I, q, !1);
    }
    var pi = ma, vi = _r;
    qp.Fragment = It, qp.jsx = pi, qp.jsxs = vi;
  }()), qp;
}
process.env.NODE_ENV === "production" ? hS.exports = nk() : hS.exports = rk();
var _ = hS.exports, yS = { exports: {} }, Xa = {}, Pm = { exports: {} }, dS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var a1;
function ak() {
  return a1 || (a1 = 1, function(te) {
    function X(J, _e) {
      var ie = J.length;
      J.push(_e);
      e: for (; 0 < ie; ) {
        var k = ie - 1 >>> 1, V = J[k];
        if (0 < Qt(V, _e)) J[k] = _e, J[ie] = V, ie = k;
        else break e;
      }
    }
    function A(J) {
      return J.length === 0 ? null : J[0];
    }
    function It(J) {
      if (J.length === 0) return null;
      var _e = J[0], ie = J.pop();
      if (ie !== _e) {
        J[0] = ie;
        e: for (var k = 0, V = J.length, Ue = V >>> 1; k < Ue; ) {
          var Ve = 2 * (k + 1) - 1, nt = J[Ve], et = Ve + 1, yt = J[et];
          if (0 > Qt(nt, ie)) et < V && 0 > Qt(yt, nt) ? (J[k] = yt, J[et] = ie, k = et) : (J[k] = nt, J[Ve] = ie, k = Ve);
          else if (et < V && 0 > Qt(yt, ie)) J[k] = yt, J[et] = ie, k = et;
          else break e;
        }
      }
      return _e;
    }
    function Qt(J, _e) {
      var ie = J.sortIndex - _e.sortIndex;
      return ie !== 0 ? ie : J.id - _e.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Je = performance;
      te.unstable_now = function() {
        return Je.now();
      };
    } else {
      var S = Date, Ut = S.now();
      te.unstable_now = function() {
        return S.now() - Ut;
      };
    }
    var de = [], pe = [], tt = 1, ne = null, me = 3, oe = !1, $e = !1, Tt = !1, pt = typeof setTimeout == "function" ? setTimeout : null, pn = typeof clearTimeout == "function" ? clearTimeout : null, lt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Ge(J) {
      for (var _e = A(pe); _e !== null; ) {
        if (_e.callback === null) It(pe);
        else if (_e.startTime <= J) It(pe), _e.sortIndex = _e.expirationTime, X(de, _e);
        else break;
        _e = A(pe);
      }
    }
    function vt(J) {
      if (Tt = !1, Ge(J), !$e) if (A(de) !== null) $e = !0, bt(Ne);
      else {
        var _e = A(pe);
        _e !== null && ye(vt, _e.startTime - J);
      }
    }
    function Ne(J, _e) {
      $e = !1, Tt && (Tt = !1, pn(rn), rn = -1), oe = !0;
      var ie = me;
      try {
        for (Ge(_e), ne = A(de); ne !== null && (!(ne.expirationTime > _e) || J && !_t()); ) {
          var k = ne.callback;
          if (typeof k == "function") {
            ne.callback = null, me = ne.priorityLevel;
            var V = k(ne.expirationTime <= _e);
            _e = te.unstable_now(), typeof V == "function" ? ne.callback = V : ne === A(de) && It(de), Ge(_e);
          } else It(de);
          ne = A(de);
        }
        if (ne !== null) var Ue = !0;
        else {
          var Ve = A(pe);
          Ve !== null && ye(vt, Ve.startTime - _e), Ue = !1;
        }
        return Ue;
      } finally {
        ne = null, me = ie, oe = !1;
      }
    }
    var st = !1, Pe = null, rn = -1, _n = 5, Wt = -1;
    function _t() {
      return !(te.unstable_now() - Wt < _n);
    }
    function xn() {
      if (Pe !== null) {
        var J = te.unstable_now();
        Wt = J;
        var _e = !0;
        try {
          _e = Pe(!0, J);
        } finally {
          _e ? ze() : (st = !1, Pe = null);
        }
      } else st = !1;
    }
    var ze;
    if (typeof lt == "function") ze = function() {
      lt(xn);
    };
    else if (typeof MessageChannel < "u") {
      var Xe = new MessageChannel(), jt = Xe.port2;
      Xe.port1.onmessage = xn, ze = function() {
        jt.postMessage(null);
      };
    } else ze = function() {
      pt(xn, 0);
    };
    function bt(J) {
      Pe = J, st || (st = !0, ze());
    }
    function ye(J, _e) {
      rn = pt(function() {
        J(te.unstable_now());
      }, _e);
    }
    te.unstable_IdlePriority = 5, te.unstable_ImmediatePriority = 1, te.unstable_LowPriority = 4, te.unstable_NormalPriority = 3, te.unstable_Profiling = null, te.unstable_UserBlockingPriority = 2, te.unstable_cancelCallback = function(J) {
      J.callback = null;
    }, te.unstable_continueExecution = function() {
      $e || oe || ($e = !0, bt(Ne));
    }, te.unstable_forceFrameRate = function(J) {
      0 > J || 125 < J ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : _n = 0 < J ? Math.floor(1e3 / J) : 5;
    }, te.unstable_getCurrentPriorityLevel = function() {
      return me;
    }, te.unstable_getFirstCallbackNode = function() {
      return A(de);
    }, te.unstable_next = function(J) {
      switch (me) {
        case 1:
        case 2:
        case 3:
          var _e = 3;
          break;
        default:
          _e = me;
      }
      var ie = me;
      me = _e;
      try {
        return J();
      } finally {
        me = ie;
      }
    }, te.unstable_pauseExecution = function() {
    }, te.unstable_requestPaint = function() {
    }, te.unstable_runWithPriority = function(J, _e) {
      switch (J) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          J = 3;
      }
      var ie = me;
      me = J;
      try {
        return _e();
      } finally {
        me = ie;
      }
    }, te.unstable_scheduleCallback = function(J, _e, ie) {
      var k = te.unstable_now();
      switch (typeof ie == "object" && ie !== null ? (ie = ie.delay, ie = typeof ie == "number" && 0 < ie ? k + ie : k) : ie = k, J) {
        case 1:
          var V = -1;
          break;
        case 2:
          V = 250;
          break;
        case 5:
          V = 1073741823;
          break;
        case 4:
          V = 1e4;
          break;
        default:
          V = 5e3;
      }
      return V = ie + V, J = { id: tt++, callback: _e, priorityLevel: J, startTime: ie, expirationTime: V, sortIndex: -1 }, ie > k ? (J.sortIndex = ie, X(pe, J), A(de) === null && J === A(pe) && (Tt ? (pn(rn), rn = -1) : Tt = !0, ye(vt, ie - k))) : (J.sortIndex = V, X(de, J), $e || oe || ($e = !0, bt(Ne))), J;
    }, te.unstable_shouldYield = _t, te.unstable_wrapCallback = function(J) {
      var _e = me;
      return function() {
        var ie = me;
        me = _e;
        try {
          return J.apply(this, arguments);
        } finally {
          me = ie;
        }
      };
    };
  }(dS)), dS;
}
var pS = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var i1;
function ik() {
  return i1 || (i1 = 1, function(te) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var X = !1, A = !1, It = 5;
      function Qt(ee, ke) {
        var rt = ee.length;
        ee.push(ke), Ut(ee, ke, rt);
      }
      function Je(ee) {
        return ee.length === 0 ? null : ee[0];
      }
      function S(ee) {
        if (ee.length === 0)
          return null;
        var ke = ee[0], rt = ee.pop();
        return rt !== ke && (ee[0] = rt, de(ee, rt, 0)), ke;
      }
      function Ut(ee, ke, rt) {
        for (var Mt = rt; Mt > 0; ) {
          var At = Mt - 1 >>> 1, Dn = ee[At];
          if (pe(Dn, ke) > 0)
            ee[At] = ke, ee[Mt] = Dn, Mt = At;
          else
            return;
        }
      }
      function de(ee, ke, rt) {
        for (var Mt = rt, At = ee.length, Dn = At >>> 1; Mt < Dn; ) {
          var mn = (Mt + 1) * 2 - 1, gr = ee[mn], $t = mn + 1, wr = ee[$t];
          if (pe(gr, ke) < 0)
            $t < At && pe(wr, gr) < 0 ? (ee[Mt] = wr, ee[$t] = ke, Mt = $t) : (ee[Mt] = gr, ee[mn] = ke, Mt = mn);
          else if ($t < At && pe(wr, ke) < 0)
            ee[Mt] = wr, ee[$t] = ke, Mt = $t;
          else
            return;
        }
      }
      function pe(ee, ke) {
        var rt = ee.sortIndex - ke.sortIndex;
        return rt !== 0 ? rt : ee.id - ke.id;
      }
      var tt = 1, ne = 2, me = 3, oe = 4, $e = 5;
      function Tt(ee, ke) {
      }
      var pt = typeof performance == "object" && typeof performance.now == "function";
      if (pt) {
        var pn = performance;
        te.unstable_now = function() {
          return pn.now();
        };
      } else {
        var lt = Date, Ge = lt.now();
        te.unstable_now = function() {
          return lt.now() - Ge;
        };
      }
      var vt = 1073741823, Ne = -1, st = 250, Pe = 5e3, rn = 1e4, _n = vt, Wt = [], _t = [], xn = 1, ze = null, Xe = me, jt = !1, bt = !1, ye = !1, J = typeof setTimeout == "function" ? setTimeout : null, _e = typeof clearTimeout == "function" ? clearTimeout : null, ie = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function k(ee) {
        for (var ke = Je(_t); ke !== null; ) {
          if (ke.callback === null)
            S(_t);
          else if (ke.startTime <= ee)
            S(_t), ke.sortIndex = ke.expirationTime, Qt(Wt, ke);
          else
            return;
          ke = Je(_t);
        }
      }
      function V(ee) {
        if (ye = !1, k(ee), !bt)
          if (Je(Wt) !== null)
            bt = !0, Qr(Ue);
          else {
            var ke = Je(_t);
            ke !== null && hn(V, ke.startTime - ee);
          }
      }
      function Ue(ee, ke) {
        bt = !1, ye && (ye = !1, br()), jt = !0;
        var rt = Xe;
        try {
          var Mt;
          if (!A) return Ve(ee, ke);
        } finally {
          ze = null, Xe = rt, jt = !1;
        }
      }
      function Ve(ee, ke) {
        var rt = ke;
        for (k(rt), ze = Je(Wt); ze !== null && !X && !(ze.expirationTime > rt && (!ee || Yr())); ) {
          var Mt = ze.callback;
          if (typeof Mt == "function") {
            ze.callback = null, Xe = ze.priorityLevel;
            var At = ze.expirationTime <= rt, Dn = Mt(At);
            rt = te.unstable_now(), typeof Dn == "function" ? ze.callback = Dn : ze === Je(Wt) && S(Wt), k(rt);
          } else
            S(Wt);
          ze = Je(Wt);
        }
        if (ze !== null)
          return !0;
        var mn = Je(_t);
        return mn !== null && hn(V, mn.startTime - rt), !1;
      }
      function nt(ee, ke) {
        switch (ee) {
          case tt:
          case ne:
          case me:
          case oe:
          case $e:
            break;
          default:
            ee = me;
        }
        var rt = Xe;
        Xe = ee;
        try {
          return ke();
        } finally {
          Xe = rt;
        }
      }
      function et(ee) {
        var ke;
        switch (Xe) {
          case tt:
          case ne:
          case me:
            ke = me;
            break;
          default:
            ke = Xe;
            break;
        }
        var rt = Xe;
        Xe = ke;
        try {
          return ee();
        } finally {
          Xe = rt;
        }
      }
      function yt(ee) {
        var ke = Xe;
        return function() {
          var rt = Xe;
          Xe = ke;
          try {
            return ee.apply(this, arguments);
          } finally {
            Xe = rt;
          }
        };
      }
      function ut(ee, ke, rt) {
        var Mt = te.unstable_now(), At;
        if (typeof rt == "object" && rt !== null) {
          var Dn = rt.delay;
          typeof Dn == "number" && Dn > 0 ? At = Mt + Dn : At = Mt;
        } else
          At = Mt;
        var mn;
        switch (ee) {
          case tt:
            mn = Ne;
            break;
          case ne:
            mn = st;
            break;
          case $e:
            mn = _n;
            break;
          case oe:
            mn = rn;
            break;
          case me:
          default:
            mn = Pe;
            break;
        }
        var gr = At + mn, $t = {
          id: xn++,
          callback: ke,
          priorityLevel: ee,
          startTime: At,
          expirationTime: gr,
          sortIndex: -1
        };
        return At > Mt ? ($t.sortIndex = At, Qt(_t, $t), Je(Wt) === null && $t === Je(_t) && (ye ? br() : ye = !0, hn(V, At - Mt))) : ($t.sortIndex = gr, Qt(Wt, $t), !bt && !jt && (bt = !0, Qr(Ue))), $t;
      }
      function ot() {
      }
      function en() {
        !bt && !jt && (bt = !0, Qr(Ue));
      }
      function hr() {
        return Je(Wt);
      }
      function Br(ee) {
        ee.callback = null;
      }
      function vn() {
        return Xe;
      }
      var Wn = !1, Pn = null, zn = -1, kn = It, $r = -1;
      function Yr() {
        var ee = te.unstable_now() - $r;
        return !(ee < kn);
      }
      function Gn() {
      }
      function mr(ee) {
        if (ee < 0 || ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ee > 0 ? kn = Math.floor(1e3 / ee) : kn = It;
      }
      var Ir = function() {
        if (Pn !== null) {
          var ee = te.unstable_now();
          $r = ee;
          var ke = !0, rt = !0;
          try {
            rt = Pn(ke, ee);
          } finally {
            rt ? yr() : (Wn = !1, Pn = null);
          }
        } else
          Wn = !1;
      }, yr;
      if (typeof ie == "function")
        yr = function() {
          ie(Ir);
        };
      else if (typeof MessageChannel < "u") {
        var da = new MessageChannel(), rr = da.port2;
        da.port1.onmessage = Ir, yr = function() {
          rr.postMessage(null);
        };
      } else
        yr = function() {
          J(Ir, 0);
        };
      function Qr(ee) {
        Pn = ee, Wn || (Wn = !0, yr());
      }
      function hn(ee, ke) {
        zn = J(function() {
          ee(te.unstable_now());
        }, ke);
      }
      function br() {
        _e(zn), zn = -1;
      }
      var fi = Gn, pa = null;
      te.unstable_IdlePriority = $e, te.unstable_ImmediatePriority = tt, te.unstable_LowPriority = oe, te.unstable_NormalPriority = me, te.unstable_Profiling = pa, te.unstable_UserBlockingPriority = ne, te.unstable_cancelCallback = Br, te.unstable_continueExecution = en, te.unstable_forceFrameRate = mr, te.unstable_getCurrentPriorityLevel = vn, te.unstable_getFirstCallbackNode = hr, te.unstable_next = et, te.unstable_pauseExecution = ot, te.unstable_requestPaint = fi, te.unstable_runWithPriority = nt, te.unstable_scheduleCallback = ut, te.unstable_shouldYield = Yr, te.unstable_wrapCallback = yt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(pS)), pS;
}
var l1;
function c1() {
  return l1 || (l1 = 1, process.env.NODE_ENV === "production" ? Pm.exports = ak() : Pm.exports = ik()), Pm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u1;
function lk() {
  if (u1) return Xa;
  u1 = 1;
  var te = Qo, X = c1();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var It = /* @__PURE__ */ new Set(), Qt = {};
  function Je(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (Qt[n] = r, n = 0; n < r.length; n++) It.add(r[n]);
  }
  var Ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), de = Object.prototype.hasOwnProperty, pe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, tt = {}, ne = {};
  function me(n) {
    return de.call(ne, n) ? !0 : de.call(tt, n) ? !1 : pe.test(n) ? ne[n] = !0 : (tt[n] = !0, !1);
  }
  function oe(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function $e(n, r, l, o) {
    if (r === null || typeof r > "u" || oe(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function Tt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var pt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    pt[n] = new Tt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    pt[r] = new Tt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    pt[n] = new Tt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    pt[n] = new Tt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    pt[n] = new Tt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    pt[n] = new Tt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    pt[n] = new Tt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    pt[n] = new Tt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    pt[n] = new Tt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var pn = /[\-:]([a-z])/g;
  function lt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      pn,
      lt
    );
    pt[r] = new Tt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(pn, lt);
    pt[r] = new Tt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(pn, lt);
    pt[r] = new Tt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    pt[n] = new Tt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), pt.xlinkHref = new Tt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    pt[n] = new Tt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Ge(n, r, l, o) {
    var c = pt.hasOwnProperty(r) ? pt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && ($e(r, l, c, o) && (l = null), o || c === null ? me(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var vt = te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ne = Symbol.for("react.element"), st = Symbol.for("react.portal"), Pe = Symbol.for("react.fragment"), rn = Symbol.for("react.strict_mode"), _n = Symbol.for("react.profiler"), Wt = Symbol.for("react.provider"), _t = Symbol.for("react.context"), xn = Symbol.for("react.forward_ref"), ze = Symbol.for("react.suspense"), Xe = Symbol.for("react.suspense_list"), jt = Symbol.for("react.memo"), bt = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), J = Symbol.iterator;
  function _e(n) {
    return n === null || typeof n != "object" ? null : (n = J && n[J] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ie = Object.assign, k;
  function V(n) {
    if (k === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      k = r && r[1] || "";
    }
    return `
` + k + n;
  }
  var Ue = !1;
  function Ve(n, r) {
    if (!n || Ue) return "";
    Ue = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (U) {
          var o = U;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (U) {
          o = U;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (U) {
          o = U;
        }
        n();
      }
    } catch (U) {
      if (U && o && typeof U.stack == "string") {
        for (var c = U.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var R = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", n.displayName)), R;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      Ue = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? V(n) : "";
  }
  function nt(n) {
    switch (n.tag) {
      case 5:
        return V(n.type);
      case 16:
        return V("Lazy");
      case 13:
        return V("Suspense");
      case 19:
        return V("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ve(n.type, !1), n;
      case 11:
        return n = Ve(n.type.render, !1), n;
      case 1:
        return n = Ve(n.type, !0), n;
      default:
        return "";
    }
  }
  function et(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Pe:
        return "Fragment";
      case st:
        return "Portal";
      case _n:
        return "Profiler";
      case rn:
        return "StrictMode";
      case ze:
        return "Suspense";
      case Xe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case _t:
        return (n.displayName || "Context") + ".Consumer";
      case Wt:
        return (n._context.displayName || "Context") + ".Provider";
      case xn:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case jt:
        return r = n.displayName || null, r !== null ? r : et(n.type) || "Memo";
      case bt:
        r = n._payload, n = n._init;
        try {
          return et(n(r));
        } catch {
        }
    }
    return null;
  }
  function yt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return et(r);
      case 8:
        return r === rn ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function ut(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function ot(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function en(n) {
    var r = ot(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function hr(n) {
    n._valueTracker || (n._valueTracker = en(n));
  }
  function Br(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = ot(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function vn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Wn(n, r) {
    var l = r.checked;
    return ie({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Pn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = ut(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function zn(n, r) {
    r = r.checked, r != null && Ge(n, "checked", r, !1);
  }
  function kn(n, r) {
    zn(n, r);
    var l = ut(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Yr(n, r.type, l) : r.hasOwnProperty("defaultValue") && Yr(n, r.type, ut(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function $r(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Yr(n, r, l) {
    (r !== "number" || vn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Gn = Array.isArray;
  function mr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ut(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ir(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return ie({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function yr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (Gn(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ut(l) };
  }
  function da(n, r) {
    var l = ut(r.value), o = ut(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function rr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Qr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function hn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Qr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var br, fi = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (br = br || document.createElement("div"), br.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = br.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function pa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ee = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ke = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ee).forEach(function(n) {
    ke.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ee[r] = ee[n];
    });
  });
  function rt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ee.hasOwnProperty(n) && ee[n] ? ("" + r).trim() : r + "px";
  }
  function Mt(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = rt(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var At = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Dn(n, r) {
    if (r) {
      if (At[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
    }
  }
  function mn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var gr = null;
  function $t(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var wr = null, Ft = null, Ht = null;
  function Ja(n) {
    if (n = fs(n)) {
      if (typeof wr != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = Oe(r), wr(n.stateNode, n.type, r));
    }
  }
  function ka(n) {
    Ft ? Ht ? Ht.push(n) : Ht = [n] : Ft = n;
  }
  function ol() {
    if (Ft) {
      var n = Ft, r = Ht;
      if (Ht = Ft = null, Ja(n), r) for (n = 0; n < r.length; n++) Ja(r[n]);
    }
  }
  function Ql(n, r) {
    return n(r);
  }
  function Mu() {
  }
  var Li = !1;
  function sl(n, r, l) {
    if (Li) return n(r, l);
    Li = !0;
    try {
      return Ql(n, r, l);
    } finally {
      Li = !1, (Ft !== null || Ht !== null) && (Mu(), ol());
    }
  }
  function va(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Oe(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(A(231, r, typeof l));
    return l;
  }
  var di = !1;
  if (Ut) try {
    var ha = {};
    Object.defineProperty(ha, "passive", { get: function() {
      di = !0;
    } }), window.addEventListener("test", ha, ha), window.removeEventListener("test", ha, ha);
  } catch {
    di = !1;
  }
  function ei(n, r, l, o, c, d, m, E, R) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, U);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var _r = !1, ma = null, pi = !1, vi = null, C = { onError: function(n) {
    _r = !0, ma = n;
  } };
  function I(n, r, l, o, c, d, m, E, R) {
    _r = !1, ma = null, ei.apply(C, arguments);
  }
  function q(n, r, l, o, c, d, m, E, R) {
    if (I.apply(this, arguments), _r) {
      if (_r) {
        var U = ma;
        _r = !1, ma = null;
      } else throw Error(A(198));
      pi || (pi = !0, vi = U);
    }
  }
  function Te(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function dt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function gt(n) {
    if (Te(n) !== n) throw Error(A(188));
  }
  function je(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Te(n), r === null) throw Error(A(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return gt(c), n;
          if (d === o) return gt(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(A(189));
        }
      }
      if (l.alternate !== o) throw Error(A(190));
    }
    if (l.tag !== 3) throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function at(n) {
    return n = je(n), n !== null ? Un(n) : null;
  }
  function Un(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = Un(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Kt = X.unstable_scheduleCallback, an = X.unstable_cancelCallback, Sr = X.unstable_shouldYield, hi = X.unstable_requestPaint, kt = X.unstable_now, qn = X.unstable_getCurrentPriorityLevel, kr = X.unstable_ImmediatePriority, it = X.unstable_UserBlockingPriority, Da = X.unstable_NormalPriority, cl = X.unstable_LowPriority, zu = X.unstable_IdlePriority, fl = null, Wr = null;
  function Go(n) {
    if (Wr && typeof Wr.onCommitFiberRoot == "function") try {
      Wr.onCommitFiberRoot(fl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Dr = Math.clz32 ? Math.clz32 : ec, qo = Math.log, Ko = Math.LN2;
  function ec(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (qo(n) / Ko | 0) | 0;
  }
  var Uu = 64, dl = 4194304;
  function ti(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Nr(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = ti(E) : (d &= m, d !== 0 && (o = ti(d)));
    } else m = l & ~c, m !== 0 ? o = ti(m) : d !== 0 && (o = ti(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Dr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function pl(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function vl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Dr(d), E = 1 << m, R = c[m];
      R === -1 ? (!(E & l) || E & o) && (c[m] = pl(E, r)) : R <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function hl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ju() {
    var n = Uu;
    return Uu <<= 1, !(Uu & 4194240) && (Uu = 64), n;
  }
  function Au(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Mi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Dr(r), n[r] = l;
  }
  function If(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Dr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function mi(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Dr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var Dt = 0;
  function Fu(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Wl, Hu, St, Pu, Vu, Qe = !1, Gl = [], yn = null, Gr = null, Or = null, ml = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), Pt = [], tc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function qr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        yn = null;
        break;
      case "dragenter":
      case "dragleave":
        Gr = null;
        break;
      case "mouseover":
      case "mouseout":
        Or = null;
        break;
      case "pointerover":
      case "pointerout":
        ml.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(r.pointerId);
    }
  }
  function Kn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = fs(r), r !== null && Hu(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function yi(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return yn = Kn(yn, n, r, l, o, c), !0;
      case "dragenter":
        return Gr = Kn(Gr, n, r, l, o, c), !0;
      case "mouseover":
        return Or = Kn(Or, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return ml.set(d, Kn(ml.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Cn.set(d, Kn(Cn.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function nc(n) {
    var r = Ma(n.target);
    if (r !== null) {
      var l = Te(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = dt(l), r !== null) {
            n.blockedOn = r, Vu(n.priority, function() {
              St(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function zi(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = $u(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        gr = o, l.target.dispatchEvent(o), gr = null;
      } else return r = fs(l), r !== null && Hu(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function yl(n, r, l) {
    zi(n) && l.delete(r);
  }
  function rc() {
    Qe = !1, yn !== null && zi(yn) && (yn = null), Gr !== null && zi(Gr) && (Gr = null), Or !== null && zi(Or) && (Or = null), ml.forEach(yl), Cn.forEach(yl);
  }
  function Na(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Qe || (Qe = !0, X.unstable_scheduleCallback(X.unstable_NormalPriority, rc)));
  }
  function gl(n) {
    function r(c) {
      return Na(c, n);
    }
    if (0 < Gl.length) {
      Na(Gl[0], n);
      for (var l = 1; l < Gl.length; l++) {
        var o = Gl[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (yn !== null && Na(yn, n), Gr !== null && Na(Gr, n), Or !== null && Na(Or, n), ml.forEach(r), Cn.forEach(r), l = 0; l < Pt.length; l++) o = Pt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Pt.length && (l = Pt[0], l.blockedOn === null); ) nc(l), l.blockedOn === null && Pt.shift();
  }
  var Ui = vt.ReactCurrentBatchConfig, Oa = !0;
  function Bu(n, r, l, o) {
    var c = Dt, d = Ui.transition;
    Ui.transition = null;
    try {
      Dt = 1, El(n, r, l, o);
    } finally {
      Dt = c, Ui.transition = d;
    }
  }
  function Sl(n, r, l, o) {
    var c = Dt, d = Ui.transition;
    Ui.transition = null;
    try {
      Dt = 4, El(n, r, l, o);
    } finally {
      Dt = c, Ui.transition = d;
    }
  }
  function El(n, r, l, o) {
    if (Oa) {
      var c = $u(n, r, l, o);
      if (c === null) dc(n, r, o, ql, l), qr(n, o);
      else if (yi(c, n, r, l, o)) o.stopPropagation();
      else if (qr(n, o), r & 4 && -1 < tc.indexOf(n)) {
        for (; c !== null; ) {
          var d = fs(c);
          if (d !== null && Wl(d), d = $u(n, r, l, o), d === null && dc(n, r, o, ql, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else dc(n, r, o, null, l);
    }
  }
  var ql = null;
  function $u(n, r, l, o) {
    if (ql = null, n = $t(o), n = Ma(n), n !== null) if (r = Te(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = dt(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return ql = n, null;
  }
  function Xo(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (qn()) {
          case kr:
            return 1;
          case it:
            return 4;
          case Da:
          case cl:
            return 16;
          case zu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ni = null, h = null, x = null;
  function z() {
    if (x) return x;
    var n, r = h, l = r.length, o, c = "value" in ni ? ni.value : ni.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return x = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function F(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function K() {
    return !0;
  }
  function Ae() {
    return !1;
  }
  function le(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? K : Ae, this.isPropagationStopped = Ae, this;
    }
    return ie(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = K);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = K);
    }, persist: function() {
    }, isPersistent: K }), r;
  }
  var Me = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, ct = le(Me), wt = ie({}, Me, { view: 0, detail: 0 }), Xt = le(wt), Yt, Zt, tn, Et = ie({}, wt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Kf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== tn && (tn && n.type === "mousemove" ? (Yt = n.screenX - tn.screenX, Zt = n.screenY - tn.screenY) : Zt = Yt = 0, tn = n), Yt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Zt;
  } }), ji = le(Et), Yu = ie({}, Et, { dataTransfer: 0 }), Zo = le(Yu), Qf = ie({}, wt, { relatedTarget: 0 }), ri = le(Qf), Jo = ie({}, Me, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), es = le(Jo), Wf = ie({}, Me, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), $m = le(Wf), Ym = ie({}, Me, { data: 0 }), Gf = le(Ym), qf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Xp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Zp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Jp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Zp[n]) ? !!r[n] : !1;
  }
  function Kf() {
    return Jp;
  }
  var Ai = ie({}, wt, { key: function(n) {
    if (n.key) {
      var r = qf[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = F(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Xp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Kf, charCode: function(n) {
    return n.type === "keypress" ? F(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? F(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Im = le(Ai), Xf = ie({}, Et, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ac = le(Xf), Zf = ie({}, wt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Kf }), Qm = le(Zf), ic = ie({}, Me, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ev = le(ic), Kr = ie({}, Et, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fi = le(Kr), jn = [9, 13, 27, 32], ai = Ut && "CompositionEvent" in window, Kl = null;
  Ut && "documentMode" in document && (Kl = document.documentMode);
  var lc = Ut && "TextEvent" in window && !Kl, tv = Ut && (!ai || Kl && 8 < Kl && 11 >= Kl), Iu = " ", nv = !1;
  function rv(n, r) {
    switch (n) {
      case "keyup":
        return jn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function uc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Qu = !1;
  function Wm(n, r) {
    switch (n) {
      case "compositionend":
        return uc(r);
      case "keypress":
        return r.which !== 32 ? null : (nv = !0, Iu);
      case "textInput":
        return n = r.data, n === Iu && nv ? null : n;
      default:
        return null;
    }
  }
  function Gm(n, r) {
    if (Qu) return n === "compositionend" || !ai && rv(n, r) ? (n = z(), x = h = ni = null, Qu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return tv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var av = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function iv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!av[n.type] : r === "textarea";
  }
  function lv(n, r, l, o) {
    ka(o), r = os(r, "onChange"), 0 < r.length && (l = new ct("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var ts = null, Wu = null;
  function Gu(n) {
    fc(n, 0);
  }
  function qu(n) {
    var r = Xu(n);
    if (Br(r)) return n;
  }
  function uv(n, r) {
    if (n === "change") return r;
  }
  var Jf = !1;
  if (Ut) {
    var ed;
    if (Ut) {
      var td = "oninput" in document;
      if (!td) {
        var ov = document.createElement("div");
        ov.setAttribute("oninput", "return;"), td = typeof ov.oninput == "function";
      }
      ed = td;
    } else ed = !1;
    Jf = ed && (!document.documentMode || 9 < document.documentMode);
  }
  function sv() {
    ts && (ts.detachEvent("onpropertychange", cv), Wu = ts = null);
  }
  function cv(n) {
    if (n.propertyName === "value" && qu(Wu)) {
      var r = [];
      lv(r, Wu, n, $t(n)), sl(Gu, r);
    }
  }
  function qm(n, r, l) {
    n === "focusin" ? (sv(), ts = r, Wu = l, ts.attachEvent("onpropertychange", cv)) : n === "focusout" && sv();
  }
  function Km(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return qu(Wu);
  }
  function Xm(n, r) {
    if (n === "click") return qu(r);
  }
  function fv(n, r) {
    if (n === "input" || n === "change") return qu(r);
  }
  function Zm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var La = typeof Object.is == "function" ? Object.is : Zm;
  function ns(n, r) {
    if (La(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!de.call(r, c) || !La(n[c], r[c])) return !1;
    }
    return !0;
  }
  function dv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function pv(n, r) {
    var l = dv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = dv(l);
    }
  }
  function vv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? vv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function oc() {
    for (var n = window, r = vn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = vn(n.document);
    }
    return r;
  }
  function Hi(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function sc(n) {
    var r = oc(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && vv(l.ownerDocument.documentElement, l)) {
      if (o !== null && Hi(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = pv(l, d);
          var m = pv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var hv = Ut && "documentMode" in document && 11 >= document.documentMode, ii = null, nd = null, rs = null, rd = !1;
  function mv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    rd || ii == null || ii !== vn(o) || (o = ii, "selectionStart" in o && Hi(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), rs && ns(rs, o) || (rs = o, o = os(nd, "onSelect"), 0 < o.length && (r = new ct("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = ii)));
  }
  function cc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Xl = { animationend: cc("Animation", "AnimationEnd"), animationiteration: cc("Animation", "AnimationIteration"), animationstart: cc("Animation", "AnimationStart"), transitionend: cc("Transition", "TransitionEnd") }, ad = {}, id = {};
  Ut && (id = document.createElement("div").style, "AnimationEvent" in window || (delete Xl.animationend.animation, delete Xl.animationiteration.animation, delete Xl.animationstart.animation), "TransitionEvent" in window || delete Xl.transitionend.transition);
  function Xn(n) {
    if (ad[n]) return ad[n];
    if (!Xl[n]) return n;
    var r = Xl[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in id) return ad[n] = r[l];
    return n;
  }
  var ld = Xn("animationend"), yv = Xn("animationiteration"), gv = Xn("animationstart"), Sv = Xn("transitionend"), Ev = /* @__PURE__ */ new Map(), xv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Pi(n, r) {
    Ev.set(n, r), Je(r, [n]);
  }
  for (var as = 0; as < xv.length; as++) {
    var Zl = xv[as], Jm = Zl.toLowerCase(), is = Zl[0].toUpperCase() + Zl.slice(1);
    Pi(Jm, "on" + is);
  }
  Pi(ld, "onAnimationEnd"), Pi(yv, "onAnimationIteration"), Pi(gv, "onAnimationStart"), Pi("dblclick", "onDoubleClick"), Pi("focusin", "onFocus"), Pi("focusout", "onBlur"), Pi(Sv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), Je("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Je("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Je("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Je("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Je("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Je("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ls = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ey = new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));
  function Cv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, q(o, r, void 0, n), n.currentTarget = null;
  }
  function fc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], R = E.instance, U = E.currentTarget;
          if (E = E.listener, R !== d && c.isPropagationStopped()) break e;
          Cv(c, E, U), d = R;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], R = E.instance, U = E.currentTarget, E = E.listener, R !== d && c.isPropagationStopped()) break e;
          Cv(c, E, U), d = R;
        }
      }
    }
    if (pi) throw n = vi, pi = !1, vi = null, n;
  }
  function Jt(n, r) {
    var l = r[pd];
    l === void 0 && (l = r[pd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Rv(r, n, 2, !1), l.add(o));
  }
  function xl(n, r, l) {
    var o = 0;
    r && (o |= 4), Rv(l, n, o, r);
  }
  var Vi = "_reactListening" + Math.random().toString(36).slice(2);
  function Ku(n) {
    if (!n[Vi]) {
      n[Vi] = !0, It.forEach(function(l) {
        l !== "selectionchange" && (ey.has(l) || xl(l, !1, n), xl(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Vi] || (r[Vi] = !0, xl("selectionchange", !1, r));
    }
  }
  function Rv(n, r, l, o) {
    switch (Xo(r)) {
      case 1:
        var c = Bu;
        break;
      case 4:
        c = Sl;
        break;
      default:
        c = El;
    }
    l = c.bind(null, r, l, n), c = void 0, !di || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function dc(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var R = m.tag;
          if ((R === 3 || R === 4) && (R = m.stateNode.containerInfo, R === c || R.nodeType === 8 && R.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = Ma(E), m === null) return;
          if (R = m.tag, R === 5 || R === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    sl(function() {
      var U = d, Q = $t(l), W = [];
      e: {
        var Y = Ev.get(n);
        if (Y !== void 0) {
          var ce = ct, ge = n;
          switch (n) {
            case "keypress":
              if (F(l) === 0) break e;
            case "keydown":
            case "keyup":
              ce = Im;
              break;
            case "focusin":
              ge = "focus", ce = ri;
              break;
            case "focusout":
              ge = "blur", ce = ri;
              break;
            case "beforeblur":
            case "afterblur":
              ce = ri;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ce = ji;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ce = Zo;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ce = Qm;
              break;
            case ld:
            case yv:
            case gv:
              ce = es;
              break;
            case Sv:
              ce = ev;
              break;
            case "scroll":
              ce = Xt;
              break;
            case "wheel":
              ce = Fi;
              break;
            case "copy":
            case "cut":
            case "paste":
              ce = $m;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ce = ac;
          }
          var xe = (r & 4) !== 0, Ln = !xe && n === "scroll", D = xe ? Y !== null ? Y + "Capture" : null : Y;
          xe = [];
          for (var b = U, L; b !== null; ) {
            L = b;
            var Z = L.stateNode;
            if (L.tag === 5 && Z !== null && (L = Z, D !== null && (Z = va(b, D), Z != null && xe.push(us(b, Z, L)))), Ln) break;
            b = b.return;
          }
          0 < xe.length && (Y = new ce(Y, ge, null, l, Q), W.push({ event: Y, listeners: xe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Y = n === "mouseover" || n === "pointerover", ce = n === "mouseout" || n === "pointerout", Y && l !== gr && (ge = l.relatedTarget || l.fromElement) && (Ma(ge) || ge[Bi])) break e;
          if ((ce || Y) && (Y = Q.window === Q ? Q : (Y = Q.ownerDocument) ? Y.defaultView || Y.parentWindow : window, ce ? (ge = l.relatedTarget || l.toElement, ce = U, ge = ge ? Ma(ge) : null, ge !== null && (Ln = Te(ge), ge !== Ln || ge.tag !== 5 && ge.tag !== 6) && (ge = null)) : (ce = null, ge = U), ce !== ge)) {
            if (xe = ji, Z = "onMouseLeave", D = "onMouseEnter", b = "mouse", (n === "pointerout" || n === "pointerover") && (xe = ac, Z = "onPointerLeave", D = "onPointerEnter", b = "pointer"), Ln = ce == null ? Y : Xu(ce), L = ge == null ? Y : Xu(ge), Y = new xe(Z, b + "leave", ce, l, Q), Y.target = Ln, Y.relatedTarget = L, Z = null, Ma(Q) === U && (xe = new xe(D, b + "enter", ge, l, Q), xe.target = L, xe.relatedTarget = Ln, Z = xe), Ln = Z, ce && ge) t: {
              for (xe = ce, D = ge, b = 0, L = xe; L; L = Jl(L)) b++;
              for (L = 0, Z = D; Z; Z = Jl(Z)) L++;
              for (; 0 < b - L; ) xe = Jl(xe), b--;
              for (; 0 < L - b; ) D = Jl(D), L--;
              for (; b--; ) {
                if (xe === D || D !== null && xe === D.alternate) break t;
                xe = Jl(xe), D = Jl(D);
              }
              xe = null;
            }
            else xe = null;
            ce !== null && ud(W, Y, ce, xe, !1), ge !== null && Ln !== null && ud(W, Ln, ge, xe, !0);
          }
        }
        e: {
          if (Y = U ? Xu(U) : window, ce = Y.nodeName && Y.nodeName.toLowerCase(), ce === "select" || ce === "input" && Y.type === "file") var Re = uv;
          else if (iv(Y)) if (Jf) Re = fv;
          else {
            Re = Km;
            var Fe = qm;
          }
          else (ce = Y.nodeName) && ce.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (Re = Xm);
          if (Re && (Re = Re(n, U))) {
            lv(W, Re, l, Q);
            break e;
          }
          Fe && Fe(n, Y, U), n === "focusout" && (Fe = Y._wrapperState) && Fe.controlled && Y.type === "number" && Yr(Y, "number", Y.value);
        }
        switch (Fe = U ? Xu(U) : window, n) {
          case "focusin":
            (iv(Fe) || Fe.contentEditable === "true") && (ii = Fe, nd = U, rs = null);
            break;
          case "focusout":
            rs = nd = ii = null;
            break;
          case "mousedown":
            rd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            rd = !1, mv(W, l, Q);
            break;
          case "selectionchange":
            if (hv) break;
          case "keydown":
          case "keyup":
            mv(W, l, Q);
        }
        var Se;
        if (ai) e: {
          switch (n) {
            case "compositionstart":
              var He = "onCompositionStart";
              break e;
            case "compositionend":
              He = "onCompositionEnd";
              break e;
            case "compositionupdate":
              He = "onCompositionUpdate";
              break e;
          }
          He = void 0;
        }
        else Qu ? rv(n, l) && (He = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (He = "onCompositionStart");
        He && (tv && l.locale !== "ko" && (Qu || He !== "onCompositionStart" ? He === "onCompositionEnd" && Qu && (Se = z()) : (ni = Q, h = "value" in ni ? ni.value : ni.textContent, Qu = !0)), Fe = os(U, He), 0 < Fe.length && (He = new Gf(He, n, null, l, Q), W.push({ event: He, listeners: Fe }), Se ? He.data = Se : (Se = uc(l), Se !== null && (He.data = Se)))), (Se = lc ? Wm(n, l) : Gm(n, l)) && (U = os(U, "onBeforeInput"), 0 < U.length && (Q = new Gf("onBeforeInput", "beforeinput", null, l, Q), W.push({ event: Q, listeners: U }), Q.data = Se));
      }
      fc(W, r);
    });
  }
  function us(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function os(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = va(n, l), d != null && o.unshift(us(n, d, c)), d = va(n, r), d != null && o.push(us(n, d, c))), n = n.return;
    }
    return o;
  }
  function Jl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function ud(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, R = E.alternate, U = E.stateNode;
      if (R !== null && R === o) break;
      E.tag === 5 && U !== null && (E = U, c ? (R = va(l, d), R != null && m.unshift(us(l, R, E))) : c || (R = va(l, d), R != null && m.push(us(l, R, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var od = /\r\n?/g, ty = /\u0000|\uFFFD/g;
  function sd(n) {
    return (typeof n == "string" ? n : "" + n).replace(od, `
`).replace(ty, "");
  }
  function pc(n, r, l) {
    if (r = sd(r), sd(n) !== r && l) throw Error(A(425));
  }
  function vc() {
  }
  var cd = null, eu = null;
  function ss(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var tu = typeof setTimeout == "function" ? setTimeout : void 0, Tv = typeof clearTimeout == "function" ? clearTimeout : void 0, fd = typeof Promise == "function" ? Promise : void 0, dd = typeof queueMicrotask == "function" ? queueMicrotask : typeof fd < "u" ? function(n) {
    return fd.resolve(null).then(n).catch(ny);
  } : tu;
  function ny(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Cl(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), gl(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    gl(r);
  }
  function li(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function cs(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Rl = Math.random().toString(36).slice(2), gi = "__reactFiber$" + Rl, nu = "__reactProps$" + Rl, Bi = "__reactContainer$" + Rl, pd = "__reactEvents$" + Rl, ry = "__reactListeners$" + Rl, vd = "__reactHandles$" + Rl;
  function Ma(n) {
    var r = n[gi];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Bi] || l[gi]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = cs(n); n !== null; ) {
          if (l = n[gi]) return l;
          n = cs(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function fs(n) {
    return n = n[gi] || n[Bi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Xu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function Oe(n) {
    return n[nu] || null;
  }
  var Tl = [], ln = -1;
  function Ze(n) {
    return { current: n };
  }
  function zt(n) {
    0 > ln || (n.current = Tl[ln], Tl[ln] = null, ln--);
  }
  function Vt(n, r) {
    ln++, Tl[ln] = n.current, n.current = r;
  }
  var Si = {}, Ye = Ze(Si), Rn = Ze(!1), Xr = Si;
  function za(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Si;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function cn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ua() {
    zt(Rn), zt(Ye);
  }
  function bl(n, r, l) {
    if (Ye.current !== Si) throw Error(A(168));
    Vt(Ye, r), Vt(Rn, l);
  }
  function ds(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, yt(n) || "Unknown", c));
    return ie({}, l, o);
  }
  function hc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Si, Xr = Ye.current, Vt(Ye, n), Vt(Rn, Rn.current), !0;
  }
  function bv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = ds(n, r, Xr), o.__reactInternalMemoizedMergedChildContext = n, zt(Rn), zt(Ye), Vt(Ye, n)) : zt(Rn), Vt(Rn, l);
  }
  var ya = null, Zn = !1, ps = !1;
  function hd(n) {
    ya === null ? ya = [n] : ya.push(n);
  }
  function md(n) {
    Zn = !0, hd(n);
  }
  function Zr() {
    if (!ps && ya !== null) {
      ps = !0;
      var n = 0, r = Dt;
      try {
        var l = ya;
        for (Dt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        ya = null, Zn = !1;
      } catch (c) {
        throw ya !== null && (ya = ya.slice(n + 1)), Kt(kr, Zr), c;
      } finally {
        Dt = r, ps = !1;
      }
    }
    return null;
  }
  var wl = [], Jr = 0, ru = null, Zu = 0, ea = [], Er = 0, ja = null, ar = 1, $i = "";
  function ga(n, r) {
    wl[Jr++] = Zu, wl[Jr++] = ru, ru = n, Zu = r;
  }
  function yd(n, r, l) {
    ea[Er++] = ar, ea[Er++] = $i, ea[Er++] = ja, ja = n;
    var o = ar;
    n = $i;
    var c = 32 - Dr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Dr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, ar = 1 << 32 - Dr(r) + c | l << c | o, $i = d + n;
    } else ar = 1 << d | l << c | o, $i = n;
  }
  function mc(n) {
    n.return !== null && (ga(n, 1), yd(n, 1, 0));
  }
  function gd(n) {
    for (; n === ru; ) ru = wl[--Jr], wl[Jr] = null, Zu = wl[--Jr], wl[Jr] = null;
    for (; n === ja; ) ja = ea[--Er], ea[Er] = null, $i = ea[--Er], ea[Er] = null, ar = ea[--Er], ea[Er] = null;
  }
  var Sa = null, ta = null, un = !1, Aa = null;
  function Sd(n, r) {
    var l = Ia(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function wv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Sa = n, ta = li(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Sa = n, ta = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ja !== null ? { id: ar, overflow: $i } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ia(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Sa = n, ta = null, !0) : !1;
      default:
        return !1;
    }
  }
  function yc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function gc(n) {
    if (un) {
      var r = ta;
      if (r) {
        var l = r;
        if (!wv(n, r)) {
          if (yc(n)) throw Error(A(418));
          r = li(l.nextSibling);
          var o = Sa;
          r && wv(n, r) ? Sd(o, l) : (n.flags = n.flags & -4097 | 2, un = !1, Sa = n);
        }
      } else {
        if (yc(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, un = !1, Sa = n;
      }
    }
  }
  function _v(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Sa = n;
  }
  function Sc(n) {
    if (n !== Sa) return !1;
    if (!un) return _v(n), un = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ss(n.type, n.memoizedProps)), r && (r = ta)) {
      if (yc(n)) throw kv(), Error(A(418));
      for (; r; ) Sd(n, r), r = li(r.nextSibling);
    }
    if (_v(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ta = li(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ta = null;
      }
    } else ta = Sa ? li(n.stateNode.nextSibling) : null;
    return !0;
  }
  function kv() {
    for (var n = ta; n; ) n = li(n.nextSibling);
  }
  function gn() {
    ta = Sa = null, un = !1;
  }
  function Ed(n) {
    Aa === null ? Aa = [n] : Aa.push(n);
  }
  var Ec = vt.ReactCurrentBatchConfig;
  function au(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(A(284));
      if (!l._owner) throw Error(A(290, n));
    }
    return n;
  }
  function Ei(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Dv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function xc(n) {
    function r(D, b) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [b], D.flags |= 16) : L.push(b);
      }
    }
    function l(D, b) {
      if (!n) return null;
      for (; b !== null; ) r(D, b), b = b.sibling;
      return null;
    }
    function o(D, b) {
      for (D = /* @__PURE__ */ new Map(); b !== null; ) b.key !== null ? D.set(b.key, b) : D.set(b.index, b), b = b.sibling;
      return D;
    }
    function c(D, b) {
      return D = zl(D, b), D.index = 0, D.sibling = null, D;
    }
    function d(D, b, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < b ? (D.flags |= 2, b) : L) : (D.flags |= 2, b)) : (D.flags |= 1048576, b);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, b, L, Z) {
      return b === null || b.tag !== 6 ? (b = sf(L, D.mode, Z), b.return = D, b) : (b = c(b, L), b.return = D, b);
    }
    function R(D, b, L, Z) {
      var Re = L.type;
      return Re === Pe ? Q(D, b, L.props.children, Z, L.key) : b !== null && (b.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === bt && Dv(Re) === b.type) ? (Z = c(b, L.props), Z.ref = au(D, b, L), Z.return = D, Z) : (Z = uf(L.type, L.key, L.props, null, D.mode, Z), Z.ref = au(D, b, L), Z.return = D, Z);
    }
    function U(D, b, L, Z) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== L.containerInfo || b.stateNode.implementation !== L.implementation ? (b = Os(L, D.mode, Z), b.return = D, b) : (b = c(b, L.children || []), b.return = D, b);
    }
    function Q(D, b, L, Z, Re) {
      return b === null || b.tag !== 7 ? (b = Su(L, D.mode, Z, Re), b.return = D, b) : (b = c(b, L), b.return = D, b);
    }
    function W(D, b, L) {
      if (typeof b == "string" && b !== "" || typeof b == "number") return b = sf("" + b, D.mode, L), b.return = D, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Ne:
            return L = uf(b.type, b.key, b.props, null, D.mode, L), L.ref = au(D, null, b), L.return = D, L;
          case st:
            return b = Os(b, D.mode, L), b.return = D, b;
          case bt:
            var Z = b._init;
            return W(D, Z(b._payload), L);
        }
        if (Gn(b) || _e(b)) return b = Su(b, D.mode, L, null), b.return = D, b;
        Ei(D, b);
      }
      return null;
    }
    function Y(D, b, L, Z) {
      var Re = b !== null ? b.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return Re !== null ? null : E(D, b, "" + L, Z);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Ne:
            return L.key === Re ? R(D, b, L, Z) : null;
          case st:
            return L.key === Re ? U(D, b, L, Z) : null;
          case bt:
            return Re = L._init, Y(
              D,
              b,
              Re(L._payload),
              Z
            );
        }
        if (Gn(L) || _e(L)) return Re !== null ? null : Q(D, b, L, Z, null);
        Ei(D, L);
      }
      return null;
    }
    function ce(D, b, L, Z, Re) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number") return D = D.get(L) || null, E(b, D, "" + Z, Re);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case Ne:
            return D = D.get(Z.key === null ? L : Z.key) || null, R(b, D, Z, Re);
          case st:
            return D = D.get(Z.key === null ? L : Z.key) || null, U(b, D, Z, Re);
          case bt:
            var Fe = Z._init;
            return ce(D, b, L, Fe(Z._payload), Re);
        }
        if (Gn(Z) || _e(Z)) return D = D.get(L) || null, Q(b, D, Z, Re, null);
        Ei(b, Z);
      }
      return null;
    }
    function ge(D, b, L, Z) {
      for (var Re = null, Fe = null, Se = b, He = b = 0, In = null; Se !== null && He < L.length; He++) {
        Se.index > He ? (In = Se, Se = null) : In = Se.sibling;
        var Nt = Y(D, Se, L[He], Z);
        if (Nt === null) {
          Se === null && (Se = In);
          break;
        }
        n && Se && Nt.alternate === null && r(D, Se), b = d(Nt, b, He), Fe === null ? Re = Nt : Fe.sibling = Nt, Fe = Nt, Se = In;
      }
      if (He === L.length) return l(D, Se), un && ga(D, He), Re;
      if (Se === null) {
        for (; He < L.length; He++) Se = W(D, L[He], Z), Se !== null && (b = d(Se, b, He), Fe === null ? Re = Se : Fe.sibling = Se, Fe = Se);
        return un && ga(D, He), Re;
      }
      for (Se = o(D, Se); He < L.length; He++) In = ce(Se, D, He, L[He], Z), In !== null && (n && In.alternate !== null && Se.delete(In.key === null ? He : In.key), b = d(In, b, He), Fe === null ? Re = In : Fe.sibling = In, Fe = In);
      return n && Se.forEach(function(Ki) {
        return r(D, Ki);
      }), un && ga(D, He), Re;
    }
    function xe(D, b, L, Z) {
      var Re = _e(L);
      if (typeof Re != "function") throw Error(A(150));
      if (L = Re.call(L), L == null) throw Error(A(151));
      for (var Fe = Re = null, Se = b, He = b = 0, In = null, Nt = L.next(); Se !== null && !Nt.done; He++, Nt = L.next()) {
        Se.index > He ? (In = Se, Se = null) : In = Se.sibling;
        var Ki = Y(D, Se, Nt.value, Z);
        if (Ki === null) {
          Se === null && (Se = In);
          break;
        }
        n && Se && Ki.alternate === null && r(D, Se), b = d(Ki, b, He), Fe === null ? Re = Ki : Fe.sibling = Ki, Fe = Ki, Se = In;
      }
      if (Nt.done) return l(
        D,
        Se
      ), un && ga(D, He), Re;
      if (Se === null) {
        for (; !Nt.done; He++, Nt = L.next()) Nt = W(D, Nt.value, Z), Nt !== null && (b = d(Nt, b, He), Fe === null ? Re = Nt : Fe.sibling = Nt, Fe = Nt);
        return un && ga(D, He), Re;
      }
      for (Se = o(D, Se); !Nt.done; He++, Nt = L.next()) Nt = ce(Se, D, He, Nt.value, Z), Nt !== null && (n && Nt.alternate !== null && Se.delete(Nt.key === null ? He : Nt.key), b = d(Nt, b, He), Fe === null ? Re = Nt : Fe.sibling = Nt, Fe = Nt);
      return n && Se.forEach(function(xy) {
        return r(D, xy);
      }), un && ga(D, He), Re;
    }
    function Ln(D, b, L, Z) {
      if (typeof L == "object" && L !== null && L.type === Pe && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Ne:
            e: {
              for (var Re = L.key, Fe = b; Fe !== null; ) {
                if (Fe.key === Re) {
                  if (Re = L.type, Re === Pe) {
                    if (Fe.tag === 7) {
                      l(D, Fe.sibling), b = c(Fe, L.props.children), b.return = D, D = b;
                      break e;
                    }
                  } else if (Fe.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === bt && Dv(Re) === Fe.type) {
                    l(D, Fe.sibling), b = c(Fe, L.props), b.ref = au(D, Fe, L), b.return = D, D = b;
                    break e;
                  }
                  l(D, Fe);
                  break;
                } else r(D, Fe);
                Fe = Fe.sibling;
              }
              L.type === Pe ? (b = Su(L.props.children, D.mode, Z, L.key), b.return = D, D = b) : (Z = uf(L.type, L.key, L.props, null, D.mode, Z), Z.ref = au(D, b, L), Z.return = D, D = Z);
            }
            return m(D);
          case st:
            e: {
              for (Fe = L.key; b !== null; ) {
                if (b.key === Fe) if (b.tag === 4 && b.stateNode.containerInfo === L.containerInfo && b.stateNode.implementation === L.implementation) {
                  l(D, b.sibling), b = c(b, L.children || []), b.return = D, D = b;
                  break e;
                } else {
                  l(D, b);
                  break;
                }
                else r(D, b);
                b = b.sibling;
              }
              b = Os(L, D.mode, Z), b.return = D, D = b;
            }
            return m(D);
          case bt:
            return Fe = L._init, Ln(D, b, Fe(L._payload), Z);
        }
        if (Gn(L)) return ge(D, b, L, Z);
        if (_e(L)) return xe(D, b, L, Z);
        Ei(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, b !== null && b.tag === 6 ? (l(D, b.sibling), b = c(b, L), b.return = D, D = b) : (l(D, b), b = sf(L, D.mode, Z), b.return = D, D = b), m(D)) : l(D, b);
    }
    return Ln;
  }
  var Ju = xc(!0), Nv = xc(!1), Yi = Ze(null), Vn = null, re = null, Fa = null;
  function Ea() {
    Fa = re = Vn = null;
  }
  function xd(n) {
    var r = Yi.current;
    zt(Yi), n._currentValue = r;
  }
  function Cd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function eo(n, r) {
    Vn = n, Fa = re = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (aa = !0), n.firstContext = null);
  }
  function Ha(n) {
    var r = n._currentValue;
    if (Fa !== n) if (n = { context: n, memoizedValue: r, next: null }, re === null) {
      if (Vn === null) throw Error(A(308));
      re = n, Vn.dependencies = { lanes: 0, firstContext: n };
    } else re = re.next = n;
    return r;
  }
  var iu = null;
  function An(n) {
    iu === null ? iu = [n] : iu.push(n);
  }
  function Ov(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, An(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ii(n, o);
  }
  function Ii(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var _l = !1;
  function Cc(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function to(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function na(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function kl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, ht & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ii(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, An(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ii(n, l);
  }
  function Rc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, mi(n, l);
    }
  }
  function Lv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Tc(n, r, l, o) {
    var c = n.updateQueue;
    _l = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var R = E, U = R.next;
      R.next = null, m === null ? d = U : m.next = U, m = R;
      var Q = n.alternate;
      Q !== null && (Q = Q.updateQueue, E = Q.lastBaseUpdate, E !== m && (E === null ? Q.firstBaseUpdate = U : E.next = U, Q.lastBaseUpdate = R));
    }
    if (d !== null) {
      var W = c.baseState;
      m = 0, Q = U = R = null, E = d;
      do {
        var Y = E.lane, ce = E.eventTime;
        if ((o & Y) === Y) {
          Q !== null && (Q = Q.next = {
            eventTime: ce,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ge = n, xe = E;
            switch (Y = r, ce = l, xe.tag) {
              case 1:
                if (ge = xe.payload, typeof ge == "function") {
                  W = ge.call(ce, W, Y);
                  break e;
                }
                W = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = xe.payload, Y = typeof ge == "function" ? ge.call(ce, W, Y) : ge, Y == null) break e;
                W = ie({}, W, Y);
                break e;
              case 2:
                _l = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Y = c.effects, Y === null ? c.effects = [E] : Y.push(E));
        } else ce = { eventTime: ce, lane: Y, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Q === null ? (U = Q = ce, R = W) : Q = Q.next = ce, m |= Y;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          Y = E, E = Y.next, Y.next = null, c.lastBaseUpdate = Y, c.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (R = W), c.baseState = R, c.firstBaseUpdate = U, c.lastBaseUpdate = Q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      hu |= m, n.lanes = m, n.memoizedState = W;
    }
  }
  function Mv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var vs = {}, ui = Ze(vs), no = Ze(vs), hs = Ze(vs);
  function lu(n) {
    if (n === vs) throw Error(A(174));
    return n;
  }
  function Rd(n, r) {
    switch (Vt(hs, r), Vt(no, n), Vt(ui, vs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : hn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = hn(r, n);
    }
    zt(ui), Vt(ui, r);
  }
  function ro() {
    zt(ui), zt(no), zt(hs);
  }
  function zv(n) {
    lu(hs.current);
    var r = lu(ui.current), l = hn(r, n.type);
    r !== l && (Vt(no, n), Vt(ui, l));
  }
  function Td(n) {
    no.current === n && (zt(ui), zt(no));
  }
  var fn = Ze(0);
  function bc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var wc = [];
  function bd() {
    for (var n = 0; n < wc.length; n++) wc[n]._workInProgressVersionPrimary = null;
    wc.length = 0;
  }
  var _c = vt.ReactCurrentDispatcher, ms = vt.ReactCurrentBatchConfig, Ce = 0, be = null, Ie = null, ft = null, xa = !1, ao = !1, ys = 0, ay = 0;
  function xr() {
    throw Error(A(321));
  }
  function gs(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!La(n[l], r[l])) return !1;
    return !0;
  }
  function $(n, r, l, o, c, d) {
    if (Ce = d, be = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, _c.current = n === null || n.memoizedState === null ? iy : nn, n = l(o, c), ao) {
      d = 0;
      do {
        if (ao = !1, ys = 0, 25 <= d) throw Error(A(301));
        d += 1, ft = Ie = null, r.updateQueue = null, _c.current = Bc, n = l(o, c);
      } while (ao);
    }
    if (_c.current = Cr, r = Ie !== null && Ie.next !== null, Ce = 0, ft = Ie = be = null, xa = !1, r) throw Error(A(300));
    return n;
  }
  function Fn() {
    var n = ys !== 0;
    return ys = 0, n;
  }
  function De() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ft === null ? be.memoizedState = ft = n : ft = ft.next = n, ft;
  }
  function ir() {
    if (Ie === null) {
      var n = be.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Ie.next;
    var r = ft === null ? be.memoizedState : ft.next;
    if (r !== null) ft = r, Ie = n;
    else {
      if (n === null) throw Error(A(310));
      Ie = n, n = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, ft === null ? be.memoizedState = ft = n : ft = ft.next = n;
    }
    return ft;
  }
  function Ca(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Qi(n) {
    var r = ir(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = Ie, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, R = null, U = d;
      do {
        var Q = U.lane;
        if ((Ce & Q) === Q) R !== null && (R = R.next = { lane: 0, action: U.action, hasEagerState: U.hasEagerState, eagerState: U.eagerState, next: null }), o = U.hasEagerState ? U.eagerState : n(o, U.action);
        else {
          var W = {
            lane: Q,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null
          };
          R === null ? (E = R = W, m = o) : R = R.next = W, be.lanes |= Q, hu |= Q;
        }
        U = U.next;
      } while (U !== null && U !== d);
      R === null ? m = o : R.next = E, La(o, r.memoizedState) || (aa = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = R, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, be.lanes |= d, hu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Pa(n) {
    var r = ir(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      La(d, r.memoizedState) || (aa = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function io() {
  }
  function uu(n, r) {
    var l = be, o = ir(), c = r(), d = !La(o.memoizedState, c);
    if (d && (o.memoizedState = c, aa = !0), o = o.queue, Ss(Dc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || ft !== null && ft.memoizedState.tag & 1) {
      if (l.flags |= 2048, ou(9, kc.bind(null, l, o, c, r), void 0, null), bn === null) throw Error(A(349));
      Ce & 30 || lo(l, r, c);
    }
    return c;
  }
  function lo(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = be.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, be.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function kc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Nc(r) && Oc(n);
  }
  function Dc(n, r, l) {
    return l(function() {
      Nc(r) && Oc(n);
    });
  }
  function Nc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !La(n, l);
    } catch {
      return !0;
    }
  }
  function Oc(n) {
    var r = Ii(n, 1);
    r !== null && Sn(r, n, 1, -1);
  }
  function Lc(n) {
    var r = De();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ca, lastRenderedState: n }, r.queue = n, n = n.dispatch = Es.bind(null, be, n), [r.memoizedState, n];
  }
  function ou(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = be.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, be.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Mc() {
    return ir().memoizedState;
  }
  function uo(n, r, l, o) {
    var c = De();
    be.flags |= n, c.memoizedState = ou(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function oo(n, r, l, o) {
    var c = ir();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Ie !== null) {
      var m = Ie.memoizedState;
      if (d = m.destroy, o !== null && gs(o, m.deps)) {
        c.memoizedState = ou(r, l, d, o);
        return;
      }
    }
    be.flags |= n, c.memoizedState = ou(1 | r, l, d, o);
  }
  function zc(n, r) {
    return uo(8390656, 8, n, r);
  }
  function Ss(n, r) {
    return oo(2048, 8, n, r);
  }
  function Uc(n, r) {
    return oo(4, 2, n, r);
  }
  function jc(n, r) {
    return oo(4, 4, n, r);
  }
  function Ac(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Fc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, oo(4, 4, Ac.bind(null, r, n), l);
  }
  function so() {
  }
  function su(n, r) {
    var l = ir();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && gs(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Hc(n, r) {
    var l = ir();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && gs(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Pc(n, r, l) {
    return Ce & 21 ? (La(l, r) || (l = ju(), be.lanes |= l, hu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, aa = !0), n.memoizedState = l);
  }
  function wd(n, r) {
    var l = Dt;
    Dt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = ms.transition;
    ms.transition = {};
    try {
      n(!1), r();
    } finally {
      Dt = l, ms.transition = o;
    }
  }
  function Vc() {
    return ir().memoizedState;
  }
  function Uv(n, r, l) {
    var o = qi(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, _d(n)) co(r, l);
    else if (l = Ov(n, r, l, o), l !== null) {
      var c = tr();
      Sn(l, n, o, c), Dl(l, r, o);
    }
  }
  function Es(n, r, l) {
    var o = qi(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (_d(n)) co(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, La(E, m)) {
          var R = r.interleaved;
          R === null ? (c.next = c, An(r)) : (c.next = R.next, R.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Ov(n, r, c, o), l !== null && (c = tr(), Sn(l, n, o, c), Dl(l, r, o));
    }
  }
  function _d(n) {
    var r = n.alternate;
    return n === be || r !== null && r === be;
  }
  function co(n, r) {
    ao = xa = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Dl(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, mi(n, l);
    }
  }
  var Cr = { readContext: Ha, useCallback: xr, useContext: xr, useEffect: xr, useImperativeHandle: xr, useInsertionEffect: xr, useLayoutEffect: xr, useMemo: xr, useReducer: xr, useRef: xr, useState: xr, useDebugValue: xr, useDeferredValue: xr, useTransition: xr, useMutableSource: xr, useSyncExternalStore: xr, useId: xr, unstable_isNewReconciler: !1 }, iy = { readContext: Ha, useCallback: function(n, r) {
    return De().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Ha, useEffect: zc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, uo(
      4194308,
      4,
      Ac.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return uo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return uo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = De();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = De();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Uv.bind(null, be, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = De();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Lc, useDebugValue: so, useDeferredValue: function(n) {
    return De().memoizedState = n;
  }, useTransition: function() {
    var n = Lc(!1), r = n[0];
    return n = wd.bind(null, n[1]), De().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = be, c = De();
    if (un) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), bn === null) throw Error(A(349));
      Ce & 30 || lo(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, zc(Dc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, ou(9, kc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = De(), r = bn.identifierPrefix;
    if (un) {
      var l = $i, o = ar;
      l = (o & ~(1 << 32 - Dr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = ys++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ay++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, nn = {
    readContext: Ha,
    useCallback: su,
    useContext: Ha,
    useEffect: Ss,
    useImperativeHandle: Fc,
    useInsertionEffect: Uc,
    useLayoutEffect: jc,
    useMemo: Hc,
    useReducer: Qi,
    useRef: Mc,
    useState: function() {
      return Qi(Ca);
    },
    useDebugValue: so,
    useDeferredValue: function(n) {
      var r = ir();
      return Pc(r, Ie.memoizedState, n);
    },
    useTransition: function() {
      var n = Qi(Ca)[0], r = ir().memoizedState;
      return [n, r];
    },
    useMutableSource: io,
    useSyncExternalStore: uu,
    useId: Vc,
    unstable_isNewReconciler: !1
  }, Bc = { readContext: Ha, useCallback: su, useContext: Ha, useEffect: Ss, useImperativeHandle: Fc, useInsertionEffect: Uc, useLayoutEffect: jc, useMemo: Hc, useReducer: Pa, useRef: Mc, useState: function() {
    return Pa(Ca);
  }, useDebugValue: so, useDeferredValue: function(n) {
    var r = ir();
    return Ie === null ? r.memoizedState = n : Pc(r, Ie.memoizedState, n);
  }, useTransition: function() {
    var n = Pa(Ca)[0], r = ir().memoizedState;
    return [n, r];
  }, useMutableSource: io, useSyncExternalStore: uu, useId: Vc, unstable_isNewReconciler: !1 };
  function ra(n, r) {
    if (n && n.defaultProps) {
      r = ie({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function cu(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ie({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var fu = { isMounted: function(n) {
    return (n = n._reactInternals) ? Te(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = tr(), c = qi(n), d = na(o, c);
    d.payload = r, l != null && (d.callback = l), r = kl(n, d, c), r !== null && (Sn(r, n, c, o), Rc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = tr(), c = qi(n), d = na(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = kl(n, d, c), r !== null && (Sn(r, n, c, o), Rc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = tr(), o = qi(n), c = na(l, o);
    c.tag = 2, r != null && (c.callback = r), r = kl(n, c, o), r !== null && (Sn(r, n, o, l), Rc(r, n, o));
  } };
  function jv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !ns(l, o) || !ns(c, d) : !0;
  }
  function Av(n, r, l) {
    var o = !1, c = Si, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Ha(d) : (c = cn(r) ? Xr : Ye.current, o = r.contextTypes, d = (o = o != null) ? za(n, c) : Si), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = fu, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Fv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && fu.enqueueReplaceState(r, r.state, null);
  }
  function kd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, Cc(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Ha(d) : (d = cn(r) ? Xr : Ye.current, c.context = za(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (cu(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && fu.enqueueReplaceState(c, c.state, null), Tc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Nl(n, r) {
    try {
      var l = "", o = r;
      do
        l += nt(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Dd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function xs(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Hv = typeof WeakMap == "function" ? WeakMap : Map;
  function Pv(n, r, l) {
    l = na(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      ef || (ef = !0, Fd = o), xs(n, r);
    }, l;
  }
  function Vv(n, r, l) {
    l = na(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        xs(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      xs(n, r), typeof o != "function" && ($a === null ? $a = /* @__PURE__ */ new Set([this]) : $a.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Cs(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Hv();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = hy.bind(null, n, r, l), r.then(n, n));
  }
  function Bv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Nd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = na(-1, 1), r.tag = 2, kl(l, r, 1))), l.lanes |= 1), n);
  }
  var $v = vt.ReactCurrentOwner, aa = !1;
  function Nn(n, r, l, o) {
    r.child = n === null ? Nv(r, null, l, o) : Ju(r, n.child, l, o);
  }
  function fo(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return eo(r, c), o = $(n, r, l, o, d, c), l = Fn(), n !== null && !aa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, On(n, r, c)) : (un && l && mc(r), r.flags |= 1, Nn(n, r, o, c), r.child);
  }
  function Ol(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !$d(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, $c(n, r, d, o, c)) : (n = uf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ns, l(m, o) && n.ref === r.ref) return On(n, r, c);
    }
    return r.flags |= 1, n = zl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function $c(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (ns(d, o) && n.ref === r.ref) if (aa = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (aa = !0);
      else return r.lanes = n.lanes, On(n, r, c);
    }
    return Ke(n, r, l, o, c);
  }
  function ia(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Vt(Co, la), la |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Vt(Co, la), la |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Vt(Co, la), la |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Vt(Co, la), la |= o;
    return Nn(n, r, c, l), r.child;
  }
  function du(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Ke(n, r, l, o, c) {
    var d = cn(l) ? Xr : Ye.current;
    return d = za(r, d), eo(r, c), l = $(n, r, l, o, d, c), o = Fn(), n !== null && !aa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, On(n, r, c)) : (un && o && mc(r), r.flags |= 1, Nn(n, r, l, c), r.child);
  }
  function Rs(n, r, l, o, c) {
    if (cn(l)) {
      var d = !0;
      hc(r);
    } else d = !1;
    if (eo(r, c), r.stateNode === null) bs(n, r), Av(r, l, o), kd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var R = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = Ha(U) : (U = cn(l) ? Xr : Ye.current, U = za(r, U));
      var Q = l.getDerivedStateFromProps, W = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      W || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || R !== U) && Fv(r, m, o, U), _l = !1;
      var Y = r.memoizedState;
      m.state = Y, Tc(r, o, m, c), R = r.memoizedState, E !== o || Y !== R || Rn.current || _l ? (typeof Q == "function" && (cu(r, l, Q, o), R = r.memoizedState), (E = _l || jv(r, l, E, o, Y, R, U)) ? (W || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = R), m.props = o, m.state = R, m.context = U, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, to(n, r), E = r.memoizedProps, U = r.type === r.elementType ? E : ra(r.type, E), m.props = U, W = r.pendingProps, Y = m.context, R = l.contextType, typeof R == "object" && R !== null ? R = Ha(R) : (R = cn(l) ? Xr : Ye.current, R = za(r, R));
      var ce = l.getDerivedStateFromProps;
      (Q = typeof ce == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== W || Y !== R) && Fv(r, m, o, R), _l = !1, Y = r.memoizedState, m.state = Y, Tc(r, o, m, c);
      var ge = r.memoizedState;
      E !== W || Y !== ge || Rn.current || _l ? (typeof ce == "function" && (cu(r, l, ce, o), ge = r.memoizedState), (U = _l || jv(r, l, U, o, Y, ge, R) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ge, R), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ge, R)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ge), m.props = o, m.state = ge, m.context = R, o = U) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Yc(n, r, l, o, d, c);
  }
  function Yc(n, r, l, o, c, d) {
    du(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && bv(r, l, !1), On(n, r, d);
    o = r.stateNode, $v.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Ju(r, n.child, null, d), r.child = Ju(r, null, E, d)) : Nn(n, r, E, d), r.memoizedState = o.state, c && bv(r, l, !0), r.child;
  }
  function ly(n) {
    var r = n.stateNode;
    r.pendingContext ? bl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && bl(n, r.context, !1), Rd(n, r.containerInfo);
  }
  function Yv(n, r, l, o, c) {
    return gn(), Ed(c), r.flags |= 256, Nn(n, r, l, o), r.child;
  }
  var Ts = { dehydrated: null, treeContext: null, retryLane: 0 };
  function pu(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Iv(n, r, l) {
    var o = r.pendingProps, c = fn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Vt(fn, c & 1), n === null)
      return gc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = of(m, o, 0, null), n = Su(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = pu(l), r.memoizedState = Ts, n) : Ic(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return Od(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var R = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = R, r.deletions = null) : (o = zl(c, R), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = zl(E, d) : (d = Su(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? pu(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = Ts, o;
    }
    return d = n.child, n = d.sibling, o = zl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ic(n, r) {
    return r = of({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Qc(n, r, l, o) {
    return o !== null && Ed(o), Ju(r, n.child, null, l), n = Ic(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Od(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Dd(Error(A(422))), Qc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = of({ mode: "visible", children: o.children }, c, 0, null), d = Su(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Ju(r, n.child, null, m), r.child.memoizedState = pu(m), r.memoizedState = Ts, d);
    if (!(r.mode & 1)) return Qc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(A(419)), o = Dd(d, o, void 0), Qc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, aa || E) {
      if (o = bn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ii(n, c), Sn(o, n, c, -1));
      }
      return Ns(), o = Dd(Error(A(421))), Qc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Bd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ta = li(c.nextSibling), Sa = r, un = !0, Aa = null, n !== null && (ea[Er++] = ar, ea[Er++] = $i, ea[Er++] = ja, ar = n.id, $i = n.overflow, ja = r), r = Ic(r, o.children), r.flags |= 4096, r);
  }
  function Qv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Cd(n.return, r, l);
  }
  function Wc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Ld(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Nn(n, r, o.children, l), o = fn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Qv(n, l, r);
        else if (n.tag === 19) Qv(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (Vt(fn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && bc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Wc(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && bc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Wc(r, !0, l, null, d);
        break;
      case "together":
        Wc(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function bs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function On(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), hu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = zl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = zl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Wi(n, r, l) {
    switch (r.tag) {
      case 3:
        ly(r), gn();
        break;
      case 5:
        zv(r);
        break;
      case 1:
        cn(r.type) && hc(r);
        break;
      case 4:
        Rd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Vt(Yi, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Vt(fn, fn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Iv(n, r, l) : (Vt(fn, fn.current & 1), n = On(n, r, l), n !== null ? n.sibling : null);
        Vt(fn, fn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Ld(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Vt(fn, fn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ia(n, r, l);
    }
    return On(n, r, l);
  }
  var xi, po, vo, Va;
  xi = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, po = function() {
  }, vo = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, lu(ui.current);
      var d = null;
      switch (l) {
        case "input":
          c = Wn(n, c), o = Wn(n, o), d = [];
          break;
        case "select":
          c = ie({}, c, { value: void 0 }), o = ie({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Ir(n, c), o = Ir(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = vc);
      }
      Dn(l, o);
      var m;
      l = null;
      for (U in c) if (!o.hasOwnProperty(U) && c.hasOwnProperty(U) && c[U] != null) if (U === "style") {
        var E = c[U];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (Qt.hasOwnProperty(U) ? d || (d = []) : (d = d || []).push(U, null));
      for (U in o) {
        var R = o[U];
        if (E = c != null ? c[U] : void 0, o.hasOwnProperty(U) && R !== E && (R != null || E != null)) if (U === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || R && R.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in R) R.hasOwnProperty(m) && E[m] !== R[m] && (l || (l = {}), l[m] = R[m]);
        } else l || (d || (d = []), d.push(
          U,
          l
        )), l = R;
        else U === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, E = E ? E.__html : void 0, R != null && E !== R && (d = d || []).push(U, R)) : U === "children" ? typeof R != "string" && typeof R != "number" || (d = d || []).push(U, "" + R) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (Qt.hasOwnProperty(U) ? (R != null && U === "onScroll" && Jt("scroll", n), d || E === R || (d = [])) : (d = d || []).push(U, R));
      }
      l && (d = d || []).push("style", l);
      var U = d;
      (r.updateQueue = U) && (r.flags |= 4);
    }
  }, Va = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Tn(n, r) {
    if (!un) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function Rr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function uy(n, r, l) {
    var o = r.pendingProps;
    switch (gd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Rr(r), null;
      case 1:
        return cn(r.type) && Ua(), Rr(r), null;
      case 3:
        return o = r.stateNode, ro(), zt(Rn), zt(Ye), bd(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Sc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Aa !== null && (Hd(Aa), Aa = null))), po(n, r), Rr(r), null;
      case 5:
        Td(r);
        var c = lu(hs.current);
        if (l = r.type, n !== null && r.stateNode != null) vo(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return Rr(r), null;
          }
          if (n = lu(ui.current), Sc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[gi] = r, o[nu] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Jt("cancel", o), Jt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Jt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ls.length; c++) Jt(ls[c], o);
                break;
              case "source":
                Jt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Jt(
                  "error",
                  o
                ), Jt("load", o);
                break;
              case "details":
                Jt("toggle", o);
                break;
              case "input":
                Pn(o, d), Jt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Jt("invalid", o);
                break;
              case "textarea":
                yr(o, d), Jt("invalid", o);
            }
            Dn(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && pc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && pc(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : Qt.hasOwnProperty(m) && E != null && m === "onScroll" && Jt("scroll", o);
            }
            switch (l) {
              case "input":
                hr(o), $r(o, d, !0);
                break;
              case "textarea":
                hr(o), rr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = vc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Qr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[gi] = r, n[nu] = o, xi(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = mn(l, o), l) {
                case "dialog":
                  Jt("cancel", n), Jt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Jt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ls.length; c++) Jt(ls[c], n);
                  c = o;
                  break;
                case "source":
                  Jt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Jt(
                    "error",
                    n
                  ), Jt("load", n), c = o;
                  break;
                case "details":
                  Jt("toggle", n), c = o;
                  break;
                case "input":
                  Pn(n, o), c = Wn(n, o), Jt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ie({}, o, { value: void 0 }), Jt("invalid", n);
                  break;
                case "textarea":
                  yr(n, o), c = Ir(n, o), Jt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Dn(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var R = E[d];
                d === "style" ? Mt(n, R) : d === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, R != null && fi(n, R)) : d === "children" ? typeof R == "string" ? (l !== "textarea" || R !== "") && pa(n, R) : typeof R == "number" && pa(n, "" + R) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Qt.hasOwnProperty(d) ? R != null && d === "onScroll" && Jt("scroll", n) : R != null && Ge(n, d, R, m));
              }
              switch (l) {
                case "input":
                  hr(n), $r(n, o, !1);
                  break;
                case "textarea":
                  hr(n), rr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ut(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? mr(n, !!o.multiple, d, !1) : o.defaultValue != null && mr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = vc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Rr(r), null;
      case 6:
        if (n && r.stateNode != null) Va(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = lu(hs.current), lu(ui.current), Sc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[gi] = r, (d = o.nodeValue !== l) && (n = Sa, n !== null)) switch (n.tag) {
              case 3:
                pc(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && pc(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[gi] = r, r.stateNode = o;
        }
        return Rr(r), null;
      case 13:
        if (zt(fn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (un && ta !== null && r.mode & 1 && !(r.flags & 128)) kv(), gn(), r.flags |= 98560, d = !1;
          else if (d = Sc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[gi] = r;
            } else gn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Rr(r), d = !1;
          } else Aa !== null && (Hd(Aa), Aa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || fn.current & 1 ? $n === 0 && ($n = 3) : Ns())), r.updateQueue !== null && (r.flags |= 4), Rr(r), null);
      case 4:
        return ro(), po(n, r), n === null && Ku(r.stateNode.containerInfo), Rr(r), null;
      case 10:
        return xd(r.type._context), Rr(r), null;
      case 17:
        return cn(r.type) && Ua(), Rr(r), null;
      case 19:
        if (zt(fn), d = r.memoizedState, d === null) return Rr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) Tn(d, !1);
        else {
          if ($n !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = bc(n), m !== null) {
              for (r.flags |= 128, Tn(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Vt(fn, fn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && kt() > To && (r.flags |= 128, o = !0, Tn(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = bc(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Tn(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !un) return Rr(r), null;
          } else 2 * kt() - d.renderingStartTime > To && l !== 1073741824 && (r.flags |= 128, o = !0, Tn(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = kt(), r.sibling = null, l = fn.current, Vt(fn, o ? l & 1 | 2 : l & 1), r) : (Rr(r), null);
      case 22:
      case 23:
        return af(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? la & 1073741824 && (Rr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Rr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function oy(n, r) {
    switch (gd(r), r.tag) {
      case 1:
        return cn(r.type) && Ua(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return ro(), zt(Rn), zt(Ye), bd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Td(r), null;
      case 13:
        if (zt(fn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          gn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return zt(fn), null;
      case 4:
        return ro(), null;
      case 10:
        return xd(r.type._context), null;
      case 22:
      case 23:
        return af(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ho = !1, lr = !1, Gc = typeof WeakSet == "function" ? WeakSet : Set, he = null;
  function mo(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      wn(n, r, o);
    }
    else l.current = null;
  }
  function Md(n, r, l) {
    try {
      l();
    } catch (o) {
      wn(n, r, o);
    }
  }
  var qc = !1;
  function sy(n, r) {
    if (cd = Oa, n = oc(), Hi(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, R = -1, U = 0, Q = 0, W = n, Y = null;
          t: for (; ; ) {
            for (var ce; W !== l || c !== 0 && W.nodeType !== 3 || (E = m + c), W !== d || o !== 0 && W.nodeType !== 3 || (R = m + o), W.nodeType === 3 && (m += W.nodeValue.length), (ce = W.firstChild) !== null; )
              Y = W, W = ce;
            for (; ; ) {
              if (W === n) break t;
              if (Y === l && ++U === c && (E = m), Y === d && ++Q === o && (R = m), (ce = W.nextSibling) !== null) break;
              W = Y, Y = W.parentNode;
            }
            W = ce;
          }
          l = E === -1 || R === -1 ? null : { start: E, end: R };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (eu = { focusedElem: n, selectionRange: l }, Oa = !1, he = r; he !== null; ) if (r = he, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, he = n;
    else for (; he !== null; ) {
      r = he;
      try {
        var ge = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (ge !== null) {
              var xe = ge.memoizedProps, Ln = ge.memoizedState, D = r.stateNode, b = D.getSnapshotBeforeUpdate(r.elementType === r.type ? xe : ra(r.type, xe), Ln);
              D.__reactInternalSnapshotBeforeUpdate = b;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(A(163));
        }
      } catch (Z) {
        wn(r, r.return, Z);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, he = n;
        break;
      }
      he = r.return;
    }
    return ge = qc, qc = !1, ge;
  }
  function yo(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Md(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Kc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Xc(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Wv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Wv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[gi], delete r[nu], delete r[pd], delete r[ry], delete r[vd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function zd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Gv(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || zd(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function ws(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = vc));
    else if (o !== 4 && (n = n.child, n !== null)) for (ws(n, r, l), n = n.sibling; n !== null; ) ws(n, r, l), n = n.sibling;
  }
  function go(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (go(n, r, l), n = n.sibling; n !== null; ) go(n, r, l), n = n.sibling;
  }
  var dn = null, Jn = !1;
  function Lr(n, r, l) {
    for (l = l.child; l !== null; ) So(n, r, l), l = l.sibling;
  }
  function So(n, r, l) {
    if (Wr && typeof Wr.onCommitFiberUnmount == "function") try {
      Wr.onCommitFiberUnmount(fl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        lr || mo(l, r);
      case 6:
        var o = dn, c = Jn;
        dn = null, Lr(n, r, l), dn = o, Jn = c, dn !== null && (Jn ? (n = dn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : dn.removeChild(l.stateNode));
        break;
      case 18:
        dn !== null && (Jn ? (n = dn, l = l.stateNode, n.nodeType === 8 ? Cl(n.parentNode, l) : n.nodeType === 1 && Cl(n, l), gl(n)) : Cl(dn, l.stateNode));
        break;
      case 4:
        o = dn, c = Jn, dn = l.stateNode.containerInfo, Jn = !0, Lr(n, r, l), dn = o, Jn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!lr && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Md(l, r, m), c = c.next;
          } while (c !== o);
        }
        Lr(n, r, l);
        break;
      case 1:
        if (!lr && (mo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          wn(l, r, E);
        }
        Lr(n, r, l);
        break;
      case 21:
        Lr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (lr = (o = lr) || l.memoizedState !== null, Lr(n, r, l), lr = o) : Lr(n, r, l);
        break;
      default:
        Lr(n, r, l);
    }
  }
  function Eo(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Gc()), r.forEach(function(o) {
        var c = my.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function er(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              dn = E.stateNode, Jn = !1;
              break e;
            case 3:
              dn = E.stateNode.containerInfo, Jn = !0;
              break e;
            case 4:
              dn = E.stateNode.containerInfo, Jn = !0;
              break e;
          }
          E = E.return;
        }
        if (dn === null) throw Error(A(160));
        So(d, m, c), dn = null, Jn = !1;
        var R = c.alternate;
        R !== null && (R.return = null), c.return = null;
      } catch (U) {
        wn(c, r, U);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) qv(r, n), r = r.sibling;
  }
  function qv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (er(r, n), Ci(n), o & 4) {
          try {
            yo(3, n, n.return), Kc(3, n);
          } catch (xe) {
            wn(n, n.return, xe);
          }
          try {
            yo(5, n, n.return);
          } catch (xe) {
            wn(n, n.return, xe);
          }
        }
        break;
      case 1:
        er(r, n), Ci(n), o & 512 && l !== null && mo(l, l.return);
        break;
      case 5:
        if (er(r, n), Ci(n), o & 512 && l !== null && mo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            pa(c, "");
          } catch (xe) {
            wn(n, n.return, xe);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, R = n.updateQueue;
          if (n.updateQueue = null, R !== null) try {
            E === "input" && d.type === "radio" && d.name != null && zn(c, d), mn(E, m);
            var U = mn(E, d);
            for (m = 0; m < R.length; m += 2) {
              var Q = R[m], W = R[m + 1];
              Q === "style" ? Mt(c, W) : Q === "dangerouslySetInnerHTML" ? fi(c, W) : Q === "children" ? pa(c, W) : Ge(c, Q, W, U);
            }
            switch (E) {
              case "input":
                kn(c, d);
                break;
              case "textarea":
                da(c, d);
                break;
              case "select":
                var Y = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var ce = d.value;
                ce != null ? mr(c, !!d.multiple, ce, !1) : Y !== !!d.multiple && (d.defaultValue != null ? mr(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : mr(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[nu] = d;
          } catch (xe) {
            wn(n, n.return, xe);
          }
        }
        break;
      case 6:
        if (er(r, n), Ci(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (xe) {
            wn(n, n.return, xe);
          }
        }
        break;
      case 3:
        if (er(r, n), Ci(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          gl(r.containerInfo);
        } catch (xe) {
          wn(n, n.return, xe);
        }
        break;
      case 4:
        er(r, n), Ci(n);
        break;
      case 13:
        er(r, n), Ci(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Jc = kt())), o & 4 && Eo(n);
        break;
      case 22:
        if (Q = l !== null && l.memoizedState !== null, n.mode & 1 ? (lr = (U = lr) || Q, er(r, n), lr = U) : er(r, n), Ci(n), o & 8192) {
          if (U = n.memoizedState !== null, (n.stateNode.isHidden = U) && !Q && n.mode & 1) for (he = n, Q = n.child; Q !== null; ) {
            for (W = he = Q; he !== null; ) {
              switch (Y = he, ce = Y.child, Y.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  yo(4, Y, Y.return);
                  break;
                case 1:
                  mo(Y, Y.return);
                  var ge = Y.stateNode;
                  if (typeof ge.componentWillUnmount == "function") {
                    o = Y, l = Y.return;
                    try {
                      r = o, ge.props = r.memoizedProps, ge.state = r.memoizedState, ge.componentWillUnmount();
                    } catch (xe) {
                      wn(o, l, xe);
                    }
                  }
                  break;
                case 5:
                  mo(Y, Y.return);
                  break;
                case 22:
                  if (Y.memoizedState !== null) {
                    Kv(W);
                    continue;
                  }
              }
              ce !== null ? (ce.return = Y, he = ce) : Kv(W);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, W = n; ; ) {
            if (W.tag === 5) {
              if (Q === null) {
                Q = W;
                try {
                  c = W.stateNode, U ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = W.stateNode, R = W.memoizedProps.style, m = R != null && R.hasOwnProperty("display") ? R.display : null, E.style.display = rt("display", m));
                } catch (xe) {
                  wn(n, n.return, xe);
                }
              }
            } else if (W.tag === 6) {
              if (Q === null) try {
                W.stateNode.nodeValue = U ? "" : W.memoizedProps;
              } catch (xe) {
                wn(n, n.return, xe);
              }
            } else if ((W.tag !== 22 && W.tag !== 23 || W.memoizedState === null || W === n) && W.child !== null) {
              W.child.return = W, W = W.child;
              continue;
            }
            if (W === n) break e;
            for (; W.sibling === null; ) {
              if (W.return === null || W.return === n) break e;
              Q === W && (Q = null), W = W.return;
            }
            Q === W && (Q = null), W.sibling.return = W.return, W = W.sibling;
          }
        }
        break;
      case 19:
        er(r, n), Ci(n), o & 4 && Eo(n);
        break;
      case 21:
        break;
      default:
        er(
          r,
          n
        ), Ci(n);
    }
  }
  function Ci(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (zd(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (pa(c, ""), o.flags &= -33);
            var d = Gv(n);
            go(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Gv(n);
            ws(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (R) {
        wn(n, n.return, R);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function cy(n, r, l) {
    he = n, Ud(n);
  }
  function Ud(n, r, l) {
    for (var o = (n.mode & 1) !== 0; he !== null; ) {
      var c = he, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || ho;
        if (!m) {
          var E = c.alternate, R = E !== null && E.memoizedState !== null || lr;
          E = ho;
          var U = lr;
          if (ho = m, (lr = R) && !U) for (he = c; he !== null; ) m = he, R = m.child, m.tag === 22 && m.memoizedState !== null ? jd(c) : R !== null ? (R.return = m, he = R) : jd(c);
          for (; d !== null; ) he = d, Ud(d), d = d.sibling;
          he = c, ho = E, lr = U;
        }
        xo(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, he = d) : xo(n);
    }
  }
  function xo(n) {
    for (; he !== null; ) {
      var r = he;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              lr || Kc(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !lr) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ra(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Mv(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Mv(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var R = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    R.autoFocus && l.focus();
                    break;
                  case "img":
                    R.src && (l.src = R.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var U = r.alternate;
                if (U !== null) {
                  var Q = U.memoizedState;
                  if (Q !== null) {
                    var W = Q.dehydrated;
                    W !== null && gl(W);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
          lr || r.flags & 512 && Xc(r);
        } catch (Y) {
          wn(r, r.return, Y);
        }
      }
      if (r === n) {
        he = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, he = l;
        break;
      }
      he = r.return;
    }
  }
  function Kv(n) {
    for (; he !== null; ) {
      var r = he;
      if (r === n) {
        he = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, he = l;
        break;
      }
      he = r.return;
    }
  }
  function jd(n) {
    for (; he !== null; ) {
      var r = he;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Kc(4, r);
            } catch (R) {
              wn(r, l, R);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (R) {
                wn(r, c, R);
              }
            }
            var d = r.return;
            try {
              Xc(r);
            } catch (R) {
              wn(r, d, R);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Xc(r);
            } catch (R) {
              wn(r, m, R);
            }
        }
      } catch (R) {
        wn(r, r.return, R);
      }
      if (r === n) {
        he = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, he = E;
        break;
      }
      he = r.return;
    }
  }
  var fy = Math.ceil, vu = vt.ReactCurrentDispatcher, Zc = vt.ReactCurrentOwner, Ba = vt.ReactCurrentBatchConfig, ht = 0, bn = null, on = null, Bn = 0, la = 0, Co = Ze(0), $n = 0, _s = null, hu = 0, Ro = 0, Ad = 0, Ll = null, Tr = null, Jc = 0, To = 1 / 0, Gi = null, ef = !1, Fd = null, $a = null, bo = !1, Ya = null, tf = 0, ks = 0, nf = null, Ds = -1, mu = 0;
  function tr() {
    return ht & 6 ? kt() : Ds !== -1 ? Ds : Ds = kt();
  }
  function qi(n) {
    return n.mode & 1 ? ht & 2 && Bn !== 0 ? Bn & -Bn : Ec.transition !== null ? (mu === 0 && (mu = ju()), mu) : (n = Dt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Xo(n.type)), n) : 1;
  }
  function Sn(n, r, l, o) {
    if (50 < ks) throw ks = 0, nf = null, Error(A(185));
    Mi(n, l, o), (!(ht & 2) || n !== bn) && (n === bn && (!(ht & 2) && (Ro |= l), $n === 4 && Ri(n, Bn)), Yn(n, o), l === 1 && ht === 0 && !(r.mode & 1) && (To = kt() + 500, Zn && Zr()));
  }
  function Yn(n, r) {
    var l = n.callbackNode;
    vl(n, r);
    var o = Nr(n, n === bn ? Bn : 0);
    if (o === 0) l !== null && an(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && an(l), r === 1) n.tag === 0 ? md(wo.bind(null, n)) : hd(wo.bind(null, n)), dd(function() {
        !(ht & 6) && Zr();
      }), l = null;
      else {
        switch (Fu(o)) {
          case 1:
            l = kr;
            break;
          case 4:
            l = it;
            break;
          case 16:
            l = Da;
            break;
          case 536870912:
            l = zu;
            break;
          default:
            l = Da;
        }
        l = ah(l, rf.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function rf(n, r) {
    if (Ds = -1, mu = 0, ht & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (_o() && n.callbackNode !== l) return null;
    var o = Nr(n, n === bn ? Bn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = lf(n, o);
    else {
      r = o;
      var c = ht;
      ht |= 2;
      var d = Zv();
      (bn !== n || Bn !== r) && (Gi = null, To = kt() + 500, gu(n, r));
      do
        try {
          py();
          break;
        } catch (E) {
          Xv(n, E);
        }
      while (!0);
      Ea(), vu.current = d, ht = c, on !== null ? r = 0 : (bn = null, Bn = 0, r = $n);
    }
    if (r !== 0) {
      if (r === 2 && (c = hl(n), c !== 0 && (o = c, r = yu(n, c))), r === 1) throw l = _s, gu(n, 0), Ri(n, o), Yn(n, kt()), l;
      if (r === 6) Ri(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Pd(c) && (r = lf(n, o), r === 2 && (d = hl(n), d !== 0 && (o = d, r = yu(n, d))), r === 1)) throw l = _s, gu(n, 0), Ri(n, o), Yn(n, kt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Ml(n, Tr, Gi);
            break;
          case 3:
            if (Ri(n, o), (o & 130023424) === o && (r = Jc + 500 - kt(), 10 < r)) {
              if (Nr(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                tr(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = tu(Ml.bind(null, n, Tr, Gi), r);
              break;
            }
            Ml(n, Tr, Gi);
            break;
          case 4:
            if (Ri(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Dr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = kt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * fy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = tu(Ml.bind(null, n, Tr, Gi), o);
              break;
            }
            Ml(n, Tr, Gi);
            break;
          case 5:
            Ml(n, Tr, Gi);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return Yn(n, kt()), n.callbackNode === l ? rf.bind(null, n) : null;
  }
  function yu(n, r) {
    var l = Ll;
    return n.current.memoizedState.isDehydrated && (gu(n, r).flags |= 256), n = lf(n, r), n !== 2 && (r = Tr, Tr = l, r !== null && Hd(r)), n;
  }
  function Hd(n) {
    Tr === null ? Tr = n : Tr.push.apply(Tr, n);
  }
  function Pd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!La(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ri(n, r) {
    for (r &= ~Ad, r &= ~Ro, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Dr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function wo(n) {
    if (ht & 6) throw Error(A(327));
    _o();
    var r = Nr(n, 0);
    if (!(r & 1)) return Yn(n, kt()), null;
    var l = lf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = hl(n);
      o !== 0 && (r = o, l = yu(n, o));
    }
    if (l === 1) throw l = _s, gu(n, 0), Ri(n, r), Yn(n, kt()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ml(n, Tr, Gi), Yn(n, kt()), null;
  }
  function Vd(n, r) {
    var l = ht;
    ht |= 1;
    try {
      return n(r);
    } finally {
      ht = l, ht === 0 && (To = kt() + 500, Zn && Zr());
    }
  }
  function Ti(n) {
    Ya !== null && Ya.tag === 0 && !(ht & 6) && _o();
    var r = ht;
    ht |= 1;
    var l = Ba.transition, o = Dt;
    try {
      if (Ba.transition = null, Dt = 1, n) return n();
    } finally {
      Dt = o, Ba.transition = l, ht = r, !(ht & 6) && Zr();
    }
  }
  function af() {
    la = Co.current, zt(Co);
  }
  function gu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Tv(l)), on !== null) for (l = on.return; l !== null; ) {
      var o = l;
      switch (gd(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Ua();
          break;
        case 3:
          ro(), zt(Rn), zt(Ye), bd();
          break;
        case 5:
          Td(o);
          break;
        case 4:
          ro();
          break;
        case 13:
          zt(fn);
          break;
        case 19:
          zt(fn);
          break;
        case 10:
          xd(o.type._context);
          break;
        case 22:
        case 23:
          af();
      }
      l = l.return;
    }
    if (bn = n, on = n = zl(n.current, null), Bn = la = r, $n = 0, _s = null, Ad = Ro = hu = 0, Tr = Ll = null, iu !== null) {
      for (r = 0; r < iu.length; r++) if (l = iu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      iu = null;
    }
    return n;
  }
  function Xv(n, r) {
    do {
      var l = on;
      try {
        if (Ea(), _c.current = Cr, xa) {
          for (var o = be.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          xa = !1;
        }
        if (Ce = 0, ft = Ie = be = null, ao = !1, ys = 0, Zc.current = null, l === null || l.return === null) {
          $n = 1, _s = r, on = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, R = r;
          if (r = Bn, E.flags |= 32768, R !== null && typeof R == "object" && typeof R.then == "function") {
            var U = R, Q = E, W = Q.tag;
            if (!(Q.mode & 1) && (W === 0 || W === 11 || W === 15)) {
              var Y = Q.alternate;
              Y ? (Q.updateQueue = Y.updateQueue, Q.memoizedState = Y.memoizedState, Q.lanes = Y.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var ce = Bv(m);
            if (ce !== null) {
              ce.flags &= -257, Nd(ce, m, E, d, r), ce.mode & 1 && Cs(d, U, r), r = ce, R = U;
              var ge = r.updateQueue;
              if (ge === null) {
                var xe = /* @__PURE__ */ new Set();
                xe.add(R), r.updateQueue = xe;
              } else ge.add(R);
              break e;
            } else {
              if (!(r & 1)) {
                Cs(d, U, r), Ns();
                break e;
              }
              R = Error(A(426));
            }
          } else if (un && E.mode & 1) {
            var Ln = Bv(m);
            if (Ln !== null) {
              !(Ln.flags & 65536) && (Ln.flags |= 256), Nd(Ln, m, E, d, r), Ed(Nl(R, E));
              break e;
            }
          }
          d = R = Nl(R, E), $n !== 4 && ($n = 2), Ll === null ? Ll = [d] : Ll.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Pv(d, R, r);
                Lv(d, D);
                break e;
              case 1:
                E = R;
                var b = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof b.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && ($a === null || !$a.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var Z = Vv(d, E, r);
                  Lv(d, Z);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        eh(l);
      } catch (Re) {
        r = Re, on === l && l !== null && (on = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Zv() {
    var n = vu.current;
    return vu.current = Cr, n === null ? Cr : n;
  }
  function Ns() {
    ($n === 0 || $n === 3 || $n === 2) && ($n = 4), bn === null || !(hu & 268435455) && !(Ro & 268435455) || Ri(bn, Bn);
  }
  function lf(n, r) {
    var l = ht;
    ht |= 2;
    var o = Zv();
    (bn !== n || Bn !== r) && (Gi = null, gu(n, r));
    do
      try {
        dy();
        break;
      } catch (c) {
        Xv(n, c);
      }
    while (!0);
    if (Ea(), ht = l, vu.current = o, on !== null) throw Error(A(261));
    return bn = null, Bn = 0, $n;
  }
  function dy() {
    for (; on !== null; ) Jv(on);
  }
  function py() {
    for (; on !== null && !Sr(); ) Jv(on);
  }
  function Jv(n) {
    var r = rh(n.alternate, n, la);
    n.memoizedProps = n.pendingProps, r === null ? eh(n) : on = r, Zc.current = null;
  }
  function eh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = oy(l, r), l !== null) {
          l.flags &= 32767, on = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          $n = 6, on = null;
          return;
        }
      } else if (l = uy(l, r, la), l !== null) {
        on = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        on = r;
        return;
      }
      on = r = n;
    } while (r !== null);
    $n === 0 && ($n = 5);
  }
  function Ml(n, r, l) {
    var o = Dt, c = Ba.transition;
    try {
      Ba.transition = null, Dt = 1, vy(n, r, l, o);
    } finally {
      Ba.transition = c, Dt = o;
    }
    return null;
  }
  function vy(n, r, l, o) {
    do
      _o();
    while (Ya !== null);
    if (ht & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (If(n, d), n === bn && (on = bn = null, Bn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || bo || (bo = !0, ah(Da, function() {
      return _o(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Ba.transition, Ba.transition = null;
      var m = Dt;
      Dt = 1;
      var E = ht;
      ht |= 4, Zc.current = null, sy(n, l), qv(l, n), sc(eu), Oa = !!cd, eu = cd = null, n.current = l, cy(l), hi(), ht = E, Dt = m, Ba.transition = d;
    } else n.current = l;
    if (bo && (bo = !1, Ya = n, tf = c), d = n.pendingLanes, d === 0 && ($a = null), Go(l.stateNode), Yn(n, kt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (ef) throw ef = !1, n = Fd, Fd = null, n;
    return tf & 1 && n.tag !== 0 && _o(), d = n.pendingLanes, d & 1 ? n === nf ? ks++ : (ks = 0, nf = n) : ks = 0, Zr(), null;
  }
  function _o() {
    if (Ya !== null) {
      var n = Fu(tf), r = Ba.transition, l = Dt;
      try {
        if (Ba.transition = null, Dt = 16 > n ? 16 : n, Ya === null) var o = !1;
        else {
          if (n = Ya, Ya = null, tf = 0, ht & 6) throw Error(A(331));
          var c = ht;
          for (ht |= 4, he = n.current; he !== null; ) {
            var d = he, m = d.child;
            if (he.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var R = 0; R < E.length; R++) {
                  var U = E[R];
                  for (he = U; he !== null; ) {
                    var Q = he;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yo(8, Q, d);
                    }
                    var W = Q.child;
                    if (W !== null) W.return = Q, he = W;
                    else for (; he !== null; ) {
                      Q = he;
                      var Y = Q.sibling, ce = Q.return;
                      if (Wv(Q), Q === U) {
                        he = null;
                        break;
                      }
                      if (Y !== null) {
                        Y.return = ce, he = Y;
                        break;
                      }
                      he = ce;
                    }
                  }
                }
                var ge = d.alternate;
                if (ge !== null) {
                  var xe = ge.child;
                  if (xe !== null) {
                    ge.child = null;
                    do {
                      var Ln = xe.sibling;
                      xe.sibling = null, xe = Ln;
                    } while (xe !== null);
                  }
                }
                he = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, he = m;
            else e: for (; he !== null; ) {
              if (d = he, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  yo(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, he = D;
                break e;
              }
              he = d.return;
            }
          }
          var b = n.current;
          for (he = b; he !== null; ) {
            m = he;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, he = L;
            else e: for (m = b; he !== null; ) {
              if (E = he, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Kc(9, E);
                }
              } catch (Re) {
                wn(E, E.return, Re);
              }
              if (E === m) {
                he = null;
                break e;
              }
              var Z = E.sibling;
              if (Z !== null) {
                Z.return = E.return, he = Z;
                break e;
              }
              he = E.return;
            }
          }
          if (ht = c, Zr(), Wr && typeof Wr.onPostCommitFiberRoot == "function") try {
            Wr.onPostCommitFiberRoot(fl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        Dt = l, Ba.transition = r;
      }
    }
    return !1;
  }
  function th(n, r, l) {
    r = Nl(l, r), r = Pv(n, r, 1), n = kl(n, r, 1), r = tr(), n !== null && (Mi(n, 1, r), Yn(n, r));
  }
  function wn(n, r, l) {
    if (n.tag === 3) th(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        th(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && ($a === null || !$a.has(o))) {
          n = Nl(l, n), n = Vv(r, n, 1), r = kl(r, n, 1), n = tr(), r !== null && (Mi(r, 1, n), Yn(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function hy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = tr(), n.pingedLanes |= n.suspendedLanes & l, bn === n && (Bn & l) === l && ($n === 4 || $n === 3 && (Bn & 130023424) === Bn && 500 > kt() - Jc ? gu(n, 0) : Ad |= l), Yn(n, r);
  }
  function nh(n, r) {
    r === 0 && (n.mode & 1 ? (r = dl, dl <<= 1, !(dl & 130023424) && (dl = 4194304)) : r = 1);
    var l = tr();
    n = Ii(n, r), n !== null && (Mi(n, r, l), Yn(n, l));
  }
  function Bd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), nh(n, l);
  }
  function my(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    o !== null && o.delete(r), nh(n, l);
  }
  var rh;
  rh = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Rn.current) aa = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return aa = !1, Wi(n, r, l);
      aa = !!(n.flags & 131072);
    }
    else aa = !1, un && r.flags & 1048576 && yd(r, Zu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        bs(n, r), n = r.pendingProps;
        var c = za(r, Ye.current);
        eo(r, l), c = $(null, r, o, n, c, l);
        var d = Fn();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, cn(o) ? (d = !0, hc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Cc(r), c.updater = fu, r.stateNode = c, c._reactInternals = r, kd(r, o, n, l), r = Yc(null, r, o, !0, d, l)) : (r.tag = 0, un && d && mc(r), Nn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (bs(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = yy(o), n = ra(o, n), c) {
            case 0:
              r = Ke(null, r, o, n, l);
              break e;
            case 1:
              r = Rs(null, r, o, n, l);
              break e;
            case 11:
              r = fo(null, r, o, n, l);
              break e;
            case 14:
              r = Ol(null, r, o, ra(o.type, n), l);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), Ke(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), Rs(n, r, o, c, l);
      case 3:
        e: {
          if (ly(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, to(n, r), Tc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Nl(Error(A(423)), r), r = Yv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = Nl(Error(A(424)), r), r = Yv(n, r, o, l, c);
            break e;
          } else for (ta = li(r.stateNode.containerInfo.firstChild), Sa = r, un = !0, Aa = null, l = Nv(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (gn(), o === c) {
              r = On(n, r, l);
              break e;
            }
            Nn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return zv(r), n === null && gc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, ss(o, c) ? m = null : d !== null && ss(o, d) && (r.flags |= 32), du(n, r), Nn(n, r, m, l), r.child;
      case 6:
        return n === null && gc(r), null;
      case 13:
        return Iv(n, r, l);
      case 4:
        return Rd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Ju(r, null, o, l) : Nn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), fo(n, r, o, c, l);
      case 7:
        return Nn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Nn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Nn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Vt(Yi, o._currentValue), o._currentValue = m, d !== null) if (La(d.value, m)) {
            if (d.children === c.children && !Rn.current) {
              r = On(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var R = E.firstContext; R !== null; ) {
                if (R.context === o) {
                  if (d.tag === 1) {
                    R = na(-1, l & -l), R.tag = 2;
                    var U = d.updateQueue;
                    if (U !== null) {
                      U = U.shared;
                      var Q = U.pending;
                      Q === null ? R.next = R : (R.next = Q.next, Q.next = R), U.pending = R;
                    }
                  }
                  d.lanes |= l, R = d.alternate, R !== null && (R.lanes |= l), Cd(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                R = R.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(A(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Cd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          Nn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, eo(r, l), c = Ha(c), o = o(c), r.flags |= 1, Nn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ra(o, r.pendingProps), c = ra(o.type, c), Ol(n, r, o, c, l);
      case 15:
        return $c(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ra(o, c), bs(n, r), r.tag = 1, cn(o) ? (n = !0, hc(r)) : n = !1, eo(r, l), Av(r, o, c), kd(r, o, c, l), Yc(null, r, o, !0, n, l);
      case 19:
        return Ld(n, r, l);
      case 22:
        return ia(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function ah(n, r) {
    return Kt(n, r);
  }
  function ih(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ia(n, r, l, o) {
    return new ih(n, r, l, o);
  }
  function $d(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function yy(n) {
    if (typeof n == "function") return $d(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === xn) return 11;
      if (n === jt) return 14;
    }
    return 2;
  }
  function zl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ia(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function uf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") $d(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Pe:
        return Su(l.children, c, d, r);
      case rn:
        m = 8, c |= 8;
        break;
      case _n:
        return n = Ia(12, l, r, c | 2), n.elementType = _n, n.lanes = d, n;
      case ze:
        return n = Ia(13, l, r, c), n.elementType = ze, n.lanes = d, n;
      case Xe:
        return n = Ia(19, l, r, c), n.elementType = Xe, n.lanes = d, n;
      case ye:
        return of(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Wt:
            m = 10;
            break e;
          case _t:
            m = 9;
            break e;
          case xn:
            m = 11;
            break e;
          case jt:
            m = 14;
            break e;
          case bt:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = Ia(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Su(n, r, l, o) {
    return n = Ia(7, n, o, r), n.lanes = l, n;
  }
  function of(n, r, l, o) {
    return n = Ia(22, n, o, r), n.elementType = ye, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function sf(n, r, l) {
    return n = Ia(6, n, null, r), n.lanes = l, n;
  }
  function Os(n, r, l) {
    return r = Ia(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Ls(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Au(0), this.expirationTimes = Au(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Au(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Yd(n, r, l, o, c, d, m, E, R) {
    return n = new Ls(n, r, l, E, R), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ia(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cc(d), n;
  }
  function lh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: st, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Id(n) {
    if (!n) return Si;
    n = n._reactInternals;
    e: {
      if (Te(n) !== n || n.tag !== 1) throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (cn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (cn(l)) return ds(n, l, r);
    }
    return r;
  }
  function Qd(n, r, l, o, c, d, m, E, R) {
    return n = Yd(l, o, !0, n, c, d, m, E, R), n.context = Id(null), l = n.current, o = tr(), c = qi(l), d = na(o, c), d.callback = r ?? null, kl(l, d, c), n.current.lanes = c, Mi(n, c, o), Yn(n, o), n;
  }
  function cf(n, r, l, o) {
    var c = r.current, d = tr(), m = qi(c);
    return l = Id(l), r.context === null ? r.context = l : r.pendingContext = l, r = na(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = kl(c, r, m), n !== null && (Sn(n, c, m, d), Rc(n, c, m)), m;
  }
  function Ms(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function uh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Wd(n, r) {
    uh(n, r), (n = n.alternate) && uh(n, r);
  }
  function gy() {
    return null;
  }
  var Gd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function ff(n) {
    this._internalRoot = n;
  }
  zs.prototype.render = ff.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    cf(n, r, null, null);
  }, zs.prototype.unmount = ff.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ti(function() {
        cf(null, n, null, null);
      }), r[Bi] = null;
    }
  };
  function zs(n) {
    this._internalRoot = n;
  }
  zs.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Pu();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Pt.length && r !== 0 && r < Pt[l].priority; l++) ;
      Pt.splice(l, 0, n), l === 0 && nc(n);
    }
  };
  function Ul(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function df(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function oh() {
  }
  function Sy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var U = Ms(m);
          d.call(U);
        };
      }
      var m = Qd(r, o, n, 0, null, !1, !1, "", oh);
      return n._reactRootContainer = m, n[Bi] = m.current, Ku(n.nodeType === 8 ? n.parentNode : n), Ti(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var U = Ms(R);
        E.call(U);
      };
    }
    var R = Yd(n, 0, !1, null, null, !1, !1, "", oh);
    return n._reactRootContainer = R, n[Bi] = R.current, Ku(n.nodeType === 8 ? n.parentNode : n), Ti(function() {
      cf(r, R, l, o);
    }), R;
  }
  function pf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var R = Ms(m);
          E.call(R);
        };
      }
      cf(r, m, n, c);
    } else m = Sy(l, r, n, c, o);
    return Ms(m);
  }
  Wl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ti(r.pendingLanes);
          l !== 0 && (mi(r, l | 1), Yn(r, kt()), !(ht & 6) && (To = kt() + 500, Zr()));
        }
        break;
      case 13:
        Ti(function() {
          var o = Ii(n, 1);
          if (o !== null) {
            var c = tr();
            Sn(o, n, 1, c);
          }
        }), Wd(n, 1);
    }
  }, Hu = function(n) {
    if (n.tag === 13) {
      var r = Ii(n, 134217728);
      if (r !== null) {
        var l = tr();
        Sn(r, n, 134217728, l);
      }
      Wd(n, 134217728);
    }
  }, St = function(n) {
    if (n.tag === 13) {
      var r = qi(n), l = Ii(n, r);
      if (l !== null) {
        var o = tr();
        Sn(l, n, r, o);
      }
      Wd(n, r);
    }
  }, Pu = function() {
    return Dt;
  }, Vu = function(n, r) {
    var l = Dt;
    try {
      return Dt = n, r();
    } finally {
      Dt = l;
    }
  }, wr = function(n, r, l) {
    switch (r) {
      case "input":
        if (kn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Oe(o);
              if (!c) throw Error(A(90));
              Br(o), kn(o, c);
            }
          }
        }
        break;
      case "textarea":
        da(n, l);
        break;
      case "select":
        r = l.value, r != null && mr(n, !!l.multiple, r, !1);
    }
  }, Ql = Vd, Mu = Ti;
  var Ey = { usingClientEntryPoint: !1, Events: [fs, Xu, Oe, ka, ol, Vd] }, Us = { findFiberByHostInstance: Ma, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, sh = { bundleType: Us.bundleType, version: Us.version, rendererPackageName: Us.rendererPackageName, rendererConfig: Us.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: vt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = at(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Us.findFiberByHostInstance || gy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var vf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vf.isDisabled && vf.supportsFiber) try {
      fl = vf.inject(sh), Wr = vf;
    } catch {
    }
  }
  return Xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ey, Xa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ul(r)) throw Error(A(200));
    return lh(n, r, null, l);
  }, Xa.createRoot = function(n, r) {
    if (!Ul(n)) throw Error(A(299));
    var l = !1, o = "", c = Gd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Yd(n, 1, !1, null, null, l, !1, o, c), n[Bi] = r.current, Ku(n.nodeType === 8 ? n.parentNode : n), new ff(r);
  }, Xa.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = at(r), n = n === null ? null : n.stateNode, n;
  }, Xa.flushSync = function(n) {
    return Ti(n);
  }, Xa.hydrate = function(n, r, l) {
    if (!df(r)) throw Error(A(200));
    return pf(null, n, r, !0, l);
  }, Xa.hydrateRoot = function(n, r, l) {
    if (!Ul(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Gd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Qd(r, null, n, 1, l ?? null, c, !1, d, m), n[Bi] = r.current, Ku(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new zs(r);
  }, Xa.render = function(n, r, l) {
    if (!df(r)) throw Error(A(200));
    return pf(null, n, r, !1, l);
  }, Xa.unmountComponentAtNode = function(n) {
    if (!df(n)) throw Error(A(40));
    return n._reactRootContainer ? (Ti(function() {
      pf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Bi] = null;
      });
    }), !0) : !1;
  }, Xa.unstable_batchedUpdates = Vd, Xa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!df(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return pf(n, r, l, !1, o);
  }, Xa.version = "18.3.1-next-f1338f8080-20240426", Xa;
}
var Za = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o1;
function uk() {
  return o1 || (o1 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var te = Qo, X = c1(), A = te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, It = !1;
    function Qt(e) {
      It = e;
    }
    function Je(e) {
      if (!It) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ut("warn", e, a);
      }
    }
    function S(e) {
      if (!It) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Ut("error", e, a);
      }
    }
    function Ut(e, t, a) {
      {
        var i = A.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var de = 0, pe = 1, tt = 2, ne = 3, me = 4, oe = 5, $e = 6, Tt = 7, pt = 8, pn = 9, lt = 10, Ge = 11, vt = 12, Ne = 13, st = 14, Pe = 15, rn = 16, _n = 17, Wt = 18, _t = 19, xn = 21, ze = 22, Xe = 23, jt = 24, bt = 25, ye = !0, J = !1, _e = !1, ie = !1, k = !1, V = !0, Ue = !1, Ve = !0, nt = !0, et = !0, yt = !0, ut = /* @__PURE__ */ new Set(), ot = {}, en = {};
    function hr(e, t) {
      Br(e, t), Br(e + "Capture", t);
    }
    function Br(e, t) {
      ot[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ot[e] = t;
      {
        var a = e.toLowerCase();
        en[a] = e, e === "onDoubleClick" && (en.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        ut.add(t[i]);
    }
    var vn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Wn = Object.prototype.hasOwnProperty;
    function Pn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function zn(e) {
      try {
        return kn(e), !1;
      } catch {
        return !0;
      }
    }
    function kn(e) {
      return "" + e;
    }
    function $r(e, t) {
      if (zn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Pn(e)), kn(e);
    }
    function Yr(e) {
      if (zn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pn(e)), kn(e);
    }
    function Gn(e, t) {
      if (zn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Pn(e)), kn(e);
    }
    function mr(e, t) {
      if (zn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Pn(e)), kn(e);
    }
    function Ir(e) {
      if (zn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Pn(e)), kn(e);
    }
    function yr(e) {
      if (zn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Pn(e)), kn(e);
    }
    var da = 0, rr = 1, Qr = 2, hn = 3, br = 4, fi = 5, pa = 6, ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ke = ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", rt = new RegExp("^[" + ee + "][" + ke + "]*$"), Mt = {}, At = {};
    function Dn(e) {
      return Wn.call(At, e) ? !0 : Wn.call(Mt, e) ? !1 : rt.test(e) ? (At[e] = !0, !0) : (Mt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function mn(e, t, a) {
      return t !== null ? t.type === da : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function gr(e, t, a, i) {
      if (a !== null && a.type === da)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function $t(e, t, a, i) {
      if (t === null || typeof t > "u" || gr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case hn:
            return !t;
          case br:
            return t === !1;
          case fi:
            return isNaN(t);
          case pa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function wr(e) {
      return Ht.hasOwnProperty(e) ? Ht[e] : null;
    }
    function Ft(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Qr || t === hn || t === br, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Ht = {}, Ja = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ja.forEach(function(e) {
      Ht[e] = new Ft(
        e,
        da,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Ht[t] = new Ft(
        t,
        rr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Ht[e] = new Ft(
        e,
        Qr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Ht[e] = new Ft(
        e,
        Qr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Ht[e] = new Ft(
        e,
        hn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ht[e] = new Ft(
        e,
        hn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ht[e] = new Ft(
        e,
        br,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ht[e] = new Ft(
        e,
        pa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Ht[e] = new Ft(
        e,
        fi,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ka = /[\-\:]([a-z])/g, ol = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, ol);
      Ht[t] = new Ft(
        t,
        rr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, ol);
      Ht[t] = new Ft(
        t,
        rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ka, ol);
      Ht[t] = new Ft(
        t,
        rr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Ht[e] = new Ft(
        e,
        rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ql = "xlinkHref";
    Ht[Ql] = new Ft(
      "xlinkHref",
      rr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Ht[e] = new Ft(
        e,
        rr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Mu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Li = !1;
    function sl(e) {
      !Li && Mu.test(e) && (Li = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function va(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        $r(a, t), i.sanitizeURL && sl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === br) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : $t(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if ($t(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === hn)
            return a;
          f = e.getAttribute(s);
        }
        return $t(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function di(e, t, a, i) {
      {
        if (!Dn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return $r(a, t), u === "" + a ? a : u;
      }
    }
    function ha(e, t, a, i) {
      var u = wr(t);
      if (!mn(t, u, i)) {
        if ($t(t, a, u, i) && (a = null), i || u === null) {
          if (Dn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : ($r(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === hn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var w = u.type, T;
          w === hn || w === br && a === !0 ? T = "" : ($r(a, y), T = "" + a, u.sanitizeURL && sl(T.toString())), g ? e.setAttributeNS(g, y, T) : e.setAttribute(y, T);
        }
      }
    }
    var ei = Symbol.for("react.element"), _r = Symbol.for("react.portal"), ma = Symbol.for("react.fragment"), pi = Symbol.for("react.strict_mode"), vi = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), I = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), Te = Symbol.for("react.suspense"), dt = Symbol.for("react.suspense_list"), gt = Symbol.for("react.memo"), je = Symbol.for("react.lazy"), at = Symbol.for("react.scope"), Un = Symbol.for("react.debug_trace_mode"), Kt = Symbol.for("react.offscreen"), an = Symbol.for("react.legacy_hidden"), Sr = Symbol.for("react.cache"), hi = Symbol.for("react.tracing_marker"), kt = Symbol.iterator, qn = "@@iterator";
    function kr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = kt && e[kt] || e[qn];
      return typeof t == "function" ? t : null;
    }
    var it = Object.assign, Da = 0, cl, zu, fl, Wr, Go, Dr, qo;
    function Ko() {
    }
    Ko.__reactDisabledLog = !0;
    function ec() {
      {
        if (Da === 0) {
          cl = console.log, zu = console.info, fl = console.warn, Wr = console.error, Go = console.group, Dr = console.groupCollapsed, qo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ko,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Da++;
      }
    }
    function Uu() {
      {
        if (Da--, Da === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: it({}, e, {
              value: cl
            }),
            info: it({}, e, {
              value: zu
            }),
            warn: it({}, e, {
              value: fl
            }),
            error: it({}, e, {
              value: Wr
            }),
            group: it({}, e, {
              value: Go
            }),
            groupCollapsed: it({}, e, {
              value: Dr
            }),
            groupEnd: it({}, e, {
              value: qo
            })
          });
        }
        Da < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var dl = A.ReactCurrentDispatcher, ti;
    function Nr(e, t, a) {
      {
        if (ti === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ti = i && i[1] || "";
          }
        return `
` + ti + e;
      }
    }
    var pl = !1, vl;
    {
      var hl = typeof WeakMap == "function" ? WeakMap : Map;
      vl = new hl();
    }
    function ju(e, t) {
      if (!e || pl)
        return "";
      {
        var a = vl.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      pl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = dl.current, dl.current = null, ec();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (j) {
              i = j;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (j) {
              i = j;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            i = j;
          }
          e();
        }
      } catch (j) {
        if (j && i && typeof j.stack == "string") {
          for (var p = j.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var w = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && vl.set(e, w), w;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        pl = !1, dl.current = s, Uu(), Error.prepareStackTrace = u;
      }
      var T = e ? e.displayName || e.name : "", M = T ? Nr(T) : "";
      return typeof e == "function" && vl.set(e, M), M;
    }
    function Au(e, t, a) {
      return ju(e, !0);
    }
    function Mi(e, t, a) {
      return ju(e, !1);
    }
    function If(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function mi(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ju(e, If(e));
      if (typeof e == "string")
        return Nr(e);
      switch (e) {
        case Te:
          return Nr("Suspense");
        case dt:
          return Nr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case q:
            return Mi(e.render);
          case gt:
            return mi(e.type, t, a);
          case je: {
            var i = e, u = i._payload, s = i._init;
            try {
              return mi(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Dt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case oe:
          return Nr(e.type);
        case rn:
          return Nr("Lazy");
        case Ne:
          return Nr("Suspense");
        case _t:
          return Nr("SuspenseList");
        case de:
        case tt:
        case Pe:
          return Mi(e.type);
        case Ge:
          return Mi(e.type.render);
        case pe:
          return Au(e.type);
        default:
          return "";
      }
    }
    function Fu(e) {
      try {
        var t = "", a = e;
        do
          t += Dt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Wl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Hu(e) {
      return e.displayName || "Context";
    }
    function St(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ma:
          return "Fragment";
        case _r:
          return "Portal";
        case vi:
          return "Profiler";
        case pi:
          return "StrictMode";
        case Te:
          return "Suspense";
        case dt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            var t = e;
            return Hu(t) + ".Consumer";
          case C:
            var a = e;
            return Hu(a._context) + ".Provider";
          case q:
            return Wl(e, e.render, "ForwardRef");
          case gt:
            var i = e.displayName || null;
            return i !== null ? i : St(e.type) || "Memo";
          case je: {
            var u = e, s = u._payload, f = u._init;
            try {
              return St(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Pu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Vu(e) {
      return e.displayName || "Context";
    }
    function Qe(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case jt:
          return "Cache";
        case pn:
          var i = a;
          return Vu(i) + ".Consumer";
        case lt:
          var u = a;
          return Vu(u._context) + ".Provider";
        case Wt:
          return "DehydratedFragment";
        case Ge:
          return Pu(a, a.render, "ForwardRef");
        case Tt:
          return "Fragment";
        case oe:
          return a;
        case me:
          return "Portal";
        case ne:
          return "Root";
        case $e:
          return "Text";
        case rn:
          return St(a);
        case pt:
          return a === pi ? "StrictMode" : "Mode";
        case ze:
          return "Offscreen";
        case vt:
          return "Profiler";
        case xn:
          return "Scope";
        case Ne:
          return "Suspense";
        case _t:
          return "SuspenseList";
        case bt:
          return "TracingMarker";
        case pe:
        case de:
        case _n:
        case tt:
        case st:
        case Pe:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Gl = A.ReactDebugCurrentFrame, yn = null, Gr = !1;
    function Or() {
      {
        if (yn === null)
          return null;
        var e = yn._debugOwner;
        if (e !== null && typeof e < "u")
          return Qe(e);
      }
      return null;
    }
    function ml() {
      return yn === null ? "" : Fu(yn);
    }
    function Cn() {
      Gl.getCurrentStack = null, yn = null, Gr = !1;
    }
    function Pt(e) {
      Gl.getCurrentStack = e === null ? null : ml, yn = e, Gr = !1;
    }
    function tc() {
      return yn;
    }
    function qr(e) {
      Gr = e;
    }
    function Kn(e) {
      return "" + e;
    }
    function yi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return yr(e), e;
        default:
          return "";
      }
    }
    var nc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function zi(e, t) {
      nc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function yl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function rc(e) {
      return e._valueTracker;
    }
    function Na(e) {
      e._valueTracker = null;
    }
    function gl(e) {
      var t = "";
      return e && (yl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ui(e) {
      var t = yl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      yr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            yr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            yr(p), i = "" + p;
          },
          stopTracking: function() {
            Na(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Oa(e) {
      rc(e) || (e._valueTracker = Ui(e));
    }
    function Bu(e) {
      if (!e)
        return !1;
      var t = rc(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = gl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Sl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var El = !1, ql = !1, $u = !1, Xo = !1;
    function ni(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = it({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function x(e, t) {
      zi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ql && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), ql = !0), t.value !== void 0 && t.defaultValue !== void 0 && !El && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component", t.type), El = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: yi(t.value != null ? t.value : i),
        controlled: ni(t)
      };
    }
    function z(e, t) {
      var a = e, i = t.checked;
      i != null && ha(a, "checked", i, !1);
    }
    function F(e, t) {
      var a = e;
      {
        var i = ni(t);
        !a._wrapperState.controlled && i && !Xo && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Xo = !0), a._wrapperState.controlled && !i && !$u && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), $u = !0);
      }
      z(e, t);
      var u = yi(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Kn(u)) : a.value !== Kn(u) && (a.value = Kn(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Me(a, t.type, u) : t.hasOwnProperty("defaultValue") && Me(a, t.type, yi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function K(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Kn(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Ae(e, t) {
      var a = e;
      F(a, t), le(a, t);
    }
    function le(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        $r(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = wh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Bu(f), F(f, p);
          }
        }
      }
    }
    function Me(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Sl(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Kn(e._wrapperState.initialValue) : e.defaultValue !== Kn(a) && (e.defaultValue = Kn(a)));
    }
    var ct = !1, wt = !1, Xt = !1;
    function Yt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? te.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || wt || (wt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Xt || (Xt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ct && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ct = !0);
    }
    function Zt(e, t) {
      t.value != null && e.setAttribute("value", Kn(yi(t.value)));
    }
    var tn = Array.isArray;
    function Et(e) {
      return tn(e);
    }
    var ji;
    ji = !1;
    function Yu() {
      var e = Or();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Zo = ["value", "defaultValue"];
    function Qf(e) {
      {
        zi("select", e);
        for (var t = 0; t < Zo.length; t++) {
          var a = Zo[t];
          if (e[a] != null) {
            var i = Et(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Yu()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Yu());
          }
        }
      }
    }
    function ri(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Kn(yi(a)), w = null, T = 0; T < u.length; T++) {
          if (u[T].value === g) {
            u[T].selected = !0, i && (u[T].defaultSelected = !0);
            return;
          }
          w === null && !u[T].disabled && (w = u[T]);
        }
        w !== null && (w.selected = !0);
      }
    }
    function Jo(e, t) {
      return it({}, t, {
        value: void 0
      });
    }
    function es(e, t) {
      var a = e;
      Qf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !ji && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), ji = !0);
    }
    function Wf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ri(a, !!t.multiple, i, !1) : t.defaultValue != null && ri(a, !!t.multiple, t.defaultValue, !0);
    }
    function $m(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ri(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? ri(a, !!t.multiple, t.defaultValue, !0) : ri(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Ym(e, t) {
      var a = e, i = t.value;
      i != null && ri(a, !!t.multiple, i, !1);
    }
    var Gf = !1;
    function qf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = it({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Kn(a._wrapperState.initialValue)
      });
      return i;
    }
    function Xp(e, t) {
      var a = e;
      zi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Gf && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Or() || "A component"), Gf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Et(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: yi(i)
      };
    }
    function Zp(e, t) {
      var a = e, i = yi(t.value), u = yi(t.defaultValue);
      if (i != null) {
        var s = Kn(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Kn(u));
    }
    function Jp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Kf(e, t) {
      Zp(e, t);
    }
    var Ai = "http://www.w3.org/1999/xhtml", Im = "http://www.w3.org/1998/Math/MathML", Xf = "http://www.w3.org/2000/svg";
    function ac(e) {
      switch (e) {
        case "svg":
          return Xf;
        case "math":
          return Im;
        default:
          return Ai;
      }
    }
    function Zf(e, t) {
      return e == null || e === Ai ? ac(t) : e === Xf && t === "foreignObject" ? Ai : e;
    }
    var Qm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, ic, ev = Qm(function(e, t) {
      if (e.namespaceURI === Xf && !("innerHTML" in e)) {
        ic = ic || document.createElement("div"), ic.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = ic.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Kr = 1, Fi = 3, jn = 8, ai = 9, Kl = 11, lc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Fi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, tv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Iu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function nv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var rv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Iu).forEach(function(e) {
      rv.forEach(function(t) {
        Iu[nv(t, e)] = Iu[e];
      });
    });
    function uc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Iu.hasOwnProperty(e) && Iu[e]) ? t + "px" : (mr(t, e), ("" + t).trim());
    }
    var Qu = /([A-Z])/g, Wm = /^ms-/;
    function Gm(e) {
      return e.replace(Qu, "-$1").toLowerCase().replace(Wm, "-ms-");
    }
    var av = function() {
    };
    {
      var iv = /^(?:webkit|moz|o)[A-Z]/, lv = /^-ms-/, ts = /-(.)/g, Wu = /;\s*$/, Gu = {}, qu = {}, uv = !1, Jf = !1, ed = function(e) {
        return e.replace(ts, function(t, a) {
          return a.toUpperCase();
        });
      }, td = function(e) {
        Gu.hasOwnProperty(e) && Gu[e] || (Gu[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ed(e.replace(lv, "ms-"))
        ));
      }, ov = function(e) {
        Gu.hasOwnProperty(e) && Gu[e] || (Gu[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, sv = function(e, t) {
        qu.hasOwnProperty(t) && qu[t] || (qu[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Wu, "")));
      }, cv = function(e, t) {
        uv || (uv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, qm = function(e, t) {
        Jf || (Jf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      av = function(e, t) {
        e.indexOf("-") > -1 ? td(e) : iv.test(e) ? ov(e) : Wu.test(t) && sv(e, t), typeof t == "number" && (isNaN(t) ? cv(e, t) : isFinite(t) || qm(e, t));
      };
    }
    var Km = av;
    function Xm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Gm(i)) + ":", t += uc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function fv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Km(i, t[i]);
          var s = uc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Zm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function La(e) {
      var t = {};
      for (var a in e)
        for (var i = tv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ns(e, t) {
      {
        if (!t)
          return;
        var a = La(e), i = La(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Zm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var dv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, pv = it({
      menuitem: !0
    }, dv), vv = "__html";
    function oc(e, t) {
      if (t) {
        if (pv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(vv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Hi(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var sc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, hv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ii = {}, nd = new RegExp("^(aria)-[" + ke + "]*$"), rs = new RegExp("^(aria)[A-Z][" + ke + "]*$");
    function rd(e, t) {
      {
        if (Wn.call(ii, t) && ii[t])
          return !0;
        if (rs.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = hv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ii[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ii[t] = !0, !0;
        }
        if (nd.test(t)) {
          var u = t.toLowerCase(), s = hv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return ii[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ii[t] = !0, !0;
        }
      }
      return !0;
    }
    function mv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = rd(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function cc(e, t) {
      Hi(e, t) || mv(e, t);
    }
    var Xl = !1;
    function ad(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Xl && (Xl = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var id = function() {
    };
    {
      var Xn = {}, ld = /^on./, yv = /^on[^A-Z]/, gv = new RegExp("^(aria)-[" + ke + "]*$"), Sv = new RegExp("^(aria)[A-Z][" + ke + "]*$");
      id = function(e, t, a, i) {
        if (Wn.call(Xn, t) && Xn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Xn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Xn[t] = !0, !0;
          if (ld.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Xn[t] = !0, !0;
        } else if (ld.test(t))
          return yv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Xn[t] = !0, !0;
        if (gv.test(t) || Sv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Xn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Xn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Xn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Xn[t] = !0, !0;
        var v = wr(t), y = v !== null && v.type === da;
        if (sc.hasOwnProperty(u)) {
          var g = sc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Xn[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Xn[t] = !0, !0;
        return typeof a == "boolean" && gr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Xn[t] = !0, !0) : y ? !0 : gr(t, a, v, !1) ? (Xn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === hn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Xn[t] = !0), !0);
      };
    }
    var Ev = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = id(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function xv(e, t, a) {
      Hi(e, t) || Ev(e, t, a);
    }
    var Pi = 1, as = 2, Zl = 4, Jm = Pi | as | Zl, is = null;
    function ls(e) {
      is !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), is = e;
    }
    function ey() {
      is === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), is = null;
    }
    function Cv(e) {
      return e === is;
    }
    function fc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Fi ? t.parentNode : t;
    }
    var Jt = null, xl = null, Vi = null;
    function Ku(e) {
      var t = No(e);
      if (t) {
        if (typeof Jt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = wh(a);
          Jt(t.stateNode, t.type, i);
        }
      }
    }
    function Rv(e) {
      Jt = e;
    }
    function dc(e) {
      xl ? Vi ? Vi.push(e) : Vi = [e] : xl = e;
    }
    function us() {
      return xl !== null || Vi !== null;
    }
    function os() {
      if (xl) {
        var e = xl, t = Vi;
        if (xl = null, Vi = null, Ku(e), t)
          for (var a = 0; a < t.length; a++)
            Ku(t[a]);
      }
    }
    var Jl = function(e, t) {
      return e(t);
    }, ud = function() {
    }, od = !1;
    function ty() {
      var e = us();
      e && (ud(), os());
    }
    function sd(e, t, a) {
      if (od)
        return e(t, a);
      od = !0;
      try {
        return Jl(e, t, a);
      } finally {
        od = !1, ty();
      }
    }
    function pc(e, t, a) {
      Jl = e, ud = a;
    }
    function vc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function cd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && vc(t));
        default:
          return !1;
      }
    }
    function eu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = wh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (cd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ss = !1;
    if (vn)
      try {
        var tu = {};
        Object.defineProperty(tu, "passive", {
          get: function() {
            ss = !0;
          }
        }), window.addEventListener("test", tu, tu), window.removeEventListener("test", tu, tu);
      } catch {
        ss = !1;
      }
    function Tv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var fd = Tv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var dd = document.createElement("react");
      fd = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), w = !1, T = !0, M = window.event, j = Object.getOwnPropertyDescriptor(window, "event");
        function H() {
          dd.removeEventListener(P, Le, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var ue = Array.prototype.slice.call(arguments, 3);
        function Le() {
          w = !0, H(), a.apply(i, ue), T = !1;
        }
        var we, Rt = !1, mt = !1;
        function N(O) {
          if (we = O.error, Rt = !0, we === null && O.colno === 0 && O.lineno === 0 && (mt = !0), O.defaultPrevented && we != null && typeof we == "object")
            try {
              we._suppressLogging = !0;
            } catch {
            }
        }
        var P = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", N), dd.addEventListener(P, Le, !1), g.initEvent(P, !1, !1), dd.dispatchEvent(g), j && Object.defineProperty(window, "event", j), w && T && (Rt ? mt && (we = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : we = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(we)), window.removeEventListener("error", N), !w)
          return H(), Tv.apply(this, arguments);
      };
    }
    var ny = fd, Cl = !1, li = null, cs = !1, Rl = null, gi = {
      onError: function(e) {
        Cl = !0, li = e;
      }
    };
    function nu(e, t, a, i, u, s, f, p, v) {
      Cl = !1, li = null, ny.apply(gi, arguments);
    }
    function Bi(e, t, a, i, u, s, f, p, v) {
      if (nu.apply(this, arguments), Cl) {
        var y = vd();
        cs || (cs = !0, Rl = y);
      }
    }
    function pd() {
      if (cs) {
        var e = Rl;
        throw cs = !1, Rl = null, e;
      }
    }
    function ry() {
      return Cl;
    }
    function vd() {
      if (Cl) {
        var e = li;
        return Cl = !1, li = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ma(e) {
      return e._reactInternals;
    }
    function fs(e) {
      return e._reactInternals !== void 0;
    }
    function Xu(e, t) {
      e._reactInternals = t;
    }
    var Oe = (
      /*                      */
      0
    ), Tl = (
      /*                */
      1
    ), ln = (
      /*                    */
      2
    ), Ze = (
      /*                       */
      4
    ), zt = (
      /*                */
      16
    ), Vt = (
      /*                 */
      32
    ), Si = (
      /*                     */
      64
    ), Ye = (
      /*                   */
      128
    ), Rn = (
      /*            */
      256
    ), Xr = (
      /*                          */
      512
    ), za = (
      /*                     */
      1024
    ), cn = (
      /*                      */
      2048
    ), Ua = (
      /*                    */
      4096
    ), bl = (
      /*                   */
      8192
    ), ds = (
      /*             */
      16384
    ), hc = cn | Ze | Si | Xr | za | ds, bv = (
      /*               */
      32767
    ), ya = (
      /*                   */
      32768
    ), Zn = (
      /*                */
      65536
    ), ps = (
      /* */
      131072
    ), hd = (
      /*                       */
      1048576
    ), md = (
      /*                    */
      2097152
    ), Zr = (
      /*                 */
      4194304
    ), wl = (
      /*                */
      8388608
    ), Jr = (
      /*               */
      16777216
    ), ru = (
      /*              */
      33554432
    ), Zu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ze | za | 0
    ), ea = ln | Ze | zt | Vt | Xr | Ua | bl, Er = Ze | Si | Xr | bl, ja = cn | zt, ar = Zr | wl | md, $i = A.ReactCurrentOwner;
    function ga(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (ln | Ua)) !== Oe && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ne ? a : null;
    }
    function yd(e) {
      if (e.tag === Ne) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function mc(e) {
      return e.tag === ne ? e.stateNode.containerInfo : null;
    }
    function gd(e) {
      return ga(e) === e;
    }
    function Sa(e) {
      {
        var t = $i.current;
        if (t !== null && t.tag === pe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Qe(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Ma(e);
      return u ? ga(u) === u : !1;
    }
    function ta(e) {
      if (ga(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function un(e) {
      var t = e.alternate;
      if (!t) {
        var a = ga(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return ta(s), e;
            if (v === u)
              return ta(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== ne)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Aa(e) {
      var t = un(e);
      return t !== null ? Sd(t) : null;
    }
    function Sd(e) {
      if (e.tag === oe || e.tag === $e)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Sd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function wv(e) {
      var t = un(e);
      return t !== null ? yc(t) : null;
    }
    function yc(e) {
      if (e.tag === oe || e.tag === $e)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== me) {
          var a = yc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var gc = X.unstable_scheduleCallback, _v = X.unstable_cancelCallback, Sc = X.unstable_shouldYield, kv = X.unstable_requestPaint, gn = X.unstable_now, Ed = X.unstable_getCurrentPriorityLevel, Ec = X.unstable_ImmediatePriority, au = X.unstable_UserBlockingPriority, Ei = X.unstable_NormalPriority, Dv = X.unstable_LowPriority, xc = X.unstable_IdlePriority, Ju = X.unstable_yieldValue, Nv = X.unstable_setDisableYieldValue, Yi = null, Vn = null, re = null, Fa = !1, Ea = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function xd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        nt && (e = it({}, e, {
          getLaneLabelMap: Ii,
          injectProfilingHooks: Ov
        })), Yi = t.inject(e), Vn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Cd(e, t) {
      if (Vn && typeof Vn.onScheduleFiberRoot == "function")
        try {
          Vn.onScheduleFiberRoot(Yi, e, t);
        } catch (a) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function eo(e, t) {
      if (Vn && typeof Vn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ye) === Ye;
          if (et) {
            var i;
            switch (t) {
              case On:
                i = Ec;
                break;
              case Wi:
                i = au;
                break;
              case xi:
                i = Ei;
                break;
              case po:
                i = xc;
                break;
              default:
                i = Ei;
                break;
            }
            Vn.onCommitFiberRoot(Yi, e, i, a);
          }
        } catch (u) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Ha(e) {
      if (Vn && typeof Vn.onPostCommitFiberRoot == "function")
        try {
          Vn.onPostCommitFiberRoot(Yi, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function iu(e) {
      if (Vn && typeof Vn.onCommitFiberUnmount == "function")
        try {
          Vn.onCommitFiberUnmount(Yi, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function An(e) {
      if (typeof Ju == "function" && (Nv(e), Qt(e)), Vn && typeof Vn.setStrictMode == "function")
        try {
          Vn.setStrictMode(Yi, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ov(e) {
      re = e;
    }
    function Ii() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < gs; a++) {
          var i = iy(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function _l(e) {
      re !== null && typeof re.markCommitStarted == "function" && re.markCommitStarted(e);
    }
    function Cc() {
      re !== null && typeof re.markCommitStopped == "function" && re.markCommitStopped();
    }
    function to(e) {
      re !== null && typeof re.markComponentRenderStarted == "function" && re.markComponentRenderStarted(e);
    }
    function na() {
      re !== null && typeof re.markComponentRenderStopped == "function" && re.markComponentRenderStopped();
    }
    function kl(e) {
      re !== null && typeof re.markComponentPassiveEffectMountStarted == "function" && re.markComponentPassiveEffectMountStarted(e);
    }
    function Rc() {
      re !== null && typeof re.markComponentPassiveEffectMountStopped == "function" && re.markComponentPassiveEffectMountStopped();
    }
    function Lv(e) {
      re !== null && typeof re.markComponentPassiveEffectUnmountStarted == "function" && re.markComponentPassiveEffectUnmountStarted(e);
    }
    function Tc() {
      re !== null && typeof re.markComponentPassiveEffectUnmountStopped == "function" && re.markComponentPassiveEffectUnmountStopped();
    }
    function Mv(e) {
      re !== null && typeof re.markComponentLayoutEffectMountStarted == "function" && re.markComponentLayoutEffectMountStarted(e);
    }
    function vs() {
      re !== null && typeof re.markComponentLayoutEffectMountStopped == "function" && re.markComponentLayoutEffectMountStopped();
    }
    function ui(e) {
      re !== null && typeof re.markComponentLayoutEffectUnmountStarted == "function" && re.markComponentLayoutEffectUnmountStarted(e);
    }
    function no() {
      re !== null && typeof re.markComponentLayoutEffectUnmountStopped == "function" && re.markComponentLayoutEffectUnmountStopped();
    }
    function hs(e, t, a) {
      re !== null && typeof re.markComponentErrored == "function" && re.markComponentErrored(e, t, a);
    }
    function lu(e, t, a) {
      re !== null && typeof re.markComponentSuspended == "function" && re.markComponentSuspended(e, t, a);
    }
    function Rd(e) {
      re !== null && typeof re.markLayoutEffectsStarted == "function" && re.markLayoutEffectsStarted(e);
    }
    function ro() {
      re !== null && typeof re.markLayoutEffectsStopped == "function" && re.markLayoutEffectsStopped();
    }
    function zv(e) {
      re !== null && typeof re.markPassiveEffectsStarted == "function" && re.markPassiveEffectsStarted(e);
    }
    function Td() {
      re !== null && typeof re.markPassiveEffectsStopped == "function" && re.markPassiveEffectsStopped();
    }
    function fn(e) {
      re !== null && typeof re.markRenderStarted == "function" && re.markRenderStarted(e);
    }
    function bc() {
      re !== null && typeof re.markRenderYielded == "function" && re.markRenderYielded();
    }
    function wc() {
      re !== null && typeof re.markRenderStopped == "function" && re.markRenderStopped();
    }
    function bd(e) {
      re !== null && typeof re.markRenderScheduled == "function" && re.markRenderScheduled(e);
    }
    function _c(e, t) {
      re !== null && typeof re.markForceUpdateScheduled == "function" && re.markForceUpdateScheduled(e, t);
    }
    function ms(e, t) {
      re !== null && typeof re.markStateUpdateScheduled == "function" && re.markStateUpdateScheduled(e, t);
    }
    var Ce = (
      /*                         */
      0
    ), be = (
      /*                 */
      1
    ), Ie = (
      /*                    */
      2
    ), ft = (
      /*               */
      8
    ), xa = (
      /*              */
      16
    ), ao = Math.clz32 ? Math.clz32 : xr, ys = Math.log, ay = Math.LN2;
    function xr(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ys(t) / ay | 0) | 0;
    }
    var gs = 31, $ = (
      /*                        */
      0
    ), Fn = (
      /*                          */
      0
    ), De = (
      /*                        */
      1
    ), ir = (
      /*    */
      2
    ), Ca = (
      /*             */
      4
    ), Qi = (
      /*            */
      8
    ), Pa = (
      /*                     */
      16
    ), io = (
      /*                */
      32
    ), uu = (
      /*                       */
      4194240
    ), lo = (
      /*                        */
      64
    ), kc = (
      /*                        */
      128
    ), Dc = (
      /*                        */
      256
    ), Nc = (
      /*                        */
      512
    ), Oc = (
      /*                        */
      1024
    ), Lc = (
      /*                        */
      2048
    ), ou = (
      /*                        */
      4096
    ), Mc = (
      /*                        */
      8192
    ), uo = (
      /*                        */
      16384
    ), oo = (
      /*                       */
      32768
    ), zc = (
      /*                       */
      65536
    ), Ss = (
      /*                       */
      131072
    ), Uc = (
      /*                       */
      262144
    ), jc = (
      /*                       */
      524288
    ), Ac = (
      /*                       */
      1048576
    ), Fc = (
      /*                       */
      2097152
    ), so = (
      /*                            */
      130023424
    ), su = (
      /*                             */
      4194304
    ), Hc = (
      /*                             */
      8388608
    ), Pc = (
      /*                             */
      16777216
    ), wd = (
      /*                             */
      33554432
    ), Vc = (
      /*                             */
      67108864
    ), Uv = su, Es = (
      /*          */
      134217728
    ), _d = (
      /*                          */
      268435455
    ), co = (
      /*               */
      268435456
    ), Dl = (
      /*                        */
      536870912
    ), Cr = (
      /*                   */
      1073741824
    );
    function iy(e) {
      {
        if (e & De)
          return "Sync";
        if (e & ir)
          return "InputContinuousHydration";
        if (e & Ca)
          return "InputContinuous";
        if (e & Qi)
          return "DefaultHydration";
        if (e & Pa)
          return "Default";
        if (e & io)
          return "TransitionHydration";
        if (e & uu)
          return "Transition";
        if (e & so)
          return "Retry";
        if (e & Es)
          return "SelectiveHydration";
        if (e & co)
          return "IdleHydration";
        if (e & Dl)
          return "Idle";
        if (e & Cr)
          return "Offscreen";
      }
    }
    var nn = -1, Bc = lo, ra = su;
    function cu(e) {
      switch (Nn(e)) {
        case De:
          return De;
        case ir:
          return ir;
        case Ca:
          return Ca;
        case Qi:
          return Qi;
        case Pa:
          return Pa;
        case io:
          return io;
        case lo:
        case kc:
        case Dc:
        case Nc:
        case Oc:
        case Lc:
        case ou:
        case Mc:
        case uo:
        case oo:
        case zc:
        case Ss:
        case Uc:
        case jc:
        case Ac:
        case Fc:
          return e & uu;
        case su:
        case Hc:
        case Pc:
        case wd:
        case Vc:
          return e & so;
        case Es:
          return Es;
        case co:
          return co;
        case Dl:
          return Dl;
        case Cr:
          return Cr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function fu(e, t) {
      var a = e.pendingLanes;
      if (a === $)
        return $;
      var i = $, u = e.suspendedLanes, s = e.pingedLanes, f = a & _d;
      if (f !== $) {
        var p = f & ~u;
        if (p !== $)
          i = cu(p);
        else {
          var v = f & s;
          v !== $ && (i = cu(v));
        }
      } else {
        var y = a & ~u;
        y !== $ ? i = cu(y) : s !== $ && (i = cu(s));
      }
      if (i === $)
        return $;
      if (t !== $ && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === $) {
        var g = Nn(i), w = Nn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= w || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === Pa && (w & uu) !== $
        )
          return t;
      }
      (i & Ca) !== $ && (i |= a & Pa);
      var T = e.entangledLanes;
      if (T !== $)
        for (var M = e.entanglements, j = i & T; j > 0; ) {
          var H = Ol(j), ue = 1 << H;
          i |= M[H], j &= ~ue;
        }
      return i;
    }
    function jv(e, t) {
      for (var a = e.eventTimes, i = nn; t > 0; ) {
        var u = Ol(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Av(e, t) {
      switch (e) {
        case De:
        case ir:
        case Ca:
          return t + 250;
        case Qi:
        case Pa:
        case io:
        case lo:
        case kc:
        case Dc:
        case Nc:
        case Oc:
        case Lc:
        case ou:
        case Mc:
        case uo:
        case oo:
        case zc:
        case Ss:
        case Uc:
        case jc:
        case Ac:
        case Fc:
          return t + 5e3;
        case su:
        case Hc:
        case Pc:
        case wd:
        case Vc:
          return nn;
        case Es:
        case co:
        case Dl:
        case Cr:
          return nn;
        default:
          return S("Should have found matching lanes. This is a bug in React."), nn;
      }
    }
    function Fv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ol(f), v = 1 << p, y = s[p];
        y === nn ? ((v & i) === $ || (v & u) !== $) && (s[p] = Av(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function kd(e) {
      return cu(e.pendingLanes);
    }
    function Nl(e) {
      var t = e.pendingLanes & ~Cr;
      return t !== $ ? t : t & Cr ? Cr : $;
    }
    function Dd(e) {
      return (e & De) !== $;
    }
    function xs(e) {
      return (e & _d) !== $;
    }
    function Hv(e) {
      return (e & so) === e;
    }
    function Pv(e) {
      var t = De | Ca | Pa;
      return (e & t) === $;
    }
    function Vv(e) {
      return (e & uu) === e;
    }
    function Cs(e, t) {
      var a = ir | Ca | Qi | Pa;
      return (t & a) !== $;
    }
    function Bv(e, t) {
      return (t & e.expiredLanes) !== $;
    }
    function Nd(e) {
      return (e & uu) !== $;
    }
    function $v() {
      var e = Bc;
      return Bc <<= 1, (Bc & uu) === $ && (Bc = lo), e;
    }
    function aa() {
      var e = ra;
      return ra <<= 1, (ra & so) === $ && (ra = su), e;
    }
    function Nn(e) {
      return e & -e;
    }
    function fo(e) {
      return Nn(e);
    }
    function Ol(e) {
      return 31 - ao(e);
    }
    function $c(e) {
      return Ol(e);
    }
    function ia(e, t) {
      return (e & t) !== $;
    }
    function du(e, t) {
      return (e & t) === t;
    }
    function Ke(e, t) {
      return e | t;
    }
    function Rs(e, t) {
      return e & ~t;
    }
    function Yc(e, t) {
      return e & t;
    }
    function ly(e) {
      return e;
    }
    function Yv(e, t) {
      return e !== Fn && e < t ? e : t;
    }
    function Ts(e) {
      for (var t = [], a = 0; a < gs; a++)
        t.push(e);
      return t;
    }
    function pu(e, t, a) {
      e.pendingLanes |= t, t !== Dl && (e.suspendedLanes = $, e.pingedLanes = $);
      var i = e.eventTimes, u = $c(t);
      i[u] = a;
    }
    function Iv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Ol(i), s = 1 << u;
        a[u] = nn, i &= ~s;
      }
    }
    function Ic(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Qc(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = $, e.pingedLanes = $, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Ol(f), v = 1 << p;
        i[p] = $, u[p] = nn, s[p] = nn, f &= ~v;
      }
    }
    function Od(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Ol(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Qv(e, t) {
      var a = Nn(t), i;
      switch (a) {
        case Ca:
          i = ir;
          break;
        case Pa:
          i = Qi;
          break;
        case lo:
        case kc:
        case Dc:
        case Nc:
        case Oc:
        case Lc:
        case ou:
        case Mc:
        case uo:
        case oo:
        case zc:
        case Ss:
        case Uc:
        case jc:
        case Ac:
        case Fc:
        case su:
        case Hc:
        case Pc:
        case wd:
        case Vc:
          i = io;
          break;
        case Dl:
          i = co;
          break;
        default:
          i = Fn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Fn ? Fn : i;
    }
    function Wc(e, t, a) {
      if (Ea)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = $c(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Ld(e, t) {
      if (Ea)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = $c(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function bs(e, t) {
      return null;
    }
    var On = De, Wi = Ca, xi = Pa, po = Dl, vo = Fn;
    function Va() {
      return vo;
    }
    function Tn(e) {
      vo = e;
    }
    function Rr(e, t) {
      var a = vo;
      try {
        return vo = e, t();
      } finally {
        vo = a;
      }
    }
    function uy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function oy(e, t) {
      return e > t ? e : t;
    }
    function ho(e, t) {
      return e !== 0 && e < t;
    }
    function lr(e) {
      var t = Nn(e);
      return ho(On, t) ? ho(Wi, t) ? xs(t) ? xi : po : Wi : On;
    }
    function Gc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var he;
    function mo(e) {
      he = e;
    }
    function Md(e) {
      he(e);
    }
    var qc;
    function sy(e) {
      qc = e;
    }
    var yo;
    function Kc(e) {
      yo = e;
    }
    var Xc;
    function Wv(e) {
      Xc = e;
    }
    var zd;
    function Gv(e) {
      zd = e;
    }
    var ws = !1, go = [], dn = null, Jn = null, Lr = null, So = /* @__PURE__ */ new Map(), Eo = /* @__PURE__ */ new Map(), er = [], qv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ci(e) {
      return qv.indexOf(e) > -1;
    }
    function cy(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Ud(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          dn = null;
          break;
        case "dragenter":
        case "dragleave":
          Jn = null;
          break;
        case "mouseover":
        case "mouseout":
          Lr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          So.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Eo.delete(i);
          break;
        }
      }
    }
    function xo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = cy(t, a, i, u, s);
        if (t !== null) {
          var p = No(t);
          p !== null && qc(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Kv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return dn = xo(dn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Jn = xo(Jn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Lr = xo(Lr, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return So.set(y, xo(So.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, w = g.pointerId;
          return Eo.set(w, xo(Eo.get(w) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function jd(e) {
      var t = Fs(e.target);
      if (t !== null) {
        var a = ga(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ne) {
            var u = yd(a);
            if (u !== null) {
              e.blockedOn = u, zd(e.priority, function() {
                yo(a);
              });
              return;
            }
          } else if (i === ne) {
            var s = a.stateNode;
            if (Gc(s)) {
              e.blockedOn = mc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function fy(e) {
      for (var t = Xc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < er.length && ho(t, er[i].priority); i++)
        ;
      er.splice(i, 0, a), i === 0 && jd(a);
    }
    function vu(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Tr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ls(s), u.target.dispatchEvent(s), ey();
        } else {
          var f = No(i);
          return f !== null && qc(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Zc(e, t, a) {
      vu(e) && a.delete(t);
    }
    function Ba() {
      ws = !1, dn !== null && vu(dn) && (dn = null), Jn !== null && vu(Jn) && (Jn = null), Lr !== null && vu(Lr) && (Lr = null), So.forEach(Zc), Eo.forEach(Zc);
    }
    function ht(e, t) {
      e.blockedOn === t && (e.blockedOn = null, ws || (ws = !0, X.unstable_scheduleCallback(X.unstable_NormalPriority, Ba)));
    }
    function bn(e) {
      if (go.length > 0) {
        ht(go[0], e);
        for (var t = 1; t < go.length; t++) {
          var a = go[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      dn !== null && ht(dn, e), Jn !== null && ht(Jn, e), Lr !== null && ht(Lr, e);
      var i = function(p) {
        return ht(p, e);
      };
      So.forEach(i), Eo.forEach(i);
      for (var u = 0; u < er.length; u++) {
        var s = er[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; er.length > 0; ) {
        var f = er[0];
        if (f.blockedOn !== null)
          break;
        jd(f), f.blockedOn === null && er.shift();
      }
    }
    var on = A.ReactCurrentBatchConfig, Bn = !0;
    function la(e) {
      Bn = !!e;
    }
    function Co() {
      return Bn;
    }
    function $n(e, t, a) {
      var i = Jc(t), u;
      switch (i) {
        case On:
          u = _s;
          break;
        case Wi:
          u = hu;
          break;
        case xi:
        default:
          u = Ro;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function _s(e, t, a, i) {
      var u = Va(), s = on.transition;
      on.transition = null;
      try {
        Tn(On), Ro(e, t, a, i);
      } finally {
        Tn(u), on.transition = s;
      }
    }
    function hu(e, t, a, i) {
      var u = Va(), s = on.transition;
      on.transition = null;
      try {
        Tn(Wi), Ro(e, t, a, i);
      } finally {
        Tn(u), on.transition = s;
      }
    }
    function Ro(e, t, a, i) {
      Bn && Ad(e, t, a, i);
    }
    function Ad(e, t, a, i) {
      var u = Tr(e, t, a, i);
      if (u === null) {
        ky(e, t, i, Ll, a), Ud(e, i);
        return;
      }
      if (Kv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Ud(e, i), t & Zl && Ci(e)) {
        for (; u !== null; ) {
          var s = No(u);
          s !== null && Md(s);
          var f = Tr(e, t, a, i);
          if (f === null && ky(e, t, i, Ll, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      ky(e, t, i, null, a);
    }
    var Ll = null;
    function Tr(e, t, a, i) {
      Ll = null;
      var u = fc(i), s = Fs(u);
      if (s !== null) {
        var f = ga(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ne) {
            var v = yd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === ne) {
            var y = f.stateNode;
            if (Gc(y))
              return mc(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return Ll = s, null;
    }
    function Jc(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return On;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Wi;
        case "message": {
          var t = Ed();
          switch (t) {
            case Ec:
              return On;
            case au:
              return Wi;
            case Ei:
            case Dv:
              return xi;
            case xc:
              return po;
            default:
              return xi;
          }
        }
        default:
          return xi;
      }
    }
    function To(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Gi(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function ef(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Fd(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var $a = null, bo = null, Ya = null;
    function tf(e) {
      return $a = e, bo = Ds(), !0;
    }
    function ks() {
      $a = null, bo = null, Ya = null;
    }
    function nf() {
      if (Ya)
        return Ya;
      var e, t = bo, a = t.length, i, u = Ds(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Ya = u.slice(e, p), Ya;
    }
    function Ds() {
      return "value" in $a ? $a.value : $a.textContent;
    }
    function mu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function tr() {
      return !0;
    }
    function qi() {
      return !1;
    }
    function Sn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = tr : this.isDefaultPrevented = qi, this.isPropagationStopped = qi, this;
      }
      return it(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = tr);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = tr);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: tr
      }), t;
    }
    var Yn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, rf = Sn(Yn), yu = it({}, Yn, {
      view: 0,
      detail: 0
    }), Hd = Sn(yu), Pd, Ri, wo;
    function Vd(e) {
      e !== wo && (wo && e.type === "mousemove" ? (Pd = e.screenX - wo.screenX, Ri = e.screenY - wo.screenY) : (Pd = 0, Ri = 0), wo = e);
    }
    var Ti = it({}, yu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Bd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Vd(e), Pd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ri;
      }
    }), af = Sn(Ti), gu = it({}, Ti, {
      dataTransfer: 0
    }), Xv = Sn(gu), Zv = it({}, yu, {
      relatedTarget: 0
    }), Ns = Sn(Zv), lf = it({}, Yn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), dy = Sn(lf), py = it({}, Yn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Jv = Sn(py), eh = it({}, Yn, {
      data: 0
    }), Ml = Sn(eh), vy = Ml, _o = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, th = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function wn(e) {
      if (e.key) {
        var t = _o[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = mu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? th[e.keyCode] || "Unidentified" : "";
    }
    var hy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function nh(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = hy[e];
      return i ? !!a[i] : !1;
    }
    function Bd(e) {
      return nh;
    }
    var my = it({}, yu, {
      key: wn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Bd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? mu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? mu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), rh = Sn(my), ah = it({}, Ti, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), ih = Sn(ah), Ia = it({}, yu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Bd
    }), $d = Sn(Ia), yy = it({}, Yn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), zl = Sn(yy), uf = it({}, Ti, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Su = Sn(uf), of = [9, 13, 27, 32], sf = 229, Os = vn && "CompositionEvent" in window, Ls = null;
    vn && "documentMode" in document && (Ls = document.documentMode);
    var Yd = vn && "TextEvent" in window && !Ls, lh = vn && (!Os || Ls && Ls > 8 && Ls <= 11), Id = 32, Qd = String.fromCharCode(Id);
    function cf() {
      hr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), hr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), hr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), hr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ms = !1;
    function uh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Wd(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function gy(e, t) {
      return e === "keydown" && t.keyCode === sf;
    }
    function Gd(e, t) {
      switch (e) {
        case "keyup":
          return of.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== sf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function ff(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function zs(e) {
      return e.locale === "ko";
    }
    var Ul = !1;
    function df(e, t, a, i, u) {
      var s, f;
      if (Os ? s = Wd(t) : Ul ? Gd(t, i) && (s = "onCompositionEnd") : gy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      lh && !zs(i) && (!Ul && s === "onCompositionStart" ? Ul = tf(u) : s === "onCompositionEnd" && Ul && (f = nf()));
      var p = ph(a, s);
      if (p.length > 0) {
        var v = new Ml(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = ff(i);
          y !== null && (v.data = y);
        }
      }
    }
    function oh(e, t) {
      switch (e) {
        case "compositionend":
          return ff(t);
        case "keypress":
          var a = t.which;
          return a !== Id ? null : (Ms = !0, Qd);
        case "textInput":
          var i = t.data;
          return i === Qd && Ms ? null : i;
        default:
          return null;
      }
    }
    function Sy(e, t) {
      if (Ul) {
        if (e === "compositionend" || !Os && Gd(e, t)) {
          var a = nf();
          return ks(), Ul = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!uh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return lh && !zs(t) ? null : t.data;
        default:
          return null;
      }
    }
    function pf(e, t, a, i, u) {
      var s;
      if (Yd ? s = oh(t, i) : s = Sy(t, i), !s)
        return null;
      var f = ph(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new vy("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Ey(e, t, a, i, u, s, f) {
      df(e, t, a, i, u), pf(e, t, a, i, u);
    }
    var Us = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function sh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Us[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function vf(e) {
      if (!vn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      hr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      dc(i);
      var u = ph(t, "onChange");
      if (u.length > 0) {
        var s = new rf("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var l = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, o, e, fc(e)), sd(m, t);
    }
    function m(e) {
      OS(e, 0);
    }
    function E(e) {
      var t = Ef(e);
      if (Bu(t))
        return e;
    }
    function R(e, t) {
      if (e === "change")
        return t;
    }
    var U = !1;
    vn && (U = vf("input") && (!document.documentMode || document.documentMode > 9));
    function Q(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", Y);
    }
    function W() {
      l && (l.detachEvent("onpropertychange", Y), l = null, o = null);
    }
    function Y(e) {
      e.propertyName === "value" && E(o) && d(e);
    }
    function ce(e, t, a) {
      e === "focusin" ? (W(), Q(t, a)) : e === "focusout" && W();
    }
    function ge(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return E(o);
    }
    function xe(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ln(e, t) {
      if (e === "click")
        return E(t);
    }
    function D(e, t) {
      if (e === "input" || e === "change")
        return E(t);
    }
    function b(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Me(e, "number", e.value);
    }
    function L(e, t, a, i, u, s, f) {
      var p = a ? Ef(a) : window, v, y;
      if (c(p) ? v = R : sh(p) ? U ? v = D : (v = ge, y = ce) : xe(p) && (v = Ln), v) {
        var g = v(t, a);
        if (g) {
          r(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && b(p);
    }
    function Z() {
      Br("onMouseEnter", ["mouseout", "mouseover"]), Br("onMouseLeave", ["mouseout", "mouseover"]), Br("onPointerEnter", ["pointerout", "pointerover"]), Br("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Re(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Cv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Fs(y) || op(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var w = u.ownerDocument;
          w ? g = w.defaultView || w.parentWindow : g = window;
        }
        var T, M;
        if (v) {
          var j = i.relatedTarget || i.toElement;
          if (T = a, M = j ? Fs(j) : null, M !== null) {
            var H = ga(M);
            (M !== H || M.tag !== oe && M.tag !== $e) && (M = null);
          }
        } else
          T = null, M = a;
        if (T !== M) {
          var ue = af, Le = "onMouseLeave", we = "onMouseEnter", Rt = "mouse";
          (t === "pointerout" || t === "pointerover") && (ue = ih, Le = "onPointerLeave", we = "onPointerEnter", Rt = "pointer");
          var mt = T == null ? g : Ef(T), N = M == null ? g : Ef(M), P = new ue(Le, Rt + "leave", T, i, u);
          P.target = mt, P.relatedTarget = N;
          var O = null, G = Fs(u);
          if (G === a) {
            var ve = new ue(we, Rt + "enter", M, i, u);
            ve.target = N, ve.relatedTarget = mt, O = ve;
          }
          L1(e, P, O, T, M);
        }
      }
    }
    function Fe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Se = typeof Object.is == "function" ? Object.is : Fe;
    function He(e, t) {
      if (Se(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Wn.call(t, s) || !Se(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function In(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Nt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ki(e, t) {
      for (var a = In(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Fi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = In(Nt(a));
      }
    }
    function xy(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return d1(e, u, s, f, p);
    }
    function d1(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, w = null;
      e: for (; ; ) {
        for (var T = null; g === t && (a === 0 || g.nodeType === Fi) && (f = s + a), g === i && (u === 0 || g.nodeType === Fi) && (p = s + u), g.nodeType === Fi && (s += g.nodeValue.length), (T = g.firstChild) !== null; )
          w = g, g = T;
        for (; ; ) {
          if (g === e)
            break e;
          if (w === t && ++v === a && (f = s), w === i && ++y === u && (p = s), (T = g.nextSibling) !== null)
            break;
          g = w, w = g.parentNode;
        }
        g = T;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function p1(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Ki(e, f), g = Ki(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var w = a.createRange();
          w.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(w), u.extend(g.node, g.offset)) : (w.setEnd(g.node, g.offset), u.addRange(w));
        }
      }
    }
    function SS(e) {
      return e && e.nodeType === Fi;
    }
    function ES(e, t) {
      return !e || !t ? !1 : e === t ? !0 : SS(e) ? !1 : SS(t) ? ES(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function v1(e) {
      return e && e.ownerDocument && ES(e.ownerDocument.documentElement, e);
    }
    function h1(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function xS() {
      for (var e = window, t = Sl(); t instanceof e.HTMLIFrameElement; ) {
        if (h1(t))
          e = t.contentWindow;
        else
          return t;
        t = Sl(e.document);
      }
      return t;
    }
    function Cy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function m1() {
      var e = xS();
      return {
        focusedElem: e,
        selectionRange: Cy(e) ? g1(e) : null
      };
    }
    function y1(e) {
      var t = xS(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && v1(a)) {
        i !== null && Cy(a) && S1(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Kr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function g1(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = xy(e), t || {
        start: 0,
        end: 0
      };
    }
    function S1(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : p1(e, t);
    }
    var E1 = vn && "documentMode" in document && document.documentMode <= 11;
    function x1() {
      hr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var hf = null, Ry = null, qd = null, Ty = !1;
    function C1(e) {
      if ("selectionStart" in e && Cy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function R1(e) {
      return e.window === e ? e.document : e.nodeType === ai ? e : e.ownerDocument;
    }
    function CS(e, t, a) {
      var i = R1(a);
      if (!(Ty || hf == null || hf !== Sl(i))) {
        var u = C1(hf);
        if (!qd || !He(qd, u)) {
          qd = u;
          var s = ph(Ry, "onSelect");
          if (s.length > 0) {
            var f = new rf("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = hf;
          }
        }
      }
    }
    function T1(e, t, a, i, u, s, f) {
      var p = a ? Ef(a) : window;
      switch (t) {
        case "focusin":
          (sh(p) || p.contentEditable === "true") && (hf = p, Ry = a, qd = null);
          break;
        case "focusout":
          hf = null, Ry = null, qd = null;
          break;
        case "mousedown":
          Ty = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ty = !1, CS(e, i, u);
          break;
        case "selectionchange":
          if (E1)
            break;
        case "keydown":
        case "keyup":
          CS(e, i, u);
      }
    }
    function ch(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var mf = {
      animationend: ch("Animation", "AnimationEnd"),
      animationiteration: ch("Animation", "AnimationIteration"),
      animationstart: ch("Animation", "AnimationStart"),
      transitionend: ch("Transition", "TransitionEnd")
    }, by = {}, RS = {};
    vn && (RS = document.createElement("div").style, "AnimationEvent" in window || (delete mf.animationend.animation, delete mf.animationiteration.animation, delete mf.animationstart.animation), "TransitionEvent" in window || delete mf.transitionend.transition);
    function fh(e) {
      if (by[e])
        return by[e];
      if (!mf[e])
        return e;
      var t = mf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in RS)
          return by[e] = t[a];
      return e;
    }
    var TS = fh("animationend"), bS = fh("animationiteration"), wS = fh("animationstart"), _S = fh("transitionend"), kS = /* @__PURE__ */ new Map(), DS = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ko(e, t) {
      kS.set(e, t), hr(t, [e]);
    }
    function b1() {
      for (var e = 0; e < DS.length; e++) {
        var t = DS[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        ko(a, "on" + i);
      }
      ko(TS, "onAnimationEnd"), ko(bS, "onAnimationIteration"), ko(wS, "onAnimationStart"), ko("dblclick", "onDoubleClick"), ko("focusin", "onFocus"), ko("focusout", "onBlur"), ko(_S, "onTransitionEnd");
    }
    function w1(e, t, a, i, u, s, f) {
      var p = kS.get(t);
      if (p !== void 0) {
        var v = rf, y = t;
        switch (t) {
          case "keypress":
            if (mu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = rh;
            break;
          case "focusin":
            y = "focus", v = Ns;
            break;
          case "focusout":
            y = "blur", v = Ns;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ns;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = af;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Xv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = $d;
            break;
          case TS:
          case bS:
          case wS:
            v = dy;
            break;
          case _S:
            v = zl;
            break;
          case "scroll":
            v = Hd;
            break;
          case "wheel":
            v = Su;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Jv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ih;
            break;
        }
        var g = (s & Zl) !== 0;
        {
          var w = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", T = N1(a, p, i.type, g, w);
          if (T.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: T
            });
          }
        }
      }
    }
    b1(), Z(), n(), x1(), cf();
    function _1(e, t, a, i, u, s, f) {
      w1(e, t, a, i, u, s);
      var p = (s & Jm) === 0;
      p && (Re(e, t, a, i, u), L(e, t, a, i, u), T1(e, t, a, i, u), Ey(e, t, a, i, u));
    }
    var Kd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], wy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Kd));
    function NS(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Bi(i, t, void 0, e), e.currentTarget = null;
    }
    function k1(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          NS(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], w = g.instance, T = g.currentTarget, M = g.listener;
          if (w !== i && e.isPropagationStopped())
            return;
          NS(e, M, T), i = w;
        }
    }
    function OS(e, t) {
      for (var a = (t & Zl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        k1(s, f, a);
      }
      pd();
    }
    function D1(e, t, a, i, u) {
      var s = fc(a), f = [];
      _1(f, e, i, a, s, t), OS(f, t);
    }
    function En(e, t) {
      wy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = iT(t), u = M1(e);
      i.has(u) || (LS(t, e, as, a), i.add(u));
    }
    function _y(e, t, a) {
      wy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Zl), LS(a, e, i, t);
    }
    var dh = "_reactListening" + Math.random().toString(36).slice(2);
    function Xd(e) {
      if (!e[dh]) {
        e[dh] = !0, ut.forEach(function(a) {
          a !== "selectionchange" && (wy.has(a) || _y(a, !1, e), _y(a, !0, e));
        });
        var t = e.nodeType === ai ? e : e.ownerDocument;
        t !== null && (t[dh] || (t[dh] = !0, _y("selectionchange", !1, t)));
      }
    }
    function LS(e, t, a, i, u) {
      var s = $n(e, t, a), f = void 0;
      ss && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? ef(e, t, s, f) : Gi(e, t, s) : f !== void 0 ? Fd(e, t, s, f) : To(e, t, s);
    }
    function MS(e, t) {
      return e === t || e.nodeType === jn && e.parentNode === t;
    }
    function ky(e, t, a, i, u) {
      var s = i;
      if (!(t & Pi) && !(t & as)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === ne || v === me) {
              var y = p.stateNode.containerInfo;
              if (MS(y, f))
                break;
              if (v === me)
                for (var g = p.return; g !== null; ) {
                  var w = g.tag;
                  if (w === ne || w === me) {
                    var T = g.stateNode.containerInfo;
                    if (MS(T, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = Fs(y);
                if (M === null)
                  return;
                var j = M.tag;
                if (j === oe || j === $e) {
                  p = s = M;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      sd(function() {
        return D1(e, t, a, s);
      });
    }
    function Zd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function N1(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var w = y, T = w.stateNode, M = w.tag;
        if (M === oe && T !== null && (g = T, p !== null)) {
          var j = eu(y, p);
          j != null && v.push(Zd(y, j, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function ph(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === oe && f !== null) {
          var v = f, y = eu(u, a);
          y != null && i.unshift(Zd(u, y, v));
          var g = eu(u, t);
          g != null && i.push(Zd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function yf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== oe);
      return e || null;
    }
    function O1(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = yf(s))
        u++;
      for (var f = 0, p = i; p; p = yf(p))
        f++;
      for (; u - f > 0; )
        a = yf(a), u--;
      for (; f - u > 0; )
        i = yf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = yf(a), i = yf(i);
      }
      return null;
    }
    function zS(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, w = v.tag;
        if (y !== null && y === i)
          break;
        if (w === oe && g !== null) {
          var T = g;
          if (u) {
            var M = eu(p, s);
            M != null && f.unshift(Zd(p, M, T));
          } else if (!u) {
            var j = eu(p, s);
            j != null && f.push(Zd(p, j, T));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function L1(e, t, a, i, u) {
      var s = i && u ? O1(i, u) : null;
      i !== null && zS(e, t, i, s, !1), u !== null && a !== null && zS(e, a, u, s, !0);
    }
    function M1(e, t) {
      return e + "__bubble";
    }
    var Qa = !1, Jd = "dangerouslySetInnerHTML", vh = "suppressContentEditableWarning", Do = "suppressHydrationWarning", US = "autoFocus", js = "children", As = "style", hh = "__html", Dy, mh, ep, jS, yh, AS, FS;
    Dy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, mh = function(e, t) {
      cc(e, t), ad(e, t), xv(e, t, {
        registrationNameDependencies: ot,
        possibleRegistrationNames: en
      });
    }, AS = vn && !document.documentMode, ep = function(e, t, a) {
      if (!Qa) {
        var i = gh(a), u = gh(t);
        u !== i && (Qa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, jS = function(e) {
      if (!Qa) {
        Qa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, yh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, FS = function(e, t) {
      var a = e.namespaceURI === Ai ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var z1 = /\r\n?/g, U1 = /\u0000|\uFFFD/g;
    function gh(e) {
      Ir(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(z1, `
`).replace(U1, "");
    }
    function Sh(e, t, a, i) {
      var u = gh(t), s = gh(e);
      if (s !== u && (i && (Qa || (Qa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && ye))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function HS(e) {
      return e.nodeType === ai ? e : e.ownerDocument;
    }
    function j1() {
    }
    function Eh(e) {
      e.onclick = j1;
    }
    function A1(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === As)
            f && Object.freeze(f), fv(t, f);
          else if (s === Jd) {
            var p = f ? f[hh] : void 0;
            p != null && ev(t, p);
          } else if (s === js)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && lc(t, f);
            } else typeof f == "number" && lc(t, "" + f);
          else s === vh || s === Do || s === US || (ot.hasOwnProperty(s) ? f != null && (typeof f != "function" && yh(s, f), s === "onScroll" && En("scroll", t)) : f != null && ha(t, s, f, u));
        }
    }
    function F1(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === As ? fv(e, f) : s === Jd ? ev(e, f) : s === js ? lc(e, f) : ha(e, s, f, i);
      }
    }
    function H1(e, t, a, i) {
      var u, s = HS(a), f, p = i;
      if (p === Ai && (p = ac(e)), p === Ai) {
        if (u = Hi(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Ai && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Wn.call(Dy, e) && (Dy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function P1(e, t) {
      return HS(t).createTextNode(e);
    }
    function V1(e, t, a, i) {
      var u = Hi(t, a);
      mh(t, a);
      var s;
      switch (t) {
        case "dialog":
          En("cancel", e), En("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Kd.length; f++)
            En(Kd[f], e);
          s = a;
          break;
        case "source":
          En("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e), s = a;
          break;
        case "details":
          En("toggle", e), s = a;
          break;
        case "input":
          x(e, a), s = h(e, a), En("invalid", e);
          break;
        case "option":
          Yt(e, a), s = a;
          break;
        case "select":
          es(e, a), s = Jo(e, a), En("invalid", e);
          break;
        case "textarea":
          Xp(e, a), s = qf(e, a), En("invalid", e);
          break;
        default:
          s = a;
      }
      switch (oc(t, s), A1(t, e, i, s, u), t) {
        case "input":
          Oa(e), K(e, a, !1);
          break;
        case "textarea":
          Oa(e), Jp(e);
          break;
        case "option":
          Zt(e, a);
          break;
        case "select":
          Wf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Eh(e);
          break;
      }
    }
    function B1(e, t, a, i, u) {
      mh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = Jo(e, a), p = Jo(e, i), s = [];
          break;
        case "textarea":
          f = qf(e, a), p = qf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Eh(e);
          break;
      }
      oc(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === As) {
            var w = f[v];
            for (y in w)
              w.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === Jd || v === js || v === vh || v === Do || v === US || (ot.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var T = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || T === M || T == null && M == null))
          if (v === As)
            if (T && Object.freeze(T), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!T || !T.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in T)
                T.hasOwnProperty(y) && M[y] !== T[y] && (g || (g = {}), g[y] = T[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = T;
          else if (v === Jd) {
            var j = T ? T[hh] : void 0, H = M ? M[hh] : void 0;
            j != null && H !== j && (s = s || []).push(v, j);
          } else v === js ? (typeof T == "string" || typeof T == "number") && (s = s || []).push(v, "" + T) : v === vh || v === Do || (ot.hasOwnProperty(v) ? (T != null && (typeof T != "function" && yh(v, T), v === "onScroll" && En("scroll", e)), !s && M !== T && (s = [])) : (s = s || []).push(v, T));
      }
      return g && (ns(g, p[As]), (s = s || []).push(As, g)), s;
    }
    function $1(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && z(e, u);
      var s = Hi(a, i), f = Hi(a, u);
      switch (F1(e, t, s, f), a) {
        case "input":
          F(e, u);
          break;
        case "textarea":
          Zp(e, u);
          break;
        case "select":
          $m(e, u);
          break;
      }
    }
    function Y1(e) {
      {
        var t = e.toLowerCase();
        return sc.hasOwnProperty(t) && sc[t] || null;
      }
    }
    function I1(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Hi(t, a), mh(t, a), t) {
        case "dialog":
          En("cancel", e), En("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          En("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Kd.length; y++)
            En(Kd[y], e);
          break;
        case "source":
          En("error", e);
          break;
        case "img":
        case "image":
        case "link":
          En("error", e), En("load", e);
          break;
        case "details":
          En("toggle", e);
          break;
        case "input":
          x(e, a), En("invalid", e);
          break;
        case "option":
          Yt(e, a);
          break;
        case "select":
          es(e, a), En("invalid", e);
          break;
        case "textarea":
          Xp(e, a), En("invalid", e);
          break;
      }
      oc(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, w = 0; w < g.length; w++) {
          var T = g[w].name.toLowerCase();
          switch (T) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[w].name);
          }
        }
      }
      var M = null;
      for (var j in a)
        if (a.hasOwnProperty(j)) {
          var H = a[j];
          if (j === js)
            typeof H == "string" ? e.textContent !== H && (a[Do] !== !0 && Sh(e.textContent, H, s, f), M = [js, H]) : typeof H == "number" && e.textContent !== "" + H && (a[Do] !== !0 && Sh(e.textContent, H, s, f), M = [js, "" + H]);
          else if (ot.hasOwnProperty(j))
            H != null && (typeof H != "function" && yh(j, H), j === "onScroll" && En("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ue = void 0, Le = p && Ue ? null : wr(j);
            if (a[Do] !== !0) {
              if (!(j === vh || j === Do || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              j === "value" || j === "checked" || j === "selected")) {
                if (j === Jd) {
                  var we = e.innerHTML, Rt = H ? H[hh] : void 0;
                  if (Rt != null) {
                    var mt = FS(e, Rt);
                    mt !== we && ep(j, we, mt);
                  }
                } else if (j === As) {
                  if (v.delete(j), AS) {
                    var N = Xm(H);
                    ue = e.getAttribute("style"), N !== ue && ep(j, ue, N);
                  }
                } else if (p && !Ue)
                  v.delete(j.toLowerCase()), ue = di(e, j, H), H !== ue && ep(j, ue, H);
                else if (!mn(j, Le, p) && !$t(j, H, Le, p)) {
                  var P = !1;
                  if (Le !== null)
                    v.delete(Le.attributeName), ue = va(e, j, H, Le);
                  else {
                    var O = i;
                    if (O === Ai && (O = ac(t)), O === Ai)
                      v.delete(j.toLowerCase());
                    else {
                      var G = Y1(j);
                      G !== null && G !== j && (P = !0, v.delete(G)), v.delete(j);
                    }
                    ue = di(e, j, H);
                  }
                  var ve = Ue;
                  !ve && H !== ue && !P && ep(j, ue, H);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Do] !== !0 && jS(v), t) {
        case "input":
          Oa(e), K(e, a, !0);
          break;
        case "textarea":
          Oa(e), Jp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Eh(e);
          break;
      }
      return M;
    }
    function Q1(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ny(e, t) {
      {
        if (Qa)
          return;
        Qa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (Qa)
          return;
        Qa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t, a) {
      {
        if (Qa)
          return;
        Qa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function My(e, t) {
      {
        if (t === "" || Qa)
          return;
        Qa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function W1(e, t, a) {
      switch (t) {
        case "input":
          Ae(e, a);
          return;
        case "textarea":
          Kf(e, a);
          return;
        case "select":
          Ym(e, a);
          return;
      }
    }
    var tp = function() {
    }, np = function() {
    };
    {
      var G1 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], PS = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], q1 = PS.concat(["button"]), K1 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], VS = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      np = function(e, t) {
        var a = it({}, e || VS), i = {
          tag: t
        };
        return PS.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), q1.indexOf(t) !== -1 && (a.pTagInButtonScope = null), G1.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var X1 = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return K1.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Z1 = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, BS = {};
      tp = function(e, t, a) {
        a = a || VS;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = X1(e, u) ? null : i, f = s ? null : Z1(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!BS[y]) {
            BS[y] = !0;
            var g = e, w = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", w = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var T = "";
              v === "table" && e === "tr" && (T += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, w, T);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var xh = "suppressHydrationWarning", Ch = "$", Rh = "/$", rp = "$?", ap = "$!", J1 = "style", zy = null, Uy = null;
    function eR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case ai:
        case Kl: {
          t = i === ai ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Zf(null, "");
          break;
        }
        default: {
          var s = i === jn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Zf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = np(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function tR(e, t, a) {
      {
        var i = e, u = Zf(i.namespace, t), s = np(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function yk(e) {
      return e;
    }
    function nR(e) {
      zy = Co(), Uy = m1();
      var t = null;
      return la(!1), t;
    }
    function rR(e) {
      y1(Uy), la(zy), zy = null, Uy = null;
    }
    function aR(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (tp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = np(f.ancestorInfo, e);
          tp(null, p, v);
        }
        s = f.namespace;
      }
      var y = H1(e, t, a, s);
      return up(u, y), $y(y, t), y;
    }
    function iR(e, t) {
      e.appendChild(t);
    }
    function lR(e, t, a, i, u) {
      switch (V1(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function uR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = np(f.ancestorInfo, t);
          tp(null, p, v);
        }
      }
      return B1(e, t, a, i);
    }
    function jy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function oR(e, t, a, i) {
      {
        var u = a;
        tp(null, e, u.ancestorInfo);
      }
      var s = P1(e, t);
      return up(i, s), s;
    }
    function sR() {
      var e = window.event;
      return e === void 0 ? xi : Jc(e.type);
    }
    var Ay = typeof setTimeout == "function" ? setTimeout : void 0, cR = typeof clearTimeout == "function" ? clearTimeout : void 0, Fy = -1, $S = typeof Promise == "function" ? Promise : void 0, fR = typeof queueMicrotask == "function" ? queueMicrotask : typeof $S < "u" ? function(e) {
      return $S.resolve(null).then(e).catch(dR);
    } : Ay;
    function dR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function pR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function vR(e, t, a, i, u, s) {
      $1(e, t, a, i, u), $y(e, u);
    }
    function YS(e) {
      lc(e, "");
    }
    function hR(e, t, a) {
      e.nodeValue = a;
    }
    function mR(e, t) {
      e.appendChild(t);
    }
    function yR(e, t) {
      var a;
      e.nodeType === jn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Eh(a);
    }
    function gR(e, t, a) {
      e.insertBefore(t, a);
    }
    function SR(e, t, a) {
      e.nodeType === jn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function ER(e, t) {
      e.removeChild(t);
    }
    function xR(e, t) {
      e.nodeType === jn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Hy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === jn) {
          var s = u.data;
          if (s === Rh)
            if (i === 0) {
              e.removeChild(u), bn(t);
              return;
            } else
              i--;
          else (s === Ch || s === rp || s === ap) && i++;
        }
        a = u;
      } while (a);
      bn(t);
    }
    function CR(e, t) {
      e.nodeType === jn ? Hy(e.parentNode, t) : e.nodeType === Kr && Hy(e, t), bn(e);
    }
    function RR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function TR(e) {
      e.nodeValue = "";
    }
    function bR(e, t) {
      e = e;
      var a = t[J1], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = uc("display", i);
    }
    function wR(e, t) {
      e.nodeValue = t;
    }
    function _R(e) {
      e.nodeType === Kr ? e.textContent = "" : e.nodeType === ai && e.documentElement && e.removeChild(e.documentElement);
    }
    function kR(e, t, a) {
      return e.nodeType !== Kr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function DR(e, t) {
      return t === "" || e.nodeType !== Fi ? null : e;
    }
    function NR(e) {
      return e.nodeType !== jn ? null : e;
    }
    function IS(e) {
      return e.data === rp;
    }
    function Py(e) {
      return e.data === ap;
    }
    function OR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function LR(e, t) {
      e._reactRetry = t;
    }
    function Th(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Kr || t === Fi)
          break;
        if (t === jn) {
          var a = e.data;
          if (a === Ch || a === ap || a === rp)
            break;
          if (a === Rh)
            return null;
        }
      }
      return e;
    }
    function ip(e) {
      return Th(e.nextSibling);
    }
    function MR(e) {
      return Th(e.firstChild);
    }
    function zR(e) {
      return Th(e.firstChild);
    }
    function UR(e) {
      return Th(e.nextSibling);
    }
    function jR(e, t, a, i, u, s, f) {
      up(s, e), $y(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & be) !== Ce;
      return I1(e, t, a, p, i, y, f);
    }
    function AR(e, t, a, i) {
      return up(a, e), a.mode & be, Q1(e, t);
    }
    function FR(e, t) {
      up(t, e);
    }
    function HR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === jn) {
          var i = t.data;
          if (i === Rh) {
            if (a === 0)
              return ip(t);
            a--;
          } else (i === Ch || i === ap || i === rp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function QS(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === jn) {
          var i = t.data;
          if (i === Ch || i === ap || i === rp) {
            if (a === 0)
              return t;
            a--;
          } else i === Rh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function PR(e) {
      bn(e);
    }
    function VR(e) {
      bn(e);
    }
    function BR(e) {
      return e !== "head" && e !== "body";
    }
    function $R(e, t, a, i) {
      var u = !0;
      Sh(t.nodeValue, a, i, u);
    }
    function YR(e, t, a, i, u, s) {
      if (t[xh] !== !0) {
        var f = !0;
        Sh(i.nodeValue, u, s, f);
      }
    }
    function IR(e, t) {
      t.nodeType === Kr ? Ny(e, t) : t.nodeType === jn || Oy(e, t);
    }
    function QR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Kr ? Ny(a, t) : t.nodeType === jn || Oy(a, t));
      }
    }
    function WR(e, t, a, i, u) {
      (u || t[xh] !== !0) && (i.nodeType === Kr ? Ny(a, i) : i.nodeType === jn || Oy(a, i));
    }
    function GR(e, t, a) {
      Ly(e, t);
    }
    function qR(e, t) {
      My(e, t);
    }
    function KR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ly(i, t);
      }
    }
    function XR(e, t) {
      {
        var a = e.parentNode;
        a !== null && My(a, t);
      }
    }
    function ZR(e, t, a, i, u, s) {
      (s || t[xh] !== !0) && Ly(a, i);
    }
    function JR(e, t, a, i, u) {
      (u || t[xh] !== !0) && My(a, i);
    }
    function eT(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function tT(e) {
      Xd(e);
    }
    var gf = Math.random().toString(36).slice(2), Sf = "__reactFiber$" + gf, Vy = "__reactProps$" + gf, lp = "__reactContainer$" + gf, By = "__reactEvents$" + gf, nT = "__reactListeners$" + gf, rT = "__reactHandles$" + gf;
    function aT(e) {
      delete e[Sf], delete e[Vy], delete e[By], delete e[nT], delete e[rT];
    }
    function up(e, t) {
      t[Sf] = e;
    }
    function bh(e, t) {
      t[lp] = e;
    }
    function WS(e) {
      e[lp] = null;
    }
    function op(e) {
      return !!e[lp];
    }
    function Fs(e) {
      var t = e[Sf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[lp] || a[Sf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = QS(e); u !== null; ) {
              var s = u[Sf];
              if (s)
                return s;
              u = QS(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function No(e) {
      var t = e[Sf] || e[lp];
      return t && (t.tag === oe || t.tag === $e || t.tag === Ne || t.tag === ne) ? t : null;
    }
    function Ef(e) {
      if (e.tag === oe || e.tag === $e)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function wh(e) {
      return e[Vy] || null;
    }
    function $y(e, t) {
      e[Vy] = t;
    }
    function iT(e) {
      var t = e[By];
      return t === void 0 && (t = e[By] = /* @__PURE__ */ new Set()), t;
    }
    var GS = {}, qS = A.ReactDebugCurrentFrame;
    function _h(e) {
      if (e) {
        var t = e._owner, a = mi(e.type, e._source, t ? t.type : null);
        qS.setExtraStackFrame(a);
      } else
        qS.setExtraStackFrame(null);
    }
    function Xi(e, t, a, i, u) {
      {
        var s = Function.call.bind(Wn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (_h(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), _h(null)), p instanceof Error && !(p.message in GS) && (GS[p.message] = !0, _h(u), S("Failed %s type: %s", a, p.message), _h(null));
          }
      }
    }
    var Yy = [], kh;
    kh = [];
    var Eu = -1;
    function Oo(e) {
      return {
        current: e
      };
    }
    function ua(e, t) {
      if (Eu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== kh[Eu] && S("Unexpected Fiber popped."), e.current = Yy[Eu], Yy[Eu] = null, kh[Eu] = null, Eu--;
    }
    function oa(e, t, a) {
      Eu++, Yy[Eu] = e.current, kh[Eu] = a, e.current = t;
    }
    var Iy;
    Iy = {};
    var oi = {};
    Object.freeze(oi);
    var xu = Oo(oi), jl = Oo(!1), Qy = oi;
    function xf(e, t, a) {
      return a && Al(t) ? Qy : xu.current;
    }
    function KS(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Cf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return oi;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Qe(e) || "Unknown";
          Xi(i, s, "context", p);
        }
        return u && KS(e, t, s), s;
      }
    }
    function Dh() {
      return jl.current;
    }
    function Al(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Nh(e) {
      ua(jl, e), ua(xu, e);
    }
    function Wy(e) {
      ua(jl, e), ua(xu, e);
    }
    function XS(e, t, a) {
      {
        if (xu.current !== oi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        oa(xu, t, e), oa(jl, a, e);
      }
    }
    function ZS(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Qe(e) || "Unknown";
            Iy[s] || (Iy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Qe(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Qe(e) || "Unknown";
          Xi(u, f, "child context", v);
        }
        return it({}, a, f);
      }
    }
    function Oh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || oi;
        return Qy = xu.current, oa(xu, a, e), oa(jl, jl.current, e), !0;
      }
    }
    function JS(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = ZS(e, t, Qy);
          i.__reactInternalMemoizedMergedChildContext = u, ua(jl, e), ua(xu, e), oa(xu, u, e), oa(jl, a, e);
        } else
          ua(jl, e), oa(jl, a, e);
      }
    }
    function lT(e) {
      {
        if (!gd(e) || e.tag !== pe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ne:
              return t.stateNode.context;
            case pe: {
              var a = t.type;
              if (Al(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, Lh = 1, Cu = null, Gy = !1, qy = !1;
    function eE(e) {
      Cu === null ? Cu = [e] : Cu.push(e);
    }
    function uT(e) {
      Gy = !0, eE(e);
    }
    function tE() {
      Gy && Mo();
    }
    function Mo() {
      if (!qy && Cu !== null) {
        qy = !0;
        var e = 0, t = Va();
        try {
          var a = !0, i = Cu;
          for (Tn(On); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Cu = null, Gy = !1;
        } catch (s) {
          throw Cu !== null && (Cu = Cu.slice(e + 1)), gc(Ec, Mo), s;
        } finally {
          Tn(t), qy = !1;
        }
      }
      return null;
    }
    var Rf = [], Tf = 0, Mh = null, zh = 0, bi = [], wi = 0, Hs = null, Ru = 1, Tu = "";
    function oT(e) {
      return Vs(), (e.flags & hd) !== Oe;
    }
    function sT(e) {
      return Vs(), zh;
    }
    function cT() {
      var e = Tu, t = Ru, a = t & ~fT(t);
      return a.toString(32) + e;
    }
    function Ps(e, t) {
      Vs(), Rf[Tf++] = zh, Rf[Tf++] = Mh, Mh = e, zh = t;
    }
    function nE(e, t, a) {
      Vs(), bi[wi++] = Ru, bi[wi++] = Tu, bi[wi++] = Hs, Hs = e;
      var i = Ru, u = Tu, s = Uh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Uh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, w = (f & g).toString(32), T = f >> y, M = s - y, j = Uh(t) + M, H = p << M, ue = H | T, Le = w + u;
        Ru = 1 << j | ue, Tu = Le;
      } else {
        var we = p << s, Rt = we | f, mt = u;
        Ru = 1 << v | Rt, Tu = mt;
      }
    }
    function Ky(e) {
      Vs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ps(e, a), nE(e, a, i);
      }
    }
    function Uh(e) {
      return 32 - ao(e);
    }
    function fT(e) {
      return 1 << Uh(e) - 1;
    }
    function Xy(e) {
      for (; e === Mh; )
        Mh = Rf[--Tf], Rf[Tf] = null, zh = Rf[--Tf], Rf[Tf] = null;
      for (; e === Hs; )
        Hs = bi[--wi], bi[wi] = null, Tu = bi[--wi], bi[wi] = null, Ru = bi[--wi], bi[wi] = null;
    }
    function dT() {
      return Vs(), Hs !== null ? {
        id: Ru,
        overflow: Tu
      } : null;
    }
    function pT(e, t) {
      Vs(), bi[wi++] = Ru, bi[wi++] = Tu, bi[wi++] = Hs, Ru = t.id, Tu = t.overflow, Hs = e;
    }
    function Vs() {
      zr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Mr = null, _i = null, Zi = !1, Bs = !1, zo = null;
    function vT() {
      Zi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function rE() {
      Bs = !0;
    }
    function hT() {
      return Bs;
    }
    function mT(e) {
      var t = e.stateNode.containerInfo;
      return _i = zR(t), Mr = e, Zi = !0, zo = null, Bs = !1, !0;
    }
    function yT(e, t, a) {
      return _i = UR(t), Mr = e, Zi = !0, zo = null, Bs = !1, a !== null && pT(e, a), !0;
    }
    function aE(e, t) {
      switch (e.tag) {
        case ne: {
          IR(e.stateNode.containerInfo, t);
          break;
        }
        case oe: {
          var a = (e.mode & be) !== Ce;
          WR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ne: {
          var i = e.memoizedState;
          i.dehydrated !== null && QR(i.dehydrated, t);
          break;
        }
      }
    }
    function iE(e, t) {
      aE(e, t);
      var a = x_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= zt) : i.push(a);
    }
    function Zy(e, t) {
      {
        if (Bs)
          return;
        switch (e.tag) {
          case ne: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case oe:
                var i = t.type;
                t.pendingProps, GR(a, i);
                break;
              case $e:
                var u = t.pendingProps;
                qR(a, u);
                break;
            }
            break;
          }
          case oe: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case oe: {
                var v = t.type, y = t.pendingProps, g = (e.mode & be) !== Ce;
                ZR(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case $e: {
                var w = t.pendingProps, T = (e.mode & be) !== Ce;
                JR(
                  s,
                  f,
                  p,
                  w,
                  // TODO: Delete this argument when we remove the legacy root API.
                  T
                );
                break;
              }
            }
            break;
          }
          case Ne: {
            var M = e.memoizedState, j = M.dehydrated;
            if (j !== null) switch (t.tag) {
              case oe:
                var H = t.type;
                t.pendingProps, KR(j, H);
                break;
              case $e:
                var ue = t.pendingProps;
                XR(j, ue);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function lE(e, t) {
      t.flags = t.flags & ~Ua | ln, Zy(e, t);
    }
    function uE(e, t) {
      switch (e.tag) {
        case oe: {
          var a = e.type;
          e.pendingProps;
          var i = kR(t, a);
          return i !== null ? (e.stateNode = i, Mr = e, _i = MR(i), !0) : !1;
        }
        case $e: {
          var u = e.pendingProps, s = DR(t, u);
          return s !== null ? (e.stateNode = s, Mr = e, _i = null, !0) : !1;
        }
        case Ne: {
          var f = NR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: dT(),
              retryLane: Cr
            };
            e.memoizedState = p;
            var v = C_(f);
            return v.return = e, e.child = v, Mr = e, _i = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Jy(e) {
      return (e.mode & be) !== Ce && (e.flags & Ye) === Oe;
    }
    function eg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function tg(e) {
      if (Zi) {
        var t = _i;
        if (!t) {
          Jy(e) && (Zy(Mr, e), eg()), lE(Mr, e), Zi = !1, Mr = e;
          return;
        }
        var a = t;
        if (!uE(e, t)) {
          Jy(e) && (Zy(Mr, e), eg()), t = ip(a);
          var i = Mr;
          if (!t || !uE(e, t)) {
            lE(Mr, e), Zi = !1, Mr = e;
            return;
          }
          iE(i, a);
        }
      }
    }
    function gT(e, t, a) {
      var i = e.stateNode, u = !Bs, s = jR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function ST(e) {
      var t = e.stateNode, a = e.memoizedProps, i = AR(t, a, e);
      if (i) {
        var u = Mr;
        if (u !== null)
          switch (u.tag) {
            case ne: {
              var s = u.stateNode.containerInfo, f = (u.mode & be) !== Ce;
              $R(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case oe: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & be) !== Ce;
              YR(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function ET(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      FR(a, e);
    }
    function xT(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return HR(a);
    }
    function oE(e) {
      for (var t = e.return; t !== null && t.tag !== oe && t.tag !== ne && t.tag !== Ne; )
        t = t.return;
      Mr = t;
    }
    function jh(e) {
      if (e !== Mr)
        return !1;
      if (!Zi)
        return oE(e), Zi = !0, !1;
      if (e.tag !== ne && (e.tag !== oe || BR(e.type) && !jy(e.type, e.memoizedProps))) {
        var t = _i;
        if (t)
          if (Jy(e))
            sE(e), eg();
          else
            for (; t; )
              iE(e, t), t = ip(t);
      }
      return oE(e), e.tag === Ne ? _i = xT(e) : _i = Mr ? ip(e.stateNode) : null, !0;
    }
    function CT() {
      return Zi && _i !== null;
    }
    function sE(e) {
      for (var t = _i; t; )
        aE(e, t), t = ip(t);
    }
    function bf() {
      Mr = null, _i = null, Zi = !1, Bs = !1;
    }
    function cE() {
      zo !== null && (rC(zo), zo = null);
    }
    function zr() {
      return Zi;
    }
    function ng(e) {
      zo === null ? zo = [e] : zo.push(e);
    }
    var RT = A.ReactCurrentBatchConfig, TT = null;
    function bT() {
      return RT.transition;
    }
    var Ji = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var wT = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & ft && (t = a), a = a.return;
        return t;
      }, $s = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, sp = [], cp = [], fp = [], dp = [], pp = [], vp = [], Ys = /* @__PURE__ */ new Set();
      Ji.recordUnsafeLifecycleWarnings = function(e, t) {
        Ys.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && sp.push(e), e.mode & ft && typeof t.UNSAFE_componentWillMount == "function" && cp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & ft && typeof t.UNSAFE_componentWillReceiveProps == "function" && dp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & ft && typeof t.UNSAFE_componentWillUpdate == "function" && vp.push(e));
      }, Ji.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        sp.length > 0 && (sp.forEach(function(T) {
          e.add(Qe(T) || "Component"), Ys.add(T.type);
        }), sp = []);
        var t = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(T) {
          t.add(Qe(T) || "Component"), Ys.add(T.type);
        }), cp = []);
        var a = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(T) {
          a.add(Qe(T) || "Component"), Ys.add(T.type);
        }), fp = []);
        var i = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(T) {
          i.add(Qe(T) || "Component"), Ys.add(T.type);
        }), dp = []);
        var u = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(T) {
          u.add(Qe(T) || "Component"), Ys.add(T.type);
        }), pp = []);
        var s = /* @__PURE__ */ new Set();
        if (vp.length > 0 && (vp.forEach(function(T) {
          s.add(Qe(T) || "Component"), Ys.add(T.type);
        }), vp = []), t.size > 0) {
          var f = $s(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = $s(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = $s(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = $s(e);
          Je(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = $s(a);
          Je(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var w = $s(u);
          Je(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, w);
        }
      };
      var Ah = /* @__PURE__ */ new Map(), fE = /* @__PURE__ */ new Set();
      Ji.recordLegacyContextWarning = function(e, t) {
        var a = wT(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!fE.has(e.type)) {
          var i = Ah.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ah.set(a, i)), i.push(e));
        }
      }, Ji.flushLegacyContextWarning = function() {
        Ah.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Qe(s) || "Component"), fE.add(s.type);
            });
            var u = $s(i);
            try {
              Pt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Cn();
            }
          }
        });
      }, Ji.discardPendingWarnings = function() {
        sp = [], cp = [], fp = [], dp = [], pp = [], vp = [], Ah = /* @__PURE__ */ new Map();
      };
    }
    var rg, ag, ig, lg, ug, dE = function(e, t) {
    };
    rg = !1, ag = !1, ig = {}, lg = {}, ug = {}, dE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Qe(t) || "Component";
        lg[a] || (lg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function _T(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function hp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & ft || Ve) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== pe) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !_T(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Qe(e) || "Component";
          ig[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ig[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== pe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Gn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(w) {
            var T = v.refs;
            w === null ? delete T[y] : T[y] = w;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Fh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Hh(e) {
      {
        var t = Qe(e) || "Component";
        if (ug[t])
          return;
        ug[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function pE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function vE(e) {
      function t(N, P) {
        if (e) {
          var O = N.deletions;
          O === null ? (N.deletions = [P], N.flags |= zt) : O.push(P);
        }
      }
      function a(N, P) {
        if (!e)
          return null;
        for (var O = P; O !== null; )
          t(N, O), O = O.sibling;
        return null;
      }
      function i(N, P) {
        for (var O = /* @__PURE__ */ new Map(), G = P; G !== null; )
          G.key !== null ? O.set(G.key, G) : O.set(G.index, G), G = G.sibling;
        return O;
      }
      function u(N, P) {
        var O = Js(N, P);
        return O.index = 0, O.sibling = null, O;
      }
      function s(N, P, O) {
        if (N.index = O, !e)
          return N.flags |= hd, P;
        var G = N.alternate;
        if (G !== null) {
          var ve = G.index;
          return ve < P ? (N.flags |= ln, P) : ve;
        } else
          return N.flags |= ln, P;
      }
      function f(N) {
        return e && N.alternate === null && (N.flags |= ln), N;
      }
      function p(N, P, O, G) {
        if (P === null || P.tag !== $e) {
          var ve = nS(O, N.mode, G);
          return ve.return = N, ve;
        } else {
          var se = u(P, O);
          return se.return = N, se;
        }
      }
      function v(N, P, O, G) {
        var ve = O.type;
        if (ve === ma)
          return g(N, P, O.props.children, G, O.key);
        if (P !== null && (P.elementType === ve || // Keep this check inline so it only runs on the false path:
        SC(P, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ve == "object" && ve !== null && ve.$$typeof === je && pE(ve) === P.type)) {
          var se = u(P, O.props);
          return se.ref = hp(N, P, O), se.return = N, se._debugSource = O._source, se._debugOwner = O._owner, se;
        }
        var Be = tS(O, N.mode, G);
        return Be.ref = hp(N, P, O), Be.return = N, Be;
      }
      function y(N, P, O, G) {
        if (P === null || P.tag !== me || P.stateNode.containerInfo !== O.containerInfo || P.stateNode.implementation !== O.implementation) {
          var ve = rS(O, N.mode, G);
          return ve.return = N, ve;
        } else {
          var se = u(P, O.children || []);
          return se.return = N, se;
        }
      }
      function g(N, P, O, G, ve) {
        if (P === null || P.tag !== Tt) {
          var se = Io(O, N.mode, G, ve);
          return se.return = N, se;
        } else {
          var Be = u(P, O);
          return Be.return = N, Be;
        }
      }
      function w(N, P, O) {
        if (typeof P == "string" && P !== "" || typeof P == "number") {
          var G = nS("" + P, N.mode, O);
          return G.return = N, G;
        }
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case ei: {
              var ve = tS(P, N.mode, O);
              return ve.ref = hp(N, null, P), ve.return = N, ve;
            }
            case _r: {
              var se = rS(P, N.mode, O);
              return se.return = N, se;
            }
            case je: {
              var Be = P._payload, qe = P._init;
              return w(N, qe(Be), O);
            }
          }
          if (Et(P) || kr(P)) {
            var qt = Io(P, N.mode, O, null);
            return qt.return = N, qt;
          }
          Fh(N, P);
        }
        return typeof P == "function" && Hh(N), null;
      }
      function T(N, P, O, G) {
        var ve = P !== null ? P.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return ve !== null ? null : p(N, P, "" + O, G);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ei:
              return O.key === ve ? v(N, P, O, G) : null;
            case _r:
              return O.key === ve ? y(N, P, O, G) : null;
            case je: {
              var se = O._payload, Be = O._init;
              return T(N, P, Be(se), G);
            }
          }
          if (Et(O) || kr(O))
            return ve !== null ? null : g(N, P, O, G, null);
          Fh(N, O);
        }
        return typeof O == "function" && Hh(N), null;
      }
      function M(N, P, O, G, ve) {
        if (typeof G == "string" && G !== "" || typeof G == "number") {
          var se = N.get(O) || null;
          return p(P, se, "" + G, ve);
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case ei: {
              var Be = N.get(G.key === null ? O : G.key) || null;
              return v(P, Be, G, ve);
            }
            case _r: {
              var qe = N.get(G.key === null ? O : G.key) || null;
              return y(P, qe, G, ve);
            }
            case je:
              var qt = G._payload, Ot = G._init;
              return M(N, P, O, Ot(qt), ve);
          }
          if (Et(G) || kr(G)) {
            var Qn = N.get(O) || null;
            return g(P, Qn, G, ve, null);
          }
          Fh(P, G);
        }
        return typeof G == "function" && Hh(P), null;
      }
      function j(N, P, O) {
        {
          if (typeof N != "object" || N === null)
            return P;
          switch (N.$$typeof) {
            case ei:
            case _r:
              dE(N, O);
              var G = N.key;
              if (typeof G != "string")
                break;
              if (P === null) {
                P = /* @__PURE__ */ new Set(), P.add(G);
                break;
              }
              if (!P.has(G)) {
                P.add(G);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", G);
              break;
            case je:
              var ve = N._payload, se = N._init;
              j(se(ve), P, O);
              break;
          }
        }
        return P;
      }
      function H(N, P, O, G) {
        for (var ve = null, se = 0; se < O.length; se++) {
          var Be = O[se];
          ve = j(Be, ve, N);
        }
        for (var qe = null, qt = null, Ot = P, Qn = 0, Lt = 0, Hn = null; Ot !== null && Lt < O.length; Lt++) {
          Ot.index > Lt ? (Hn = Ot, Ot = null) : Hn = Ot.sibling;
          var ca = T(N, Ot, O[Lt], G);
          if (ca === null) {
            Ot === null && (Ot = Hn);
            break;
          }
          e && Ot && ca.alternate === null && t(N, Ot), Qn = s(ca, Qn, Lt), qt === null ? qe = ca : qt.sibling = ca, qt = ca, Ot = Hn;
        }
        if (Lt === O.length) {
          if (a(N, Ot), zr()) {
            var Vr = Lt;
            Ps(N, Vr);
          }
          return qe;
        }
        if (Ot === null) {
          for (; Lt < O.length; Lt++) {
            var ci = w(N, O[Lt], G);
            ci !== null && (Qn = s(ci, Qn, Lt), qt === null ? qe = ci : qt.sibling = ci, qt = ci);
          }
          if (zr()) {
            var wa = Lt;
            Ps(N, wa);
          }
          return qe;
        }
        for (var _a = i(N, Ot); Lt < O.length; Lt++) {
          var fa = M(_a, N, Lt, O[Lt], G);
          fa !== null && (e && fa.alternate !== null && _a.delete(fa.key === null ? Lt : fa.key), Qn = s(fa, Qn, Lt), qt === null ? qe = fa : qt.sibling = fa, qt = fa);
        }
        if (e && _a.forEach(function(Yf) {
          return t(N, Yf);
        }), zr()) {
          var Ou = Lt;
          Ps(N, Ou);
        }
        return qe;
      }
      function ue(N, P, O, G) {
        var ve = kr(O);
        if (typeof ve != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (ag || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ag = !0), O.entries === ve && (rg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), rg = !0);
          var se = ve.call(O);
          if (se)
            for (var Be = null, qe = se.next(); !qe.done; qe = se.next()) {
              var qt = qe.value;
              Be = j(qt, Be, N);
            }
        }
        var Ot = ve.call(O);
        if (Ot == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Qn = null, Lt = null, Hn = P, ca = 0, Vr = 0, ci = null, wa = Ot.next(); Hn !== null && !wa.done; Vr++, wa = Ot.next()) {
          Hn.index > Vr ? (ci = Hn, Hn = null) : ci = Hn.sibling;
          var _a = T(N, Hn, wa.value, G);
          if (_a === null) {
            Hn === null && (Hn = ci);
            break;
          }
          e && Hn && _a.alternate === null && t(N, Hn), ca = s(_a, ca, Vr), Lt === null ? Qn = _a : Lt.sibling = _a, Lt = _a, Hn = ci;
        }
        if (wa.done) {
          if (a(N, Hn), zr()) {
            var fa = Vr;
            Ps(N, fa);
          }
          return Qn;
        }
        if (Hn === null) {
          for (; !wa.done; Vr++, wa = Ot.next()) {
            var Ou = w(N, wa.value, G);
            Ou !== null && (ca = s(Ou, ca, Vr), Lt === null ? Qn = Ou : Lt.sibling = Ou, Lt = Ou);
          }
          if (zr()) {
            var Yf = Vr;
            Ps(N, Yf);
          }
          return Qn;
        }
        for (var Wp = i(N, Hn); !wa.done; Vr++, wa = Ot.next()) {
          var Il = M(Wp, N, Vr, wa.value, G);
          Il !== null && (e && Il.alternate !== null && Wp.delete(Il.key === null ? Vr : Il.key), ca = s(Il, ca, Vr), Lt === null ? Qn = Il : Lt.sibling = Il, Lt = Il);
        }
        if (e && Wp.forEach(function(J_) {
          return t(N, J_);
        }), zr()) {
          var Z_ = Vr;
          Ps(N, Z_);
        }
        return Qn;
      }
      function Le(N, P, O, G) {
        if (P !== null && P.tag === $e) {
          a(N, P.sibling);
          var ve = u(P, O);
          return ve.return = N, ve;
        }
        a(N, P);
        var se = nS(O, N.mode, G);
        return se.return = N, se;
      }
      function we(N, P, O, G) {
        for (var ve = O.key, se = P; se !== null; ) {
          if (se.key === ve) {
            var Be = O.type;
            if (Be === ma) {
              if (se.tag === Tt) {
                a(N, se.sibling);
                var qe = u(se, O.props.children);
                return qe.return = N, qe._debugSource = O._source, qe._debugOwner = O._owner, qe;
              }
            } else if (se.elementType === Be || // Keep this check inline so it only runs on the false path:
            SC(se, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Be == "object" && Be !== null && Be.$$typeof === je && pE(Be) === se.type) {
              a(N, se.sibling);
              var qt = u(se, O.props);
              return qt.ref = hp(N, se, O), qt.return = N, qt._debugSource = O._source, qt._debugOwner = O._owner, qt;
            }
            a(N, se);
            break;
          } else
            t(N, se);
          se = se.sibling;
        }
        if (O.type === ma) {
          var Ot = Io(O.props.children, N.mode, G, O.key);
          return Ot.return = N, Ot;
        } else {
          var Qn = tS(O, N.mode, G);
          return Qn.ref = hp(N, P, O), Qn.return = N, Qn;
        }
      }
      function Rt(N, P, O, G) {
        for (var ve = O.key, se = P; se !== null; ) {
          if (se.key === ve)
            if (se.tag === me && se.stateNode.containerInfo === O.containerInfo && se.stateNode.implementation === O.implementation) {
              a(N, se.sibling);
              var Be = u(se, O.children || []);
              return Be.return = N, Be;
            } else {
              a(N, se);
              break;
            }
          else
            t(N, se);
          se = se.sibling;
        }
        var qe = rS(O, N.mode, G);
        return qe.return = N, qe;
      }
      function mt(N, P, O, G) {
        var ve = typeof O == "object" && O !== null && O.type === ma && O.key === null;
        if (ve && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case ei:
              return f(we(N, P, O, G));
            case _r:
              return f(Rt(N, P, O, G));
            case je:
              var se = O._payload, Be = O._init;
              return mt(N, P, Be(se), G);
          }
          if (Et(O))
            return H(N, P, O, G);
          if (kr(O))
            return ue(N, P, O, G);
          Fh(N, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Le(N, P, "" + O, G)) : (typeof O == "function" && Hh(N), a(N, P));
      }
      return mt;
    }
    var wf = vE(!0), hE = vE(!1);
    function kT(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Js(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Js(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function DT(e, t) {
      for (var a = e.child; a !== null; )
        m_(a, t), a = a.sibling;
    }
    var og = Oo(null), sg;
    sg = {};
    var Ph = null, _f = null, cg = null, Vh = !1;
    function Bh() {
      Ph = null, _f = null, cg = null, Vh = !1;
    }
    function mE() {
      Vh = !0;
    }
    function yE() {
      Vh = !1;
    }
    function gE(e, t, a) {
      oa(og, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== sg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = sg;
    }
    function fg(e, t) {
      var a = og.current;
      ua(og, t), e._currentValue = a;
    }
    function dg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (du(i.childLanes, t) ? u !== null && !du(u.childLanes, t) && (u.childLanes = Ke(u.childLanes, t)) : (i.childLanes = Ke(i.childLanes, t), u !== null && (u.childLanes = Ke(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function NT(e, t, a) {
      OT(e, t, a);
    }
    function OT(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === pe) {
                var p = fo(a), v = bu(nn, p);
                v.tag = Yh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, w = g.pending;
                  w === null ? v.next = v : (v.next = w.next, w.next = v), g.pending = v;
                }
              }
              i.lanes = Ke(i.lanes, a);
              var T = i.alternate;
              T !== null && (T.lanes = Ke(T.lanes, a)), dg(i.return, a, e), s.lanes = Ke(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === lt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Wt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = Ke(M.lanes, a);
          var j = M.alternate;
          j !== null && (j.lanes = Ke(j.lanes, a)), dg(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var H = u.sibling;
            if (H !== null) {
              H.return = u.return, u = H;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function kf(e, t) {
      Ph = e, _f = null, cg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ia(a.lanes, t) && Np(), a.firstContext = null);
      }
    }
    function nr(e) {
      Vh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (cg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (_f === null) {
          if (Ph === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          _f = a, Ph.dependencies = {
            lanes: $,
            firstContext: a
          };
        } else
          _f = _f.next = a;
      }
      return t;
    }
    var Is = null;
    function pg(e) {
      Is === null ? Is = [e] : Is.push(e);
    }
    function LT() {
      if (Is !== null) {
        for (var e = 0; e < Is.length; e++) {
          var t = Is[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Is = null;
      }
    }
    function SE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, pg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, $h(e, i);
    }
    function MT(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, pg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function zT(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, pg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, $h(e, i);
    }
    function Wa(e, t) {
      return $h(e, t);
    }
    var UT = $h;
    function $h(e, t) {
      e.lanes = Ke(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ke(a.lanes, t)), a === null && (e.flags & (ln | Ua)) !== Oe && hC(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ke(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ke(a.childLanes, t) : (u.flags & (ln | Ua)) !== Oe && hC(e), i = u, u = u.return;
      if (i.tag === ne) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var EE = 0, xE = 1, Yh = 2, vg = 3, Ih = !1, hg, Qh;
    hg = !1, Qh = null;
    function mg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: $
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function CE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function bu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: EE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Uo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Qh === u && !hg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), hg = !0), Mw()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, UT(e, a);
      } else
        return zT(e, u, t, a);
    }
    function Wh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Nd(a)) {
          var s = u.lanes;
          s = Yc(s, e.pendingLanes);
          var f = Ke(s, a);
          u.lanes = f, Od(e, f);
        }
      }
    }
    function yg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function jT(e, t, a, i, u, s) {
      switch (a.tag) {
        case xE: {
          var f = a.payload;
          if (typeof f == "function") {
            mE();
            var p = f.call(s, i, u);
            {
              if (e.mode & ft) {
                An(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  An(!1);
                }
              }
              yE();
            }
            return p;
          }
          return f;
        }
        case vg:
          e.flags = e.flags & ~Zn | Ye;
        case EE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            mE(), y = v.call(s, i, u);
            {
              if (e.mode & ft) {
                An(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  An(!1);
                }
              }
              yE();
            }
          } else
            y = v;
          return y == null ? i : it({}, i, y);
        }
        case Yh:
          return Ih = !0, i;
      }
      return i;
    }
    function Gh(e, t, a, i) {
      var u = e.updateQueue;
      Ih = !1, Qh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var w = g.updateQueue, T = w.lastBaseUpdate;
          T !== f && (T === null ? w.firstBaseUpdate = y : T.next = y, w.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, j = $, H = null, ue = null, Le = null, we = s;
        do {
          var Rt = we.lane, mt = we.eventTime;
          if (du(i, Rt)) {
            if (Le !== null) {
              var P = {
                eventTime: mt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fn,
                tag: we.tag,
                payload: we.payload,
                callback: we.callback,
                next: null
              };
              Le = Le.next = P;
            }
            M = jT(e, u, we, M, t, a);
            var O = we.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            we.lane !== Fn) {
              e.flags |= Si;
              var G = u.effects;
              G === null ? u.effects = [we] : G.push(we);
            }
          } else {
            var N = {
              eventTime: mt,
              lane: Rt,
              tag: we.tag,
              payload: we.payload,
              callback: we.callback,
              next: null
            };
            Le === null ? (ue = Le = N, H = M) : Le = Le.next = N, j = Ke(j, Rt);
          }
          if (we = we.next, we === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ve = p, se = ve.next;
            ve.next = null, we = se, u.lastBaseUpdate = ve, u.shared.pending = null;
          }
        } while (!0);
        Le === null && (H = M), u.baseState = H, u.firstBaseUpdate = ue, u.lastBaseUpdate = Le;
        var Be = u.shared.interleaved;
        if (Be !== null) {
          var qe = Be;
          do
            j = Ke(j, qe.lane), qe = qe.next;
          while (qe !== Be);
        } else s === null && (u.shared.lanes = $);
        Bp(j), e.lanes = j, e.memoizedState = M;
      }
      Qh = null;
    }
    function AT(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function RE() {
      Ih = !1;
    }
    function qh() {
      return Ih;
    }
    function TE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, AT(f, a));
        }
    }
    var mp = {}, jo = Oo(mp), yp = Oo(mp), Kh = Oo(mp);
    function Xh(e) {
      if (e === mp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function bE() {
      var e = Xh(Kh.current);
      return e;
    }
    function gg(e, t) {
      oa(Kh, t, e), oa(yp, e, e), oa(jo, mp, e);
      var a = eR(t);
      ua(jo, e), oa(jo, a, e);
    }
    function Df(e) {
      ua(jo, e), ua(yp, e), ua(Kh, e);
    }
    function Sg() {
      var e = Xh(jo.current);
      return e;
    }
    function wE(e) {
      Xh(Kh.current);
      var t = Xh(jo.current), a = tR(t, e.type);
      t !== a && (oa(yp, e, e), oa(jo, a, e));
    }
    function Eg(e) {
      yp.current === e && (ua(jo, e), ua(yp, e));
    }
    var FT = 0, _E = 1, kE = 1, gp = 2, el = Oo(FT);
    function xg(e, t) {
      return (e & t) !== 0;
    }
    function Nf(e) {
      return e & _E;
    }
    function Cg(e, t) {
      return e & _E | t;
    }
    function HT(e, t) {
      return e | t;
    }
    function Ao(e, t) {
      oa(el, t, e);
    }
    function Of(e) {
      ua(el, e);
    }
    function PT(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Zh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ne) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || IS(i) || Py(i))
              return t;
          }
        } else if (t.tag === _t && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ye) !== Oe;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ga = (
      /*   */
      0
    ), ur = (
      /* */
      1
    ), Fl = (
      /*  */
      2
    ), or = (
      /*    */
      4
    ), Ur = (
      /*   */
      8
    ), Rg = [];
    function Tg() {
      for (var e = 0; e < Rg.length; e++) {
        var t = Rg[e];
        t._workInProgressVersionPrimary = null;
      }
      Rg.length = 0;
    }
    function VT(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var fe = A.ReactCurrentDispatcher, Sp = A.ReactCurrentBatchConfig, bg, Lf;
    bg = /* @__PURE__ */ new Set();
    var Qs = $, Gt = null, sr = null, cr = null, Jh = !1, Ep = !1, xp = 0, BT = 0, $T = 25, B = null, ki = null, Fo = -1, wg = !1;
    function Bt() {
      {
        var e = B;
        ki === null ? ki = [e] : ki.push(e);
      }
    }
    function ae() {
      {
        var e = B;
        ki !== null && (Fo++, ki[Fo] !== e && YT(e));
      }
    }
    function Mf(e) {
      e != null && !Et(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", B, typeof e);
    }
    function YT(e) {
      {
        var t = Qe(Gt);
        if (!bg.has(t) && (bg.add(t), ki !== null)) {
          for (var a = "", i = 30, u = 0; u <= Fo; u++) {
            for (var s = ki[u], f = u === Fo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function sa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function _g(e, t) {
      if (wg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", B), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, B, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Se(e[a], t[a]))
          return !1;
      return !0;
    }
    function zf(e, t, a, i, u, s) {
      Qs = s, Gt = t, ki = e !== null ? e._debugHookTypes : null, Fo = -1, wg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = $, e !== null && e.memoizedState !== null ? fe.current = KE : ki !== null ? fe.current = qE : fe.current = GE;
      var f = a(i, u);
      if (Ep) {
        var p = 0;
        do {
          if (Ep = !1, xp = 0, p >= $T)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, wg = !1, sr = null, cr = null, t.updateQueue = null, Fo = -1, fe.current = XE, f = a(i, u);
        } while (Ep);
      }
      fe.current = dm, t._debugHookTypes = ki;
      var v = sr !== null && sr.next !== null;
      if (Qs = $, Gt = null, sr = null, cr = null, B = null, ki = null, Fo = -1, e !== null && (e.flags & ar) !== (t.flags & ar) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & be) !== Ce && S("Internal React error: Expected static flag was missing. Please notify the React team."), Jh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Uf() {
      var e = xp !== 0;
      return xp = 0, e;
    }
    function DE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & xa) !== Ce ? t.flags &= ~(ru | Jr | cn | Ze) : t.flags &= ~(cn | Ze), e.lanes = Rs(e.lanes, a);
    }
    function NE() {
      if (fe.current = dm, Jh) {
        for (var e = Gt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Jh = !1;
      }
      Qs = $, Gt = null, sr = null, cr = null, ki = null, Fo = -1, B = null, $E = !1, Ep = !1, xp = 0;
    }
    function Hl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return cr === null ? Gt.memoizedState = cr = e : cr = cr.next = e, cr;
    }
    function Di() {
      var e;
      if (sr === null) {
        var t = Gt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = sr.next;
      var a;
      if (cr === null ? a = Gt.memoizedState : a = cr.next, a !== null)
        cr = a, a = cr.next, sr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        sr = e;
        var i = {
          memoizedState: sr.memoizedState,
          baseState: sr.baseState,
          baseQueue: sr.baseQueue,
          queue: sr.queue,
          next: null
        };
        cr === null ? Gt.memoizedState = cr = i : cr = cr.next = i;
      }
      return cr;
    }
    function OE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function kg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Dg(e, t, a) {
      var i = Hl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = GT.bind(null, Gt, s);
      return [i.memoizedState, f];
    }
    function Ng(e, t, a) {
      var i = Di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = sr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, w = s.baseState, T = null, M = null, j = null, H = g;
        do {
          var ue = H.lane;
          if (du(Qs, ue)) {
            if (j !== null) {
              var we = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Fn,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null
              };
              j = j.next = we;
            }
            if (H.hasEagerState)
              w = H.eagerState;
            else {
              var Rt = H.action;
              w = e(w, Rt);
            }
          } else {
            var Le = {
              lane: ue,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            };
            j === null ? (M = j = Le, T = w) : j = j.next = Le, Gt.lanes = Ke(Gt.lanes, ue), Bp(ue);
          }
          H = H.next;
        } while (H !== null && H !== g);
        j === null ? T = w : j.next = M, Se(w, i.memoizedState) || Np(), i.memoizedState = w, i.baseState = T, i.baseQueue = j, u.lastRenderedState = w;
      }
      var mt = u.interleaved;
      if (mt !== null) {
        var N = mt;
        do {
          var P = N.lane;
          Gt.lanes = Ke(Gt.lanes, P), Bp(P), N = N.next;
        } while (N !== mt);
      } else f === null && (u.lanes = $);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Og(e, t, a) {
      var i = Di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        Se(p, i.memoizedState) || Np(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function gk(e, t, a) {
    }
    function Sk(e, t, a) {
    }
    function Lg(e, t, a) {
      var i = Gt, u = Hl(), s, f = zr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Lf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Lf = !0);
      } else {
        if (s = t(), !Lf) {
          var p = t();
          Se(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Lf = !0);
        }
        var v = Om();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Cs(v, Qs) || LE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, am(zE.bind(null, i, y, e), [e]), i.flags |= cn, Cp(ur | Ur, ME.bind(null, i, y, s, t), void 0, null), s;
    }
    function em(e, t, a) {
      var i = Gt, u = Di(), s = t();
      if (!Lf) {
        var f = t();
        Se(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Lf = !0);
      }
      var p = u.memoizedState, v = !Se(p, s);
      v && (u.memoizedState = s, Np());
      var y = u.queue;
      if (Tp(zE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      cr !== null && cr.memoizedState.tag & ur) {
        i.flags |= cn, Cp(ur | Ur, ME.bind(null, i, y, s, t), void 0, null);
        var g = Om();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Cs(g, Qs) || LE(i, t, s);
      }
      return s;
    }
    function LE(e, t, a) {
      e.flags |= ds;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Gt.updateQueue;
      if (u === null)
        u = OE(), Gt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function ME(e, t, a, i) {
      t.value = a, t.getSnapshot = i, UE(t) && jE(e);
    }
    function zE(e, t, a) {
      var i = function() {
        UE(t) && jE(e);
      };
      return a(i);
    }
    function UE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Se(a, i);
      } catch {
        return !0;
      }
    }
    function jE(e) {
      var t = Wa(e, De);
      t !== null && vr(t, e, De, nn);
    }
    function tm(e) {
      var t = Hl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: kg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = qT.bind(null, Gt, a);
      return [t.memoizedState, i];
    }
    function Mg(e) {
      return Ng(kg);
    }
    function zg(e) {
      return Og(kg);
    }
    function Cp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Gt.updateQueue;
      if (s === null)
        s = OE(), Gt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Ug(e) {
      var t = Hl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function nm(e) {
      var t = Di();
      return t.memoizedState;
    }
    function Rp(e, t, a, i) {
      var u = Hl(), s = i === void 0 ? null : i;
      Gt.flags |= e, u.memoizedState = Cp(ur | t, a, void 0, s);
    }
    function rm(e, t, a, i) {
      var u = Di(), s = i === void 0 ? null : i, f = void 0;
      if (sr !== null) {
        var p = sr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (_g(s, v)) {
            u.memoizedState = Cp(t, a, f, s);
            return;
          }
        }
      }
      Gt.flags |= e, u.memoizedState = Cp(ur | t, a, f, s);
    }
    function am(e, t) {
      return (Gt.mode & xa) !== Ce ? Rp(ru | cn | wl, Ur, e, t) : Rp(cn | wl, Ur, e, t);
    }
    function Tp(e, t) {
      return rm(cn, Ur, e, t);
    }
    function jg(e, t) {
      return Rp(Ze, Fl, e, t);
    }
    function im(e, t) {
      return rm(Ze, Fl, e, t);
    }
    function Ag(e, t) {
      var a = Ze;
      return a |= Zr, (Gt.mode & xa) !== Ce && (a |= Jr), Rp(a, or, e, t);
    }
    function lm(e, t) {
      return rm(Ze, or, e, t);
    }
    function AE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Fg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ze;
      return u |= Zr, (Gt.mode & xa) !== Ce && (u |= Jr), Rp(u, or, AE.bind(null, t, e), i);
    }
    function um(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return rm(Ze, or, AE.bind(null, t, e), i);
    }
    function IT(e, t) {
    }
    var om = IT;
    function Hg(e, t) {
      var a = Hl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function sm(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (_g(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Pg(e, t) {
      var a = Hl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function cm(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (_g(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Vg(e) {
      var t = Hl();
      return t.memoizedState = e, e;
    }
    function FE(e) {
      var t = Di(), a = sr, i = a.memoizedState;
      return PE(t, i, e);
    }
    function HE(e) {
      var t = Di();
      if (sr === null)
        return t.memoizedState = e, e;
      var a = sr.memoizedState;
      return PE(t, a, e);
    }
    function PE(e, t, a) {
      var i = !Pv(Qs);
      if (i) {
        if (!Se(a, t)) {
          var u = $v();
          Gt.lanes = Ke(Gt.lanes, u), Bp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Np()), e.memoizedState = a, a;
    }
    function QT(e, t, a) {
      var i = Va();
      Tn(uy(i, Wi)), e(!0);
      var u = Sp.transition;
      Sp.transition = {};
      var s = Sp.transition;
      Sp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Tn(i), Sp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Je("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Bg() {
      var e = tm(!1), t = e[0], a = e[1], i = QT.bind(null, a), u = Hl();
      return u.memoizedState = i, [t, i];
    }
    function VE() {
      var e = Mg(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    function BE() {
      var e = zg(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    var $E = !1;
    function WT() {
      return $E;
    }
    function $g() {
      var e = Hl(), t = Om(), a = t.identifierPrefix, i;
      if (zr()) {
        var u = cT();
        i = ":" + a + "R" + u;
        var s = xp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = BT++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function fm() {
      var e = Di(), t = e.memoizedState;
      return t;
    }
    function GT(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = $o(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YE(e))
        IE(t, u);
      else {
        var s = SE(e, t, u, i);
        if (s !== null) {
          var f = ba();
          vr(s, e, i, f), QE(s, t, i);
        }
      }
      WE(e, i);
    }
    function qT(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = $o(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (YE(e))
        IE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === $ && (s === null || s.lanes === $)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = fe.current, fe.current = tl;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Se(y, v)) {
                MT(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              fe.current = p;
            }
          }
        }
        var g = SE(e, t, u, i);
        if (g !== null) {
          var w = ba();
          vr(g, e, i, w), QE(g, t, i);
        }
      }
      WE(e, i);
    }
    function YE(e) {
      var t = e.alternate;
      return e === Gt || t !== null && t === Gt;
    }
    function IE(e, t) {
      Ep = Jh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function QE(e, t, a) {
      if (Nd(a)) {
        var i = t.lanes;
        i = Yc(i, e.pendingLanes);
        var u = Ke(i, a);
        t.lanes = u, Od(e, u);
      }
    }
    function WE(e, t, a) {
      ms(e, t);
    }
    var dm = {
      readContext: nr,
      useCallback: sa,
      useContext: sa,
      useEffect: sa,
      useImperativeHandle: sa,
      useInsertionEffect: sa,
      useLayoutEffect: sa,
      useMemo: sa,
      useReducer: sa,
      useRef: sa,
      useState: sa,
      useDebugValue: sa,
      useDeferredValue: sa,
      useTransition: sa,
      useMutableSource: sa,
      useSyncExternalStore: sa,
      useId: sa,
      unstable_isNewReconciler: J
    }, GE = null, qE = null, KE = null, XE = null, Pl = null, tl = null, pm = null;
    {
      var Yg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, We = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      GE = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Bt(), Mf(t), Hg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Bt(), nr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Bt(), Mf(t), am(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Bt(), Mf(a), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Bt(), Mf(t), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Bt(), Mf(t), Ag(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Bt(), Mf(t);
          var a = fe.current;
          fe.current = Pl;
          try {
            return Pg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Bt();
          var i = fe.current;
          fe.current = Pl;
          try {
            return Dg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Bt(), Ug(e);
        },
        useState: function(e) {
          B = "useState", Bt();
          var t = fe.current;
          fe.current = Pl;
          try {
            return tm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Bt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Bt(), Vg(e);
        },
        useTransition: function() {
          return B = "useTransition", Bt(), Bg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Bt(), Lg(e, t, a);
        },
        useId: function() {
          return B = "useId", Bt(), $g();
        },
        unstable_isNewReconciler: J
      }, qE = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", ae(), Hg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", ae(), nr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", ae(), am(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", ae(), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", ae(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", ae(), Ag(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", ae();
          var a = fe.current;
          fe.current = Pl;
          try {
            return Pg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", ae();
          var i = fe.current;
          fe.current = Pl;
          try {
            return Dg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", ae(), Ug(e);
        },
        useState: function(e) {
          B = "useState", ae();
          var t = fe.current;
          fe.current = Pl;
          try {
            return tm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", ae(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", ae(), Vg(e);
        },
        useTransition: function() {
          return B = "useTransition", ae(), Bg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", ae(), Lg(e, t, a);
        },
        useId: function() {
          return B = "useId", ae(), $g();
        },
        unstable_isNewReconciler: J
      }, KE = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", ae(), sm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", ae(), nr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", ae(), Tp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", ae(), um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", ae(), im(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", ae(), lm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", ae();
          var a = fe.current;
          fe.current = tl;
          try {
            return cm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", ae();
          var i = fe.current;
          fe.current = tl;
          try {
            return Ng(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", ae(), nm();
        },
        useState: function(e) {
          B = "useState", ae();
          var t = fe.current;
          fe.current = tl;
          try {
            return Mg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", ae(), om();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", ae(), FE(e);
        },
        useTransition: function() {
          return B = "useTransition", ae(), VE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", ae(), em(e, t);
        },
        useId: function() {
          return B = "useId", ae(), fm();
        },
        unstable_isNewReconciler: J
      }, XE = {
        readContext: function(e) {
          return nr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", ae(), sm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", ae(), nr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", ae(), Tp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", ae(), um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", ae(), im(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", ae(), lm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", ae();
          var a = fe.current;
          fe.current = pm;
          try {
            return cm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", ae();
          var i = fe.current;
          fe.current = pm;
          try {
            return Og(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", ae(), nm();
        },
        useState: function(e) {
          B = "useState", ae();
          var t = fe.current;
          fe.current = pm;
          try {
            return zg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", ae(), om();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", ae(), HE(e);
        },
        useTransition: function() {
          return B = "useTransition", ae(), BE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", ae(), em(e, t);
        },
        useId: function() {
          return B = "useId", ae(), fm();
        },
        unstable_isNewReconciler: J
      }, Pl = {
        readContext: function(e) {
          return Yg(), nr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", We(), Bt(), Hg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", We(), Bt(), nr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", We(), Bt(), am(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", We(), Bt(), Fg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", We(), Bt(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", We(), Bt(), Ag(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", We(), Bt();
          var a = fe.current;
          fe.current = Pl;
          try {
            return Pg(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", We(), Bt();
          var i = fe.current;
          fe.current = Pl;
          try {
            return Dg(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", We(), Bt(), Ug(e);
        },
        useState: function(e) {
          B = "useState", We(), Bt();
          var t = fe.current;
          fe.current = Pl;
          try {
            return tm(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", We(), Bt(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", We(), Bt(), Vg(e);
        },
        useTransition: function() {
          return B = "useTransition", We(), Bt(), Bg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", We(), Bt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", We(), Bt(), Lg(e, t, a);
        },
        useId: function() {
          return B = "useId", We(), Bt(), $g();
        },
        unstable_isNewReconciler: J
      }, tl = {
        readContext: function(e) {
          return Yg(), nr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", We(), ae(), sm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", We(), ae(), nr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", We(), ae(), Tp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", We(), ae(), um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", We(), ae(), im(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", We(), ae(), lm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", We(), ae();
          var a = fe.current;
          fe.current = tl;
          try {
            return cm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", We(), ae();
          var i = fe.current;
          fe.current = tl;
          try {
            return Ng(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", We(), ae(), nm();
        },
        useState: function(e) {
          B = "useState", We(), ae();
          var t = fe.current;
          fe.current = tl;
          try {
            return Mg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", We(), ae(), om();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", We(), ae(), FE(e);
        },
        useTransition: function() {
          return B = "useTransition", We(), ae(), VE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", We(), ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", We(), ae(), em(e, t);
        },
        useId: function() {
          return B = "useId", We(), ae(), fm();
        },
        unstable_isNewReconciler: J
      }, pm = {
        readContext: function(e) {
          return Yg(), nr(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", We(), ae(), sm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", We(), ae(), nr(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", We(), ae(), Tp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", We(), ae(), um(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", We(), ae(), im(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", We(), ae(), lm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", We(), ae();
          var a = fe.current;
          fe.current = tl;
          try {
            return cm(e, t);
          } finally {
            fe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", We(), ae();
          var i = fe.current;
          fe.current = tl;
          try {
            return Og(e, t, a);
          } finally {
            fe.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", We(), ae(), nm();
        },
        useState: function(e) {
          B = "useState", We(), ae();
          var t = fe.current;
          fe.current = tl;
          try {
            return zg(e);
          } finally {
            fe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", We(), ae(), om();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", We(), ae(), HE(e);
        },
        useTransition: function() {
          return B = "useTransition", We(), ae(), BE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", We(), ae(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", We(), ae(), em(e, t);
        },
        useId: function() {
          return B = "useId", We(), ae(), fm();
        },
        unstable_isNewReconciler: J
      };
    }
    var Ho = X.unstable_now, ZE = 0, vm = -1, bp = -1, hm = -1, Ig = !1, mm = !1;
    function JE() {
      return Ig;
    }
    function KT() {
      mm = !0;
    }
    function XT() {
      Ig = !1, mm = !1;
    }
    function ZT() {
      Ig = mm, mm = !1;
    }
    function ex() {
      return ZE;
    }
    function tx() {
      ZE = Ho();
    }
    function Qg(e) {
      bp = Ho(), e.actualStartTime < 0 && (e.actualStartTime = Ho());
    }
    function nx(e) {
      bp = -1;
    }
    function ym(e, t) {
      if (bp >= 0) {
        var a = Ho() - bp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), bp = -1;
      }
    }
    function Vl(e) {
      if (vm >= 0) {
        var t = Ho() - vm;
        vm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ne:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case vt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Wg(e) {
      if (hm >= 0) {
        var t = Ho() - hm;
        hm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ne:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case vt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Bl() {
      vm = Ho();
    }
    function Gg() {
      hm = Ho();
    }
    function qg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function nl(e, t) {
      if (e && e.defaultProps) {
        var a = it({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Kg = {}, Xg, Zg, Jg, e0, t0, rx, gm, n0, r0, a0, wp;
    {
      Xg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), e0 = /* @__PURE__ */ new Set(), n0 = /* @__PURE__ */ new Set(), t0 = /* @__PURE__ */ new Set(), r0 = /* @__PURE__ */ new Set(), a0 = /* @__PURE__ */ new Set(), wp = /* @__PURE__ */ new Set();
      var ax = /* @__PURE__ */ new Set();
      gm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          ax.has(a) || (ax.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, rx = function(e, t) {
        if (t === void 0) {
          var a = St(e) || "Component";
          t0.has(a) || (t0.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Kg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Kg);
    }
    function i0(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & ft) {
          An(!0);
          try {
            s = a(i, u);
          } finally {
            An(!1);
          }
        }
        rx(t, s);
      }
      var f = s == null ? u : it({}, u, s);
      if (e.memoizedState = f, e.lanes === $) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var l0 = {
      isMounted: Sa,
      enqueueSetState: function(e, t, a) {
        var i = Ma(e), u = ba(), s = $o(i), f = bu(u, s);
        f.payload = t, a != null && (gm(a, "setState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (vr(p, i, s, u), Wh(p, i, s)), ms(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ma(e), u = ba(), s = $o(i), f = bu(u, s);
        f.tag = xE, f.payload = t, a != null && (gm(a, "replaceState"), f.callback = a);
        var p = Uo(i, f, s);
        p !== null && (vr(p, i, s, u), Wh(p, i, s)), ms(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ma(e), i = ba(), u = $o(a), s = bu(i, u);
        s.tag = Yh, t != null && (gm(t, "forceUpdate"), s.callback = t);
        var f = Uo(a, s, u);
        f !== null && (vr(f, a, u, i), Wh(f, a, u)), _c(a, u);
      }
    };
    function ix(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & ft) {
            An(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              An(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", St(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !He(a, i) || !He(u, s) : !0;
    }
    function JT(e, t, a) {
      var i = e.stateNode;
      {
        var u = St(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !wp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ft) === Ce && (wp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !wp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ft) === Ce && (wp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !r0.has(t) && (r0.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", St(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Jg.has(t) && (Jg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", St(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || Et(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function lx(e, t) {
      t.updater = l0, e.stateNode = t, Xu(t, e), t._reactInternalInstance = Kg;
    }
    function ux(e, t, a) {
      var i = !1, u = oi, s = oi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === I && f._context === void 0
        );
        if (!p && !a0.has(t)) {
          a0.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === C ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", St(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = nr(f);
      else {
        u = xf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Cf(e, u) : oi;
      }
      var g = new t(a, s);
      if (e.mode & ft) {
        An(!0);
        try {
          g = new t(a, s);
        } finally {
          An(!1);
        }
      }
      var w = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      lx(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && w === null) {
          var T = St(t) || "Component";
          Zg.has(T) || (Zg.add(T), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", T, g.state === null ? "null" : "undefined", T));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, j = null, H = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? j = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (j = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), M !== null || j !== null || H !== null) {
            var ue = St(t) || "Component", Le = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            e0.has(ue) || (e0.add(ue), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ue, Le, M !== null ? `
  ` + M : "", j !== null ? `
  ` + j : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return i && KS(e, u, s), g;
    }
    function eb(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Qe(e) || "Component"), l0.enqueueReplaceState(t, t.state, null));
    }
    function ox(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Qe(e) || "Component";
          Xg.has(s) || (Xg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        l0.enqueueReplaceState(t, t.state, null);
      }
    }
    function u0(e, t, a, i) {
      JT(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, mg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = nr(s);
      else {
        var f = xf(e, t, !0);
        u.context = Cf(e, f);
      }
      {
        if (u.state === a) {
          var p = St(t) || "Component";
          n0.has(p) || (n0.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & ft && Ji.recordLegacyContextWarning(e, u), Ji.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (i0(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (eb(e, u), Gh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Ze;
        y |= Zr, (e.mode & xa) !== Ce && (y |= Jr), e.flags |= y;
      }
    }
    function tb(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = oi;
      if (typeof p == "object" && p !== null)
        v = nr(p);
      else {
        var y = xf(e, t, !0);
        v = Cf(e, y);
      }
      var g = t.getDerivedStateFromProps, w = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !w && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && ox(e, u, a, v), RE();
      var T = e.memoizedState, M = u.state = T;
      if (Gh(e, a, u, i), M = e.memoizedState, s === a && T === M && !Dh() && !qh()) {
        if (typeof u.componentDidMount == "function") {
          var j = Ze;
          j |= Zr, (e.mode & xa) !== Ce && (j |= Jr), e.flags |= j;
        }
        return !1;
      }
      typeof g == "function" && (i0(e, t, g, a), M = e.memoizedState);
      var H = qh() || ix(e, t, s, a, T, M, v);
      if (H) {
        if (!w && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ue = Ze;
          ue |= Zr, (e.mode & xa) !== Ce && (ue |= Jr), e.flags |= ue;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Le = Ze;
          Le |= Zr, (e.mode & xa) !== Ce && (Le |= Jr), e.flags |= Le;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, H;
    }
    function nb(e, t, a, i, u) {
      var s = t.stateNode;
      CE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, w = oi;
      if (typeof g == "object" && g !== null)
        w = nr(g);
      else {
        var T = xf(t, a, !0);
        w = Cf(t, T);
      }
      var M = a.getDerivedStateFromProps, j = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !j && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== w) && ox(t, s, i, w), RE();
      var H = t.memoizedState, ue = s.state = H;
      if (Gh(t, i, s, u), ue = t.memoizedState, f === v && H === ue && !Dh() && !qh() && !_e)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Ze), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= za), !1;
      typeof M == "function" && (i0(t, a, M, i), ue = t.memoizedState);
      var Le = qh() || ix(t, a, p, i, H, ue, w) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      _e;
      return Le ? (!j && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ue, w), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ue, w)), typeof s.componentDidUpdate == "function" && (t.flags |= Ze), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= za)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Ze), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= za), t.memoizedProps = i, t.memoizedState = ue), s.props = i, s.state = ue, s.context = w, Le;
    }
    function Ws(e, t) {
      return {
        value: e,
        source: t,
        stack: Fu(t),
        digest: null
      };
    }
    function o0(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function rb(e, t) {
      return !0;
    }
    function s0(e, t) {
      try {
        var a = rb(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === pe)
            return;
          console.error(i);
        }
        var p = u ? Qe(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === ne)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Qe(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var w = v + `
` + f + `

` + ("" + y);
        console.error(w);
      } catch (T) {
        setTimeout(function() {
          throw T;
        });
      }
    }
    var ab = typeof WeakMap == "function" ? WeakMap : Map;
    function sx(e, t, a) {
      var i = bu(nn, a);
      i.tag = vg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Kw(u), s0(e, t);
      }, i;
    }
    function c0(e, t, a) {
      var i = bu(nn, a);
      i.tag = vg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          EC(e), s0(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        EC(e), s0(e, t), typeof u != "function" && Gw(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (ia(e.lanes, De) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Qe(e) || "Unknown"));
      }), i;
    }
    function cx(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ab(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Xw.bind(null, e, t, a);
        Ea && $p(e, a), t.then(s, s);
      }
    }
    function ib(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function lb(e, t) {
      var a = e.tag;
      if ((e.mode & be) === Ce && (a === de || a === Ge || a === Pe)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function fx(e) {
      var t = e;
      do {
        if (t.tag === Ne && PT(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function dx(e, t, a, i, u) {
      if ((e.mode & be) === Ce) {
        if (e === t)
          e.flags |= Zn;
        else {
          if (e.flags |= Ye, a.flags |= ps, a.flags &= ~(hc | ya), a.tag === pe) {
            var s = a.alternate;
            if (s === null)
              a.tag = _n;
            else {
              var f = bu(nn, De);
              f.tag = Yh, Uo(a, f, De);
            }
          }
          a.lanes = Ke(a.lanes, De);
        }
        return e;
      }
      return e.flags |= Zn, e.lanes = u, e;
    }
    function ub(e, t, a, i, u) {
      if (a.flags |= ya, Ea && $p(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        lb(a), zr() && a.mode & be && rE();
        var f = fx(t);
        if (f !== null) {
          f.flags &= ~Rn, dx(f, t, a, e, u), f.mode & be && cx(e, s, u), ib(f, e, s);
          return;
        } else {
          if (!Dd(u)) {
            cx(e, s, u), $0();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (zr() && a.mode & be) {
        rE();
        var v = fx(t);
        if (v !== null) {
          (v.flags & Zn) === Oe && (v.flags |= Rn), dx(v, t, a, e, u), ng(Ws(i, a));
          return;
        }
      }
      i = Ws(i, a), Pw(i);
      var y = t;
      do {
        switch (y.tag) {
          case ne: {
            var g = i;
            y.flags |= Zn;
            var w = fo(u);
            y.lanes = Ke(y.lanes, w);
            var T = sx(y, g, w);
            yg(y, T);
            return;
          }
          case pe:
            var M = i, j = y.type, H = y.stateNode;
            if ((y.flags & Ye) === Oe && (typeof j.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && !fC(H))) {
              y.flags |= Zn;
              var ue = fo(u);
              y.lanes = Ke(y.lanes, ue);
              var Le = c0(y, M, ue);
              yg(y, Le);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ob() {
      return null;
    }
    var _p = A.ReactCurrentOwner, rl = !1, f0, kp, d0, p0, v0, Gs, h0, Sm, Dp;
    f0 = {}, kp = {}, d0 = {}, p0 = {}, v0 = {}, Gs = !1, h0 = {}, Sm = {}, Dp = {};
    function Ra(e, t, a, i) {
      e === null ? t.child = hE(t, null, a, i) : t.child = wf(t, e.child, a, i);
    }
    function sb(e, t, a, i) {
      t.child = wf(t, e.child, null, i), t.child = wf(t, null, a, i);
    }
    function px(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xi(
          s,
          i,
          // Resolved props
          "prop",
          St(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      kf(t, u), to(t);
      {
        if (_p.current = t, qr(!0), v = zf(e, t, f, i, p, u), y = Uf(), t.mode & ft) {
          An(!0);
          try {
            v = zf(e, t, f, i, p, u), y = Uf();
          } finally {
            An(!1);
          }
        }
        qr(!1);
      }
      return na(), e !== null && !rl ? (DE(e, t, u), wu(e, t, u)) : (zr() && y && Ky(t), t.flags |= Tl, Ra(e, t, v, u), t.child);
    }
    function vx(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (v_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = $f(s), t.tag = Pe, t.type = f, g0(t, s), hx(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Xi(
            p,
            i,
            // Resolved props
            "prop",
            St(s)
          ), a.defaultProps !== void 0) {
            var v = St(s) || "Unknown";
            Dp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Dp[v] = !0);
          }
        }
        var y = eS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, w = g.propTypes;
        w && Xi(
          w,
          i,
          // Resolved props
          "prop",
          St(g)
        );
      }
      var T = e.child, M = T0(e, u);
      if (!M) {
        var j = T.memoizedProps, H = a.compare;
        if (H = H !== null ? H : He, H(j, i) && e.ref === t.ref)
          return wu(e, t, u);
      }
      t.flags |= Tl;
      var ue = Js(T, i);
      return ue.ref = t.ref, ue.return = t, t.child = ue, ue;
    }
    function hx(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === je) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Xi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            St(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (He(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (rl = !1, t.pendingProps = i = g, T0(e, u))
            (e.flags & ps) !== Oe && (rl = !0);
          else return t.lanes = e.lanes, wu(e, t, u);
      }
      return m0(e, t, a, i, u);
    }
    function mx(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ie)
        if ((t.mode & be) === Ce) {
          var f = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Lm(t, a);
        } else if (ia(a, Cr)) {
          var w = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = w;
          var T = s !== null ? s.baseLanes : a;
          Lm(t, T);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Ke(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Cr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Lm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = Ke(s.baseLanes, a), t.memoizedState = null) : M = a, Lm(t, M);
      }
      return Ra(e, t, u, a), t.child;
    }
    function cb(e, t, a) {
      var i = t.pendingProps;
      return Ra(e, t, i, a), t.child;
    }
    function fb(e, t, a) {
      var i = t.pendingProps.children;
      return Ra(e, t, i, a), t.child;
    }
    function db(e, t, a) {
      {
        t.flags |= Ze;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ra(e, t, s, a), t.child;
    }
    function yx(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Xr, t.flags |= md);
    }
    function m0(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Xi(
          s,
          i,
          // Resolved props
          "prop",
          St(a)
        );
      }
      var f;
      {
        var p = xf(t, a, !0);
        f = Cf(t, p);
      }
      var v, y;
      kf(t, u), to(t);
      {
        if (_p.current = t, qr(!0), v = zf(e, t, a, i, f, u), y = Uf(), t.mode & ft) {
          An(!0);
          try {
            v = zf(e, t, a, i, f, u), y = Uf();
          } finally {
            An(!1);
          }
        }
        qr(!1);
      }
      return na(), e !== null && !rl ? (DE(e, t, u), wu(e, t, u)) : (zr() && y && Ky(t), t.flags |= Tl, Ra(e, t, v, u), t.child);
    }
    function gx(e, t, a, i, u) {
      {
        switch (D_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ye, t.flags |= Zn;
            var y = new Error("Simulated error coming from DevTools"), g = fo(u);
            t.lanes = Ke(t.lanes, g);
            var w = c0(t, Ws(y, t), g);
            yg(t, w);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var T = a.propTypes;
          T && Xi(
            T,
            i,
            // Resolved props
            "prop",
            St(a)
          );
        }
      }
      var M;
      Al(a) ? (M = !0, Oh(t)) : M = !1, kf(t, u);
      var j = t.stateNode, H;
      j === null ? (xm(e, t), ux(t, a, i), u0(t, a, i, u), H = !0) : e === null ? H = tb(t, a, i, u) : H = nb(e, t, a, i, u);
      var ue = y0(e, t, a, H, M, u);
      {
        var Le = t.stateNode;
        H && Le.props !== i && (Gs || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Qe(t) || "a component"), Gs = !0);
      }
      return ue;
    }
    function y0(e, t, a, i, u, s) {
      yx(e, t);
      var f = (t.flags & Ye) !== Oe;
      if (!i && !f)
        return u && JS(t, a, !1), wu(e, t, s);
      var p = t.stateNode;
      _p.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, nx();
      else {
        to(t);
        {
          if (qr(!0), v = p.render(), t.mode & ft) {
            An(!0);
            try {
              p.render();
            } finally {
              An(!1);
            }
          }
          qr(!1);
        }
        na();
      }
      return t.flags |= Tl, e !== null && f ? sb(e, t, v, s) : Ra(e, t, v, s), t.memoizedState = p.state, u && JS(t, a, !0), t.child;
    }
    function Sx(e) {
      var t = e.stateNode;
      t.pendingContext ? XS(e, t.pendingContext, t.pendingContext !== t.context) : t.context && XS(e, t.context, !1), gg(e, t.containerInfo);
    }
    function pb(e, t, a) {
      if (Sx(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      CE(e, t), Gh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Rn) {
          var g = Ws(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Ex(e, t, p, a, g);
        } else if (p !== s) {
          var w = Ws(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Ex(e, t, p, a, w);
        } else {
          mT(t);
          var T = hE(t, null, p, a);
          t.child = T;
          for (var M = T; M; )
            M.flags = M.flags & ~ln | Ua, M = M.sibling;
        }
      } else {
        if (bf(), p === s)
          return wu(e, t, a);
        Ra(e, t, p, a);
      }
      return t.child;
    }
    function Ex(e, t, a, i, u) {
      return bf(), ng(u), t.flags |= Rn, Ra(e, t, a, i), t.child;
    }
    function vb(e, t, a) {
      wE(t), e === null && tg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = jy(i, u);
      return p ? f = null : s !== null && jy(i, s) && (t.flags |= Vt), yx(e, t), Ra(e, t, f, a), t.child;
    }
    function hb(e, t) {
      return e === null && tg(t), null;
    }
    function mb(e, t, a, i) {
      xm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = h_(v), g = nl(v, u), w;
      switch (y) {
        case de:
          return g0(t, v), t.type = v = $f(v), w = m0(null, t, v, g, i), w;
        case pe:
          return t.type = v = G0(v), w = gx(null, t, v, g, i), w;
        case Ge:
          return t.type = v = q0(v), w = px(null, t, v, g, i), w;
        case st: {
          if (t.type !== t.elementType) {
            var T = v.propTypes;
            T && Xi(
              T,
              g,
              // Resolved for outer only
              "prop",
              St(v)
            );
          }
          return w = vx(
            null,
            t,
            v,
            nl(v.type, g),
            // The inner type can have defaults too
            i
          ), w;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === je && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function yb(e, t, a, i, u) {
      xm(e, t), t.tag = pe;
      var s;
      return Al(a) ? (s = !0, Oh(t)) : s = !1, kf(t, u), ux(t, a, i), u0(t, a, i, u), y0(null, t, a, !0, s, u);
    }
    function gb(e, t, a, i) {
      xm(e, t);
      var u = t.pendingProps, s;
      {
        var f = xf(t, a, !1);
        s = Cf(t, f);
      }
      kf(t, i);
      var p, v;
      to(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = St(a) || "Unknown";
          f0[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), f0[y] = !0);
        }
        t.mode & ft && Ji.recordLegacyContextWarning(t, null), qr(!0), _p.current = t, p = zf(null, t, a, u, s, i), v = Uf(), qr(!1);
      }
      if (na(), t.flags |= Tl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = St(a) || "Unknown";
        kp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), kp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var w = St(a) || "Unknown";
          kp[w] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", w, w, w), kp[w] = !0);
        }
        t.tag = pe, t.memoizedState = null, t.updateQueue = null;
        var T = !1;
        return Al(a) ? (T = !0, Oh(t)) : T = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, mg(t), lx(t, p), u0(t, a, u, i), y0(null, t, a, !0, T, i);
      } else {
        if (t.tag = de, t.mode & ft) {
          An(!0);
          try {
            p = zf(null, t, a, u, s, i), v = Uf();
          } finally {
            An(!1);
          }
        }
        return zr() && v && Ky(t), Ra(null, t, p, i), g0(t, a), t.child;
      }
    }
    function g0(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Or();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), v0[u] || (v0[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = St(t) || "Unknown";
          Dp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Dp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = St(t) || "Unknown";
          p0[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), p0[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = St(t) || "Unknown";
          d0[v] || (S("%s: Function components do not support contextType.", v), d0[v] = !0);
        }
      }
    }
    var S0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: Fn
    };
    function E0(e) {
      return {
        baseLanes: e,
        cachePool: ob(),
        transitions: null
      };
    }
    function Sb(e, t) {
      var a = null;
      return {
        baseLanes: Ke(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Eb(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return xg(e, gp);
    }
    function xb(e, t) {
      return Rs(e.childLanes, t);
    }
    function xx(e, t, a) {
      var i = t.pendingProps;
      N_(t) && (t.flags |= Ye);
      var u = el.current, s = !1, f = (t.flags & Ye) !== Oe;
      if (f || Eb(u, e) ? (s = !0, t.flags &= ~Ye) : (e === null || e.memoizedState !== null) && (u = HT(u, kE)), u = Nf(u), Ao(t, u), e === null) {
        tg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return wb(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var w = Cb(t, y, g, a), T = t.child;
          return T.memoizedState = E0(a), t.memoizedState = S0, w;
        } else
          return x0(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var j = M.dehydrated;
          if (j !== null)
            return _b(e, t, f, i, j, M, a);
        }
        if (s) {
          var H = i.fallback, ue = i.children, Le = Tb(e, t, ue, H, a), we = t.child, Rt = e.child.memoizedState;
          return we.memoizedState = Rt === null ? E0(a) : Sb(Rt, a), we.childLanes = xb(e, a), t.memoizedState = S0, Le;
        } else {
          var mt = i.children, N = Rb(e, t, mt, a);
          return t.memoizedState = null, N;
        }
      }
    }
    function x0(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = C0(u, i);
      return s.return = e, e.child = s, s;
    }
    function Cb(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & be) === Ce && s !== null ? (p = s, p.childLanes = $, p.pendingProps = f, e.mode & Ie && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Io(a, u, i, null)) : (p = C0(f, u), v = Io(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function C0(e, t, a) {
      return CC(e, t, $, null);
    }
    function Cx(e, t) {
      return Js(e, t);
    }
    function Rb(e, t, a, i) {
      var u = e.child, s = u.sibling, f = Cx(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & be) === Ce && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= zt) : p.push(s);
      }
      return t.child = f, f;
    }
    function Tb(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & be) === Ce && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = $, y.pendingProps = v, t.mode & Ie && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = Cx(f, v), y.subtreeFlags = f.subtreeFlags & ar;
      var w;
      return p !== null ? w = Js(p, i) : (w = Io(i, s, u, null), w.flags |= ln), w.return = t, y.return = t, y.sibling = w, t.child = y, w;
    }
    function Em(e, t, a, i) {
      i !== null && ng(i), wf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = x0(t, s);
      return f.flags |= ln, t.memoizedState = null, f;
    }
    function bb(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = C0(f, s), v = Io(i, s, u, null);
      return v.flags |= ln, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & be) !== Ce && wf(t, e.child, null, u), v;
    }
    function wb(e, t, a) {
      return (e.mode & be) === Ce ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = De) : Py(t) ? e.lanes = Qi : e.lanes = Cr, null;
    }
    function _b(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Rn) {
          t.flags &= ~Rn;
          var N = o0(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Em(e, t, f, N);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ye, null;
          var P = i.children, O = i.fallback, G = bb(e, t, P, O, f), ve = t.child;
          return ve.memoizedState = E0(f), t.memoizedState = S0, G;
        }
      else {
        if (vT(), (t.mode & be) === Ce)
          return Em(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Py(u)) {
          var p, v, y;
          {
            var g = OR(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var w;
          v ? w = new Error(v) : w = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var T = o0(w, p, y);
          return Em(e, t, f, T);
        }
        var M = ia(f, e.childLanes);
        if (rl || M) {
          var j = Om();
          if (j !== null) {
            var H = Qv(j, f);
            if (H !== Fn && H !== s.retryLane) {
              s.retryLane = H;
              var ue = nn;
              Wa(e, H), vr(j, e, H, ue);
            }
          }
          $0();
          var Le = o0(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Em(e, t, f, Le);
        } else if (IS(u)) {
          t.flags |= Ye, t.child = e.child;
          var we = Zw.bind(null, e);
          return LR(u, we), null;
        } else {
          yT(t, u, s.treeContext);
          var Rt = i.children, mt = x0(t, Rt);
          return mt.flags |= Ua, mt;
        }
      }
    }
    function Rx(e, t, a) {
      e.lanes = Ke(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ke(i.lanes, t)), dg(e.return, t, a);
    }
    function kb(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ne) {
          var u = i.memoizedState;
          u !== null && Rx(i, a, e);
        } else if (i.tag === _t)
          Rx(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Db(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Zh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Nb(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !h0[e])
        if (h0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Ob(e, t) {
      e !== void 0 && !Sm[e] && (e !== "collapsed" && e !== "hidden" ? (Sm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Sm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Tx(e, t) {
      {
        var a = Et(e), i = !a && typeof kr(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Lb(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Et(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Tx(e[a], a))
              return;
        } else {
          var i = kr(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!Tx(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function R0(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function bx(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Nb(u), Ob(s, u), Lb(f, u), Ra(e, t, f, a);
      var p = el.current, v = xg(p, gp);
      if (v)
        p = Cg(p, gp), t.flags |= Ye;
      else {
        var y = e !== null && (e.flags & Ye) !== Oe;
        y && kb(t, t.child, a), p = Nf(p);
      }
      if (Ao(t, p), (t.mode & be) === Ce)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Db(t.child), w;
            g === null ? (w = t.child, t.child = null) : (w = g.sibling, g.sibling = null), R0(
              t,
              !1,
              // isBackwards
              w,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var T = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var j = M.alternate;
              if (j !== null && Zh(j) === null) {
                t.child = M;
                break;
              }
              var H = M.sibling;
              M.sibling = T, T = M, M = H;
            }
            R0(
              t,
              !0,
              // isBackwards
              T,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            R0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Mb(e, t, a) {
      gg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = wf(t, null, i, a) : Ra(e, t, i, a), t.child;
    }
    var wx = !1;
    function zb(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || wx || (wx = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Xi(v, s, "prop", "Context.Provider");
      }
      if (gE(t, u, p), f !== null) {
        var y = f.value;
        if (Se(y, p)) {
          if (f.children === s.children && !Dh())
            return wu(e, t, a);
        } else
          NT(t, u, a);
      }
      var g = s.children;
      return Ra(e, t, g, a), t.child;
    }
    var _x = !1;
    function Ub(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (_x || (_x = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), kf(t, a);
      var f = nr(i);
      to(t);
      var p;
      return _p.current = t, qr(!0), p = s(f), qr(!1), na(), t.flags |= Tl, Ra(e, t, p, a), t.child;
    }
    function Np() {
      rl = !0;
    }
    function xm(e, t) {
      (t.mode & be) === Ce && e !== null && (e.alternate = null, t.alternate = null, t.flags |= ln);
    }
    function wu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), nx(), Bp(t.lanes), ia(a, t.childLanes) ? (kT(e, t), t.child) : null;
    }
    function jb(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= zt) : s.push(e), a.flags |= ln, a;
      }
    }
    function T0(e, t) {
      var a = e.lanes;
      return !!ia(a, t);
    }
    function Ab(e, t, a) {
      switch (t.tag) {
        case ne:
          Sx(t), t.stateNode, bf();
          break;
        case oe:
          wE(t);
          break;
        case pe: {
          var i = t.type;
          Al(i) && Oh(t);
          break;
        }
        case me:
          gg(t, t.stateNode.containerInfo);
          break;
        case lt: {
          var u = t.memoizedProps.value, s = t.type._context;
          gE(t, s, u);
          break;
        }
        case vt:
          {
            var f = ia(a, t.childLanes);
            f && (t.flags |= Ze);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ne: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ao(t, Nf(el.current)), t.flags |= Ye, null;
            var y = t.child, g = y.childLanes;
            if (ia(a, g))
              return xx(e, t, a);
            Ao(t, Nf(el.current));
            var w = wu(e, t, a);
            return w !== null ? w.sibling : null;
          } else
            Ao(t, Nf(el.current));
          break;
        }
        case _t: {
          var T = (e.flags & Ye) !== Oe, M = ia(a, t.childLanes);
          if (T) {
            if (M)
              return bx(e, t, a);
            t.flags |= Ye;
          }
          var j = t.memoizedState;
          if (j !== null && (j.rendering = null, j.tail = null, j.lastEffect = null), Ao(t, el.current), M)
            break;
          return null;
        }
        case ze:
        case Xe:
          return t.lanes = $, mx(e, t, a);
      }
      return wu(e, t, a);
    }
    function kx(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return jb(e, t, eS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Dh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          rl = !0;
        else {
          var s = T0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ye) === Oe)
            return rl = !1, Ab(e, t, a);
          (e.flags & ps) !== Oe ? rl = !0 : rl = !1;
        }
      } else if (rl = !1, zr() && oT(t)) {
        var f = t.index, p = sT();
        nE(t, p, f);
      }
      switch (t.lanes = $, t.tag) {
        case tt:
          return gb(e, t, t.type, a);
        case rn: {
          var v = t.elementType;
          return mb(e, t, v, a);
        }
        case de: {
          var y = t.type, g = t.pendingProps, w = t.elementType === y ? g : nl(y, g);
          return m0(e, t, y, w, a);
        }
        case pe: {
          var T = t.type, M = t.pendingProps, j = t.elementType === T ? M : nl(T, M);
          return gx(e, t, T, j, a);
        }
        case ne:
          return pb(e, t, a);
        case oe:
          return vb(e, t, a);
        case $e:
          return hb(e, t);
        case Ne:
          return xx(e, t, a);
        case me:
          return Mb(e, t, a);
        case Ge: {
          var H = t.type, ue = t.pendingProps, Le = t.elementType === H ? ue : nl(H, ue);
          return px(e, t, H, Le, a);
        }
        case Tt:
          return cb(e, t, a);
        case pt:
          return fb(e, t, a);
        case vt:
          return db(e, t, a);
        case lt:
          return zb(e, t, a);
        case pn:
          return Ub(e, t, a);
        case st: {
          var we = t.type, Rt = t.pendingProps, mt = nl(we, Rt);
          if (t.type !== t.elementType) {
            var N = we.propTypes;
            N && Xi(
              N,
              mt,
              // Resolved for outer only
              "prop",
              St(we)
            );
          }
          return mt = nl(we.type, mt), vx(e, t, we, mt, a);
        }
        case Pe:
          return hx(e, t, t.type, t.pendingProps, a);
        case _n: {
          var P = t.type, O = t.pendingProps, G = t.elementType === P ? O : nl(P, O);
          return yb(e, t, P, G, a);
        }
        case _t:
          return bx(e, t, a);
        case xn:
          break;
        case ze:
          return mx(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jf(e) {
      e.flags |= Ze;
    }
    function Dx(e) {
      e.flags |= Xr, e.flags |= md;
    }
    var Nx, b0, Ox, Lx;
    Nx = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === oe || u.tag === $e)
          iR(e, u.stateNode);
        else if (u.tag !== me) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, b0 = function(e, t) {
    }, Ox = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Sg(), v = uR(f, a, s, i, u, p);
        t.updateQueue = v, v && jf(t);
      }
    }, Lx = function(e, t, a, i) {
      a !== i && jf(t);
    };
    function Op(e, t) {
      if (!zr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function jr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = $, i = Oe;
      if (t) {
        if ((e.mode & Ie) !== Ce) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Ke(a, Ke(y.lanes, y.childLanes)), i |= y.subtreeFlags & ar, i |= y.flags & ar, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Ke(a, Ke(g.lanes, g.childLanes)), i |= g.subtreeFlags & ar, i |= g.flags & ar, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ie) !== Ce) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ke(a, Ke(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ke(a, Ke(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Fb(e, t, a) {
      if (CT() && (t.mode & be) !== Ce && (t.flags & Ye) === Oe)
        return sE(t), bf(), t.flags |= Rn | ya | Zn, !1;
      var i = jh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (ET(t), jr(t), (t.mode & Ie) !== Ce) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (bf(), (t.flags & Ye) === Oe && (t.memoizedState = null), t.flags |= Ze, jr(t), (t.mode & Ie) !== Ce) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return cE(), !0;
    }
    function Mx(e, t, a) {
      var i = t.pendingProps;
      switch (Xy(t), t.tag) {
        case tt:
        case rn:
        case Pe:
        case de:
        case Ge:
        case Tt:
        case pt:
        case vt:
        case pn:
        case st:
          return jr(t), null;
        case pe: {
          var u = t.type;
          return Al(u) && Nh(t), jr(t), null;
        }
        case ne: {
          var s = t.stateNode;
          if (Df(t), Wy(t), Tg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = jh(t);
            if (f)
              jf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rn) !== Oe) && (t.flags |= za, cE());
            }
          }
          return b0(e, t), jr(t), null;
        }
        case oe: {
          Eg(t);
          var v = bE(), y = t.type;
          if (e !== null && t.stateNode != null)
            Ox(e, t, y, i, v), e.ref !== t.ref && Dx(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return jr(t), null;
            }
            var g = Sg(), w = jh(t);
            if (w)
              gT(t, v, g) && jf(t);
            else {
              var T = aR(y, i, v, g, t);
              Nx(T, t, !1, !1), t.stateNode = T, lR(T, y, i, v) && jf(t);
            }
            t.ref !== null && Dx(t);
          }
          return jr(t), null;
        }
        case $e: {
          var M = i;
          if (e && t.stateNode != null) {
            var j = e.memoizedProps;
            Lx(e, t, j, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var H = bE(), ue = Sg(), Le = jh(t);
            Le ? ST(t) && jf(t) : t.stateNode = oR(M, H, ue, t);
          }
          return jr(t), null;
        }
        case Ne: {
          Of(t);
          var we = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Rt = Fb(e, t, we);
            if (!Rt)
              return t.flags & Zn ? t : null;
          }
          if ((t.flags & Ye) !== Oe)
            return t.lanes = a, (t.mode & Ie) !== Ce && qg(t), t;
          var mt = we !== null, N = e !== null && e.memoizedState !== null;
          if (mt !== N && mt) {
            var P = t.child;
            if (P.flags |= bl, (t.mode & be) !== Ce) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !k);
              O || xg(el.current, kE) ? Hw() : $0();
            }
          }
          var G = t.updateQueue;
          if (G !== null && (t.flags |= Ze), jr(t), (t.mode & Ie) !== Ce && mt) {
            var ve = t.child;
            ve !== null && (t.treeBaseDuration -= ve.treeBaseDuration);
          }
          return null;
        }
        case me:
          return Df(t), b0(e, t), e === null && tT(t.stateNode.containerInfo), jr(t), null;
        case lt:
          var se = t.type._context;
          return fg(se, t), jr(t), null;
        case _n: {
          var Be = t.type;
          return Al(Be) && Nh(t), jr(t), null;
        }
        case _t: {
          Of(t);
          var qe = t.memoizedState;
          if (qe === null)
            return jr(t), null;
          var qt = (t.flags & Ye) !== Oe, Ot = qe.rendering;
          if (Ot === null)
            if (qt)
              Op(qe, !1);
            else {
              var Qn = Vw() && (e === null || (e.flags & Ye) === Oe);
              if (!Qn)
                for (var Lt = t.child; Lt !== null; ) {
                  var Hn = Zh(Lt);
                  if (Hn !== null) {
                    qt = !0, t.flags |= Ye, Op(qe, !1);
                    var ca = Hn.updateQueue;
                    return ca !== null && (t.updateQueue = ca, t.flags |= Ze), t.subtreeFlags = Oe, DT(t, a), Ao(t, Cg(el.current, gp)), t.child;
                  }
                  Lt = Lt.sibling;
                }
              qe.tail !== null && gn() > eC() && (t.flags |= Ye, qt = !0, Op(qe, !1), t.lanes = Uv);
            }
          else {
            if (!qt) {
              var Vr = Zh(Ot);
              if (Vr !== null) {
                t.flags |= Ye, qt = !0;
                var ci = Vr.updateQueue;
                if (ci !== null && (t.updateQueue = ci, t.flags |= Ze), Op(qe, !0), qe.tail === null && qe.tailMode === "hidden" && !Ot.alternate && !zr())
                  return jr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              gn() * 2 - qe.renderingStartTime > eC() && a !== Cr && (t.flags |= Ye, qt = !0, Op(qe, !1), t.lanes = Uv);
            }
            if (qe.isBackwards)
              Ot.sibling = t.child, t.child = Ot;
            else {
              var wa = qe.last;
              wa !== null ? wa.sibling = Ot : t.child = Ot, qe.last = Ot;
            }
          }
          if (qe.tail !== null) {
            var _a = qe.tail;
            qe.rendering = _a, qe.tail = _a.sibling, qe.renderingStartTime = gn(), _a.sibling = null;
            var fa = el.current;
            return qt ? fa = Cg(fa, gp) : fa = Nf(fa), Ao(t, fa), _a;
          }
          return jr(t), null;
        }
        case xn:
          break;
        case ze:
        case Xe: {
          B0(t);
          var Ou = t.memoizedState, Yf = Ou !== null;
          if (e !== null) {
            var Wp = e.memoizedState, Il = Wp !== null;
            Il !== Yf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ie && (t.flags |= bl);
          }
          return !Yf || (t.mode & be) === Ce ? jr(t) : ia(Yl, Cr) && (jr(t), t.subtreeFlags & (ln | Ze) && (t.flags |= bl)), null;
        }
        case jt:
          return null;
        case bt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Hb(e, t, a) {
      switch (Xy(t), t.tag) {
        case pe: {
          var i = t.type;
          Al(i) && Nh(t);
          var u = t.flags;
          return u & Zn ? (t.flags = u & ~Zn | Ye, (t.mode & Ie) !== Ce && qg(t), t) : null;
        }
        case ne: {
          t.stateNode, Df(t), Wy(t), Tg();
          var s = t.flags;
          return (s & Zn) !== Oe && (s & Ye) === Oe ? (t.flags = s & ~Zn | Ye, t) : null;
        }
        case oe:
          return Eg(t), null;
        case Ne: {
          Of(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            bf();
          }
          var p = t.flags;
          return p & Zn ? (t.flags = p & ~Zn | Ye, (t.mode & Ie) !== Ce && qg(t), t) : null;
        }
        case _t:
          return Of(t), null;
        case me:
          return Df(t), null;
        case lt:
          var v = t.type._context;
          return fg(v, t), null;
        case ze:
        case Xe:
          return B0(t), null;
        case jt:
          return null;
        default:
          return null;
      }
    }
    function zx(e, t, a) {
      switch (Xy(t), t.tag) {
        case pe: {
          var i = t.type.childContextTypes;
          i != null && Nh(t);
          break;
        }
        case ne: {
          t.stateNode, Df(t), Wy(t), Tg();
          break;
        }
        case oe: {
          Eg(t);
          break;
        }
        case me:
          Df(t);
          break;
        case Ne:
          Of(t);
          break;
        case _t:
          Of(t);
          break;
        case lt:
          var u = t.type._context;
          fg(u, t);
          break;
        case ze:
        case Xe:
          B0(t);
          break;
      }
    }
    var Ux = null;
    Ux = /* @__PURE__ */ new Set();
    var Cm = !1, Ar = !1, Pb = typeof WeakSet == "function" ? WeakSet : Set, Ee = null, Af = null, Ff = null;
    function Vb(e) {
      nu(null, function() {
        throw e;
      }), vd();
    }
    var Bb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ie)
        try {
          Bl(), t.componentWillUnmount();
        } finally {
          Vl(e);
        }
      else
        t.componentWillUnmount();
    };
    function jx(e, t) {
      try {
        Po(or, e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function w0(e, t, a) {
      try {
        Bb(e, a);
      } catch (i) {
        sn(e, t, i);
      }
    }
    function $b(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        sn(e, t, i);
      }
    }
    function Ax(e, t) {
      try {
        Hx(e);
      } catch (a) {
        sn(e, t, a);
      }
    }
    function Hf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (et && yt && e.mode & Ie)
              try {
                Bl(), i = a(null);
              } finally {
                Vl(e);
              }
            else
              i = a(null);
          } catch (u) {
            sn(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Qe(e));
        } else
          a.current = null;
    }
    function Rm(e, t, a) {
      try {
        a();
      } catch (i) {
        sn(e, t, i);
      }
    }
    var Fx = !1;
    function Yb(e, t) {
      nR(e.containerInfo), Ee = t, Ib();
      var a = Fx;
      return Fx = !1, a;
    }
    function Ib() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        (e.subtreeFlags & Zu) !== Oe && t !== null ? (t.return = e, Ee = t) : Qb();
      }
    }
    function Qb() {
      for (; Ee !== null; ) {
        var e = Ee;
        Pt(e);
        try {
          Wb(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        Cn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function Wb(e) {
      var t = e.alternate, a = e.flags;
      if ((a & za) !== Oe) {
        switch (Pt(e), e.tag) {
          case de:
          case Ge:
          case Pe:
            break;
          case pe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Gs && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nl(e.type, i), u);
              {
                var p = Ux;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Qe(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ne: {
            {
              var v = e.stateNode;
              _R(v.containerInfo);
            }
            break;
          }
          case oe:
          case $e:
          case me:
          case _n:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Cn();
      }
    }
    function al(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Ur) !== Ga ? Lv(t) : (e & or) !== Ga && ui(t), (e & Fl) !== Ga && Yp(!0), Rm(t, a, p), (e & Fl) !== Ga && Yp(!1), (e & Ur) !== Ga ? Tc() : (e & or) !== Ga && no());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Po(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Ur) !== Ga ? kl(t) : (e & or) !== Ga && Mv(t);
            var f = s.create;
            (e & Fl) !== Ga && Yp(!0), s.destroy = f(), (e & Fl) !== Ga && Yp(!1), (e & Ur) !== Ga ? Rc() : (e & or) !== Ga && vs();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & or) !== Oe ? v = "useLayoutEffect" : (s.tag & Fl) !== Oe ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Gb(e, t) {
      if ((t.flags & Ze) !== Oe)
        switch (t.tag) {
          case vt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = ex(), p = t.alternate === null ? "mount" : "update";
            JE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case ne:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case vt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function qb(e, t, a, i) {
      if ((a.flags & Er) !== Oe)
        switch (a.tag) {
          case de:
          case Ge:
          case Pe: {
            if (!Ar)
              if (a.mode & Ie)
                try {
                  Bl(), Po(or | ur, a);
                } finally {
                  Vl(a);
                }
              else
                Po(or | ur, a);
            break;
          }
          case pe: {
            var u = a.stateNode;
            if (a.flags & Ze && !Ar)
              if (t === null)
                if (a.type === a.elementType && !Gs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), a.mode & Ie)
                  try {
                    Bl(), u.componentDidMount();
                  } finally {
                    Vl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Gs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), a.mode & Ie)
                  try {
                    Bl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Vl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Gs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Qe(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Qe(a) || "instance")), TE(a, p, u));
            break;
          }
          case ne: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case oe:
                    y = a.child.stateNode;
                    break;
                  case pe:
                    y = a.child.stateNode;
                    break;
                }
              TE(a, v, y);
            }
            break;
          }
          case oe: {
            var g = a.stateNode;
            if (t === null && a.flags & Ze) {
              var w = a.type, T = a.memoizedProps;
              pR(g, w, T);
            }
            break;
          }
          case $e:
            break;
          case me:
            break;
          case vt: {
            {
              var M = a.memoizedProps, j = M.onCommit, H = M.onRender, ue = a.stateNode.effectDuration, Le = ex(), we = t === null ? "mount" : "update";
              JE() && (we = "nested-update"), typeof H == "function" && H(a.memoizedProps.id, we, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Le);
              {
                typeof j == "function" && j(a.memoizedProps.id, we, ue, Le), Qw(a);
                var Rt = a.return;
                e: for (; Rt !== null; ) {
                  switch (Rt.tag) {
                    case ne:
                      var mt = Rt.stateNode;
                      mt.effectDuration += ue;
                      break e;
                    case vt:
                      var N = Rt.stateNode;
                      N.effectDuration += ue;
                      break e;
                  }
                  Rt = Rt.return;
                }
              }
            }
            break;
          }
          case Ne: {
            rw(e, a);
            break;
          }
          case _t:
          case _n:
          case xn:
          case ze:
          case Xe:
          case bt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ar || a.flags & Xr && Hx(a);
    }
    function Kb(e) {
      switch (e.tag) {
        case de:
        case Ge:
        case Pe: {
          if (e.mode & Ie)
            try {
              Bl(), jx(e, e.return);
            } finally {
              Vl(e);
            }
          else
            jx(e, e.return);
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && $b(e, e.return, t), Ax(e, e.return);
          break;
        }
        case oe: {
          Ax(e, e.return);
          break;
        }
      }
    }
    function Xb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === oe) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? RR(u) : bR(i.stateNode, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
          }
        } else if (i.tag === $e) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? TR(s) : wR(s, i.memoizedProps);
            } catch (f) {
              sn(e, e.return, f);
            }
        } else if (!((i.tag === ze || i.tag === Xe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Hx(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case oe:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ie)
            try {
              Bl(), u = t(i);
            } finally {
              Vl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Qe(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Qe(e)), t.current = i;
      }
    }
    function Zb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Px(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Px(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === oe) {
          var a = e.stateNode;
          a !== null && aT(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Jb(e) {
      for (var t = e.return; t !== null; ) {
        if (Vx(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Vx(e) {
      return e.tag === oe || e.tag === ne || e.tag === me;
    }
    function Bx(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Vx(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== oe && t.tag !== $e && t.tag !== Wt; ) {
          if (t.flags & ln || t.child === null || t.tag === me)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & ln))
          return t.stateNode;
      }
    }
    function ew(e) {
      var t = Jb(e);
      switch (t.tag) {
        case oe: {
          var a = t.stateNode;
          t.flags & Vt && (YS(a), t.flags &= ~Vt);
          var i = Bx(e);
          k0(e, i, a);
          break;
        }
        case ne:
        case me: {
          var u = t.stateNode.containerInfo, s = Bx(e);
          _0(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function _0(e, t, a) {
      var i = e.tag, u = i === oe || i === $e;
      if (u) {
        var s = e.stateNode;
        t ? SR(a, s, t) : yR(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          _0(f, t, a);
          for (var p = f.sibling; p !== null; )
            _0(p, t, a), p = p.sibling;
        }
      }
    }
    function k0(e, t, a) {
      var i = e.tag, u = i === oe || i === $e;
      if (u) {
        var s = e.stateNode;
        t ? gR(a, s, t) : mR(a, s);
      } else if (i !== me) {
        var f = e.child;
        if (f !== null) {
          k0(f, t, a);
          for (var p = f.sibling; p !== null; )
            k0(p, t, a), p = p.sibling;
        }
      }
    }
    var Fr = null, il = !1;
    function tw(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case oe: {
              Fr = i.stateNode, il = !1;
              break e;
            }
            case ne: {
              Fr = i.stateNode.containerInfo, il = !0;
              break e;
            }
            case me: {
              Fr = i.stateNode.containerInfo, il = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Fr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        $x(e, t, a), Fr = null, il = !1;
      }
      Zb(a);
    }
    function Vo(e, t, a) {
      for (var i = a.child; i !== null; )
        $x(e, t, i), i = i.sibling;
    }
    function $x(e, t, a) {
      switch (iu(a), a.tag) {
        case oe:
          Ar || Hf(a, t);
        case $e: {
          {
            var i = Fr, u = il;
            Fr = null, Vo(e, t, a), Fr = i, il = u, Fr !== null && (il ? xR(Fr, a.stateNode) : ER(Fr, a.stateNode));
          }
          return;
        }
        case Wt: {
          Fr !== null && (il ? CR(Fr, a.stateNode) : Hy(Fr, a.stateNode));
          return;
        }
        case me: {
          {
            var s = Fr, f = il;
            Fr = a.stateNode.containerInfo, il = !0, Vo(e, t, a), Fr = s, il = f;
          }
          return;
        }
        case de:
        case Ge:
        case st:
        case Pe: {
          if (!Ar) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var w = g, T = w.destroy, M = w.tag;
                  T !== void 0 && ((M & Fl) !== Ga ? Rm(a, t, T) : (M & or) !== Ga && (ui(a), a.mode & Ie ? (Bl(), Rm(a, t, T), Vl(a)) : Rm(a, t, T), no())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Vo(e, t, a);
          return;
        }
        case pe: {
          if (!Ar) {
            Hf(a, t);
            var j = a.stateNode;
            typeof j.componentWillUnmount == "function" && w0(a, t, j);
          }
          Vo(e, t, a);
          return;
        }
        case xn: {
          Vo(e, t, a);
          return;
        }
        case ze: {
          if (
            // TODO: Remove this dead flag
            a.mode & be
          ) {
            var H = Ar;
            Ar = H || a.memoizedState !== null, Vo(e, t, a), Ar = H;
          } else
            Vo(e, t, a);
          break;
        }
        default: {
          Vo(e, t, a);
          return;
        }
      }
    }
    function nw(e) {
      e.memoizedState;
    }
    function rw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && VR(s);
          }
        }
      }
    }
    function Yx(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Pb()), t.forEach(function(i) {
          var u = Jw.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Ea)
              if (Af !== null && Ff !== null)
                $p(Ff, Af);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function aw(e, t, a) {
      Af = a, Ff = e, Pt(t), Ix(t, e), Pt(t), Af = null, Ff = null;
    }
    function ll(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            tw(e, t, s);
          } catch (v) {
            sn(s, t, v);
          }
        }
      var f = tc();
      if (t.subtreeFlags & ea)
        for (var p = t.child; p !== null; )
          Pt(p), Ix(p, e), p = p.sibling;
      Pt(f);
    }
    function Ix(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case de:
        case Ge:
        case st:
        case Pe: {
          if (ll(t, e), $l(e), u & Ze) {
            try {
              al(Fl | ur, e, e.return), Po(Fl | ur, e);
            } catch (Be) {
              sn(e, e.return, Be);
            }
            if (e.mode & Ie) {
              try {
                Bl(), al(or | ur, e, e.return);
              } catch (Be) {
                sn(e, e.return, Be);
              }
              Vl(e);
            } else
              try {
                al(or | ur, e, e.return);
              } catch (Be) {
                sn(e, e.return, Be);
              }
          }
          return;
        }
        case pe: {
          ll(t, e), $l(e), u & Xr && i !== null && Hf(i, i.return);
          return;
        }
        case oe: {
          ll(t, e), $l(e), u & Xr && i !== null && Hf(i, i.return);
          {
            if (e.flags & Vt) {
              var s = e.stateNode;
              try {
                YS(s);
              } catch (Be) {
                sn(e, e.return, Be);
              }
            }
            if (u & Ze) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    vR(f, g, y, v, p, e);
                  } catch (Be) {
                    sn(e, e.return, Be);
                  }
              }
            }
          }
          return;
        }
        case $e: {
          if (ll(t, e), $l(e), u & Ze) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var w = e.stateNode, T = e.memoizedProps, M = i !== null ? i.memoizedProps : T;
            try {
              hR(w, M, T);
            } catch (Be) {
              sn(e, e.return, Be);
            }
          }
          return;
        }
        case ne: {
          if (ll(t, e), $l(e), u & Ze && i !== null) {
            var j = i.memoizedState;
            if (j.isDehydrated)
              try {
                PR(t.containerInfo);
              } catch (Be) {
                sn(e, e.return, Be);
              }
          }
          return;
        }
        case me: {
          ll(t, e), $l(e);
          return;
        }
        case Ne: {
          ll(t, e), $l(e);
          var H = e.child;
          if (H.flags & bl) {
            var ue = H.stateNode, Le = H.memoizedState, we = Le !== null;
            if (ue.isHidden = we, we) {
              var Rt = H.alternate !== null && H.alternate.memoizedState !== null;
              Rt || Fw();
            }
          }
          if (u & Ze) {
            try {
              nw(e);
            } catch (Be) {
              sn(e, e.return, Be);
            }
            Yx(e);
          }
          return;
        }
        case ze: {
          var mt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & be
          ) {
            var N = Ar;
            Ar = N || mt, ll(t, e), Ar = N;
          } else
            ll(t, e);
          if ($l(e), u & bl) {
            var P = e.stateNode, O = e.memoizedState, G = O !== null, ve = e;
            if (P.isHidden = G, G && !mt && (ve.mode & be) !== Ce) {
              Ee = ve;
              for (var se = ve.child; se !== null; )
                Ee = se, lw(se), se = se.sibling;
            }
            Xb(ve, G);
          }
          return;
        }
        case _t: {
          ll(t, e), $l(e), u & Ze && Yx(e);
          return;
        }
        case xn:
          return;
        default: {
          ll(t, e), $l(e);
          return;
        }
      }
    }
    function $l(e) {
      var t = e.flags;
      if (t & ln) {
        try {
          ew(e);
        } catch (a) {
          sn(e, e.return, a);
        }
        e.flags &= ~ln;
      }
      t & Ua && (e.flags &= ~Ua);
    }
    function iw(e, t, a) {
      Af = a, Ff = t, Ee = e, Qx(e, t, a), Af = null, Ff = null;
    }
    function Qx(e, t, a) {
      for (var i = (e.mode & be) !== Ce; Ee !== null; ) {
        var u = Ee, s = u.child;
        if (u.tag === ze && i) {
          var f = u.memoizedState !== null, p = f || Cm;
          if (p) {
            D0(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Ar, w = Cm, T = Ar;
            Cm = p, Ar = g, Ar && !T && (Ee = u, uw(u));
            for (var M = s; M !== null; )
              Ee = M, Qx(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            Ee = u, Cm = w, Ar = T, D0(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Er) !== Oe && s !== null ? (s.return = u, Ee = s) : D0(e, t, a);
      }
    }
    function D0(e, t, a) {
      for (; Ee !== null; ) {
        var i = Ee;
        if ((i.flags & Er) !== Oe) {
          var u = i.alternate;
          Pt(i);
          try {
            qb(t, u, i, a);
          } catch (f) {
            sn(i, i.return, f);
          }
          Cn();
        }
        if (i === e) {
          Ee = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ee = s;
          return;
        }
        Ee = i.return;
      }
    }
    function lw(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        switch (t.tag) {
          case de:
          case Ge:
          case st:
          case Pe: {
            if (t.mode & Ie)
              try {
                Bl(), al(or, t, t.return);
              } finally {
                Vl(t);
              }
            else
              al(or, t, t.return);
            break;
          }
          case pe: {
            Hf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && w0(t, t.return, i);
            break;
          }
          case oe: {
            Hf(t, t.return);
            break;
          }
          case ze: {
            var u = t.memoizedState !== null;
            if (u) {
              Wx(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ee = a) : Wx(e);
      }
    }
    function Wx(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        if (t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function uw(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.child;
        if (t.tag === ze) {
          var i = t.memoizedState !== null;
          if (i) {
            Gx(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ee = a) : Gx(e);
      }
    }
    function Gx(e) {
      for (; Ee !== null; ) {
        var t = Ee;
        Pt(t);
        try {
          Kb(t);
        } catch (i) {
          sn(t, t.return, i);
        }
        if (Cn(), t === e) {
          Ee = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ee = a;
          return;
        }
        Ee = t.return;
      }
    }
    function ow(e, t, a, i) {
      Ee = t, sw(t, e, a, i);
    }
    function sw(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee, s = u.child;
        (u.subtreeFlags & ja) !== Oe && s !== null ? (s.return = u, Ee = s) : cw(e, t, a, i);
      }
    }
    function cw(e, t, a, i) {
      for (; Ee !== null; ) {
        var u = Ee;
        if ((u.flags & cn) !== Oe) {
          Pt(u);
          try {
            fw(t, u, a, i);
          } catch (f) {
            sn(u, u.return, f);
          }
          Cn();
        }
        if (u === e) {
          Ee = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Ee = s;
          return;
        }
        Ee = u.return;
      }
    }
    function fw(e, t, a, i) {
      switch (t.tag) {
        case de:
        case Ge:
        case Pe: {
          if (t.mode & Ie) {
            Gg();
            try {
              Po(Ur | ur, t);
            } finally {
              Wg(t);
            }
          } else
            Po(Ur | ur, t);
          break;
        }
      }
    }
    function dw(e) {
      Ee = e, pw();
    }
    function pw() {
      for (; Ee !== null; ) {
        var e = Ee, t = e.child;
        if ((Ee.flags & zt) !== Oe) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Ee = u, mw(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ee = e;
          }
        }
        (e.subtreeFlags & ja) !== Oe && t !== null ? (t.return = e, Ee = t) : vw();
      }
    }
    function vw() {
      for (; Ee !== null; ) {
        var e = Ee;
        (e.flags & cn) !== Oe && (Pt(e), hw(e), Cn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ee = t;
          return;
        }
        Ee = e.return;
      }
    }
    function hw(e) {
      switch (e.tag) {
        case de:
        case Ge:
        case Pe: {
          e.mode & Ie ? (Gg(), al(Ur | ur, e, e.return), Wg(e)) : al(Ur | ur, e, e.return);
          break;
        }
      }
    }
    function mw(e, t) {
      for (; Ee !== null; ) {
        var a = Ee;
        Pt(a), gw(a, t), Cn();
        var i = a.child;
        i !== null ? (i.return = a, Ee = i) : yw(e);
      }
    }
    function yw(e) {
      for (; Ee !== null; ) {
        var t = Ee, a = t.sibling, i = t.return;
        if (Px(t), t === e) {
          Ee = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ee = a;
          return;
        }
        Ee = i;
      }
    }
    function gw(e, t) {
      switch (e.tag) {
        case de:
        case Ge:
        case Pe: {
          e.mode & Ie ? (Gg(), al(Ur, e, t), Wg(e)) : al(Ur, e, t);
          break;
        }
      }
    }
    function Sw(e) {
      switch (e.tag) {
        case de:
        case Ge:
        case Pe: {
          try {
            Po(or | ur, e);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
      }
    }
    function Ew(e) {
      switch (e.tag) {
        case de:
        case Ge:
        case Pe: {
          try {
            Po(Ur | ur, e);
          } catch (t) {
            sn(e, e.return, t);
          }
          break;
        }
      }
    }
    function xw(e) {
      switch (e.tag) {
        case de:
        case Ge:
        case Pe: {
          try {
            al(or | ur, e, e.return);
          } catch (a) {
            sn(e, e.return, a);
          }
          break;
        }
        case pe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && w0(e, e.return, t);
          break;
        }
      }
    }
    function Cw(e) {
      switch (e.tag) {
        case de:
        case Ge:
        case Pe:
          try {
            al(Ur | ur, e, e.return);
          } catch (t) {
            sn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Lp = Symbol.for;
      Lp("selector.component"), Lp("selector.has_pseudo_class"), Lp("selector.role"), Lp("selector.test_id"), Lp("selector.text");
    }
    var Rw = [];
    function Tw() {
      Rw.forEach(function(e) {
        return e();
      });
    }
    var bw = A.ReactCurrentActQueue;
    function ww(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function qx() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && bw.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var _w = Math.ceil, N0 = A.ReactCurrentDispatcher, O0 = A.ReactCurrentOwner, Hr = A.ReactCurrentBatchConfig, ul = A.ReactCurrentActQueue, fr = (
      /*             */
      0
    ), Kx = (
      /*               */
      1
    ), Pr = (
      /*                */
      2
    ), Ni = (
      /*                */
      4
    ), _u = 0, Mp = 1, qs = 2, Tm = 3, zp = 4, Xx = 5, L0 = 6, Ct = fr, Ta = null, Mn = null, dr = $, Yl = $, M0 = Oo($), pr = _u, Up = null, bm = $, jp = $, wm = $, Ap = null, qa = null, z0 = 0, Zx = 500, Jx = 1 / 0, kw = 500, ku = null;
    function Fp() {
      Jx = gn() + kw;
    }
    function eC() {
      return Jx;
    }
    var _m = !1, U0 = null, Pf = null, Ks = !1, Bo = null, Hp = $, j0 = [], A0 = null, Dw = 50, Pp = 0, F0 = null, H0 = !1, km = !1, Nw = 50, Vf = 0, Dm = null, Vp = nn, Nm = $, tC = !1;
    function Om() {
      return Ta;
    }
    function ba() {
      return (Ct & (Pr | Ni)) !== fr ? gn() : (Vp !== nn || (Vp = gn()), Vp);
    }
    function $o(e) {
      var t = e.mode;
      if ((t & be) === Ce)
        return De;
      if ((Ct & Pr) !== fr && dr !== $)
        return fo(dr);
      var a = bT() !== TT;
      if (a) {
        if (Hr.transition !== null) {
          var i = Hr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Nm === Fn && (Nm = $v()), Nm;
      }
      var u = Va();
      if (u !== Fn)
        return u;
      var s = sR();
      return s;
    }
    function Ow(e) {
      var t = e.mode;
      return (t & be) === Ce ? De : aa();
    }
    function vr(e, t, a, i) {
      t_(), tC && S("useInsertionEffect must not schedule updates."), H0 && (km = !0), pu(e, a, i), (Ct & Pr) !== $ && e === Ta ? a_(t) : (Ea && Wc(e, t, a), i_(t), e === Ta && ((Ct & Pr) === fr && (jp = Ke(jp, a)), pr === zp && Yo(e, dr)), Ka(e, i), a === De && Ct === fr && (t.mode & be) === Ce && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ul.isBatchingLegacy && (Fp(), tE()));
    }
    function Lw(e, t, a) {
      var i = e.current;
      i.lanes = t, pu(e, t, a), Ka(e, a);
    }
    function Mw(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Ct & Pr) !== fr
      );
    }
    function Ka(e, t) {
      var a = e.callbackNode;
      Fv(e, t);
      var i = fu(e, e === Ta ? dr : $);
      if (i === $) {
        a !== null && yC(a), e.callbackNode = null, e.callbackPriority = Fn;
        return;
      }
      var u = Nn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ul.current !== null && a !== Q0)) {
        a == null && s !== De && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && yC(a);
      var f;
      if (u === De)
        e.tag === Lo ? (ul.isBatchingLegacy !== null && (ul.didScheduleLegacyUpdate = !0), uT(aC.bind(null, e))) : eE(aC.bind(null, e)), ul.current !== null ? ul.current.push(Mo) : fR(function() {
          (Ct & (Pr | Ni)) === fr && Mo();
        }), f = null;
      else {
        var p;
        switch (lr(i)) {
          case On:
            p = Ec;
            break;
          case Wi:
            p = au;
            break;
          case xi:
            p = Ei;
            break;
          case po:
            p = xc;
            break;
          default:
            p = Ei;
            break;
        }
        f = W0(p, nC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function nC(e, t) {
      if (XT(), Vp = nn, Nm = $, (Ct & (Pr | Ni)) !== fr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Nu();
      if (i && e.callbackNode !== a)
        return null;
      var u = fu(e, e === Ta ? dr : $);
      if (u === $)
        return null;
      var s = !Cs(e, u) && !Bv(e, u) && !t, f = s ? $w(e, u) : Mm(e, u);
      if (f !== _u) {
        if (f === qs) {
          var p = Nl(e);
          p !== $ && (u = p, f = P0(e, p));
        }
        if (f === Mp) {
          var v = Up;
          throw Xs(e, $), Yo(e, u), Ka(e, gn()), v;
        }
        if (f === L0)
          Yo(e, u);
        else {
          var y = !Cs(e, u), g = e.current.alternate;
          if (y && !Uw(g)) {
            if (f = Mm(e, u), f === qs) {
              var w = Nl(e);
              w !== $ && (u = w, f = P0(e, w));
            }
            if (f === Mp) {
              var T = Up;
              throw Xs(e, $), Yo(e, u), Ka(e, gn()), T;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, zw(e, f, u);
        }
      }
      return Ka(e, gn()), e.callbackNode === a ? nC.bind(null, e) : null;
    }
    function P0(e, t) {
      var a = Ap;
      if (Gc(e)) {
        var i = Xs(e, t);
        i.flags |= Rn, eT(e.containerInfo);
      }
      var u = Mm(e, t);
      if (u !== qs) {
        var s = qa;
        qa = a, s !== null && rC(s);
      }
      return u;
    }
    function rC(e) {
      qa === null ? qa = e : qa.push.apply(qa, e);
    }
    function zw(e, t, a) {
      switch (t) {
        case _u:
        case Mp:
          throw new Error("Root did not complete. This is a bug in React.");
        case qs: {
          Zs(e, qa, ku);
          break;
        }
        case Tm: {
          if (Yo(e, a), Hv(a) && // do not delay if we're inside an act() scope
          !gC()) {
            var i = z0 + Zx - gn();
            if (i > 10) {
              var u = fu(e, $);
              if (u !== $)
                break;
              var s = e.suspendedLanes;
              if (!du(s, a)) {
                ba(), Ic(e, s);
                break;
              }
              e.timeoutHandle = Ay(Zs.bind(null, e, qa, ku), i);
              break;
            }
          }
          Zs(e, qa, ku);
          break;
        }
        case zp: {
          if (Yo(e, a), Vv(a))
            break;
          if (!gC()) {
            var f = jv(e, a), p = f, v = gn() - p, y = e_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ay(Zs.bind(null, e, qa, ku), y);
              break;
            }
          }
          Zs(e, qa, ku);
          break;
        }
        case Xx: {
          Zs(e, qa, ku);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Uw(e) {
      for (var t = e; ; ) {
        if (t.flags & ds) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Se(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & ds && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Yo(e, t) {
      t = Rs(t, wm), t = Rs(t, jp), Iv(e, t);
    }
    function aC(e) {
      if (ZT(), (Ct & (Pr | Ni)) !== fr)
        throw new Error("Should not already be working.");
      Nu();
      var t = fu(e, $);
      if (!ia(t, De))
        return Ka(e, gn()), null;
      var a = Mm(e, t);
      if (e.tag !== Lo && a === qs) {
        var i = Nl(e);
        i !== $ && (t = i, a = P0(e, i));
      }
      if (a === Mp) {
        var u = Up;
        throw Xs(e, $), Yo(e, t), Ka(e, gn()), u;
      }
      if (a === L0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Zs(e, qa, ku), Ka(e, gn()), null;
    }
    function jw(e, t) {
      t !== $ && (Od(e, Ke(t, De)), Ka(e, gn()), (Ct & (Pr | Ni)) === fr && (Fp(), Mo()));
    }
    function V0(e, t) {
      var a = Ct;
      Ct |= Kx;
      try {
        return e(t);
      } finally {
        Ct = a, Ct === fr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ul.isBatchingLegacy && (Fp(), tE());
      }
    }
    function Aw(e, t, a, i, u) {
      var s = Va(), f = Hr.transition;
      try {
        return Hr.transition = null, Tn(On), e(t, a, i, u);
      } finally {
        Tn(s), Hr.transition = f, Ct === fr && Fp();
      }
    }
    function Du(e) {
      Bo !== null && Bo.tag === Lo && (Ct & (Pr | Ni)) === fr && Nu();
      var t = Ct;
      Ct |= Kx;
      var a = Hr.transition, i = Va();
      try {
        return Hr.transition = null, Tn(On), e ? e() : void 0;
      } finally {
        Tn(i), Hr.transition = a, Ct = t, (Ct & (Pr | Ni)) === fr && Mo();
      }
    }
    function iC() {
      return (Ct & (Pr | Ni)) !== fr;
    }
    function Lm(e, t) {
      oa(M0, Yl, e), Yl = Ke(Yl, t);
    }
    function B0(e) {
      Yl = M0.current, ua(M0, e);
    }
    function Xs(e, t) {
      e.finishedWork = null, e.finishedLanes = $;
      var a = e.timeoutHandle;
      if (a !== Fy && (e.timeoutHandle = Fy, cR(a)), Mn !== null)
        for (var i = Mn.return; i !== null; ) {
          var u = i.alternate;
          zx(u, i), i = i.return;
        }
      Ta = e;
      var s = Js(e.current, null);
      return Mn = s, dr = Yl = t, pr = _u, Up = null, bm = $, jp = $, wm = $, Ap = null, qa = null, LT(), Ji.discardPendingWarnings(), s;
    }
    function lC(e, t) {
      do {
        var a = Mn;
        try {
          if (Bh(), NE(), Cn(), O0.current = null, a === null || a.return === null) {
            pr = Mp, Up = t, Mn = null;
            return;
          }
          if (et && a.mode & Ie && ym(a, !0), nt)
            if (na(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              lu(a, i, dr);
            } else
              hs(a, t, dr);
          ub(e, a.return, a, t, dr), cC(a);
        } catch (u) {
          t = u, Mn === a && a !== null ? (a = a.return, Mn = a) : a = Mn;
          continue;
        }
        return;
      } while (!0);
    }
    function uC() {
      var e = N0.current;
      return N0.current = dm, e === null ? dm : e;
    }
    function oC(e) {
      N0.current = e;
    }
    function Fw() {
      z0 = gn();
    }
    function Bp(e) {
      bm = Ke(e, bm);
    }
    function Hw() {
      pr === _u && (pr = Tm);
    }
    function $0() {
      (pr === _u || pr === Tm || pr === qs) && (pr = zp), Ta !== null && (xs(bm) || xs(jp)) && Yo(Ta, dr);
    }
    function Pw(e) {
      pr !== zp && (pr = qs), Ap === null ? Ap = [e] : Ap.push(e);
    }
    function Vw() {
      return pr === _u;
    }
    function Mm(e, t) {
      var a = Ct;
      Ct |= Pr;
      var i = uC();
      if (Ta !== e || dr !== t) {
        if (Ea) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, dr), u.clear()), Ld(e, t);
        }
        ku = bs(), Xs(e, t);
      }
      fn(t);
      do
        try {
          Bw();
          break;
        } catch (s) {
          lC(e, s);
        }
      while (!0);
      if (Bh(), Ct = a, oC(i), Mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return wc(), Ta = null, dr = $, pr;
    }
    function Bw() {
      for (; Mn !== null; )
        sC(Mn);
    }
    function $w(e, t) {
      var a = Ct;
      Ct |= Pr;
      var i = uC();
      if (Ta !== e || dr !== t) {
        if (Ea) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, dr), u.clear()), Ld(e, t);
        }
        ku = bs(), Fp(), Xs(e, t);
      }
      fn(t);
      do
        try {
          Yw();
          break;
        } catch (s) {
          lC(e, s);
        }
      while (!0);
      return Bh(), oC(i), Ct = a, Mn !== null ? (bc(), _u) : (wc(), Ta = null, dr = $, pr);
    }
    function Yw() {
      for (; Mn !== null && !Sc(); )
        sC(Mn);
    }
    function sC(e) {
      var t = e.alternate;
      Pt(e);
      var a;
      (e.mode & Ie) !== Ce ? (Qg(e), a = Y0(t, e, Yl), ym(e, !0)) : a = Y0(t, e, Yl), Cn(), e.memoizedProps = e.pendingProps, a === null ? cC(e) : Mn = a, O0.current = null;
    }
    function cC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ya) === Oe) {
          Pt(t);
          var u = void 0;
          if ((t.mode & Ie) === Ce ? u = Mx(a, t, Yl) : (Qg(t), u = Mx(a, t, Yl), ym(t, !1)), Cn(), u !== null) {
            Mn = u;
            return;
          }
        } else {
          var s = Hb(a, t);
          if (s !== null) {
            s.flags &= bv, Mn = s;
            return;
          }
          if ((t.mode & Ie) !== Ce) {
            ym(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ya, i.subtreeFlags = Oe, i.deletions = null;
          else {
            pr = L0, Mn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Mn = v;
          return;
        }
        t = i, Mn = t;
      } while (t !== null);
      pr === _u && (pr = Xx);
    }
    function Zs(e, t, a) {
      var i = Va(), u = Hr.transition;
      try {
        Hr.transition = null, Tn(On), Iw(e, t, a, i);
      } finally {
        Hr.transition = u, Tn(i);
      }
      return null;
    }
    function Iw(e, t, a, i) {
      do
        Nu();
      while (Bo !== null);
      if (n_(), (Ct & (Pr | Ni)) !== fr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (_l(s), u === null)
        return Cc(), null;
      if (s === $ && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = $, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Fn;
      var f = Ke(u.lanes, u.childLanes);
      Qc(e, f), e === Ta && (Ta = null, Mn = null, dr = $), ((u.subtreeFlags & ja) !== Oe || (u.flags & ja) !== Oe) && (Ks || (Ks = !0, A0 = a, W0(Ei, function() {
        return Nu(), null;
      })));
      var p = (u.subtreeFlags & (Zu | ea | Er | ja)) !== Oe, v = (u.flags & (Zu | ea | Er | ja)) !== Oe;
      if (p || v) {
        var y = Hr.transition;
        Hr.transition = null;
        var g = Va();
        Tn(On);
        var w = Ct;
        Ct |= Ni, O0.current = null, Yb(e, u), tx(), aw(e, u, s), rR(e.containerInfo), e.current = u, Rd(s), iw(u, e, s), ro(), kv(), Ct = w, Tn(g), Hr.transition = y;
      } else
        e.current = u, tx();
      var T = Ks;
      if (Ks ? (Ks = !1, Bo = e, Hp = s) : (Vf = 0, Dm = null), f = e.pendingLanes, f === $ && (Pf = null), T || vC(e.current, !1), eo(u.stateNode, i), Ea && e.memoizedUpdaters.clear(), Tw(), Ka(e, gn()), t !== null)
        for (var M = e.onRecoverableError, j = 0; j < t.length; j++) {
          var H = t[j], ue = H.stack, Le = H.digest;
          M(H.value, {
            componentStack: ue,
            digest: Le
          });
        }
      if (_m) {
        _m = !1;
        var we = U0;
        throw U0 = null, we;
      }
      return ia(Hp, De) && e.tag !== Lo && Nu(), f = e.pendingLanes, ia(f, De) ? (KT(), e === F0 ? Pp++ : (Pp = 0, F0 = e)) : Pp = 0, Mo(), Cc(), null;
    }
    function Nu() {
      if (Bo !== null) {
        var e = lr(Hp), t = oy(xi, e), a = Hr.transition, i = Va();
        try {
          return Hr.transition = null, Tn(t), Ww();
        } finally {
          Tn(i), Hr.transition = a;
        }
      }
      return !1;
    }
    function Qw(e) {
      j0.push(e), Ks || (Ks = !0, W0(Ei, function() {
        return Nu(), null;
      }));
    }
    function Ww() {
      if (Bo === null)
        return !1;
      var e = A0;
      A0 = null;
      var t = Bo, a = Hp;
      if (Bo = null, Hp = $, (Ct & (Pr | Ni)) !== fr)
        throw new Error("Cannot flush passive effects while already rendering.");
      H0 = !0, km = !1, zv(a);
      var i = Ct;
      Ct |= Ni, dw(t.current), ow(t, t.current, a, e);
      {
        var u = j0;
        j0 = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Gb(t, f);
        }
      }
      Td(), vC(t.current, !0), Ct = i, Mo(), km ? t === Dm ? Vf++ : (Vf = 0, Dm = t) : Vf = 0, H0 = !1, km = !1, Ha(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function fC(e) {
      return Pf !== null && Pf.has(e);
    }
    function Gw(e) {
      Pf === null ? Pf = /* @__PURE__ */ new Set([e]) : Pf.add(e);
    }
    function qw(e) {
      _m || (_m = !0, U0 = e);
    }
    var Kw = qw;
    function dC(e, t, a) {
      var i = Ws(a, t), u = sx(e, i, De), s = Uo(e, u, De), f = ba();
      s !== null && (pu(s, De, f), Ka(s, f));
    }
    function sn(e, t, a) {
      if (Vb(a), Yp(!1), e.tag === ne) {
        dC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ne) {
          dC(i, e, a);
          return;
        } else if (i.tag === pe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !fC(s)) {
            var f = Ws(a, e), p = c0(i, f, De), v = Uo(i, p, De), y = ba();
            v !== null && (pu(v, De, y), Ka(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Xw(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = ba();
      Ic(e, a), l_(e), Ta === e && du(dr, a) && (pr === zp || pr === Tm && Hv(dr) && gn() - z0 < Zx ? Xs(e, $) : wm = Ke(wm, a)), Ka(e, u);
    }
    function pC(e, t) {
      t === Fn && (t = Ow(e));
      var a = ba(), i = Wa(e, t);
      i !== null && (pu(i, t, a), Ka(i, a));
    }
    function Zw(e) {
      var t = e.memoizedState, a = Fn;
      t !== null && (a = t.retryLane), pC(e, a);
    }
    function Jw(e, t) {
      var a = Fn, i;
      switch (e.tag) {
        case Ne:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case _t:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), pC(e, a);
    }
    function e_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : _w(e / 1960) * 1960;
    }
    function t_() {
      if (Pp > Dw)
        throw Pp = 0, F0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Vf > Nw && (Vf = 0, Dm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function n_() {
      Ji.flushLegacyContextWarning(), Ji.flushPendingUnsafeLifecycleWarnings();
    }
    function vC(e, t) {
      Pt(e), zm(e, Jr, xw), t && zm(e, ru, Cw), zm(e, Jr, Sw), t && zm(e, ru, Ew), Cn();
    }
    function zm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Oe ? i = i.child : ((i.flags & t) !== Oe && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Um = null;
    function hC(e) {
      {
        if ((Ct & Pr) !== fr || !(e.mode & be))
          return;
        var t = e.tag;
        if (t !== tt && t !== ne && t !== pe && t !== de && t !== Ge && t !== st && t !== Pe)
          return;
        var a = Qe(e) || "ReactComponent";
        if (Um !== null) {
          if (Um.has(a))
            return;
          Um.add(a);
        } else
          Um = /* @__PURE__ */ new Set([a]);
        var i = yn;
        try {
          Pt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Pt(e) : Cn();
        }
      }
    }
    var Y0;
    {
      var r_ = null;
      Y0 = function(e, t, a) {
        var i = RC(r_, t);
        try {
          return kx(e, t, a);
        } catch (s) {
          if (hT() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Bh(), NE(), zx(e, t), RC(t, i), t.mode & Ie && Qg(t), nu(null, kx, null, e, t, a), ry()) {
            var u = vd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var mC = !1, I0;
    I0 = /* @__PURE__ */ new Set();
    function a_(e) {
      if (Gr && !WT())
        switch (e.tag) {
          case de:
          case Ge:
          case Pe: {
            var t = Mn && Qe(Mn) || "Unknown", a = t;
            if (!I0.has(a)) {
              I0.add(a);
              var i = Qe(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case pe: {
            mC || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), mC = !0);
            break;
          }
        }
    }
    function $p(e, t) {
      if (Ea) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Wc(e, i, t);
        });
      }
    }
    var Q0 = {};
    function W0(e, t) {
      {
        var a = ul.current;
        return a !== null ? (a.push(t), Q0) : gc(e, t);
      }
    }
    function yC(e) {
      if (e !== Q0)
        return _v(e);
    }
    function gC() {
      return ul.current !== null;
    }
    function i_(e) {
      {
        if (e.mode & be) {
          if (!qx())
            return;
        } else if (!ww() || Ct !== fr || e.tag !== de && e.tag !== Ge && e.tag !== Pe)
          return;
        if (ul.current === null) {
          var t = yn;
          try {
            Pt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Qe(e));
          } finally {
            t ? Pt(e) : Cn();
          }
        }
      }
    }
    function l_(e) {
      e.tag !== Lo && qx() && ul.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Yp(e) {
      tC = e;
    }
    var Oi = null, Bf = null, u_ = function(e) {
      Oi = e;
    };
    function $f(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function G0(e) {
      return $f(e);
    }
    function q0(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = $f(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: q,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function SC(e, t) {
      {
        if (Oi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case pe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case de: {
            (typeof i == "function" || s === je) && (u = !0);
            break;
          }
          case Ge: {
            (s === q || s === je) && (u = !0);
            break;
          }
          case st:
          case Pe: {
            (s === gt || s === je) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Oi(a);
          if (f !== void 0 && f === Oi(i))
            return !0;
        }
        return !1;
      }
    }
    function EC(e) {
      {
        if (Oi === null || typeof WeakSet != "function")
          return;
        Bf === null && (Bf = /* @__PURE__ */ new WeakSet()), Bf.add(e);
      }
    }
    var o_ = function(e, t) {
      {
        if (Oi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Nu(), Du(function() {
          K0(e.current, i, a);
        });
      }
    }, s_ = function(e, t) {
      {
        if (e.context !== oi)
          return;
        Nu(), Du(function() {
          Ip(t, e, null, null);
        });
      }
    };
    function K0(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case de:
          case Pe:
          case pe:
            v = p;
            break;
          case Ge:
            v = p.render;
            break;
        }
        if (Oi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var w = Oi(v);
          w !== void 0 && (a.has(w) ? g = !0 : t.has(w) && (f === pe ? g = !0 : y = !0));
        }
        if (Bf !== null && (Bf.has(e) || i !== null && Bf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var T = Wa(e, De);
          T !== null && vr(T, e, De, nn);
        }
        u !== null && !g && K0(u, t, a), s !== null && K0(s, t, a);
      }
    }
    var c_ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return X0(e.current, i, a), a;
      }
    };
    function X0(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case de:
          case Pe:
          case pe:
            p = f;
            break;
          case Ge:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? f_(e, a) : i !== null && X0(i, t, a), u !== null && X0(u, t, a);
      }
    }
    function f_(e, t) {
      {
        var a = d_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case oe:
              t.add(i.stateNode);
              return;
            case me:
              t.add(i.stateNode.containerInfo);
              return;
            case ne:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function d_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === oe)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var Z0;
    {
      Z0 = !1;
      try {
        var xC = Object.preventExtensions({});
      } catch {
        Z0 = !0;
      }
    }
    function p_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Oe, this.subtreeFlags = Oe, this.deletions = null, this.lanes = $, this.childLanes = $, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Z0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var si = function(e, t, a, i) {
      return new p_(e, t, a, i);
    };
    function J0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function v_(e) {
      return typeof e == "function" && !J0(e) && e.defaultProps === void 0;
    }
    function h_(e) {
      if (typeof e == "function")
        return J0(e) ? pe : de;
      if (e != null) {
        var t = e.$$typeof;
        if (t === q)
          return Ge;
        if (t === gt)
          return st;
      }
      return tt;
    }
    function Js(e, t) {
      var a = e.alternate;
      a === null ? (a = si(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Oe, a.subtreeFlags = Oe, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & ar, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case tt:
        case de:
        case Pe:
          a.type = $f(e.type);
          break;
        case pe:
          a.type = G0(e.type);
          break;
        case Ge:
          a.type = q0(e.type);
          break;
      }
      return a;
    }
    function m_(e, t) {
      e.flags &= ar | ln;
      var a = e.alternate;
      if (a === null)
        e.childLanes = $, e.lanes = t, e.child = null, e.subtreeFlags = Oe, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Oe, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function y_(e, t, a) {
      var i;
      return e === Lh ? (i = be, t === !0 && (i |= ft, i |= xa)) : i = Ce, Ea && (i |= Ie), si(ne, null, null, i);
    }
    function eS(e, t, a, i, u, s) {
      var f = tt, p = e;
      if (typeof e == "function")
        J0(e) ? (f = pe, p = G0(p)) : p = $f(p);
      else if (typeof e == "string")
        f = oe;
      else
        e: switch (e) {
          case ma:
            return Io(a.children, u, s, t);
          case pi:
            f = pt, u |= ft, (u & be) !== Ce && (u |= xa);
            break;
          case vi:
            return g_(a, u, s, t);
          case Te:
            return S_(a, u, s, t);
          case dt:
            return E_(a, u, s, t);
          case Kt:
            return CC(a, u, s, t);
          case an:
          case at:
          case Sr:
          case hi:
          case Un:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case C:
                  f = lt;
                  break e;
                case I:
                  f = pn;
                  break e;
                case q:
                  f = Ge, p = q0(p);
                  break e;
                case gt:
                  f = st;
                  break e;
                case je:
                  f = rn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Qe(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = si(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function tS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = eS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Io(e, t, a, i) {
      var u = si(Tt, e, i, t);
      return u.lanes = a, u;
    }
    function g_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = si(vt, e, i, t | Ie);
      return u.elementType = vi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function S_(e, t, a, i) {
      var u = si(Ne, e, i, t);
      return u.elementType = Te, u.lanes = a, u;
    }
    function E_(e, t, a, i) {
      var u = si(_t, e, i, t);
      return u.elementType = dt, u.lanes = a, u;
    }
    function CC(e, t, a, i) {
      var u = si(ze, e, i, t);
      u.elementType = Kt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function nS(e, t, a) {
      var i = si($e, e, null, t);
      return i.lanes = a, i;
    }
    function x_() {
      var e = si(oe, null, null, Ce);
      return e.elementType = "DELETED", e;
    }
    function C_(e) {
      var t = si(Wt, null, null, Ce);
      return t.stateNode = e, t;
    }
    function rS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = si(me, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function RC(e, t) {
      return e === null && (e = si(tt, null, null, Ce)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function R_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Fy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Fn, this.eventTimes = Ts($), this.expirationTimes = Ts(nn), this.pendingLanes = $, this.suspendedLanes = $, this.pingedLanes = $, this.expiredLanes = $, this.mutableReadLanes = $, this.finishedLanes = $, this.entangledLanes = $, this.entanglements = Ts($), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < gs; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Lh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function TC(e, t, a, i, u, s, f, p, v, y) {
      var g = new R_(e, t, a, p, v), w = y_(t, s);
      g.current = w, w.stateNode = g;
      {
        var T = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        w.memoizedState = T;
      }
      return mg(w), g;
    }
    var aS = "18.3.1";
    function T_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Yr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: _r,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var iS, lS;
    iS = !1, lS = {};
    function bC(e) {
      if (!e)
        return oi;
      var t = Ma(e), a = lT(t);
      if (t.tag === pe) {
        var i = t.type;
        if (Al(i))
          return ZS(t, i, a);
      }
      return a;
    }
    function b_(e, t) {
      {
        var a = Ma(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Aa(a);
        if (u === null)
          return null;
        if (u.mode & ft) {
          var s = Qe(a) || "Component";
          if (!lS[s]) {
            lS[s] = !0;
            var f = yn;
            try {
              Pt(u), a.mode & ft ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Pt(f) : Cn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function wC(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return TC(e, t, v, y, a, i, u, s, f);
    }
    function _C(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, w = TC(a, i, g, e, u, s, f, p, v);
      w.context = bC(null);
      var T = w.current, M = ba(), j = $o(T), H = bu(M, j);
      return H.callback = t ?? null, Uo(T, H, j), Lw(w, j, M), w;
    }
    function Ip(e, t, a, i) {
      Cd(t, e);
      var u = t.current, s = ba(), f = $o(u);
      bd(f);
      var p = bC(a);
      t.context === null ? t.context = p : t.pendingContext = p, Gr && yn !== null && !iS && (iS = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Qe(yn) || "Unknown"));
      var v = bu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Uo(u, v, f);
      return y !== null && (vr(y, u, f, s), Wh(y, u, f)), f;
    }
    function jm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case oe:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function w_(e) {
      switch (e.tag) {
        case ne: {
          var t = e.stateNode;
          if (Gc(t)) {
            var a = kd(t);
            jw(t, a);
          }
          break;
        }
        case Ne: {
          Du(function() {
            var u = Wa(e, De);
            if (u !== null) {
              var s = ba();
              vr(u, e, De, s);
            }
          });
          var i = De;
          uS(e, i);
          break;
        }
      }
    }
    function kC(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Yv(a.retryLane, t));
    }
    function uS(e, t) {
      kC(e, t);
      var a = e.alternate;
      a && kC(a, t);
    }
    function __(e) {
      if (e.tag === Ne) {
        var t = Es, a = Wa(e, t);
        if (a !== null) {
          var i = ba();
          vr(a, e, t, i);
        }
        uS(e, t);
      }
    }
    function k_(e) {
      if (e.tag === Ne) {
        var t = $o(e), a = Wa(e, t);
        if (a !== null) {
          var i = ba();
          vr(a, e, t, i);
        }
        uS(e, t);
      }
    }
    function DC(e) {
      var t = wv(e);
      return t === null ? null : t.stateNode;
    }
    var NC = function(e) {
      return null;
    };
    function D_(e) {
      return NC(e);
    }
    var OC = function(e) {
      return !1;
    };
    function N_(e) {
      return OC(e);
    }
    var LC = null, MC = null, zC = null, UC = null, jC = null, AC = null, FC = null, HC = null, PC = null;
    {
      var VC = function(e, t, a) {
        var i = t[a], u = Et(e) ? e.slice() : it({}, e);
        return a + 1 === t.length ? (Et(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = VC(e[i], t, a + 1), u);
      }, BC = function(e, t) {
        return VC(e, t, 0);
      }, $C = function(e, t, a, i) {
        var u = t[i], s = Et(e) ? e.slice() : it({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], Et(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = $C(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, YC = function(e, t, a) {
        if (t.length !== a.length) {
          Je("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Je("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return $C(e, t, a, 0);
      }, IC = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = Et(e) ? e.slice() : it({}, e);
        return s[u] = IC(e[u], t, a + 1, i), s;
      }, QC = function(e, t, a) {
        return IC(e, t, 0, a);
      }, oS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      LC = function(e, t, a, i) {
        var u = oS(e, t);
        if (u !== null) {
          var s = QC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = it({}, e.memoizedProps);
          var f = Wa(e, De);
          f !== null && vr(f, e, De, nn);
        }
      }, MC = function(e, t, a) {
        var i = oS(e, t);
        if (i !== null) {
          var u = BC(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = it({}, e.memoizedProps);
          var s = Wa(e, De);
          s !== null && vr(s, e, De, nn);
        }
      }, zC = function(e, t, a, i) {
        var u = oS(e, t);
        if (u !== null) {
          var s = YC(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = it({}, e.memoizedProps);
          var f = Wa(e, De);
          f !== null && vr(f, e, De, nn);
        }
      }, UC = function(e, t, a) {
        e.pendingProps = QC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Wa(e, De);
        i !== null && vr(i, e, De, nn);
      }, jC = function(e, t) {
        e.pendingProps = BC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Wa(e, De);
        a !== null && vr(a, e, De, nn);
      }, AC = function(e, t, a) {
        e.pendingProps = YC(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Wa(e, De);
        i !== null && vr(i, e, De, nn);
      }, FC = function(e) {
        var t = Wa(e, De);
        t !== null && vr(t, e, De, nn);
      }, HC = function(e) {
        NC = e;
      }, PC = function(e) {
        OC = e;
      };
    }
    function O_(e) {
      var t = Aa(e);
      return t === null ? null : t.stateNode;
    }
    function L_(e) {
      return null;
    }
    function M_() {
      return yn;
    }
    function z_(e) {
      var t = e.findFiberByHostInstance, a = A.ReactCurrentDispatcher;
      return xd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: LC,
        overrideHookStateDeletePath: MC,
        overrideHookStateRenamePath: zC,
        overrideProps: UC,
        overridePropsDeletePath: jC,
        overridePropsRenamePath: AC,
        setErrorHandler: HC,
        setSuspenseHandler: PC,
        scheduleUpdate: FC,
        currentDispatcherRef: a,
        findHostInstanceByFiber: O_,
        findFiberByHostInstance: t || L_,
        // React Refresh
        findHostInstancesForRefresh: c_,
        scheduleRefresh: o_,
        scheduleRoot: s_,
        setRefreshHandler: u_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: M_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: aS
      });
    }
    var WC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function sS(e) {
      this._internalRoot = e;
    }
    Am.prototype.render = sS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Fm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== jn) {
          var i = DC(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Ip(e, t, null, null);
    }, Am.prototype.unmount = sS.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        iC() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Du(function() {
          Ip(null, e, null, null);
        }), WS(t);
      }
    };
    function U_(e, t) {
      if (!Fm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      GC(e);
      var a = !1, i = !1, u = "", s = WC;
      t != null && (t.hydrate ? Je("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ei && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = wC(e, Lh, null, a, i, u, s);
      bh(f.current, e);
      var p = e.nodeType === jn ? e.parentNode : e;
      return Xd(p), new sS(f);
    }
    function Am(e) {
      this._internalRoot = e;
    }
    function j_(e) {
      e && fy(e);
    }
    Am.prototype.unstable_scheduleHydration = j_;
    function A_(e, t, a) {
      if (!Fm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      GC(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = WC;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = _C(t, null, e, Lh, i, s, f, p, v);
      if (bh(y.current, e), Xd(e), u)
        for (var g = 0; g < u.length; g++) {
          var w = u[g];
          VT(y, w);
        }
      return new Am(y);
    }
    function Fm(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === ai || e.nodeType === Kl || !V));
    }
    function Qp(e) {
      return !!(e && (e.nodeType === Kr || e.nodeType === ai || e.nodeType === Kl || e.nodeType === jn && e.nodeValue === " react-mount-point-unstable "));
    }
    function GC(e) {
      e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), op(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var F_ = A.ReactCurrentOwner, qC;
    qC = function(e) {
      if (e._reactRootContainer && e.nodeType !== jn) {
        var t = DC(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = cS(e), u = !!(i && No(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Kr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function cS(e) {
      return e ? e.nodeType === ai ? e.documentElement : e.firstChild : null;
    }
    function KC() {
    }
    function H_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var T = jm(f);
            s.call(T);
          };
        }
        var f = _C(
          t,
          i,
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          KC
        );
        e._reactRootContainer = f, bh(f.current, e);
        var p = e.nodeType === jn ? e.parentNode : e;
        return Xd(p), Du(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var T = jm(g);
            y.call(T);
          };
        }
        var g = wC(
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          KC
        );
        e._reactRootContainer = g, bh(g.current, e);
        var w = e.nodeType === jn ? e.parentNode : e;
        return Xd(w), Du(function() {
          Ip(t, g, a, i);
        }), g;
      }
    }
    function P_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Hm(e, t, a, i, u) {
      qC(a), P_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = H_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = jm(f);
            p.call(v);
          };
        }
        Ip(t, f, e, u);
      }
      return jm(f);
    }
    var XC = !1;
    function V_(e) {
      {
        XC || (XC = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = F_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", St(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Kr ? e : b_(e, "findDOMNode");
    }
    function B_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = op(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Hm(null, e, t, !0, a);
    }
    function $_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = op(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Hm(null, e, t, !1, a);
    }
    function Y_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !fs(e))
        throw new Error("parentComponent must be a valid React Component");
      return Hm(e, t, a, !1, i);
    }
    var ZC = !1;
    function I_(e) {
      if (ZC || (ZC = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Qp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = op(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = cS(e), i = a && !No(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Du(function() {
          Hm(null, null, e, !1, function() {
            e._reactRootContainer = null, WS(e);
          });
        }), !0;
      } else {
        {
          var u = cS(e), s = !!(u && No(u)), f = e.nodeType === Kr && Qp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    mo(w_), sy(__), Kc(k_), Wv(Va), Gv(Rr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Rv(W1), pc(V0, Aw, Du);
    function Q_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Fm(t))
        throw new Error("Target container is not a DOM element.");
      return T_(e, t, null, a);
    }
    function W_(e, t, a, i) {
      return Y_(e, t, a, i);
    }
    var fS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [No, Ef, wh, dc, os, V0]
    };
    function G_(e, t) {
      return fS.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), U_(e, t);
    }
    function q_(e, t, a) {
      return fS.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), A_(e, t, a);
    }
    function K_(e) {
      return iC() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Du(e);
    }
    var X_ = z_({
      findFiberByHostInstance: Fs,
      bundleType: 1,
      version: aS,
      rendererPackageName: "react-dom"
    });
    if (!X_ && vn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var JC = window.location.protocol;
      /^(https?|file):$/.test(JC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (JC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Za.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fS, Za.createPortal = Q_, Za.createRoot = G_, Za.findDOMNode = V_, Za.flushSync = K_, Za.hydrate = B_, Za.hydrateRoot = q_, Za.render = $_, Za.unmountComponentAtNode = I_, Za.unstable_batchedUpdates = V0, Za.unstable_renderSubtreeIntoContainer = W_, Za.version = aS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Za;
}
function f1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f1);
    } catch (te) {
      console.error(te);
    }
  }
}
process.env.NODE_ENV === "production" ? (f1(), yS.exports = lk()) : yS.exports = uk();
var ok = yS.exports, gS, Vm = ok;
if (process.env.NODE_ENV === "production")
  gS = Vm.createRoot, Vm.hydrateRoot;
else {
  var s1 = Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  gS = function(te, X) {
    s1.usingClientEntryPoint = !0;
    try {
      return Vm.createRoot(te, X);
    } finally {
      s1.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var sk = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ck = (te) => te.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), Wo = (te, X) => {
  const A = Qo.forwardRef(
    ({
      color: It = "currentColor",
      size: Qt = 24,
      strokeWidth: Je = 2,
      absoluteStrokeWidth: S,
      className: Ut = "",
      children: de,
      ...pe
    }, tt) => Qo.createElement(
      "svg",
      {
        ref: tt,
        ...sk,
        width: Qt,
        height: Qt,
        stroke: It,
        strokeWidth: S ? Number(Je) * 24 / Number(Qt) : Je,
        className: ["lucide", `lucide-${ck(te)}`, Ut].join(" "),
        ...pe
      },
      [
        ...X.map(([ne, me]) => Qo.createElement(ne, me)),
        ...Array.isArray(de) ? de : [de]
      ]
    )
  );
  return A.displayName = `${te}`, A;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fk = Wo("Award", [
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lu = Wo("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vS = Wo("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dk = Wo("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pk = Wo("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vk = Wo("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bm = Wo("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hk = Wo("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
function mk() {
  return /* @__PURE__ */ _.jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ _.jsx("nav", { className: "fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50", children: /* @__PURE__ */ _.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ _.jsxs("div", { className: "flex justify-between items-center h-16", children: [
      /* @__PURE__ */ _.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ _.jsx(vS, { className: "w-8 h-8 text-amber-600" }),
        /* @__PURE__ */ _.jsx("span", { className: "text-xl font-bold text-gray-900", children: "Elenora Green Coaching" })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "hidden md:flex space-x-8", children: [
        /* @__PURE__ */ _.jsx(
          "a",
          {
            href: "#about",
            className: "text-gray-700 hover:text-amber-600 transition-colors",
            children: "About"
          }
        ),
        /* @__PURE__ */ _.jsx(
          "a",
          {
            href: "#services",
            className: "text-gray-700 hover:text-amber-600 transition-colors",
            children: "Services"
          }
        ),
        /* @__PURE__ */ _.jsx(
          "a",
          {
            href: "#testimonials",
            className: "text-gray-700 hover:text-amber-600 transition-colors",
            children: "Testimonials"
          }
        ),
        /* @__PURE__ */ _.jsx(
          "a",
          {
            href: "#contact",
            className: "text-gray-700 hover:text-amber-600 transition-colors",
            children: "Contact"
          }
        )
      ] }),
      /* @__PURE__ */ _.jsx("button", { className: "bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full transition-colors", children: "Book Session" })
    ] }) }) }),
    /* @__PURE__ */ _.jsx("section", { className: "pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50", children: /* @__PURE__ */ _.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ _.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ _.jsxs("div", { children: [
        /* @__PURE__ */ _.jsxs("h1", { className: "text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight", children: [
          "Transform Your Life with",
          /* @__PURE__ */ _.jsx("span", { className: "text-amber-600", children: " Professional Coaching" })
        ] }),
        /* @__PURE__ */ _.jsx("p", { className: "text-xl text-gray-600 mb-8 leading-relaxed", children: "Unlock your potential and achieve your goals with personalized coaching that empowers you to create lasting change and success." }),
        /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ _.jsx("button", { className: "bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105", children: "Start Your Journey" }),
          /* @__PURE__ */ _.jsx("button", { className: "border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all", children: "Learn More" })
        ] })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ _.jsx(
          "img",
          {
            src: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
            alt: "Professional coach in consultation",
            className: "rounded-2xl shadow-2xl"
          }
        ),
        /* @__PURE__ */ _.jsxs("div", { className: "absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl", children: [
          /* @__PURE__ */ _.jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ _.jsx(Bm, { className: "w-6 h-6 text-amber-500" }),
            /* @__PURE__ */ _.jsx("span", { className: "text-gray-900 font-semibold", children: "5.0 Rating" })
          ] }),
          /* @__PURE__ */ _.jsx("p", { className: "text-gray-600 text-sm mt-1", children: "200+ Success Stories" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ _.jsx("section", { id: "about", className: "py-20", children: /* @__PURE__ */ _.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ _.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ _.jsx("div", { children: /* @__PURE__ */ _.jsx(
        "img",
        {
          src: "/coaching.png",
          alt: "Coaching image",
          className: "rounded-2xl shadow-xl"
        }
      ) }),
      /* @__PURE__ */ _.jsxs("div", { children: [
        /* @__PURE__ */ _.jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "About Elenora Green" }),
        /* @__PURE__ */ _.jsx("p", { className: "text-lg text-gray-600 mb-6 leading-relaxed", children: "With over 10 years of experience in professional coaching, I've dedicated my career to helping individuals unlock their full potential and achieve meaningful transformation in their personal and professional lives." }),
        /* @__PURE__ */ _.jsx("p", { className: "text-lg text-gray-600 mb-8 leading-relaxed", children: "My approach combines evidence-based methodologies with compassionate guidance, creating a safe space for growth, self-discovery, and sustainable change." }),
        /* @__PURE__ */ _.jsxs("div", { className: "grid grid-cols-2 gap-6 mb-8", children: [
          /* @__PURE__ */ _.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ _.jsx("div", { className: "text-3xl font-bold text-amber-600", children: "500+" }),
            /* @__PURE__ */ _.jsx("div", { className: "text-gray-600", children: "Clients Coached" })
          ] }),
          /* @__PURE__ */ _.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ _.jsx("div", { className: "text-3xl font-bold text-amber-600", children: "10+" }),
            /* @__PURE__ */ _.jsx("div", { className: "text-gray-600", children: "Years Experience" })
          ] })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ _.jsx("span", { className: "bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium", children: "Certified Life Coach" }),
          /* @__PURE__ */ _.jsx("span", { className: "bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium", children: "NLP Practitioner" }),
          /* @__PURE__ */ _.jsx("span", { className: "bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium", children: "Mindfulness Expert" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ _.jsx("section", { id: "services", className: "py-20 bg-gray-50", children: /* @__PURE__ */ _.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ _.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ _.jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: "Coaching Services" }),
        /* @__PURE__ */ _.jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Personalized coaching programs designed to meet your unique needs and goals" })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ _.jsxs("div", { className: "bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ _.jsx(hk, { className: "w-12 h-12 text-amber-600 mb-6" }),
          /* @__PURE__ */ _.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Life Coaching" }),
          /* @__PURE__ */ _.jsx("p", { className: "text-gray-600 mb-6", children: "Discover your purpose, set meaningful goals, and create a fulfilling life aligned with your values and aspirations." }),
          /* @__PURE__ */ _.jsxs("ul", { className: "space-y-2 mb-6", children: [
            /* @__PURE__ */ _.jsxs("li", { className: "flex items-center", children: [
              /* @__PURE__ */ _.jsx(Lu, { className: "w-5 h-5 text-green-500 mr-2" }),
              /* @__PURE__ */ _.jsx("span", { className: "text-gray-700", children: "Goal Setting & Achievement" })
            ] }),
            /* @__PURE__ */ _.jsxs("li", { className: "flex items-center", children: [
              /* @__PURE__ */ _.jsx(Lu, { className: "w-5 h-5 text-green-500 mr-2" }),
              /* @__PURE__ */ _.jsx("span", { className: "text-gray-700", children: "Work-Life Balance" })
            ] }),
            /* @__PURE__ */ _.jsxs("li", { className: "flex items-center", children: [
              /* @__PURE__ */ _.jsx(Lu, { className: "w-5 h-5 text-green-500 mr-2" }),
              /* @__PURE__ */ _.jsx("span", { className: "text-gray-700", children: "Personal Growth" })
            ] })
          ] }),
          /* @__PURE__ */ _.jsx("div", { className: "text-2xl font-bold text-amber-600 mb-4", children: "$150/session" }),
          /* @__PURE__ */ _.jsx("button", { className: "w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full font-semibold transition-colors", children: "Learn More" })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ _.jsx(fk, { className: "w-12 h-12 text-amber-600 mb-6" }),
          /* @__PURE__ */ _.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Career Coaching" }),
          /* @__PURE__ */ _.jsx("p", { className: "text-gray-600 mb-6", children: "Advance your career, transition to new roles, and develop leadership skills that drive professional success." }),
          /* @__PURE__ */ _.jsxs("ul", { className: "space-y-2 mb-6", children: [
            /* @__PURE__ */ _.jsxs("li", { className: "flex items-center", children: [
              /* @__PURE__ */ _.jsx(Lu, { className: "w-5 h-5 text-green-500 mr-2" }),
              /* @__PURE__ */ _.jsx("span", { className: "text-gray-700", children: "Career Transitions" })
            ] }),
            /* @__PURE__ */ _.jsxs("li", { className: "flex items-center", children: [
              /* @__PURE__ */ _.jsx(Lu, { className: "w-5 h-5 text-green-500 mr-2" }),
              /* @__PURE__ */ _.jsx("span", { className: "text-gray-700", children: "Leadership Development" })
            ] }),
            /* @__PURE__ */ _.jsxs("li", { className: "flex items-center", children: [
              /* @__PURE__ */ _.jsx(Lu, { className: "w-5 h-5 text-green-500 mr-2" }),
              /* @__PURE__ */ _.jsx("span", { className: "text-gray-700", children: "Interview Preparation" })
            ] })
          ] }),
          /* @__PURE__ */ _.jsx("div", { className: "text-2xl font-bold text-amber-600 mb-4", children: "$175/session" }),
          /* @__PURE__ */ _.jsx("button", { className: "w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full font-semibold transition-colors", children: "Learn More" })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow", children: [
          /* @__PURE__ */ _.jsx(vS, { className: "w-12 h-12 text-amber-600 mb-6" }),
          /* @__PURE__ */ _.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Wellness Coaching" }),
          /* @__PURE__ */ _.jsx("p", { className: "text-gray-600 mb-6", children: "Build healthy habits, manage stress, and create sustainable wellness practices for optimal mental and physical health." }),
          /* @__PURE__ */ _.jsxs("ul", { className: "space-y-2 mb-6", children: [
            /* @__PURE__ */ _.jsxs("li", { className: "flex items-center", children: [
              /* @__PURE__ */ _.jsx(Lu, { className: "w-5 h-5 text-green-500 mr-2" }),
              /* @__PURE__ */ _.jsx("span", { className: "text-gray-700", children: "Stress Management" })
            ] }),
            /* @__PURE__ */ _.jsxs("li", { className: "flex items-center", children: [
              /* @__PURE__ */ _.jsx(Lu, { className: "w-5 h-5 text-green-500 mr-2" }),
              /* @__PURE__ */ _.jsx("span", { className: "text-gray-700", children: "Mindfulness Training" })
            ] }),
            /* @__PURE__ */ _.jsxs("li", { className: "flex items-center", children: [
              /* @__PURE__ */ _.jsx(Lu, { className: "w-5 h-5 text-green-500 mr-2" }),
              /* @__PURE__ */ _.jsx("span", { className: "text-gray-700", children: "Habit Formation" })
            ] })
          ] }),
          /* @__PURE__ */ _.jsx("div", { className: "text-2xl font-bold text-amber-600 mb-4", children: "$140/session" }),
          /* @__PURE__ */ _.jsx("button", { className: "w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-full font-semibold transition-colors", children: "Learn More" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ _.jsx("section", { id: "testimonials", className: "py-20", children: /* @__PURE__ */ _.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ _.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ _.jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-4", children: "What Clients Say" }),
        /* @__PURE__ */ _.jsx("p", { className: "text-xl text-gray-600", children: "Real stories from real people who've transformed their lives" })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ _.jsxs("div", { className: "bg-white rounded-xl p-8 shadow-lg", children: [
          /* @__PURE__ */ _.jsx("div", { className: "flex mb-4", children: [...Array(5)].map((te, X) => /* @__PURE__ */ _.jsx(
            Bm,
            {
              className: "w-5 h-5 text-amber-500 fill-current"
            },
            X
          )) }),
          /* @__PURE__ */ _.jsx("p", { className: "text-gray-600 mb-6 italic", children: '"Elenora helped me completely transform my career path. Her guidance gave me the confidence to pursue my dreams and land my ideal job."' }),
          /* @__PURE__ */ _.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ _.jsx(
              "img",
              {
                src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
                alt: "Client testimonial",
                className: "w-12 h-12 rounded-full mr-4"
              }
            ),
            /* @__PURE__ */ _.jsxs("div", { children: [
              /* @__PURE__ */ _.jsx("div", { className: "font-semibold text-gray-900", children: "Sarah Johnson" }),
              /* @__PURE__ */ _.jsx("div", { className: "text-gray-500 text-sm", children: "Marketing Director" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "bg-white rounded-xl p-8 shadow-lg", children: [
          /* @__PURE__ */ _.jsx("div", { className: "flex mb-4", children: [...Array(5)].map((te, X) => /* @__PURE__ */ _.jsx(
            Bm,
            {
              className: "w-5 h-5 text-amber-500 fill-current"
            },
            X
          )) }),
          /* @__PURE__ */ _.jsx("p", { className: "text-gray-600 mb-6 italic", children: `"The life coaching sessions were transformational. I finally found balance and purpose in my life. I couldn't be more grateful."` }),
          /* @__PURE__ */ _.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ _.jsx(
              "img",
              {
                src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
                alt: "Client testimonial",
                className: "w-12 h-12 rounded-full mr-4"
              }
            ),
            /* @__PURE__ */ _.jsxs("div", { children: [
              /* @__PURE__ */ _.jsx("div", { className: "font-semibold text-gray-900", children: "Michael Chen" }),
              /* @__PURE__ */ _.jsx("div", { className: "text-gray-500 text-sm", children: "Entrepreneur" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ _.jsxs("div", { className: "bg-white rounded-xl p-8 shadow-lg", children: [
          /* @__PURE__ */ _.jsx("div", { className: "flex mb-4", children: [...Array(5)].map((te, X) => /* @__PURE__ */ _.jsx(
            Bm,
            {
              className: "w-5 h-5 text-amber-500 fill-current"
            },
            X
          )) }),
          /* @__PURE__ */ _.jsx("p", { className: "text-gray-600 mb-6 italic", children: `"Elenora's wellness coaching helped me overcome stress and build healthy habits that have improved every aspect of my life."` }),
          /* @__PURE__ */ _.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ _.jsx(
              "img",
              {
                src: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
                alt: "Client testimonial",
                className: "w-12 h-12 rounded-full mr-4"
              }
            ),
            /* @__PURE__ */ _.jsxs("div", { children: [
              /* @__PURE__ */ _.jsx("div", { className: "font-semibold text-gray-900", children: "Emily Rodriguez" }),
              /* @__PURE__ */ _.jsx("div", { className: "text-gray-500 text-sm", children: "Teacher" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ _.jsx(
      "section",
      {
        id: "contact",
        className: "py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white",
        children: /* @__PURE__ */ _.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ _.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ _.jsxs("div", { children: [
            /* @__PURE__ */ _.jsx("h2", { className: "text-4xl font-bold mb-6", children: "Ready to Transform Your Life?" }),
            /* @__PURE__ */ _.jsx("p", { className: "text-xl text-blue-100 mb-8", children: "Take the first step towards your goals. Book a free consultation to discuss how coaching can help you achieve the life you want." }),
            /* @__PURE__ */ _.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ _.jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ _.jsx(dk, { className: "w-6 h-6 text-amber-400 mr-4" }),
                /* @__PURE__ */ _.jsx("span", { className: "text-blue-100", children: "elenora@greencoaching.com" })
              ] }),
              /* @__PURE__ */ _.jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ _.jsx(vk, { className: "w-6 h-6 text-amber-400 mr-4" }),
                /* @__PURE__ */ _.jsx("span", { className: "text-blue-100", children: "+1 (555) 123-4567" })
              ] }),
              /* @__PURE__ */ _.jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ _.jsx(pk, { className: "w-6 h-6 text-amber-400 mr-4" }),
                /* @__PURE__ */ _.jsx("span", { className: "text-blue-100", children: "Available Online & In-Person" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ _.jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-2xl", children: [
            /* @__PURE__ */ _.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Book Your Free Consultation" }),
            /* @__PURE__ */ _.jsxs("form", { className: "space-y-4", children: [
              /* @__PURE__ */ _.jsx("div", { children: /* @__PURE__ */ _.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Full Name",
                  className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                }
              ) }),
              /* @__PURE__ */ _.jsx("div", { children: /* @__PURE__ */ _.jsx(
                "input",
                {
                  type: "email",
                  placeholder: "Email Address",
                  className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                }
              ) }),
              /* @__PURE__ */ _.jsx("div", { children: /* @__PURE__ */ _.jsx(
                "input",
                {
                  type: "tel",
                  placeholder: "Phone Number",
                  className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                }
              ) }),
              /* @__PURE__ */ _.jsx("div", { children: /* @__PURE__ */ _.jsxs("select", { className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent", children: [
                /* @__PURE__ */ _.jsx("option", { children: "Select Coaching Type" }),
                /* @__PURE__ */ _.jsx("option", { children: "Life Coaching" }),
                /* @__PURE__ */ _.jsx("option", { children: "Career Coaching" }),
                /* @__PURE__ */ _.jsx("option", { children: "Wellness Coaching" })
              ] }) }),
              /* @__PURE__ */ _.jsx("div", { children: /* @__PURE__ */ _.jsx(
                "textarea",
                {
                  placeholder: "Tell me about your goals...",
                  rows: 4,
                  className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                }
              ) }),
              /* @__PURE__ */ _.jsx(
                "button",
                {
                  type: "submit",
                  className: "w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition-colors",
                  children: "Schedule Free Consultation"
                }
              )
            ] })
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ _.jsx("footer", { className: "bg-gray-900 text-white py-12", children: /* @__PURE__ */ _.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ _.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ _.jsxs("div", { className: "flex items-center justify-center space-x-2 mb-4", children: [
        /* @__PURE__ */ _.jsx(vS, { className: "w-8 h-8 text-amber-600" }),
        /* @__PURE__ */ _.jsx("span", { className: "text-2xl font-bold", children: "Elenora Green Coaching" })
      ] }),
      /* @__PURE__ */ _.jsx("p", { className: "text-gray-400 mb-8", children: "Empowering individuals to unlock their potential and create meaningful change" }),
      /* @__PURE__ */ _.jsx("div", { className: "border-t border-gray-800 pt-8", children: /* @__PURE__ */ _.jsx("p", { className: "text-gray-400", children: "© 2025 Elenora Green Coaching. All rights reserved." }) })
    ] }) }) })
  ] });
}
gS(document.getElementById("root")).render(
  /* @__PURE__ */ _.jsx(Qo.StrictMode, { children: /* @__PURE__ */ _.jsx(mk, {}) })
);
//# sourceMappingURL=main.js.map
