(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [202],
  {
    403: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("megaphone", [
        [
          "path",
          {
            d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
            key: "q8bfy3",
          },
        ],
        [
          "path",
          { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14", key: "1853fq" },
        ],
        ["path", { d: "M8 6v8", key: "15ugcq" }],
      ]);
    },
    669: (e, t, n) => {
      let r = n(46342).getSymbolSize;
      ((t.getRowColCoords = function (e) {
        if (1 === e) return [];
        let t = Math.floor(e / 7) + 2,
          n = r(e),
          i = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
          a = [n - 7];
        for (let e = 1; e < t - 1; e++) a[e] = a[e - 1] - i;
        return (a.push(6), a.reverse());
      }),
        (t.getPositions = function (e) {
          let n = [],
            r = t.getRowColCoords(e),
            i = r.length;
          for (let e = 0; e < i; e++)
            for (let t = 0; t < i; t++)
              (0 !== e || 0 !== t) &&
                (0 !== e || t !== i - 1) &&
                (e !== i - 1 || 0 !== t) &&
                n.push([r[e], r[t]]);
          return n;
        }));
    },
    1524: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("trending-up", [
        ["path", { d: "M16 7h6v6", key: "box55l" }],
        ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
      ]);
    },
    1966: (e, t, n) => {
      "use strict";
      n.d(t, { w: () => r });
      let r = "standard:disconnect";
    },
    3468: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      var r = n(12115),
        i = n(95155);
      function a(e, t = []) {
        let n = [],
          o = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let i = n?.[e] || t;
              return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: i } }), [n, i]);
            };
          };
        return (
          (o.scopeName = e),
          [
            function (t, a) {
              let o = r.createContext(a);
              o.displayName = t + "Context";
              let s = n.length;
              n = [...n, a];
              let l = (t) => {
                let { scope: n, children: a, ...l } = t,
                  c = n?.[e]?.[s] || o,
                  u = r.useMemo(() => l, Object.values(l));
                return (0, i.jsx)(c.Provider, { value: u, children: a });
              };
              return (
                (l.displayName = t + "Provider"),
                [
                  l,
                  function (n, i) {
                    let l = i?.[e]?.[s] || o,
                      c = r.useContext(l);
                    if (c) return c;
                    if (void 0 !== a) return a;
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
                  let i = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let i = n(e)[`__scope${r}`];
                    return { ...t, ...i };
                  }, {});
                  return r.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
                };
              };
              return ((n.scopeName = t.scopeName), n);
            })(o, ...t),
          ]
        );
      }
    },
    4402: (e, t, n) => {
      "use strict";
      n.d(t, { d: () => U });
      var r,
        i,
        a,
        o,
        s,
        l,
        c,
        u,
        d,
        h,
        f,
        g,
        w,
        p,
        y,
        m = n(45669),
        M = n(51470),
        v = n(36452),
        E = n(51901),
        N = n(25223),
        L = function (e, t, n, r) {
          if ("a" === n && !r) throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        },
        b = function (e, t, n, r, i) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !i) throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return ("a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n);
        };
      class I extends Event {
        get detail() {
          return L(this, r, "f");
        }
        get type() {
          return "wallet-standard:register-wallet";
        }
        constructor(e) {
          (super("wallet-standard:register-wallet", { bubbles: !1, cancelable: !1, composed: !1 }),
            r.set(this, void 0),
            b(this, r, e, "f"));
        }
        preventDefault() {
          throw Error("preventDefault cannot be called");
        }
        stopImmediatePropagation() {
          throw Error("stopImmediatePropagation cannot be called");
        }
        stopPropagation() {
          throw Error("stopPropagation cannot be called");
        }
      }
      r = new WeakMap();
      var j = n(46370),
        A = n(20869),
        S = n(42452),
        T = n(46103),
        k = n(75170),
        x = n(1966),
        D = n(77745),
        z = function (e, t, n, r) {
          if ("a" === n && !r) throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        },
        O = function (e, t, n, r, i) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !i) throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return ("a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n);
        };
      class C {
        constructor() {
          (i.add(this),
            a.set(this, {}),
            o.set(this, "1.0.0"),
            s.set(this, "MetaMask"),
            l.set(
              this,
              "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMxIiB2aWV3Qm94PSIwIDAgMzEgMzEiIHdpZHRoPSIzMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjIwLjI1IiB4Mj0iMjYuNTcxIiB5MT0iMjcuMTczIiB5Mj0iMTkuODU4Ij48c3RvcCBvZmZzZXQ9Ii4wOCIgc3RvcC1jb2xvcj0iIzk5NDVmZiIvPjxzdG9wIG9mZnNldD0iLjMiIHN0b3AtY29sb3I9IiM4NzUyZjMiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjNTQ5N2Q1Ii8+PHN0b3Agb2Zmc2V0PSIuNiIgc3RvcC1jb2xvcj0iIzQzYjRjYSIvPjxzdG9wIG9mZnNldD0iLjcyIiBzdG9wLWNvbG9yPSIjMjhlMGI5Ii8+PHN0b3Agb2Zmc2V0PSIuOTciIHN0b3AtY29sb3I9IiMxOWZiOWIiLz48L2xpbmVhckdyYWRpZW50PjxnIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iLjA5NCI+PHBhdGggZD0ibTI2LjEwOSAzLjY0My05LjM2OSA2Ljk1OSAxLjczMy00LjEwNSA3LjYzNy0yLjg1M3oiIGZpbGw9IiNlMjc2MWIiIHN0cm9rZT0iI2UyNzYxYiIvPjxnIGZpbGw9IiNlNDc2MWIiIHN0cm9rZT0iI2U0NzYxYiI+PHBhdGggZD0ibTQuNDgxIDMuNjQzIDkuMjk0IDcuMDI0LTEuNjQ4LTQuMTcxem0xOC4yNTggMTYuMTMtMi40OTUgMy44MjMgNS4zMzkgMS40NjkgMS41MzUtNS4yMDctNC4zNzgtLjA4NXptLTE5LjI0Ny4wODUgMS41MjUgNS4yMDcgNS4zMzktMS40NjktMi40OTUtMy44MjN6Ii8+PHBhdGggZD0ibTEwLjA1NSAxMy4zMTMtMS40ODggMi4yNTEgNS4zMDEuMjM1LS4xODgtNS42OTd6bTEwLjQ4IDAtMy42NzItMy4yNzctLjEyMiA1Ljc2MyA1LjI5Mi0uMjM1LTEuNDk3LTIuMjUxem0tMTAuMTc4IDEwLjI4MyAzLjE4My0xLjU1NC0yLjc0OS0yLjE0Ny0uNDMzIDMuNzAxem02LjY5NS0xLjU1NCAzLjE5MiAxLjU1NC0uNDQzLTMuNzAxeiIvPjwvZz48cGF0aCBkPSJtMjAuMjQ0IDIzLjU5Ni0zLjE5Mi0xLjU1NC4yNTQgMi4wODEtLjAyOC44NzZ6bS05Ljg4NyAwIDIuOTY2IDEuNDAzLS4wMTktLjg3Ni4yMzUtMi4wODEtMy4xODMgMS41NTR6IiBmaWxsPSIjZDdjMWIzIiBzdHJva2U9IiNkN2MxYjMiLz48cGF0aCBkPSJtMTMuMzY5IDE4LjUyMS0yLjY1NS0uNzgxIDEuODc0LS44NTd6bTMuODUxIDAgLjc4MS0xLjYzOCAxLjg4My44NTctMi42NjUuNzgxeiIgZmlsbD0iIzIzMzQ0NyIgc3Ryb2tlPSIjMjMzNDQ3Ii8+PHBhdGggZD0ibTEwLjM1NyAyMy41OTYuNDUyLTMuODIzLTIuOTQ3LjA4NXptOS40MzUtMy44MjMuNDUyIDMuODIzIDIuNDk1LTMuNzM4em0yLjI0MS00LjIwOS01LjI5Mi4yMzUuNDkgMi43MjEuNzgyLTEuNjM4IDEuODgzLjg1N3ptLTExLjMxOCAyLjE3NSAxLjg4My0uODU3Ljc3MiAxLjYzOC40OTktMi43MjEtNS4zMDEtLjIzNXoiIGZpbGw9IiNjZDYxMTYiIHN0cm9rZT0iI2NkNjExNiIvPjxwYXRoIGQ9Im04LjU2NyAxNS41NjQgMi4yMjIgNC4zMzEtLjA3NS0yLjE1NnptMTEuMzI4IDIuMTc1LS4wOTQgMi4xNTYgMi4yMzItNC4zMzEtMi4xMzcgMi4xNzV6bS02LjAyNi0xLjk0LS40OTkgMi43MjEuNjIxIDMuMjExLjE0MS00LjIyOC0uMjY0LTEuNzA0em0yLjg3MiAwLS4yNTQgMS42OTUuMTEzIDQuMjM3LjYzMS0zLjIxMXoiIGZpbGw9IiNlNDc1MWYiIHN0cm9rZT0iI2U0NzUxZiIvPjxwYXRoIGQ9Im0xNy4yMyAxOC41Mi0uNjMxIDMuMjExLjQ1Mi4zMTEgMi43NS0yLjE0Ny4wOTQtMi4xNTZ6bS02LjUxNi0uNzgxLjA3NSAyLjE1NiAyLjc1IDIuMTQ3LjQ1Mi0uMzExLS42MjItMy4yMTF6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48cGF0aCBkPSJtMTcuMjc3IDI0Ljk5OS4wMjgtLjg3Ni0uMjM1LS4yMDdoLTMuNTVsLS4yMTcuMjA3LjAxOS44NzYtMi45NjYtMS40MDMgMS4wMzYuODQ4IDIuMSAxLjQ1OWgzLjYwNmwyLjEwOS0xLjQ1OSAxLjAzNi0uODQ4eiIgZmlsbD0iI2MwYWQ5ZSIgc3Ryb2tlPSIjYzBhZDllIi8+PHBhdGggZD0ibTE3LjA1MSAyMi4wNDItLjQ1Mi0uMzExaC0yLjYwOGwtLjQ1Mi4zMTEtLjIzNSAyLjA4MS4yMTctLjIwN2gzLjU1bC4yMzUuMjA3LS4yNTQtMi4wODF6IiBmaWxsPSIjMTYxNjE2IiBzdHJva2U9IiMxNjE2MTYiLz48cGF0aCBkPSJtMjYuNTA1IDExLjA1My44LTMuODQyLTEuMTk2LTMuNTY5LTkuMDU4IDYuNzIzIDMuNDg0IDIuOTQ3IDQuOTI1IDEuNDQxIDEuMDkyLTEuMjcxLS40NzEtLjMzOS43NTMtLjY4Ny0uNTg0LS40NTIuNzUzLS41NzQtLjQ5OS0uMzc3em0tMjMuMjExLTMuODQxLjggMy44NDItLjUwOC4zNzcuNzUzLjU3NC0uNTc0LjQ1Mi43NTMuNjg3LS40NzEuMzM5IDEuMDgzIDEuMjcxIDQuOTI1LTEuNDQxIDMuNDg0LTIuOTQ3LTkuMDU5LTYuNzIzeiIgZmlsbD0iIzc2M2QxNiIgc3Ryb2tlPSIjNzYzZDE2Ii8+PHBhdGggZD0ibTI1LjQ2IDE0Ljc1NC00LjkyNS0xLjQ0MSAxLjQ5NyAyLjI1MS0yLjIzMiA0LjMzMSAyLjkzOC0uMDM4aDQuMzc4bC0xLjY1Ny01LjEwNHptLTE1LjQwNS0xLjQ0MS00LjkyNSAxLjQ0MS0xLjYzOCA1LjEwNGg0LjM2OWwyLjkyOC4wMzgtMi4yMjItNC4zMzEgMS40ODgtMi4yNTF6bTYuNjg1IDIuNDg2LjMxMS01LjQzMyAxLjQzMS0zLjg3aC02LjM1NmwxLjQxMyAzLjg3LjMyOSA1LjQzMy4xMTMgMS43MTQuMDA5IDQuMjE5aDIuNjFsLjAxOS00LjIxOS4xMjItMS43MTR6IiBmaWxsPSIjZjY4NTFiIiBzdHJva2U9IiNmNjg1MWIiLz48L2c+PGNpcmNsZSBjeD0iMjMuNSIgY3k9IjIzLjUiIGZpbGw9IiMwMDAiIHI9IjYuNSIvPjxwYXRoIGQ9Im0yNy40NzMgMjUuNTQ1LTEuMzEgMS4zNjhjLS4wMjkuMDMtLjA2My4wNTMtLjEwMS4wN2EuMzEuMzEgMCAwIDEgLS4xMjEuMDI0aC02LjIwOWMtLjAzIDAtLjA1OS0uMDA4LS4wODMtLjAyNGEuMTUuMTUgMCAwIDEgLS4wNTYtLjA2NWMtLjAxMi0uMDI2LS4wMTUtLjA1Ni0uMDEtLjA4NHMuMDE4LS4wNTUuMDM5LS4wNzZsMS4zMTEtMS4zNjhjLjAyOC0uMDMuMDYzLS4wNTMuMTAxLS4wNjlhLjMxLjMxIDAgMCAxIC4xMjEtLjAyNWg2LjIwOGMuMDMgMCAuMDU5LjAwOC4wODMuMDI0YS4xNS4xNSAwIDAgMSAuMDU2LjA2NWMuMDEyLjAyNi4wMTUuMDU2LjAxLjA4NHMtLjAxOC4wNTUtLjAzOS4wNzZ6bS0xLjMxLTIuNzU2Yy0uMDI5LS4wMy0uMDYzLS4wNTMtLjEwMS0uMDdhLjMxLjMxIDAgMCAwIC0uMTIxLS4wMjRoLTYuMjA5Yy0uMDMgMC0uMDU5LjAwOC0uMDgzLjAyNHMtLjA0NC4wMzgtLjA1Ni4wNjUtLjAxNS4wNTYtLjAxLjA4NC4wMTguMDU1LjAzOS4wNzZsMS4zMTEgMS4zNjhjLjAyOC4wMy4wNjMuMDUzLjEwMS4wNjlhLjMxLjMxIDAgMCAwIC4xMjEuMDI1aDYuMjA4Yy4wMyAwIC4wNTktLjAwOC4wODMtLjAyNGEuMTUuMTUgMCAwIDAgLjA1Ni0uMDY1Yy4wMTItLjAyNi4wMTUtLjA1Ni4wMS0uMDg0cy0uMDE4LS4wNTUtLjAzOS0uMDc2em0tNi40MzEtLjk4M2g2LjIwOWEuMzEuMzEgMCAwIDAgLjEyMS0uMDI0Yy4wMzgtLjAxNi4wNzMtLjA0LjEwMS0uMDdsMS4zMS0xLjM2OGMuMDItLjAyMS4wMzQtLjA0Ny4wMzktLjA3NnMuMDAxLS4wNTgtLjAxLS4wODRhLjE1LjE1IDAgMCAwIC0uMDU2LS4wNjVjLS4wMjUtLjAxNi0uMDU0LS4wMjQtLjA4My0uMDI0aC02LjIwOGEuMzEuMzEgMCAwIDAgLS4xMjEuMDI1Yy0uMDM4LjAxNi0uMDcyLjA0LS4xMDEuMDY5bC0xLjMxIDEuMzY4Yy0uMDIuMDIxLS4wMzQuMDQ3LS4wMzkuMDc2cy0uMDAxLjA1OC4wMS4wODQuMDMxLjA0OS4wNTYuMDY1LjA1NC4wMjQuMDgzLjAyNHoiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4="
            ),
            c.set(this, null),
            u.set(
              this,
              (e, t) => (
                z(this, a, "f")[e]?.push(t) || (z(this, a, "f")[e] = [t]),
                () => z(this, i, "m", h).call(this, e, t)
              )
            ),
            f.set(this, async () => {
              if (!z(this, c, "f")) {
                let e;
                try {
                  e = (await n.e(271).then(n.bind(n, 46271))).default;
                } catch (e) {
                  throw Error("Unable to load Solflare MetaMask SDK");
                }
                (O(this, c, new e(), "f"),
                  z(this, c, "f").on("standard_change", (e) =>
                    z(this, i, "m", d).call(this, "change", e)
                  ));
              }
              return (
                this.accounts.length || (await z(this, c, "f").connect()),
                { accounts: this.accounts }
              );
            }),
            g.set(this, async () => {
              z(this, c, "f") && (await z(this, c, "f").disconnect());
            }),
            w.set(this, async (...e) => {
              if (!z(this, c, "f")) throw new v.kW();
              return await z(this, c, "f").standardSignAndSendTransaction(...e);
            }),
            p.set(this, async (...e) => {
              if (!z(this, c, "f")) throw new v.kW();
              return await z(this, c, "f").standardSignTransaction(...e);
            }),
            y.set(this, async (...e) => {
              if (!z(this, c, "f")) throw new v.kW();
              return await z(this, c, "f").standardSignMessage(...e);
            }));
        }
        get version() {
          return z(this, o, "f");
        }
        get name() {
          return z(this, s, "f");
        }
        get icon() {
          return z(this, l, "f");
        }
        get chains() {
          return [j.CE, j.sE, j.re];
        }
        get features() {
          return {
            [k.u]: { version: "1.0.0", connect: z(this, f, "f") },
            [x.w]: { version: "1.0.0", disconnect: z(this, g, "f") },
            [D.j]: { version: "1.0.0", on: z(this, u, "f") },
            [A.R]: {
              version: "1.0.0",
              supportedTransactionVersions: ["legacy", 0],
              signAndSendTransaction: z(this, w, "f"),
            },
            [S.q]: {
              version: "1.0.0",
              supportedTransactionVersions: ["legacy", 0],
              signTransaction: z(this, p, "f"),
            },
            [T.F]: { version: "1.0.0", signMessage: z(this, y, "f") },
          };
        }
        get accounts() {
          return z(this, c, "f") ? z(this, c, "f").standardAccounts : [];
        }
      }
      ((a = new WeakMap()),
        (o = new WeakMap()),
        (s = new WeakMap()),
        (l = new WeakMap()),
        (c = new WeakMap()),
        (u = new WeakMap()),
        (f = new WeakMap()),
        (g = new WeakMap()),
        (w = new WeakMap()),
        (p = new WeakMap()),
        (y = new WeakMap()),
        (i = new WeakSet()),
        (d = function (e, ...t) {
          z(this, a, "f")[e]?.forEach((e) => e.apply(null, t));
        }),
        (h = function (e, t) {
          z(this, a, "f")[e] = z(this, a, "f")[e]?.filter((e) => t !== e);
        }));
      let _ = !1;
      async function R() {
        let e = "solflare-detect-metamask";
        function t() {
          window.postMessage(
            {
              target: "metamask-contentscript",
              data: {
                name: "metamask-provider",
                data: { id: e, jsonrpc: "2.0", method: "wallet_getSnaps" },
              },
            },
            window.location.origin
          );
        }
        function n(r) {
          let i = r.data;
          i?.target === "metamask-inpage" &&
            i.data?.name === "metamask-provider" &&
            (i.data.data?.id === e
              ? (window.removeEventListener("message", n),
                i.data.data.error ||
                  (function () {
                    if (!_) {
                      var e = new C();
                      let t = ({ register: t }) => t(e);
                      try {
                        window.dispatchEvent(new I(t));
                      } catch (e) {
                        console.error(
                          "wallet-standard:register-wallet event could not be dispatched\n",
                          e
                        );
                      }
                      try {
                        window.addEventListener("wallet-standard:app-ready", ({ detail: e }) =>
                          t(e)
                        );
                      } catch (e) {
                        console.error(
                          "wallet-standard:app-ready event listener could not be added\n",
                          e
                        );
                      }
                      _ = !0;
                    }
                  })())
              : t());
        }
        (window.addEventListener("message", n),
          window.setTimeout(() => window.removeEventListener("message", n), 5e3),
          t());
      }
      class U extends m.DE {
        constructor(e = {}) {
          (super(),
            (this.name = "Solflare"),
            (this.url = "https://solflare.com"),
            (this.icon =
              "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJTIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwMjA1MGE7c3Ryb2tlOiNmZmVmNDY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOi41cHg7fS5jbHMtMntmaWxsOiNmZmVmNDY7fTwvc3R5bGU+PC9kZWZzPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiByeD0iMTIiIHJ5PSIxMiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI0LjIzLDI2LjQybDIuNDYtMi4zOCw0LjU5LDEuNWMzLjAxLDEsNC41MSwyLjg0LDQuNTEsNS40MywwLDEuOTYtLjc1LDMuMjYtMi4yNSw0LjkzbC0uNDYuNS4xNy0xLjE3Yy42Ny00LjI2LS41OC02LjA5LTQuNzItNy40M2wtNC4zLTEuMzhoMFpNMTguMDUsMTEuODVsMTIuNTIsNC4xNy0yLjcxLDIuNTktNi41MS0yLjE3Yy0yLjI1LS43NS0zLjAxLTEuOTYtMy4zLTQuNTF2LS4wOGgwWk0xNy4zLDMzLjA2bDIuODQtMi43MSw1LjM0LDEuNzVjMi44LjkyLDMuNzYsMi4xMywzLjQ2LDUuMThsLTExLjY1LTQuMjJoMFpNMTMuNzEsMjAuOTVjMC0uNzkuNDItMS41NCwxLjEzLTIuMTcuNzUsMS4wOSwyLjA1LDIuMDUsNC4wOSwyLjcxbDQuNDIsMS40Ni0yLjQ2LDIuMzgtNC4zNC0xLjQyYy0yLS42Ny0yLjg0LTEuNjctMi44NC0yLjk2TTI2LjgyLDQyLjg3YzkuMTgtNi4wOSwxNC4xMS0xMC4yMywxNC4xMS0xNS4zMiwwLTMuMzgtMi01LjI2LTYuNDMtNi43MmwtMy4zNC0xLjEzLDkuMTQtOC43Ny0xLjg0LTEuOTYtMi43MSwyLjM4LTEyLjgxLTQuMjJjLTMuOTcsMS4yOS04Ljk3LDUuMDktOC45Nyw4Ljg5LDAsLjQyLjA0LjgzLjE3LDEuMjktMy4zLDEuODgtNC42MywzLjYzLTQuNjMsNS44LDAsMi4wNSwxLjA5LDQuMDksNC41NSw1LjIybDIuNzUuOTItOS41Miw5LjE0LDEuODQsMS45NiwyLjk2LTIuNzEsMTQuNzMsNS4yMmgwWiIvPjwvc3ZnPg=="),
            (this.supportedTransactionVersions = new Set(["legacy", 0])),
            (this._readyState =
              "undefined" == typeof window || "undefined" == typeof document
                ? M.Ok.Unsupported
                : M.Ok.Loadable),
            (this._disconnected = () => {
              let e = this._wallet;
              e &&
                (e.off("disconnect", this._disconnected),
                (this._wallet = null),
                (this._publicKey = null),
                this.emit("error", new v.PQ()),
                this.emit("disconnect"));
            }),
            (this._accountChanged = (e) => {
              if (!e) return;
              let t = this._publicKey;
              if (t) {
                try {
                  e = new N.J3(e.toBytes());
                } catch (e) {
                  this.emit("error", new v.Kd(e?.message, e));
                  return;
                }
                t.equals(e) || ((this._publicKey = e), this.emit("connect", e));
              }
            }),
            (this._connecting = !1),
            (this._publicKey = null),
            (this._wallet = null),
            (this._config = e),
            this._readyState !== M.Ok.Unsupported &&
              ((0, M.qG)(
                () =>
                  (!!window.solflare?.isSolflare || !!window.SolflareApp) &&
                  ((this._readyState = M.Ok.Installed),
                  this.emit("readyStateChange", this._readyState),
                  !0)
              ),
              R()));
        }
        get publicKey() {
          return this._publicKey;
        }
        get connecting() {
          return this._connecting;
        }
        get connected() {
          return !!this._wallet?.connected;
        }
        get readyState() {
          return this._readyState;
        }
        async autoConnect() {
          (this.readyState === M.Ok.Loadable && (0, M.Br)()) || (await this.connect());
        }
        async connect() {
          try {
            let e, t, r;
            if (this.connected || this.connecting) return;
            if (this._readyState !== M.Ok.Loadable && this._readyState !== M.Ok.Installed)
              throw new v.AE();
            if (this.readyState === M.Ok.Loadable && (0, M.Br)()) {
              let e = encodeURIComponent(window.location.href),
                t = encodeURIComponent(window.location.origin);
              window.location.href = `https://solflare.com/ul/v1/browse/${e}?ref=${t}`;
              return;
            }
            try {
              e = (await n.e(153).then(n.bind(n, 81153))).default;
            } catch (e) {
              throw new v.Sz(e?.message, e);
            }
            try {
              t = new e({ network: this._config.network });
            } catch (e) {
              throw new v.Ez(e?.message, e);
            }
            if (((this._connecting = !0), !t.connected))
              try {
                await t.connect();
              } catch (e) {
                throw new v.Y6(e?.message, e);
              }
            if (!t.publicKey) throw new v.Y6();
            try {
              r = new N.J3(t.publicKey.toBytes());
            } catch (e) {
              throw new v.Kd(e?.message, e);
            }
            (t.on("disconnect", this._disconnected),
              t.on("accountChanged", this._accountChanged),
              (this._wallet = t),
              (this._publicKey = r),
              this.emit("connect", r));
          } catch (e) {
            throw (this.emit("error", e), e);
          } finally {
            this._connecting = !1;
          }
        }
        async disconnect() {
          let e = this._wallet;
          if (e) {
            (e.off("disconnect", this._disconnected),
              e.off("accountChanged", this._accountChanged),
              (this._wallet = null),
              (this._publicKey = null));
            try {
              await e.disconnect();
            } catch (e) {
              this.emit("error", new v.Y8(e?.message, e));
            }
          }
          this.emit("disconnect");
        }
        async sendTransaction(e, t, n = {}) {
          try {
            let r = this._wallet;
            if (!r) throw new v.kW();
            try {
              let { signers: i, ...a } = n;
              return (
                (0, E.Y)(e)
                  ? i?.length && e.sign(i)
                  : ((e = await this.prepareTransaction(e, t, a)),
                    i?.length && e.partialSign(...i)),
                (a.preflightCommitment = a.preflightCommitment || t.commitment),
                await r.signAndSendTransaction(e, a)
              );
            } catch (e) {
              if (e instanceof v.m7) throw e;
              throw new v.UF(e?.message, e);
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signTransaction(e) {
          try {
            let t = this._wallet;
            if (!t) throw new v.kW();
            try {
              return (await t.signTransaction(e)) || e;
            } catch (e) {
              throw new v.z4(e?.message, e);
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signAllTransactions(e) {
          try {
            let t = this._wallet;
            if (!t) throw new v.kW();
            try {
              return (await t.signAllTransactions(e)) || e;
            } catch (e) {
              throw new v.z4(e?.message, e);
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signMessage(e) {
          try {
            let t = this._wallet;
            if (!t) throw new v.kW();
            try {
              return await t.signMessage(e, "utf8");
            } catch (e) {
              throw new v.K3(e?.message, e);
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
      }
    },
    5379: (e, t, n) => {
      "use strict";
      n.d(t, { D: () => o });
      var r = n(12115),
        i = r.createContext(void 0),
        a = { setTheme: (e) => {}, themes: [] },
        o = () => {
          var e;
          return null != (e = r.useContext(i)) ? e : a;
        };
    },
    9540: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("menu", [
        ["path", { d: "M4 5h16", key: "1tepv9" }],
        ["path", { d: "M4 12h16", key: "1lakjw" }],
        ["path", { d: "M4 19h16", key: "1djgab" }],
      ]);
    },
    10429: (e, t) => {
      let n = new Uint8Array(512),
        r = new Uint8Array(256);
      (!(function () {
        let e = 1;
        for (let t = 0; t < 255; t++) ((n[t] = e), (r[e] = t), 256 & (e <<= 1) && (e ^= 285));
        for (let e = 255; e < 512; e++) n[e] = n[e - 255];
      })(),
        (t.log = function (e) {
          if (e < 1) throw Error("log(" + e + ")");
          return r[e];
        }),
        (t.exp = function (e) {
          return n[e];
        }),
        (t.mul = function (e, t) {
          return 0 === e || 0 === t ? 0 : n[r[e] + r[t]];
        }));
    },
    14806: (e, t, n) => {
      "use strict";
      e.exports = n(30125);
    },
    15870: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("settings", [
        [
          "path",
          {
            d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
            key: "1i5ecw",
          },
        ],
        ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
      ]);
    },
    17045: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "errorOnce", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let n = (e) => {};
    },
    19542: (e, t) => {
      t.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      let n = { N1: 3, N2: 3, N3: 40, N4: 10 };
      ((t.isValid = function (e) {
        return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7;
      }),
        (t.from = function (e) {
          return t.isValid(e) ? parseInt(e, 10) : void 0;
        }),
        (t.getPenaltyN1 = function (e) {
          let t = e.size,
            r = 0,
            i = 0,
            a = 0,
            o = null,
            s = null;
          for (let l = 0; l < t; l++) {
            ((i = a = 0), (o = s = null));
            for (let c = 0; c < t; c++) {
              let t = e.get(l, c);
              (t === o ? i++ : (i >= 5 && (r += n.N1 + (i - 5)), (o = t), (i = 1)),
                (t = e.get(c, l)) === s
                  ? a++
                  : (a >= 5 && (r += n.N1 + (a - 5)), (s = t), (a = 1)));
            }
            (i >= 5 && (r += n.N1 + (i - 5)), a >= 5 && (r += n.N1 + (a - 5)));
          }
          return r;
        }),
        (t.getPenaltyN2 = function (e) {
          let t = e.size,
            r = 0;
          for (let n = 0; n < t - 1; n++)
            for (let i = 0; i < t - 1; i++) {
              let t = e.get(n, i) + e.get(n, i + 1) + e.get(n + 1, i) + e.get(n + 1, i + 1);
              (4 === t || 0 === t) && r++;
            }
          return r * n.N2;
        }),
        (t.getPenaltyN3 = function (e) {
          let t = e.size,
            r = 0,
            i = 0,
            a = 0;
          for (let n = 0; n < t; n++) {
            i = a = 0;
            for (let o = 0; o < t; o++)
              ((i = ((i << 1) & 2047) | e.get(n, o)),
                o >= 10 && (1488 === i || 93 === i) && r++,
                (a = ((a << 1) & 2047) | e.get(o, n)),
                o >= 10 && (1488 === a || 93 === a) && r++);
          }
          return r * n.N3;
        }),
        (t.getPenaltyN4 = function (e) {
          let t = 0,
            r = e.data.length;
          for (let n = 0; n < r; n++) t += e.data[n];
          return Math.abs(Math.ceil((100 * t) / r / 5) - 10) * n.N4;
        }),
        (t.applyMask = function (e, n) {
          let r = n.size;
          for (let i = 0; i < r; i++)
            for (let a = 0; a < r; a++)
              n.isReserved(a, i) ||
                n.xor(
                  a,
                  i,
                  (function (e, n, r) {
                    switch (e) {
                      case t.Patterns.PATTERN000:
                        return (n + r) % 2 == 0;
                      case t.Patterns.PATTERN001:
                        return n % 2 == 0;
                      case t.Patterns.PATTERN010:
                        return r % 3 == 0;
                      case t.Patterns.PATTERN011:
                        return (n + r) % 3 == 0;
                      case t.Patterns.PATTERN100:
                        return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                      case t.Patterns.PATTERN101:
                        return ((n * r) % 2) + ((n * r) % 3) == 0;
                      case t.Patterns.PATTERN110:
                        return (((n * r) % 2) + ((n * r) % 3)) % 2 == 0;
                      case t.Patterns.PATTERN111:
                        return (((n * r) % 3) + ((n + r) % 2)) % 2 == 0;
                      default:
                        throw Error("bad maskPattern:" + e);
                    }
                  })(e, a, i)
                );
        }),
        (t.getBestMask = function (e, n) {
          let r = Object.keys(t.Patterns).length,
            i = 0,
            a = 1 / 0;
          for (let o = 0; o < r; o++) {
            (n(o), t.applyMask(o, e));
            let r = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
            (t.applyMask(o, e), r < a && ((a = r), (i = o)));
          }
          return i;
        }));
    },
    20869: (e, t, n) => {
      "use strict";
      n.d(t, { R: () => r });
      let r = "solana:signAndSendTransaction";
    },
    23308: (e, t, n) => {
      let r = n(52686);
      function i(e, t) {
        let n = e.a / 255,
          r = t + '="' + e.hex + '"';
        return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r;
      }
      function a(e, t, n) {
        let r = e + t;
        return (void 0 !== n && (r += " " + n), r);
      }
      t.render = function (e, t, n) {
        let o = r.getOptions(t),
          s = e.modules.size,
          l = e.modules.data,
          c = s + 2 * o.margin,
          u = o.color.light.a
            ? "<path " + i(o.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>'
            : "",
          d =
            "<path " +
            i(o.color.dark, "stroke") +
            ' d="' +
            (function (e, t, n) {
              let r = "",
                i = 0,
                o = !1,
                s = 0;
              for (let l = 0; l < e.length; l++) {
                let c = Math.floor(l % t),
                  u = Math.floor(l / t);
                (c || o || (o = !0),
                  e[l]
                    ? (s++,
                      (l > 0 && c > 0 && e[l - 1]) ||
                        ((r += o ? a("M", c + n, 0.5 + u + n) : a("m", i, 0)), (i = 0), (o = !1)),
                      (c + 1 < t && e[l + 1]) || ((r += a("h", s)), (s = 0)))
                    : i++);
              }
              return r;
            })(l, s, o.margin) +
            '"/>',
          h =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") +
            ('viewBox="0 0 ' + c + " ") +
            c +
            '" shape-rendering="crispEdges">' +
            u +
            d +
            "</svg>\n";
        return ("function" == typeof n && n(null, h), h);
      };
    },
    23327: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("info", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M12 16v-4", key: "1dtifu" }],
        ["path", { d: "M12 8h.01", key: "e9boi3" }],
      ]);
    },
    24967: (e, t) => {
      ((t.L = { bit: 1 }),
        (t.M = { bit: 0 }),
        (t.Q = { bit: 3 }),
        (t.H = { bit: 2 }),
        (t.isValid = function (e) {
          return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4;
        }),
        (t.from = function (e, n) {
          if (t.isValid(e)) return e;
          try {
            if ("string" != typeof e) throw Error("Param is not a string");
            switch (e.toLowerCase()) {
              case "l":
              case "low":
                return t.L;
              case "m":
              case "medium":
                return t.M;
              case "q":
              case "quartile":
                return t.Q;
              case "h":
              case "high":
                return t.H;
              default:
                throw Error("Unknown EC Level: " + e);
            }
          } catch (e) {
            return n;
          }
        }));
    },
    26667: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("wand-sparkles", [
        [
          "path",
          {
            d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
            key: "ul74o6",
          },
        ],
        ["path", { d: "m14 7 3 3", key: "1r5n42" }],
        ["path", { d: "M5 6v4", key: "ilb8ba" }],
        ["path", { d: "M19 14v4", key: "blhpug" }],
        ["path", { d: "M10 2v2", key: "7u0qdc" }],
        ["path", { d: "M7 8H3", key: "zfb6yr" }],
        ["path", { d: "M21 16h-4", key: "1cnmox" }],
        ["path", { d: "M11 3H9", key: "1obp7u" }],
      ]);
    },
    29762: (e, t) => {
      t.isValid = function (e) {
        return !isNaN(e) && e >= 1 && e <= 40;
      };
    },
    30125: (e, t, n) => {
      "use strict";
      var r = n(12115),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
        a = r.useState,
        o = r.useEffect,
        s = r.useLayoutEffect,
        l = r.useDebugValue;
      function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !i(e, n);
        } catch (e) {
          return !0;
        }
      }
      var u =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = a({ inst: { value: n, getSnapshot: t } }),
                i = r[0].inst,
                u = r[1];
              return (
                s(
                  function () {
                    ((i.value = n), (i.getSnapshot = t), c(i) && u({ inst: i }));
                  },
                  [e, n, t]
                ),
                o(
                  function () {
                    return (
                      c(i) && u({ inst: i }),
                      e(function () {
                        c(i) && u({ inst: i });
                      })
                    );
                  },
                  [e]
                ),
                l(n),
                n
              );
            };
      t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : u;
    },
    30926: (e, t, n) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          callServer: function () {
            return r.callServer;
          },
          createServerReference: function () {
            return a.createServerReference;
          },
          findSourceMapURL: function () {
            return i.findSourceMapURL;
          },
        }));
      let r = n(41209),
        i = n(85153),
        a = n(77197);
    },
    31937: (e, t, n) => {
      let r = n(89158),
        i = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function a(e) {
        ((this.mode = r.ALPHANUMERIC), (this.data = e));
      }
      ((a.getBitsLength = function (e) {
        return 11 * Math.floor(e / 2) + (e % 2) * 6;
      }),
        (a.prototype.getLength = function () {
          return this.data.length;
        }),
        (a.prototype.getBitsLength = function () {
          return a.getBitsLength(this.data.length);
        }),
        (a.prototype.write = function (e) {
          let t;
          for (t = 0; t + 2 <= this.data.length; t += 2) {
            let n = 45 * i.indexOf(this.data[t]);
            ((n += i.indexOf(this.data[t + 1])), e.put(n, 11));
          }
          this.data.length % 2 && e.put(i.indexOf(this.data[t]), 6);
        }),
        (e.exports = a));
    },
    33078: (e, t) => {
      "use strict";
      function n(e) {
        let t = {};
        for (let [n, r] of e.entries()) {
          let e = t[n];
          void 0 === e ? (t[n] = r) : Array.isArray(e) ? e.push(r) : (t[n] = [e, r]);
        }
        return t;
      }
      function r(e) {
        return "string" == typeof e
          ? e
          : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
            ? ""
            : String(e);
      }
      function i(e) {
        let t = new URLSearchParams();
        for (let [n, i] of Object.entries(e))
          if (Array.isArray(i)) for (let e of i) t.append(n, r(e));
          else t.set(n, r(i));
        return t;
      }
      function a(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        for (let t of n) {
          for (let n of t.keys()) e.delete(n);
          for (let [n, r] of t.entries()) e.append(n, r);
        }
        return e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          assign: function () {
            return a;
          },
          searchParamsToUrlQuery: function () {
            return n;
          },
          urlQueryToSearchParams: function () {
            return i;
          },
        }));
    },
    35299: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("loader-circle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    35425: (e) => {
      function t() {
        ((this.buffer = []), (this.length = 0));
      }
      ((t.prototype = {
        get: function (e) {
          let t = Math.floor(e / 8);
          return ((this.buffer[t] >>> (7 - (e % 8))) & 1) == 1;
        },
        put: function (e, t) {
          for (let n = 0; n < t; n++) this.putBit(((e >>> (t - n - 1)) & 1) == 1);
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (e) {
          let t = Math.floor(this.length / 8);
          (this.buffer.length <= t && this.buffer.push(0),
            e && (this.buffer[t] |= 128 >>> (this.length % 8)),
            this.length++);
        },
      }),
        (e.exports = t));
    },
    35630: (e, t, n) => {
      let r = n(46342).getSymbolSize;
      t.getPositions = function (e) {
        let t = r(e);
        return [
          [0, 0],
          [t - 7, 0],
          [0, t - 7],
        ];
      };
    },
    36452: (e, t, n) => {
      "use strict";
      n.d(t, {
        AE: () => i,
        Ez: () => o,
        K3: () => w,
        Kd: () => d,
        PQ: () => l,
        Sz: () => a,
        UF: () => f,
        Y6: () => s,
        Y8: () => c,
        fk: () => u,
        kW: () => h,
        m7: () => r,
        o7: () => p,
        z4: () => g,
      });
      class r extends Error {
        constructor(e, t) {
          (super(e), (this.error = t));
        }
      }
      class i extends r {
        constructor() {
          (super(...arguments), (this.name = "WalletNotReadyError"));
        }
      }
      class a extends r {
        constructor() {
          (super(...arguments), (this.name = "WalletLoadError"));
        }
      }
      class o extends r {
        constructor() {
          (super(...arguments), (this.name = "WalletConfigError"));
        }
      }
      class s extends r {
        constructor() {
          (super(...arguments), (this.name = "WalletConnectionError"));
        }
      }
      class l extends r {
        constructor() {
          (super(...arguments), (this.name = "WalletDisconnectedError"));
        }
      }
      class c extends r {
        constructor() {
          (super(...arguments), (this.name = "WalletDisconnectionError"));
        }
      }
      class u extends r {
        constructor() {
          (super(...arguments), (this.name = "WalletAccountError"));
        }
      }
      class d extends r {
        constructor() {
          (super(...arguments), (this.name = "WalletPublicKeyError"));
        }
      }
      class h extends r {
        constructor() {
          (super(...arguments), (this.name = "WalletNotConnectedError"));
        }
      }
      class f extends r {
        constructor() {
          (super(...arguments), (this.name = "WalletSendTransactionError"));
        }
      }
      class g extends r {
        constructor() {
          (super(...arguments), (this.name = "WalletSignTransactionError"));
        }
      }
      class w extends r {
        constructor() {
          (super(...arguments), (this.name = "WalletSignMessageError"));
        }
      }
      class p extends r {
        constructor() {
          (super(...arguments), (this.name = "WalletSignInError"));
        }
      }
    },
    39899: (e, t, n) => {
      "use strict";
      let r, i, a, o;
      n.d(t, { r: () => tF });
      var s,
        l,
        c,
        u,
        d,
        h,
        f,
        g,
        w,
        p,
        y,
        m,
        M,
        v,
        E,
        N,
        L,
        b,
        I,
        j,
        A,
        S,
        T,
        k,
        x,
        D,
        z,
        O,
        C,
        _,
        R,
        U,
        P,
        W,
        B,
        Y,
        Q,
        K,
        F,
        Z,
        H,
        G,
        V,
        q,
        J,
        $,
        X,
        ee,
        et,
        en,
        er,
        ei,
        ea,
        eo,
        es,
        el,
        ec,
        eu,
        ed,
        eh,
        ef,
        eg,
        ew,
        ep,
        ey,
        em,
        eM,
        ev,
        eE,
        eN,
        eL,
        eb,
        eI,
        ej,
        eA,
        eS = n(45669),
        eT = n(51470),
        ek = n(36452),
        ex = n(25223);
      let eD = "solana:signIn";
      var ez = n(46103),
        eO = n(20869),
        eC = n(42452);
      n(52769);
      let e_ = `(?:\\nURI: (?<uri>[^\\n]+))?(?:\\nVersion: (?<version>[^\\n]+))?(?:\\nChain ID: (?<chainId>[^\\n]+))?(?:\\nNonce: (?<nonce>[^\\n]+))?(?:\\nIssued At: (?<issuedAt>[^\\n]+))?(?:\\nExpiration Time: (?<expirationTime>[^\\n]+))?(?:\\nNot Before: (?<notBefore>[^\\n]+))?(?:\\nRequest ID: (?<requestId>[^\\n]+))?(?:\\nResources:(?<resources>(?:\\n- [^\\n]+)*))?`;
      (RegExp(
        `^(?<domain>[^\\n]+?) wants you to sign in with your Solana account:\\n(?<address>[^\\n]+)(?:\\n|$)(?:\\n(?<statement>[\\S\\s]*?)(?:\\n|$))??${e_}\\n*$`
      ),
        globalThis.TextDecoder,
        globalThis.TextEncoder);
      let eR = {
        ERROR_ASSOCIATION_PORT_OUT_OF_RANGE: "ERROR_ASSOCIATION_PORT_OUT_OF_RANGE",
        ERROR_FORBIDDEN_WALLET_BASE_URL: "ERROR_FORBIDDEN_WALLET_BASE_URL",
        ERROR_SECURE_CONTEXT_REQUIRED: "ERROR_SECURE_CONTEXT_REQUIRED",
        ERROR_SESSION_CLOSED: "ERROR_SESSION_CLOSED",
        ERROR_SESSION_TIMEOUT: "ERROR_SESSION_TIMEOUT",
        ERROR_WALLET_NOT_FOUND: "ERROR_WALLET_NOT_FOUND",
        ERROR_INVALID_PROTOCOL_VERSION: "ERROR_INVALID_PROTOCOL_VERSION",
      };
      class eU extends Error {
        constructor(...e) {
          let [t, n, r] = e;
          (super(n),
            (this.code = t),
            (this.data = r),
            (this.name = "SolanaMobileWalletAdapterError"));
        }
      }
      class eP extends Error {
        constructor(...e) {
          let [t, n, r, i] = e;
          (super(r),
            (this.code = n),
            (this.data = i),
            (this.jsonRpcMessageId = t),
            (this.name = "SolanaMobileWalletAdapterProtocolError"));
        }
      }
      function eW(e, t, n, r) {
        return new (n || (n = Promise))(function (i, a) {
          function o(e) {
            try {
              l(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(o, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      }
      function eB(e, t) {
        let n = window.btoa(String.fromCharCode.call(null, ...e));
        return t ? n.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : n;
      }
      function eY(e) {
        return new Uint8Array(
          window
            .atob(e)
            .split("")
            .map((e) => e.charCodeAt(0))
        );
      }
      function eQ(e, t) {
        return eW(this, void 0, void 0, function* () {
          let n = yield crypto.subtle.exportKey("raw", e),
            r = yield crypto.subtle.sign({ hash: "SHA-256", name: "ECDSA" }, t, n),
            i = new Uint8Array(n.byteLength + r.byteLength);
          return (i.set(new Uint8Array(n), 0), i.set(new Uint8Array(r), n.byteLength), i);
        });
      }
      let eK = "solana:cloneAuthorization";
      function eF(e, t) {
        return eW(this, void 0, void 0, function* () {
          let n = e.slice(0, 4),
            i = e.slice(4, 16),
            a = e.slice(16),
            o = yield crypto.subtle.decrypt(eZ(n, i), t, a);
          return (void 0 === r && (r = new TextDecoder("utf-8")), r).decode(o);
        });
      }
      function eZ(e, t) {
        return { additionalData: e, iv: t, name: "AES-GCM", tagLength: 128 };
      }
      function eH() {
        return eW(this, void 0, void 0, function* () {
          return yield crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, !1, [
            "deriveKey",
            "deriveBits",
          ]);
        });
      }
      function eG(e) {
        if (e < 49152 || e > 65535)
          throw new eU(
            eR.ERROR_ASSOCIATION_PORT_OUT_OF_RANGE,
            `Association port number must be between 49152 and 65535. ${e} given.`,
            { port: e }
          );
        return e;
      }
      function eV(e) {
        return e.replace(/(^\/+|\/+$)/g, "").split("/");
      }
      let eq = { Firefox: 0, Other: 1 },
        eJ = null,
        e$ = { retryDelayScheduleMs: [150, 150, 200, 500, 500, 750, 750, 1e3], timeoutMs: 3e4 };
      function eX(e) {
        return new DataView(e).getUint32(0, !1);
      }
      var e0 = n(75170),
        e1 = n(1966),
        e2 = n(77745),
        e4 = n(85177),
        e5 = n(46370);
      function e3(e, t, n, r) {
        return new (n || (n = Promise))(function (i, a) {
          function o(e) {
            try {
              l(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(o, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      }
      function e8(e, t, n, r) {
        if ("a" === n && !r) throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      }
      function e6(e, t, n, r, i) {
        if ("m" === r) throw TypeError("Private method is not writable");
        if ("a" === r && !i) throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return ("a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n);
      }
      let e7 = `
<div class="mobile-wallet-adapter-embedded-modal-container" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div data-modal-close style="position: absolute; width: 100%; height: 100%;"></div>
	<div class="mobile-wallet-adapter-embedded-modal-card">
		<div>
			<button data-modal-close class="mobile-wallet-adapter-embedded-modal-close">
				<svg width="14" height="14">
					<path d="M 6.7125,8.3036995 1.9082,13.108199 c -0.2113,0.2112 -0.4765,0.3168 -0.7957,0.3168 -0.3192,0 -0.5844,-0.1056 -0.7958,-0.3168 C 0.1056,12.896899 0,12.631699 0,12.312499 c 0,-0.3192 0.1056,-0.5844 0.3167,-0.7958 L 5.1212,6.7124995 0.3167,1.9082 C 0.1056,1.6969 0,1.4317 0,1.1125 0,0.7933 0.1056,0.5281 0.3167,0.3167 0.5281,0.1056 0.7933,0 1.1125,0 1.4317,0 1.6969,0.1056 1.9082,0.3167 L 6.7125,5.1212 11.5167,0.3167 C 11.7281,0.1056 11.9933,0 12.3125,0 c 0.3192,0 0.5844,0.1056 0.7957,0.3167 0.2112,0.2114 0.3168,0.4766 0.3168,0.7958 0,0.3192 -0.1056,0.5844 -0.3168,0.7957 L 8.3037001,6.7124995 13.1082,11.516699 c 0.2112,0.2114 0.3168,0.4766 0.3168,0.7958 0,0.3192 -0.1056,0.5844 -0.3168,0.7957 -0.2113,0.2112 -0.4765,0.3168 -0.7957,0.3168 -0.3192,0 -0.5844,-0.1056 -0.7958,-0.3168 z" />
				</svg>
			</button>
		</div>
		<div class="mobile-wallet-adapter-embedded-modal-content"></div>
	</div>
</div>
`,
        e9 = `
.mobile-wallet-adapter-embedded-modal-container {
    display: flex; /* Use flexbox to center content */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    overflow-y: auto; /* enable scrolling */
}

.mobile-wallet-adapter-embedded-modal-card {
    display: flex;
    flex-direction: column;
    margin: auto 20px;
    max-width: 780px;
    padding: 20px;
    border-radius: 24px;
    background: #ffffff;
    font-family: "Inter Tight", "PT Sans", Calibri, sans-serif;
    transform: translateY(-200%);
    animation: slide-in 0.5s forwards;
}

@keyframes slide-in {
    100% { transform: translateY(0%); }
}

.mobile-wallet-adapter-embedded-modal-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    background: #e4e9e9;
    border: none;
    border-radius: 50%;
}

.mobile-wallet-adapter-embedded-modal-close:focus-visible {
    outline-color: red;
}

.mobile-wallet-adapter-embedded-modal-close svg {
    fill: #546266;
    transition: fill 200ms ease 0s;
}

.mobile-wallet-adapter-embedded-modal-close:hover svg {
    fill: #fff;
}
`,
        te = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
`;
      class tt {
        constructor() {
          (s.add(this),
            l.set(this, null),
            c.set(this, {}),
            u.set(this, !1),
            (this.dom = null),
            (this.open = () => {
              (console.debug("Modal open"),
                e8(this, s, "m", h).call(this),
                e8(this, l, "f") && (e8(this, l, "f").style.display = "flex"));
            }),
            (this.close = (e) => {
              var t;
              (console.debug("Modal close"),
                e8(this, s, "m", f).call(this),
                e8(this, l, "f") && (e8(this, l, "f").style.display = "none"),
                null == (t = e8(this, c, "f").close) || t.forEach((t) => t(e)));
            }),
            g.set(this, (e) => {
              "Escape" === e.key && this.close(e);
            }),
            (this.init = this.init.bind(this)),
            e6(this, l, document.getElementById("mobile-wallet-adapter-embedded-root-ui"), "f"));
        }
        init() {
          return e3(this, void 0, void 0, function* () {
            (console.log("Injecting modal"), e8(this, s, "m", d).call(this));
          });
        }
        addEventListener(e, t) {
          var n;
          return (
            (null == (n = e8(this, c, "f")[e]) ? void 0 : n.push(t)) || (e8(this, c, "f")[e] = [t]),
            () => this.removeEventListener(e, t)
          );
        }
        removeEventListener(e, t) {
          var n;
          e8(this, c, "f")[e] =
            null == (n = e8(this, c, "f")[e]) ? void 0 : n.filter((e) => t !== e);
        }
      }
      function tn(e) {
        return window.btoa(String.fromCharCode.call(null, ...e));
      }
      function tr(e) {
        return new Uint8Array(
          window
            .atob(e)
            .split("")
            .map((e) => e.charCodeAt(0))
        );
      }
      ((l = new WeakMap()),
        (c = new WeakMap()),
        (u = new WeakMap()),
        (g = new WeakMap()),
        (s = new WeakSet()),
        (d = function () {
          if (document.getElementById("mobile-wallet-adapter-embedded-root-ui")) {
            e8(this, l, "f") ||
              e6(this, l, document.getElementById("mobile-wallet-adapter-embedded-root-ui"), "f");
            return;
          }
          (e6(this, l, document.createElement("div"), "f"),
            (e8(this, l, "f").id = "mobile-wallet-adapter-embedded-root-ui"),
            (e8(this, l, "f").innerHTML = e7),
            (e8(this, l, "f").style.display = "none"));
          let e = e8(this, l, "f").querySelector(".mobile-wallet-adapter-embedded-modal-content");
          e && (e.innerHTML = this.contentHtml);
          let t = document.createElement("style");
          ((t.id = "mobile-wallet-adapter-embedded-modal-styles"),
            (t.textContent = e9 + this.contentStyles));
          let n = document.createElement("div");
          ((n.innerHTML = te),
            (this.dom = n.attachShadow({ mode: "closed" })),
            this.dom.appendChild(t),
            this.dom.appendChild(e8(this, l, "f")),
            document.body.appendChild(n));
        }),
        (h = function () {
          !e8(this, l, "f") ||
            e8(this, u, "f") ||
            ([...e8(this, l, "f").querySelectorAll("[data-modal-close]")].forEach((e) =>
              null == e ? void 0 : e.addEventListener("click", this.close)
            ),
            window.addEventListener("load", this.close),
            document.addEventListener("keydown", e8(this, g, "f")),
            e6(this, u, !0, "f"));
        }),
        (f = function () {
          if (e8(this, u, "f"))
            (window.removeEventListener("load", this.close),
              document.removeEventListener("keydown", e8(this, g, "f")),
              e8(this, l, "f") &&
                ([...e8(this, l, "f").querySelectorAll("[data-modal-close]")].forEach((e) =>
                  null == e ? void 0 : e.removeEventListener("click", this.close)
                ),
                e6(this, u, !1, "f")));
        }));
      let ti = "Mobile Wallet Adapter",
        ta = [eO.R, eC.q, ez.F, eD];
      class to {
        constructor(e) {
          (w.add(this),
            p.set(this, {}),
            y.set(this, "1.0.0"),
            m.set(this, ti),
            M.set(this, "https://solanamobile.com/wallets"),
            v.set(
              this,
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03IDIuNUgxN0MxNy44Mjg0IDIuNSAxOC41IDMuMTcxNTcgMTguNSA0VjIwQzE4LjUgMjAuODI4NCAxNy44Mjg0IDIxLjUgMTcgMjEuNUg3QzYuMTcxNTcgMjEuNSA1LjUgMjAuODI4NCA1LjUgMjBWNEM1LjUgMy4xNzE1NyA2LjE3MTU3IDIuNSA3IDIuNVpNMyA0QzMgMS43OTA4NiA0Ljc5MDg2IDAgNyAwSDE3QzE5LjIwOTEgMCAyMSAxLjc5MDg2IDIxIDRWMjBDMjEgMjIuMjA5MSAxOS4yMDkxIDI0IDE3IDI0SDdDNC43OTA4NiAyNCAzIDIyLjIwOTEgMyAyMFY0Wk0xMSA0LjYxNTM4QzEwLjQ0NzcgNC42MTUzOCAxMCA1LjA2MzEgMTAgNS42MTUzOFY2LjM4NDYyQzEwIDYuOTM2OSAxMC40NDc3IDcuMzg0NjIgMTEgNy4zODQ2MkgxM0MxMy41NTIzIDcuMzg0NjIgMTQgNi45MzY5IDE0IDYuMzg0NjJWNS42MTUzOEMxNCA1LjA2MzEgMTMuNTUyMyA0LjYxNTM4IDEzIDQuNjE1MzhIMTFaIiBmaWxsPSIjRENCOEZGIi8+Cjwvc3ZnPgo="
            ),
            E.set(this, void 0),
            N.set(this, void 0),
            L.set(this, void 0),
            b.set(this, !1),
            I.set(this, 0),
            j.set(this, []),
            A.set(this, void 0),
            S.set(this, void 0),
            T.set(this, void 0),
            k.set(this, (e, t) => {
              var n;
              return (
                (null == (n = e8(this, p, "f")[e]) ? void 0 : n.push(t)) ||
                  (e8(this, p, "f")[e] = [t]),
                () => e8(this, w, "m", D).call(this, e, t)
              );
            }),
            z.set(this, ({ silent: e } = {}) =>
              e3(this, void 0, void 0, function* () {
                if (e8(this, b, "f") || this.connected) return { accounts: this.accounts };
                e6(this, b, !0, "f");
                try {
                  if (e) {
                    let e = yield e8(this, L, "f").get();
                    if (!e) return { accounts: this.accounts };
                    (yield e8(this, _, "f").call(this, e.capabilities),
                      yield e8(this, C, "f").call(this, e));
                  } else yield e8(this, O, "f").call(this);
                } catch (e) {
                  throw Error((e instanceof Error && e.message) || "Unknown error");
                } finally {
                  e6(this, b, !1, "f");
                }
                return { accounts: this.accounts };
              })
            ),
            O.set(this, (e) =>
              e3(this, void 0, void 0, function* () {
                try {
                  let t = yield e8(this, L, "f").get();
                  if (t) return (e8(this, C, "f").call(this, t), t);
                  let n = yield e8(this, A, "f").select(e8(this, j, "f"));
                  return yield e8(this, P, "f").call(this, (t) =>
                    e3(this, void 0, void 0, function* () {
                      let [r, i] = yield Promise.all([
                          t.getCapabilities(),
                          t.authorize({ chain: n, identity: e8(this, E, "f"), sign_in_payload: e }),
                        ]),
                        a = e8(this, B, "f").call(this, i.accounts),
                        o = Object.assign(Object.assign({}, i), {
                          accounts: a,
                          chain: n,
                          capabilities: r,
                        });
                      return (
                        Promise.all([
                          e8(this, _, "f").call(this, r),
                          e8(this, L, "f").set(o),
                          e8(this, C, "f").call(this, o),
                        ]),
                        o
                      );
                    })
                  );
                } catch (e) {
                  throw Error((e instanceof Error && e.message) || "Unknown error");
                }
              })
            ),
            C.set(this, (e) =>
              e3(this, void 0, void 0, function* () {
                var t;
                let n =
                  null == e8(this, N, "f") ||
                  (null == (t = e8(this, N, "f")) ? void 0 : t.accounts.length) !==
                    e.accounts.length ||
                  e8(this, N, "f").accounts.some((t, n) => t.address !== e.accounts[n].address);
                (e6(this, N, e, "f"),
                  n && e8(this, w, "m", x).call(this, "change", { accounts: this.accounts }));
              })
            ),
            _.set(this, (e) =>
              e3(this, void 0, void 0, function* () {
                let t = e.features.includes("solana:signTransactions"),
                  n = e.supports_sign_and_send_transactions,
                  r = eO.R in this.features !== n || eC.q in this.features !== t;
                (e6(
                  this,
                  S,
                  Object.assign(
                    Object.assign(
                      {},
                      (n || (!n && !t)) && {
                        [eO.R]: {
                          version: "1.0.0",
                          supportedTransactionVersions: ["legacy", 0],
                          signAndSendTransaction: e8(this, K, "f"),
                        },
                      }
                    ),
                    t && {
                      [eC.q]: {
                        version: "1.0.0",
                        supportedTransactionVersions: ["legacy", 0],
                        signTransaction: e8(this, F, "f"),
                      },
                    }
                  ),
                  "f"
                ),
                  r && e8(this, w, "m", x).call(this, "change", { features: this.features }));
              })
            ),
            R.set(this, (e, t, n) =>
              e3(this, void 0, void 0, function* () {
                var r, i;
                try {
                  let [a, o] = yield Promise.all([
                      null != (i = null == (r = e8(this, N, "f")) ? void 0 : r.capabilities)
                        ? i
                        : yield e.getCapabilities(),
                      e.authorize({ auth_token: t, identity: e8(this, E, "f"), chain: n }),
                    ]),
                    s = e8(this, B, "f").call(this, o.accounts),
                    l = Object.assign(Object.assign({}, o), {
                      accounts: s,
                      chain: n,
                      capabilities: a,
                    });
                  Promise.all([e8(this, L, "f").set(l), e8(this, C, "f").call(this, l)]);
                } catch (e) {
                  throw (
                    e8(this, U, "f").call(this),
                    Error((e instanceof Error && e.message) || "Unknown error")
                  );
                }
              })
            ),
            U.set(this, () =>
              e3(this, void 0, void 0, function* () {
                var e;
                (e8(this, L, "f").clear(),
                  e6(this, b, !1, "f"),
                  e6(this, I, ((e = e8(this, I, "f")), ++e), "f"),
                  e6(this, N, void 0, "f"),
                  e8(this, w, "m", x).call(this, "change", { accounts: this.accounts }));
              })
            ),
            P.set(this, (e) =>
              e3(this, void 0, void 0, function* () {
                var t;
                let n = null == (t = e8(this, N, "f")) ? void 0 : t.wallet_uri_base,
                  r = e8(this, I, "f");
                try {
                  return yield (function (e, t) {
                    return eW(this, void 0, void 0, function* () {
                      let n;
                      if ("undefined" == typeof window || !0 !== window.isSecureContext)
                        throw new eU(
                          eR.ERROR_SECURE_CONTEXT_REQUIRED,
                          "The mobile wallet adapter protocol must be used in a secure context (`https`)."
                        );
                      let r = yield (function () {
                          return eW(this, void 0, void 0, function* () {
                            return yield crypto.subtle.generateKey(
                              { name: "ECDSA", namedCurve: "P-256" },
                              !1,
                              ["sign"]
                            );
                          });
                        })(),
                        i = yield (function (e, t) {
                          return eW(this, void 0, void 0, function* () {
                            let n = eG(49152 + Math.floor(16384 * Math.random())),
                              r = yield (function (e, t, n, r = ["v1"]) {
                                return eW(this, void 0, void 0, function* () {
                                  let i = eG(t),
                                    a = (function (e) {
                                      let t = "",
                                        n = new Uint8Array(e),
                                        r = n.byteLength;
                                      for (let e = 0; e < r; e++) t += String.fromCharCode(n[e]);
                                      return window.btoa(t);
                                    })(yield crypto.subtle.exportKey("raw", e)),
                                    o = (function (e, t) {
                                      let n = null;
                                      if (t) {
                                        try {
                                          n = new URL(t);
                                        } catch (e) {}
                                        if ((null == n ? void 0 : n.protocol) !== "https:")
                                          throw new eU(
                                            eR.ERROR_FORBIDDEN_WALLET_BASE_URL,
                                            "Base URLs supplied by wallets must be valid `https` URLs"
                                          );
                                      }
                                      return (
                                        n || (n = new URL("solana-wallet:/")),
                                        new URL(
                                          e.startsWith("/")
                                            ? e
                                            : [...eV(n.pathname), ...eV(e)].join("/"),
                                          n
                                        )
                                      );
                                    })("v1/associate/local", n);
                                  return (
                                    o.searchParams.set(
                                      "association",
                                      a.replace(
                                        /[/+=]/g,
                                        (e) => ({ "/": "_", "+": "-", "=": "." })[e]
                                      )
                                    ),
                                    o.searchParams.set("port", `${i}`),
                                    r.forEach((e) => {
                                      o.searchParams.set("v", e);
                                    }),
                                    o
                                  );
                                });
                              })(e, n, t);
                            return (
                              yield (function (e) {
                                return eW(this, void 0, void 0, function* () {
                                  if ("https:" === e.protocol) window.location.assign(e);
                                  else
                                    try {
                                      switch (
                                        -1 !== navigator.userAgent.indexOf("Firefox/")
                                          ? eq.Firefox
                                          : eq.Other
                                      ) {
                                        case eq.Firefox:
                                          (null == eJ &&
                                            (((eJ =
                                              document.createElement("iframe")).style.display =
                                              "none"),
                                            document.body.appendChild(eJ)),
                                            (eJ.contentWindow.location.href = e.toString()));
                                          break;
                                        case eq.Other: {
                                          let t = new Promise((e, t) => {
                                            function n() {
                                              (clearTimeout(i),
                                                window.removeEventListener("blur", r));
                                            }
                                            function r() {
                                              (n(), e());
                                            }
                                            window.addEventListener("blur", r);
                                            let i = setTimeout(() => {
                                              (n(), t());
                                            }, 3e3);
                                          });
                                          (window.location.assign(e), yield t);
                                        }
                                      }
                                    } catch (e) {
                                      throw new eU(
                                        eR.ERROR_WALLET_NOT_FOUND,
                                        "Found no installed wallet that supports the mobile wallet protocol."
                                      );
                                    }
                                });
                              })(r),
                              n
                            );
                          });
                        })(r.publicKey, null == t ? void 0 : t.baseUri),
                        a = `ws://localhost:${i}/solana-wallet`,
                        o = (() => {
                          let e = [...e$.retryDelayScheduleMs];
                          return () => (e.length > 1 ? e.shift() : e[0]);
                        })(),
                        s = 1,
                        l = 0,
                        c = { __type: "disconnected" };
                      return new Promise((t, i) => {
                        let u,
                          d,
                          h,
                          f = {},
                          g = () =>
                            eW(this, void 0, void 0, function* () {
                              if ("connecting" !== c.__type)
                                return void console.warn(
                                  `Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${c.__type}\`.`
                                );
                              u.removeEventListener("open", g);
                              let { associationKeypair: e } = c,
                                t = yield eH();
                              (u.send(yield eQ(t.publicKey, e.privateKey)),
                                (c = {
                                  __type: "hello_req_sent",
                                  associationPublicKey: e.publicKey,
                                  ecdhPrivateKey: t.privateKey,
                                }));
                            }),
                          w = (e) => {
                            (e.wasClean
                              ? (c = { __type: "disconnected" })
                              : i(
                                  new eU(
                                    eR.ERROR_SESSION_CLOSED,
                                    `The wallet session dropped unexpectedly (${e.code}: ${e.reason}).`,
                                    { closeEvent: e }
                                  )
                                ),
                              d());
                          },
                          p = (e) =>
                            eW(this, void 0, void 0, function* () {
                              (d(),
                                Date.now() - n >= e$.timeoutMs
                                  ? i(
                                      new eU(
                                        eR.ERROR_SESSION_TIMEOUT,
                                        `Failed to connect to the wallet websocket at ${a}.`
                                      )
                                    )
                                  : (yield new Promise((e) => {
                                      let t = o();
                                      h = window.setTimeout(e, t);
                                    }),
                                    m()));
                            }),
                          y = (n) =>
                            eW(this, void 0, void 0, function* () {
                              let a = yield n.data.arrayBuffer();
                              switch (c.__type) {
                                case "connecting":
                                  if (0 !== a.byteLength)
                                    throw Error("Encountered unexpected message while connecting");
                                  let o = yield eH();
                                  (u.send(yield eQ(o.publicKey, r.privateKey)),
                                    (c = {
                                      __type: "hello_req_sent",
                                      associationPublicKey: r.publicKey,
                                      ecdhPrivateKey: o.privateKey,
                                    }));
                                  break;
                                case "connected":
                                  try {
                                    let e = a.slice(0, 4),
                                      t = eX(e);
                                    if (t !== l + 1)
                                      throw Error("Encrypted message has invalid sequence number");
                                    l = t;
                                    let n = yield (function (e, t) {
                                        return eW(this, void 0, void 0, function* () {
                                          let n = JSON.parse(yield eF(e, t));
                                          if (Object.hasOwnProperty.call(n, "error"))
                                            throw new eP(n.id, n.error.code, n.error.message);
                                          return n;
                                        });
                                      })(a, c.sharedSecret),
                                      r = f[n.id];
                                    (delete f[n.id], r.resolve(n.result));
                                  } catch (e) {
                                    if (e instanceof eP) {
                                      let t = f[e.jsonRpcMessageId];
                                      (delete f[e.jsonRpcMessageId], t.reject(e));
                                    } else throw e;
                                  }
                                  break;
                                case "hello_req_sent": {
                                  var h, g;
                                  if (0 === a.byteLength) {
                                    let e = yield eH();
                                    (u.send(yield eQ(e.publicKey, r.privateKey)),
                                      (c = {
                                        __type: "hello_req_sent",
                                        associationPublicKey: r.publicKey,
                                        ecdhPrivateKey: e.privateKey,
                                      }));
                                    break;
                                  }
                                  let n = yield (function (e, t, n) {
                                      return eW(this, void 0, void 0, function* () {
                                        let [r, i] = yield Promise.all([
                                            crypto.subtle.exportKey("raw", t),
                                            crypto.subtle.importKey(
                                              "raw",
                                              e.slice(0, 65),
                                              { name: "ECDH", namedCurve: "P-256" },
                                              !1,
                                              []
                                            ),
                                          ]),
                                          a = yield crypto.subtle.deriveBits(
                                            { name: "ECDH", public: i },
                                            n,
                                            256
                                          ),
                                          o = yield crypto.subtle.importKey("raw", a, "HKDF", !1, [
                                            "deriveKey",
                                          ]);
                                        return yield crypto.subtle.deriveKey(
                                          {
                                            name: "HKDF",
                                            hash: "SHA-256",
                                            salt: new Uint8Array(r),
                                            info: new Uint8Array(),
                                          },
                                          o,
                                          { name: "AES-GCM", length: 128 },
                                          !1,
                                          ["encrypt", "decrypt"]
                                        );
                                      });
                                    })(a, c.associationPublicKey, c.ecdhPrivateKey),
                                    o = a.slice(65),
                                    w =
                                      0 !== o.byteLength
                                        ? yield eW(this, void 0, void 0, function* () {
                                            let e = eX(o.slice(0, 4));
                                            if (e !== l + 1)
                                              throw Error(
                                                "Encrypted message has invalid sequence number"
                                              );
                                            return (
                                              (l = e),
                                              (function (e, t) {
                                                return eW(this, void 0, void 0, function* () {
                                                  let n = JSON.parse(yield eF(e, t)),
                                                    r = "legacy";
                                                  if (Object.hasOwnProperty.call(n, "v"))
                                                    switch (n.v) {
                                                      case 1:
                                                      case "1":
                                                      case "v1":
                                                        r = "v1";
                                                        break;
                                                      case "legacy":
                                                        r = "legacy";
                                                        break;
                                                      default:
                                                        throw new eU(
                                                          eR.ERROR_INVALID_PROTOCOL_VERSION,
                                                          `Unknown/unsupported protocol version: ${n.v}`
                                                        );
                                                    }
                                                  return { protocol_version: r };
                                                });
                                              })(o, n)
                                            );
                                          })
                                        : { protocol_version: "legacy" };
                                  c = {
                                    __type: "connected",
                                    sharedSecret: n,
                                    sessionProperties: w,
                                  };
                                  let p =
                                    ((h = w.protocol_version),
                                    (g = (e, t) =>
                                      eW(this, void 0, void 0, function* () {
                                        let r = s++;
                                        return (
                                          u.send(
                                            yield (function (e, t) {
                                              return eW(this, void 0, void 0, function* () {
                                                let n = JSON.stringify(e);
                                                return (function (e, t, n) {
                                                  return eW(this, void 0, void 0, function* () {
                                                    let r = (function (e) {
                                                        if (e >= 0x100000000)
                                                          throw Error(
                                                            "Outbound sequence number overflow. The maximum sequence number is 32-bytes."
                                                          );
                                                        let t = new ArrayBuffer(4);
                                                        return (
                                                          new DataView(t).setUint32(0, e, !1),
                                                          new Uint8Array(t)
                                                        );
                                                      })(t),
                                                      i = new Uint8Array(12);
                                                    crypto.getRandomValues(i);
                                                    let a = yield crypto.subtle.encrypt(
                                                        eZ(r, i),
                                                        n,
                                                        new TextEncoder().encode(e)
                                                      ),
                                                      o = new Uint8Array(
                                                        r.byteLength + i.byteLength + a.byteLength
                                                      );
                                                    return (
                                                      o.set(new Uint8Array(r), 0),
                                                      o.set(new Uint8Array(i), r.byteLength),
                                                      o.set(
                                                        new Uint8Array(a),
                                                        r.byteLength + i.byteLength
                                                      ),
                                                      o
                                                    );
                                                  });
                                                })(n, e.id, t);
                                              });
                                            })(
                                              {
                                                id: r,
                                                jsonrpc: "2.0",
                                                method: e,
                                                params: null != t ? t : {},
                                              },
                                              n
                                            )
                                          ),
                                          new Promise((t, n) => {
                                            f[r] = {
                                              resolve(r) {
                                                switch (e) {
                                                  case "authorize":
                                                  case "reauthorize": {
                                                    let { wallet_uri_base: e } = r;
                                                    if (null != e)
                                                      try {
                                                        let t;
                                                        try {
                                                          t = new URL(e);
                                                        } catch (e) {
                                                          throw new eU(
                                                            eR.ERROR_FORBIDDEN_WALLET_BASE_URL,
                                                            "Invalid base URL supplied by wallet"
                                                          );
                                                        }
                                                        if ("https:" !== t.protocol)
                                                          throw new eU(
                                                            eR.ERROR_FORBIDDEN_WALLET_BASE_URL,
                                                            "Base URLs supplied by wallets must be valid `https` URLs"
                                                          );
                                                      } catch (e) {
                                                        n(e);
                                                        return;
                                                      }
                                                  }
                                                }
                                                t(r);
                                              },
                                              reject: n,
                                            };
                                          })
                                        );
                                      })),
                                    new Proxy(
                                      {},
                                      {
                                        get: (e, t) =>
                                          "then" === t
                                            ? null
                                            : (null == e[t] &&
                                                (e[t] = function (e) {
                                                  return eW(this, void 0, void 0, function* () {
                                                    let { method: n, params: r } = (function (
                                                        e,
                                                        t,
                                                        n
                                                      ) {
                                                        let r = t,
                                                          i = e
                                                            .toString()
                                                            .replace(
                                                              /[A-Z]/g,
                                                              (e) => `_${e.toLowerCase()}`
                                                            )
                                                            .toLowerCase();
                                                        switch (e) {
                                                          case "authorize": {
                                                            let { chain: e } = r;
                                                            if ("legacy" === n) {
                                                              switch (e) {
                                                                case "solana:testnet":
                                                                  e = "testnet";
                                                                  break;
                                                                case "solana:devnet":
                                                                  e = "devnet";
                                                                  break;
                                                                case "solana:mainnet":
                                                                  e = "mainnet-beta";
                                                                  break;
                                                                default:
                                                                  e = r.cluster;
                                                              }
                                                              r.cluster = e;
                                                            } else {
                                                              switch (e) {
                                                                case "testnet":
                                                                case "devnet":
                                                                  e = `solana:${e}`;
                                                                  break;
                                                                case "mainnet-beta":
                                                                  e = "solana:mainnet";
                                                              }
                                                              r.chain = e;
                                                            }
                                                          }
                                                          case "reauthorize": {
                                                            let { auth_token: e, identity: t } = r;
                                                            e &&
                                                              ("legacy" === n
                                                                ? ((i = "reauthorize"),
                                                                  (r = {
                                                                    auth_token: e,
                                                                    identity: t,
                                                                  }))
                                                                : (i = "authorize"));
                                                          }
                                                        }
                                                        return { method: i, params: r };
                                                      })(t, e, h),
                                                      i = yield g(n, r);
                                                    return (
                                                      "authorize" === n &&
                                                        r.sign_in_payload &&
                                                        !i.sign_in_result &&
                                                        (i.sign_in_result = yield (function (
                                                          e,
                                                          t,
                                                          n
                                                        ) {
                                                          var r;
                                                          return eW(
                                                            this,
                                                            void 0,
                                                            void 0,
                                                            function* () {
                                                              var i, a, o, s;
                                                              let l =
                                                                  null != (r = e.domain)
                                                                    ? r
                                                                    : window.location.host,
                                                                c = t.accounts[0].address,
                                                                u = ((s = (function (e) {
                                                                  let t = `${e.domain} wants you to sign in with your Solana account:
`;
                                                                  ((t += `${e.address}`),
                                                                    e.statement &&
                                                                      (t += `

${e.statement}`));
                                                                  let n = [];
                                                                  if (
                                                                    (e.uri &&
                                                                      n.push(`URI: ${e.uri}`),
                                                                    e.version &&
                                                                      n.push(
                                                                        `Version: ${e.version}`
                                                                      ),
                                                                    e.chainId &&
                                                                      n.push(
                                                                        `Chain ID: ${e.chainId}`
                                                                      ),
                                                                    e.nonce &&
                                                                      n.push(`Nonce: ${e.nonce}`),
                                                                    e.issuedAt &&
                                                                      n.push(
                                                                        `Issued At: ${e.issuedAt}`
                                                                      ),
                                                                    e.expirationTime &&
                                                                      n.push(
                                                                        `Expiration Time: ${e.expirationTime}`
                                                                      ),
                                                                    e.notBefore &&
                                                                      n.push(
                                                                        `Not Before: ${e.notBefore}`
                                                                      ),
                                                                    e.requestId &&
                                                                      n.push(
                                                                        `Request ID: ${e.requestId}`
                                                                      ),
                                                                    e.resources)
                                                                  )
                                                                    for (let t of (n.push(
                                                                      "Resources:"
                                                                    ),
                                                                    e.resources))
                                                                      n.push(`- ${t}`);
                                                                  return (
                                                                    n.length &&
                                                                      (t += `

${n.join("\n")}`),
                                                                    t
                                                                  );
                                                                })(
                                                                  Object.assign(
                                                                    Object.assign({}, e),
                                                                    {
                                                                      domain: l,
                                                                      address:
                                                                        ((i = eY(c)),
                                                                        ((a =
                                                                          "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),
                                                                        Object.freeze({
                                                                          ...(o = {
                                                                            read(e, t) {
                                                                              let n =
                                                                                0 === t
                                                                                  ? e
                                                                                  : e.slice(t);
                                                                              if (0 === n.length)
                                                                                return ["", 0];
                                                                              let r = n.findIndex(
                                                                                (e) => 0 !== e
                                                                              );
                                                                              r =
                                                                                -1 === r
                                                                                  ? n.length
                                                                                  : r;
                                                                              let i =
                                                                                a[0].repeat(r);
                                                                              return r === n.length
                                                                                ? [i, e.length]
                                                                                : [
                                                                                    i +
                                                                                      (function (
                                                                                        e,
                                                                                        t
                                                                                      ) {
                                                                                        let n =
                                                                                            BigInt(
                                                                                              t.length
                                                                                            ),
                                                                                          r = [];
                                                                                        for (
                                                                                          ;
                                                                                          e > 0n;
                                                                                        )
                                                                                          (r.unshift(
                                                                                            t[
                                                                                              Number(
                                                                                                e %
                                                                                                  n
                                                                                              )
                                                                                            ]
                                                                                          ),
                                                                                            (e /=
                                                                                              n));
                                                                                        return r.join(
                                                                                          ""
                                                                                        );
                                                                                      })(
                                                                                        n
                                                                                          .slice(r)
                                                                                          .reduce(
                                                                                            (
                                                                                              e,
                                                                                              t
                                                                                            ) =>
                                                                                              256n *
                                                                                                e +
                                                                                              BigInt(
                                                                                                t
                                                                                              ),
                                                                                            0n
                                                                                          ),
                                                                                        a
                                                                                      ),
                                                                                    e.length,
                                                                                  ];
                                                                            },
                                                                          }),
                                                                          decode: (e, t = 0) =>
                                                                            o.read(e, t)[0],
                                                                        })).decode(i)),
                                                                    }
                                                                  )
                                                                )),
                                                                window.btoa(s))
                                                                  .replace(/\+/g, "-")
                                                                  .replace(/\//g, "_")
                                                                  .replace(/=+$/, ""),
                                                                d = eY(
                                                                  (yield n("sign_messages", {
                                                                    addresses: [c],
                                                                    payloads: [u],
                                                                  })).signed_payloads[0]
                                                                ),
                                                                h = eB(d.slice(0, d.length - 64)),
                                                                f = eB(d.slice(d.length - 64));
                                                              return {
                                                                address: c,
                                                                signed_message:
                                                                  0 == h.length ? u : h,
                                                                signature: f,
                                                              };
                                                            }
                                                          );
                                                        })(r.sign_in_payload, i, g)),
                                                      (function (e, t, n) {
                                                        if ("getCapabilities" === e)
                                                          switch (n) {
                                                            case "legacy": {
                                                              let e = ["solana:signTransactions"];
                                                              return (
                                                                !0 ===
                                                                  t.supports_clone_authorization &&
                                                                  e.push(eK),
                                                                Object.assign(
                                                                  Object.assign({}, t),
                                                                  { features: e }
                                                                )
                                                              );
                                                            }
                                                            case "v1":
                                                              return Object.assign(
                                                                Object.assign({}, t),
                                                                {
                                                                  supports_sign_and_send_transactions:
                                                                    !0,
                                                                  supports_clone_authorization:
                                                                    t.features.includes(eK),
                                                                }
                                                              );
                                                          }
                                                        return t;
                                                      })(t, i, h)
                                                    );
                                                  });
                                                }),
                                              e[t]),
                                        defineProperty: () => !1,
                                        deleteProperty: () => !1,
                                      }
                                    ));
                                  try {
                                    t(yield e(p));
                                  } catch (e) {
                                    i(e);
                                  } finally {
                                    (d(), u.close());
                                  }
                                }
                              }
                            }),
                          m = () => {
                            (d && d(),
                              (c = { __type: "connecting", associationKeypair: r }),
                              void 0 === n && (n = Date.now()),
                              (u = new WebSocket(a, [
                                "com.solana.mobilewalletadapter.v1",
                              ])).addEventListener("open", g),
                              u.addEventListener("close", w),
                              u.addEventListener("error", p),
                              u.addEventListener("message", y),
                              (d = () => {
                                (window.clearTimeout(h),
                                  u.removeEventListener("open", g),
                                  u.removeEventListener("close", w),
                                  u.removeEventListener("error", p),
                                  u.removeEventListener("message", y));
                              }));
                          };
                        m();
                      });
                    });
                  })(e, n ? { baseUri: n } : void 0);
                } catch (e) {
                  throw (
                    e8(this, I, "f") !== r && (yield new Promise(() => {})),
                    e instanceof Error &&
                      "SolanaMobileWalletAdapterError" === e.name &&
                      "ERROR_WALLET_NOT_FOUND" === e.code &&
                      (yield e8(this, T, "f").call(this, this)),
                    e
                  );
                }
              })
            ),
            W.set(this, () => {
              if (!e8(this, N, "f")) throw Error("Wallet not connected");
              return { authToken: e8(this, N, "f").auth_token, chain: e8(this, N, "f").chain };
            }),
            B.set(this, (e) =>
              e.map((e) => {
                var t, n;
                let r = tr(e.address);
                return {
                  address: e4.encode(r),
                  publicKey: r,
                  label: e.label,
                  icon: e.icon,
                  chains: null != (t = e.chains) ? t : e8(this, j, "f"),
                  features: null != (n = e.features) ? n : ta,
                };
              })
            ),
            Y.set(this, (e) =>
              e3(this, void 0, void 0, function* () {
                let { authToken: t, chain: n } = e8(this, W, "f").call(this);
                try {
                  let r = e.map((e) => tn(e));
                  return yield e8(this, P, "f").call(this, (e) =>
                    e3(this, void 0, void 0, function* () {
                      return (
                        yield e8(this, R, "f").call(this, e, t, n),
                        (yield e.signTransactions({ payloads: r })).signed_payloads.map(tr)
                      );
                    })
                  );
                } catch (e) {
                  throw Error((e instanceof Error && e.message) || "Unknown error");
                }
              })
            ),
            Q.set(this, (e, t) =>
              e3(this, void 0, void 0, function* () {
                let { authToken: n, chain: r } = e8(this, W, "f").call(this);
                try {
                  return yield e8(this, P, "f").call(this, (i) =>
                    e3(this, void 0, void 0, function* () {
                      let [a, o] = yield Promise.all([
                        i.getCapabilities(),
                        e8(this, R, "f").call(this, i, n, r),
                      ]);
                      if (a.supports_sign_and_send_transactions) {
                        let n = tn(e);
                        return (yield i.signAndSendTransactions(
                          Object.assign(Object.assign({}, t), { payloads: [n] })
                        )).signatures.map(tr)[0];
                      }
                      throw Error("connected wallet does not support signAndSendTransaction");
                    })
                  );
                } catch (e) {
                  throw Error((e instanceof Error && e.message) || "Unknown error");
                }
              })
            ),
            K.set(this, (...e) =>
              e3(this, void 0, void 0, function* () {
                let t = [];
                for (let n of e) {
                  let e = yield e8(this, Q, "f").call(this, n.transaction, n.options);
                  t.push({ signature: e });
                }
                return t;
              })
            ),
            F.set(this, (...e) =>
              e3(this, void 0, void 0, function* () {
                return (yield e8(this, Y, "f").call(
                  this,
                  e.map(({ transaction: e }) => e)
                )).map((e) => ({ signedTransaction: e }));
              })
            ),
            Z.set(this, (...e) =>
              e3(this, void 0, void 0, function* () {
                let { authToken: t, chain: n } = e8(this, W, "f").call(this),
                  r = e.map(({ account: e }) => tn(e.publicKey)),
                  i = e.map(({ message: e }) => tn(e));
                try {
                  return yield e8(this, P, "f").call(this, (e) =>
                    e3(this, void 0, void 0, function* () {
                      return (
                        yield e8(this, R, "f").call(this, e, t, n),
                        (yield e.signMessages({ addresses: r, payloads: i })).signed_payloads
                          .map(tr)
                          .map((e) => ({ signedMessage: e, signature: e.slice(-64) }))
                      );
                    })
                  );
                } catch (e) {
                  throw Error((e instanceof Error && e.message) || "Unknown error");
                }
              })
            ),
            H.set(this, (...e) =>
              e3(this, void 0, void 0, function* () {
                let t = [];
                if (!(e.length > 1)) return [yield e8(this, G, "f").call(this, e[0])];
                for (let n of e) t.push(yield e8(this, G, "f").call(this, n));
                return t;
              })
            ),
            G.set(this, (e) =>
              e3(this, void 0, void 0, function* () {
                var t, n, r;
                e6(this, b, !0, "f");
                try {
                  let i = yield e8(this, O, "f").call(
                    this,
                    Object.assign(Object.assign({}, e), {
                      domain:
                        null != (t = null == e ? void 0 : e.domain) ? t : window.location.host,
                    })
                  );
                  if (!i.sign_in_result)
                    throw Error("Sign in failed, no sign in result returned by wallet");
                  let a = i.sign_in_result.address,
                    o = i.accounts.find((e) => e.address == a);
                  return {
                    account: Object.assign(
                      Object.assign({}, null != o ? o : { address: e4.encode(tr(a)) }),
                      {
                        publicKey: tr(a),
                        chains: null != (n = null == o ? void 0 : o.chains) ? n : e8(this, j, "f"),
                        features:
                          null != (r = null == o ? void 0 : o.features)
                            ? r
                            : i.capabilities.features,
                      }
                    ),
                    signedMessage: tr(i.sign_in_result.signed_message),
                    signature: tr(i.sign_in_result.signature),
                  };
                } catch (e) {
                  throw Error((e instanceof Error && e.message) || "Unknown error");
                } finally {
                  e6(this, b, !1, "f");
                }
              })
            ),
            e6(this, L, e.authorizationCache, "f"),
            e6(this, E, e.appIdentity, "f"),
            e6(this, j, e.chains, "f"),
            e6(this, A, e.chainSelector, "f"),
            e6(this, T, e.onWalletNotFound, "f"),
            e6(
              this,
              S,
              {
                [eO.R]: {
                  version: "1.0.0",
                  supportedTransactionVersions: ["legacy", 0],
                  signAndSendTransaction: e8(this, K, "f"),
                },
                [eC.q]: {
                  version: "1.0.0",
                  supportedTransactionVersions: ["legacy", 0],
                  signTransaction: e8(this, F, "f"),
                },
              },
              "f"
            ));
        }
        get version() {
          return e8(this, y, "f");
        }
        get name() {
          return e8(this, m, "f");
        }
        get url() {
          return e8(this, M, "f");
        }
        get icon() {
          return e8(this, v, "f");
        }
        get chains() {
          return e8(this, j, "f");
        }
        get features() {
          return Object.assign(
            {
              [e0.u]: { version: "1.0.0", connect: e8(this, z, "f") },
              [e1.w]: { version: "1.0.0", disconnect: e8(this, U, "f") },
              [e2.j]: { version: "1.0.0", on: e8(this, k, "f") },
              [ez.F]: { version: "1.0.0", signMessage: e8(this, Z, "f") },
              [eD]: { version: "1.0.0", signIn: e8(this, H, "f") },
            },
            e8(this, S, "f")
          );
        }
        get accounts() {
          var e, t;
          return null != (t = null == (e = e8(this, N, "f")) ? void 0 : e.accounts) ? t : [];
        }
        get connected() {
          return !!e8(this, N, "f");
        }
        get isAuthorized() {
          return !!e8(this, N, "f");
        }
        get currentAuthorization() {
          return e8(this, N, "f");
        }
        get cachedAuthorizationResult() {
          return e8(this, L, "f").get();
        }
      }
      ((p = new WeakMap()),
        (y = new WeakMap()),
        (m = new WeakMap()),
        (M = new WeakMap()),
        (v = new WeakMap()),
        (E = new WeakMap()),
        (N = new WeakMap()),
        (L = new WeakMap()),
        (b = new WeakMap()),
        (I = new WeakMap()),
        (j = new WeakMap()),
        (A = new WeakMap()),
        (S = new WeakMap()),
        (T = new WeakMap()),
        (k = new WeakMap()),
        (z = new WeakMap()),
        (O = new WeakMap()),
        (C = new WeakMap()),
        (_ = new WeakMap()),
        (R = new WeakMap()),
        (U = new WeakMap()),
        (P = new WeakMap()),
        (W = new WeakMap()),
        (B = new WeakMap()),
        (Y = new WeakMap()),
        (Q = new WeakMap()),
        (K = new WeakMap()),
        (F = new WeakMap()),
        (Z = new WeakMap()),
        (H = new WeakMap()),
        (G = new WeakMap()),
        (w = new WeakSet()),
        (x = function (e, ...t) {
          var n;
          null == (n = e8(this, p, "f")[e]) || n.forEach((e) => e.apply(null, t));
        }),
        (D = function (e, t) {
          var n;
          e8(this, p, "f")[e] =
            null == (n = e8(this, p, "f")[e]) ? void 0 : n.filter((e) => t !== e);
        }),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakSet());
      (Event, new WeakMap());
      class ts extends tt {
        constructor() {
          (super(...arguments), (this.contentStyles = tc), (this.contentHtml = tl));
        }
        initWithError(e) {
          (super.init(), this.populateError(e));
        }
        populateError(e) {
          var t, n;
          let r =
              null == (t = this.dom)
                ? void 0
                : t.getElementById("mobile-wallet-adapter-error-message"),
            i =
              null == (n = this.dom)
                ? void 0
                : n.getElementById("mobile-wallet-adapter-error-action");
          if (r) {
            if ("SolanaMobileWalletAdapterError" === e.name)
              switch (e.code) {
                case "ERROR_WALLET_NOT_FOUND":
                  ((r.innerHTML =
                    "To use mobile wallet adapter, you must have a compatible mobile wallet application installed on your device."),
                    i &&
                      i.addEventListener("click", () => {
                        window.location.href = "https://solanamobile.com/wallets";
                      }));
                  return;
                case "ERROR_BROWSER_NOT_SUPPORTED":
                  ((r.innerHTML =
                    "This browser appears to be incompatible with mobile wallet adapter. Open this page in a compatible mobile browser app and try again."),
                    i && (i.style.display = "none"));
                  return;
              }
            r.innerHTML = `An unexpected error occurred: ${e.message}`;
          } else console.log("Failed to locate error dialog element");
        }
      }
      let tl = `
<svg class="mobile-wallet-adapter-embedded-modal-error-icon" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#000000"><path d="M 280,-80 Q 197,-80 138.5,-138.5 80,-197 80,-280 80,-363 138.5,-421.5 197,-480 280,-480 q 83,0 141.5,58.5 58.5,58.5 58.5,141.5 0,83 -58.5,141.5 Q 363,-80 280,-80 Z M 824,-120 568,-376 Q 556,-389 542.5,-402.5 529,-416 516,-428 q 38,-24 61,-64 23,-40 23,-88 0,-75 -52.5,-127.5 Q 495,-760 420,-760 345,-760 292.5,-707.5 240,-655 240,-580 q 0,6 0.5,11.5 0.5,5.5 1.5,11.5 -18,2 -39.5,8 -21.5,6 -38.5,14 -2,-11 -3,-22 -1,-11 -1,-23 0,-109 75.5,-184.5 Q 311,-840 420,-840 q 109,0 184.5,75.5 75.5,75.5 75.5,184.5 0,43 -13.5,81.5 Q 653,-460 629,-428 l 251,252 z m -615,-61 71,-71 70,71 29,-28 -71,-71 71,-71 -28,-28 -71,71 -71,-71 -28,28 71,71 -71,71 z"/></svg>
<div class="mobile-wallet-adapter-embedded-modal-title">We can't find a wallet.</div>
<div id="mobile-wallet-adapter-error-message" class="mobile-wallet-adapter-embedded-modal-subtitle"></div>
<div>
    <button data-error-action id="mobile-wallet-adapter-error-action" class="mobile-wallet-adapter-embedded-modal-error-action">
        Find a wallet
    </button>
</div>
`,
        tc = `
.mobile-wallet-adapter-embedded-modal-content {
    text-align: center;
}

.mobile-wallet-adapter-embedded-modal-error-icon {
    margin-top: 24px;
}

.mobile-wallet-adapter-embedded-modal-title {
    margin: 18px 100px auto 100px;
    color: #000000;
    font-size: 2.75em;
    font-weight: 600;
}

.mobile-wallet-adapter-embedded-modal-subtitle {
    margin: 30px 60px 40px 60px;
    color: #000000;
    font-size: 1.25em;
    font-weight: 400;
}

.mobile-wallet-adapter-embedded-modal-error-action {
    display: block;
    width: 100%;
    height: 56px;
    /*margin-top: 40px;*/
    font-size: 1.25em;
    /*line-height: 24px;*/
    /*letter-spacing: -1%;*/
    background: #000000;
    color: #FFFFFF;
    border-radius: 18px;
}

/* Smaller screens */
@media all and (max-width: 600px) {
    .mobile-wallet-adapter-embedded-modal-title {
        font-size: 1.5em;
        margin-right: 12px;
        margin-left: 12px;
    }
    .mobile-wallet-adapter-embedded-modal-subtitle {
        margin-right: 12px;
        margin-left: 12px;
    }
}
`,
        tu = "SolanaMobileWalletAdapterDefaultAuthorizationCache";
      function td(e, t, n, r) {
        return new (n || (n = Promise))(function (i, a) {
          function o(e) {
            try {
              l(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(o, s);
          }
          l((r = r.apply(e, t || [])).next());
        });
      }
      function th(e, t, n, r) {
        if ("a" === n && !r) throw TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e))
          throw TypeError(
            "Cannot read private member from an object whose class did not declare it"
          );
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
      }
      function tf(e, t, n, r, i) {
        if ("m" === r) throw TypeError("Private method is not writable");
        if ("a" === r && !i) throw TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !i : !t.has(e))
          throw TypeError(
            "Cannot write private member to an object whose class did not declare it"
          );
        return ("a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n);
      }
      let tg = "standard:connect";
      function tw(e) {
        return window.btoa(String.fromCharCode.call(null, ...e));
      }
      function tp(e) {
        switch (e) {
          case "mainnet-beta":
            return "solana:mainnet";
          case "testnet":
            return "solana:testnet";
          case "devnet":
            return "solana:devnet";
          default:
            return e;
        }
      }
      class ty extends eS.Xl {
        constructor(e, t) {
          (super(),
            V.add(this),
            (this.supportedTransactionVersions = new Set(["legacy", 0])),
            q.set(this, void 0),
            J.set(this, !1),
            $.set(
              this,
              "undefined" != typeof window &&
                window.isSecureContext &&
                "undefined" != typeof document &&
                /android/i.test(navigator.userAgent)
                ? eT.Ok.Loadable
                : eT.Ok.Unsupported
            ),
            X.set(this, void 0),
            ee.set(this, void 0),
            et.set(this, void 0),
            en.set(this, (e) =>
              td(this, void 0, void 0, function* () {
                if (e.accounts && e.accounts.length > 0) {
                  th(this, V, "m", ei).call(this);
                  let t = yield th(this, X, "f").call(this, e.accounts);
                  t !== th(this, ee, "f") &&
                    (tf(this, ee, t, "f"),
                    tf(this, et, void 0, "f"),
                    this.emit("connect", this.publicKey));
                }
              })
            ),
            tf(
              this,
              X,
              (e) =>
                td(this, void 0, void 0, function* () {
                  var n;
                  let r = yield t.addressSelector.select(e.map(({ publicKey: e }) => tw(e)));
                  return null != (n = e.find(({ publicKey: e }) => tw(e) === r)) ? n : e[0];
                }),
              "f"
            ),
            tf(this, q, e, "f"),
            th(this, q, "f").features["standard:events"].on("change", th(this, en, "f")),
            (this.name = th(this, q, "f").name),
            (this.icon = th(this, q, "f").icon),
            (this.url = th(this, q, "f").url));
        }
        get publicKey() {
          var e;
          if (!th(this, et, "f") && th(this, ee, "f"))
            try {
              tf(this, et, new ex.J3(th(this, ee, "f").publicKey), "f");
            } catch (e) {
              throw new ek.Kd(
                (e instanceof Error && (null == e ? void 0 : e.message)) || "Unknown error",
                e
              );
            }
          return null != (e = th(this, et, "f")) ? e : null;
        }
        get connected() {
          return th(this, q, "f").connected;
        }
        get connecting() {
          return th(this, J, "f");
        }
        get readyState() {
          return th(this, $, "f");
        }
        autoConnect_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
          return td(this, void 0, void 0, function* () {
            return yield this.autoConnect();
          });
        }
        autoConnect() {
          return td(this, void 0, void 0, function* () {
            th(this, V, "m", er).call(this, !0);
          });
        }
        connect() {
          return td(this, void 0, void 0, function* () {
            th(this, V, "m", er).call(this);
          });
        }
        performAuthorization(e) {
          return td(this, void 0, void 0, function* () {
            try {
              let t = yield th(this, q, "f").cachedAuthorizationResult;
              if (t) return (yield th(this, q, "f").features[tg].connect({ silent: !0 }), t);
              return (
                e
                  ? yield th(this, q, "f").features[eD].signIn(e)
                  : yield th(this, q, "f").features[tg].connect(),
                yield yield th(this, q, "f").cachedAuthorizationResult
              );
            } catch (e) {
              throw new ek.Y6((e instanceof Error && e.message) || "Unknown error", e);
            }
          });
        }
        disconnect() {
          return td(this, void 0, void 0, function* () {
            return yield th(this, V, "m", es).call(this, () =>
              td(this, void 0, void 0, function* () {
                (tf(this, J, !1, "f"),
                  tf(this, et, void 0, "f"),
                  tf(this, ee, void 0, "f"),
                  yield th(this, q, "f").features["standard:disconnect"].disconnect(),
                  this.emit("disconnect"));
              })
            );
          });
        }
        signIn(e) {
          return td(this, void 0, void 0, function* () {
            return th(this, V, "m", es).call(this, () =>
              td(this, void 0, void 0, function* () {
                var t;
                if (th(this, $, "f") !== eT.Ok.Installed && th(this, $, "f") !== eT.Ok.Loadable)
                  throw new ek.AE();
                tf(this, J, !0, "f");
                try {
                  let n = yield th(this, q, "f").features[eD].signIn(
                    Object.assign(Object.assign({}, e), {
                      domain:
                        null != (t = null == e ? void 0 : e.domain) ? t : window.location.host,
                    })
                  );
                  if (n.length > 0) return n[0];
                  throw Error("Sign in failed, no sign in result returned by wallet");
                } catch (e) {
                  throw new ek.Y6((e instanceof Error && e.message) || "Unknown error", e);
                } finally {
                  tf(this, J, !1, "f");
                }
              })
            );
          });
        }
        signMessage(e) {
          return td(this, void 0, void 0, function* () {
            return yield th(this, V, "m", es).call(this, () =>
              td(this, void 0, void 0, function* () {
                let t = th(this, V, "m", ea).call(this);
                try {
                  return (yield th(this, q, "f").features[ez.F].signMessage({
                    account: t,
                    message: e,
                  }))[0].signature;
                } catch (e) {
                  throw new ek.K3(null == e ? void 0 : e.message, e);
                }
              })
            );
          });
        }
        sendTransaction(e, t, n) {
          return td(this, void 0, void 0, function* () {
            return yield th(this, V, "m", es).call(this, () =>
              td(this, void 0, void 0, function* () {
                let r = th(this, V, "m", ea).call(this);
                try {
                  if (eO.R in th(this, q, "f").features) {
                    let t = tp(th(this, q, "f").currentAuthorization.chain),
                      [i] = (yield th(this, q, "f").features[eO.R].signAndSendTransaction({
                        account: r,
                        transaction: e.serialize(),
                        chain: t,
                        options: n
                          ? { skipPreflight: n.skipPreflight, maxRetries: n.maxRetries }
                          : void 0,
                      })).map((e) => tw(e.signature));
                    return i;
                  }
                  {
                    let [r] = yield th(this, V, "m", eo).call(this, [e]);
                    if ("version" in r) return yield t.sendTransaction(r);
                    {
                      let e = r.serialize();
                      return yield t.sendRawTransaction(
                        e,
                        Object.assign(Object.assign({}, n), {
                          preflightCommitment: (function () {
                            let e, r;
                            switch (t.commitment) {
                              case "confirmed":
                              case "finalized":
                              case "processed":
                                e = t.commitment;
                                break;
                              default:
                                e = "finalized";
                            }
                            switch (null == n ? void 0 : n.preflightCommitment) {
                              case "confirmed":
                              case "finalized":
                              case "processed":
                                r = n.preflightCommitment;
                                break;
                              case void 0:
                                r = e;
                                break;
                              default:
                                r = "finalized";
                            }
                            let i = "finalized" === r ? 2 : +("confirmed" === r),
                              a = "finalized" === e ? 2 : +("confirmed" === e);
                            return i < a ? r : e;
                          })(),
                        })
                      );
                    }
                  }
                } catch (e) {
                  throw new ek.UF(null == e ? void 0 : e.message, e);
                }
              })
            );
          });
        }
        signTransaction(e) {
          return td(this, void 0, void 0, function* () {
            return yield th(this, V, "m", es).call(this, () =>
              td(this, void 0, void 0, function* () {
                let [t] = yield th(this, V, "m", eo).call(this, [e]);
                return t;
              })
            );
          });
        }
        signAllTransactions(e) {
          return td(this, void 0, void 0, function* () {
            return yield th(this, V, "m", es).call(this, () =>
              td(this, void 0, void 0, function* () {
                return yield th(this, V, "m", eo).call(this, e);
              })
            );
          });
        }
      }
      ((q = new WeakMap()),
        (J = new WeakMap()),
        ($ = new WeakMap()),
        (X = new WeakMap()),
        (ee = new WeakMap()),
        (et = new WeakMap()),
        (en = new WeakMap()),
        (V = new WeakSet()),
        (er = function (e = !1) {
          return td(this, void 0, void 0, function* () {
            if (!this.connecting && !this.connected)
              return yield th(this, V, "m", es).call(this, () =>
                td(this, void 0, void 0, function* () {
                  if (th(this, $, "f") !== eT.Ok.Installed && th(this, $, "f") !== eT.Ok.Loadable)
                    throw new ek.AE();
                  tf(this, J, !0, "f");
                  try {
                    yield th(this, q, "f").features[tg].connect({ silent: e });
                  } catch (e) {
                    throw new ek.Y6((e instanceof Error && e.message) || "Unknown error", e);
                  } finally {
                    tf(this, J, !1, "f");
                  }
                })
              );
          });
        }),
        (ei = function () {
          th(this, $, "f") !== eT.Ok.Installed &&
            this.emit("readyStateChange", tf(this, $, eT.Ok.Installed, "f"));
        }),
        (ea = function () {
          if (!th(this, q, "f").isAuthorized || !th(this, ee, "f")) throw new ek.kW();
          return th(this, ee, "f");
        }),
        (eo = function (e) {
          return td(this, void 0, void 0, function* () {
            let t = th(this, V, "m", ea).call(this);
            try {
              if (eC.q in th(this, q, "f").features)
                return th(this, q, "f")
                  .features[eC.q].signTransaction(
                    ...e.map((e) => ({ account: t, transaction: e.serialize() }))
                  )
                  .then((e) =>
                    e.map((e) => {
                      let t = e.signedTransaction,
                        n = t[0],
                        r = ex.B2.deserializeMessageVersion(t.slice(64 * n + 1, t.length));
                      return "legacy" === r ? ex.ZX.from(t) : ex.Kt.deserialize(t);
                    })
                  );
              throw Error("Connected wallet does not support signing transactions");
            } catch (e) {
              throw new ek.z4(null == e ? void 0 : e.message, e);
            }
          });
        }),
        (es = function (e) {
          return td(this, void 0, void 0, function* () {
            try {
              return yield e();
            } catch (e) {
              throw (this.emit("error", e), e);
            }
          });
        }));
      class tm extends ty {
        constructor(e) {
          var t;
          let n = tp(null != (t = e.chain) ? t : e.cluster);
          super(
            new to({
              appIdentity: e.appIdentity,
              authorizationCache: {
                set: e.authorizationResultCache.set,
                get: () =>
                  td(this, void 0, void 0, function* () {
                    return yield e.authorizationResultCache.get();
                  }),
                clear: e.authorizationResultCache.clear,
              },
              chains: [n],
              chainSelector: {
                select(e) {
                  return e3(this, void 0, void 0, function* () {
                    return 1 === e.length ? e[0] : e.includes(e5.CE) ? e5.CE : e[0];
                  });
                },
              },
              onWalletNotFound: () =>
                td(this, void 0, void 0, function* () {
                  e.onWalletNotFound(this);
                }),
            }),
            { addressSelector: e.addressSelector, chain: n }
          );
        }
      }
      class tM extends tm {}
      function tv(e) {
        return td(this, void 0, void 0, function* () {
          return (function () {
            return e3(this, void 0, void 0, function* () {
              if ("undefined" != typeof window) {
                let e = window.navigator.userAgent.toLowerCase(),
                  t = new ts();
                (e.includes("wv")
                  ? t.initWithError({
                      name: "SolanaMobileWalletAdapterError",
                      code: "ERROR_BROWSER_NOT_SUPPORTED",
                      message: "",
                    })
                  : t.initWithError({
                      name: "SolanaMobileWalletAdapterError",
                      code: "ERROR_WALLET_NOT_FOUND",
                      message: "",
                    }),
                  t.open());
              }
            });
          })();
        });
      }
      let tE = function (e) {
        return (
          e0.u in e.features && e2.j in e.features && (eO.R in e.features || eC.q in e.features)
        );
      };
      var tN = n(51901);
      function tL(e) {
        switch (e) {
          case "processed":
          case "confirmed":
          case "finalized":
          case void 0:
            return e;
          case "recent":
            return "processed";
          case "single":
          case "singleGossip":
            return "confirmed";
          case "max":
          case "root":
            return "finalized";
          default:
            return;
        }
      }
      (new WeakMap(), new WeakMap(), new WeakMap(), new WeakMap(), new WeakMap(), new WeakMap());
      let tb = (function (e) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        let t = new Uint8Array(256);
        for (let e = 0; e < t.length; e++) t[e] = 255;
        for (let n = 0; n < e.length; n++) {
          let r = e.charAt(n),
            i = r.charCodeAt(0);
          if (255 !== t[i]) throw TypeError(r + " is ambiguous");
          t[i] = n;
        }
        let n = e.length,
          r = e.charAt(0),
          i = Math.log(n) / Math.log(256),
          a = Math.log(256) / Math.log(n);
        function o(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          let a = 0,
            o = 0,
            s = 0;
          for (; e[a] === r; ) (o++, a++);
          let l = ((e.length - a) * i + 1) >>> 0,
            c = new Uint8Array(l);
          for (; a < e.length; ) {
            let r = e.charCodeAt(a);
            if (r > 255) return;
            let i = t[r];
            if (255 === i) return;
            let o = 0;
            for (let e = l - 1; (0 !== i || o < s) && -1 !== e; e--, o++)
              ((i += (n * c[e]) >>> 0), (c[e] = (i % 256) >>> 0), (i = (i / 256) >>> 0));
            if (0 !== i) throw Error("Non-zero carry");
            ((s = o), a++);
          }
          let u = l - s;
          for (; u !== l && 0 === c[u]; ) u++;
          let d = new Uint8Array(o + (l - u)),
            h = o;
          for (; u !== l; ) d[h++] = c[u++];
          return d;
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === t.length) return "";
            let i = 0,
              o = 0,
              s = 0,
              l = t.length;
            for (; s !== l && 0 === t[s]; ) (s++, i++);
            let c = ((l - s) * a + 1) >>> 0,
              u = new Uint8Array(c);
            for (; s !== l; ) {
              let e = t[s],
                r = 0;
              for (let t = c - 1; (0 !== e || r < o) && -1 !== t; t--, r++)
                ((e += (256 * u[t]) >>> 0), (u[t] = (e % n) >>> 0), (e = (e / n) >>> 0));
              if (0 !== e) throw Error("Non-zero carry");
              ((o = r), s++);
            }
            let d = c - o;
            for (; d !== c && 0 === u[d]; ) d++;
            let h = r.repeat(i);
            for (; d < c; ++d) h += e.charAt(u[d]);
            return h;
          },
          decodeUnsafe: o,
          decode: function (e) {
            let t = o(e);
            if (t) return t;
            throw Error("Non-base" + n + " character");
          },
        };
      })("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
      var tI = function (e, t, n, r) {
          if ("a" === n && !r) throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        },
        tj = function (e, t, n, r, i) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !i) throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return ("a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n);
        };
      class tA extends eT.Ce {
        get name() {
          return tI(this, ew, "f").name;
        }
        get url() {
          return "https://github.com/solana-labs/wallet-standard";
        }
        get icon() {
          return tI(this, ew, "f").icon;
        }
        get readyState() {
          return tI(this, ep, "f");
        }
        get publicKey() {
          return tI(this, eu, "f");
        }
        get connecting() {
          return tI(this, ed, "f");
        }
        get supportedTransactionVersions() {
          return tI(this, eg, "f");
        }
        get wallet() {
          return tI(this, ew, "f");
        }
        get standard() {
          return !0;
        }
        constructor({ wallet: e }) {
          (super(),
            el.add(this),
            ec.set(this, void 0),
            eu.set(this, void 0),
            ed.set(this, void 0),
            eh.set(this, void 0),
            ef.set(this, void 0),
            eg.set(this, void 0),
            ew.set(this, void 0),
            ep.set(
              this,
              "undefined" == typeof window || "undefined" == typeof document
                ? eT.Ok.Unsupported
                : eT.Ok.Installed
            ),
            eE.set(this, (e) => {
              if ("accounts" in e) {
                let e = tI(this, ew, "f").accounts[0];
                tI(this, ec, "f") &&
                  !tI(this, eh, "f") &&
                  e !== tI(this, ec, "f") &&
                  (e
                    ? tI(this, el, "m", em).call(this, e)
                    : (this.emit("error", new ek.PQ()), tI(this, el, "m", eM).call(this)));
              }
              "features" in e && tI(this, el, "m", ev).call(this);
            }),
            tj(this, ew, e, "f"),
            tj(this, ec, null, "f"),
            tj(this, eu, null, "f"),
            tj(this, ed, !1, "f"),
            tj(this, eh, !1, "f"),
            tj(this, ef, tI(this, ew, "f").features[e2.j].on("change", tI(this, eE, "f")), "f"),
            tI(this, el, "m", ev).call(this));
        }
        destroy() {
          (tj(this, ec, null, "f"),
            tj(this, eu, null, "f"),
            tj(this, ed, !1, "f"),
            tj(this, eh, !1, "f"));
          let e = tI(this, ef, "f");
          e && (tj(this, ef, null, "f"), e());
        }
        async autoConnect() {
          return tI(this, el, "m", ey).call(this, { silent: !0 });
        }
        async connect() {
          return tI(this, el, "m", ey).call(this);
        }
        async disconnect() {
          if (e1.w in tI(this, ew, "f").features)
            try {
              (tj(this, eh, !0, "f"), await tI(this, ew, "f").features[e1.w].disconnect());
            } catch (e) {
              this.emit("error", new ek.Y8(e?.message, e));
            } finally {
              tj(this, eh, !1, "f");
            }
          tI(this, el, "m", eM).call(this);
        }
        async sendTransaction(e, t, n = {}) {
          try {
            var r;
            let i,
              a = tI(this, ec, "f");
            if (!a) throw new ek.kW();
            if (eO.R in tI(this, ew, "f").features)
              if (a.features.includes(eO.R)) i = eO.R;
              else if (eC.q in tI(this, ew, "f").features && a.features.includes(eC.q)) i = eC.q;
              else throw new ek.fk();
            else if (eC.q in tI(this, ew, "f").features) {
              if (!a.features.includes(eC.q)) throw new ek.fk();
              i = eC.q;
            } else throw new ek.Ez();
            let o = (r = t.rpcEndpoint).includes("https://api.mainnet-beta.solana.com")
              ? e5.CE
              : /\bdevnet\b/i.test(r)
                ? e5.sE
                : /\btestnet\b/i.test(r)
                  ? e5.re
                  : /\blocalhost\b/i.test(r) || /\b127\.0\.0\.1\b/.test(r)
                    ? e5.g4
                    : e5.CE;
            if (!a.chains.includes(o)) throw new ek.UF();
            try {
              let r,
                { signers: s, ...l } = n;
              if (
                ((0, tN.Y)(e)
                  ? (s?.length && e.sign(s), (r = e.serialize()))
                  : ((e = await this.prepareTransaction(e, t, l)),
                    s?.length && e.partialSign(...s),
                    (r = new Uint8Array(
                      e.serialize({ requireAllSignatures: !1, verifySignatures: !1 })
                    ))),
                i === eO.R)
              ) {
                let [e] = await tI(this, ew, "f").features[eO.R].signAndSendTransaction({
                  account: a,
                  chain: o,
                  transaction: r,
                  options: {
                    preflightCommitment: tL(l.preflightCommitment || t.commitment),
                    skipPreflight: l.skipPreflight,
                    maxRetries: l.maxRetries,
                    minContextSlot: l.minContextSlot,
                  },
                });
                return tb.encode(e.signature);
              }
              {
                let [e] = await tI(this, ew, "f").features[eC.q].signTransaction({
                  account: a,
                  chain: o,
                  transaction: r,
                  options: {
                    preflightCommitment: tL(l.preflightCommitment || t.commitment),
                    minContextSlot: l.minContextSlot,
                  },
                });
                return await t.sendRawTransaction(e.signedTransaction, {
                  ...l,
                  preflightCommitment: tL(l.preflightCommitment || t.commitment),
                });
              }
            } catch (e) {
              if (e instanceof ek.m7) throw e;
              throw new ek.UF(e?.message, e);
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
      }
      ((ec = new WeakMap()),
        (eu = new WeakMap()),
        (ed = new WeakMap()),
        (eh = new WeakMap()),
        (ef = new WeakMap()),
        (eg = new WeakMap()),
        (ew = new WeakMap()),
        (ep = new WeakMap()),
        (eE = new WeakMap()),
        (el = new WeakSet()),
        (ey = async function (e) {
          try {
            if (this.connected || this.connecting) return;
            if (tI(this, ep, "f") !== eT.Ok.Installed) throw new ek.AE();
            if ((tj(this, ed, !0, "f"), !tI(this, ew, "f").accounts.length))
              try {
                await tI(this, ew, "f").features[e0.u].connect(e);
              } catch (e) {
                throw new ek.Y6(e?.message, e);
              }
            let t = tI(this, ew, "f").accounts[0];
            if (!t) throw new ek.fk();
            tI(this, el, "m", em).call(this, t);
          } catch (e) {
            throw (this.emit("error", e), e);
          } finally {
            tj(this, ed, !1, "f");
          }
        }),
        (em = function (e) {
          let t;
          try {
            t = new ex.J3(e.address);
          } catch (e) {
            throw new ek.Kd(e?.message, e);
          }
          (tj(this, ec, e, "f"),
            tj(this, eu, t, "f"),
            tI(this, el, "m", ev).call(this),
            this.emit("connect", t));
        }),
        (eM = function () {
          (tj(this, ec, null, "f"),
            tj(this, eu, null, "f"),
            tI(this, el, "m", ev).call(this),
            this.emit("disconnect"));
        }),
        (ev = function () {
          let e =
            eO.R in tI(this, ew, "f").features
              ? tI(this, ew, "f").features[eO.R].supportedTransactionVersions
              : tI(this, ew, "f").features[eC.q].supportedTransactionVersions;
          (tj(
            this,
            eg,
            !(function (e, t) {
              if (e === t) return !0;
              let n = e.length;
              if (n !== t.length) return !1;
              for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
              return !0;
            })(e, ["legacy"])
              ? new Set(e)
              : null,
            "f"
          ),
            eC.q in tI(this, ew, "f").features && tI(this, ec, "f")?.features.includes(eC.q)
              ? ((this.signTransaction = tI(this, el, "m", eN)),
                (this.signAllTransactions = tI(this, el, "m", eL)))
              : (delete this.signTransaction, delete this.signAllTransactions),
            ez.F in tI(this, ew, "f").features && tI(this, ec, "f")?.features.includes(ez.F)
              ? (this.signMessage = tI(this, el, "m", eb))
              : delete this.signMessage,
            eD in tI(this, ew, "f").features
              ? (this.signIn = tI(this, el, "m", eI))
              : delete this.signIn);
        }),
        (eN = async function (e) {
          try {
            let t = tI(this, ec, "f");
            if (!t) throw new ek.kW();
            if (!(eC.q in tI(this, ew, "f").features)) throw new ek.Ez();
            if (!t.features.includes(eC.q)) throw new ek.fk();
            try {
              let n = (
                await tI(this, ew, "f").features[eC.q].signTransaction({
                  account: t,
                  transaction: (0, tN.Y)(e)
                    ? e.serialize()
                    : new Uint8Array(
                        e.serialize({ requireAllSignatures: !1, verifySignatures: !1 })
                      ),
                })
              )[0].signedTransaction;
              return (0, tN.Y)(e) ? ex.Kt.deserialize(n) : ex.ZX.from(n);
            } catch (e) {
              if (e instanceof ek.m7) throw e;
              throw new ek.z4(e?.message, e);
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }),
        (eL = async function (e) {
          try {
            let t = tI(this, ec, "f");
            if (!t) throw new ek.kW();
            if (!(eC.q in tI(this, ew, "f").features)) throw new ek.Ez();
            if (!t.features.includes(eC.q)) throw new ek.fk();
            try {
              let n = await tI(this, ew, "f").features[eC.q].signTransaction(
                ...e.map((e) => ({
                  account: t,
                  transaction: (0, tN.Y)(e)
                    ? e.serialize()
                    : new Uint8Array(
                        e.serialize({ requireAllSignatures: !1, verifySignatures: !1 })
                      ),
                }))
              );
              return e.map((e, t) => {
                let r = n[t].signedTransaction;
                return (0, tN.Y)(e) ? ex.Kt.deserialize(r) : ex.ZX.from(r);
              });
            } catch (e) {
              throw new ek.z4(e?.message, e);
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }),
        (eb = async function (e) {
          try {
            let t = tI(this, ec, "f");
            if (!t) throw new ek.kW();
            if (!(ez.F in tI(this, ew, "f").features)) throw new ek.Ez();
            if (!t.features.includes(ez.F)) throw new ek.fk();
            try {
              return (
                await tI(this, ew, "f").features[ez.F].signMessage({ account: t, message: e })
              )[0].signature;
            } catch (e) {
              throw new ek.K3(e?.message, e);
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }),
        (eI = async function (e = {}) {
          try {
            let t;
            if (!(eD in tI(this, ew, "f").features)) throw new ek.Ez();
            try {
              [t] = await tI(this, ew, "f").features[eD].signIn(e);
            } catch (e) {
              throw new ek.o7(e?.message, e);
            }
            if (!t) throw new ek.o7();
            return (tI(this, el, "m", em).call(this, t.account), t);
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }));
      var tS = function (e, t, n, r) {
          if ("a" === n && !r) throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
        },
        tT = function (e, t, n, r, i) {
          if ("m" === r) throw TypeError("Private method is not writable");
          if ("a" === r && !i) throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return ("a" === r ? i.call(e, n) : i ? (i.value = n) : t.set(e, n), n);
        };
      let tk = new Set(),
        tx = {};
      function tD(...e) {
        return (e = e.filter((e) => !tk.has(e))).length
          ? (e.forEach((e) => {
              ((i = void 0), tk.add(e));
            }),
            tx.register?.forEach((t) => tC(() => t(...e))),
            function () {
              (e.forEach((e) => {
                ((i = void 0), tk.delete(e));
              }),
                tx.unregister?.forEach((t) => tC(() => t(...e))));
            })
          : () => {};
      }
      function tz() {
        return (i || (i = [...tk]), i);
      }
      function tO(e, t) {
        return (
          tx[e]?.push(t) || (tx[e] = [t]),
          function () {
            tx[e] = tx[e]?.filter((e) => t !== e);
          }
        );
      }
      function tC(e) {
        try {
          e();
        } catch (e) {
          console.error(e);
        }
      }
      class t_ extends Event {
        get detail() {
          return tS(this, ej, "f");
        }
        get type() {
          return "wallet-standard:app-ready";
        }
        constructor(e) {
          (super("wallet-standard:app-ready", { bubbles: !1, cancelable: !1, composed: !1 }),
            ej.set(this, void 0),
            tT(this, ej, e, "f"));
        }
        preventDefault() {
          throw Error("preventDefault cannot be called");
        }
        stopImmediatePropagation() {
          throw Error("stopImmediatePropagation cannot be called");
        }
        stopPropagation() {
          throw Error("stopPropagation cannot be called");
        }
      }
      ej = new WeakMap();
      var tR = n(12115);
      function tU(e) {
        let t = (0, tR.useRef)(void 0);
        return (void 0 === t.current && (t.current = { value: e() }), t.current.value);
      }
      function tP(e) {
        return e.filter(tE).map((e) => new tA({ wallet: e }));
      }
      !(function (e) {
        ((e[(e.DESKTOP_WEB = 0)] = "DESKTOP_WEB"), (e[(e.MOBILE_WEB = 1)] = "MOBILE_WEB"));
      })(eA || (eA = {}));
      var tW = n(84034);
      class tB extends ek.m7 {
        constructor() {
          (super(...arguments), (this.name = "WalletNotSelectedError"));
        }
      }
      var tY = n(55955);
      function tQ({
        children: e,
        wallets: t,
        adapter: n,
        isUnloadingRef: r,
        onAutoConnectRequest: i,
        onConnectError: a,
        onError: o,
        onSelectWallet: s,
      }) {
        let l = (0, tR.useRef)(!1),
          [c, u] = (0, tR.useState)(!1),
          d = (0, tR.useRef)(!1),
          [h, f] = (0, tR.useState)(!1),
          [g, w] = (0, tR.useState)(() => n?.publicKey ?? null),
          [p, y] = (0, tR.useState)(() => n?.connected ?? !1),
          m = (0, tR.useRef)(o);
        (0, tR.useEffect)(
          () => (
            (m.current = o),
            () => {
              m.current = void 0;
            }
          ),
          [o]
        );
        let M = (0, tR.useRef)(
            (e, t) => (
              !r.current &&
                (m.current
                  ? m.current(e, t)
                  : (console.error(e, t),
                    e instanceof ek.AE &&
                      "undefined" != typeof window &&
                      t &&
                      window.open(t.url, "_blank"))),
              e
            )
          ),
          [v, E] = (0, tR.useState)(() =>
            t
              .map((e) => ({ adapter: e, readyState: e.readyState }))
              .filter(({ readyState: e }) => e !== eT.Ok.Unsupported)
          );
        (0, tR.useEffect)(() => {
          function e(e) {
            E((t) => {
              let n = t.findIndex(({ adapter: e }) => e === this);
              if (-1 === n) return t;
              let { adapter: r } = t[n];
              return [...t.slice(0, n), { adapter: r, readyState: e }, ...t.slice(n + 1)].filter(
                ({ readyState: e }) => e !== eT.Ok.Unsupported
              );
            });
          }
          return (
            E((e) =>
              t
                .map((t, n) => {
                  let r = e[n];
                  return r && r.adapter === t && r.readyState === t.readyState
                    ? r
                    : { adapter: t, readyState: t.readyState };
                })
                .filter(({ readyState: e }) => e !== eT.Ok.Unsupported)
            ),
            t.forEach((t) => t.on("readyStateChange", e, t)),
            () => {
              t.forEach((t) => t.off("readyStateChange", e, t));
            }
          );
        }, [n, t]);
        let N = (0, tR.useMemo)(() => v.find((e) => e.adapter === n) ?? null, [n, v]);
        (0, tR.useEffect)(() => {
          if (!n) return;
          let e = (e) => {
              (w(e), (l.current = !1), u(!1), y(!0), (d.current = !1), f(!1));
            },
            t = () => {
              r.current || (w(null), (l.current = !1), u(!1), y(!1), (d.current = !1), f(!1));
            },
            i = (e) => {
              M.current(e, n);
            };
          return (
            n.on("connect", e),
            n.on("disconnect", t),
            n.on("error", i),
            () => {
              (n.off("connect", e), n.off("disconnect", t), n.off("error", i), t());
            }
          );
        }, [n, r]);
        let L = (0, tR.useRef)(!1);
        ((0, tR.useEffect)(
          () => () => {
            L.current = !1;
          },
          [n]
        ),
          (0, tR.useEffect)(() => {
            L.current ||
              l.current ||
              p ||
              !i ||
              (N?.readyState !== eT.Ok.Installed && N?.readyState !== eT.Ok.Loadable) ||
              ((l.current = !0),
              u(!0),
              (L.current = !0),
              (async function () {
                try {
                  await i();
                } catch {
                  a();
                } finally {
                  (u(!1), (l.current = !1));
                }
              })());
          }, [p, i, a, N]));
        let b = (0, tR.useCallback)(
            async (e, t, r) => {
              if (!n) throw M.current(new tB());
              if (!p) throw M.current(new ek.kW(), n);
              return await n.sendTransaction(e, t, r);
            },
            [n, p]
          ),
          I = (0, tR.useMemo)(
            () =>
              n && "signTransaction" in n
                ? async (e) => {
                    if (!p) throw M.current(new ek.kW(), n);
                    return await n.signTransaction(e);
                  }
                : void 0,
            [n, p]
          ),
          j = (0, tR.useMemo)(
            () =>
              n && "signAllTransactions" in n
                ? async (e) => {
                    if (!p) throw M.current(new ek.kW(), n);
                    return await n.signAllTransactions(e);
                  }
                : void 0,
            [n, p]
          ),
          A = (0, tR.useMemo)(
            () =>
              n && "signMessage" in n
                ? async (e) => {
                    if (!p) throw M.current(new ek.kW(), n);
                    return await n.signMessage(e);
                  }
                : void 0,
            [n, p]
          ),
          S = (0, tR.useMemo)(
            () => (n && "signIn" in n ? async (e) => await n.signIn(e) : void 0),
            [n]
          ),
          T = (0, tR.useCallback)(async () => {
            if (l.current || d.current || N?.adapter.connected) return;
            if (!N) throw M.current(new tB());
            let { adapter: e, readyState: t } = N;
            if (t !== eT.Ok.Installed && t !== eT.Ok.Loadable) throw M.current(new ek.AE(), e);
            ((l.current = !0), u(!0));
            try {
              await e.connect();
            } catch (e) {
              throw (a(), e);
            } finally {
              (u(!1), (l.current = !1));
            }
          }, [a, N]),
          k = (0, tR.useCallback)(async () => {
            if (!d.current && n) {
              ((d.current = !0), f(!0));
              try {
                await n.disconnect();
              } finally {
                (f(!1), (d.current = !1));
              }
            }
          }, [n]);
        return tR.createElement(
          tY.b.Provider,
          {
            value: {
              autoConnect: !!i,
              wallets: v,
              wallet: N,
              publicKey: g,
              connected: p,
              connecting: c,
              disconnecting: h,
              select: s,
              connect: T,
              disconnect: k,
              sendTransaction: b,
              signTransaction: I,
              signAllTransactions: j,
              signMessage: A,
              signIn: S,
            },
          },
          e
        );
      }
      function tK(e) {
        return (
          (function ({ adapters: e, userAgentString: t }) {
            return e.some((e) => e.name !== ti && e.readyState === eT.Ok.Installed)
              ? eA.DESKTOP_WEB
              : t &&
                  /android/i.test(t) &&
                  !/(WebView|Version\/.+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)|; wv\).+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+))/i.test(
                    t
                  )
                ? eA.MOBILE_WEB
                : eA.DESKTOP_WEB;
          })({
            adapters: e,
            userAgentString: (void 0 === a && (a = globalThis.navigator?.userAgent ?? null), a),
          }) === eA.MOBILE_WEB
        );
      }
      function tF({
        children: e,
        wallets: t,
        autoConnect: n,
        localStorageKey: r = "walletName",
        onError: i,
      }) {
        let { connection: a } = (0, tW.w)(),
          s = (function (e) {
            let t = tU(() => new Set()),
              { get: n, on: r } = tU(() =>
                (function () {
                  if (
                    o ||
                    ((o = (function () {
                      if (
                        o ||
                        ((o = Object.freeze({ register: tD, get: tz, on: tO })),
                        "undefined" == typeof window)
                      )
                        return o;
                      let e = Object.freeze({ register: tD });
                      try {
                        window.addEventListener(
                          "wallet-standard:register-wallet",
                          ({ detail: t }) => t(e)
                        );
                      } catch (e) {
                        console.error(
                          "wallet-standard:register-wallet event listener could not be added\n",
                          e
                        );
                      }
                      try {
                        window.dispatchEvent(new t_(e));
                      } catch (e) {
                        console.error(
                          "wallet-standard:app-ready event could not be dispatched\n",
                          e
                        );
                      }
                      return o;
                    })()),
                    "undefined" == typeof window)
                  )
                    return o;
                  let e = window.navigator.wallets || [];
                  if (!Array.isArray(e))
                    return (console.error("window.navigator.wallets is not an array"), o);
                  let { register: t } = o,
                    n = (...e) => e.forEach((e) => tC(() => e({ register: t })));
                  try {
                    Object.defineProperty(window.navigator, "wallets", {
                      value: Object.freeze({ push: n }),
                    });
                  } catch (e) {
                    return (console.error("window.navigator.wallets could not be set"), o);
                  }
                  return (n(...e), o);
                })()
              ),
              [i, a] = (0, tR.useState)(() => tP(n()));
            (0, tR.useEffect)(() => {
              let e = [
                r("register", (...e) => a((t) => [...t, ...tP(e)])),
                r("unregister", (...e) => a((t) => t.filter((t) => e.some((e) => e === t.wallet)))),
              ];
              return () => e.forEach((e) => e());
            }, [r]);
            let s = (function (e) {
              let t = (0, tR.useRef)(void 0);
              return (
                (0, tR.useEffect)(() => {
                  t.current = e;
                }),
                t.current
              );
            })(i);
            return (
              (0, tR.useEffect)(() => {
                if (!s) return;
                let e = new Set(i);
                new Set(s.filter((t) => !e.has(t))).forEach((e) => e.destroy());
              }, [s, i]),
              (0, tR.useEffect)(() => () => i.forEach((e) => e.destroy()), []),
              (0, tR.useMemo)(
                () => [
                  ...i,
                  ...e.filter(
                    ({ name: e }) =>
                      !i.some((t) => t.name === e) ||
                      (t.has(e) ||
                        (t.add(e),
                        console.warn(
                          `${e} was registered as a Standard Wallet. The Wallet Adapter for ${e} can be removed from your app.`
                        )),
                      !1)
                  ),
                ],
                [i, e, t]
              )
            );
          })(t),
          l = (0, tR.useMemo)(() => {
            var e;
            if (!tK(s)) return null;
            let t = s.find((e) => e.name === ti);
            return t
              ? t
              : new tM({
                  addressSelector: {
                    select(e) {
                      return td(this, void 0, void 0, function* () {
                        return e[0];
                      });
                    },
                  },
                  appIdentity: {
                    uri: (function () {
                      let e = globalThis.location;
                      if (e) return `${e.protocol}//${e.host}`;
                    })(),
                  },
                  authorizationResultCache: (function () {
                    let e;
                    try {
                      e = window.localStorage;
                    } catch (e) {}
                    return {
                      clear() {
                        return e3(this, void 0, void 0, function* () {
                          if (e)
                            try {
                              e.removeItem(tu);
                            } catch (e) {}
                        });
                      },
                      get() {
                        return e3(this, void 0, void 0, function* () {
                          if (e)
                            try {
                              let t = JSON.parse(e.getItem(tu));
                              if (!t || !t.accounts) return t || void 0;
                              {
                                let e = t.accounts.map((e) =>
                                  Object.assign(Object.assign({}, e), {
                                    publicKey:
                                      "publicKey" in e
                                        ? new Uint8Array(Object.values(e.publicKey))
                                        : e4.decode(e.address),
                                  })
                                );
                                return Object.assign(Object.assign({}, t), { accounts: e });
                              }
                            } catch (e) {}
                        });
                      },
                      set(t) {
                        return e3(this, void 0, void 0, function* () {
                          if (e)
                            try {
                              e.setItem(tu, JSON.stringify(t));
                            } catch (e) {}
                        });
                      },
                    };
                  })(),
                  cluster: (e = a?.rpcEndpoint)
                    ? /devnet/i.test(e)
                      ? "devnet"
                      : /testnet/i.test(e)
                        ? "testnet"
                        : "mainnet-beta"
                    : "mainnet-beta",
                  onWalletNotFound: tv,
                });
          }, [s, a?.rpcEndpoint]),
          c = (0, tR.useMemo)(() => (null == l || -1 !== s.indexOf(l) ? s : [l, ...s]), [s, l]),
          [u, d] = (function (e, t) {
            let n = (0, tR.useState)(() => {
                try {
                  let t = localStorage.getItem(e);
                  if (t) return JSON.parse(t);
                } catch (e) {
                  "undefined" != typeof window && console.error(e);
                }
                return null;
              }),
              r = n[0],
              i = (0, tR.useRef)(!0);
            return (
              (0, tR.useEffect)(() => {
                if (i.current) {
                  i.current = !1;
                  return;
                }
                try {
                  null === r
                    ? localStorage.removeItem(e)
                    : localStorage.setItem(e, JSON.stringify(r));
                } catch (e) {
                  "undefined" != typeof window && console.error(e);
                }
              }, [r, e]),
              n
            );
          })(r, 0),
          h = (0, tR.useMemo)(() => c.find((e) => e.name === u) ?? null, [c, u]),
          f = (0, tR.useCallback)(
            (e) => {
              u !== e && (h && h.name !== ti && h.disconnect(), d(e));
            },
            [h, d, u]
          );
        (0, tR.useEffect)(() => {
          if (h)
            return (
              h.on("disconnect", e),
              () => {
                h.off("disconnect", e);
              }
            );
          function e() {
            p.current || d(null);
          }
        }, [h, s, d, u]);
        let g = (0, tR.useRef)(!1),
          w = (0, tR.useMemo)(() => {
            if (n && h)
              return async () => {
                (!0 === n || (await n(h))) &&
                  (g.current ? await h.connect() : await h.autoConnect());
              };
          }, [n, h]),
          p = (0, tR.useRef)(!1);
        (0, tR.useEffect)(() => {
          if (u === ti && tK(s)) {
            p.current = !1;
            return;
          }
          function e() {
            p.current = !0;
          }
          return (
            window.addEventListener("beforeunload", e),
            () => {
              window.removeEventListener("beforeunload", e);
            }
          );
        }, [s, u]);
        let y = (0, tR.useCallback)(() => {
            h && f(null);
          }, [h, f]),
          m = (0, tR.useCallback)(
            (e) => {
              ((g.current = !0), f(e));
            },
            [f]
          );
        return tR.createElement(
          tQ,
          {
            wallets: c,
            adapter: h,
            isUnloadingRef: p,
            onAutoConnectRequest: w,
            onConnectError: y,
            onError: i,
            onSelectWallet: m,
          },
          e
        );
      }
    },
    41953: (e, t, n) => {
      let r = n(46342),
        i = r.getBCHDigit(1335);
      t.getEncodedBits = function (e, t) {
        let n = (e.bit << 3) | t,
          a = n << 10;
        for (; r.getBCHDigit(a) - i >= 0; ) a ^= 1335 << (r.getBCHDigit(a) - i);
        return ((n << 10) | a) ^ 21522;
      };
    },
    42452: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => r });
      let r = "solana:signTransaction";
    },
    43743: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("octagon-x", [
        ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
        [
          "path",
          {
            d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
            key: "2d38gg",
          },
        ],
        ["path", { d: "m9 9 6 6", key: "z0biqf" }],
      ]);
    },
    44006: (e, t, n) => {
      let r = n(89158);
      function i(e) {
        ((this.mode = r.BYTE),
          "string" == typeof e
            ? (this.data = new TextEncoder().encode(e))
            : (this.data = new Uint8Array(e)));
      }
      ((i.getBitsLength = function (e) {
        return 8 * e;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (e) {
          for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8);
        }),
        (e.exports = i));
    },
    45221: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("compass", [
        [
          "path",
          {
            d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
            key: "9ktpf1",
          },
        ],
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ]);
    },
    45669: (e, t, n) => {
      "use strict";
      n.d(t, { DE: () => s, Xl: () => l });
      var r = n(51470),
        i = n(36452),
        a = n(51901);
      class o extends r.Ce {
        async sendTransaction(e, t, n = {}) {
          let r = !0;
          try {
            if ((0, a.Y)(e)) {
              if (!this.supportedTransactionVersions)
                throw new i.UF("Sending versioned transactions isn't supported by this wallet");
              if (!this.supportedTransactionVersions.has(e.version))
                throw new i.UF(
                  `Sending transaction version ${e.version} isn't supported by this wallet`
                );
              try {
                let r = (e = await this.signTransaction(e)).serialize();
                return await t.sendRawTransaction(r, n);
              } catch (e) {
                if (e instanceof i.z4) throw ((r = !1), e);
                throw new i.UF(e?.message, e);
              }
            }
            try {
              let { signers: r, ...i } = n;
              ((e = await this.prepareTransaction(e, t, i)), r?.length && e.partialSign(...r));
              let a = (e = await this.signTransaction(e)).serialize();
              return await t.sendRawTransaction(a, i);
            } catch (e) {
              if (e instanceof i.z4) throw ((r = !1), e);
              throw new i.UF(e?.message, e);
            }
          } catch (e) {
            throw (r && this.emit("error", e), e);
          }
        }
        async signAllTransactions(e) {
          for (let t of e)
            if ((0, a.Y)(t)) {
              if (!this.supportedTransactionVersions)
                throw new i.z4("Signing versioned transactions isn't supported by this wallet");
              if (!this.supportedTransactionVersions.has(t.version))
                throw new i.z4(
                  `Signing transaction version ${t.version} isn't supported by this wallet`
                );
            }
          let t = [];
          for (let n of e) t.push(await this.signTransaction(n));
          return t;
        }
      }
      class s extends o {}
      class l extends s {}
    },
    46103: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => r });
      let r = "solana:signMessage";
    },
    46342: (e, t) => {
      let n,
        r = [
          0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901,
          991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611,
          2761, 2876, 3034, 3196, 3362, 3532, 3706,
        ];
      ((t.getSymbolSize = function (e) {
        if (!e) throw Error('"version" cannot be null or undefined');
        if (e < 1 || e > 40) throw Error('"version" should be in range from 1 to 40');
        return 4 * e + 17;
      }),
        (t.getSymbolTotalCodewords = function (e) {
          return r[e];
        }),
        (t.getBCHDigit = function (e) {
          let t = 0;
          for (; 0 !== e; ) (t++, (e >>>= 1));
          return t;
        }),
        (t.setToSJISFunction = function (e) {
          if ("function" != typeof e) throw Error('"toSJISFunc" is not a valid function.');
          n = e;
        }),
        (t.isKanjiModeEnabled = function () {
          return void 0 !== n;
        }),
        (t.toSJIS = function (e) {
          return n(e);
        }));
    },
    46370: (e, t, n) => {
      "use strict";
      n.d(t, { CE: () => r, g4: () => o, re: () => a, sE: () => i });
      let r = "solana:mainnet",
        i = "solana:devnet",
        a = "solana:testnet",
        o = "solana:localnet";
    },
    46591: (e, t, n) => {
      "use strict";
      n.d(t, { H4: () => b, _V: () => L, bL: () => N });
      var r = n(12115),
        i = n(3468),
        a = n(70222),
        o = n(4129),
        s = n(97602),
        l = n(14806);
      function c() {
        return () => {};
      }
      var u = n(95155),
        d = "Avatar",
        [h, f] = (0, i.A)(d),
        [g, w] = h(d),
        p = r.forwardRef((e, t) => {
          let { __scopeAvatar: n, ...i } = e,
            [a, o] = r.useState("idle");
          return (0, u.jsx)(g, {
            scope: n,
            imageLoadingStatus: a,
            onImageLoadingStatusChange: o,
            children: (0, u.jsx)(s.sG.span, { ...i, ref: t }),
          });
        });
      p.displayName = d;
      var y = "AvatarImage",
        m = r.forwardRef((e, t) => {
          let { __scopeAvatar: n, src: i, onLoadingStatusChange: d = () => {}, ...h } = e,
            f = w(y, n),
            g = (function (e, t) {
              let { referrerPolicy: n, crossOrigin: i } = t,
                a = (0, l.useSyncExternalStore)(
                  c,
                  () => !0,
                  () => !1
                ),
                s = r.useRef(null),
                u = a ? (s.current || (s.current = new window.Image()), s.current) : null,
                [d, h] = r.useState(() => E(u, e));
              return (
                (0, o.N)(() => {
                  h(E(u, e));
                }, [u, e]),
                (0, o.N)(() => {
                  let e = (e) => () => {
                    h(e);
                  };
                  if (!u) return;
                  let t = e("loaded"),
                    r = e("error");
                  return (
                    u.addEventListener("load", t),
                    u.addEventListener("error", r),
                    n && (u.referrerPolicy = n),
                    "string" == typeof i && (u.crossOrigin = i),
                    () => {
                      (u.removeEventListener("load", t), u.removeEventListener("error", r));
                    }
                  );
                }, [u, i, n]),
                d
              );
            })(i, h),
            p = (0, a.c)((e) => {
              (d(e), f.onImageLoadingStatusChange(e));
            });
          return (
            (0, o.N)(() => {
              "idle" !== g && p(g);
            }, [g, p]),
            "loaded" === g ? (0, u.jsx)(s.sG.img, { ...h, ref: t, src: i }) : null
          );
        });
      m.displayName = y;
      var M = "AvatarFallback",
        v = r.forwardRef((e, t) => {
          let { __scopeAvatar: n, delayMs: i, ...a } = e,
            o = w(M, n),
            [l, c] = r.useState(void 0 === i);
          return (
            r.useEffect(() => {
              if (void 0 !== i) {
                let e = window.setTimeout(() => c(!0), i);
                return () => window.clearTimeout(e);
              }
            }, [i]),
            l && "loaded" !== o.imageLoadingStatus ? (0, u.jsx)(s.sG.span, { ...a, ref: t }) : null
          );
        });
      function E(e, t) {
        return e
          ? t
            ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading")
            : "error"
          : "idle";
      }
      v.displayName = M;
      var N = p,
        L = m,
        b = v;
    },
    46826: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("circle-plus", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M8 12h8", key: "1wcyev" }],
        ["path", { d: "M12 8v8", key: "napkw2" }],
      ]);
    },
    47670: (e, t, n) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          formatUrl: function () {
            return a;
          },
          formatWithValidation: function () {
            return s;
          },
          urlObjectKeys: function () {
            return o;
          },
        }));
      let r = n(49417)._(n(33078)),
        i = /https?|ftp|gopher|file/;
      function a(e) {
        let { auth: t, hostname: n } = e,
          a = e.protocol || "",
          o = e.pathname || "",
          s = e.hash || "",
          l = e.query || "",
          c = !1;
        ((t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (c = t + e.host)
            : n && ((c = t + (~n.indexOf(":") ? "[" + n + "]" : n)), e.port && (c += ":" + e.port)),
          l && "object" == typeof l && (l = String(r.urlQueryToSearchParams(l))));
        let u = e.search || (l && "?" + l) || "";
        return (
          a && !a.endsWith(":") && (a += ":"),
          e.slashes || ((!a || i.test(a)) && !1 !== c)
            ? ((c = "//" + (c || "")), o && "/" !== o[0] && (o = "/" + o))
            : c || (c = ""),
          s && "#" !== s[0] && (s = "#" + s),
          u && "?" !== u[0] && (u = "?" + u),
          "" +
            a +
            c +
            (o = o.replace(/[?#]/g, encodeURIComponent)) +
            (u = u.replace("#", "%23")) +
            s
        );
      }
      let o = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function s(e) {
        return a(e);
      }
    },
    48055: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("coins", [
        ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
        ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
        ["path", { d: "M7 6h1v4", key: "1obek4" }],
        ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }],
      ]);
    },
    50915: (e, t, n) => {
      let r = n(10429);
      ((t.mul = function (e, t) {
        let n = new Uint8Array(e.length + t.length - 1);
        for (let i = 0; i < e.length; i++)
          for (let a = 0; a < t.length; a++) n[i + a] ^= r.mul(e[i], t[a]);
        return n;
      }),
        (t.mod = function (e, t) {
          let n = new Uint8Array(e);
          for (; n.length - t.length >= 0; ) {
            let e = n[0];
            for (let i = 0; i < t.length; i++) n[i] ^= r.mul(t[i], e);
            let i = 0;
            for (; i < n.length && 0 === n[i]; ) i++;
            n = n.slice(i);
          }
          return n;
        }),
        (t.generateECPolynomial = function (e) {
          let n = new Uint8Array([1]);
          for (let i = 0; i < e; i++) n = t.mul(n, new Uint8Array([1, r.exp(i)]));
          return n;
        }));
    },
    51470: (e, t, n) => {
      "use strict";
      n.d(t, { Br: () => l, Ce: () => o, Ok: () => r, qG: () => s });
      var r,
        i = n(68463),
        a = n(36452);
      !(function (e) {
        ((e.Installed = "Installed"),
          (e.NotDetected = "NotDetected"),
          (e.Loadable = "Loadable"),
          (e.Unsupported = "Unsupported"));
      })(r || (r = {}));
      class o extends i.A {
        get connected() {
          return !!this.publicKey;
        }
        async autoConnect() {
          await this.connect();
        }
        async prepareTransaction(e, t, n = {}) {
          let r = this.publicKey;
          if (!r) throw new a.kW();
          return (
            (e.feePayer = e.feePayer || r),
            (e.recentBlockhash =
              e.recentBlockhash ||
              (
                await t.getLatestBlockhash({
                  commitment: n.preflightCommitment,
                  minContextSlot: n.minContextSlot,
                })
              ).blockhash),
            e
          );
        }
      }
      function s(e) {
        if ("undefined" == typeof window || "undefined" == typeof document) return;
        let t = [];
        function n() {
          if (e()) for (let e of t) e();
        }
        let r = setInterval(n, 1e3);
        (t.push(() => clearInterval(r)),
          "loading" === document.readyState &&
            (document.addEventListener("DOMContentLoaded", n, { once: !0 }),
            t.push(() => document.removeEventListener("DOMContentLoaded", n))),
          "complete" !== document.readyState &&
            (window.addEventListener("load", n, { once: !0 }),
            t.push(() => window.removeEventListener("load", n))),
          n());
      }
      function l() {
        if (!navigator) return !1;
        let e = navigator.userAgent.toLowerCase(),
          t = e.includes("iphone") || e.includes("ipad"),
          n = e.includes("safari");
        return t && n;
      }
    },
    51901: (e, t, n) => {
      "use strict";
      function r(e) {
        return "version" in e;
      }
      n.d(t, { Y: () => r });
    },
    52056: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("triangle-alert", [
        [
          "path",
          {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq",
          },
        ],
        ["path", { d: "M12 9v4", key: "juzpu7" }],
        ["path", { d: "M12 17h.01", key: "p32p05" }],
      ]);
    },
    52619: (e, t, n) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return p;
          },
          useLinkStatus: function () {
            return m;
          },
        }));
      let r = n(49417),
        i = n(95155),
        a = r._(n(12115)),
        o = n(47670),
        s = n(46752),
        l = n(83011),
        c = n(62296),
        u = n(96058);
      n(94781);
      let d = n(63499),
        h = n(58607),
        f = n(11807);
      n(17045);
      let g = n(66048);
      function w(e) {
        return "string" == typeof e ? e : (0, o.formatUrl)(e);
      }
      function p(e) {
        var t;
        let n,
          r,
          o,
          [p, m] = (0, a.useOptimistic)(d.IDLE_LINK_STATUS),
          M = (0, a.useRef)(null),
          {
            href: v,
            as: E,
            children: N,
            prefetch: L = null,
            passHref: b,
            replace: I,
            shallow: j,
            scroll: A,
            onClick: S,
            onMouseEnter: T,
            onTouchStart: k,
            legacyBehavior: x = !1,
            onNavigate: D,
            ref: z,
            unstable_dynamicOnHover: O,
            ...C
          } = e;
        ((n = N),
          x &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = (0, i.jsx)("a", { children: n })));
        let _ = a.default.useContext(s.AppRouterContext),
          R = !1 !== L,
          U =
            !1 !== L
              ? null === (t = L) || "auto" === t
                ? g.FetchStrategy.PPR
                : g.FetchStrategy.Full
              : g.FetchStrategy.PPR,
          { href: P, as: W } = a.default.useMemo(() => {
            let e = w(v);
            return { href: e, as: E ? w(E) : e };
          }, [v, E]);
        x && (r = a.default.Children.only(n));
        let B = x ? r && "object" == typeof r && r.ref : z,
          Y = a.default.useCallback(
            (e) => (
              null !== _ && (M.current = (0, d.mountLinkInstance)(e, P, _, U, R, m)),
              () => {
                (M.current &&
                  ((0, d.unmountLinkForCurrentNavigation)(M.current), (M.current = null)),
                  (0, d.unmountPrefetchableInstance)(e));
              }
            ),
            [R, P, _, U, m]
          ),
          Q = {
            ref: (0, l.useMergedRef)(Y, B),
            onClick(e) {
              (x || "function" != typeof S || S(e),
                x && r.props && "function" == typeof r.props.onClick && r.props.onClick(e),
                _ &&
                  (e.defaultPrevented ||
                    (function (e, t, n, r, i, o, s) {
                      let { nodeName: l } = e.currentTarget;
                      if (
                        !(
                          ("A" === l.toUpperCase() &&
                            (function (e) {
                              let t = e.currentTarget.getAttribute("target");
                              return (
                                (t && "_self" !== t) ||
                                e.metaKey ||
                                e.ctrlKey ||
                                e.shiftKey ||
                                e.altKey ||
                                (e.nativeEvent && 2 === e.nativeEvent.which)
                              );
                            })(e)) ||
                          e.currentTarget.hasAttribute("download")
                        )
                      ) {
                        if (!(0, h.isLocalURL)(t)) {
                          i && (e.preventDefault(), location.replace(t));
                          return;
                        }
                        if ((e.preventDefault(), s)) {
                          let e = !1;
                          if (
                            (s({
                              preventDefault: () => {
                                e = !0;
                              },
                            }),
                            e)
                          )
                            return;
                        }
                        a.default.startTransition(() => {
                          (0, f.dispatchNavigateAction)(
                            n || t,
                            i ? "replace" : "push",
                            null == o || o,
                            r.current
                          );
                        });
                      }
                    })(e, P, W, M, I, A, D)));
            },
            onMouseEnter(e) {
              (x || "function" != typeof T || T(e),
                x &&
                  r.props &&
                  "function" == typeof r.props.onMouseEnter &&
                  r.props.onMouseEnter(e),
                _ && R && (0, d.onNavigationIntent)(e.currentTarget, !0 === O));
            },
            onTouchStart: function (e) {
              (x || "function" != typeof k || k(e),
                x &&
                  r.props &&
                  "function" == typeof r.props.onTouchStart &&
                  r.props.onTouchStart(e),
                _ && R && (0, d.onNavigationIntent)(e.currentTarget, !0 === O));
            },
          };
        return (
          (0, c.isAbsoluteUrl)(W)
            ? (Q.href = W)
            : (x && !b && ("a" !== r.type || "href" in r.props)) ||
              (Q.href = (0, u.addBasePath)(W)),
          (o = x ? a.default.cloneElement(r, Q) : (0, i.jsx)("a", { ...C, ...Q, children: n })),
          (0, i.jsx)(y.Provider, { value: p, children: o })
        );
      }
      let y = (0, a.createContext)(d.IDLE_LINK_STATUS),
        m = () => (0, a.useContext)(y);
      ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    52686: (e, t) => {
      function n(e) {
        if (("number" == typeof e && (e = e.toString()), "string" != typeof e))
          throw Error("Color should be defined as hex string");
        let t = e.slice().replace("#", "").split("");
        if (t.length < 3 || 5 === t.length || t.length > 8) throw Error("Invalid hex color: " + e);
        ((3 === t.length || 4 === t.length) &&
          (t = Array.prototype.concat.apply(
            [],
            t.map(function (e) {
              return [e, e];
            })
          )),
          6 === t.length && t.push("F", "F"));
        let n = parseInt(t.join(""), 16);
        return {
          r: (n >> 24) & 255,
          g: (n >> 16) & 255,
          b: (n >> 8) & 255,
          a: 255 & n,
          hex: "#" + t.slice(0, 6).join(""),
        };
      }
      ((t.getOptions = function (e) {
        (e || (e = {}), e.color || (e.color = {}));
        let t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
          r = e.width && e.width >= 21 ? e.width : void 0,
          i = e.scale || 4;
        return {
          width: r,
          scale: r ? 4 : i,
          margin: t,
          color: { dark: n(e.color.dark || "#000000ff"), light: n(e.color.light || "#ffffffff") },
          type: e.type,
          rendererOpts: e.rendererOpts || {},
        };
      }),
        (t.getScale = function (e, t) {
          return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale;
        }),
        (t.getImageWidth = function (e, n) {
          let r = t.getScale(e, n);
          return Math.floor((e + 2 * n.margin) * r);
        }),
        (t.qrToImageData = function (e, n, r) {
          let i = n.modules.size,
            a = n.modules.data,
            o = t.getScale(i, r),
            s = Math.floor((i + 2 * r.margin) * o),
            l = r.margin * o,
            c = [r.color.light, r.color.dark];
          for (let t = 0; t < s; t++)
            for (let n = 0; n < s; n++) {
              let u = (t * s + n) * 4,
                d = r.color.light;
              (t >= l &&
                n >= l &&
                t < s - l &&
                n < s - l &&
                (d = c[+!!a[Math.floor((t - l) / o) * i + Math.floor((n - l) / o)]]),
                (e[u++] = d.r),
                (e[u++] = d.g),
                (e[u++] = d.b),
                (e[u] = d.a));
            }
        }));
    },
    52769: (e, t, n) => {
      let r = n(91791),
        i = n(93711),
        a = n(85289),
        o = n(23308);
      function s(e, t, n, a, o) {
        let s = [].slice.call(arguments, 1),
          l = s.length,
          c = "function" == typeof s[l - 1];
        if (!c && !r()) throw Error("Callback required as last argument");
        if (c) {
          if (l < 2) throw Error("Too few arguments provided");
          2 === l
            ? ((o = n), (n = t), (t = a = void 0))
            : 3 === l &&
              (t.getContext && void 0 === o
                ? ((o = a), (a = void 0))
                : ((o = a), (a = n), (n = t), (t = void 0)));
        } else {
          if (l < 1) throw Error("Too few arguments provided");
          return (
            1 === l
              ? ((n = t), (t = a = void 0))
              : 2 !== l || t.getContext || ((a = n), (n = t), (t = void 0)),
            new Promise(function (r, o) {
              try {
                let o = i.create(n, a);
                r(e(o, t, a));
              } catch (e) {
                o(e);
              }
            })
          );
        }
        try {
          let r = i.create(n, a);
          o(null, e(r, t, a));
        } catch (e) {
          o(e);
        }
      }
      ((t.create = i.create),
        (t.toCanvas = s.bind(null, a.render)),
        (t.toDataURL = s.bind(null, a.renderToDataURL)),
        (t.toString = s.bind(null, function (e, t, n) {
          return o.render(e, n);
        })));
    },
    53896: (e, t) => {
      let n = "[0-9]+",
        r =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (r = r.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
      ((t.KANJI = RegExp(r, "g")),
        (t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (t.BYTE = RegExp(i, "g")),
        (t.NUMERIC = RegExp(n, "g")),
        (t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g")));
      let a = RegExp("^" + r + "$"),
        o = RegExp("^" + n + "$"),
        s = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      ((t.testKanji = function (e) {
        return a.test(e);
      }),
        (t.testNumeric = function (e) {
          return o.test(e);
        }),
        (t.testAlphanumeric = function (e) {
          return s.test(e);
        }));
    },
    54415: (e, t, n) => {
      let r = n(89158);
      function i(e) {
        ((this.mode = r.NUMERIC), (this.data = e.toString()));
      }
      ((i.getBitsLength = function (e) {
        return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (e) {
          let t, n;
          for (t = 0; t + 3 <= this.data.length; t += 3)
            ((n = parseInt(this.data.substr(t, 3), 10)), e.put(n, 10));
          let r = this.data.length - t;
          r > 0 && ((n = parseInt(this.data.substr(t), 10)), e.put(n, 3 * r + 1));
        }),
        (e.exports = i));
    },
    58607: (e, t, n) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let r = n(62296),
        i = n(92929);
      function a(e) {
        if (!(0, r.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, r.getLocationOrigin)(),
            n = new URL(e, t);
          return n.origin === t && (0, i.hasBasePath)(n.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    59384: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("layout-dashboard", [
        ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
        ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
        ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
        ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }],
      ]);
    },
    61362: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("circle-check", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]);
    },
    62296: (e, t) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DecodeError: function () {
            return g;
          },
          MiddlewareNotFoundError: function () {
            return m;
          },
          MissingStaticPage: function () {
            return y;
          },
          NormalizeError: function () {
            return w;
          },
          PageNotFoundError: function () {
            return p;
          },
          SP: function () {
            return h;
          },
          ST: function () {
            return f;
          },
          WEB_VITALS: function () {
            return n;
          },
          execOnce: function () {
            return r;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return o;
          },
          getURL: function () {
            return s;
          },
          isAbsoluteUrl: function () {
            return a;
          },
          isResSent: function () {
            return c;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return u;
          },
          stringifyError: function () {
            return M;
          },
        }));
      let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function r(e) {
        let t,
          n = !1;
        return function () {
          for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
          return (n || ((n = !0), (t = e(...i))), t);
        };
      }
      let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        a = (e) => i.test(e);
      function o() {
        let { protocol: e, hostname: t, port: n } = window.location;
        return e + "//" + t + (n ? ":" + n : "");
      }
      function s() {
        let { href: e } = window.location,
          t = o();
        return e.substring(t.length);
      }
      function l(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function c(e) {
        return e.finished || e.headersSent;
      }
      function u(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function d(e, t) {
        let n = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component ? { pageProps: await d(t.Component, t.ctx) } : {};
        let r = await e.getInitialProps(t);
        if (n && c(n)) return r;
        if (!r)
          throw Object.defineProperty(
            Error(
              '"' +
                l(e) +
                '.getInitialProps()" should resolve to an object. But found "' +
                r +
                '" instead.'
            ),
            "__NEXT_ERROR_CODE",
            { value: "E394", enumerable: !1, configurable: !0 }
          );
        return r;
      }
      let h = "undefined" != typeof performance,
        f =
          h &&
          ["mark", "measure", "getEntriesByName"].every((e) => "function" == typeof performance[e]);
      class g extends Error {}
      class w extends Error {}
      class p extends Error {
        constructor(e) {
          (super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e));
        }
      }
      class y extends Error {
        constructor(e, t) {
          (super(), (this.message = "Failed to load static file for page: " + e + " " + t));
        }
      }
      class m extends Error {
        constructor() {
          (super(), (this.code = "ENOENT"), (this.message = "Cannot find the middleware module"));
        }
      }
      function M(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    62546: (e) => {
      function t(e) {
        if (!e || e < 1) throw Error("BitMatrix size must be defined and greater than 0");
        ((this.size = e),
          (this.data = new Uint8Array(e * e)),
          (this.reservedBit = new Uint8Array(e * e)));
      }
      ((t.prototype.set = function (e, t, n, r) {
        let i = e * this.size + t;
        ((this.data[i] = n), r && (this.reservedBit[i] = !0));
      }),
        (t.prototype.get = function (e, t) {
          return this.data[e * this.size + t];
        }),
        (t.prototype.xor = function (e, t, n) {
          this.data[e * this.size + t] ^= n;
        }),
        (t.prototype.isReserved = function (e, t) {
          return this.reservedBit[e * this.size + t];
        }),
        (e.exports = t));
    },
    63879: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("message-square-warning", [
        [
          "path",
          {
            d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
            key: "18887p",
          },
        ],
        ["path", { d: "M12 15h.01", key: "q59x07" }],
        ["path", { d: "M12 7v4", key: "xawao1" }],
      ]);
    },
    69435: (e, t, n) => {
      let r = n(46342),
        i = n(81010),
        a = n(24967),
        o = n(89158),
        s = n(29762),
        l = r.getBCHDigit(7973);
      function c(e, t) {
        return o.getCharCountIndicator(e, t) + 4;
      }
      ((t.from = function (e, t) {
        return s.isValid(e) ? parseInt(e, 10) : t;
      }),
        (t.getCapacity = function (e, t, n) {
          if (!s.isValid(e)) throw Error("Invalid QR Code version");
          void 0 === n && (n = o.BYTE);
          let a = (r.getSymbolTotalCodewords(e) - i.getTotalCodewordsCount(e, t)) * 8;
          if (n === o.MIXED) return a;
          let l = a - c(n, e);
          switch (n) {
            case o.NUMERIC:
              return Math.floor((l / 10) * 3);
            case o.ALPHANUMERIC:
              return Math.floor((l / 11) * 2);
            case o.KANJI:
              return Math.floor(l / 13);
            case o.BYTE:
            default:
              return Math.floor(l / 8);
          }
        }),
        (t.getBestVersionForData = function (e, n) {
          let r,
            i = a.from(n, a.M);
          if (Array.isArray(e)) {
            if (e.length > 1) {
              for (let n = 1; n <= 40; n++)
                if (
                  (function (e, t) {
                    let n = 0;
                    return (
                      e.forEach(function (e) {
                        let r = c(e.mode, t);
                        n += r + e.getBitsLength();
                      }),
                      n
                    );
                  })(e, n) <= t.getCapacity(n, i, o.MIXED)
                )
                  return n;
              return;
            }
            if (0 === e.length) return 1;
            r = e[0];
          } else r = e;
          return (function (e, n, r) {
            for (let i = 1; i <= 40; i++) if (n <= t.getCapacity(i, r, e)) return i;
          })(r.mode, r.getLength(), i);
        }),
        (t.getEncodedBits = function (e) {
          if (!s.isValid(e) || e < 7) throw Error("Invalid QR Code version");
          let t = e << 12;
          for (; r.getBCHDigit(t) - l >= 0; ) t ^= 7973 << (r.getBCHDigit(t) - l);
          return (e << 12) | t;
        }));
    },
    70371: (e, t, n) => {
      let r = n(89158),
        i = n(54415),
        a = n(31937),
        o = n(44006),
        s = n(73987),
        l = n(53896),
        c = n(46342),
        u = n(88072);
      function d(e) {
        return unescape(encodeURIComponent(e)).length;
      }
      function h(e, t, n) {
        let r,
          i = [];
        for (; null !== (r = e.exec(n)); )
          i.push({ data: r[0], index: r.index, mode: t, length: r[0].length });
        return i;
      }
      function f(e) {
        let t,
          n,
          i = h(l.NUMERIC, r.NUMERIC, e),
          a = h(l.ALPHANUMERIC, r.ALPHANUMERIC, e);
        return (
          c.isKanjiModeEnabled()
            ? ((t = h(l.BYTE, r.BYTE, e)), (n = h(l.KANJI, r.KANJI, e)))
            : ((t = h(l.BYTE_KANJI, r.BYTE, e)), (n = [])),
          i
            .concat(a, t, n)
            .sort(function (e, t) {
              return e.index - t.index;
            })
            .map(function (e) {
              return { data: e.data, mode: e.mode, length: e.length };
            })
        );
      }
      function g(e, t) {
        switch (t) {
          case r.NUMERIC:
            return i.getBitsLength(e);
          case r.ALPHANUMERIC:
            return a.getBitsLength(e);
          case r.KANJI:
            return s.getBitsLength(e);
          case r.BYTE:
            return o.getBitsLength(e);
        }
      }
      function w(e, t) {
        let n,
          l = r.getBestModeForData(e);
        if ((n = r.from(t, l)) !== r.BYTE && n.bit < l.bit)
          throw Error(
            '"' +
              e +
              '" cannot be encoded with mode ' +
              r.toString(n) +
              ".\n Suggested mode is: " +
              r.toString(l)
          );
        switch ((n === r.KANJI && !c.isKanjiModeEnabled() && (n = r.BYTE), n)) {
          case r.NUMERIC:
            return new i(e);
          case r.ALPHANUMERIC:
            return new a(e);
          case r.KANJI:
            return new s(e);
          case r.BYTE:
            return new o(e);
        }
      }
      ((t.fromArray = function (e) {
        return e.reduce(function (e, t) {
          return (
            "string" == typeof t ? e.push(w(t, null)) : t.data && e.push(w(t.data, t.mode)),
            e
          );
        }, []);
      }),
        (t.fromString = function (e, n) {
          let i = (function (e, t) {
              let n = {},
                i = { start: {} },
                a = ["start"];
              for (let o = 0; o < e.length; o++) {
                let s = e[o],
                  l = [];
                for (let e = 0; e < s.length; e++) {
                  let c = s[e],
                    u = "" + o + e;
                  (l.push(u), (n[u] = { node: c, lastCount: 0 }), (i[u] = {}));
                  for (let e = 0; e < a.length; e++) {
                    let o = a[e];
                    n[o] && n[o].node.mode === c.mode
                      ? ((i[o][u] =
                          g(n[o].lastCount + c.length, c.mode) - g(n[o].lastCount, c.mode)),
                        (n[o].lastCount += c.length))
                      : (n[o] && (n[o].lastCount = c.length),
                        (i[o][u] = g(c.length, c.mode) + 4 + r.getCharCountIndicator(c.mode, t)));
                  }
                }
                a = l;
              }
              for (let e = 0; e < a.length; e++) i[a[e]].end = 0;
              return { map: i, table: n };
            })(
              (function (e) {
                let t = [];
                for (let n = 0; n < e.length; n++) {
                  let i = e[n];
                  switch (i.mode) {
                    case r.NUMERIC:
                      t.push([
                        i,
                        { data: i.data, mode: r.ALPHANUMERIC, length: i.length },
                        { data: i.data, mode: r.BYTE, length: i.length },
                      ]);
                      break;
                    case r.ALPHANUMERIC:
                      t.push([i, { data: i.data, mode: r.BYTE, length: i.length }]);
                      break;
                    case r.KANJI:
                      t.push([i, { data: i.data, mode: r.BYTE, length: d(i.data) }]);
                      break;
                    case r.BYTE:
                      t.push([{ data: i.data, mode: r.BYTE, length: d(i.data) }]);
                  }
                }
                return t;
              })(f(e, c.isKanjiModeEnabled())),
              n
            ),
            a = u.find_path(i.map, "start", "end"),
            o = [];
          for (let e = 1; e < a.length - 1; e++) o.push(i.table[a[e]].node);
          return t.fromArray(
            o.reduce(function (e, t) {
              let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
              return (n && n.mode === t.mode ? (e[e.length - 1].data += t.data) : e.push(t), e);
            }, [])
          );
        }),
        (t.rawSplit = function (e) {
          return t.fromArray(f(e, c.isKanjiModeEnabled()));
        }));
    },
    73987: (e, t, n) => {
      let r = n(89158),
        i = n(46342);
      function a(e) {
        ((this.mode = r.KANJI), (this.data = e));
      }
      ((a.getBitsLength = function (e) {
        return 13 * e;
      }),
        (a.prototype.getLength = function () {
          return this.data.length;
        }),
        (a.prototype.getBitsLength = function () {
          return a.getBitsLength(this.data.length);
        }),
        (a.prototype.write = function (e) {
          let t;
          for (t = 0; t < this.data.length; t++) {
            let n = i.toSJIS(this.data[t]);
            if (n >= 33088 && n <= 40956) n -= 33088;
            else if (n >= 57408 && n <= 60351) n -= 49472;
            else
              throw Error(
                "Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8"
              );
            ((n = ((n >>> 8) & 255) * 192 + (255 & n)), e.put(n, 13));
          }
        }),
        (e.exports = a));
    },
    74534: (e, t, n) => {
      "use strict";
      n.d(t, { S: () => o });
      var r = n(25223),
        i = n(12115),
        a = n(84034);
      let o = ({ children: e, endpoint: t, config: n = { commitment: "confirmed" } }) => {
        let o = (0, i.useMemo)(() => new r.Ng(t, n), [t, n]);
        return i.createElement(a.E.Provider, { value: { connection: o } }, e);
      };
    },
    75170: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => r });
      let r = "standard:connect";
    },
    75882: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("wallet", [
        [
          "path",
          {
            d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
            key: "18etb6",
          },
        ],
        ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }],
      ]);
    },
    76907: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("shield-check", [
        [
          "path",
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
          },
        ],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]);
    },
    77745: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => r });
      let r = "standard:events";
    },
    78162: (e) => {
      "use strict";
      e.exports = function (e) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var t = new Uint8Array(256), n = 0; n < t.length; n++) t[n] = 255;
        for (var r = 0; r < e.length; r++) {
          var i = e.charAt(r),
            a = i.charCodeAt(0);
          if (255 !== t[a]) throw TypeError(i + " is ambiguous");
          t[a] = r;
        }
        var o = e.length,
          s = e.charAt(0),
          l = Math.log(o) / Math.log(256),
          c = Math.log(256) / Math.log(o);
        function u(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          for (var n = 0, r = 0, i = 0; e[n] === s; ) (r++, n++);
          for (var a = ((e.length - n) * l + 1) >>> 0, c = new Uint8Array(a); e[n]; ) {
            var u = e.charCodeAt(n);
            if (u > 255) return;
            var d = t[u];
            if (255 === d) return;
            for (var h = 0, f = a - 1; (0 !== d || h < i) && -1 !== f; f--, h++)
              ((d += (o * c[f]) >>> 0), (c[f] = (d % 256) >>> 0), (d = (d / 256) >>> 0));
            if (0 !== d) throw Error("Non-zero carry");
            ((i = h), n++);
          }
          for (var g = a - i; g !== a && 0 === c[g]; ) g++;
          for (var w = new Uint8Array(r + (a - g)), p = r; g !== a; ) w[p++] = c[g++];
          return w;
        }
        return {
          encode: function (t) {
            if (
              (t instanceof Uint8Array ||
                (ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : Array.isArray(t) && (t = Uint8Array.from(t))),
              !(t instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === t.length) return "";
            for (var n = 0, r = 0, i = 0, a = t.length; i !== a && 0 === t[i]; ) (i++, n++);
            for (var l = ((a - i) * c + 1) >>> 0, u = new Uint8Array(l); i !== a; ) {
              for (var d = t[i], h = 0, f = l - 1; (0 !== d || h < r) && -1 !== f; f--, h++)
                ((d += (256 * u[f]) >>> 0), (u[f] = (d % o) >>> 0), (d = (d / o) >>> 0));
              if (0 !== d) throw Error("Non-zero carry");
              ((r = h), i++);
            }
            for (var g = l - r; g !== l && 0 === u[g]; ) g++;
            for (var w = s.repeat(n); g < l; ++g) w += e.charAt(u[g]);
            return w;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var t = u(e);
            if (t) return t;
            throw Error("Non-base" + o + " character");
          },
        };
      };
    },
    81010: (e, t, n) => {
      let r = n(24967),
        i = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4,
          6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6,
          10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8,
          17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37,
          12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33,
          45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70,
          22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
        ],
        a = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96,
          112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150,
          224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432,
          144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416,
          600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960,
          312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420,
          784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540,
          980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630,
          1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      ((t.getBlocksCount = function (e, t) {
        switch (t) {
          case r.L:
            return i[(e - 1) * 4 + 0];
          case r.M:
            return i[(e - 1) * 4 + 1];
          case r.Q:
            return i[(e - 1) * 4 + 2];
          case r.H:
            return i[(e - 1) * 4 + 3];
          default:
            return;
        }
      }),
        (t.getTotalCodewordsCount = function (e, t) {
          switch (t) {
            case r.L:
              return a[(e - 1) * 4 + 0];
            case r.M:
              return a[(e - 1) * 4 + 1];
            case r.Q:
              return a[(e - 1) * 4 + 2];
            case r.H:
              return a[(e - 1) * 4 + 3];
            default:
              return;
          }
        }));
    },
    83011: (e, t, n) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let r = n(12115);
      function i(e, t) {
        let n = (0, r.useRef)(null),
          i = (0, r.useRef)(null);
        return (0, r.useCallback)(
          (r) => {
            if (null === r) {
              let e = n.current;
              e && ((n.current = null), e());
              let t = i.current;
              t && ((i.current = null), t());
            } else (e && (n.current = a(e, r)), t && (i.current = a(t, r)));
          },
          [e, t]
        );
      }
      function a(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let n = e(t);
          return "function" == typeof n ? n : () => e(null);
        }
      }
      ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    84034: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => i, w: () => a });
      var r = n(12115);
      let i = (0, r.createContext)({});
      function a() {
        return (0, r.useContext)(i);
      }
    },
    85177: (e, t, n) => {
      e.exports = n(78162)("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
    },
    85289: (e, t, n) => {
      let r = n(52686);
      ((t.render = function (e, t, n) {
        var i;
        let a = n,
          o = t;
        (void 0 !== a || (t && t.getContext) || ((a = t), (t = void 0)),
          t ||
            (o = (function () {
              try {
                return document.createElement("canvas");
              } catch (e) {
                throw Error("You need to specify a canvas element");
              }
            })()),
          (a = r.getOptions(a)));
        let s = r.getImageWidth(e.modules.size, a),
          l = o.getContext("2d"),
          c = l.createImageData(s, s);
        return (
          r.qrToImageData(c.data, e, a),
          (i = o),
          l.clearRect(0, 0, i.width, i.height),
          i.style || (i.style = {}),
          (i.height = s),
          (i.width = s),
          (i.style.height = s + "px"),
          (i.style.width = s + "px"),
          l.putImageData(c, 0, 0),
          o
        );
      }),
        (t.renderToDataURL = function (e, n, r) {
          let i = r;
          (void 0 !== i || (n && n.getContext) || ((i = n), (n = void 0)), i || (i = {}));
          let a = t.render(e, n, i),
            o = i.type || "image/png",
            s = i.rendererOpts || {};
          return a.toDataURL(o, s.quality);
        }));
    },
    87012: (e, t, n) => {
      "use strict";
      n.d(t, { c: () => l });
      var r = n(45669),
        i = n(51470),
        a = n(36452),
        o = n(51901),
        s = n(25223);
      class l extends r.DE {
        constructor(e = {}) {
          (super(),
            (this.name = "Phantom"),
            (this.url = "https://phantom.app"),
            (this.icon =
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiB2aWV3Qm94PSIwIDAgMTA4IDEwOCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMDgiIGhlaWdodD0iMTA4IiByeD0iMjYiIGZpbGw9IiNBQjlGRjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni41MjY3IDY5LjkyMjlDNDIuMDA1NCA3Ni44NTA5IDM0LjQyOTIgODUuNjE4MiAyNC4zNDggODUuNjE4MkMxOS41ODI0IDg1LjYxODIgMTUgODMuNjU2MyAxNSA3NS4xMzQyQzE1IDUzLjQzMDUgNDQuNjMyNiAxOS44MzI3IDcyLjEyNjggMTkuODMyN0M4Ny43NjggMTkuODMyNyA5NCAzMC42ODQ2IDk0IDQzLjAwNzlDOTQgNTguODI1OCA4My43MzU1IDc2LjkxMjIgNzMuNTMyMSA3Ni45MTIyQzcwLjI5MzkgNzYuOTEyMiA2OC43MDUzIDc1LjEzNDIgNjguNzA1MyA3Mi4zMTRDNjguNzA1MyA3MS41NzgzIDY4LjgyNzUgNzAuNzgxMiA2OS4wNzE5IDY5LjkyMjlDNjUuNTg5MyA3NS44Njk5IDU4Ljg2ODUgODEuMzg3OCA1Mi41NzU0IDgxLjM4NzhDNDcuOTkzIDgxLjM4NzggNDUuNjcxMyA3OC41MDYzIDQ1LjY3MTMgNzQuNDU5OEM0NS42NzEzIDcyLjk4ODQgNDUuOTc2OCA3MS40NTU2IDQ2LjUyNjcgNjkuOTIyOVpNODMuNjc2MSA0Mi41Nzk0QzgzLjY3NjEgNDYuMTcwNCA4MS41NTc1IDQ3Ljk2NTggNzkuMTg3NSA0Ny45NjU4Qzc2Ljc4MTYgNDcuOTY1OCA3NC42OTg5IDQ2LjE3MDQgNzQuNjk4OSA0Mi41Nzk0Qzc0LjY5ODkgMzguOTg4NSA3Ni43ODE2IDM3LjE5MzEgNzkuMTg3NSAzNy4xOTMxQzgxLjU1NzUgMzcuMTkzMSA4My42NzYxIDM4Ljk4ODUgODMuNjc2MSA0Mi41Nzk0Wk03MC4yMTAzIDQyLjU3OTVDNzAuMjEwMyA0Ni4xNzA0IDY4LjA5MTYgNDcuOTY1OCA2NS43MjE2IDQ3Ljk2NThDNjMuMzE1NyA0Ny45NjU4IDYxLjIzMyA0Ni4xNzA0IDYxLjIzMyA0Mi41Nzk1QzYxLjIzMyAzOC45ODg1IDYzLjMxNTcgMzcuMTkzMSA2NS43MjE2IDM3LjE5MzFDNjguMDkxNiAzNy4xOTMxIDcwLjIxMDMgMzguOTg4NSA3MC4yMTAzIDQyLjU3OTVaIiBmaWxsPSIjRkZGREY4Ii8+Cjwvc3ZnPg=="),
            (this.supportedTransactionVersions = new Set(["legacy", 0])),
            (this._readyState =
              "undefined" == typeof window || "undefined" == typeof document
                ? i.Ok.Unsupported
                : i.Ok.NotDetected),
            (this._disconnected = () => {
              let e = this._wallet;
              e &&
                (e.off("disconnect", this._disconnected),
                e.off("accountChanged", this._accountChanged),
                (this._wallet = null),
                (this._publicKey = null),
                this.emit("error", new a.PQ()),
                this.emit("disconnect"));
            }),
            (this._accountChanged = (e) => {
              let t = this._publicKey;
              if (t) {
                try {
                  e = new s.J3(e.toBytes());
                } catch (e) {
                  this.emit("error", new a.Kd(e?.message, e));
                  return;
                }
                t.equals(e) || ((this._publicKey = e), this.emit("connect", e));
              }
            }),
            (this._connecting = !1),
            (this._wallet = null),
            (this._publicKey = null),
            this._readyState !== i.Ok.Unsupported &&
              ((0, i.Br)()
                ? ((this._readyState = i.Ok.Loadable),
                  this.emit("readyStateChange", this._readyState))
                : (0, i.qG)(
                    () =>
                      !!(window.phantom?.solana?.isPhantom || window.solana?.isPhantom) &&
                      ((this._readyState = i.Ok.Installed),
                      this.emit("readyStateChange", this._readyState),
                      !0)
                  )));
        }
        get publicKey() {
          return this._publicKey;
        }
        get connecting() {
          return this._connecting;
        }
        get readyState() {
          return this._readyState;
        }
        async autoConnect() {
          this.readyState === i.Ok.Installed && (await this.connect());
        }
        async connect() {
          try {
            let e;
            if (this.connected || this.connecting) return;
            if (this.readyState === i.Ok.Loadable) {
              let e = encodeURIComponent(window.location.href),
                t = encodeURIComponent(window.location.origin);
              window.location.href = `https://phantom.app/ul/browse/${e}?ref=${t}`;
              return;
            }
            if (this.readyState !== i.Ok.Installed) throw new a.AE();
            this._connecting = !0;
            let t = window.phantom?.solana || window.solana;
            if (!t.isConnected)
              try {
                await t.connect();
              } catch (e) {
                throw new a.Y6(e?.message, e);
              }
            if (!t.publicKey) throw new a.fk();
            try {
              e = new s.J3(t.publicKey.toBytes());
            } catch (e) {
              throw new a.Kd(e?.message, e);
            }
            (t.on("disconnect", this._disconnected),
              t.on("accountChanged", this._accountChanged),
              (this._wallet = t),
              (this._publicKey = e),
              this.emit("connect", e));
          } catch (e) {
            throw (this.emit("error", e), e);
          } finally {
            this._connecting = !1;
          }
        }
        async disconnect() {
          let e = this._wallet;
          if (e) {
            (e.off("disconnect", this._disconnected),
              e.off("accountChanged", this._accountChanged),
              (this._wallet = null),
              (this._publicKey = null));
            try {
              await e.disconnect();
            } catch (e) {
              this.emit("error", new a.Y8(e?.message, e));
            }
          }
          this.emit("disconnect");
        }
        async sendTransaction(e, t, n = {}) {
          try {
            let r = this._wallet;
            if (!r) throw new a.kW();
            try {
              let { signers: i, ...a } = n;
              ((0, o.Y)(e)
                ? i?.length && e.sign(i)
                : ((e = await this.prepareTransaction(e, t, a)), i?.length && e.partialSign(...i)),
                (a.preflightCommitment = a.preflightCommitment || t.commitment));
              let { signature: s } = await r.signAndSendTransaction(e, a);
              return s;
            } catch (e) {
              if (e instanceof a.m7) throw e;
              throw new a.UF(e?.message, e);
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signTransaction(e) {
          try {
            let t = this._wallet;
            if (!t) throw new a.kW();
            try {
              return (await t.signTransaction(e)) || e;
            } catch (e) {
              throw new a.z4(e?.message, e);
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signAllTransactions(e) {
          try {
            let t = this._wallet;
            if (!t) throw new a.kW();
            try {
              return (await t.signAllTransactions(e)) || e;
            } catch (e) {
              throw new a.z4(e?.message, e);
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
        async signMessage(e) {
          try {
            let t = this._wallet;
            if (!t) throw new a.kW();
            try {
              let { signature: n } = await t.signMessage(e);
              return n;
            } catch (e) {
              throw new a.K3(e?.message, e);
            }
          } catch (e) {
            throw (this.emit("error", e), e);
          }
        }
      }
    },
    87855: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("image-plus", [
        ["path", { d: "M16 5h6", key: "1vod17" }],
        ["path", { d: "M19 2v6", key: "4bpg5p" }],
        [
          "path",
          { d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5", key: "1ue2ih" },
        ],
        ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
        ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
      ]);
    },
    88072: (e) => {
      "use strict";
      var t = {
        single_source_shortest_paths: function (e, n, r) {
          var i,
            a,
            o,
            s,
            l,
            c,
            u,
            d = {},
            h = {};
          h[n] = 0;
          var f = t.PriorityQueue.make();
          for (f.push(n, 0); !f.empty(); )
            for (o in ((a = (i = f.pop()).value), (s = i.cost), (l = e[a] || {})))
              l.hasOwnProperty(o) &&
                ((c = s + l[o]),
                (u = h[o]),
                (void 0 === h[o] || u > c) && ((h[o] = c), f.push(o, c), (d[o] = a)));
          if (void 0 !== r && void 0 === h[r])
            throw Error("Could not find a path from " + n + " to " + r + ".");
          return d;
        },
        extract_shortest_path_from_predecessor_list: function (e, t) {
          for (var n = [], r = t; r; ) (n.push(r), e[r], (r = e[r]));
          return (n.reverse(), n);
        },
        find_path: function (e, n, r) {
          var i = t.single_source_shortest_paths(e, n, r);
          return t.extract_shortest_path_from_predecessor_list(i, r);
        },
        PriorityQueue: {
          make: function (e) {
            var n,
              r = t.PriorityQueue,
              i = {};
            for (n in ((e = e || {}), r)) r.hasOwnProperty(n) && (i[n] = r[n]);
            return ((i.queue = []), (i.sorter = e.sorter || r.default_sorter), i);
          },
          default_sorter: function (e, t) {
            return e.cost - t.cost;
          },
          push: function (e, t) {
            (this.queue.push({ value: e, cost: t }), this.queue.sort(this.sorter));
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      e.exports = t;
    },
    89158: (e, t, n) => {
      let r = n(29762),
        i = n(53896);
      ((t.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (t.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (t.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (t.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (t.MIXED = { bit: -1 }),
        (t.getCharCountIndicator = function (e, t) {
          if (!e.ccBits) throw Error("Invalid mode: " + e);
          if (!r.isValid(t)) throw Error("Invalid version: " + t);
          return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2];
        }),
        (t.getBestModeForData = function (e) {
          return i.testNumeric(e)
            ? t.NUMERIC
            : i.testAlphanumeric(e)
              ? t.ALPHANUMERIC
              : i.testKanji(e)
                ? t.KANJI
                : t.BYTE;
        }),
        (t.toString = function (e) {
          if (e && e.id) return e.id;
          throw Error("Invalid mode");
        }),
        (t.isValid = function (e) {
          return e && e.bit && e.ccBits;
        }),
        (t.from = function (e, n) {
          if (t.isValid(e)) return e;
          try {
            if ("string" != typeof e) throw Error("Param is not a string");
            switch (e.toLowerCase()) {
              case "numeric":
                return t.NUMERIC;
              case "alphanumeric":
                return t.ALPHANUMERIC;
              case "kanji":
                return t.KANJI;
              case "byte":
                return t.BYTE;
              default:
                throw Error("Unknown mode: " + e);
            }
          } catch (e) {
            return n;
          }
        }));
    },
    89559: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("refresh-cw", [
        ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
        ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
        ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
        ["path", { d: "M8 16H3v5", key: "1cv678" }],
      ]);
    },
    91791: (e) => {
      e.exports = function () {
        return "function" == typeof Promise && Promise.prototype && Promise.prototype.then;
      };
    },
    93499: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(71847).A)("external-link", [
        ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
        ["path", { d: "M10 14 21 3", key: "gplh6r" }],
        ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }],
      ]);
    },
    93711: (e, t, n) => {
      let r = n(46342),
        i = n(24967),
        a = n(35425),
        o = n(62546),
        s = n(669),
        l = n(35630),
        c = n(19542),
        u = n(81010),
        d = n(95230),
        h = n(69435),
        f = n(41953),
        g = n(89158),
        w = n(70371);
      function p(e, t, n) {
        let r,
          i,
          a = e.size,
          o = f.getEncodedBits(t, n);
        for (r = 0; r < 15; r++)
          ((i = ((o >> r) & 1) == 1),
            r < 6
              ? e.set(r, 8, i, !0)
              : r < 8
                ? e.set(r + 1, 8, i, !0)
                : e.set(a - 15 + r, 8, i, !0),
            r < 8
              ? e.set(8, a - r - 1, i, !0)
              : r < 9
                ? e.set(8, 15 - r - 1 + 1, i, !0)
                : e.set(8, 15 - r - 1, i, !0));
        e.set(a - 8, 8, 1, !0);
      }
      t.create = function (e, t) {
        let n, f;
        if (void 0 === e || "" === e) throw Error("No input text");
        let y = i.M;
        return (
          void 0 !== t &&
            ((y = i.from(t.errorCorrectionLevel, i.M)),
            (n = h.from(t.version)),
            (f = c.from(t.maskPattern)),
            t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)),
          (function (e, t, n, i) {
            let f;
            if (Array.isArray(e)) f = w.fromArray(e);
            else if ("string" == typeof e) {
              let r = t;
              if (!r) {
                let t = w.rawSplit(e);
                r = h.getBestVersionForData(t, n);
              }
              f = w.fromString(e, r || 40);
            } else throw Error("Invalid data");
            let y = h.getBestVersionForData(f, n);
            if (!y) throw Error("The amount of data is too big to be stored in a QR Code");
            if (t) {
              if (t < y)
                throw Error(
                  "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                    y +
                    ".\n"
                );
            } else t = y;
            let m = (function (e, t, n) {
                let i = new a();
                n.forEach(function (t) {
                  (i.put(t.mode.bit, 4),
                    i.put(t.getLength(), g.getCharCountIndicator(t.mode, e)),
                    t.write(i));
                });
                let o = (r.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t)) * 8;
                for (i.getLengthInBits() + 4 <= o && i.put(0, 4); i.getLengthInBits() % 8 != 0; )
                  i.putBit(0);
                let s = (o - i.getLengthInBits()) / 8;
                for (let e = 0; e < s; e++) i.put(e % 2 ? 17 : 236, 8);
                return (function (e, t, n) {
                  let i,
                    a,
                    o = r.getSymbolTotalCodewords(t),
                    s = o - u.getTotalCodewordsCount(t, n),
                    l = u.getBlocksCount(t, n),
                    c = o % l,
                    h = l - c,
                    f = Math.floor(o / l),
                    g = Math.floor(s / l),
                    w = g + 1,
                    p = f - g,
                    y = new d(p),
                    m = 0,
                    M = Array(l),
                    v = Array(l),
                    E = 0,
                    N = new Uint8Array(e.buffer);
                  for (let e = 0; e < l; e++) {
                    let t = e < h ? g : w;
                    ((M[e] = N.slice(m, m + t)),
                      (v[e] = y.encode(M[e])),
                      (m += t),
                      (E = Math.max(E, t)));
                  }
                  let L = new Uint8Array(o),
                    b = 0;
                  for (i = 0; i < E; i++)
                    for (a = 0; a < l; a++) i < M[a].length && (L[b++] = M[a][i]);
                  for (i = 0; i < p; i++) for (a = 0; a < l; a++) L[b++] = v[a][i];
                  return L;
                })(i, e, t);
              })(t, n, f),
              M = new o(r.getSymbolSize(t));
            !(function (e, t) {
              let n = e.size,
                r = l.getPositions(t);
              for (let t = 0; t < r.length; t++) {
                let i = r[t][0],
                  a = r[t][1];
                for (let t = -1; t <= 7; t++)
                  if (!(i + t <= -1) && !(n <= i + t))
                    for (let r = -1; r <= 7; r++)
                      a + r <= -1 ||
                        n <= a + r ||
                        ((t >= 0 && t <= 6 && (0 === r || 6 === r)) ||
                        (r >= 0 && r <= 6 && (0 === t || 6 === t)) ||
                        (t >= 2 && t <= 4 && r >= 2 && r <= 4)
                          ? e.set(i + t, a + r, !0, !0)
                          : e.set(i + t, a + r, !1, !0));
              }
            })(M, t);
            let v = M.size;
            for (let e = 8; e < v - 8; e++) {
              let t = e % 2 == 0;
              (M.set(e, 6, t, !0), M.set(6, e, t, !0));
            }
            return (
              !(function (e, t) {
                let n = s.getPositions(t);
                for (let t = 0; t < n.length; t++) {
                  let r = n[t][0],
                    i = n[t][1];
                  for (let t = -2; t <= 2; t++)
                    for (let n = -2; n <= 2; n++)
                      -2 === t || 2 === t || -2 === n || 2 === n || (0 === t && 0 === n)
                        ? e.set(r + t, i + n, !0, !0)
                        : e.set(r + t, i + n, !1, !0);
                }
              })(M, t),
              p(M, n, 0),
              t >= 7 &&
                (function (e, t) {
                  let n,
                    r,
                    i,
                    a = e.size,
                    o = h.getEncodedBits(t);
                  for (let t = 0; t < 18; t++)
                    ((n = Math.floor(t / 3)),
                      (r = (t % 3) + a - 8 - 3),
                      (i = ((o >> t) & 1) == 1),
                      e.set(n, r, i, !0),
                      e.set(r, n, i, !0));
                })(M, t),
              !(function (e, t) {
                let n = e.size,
                  r = -1,
                  i = n - 1,
                  a = 7,
                  o = 0;
                for (let s = n - 1; s > 0; s -= 2)
                  for (6 === s && s--; ; ) {
                    for (let n = 0; n < 2; n++)
                      if (!e.isReserved(i, s - n)) {
                        let r = !1;
                        (o < t.length && (r = ((t[o] >>> a) & 1) == 1),
                          e.set(i, s - n, r),
                          -1 == --a && (o++, (a = 7)));
                      }
                    if ((i += r) < 0 || n <= i) {
                      ((i -= r), (r = -r));
                      break;
                    }
                  }
              })(M, m),
              isNaN(i) && (i = c.getBestMask(M, p.bind(null, M, n))),
              c.applyMask(i, M),
              p(M, n, i),
              { modules: M, version: t, errorCorrectionLevel: n, maskPattern: i, segments: f }
            );
          })(e, n, y, f)
        );
      };
    },
    94040: (e, t, n) => {
      "use strict";
      var r;
      (n.d(t, { B: () => r }),
        (function (e) {
          ((e.Mainnet = "mainnet-beta"), (e.Testnet = "testnet"), (e.Devnet = "devnet"));
        })(r || (r = {})));
    },
    95230: (e, t, n) => {
      let r = n(50915);
      function i(e) {
        ((this.genPoly = void 0), (this.degree = e), this.degree && this.initialize(this.degree));
      }
      ((i.prototype.initialize = function (e) {
        ((this.degree = e), (this.genPoly = r.generateECPolynomial(this.degree)));
      }),
        (i.prototype.encode = function (e) {
          if (!this.genPoly) throw Error("Encoder not initialized");
          let t = new Uint8Array(e.length + this.degree);
          t.set(e);
          let n = r.mod(t, this.genPoly),
            i = this.degree - n.length;
          if (i > 0) {
            let e = new Uint8Array(this.degree);
            return (e.set(n, i), e);
          }
          return n;
        }),
        (e.exports = i));
    },
    97602: (e, t, n) => {
      "use strict";
      n.d(t, { sG: () => o });
      var r = n(12115);
      n(47650);
      var i = n(32467),
        a = n(95155),
        o = [
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
          let n = (0, i.TL)(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              let { asChild: i, ...o } = e;
              return (
                "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0),
                (0, a.jsx)(i ? n : t, { ...o, ref: r })
              );
            });
          return ((o.displayName = `Primitive.${t}`), { ...e, [t]: o });
        }, {});
    },
  },
]);
