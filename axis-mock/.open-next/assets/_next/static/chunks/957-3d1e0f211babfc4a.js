(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [957],
  {
    25016: (e, t, a) => {
      "use strict";
      a.d(t, { cn: () => n });
      var r = a(2821),
        s = a(75889);
      function n() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
        return (0, s.QP)((0, r.$)(t));
      }
    },
    47790: () => {},
    67812: (e, t, a) => {
      "use strict";
      a.d(t, { E: () => l });
      var r = a(95155);
      a(12115);
      var s = a(32467),
        n = a(83101),
        i = a(25016);
      let o = (0, n.F)(
        "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
        {
          variants: {
            variant: {
              default:
                "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
              secondary:
                "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
              destructive:
                "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
              outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
            },
          },
          defaultVariants: { variant: "default" },
        }
      );
      function l(e) {
        let { className: t, variant: a, asChild: n = !1, ...l } = e,
          d = n ? s.DX : "span";
        return (0, r.jsx)(d, {
          "data-slot": "badge",
          className: (0, i.cn)(o({ variant: a }), t),
          ...l,
        });
      }
    },
    83209: (e, t, a) => {
      "use strict";
      a.d(t, { Wu: () => l, ZB: () => o, Zp: () => n, aR: () => i, wL: () => d });
      var r = a(95155);
      a(12115);
      var s = a(25016);
      function n(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card",
          className: (0, s.cn)(
            "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
            t
          ),
          ...a,
        });
      }
      function i(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-header",
          className: (0, s.cn)(
            "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
            t
          ),
          ...a,
        });
      }
      function o(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-title",
          className: (0, s.cn)("leading-none font-semibold", t),
          ...a,
        });
      }
      function l(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-content",
          className: (0, s.cn)("px-6", t),
          ...a,
        });
      }
      function d(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-footer",
          className: (0, s.cn)("flex items-center px-6 [.border-t]:pt-6", t),
          ...a,
        });
      }
    },
    97003: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => l });
      var r = a(95155);
      a(12115);
      var s = a(32467),
        n = a(83101),
        i = a(25016);
      let o = (0, n.F)(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        {
          variants: {
            variant: {
              default: "bg-primary text-primary-foreground hover:bg-primary/90",
              destructive:
                "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
              outline:
                "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
              secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
              ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
              link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
              default: "h-9 px-4 py-2 has-[>svg]:px-3",
              sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
              lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
              icon: "size-9",
              "icon-sm": "size-8",
              "icon-lg": "size-10",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        }
      );
      function l(e) {
        let {
            className: t,
            variant: a = "default",
            size: n = "default",
            asChild: l = !1,
            ...d
          } = e,
          c = l ? s.DX : "button";
        return (0, r.jsx)(c, {
          "data-slot": "button",
          "data-variant": a,
          "data-size": n,
          className: (0, i.cn)(o({ variant: a, size: n, className: t })),
          ...d,
        });
      }
    },
    98183: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => g });
      var r = a(25959),
        s = a(89863),
        n = a(25223),
        i = a(82910);
      let o = [
        {
          id: "v1",
          name: "Solana Blue Chip",
          symbol: "SBC",
          creator: "0xAnsem...Fast",
          tvl: 25e4,
          status: "PUBLIC",
          apy: 12.4,
          createdAt: new Date("2025-11-01"),
          assets: [
            {
              token: {
                address: "So11111111111111111111111111111111111111112",
                chainId: 101,
                decimals: 9,
                name: "Solana",
                symbol: "SOL",
                logoURI:
                  "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
                price: 145.5,
              },
              weight: 70,
              amount: 1e3,
            },
            {
              token: {
                address: "JUPyiwrYJFskUPiHa7hkeR8VUtkqj845ZNJ79KWAZC6",
                chainId: 101,
                decimals: 6,
                name: "Jupiter",
                symbol: "JUP",
                logoURI: "https://static.jup.ag/jup/icon.png",
                price: 1.15,
              },
              weight: 30,
              amount: 5e4,
            },
          ],
        },
        {
          id: "v2",
          name: "Meme Super Cycle",
          symbol: "MEME",
          creator: "MemeLord.sol",
          tvl: 45e3,
          status: "BOOTSTRAP",
          apy: 0,
          createdAt: new Date(),
          assets: [
            {
              token: {
                address: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
                chainId: 101,
                decimals: 5,
                name: "Bonk",
                symbol: "BONK",
                logoURI: "https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I",
                price: 24e-6,
              },
              weight: 50,
              amount: 1e9,
            },
            {
              token: {
                address: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
                chainId: 101,
                decimals: 6,
                name: "dogwifhat",
                symbol: "WIF",
                logoURI: "https://static.jup.ag/wif/icon.png",
                price: 3.2,
              },
              weight: 50,
              amount: 5e3,
            },
          ],
        },
      ];
      var l = a(18720);
      let d = "http://localhost:8787",
        c = (0, n.Kw)("devnet"),
        u = new n.Ng(c, "confirmed"),
        g = (0, r.v)()(
          (0, s.Zr)(
            (e, t) => ({
              user: null,
              email: null,
              inviteCode: null,
              walletAddress: null,
              isRegistered: !1,
              isConnected: !1,
              walletProvider: null,
              referralCode: null,
              vaults: o,
              usdcBalance: 0,
              solBalance: 0,
              positions: [],
              claimedWallets: [],
              isSidebarOpen: !1,
              isFaucetLoading: !1,
              isLoadingTokens: !1,
              tokenList: [],
              connectWallet: async (a) => {
                (e({ isConnected: !0, walletAddress: a }), await t().fetchBalances());
              },
              disconnectWallet: () => {
                e({
                  isConnected: !1,
                  walletAddress: null,
                  walletProvider: null,
                  usdcBalance: 0,
                  solBalance: 0,
                });
              },
              fetchBalances: async () => {
                let { walletAddress: a } = t();
                if (a)
                  try {
                    let t = new n.J3(a),
                      r = (await u.getBalance(t)) / n.Sr,
                      s = 0;
                    try {
                      let e = (
                        await u.getParsedTokenAccountsByOwner(t, { programId: i.x5 })
                      ).value.find(
                        (e) =>
                          "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr" ===
                          e.account.data.parsed.info.mint
                      );
                      e && (s = e.account.data.parsed.info.tokenAmount.uiAmount || 0);
                    } catch (e) {}
                    e({ solBalance: r, usdcBalance: s });
                  } catch (e) {
                    console.error("Failed to fetch balances:", e);
                  }
              },
              claimFaucet: async () => {
                let { walletAddress: a, fetchBalances: r, claimedWallets: s } = t();
                if (a) {
                  if (s.includes(a))
                    return void alert("You have already claimed the faucet for this wallet.");
                  e({ isFaucetLoading: !0 });
                  try {
                    let t = await fetch("".concat(d, "/claim"), {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ wallet_address: a }),
                      }),
                      s = await t.json().catch(() => null);
                    if (!t.ok || !(null == s ? void 0 : s.success))
                      throw Error((null == s ? void 0 : s.error) || "Faucet API failed");
                    (e((e) => ({ claimedWallets: [...e.claimedWallets, a] })),
                      setTimeout(async () => {
                        await r();
                      }, 2e3),
                      l.oR.success("1,000 USDC sent to your Devnet wallet!"));
                  } catch (e) {
                    (console.error("Faucet Error:", e),
                      l.oR.error("Faucet failed. Please try again."),
                      await r());
                  } finally {
                    e({ isFaucetLoading: !1 });
                  }
                }
              },
              registerUser: async (a, r, s) => {
                try {
                  var n;
                  let i = await fetch("".concat(d, "/register"), {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: a, wallet_address: s, invite_code_used: r }),
                  });
                  if (!i.ok) {
                    let e = await i.json().catch(() => ({}));
                    return { success: !1, message: e.error || "Registration failed" };
                  }
                  let o = await i.json();
                  return (
                    e({
                      isRegistered: !0,
                      user: o.user,
                      email: a,
                      inviteCode: r,
                      walletAddress: s,
                      isConnected: !0,
                      referralCode: (null == (n = o.user) ? void 0 : n.invite_code) || null,
                      usdcBalance: 0,
                      solBalance: 0,
                    }),
                    await t().fetchBalances(),
                    { success: !0 }
                  );
                } catch (e) {
                  return (
                    console.error("API Error:", e),
                    { success: !1, message: "Connection to server failed" }
                  );
                }
              },
              login: (a) => {
                e({
                  isRegistered: !0,
                  user: a,
                  email: a.email,
                  walletAddress: a.wallet_address || t().walletAddress,
                  referralCode: a.invite_code,
                });
              },
              logout: () => {
                e({
                  isRegistered: !1,
                  user: null,
                  email: null,
                  inviteCode: null,
                  referralCode: null,
                });
              },
              fetchVaults: async () => {
                try {
                  let t = await fetch("".concat(d, "/vaults"));
                  if (t.ok) {
                    let a = await t.json();
                    e({ vaults: a });
                  }
                } catch (e) {
                  console.error("Failed to fetch vaults", e);
                }
              },
              createVault: async (e) => {
                try {
                  let a = await fetch("".concat(d, "/vaults"), {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(e),
                  });
                  if (a.ok) return (await t().fetchVaults(), !0);
                  {
                    let e = await a.json();
                    return (console.error("Backend Error:", e), !1);
                  }
                } catch (e) {
                  return (console.error("Network/Client Error:", e), !1);
                }
              },
              depositToVault: (a, r) => {
                let { usdcBalance: s, vaults: n } = t();
                if (!n.find((e) => e.id === a) || s < r) return;
                let i = n.map((e) => (e.id === a ? { ...e, tvl: e.tvl + r } : e));
                e((e) => ({
                  vaults: i,
                  usdcBalance: e.usdcBalance - r,
                  positions: [...e.positions, { vaultId: a, lpAmount: r, entryValue: r }],
                }));
              },
              toggleVaultStatus: (t) => {
                e((e) => ({
                  vaults: e.vaults.map((e) => {
                    if (e.id !== t) return e;
                    let a = e.status || "BOOTSTRAP";
                    return (
                      "BOOTSTRAP" === e.status
                        ? (a = "PUBLIC")
                        : "PUBLIC" === e.status
                          ? (a = "AUCTION_LIVE")
                          : "AUCTION_LIVE" === e.status && (a = "PUBLIC"),
                      { ...e, status: a }
                    );
                  }),
                }));
              },
              fetchTokenList: async () => {
                let { tokenList: a } = t();
                if (!(a.length > 0)) {
                  e({ isLoadingTokens: !0 });
                  try {
                    let t = await fetch("".concat(d, "/tokens"));
                    if (!t.ok) throw Error("Failed to fetch tokens");
                    let a = (await t.json()).map((e) => ({
                      ...e,
                      price:
                        {
                          USDC: 1,
                          USDT: 1,
                          SOL: 145.5,
                          BTC: 64200,
                          ETH: 3400,
                          JUP: 1.15,
                          BONK: 24e-6,
                          WIF: 3.2,
                          POPCAT: 0.85,
                        }[e.symbol] || 10 * Math.random() + 0.1,
                    }));
                    e({ tokenList: a, isLoadingTokens: !1 });
                  } catch (t) {
                    (console.error(t), e({ isLoadingTokens: !1 }));
                  }
                }
              },
              toggleSidebar: (t) => e({ isSidebarOpen: t }),
            }),
            {
              name: "axis-storage-v1",
              storage: (0, s.KU)(() => localStorage),
              partialize: (e) => ({
                isRegistered: e.isRegistered,
                user: e.user,
                email: e.email,
                referralCode: e.referralCode,
                walletAddress: e.walletAddress,
                isConnected: e.isConnected,
                usdcBalance: e.usdcBalance,
                solBalance: e.solBalance,
                positions: e.positions,
                vaults: e.vaults,
                tokenList: e.tokenList,
                claimedWallets: e.claimedWallets,
              }),
            }
          )
        );
    },
  },
]);
