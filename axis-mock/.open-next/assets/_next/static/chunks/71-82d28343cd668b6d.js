"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [71],
  {
    58547: (e, t, n) => {
      n.d(t, {
        bm: () => tm,
        UC: () => tf,
        VY: () => tv,
        hJ: () => td,
        ZL: () => ts,
        bL: () => tu,
        hE: () => tp,
        l9: () => tc,
      });
      var r,
        o,
        i,
        a = n(12115),
        l = n(92556),
        u = n(94446),
        c = n(95155),
        s = n(68946),
        d = n(23558),
        f = n(47650),
        p = Symbol("radix.slottable");
      function v(e) {
        return (
          a.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === p
        );
      }
      var m = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "select",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = (function (e) {
              let t = (function (e) {
                  let t = a.forwardRef((e, t) => {
                    let { children: n, ...r } = e;
                    if (a.isValidElement(n)) {
                      var o;
                      let e,
                        i,
                        l =
                          ((o = n),
                          (i =
                            (e = Object.getOwnPropertyDescriptor(o.props, "ref")?.get) &&
                            "isReactWarning" in e &&
                            e.isReactWarning)
                            ? o.ref
                            : (i =
                                  (e = Object.getOwnPropertyDescriptor(o, "ref")?.get) &&
                                  "isReactWarning" in e &&
                                  e.isReactWarning)
                              ? o.props.ref
                              : o.props.ref || o.ref),
                        c = (function (e, t) {
                          let n = { ...t };
                          for (let r in t) {
                            let o = e[r],
                              i = t[r];
                            /^on[A-Z]/.test(r)
                              ? o && i
                                ? (n[r] = (...e) => {
                                    let t = i(...e);
                                    return (o(...e), t);
                                  })
                                : o && (n[r] = o)
                              : "style" === r
                                ? (n[r] = { ...o, ...i })
                                : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "));
                          }
                          return { ...e, ...n };
                        })(r, n.props);
                      return (
                        n.type !== a.Fragment && (c.ref = t ? (0, u.t)(t, l) : l),
                        a.cloneElement(n, c)
                      );
                    }
                    return a.Children.count(n) > 1 ? a.Children.only(null) : null;
                  });
                  return ((t.displayName = `${e}.SlotClone`), t);
                })(e),
                n = a.forwardRef((e, n) => {
                  let { children: r, ...o } = e,
                    i = a.Children.toArray(r),
                    l = i.find(v);
                  if (l) {
                    let e = l.props.children,
                      r = i.map((t) =>
                        t !== l
                          ? t
                          : a.Children.count(e) > 1
                            ? a.Children.only(null)
                            : a.isValidElement(e)
                              ? e.props.children
                              : null
                      );
                    return (0, c.jsx)(t, {
                      ...o,
                      ref: n,
                      children: a.isValidElement(e) ? a.cloneElement(e, void 0, r) : null,
                    });
                  }
                  return (0, c.jsx)(t, { ...o, ref: n, children: r });
                });
              return ((n.displayName = `${e}.Slot`), n);
            })(`Primitive.${t}`),
            r = a.forwardRef((e, r) => {
              let { asChild: o, ...i } = e;
              return (
                "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0, c.jsx)(o ? n : t, { ...i, ref: r })
              );
            });
          return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
        }, {}),
        h = n(70222),
        y = "dismissableLayer.update",
        g = a.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        b = a.forwardRef((e, t) => {
          var n, r;
          let {
              disableOutsidePointerEvents: i = !1,
              onEscapeKeyDown: s,
              onPointerDownOutside: d,
              onFocusOutside: f,
              onInteractOutside: p,
              onDismiss: v,
              ...b
            } = e,
            C = a.useContext(g),
            [x, R] = a.useState(null),
            N =
              null != (r = null == x ? void 0 : x.ownerDocument)
                ? r
                : null == (n = globalThis)
                  ? void 0
                  : n.document,
            [, S] = a.useState({}),
            j = (0, u.s)(t, (e) => R(e)),
            O = Array.from(C.layers),
            [P] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1),
            D = O.indexOf(P),
            A = x ? O.indexOf(x) : -1,
            k = C.layersWithOutsidePointerEventsDisabled.size > 0,
            L = A >= D,
            I = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == (t = globalThis)
                      ? void 0
                      : t.document,
                r = (0, h.c)(e),
                o = a.useRef(!1),
                i = a.useRef(() => {});
              return (
                a.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !o.current) {
                        let t = function () {
                            w("dismissableLayer.pointerDownOutside", r, o, { discrete: !0 });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", i.current),
                            (i.current = t),
                            n.addEventListener("click", i.current, { once: !0 }))
                          : t();
                      } else n.removeEventListener("click", i.current);
                      o.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    (window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", i.current));
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (o.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...C.branches].some((e) => e.contains(t));
              L &&
                !n &&
                (null == d || d(e), null == p || p(e), e.defaultPrevented || null == v || v());
            }, N),
            T = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == (t = globalThis)
                      ? void 0
                      : t.document,
                r = (0, h.c)(e),
                o = a.useRef(!1);
              return (
                a.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !o.current &&
                      w("dismissableLayer.focusOutside", r, { originalEvent: e }, { discrete: !1 });
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                { onFocusCapture: () => (o.current = !0), onBlurCapture: () => (o.current = !1) }
              );
            })((e) => {
              let t = e.target;
              ![...C.branches].some((e) => e.contains(t)) &&
                (null == f || f(e), null == p || p(e), e.defaultPrevented || null == v || v());
            }, N);
          return (
            !(function (e, t = globalThis?.document) {
              let n = (0, h.c)(e);
              a.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              A === C.layers.size - 1 &&
                (null == s || s(e), !e.defaultPrevented && v && (e.preventDefault(), v()));
            }, N),
            a.useEffect(() => {
              if (x)
                return (
                  i &&
                    (0 === C.layersWithOutsidePointerEventsDisabled.size &&
                      ((o = N.body.style.pointerEvents), (N.body.style.pointerEvents = "none")),
                    C.layersWithOutsidePointerEventsDisabled.add(x)),
                  C.layers.add(x),
                  E(),
                  () => {
                    i &&
                      1 === C.layersWithOutsidePointerEventsDisabled.size &&
                      (N.body.style.pointerEvents = o);
                  }
                );
            }, [x, N, i, C]),
            a.useEffect(
              () => () => {
                x && (C.layers.delete(x), C.layersWithOutsidePointerEventsDisabled.delete(x), E());
              },
              [x, C]
            ),
            a.useEffect(() => {
              let e = () => S({});
              return (document.addEventListener(y, e), () => document.removeEventListener(y, e));
            }, []),
            (0, c.jsx)(m.div, {
              ...b,
              ref: j,
              style: { pointerEvents: k ? (L ? "auto" : "none") : void 0, ...e.style },
              onFocusCapture: (0, l.mK)(e.onFocusCapture, T.onFocusCapture),
              onBlurCapture: (0, l.mK)(e.onBlurCapture, T.onBlurCapture),
              onPointerDownCapture: (0, l.mK)(e.onPointerDownCapture, I.onPointerDownCapture),
            })
          );
        });
      function E() {
        let e = new CustomEvent(y);
        document.dispatchEvent(e);
      }
      function w(e, t, n, r) {
        let { discrete: o } = r,
          i = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        if ((t && i.addEventListener(e, t, { once: !0 }), o))
          i && f.flushSync(() => i.dispatchEvent(a));
        else i.dispatchEvent(a);
      }
      ((b.displayName = "DismissableLayer"),
        (a.forwardRef((e, t) => {
          let n = a.useContext(g),
            r = a.useRef(null),
            o = (0, u.s)(t, r);
          return (
            a.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, c.jsx)(m.div, { ...e, ref: o })
          );
        }).displayName = "DismissableLayerBranch"));
      var C = Symbol("radix.slottable");
      function x(e) {
        return (
          a.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === C
        );
      }
      var R = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "select",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = (function (e) {
              let t = (function (e) {
                  let t = a.forwardRef((e, t) => {
                    let { children: n, ...r } = e;
                    if (a.isValidElement(n)) {
                      var o;
                      let e,
                        i,
                        l =
                          ((o = n),
                          (i =
                            (e = Object.getOwnPropertyDescriptor(o.props, "ref")?.get) &&
                            "isReactWarning" in e &&
                            e.isReactWarning)
                            ? o.ref
                            : (i =
                                  (e = Object.getOwnPropertyDescriptor(o, "ref")?.get) &&
                                  "isReactWarning" in e &&
                                  e.isReactWarning)
                              ? o.props.ref
                              : o.props.ref || o.ref),
                        c = (function (e, t) {
                          let n = { ...t };
                          for (let r in t) {
                            let o = e[r],
                              i = t[r];
                            /^on[A-Z]/.test(r)
                              ? o && i
                                ? (n[r] = (...e) => {
                                    let t = i(...e);
                                    return (o(...e), t);
                                  })
                                : o && (n[r] = o)
                              : "style" === r
                                ? (n[r] = { ...o, ...i })
                                : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "));
                          }
                          return { ...e, ...n };
                        })(r, n.props);
                      return (
                        n.type !== a.Fragment && (c.ref = t ? (0, u.t)(t, l) : l),
                        a.cloneElement(n, c)
                      );
                    }
                    return a.Children.count(n) > 1 ? a.Children.only(null) : null;
                  });
                  return ((t.displayName = `${e}.SlotClone`), t);
                })(e),
                n = a.forwardRef((e, n) => {
                  let { children: r, ...o } = e,
                    i = a.Children.toArray(r),
                    l = i.find(x);
                  if (l) {
                    let e = l.props.children,
                      r = i.map((t) =>
                        t !== l
                          ? t
                          : a.Children.count(e) > 1
                            ? a.Children.only(null)
                            : a.isValidElement(e)
                              ? e.props.children
                              : null
                      );
                    return (0, c.jsx)(t, {
                      ...o,
                      ref: n,
                      children: a.isValidElement(e) ? a.cloneElement(e, void 0, r) : null,
                    });
                  }
                  return (0, c.jsx)(t, { ...o, ref: n, children: r });
                });
              return ((n.displayName = `${e}.Slot`), n);
            })(`Primitive.${t}`),
            r = a.forwardRef((e, r) => {
              let { asChild: o, ...i } = e;
              return (
                "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0, c.jsx)(o ? n : t, { ...i, ref: r })
              );
            });
          return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
        }, {}),
        N = "focusScope.autoFocusOnMount",
        S = "focusScope.autoFocusOnUnmount",
        j = { bubbles: !1, cancelable: !0 },
        O = a.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              ...l
            } = e,
            [s, d] = a.useState(null),
            f = (0, h.c)(o),
            p = (0, h.c)(i),
            v = a.useRef(null),
            m = (0, u.s)(t, (e) => d(e)),
            y = a.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (a.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (y.paused || !s) return;
                  let t = e.target;
                  s.contains(t) ? (v.current = t) : A(v.current, { select: !0 });
                },
                t = function (e) {
                  if (y.paused || !s) return;
                  let t = e.relatedTarget;
                  null !== t && (s.contains(t) || A(v.current, { select: !0 }));
                };
              (document.addEventListener("focusin", e), document.addEventListener("focusout", t));
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && A(s);
              });
              return (
                s && n.observe(s, { childList: !0, subtree: !0 }),
                () => {
                  (document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect());
                }
              );
            }
          }, [r, s, y.paused]),
            a.useEffect(() => {
              if (s) {
                k.add(y);
                let e = document.activeElement;
                if (!s.contains(e)) {
                  let t = new CustomEvent(N, j);
                  (s.addEventListener(N, f),
                    s.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                          n = document.activeElement;
                        for (let r of e)
                          if ((A(r, { select: t }), document.activeElement !== n)) return;
                      })(
                        P(s).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && A(s)));
                }
                return () => {
                  (s.removeEventListener(N, f),
                    setTimeout(() => {
                      let t = new CustomEvent(S, j);
                      (s.addEventListener(S, p),
                        s.dispatchEvent(t),
                        t.defaultPrevented || A(null != e ? e : document.body, { select: !0 }),
                        s.removeEventListener(S, p),
                        k.remove(y));
                    }, 0));
                };
              }
            }, [s, f, p, y]));
          let g = a.useCallback(
            (e) => {
              if ((!n && !r) || y.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = P(e);
                    return [D(t, e), D(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey && o === r && (e.preventDefault(), n && A(i, { select: !0 }))
                    : (e.preventDefault(), n && A(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, y.paused]
          );
          return (0, c.jsx)(R.div, { tabIndex: -1, ...l, ref: m, onKeyDown: g });
        });
      function P(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function D(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function A(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          (e.focus({ preventScroll: !0 }),
            e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select());
        }
      }
      O.displayName = "FocusScope";
      var k = (function () {
        let e = [];
        return {
          add(t) {
            let n = e[0];
            (t !== n && (null == n || n.pause()), (e = L(e, t)).unshift(t));
          },
          remove(t) {
            var n;
            null == (n = (e = L(e, t))[0]) || n.resume();
          },
        };
      })();
      function L(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return (-1 !== r && n.splice(r, 1), n);
      }
      var I = Symbol("radix.slottable");
      function T(e) {
        return (
          a.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === I
        );
      }
      var _ = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "select",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = (function (e) {
              let t = (function (e) {
                  let t = a.forwardRef((e, t) => {
                    let { children: n, ...r } = e;
                    if (a.isValidElement(n)) {
                      var o;
                      let e,
                        i,
                        l =
                          ((o = n),
                          (i =
                            (e = Object.getOwnPropertyDescriptor(o.props, "ref")?.get) &&
                            "isReactWarning" in e &&
                            e.isReactWarning)
                            ? o.ref
                            : (i =
                                  (e = Object.getOwnPropertyDescriptor(o, "ref")?.get) &&
                                  "isReactWarning" in e &&
                                  e.isReactWarning)
                              ? o.props.ref
                              : o.props.ref || o.ref),
                        c = (function (e, t) {
                          let n = { ...t };
                          for (let r in t) {
                            let o = e[r],
                              i = t[r];
                            /^on[A-Z]/.test(r)
                              ? o && i
                                ? (n[r] = (...e) => {
                                    let t = i(...e);
                                    return (o(...e), t);
                                  })
                                : o && (n[r] = o)
                              : "style" === r
                                ? (n[r] = { ...o, ...i })
                                : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "));
                          }
                          return { ...e, ...n };
                        })(r, n.props);
                      return (
                        n.type !== a.Fragment && (c.ref = t ? (0, u.t)(t, l) : l),
                        a.cloneElement(n, c)
                      );
                    }
                    return a.Children.count(n) > 1 ? a.Children.only(null) : null;
                  });
                  return ((t.displayName = `${e}.SlotClone`), t);
                })(e),
                n = a.forwardRef((e, n) => {
                  let { children: r, ...o } = e,
                    i = a.Children.toArray(r),
                    l = i.find(T);
                  if (l) {
                    let e = l.props.children,
                      r = i.map((t) =>
                        t !== l
                          ? t
                          : a.Children.count(e) > 1
                            ? a.Children.only(null)
                            : a.isValidElement(e)
                              ? e.props.children
                              : null
                      );
                    return (0, c.jsx)(t, {
                      ...o,
                      ref: n,
                      children: a.isValidElement(e) ? a.cloneElement(e, void 0, r) : null,
                    });
                  }
                  return (0, c.jsx)(t, { ...o, ref: n, children: r });
                });
              return ((n.displayName = `${e}.Slot`), n);
            })(`Primitive.${t}`),
            r = a.forwardRef((e, r) => {
              let { asChild: o, ...i } = e;
              return (
                "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0, c.jsx)(o ? n : t, { ...i, ref: r })
              );
            });
          return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
        }, {}),
        M = n(4129),
        W = a.forwardRef((e, t) => {
          var n, r;
          let { container: o, ...i } = e,
            [l, u] = a.useState(!1);
          (0, M.N)(() => u(!0), []);
          let s =
            o || (l && (null == (r = globalThis) || null == (n = r.document) ? void 0 : n.body));
          return s ? f.createPortal((0, c.jsx)(_.div, { ...i, ref: t }), s) : null;
        });
      W.displayName = "Portal";
      var F = n(76842);
      function B(e) {
        let t = (function (e) {
            let t = a.forwardRef((e, t) => {
              let { children: n, ...r } = e;
              if (a.isValidElement(n)) {
                var o;
                let e,
                  i,
                  l =
                    ((o = n),
                    (i =
                      (e = Object.getOwnPropertyDescriptor(o.props, "ref")?.get) &&
                      "isReactWarning" in e &&
                      e.isReactWarning)
                      ? o.ref
                      : (i =
                            (e = Object.getOwnPropertyDescriptor(o, "ref")?.get) &&
                            "isReactWarning" in e &&
                            e.isReactWarning)
                        ? o.props.ref
                        : o.props.ref || o.ref),
                  c = (function (e, t) {
                    let n = { ...t };
                    for (let r in t) {
                      let o = e[r],
                        i = t[r];
                      /^on[A-Z]/.test(r)
                        ? o && i
                          ? (n[r] = (...e) => {
                              let t = i(...e);
                              return (o(...e), t);
                            })
                          : o && (n[r] = o)
                        : "style" === r
                          ? (n[r] = { ...o, ...i })
                          : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "));
                    }
                    return { ...e, ...n };
                  })(r, n.props);
                return (
                  n.type !== a.Fragment && (c.ref = t ? (0, u.t)(t, l) : l),
                  a.cloneElement(n, c)
                );
              }
              return a.Children.count(n) > 1 ? a.Children.only(null) : null;
            });
            return ((t.displayName = `${e}.SlotClone`), t);
          })(e),
          n = a.forwardRef((e, n) => {
            let { children: r, ...o } = e,
              i = a.Children.toArray(r),
              l = i.find(K);
            if (l) {
              let e = l.props.children,
                r = i.map((t) =>
                  t !== l
                    ? t
                    : a.Children.count(e) > 1
                      ? a.Children.only(null)
                      : a.isValidElement(e)
                        ? e.props.children
                        : null
                );
              return (0, c.jsx)(t, {
                ...o,
                ref: n,
                children: a.isValidElement(e) ? a.cloneElement(e, void 0, r) : null,
              });
            }
            return (0, c.jsx)(t, { ...o, ref: n, children: r });
          });
        return ((n.displayName = `${e}.Slot`), n);
      }
      var $ = Symbol("radix.slottable");
      function K(e) {
        return (
          a.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === $
        );
      }
      var V = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "select",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = B(`Primitive.${t}`),
            r = a.forwardRef((e, r) => {
              let { asChild: o, ...i } = e;
              return (
                "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0, c.jsx)(o ? n : t, { ...i, ref: r })
              );
            });
          return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
        }, {}),
        Z = 0;
      function Y() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
      var X = function () {
        return (X =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function z(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      Object.create;
      Object.create;
      var U =
          ("function" == typeof SuppressedError && SuppressedError, "right-scroll-bar-position"),
        H = "width-before-scroll-bar";
      function q(e, t) {
        return ("function" == typeof e ? e(t) : e && (e.current = t), e);
      }
      var G = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        J = new WeakMap();
      function Q(e) {
        return e;
      }
      var ee = (function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            o =
              (void 0 === t && (t = Q),
              (n = []),
              (r = !1),
              {
                read: function () {
                  if (r)
                    throw Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                    );
                  return n.length ? n[n.length - 1] : null;
                },
                useMedium: function (e) {
                  var o = t(e, r);
                  return (
                    n.push(o),
                    function () {
                      n = n.filter(function (e) {
                        return e !== o;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (r = !0; n.length; ) {
                    var t = n;
                    ((n = []), t.forEach(e));
                  }
                  n = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return n;
                    },
                  };
                },
                assignMedium: function (e) {
                  r = !0;
                  var t = [];
                  if (n.length) {
                    var o = n;
                    ((n = []), o.forEach(e), (t = n));
                  }
                  var i = function () {
                      var n = t;
                      ((t = []), n.forEach(e));
                    },
                    a = function () {
                      return Promise.resolve().then(i);
                    };
                  (a(),
                    (n = {
                      push: function (e) {
                        (t.push(e), a());
                      },
                      filter: function (e) {
                        return ((t = t.filter(e)), n);
                      },
                    }));
                },
              });
          return ((o.options = X({ async: !0, ssr: !1 }, e)), o);
        })(),
        et = function () {},
        en = a.forwardRef(function (e, t) {
          var n,
            r,
            o,
            i,
            l = a.useRef(null),
            u = a.useState({ onScrollCapture: et, onWheelCapture: et, onTouchMoveCapture: et }),
            c = u[0],
            s = u[1],
            d = e.forwardProps,
            f = e.children,
            p = e.className,
            v = e.removeScrollBar,
            m = e.enabled,
            h = e.shards,
            y = e.sideCar,
            g = e.noRelative,
            b = e.noIsolation,
            E = e.inert,
            w = e.allowPinchZoom,
            C = e.as,
            x = e.gapMode,
            R = z(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noRelative",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            N =
              ((n = [l, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return q(t, e);
                });
              }),
              ((o = (0, a.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (i = o.facade),
              G(
                function () {
                  var e = J.get(i);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = i.current;
                    (t.forEach(function (e) {
                      r.has(e) || q(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || q(e, o);
                      }));
                  }
                  J.set(i, n);
                },
                [n]
              ),
              i),
            S = X(X({}, R), c);
          return a.createElement(
            a.Fragment,
            null,
            m &&
              a.createElement(y, {
                sideCar: ee,
                removeScrollBar: v,
                shards: h,
                noRelative: g,
                noIsolation: b,
                inert: E,
                setCallbacks: s,
                allowPinchZoom: !!w,
                lockRef: l,
                gapMode: x,
              }),
            d
              ? a.cloneElement(a.Children.only(f), X(X({}, S), { ref: N }))
              : a.createElement(void 0 === C ? "div" : C, X({}, S, { className: p, ref: N }), f)
          );
        });
      ((en.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (en.classNames = { fullWidth: H, zeroRight: U }));
      var er = function (e) {
        var t = e.sideCar,
          n = z(e, ["sideCar"]);
        if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return a.createElement(r, X({}, n));
      };
      er.isSideCarExport = !0;
      var eo = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = i || n.nc;
                  return (t && e.setAttribute("nonce", t), e);
                })())
              ) {
                var o, a;
                ((o = t).styleSheet
                  ? (o.styleSheet.cssText = r)
                  : o.appendChild(document.createTextNode(r)),
                  (a = t),
                  (document.head || document.getElementsByTagName("head")[0]).appendChild(a));
              }
              e++;
            },
            remove: function () {
              --e || !t || (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        ei = function () {
          var e = eo();
          return function (t, n) {
            a.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        ea = function () {
          var e = ei();
          return function (t) {
            return (e(t.styles, t.dynamic), null);
          };
        },
        el = { left: 0, top: 0, right: 0, gap: 0 },
        eu = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        ec = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [eu(n), eu(r), eu(o)];
        },
        es = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window)) return el;
          var t = ec(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
        },
        ed = ea(),
        ef = "data-scroll-locked",
        ep = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(ef, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ")
                      .concat(l, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(U, " {\n    right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(H, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(U, " .")
              .concat(U, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(H, " .")
              .concat(H, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(ef, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        ev = function () {
          var e = parseInt(document.body.getAttribute(ef) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        em = function () {
          a.useEffect(function () {
            return (
              document.body.setAttribute(ef, (ev() + 1).toString()),
              function () {
                var e = ev() - 1;
                e <= 0
                  ? document.body.removeAttribute(ef)
                  : document.body.setAttribute(ef, e.toString());
              }
            );
          }, []);
        },
        eh = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          em();
          var i = a.useMemo(
            function () {
              return es(o);
            },
            [o]
          );
          return a.createElement(ed, { styles: ep(i, !t, o, n ? "" : "!important") });
        },
        ey = !1;
      if ("undefined" != typeof window)
        try {
          var eg = Object.defineProperty({}, "passive", {
            get: function () {
              return ((ey = !0), !0);
            },
          });
          (window.addEventListener("test", eg, eg), window.removeEventListener("test", eg, eg));
        } catch (e) {
          ey = !1;
        }
      var eb = !!ey && { passive: !1 },
        eE = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX || "TEXTAREA" === e.tagName || "visible" !== n[t])
          );
        },
        ew = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host),
              eC(e, r))
            ) {
              var o = ex(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        eC = function (e, t) {
          return "v" === e ? eE(t, "overflowY") : eE(t, "overflowX");
        },
        ex = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        eR = function (e, t, n, r, o) {
          var i,
            a = ((i = window.getComputedStyle(t).direction), "h" === e && "rtl" === i ? -1 : 1),
            l = a * r,
            u = n.target,
            c = t.contains(u),
            s = !1,
            d = l > 0,
            f = 0,
            p = 0;
          do {
            if (!u) break;
            var v = ex(e, u),
              m = v[0],
              h = v[1] - v[2] - a * m;
            (m || h) && eC(e, u) && ((f += h), (p += m));
            var y = u.parentNode;
            u = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
          } while ((!c && u !== document.body) || (c && (t.contains(u) || t === u)));
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && l > f))
              ? (s = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -l > p)) && (s = !0),
            s
          );
        },
        eN = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        eS = function (e) {
          return [e.deltaX, e.deltaY];
        },
        ej = function (e) {
          return e && "current" in e ? e.current : e;
        },
        eO = 0,
        eP = [];
      let eD =
        ((r = function (e) {
          var t = a.useRef([]),
            n = a.useRef([0, 0]),
            r = a.useRef(),
            o = a.useState(eO++)[0],
            i = a.useState(ea)[0],
            l = a.useRef(e);
          (a.useEffect(
            function () {
              l.current = e;
            },
            [e]
          ),
            a.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (function (e, t, n) {
                    if (n || 2 == arguments.length)
                      for (var r, o = 0, i = t.length; o < i; o++)
                        (!r && o in t) ||
                          (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
                    return e.concat(r || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(ej), !0).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      (document.body.classList.remove("block-interactivity-".concat(o)),
                        t.forEach(function (e) {
                          return e.classList.remove("allow-interactivity-".concat(o));
                        }));
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            ));
          var u = a.useCallback(function (e, t) {
              if (("touches" in e && 2 === e.touches.length) || ("wheel" === e.type && e.ctrlKey))
                return !l.current.allowPinchZoom;
              var o,
                i = eN(e),
                a = n.current,
                u = "deltaX" in e ? e.deltaX : a[0] - i[0],
                c = "deltaY" in e ? e.deltaY : a[1] - i[1],
                s = e.target,
                d = Math.abs(u) > Math.abs(c) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === s.type) return !1;
              var f = window.getSelection(),
                p = f && f.anchorNode;
              if (p && (p === s || p.contains(s))) return !1;
              var v = ew(d, s);
              if (!v) return !0;
              if ((v ? (o = d) : ((o = "v" === d ? "h" : "v"), (v = ew(d, s))), !v)) return !1;
              if ((!r.current && "changedTouches" in e && (u || c) && (r.current = o), !o))
                return !0;
              var m = r.current || o;
              return eR(m, t, e, "h" === m ? u : c, !0);
            }, []),
            c = a.useCallback(function (e) {
              if (eP.length && eP[eP.length - 1] === i) {
                var n = "deltaY" in e ? eS(e) : eN(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      ((r = t.delta), r[0] === n[0] && r[1] === n[1])
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (l.current.shards || [])
                    .map(ej)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? u(e, o[0]) : !l.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            s = a.useCallback(function (e, n, r, o) {
              var i = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode));
                  return t;
                })(r),
              };
              (t.current.push(i),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== i;
                  });
                }, 1));
            }, []),
            d = a.useCallback(function (e) {
              ((n.current = eN(e)), (r.current = void 0));
            }, []),
            f = a.useCallback(function (t) {
              s(t.type, eS(t), t.target, u(t, e.lockRef.current));
            }, []),
            p = a.useCallback(function (t) {
              s(t.type, eN(t), t.target, u(t, e.lockRef.current));
            }, []);
          a.useEffect(function () {
            return (
              eP.push(i),
              e.setCallbacks({ onScrollCapture: f, onWheelCapture: f, onTouchMoveCapture: p }),
              document.addEventListener("wheel", c, eb),
              document.addEventListener("touchmove", c, eb),
              document.addEventListener("touchstart", d, eb),
              function () {
                ((eP = eP.filter(function (e) {
                  return e !== i;
                })),
                  document.removeEventListener("wheel", c, eb),
                  document.removeEventListener("touchmove", c, eb),
                  document.removeEventListener("touchstart", d, eb));
              }
            );
          }, []);
          var v = e.removeScrollBar,
            m = e.inert;
          return a.createElement(
            a.Fragment,
            null,
            m
              ? a.createElement(i, {
                  styles: "\n  .block-interactivity-"
                    .concat(o, " {pointer-events: none;}\n  .allow-interactivity-")
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            v ? a.createElement(eh, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
          );
        }),
        ee.useMedium(r),
        er);
      var eA = a.forwardRef(function (e, t) {
        return a.createElement(en, X({}, e, { ref: t, sideCar: eD }));
      });
      eA.classNames = en.classNames;
      var ek = new WeakMap(),
        eL = new WeakMap(),
        eI = {},
        eT = 0,
        e_ = function (e) {
          return e && (e.host || e_(e.parentNode));
        },
        eM = function (e, t, n, r) {
          var o = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = e_(e);
              return n && t.contains(n)
                ? n
                : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          eI[n] || (eI[n] = new WeakMap());
          var i = eI[n],
            a = [],
            l = new Set(),
            u = new Set(o),
            c = function (e) {
              !e || l.has(e) || (l.add(e), c(e.parentNode));
            };
          o.forEach(c);
          var s = function (e) {
            !e ||
              u.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (l.has(e)) s(e);
                else
                  try {
                    var t = e.getAttribute(r),
                      o = null !== t && "false" !== t,
                      u = (ek.get(e) || 0) + 1,
                      c = (i.get(e) || 0) + 1;
                    (ek.set(e, u),
                      i.set(e, c),
                      a.push(e),
                      1 === u && o && eL.set(e, !0),
                      1 === c && e.setAttribute(n, "true"),
                      o || e.setAttribute(r, "true"));
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            s(t),
            l.clear(),
            eT++,
            function () {
              (a.forEach(function (e) {
                var t = ek.get(e) - 1,
                  o = i.get(e) - 1;
                (ek.set(e, t),
                  i.set(e, o),
                  t || (eL.has(e) || e.removeAttribute(r), eL.delete(e)),
                  o || e.removeAttribute(n));
              }),
                --eT ||
                  ((ek = new WeakMap()), (ek = new WeakMap()), (eL = new WeakMap()), (eI = {})));
            }
          );
        },
        eW = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))),
              eM(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        },
        eF = "Dialog",
        [eB, e$] = (function (e, t = []) {
          let n = [],
            r = () => {
              let t = n.map((e) => a.createContext(e));
              return function (n) {
                let r = n?.[e] || t;
                return a.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let o = a.createContext(r),
                  i = n.length;
                n = [...n, r];
                let l = (t) => {
                  let { scope: n, children: r, ...l } = t,
                    u = n?.[e]?.[i] || o,
                    s = a.useMemo(() => l, Object.values(l));
                  return (0, c.jsx)(u.Provider, { value: s, children: r });
                };
                return (
                  (l.displayName = t + "Provider"),
                  [
                    l,
                    function (n, l) {
                      let u = l?.[e]?.[i] || o,
                        c = a.useContext(u);
                      if (c) return c;
                      if (void 0 !== r) return r;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                  let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                  return function (e) {
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return a.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
                  };
                };
                return ((n.scopeName = t.scopeName), n);
              })(r, ...t),
            ]
          );
        })(eF),
        [eK, eV] = eB(eF),
        eZ = (e) => {
          let {
              __scopeDialog: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: i,
              modal: l = !0,
            } = e,
            u = a.useRef(null),
            f = a.useRef(null),
            [p, v] = (0, d.i)({ prop: r, defaultProp: null != o && o, onChange: i, caller: eF });
          return (0, c.jsx)(eK, {
            scope: t,
            triggerRef: u,
            contentRef: f,
            contentId: (0, s.B)(),
            titleId: (0, s.B)(),
            descriptionId: (0, s.B)(),
            open: p,
            onOpenChange: v,
            onOpenToggle: a.useCallback(() => v((e) => !e), [v]),
            modal: l,
            children: n,
          });
        };
      eZ.displayName = eF;
      var eY = "DialogTrigger",
        eX = a.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eV(eY, n),
            i = (0, u.s)(t, o.triggerRef);
          return (0, c.jsx)(V.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": tn(o.open),
            ...r,
            ref: i,
            onClick: (0, l.mK)(e.onClick, o.onOpenToggle),
          });
        });
      eX.displayName = eY;
      var ez = "DialogPortal",
        [eU, eH] = eB(ez, { forceMount: void 0 }),
        eq = (e) => {
          let { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
            i = eV(ez, t);
          return (0, c.jsx)(eU, {
            scope: t,
            forceMount: n,
            children: a.Children.map(r, (e) =>
              (0, c.jsx)(F.C, {
                present: n || i.open,
                children: (0, c.jsx)(W, { asChild: !0, container: o, children: e }),
              })
            ),
          });
        };
      eq.displayName = ez;
      var eG = "DialogOverlay",
        eJ = a.forwardRef((e, t) => {
          let n = eH(eG, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = eV(eG, e.__scopeDialog);
          return i.modal
            ? (0, c.jsx)(F.C, { present: r || i.open, children: (0, c.jsx)(e0, { ...o, ref: t }) })
            : null;
        });
      eJ.displayName = eG;
      var eQ = B("DialogOverlay.RemoveScroll"),
        e0 = a.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eV(eG, n);
          return (0, c.jsx)(eA, {
            as: eQ,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, c.jsx)(V.div, {
              "data-state": tn(o.open),
              ...r,
              ref: t,
              style: { pointerEvents: "auto", ...r.style },
            }),
          });
        }),
        e1 = "DialogContent",
        e2 = a.forwardRef((e, t) => {
          let n = eH(e1, e.__scopeDialog),
            { forceMount: r = n.forceMount, ...o } = e,
            i = eV(e1, e.__scopeDialog);
          return (0, c.jsx)(F.C, {
            present: r || i.open,
            children: i.modal ? (0, c.jsx)(e5, { ...o, ref: t }) : (0, c.jsx)(e6, { ...o, ref: t }),
          });
        });
      e2.displayName = e1;
      var e5 = a.forwardRef((e, t) => {
          let n = eV(e1, e.__scopeDialog),
            r = a.useRef(null),
            o = (0, u.s)(t, n.contentRef, r);
          return (
            a.useEffect(() => {
              let e = r.current;
              if (e) return eW(e);
            }, []),
            (0, c.jsx)(e4, {
              ...e,
              ref: o,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, l.mK)(e.onCloseAutoFocus, (e) => {
                var t;
                (e.preventDefault(), null == (t = n.triggerRef.current) || t.focus());
              }),
              onPointerDownOutside: (0, l.mK)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || n) && e.preventDefault();
              }),
              onFocusOutside: (0, l.mK)(e.onFocusOutside, (e) => e.preventDefault()),
            })
          );
        }),
        e6 = a.forwardRef((e, t) => {
          let n = eV(e1, e.__scopeDialog),
            r = a.useRef(!1),
            o = a.useRef(!1);
          return (0, c.jsx)(e4, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var i, a;
              (null == (i = e.onCloseAutoFocus) || i.call(e, t),
                t.defaultPrevented ||
                  (r.current || null == (a = n.triggerRef.current) || a.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (o.current = !1));
            },
            onInteractOutside: (t) => {
              var i, a;
              (null == (i = e.onInteractOutside) || i.call(e, t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  "pointerdown" === t.detail.originalEvent.type && (o.current = !0)));
              let l = t.target;
              ((null == (a = n.triggerRef.current) ? void 0 : a.contains(l)) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault());
            },
          });
        }),
        e4 = a.forwardRef((e, t) => {
          let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...l } = e,
            s = eV(e1, n),
            d = a.useRef(null),
            f = (0, u.s)(t, d);
          return (
            a.useEffect(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement("afterbegin", null != (e = n[0]) ? e : Y()),
                document.body.insertAdjacentElement("beforeend", null != (t = n[1]) ? t : Y()),
                Z++,
                () => {
                  (1 === Z &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    Z--);
                }
              );
            }, []),
            (0, c.jsxs)(c.Fragment, {
              children: [
                (0, c.jsx)(O, {
                  asChild: !0,
                  loop: !0,
                  trapped: r,
                  onMountAutoFocus: o,
                  onUnmountAutoFocus: i,
                  children: (0, c.jsx)(b, {
                    role: "dialog",
                    id: s.contentId,
                    "aria-describedby": s.descriptionId,
                    "aria-labelledby": s.titleId,
                    "data-state": tn(s.open),
                    ...l,
                    ref: f,
                    onDismiss: () => s.onOpenChange(!1),
                  }),
                }),
                (0, c.jsxs)(c.Fragment, {
                  children: [
                    (0, c.jsx)(ta, { titleId: s.titleId }),
                    (0, c.jsx)(tl, { contentRef: d, descriptionId: s.descriptionId }),
                  ],
                }),
              ],
            })
          );
        }),
        e8 = "DialogTitle",
        e7 = a.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eV(e8, n);
          return (0, c.jsx)(V.h2, { id: o.titleId, ...r, ref: t });
        });
      e7.displayName = e8;
      var e9 = "DialogDescription",
        e3 = a.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eV(e9, n);
          return (0, c.jsx)(V.p, { id: o.descriptionId, ...r, ref: t });
        });
      e3.displayName = e9;
      var te = "DialogClose",
        tt = a.forwardRef((e, t) => {
          let { __scopeDialog: n, ...r } = e,
            o = eV(te, n);
          return (0, c.jsx)(V.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, l.mK)(e.onClick, () => o.onOpenChange(!1)),
          });
        });
      function tn(e) {
        return e ? "open" : "closed";
      }
      tt.displayName = te;
      var tr = "DialogTitleWarning",
        [to, ti] = (function (e, t) {
          let n = a.createContext(t),
            r = (e) => {
              let { children: t, ...r } = e,
                o = a.useMemo(() => r, Object.values(r));
              return (0, c.jsx)(n.Provider, { value: o, children: t });
            };
          return (
            (r.displayName = e + "Provider"),
            [
              r,
              function (r) {
                let o = a.useContext(n);
                if (o) return o;
                if (void 0 !== t) return t;
                throw Error(`\`${r}\` must be used within \`${e}\``);
              },
            ]
          );
        })(tr, { contentName: e1, titleName: e8, docsSlug: "dialog" }),
        ta = (e) => {
          let { titleId: t } = e,
            n = ti(tr),
            r = "`"
              .concat(n.contentName, "` requires a `")
              .concat(
                n.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `"
              )
              .concat(
                n.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/"
              )
              .concat(n.docsSlug);
          return (
            a.useEffect(() => {
              t && (document.getElementById(t) || console.error(r));
            }, [r, t]),
            null
          );
        },
        tl = (e) => {
          let { contentRef: t, descriptionId: n } = e,
            r = ti("DialogDescriptionWarning"),
            o = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
              r.contentName,
              "}."
            );
          return (
            a.useEffect(() => {
              var e;
              let r = null == (e = t.current) ? void 0 : e.getAttribute("aria-describedby");
              n && r && (document.getElementById(n) || console.warn(o));
            }, [o, t, n]),
            null
          );
        },
        tu = eZ,
        tc = eX,
        ts = eq,
        td = eJ,
        tf = e2,
        tp = e7,
        tv = e3,
        tm = tt;
    },
    65229: (e, t, n) => {
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
  },
]);
