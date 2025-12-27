(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [284],
  {
    210: (e, t, r) => {
      "use strict";
      r.d(t, {
        fb: () => ie,
        q: () => iD,
        tP: () => iU,
        g1: () => iY,
        iv: () => ac,
        Nk: () => n7,
        EZ: () => iw,
        pM: () => ih,
        Oz: () => iC,
        tF: () => au,
        rj: () => n8,
        ec: () => n1,
        bb: () => iI,
        xp: () => iW,
        wL: () => iR,
        sr: () => iB,
        Qn: () => iZ,
        MK: () => is,
        IO: () => n3,
        P9: () => ij,
        S5: () => iy,
        PU: () => nU,
        cd: () => nK,
        eo: () => nJ,
        yi: () => ix,
        CH: () => ib,
        ZB: () => af,
        D5: () => i2,
        Gx: () => ap,
        DP: () => nV,
        _y: () => av,
        AV: () => iv,
        Lu: () => ig,
        um: () => nX,
        xM: () => iK,
        gT: () => iS,
        Kr: () => iM,
        $X: () => iE,
        TC: () => id,
        Zi: () => ad,
        CR: () => ah,
        Dn: () => iu,
        K6: () => il,
        ld: () => nQ,
        L$: () => ai,
        Rl: () => nB,
        y7: () => nH,
        Lw: () => at,
        KR: () => aa,
        sf: () => nW,
        hc: () => nZ,
        wP: () => ao,
      });
      var n,
        i,
        a,
        o,
        u,
        l,
        c,
        s = {};
      (r.r(s),
        r.d(s, {
          scaleBand: () => w,
          scaleDiverging: () =>
            function e() {
              var t = eZ(r8()(eS));
              return (
                (t.copy = function () {
                  return r5(t, e());
                }),
                y.apply(t, arguments)
              );
            },
          scaleDivergingLog: () =>
            function e() {
              var t = eQ(r8()).domain([0.1, 1, 10]);
              return (
                (t.copy = function () {
                  return r5(t, e()).base(t.base());
                }),
                y.apply(t, arguments)
              );
            },
          scaleDivergingPow: () => r6,
          scaleDivergingSqrt: () => r7,
          scaleDivergingSymlog: () =>
            function e() {
              var t = e2(r8());
              return (
                (t.copy = function () {
                  return r5(t, e()).constant(t.constant());
                }),
                y.apply(t, arguments)
              );
            },
          scaleIdentity: () =>
            function e(t) {
              var r;
              function n(e) {
                return null == e || isNaN((e *= 1)) ? r : e;
              }
              return (
                (n.invert = n),
                (n.domain = n.range =
                  function (e) {
                    return arguments.length ? ((t = Array.from(e, ej)), n) : t.slice();
                  }),
                (n.unknown = function (e) {
                  return arguments.length ? ((r = e), n) : r;
                }),
                (n.copy = function () {
                  return e(t).unknown(r);
                }),
                (t = arguments.length ? Array.from(t, ej) : [0, 1]),
                eZ(n)
              );
            },
          scaleImplicit: () => b,
          scaleLinear: () =>
            function e() {
              var t = eD();
              return (
                (t.copy = function () {
                  return eC(t, e());
                }),
                p.apply(t, arguments),
                eZ(t)
              );
            },
          scaleLog: () =>
            function e() {
              let t = eQ(eT()).domain([1, 10]);
              return ((t.copy = () => eC(t, e()).base(t.base())), p.apply(t, arguments), t);
            },
          scaleOrdinal: () => x,
          scalePoint: () => O,
          scalePow: () => e6,
          scaleQuantile: () =>
            function e() {
              var t,
                r = [],
                n = [],
                i = [];
              function a() {
                var e = 0,
                  t = Math.max(1, n.length);
                for (i = Array(t - 1); ++e < t; )
                  i[e - 1] = (function (e, t, r = N) {
                    if (!(!(n = e.length) || isNaN((t *= 1)))) {
                      if (t <= 0 || n < 2) return +r(e[0], 0, e);
                      if (t >= 1) return +r(e[n - 1], n - 1, e);
                      var n,
                        i = (n - 1) * t,
                        a = Math.floor(i),
                        o = +r(e[a], a, e);
                      return o + (r(e[a + 1], a + 1, e) - o) * (i - a);
                    }
                  })(r, e / t);
                return o;
              }
              function o(e) {
                return null == e || isNaN((e *= 1)) ? t : n[z(i, e)];
              }
              return (
                (o.invertExtent = function (e) {
                  var t = n.indexOf(e);
                  return t < 0
                    ? [NaN, NaN]
                    : [t > 0 ? i[t - 1] : r[0], t < i.length ? i[t] : r[r.length - 1]];
                }),
                (o.domain = function (e) {
                  if (!arguments.length) return r.slice();
                  for (let t of ((r = []), e)) null == t || isNaN((t *= 1)) || r.push(t);
                  return (r.sort(k), a());
                }),
                (o.range = function (e) {
                  return arguments.length ? ((n = Array.from(e)), a()) : n.slice();
                }),
                (o.unknown = function (e) {
                  return arguments.length ? ((t = e), o) : t;
                }),
                (o.quantiles = function () {
                  return i.slice();
                }),
                (o.copy = function () {
                  return e().domain(r).range(n).unknown(t);
                }),
                p.apply(o, arguments)
              );
            },
          scaleQuantize: () =>
            function e() {
              var t,
                r = 0,
                n = 1,
                i = 1,
                a = [0.5],
                o = [0, 1];
              function u(e) {
                return null != e && e <= e ? o[z(a, e, 0, i)] : t;
              }
              function l() {
                var e = -1;
                for (a = Array(i); ++e < i; ) a[e] = ((e + 1) * n - (e - i) * r) / (i + 1);
                return u;
              }
              return (
                (u.domain = function (e) {
                  return arguments.length ? (([r, n] = e), (r *= 1), (n *= 1), l()) : [r, n];
                }),
                (u.range = function (e) {
                  return arguments.length ? ((i = (o = Array.from(e)).length - 1), l()) : o.slice();
                }),
                (u.invertExtent = function (e) {
                  var t = o.indexOf(e);
                  return t < 0
                    ? [NaN, NaN]
                    : t < 1
                      ? [r, a[0]]
                      : t >= i
                        ? [a[i - 1], n]
                        : [a[t - 1], a[t]];
                }),
                (u.unknown = function (e) {
                  return (arguments.length && (t = e), u);
                }),
                (u.thresholds = function () {
                  return a.slice();
                }),
                (u.copy = function () {
                  return e().domain([r, n]).range(o).unknown(t);
                }),
                p.apply(eZ(u), arguments)
              );
            },
          scaleRadial: () =>
            function e() {
              var t,
                r = eD(),
                n = [0, 1],
                i = !1;
              function a(e) {
                var n,
                  a = Math.sign((n = r(e))) * Math.sqrt(Math.abs(n));
                return isNaN(a) ? t : i ? Math.round(a) : a;
              }
              return (
                (a.invert = function (e) {
                  return r.invert(e9(e));
                }),
                (a.domain = function (e) {
                  return arguments.length ? (r.domain(e), a) : r.domain();
                }),
                (a.range = function (e) {
                  return arguments.length
                    ? (r.range((n = Array.from(e, ej)).map(e9)), a)
                    : n.slice();
                }),
                (a.rangeRound = function (e) {
                  return a.range(e).round(!0);
                }),
                (a.round = function (e) {
                  return arguments.length ? ((i = !!e), a) : i;
                }),
                (a.clamp = function (e) {
                  return arguments.length ? (r.clamp(e), a) : r.clamp();
                }),
                (a.unknown = function (e) {
                  return arguments.length ? ((t = e), a) : t;
                }),
                (a.copy = function () {
                  return e(r.domain(), n).round(i).clamp(r.clamp()).unknown(t);
                }),
                p.apply(a, arguments),
                eZ(a)
              );
            },
          scaleSequential: () =>
            function e() {
              var t = eZ(r2()(eS));
              return (
                (t.copy = function () {
                  return r5(t, e());
                }),
                y.apply(t, arguments)
              );
            },
          scaleSequentialLog: () =>
            function e() {
              var t = eQ(r2()).domain([1, 10]);
              return (
                (t.copy = function () {
                  return r5(t, e()).base(t.base());
                }),
                y.apply(t, arguments)
              );
            },
          scaleSequentialPow: () => r3,
          scaleSequentialQuantile: () =>
            function e() {
              var t = [],
                r = eS;
              function n(e) {
                if (null != e && !isNaN((e *= 1))) return r((z(t, e, 1) - 1) / (t.length - 1));
              }
              return (
                (n.domain = function (e) {
                  if (!arguments.length) return t.slice();
                  for (let r of ((t = []), e)) null == r || isNaN((r *= 1)) || t.push(r);
                  return (t.sort(k), n);
                }),
                (n.interpolator = function (e) {
                  return arguments.length ? ((r = e), n) : r;
                }),
                (n.range = function () {
                  return t.map((e, n) => r(n / (t.length - 1)));
                }),
                (n.quantiles = function (e) {
                  return Array.from({ length: e + 1 }, (r, n) =>
                    (function (e, t, r) {
                      if (
                        !(
                          !(n = (e = Float64Array.from(
                            (function* (e, t) {
                              if (void 0 === t)
                                for (let t of e) null != t && (t *= 1) >= t && (yield t);
                              else {
                                let r = -1;
                                for (let n of e)
                                  null != (n = t(n, ++r, e)) && (n *= 1) >= n && (yield n);
                              }
                            })(e, void 0)
                          )).length) || isNaN((t *= 1))
                        )
                      ) {
                        if (t <= 0 || n < 2) return tt(e);
                        if (t >= 1) return te(e);
                        var n,
                          i = (n - 1) * t,
                          a = Math.floor(i),
                          o = te(
                            (function e(t, r, n = 0, i = 1 / 0, a) {
                              if (
                                ((r = Math.floor(r)),
                                (n = Math.floor(Math.max(0, n))),
                                (i = Math.floor(Math.min(t.length - 1, i))),
                                !(n <= r && r <= i))
                              )
                                return t;
                              for (
                                a =
                                  void 0 === a
                                    ? tr
                                    : (function (e = k) {
                                        if (e === k) return tr;
                                        if ("function" != typeof e)
                                          throw TypeError("compare is not a function");
                                        return (t, r) => {
                                          let n = e(t, r);
                                          return n || 0 === n
                                            ? n
                                            : (0 === e(r, r)) - (0 === e(t, t));
                                        };
                                      })(a);
                                i > n;
                              ) {
                                if (i - n > 600) {
                                  let o = i - n + 1,
                                    u = r - n + 1,
                                    l = Math.log(o),
                                    c = 0.5 * Math.exp((2 * l) / 3),
                                    s =
                                      0.5 *
                                      Math.sqrt((l * c * (o - c)) / o) *
                                      (u - o / 2 < 0 ? -1 : 1),
                                    f = Math.max(n, Math.floor(r - (u * c) / o + s)),
                                    d = Math.min(i, Math.floor(r + ((o - u) * c) / o + s));
                                  e(t, r, f, d, a);
                                }
                                let o = t[r],
                                  u = n,
                                  l = i;
                                for (tn(t, n, r), a(t[i], o) > 0 && tn(t, n, i); u < l; ) {
                                  for (tn(t, u, l), ++u, --l; 0 > a(t[u], o); ) ++u;
                                  for (; a(t[l], o) > 0; ) --l;
                                }
                                (0 === a(t[n], o) ? tn(t, n, l) : tn(t, ++l, i),
                                  l <= r && (n = l + 1),
                                  r <= l && (i = l - 1));
                              }
                              return t;
                            })(e, a).subarray(0, a + 1)
                          );
                        return o + (tt(e.subarray(a + 1)) - o) * (i - a);
                      }
                    })(t, n / e)
                  );
                }),
                (n.copy = function () {
                  return e(r).domain(t);
                }),
                y.apply(n, arguments)
              );
            },
          scaleSequentialSqrt: () => r4,
          scaleSequentialSymlog: () =>
            function e() {
              var t = e2(r2());
              return (
                (t.copy = function () {
                  return r5(t, e()).constant(t.constant());
                }),
                y.apply(t, arguments)
              );
            },
          scaleSqrt: () => e7,
          scaleSymlog: () =>
            function e() {
              var t = e2(eT());
              return (
                (t.copy = function () {
                  return eC(t, e()).constant(t.constant());
                }),
                p.apply(t, arguments)
              );
            },
          scaleThreshold: () =>
            function e() {
              var t,
                r = [0.5],
                n = [0, 1],
                i = 1;
              function a(e) {
                return null != e && e <= e ? n[z(r, e, 0, i)] : t;
              }
              return (
                (a.domain = function (e) {
                  return arguments.length
                    ? ((i = Math.min((r = Array.from(e)).length, n.length - 1)), a)
                    : r.slice();
                }),
                (a.range = function (e) {
                  return arguments.length
                    ? ((n = Array.from(e)), (i = Math.min(r.length, n.length - 1)), a)
                    : n.slice();
                }),
                (a.invertExtent = function (e) {
                  var t = n.indexOf(e);
                  return [r[t - 1], r[t]];
                }),
                (a.unknown = function (e) {
                  return arguments.length ? ((t = e), a) : t;
                }),
                (a.copy = function () {
                  return e().domain(r).range(n).unknown(t);
                }),
                p.apply(a, arguments)
              );
            },
          scaleTime: () => r0,
          scaleUtc: () => r1,
          tickFormat: () => eK,
        }));
      var f = r(76069),
        d = r(38528),
        h = r.n(d);
      function p(e, t) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            this.range(e);
            break;
          default:
            this.range(t).domain(e);
        }
        return this;
      }
      function y(e, t) {
        switch (arguments.length) {
          case 0:
            break;
          case 1:
            "function" == typeof e ? this.interpolator(e) : this.range(e);
            break;
          default:
            (this.domain(e), "function" == typeof t ? this.interpolator(t) : this.range(t));
        }
        return this;
      }
      class v extends Map {
        constructor(e, t = m) {
          if (
            (super(),
            Object.defineProperties(this, { _intern: { value: new Map() }, _key: { value: t } }),
            null != e)
          )
            for (let [t, r] of e) this.set(t, r);
        }
        get(e) {
          return super.get(g(this, e));
        }
        has(e) {
          return super.has(g(this, e));
        }
        set(e, t) {
          return super.set(
            (function ({ _intern: e, _key: t }, r) {
              let n = t(r);
              return e.has(n) ? e.get(n) : (e.set(n, r), r);
            })(this, e),
            t
          );
        }
        delete(e) {
          return super.delete(
            (function ({ _intern: e, _key: t }, r) {
              let n = t(r);
              return (e.has(n) && ((r = e.get(n)), e.delete(n)), r);
            })(this, e)
          );
        }
      }
      function g({ _intern: e, _key: t }, r) {
        let n = t(r);
        return e.has(n) ? e.get(n) : r;
      }
      function m(e) {
        return null !== e && "object" == typeof e ? e.valueOf() : e;
      }
      let b = Symbol("implicit");
      function x() {
        var e = new v(),
          t = [],
          r = [],
          n = b;
        function i(i) {
          let a = e.get(i);
          if (void 0 === a) {
            if (n !== b) return n;
            e.set(i, (a = t.push(i) - 1));
          }
          return r[a % r.length];
        }
        return (
          (i.domain = function (r) {
            if (!arguments.length) return t.slice();
            for (let n of ((t = []), (e = new v()), r)) e.has(n) || e.set(n, t.push(n) - 1);
            return i;
          }),
          (i.range = function (e) {
            return arguments.length ? ((r = Array.from(e)), i) : r.slice();
          }),
          (i.unknown = function (e) {
            return arguments.length ? ((n = e), i) : n;
          }),
          (i.copy = function () {
            return x(t, r).unknown(n);
          }),
          p.apply(i, arguments),
          i
        );
      }
      function w() {
        var e,
          t,
          r = x().unknown(void 0),
          n = r.domain,
          i = r.range,
          a = 0,
          o = 1,
          u = !1,
          l = 0,
          c = 0,
          s = 0.5;
        function f() {
          var r = n().length,
            f = o < a,
            d = f ? o : a,
            h = f ? a : o;
          ((e = (h - d) / Math.max(1, r - l + 2 * c)),
            u && (e = Math.floor(e)),
            (d += (h - d - e * (r - l)) * s),
            (t = e * (1 - l)),
            u && ((d = Math.round(d)), (t = Math.round(t))));
          var p = (function (e, t, r) {
            ((e *= 1),
              (t *= 1),
              (r = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +r));
            for (var n = -1, i = 0 | Math.max(0, Math.ceil((t - e) / r)), a = Array(i); ++n < i; )
              a[n] = e + n * r;
            return a;
          })(r).map(function (t) {
            return d + e * t;
          });
          return i(f ? p.reverse() : p);
        }
        return (
          delete r.unknown,
          (r.domain = function (e) {
            return arguments.length ? (n(e), f()) : n();
          }),
          (r.range = function (e) {
            return arguments.length ? (([a, o] = e), (a *= 1), (o *= 1), f()) : [a, o];
          }),
          (r.rangeRound = function (e) {
            return (([a, o] = e), (a *= 1), (o *= 1), (u = !0), f());
          }),
          (r.bandwidth = function () {
            return t;
          }),
          (r.step = function () {
            return e;
          }),
          (r.round = function (e) {
            return arguments.length ? ((u = !!e), f()) : u;
          }),
          (r.padding = function (e) {
            return arguments.length ? ((l = Math.min(1, (c = +e))), f()) : l;
          }),
          (r.paddingInner = function (e) {
            return arguments.length ? ((l = Math.min(1, e)), f()) : l;
          }),
          (r.paddingOuter = function (e) {
            return arguments.length ? ((c = +e), f()) : c;
          }),
          (r.align = function (e) {
            return arguments.length ? ((s = Math.max(0, Math.min(1, e))), f()) : s;
          }),
          (r.copy = function () {
            return w(n(), [a, o]).round(u).paddingInner(l).paddingOuter(c).align(s);
          }),
          p.apply(f(), arguments)
        );
      }
      function O() {
        return (function e(t) {
          var r = t.copy;
          return (
            (t.padding = t.paddingOuter),
            delete t.paddingInner,
            delete t.paddingOuter,
            (t.copy = function () {
              return e(r());
            }),
            t
          );
        })(w.apply(null, arguments).paddingInner(1));
      }
      let _ = Math.sqrt(50),
        M = Math.sqrt(10),
        j = Math.sqrt(2);
      function A(e, t, r) {
        let n,
          i,
          a,
          o = (t - e) / Math.max(0, r),
          u = Math.floor(Math.log10(o)),
          l = o / Math.pow(10, u),
          c = l >= _ ? 10 : l >= M ? 5 : l >= j ? 2 : 1;
        return (u < 0
          ? ((n = Math.round(e * (a = Math.pow(10, -u) / c))),
            (i = Math.round(t * a)),
            n / a < e && ++n,
            i / a > t && --i,
            (a = -a))
          : ((n = Math.round(e / (a = Math.pow(10, u) * c))),
            (i = Math.round(t / a)),
            n * a < e && ++n,
            i * a > t && --i),
        i < n && 0.5 <= r && r < 2)
          ? A(e, t, 2 * r)
          : [n, i, a];
      }
      function S(e, t, r) {
        if (((t *= 1), (e *= 1), !((r *= 1) > 0))) return [];
        if (e === t) return [e];
        let n = t < e,
          [i, a, o] = n ? A(t, e, r) : A(e, t, r);
        if (!(a >= i)) return [];
        let u = a - i + 1,
          l = Array(u);
        if (n)
          if (o < 0) for (let e = 0; e < u; ++e) l[e] = -((a - e) / o);
          else for (let e = 0; e < u; ++e) l[e] = (a - e) * o;
        else if (o < 0) for (let e = 0; e < u; ++e) l[e] = -((i + e) / o);
        else for (let e = 0; e < u; ++e) l[e] = (i + e) * o;
        return l;
      }
      function P(e, t, r) {
        return A((e *= 1), (t *= 1), (r *= 1))[2];
      }
      function E(e, t, r) {
        ((t *= 1), (e *= 1), (r *= 1));
        let n = t < e,
          i = n ? P(t, e, r) : P(e, t, r);
        return (n ? -1 : 1) * (i < 0 ? -(1 / i) : i);
      }
      function k(e, t) {
        return null == e || null == t ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
      }
      function C(e, t) {
        return null == e || null == t ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
      }
      function T(e) {
        let t, r, n;
        function i(e, n, a = 0, o = e.length) {
          if (a < o) {
            if (0 !== t(n, n)) return o;
            do {
              let t = (a + o) >>> 1;
              0 > r(e[t], n) ? (a = t + 1) : (o = t);
            } while (a < o);
          }
          return a;
        }
        return (
          2 !== e.length
            ? ((t = k), (r = (t, r) => k(e(t), r)), (n = (t, r) => e(t) - r))
            : ((t = e === k || e === C ? e : D), (r = e), (n = e)),
          {
            left: i,
            center: function (e, t, r = 0, a = e.length) {
              let o = i(e, t, r, a - 1);
              return o > r && n(e[o - 1], t) > -n(e[o], t) ? o - 1 : o;
            },
            right: function (e, n, i = 0, a = e.length) {
              if (i < a) {
                if (0 !== t(n, n)) return a;
                do {
                  let t = (i + a) >>> 1;
                  0 >= r(e[t], n) ? (i = t + 1) : (a = t);
                } while (i < a);
              }
              return i;
            },
          }
        );
      }
      function D() {
        return 0;
      }
      function N(e) {
        return null === e ? NaN : +e;
      }
      let I = T(k),
        z = I.right;
      function L(e, t, r) {
        ((e.prototype = t.prototype = r), (r.constructor = e));
      }
      function R(e, t) {
        var r = Object.create(e.prototype);
        for (var n in t) r[n] = t[n];
        return r;
      }
      function F() {}
      (I.left, T(N).center);
      var $ = "\\s*([+-]?\\d+)\\s*",
        U = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        H = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        B = /^#([0-9a-f]{3,8})$/,
        K = RegExp(`^rgb\\(${$},${$},${$}\\)$`),
        Z = RegExp(`^rgb\\(${H},${H},${H}\\)$`),
        W = RegExp(`^rgba\\(${$},${$},${$},${U}\\)$`),
        q = RegExp(`^rgba\\(${H},${H},${H},${U}\\)$`),
        Y = RegExp(`^hsl\\(${U},${H},${H}\\)$`),
        V = RegExp(`^hsla\\(${U},${H},${H},${U}\\)$`),
        G = {
          aliceblue: 0xf0f8ff,
          antiquewhite: 0xfaebd7,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 0xf0ffff,
          beige: 0xf5f5dc,
          bisque: 0xffe4c4,
          black: 0,
          blanchedalmond: 0xffebcd,
          blue: 255,
          blueviolet: 9055202,
          brown: 0xa52a2a,
          burlywood: 0xdeb887,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 0xd2691e,
          coral: 0xff7f50,
          cornflowerblue: 6591981,
          cornsilk: 0xfff8dc,
          crimson: 0xdc143c,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 0xb8860b,
          darkgray: 0xa9a9a9,
          darkgreen: 25600,
          darkgrey: 0xa9a9a9,
          darkkhaki: 0xbdb76b,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 0xff8c00,
          darkorchid: 0x9932cc,
          darkred: 9109504,
          darksalmon: 0xe9967a,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 0xff1493,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 0xb22222,
          floralwhite: 0xfffaf0,
          forestgreen: 2263842,
          fuchsia: 0xff00ff,
          gainsboro: 0xdcdcdc,
          ghostwhite: 0xf8f8ff,
          gold: 0xffd700,
          goldenrod: 0xdaa520,
          gray: 8421504,
          green: 32768,
          greenyellow: 0xadff2f,
          grey: 8421504,
          honeydew: 0xf0fff0,
          hotpink: 0xff69b4,
          indianred: 0xcd5c5c,
          indigo: 4915330,
          ivory: 0xfffff0,
          khaki: 0xf0e68c,
          lavender: 0xe6e6fa,
          lavenderblush: 0xfff0f5,
          lawngreen: 8190976,
          lemonchiffon: 0xfffacd,
          lightblue: 0xadd8e6,
          lightcoral: 0xf08080,
          lightcyan: 0xe0ffff,
          lightgoldenrodyellow: 0xfafad2,
          lightgray: 0xd3d3d3,
          lightgreen: 9498256,
          lightgrey: 0xd3d3d3,
          lightpink: 0xffb6c1,
          lightsalmon: 0xffa07a,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 0xb0c4de,
          lightyellow: 0xffffe0,
          lime: 65280,
          limegreen: 3329330,
          linen: 0xfaf0e6,
          magenta: 0xff00ff,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 0xba55d3,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 0xc71585,
          midnightblue: 1644912,
          mintcream: 0xf5fffa,
          mistyrose: 0xffe4e1,
          moccasin: 0xffe4b5,
          navajowhite: 0xffdead,
          navy: 128,
          oldlace: 0xfdf5e6,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 0xffa500,
          orangered: 0xff4500,
          orchid: 0xda70d6,
          palegoldenrod: 0xeee8aa,
          palegreen: 0x98fb98,
          paleturquoise: 0xafeeee,
          palevioletred: 0xdb7093,
          papayawhip: 0xffefd5,
          peachpuff: 0xffdab9,
          peru: 0xcd853f,
          pink: 0xffc0cb,
          plum: 0xdda0dd,
          powderblue: 0xb0e0e6,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 0xff0000,
          rosybrown: 0xbc8f8f,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 0xfa8072,
          sandybrown: 0xf4a460,
          seagreen: 3050327,
          seashell: 0xfff5ee,
          sienna: 0xa0522d,
          silver: 0xc0c0c0,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 0xfffafa,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 0xd2b48c,
          teal: 32896,
          thistle: 0xd8bfd8,
          tomato: 0xff6347,
          turquoise: 4251856,
          violet: 0xee82ee,
          wheat: 0xf5deb3,
          white: 0xffffff,
          whitesmoke: 0xf5f5f5,
          yellow: 0xffff00,
          yellowgreen: 0x9acd32,
        };
      function X() {
        return this.rgb().formatHex();
      }
      function J() {
        return this.rgb().formatRgb();
      }
      function Q(e) {
        var t, r;
        return (
          (e = (e + "").trim().toLowerCase()),
          (t = B.exec(e))
            ? ((r = t[1].length),
              (t = parseInt(t[1], 16)),
              6 === r
                ? ee(t)
                : 3 === r
                  ? new en(
                      ((t >> 8) & 15) | ((t >> 4) & 240),
                      ((t >> 4) & 15) | (240 & t),
                      ((15 & t) << 4) | (15 & t),
                      1
                    )
                  : 8 === r
                    ? et((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (255 & t) / 255)
                    : 4 === r
                      ? et(
                          ((t >> 12) & 15) | ((t >> 8) & 240),
                          ((t >> 8) & 15) | ((t >> 4) & 240),
                          ((t >> 4) & 15) | (240 & t),
                          (((15 & t) << 4) | (15 & t)) / 255
                        )
                      : null)
            : (t = K.exec(e))
              ? new en(t[1], t[2], t[3], 1)
              : (t = Z.exec(e))
                ? new en((255 * t[1]) / 100, (255 * t[2]) / 100, (255 * t[3]) / 100, 1)
                : (t = W.exec(e))
                  ? et(t[1], t[2], t[3], t[4])
                  : (t = q.exec(e))
                    ? et((255 * t[1]) / 100, (255 * t[2]) / 100, (255 * t[3]) / 100, t[4])
                    : (t = Y.exec(e))
                      ? ec(t[1], t[2] / 100, t[3] / 100, 1)
                      : (t = V.exec(e))
                        ? ec(t[1], t[2] / 100, t[3] / 100, t[4])
                        : G.hasOwnProperty(e)
                          ? ee(G[e])
                          : "transparent" === e
                            ? new en(NaN, NaN, NaN, 0)
                            : null
        );
      }
      function ee(e) {
        return new en((e >> 16) & 255, (e >> 8) & 255, 255 & e, 1);
      }
      function et(e, t, r, n) {
        return (n <= 0 && (e = t = r = NaN), new en(e, t, r, n));
      }
      function er(e, t, r, n) {
        var i;
        return 1 == arguments.length
          ? ((i = e) instanceof F || (i = Q(i)), i)
            ? new en((i = i.rgb()).r, i.g, i.b, i.opacity)
            : new en()
          : new en(e, t, r, null == n ? 1 : n);
      }
      function en(e, t, r, n) {
        ((this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n));
      }
      function ei() {
        return `#${el(this.r)}${el(this.g)}${el(this.b)}`;
      }
      function ea() {
        let e = eo(this.opacity);
        return `${1 === e ? "rgb(" : "rgba("}${eu(this.r)}, ${eu(this.g)}, ${eu(this.b)}${1 === e ? ")" : `, ${e})`}`;
      }
      function eo(e) {
        return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
      }
      function eu(e) {
        return Math.max(0, Math.min(255, Math.round(e) || 0));
      }
      function el(e) {
        return ((e = eu(e)) < 16 ? "0" : "") + e.toString(16);
      }
      function ec(e, t, r, n) {
        return (
          n <= 0 ? (e = t = r = NaN) : r <= 0 || r >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN),
          new ef(e, t, r, n)
        );
      }
      function es(e) {
        if (e instanceof ef) return new ef(e.h, e.s, e.l, e.opacity);
        if ((e instanceof F || (e = Q(e)), !e)) return new ef();
        if (e instanceof ef) return e;
        var t = (e = e.rgb()).r / 255,
          r = e.g / 255,
          n = e.b / 255,
          i = Math.min(t, r, n),
          a = Math.max(t, r, n),
          o = NaN,
          u = a - i,
          l = (a + i) / 2;
        return (
          u
            ? ((o =
                t === a ? (r - n) / u + (r < n) * 6 : r === a ? (n - t) / u + 2 : (t - r) / u + 4),
              (u /= l < 0.5 ? a + i : 2 - a - i),
              (o *= 60))
            : (u = l > 0 && l < 1 ? 0 : o),
          new ef(o, u, l, e.opacity)
        );
      }
      function ef(e, t, r, n) {
        ((this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n));
      }
      function ed(e) {
        return (e = (e || 0) % 360) < 0 ? e + 360 : e;
      }
      function eh(e) {
        return Math.max(0, Math.min(1, e || 0));
      }
      function ep(e, t, r) {
        return (
          (e < 60
            ? t + ((r - t) * e) / 60
            : e < 180
              ? r
              : e < 240
                ? t + ((r - t) * (240 - e)) / 60
                : t) * 255
        );
      }
      function ey(e, t, r, n, i) {
        var a = e * e,
          o = a * e;
        return (
          ((1 - 3 * e + 3 * a - o) * t +
            (4 - 6 * a + 3 * o) * r +
            (1 + 3 * e + 3 * a - 3 * o) * n +
            o * i) /
          6
        );
      }
      (L(F, Q, {
        copy(e) {
          return Object.assign(new this.constructor(), this, e);
        },
        displayable() {
          return this.rgb().displayable();
        },
        hex: X,
        formatHex: X,
        formatHex8: function () {
          return this.rgb().formatHex8();
        },
        formatHsl: function () {
          return es(this).formatHsl();
        },
        formatRgb: J,
        toString: J,
      }),
        L(
          en,
          er,
          R(F, {
            brighter(e) {
              return (
                (e = null == e ? 1.4285714285714286 : Math.pow(1.4285714285714286, e)),
                new en(this.r * e, this.g * e, this.b * e, this.opacity)
              );
            },
            darker(e) {
              return (
                (e = null == e ? 0.7 : Math.pow(0.7, e)),
                new en(this.r * e, this.g * e, this.b * e, this.opacity)
              );
            },
            rgb() {
              return this;
            },
            clamp() {
              return new en(eu(this.r), eu(this.g), eu(this.b), eo(this.opacity));
            },
            displayable() {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: ei,
            formatHex: ei,
            formatHex8: function () {
              return `#${el(this.r)}${el(this.g)}${el(this.b)}${el((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
            },
            formatRgb: ea,
            toString: ea,
          })
        ),
        L(
          ef,
          function (e, t, r, n) {
            return 1 == arguments.length ? es(e) : new ef(e, t, r, null == n ? 1 : n);
          },
          R(F, {
            brighter(e) {
              return (
                (e = null == e ? 1.4285714285714286 : Math.pow(1.4285714285714286, e)),
                new ef(this.h, this.s, this.l * e, this.opacity)
              );
            },
            darker(e) {
              return (
                (e = null == e ? 0.7 : Math.pow(0.7, e)),
                new ef(this.h, this.s, this.l * e, this.opacity)
              );
            },
            rgb() {
              var e = (this.h % 360) + (this.h < 0) * 360,
                t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                r = this.l,
                n = r + (r < 0.5 ? r : 1 - r) * t,
                i = 2 * r - n;
              return new en(
                ep(e >= 240 ? e - 240 : e + 120, i, n),
                ep(e, i, n),
                ep(e < 120 ? e + 240 : e - 120, i, n),
                this.opacity
              );
            },
            clamp() {
              return new ef(ed(this.h), eh(this.s), eh(this.l), eo(this.opacity));
            },
            displayable() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl() {
              let e = eo(this.opacity);
              return `${1 === e ? "hsl(" : "hsla("}${ed(this.h)}, ${100 * eh(this.s)}%, ${100 * eh(this.l)}%${1 === e ? ")" : `, ${e})`}`;
            },
          })
        ));
      let ev = (e) => () => e;
      function eg(e, t) {
        var r = t - e;
        return r
          ? function (t) {
              return e + t * r;
            }
          : ev(isNaN(e) ? t : e);
      }
      let em = (function e(t) {
        var r,
          n =
            1 == (r = +t)
              ? eg
              : function (e, t) {
                  var n, i, a;
                  return t - e
                    ? ((n = e),
                      (i = t),
                      (n = Math.pow(n, (a = r))),
                      (i = Math.pow(i, a) - n),
                      (a = 1 / a),
                      function (e) {
                        return Math.pow(n + e * i, a);
                      })
                    : ev(isNaN(e) ? t : e);
                };
        function i(e, t) {
          var r = n((e = er(e)).r, (t = er(t)).r),
            i = n(e.g, t.g),
            a = n(e.b, t.b),
            o = eg(e.opacity, t.opacity);
          return function (t) {
            return ((e.r = r(t)), (e.g = i(t)), (e.b = a(t)), (e.opacity = o(t)), e + "");
          };
        }
        return ((i.gamma = e), i);
      })(1);
      function eb(e) {
        return function (t) {
          var r,
            n,
            i = t.length,
            a = Array(i),
            o = Array(i),
            u = Array(i);
          for (r = 0; r < i; ++r)
            ((n = er(t[r])), (a[r] = n.r || 0), (o[r] = n.g || 0), (u[r] = n.b || 0));
          return (
            (a = e(a)),
            (o = e(o)),
            (u = e(u)),
            (n.opacity = 1),
            function (e) {
              return ((n.r = a(e)), (n.g = o(e)), (n.b = u(e)), n + "");
            }
          );
        };
      }
      function ex(e, t) {
        return (
          (e *= 1),
          (t *= 1),
          function (r) {
            return e * (1 - r) + t * r;
          }
        );
      }
      (eb(function (e) {
        var t = e.length - 1;
        return function (r) {
          var n = r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), t - 1) : Math.floor(r * t),
            i = e[n],
            a = e[n + 1],
            o = n > 0 ? e[n - 1] : 2 * i - a,
            u = n < t - 1 ? e[n + 2] : 2 * a - i;
          return ey((r - n / t) * t, o, i, a, u);
        };
      }),
        eb(function (e) {
          var t = e.length;
          return function (r) {
            var n = Math.floor(((r %= 1) < 0 ? ++r : r) * t),
              i = e[(n + t - 1) % t],
              a = e[n % t],
              o = e[(n + 1) % t],
              u = e[(n + 2) % t];
            return ey((r - n / t) * t, i, a, o, u);
          };
        }));
      var ew = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        eO = RegExp(ew.source, "g");
      function e_(e, t) {
        var r,
          n,
          i = typeof t;
        return null == t || "boolean" === i
          ? ev(t)
          : ("number" === i
              ? ex
              : "string" === i
                ? (n = Q(t))
                  ? ((t = n), em)
                  : function (e, t) {
                      var r,
                        n,
                        i,
                        a,
                        o,
                        u = (ew.lastIndex = eO.lastIndex = 0),
                        l = -1,
                        c = [],
                        s = [];
                      for (e += "", t += ""; (i = ew.exec(e)) && (a = eO.exec(t)); )
                        ((o = a.index) > u &&
                          ((o = t.slice(u, o)), c[l] ? (c[l] += o) : (c[++l] = o)),
                          (i = i[0]) === (a = a[0])
                            ? c[l]
                              ? (c[l] += a)
                              : (c[++l] = a)
                            : ((c[++l] = null), s.push({ i: l, x: ex(i, a) })),
                          (u = eO.lastIndex));
                      return (
                        u < t.length && ((o = t.slice(u)), c[l] ? (c[l] += o) : (c[++l] = o)),
                        c.length < 2
                          ? s[0]
                            ? ((r = s[0].x),
                              function (e) {
                                return r(e) + "";
                              })
                            : ((n = t),
                              function () {
                                return n;
                              })
                          : ((t = s.length),
                            function (e) {
                              for (var r, n = 0; n < t; ++n) c[(r = s[n]).i] = r.x(e);
                              return c.join("");
                            })
                      );
                    }
                : t instanceof Q
                  ? em
                  : t instanceof Date
                    ? function (e, t) {
                        var r = new Date();
                        return (
                          (e *= 1),
                          (t *= 1),
                          function (n) {
                            return (r.setTime(e * (1 - n) + t * n), r);
                          }
                        );
                      }
                    : !ArrayBuffer.isView((r = t)) || r instanceof DataView
                      ? Array.isArray(t)
                        ? function (e, t) {
                            var r,
                              n = t ? t.length : 0,
                              i = e ? Math.min(n, e.length) : 0,
                              a = Array(i),
                              o = Array(n);
                            for (r = 0; r < i; ++r) a[r] = e_(e[r], t[r]);
                            for (; r < n; ++r) o[r] = t[r];
                            return function (e) {
                              for (r = 0; r < i; ++r) o[r] = a[r](e);
                              return o;
                            };
                          }
                        : ("function" != typeof t.valueOf && "function" != typeof t.toString) ||
                            isNaN(t)
                          ? function (e, t) {
                              var r,
                                n = {},
                                i = {};
                              for (r in ((null === e || "object" != typeof e) && (e = {}),
                              (null === t || "object" != typeof t) && (t = {}),
                              t))
                                r in e ? (n[r] = e_(e[r], t[r])) : (i[r] = t[r]);
                              return function (e) {
                                for (r in n) i[r] = n[r](e);
                                return i;
                              };
                            }
                          : ex
                      : function (e, t) {
                          t || (t = []);
                          var r,
                            n = e ? Math.min(t.length, e.length) : 0,
                            i = t.slice();
                          return function (a) {
                            for (r = 0; r < n; ++r) i[r] = e[r] * (1 - a) + t[r] * a;
                            return i;
                          };
                        })(e, t);
      }
      function eM(e, t) {
        return (
          (e *= 1),
          (t *= 1),
          function (r) {
            return Math.round(e * (1 - r) + t * r);
          }
        );
      }
      function ej(e) {
        return +e;
      }
      var eA = [0, 1];
      function eS(e) {
        return e;
      }
      function eP(e, t) {
        var r;
        return (t -= e *= 1)
          ? function (r) {
              return (r - e) / t;
            }
          : ((r = isNaN(t) ? NaN : 0.5),
            function () {
              return r;
            });
      }
      function eE(e, t, r) {
        var n = e[0],
          i = e[1],
          a = t[0],
          o = t[1];
        return (
          i < n ? ((n = eP(i, n)), (a = r(o, a))) : ((n = eP(n, i)), (a = r(a, o))),
          function (e) {
            return a(n(e));
          }
        );
      }
      function ek(e, t, r) {
        var n = Math.min(e.length, t.length) - 1,
          i = Array(n),
          a = Array(n),
          o = -1;
        for (e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse())); ++o < n; )
          ((i[o] = eP(e[o], e[o + 1])), (a[o] = r(t[o], t[o + 1])));
        return function (t) {
          var r = z(e, t, 1, n) - 1;
          return a[r](i[r](t));
        };
      }
      function eC(e, t) {
        return t
          .domain(e.domain())
          .range(e.range())
          .interpolate(e.interpolate())
          .clamp(e.clamp())
          .unknown(e.unknown());
      }
      function eT() {
        var e,
          t,
          r,
          n,
          i,
          a,
          o = eA,
          u = eA,
          l = e_,
          c = eS;
        function s() {
          var e,
            t,
            r,
            l = Math.min(o.length, u.length);
          return (
            c !== eS &&
              ((e = o[0]),
              (t = o[l - 1]),
              e > t && ((r = e), (e = t), (t = r)),
              (c = function (r) {
                return Math.max(e, Math.min(t, r));
              })),
            (n = l > 2 ? ek : eE),
            (i = a = null),
            f
          );
        }
        function f(t) {
          return null == t || isNaN((t *= 1)) ? r : (i || (i = n(o.map(e), u, l)))(e(c(t)));
        }
        return (
          (f.invert = function (r) {
            return c(t((a || (a = n(u, o.map(e), ex)))(r)));
          }),
          (f.domain = function (e) {
            return arguments.length ? ((o = Array.from(e, ej)), s()) : o.slice();
          }),
          (f.range = function (e) {
            return arguments.length ? ((u = Array.from(e)), s()) : u.slice();
          }),
          (f.rangeRound = function (e) {
            return ((u = Array.from(e)), (l = eM), s());
          }),
          (f.clamp = function (e) {
            return arguments.length ? ((c = !!e || eS), s()) : c !== eS;
          }),
          (f.interpolate = function (e) {
            return arguments.length ? ((l = e), s()) : l;
          }),
          (f.unknown = function (e) {
            return arguments.length ? ((r = e), f) : r;
          }),
          function (r, n) {
            return ((e = r), (t = n), s());
          }
        );
      }
      function eD() {
        return eT()(eS, eS);
      }
      var eN = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
      function eI(e) {
        var t;
        if (!(t = eN.exec(e))) throw Error("invalid format: " + e);
        return new ez({
          fill: t[1],
          align: t[2],
          sign: t[3],
          symbol: t[4],
          zero: t[5],
          width: t[6],
          comma: t[7],
          precision: t[8] && t[8].slice(1),
          trim: t[9],
          type: t[10],
        });
      }
      function ez(e) {
        ((this.fill = void 0 === e.fill ? " " : e.fill + ""),
          (this.align = void 0 === e.align ? ">" : e.align + ""),
          (this.sign = void 0 === e.sign ? "-" : e.sign + ""),
          (this.symbol = void 0 === e.symbol ? "" : e.symbol + ""),
          (this.zero = !!e.zero),
          (this.width = void 0 === e.width ? void 0 : +e.width),
          (this.comma = !!e.comma),
          (this.precision = void 0 === e.precision ? void 0 : +e.precision),
          (this.trim = !!e.trim),
          (this.type = void 0 === e.type ? "" : e.type + ""));
      }
      function eL(e, t) {
        if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
          return null;
        var r,
          n = e.slice(0, r);
        return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
      }
      function eR(e) {
        return (e = eL(Math.abs(e))) ? e[1] : NaN;
      }
      function eF(e, t) {
        var r = eL(e, t);
        if (!r) return e + "";
        var n = r[0],
          i = r[1];
        return i < 0
          ? "0." + Array(-i).join("0") + n
          : n.length > i + 1
            ? n.slice(0, i + 1) + "." + n.slice(i + 1)
            : n + Array(i - n.length + 2).join("0");
      }
      ((eI.prototype = ez.prototype),
        (ez.prototype.toString = function () {
          return (
            this.fill +
            this.align +
            this.sign +
            this.symbol +
            (this.zero ? "0" : "") +
            (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
            (this.comma ? "," : "") +
            (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) +
            (this.trim ? "~" : "") +
            this.type
          );
        }));
      let e$ = {
        "%": (e, t) => (100 * e).toFixed(t),
        b: (e) => Math.round(e).toString(2),
        c: (e) => e + "",
        d: function (e) {
          return Math.abs((e = Math.round(e))) >= 1e21
            ? e.toLocaleString("en").replace(/,/g, "")
            : e.toString(10);
        },
        e: (e, t) => e.toExponential(t),
        f: (e, t) => e.toFixed(t),
        g: (e, t) => e.toPrecision(t),
        o: (e) => Math.round(e).toString(8),
        p: (e, t) => eF(100 * e, t),
        r: eF,
        s: function (e, t) {
          var r = eL(e, t);
          if (!r) return e + "";
          var i = r[0],
            a = r[1],
            o = a - (n = 3 * Math.max(-8, Math.min(8, Math.floor(a / 3)))) + 1,
            u = i.length;
          return o === u
            ? i
            : o > u
              ? i + Array(o - u + 1).join("0")
              : o > 0
                ? i.slice(0, o) + "." + i.slice(o)
                : "0." + Array(1 - o).join("0") + eL(e, Math.max(0, t + o - 1))[0];
        },
        X: (e) => Math.round(e).toString(16).toUpperCase(),
        x: (e) => Math.round(e).toString(16),
      };
      function eU(e) {
        return e;
      }
      var eH = Array.prototype.map,
        eB = [
          "y",
          "z",
          "a",
          "f",
          "p",
          "n",
          "\xb5",
          "m",
          "",
          "k",
          "M",
          "G",
          "T",
          "P",
          "E",
          "Z",
          "Y",
        ];
      function eK(e, t, r, n) {
        var i,
          u,
          l = E(e, t, r);
        switch ((n = eI(null == n ? ",f" : n)).type) {
          case "s":
            var c = Math.max(Math.abs(e), Math.abs(t));
            return (
              null != n.precision ||
                isNaN(
                  (u = Math.max(
                    0,
                    3 * Math.max(-8, Math.min(8, Math.floor(eR(c) / 3))) - eR(Math.abs(l))
                  ))
                ) ||
                (n.precision = u),
              o(n, c)
            );
          case "":
          case "e":
          case "g":
          case "p":
          case "r":
            null != n.precision ||
              isNaN(
                (u =
                  Math.max(
                    0,
                    eR(Math.abs(Math.max(Math.abs(e), Math.abs(t))) - (i = Math.abs((i = l)))) -
                      eR(i)
                  ) + 1)
              ) ||
              (n.precision = u - ("e" === n.type));
            break;
          case "f":
          case "%":
            null != n.precision ||
              isNaN((u = Math.max(0, -eR(Math.abs(l))))) ||
              (n.precision = u - ("%" === n.type) * 2);
        }
        return a(n);
      }
      function eZ(e) {
        var t = e.domain;
        return (
          (e.ticks = function (e) {
            var r = t();
            return S(r[0], r[r.length - 1], null == e ? 10 : e);
          }),
          (e.tickFormat = function (e, r) {
            var n = t();
            return eK(n[0], n[n.length - 1], null == e ? 10 : e, r);
          }),
          (e.nice = function (r) {
            null == r && (r = 10);
            var n,
              i,
              a = t(),
              o = 0,
              u = a.length - 1,
              l = a[o],
              c = a[u],
              s = 10;
            for (c < l && ((i = l), (l = c), (c = i), (i = o), (o = u), (u = i)); s-- > 0; ) {
              if ((i = P(l, c, r)) === n) return ((a[o] = l), (a[u] = c), t(a));
              if (i > 0) ((l = Math.floor(l / i) * i), (c = Math.ceil(c / i) * i));
              else if (i < 0) ((l = Math.ceil(l * i) / i), (c = Math.floor(c * i) / i));
              else break;
              n = i;
            }
            return e;
          }),
          e
        );
      }
      function eW(e, t) {
        e = e.slice();
        var r,
          n = 0,
          i = e.length - 1,
          a = e[n],
          o = e[i];
        return (
          o < a && ((r = n), (n = i), (i = r), (r = a), (a = o), (o = r)),
          (e[n] = t.floor(a)),
          (e[i] = t.ceil(o)),
          e
        );
      }
      function eq(e) {
        return Math.log(e);
      }
      function eY(e) {
        return Math.exp(e);
      }
      function eV(e) {
        return -Math.log(-e);
      }
      function eG(e) {
        return -Math.exp(-e);
      }
      function eX(e) {
        return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
      }
      function eJ(e) {
        return (t, r) => -e(-t, r);
      }
      function eQ(e) {
        let t,
          r,
          n = e(eq, eY),
          i = n.domain,
          o = 10;
        function u() {
          var a, u;
          return (
            (t =
              (a = o) === Math.E
                ? Math.log
                : (10 === a && Math.log10) ||
                  (2 === a && Math.log2) ||
                  ((a = Math.log(a)), (e) => Math.log(e) / a)),
            (r = 10 === (u = o) ? eX : u === Math.E ? Math.exp : (e) => Math.pow(u, e)),
            i()[0] < 0 ? ((t = eJ(t)), (r = eJ(r)), e(eV, eG)) : e(eq, eY),
            n
          );
        }
        return (
          (n.base = function (e) {
            return arguments.length ? ((o = +e), u()) : o;
          }),
          (n.domain = function (e) {
            return arguments.length ? (i(e), u()) : i();
          }),
          (n.ticks = (e) => {
            let n,
              a,
              u = i(),
              l = u[0],
              c = u[u.length - 1],
              s = c < l;
            s && ([l, c] = [c, l]);
            let f = t(l),
              d = t(c),
              h = null == e ? 10 : +e,
              p = [];
            if (!(o % 1) && d - f < h) {
              if (((f = Math.floor(f)), (d = Math.ceil(d)), l > 0)) {
                for (; f <= d; ++f)
                  for (n = 1; n < o; ++n)
                    if (!((a = f < 0 ? n / r(-f) : n * r(f)) < l)) {
                      if (a > c) break;
                      p.push(a);
                    }
              } else
                for (; f <= d; ++f)
                  for (n = o - 1; n >= 1; --n)
                    if (!((a = f > 0 ? n / r(-f) : n * r(f)) < l)) {
                      if (a > c) break;
                      p.push(a);
                    }
              2 * p.length < h && (p = S(l, c, h));
            } else p = S(f, d, Math.min(d - f, h)).map(r);
            return s ? p.reverse() : p;
          }),
          (n.tickFormat = (e, i) => {
            if (
              (null == e && (e = 10),
              null == i && (i = 10 === o ? "s" : ","),
              "function" != typeof i &&
                (o % 1 || null != (i = eI(i)).precision || (i.trim = !0), (i = a(i))),
              e === 1 / 0)
            )
              return i;
            let u = Math.max(1, (o * e) / n.ticks().length);
            return (e) => {
              let n = e / r(Math.round(t(e)));
              return (n * o < o - 0.5 && (n *= o), n <= u ? i(e) : "");
            };
          }),
          (n.nice = () =>
            i(eW(i(), { floor: (e) => r(Math.floor(t(e))), ceil: (e) => r(Math.ceil(t(e))) }))),
          n
        );
      }
      function e0(e) {
        return function (t) {
          return Math.sign(t) * Math.log1p(Math.abs(t / e));
        };
      }
      function e1(e) {
        return function (t) {
          return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
        };
      }
      function e2(e) {
        var t = 1,
          r = e(e0(1), e1(t));
        return (
          (r.constant = function (r) {
            return arguments.length ? e(e0((t = +r)), e1(t)) : t;
          }),
          eZ(r)
        );
      }
      function e5(e) {
        return function (t) {
          return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
        };
      }
      function e3(e) {
        return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
      }
      function e4(e) {
        return e < 0 ? -e * e : e * e;
      }
      function e8(e) {
        var t = e(eS, eS),
          r = 1;
        return (
          (t.exponent = function (t) {
            return arguments.length
              ? 1 == (r = +t)
                ? e(eS, eS)
                : 0.5 === r
                  ? e(e3, e4)
                  : e(e5(r), e5(1 / r))
              : r;
          }),
          eZ(t)
        );
      }
      function e6() {
        var e = e8(eT());
        return (
          (e.copy = function () {
            return eC(e, e6()).exponent(e.exponent());
          }),
          p.apply(e, arguments),
          e
        );
      }
      function e7() {
        return e6.apply(null, arguments).exponent(0.5);
      }
      function e9(e) {
        return Math.sign(e) * e * e;
      }
      function te(e, t) {
        let r;
        if (void 0 === t)
          for (let t of e) null != t && (r < t || (void 0 === r && t >= t)) && (r = t);
        else {
          let n = -1;
          for (let i of e)
            null != (i = t(i, ++n, e)) && (r < i || (void 0 === r && i >= i)) && (r = i);
        }
        return r;
      }
      function tt(e, t) {
        let r;
        if (void 0 === t)
          for (let t of e) null != t && (r > t || (void 0 === r && t >= t)) && (r = t);
        else {
          let n = -1;
          for (let i of e)
            null != (i = t(i, ++n, e)) && (r > i || (void 0 === r && i >= i)) && (r = i);
        }
        return r;
      }
      function tr(e, t) {
        return (null == e || !(e >= e)) - (null == t || !(t >= t)) || (e < t ? -1 : +(e > t));
      }
      function tn(e, t, r) {
        let n = e[t];
        ((e[t] = e[r]), (e[r] = n));
      }
      ((a = (i = (function (e) {
        var t,
          r,
          i,
          a =
            void 0 === e.grouping || void 0 === e.thousands
              ? eU
              : ((t = eH.call(e.grouping, Number)),
                (r = e.thousands + ""),
                function (e, n) {
                  for (
                    var i = e.length, a = [], o = 0, u = t[0], l = 0;
                    i > 0 &&
                    u > 0 &&
                    (l + u + 1 > n && (u = Math.max(1, n - l)),
                    a.push(e.substring((i -= u), i + u)),
                    !((l += u + 1) > n));
                  )
                    u = t[(o = (o + 1) % t.length)];
                  return a.reverse().join(r);
                }),
          o = void 0 === e.currency ? "" : e.currency[0] + "",
          u = void 0 === e.currency ? "" : e.currency[1] + "",
          l = void 0 === e.decimal ? "." : e.decimal + "",
          c =
            void 0 === e.numerals
              ? eU
              : ((i = eH.call(e.numerals, String)),
                function (e) {
                  return e.replace(/[0-9]/g, function (e) {
                    return i[+e];
                  });
                }),
          s = void 0 === e.percent ? "%" : e.percent + "",
          f = void 0 === e.minus ? "−" : e.minus + "",
          d = void 0 === e.nan ? "NaN" : e.nan + "";
        function h(e) {
          var t = (e = eI(e)).fill,
            r = e.align,
            i = e.sign,
            h = e.symbol,
            p = e.zero,
            y = e.width,
            v = e.comma,
            g = e.precision,
            m = e.trim,
            b = e.type;
          ("n" === b
            ? ((v = !0), (b = "g"))
            : e$[b] || (void 0 === g && (g = 12), (m = !0), (b = "g")),
            (p || ("0" === t && "=" === r)) && ((p = !0), (t = "0"), (r = "=")));
          var x = "$" === h ? o : "#" === h && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "",
            w = "$" === h ? u : /[%p]/.test(b) ? s : "",
            O = e$[b],
            _ = /[defgprs%]/.test(b);
          function M(e) {
            var o,
              u,
              s,
              h = x,
              M = w;
            if ("c" === b) ((M = O(e) + M), (e = ""));
            else {
              var j = (e *= 1) < 0 || 1 / e < 0;
              if (
                ((e = isNaN(e) ? d : O(Math.abs(e), g)),
                m &&
                  (e = (function (e) {
                    e: for (var t, r = e.length, n = 1, i = -1; n < r; ++n)
                      switch (e[n]) {
                        case ".":
                          i = t = n;
                          break;
                        case "0":
                          (0 === i && (i = n), (t = n));
                          break;
                        default:
                          if (!+e[n]) break e;
                          i > 0 && (i = 0);
                      }
                    return i > 0 ? e.slice(0, i) + e.slice(t + 1) : e;
                  })(e)),
                j && 0 == +e && "+" !== i && (j = !1),
                (h = (j ? ("(" === i ? i : f) : "-" === i || "(" === i ? "" : i) + h),
                (M = ("s" === b ? eB[8 + n / 3] : "") + M + (j && "(" === i ? ")" : "")),
                _)
              ) {
                for (o = -1, u = e.length; ++o < u; )
                  if (48 > (s = e.charCodeAt(o)) || s > 57) {
                    ((M = (46 === s ? l + e.slice(o + 1) : e.slice(o)) + M), (e = e.slice(0, o)));
                    break;
                  }
              }
            }
            v && !p && (e = a(e, 1 / 0));
            var A = h.length + e.length + M.length,
              S = A < y ? Array(y - A + 1).join(t) : "";
            switch ((v && p && ((e = a(S + e, S.length ? y - M.length : 1 / 0)), (S = "")), r)) {
              case "<":
                e = h + e + M + S;
                break;
              case "=":
                e = h + S + e + M;
                break;
              case "^":
                e = S.slice(0, (A = S.length >> 1)) + h + e + M + S.slice(A);
                break;
              default:
                e = S + h + e + M;
            }
            return c(e);
          }
          return (
            (g =
              void 0 === g
                ? 6
                : /[gprs]/.test(b)
                  ? Math.max(1, Math.min(21, g))
                  : Math.max(0, Math.min(20, g))),
            (M.toString = function () {
              return e + "";
            }),
            M
          );
        }
        return {
          format: h,
          formatPrefix: function (e, t) {
            var r = h((((e = eI(e)).type = "f"), e)),
              n = 3 * Math.max(-8, Math.min(8, Math.floor(eR(t) / 3))),
              i = Math.pow(10, -n),
              a = eB[8 + n / 3];
            return function (e) {
              return r(i * e) + a;
            };
          },
        };
      })({ thousands: ",", grouping: [3], currency: ["$", ""] })).format),
        (o = i.formatPrefix));
      let ti = new Date(),
        ta = new Date();
      function to(e, t, r, n) {
        function i(t) {
          return (e((t = 0 == arguments.length ? new Date() : new Date(+t))), t);
        }
        return (
          (i.floor = (t) => (e((t = new Date(+t))), t)),
          (i.ceil = (r) => (e((r = new Date(r - 1))), t(r, 1), e(r), r)),
          (i.round = (e) => {
            let t = i(e),
              r = i.ceil(e);
            return e - t < r - e ? t : r;
          }),
          (i.offset = (e, r) => (t((e = new Date(+e)), null == r ? 1 : Math.floor(r)), e)),
          (i.range = (r, n, a) => {
            let o,
              u = [];
            if (((r = i.ceil(r)), (a = null == a ? 1 : Math.floor(a)), !(r < n) || !(a > 0)))
              return u;
            do (u.push((o = new Date(+r))), t(r, a), e(r));
            while (o < r && r < n);
            return u;
          }),
          (i.filter = (r) =>
            to(
              (t) => {
                if (t >= t) for (; e(t), !r(t); ) t.setTime(t - 1);
              },
              (e, n) => {
                if (e >= e)
                  if (n < 0) for (; ++n <= 0; ) for (; t(e, -1), !r(e); );
                  else for (; --n >= 0; ) for (; t(e, 1), !r(e); );
              }
            )),
          r &&
            ((i.count = (t, n) => (
              ti.setTime(+t),
              ta.setTime(+n),
              e(ti),
              e(ta),
              Math.floor(r(ti, ta))
            )),
            (i.every = (e) =>
              isFinite((e = Math.floor(e))) && e > 0
                ? e > 1
                  ? i.filter(n ? (t) => n(t) % e == 0 : (t) => i.count(0, t) % e == 0)
                  : i
                : null)),
          i
        );
      }
      let tu = to(
        () => {},
        (e, t) => {
          e.setTime(+e + t);
        },
        (e, t) => t - e
      );
      ((tu.every = (e) =>
        isFinite((e = Math.floor(e))) && e > 0
          ? e > 1
            ? to(
                (t) => {
                  t.setTime(Math.floor(t / e) * e);
                },
                (t, r) => {
                  t.setTime(+t + r * e);
                },
                (t, r) => (r - t) / e
              )
            : tu
          : null),
        tu.range);
      let tl = to(
        (e) => {
          e.setTime(e - e.getMilliseconds());
        },
        (e, t) => {
          e.setTime(+e + 1e3 * t);
        },
        (e, t) => (t - e) / 1e3,
        (e) => e.getUTCSeconds()
      );
      tl.range;
      let tc = to(
        (e) => {
          e.setTime(e - e.getMilliseconds() - 1e3 * e.getSeconds());
        },
        (e, t) => {
          e.setTime(+e + 6e4 * t);
        },
        (e, t) => (t - e) / 6e4,
        (e) => e.getMinutes()
      );
      tc.range;
      let ts = to(
        (e) => {
          e.setUTCSeconds(0, 0);
        },
        (e, t) => {
          e.setTime(+e + 6e4 * t);
        },
        (e, t) => (t - e) / 6e4,
        (e) => e.getUTCMinutes()
      );
      ts.range;
      let tf = to(
        (e) => {
          e.setTime(e - e.getMilliseconds() - 1e3 * e.getSeconds() - 6e4 * e.getMinutes());
        },
        (e, t) => {
          e.setTime(+e + 36e5 * t);
        },
        (e, t) => (t - e) / 36e5,
        (e) => e.getHours()
      );
      tf.range;
      let td = to(
        (e) => {
          e.setUTCMinutes(0, 0, 0);
        },
        (e, t) => {
          e.setTime(+e + 36e5 * t);
        },
        (e, t) => (t - e) / 36e5,
        (e) => e.getUTCHours()
      );
      td.range;
      let th = to(
        (e) => e.setHours(0, 0, 0, 0),
        (e, t) => e.setDate(e.getDate() + t),
        (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) / 864e5,
        (e) => e.getDate() - 1
      );
      th.range;
      let tp = to(
        (e) => {
          e.setUTCHours(0, 0, 0, 0);
        },
        (e, t) => {
          e.setUTCDate(e.getUTCDate() + t);
        },
        (e, t) => (t - e) / 864e5,
        (e) => e.getUTCDate() - 1
      );
      tp.range;
      let ty = to(
        (e) => {
          e.setUTCHours(0, 0, 0, 0);
        },
        (e, t) => {
          e.setUTCDate(e.getUTCDate() + t);
        },
        (e, t) => (t - e) / 864e5,
        (e) => Math.floor(e / 864e5)
      );
      function tv(e) {
        return to(
          (t) => {
            (t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)), t.setHours(0, 0, 0, 0));
          },
          (e, t) => {
            e.setDate(e.getDate() + 7 * t);
          },
          (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) / 6048e5
        );
      }
      ty.range;
      let tg = tv(0),
        tm = tv(1),
        tb = tv(2),
        tx = tv(3),
        tw = tv(4),
        tO = tv(5),
        t_ = tv(6);
      function tM(e) {
        return to(
          (t) => {
            (t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
              t.setUTCHours(0, 0, 0, 0));
          },
          (e, t) => {
            e.setUTCDate(e.getUTCDate() + 7 * t);
          },
          (e, t) => (t - e) / 6048e5
        );
      }
      (tg.range, tm.range, tb.range, tx.range, tw.range, tO.range, t_.range);
      let tj = tM(0),
        tA = tM(1),
        tS = tM(2),
        tP = tM(3),
        tE = tM(4),
        tk = tM(5),
        tC = tM(6);
      (tj.range, tA.range, tS.range, tP.range, tE.range, tk.range, tC.range);
      let tT = to(
        (e) => {
          (e.setDate(1), e.setHours(0, 0, 0, 0));
        },
        (e, t) => {
          e.setMonth(e.getMonth() + t);
        },
        (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
        (e) => e.getMonth()
      );
      tT.range;
      let tD = to(
        (e) => {
          (e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0));
        },
        (e, t) => {
          e.setUTCMonth(e.getUTCMonth() + t);
        },
        (e, t) =>
          t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
        (e) => e.getUTCMonth()
      );
      tD.range;
      let tN = to(
        (e) => {
          (e.setMonth(0, 1), e.setHours(0, 0, 0, 0));
        },
        (e, t) => {
          e.setFullYear(e.getFullYear() + t);
        },
        (e, t) => t.getFullYear() - e.getFullYear(),
        (e) => e.getFullYear()
      );
      ((tN.every = (e) =>
        isFinite((e = Math.floor(e))) && e > 0
          ? to(
              (t) => {
                (t.setFullYear(Math.floor(t.getFullYear() / e) * e),
                  t.setMonth(0, 1),
                  t.setHours(0, 0, 0, 0));
              },
              (t, r) => {
                t.setFullYear(t.getFullYear() + r * e);
              }
            )
          : null),
        tN.range);
      let tI = to(
        (e) => {
          (e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0));
        },
        (e, t) => {
          e.setUTCFullYear(e.getUTCFullYear() + t);
        },
        (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
        (e) => e.getUTCFullYear()
      );
      function tz(e, t, r, n, i, a) {
        let o = [
          [tl, 1, 1e3],
          [tl, 5, 5e3],
          [tl, 15, 15e3],
          [tl, 30, 3e4],
          [a, 1, 6e4],
          [a, 5, 3e5],
          [a, 15, 9e5],
          [a, 30, 18e5],
          [i, 1, 36e5],
          [i, 3, 108e5],
          [i, 6, 216e5],
          [i, 12, 432e5],
          [n, 1, 864e5],
          [n, 2, 1728e5],
          [r, 1, 6048e5],
          [t, 1, 2592e6],
          [t, 3, 7776e6],
          [e, 1, 31536e6],
        ];
        function u(t, r, n) {
          let i = Math.abs(r - t) / n,
            a = T(([, , e]) => e).right(o, i);
          if (a === o.length) return e.every(E(t / 31536e6, r / 31536e6, n));
          if (0 === a) return tu.every(Math.max(E(t, r, n), 1));
          let [u, l] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
          return u.every(l);
        }
        return [
          function (e, t, r) {
            let n = t < e;
            n && ([e, t] = [t, e]);
            let i = r && "function" == typeof r.range ? r : u(e, t, r),
              a = i ? i.range(e, +t + 1) : [];
            return n ? a.reverse() : a;
          },
          u,
        ];
      }
      ((tI.every = (e) =>
        isFinite((e = Math.floor(e))) && e > 0
          ? to(
              (t) => {
                (t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
                  t.setUTCMonth(0, 1),
                  t.setUTCHours(0, 0, 0, 0));
              },
              (t, r) => {
                t.setUTCFullYear(t.getUTCFullYear() + r * e);
              }
            )
          : null),
        tI.range);
      let [tL, tR] = tz(tI, tD, tj, ty, td, ts),
        [tF, t$] = tz(tN, tT, tg, th, tf, tc);
      function tU(e) {
        if (0 <= e.y && e.y < 100) {
          var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
          return (t.setFullYear(e.y), t);
        }
        return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
      }
      function tH(e) {
        if (0 <= e.y && e.y < 100) {
          var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
          return (t.setUTCFullYear(e.y), t);
        }
        return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
      }
      function tB(e, t, r) {
        return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
      }
      var tK = { "-": "", _: " ", 0: "0" },
        tZ = /^\s*\d+/,
        tW = /^%/,
        tq = /[\\^$*+?|[\]().{}]/g;
      function tY(e, t, r) {
        var n = e < 0 ? "-" : "",
          i = (n ? -e : e) + "",
          a = i.length;
        return n + (a < r ? Array(r - a + 1).join(t) + i : i);
      }
      function tV(e) {
        return e.replace(tq, "\\$&");
      }
      function tG(e) {
        return RegExp("^(?:" + e.map(tV).join("|") + ")", "i");
      }
      function tX(e) {
        return new Map(e.map((e, t) => [e.toLowerCase(), t]));
      }
      function tJ(e, t, r) {
        var n = tZ.exec(t.slice(r, r + 1));
        return n ? ((e.w = +n[0]), r + n[0].length) : -1;
      }
      function tQ(e, t, r) {
        var n = tZ.exec(t.slice(r, r + 1));
        return n ? ((e.u = +n[0]), r + n[0].length) : -1;
      }
      function t0(e, t, r) {
        var n = tZ.exec(t.slice(r, r + 2));
        return n ? ((e.U = +n[0]), r + n[0].length) : -1;
      }
      function t1(e, t, r) {
        var n = tZ.exec(t.slice(r, r + 2));
        return n ? ((e.V = +n[0]), r + n[0].length) : -1;
      }
      function t2(e, t, r) {
        var n = tZ.exec(t.slice(r, r + 2));
        return n ? ((e.W = +n[0]), r + n[0].length) : -1;
      }
      function t5(e, t, r) {
        var n = tZ.exec(t.slice(r, r + 4));
        return n ? ((e.y = +n[0]), r + n[0].length) : -1;
      }
      function t3(e, t, r) {
        var n = tZ.exec(t.slice(r, r + 2));
        return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
      }
      function t4(e, t, r) {
        var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
        return n ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length) : -1;
      }
      function t8(e, t, r) {
        var n = tZ.exec(t.slice(r, r + 1));
        return n ? ((e.q = 3 * n[0] - 3), r + n[0].length) : -1;
      }
      function t6(e, t, r) {
        var n = tZ.exec(t.slice(r, r + 2));
        return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
      }
      function t7(e, t, r) {
        var n = tZ.exec(t.slice(r, r + 2));
        return n ? ((e.d = +n[0]), r + n[0].length) : -1;
      }
      function t9(e, t, r) {
        var n = tZ.exec(t.slice(r, r + 3));
        return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
      }
      function re(e, t, r) {
        var n = tZ.exec(t.slice(r, r + 2));
        return n ? ((e.H = +n[0]), r + n[0].length) : -1;
      }
      function rt(e, t, r) {
        var n = tZ.exec(t.slice(r, r + 2));
        return n ? ((e.M = +n[0]), r + n[0].length) : -1;
      }
      function rr(e, t, r) {
        var n = tZ.exec(t.slice(r, r + 2));
        return n ? ((e.S = +n[0]), r + n[0].length) : -1;
      }
      function rn(e, t, r) {
        var n = tZ.exec(t.slice(r, r + 3));
        return n ? ((e.L = +n[0]), r + n[0].length) : -1;
      }
      function ri(e, t, r) {
        var n = tZ.exec(t.slice(r, r + 6));
        return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
      }
      function ra(e, t, r) {
        var n = tW.exec(t.slice(r, r + 1));
        return n ? r + n[0].length : -1;
      }
      function ro(e, t, r) {
        var n = tZ.exec(t.slice(r));
        return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
      }
      function ru(e, t, r) {
        var n = tZ.exec(t.slice(r));
        return n ? ((e.s = +n[0]), r + n[0].length) : -1;
      }
      function rl(e, t) {
        return tY(e.getDate(), t, 2);
      }
      function rc(e, t) {
        return tY(e.getHours(), t, 2);
      }
      function rs(e, t) {
        return tY(e.getHours() % 12 || 12, t, 2);
      }
      function rf(e, t) {
        return tY(1 + th.count(tN(e), e), t, 3);
      }
      function rd(e, t) {
        return tY(e.getMilliseconds(), t, 3);
      }
      function rh(e, t) {
        return rd(e, t) + "000";
      }
      function rp(e, t) {
        return tY(e.getMonth() + 1, t, 2);
      }
      function ry(e, t) {
        return tY(e.getMinutes(), t, 2);
      }
      function rv(e, t) {
        return tY(e.getSeconds(), t, 2);
      }
      function rg(e) {
        var t = e.getDay();
        return 0 === t ? 7 : t;
      }
      function rm(e, t) {
        return tY(tg.count(tN(e) - 1, e), t, 2);
      }
      function rb(e) {
        var t = e.getDay();
        return t >= 4 || 0 === t ? tw(e) : tw.ceil(e);
      }
      function rx(e, t) {
        return ((e = rb(e)), tY(tw.count(tN(e), e) + (4 === tN(e).getDay()), t, 2));
      }
      function rw(e) {
        return e.getDay();
      }
      function rO(e, t) {
        return tY(tm.count(tN(e) - 1, e), t, 2);
      }
      function r_(e, t) {
        return tY(e.getFullYear() % 100, t, 2);
      }
      function rM(e, t) {
        return tY((e = rb(e)).getFullYear() % 100, t, 2);
      }
      function rj(e, t) {
        return tY(e.getFullYear() % 1e4, t, 4);
      }
      function rA(e, t) {
        var r = e.getDay();
        return tY((e = r >= 4 || 0 === r ? tw(e) : tw.ceil(e)).getFullYear() % 1e4, t, 4);
      }
      function rS(e) {
        var t = e.getTimezoneOffset();
        return (t > 0 ? "-" : ((t *= -1), "+")) + tY((t / 60) | 0, "0", 2) + tY(t % 60, "0", 2);
      }
      function rP(e, t) {
        return tY(e.getUTCDate(), t, 2);
      }
      function rE(e, t) {
        return tY(e.getUTCHours(), t, 2);
      }
      function rk(e, t) {
        return tY(e.getUTCHours() % 12 || 12, t, 2);
      }
      function rC(e, t) {
        return tY(1 + tp.count(tI(e), e), t, 3);
      }
      function rT(e, t) {
        return tY(e.getUTCMilliseconds(), t, 3);
      }
      function rD(e, t) {
        return rT(e, t) + "000";
      }
      function rN(e, t) {
        return tY(e.getUTCMonth() + 1, t, 2);
      }
      function rI(e, t) {
        return tY(e.getUTCMinutes(), t, 2);
      }
      function rz(e, t) {
        return tY(e.getUTCSeconds(), t, 2);
      }
      function rL(e) {
        var t = e.getUTCDay();
        return 0 === t ? 7 : t;
      }
      function rR(e, t) {
        return tY(tj.count(tI(e) - 1, e), t, 2);
      }
      function rF(e) {
        var t = e.getUTCDay();
        return t >= 4 || 0 === t ? tE(e) : tE.ceil(e);
      }
      function r$(e, t) {
        return ((e = rF(e)), tY(tE.count(tI(e), e) + (4 === tI(e).getUTCDay()), t, 2));
      }
      function rU(e) {
        return e.getUTCDay();
      }
      function rH(e, t) {
        return tY(tA.count(tI(e) - 1, e), t, 2);
      }
      function rB(e, t) {
        return tY(e.getUTCFullYear() % 100, t, 2);
      }
      function rK(e, t) {
        return tY((e = rF(e)).getUTCFullYear() % 100, t, 2);
      }
      function rZ(e, t) {
        return tY(e.getUTCFullYear() % 1e4, t, 4);
      }
      function rW(e, t) {
        var r = e.getUTCDay();
        return tY((e = r >= 4 || 0 === r ? tE(e) : tE.ceil(e)).getUTCFullYear() % 1e4, t, 4);
      }
      function rq() {
        return "+0000";
      }
      function rY() {
        return "%";
      }
      function rV(e) {
        return +e;
      }
      function rG(e) {
        return Math.floor(e / 1e3);
      }
      function rX(e) {
        return new Date(e);
      }
      function rJ(e) {
        return e instanceof Date ? +e : +new Date(+e);
      }
      function rQ(e, t, r, n, i, a, o, u, l, c) {
        var s = eD(),
          f = s.invert,
          d = s.domain,
          h = c(".%L"),
          p = c(":%S"),
          y = c("%I:%M"),
          v = c("%I %p"),
          g = c("%a %d"),
          m = c("%b %d"),
          b = c("%B"),
          x = c("%Y");
        function w(e) {
          return (
            l(e) < e
              ? h
              : u(e) < e
                ? p
                : o(e) < e
                  ? y
                  : a(e) < e
                    ? v
                    : n(e) < e
                      ? i(e) < e
                        ? g
                        : m
                      : r(e) < e
                        ? b
                        : x
          )(e);
        }
        return (
          (s.invert = function (e) {
            return new Date(f(e));
          }),
          (s.domain = function (e) {
            return arguments.length ? d(Array.from(e, rJ)) : d().map(rX);
          }),
          (s.ticks = function (t) {
            var r = d();
            return e(r[0], r[r.length - 1], null == t ? 10 : t);
          }),
          (s.tickFormat = function (e, t) {
            return null == t ? w : c(t);
          }),
          (s.nice = function (e) {
            var r = d();
            return (
              (e && "function" == typeof e.range) ||
                (e = t(r[0], r[r.length - 1], null == e ? 10 : e)),
              e ? d(eW(r, e)) : s
            );
          }),
          (s.copy = function () {
            return eC(s, rQ(e, t, r, n, i, a, o, u, l, c));
          }),
          s
        );
      }
      function r0() {
        return p.apply(
          rQ(tF, t$, tN, tT, tg, th, tf, tc, tl, l).domain([
            new Date(2e3, 0, 1),
            new Date(2e3, 0, 2),
          ]),
          arguments
        );
      }
      function r1() {
        return p.apply(
          rQ(tL, tR, tI, tD, tj, tp, td, ts, tl, c).domain([
            Date.UTC(2e3, 0, 1),
            Date.UTC(2e3, 0, 2),
          ]),
          arguments
        );
      }
      function r2() {
        var e,
          t,
          r,
          n,
          i,
          a = 0,
          o = 1,
          u = eS,
          l = !1;
        function c(t) {
          return null == t || isNaN((t *= 1))
            ? i
            : u(0 === r ? 0.5 : ((t = (n(t) - e) * r), l ? Math.max(0, Math.min(1, t)) : t));
        }
        function s(e) {
          return function (t) {
            var r, n;
            return arguments.length ? (([r, n] = t), (u = e(r, n)), c) : [u(0), u(1)];
          };
        }
        return (
          (c.domain = function (i) {
            return arguments.length
              ? (([a, o] = i),
                (e = n((a *= 1))),
                (t = n((o *= 1))),
                (r = e === t ? 0 : 1 / (t - e)),
                c)
              : [a, o];
          }),
          (c.clamp = function (e) {
            return arguments.length ? ((l = !!e), c) : l;
          }),
          (c.interpolator = function (e) {
            return arguments.length ? ((u = e), c) : u;
          }),
          (c.range = s(e_)),
          (c.rangeRound = s(eM)),
          (c.unknown = function (e) {
            return arguments.length ? ((i = e), c) : i;
          }),
          function (i) {
            return ((n = i), (e = i(a)), (t = i(o)), (r = e === t ? 0 : 1 / (t - e)), c);
          }
        );
      }
      function r5(e, t) {
        return t
          .domain(e.domain())
          .interpolator(e.interpolator())
          .clamp(e.clamp())
          .unknown(e.unknown());
      }
      function r3() {
        var e = e8(r2());
        return (
          (e.copy = function () {
            return r5(e, r3()).exponent(e.exponent());
          }),
          y.apply(e, arguments)
        );
      }
      function r4() {
        return r3.apply(null, arguments).exponent(0.5);
      }
      function r8() {
        var e,
          t,
          r,
          n,
          i,
          a,
          o,
          u = 0,
          l = 0.5,
          c = 1,
          s = 1,
          f = eS,
          d = !1;
        function h(e) {
          return isNaN((e *= 1))
            ? o
            : ((e = 0.5 + ((e = +a(e)) - t) * (s * e < s * t ? n : i)),
              f(d ? Math.max(0, Math.min(1, e)) : e));
        }
        function p(e) {
          return function (t) {
            var r, n, i;
            return arguments.length
              ? (([r, n, i] = t),
                (f = (function (e, t) {
                  void 0 === t && ((t = e), (e = e_));
                  for (var r = 0, n = t.length - 1, i = t[0], a = Array(n < 0 ? 0 : n); r < n; )
                    a[r] = e(i, (i = t[++r]));
                  return function (e) {
                    var t = Math.max(0, Math.min(n - 1, Math.floor((e *= n))));
                    return a[t](e - t);
                  };
                })(e, [r, n, i])),
                h)
              : [f(0), f(0.5), f(1)];
          };
        }
        return (
          (h.domain = function (o) {
            return arguments.length
              ? (([u, l, c] = o),
                (e = a((u *= 1))),
                (t = a((l *= 1))),
                (r = a((c *= 1))),
                (n = e === t ? 0 : 0.5 / (t - e)),
                (i = t === r ? 0 : 0.5 / (r - t)),
                (s = t < e ? -1 : 1),
                h)
              : [u, l, c];
          }),
          (h.clamp = function (e) {
            return arguments.length ? ((d = !!e), h) : d;
          }),
          (h.interpolator = function (e) {
            return arguments.length ? ((f = e), h) : f;
          }),
          (h.range = p(e_)),
          (h.rangeRound = p(eM)),
          (h.unknown = function (e) {
            return arguments.length ? ((o = e), h) : o;
          }),
          function (o) {
            return (
              (a = o),
              (e = o(u)),
              (t = o(l)),
              (r = o(c)),
              (n = e === t ? 0 : 0.5 / (t - e)),
              (i = t === r ? 0 : 0.5 / (r - t)),
              (s = t < e ? -1 : 1),
              h
            );
          }
        );
      }
      function r6() {
        var e = e8(r8());
        return (
          (e.copy = function () {
            return r5(e, r6()).exponent(e.exponent());
          }),
          y.apply(e, arguments)
        );
      }
      function r7() {
        return r6.apply(null, arguments).exponent(0.5);
      }
      ((l = (u = (function (e) {
        var t = e.dateTime,
          r = e.date,
          n = e.time,
          i = e.periods,
          a = e.days,
          o = e.shortDays,
          u = e.months,
          l = e.shortMonths,
          c = tG(i),
          s = tX(i),
          f = tG(a),
          d = tX(a),
          h = tG(o),
          p = tX(o),
          y = tG(u),
          v = tX(u),
          g = tG(l),
          m = tX(l),
          b = {
            a: function (e) {
              return o[e.getDay()];
            },
            A: function (e) {
              return a[e.getDay()];
            },
            b: function (e) {
              return l[e.getMonth()];
            },
            B: function (e) {
              return u[e.getMonth()];
            },
            c: null,
            d: rl,
            e: rl,
            f: rh,
            g: rM,
            G: rA,
            H: rc,
            I: rs,
            j: rf,
            L: rd,
            m: rp,
            M: ry,
            p: function (e) {
              return i[+(e.getHours() >= 12)];
            },
            q: function (e) {
              return 1 + ~~(e.getMonth() / 3);
            },
            Q: rV,
            s: rG,
            S: rv,
            u: rg,
            U: rm,
            V: rx,
            w: rw,
            W: rO,
            x: null,
            X: null,
            y: r_,
            Y: rj,
            Z: rS,
            "%": rY,
          },
          x = {
            a: function (e) {
              return o[e.getUTCDay()];
            },
            A: function (e) {
              return a[e.getUTCDay()];
            },
            b: function (e) {
              return l[e.getUTCMonth()];
            },
            B: function (e) {
              return u[e.getUTCMonth()];
            },
            c: null,
            d: rP,
            e: rP,
            f: rD,
            g: rK,
            G: rW,
            H: rE,
            I: rk,
            j: rC,
            L: rT,
            m: rN,
            M: rI,
            p: function (e) {
              return i[+(e.getUTCHours() >= 12)];
            },
            q: function (e) {
              return 1 + ~~(e.getUTCMonth() / 3);
            },
            Q: rV,
            s: rG,
            S: rz,
            u: rL,
            U: rR,
            V: r$,
            w: rU,
            W: rH,
            x: null,
            X: null,
            y: rB,
            Y: rZ,
            Z: rq,
            "%": rY,
          },
          w = {
            a: function (e, t, r) {
              var n = h.exec(t.slice(r));
              return n ? ((e.w = p.get(n[0].toLowerCase())), r + n[0].length) : -1;
            },
            A: function (e, t, r) {
              var n = f.exec(t.slice(r));
              return n ? ((e.w = d.get(n[0].toLowerCase())), r + n[0].length) : -1;
            },
            b: function (e, t, r) {
              var n = g.exec(t.slice(r));
              return n ? ((e.m = m.get(n[0].toLowerCase())), r + n[0].length) : -1;
            },
            B: function (e, t, r) {
              var n = y.exec(t.slice(r));
              return n ? ((e.m = v.get(n[0].toLowerCase())), r + n[0].length) : -1;
            },
            c: function (e, r, n) {
              return M(e, t, r, n);
            },
            d: t7,
            e: t7,
            f: ri,
            g: t3,
            G: t5,
            H: re,
            I: re,
            j: t9,
            L: rn,
            m: t6,
            M: rt,
            p: function (e, t, r) {
              var n = c.exec(t.slice(r));
              return n ? ((e.p = s.get(n[0].toLowerCase())), r + n[0].length) : -1;
            },
            q: t8,
            Q: ro,
            s: ru,
            S: rr,
            u: tQ,
            U: t0,
            V: t1,
            w: tJ,
            W: t2,
            x: function (e, t, n) {
              return M(e, r, t, n);
            },
            X: function (e, t, r) {
              return M(e, n, t, r);
            },
            y: t3,
            Y: t5,
            Z: t4,
            "%": ra,
          };
        function O(e, t) {
          return function (r) {
            var n,
              i,
              a,
              o = [],
              u = -1,
              l = 0,
              c = e.length;
            for (r instanceof Date || (r = new Date(+r)); ++u < c; )
              37 === e.charCodeAt(u) &&
                (o.push(e.slice(l, u)),
                null != (i = tK[(n = e.charAt(++u))])
                  ? (n = e.charAt(++u))
                  : (i = "e" === n ? " " : "0"),
                (a = t[n]) && (n = a(r, i)),
                o.push(n),
                (l = u + 1));
            return (o.push(e.slice(l, u)), o.join(""));
          };
        }
        function _(e, t) {
          return function (r) {
            var n,
              i,
              a = tB(1900, void 0, 1);
            if (M(a, e, (r += ""), 0) != r.length) return null;
            if ("Q" in a) return new Date(a.Q);
            if ("s" in a) return new Date(1e3 * a.s + ("L" in a ? a.L : 0));
            if (
              (!t || "Z" in a || (a.Z = 0),
              "p" in a && (a.H = (a.H % 12) + 12 * a.p),
              void 0 === a.m && (a.m = "q" in a ? a.q : 0),
              "V" in a)
            ) {
              if (a.V < 1 || a.V > 53) return null;
              ("w" in a || (a.w = 1),
                "Z" in a
                  ? ((n =
                      (i = (n = tH(tB(a.y, 0, 1))).getUTCDay()) > 4 || 0 === i
                        ? tA.ceil(n)
                        : tA(n)),
                    (n = tp.offset(n, (a.V - 1) * 7)),
                    (a.y = n.getUTCFullYear()),
                    (a.m = n.getUTCMonth()),
                    (a.d = n.getUTCDate() + ((a.w + 6) % 7)))
                  : ((n =
                      (i = (n = tU(tB(a.y, 0, 1))).getDay()) > 4 || 0 === i ? tm.ceil(n) : tm(n)),
                    (n = th.offset(n, (a.V - 1) * 7)),
                    (a.y = n.getFullYear()),
                    (a.m = n.getMonth()),
                    (a.d = n.getDate() + ((a.w + 6) % 7))));
            } else
              ("W" in a || "U" in a) &&
                ("w" in a || (a.w = "u" in a ? a.u % 7 : +("W" in a)),
                (i = "Z" in a ? tH(tB(a.y, 0, 1)).getUTCDay() : tU(tB(a.y, 0, 1)).getDay()),
                (a.m = 0),
                (a.d =
                  "W" in a
                    ? ((a.w + 6) % 7) + 7 * a.W - ((i + 5) % 7)
                    : a.w + 7 * a.U - ((i + 6) % 7)));
            return "Z" in a ? ((a.H += (a.Z / 100) | 0), (a.M += a.Z % 100), tH(a)) : tU(a);
          };
        }
        function M(e, t, r, n) {
          for (var i, a, o = 0, u = t.length, l = r.length; o < u; ) {
            if (n >= l) return -1;
            if (37 === (i = t.charCodeAt(o++))) {
              if (!(a = w[(i = t.charAt(o++)) in tK ? t.charAt(o++) : i]) || (n = a(e, r, n)) < 0)
                return -1;
            } else if (i != r.charCodeAt(n++)) return -1;
          }
          return n;
        }
        return (
          (b.x = O(r, b)),
          (b.X = O(n, b)),
          (b.c = O(t, b)),
          (x.x = O(r, x)),
          (x.X = O(n, x)),
          (x.c = O(t, x)),
          {
            format: function (e) {
              var t = O((e += ""), b);
              return (
                (t.toString = function () {
                  return e;
                }),
                t
              );
            },
            parse: function (e) {
              var t = _((e += ""), !1);
              return (
                (t.toString = function () {
                  return e;
                }),
                t
              );
            },
            utcFormat: function (e) {
              var t = O((e += ""), x);
              return (
                (t.toString = function () {
                  return e;
                }),
                t
              );
            },
            utcParse: function (e) {
              var t = _((e += ""), !0);
              return (
                (t.toString = function () {
                  return e;
                }),
                t
              );
            },
          }
        );
      })({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        shortMonths: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      })).format),
        u.parse,
        (c = u.utcFormat),
        u.utcParse);
      var r9 = r(90167),
        ne = r(51023),
        nt = r(90135),
        nr = r(23857),
        nn = r(49580),
        ni = r(92377),
        na = r(29533),
        no = r.n(na),
        nu = (e) => e,
        nl = {},
        nc = (e) =>
          function t() {
            let r;
            return 0 == arguments.length ||
              (1 == arguments.length &&
                ((r = arguments.length <= 0 ? void 0 : arguments[0]), r === nl))
              ? t
              : e(...arguments);
          },
        ns = (e, t) =>
          1 === e
            ? t
            : nc(function () {
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                var a = n.filter((e) => e !== nl).length;
                return a >= e
                  ? t(...n)
                  : ns(
                      e - a,
                      nc(function () {
                        for (var e = arguments.length, r = Array(e), i = 0; i < e; i++)
                          r[i] = arguments[i];
                        return t(...n.map((e) => (e === nl ? r.shift() : e)), ...r);
                      })
                    );
              }),
        nf = (e, t) => {
          for (var r = [], n = e; n < t; ++n) r[n - e] = n;
          return r;
        },
        nd = ((e) => ns(e.length, e))((e, t) =>
          Array.isArray(t)
            ? t.map(e)
            : Object.keys(t)
                .map((e) => t[e])
                .map(e)
        ),
        nh = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          if (!t.length) return nu;
          var n = t.reverse(),
            i = n[0],
            a = n.slice(1);
          return function () {
            return a.reduce((e, t) => t(e), i(...arguments));
          };
        };
      function np(e) {
        return 0 === e ? 1 : Math.floor(new (no())(e).abs().log(10).toNumber()) + 1;
      }
      function ny(e, t, r) {
        for (var n = new (no())(e), i = 0, a = []; n.lt(t) && i < 1e5; )
          (a.push(n.toNumber()), (n = n.add(r)), i++);
        return a;
      }
      var nv = (e) => {
          var [t, r] = e,
            [n, i] = [t, r];
          return (t > r && ([n, i] = [r, t]), [n, i]);
        },
        ng = (e, t, r) => {
          if (e.lte(0)) return new (no())(0);
          var n = np(e.toNumber()),
            i = new (no())(10).pow(n),
            a = e.div(i),
            o = 1 !== n ? 0.05 : 0.1,
            u = new (no())(Math.ceil(a.div(o).toNumber())).add(r).mul(o).mul(i);
          return new (no())(t ? u.toNumber() : Math.ceil(u.toNumber()));
        },
        nm = function (e, t, r, n) {
          var i,
            a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          if (!Number.isFinite((t - e) / (r - 1)))
            return { step: new (no())(0), tickMin: new (no())(0), tickMax: new (no())(0) };
          var o = ng(new (no())(t).sub(e).div(r - 1), n, a),
            u = Math.ceil(
              (i =
                e <= 0 && t >= 0
                  ? new (no())(0)
                  : (i = new (no())(e).add(t).div(2)).sub(new (no())(i).mod(o)))
                .sub(e)
                .div(o)
                .toNumber()
            ),
            l = Math.ceil(new (no())(t).sub(i).div(o).toNumber()),
            c = u + l + 1;
          return c > r
            ? nm(e, t, r, n, a + 1)
            : (c < r && ((l = t > 0 ? l + (r - c) : l), (u = t > 0 ? u : u + (r - c))),
              {
                step: o,
                tickMin: i.sub(new (no())(u).mul(o)),
                tickMax: i.add(new (no())(l).mul(o)),
              });
        },
        nb = function (e) {
          var [t, r] = e,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
            i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            a = Math.max(n, 2),
            [o, u] = nv([t, r]);
          if (o === -1 / 0 || u === 1 / 0) {
            var l =
              u === 1 / 0
                ? [o, ...nf(0, n - 1).map(() => 1 / 0)]
                : [...nf(0, n - 1).map(() => -1 / 0), u];
            return t > r ? l.reverse() : l;
          }
          if (o === u) {
            var c = new (no())(1),
              s = new (no())(o);
            if (!s.isint() && i) {
              var f = Math.abs(o);
              f < 1
                ? ((c = new (no())(10).pow(np(o) - 1)),
                  (s = new (no())(Math.floor(s.div(c).toNumber())).mul(c)))
                : f > 1 && (s = new (no())(Math.floor(o)));
            } else
              0 === o
                ? (s = new (no())(Math.floor((n - 1) / 2)))
                : i || (s = new (no())(Math.floor(o)));
            var d = Math.floor((n - 1) / 2);
            return nh(
              nd((e) => s.add(new (no())(e - d).mul(c)).toNumber()),
              nf
            )(0, n);
          }
          var { step: h, tickMin: p, tickMax: y } = nm(o, u, a, i, 0),
            v = ny(p, y.add(new (no())(0.1).mul(h)), h);
          return t > r ? v.reverse() : v;
        },
        nx = function (e, t) {
          var [r, n] = e,
            i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            [a, o] = nv([r, n]);
          if (a === -1 / 0 || o === 1 / 0) return [r, n];
          if (a === o) return [a];
          var u = Math.max(t, 2),
            l = ng(new (no())(o).sub(a).div(u - 1), i, 0),
            c = [...ny(new (no())(a), new (no())(o), l), o];
          return (!1 === i && (c = c.map((e) => Math.round(e))), r > n ? c.reverse() : c);
        },
        nw = r(27588),
        nO = r(49507),
        n_ = r(8291),
        nM = r(50257),
        nj = r(15195),
        nA = r(14821),
        nS = r(72259),
        nP = r(13802),
        nE = r(15145),
        nk = r(34264),
        nC = r(34565),
        nT = r(24021),
        nD = r(35923),
        nN = r(20526),
        nI = r(61060),
        nz = r(95603),
        nL = r(68570);
      function nR(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function nF(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? nR(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : nR(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var n$ = [0, "auto"],
        nU = {
          allowDataOverflow: !1,
          allowDecimals: !0,
          allowDuplicatedCategory: !0,
          angle: 0,
          dataKey: void 0,
          domain: void 0,
          height: 30,
          hide: !0,
          id: 0,
          includeHidden: !1,
          interval: "preserveEnd",
          minTickGap: 5,
          mirror: !1,
          name: void 0,
          orientation: "bottom",
          padding: { left: 0, right: 0 },
          reversed: !1,
          scale: "auto",
          tick: !0,
          tickCount: 5,
          tickFormatter: void 0,
          ticks: void 0,
          type: "category",
          unit: void 0,
        },
        nH = (e, t) => e.cartesianAxis.xAxis[t],
        nB = (e, t) => {
          var r = nH(e, t);
          return null == r ? nU : r;
        },
        nK = {
          allowDataOverflow: !1,
          allowDecimals: !0,
          allowDuplicatedCategory: !0,
          angle: 0,
          dataKey: void 0,
          domain: n$,
          hide: !0,
          id: 0,
          includeHidden: !1,
          interval: "preserveEnd",
          minTickGap: 5,
          mirror: !1,
          name: void 0,
          orientation: "left",
          padding: { top: 0, bottom: 0 },
          reversed: !1,
          scale: "auto",
          tick: !0,
          tickCount: 5,
          tickFormatter: void 0,
          ticks: void 0,
          type: "number",
          unit: void 0,
          width: nk.tQ,
        },
        nZ = (e, t) => e.cartesianAxis.yAxis[t],
        nW = (e, t) => {
          var r = nZ(e, t);
          return null == r ? nK : r;
        },
        nq = {
          domain: [0, "auto"],
          includeHidden: !1,
          reversed: !1,
          allowDataOverflow: !1,
          allowDuplicatedCategory: !1,
          dataKey: void 0,
          id: 0,
          name: "",
          range: [64, 64],
          scale: "auto",
          type: "number",
          unit: "",
        },
        nY = (e, t) => {
          var r = e.cartesianAxis.zAxis[t];
          return null == r ? nq : r;
        },
        nV = (e, t, r) => {
          switch (t) {
            case "xAxis":
              return nB(e, r);
            case "yAxis":
              return nW(e, r);
            case "zAxis":
              return nY(e, r);
            case "angleAxis":
              return (0, nA.Be)(e, r);
            case "radiusAxis":
              return (0, nA.Gl)(e, r);
            default:
              throw Error("Unexpected axis type: ".concat(t));
          }
        },
        nG = (e, t, r) => {
          switch (t) {
            case "xAxis":
              return nB(e, r);
            case "yAxis":
              return nW(e, r);
            case "angleAxis":
              return (0, nA.Be)(e, r);
            case "radiusAxis":
              return (0, nA.Gl)(e, r);
            default:
              throw Error("Unexpected axis type: ".concat(t));
          }
        },
        nX = (e) =>
          e.graphicalItems.cartesianItems.some((e) => "bar" === e.type) ||
          e.graphicalItems.polarItems.some((e) => "radialBar" === e.type);
      function nJ(e, t) {
        return (r) => {
          switch (e) {
            case "xAxis":
              return "xAxisId" in r && r.xAxisId === t;
            case "yAxis":
              return "yAxisId" in r && r.yAxisId === t;
            case "zAxis":
              return "zAxisId" in r && r.zAxisId === t;
            case "angleAxis":
              return "angleAxisId" in r && r.angleAxisId === t;
            case "radiusAxis":
              return "radiusAxisId" in r && r.radiusAxisId === t;
            default:
              return !1;
          }
        };
      }
      var nQ = (e) => e.graphicalItems.cartesianItems,
        n0 = (0, f.Mz)([nS.N, nP.E], nJ),
        n1 = (e, t, r) =>
          e.filter(r).filter((e) => (null == t ? void 0 : t.includeHidden) === !0 || !e.hide),
        n2 = (0, f.Mz)([nQ, nV, n0], n1, { memoizeOptions: { resultEqualityCheck: nI.O } }),
        n5 = (0, f.Mz)([n2], (e) =>
          e.filter((e) => "area" === e.type || "bar" === e.type).filter(nD.g)
        ),
        n3 = (e) => e.filter((e) => !("stackId" in e) || void 0 === e.stackId),
        n4 = (0, f.Mz)([n2], n3),
        n8 = (e) =>
          e
            .map((e) => e.data)
            .filter(Boolean)
            .flat(1),
        n6 = (0, f.Mz)([n2], n8, { memoizeOptions: { resultEqualityCheck: nI.O } }),
        n7 = (e, t) => {
          var { chartData: r = [], dataStartIndex: n, dataEndIndex: i } = t;
          return e.length > 0 ? e : r.slice(n, i + 1);
        },
        n9 = (0, f.Mz)([n6, nt.k$], n7),
        ie = (e, t, r) =>
          (null == t ? void 0 : t.dataKey) != null
            ? e.map((e) => ({ value: (0, ne.kr)(e, t.dataKey) }))
            : r.length > 0
              ? r.map((e) => e.dataKey).flatMap((t) => e.map((e) => ({ value: (0, ne.kr)(e, t) })))
              : e.map((e) => ({ value: e })),
        it = (0, f.Mz)([n9, nV, n2], ie);
      function ir(e, t) {
        switch (e) {
          case "xAxis":
            return "x" === t.direction;
          case "yAxis":
            return "y" === t.direction;
          default:
            return !1;
        }
      }
      function ii(e) {
        if ((0, nn.vh)(e) || e instanceof Date) {
          var t = Number(e);
          if ((0, ni.H)(t)) return t;
        }
      }
      function ia(e) {
        if (Array.isArray(e)) {
          var t = [ii(e[0]), ii(e[1])];
          return (0, nr.JH)(t) ? t : void 0;
        }
        var r = ii(e);
        if (null != r) return [r, r];
      }
      function io(e) {
        return e.map(ii).filter(nn.n9);
      }
      var iu = (e) => {
          var t = (0, nz.R)(e),
            r = (0, nL.M)(e);
          return nG(e, t, r);
        },
        il = (0, f.Mz)([iu], (e) => (null == e ? void 0 : e.dataKey)),
        ic = (0, f.Mz)([n5, nt.k$, iu], nT.A),
        is = (e, t, r, n) =>
          Object.fromEntries(
            Object.entries(
              t.reduce((e, t) => {
                if (null == t.stackId) return e;
                var r = e[t.stackId];
                return (null == r && (r = []), r.push(t), (e[t.stackId] = r), e);
              }, {})
            ).map((t) => {
              var [i, a] = t,
                o = n ? [...a].reverse() : a,
                u = o.map(nC.x);
              return [i, { stackedData: (0, ne.yy)(e, u, r), graphicalItems: o }];
            })
          ),
        id = (0, f.Mz)([ic, n5, nj.eC, nj.Lb], is),
        ih = (e, t, r, n) => {
          var { dataStartIndex: i, dataEndIndex: a } = t;
          if (null == n && "zAxis" !== r) {
            var o = (0, ne.Mk)(e, i, a);
            if (null == o || 0 !== o[0] || 0 !== o[1]) return o;
          }
        },
        ip = (0, f.Mz)([nV], (e) => e.allowDataOverflow),
        iy = (e) => {
          var t;
          if (null == e || !("domain" in e)) return n$;
          if (null != e.domain) return e.domain;
          if ("ticks" in e && null != e.ticks) {
            if ("number" === e.type) {
              var r = io(e.ticks);
              return [Math.min(...r), Math.max(...r)];
            }
            if ("category" === e.type) return e.ticks.map(String);
          }
          return null != (t = null == e ? void 0 : e.domain) ? t : n$;
        },
        iv = (0, f.Mz)([nV], iy),
        ig = (0, f.Mz)([iv, ip], nr.f5),
        im = (0, f.Mz)([id, nt.LF, nS.N, ig], ih, {
          memoizeOptions: { resultEqualityCheck: nN.o },
        }),
        ib = (e) => e.errorBars,
        ix = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          var n = t.filter(Boolean);
          if (0 !== n.length) {
            var i = n.flat();
            return [Math.min(...i), Math.max(...i)];
          }
        },
        iw = (e, t, r, n, i) => {
          var a, o;
          if (
            (r.length > 0 &&
              e.forEach((e) => {
                r.forEach((r) => {
                  var u,
                    l,
                    c = null == (u = n[r.id]) ? void 0 : u.filter((e) => ir(i, e)),
                    s = (0, ne.kr)(e, null != (l = t.dataKey) ? l : r.dataKey),
                    f = (function (e, t, r) {
                      return !r || "number" != typeof t || (0, nn.M8)(t) || !r.length
                        ? []
                        : io(
                            r.flatMap((r) => {
                              var n,
                                i,
                                a = (0, ne.kr)(e, r.dataKey);
                              if (
                                (Array.isArray(a) ? ([n, i] = a) : (n = i = a),
                                (0, ni.H)(n) && (0, ni.H)(i))
                              )
                                return [t - n, t + i];
                            })
                          );
                    })(e, s, c);
                  if (f.length >= 2) {
                    var d = Math.min(...f),
                      h = Math.max(...f);
                    ((null == a || d < a) && (a = d), (null == o || h > o) && (o = h));
                  }
                  var p = ia(s);
                  null != p &&
                    ((a = null == a ? p[0] : Math.min(a, p[0])),
                    (o = null == o ? p[1] : Math.max(o, p[1])));
                });
              }),
            (null == t ? void 0 : t.dataKey) != null &&
              e.forEach((e) => {
                var r = ia((0, ne.kr)(e, t.dataKey));
                null != r &&
                  ((a = null == a ? r[0] : Math.min(a, r[0])),
                  (o = null == o ? r[1] : Math.max(o, r[1])));
              }),
            (0, ni.H)(a) && (0, ni.H)(o))
          )
            return [a, o];
        },
        iO = (0, f.Mz)([n9, nV, n4, ib, nS.N], iw, {
          memoizeOptions: { resultEqualityCheck: nN.o },
        });
      function i_(e) {
        var { value: t } = e;
        if ((0, nn.vh)(t) || t instanceof Date) return t;
      }
      var iM = (e) => e.referenceElements.dots,
        ij = (e, t, r) =>
          e
            .filter((e) => "extendDomain" === e.ifOverflow)
            .filter((e) => ("xAxis" === t ? e.xAxisId === r : e.yAxisId === r)),
        iA = (0, f.Mz)([iM, nS.N, nP.E], ij),
        iS = (e) => e.referenceElements.areas,
        iP = (0, f.Mz)([iS, nS.N, nP.E], ij),
        iE = (e) => e.referenceElements.lines,
        ik = (0, f.Mz)([iE, nS.N, nP.E], ij),
        iC = (e, t) => {
          if (null != e) {
            var r = io(e.map((e) => ("xAxis" === t ? e.x : e.y)));
            if (0 !== r.length) return [Math.min(...r), Math.max(...r)];
          }
        },
        iT = (0, f.Mz)(iA, nS.N, iC),
        iD = (e, t) => {
          if (null != e) {
            var r = io(
              e.flatMap((e) => ["xAxis" === t ? e.x1 : e.y1, "xAxis" === t ? e.x2 : e.y2])
            );
            if (0 !== r.length) return [Math.min(...r), Math.max(...r)];
          }
        },
        iN = (0, f.Mz)([iP, nS.N], iD),
        iI = (e, t) => {
          if (null != e) {
            var r = e.flatMap((e) =>
              "xAxis" === t
                ? (function (e) {
                    if (null != e.x) return io([e.x]);
                    var t,
                      r = null == (t = e.segment) ? void 0 : t.map((e) => e.x);
                    return null == r || 0 === r.length ? [] : io(r);
                  })(e)
                : (function (e) {
                    if (null != e.y) return io([e.y]);
                    var t,
                      r = null == (t = e.segment) ? void 0 : t.map((e) => e.y);
                    return null == r || 0 === r.length ? [] : io(r);
                  })(e)
            );
            if (0 !== r.length) return [Math.min(...r), Math.max(...r)];
          }
        },
        iz = (0, f.Mz)([ik, nS.N], iI),
        iL = (0, f.Mz)(iT, iz, iN, (e, t, r) => ix(e, r, t)),
        iR = (e, t, r, n, i, a, o, u) => {
          if (null != r) return r;
          var l =
            ("vertical" === o && "xAxis" === u) || ("horizontal" === o && "yAxis" === u)
              ? ix(n, a, i)
              : ix(a, i);
          return (0, nr.v1)(t, l, e.allowDataOverflow);
        },
        iF = (0, f.Mz)([nV, iv, ig, im, iO, iL, r9.fz, nS.N], iR, {
          memoizeOptions: { resultEqualityCheck: nN.o },
        }),
        i$ = [0, 1],
        iU = (e, t, r, n, i, a, o) => {
          if ((null != e && null != r && 0 !== r.length) || void 0 !== o) {
            var u,
              { dataKey: l, type: c } = e,
              s = (0, ne._L)(t, a);
            return s && null == l
              ? h()(0, null != (u = null == r ? void 0 : r.length) ? u : 0)
              : "category" === c
                ? ((e, t, r) => {
                    var n = e.map(i_).filter((e) => null != e);
                    return r && (null == t.dataKey || (t.allowDuplicatedCategory && (0, nn.CG)(n)))
                      ? h()(0, e.length)
                      : t.allowDuplicatedCategory
                        ? n
                        : Array.from(new Set(n));
                  })(n, e, s)
                : "expand" === i
                  ? i$
                  : o;
          }
        },
        iH = (0, f.Mz)([nV, r9.fz, n9, it, nj.eC, nS.N, iF], iU),
        iB = (e, t, r, n, i) => {
          if (null != e) {
            var { scale: a, type: o } = e;
            if ("auto" === a)
              return "radial" === t && "radiusAxis" === i
                ? "band"
                : "radial" === t && "angleAxis" === i
                  ? "linear"
                  : "category" === o &&
                      n &&
                      (n.indexOf("LineChart") >= 0 ||
                        n.indexOf("AreaChart") >= 0 ||
                        (n.indexOf("ComposedChart") >= 0 && !r))
                    ? "point"
                    : "category" === o
                      ? "band"
                      : "linear";
            if ("string" == typeof a) {
              var u = "scale".concat((0, nn.Zb)(a));
              return u in s ? u : "point";
            }
          }
        },
        iK = (0, f.Mz)([nV, r9.fz, nX, nj.iO, nS.N], iB);
      function iZ(e, t, r, n) {
        if (null != r && null != n) {
          if ("function" == typeof e.scale) return e.scale.copy().domain(r).range(n);
          var i = (function (e) {
            if (null != e) {
              if (e in s) return s[e]();
              var t = "scale".concat((0, nn.Zb)(e));
              if (t in s) return s[t]();
            }
          })(t);
          if (null != i) {
            var a = i.domain(r).range(n);
            return ((0, ne.YB)(a), a);
          }
        }
      }
      var iW = (e, t, r) => {
          var n = iy(t);
          if ("auto" === r || "linear" === r) {
            if (
              null != t &&
              t.tickCount &&
              Array.isArray(n) &&
              ("auto" === n[0] || "auto" === n[1]) &&
              (0, nr.JH)(e)
            )
              return nb(e, t.tickCount, t.allowDecimals);
            if (null != t && t.tickCount && "number" === t.type && (0, nr.JH)(e))
              return nx(e, t.tickCount, t.allowDecimals);
          }
        },
        iq = (0, f.Mz)([iH, nG, iK], iW),
        iY = (e, t, r, n) =>
          "angleAxis" !== n &&
          (null == e ? void 0 : e.type) === "number" &&
          (0, nr.JH)(t) &&
          Array.isArray(r) &&
          r.length > 0
            ? [Math.min(t[0], r[0]), Math.max(t[1], r[r.length - 1])]
            : t,
        iV = (0, f.Mz)([nV, iH, iq, nS.N], iY),
        iG = (0, f.Mz)(it, nV, (e, t) => {
          if (t && "number" === t.type) {
            var r = 1 / 0,
              n = Array.from(io(e.map((e) => e.value))).sort((e, t) => e - t),
              i = n[0],
              a = n[n.length - 1];
            if (null == i || null == a) return 1 / 0;
            var o = a - i;
            if (0 === o) return 1 / 0;
            for (var u = 0; u < n.length - 1; u++) {
              var l = n[u],
                c = n[u + 1];
              null != l && null != c && (r = Math.min(r, c - l));
            }
            return r / o;
          }
        }),
        iX = (0, f.Mz)(
          iG,
          r9.fz,
          nj.gY,
          n_.HZ,
          (e, t, r, n, i) => i,
          (e, t, r, n, i) => {
            if (!(0, ni.H)(e)) return 0;
            var a = "vertical" === t ? n.height : n.width;
            if ("gap" === i) return (e * a) / 2;
            if ("no-gap" === i) {
              var o = (0, nn.F4)(r, e * a),
                u = (e * a) / 2;
              return u - o - ((u - o) / a) * o;
            }
            return 0;
          }
        ),
        iJ = (0, f.Mz)(
          nB,
          (e, t, r) => {
            var n = nB(e, t);
            return null == n || "string" != typeof n.padding ? 0 : iX(e, "xAxis", t, r, n.padding);
          },
          (e, t) => {
            if (null == e) return { left: 0, right: 0 };
            var r,
              n,
              { padding: i } = e;
            return "string" == typeof i
              ? { left: t, right: t }
              : {
                  left: (null != (r = i.left) ? r : 0) + t,
                  right: (null != (n = i.right) ? n : 0) + t,
                };
          }
        ),
        iQ = (0, f.Mz)(
          nW,
          (e, t, r) => {
            var n = nW(e, t);
            return null == n || "string" != typeof n.padding ? 0 : iX(e, "yAxis", t, r, n.padding);
          },
          (e, t) => {
            if (null == e) return { top: 0, bottom: 0 };
            var r,
              n,
              { padding: i } = e;
            return "string" == typeof i
              ? { top: t, bottom: t }
              : {
                  top: (null != (r = i.top) ? r : 0) + t,
                  bottom: (null != (n = i.bottom) ? n : 0) + t,
                };
          }
        ),
        i0 = (0, f.Mz)([n_.HZ, iJ, nM.U, nM.C, (e, t, r) => r], (e, t, r, n, i) => {
          var { padding: a } = n;
          return i ? [a.left, r.width - a.right] : [e.left + t.left, e.left + e.width - t.right];
        }),
        i1 = (0, f.Mz)([n_.HZ, r9.fz, iQ, nM.U, nM.C, (e, t, r) => r], (e, t, r, n, i, a) => {
          var { padding: o } = i;
          return a
            ? [n.height - o.bottom, o.top]
            : "horizontal" === t
              ? [e.top + e.height - r.bottom, e.top + r.top]
              : [e.top + r.top, e.top + e.height - r.bottom];
        }),
        i2 = (e, t, r, n) => {
          var i;
          switch (t) {
            case "xAxis":
              return i0(e, r, n);
            case "yAxis":
              return i1(e, r, n);
            case "zAxis":
              return null == (i = nY(e, r)) ? void 0 : i.range;
            case "angleAxis":
              return (0, nA.Cv)(e);
            case "radiusAxis":
              return (0, nA.Dc)(e, r);
            default:
              return;
          }
        },
        i5 = (0, f.Mz)([nV, i2], nE.I),
        i3 = (0, f.Mz)([nV, iK, iV, i5], iZ);
      function i4(e, t) {
        return e.id < t.id ? -1 : +(e.id > t.id);
      }
      (0, f.Mz)([n2, ib, nS.N], (e, t, r) =>
        e
          .flatMap((e) => t[e.id])
          .filter(Boolean)
          .filter((e) => ir(r, e))
      );
      var i8 = (e, t) => t,
        i6 = (e, t, r) => r,
        i7 = (0, f.Mz)(nO.h, i8, i6, (e, t, r) =>
          e
            .filter((e) => e.orientation === t)
            .filter((e) => e.mirror === r)
            .sort(i4)
        ),
        i9 = (0, f.Mz)(nO.W, i8, i6, (e, t, r) =>
          e
            .filter((e) => e.orientation === t)
            .filter((e) => e.mirror === r)
            .sort(i4)
        ),
        ae = (e, t) => ({ width: e.width, height: t.height }),
        at = (0, f.Mz)(n_.HZ, nB, ae),
        ar = (0, f.Mz)(nw.A$, n_.HZ, i7, i8, i6, (e, t, r, n, i) => {
          var a,
            o = {};
          return (
            r.forEach((r) => {
              var u = ae(t, r);
              null == a &&
                (a = ((e, t, r) => {
                  switch (t) {
                    case "top":
                      return e.top;
                    case "bottom":
                      return r - e.bottom;
                    default:
                      return 0;
                  }
                })(t, n, e));
              var l = ("top" === n && !i) || ("bottom" === n && i);
              ((o[r.id] = a - Number(l) * u.height), (a += (l ? -1 : 1) * u.height));
            }),
            o
          );
        }),
        an = (0, f.Mz)(nw.Lp, n_.HZ, i9, i8, i6, (e, t, r, n, i) => {
          var a,
            o = {};
          return (
            r.forEach((r) => {
              var u = ((e, t) => ({
                width: "number" == typeof t.width ? t.width : nk.tQ,
                height: e.height,
              }))(t, r);
              null == a &&
                (a = ((e, t, r) => {
                  switch (t) {
                    case "left":
                      return e.left;
                    case "right":
                      return r - e.right;
                    default:
                      return 0;
                  }
                })(t, n, e));
              var l = ("left" === n && !i) || ("right" === n && i);
              ((o[r.id] = a - Number(l) * u.width), (a += (l ? -1 : 1) * u.width));
            }),
            o
          );
        }),
        ai = (0, f.Mz)(
          [
            n_.HZ,
            nB,
            (e, t) => {
              var r = nB(e, t);
              if (null != r) return ar(e, r.orientation, r.mirror);
            },
            (e, t) => t,
          ],
          (e, t, r, n) => {
            if (null != t) {
              var i = null == r ? void 0 : r[n];
              return null == i ? { x: e.left, y: 0 } : { x: e.left, y: i };
            }
          }
        ),
        aa = (0, f.Mz)(
          [
            n_.HZ,
            nW,
            (e, t) => {
              var r = nW(e, t);
              if (null != r) return an(e, r.orientation, r.mirror);
            },
            (e, t) => t,
          ],
          (e, t, r, n) => {
            if (null != t) {
              var i = null == r ? void 0 : r[n];
              return null == i ? { x: 0, y: e.top } : { x: i, y: e.top };
            }
          }
        ),
        ao = (0, f.Mz)(n_.HZ, nW, (e, t) => ({
          width: "number" == typeof t.width ? t.width : nk.tQ,
          height: e.height,
        })),
        au = (e, t, r, n) => {
          if (null != r) {
            var { allowDuplicatedCategory: i, type: a, dataKey: o } = r,
              u = (0, ne._L)(e, n),
              l = t.map((e) => e.value);
            if (o && u && "category" === a && i && (0, nn.CG)(l)) return l;
          }
        },
        al = (0, f.Mz)([r9.fz, it, nV, nS.N], au),
        ac = (e, t, r, n) => {
          if (null != r && null != r.dataKey) {
            var { type: i, scale: a } = r;
            if ((0, ne._L)(e, n) && ("number" === i || "auto" !== a)) return t.map((e) => e.value);
          }
        },
        as = (0, f.Mz)([r9.fz, it, nG, nS.N], ac),
        af = (0, f.Mz)(
          [
            r9.fz,
            (e, t, r) => {
              switch (t) {
                case "xAxis":
                  return nB(e, r);
                case "yAxis":
                  return nW(e, r);
                default:
                  throw Error("Unexpected axis type: ".concat(t));
              }
            },
            iK,
            i3,
            al,
            as,
            i2,
            iq,
            nS.N,
          ],
          (e, t, r, n, i, a, o, u, l) => {
            if (null != t) {
              var c = (0, ne._L)(e, l);
              return {
                angle: t.angle,
                interval: t.interval,
                minTickGap: t.minTickGap,
                orientation: t.orientation,
                tick: t.tick,
                tickCount: t.tickCount,
                tickFormatter: t.tickFormatter,
                ticks: t.ticks,
                type: t.type,
                unit: t.unit,
                axisType: l,
                categoricalDomain: a,
                duplicateDomain: i,
                isCategorical: c,
                niceTicks: u,
                range: o,
                realScaleType: r,
                scale: n,
              };
            }
          }
        ),
        ad = (0, f.Mz)([r9.fz, nG, iK, i3, iq, i2, al, as, nS.N], (e, t, r, n, i, a, o, u, l) => {
          if (null != t && null != n) {
            var c = (0, ne._L)(e, l),
              { type: s, ticks: f, tickCount: d } = t,
              h = "scaleBand" === r && "function" == typeof n.bandwidth ? n.bandwidth() / 2 : 2,
              p = "category" === s && n.bandwidth ? n.bandwidth() / h : 0;
            p =
              "angleAxis" === l && null != a && a.length >= 2 ? 2 * (0, nn.sA)(a[0] - a[1]) * p : p;
            var y = f || i;
            return y
              ? y
                  .map((e, t) => ({
                    index: t,
                    coordinate: n(o ? o.indexOf(e) : e) + p,
                    value: e,
                    offset: p,
                  }))
                  .filter((e) => (0, ni.H)(e.coordinate))
              : c && u
                ? u
                    .map((e, t) => ({ coordinate: n(e) + p, value: e, index: t, offset: p }))
                    .filter((e) => (0, ni.H)(e.coordinate))
                : n.ticks
                  ? n.ticks(d).map((e) => ({ coordinate: n(e) + p, value: e, offset: p }))
                  : n.domain().map((e, t) => ({
                      coordinate: n(e) + p,
                      value: o ? o[e] : e,
                      index: t,
                      offset: p,
                    }));
          }
        }),
        ah = (0, f.Mz)([r9.fz, nG, i3, i2, al, as, nS.N], (e, t, r, n, i, a, o) => {
          if (null != t && null != r && null != n && n[0] !== n[1]) {
            var u = (0, ne._L)(e, o),
              { tickCount: l } = t,
              c = 0;
            return ((c =
              "angleAxis" === o && (null == n ? void 0 : n.length) >= 2
                ? 2 * (0, nn.sA)(n[0] - n[1]) * c
                : c),
            u && a)
              ? a.map((e, t) => ({ coordinate: r(e) + c, value: e, index: t, offset: c }))
              : r.ticks
                ? r.ticks(l).map((e) => ({ coordinate: r(e) + c, value: e, offset: c }))
                : r.domain().map((e, t) => ({
                    coordinate: r(e) + c,
                    value: i ? i[e] : e,
                    index: t,
                    offset: c,
                  }));
          }
        }),
        ap = (0, f.Mz)(nV, i3, (e, t) => {
          if (null != e && null != t) return nF(nF({}, e), {}, { scale: t });
        }),
        ay = (0, f.Mz)([nV, iK, iH, i5], iZ);
      (0, f.Mz)(
        (e, t, r) => nY(e, r),
        ay,
        (e, t) => {
          if (null != e && null != t) return nF(nF({}, e), {}, { scale: t });
        }
      );
      var av = (0, f.Mz)([r9.fz, nO.h, nO.W], (e, t, r) => {
        switch (e) {
          case "horizontal":
            return t.some((e) => e.reversed) ? "right-to-left" : "left-to-right";
          case "vertical":
            return r.some((e) => e.reversed) ? "bottom-to-top" : "top-to-bottom";
          case "centric":
          case "radial":
            return "left-to-right";
          default:
            return;
        }
      });
    },
    1213: (e, t, r) => {
      "use strict";
      r.d(t, { Kq: () => h, bN: () => c });
      var n = r(12115);
      r(28138);
      var i = { notify() {}, get: () => [] },
        a =
          "undefined" != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement,
        o = "undefined" != typeof navigator && "ReactNative" === navigator.product,
        u = a || o ? n.useLayoutEffect : n.useEffect;
      function l(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
      }
      function c(e, t) {
        if (l(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        let r = Object.keys(e),
          n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let n = 0; n < r.length; n++)
          if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !l(e[r[n]], t[r[n]])) return !1;
        return !0;
      }
      (Object.getOwnPropertyNames,
        Object.getOwnPropertySymbols,
        Object.getOwnPropertyDescriptor,
        Object.getPrototypeOf,
        Object.prototype);
      var s = Symbol.for("react-redux-context"),
        f = "undefined" != typeof globalThis ? globalThis : {},
        d = (function () {
          if (!n.createContext) return {};
          let e = (f[s] ??= new Map()),
            t = e.get(n.createContext);
          return (t || ((t = n.createContext(null)), e.set(n.createContext, t)), t);
        })(),
        h = function (e) {
          let { children: t, context: r, serverState: a, store: o } = e,
            l = n.useMemo(() => {
              let e = (function (e, t) {
                let r,
                  n = i,
                  a = 0,
                  o = !1;
                function u() {
                  s.onStateChange && s.onStateChange();
                }
                function l() {
                  if ((a++, !r)) {
                    let t, i;
                    ((r = e.subscribe(u)),
                      (t = null),
                      (i = null),
                      (n = {
                        clear() {
                          ((t = null), (i = null));
                        },
                        notify() {
                          let e = t;
                          for (; e; ) (e.callback(), (e = e.next));
                        },
                        get() {
                          let e = [],
                            r = t;
                          for (; r; ) (e.push(r), (r = r.next));
                          return e;
                        },
                        subscribe(e) {
                          let r = !0,
                            n = (i = { callback: e, next: null, prev: i });
                          return (
                            n.prev ? (n.prev.next = n) : (t = n),
                            function () {
                              r &&
                                null !== t &&
                                ((r = !1),
                                n.next ? (n.next.prev = n.prev) : (i = n.prev),
                                n.prev ? (n.prev.next = n.next) : (t = n.next));
                            }
                          );
                        },
                      }));
                  }
                }
                function c() {
                  (a--, r && 0 === a && (r(), (r = void 0), n.clear(), (n = i)));
                }
                let s = {
                  addNestedSub: function (e) {
                    l();
                    let t = n.subscribe(e),
                      r = !1;
                    return () => {
                      r || ((r = !0), t(), c());
                    };
                  },
                  notifyNestedSubs: function () {
                    n.notify();
                  },
                  handleChangeWrapper: u,
                  isSubscribed: function () {
                    return o;
                  },
                  trySubscribe: function () {
                    o || ((o = !0), l());
                  },
                  tryUnsubscribe: function () {
                    o && ((o = !1), c());
                  },
                  getListeners: () => n,
                };
                return s;
              })(o);
              return { store: o, subscription: e, getServerState: a ? () => a : void 0 };
            }, [o, a]),
            c = n.useMemo(() => o.getState(), [o]);
          return (
            u(() => {
              let { subscription: e } = l;
              return (
                (e.onStateChange = e.notifyNestedSubs),
                e.trySubscribe(),
                c !== o.getState() && e.notifyNestedSubs(),
                () => {
                  (e.tryUnsubscribe(), (e.onStateChange = void 0));
                }
              );
            }, [l, c]),
            n.createElement((r || d).Provider, { value: l }, t)
          );
        };
    },
    1322: (e, t) => {
      "use strict";
      function r(e) {
        return "symbol" == typeof e ? 1 : null === e ? 2 : void 0 === e ? 3 : 4 * (e != e);
      }
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.compareValues = (e, t, n) => {
          if (e !== t) {
            let i = r(e),
              a = r(t);
            if (i === a && 0 === i) {
              if (e < t) return "desc" === n ? 1 : -1;
              if (e > t) return "desc" === n ? -1 : 1;
            }
            return "desc" === n ? a - i : i - a;
          }
          return 0;
        }));
    },
    1524: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(71847).A)("trending-up", [
        ["path", { d: "M16 7h6v6", key: "box55l" }],
        ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
      ]);
    },
    2851: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(73255),
        i = r(35163),
        a = r(96288);
      t.sortBy = function (e, ...t) {
        let r = t.length;
        return (
          r > 1 && a.isIterateeCall(e, t[0], t[1])
            ? (t = [])
            : r > 2 && a.isIterateeCall(t[0], t[1], t[2]) && (t = [t[0]]),
          n.orderBy(e, i.flatten(t), ["asc"])
        );
      };
    },
    3838: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => o, v: () => u });
      var n = r(12115),
        i = r(81024),
        a = r(14599),
        o = (0, n.memo)((e) => {
          var t = (0, i.j)(),
            r = (0, n.useRef)(null);
          return (
            (0, n.useLayoutEffect)(() => {
              (null === r.current
                ? t((0, a.g5)(e))
                : r.current !== e && t((0, a.ZF)({ prev: r.current, next: e })),
                (r.current = e));
            }, [t, e]),
            (0, n.useLayoutEffect)(
              () => () => {
                r.current && (t((0, a.Vi)(r.current)), (r.current = null));
              },
              [t]
            ),
            null
          );
        });
      function u(e) {
        var t = (0, i.j)();
        return (
          (0, n.useLayoutEffect)(
            () => (
              t((0, a.As)(e)),
              () => {
                t((0, a.TK)(e));
              }
            ),
            [t, e]
          ),
          null
        );
      }
    },
    4264: (e, t, r) => {
      "use strict";
      r.d(t, { Rw: () => a, Xc: () => o, ic: () => l, uZ: () => u });
      var n = r(12115),
        i = new Set([
          "aria-activedescendant",
          "aria-atomic",
          "aria-autocomplete",
          "aria-busy",
          "aria-checked",
          "aria-colcount",
          "aria-colindex",
          "aria-colspan",
          "aria-controls",
          "aria-current",
          "aria-describedby",
          "aria-details",
          "aria-disabled",
          "aria-errormessage",
          "aria-expanded",
          "aria-flowto",
          "aria-haspopup",
          "aria-hidden",
          "aria-invalid",
          "aria-keyshortcuts",
          "aria-label",
          "aria-labelledby",
          "aria-level",
          "aria-live",
          "aria-modal",
          "aria-multiline",
          "aria-multiselectable",
          "aria-orientation",
          "aria-owns",
          "aria-placeholder",
          "aria-posinset",
          "aria-pressed",
          "aria-readonly",
          "aria-relevant",
          "aria-required",
          "aria-roledescription",
          "aria-rowcount",
          "aria-rowindex",
          "aria-rowspan",
          "aria-selected",
          "aria-setsize",
          "aria-sort",
          "aria-valuemax",
          "aria-valuemin",
          "aria-valuenow",
          "aria-valuetext",
          "className",
          "color",
          "height",
          "id",
          "lang",
          "max",
          "media",
          "method",
          "min",
          "name",
          "style",
          "target",
          "width",
          "role",
          "tabIndex",
          "accentHeight",
          "accumulate",
          "additive",
          "alignmentBaseline",
          "allowReorder",
          "alphabetic",
          "amplitude",
          "arabicForm",
          "ascent",
          "attributeName",
          "attributeType",
          "autoReverse",
          "azimuth",
          "baseFrequency",
          "baselineShift",
          "baseProfile",
          "bbox",
          "begin",
          "bias",
          "by",
          "calcMode",
          "capHeight",
          "clip",
          "clipPath",
          "clipPathUnits",
          "clipRule",
          "colorInterpolation",
          "colorInterpolationFilters",
          "colorProfile",
          "colorRendering",
          "contentScriptType",
          "contentStyleType",
          "cursor",
          "cx",
          "cy",
          "d",
          "decelerate",
          "descent",
          "diffuseConstant",
          "direction",
          "display",
          "divisor",
          "dominantBaseline",
          "dur",
          "dx",
          "dy",
          "edgeMode",
          "elevation",
          "enableBackground",
          "end",
          "exponent",
          "externalResourcesRequired",
          "fill",
          "fillOpacity",
          "fillRule",
          "filter",
          "filterRes",
          "filterUnits",
          "floodColor",
          "floodOpacity",
          "focusable",
          "fontFamily",
          "fontSize",
          "fontSizeAdjust",
          "fontStretch",
          "fontStyle",
          "fontVariant",
          "fontWeight",
          "format",
          "from",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyphName",
          "glyphOrientationHorizontal",
          "glyphOrientationVertical",
          "glyphRef",
          "gradientTransform",
          "gradientUnits",
          "hanging",
          "horizAdvX",
          "horizOriginX",
          "href",
          "ideographic",
          "imageRendering",
          "in2",
          "in",
          "intercept",
          "k1",
          "k2",
          "k3",
          "k4",
          "k",
          "kernelMatrix",
          "kernelUnitLength",
          "kerning",
          "keyPoints",
          "keySplines",
          "keyTimes",
          "lengthAdjust",
          "letterSpacing",
          "lightingColor",
          "limitingConeAngle",
          "local",
          "markerEnd",
          "markerHeight",
          "markerMid",
          "markerStart",
          "markerUnits",
          "markerWidth",
          "mask",
          "maskContentUnits",
          "maskUnits",
          "mathematical",
          "mode",
          "numOctaves",
          "offset",
          "opacity",
          "operator",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "overlinePosition",
          "overlineThickness",
          "paintOrder",
          "panose1",
          "pathLength",
          "patternContentUnits",
          "patternTransform",
          "patternUnits",
          "pointerEvents",
          "pointsAtX",
          "pointsAtY",
          "pointsAtZ",
          "preserveAlpha",
          "preserveAspectRatio",
          "primitiveUnits",
          "r",
          "radius",
          "refX",
          "refY",
          "renderingIntent",
          "repeatCount",
          "repeatDur",
          "requiredExtensions",
          "requiredFeatures",
          "restart",
          "result",
          "rotate",
          "rx",
          "ry",
          "seed",
          "shapeRendering",
          "slope",
          "spacing",
          "specularConstant",
          "specularExponent",
          "speed",
          "spreadMethod",
          "startOffset",
          "stdDeviation",
          "stemh",
          "stemv",
          "stitchTiles",
          "stopColor",
          "stopOpacity",
          "strikethroughPosition",
          "strikethroughThickness",
          "string",
          "stroke",
          "strokeDasharray",
          "strokeDashoffset",
          "strokeLinecap",
          "strokeLinejoin",
          "strokeMiterlimit",
          "strokeOpacity",
          "strokeWidth",
          "surfaceScale",
          "systemLanguage",
          "tableValues",
          "targetX",
          "targetY",
          "textAnchor",
          "textDecoration",
          "textLength",
          "textRendering",
          "to",
          "transform",
          "u1",
          "u2",
          "underlinePosition",
          "underlineThickness",
          "unicode",
          "unicodeBidi",
          "unicodeRange",
          "unitsPerEm",
          "vAlphabetic",
          "values",
          "vectorEffect",
          "version",
          "vertAdvY",
          "vertOriginX",
          "vertOriginY",
          "vHanging",
          "vIdeographic",
          "viewTarget",
          "visibility",
          "vMathematical",
          "widths",
          "wordSpacing",
          "writingMode",
          "x1",
          "x2",
          "x",
          "xChannelSelector",
          "xHeight",
          "xlinkActuate",
          "xlinkArcrole",
          "xlinkHref",
          "xlinkRole",
          "xlinkShow",
          "xlinkTitle",
          "xlinkType",
          "xmlBase",
          "xmlLang",
          "xmlns",
          "xmlnsXlink",
          "xmlSpace",
          "y1",
          "y2",
          "y",
          "yChannelSelector",
          "z",
          "zoomAndPan",
          "ref",
          "key",
          "angle",
        ]);
      function a(e) {
        return "string" == typeof e && i.has(e);
      }
      function o(e) {
        return "string" == typeof e && e.startsWith("data-");
      }
      function u(e) {
        if ("object" != typeof e || null === e) return {};
        var t = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && (a(r) || o(r)) && (t[r] = e[r]);
        return t;
      }
      function l(e) {
        return null == e
          ? null
          : (0, n.isValidElement)(e) && "object" == typeof e.props && null !== e.props
            ? u(e.props)
            : "object" != typeof e || Array.isArray(e)
              ? null
              : u(e);
      }
    },
    7050: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => B });
      var n = r(12115);
      function i() {}
      function a(e, t, r) {
        e._context.bezierCurveTo(
          (2 * e._x0 + e._x1) / 3,
          (2 * e._y0 + e._y1) / 3,
          (e._x0 + 2 * e._x1) / 3,
          (e._y0 + 2 * e._y1) / 3,
          (e._x0 + 4 * e._x1 + t) / 6,
          (e._y0 + 4 * e._y1 + r) / 6
        );
      }
      function o(e) {
        this._context = e;
      }
      function u(e) {
        this._context = e;
      }
      function l(e) {
        this._context = e;
      }
      ((o.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              a(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          ((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line));
        },
        point: function (e, t) {
          switch (((e *= 1), (t *= 1), this._point)) {
            case 0:
              ((this._point = 1),
                this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              ((this._point = 3),
                this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6));
            default:
              a(this, e, t);
          }
          ((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t));
        },
      }),
        (u.prototype = {
          areaStart: i,
          areaEnd: i,
          lineStart: function () {
            ((this._x0 =
              this._x1 =
              this._x2 =
              this._x3 =
              this._x4 =
              this._y0 =
              this._y1 =
              this._y2 =
              this._y3 =
              this._y4 =
                NaN),
              (this._point = 0));
          },
          lineEnd: function () {
            switch (this._point) {
              case 1:
                (this._context.moveTo(this._x2, this._y2), this._context.closePath());
                break;
              case 2:
                (this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3),
                  this._context.lineTo(
                    (this._x3 + 2 * this._x2) / 3,
                    (this._y3 + 2 * this._y2) / 3
                  ),
                  this._context.closePath());
                break;
              case 3:
                (this.point(this._x2, this._y2),
                  this.point(this._x3, this._y3),
                  this.point(this._x4, this._y4));
            }
          },
          point: function (e, t) {
            switch (((e *= 1), (t *= 1), this._point)) {
              case 0:
                ((this._point = 1), (this._x2 = e), (this._y2 = t));
                break;
              case 1:
                ((this._point = 2), (this._x3 = e), (this._y3 = t));
                break;
              case 2:
                ((this._point = 3),
                  (this._x4 = e),
                  (this._y4 = t),
                  this._context.moveTo(
                    (this._x0 + 4 * this._x1 + e) / 6,
                    (this._y0 + 4 * this._y1 + t) / 6
                  ));
                break;
              default:
                a(this, e, t);
            }
            ((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t));
          },
        }),
        (l.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            ((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0));
          },
          lineEnd: function () {
            ((this._line || (0 !== this._line && 3 === this._point)) && this._context.closePath(),
              (this._line = 1 - this._line));
          },
          point: function (e, t) {
            switch (((e *= 1), (t *= 1), this._point)) {
              case 0:
                this._point = 1;
                break;
              case 1:
                this._point = 2;
                break;
              case 2:
                this._point = 3;
                var r = (this._x0 + 4 * this._x1 + e) / 6,
                  n = (this._y0 + 4 * this._y1 + t) / 6;
                this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
                break;
              case 3:
                this._point = 4;
              default:
                a(this, e, t);
            }
            ((this._x0 = this._x1), (this._x1 = e), (this._y0 = this._y1), (this._y1 = t));
          },
        }));
      class c {
        constructor(e, t) {
          ((this._context = e), (this._x = t));
        }
        areaStart() {
          this._line = 0;
        }
        areaEnd() {
          this._line = NaN;
        }
        lineStart() {
          this._point = 0;
        }
        lineEnd() {
          ((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line));
        }
        point(e, t) {
          switch (((e *= 1), (t *= 1), this._point)) {
            case 0:
              ((this._point = 1),
                this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
              break;
            case 1:
              this._point = 2;
            default:
              this._x
                ? this._context.bezierCurveTo(
                    (this._x0 = (this._x0 + e) / 2),
                    this._y0,
                    this._x0,
                    t,
                    e,
                    t
                  )
                : this._context.bezierCurveTo(
                    this._x0,
                    (this._y0 = (this._y0 + t) / 2),
                    e,
                    this._y0,
                    e,
                    t
                  );
          }
          ((this._x0 = e), (this._y0 = t));
        }
      }
      function s(e) {
        this._context = e;
      }
      function f(e) {
        this._context = e;
      }
      function d(e) {
        return new f(e);
      }
      s.prototype = {
        areaStart: i,
        areaEnd: i,
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          this._point && this._context.closePath();
        },
        point: function (e, t) {
          ((e *= 1),
            (t *= 1),
            this._point
              ? this._context.lineTo(e, t)
              : ((this._point = 1), this._context.moveTo(e, t)));
        },
      };
      function h(e, t, r) {
        var n = e._x1 - e._x0,
          i = t - e._x1,
          a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
          o = (r - e._y1) / (i || (n < 0 && -0));
        return (
          ((a < 0 ? -1 : 1) + (o < 0 ? -1 : 1)) *
            Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs((a * i + o * n) / (n + i))) || 0
        );
      }
      function p(e, t) {
        var r = e._x1 - e._x0;
        return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
      }
      function y(e, t, r) {
        var n = e._x0,
          i = e._y0,
          a = e._x1,
          o = e._y1,
          u = (a - n) / 3;
        e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
      }
      function v(e) {
        this._context = e;
      }
      function g(e) {
        this._context = new m(e);
      }
      function m(e) {
        this._context = e;
      }
      function b(e) {
        this._context = e;
      }
      function x(e) {
        var t,
          r,
          n = e.length - 1,
          i = Array(n),
          a = Array(n),
          o = Array(n);
        for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
          ((i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]));
        for (i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1; t < n; ++t)
          ((r = i[t] / a[t - 1]), (a[t] -= r), (o[t] -= r * o[t - 1]));
        for (i[n - 1] = o[n - 1] / a[n - 1], t = n - 2; t >= 0; --t)
          i[t] = (o[t] - i[t + 1]) / a[t];
        for (t = 0, a[n - 1] = (e[n] + i[n - 1]) / 2; t < n - 1; ++t)
          a[t] = 2 * e[t + 1] - i[t + 1];
        return [i, a];
      }
      function w(e, t) {
        ((this._context = e), (this._t = t));
      }
      ((f.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          ((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
            (this._line = 1 - this._line));
        },
        point: function (e, t) {
          switch (((e *= 1), (t *= 1), this._point)) {
            case 0:
              ((this._point = 1),
                this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(e, t);
          }
        },
      }),
        (v.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            ((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN), (this._point = 0));
          },
          lineEnd: function () {
            switch (this._point) {
              case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
              case 3:
                y(this, this._t0, p(this, this._t0));
            }
            ((this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
              (this._line = 1 - this._line));
          },
          point: function (e, t) {
            var r = NaN;
            if (((t *= 1), (e *= 1) !== this._x1 || t !== this._y1)) {
              switch (this._point) {
                case 0:
                  ((this._point = 1),
                    this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
                  break;
                case 1:
                  this._point = 2;
                  break;
                case 2:
                  ((this._point = 3), y(this, p(this, (r = h(this, e, t))), r));
                  break;
                default:
                  y(this, this._t0, (r = h(this, e, t)));
              }
              ((this._x0 = this._x1),
                (this._x1 = e),
                (this._y0 = this._y1),
                (this._y1 = t),
                (this._t0 = r));
            }
          },
        }),
        ((g.prototype = Object.create(v.prototype)).point = function (e, t) {
          v.prototype.point.call(this, t, e);
        }),
        (m.prototype = {
          moveTo: function (e, t) {
            this._context.moveTo(t, e);
          },
          closePath: function () {
            this._context.closePath();
          },
          lineTo: function (e, t) {
            this._context.lineTo(t, e);
          },
          bezierCurveTo: function (e, t, r, n, i, a) {
            this._context.bezierCurveTo(t, e, n, r, a, i);
          },
        }),
        (b.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            ((this._x = []), (this._y = []));
          },
          lineEnd: function () {
            var e = this._x,
              t = this._y,
              r = e.length;
            if (r)
              if (
                (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]),
                2 === r)
              )
                this._context.lineTo(e[1], t[1]);
              else
                for (var n = x(e), i = x(t), a = 0, o = 1; o < r; ++a, ++o)
                  this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
            ((this._line || (0 !== this._line && 1 === r)) && this._context.closePath(),
              (this._line = 1 - this._line),
              (this._x = this._y = null));
          },
          point: function (e, t) {
            (this._x.push(+e), this._y.push(+t));
          },
        }),
        (w.prototype = {
          areaStart: function () {
            this._line = 0;
          },
          areaEnd: function () {
            this._line = NaN;
          },
          lineStart: function () {
            ((this._x = this._y = NaN), (this._point = 0));
          },
          lineEnd: function () {
            (0 < this._t &&
              this._t < 1 &&
              2 === this._point &&
              this._context.lineTo(this._x, this._y),
              (this._line || (0 !== this._line && 1 === this._point)) && this._context.closePath(),
              this._line >= 0 && ((this._t = 1 - this._t), (this._line = 1 - this._line)));
          },
          point: function (e, t) {
            switch (((e *= 1), (t *= 1), this._point)) {
              case 0:
                ((this._point = 1),
                  this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t));
                break;
              case 1:
                this._point = 2;
              default:
                if (this._t <= 0) (this._context.lineTo(this._x, t), this._context.lineTo(e, t));
                else {
                  var r = this._x * (1 - this._t) + e * this._t;
                  (this._context.lineTo(r, this._y), this._context.lineTo(r, t));
                }
            }
            ((this._x = e), (this._y = t));
          },
        }));
      var O = r(27012),
        _ = r(73595),
        M = r(89569);
      function j(e) {
        return e[0];
      }
      function A(e) {
        return e[1];
      }
      function S(e, t) {
        var r = (0, _.A)(!0),
          n = null,
          i = d,
          a = null,
          o = (0, M.i)(u);
        function u(u) {
          var l,
            c,
            s,
            f = (u = (0, O.A)(u)).length,
            d = !1;
          for (null == n && (a = i((s = o()))), l = 0; l <= f; ++l)
            (!(l < f && r((c = u[l]), l, u)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()),
              d && a.point(+e(c, l, u), +t(c, l, u)));
          if (s) return ((a = null), s + "" || null);
        }
        return (
          (e = "function" == typeof e ? e : void 0 === e ? j : (0, _.A)(e)),
          (t = "function" == typeof t ? t : void 0 === t ? A : (0, _.A)(t)),
          (u.x = function (t) {
            return arguments.length ? ((e = "function" == typeof t ? t : (0, _.A)(+t)), u) : e;
          }),
          (u.y = function (e) {
            return arguments.length ? ((t = "function" == typeof e ? e : (0, _.A)(+e)), u) : t;
          }),
          (u.defined = function (e) {
            return arguments.length ? ((r = "function" == typeof e ? e : (0, _.A)(!!e)), u) : r;
          }),
          (u.curve = function (e) {
            return arguments.length ? ((i = e), null != n && (a = i(n)), u) : i;
          }),
          (u.context = function (e) {
            return arguments.length ? (null == e ? (n = a = null) : (a = i((n = e))), u) : n;
          }),
          u
        );
      }
      function P(e, t, r) {
        var n = null,
          i = (0, _.A)(!0),
          a = null,
          o = d,
          u = null,
          l = (0, M.i)(c);
        function c(c) {
          var s,
            f,
            d,
            h,
            p,
            y = (c = (0, O.A)(c)).length,
            v = !1,
            g = Array(y),
            m = Array(y);
          for (null == a && (u = o((p = l()))), s = 0; s <= y; ++s) {
            if (!(s < y && i((h = c[s]), s, c)) === v)
              if ((v = !v)) ((f = s), u.areaStart(), u.lineStart());
              else {
                for (u.lineEnd(), u.lineStart(), d = s - 1; d >= f; --d) u.point(g[d], m[d]);
                (u.lineEnd(), u.areaEnd());
              }
            v &&
              ((g[s] = +e(h, s, c)),
              (m[s] = +t(h, s, c)),
              u.point(n ? +n(h, s, c) : g[s], r ? +r(h, s, c) : m[s]));
          }
          if (p) return ((u = null), p + "" || null);
        }
        function s() {
          return S().defined(i).curve(o).context(a);
        }
        return (
          (e = "function" == typeof e ? e : void 0 === e ? j : (0, _.A)(+e)),
          (t = "function" == typeof t ? t : void 0 === t ? (0, _.A)(0) : (0, _.A)(+t)),
          (r = "function" == typeof r ? r : void 0 === r ? A : (0, _.A)(+r)),
          (c.x = function (t) {
            return arguments.length
              ? ((e = "function" == typeof t ? t : (0, _.A)(+t)), (n = null), c)
              : e;
          }),
          (c.x0 = function (t) {
            return arguments.length ? ((e = "function" == typeof t ? t : (0, _.A)(+t)), c) : e;
          }),
          (c.x1 = function (e) {
            return arguments.length
              ? ((n = null == e ? null : "function" == typeof e ? e : (0, _.A)(+e)), c)
              : n;
          }),
          (c.y = function (e) {
            return arguments.length
              ? ((t = "function" == typeof e ? e : (0, _.A)(+e)), (r = null), c)
              : t;
          }),
          (c.y0 = function (e) {
            return arguments.length ? ((t = "function" == typeof e ? e : (0, _.A)(+e)), c) : t;
          }),
          (c.y1 = function (e) {
            return arguments.length
              ? ((r = null == e ? null : "function" == typeof e ? e : (0, _.A)(+e)), c)
              : r;
          }),
          (c.lineX0 = c.lineY0 =
            function () {
              return s().x(e).y(t);
            }),
          (c.lineY1 = function () {
            return s().x(e).y(r);
          }),
          (c.lineX1 = function () {
            return s().x(n).y(t);
          }),
          (c.defined = function (e) {
            return arguments.length ? ((i = "function" == typeof e ? e : (0, _.A)(!!e)), c) : i;
          }),
          (c.curve = function (e) {
            return arguments.length ? ((o = e), null != a && (u = o(a)), c) : o;
          }),
          (c.context = function (e) {
            return arguments.length ? (null == e ? (a = u = null) : (u = o((a = e))), c) : a;
          }),
          c
        );
      }
      var E = r(2821),
        k = r(84072),
        C = r(49580),
        T = r(92377),
        D = r(4264),
        N = r(90167);
      function I() {
        return (I = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function z(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? z(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : z(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var R = {
          curveBasisClosed: function (e) {
            return new u(e);
          },
          curveBasisOpen: function (e) {
            return new l(e);
          },
          curveBasis: function (e) {
            return new o(e);
          },
          curveBumpX: function (e) {
            return new c(e, !0);
          },
          curveBumpY: function (e) {
            return new c(e, !1);
          },
          curveLinearClosed: function (e) {
            return new s(e);
          },
          curveLinear: d,
          curveMonotoneX: function (e) {
            return new v(e);
          },
          curveMonotoneY: function (e) {
            return new g(e);
          },
          curveNatural: function (e) {
            return new b(e);
          },
          curveStep: function (e) {
            return new w(e, 0.5);
          },
          curveStepAfter: function (e) {
            return new w(e, 1);
          },
          curveStepBefore: function (e) {
            return new w(e, 0);
          },
        },
        F = (e) => (0, T.H)(e.x) && (0, T.H)(e.y),
        $ = (e) => null != e.base && F(e.base) && F(e),
        U = (e) => e.x,
        H = (e) => e.y,
        B = (e) => {
          var { className: t, points: r, path: i, pathRef: a } = e,
            o = (0, N.WX)();
          if ((!r || !r.length) && !i) return null;
          var u = {
              type: e.type,
              points: e.points,
              baseLine: e.baseLine,
              layout: e.layout || o,
              connectNulls: e.connectNulls,
            },
            l =
              r && r.length
                ? ((e) => {
                    var {
                        type: t = "linear",
                        points: r = [],
                        baseLine: n,
                        layout: i,
                        connectNulls: a = !1,
                      } = e,
                      o = ((e, t) => {
                        if ("function" == typeof e) return e;
                        var r = "curve".concat((0, C.Zb)(e));
                        return ("curveMonotone" === r || "curveBump" === r) && t
                          ? R["".concat(r).concat("vertical" === t ? "Y" : "X")]
                          : R[r] || d;
                      })(t, i),
                      u = a ? r.filter(F) : r;
                    if (Array.isArray(n)) {
                      var l = r.map((e, t) => L(L({}, e), {}, { base: n[t] }));
                      return (
                        "vertical" === i
                          ? P()
                              .y(H)
                              .x1(U)
                              .x0((e) => e.base.x)
                          : P()
                              .x(U)
                              .y1(H)
                              .y0((e) => e.base.y)
                      )
                        .defined($)
                        .curve(o)(a ? l.filter($) : l);
                    }
                    return (
                      "vertical" === i && (0, C.Et)(n)
                        ? P().y(H).x1(U).x0(n)
                        : (0, C.Et)(n)
                          ? P().x(U).y1(H).y0(n)
                          : S().x(U).y(H)
                    )
                      .defined(F)
                      .curve(o)(u);
                  })(u)
                : i;
          return n.createElement(
            "path",
            I({}, (0, D.uZ)(e), (0, k._U)(e), {
              className: (0, E.$)("recharts-curve", t),
              d: null === l ? void 0 : l,
              ref: a,
            })
          );
        };
    },
    8291: (e, t, r) => {
      "use strict";
      r.d(t, { Ds: () => d, HZ: () => f, c2: () => h });
      var n = r(76069),
        i = r(91640),
        a = r(51023),
        o = r(27588),
        u = r(49507),
        l = r(34264);
      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : c(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var f = (0, n.Mz)(
          [
            o.Lp,
            o.A$,
            o.HK,
            (e) => e.brush.height,
            function (e) {
              return (0, u.W)(e).reduce(
                (e, t) =>
                  "left" !== t.orientation || t.mirror || t.hide
                    ? e
                    : e + ("number" == typeof t.width ? t.width : l.tQ),
                0
              );
            },
            function (e) {
              return (0, u.W)(e).reduce(
                (e, t) =>
                  "right" !== t.orientation || t.mirror || t.hide
                    ? e
                    : e + ("number" == typeof t.width ? t.width : l.tQ),
                0
              );
            },
            function (e) {
              return (0, u.h)(e).reduce(
                (e, t) => ("top" !== t.orientation || t.mirror || t.hide ? e : e + t.height),
                0
              );
            },
            function (e) {
              return (0, u.h)(e).reduce(
                (e, t) => ("bottom" !== t.orientation || t.mirror || t.hide ? e : e + t.height),
                0
              );
            },
            i.ff,
            i.dc,
          ],
          (e, t, r, n, i, o, u, l, c, f) => {
            var d = { left: (r.left || 0) + i, right: (r.right || 0) + o },
              h = s(s({}, { top: (r.top || 0) + u, bottom: (r.bottom || 0) + l }), d),
              p = h.bottom;
            h.bottom += n;
            var y = e - (h = (0, a.s0)(h, c, f)).left - h.right,
              v = t - h.top - h.bottom;
            return s(
              s({ brushBottom: p }, h),
              {},
              { width: Math.max(y, 0), height: Math.max(v, 0) }
            );
          }
        ),
        d = (0, n.Mz)(f, (e) => ({ x: e.left, y: e.top, width: e.width, height: e.height })),
        h = (0, n.Mz)(o.Lp, o.A$, (e, t) => ({ x: 0, y: 0, width: e, height: t }));
    },
    8828: (e, t, r) => {
      "use strict";
      e.exports = r(83654);
    },
    8829: (e, t, r) => {
      "use strict";
      r.d(t, { M: () => C });
      var n,
        i,
        a,
        o,
        u,
        l,
        c,
        s,
        f,
        d,
        h = r(12115),
        p = r(2821),
        y = r(85224),
        v = r(12520),
        g = r(49580),
        m = r(94913),
        b = r(43597),
        x = r(55730),
        w = r(33597),
        O = ["radius"],
        _ = ["radius"];
      function M(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? M(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : M(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function A() {
        return (A = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function S(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r = {};
            for (var n in e)
              if ({}.hasOwnProperty.call(e, n)) {
                if (-1 !== t.indexOf(n)) continue;
                r[n] = e[n];
              }
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            ((r = a[n]),
              -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function P(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
        );
      }
      var E = (e, t, r, h, p) => {
          var y,
            v = (0, w.L)(r),
            g = (0, w.L)(h),
            m = Math.min(Math.abs(v) / 2, Math.abs(g) / 2),
            b = g >= 0 ? 1 : -1,
            x = v >= 0 ? 1 : -1,
            O = +((g >= 0 && v >= 0) || (g < 0 && v < 0));
          if (m > 0 && p instanceof Array) {
            for (var _ = [0, 0, 0, 0], M = 0; M < 4; M++) _[M] = p[M] > m ? m : p[M];
            ((y = (0, w.Y)(n || (n = P(["M", ",", ""])), e, t + b * _[0])),
              _[0] > 0 &&
                (y += (0, w.Y)(
                  i || (i = P(["A ", ",", ",0,0,", ",", ",", ""])),
                  _[0],
                  _[0],
                  O,
                  e + x * _[0],
                  t
                )),
              (y += (0, w.Y)(a || (a = P(["L ", ",", ""])), e + r - x * _[1], t)),
              _[1] > 0 &&
                (y += (0, w.Y)(
                  o || (o = P(["A ", ",", ",0,0,", ",\n        ", ",", ""])),
                  _[1],
                  _[1],
                  O,
                  e + r,
                  t + b * _[1]
                )),
              (y += (0, w.Y)(u || (u = P(["L ", ",", ""])), e + r, t + h - b * _[2])),
              _[2] > 0 &&
                (y += (0, w.Y)(
                  l || (l = P(["A ", ",", ",0,0,", ",\n        ", ",", ""])),
                  _[2],
                  _[2],
                  O,
                  e + r - x * _[2],
                  t + h
                )),
              (y += (0, w.Y)(c || (c = P(["L ", ",", ""])), e + x * _[3], t + h)),
              _[3] > 0 &&
                (y += (0, w.Y)(
                  s || (s = P(["A ", ",", ",0,0,", ",\n        ", ",", ""])),
                  _[3],
                  _[3],
                  O,
                  e,
                  t + h - b * _[3]
                )),
              (y += "Z"));
          } else if (m > 0 && p === +p && p > 0) {
            var j = Math.min(m, p);
            y = (0, w.Y)(
              f ||
                (f = P([
                  "M ",
                  ",",
                  "\n            A ",
                  ",",
                  ",0,0,",
                  ",",
                  ",",
                  "\n            L ",
                  ",",
                  "\n            A ",
                  ",",
                  ",0,0,",
                  ",",
                  ",",
                  "\n            L ",
                  ",",
                  "\n            A ",
                  ",",
                  ",0,0,",
                  ",",
                  ",",
                  "\n            L ",
                  ",",
                  "\n            A ",
                  ",",
                  ",0,0,",
                  ",",
                  ",",
                  " Z",
                ])),
              e,
              t + b * j,
              j,
              j,
              O,
              e + x * j,
              t,
              e + r - x * j,
              t,
              j,
              j,
              O,
              e + r,
              t + b * j,
              e + r,
              t + h - b * j,
              j,
              j,
              O,
              e + r - x * j,
              t + h,
              e + x * j,
              t + h,
              j,
              j,
              O,
              e,
              t + h - b * j
            );
          } else y = (0, w.Y)(d || (d = P(["M ", ",", " h ", " v ", " h ", " Z"])), e, t, r, h, -r);
          return y;
        },
        k = {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          radius: 0,
          isAnimationActive: !1,
          isUpdateAnimationActive: !1,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        },
        C = (e) => {
          var t = (0, y.e)(e, k),
            r = (0, h.useRef)(null),
            [n, i] = (0, h.useState)(-1);
          (0, h.useEffect)(() => {
            if (r.current && r.current.getTotalLength)
              try {
                var e = r.current.getTotalLength();
                e && i(e);
              } catch (e) {}
          }, []);
          var { x: a, y: o, width: u, height: l, radius: c, className: s } = t,
            {
              animationEasing: f,
              animationDuration: d,
              animationBegin: M,
              isAnimationActive: P,
              isUpdateAnimationActive: C,
            } = t,
            T = (0, h.useRef)(u),
            D = (0, h.useRef)(l),
            N = (0, h.useRef)(a),
            I = (0, h.useRef)(o),
            z = (0, h.useMemo)(
              () => ({ x: a, y: o, width: u, height: l, radius: c }),
              [a, o, u, l, c]
            ),
            L = (0, m.n)(z, "rectangle-");
          if (a !== +a || o !== +o || u !== +u || l !== +l || 0 === u || 0 === l) return null;
          var R = (0, p.$)("recharts-rectangle", s);
          if (!C) {
            var F = (0, x.a)(t),
              { radius: $ } = F,
              U = S(F, O);
            return h.createElement(
              "path",
              A({}, U, {
                x: (0, w.L)(a),
                y: (0, w.L)(o),
                width: (0, w.L)(u),
                height: (0, w.L)(l),
                radius: "number" == typeof c ? c : void 0,
                className: R,
                d: E(a, o, u, l, c),
              })
            );
          }
          var H = T.current,
            B = D.current,
            K = N.current,
            Z = I.current,
            W = "0px ".concat(-1 === n ? 1 : n, "px"),
            q = "".concat(n, "px 0px"),
            Y = (0, b.dl)(["strokeDasharray"], d, "string" == typeof f ? f : k.animationEasing);
          return h.createElement(
            v.J,
            {
              animationId: L,
              key: L,
              canBegin: n > 0,
              duration: d,
              easing: f,
              isActive: C,
              begin: M,
            },
            (e) => {
              var n,
                i = (0, g.GW)(H, u, e),
                s = (0, g.GW)(B, l, e),
                f = (0, g.GW)(K, a, e),
                d = (0, g.GW)(Z, o, e);
              (r.current && ((T.current = i), (D.current = s), (N.current = f), (I.current = d)),
                (n = P
                  ? e > 0
                    ? { transition: Y, strokeDasharray: q }
                    : { strokeDasharray: W }
                  : { strokeDasharray: q }));
              var p = (0, x.a)(t),
                { radius: y } = p,
                v = S(p, _);
              return h.createElement(
                "path",
                A({}, v, {
                  radius: "number" == typeof c ? c : void 0,
                  className: R,
                  d: E(f, d, i, s, c),
                  ref: r,
                  style: j(j({}, n), t.style),
                })
              );
            }
          );
        };
    },
    9220: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.argumentsTag = "[object Arguments]"),
        (t.arrayBufferTag = "[object ArrayBuffer]"),
        (t.arrayTag = "[object Array]"),
        (t.bigInt64ArrayTag = "[object BigInt64Array]"),
        (t.bigUint64ArrayTag = "[object BigUint64Array]"),
        (t.booleanTag = "[object Boolean]"),
        (t.dataViewTag = "[object DataView]"),
        (t.dateTag = "[object Date]"),
        (t.errorTag = "[object Error]"),
        (t.float32ArrayTag = "[object Float32Array]"),
        (t.float64ArrayTag = "[object Float64Array]"),
        (t.functionTag = "[object Function]"),
        (t.int16ArrayTag = "[object Int16Array]"),
        (t.int32ArrayTag = "[object Int32Array]"),
        (t.int8ArrayTag = "[object Int8Array]"),
        (t.mapTag = "[object Map]"),
        (t.numberTag = "[object Number]"),
        (t.objectTag = "[object Object]"),
        (t.regexpTag = "[object RegExp]"),
        (t.setTag = "[object Set]"),
        (t.stringTag = "[object String]"),
        (t.symbolTag = "[object Symbol]"),
        (t.uint16ArrayTag = "[object Uint16Array]"),
        (t.uint32ArrayTag = "[object Uint32Array]"),
        (t.uint8ArrayTag = "[object Uint8Array]"),
        (t.uint8ClampedArrayTag = "[object Uint8ClampedArray]"));
    },
    12474: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(13869);
      t.debounce = function (e, t = 0, r = {}) {
        let i;
        "object" != typeof r && (r = {});
        let { leading: a = !1, trailing: o = !0, maxWait: u } = r,
          l = [, ,];
        (a && (l[0] = "leading"), o && (l[1] = "trailing"));
        let c = null,
          s = n.debounce(
            function (...t) {
              ((i = e.apply(this, t)), (c = null));
            },
            t,
            { edges: l }
          ),
          f = function (...t) {
            return null != u && (null === c && (c = Date.now()), Date.now() - c >= u)
              ? ((i = e.apply(this, t)), (c = Date.now()), s.cancel(), s.schedule(), i)
              : (s.apply(this, t), i);
          };
        return ((f.cancel = s.cancel), (f.flush = () => (s.flush(), i)), f);
      };
    },
    12520: (e, t, r) => {
      "use strict";
      r.d(t, { J: () => M });
      var n = r(12115),
        i = r(49580),
        a = r(85224),
        o = r(43597);
      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : u(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var c = (e, t, r) => e + (t - e) * r,
        s = (e) => {
          var { from: t, to: r } = e;
          return t !== r;
        },
        f = (e, t, r) => {
          var n = (0, o.s8)((t, r) => {
            if (s(r)) {
              var [n, i] = e(r.from, r.to, r.velocity);
              return l(l({}, r), {}, { from: n, velocity: i });
            }
            return r;
          }, t);
          return r < 1
            ? (0, o.s8)(
                (e, t) =>
                  s(t) && null != n[e]
                    ? l(
                        l({}, t),
                        {},
                        { velocity: c(t.velocity, n[e].velocity, r), from: c(t.from, n[e].from, r) }
                      )
                    : t,
                t
              )
            : f(e, n, r - 1);
        },
        d = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
        h = (e, t) => e.map((e, r) => e * t ** r).reduce((e, t) => e + t),
        p = (e, t) => (r) => h(d(e, t), r),
        y = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          if (1 === t.length)
            switch (t[0]) {
              case "linear":
                return [0, 0, 1, 1];
              case "ease":
                return [0.25, 0.1, 0.25, 1];
              case "ease-in":
                return [0.42, 0, 1, 1];
              case "ease-out":
                return [0.42, 0, 0.58, 1];
              case "ease-in-out":
                return [0, 0, 0.58, 1];
              default:
                var n = ((e) => {
                  var t,
                    r = e.split("(");
                  if (2 !== r.length || "cubic-bezier" !== r[0]) return null;
                  var n =
                    null == (t = r[1]) || null == (t = t.split(")")[0]) ? void 0 : t.split(",");
                  if (null == n || 4 !== n.length) return null;
                  var i = n.map((e) => parseFloat(e));
                  return [i[0], i[1], i[2], i[3]];
                })(t[0]);
                if (n) return n;
            }
          return 4 === t.length ? t : [0, 0, 1, 1];
        },
        v = function () {
          return ((e, t, r, n) => {
            var i = p(e, r),
              a = p(t, n),
              o = (t) =>
                h(
                  [
                    ...d(e, r)
                      .map((e, t) => e * t)
                      .slice(1),
                    0,
                  ],
                  t
                ),
              u = (e) => (e > 1 ? 1 : e < 0 ? 0 : e),
              l = (e) => {
                for (var t = e > 1 ? 1 : e, r = t, n = 0; n < 8; ++n) {
                  var l = i(r) - t,
                    c = o(r);
                  if (1e-4 > Math.abs(l - t) || c < 1e-4) break;
                  r = u(r - l / c);
                }
                return a(r);
              };
            return ((l.isStepper = !1), l);
          })(...y(...arguments));
        },
        g = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            { stiff: t = 100, damping: r = 8, dt: n = 17 } = e,
            i = (e, i, a) => {
              var o = a + ((-(e - i) * t - a * r) * n) / 1e3,
                u = (a * n) / 1e3 + e;
              return 1e-4 > Math.abs(u - i) && 1e-4 > Math.abs(o) ? [i, 0] : [u, o];
            };
          return ((i.isStepper = !0), (i.dt = n), i);
        };
      class m {
        setTimeout(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            r = performance.now(),
            n = null,
            i = (a) => {
              a - r >= t
                ? e(a)
                : "function" == typeof requestAnimationFrame && (n = requestAnimationFrame(i));
            };
          return (
            (n = requestAnimationFrame(i)),
            () => {
              null != n && cancelAnimationFrame(n);
            }
          );
        }
      }
      var b = (0, n.createContext)(function () {
          var e, t, r, n, i;
          return (
            (e = new m()),
            (t = () => null),
            (r = !1),
            (n = null),
            (i = (a) => {
              if (!r) {
                if (Array.isArray(a)) {
                  if (!a.length) return;
                  var [o, ...u] = a;
                  if ("number" == typeof o) {
                    n = e.setTimeout(i.bind(null, u), o);
                    return;
                  }
                  (i(o), (n = e.setTimeout(i.bind(null, u))));
                  return;
                }
                ("string" == typeof a && t(a),
                  "object" == typeof a && t(a),
                  "function" == typeof a && a());
              }
            }),
            {
              stop: () => {
                r = !0;
              },
              start: (e) => {
                ((r = !1), n && (n(), (n = null)), i(e));
              },
              subscribe: (e) => (
                (t = e),
                () => {
                  t = () => null;
                }
              ),
              getTimeoutController: () => e,
            }
          );
        }),
        x = r(33692),
        w = {
          begin: 0,
          duration: 1e3,
          easing: "ease",
          isActive: !0,
          canBegin: !0,
          onAnimationEnd: () => {},
          onAnimationStart: () => {},
        },
        O = { t: 0 },
        _ = { t: 1 };
      function M(e) {
        var t,
          r,
          u,
          d = (0, a.e)(e, w),
          {
            isActive: h,
            canBegin: p,
            duration: y,
            easing: m,
            begin: M,
            onAnimationEnd: j,
            onAnimationStart: A,
            children: S,
          } = d,
          P = "auto" === h ? !x.m.isSsr : h,
          E =
            ((t = d.animationId),
            (r = d.animationManager),
            (u = (0, n.useContext)(b)),
            (0, n.useMemo)(() => (null != r ? r : u(t)), [t, r, u])),
          [k, C] = (0, n.useState)(P ? O : _),
          T = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            P || C(_);
          }, [P]),
          (0, n.useEffect)(() => {
            if (!P || !p) return i.lQ;
            var e,
              t,
              r,
              n,
              a,
              u,
              d,
              h,
              b,
              x,
              w,
              S,
              k,
              D,
              N,
              I,
              z,
              L,
              R,
              F,
              $,
              U,
              H,
              B,
              K =
                ((U = ((e) => {
                  if ("string" == typeof e)
                    switch (e) {
                      case "ease":
                      case "ease-in-out":
                      case "ease-out":
                      case "ease-in":
                      case "linear":
                        return v(e);
                      case "spring":
                        return g();
                      default:
                        if ("cubic-bezier" === e.split("(")[0]) return v(e);
                    }
                  return "function" == typeof e ? e : null;
                })(m)),
                (H = E.getTimeoutController()),
                (B = (0, o.mP)(O, _)),
                null == U
                  ? () => (C(l(l({}, O), _)), () => {})
                  : !0 === U.isStepper
                    ? ((e = O),
                      (t = _),
                      (r = U),
                      (n = B),
                      (a = C),
                      (u = H),
                      (h = n.reduce(
                        (r, n) => l(l({}, r), {}, { [n]: { from: e[n], velocity: 0, to: t[n] } }),
                        {}
                      )),
                      (b = null),
                      (x = (n) => {
                        d || (d = n);
                        var i = (n - d) / r.dt;
                        ((h = f(r, h, i)),
                          a(
                            l(
                              l(l({}, e), t),
                              (0, o.s8)((e, t) => t.from, h)
                            )
                          ),
                          (d = n),
                          Object.values(h).filter(s).length && (b = u.setTimeout(x)));
                      }),
                      () => (
                        (b = u.setTimeout(x)),
                        () => {
                          var e;
                          null == (e = b) || e();
                        }
                      ))
                    : ((w = O),
                      (S = _),
                      (k = U),
                      (D = y),
                      (N = B),
                      (I = C),
                      (z = H),
                      (R = null),
                      (F = N.reduce((e, t) => {
                        var r = w[t],
                          n = S[t];
                        return null == r || null == n ? e : l(l({}, e), {}, { [t]: [r, n] });
                      }, {})),
                      ($ = (e) => {
                        L || (L = e);
                        var t = (e - L) / D,
                          r = (0, o.s8)((e, r) => c(...r, k(t)), F);
                        if ((I(l(l(l({}, w), S), r)), t < 1)) R = z.setTimeout($);
                        else {
                          var n = (0, o.s8)((e, t) => c(...t, k(1)), F);
                          I(l(l(l({}, w), S), n));
                        }
                      }),
                      () => (
                        (R = z.setTimeout($)),
                        () => {
                          var e;
                          null == (e = R) || e();
                        }
                      )));
            return (
              E.start([
                A,
                M,
                () => {
                  T.current = K();
                },
                y,
                j,
              ]),
              () => {
                (E.stop(), T.current && T.current(), j());
              }
            );
          }, [P, p, y, m, M, A, j, E]),
          S(k.t)
        );
      }
    },
    12974: (e, t, r) => {
      "use strict";
      var n = r(81029).Buffer;
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let i = r(16940),
        a = r(32333),
        o = r(9220),
        u = r(87744),
        l = r(73390);
      function c(e, t, r, i = new Map(), f) {
        let d = f?.(e, t, r, i);
        if (void 0 !== d) return d;
        if (u.isPrimitive(e)) return e;
        if (i.has(e)) return i.get(e);
        if (Array.isArray(e)) {
          let t = Array(e.length);
          i.set(e, t);
          for (let n = 0; n < e.length; n++) t[n] = c(e[n], n, r, i, f);
          return (
            Object.hasOwn(e, "index") && (t.index = e.index),
            Object.hasOwn(e, "input") && (t.input = e.input),
            t
          );
        }
        if (e instanceof Date) return new Date(e.getTime());
        if (e instanceof RegExp) {
          let t = new RegExp(e.source, e.flags);
          return ((t.lastIndex = e.lastIndex), t);
        }
        if (e instanceof Map) {
          let t = new Map();
          for (let [n, a] of (i.set(e, t), e)) t.set(n, c(a, n, r, i, f));
          return t;
        }
        if (e instanceof Set) {
          let t = new Set();
          for (let n of (i.set(e, t), e)) t.add(c(n, void 0, r, i, f));
          return t;
        }
        if (void 0 !== n && n.isBuffer(e)) return e.subarray();
        if (l.isTypedArray(e)) {
          let t = new (Object.getPrototypeOf(e).constructor)(e.length);
          i.set(e, t);
          for (let n = 0; n < e.length; n++) t[n] = c(e[n], n, r, i, f);
          return t;
        }
        if (
          e instanceof ArrayBuffer ||
          ("undefined" != typeof SharedArrayBuffer && e instanceof SharedArrayBuffer)
        )
          return e.slice(0);
        if (e instanceof DataView) {
          let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
          return (i.set(e, t), s(t, e, r, i, f), t);
        }
        if ("undefined" != typeof File && e instanceof File) {
          let t = new File([e], e.name, { type: e.type });
          return (i.set(e, t), s(t, e, r, i, f), t);
        }
        if ("undefined" != typeof Blob && e instanceof Blob) {
          let t = new Blob([e], { type: e.type });
          return (i.set(e, t), s(t, e, r, i, f), t);
        }
        if (e instanceof Error) {
          let t = new e.constructor();
          return (
            i.set(e, t),
            (t.message = e.message),
            (t.name = e.name),
            (t.stack = e.stack),
            (t.cause = e.cause),
            s(t, e, r, i, f),
            t
          );
        }
        if (e instanceof Boolean) {
          let t = new Boolean(e.valueOf());
          return (i.set(e, t), s(t, e, r, i, f), t);
        }
        if (e instanceof Number) {
          let t = new Number(e.valueOf());
          return (i.set(e, t), s(t, e, r, i, f), t);
        }
        if (e instanceof String) {
          let t = new String(e.valueOf());
          return (i.set(e, t), s(t, e, r, i, f), t);
        }
        if (
          "object" == typeof e &&
          (function (e) {
            switch (a.getTag(e)) {
              case o.argumentsTag:
              case o.arrayTag:
              case o.arrayBufferTag:
              case o.dataViewTag:
              case o.booleanTag:
              case o.dateTag:
              case o.float32ArrayTag:
              case o.float64ArrayTag:
              case o.int8ArrayTag:
              case o.int16ArrayTag:
              case o.int32ArrayTag:
              case o.mapTag:
              case o.numberTag:
              case o.objectTag:
              case o.regexpTag:
              case o.setTag:
              case o.stringTag:
              case o.symbolTag:
              case o.uint8ArrayTag:
              case o.uint8ClampedArrayTag:
              case o.uint16ArrayTag:
              case o.uint32ArrayTag:
                return !0;
              default:
                return !1;
            }
          })(e)
        ) {
          let t = Object.create(Object.getPrototypeOf(e));
          return (i.set(e, t), s(t, e, r, i, f), t);
        }
        return e;
      }
      function s(e, t, r = e, n, a) {
        let o = [...Object.keys(t), ...i.getSymbols(t)];
        for (let i = 0; i < o.length; i++) {
          let u = o[i],
            l = Object.getOwnPropertyDescriptor(e, u);
          (null == l || l.writable) && (e[u] = c(t[u], u, r, n, a));
        }
      }
      ((t.cloneDeepWith = function (e, t) {
        return c(e, void 0, e, new Map(), t);
      }),
        (t.cloneDeepWithImpl = c),
        (t.copyProperties = s));
    },
    13183: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.uniqBy = function (e, t) {
          let r = new Map();
          for (let n = 0; n < e.length; n++) {
            let i = e[n],
              a = t(i);
            r.has(a) || r.set(a, i);
          }
          return Array.from(r.values());
        }));
    },
    13802: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => n });
      var n = (e, t, r) => r;
    },
    13869: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.debounce = function (e, t, { signal: r, edges: n } = {}) {
          let i,
            a = null,
            o = null != n && n.includes("leading"),
            u = null == n || n.includes("trailing"),
            l = () => {
              null !== a && (e.apply(i, a), (i = void 0), (a = null));
            },
            c = null,
            s = () => {
              (null != c && clearTimeout(c),
                (c = setTimeout(() => {
                  ((c = null), u && l(), f());
                }, t)));
            },
            f = () => {
              (null !== c && (clearTimeout(c), (c = null)), (i = void 0), (a = null));
            },
            d = function (...e) {
              if (r?.aborted) return;
              ((i = this), (a = e));
              let t = null == c;
              (s(), o && t && l());
            };
          return (
            (d.schedule = s),
            (d.cancel = f),
            (d.flush = () => {
              l();
            }),
            r?.addEventListener("abort", f, { once: !0 }),
            d
          );
        }));
    },
    14599: (e, t, r) => {
      "use strict";
      r.d(t, { As: () => s, TK: () => f, Vi: () => c, ZF: () => l, g5: () => u, iZ: () => d });
      var n = r(26286),
        i = r(78289),
        a = r(60013),
        o = (0, n.Z0)({
          name: "graphicalItems",
          initialState: { cartesianItems: [], polarItems: [] },
          reducers: {
            addCartesianGraphicalItem: {
              reducer(e, t) {
                e.cartesianItems.push((0, a.h4)(t.payload));
              },
              prepare: (0, n.aA)(),
            },
            replaceCartesianGraphicalItem: {
              reducer(e, t) {
                var { prev: r, next: n } = t.payload,
                  o = (0, i.ss)(e).cartesianItems.indexOf((0, a.h4)(r));
                o > -1 && (e.cartesianItems[o] = (0, a.h4)(n));
              },
              prepare: (0, n.aA)(),
            },
            removeCartesianGraphicalItem: {
              reducer(e, t) {
                var r = (0, i.ss)(e).cartesianItems.indexOf((0, a.h4)(t.payload));
                r > -1 && e.cartesianItems.splice(r, 1);
              },
              prepare: (0, n.aA)(),
            },
            addPolarGraphicalItem: {
              reducer(e, t) {
                e.polarItems.push((0, a.h4)(t.payload));
              },
              prepare: (0, n.aA)(),
            },
            removePolarGraphicalItem: {
              reducer(e, t) {
                var r = (0, i.ss)(e).polarItems.indexOf((0, a.h4)(t.payload));
                r > -1 && e.polarItems.splice(r, 1);
              },
              prepare: (0, n.aA)(),
            },
          },
        }),
        {
          addCartesianGraphicalItem: u,
          replaceCartesianGraphicalItem: l,
          removeCartesianGraphicalItem: c,
          addPolarGraphicalItem: s,
          removePolarGraphicalItem: f,
        } = o.actions,
        d = o.reducer;
    },
    14724: (e, t, r) => {
      "use strict";
      r.d(t, { dL: () => w, h8: () => b, qY: () => _ });
      var n = r(12115),
        i = r(40207),
        a = r.n(i),
        o = r(63296),
        u = r(87095),
        l = r(51023),
        c = r(49580),
        s = r(55730),
        f = r(37808),
        d = r(30732),
        h = ["valueAccessor"],
        p = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
      function y() {
        return (y = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function v(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r = {};
            for (var n in e)
              if ({}.hasOwnProperty.call(e, n)) {
                if (-1 !== t.indexOf(n)) continue;
                r[n] = e[n];
              }
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            ((r = a[n]),
              -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      var g = (e) => (Array.isArray(e.value) ? a()(e.value) : e.value),
        m = (0, n.createContext)(void 0),
        b = m.Provider,
        x = (0, n.createContext)(void 0),
        w = x.Provider;
      function O(e) {
        var { valueAccessor: t = g } = e,
          r = v(e, h),
          { dataKey: i, clockWise: a, id: b, textBreakAll: w, zIndex: O } = r,
          _ = v(r, p),
          M = (0, n.useContext)(m),
          j = (0, n.useContext)(x),
          A = M || j;
        return A && A.length
          ? n.createElement(
              f.g,
              { zIndex: null != O ? O : d.I.label },
              n.createElement(
                u.W,
                { className: "recharts-label-list" },
                A.map((e, a) => {
                  var u,
                    f = (0, c.uy)(i) ? t(e, a) : (0, l.kr)(e && e.payload, i),
                    d = (0, c.uy)(b) ? {} : { id: "".concat(b, "-").concat(a) };
                  return n.createElement(
                    o.JU,
                    y({ key: "label-".concat(a) }, (0, s.a)(e), _, d, {
                      fill: null != (u = r.fill) ? u : e.fill,
                      parentViewBox: e.parentViewBox,
                      value: f,
                      textBreakAll: w,
                      viewBox: e.viewBox,
                      index: a,
                      zIndex: 0,
                    })
                  );
                })
              )
            )
          : null;
      }
      function _(e) {
        var { label: t } = e;
        return t
          ? !0 === t
            ? n.createElement(O, { key: "labelList-implicit" })
            : n.isValidElement(t) || (0, o.ZY)(t)
              ? n.createElement(O, { key: "labelList-implicit", content: t })
              : "object" == typeof t
                ? n.createElement(O, y({ key: "labelList-implicit" }, t, { type: String(t.type) }))
                : null
          : null;
      }
      O.displayName = "LabelList";
    },
    14806: (e, t, r) => {
      "use strict";
      e.exports = r(30125);
    },
    14821: (e, t, r) => {
      "use strict";
      r.d(t, { Be: () => g, Cv: () => _, D0: () => j, Gl: () => m, Dc: () => M });
      var n = r(76069),
        i = r(27588),
        a = r(8291),
        o = r(34010),
        u = r(49580),
        l = r(30732),
        c = {
          allowDecimals: !1,
          allowDuplicatedCategory: !0,
          angleAxisId: 0,
          axisLine: !0,
          axisLineType: "polygon",
          cx: 0,
          cy: 0,
          orientation: "outer",
          reversed: !1,
          scale: "auto",
          tick: !0,
          tickLine: !0,
          tickSize: 8,
          type: "category",
          zIndex: l.I.axis,
        },
        s = {
          allowDataOverflow: !1,
          allowDecimals: !1,
          allowDuplicatedCategory: !0,
          angle: 0,
          axisLine: !0,
          includeHidden: !1,
          hide: !1,
          label: !1,
          orientation: "right",
          radiusAxisId: 0,
          reversed: !1,
          scale: "auto",
          stroke: "#ccc",
          tick: !0,
          tickCount: 5,
          type: "number",
          zIndex: l.I.axis,
        },
        f = r(15145),
        d = r(90167),
        h = {
          allowDataOverflow: !1,
          allowDecimals: !1,
          allowDuplicatedCategory: !1,
          dataKey: void 0,
          domain: void 0,
          id: c.angleAxisId,
          includeHidden: !1,
          name: void 0,
          reversed: c.reversed,
          scale: c.scale,
          tick: c.tick,
          tickCount: void 0,
          ticks: void 0,
          type: c.type,
          unit: void 0,
        },
        p = {
          allowDataOverflow: s.allowDataOverflow,
          allowDecimals: !1,
          allowDuplicatedCategory: s.allowDuplicatedCategory,
          dataKey: void 0,
          domain: void 0,
          id: s.radiusAxisId,
          includeHidden: !1,
          name: void 0,
          reversed: !1,
          scale: s.scale,
          tick: s.tick,
          tickCount: s.tickCount,
          ticks: void 0,
          type: s.type,
          unit: void 0,
        },
        y = {
          allowDataOverflow: !1,
          allowDecimals: !1,
          allowDuplicatedCategory: c.allowDuplicatedCategory,
          dataKey: void 0,
          domain: void 0,
          id: c.angleAxisId,
          includeHidden: !1,
          name: void 0,
          reversed: !1,
          scale: c.scale,
          tick: c.tick,
          tickCount: void 0,
          ticks: void 0,
          type: "number",
          unit: void 0,
        },
        v = {
          allowDataOverflow: s.allowDataOverflow,
          allowDecimals: !1,
          allowDuplicatedCategory: s.allowDuplicatedCategory,
          dataKey: void 0,
          domain: void 0,
          id: s.radiusAxisId,
          includeHidden: !1,
          name: void 0,
          reversed: !1,
          scale: s.scale,
          tick: s.tick,
          tickCount: s.tickCount,
          ticks: void 0,
          type: "category",
          unit: void 0,
        },
        g = (e, t) =>
          null != e.polarAxis.angleAxis[t]
            ? e.polarAxis.angleAxis[t]
            : "radial" === e.layout.layoutType
              ? y
              : h,
        m = (e, t) =>
          null != e.polarAxis.radiusAxis[t]
            ? e.polarAxis.radiusAxis[t]
            : "radial" === e.layout.layoutType
              ? v
              : p,
        b = (e) => e.polarOptions,
        x = (0, n.Mz)([i.Lp, i.A$, a.HZ], o.lY),
        w = (0, n.Mz)([b, x], (e, t) => {
          if (null != e) return (0, u.F4)(e.innerRadius, t, 0);
        }),
        O = (0, n.Mz)([b, x], (e, t) => {
          if (null != e) return (0, u.F4)(e.outerRadius, t, 0.8 * t);
        }),
        _ = (0, n.Mz)([b], (e) => {
          if (null == e) return [0, 0];
          var { startAngle: t, endAngle: r } = e;
          return [t, r];
        });
      (0, n.Mz)([g, _], f.I);
      var M = (0, n.Mz)([x, w, O], (e, t, r) => {
        if (null != e && null != t && null != r) return [t, r];
      });
      (0, n.Mz)([m, M], f.I);
      var j = (0, n.Mz)([d.fz, b, w, O, i.Lp, i.A$], (e, t, r, n, i, a) => {
        if (("centric" === e || "radial" === e) && null != t && null != r && null != n) {
          var { cx: o, cy: l, startAngle: c, endAngle: s } = t;
          return {
            cx: (0, u.F4)(o, i, i / 2),
            cy: (0, u.F4)(l, a, a / 2),
            innerRadius: r,
            outerRadius: n,
            startAngle: c,
            endAngle: s,
            clockWise: !1,
          };
        }
      });
    },
    15145: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => n });
      var n = (e, t) => {
        if (e && t) return null != e && e.reversed ? [t[1], t[0]] : t;
      };
    },
    15195: (e, t, r) => {
      "use strict";
      r.d(t, {
        Lb: () => a,
        eC: () => i,
        gY: () => n,
        hX: () => l,
        iO: () => o,
        lZ: () => u,
        pH: () => c,
        vm: () => s,
      });
      var n = (e) => e.rootProps.barCategoryGap,
        i = (e) => e.rootProps.stackOffset,
        a = (e) => e.rootProps.reverseStackOrder,
        o = (e) => e.options.chartName,
        u = (e) => e.rootProps.syncId,
        l = (e) => e.rootProps.syncMethod,
        c = (e) => e.options.eventEmitter,
        s = (e) => e.rootProps.baseValue;
    },
    16940: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.getSymbols = function (e) {
          return Object.getOwnPropertySymbols(e).filter((t) =>
            Object.prototype.propertyIsEnumerable.call(e, t)
          );
        }));
    },
    18305: (e, t, r) => {
      "use strict";
      r.d(t, {
        aX: () => H,
        dS: () => R,
        BZ: () => F,
        pg: () => L,
        yn: () => U,
        r1: () => T,
        dp: () => I,
        u9: () => $,
        fW: () => P,
      });
      var n = r(76069),
        i = r(97354),
        a = r.n(i),
        o = r(81024),
        u = r(51023),
        l = r(90135),
        c = r(72481),
        s = r(210),
        f = r(15195),
        d = r(90167),
        h = r(8291),
        p = r(27588),
        y = r(85339),
        v = r(82601),
        g = r(21838),
        m = r(23125),
        b = r(74525),
        x = r(32403),
        w = r(25543),
        O = r(31474),
        _ = r(34010),
        M = r(49580);
      function j(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : j(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var S = (e, t, r, n, i) => {
          var a = null != (f = null == t ? void 0 : t.length) ? f : 0;
          if (a <= 1 || null == e) return 0;
          if ("angleAxis" === n && null != i && 1e-6 >= Math.abs(Math.abs(i[1] - i[0]) - 360))
            for (var o = 0; o < a; o++) {
              var u =
                  o > 0
                    ? null == (d = r[o - 1])
                      ? void 0
                      : d.coordinate
                    : null == (h = r[a - 1])
                      ? void 0
                      : h.coordinate,
                l = null == (p = r[o]) ? void 0 : p.coordinate,
                c =
                  o >= a - 1
                    ? null == (y = r[0])
                      ? void 0
                      : y.coordinate
                    : null == (v = r[o + 1])
                      ? void 0
                      : v.coordinate,
                s = void 0;
              if (null != u && null != l && null != c)
                if ((0, M.sA)(l - u) !== (0, M.sA)(c - l)) {
                  var f,
                    d,
                    h,
                    p,
                    y,
                    v,
                    g,
                    m = [];
                  if ((0, M.sA)(c - l) === (0, M.sA)(i[1] - i[0])) {
                    s = c;
                    var b = l + i[1] - i[0];
                    ((m[0] = Math.min(b, (b + u) / 2)), (m[1] = Math.max(b, (b + u) / 2)));
                  } else {
                    s = u;
                    var x = c + i[1] - i[0];
                    ((m[0] = Math.min(l, (x + l) / 2)), (m[1] = Math.max(l, (x + l) / 2)));
                  }
                  var w = [Math.min(l, (s + l) / 2), Math.max(l, (s + l) / 2)];
                  if ((e > w[0] && e <= w[1]) || (e >= m[0] && e <= m[1]))
                    return null == (g = r[o]) ? void 0 : g.index;
                } else {
                  var O,
                    _ = Math.min(u, c),
                    j = Math.max(u, c);
                  if (e > (_ + l) / 2 && e <= (j + l) / 2)
                    return null == (O = r[o]) ? void 0 : O.index;
                }
            }
          else if (t)
            for (var A = 0; A < a; A++) {
              var S = t[A];
              if (null != S) {
                var P = t[A + 1],
                  E = t[A - 1];
                if (
                  (0 === A && null != P && e <= (S.coordinate + P.coordinate) / 2) ||
                  (A === a - 1 && null != E && e > (S.coordinate + E.coordinate) / 2) ||
                  (A > 0 &&
                    A < a - 1 &&
                    null != E &&
                    null != P &&
                    e > (S.coordinate + E.coordinate) / 2 &&
                    e <= (S.coordinate + P.coordinate) / 2)
                )
                  return S.index;
              }
            }
          return -1;
        },
        P = () => (0, o.G)(f.iO),
        E = (e, t) => t,
        k = (e, t, r) => r,
        C = (e, t, r, n) => n,
        T = (0, n.Mz)(c.R4, (e) => a()(e, (e) => e.coordinate)),
        D = (0, n.Mz)([w.J, E, k, C], v.i),
        N = (0, n.Mz)([D, c.n4, s.K6, c.FO], g.P),
        I = (e, t, r) => {
          if (null != t) {
            var n = (0, w.J)(e);
            return "axis" === t
              ? "hover" === r
                ? n.axisInteraction.hover.dataKey
                : n.axisInteraction.click.dataKey
              : "hover" === r
                ? n.itemInteraction.hover.dataKey
                : n.itemInteraction.click.dataKey;
          }
        },
        z = (0, n.Mz)([w.J, E, k, C], b.q),
        L = (0, n.Mz)([p.Lp, p.A$, d.fz, h.HZ, c.R4, C, z, x.x], m.o),
        R = (0, n.Mz)([D, L], (e, t) => {
          var r;
          return null != (r = e.coordinate) ? r : t;
        }),
        F = (0, n.Mz)([c.R4, N], y.E),
        $ = (0, n.Mz)([z, N, l.LF, s.K6, F, x.x, E], O.N),
        U = (0, n.Mz)([D, N], (e, t) => ({ isActive: e.active && null != t, activeIndex: t })),
        H = (e, t, r, n, i, a, o, l) => {
          if (e && t && n && i && a)
            return "horizontal" === t || "vertical" === t
              ? ((e, t, r, n, i, a, o) => {
                  if (
                    e &&
                    r &&
                    n &&
                    i &&
                    (function (e, t) {
                      var { chartX: r, chartY: n } = e;
                      return (
                        r >= t.left && r <= t.left + t.width && n >= t.top && n <= t.top + t.height
                      );
                    })(e, o)
                  ) {
                    var l = S((0, u.sr)(e, t), a, i, r, n),
                      c = ((e, t, r, n) => {
                        var i = t.find((e) => e && e.index === r);
                        if (i) {
                          if ("horizontal" === e) return { x: i.coordinate, y: n.chartY };
                          if ("vertical" === e) return { x: n.chartX, y: i.coordinate };
                        }
                        return { x: 0, y: 0 };
                      })(t, i, l, e);
                    return { activeIndex: String(l), activeCoordinate: c };
                  }
                })(e, t, n, i, a, o, l)
              : ((e, t, r, n, i, a, o) => {
                  if (e && n && i && a && r) {
                    var l = (0, _.yy)(e, r);
                    if (l) {
                      var c = S((0, u.eB)(l, t), o, a, n, i),
                        s = ((e, t, r, n) => {
                          var i = t.find((e) => e && e.index === r);
                          if (i) {
                            if ("centric" === e) {
                              var a = i.coordinate,
                                { radius: o } = n;
                              return A(
                                A(A({}, n), (0, _.IZ)(n.cx, n.cy, o, a)),
                                {},
                                { angle: a, radius: o }
                              );
                            }
                            var u = i.coordinate,
                              { angle: l } = n;
                            return A(
                              A(A({}, n), (0, _.IZ)(n.cx, n.cy, u, l)),
                              {},
                              { angle: l, radius: u }
                            );
                          }
                          return {
                            angle: 0,
                            clockWise: !1,
                            cx: 0,
                            cy: 0,
                            endAngle: 0,
                            innerRadius: 0,
                            outerRadius: 0,
                            radius: 0,
                            startAngle: 0,
                            x: 0,
                            y: 0,
                          };
                        })(t, a, c, l);
                      return { activeIndex: String(c), activeCoordinate: s };
                    }
                  }
                })(e, t, r, n, i, a, o);
        };
    },
    19052: (e, t, r) => {
      "use strict";
      r.d(t, { J: () => a, U: () => i });
      var n = (0, r(26286).Z0)({
          name: "polarOptions",
          initialState: null,
          reducers: { updatePolarOptions: (e, t) => t.payload },
        }),
        { updatePolarOptions: i } = n.actions,
        a = n.reducer;
    },
    20282: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => i, X: () => a });
      var n = r(12115),
        i = (0, n.createContext)(null),
        a = () => (0, n.useContext)(i);
    },
    20526: (e, t, r) => {
      "use strict";
      r.d(t, { o: () => n });
      var n = (e, t) => e === t || (null != e && null != t && e[0] === t[0] && e[1] === t[1]);
    },
    21838: (e, t, r) => {
      "use strict";
      r.d(t, { P: () => o });
      var n = r(92377),
        i = r(51023),
        a = r(23857),
        o = (e, t, r, o) => {
          var u = null == e ? void 0 : e.index;
          if (null == u) return null;
          var l = Number(u);
          if (!(0, n.H)(l)) return u;
          var c = Infinity;
          t.length > 0 && (c = t.length - 1);
          var s = Math.max(0, Math.min(l, c)),
            f = t[s];
          return null == f
            ? String(s)
            : !(function (e, t, r) {
                  if (null == r || null == t) return !0;
                  var n = (0, i.kr)(e, t);
                  return (
                    !(null != n && (0, a.JH)(r)) ||
                    (function (e, t) {
                      var r = (function (e) {
                          if ("number" == typeof e) return Number.isFinite(e) ? e : void 0;
                          if (e instanceof Date) {
                            var t = e.valueOf();
                            return Number.isFinite(t) ? t : void 0;
                          }
                          var r = Number(e);
                          return Number.isFinite(r) ? r : void 0;
                        })(e),
                        n = t[0],
                        i = t[1];
                      if (void 0 === r) return !1;
                      var a = Math.min(n, i),
                        o = Math.max(n, i);
                      return r >= a && r <= o;
                    })(n, r)
                  );
                })(f, r, o)
              ? null
              : String(s);
        };
    },
    23125: (e, t, r) => {
      "use strict";
      r.d(t, { o: () => n });
      var n = (e, t, r, n, i, a, o, u) => {
        if (null != a && null != u) {
          var l = o[0],
            c = null == l ? void 0 : u(l.positions, a);
          if (null != c) return c;
          var s = null == i ? void 0 : i[Number(a)];
          if (s)
            if ("horizontal" === r) return { x: s.coordinate, y: (n.top + t) / 2 };
            else return { x: (n.left + e) / 2, y: s.coordinate };
        }
      };
    },
    23134: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.isSymbol = function (e) {
          return "symbol" == typeof e || e instanceof Symbol;
        }));
    },
    23343: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => u, h: () => o });
      var n = r(76069),
        i = r(61060),
        a = r(30732),
        o = (0, n.Mz)(
          (e) => e.zIndex.zIndexMap,
          (e, t) => t,
          (e, t, r) => r,
          (e, t, r) => {
            if (null != t) {
              var n = e[t];
              if (null != n) return r ? n.panoramaElement : n.element;
            }
          }
        ),
        u = (0, n.Mz)(
          (e) => e.zIndex.zIndexMap,
          (e) =>
            Array.from(
              new Set(
                Object.keys(e)
                  .map((e) => parseInt(e, 10))
                  .concat(Object.values(a.I))
              )
            ).sort((e, t) => e - t),
          { memoizeOptions: { resultEqualityCheck: i.W } }
        );
    },
    23857: (e, t, r) => {
      "use strict";
      r.d(t, { JH: () => o, f5: () => l, v1: () => c });
      var n = r(51023),
        i = r(49580),
        a = r(92377);
      function o(e) {
        if (Array.isArray(e) && 2 === e.length) {
          var [t, r] = e;
          if ((0, a.H)(t) && (0, a.H)(r)) return !0;
        }
        return !1;
      }
      function u(e, t, r) {
        return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
      }
      function l(e, t) {
        if (t && "function" != typeof e && Array.isArray(e) && 2 === e.length) {
          var r,
            n,
            [i, u] = e;
          if ((0, a.H)(i)) r = i;
          else if ("function" == typeof i) return;
          if ((0, a.H)(u)) n = u;
          else if ("function" == typeof u) return;
          var l = [r, n];
          if (o(l)) return l;
        }
      }
      function c(e, t, r) {
        if (r || null != t) {
          if ("function" == typeof e && null != t)
            try {
              var a = e(t, r);
              if (o(a)) return u(a, t, r);
            } catch (e) {}
          if (Array.isArray(e) && 2 === e.length) {
            var l,
              c,
              [s, f] = e;
            if ("auto" === s) null != t && (l = Math.min(...t));
            else if ((0, i.Et)(s)) l = s;
            else if ("function" == typeof s)
              try {
                null != t && (l = s(null == t ? void 0 : t[0]));
              } catch (e) {}
            else if ("string" == typeof s && n.IH.test(s)) {
              var d = n.IH.exec(s);
              if (null == d || null == d[1] || null == t) l = void 0;
              else {
                var h = +d[1];
                l = t[0] - h;
              }
            } else l = null == t ? void 0 : t[0];
            if ("auto" === f) null != t && (c = Math.max(...t));
            else if ((0, i.Et)(f)) c = f;
            else if ("function" == typeof f)
              try {
                null != t && (c = f(null == t ? void 0 : t[1]));
              } catch (e) {}
            else if ("string" == typeof f && n.qx.test(f)) {
              var p = n.qx.exec(f);
              if (null == p || null == p[1] || null == t) c = void 0;
              else {
                var y = +p[1];
                c = t[1] + y;
              }
            } else c = null == t ? void 0 : t[1];
            var v = [l, c];
            if (o(v)) return null == t ? v : u(v, t, r);
          }
        }
      }
    },
    24021: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      var n = r(34565),
        i = r(51023);
      function a(e, t, r) {
        var { chartData: a = [] } = t,
          { allowDuplicatedCategory: o, dataKey: u } = r,
          l = new Map();
        return (
          e.forEach((e) => {
            var t,
              r = null != (t = e.data) ? t : a;
            if (null != r && 0 !== r.length) {
              var c = (0, n.x)(e);
              r.forEach((t, r) => {
                var n,
                  a = null == u || o ? r : String((0, i.kr)(t, u, null)),
                  s = (0, i.kr)(t, e.dataKey, 0);
                (Object.assign((n = l.has(a) ? l.get(a) : {}), { [c]: s }), l.set(a, n));
              });
            }
          }),
          Array.from(l.values())
        );
      }
    },
    25543: (e, t, r) => {
      "use strict";
      r.d(t, { J: () => n });
      var n = (e) => e.tooltip;
    },
    25723: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(31441),
        i = r(35067);
      t.toPath = function (e) {
        if (Array.isArray(e)) return e.map(i.toKey);
        if ("symbol" == typeof e) return [e];
        e = n.toString(e);
        let t = [],
          r = e.length;
        if (0 === r) return t;
        let a = 0,
          o = "",
          u = "",
          l = !1;
        for (46 === e.charCodeAt(0) && (t.push(""), a++); a < r; ) {
          let n = e[a];
          (u
            ? "\\" === n && a + 1 < r
              ? (o += e[++a])
              : n === u
                ? (u = "")
                : (o += n)
            : l
              ? '"' === n || "'" === n
                ? (u = n)
                : "]" === n
                  ? ((l = !1), t.push(o), (o = ""))
                  : (o += n)
              : "[" === n
                ? ((l = !0), o && (t.push(o), (o = "")))
                : "." === n
                  ? o && (t.push(o), (o = ""))
                  : (o += n),
            a++);
        }
        return (o && t.push(o), t);
      };
    },
    26265: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => O, w: () => x });
      var n = r(2821),
        i = r(12115),
        a = r(88011),
        o = r.n(a),
        u = r(49580),
        l = r(58672),
        c = (e, t, r) => {
          var { width: n = "100%", height: i = "100%", aspect: a, maxHeight: o } = r,
            l = (0, u._3)(n) ? e : Number(n),
            c = (0, u._3)(i) ? t : Number(i);
          return (
            a && a > 0 && (l ? (c = l / a) : c && (l = c * a), o && null != c && c > o && (c = o)),
            { calculatedWidth: l, calculatedHeight: c }
          );
        },
        s = { width: 0, height: 0, overflow: "visible" },
        f = { width: 0, overflowX: "visible" },
        d = { height: 0, overflowY: "visible" },
        h = {},
        p = r(92377);
      function y() {
        return (y = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function v(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : v(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var m = (0, i.createContext)({ width: -1, height: -1 });
      function b(e) {
        var { children: t, width: r, height: n } = e,
          a = (0, i.useMemo)(() => ({ width: r, height: n }), [r, n]);
        return (0, p.F)(a.width) && (0, p.F)(a.height)
          ? i.createElement(m.Provider, { value: a }, t)
          : null;
      }
      var x = () => (0, i.useContext)(m),
        w = (0, i.forwardRef)((e, t) => {
          var {
              aspect: r,
              initialDimension: a = { width: -1, height: -1 },
              width: p,
              height: y,
              minWidth: v = 0,
              minHeight: m,
              maxHeight: x,
              children: w,
              debounce: O = 0,
              id: _,
              className: M,
              onResize: j,
              style: A = {},
            } = e,
            S = (0, i.useRef)(null),
            P = (0, i.useRef)();
          ((P.current = j), (0, i.useImperativeHandle)(t, () => S.current));
          var [E, k] = (0, i.useState)({ containerWidth: a.width, containerHeight: a.height }),
            C = (0, i.useCallback)((e, t) => {
              k((r) => {
                var n = Math.round(e),
                  i = Math.round(t);
                return r.containerWidth === n && r.containerHeight === i
                  ? r
                  : { containerWidth: n, containerHeight: i };
              });
            }, []);
          (0, i.useEffect)(() => {
            if (null == S.current || "undefined" == typeof ResizeObserver) return u.lQ;
            var e = (e) => {
              var t,
                { width: r, height: n } = e[0].contentRect;
              (C(r, n), null == (t = P.current) || t.call(P, r, n));
            };
            O > 0 && (e = o()(e, O, { trailing: !0, leading: !1 }));
            var t = new ResizeObserver(e),
              { width: r, height: n } = S.current.getBoundingClientRect();
            return (
              C(r, n),
              t.observe(S.current),
              () => {
                t.disconnect();
              }
            );
          }, [C, O]);
          var { containerWidth: T, containerHeight: D } = E;
          (0, l.R)(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
          var { calculatedWidth: N, calculatedHeight: I } = c(T, D, {
            width: p,
            height: y,
            aspect: r,
            maxHeight: x,
          });
          return (
            (0, l.R)(
              (null != N && N > 0) || (null != I && I > 0),
              "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
              N,
              I,
              p,
              y,
              v,
              m,
              r
            ),
            i.createElement(
              "div",
              {
                id: _ ? "".concat(_) : void 0,
                className: (0, n.$)("recharts-responsive-container", M),
                style: g(
                  g({}, A),
                  {},
                  { width: p, height: y, minWidth: v, minHeight: m, maxHeight: x }
                ),
                ref: S,
              },
              i.createElement(
                "div",
                {
                  style: ((e) => {
                    var { width: t, height: r } = e,
                      n = (0, u._3)(t),
                      i = (0, u._3)(r);
                    return n && i ? s : n ? f : i ? d : h;
                  })({ width: p, height: y }),
                },
                i.createElement(b, { width: N, height: I }, w)
              )
            )
          );
        }),
        O = (0, i.forwardRef)((e, t) => {
          var r = x();
          if ((0, p.F)(r.width) && (0, p.F)(r.height)) return e.children;
          var { width: n, height: a } = (function (e) {
              var { width: t, height: r, aspect: n } = e,
                i = t,
                a = r;
              return (
                void 0 === i && void 0 === a
                  ? ((i = "100%"), (a = "100%"))
                  : void 0 === i
                    ? (i = n && n > 0 ? void 0 : "100%")
                    : void 0 === a && (a = n && n > 0 ? void 0 : "100%"),
                { width: i, height: a }
              );
            })({ width: e.width, height: e.height, aspect: e.aspect }),
            { calculatedWidth: o, calculatedHeight: l } = c(void 0, void 0, {
              width: n,
              height: a,
              aspect: e.aspect,
              maxHeight: e.maxHeight,
            });
          return (0, u.Et)(o) && (0, u.Et)(l)
            ? i.createElement(b, { width: o, height: l }, e.children)
            : i.createElement(w, y({}, e, { width: n, height: a, ref: t }));
        });
    },
    26286: (e, t, r) => {
      "use strict";
      r.d(t, { CF: () => y, U1: () => v, VP: () => l, Nc: () => X, Z0: () => x, aA: () => h });
      var n = r(78289),
        i = r(81093);
      function a(e) {
        return ({ dispatch: t, getState: r }) =>
          (n) =>
          (i) =>
            "function" == typeof i ? i(t, r, e) : n(i);
      }
      var o = a(),
        u =
          (r(87358),
          "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : function () {
                if (0 != arguments.length)
                  return "object" == typeof arguments[0] ? i.Zz : i.Zz.apply(null, arguments);
              });
      function l(e, t) {
        function r(...n) {
          if (t) {
            let r = t(...n);
            if (!r) throw Error(J(0));
            return {
              type: e,
              payload: r.payload,
              ...("meta" in r && { meta: r.meta }),
              ...("error" in r && { error: r.error }),
            };
          }
          return { type: e, payload: n[0] };
        }
        return (
          (r.toString = () => `${e}`),
          (r.type = e),
          (r.match = (t) => (0, i.ve)(t) && t.type === e),
          r
        );
      }
      "undefined" != typeof window &&
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__;
      var c = class e extends Array {
        constructor(...t) {
          (super(...t), Object.setPrototypeOf(this, e.prototype));
        }
        static get [Symbol.species]() {
          return e;
        }
        concat(...e) {
          return super.concat.apply(this, e);
        }
        prepend(...t) {
          return 1 === t.length && Array.isArray(t[0])
            ? new e(...t[0].concat(this))
            : new e(...t.concat(this));
        }
      };
      function s(e) {
        return (0, n.a6)(e) ? (0, n.jM)(e, () => {}) : e;
      }
      function f(e, t, r) {
        return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
      }
      var d = "RTK_autoBatch",
        h = () => (e) => ({ payload: e, meta: { [d]: !0 } }),
        p = (e) => (t) => {
          setTimeout(t, e);
        },
        y =
          (e = { type: "raf" }) =>
          (t) =>
          (...r) => {
            let n = t(...r),
              i = !0,
              a = !1,
              o = !1,
              u = new Set(),
              l =
                "tick" === e.type
                  ? queueMicrotask
                  : "raf" === e.type
                    ? "undefined" != typeof window && window.requestAnimationFrame
                      ? window.requestAnimationFrame
                      : p(10)
                    : "callback" === e.type
                      ? e.queueNotification
                      : p(e.timeout),
              c = () => {
                ((o = !1), a && ((a = !1), u.forEach((e) => e())));
              };
            return Object.assign({}, n, {
              subscribe(e) {
                let t = n.subscribe(() => i && e());
                return (
                  u.add(e),
                  () => {
                    (t(), u.delete(e));
                  }
                );
              },
              dispatch(e) {
                try {
                  return ((a = !(i = !e?.meta?.[d])) && !o && ((o = !0), l(c)), n.dispatch(e));
                } finally {
                  i = !0;
                }
              },
            });
          };
      function v(e) {
        let t,
          r,
          n,
          l = function (e) {
            let {
                thunk: t = !0,
                immutableCheck: r = !0,
                serializableCheck: n = !0,
                actionCreatorCheck: i = !0,
              } = e ?? {},
              u = new c();
            return (t && ("boolean" == typeof t ? u.push(o) : u.push(a(t.extraArgument))), u);
          },
          {
            reducer: s,
            middleware: f,
            devTools: d = !0,
            duplicateMiddlewareCheck: h = !0,
            preloadedState: p,
            enhancers: v,
          } = e || {};
        if ("function" == typeof s) t = s;
        else if ((0, i.Qd)(s)) t = (0, i.HY)(s);
        else throw Error(J(1));
        r = "function" == typeof f ? f(l) : l();
        let g = i.Zz;
        d && (g = u({ trace: !1, ...("object" == typeof d && d) }));
        let m =
            ((n = (0, i.Tw)(...r)),
            function (e) {
              let { autoBatch: t = !0 } = e ?? {},
                r = new c(n);
              return (t && r.push(y("object" == typeof t ? t : void 0)), r);
            }),
          b = g(...("function" == typeof v ? v(m) : m()));
        return (0, i.y$)(t, p, b);
      }
      function g(e) {
        let t,
          r = {},
          n = [],
          i = {
            addCase(e, t) {
              let n = "string" == typeof e ? e : e.type;
              if (!n) throw Error(J(28));
              if (n in r) throw Error(J(29));
              return ((r[n] = t), i);
            },
            addAsyncThunk: (e, t) => (
              t.pending && (r[e.pending.type] = t.pending),
              t.rejected && (r[e.rejected.type] = t.rejected),
              t.fulfilled && (r[e.fulfilled.type] = t.fulfilled),
              t.settled && n.push({ matcher: e.settled, reducer: t.settled }),
              i
            ),
            addMatcher: (e, t) => (n.push({ matcher: e, reducer: t }), i),
            addDefaultCase: (e) => ((t = e), i),
          };
        return (e(i), [r, n, t]);
      }
      var m = Symbol.for("rtk-slice-createasyncthunk"),
        b = ((e) => (
          (e.reducer = "reducer"),
          (e.reducerWithPrepare = "reducerWithPrepare"),
          (e.asyncThunk = "asyncThunk"),
          e
        ))(b || {}),
        x = (function ({ creators: e } = {}) {
          let t = e?.asyncThunk?.[m];
          return function (e) {
            let r,
              { name: i, reducerPath: a = i } = e;
            if (!i) throw Error(J(11));
            let o =
                ("function" == typeof e.reducers
                  ? e.reducers(
                      (function () {
                        function e(e, t) {
                          return { _reducerDefinitionType: "asyncThunk", payloadCreator: e, ...t };
                        }
                        return (
                          (e.withTypes = () => e),
                          {
                            reducer: (e) =>
                              Object.assign({ [e.name]: (...t) => e(...t) }[e.name], {
                                _reducerDefinitionType: "reducer",
                              }),
                            preparedReducer: (e, t) => ({
                              _reducerDefinitionType: "reducerWithPrepare",
                              prepare: e,
                              reducer: t,
                            }),
                            asyncThunk: e,
                          }
                        );
                      })()
                    )
                  : e.reducers) || {},
              u = Object.keys(o),
              c = {},
              d = {},
              h = {},
              p = [],
              y = {
                addCase(e, t) {
                  let r = "string" == typeof e ? e : e.type;
                  if (!r) throw Error(J(12));
                  if (r in d) throw Error(J(13));
                  return ((d[r] = t), y);
                },
                addMatcher: (e, t) => (p.push({ matcher: e, reducer: t }), y),
                exposeAction: (e, t) => ((h[e] = t), y),
                exposeCaseReducer: (e, t) => ((c[e] = t), y),
              };
            function v() {
              let [t = {}, r = [], i] =
                  "function" == typeof e.extraReducers ? g(e.extraReducers) : [e.extraReducers],
                a = { ...t, ...d };
              return (function (e, t) {
                let r,
                  [i, a, o] = g(t);
                if ("function" == typeof e) r = () => s(e());
                else {
                  let t = s(e);
                  r = () => t;
                }
                function u(e = r(), t) {
                  let l = [
                    i[t.type],
                    ...a.filter(({ matcher: e }) => e(t)).map(({ reducer: e }) => e),
                  ];
                  return (
                    0 === l.filter((e) => !!e).length && (l = [o]),
                    l.reduce((e, r) => {
                      if (r)
                        if ((0, n.Qx)(e)) {
                          let n = r(e, t);
                          return void 0 === n ? e : n;
                        } else {
                          if ((0, n.a6)(e)) return (0, n.jM)(e, (e) => r(e, t));
                          let i = r(e, t);
                          if (void 0 === i) {
                            if (null === e) return e;
                            throw Error(
                              "A case reducer on a non-draftable value must not return undefined"
                            );
                          }
                          return i;
                        }
                      return e;
                    }, e)
                  );
                }
                return ((u.getInitialState = r), u);
              })(e.initialState, (e) => {
                for (let t in a) e.addCase(t, a[t]);
                for (let t of p) e.addMatcher(t.matcher, t.reducer);
                for (let t of r) e.addMatcher(t.matcher, t.reducer);
                i && e.addDefaultCase(i);
              });
            }
            u.forEach((r) => {
              let n = o[r],
                a = {
                  reducerName: r,
                  type: `${i}/${r}`,
                  createNotation: "function" == typeof e.reducers,
                };
              "asyncThunk" === n._reducerDefinitionType
                ? (function ({ type: e, reducerName: t }, r, n, i) {
                    if (!i) throw Error(J(18));
                    let {
                        payloadCreator: a,
                        fulfilled: o,
                        pending: u,
                        rejected: l,
                        settled: c,
                        options: s,
                      } = r,
                      f = i(e, a, s);
                    (n.exposeAction(t, f),
                      o && n.addCase(f.fulfilled, o),
                      u && n.addCase(f.pending, u),
                      l && n.addCase(f.rejected, l),
                      c && n.addMatcher(f.settled, c),
                      n.exposeCaseReducer(t, {
                        fulfilled: o || w,
                        pending: u || w,
                        rejected: l || w,
                        settled: c || w,
                      }));
                  })(a, n, y, t)
                : (function ({ type: e, reducerName: t, createNotation: r }, n, i) {
                    let a, o;
                    if ("reducer" in n) {
                      if (r && "reducerWithPrepare" !== n._reducerDefinitionType)
                        throw Error(J(17));
                      ((a = n.reducer), (o = n.prepare));
                    } else a = n;
                    i.addCase(e, a)
                      .exposeCaseReducer(t, a)
                      .exposeAction(t, o ? l(e, o) : l(e));
                  })(a, n, y);
            });
            let m = (e) => e,
              b = new Map(),
              x = new WeakMap();
            function O(e, t) {
              return (r || (r = v()), r(e, t));
            }
            function _() {
              return (r || (r = v()), r.getInitialState());
            }
            function M(t, r = !1) {
              function n(e) {
                let i = e[t];
                return (void 0 === i && r && (i = f(x, n, _)), i);
              }
              function i(t = m) {
                let n = f(b, r, () => new WeakMap());
                return f(n, t, () => {
                  let n = {};
                  for (let [i, a] of Object.entries(e.selectors ?? {}))
                    n[i] = (function (e, t, r, n) {
                      function i(a, ...o) {
                        let u = t(a);
                        return (void 0 === u && n && (u = r()), e(u, ...o));
                      }
                      return ((i.unwrapped = e), i);
                    })(a, t, () => f(x, t, _), r);
                  return n;
                });
              }
              return {
                reducerPath: t,
                getSelectors: i,
                get selectors() {
                  return i(n);
                },
                selectSlice: n,
              };
            }
            let j = {
              name: i,
              reducer: O,
              actions: h,
              caseReducers: c,
              getInitialState: _,
              ...M(a),
              injectInto(e, { reducerPath: t, ...r } = {}) {
                let n = t ?? a;
                return (e.inject({ reducerPath: n, reducer: O }, r), { ...j, ...M(n, !0) });
              },
            };
            return j;
          };
        })();
      function w() {}
      var O = "listener",
        _ = "completed",
        M = "cancelled",
        j = `task-${M}`,
        A = `task-${_}`,
        S = `${O}-${M}`,
        P = `${O}-${_}`,
        E = class {
          constructor(e) {
            ((this.code = e), (this.message = `task ${M} (reason: ${e})`));
          }
          name = "TaskAbortError";
          message;
        },
        k = (e, t) => {
          if ("function" != typeof e) throw TypeError(J(32));
        },
        C = () => {},
        T = (e, t = C) => (e.catch(t), e),
        D = (e, t) => (
          e.addEventListener("abort", t, { once: !0 }),
          () => e.removeEventListener("abort", t)
        ),
        N = (e) => {
          if (e.aborted) throw new E(e.reason);
        };
      function I(e, t) {
        let r = C;
        return new Promise((n, i) => {
          let a = () => i(new E(e.reason));
          if (e.aborted) return void a();
          ((r = D(e, a)), t.finally(() => r()).then(n, i));
        }).finally(() => {
          r = C;
        });
      }
      var z = async (e, t) => {
          try {
            await Promise.resolve();
            let t = await e();
            return { status: "ok", value: t };
          } catch (e) {
            return { status: e instanceof E ? "cancelled" : "rejected", error: e };
          } finally {
            t?.();
          }
        },
        L = (e) => (t) => T(I(e, t).then((t) => (N(e), t))),
        R = (e) => {
          let t = L(e);
          return (e) => t(new Promise((t) => setTimeout(t, e)));
        },
        { assign: F } = Object,
        $ = {},
        U = "listenerMiddleware",
        H = (e) => {
          let { type: t, actionCreator: r, matcher: n, predicate: i, effect: a } = e;
          if (t) i = l(t).match;
          else if (r) ((t = r.type), (i = r.match));
          else if (n) i = n;
          else if (i);
          else throw Error(J(21));
          return (k(a, "options.listener"), { predicate: i, type: t, effect: a });
        },
        B = F(
          (e) => {
            let { type: t, predicate: r, effect: n } = H(e);
            return {
              id: ((e = 21) => {
                let t = "",
                  r = e;
                for (; r--; )
                  t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[
                    (64 * Math.random()) | 0
                  ];
                return t;
              })(),
              effect: n,
              type: t,
              predicate: r,
              pending: new Set(),
              unsubscribe: () => {
                throw Error(J(22));
              },
            };
          },
          { withTypes: () => B }
        ),
        K = (e, t) => {
          let { type: r, effect: n, predicate: i } = H(t);
          return Array.from(e.values()).find(
            (e) => ("string" == typeof r ? e.type === r : e.predicate === i) && e.effect === n
          );
        },
        Z = (e) => {
          e.pending.forEach((e) => {
            e.abort(S);
          });
        },
        W = (e, t, r) => {
          try {
            e(t, r);
          } catch (e) {
            setTimeout(() => {
              throw e;
            }, 0);
          }
        },
        q = F(l(`${U}/add`), { withTypes: () => q }),
        Y = l(`${U}/removeAll`),
        V = F(l(`${U}/remove`), { withTypes: () => V }),
        G = (...e) => {
          console.error(`${U}/error`, ...e);
        },
        X = (e = {}) => {
          let t = new Map(),
            r = new Map(),
            { extra: n, onError: a = G } = e;
          k(a, "onError");
          let o = (e) =>
            ((e) => (
              (e.unsubscribe = () => t.delete(e.id)),
              t.set(e.id, e),
              (t) => {
                (e.unsubscribe(), t?.cancelActive && Z(e));
              }
            ))(K(t, e) ?? B(e));
          F(o, { withTypes: () => o });
          let u = (e) => {
            let r = K(t, e);
            return (r && (r.unsubscribe(), e.cancelActive && Z(r)), !!r);
          };
          F(u, { withTypes: () => u });
          let l = async (e, i, u, l) => {
              let c = new AbortController(),
                s = ((e, t) => {
                  let r = async (r, n) => {
                    N(t);
                    let i = () => {},
                      a = [
                        new Promise((t, n) => {
                          let a = e({
                            predicate: r,
                            effect: (e, r) => {
                              (r.unsubscribe(), t([e, r.getState(), r.getOriginalState()]));
                            },
                          });
                          i = () => {
                            (a(), n());
                          };
                        }),
                      ];
                    null != n && a.push(new Promise((e) => setTimeout(e, n, null)));
                    try {
                      let e = await I(t, Promise.race(a));
                      return (N(t), e);
                    } finally {
                      i();
                    }
                  };
                  return (e, t) => T(r(e, t));
                })(o, c.signal),
                f = [];
              try {
                (e.pending.add(c),
                  ((e) => {
                    let t = r.get(e) ?? 0;
                    r.set(e, t + 1);
                  })(e),
                  await Promise.resolve(
                    e.effect(
                      i,
                      F({}, u, {
                        getOriginalState: l,
                        condition: (e, t) => s(e, t).then(Boolean),
                        take: s,
                        delay: R(c.signal),
                        pause: L(c.signal),
                        extra: n,
                        signal: c.signal,
                        fork: ((e, t) => (r, n) => {
                          k(r, "taskExecutor");
                          let i = new AbortController();
                          D(e, () => i.abort(e.reason));
                          let a = z(
                            async () => {
                              (N(e), N(i.signal));
                              let t = await r({
                                pause: L(i.signal),
                                delay: R(i.signal),
                                signal: i.signal,
                              });
                              return (N(i.signal), t);
                            },
                            () => i.abort(A)
                          );
                          return (
                            n?.autoJoin && t.push(a.catch(C)),
                            {
                              result: L(e)(a),
                              cancel() {
                                i.abort(j);
                              },
                            }
                          );
                        })(c.signal, f),
                        unsubscribe: e.unsubscribe,
                        subscribe: () => {
                          t.set(e.id, e);
                        },
                        cancelActiveListeners: () => {
                          e.pending.forEach((e, t, r) => {
                            e !== c && (e.abort(S), r.delete(e));
                          });
                        },
                        cancel: () => {
                          (c.abort(S), e.pending.delete(c));
                        },
                        throwIfCancelled: () => {
                          N(c.signal);
                        },
                      })
                    )
                  ));
              } catch (e) {
                e instanceof E || W(a, e, { raisedBy: "effect" });
              } finally {
                (await Promise.all(f),
                  c.abort(P),
                  ((e) => {
                    let t = r.get(e) ?? 1;
                    1 === t ? r.delete(e) : r.set(e, t - 1);
                  })(e),
                  e.pending.delete(c));
              }
            },
            c = () => {
              for (let e of r.keys()) Z(e);
              t.clear();
            };
          return {
            middleware: (e) => (r) => (n) => {
              let s;
              if (!(0, i.ve)(n)) return r(n);
              if (q.match(n)) return o(n.payload);
              if (Y.match(n)) return void c();
              if (V.match(n)) return u(n.payload);
              let f = e.getState(),
                d = () => {
                  if (f === $) throw Error(J(23));
                  return f;
                };
              try {
                if (((s = r(n)), t.size > 0)) {
                  let r = e.getState();
                  for (let i of Array.from(t.values())) {
                    let t = !1;
                    try {
                      t = i.predicate(n, r, f);
                    } catch (e) {
                      ((t = !1), W(a, e, { raisedBy: "predicate" }));
                    }
                    t && l(i, n, e, d);
                  }
                }
              } finally {
                f = $;
              }
              return s;
            },
            startListening: o,
            stopListening: u,
            clearListeners: c,
          };
        };
      function J(e) {
        return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
      }
      Symbol.for("rtk-state-proxy-original");
    },
    27012: (e, t, r) => {
      "use strict";
      function n(e) {
        return "object" == typeof e && "length" in e ? e : Array.from(e);
      }
      (r.d(t, { A: () => n }), Array.prototype.slice);
    },
    27243: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(35865),
        i = r(87744),
        a = r(77159);
      function o(e, t, r, c) {
        if (t === e) return !0;
        switch (typeof t) {
          case "object":
            return (function (e, t, r, n) {
              if (null == t) return !0;
              if (Array.isArray(t)) return u(e, t, r, n);
              if (t instanceof Map) {
                var a = e,
                  o = t,
                  c = r,
                  s = n;
                if (0 === o.size) return !0;
                if (!(a instanceof Map)) return !1;
                for (let [e, t] of o.entries()) if (!1 === c(a.get(e), t, e, a, o, s)) return !1;
                return !0;
              }
              if (t instanceof Set) return l(e, t, r, n);
              let f = Object.keys(t);
              if (null == e || i.isPrimitive(e)) return 0 === f.length;
              if (0 === f.length) return !0;
              if (n?.has(t)) return n.get(t) === e;
              n?.set(t, e);
              try {
                for (let a = 0; a < f.length; a++) {
                  let o = f[a];
                  if (
                    (!i.isPrimitive(e) && !(o in e)) ||
                    (void 0 === t[o] && void 0 !== e[o]) ||
                    (null === t[o] && null !== e[o]) ||
                    !r(e[o], t[o], o, e, t, n)
                  )
                    return !1;
                }
                return !0;
              } finally {
                n?.delete(t);
              }
            })(e, t, r, c);
          case "function":
            if (Object.keys(t).length > 0) return o(e, { ...t }, r, c);
            return a.eq(e, t);
          default:
            if (!n.isObject(e)) return a.eq(e, t);
            if ("string" == typeof t) return "" === t;
            return !0;
        }
      }
      function u(e, t, r, n) {
        if (0 === t.length) return !0;
        if (!Array.isArray(e)) return !1;
        let i = new Set();
        for (let a = 0; a < t.length; a++) {
          let o = t[a],
            u = !1;
          for (let l = 0; l < e.length; l++) {
            if (i.has(l)) continue;
            let c = e[l],
              s = !1;
            if ((r(c, o, a, e, t, n) && (s = !0), s)) {
              (i.add(l), (u = !0));
              break;
            }
          }
          if (!u) return !1;
        }
        return !0;
      }
      function l(e, t, r, n) {
        return 0 === t.size || (e instanceof Set && u([...e], [...t], r, n));
      }
      ((t.isMatchWith = function e(t, r, n) {
        return "function" != typeof n
          ? e(t, r, () => void 0)
          : o(
              t,
              r,
              function e(t, r, i, a, u, l) {
                let c = n(t, r, i, a, u, l);
                return void 0 !== c ? !!c : o(t, r, e, l);
              },
              new Map()
            );
      }),
        (t.isSetMatch = l));
    },
    27588: (e, t, r) => {
      "use strict";
      r.d(t, { A$: () => i, HK: () => o, Lp: () => n, et: () => a });
      var n = (e) => e.layout.width,
        i = (e) => e.layout.height,
        a = (e) => e.layout.scale,
        o = (e) => e.layout.margin;
    },
    27761: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(93276);
      t.property = function (e) {
        return function (t) {
          return n.get(t, e);
        };
      };
    },
    28138: (e, t, r) => {
      "use strict";
      r(95962);
    },
    29439: (e, t, r) => {
      "use strict";
      function n(e, t, r) {
        return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
      }
      r.d(t, { v: () => n });
    },
    29533: function (e, t, r) {
      var n;
      !(function (i) {
        "use strict";
        var a,
          o = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
          },
          u = !0,
          l = "[DecimalError] ",
          c = l + "Invalid argument: ",
          s = l + "Exponent out of range: ",
          f = Math.floor,
          d = Math.pow,
          h = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          p = f(1286742750677284.5),
          y = {};
        function v(e, t) {
          var r,
            n,
            i,
            a,
            o,
            l,
            c,
            s,
            f = e.constructor,
            d = f.precision;
          if (!e.s || !t.s) return (t.s || (t = new f(e)), u ? A(t, d) : t);
          if (((c = e.d), (s = t.d), (o = e.e), (i = t.e), (c = c.slice()), (a = o - i))) {
            for (
              a < 0 ? ((n = c), (a = -a), (l = s.length)) : ((n = s), (i = o), (l = c.length)),
                a > (l = (o = Math.ceil(d / 7)) > l ? o + 1 : l + 1) && ((a = l), (n.length = 1)),
                n.reverse();
              a--;
            )
              n.push(0);
            n.reverse();
          }
          for (
            (l = c.length) - (a = s.length) < 0 && ((a = l), (n = s), (s = c), (c = n)), r = 0;
            a;
          )
            ((r = ((c[--a] = c[a] + s[a] + r) / 1e7) | 0), (c[a] %= 1e7));
          for (r && (c.unshift(r), ++i), l = c.length; 0 == c[--l]; ) c.pop();
          return ((t.d = c), (t.e = i), u ? A(t, d) : t);
        }
        function g(e, t, r) {
          if (e !== ~~e || e < t || e > r) throw Error(c + e);
        }
        function m(e) {
          var t,
            r,
            n,
            i = e.length - 1,
            a = "",
            o = e[0];
          if (i > 0) {
            for (a += o, t = 1; t < i; t++)
              ((r = 7 - (n = e[t] + "").length) && (a += _(r)), (a += n));
            (r = 7 - (n = (o = e[t]) + "").length) && (a += _(r));
          } else if (0 === o) return "0";
          for (; o % 10 == 0; ) o /= 10;
          return a + o;
        }
        ((y.absoluteValue = y.abs =
          function () {
            var e = new this.constructor(this);
            return (e.s && (e.s = 1), e);
          }),
          (y.comparedTo = y.cmp =
            function (e) {
              var t, r, n, i;
              if (((e = new this.constructor(e)), this.s !== e.s)) return this.s || -e.s;
              if (this.e !== e.e) return (this.e > e.e) ^ (this.s < 0) ? 1 : -1;
              for (t = 0, r = (n = this.d.length) < (i = e.d.length) ? n : i; t < r; ++t)
                if (this.d[t] !== e.d[t]) return (this.d[t] > e.d[t]) ^ (this.s < 0) ? 1 : -1;
              return n === i ? 0 : (n > i) ^ (this.s < 0) ? 1 : -1;
            }),
          (y.decimalPlaces = y.dp =
            function () {
              var e = this.d.length - 1,
                t = (e - this.e) * 7;
              if ((e = this.d[e])) for (; e % 10 == 0; e /= 10) t--;
              return t < 0 ? 0 : t;
            }),
          (y.dividedBy = y.div =
            function (e) {
              return b(this, new this.constructor(e));
            }),
          (y.dividedToIntegerBy = y.idiv =
            function (e) {
              var t = this.constructor;
              return A(b(this, new t(e), 0, 1), t.precision);
            }),
          (y.equals = y.eq =
            function (e) {
              return !this.cmp(e);
            }),
          (y.exponent = function () {
            return w(this);
          }),
          (y.greaterThan = y.gt =
            function (e) {
              return this.cmp(e) > 0;
            }),
          (y.greaterThanOrEqualTo = y.gte =
            function (e) {
              return this.cmp(e) >= 0;
            }),
          (y.isInteger = y.isint =
            function () {
              return this.e > this.d.length - 2;
            }),
          (y.isNegative = y.isneg =
            function () {
              return this.s < 0;
            }),
          (y.isPositive = y.ispos =
            function () {
              return this.s > 0;
            }),
          (y.isZero = function () {
            return 0 === this.s;
          }),
          (y.lessThan = y.lt =
            function (e) {
              return 0 > this.cmp(e);
            }),
          (y.lessThanOrEqualTo = y.lte =
            function (e) {
              return 1 > this.cmp(e);
            }),
          (y.logarithm = y.log =
            function (e) {
              var t,
                r = this.constructor,
                n = r.precision,
                i = n + 5;
              if (void 0 === e) e = new r(10);
              else if ((e = new r(e)).s < 1 || e.eq(a)) throw Error(l + "NaN");
              if (this.s < 1) throw Error(l + (this.s ? "NaN" : "-Infinity"));
              return this.eq(a)
                ? new r(0)
                : ((u = !1), (t = b(M(this, i), M(e, i), i)), (u = !0), A(t, n));
            }),
          (y.minus = y.sub =
            function (e) {
              return (
                (e = new this.constructor(e)),
                this.s == e.s ? S(this, e) : v(this, ((e.s = -e.s), e))
              );
            }),
          (y.modulo = y.mod =
            function (e) {
              var t,
                r = this.constructor,
                n = r.precision;
              if (!(e = new r(e)).s) throw Error(l + "NaN");
              return this.s
                ? ((u = !1), (t = b(this, e, 0, 1).times(e)), (u = !0), this.minus(t))
                : A(new r(this), n);
            }),
          (y.naturalExponential = y.exp =
            function () {
              return x(this);
            }),
          (y.naturalLogarithm = y.ln =
            function () {
              return M(this);
            }),
          (y.negated = y.neg =
            function () {
              var e = new this.constructor(this);
              return ((e.s = -e.s || 0), e);
            }),
          (y.plus = y.add =
            function (e) {
              return (
                (e = new this.constructor(e)),
                this.s == e.s ? v(this, e) : S(this, ((e.s = -e.s), e))
              );
            }),
          (y.precision = y.sd =
            function (e) {
              var t, r, n;
              if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(c + e);
              if (((t = w(this) + 1), (r = 7 * (n = this.d.length - 1) + 1), (n = this.d[n]))) {
                for (; n % 10 == 0; n /= 10) r--;
                for (n = this.d[0]; n >= 10; n /= 10) r++;
              }
              return e && t > r ? t : r;
            }),
          (y.squareRoot = y.sqrt =
            function () {
              var e,
                t,
                r,
                n,
                i,
                a,
                o,
                c = this.constructor;
              if (this.s < 1) {
                if (!this.s) return new c(0);
                throw Error(l + "NaN");
              }
              for (
                e = w(this),
                  u = !1,
                  0 == (i = Math.sqrt(+this)) || i == 1 / 0
                    ? (((t = m(this.d)).length + e) % 2 == 0 && (t += "0"),
                      (i = Math.sqrt(t)),
                      (e = f((e + 1) / 2) - (e < 0 || e % 2)),
                      (n = new c(
                        (t =
                          i == 1 / 0
                            ? "5e" + e
                            : (t = i.toExponential()).slice(0, t.indexOf("e") + 1) + e)
                      )))
                    : (n = new c(i.toString())),
                  i = o = (r = c.precision) + 3;
                ;
              )
                if (
                  ((n = (a = n).plus(b(this, a, o + 2)).times(0.5)),
                  m(a.d).slice(0, o) === (t = m(n.d)).slice(0, o))
                ) {
                  if (((t = t.slice(o - 3, o + 1)), i == o && "4999" == t)) {
                    if ((A(a, r + 1, 0), a.times(a).eq(this))) {
                      n = a;
                      break;
                    }
                  } else if ("9999" != t) break;
                  o += 4;
                }
              return ((u = !0), A(n, r));
            }),
          (y.times = y.mul =
            function (e) {
              var t,
                r,
                n,
                i,
                a,
                o,
                l,
                c,
                s,
                f = this.constructor,
                d = this.d,
                h = (e = new f(e)).d;
              if (!this.s || !e.s) return new f(0);
              for (
                e.s *= this.s,
                  r = this.e + e.e,
                  (c = d.length) < (s = h.length) &&
                    ((a = d), (d = h), (h = a), (o = c), (c = s), (s = o)),
                  a = [],
                  n = o = c + s;
                n--;
              )
                a.push(0);
              for (n = s; --n >= 0; ) {
                for (t = 0, i = c + n; i > n; )
                  ((l = a[i] + h[n] * d[i - n - 1] + t),
                    (a[i--] = (l % 1e7) | 0),
                    (t = (l / 1e7) | 0));
                a[i] = ((a[i] + t) % 1e7) | 0;
              }
              for (; !a[--o]; ) a.pop();
              return (t ? ++r : a.shift(), (e.d = a), (e.e = r), u ? A(e, f.precision) : e);
            }),
          (y.toDecimalPlaces = y.todp =
            function (e, t) {
              var r = this,
                n = r.constructor;
              return ((r = new n(r)), void 0 === e)
                ? r
                : (g(e, 0, 1e9),
                  void 0 === t ? (t = n.rounding) : g(t, 0, 8),
                  A(r, e + w(r) + 1, t));
            }),
          (y.toExponential = function (e, t) {
            var r,
              n = this,
              i = n.constructor;
            return (
              void 0 === e
                ? (r = P(n, !0))
                : (g(e, 0, 1e9),
                  void 0 === t ? (t = i.rounding) : g(t, 0, 8),
                  (r = P((n = A(new i(n), e + 1, t)), !0, e + 1))),
              r
            );
          }),
          (y.toFixed = function (e, t) {
            var r,
              n,
              i = this.constructor;
            return void 0 === e
              ? P(this)
              : (g(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : g(t, 0, 8),
                (r = P((n = A(new i(this), e + w(this) + 1, t)).abs(), !1, e + w(n) + 1)),
                this.isneg() && !this.isZero() ? "-" + r : r);
          }),
          (y.toInteger = y.toint =
            function () {
              var e = this.constructor;
              return A(new e(this), w(this) + 1, e.rounding);
            }),
          (y.toNumber = function () {
            return +this;
          }),
          (y.toPower = y.pow =
            function (e) {
              var t,
                r,
                n,
                i,
                o,
                c,
                s = this,
                d = s.constructor,
                h = +(e = new d(e));
              if (!e.s) return new d(a);
              if (!(s = new d(s)).s) {
                if (e.s < 1) throw Error(l + "Infinity");
                return s;
              }
              if (s.eq(a)) return s;
              if (((n = d.precision), e.eq(a))) return A(s, n);
              if (((c = (t = e.e) >= (r = e.d.length - 1)), (o = s.s), c)) {
                if ((r = h < 0 ? -h : h) <= 0x1fffffffffffff) {
                  for (
                    i = new d(a), t = Math.ceil(n / 7 + 4), u = !1;
                    r % 2 && E((i = i.times(s)).d, t), 0 !== (r = f(r / 2));
                  )
                    E((s = s.times(s)).d, t);
                  return ((u = !0), e.s < 0 ? new d(a).div(i) : A(i, n));
                }
              } else if (o < 0) throw Error(l + "NaN");
              return (
                (o = o < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1),
                (s.s = 1),
                (u = !1),
                (i = e.times(M(s, n + 12))),
                (u = !0),
                ((i = x(i)).s = o),
                i
              );
            }),
          (y.toPrecision = function (e, t) {
            var r,
              n,
              i = this,
              a = i.constructor;
            return (
              void 0 === e
                ? ((r = w(i)), (n = P(i, r <= a.toExpNeg || r >= a.toExpPos)))
                : (g(e, 1, 1e9),
                  void 0 === t ? (t = a.rounding) : g(t, 0, 8),
                  (r = w((i = A(new a(i), e, t)))),
                  (n = P(i, e <= r || r <= a.toExpNeg, e))),
              n
            );
          }),
          (y.toSignificantDigits = y.tosd =
            function (e, t) {
              var r = this.constructor;
              return (
                void 0 === e
                  ? ((e = r.precision), (t = r.rounding))
                  : (g(e, 1, 1e9), void 0 === t ? (t = r.rounding) : g(t, 0, 8)),
                A(new r(this), e, t)
              );
            }),
          (y.toString =
            y.valueOf =
            y.val =
            y.toJSON =
              function () {
                var e = w(this),
                  t = this.constructor;
                return P(this, e <= t.toExpNeg || e >= t.toExpPos);
              }));
        var b = (function () {
          function e(e, t) {
            var r,
              n = 0,
              i = e.length;
            for (e = e.slice(); i--; )
              ((r = e[i] * t + n), (e[i] = (r % 1e7) | 0), (n = (r / 1e7) | 0));
            return (n && e.unshift(n), e);
          }
          function t(e, t, r, n) {
            var i, a;
            if (r != n) a = r > n ? 1 : -1;
            else
              for (i = a = 0; i < r; i++)
                if (e[i] != t[i]) {
                  a = e[i] > t[i] ? 1 : -1;
                  break;
                }
            return a;
          }
          function r(e, t, r) {
            for (var n = 0; r--; )
              ((e[r] -= n), (n = +(e[r] < t[r])), (e[r] = 1e7 * n + e[r] - t[r]));
            for (; !e[0] && e.length > 1; ) e.shift();
          }
          return function (n, i, a, o) {
            var u,
              c,
              s,
              f,
              d,
              h,
              p,
              y,
              v,
              g,
              m,
              b,
              x,
              O,
              _,
              M,
              j,
              S,
              P = n.constructor,
              E = n.s == i.s ? 1 : -1,
              k = n.d,
              C = i.d;
            if (!n.s) return new P(n);
            if (!i.s) throw Error(l + "Division by zero");
            for (
              s = 0, c = n.e - i.e, j = C.length, _ = k.length, y = (p = new P(E)).d = [];
              C[s] == (k[s] || 0);
            )
              ++s;
            if (
              (C[s] > (k[s] || 0) && --c,
              (b = null == a ? (a = P.precision) : o ? a + (w(n) - w(i)) + 1 : a) < 0)
            )
              return new P(0);
            if (((b = (b / 7 + 2) | 0), (s = 0), 1 == j))
              for (f = 0, C = C[0], b++; (s < _ || f) && b--; s++)
                ((x = 1e7 * f + (k[s] || 0)), (y[s] = (x / C) | 0), (f = (x % C) | 0));
            else {
              for (
                (f = (1e7 / (C[0] + 1)) | 0) > 1 &&
                  ((C = e(C, f)), (k = e(k, f)), (j = C.length), (_ = k.length)),
                  O = j,
                  g = (v = k.slice(0, j)).length;
                g < j;
              )
                v[g++] = 0;
              ((S = C.slice()).unshift(0), (M = C[0]), C[1] >= 1e7 / 2 && ++M);
              do
                ((f = 0),
                  (u = t(C, v, j, g)) < 0
                    ? ((m = v[0]),
                      j != g && (m = 1e7 * m + (v[1] || 0)),
                      (f = (m / M) | 0) > 1
                        ? (f >= 1e7 && (f = 1e7 - 1),
                          (h = (d = e(C, f)).length),
                          (g = v.length),
                          1 == (u = t(d, v, h, g)) && (f--, r(d, j < h ? S : C, h)))
                        : (0 == f && (u = f = 1), (d = C.slice())),
                      (h = d.length) < g && d.unshift(0),
                      r(v, d, g),
                      -1 == u &&
                        ((g = v.length), (u = t(C, v, j, g)) < 1 && (f++, r(v, j < g ? S : C, g))),
                      (g = v.length))
                    : 0 === u && (f++, (v = [0])),
                  (y[s++] = f),
                  u && v[0] ? (v[g++] = k[O] || 0) : ((v = [k[O]]), (g = 1)));
              while ((O++ < _ || void 0 !== v[0]) && b--);
            }
            return (y[0] || y.shift(), (p.e = c), A(p, o ? a + w(p) + 1 : a));
          };
        })();
        function x(e, t) {
          var r,
            n,
            i,
            o,
            l,
            c = 0,
            f = 0,
            h = e.constructor,
            p = h.precision;
          if (w(e) > 16) throw Error(s + w(e));
          if (!e.s) return new h(a);
          for (null == t ? ((u = !1), (l = p)) : (l = t), o = new h(0.03125); e.abs().gte(0.1); )
            ((e = e.times(o)), (f += 5));
          for (
            l += ((Math.log(d(2, f)) / Math.LN10) * 2 + 5) | 0,
              r = n = i = new h(a),
              h.precision = l;
            ;
          ) {
            if (
              ((n = A(n.times(e), l)),
              (r = r.times(++c)),
              m((o = i.plus(b(n, r, l))).d).slice(0, l) === m(i.d).slice(0, l))
            ) {
              for (; f--; ) i = A(i.times(i), l);
              return ((h.precision = p), null == t ? ((u = !0), A(i, p)) : i);
            }
            i = o;
          }
        }
        function w(e) {
          for (var t = 7 * e.e, r = e.d[0]; r >= 10; r /= 10) t++;
          return t;
        }
        function O(e, t, r) {
          if (t > e.LN10.sd())
            throw ((u = !0), r && (e.precision = r), Error(l + "LN10 precision limit exceeded"));
          return A(new e(e.LN10), t);
        }
        function _(e) {
          for (var t = ""; e--; ) t += "0";
          return t;
        }
        function M(e, t) {
          var r,
            n,
            i,
            o,
            c,
            s,
            f,
            d,
            h,
            p = 1,
            y = e,
            v = y.d,
            g = y.constructor,
            x = g.precision;
          if (y.s < 1) throw Error(l + (y.s ? "NaN" : "-Infinity"));
          if (y.eq(a)) return new g(0);
          if ((null == t ? ((u = !1), (d = x)) : (d = t), y.eq(10)))
            return (null == t && (u = !0), O(g, d));
          if (
            ((g.precision = d += 10), (n = (r = m(v)).charAt(0)), !(15e14 > Math.abs((o = w(y)))))
          )
            return (
              (f = O(g, d + 2, x).times(o + "")),
              (y = M(new g(n + "." + r.slice(1)), d - 10).plus(f)),
              (g.precision = x),
              null == t ? ((u = !0), A(y, x)) : y
            );
          for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
            ((n = (r = m((y = y.times(e)).d)).charAt(0)), p++);
          for (
            o = w(y),
              n > 1 ? ((y = new g("0." + r)), o++) : (y = new g(n + "." + r.slice(1))),
              s = c = y = b(y.minus(a), y.plus(a), d),
              h = A(y.times(y), d),
              i = 3;
            ;
          ) {
            if (
              ((c = A(c.times(h), d)),
              m((f = s.plus(b(c, new g(i), d))).d).slice(0, d) === m(s.d).slice(0, d))
            )
              return (
                (s = s.times(2)),
                0 !== o && (s = s.plus(O(g, d + 2, x).times(o + ""))),
                (s = b(s, new g(p), d)),
                (g.precision = x),
                null == t ? ((u = !0), A(s, x)) : s
              );
            ((s = f), (i += 2));
          }
        }
        function j(e, t) {
          var r, n, i;
          for (
            (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
              (n = t.search(/e/i)) > 0
                ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
                : r < 0 && (r = t.length),
              n = 0;
            48 === t.charCodeAt(n);
          )
            ++n;
          for (i = t.length; 48 === t.charCodeAt(i - 1); ) --i;
          if ((t = t.slice(n, i))) {
            if (
              ((i -= n),
              (e.e = f((r = r - n - 1) / 7)),
              (e.d = []),
              (n = (r + 1) % 7),
              r < 0 && (n += 7),
              n < i)
            ) {
              for (n && e.d.push(+t.slice(0, n)), i -= 7; n < i; ) e.d.push(+t.slice(n, (n += 7)));
              n = 7 - (t = t.slice(n)).length;
            } else n -= i;
            for (; n--; ) t += "0";
            if ((e.d.push(+t), u && (e.e > p || e.e < -p))) throw Error(s + r);
          } else ((e.s = 0), (e.e = 0), (e.d = [0]));
          return e;
        }
        function A(e, t, r) {
          var n,
            i,
            a,
            o,
            l,
            c,
            h,
            y,
            v = e.d;
          for (o = 1, a = v[0]; a >= 10; a /= 10) o++;
          if ((n = t - o) < 0) ((n += 7), (i = t), (h = v[(y = 0)]));
          else {
            if ((y = Math.ceil((n + 1) / 7)) >= (a = v.length)) return e;
            for (o = 1, h = a = v[y]; a >= 10; a /= 10) o++;
            ((n %= 7), (i = n - 7 + o));
          }
          if (
            (void 0 !== r &&
              ((l = ((h / (a = d(10, o - i - 1))) % 10) | 0),
              (c = t < 0 || void 0 !== v[y + 1] || h % a),
              (c =
                r < 4
                  ? (l || c) && (0 == r || r == (e.s < 0 ? 3 : 2))
                  : l > 5 ||
                    (5 == l &&
                      (4 == r ||
                        c ||
                        (6 == r &&
                          ((n > 0 ? (i > 0 ? h / d(10, o - i) : 0) : v[y - 1]) % 10) & 1) ||
                        r == (e.s < 0 ? 8 : 7))))),
            t < 1 || !v[0])
          )
            return (
              c
                ? ((a = w(e)),
                  (v.length = 1),
                  (t = t - a - 1),
                  (v[0] = d(10, (7 - (t % 7)) % 7)),
                  (e.e = f(-t / 7) || 0))
                : ((v.length = 1), (v[0] = e.e = e.s = 0)),
              e
            );
          if (
            (0 == n
              ? ((v.length = y), (a = 1), y--)
              : ((v.length = y + 1),
                (a = d(10, 7 - n)),
                (v[y] = i > 0 ? (((h / d(10, o - i)) % d(10, i)) | 0) * a : 0)),
            c)
          )
            for (;;)
              if (0 == y) {
                1e7 == (v[0] += a) && ((v[0] = 1), ++e.e);
                break;
              } else {
                if (((v[y] += a), 1e7 != v[y])) break;
                ((v[y--] = 0), (a = 1));
              }
          for (n = v.length; 0 === v[--n]; ) v.pop();
          if (u && (e.e > p || e.e < -p)) throw Error(s + w(e));
          return e;
        }
        function S(e, t) {
          var r,
            n,
            i,
            a,
            o,
            l,
            c,
            s,
            f,
            d,
            h = e.constructor,
            p = h.precision;
          if (!e.s || !t.s) return (t.s ? (t.s = -t.s) : (t = new h(e)), u ? A(t, p) : t);
          if (((c = e.d), (d = t.d), (n = t.e), (s = e.e), (c = c.slice()), (o = s - n))) {
            for (
              (f = o < 0)
                ? ((r = c), (o = -o), (l = d.length))
                : ((r = d), (n = s), (l = c.length)),
                o > (i = Math.max(Math.ceil(p / 7), l) + 2) && ((o = i), (r.length = 1)),
                r.reverse(),
                i = o;
              i--;
            )
              r.push(0);
            r.reverse();
          } else {
            for ((f = (i = c.length) < (l = d.length)) && (l = i), i = 0; i < l; i++)
              if (c[i] != d[i]) {
                f = c[i] < d[i];
                break;
              }
            o = 0;
          }
          for (
            f && ((r = c), (c = d), (d = r), (t.s = -t.s)), l = c.length, i = d.length - l;
            i > 0;
            --i
          )
            c[l++] = 0;
          for (i = d.length; i > o; ) {
            if (c[--i] < d[i]) {
              for (a = i; a && 0 === c[--a]; ) c[a] = 1e7 - 1;
              (--c[a], (c[i] += 1e7));
            }
            c[i] -= d[i];
          }
          for (; 0 === c[--l]; ) c.pop();
          for (; 0 === c[0]; c.shift()) --n;
          return c[0] ? ((t.d = c), (t.e = n), u ? A(t, p) : t) : new h(0);
        }
        function P(e, t, r) {
          var n,
            i = w(e),
            a = m(e.d),
            o = a.length;
          return (
            t
              ? (r && (n = r - o) > 0
                  ? (a = a.charAt(0) + "." + a.slice(1) + _(n))
                  : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
                (a = a + (i < 0 ? "e" : "e+") + i))
              : i < 0
                ? ((a = "0." + _(-i - 1) + a), r && (n = r - o) > 0 && (a += _(n)))
                : i >= o
                  ? ((a += _(i + 1 - o)), r && (n = r - i - 1) > 0 && (a = a + "." + _(n)))
                  : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)),
                    r && (n = r - o) > 0 && (i + 1 === o && (a += "."), (a += _(n)))),
            e.s < 0 ? "-" + a : a
          );
        }
        function E(e, t) {
          if (e.length > t) return ((e.length = t), !0);
        }
        function k(e) {
          if (!e || "object" != typeof e) throw Error(l + "Object expected");
          var t,
            r,
            n,
            i = [
              "precision",
              1,
              1e9,
              "rounding",
              0,
              8,
              "toExpNeg",
              -1 / 0,
              0,
              "toExpPos",
              0,
              1 / 0,
            ];
          for (t = 0; t < i.length; t += 3)
            if (void 0 !== (n = e[(r = i[t])]))
              if (f(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
              else throw Error(c + r + ": " + n);
          if (void 0 !== (n = e[(r = "LN10")]))
            if (n == Math.LN10) this[r] = new this(n);
            else throw Error(c + r + ": " + n);
          return this;
        }
        (((o = (function e(t) {
          var r, n, i;
          function a(e) {
            if (!(this instanceof a)) return new a(e);
            if (((this.constructor = a), e instanceof a)) {
              ((this.s = e.s), (this.e = e.e), (this.d = (e = e.d) ? e.slice() : e));
              return;
            }
            if ("number" == typeof e) {
              if (0 * e != 0) throw Error(c + e);
              if (e > 0) this.s = 1;
              else if (e < 0) ((e = -e), (this.s = -1));
              else {
                ((this.s = 0), (this.e = 0), (this.d = [0]));
                return;
              }
              if (e === ~~e && e < 1e7) {
                ((this.e = 0), (this.d = [e]));
                return;
              }
              return j(this, e.toString());
            }
            if ("string" != typeof e) throw Error(c + e);
            if (
              (45 === e.charCodeAt(0) ? ((e = e.slice(1)), (this.s = -1)) : (this.s = 1), h.test(e))
            )
              j(this, e);
            else throw Error(c + e);
          }
          if (
            ((a.prototype = y),
            (a.ROUND_UP = 0),
            (a.ROUND_DOWN = 1),
            (a.ROUND_CEIL = 2),
            (a.ROUND_FLOOR = 3),
            (a.ROUND_HALF_UP = 4),
            (a.ROUND_HALF_DOWN = 5),
            (a.ROUND_HALF_EVEN = 6),
            (a.ROUND_HALF_CEIL = 7),
            (a.ROUND_HALF_FLOOR = 8),
            (a.clone = e),
            (a.config = a.set = k),
            void 0 === t && (t = {}),
            t)
          )
            for (
              r = 0, i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
              r < i.length;
            )
              t.hasOwnProperty((n = i[r++])) || (t[n] = this[n]);
          return (a.config(t), a);
        })(o)).default = o.Decimal =
          o),
          (a = new o(1)),
          void 0 ===
            (n = function () {
              return o;
            }.call(t, r, t, e)) || (e.exports = n));
      })(0);
    },
    30125: (e, t, r) => {
      "use strict";
      var n = r(12115),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
        a = n.useState,
        o = n.useEffect,
        u = n.useLayoutEffect,
        l = n.useDebugValue;
      function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !i(e, r);
        } catch (e) {
          return !0;
        }
      }
      var s =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = a({ inst: { value: r, getSnapshot: t } }),
                i = n[0].inst,
                s = n[1];
              return (
                u(
                  function () {
                    ((i.value = r), (i.getSnapshot = t), c(i) && s({ inst: i }));
                  },
                  [e, r, t]
                ),
                o(
                  function () {
                    return (
                      c(i) && s({ inst: i }),
                      e(function () {
                        c(i) && s({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                l(r),
                r
              );
            };
      t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : s;
    },
    30732: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => n });
      var n = {
        grid: -100,
        barBackground: -50,
        area: 100,
        cursorRectangle: 200,
        bar: 300,
        line: 400,
        axis: 500,
        scatter: 600,
        activeBar: 1e3,
        cursorLine: 1100,
        activeDot: 1200,
        label: 2e3,
      };
    },
    30808: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(94202),
        i = r(52451),
        a = r(44078),
        o = r(25723);
      t.has = function (e, t) {
        let r;
        if (
          0 ===
          (r = Array.isArray(t)
            ? t
            : "string" == typeof t && n.isDeepKey(t) && e?.[t] == null
              ? o.toPath(t)
              : [t]).length
        )
          return !1;
        let u = e;
        for (let e = 0; e < r.length; e++) {
          let t = r[e];
          if (
            (null == u || !Object.hasOwn(u, t)) &&
            !((Array.isArray(u) || a.isArguments(u)) && i.isIndex(t) && t < u.length)
          )
            return !1;
          u = u[t];
        }
        return !0;
      };
    },
    31441: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.toString = function e(t) {
          if (null == t) return "";
          if ("string" == typeof t) return t;
          if (Array.isArray(t)) return t.map(e).join(",");
          let r = String(t);
          return "0" === r && Object.is(Number(t), -0) ? "-0" : r;
        }));
    },
    31474: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => l });
      var n = r(49580),
        i = r(51023),
        a = r(29439);
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : o(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var l = (e, t, r, o, l, c, s) => {
        if (null != t && null != c) {
          var { chartData: f, computedData: d, dataStartIndex: h, dataEndIndex: p } = r;
          return e.reduce((e, r) => {
            var y,
              v,
              g,
              m,
              b,
              { dataDefinedOnItem: x, settings: w } = r,
              O = ((y = x), (v = f), null != y ? y : v),
              _ = Array.isArray(O) ? (0, a.v)(O, h, p) : O,
              M = null != (g = null == w ? void 0 : w.dataKey) ? g : o,
              j = null == w ? void 0 : w.nameKey;
            return (
              Array.isArray(
                (m =
                  o && Array.isArray(_) && !Array.isArray(_[0]) && "axis" === s
                    ? (0, n.eP)(_, o, l)
                    : c(_, t, d, j))
              )
                ? m.forEach((t) => {
                    var r = u(
                      u({}, w),
                      {},
                      { name: t.name, unit: t.unit, color: void 0, fill: void 0 }
                    );
                    e.push(
                      (0, i.GF)({
                        tooltipEntrySettings: r,
                        dataKey: t.dataKey,
                        payload: t.payload,
                        value: (0, i.kr)(t.payload, t.dataKey),
                        name: t.name,
                      })
                    );
                  })
                : e.push(
                    (0, i.GF)({
                      tooltipEntrySettings: w,
                      dataKey: M,
                      payload: m,
                      value: (0, i.kr)(m, M),
                      name: null != (b = (0, i.kr)(m, j)) ? b : null == w ? void 0 : w.name,
                    })
                  ),
              e
            );
          }, []);
        }
      };
    },
    31730: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(13183),
        i = r(36704),
        a = r(79835),
        o = r(57048);
      t.uniqBy = function (e, t = i.identity) {
        return a.isArrayLikeObject(e) ? n.uniqBy(Array.from(e), o.iteratee(t)) : [];
      };
    },
    32333: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.getTag = function (e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : Object.prototype.toString.call(e);
        }));
    },
    32403: (e, t, r) => {
      "use strict";
      r.d(t, { x: () => n });
      var n = (e) => e.options.tooltipPayloadSearcher;
    },
    33308: (e, t, r) => {
      "use strict";
      r.d(t, { dl: () => l, lJ: () => u, uN: () => a });
      var n = r(26286),
        i = r(49580);
      function a(e, t) {
        if (t) {
          var r = Number.parseInt(t, 10);
          if (!(0, i.M8)(r)) return null == e ? void 0 : e[r];
        }
      }
      var o = (0, n.Z0)({
          name: "options",
          initialState: {
            chartName: "",
            tooltipPayloadSearcher: void 0,
            eventEmitter: void 0,
            defaultTooltipEventType: "axis",
          },
          reducers: {
            createEventEmitter: (e) => {
              null == e.eventEmitter && (e.eventEmitter = Symbol("rechartsEventEmitter"));
            },
          },
        }),
        u = o.reducer,
        { createEventEmitter: l } = o.actions;
    },
    33323: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.last = function (e) {
          return e[e.length - 1];
        }));
    },
    33383: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(35555);
      t.cloneDeep = function (e) {
        return n.cloneDeepWith(e);
      };
    },
    33420: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => el });
      var n = r(12115),
        i = r(47650),
        a = r(97354),
        o = r.n(a),
        u = r(2821),
        l = r(49580);
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : s(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function d(e) {
        return Array.isArray(e) && (0, l.vh)(e[0]) && (0, l.vh)(e[1]) ? e.join(" ~ ") : e;
      }
      var h = (e) => {
          var {
              separator: t = " : ",
              contentStyle: r = {},
              itemStyle: i = {},
              labelStyle: a = {},
              payload: s,
              formatter: h,
              itemSorter: p,
              wrapperClassName: y,
              labelClassName: v,
              label: g,
              labelFormatter: m,
              accessibilityLayer: b = !1,
            } = e,
            x = f(
              {
                margin: 0,
                padding: 10,
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                whiteSpace: "nowrap",
              },
              r
            ),
            w = f({ margin: 0 }, a),
            O = !(0, l.uy)(g),
            _ = O ? g : "",
            M = (0, u.$)("recharts-default-tooltip", y),
            j = (0, u.$)("recharts-tooltip-label", v);
          return (
            O && m && null != s && (_ = m(g, s)),
            n.createElement(
              "div",
              c({ className: M, style: x }, b ? { role: "status", "aria-live": "assertive" } : {}),
              n.createElement(
                "p",
                { className: j, style: w },
                n.isValidElement(_) ? _ : "".concat(_)
              ),
              (() => {
                if (s && s.length) {
                  var e = (p ? o()(s, p) : s).map((e, r) => {
                    if ("none" === e.type) return null;
                    var a = e.formatter || h || d,
                      { value: o, name: u } = e,
                      c = o,
                      p = u;
                    if (a) {
                      var y = a(o, u, e, r, s);
                      if (Array.isArray(y)) [c, p] = y;
                      else {
                        if (null == y) return null;
                        c = y;
                      }
                    }
                    var v = f(
                      {
                        display: "block",
                        paddingTop: 4,
                        paddingBottom: 4,
                        color: e.color || "#000",
                      },
                      i
                    );
                    return n.createElement(
                      "li",
                      {
                        className: "recharts-tooltip-item",
                        key: "tooltip-item-".concat(r),
                        style: v,
                      },
                      (0, l.vh)(p)
                        ? n.createElement("span", { className: "recharts-tooltip-item-name" }, p)
                        : null,
                      (0, l.vh)(p)
                        ? n.createElement(
                            "span",
                            { className: "recharts-tooltip-item-separator" },
                            t
                          )
                        : null,
                      n.createElement("span", { className: "recharts-tooltip-item-value" }, c),
                      n.createElement(
                        "span",
                        { className: "recharts-tooltip-item-unit" },
                        e.unit || ""
                      )
                    );
                  });
                  return n.createElement(
                    "ul",
                    { className: "recharts-tooltip-item-list", style: { padding: 0, margin: 0 } },
                    e
                  );
                }
                return null;
              })()
            )
          );
        },
        p = "recharts-tooltip-wrapper",
        y = { visibility: "hidden" };
      function v(e) {
        var {
          allowEscapeViewBox: t,
          coordinate: r,
          key: n,
          offsetTopLeft: i,
          position: a,
          reverseDirection: o,
          tooltipDimension: u,
          viewBox: c,
          viewBoxDimension: s,
        } = e;
        if (a && (0, l.Et)(a[n])) return a[n];
        var f = r[n] - u - (i > 0 ? i : 0),
          d = r[n] + i;
        if (t[n]) return o[n] ? f : d;
        var h = c[n];
        return null == h
          ? 0
          : o[n]
            ? f < h
              ? Math.max(d, h)
              : Math.max(f, h)
            : null == s
              ? 0
              : d + u > h + s
                ? Math.max(f, h)
                : Math.max(d, h);
      }
      function g(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                b(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : g(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function b(e, t, r) {
        var n;
        return (
          (t =
            "symbol" ==
            typeof (n = (function (e, t) {
              if ("object" != typeof e || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(t, "string"))
              ? n
              : n + "") in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      class x extends n.PureComponent {
        componentDidMount() {
          document.addEventListener("keydown", this.handleKeyDown);
        }
        componentWillUnmount() {
          document.removeEventListener("keydown", this.handleKeyDown);
        }
        componentDidUpdate() {
          var e, t;
          this.state.dismissed &&
            ((null == (e = this.props.coordinate) ? void 0 : e.x) !==
              this.state.dismissedAtCoordinate.x ||
              (null == (t = this.props.coordinate) ? void 0 : t.y) !==
                this.state.dismissedAtCoordinate.y) &&
            (this.state.dismissed = !1);
        }
        render() {
          var {
              active: e,
              allowEscapeViewBox: t,
              animationDuration: r,
              animationEasing: i,
              children: a,
              coordinate: o,
              hasPayload: c,
              isAnimationActive: s,
              offset: f,
              position: d,
              reverseDirection: h,
              useTranslate3d: g,
              viewBox: b,
              wrapperStyle: x,
              lastBoundingBox: w,
              innerRef: O,
              hasPortalFromProps: _,
            } = this.props,
            { cssClasses: M, cssProperties: j } = (function (e) {
              var t,
                r,
                n,
                {
                  allowEscapeViewBox: i,
                  coordinate: a,
                  offsetTopLeft: o,
                  position: c,
                  reverseDirection: s,
                  tooltipBox: f,
                  useTranslate3d: d,
                  viewBox: h,
                } = e;
              return {
                cssProperties: (t =
                  f.height > 0 && f.width > 0 && a
                    ? (function (e) {
                        var { translateX: t, translateY: r, useTranslate3d: n } = e;
                        return {
                          transform: n
                            ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)")
                            : "translate(".concat(t, "px, ").concat(r, "px)"),
                        };
                      })({
                        translateX: (r = v({
                          allowEscapeViewBox: i,
                          coordinate: a,
                          key: "x",
                          offsetTopLeft: o,
                          position: c,
                          reverseDirection: s,
                          tooltipDimension: f.width,
                          viewBox: h,
                          viewBoxDimension: h.width,
                        })),
                        translateY: (n = v({
                          allowEscapeViewBox: i,
                          coordinate: a,
                          key: "y",
                          offsetTopLeft: o,
                          position: c,
                          reverseDirection: s,
                          tooltipDimension: f.height,
                          viewBox: h,
                          viewBoxDimension: h.height,
                        })),
                        useTranslate3d: d,
                      })
                    : y),
                cssClasses: (function (e) {
                  var { coordinate: t, translateX: r, translateY: n } = e;
                  return (0, u.$)(p, {
                    ["".concat(p, "-right")]: (0, l.Et)(r) && t && (0, l.Et)(t.x) && r >= t.x,
                    ["".concat(p, "-left")]: (0, l.Et)(r) && t && (0, l.Et)(t.x) && r < t.x,
                    ["".concat(p, "-bottom")]: (0, l.Et)(n) && t && (0, l.Et)(t.y) && n >= t.y,
                    ["".concat(p, "-top")]: (0, l.Et)(n) && t && (0, l.Et)(t.y) && n < t.y,
                  });
                })({ translateX: r, translateY: n, coordinate: a }),
              };
            })({
              allowEscapeViewBox: t,
              coordinate: o,
              offsetTopLeft: f,
              position: d,
              reverseDirection: h,
              tooltipBox: { height: w.height, width: w.width },
              useTranslate3d: g,
              viewBox: b,
            }),
            A = _
              ? {}
              : m(
                  m({ transition: s && e ? "transform ".concat(r, "ms ").concat(i) : void 0 }, j),
                  {},
                  {
                    pointerEvents: "none",
                    visibility: !this.state.dismissed && e && c ? "visible" : "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }
                ),
            S = m(
              m({}, A),
              {},
              { visibility: !this.state.dismissed && e && c ? "visible" : "hidden" },
              x
            );
          return n.createElement(
            "div",
            { xmlns: "http://www.w3.org/1999/xhtml", tabIndex: -1, className: M, style: S, ref: O },
            a
          );
        }
        constructor() {
          (super(...arguments),
            b(this, "state", { dismissed: !1, dismissedAtCoordinate: { x: 0, y: 0 } }),
            b(this, "handleKeyDown", (e) => {
              if ("Escape" === e.key) {
                var t, r, n, i;
                this.setState({
                  dismissed: !0,
                  dismissedAtCoordinate: {
                    x: null != (t = null == (r = this.props.coordinate) ? void 0 : r.x) ? t : 0,
                    y: null != (n = null == (i = this.props.coordinate) ? void 0 : i.y) ? n : 0,
                  },
                });
              }
            }));
        }
      }
      var w = r(90685),
        O = r(90167),
        _ = r(36410),
        M = r(41817),
        j = r(84072),
        A = r(7050),
        S = r(55730),
        P = ["x", "y", "top", "left", "width", "height", "className"];
      function E() {
        return (E = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function k(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      var C = (e) => {
          var {
              x: t = 0,
              y: r = 0,
              top: i = 0,
              left: a = 0,
              width: o = 0,
              height: c = 0,
              className: s,
            } = e,
            f = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? k(Object(r), !0).forEach(function (t) {
                      var n, i, a;
                      ((n = e),
                        (i = t),
                        (a = r[t]),
                        (i = (function (e) {
                          var t = (function (e, t) {
                            if ("object" != typeof e || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                              var n = r.call(e, t || "default");
                              if ("object" != typeof n) return n;
                              throw TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                          })(e, "string");
                          return "symbol" == typeof t ? t : t + "";
                        })(i)) in n
                          ? Object.defineProperty(n, i, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (n[i] = a));
                    })
                  : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : k(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                      });
              }
              return e;
            })(
              { x: t, y: r, top: i, left: a, width: o, height: c },
              (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  i = (function (e, t) {
                    if (null == e) return {};
                    var r = {};
                    for (var n in e)
                      if ({}.hasOwnProperty.call(e, n)) {
                        if (-1 !== t.indexOf(n)) continue;
                        r[n] = e[n];
                      }
                    return r;
                  })(e, t);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < a.length; n++)
                    ((r = a[n]),
                      -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
                }
                return i;
              })(e, P)
            );
          return (0, l.Et)(t) &&
            (0, l.Et)(r) &&
            (0, l.Et)(o) &&
            (0, l.Et)(c) &&
            (0, l.Et)(i) &&
            (0, l.Et)(a)
            ? n.createElement(
                "path",
                E({}, (0, S.a)(f), {
                  className: (0, u.$)("recharts-cross", s),
                  d: "M"
                    .concat(t, ",")
                    .concat(i, "v")
                    .concat(c, "M")
                    .concat(a, ",")
                    .concat(r, "h")
                    .concat(o),
                })
              )
            : null;
        },
        T = r(8829),
        D = r(34010);
      function N(e) {
        var { cx: t, cy: r, radius: n, startAngle: i, endAngle: a } = e;
        return {
          points: [(0, D.IZ)(t, r, n, i), (0, D.IZ)(t, r, n, a)],
          cx: t,
          cy: r,
          radius: n,
          startAngle: i,
          endAngle: a,
        };
      }
      var I = r(88062),
        z = r(81024),
        L = r(51023),
        R = r(210),
        F = r(72481);
      function $(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function U(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? $(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : $(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var H = r(18305),
        B = r(4264),
        K = r(37808),
        Z = r(30732);
      function W() {
        return (W = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function q(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? q(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : q(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function V(e) {
        var { cursor: t, cursorComp: r, cursorProps: i } = e;
        return (0, n.isValidElement)(t) ? (0, n.cloneElement)(t, i) : (0, n.createElement)(r, i);
      }
      function G(e) {
        var t,
          r,
          i,
          a,
          o,
          {
            coordinate: l,
            payload: c,
            index: s,
            offset: f,
            tooltipAxisBandSize: d,
            layout: h,
            cursor: p,
            tooltipEventType: y,
            chartName: v,
          } = e;
        if (!p || !l || ("ScatterChart" !== v && "axis" !== y)) return null;
        if ("ScatterChart" === v) ((i = l), (a = C), (o = Z.I.cursorLine));
        else if ("BarChart" === v)
          ((t = d / 2),
            (i = {
              stroke: "none",
              fill: "#ccc",
              x: "horizontal" === h ? l.x - t : f.left + 0.5,
              y: "horizontal" === h ? f.top + 0.5 : l.y - t,
              width: "horizontal" === h ? d : f.width - 1,
              height: "horizontal" === h ? f.height - 1 : d,
            }),
            (a = T.M),
            (o = Z.I.cursorRectangle));
        else if ("radial" === h && (0, j.TT)(l)) {
          var { cx: g, cy: m, radius: b, startAngle: x, endAngle: w } = N(l);
          ((i = { cx: g, cy: m, startAngle: x, endAngle: w, innerRadius: b, outerRadius: b }),
            (a = I.h),
            (o = Z.I.cursorLine));
        } else
          ((i = {
            points: (function (e, t, r) {
              if ("horizontal" === e)
                return [
                  { x: t.x, y: r.top },
                  { x: t.x, y: r.top + r.height },
                ];
              if ("vertical" === e)
                return [
                  { x: r.left, y: t.y },
                  { x: r.left + r.width, y: t.y },
                ];
              if ((0, j.TT)(t)) {
                if ("centric" === e) {
                  var { cx: n, cy: i, innerRadius: a, outerRadius: o, angle: u } = t,
                    l = (0, D.IZ)(n, i, a, u),
                    c = (0, D.IZ)(n, i, o, u);
                  return [
                    { x: l.x, y: l.y },
                    { x: c.x, y: c.y },
                  ];
                }
                return N(t);
              }
            })(h, l, f),
          }),
            (a = A.I),
            (o = Z.I.cursorLine));
        var O = "object" == typeof p && "className" in p ? p.className : void 0,
          _ = Y(
            Y(Y(Y({ stroke: "#ccc", pointerEvents: "none" }, f), i), (0, B.ic)(p)),
            {},
            { payload: c, payloadIndex: s, className: (0, u.$)("recharts-tooltip-cursor", O) }
          );
        return n.createElement(
          K.g,
          { zIndex: null != (r = e.zIndex) ? r : o },
          n.createElement(V, { cursor: p, cursorComp: a, cursorProps: _ })
        );
      }
      function X(e) {
        var t,
          r,
          i,
          a =
            ((t = (0, z.G)(R.Dn)),
            (r = (0, z.G)(F.R4)),
            (i = (0, z.G)(F.fl)),
            t && i ? (0, L.Hj)(U(U({}, t), {}, { scale: i }), r) : (0, L.Hj)(void 0, r)),
          o = (0, O.W7)(),
          u = (0, O.WX)(),
          l = (0, H.fW)();
        return null == a || null == o || null == u || null == l
          ? null
          : n.createElement(
              G,
              W({}, e, { offset: o, layout: u, tooltipAxisBandSize: a, chartName: l })
            );
      }
      var J = r(20282),
        Q = r(83507),
        ee = r(52550),
        et = r(73406),
        er = r(85224);
      function en(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function ei(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? en(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : en(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function ea(e) {
        return e.dataKey;
      }
      var eo = [],
        eu = {
          allowEscapeViewBox: { x: !1, y: !1 },
          animationDuration: 400,
          animationEasing: "ease",
          axisId: 0,
          contentStyle: {},
          cursor: !0,
          filterNull: !0,
          includeHidden: !1,
          isAnimationActive: "auto",
          itemSorter: "name",
          itemStyle: {},
          labelStyle: {},
          offset: 10,
          reverseDirection: { x: !1, y: !1 },
          separator: " : ",
          trigger: "hover",
          useTranslate3d: !1,
          wrapperStyle: {},
        };
      function el(e) {
        var t,
          r,
          a,
          o = (0, er.e)(e, eu),
          {
            active: u,
            allowEscapeViewBox: l,
            animationDuration: c,
            animationEasing: s,
            content: f,
            filterNull: d,
            isAnimationActive: p,
            offset: y,
            payloadUniqBy: v,
            position: g,
            reverseDirection: m,
            useTranslate3d: b,
            wrapperStyle: j,
            cursor: A,
            shared: S,
            trigger: P,
            defaultIndex: E,
            portal: k,
            axisId: C,
          } = o,
          T = (0, z.j)(),
          D = "number" == typeof E ? String(E) : E;
        (0, n.useEffect)(() => {
          T((0, Q.UF)({ shared: S, trigger: P, axisId: C, active: u, defaultIndex: D }));
        }, [T, S, P, C, u, D]);
        var N = (0, O.sk)(),
          I = (0, _.$)(),
          L = (0, et.Td)(S),
          { activeIndex: R, isActive: F } =
            null != (r = (0, z.G)((e) => (0, H.yn)(e, L, P, D))) ? r : {},
          $ = (0, z.G)((e) => (0, H.u9)(e, L, P, D)),
          U = (0, z.G)((e) => (0, H.BZ)(e, L, P, D)),
          B = (0, z.G)((e) => (0, H.dS)(e, L, P, D)),
          K = (0, J.X)(),
          Z = null != (a = null != u ? u : F) && a,
          [W, q] = (0, M.V)([$, Z]),
          Y = "axis" === L ? U : void 0;
        (0, ee.m7)(L, P, B, Y, R, Z);
        var V = null != k ? k : K;
        if (null == V || null == N || null == L) return null;
        var G = null != $ ? $ : eo;
        (Z || (G = eo),
          d &&
            G.length &&
            (G = (0, w.s)(
              G.filter((e) => null != e.value && (!0 !== e.hide || o.includeHidden)),
              v,
              ea
            )));
        var en = G.length > 0,
          el = n.createElement(
            x,
            {
              allowEscapeViewBox: l,
              animationDuration: c,
              animationEasing: s,
              isAnimationActive: p,
              active: Z,
              coordinate: B,
              hasPayload: en,
              offset: y,
              position: g,
              reverseDirection: m,
              useTranslate3d: b,
              viewBox: N,
              wrapperStyle: j,
              lastBoundingBox: W,
              innerRef: q,
              hasPortalFromProps: !!k,
            },
            ((t = ei(
              ei({}, o),
              {},
              {
                payload: G,
                label: Y,
                active: Z,
                activeIndex: R,
                coordinate: B,
                accessibilityLayer: I,
              }
            )),
            n.isValidElement(f)
              ? n.cloneElement(f, t)
              : "function" == typeof f
                ? n.createElement(f, t)
                : n.createElement(h, t))
          );
        return n.createElement(
          n.Fragment,
          null,
          (0, i.createPortal)(el, V),
          Z &&
            n.createElement(X, {
              cursor: A,
              tooltipEventType: L,
              coordinate: B,
              payload: G,
              index: R,
            })
        );
      }
    },
    33597: (e, t, r) => {
      "use strict";
      function n(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
          r = 10 ** t,
          n = Math.round(e * r) / r;
        return Object.is(n, -0) ? 0 : n;
      }
      function i(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          r[i - 1] = arguments[i];
        return e.reduce((e, t, i) => {
          var a = r[i - 1];
          return "string" == typeof a ? e + a + t : void 0 !== a ? e + n(a) + t : e + t;
        }, "");
      }
      r.d(t, { L: () => n, Y: () => i });
    },
    33692: (e, t, r) => {
      "use strict";
      r.d(t, { m: () => n });
      var n = {
        devToolsEnabled: !0,
        isSsr: !(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement &&
          window.setTimeout
        ),
      };
    },
    34010: (e, t, r) => {
      "use strict";
      function n(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? n(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : n(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      (r.d(t, { IZ: () => o, Kg: () => a, lY: () => u, yy: () => l }), r(12115));
      var a = Math.PI / 180,
        o = (e, t, r, n) => ({ x: e + Math.cos(-a * n) * r, y: t + Math.sin(-a * n) * r }),
        u = function (e, t) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0, brushBottom: 0 };
          return (
            Math.min(
              Math.abs(e - (r.left || 0) - (r.right || 0)),
              Math.abs(t - (r.top || 0) - (r.bottom || 0))
            ) / 2
          );
        },
        l = (e, t) => {
          var r,
            { chartX: n, chartY: a } = e,
            { radius: o, angle: u } = ((e, t) => {
              var { x: r, y: n } = e,
                { cx: i, cy: a } = t,
                o = ((e, t) => {
                  var { x: r, y: n } = e,
                    { x: i, y: a } = t;
                  return Math.sqrt((r - i) ** 2 + (n - a) ** 2);
                })({ x: r, y: n }, { x: i, y: a });
              if (o <= 0) return { radius: o, angle: 0 };
              var u = Math.acos((r - i) / o);
              return (
                n > a && (u = 2 * Math.PI - u),
                { radius: o, angle: (180 * u) / Math.PI, angleInRadian: u }
              );
            })({ x: n, y: a }, t),
            { innerRadius: l, outerRadius: c } = t;
          if (o < l || o > c || 0 === o) return null;
          var { startAngle: s, endAngle: f } = ((e) => {
              var { startAngle: t, endAngle: r } = e,
                n = Math.min(Math.floor(t / 360), Math.floor(r / 360));
              return { startAngle: t - 360 * n, endAngle: r - 360 * n };
            })(t),
            d = u;
          if (s <= f) {
            for (; d > f; ) d -= 360;
            for (; d < s; ) d += 360;
            r = d >= s && d <= f;
          } else {
            for (; d > s; ) d -= 360;
            for (; d < f; ) d += 360;
            r = d >= f && d <= s;
          }
          return r
            ? i(
                i({}, t),
                {},
                {
                  radius: o,
                  angle: ((e, t) => {
                    var { startAngle: r, endAngle: n } = t;
                    return e + 360 * Math.min(Math.floor(r / 360), Math.floor(n / 360));
                  })(d, t),
                }
              )
            : null;
        };
    },
    34264: (e, t, r) => {
      "use strict";
      r.d(t, { F0: () => n, tQ: () => a, yU: () => i });
      var n = "data-recharts-item-index",
        i = "data-recharts-item-id",
        a = 60;
    },
    34565: (e, t, r) => {
      "use strict";
      function n(e) {
        return null == e ? void 0 : e.id;
      }
      r.d(t, { x: () => n });
    },
    35053: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(23134);
      t.toNumber = function (e) {
        return n.isSymbol(e) ? NaN : Number(e);
      };
    },
    35067: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.toKey = function (e) {
          return "string" == typeof e || "symbol" == typeof e
            ? e
            : Object.is(e?.valueOf?.(), -0)
              ? "-0"
              : String(e);
        }));
    },
    35163: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.flatten = function (e, t = 1) {
          let r = [],
            n = Math.floor(t),
            i = (e, t) => {
              for (let a = 0; a < e.length; a++) {
                let o = e[a];
                Array.isArray(o) && t < n ? i(o, t + 1) : r.push(o);
              }
            };
          return (i(e, 0), r);
        }));
    },
    35555: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(12974),
        i = r(9220);
      t.cloneDeepWith = function (e, t) {
        return n.cloneDeepWith(e, (r, a, o, u) => {
          let l = t?.(r, a, o, u);
          if (void 0 !== l) return l;
          if ("object" == typeof e)
            switch (Object.prototype.toString.call(e)) {
              case i.numberTag:
              case i.stringTag:
              case i.booleanTag: {
                let t = new e.constructor(e?.valueOf());
                return (n.copyProperties(t, e), t);
              }
              case i.argumentsTag: {
                let t = {};
                return (
                  n.copyProperties(t, e),
                  (t.length = e.length),
                  (t[Symbol.iterator] = e[Symbol.iterator]),
                  t
                );
              }
              default:
                return;
            }
        });
      };
    },
    35704: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => a });
      var n = r(12115),
        i = (0, n.createContext)(null),
        a = () => null != (0, n.useContext)(i);
    },
    35865: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.isObject = function (e) {
          return null !== e && ("object" == typeof e || "function" == typeof e);
        }));
    },
    35923: (e, t, r) => {
      "use strict";
      function n(e) {
        return "stackId" in e && null != e.stackId && null != e.dataKey;
      }
      r.d(t, { g: () => n });
    },
    36410: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => i });
      var n = r(81024),
        i = () => {
          var e;
          return null == (e = (0, n.G)((e) => e.rootProps.accessibilityLayer)) || e;
        };
    },
    36704: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.identity = function (e) {
          return e;
        }));
    },
    36813: (e, t, r) => {
      "use strict";
      r.d(t, { J: () => J });
      var n = r(12115),
        i = r(1213),
        a = r(81093),
        o = r(26286),
        u = r(33308),
        l = r(83507),
        c = r(94078),
        s = r(38116),
        f = r(75754);
      function d(e, t) {
        return t instanceof HTMLElement
          ? "HTMLElement <".concat(t.tagName, ' class="').concat(t.className, '">')
          : t === window
            ? "global.window"
            : "children" === e && "object" == typeof t && null !== t
              ? "<<CHILDREN>>"
              : t;
      }
      var h = r(92487),
        p = r(14599),
        y = r(78289),
        v = r(60013),
        g = (0, o.Z0)({
          name: "referenceElements",
          initialState: { dots: [], areas: [], lines: [] },
          reducers: {
            addDot: (e, t) => {
              e.dots.push(t.payload);
            },
            removeDot: (e, t) => {
              var r = (0, y.ss)(e).dots.findIndex((e) => e === t.payload);
              -1 !== r && e.dots.splice(r, 1);
            },
            addArea: (e, t) => {
              e.areas.push(t.payload);
            },
            removeArea: (e, t) => {
              var r = (0, y.ss)(e).areas.findIndex((e) => e === t.payload);
              -1 !== r && e.areas.splice(r, 1);
            },
            addLine: (e, t) => {
              e.lines.push((0, v.h4)(t.payload));
            },
            removeLine: (e, t) => {
              var r = (0, y.ss)(e).lines.findIndex((e) => e === t.payload);
              -1 !== r && e.lines.splice(r, 1);
            },
          },
        }),
        {
          addDot: m,
          removeDot: b,
          addArea: x,
          removeArea: w,
          addLine: O,
          removeLine: _,
        } = g.actions,
        M = g.reducer,
        j = { x: 0, y: 0, width: 0, height: 0, padding: { top: 0, right: 0, bottom: 0, left: 0 } },
        A = (0, o.Z0)({
          name: "brush",
          initialState: j,
          reducers: { setBrushSettings: (e, t) => (null == t.payload ? j : t.payload) },
        }),
        { setBrushSettings: S } = A.actions,
        P = A.reducer,
        E = r(69277),
        k = r(93100),
        C = (0, o.Z0)({
          name: "polarAxis",
          initialState: { radiusAxis: {}, angleAxis: {} },
          reducers: {
            addRadiusAxis(e, t) {
              e.radiusAxis[t.payload.id] = (0, v.h4)(t.payload);
            },
            removeRadiusAxis(e, t) {
              delete e.radiusAxis[t.payload.id];
            },
            addAngleAxis(e, t) {
              e.angleAxis[t.payload.id] = (0, v.h4)(t.payload);
            },
            removeAngleAxis(e, t) {
              delete e.angleAxis[t.payload.id];
            },
          },
        }),
        { addRadiusAxis: T, removeRadiusAxis: D, addAngleAxis: N, removeAngleAxis: I } = C.actions,
        z = C.reducer,
        L = r(19052),
        R = r(85080),
        F = r(49074),
        $ = r(37205),
        U = (0, o.Z0)({
          name: "errorBars",
          initialState: {},
          reducers: {
            addErrorBar: (e, t) => {
              var { itemId: r, errorBar: n } = t.payload;
              (e[r] || (e[r] = []), e[r].push(n));
            },
            replaceErrorBar: (e, t) => {
              var { itemId: r, prev: n, next: i } = t.payload;
              e[r] &&
                (e[r] = e[r].map((e) =>
                  e.dataKey === n.dataKey && e.direction === n.direction ? i : e
                ));
            },
            removeErrorBar: (e, t) => {
              var { itemId: r, errorBar: n } = t.payload;
              e[r] &&
                (e[r] = e[r].filter((e) => e.dataKey !== n.dataKey || e.direction !== n.direction));
            },
          },
        }),
        { addErrorBar: H, replaceErrorBar: B, removeErrorBar: K } = U.actions,
        Z = U.reducer,
        W = r(33692),
        q = r(96372),
        Y = (0, a.HY)({
          brush: P,
          cartesianAxis: h.CA,
          chartData: c.LV,
          errorBars: Z,
          graphicalItems: p.iZ,
          layout: s.Vp,
          legend: E.CU,
          options: u.lJ,
          polarAxis: z,
          polarOptions: L.J,
          referenceElements: M,
          rootProps: k.vE,
          tooltip: l.En,
          zIndex: q.v3,
        }),
        V = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Chart";
          return (0, o.U1)({
            reducer: Y,
            preloadedState: e,
            middleware: (e) =>
              e({
                serializableCheck: !1,
                immutableCheck: !["commonjs", "es6", "production"].includes("es6"),
              }).concat([
                f.YF.middleware,
                f.fP.middleware,
                R.$7.middleware,
                F.x.middleware,
                $.k.middleware,
              ]),
            enhancers: (e) => {
              var t = e;
              return ("function" == typeof e && (t = e()), t.concat((0, o.CF)({ type: "raf" })));
            },
            devTools: W.m.devToolsEnabled && {
              serialize: { replacer: d },
              name: "recharts-".concat(t),
            },
          });
        },
        G = r(35704),
        X = r(49629);
      function J(e) {
        var { preloadedState: t, children: r, reduxStoreName: a } = e,
          o = (0, G.r)(),
          u = (0, n.useRef)(null);
        if (o) return r;
        null == u.current && (u.current = V(t, a));
        var l = X.E;
        return n.createElement(i.Kq, { context: l, store: u.current }, r);
      }
    },
    37047: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.isLength = function (e) {
          return Number.isSafeInteger(e) && e >= 0;
        }));
    },
    37205: (e, t, r) => {
      "use strict";
      r.d(t, { e: () => y, k: () => v });
      var n = r(26286),
        i = r(83507),
        a = r(98496),
        o = r(94868),
        u = r(73406),
        l = r(34264),
        c = r(76069),
        s = r(32403),
        f = r(25543),
        d = (0, c.Mz)([f.J], (e) => e.tooltipItemPayloads),
        h = (0, c.Mz)([d, s.x, (e, t) => t, (e, t, r) => r], (e, t, r, n) => {
          var i = e.find((e) => e.settings.graphicalItemId === n);
          if (null != i) {
            var { positions: a } = i;
            if (null != a) return t(a, r);
          }
        }),
        p = r(72481),
        y = (0, n.VP)("touchMove"),
        v = (0, n.Nc)();
      v.startListening({
        actionCreator: y,
        effect: (e, t) => {
          var r = e.payload;
          if (null != r.touches && 0 !== r.touches.length) {
            var n = t.getState(),
              c = (0, u.au)(n, n.tooltip.settings.shared);
            if ("axis" === c) {
              var s = r.touches[0];
              if (null == s) return;
              var f = (0, a.g)(
                n,
                (0, o.w)({ clientX: s.clientX, clientY: s.clientY, currentTarget: r.currentTarget })
              );
              (null == f ? void 0 : f.activeIndex) != null &&
                t.dispatch(
                  (0, i.Nt)({
                    activeIndex: f.activeIndex,
                    activeDataKey: void 0,
                    activeCoordinate: f.activeCoordinate,
                  })
                );
            } else if ("item" === c) {
              var d,
                y = r.touches[0];
              if (null == document.elementFromPoint || null == y) return;
              var v = document.elementFromPoint(y.clientX, y.clientY);
              if (!v || !v.getAttribute) return;
              var g = v.getAttribute(l.F0),
                m = null != (d = v.getAttribute(l.yU)) ? d : void 0,
                b = (0, p.AA)(n).find((e) => e.id === m);
              if (null == g || null == b || null == m) return;
              var { dataKey: x } = b,
                w = h(n, g, m);
              t.dispatch(
                (0, i.RD)({
                  activeDataKey: x,
                  activeIndex: g,
                  activeCoordinate: w,
                  activeGraphicalItemId: m,
                })
              );
            }
          }
        },
      });
    },
    37808: (e, t, r) => {
      "use strict";
      r.d(t, { g: () => f });
      var n = r(12115),
        i = r(47650),
        a = r(49580),
        o = r(81024),
        u = r(23343),
        l = r(96372),
        c = r(90167),
        s = r(35704);
      function f(e) {
        var { zIndex: t, children: r } = e,
          f = (0, c.SG)() && void 0 !== t && 0 !== t,
          d = (0, s.r)(),
          h = (0, o.j)();
        (0, n.useLayoutEffect)(
          () =>
            f
              ? (h((0, l.wR)({ zIndex: t })),
                () => {
                  h((0, l.ZV)({ zIndex: t }));
                })
              : a.lQ,
          [h, t, f]
        );
        var p = (0, o.G)((e) => (0, u.h)(e, t, d));
        return f ? (p ? (0, i.createPortal)(r, p) : null) : r;
      }
    },
    38116: (e, t, r) => {
      "use strict";
      r.d(t, { B_: () => i, JK: () => a, Vp: () => l, gX: () => o, hF: () => u });
      var n = (0, r(26286).Z0)({
          name: "chartLayout",
          initialState: {
            layoutType: "horizontal",
            width: 0,
            height: 0,
            margin: { top: 5, right: 5, bottom: 5, left: 5 },
            scale: 1,
          },
          reducers: {
            setLayout(e, t) {
              e.layoutType = t.payload;
            },
            setChartSize(e, t) {
              ((e.width = t.payload.width), (e.height = t.payload.height));
            },
            setMargin(e, t) {
              var r, n, i, a;
              ((e.margin.top = null != (r = t.payload.top) ? r : 0),
                (e.margin.right = null != (n = t.payload.right) ? n : 0),
                (e.margin.bottom = null != (i = t.payload.bottom) ? i : 0),
                (e.margin.left = null != (a = t.payload.left) ? a : 0));
            },
            setScale(e, t) {
              e.scale = t.payload;
            },
          },
        }),
        { setMargin: i, setLayout: a, setChartSize: o, setScale: u } = n.actions,
        l = n.reducer;
    },
    38528: (e, t, r) => {
      e.exports = r(60512).range;
    },
    38881: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => l });
      var n = r(12115),
        i = r(35704),
        a = r(38116),
        o = r(81024),
        u = r(46669),
        l = (0, n.memo)(function (e) {
          var { layout: t, margin: r } = e,
            u = (0, o.j)(),
            l = (0, i.r)();
          return (
            (0, n.useEffect)(() => {
              l || (u((0, a.JK)(t)), u((0, a.B_)(r)));
            }, [u, l, t, r]),
            null
          );
        }, u.P);
    },
    39346: (e, t, r) => {
      "use strict";
      r.d(t, { EY: () => N, fU: () => S });
      var n = r(12115),
        i = r(2821),
        a = r(49580),
        o = r(33692),
        u = r(64680),
        l = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        c = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
        s = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
        f = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
        d = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 16, in: 96, Q: 96 / 101.6, px: 1 },
        h = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
      class p {
        static parse(e) {
          var t,
            [, r, n] = null != (t = f.exec(e)) ? t : [];
          return null == r ? p.NaN : new p(parseFloat(r), null != n ? n : "");
        }
        add(e) {
          return this.unit !== e.unit ? new p(NaN, "") : new p(this.num + e.num, this.unit);
        }
        subtract(e) {
          return this.unit !== e.unit ? new p(NaN, "") : new p(this.num - e.num, this.unit);
        }
        multiply(e) {
          return "" !== this.unit && "" !== e.unit && this.unit !== e.unit
            ? new p(NaN, "")
            : new p(this.num * e.num, this.unit || e.unit);
        }
        divide(e) {
          return "" !== this.unit && "" !== e.unit && this.unit !== e.unit
            ? new p(NaN, "")
            : new p(this.num / e.num, this.unit || e.unit);
        }
        toString() {
          return "".concat(this.num).concat(this.unit);
        }
        isNaN() {
          return (0, a.M8)(this.num);
        }
        constructor(e, t) {
          ((this.num = e),
            (this.unit = t),
            (this.num = e),
            (this.unit = t),
            (0, a.M8)(e) && (this.unit = ""),
            "" === t || s.test(t) || ((this.num = NaN), (this.unit = "")),
            h.includes(t) && ((this.num = e * d[t]), (this.unit = "px")));
        }
      }
      function y(e) {
        if (null == e || e.includes("NaN")) return "NaN";
        for (var t = e; t.includes("*") || t.includes("/"); ) {
          var r,
            [, n, i, a] = null != (r = l.exec(t)) ? r : [],
            o = p.parse(null != n ? n : ""),
            u = p.parse(null != a ? a : ""),
            s = "*" === i ? o.multiply(u) : o.divide(u);
          if (s.isNaN()) return "NaN";
          t = t.replace(l, s.toString());
        }
        for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
          var f,
            [, d, h, y] = null != (f = c.exec(t)) ? f : [],
            v = p.parse(null != d ? d : ""),
            g = p.parse(null != y ? y : ""),
            m = "+" === h ? v.add(g) : v.subtract(g);
          if (m.isNaN()) return "NaN";
          t = t.replace(c, m.toString());
        }
        return t;
      }
      !(function (e, t, r) {
        var n;
        (t =
          "symbol" ==
          typeof (n = (function (e, t) {
            if ("object" != typeof e || !e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, t || "default");
              if ("object" != typeof n) return n;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(t, "string"))
            ? n
            : n + "") in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r);
      })(p, "NaN", new p(NaN, ""));
      var v = /\(([^()]*)\)/;
      function g(e) {
        var t = (function (e) {
          try {
            var t;
            return (
              (t = e.replace(/\s+/g, "")),
              (t = (function (e) {
                for (var t, r = e; null != (t = v.exec(r)); ) {
                  var [, n] = t;
                  r = r.replace(v, y(n));
                }
                return r;
              })(t)),
              (t = y(t))
            );
          } catch (e) {
            return "NaN";
          }
        })(e.slice(5, -1));
        return "NaN" === t ? "" : t;
      }
      var m = r(55730),
        b = r(85224),
        x = r(92377),
        w = [
          "x",
          "y",
          "lineHeight",
          "capHeight",
          "fill",
          "scaleToFit",
          "textAnchor",
          "verticalAnchor",
        ],
        O = ["dx", "dy", "angle", "className", "breakAll"];
      function _() {
        return (_ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function M(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r = {};
            for (var n in e)
              if ({}.hasOwnProperty.call(e, n)) {
                if (-1 !== t.indexOf(n)) continue;
                r[n] = e[n];
              }
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            ((r = a[n]),
              -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      var j = /[ \f\n\r\t\v\u2028\u2029]+/,
        A = (e) => {
          var { children: t, breakAll: r, style: n } = e;
          try {
            var i = [];
            (0, a.uy)(t) || (i = r ? t.toString().split("") : t.toString().split(j));
            var o = i.map((e) => ({ word: e, width: (0, u.Pu)(e, n).width })),
              l = r ? 0 : (0, u.Pu)("\xa0", n).width;
            return { wordsWithComputedWidth: o, spaceWidth: l };
          } catch (e) {
            return null;
          }
        };
      function S(e) {
        return "start" === e || "middle" === e || "end" === e || "inherit" === e;
      }
      var P = (e, t, r, n) =>
          e.reduce((e, i) => {
            var { word: a, width: o } = i,
              u = e[e.length - 1];
            return (
              u && null != o && (null == t || n || u.width + o + r < Number(t))
                ? (u.words.push(a), (u.width += o + r))
                : e.push({ words: [a], width: o }),
              e
            );
          }, []),
        E = (e) => e.reduce((e, t) => (e.width > t.width ? e : t)),
        k = (e, t, r, n, i, a, o, u) => {
          var l = A({ breakAll: r, style: n, children: e.slice(0, t) + "…" });
          if (!l) return [!1, []];
          var c = P(l.wordsWithComputedWidth, a, o, u);
          return [c.length > i || E(c).width > Number(a), c];
        },
        C = (e) => [{ words: (0, a.uy)(e) ? [] : e.toString().split(j), width: void 0 }],
        T = "#808080",
        D = {
          angle: 0,
          breakAll: !1,
          capHeight: "0.71em",
          fill: T,
          lineHeight: "1em",
          scaleToFit: !1,
          textAnchor: "start",
          verticalAnchor: "end",
          x: 0,
          y: 0,
        },
        N = (0, n.forwardRef)((e, t) => {
          var r,
            u = (0, b.e)(e, D),
            {
              x: l,
              y: c,
              lineHeight: s,
              capHeight: f,
              fill: d,
              scaleToFit: h,
              textAnchor: p,
              verticalAnchor: y,
            } = u,
            v = M(u, w),
            j = (0, n.useMemo)(
              () =>
                ((e) => {
                  var {
                    width: t,
                    scaleToFit: r,
                    children: n,
                    style: i,
                    breakAll: u,
                    maxLines: l,
                  } = e;
                  if ((t || r) && !o.m.isSsr) {
                    var c = A({ breakAll: u, children: n, style: i });
                    if (!c) return C(n);
                    var { wordsWithComputedWidth: s, spaceWidth: f } = c;
                    return ((e, t, r, n, i) => {
                      var o,
                        { maxLines: u, children: l, style: c, breakAll: s } = e,
                        f = (0, a.Et)(u),
                        d = String(l),
                        h = P(t, n, r, i);
                      if (!f || i || !(h.length > u || E(h).width > Number(n))) return h;
                      for (var p = 0, y = d.length - 1, v = 0; p <= y && v <= d.length - 1; ) {
                        var g = Math.floor((p + y) / 2),
                          [m, b] = k(d, g - 1, s, c, u, n, r, i),
                          [x] = k(d, g, s, c, u, n, r, i);
                        if ((m || x || (p = g + 1), m && x && (y = g - 1), !m && x)) {
                          o = b;
                          break;
                        }
                        v++;
                      }
                      return o || h;
                    })({ breakAll: u, children: n, maxLines: l, style: i }, s, f, t, !!r);
                  }
                  return C(n);
                })({
                  breakAll: v.breakAll,
                  children: v.children,
                  maxLines: v.maxLines,
                  scaleToFit: h,
                  style: v.style,
                  width: v.width,
                }),
              [v.breakAll, v.children, v.maxLines, h, v.style, v.width]
            ),
            { dx: S, dy: N, angle: I, className: z, breakAll: L } = v,
            R = M(v, O);
          if (!(0, a.vh)(l) || !(0, a.vh)(c) || 0 === j.length) return null;
          var F = Number(l) + ((0, a.Et)(S) ? S : 0),
            $ = Number(c) + ((0, a.Et)(N) ? N : 0);
          if (!(0, x.H)(F) || !(0, x.H)($)) return null;
          switch (y) {
            case "start":
              r = g("calc(".concat(f, ")"));
              break;
            case "middle":
              r = g(
                "calc("
                  .concat((j.length - 1) / 2, " * -")
                  .concat(s, " + (")
                  .concat(f, " / 2))")
              );
              break;
            default:
              r = g("calc(".concat(j.length - 1, " * -").concat(s, ")"));
          }
          var U = [];
          if (h) {
            var H = j[0].width,
              { width: B } = v;
            U.push("scale(".concat((0, a.Et)(B) && (0, a.Et)(H) ? B / H : 1, ")"));
          }
          return (
            I && U.push("rotate(".concat(I, ", ").concat(F, ", ").concat($, ")")),
            U.length && (R.transform = U.join(" ")),
            n.createElement(
              "text",
              _({}, (0, m.a)(R), {
                ref: t,
                x: F,
                y: $,
                className: (0, i.$)("recharts-text", z),
                textAnchor: p,
                fill: d.includes("url") ? T : d,
              }),
              j.map((e, t) => {
                var i = e.words.join(L ? "" : " ");
                return n.createElement(
                  "tspan",
                  { x: F, dy: 0 === t ? r : s, key: "".concat(i, "-").concat(t) },
                  i
                );
              })
            )
          );
        });
      N.displayName = "Text";
    },
    40207: (e, t, r) => {
      e.exports = r(56942).last;
    },
    40495: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(27243);
      t.isMatch = function (e, t) {
        return n.isMatchWith(e, t, () => void 0);
      };
    },
    41817: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => i });
      var n = r(12115);
      function i() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          [t, r] = (0, n.useState)({ height: 0, left: 0, top: 0, width: 0 }),
          i = (0, n.useCallback)(
            (e) => {
              if (null != e) {
                var n = e.getBoundingClientRect(),
                  i = { height: n.height, left: n.left, top: n.top, width: n.width };
                (Math.abs(i.height - t.height) > 1 ||
                  Math.abs(i.left - t.left) > 1 ||
                  Math.abs(i.top - t.top) > 1 ||
                  Math.abs(i.width - t.width) > 1) &&
                  r({ height: i.height, left: i.left, top: i.top, width: i.width });
              }
            },
            [t.width, t.height, t.top, t.left, ...e]
          );
        return [t, i];
      }
    },
    42915: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(40495),
        i = r(75190);
      t.matches = function (e) {
        return ((e = i.cloneDeep(e)), (t) => n.isMatch(t, e));
      };
    },
    43597: (e, t, r) => {
      "use strict";
      function n(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? n(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : n(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      r.d(t, { dl: () => a, mP: () => o, s8: () => u });
      var a = (e, t, r) =>
          e
            .map((e) =>
              ""
                .concat(
                  e.replace(/([A-Z])/g, (e) => "-".concat(e.toLowerCase())),
                  " "
                )
                .concat(t, "ms ")
                .concat(r)
            )
            .join(","),
        o = (e, t) =>
          [Object.keys(e), Object.keys(t)].reduce((e, t) => e.filter((e) => t.includes(e))),
        u = (e, t) => Object.keys(t).reduce((r, n) => i(i({}, r), {}, { [n]: e(n, t[n]) }), {});
    },
    44078: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(32333);
      t.isArguments = function (e) {
        return null !== e && "object" == typeof e && "[object Arguments]" === n.getTag(e);
      };
    },
    46669: (e, t, r) => {
      "use strict";
      r.d(t, { P: () => a });
      var n = r(1213),
        i = new Set([
          "axisLine",
          "tickLine",
          "activeBar",
          "activeDot",
          "activeLabel",
          "activeShape",
          "allowEscapeViewBox",
          "background",
          "cursor",
          "dot",
          "label",
          "line",
          "margin",
          "padding",
          "position",
          "shape",
          "style",
          "tick",
          "wrapperStyle",
          "radius",
        ]);
      function a(e, t) {
        for (var r of new Set([...Object.keys(e), ...Object.keys(t)]))
          if (i.has(r)) {
            if (null == e[r] && null == t[r]) continue;
            if (!(0, n.bN)(e[r], t[r])) return !1;
          } else {
            var a, o;
            if (
              ((a = e[r]),
              (o = t[r]),
              (null != a || null != o) &&
                ("number" == typeof a && "number" == typeof o
                  ? a !== o && (a == a || o == o)
                  : a !== o))
            )
              return !1;
          }
        return !0;
      }
    },
    47226: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(40495),
        i = r(35067),
        a = r(33383),
        o = r(93276),
        u = r(30808);
      t.matchesProperty = function (e, t) {
        switch (typeof e) {
          case "object":
            Object.is(e?.valueOf(), -0) && (e = "-0");
            break;
          case "number":
            e = i.toKey(e);
        }
        return (
          (t = a.cloneDeep(t)),
          function (r) {
            let i = o.get(r, e);
            return void 0 === i ? u.has(r, e) : void 0 === t ? void 0 === i : n.isMatch(i, t);
          }
        );
      };
    },
    48971: (e, t, r) => {
      "use strict";
      r.d(t, { x: () => c });
      var n,
        i = r(12115),
        a = r.t(i, 2),
        o = r(49580),
        u =
          null != (n = a["useId".toString()])
            ? n
            : () => {
                var [e] = i.useState(() => (0, o.NF)("uid-"));
                return e;
              },
        l = (0, i.createContext)(void 0),
        c = (e) => {
          var { id: t, type: r, children: n } = e,
            a = (function (e, t) {
              var r = u();
              return t || (e ? "".concat(e, "-").concat(r) : r);
            })("recharts-".concat(r), t);
          return i.createElement(l.Provider, { value: a }, n(a));
        };
    },
    49074: (e, t, r) => {
      "use strict";
      r.d(t, { x: () => o, y: () => a });
      var n = r(26286),
        i = r(72481),
        a = (0, n.VP)("externalEvent"),
        o = (0, n.Nc)(),
        u = new Map();
      o.startListening({
        actionCreator: a,
        effect: (e, t) => {
          var { handler: r, reactEvent: n } = e.payload;
          if (null != r) {
            n.persist();
            var a = n.type,
              o = u.get(a);
            void 0 !== o && cancelAnimationFrame(o);
            var l = requestAnimationFrame(() => {
              try {
                var e = t.getState(),
                  o = {
                    activeCoordinate: (0, i.eE)(e),
                    activeDataKey: (0, i.Xb)(e),
                    activeIndex: (0, i.A2)(e),
                    activeLabel: (0, i.BZ)(e),
                    activeTooltipIndex: (0, i.A2)(e),
                    isTooltipActive: (0, i.yn)(e),
                  };
                r(o, n);
              } finally {
                u.delete(a);
              }
            });
            u.set(a, l);
          }
        },
      });
    },
    49484: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(23134),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
      t.isKey = function (e, t) {
        return (
          !Array.isArray(e) &&
          (!!("number" == typeof e || "boolean" == typeof e || null == e || n.isSymbol(e)) ||
            ("string" == typeof e && (a.test(e) || !i.test(e))) ||
            (null != t && Object.hasOwn(t, e)))
        );
      };
    },
    49507: (e, t, r) => {
      "use strict";
      r.d(t, { W: () => a, h: () => i });
      var n = r(76069),
        i = (0, n.Mz)(
          (e) => e.cartesianAxis.xAxis,
          (e) => Object.values(e)
        ),
        a = (0, n.Mz)(
          (e) => e.cartesianAxis.yAxis,
          (e) => Object.values(e)
        );
    },
    49580: (e, t, r) => {
      "use strict";
      r.d(t, {
        CG: () => p,
        Et: () => c,
        F4: () => h,
        GW: () => y,
        M8: () => u,
        NF: () => d,
        Zb: () => m,
        _3: () => l,
        eP: () => v,
        lQ: () => x,
        n9: () => b,
        sA: () => o,
        uy: () => g,
        vh: () => s,
      });
      var n = r(54241),
        i = r.n(n),
        a = r(33597),
        o = (e) => (0 === e ? 0 : e > 0 ? 1 : -1),
        u = (e) => "number" == typeof e && e != +e,
        l = (e) => "string" == typeof e && e.indexOf("%") === e.length - 1,
        c = (e) => ("number" == typeof e || e instanceof Number) && !u(e),
        s = (e) => c(e) || "string" == typeof e,
        f = 0,
        d = (e) => {
          var t = ++f;
          return "".concat(e || "").concat(t);
        },
        h = function (e, t) {
          var r,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (!c(e) && "string" != typeof e) return n;
          if (l(e)) {
            if (null == t) return n;
            var a = e.indexOf("%");
            r = (t * parseFloat(e.slice(0, a))) / 100;
          } else r = +e;
          return (u(r) && (r = n), i && null != t && r > t && (r = t), r);
        },
        p = (e) => {
          if (!Array.isArray(e)) return !1;
          for (var t = e.length, r = {}, n = 0; n < t; n++)
            if (r[String(e[n])]) return !0;
            else r[String(e[n])] = !0;
          return !1;
        };
      function y(e, t, r) {
        return c(e) && c(t) ? (0, a.L)(e + r * (t - e)) : t;
      }
      function v(e, t, r) {
        if (e && e.length)
          return e.find((e) => e && ("function" == typeof t ? t(e) : i()(e, t)) === r);
      }
      var g = (e) => null == e,
        m = (e) => (g(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1)));
      function b(e) {
        return null != e;
      }
      function x() {}
    },
    49629: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => n });
      var n = (0, r(12115).createContext)(null);
    },
    50257: (e, t, r) => {
      "use strict";
      r.d(t, { C: () => u, U: () => l });
      var n = r(76069),
        i = r(8291),
        a = r(27588),
        o = r(49580),
        u = (e) => e.brush,
        l = (0, n.Mz)([u, i.HZ, a.HK], (e, t, r) => ({
          height: e.height,
          x: (0, o.Et)(e.x) ? e.x : t.left,
          y: (0, o.Et)(e.y)
            ? e.y
            : t.top + t.height + t.brushBottom - ((null == r ? void 0 : r.bottom) || 0),
          width: (0, o.Et)(e.width) ? e.width : t.width,
        }));
    },
    50475: (e, t) => {
      "use strict";
      var r = Symbol.for("react.transitional.element"),
        n = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        o = Symbol.for("react.profiler"),
        u = Symbol.for("react.consumer"),
        l = Symbol.for("react.context"),
        c = Symbol.for("react.forward_ref"),
        s = Symbol.for("react.suspense"),
        f = Symbol.for("react.suspense_list"),
        d = Symbol.for("react.memo"),
        h = Symbol.for("react.lazy"),
        p = Symbol.for("react.view_transition");
      Symbol.for("react.client.reference");
      t.zv = function (e) {
        return (
          (function (e) {
            if ("object" == typeof e && null !== e) {
              var t = e.$$typeof;
              switch (t) {
                case r:
                  switch ((e = e.type)) {
                    case i:
                    case o:
                    case a:
                    case s:
                    case f:
                    case p:
                      return e;
                    default:
                      switch ((e = e && e.$$typeof)) {
                        case l:
                        case c:
                        case h:
                        case d:
                        case u:
                          return e;
                        default:
                          return t;
                      }
                  }
                case n:
                  return t;
              }
            }
          })(e) === i
        );
      };
    },
    51023: (e, t, r) => {
      "use strict";
      r.d(t, {
        qx: () => k,
        IH: () => E,
        s0: () => b,
        sr: () => N,
        eB: () => I,
        YB: () => _,
        Hj: () => C,
        nb: () => S,
        PW: () => w,
        Mk: () => P,
        $8: () => A,
        yy: () => j,
        Rh: () => O,
        GF: () => T,
        uM: () => D,
        kr: () => m,
        _L: () => x,
      });
      var n = r(97354),
        i = r.n(n),
        a = r(54241),
        o = r.n(a);
      function u(e, t) {
        if ((i = e.length) > 1)
          for (var r, n, i, a = 1, o = e[t[0]], u = o.length; a < i; ++a)
            for (n = o, o = e[t[a]], r = 0; r < u; ++r)
              o[r][1] += o[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1];
      }
      var l = r(27012),
        c = r(73595);
      function s(e) {
        for (var t = e.length, r = Array(t); --t >= 0; ) r[t] = t;
        return r;
      }
      function f(e, t) {
        return e[t];
      }
      function d(e) {
        let t = [];
        return ((t.key = e), t);
      }
      var h = r(49580),
        p = r(29439),
        y = r(92377);
      function v(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : v(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function m(e, t, r) {
        return (0, h.uy)(e) || (0, h.uy)(t)
          ? r
          : (0, h.vh)(t)
            ? o()(e, t, r)
            : "function" == typeof t
              ? t(e)
              : r;
      }
      var b = (e, t, r) => {
          if (t && r) {
            var { width: n, height: i } = r,
              { align: a, verticalAlign: o, layout: u } = t;
            if (
              ("vertical" === u || ("horizontal" === u && "middle" === o)) &&
              "center" !== a &&
              (0, h.Et)(e[a])
            )
              return g(g({}, e), {}, { [a]: e[a] + (n || 0) });
            if (
              ("horizontal" === u || ("vertical" === u && "center" === a)) &&
              "middle" !== o &&
              (0, h.Et)(e[o])
            )
              return g(g({}, e), {}, { [o]: e[o] + (i || 0) });
          }
          return e;
        },
        x = (e, t) =>
          ("horizontal" === e && "xAxis" === t) ||
          ("vertical" === e && "yAxis" === t) ||
          ("centric" === e && "angleAxis" === t) ||
          ("radial" === e && "radiusAxis" === t),
        w = (e, t, r, n) => {
          if (n) return e.map((e) => e.coordinate);
          var i,
            a,
            o = e.map(
              (e) => (e.coordinate === t && (i = !0), e.coordinate === r && (a = !0), e.coordinate)
            );
          return (i || o.push(t), a || o.push(r), o);
        },
        O = (e, t, r) => {
          if (!e) return null;
          var {
            duplicateDomain: n,
            type: i,
            range: a,
            scale: o,
            realScaleType: u,
            isCategorical: l,
            categoricalDomain: c,
            tickCount: s,
            ticks: f,
            niceTicks: d,
            axisType: p,
          } = e;
          if (!o) return null;
          var y = "scaleBand" === u && o.bandwidth ? o.bandwidth() / 2 : 2,
            v = (t || r) && "category" === i && o.bandwidth ? o.bandwidth() / y : 0;
          return ((v =
            "angleAxis" === p && a && a.length >= 2 ? 2 * (0, h.sA)(a[0] - a[1]) * v : v),
          t && (f || d))
            ? (f || d || [])
                .map((e, t) => ({
                  coordinate: o(n ? n.indexOf(e) : e) + v,
                  value: e,
                  offset: v,
                  index: t,
                }))
                .filter((e) => !(0, h.M8)(e.coordinate))
            : l && c
              ? c.map((e, t) => ({ coordinate: o(e) + v, value: e, index: t, offset: v }))
              : o.ticks && !r && null != s
                ? o
                    .ticks(s)
                    .map((e, t) => ({ coordinate: o(e) + v, value: e, offset: v, index: t }))
                : o.domain().map((e, t) => ({
                    coordinate: o(e) + v,
                    value: n ? n[e] : e,
                    index: t,
                    offset: v,
                  }));
        },
        _ = (e) => {
          var t = e.domain();
          if (t && !(t.length <= 2)) {
            var r = t.length,
              n = e.range(),
              i = Math.min(n[0], n[1]) - 1e-4,
              a = Math.max(n[0], n[1]) + 1e-4,
              o = e(t[0]),
              u = e(t[r - 1]);
            (o < i || o > a || u < i || u > a) && e.domain([t[0], t[r - 1]]);
          }
        },
        M = {
          sign: (e) => {
            var t,
              r = e.length;
            if (!(r <= 0)) {
              var n = null == (t = e[0]) ? void 0 : t.length;
              if (null != n && !(n <= 0))
                for (var i = 0; i < n; ++i)
                  for (var a = 0, o = 0, u = 0; u < r; ++u) {
                    var l = e[u],
                      c = null == l ? void 0 : l[i];
                    if (null != c) {
                      var s = c[1],
                        f = c[0],
                        d = (0, h.M8)(s) ? f : s;
                      d >= 0
                        ? ((c[0] = a), (c[1] = a + d), (a = s))
                        : ((c[0] = o), (c[1] = o + d), (o = s));
                    }
                  }
            }
          },
          expand: function (e, t) {
            if ((n = e.length) > 0) {
              for (var r, n, i, a = 0, o = e[0].length; a < o; ++a) {
                for (i = r = 0; r < n; ++r) i += e[r][a][1] || 0;
                if (i) for (r = 0; r < n; ++r) e[r][a][1] /= i;
              }
              u(e, t);
            }
          },
          none: u,
          silhouette: function (e, t) {
            if ((r = e.length) > 0) {
              for (var r, n = 0, i = e[t[0]], a = i.length; n < a; ++n) {
                for (var o = 0, l = 0; o < r; ++o) l += e[o][n][1] || 0;
                i[n][1] += i[n][0] = -l / 2;
              }
              u(e, t);
            }
          },
          wiggle: function (e, t) {
            if ((i = e.length) > 0 && (n = (r = e[t[0]]).length) > 0) {
              for (var r, n, i, a = 0, o = 1; o < n; ++o) {
                for (var l = 0, c = 0, s = 0; l < i; ++l) {
                  for (
                    var f = e[t[l]], d = f[o][1] || 0, h = (d - (f[o - 1][1] || 0)) / 2, p = 0;
                    p < l;
                    ++p
                  ) {
                    var y = e[t[p]];
                    h += (y[o][1] || 0) - (y[o - 1][1] || 0);
                  }
                  ((c += d), (s += h * d));
                }
                ((r[o - 1][1] += r[o - 1][0] = a), c && (a -= s / c));
              }
              ((r[o - 1][1] += r[o - 1][0] = a), u(e, t));
            }
          },
          positive: (e) => {
            var t,
              r = e.length;
            if (!(r <= 0)) {
              var n = null == (t = e[0]) ? void 0 : t.length;
              if (null != n && !(n <= 0))
                for (var i = 0; i < n; ++i)
                  for (var a = 0, o = 0; o < r; ++o) {
                    var u = e[o],
                      l = null == u ? void 0 : u[i];
                    if (null != l) {
                      var c = (0, h.M8)(l[1]) ? l[0] : l[1];
                      c >= 0 ? ((l[0] = a), (l[1] = a + c), (a = l[1])) : ((l[0] = 0), (l[1] = 0));
                    }
                  }
            }
          },
        },
        j = (e, t, r) => {
          var n,
            i = null != (n = M[r]) ? n : u,
            a = (function () {
              var e = (0, c.A)([]),
                t = s,
                r = u,
                n = f;
              function i(i) {
                var a,
                  o,
                  u = Array.from(e.apply(this, arguments), d),
                  c = u.length,
                  s = -1;
                for (let e of i)
                  for (a = 0, ++s; a < c; ++a) (u[a][s] = [0, +n(e, u[a].key, s, i)]).data = e;
                for (a = 0, o = (0, l.A)(t(u)); a < c; ++a) u[o[a]].index = a;
                return (r(u, o), u);
              }
              return (
                (i.keys = function (t) {
                  return arguments.length
                    ? ((e = "function" == typeof t ? t : (0, c.A)(Array.from(t))), i)
                    : e;
                }),
                (i.value = function (e) {
                  return arguments.length
                    ? ((n = "function" == typeof e ? e : (0, c.A)(+e)), i)
                    : n;
                }),
                (i.order = function (e) {
                  return arguments.length
                    ? ((t = null == e ? s : "function" == typeof e ? e : (0, c.A)(Array.from(e))),
                      i)
                    : t;
                }),
                (i.offset = function (e) {
                  return arguments.length ? ((r = null == e ? u : e), i) : r;
                }),
                i
              );
            })()
              .keys(t)
              .value((e, t) => Number(m(e, t, 0)))
              .order(s)
              .offset(i)(e);
          return (
            a.forEach((r, n) => {
              r.forEach((r, i) => {
                var a = m(e[i], t[n], 0);
                Array.isArray(a) &&
                  2 === a.length &&
                  (0, h.Et)(a[0]) &&
                  (0, h.Et)(a[1]) &&
                  ((r[0] = a[0]), (r[1] = a[1]));
              });
            }),
            a
          );
        };
      function A(e) {
        return null == e ? void 0 : String(e);
      }
      function S(e) {
        var { axis: t, ticks: r, bandSize: n, entry: i, index: a, dataKey: o } = e;
        if ("category" === t.type) {
          if (!t.allowDuplicatedCategory && t.dataKey && !(0, h.uy)(i[t.dataKey])) {
            var u = (0, h.eP)(r, "value", i[t.dataKey]);
            if (u) return u.coordinate + n / 2;
          }
          return r[a] ? r[a].coordinate + n / 2 : null;
        }
        var l = m(i, (0, h.uy)(o) ? t.dataKey : o);
        return (0, h.uy)(l) ? null : t.scale(l);
      }
      var P = (e, t, r) => {
          if (null != e)
            return ((e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]])(
              Object.keys(e).reduce(
                (n, i) => {
                  var a = e[i];
                  if (!a) return n;
                  var { stackedData: o } = a,
                    u = o.reduce(
                      (e, n) => {
                        var i = ((e) => {
                          var t = e.flat(2).filter(h.Et);
                          return [Math.min(...t), Math.max(...t)];
                        })((0, p.v)(n, t, r));
                        return (0, y.H)(i[0]) && (0, y.H)(i[1])
                          ? [Math.min(e[0], i[0]), Math.max(e[1], i[1])]
                          : e;
                      },
                      [1 / 0, -1 / 0]
                    );
                  return [Math.min(u[0], n[0]), Math.max(u[1], n[1])];
                },
                [1 / 0, -1 / 0]
              )
            );
        },
        E = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        k = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
        C = (e, t, r) => {
          if (e && e.scale && e.scale.bandwidth) {
            var n = e.scale.bandwidth();
            if (!r || n > 0) return n;
          }
          if (e && t && t.length >= 2) {
            for (var a = i()(t, (e) => e.coordinate), o = 1 / 0, u = 1, l = a.length; u < l; u++) {
              var c = a[u],
                s = a[u - 1];
              o = Math.min(
                ((null == c ? void 0 : c.coordinate) || 0) -
                  ((null == s ? void 0 : s.coordinate) || 0),
                o
              );
            }
            return o === 1 / 0 ? 0 : o;
          }
          return r ? void 0 : 0;
        };
      function T(e) {
        var { tooltipEntrySettings: t, dataKey: r, payload: n, value: i, name: a } = e;
        return g(g({}, t), {}, { dataKey: r, payload: n, value: i, name: a });
      }
      function D(e, t) {
        return e ? String(e) : "string" == typeof t ? t : void 0;
      }
      var N = (e, t) => ("horizontal" === t ? e.chartX : "vertical" === t ? e.chartY : void 0),
        I = (e, t) => ("centric" === t ? e.angle : e.radius);
    },
    52089: (e, t, r) => {
      "use strict";
      r.d(t, { q: () => i });
      var n = [
        "dangerouslySetInnerHTML",
        "onCopy",
        "onCopyCapture",
        "onCut",
        "onCutCapture",
        "onPaste",
        "onPasteCapture",
        "onCompositionEnd",
        "onCompositionEndCapture",
        "onCompositionStart",
        "onCompositionStartCapture",
        "onCompositionUpdate",
        "onCompositionUpdateCapture",
        "onFocus",
        "onFocusCapture",
        "onBlur",
        "onBlurCapture",
        "onChange",
        "onChangeCapture",
        "onBeforeInput",
        "onBeforeInputCapture",
        "onInput",
        "onInputCapture",
        "onReset",
        "onResetCapture",
        "onSubmit",
        "onSubmitCapture",
        "onInvalid",
        "onInvalidCapture",
        "onLoad",
        "onLoadCapture",
        "onError",
        "onErrorCapture",
        "onKeyDown",
        "onKeyDownCapture",
        "onKeyPress",
        "onKeyPressCapture",
        "onKeyUp",
        "onKeyUpCapture",
        "onAbort",
        "onAbortCapture",
        "onCanPlay",
        "onCanPlayCapture",
        "onCanPlayThrough",
        "onCanPlayThroughCapture",
        "onDurationChange",
        "onDurationChangeCapture",
        "onEmptied",
        "onEmptiedCapture",
        "onEncrypted",
        "onEncryptedCapture",
        "onEnded",
        "onEndedCapture",
        "onLoadedData",
        "onLoadedDataCapture",
        "onLoadedMetadata",
        "onLoadedMetadataCapture",
        "onLoadStart",
        "onLoadStartCapture",
        "onPause",
        "onPauseCapture",
        "onPlay",
        "onPlayCapture",
        "onPlaying",
        "onPlayingCapture",
        "onProgress",
        "onProgressCapture",
        "onRateChange",
        "onRateChangeCapture",
        "onSeeked",
        "onSeekedCapture",
        "onSeeking",
        "onSeekingCapture",
        "onStalled",
        "onStalledCapture",
        "onSuspend",
        "onSuspendCapture",
        "onTimeUpdate",
        "onTimeUpdateCapture",
        "onVolumeChange",
        "onVolumeChangeCapture",
        "onWaiting",
        "onWaitingCapture",
        "onAuxClick",
        "onAuxClickCapture",
        "onClick",
        "onClickCapture",
        "onContextMenu",
        "onContextMenuCapture",
        "onDoubleClick",
        "onDoubleClickCapture",
        "onDrag",
        "onDragCapture",
        "onDragEnd",
        "onDragEndCapture",
        "onDragEnter",
        "onDragEnterCapture",
        "onDragExit",
        "onDragExitCapture",
        "onDragLeave",
        "onDragLeaveCapture",
        "onDragOver",
        "onDragOverCapture",
        "onDragStart",
        "onDragStartCapture",
        "onDrop",
        "onDropCapture",
        "onMouseDown",
        "onMouseDownCapture",
        "onMouseEnter",
        "onMouseLeave",
        "onMouseMove",
        "onMouseMoveCapture",
        "onMouseOut",
        "onMouseOutCapture",
        "onMouseOver",
        "onMouseOverCapture",
        "onMouseUp",
        "onMouseUpCapture",
        "onSelect",
        "onSelectCapture",
        "onTouchCancel",
        "onTouchCancelCapture",
        "onTouchEnd",
        "onTouchEndCapture",
        "onTouchMove",
        "onTouchMoveCapture",
        "onTouchStart",
        "onTouchStartCapture",
        "onPointerDown",
        "onPointerDownCapture",
        "onPointerMove",
        "onPointerMoveCapture",
        "onPointerUp",
        "onPointerUpCapture",
        "onPointerCancel",
        "onPointerCancelCapture",
        "onPointerEnter",
        "onPointerEnterCapture",
        "onPointerLeave",
        "onPointerLeaveCapture",
        "onPointerOver",
        "onPointerOverCapture",
        "onPointerOut",
        "onPointerOutCapture",
        "onGotPointerCapture",
        "onGotPointerCaptureCapture",
        "onLostPointerCapture",
        "onLostPointerCaptureCapture",
        "onScroll",
        "onScrollCapture",
        "onWheel",
        "onWheelCapture",
        "onAnimationStart",
        "onAnimationStartCapture",
        "onAnimationEnd",
        "onAnimationEndCapture",
        "onAnimationIteration",
        "onAnimationIterationCapture",
        "onTransitionEnd",
        "onTransitionEndCapture",
      ];
      function i(e) {
        return "string" == typeof e && n.includes(e);
      }
    },
    52451: (e, t) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let r = /^(?:0|[1-9]\d*)$/;
      t.isIndex = function (e, t = Number.MAX_SAFE_INTEGER) {
        switch (typeof e) {
          case "number":
            return Number.isInteger(e) && e >= 0 && e < t;
          case "symbol":
            return !1;
          case "string":
            return r.test(e);
        }
      };
    },
    52550: (e, t, r) => {
      "use strict";
      r.d(t, { l3: () => x, m7: () => w });
      var n = r(12115),
        i = r(81024),
        a = r(15195),
        o = new (r(68463).A)(),
        u = "recharts.syncEvent.tooltip",
        l = "recharts.syncEvent.brush",
        c = r(33308),
        s = r(83507),
        f = r(18305),
        d = r(72481);
      function h(e) {
        return e.tooltip.syncInteraction;
      }
      var p = r(90167),
        y = r(94078),
        v = r(49580),
        g = ["x", "y"];
      function m(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : m(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function x() {
        var e,
          t,
          r,
          f,
          h,
          m,
          x,
          w,
          O,
          _,
          M,
          j = (0, i.j)();
        ((0, n.useEffect)(() => {
          j((0, c.dl)());
        }, [j]),
          (e = (0, i.G)(a.lZ)),
          (t = (0, i.G)(a.pH)),
          (r = (0, i.j)()),
          (f = (0, i.G)(a.hX)),
          (h = (0, i.G)(d.R4)),
          (m = (0, p.WX)()),
          (x = (0, p.sk)()),
          (w = (0, i.G)((e) => e.rootProps.className)),
          (0, n.useEffect)(() => {
            if (null == e) return v.lQ;
            var n = (n, i, a) => {
              if (t !== a && e === n) {
                if ("index" === f) {
                  if (
                    x &&
                    null != i &&
                    null != (o = i.payload) &&
                    o.coordinate &&
                    i.payload.sourceViewBox
                  ) {
                    var o,
                      u,
                      l = i.payload.coordinate,
                      { x: c, y: d } = l,
                      p = (function (e, t) {
                        if (null == e) return {};
                        var r,
                          n,
                          i = (function (e, t) {
                            if (null == e) return {};
                            var r = {};
                            for (var n in e)
                              if ({}.hasOwnProperty.call(e, n)) {
                                if (-1 !== t.indexOf(n)) continue;
                                r[n] = e[n];
                              }
                            return r;
                          })(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var a = Object.getOwnPropertySymbols(e);
                          for (n = 0; n < a.length; n++)
                            ((r = a[n]),
                              -1 === t.indexOf(r) &&
                                {}.propertyIsEnumerable.call(e, r) &&
                                (i[r] = e[r]));
                        }
                        return i;
                      })(l, g),
                      { x: y, y: v, width: w, height: O } = i.payload.sourceViewBox,
                      _ = b(
                        b({}, p),
                        {},
                        {
                          x: x.x + (w ? (c - y) / w : 0) * x.width,
                          y: x.y + (O ? (d - v) / O : 0) * x.height,
                        }
                      );
                    r(b(b({}, i), {}, { payload: b(b({}, i.payload), {}, { coordinate: _ }) }));
                  } else r(i);
                  return;
                }
                if (null != h) {
                  if ("function" == typeof f) {
                    var M = f(h, {
                      activeTooltipIndex:
                        null == i.payload.index ? void 0 : Number(i.payload.index),
                      isTooltipActive: i.payload.active,
                      activeIndex: null == i.payload.index ? void 0 : Number(i.payload.index),
                      activeLabel: i.payload.label,
                      activeDataKey: i.payload.dataKey,
                      activeCoordinate: i.payload.coordinate,
                    });
                    u = h[M];
                  } else "value" === f && (u = h.find((e) => String(e.value) === i.payload.label));
                  var { coordinate: j } = i.payload;
                  if (null == u || !1 === i.payload.active || null == j || null == x)
                    return void r(
                      (0, s.E1)({
                        active: !1,
                        coordinate: void 0,
                        dataKey: void 0,
                        index: null,
                        label: void 0,
                        sourceViewBox: void 0,
                        graphicalItemId: void 0,
                      })
                    );
                  var { x: A, y: S } = j,
                    P = Math.min(A, x.x + x.width),
                    E = Math.min(S, x.y + x.height),
                    k = {
                      x: "horizontal" === m ? u.coordinate : P,
                      y: "horizontal" === m ? E : u.coordinate,
                    };
                  r(
                    (0, s.E1)({
                      active: i.payload.active,
                      coordinate: k,
                      dataKey: i.payload.dataKey,
                      index: String(u.index),
                      label: i.payload.label,
                      sourceViewBox: i.payload.sourceViewBox,
                      graphicalItemId: i.payload.graphicalItemId,
                    })
                  );
                }
              }
            };
            return (
              o.on(u, n),
              () => {
                o.off(u, n);
              }
            );
          }, [w, r, t, e, f, h, m, x]),
          (O = (0, i.G)(a.lZ)),
          (_ = (0, i.G)(a.pH)),
          (M = (0, i.j)()),
          (0, n.useEffect)(() => {
            if (null == O) return v.lQ;
            var e = (e, t, r) => {
              _ !== r && O === e && M((0, y.M)(t));
            };
            return (
              o.on(l, e),
              () => {
                o.off(l, e);
              }
            );
          }, [M, _, O]));
      }
      function w(e, t, r, l, c, d) {
        var y = (0, i.G)((r) => (0, f.dp)(r, e, t)),
          v = (0, i.G)(a.pH),
          g = (0, i.G)(a.lZ),
          m = (0, i.G)(a.hX),
          b = (0, i.G)(h),
          x = null == b ? void 0 : b.active,
          w = (0, p.sk)();
        (0, n.useEffect)(() => {
          if (!x && null != g && null != v) {
            var e = (0, s.E1)({
              active: d,
              coordinate: r,
              dataKey: y,
              index: c,
              label: "number" == typeof l ? String(l) : l,
              sourceViewBox: w,
              graphicalItemId: void 0,
            });
            o.emit(u, g, e, v);
          }
        }, [x, r, y, c, l, v, g, m, d, w]);
      }
    },
    54241: (e, t, r) => {
      e.exports = r(93276).get;
    },
    55572: (e, t, r) => {
      "use strict";
      r.d(t, { L: () => Y });
      var n = r(12115),
        i = r(90167),
        a = r(36410),
        o = r(35704),
        u = r(69905),
        l = r(81024),
        c = r(50257),
        s = r(92377),
        f = r(96372),
        d = r(23343);
      function h(e) {
        var { zIndex: t, isPanorama: r } = e,
          i = (0, n.useRef)(null),
          a = (0, l.j)();
        return (
          (0, n.useLayoutEffect)(
            () => (
              i.current && a((0, f.WO)({ zIndex: t, element: i.current, isPanorama: r })),
              () => {
                a((0, f.B8)({ zIndex: t, isPanorama: r }));
              }
            ),
            [a, t, r]
          ),
          n.createElement("g", { tabIndex: -1, ref: i })
        );
      }
      function p(e) {
        var { children: t, isPanorama: r } = e,
          i = (0, l.G)(d.I);
        if (!i || 0 === i.length) return t;
        var a = i.filter((e) => e < 0),
          o = i.filter((e) => e > 0);
        return n.createElement(
          n.Fragment,
          null,
          a.map((e) => n.createElement(h, { key: e, zIndex: e, isPanorama: r })),
          t,
          o.map((e) => n.createElement(h, { key: e, zIndex: e, isPanorama: r }))
        );
      }
      var y = ["children"];
      function v() {
        return (v = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      var g = { width: "100%", height: "100%", display: "block" },
        m = (0, n.forwardRef)((e, t) => {
          var r,
            o,
            l = (0, i.yi)(),
            c = (0, i.rY)(),
            f = (0, a.$)();
          if (!(0, s.F)(l) || !(0, s.F)(c)) return null;
          var { children: d, otherAttributes: h, title: p, desc: y } = e;
          return (
            null != h &&
              ((r = "number" == typeof h.tabIndex ? h.tabIndex : f ? 0 : void 0),
              (o = "string" == typeof h.role ? h.role : f ? "application" : void 0)),
            n.createElement(
              u.u,
              v({}, h, {
                title: p,
                desc: y,
                role: o,
                tabIndex: r,
                width: l,
                height: c,
                style: g,
                ref: t,
              }),
              d
            )
          );
        }),
        b = (e) => {
          var { children: t } = e,
            r = (0, l.G)(c.U);
          if (!r) return null;
          var { width: i, height: a, y: o, x: s } = r;
          return n.createElement(u.u, { width: i, height: a, x: s, y: o }, t);
        },
        x = (0, n.forwardRef)((e, t) => {
          var { children: r } = e,
            i = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                i = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                      if (-1 !== t.indexOf(n)) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                  ((r = a[n]),
                    -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
              }
              return i;
            })(e, y);
          return (0, o.r)()
            ? n.createElement(b, null, n.createElement(p, { isPanorama: !0 }, r))
            : n.createElement(m, v({ ref: t }, i), n.createElement(p, { isPanorama: !1 }, r));
        }),
        w = r(2821),
        O = r(83507),
        _ = r(75754),
        M = r(52550),
        j = r(85080),
        A = r(27588),
        S = r(38116),
        P = r(49074),
        E = r(37205),
        k = r(20282),
        C = r(64940),
        T = r(26265),
        D = r(49580);
      function N(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function I() {
        return (I = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      var z = () => ((0, M.l3)(), null);
      function L(e) {
        if ("number" == typeof e) return e;
        if ("string" == typeof e) {
          var t = parseFloat(e);
          if (!Number.isNaN(t)) return t;
        }
        return 0;
      }
      var R = (0, n.forwardRef)((e, t) => {
          var r,
            a,
            o = (0, n.useRef)(null),
            [u, l] = (0, n.useState)({
              containerWidth: L(null == (r = e.style) ? void 0 : r.width),
              containerHeight: L(null == (a = e.style) ? void 0 : a.height),
            }),
            c = (0, n.useCallback)((e, t) => {
              l((r) => {
                var n = Math.round(e),
                  i = Math.round(t);
                return r.containerWidth === n && r.containerHeight === i
                  ? r
                  : { containerWidth: n, containerHeight: i };
              });
            }, []),
            s = (0, n.useCallback)(
              (e) => {
                if (
                  ("function" == typeof t && t(e),
                  null != e && "undefined" != typeof ResizeObserver)
                ) {
                  var { width: r, height: n } = e.getBoundingClientRect();
                  c(r, n);
                  var i = new ResizeObserver((e) => {
                    var { width: t, height: r } = e[0].contentRect;
                    c(t, r);
                  });
                  (i.observe(e), (o.current = i));
                }
              },
              [t, c]
            );
          return (
            (0, n.useEffect)(
              () => () => {
                var e = o.current;
                null != e && e.disconnect();
              },
              [c]
            ),
            n.createElement(
              n.Fragment,
              null,
              n.createElement(i.A3, { width: u.containerWidth, height: u.containerHeight }),
              n.createElement("div", I({ ref: s }, e))
            )
          );
        }),
        F = (0, n.forwardRef)((e, t) => {
          var { width: r, height: a } = e,
            [o, u] = (0, n.useState)({ containerWidth: L(r), containerHeight: L(a) }),
            l = (0, n.useCallback)((e, t) => {
              u((r) => {
                var n = Math.round(e),
                  i = Math.round(t);
                return r.containerWidth === n && r.containerHeight === i
                  ? r
                  : { containerWidth: n, containerHeight: i };
              });
            }, []),
            c = (0, n.useCallback)(
              (e) => {
                if (("function" == typeof t && t(e), null != e)) {
                  var { width: r, height: n } = e.getBoundingClientRect();
                  l(r, n);
                }
              },
              [t, l]
            );
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(i.A3, { width: o.containerWidth, height: o.containerHeight }),
            n.createElement("div", I({ ref: c }, e))
          );
        }),
        $ = (0, n.forwardRef)((e, t) => {
          var { width: r, height: a } = e;
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(i.A3, { width: r, height: a }),
            n.createElement("div", I({ ref: t }, e))
          );
        }),
        U = (0, n.forwardRef)((e, t) => {
          var { width: r, height: i } = e;
          return (0, D._3)(r) || (0, D._3)(i)
            ? n.createElement(F, I({}, e, { ref: t }))
            : n.createElement($, I({}, e, { ref: t }));
        }),
        H = (0, n.forwardRef)((e, t) => {
          var {
              children: r,
              className: i,
              height: a,
              onClick: o,
              onContextMenu: u,
              onDoubleClick: c,
              onMouseDown: f,
              onMouseEnter: d,
              onMouseLeave: h,
              onMouseMove: p,
              onMouseUp: y,
              onTouchEnd: v,
              onTouchMove: g,
              onTouchStart: m,
              style: b,
              width: x,
              responsive: M,
              dispatchTouchEvents: D = !0,
            } = e,
            I = (0, n.useRef)(null),
            L = (0, l.j)(),
            [F, $] = (0, n.useState)(null),
            [H, B] = (0, n.useState)(null),
            K = (function () {
              var e = (0, l.j)(),
                [t, r] = (0, n.useState)(null),
                i = (0, l.G)(A.et);
              return (
                (0, n.useEffect)(() => {
                  if (null != t) {
                    var r = t.getBoundingClientRect().width / t.offsetWidth;
                    (0, s.H)(r) && r !== i && e((0, S.hF)(r));
                  }
                }, [t, e, i]),
                r
              );
            })(),
            Z = (0, T.w)(),
            W = (null == Z ? void 0 : Z.width) > 0 ? Z.width : x,
            q = (null == Z ? void 0 : Z.height) > 0 ? Z.height : a,
            Y = (0, n.useCallback)(
              (e) => {
                (K(e), "function" == typeof t && t(e), $(e), B(e), null != e && (I.current = e));
              },
              [K, t, $, B]
            ),
            V = (0, n.useCallback)(
              (e) => {
                (L((0, _.ky)(e)), L((0, P.y)({ handler: o, reactEvent: e })));
              },
              [L, o]
            ),
            G = (0, n.useCallback)(
              (e) => {
                (L((0, _.dj)(e)), L((0, P.y)({ handler: d, reactEvent: e })));
              },
              [L, d]
            ),
            X = (0, n.useCallback)(
              (e) => {
                (L((0, O.xS)()), L((0, P.y)({ handler: h, reactEvent: e })));
              },
              [L, h]
            ),
            J = (0, n.useCallback)(
              (e) => {
                (L((0, _.dj)(e)), L((0, P.y)({ handler: p, reactEvent: e })));
              },
              [L, p]
            ),
            Q = (0, n.useCallback)(() => {
              L((0, j.Ru)());
            }, [L]),
            ee = (0, n.useCallback)(
              (e) => {
                L((0, j.uZ)(e.key));
              },
              [L]
            ),
            et = (0, n.useCallback)(
              (e) => {
                L((0, P.y)({ handler: u, reactEvent: e }));
              },
              [L, u]
            ),
            er = (0, n.useCallback)(
              (e) => {
                L((0, P.y)({ handler: c, reactEvent: e }));
              },
              [L, c]
            ),
            en = (0, n.useCallback)(
              (e) => {
                L((0, P.y)({ handler: f, reactEvent: e }));
              },
              [L, f]
            ),
            ei = (0, n.useCallback)(
              (e) => {
                L((0, P.y)({ handler: y, reactEvent: e }));
              },
              [L, y]
            ),
            ea = (0, n.useCallback)(
              (e) => {
                L((0, P.y)({ handler: m, reactEvent: e }));
              },
              [L, m]
            ),
            eo = (0, n.useCallback)(
              (e) => {
                (D && L((0, E.e)(e)), L((0, P.y)({ handler: g, reactEvent: e })));
              },
              [L, D, g]
            ),
            eu = (0, n.useCallback)(
              (e) => {
                L((0, P.y)({ handler: v, reactEvent: e }));
              },
              [L, v]
            );
          return n.createElement(
            k.$.Provider,
            { value: F },
            n.createElement(
              C.t.Provider,
              { value: H },
              n.createElement(
                !0 === M ? R : U,
                {
                  width: null != W ? W : null == b ? void 0 : b.width,
                  height: null != q ? q : null == b ? void 0 : b.height,
                  className: (0, w.$)("recharts-wrapper", i),
                  style: (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? N(Object(r), !0).forEach(function (t) {
                            var n, i, a;
                            ((n = e),
                              (i = t),
                              (a = r[t]),
                              (i = (function (e) {
                                var t = (function (e, t) {
                                  if ("object" != typeof e || !e) return e;
                                  var r = e[Symbol.toPrimitive];
                                  if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.");
                                  }
                                  return ("string" === t ? String : Number)(e);
                                })(e, "string");
                                return "symbol" == typeof t ? t : t + "";
                              })(i)) in n
                                ? Object.defineProperty(n, i, {
                                    value: a,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                  })
                                : (n[i] = a));
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : N(Object(r)).forEach(function (t) {
                              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                    }
                    return e;
                  })({ position: "relative", cursor: "default", width: W, height: q }, b),
                  onClick: V,
                  onContextMenu: et,
                  onDoubleClick: er,
                  onFocus: Q,
                  onKeyDown: ee,
                  onMouseDown: en,
                  onMouseEnter: G,
                  onMouseLeave: X,
                  onMouseMove: J,
                  onMouseUp: ei,
                  onTouchEnd: eu,
                  onTouchMove: eo,
                  onTouchStart: ea,
                  ref: Y,
                },
                n.createElement(z, null),
                r
              )
            )
          );
        }),
        B = r(70806),
        K = (0, n.createContext)(void 0),
        Z = (e) => {
          var { children: t } = e,
            [r] = (0, n.useState)("".concat((0, D.NF)("recharts"), "-clip")),
            i = (0, B.oM)();
          if (null == i) return null;
          var { x: a, y: o, width: u, height: l } = i;
          return n.createElement(
            K.Provider,
            { value: r },
            n.createElement(
              "defs",
              null,
              n.createElement(
                "clipPath",
                { id: r },
                n.createElement("rect", { x: a, y: o, height: l, width: u })
              )
            ),
            t
          );
        },
        W = r(4264),
        q = [
          "width",
          "height",
          "responsive",
          "children",
          "className",
          "style",
          "compact",
          "title",
          "desc",
        ],
        Y = (0, n.forwardRef)((e, t) => {
          var {
              width: r,
              height: a,
              responsive: o,
              children: u,
              className: l,
              style: c,
              compact: s,
              title: f,
              desc: d,
            } = e,
            h = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                i = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                      if (-1 !== t.indexOf(n)) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                  ((r = a[n]),
                    -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
              }
              return i;
            })(e, q),
            p = (0, W.uZ)(h);
          return s
            ? n.createElement(
                n.Fragment,
                null,
                n.createElement(i.A3, { width: r, height: a }),
                n.createElement(x, { otherAttributes: p, title: f, desc: d }, u)
              )
            : n.createElement(
                H,
                {
                  className: l,
                  style: c,
                  width: r,
                  height: a,
                  responsive: null != o && o,
                  onClick: e.onClick,
                  onMouseLeave: e.onMouseLeave,
                  onMouseEnter: e.onMouseEnter,
                  onMouseMove: e.onMouseMove,
                  onMouseDown: e.onMouseDown,
                  onMouseUp: e.onMouseUp,
                  onContextMenu: e.onContextMenu,
                  onDoubleClick: e.onDoubleClick,
                  onTouchStart: e.onTouchStart,
                  onTouchMove: e.onTouchMove,
                  onTouchEnd: e.onTouchEnd,
                },
                n.createElement(
                  x,
                  { otherAttributes: p, title: f, desc: d, ref: t },
                  n.createElement(Z, null, u)
                )
              );
        });
    },
    55730: (e, t, r) => {
      "use strict";
      r.d(t, { a: () => o, y: () => u });
      var n = r(12115),
        i = r(52089),
        a = r(4264);
      function o(e) {
        var t = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            ((0, a.Rw)(r) || (0, a.Xc)(r) || (0, i.q)(r)) &&
            (t[r] = e[r]);
        return t;
      }
      function u(e) {
        return null == e
          ? null
          : (0, n.isValidElement)(e)
            ? o(e.props)
            : "object" != typeof e || Array.isArray(e)
              ? null
              : o(e);
      }
    },
    56942: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(33323),
        i = r(92673),
        a = r(89644);
      t.last = function (e) {
        if (a.isArrayLike(e)) return n.last(i.toArray(e));
      };
    },
    57048: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(36704),
        i = r(27761),
        a = r(42915),
        o = r(47226);
      t.iteratee = function (e) {
        if (null == e) return n.identity;
        switch (typeof e) {
          case "function":
            return e;
          case "object":
            if (Array.isArray(e) && 2 === e.length) return o.matchesProperty(e[0], e[1]);
            return a.matches(e);
          case "string":
          case "symbol":
          case "number":
            return i.property(e);
        }
      };
    },
    57333: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(12474);
      t.throttle = function (e, t = 0, r = {}) {
        let { leading: i = !0, trailing: a = !0 } = r;
        return n.debounce(e, t, { leading: i, maxWait: t, trailing: a });
      };
    },
    58672: (e, t, r) => {
      "use strict";
      r.d(t, { R: () => n });
      var n = function (e, t) {
        for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
          n[i - 2] = arguments[i];
        if (
          "undefined" != typeof console &&
          console.warn &&
          (void 0 === t && console.warn("LogUtils requires an error message argument"), !e)
        )
          if (void 0 === t)
            console.warn(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var a = 0;
            console.warn(t.replace(/%s/g, () => n[a++]));
          }
      };
    },
    60013: (e, t, r) => {
      "use strict";
      r.d(t, { h4: () => B });
      var n,
        i = Symbol.for("immer-nothing"),
        a = Symbol.for("immer-draftable"),
        o = Symbol.for("immer-state");
      function u(e) {
        throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
      }
      var l = Object.getPrototypeOf;
      function c(e) {
        return !!e && !!e[o];
      }
      function s(e) {
        return !!e && (h(e) || Array.isArray(e) || !!e[a] || !!e.constructor?.[a] || m(e) || b(e));
      }
      var f = Object.prototype.constructor.toString(),
        d = new WeakMap();
      function h(e) {
        if (!e || "object" != typeof e) return !1;
        let t = Object.getPrototypeOf(e);
        if (null === t || t === Object.prototype) return !0;
        let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
        if (r === Object) return !0;
        if ("function" != typeof r) return !1;
        let n = d.get(r);
        return (void 0 === n && ((n = Function.toString.call(r)), d.set(r, n)), n === f);
      }
      function p(e, t, r = !0) {
        0 === y(e)
          ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((r) => {
              t(r, e[r], e);
            })
          : e.forEach((r, n) => t(n, r, e));
      }
      function y(e) {
        let t = e[o];
        return t ? t.type_ : Array.isArray(e) ? 1 : m(e) ? 2 : 3 * !!b(e);
      }
      function v(e, t) {
        return 2 === y(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
      }
      function g(e, t, r) {
        let n = y(e);
        2 === n ? e.set(t, r) : 3 === n ? e.add(r) : (e[t] = r);
      }
      function m(e) {
        return e instanceof Map;
      }
      function b(e) {
        return e instanceof Set;
      }
      function x(e) {
        return e.copy_ || e.base_;
      }
      function w(e, t) {
        if (m(e)) return new Map(e);
        if (b(e)) return new Set(e);
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        let r = h(e);
        if (!0 !== t && ("class_only" !== t || r)) {
          let t = l(e);
          return null !== t && r ? { ...e } : Object.assign(Object.create(t), e);
        }
        {
          let t = Object.getOwnPropertyDescriptors(e);
          delete t[o];
          let r = Reflect.ownKeys(t);
          for (let n = 0; n < r.length; n++) {
            let i = r[n],
              a = t[i];
            (!1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
              (a.get || a.set) &&
                (t[i] = { configurable: !0, writable: !0, enumerable: a.enumerable, value: e[i] }));
          }
          return Object.create(l(e), t);
        }
      }
      function O(e, t = !1) {
        return (
          M(e) ||
            c(e) ||
            !s(e) ||
            (y(e) > 1 && Object.defineProperties(e, { set: _, add: _, clear: _, delete: _ }),
            Object.freeze(e),
            t && Object.values(e).forEach((e) => O(e, !0))),
          e
        );
      }
      var _ = {
        value: function () {
          u(2);
        },
      };
      function M(e) {
        return null === e || "object" != typeof e || Object.isFrozen(e);
      }
      var j = {};
      function A(e) {
        let t = j[e];
        return (t || u(0, e), t);
      }
      function S(e, t) {
        t && (A("Patches"), (e.patches_ = []), (e.inversePatches_ = []), (e.patchListener_ = t));
      }
      function P(e) {
        (E(e), e.drafts_.forEach(C), (e.drafts_ = null));
      }
      function E(e) {
        e === n && (n = e.parent_);
      }
      function k(e) {
        return (n = {
          drafts_: [],
          parent_: n,
          immer_: e,
          canAutoFreeze_: !0,
          unfinalizedDrafts_: 0,
        });
      }
      function C(e) {
        let t = e[o];
        0 === t.type_ || 1 === t.type_ ? t.revoke_() : (t.revoked_ = !0);
      }
      function T(e, t) {
        t.unfinalizedDrafts_ = t.drafts_.length;
        let r = t.drafts_[0];
        return (
          void 0 !== e && e !== r
            ? (r[o].modified_ && (P(t), u(4)),
              s(e) && ((e = D(t, e)), t.parent_ || I(t, e)),
              t.patches_ &&
                A("Patches").generateReplacementPatches_(
                  r[o].base_,
                  e,
                  t.patches_,
                  t.inversePatches_
                ))
            : (e = D(t, r, [])),
          P(t),
          t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
          e !== i ? e : void 0
        );
      }
      function D(e, t, r) {
        if (M(t)) return t;
        let n = e.immer_.shouldUseStrictIteration(),
          i = t[o];
        if (!i) return (p(t, (n, a) => N(e, i, t, n, a, r), n), t);
        if (i.scope_ !== e) return t;
        if (!i.modified_) return (I(e, i.base_, !0), i.base_);
        if (!i.finalized_) {
          ((i.finalized_ = !0), i.scope_.unfinalizedDrafts_--);
          let t = i.copy_,
            a = t,
            o = !1;
          (3 === i.type_ && ((a = new Set(t)), t.clear(), (o = !0)),
            p(a, (n, a) => N(e, i, t, n, a, r, o), n),
            I(e, t, !1),
            r && e.patches_ && A("Patches").generatePatches_(i, r, e.patches_, e.inversePatches_));
        }
        return i.copy_;
      }
      function N(e, t, r, n, i, a, o) {
        if (null == i || ("object" != typeof i && !o)) return;
        let u = M(i);
        if (!u || o) {
          if (c(i)) {
            let o = D(e, i, a && t && 3 !== t.type_ && !v(t.assigned_, n) ? a.concat(n) : void 0);
            if ((g(r, n, o), !c(o))) return;
            e.canAutoFreeze_ = !1;
          } else o && r.add(i);
          if (s(i) && !u) {
            if (
              (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) ||
              (t && t.base_ && t.base_[n] === i && u)
            )
              return;
            (D(e, i),
              (!t || !t.scope_.parent_) &&
                "symbol" != typeof n &&
                (m(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) &&
                I(e, i));
          }
        }
      }
      function I(e, t, r = !1) {
        !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && O(t, r);
      }
      var z = {
          get(e, t) {
            if (t === o) return e;
            let r = x(e);
            if (!v(r, t)) {
              var n = e,
                i = r,
                a = t;
              let o = F(i, a);
              return o ? ("value" in o ? o.value : o.get?.call(n.draft_)) : void 0;
            }
            let u = r[t];
            return e.finalized_ || !s(u)
              ? u
              : u === R(e.base_, t)
                ? (U(e), (e.copy_[t] = H(u, e)))
                : u;
          },
          has: (e, t) => t in x(e),
          ownKeys: (e) => Reflect.ownKeys(x(e)),
          set(e, t, r) {
            let n = F(x(e), t);
            if (n?.set) return (n.set.call(e.draft_, r), !0);
            if (!e.modified_) {
              let n = R(x(e), t),
                i = n?.[o];
              if (i && i.base_ === r) return ((e.copy_[t] = r), (e.assigned_[t] = !1), !0);
              if (
                (r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n) &&
                (void 0 !== r || v(e.base_, t))
              )
                return !0;
              (U(e), $(e));
            }
            return (
              !!(
                (e.copy_[t] === r && (void 0 !== r || t in e.copy_)) ||
                (Number.isNaN(r) && Number.isNaN(e.copy_[t]))
              ) || ((e.copy_[t] = r), (e.assigned_[t] = !0), !0)
            );
          },
          deleteProperty: (e, t) => (
            void 0 !== R(e.base_, t) || t in e.base_
              ? ((e.assigned_[t] = !1), U(e), $(e))
              : delete e.assigned_[t],
            e.copy_ && delete e.copy_[t],
            !0
          ),
          getOwnPropertyDescriptor(e, t) {
            let r = x(e),
              n = Reflect.getOwnPropertyDescriptor(r, t);
            return n
              ? {
                  writable: !0,
                  configurable: 1 !== e.type_ || "length" !== t,
                  enumerable: n.enumerable,
                  value: r[t],
                }
              : n;
          },
          defineProperty() {
            u(11);
          },
          getPrototypeOf: (e) => l(e.base_),
          setPrototypeOf() {
            u(12);
          },
        },
        L = {};
      function R(e, t) {
        let r = e[o];
        return (r ? x(r) : e)[t];
      }
      function F(e, t) {
        if (!(t in e)) return;
        let r = l(e);
        for (; r; ) {
          let e = Object.getOwnPropertyDescriptor(r, t);
          if (e) return e;
          r = l(r);
        }
      }
      function $(e) {
        !e.modified_ && ((e.modified_ = !0), e.parent_ && $(e.parent_));
      }
      function U(e) {
        e.copy_ || (e.copy_ = w(e.base_, e.scope_.immer_.useStrictShallowCopy_));
      }
      function H(e, t) {
        let r = m(e)
          ? A("MapSet").proxyMap_(e, t)
          : b(e)
            ? A("MapSet").proxySet_(e, t)
            : (function (e, t) {
                let r = Array.isArray(e),
                  i = {
                    type_: +!!r,
                    scope_: t ? t.scope_ : n,
                    modified_: !1,
                    finalized_: !1,
                    assigned_: {},
                    parent_: t,
                    base_: e,
                    draft_: null,
                    copy_: null,
                    revoke_: null,
                    isManual_: !1,
                  },
                  a = i,
                  o = z;
                r && ((a = [i]), (o = L));
                let { revoke: u, proxy: l } = Proxy.revocable(a, o);
                return ((i.draft_ = l), (i.revoke_ = u), l);
              })(e, t);
        return ((t ? t.scope_ : n).drafts_.push(r), r);
      }
      function B(e) {
        return e;
      }
      (p(z, (e, t) => {
        L[e] = function () {
          return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
        };
      }),
        (L.deleteProperty = function (e, t) {
          return L.set.call(this, e, t, void 0);
        }),
        (L.set = function (e, t, r) {
          return z.set.call(this, e[0], t, r, e[0]);
        }),
        new (class {
          constructor(e) {
            ((this.autoFreeze_ = !0),
              (this.useStrictShallowCopy_ = !1),
              (this.useStrictIteration_ = !0),
              (this.produce = (e, t, r) => {
                let n;
                if ("function" == typeof e && "function" != typeof t) {
                  let r = t;
                  t = e;
                  let n = this;
                  return function (e = r, ...i) {
                    return n.produce(e, (e) => t.call(this, e, ...i));
                  };
                }
                if (
                  ("function" != typeof t && u(6),
                  void 0 !== r && "function" != typeof r && u(7),
                  s(e))
                ) {
                  let i = k(this),
                    a = H(e, void 0),
                    o = !0;
                  try {
                    ((n = t(a)), (o = !1));
                  } finally {
                    o ? P(i) : E(i);
                  }
                  return (S(i, r), T(n, i));
                }
                if (e && "object" == typeof e) u(1, e);
                else {
                  if (
                    (void 0 === (n = t(e)) && (n = e),
                    n === i && (n = void 0),
                    this.autoFreeze_ && O(n, !0),
                    r)
                  ) {
                    let t = [],
                      i = [];
                    (A("Patches").generateReplacementPatches_(e, n, t, i), r(t, i));
                  }
                  return n;
                }
              }),
              (this.produceWithPatches = (e, t) => {
                let r, n;
                return "function" == typeof e
                  ? (t, ...r) => this.produceWithPatches(t, (t) => e(t, ...r))
                  : [
                      this.produce(e, t, (e, t) => {
                        ((r = e), (n = t));
                      }),
                      r,
                      n,
                    ];
              }),
              "boolean" == typeof e?.autoFreeze && this.setAutoFreeze(e.autoFreeze),
              "boolean" == typeof e?.useStrictShallowCopy &&
                this.setUseStrictShallowCopy(e.useStrictShallowCopy),
              "boolean" == typeof e?.useStrictIteration &&
                this.setUseStrictIteration(e.useStrictIteration));
          }
          createDraft(e) {
            var t;
            (s(e) || u(8),
              c(e) &&
                (c((t = e)) || u(10, t),
                (e = (function e(t) {
                  let r;
                  if (!s(t) || M(t)) return t;
                  let n = t[o],
                    i = !0;
                  if (n) {
                    if (!n.modified_) return n.base_;
                    ((n.finalized_ = !0),
                      (r = w(t, n.scope_.immer_.useStrictShallowCopy_)),
                      (i = n.scope_.immer_.shouldUseStrictIteration()));
                  } else r = w(t, !0);
                  return (
                    p(
                      r,
                      (t, n) => {
                        g(r, t, e(n));
                      },
                      i
                    ),
                    n && (n.finalized_ = !1),
                    r
                  );
                })(t))));
            let r = k(this),
              n = H(e, void 0);
            return ((n[o].isManual_ = !0), E(r), n);
          }
          finishDraft(e, t) {
            let r = e && e[o];
            (r && r.isManual_) || u(9);
            let { scope_: n } = r;
            return (S(n, t), T(void 0, n));
          }
          setAutoFreeze(e) {
            this.autoFreeze_ = e;
          }
          setUseStrictShallowCopy(e) {
            this.useStrictShallowCopy_ = e;
          }
          setUseStrictIteration(e) {
            this.useStrictIteration_ = e;
          }
          shouldUseStrictIteration() {
            return this.useStrictIteration_;
          }
          applyPatches(e, t) {
            let r;
            for (r = t.length - 1; r >= 0; r--) {
              let n = t[r];
              if (0 === n.path.length && "replace" === n.op) {
                e = n.value;
                break;
              }
            }
            r > -1 && (t = t.slice(r + 1));
            let n = A("Patches").applyPatches_;
            return c(e) ? n(e, t) : this.produce(e, (e) => n(e, t));
          }
        })().produce);
    },
    60512: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(96288),
        i = r(68795);
      t.range = function (e, t, r) {
        (r && "number" != typeof r && n.isIterateeCall(e, t, r) && (t = r = void 0),
          (e = i.toFinite(e)),
          void 0 === t ? ((t = e), (e = 0)) : (t = i.toFinite(t)),
          (r = void 0 === r ? (e < t ? 1 : -1) : i.toFinite(r)));
        let a = Math.max(Math.ceil((t - e) / (r || 1)), 0),
          o = Array(a);
        for (let t = 0; t < a; t++) ((o[t] = e), (e += r));
        return o;
      };
    },
    61060: (e, t, r) => {
      "use strict";
      function n(e, t) {
        return (
          (!!(Array.isArray(e) && Array.isArray(t)) && 0 === e.length && 0 === t.length) || e === t
        );
      }
      function i(e, t) {
        if (e.length === t.length) {
          for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
          return !0;
        }
        return !1;
      }
      r.d(t, { O: () => n, W: () => i });
    },
    63296: (e, t, r) => {
      "use strict";
      r.d(t, { JU: () => P, ZY: () => j, _I: () => E, zJ: () => O });
      var n = r(12115),
        i = r(2821),
        a = r(39346),
        o = r(49580),
        u = r(34010),
        l = r(90167),
        c = r(81024),
        s = r(14821),
        f = r(85224),
        d = r(55730),
        h = r(37808),
        p = r(30732),
        y = ["labelRef"],
        v = ["content"];
      function g(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r = {};
            for (var n in e)
              if ({}.hasOwnProperty.call(e, n)) {
                if (-1 !== t.indexOf(n)) continue;
                r[n] = e[n];
              }
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            ((r = a[n]),
              -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
        }
        return i;
      }
      function m(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : m(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      function x() {
        return (x = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      var w = (0, n.createContext)(null),
        O = (e) => {
          var { x: t, y: r, upperWidth: i, lowerWidth: a, width: o, height: u, children: l } = e,
            c = (0, n.useMemo)(
              () => ({ x: t, y: r, upperWidth: i, lowerWidth: a, width: o, height: u }),
              [t, r, i, a, o, u]
            );
          return n.createElement(w.Provider, { value: c }, l);
        },
        _ = () => {
          var e = (0, n.useContext)(w),
            t = (0, l.sk)();
          return e || (0, l.qC)(t);
        },
        M = (0, n.createContext)(null),
        j = (e) => null != e && "function" == typeof e,
        A = (e) => "cx" in e && (0, o.Et)(e.cx),
        S = { angle: 0, offset: 5, zIndex: p.I.label, position: "middle", textBreakAll: !1 };
      function P(e) {
        var t,
          r,
          p,
          m,
          w,
          O = (0, f.e)(e, S),
          {
            viewBox: j,
            position: P,
            value: E,
            children: k,
            content: C,
            className: T = "",
            textBreakAll: D,
            labelRef: N,
          } = O,
          I = ((t = (0, n.useContext)(M)), (r = (0, c.G)(s.D0)), t || r),
          z = _();
        if (
          !(p = null == j ? ("center" === P ? z : null != I ? I : z) : A(j) ? j : (0, l.qC)(j)) ||
          ((0, o.uy)(E) && (0, o.uy)(k) && !(0, n.isValidElement)(C) && "function" != typeof C)
        )
          return null;
        var L = b(b({}, O), {}, { viewBox: p });
        if ((0, n.isValidElement)(C)) {
          var { labelRef: R } = L,
            F = g(L, y);
          return (0, n.cloneElement)(C, F);
        }
        if ("function" == typeof C) {
          var { content: $ } = L,
            U = g(L, v);
          if (((m = (0, n.createElement)(C, U)), (0, n.isValidElement)(m))) return m;
        } else
          m = ((e) => {
            var { value: t, formatter: r } = e,
              n = (0, o.uy)(e.children) ? t : e.children;
            return "function" == typeof r ? r(n) : n;
          })(O);
        var H = (0, d.a)(O);
        if (A(p)) {
          if ("insideStart" === P || "insideEnd" === P || "end" === P)
            return ((e, t, r, a, l) => {
              let c, s;
              var f,
                d,
                { offset: h, className: p } = e,
                {
                  cx: y,
                  cy: v,
                  innerRadius: g,
                  outerRadius: m,
                  startAngle: b,
                  endAngle: w,
                  clockWise: O,
                } = l,
                _ = (g + m) / 2,
                M = ((c = b), (s = w), (0, o.sA)(s - c) * Math.min(Math.abs(s - c), 360)),
                j = M >= 0 ? 1 : -1;
              switch (t) {
                case "insideStart":
                  ((f = b + j * h), (d = O));
                  break;
                case "insideEnd":
                  ((f = w - j * h), (d = !O));
                  break;
                case "end":
                  ((f = w + j * h), (d = O));
                  break;
                default:
                  throw Error("Unsupported position ".concat(t));
              }
              d = M <= 0 ? d : !d;
              var A = (0, u.IZ)(y, v, _, f),
                S = (0, u.IZ)(y, v, _, f + (d ? 1 : -1) * 359),
                P = "M"
                  .concat(A.x, ",")
                  .concat(A.y, "\n    A")
                  .concat(_, ",")
                  .concat(_, ",0,1,")
                  .concat(+!d, ",\n    ")
                  .concat(S.x, ",")
                  .concat(S.y),
                E = (0, o.uy)(e.id) ? (0, o.NF)("recharts-radial-line-") : e.id;
              return n.createElement(
                "text",
                x({}, a, {
                  dominantBaseline: "central",
                  className: (0, i.$)("recharts-radial-bar-label", p),
                }),
                n.createElement("defs", null, n.createElement("path", { id: E, d: P })),
                n.createElement("textPath", { xlinkHref: "#".concat(E) }, r)
              );
            })(O, P, m, H, p);
          w = ((e, t, r) => {
            var { cx: n, cy: i, innerRadius: a, outerRadius: o, startAngle: l, endAngle: c } = e,
              s = (l + c) / 2;
            if ("outside" === r) {
              var { x: f, y: d } = (0, u.IZ)(n, i, o + t, s);
              return { x: f, y: d, textAnchor: f >= n ? "start" : "end", verticalAnchor: "middle" };
            }
            if ("center" === r)
              return { x: n, y: i, textAnchor: "middle", verticalAnchor: "middle" };
            if ("centerTop" === r)
              return { x: n, y: i, textAnchor: "middle", verticalAnchor: "start" };
            if ("centerBottom" === r)
              return { x: n, y: i, textAnchor: "middle", verticalAnchor: "end" };
            var { x: h, y: p } = (0, u.IZ)(n, i, (a + o) / 2, s);
            return { x: h, y: p, textAnchor: "middle", verticalAnchor: "middle" };
          })(p, O.offset, O.position);
        } else
          w = ((e, t) => {
            var r,
              { parentViewBox: n, offset: i, position: a } = e;
            null == n || A(n) || (r = n);
            var { x: u, y: l, upperWidth: c, lowerWidth: s, height: f } = t,
              d = u + (c - s) / 2,
              h = (u + d) / 2,
              p = (c + s) / 2,
              y = f >= 0 ? 1 : -1,
              v = y * i,
              g = y > 0 ? "end" : "start",
              m = y > 0 ? "start" : "end",
              x = c >= 0 ? 1 : -1,
              w = x * i,
              O = x > 0 ? "end" : "start",
              _ = x > 0 ? "start" : "end";
            if ("top" === a)
              return b(
                b({}, { x: u + c / 2, y: l - v, textAnchor: "middle", verticalAnchor: g }),
                r ? { height: Math.max(l - r.y, 0), width: c } : {}
              );
            if ("bottom" === a)
              return b(
                b({}, { x: d + s / 2, y: l + f + v, textAnchor: "middle", verticalAnchor: m }),
                r ? { height: Math.max(r.y + r.height - (l + f), 0), width: s } : {}
              );
            if ("left" === a) {
              var M = { x: h - w, y: l + f / 2, textAnchor: O, verticalAnchor: "middle" };
              return b(b({}, M), r ? { width: Math.max(M.x - r.x, 0), height: f } : {});
            }
            if ("right" === a) {
              var j = { x: h + p + w, y: l + f / 2, textAnchor: _, verticalAnchor: "middle" };
              return b(b({}, j), r ? { width: Math.max(r.x + r.width - j.x, 0), height: f } : {});
            }
            var S = r ? { width: p, height: f } : {};
            return "insideLeft" === a
              ? b({ x: h + w, y: l + f / 2, textAnchor: _, verticalAnchor: "middle" }, S)
              : "insideRight" === a
                ? b({ x: h + p - w, y: l + f / 2, textAnchor: O, verticalAnchor: "middle" }, S)
                : "insideTop" === a
                  ? b({ x: u + c / 2, y: l + v, textAnchor: "middle", verticalAnchor: m }, S)
                  : "insideBottom" === a
                    ? b({ x: d + s / 2, y: l + f - v, textAnchor: "middle", verticalAnchor: g }, S)
                    : "insideTopLeft" === a
                      ? b({ x: u + w, y: l + v, textAnchor: _, verticalAnchor: m }, S)
                      : "insideTopRight" === a
                        ? b({ x: u + c - w, y: l + v, textAnchor: O, verticalAnchor: m }, S)
                        : "insideBottomLeft" === a
                          ? b({ x: d + w, y: l + f - v, textAnchor: _, verticalAnchor: g }, S)
                          : "insideBottomRight" === a
                            ? b({ x: d + s - w, y: l + f - v, textAnchor: O, verticalAnchor: g }, S)
                            : a &&
                                "object" == typeof a &&
                                ((0, o.Et)(a.x) || (0, o._3)(a.x)) &&
                                ((0, o.Et)(a.y) || (0, o._3)(a.y))
                              ? b(
                                  {
                                    x: u + (0, o.F4)(a.x, p),
                                    y: l + (0, o.F4)(a.y, f),
                                    textAnchor: "end",
                                    verticalAnchor: "end",
                                  },
                                  S
                                )
                              : b(
                                  {
                                    x: u + c / 2,
                                    y: l + f / 2,
                                    textAnchor: "middle",
                                    verticalAnchor: "middle",
                                  },
                                  S
                                );
          })(O, p);
        return n.createElement(
          h.g,
          { zIndex: O.zIndex },
          n.createElement(
            a.EY,
            x({ ref: N, className: (0, i.$)("recharts-label", T) }, H, w, {
              textAnchor: (0, a.fU)(H.textAnchor) ? H.textAnchor : w.textAnchor,
              breakAll: D,
            }),
            m
          )
        );
      }
      function E(e) {
        var { label: t, labelRef: r } = e;
        return (
          ((e, t, r) => {
            if (!e) return null;
            var i = { viewBox: t, labelRef: r };
            return !0 === e
              ? n.createElement(P, x({ key: "label-implicit" }, i))
              : (0, o.vh)(e)
                ? n.createElement(P, x({ key: "label-implicit", value: e }, i))
                : (0, n.isValidElement)(e)
                  ? e.type === P
                    ? (0, n.cloneElement)(e, b({ key: "label-implicit" }, i))
                    : n.createElement(P, x({ key: "label-implicit", content: e }, i))
                  : j(e)
                    ? n.createElement(P, x({ key: "label-implicit", content: e }, i))
                    : e && "object" == typeof e
                      ? n.createElement(P, x({}, e, { key: "label-implicit" }, i))
                      : null;
          })(t, _(), r) || null
        );
      }
      P.displayName = "Label";
    },
    64680: (e, t, r) => {
      "use strict";
      r.d(t, { Pu: () => f });
      var n = r(33692);
      class i {
        get(e) {
          var t = this.cache.get(e);
          return (void 0 !== t && (this.cache.delete(e), this.cache.set(e, t)), t);
        }
        set(e, t) {
          if (this.cache.has(e)) this.cache.delete(e);
          else if (this.cache.size >= this.maxSize) {
            var r = this.cache.keys().next().value;
            null != r && this.cache.delete(r);
          }
          this.cache.set(e, t);
        }
        clear() {
          this.cache.clear();
        }
        size() {
          return this.cache.size;
        }
        constructor(e) {
          (!(function (e, t, r) {
            var n;
            (t =
              "symbol" ==
              typeof (n = (function (e, t) {
                if ("object" != typeof e || !e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(e, t || "default");
                  if ("object" != typeof n) return n;
                  throw TypeError("@@toPrimitive must return a primitive value.");
                }
                return ("string" === t ? String : Number)(e);
              })(t, "string"))
                ? n
                : n + "") in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r);
          })(this, "cache", new Map()),
            (this.maxSize = e));
        }
      }
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      var o = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(r), !0).forEach(function (t) {
                  var n, i, a;
                  ((n = e),
                    (i = t),
                    (a = r[t]),
                    (i = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                          var n = r.call(e, t || "default");
                          if ("object" != typeof n) return n;
                          throw TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : t + "";
                    })(i)) in n
                      ? Object.defineProperty(n, i, {
                          value: a,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (n[i] = a));
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : a(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
          }
          return e;
        })({}, { cacheSize: 2e3, enableCache: !0 }),
        u = new i(o.cacheSize),
        l = {
          position: "absolute",
          top: "-20000px",
          left: 0,
          padding: 0,
          margin: 0,
          border: "none",
          whiteSpace: "pre",
        },
        c = "recharts_measurement_span",
        s = (e, t) => {
          try {
            var r = document.getElementById(c);
            (r ||
              ((r = document.createElement("span")).setAttribute("id", c),
              r.setAttribute("aria-hidden", "true"),
              document.body.appendChild(r)),
              Object.assign(r.style, l, t),
              (r.textContent = "".concat(e)));
            var n = r.getBoundingClientRect();
            return { width: n.width, height: n.height };
          } catch (e) {
            return { width: 0, height: 0 };
          }
        },
        f = function (e) {
          var t,
            r,
            i,
            a,
            l,
            c,
            f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null == e || n.m.isSsr) return { width: 0, height: 0 };
          if (!o.enableCache) return s(e, f);
          var d =
              ((t = f.fontSize || ""),
              (r = f.fontFamily || ""),
              (i = f.fontWeight || ""),
              (a = f.fontStyle || ""),
              (l = f.letterSpacing || ""),
              (c = f.textTransform || ""),
              ""
                .concat(e, "|")
                .concat(t, "|")
                .concat(r, "|")
                .concat(i, "|")
                .concat(a, "|")
                .concat(l, "|")
                .concat(c)),
            h = u.get(d);
          if (h) return h;
          var p = s(e, f);
          return (u.set(d, p), p);
        };
    },
    64940: (e, t, r) => {
      "use strict";
      r.d(t, { M: () => a, t: () => i });
      var n = r(12115),
        i = (0, n.createContext)(null),
        a = () => (0, n.useContext)(i);
    },
    68570: (e, t, r) => {
      "use strict";
      r.d(t, { M: () => n });
      var n = (e) => e.tooltip.settings.axisId;
    },
    68795: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(35053);
      t.toFinite = function (e) {
        return e
          ? (e = n.toNumber(e)) === 1 / 0 || e === -1 / 0
            ? (e < 0 ? -1 : 1) * Number.MAX_VALUE
            : e == e
              ? e
              : 0
          : 0 === e
            ? e
            : 0;
      };
    },
    68997: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => l, _: () => c });
      var n = r(12115),
        i = r(35704),
        a = r(90167),
        o = r(81024),
        u = r(69277);
      function l(e) {
        var { legendPayload: t } = e,
          r = (0, o.j)(),
          a = (0, i.r)(),
          l = (0, n.useRef)(null);
        return (
          (0, n.useLayoutEffect)(() => {
            a ||
              (null === l.current
                ? r((0, u.Lx)(t))
                : l.current !== t && r((0, u.c5)({ prev: l.current, next: t })),
              (l.current = t));
          }, [r, a, t]),
          (0, n.useLayoutEffect)(
            () => () => {
              l.current && (r((0, u.u3)(l.current)), (l.current = null));
            },
            [r]
          ),
          null
        );
      }
      function c(e) {
        var { legendPayload: t } = e,
          r = (0, o.j)(),
          i = (0, o.G)(a.fz),
          l = (0, n.useRef)(null);
        return (
          (0, n.useLayoutEffect)(() => {
            ("centric" === i || "radial" === i) &&
              (null === l.current
                ? r((0, u.Lx)(t))
                : l.current !== t && r((0, u.c5)({ prev: l.current, next: t })),
              (l.current = t));
          }, [r, i, t]),
          (0, n.useLayoutEffect)(
            () => () => {
              l.current && (r((0, u.u3)(l.current)), (l.current = null));
            },
            [r]
          ),
          null
        );
      }
    },
    69277: (e, t, r) => {
      "use strict";
      r.d(t, { CU: () => d, Lx: () => c, c5: () => s, h1: () => l, hx: () => u, u3: () => f });
      var n = r(26286),
        i = r(78289),
        a = r(60013),
        o = (0, n.Z0)({
          name: "legend",
          initialState: {
            settings: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "middle",
              itemSorter: "value",
            },
            size: { width: 0, height: 0 },
            payload: [],
          },
          reducers: {
            setLegendSize(e, t) {
              ((e.size.width = t.payload.width), (e.size.height = t.payload.height));
            },
            setLegendSettings(e, t) {
              ((e.settings.align = t.payload.align),
                (e.settings.layout = t.payload.layout),
                (e.settings.verticalAlign = t.payload.verticalAlign),
                (e.settings.itemSorter = t.payload.itemSorter));
            },
            addLegendPayload: {
              reducer(e, t) {
                e.payload.push((0, a.h4)(t.payload));
              },
              prepare: (0, n.aA)(),
            },
            replaceLegendPayload: {
              reducer(e, t) {
                var { prev: r, next: n } = t.payload,
                  o = (0, i.ss)(e).payload.indexOf((0, a.h4)(r));
                o > -1 && (e.payload[o] = (0, a.h4)(n));
              },
              prepare: (0, n.aA)(),
            },
            removeLegendPayload: {
              reducer(e, t) {
                var r = (0, i.ss)(e).payload.indexOf((0, a.h4)(t.payload));
                r > -1 && e.payload.splice(r, 1);
              },
              prepare: (0, n.aA)(),
            },
          },
        }),
        {
          setLegendSize: u,
          setLegendSettings: l,
          addLegendPayload: c,
          replaceLegendPayload: s,
          removeLegendPayload: f,
        } = o.actions,
        d = o.reducer;
    },
    69905: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => l });
      var n = r(12115),
        i = r(2821),
        a = r(55730),
        o = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      var l = (0, n.forwardRef)((e, t) => {
        var {
            children: r,
            width: l,
            height: c,
            viewBox: s,
            className: f,
            style: d,
            title: h,
            desc: p,
          } = e,
          y = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                ((r = a[n]),
                  -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
            }
            return i;
          })(e, o),
          v = s || { width: l, height: c, x: 0, y: 0 },
          g = (0, i.$)("recharts-surface", f);
        return n.createElement(
          "svg",
          u({}, (0, a.a)(y), {
            className: g,
            width: l,
            height: c,
            style: d,
            viewBox: "".concat(v.x, " ").concat(v.y, " ").concat(v.width, " ").concat(v.height),
            ref: t,
          }),
          n.createElement("title", null, h),
          n.createElement("desc", null, p),
          r
        );
      });
    },
    70543: (e, t, r) => {
      "use strict";
      r.d(t, { aS: () => d, y$: () => h });
      var n = r(54241),
        i = r.n(n),
        a = r(12115),
        o = r(50475),
        u = r(49580),
        l = (e) => ("string" == typeof e ? e : e ? e.displayName || e.name || "Component" : ""),
        c = null,
        s = null,
        f = (e) => {
          if (e === c && Array.isArray(s)) return s;
          var t = [];
          return (
            a.Children.forEach(e, (e) => {
              (0, u.uy)(e) || ((0, o.zv)(e) ? (t = t.concat(f(e.props.children))) : t.push(e));
            }),
            (s = t),
            (c = e),
            t
          );
        };
      function d(e, t) {
        var r = [],
          n = [];
        return (
          (n = Array.isArray(t) ? t.map((e) => l(e)) : [l(t)]),
          f(e).forEach((e) => {
            var t = i()(e, "type.displayName") || i()(e, "type.name");
            t && -1 !== n.indexOf(t) && r.push(e);
          }),
          r
        );
      }
      var h = (e) => !e || "object" != typeof e || !("clipDot" in e) || !!e.clipDot;
    },
    70806: (e, t, r) => {
      "use strict";
      r.d(t, { EI: () => f, oM: () => s });
      var n = r(81024),
        i = r(72481),
        a = r(76069),
        o = r(8291),
        u = (0, a.Mz)([o.HZ], (e) => ({
          top: e.top,
          bottom: e.bottom,
          left: e.left,
          right: e.right,
        })),
        l = r(27588),
        c = (0, a.Mz)([u, l.Lp, l.A$], (e, t, r) => {
          if (e && null != t && null != r)
            return {
              x: e.left,
              y: e.top,
              width: Math.max(0, t - e.left - e.right),
              height: Math.max(0, r - e.top - e.bottom),
            };
        }),
        s = () => (0, n.G)(c),
        f = () => (0, n.G)(i.JG);
    },
    70846: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.isObjectLike = function (e) {
          return "object" == typeof e && null !== e;
        }));
    },
    72259: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => n });
      var n = (e, t) => t;
    },
    72481: (e, t, r) => {
      "use strict";
      r.d(t, {
        BZ: () => ep,
        eE: () => eb,
        Xb: () => ey,
        JG: () => eO,
        fx: () => ev,
        A2: () => eh,
        AA: () => T,
        yn: () => ex,
        FO: () => ee,
        gL: () => ei,
        fl: () => ea,
        R4: () => el,
        n4: () => I,
      });
      var n = r(76069),
        i = r(210),
        a = r(90167),
        o = r(51023),
        u = r(90135),
        l = r(15195),
        c = r(49580),
        s = r(15145),
        f = r(73406),
        d = r(85339),
        h = r(82601),
        p = r(21838),
        y = r(23125),
        v = r(27588),
        g = r(8291),
        m = r(74525),
        b = r(32403),
        x = r(25543),
        w = r(31474),
        O = r(68570),
        _ = r(95603),
        M = r(24021),
        j = r(35923),
        A = r(23857),
        S = r(20526),
        P = r(61060),
        E = (0, n.Mz)([i.Dn, a.fz, i.um, l.iO, _.R], i.sr),
        k = (0, n.Mz)(
          [(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems],
          (e, t) => [...e, ...t]
        ),
        C = (0, n.Mz)([_.R, O.M], i.eo),
        T = (0, n.Mz)([k, i.Dn, C], i.ec, { memoizeOptions: { resultEqualityCheck: P.O } }),
        D = (0, n.Mz)([T], (e) => e.filter(j.g)),
        N = (0, n.Mz)([T], i.rj, { memoizeOptions: { resultEqualityCheck: P.O } }),
        I = (0, n.Mz)([N, u.LF], i.Nk),
        z = (0, n.Mz)([D, u.LF, i.Dn], M.A),
        L = (0, n.Mz)([I, i.Dn, T], i.fb),
        R = (0, n.Mz)([i.Dn], i.S5),
        F = (0, n.Mz)([i.Dn], (e) => e.allowDataOverflow),
        $ = (0, n.Mz)([R, F], A.f5),
        U = (0, n.Mz)([T], (e) => e.filter(j.g)),
        H = (0, n.Mz)([z, U, l.eC, l.Lb], i.MK),
        B = (0, n.Mz)([H, u.LF, _.R, $], i.pM),
        K = (0, n.Mz)([T], i.IO),
        Z = (0, n.Mz)([I, i.Dn, K, i.CH, _.R], i.EZ, {
          memoizeOptions: { resultEqualityCheck: S.o },
        }),
        W = (0, n.Mz)([i.Kr, _.R, O.M], i.P9),
        q = (0, n.Mz)([W, _.R], i.Oz),
        Y = (0, n.Mz)([i.gT, _.R, O.M], i.P9),
        V = (0, n.Mz)([Y, _.R], i.q),
        G = (0, n.Mz)([i.$X, _.R, O.M], i.P9),
        X = (0, n.Mz)([G, _.R], i.bb),
        J = (0, n.Mz)([q, X, V], i.yi),
        Q = (0, n.Mz)([i.Dn, R, $, B, Z, J, a.fz, _.R], i.wL),
        ee = (0, n.Mz)([i.Dn, a.fz, I, L, l.eC, _.R, Q], i.tP),
        et = (0, n.Mz)([ee, i.Dn, E], i.xp),
        er = (0, n.Mz)([i.Dn, ee, et, _.R], i.g1),
        en = (e) => {
          var t = (0, _.R)(e),
            r = (0, O.M)(e);
          return (0, i.D5)(e, t, r, !1);
        },
        ei = (0, n.Mz)([i.Dn, en], s.I),
        ea = (0, n.Mz)([i.Dn, E, er, ei], i.Qn),
        eo = (0, n.Mz)([a.fz, L, i.Dn, _.R], i.tF),
        eu = (0, n.Mz)([a.fz, L, i.Dn, _.R], i.iv),
        el = (0, n.Mz)([a.fz, i.Dn, E, ea, en, eo, eu, _.R], (e, t, r, n, i, a, u, l) => {
          if (t) {
            var { type: s } = t,
              f = (0, o._L)(e, l);
            if (n) {
              var d = "scaleBand" === r && n.bandwidth ? n.bandwidth() / 2 : 2,
                h = "category" === s && n.bandwidth ? n.bandwidth() / d : 0;
              return ((h =
                "angleAxis" === l && null != i && (null == i ? void 0 : i.length) >= 2
                  ? 2 * (0, c.sA)(i[0] - i[1]) * h
                  : h),
              f && u)
                ? u.map((e, t) => ({ coordinate: n(e) + h, value: e, index: t, offset: h }))
                : n.domain().map((e, t) => ({
                    coordinate: n(e) + h,
                    value: a ? a[e] : e,
                    index: t,
                    offset: h,
                  }));
            }
          }
        }),
        ec = (0, n.Mz)([f.xH, f.Hw, (e) => e.tooltip.settings], (e, t, r) =>
          (0, f.$g)(r.shared, e, t)
        ),
        es = (e) => e.tooltip.settings.trigger,
        ef = (e) => e.tooltip.settings.defaultIndex,
        ed = (0, n.Mz)([x.J, ec, es, ef], h.i),
        eh = (0, n.Mz)([ed, I, i.K6, ee], p.P),
        ep = (0, n.Mz)([el, eh], d.E),
        ey = (0, n.Mz)([ed], (e) => {
          if (e) return e.dataKey;
        }),
        ev = (0, n.Mz)([ed], (e) => {
          if (e) return e.graphicalItemId;
        }),
        eg = (0, n.Mz)([x.J, ec, es, ef], m.q),
        em = (0, n.Mz)([v.Lp, v.A$, a.fz, g.HZ, el, ef, eg, b.x], y.o),
        eb = (0, n.Mz)([ed, em], (e, t) => (null != e && e.coordinate ? e.coordinate : t)),
        ex = (0, n.Mz)([ed], (e) => {
          var t;
          return null != (t = null == e ? void 0 : e.active) && t;
        }),
        ew = (0, n.Mz)([eg, eh, u.LF, i.K6, ep, b.x, ec], w.N),
        eO = (0, n.Mz)([ew], (e) => {
          if (null != e)
            return Array.from(new Set(e.map((e) => e.payload).filter((e) => null != e)));
        });
    },
    73255: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(1322),
        i = r(49484),
        a = r(25723);
      t.orderBy = function (e, t, r, o) {
        if (null == e) return [];
        ((r = o ? void 0 : r),
          Array.isArray(e) || (e = Object.values(e)),
          Array.isArray(t) || (t = null == t ? [null] : [t]),
          0 === t.length && (t = [null]),
          Array.isArray(r) || (r = null == r ? [] : [r]),
          (r = r.map((e) => String(e))));
        let u = (e, t) => {
            let r = e;
            for (let e = 0; e < t.length && null != r; ++e) r = r[t[e]];
            return r;
          },
          l = t.map((e) =>
            (Array.isArray(e) && 1 === e.length && (e = e[0]),
            null == e || "function" == typeof e || Array.isArray(e) || i.isKey(e))
              ? e
              : { key: e, path: a.toPath(e) }
          );
        return e
          .map((e) => ({
            original: e,
            criteria: l.map((t) => {
              var r, n;
              return (
                (r = t),
                null == (n = e) || null == r
                  ? n
                  : "object" == typeof r && "key" in r
                    ? Object.hasOwn(n, r.key)
                      ? n[r.key]
                      : u(n, r.path)
                    : "function" == typeof r
                      ? r(n)
                      : Array.isArray(r)
                        ? u(n, r)
                        : "object" == typeof n
                          ? n[r]
                          : n
              );
            }),
          }))
          .slice()
          .sort((e, t) => {
            for (let i = 0; i < l.length; i++) {
              let a = n.compareValues(e.criteria[i], t.criteria[i], r[i]);
              if (0 !== a) return a;
            }
            return 0;
          })
          .map((e) => e.original);
      };
    },
    73390: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.isTypedArray = function (e) {
          return ArrayBuffer.isView(e) && !(e instanceof DataView);
        }));
    },
    73406: (e, t, r) => {
      "use strict";
      r.d(t, { $g: () => o, Hw: () => a, Td: () => l, au: () => u, xH: () => i });
      var n = r(81024),
        i = (e) => e.options.defaultTooltipEventType,
        a = (e) => e.options.validateTooltipEventTypes;
      function o(e, t, r) {
        if (null == e) return t;
        var n = e ? "axis" : "item";
        return null == r ? t : r.includes(n) ? n : t;
      }
      function u(e, t) {
        return o(t, i(e), a(e));
      }
      function l(e) {
        return (0, n.G)((t) => u(t, e));
      }
    },
    73595: (e, t, r) => {
      "use strict";
      function n(e) {
        return function () {
          return e;
        };
      }
      r.d(t, { A: () => n });
    },
    74525: (e, t, r) => {
      "use strict";
      r.d(t, { q: () => n });
      var n = (e, t, r, n) => {
        if ("axis" === t) return e.tooltipItemPayloads;
        if (0 === e.tooltipItemPayloads.length) return [];
        if (
          null ==
            (i =
              "hover" === r
                ? e.itemInteraction.hover.graphicalItemId
                : e.itemInteraction.click.graphicalItemId) &&
          null != n
        ) {
          var i,
            a = e.tooltipItemPayloads[0];
          return null != a ? [a] : [];
        }
        return e.tooltipItemPayloads.filter((e) => {
          var t;
          return (null == (t = e.settings) ? void 0 : t.graphicalItemId) === i;
        });
      };
    },
    74797: (e, t, r) => {
      "use strict";
      r.d(t, { TK: () => u });
      var n = r(12115),
        i = r(94078),
        a = r(81024),
        o = r(35704),
        u = (e) => {
          var { chartData: t } = e,
            r = (0, a.j)(),
            u = (0, o.r)();
          return (
            (0, n.useEffect)(
              () =>
                u
                  ? () => {}
                  : (r((0, i.hq)(t)),
                    () => {
                      r((0, i.hq)(void 0));
                    }),
              [t, r, u]
            ),
            null
          );
        };
    },
    75190: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(12974);
      t.cloneDeep = function (e) {
        return n.cloneDeepWithImpl(e, void 0, e, new Map(), void 0);
      };
    },
    75754: (e, t, r) => {
      "use strict";
      r.d(t, { YF: () => c, dj: () => s, fP: () => f, ky: () => l });
      var n = r(26286),
        i = r(83507),
        a = r(98496),
        o = r(73406),
        u = r(94868),
        l = (0, n.VP)("mouseClick"),
        c = (0, n.Nc)();
      c.startListening({
        actionCreator: l,
        effect: (e, t) => {
          var r = e.payload,
            n = (0, a.g)(t.getState(), (0, u.w)(r));
          (null == n ? void 0 : n.activeIndex) != null &&
            t.dispatch(
              (0, i.jF)({
                activeIndex: n.activeIndex,
                activeDataKey: void 0,
                activeCoordinate: n.activeCoordinate,
              })
            );
        },
      });
      var s = (0, n.VP)("mouseMove"),
        f = (0, n.Nc)(),
        d = null;
      f.startListening({
        actionCreator: s,
        effect: (e, t) => {
          var r = e.payload;
          null !== d && cancelAnimationFrame(d);
          var n = (0, u.w)(r);
          d = requestAnimationFrame(() => {
            var e = t.getState();
            if ("axis" === (0, o.au)(e, e.tooltip.settings.shared)) {
              var r = (0, a.g)(e, n);
              (null == r ? void 0 : r.activeIndex) != null
                ? t.dispatch(
                    (0, i.Nt)({
                      activeIndex: r.activeIndex,
                      activeDataKey: void 0,
                      activeCoordinate: r.activeCoordinate,
                    })
                  )
                : t.dispatch((0, i.xS)());
            }
            d = null;
          });
        },
      });
    },
    76069: (e, t, r) => {
      "use strict";
      r.d(t, { Mz: () => x });
      var n = (e) => (Array.isArray(e) ? e : [e]),
        i = 0,
        a = class {
          revision = i;
          _value;
          _lastValue;
          _isEqual = o;
          constructor(e, t = o) {
            ((this._value = this._lastValue = e), (this._isEqual = t));
          }
          get value() {
            return this._value;
          }
          set value(e) {
            this.value !== e && ((this._value = e), (this.revision = ++i));
          }
        };
      function o(e, t) {
        return e === t;
      }
      function u(e) {
        return (e instanceof a || console.warn("Not a valid cell! ", e), e.value);
      }
      var l = (e, t) => !1;
      function c() {
        return (function (e, t = o) {
          return new a(null, t);
        })(0, l);
      }
      var s = (e) => {
        let t = e.collectionTag;
        (null === t && (t = e.collectionTag = c()), u(t));
      };
      Symbol();
      var f = 0,
        d = Object.getPrototypeOf({}),
        h = class {
          constructor(e) {
            ((this.value = e), (this.value = e), (this.tag.value = e));
          }
          proxy = new Proxy(this, p);
          tag = c();
          tags = {};
          children = {};
          collectionTag = null;
          id = f++;
        },
        p = {
          get: (e, t) =>
            (function () {
              let { value: r } = e,
                n = Reflect.get(r, t);
              if ("symbol" == typeof t || t in d) return n;
              if ("object" == typeof n && null !== n) {
                var i;
                let r = e.children[t];
                return (
                  void 0 === r &&
                    (r = e.children[t] = Array.isArray((i = n)) ? new y(i) : new h(i)),
                  r.tag && u(r.tag),
                  r.proxy
                );
              }
              {
                let r = e.tags[t];
                return (void 0 === r && ((r = e.tags[t] = c()).value = n), u(r), n);
              }
            })(),
          ownKeys: (e) => (s(e), Reflect.ownKeys(e.value)),
          getOwnPropertyDescriptor: (e, t) => Reflect.getOwnPropertyDescriptor(e.value, t),
          has: (e, t) => Reflect.has(e.value, t),
        },
        y = class {
          constructor(e) {
            ((this.value = e), (this.value = e), (this.tag.value = e));
          }
          proxy = new Proxy([this], v);
          tag = c();
          tags = {};
          children = {};
          collectionTag = null;
          id = f++;
        },
        v = {
          get: ([e], t) => ("length" === t && s(e), p.get(e, t)),
          ownKeys: ([e]) => p.ownKeys(e),
          getOwnPropertyDescriptor: ([e], t) => p.getOwnPropertyDescriptor(e, t),
          has: ([e], t) => p.has(e, t),
        },
        g =
          "undefined" != typeof WeakRef
            ? WeakRef
            : class {
                constructor(e) {
                  this.value = e;
                }
                deref() {
                  return this.value;
                }
              };
      function m() {
        return { s: 0, v: void 0, o: null, p: null };
      }
      function b(e, t = {}) {
        let r,
          n = m(),
          { resultEqualityCheck: i } = t,
          a = 0;
        function o() {
          let t,
            o = n,
            { length: u } = arguments;
          for (let e = 0; e < u; e++) {
            let t = arguments[e];
            if ("function" == typeof t || ("object" == typeof t && null !== t)) {
              let e = o.o;
              null === e && (o.o = e = new WeakMap());
              let r = e.get(t);
              void 0 === r ? ((o = m()), e.set(t, o)) : (o = r);
            } else {
              let e = o.p;
              null === e && (o.p = e = new Map());
              let r = e.get(t);
              void 0 === r ? ((o = m()), e.set(t, o)) : (o = r);
            }
          }
          let l = o;
          if (1 === o.s) t = o.v;
          else if (((t = e.apply(null, arguments)), a++, i)) {
            let e = r?.deref?.() ?? r;
            (null != e && i(e, t) && ((t = e), 0 !== a && a--),
              (r = ("object" == typeof t && null !== t) || "function" == typeof t ? new g(t) : t));
          }
          return ((l.s = 1), (l.v = t), t);
        }
        return (
          (o.clearCache = () => {
            ((n = m()), o.resetResultsCount());
          }),
          (o.resultsCount = () => a),
          (o.resetResultsCount = () => {
            a = 0;
          }),
          o
        );
      }
      var x = (function (e, ...t) {
          let r = "function" == typeof e ? { memoize: e, memoizeOptions: t } : e,
            i = (...e) => {
              let t,
                i = 0,
                a = 0,
                o = {},
                u = e.pop();
              ("object" == typeof u && ((o = u), (u = e.pop())),
                (function (e, t = `expected a function, instead received ${typeof e}`) {
                  if ("function" != typeof e) throw TypeError(t);
                })(
                  u,
                  `createSelector expects an output function after the inputs, but received: [${typeof u}]`
                ));
              let {
                  memoize: l,
                  memoizeOptions: c = [],
                  argsMemoize: s = b,
                  argsMemoizeOptions: f = [],
                  devModeChecks: d = {},
                } = { ...r, ...o },
                h = n(c),
                p = n(f),
                y = (function (e) {
                  let t = Array.isArray(e[0]) ? e[0] : e;
                  return (
                    !(function (
                      e,
                      t = "expected all items to be functions, instead received the following types: "
                    ) {
                      if (!e.every((e) => "function" == typeof e)) {
                        let r = e
                          .map((e) =>
                            "function" == typeof e ? `function ${e.name || "unnamed"}()` : typeof e
                          )
                          .join(", ");
                        throw TypeError(`${t}[${r}]`);
                      }
                    })(
                      t,
                      "createSelector expects all input-selectors to be functions, but received the following types: "
                    ),
                    t
                  );
                })(e),
                v = l(
                  function () {
                    return (i++, u.apply(null, arguments));
                  },
                  ...h
                );
              return Object.assign(
                s(
                  function () {
                    a++;
                    let e = (function (e, t) {
                      let r = [],
                        { length: n } = e;
                      for (let i = 0; i < n; i++) r.push(e[i].apply(null, t));
                      return r;
                    })(y, arguments);
                    return (t = v.apply(null, e));
                  },
                  ...p
                ),
                {
                  resultFunc: u,
                  memoizedResultFunc: v,
                  dependencies: y,
                  dependencyRecomputations: () => a,
                  resetDependencyRecomputations: () => {
                    a = 0;
                  },
                  lastResult: () => t,
                  recomputations: () => i,
                  resetRecomputations: () => {
                    i = 0;
                  },
                  memoize: l,
                  argsMemoize: s,
                }
              );
            };
          return (Object.assign(i, { withTypes: () => i }), i);
        })(b),
        w = Object.assign(
          (e, t = x) => {
            !(function (e, t = `expected an object, instead received ${typeof e}`) {
              if ("object" != typeof e) throw TypeError(t);
            })(
              e,
              `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
            );
            let r = Object.keys(e);
            return t(
              r.map((t) => e[t]),
              (...e) => e.reduce((e, t, n) => ((e[r[n]] = t), e), {})
            );
          },
          { withTypes: () => w }
        );
    },
    77159: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.eq = function (e, t) {
          return e === t || (Number.isNaN(e) && Number.isNaN(t));
        }));
    },
    78289: (e, t, r) => {
      "use strict";
      r.d(t, { Qx: () => v, a6: () => g, jM: () => ec, ss: () => el });
      var n,
        i = Symbol.for("immer-nothing"),
        a = Symbol.for("immer-draftable"),
        o = Symbol.for("immer-state");
      function u(e) {
        throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
      }
      var l = Object,
        c = l.getPrototypeOf,
        s = "constructor",
        f = "prototype",
        d = "configurable",
        h = "enumerable",
        p = "writable",
        y = "value",
        v = (e) => !!e && !!e[o];
      function g(e) {
        return !!e && (x(e) || A(e) || !!e[a] || !!e[s]?.[a] || S(e) || P(e));
      }
      var m = l[f][s].toString(),
        b = new WeakMap();
      function x(e) {
        if (!e || !E(e)) return !1;
        let t = c(e);
        if (null === t || t === l[f]) return !0;
        let r = l.hasOwnProperty.call(t, s) && t[s];
        if (r === Object) return !0;
        if (!k(r)) return !1;
        let n = b.get(r);
        return (void 0 === n && ((n = Function.toString.call(r)), b.set(r, n)), n === m);
      }
      function w(e, t, r = !0) {
        0 === O(e)
          ? (r ? Reflect.ownKeys(e) : l.keys(e)).forEach((r) => {
              t(r, e[r], e);
            })
          : e.forEach((r, n) => t(n, r, e));
      }
      function O(e) {
        let t = e[o];
        return t ? t.type_ : A(e) ? 1 : S(e) ? 2 : 3 * !!P(e);
      }
      var _ = (e, t, r = O(e)) => (2 === r ? e.has(t) : l[f].hasOwnProperty.call(e, t)),
        M = (e, t, r = O(e)) => (2 === r ? e.get(t) : e[t]),
        j = (e, t, r, n = O(e)) => {
          2 === n ? e.set(t, r) : 3 === n ? e.add(r) : (e[t] = r);
        },
        A = Array.isArray,
        S = (e) => e instanceof Map,
        P = (e) => e instanceof Set,
        E = (e) => "object" == typeof e,
        k = (e) => "function" == typeof e,
        C = (e) => (e.modified_ ? e.copy_ : e.base_);
      function T(e, t) {
        if (S(e)) return new Map(e);
        if (P(e)) return new Set(e);
        if (A(e)) return Array[f].slice.call(e);
        let r = x(e);
        if (!0 !== t && ("class_only" !== t || r)) {
          let t = c(e);
          if (null !== t && r) return { ...e };
          let n = l.create(t);
          return l.assign(n, e);
        }
        {
          let t = l.getOwnPropertyDescriptors(e);
          delete t[o];
          let r = Reflect.ownKeys(t);
          for (let n = 0; n < r.length; n++) {
            let i = r[n],
              a = t[i];
            (!1 === a[p] && ((a[p] = !0), (a[d] = !0)),
              (a.get || a.set) && (t[i] = { [d]: !0, [p]: !0, [h]: a[h], [y]: e[i] }));
          }
          return l.create(c(e), t);
        }
      }
      function D(e, t = !1) {
        return (
          I(e) ||
            v(e) ||
            !g(e) ||
            (O(e) > 1 && l.defineProperties(e, { set: N, add: N, clear: N, delete: N }),
            l.freeze(e),
            t &&
              w(
                e,
                (e, t) => {
                  D(t, !0);
                },
                !1
              )),
          e
        );
      }
      var N = {
        [y]: function () {
          u(2);
        },
      };
      function I(e) {
        return !(null !== e && E(e)) || l.isFrozen(e);
      }
      var z = "MapSet",
        L = "Patches",
        R = "ArrayMethods",
        F = {};
      function $(e) {
        let t = F[e];
        return (t || u(0, e), t);
      }
      var U = (e) => !!F[e];
      function H(e, t) {
        t &&
          ((e.patchPlugin_ = $(L)),
          (e.patches_ = []),
          (e.inversePatches_ = []),
          (e.patchListener_ = t));
      }
      function B(e) {
        (K(e), e.drafts_.forEach(W), (e.drafts_ = null));
      }
      function K(e) {
        e === n && (n = e.parent_);
      }
      var Z = (e) =>
        (n = {
          drafts_: [],
          parent_: n,
          immer_: e,
          canAutoFreeze_: !0,
          unfinalizedDrafts_: 0,
          handledSet_: new Set(),
          processedForPatches_: new Set(),
          mapSetPlugin_: U(z) ? $(z) : void 0,
          arrayMethodsPlugin_: U(R) ? $(R) : void 0,
        });
      function W(e) {
        let t = e[o];
        0 === t.type_ || 1 === t.type_ ? t.revoke_() : (t.revoked_ = !0);
      }
      function q(e, t) {
        t.unfinalizedDrafts_ = t.drafts_.length;
        let r = t.drafts_[0];
        if (void 0 !== e && e !== r) {
          (r[o].modified_ && (B(t), u(4)), g(e) && (e = Y(t, e)));
          let { patchPlugin_: n } = t;
          n && n.generateReplacementPatches_(r[o].base_, e, t);
        } else e = Y(t, r);
        return (
          (function (e, t, r = !1) {
            !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && D(t, r);
          })(t, e, !0),
          B(t),
          t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
          e !== i ? e : void 0
        );
      }
      function Y(e, t) {
        if (I(t)) return t;
        let r = t[o];
        if (!r) return ee(t, e.handledSet_, e);
        if (!G(r, e)) return t;
        if (!r.modified_) return r.base_;
        if (!r.finalized_) {
          let { callbacks_: t } = r;
          if (t) for (; t.length > 0; ) t.pop()(e);
          Q(r, e);
        }
        return r.copy_;
      }
      function V(e) {
        ((e.finalized_ = !0), e.scope_.unfinalizedDrafts_--);
      }
      var G = (e, t) => e.scope_ === t,
        X = [];
      function J(e, t, r, n) {
        let i = e.copy_ || e.base_,
          a = e.type_;
        if (void 0 !== n && M(i, n, a) === t) return void j(i, n, r, a);
        if (!e.draftLocations_) {
          let t = (e.draftLocations_ = new Map());
          w(i, (e, r) => {
            if (v(r)) {
              let n = t.get(r) || [];
              (n.push(e), t.set(r, n));
            }
          });
        }
        for (let n of e.draftLocations_.get(t) ?? X) j(i, n, r, a);
      }
      function Q(e, t) {
        if (
          e.modified_ &&
          !e.finalized_ &&
          (3 === e.type_ ||
            (1 === e.type_ && e.allIndicesReassigned_) ||
            (e.assigned_?.size ?? 0) > 0)
        ) {
          let { patchPlugin_: r } = t;
          if (r) {
            let n = r.getPath(e);
            n && r.generatePatches_(e, n, t);
          }
          V(e);
        }
      }
      function ee(e, t, r) {
        return (
          (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1) ||
            v(e) ||
            t.has(e) ||
            !g(e) ||
            I(e) ||
            (t.add(e),
            w(e, (n, i) => {
              if (v(i)) {
                let t = i[o];
                G(t, r) && (j(e, n, C(t), e.type_), V(t));
              } else g(i) && ee(i, t, r);
            })),
          e
        );
      }
      var et = {
          get(e, t) {
            if (t === o) return e;
            let r = e.scope_.arrayMethodsPlugin_,
              n = 1 === e.type_ && "string" == typeof t;
            if (n && r?.isArrayOperationMethod(t)) return r.createMethodInterceptor(e, t);
            let i = e.copy_ || e.base_;
            if (!_(i, t, e.type_)) {
              var a = e,
                u = i,
                l = t;
              let r = ei(u, l);
              return r ? (y in r ? r[y] : r.get?.call(a.draft_)) : void 0;
            }
            let c = i[t];
            if (
              e.finalized_ ||
              !g(c) ||
              (n &&
                e.operationMethod &&
                r?.isMutatingArrayMethod(e.operationMethod) &&
                (function (e) {
                  let t = +e;
                  return Number.isInteger(t) && String(t) === e;
                })(t))
            )
              return c;
            if (c === en(e.base_, t)) {
              eo(e);
              let r = 1 === e.type_ ? +t : t,
                n = eu(e.scope_, c, e, r);
              return (e.copy_[r] = n);
            }
            return c;
          },
          has: (e, t) => t in ((e) => e.copy_ || e.base_)(e),
          ownKeys: (e) => Reflect.ownKeys(((e) => e.copy_ || e.base_)(e)),
          set(e, t, r) {
            let n = ei(e.copy_ || e.base_, t);
            if (n?.set) return (n.set.call(e.draft_, r), !0);
            if (!e.modified_) {
              let n = en(e.copy_ || e.base_, t),
                i = n?.[o];
              if (i && i.base_ === r) return ((e.copy_[t] = r), e.assigned_.set(t, !1), !0);
              if (
                (r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n) &&
                (void 0 !== r || _(e.base_, t, e.type_))
              )
                return !0;
              (eo(e), ea(e));
            }
            if (
              (e.copy_[t] === r && (void 0 !== r || t in e.copy_)) ||
              (Number.isNaN(r) && Number.isNaN(e.copy_[t]))
            )
              return !0;
            ((e.copy_[t] = r), e.assigned_.set(t, !0));
            let { scope_: i } = e;
            if (v(r)) {
              let n = r[o];
              G(n, i) &&
                n.callbacks_.push(function () {
                  (eo(e), J(e, r, C(n), t));
                });
            } else
              g(r) &&
                e.callbacks_.push(function () {
                  M(e.copy_ || e.base_, t, e.type_) === r &&
                    i.drafts_.length > 1 &&
                    (e.assigned_.get(t) ?? !1) === !0 &&
                    e.copy_ &&
                    ee(M(e.copy_, t, e.type_), i.handledSet_, i);
                });
            return !0;
          },
          deleteProperty: (e, t) => (
            eo(e),
            void 0 !== en(e.base_, t) || t in e.base_
              ? (e.assigned_.set(t, !1), ea(e))
              : e.assigned_.delete(t),
            e.copy_ && delete e.copy_[t],
            !0
          ),
          getOwnPropertyDescriptor(e, t) {
            let r = e.copy_ || e.base_,
              n = Reflect.getOwnPropertyDescriptor(r, t);
            return n ? { [p]: !0, [d]: 1 !== e.type_ || "length" !== t, [h]: n[h], [y]: r[t] } : n;
          },
          defineProperty() {
            u(11);
          },
          getPrototypeOf: (e) => c(e.base_),
          setPrototypeOf() {
            u(12);
          },
        },
        er = {};
      function en(e, t) {
        let r = e[o];
        return (r ? r.copy_ || r.base_ : e)[t];
      }
      function ei(e, t) {
        if (!(t in e)) return;
        let r = c(e);
        for (; r; ) {
          let e = Object.getOwnPropertyDescriptor(r, t);
          if (e) return e;
          r = c(r);
        }
      }
      function ea(e) {
        !e.modified_ && ((e.modified_ = !0), e.parent_ && ea(e.parent_));
      }
      function eo(e) {
        e.copy_ ||
          ((e.assigned_ = new Map()),
          (e.copy_ = T(e.base_, e.scope_.immer_.useStrictShallowCopy_)));
      }
      function eu(e, t, r, i) {
        let [a, o] = S(t)
          ? $(z).proxyMap_(t, r)
          : P(t)
            ? $(z).proxySet_(t, r)
            : (function (e, t) {
                let r = A(e),
                  i = {
                    type_: +!!r,
                    scope_: t ? t.scope_ : n,
                    modified_: !1,
                    finalized_: !1,
                    assigned_: void 0,
                    parent_: t,
                    base_: e,
                    draft_: null,
                    copy_: null,
                    revoke_: null,
                    isManual_: !1,
                    callbacks_: void 0,
                  },
                  a = i,
                  o = et;
                r && ((a = [i]), (o = er));
                let { revoke: u, proxy: l } = Proxy.revocable(a, o);
                return ((i.draft_ = l), (i.revoke_ = u), [l, i]);
              })(t, r);
        if (
          ((r?.scope_ ?? n).drafts_.push(a),
          (o.callbacks_ = r?.callbacks_ ?? []),
          (o.key_ = i),
          r && void 0 !== i)
        )
          r.callbacks_.push(function (e) {
            if (!o || !G(o, e)) return;
            e.mapSetPlugin_?.fixSetContents(o);
            let t = C(o);
            (J(r, o.draft_ ?? o, t, i), Q(o, e));
          });
        else
          o.callbacks_.push(function (e) {
            e.mapSetPlugin_?.fixSetContents(o);
            let { patchPlugin_: t } = e;
            o.modified_ && t && t.generatePatches_(o, [], e);
          });
        return a;
      }
      function el(e) {
        return (
          v(e) || u(10, e),
          (function e(t) {
            let r;
            if (!g(t) || I(t)) return t;
            let n = t[o],
              i = !0;
            if (n) {
              if (!n.modified_) return n.base_;
              ((n.finalized_ = !0),
                (r = T(t, n.scope_.immer_.useStrictShallowCopy_)),
                (i = n.scope_.immer_.shouldUseStrictIteration()));
            } else r = T(t, !0);
            return (
              w(
                r,
                (t, n) => {
                  j(r, t, e(n));
                },
                i
              ),
              n && (n.finalized_ = !1),
              r
            );
          })(e)
        );
      }
      (w(et, (e, t) => {
        er[e] = function () {
          let e = arguments;
          return ((e[0] = e[0][0]), t.apply(this, e));
        };
      }),
        (er.deleteProperty = function (e, t) {
          return er.set.call(this, e, t, void 0);
        }),
        (er.set = function (e, t, r) {
          return et.set.call(this, e[0], t, r, e[0]);
        }));
      var ec = new (class {
        constructor(e) {
          ((this.autoFreeze_ = !0),
            (this.useStrictShallowCopy_ = !1),
            (this.useStrictIteration_ = !1),
            (this.produce = (e, t, r) => {
              let n;
              if (k(e) && !k(t)) {
                let r = t;
                t = e;
                let n = this;
                return function (e = r, ...i) {
                  return n.produce(e, (e) => t.call(this, e, ...i));
                };
              }
              if ((k(t) || u(6), void 0 === r || k(r) || u(7), g(e))) {
                let i = Z(this),
                  a = eu(i, e, void 0),
                  o = !0;
                try {
                  ((n = t(a)), (o = !1));
                } finally {
                  o ? B(i) : K(i);
                }
                return (H(i, r), q(n, i));
              }
              if (e && E(e)) u(1, e);
              else {
                if (
                  (void 0 === (n = t(e)) && (n = e),
                  n === i && (n = void 0),
                  this.autoFreeze_ && D(n, !0),
                  r)
                ) {
                  let t = [],
                    i = [];
                  ($(L).generateReplacementPatches_(e, n, { patches_: t, inversePatches_: i }),
                    r(t, i));
                }
                return n;
              }
            }),
            (this.produceWithPatches = (e, t) => {
              let r, n;
              return k(e)
                ? (t, ...r) => this.produceWithPatches(t, (t) => e(t, ...r))
                : [
                    this.produce(e, t, (e, t) => {
                      ((r = e), (n = t));
                    }),
                    r,
                    n,
                  ];
            }),
            "boolean" == typeof e?.autoFreeze && this.setAutoFreeze(e.autoFreeze),
            "boolean" == typeof e?.useStrictShallowCopy &&
              this.setUseStrictShallowCopy(e.useStrictShallowCopy),
            "boolean" == typeof e?.useStrictIteration &&
              this.setUseStrictIteration(e.useStrictIteration));
        }
        createDraft(e) {
          (g(e) || u(8), v(e) && (e = el(e)));
          let t = Z(this),
            r = eu(t, e, void 0);
          return ((r[o].isManual_ = !0), K(t), r);
        }
        finishDraft(e, t) {
          let r = e && e[o];
          (r && r.isManual_) || u(9);
          let { scope_: n } = r;
          return (H(n, t), q(void 0, n));
        }
        setAutoFreeze(e) {
          this.autoFreeze_ = e;
        }
        setUseStrictShallowCopy(e) {
          this.useStrictShallowCopy_ = e;
        }
        setUseStrictIteration(e) {
          this.useStrictIteration_ = e;
        }
        shouldUseStrictIteration() {
          return this.useStrictIteration_;
        }
        applyPatches(e, t) {
          let r;
          for (r = t.length - 1; r >= 0; r--) {
            let n = t[r];
            if (0 === n.path.length && "replace" === n.op) {
              e = n.value;
              break;
            }
          }
          r > -1 && (t = t.slice(r + 1));
          let n = $(L).applyPatches_;
          return v(e) ? n(e, t) : this.produce(e, (e) => n(e, t));
        }
      })().produce;
    },
    79835: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(89644),
        i = r(70846);
      t.isArrayLikeObject = function (e) {
        return i.isObjectLike(e) && n.isArrayLike(e);
      };
    },
    81024: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => f, j: () => u });
      var n = r(8828),
        i = r(12115),
        a = r(49629),
        o = (e) => e,
        u = () => {
          var e = (0, i.useContext)(a.E);
          return e ? e.store.dispatch : o;
        },
        l = () => {},
        c = () => l,
        s = (e, t) => e === t;
      function f(e) {
        var t = (0, i.useContext)(a.E);
        return (0, n.useSyncExternalStoreWithSelector)(
          t ? t.subscription.addNestedSub : c,
          t ? t.store.getState : l,
          t ? t.store.getState : l,
          t ? e : l,
          s
        );
      }
    },
    81093: (e, t, r) => {
      "use strict";
      function n(e) {
        return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
      }
      r.d(t, { HY: () => c, Qd: () => u, Tw: () => f, Zz: () => s, ve: () => d, y$: () => l });
      var i = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
        a = () => Math.random().toString(36).substring(7).split("").join("."),
        o = {
          INIT: `@@redux/INIT${a()}`,
          REPLACE: `@@redux/REPLACE${a()}`,
          PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${a()}`,
        };
      function u(e) {
        if ("object" != typeof e || null === e) return !1;
        let t = e;
        for (; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t || null === Object.getPrototypeOf(e);
      }
      function l(e, t, r) {
        if ("function" != typeof e) throw Error(n(2));
        if (
          ("function" == typeof t && "function" == typeof r) ||
          ("function" == typeof r && "function" == typeof arguments[3])
        )
          throw Error(n(0));
        if (("function" == typeof t && void 0 === r && ((r = t), (t = void 0)), void 0 !== r)) {
          if ("function" != typeof r) throw Error(n(1));
          return r(l)(e, t);
        }
        let a = e,
          c = t,
          s = new Map(),
          f = s,
          d = 0,
          h = !1;
        function p() {
          f === s &&
            ((f = new Map()),
            s.forEach((e, t) => {
              f.set(t, e);
            }));
        }
        function y() {
          if (h) throw Error(n(3));
          return c;
        }
        function v(e) {
          if ("function" != typeof e) throw Error(n(4));
          if (h) throw Error(n(5));
          let t = !0;
          p();
          let r = d++;
          return (
            f.set(r, e),
            function () {
              if (t) {
                if (h) throw Error(n(6));
                ((t = !1), p(), f.delete(r), (s = null));
              }
            }
          );
        }
        function g(e) {
          if (!u(e)) throw Error(n(7));
          if (void 0 === e.type) throw Error(n(8));
          if ("string" != typeof e.type) throw Error(n(17));
          if (h) throw Error(n(9));
          try {
            ((h = !0), (c = a(c, e)));
          } finally {
            h = !1;
          }
          return (
            (s = f).forEach((e) => {
              e();
            }),
            e
          );
        }
        return (
          g({ type: o.INIT }),
          {
            dispatch: g,
            subscribe: v,
            getState: y,
            replaceReducer: function (e) {
              if ("function" != typeof e) throw Error(n(10));
              ((a = e), g({ type: o.REPLACE }));
            },
            [i]: function () {
              return {
                subscribe(e) {
                  if ("object" != typeof e || null === e) throw Error(n(11));
                  function t() {
                    e.next && e.next(y());
                  }
                  return (t(), { unsubscribe: v(t) });
                },
                [i]() {
                  return this;
                },
              };
            },
          }
        );
      }
      function c(e) {
        let t,
          r = Object.keys(e),
          i = {};
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          "function" == typeof e[n] && (i[n] = e[n]);
        }
        let a = Object.keys(i);
        try {
          Object.keys(i).forEach((e) => {
            let t = i[e];
            if (void 0 === t(void 0, { type: o.INIT })) throw Error(n(12));
            if (void 0 === t(void 0, { type: o.PROBE_UNKNOWN_ACTION() })) throw Error(n(13));
          });
        } catch (e) {
          t = e;
        }
        return function (e = {}, r) {
          if (t) throw t;
          let o = !1,
            u = {};
          for (let t = 0; t < a.length; t++) {
            let l = a[t],
              c = i[l],
              s = e[l],
              f = c(s, r);
            if (void 0 === f) throw (r && r.type, Error(n(14)));
            ((u[l] = f), (o = o || f !== s));
          }
          return (o = o || a.length !== Object.keys(e).length) ? u : e;
        };
      }
      function s(...e) {
        return 0 === e.length
          ? (e) => e
          : 1 === e.length
            ? e[0]
            : e.reduce(
                (e, t) =>
                  (...r) =>
                    e(t(...r))
              );
      }
      function f(...e) {
        return (t) => (r, i) => {
          let a = t(r, i),
            o = () => {
              throw Error(n(15));
            },
            u = { getState: a.getState, dispatch: (e, ...t) => o(e, ...t) };
          return ((o = s(...e.map((e) => e(u)))(a.dispatch)), { ...a, dispatch: o });
        };
      }
      function d(e) {
        return u(e) && "type" in e && "string" == typeof e.type;
      }
    },
    81943: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.isUnsafeProperty = function (e) {
          return "__proto__" === e;
        }));
    },
    82601: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => o });
      var n = r(83507);
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : i(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var o = (e, t, r, i) => {
        if (null == t) return n.k_;
        var o = (function (e, t, r) {
          return "axis" === t
            ? "click" === r
              ? e.axisInteraction.click
              : e.axisInteraction.hover
            : "click" === r
              ? e.itemInteraction.click
              : e.itemInteraction.hover;
        })(e, t, r);
        if (null == o) return n.k_;
        if (o.active) return o;
        if (e.keyboardInteraction.active) return e.keyboardInteraction;
        if (e.syncInteraction.active && null != e.syncInteraction.index) return e.syncInteraction;
        var u = !0 === e.settings.active;
        if (null != o.index) {
          if (u) return a(a({}, o), {}, { active: !0 });
        } else if (null != i)
          return {
            active: !0,
            coordinate: void 0,
            dataKey: void 0,
            index: i,
            graphicalItemId: void 0,
          };
        return a(a({}, n.k_), {}, { coordinate: o.coordinate });
      };
    },
    83507: (e, t, r) => {
      "use strict";
      r.d(t, {
        E1: () => m,
        En: () => x,
        Ix: () => l,
        ML: () => y,
        Nt: () => v,
        RD: () => d,
        UF: () => f,
        XB: () => s,
        Zp: () => c,
        jF: () => g,
        k_: () => o,
        o4: () => b,
        oP: () => h,
        xS: () => p,
      });
      var n = r(26286),
        i = r(78289),
        a = r(60013),
        o = {
          active: !1,
          index: null,
          dataKey: void 0,
          graphicalItemId: void 0,
          coordinate: void 0,
        },
        u = (0, n.Z0)({
          name: "tooltip",
          initialState: {
            itemInteraction: { click: o, hover: o },
            axisInteraction: { click: o, hover: o },
            keyboardInteraction: o,
            syncInteraction: {
              active: !1,
              index: null,
              dataKey: void 0,
              label: void 0,
              coordinate: void 0,
              sourceViewBox: void 0,
              graphicalItemId: void 0,
            },
            tooltipItemPayloads: [],
            settings: {
              shared: void 0,
              trigger: "hover",
              axisId: 0,
              active: !1,
              defaultIndex: void 0,
            },
          },
          reducers: {
            addTooltipEntrySettings: {
              reducer(e, t) {
                e.tooltipItemPayloads.push((0, a.h4)(t.payload));
              },
              prepare: (0, n.aA)(),
            },
            replaceTooltipEntrySettings: {
              reducer(e, t) {
                var { prev: r, next: n } = t.payload,
                  o = (0, i.ss)(e).tooltipItemPayloads.indexOf((0, a.h4)(r));
                o > -1 && (e.tooltipItemPayloads[o] = (0, a.h4)(n));
              },
              prepare: (0, n.aA)(),
            },
            removeTooltipEntrySettings: {
              reducer(e, t) {
                var r = (0, i.ss)(e).tooltipItemPayloads.indexOf((0, a.h4)(t.payload));
                r > -1 && e.tooltipItemPayloads.splice(r, 1);
              },
              prepare: (0, n.aA)(),
            },
            setTooltipSettingsState(e, t) {
              e.settings = t.payload;
            },
            setActiveMouseOverItemIndex(e, t) {
              ((e.syncInteraction.active = !1),
                (e.keyboardInteraction.active = !1),
                (e.itemInteraction.hover.active = !0),
                (e.itemInteraction.hover.index = t.payload.activeIndex),
                (e.itemInteraction.hover.dataKey = t.payload.activeDataKey),
                (e.itemInteraction.hover.graphicalItemId = t.payload.activeGraphicalItemId),
                (e.itemInteraction.hover.coordinate = t.payload.activeCoordinate));
            },
            mouseLeaveChart(e) {
              ((e.itemInteraction.hover.active = !1), (e.axisInteraction.hover.active = !1));
            },
            mouseLeaveItem(e) {
              e.itemInteraction.hover.active = !1;
            },
            setActiveClickItemIndex(e, t) {
              ((e.syncInteraction.active = !1),
                (e.itemInteraction.click.active = !0),
                (e.keyboardInteraction.active = !1),
                (e.itemInteraction.click.index = t.payload.activeIndex),
                (e.itemInteraction.click.dataKey = t.payload.activeDataKey),
                (e.itemInteraction.click.graphicalItemId = t.payload.activeGraphicalItemId),
                (e.itemInteraction.click.coordinate = t.payload.activeCoordinate));
            },
            setMouseOverAxisIndex(e, t) {
              ((e.syncInteraction.active = !1),
                (e.axisInteraction.hover.active = !0),
                (e.keyboardInteraction.active = !1),
                (e.axisInteraction.hover.index = t.payload.activeIndex),
                (e.axisInteraction.hover.dataKey = t.payload.activeDataKey),
                (e.axisInteraction.hover.coordinate = t.payload.activeCoordinate));
            },
            setMouseClickAxisIndex(e, t) {
              ((e.syncInteraction.active = !1),
                (e.keyboardInteraction.active = !1),
                (e.axisInteraction.click.active = !0),
                (e.axisInteraction.click.index = t.payload.activeIndex),
                (e.axisInteraction.click.dataKey = t.payload.activeDataKey),
                (e.axisInteraction.click.coordinate = t.payload.activeCoordinate));
            },
            setSyncInteraction(e, t) {
              e.syncInteraction = t.payload;
            },
            setKeyboardInteraction(e, t) {
              ((e.keyboardInteraction.active = t.payload.active),
                (e.keyboardInteraction.index = t.payload.activeIndex),
                (e.keyboardInteraction.coordinate = t.payload.activeCoordinate));
            },
          },
        }),
        {
          addTooltipEntrySettings: l,
          replaceTooltipEntrySettings: c,
          removeTooltipEntrySettings: s,
          setTooltipSettingsState: f,
          setActiveMouseOverItemIndex: d,
          mouseLeaveItem: h,
          mouseLeaveChart: p,
          setActiveClickItemIndex: y,
          setMouseOverAxisIndex: v,
          setMouseClickAxisIndex: g,
          setSyncInteraction: m,
          setKeyboardInteraction: b,
        } = u.actions,
        x = u.reducer;
    },
    83654: (e, t, r) => {
      "use strict";
      var n = r(12115),
        i = r(14806),
        a =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
        o = i.useSyncExternalStore,
        u = n.useRef,
        l = n.useEffect,
        c = n.useMemo,
        s = n.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, r, n, i) {
        var f = u(null);
        if (null === f.current) {
          var d = { hasValue: !1, value: null };
          f.current = d;
        } else d = f.current;
        var h = o(
          e,
          (f = c(
            function () {
              function e(e) {
                if (!l) {
                  if (((l = !0), (o = e), (e = n(e)), void 0 !== i && d.hasValue)) {
                    var t = d.value;
                    if (i(t, e)) return (u = t);
                  }
                  return (u = e);
                }
                if (((t = u), a(o, e))) return t;
                var r = n(e);
                return void 0 !== i && i(t, r) ? ((o = e), t) : ((o = e), (u = r));
              }
              var o,
                u,
                l = !1,
                c = void 0 === r ? null : r;
              return [
                function () {
                  return e(t());
                },
                null === c
                  ? void 0
                  : function () {
                      return e(c());
                    },
              ];
            },
            [t, r, n, i]
          ))[0],
          f[1]
        );
        return (
          l(
            function () {
              ((d.hasValue = !0), (d.value = h));
            },
            [h]
          ),
          s(h),
          h
        );
      };
    },
    84020: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => o });
      var n = r(12115),
        i = r(93100),
        a = r(81024);
      function o(e) {
        var t = (0, a.j)();
        return (
          (0, n.useEffect)(() => {
            t((0, i.mZ)(e));
          }, [t, e]),
          null
        );
      }
    },
    84072: (e, t, r) => {
      "use strict";
      r.d(t, { TT: () => a, XC: () => u, _U: () => o });
      var n = r(12115),
        i = r(52089),
        a = (e) => "radius" in e && "startAngle" in e && "endAngle" in e,
        o = (e, t) => {
          if (!e || "function" == typeof e || "boolean" == typeof e) return null;
          var r = e;
          if (
            ((0, n.isValidElement)(e) && (r = e.props),
            "object" != typeof r && "function" != typeof r)
          )
            return null;
          var a = {};
          return (
            Object.keys(r).forEach((e) => {
              (0, i.q)(e) && (a[e] = t || ((t) => r[e](r, t)));
            }),
            a
          );
        },
        u = (e, t, r) => {
          if (null === e || ("object" != typeof e && "function" != typeof e)) return null;
          var n = null;
          return (
            Object.keys(e).forEach((a) => {
              var o = e[a];
              (0, i.q)(a) &&
                "function" == typeof o &&
                (n || (n = {}), (n[a] = (e) => (o(t, r, e), null)));
            }),
            n
          );
        };
    },
    85080: (e, t, r) => {
      "use strict";
      r.d(t, { $7: () => f, Ru: () => s, uZ: () => c });
      var n = r(26286),
        i = r(83507),
        a = r(72481),
        o = r(18305),
        u = r(210),
        l = r(21838),
        c = (0, n.VP)("keyDown"),
        s = (0, n.VP)("focus"),
        f = (0, n.Nc)();
      (f.startListening({
        actionCreator: c,
        effect: (e, t) => {
          var r = t.getState();
          if (!1 === r.rootProps.accessibilityLayer) return;
          var { keyboardInteraction: n } = r.tooltip,
            c = e.payload;
          if ("ArrowRight" === c || "ArrowLeft" === c || "Enter" === c) {
            var s = (0, l.P)(n, (0, a.n4)(r), (0, u.K6)(r), (0, a.FO)(r)),
              f = null == s ? -1 : Number(s);
            if (Number.isFinite(f) && !(f < 0)) {
              var d = (0, a.R4)(r);
              if ("Enter" === c) {
                var h = (0, o.pg)(r, "axis", "hover", String(n.index));
                t.dispatch(
                  (0, i.o4)({ active: !n.active, activeIndex: n.index, activeCoordinate: h })
                );
                return;
              }
              var p =
                f + ("ArrowRight" === c ? 1 : -1) * ("left-to-right" === (0, u._y)(r) ? 1 : -1);
              if (null != d && !(p >= d.length) && !(p < 0)) {
                var y = (0, o.pg)(r, "axis", "hover", String(p));
                t.dispatch(
                  (0, i.o4)({ active: !0, activeIndex: p.toString(), activeCoordinate: y })
                );
              }
            }
          }
        },
      }),
        f.startListening({
          actionCreator: s,
          effect: (e, t) => {
            var r = t.getState();
            if (!1 !== r.rootProps.accessibilityLayer) {
              var { keyboardInteraction: n } = r.tooltip;
              if (!n.active && null == n.index) {
                var a = (0, o.pg)(r, "axis", "hover", String("0"));
                t.dispatch((0, i.o4)({ active: !0, activeIndex: "0", activeCoordinate: a }));
              }
            }
          },
        }));
    },
    85224: (e, t, r) => {
      "use strict";
      function n(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function i(e, t) {
        var r = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? n(Object(r), !0).forEach(function (t) {
                  var n, i, a;
                  ((n = e),
                    (i = t),
                    (a = r[t]),
                    (i = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                          var n = r.call(e, t || "default");
                          if ("object" != typeof n) return n;
                          throw TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : t + "";
                    })(i)) in n
                      ? Object.defineProperty(n, i, {
                          value: a,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (n[i] = a));
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                : n(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                  });
          }
          return e;
        })({}, e);
        return Object.keys(t).reduce(
          (e, r) => (void 0 === e[r] && void 0 !== t[r] && (e[r] = t[r]), e),
          r
        );
      }
      r.d(t, { e: () => i });
    },
    85339: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => i });
      var n = r(49580),
        i = (e, t) => {
          var r,
            i = Number(t);
          if (!(0, n.M8)(i) && null != t)
            return i >= 0 ? (null == e || null == (r = e[i]) ? void 0 : r.value) : void 0;
        };
    },
    87095: (e, t, r) => {
      "use strict";
      r.d(t, { W: () => l });
      var n = r(12115),
        i = r(2821),
        a = r(55730),
        o = ["children", "className"];
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      var l = n.forwardRef((e, t) => {
        var { children: r, className: l } = e,
          c = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                ((r = a[n]),
                  -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]));
            }
            return i;
          })(e, o),
          s = (0, i.$)("recharts-layer", l);
        return n.createElement("g", u({ className: s }, (0, a.a)(c), { ref: t }), r);
      });
    },
    87176: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => u });
      var n = r(12115),
        i = r(81024),
        a = r(83507),
        o = r(35704);
      function u(e) {
        var { tooltipEntrySettings: t } = e,
          r = (0, i.j)(),
          u = (0, o.r)(),
          l = (0, n.useRef)(null);
        return (
          (0, n.useLayoutEffect)(() => {
            u ||
              (null === l.current
                ? r((0, a.Ix)(t))
                : l.current !== t && r((0, a.Zp)({ prev: l.current, next: t })),
              (l.current = t));
          }, [t, r, u]),
          (0, n.useLayoutEffect)(
            () => () => {
              l.current && (r((0, a.XB)(l.current)), (l.current = null));
            },
            [r]
          ),
          null
        );
      }
    },
    87744: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.isPrimitive = function (e) {
          return null == e || ("object" != typeof e && "function" != typeof e);
        }));
    },
    88011: (e, t, r) => {
      e.exports = r(57333).throttle;
    },
    88062: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => O });
      var n,
        i,
        a,
        o,
        u,
        l,
        c,
        s = r(12115),
        f = r(2821),
        d = r(34010),
        h = r(49580),
        p = r(85224),
        y = r(55730),
        v = r(33597);
      function g() {
        return (g = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function m(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
        );
      }
      var b = (e) => {
          var {
              cx: t,
              cy: r,
              radius: n,
              angle: i,
              sign: a,
              isExternal: o,
              cornerRadius: u,
              cornerIsExternal: l,
            } = e,
            c = u * (o ? 1 : -1) + n,
            s = Math.asin(u / c) / d.Kg,
            f = l ? i : i + a * s,
            h = (0, d.IZ)(t, r, c, f);
          return {
            center: h,
            circleTangency: (0, d.IZ)(t, r, n, f),
            lineTangency: (0, d.IZ)(t, r, c * Math.cos(s * d.Kg), l ? i - a * s : i),
            theta: s,
          };
        },
        x = (e) => {
          var { cx: t, cy: r, innerRadius: o, outerRadius: u, startAngle: l, endAngle: c } = e,
            s = ((e, t) => (0, h.sA)(t - e) * Math.min(Math.abs(t - e), 359.999))(l, c),
            f = l + s,
            p = (0, d.IZ)(t, r, u, l),
            y = (0, d.IZ)(t, r, u, f),
            g = (0, v.Y)(
              n || (n = m(["M ", ",", "\n    A ", ",", ",0,\n    ", ",", ",\n    ", ",", "\n  "])),
              p.x,
              p.y,
              u,
              u,
              +(Math.abs(s) > 180),
              +(l > f),
              y.x,
              y.y
            );
          if (o > 0) {
            var b = (0, d.IZ)(t, r, o, l),
              x = (0, d.IZ)(t, r, o, f);
            g += (0, v.Y)(
              i ||
                (i = m([
                  "L ",
                  ",",
                  "\n            A ",
                  ",",
                  ",0,\n            ",
                  ",",
                  ",\n            ",
                  ",",
                  " Z",
                ])),
              x.x,
              x.y,
              o,
              o,
              +(Math.abs(s) > 180),
              +(l <= f),
              b.x,
              b.y
            );
          } else g += (0, v.Y)(a || (a = m(["L ", ",", " Z"])), t, r);
          return g;
        },
        w = {
          cx: 0,
          cy: 0,
          innerRadius: 0,
          outerRadius: 0,
          startAngle: 0,
          endAngle: 0,
          cornerRadius: 0,
          forceCornerRadius: !1,
          cornerIsExternal: !1,
        },
        O = (e) => {
          var t,
            r = (0, p.e)(e, w),
            {
              cx: n,
              cy: i,
              innerRadius: a,
              outerRadius: d,
              cornerRadius: O,
              forceCornerRadius: _,
              cornerIsExternal: M,
              startAngle: j,
              endAngle: A,
              className: S,
            } = r;
          if (d < a || j === A) return null;
          var P = (0, f.$)("recharts-sector", S),
            E = d - a,
            k = (0, h.F4)(O, E, 0, !0);
          return (
            (t =
              k > 0 && 360 > Math.abs(j - A)
                ? ((e) => {
                    var {
                        cx: t,
                        cy: r,
                        innerRadius: n,
                        outerRadius: i,
                        cornerRadius: a,
                        forceCornerRadius: s,
                        cornerIsExternal: f,
                        startAngle: d,
                        endAngle: p,
                      } = e,
                      y = (0, h.sA)(p - d),
                      {
                        circleTangency: g,
                        lineTangency: w,
                        theta: O,
                      } = b({
                        cx: t,
                        cy: r,
                        radius: i,
                        angle: d,
                        sign: y,
                        cornerRadius: a,
                        cornerIsExternal: f,
                      }),
                      {
                        circleTangency: _,
                        lineTangency: M,
                        theta: j,
                      } = b({
                        cx: t,
                        cy: r,
                        radius: i,
                        angle: p,
                        sign: -y,
                        cornerRadius: a,
                        cornerIsExternal: f,
                      }),
                      A = f ? Math.abs(d - p) : Math.abs(d - p) - O - j;
                    if (A < 0)
                      return s
                        ? (0, v.Y)(
                            o ||
                              (o = m([
                                "M ",
                                ",",
                                "\n        a",
                                ",",
                                ",0,0,1,",
                                ",0\n        a",
                                ",",
                                ",0,0,1,",
                                ",0\n      ",
                              ])),
                            w.x,
                            w.y,
                            a,
                            a,
                            2 * a,
                            a,
                            a,
                            -(2 * a)
                          )
                        : x({
                            cx: t,
                            cy: r,
                            innerRadius: n,
                            outerRadius: i,
                            startAngle: d,
                            endAngle: p,
                          });
                    var S = (0, v.Y)(
                      u ||
                        (u = m([
                          "M ",
                          ",",
                          "\n    A",
                          ",",
                          ",0,0,",
                          ",",
                          ",",
                          "\n    A",
                          ",",
                          ",0,",
                          ",",
                          ",",
                          ",",
                          "\n    A",
                          ",",
                          ",0,0,",
                          ",",
                          ",",
                          "\n  ",
                        ])),
                      w.x,
                      w.y,
                      a,
                      a,
                      +(y < 0),
                      g.x,
                      g.y,
                      i,
                      i,
                      +(A > 180),
                      +(y < 0),
                      _.x,
                      _.y,
                      a,
                      a,
                      +(y < 0),
                      M.x,
                      M.y
                    );
                    if (n > 0) {
                      var {
                          circleTangency: P,
                          lineTangency: E,
                          theta: k,
                        } = b({
                          cx: t,
                          cy: r,
                          radius: n,
                          angle: d,
                          sign: y,
                          isExternal: !0,
                          cornerRadius: a,
                          cornerIsExternal: f,
                        }),
                        {
                          circleTangency: C,
                          lineTangency: T,
                          theta: D,
                        } = b({
                          cx: t,
                          cy: r,
                          radius: n,
                          angle: p,
                          sign: -y,
                          isExternal: !0,
                          cornerRadius: a,
                          cornerIsExternal: f,
                        }),
                        N = f ? Math.abs(d - p) : Math.abs(d - p) - k - D;
                      if (N < 0 && 0 === a) return "".concat(S, "L").concat(t, ",").concat(r, "Z");
                      S += (0, v.Y)(
                        l ||
                          (l = m([
                            "L",
                            ",",
                            "\n      A",
                            ",",
                            ",0,0,",
                            ",",
                            ",",
                            "\n      A",
                            ",",
                            ",0,",
                            ",",
                            ",",
                            ",",
                            "\n      A",
                            ",",
                            ",0,0,",
                            ",",
                            ",",
                            "Z",
                          ])),
                        T.x,
                        T.y,
                        a,
                        a,
                        +(y < 0),
                        C.x,
                        C.y,
                        n,
                        n,
                        +(N > 180),
                        +(y > 0),
                        P.x,
                        P.y,
                        a,
                        a,
                        +(y < 0),
                        E.x,
                        E.y
                      );
                    } else S += (0, v.Y)(c || (c = m(["L", ",", "Z"])), t, r);
                    return S;
                  })({
                    cx: n,
                    cy: i,
                    innerRadius: a,
                    outerRadius: d,
                    cornerRadius: Math.min(k, E / 2),
                    forceCornerRadius: _,
                    cornerIsExternal: M,
                    startAngle: j,
                    endAngle: A,
                  })
                : x({ cx: n, cy: i, innerRadius: a, outerRadius: d, startAngle: j, endAngle: A })),
            s.createElement("path", g({}, (0, y.a)(r), { className: P, d: t }))
          );
        };
    },
    89139: (e, t, r) => {
      e.exports = r(31730).uniqBy;
    },
    89569: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => l });
      let n = Math.PI,
        i = 2 * n,
        a = i - 1e-6;
      function o(e) {
        this._ += e[0];
        for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t];
      }
      class u {
        constructor(e) {
          ((this._x0 = this._y0 = this._x1 = this._y1 = null),
            (this._ = ""),
            (this._append =
              null == e
                ? o
                : (function (e) {
                    let t = Math.floor(e);
                    if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
                    if (t > 15) return o;
                    let r = 10 ** t;
                    return function (e) {
                      this._ += e[0];
                      for (let t = 1, n = e.length; t < n; ++t)
                        this._ += Math.round(arguments[t] * r) / r + e[t];
                    };
                  })(e)));
        }
        moveTo(e, t) {
          this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}`;
        }
        closePath() {
          null !== this._x1 && ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
        }
        lineTo(e, t) {
          this._append`L${(this._x1 = +e)},${(this._y1 = +t)}`;
        }
        quadraticCurveTo(e, t, r, n) {
          this._append`Q${+e},${+t},${(this._x1 = +r)},${(this._y1 = +n)}`;
        }
        bezierCurveTo(e, t, r, n, i, a) {
          this._append`C${+e},${+t},${+r},${+n},${(this._x1 = +i)},${(this._y1 = +a)}`;
        }
        arcTo(e, t, r, i, a) {
          if (((e *= 1), (t *= 1), (r *= 1), (i *= 1), (a *= 1) < 0))
            throw Error(`negative radius: ${a}`);
          let o = this._x1,
            u = this._y1,
            l = r - e,
            c = i - t,
            s = o - e,
            f = u - t,
            d = s * s + f * f;
          if (null === this._x1) this._append`M${(this._x1 = e)},${(this._y1 = t)}`;
          else if (d > 1e-6)
            if (Math.abs(f * l - c * s) > 1e-6 && a) {
              let h = r - o,
                p = i - u,
                y = l * l + c * c,
                v = Math.sqrt(y),
                g = Math.sqrt(d),
                m = a * Math.tan((n - Math.acos((y + d - (h * h + p * p)) / (2 * v * g))) / 2),
                b = m / g,
                x = m / v;
              (Math.abs(b - 1) > 1e-6 && this._append`L${e + b * s},${t + b * f}`,
                this
                  ._append`A${a},${a},0,0,${+(f * h > s * p)},${(this._x1 = e + x * l)},${(this._y1 = t + x * c)}`);
            } else this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
        }
        arc(e, t, r, o, u, l) {
          if (((e *= 1), (t *= 1), (r *= 1), (l = !!l), r < 0))
            throw Error(`negative radius: ${r}`);
          let c = r * Math.cos(o),
            s = r * Math.sin(o),
            f = e + c,
            d = t + s,
            h = 1 ^ l,
            p = l ? o - u : u - o;
          (null === this._x1
            ? this._append`M${f},${d}`
            : (Math.abs(this._x1 - f) > 1e-6 || Math.abs(this._y1 - d) > 1e-6) &&
              this._append`L${f},${d}`,
            r &&
              (p < 0 && (p = (p % i) + i),
              p > a
                ? this
                    ._append`A${r},${r},0,1,${h},${e - c},${t - s}A${r},${r},0,1,${h},${(this._x1 = f)},${(this._y1 = d)}`
                : p > 1e-6 &&
                  this
                    ._append`A${r},${r},0,${+(p >= n)},${h},${(this._x1 = e + r * Math.cos(u))},${(this._y1 = t + r * Math.sin(u))}`));
        }
        rect(e, t, r, n) {
          this
            ._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 = +t)}h${(r *= 1)}v${+n}h${-r}Z`;
        }
        toString() {
          return this._;
        }
      }
      function l(e) {
        let t = 3;
        return (
          (e.digits = function (r) {
            if (!arguments.length) return t;
            if (null == r) t = null;
            else {
              let e = Math.floor(r);
              if (!(e >= 0)) throw RangeError(`invalid digits: ${r}`);
              t = e;
            }
            return e;
          }),
          () => new u(t)
        );
      }
      u.prototype;
    },
    89644: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(37047);
      t.isArrayLike = function (e) {
        return null != e && "function" != typeof e && n.isLength(e.length);
      };
    },
    90135: (e, t, r) => {
      "use strict";
      r.d(t, { LF: () => i, k$: () => o, rN: () => u, z3: () => a });
      var n = r(76069),
        i = (e) => e.chartData,
        a = (0, n.Mz)([i], (e) => {
          var t = null != e.chartData ? e.chartData.length - 1 : 0;
          return {
            chartData: e.chartData,
            computedData: e.computedData,
            dataEndIndex: t,
            dataStartIndex: 0,
          };
        }),
        o = (e, t, r, n) => (n ? a(e) : i(e)),
        u = (e, t, r) => (r ? a(e) : i(e));
    },
    90167: (e, t, r) => {
      "use strict";
      r.d(t, {
        A3: () => _,
        Kp: () => m,
        SG: () => O,
        W7: () => y,
        WX: () => x,
        fz: () => b,
        kz: () => w,
        qC: () => d,
        rY: () => g,
        sk: () => h,
        yi: () => v,
      });
      var n = r(12115),
        i = r(81024),
        a = r(38116),
        o = r(8291),
        u = r(27588),
        l = r(35704),
        c = r(50257),
        s = r(26265),
        f = r(92377);
      function d(e) {
        if (e)
          return {
            x: e.x,
            y: e.y,
            upperWidth: "upperWidth" in e ? e.upperWidth : e.width,
            lowerWidth: "lowerWidth" in e ? e.lowerWidth : e.width,
            width: e.width,
            height: e.height,
          };
      }
      var h = () => {
          var e,
            t = (0, l.r)(),
            r = (0, i.G)(o.Ds),
            n = (0, i.G)(c.U),
            a = null == (e = (0, i.G)(c.C)) ? void 0 : e.padding;
          return t && n && a
            ? {
                width: n.width - a.left - a.right,
                height: n.height - a.top - a.bottom,
                x: a.left,
                y: a.top,
              }
            : r;
        },
        p = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0, brushBottom: 0 },
        y = () => {
          var e;
          return null != (e = (0, i.G)(o.HZ)) ? e : p;
        },
        v = () => (0, i.G)(u.Lp),
        g = () => (0, i.G)(u.A$),
        m = () => (0, i.G)((e) => e.layout.margin),
        b = (e) => e.layout.layoutType,
        x = () => (0, i.G)(b),
        w = () => {
          var e = x();
          if ("horizontal" === e || "vertical" === e) return e;
        },
        O = () => void 0 !== x(),
        _ = (e) => {
          var t = (0, i.j)(),
            r = (0, l.r)(),
            { width: o, height: u } = e,
            c = (0, s.w)(),
            d = o,
            h = u;
          return (
            c && ((d = c.width > 0 ? c.width : o), (h = c.height > 0 ? c.height : u)),
            (0, n.useEffect)(() => {
              !r && (0, f.F)(d) && (0, f.F)(h) && t((0, a.gX)({ width: d, height: h }));
            }, [t, r, d, h]),
            null
          );
        };
    },
    90685: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => a });
      var n = r(89139),
        i = r.n(n);
      function a(e, t, r) {
        return !0 === t ? i()(e, r) : "function" == typeof t ? i()(e, t) : e;
      }
    },
    91640: (e, t, r) => {
      "use strict";
      r.d(t, { dc: () => u, ff: () => o, g0: () => l });
      var n = r(76069),
        i = r(97354),
        a = r.n(i),
        o = (e) => e.legend.settings,
        u = (e) => e.legend.size,
        l = (0, n.Mz)([(e) => e.legend.payload, o], (e, t) => {
          var { itemSorter: r } = t,
            n = e.flat(1);
          return r ? a()(n, r) : n;
        });
    },
    92377: (e, t, r) => {
      "use strict";
      function n(e) {
        return Number.isFinite(e);
      }
      function i(e) {
        return "number" == typeof e && e > 0 && Number.isFinite(e);
      }
      r.d(t, { F: () => i, H: () => n });
    },
    92487: (e, t, r) => {
      "use strict";
      r.d(t, {
        CA: () => b,
        MC: () => f,
        QG: () => m,
        Vi: () => c,
        W3: () => u,
        cU: () => d,
        fR: () => p,
        hd: () => h,
        m2: () => s,
      });
      var n = r(26286),
        i = r(60013);
      function a(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : a(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var u = 0,
        l = (0, n.Z0)({
          name: "cartesianAxis",
          initialState: { xAxis: {}, yAxis: {}, zAxis: {} },
          reducers: {
            addXAxis: {
              reducer(e, t) {
                e.xAxis[t.payload.id] = (0, i.h4)(t.payload);
              },
              prepare: (0, n.aA)(),
            },
            replaceXAxis: {
              reducer(e, t) {
                var { prev: r, next: n } = t.payload;
                void 0 !== e.xAxis[r.id] &&
                  (r.id !== n.id && delete e.xAxis[r.id], (e.xAxis[n.id] = (0, i.h4)(n)));
              },
              prepare: (0, n.aA)(),
            },
            removeXAxis: {
              reducer(e, t) {
                delete e.xAxis[t.payload.id];
              },
              prepare: (0, n.aA)(),
            },
            addYAxis: {
              reducer(e, t) {
                e.yAxis[t.payload.id] = (0, i.h4)(t.payload);
              },
              prepare: (0, n.aA)(),
            },
            replaceYAxis: {
              reducer(e, t) {
                var { prev: r, next: n } = t.payload;
                void 0 !== e.yAxis[r.id] &&
                  (r.id !== n.id && delete e.yAxis[r.id], (e.yAxis[n.id] = (0, i.h4)(n)));
              },
              prepare: (0, n.aA)(),
            },
            removeYAxis: {
              reducer(e, t) {
                delete e.yAxis[t.payload.id];
              },
              prepare: (0, n.aA)(),
            },
            addZAxis: {
              reducer(e, t) {
                e.zAxis[t.payload.id] = (0, i.h4)(t.payload);
              },
              prepare: (0, n.aA)(),
            },
            replaceZAxis: {
              reducer(e, t) {
                var { prev: r, next: n } = t.payload;
                void 0 !== e.zAxis[r.id] &&
                  (r.id !== n.id && delete e.zAxis[r.id], (e.zAxis[n.id] = (0, i.h4)(n)));
              },
              prepare: (0, n.aA)(),
            },
            removeZAxis: {
              reducer(e, t) {
                delete e.zAxis[t.payload.id];
              },
              prepare: (0, n.aA)(),
            },
            updateYAxisWidth(e, t) {
              var { id: r, width: n } = t.payload,
                i = e.yAxis[r];
              if (i) {
                var a = i.widthHistory || [];
                if (
                  3 === a.length &&
                  a[0] === a[2] &&
                  n === a[1] &&
                  n !== i.width &&
                  1 >= Math.abs(n - a[0])
                )
                  return;
                var u = [...a, n].slice(-3);
                e.yAxis[r] = o(o({}, e.yAxis[r]), {}, { width: n, widthHistory: u });
              }
            },
          },
        }),
        {
          addXAxis: c,
          replaceXAxis: s,
          removeXAxis: f,
          addYAxis: d,
          replaceYAxis: h,
          removeYAxis: p,
          addZAxis: y,
          replaceZAxis: v,
          removeZAxis: g,
          updateYAxisWidth: m,
        } = l.actions,
        b = l.reducer;
    },
    92673: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.toArray = function (e) {
          return Array.isArray(e) ? e : Array.from(e);
        }));
    },
    93100: (e, t, r) => {
      "use strict";
      r.d(t, { mZ: () => u, vE: () => o });
      var n = r(26286),
        i = {
          accessibilityLayer: !0,
          barCategoryGap: "10%",
          barGap: 4,
          barSize: void 0,
          className: void 0,
          maxBarSize: void 0,
          stackOffset: "none",
          syncId: void 0,
          syncMethod: "index",
          baseValue: void 0,
          reverseStackOrder: !1,
        },
        a = (0, n.Z0)({
          name: "rootProps",
          initialState: i,
          reducers: {
            updateOptions: (e, t) => {
              var r;
              ((e.accessibilityLayer = t.payload.accessibilityLayer),
                (e.barCategoryGap = t.payload.barCategoryGap),
                (e.barGap = null != (r = t.payload.barGap) ? r : i.barGap),
                (e.barSize = t.payload.barSize),
                (e.maxBarSize = t.payload.maxBarSize),
                (e.stackOffset = t.payload.stackOffset),
                (e.syncId = t.payload.syncId),
                (e.syncMethod = t.payload.syncMethod),
                (e.className = t.payload.className),
                (e.baseValue = t.payload.baseValue),
                (e.reverseStackOrder = t.payload.reverseStackOrder));
            },
          },
        }),
        o = a.reducer,
        { updateOptions: u } = a.actions;
    },
    93276: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(81943),
        i = r(94202),
        a = r(35067),
        o = r(25723);
      t.get = function e(t, r, u) {
        if (null == t) return u;
        switch (typeof r) {
          case "string": {
            if (n.isUnsafeProperty(r)) return u;
            let a = t[r];
            if (void 0 === a)
              if (i.isDeepKey(r)) return e(t, o.toPath(r), u);
              else return u;
            return a;
          }
          case "number":
          case "symbol": {
            "number" == typeof r && (r = a.toKey(r));
            let e = t[r];
            if (void 0 === e) return u;
            return e;
          }
          default: {
            if (Array.isArray(r)) {
              var l = t,
                c = r,
                s = u;
              if (0 === c.length) return s;
              let e = l;
              for (let t = 0; t < c.length; t++) {
                if (null == e || n.isUnsafeProperty(c[t])) return s;
                e = e[c[t]];
              }
              return void 0 === e ? s : e;
            }
            if (((r = Object.is(r?.valueOf(), -0) ? "-0" : String(r)), n.isUnsafeProperty(r)))
              return u;
            let e = t[r];
            if (void 0 === e) return u;
            return e;
          }
        }
      };
    },
    94078: (e, t, r) => {
      "use strict";
      r.d(t, { LV: () => u, M: () => a, hq: () => i });
      var n = (0, r(26286).Z0)({
          name: "chartData",
          initialState: {
            chartData: void 0,
            computedData: void 0,
            dataStartIndex: 0,
            dataEndIndex: 0,
          },
          reducers: {
            setChartData(e, t) {
              if (((e.chartData = t.payload), null == t.payload)) {
                ((e.dataStartIndex = 0), (e.dataEndIndex = 0));
                return;
              }
              t.payload.length > 0 &&
                e.dataEndIndex !== t.payload.length - 1 &&
                (e.dataEndIndex = t.payload.length - 1);
            },
            setComputedData(e, t) {
              e.computedData = t.payload;
            },
            setDataStartEndIndexes(e, t) {
              var { startIndex: r, endIndex: n } = t.payload;
              (null != r && (e.dataStartIndex = r), null != n && (e.dataEndIndex = n));
            },
          },
        }),
        { setChartData: i, setDataStartEndIndexes: a, setComputedData: o } = n.actions,
        u = n.reducer;
    },
    94202: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.isDeepKey = function (e) {
          switch (typeof e) {
            case "number":
            case "symbol":
              return !1;
            case "string":
              return e.includes(".") || e.includes("[") || e.includes("]");
          }
        }));
    },
    94868: (e, t, r) => {
      "use strict";
      r.d(t, { w: () => n });
      var n = (e) => {
        var t = e.currentTarget.getBoundingClientRect(),
          r = t.width / e.currentTarget.offsetWidth,
          n = t.height / e.currentTarget.offsetHeight;
        return {
          chartX: Math.round((e.clientX - t.left) / r),
          chartY: Math.round((e.clientY - t.top) / n),
        };
      };
    },
    94913: (e, t, r) => {
      "use strict";
      r.d(t, { n: () => a });
      var n = r(12115),
        i = r(49580);
      function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "animation-",
          r = (0, n.useRef)((0, i.NF)(t)),
          a = (0, n.useRef)(e);
        return (a.current !== e && ((r.current = (0, i.NF)(t)), (a.current = e)), r.current);
      }
    },
    95603: (e, t, r) => {
      "use strict";
      r.d(t, { R: () => i });
      var n = r(90167),
        i = (e) => {
          var t = (0, n.fz)(e);
          return "horizontal" === t
            ? "xAxis"
            : "vertical" === t
              ? "yAxis"
              : "centric" === t
                ? "angleAxis"
                : "radiusAxis";
        };
    },
    95962: (e, t, r) => {
      "use strict";
      var n = r(12115);
      ("function" == typeof Object.is && Object.is,
        n.useSyncExternalStore,
        n.useRef,
        n.useEffect,
        n.useMemo,
        n.useDebugValue);
    },
    96288: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, Symbol.toStringTag, { value: "Module" });
      let n = r(52451),
        i = r(89644),
        a = r(35865),
        o = r(77159);
      t.isIterateeCall = function (e, t, r) {
        return (
          !!a.isObject(r) &&
          ((!!("number" == typeof t && i.isArrayLike(r) && n.isIndex(t)) && t < r.length) ||
            ("string" == typeof t && t in r)) &&
          o.eq(r[t], e)
        );
      };
    },
    96372: (e, t, r) => {
      "use strict";
      r.d(t, { B8: () => p, WO: () => h, ZV: () => d, v3: () => y, wR: () => f });
      var n = r(26286),
        i = r(60013),
        a = r(30732);
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                var n, i, a;
                ((n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError("@@toPrimitive must return a primitive value.");
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : o(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
        }
        return e;
      }
      var l = {
          zIndexMap: Object.values(a.I).reduce(
            (e, t) =>
              u(u({}, e), {}, { [t]: { element: void 0, panoramaElement: void 0, consumers: 0 } }),
            {}
          ),
        },
        c = new Set(Object.values(a.I)),
        s = (0, n.Z0)({
          name: "zIndex",
          initialState: l,
          reducers: {
            registerZIndexPortal: {
              reducer: (e, t) => {
                var { zIndex: r } = t.payload;
                e.zIndexMap[r]
                  ? (e.zIndexMap[r].consumers += 1)
                  : (e.zIndexMap[r] = { consumers: 1, element: void 0, panoramaElement: void 0 });
              },
              prepare: (0, n.aA)(),
            },
            unregisterZIndexPortal: {
              reducer: (e, t) => {
                var { zIndex: r } = t.payload;
                e.zIndexMap[r] &&
                  ((e.zIndexMap[r].consumers -= 1),
                  e.zIndexMap[r].consumers <= 0 && !c.has(r) && delete e.zIndexMap[r]);
              },
              prepare: (0, n.aA)(),
            },
            registerZIndexPortalElement: {
              reducer: (e, t) => {
                var { zIndex: r, element: n, isPanorama: a } = t.payload;
                e.zIndexMap[r]
                  ? a
                    ? (e.zIndexMap[r].panoramaElement = (0, i.h4)(n))
                    : (e.zIndexMap[r].element = (0, i.h4)(n))
                  : (e.zIndexMap[r] = {
                      consumers: 0,
                      element: a ? void 0 : (0, i.h4)(n),
                      panoramaElement: a ? (0, i.h4)(n) : void 0,
                    });
              },
              prepare: (0, n.aA)(),
            },
            unregisterZIndexPortalElement: {
              reducer: (e, t) => {
                var { zIndex: r } = t.payload;
                e.zIndexMap[r] &&
                  (t.payload.isPanorama
                    ? (e.zIndexMap[r].panoramaElement = void 0)
                    : (e.zIndexMap[r].element = void 0));
              },
              prepare: (0, n.aA)(),
            },
          },
        }),
        {
          registerZIndexPortal: f,
          unregisterZIndexPortal: d,
          registerZIndexPortalElement: h,
          unregisterZIndexPortalElement: p,
        } = s.actions,
        y = s.reducer;
    },
    97354: (e, t, r) => {
      e.exports = r(2851).sortBy;
    },
    98496: (e, t, r) => {
      "use strict";
      r.d(t, { g: () => s });
      var n = r(76069),
        i = r(90167),
        a = r(72481),
        o = r(8291),
        u = r(18305),
        l = r(14821),
        c = r(95603),
        s = (0, n.Mz)([(e, t) => t, i.fz, l.D0, c.R, a.gL, a.R4, u.r1, o.HZ], u.aX);
    },
  },
]);
