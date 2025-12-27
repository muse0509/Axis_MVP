(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [153],
  {
    39953: (e) => {
      "use strict";
      e.exports = function (e) {
        if (e.length >= 255) throw TypeError("Alphabet too long");
        for (var n = new Uint8Array(256), t = 0; t < n.length; t++) n[t] = 255;
        for (var r = 0; r < e.length; r++) {
          var o = e.charAt(r),
            i = o.charCodeAt(0);
          if (255 !== n[i]) throw TypeError(o + " is ambiguous");
          n[i] = r;
        }
        var a = e.length,
          c = e.charAt(0),
          s = Math.log(a) / Math.log(256),
          l = Math.log(256) / Math.log(a);
        function u(e) {
          if ("string" != typeof e) throw TypeError("Expected String");
          if (0 === e.length) return new Uint8Array();
          for (var t = 0, r = 0, o = 0; e[t] === c; ) (r++, t++);
          for (var i = ((e.length - t) * s + 1) >>> 0, l = new Uint8Array(i); e[t]; ) {
            var u = e.charCodeAt(t);
            if (u > 255) return;
            var d = n[u];
            if (255 === d) return;
            for (var f = 0, p = i - 1; (0 !== d || f < o) && -1 !== p; p--, f++)
              ((d += (a * l[p]) >>> 0), (l[p] = (d % 256) >>> 0), (d = (d / 256) >>> 0));
            if (0 !== d) throw Error("Non-zero carry");
            ((o = f), t++);
          }
          for (var h = i - o; h !== i && 0 === l[h]; ) h++;
          for (var v = new Uint8Array(r + (i - h)), _ = r; h !== i; ) v[_++] = l[h++];
          return v;
        }
        return {
          encode: function (n) {
            if (
              (n instanceof Uint8Array ||
                (ArrayBuffer.isView(n)
                  ? (n = new Uint8Array(n.buffer, n.byteOffset, n.byteLength))
                  : Array.isArray(n) && (n = Uint8Array.from(n))),
              !(n instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === n.length) return "";
            for (var t = 0, r = 0, o = 0, i = n.length; o !== i && 0 === n[o]; ) (o++, t++);
            for (var s = ((i - o) * l + 1) >>> 0, u = new Uint8Array(s); o !== i; ) {
              for (var d = n[o], f = 0, p = s - 1; (0 !== d || f < r) && -1 !== p; p--, f++)
                ((d += (256 * u[p]) >>> 0), (u[p] = (d % a) >>> 0), (d = (d / a) >>> 0));
              if (0 !== d) throw Error("Non-zero carry");
              ((r = f), o++);
            }
            for (var h = s - r; h !== s && 0 === u[h]; ) h++;
            for (var v = c.repeat(t); h < s; ++h) v += e.charAt(u[h]);
            return v;
          },
          decodeUnsafe: u,
          decode: function (e) {
            var n = u(e);
            if (n) return n;
            throw Error("Non-base" + a + " character");
          },
        };
      };
    },
    71878: (e, n, t) => {
      e.exports = t(39953)("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");
    },
    81153: (e, n, t) => {
      "use strict";
      let r;
      (t.r(n), t.d(n, { default: () => R }));
      var o = t(25223),
        i = t(68463),
        a = (function () {
          var e = function (n, t) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, n) {
                  e.__proto__ = n;
                }) ||
              function (e, n) {
                for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
              })(n, t);
          };
          return function (n, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function r() {
              this.constructor = n;
            }
            (e(n, t),
              (n.prototype =
                null === t ? Object.create(t) : ((r.prototype = t.prototype), new r())));
          };
        })(),
        c = (function (e) {
          function n() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (a(n, e), n);
        })(i.A),
        s = t(71878),
        l = t.n(s),
        u = (function () {
          var e = function (n, t) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, n) {
                  e.__proto__ = n;
                }) ||
              function (e, n) {
                for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
              })(n, t);
          };
          return function (n, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function r() {
              this.constructor = n;
            }
            (e(n, t),
              (n.prototype =
                null === t ? Object.create(t) : ((r.prototype = t.prototype), new r())));
          };
        })(),
        d = function () {
          return (d =
            Object.assign ||
            function (e) {
              for (var n, t = 1, r = arguments.length; t < r; t++)
                for (var o in (n = arguments[t]))
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              return e;
            }).apply(this, arguments);
        },
        f = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value) instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })
                  ).then(a, c);
            }
            s((r = r.apply(e, n || [])).next());
          });
        },
        p = function (e, n) {
          var t,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: c(0), throw: c(1), return: c(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function c(c) {
            return function (s) {
              var l = [c, s];
              if (t) throw TypeError("Generator is already executing.");
              for (; i && ((i = 0), l[0] && (a = 0)), a; )
                try {
                  if (
                    ((t = 1),
                    r &&
                      (o =
                        2 & l[0]
                          ? r.return
                          : l[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                      !(o = o.call(r, l[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                    case 0:
                    case 1:
                      o = l;
                      break;
                    case 4:
                      return (a.label++, { value: l[1], done: !1 });
                    case 5:
                      (a.label++, (r = l[1]), (l = [0]));
                      continue;
                    case 7:
                      ((l = a.ops.pop()), a.trys.pop());
                      continue;
                    default:
                      if (
                        !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                        (6 === l[0] || 2 === l[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === l[0] && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                        a.label = l[1];
                        break;
                      }
                      if (6 === l[0] && a.label < o[1]) {
                        ((a.label = o[1]), (o = l));
                        break;
                      }
                      if (o && a.label < o[2]) {
                        ((a.label = o[2]), a.ops.push(l));
                        break;
                      }
                      (o[2] && a.ops.pop(), a.trys.pop());
                      continue;
                  }
                  l = n.call(e, a);
                } catch (e) {
                  ((l = [6, e]), (r = 0));
                } finally {
                  t = o = 0;
                }
              if (5 & l[0]) throw l[1];
              return { value: l[0] ? l[1] : void 0, done: !0 };
            };
          }
        },
        h = function (e, n) {
          var t = "function" == typeof Symbol && e[Symbol.iterator];
          if (!t) return e;
          var r,
            o,
            i = t.call(e),
            a = [];
          try {
            for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; ) a.push(r.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              r && !r.done && (t = i.return) && t.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
        v = (function (e) {
          function n(n, t) {
            var r,
              i,
              a = e.call(this) || this;
            if (
              ((a._handleMessage = function (e) {
                if (
                  (a._injectedProvider && e.source === window) ||
                  (e.origin === a._providerUrl.origin && e.source === a._popup)
                ) {
                  if ("connected" === e.data.method) {
                    var n = new o.J3(e.data.params.publicKey);
                    (a._publicKey && a._publicKey.equals(n)) ||
                      (a._publicKey && !a._publicKey.equals(n) && a._handleDisconnect(),
                      (a._publicKey = n),
                      (a._autoApprove = !!e.data.params.autoApprove),
                      a.emit("connect", a._publicKey));
                  } else if ("disconnected" === e.data.method) a._handleDisconnect();
                  else if ((e.data.result || e.data.error) && a._responsePromises.has(e.data.id)) {
                    var t = h(a._responsePromises.get(e.data.id), 2),
                      r = t[0],
                      i = t[1];
                    e.data.result ? r(e.data.result) : i(Error(e.data.error));
                  }
                }
              }),
              (a._handleConnect = function () {
                return (a._handlerAdded ||
                  ((a._handlerAdded = !0),
                  window.addEventListener("message", a._handleMessage),
                  window.addEventListener("beforeunload", a.disconnect)),
                a._injectedProvider)
                  ? new Promise(function (e) {
                      (a._sendRequest("connect", {}), e());
                    })
                  : ((window.name = "parent"),
                    (a._popup = window.open(
                      a._providerUrl.toString(),
                      "_blank",
                      "location,resizable,width=460,height=675"
                    )),
                    new Promise(function (e) {
                      a.once("connect", e);
                    }));
              }),
              (a._handleDisconnect = function () {
                (a._handlerAdded &&
                  ((a._handlerAdded = !1),
                  window.removeEventListener("message", a._handleMessage),
                  window.removeEventListener("beforeunload", a.disconnect)),
                  a._publicKey && ((a._publicKey = null), a.emit("disconnect")),
                  a._responsePromises.forEach(function (e, n) {
                    var t = h(e, 2),
                      r = (t[0], t[1]);
                    (a._responsePromises.delete(n), r("Wallet disconnected"));
                  }));
              }),
              (a._sendRequest = function (e, n) {
                return f(a, void 0, void 0, function () {
                  var t,
                    r = this;
                  return p(this, function (o) {
                    if ("connect" !== e && !this.connected) throw Error("Wallet not connected");
                    return (
                      (t = this._nextRequestId),
                      ++this._nextRequestId,
                      [
                        2,
                        new Promise(function (o, i) {
                          (r._responsePromises.set(t, [o, i]),
                            r._injectedProvider
                              ? r._injectedProvider.postMessage({
                                  jsonrpc: "2.0",
                                  id: t,
                                  method: e,
                                  params: d({ network: r._network }, n),
                                })
                              : (r._popup.postMessage(
                                  { jsonrpc: "2.0", id: t, method: e, params: n },
                                  r._providerUrl.origin
                                ),
                                r.autoApprove || r._popup.focus()));
                        }),
                      ]
                    );
                  });
                });
              }),
              (a.connect = function () {
                return (a._popup && a._popup.close(), a._handleConnect());
              }),
              (a.disconnect = function () {
                return f(a, void 0, void 0, function () {
                  return p(this, function (e) {
                    switch (e.label) {
                      case 0:
                        if (!this._injectedProvider) return [3, 2];
                        return [4, this._sendRequest("disconnect", {})];
                      case 1:
                        (e.sent(), (e.label = 2));
                      case 2:
                        return (this._popup && this._popup.close(), this._handleDisconnect(), [2]);
                    }
                  });
                });
              }),
              (a.sign = function (e, n) {
                return f(a, void 0, void 0, function () {
                  var t;
                  return p(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if (!(e instanceof Uint8Array))
                          throw Error("Data must be an instance of Uint8Array");
                        return [4, this._sendRequest("sign", { data: e, display: n })];
                      case 1:
                        return (
                          (t = r.sent()),
                          [
                            2,
                            {
                              signature: l().decode(t.signature),
                              publicKey: new o.J3(t.publicKey),
                            },
                          ]
                        );
                    }
                  });
                });
              }),
              "object" == typeof (i = r = n) && null !== i && "function" == typeof r.postMessage)
            )
              a._injectedProvider = n;
            else if ("string" == typeof n)
              ((a._providerUrl = new URL(n)),
                (a._providerUrl.hash = new URLSearchParams({
                  origin: window.location.origin,
                  network: t,
                }).toString()));
            else throw Error("provider parameter must be an injected provider or a URL string.");
            return (
              (a._network = t),
              (a._publicKey = null),
              (a._autoApprove = !1),
              (a._popup = null),
              (a._handlerAdded = !1),
              (a._nextRequestId = 1),
              (a._responsePromises = new Map()),
              a
            );
          }
          return (
            u(n, e),
            Object.defineProperty(n.prototype, "publicKey", {
              get: function () {
                return this._publicKey;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "connected", {
              get: function () {
                return null !== this._publicKey;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "autoApprove", {
              get: function () {
                return this._autoApprove;
              },
              enumerable: !1,
              configurable: !0,
            }),
            n
          );
        })(i.A),
        _ = (function () {
          var e = function (n, t) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, n) {
                  e.__proto__ = n;
                }) ||
              function (e, n) {
                for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
              })(n, t);
          };
          return function (n, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function r() {
              this.constructor = n;
            }
            (e(n, t),
              (n.prototype =
                null === t ? Object.create(t) : ((r.prototype = t.prototype), new r())));
          };
        })(),
        y = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value) instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })
                  ).then(a, c);
            }
            s((r = r.apply(e, n || [])).next());
          });
        },
        m = function (e, n) {
          var t,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: c(0), throw: c(1), return: c(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function c(c) {
            return function (s) {
              var l = [c, s];
              if (t) throw TypeError("Generator is already executing.");
              for (; i && ((i = 0), l[0] && (a = 0)), a; )
                try {
                  if (
                    ((t = 1),
                    r &&
                      (o =
                        2 & l[0]
                          ? r.return
                          : l[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                      !(o = o.call(r, l[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                    case 0:
                    case 1:
                      o = l;
                      break;
                    case 4:
                      return (a.label++, { value: l[1], done: !1 });
                    case 5:
                      (a.label++, (r = l[1]), (l = [0]));
                      continue;
                    case 7:
                      ((l = a.ops.pop()), a.trys.pop());
                      continue;
                    default:
                      if (
                        !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                        (6 === l[0] || 2 === l[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === l[0] && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                        a.label = l[1];
                        break;
                      }
                      if (6 === l[0] && a.label < o[1]) {
                        ((a.label = o[1]), (o = l));
                        break;
                      }
                      if (o && a.label < o[2]) {
                        ((a.label = o[2]), a.ops.push(l));
                        break;
                      }
                      (o[2] && a.ops.pop(), a.trys.pop());
                      continue;
                  }
                  l = n.call(e, a);
                } catch (e) {
                  ((l = [6, e]), (r = 0));
                } finally {
                  t = o = 0;
                }
              if (5 & l[0]) throw l[1];
              return { value: l[0] ? l[1] : void 0, done: !0 };
            };
          }
        },
        b = (function (e) {
          function n(n, t, r) {
            var o = e.call(this) || this;
            return (
              (o._instance = null),
              (o.handleMessage = function (e) {}),
              (o._sendRequest = function (e, n) {
                return y(o, void 0, void 0, function () {
                  var t, r;
                  return m(this, function (o) {
                    switch (o.label) {
                      case 0:
                        if (!(null == (t = this._instance) ? void 0 : t.sendRequest)) return [3, 2];
                        return [4, this._instance.sendRequest(e, n)];
                      case 1:
                      case 3:
                        return [2, o.sent()];
                      case 2:
                        if (!(null == (r = this._instance) ? void 0 : r._sendRequest))
                          return [3, 4];
                        return [4, this._instance._sendRequest(e, n)];
                      case 4:
                        throw Error("Unsupported version of `@project-serum/sol-wallet-adapter`");
                    }
                  });
                });
              }),
              (o._handleConnect = function () {
                o.emit("connect");
              }),
              (o._handleDisconnect = function () {
                (window.clearInterval(o._pollTimer), o.emit("disconnect"));
              }),
              (o._network = t),
              (o._provider = r),
              o
            );
          }
          return (
            _(n, e),
            Object.defineProperty(n.prototype, "publicKey", {
              get: function () {
                return this._instance.publicKey || null;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "connected", {
              get: function () {
                return this._instance.connected || !1;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (n.prototype.connect = function () {
              return y(this, void 0, void 0, function () {
                var e = this;
                return m(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (this._instance = new v(this._provider, this._network)),
                        this._instance.on("connect", this._handleConnect),
                        this._instance.on("disconnect", this._handleDisconnect),
                        (this._pollTimer = window.setInterval(function () {
                          var n, t;
                          (null == (t = null == (n = e._instance) ? void 0 : n._popup)
                            ? void 0
                            : t.closed) !== !1 && e._handleDisconnect();
                        }, 200)),
                        [4, this._instance.connect()]
                      );
                    case 1:
                      return (n.sent(), [2]);
                  }
                });
              });
            }),
            (n.prototype.disconnect = function () {
              return y(this, void 0, void 0, function () {
                return m(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (!this.connected) throw Error("Wallet not connected");
                      return (
                        this._instance.removeAllListeners("connect"),
                        this._instance.removeAllListeners("disconnect"),
                        [4, this._instance.disconnect()]
                      );
                    case 1:
                      return (e.sent(), [2]);
                  }
                });
              });
            }),
            (n.prototype.signTransaction = function (e) {
              return y(this, void 0, void 0, function () {
                var n;
                return m(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if (!this.connected) throw Error("Wallet not connected");
                      return [
                        4,
                        this._sendRequest("signTransactionV2", { transaction: l().encode(e) }),
                      ];
                    case 1:
                      return ((n = t.sent().transaction), [2, l().decode(n)]);
                  }
                });
              });
            }),
            (n.prototype.signAllTransactions = function (e) {
              return y(this, void 0, void 0, function () {
                return m(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (!this.connected) throw Error("Wallet not connected");
                      return [
                        4,
                        this._sendRequest("signAllTransactionsV2", {
                          transactions: e.map(function (e) {
                            return l().encode(e);
                          }),
                        }),
                      ];
                    case 1:
                      return [
                        2,
                        n.sent().transactions.map(function (e) {
                          return l().decode(e);
                        }),
                      ];
                  }
                });
              });
            }),
            (n.prototype.signAndSendTransaction = function (e, n) {
              return y(this, void 0, void 0, function () {
                return m(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if (!this.connected) throw Error("Wallet not connected");
                      return [
                        4,
                        this._sendRequest("signAndSendTransaction", {
                          transaction: l().encode(e),
                          options: n,
                        }),
                      ];
                    case 1:
                      return [2, t.sent().signature];
                  }
                });
              });
            }),
            (n.prototype.signMessage = function (e, n) {
              return (
                void 0 === n && (n = "hex"),
                y(this, void 0, void 0, function () {
                  var t;
                  return m(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if (!this.connected) throw Error("Wallet not connected");
                        return [4, this._instance.sign(e, n)];
                      case 1:
                        return ((t = r.sent().signature), [2, Uint8Array.from(t)]);
                    }
                  });
                })
              );
            }),
            n
          );
        })(c);
      let w = {
          randomUUID:
            "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto),
        },
        g = new Uint8Array(16),
        A = [];
      for (let e = 0; e < 256; ++e) A.push((e + 256).toString(16).slice(1));
      let E = function (e, n, t) {
        if (w.randomUUID && !n && !e) return w.randomUUID();
        let o =
          (e = e || {}).random ||
          (
            e.rng ||
            function () {
              if (
                !r &&
                !(r =
                  "undefined" != typeof crypto &&
                  crypto.getRandomValues &&
                  crypto.getRandomValues.bind(crypto))
              )
                throw Error(
                  "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                );
              return r(g);
            }
          )();
        if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), n)) {
          t = t || 0;
          for (let e = 0; e < 16; ++e) n[t + e] = o[e];
          return n;
        }
        return (function (e, n = 0) {
          return (
            A[e[n + 0]] +
            A[e[n + 1]] +
            A[e[n + 2]] +
            A[e[n + 3]] +
            "-" +
            A[e[n + 4]] +
            A[e[n + 5]] +
            "-" +
            A[e[n + 6]] +
            A[e[n + 7]] +
            "-" +
            A[e[n + 8]] +
            A[e[n + 9]] +
            "-" +
            A[e[n + 10]] +
            A[e[n + 11]] +
            A[e[n + 12]] +
            A[e[n + 13]] +
            A[e[n + 14]] +
            A[e[n + 15]]
          );
        })(o);
      };
      var P = (function () {
          var e = function (n, t) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, n) {
                  e.__proto__ = n;
                }) ||
              function (e, n) {
                for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
              })(n, t);
          };
          return function (n, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function r() {
              this.constructor = n;
            }
            (e(n, t),
              (n.prototype =
                null === t ? Object.create(t) : ((r.prototype = t.prototype), new r())));
          };
        })(),
        I = function () {
          return (I =
            Object.assign ||
            function (e) {
              for (var n, t = 1, r = arguments.length; t < r; t++)
                for (var o in (n = arguments[t]))
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              return e;
            }).apply(this, arguments);
        },
        j = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value) instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })
                  ).then(a, c);
            }
            s((r = r.apply(e, n || [])).next());
          });
        },
        x = function (e, n) {
          var t,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: c(0), throw: c(1), return: c(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function c(c) {
            return function (s) {
              var l = [c, s];
              if (t) throw TypeError("Generator is already executing.");
              for (; i && ((i = 0), l[0] && (a = 0)), a; )
                try {
                  if (
                    ((t = 1),
                    r &&
                      (o =
                        2 & l[0]
                          ? r.return
                          : l[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                      !(o = o.call(r, l[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                    case 0:
                    case 1:
                      o = l;
                      break;
                    case 4:
                      return (a.label++, { value: l[1], done: !1 });
                    case 5:
                      (a.label++, (r = l[1]), (l = [0]));
                      continue;
                    case 7:
                      ((l = a.ops.pop()), a.trys.pop());
                      continue;
                    default:
                      if (
                        !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                        (6 === l[0] || 2 === l[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === l[0] && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                        a.label = l[1];
                        break;
                      }
                      if (6 === l[0] && a.label < o[1]) {
                        ((a.label = o[1]), (o = l));
                        break;
                      }
                      if (o && a.label < o[2]) {
                        ((a.label = o[2]), a.ops.push(l));
                        break;
                      }
                      (o[2] && a.ops.pop(), a.trys.pop());
                      continue;
                  }
                  l = n.call(e, a);
                } catch (e) {
                  ((l = [6, e]), (r = 0));
                } finally {
                  t = o = 0;
                }
              if (5 & l[0]) throw l[1];
              return { value: l[0] ? l[1] : void 0, done: !0 };
            };
          }
        },
        S = (function (e) {
          function n(n, t) {
            var r,
              i = this;
            return (
              ((i = e.call(this) || this)._publicKey = null),
              (i._messageHandlers = {}),
              (i.handleMessage = function (e) {
                if (i._messageHandlers[e.id]) {
                  var n = i._messageHandlers[e.id],
                    t = n.resolve,
                    r = n.reject;
                  (delete i._messageHandlers[e.id], e.error ? r(e.error) : t(e.result));
                }
              }),
              (i._sendMessage = function (e) {
                if (!i.connected) throw Error("Wallet not connected");
                return new Promise(function (n, t) {
                  var r,
                    o,
                    a = E();
                  ((i._messageHandlers[a] = { resolve: n, reject: t }),
                    null == (o = null == (r = i._iframe) ? void 0 : r.contentWindow) ||
                      o.postMessage(
                        { channel: "solflareWalletAdapterToIframe", data: I({ id: a }, e) },
                        "*"
                      ));
                });
              }),
              (i._iframe = n),
              (i._publicKey = new o.J3(
                null == (r = null == t ? void 0 : t.toString) ? void 0 : r.call(t)
              )),
              i
            );
          }
          return (
            P(n, e),
            Object.defineProperty(n.prototype, "publicKey", {
              get: function () {
                return this._publicKey || null;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(n.prototype, "connected", {
              get: function () {
                return !0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (n.prototype.connect = function () {
              return j(this, void 0, void 0, function () {
                return x(this, function (e) {
                  return [2];
                });
              });
            }),
            (n.prototype.disconnect = function () {
              return j(this, void 0, void 0, function () {
                return x(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this._sendMessage({ method: "disconnect" })];
                    case 1:
                      return (e.sent(), [2]);
                  }
                });
              });
            }),
            (n.prototype.signTransaction = function (e) {
              var n;
              return j(this, void 0, void 0, function () {
                var t, r;
                return x(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (!this.connected) throw Error("Wallet not connected");
                      o.label = 1;
                    case 1:
                      return (
                        o.trys.push([1, 3, , 4]),
                        [
                          4,
                          this._sendMessage({
                            method: "signTransaction",
                            params: { transaction: l().encode(e) },
                          }),
                        ]
                      );
                    case 2:
                      return ((t = o.sent()), [2, l().decode(t)]);
                    case 3:
                      throw Error(
                        (null == (n = null == (r = o.sent()) ? void 0 : r.toString)
                          ? void 0
                          : n.call(r)) || "Failed to sign transaction"
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (n.prototype.signAllTransactions = function (e) {
              var n;
              return j(this, void 0, void 0, function () {
                var t;
                return x(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (!this.connected) throw Error("Wallet not connected");
                      r.label = 1;
                    case 1:
                      return (
                        r.trys.push([1, 3, , 4]),
                        [
                          4,
                          this._sendMessage({
                            method: "signAllTransactions",
                            params: {
                              transactions: e.map(function (e) {
                                return l().encode(e);
                              }),
                            },
                          }),
                        ]
                      );
                    case 2:
                      return [
                        2,
                        r.sent().map(function (e) {
                          return l().decode(e);
                        }),
                      ];
                    case 3:
                      throw Error(
                        (null == (n = null == (t = r.sent()) ? void 0 : t.toString)
                          ? void 0
                          : n.call(t)) || "Failed to sign transactions"
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (n.prototype.signAndSendTransaction = function (e, n) {
              var t;
              return j(this, void 0, void 0, function () {
                var r;
                return x(this, function (o) {
                  switch (o.label) {
                    case 0:
                      if (!this.connected) throw Error("Wallet not connected");
                      o.label = 1;
                    case 1:
                      return (
                        o.trys.push([1, 3, , 4]),
                        [
                          4,
                          this._sendMessage({
                            method: "signAndSendTransaction",
                            params: { transaction: l().encode(e), options: n },
                          }),
                        ]
                      );
                    case 2:
                      return [2, o.sent()];
                    case 3:
                      throw Error(
                        (null == (t = null == (r = o.sent()) ? void 0 : r.toString)
                          ? void 0
                          : t.call(r)) || "Failed to sign and send transaction"
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (n.prototype.signMessage = function (e, n) {
              var t;
              return (
                void 0 === n && (n = "hex"),
                j(this, void 0, void 0, function () {
                  var r, o;
                  return x(this, function (i) {
                    switch (i.label) {
                      case 0:
                        if (!this.connected) throw Error("Wallet not connected");
                        i.label = 1;
                      case 1:
                        return (
                          i.trys.push([1, 3, , 4]),
                          [
                            4,
                            this._sendMessage({
                              method: "signMessage",
                              params: { data: e, display: n },
                            }),
                          ]
                        );
                      case 2:
                        return ((r = i.sent()), [2, Uint8Array.from(l().decode(r))]);
                      case 3:
                        throw Error(
                          (null == (t = null == (o = i.sent()) ? void 0 : o.toString)
                            ? void 0
                            : t.call(o)) || "Failed to sign message"
                        );
                      case 4:
                        return [2];
                    }
                  });
                })
              );
            }),
            n
          );
        })(c);
      function O(e) {
        return void 0 === e.version;
      }
      var M = (function () {
          var e = function (n, t) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, n) {
                  e.__proto__ = n;
                }) ||
              function (e, n) {
                for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
              })(n, t);
          };
          return function (n, t) {
            if ("function" != typeof t && null !== t)
              throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function r() {
              this.constructor = n;
            }
            (e(n, t),
              (n.prototype =
                null === t ? Object.create(t) : ((r.prototype = t.prototype), new r())));
          };
        })(),
        T = function () {
          return (T =
            Object.assign ||
            function (e) {
              for (var n, t = 1, r = arguments.length; t < r; t++)
                for (var o in (n = arguments[t]))
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              return e;
            }).apply(this, arguments);
        },
        U = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function a(e) {
              try {
                s(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function c(e) {
              try {
                s(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value) instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })
                  ).then(a, c);
            }
            s((r = r.apply(e, n || [])).next());
          });
        },
        k = function (e, n) {
          var t,
            r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: c(0), throw: c(1), return: c(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function c(c) {
            return function (s) {
              var l = [c, s];
              if (t) throw TypeError("Generator is already executing.");
              for (; i && ((i = 0), l[0] && (a = 0)), a; )
                try {
                  if (
                    ((t = 1),
                    r &&
                      (o =
                        2 & l[0]
                          ? r.return
                          : l[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                      !(o = o.call(r, l[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                    case 0:
                    case 1:
                      o = l;
                      break;
                    case 4:
                      return (a.label++, { value: l[1], done: !1 });
                    case 5:
                      (a.label++, (r = l[1]), (l = [0]));
                      continue;
                    case 7:
                      ((l = a.ops.pop()), a.trys.pop());
                      continue;
                    default:
                      if (
                        !(o = (o = a.trys).length > 0 && o[o.length - 1]) &&
                        (6 === l[0] || 2 === l[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === l[0] && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                        a.label = l[1];
                        break;
                      }
                      if (6 === l[0] && a.label < o[1]) {
                        ((a.label = o[1]), (o = l));
                        break;
                      }
                      if (o && a.label < o[2]) {
                        ((a.label = o[2]), a.ops.push(l));
                        break;
                      }
                      (o[2] && a.ops.pop(), a.trys.pop());
                      continue;
                  }
                  l = n.call(e, a);
                } catch (e) {
                  ((l = [6, e]), (r = 0));
                } finally {
                  t = o = 0;
                }
              if (5 & l[0]) throw l[1];
              return { value: l[0] ? l[1] : void 0, done: !0 };
            };
          }
        },
        K = function (e) {
          var n = "function" == typeof Symbol && Symbol.iterator,
            t = n && e[n],
            r = 0;
          if (t) return t.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return (e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e });
              },
            };
          throw TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
      let R = (function (e) {
        function n(t) {
          var r = e.call(this) || this;
          return (
            (r._network = "mainnet-beta"),
            (r._provider = null),
            (r._iframeParams = {}),
            (r._adapterInstance = null),
            (r._element = null),
            (r._iframe = null),
            (r._connectHandler = null),
            (r._flutterHandlerInterval = null),
            (r._handleEvent = function (e) {
              var n, t, o, i;
              switch (e.type) {
                case "connect_native_web":
                  (r._collapseIframe(),
                    (r._adapterInstance = new b(
                      r._iframe,
                      r._network,
                      (null == (n = e.data) ? void 0 : n.provider) ||
                        r._provider ||
                        "https://solflare.com/provider"
                    )),
                    r._adapterInstance.on("connect", r._webConnected),
                    r._adapterInstance.on("disconnect", r._webDisconnected),
                    r._adapterInstance.connect(),
                    r._setPreferredAdapter("native_web"));
                  return;
                case "connect":
                  (r._collapseIframe(),
                    (r._adapterInstance = new S(
                      r._iframe,
                      (null == (t = e.data) ? void 0 : t.publicKey) || ""
                    )),
                    r._adapterInstance.connect(),
                    r._setPreferredAdapter(null == (o = e.data) ? void 0 : o.adapter),
                    r._connectHandler && (r._connectHandler.resolve(), (r._connectHandler = null)),
                    r.emit("connect", r.publicKey));
                  return;
                case "disconnect":
                  (r._connectHandler && (r._connectHandler.reject(), (r._connectHandler = null)),
                    r._disconnected(),
                    r.emit("disconnect"));
                  return;
                case "accountChanged":
                  (null == (i = e.data) ? void 0 : i.publicKey)
                    ? ((r._adapterInstance = new S(r._iframe, e.data.publicKey)),
                      r._adapterInstance.connect(),
                      r.emit("accountChanged", r.publicKey))
                    : r.emit("accountChanged", void 0);
                  return;
                case "collapse":
                  return void r._collapseIframe();
                default:
                  return;
              }
            }),
            (r._handleResize = function (e) {
              "full" === e.resizeMode
                ? "fullscreen" === e.params.mode
                  ? r._expandIframe()
                  : "hide" === e.params.mode && r._collapseIframe()
                : "coordinates" === e.resizeMode &&
                  r._iframe &&
                  ((r._iframe.style.top = isFinite(e.params.top)
                    ? "".concat(e.params.top, "px")
                    : ""),
                  (r._iframe.style.bottom = isFinite(e.params.bottom)
                    ? "".concat(e.params.bottom, "px")
                    : ""),
                  (r._iframe.style.left = isFinite(e.params.left)
                    ? "".concat(e.params.left, "px")
                    : ""),
                  (r._iframe.style.right = isFinite(e.params.right)
                    ? "".concat(e.params.right, "px")
                    : ""),
                  (r._iframe.style.width = isFinite(e.params.width)
                    ? "".concat(e.params.width, "px")
                    : e.params.width),
                  (r._iframe.style.height = isFinite(e.params.height)
                    ? "".concat(e.params.height, "px")
                    : e.params.height));
            }),
            (r._handleMessage = function (e) {
              if ((null == (n = e.data) ? void 0 : n.channel) === "solflareIframeToWalletAdapter") {
                var n,
                  t = e.data.data || {};
                "event" === t.type
                  ? r._handleEvent(t.event)
                  : "resize" === t.type
                    ? r._handleResize(t)
                    : "response" === t.type &&
                      r._adapterInstance &&
                      r._adapterInstance.handleMessage(t);
              }
            }),
            (r._removeElement = function () {
              (null !== r._flutterHandlerInterval &&
                (clearInterval(r._flutterHandlerInterval), (r._flutterHandlerInterval = null)),
                r._element && (r._element.remove(), (r._element = null)));
            }),
            (r._removeDanglingElements = function () {
              var e,
                n,
                t = document.getElementsByClassName("solflare-wallet-adapter-iframe");
              try {
                for (var r = K(t), o = r.next(); !o.done; o = r.next()) {
                  var i = o.value;
                  i.parentElement && i.remove();
                }
              } catch (n) {
                e = { error: n };
              } finally {
                try {
                  o && !o.done && (n = r.return) && n.call(r);
                } finally {
                  if (e) throw e.error;
                }
              }
            }),
            (r._injectElement = function () {
              (r._removeElement(), r._removeDanglingElements());
              var e = T(T({}, r._iframeParams), {
                  cluster: r._network || "mainnet-beta",
                  origin: window.location.origin || "",
                  title: document.title || "",
                  version: 1,
                  sdkVersion: "1.4.2",
                }),
                t = r._getPreferredAdapter();
              (t && (e.adapter = t), r._provider && (e.provider = r._provider));
              var o = Object.keys(e)
                  .map(function (n) {
                    return "".concat(n, "=").concat(encodeURIComponent(e[n]));
                  })
                  .join("&"),
                i = "".concat(n.IFRAME_URL, "?").concat(o);
              ((r._element = document.createElement("div")),
                (r._element.className = "solflare-wallet-adapter-iframe"),
                (r._element.innerHTML = "\n      <iframe src='".concat(
                  i,
                  "' referrerPolicy='strict-origin-when-cross-origin' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    "
                )),
                document.body.appendChild(r._element),
                (r._iframe = r._element.querySelector("iframe")),
                (window.fromFlutter = r._handleMobileMessage),
                (r._flutterHandlerInterval = setInterval(function () {
                  window.fromFlutter = r._handleMobileMessage;
                }, 100)),
                window.addEventListener("message", r._handleMessage, !1));
            }),
            (r._collapseIframe = function () {
              r._iframe &&
                ((r._iframe.style.top = ""),
                (r._iframe.style.right = ""),
                (r._iframe.style.height = "2px"),
                (r._iframe.style.width = "2px"));
            }),
            (r._expandIframe = function () {
              r._iframe &&
                ((r._iframe.style.top = "0px"),
                (r._iframe.style.bottom = "0px"),
                (r._iframe.style.left = "0px"),
                (r._iframe.style.right = "0px"),
                (r._iframe.style.width = "100%"),
                (r._iframe.style.height = "100%"));
            }),
            (r._getPreferredAdapter = function () {
              return (
                (localStorage && localStorage.getItem("solflarePreferredWalletAdapter")) || null
              );
            }),
            (r._setPreferredAdapter = function (e) {
              localStorage && e && localStorage.setItem("solflarePreferredWalletAdapter", e);
            }),
            (r._clearPreferredAdapter = function () {
              localStorage && localStorage.removeItem("solflarePreferredWalletAdapter");
            }),
            (r._webConnected = function () {
              (r._connectHandler && (r._connectHandler.resolve(), (r._connectHandler = null)),
                r.emit("connect", r.publicKey));
            }),
            (r._webDisconnected = function () {
              (r._connectHandler && (r._connectHandler.reject(), (r._connectHandler = null)),
                r._disconnected(),
                r.emit("disconnect"));
            }),
            (r._disconnected = function () {
              (window.removeEventListener("message", r._handleMessage, !1),
                r._removeElement(),
                r._clearPreferredAdapter(),
                (r._adapterInstance = null));
            }),
            (r._handleMobileMessage = function (e) {
              var n, t;
              null == (t = null == (n = r._iframe) ? void 0 : n.contentWindow) ||
                t.postMessage({ channel: "solflareMobileToIframe", data: e }, "*");
            }),
            (null == t ? void 0 : t.network) && (r._network = null == t ? void 0 : t.network),
            (null == t ? void 0 : t.provider) && (r._provider = null == t ? void 0 : t.provider),
            (null == t ? void 0 : t.params) &&
              (r._iframeParams = T({}, null == t ? void 0 : t.params)),
            r
          );
        }
        return (
          M(n, e),
          Object.defineProperty(n.prototype, "publicKey", {
            get: function () {
              var e;
              return (null == (e = this._adapterInstance) ? void 0 : e.publicKey) || null;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "isConnected", {
            get: function () {
              var e;
              return !!(null == (e = this._adapterInstance) ? void 0 : e.connected);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "connected", {
            get: function () {
              return this.isConnected;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(n.prototype, "autoApprove", {
            get: function () {
              return !1;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (n.prototype.connect = function () {
            return U(this, void 0, void 0, function () {
              var e = this;
              return k(this, function (n) {
                switch (n.label) {
                  case 0:
                    if (this.connected) return [2];
                    return (
                      this._injectElement(),
                      [
                        4,
                        new Promise(function (n, t) {
                          e._connectHandler = { resolve: n, reject: t };
                        }),
                      ]
                    );
                  case 1:
                    return (n.sent(), [2]);
                }
              });
            });
          }),
          (n.prototype.disconnect = function () {
            return U(this, void 0, void 0, function () {
              return k(this, function (e) {
                switch (e.label) {
                  case 0:
                    if (!this._adapterInstance) return [2];
                    return [4, this._adapterInstance.disconnect()];
                  case 1:
                    return (e.sent(), this._disconnected(), this.emit("disconnect"), [2]);
                }
              });
            });
          }),
          (n.prototype.signTransaction = function (e) {
            return U(this, void 0, void 0, function () {
              var n, t;
              return k(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (!this.connected) throw Error("Wallet not connected");
                    return (
                      (n = O(e)
                        ? Uint8Array.from(
                            e.serialize({ verifySignatures: !1, requireAllSignatures: !1 })
                          )
                        : e.serialize()),
                      [4, this._adapterInstance.signTransaction(n)]
                    );
                  case 1:
                    return ((t = r.sent()), [2, O(e) ? o.ZX.from(t) : o.Kt.deserialize(t)]);
                }
              });
            });
          }),
          (n.prototype.signAllTransactions = function (e) {
            return U(this, void 0, void 0, function () {
              var n, t;
              return k(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (!this.connected) throw Error("Wallet not connected");
                    return (
                      (n = e.map(function (e) {
                        return O(e)
                          ? Uint8Array.from(
                              e.serialize({ verifySignatures: !1, requireAllSignatures: !1 })
                            )
                          : e.serialize();
                      })),
                      [4, this._adapterInstance.signAllTransactions(n)]
                    );
                  case 1:
                    if ((t = r.sent()).length !== e.length)
                      throw Error("Failed to sign all transactions");
                    return [
                      2,
                      t.map(function (n, t) {
                        return O(e[t]) ? o.ZX.from(n) : o.Kt.deserialize(n);
                      }),
                    ];
                }
              });
            });
          }),
          (n.prototype.signAndSendTransaction = function (e, n) {
            return U(this, void 0, void 0, function () {
              var t;
              return k(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (!this.connected) throw Error("Wallet not connected");
                    return (
                      (t = O(e)
                        ? e.serialize({ verifySignatures: !1, requireAllSignatures: !1 })
                        : e.serialize()),
                      [4, this._adapterInstance.signAndSendTransaction(t, n)]
                    );
                  case 1:
                    return [2, r.sent()];
                }
              });
            });
          }),
          (n.prototype.signMessage = function (e, n) {
            return (
              void 0 === n && (n = "utf8"),
              U(this, void 0, void 0, function () {
                return k(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if (!this.connected) throw Error("Wallet not connected");
                      return [4, this._adapterInstance.signMessage(e, n)];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              })
            );
          }),
          (n.prototype.sign = function (e, n) {
            return (
              void 0 === n && (n = "utf8"),
              U(this, void 0, void 0, function () {
                return k(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.signMessage(e, n)];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              })
            );
          }),
          (n.prototype.detectWallet = function (e) {
            var n;
            return (
              void 0 === e && (e = 10),
              U(this, void 0, void 0, function () {
                return k(this, function (t) {
                  return window.SolflareApp ||
                    (null == (n = window.solflare) ? void 0 : n.isSolflare)
                    ? [2, !0]
                    : [
                        2,
                        new Promise(function (n) {
                          var t, r;
                          ((t = setInterval(function () {
                            var e;
                            (window.SolflareApp ||
                              (null == (e = window.solflare) ? void 0 : e.isSolflare)) &&
                              (clearInterval(t), clearTimeout(r), n(!0));
                          }, 500)),
                            (r = setTimeout(function () {
                              (clearInterval(t), n(!1));
                            }, 1e3 * e)));
                        }),
                      ];
                });
              })
            );
          }),
          (n.IFRAME_URL = "https://connect.solflare.com/"),
          n
        );
      })(i.A);
    },
  },
]);
