(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [633],
  {
    33789: (e, s, t) => {
      "use strict";
      t.d(s, { p: () => r });
      var a = t(95155);
      t(12115);
      var l = t(25016);
      function r(e) {
        let { className: s, type: t, ...r } = e;
        return (0, a.jsx)("input", {
          type: t,
          "data-slot": "input",
          className: (0, l.cn)(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            s
          ),
          ...r,
        });
      }
    },
    55850: (e, s, t) => {
      "use strict";
      t.d(s, { k: () => n });
      var a = t(95155),
        l = t(12115),
        r = t(9484),
        i = t(25016);
      let n = l.forwardRef((e, s) => {
        let { className: t, value: l, indicatorClassName: n, ...o } = e;
        return (0, a.jsx)(r.bL, {
          ref: s,
          className: (0, i.cn)("relative h-4 w-full overflow-hidden rounded-full bg-secondary", t),
          ...o,
          children: (0, a.jsx)(r.C1, {
            className: (0, i.cn)("h-full w-full flex-1 bg-primary transition-all", n),
            style: { transform: "translateX(-".concat(100 - (null != l ? l : 0), "%)") },
          }),
        });
      });
      n.displayName = r.bL.displayName;
    },
    67390: (e, s, t) => {
      Promise.resolve().then(t.bind(t, 90965));
    },
    90923: (e, s, t) => {
      "use strict";
      t.d(s, { Xi: () => o, av: () => d, j7: () => n, tU: () => i });
      var a = t(95155);
      t(12115);
      var l = t(28191),
        r = t(25016);
      function i(e) {
        let { className: s, ...t } = e;
        return (0, a.jsx)(l.bL, {
          "data-slot": "tabs",
          className: (0, r.cn)("flex flex-col gap-2", s),
          ...t,
        });
      }
      function n(e) {
        let { className: s, ...t } = e;
        return (0, a.jsx)(l.B8, {
          "data-slot": "tabs-list",
          className: (0, r.cn)(
            "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
            s
          ),
          ...t,
        });
      }
      function o(e) {
        let { className: s, ...t } = e;
        return (0, a.jsx)(l.l9, {
          "data-slot": "tabs-trigger",
          className: (0, r.cn)(
            "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            s
          ),
          ...t,
        });
      }
      function d(e) {
        let { className: s, ...t } = e;
        return (0, a.jsx)(l.UC, {
          "data-slot": "tabs-content",
          className: (0, r.cn)("flex-1 outline-none", s),
          ...t,
        });
      }
    },
    90965: (e, s, t) => {
      "use strict";
      (t.r(s), t.d(s, { default: () => D }));
      var a = t(95155),
        l = t(12115),
        r = t(20063),
        i = t(98183),
        n = t(55955),
        o = t(97003),
        d = t(33789),
        c = t(67812),
        x = t(90923),
        m = t(55850),
        h = t(83209),
        u = t(35299),
        f = t(35626),
        p = t(17181),
        b = t(1524),
        g = t(50906),
        j = t(52056),
        v = t(26989),
        N = t(65739),
        w = t(26265),
        y = t(60327),
        k = t(68425),
        A = t(47734),
        C = t(73697),
        S = t(33420),
        _ = t(96038),
        U = t(18720);
      function D() {
        var e;
        let s = (0, r.useParams)(),
          t = (0, r.useRouter)(),
          { id: D } = s,
          { vaults: E, usdcBalance: R, fetchVaults: P, depositToVault: z } = (0, i.A)(),
          { publicKey: F } = (0, n.v)(),
          [T, I] = (0, l.useState)(null),
          [W] = (0, l.useState)(
            (() => {
              let e = [],
                s = 100;
              for (let t = 0; t < 30; t++)
                ((s *= 1 + (0.1 * Math.random() - 0.04)),
                  e.push({ date: "Day ".concat(t + 1), value: s }));
              return e;
            })()
          ),
          [$, L] = (0, l.useState)("deposit"),
          [X, V] = (0, l.useState)(""),
          [B, M] = (0, l.useState)(!1),
          [O, Z] = (0, l.useState)(30);
        ((0, l.useEffect)(() => {
          0 === E.length && P();
        }, [P, E.length]),
          (0, l.useEffect)(() => {
            let e = E.find((e) => e.id === D);
            e && I(e);
          }, [E, D]),
          (0, l.useEffect)(() => {
            let e = setInterval(() => {
              Z((e) => (e <= 0 ? 30 : e - 0.1));
            }, 100);
            return () => clearInterval(e);
          }, []));
        let q = parseFloat(X) || 0,
          Y = "deposit" === $ ? q / 1.24 : 1.24 * q,
          G = 0.005 * q,
          K = q > 1e4 ? 1.2 : 0.1,
          Q = async () =>
            F
              ? q <= 0
                ? U.oR.error("Enter valid amount.")
                : "deposit" === $ && q > R
                  ? U.oR.error("Insufficient USDC balance.")
                  : void (M(!0),
                    setTimeout(() => {
                      ("deposit" === $
                        ? (z(T.id, q),
                          U.oR.success(
                            "Successfully swapped "
                              .concat(X, " USDC for ")
                              .concat(null == T ? void 0 : T.symbol)
                          ))
                        : U.oR.success(
                            "Successfully swapped "
                              .concat(X, " ")
                              .concat(null == T ? void 0 : T.symbol, " for USDC")
                          ),
                        V(""),
                        M(!1));
                    }, 2e3))
              : U.oR.error("Please connect wallet first.");
        return T
          ? (0, a.jsxs)("div", {
              className:
                "min-h-screen pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500",
              children: [
                (0, a.jsxs)("div", {
                  className: "pt-8 flex flex-col gap-6",
                  children: [
                    (0, a.jsxs)(o.$, {
                      variant: "ghost",
                      onClick: () => t.back(),
                      className:
                        "w-fit text-neutral-400 hover:text-white pl-0 hover:bg-transparent",
                      children: [
                        (0, a.jsx)(f.A, { className: "mr-2", size: 18 }),
                        " Back to Market",
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-col md:flex-row md:items-center justify-between gap-6",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-4",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "w-16 h-16 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl",
                              children: T.image_url
                                ? (0, a.jsx)("img", {
                                    src: T.image_url,
                                    className: "w-full h-full object-cover",
                                  })
                                : (0, a.jsx)("span", {
                                    className: "text-2xl font-bold font-serif text-neutral-600",
                                    children: T.symbol[0],
                                  }),
                            }),
                            (0, a.jsxs)("div", {
                              children: [
                                (0, a.jsx)("h1", {
                                  className:
                                    "text-3xl md:text-4xl font-bold font-serif text-white tracking-tight",
                                  children: T.name,
                                }),
                                (0, a.jsxs)("div", {
                                  className: "flex items-center gap-3 mt-1",
                                  children: [
                                    (0, a.jsx)(c.E, {
                                      variant: "secondary",
                                      className:
                                        "bg-white/10 text-white border-white/10 text-xs px-2",
                                      children: T.symbol,
                                    }),
                                    (0, a.jsxs)("span", {
                                      className: "text-sm text-neutral-500",
                                      children: [
                                        "Created by ",
                                        T.creator.slice(0, 4),
                                        "...",
                                        T.creator.slice(-4),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)(o.$, {
                          variant: "outline",
                          onClick: () => {
                            if (!T) return;
                            let e = "Check out "
                                .concat(T.name, " ($")
                                .concat(
                                  T.symbol,
                                  ") on Axis Protocol. The next gen ETF on Solana."
                                ),
                              s = "https://twitter.com/intent/tweet?text=".concat(
                                encodeURIComponent(e)
                              );
                            window.open(s, "_blank");
                          },
                          className:
                            "border-white/10 bg-black hover:bg-neutral-900 text-neutral-400 hover:text-white",
                          children: [
                            (0, a.jsx)(p.A, { size: 18, className: "mr-2" }),
                            " Share on X",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "lg:col-span-2 space-y-8",
                      children: [
                        (0, a.jsxs)(h.Zp, {
                          className: "bg-[#0A0A0A] border-white/10 shadow-2xl overflow-hidden",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-b border-white/5 bg-white/[0.02]",
                              children: [
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "text-[10px] uppercase text-neutral-500 font-bold tracking-wider mb-1",
                                      children: "Price",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "text-2xl font-mono text-white",
                                      children: ["$", "1.24"],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "text-[10px] uppercase text-neutral-500 font-bold tracking-wider mb-1",
                                      children: "APY (Est.)",
                                    }),
                                    (0, a.jsx)("div", {
                                      className: "text-2xl font-mono text-emerald-400",
                                      children: "12.4%",
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "text-[10px] uppercase text-neutral-500 font-bold tracking-wider mb-1",
                                      children: "TVL",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "text-2xl font-mono text-white",
                                      children: [
                                        "$",
                                        (null == (e = T.min_liquidity)
                                          ? void 0
                                          : e.toLocaleString()) || "0",
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "text-[10px] uppercase text-neutral-500 font-bold tracking-wider mb-1",
                                      children: "24h Change",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className:
                                        "text-2xl font-mono text-emerald-400 flex items-center",
                                      children: [
                                        (0, a.jsx)(b.A, { size: 16, className: "mr-1" }),
                                        " +2.4%",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "p-6 h-[350px] w-full",
                              children: (0, a.jsx)(w.u, {
                                width: "100%",
                                height: "100%",
                                children: (0, a.jsxs)(y.Q, {
                                  data: W,
                                  children: [
                                    (0, a.jsx)("defs", {
                                      children: (0, a.jsxs)("linearGradient", {
                                        id: "colorValue",
                                        x1: "0",
                                        y1: "0",
                                        x2: "0",
                                        y2: "1",
                                        children: [
                                          (0, a.jsx)("stop", {
                                            offset: "5%",
                                            stopColor: "#10b981",
                                            stopOpacity: 0.3,
                                          }),
                                          (0, a.jsx)("stop", {
                                            offset: "95%",
                                            stopColor: "#10b981",
                                            stopOpacity: 0,
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, a.jsx)(k.d, {
                                      strokeDasharray: "3 3",
                                      stroke: "#333",
                                      vertical: !1,
                                    }),
                                    (0, a.jsx)(A.W, { dataKey: "date", hide: !0 }),
                                    (0, a.jsx)(C.h, { domain: ["auto", "auto"], hide: !0 }),
                                    (0, a.jsx)(S.m, {
                                      contentStyle: {
                                        backgroundColor: "#000",
                                        border: "1px solid #333",
                                        borderRadius: "8px",
                                      },
                                      itemStyle: { color: "#fff" },
                                    }),
                                    (0, a.jsx)(_.Gk, {
                                      type: "monotone",
                                      dataKey: "value",
                                      stroke: "#10b981",
                                      strokeWidth: 2,
                                      fillOpacity: 1,
                                      fill: "url(#colorValue)",
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)(x.tU, {
                          defaultValue: "composition",
                          className: "w-full",
                          children: [
                            (0, a.jsxs)(x.j7, {
                              className: "bg-white/5 border border-white/10 p-1 mb-6",
                              children: [
                                (0, a.jsx)(x.Xi, {
                                  value: "composition",
                                  className: "font-serif w-32",
                                  children: "Composition",
                                }),
                                (0, a.jsx)(x.Xi, {
                                  value: "strategy",
                                  className: "font-serif w-32",
                                  children: "Strategy",
                                }),
                                (0, a.jsx)(x.Xi, {
                                  value: "risk",
                                  className: "font-serif w-32",
                                  children: "Risk",
                                }),
                              ],
                            }),
                            (0, a.jsx)(x.av, {
                              value: "composition",
                              className: "space-y-4 animate-in fade-in",
                              children: (0, a.jsxs)(h.Zp, {
                                className: "bg-[#0A0A0A] border-white/10 p-6",
                                children: [
                                  (0, a.jsxs)("h3", {
                                    className:
                                      "text-lg font-bold font-serif text-white mb-6 flex items-center gap-2",
                                    children: [
                                      (0, a.jsx)(g.A, { size: 18, className: "text-emerald-400" }),
                                      " Asset Allocation",
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "space-y-4",
                                    children:
                                      T.composition && T.composition.length > 0
                                        ? T.composition.map((e, s) =>
                                            (0, a.jsxs)(
                                              "div",
                                              {
                                                className:
                                                  "flex items-center justify-between group",
                                                children: [
                                                  (0, a.jsxs)("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                      (0, a.jsx)("div", {
                                                        className:
                                                          "w-10 h-10 rounded-full bg-white/5 p-1.5 border border-white/5 group-hover:border-emerald-500/30 transition-colors",
                                                        children: (0, a.jsx)("img", {
                                                          src: e.token.logoURI,
                                                          className:
                                                            "w-full h-full rounded-full object-cover",
                                                        }),
                                                      }),
                                                      (0, a.jsxs)("div", {
                                                        children: [
                                                          (0, a.jsx)("div", {
                                                            className: "font-bold text-white",
                                                            children: e.token.symbol,
                                                          }),
                                                          (0, a.jsx)("div", {
                                                            className: "text-xs text-neutral-500",
                                                            children: e.token.name,
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, a.jsxs)("div", {
                                                    className:
                                                      "flex items-center gap-4 w-1/3 justify-end",
                                                    children: [
                                                      (0, a.jsx)(m.k, {
                                                        value: e.weight,
                                                        className: "h-2 w-24 bg-white/5",
                                                        indicatorClassName: "bg-emerald-500",
                                                      }),
                                                      (0, a.jsxs)("span", {
                                                        className:
                                                          "font-mono text-white w-12 text-right",
                                                        children: [e.weight, "%"],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              s
                                            )
                                          )
                                        : (0, a.jsx)("div", {
                                            className: "text-neutral-500 text-center py-8",
                                            children: "No composition data available.",
                                          }),
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)(x.av, {
                              value: "strategy",
                              className: "animate-in fade-in",
                              children: (0, a.jsxs)(h.Zp, {
                                className: "bg-[#0A0A0A] border-white/10 p-6",
                                children: [
                                  (0, a.jsx)("h3", {
                                    className: "text-lg font-bold font-serif text-white mb-4",
                                    children: "Investment Strategy",
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-neutral-400 leading-relaxed font-serif",
                                    children: T.description || "No description provided.",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "mt-8 grid grid-cols-2 gap-4",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "p-4 rounded-lg bg-white/5 border border-white/5",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className:
                                              "text-xs text-neutral-500 uppercase tracking-wider mb-1",
                                            children: "Rebalance Type",
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "text-white font-medium",
                                            children: "Momentum Based",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "p-4 rounded-lg bg-white/5 border border-white/5",
                                        children: [
                                          (0, a.jsx)("div", {
                                            className:
                                              "text-xs text-neutral-500 uppercase tracking-wider mb-1",
                                            children: "Frequency",
                                          }),
                                          (0, a.jsx)("div", {
                                            className: "text-white font-medium",
                                            children: "Weekly / Threshold",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)(x.av, {
                              value: "risk",
                              className: "animate-in fade-in",
                              children: (0, a.jsxs)(h.Zp, {
                                className: "bg-[#0A0A0A] border-white/10 p-6 space-y-6",
                                children: [
                                  (0, a.jsxs)("h3", {
                                    className:
                                      "text-lg font-bold font-serif text-white flex items-center gap-2",
                                    children: [
                                      (0, a.jsx)(j.A, { className: "text-yellow-500", size: 18 }),
                                      " Risk Disclosure",
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "space-y-4 text-sm text-neutral-400 leading-relaxed font-serif",
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className:
                                          "p-4 bg-yellow-950/10 border border-yellow-900/20 rounded-lg",
                                        children: [
                                          (0, a.jsx)("h4", {
                                            className: "text-yellow-500 font-bold mb-1",
                                            children: "Smart Contract Risk",
                                          }),
                                          (0, a.jsx)("p", {
                                            children:
                                              "While Axis Protocol undergoes rigorous audits, smart contracts are experimental technology. Unforeseen bugs or vulnerabilities could lead to loss of funds.",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "p-4 bg-white/5 border border-white/5 rounded-lg",
                                        children: [
                                          (0, a.jsx)("h4", {
                                            className: "text-white font-bold mb-1",
                                            children: "Market Volatility",
                                          }),
                                          (0, a.jsx)("p", {
                                            children:
                                              "Crypto assets are highly volatile. The value of this ETF can fluctuate significantly based on the performance of underlying assets. Past performance is not indicative of future results.",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)("div", {
                                        className:
                                          "p-4 bg-white/5 border border-white/5 rounded-lg",
                                        children: [
                                          (0, a.jsx)("h4", {
                                            className: "text-white font-bold mb-1",
                                            children: "Liquidity Risk",
                                          }),
                                          (0, a.jsx)("p", {
                                            children:
                                              "Under extreme market conditions, liquidity for underlying assets may dry up, potentially causing delays in rebalancing or withdrawals.",
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)("p", {
                                        className: "text-xs text-neutral-600 italic mt-4",
                                        children:
                                          "By depositing into this vault, you acknowledge that you have read and understood these risks. Axis Protocol is not responsible for any financial losses incurred.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "lg:col-span-1",
                      children: (0, a.jsx)("div", {
                        className: "sticky top-24",
                        children: (0, a.jsxs)(h.Zp, {
                          className:
                            "bg-[#0E0E0E] border border-white/10 shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] overflow-hidden",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "p-4 border-b border-white/5 flex items-center justify-between",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "flex items-center gap-2",
                                  children: (0, a.jsxs)(o.$, {
                                    size: "sm",
                                    variant: "ghost",
                                    className:
                                      "h-8 px-2 text-neutral-500 hover:text-white border border-white/5 bg-white/5 text-xs",
                                    children: [
                                      "Slippage: 1% ",
                                      (0, a.jsx)(v.A, { size: 12, className: "ml-1" }),
                                    ],
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "relative w-6 h-6 flex items-center justify-center",
                                  children: (0, a.jsxs)("svg", {
                                    className: "w-full h-full -rotate-90",
                                    children: [
                                      (0, a.jsx)("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        fill: "none",
                                        className: "text-neutral-800",
                                      }),
                                      (0, a.jsx)("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "#10b981",
                                        strokeWidth: "2",
                                        fill: "none",
                                        strokeDasharray: "62.8",
                                        strokeDashoffset: 62.8 * (1 - O / 30),
                                        className: "transition-all duration-100 ease-linear",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)(h.Wu, {
                              className: "p-5 space-y-1",
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "bg-black/40 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex justify-between text-xs text-neutral-500 mb-2",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: "font-bold",
                                          children: "Sell",
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: "flex gap-2",
                                          children: [
                                            (0, a.jsxs)("span", {
                                              children: [
                                                "Avail: ",
                                                "deposit" === $ ? R.toLocaleString() : "100.00",
                                              ],
                                            }),
                                            (0, a.jsx)("button", {
                                              onClick: () => {
                                                "deposit" === $ ? V(R.toString()) : V("100");
                                              },
                                              className:
                                                "text-emerald-500 hover:text-emerald-400 font-bold text-[10px] bg-emerald-950/30 px-1.5 rounded",
                                              children: "MAX",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        (0, a.jsx)(d.p, {
                                          type: "number",
                                          placeholder: "0.00",
                                          value: X,
                                          onChange: (e) => V(e.target.value),
                                          className:
                                            "border-none bg-transparent text-2xl font-mono font-bold text-white p-0 h-auto focus-visible:ring-0 placeholder:text-neutral-700",
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "flex items-center gap-2 bg-neutral-900 px-3 py-1.5 rounded-full border border-white/10 shrink-0",
                                          children: [
                                            (0, a.jsx)("img", {
                                              src:
                                                "deposit" === $
                                                  ? "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png"
                                                  : T.image_url,
                                              className: "w-5 h-5 rounded-full",
                                            }),
                                            (0, a.jsx)("span", {
                                              className: "font-bold text-sm text-white",
                                              children: "deposit" === $ ? "USDC" : T.symbol,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className: "flex justify-center -my-3 relative z-10",
                                  children: (0, a.jsx)("button", {
                                    onClick: () => {
                                      (L((e) => ("deposit" === e ? "withdraw" : "deposit")), V(""));
                                    },
                                    className:
                                      "bg-neutral-900 border border-white/10 p-2 rounded-lg text-neutral-400 hover:text-white hover:border-emerald-500/50 transition-all active:scale-95 group",
                                    children: (0, a.jsx)(N.A, {
                                      size: 16,
                                      className: "transition-transform duration-500 ".concat(
                                        "withdraw" === $ ? "rotate-180" : ""
                                      ),
                                    }),
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "bg-black/40 rounded-xl p-4 pt-5 border border-white/5 hover:border-white/10 transition-colors",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "flex justify-between text-xs text-neutral-500 mb-2",
                                      children: (0, a.jsx)("span", {
                                        className: "font-bold",
                                        children: "Buy",
                                      }),
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex items-center gap-3",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className:
                                            "flex-1 text-2xl font-mono font-bold text-neutral-400 truncate",
                                          children: q > 0 ? Y.toFixed(4) : "0.00",
                                        }),
                                        (0, a.jsxs)("div", {
                                          className:
                                            "flex items-center gap-2 bg-neutral-900 px-3 py-1.5 rounded-full border border-white/10 shrink-0",
                                          children: [
                                            (0, a.jsx)("img", {
                                              src:
                                                "deposit" === $
                                                  ? T.image_url
                                                  : "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png",
                                              className: "w-5 h-5 rounded-full",
                                            }),
                                            (0, a.jsx)("span", {
                                              className: "font-bold text-sm text-white",
                                              children: "deposit" === $ ? T.symbol : "USDC",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "pt-4 px-2 space-y-3",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between text-xs",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className:
                                            "text-neutral-500 border-b border-dashed border-neutral-700 cursor-help",
                                          children: "Effective Implied APY",
                                        }),
                                        (0, a.jsx)("span", {
                                          className: "text-red-400 font-mono",
                                          children: "-12.5%",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between text-xs",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: "text-neutral-500",
                                          children: "Trading Fee (0.5%)",
                                        }),
                                        (0, a.jsxs)("span", {
                                          className: "text-white font-mono flex items-center gap-1",
                                          children: [
                                            G.toFixed(2),
                                            " ",
                                            (0, a.jsx)("span", {
                                              className: "text-neutral-600",
                                              children: "USDC",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between text-xs",
                                      children: [
                                        (0, a.jsxs)("span", {
                                          className: "text-neutral-500",
                                          children: ["Price per ", T.symbol],
                                        }),
                                        (0, a.jsxs)("span", {
                                          className: "text-white font-mono flex items-center gap-1",
                                          children: [
                                            1.24,
                                            " ",
                                            (0, a.jsx)("span", {
                                              className: "text-neutral-600",
                                              children: "USDC",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "flex justify-between text-xs",
                                      children: [
                                        (0, a.jsx)("span", {
                                          className: "text-neutral-500",
                                          children: "Price Impact",
                                        }),
                                        (0, a.jsxs)("span", {
                                          className: "".concat(
                                            K > 1 ? "text-yellow-500" : "text-emerald-400",
                                            " font-mono"
                                          ),
                                          children: [K, "%"],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className: "pt-4",
                                  children: (0, a.jsx)(o.$, {
                                    size: "lg",
                                    onClick: Q,
                                    disabled: B,
                                    className:
                                      "w-full h-14 font-bold text-lg rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white shadow-lg transition-all",
                                    children: B
                                      ? (0, a.jsx)(u.A, { className: "animate-spin" })
                                      : "SWAP",
                                  }),
                                }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "mt-4 p-4 rounded-xl border border-sky-500/20 bg-sky-950/10 text-center space-y-1",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className: "text-xs text-neutral-400",
                                      children: "You will receive",
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "text-xl font-bold text-white font-mono",
                                      children: [
                                        q > 0 ? Y.toFixed(4) : "0.00",
                                        " ",
                                        (0, a.jsx)("span", {
                                          className: "text-sm",
                                          children: "deposit" === $ ? T.symbol : "USDC",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "text-[10px] text-neutral-500",
                                      children: [
                                        "(≈ $",
                                        q > 0 ? (0.995 * q).toFixed(2) : "0.00",
                                        " Value)",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            })
          : (0, a.jsx)("div", {
              className: "min-h-screen flex items-center justify-center",
              children: (0, a.jsx)(u.A, { className: "animate-spin text-white" }),
            });
      }
    },
  },
  (e) => {
    (e.O(0, [956, 14, 828, 284, 191, 619, 957, 441, 255, 358], () => e((e.s = 67390))),
      (_N_E = e.O()));
  },
]);
