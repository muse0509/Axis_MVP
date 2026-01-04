(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [281],
  {
    27346: (e, t, s) => {
      "use strict";
      s.d(t, { F: () => i });
      var a = s(95155);
      s(12115);
      var l = s(96898),
        r = s(25016);
      function i(e) {
        let { className: t, children: s, ...i } = e;
        return (0, a.jsxs)(l.bL, {
          "data-slot": "scroll-area",
          className: (0, r.cn)("relative", t),
          ...i,
          children: [
            (0, a.jsx)(l.LM, {
              "data-slot": "scroll-area-viewport",
              className:
                "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
              children: s,
            }),
            (0, a.jsx)(n, {}),
            (0, a.jsx)(l.OK, {}),
          ],
        });
      }
      function n(e) {
        let { className: t, orientation: s = "vertical", ...i } = e;
        return (0, a.jsx)(l.VM, {
          "data-slot": "scroll-area-scrollbar",
          orientation: s,
          className: (0, r.cn)(
            "flex touch-none p-px transition-colors select-none",
            "vertical" === s && "h-full w-2.5 border-l border-l-transparent",
            "horizontal" === s && "h-2.5 flex-col border-t border-t-transparent",
            t
          ),
          ...i,
          children: (0, a.jsx)(l.lr, {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full",
          }),
        });
      }
    },
    54679: (e, t, s) => {
      "use strict";
      s.d(t, { Cf: () => x, L3: () => h, c7: () => m, lG: () => n, rr: () => u, zM: () => o });
      var a = s(95155);
      s(12115);
      var l = s(58547),
        r = s(65229),
        i = s(25016);
      function n(e) {
        let { ...t } = e;
        return (0, a.jsx)(l.bL, { "data-slot": "dialog", ...t });
      }
      function o(e) {
        let { ...t } = e;
        return (0, a.jsx)(l.l9, { "data-slot": "dialog-trigger", ...t });
      }
      function c(e) {
        let { ...t } = e;
        return (0, a.jsx)(l.ZL, { "data-slot": "dialog-portal", ...t });
      }
      function d(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(l.hJ, {
          "data-slot": "dialog-overlay",
          className: (0, i.cn)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
            t
          ),
          ...s,
        });
      }
      function x(e) {
        let { className: t, children: s, showCloseButton: n = !0, ...o } = e;
        return (0, a.jsxs)(c, {
          "data-slot": "dialog-portal",
          children: [
            (0, a.jsx)(d, {}),
            (0, a.jsxs)(l.UC, {
              "data-slot": "dialog-content",
              className: (0, i.cn)(
                "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
                t
              ),
              ...o,
              children: [
                s,
                n &&
                  (0, a.jsxs)(l.bm, {
                    "data-slot": "dialog-close",
                    className:
                      "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    children: [
                      (0, a.jsx)(r.A, {}),
                      (0, a.jsx)("span", { className: "sr-only", children: "Close" }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function m(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          "data-slot": "dialog-header",
          className: (0, i.cn)("flex flex-col gap-2 text-center sm:text-left", t),
          ...s,
        });
      }
      function h(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(l.hE, {
          "data-slot": "dialog-title",
          className: (0, i.cn)("text-lg leading-none font-semibold", t),
          ...s,
        });
      }
      function u(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)(l.VY, {
          "data-slot": "dialog-description",
          className: (0, i.cn)("text-muted-foreground text-sm", t),
          ...s,
        });
      }
    },
    70560: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 98649));
    },
    98649: (e, t, s) => {
      "use strict";
      (s.r(t), s.d(t, { default: () => F }));
      var a = s(95155),
        l = s(12115),
        r = s(20063),
        i = s(98183),
        n = s(55955),
        o = s(83209),
        c = s(97003),
        d = s(67812),
        x = s(54679),
        m = s(27346),
        h = s(26265),
        u = s(12723),
        f = s(74291),
        g = s(69386),
        p = s(33420),
        j = s(37665),
        b = s(75882),
        v = s(1524),
        N = s(7013),
        w = s(67840),
        y = s(60709),
        A = s(5917),
        z = s(75426),
        _ = s(97378),
        k = s(87454),
        C = s(18720);
      function F() {
        let e = (0, r.useRouter)(),
          { publicKey: t } = (0, n.v)(),
          {
            vaults: s,
            positions: F,
            usdcBalance: E,
            email: R,
            fetchVaults: S,
            fetchBalances: $,
          } = (0, i.A)(),
          [L, V] = (0, l.useState)([]),
          [Z, M] = (0, l.useState)(null);
        ((0, l.useEffect)(() => {
          (S(), t && $());
        }, [t, S, $]),
          (0, l.useEffect)(() => {
            R &&
              fetch("".concat("http://localhost:8787", "/my-invites?email=").concat(R))
                .then((e) => e.json())
                .then((e) => {
                  Array.isArray(e) && V(e);
                })
                .catch((e) => console.error("Failed to fetch invites:", e));
          }, [R]));
        let W = (e) => {
            let t = "https://twitter.com/intent/tweet?text=".concat(
              encodeURIComponent(
                "I'm inviting @friend to join the @Axis__Solana closed beta.\n\nThe first on-chain ETF protocol.\n\nMy Access Code: ".concat(
                  e,
                  "\n\n#AxisProtocol #Solana"
                )
              )
            );
            window.open(t, "_blank");
          },
          D = (e) => {
            (navigator.clipboard.writeText(e),
              M(e),
              C.oR.success("Code copied"),
              setTimeout(() => M(null), 2e3));
          },
          I = (0, l.useMemo)(
            () =>
              F.map((e) => {
                let t = s.find((t) => t.id === e.vaultId);
                if (!t) return null;
                let a = 1.05 * e.lpAmount,
                  l = a - e.entryValue,
                  r = (l / e.entryValue) * 100;
                return { ...e, vault: t, currentValue: a, profit: l, profitPercent: r };
              }).filter((e) => null !== e),
            [F, s]
          ),
          B = I.reduce((e, t) => e + t.currentValue, 0),
          P = I.reduce((e, t) => e + t.profit, 0),
          T = I.map((e) => ({ name: e.vault.symbol, value: e.currentValue, color: "#10b981" })),
          O = ["#10b981", "#3b82f6", "#8b5cf6", "#f59e0b", "#ef4444"],
          U = L.filter((e) => !e.used_by_user_id),
          Y = U.length > 0 ? U[0] : null;
        return t
          ? (0, a.jsxs)("div", {
              className:
                "min-h-screen pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500",
              children: [
                (0, a.jsxs)("div", {
                  className: "pt-8 mb-8",
                  children: [
                    (0, a.jsx)("h1", {
                      className:
                        "text-4xl md:text-5xl font-bold text-white font-serif tracking-tight mb-2",
                      children: "Dashboard",
                    }),
                    (0, a.jsx)("p", {
                      className: "text-neutral-400 font-serif italic text-lg",
                      children: "Welcome back. Here is your performance overview.",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                  children: [
                    (0, a.jsxs)(o.Zp, {
                      className: "bg-[#0A0A0A] border-white/10 shadow-lg group",
                      children: [
                        (0, a.jsxs)(o.aR, {
                          className: "pb-2 flex flex-row items-center justify-between",
                          children: [
                            (0, a.jsx)(o.ZB, {
                              className:
                                "text-sm font-medium text-neutral-400 uppercase tracking-wider",
                              children: "Net Worth",
                            }),
                            (0, a.jsx)(b.A, {
                              size: 20,
                              className:
                                "text-neutral-600 group-hover:text-white transition-colors",
                            }),
                          ],
                        }),
                        (0, a.jsxs)(o.Wu, {
                          children: [
                            (0, a.jsxs)("div", {
                              className: "text-3xl font-bold font-mono text-white mb-1",
                              children: [
                                "$",
                                (B + E).toLocaleString(void 0, {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "text-xs text-neutral-500",
                              children: ["Wallet: $", E.toLocaleString()],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)(o.Zp, {
                      className: "bg-[#0A0A0A] border-white/10 shadow-lg group",
                      children: [
                        (0, a.jsxs)(o.aR, {
                          className: "pb-2 flex flex-row items-center justify-between",
                          children: [
                            (0, a.jsx)(o.ZB, {
                              className:
                                "text-sm font-medium text-neutral-400 uppercase tracking-wider",
                              children: "Total Profit",
                            }),
                            (0, a.jsx)(v.A, {
                              size: 20,
                              className:
                                P >= 0
                                  ? "text-emerald-600 group-hover:text-emerald-400"
                                  : "text-red-600 group-hover:text-red-400",
                            }),
                          ],
                        }),
                        (0, a.jsxs)(o.Wu, {
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "text-3xl font-bold font-mono mb-1 flex items-center gap-2 ".concat(
                                  P >= 0 ? "text-emerald-400" : "text-red-400"
                                ),
                              children: [
                                P >= 0 ? "+" : "",
                                "$",
                                Math.abs(P).toLocaleString(void 0, { minimumFractionDigits: 2 }),
                              ],
                            }),
                            (0, a.jsxs)(d.E, {
                              variant: "secondary",
                              className: "".concat(
                                P >= 0
                                  ? "bg-emerald-950/30 text-emerald-400"
                                  : "bg-red-950/30 text-red-400",
                                " border-0"
                              ),
                              children: [
                                P >= 0
                                  ? (0, a.jsx)(N.A, { size: 12, className: "mr-1" })
                                  : (0, a.jsx)(w.A, { size: 12, className: "mr-1" }),
                                (B > 0 ? (P / (B - P)) * 100 : 0).toFixed(2),
                                "%",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)(o.Zp, {
                      className:
                        "bg-gradient-to-br from-[#0A0A0A] to-[#111] border-white/10 shadow-lg group relative overflow-hidden",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none",
                        }),
                        (0, a.jsxs)(o.aR, {
                          className:
                            "pb-2 flex flex-row items-center justify-between relative z-10",
                          children: [
                            (0, a.jsxs)(o.ZB, {
                              className:
                                "text-sm font-medium text-neutral-400 uppercase tracking-wider flex items-center gap-2",
                              children: [
                                (0, a.jsx)(y.A, { size: 14, className: "text-emerald-500" }),
                                " Invites",
                              ],
                            }),
                            (0, a.jsxs)(d.E, {
                              variant: "outline",
                              className:
                                "border-emerald-500/30 text-emerald-400 bg-emerald-950/10 text-[10px]",
                              children: [U.length, " Remaining"],
                            }),
                          ],
                        }),
                        (0, a.jsx)(o.Wu, {
                          className: "relative z-10",
                          children: Y
                            ? (0, a.jsxs)("div", {
                                className: "space-y-3",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className:
                                      "flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/10",
                                    children: [
                                      (0, a.jsx)("code", {
                                        className:
                                          "text-xl font-bold text-white font-mono tracking-widest pl-2",
                                        children: Y.code,
                                      }),
                                      (0, a.jsxs)("div", {
                                        className: "flex gap-1",
                                        children: [
                                          (0, a.jsx)(c.$, {
                                            size: "icon",
                                            variant: "ghost",
                                            className: "h-8 w-8 hover:text-white",
                                            onClick: () => D(Y.code),
                                            children:
                                              Z === Y.code
                                                ? (0, a.jsx)(A.A, {
                                                    size: 14,
                                                    className: "text-emerald-500",
                                                  })
                                                : (0, a.jsx)(z.A, { size: 14 }),
                                          }),
                                          (0, a.jsx)(c.$, {
                                            size: "icon",
                                            variant: "ghost",
                                            className: "h-8 w-8 hover:text-[#1DA1F2]",
                                            onClick: () => W(Y.code),
                                            children: (0, a.jsx)(_.A, { size: 14 }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)(x.lG, {
                                    children: [
                                      (0, a.jsx)(x.zM, {
                                        asChild: !0,
                                        children: (0, a.jsxs)(c.$, {
                                          variant: "link",
                                          className:
                                            "text-xs text-neutral-500 hover:text-white w-full h-auto p-0",
                                          children: ["View all ", L.length, " codes"],
                                        }),
                                      }),
                                      (0, a.jsxs)(x.Cf, {
                                        className:
                                          "bg-[#0A0A0A] border-white/10 text-white max-w-2xl max-h-[80vh]",
                                        children: [
                                          (0, a.jsx)(x.c7, {
                                            children: (0, a.jsx)(x.L3, {
                                              className: "font-serif text-2xl",
                                              children: "Manage Invites",
                                            }),
                                          }),
                                          (0, a.jsx)(m.F, {
                                            className: "h-[400px] pr-4 mt-4",
                                            children: (0, a.jsx)("div", {
                                              className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                                              children: L.map((e) =>
                                                (0, a.jsxs)(
                                                  "div",
                                                  {
                                                    className:
                                                      "p-3 rounded-lg border flex flex-col gap-2 ".concat(
                                                        e.used_by_user_id
                                                          ? "bg-neutral-900/30 border-neutral-800 opacity-50"
                                                          : "bg-white/5 border-white/10"
                                                      ),
                                                    children: [
                                                      (0, a.jsxs)("div", {
                                                        className:
                                                          "flex justify-between items-center",
                                                        children: [
                                                          (0, a.jsx)("span", {
                                                            className:
                                                              "font-mono font-bold ".concat(
                                                                e.used_by_user_id
                                                                  ? "text-neutral-500 line-through"
                                                                  : "text-white"
                                                              ),
                                                            children: e.code,
                                                          }),
                                                          !e.used_by_user_id &&
                                                            (0, a.jsx)("button", {
                                                              onClick: () => D(e.code),
                                                              className:
                                                                "text-neutral-500 hover:text-white",
                                                              children: (0, a.jsx)(z.A, {
                                                                size: 12,
                                                              }),
                                                            }),
                                                        ],
                                                      }),
                                                      e.used_by_user_id
                                                        ? (0, a.jsx)(d.E, {
                                                            variant: "secondary",
                                                            className:
                                                              "justify-center bg-neutral-800 text-[10px]",
                                                            children: "USED",
                                                          })
                                                        : (0, a.jsx)(c.$, {
                                                            size: "sm",
                                                            variant: "outline",
                                                            className:
                                                              "h-7 text-[10px] border-emerald-500/30 text-emerald-400 hover:bg-emerald-950/30",
                                                            onClick: () => W(e.code),
                                                            children: "Share",
                                                          }),
                                                    ],
                                                  },
                                                  e.code
                                                )
                                              ),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : (0, a.jsx)("div", {
                                className: "text-sm text-neutral-500 py-2",
                                children: "No active invites available.",
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                  children: [
                    (0, a.jsxs)(o.Zp, {
                      className: "lg:col-span-1 bg-[#0A0A0A] border-white/10 h-[400px]",
                      children: [
                        (0, a.jsx)(o.aR, {
                          children: (0, a.jsxs)(o.ZB, {
                            className: "flex items-center gap-2 text-white font-serif",
                            children: [
                              (0, a.jsx)(k.A, { size: 18, className: "text-emerald-400" }),
                              " Allocation",
                            ],
                          }),
                        }),
                        (0, a.jsx)(o.Wu, {
                          className: "h-[320px]",
                          children:
                            I.length > 0
                              ? (0, a.jsx)(h.u, {
                                  width: "100%",
                                  height: "100%",
                                  children: (0, a.jsxs)(u.r, {
                                    children: [
                                      (0, a.jsx)(f.Fq, {
                                        data: T,
                                        cx: "50%",
                                        cy: "50%",
                                        innerRadius: 60,
                                        outerRadius: 80,
                                        paddingAngle: 5,
                                        dataKey: "value",
                                        children: T.map((e, t) =>
                                          (0, a.jsx)(
                                            g.f,
                                            { fill: O[t % O.length] },
                                            "cell-".concat(t)
                                          )
                                        ),
                                      }),
                                      (0, a.jsx)(p.m, {
                                        contentStyle: {
                                          backgroundColor: "#000",
                                          border: "1px solid #333",
                                          borderRadius: "8px",
                                        },
                                        itemStyle: { color: "#fff" },
                                        formatter: (e) => {
                                          let t =
                                            "number" == typeof e ? e : Number(null != e ? e : 0);
                                          return ["$".concat(t.toFixed(2)), "Value"];
                                        },
                                      }),
                                      (0, a.jsx)(j.s, { verticalAlign: "bottom", height: 36 }),
                                    ],
                                  }),
                                })
                              : (0, a.jsxs)("div", {
                                  className:
                                    "h-full flex flex-col items-center justify-center text-neutral-500",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "w-16 h-16 rounded-full border-2 border-dashed border-neutral-800 flex items-center justify-center mb-2",
                                      children: (0, a.jsx)(k.A, { size: 24 }),
                                    }),
                                    "No assets yet",
                                  ],
                                }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)(o.Zp, {
                      className: "lg:col-span-2 bg-[#0A0A0A] border-white/10 min-h-[400px]",
                      children: [
                        (0, a.jsx)(o.aR, {
                          children: (0, a.jsx)(o.ZB, {
                            className: "text-white font-serif",
                            children: "Your Assets",
                          }),
                        }),
                        (0, a.jsx)(o.Wu, {
                          children:
                            0 === I.length
                              ? (0, a.jsxs)("div", {
                                  className: "text-center py-20",
                                  children: [
                                    (0, a.jsx)("p", {
                                      className: "text-neutral-500 mb-4",
                                      children: "You don't own any ETFs yet.",
                                    }),
                                    (0, a.jsx)(c.$, {
                                      onClick: () => e.push("/"),
                                      variant: "outline",
                                      className:
                                        "border-emerald-500/30 text-emerald-400 hover:bg-emerald-950/20",
                                      children: "Explore Market",
                                    }),
                                  ],
                                })
                              : (0, a.jsxs)("div", {
                                  className: "space-y-4",
                                  children: [
                                    (0, a.jsxs)("div", {
                                      className:
                                        "grid grid-cols-12 text-[10px] uppercase text-neutral-500 font-bold tracking-wider px-4 pb-2 border-b border-white/5",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: "col-span-4",
                                          children: "Asset",
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "col-span-3 text-right",
                                          children: "Balance",
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "col-span-3 text-right",
                                          children: "Value",
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "col-span-2 text-right",
                                          children: "P&L",
                                        }),
                                      ],
                                    }),
                                    I.map((t) =>
                                      (0, a.jsxs)(
                                        "div",
                                        {
                                          className:
                                            "grid grid-cols-12 items-center px-4 py-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer",
                                          onClick: () => e.push("/vault/".concat(t.vaultId)),
                                          children: [
                                            (0, a.jsxs)("div", {
                                              className: "col-span-4 flex items-center gap-3",
                                              children: [
                                                (0, a.jsx)("div", {
                                                  className:
                                                    "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white text-xs",
                                                  children: t.vault.symbol[0],
                                                }),
                                                (0, a.jsxs)("div", {
                                                  children: [
                                                    (0, a.jsx)("div", {
                                                      className: "font-bold text-white text-sm",
                                                      children: t.vault.name,
                                                    }),
                                                    (0, a.jsx)("div", {
                                                      className: "text-xs text-neutral-500",
                                                      children: t.vault.symbol,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "col-span-3 text-right",
                                              children: (0, a.jsx)("div", {
                                                className: "text-white font-mono text-sm",
                                                children: t.lpAmount.toFixed(2),
                                              }),
                                            }),
                                            (0, a.jsxs)("div", {
                                              className: "col-span-3 text-right",
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className: "text-white font-mono text-sm",
                                                  children: [
                                                    "$",
                                                    t.currentValue.toLocaleString(void 0, {
                                                      minimumFractionDigits: 2,
                                                    }),
                                                  ],
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className: "text-[10px] text-neutral-500",
                                                  children: [
                                                    "Avg: $",
                                                    (t.entryValue / t.lpAmount).toFixed(2),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, a.jsxs)("div", {
                                              className: "col-span-2 text-right",
                                              children: [
                                                (0, a.jsxs)("div", {
                                                  className: "font-mono text-sm ".concat(
                                                    t.profit >= 0
                                                      ? "text-emerald-400"
                                                      : "text-red-400"
                                                  ),
                                                  children: [
                                                    t.profit >= 0 ? "+" : "",
                                                    t.profitPercent.toFixed(2),
                                                    "%",
                                                  ],
                                                }),
                                                (0, a.jsxs)("div", {
                                                  className: "text-[10px] ".concat(
                                                    t.profit >= 0
                                                      ? "text-emerald-500/60"
                                                      : "text-red-500/60"
                                                  ),
                                                  children: [
                                                    t.profit >= 0 ? "+" : "",
                                                    "$",
                                                    t.profit.toFixed(2),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        t.vaultId
                                      )
                                    ),
                                  ],
                                }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : (0, a.jsxs)("div", {
              className:
                "min-h-[60vh] flex flex-col items-center justify-center space-y-4 animate-in fade-in",
              children: [
                (0, a.jsx)(b.A, { size: 48, className: "text-neutral-600 mb-2" }),
                (0, a.jsx)("h2", {
                  className: "text-2xl font-bold text-white font-serif",
                  children: "Connect Wallet",
                }),
                (0, a.jsx)("p", {
                  className: "text-neutral-400",
                  children: "Please connect your wallet to view your portfolio.",
                }),
              ],
            });
      }
    },
  },
  (e) => {
    (e.O(0, [956, 14, 71, 284, 171, 110, 957, 441, 255, 358], () => e((e.s = 70560))),
      (_N_E = e.O()));
  },
]);
