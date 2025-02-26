/*!
 * iro.js v5.3.2
 * 2016-2020 James Daniel
 * Licensed under MPL 2.0
 * github.com/jaames/iro.js
 */
! function (t, n) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).iro = n()
}(this, function () {
  "use strict";
  var k, s, n, i, o, m = {},
    M = [],
    r = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;

  function j(t, n) {
    for (var i in n) t[i] = n[i];
    return t
  }

  function b(t) {
    var n = t.parentNode;
    n && n.removeChild(t)
  }

  function d(t, n, i) {
    var r, e, u, o, l = arguments;
    if (n = j({}, n), 3 < arguments.length)
      for (i = [i], r = 3; r < arguments.length; r++) i.push(l[r]);
    if (null != i && (n.children = i), null != t && null != t.defaultProps)
      for (e in t.defaultProps) void 0 === n[e] && (n[e] = t.defaultProps[e]);
    return o = n.key, null != (u = n.ref) && delete n.ref, null != o && delete n.key, c(t, n, o, u)
  }

  function c(t, n, i, r) {
    var e = {
      type: t,
      props: n,
      key: i,
      ref: r,
      n: null,
      i: null,
      e: 0,
      o: null,
      l: null,
      c: null,
      constructor: void 0
    };
    return k.vnode && k.vnode(e), e
  }

  function I(t) {
    return t.children
  }

  function O(t, n) {
    this.props = t, this.context = n
  }

  function w(t, n) {
    if (null == n) return t.i ? w(t.i, t.i.n.indexOf(t) + 1) : null;
    for (var i; n < t.n.length; n++)
      if (null != (i = t.n[n]) && null != i.o) return i.o;
    return "function" == typeof t.type ? w(t) : null
  }

  function f(t) {
    var n, i;
    if (null != (t = t.i) && null != t.c) {
      for (t.o = t.c.base = null, n = 0; n < t.n.length; n++)
        if (null != (i = t.n[n]) && null != i.o) {
          t.o = t.c.base = i.o;
          break
        } return f(t)
    }
  }

  function e(t) {
    (!t.f && (t.f = !0) && 1 === s.push(t) || i !== k.debounceRendering) && (i = k.debounceRendering, (k.debounceRendering || n)(u))
  }

  function u() {
    var t, n, i, r, e, u, o, l;
    for (s.sort(function (t, n) {
        return n.p.e - t.p.e
      }); t = s.pop();) t.f && (r = i = void 0, u = (e = (n = t).p).o, o = n.w, l = n.u, n.u = !1, o && (i = [], r = x(o, e, j({}, e), n.k, void 0 !== o.ownerSVGElement, null, i, l, null == u ? w(e) : u), v(i, e), r != u && f(e)))
  }

  function A(n, i, t, r, e, u, o, l, s) {
    var c, f, h, a, v, d, g, p = t && t.n || M,
      y = p.length;
    if (l == m && (l = null != u ? u[0] : y ? w(t, 0) : null), c = 0, i.n = S(i.n, function (t) {
        if (null != t) {
          if (t.i = i, t.e = i.e + 1, null === (h = p[c]) || h && t.key == h.key && t.type === h.type) p[c] = void 0;
          else
            for (f = 0; f < y; f++) {
              if ((h = p[f]) && t.key == h.key && t.type === h.type) {
                p[f] = void 0;
                break
              }
              h = null
            }
          if (a = x(n, t, h = h || m, r, e, u, o, null, l, s), (f = t.ref) && h.ref != f && (g = g || []).push(f, t.c || a, t), null != a) {
            if (null == d && (d = a), null != t.l) a = t.l, t.l = null;
            else if (u == h || a != l || null == a.parentNode) {
              t: if (null == l || l.parentNode !== n) n.appendChild(a);
                else {
                  for (v = l, f = 0;
                    (v = v.nextSibling) && f < y; f += 2)
                    if (v == a) break t;
                  n.insertBefore(a, l)
                }
              "option" == i.type && (n.value = "")
            }
            l = a.nextSibling, "function" == typeof i.type && (i.l = a)
          }
        }
        return c++, t
      }), i.o = d, null != u && "function" != typeof i.type)
      for (c = u.length; c--;) null != u[c] && b(u[c]);
    for (c = y; c--;) null != p[c] && R(p[c], p[c]);
    if (g)
      for (c = 0; c < g.length; c++) N(g[c], g[++c], g[++c])
  }

  function S(t, n, i) {
    if (null == i && (i = []), null == t || "boolean" == typeof t) n && i.push(n(null));
    else if (Array.isArray(t))
      for (var r = 0; r < t.length; r++) S(t[r], n, i);
    else i.push(n ? n(function (t) {
      if (null == t || "boolean" == typeof t) return null;
      if ("string" == typeof t || "number" == typeof t) return c(null, t, null, null);
      if (null == t.o && null == t.c) return t;
      var n = c(t.type, t.props, t.key, null);
      return n.o = t.o, n
    }(t)) : t);
    return i
  }

  function h(t, n, i) {
    "-" === n[0] ? t.setProperty(n, i) : t[n] = "number" == typeof i && !1 === r.test(n) ? i + "px" : null == i ? "" : i
  }

  function E(t, n, i, r, e) {
    var u, o, l, s, c;
    if ("key" === (n = e ? "className" === n ? "class" : n : "class" === n ? "className" : n) || "children" === n);
    else if ("style" === n)
      if (u = t.style, "string" == typeof i) u.cssText = i;
      else {
        if ("string" == typeof r && (u.cssText = "", r = null), r)
          for (o in r) i && o in i || h(u, o, "");
        if (i)
          for (l in i) r && i[l] === r[l] || h(u, l, i[l])
      }
    else "o" === n[0] && "n" === n[1] ? (s = n !== (n = n.replace(/Capture$/, "")), n = ((c = n.toLowerCase()) in t ? c : n).slice(2), i ? (r || t.addEventListener(n, a, s), (t.t || (t.t = {}))[n] = i) : t.removeEventListener(n, a, s)) : "list" !== n && "tagName" !== n && "form" !== n && !e && n in t ? t[n] = null == i ? "" : i : "function" != typeof i && "dangerouslySetInnerHTML" !== n && (n !== (n = n.replace(/^xlink:?/, "")) ? null == i || !1 === i ? t.removeAttributeNS("http://www.w3.org/1999/xlink", n.toLowerCase()) : t.setAttributeNS("http://www.w3.org/1999/xlink", n.toLowerCase(), i) : null == i || !1 === i ? t.removeAttribute(n) : t.setAttribute(n, i))
  }

  function a(t) {
    return this.t[t.type](k.event ? k.event(t) : t)
  }

  function x(t, n, i, r, e, u, o, l, s, c) {
    var f, h, a, v, d, g, p, y, b, w, x = n.type;
    if (void 0 !== n.constructor) return null;
    (f = k.e) && f(n);
    try {
      t: if ("function" == typeof x) {
        if (y = n.props, b = (f = x.contextType) && r[f.c], w = f ? b ? b.props.value : f.i : r, i.c ? p = (h = n.c = i.c).i = h.m : ("prototype" in x && x.prototype.render ? n.c = h = new x(y, w) : (n.c = h = new O(y, w), h.constructor = x, h.render = _), b && b.sub(h), h.props = y, h.state || (h.state = {}), h.context = w, h.k = r, a = h.f = !0, h.M = []), null == h.j && (h.j = h.state), null != x.getDerivedStateFromProps && j(h.j == h.state ? h.j = j({}, h.j) : h.j, x.getDerivedStateFromProps(y, h.j)), a) null == x.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && o.push(h);
        else {
          if (null == x.getDerivedStateFromProps && null == l && null != h.componentWillReceiveProps && h.componentWillReceiveProps(y, w), !l && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(y, h.j, w)) {
            for (h.props = y, h.state = h.j, h.f = !1, (h.p = n).o = null != s ? s !== i.o ? s : i.o : null, n.n = i.n, f = 0; f < n.n.length; f++) n.n[f] && (n.n[f].i = n);
            break t
          }
          null != h.componentWillUpdate && h.componentWillUpdate(y, h.j, w)
        }
        for (v = h.props, d = h.state, h.context = w, h.props = y, h.state = h.j, (f = k.I) && f(n), h.f = !1, h.p = n, h.w = t, f = h.render(h.props, h.state, h.context), n.n = S(null != f && f.type == I && null == f.key ? f.props.children : f), null != h.getChildContext && (r = j(j({}, r), h.getChildContext())), a || null == h.getSnapshotBeforeUpdate || (g = h.getSnapshotBeforeUpdate(v, d)), A(t, n, i, r, e, u, o, s, c), h.base = n.o; f = h.M.pop();) h.j && (h.state = h.j), f.call(h);
        a || null == v || null == h.componentDidUpdate || h.componentDidUpdate(v, d, g), p && (h.m = h.i = null)
      } else n.o = function (t, n, i, r, e, u, o, l) {
        var s, c, f, h, a = i.props,
          v = n.props;
        if (e = "svg" === n.type || e, null == t && null != u)
          for (s = 0; s < u.length; s++)
            if (null != (c = u[s]) && (null === n.type ? 3 === c.nodeType : c.localName === n.type)) {
              t = c, u[s] = null;
              break
            } if (null == t) {
          if (null === n.type) return document.createTextNode(v);
          t = e ? document.createElementNS("http://www.w3.org/2000/svg", n.type) : document.createElement(n.type), u = null
        }
        return null === n.type ? a !== v && (null != u && (u[u.indexOf(t)] = null), t.data = v) : n !== i && (null != u && (u = M.slice.call(t.childNodes)), f = (a = i.props || m).dangerouslySetInnerHTML, h = v.dangerouslySetInnerHTML, l || (h || f) && (h && f && h.O == f.O || (t.innerHTML = h && h.O || "")), function (t, n, i, r, e) {
          var u;
          for (u in i) u in n || E(t, u, null, i[u], r);
          for (u in n) e && "function" != typeof n[u] || "value" === u || "checked" === u || i[u] === n[u] || E(t, u, n[u], i[u], r)
        }(t, v, a, e, l), n.n = n.props.children, h || A(t, n, i, r, "foreignObject" !== n.type && e, u, o, m, l), l || ("value" in v && void 0 !== v.value && v.value !== t.value && (t.value = null == v.value ? "" : v.value), "checked" in v && void 0 !== v.checked && v.checked !== t.checked && (t.checked = v.checked))), t
      }(i.o, n, i, r, e, u, o, c);
      (f = k.diffed) && f(n)
    }
    catch (t) {
      k.o(t, n, i)
    }
    return n.o
  }

  function v(t, n) {
    for (var i; i = t.pop();) try {
      i.componentDidMount()
    } catch (t) {
      k.o(t, i.p)
    }
    k.c && k.c(n)
  }

  function N(t, n, i) {
    try {
      "function" == typeof t ? t(n) : t.current = n
    } catch (t) {
      k.o(t, i)
    }
  }

  function R(t, n, i) {
    var r, e, u;
    if (k.unmount && k.unmount(t), (r = t.ref) && N(r, null, n), i || "function" == typeof t.type || (i = null != (e = t.o)), t.o = t.l = null, null != (r = t.c)) {
      if (r.componentWillUnmount) try {
        r.componentWillUnmount()
      } catch (t) {
        k.o(t, n)
      }
      r.base = r.w = null
    }
    if (r = t.n)
      for (u = 0; u < r.length; u++) r[u] && R(r[u], n, i);
    null != e && b(e)
  }

  function _(t, n, i) {
    return this.constructor(t, i)
  }

  function g(t, n) {
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function p() {
    return (p = Object.assign || function (t) {
      for (var n = arguments, i = 1; i < arguments.length; i++) {
        var r = n[i];
        for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e])
      }
      return t
    }).apply(this, arguments)
  }
  k = {}, O.prototype.setState = function (t, n) {
    var i = this.j !== this.state && this.j || (this.j = j({}, this.state));
    "function" == typeof t && !(t = t(i, this.props)) || j(i, t), null != t && this.p && (this.u = !1, n && this.M.push(n), e(this))
  }, O.prototype.forceUpdate = function (t) {
    this.p && (t && this.M.push(t), this.u = !0, e(this))
  }, O.prototype.render = I, s = [], n = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, i = k.debounceRendering, k.o = function (t, n, i) {
    for (var r; n = n.i;)
      if ((r = n.c) && !r.i) try {
        if (r.constructor && null != r.constructor.getDerivedStateFromError) r.setState(r.constructor.getDerivedStateFromError(t));
        else {
          if (null == r.componentDidCatch) continue;
          r.componentDidCatch(t)
        }
        return e(r.m = r)
      } catch (n) {
        t = n
      }
    throw t
  }, o = m;
  var t = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
    l = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?",
    y = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?",
    P = new RegExp("rgb" + l),
    z = new RegExp("rgba" + y),
    H = new RegExp("hsl" + l),
    $ = new RegExp("hsla" + y),
    T = "^(?:#?|0x?)",
    W = "([0-9a-fA-F]{1})",
    B = "([0-9a-fA-F]{2})",
    C = new RegExp(T + W + W + W + "$"),
    D = new RegExp(T + W + W + W + W + "$"),
    F = new RegExp(T + B + B + B + "$"),
    G = new RegExp(T + B + B + B + B + "$"),
    L = Math.log,
    U = Math.round,
    q = Math.floor;

  function J(t, n, i) {
    return Math.min(Math.max(t, n), i)
  }

  function K(t, n) {
    var i = -1 < t.indexOf("%"),
      r = parseFloat(t);
    return i ? n / 100 * r : r
  }

  function Q(t) {
    return parseInt(t, 16)
  }

  function V(t) {
    return t.toString(16).padStart(2, "0")
  }
  var X, Y = function () {
    function l(t, n) {
      this.$ = {
        h: 0,
        s: 0,
        v: 0,
        a: 1
      }, t && this.set(t), this.onChange = n, this.initialValue = p({}, this.$)
    }
    var t = l.prototype;
    return t.set = function (t) {
        if ("string" == typeof t) /^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t) ? this.hexString = t : /^rgba?/.test(t) ? this.rgbString = t : /^hsla?/.test(t) && (this.hslString = t);
        else {
          if ("object" != typeof t) throw new Error("Invalid color value");
          t instanceof l ? this.hsv = t.hsv : "object" == typeof t && "r" in t && "g" in t && "b" in t ? this.rgb = t : "object" == typeof t && "h" in t && "s" in t && "v" in t ? this.hsv = t : "object" == typeof t && "h" in t && "s" in t && "l" in t && (this.hsl = t)
        }
      }, t.setChannel = function (t, n, i) {
        var r;
        this[t] = p({}, this[t], ((r = {})[n] = i, r))
      }, t.reset = function () {
        this.hsva = this.initialValue
      }, t.clone = function () {
        return new l(this)
      }, t.unbind = function () {
        this.onChange = void 0
      }, l.hsvToRgb = function (t) {
        var n = t.h / 60,
          i = t.s / 100,
          r = t.v / 100,
          e = q(n),
          u = n - e,
          o = r * (1 - i),
          l = r * (1 - u * i),
          s = r * (1 - (1 - u) * i),
          c = e % 6,
          f = [s, r, r, l, o, o][c],
          h = [o, o, s, r, r, l][c];
        return {
          r: J(255 * [r, l, o, o, s, r][c], 0, 255),
          g: J(255 * f, 0, 255),
          b: J(255 * h, 0, 255)
        }
      }, l.rgbToHsv = function (t) {
        var n = t.r / 255,
          i = t.g / 255,
          r = t.b / 255,
          e = Math.max(n, i, r),
          u = Math.min(n, i, r),
          o = e - u,
          l = 0,
          s = e,
          c = 0 === e ? 0 : o / e;
        switch (e) {
          case u:
            l = 0;
            break;
          case n:
            l = (i - r) / o + (i < r ? 6 : 0);
            break;
          case i:
            l = (r - n) / o + 2;
            break;
          case r:
            l = (n - i) / o + 4
        }
        return {
          h: 60 * l % 360,
          s: J(100 * c, 0, 100),
          v: J(100 * s, 0, 100)
        }
      }, l.hsvToHsl = function (t) {
        var n = t.s / 100,
          i = t.v / 100,
          r = (2 - n) * i,
          e = r <= 1 ? r : 2 - r,
          u = e < 1e-9 ? 0 : n * i / e;
        return {
          h: t.h,
          s: J(100 * u, 0, 100),
          l: J(50 * r, 0, 100)
        }
      }, l.hslToHsv = function (t) {
        var n = 2 * t.l,
          i = t.s * (n <= 100 ? n : 200 - n) / 100,
          r = n + i < 1e-9 ? 0 : 2 * i / (n + i);
        return {
          h: t.h,
          s: J(100 * r, 0, 100),
          v: J((n + i) / 2, 0, 100)
        }
      }, l.kelvinToRgb = function (t) {
        var n, i, r, e = t / 100;
        return r = e < 66 ? (n = 255, i = -155.25485562709179 - .44596950469579133 * (i = e - 2) + 104.49216199393888 * L(i), e < 20 ? 0 : .8274096064007395 * (r = e - 10) - 254.76935184120902 + 115.67994401066147 * L(r)) : (n = 351.97690566805693 + .114206453784165 * (n = e - 55) - 40.25366309332127 * L(n), i = 325.4494125711974 + .07943456536662342 * (i = e - 50) - 28.0852963507957 * L(i), 255), {
          r: J(q(n), 0, 255),
          g: J(q(i), 0, 255),
          b: J(q(r), 0, 255)
        }
      }, l.rgbToKelvin = function (t) {
        for (var n, i = t.r, r = t.b, e = 2e3, u = 4e4; .4 < u - e;) {
          var o = l.kelvinToRgb(n = .5 * (u + e));
          o.b / o.r >= r / i ? u = n : e = n
        }
        return n
      },
      function (t, n, i) {
        n && g(t.prototype, n), i && g(t, i)
      }(l, [{
        key: "hsv",
        get: function () {
          var t = this.$;
          return {
            h: t.h,
            s: t.s,
            v: t.v
          }
        },
        set: function (t) {
          var n = this.$;
          if (t = p({}, n, t), this.onChange) {
            var i = {
              h: !1,
              v: !1,
              s: !1,
              a: !1
            };
            for (var r in n) i[r] = t[r] != n[r];
            this.$ = t, (i.h || i.s || i.v || i.a) && this.onChange(this, i)
          } else this.$ = t
        }
      }, {
        key: "hsva",
        get: function () {
          return p({}, this.$)
        },
        set: function (t) {
          this.hsv = t
        }
      }, {
        key: "hue",
        get: function () {
          return this.$.h
        },
        set: function (t) {
          this.hsv = {
            h: t
          }
        }
      }, {
        key: "saturation",
        get: function () {
          return this.$.s
        },
        set: function (t) {
          this.hsv = {
            s: t
          }
        }
      }, {
        key: "value",
        get: function () {
          return this.$.v
        },
        set: function (t) {
          this.hsv = {
            v: t
          }
        }
      }, {
        key: "alpha",
        get: function () {
          return this.$.a
        },
        set: function (t) {
          this.hsv = p({}, this.hsv, {
            a: t
          })
        }
      }, {
        key: "kelvin",
        get: function () {
          return l.rgbToKelvin(this.rgb)
        },
        set: function (t) {
          this.rgb = l.kelvinToRgb(t)
        }
      }, {
        key: "red",
        get: function () {
          return this.rgb.r
        },
        set: function (t) {
          this.rgb = p({}, this.rgb, {
            r: t
          })
        }
      }, {
        key: "green",
        get: function () {
          return this.rgb.g
        },
        set: function (t) {
          this.rgb = p({}, this.rgb, {
            g: t
          })
        }
      }, {
        key: "blue",
        get: function () {
          return this.rgb.b
        },
        set: function (t) {
          this.rgb = p({}, this.rgb, {
            b: t
          })
        }
      }, {
        key: "rgb",
        get: function () {
          var t = l.hsvToRgb(this.$),
            n = t.r,
            i = t.g,
            r = t.b;
          return {
            r: U(n),
            g: U(i),
            b: U(r)
          }
        },
        set: function (t) {
          this.hsv = p({}, l.rgbToHsv(t), {
            a: void 0 === t.a ? 1 : t.a
          })
        }
      }, {
        key: "rgba",
        get: function () {
          return p({}, this.rgb, {
            a: this.alpha
          })
        },
        set: function (t) {
          this.rgb = t
        }
      }, {
        key: "hsl",
        get: function () {
          var t = l.hsvToHsl(this.$),
            n = t.h,
            i = t.s,
            r = t.l;
          return {
            h: U(n),
            s: U(i),
            l: U(r)
          }
        },
        set: function (t) {
          this.hsv = p({}, l.hslToHsv(t), {
            a: void 0 === t.a ? 1 : t.a
          })
        }
      }, {
        key: "hsla",
        get: function () {
          return p({}, this.hsl, {
            a: this.alpha
          })
        },
        set: function (t) {
          this.hsl = t
        }
      }, {
        key: "rgbString",
        get: function () {
          var t = this.rgb;
          return "rgb(" + t.r + ", " + t.g + ", " + t.b + ")"
        },
        set: function (t) {
          var n, i, r, e, u = 1;
          if ((n = P.exec(t)) ? (i = K(n[1], 255), r = K(n[2], 255), e = K(n[3], 255)) : (n = z.exec(t)) && (i = K(n[1], 255), r = K(n[2], 255), e = K(n[3], 255), u = K(n[4], 1)), !n) throw new Error("Invalid rgb string");
          this.rgb = {
            r: i,
            g: r,
            b: e,
            a: u
          }
        }
      }, {
        key: "rgbaString",
        get: function () {
          var t = this.rgba;
          return "rgba(" + t.r + ", " + t.g + ", " + t.b + ", " + t.a + ")"
        },
        set: function (t) {
          this.rgbString = t
        }
      }, {
        key: "hexString",
        get: function () {
          var t = this.rgb;
          return "#" + V(t.r) + V(t.g) + V(t.b)
        },
        set: function (t) {
          var n, i, r, e, u = 255;
          if ((n = C.exec(t)) ? (i = 17 * Q(n[1]), r = 17 * Q(n[2]), e = 17 * Q(n[3])) : (n = D.exec(t)) ? (i = 17 * Q(n[1]), r = 17 * Q(n[2]), e = 17 * Q(n[3]), u = 17 * Q(n[4])) : (n = F.exec(t)) ? (i = Q(n[1]), r = Q(n[2]), e = Q(n[3])) : (n = G.exec(t)) && (i = Q(n[1]), r = Q(n[2]), e = Q(n[3]), u = Q(n[4])), !n) throw new Error("Invalid hex string");
          this.rgb = {
            r: i,
            g: r,
            b: e,
            a: u / 255
          }
        }
      }, {
        key: "hex8String",
        get: function () {
          var t = this.rgba;
          return "#" + V(t.r) + V(t.g) + V(t.b) + V(q(255 * t.a))
        },
        set: function (t) {
          this.hexString = t
        }
      }, {
        key: "hslString",
        get: function () {
          var t = this.hsl;
          return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)"
        },
        set: function (t) {
          var n, i, r, e, u = 1;
          if ((n = H.exec(t)) ? (i = K(n[1], 360), r = K(n[2], 100), e = K(n[3], 100)) : (n = $.exec(t)) && (i = K(n[1], 360), r = K(n[2], 100), e = K(n[3], 100), u = K(n[4], 1)), !n) throw new Error("Invalid hsl string");
          this.hsl = {
            h: i,
            s: r,
            l: e,
            a: u
          }
        }
      }, {
        key: "hslaString",
        get: function () {
          var t = this.hsla;
          return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%, " + t.a + ")"
        },
        set: function (t) {
          this.hslString = t
        }
      }]), l
  }();

  function Z(t) {
    var n, i = t.width,
      r = t.sliderSize,
      e = t.borderWidth,
      u = t.handleRadius,
      o = t.padding,
      l = t.sliderShape,
      s = "horizontal" === t.layoutDirection;
    return r = null != (n = r) ? n : 2 * o + 2 * u + 2 * e, "circle" === l ? {
      handleStart: t.padding + t.handleRadius,
      handleRange: i - 2 * o - 2 * u - 2 * e,
      width: i,
      height: i,
      cx: i / 2,
      cy: i / 2,
      radius: i / 2 - e / 2
    } : {
      handleStart: r / 2,
      handleRange: i - r,
      radius: r / 2,
      x: 0,
      y: 0,
      width: s ? r : i,
      height: s ? i : r
    }
  }

  function tt(t, n) {
    var i = Z(t),
      r = i.width,
      e = i.height,
      u = i.handleRange,
      o = i.handleStart,
      l = "horizontal" === t.layoutDirection,
      s = l ? r / 2 : e / 2,
      c = o + function (t, n) {
        var i = n.hsva,
          r = n.rgb;
        switch (t.sliderType) {
          case "red":
            return r.r / 2.55;
          case "green":
            return r.g / 2.55;
          case "blue":
            return r.b / 2.55;
          case "alpha":
            return 100 * i.a;
          case "kelvin":
            var e = t.minTemperature,
              u = t.maxTemperature - e,
              o = (n.kelvin - e) / u * 100;
            return Math.max(0, Math.min(o, 100));
          case "hue":
            return i.h /= 3.6;
          case "saturation":
            return i.s;
          case "value":
          default:
            return i.v
        }
      }(t, n) / 100 * u;
    return l && (c = -1 * c + u + 2 * o), {
      x: l ? s : c,
      y: l ? c : s
    }
  }

  function nt(t) {
    var n = t.width / 2;
    return {
      width: t.width,
      radius: n - t.borderWidth,
      cx: n,
      cy: n
    }
  }

  function it(t, n, i) {
    var r = t.wheelAngle,
      e = t.wheelDirection;
    return ((n = !i && "clockwise" === e || i && "anticlockwise" === e ? (i ? 180 : 360) - (r - n) : r + n) % 360 + 360) % 360
  }

  function rt(t, n, i) {
    var r = nt(t),
      e = r.cx,
      u = r.cy,
      o = t.width / 2 - t.padding - t.handleRadius - t.borderWidth;
    n = e - n, i = u - i;
    var l = it(t, Math.atan2(-i, -n) * (180 / Math.PI)),
      s = Math.min(Math.sqrt(n * n + i * i), o);
    return {
      h: Math.round(l),
      s: Math.round(100 / o * s)
    }
  }

  function et(t) {
    var n = t.width,
      i = t.boxHeight;
    return {
      width: n,
      height: null != i ? i : n,
      radius: t.padding + t.handleRadius
    }
  }

  function ut(t, n, i) {
    var r = et(t),
      e = r.width,
      u = r.height,
      o = r.radius,
      l = (n - o) / (e - 2 * o) * 100,
      s = (i - o) / (u - 2 * o) * 100;
    return {
      s: Math.max(0, Math.min(l, 100)),
      v: Math.max(0, Math.min(100 - s, 100))
    }
  }

  function ot(t) {
    X = X || document.getElementsByTagName("base");
    var n = window.navigator.userAgent,
      i = /^((?!chrome|android).)*safari/i.test(n),
      r = /iPhone|iPod|iPad/i.test(n),
      e = window.location;
    return (i || r) && 0 < X.length ? e.protocol + "//" + e.host + e.pathname + e.search + t : t
  }

  function lt(t, n, i, r) {
    for (var e = 0; e < r.length; e++) {
      var u = r[e].x - n,
        o = r[e].y - i;
      if (Math.sqrt(u * u + o * o) < t.handleRadius) return e
    }
    return null
  }
  var st = ["mousemove", "touchmove", "mouseup", "touchend"],
    ct = function (n) {
      function t(t) {
        n.call(this, t), this.uid = (Math.random() + 1).toString(36).substring(5)
      }
      return n && (t.__proto__ = n), ((t.prototype = Object.create(n && n.prototype)).constructor = t).prototype.render = function (t) {
        var n = this.handleEvent.bind(this),
          i = {
            onMouseDown: n,
            ontouchstart: n
          },
          r = "horizontal" === t.layoutDirection,
          e = null === t.margin ? t.sliderMargin : t.margin,
          u = {
            overflow: "visible",
            display: r ? "inline-block" : "block"
          };
        return 0 < t.index && (u[r ? "marginLeft" : "marginTop"] = e), d(I, null, t.children(this.uid, i, u))
      }, t.prototype.handleEvent = function (t) {
        var n = this,
          i = this.props.onInput,
          r = this.base.getBoundingClientRect();
        t.preventDefault();
        var e = t.touches ? t.changedTouches[0] : t,
          u = e.clientX - r.left,
          o = e.clientY - r.top;
        switch (t.type) {
          case "mousedown":
          case "touchstart":
            st.forEach(function (t) {
              document.addEventListener(t, n, {
                passive: !1
              })
            }), i(u, o, 0);
            break;
          case "mousemove":
          case "touchmove":
            i(u, o, 1);
            break;
          case "mouseup":
          case "touchend":
            i(u, o, 2), st.forEach(function (t) {
              document.removeEventListener(t, n, {
                passive: !1
              })
            })
        }
      }, t
    }(O);

  function ft(t) {
    var n = t.r,
      i = t.url;
    return d("svg", {
      className: "IroHandle IroHandle--" + t.index + " " + (t.isActive ? "IroHandle--isActive" : ""),
      x: t.x,
      y: t.y,
      style: {
        overflow: "visible"
      }
    }, i && d("use", Object.assign({
      xlinkHref: ot(i)
    }, t.props)), !i && d("circle", {
      r: n,
      fill: "none",
      "stroke-width": 2,
      stroke: "#000"
    }), !i && d("circle", {
      r: n - 2,
      fill: t.fill,
      "stroke-width": 2,
      stroke: "#fff"
    }))
  }

  function ht(e) {
    var t = e.activeIndex,
      u = void 0 !== t && t < e.colors.length ? e.colors[t] : e.color,
      n = Z(e),
      r = n.width,
      o = n.height,
      l = n.radius,
      s = tt(e, u),
      c = function (t, n) {
        var i = n.hsv,
          r = n.rgb;
        switch (t.sliderType) {
          case "red":
            return [
              [0, "rgb(0," + r.g + "," + r.b + ")"],
              [100, "rgb(255," + r.g + "," + r.b + ")"]
            ];
          case "green":
            return [
              [0, "rgb(" + r.r + ",0," + r.b + ")"],
              [100, "rgb(" + r.r + ",255," + r.b + ")"]
            ];
          case "blue":
            return [
              [0, "rgb(" + r.r + "," + r.g + ",0)"],
              [100, "rgb(" + r.r + "," + r.g + ",255)"]
            ];
          case "alpha":
            return [
              [0, "rgba(" + r.r + "," + r.g + "," + r.b + ",0)"],
              [100, "rgb(" + r.r + "," + r.g + "," + r.b + ")"]
            ];
          case "kelvin":
            for (var e = [], u = t.minTemperature, o = t.maxTemperature, l = o - u, s = u, c = 0; s < o; s += l / 8, c += 1) {
              var f = Y.kelvinToRgb(s),
                h = f.r,
                a = f.g,
                v = f.b;
              e.push([12.5 * c, "rgb(" + h + "," + a + "," + v + ")"])
            }
            return e;
          case "hue":
            return [
              [0, "#f00"],
              [16.666, "#ff0"],
              [33.333, "#0f0"],
              [50, "#0ff"],
              [66.666, "#00f"],
              [83.333, "#f0f"],
              [100, "#f00"]
            ];
          case "saturation":
            var d = Y.hsvToHsl({
                h: i.h,
                s: 0,
                v: i.v
              }),
              g = Y.hsvToHsl({
                h: i.h,
                s: 100,
                v: i.v
              });
            return [
              [0, "hsl(" + d.h + "," + d.s + "%," + d.l + "%)"],
              [100, "hsl(" + g.h + "," + g.s + "%," + g.l + "%)"]
            ];
          case "value":
          default:
            var p = Y.hsvToHsl({
              h: i.h,
              s: i.s,
              v: 100
            });
            return [
              [0, "#000"],
              [100, "hsl(" + p.h + "," + p.s + "%," + p.l + "%)"]
            ]
        }
      }(e, u),
      f = "alpha" === e.sliderType;
    return d(ct, Object.assign({}, e, {
      onInput: function (t, n, i) {
        var r = function (t, n, i) {
          var r, e = Z(t),
            u = e.handleRange,
            o = e.handleStart;
          r = "horizontal" === t.layoutDirection ? -1 * i + u + o : n - o, r = Math.max(Math.min(r, u), 0);
          var l = Math.round(100 / u * r);
          switch (t.sliderType) {
            case "kelvin":
              var s = t.minTemperature;
              return s + l / 100 * (t.maxTemperature - s);
            case "alpha":
              return l / 100;
            case "hue":
              return 3.6 * l;
            case "red":
            case "blue":
            case "green":
              return 2.55 * l;
            default:
              return l
          }
        }(e, t, n);
        e.parent.inputActive = !0, u[e.sliderType] = r, e.onInput(i, e.id)
      }
    }), function (t, n, i) {
      return d("svg", Object.assign({}, n, {
        className: "IroSlider",
        width: r,
        height: o,
        style: i
      }), d("defs", null, d("linearGradient", Object.assign({
        id: "g" + t
      }, function (t) {
        var n = "horizontal" === t.layoutDirection;
        return {
          x1: "0%",
          y1: n ? "100%" : "0%",
          x2: n ? "0%" : "100%",
          y2: "0%"
        }
      }(e)), c.map(function (t) {
        return d("stop", {
          offset: t[0] + "%",
          "stop-color": t[1]
        })
      })), f && d("pattern", {
        id: "b" + t,
        width: "8",
        height: "8",
        patternUnits: "userSpaceOnUse"
      }, d("rect", {
        x: "0",
        y: "0",
        width: "8",
        height: "8",
        fill: "#fff"
      }), d("rect", {
        x: "0",
        y: "0",
        width: "4",
        height: "4",
        fill: "#ccc"
      }), d("rect", {
        x: "4",
        y: "4",
        width: "4",
        height: "4",
        fill: "#ccc"
      })), f && d("pattern", {
        id: "f" + t,
        width: "100%",
        height: "100%"
      }, d("rect", {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        fill: "url(" + ot("#b" + t) + ")"
      }), d("rect", {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        fill: "url(" + ot("#g" + t) + ")"
      }))), d("rect", {
        className: "IroSliderBg",
        rx: l,
        ry: l,
        x: e.borderWidth / 2,
        y: e.borderWidth / 2,
        width: r - e.borderWidth,
        height: o - e.borderWidth,
        "stroke-width": e.borderWidth,
        stroke: e.borderColor,
        fill: "url(" + ot((f ? "#f" : "#g") + t) + ")"
      }), d(ft, {
        isActive: !0,
        index: u.index,
        r: e.handleRadius,
        url: e.handleSvg,
        props: e.handleProps,
        x: s.x,
        y: s.y
      }))
    })
  }

  function at(e) {
    var t = et(e),
      r = t.width,
      u = t.height,
      o = t.radius,
      l = e.colors,
      s = e.parent,
      n = e.activeIndex,
      c = void 0 !== n && n < e.colors.length ? e.colors[n] : e.color,
      f = function (t, n) {
        return [
          [
            [0, "#fff"],
            [100, "hsl(" + n.hue + ",100%,50%)"]
          ],
          [
            [0, "rgba(0,0,0,0)"],
            [100, "#000"]
          ]
        ]
      }(0, c),
      h = l.map(function (t) {
        return function (t, n) {
          var i = et(t),
            r = i.width,
            e = i.height,
            u = i.radius,
            o = n.hsv,
            l = u,
            s = r - 2 * u,
            c = e - 2 * u;
          return {
            x: l + o.s / 100 * s,
            y: l + (c - o.v / 100 * c)
          }
        }(e, t)
      });
    return d(ct, Object.assign({}, e, {
      onInput: function (t, n, i) {
        if (0 === i) {
          var r = lt(e, t, n, h);
          null !== r ? s.setActiveColor(r) : (s.inputActive = !0, c.hsv = ut(e, t, n), e.onInput(i, e.id))
        } else 1 === i && (s.inputActive = !0, c.hsv = ut(e, t, n));
        e.onInput(i, e.id)
      }
    }), function (t, n, i) {
      return d("svg", Object.assign({}, n, {
        className: "IroBox",
        width: r,
        height: u,
        style: i
      }), d("defs", null, d("linearGradient", {
        id: "s" + t,
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "0%"
      }, f[0].map(function (t) {
        return d("stop", {
          offset: t[0] + "%",
          "stop-color": t[1]
        })
      })), d("linearGradient", {
        id: "l" + t,
        x1: "0%",
        y1: "0%",
        x2: "0%",
        y2: "100%"
      }, f[1].map(function (t) {
        return d("stop", {
          offset: t[0] + "%",
          "stop-color": t[1]
        })
      })), d("pattern", {
        id: "f" + t,
        width: "100%",
        height: "100%"
      }, d("rect", {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        fill: "url(" + ot("#s" + t) + ")"
      }), d("rect", {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        fill: "url(" + ot("#l" + t) + ")"
      }))), d("rect", {
        className: "IroBoxBg",
        rx: o,
        ry: o,
        x: e.borderWidth / 2,
        y: e.borderWidth / 2,
        width: r - e.borderWidth,
        height: u - e.borderWidth,
        "stroke-width": e.borderWidth,
        stroke: e.borderColor,
        fill: "url(" + ot("#f" + t) + ")"
      }), l.filter(function (t) {
        return t !== c
      }).map(function (t) {
        return d(ft, {
          isActive: !1,
          index: t.index,
          fill: t.hslString,
          r: e.handleRadius,
          url: e.handleSvg,
          props: e.handleProps,
          x: h[t.index].x,
          y: h[t.index].y
        })
      }), d(ft, {
        isActive: !0,
        index: c.index,
        fill: c.hslString,
        r: e.handleRadius,
        url: e.handleSvg,
        props: e.handleProps,
        x: h[c.index].x,
        y: h[c.index].y
      }))
    })
  }
  ft.defaultProps = {
    fill: "none",
    x: 0,
    y: 0,
    r: 8,
    url: null,
    props: {
      x: 0,
      y: 0
    }
  }, ht.defaultProps = Object.assign({}, {
    sliderShape: "bar",
    sliderType: "value",
    minTemperature: 2200,
    maxTemperature: 11e3
  });
  var vt = Array.apply(null, {
    length: 360
  }).map(function (t, n) {
    return n
  });

  function dt(e) {
    var t = nt(e),
      r = t.width,
      u = t.radius,
      o = t.cx,
      l = t.cy,
      s = e.colors,
      c = e.borderWidth,
      f = e.parent,
      h = e.color,
      a = h.hsv,
      v = s.map(function (t) {
        return function (t, n) {
          var i = n.hsv,
            r = nt(t),
            e = r.cx,
            u = r.cy,
            o = t.width / 2 - t.padding - t.handleRadius - t.borderWidth,
            l = (180 + it(t, i.h, !0)) * (Math.PI / 180),
            s = i.s / 100 * o,
            c = "clockwise" === t.wheelDirection ? -1 : 1;
          return {
            x: e + s * Math.cos(l) * c,
            y: u + s * Math.sin(l) * c
          }
        }(e, t)
      });
    return d(ct, Object.assign({}, e, {
      onInput: function (t, n, i) {
        if (0 === i) {
          var r = lt(e, t, n, v);
          null !== r ? f.setActiveColor(r) : (f.inputActive = !0, h.hsv = rt(e, t, n), e.onInput(i, e.id))
        } else 1 === i && (f.inputActive = !0, h.hsv = rt(e, t, n));
        e.onInput(i, e.id)
      }
    }), function (t, n, i) {
      return d("svg", Object.assign({}, n, {
        className: "IroWheel",
        width: r,
        height: r,
        style: i
      }), d("defs", null, d("radialGradient", {
        id: t
      }, d("stop", {
        offset: "0%",
        "stop-color": "#fff"
      }), d("stop", {
        offset: "100%",
        "stop-color": "#fff",
        "stop-opacity": "0"
      }))), d("g", {
        className: "IroWheelHue",
        "stroke-width": u,
        fill: "none"
      }, vt.map(function (t) {
        return d("path", {
          key: t,
          d: function (t, n, i, r, e) {
            var u = e - r <= 180 ? 0 : 1;
            return r *= Math.PI / 180, e *= Math.PI / 180, "M " + (t + i * Math.cos(e)) + " " + (n + i * Math.sin(e)) + " A " + i + " " + i + " 0 " + u + " 0 " + (t + i * Math.cos(r)) + " " + (n + i * Math.sin(r))
          }(o, l, u / 2, t, t + 1.5),
          stroke: "hsl(" + it(e, t) + ", 100%, 50%)"
        })
      })), d("circle", {
        className: "IroWheelSaturation",
        cx: o,
        cy: l,
        r: u,
        fill: "url(" + ot("#" + t) + ")"
      }), e.wheelLightness && d("circle", {
        className: "IroWheelLightness",
        cx: o,
        cy: l,
        r: u,
        fill: "#000",
        opacity: 1 - a.v / 100
      }), d("circle", {
        className: "IroWheelBorder",
        cx: o,
        cy: l,
        r: u,
        fill: "none",
        stroke: e.borderColor,
        "stroke-width": c
      }), s.filter(function (t) {
        return t !== h
      }).map(function (t) {
        return d(ft, {
          isActive: !1,
          index: t.index,
          fill: t.hslString,
          r: e.handleRadius,
          url: e.handleSvg,
          props: e.handleProps,
          x: v[t.index].x,
          y: v[t.index].y
        })
      }), d(ft, {
        isActive: !0,
        index: h.index,
        fill: h.hslString,
        r: e.handleRadius,
        url: e.handleSvg,
        props: e.handleProps,
        x: v[h.index].x,
        y: v[h.index].y
      }))
    })
  }
  var gt = function (i) {
    function t(t) {
      var n = this;
      i.call(this, t), this.colors = [], this.inputActive = !1, this.events = {}, this.activeEvents = {}, this.deferredEvents = {}, this.id = t.id, (0 < t.colors.length ? t.colors : [t.color]).forEach(function (t) {
        return n.addColor(t)
      }), this.setActiveColor(0), this.state = Object.assign({}, t, {
        color: this.color,
        colors: this.colors,
        layout: t.layout
      })
    }
    return i && (t.__proto__ = i), ((t.prototype = Object.create(i && i.prototype)).constructor = t).prototype.addColor = function (t, n) {
      void 0 === n && (n = this.colors.length);
      var i = new Y(t, this.onColorChange.bind(this));
      this.colors.splice(n, 0, i), this.colors.forEach(function (t, n) {
        return t.index = n
      }), this.state && this.setState({
        colors: this.colors
      }), this.deferredEmit("color:init", i)
    }, t.prototype.removeColor = function (t) {
      var n = this.colors.splice(t, 1)[0];
      n.unbind(), this.colors.forEach(function (t, n) {
        return t.index = n
      }), this.state && this.setState({
        colors: this.colors
      }), n.index === this.color.index && this.setActiveColor(0), this.emit("color:remove", n)
    }, t.prototype.setActiveColor = function (t) {
      this.color = this.colors[t], this.state && this.setState({
        color: this.color
      }), this.emit("color:setActive", this.color)
    }, t.prototype.setColors = function (t, n) {
      var i = this;
      void 0 === n && (n = 0), this.colors.forEach(function (t) {
        return t.unbind()
      }), this.colors = [], t.forEach(function (t) {
        return i.addColor(t)
      }), this.setActiveColor(n), this.emit("color:setAll", this.colors)
    }, t.prototype.on = function (t, n) {
      var i = this,
        r = this.events;
      (Array.isArray(t) ? t : [t]).forEach(function (t) {
        (r[t] || (r[t] = [])).push(n), i.deferredEvents[t] && (i.deferredEvents[t].forEach(function (t) {
          n.apply(null, t)
        }), i.deferredEvents[t] = [])
      })
    }, t.prototype.off = function (t, i) {
      var r = this;
      (Array.isArray(t) ? t : [t]).forEach(function (t) {
        var n = r.events[t];
        n && n.splice(n.indexOf(i), 1)
      })
    }, t.prototype.emit = function (t) {
      for (var n = this, i = [], r = arguments.length - 1; 0 < r--;) i[r] = arguments[r + 1];
      var e = this.activeEvents;
      !!e.hasOwnProperty(t) && e[t] || (e[t] = !0, (this.events[t] || []).forEach(function (t) {
        return t.apply(n, i)
      }), e[t] = !1)
    }, t.prototype.deferredEmit = function (t) {
      for (var n, i = [], r = arguments.length - 1; 0 < r--;) i[r] = arguments[r + 1];
      var e = this.deferredEvents;
      (n = this).emit.apply(n, [t].concat(i)), (e[t] || (e[t] = [])).push(i)
    }, t.prototype.setOptions = function (t) {
      this.setState(Object.assign({}, this.state, t))
    }, t.prototype.resize = function (t) {
      this.setOptions({
        width: t
      })
    }, t.prototype.reset = function () {
      this.colors.forEach(function (t) {
        return t.reset()
      }), this.setState({
        colors: this.colors
      })
    }, t.prototype.onMount = function (t) {
      this.el = t, this.deferredEmit("mount", this)
    }, t.prototype.onColorChange = function (t, n) {
      this.setState({
        color: this.color
      }), this.inputActive && (this.inputActive = !1, this.emit("input:change", t, n)), this.emit("color:change", t, n)
    }, t.prototype.emitInputEvent = function (t, n) {
      0 === t ? this.emit("input:start", this.color, n) : 1 === t ? this.emit("input:move", this.color, n) : 2 === t && this.emit("input:end", this.color, n)
    }, t.prototype.render = function (t, e) {
      var u = this,
        n = e.layout;
      return Array.isArray(n) || (n = [{
        component: dt
      }, {
        component: ht
      }], e.transparency && n.push({
        component: ht,
        options: {
          sliderType: "alpha"
        }
      })), d("div", {
        class: "IroColorPicker",
        id: e.id,
        style: {
          display: e.display
        }
      }, n.map(function (t, n) {
        var i = t.component,
          r = t.options;
        return d(i, Object.assign({}, e, r, {
          ref: void 0,
          onInput: u.emitInputEvent.bind(u),
          parent: u,
          index: n
        }))
      }))
    }, t
  }(O);
  gt.defaultProps = Object.assign({}, {
    width: 300,
    height: 300,
    color: "#fff",
    colors: [],
    padding: 6,
    layoutDirection: "vertical",
    borderColor: "#fff",
    borderWidth: 0,
    handleRadius: 8,
    handleSvg: null,
    handleProps: {
      x: 0,
      y: 0
    },
    wheelLightness: !0,
    wheelAngle: 0,
    wheelDirection: "anticlockwise",
    sliderSize: null,
    sliderMargin: 12,
    boxHeight: null
  }, {
    colors: [],
    display: "block",
    id: null,
    layout: "default",
    margin: null
  });
  var pt, yt, bt, wt, xt = (kt.prototype = (pt = gt).prototype, Object.assign(kt, pt), kt.A = pt, kt);

  function kt(n, t) {
    var i, r = document.createElement("div");

    function e() {
      var t = n instanceof Element ? n : document.querySelector(n);
      t.appendChild(i.base), i.onMount(t)
    }
    return function (t, n, i) {
      var r, e, u;
      k.i && k.i(t, n), e = (r = i === o) ? null : i && i.n || n.n, t = d(I, null, [t]), u = [], x(n, r ? n.n = t : (i || n).n = t, e || m, m, void 0 !== n.ownerSVGElement, i && !r ? [i] : e ? null : M.slice.call(n.childNodes), u, !1, i || m, r), v(u, t)
    }(d(pt, Object.assign({}, {
      ref: function (t) {
        return i = t
      }
    }, t)), r), "loading" !== document.readyState ? e() : document.addEventListener("DOMContentLoaded", e), i
  }
  return (bt = yt = yt || {}).version = "5.3.2", bt.Color = Y, bt.ColorPicker = xt, (wt = bt.ui || (bt.ui = {})).h = d, wt.ComponentBase = ct, wt.Handle = ft, wt.Slider = ht, wt.Wheel = dt, wt.Box = at, yt
});
var colorPicker1 = new iro.ColorPicker(".picker1", {
  color: '#FC5D7D',
  layout: [{
    component: iro.ui.Slider,
    options: {
      sliderType: "hue",
    },
  }, ],
  handleSvg: "#handle",
  handleProps: {
    y: 0
  },
});
var colorPicker2 = new iro.ColorPicker(".picker2", {
  color: '#FC5D7D',
  layout: [{
    component: iro.ui.Slider,
    options: {
      sliderType: "hue",
    },
  }, ],
  handleSvg: "#handle",
  handleProps: {
    y: 0
  },
});
var colorPicker3 = new iro.ColorPicker(".picker3", {
  color: '#FC5D7D',
  layout: [{
    component: iro.ui.Slider,
    options: {
      sliderType: "hue",
    },
  }, ],
  handleSvg: "#handle",
  handleProps: {
    y: 0
  },
});
var colorPicker4 = new iro.ColorPicker(".picker4", {
  color: '#FC5D7D',
  layout: [{
    component: iro.ui.Slider,
    options: {
      sliderType: "hue",
    },
  }, ],
  handleSvg: "#handle",
  handleProps: {
    y: 0
  },
});
var colorPicker5 = new iro.ColorPicker(".picker5", {
  color: '#FC5D7D',
  layout: [{
    component: iro.ui.Slider,
    options: {
      sliderType: "hue",
    },
  }, ],
  handleSvg: "#handle",
  handleProps: {
    y: 0
  },
});

