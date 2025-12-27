(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [271],
  {
    5288: (e, t, n) => {
      e.exports = n(74691)("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
    },
    46271: (e, t, n) => {
      "use strict";
      let i;
      (n.r(t), n.d(t, { StandardSolflareMetaMaskWalletAccount: () => C, default: () => z }));
      var r,
        s,
        a,
        o,
        c,
        l,
        d = n(25223),
        h = n(68463),
        u = n(5288),
        f = n.n(u);
      let m = {
          randomUUID:
            "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto),
        },
        p = new Uint8Array(16),
        g = [];
      for (let e = 0; e < 256; ++e) g.push((e + 256).toString(16).slice(1));
      let y = function (e, t, n) {
        if (m.randomUUID && !t && !e) return m.randomUUID();
        let r =
          (e = e || {}).random ||
          (
            e.rng ||
            function () {
              if (
                !i &&
                !(i =
                  "undefined" != typeof crypto &&
                  crypto.getRandomValues &&
                  crypto.getRandomValues.bind(crypto))
              )
                throw Error(
                  "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                );
              return i(p);
            }
          )();
        if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
          n = n || 0;
          for (let e = 0; e < 16; ++e) t[n + e] = r[e];
          return t;
        }
        return (function (e, t = 0) {
          return (
            g[e[t + 0]] +
            g[e[t + 1]] +
            g[e[t + 2]] +
            g[e[t + 3]] +
            "-" +
            g[e[t + 4]] +
            g[e[t + 5]] +
            "-" +
            g[e[t + 6]] +
            g[e[t + 7]] +
            "-" +
            g[e[t + 8]] +
            g[e[t + 9]] +
            "-" +
            g[e[t + 10]] +
            g[e[t + 11]] +
            g[e[t + 12]] +
            g[e[t + 13]] +
            g[e[t + 14]] +
            g[e[t + 15]]
          );
        })(r);
      };
      function _(e) {
        return void 0 === e.version;
      }
      function v(e) {
        return _(e)
          ? e.serialize({ verifySignatures: !1, requireAllSignatures: !1 })
          : e.serialize();
      }
      n(81029).Buffer;
      var w = function (e, t, n, i) {
        return new (n || (n = Promise))(function (r, s) {
          function a(e) {
            try {
              c(i.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              c(i.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          c((i = i.apply(e, t || [])).next());
        });
      };
      function b(e) {
        return w(this, void 0, void 0, function* () {
          try {
            return (yield e.request({ method: "wallet_getSnaps" }), !0);
          } catch (e) {
            return !1;
          }
        });
      }
      var E = n(20869),
        A = n(42452),
        M = n(46103);
      let K = ["solana:mainnet", "solana:devnet", "solana:testnet", "solana:localnet"];
      function S(e) {
        return K.includes(e);
      }
      var T = function (e, t, n, i) {
          if ("a" === n && !i) throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof t ? e !== t || !i : !t.has(e))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === n ? i : "a" === n ? i.call(e) : i ? i.value : t.get(e);
        },
        U = function (e, t, n, i, r) {
          if ("m" === i) throw TypeError("Private method is not writable");
          if ("a" === i && !r) throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return ("a" === i ? r.call(e, n) : r ? (r.value = n) : t.set(e, n), n);
        };
      let x = [E.R, A.q, M.F];
      class C {
        get address() {
          return T(this, r, "f");
        }
        get publicKey() {
          return T(this, s, "f").slice();
        }
        get chains() {
          return T(this, a, "f").slice();
        }
        get features() {
          return T(this, o, "f").slice();
        }
        get label() {
          return T(this, c, "f");
        }
        get icon() {
          return T(this, l, "f");
        }
        constructor({ address: e, publicKey: t, label: n, icon: i }) {
          (r.set(this, void 0),
            s.set(this, void 0),
            a.set(this, void 0),
            o.set(this, void 0),
            c.set(this, void 0),
            l.set(this, void 0),
            new.target === C && Object.freeze(this),
            U(this, r, e, "f"),
            U(this, s, t, "f"),
            U(this, a, K, "f"),
            U(this, o, x, "f"),
            U(this, c, n, "f"),
            U(this, l, i, "f"));
        }
      }
      ((r = new WeakMap()),
        (s = new WeakMap()),
        (a = new WeakMap()),
        (o = new WeakMap()),
        (c = new WeakMap()),
        (l = new WeakMap()));
      var I = function (e, t, n, i) {
        return new (n || (n = Promise))(function (r, s) {
          function a(e) {
            try {
              c(i.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              c(i.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(a, o);
          }
          c((i = i.apply(e, t || [])).next());
        });
      };
      class k extends h.A {
        constructor(e) {
          (super(),
            (this._network = "mainnet-beta"),
            (this._iframeParams = {}),
            (this._element = null),
            (this._iframe = null),
            (this._publicKey = null),
            (this._account = null),
            (this._isConnected = !1),
            (this._connectHandler = null),
            (this._messageHandlers = {}),
            (this._handleEvent = (e) => {
              var t, n;
              switch (e.type) {
                case "connect":
                  (this._collapseIframe(),
                    (null == (t = e.data) ? void 0 : t.publicKey)
                      ? ((this._publicKey = e.data.publicKey),
                        (this._isConnected = !0),
                        this._connectHandler &&
                          (this._connectHandler.resolve(), (this._connectHandler = null)),
                        this._connected())
                      : (this._connectHandler &&
                          (this._connectHandler.reject(), (this._connectHandler = null)),
                        this._disconnected()));
                  return;
                case "disconnect":
                  (this._connectHandler &&
                    (this._connectHandler.reject(), (this._connectHandler = null)),
                    this._disconnected());
                  return;
                case "accountChanged":
                  (null == (n = e.data) ? void 0 : n.publicKey)
                    ? ((this._publicKey = e.data.publicKey),
                      this.emit("accountChanged", this.publicKey),
                      this._standardConnected())
                    : (this.emit("accountChanged", void 0), this._standardDisconnected());
                  return;
                default:
                  return;
              }
            }),
            (this._handleResize = (e) => {
              "full" === e.resizeMode
                ? "fullscreen" === e.params.mode
                  ? this._expandIframe()
                  : "hide" === e.params.mode && this._collapseIframe()
                : "coordinates" === e.resizeMode && this._resizeIframe(e.params);
            }),
            (this._handleMessage = (e) => {
              var t;
              if ((null == (t = e.data) ? void 0 : t.channel) !== "solflareIframeToWalletAdapter")
                return;
              let n = e.data.data || {};
              if ("event" === n.type) this._handleEvent(n.event);
              else if ("resize" === n.type) this._handleResize(n);
              else if ("response" === n.type && this._messageHandlers[n.id]) {
                let { resolve: e, reject: t } = this._messageHandlers[n.id];
                (delete this._messageHandlers[n.id], n.error ? t(n.error) : e(n.result));
              }
            }),
            (this._removeElement = () => {
              this._element && (this._element.remove(), (this._element = null));
            }),
            (this._removeDanglingElements = () => {
              for (let e of document.getElementsByClassName(
                "solflare-metamask-wallet-adapter-iframe"
              ))
                e.parentElement && e.remove();
            }),
            (this._injectElement = () => {
              (this._removeElement(), this._removeDanglingElements());
              let e = Object.assign(Object.assign({}, this._iframeParams), {
                  mm: !0,
                  v: 1,
                  cluster: this._network || "mainnet-beta",
                  origin: window.location.origin || "",
                  title: document.title || "",
                }),
                t = Object.keys(e)
                  .map((t) => `${t}=${encodeURIComponent(e[t])}`)
                  .join("&"),
                n = `${k.IFRAME_URL}?${t}`;
              ((this._element = document.createElement("div")),
                (this._element.className = "solflare-metamask-wallet-adapter-iframe"),
                (this._element.innerHTML = `
      <iframe src='${n}' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `),
                document.body.appendChild(this._element),
                (this._iframe = this._element.querySelector("iframe")),
                window.addEventListener("message", this._handleMessage, !1));
            }),
            (this._collapseIframe = () => {
              this._iframe &&
                ((this._iframe.style.top = ""),
                (this._iframe.style.right = ""),
                (this._iframe.style.height = "2px"),
                (this._iframe.style.width = "2px"));
            }),
            (this._expandIframe = () => {
              this._iframe &&
                ((this._iframe.style.top = "0px"),
                (this._iframe.style.bottom = "0px"),
                (this._iframe.style.left = "0px"),
                (this._iframe.style.right = "0px"),
                (this._iframe.style.width = "100%"),
                (this._iframe.style.height = "100%"));
            }),
            (this._resizeIframe = (e) => {
              this._iframe &&
                ((this._iframe.style.top = isFinite(e.top) ? `${e.top}px` : ""),
                (this._iframe.style.bottom = isFinite(e.bottom) ? `${e.bottom}px` : ""),
                (this._iframe.style.left = isFinite(e.left) ? `${e.left}px` : ""),
                (this._iframe.style.right = isFinite(e.right) ? `${e.right}px` : ""),
                (this._iframe.style.width = isFinite(e.width) ? `${e.width}px` : e.width),
                (this._iframe.style.height = isFinite(e.height) ? `${e.height}px` : e.height));
            }),
            (this._sendIframeMessage = (e) => {
              if (!this.connected || !this.publicKey) throw Error("Wallet not connected");
              return new Promise((t, n) => {
                var i, r;
                let s = y();
                ((this._messageHandlers[s] = { resolve: t, reject: n }),
                  null == (r = null == (i = this._iframe) ? void 0 : i.contentWindow) ||
                    r.postMessage(
                      {
                        channel: "solflareWalletAdapterToIframe",
                        data: Object.assign({ id: s }, e),
                      },
                      "*"
                    ));
              });
            }),
            (this._connected = () => {
              ((this._isConnected = !0),
                this.emit("connect", this.publicKey),
                this._standardConnected());
            }),
            (this._disconnected = () => {
              ((this._publicKey = null),
                (this._isConnected = !1),
                window.removeEventListener("message", this._handleMessage, !1),
                this._removeElement(),
                this.emit("disconnect"),
                this._standardDisconnected());
            }),
            (this._standardConnected = () => {
              if (!this.publicKey) return;
              let e = this.publicKey.toString();
              (this._account && this._account.address === e) ||
                ((this._account = new C({ address: e, publicKey: this.publicKey.toBytes() })),
                this.emit("standard_change", { accounts: this.standardAccounts }));
            }),
            (this._standardDisconnected = () => {
              this._account &&
                ((this._account = null),
                this.emit("standard_change", { accounts: this.standardAccounts }));
            }),
            (null == e ? void 0 : e.network) && (this._network = null == e ? void 0 : e.network),
            window.SolflareMetaMaskParams &&
              (this._iframeParams = Object.assign(
                Object.assign({}, this._iframeParams),
                window.SolflareMetaMaskParams
              )),
            (null == e ? void 0 : e.params) &&
              (this._iframeParams = Object.assign(
                Object.assign({}, this._iframeParams),
                null == e ? void 0 : e.params
              )));
        }
        get publicKey() {
          return this._publicKey ? new d.J3(this._publicKey) : null;
        }
        get standardAccount() {
          return this._account;
        }
        get standardAccounts() {
          return this._account ? [this._account] : [];
        }
        get isConnected() {
          return this._isConnected;
        }
        get connected() {
          return this.isConnected;
        }
        get autoApprove() {
          return !1;
        }
        connect() {
          return I(this, void 0, void 0, function* () {
            this.connected ||
              (this._injectElement(),
              yield new Promise((e, t) => {
                this._connectHandler = { resolve: e, reject: t };
              }));
          });
        }
        disconnect() {
          return I(this, void 0, void 0, function* () {
            (yield this._sendIframeMessage({ method: "disconnect" }), this._disconnected());
          });
        }
        signTransaction(e) {
          var t;
          return I(this, void 0, void 0, function* () {
            if (!this.connected || !this.publicKey) throw Error("Wallet not connected");
            try {
              let t = v(e),
                { transaction: n } = yield this._sendIframeMessage({
                  method: "signTransactionV2",
                  params: { transaction: f().encode(t) },
                });
              return _(e) ? d.ZX.from(f().decode(n)) : d.Kt.deserialize(f().decode(n));
            } catch (e) {
              throw Error(
                (null == (t = null == e ? void 0 : e.toString) ? void 0 : t.call(e)) ||
                  "Failed to sign transaction"
              );
            }
          });
        }
        signAllTransactions(e) {
          var t;
          return I(this, void 0, void 0, function* () {
            if (!this.connected || !this.publicKey) throw Error("Wallet not connected");
            try {
              let t = e.map((e) => v(e)),
                { transactions: n } = yield this._sendIframeMessage({
                  method: "signAllTransactionsV2",
                  params: { transactions: t.map((e) => f().encode(e)) },
                });
              return n.map((t, n) =>
                _(e[n]) ? d.ZX.from(f().decode(t)) : d.Kt.deserialize(f().decode(t))
              );
            } catch (e) {
              throw Error(
                (null == (t = null == e ? void 0 : e.toString) ? void 0 : t.call(e)) ||
                  "Failed to sign transactions"
              );
            }
          });
        }
        signAndSendTransaction(e, t) {
          var n;
          return I(this, void 0, void 0, function* () {
            if (!this.connected || !this.publicKey) throw Error("Wallet not connected");
            try {
              let n = v(e),
                { signature: i } = yield this._sendIframeMessage({
                  method: "signAndSendTransaction",
                  params: { transaction: f().encode(n), options: t },
                });
              return i;
            } catch (e) {
              throw Error(
                (null == (n = null == e ? void 0 : e.toString) ? void 0 : n.call(e)) ||
                  "Failed to sign and send transaction"
              );
            }
          });
        }
        signMessage(e, t = "utf8") {
          var n;
          return I(this, void 0, void 0, function* () {
            if (!this.connected || !this.publicKey) throw Error("Wallet not connected");
            try {
              let { signature: n } = yield this._sendIframeMessage({
                method: "signMessage",
                params: { data: f().encode(e), display: t },
              });
              return Uint8Array.from(f().decode(n));
            } catch (e) {
              throw Error(
                (null == (n = null == e ? void 0 : e.toString) ? void 0 : n.call(e)) ||
                  "Failed to sign message"
              );
            }
          });
        }
        sign(e, t = "utf8") {
          return I(this, void 0, void 0, function* () {
            return yield this.signMessage(e, t);
          });
        }
        static isSupported() {
          return I(this, void 0, void 0, function* () {
            return !!(yield (function () {
              return w(this, void 0, void 0, function* () {
                try {
                  let e = window.ethereum;
                  if (!e) return null;
                  if (e.providers && Array.isArray(e.providers)) {
                    for (let t of e.providers) if (yield b(t)) return t;
                  }
                  if (e.detected && Array.isArray(e.detected)) {
                    for (let t of e.detected) if (yield b(t)) return t;
                  }
                  if (yield b(e)) return e;
                  return null;
                } catch (e) {
                  return (console.error(e), null);
                }
              });
            })());
          });
        }
        standardSignAndSendTransaction(...e) {
          return I(this, void 0, void 0, function* () {
            if (!this.connected) throw Error("not connected");
            let t = [];
            if (1 === e.length) {
              let { transaction: n, account: i, chain: r, options: s } = e[0],
                {
                  minContextSlot: a,
                  preflightCommitment: o,
                  skipPreflight: c,
                  maxRetries: l,
                } = s || {};
              if (i !== this._account) throw Error("invalid account");
              if (!S(r)) throw Error("invalid chain");
              let h = yield this.signAndSendTransaction(d.Kt.deserialize(n), {
                preflightCommitment: o,
                minContextSlot: a,
                maxRetries: l,
                skipPreflight: c,
              });
              t.push({ signature: f().decode(h) });
            } else if (e.length > 1)
              for (let n of e) t.push(...(yield this.standardSignAndSendTransaction(n)));
            return t;
          });
        }
        standardSignTransaction(...e) {
          return I(this, void 0, void 0, function* () {
            if (!this.connected) throw Error("not connected");
            let t = [];
            if (1 === e.length) {
              let { transaction: n, account: i, chain: r } = e[0];
              if (i !== this._account) throw Error("invalid account");
              if (r && !S(r)) throw Error("invalid chain");
              let s = yield this.signTransaction(d.Kt.deserialize(n));
              t.push({ signedTransaction: s.serialize() });
            } else if (e.length > 1) {
              let n;
              for (let t of e) {
                if (t.account !== this._account) throw Error("invalid account");
                if (t.chain) {
                  if (!S(t.chain)) throw Error("invalid chain");
                  if (n) {
                    if (t.chain !== n) throw Error("conflicting chain");
                  } else n = t.chain;
                }
              }
              let i = e.map(({ transaction: e }) => d.Kt.deserialize(e)),
                r = yield this.signAllTransactions(i);
              t.push(...r.map((e) => ({ signedTransaction: e.serialize() })));
            }
            return t;
          });
        }
        standardSignMessage(...e) {
          return I(this, void 0, void 0, function* () {
            if (!this.connected) throw Error("not connected");
            let t = [];
            if (1 === e.length) {
              let { message: n, account: i } = e[0];
              if (i !== this._account) throw Error("invalid account");
              let r = yield this.signMessage(n);
              t.push({ signedMessage: n, signature: r });
            } else if (e.length > 1)
              for (let n of e) t.push(...(yield this.standardSignMessage(n)));
            return t;
          });
        }
      }
      k.IFRAME_URL = "https://widget.solflare.com/";
      let z = k;
    },
    74691: (e) => {
      "use strict";
      e.exports = function (e) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var t = new Uint8Array(256), n = 0; n < t.length; n++) t[n] = 255;
        for (var i = 0; i < e.length; i++) {
          var r = e.charAt(i),
            s = r.charCodeAt(0);
          if (255 !== t[s]) throw TypeError(r + " is ambiguous");
          t[s] = i;
        }
        var a = e.length,
          o = e.charAt(0),
          c = Math.log(a) / Math.log(256),
          l = Math.log(256) / Math.log(a);
        function d(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          for (var n = 0, i = 0, r = 0; e[n] === o; ) (i++, n++);
          for (var s = ((e.length - n) * c + 1) >>> 0, l = new Uint8Array(s); e[n]; ) {
            var d = e.charCodeAt(n);
            if (d > 255) return;
            var h = t[d];
            if (255 === h) return;
            for (var u = 0, f = s - 1; (0 !== h || u < r) && -1 !== f; f--, u++)
              ((h += (a * l[f]) >>> 0), (l[f] = (h % 256) >>> 0), (h = (h / 256) >>> 0));
            if (0 !== h) throw Error("Non-zero carry");
            ((r = u), n++);
          }
          for (var m = s - r; m !== s && 0 === l[m]; ) m++;
          for (var p = new Uint8Array(i + (s - m)), g = i; m !== s; ) p[g++] = l[m++];
          return p;
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
            for (var n = 0, i = 0, r = 0, s = t.length; r !== s && 0 === t[r]; ) (r++, n++);
            for (var c = ((s - r) * l + 1) >>> 0, d = new Uint8Array(c); r !== s; ) {
              for (var h = t[r], u = 0, f = c - 1; (0 !== h || u < i) && -1 !== f; f--, u++)
                ((h += (256 * d[f]) >>> 0), (d[f] = (h % a) >>> 0), (h = (h / a) >>> 0));
              if (0 !== h) throw Error("Non-zero carry");
              ((i = u), r++);
            }
            for (var m = c - i; m !== c && 0 === d[m]; ) m++;
            for (var p = o.repeat(n); m < c; ++m) p += e.charAt(d[m]);
            return p;
          },
          decodeUnsafe: d,
          decode: function (e) {
            var t = d(e);
            if (t) return t;
            throw Error("Non-base" + a + " character");
          },
        };
      };
    },
  },
]);
