(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    6191: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      let s = (0, a(71847).A)("plus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }],
      ]);
    },
    10489: (e, t, a) => {
      "use strict";
      a.d(t, { b: () => n });
      var s = a(12115),
        r = a(97602),
        l = a(95155),
        i = s.forwardRef((e, t) =>
          (0, l.jsx)(r.sG.label, {
            ...e,
            ref: t,
            onMouseDown: (t) => {
              var a;
              t.target.closest("button, input, select, textarea") ||
                (null == (a = e.onMouseDown) || a.call(e, t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault());
            },
          })
        );
      i.displayName = "Label";
      var n = i;
    },
    30926: (e, t, a) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var a in t) Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        })(t, {
          callServer: function () {
            return s.callServer;
          },
          createServerReference: function () {
            return l.createServerReference;
          },
          findSourceMapURL: function () {
            return r.findSourceMapURL;
          },
        }));
      let s = a(41209),
        r = a(85153),
        l = a(77197);
    },
    31432: (e, t, a) => {
      "use strict";
      (a.r(t), a.d(t, { default: () => R }));
      var s = a(95155),
        r = a(12115),
        l = a(98183),
        i = a(20063),
        n = a(90923),
        o = a(97003),
        c = a(83209),
        d = a(67812),
        x = a(71847);
      let u = (0, x.A)("clock", [
        ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
      ]);
      var h = a(75426);
      function m(e) {
        let {
            title: t,
            symbol: a,
            creator: r,
            contract: l,
            tvl: n,
            apy: x,
            createdAt: m,
            imageUrl: f,
            type: g,
          } = e,
          p = (0, i.useRouter)(),
          b = a && a.length > 0 ? a : "?",
          v = b[0];
        return (0, s.jsxs)(c.Zp, {
          className:
            "group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-emerald-500/30",
          children: [
            (0, s.jsx)("div", {
              className:
                "absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]",
            }),
            (0, s.jsxs)(c.Wu, {
              className: "p-6",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex justify-between items-start mb-4",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        f
                          ? (0, s.jsx)("div", {
                              className:
                                "w-12 h-12 rounded-full border border-white/10 overflow-hidden shadow-inner bg-black shrink-0",
                              children: (0, s.jsx)("img", {
                                src: f,
                                alt: b,
                                className: "w-full h-full object-cover",
                              }),
                            })
                          : (0, s.jsx)("div", {
                              className:
                                "w-12 h-12 rounded-full bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center text-xl font-bold font-serif text-emerald-500 shadow-inner shrink-0",
                              children: v,
                            }),
                        (0, s.jsxs)("div", {
                          className: "min-w-0",
                          children: [
                            (0, s.jsx)("h3", {
                              className:
                                "text-lg font-bold text-white font-serif tracking-wide truncate pr-2",
                              children: t || "Unknown Vault",
                            }),
                            (0, s.jsxs)("div", {
                              className: "flex items-center gap-1 text-xs text-neutral-400",
                              children: [
                                (0, s.jsxs)("span", {
                                  className: "truncate",
                                  children: [
                                    "by ",
                                    r
                                      ? "Axis Team" === r
                                        ? "Axis Team"
                                        : r.slice(0, 4) + "..." + r.slice(-4)
                                      : "Unknown",
                                  ],
                                }),
                                "Official" === g &&
                                  (0, s.jsx)(d.E, {
                                    variant: "secondary",
                                    className:
                                      "bg-emerald-950/30 text-emerald-400 border-emerald-500/20 text-[10px] h-4 px-1 shrink-0",
                                    children: "Official",
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "text-right shrink-0",
                      children: [
                        (0, s.jsx)("div", {
                          className: "text-sm text-neutral-500",
                          children: "APY",
                        }),
                        (0, s.jsxs)("div", {
                          className: "text-xl font-bold text-emerald-400 font-serif",
                          children: [x, "%"],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "grid grid-cols-2 gap-4 my-4 p-3 bg-black/20 rounded-lg border border-white/5",
                  children: [
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("div", {
                          className: "text-[10px] text-neutral-500 uppercase tracking-wider",
                          children: "TVL",
                        }),
                        (0, s.jsxs)("div", {
                          className: "text-base font-medium text-white font-serif",
                          children: ["$", (null == n ? void 0 : n.toLocaleString()) || "0"],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "text-right",
                      children: [
                        (0, s.jsx)("div", {
                          className: "text-[10px] text-neutral-500 uppercase tracking-wider",
                          children: "Created",
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "text-sm font-medium text-neutral-300 flex items-center justify-end gap-1",
                          children: [(0, s.jsx)(u, { size: 12 }), " ", m],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex items-center justify-between text-xs text-neutral-500 bg-neutral-900/50 p-2 rounded border border-white/5 mb-4",
                  children: [
                    (0, s.jsx)("span", {
                      className: "font-mono",
                      children: l ? l.slice(0, 6) + "..." + l.slice(-6) : "No Contract",
                    }),
                    (0, s.jsx)("button", {
                      className: "hover:text-white transition-colors",
                      onClick: (e) => {
                        (e.stopPropagation(), l && navigator.clipboard.writeText(l));
                      },
                      children: (0, s.jsx)(h.A, { size: 12 }),
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)(c.wL, {
              className: "p-4 pt-0",
              children: (0, s.jsx)(o.$, {
                className:
                  "flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all font-serif w-full",
                onClick: () => p.push("/vault/".concat(l)),
                children: "View Details",
              }),
            }),
          ],
        });
      }
      var f = a(95740),
        g = a(6191);
      function p(e) {
        if (!e) return "Just now";
        let t = Math.floor(Date.now() / 1e3) - e;
        if (t < 60) return "".concat(t, "s ago");
        let a = Math.floor(t / 60);
        if (a < 60) return "".concat(a, "m ago");
        let s = Math.floor(a / 60);
        if (s < 24) return "".concat(s, "h ago");
        let r = Math.floor(s / 24);
        return "".concat(r, "d ago");
      }
      function b() {
        let e = (0, i.useRouter)(),
          { vaults: t, fetchVaults: a } = (0, l.A)();
        (0, r.useEffect)(() => {
          a();
        }, [a]);
        let c = [...t].sort((e, t) => (t.created_at || 0) - (e.created_at || 0)),
          d = t.filter((e) => "Axis Team" === e.creator || "OFFICIAL" === e.status),
          x = c.filter((e) => "Axis Team" !== e.creator);
        return (0, s.jsxs)("div", {
          className: "space-y-8 pb-20 fade-in animate-in duration-700",
          children: [
            (0, s.jsxs)("div", {
              className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10",
              children: [
                (0, s.jsxs)("div", {
                  className: "space-y-2",
                  children: [
                    (0, s.jsx)("h1", {
                      className:
                        "text-4xl md:text-5xl font-bold text-white font-serif tracking-tight",
                      children: "Market Overview",
                    }),
                    (0, s.jsx)("p", {
                      className: "text-neutral-400 font-serif italic text-lg",
                      children: "Discover and invest in the next generation of decentralized ETFs.",
                    }),
                  ],
                }),
                (0, s.jsxs)(o.$, {
                  onClick: () => e.push("/create"),
                  className:
                    "group relative h-14 px-10 rounded-full bg-white text-black font-serif font-bold text-lg tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] hover:bg-neutral-200 border border-white/50 transition-all duration-300 hover:-translate-y-1",
                  children: [
                    (0, s.jsx)(f.A, {
                      className:
                        "mr-2 h-5 w-5 text-neutral-600 group-hover:text-black transition-colors",
                    }),
                    "Create Your ETF",
                  ],
                }),
              ],
            }),
            (0, s.jsxs)(n.tU, {
              defaultValue: "all",
              className: "w-full",
              children: [
                (0, s.jsxs)(n.j7, {
                  className: "bg-white/5 border border-white/10 p-1 mb-8",
                  children: [
                    (0, s.jsx)(n.Xi, {
                      value: "all",
                      className:
                        "data-[state=active]:bg-emerald-900 data-[state=active]:text-emerald-100 font-serif w-32",
                      children: "All Vaults",
                    }),
                    (0, s.jsx)(n.Xi, {
                      value: "new",
                      className:
                        "data-[state=active]:bg-emerald-900 data-[state=active]:text-emerald-100 font-serif w-32",
                      children: "New 24h",
                    }),
                    (0, s.jsx)(n.Xi, {
                      value: "official",
                      className:
                        "data-[state=active]:bg-indigo-900 data-[state=active]:text-indigo-100 font-serif w-32",
                      children: "Official",
                    }),
                  ],
                }),
                (0, s.jsx)(n.av, {
                  value: "all",
                  className: "space-y-6 focus-visible:outline-none",
                  children:
                    0 === x.length
                      ? (0, s.jsxs)("div", {
                          className:
                            "flex flex-col items-center justify-center py-20 border border-dashed border-white/10 rounded-xl bg-white/5 group cursor-pointer hover:border-white/30 transition-colors",
                          onClick: () => e.push("/create"),
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
                              children: (0, s.jsx)(g.A, {
                                className: "text-neutral-500 group-hover:text-white",
                                size: 32,
                              }),
                            }),
                            (0, s.jsx)("p", {
                              className: "text-neutral-400 font-serif text-lg mb-2",
                              children: "No ETFs found.",
                            }),
                            (0, s.jsx)("p", {
                              className: "text-white font-bold text-sm uppercase tracking-widest",
                              children: "Create the first one",
                            }),
                          ],
                        })
                      : (0, s.jsx)("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                          children: x.map((e) =>
                            (0, s.jsx)(
                              m,
                              {
                                title: e.name,
                                symbol: e.symbol,
                                creator: e.creator,
                                contract: e.id,
                                tvl: e.min_liquidity || 0,
                                apy: e.apy || 0,
                                createdAt: p(e.created_at),
                                imageUrl: e.image_url,
                                type: "Community",
                              },
                              e.id
                            )
                          ),
                        }),
                }),
                (0, s.jsx)(n.av, {
                  value: "new",
                  className: "focus-visible:outline-none",
                  children: (0, s.jsx)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children:
                      0 === x.length
                        ? (0, s.jsx)("div", {
                            className: "col-span-3 text-neutral-500 font-serif text-center py-10",
                            children: "No new ETFs in last 24h.",
                          })
                        : x.map((e) =>
                            (0, s.jsx)(
                              m,
                              {
                                title: e.name,
                                symbol: e.symbol,
                                creator: e.creator,
                                contract: e.id,
                                tvl: e.min_liquidity || 0,
                                apy: e.apy || 0,
                                createdAt: p(e.created_at),
                                imageUrl: e.image_url,
                                type: "Community",
                              },
                              e.id
                            )
                          ),
                  }),
                }),
                (0, s.jsx)(n.av, {
                  value: "official",
                  className: "focus-visible:outline-none",
                  children:
                    0 === d.length
                      ? (0, s.jsx)("div", {
                          className:
                            "text-neutral-500 font-serif text-center py-10 bg-white/5 rounded-xl border border-white/5",
                          children: "Official ETFs coming soon.",
                        })
                      : (0, s.jsx)("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                          children: d.map((e) =>
                            (0, s.jsx)(
                              m,
                              {
                                title: e.name,
                                symbol: e.symbol,
                                creator: "Axis Team",
                                contract: e.id,
                                tvl: e.min_liquidity || 0,
                                apy: e.apy || 0,
                                createdAt: p(e.created_at),
                                imageUrl: e.image_url,
                                type: "Official",
                              },
                              e.id
                            )
                          ),
                        }),
                }),
              ],
            }),
          ],
        });
      }
      var v = a(54679),
        w = a(33789),
        j = a(90235),
        y = a(52987),
        N = a(35299);
      let k = (0, x.A)("mail", [
        ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
        ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }],
      ]);
      var A = a(97378),
        C = a(61362),
        _ = a(18720),
        S = a(55955),
        z = a(30926);
      let M = (0, z.createServerReference)(
          "40bc4c52bcff446ba50abbbcd6ae51f58a83878e58",
          z.callServer,
          void 0,
          z.findSourceMapURL,
          "sendOtpEmail"
        ),
        E = "http://localhost:8787";
      function R() {
        let { isRegistered: e, registerUser: t, login: a } = (0, l.A)(),
          { publicKey: i } = (0, S.v)(),
          [n, c] = (0, r.useState)(!1),
          [d, x] = (0, r.useState)(!1),
          [u, h] = (0, r.useState)(1),
          [m, f] = (0, r.useState)(!1),
          [g, p] = (0, r.useState)(""),
          [z, R] = (0, r.useState)(""),
          [T, L] = (0, r.useState)(""),
          [F, O] = (0, r.useState)(!1);
        if (
          ((0, r.useEffect)(() => {
            c(!0);
          }, []),
          !n)
        )
          return (0, s.jsx)("div", { className: "min-h-screen bg-black" });
        if (e) return (0, s.jsx)(b, {});
        let U = async () => {
            if (g) {
              f(!0);
              try {
                let e = await fetch("".concat(E, "/verify-invite?code=").concat(g)),
                  t = await e.json();
                e.ok && t.valid
                  ? (f(!1), _.oR.success("Code valid."), h(2))
                  : (f(!1), _.oR.error("Invalid or used Invite Code."));
              } catch (e) {
                (console.error(e), f(!1), _.oR.error("Connection error."));
              }
            }
          },
          P = async () => {
            if (!z.includes("@")) return _.oR.error("Invalid email.");
            if (!F) return _.oR.error("Please follow us on X.");
            f(!0);
            let e = await M(z);
            (f(!1),
              e.success
                ? (_.oR.success("Code sent to " + z), h(3))
                : _.oR.error("Failed to send code."));
          },
          X = async () => {
            if (!(T.length < 6)) {
              f(!0);
              try {
                let e = await fetch("".concat(E, "/auth/verify-otp"), {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      email: z,
                      code: T,
                      inviteCode: g,
                      walletAddress: i ? i.toString() : "",
                    }),
                  }),
                  t = await e.json();
                t.success
                  ? (a(t.user), f(!1), x(!1), _.oR.success("Welcome to Axis Protocol."))
                  : (f(!1), _.oR.error(t.message || "Invalid code."));
              } catch (e) {
                (console.error(e), f(!1), _.oR.error("Verification failed."));
              }
            }
          };
        return (0, s.jsxs)("div", {
          className:
            "relative min-h-screen w-full text-white flex flex-col items-center justify-center overflow-hidden",
          children: [
            (0, s.jsx)("div", {
              className:
                "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0",
              children: (0, s.jsx)("div", {
                className:
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/10 blur-[120px] rounded-full",
              }),
            }),
            (0, s.jsx)(_.l$, { position: "top-center", theme: "dark" }),
            (0, s.jsxs)("main", {
              className:
                "relative z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center space-y-12",
              children: [
                (0, s.jsxs)("div", {
                  className: "animate-in fade-in slide-in-from-bottom-4 duration-1000 space-y-6",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs font-medium tracking-widest uppercase backdrop-blur-md",
                      children: "Axis Protocol v0 (Devnet)",
                    }),
                    (0, s.jsxs)("h1", {
                      className:
                        "text-6xl md:text-8xl font-bold font-serif tracking-tighter text-white leading-[0.95]",
                      children: [
                        "Your Strategy.",
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)("span", {
                          className: "text-neutral-500",
                          children: "Your ETF.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("p", {
                      className:
                        "text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed font-serif italic",
                      children: [
                        "The first self-rebalancing vault protocol on Solana.",
                        (0, s.jsx)("br", {}),
                        "Create, trade, and manage on-chain index funds powered by MEV.",
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200",
                  children: [
                    (0, s.jsxs)(o.$, {
                      size: "lg",
                      onClick: () => x(!0),
                      className:
                        "h-16 px-12 rounded-full bg-white text-black hover:bg-neutral-200 transition-all font-bold text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105",
                      children: [
                        "Enter Closed Beta ",
                        (0, s.jsx)(y.A, { className: "ml-2 w-5 h-5" }),
                      ],
                    }),
                    (0, s.jsxs)("p", {
                      className: "text-sm text-neutral-600 font-serif",
                      children: [
                        "Invite code required. ",
                        (0, s.jsx)("span", {
                          className:
                            "underline decoration-dotted cursor-help text-neutral-500 hover:text-white transition-colors",
                          title: "Check our X for drops",
                          children: "Don't have one?",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("footer", {
              className: "absolute bottom-8 text-xs text-neutral-700 font-mono",
              children: "\xa9 2025 Axis Protocol. All rights reserved.",
            }),
            (0, s.jsx)(v.lG, {
              open: d,
              onOpenChange: x,
              children: (0, s.jsxs)(v.Cf, {
                className:
                  "sm:max-w-[425px] bg-[#0A0A0A] border-neutral-800 text-white shadow-2xl shadow-black p-0 overflow-hidden",
                children: [
                  (0, s.jsxs)("div", {
                    className: "p-6 border-b border-white/5 bg-white/[0.02]",
                    children: [
                      (0, s.jsx)(v.L3, {
                        className: "text-2xl font-bold tracking-tight font-serif text-white",
                        children:
                          1 === u
                            ? "Enter Invite Code"
                            : 2 === u
                              ? "Create Profile"
                              : "Verify Email",
                      }),
                      (0, s.jsx)(v.rr, {
                        className: "text-neutral-500",
                        children:
                          1 === u
                            ? "Axis is currently in closed beta."
                            : 2 === u
                              ? "Complete tasks to generate access key."
                              : "Enter the 6-digit code sent to ".concat(z),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "p-6 pt-4 space-y-6",
                    children: [
                      1 === u &&
                        (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                (0, s.jsx)(j.J, {
                                  className: "text-xs uppercase tracking-wider text-neutral-500",
                                  children: "Invite Code",
                                }),
                                (0, s.jsx)(w.p, {
                                  placeholder: "AXIS-XXXXX",
                                  className:
                                    "bg-neutral-950 border-neutral-800 focus:border-white h-14 font-mono text-center text-xl tracking-widest uppercase text-white placeholder:text-neutral-700",
                                  value: g,
                                  onChange: (e) => p(e.target.value.toUpperCase()),
                                  autoFocus: !0,
                                }),
                              ],
                            }),
                            (0, s.jsx)(o.$, {
                              className:
                                "w-full bg-white text-black hover:bg-neutral-200 font-bold h-12 text-lg",
                              onClick: U,
                              disabled: !g || m,
                              children: m
                                ? (0, s.jsx)(N.A, { className: "animate-spin" })
                                : "Verify Code",
                            }),
                          ],
                        }),
                      2 === u &&
                        (0, s.jsxs)("div", {
                          className: "space-y-4",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "space-y-2",
                              children: [
                                (0, s.jsx)(j.J, {
                                  className: "text-xs uppercase tracking-wider text-neutral-500",
                                  children: "Email Address",
                                }),
                                (0, s.jsxs)("div", {
                                  className: "relative",
                                  children: [
                                    (0, s.jsx)(k, {
                                      className: "absolute left-3 top-3 text-neutral-500",
                                      size: 18,
                                    }),
                                    (0, s.jsx)(w.p, {
                                      type: "email",
                                      placeholder: "you@example.com",
                                      className:
                                        "bg-neutral-950 border-neutral-800 focus:border-white h-11 pl-10 text-white",
                                      value: z,
                                      onChange: (e) => R(e.target.value),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "p-3 border rounded-xl cursor-pointer flex items-center justify-between transition-colors ".concat(
                                  F
                                    ? "bg-white/5 border-white/20"
                                    : "bg-neutral-950 border-neutral-800 hover:bg-neutral-900"
                                ),
                              onClick: () => {
                                (window.open("https://twitter.com/Axis__Solana", "_blank"),
                                  setTimeout(() => O(!0), 2e3));
                              },
                              children: [
                                (0, s.jsxs)("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    (0, s.jsx)(A.A, {
                                      className: F ? "text-white" : "text-neutral-500",
                                      size: 18,
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "text-sm font-medium text-neutral-300",
                                      children: F
                                        ? "Followed @Axis__Solana"
                                        : "Follow @Axis__Solana",
                                    }),
                                  ],
                                }),
                                F && (0, s.jsx)(C.A, { size: 18, className: "text-emerald-500" }),
                              ],
                            }),
                            (0, s.jsx)(o.$, {
                              className:
                                "w-full bg-white text-black hover:bg-neutral-200 font-bold h-12 text-lg",
                              onClick: P,
                              disabled: m,
                              children: m
                                ? (0, s.jsx)(N.A, { className: "animate-spin" })
                                : "Send Login Code",
                            }),
                          ],
                        }),
                      3 === u &&
                        (0, s.jsxs)(s.Fragment, {
                          children: [
                            (0, s.jsx)(w.p, {
                              placeholder: "000000",
                              className:
                                "h-16 w-full text-center text-4xl tracking-[0.5em] font-mono bg-neutral-950 border-neutral-800 focus:border-white text-white",
                              maxLength: 6,
                              value: T,
                              onChange: (e) => L(e.target.value),
                              autoFocus: !0,
                            }),
                            (0, s.jsx)(o.$, {
                              className:
                                "w-full bg-white text-black hover:bg-neutral-200 font-bold h-12 text-lg",
                              onClick: X,
                              disabled: m || T.length < 6,
                              children: m
                                ? (0, s.jsx)(N.A, { className: "animate-spin" })
                                : "Enter Axis",
                            }),
                            (0, s.jsx)("button", {
                              onClick: () => h(2),
                              className: "w-full text-xs text-neutral-500 hover:text-white",
                              children: "Change email",
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
    },
    33789: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => l });
      var s = a(95155);
      a(12115);
      var r = a(25016);
      function l(e) {
        let { className: t, type: a, ...l } = e;
        return (0, s.jsx)("input", {
          type: a,
          "data-slot": "input",
          className: (0, r.cn)(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            t
          ),
          ...l,
        });
      }
    },
    52987: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      let s = (0, a(71847).A)("arrow-right", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    54679: (e, t, a) => {
      "use strict";
      a.d(t, { Cf: () => x, L3: () => h, c7: () => u, lG: () => n, rr: () => m, zM: () => o });
      var s = a(95155);
      a(12115);
      var r = a(58547),
        l = a(65229),
        i = a(25016);
      function n(e) {
        let { ...t } = e;
        return (0, s.jsx)(r.bL, { "data-slot": "dialog", ...t });
      }
      function o(e) {
        let { ...t } = e;
        return (0, s.jsx)(r.l9, { "data-slot": "dialog-trigger", ...t });
      }
      function c(e) {
        let { ...t } = e;
        return (0, s.jsx)(r.ZL, { "data-slot": "dialog-portal", ...t });
      }
      function d(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(r.hJ, {
          "data-slot": "dialog-overlay",
          className: (0, i.cn)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
            t
          ),
          ...a,
        });
      }
      function x(e) {
        let { className: t, children: a, showCloseButton: n = !0, ...o } = e;
        return (0, s.jsxs)(c, {
          "data-slot": "dialog-portal",
          children: [
            (0, s.jsx)(d, {}),
            (0, s.jsxs)(r.UC, {
              "data-slot": "dialog-content",
              className: (0, i.cn)(
                "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
                t
              ),
              ...o,
              children: [
                a,
                n &&
                  (0, s.jsxs)(r.bm, {
                    "data-slot": "dialog-close",
                    className:
                      "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    children: [
                      (0, s.jsx)(l.A, {}),
                      (0, s.jsx)("span", { className: "sr-only", children: "Close" }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      function u(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          "data-slot": "dialog-header",
          className: (0, i.cn)("flex flex-col gap-2 text-center sm:text-left", t),
          ...a,
        });
      }
      function h(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(r.hE, {
          "data-slot": "dialog-title",
          className: (0, i.cn)("text-lg leading-none font-semibold", t),
          ...a,
        });
      }
      function m(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(r.VY, {
          "data-slot": "dialog-description",
          className: (0, i.cn)("text-muted-foreground text-sm", t),
          ...a,
        });
      }
    },
    61091: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 31432));
    },
    61362: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      let s = (0, a(71847).A)("circle-check", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]);
    },
    75426: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      let s = (0, a(71847).A)("copy", [
        ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
        ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }],
      ]);
    },
    90235: (e, t, a) => {
      "use strict";
      a.d(t, { J: () => i });
      var s = a(95155);
      a(12115);
      var r = a(10489),
        l = a(25016);
      function i(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(r.b, {
          "data-slot": "label",
          className: (0, l.cn)(
            "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            t
          ),
          ...a,
        });
      }
    },
    90923: (e, t, a) => {
      "use strict";
      a.d(t, { Xi: () => o, av: () => c, j7: () => n, tU: () => i });
      var s = a(95155);
      a(12115);
      var r = a(28191),
        l = a(25016);
      function i(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(r.bL, {
          "data-slot": "tabs",
          className: (0, l.cn)("flex flex-col gap-2", t),
          ...a,
        });
      }
      function n(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(r.B8, {
          "data-slot": "tabs-list",
          className: (0, l.cn)(
            "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
            t
          ),
          ...a,
        });
      }
      function o(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(r.l9, {
          "data-slot": "tabs-trigger",
          className: (0, l.cn)(
            "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            t
          ),
          ...a,
        });
      }
      function c(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(r.UC, {
          "data-slot": "tabs-content",
          className: (0, l.cn)("flex-1 outline-none", t),
          ...a,
        });
      }
    },
    95740: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      let s = (0, a(71847).A)("sparkles", [
        [
          "path",
          {
            d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
            key: "1s2grr",
          },
        ],
        ["path", { d: "M20 2v4", key: "1rf3ol" }],
        ["path", { d: "M22 4h-4", key: "gwowj6" }],
        ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
      ]);
    },
    97378: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      let s = (0, a(71847).A)("twitter", [
        [
          "path",
          {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6",
          },
        ],
      ]);
    },
  },
  (e) => {
    (e.O(0, [956, 14, 71, 828, 191, 957, 441, 255, 358], () => e((e.s = 61091))), (_N_E = e.O()));
  },
]);