colorPicker1.on("color:change", function (color) {
  $('.colors-1').css({
    'background-color': color.hexString
  });
  // $('.color-picker-ct').fadeOut(1000);
  $('.colors-1 svg').addClass('hide');

});
colorPicker2.on("color:change", function (color) {
  $('.colors-2').css({
    'background-color': color.hexString
  });
  $('.colors-2 svg').addClass('hide');
});
colorPicker3.on("color:change", function (color) {
  $('.colors-3').css({
    'background-color': color.hexString
  });
  $('.colors-3 svg').addClass('hide');
});
colorPicker4.on("color:change", function (color) {
  $('.colors-4').css({
    'background-color': color.hexString
  });
  $('.colors-4 svg').addClass('hide');
});
colorPicker5.on("color:change", function (color) {
  $('.colors-5').css({
    'background-color': color.hexString
  });
  $('.colors-5 svg').addClass('hide');
});


$(".color-list li").on("click", function () {
  $(".color-list li").removeClass("active");
  $(this).addClass("active");
  $(".okay-input").show();
  $(".okay-input").addClass("button-okay-input");
  $('.dot').hide();
  $('#okay-dot').show();
  $('#main-dot').show();
  $(this).addClass('field--not-empty');
  $('#okay-anim').show();
  setTimeout(function () {
    $('.button-okay').addClass('button-okay-anim');
    $('#okay-dot').addClass('okay-dot-increase')
  }, 10);
  $('.circle-fill').show();
});