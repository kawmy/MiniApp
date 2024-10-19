/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function (n, t) {
   "use strict";
   "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function (n) {
      if (!n.document) throw new Error("jQuery requires a window with a document");
      return t(n)
   } : t(n)
}("undefined" != typeof window ? window : this, function (n, t) {
   "use strict";

   function er(n, t, i) {
      var r, u = (t = t || f).createElement("script");
      if (u.text = n, i)
         for (r in le) i[r] && (u[r] = i[r]);
      t.head.appendChild(u).parentNode.removeChild(u)
   }

   function tt(n) {
      return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ni[uu.call(n)] || "object" : typeof n
   }

   function si(n) {
      var t = !!n && "length" in n && n.length,
         i = tt(n);
      return !u(n) && !et(n) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in n)
   }

   function v(n, t) {
      return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
   }

   function hi(n, t, r) {
      return u(t) ? i.grep(n, function (n, i) {
         return !!t.call(n, i, n) !== r
      }) : t.nodeType ? i.grep(n, function (n) {
         return n === t !== r
      }) : "string" != typeof t ? i.grep(n, function (n) {
         return gt.call(t, n) > -1 !== r
      }) : i.filter(t, n, r)
   }

   function or(n, t) {
      while ((n = n[t]) && 1 !== n.nodeType);
      return n
   }

   function kf(n) {
      var t = {};
      return i.each(n.match(a) || [], function (n, i) {
         t[i] = !0
      }), t
   }

   function it(n) {
      return n
   }

   function wt(n) {
      throw n;
   }

   function sr(n, t, i, r) {
      var f;
      try {
         n && u(f = n.promise) ? f.call(n).done(t).fail(i) : n && u(f = n.then) ? f.call(n, t, i) : t.apply(void 0, [n].slice(r))
      } catch (n) {
         i.apply(void 0, [n])
      }
   }

   function bt() {
      f.removeEventListener("DOMContentLoaded", bt);
      n.removeEventListener("load", bt);
      i.ready()
   }

   function df(n, t) {
      return t.toUpperCase()
   }

   function y(n) {
      return n.replace(ve, "ms-").replace(ye, df)
   }

   function lt() {
      this.expando = i.expando + lt.uid++
   }

   function gf(n) {
      return "true" === n || "false" !== n && ("null" === n ? null : n === +n + "" ? +n : pe.test(n) ? JSON.parse(n) : n)
   }

   function hr(n, t, i) {
      var r;
      if (void 0 === i && 1 === n.nodeType)
         if (r = "data-" + t.replace(we, "-$&").toLowerCase(), "string" == typeof (i = n.getAttribute(r))) {
            try {
               i = gf(i)
            } catch (n) {}
            h.set(n, t, i)
         } else i = void 0;
      return i
   }

   function cr(n, t, r, u) {
      var s, h, c = 20,
         l = u ? function () {
            return u.cur()
         } : function () {
            return i.css(n, t, "")
         },
         o = l(),
         e = r && r[3] || (i.cssNumber[t] ? "" : "px"),
         f = (i.cssNumber[t] || "px" !== e && +o) && yt.exec(i.css(n, t));
      if (f && f[3] !== e) {
         for (o /= 2, e = e || f[3], f = +o || 1; c--;) i.style(n, t, f + e), (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0), f /= h;
         f *= 2;
         i.style(n, t, f + e);
         r = r || []
      }
      return r && (f = +f || +o || 0, s = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = e, u.start = f, u.end = s)), s
   }

   function ne(n) {
      var r, f = n.ownerDocument,
         u = n.nodeName,
         t = di[u];
      return t || (r = f.body.appendChild(f.createElement(u)), t = i.css(r, "display"), r.parentNode.removeChild(r), "none" === t && (t = "block"), di[u] = t, t)
   }

   function rt(n, t) {
      for (var e, u, f = [], i = 0, o = n.length; i < o; i++)(u = n[i]).style && (e = u.style.display, t ? ("none" === e && (f[i] = r.get(u, "display") || null, f[i] || (u.style.display = "")), "" === u.style.display && fi(u) && (f[i] = ne(u))) : "none" !== e && (f[i] = "none", r.set(u, "display", e)));
      for (i = 0; i < o; i++) null != f[i] && (n[i].style.display = f[i]);
      return n
   }

   function o(n, t) {
      var r;
      return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [], void 0 === t || t && v(n, t) ? i.merge([n], r) : r
   }

   function ci(n, t) {
      for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
   }

   function lr(n, t, r, u, f) {
      for (var e, s, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
         if ((e = n[l]) || 0 === e)
            if ("object" === tt(e)) i.merge(y, e.nodeType ? [e] : e);
            else if (lu.test(e)) {
         for (s = s || h.appendChild(t.createElement("div")), p = (ef.exec(e) || ["", ""])[1].toLowerCase(), a = c[p] || c._default, s.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) s = s.lastChild;
         i.merge(y, s.childNodes);
         (s = h.firstChild).textContent = ""
      } else y.push(t.createTextNode(e));
      for (h.textContent = "", l = 0; e = y[l++];)
         if (u && i.inArray(e, u) > -1) f && f.push(e);
         else if (w = i.contains(e.ownerDocument, e), s = o(h.appendChild(e), "script"), w && ci(s), r)
         for (v = 0; e = s[v++];) sf.test(e.type || "") && r.push(e);
      return h
   }

   function kt() {
      return !0
   }

   function ut() {
      return !1
   }

   function ar() {
      try {
         return f.activeElement
      } catch (n) {}
   }

   function li(n, t, r, u, f, e) {
      var o, s;
      if ("object" == typeof t) {
         "string" != typeof r && (u = u || r, r = void 0);
         for (s in t) li(n, s, r, u, t[s], e);
         return n
      }
      if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), !1 === f) f = ut;
      else if (!f) return n;
      return 1 === e && (o = f, (f = function (n) {
         return i().off(n), o.apply(this, arguments)
      }).guid = o.guid || (o.guid = i.guid++)), n.each(function () {
         i.event.add(this, t, f, u, r)
      })
   }

   function vr(n, t) {
      return v(n, "table") && v(11 !== t.nodeType ? t : t.firstChild, "tr") ? i(n).children("tbody")[0] || n : n
   }

   function te(n) {
      return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
   }

   function ie(n) {
      return "true/" === (n.type || "").slice(0, 5) ? n.type = n.type.slice(5) : n.removeAttribute("type"), n
   }

   function yr(n, t) {
      var u, c, f, o, s, l, a, e;
      if (1 === t.nodeType) {
         if (r.hasData(n) && (o = r.access(n), s = r.set(t, o), e = o.events)) {
            delete s.handle;
            s.events = {};
            for (f in e)
               for (u = 0, c = e[f].length; u < c; u++) i.event.add(t, f, e[f][u])
         }
         h.hasData(n) && (l = h.access(n), a = i.extend({}, l), h.set(t, a))
      }
   }

   function re(n, t) {
      var i = t.nodeName.toLowerCase();
      "input" === i && ff.test(n.type) ? t.checked = n.checked : "input" !== i && "textarea" !== i || (t.defaultValue = n.defaultValue)
   }

   function ft(n, t, f, s) {
      t = ru.apply([], t);
      var l, w, a, v, h, b, c = 0,
         y = n.length,
         d = y - 1,
         p = t[0],
         k = u(p);
      if (k || y > 1 && "string" == typeof p && !e.checkClone && no.test(p)) return n.each(function (i) {
         var r = n.eq(i);
         k && (t[0] = p.call(this, i, r.html()));
         ft(r, t, f, s)
      });
      if (y && (l = lr(t, n[0].ownerDocument, !1, n, s), w = l.firstChild, 1 === l.childNodes.length && (l = w), w || s)) {
         for (v = (a = i.map(o(l, "script"), te)).length; c < y; c++) h = l, c !== d && (h = i.clone(h, !0, !0), v && i.merge(a, o(h, "script"))), f.call(n[c], h, c);
         if (v)
            for (b = a[a.length - 1].ownerDocument, i.map(a, ie), c = 0; c < v; c++) h = a[c], sf.test(h.type || "") && !r.access(h, "globalEval") && i.contains(b, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? i._evalUrl && i._evalUrl(h.src) : er(h.textContent.replace(to, ""), b, h))
      }
      return n
   }

   function pr(n, t, r) {
      for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(o(u)), u.parentNode && (r && i.contains(u.ownerDocument, u) && ci(o(u, "script")), u.parentNode.removeChild(u));
      return n
   }

   function at(n, t, r) {
      var o, s, h, f, u = n.style;
      return (r = r || oi(n)) && ("" !== (f = r.getPropertyValue(t) || r[t]) || i.contains(n.ownerDocument, n) || (f = i.style(n, t)), !e.pixelBoxStyles() && ir.test(f) && io.test(t) && (o = u.width, s = u.minWidth, h = u.maxWidth, u.minWidth = u.maxWidth = u.width = f, f = r.width, u.width = o, u.minWidth = s, u.maxWidth = h)), void 0 !== f ? f + "" : f
   }

   function wr(n, t) {
      return {
         get: function () {
            if (!n()) return (this.get = t).apply(this, arguments);
            delete this.get
         }
      }
   }

   function ue(n) {
      if (n in vf) return n;
      for (var i = n[0].toUpperCase() + n.slice(1), t = af.length; t--;)
         if ((n = af[t] + i) in vf) return n
   }

   function br(n) {
      var t = i.cssProps[n];
      return t || (t = i.cssProps[n] = ue(n) || n), t
   }

   function kr(n, t, i) {
      var r = yt.exec(t);
      return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
   }

   function ai(n, t, r, u, f, e) {
      var o = "width" === t ? 1 : 0,
         h = 0,
         s = 0;
      if (r === (u ? "border" : "content")) return 0;
      for (; o < 4; o += 2) "margin" === r && (s += i.css(n, r + w[o], !0, f)), u ? ("content" === r && (s -= i.css(n, "padding" + w[o], !0, f)), "margin" !== r && (s -= i.css(n, "border" + w[o] + "Width", !0, f))) : (s += i.css(n, "padding" + w[o], !0, f), "padding" !== r ? s += i.css(n, "border" + w[o] + "Width", !0, f) : h += i.css(n, "border" + w[o] + "Width", !0, f));
      return !u && e >= 0 && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5))), s
   }

   function dr(n, t, r) {
      var f = oi(n),
         u = at(n, t, f),
         s = "border-box" === i.css(n, "boxSizing", !1, f),
         o = s;
      if (ir.test(u)) {
         if (!r) return u;
         u = "auto"
      }
      return o = o && (e.boxSizingReliable() || u === n.style[t]), ("auto" === u || !parseFloat(u) && "inline" === i.css(n, "display", !1, f)) && (u = n["offset" + t[0].toUpperCase() + t.slice(1)], o = !0), (u = parseFloat(u) || 0) + ai(n, t, r || (s ? "border" : "content"), o, f, u) + "px"
   }

   function s(n, t, i, r, u) {
      return new s.prototype.init(n, t, i, r, u)
   }

   function vi() {
      ri && (!1 === f.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(vi) : n.setTimeout(vi, i.fx.interval), i.fx.tick())
   }

   function gr() {
      return n.setTimeout(function () {
         ot = void 0
      }), ot = Date.now()
   }

   function dt(n, t) {
      var u, r = 0,
         i = {
            height: n
         };
      for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (u = w[r])] = i["padding" + u] = n;
      return t && (i.opacity = i.width = n), i
   }

   function nu(n, t, i) {
      for (var u, f = (l.tweeners[t] || []).concat(l.tweeners["*"]), r = 0, e = f.length; r < e; r++)
         if (u = f[r].call(i, t, n)) return u
   }

   function fe(n, t, u) {
      var f, y, w, c, b, h, o, l, k = "width" in t || "height" in t,
         v = this,
         p = {},
         s = n.style,
         a = n.nodeType && fi(n),
         e = r.get(n, "fxshow");
      u.queue || (null == (c = i._queueHooks(n, "fx")).unqueued && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function () {
         c.unqueued || b()
      }), c.unqueued++, v.always(function () {
         v.always(function () {
            c.unqueued--;
            i.queue(n, "fx").length || c.empty.fire()
         })
      }));
      for (f in t)
         if (y = t[f], au.test(y)) {
            if (delete t[f], w = w || "toggle" === y, y === (a ? "hide" : "show")) {
               if ("show" !== y || !e || void 0 === e[f]) continue;
               a = !0
            }
            p[f] = e && e[f] || i.style(n, f)
         } if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p)) {
         k && 1 === n.nodeType && (u.overflow = [s.overflow, s.overflowX, s.overflowY], null == (o = e && e.display) && (o = r.get(n, "display")), "none" === (l = i.css(n, "display")) && (o ? l = o : (rt([n], !0), o = n.style.display || o, l = i.css(n, "display"), rt([n]))), ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (h || (v.done(function () {
            s.display = o
         }), null == o && (l = s.display, o = "none" === l ? "" : l)), s.display = "inline-block"));
         u.overflow && (s.overflow = "hidden", v.always(function () {
            s.overflow = u.overflow[0];
            s.overflowX = u.overflow[1];
            s.overflowY = u.overflow[2]
         }));
         h = !1;
         for (f in p) h || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", {
            display: o
         }), w && (e.hidden = !a), a && rt([n], !0), v.done(function () {
            a || rt([n]);
            r.remove(n, "fxshow");
            for (f in p) i.style(n, f, p[f])
         })), h = nu(a ? e[f] : 0, f, v), f in e || (e[f] = h.start, a && (h.end = h.start, h.start = 0))
      }
   }

   function ee(n, t) {
      var r, f, e, u, o;
      for (r in n)
         if (f = y(r), e = t[f], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), (o = i.cssHooks[f]) && "expand" in o) {
            u = o.expand(u);
            delete n[f];
            for (r in u) r in n || (n[r] = u[r], t[r] = e)
         } else t[f] = e
   }

   function l(n, t, r) {
      var o, s, h = 0,
         v = l.prefilters.length,
         e = i.Deferred().always(function () {
            delete a.elem
         }),
         a = function () {
            if (s) return !1;
            for (var o = ot || gr(), t = Math.max(0, f.startTime + f.duration - o), i = 1 - (t / f.duration || 0), r = 0, u = f.tweens.length; r < u; r++) f.tweens[r].run(i);
            return e.notifyWith(n, [f, i, t]), i < 1 && u ? t : (u || e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f]), !1)
         },
         f = e.promise({
            elem: n,
            props: i.extend({}, t),
            opts: i.extend(!0, {
               specialEasing: {},
               easing: i.easing._default
            }, r),
            originalProperties: t,
            originalOptions: r,
            startTime: ot || gr(),
            duration: r.duration,
            tweens: [],
            createTween: function (t, r) {
               var u = i.Tween(n, f.opts, t, r, f.opts.specialEasing[t] || f.opts.easing);
               return f.tweens.push(u), u
            },
            stop: function (t) {
               var i = 0,
                  r = t ? f.tweens.length : 0;
               if (s) return this;
               for (s = !0; i < r; i++) f.tweens[i].run(1);
               return t ? (e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f, t])) : e.rejectWith(n, [f, t]), this
            }
         }),
         c = f.props;
      for (ee(c, f.opts.specialEasing); h < v; h++)
         if (o = l.prefilters[h].call(f, n, c, f.opts)) return u(o.stop) && (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)), o;
      return i.map(c, nu, f), u(f.opts.start) && f.opts.start.call(n, f), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always), i.fx.timer(i.extend(a, {
         elem: n,
         anim: f,
         queue: f.opts.queue
      })), f
   }

   function k(n) {
      return (n.match(a) || []).join(" ")
   }

   function d(n) {
      return n.getAttribute && n.getAttribute("class") || ""
   }

   function yi(n) {
      return Array.isArray(n) ? n : "string" == typeof n ? n.match(a) || [] : []
   }

   function pi(n, t, r, u) {
      var f;
      if (Array.isArray(t)) i.each(t, function (t, i) {
         r || fo.test(n) ? u(n, i) : pi(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
      });
      else if (r || "object" !== tt(t)) u(n, t);
      else
         for (f in t) pi(n + "[" + f + "]", t[f], r, u)
   }

   function tu(n) {
      return function (t, i) {
         "string" != typeof t && (i = t, t = "*");
         var r, f = 0,
            e = t.toLowerCase().match(a) || [];
         if (u(i))
            while (r = e[f++]) "+" === r[0] ? (r = r.slice(1) || "*", (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i)
      }
   }

   function iu(n, t, r, u) {
      function f(s) {
         var h;
         return e[s] = !0, i.each(n[s] || [], function (n, i) {
            var s = i(t, r, u);
            return "string" != typeof s || o || e[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), f(s), !1)
         }), h
      }
      var e = {},
         o = n === ur;
      return f(t.dataTypes[0]) || !e["*"] && f("*")
   }

   function wi(n, t) {
      var r, u, f = i.ajaxSettings.flatOptions || {};
      for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
      return u && i.extend(!0, n, u), n
   }

   function oe(n, t, i) {
      for (var e, u, f, o, s = n.contents, r = n.dataTypes;
         "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
      if (e)
         for (u in s)
            if (s[u] && s[u].test(e)) {
               r.unshift(u);
               break
            } if (r[0] in i) f = r[0];
      else {
         for (u in i) {
            if (!r[0] || n.converters[u + " " + r[0]]) {
               f = u;
               break
            }
            o || (o = u)
         }
         f = f || o
      }
      if (f) return f !== r[0] && r.unshift(f), i[f]
   }

   function se(n, t, i, r) {
      var h, u, f, s, e, o = {},
         c = n.dataTypes.slice();
      if (c[1])
         for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
      for (u = c.shift(); u;)
         if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
            if ("*" === u) u = e;
            else if ("*" !== e && e !== u) {
         if (!(f = o[e + " " + u] || o["* " + u]))
            for (h in o)
               if ((s = h.split(" "))[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                  !0 === f ? f = o[h] : !0 !== o[h] && (u = s[0], c.unshift(s[1]));
                  break
               } if (!0 !== f)
            if (f && n.throws) t = f(t);
            else try {
               t = f(t)
            } catch (n) {
               return {
                  state: "parsererror",
                  error: f ? n : "No conversion from " + e + " to " + u
               }
            }
      }
      return {
         state: "success",
         data: t
      }
   }
   var g = [],
      f = n.document,
      he = Object.getPrototypeOf,
      nt = g.slice,
      ru = g.concat,
      bi = g.push,
      gt = g.indexOf,
      ni = {},
      uu = ni.toString,
      ti = ni.hasOwnProperty,
      fu = ti.toString,
      ce = fu.call(Object),
      e = {},
      u = function (n) {
         return "function" == typeof n && "number" != typeof n.nodeType
      },
      et = function (n) {
         return null != n && n === n.window
      },
      le = {
         type: !0,
         src: !0,
         noModule: !0
      },
      i = function (n, t) {
         return new i.fn.init(n, t)
      },
      ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      b, ki, eu, ou, su, hu, a, cu, ii, vt, di, lu, ot, ri, au, vu, yu, st, pu, wu, bu, gi, nr, ku, ht, tr, ui, du, gu;
   i.fn = i.prototype = {
      jquery: "3.3.1",
      constructor: i,
      length: 0,
      toArray: function () {
         return nt.call(this)
      },
      get: function (n) {
         return null == n ? nt.call(this) : n < 0 ? this[n + this.length] : this[n]
      },
      pushStack: function (n) {
         var t = i.merge(this.constructor(), n);
         return t.prevObject = this, t
      },
      each: function (n) {
         return i.each(this, n)
      },
      map: function (n) {
         return this.pushStack(i.map(this, function (t, i) {
            return n.call(t, i, t)
         }))
      },
      slice: function () {
         return this.pushStack(nt.apply(this, arguments))
      },
      first: function () {
         return this.eq(0)
      },
      last: function () {
         return this.eq(-1)
      },
      eq: function (n) {
         var i = this.length,
            t = +n + (n < 0 ? i : 0);
         return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
      },
      end: function () {
         return this.prevObject || this.constructor()
      },
      push: bi,
      sort: g.sort,
      splice: g.splice
   };
   i.extend = i.fn.extend = function () {
      var o, e, t, r, s, h, n = arguments[0] || {},
         f = 1,
         l = arguments.length,
         c = !1;
      for ("boolean" == typeof n && (c = n, n = arguments[f] || {}, f++), "object" == typeof n || u(n) || (n = {}), f === l && (n = this, f--); f < l; f++)
         if (null != (o = arguments[f]))
            for (e in o) t = n[e], n !== (r = o[e]) && (c && r && (i.isPlainObject(r) || (s = Array.isArray(r))) ? (s ? (s = !1, h = t && Array.isArray(t) ? t : []) : h = t && i.isPlainObject(t) ? t : {}, n[e] = i.extend(c, h, r)) : void 0 !== r && (n[e] = r));
      return n
   };
   i.extend({
      expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (n) {
         throw new Error(n);
      },
      noop: function () {},
      isPlainObject: function (n) {
         var t, i;
         return !(!n || "[object Object]" !== uu.call(n)) && (!(t = he(n)) || "function" == typeof (i = ti.call(t, "constructor") && t.constructor) && fu.call(i) === ce)
      },
      isEmptyObject: function (n) {
         for (var t in n) return !1;
         return !0
      },
      globalEval: function (n) {
         er(n)
      },
      each: function (n, t) {
         var r, i = 0;
         if (si(n)) {
            for (r = n.length; i < r; i++)
               if (!1 === t.call(n[i], i, n[i])) break
         } else
            for (i in n)
               if (!1 === t.call(n[i], i, n[i])) break;
         return n
      },
      trim: function (n) {
         return null == n ? "" : (n + "").replace(ae, "")
      },
      makeArray: function (n, t) {
         var r = t || [];
         return null != n && (si(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : bi.call(r, n)), r
      },
      inArray: function (n, t, i) {
         return null == t ? -1 : gt.call(t, n, i)
      },
      merge: function (n, t) {
         for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
         return n.length = r, n
      },
      grep: function (n, t, i) {
         for (var f, u = [], r = 0, e = n.length, o = !i; r < e; r++)(f = !t(n[r], r)) !== o && u.push(n[r]);
         return u
      },
      map: function (n, t, i) {
         var e, u, r = 0,
            f = [];
         if (si(n))
            for (e = n.length; r < e; r++) null != (u = t(n[r], r, i)) && f.push(u);
         else
            for (r in n) null != (u = t(n[r], r, i)) && f.push(u);
         return ru.apply([], f)
      },
      guid: 1,
      support: e
   });
   "function" == typeof Symbol && (i.fn[Symbol.iterator] = g[Symbol.iterator]);
   i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (n, t) {
      ni["[object " + t + "]"] = t.toLowerCase()
   });
   b = function (n) {
      function u(n, t, r, u) {
         var s, p, l, a, w, d, g, y = t && t.ownerDocument,
            v = t ? t.nodeType : 9;
         if (r = r || [], "string" != typeof n || !n || 1 !== v && 9 !== v && 11 !== v) return r;
         if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t), t = t || i, h)) {
            if (11 !== v && (w = yr.exec(n)))
               if (s = w[1]) {
                  if (9 === v) {
                     if (!(l = t.getElementById(s))) return r;
                     if (l.id === s) return r.push(l), r
                  } else if (y && (l = y.getElementById(s)) && et(t, l) && l.id === s) return r.push(l), r
               } else {
                  if (w[2]) return k.apply(r, t.getElementsByTagName(n)), r;
                  if ((s = w[3]) && e.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r
               } if (e.qsa && !yt[n + " "] && (!o || !o.test(n))) {
               if (1 !== v) y = t, g = n;
               else if ("object" !== t.nodeName.toLowerCase()) {
                  for ((a = t.getAttribute("id")) ? a = a.replace(wi, bi) : t.setAttribute("id", a = f), p = (d = ft(n)).length; p--;) d[p] = "#" + a + " " + st(d[p]);
                  g = d.join(",");
                  y = ei.test(n) && dt(t.parentNode) || t
               }
               if (g) try {
                  return k.apply(r, y.querySelectorAll(g)), r
               } catch (n) {} finally {
                  a === f && t.removeAttribute("id")
               }
            }
         }
         return li(n.replace(pt, "$1"), t, r, u)
      }

      function bt() {
         function n(r, u) {
            return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
         }
         var i = [];
         return n
      }

      function l(n) {
         return n[f] = !0, n
      }

      function a(n) {
         var t = i.createElement("fieldset");
         try {
            return !!n(t)
         } catch (n) {
            return !1
         } finally {
            t.parentNode && t.parentNode.removeChild(t);
            t = null
         }
      }

      function kt(n, i) {
         for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i
      }

      function oi(n, t) {
         var i = t && n,
            r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
         if (r) return r;
         if (i)
            while (i = i.nextSibling)
               if (i === t) return -1;
         return n ? 1 : -1
      }

      function di(n) {
         return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === n
         }
      }

      function gi(n) {
         return function (t) {
            var i = t.nodeName.toLowerCase();
            return ("input" === i || "button" === i) && t.type === n
         }
      }

      function si(n) {
         return function (t) {
            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && pr(t) === n : t.disabled === n : "label" in t && t.disabled === n
         }
      }

      function d(n) {
         return l(function (t) {
            return t = +t, l(function (i, r) {
               for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
            })
         })
      }

      function dt(n) {
         return n && "undefined" != typeof n.getElementsByTagName && n
      }

      function hi() {}

      function st(n) {
         for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
         return i
      }

      function ht(n, t, i) {
         var r = t.dir,
            u = t.next,
            e = u || r,
            o = i && "parentNode" === e,
            s = ir++;
         return t.first ? function (t, i, u) {
            while (t = t[r])
               if (1 === t.nodeType || o) return n(t, i, u);
            return !1
         } : function (t, i, h) {
            var c, l, a, y = [v, s];
            if (h) {
               while (t = t[r])
                  if ((1 === t.nodeType || o) && n(t, i, h)) return !0
            } else
               while (t = t[r])
                  if (1 === t.nodeType || o)
                     if (a = t[f] || (t[f] = {}), l = a[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                     else {
                        if ((c = l[e]) && c[0] === v && c[1] === s) return y[2] = c[2];
                        if (l[e] = y, y[2] = n(t, i, h)) return !0
                     } return !1
         }
      }

      function gt(n) {
         return n.length > 1 ? function (t, i, r) {
            for (var u = n.length; u--;)
               if (!n[u](t, i, r)) return !1;
            return !0
         } : n[0]
      }

      function nr(n, t, i) {
         for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
         return i
      }

      function ct(n, t, i, r, u) {
         for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f)));
         return o
      }

      function ni(n, t, i, r, u, e) {
         return r && !r[f] && (r = ni(r)), u && !u[f] && (u = ni(u, e)), l(function (f, e, o, s) {
            var l, c, a, p = [],
               y = [],
               w = e.length,
               b = f || nr(t || "*", o.nodeType ? [o] : o, []),
               v = !n || !f && t ? b : ct(b, p, n, o, s),
               h = i ? u || (f ? n : w || r) ? [] : e : v;
            if (i && i(v, h, o, s), r)
               for (l = ct(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
            if (f) {
               if (u || n) {
                  if (u) {
                     for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                     u(null, h = [], l, s)
                  }
                  for (c = h.length; c--;)(a = h[c]) && (l = u ? tt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
               }
            } else h = ct(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : k.apply(e, h)
         })
      }

      function ti(n) {
         for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ht(function (n) {
               return n === o
            }, c, !0), a = ht(function (n) {
               return tt(o, n) > -1
            }, c, !0), e = [function (n, t, i) {
               var r = !h && (i || t !== at) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
               return o = null, r
            }]; i < s; i++)
            if (u = t.relative[n[i].type]) e = [ht(gt(e), u)];
            else {
               if ((u = t.filter[n[i].type].apply(null, n[i].matches))[f]) {
                  for (r = ++i; r < s; r++)
                     if (t.relative[n[r].type]) break;
                  return ni(i > 1 && gt(e), i > 1 && st(n.slice(0, i - 1).concat({
                     value: " " === n[i - 2].type ? "*" : ""
                  })).replace(pt, "$1"), u, i < r && ti(n.slice(i, r)), r < s && ti(n = n.slice(r)), r < s && st(n))
               }
               e.push(u)
            } return gt(e)
      }

      function tr(n, r) {
         var f = r.length > 0,
            e = n.length > 0,
            o = function (o, s, c, l, a) {
               var y, nt, d, g = 0,
                  p = "0",
                  tt = o && [],
                  w = [],
                  it = at,
                  rt = o || e && t.find.TAG("*", a),
                  ut = v += null == it ? 1 : Math.random() || .1,
                  ft = rt.length;
               for (a && (at = s === i || s || a); p !== ft && null != (y = rt[p]); p++) {
                  if (e && y) {
                     for (nt = 0, s || y.ownerDocument === i || (b(y), c = !h); d = n[nt++];)
                        if (d(y, s || i, c)) {
                           l.push(y);
                           break
                        } a && (v = ut)
                  }
                  f && ((y = !d && y) && g--, o && tt.push(y))
               }
               if (g += p, f && p !== g) {
                  for (nt = 0; d = r[nt++];) d(tt, w, s, c);
                  if (o) {
                     if (g > 0)
                        while (p--) tt[p] || w[p] || (w[p] = ur.call(l));
                     w = ct(w)
                  }
                  k.apply(l, w);
                  a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
               }
               return a && (v = ut, at = it), tt
            };
         return f ? l(o) : o
      }
      var rt, e, t, lt, ci, ft, ii, li, at, w, ut, b, i, s, h, o, g, vt, et, f = "sizzle" + 1 * new Date,
         c = n.document,
         v = 0,
         ir = 0,
         ai = bt(),
         vi = bt(),
         yt = bt(),
         ri = function (n, t) {
            return n === t && (ut = !0), 0
         },
         rr = {}.hasOwnProperty,
         nt = [],
         ur = nt.pop,
         fr = nt.push,
         k = nt.push,
         yi = nt.slice,
         tt = function (n, t) {
            for (var i = 0, r = n.length; i < r; i++)
               if (n[i] === t) return i;
            return -1
         },
         ui = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
         r = "[\\x20\\t\\r\\n\\f]",
         it = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
         pi = "\\[" + r + "*(" + it + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + r + "*\\]",
         fi = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + pi + ")*)|.*)\\)|)",
         er = new RegExp(r + "+", "g"),
         pt = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
         or = new RegExp("^" + r + "*," + r + "*"),
         sr = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
         hr = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
         cr = new RegExp(fi),
         lr = new RegExp("^" + it + "$"),
         wt = {
            ID: new RegExp("^#(" + it + ")"),
            CLASS: new RegExp("^\\.(" + it + ")"),
            TAG: new RegExp("^(" + it + "|[*])"),
            ATTR: new RegExp("^" + pi),
            PSEUDO: new RegExp("^" + fi),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + ui + ")$", "i"),
            needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
         },
         ar = /^(?:input|select|textarea|button)$/i,
         vr = /^h\d$/i,
         ot = /^[^{]+\{\s*\[native \w/,
         yr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
         ei = /[+~]/,
         y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
         p = function (n, t, i) {
            var r = "0x" + t - 65536;
            return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
         },
         wi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
         bi = function (n, t) {
            return t ? "\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
         },
         ki = function () {
            b()
         },
         pr = ht(function (n) {
            return !0 === n.disabled && ("form" in n || "label" in n)
         }, {
            dir: "parentNode",
            next: "legend"
         });
      try {
         k.apply(nt = yi.call(c.childNodes), c.childNodes);
         nt[c.childNodes.length].nodeType
      } catch (n) {
         k = {
            apply: nt.length ? function (n, t) {
               fr.apply(n, yi.call(t))
            } : function (n, t) {
               for (var i = n.length, r = 0; n[i++] = t[r++];);
               n.length = i - 1
            }
         }
      }
      e = u.support = {};
      ci = u.isXML = function (n) {
         var t = n && (n.ownerDocument || n).documentElement;
         return !!t && "HTML" !== t.nodeName
      };
      b = u.setDocument = function (n) {
         var v, u, l = n ? n.ownerDocument || n : c;
         return l !== i && 9 === l.nodeType && l.documentElement ? (i = l, s = i.documentElement, h = !ci(i), c !== i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", ki, !1) : u.attachEvent && u.attachEvent("onunload", ki)), e.attributes = a(function (n) {
            return n.className = "i", !n.getAttribute("className")
         }), e.getElementsByTagName = a(function (n) {
            return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
         }), e.getElementsByClassName = ot.test(i.getElementsByClassName), e.getById = a(function (n) {
            return s.appendChild(n).id = f, !i.getElementsByName || !i.getElementsByName(f).length
         }), e.getById ? (t.filter.ID = function (n) {
            var t = n.replace(y, p);
            return function (n) {
               return n.getAttribute("id") === t
            }
         }, t.find.ID = function (n, t) {
            if ("undefined" != typeof t.getElementById && h) {
               var i = t.getElementById(n);
               return i ? [i] : []
            }
         }) : (t.filter.ID = function (n) {
            var t = n.replace(y, p);
            return function (n) {
               var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
               return i && i.value === t
            }
         }, t.find.ID = function (n, t) {
            if ("undefined" != typeof t.getElementById && h) {
               var r, u, f, i = t.getElementById(n);
               if (i) {
                  if ((r = i.getAttributeNode("id")) && r.value === n) return [i];
                  for (f = t.getElementsByName(n), u = 0; i = f[u++];)
                     if ((r = i.getAttributeNode("id")) && r.value === n) return [i]
               }
               return []
            }
         }), t.find.TAG = e.getElementsByTagName ? function (n, t) {
            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0
         } : function (n, t) {
            var i, r = [],
               f = 0,
               u = t.getElementsByTagName(n);
            if ("*" === n) {
               while (i = u[f++]) 1 === i.nodeType && r.push(i);
               return r
            }
            return u
         }, t.find.CLASS = e.getElementsByClassName && function (n, t) {
            if ("undefined" != typeof t.getElementsByClassName && h) return t.getElementsByClassName(n)
         }, g = [], o = [], (e.qsa = ot.test(i.querySelectorAll)) && (a(function (n) {
            s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
            n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
            n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + ui + ")");
            n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
            n.querySelectorAll(":checked").length || o.push(":checked");
            n.querySelectorAll("a#" + f + "+*").length || o.push(".#.+[+~]")
         }), a(function (n) {
            n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
            var t = i.createElement("input");
            t.setAttribute("type", "hidden");
            n.appendChild(t).setAttribute("name", "D");
            n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
            2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
            s.appendChild(n).disabled = !0;
            2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
            n.querySelectorAll("*,:x");
            o.push(",.*:")
         })), (e.matchesSelector = ot.test(vt = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function (n) {
            e.disconnectedMatch = vt.call(n, "*");
            vt.call(n, "[s!='']:x");
            g.push("!=", fi)
         }), o = o.length && new RegExp(o.join("|")), g = g.length && new RegExp(g.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function (n, t) {
            var r = 9 === n.nodeType ? n.documentElement : n,
               i = t && t.parentNode;
            return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
         } : function (n, t) {
            if (t)
               while (t = t.parentNode)
                  if (t === n) return !0;
            return !1
         }, ri = v ? function (n, t) {
            if (n === t) return ut = !0, 0;
            var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
            return r || (1 & (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? tt(w, n) - tt(w, t) : 0 : 4 & r ? -1 : 1)
         } : function (n, t) {
            if (n === t) return ut = !0, 0;
            var r, u = 0,
               o = n.parentNode,
               s = t.parentNode,
               f = [n],
               e = [t];
            if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? tt(w, n) - tt(w, t) : 0;
            if (o === s) return oi(n, t);
            for (r = n; r = r.parentNode;) f.unshift(r);
            for (r = t; r = r.parentNode;) e.unshift(r);
            while (f[u] === e[u]) u++;
            return u ? oi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
         }, i) : i
      };
      u.matches = function (n, t) {
         return u(n, null, null, t)
      };
      u.matchesSelector = function (n, t) {
         if ((n.ownerDocument || n) !== i && b(n), t = t.replace(hr, "='$1']"), e.matchesSelector && h && !yt[t + " "] && (!g || !g.test(t)) && (!o || !o.test(t))) try {
            var r = vt.call(n, t);
            if (r || e.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r
         } catch (n) {}
         return u(t, i, null, [n]).length > 0
      };
      u.contains = function (n, t) {
         return (n.ownerDocument || n) !== i && b(n), et(n, t)
      };
      u.attr = function (n, r) {
         (n.ownerDocument || n) !== i && b(n);
         var f = t.attrHandle[r.toLowerCase()],
            u = f && rr.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : void 0;
         return void 0 !== u ? u : e.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
      };
      u.escape = function (n) {
         return (n + "").replace(wi, bi)
      };
      u.error = function (n) {
         throw new Error("Syntax error, unrecognized expression: " + n);
      };
      u.uniqueSort = function (n) {
         var r, u = [],
            t = 0,
            i = 0;
         if (ut = !e.detectDuplicates, w = !e.sortStable && n.slice(0), n.sort(ri), ut) {
            while (r = n[i++]) r === n[i] && (t = u.push(i));
            while (t--) n.splice(u[t], 1)
         }
         return w = null, n
      };
      lt = u.getText = function (n) {
         var r, i = "",
            u = 0,
            t = n.nodeType;
         if (t) {
            if (1 === t || 9 === t || 11 === t) {
               if ("string" == typeof n.textContent) return n.textContent;
               for (n = n.firstChild; n; n = n.nextSibling) i += lt(n)
            } else if (3 === t || 4 === t) return n.nodeValue
         } else
            while (r = n[u++]) i += lt(r);
         return i
      };
      (t = u.selectors = {
         cacheLength: 50,
         createPseudo: l,
         match: wt,
         attrHandle: {},
         find: {},
         relative: {
            ">": {
               dir: "parentNode",
               first: !0
            },
            " ": {
               dir: "parentNode"
            },
            "+": {
               dir: "previousSibling",
               first: !0
            },
            "~": {
               dir: "previousSibling"
            }
         },
         preFilter: {
            ATTR: function (n) {
               return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
            },
            CHILD: function (n) {
               return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
            },
            PSEUDO: function (n) {
               var i, t = !n[6] && n[2];
               return wt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && cr.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
            }
         },
         filter: {
            TAG: function (n) {
               var t = n.replace(y, p).toLowerCase();
               return "*" === n ? function () {
                  return !0
               } : function (n) {
                  return n.nodeName && n.nodeName.toLowerCase() === t
               }
            },
            CLASS: function (n) {
               var t = ai[n + " "];
               return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && ai(n, function (n) {
                  return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
               })
            },
            ATTR: function (n, t, i) {
               return function (r) {
                  var f = u.attr(r, n);
                  return null == f ? "!=" === t : !t || (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f.replace(er, " ") + " ").indexOf(i) > -1 : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"))
               }
            },
            CHILD: function (n, t, i, r, u) {
               var s = "nth" !== n.slice(0, 3),
                  o = "last" !== n.slice(-4),
                  e = "of-type" === t;
               return 1 === r && 0 === u ? function (n) {
                  return !!n.parentNode
               } : function (t, i, h) {
                  var p, d, y, c, a, w, b = s !== o ? "nextSibling" : "previousSibling",
                     k = t.parentNode,
                     nt = e && t.nodeName.toLowerCase(),
                     g = !h && !e,
                     l = !1;
                  if (k) {
                     if (s) {
                        while (b) {
                           for (c = t; c = c[b];)
                              if (e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
                           w = b = "only" === n && !w && "nextSibling"
                        }
                        return !0
                     }
                     if (w = [o ? k.firstChild : k.lastChild], o && g) {
                        for (l = (a = (p = (d = (y = (c = k)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]) && p[2], c = a && k.childNodes[a]; c = ++a && c && c[b] || (l = a = 0) || w.pop();)
                           if (1 === c.nodeType && ++l && c === t) {
                              d[n] = [v, a, l];
                              break
                           }
                     } else if (g && (l = a = (p = (d = (y = (c = t)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]), !1 === l)
                        while (c = ++a && c && c[b] || (l = a = 0) || w.pop())
                           if ((e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && ((d = (y = c[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] = [v, l]), c === t)) break;
                     return (l -= u) === r || l % r == 0 && l / r >= 0
                  }
               }
            },
            PSEUDO: function (n, i) {
               var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
               return r[f] ? r(i) : r.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function (n, t) {
                  for (var e, u = r(n, i), f = u.length; f--;) n[e = tt(n, u[f])] = !(t[e] = u[f])
               }) : function (n) {
                  return r(n, 0, e)
               }) : r
            }
         },
         pseudos: {
            not: l(function (n) {
               var t = [],
                  r = [],
                  i = ii(n.replace(pt, "$1"));
               return i[f] ? l(function (n, t, r, u) {
                  for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
               }) : function (n, u, f) {
                  return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
               }
            }),
            has: l(function (n) {
               return function (t) {
                  return u(n, t).length > 0
               }
            }),
            contains: l(function (n) {
               return n = n.replace(y, p),
                  function (t) {
                     return (t.textContent || t.innerText || lt(t)).indexOf(n) > -1
                  }
            }),
            lang: l(function (n) {
               return lr.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                  function (t) {
                     var i;
                     do
                        if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                     return !1
                  }
            }),
            target: function (t) {
               var i = n.location && n.location.hash;
               return i && i.slice(1) === t.id
            },
            root: function (n) {
               return n === s
            },
            focus: function (n) {
               return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
            },
            enabled: si(!1),
            disabled: si(!0),
            checked: function (n) {
               var t = n.nodeName.toLowerCase();
               return "input" === t && !!n.checked || "option" === t && !!n.selected
            },
            selected: function (n) {
               return n.parentNode && n.parentNode.selectedIndex, !0 === n.selected
            },
            empty: function (n) {
               for (n = n.firstChild; n; n = n.nextSibling)
                  if (n.nodeType < 6) return !1;
               return !0
            },
            parent: function (n) {
               return !t.pseudos.empty(n)
            },
            header: function (n) {
               return vr.test(n.nodeName)
            },
            input: function (n) {
               return ar.test(n.nodeName)
            },
            button: function (n) {
               var t = n.nodeName.toLowerCase();
               return "input" === t && "button" === n.type || "button" === t
            },
            text: function (n) {
               var t;
               return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
            },
            first: d(function () {
               return [0]
            }),
            last: d(function (n, t) {
               return [t - 1]
            }),
            eq: d(function (n, t, i) {
               return [i < 0 ? i + t : i]
            }),
            even: d(function (n, t) {
               for (var i = 0; i < t; i += 2) n.push(i);
               return n
            }),
            odd: d(function (n, t) {
               for (var i = 1; i < t; i += 2) n.push(i);
               return n
            }),
            lt: d(function (n, t, i) {
               for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
               return n
            }),
            gt: d(function (n, t, i) {
               for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
               return n
            })
         }
      }).pseudos.nth = t.pseudos.eq;
      for (rt in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
         }) t.pseudos[rt] = di(rt);
      for (rt in {
            submit: !0,
            reset: !0
         }) t.pseudos[rt] = gi(rt);
      return hi.prototype = t.filters = t.pseudos, t.setFilters = new hi, ft = u.tokenize = function (n, i) {
         var e, f, s, o, r, h, c, l = vi[n + " "];
         if (l) return i ? 0 : l.slice(0);
         for (r = n, h = [], c = t.preFilter; r;) {
            (!e || (f = or.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
            e = !1;
            (f = sr.exec(r)) && (e = f.shift(), s.push({
               value: e,
               type: f[0].replace(pt, " ")
            }), r = r.slice(e.length));
            for (o in t.filter)(f = wt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
               value: e,
               type: o,
               matches: f
            }), r = r.slice(e.length));
            if (!e) break
         }
         return i ? r.length : r ? u.error(n) : vi(n, h).slice(0)
      }, ii = u.compile = function (n, t) {
         var r, u = [],
            e = [],
            i = yt[n + " "];
         if (!i) {
            for (t || (t = ft(n)), r = t.length; r--;)(i = ti(t[r]))[f] ? u.push(i) : e.push(i);
            (i = yt(n, tr(e, u))).selector = n
         }
         return i
      }, li = u.select = function (n, i, r, u) {
         var o, f, e, l, a, c = "function" == typeof n && n,
            s = !u && ft(n = c.selector || n);
         if (r = r || [], 1 === s.length) {
            if ((f = s[0] = s[0].slice(0)).length > 2 && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
               if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0])) return r;
               c && (i = i.parentNode);
               n = n.slice(f.shift().value.length)
            }
            for (o = wt.needsContext.test(n) ? 0 : f.length; o--;) {
               if (e = f[o], t.relative[l = e.type]) break;
               if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ei.test(f[0].type) && dt(i.parentNode) || i))) {
                  if (f.splice(o, 1), !(n = u.length && st(f))) return k.apply(r, u), r;
                  break
               }
            }
         }
         return (c || ii(n, s))(u, i, !h, r, !i || ei.test(n) && dt(i.parentNode) || i), r
      }, e.sortStable = f.split("").sort(ri).join("") === f, e.detectDuplicates = !!ut, b(), e.sortDetached = a(function (n) {
         return 1 & n.compareDocumentPosition(i.createElement("fieldset"))
      }), a(function (n) {
         return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
      }) || kt("type|href|height|width", function (n, t, i) {
         if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), e.attributes && a(function (n) {
         return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
      }) || kt("value", function (n, t, i) {
         if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
      }), a(function (n) {
         return null == n.getAttribute("disabled")
      }) || kt(ui, function (n, t, i) {
         var r;
         if (!i) return !0 === n[t] ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
      }), u
   }(n);
   i.find = b;
   i.expr = b.selectors;
   i.expr[":"] = i.expr.pseudos;
   i.uniqueSort = i.unique = b.uniqueSort;
   i.text = b.getText;
   i.isXMLDoc = b.isXML;
   i.contains = b.contains;
   i.escapeSelector = b.escape;
   var ct = function (n, t, r) {
         for (var u = [], f = void 0 !== r;
            (n = n[t]) && 9 !== n.nodeType;)
            if (1 === n.nodeType) {
               if (f && i(n).is(r)) break;
               u.push(n)
            } return u
      },
      nf = function (n, t) {
         for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
         return i
      },
      tf = i.expr.match.needsContext;
   ki = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
   i.filter = function (n, t, r) {
      var u = t[0];
      return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function (n) {
         return 1 === n.nodeType
      }))
   };
   i.fn.extend({
      find: function (n) {
         var t, r, u = this.length,
            f = this;
         if ("string" != typeof n) return this.pushStack(i(n).filter(function () {
            for (t = 0; t < u; t++)
               if (i.contains(f[t], this)) return !0
         }));
         for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
         return u > 1 ? i.uniqueSort(r) : r
      },
      filter: function (n) {
         return this.pushStack(hi(this, n || [], !1))
      },
      not: function (n) {
         return this.pushStack(hi(this, n || [], !0))
      },
      is: function (n) {
         return !!hi(this, "string" == typeof n && tf.test(n) ? i(n) : n || [], !1).length
      }
   });
   ou = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
   (i.fn.init = function (n, t, r) {
      var e, o;
      if (!n) return this;
      if (r = r || eu, "string" == typeof n) {
         if (!(e = "<" === n[0] && ">" === n[n.length - 1] && n.length >= 3 ? [null, n, null] : ou.exec(n)) || !e[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
         if (e[1]) {
            if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)), ki.test(e[1]) && i.isPlainObject(t))
               for (e in t) u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
            return this
         }
         return (o = f.getElementById(e[2])) && (this[0] = o, this.length = 1), this
      }
      return n.nodeType ? (this[0] = n, this.length = 1, this) : u(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
   }).prototype = i.fn;
   eu = i(f);
   su = /^(?:parents|prev(?:Until|All))/;
   hu = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
   };
   i.fn.extend({
      has: function (n) {
         var t = i(n, this),
            r = t.length;
         return this.filter(function () {
            for (var n = 0; n < r; n++)
               if (i.contains(this, t[n])) return !0
         })
      },
      closest: function (n, t) {
         var r, f = 0,
            o = this.length,
            u = [],
            e = "string" != typeof n && i(n);
         if (!tf.test(n))
            for (; f < o; f++)
               for (r = this[f]; r && r !== t; r = r.parentNode)
                  if (r.nodeType < 11 && (e ? e.index(r) > -1 : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                     u.push(r);
                     break
                  } return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
      },
      index: function (n) {
         return n ? "string" == typeof n ? gt.call(i(n), this[0]) : gt.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function (n, t) {
         return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
      },
      addBack: function (n) {
         return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
      }
   });
   i.each({
      parent: function (n) {
         var t = n.parentNode;
         return t && 11 !== t.nodeType ? t : null
      },
      parents: function (n) {
         return ct(n, "parentNode")
      },
      parentsUntil: function (n, t, i) {
         return ct(n, "parentNode", i)
      },
      next: function (n) {
         return or(n, "nextSibling")
      },
      prev: function (n) {
         return or(n, "previousSibling")
      },
      nextAll: function (n) {
         return ct(n, "nextSibling")
      },
      prevAll: function (n) {
         return ct(n, "previousSibling")
      },
      nextUntil: function (n, t, i) {
         return ct(n, "nextSibling", i)
      },
      prevUntil: function (n, t, i) {
         return ct(n, "previousSibling", i)
      },
      siblings: function (n) {
         return nf((n.parentNode || {}).firstChild, n)
      },
      children: function (n) {
         return nf(n.firstChild)
      },
      contents: function (n) {
         return v(n, "iframe") ? n.contentDocument : (v(n, "template") && (n = n.content || n), i.merge([], n.childNodes))
      }
   }, function (n, t) {
      i.fn[n] = function (r, u) {
         var f = i.map(this, t, r);
         return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), this.length > 1 && (hu[n] || i.uniqueSort(f), su.test(n) && f.reverse()), this.pushStack(f)
      }
   });
   a = /[^\x20\t\r\n\f]+/g;
   i.Callbacks = function (n) {
      n = "string" == typeof n ? kf(n) : i.extend({}, n);
      var f, r, c, e, t = [],
         s = [],
         o = -1,
         l = function () {
            for (e = e || n.once, c = f = !0; s.length; o = -1)
               for (r = s.shift(); ++o < t.length;) !1 === t[o].apply(r[0], r[1]) && n.stopOnFalse && (o = t.length, r = !1);
            n.memory || (r = !1);
            f = !1;
            e && (t = r ? [] : "")
         },
         h = {
            add: function () {
               return t && (r && !f && (o = t.length - 1, s.push(r)), function f(r) {
                  i.each(r, function (i, r) {
                     u(r) ? n.unique && h.has(r) || t.push(r) : r && r.length && "string" !== tt(r) && f(r)
                  })
               }(arguments), r && !f && l()), this
            },
            remove: function () {
               return i.each(arguments, function (n, r) {
                  for (var u;
                     (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), u <= o && o--
               }), this
            },
            has: function (n) {
               return n ? i.inArray(n, t) > -1 : t.length > 0
            },
            empty: function () {
               return t && (t = []), this
            },
            disable: function () {
               return e = s = [], t = r = "", this
            },
            disabled: function () {
               return !t
            },
            lock: function () {
               return e = s = [], r || f || (t = r = ""), this
            },
            locked: function () {
               return !!e
            },
            fireWith: function (n, t) {
               return e || (t = [n, (t = t || []).slice ? t.slice() : t], s.push(t), f || l()), this
            },
            fire: function () {
               return h.fireWith(this, arguments), this
            },
            fired: function () {
               return !!c
            }
         };
      return h
   };
   i.extend({
      Deferred: function (t) {
         var f = [
               ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
               ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
               ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
            ],
            o = "pending",
            e = {
               state: function () {
                  return o
               },
               always: function () {
                  return r.done(arguments).fail(arguments), this
               },
               "catch": function (n) {
                  return e.then(null, n)
               },
               pipe: function () {
                  var n = arguments;
                  return i.Deferred(function (t) {
                     i.each(f, function (i, f) {
                        var e = u(n[f[4]]) && n[f[4]];
                        r[f[1]](function () {
                           var n = e && e.apply(this, arguments);
                           n && u(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                        })
                     });
                     n = null
                  }).promise()
               },
               then: function (t, r, e) {
                  function o(t, r, f, e) {
                     return function () {
                        var h = this,
                           c = arguments,
                           a = function () {
                              var n, i;
                              if (!(t < s)) {
                                 if ((n = f.apply(h, c)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                 i = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                 u(i) ? e ? i.call(n, o(s, r, it, e), o(s, r, wt, e)) : (s++, i.call(n, o(s, r, it, e), o(s, r, wt, e), o(s, r, it, r.notifyWith))) : (f !== it && (h = void 0, c = [n]), (e || r.resolveWith)(h, c))
                              }
                           },
                           l = e ? a : function () {
                              try {
                                 a()
                              } catch (n) {
                                 i.Deferred.exceptionHook && i.Deferred.exceptionHook(n, l.stackTrace);
                                 t + 1 >= s && (f !== wt && (h = void 0, c = [n]), r.rejectWith(h, c))
                              }
                           };
                        t ? l() : (i.Deferred.getStackHook && (l.stackTrace = i.Deferred.getStackHook()), n.setTimeout(l))
                     }
                  }
                  var s = 0;
                  return i.Deferred(function (n) {
                     f[0][3].add(o(0, n, u(e) ? e : it, n.notifyWith));
                     f[1][3].add(o(0, n, u(t) ? t : it));
                     f[2][3].add(o(0, n, u(r) ? r : wt))
                  }).promise()
               },
               promise: function (n) {
                  return null != n ? i.extend(n, e) : e
               }
            },
            r = {};
         return i.each(f, function (n, t) {
            var i = t[2],
               u = t[5];
            e[t[1]] = i.add;
            u && i.add(function () {
               o = u
            }, f[3 - n][2].disable, f[3 - n][3].disable, f[0][2].lock, f[0][3].lock);
            i.add(t[3].fire);
            r[t[0]] = function () {
               return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
            };
            r[t[0] + "With"] = i.fireWith
         }), e.promise(r), t && t.call(r, r), r
      },
      when: function (n) {
         var e = arguments.length,
            t = e,
            o = Array(t),
            f = nt.call(arguments),
            r = i.Deferred(),
            s = function (n) {
               return function (t) {
                  o[n] = this;
                  f[n] = arguments.length > 1 ? nt.call(arguments) : t;
                  --e || r.resolveWith(o, f)
               }
            };
         if (e <= 1 && (sr(n, r.done(s(t)).resolve, r.reject, !e), "pending" === r.state() || u(f[t] && f[t].then))) return r.then();
         while (t--) sr(f[t], s(t), r.reject);
         return r.promise()
      }
   });
   cu = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
   i.Deferred.exceptionHook = function (t, i) {
      n.console && n.console.warn && t && cu.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
   };
   i.readyException = function (t) {
      n.setTimeout(function () {
         throw t;
      })
   };
   ii = i.Deferred();
   i.fn.ready = function (n) {
      return ii.then(n)["catch"](function (n) {
         i.readyException(n)
      }), this
   };
   i.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (n) {
         (!0 === n ? --i.readyWait : i.isReady) || (i.isReady = !0, !0 !== n && --i.readyWait > 0 || ii.resolveWith(f, [i]))
      }
   });
   i.ready.then = ii.then;
   "complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll ? n.setTimeout(i.ready) : (f.addEventListener("DOMContentLoaded", bt), n.addEventListener("load", bt));
   var p = function (n, t, r, f, e, o, s) {
         var h = 0,
            l = n.length,
            c = null == r;
         if ("object" === tt(r)) {
            e = !0;
            for (h in r) p(n, t, h, r[h], !0, o, s)
         } else if (void 0 !== f && (e = !0, u(f) || (s = !0), c && (s ? (t.call(n, f), t = null) : (c = t, t = function (n, t, r) {
               return c.call(i(n), r)
            })), t))
            for (; h < l; h++) t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
         return e ? n : c ? t.call(n) : l ? t(n[0], r) : o
      },
      ve = /^-ms-/,
      ye = /-([a-z])/g;
   vt = function (n) {
      return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
   };
   lt.uid = 1;
   lt.prototype = {
      cache: function (n) {
         var t = n[this.expando];
         return t || (t = {}, vt(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
            value: t,
            configurable: !0
         }))), t
      },
      set: function (n, t, i) {
         var r, u = this.cache(n);
         if ("string" == typeof t) u[y(t)] = i;
         else
            for (r in t) u[y(r)] = t[r];
         return u
      },
      get: function (n, t) {
         return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][y(t)]
      },
      access: function (n, t, i) {
         return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t)
      },
      remove: function (n, t) {
         var u, r = n[this.expando];
         if (void 0 !== r) {
            if (void 0 !== t)
               for (u = (t = Array.isArray(t) ? t.map(y) : (t = y(t)) in r ? [t] : t.match(a) || []).length; u--;) delete r[t[u]];
            (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
         }
      },
      hasData: function (n) {
         var t = n[this.expando];
         return void 0 !== t && !i.isEmptyObject(t)
      }
   };
   var r = new lt,
      h = new lt,
      pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      we = /[A-Z]/g;
   i.extend({
      hasData: function (n) {
         return h.hasData(n) || r.hasData(n)
      },
      data: function (n, t, i) {
         return h.access(n, t, i)
      },
      removeData: function (n, t) {
         h.remove(n, t)
      },
      _data: function (n, t, i) {
         return r.access(n, t, i)
      },
      _removeData: function (n, t) {
         r.remove(n, t)
      }
   });
   i.fn.extend({
      data: function (n, t) {
         var f, u, e, i = this[0],
            o = i && i.attributes;
         if (void 0 === n) {
            if (this.length && (e = h.get(i), 1 === i.nodeType && !r.get(i, "hasDataAttrs"))) {
               for (f = o.length; f--;) o[f] && 0 === (u = o[f].name).indexOf("data-") && (u = y(u.slice(5)), hr(i, u, e[u]));
               r.set(i, "hasDataAttrs", !0)
            }
            return e
         }
         return "object" == typeof n ? this.each(function () {
            h.set(this, n)
         }) : p(this, function (t) {
            var r;
            if (i && void 0 === t) {
               if (void 0 !== (r = h.get(i, n)) || void 0 !== (r = hr(i, n))) return r
            } else this.each(function () {
               h.set(this, n, t)
            })
         }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function (n) {
         return this.each(function () {
            h.remove(this, n)
         })
      }
   });
   i.extend({
      queue: function (n, t, u) {
         var f;
         if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
      },
      dequeue: function (n, t) {
         t = t || "fx";
         var r = i.queue(n, t),
            e = r.length,
            u = r.shift(),
            f = i._queueHooks(n, t),
            o = function () {
               i.dequeue(n, t)
            };
         "inprogress" === u && (u = r.shift(), e--);
         u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
         !e && f && f.empty.fire()
      },
      _queueHooks: function (n, t) {
         var u = t + "queueHooks";
         return r.get(n, u) || r.access(n, u, {
            empty: i.Callbacks("once memory").add(function () {
               r.remove(n, [t + "queue", u])
            })
         })
      }
   });
   i.fn.extend({
      queue: function (n, t) {
         var r = 2;
         return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function () {
            var r = i.queue(this, n, t);
            i._queueHooks(this, n);
            "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
         })
      },
      dequeue: function (n) {
         return this.each(function () {
            i.dequeue(this, n)
         })
      },
      clearQueue: function (n) {
         return this.queue(n || "fx", [])
      },
      promise: function (n, t) {
         var u, e = 1,
            o = i.Deferred(),
            f = this,
            s = this.length,
            h = function () {
               --e || o.resolveWith(f, [f])
            };
         for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;)(u = r.get(f[s], n + "queueHooks")) && u.empty && (e++, u.empty.add(h));
         return h(), o.promise(t)
      }
   });
   var rf = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      yt = new RegExp("^(?:([+-])=|)(" + rf + ")([a-z%]*)$", "i"),
      w = ["Top", "Right", "Bottom", "Left"],
      fi = function (n, t) {
         return "none" === (n = t || n).style.display || "" === n.style.display && i.contains(n.ownerDocument, n) && "none" === i.css(n, "display")
      },
      uf = function (n, t, i, r) {
         var f, u, e = {};
         for (u in t) e[u] = n.style[u], n.style[u] = t[u];
         f = i.apply(n, r || []);
         for (u in t) n.style[u] = e[u];
         return f
      };
   di = {};
   i.fn.extend({
      show: function () {
         return rt(this, !0)
      },
      hide: function () {
         return rt(this)
      },
      toggle: function (n) {
         return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function () {
            fi(this) ? i(this).show() : i(this).hide()
         })
      }
   });
   var ff = /^(?:checkbox|radio)$/i,
      ef = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      sf = /^$|^module$|\/(?:java|ecma)script/i,
      c = {
         option: [1, "<select multiple='multiple'>", "<\/select>"],
         thead: [1, "<table>", "<\/table>"],
         col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
         tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
         td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
         _default: [0, "", ""]
      };
   c.optgroup = c.option;
   c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
   c.th = c.td;
   lu = /<|&#?\w+;/;
   ! function () {
      var n = f.createDocumentFragment().appendChild(f.createElement("div")),
         t = f.createElement("input");
      t.setAttribute("type", "radio");
      t.setAttribute("checked", "checked");
      t.setAttribute("name", "t");
      n.appendChild(t);
      e.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
      n.innerHTML = "<textarea>x<\/textarea>";
      e.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
   }();
   var ei = f.documentElement,
      be = /^key/,
      ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      hf = /^([^.]*)(?:\.(.+)|)/;
   i.event = {
      global: {},
      add: function (n, t, u, f, e) {
         var p, v, k, y, w, h, s, c, o, b, d, l = r.get(n);
         if (l)
            for (u.handler && (u = (p = u).handler, e = p.selector), e && i.find.matchesSelector(ei, e), u.guid || (u.guid = i.guid++), (y = l.events) || (y = l.events = {}), (v = l.handle) || (v = l.handle = function (t) {
                  if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments)
               }), w = (t = (t || "").match(a) || [""]).length; w--;) o = d = (k = hf.exec(t[w]) || [])[1], b = (k[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({
               type: o,
               origType: d,
               data: f,
               handler: u,
               guid: u.guid,
               selector: e,
               needsContext: e && i.expr.match.needsContext.test(e),
               namespace: b.join(".")
            }, p), (c = y[o]) || ((c = y[o] = []).delegateCount = 0, s.setup && !1 !== s.setup.call(n, f, b, v) || n.addEventListener && n.addEventListener(o, v)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, h) : c.push(h), i.event.global[o] = !0)
      },
      remove: function (n, t, u, f, e) {
         var y, k, h, v, p, s, c, l, o, b, d, w = r.hasData(n) && r.get(n);
         if (w && (v = w.events)) {
            for (p = (t = (t || "").match(a) || [""]).length; p--;)
               if (h = hf.exec(t[p]) || [], o = d = h[1], b = (h[2] || "").split(".").sort(), o) {
                  for (c = i.event.special[o] || {}, l = v[o = (f ? c.delegateType : c.bindType) || o] || [], h = h[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = l.length; y--;) s = l[y], !e && d !== s.origType || u && u.guid !== s.guid || h && !h.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (l.splice(y, 1), s.selector && l.delegateCount--, c.remove && c.remove.call(n, s));
                  k && !l.length && (c.teardown && !1 !== c.teardown.call(n, b, w.handle) || i.removeEvent(n, o, w.handle), delete v[o])
               } else
                  for (o in v) i.event.remove(n, o + t[p], u, f, !0);
            i.isEmptyObject(v) && r.remove(n, "handle events")
         }
      },
      dispatch: function (n) {
         var t = i.event.fix(n),
            u, h, c, e, f, l, s = new Array(arguments.length),
            a = (r.get(this, "events") || {})[t.type] || [],
            o = i.event.special[t.type] || {};
         for (s[0] = t, u = 1; u < arguments.length; u++) s[u] = arguments[u];
         if (t.delegateTarget = this, !o.preDispatch || !1 !== o.preDispatch.call(this, t)) {
            for (l = i.event.handlers.call(this, t, a), u = 0;
               (e = l[u++]) && !t.isPropagationStopped();)
               for (t.currentTarget = e.elem, h = 0;
                  (f = e.handlers[h++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f, t.data = f.data, void 0 !== (c = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, s)) && !1 === (t.result = c) && (t.preventDefault(), t.stopPropagation()));
            return o.postDispatch && o.postDispatch.call(this, t), t.result
         }
      },
      handlers: function (n, t) {
         var f, h, u, e, o, c = [],
            s = t.delegateCount,
            r = n.target;
         if (s && r.nodeType && !("click" === n.type && n.button >= 1))
            for (; r !== this; r = r.parentNode || this)
               if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
                  for (e = [], o = {}, f = 0; f < s; f++) void 0 === o[u = (h = t[f]).selector + " "] && (o[u] = h.needsContext ? i(u, this).index(r) > -1 : i.find(u, this, null, [r]).length), o[u] && e.push(h);
                  e.length && c.push({
                     elem: r,
                     handlers: e
                  })
               } return r = this, s < t.length && c.push({
            elem: r,
            handlers: t.slice(s)
         }), c
      },
      addProp: function (n, t) {
         Object.defineProperty(i.Event.prototype, n, {
            enumerable: !0,
            configurable: !0,
            get: u(t) ? function () {
               if (this.originalEvent) return t(this.originalEvent)
            } : function () {
               if (this.originalEvent) return this.originalEvent[n]
            },
            set: function (t) {
               Object.defineProperty(this, n, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t
               })
            }
         })
      },
      fix: function (n) {
         return n[i.expando] ? n : new i.Event(n)
      },
      special: {
         load: {
            noBubble: !0
         },
         focus: {
            trigger: function () {
               if (this !== ar() && this.focus) return this.focus(), !1
            },
            delegateType: "focusin"
         },
         blur: {
            trigger: function () {
               if (this === ar() && this.blur) return this.blur(), !1
            },
            delegateType: "focusout"
         },
         click: {
            trigger: function () {
               if ("checkbox" === this.type && this.click && v(this, "input")) return this.click(), !1
            },
            _default: function (n) {
               return v(n.target, "a")
            }
         },
         beforeunload: {
            postDispatch: function (n) {
               void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
            }
         }
      }
   };
   i.removeEvent = function (n, t, i) {
      n.removeEventListener && n.removeEventListener(t, i)
   };
   i.Event = function (n, t) {
      if (!(this instanceof i.Event)) return new i.Event(n, t);
      n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && !1 === n.returnValue ? kt : ut, this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n;
      t && i.extend(this, t);
      this.timeStamp = n && n.timeStamp || Date.now();
      this[i.expando] = !0
   };
   i.Event.prototype = {
      constructor: i.Event,
      isDefaultPrevented: ut,
      isPropagationStopped: ut,
      isImmediatePropagationStopped: ut,
      isSimulated: !1,
      preventDefault: function () {
         var n = this.originalEvent;
         this.isDefaultPrevented = kt;
         n && !this.isSimulated && n.preventDefault()
      },
      stopPropagation: function () {
         var n = this.originalEvent;
         this.isPropagationStopped = kt;
         n && !this.isSimulated && n.stopPropagation()
      },
      stopImmediatePropagation: function () {
         var n = this.originalEvent;
         this.isImmediatePropagationStopped = kt;
         n && !this.isSimulated && n.stopImmediatePropagation();
         this.stopPropagation()
      }
   };
   i.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function (n) {
         var t = n.button;
         return null == n.which && be.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && ke.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which
      }
   }, i.event.addProp);
   i.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
   }, function (n, t) {
      i.event.special[n] = {
         delegateType: t,
         bindType: t,
         handle: function (n) {
            var u, f = this,
               r = n.relatedTarget,
               e = n.handleObj;
            return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
         }
      }
   });
   i.fn.extend({
      on: function (n, t, i, r) {
         return li(this, n, t, i, r)
      },
      one: function (n, t, i, r) {
         return li(this, n, t, i, r, 1)
      },
      off: function (n, t, r) {
         var u, f;
         if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
         if ("object" == typeof n) {
            for (f in n) this.off(f, t, n[f]);
            return this
         }
         return !1 !== t && "function" != typeof t || (r = t, t = void 0), !1 === r && (r = ut), this.each(function () {
            i.event.remove(this, n, r, t)
         })
      }
   });
   var de = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      ge = /<script|<style|<link/i,
      no = /checked\s*(?:[^=]|=\s*.checked.)/i,
      to = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
   i.extend({
      htmlPrefilter: function (n) {
         return n.replace(de, "<$1><\/$2>")
      },
      clone: function (n, t, r) {
         var u, c, s, f, h = n.cloneNode(!0),
            l = i.contains(n.ownerDocument, n);
         if (!(e.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
            for (f = o(h), u = 0, c = (s = o(n)).length; u < c; u++) re(s[u], f[u]);
         if (t)
            if (r)
               for (s = s || o(n), f = f || o(h), u = 0, c = s.length; u < c; u++) yr(s[u], f[u]);
            else yr(n, h);
         return (f = o(h, "script")).length > 0 && ci(f, !l && o(n, "script")), h
      },
      cleanData: function (n) {
         for (var u, t, f, o = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
            if (vt(t)) {
               if (u = t[r.expando]) {
                  if (u.events)
                     for (f in u.events) o[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                  t[r.expando] = void 0
               }
               t[h.expando] && (t[h.expando] = void 0)
            }
      }
   });
   i.fn.extend({
      detach: function (n) {
         return pr(this, n, !0)
      },
      remove: function (n) {
         return pr(this, n)
      },
      text: function (n) {
         return p(this, function (n) {
            return void 0 === n ? i.text(this) : this.empty().each(function () {
               1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
            })
         }, null, n, arguments.length)
      },
      append: function () {
         return ft(this, arguments, function (n) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || vr(this, n).appendChild(n)
         })
      },
      prepend: function () {
         return ft(this, arguments, function (n) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
               var t = vr(this, n);
               t.insertBefore(n, t.firstChild)
            }
         })
      },
      before: function () {
         return ft(this, arguments, function (n) {
            this.parentNode && this.parentNode.insertBefore(n, this)
         })
      },
      after: function () {
         return ft(this, arguments, function (n) {
            this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
         })
      },
      empty: function () {
         for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(o(n, !1)), n.textContent = "");
         return this
      },
      clone: function (n, t) {
         return n = null != n && n, t = null == t ? n : t, this.map(function () {
            return i.clone(this, n, t)
         })
      },
      html: function (n) {
         return p(this, function (n) {
            var t = this[0] || {},
               r = 0,
               u = this.length;
            if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof n && !ge.test(n) && !c[(ef.exec(n) || ["", ""])[1].toLowerCase()]) {
               n = i.htmlPrefilter(n);
               try {
                  for (; r < u; r++) 1 === (t = this[r] || {}).nodeType && (i.cleanData(o(t, !1)), t.innerHTML = n);
                  t = 0
               } catch (n) {}
            }
            t && this.empty().append(n)
         }, null, n, arguments.length)
      },
      replaceWith: function () {
         var n = [];
         return ft(this, arguments, function (t) {
            var r = this.parentNode;
            i.inArray(this, n) < 0 && (i.cleanData(o(this)), r && r.replaceChild(t, this))
         }, n)
      }
   });
   i.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
   }, function (n, t) {
      i.fn[n] = function (n) {
         for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), bi.apply(f, u.get());
         return this.pushStack(f)
      }
   });
   var ir = new RegExp("^(" + rf + ")(?!px)[a-z%]+$", "i"),
      oi = function (t) {
         var i = t.ownerDocument.defaultView;
         return i && i.opener || (i = n), i.getComputedStyle(t)
      },
      io = new RegExp(w.join("|"), "i");
   ! function () {
      function r() {
         if (t) {
            o.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            ei.appendChild(o).appendChild(t);
            var i = n.getComputedStyle(t);
            s = "1%" !== i.top;
            a = 12 === u(i.marginLeft);
            t.style.right = "60%";
            l = 36 === u(i.right);
            h = 36 === u(i.width);
            t.style.position = "absolute";
            c = 36 === t.offsetWidth || "absolute";
            ei.removeChild(o);
            t = null
         }
      }

      function u(n) {
         return Math.round(parseFloat(n))
      }
      var s, h, c, l, a, o = f.createElement("div"),
         t = f.createElement("div");
      t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === t.style.backgroundClip, i.extend(e, {
         boxSizingReliable: function () {
            return r(), h
         },
         pixelBoxStyles: function () {
            return r(), l
         },
         pixelPosition: function () {
            return r(), s
         },
         reliableMarginLeft: function () {
            return r(), a
         },
         scrollboxSize: function () {
            return r(), c
         }
      }))
   }();
   var ro = /^(none|table(?!-c[ea]).+)/,
      cf = /^--/,
      uo = {
         position: "absolute",
         visibility: "hidden",
         display: "block"
      },
      lf = {
         letterSpacing: "0",
         fontWeight: "400"
      },
      af = ["Webkit", "Moz", "ms"],
      vf = f.createElement("div").style;
   i.extend({
      cssHooks: {
         opacity: {
            get: function (n, t) {
               if (t) {
                  var i = at(n, "opacity");
                  return "" === i ? "1" : i
               }
            }
         }
      },
      cssNumber: {
         animationIterationCount: !0,
         columnCount: !0,
         fillOpacity: !0,
         flexGrow: !0,
         flexShrink: !0,
         fontWeight: !0,
         lineHeight: !0,
         opacity: !0,
         order: !0,
         orphans: !0,
         widows: !0,
         zIndex: !0,
         zoom: !0
      },
      cssProps: {},
      style: function (n, t, r, u) {
         if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
            var f, h, o, c = y(t),
               l = cf.test(t),
               s = n.style;
            if (l || (t = br(c)), o = i.cssHooks[t] || i.cssHooks[c], void 0 === r) return o && "get" in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t];
            "string" == (h = typeof r) && (f = yt.exec(r)) && f[1] && (r = cr(n, t, f), h = "number");
            null != r && r === r && ("number" === h && (r += f && f[3] || (i.cssNumber[c] ? "" : "px")), e.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (l ? s.setProperty(t, r) : s[t] = r))
         }
      },
      css: function (n, t, r, u) {
         var f, e, o, s = y(t);
         return cf.test(t) || (t = br(s)), (o = i.cssHooks[t] || i.cssHooks[s]) && "get" in o && (f = o.get(n, !0, r)), void 0 === f && (f = at(n, t, u)), "normal" === f && t in lf && (f = lf[t]), "" === r || r ? (e = parseFloat(f), !0 === r || isFinite(e) ? e || 0 : f) : f
      }
   });
   i.each(["height", "width"], function (n, t) {
      i.cssHooks[t] = {
         get: function (n, r, u) {
            if (r) return !ro.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? dr(n, t, u) : uf(n, uo, function () {
               return dr(n, t, u)
            })
         },
         set: function (n, r, u) {
            var s, f = oi(n),
               h = "border-box" === i.css(n, "boxSizing", !1, f),
               o = u && ai(n, t, u, h, f);
            return h && e.scrollboxSize() === f.position && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(f[t]) - ai(n, t, "border", !1, f) - .5)), o && (s = yt.exec(r)) && "px" !== (s[3] || "px") && (n.style[t] = r, r = i.css(n, t)), kr(n, r, o)
         }
      }
   });
   i.cssHooks.marginLeft = wr(e.reliableMarginLeft, function (n, t) {
      if (t) return (parseFloat(at(n, "marginLeft")) || n.getBoundingClientRect().left - uf(n, {
         marginLeft: 0
      }, function () {
         return n.getBoundingClientRect().left
      })) + "px"
   });
   i.each({
      margin: "",
      padding: "",
      border: "Width"
   }, function (n, t) {
      i.cssHooks[n + t] = {
         expand: function (i) {
            for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
            return f
         }
      };
      "margin" !== n && (i.cssHooks[n + t].set = kr)
   });
   i.fn.extend({
      css: function (n, t) {
         return p(this, function (n, t, r) {
            var f, e, o = {},
               u = 0;
            if (Array.isArray(t)) {
               for (f = oi(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
               return o
            }
            return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
         }, n, t, arguments.length > 1)
      }
   });
   i.Tween = s;
   s.prototype = {
      constructor: s,
      init: function (n, t, r, u, f, e) {
         this.elem = n;
         this.prop = r;
         this.easing = f || i.easing._default;
         this.options = t;
         this.start = this.now = this.cur();
         this.end = u;
         this.unit = e || (i.cssNumber[r] ? "" : "px")
      },
      cur: function () {
         var n = s.propHooks[this.prop];
         return n && n.get ? n.get(this) : s.propHooks._default.get(this)
      },
      run: function (n) {
         var r, t = s.propHooks[this.prop];
         return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : s.propHooks._default.set(this), this
      }
   };
   s.prototype.init.prototype = s.prototype;
   s.propHooks = {
      _default: {
         get: function (n) {
            var t;
            return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0
         },
         set: function (n) {
            i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || null == n.elem.style[i.cssProps[n.prop]] && !i.cssHooks[n.prop] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
         }
      }
   };
   s.propHooks.scrollTop = s.propHooks.scrollLeft = {
      set: function (n) {
         n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
      }
   };
   i.easing = {
      linear: function (n) {
         return n
      },
      swing: function (n) {
         return .5 - Math.cos(n * Math.PI) / 2
      },
      _default: "swing"
   };
   i.fx = s.prototype.init;
   i.fx.step = {};
   au = /^(?:toggle|show|hide)$/;
   vu = /queueHooks$/;
   i.Animation = i.extend(l, {
      tweeners: {
         "*": [function (n, t) {
            var i = this.createTween(n, t);
            return cr(i.elem, n, yt.exec(t), i), i
         }]
      },
      tweener: function (n, t) {
         u(n) ? (t = n, n = ["*"]) : n = n.match(a);
         for (var i, r = 0, f = n.length; r < f; r++) i = n[r], l.tweeners[i] = l.tweeners[i] || [], l.tweeners[i].unshift(t)
      },
      prefilters: [fe],
      prefilter: function (n, t) {
         t ? l.prefilters.unshift(n) : l.prefilters.push(n)
      }
   });
   i.speed = function (n, t, r) {
      var f = n && "object" == typeof n ? i.extend({}, n) : {
         complete: r || !r && t || u(n) && n,
         duration: n,
         easing: r && t || t && !u(t) && t
      };
      return i.fx.off ? f.duration = 0 : "number" != typeof f.duration && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default), null != f.queue && !0 !== f.queue || (f.queue = "fx"), f.old = f.complete, f.complete = function () {
         u(f.old) && f.old.call(this);
         f.queue && i.dequeue(this, f.queue)
      }, f
   };
   i.fn.extend({
      fadeTo: function (n, t, i, r) {
         return this.filter(fi).css("opacity", 0).show().end().animate({
            opacity: t
         }, n, i, r)
      },
      animate: function (n, t, u, f) {
         var s = i.isEmptyObject(n),
            o = i.speed(t, u, f),
            e = function () {
               var t = l(this, i.extend({}, n), o);
               (s || r.get(this, "finish")) && t.stop(!0)
            };
         return e.finish = e, s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
      },
      stop: function (n, t, u) {
         var f = function (n) {
            var t = n.stop;
            delete n.stop;
            t(u)
         };
         return "string" != typeof n && (u = t, t = n, n = void 0), t && !1 !== n && this.queue(n || "fx", []), this.each(function () {
            var s = !0,
               t = null != n && n + "queueHooks",
               o = i.timers,
               e = r.get(this);
            if (t) e[t] && e[t].stop && f(e[t]);
            else
               for (t in e) e[t] && e[t].stop && vu.test(t) && f(e[t]);
            for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
            !s && u || i.dequeue(this, n)
         })
      },
      finish: function (n) {
         return !1 !== n && (n = n || "fx"), this.each(function () {
            var t, e = r.get(this),
               u = e[n + "queue"],
               o = e[n + "queueHooks"],
               f = i.timers,
               s = u ? u.length : 0;
            for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
            for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
            delete e.finish
         })
      }
   });
   i.each(["toggle", "show", "hide"], function (n, t) {
      var r = i.fn[t];
      i.fn[t] = function (n, i, u) {
         return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(dt(t, !0), n, i, u)
      }
   });
   i.each({
      slideDown: dt("show"),
      slideUp: dt("hide"),
      slideToggle: dt("toggle"),
      fadeIn: {
         opacity: "show"
      },
      fadeOut: {
         opacity: "hide"
      },
      fadeToggle: {
         opacity: "toggle"
      }
   }, function (n, t) {
      i.fn[n] = function (n, i, r) {
         return this.animate(t, n, i, r)
      }
   });
   i.timers = [];
   i.fx.tick = function () {
      var r, n = 0,
         t = i.timers;
      for (ot = Date.now(); n < t.length; n++)(r = t[n])() || t[n] !== r || t.splice(n--, 1);
      t.length || i.fx.stop();
      ot = void 0
   };
   i.fx.timer = function (n) {
      i.timers.push(n);
      i.fx.start()
   };
   i.fx.interval = 13;
   i.fx.start = function () {
      ri || (ri = !0, vi())
   };
   i.fx.stop = function () {
      ri = null
   };
   i.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
   };
   i.fn.delay = function (t, r) {
         return t = i.fx ? i.fx.speeds[t] || t : t, r = r || "fx", this.queue(r, function (i, r) {
            var u = n.setTimeout(i, t);
            r.stop = function () {
               n.clearTimeout(u)
            }
         })
      },
      function () {
         var n = f.createElement("input"),
            t = f.createElement("select").appendChild(f.createElement("option"));
         n.type = "checkbox";
         e.checkOn = "" !== n.value;
         e.optSelected = t.selected;
         (n = f.createElement("input")).value = "t";
         n.type = "radio";
         e.radioValue = "t" === n.value
      }();
   st = i.expr.attrHandle;
   i.fn.extend({
      attr: function (n, t) {
         return p(this, i.attr, n, t, arguments.length > 1)
      },
      removeAttr: function (n) {
         return this.each(function () {
            i.removeAttr(this, n)
         })
      }
   });
   i.extend({
      attr: function (n, t, r) {
         var f, u, e = n.nodeType;
         if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (u = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? yu : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : u && "get" in u && null !== (f = u.get(n, t)) ? f : null == (f = i.find.attr(n, t)) ? void 0 : f)
      },
      attrHooks: {
         type: {
            set: function (n, t) {
               if (!e.radioValue && "radio" === t && v(n, "input")) {
                  var i = n.value;
                  return n.setAttribute("type", t), i && (n.value = i), t
               }
            }
         }
      },
      removeAttr: function (n, t) {
         var i, u = 0,
            r = t && t.match(a);
         if (r && 1 === n.nodeType)
            while (i = r[u++]) n.removeAttribute(i)
      }
   });
   yu = {
      set: function (n, t, r) {
         return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r), r
      }
   };
   i.each(i.expr.match.bool.source.match(/\w+/g), function (n, t) {
      var r = st[t] || i.find.attr;
      st[t] = function (n, t, i) {
         var f, e, u = t.toLowerCase();
         return i || (e = st[u], st[u] = f, f = null != r(n, t, i) ? u : null, st[u] = e), f
      }
   });
   pu = /^(?:input|select|textarea|button)$/i;
   wu = /^(?:a|area)$/i;
   i.fn.extend({
      prop: function (n, t) {
         return p(this, i.prop, n, t, arguments.length > 1)
      },
      removeProp: function (n) {
         return this.each(function () {
            delete this[i.propFix[n] || n]
         })
      }
   });
   i.extend({
      prop: function (n, t, r) {
         var f, u, e = n.nodeType;
         if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
      },
      propHooks: {
         tabIndex: {
            get: function (n) {
               var t = i.find.attr(n, "tabindex");
               return t ? parseInt(t, 10) : pu.test(n.nodeName) || wu.test(n.nodeName) && n.href ? 0 : -1
            }
         }
      },
      propFix: {
         "for": "htmlFor",
         "class": "className"
      }
   });
   e.optSelected || (i.propHooks.selected = {
      get: function (n) {
         var t = n.parentNode;
         return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function (n) {
         var t = n.parentNode;
         t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
   });
   i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      i.propFix[this.toLowerCase()] = this
   });
   i.fn.extend({
      addClass: function (n) {
         var o, t, r, f, e, s, h, c = 0;
         if (u(n)) return this.each(function (t) {
            i(this).addClass(n.call(this, t, d(this)))
         });
         if ((o = yi(n)).length)
            while (t = this[c++])
               if (f = d(t), r = 1 === t.nodeType && " " + k(f) + " ") {
                  for (s = 0; e = o[s++];) r.indexOf(" " + e + " ") < 0 && (r += e + " ");
                  f !== (h = k(r)) && t.setAttribute("class", h)
               } return this
      },
      removeClass: function (n) {
         var o, r, t, f, e, s, h, c = 0;
         if (u(n)) return this.each(function (t) {
            i(this).removeClass(n.call(this, t, d(this)))
         });
         if (!arguments.length) return this.attr("class", "");
         if ((o = yi(n)).length)
            while (r = this[c++])
               if (f = d(r), t = 1 === r.nodeType && " " + k(f) + " ") {
                  for (s = 0; e = o[s++];)
                     while (t.indexOf(" " + e + " ") > -1) t = t.replace(" " + e + " ", " ");
                  f !== (h = k(t)) && r.setAttribute("class", h)
               } return this
      },
      toggleClass: function (n, t) {
         var f = typeof n,
            e = "string" === f || Array.isArray(n);
         return "boolean" == typeof t && e ? t ? this.addClass(n) : this.removeClass(n) : u(n) ? this.each(function (r) {
            i(this).toggleClass(n.call(this, r, d(this), t), t)
         }) : this.each(function () {
            var t, o, u, s;
            if (e)
               for (o = 0, u = i(this), s = yi(n); t = s[o++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
            else void 0 !== n && "boolean" !== f || ((t = d(this)) && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === n ? "" : r.get(this, "__className__") || ""))
         })
      },
      hasClass: function (n) {
         for (var t, i = 0, r = " " + n + " "; t = this[i++];)
            if (1 === t.nodeType && (" " + k(d(t)) + " ").indexOf(r) > -1) return !0;
         return !1
      }
   });
   bu = /\r/g;
   i.fn.extend({
      val: function (n) {
         var t, r, e, f = this[0];
         return arguments.length ? (e = u(n), this.each(function (r) {
            var u;
            1 === this.nodeType && (null == (u = e ? n.call(this, r, i(this).val()) : n) ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function (n) {
               return null == n ? "" : n + ""
            })), (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
         })) : f ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) && "get" in t && void 0 !== (r = t.get(f, "value")) ? r : "string" == typeof (r = f.value) ? r.replace(bu, "") : null == r ? "" : r : void 0
      }
   });
   i.extend({
      valHooks: {
         option: {
            get: function (n) {
               var t = i.find.attr(n, "value");
               return null != t ? t : k(i.text(n))
            }
         },
         select: {
            get: function (n) {
               for (var e, t, o = n.options, r = n.selectedIndex, u = "select-one" === n.type, s = u ? null : [], h = u ? r + 1 : o.length, f = r < 0 ? h : u ? r : 0; f < h; f++)
                  if (((t = o[f]).selected || f === r) && !t.disabled && (!t.parentNode.disabled || !v(t.parentNode, "optgroup"))) {
                     if (e = i(t).val(), u) return e;
                     s.push(e)
                  } return s
            },
            set: function (n, t) {
               for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--;)((u = f[o]).selected = i.inArray(i.valHooks.option.get(u), e) > -1) && (r = !0);
               return r || (n.selectedIndex = -1), e
            }
         }
      }
   });
   i.each(["radio", "checkbox"], function () {
      i.valHooks[this] = {
         set: function (n, t) {
            if (Array.isArray(t)) return n.checked = i.inArray(i(n).val(), t) > -1
         }
      };
      e.checkOn || (i.valHooks[this].get = function (n) {
         return null === n.getAttribute("value") ? "on" : n.value
      })
   });
   e.focusin = "onfocusin" in n;
   gi = /^(?:focusinfocus|focusoutblur)$/;
   nr = function (n) {
      n.stopPropagation()
   };
   i.extend(i.event, {
      trigger: function (t, e, o, s) {
         var k, c, l, d, v, y, a, p, w = [o || f],
            h = ti.call(t, "type") ? t.type : t,
            b = ti.call(t, "namespace") ? t.namespace.split(".") : [];
         if (c = p = l = o = o || f, 3 !== o.nodeType && 8 !== o.nodeType && !gi.test(h + i.event.triggered) && (h.indexOf(".") > -1 && (h = (b = h.split(".")).shift(), b.sort()), v = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t), t.isTrigger = s ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), e = null == e ? [t] : i.makeArray(e, [t]), a = i.event.special[h] || {}, s || !a.trigger || !1 !== a.trigger.apply(o, e))) {
            if (!s && !a.noBubble && !et(o)) {
               for (d = a.delegateType || h, gi.test(d + h) || (c = c.parentNode); c; c = c.parentNode) w.push(c), l = c;
               l === (o.ownerDocument || f) && w.push(l.defaultView || l.parentWindow || n)
            }
            for (k = 0;
               (c = w[k++]) && !t.isPropagationStopped();) p = c, t.type = k > 1 ? d : a.bindType || h, (y = (r.get(c, "events") || {})[t.type] && r.get(c, "handle")) && y.apply(c, e), (y = v && c[v]) && y.apply && vt(c) && (t.result = y.apply(c, e), !1 === t.result && t.preventDefault());
            return t.type = h, s || t.isDefaultPrevented() || a._default && !1 !== a._default.apply(w.pop(), e) || !vt(o) || v && u(o[h]) && !et(o) && ((l = o[v]) && (o[v] = null), i.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, nr), o[h](), t.isPropagationStopped() && p.removeEventListener(h, nr), i.event.triggered = void 0, l && (o[v] = l)), t.result
         }
      },
      simulate: function (n, t, r) {
         var u = i.extend(new i.Event, r, {
            type: n,
            isSimulated: !0
         });
         i.event.trigger(u, null, t)
      }
   });
   i.fn.extend({
      trigger: function (n, t) {
         return this.each(function () {
            i.event.trigger(n, t, this)
         })
      },
      triggerHandler: function (n, t) {
         var r = this[0];
         if (r) return i.event.trigger(n, t, r, !0)
      }
   });
   e.focusin || i.each({
      focus: "focusin",
      blur: "focusout"
   }, function (n, t) {
      var u = function (n) {
         i.event.simulate(t, n.target, i.event.fix(n))
      };
      i.event.special[t] = {
         setup: function () {
            var i = this.ownerDocument || this,
               f = r.access(i, t);
            f || i.addEventListener(n, u, !0);
            r.access(i, t, (f || 0) + 1)
         },
         teardown: function () {
            var i = this.ownerDocument || this,
               f = r.access(i, t) - 1;
            f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
         }
      }
   });
   var pt = n.location,
      yf = Date.now(),
      rr = /\?/;
   i.parseXML = function (t) {
      var r;
      if (!t || "string" != typeof t) return null;
      try {
         r = (new n.DOMParser).parseFromString(t, "text/xml")
      } catch (n) {
         r = void 0
      }
      return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
   };
   var fo = /\[\]$/,
      pf = /\r?\n/g,
      eo = /^(?:submit|button|image|reset|file)$/i,
      oo = /^(?:input|select|textarea|keygen)/i;
   i.param = function (n, t) {
      var r, f = [],
         e = function (n, t) {
            var i = u(t) ? t() : t;
            f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i)
         };
      if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function () {
         e(this.name, this.value)
      });
      else
         for (r in n) pi(r, n[r], t, e);
      return f.join("&")
   };
   i.fn.extend({
      serialize: function () {
         return i.param(this.serializeArray())
      },
      serializeArray: function () {
         return this.map(function () {
            var n = i.prop(this, "elements");
            return n ? i.makeArray(n) : this
         }).filter(function () {
            var n = this.type;
            return this.name && !i(this).is(":disabled") && oo.test(this.nodeName) && !eo.test(n) && (this.checked || !ff.test(n))
         }).map(function (n, t) {
            var r = i(this).val();
            return null == r ? null : Array.isArray(r) ? i.map(r, function (n) {
               return {
                  name: t.name,
                  value: n.replace(pf, "\r\n")
               }
            }) : {
               name: t.name,
               value: r.replace(pf, "\r\n")
            }
         }).get()
      }
   });
   var so = /%20/g,
      ho = /#.*$/,
      co = /([?&])_=[^&]*/,
      lo = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ao = /^(?:GET|HEAD)$/,
      vo = /^\/\//,
      wf = {},
      ur = {},
      bf = "*/".concat("*"),
      fr = f.createElement("a");
   return fr.href = pt.href, i.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
         url: pt.href,
         type: "GET",
         isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pt.protocol),
         global: !0,
         processData: !0,
         "async": !0,
         contentType: "application/x-www-form-urlencoded; charset=UTF-8",
         accepts: {
            "*": bf,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
         },
         contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
         },
         responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
         },
         converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": i.parseXML
         },
         flatOptions: {
            url: !0,
            context: !0
         }
      },
      ajaxSetup: function (n, t) {
         return t ? wi(wi(n, i.ajaxSettings), t) : wi(i.ajaxSettings, n)
      },
      ajaxPrefilter: tu(wf),
      ajaxTransport: tu(ur),
      ajax: function (t, r) {
         function v(t, r, f, c) {
            var v, rt, w, y, g, a = r;
            s || (s = !0, d && n.clearTimeout(d), l = void 0, k = c || "", e.readyState = t > 0 ? 4 : 0, v = t >= 200 && t < 300 || 304 === t, f && (y = oe(u, e, f)), y = se(u, y, e, v), v ? (u.ifModified && ((g = e.getResponseHeader("Last-Modified")) && (i.lastModified[o] = g), (g = e.getResponseHeader("etag")) && (i.etag[o] = g)), 204 === t || "HEAD" === u.type ? a = "nocontent" : 304 === t ? a = "notmodified" : (a = y.state, rt = y.data, v = !(w = y.error))) : (w = a, !t && a || (a = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || a) + "", v ? tt.resolveWith(h, [rt, a, e]) : tt.rejectWith(h, [e, a, w]), e.statusCode(b), b = void 0, p && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : w]), it.fireWith(h, [e, a]), p && (nt.trigger("ajaxComplete", [e, u]), --i.active || i.event.trigger("ajaxStop")))
         }
         "object" == typeof t && (r = t, t = void 0);
         r = r || {};
         var l, o, k, y, d, c, s, p, g, w, u = i.ajaxSetup({}, r),
            h = u.context || u,
            nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
            tt = i.Deferred(),
            it = i.Callbacks("once memory"),
            b = u.statusCode || {},
            rt = {},
            ut = {},
            ft = "canceled",
            e = {
               readyState: 0,
               getResponseHeader: function (n) {
                  var t;
                  if (s) {
                     if (!y)
                        for (y = {}; t = lo.exec(k);) y[t[1].toLowerCase()] = t[2];
                     t = y[n.toLowerCase()]
                  }
                  return null == t ? null : t
               },
               getAllResponseHeaders: function () {
                  return s ? k : null
               },
               setRequestHeader: function (n, t) {
                  return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this
               },
               overrideMimeType: function (n) {
                  return null == s && (u.mimeType = n), this
               },
               statusCode: function (n) {
                  var t;
                  if (n)
                     if (s) e.always(n[e.status]);
                     else
                        for (t in n) b[t] = [b[t], n[t]];
                  return this
               },
               abort: function (n) {
                  var t = n || ft;
                  return l && l.abort(t), v(0, t), this
               }
            };
         if (tt.promise(e), u.url = ((t || u.url || pt.href) + "").replace(vo, pt.protocol + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = (u.dataType || "*").toLowerCase().match(a) || [""], null == u.crossDomain) {
            c = f.createElement("a");
            try {
               c.href = u.url;
               c.href = c.href;
               u.crossDomain = fr.protocol + "//" + fr.host != c.protocol + "//" + c.host
            } catch (n) {
               u.crossDomain = !0
            }
         }
         if (u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), iu(wf, u, r, e), s) return e;
         (p = i.event && u.global) && 0 == i.active++ && i.event.trigger("ajaxStart");
         u.type = u.type.toUpperCase();
         u.hasContent = !ao.test(u.type);
         o = u.url.replace(ho, "");
         u.hasContent ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(so, "+")) : (w = u.url.slice(o.length), u.data && (u.processData || "string" == typeof u.data) && (o += (rr.test(o) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (o = o.replace(co, "$1"), w = (rr.test(o) ? "&" : "?") + "_=" + yf++ + w), u.url = o + w);
         u.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
         (u.data && u.hasContent && !1 !== u.contentType || r.contentType) && e.setRequestHeader("Content-Type", u.contentType);
         e.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + bf + "; q=0.01" : "") : u.accepts["*"]);
         for (g in u.headers) e.setRequestHeader(g, u.headers[g]);
         if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s)) return e.abort();
         if (ft = "abort", it.add(u.complete), e.done(u.success), e.fail(u.error), l = iu(ur, u, r, e)) {
            if (e.readyState = 1, p && nt.trigger("ajaxSend", [e, u]), s) return e;
            u.async && u.timeout > 0 && (d = n.setTimeout(function () {
               e.abort("timeout")
            }, u.timeout));
            try {
               s = !1;
               l.send(rt, v)
            } catch (n) {
               if (s) throw n;
               v(-1, n)
            }
         } else v(-1, "No Transport");
         return e
      },
      getJSON: function (n, t, r) {
         return i.get(n, t, r, "json")
      },
      getScript: function (n, t) {
         return i.get(n, void 0, t, "script")
      }
   }), i.each(["get", "post"], function (n, t) {
      i[t] = function (n, r, f, e) {
         return u(r) && (e = e || f, f = r, r = void 0), i.ajax(i.extend({
            url: n,
            type: t,
            dataType: e,
            data: r,
            success: f
         }, i.isPlainObject(n) && n))
      }
   }), i._evalUrl = function (n) {
      return i.ajax({
         url: n,
         type: "GET",
         dataType: "script",
         cache: !0,
         "async": !1,
         global: !1,
         throws: !0
      })
   }, i.fn.extend({
      wrapAll: function (n) {
         var t;
         return this[0] && (u(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
            for (var n = this; n.firstElementChild;) n = n.firstElementChild;
            return n
         }).append(this)), this
      },
      wrapInner: function (n) {
         return u(n) ? this.each(function (t) {
            i(this).wrapInner(n.call(this, t))
         }) : this.each(function () {
            var t = i(this),
               r = t.contents();
            r.length ? r.wrapAll(n) : t.append(n)
         })
      },
      wrap: function (n) {
         var t = u(n);
         return this.each(function (r) {
            i(this).wrapAll(t ? n.call(this, r) : n)
         })
      },
      unwrap: function (n) {
         return this.parent(n).not("body").each(function () {
            i(this).replaceWith(this.childNodes)
         }), this
      }
   }), i.expr.pseudos.hidden = function (n) {
      return !i.expr.pseudos.visible(n)
   }, i.expr.pseudos.visible = function (n) {
      return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
   }, i.ajaxSettings.xhr = function () {
      try {
         return new n.XMLHttpRequest
      } catch (n) {}
   }, ku = {
      0: 200,
      1223: 204
   }, ht = i.ajaxSettings.xhr(), e.cors = !!ht && "withCredentials" in ht, e.ajax = ht = !!ht, i.ajaxTransport(function (t) {
      var i, r;
      if (e.cors || ht && !t.crossDomain) return {
         send: function (u, f) {
            var o, e = t.xhr();
            if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
               for (o in t.xhrFields) e[o] = t.xhrFields[o];
            t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
            t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
            for (o in u) e.setRequestHeader(o, u[o]);
            i = function (n) {
               return function () {
                  i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(ku[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
                     binary: e.response
                  } : {
                     text: e.responseText
                  }, e.getAllResponseHeaders()))
               }
            };
            e.onload = i();
            r = e.onerror = e.ontimeout = i("error");
            void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function () {
               4 === e.readyState && n.setTimeout(function () {
                  i && r()
               })
            };
            i = i("abort");
            try {
               e.send(t.hasContent && t.data || null)
            } catch (n) {
               if (i) throw n;
            }
         },
         abort: function () {
            i && i()
         }
      }
   }), i.ajaxPrefilter(function (n) {
      n.crossDomain && (n.contents.script = !1)
   }), i.ajaxSetup({
      accepts: {
         script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
         script: /\b(?:java|ecma)script\b/
      },
      converters: {
         "text script": function (n) {
            return i.globalEval(n), n
         }
      }
   }), i.ajaxPrefilter("script", function (n) {
      void 0 === n.cache && (n.cache = !1);
      n.crossDomain && (n.type = "GET")
   }), i.ajaxTransport("script", function (n) {
      if (n.crossDomain) {
         var r, t;
         return {
            send: function (u, e) {
               r = i("<script>").prop({
                  charset: n.scriptCharset,
                  src: n.url
               }).on("load error", t = function (n) {
                  r.remove();
                  t = null;
                  n && e("error" === n.type ? 404 : 200, n.type)
               });
               f.head.appendChild(r[0])
            },
            abort: function () {
               t && t()
            }
         }
      }
   }), tr = [], ui = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
         var n = tr.pop() || i.expando + "_" + yf++;
         return this[n] = !0, n
      }
   }), i.ajaxPrefilter("json jsonp", function (t, r, f) {
      var e, o, s, h = !1 !== t.jsonp && (ui.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ui.test(t.data) && "data");
      if (h || "jsonp" === t.dataTypes[0]) return e = t.jsonpCallback = u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, h ? t[h] = t[h].replace(ui, "$1" + e) : !1 !== t.jsonp && (t.url += (rr.test(t.url) ? "&" : "?") + t.jsonp + "=" + e), t.converters["script json"] = function () {
         return s || i.error(e + " was not called"), s[0]
      }, t.dataTypes[0] = "json", o = n[e], n[e] = function () {
         s = arguments
      }, f.always(function () {
         void 0 === o ? i(n).removeProp(e) : n[e] = o;
         t[e] && (t.jsonpCallback = r.jsonpCallback, tr.push(e));
         s && u(o) && o(s[0]);
         s = o = void 0
      }), "script"
   }), e.createHTMLDocument = function () {
      var n = f.implementation.createHTMLDocument("").body;
      return n.innerHTML = "<form><\/form><form><\/form>", 2 === n.childNodes.length
   }(), i.parseHTML = function (n, t, r) {
      if ("string" != typeof n) return [];
      "boolean" == typeof t && (r = t, t = !1);
      var s, u, o;
      return t || (e.createHTMLDocument ? ((s = (t = f.implementation.createHTMLDocument("")).createElement("base")).href = f.location.href, t.head.appendChild(s)) : t = f), u = ki.exec(n), o = !r && [], u ? [t.createElement(u[1])] : (u = lr([n], t, o), o && o.length && i(o).remove(), i.merge([], u.childNodes))
   }, i.fn.load = function (n, t, r) {
      var f, s, h, e = this,
         o = n.indexOf(" ");
      return o > -1 && (f = k(n.slice(o)), n = n.slice(0, o)), u(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), e.length > 0 && i.ajax({
         url: n,
         type: s || "GET",
         dataType: "html",
         data: t
      }).done(function (n) {
         h = arguments;
         e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
      }).always(r && function (n, t) {
         e.each(function () {
            r.apply(this, h || [n.responseText, t, n])
         })
      }), this
   }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (n, t) {
      i.fn[t] = function (n) {
         return this.on(t, n)
      }
   }), i.expr.pseudos.animated = function (n) {
      return i.grep(i.timers, function (t) {
         return n === t.elem
      }).length
   }, i.offset = {
      setOffset: function (n, t, r) {
         var v, o, s, h, f, c, y, l = i.css(n, "position"),
            a = i(n),
            e = {};
         "static" === l && (n.style.position = "relative");
         f = a.offset();
         s = i.css(n, "top");
         c = i.css(n, "left");
         (y = ("absolute" === l || "fixed" === l) && (s + c).indexOf("auto") > -1) ? (h = (v = a.position()).top, o = v.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
         u(t) && (t = t.call(n, r, i.extend({}, f)));
         null != t.top && (e.top = t.top - f.top + h);
         null != t.left && (e.left = t.left - f.left + o);
         "using" in t ? t.using.call(n, e) : a.css(e)
      }
   }, i.fn.extend({
      offset: function (n) {
         if (arguments.length) return void 0 === n ? this : this.each(function (t) {
            i.offset.setOffset(this, n, t)
         });
         var r, u, t = this[0];
         if (t) return t.getClientRects().length ? (r = t.getBoundingClientRect(), u = t.ownerDocument.defaultView, {
            top: r.top + u.pageYOffset,
            left: r.left + u.pageXOffset
         }) : {
            top: 0,
            left: 0
         }
      },
      position: function () {
         if (this[0]) {
            var n, r, u, t = this[0],
               f = {
                  top: 0,
                  left: 0
               };
            if ("fixed" === i.css(t, "position")) r = t.getBoundingClientRect();
            else {
               for (r = this.offset(), u = t.ownerDocument, n = t.offsetParent || u.documentElement; n && (n === u.body || n === u.documentElement) && "static" === i.css(n, "position");) n = n.parentNode;
               n && n !== t && 1 === n.nodeType && ((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0), f.left += i.css(n, "borderLeftWidth", !0))
            }
            return {
               top: r.top - f.top - i.css(t, "marginTop", !0),
               left: r.left - f.left - i.css(t, "marginLeft", !0)
            }
         }
      },
      offsetParent: function () {
         return this.map(function () {
            for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent;
            return n || ei
         })
      }
   }), i.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
   }, function (n, t) {
      var r = "pageYOffset" === t;
      i.fn[n] = function (i) {
         return p(this, function (n, i, u) {
            var f;
            if (et(n) ? f = n : 9 === n.nodeType && (f = n.defaultView), void 0 === u) return f ? f[t] : n[i];
            f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
         }, n, i, arguments.length)
      }
   }), i.each(["top", "left"], function (n, t) {
      i.cssHooks[t] = wr(e.pixelPosition, function (n, r) {
         if (r) return r = at(n, t), ir.test(r) ? i(n).position()[t] + "px" : r
      })
   }), i.each({
      Height: "height",
      Width: "width"
   }, function (n, t) {
      i.each({
         padding: "inner" + n,
         content: t,
         "": "outer" + n
      }, function (r, u) {
         i.fn[u] = function (f, e) {
            var o = arguments.length && (r || "boolean" != typeof f),
               s = r || (!0 === f || !0 === e ? "margin" : "border");
            return p(this, function (t, r, f) {
               var e;
               return et(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s)
            }, t, o ? f : void 0, o)
         }
      })
   }), i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (n, t) {
      i.fn[t] = function (n, i) {
         return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
      }
   }), i.fn.extend({
      hover: function (n, t) {
         return this.mouseenter(n).mouseleave(t || n)
      }
   }), i.fn.extend({
      bind: function (n, t, i) {
         return this.on(n, null, t, i)
      },
      unbind: function (n, t) {
         return this.off(n, null, t)
      },
      delegate: function (n, t, i, r) {
         return this.on(t, n, i, r)
      },
      undelegate: function (n, t, i) {
         return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
      }
   }), i.proxy = function (n, t) {
      var f, e, r;
      if ("string" == typeof t && (f = n[t], t = n, n = f), u(n)) return e = nt.call(arguments, 2), r = function () {
         return n.apply(t || this, e.concat(nt.call(arguments)))
      }, r.guid = n.guid = n.guid || i.guid++, r
   }, i.holdReady = function (n) {
      n ? i.readyWait++ : i.ready(!0)
   }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = v, i.isFunction = u, i.isWindow = et, i.camelCase = y, i.type = tt, i.now = Date.now, i.isNumeric = function (n) {
      var t = i.type(n);
      return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n))
   }, "function" == typeof define && define.amd && define("jquery", [], function () {
      return i
   }), du = n.jQuery, gu = n.$, i.noConflict = function (t) {
      return n.$ === i && (n.$ = gu), t && n.jQuery === i && (n.jQuery = du), i
   }, t || (n.jQuery = n.$ = i), i
}),
function (n, t) {
   "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Popper = t()
}(this, function () {
   "use strict";

   function ft(n) {
      return n && "[object Function]" === {}.toString.call(n)
   }

   function r(n, t) {
      if (1 !== n.nodeType) return [];
      var r = n.ownerDocument.defaultView,
         i = r.getComputedStyle(n, null);
      return t ? i[t] : i
   }

   function y(n) {
      return "HTML" === n.nodeName ? n : n.parentNode || n.host
   }

   function s(n) {
      if (!n) return document.body;
      switch (n.nodeName) {
         case "HTML":
         case "BODY":
            return n.ownerDocument.body;
         case "#document":
            return n.body
      }
      var t = r(n),
         i = t.overflow,
         u = t.overflowX,
         f = t.overflowY;
      return /(auto|scroll|overlay)/.test(i + f + u) ? n : s(y(n))
   }

   function u(n) {
      return 11 === n ? ui : 10 === n ? fi : ui || fi
   }

   function f(n) {
      var e, t, i;
      if (!n) return document.documentElement;
      for (e = u(10) ? document.body : null, t = n.offsetParent || null; t === e && n.nextElementSibling;) t = (n = n.nextElementSibling).offsetParent;
      return i = t && t.nodeName, i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(t.nodeName) && "static" === r(t, "position") ? f(t) : t : n ? n.ownerDocument.documentElement : document.documentElement
   }

   function oi(n) {
      var t = n.nodeName;
      return "BODY" !== t && ("HTML" === t || f(n.firstElementChild) === n)
   }

   function p(n) {
      return null === n.parentNode ? n : p(n.parentNode)
   }

   function l(n, t) {
      var i, r;
      if (!n || !n.nodeType || !t || !t.nodeType) return document.documentElement;
      var e = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
         o = e ? n : t,
         s = e ? t : n,
         u = document.createRange();
      return (u.setStart(o, 0), u.setEnd(s, 0), i = u.commonAncestorContainer, n !== i && t !== i || o.contains(s)) ? oi(i) ? i : f(i) : (r = p(n), r.host ? l(r.host, t) : l(n, p(t).host))
   }

   function e(n) {
      var f = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
         t = "top" === f ? "scrollTop" : "scrollLeft",
         i = n.nodeName,
         r, u;
      return "BODY" === i || "HTML" === i ? (r = n.ownerDocument.documentElement, u = n.ownerDocument.scrollingElement || r, u[t]) : n[t]
   }

   function si(n, t) {
      var f = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
         r = e(t, "top"),
         u = e(t, "left"),
         i = f ? -1 : 1;
      return n.top += r * i, n.bottom += r * i, n.left += u * i, n.right += u * i, n
   }

   function et(n, t) {
      var i = "x" === t ? "Left" : "Top",
         r = "Left" == i ? "Right" : "Bottom";
      return parseFloat(n["border" + i + "Width"], 10) + parseFloat(n["border" + r + "Width"], 10)
   }

   function ot(n, i, r, f) {
      return t(i["offset" + n], i["scroll" + n], r["client" + n], r["offset" + n], r["scroll" + n], u(10) ? parseInt(r["offset" + n]) + parseInt(f["margin" + ("Height" === n ? "Top" : "Left")]) + parseInt(f["margin" + ("Height" === n ? "Bottom" : "Right")]) : 0)
   }

   function st(n) {
      var i = n.body,
         t = n.documentElement,
         r = u(10) && getComputedStyle(t);
      return {
         height: ot("Height", i, t, r),
         width: ot("Width", i, t, r)
      }
   }

   function i(t) {
      return n({}, t, {
         right: t.left + t.width,
         bottom: t.top + t.height
      })
   }

   function w(n) {
      var t = {},
         o, s, h;
      try {
         u(10) ? (t = n.getBoundingClientRect(), o = e(n, "top"), s = e(n, "left"), t.top += o, t.left += s, t.bottom += o, t.right += s) : t = n.getBoundingClientRect()
      } catch (r) {}
      var f = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
         },
         a = "HTML" === n.nodeName ? st(n.ownerDocument) : {},
         v = a.width || n.clientWidth || f.right - f.left,
         y = a.height || n.clientHeight || f.bottom - f.top,
         c = n.offsetWidth - v,
         l = n.offsetHeight - y;
      return (c || l) && (h = r(n), c -= et(h, "x"), l -= et(h, "y"), f.width -= c, f.height -= l), i(f)
   }

   function b(n, f) {
      var b = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
         k = u(10),
         d = "HTML" === f.nodeName,
         h = w(n),
         o = w(f),
         v = s(n),
         c = r(f),
         y = parseFloat(c.borderTopWidth, 10),
         p = parseFloat(c.borderLeftWidth, 10),
         e, l, a;
      return b && d && (o.top = t(o.top, 0), o.left = t(o.left, 0)), e = i({
         top: h.top - o.top - y,
         left: h.left - o.left - p,
         width: h.width,
         height: h.height
      }), (e.marginTop = 0, e.marginLeft = 0, !k && d) && (l = parseFloat(c.marginTop, 10), a = parseFloat(c.marginLeft, 10), e.top -= y - l, e.bottom -= y - l, e.left -= p - a, e.right -= p - a, e.marginTop = l, e.marginLeft = a), (k && !b ? f.contains(v) : f === v && "BODY" !== v.nodeName) && (e = si(e, f)), e
   }

   function hi(n) {
      var f = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
         r = n.ownerDocument.documentElement,
         u = b(n, r),
         o = t(r.clientWidth, window.innerWidth || 0),
         s = t(r.clientHeight, window.innerHeight || 0),
         h = f ? 0 : e(r),
         c = f ? 0 : e(r, "left"),
         l = {
            top: h - u.top + u.marginTop,
            left: c - u.left + u.marginLeft,
            width: o,
            height: s
         };
      return i(l)
   }

   function ht(n) {
      var i = n.nodeName,
         t;
      return "BODY" === i || "HTML" === i ? !1 : "fixed" === r(n, "position") ? !0 : (t = y(n), !!t && ht(t))
   }

   function ct(n) {
      if (!n || !n.parentElement || u()) return document.documentElement;
      for (var t = n.parentElement; t && "none" === r(t, "transform");) t = t.parentElement;
      return t || document.documentElement
   }

   function k(n, t, i, r) {
      var h = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
         u = {
            top: 0,
            left: 0
         },
         c = h ? ct(n) : l(n, t),
         e, f, o;
      if ("viewport" === r) u = hi(c, h);
      else if ("scrollParent" === r ? (e = s(y(t)), "BODY" === e.nodeName && (e = n.ownerDocument.documentElement)) : e = "window" === r ? n.ownerDocument.documentElement : r, f = b(e, c, h), "HTML" !== e.nodeName || ht(c)) u = f;
      else {
         var a = st(n.ownerDocument),
            v = a.height,
            p = a.width;
         u.top += f.top - f.marginTop;
         u.bottom = v + f.top;
         u.left += f.left - f.marginLeft;
         u.right = p + f.left
      }
      return i = i || 0, o = "number" == typeof i, u.left += o ? i : i.left || 0, u.top += o ? i : i.top || 0, u.right -= o ? i : i.right || 0, u.bottom -= o ? i : i.bottom || 0, u
   }

   function ci(n) {
      var t = n.width,
         i = n.height;
      return t * i
   }

   function lt(t, i, r, u, f) {
      var l = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
      if (-1 === t.indexOf("auto")) return t;
      var e = k(r, u, l, f),
         o = {
            top: {
               width: e.width,
               height: i.top - e.top
            },
            right: {
               width: e.right - i.right,
               height: e.height
            },
            bottom: {
               width: e.width,
               height: e.bottom - i.bottom
            },
            left: {
               width: i.left - e.left,
               height: e.height
            }
         },
         s = Object.keys(o).map(function (t) {
            return n({
               key: t
            }, o[t], {
               area: ci(o[t])
            })
         }).sort(function (n, t) {
            return t.area - n.area
         }),
         h = s.filter(function (n) {
            var t = n.width,
               i = n.height;
            return t >= r.clientWidth && i >= r.clientHeight
         }),
         a = 0 < h.length ? h[0].key : s[0].key,
         c = t.split("-")[1];
      return a + (c ? "-" + c : "")
   }

   function at(n, t, i) {
      var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
         u = r ? ct(t) : l(t, i);
      return b(i, u, r)
   }

   function vt(n) {
      var i = n.ownerDocument.defaultView,
         t = i.getComputedStyle(n),
         r = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
         u = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
      return {
         width: n.offsetWidth + u,
         height: n.offsetHeight + r
      }
   }

   function a(n) {
      var t = {
         left: "right",
         right: "left",
         bottom: "top",
         top: "bottom"
      };
      return n.replace(/left|right|bottom|top/g, function (n) {
         return t[n]
      })
   }

   function yt(n, t, i) {
      i = i.split("-")[0];
      var r = vt(n),
         e = {
            width: r.width,
            height: r.height
         },
         u = -1 !== ["right", "left"].indexOf(i),
         o = u ? "top" : "left",
         f = u ? "left" : "top",
         s = u ? "height" : "width",
         h = u ? "width" : "height";
      return e[o] = t[o] + t[s] / 2 - r[s] / 2, e[f] = i === f ? t[f] - r[h] : t[a(f)], e
   }

   function h(n, t) {
      return Array.prototype.find ? n.find(t) : n.filter(t)[0]
   }

   function li(n, t, i) {
      if (Array.prototype.findIndex) return n.findIndex(function (n) {
         return n[t] === i
      });
      var r = h(n, function (n) {
         return n[t] === i
      });
      return n.indexOf(r)
   }

   function pt(n, t, r) {
      var u = void 0 === r ? n : n.slice(0, li(n, "name", r));
      return u.forEach(function (n) {
         n["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
         var r = n["function"] || n.fn;
         n.enabled && ft(r) && (t.offsets.popper = i(t.offsets.popper), t.offsets.reference = i(t.offsets.reference), t = r(t, n))
      }), t
   }

   function ai() {
      if (!this.state.isDestroyed) {
         var n = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: !1,
            offsets: {}
         };
         n.offsets.reference = at(this.state, this.popper, this.reference, this.options.positionFixed);
         n.placement = lt(this.options.placement, n.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
         n.originalPlacement = n.placement;
         n.positionFixed = this.options.positionFixed;
         n.offsets.popper = yt(this.popper, n.offsets.reference, n.placement);
         n.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
         n = pt(this.modifiers, n);
         this.state.isCreated ? this.options.onUpdate(n) : (this.state.isCreated = !0, this.options.onCreate(n))
      }
   }

   function wt(n, t) {
      return n.some(function (n) {
         var i = n.name,
            r = n.enabled;
         return r && i === t
      })
   }

   function d(n) {
      for (var t, i, u = [!1, "ms", "Webkit", "Moz", "O"], f = n.charAt(0).toUpperCase() + n.slice(1), r = 0; r < u.length; r++)
         if (t = u[r], i = t ? "" + t + f : n, "undefined" != typeof document.body.style[i]) return i;
      return null
   }

   function vi() {
      return this.state.isDestroyed = !0, wt(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[d("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
   }

   function bt(n) {
      var t = n.ownerDocument;
      return t ? t.defaultView : window
   }

   function kt(n, t, i, r) {
      var f = "BODY" === n.nodeName,
         u = f ? n.ownerDocument.defaultView : n;
      u.addEventListener(t, i, {
         passive: !0
      });
      f || kt(s(u.parentNode), t, i, r);
      r.push(u)
   }

   function yi(n, t, i, r) {
      i.updateBound = r;
      bt(n).addEventListener("resize", i.updateBound, {
         passive: !0
      });
      var u = s(n);
      return kt(u, "scroll", i.updateBound, i.scrollParents), i.scrollElement = u, i.eventsEnabled = !0, i
   }

   function pi() {
      this.state.eventsEnabled || (this.state = yi(this.reference, this.options, this.state, this.scheduleUpdate))
   }

   function wi(n, t) {
      return bt(n).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (n) {
         n.removeEventListener("scroll", t.updateBound)
      }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
   }

   function bi() {
      this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = wi(this.reference, this.state))
   }

   function g(n) {
      return "" !== n && !isNaN(parseFloat(n)) && isFinite(n)
   }

   function nt(n, t) {
      Object.keys(t).forEach(function (i) {
         var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && g(t[i]) && (r = "px");
         n.style[i] = t[i] + r
      })
   }

   function ki(n, t) {
      Object.keys(t).forEach(function (i) {
         var r = t[i];
         !1 === r ? n.removeAttribute(i) : n.setAttribute(i, t[i])
      })
   }

   function di(n, t) {
      var u = n.offsets,
         i = u.popper,
         l = u.reference,
         r = ti,
         f = function (n) {
            return n
         },
         e = r(l.width),
         o = r(i.width),
         a = -1 !== ["left", "right"].indexOf(n.placement),
         s = -1 !== n.placement.indexOf("-"),
         h = t ? a || s || e % 2 == o % 2 ? r : tt : f,
         c = t ? r : f;
      return {
         left: h(1 == e % 2 && 1 == o % 2 && !s && t ? i.left - 1 : i.left),
         top: c(i.top),
         bottom: c(i.bottom),
         right: h(i.right)
      }
   }

   function dt(n, t, i) {
      var u = h(n, function (n) {
            var i = n.name;
            return i === t
         }),
         f = !!u && n.some(function (n) {
            return n.name === i && n.enabled && n.order < u.order
         }),
         r;
      return f || (r = "`" + t + "`", console.warn("`" + i + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")), f
   }

   function gi(n) {
      return "end" === n ? "start" : "start" === n ? "end" : n
   }

   function gt(n) {
      var r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
         t = rt.indexOf(n),
         i = rt.slice(t + 1).concat(rt.slice(0, t));
      return r ? i.reverse() : i
   }

   function nr(n, r, u, f) {
      var h = n.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
         o = +h[1],
         e = h[2],
         s, c, l;
      if (!o) return n;
      if (0 === e.indexOf("%")) {
         switch (e) {
            case "%p":
               s = u;
               break;
            case "%":
            case "%r":
            default:
               s = f
         }
         return c = i(s), c[r] / 100 * o
      }
      return "vh" === e || "vw" === e ? (l = "vh" === e ? t(document.documentElement.clientHeight, window.innerHeight || 0) : t(document.documentElement.clientWidth, window.innerWidth || 0), l / 100 * o) : o
   }

   function tr(n, t, i, r) {
      var s = [0, 0],
         c = -1 !== ["right", "left"].indexOf(r),
         u = n.split(/(\+|\-)/).map(function (n) {
            return n.trim()
         }),
         f = u.indexOf(h(u, function (n) {
            return -1 !== n.search(/,|\s/)
         })),
         o, e;
      return u[f] && -1 === u[f].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."), o = /\s*,\s*|\s+/, e = -1 === f ? [u] : [u.slice(0, f).concat([u[f].split(o)[0]]), [u[f].split(o)[1]].concat(u.slice(f + 1))], e = e.map(function (n, r) {
         var f = (1 === r ? !c : c) ? "height" : "width",
            u = !1;
         return n.reduce(function (n, t) {
            return "" === n[n.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (n[n.length - 1] = t, u = !0, n) : u ? (n[n.length - 1] += t, u = !1, n) : n.concat(t)
         }, []).map(function (n) {
            return nr(n, f, t, i)
         })
      }), e.forEach(function (n, t) {
         n.forEach(function (i, r) {
            g(i) && (s[t] += i * ("-" === n[r - 1] ? -1 : 1))
         })
      }), s
   }

   function ir(n, t) {
      var r, f = t.offset,
         o = n.placement,
         e = n.offsets,
         i = e.popper,
         s = e.reference,
         u = o.split("-")[0];
      return r = g(+f) ? [+f, 0] : tr(f, i, s, u), "left" === u ? (i.top += r[0], i.left -= r[1]) : "right" === u ? (i.top += r[0], i.left += r[1]) : "top" === u ? (i.left += r[0], i.top -= r[1]) : "bottom" === u && (i.left += r[0], i.top += r[1]), n.popper = i, n
   }
   for (var ni = Math.min, tt = Math.floor, ti = Math.round, t = Math.max, c = "undefined" != typeof window && "undefined" != typeof document, ii = ["Edge", "Trident", "Firefox"], ri = 0, it = 0; it < ii.length; it += 1)
      if (c && 0 <= navigator.userAgent.indexOf(ii[it])) {
         ri = 1;
         break
      } var rr = c && window.Promise,
      ur = rr ? function (n) {
         var t = !1;
         return function () {
            t || (t = !0, window.Promise.resolve().then(function () {
               t = !1;
               n()
            }))
         }
      } : function (n) {
         var t = !1;
         return function () {
            t || (t = !0, setTimeout(function () {
               t = !1;
               n()
            }, ri))
         }
      },
      ui = c && !!(window.MSInputMethodContext && document.documentMode),
      fi = c && /MSIE 10/.test(navigator.userAgent),
      fr = function (n, t) {
         if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
      },
      er = function () {
         function n(n, t) {
            for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
         }
         return function (t, i, r) {
            return i && n(t.prototype, i), r && n(t, r), t
         }
      }(),
      o = function (n, t, i) {
         return t in n ? Object.defineProperty(n, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
         }) : n[t] = i, n
      },
      n = Object.assign || function (n) {
         for (var t, i, r = 1; r < arguments.length; r++)
            for (i in t = arguments[r], t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
         return n
      },
      or = c && /Firefox/i.test(navigator.userAgent),
      ei = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      rt = ei.slice(3),
      ut = {
         FLIP: "flip",
         CLOCKWISE: "clockwise",
         COUNTERCLOCKWISE: "counterclockwise"
      },
      v = function () {
         function t(i, r) {
            var u = this,
               f = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
               e;
            fr(this, t);
            this.scheduleUpdate = function () {
               return requestAnimationFrame(u.update)
            };
            this.update = ur(this.update.bind(this));
            this.options = n({}, t.Defaults, f);
            this.state = {
               isDestroyed: !1,
               isCreated: !1,
               scrollParents: []
            };
            this.reference = i && i.jquery ? i[0] : i;
            this.popper = r && r.jquery ? r[0] : r;
            this.options.modifiers = {};
            Object.keys(n({}, t.Defaults.modifiers, f.modifiers)).forEach(function (i) {
               u.options.modifiers[i] = n({}, t.Defaults.modifiers[i] || {}, f.modifiers ? f.modifiers[i] : {})
            });
            this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
               return n({
                  name: t
               }, u.options.modifiers[t])
            }).sort(function (n, t) {
               return n.order - t.order
            });
            this.modifiers.forEach(function (n) {
               n.enabled && ft(n.onLoad) && n.onLoad(u.reference, u.popper, u.options, n, u.state)
            });
            this.update();
            e = this.options.eventsEnabled;
            e && this.enableEventListeners();
            this.state.eventsEnabled = e
         }
         return er(t, [{
            key: "update",
            value: function () {
               return ai.call(this)
            }
         }, {
            key: "destroy",
            value: function () {
               return vi.call(this)
            }
         }, {
            key: "enableEventListeners",
            value: function () {
               return pi.call(this)
            }
         }, {
            key: "disableEventListeners",
            value: function () {
               return bi.call(this)
            }
         }]), t
      }();
   return v.Utils = ("undefined" == typeof window ? global : window).PopperUtils, v.placements = ei, v.Defaults = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
         shift: {
            order: 100,
            enabled: !0,
            fn: function (t) {
               var u = t.placement,
                  l = u.split("-")[0],
                  f = u.split("-")[1];
               if (f) {
                  var e = t.offsets,
                     r = e.reference,
                     s = e.popper,
                     h = -1 !== ["bottom", "top"].indexOf(l),
                     i = h ? "left" : "top",
                     c = h ? "width" : "height",
                     a = {
                        start: o({}, i, r[i]),
                        end: o({}, i, r[i] + r[c] - s[c])
                     };
                  t.offsets.popper = n({}, s, a[f])
               }
               return t
            }
         },
         offset: {
            order: 200,
            enabled: !0,
            fn: ir,
            offset: 0
         },
         preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (i, r) {
               var h = r.boundariesElement || f(i.instance.popper),
                  s;
               i.instance.reference === h && (h = f(h));
               var c = d("transform"),
                  e = i.instance.popper.style,
                  l = e.top,
                  a = e.left,
                  v = e[c];
               e.top = "";
               e.left = "";
               e[c] = "";
               s = k(i.instance.popper, i.instance.reference, r.padding, h, i.positionFixed);
               e.top = l;
               e.left = a;
               e[c] = v;
               r.boundaries = s;
               var y = r.priority,
                  u = i.offsets.popper,
                  p = {
                     primary: function (n) {
                        var i = u[n];
                        return u[n] < s[n] && !r.escapeWithReference && (i = t(u[n], s[n])), o({}, n, i)
                     },
                     secondary: function (n) {
                        var t = "right" === n ? "left" : "top",
                           i = u[t];
                        return u[n] > s[n] && !r.escapeWithReference && (i = ni(u[t], s[n] - ("right" === n ? u.width : u.height))), o({}, t, i)
                     }
                  };
               return y.forEach(function (t) {
                  var i = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                  u = n({}, u, p[i](t))
               }), i.offsets.popper = u, i
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent"
         },
         keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (n) {
               var o = n.offsets,
                  u = o.popper,
                  i = o.reference,
                  s = n.placement.split("-")[0],
                  r = tt,
                  f = -1 !== ["top", "bottom"].indexOf(s),
                  e = f ? "right" : "bottom",
                  t = f ? "left" : "top",
                  h = f ? "width" : "height";
               return u[e] < r(i[t]) && (n.offsets.popper[t] = r(i[t]) - u[h]), u[t] > r(i[e]) && (n.offsets.popper[t] = r(i[e])), n
            }
         },
         arrow: {
            order: 500,
            enabled: !0,
            fn: function (n, u) {
               var l, e;
               if (!dt(n.instance.modifiers, "arrow", "keepTogether")) return n;
               if (e = u.element, "string" == typeof e) {
                  if (e = n.instance.popper.querySelector(e), !e) return n
               } else if (!n.instance.popper.contains(e)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), n;
               var d = n.placement.split("-")[0],
                  b = n.offsets,
                  c = b.popper,
                  s = b.reference,
                  a = -1 !== ["left", "right"].indexOf(d),
                  y = a ? "height" : "width",
                  p = a ? "Top" : "Left",
                  f = p.toLowerCase(),
                  g = a ? "left" : "top",
                  v = a ? "bottom" : "right",
                  h = vt(e)[y];
               s[v] - h < c[f] && (n.offsets.popper[f] -= c[f] - (s[v] - h));
               s[f] + h > c[v] && (n.offsets.popper[f] += s[f] + h - c[v]);
               n.offsets.popper = i(n.offsets.popper);
               var nt = s[f] + s[y] / 2 - h / 2,
                  k = r(n.instance.popper),
                  tt = parseFloat(k["margin" + p], 10),
                  it = parseFloat(k["border" + p + "Width"], 10),
                  w = nt - n.offsets.popper[f] - tt - it;
               return w = t(ni(c[y] - h, w), 0), n.arrowElement = e, n.offsets.arrow = (l = {}, o(l, f, ti(w)), o(l, g, ""), l), n
            },
            element: "[x-arrow]"
         },
         flip: {
            order: 600,
            enabled: !0,
            fn: function (t, i) {
               if (wt(t.instance.modifiers, "inner") || t.flipped && t.placement === t.originalPlacement) return t;
               var e = k(t.instance.popper, t.instance.reference, i.padding, i.boundariesElement, t.positionFixed),
                  r = t.placement.split("-")[0],
                  o = a(r),
                  u = t.placement.split("-")[1] || "",
                  f = [];
               switch (i.behavior) {
                  case ut.FLIP:
                     f = [r, o];
                     break;
                  case ut.CLOCKWISE:
                     f = gt(r);
                     break;
                  case ut.COUNTERCLOCKWISE:
                     f = gt(r, !0);
                     break;
                  default:
                     f = i.behavior
               }
               return f.forEach(function (s, h) {
                  if (r !== s || f.length === h + 1) return t;
                  r = t.placement.split("-")[0];
                  o = a(r);
                  var l = t.offsets.popper,
                     v = t.offsets.reference,
                     c = tt,
                     p = "left" === r && c(l.right) > c(v.left) || "right" === r && c(l.left) < c(v.right) || "top" === r && c(l.bottom) > c(v.top) || "bottom" === r && c(l.top) < c(v.bottom),
                     w = c(l.left) < c(e.left),
                     b = c(l.right) > c(e.right),
                     k = c(l.top) < c(e.top),
                     d = c(l.bottom) > c(e.bottom),
                     g = "left" === r && w || "right" === r && b || "top" === r && k || "bottom" === r && d,
                     y = -1 !== ["top", "bottom"].indexOf(r),
                     nt = !!i.flipVariations && (y && "start" === u && w || y && "end" === u && b || !y && "start" === u && k || !y && "end" === u && d);
                  (p || g || nt) && (t.flipped = !0, (p || g) && (r = f[h + 1]), nt && (u = gi(u)), t.placement = r + (u ? "-" + u : ""), t.offsets.popper = n({}, t.offsets.popper, yt(t.instance.popper, t.offsets.reference, t.placement)), t = pt(t.instance.modifiers, t, "flip"))
               }), t
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport"
         },
         inner: {
            order: 700,
            enabled: !1,
            fn: function (n) {
               var u = n.placement,
                  t = u.split("-")[0],
                  f = n.offsets,
                  r = f.popper,
                  o = f.reference,
                  e = -1 !== ["left", "right"].indexOf(t),
                  s = -1 === ["top", "left"].indexOf(t);
               return r[e ? "left" : "top"] = o[t] - (s ? r[e ? "width" : "height"] : 0), n.placement = a(u), n.offsets.popper = i(r), n
            }
         },
         hide: {
            order: 800,
            enabled: !0,
            fn: function (n) {
               if (!dt(n.instance.modifiers, "hide", "preventOverflow")) return n;
               var t = n.offsets.reference,
                  i = h(n.instance.modifiers, function (n) {
                     return "preventOverflow" === n.name
                  }).boundaries;
               if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                  if (!0 === n.hide) return n;
                  n.hide = !0;
                  n.attributes["x-out-of-boundaries"] = ""
               } else {
                  if (!1 === n.hide) return n;
                  n.hide = !1;
                  n.attributes["x-out-of-boundaries"] = !1
               }
               return n
            }
         },
         computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (t, i) {
               var g = i.x,
                  nt = i.y,
                  tt = t.offsets.popper,
                  c = h(t.instance.modifiers, function (n) {
                     return "applyStyle" === n.name
                  }).gpuAcceleration,
                  v, y, p;
               void 0 !== c && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
               var l, a, it = void 0 === c ? i.gpuAcceleration : c,
                  e = f(t.instance.popper),
                  b = w(e),
                  r = {
                     position: tt.position
                  },
                  u = di(t, 2 > window.devicePixelRatio || !or),
                  o = "bottom" === g ? "top" : "bottom",
                  s = "right" === nt ? "left" : "right",
                  k = d("transform");
               return (a = "bottom" == o ? "HTML" === e.nodeName ? -e.clientHeight + u.bottom : -b.height + u.bottom : u.top, l = "right" == s ? "HTML" === e.nodeName ? -e.clientWidth + u.right : -b.width + u.right : u.left, it && k) ? (r[k] = "translate3d(" + l + "px, " + a + "px, 0)", r[o] = 0, r[s] = 0, r.willChange = "transform") : (v = "bottom" == o ? -1 : 1, y = "right" == s ? -1 : 1, r[o] = a * v, r[s] = l * y, r.willChange = o + ", " + s), p = {
                  "x-placement": t.placement
               }, t.attributes = n({}, p, t.attributes), t.styles = n({}, r, t.styles), t.arrowStyles = n({}, t.offsets.arrow, t.arrowStyles), t
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right"
         },
         applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (n) {
               return nt(n.instance.popper, n.styles), ki(n.instance.popper, n.attributes), n.arrowElement && Object.keys(n.arrowStyles).length && nt(n.arrowElement, n.arrowStyles), n
            },
            onLoad: function (n, t, i, r, u) {
               var f = at(u, t, n, i.positionFixed),
                  e = lt(i.placement, f, t, n, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
               return t.setAttribute("x-placement", e), nt(t, {
                  position: i.positionFixed ? "fixed" : "absolute"
               }), i
            },
            gpuAcceleration: void 0
         }
      }
   }, v
});
/*!
 * Bootstrap v4.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function (n, t) {
   "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((n = n || self).bootstrap = {}, n.jQuery, n.Popper)
}(this, function (n, t, i) {
   "use strict";

   function eu(n, t) {
      for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
   }

   function c(n, t, i) {
      return t && eu(n.prototype, t), i && eu(n, i), n
   }

   function ou(n, t) {
      var r = Object.keys(n),
         i;
      return Object.getOwnPropertySymbols && (i = Object.getOwnPropertySymbols(n), t && (i = i.filter(function (t) {
         return Object.getOwnPropertyDescriptor(n, t).enumerable
      })), r.push.apply(r, i)), r
   }

   function f(n) {
      for (var t, i = 1; i < arguments.length; i++) t = null != arguments[i] ? arguments[i] : {}, i % 2 ? ou(Object(t), !0).forEach(function (i) {
         var r, u, f;
         r = n;
         f = t[u = i];
         u in r ? Object.defineProperty(r, u, {
            value: f,
            enumerable: !0,
            configurable: !0,
            writable: !0
         }) : r[u] = f
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : ou(Object(t)).forEach(function (i) {
         Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(t, i))
      });
      return n
   }

   function yf(n) {
      var u = this,
         i = !1;
      return t(this).one(r.TRANSITION_END, function () {
         i = !0
      }), setTimeout(function () {
         i || r.triggerTransitionEnd(u)
      }, n), this
   }

   function su(n, t, i) {
      if (0 === n.length) return n;
      if (i && "function" == typeof i) return i(n);
      for (var u = (new window.DOMParser).parseFromString(n, "text/html"), e = Object.keys(t), f = [].slice.call(u.body.querySelectorAll("*")), o = function (n) {
            var i = f[n],
               o = i.nodeName.toLowerCase(),
               r, u;
            if (-1 === e.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
            r = [].slice.call(i.attributes);
            u = [].concat(t["*"] || [], t[o] || []);
            r.forEach(function (n) {
               (function (n, t) {
                  var i = n.nodeName.toLowerCase();
                  if (-1 !== t.indexOf(i)) return -1 === hs.indexOf(i) || Boolean(n.nodeValue.match(cs) || n.nodeValue.match(ls));
                  for (var u = t.filter(function (n) {
                        return n instanceof RegExp
                     }), r = 0, f = u.length; r < f; r++)
                     if (i.match(u[r])) return !0;
                  return !1
               })(n, u) || i.removeAttribute(n.nodeName)
            })
         }, r = 0, s = f.length; r < s; r++) o(r);
      return u.body.innerHTML
   }
   var vt, r;
   t = t && t.hasOwnProperty("default") ? t.default : t;
   i = i && i.hasOwnProperty("default") ? i.default : i;
   vt = "transitionend";
   r = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function (n) {
         for (; n += ~~(1e6 * Math.random()), document.getElementById(n););
         return n
      },
      getSelectorFromElement: function (n) {
         var t = n.getAttribute("data-target"),
            i;
         t && "#" !== t || (i = n.getAttribute("href"), t = i && "#" !== i ? i.trim() : "");
         try {
            return document.querySelector(t) ? t : null
         } catch (n) {
            return null
         }
      },
      getTransitionDurationFromElement: function (n) {
         if (!n) return 0;
         var i = t(n).css("transition-duration"),
            r = t(n).css("transition-delay"),
            u = parseFloat(i),
            f = parseFloat(r);
         return u || f ? (i = i.split(",")[0], r = r.split(",")[0], 1e3 * (parseFloat(i) + parseFloat(r))) : 0
      },
      reflow: function (n) {
         return n.offsetHeight
      },
      triggerTransitionEnd: function (n) {
         t(n).trigger(vt)
      },
      supportsTransitionEnd: function () {
         return Boolean(vt)
      },
      isElement: function (n) {
         return (n[0] || n).nodeType
      },
      typeCheckConfig: function (n, t, i) {
         var u, e;
         for (u in i)
            if (Object.prototype.hasOwnProperty.call(i, u)) {
               var o = i[u],
                  f = t[u],
                  s = f && r.isElement(f) ? "element" : (e = f, {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase());
               if (!new RegExp(o).test(s)) throw new Error(n.toUpperCase() + ': Option "' + u + '" provided type "' + s + '" but expected type "' + o + '".');
            }
      },
      findShadowRoot: function (n) {
         if (!document.documentElement.attachShadow) return null;
         if ("function" != typeof n.getRootNode) return n instanceof ShadowRoot ? n : n.parentNode ? r.findShadowRoot(n.parentNode) : null;
         var t = n.getRootNode();
         return t instanceof ShadowRoot ? t : null
      },
      jQueryDetection: function () {
         if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
         var n = t.fn.jquery.split(" ")[0].split(".");
         if (n[0] < 2 && n[1] < 9 || 1 === n[0] && 9 === n[1] && n[2] < 1 || 4 <= n[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
      }
   };
   r.jQueryDetection();
   t.fn.emulateTransitionEnd = yf;
   t.event.special[r.TRANSITION_END] = {
      bindType: vt,
      delegateType: vt,
      handle: function (n) {
         if (t(n.target).is(this)) return n.handleObj.handler.apply(this, arguments)
      }
   };
   var yt = "alert",
      pi = "bs.alert",
      ar = "." + pi,
      pf = t.fn[yt],
      vr = {
         CLOSE: "close" + ar,
         CLOSED: "closed" + ar,
         CLICK_DATA_API: "click" + ar + ".data-api"
      },
      wf = "alert",
      bf = "fade",
      kf = "show",
      rt = function () {
         function n(n) {
            this._element = n
         }
         var i = n.prototype;
         return i.close = function (n) {
            var t = this._element;
            n && (t = this._getRootElement(n));
            this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
         }, i.dispose = function () {
            t.removeData(this._element, pi);
            this._element = null
         }, i._getRootElement = function (n) {
            var u = r.getSelectorFromElement(n),
               i = !1;
            return u && (i = document.querySelector(u)), i = i || t(n).closest("." + wf)[0]
         }, i._triggerCloseEvent = function (n) {
            var i = t.Event(vr.CLOSE);
            return t(n).trigger(i), i
         }, i._removeElement = function (n) {
            var u = this,
               i;
            (t(n).removeClass(kf), t(n).hasClass(bf)) ? (i = r.getTransitionDurationFromElement(n), t(n).one(r.TRANSITION_END, function (t) {
               return u._destroyElement(n, t)
            }).emulateTransitionEnd(i)) : this._destroyElement(n)
         }, i._destroyElement = function (n) {
            t(n).detach().trigger(vr.CLOSED).remove()
         }, n._jQueryInterface = function (i) {
            return this.each(function () {
               var u = t(this),
                  r = u.data(pi);
               r || (r = new n(this), u.data(pi, r));
               "close" === i && r[i](this)
            })
         }, n._handleDismiss = function (n) {
            return function (t) {
               t && t.preventDefault();
               n.close(this)
            }
         }, c(n, null, [{
            key: "VERSION",
            get: function () {
               return "4.4.1"
            }
         }]), n
      }();
   t(document).on(vr.CLICK_DATA_API, '[data-dismiss="alert"]', rt._handleDismiss(new rt));
   t.fn[yt] = rt._jQueryInterface;
   t.fn[yt].Constructor = rt;
   t.fn[yt].noConflict = function () {
      return t.fn[yt] = pf, rt._jQueryInterface
   };
   var pt = "button",
      wi = "bs.button",
      bi = "." + wi,
      ki = ".data-api",
      df = t.fn[pt],
      y = "active",
      gf = "btn",
      ne = "focus",
      hu = '[data-toggle^="button"]',
      te = '[data-toggle="buttons"]',
      ie = '[data-toggle="button"]',
      re = '[data-toggle="buttons"] .btn',
      yr = 'input:not([type="hidden"])',
      ue = ".active",
      cu = ".btn",
      pr = {
         CLICK_DATA_API: "click" + bi + ki,
         FOCUS_BLUR_DATA_API: "focus" + bi + ki + " blur" + bi + ki,
         LOAD_DATA_API: "load" + bi + ki
      },
      wt = function () {
         function n(n) {
            this._element = n
         }
         var i = n.prototype;
         return i.toggle = function () {
            var i = !0,
               u = !0,
               f = t(this._element).closest(te)[0],
               n, r;
            f && (n = this._element.querySelector(yr), n && ("radio" === n.type ? n.checked && this._element.classList.contains(y) ? i = !1 : (r = f.querySelector(ue), r && t(r).removeClass(y)) : "checkbox" === n.type ? "LABEL" === this._element.tagName && n.checked === this._element.classList.contains(y) && (i = !1) : i = !1, i && (n.checked = !this._element.classList.contains(y), t(n).trigger("change")), n.focus(), u = !1));
            this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (u && this._element.setAttribute("aria-pressed", !this._element.classList.contains(y)), i && t(this._element).toggleClass(y))
         }, i.dispose = function () {
            t.removeData(this._element, wi);
            this._element = null
         }, n._jQueryInterface = function (i) {
            return this.each(function () {
               var r = t(this).data(wi);
               r || (r = new n(this), t(this).data(wi, r));
               "toggle" === i && r[i]()
            })
         }, c(n, null, [{
            key: "VERSION",
            get: function () {
               return "4.4.1"
            }
         }]), n
      }();
   t(document).on(pr.CLICK_DATA_API, hu, function (n) {
      var i = n.target,
         r;
      if (t(i).hasClass(gf) || (i = t(i).closest(cu)[0]), !i || i.hasAttribute("disabled") || i.classList.contains("disabled")) n.preventDefault();
      else {
         if (r = i.querySelector(yr), r && (r.hasAttribute("disabled") || r.classList.contains("disabled"))) return void n.preventDefault();
         wt._jQueryInterface.call(t(i), "toggle")
      }
   }).on(pr.FOCUS_BLUR_DATA_API, hu, function (n) {
      var i = t(n.target).closest(cu)[0];
      t(i).toggleClass(ne, /^focus(in)?$/.test(n.type))
   });
   t(window).on(pr.LOAD_DATA_API, function () {
      for (var n, u, t, e, i, r = [].slice.call(document.querySelectorAll(re)), f = 0, o = r.length; f < o; f++) n = r[f], u = n.querySelector(yr), u.checked || u.hasAttribute("checked") ? n.classList.add(y) : n.classList.remove(y);
      for (t = 0, e = (r = [].slice.call(document.querySelectorAll(ie))).length; t < e; t++) i = r[t], "true" === i.getAttribute("aria-pressed") ? i.classList.add(y) : i.classList.remove(y)
   });
   t.fn[pt] = wt._jQueryInterface;
   t.fn[pt].Constructor = wt;
   t.fn[pt].noConflict = function () {
      return t.fn[pt] = df, wt._jQueryInterface
   };
   var ut = "carousel",
      bt = "bs.carousel",
      e = "." + bt,
      lu = ".data-api",
      fe = t.fn[ut],
      wr = {
         interval: 5e3,
         keyboard: !0,
         slide: !1,
         pause: "hover",
         wrap: !0,
         touch: !0
      },
      ee = {
         interval: "(number|boolean)",
         keyboard: "boolean",
         slide: "(boolean|string)",
         pause: "(string|boolean)",
         wrap: "boolean",
         touch: "boolean"
      },
      di = "next",
      gi = "prev",
      oe = "left",
      se = "right",
      o = {
         SLIDE: "slide" + e,
         SLID: "slid" + e,
         KEYDOWN: "keydown" + e,
         MOUSEENTER: "mouseenter" + e,
         MOUSELEAVE: "mouseleave" + e,
         TOUCHSTART: "touchstart" + e,
         TOUCHMOVE: "touchmove" + e,
         TOUCHEND: "touchend" + e,
         POINTERDOWN: "pointerdown" + e,
         POINTERUP: "pointerup" + e,
         DRAG_START: "dragstart" + e,
         LOAD_DATA_API: "load" + e + lu,
         CLICK_DATA_API: "click" + e + lu
      },
      he = "carousel",
      b = "active",
      ce = "slide",
      le = "carousel-item-right",
      ae = "carousel-item-left",
      ve = "carousel-item-next",
      ye = "carousel-item-prev",
      pe = "pointer-event",
      we = ".active",
      br = ".active.carousel-item",
      be = ".carousel-item",
      ke = ".carousel-item img",
      de = ".carousel-item-next, .carousel-item-prev",
      ge = ".carousel-indicators",
      no = '[data-ride="carousel"]',
      au = {
         TOUCH: "touch",
         PEN: "pen"
      },
      ft = function () {
         function i(n, t) {
            this._items = null;
            this._interval = null;
            this._activeElement = null;
            this._isPaused = !1;
            this._isSliding = !1;
            this.touchTimeout = null;
            this.touchStartX = 0;
            this.touchDeltaX = 0;
            this._config = this._getConfig(t);
            this._element = n;
            this._indicatorsElement = this._element.querySelector(ge);
            this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints;
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);
            this._addEventListeners()
         }
         var n = i.prototype;
         return n.next = function () {
            this._isSliding || this._slide(di)
         }, n.nextWhenVisible = function () {
            !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
         }, n.prev = function () {
            this._isSliding || this._slide(gi)
         }, n.pause = function (n) {
            n || (this._isPaused = !0);
            this._element.querySelector(de) && (r.triggerTransitionEnd(this._element), this.cycle(!0));
            clearInterval(this._interval);
            this._interval = null
         }, n.cycle = function (n) {
            n || (this._isPaused = !1);
            this._interval && (clearInterval(this._interval), this._interval = null);
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
         }, n.to = function (n) {
            var u = this,
               i, r;
            if (this._activeElement = this._element.querySelector(br), i = this._getItemIndex(this._activeElement), !(n > this._items.length - 1 || n < 0))
               if (this._isSliding) t(this._element).one(o.SLID, function () {
                  return u.to(n)
               });
               else {
                  if (i === n) return this.pause(), void this.cycle();
                  r = i < n ? di : gi;
                  this._slide(r, this._items[n])
               }
         }, n.dispose = function () {
            t(this._element).off(e);
            t.removeData(this._element, bt);
            this._items = null;
            this._config = null;
            this._element = null;
            this._interval = null;
            this._isPaused = null;
            this._isSliding = null;
            this._activeElement = null;
            this._indicatorsElement = null
         }, n._getConfig = function (n) {
            return n = f({}, wr, {}, n), r.typeCheckConfig(ut, n, ee), n
         }, n._handleSwipe = function () {
            var t = Math.abs(this.touchDeltaX),
               n;
            t <= 40 || (n = t / this.touchDeltaX, (this.touchDeltaX = 0) < n && this.prev(), n < 0 && this.next())
         }, n._addEventListeners = function () {
            var n = this;
            this._config.keyboard && t(this._element).on(o.KEYDOWN, function (t) {
               return n._keydown(t)
            });
            "hover" === this._config.pause && t(this._element).on(o.MOUSEENTER, function (t) {
               return n.pause(t)
            }).on(o.MOUSELEAVE, function (t) {
               return n.cycle(t)
            });
            this._config.touch && this._addTouchEventListeners()
         }, n._addTouchEventListeners = function () {
            var n = this,
               i, r;
            this._touchSupported && (i = function (t) {
               n._pointerEvent && au[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
            }, r = function (t) {
               n._pointerEvent && au[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX);
               n._handleSwipe();
               "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) {
                  return n.cycle(t)
               }, 500 + n._config.interval))
            }, t(this._element.querySelectorAll(ke)).on(o.DRAG_START, function (n) {
               return n.preventDefault()
            }), this._pointerEvent ? (t(this._element).on(o.POINTERDOWN, function (n) {
               return i(n)
            }), t(this._element).on(o.POINTERUP, function (n) {
               return r(n)
            }), this._element.classList.add(pe)) : (t(this._element).on(o.TOUCHSTART, function (n) {
               return i(n)
            }), t(this._element).on(o.TOUCHMOVE, function (t) {
               return function (t) {
                  n.touchDeltaX = t.originalEvent.touches && 1 < t.originalEvent.touches.length ? 0 : t.originalEvent.touches[0].clientX - n.touchStartX
               }(t)
            }), t(this._element).on(o.TOUCHEND, function (n) {
               return r(n)
            })))
         }, n._keydown = function (n) {
            if (!/input|textarea/i.test(n.target.tagName)) switch (n.which) {
               case 37:
                  n.preventDefault();
                  this.prev();
                  break;
               case 39:
                  n.preventDefault();
                  this.next()
            }
         }, n._getItemIndex = function (n) {
            return this._items = n && n.parentNode ? [].slice.call(n.parentNode.querySelectorAll(be)) : [], this._items.indexOf(n)
         }, n._getItemByDirection = function (n, t) {
            var u = n === di,
               f = n === gi,
               i = this._getItemIndex(t),
               e = this._items.length - 1,
               r;
            return (f && 0 === i || u && i === e) && !this._config.wrap ? t : (r = (i + (n === gi ? -1 : 1)) % this._items.length, -1 == r ? this._items[this._items.length - 1] : this._items[r])
         }, n._triggerSlideEvent = function (n, i) {
            var u = this._getItemIndex(n),
               f = this._getItemIndex(this._element.querySelector(br)),
               r = t.Event(o.SLIDE, {
                  relatedTarget: n,
                  direction: i,
                  from: f,
                  to: u
               });
            return t(this._element).trigger(r), r
         }, n._setActiveIndicatorElement = function (n) {
            var r, i;
            this._indicatorsElement && (r = [].slice.call(this._indicatorsElement.querySelectorAll(we)), t(r).removeClass(b), i = this._indicatorsElement.children[this._getItemIndex(n)], i && t(i).addClass(b))
         }, n._slide = function (n, i) {
            var e, s, h, a = this,
               f = this._element.querySelector(br),
               p = this._getItemIndex(f),
               u = i || f && this._getItemByDirection(n, f),
               w = this._getItemIndex(u),
               v = Boolean(this._interval),
               c, l, y;
            (h = n === di ? (e = ae, s = ve, oe) : (e = le, s = ye, se), u && t(u).hasClass(b)) ? this._isSliding = !1: !this._triggerSlideEvent(u, h).isDefaultPrevented() && f && u && (this._isSliding = !0, v && this.pause(), this._setActiveIndicatorElement(u), c = t.Event(o.SLID, {
               relatedTarget: u,
               direction: h,
               from: p,
               to: w
            }), t(this._element).hasClass(ce) ? (t(u).addClass(s), r.reflow(u), t(f).addClass(e), t(u).addClass(e), l = parseInt(u.getAttribute("data-interval"), 10), l ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = l) : this._config.interval = this._config.defaultInterval || this._config.interval, y = r.getTransitionDurationFromElement(f), t(f).one(r.TRANSITION_END, function () {
               t(u).removeClass(e + " " + s).addClass(b);
               t(f).removeClass(b + " " + s + " " + e);
               a._isSliding = !1;
               setTimeout(function () {
                  return t(a._element).trigger(c)
               }, 0)
            }).emulateTransitionEnd(y)) : (t(f).removeClass(b), t(u).addClass(b), this._isSliding = !1, t(this._element).trigger(c)), v && this.cycle())
         }, i._jQueryInterface = function (n) {
            return this.each(function () {
               var r = t(this).data(bt),
                  u = f({}, wr, {}, t(this).data()),
                  e;
               if ("object" == typeof n && (u = f({}, u, {}, n)), e = "string" == typeof n ? n : u.slide, r || (r = new i(this, u), t(this).data(bt, r)), "number" == typeof n) r.to(n);
               else if ("string" == typeof e) {
                  if ("undefined" == typeof r[e]) throw new TypeError('No method named "' + e + '"');
                  r[e]()
               } else u.interval && u.ride && (r.pause(), r.cycle())
            })
         }, i._dataApiClickHandler = function (n) {
            var s = r.getSelectorFromElement(this),
               u, o, e;
            s && (u = t(s)[0], u && t(u).hasClass(he) && (o = f({}, t(u).data(), {}, t(this).data()), e = this.getAttribute("data-slide-to"), e && (o.interval = !1), i._jQueryInterface.call(t(u), o), e && t(u).data(bt).to(e), n.preventDefault()))
         }, c(i, null, [{
            key: "VERSION",
            get: function () {
               return "4.4.1"
            }
         }, {
            key: "Default",
            get: function () {
               return wr
            }
         }]), i
      }();
   t(document).on(o.CLICK_DATA_API, "[data-slide], [data-slide-to]", ft._dataApiClickHandler);
   t(window).on(o.LOAD_DATA_API, function () {
      for (var n, r = [].slice.call(document.querySelectorAll(no)), i = 0, u = r.length; i < u; i++) n = t(r[i]), ft._jQueryInterface.call(n, n.data())
   });
   t.fn[ut] = ft._jQueryInterface;
   t.fn[ut].Constructor = ft;
   t.fn[ut].noConflict = function () {
      return t.fn[ut] = fe, ft._jQueryInterface
   };
   var et = "collapse",
      k = "bs.collapse",
      kt = "." + k,
      to = t.fn[et],
      kr = {
         toggle: !0,
         parent: ""
      },
      io = {
         toggle: "boolean",
         parent: "(string|element)"
      },
      dt = {
         SHOW: "show" + kt,
         SHOWN: "shown" + kt,
         HIDE: "hide" + kt,
         HIDDEN: "hidden" + kt,
         CLICK_DATA_API: "click" + kt + ".data-api"
      },
      d = "show",
      gt = "collapse",
      nr = "collapsing",
      dr = "collapsed",
      vu = "width",
      ro = "height",
      uo = ".show, .collapsing",
      yu = '[data-toggle="collapse"]',
      ni = function () {
         function i(n, t) {
            this._isTransitioning = !1;
            this._element = n;
            this._config = this._getConfig(t);
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'));
            for (var f = [].slice.call(document.querySelectorAll(yu)), i = 0, o = f.length; i < o; i++) {
               var e = f[i],
                  u = r.getSelectorFromElement(e),
                  s = [].slice.call(document.querySelectorAll(u)).filter(function (t) {
                     return t === n
                  });
               null !== u && 0 < s.length && (this._selector = u, this._triggerArray.push(e))
            }
            this._parent = this._config.parent ? this._getParent() : null;
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray);
            this._config.toggle && this.toggle()
         }
         var n = i.prototype;
         return n.toggle = function () {
            t(this._element).hasClass(d) ? this.hide() : this.show()
         }, n.show = function () {
            var n, e, u = this,
               o, f, s, h;
            this._isTransitioning || t(this._element).hasClass(d) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(uo)).filter(function (n) {
               return "string" == typeof u._config.parent ? n.getAttribute("data-parent") === u._config.parent : n.classList.contains(gt)
            })).length && (n = null), n && (e = t(n).not(this._selector).data(k)) && e._isTransitioning) || (o = t.Event(dt.SHOW), (t(this._element).trigger(o), o.isDefaultPrevented()) || (n && (i._jQueryInterface.call(t(n).not(this._selector), "hide"), e || t(n).data(k, null)), f = this._getDimension(), t(this._element).removeClass(gt).addClass(nr), this._element.style[f] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(dr).attr("aria-expanded", !0), this.setTransitioning(!0), s = "scroll" + (f[0].toUpperCase() + f.slice(1)), h = r.getTransitionDurationFromElement(this._element), t(this._element).one(r.TRANSITION_END, function () {
               t(u._element).removeClass(nr).addClass(gt).addClass(d);
               u._element.style[f] = "";
               u.setTransitioning(!1);
               t(u._element).trigger(dt.SHOWN)
            }).emulateTransitionEnd(h), this._element.style[f] = this._element[s] + "px"))
         }, n.hide = function () {
            var s = this,
               u, n, f, i, e, o, h;
            if (!this._isTransitioning && t(this._element).hasClass(d) && (u = t.Event(dt.HIDE), t(this._element).trigger(u), !u.isDefaultPrevented())) {
               if (n = this._getDimension(), this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", r.reflow(this._element), t(this._element).addClass(nr).removeClass(gt).removeClass(d), f = this._triggerArray.length, 0 < f)
                  for (i = 0; i < f; i++) e = this._triggerArray[i], o = r.getSelectorFromElement(e), null !== o && (t([].slice.call(document.querySelectorAll(o))).hasClass(d) || t(e).addClass(dr).attr("aria-expanded", !1));
               this.setTransitioning(!0);
               this._element.style[n] = "";
               h = r.getTransitionDurationFromElement(this._element);
               t(this._element).one(r.TRANSITION_END, function () {
                  s.setTransitioning(!1);
                  t(s._element).removeClass(nr).addClass(gt).trigger(dt.HIDDEN)
               }).emulateTransitionEnd(h)
            }
         }, n.setTransitioning = function (n) {
            this._isTransitioning = n
         }, n.dispose = function () {
            t.removeData(this._element, k);
            this._config = null;
            this._parent = null;
            this._element = null;
            this._triggerArray = null;
            this._isTransitioning = null
         }, n._getConfig = function (n) {
            return (n = f({}, kr, {}, n)).toggle = Boolean(n.toggle), r.typeCheckConfig(et, n, io), n
         }, n._getDimension = function () {
            return t(this._element).hasClass(vu) ? vu : ro
         }, n._getParent = function () {
            var n, e = this,
               u, f;
            return r.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent), u = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', f = [].slice.call(n.querySelectorAll(u)), t(f).each(function (n, t) {
               e._addAriaAndCollapsedClass(i._getTargetFromElement(t), [t])
            }), n
         }, n._addAriaAndCollapsedClass = function (n, i) {
            var r = t(n).hasClass(d);
            i.length && t(i).toggleClass(dr, !r).attr("aria-expanded", r)
         }, i._getTargetFromElement = function (n) {
            var t = r.getSelectorFromElement(n);
            return t ? document.querySelector(t) : null
         }, i._jQueryInterface = function (n) {
            return this.each(function () {
               var u = t(this),
                  r = u.data(k),
                  e = f({}, kr, {}, u.data(), {}, "object" == typeof n && n ? n : {});
               if (!r && e.toggle && /show|hide/.test(n) && (e.toggle = !1), r || (r = new i(this, e), u.data(k, r)), "string" == typeof n) {
                  if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                  r[n]()
               }
            })
         }, c(i, null, [{
            key: "VERSION",
            get: function () {
               return "4.4.1"
            }
         }, {
            key: "Default",
            get: function () {
               return kr
            }
         }]), i
      }();
   t(document).on(dt.CLICK_DATA_API, yu, function (n) {
      "A" === n.currentTarget.tagName && n.preventDefault();
      var i = t(this),
         u = r.getSelectorFromElement(this),
         f = [].slice.call(document.querySelectorAll(u));
      t(f).each(function () {
         var n = t(this),
            r = n.data(k) ? "toggle" : i.data();
         ni._jQueryInterface.call(n, r)
      })
   });
   t.fn[et] = ni._jQueryInterface;
   t.fn[et].Constructor = ni;
   t.fn[et].noConflict = function () {
      return t.fn[et] = to, ni._jQueryInterface
   };
   var ot = "dropdown",
      ti = "bs.dropdown",
      p = "." + ti,
      gr = ".data-api",
      fo = t.fn[ot],
      eo = new RegExp("38|40|27"),
      s = {
         HIDE: "hide" + p,
         HIDDEN: "hidden" + p,
         SHOW: "show" + p,
         SHOWN: "shown" + p,
         CLICK: "click" + p,
         CLICK_DATA_API: "click" + p + gr,
         KEYDOWN_DATA_API: "keydown" + p + gr,
         KEYUP_DATA_API: "keyup" + p + gr
      },
      tr = "disabled",
      l = "show",
      oo = "dropup",
      so = "dropright",
      ho = "dropleft",
      pu = "dropdown-menu-right",
      co = "position-static",
      ir = '[data-toggle="dropdown"]',
      nu = ".dropdown-menu",
      lo = ".navbar-nav",
      ao = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      vo = "top-start",
      yo = "top-end",
      po = "bottom-start",
      wo = "bottom-end",
      bo = "right-start",
      ko = "left-start",
      go = {
         offset: 0,
         flip: !0,
         boundary: "scrollParent",
         reference: "toggle",
         display: "dynamic",
         popperConfig: null
      },
      ns = {
         offset: "(number|string|function)",
         flip: "boolean",
         boundary: "(string|element)",
         reference: "(string|element)",
         display: "string",
         popperConfig: "(null|object)"
      },
      w = function () {
         function n(n, t) {
            this._element = n;
            this._popper = null;
            this._config = this._getConfig(t);
            this._menu = this._getMenuElement();
            this._inNavbar = this._detectNavbar();
            this._addEventListeners()
         }
         var u = n.prototype;
         return u.toggle = function () {
            if (!this._element.disabled && !t(this._element).hasClass(tr)) {
               var i = t(this._menu).hasClass(l);
               n._clearMenus();
               i || this.show(!0)
            }
         }, u.show = function (u) {
            var f;
            if (void 0 === u && (u = !1), !(this._element.disabled || t(this._element).hasClass(tr) || t(this._menu).hasClass(l))) {
               var o = {
                     relatedTarget: this._element
                  },
                  h = t.Event(s.SHOW, o),
                  e = n._getParentFromElement(this._element);
               if (t(e).trigger(h), !h.isDefaultPrevented()) {
                  if (!this._inNavbar && u) {
                     if ("undefined" == typeof i) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                     f = this._element;
                     "parent" === this._config.reference ? f = e : r.isElement(this._config.reference) && (f = this._config.reference, "undefined" != typeof this._config.reference.jquery && (f = this._config.reference[0]));
                     "scrollParent" !== this._config.boundary && t(e).addClass(co);
                     this._popper = new i(f, this._menu, this._getPopperConfig())
                  }
                  "ontouchstart" in document.documentElement && 0 === t(e).closest(lo).length && t(document.body).children().on("mouseover", null, t.noop);
                  this._element.focus();
                  this._element.setAttribute("aria-expanded", !0);
                  t(this._menu).toggleClass(l);
                  t(e).toggleClass(l).trigger(t.Event(s.SHOWN, o))
               }
            }
         }, u.hide = function () {
            if (!this._element.disabled && !t(this._element).hasClass(tr) && t(this._menu).hasClass(l)) {
               var i = {
                     relatedTarget: this._element
                  },
                  r = t.Event(s.HIDE, i),
                  u = n._getParentFromElement(this._element);
               t(u).trigger(r);
               r.isDefaultPrevented() || (this._popper && this._popper.destroy(), t(this._menu).toggleClass(l), t(u).toggleClass(l).trigger(t.Event(s.HIDDEN, i)))
            }
         }, u.dispose = function () {
            t.removeData(this._element, ti);
            t(this._element).off(p);
            this._element = null;
            (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
         }, u.update = function () {
            this._inNavbar = this._detectNavbar();
            null !== this._popper && this._popper.scheduleUpdate()
         }, u._addEventListeners = function () {
            var n = this;
            t(this._element).on(s.CLICK, function (t) {
               t.preventDefault();
               t.stopPropagation();
               n.toggle()
            })
         }, u._getConfig = function (n) {
            return n = f({}, this.constructor.Default, {}, t(this._element).data(), {}, n), r.typeCheckConfig(ot, n, this.constructor.DefaultType), n
         }, u._getMenuElement = function () {
            if (!this._menu) {
               var t = n._getParentFromElement(this._element);
               t && (this._menu = t.querySelector(nu))
            }
            return this._menu
         }, u._getPlacement = function () {
            var i = t(this._element.parentNode),
               n = po;
            return i.hasClass(oo) ? (n = vo, t(this._menu).hasClass(pu) && (n = yo)) : i.hasClass(so) ? n = bo : i.hasClass(ho) ? n = ko : t(this._menu).hasClass(pu) && (n = wo), n
         }, u._detectNavbar = function () {
            return 0 < t(this._element).closest(".navbar").length
         }, u._getOffset = function () {
            var t = this,
               n = {};
            return "function" == typeof this._config.offset ? n.fn = function (n) {
               return n.offsets = f({}, n.offsets, {}, t._config.offset(n.offsets, t._element) || {}), n
            } : n.offset = this._config.offset, n
         }, u._getPopperConfig = function () {
            var n = {
               placement: this._getPlacement(),
               modifiers: {
                  offset: this._getOffset(),
                  flip: {
                     enabled: this._config.flip
                  },
                  preventOverflow: {
                     boundariesElement: this._config.boundary
                  }
               }
            };
            return "static" === this._config.display && (n.modifiers.applyStyle = {
               enabled: !1
            }), f({}, n, {}, this._config.popperConfig)
         }, n._jQueryInterface = function (i) {
            return this.each(function () {
               var r = t(this).data(ti);
               if (r || (r = new n(this, "object" == typeof i ? i : null), t(this).data(ti, r)), "string" == typeof i) {
                  if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"');
                  r[i]()
               }
            })
         }, n._clearMenus = function (i) {
            var c, o;
            if (!i || 3 !== i.which && ("keyup" !== i.type || 9 === i.which))
               for (var u = [].slice.call(document.querySelectorAll(ir)), r = 0, a = u.length; r < a; r++) {
                  var f = n._getParentFromElement(u[r]),
                     e = t(u[r]).data(ti),
                     h = {
                        relatedTarget: u[r]
                     };
                  (i && "click" === i.type && (h.clickEvent = i), e) && (c = e._menu, !t(f).hasClass(l) || i && ("click" === i.type && /input|textarea/i.test(i.target.tagName) || "keyup" === i.type && 9 === i.which) && t.contains(f, i.target) || (o = t.Event(s.HIDE, h), t(f).trigger(o), o.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), u[r].setAttribute("aria-expanded", "false"), e._popper && e._popper.destroy(), t(c).removeClass(l), t(f).removeClass(l).trigger(t.Event(s.HIDDEN, h)))))
               }
         }, n._getParentFromElement = function (n) {
            var t, i = r.getSelectorFromElement(n);
            return i && (t = document.querySelector(i)), t || n.parentNode
         }, n._dataApiKeydownHandler = function (i) {
            var f, e, u, r, o;
            (/input|textarea/i.test(i.target.tagName) ? 32 === i.which || 27 !== i.which && (40 !== i.which && 38 !== i.which || t(i.target).closest(nu).length) : !eo.test(i.which)) || (i.preventDefault(), i.stopPropagation(), this.disabled || t(this).hasClass(tr)) || (f = n._getParentFromElement(this), e = t(f).hasClass(l), (e || 27 !== i.which) && (e && (!e || 27 !== i.which && 32 !== i.which) ? (u = [].slice.call(f.querySelectorAll(ao)).filter(function (n) {
               return t(n).is(":visible")
            }), 0 !== u.length && (r = u.indexOf(i.target), 38 === i.which && 0 < r && r--, 40 === i.which && r < u.length - 1 && r++, r < 0 && (r = 0), u[r].focus())) : (27 === i.which && (o = f.querySelector(ir), t(o).trigger("focus")), t(this).trigger("click"))))
         }, c(n, null, [{
            key: "VERSION",
            get: function () {
               return "4.4.1"
            }
         }, {
            key: "Default",
            get: function () {
               return go
            }
         }, {
            key: "DefaultType",
            get: function () {
               return ns
            }
         }]), n
      }();
   t(document).on(s.KEYDOWN_DATA_API, ir, w._dataApiKeydownHandler).on(s.KEYDOWN_DATA_API, nu, w._dataApiKeydownHandler).on(s.CLICK_DATA_API + " " + s.KEYUP_DATA_API, w._clearMenus).on(s.CLICK_DATA_API, ir, function (n) {
      n.preventDefault();
      n.stopPropagation();
      w._jQueryInterface.call(t(this), "toggle")
   }).on(s.CLICK_DATA_API, ".dropdown form", function (n) {
      n.stopPropagation()
   });
   t.fn[ot] = w._jQueryInterface;
   t.fn[ot].Constructor = w;
   t.fn[ot].noConflict = function () {
      return t.fn[ot] = fo, w._jQueryInterface
   };
   var st = "modal",
      ii = "bs.modal",
      h = "." + ii,
      ts = t.fn[st],
      tu = {
         backdrop: !0,
         keyboard: !0,
         focus: !0,
         show: !0
      },
      is = {
         backdrop: "(boolean|string)",
         keyboard: "boolean",
         focus: "boolean",
         show: "boolean"
      },
      u = {
         HIDE: "hide" + h,
         HIDE_PREVENTED: "hidePrevented" + h,
         HIDDEN: "hidden" + h,
         SHOW: "show" + h,
         SHOWN: "shown" + h,
         FOCUSIN: "focusin" + h,
         RESIZE: "resize" + h,
         CLICK_DISMISS: "click.dismiss" + h,
         KEYDOWN_DISMISS: "keydown.dismiss" + h,
         MOUSEUP_DISMISS: "mouseup.dismiss" + h,
         MOUSEDOWN_DISMISS: "mousedown.dismiss" + h,
         CLICK_DATA_API: "click" + h + ".data-api"
      },
      rs = "modal-dialog-scrollable",
      us = "modal-scrollbar-measure",
      fs = "modal-backdrop",
      wu = "modal-open",
      ht = "fade",
      rr = "show",
      bu = "modal-static",
      es = ".modal-dialog",
      os = ".modal-body",
      ss = '[data-dismiss="modal"]',
      ku = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      du = ".sticky-top",
      ri = function () {
         function i(n, t) {
            this._config = this._getConfig(t);
            this._element = n;
            this._dialog = n.querySelector(es);
            this._backdrop = null;
            this._isShown = !1;
            this._isBodyOverflowing = !1;
            this._ignoreBackdropClick = !1;
            this._isTransitioning = !1;
            this._scrollbarWidth = 0
         }
         var n = i.prototype;
         return n.toggle = function (n) {
            return this._isShown ? this.hide() : this.show(n)
         }, n.show = function (n) {
            var i = this,
               r;
            this._isShown || this._isTransitioning || (t(this._element).hasClass(ht) && (this._isTransitioning = !0), r = t.Event(u.SHOW, {
               relatedTarget: n
            }), t(this._element).trigger(r), this._isShown || r.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(u.CLICK_DISMISS, ss, function (n) {
               return i.hide(n)
            }), t(this._dialog).on(u.MOUSEDOWN_DISMISS, function () {
               t(i._element).one(u.MOUSEUP_DISMISS, function (n) {
                  t(n.target).is(i._element) && (i._ignoreBackdropClick = !0)
               })
            }), this._showBackdrop(function () {
               return i._showElement(n)
            })))
         }, n.hide = function (n) {
            var o = this,
               i, f, e;
            (n && n.preventDefault(), this._isShown && !this._isTransitioning) && (i = t.Event(u.HIDE), (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) && (this._isShown = !1, f = t(this._element).hasClass(ht), (f && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(u.FOCUSIN), t(this._element).removeClass(rr), t(this._element).off(u.CLICK_DISMISS), t(this._dialog).off(u.MOUSEDOWN_DISMISS), f) ? (e = r.getTransitionDurationFromElement(this._element), t(this._element).one(r.TRANSITION_END, function (n) {
               return o._hideModal(n)
            }).emulateTransitionEnd(e)) : this._hideModal()))
         }, n.dispose = function () {
            [window, this._element, this._dialog].forEach(function (n) {
               return t(n).off(h)
            });
            t(document).off(u.FOCUSIN);
            t.removeData(this._element, ii);
            this._config = null;
            this._element = null;
            this._dialog = null;
            this._backdrop = null;
            this._isShown = null;
            this._isBodyOverflowing = null;
            this._ignoreBackdropClick = null;
            this._isTransitioning = null;
            this._scrollbarWidth = null
         }, n.handleUpdate = function () {
            this._adjustDialog()
         }, n._getConfig = function (n) {
            return n = f({}, tu, {}, n), r.typeCheckConfig(st, n, is), n
         }, n._triggerBackdropTransition = function () {
            var f = this,
               n, i;
            if ("static" === this._config.backdrop) {
               if (n = t.Event(u.HIDE_PREVENTED), t(this._element).trigger(n), n.defaultPrevented) return;
               this._element.classList.add(bu);
               i = r.getTransitionDurationFromElement(this._element);
               t(this._element).one(r.TRANSITION_END, function () {
                  f._element.classList.remove(bu)
               }).emulateTransitionEnd(i);
               this._element.focus()
            } else this.hide()
         }, n._showElement = function (n) {
            function f() {
               i._config.focus && i._element.focus();
               i._isTransitioning = !1;
               t(i._element).trigger(s)
            }
            var i = this,
               e = t(this._element).hasClass(ht),
               o = this._dialog ? this._dialog.querySelector(os) : null,
               s, h;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element);
            this._element.style.display = "block";
            this._element.removeAttribute("aria-hidden");
            this._element.setAttribute("aria-modal", !0);
            t(this._dialog).hasClass(rs) && o ? o.scrollTop = 0 : this._element.scrollTop = 0;
            e && r.reflow(this._element);
            t(this._element).addClass(rr);
            this._config.focus && this._enforceFocus();
            s = t.Event(u.SHOWN, {
               relatedTarget: n
            });
            e ? (h = r.getTransitionDurationFromElement(this._dialog), t(this._dialog).one(r.TRANSITION_END, f).emulateTransitionEnd(h)) : f()
         }, n._enforceFocus = function () {
            var n = this;
            t(document).off(u.FOCUSIN).on(u.FOCUSIN, function (i) {
               document !== i.target && n._element !== i.target && 0 === t(n._element).has(i.target).length && n._element.focus()
            })
         }, n._setEscapeEvent = function () {
            var n = this;
            this._isShown && this._config.keyboard ? t(this._element).on(u.KEYDOWN_DISMISS, function (t) {
               27 === t.which && n._triggerBackdropTransition()
            }) : this._isShown || t(this._element).off(u.KEYDOWN_DISMISS)
         }, n._setResizeEvent = function () {
            var n = this;
            this._isShown ? t(window).on(u.RESIZE, function (t) {
               return n.handleUpdate(t)
            }) : t(window).off(u.RESIZE)
         }, n._hideModal = function () {
            var n = this;
            this._element.style.display = "none";
            this._element.setAttribute("aria-hidden", !0);
            this._element.removeAttribute("aria-modal");
            this._isTransitioning = !1;
            this._showBackdrop(function () {
               t(document.body).removeClass(wu);
               n._resetAdjustments();
               n._resetScrollbar();
               t(n._element).trigger(u.HIDDEN)
            })
         }, n._removeBackdrop = function () {
            this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
         }, n._showBackdrop = function (n) {
            var i = this,
               f = t(this._element).hasClass(ht) ? ht : "",
               o, e, s;
            if (this._isShown && this._config.backdrop) {
               if (this._backdrop = document.createElement("div"), this._backdrop.className = fs, f && this._backdrop.classList.add(f), t(this._backdrop).appendTo(document.body), t(this._element).on(u.CLICK_DISMISS, function (n) {
                     i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : n.target === n.currentTarget && i._triggerBackdropTransition()
                  }), f && r.reflow(this._backdrop), t(this._backdrop).addClass(rr), !n) return;
               if (!f) return void n();
               o = r.getTransitionDurationFromElement(this._backdrop);
               t(this._backdrop).one(r.TRANSITION_END, n).emulateTransitionEnd(o)
            } else !this._isShown && this._backdrop ? (t(this._backdrop).removeClass(rr), e = function () {
               i._removeBackdrop();
               n && n()
            }, t(this._element).hasClass(ht) ? (s = r.getTransitionDurationFromElement(this._backdrop), t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(s)) : e()) : n && n()
         }, n._adjustDialog = function () {
            var n = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && n && (this._element.style.paddingLeft = this._scrollbarWidth + "px");
            this._isBodyOverflowing && !n && (this._element.style.paddingRight = this._scrollbarWidth + "px")
         }, n._resetAdjustments = function () {
            this._element.style.paddingLeft = "";
            this._element.style.paddingRight = ""
         }, n._checkScrollbar = function () {
            var n = document.body.getBoundingClientRect();
            this._isBodyOverflowing = n.left + n.right < window.innerWidth;
            this._scrollbarWidth = this._getScrollbarWidth()
         }, n._setScrollbar = function () {
            var n = this,
               i, r, u, f;
            this._isBodyOverflowing && (i = [].slice.call(document.querySelectorAll(ku)), r = [].slice.call(document.querySelectorAll(du)), t(i).each(function (i, r) {
               var u = r.style.paddingRight,
                  f = t(r).css("padding-right");
               t(r).data("padding-right", u).css("padding-right", parseFloat(f) + n._scrollbarWidth + "px")
            }), t(r).each(function (i, r) {
               var u = r.style.marginRight,
                  f = t(r).css("margin-right");
               t(r).data("margin-right", u).css("margin-right", parseFloat(f) - n._scrollbarWidth + "px")
            }), u = document.body.style.paddingRight, f = t(document.body).css("padding-right"), t(document.body).data("padding-right", u).css("padding-right", parseFloat(f) + this._scrollbarWidth + "px"));
            t(document.body).addClass(wu)
         }, n._resetScrollbar = function () {
            var r = [].slice.call(document.querySelectorAll(ku)),
               n, i;
            t(r).each(function (n, i) {
               var r = t(i).data("padding-right");
               t(i).removeData("padding-right");
               i.style.paddingRight = r || ""
            });
            n = [].slice.call(document.querySelectorAll("" + du));
            t(n).each(function (n, i) {
               var r = t(i).data("margin-right");
               "undefined" != typeof r && t(i).css("margin-right", r).removeData("margin-right")
            });
            i = t(document.body).data("padding-right");
            t(document.body).removeData("padding-right");
            document.body.style.paddingRight = i || ""
         }, n._getScrollbarWidth = function () {
            var n = document.createElement("div"),
               t;
            return n.className = us, document.body.appendChild(n), t = n.getBoundingClientRect().width - n.clientWidth, document.body.removeChild(n), t
         }, i._jQueryInterface = function (n, r) {
            return this.each(function () {
               var u = t(this).data(ii),
                  e = f({}, tu, {}, t(this).data(), {}, "object" == typeof n && n ? n : {});
               if (u || (u = new i(this, e), t(this).data(ii, u)), "string" == typeof n) {
                  if ("undefined" == typeof u[n]) throw new TypeError('No method named "' + n + '"');
                  u[n](r)
               } else e.show && u.show(r)
            })
         }, c(i, null, [{
            key: "VERSION",
            get: function () {
               return "4.4.1"
            }
         }, {
            key: "Default",
            get: function () {
               return tu
            }
         }]), i
      }();
   t(document).on(u.CLICK_DATA_API, '[data-toggle="modal"]', function (n) {
      var i, e = this,
         o = r.getSelectorFromElement(this),
         s, h;
      o && (i = document.querySelector(o));
      s = t(i).data(ii) ? "toggle" : f({}, t(i).data(), {}, t(this).data());
      "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
      h = t(i).one(u.SHOW, function (n) {
         n.isDefaultPrevented() || h.one(u.HIDDEN, function () {
            t(e).is(":visible") && e.focus()
         })
      });
      ri._jQueryInterface.call(t(i), s, this)
   });
   t.fn[st] = ri._jQueryInterface;
   t.fn[st].Constructor = ri;
   t.fn[st].noConflict = function () {
      return t.fn[st] = ts, ri._jQueryInterface
   };
   var hs = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      cs = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      ls = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
      g = "tooltip",
      ur = "bs.tooltip",
      a = "." + ur,
      as = t.fn[g],
      gu = "bs-tooltip",
      vs = new RegExp("(^|\\s)" + gu + "\\S+", "g"),
      ys = ["sanitize", "whiteList", "sanitizeFn"],
      ps = {
         animation: "boolean",
         template: "string",
         title: "(string|element|function)",
         trigger: "string",
         delay: "(number|object)",
         html: "boolean",
         selector: "(string|boolean)",
         placement: "(string|function)",
         offset: "(number|string|function)",
         container: "(string|element|boolean)",
         fallbackPlacement: "(string|array)",
         boundary: "(string|element)",
         sanitize: "boolean",
         sanitizeFn: "(null|function)",
         whiteList: "object",
         popperConfig: "(null|object)"
      },
      ws = {
         AUTO: "auto",
         TOP: "top",
         RIGHT: "right",
         BOTTOM: "bottom",
         LEFT: "left"
      },
      bs = {
         animation: !0,
         template: '<div class="tooltip" role="tooltip"><div class="arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
         trigger: "hover focus",
         title: "",
         delay: 0,
         html: !1,
         selector: !1,
         placement: "top",
         offset: 0,
         container: !1,
         fallbackPlacement: "flip",
         boundary: "scrollParent",
         sanitize: !0,
         sanitizeFn: null,
         whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
         },
         popperConfig: null
      },
      ui = "show",
      iu = "out",
      ks = {
         HIDE: "hide" + a,
         HIDDEN: "hidden" + a,
         SHOW: "show" + a,
         SHOWN: "shown" + a,
         INSERTED: "inserted" + a,
         CLICK: "click" + a,
         FOCUSIN: "focusin" + a,
         FOCUSOUT: "focusout" + a,
         MOUSEENTER: "mouseenter" + a,
         MOUSELEAVE: "mouseleave" + a
      },
      fi = "fade",
      ei = "show",
      ds = ".tooltip-inner",
      gs = ".arrow",
      oi = "hover",
      ru = "focus",
      nh = "click",
      th = "manual",
      nt = function () {
         function u(n, t) {
            if ("undefined" == typeof i) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0;
            this._timeout = 0;
            this._hoverState = "";
            this._activeTrigger = {};
            this._popper = null;
            this.element = n;
            this.config = this._getConfig(t);
            this.tip = null;
            this._setListeners()
         }
         var n = u.prototype;
         return n.enable = function () {
            this._isEnabled = !0
         }, n.disable = function () {
            this._isEnabled = !1
         }, n.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled
         }, n.toggle = function (n) {
            if (this._isEnabled)
               if (n) {
                  var r = this.constructor.DATA_KEY,
                     i = t(n.currentTarget).data(r);
                  i || (i = new this.constructor(n.currentTarget, this._getDelegateConfig()), t(n.currentTarget).data(r, i));
                  i._activeTrigger.click = !i._activeTrigger.click;
                  i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
               } else {
                  if (t(this.getTipElement()).hasClass(ei)) return void this._leave(null, this);
                  this._enter(null, this)
               }
         }, n.dispose = function () {
            clearTimeout(this._timeout);
            t.removeData(this.element, this.constructor.DATA_KEY);
            t(this.element).off(this.constructor.EVENT_KEY);
            t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler);
            this.tip && t(this.tip).remove();
            this._isEnabled = null;
            this._timeout = null;
            this._hoverState = null;
            this._activeTrigger = null;
            this._popper && this._popper.destroy();
            this._popper = null;
            this.element = null;
            this.config = null;
            this.tip = null
         }, n.show = function () {
            var n = this,
               f, e, c, u, o, l, s, a, h, v;
            if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
            if (f = t.Event(this.constructor.Event.SHOW), this.isWithContent() && this._isEnabled) {
               if (t(this.element).trigger(f), e = r.findShadowRoot(this.element), c = t.contains(null !== e ? e : this.element.ownerDocument.documentElement, this.element), f.isDefaultPrevented() || !c) return;
               u = this.getTipElement();
               o = r.getUID(this.constructor.NAME);
               u.setAttribute("id", o);
               this.element.setAttribute("aria-describedby", o);
               this.setContent();
               this.config.animation && t(u).addClass(fi);
               l = "function" == typeof this.config.placement ? this.config.placement.call(this, u, this.element) : this.config.placement;
               s = this._getAttachment(l);
               this.addAttachmentClass(s);
               a = this._getContainer();
               t(u).data(this.constructor.DATA_KEY, this);
               t.contains(this.element.ownerDocument.documentElement, this.tip) || t(u).appendTo(a);
               t(this.element).trigger(this.constructor.Event.INSERTED);
               this._popper = new i(this.element, u, this._getPopperConfig(s));
               t(u).addClass(ei);
               "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
               h = function () {
                  n.config.animation && n._fixTransition();
                  var i = n._hoverState;
                  n._hoverState = null;
                  t(n.element).trigger(n.constructor.Event.SHOWN);
                  i === iu && n._leave(null, n)
               };
               t(this.tip).hasClass(fi) ? (v = r.getTransitionDurationFromElement(this.tip), t(this.tip).one(r.TRANSITION_END, h).emulateTransitionEnd(v)) : h()
            }
         }, n.hide = function (n) {
            function f() {
               i._hoverState !== ui && u.parentNode && u.parentNode.removeChild(u);
               i._cleanTipClass();
               i.element.removeAttribute("aria-describedby");
               t(i.element).trigger(i.constructor.Event.HIDDEN);
               null !== i._popper && i._popper.destroy();
               n && n()
            }
            var i = this,
               u = this.getTipElement(),
               e = t.Event(this.constructor.Event.HIDE),
               o;
            (t(this.element).trigger(e), e.isDefaultPrevented()) || ((t(u).removeClass(ei), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger[nh] = !1, this._activeTrigger[ru] = !1, this._activeTrigger[oi] = !1, t(this.tip).hasClass(fi)) ? (o = r.getTransitionDurationFromElement(u), t(u).one(r.TRANSITION_END, f).emulateTransitionEnd(o)) : f(), this._hoverState = "")
         }, n.update = function () {
            null !== this._popper && this._popper.scheduleUpdate()
         }, n.isWithContent = function () {
            return Boolean(this.getTitle())
         }, n.addAttachmentClass = function (n) {
            t(this.getTipElement()).addClass(gu + "-" + n)
         }, n.getTipElement = function () {
            return this.tip = this.tip || t(this.config.template)[0], this.tip
         }, n.setContent = function () {
            var n = this.getTipElement();
            this.setElementContent(t(n.querySelectorAll(ds)), this.getTitle());
            t(n).removeClass(fi + " " + ei)
         }, n.setElementContent = function (n, i) {
            "object" != typeof i || !i.nodeType && !i.jquery ? this.config.html ? (this.config.sanitize && (i = su(i, this.config.whiteList, this.config.sanitizeFn)), n.html(i)) : n.text(i) : this.config.html ? t(i).parent().is(n) || n.empty().append(i) : n.text(t(i).text())
         }, n.getTitle = function () {
            var n = this.element.getAttribute("data-original-title");
            return n || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
         }, n._getPopperConfig = function (n) {
            var t = this;
            return f({}, {
               placement: n,
               modifiers: {
                  offset: this._getOffset(),
                  flip: {
                     behavior: this.config.fallbackPlacement
                  },
                  arrow: {
                     element: gs
                  },
                  preventOverflow: {
                     boundariesElement: this.config.boundary
                  }
               },
               onCreate: function (n) {
                  n.originalPlacement !== n.placement && t._handlePopperPlacementChange(n)
               },
               onUpdate: function (n) {
                  return t._handlePopperPlacementChange(n)
               }
            }, {}, this.config.popperConfig)
         }, n._getOffset = function () {
            var t = this,
               n = {};
            return "function" == typeof this.config.offset ? n.fn = function (n) {
               return n.offsets = f({}, n.offsets, {}, t.config.offset(n.offsets, t.element) || {}), n
            } : n.offset = this.config.offset, n
         }, n._getContainer = function () {
            return !1 === this.config.container ? document.body : r.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
         }, n._getAttachment = function (n) {
            return ws[n.toUpperCase()]
         }, n._setListeners = function () {
            var n = this;
            this.config.trigger.split(" ").forEach(function (i) {
               if ("click" === i) t(n.element).on(n.constructor.Event.CLICK, n.config.selector, function (t) {
                  return n.toggle(t)
               });
               else if (i !== th) {
                  var r = i === oi ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN,
                     u = i === oi ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT;
                  t(n.element).on(r, n.config.selector, function (t) {
                     return n._enter(t)
                  }).on(u, n.config.selector, function (t) {
                     return n._leave(t)
                  })
               }
            });
            this._hideModalHandler = function () {
               n.element && n.hide()
            };
            t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler);
            this.config.selector ? this.config = f({}, this.config, {
               trigger: "manual",
               selector: ""
            }) : this._fixTitle()
         }, n._fixTitle = function () {
            var n = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" != n) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
         }, n._enter = function (n, i) {
            var r = this.constructor.DATA_KEY;
            (i = i || t(n.currentTarget).data(r)) || (i = new this.constructor(n.currentTarget, this._getDelegateConfig()), t(n.currentTarget).data(r, i));
            n && (i._activeTrigger["focusin" === n.type ? ru : oi] = !0);
            t(i.getTipElement()).hasClass(ei) || i._hoverState === ui ? i._hoverState = ui : (clearTimeout(i._timeout), i._hoverState = ui, i.config.delay && i.config.delay.show ? i._timeout = setTimeout(function () {
               i._hoverState === ui && i.show()
            }, i.config.delay.show) : i.show())
         }, n._leave = function (n, i) {
            var r = this.constructor.DATA_KEY;
            (i = i || t(n.currentTarget).data(r)) || (i = new this.constructor(n.currentTarget, this._getDelegateConfig()), t(n.currentTarget).data(r, i));
            n && (i._activeTrigger["focusout" === n.type ? ru : oi] = !1);
            i._isWithActiveTrigger() || (clearTimeout(i._timeout), i._hoverState = iu, i.config.delay && i.config.delay.hide ? i._timeout = setTimeout(function () {
               i._hoverState === iu && i.hide()
            }, i.config.delay.hide) : i.hide())
         }, n._isWithActiveTrigger = function () {
            for (var n in this._activeTrigger)
               if (this._activeTrigger[n]) return !0;
            return !1
         }, n._getConfig = function (n) {
            var i = t(this.element).data();
            return Object.keys(i).forEach(function (n) {
               -1 !== ys.indexOf(n) && delete i[n]
            }), "number" == typeof (n = f({}, this.constructor.Default, {}, i, {}, "object" == typeof n && n ? n : {})).delay && (n.delay = {
               show: n.delay,
               hide: n.delay
            }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), r.typeCheckConfig(g, n, this.constructor.DefaultType), n.sanitize && (n.template = su(n.template, n.whiteList, n.sanitizeFn)), n
         }, n._getDelegateConfig = function () {
            var t = {},
               n;
            if (this.config)
               for (n in this.config) this.constructor.Default[n] !== this.config[n] && (t[n] = this.config[n]);
            return t
         }, n._cleanTipClass = function () {
            var i = t(this.getTipElement()),
               n = i.attr("class").match(vs);
            null !== n && n.length && i.removeClass(n.join(""))
         }, n._handlePopperPlacementChange = function (n) {
            var t = n.instance;
            this.tip = t.popper;
            this._cleanTipClass();
            this.addAttachmentClass(this._getAttachment(n.placement))
         }, n._fixTransition = function () {
            var n = this.getTipElement(),
               i = this.config.animation;
            null === n.getAttribute("x-placement") && (t(n).removeClass(fi), this.config.animation = !1, this.hide(), this.show(), this.config.animation = i)
         }, u._jQueryInterface = function (n) {
            return this.each(function () {
               var i = t(this).data(ur),
                  r = "object" == typeof n && n;
               if ((i || !/dispose|hide/.test(n)) && (i || (i = new u(this, r), t(this).data(ur, i)), "string" == typeof n)) {
                  if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                  i[n]()
               }
            })
         }, c(u, null, [{
            key: "VERSION",
            get: function () {
               return "4.4.1"
            }
         }, {
            key: "Default",
            get: function () {
               return bs
            }
         }, {
            key: "NAME",
            get: function () {
               return g
            }
         }, {
            key: "DATA_KEY",
            get: function () {
               return ur
            }
         }, {
            key: "Event",
            get: function () {
               return ks
            }
         }, {
            key: "EVENT_KEY",
            get: function () {
               return a
            }
         }, {
            key: "DefaultType",
            get: function () {
               return ps
            }
         }]), u
      }();
   t.fn[g] = nt._jQueryInterface;
   t.fn[g].Constructor = nt;
   t.fn[g].noConflict = function () {
      return t.fn[g] = as, nt._jQueryInterface
   };
   var ct = "popover",
      fr = "bs.popover",
      v = "." + fr,
      ih = t.fn[ct],
      nf = "bs-popover",
      rh = new RegExp("(^|\\s)" + nf + "\\S+", "g"),
      uh = f({}, nt.Default, {
         placement: "right",
         trigger: "click",
         content: "",
         template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
      }),
      fh = f({}, nt.DefaultType, {
         content: "(string|element|function)"
      }),
      eh = "fade",
      oh = "show",
      sh = ".popover-header",
      hh = ".popover-body",
      ch = {
         HIDE: "hide" + v,
         HIDDEN: "hidden" + v,
         SHOW: "show" + v,
         SHOWN: "shown" + v,
         INSERTED: "inserted" + v,
         CLICK: "click" + v,
         FOCUSIN: "focusin" + v,
         FOCUSOUT: "focusout" + v,
         MOUSEENTER: "mouseenter" + v,
         MOUSELEAVE: "mouseleave" + v
      },
      er = function (n) {
         function i() {
            return n.apply(this, arguments) || this
         }! function (n, t) {
            n.prototype = Object.create(t.prototype);
            (n.prototype.constructor = n).__proto__ = t
         }(i, n);
         var r = i.prototype;
         return r.isWithContent = function () {
            return this.getTitle() || this._getContent()
         }, r.addAttachmentClass = function (n) {
            t(this.getTipElement()).addClass(nf + "-" + n)
         }, r.getTipElement = function () {
            return this.tip = this.tip || t(this.config.template)[0], this.tip
         }, r.setContent = function () {
            var i = t(this.getTipElement()),
               n;
            this.setElementContent(i.find(sh), this.getTitle());
            n = this._getContent();
            "function" == typeof n && (n = n.call(this.element));
            this.setElementContent(i.find(hh), n);
            i.removeClass(eh + " " + oh)
         }, r._getContent = function () {
            return this.element.getAttribute("data-content") || this.config.content
         }, r._cleanTipClass = function () {
            var i = t(this.getTipElement()),
               n = i.attr("class").match(rh);
            null !== n && 0 < n.length && i.removeClass(n.join(""))
         }, i._jQueryInterface = function (n) {
            return this.each(function () {
               var r = t(this).data(fr),
                  u = "object" == typeof n ? n : null;
               if ((r || !/dispose|hide/.test(n)) && (r || (r = new i(this, u), t(this).data(fr, r)), "string" == typeof n)) {
                  if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                  r[n]()
               }
            })
         }, c(i, null, [{
            key: "VERSION",
            get: function () {
               return "4.4.1"
            }
         }, {
            key: "Default",
            get: function () {
               return uh
            }
         }, {
            key: "NAME",
            get: function () {
               return ct
            }
         }, {
            key: "DATA_KEY",
            get: function () {
               return fr
            }
         }, {
            key: "Event",
            get: function () {
               return ch
            }
         }, {
            key: "EVENT_KEY",
            get: function () {
               return v
            }
         }, {
            key: "DefaultType",
            get: function () {
               return fh
            }
         }]), i
      }(nt);
   t.fn[ct] = er._jQueryInterface;
   t.fn[ct].Constructor = er;
   t.fn[ct].noConflict = function () {
      return t.fn[ct] = ih, er._jQueryInterface
   };
   var tt = "scrollspy",
      or = "bs.scrollspy",
      sr = "." + or,
      lh = t.fn[tt],
      tf = {
         offset: 10,
         method: "auto",
         target: ""
      },
      ah = {
         offset: "number",
         method: "string",
         target: "(string|element)"
      },
      uu = {
         ACTIVATE: "activate" + sr,
         SCROLL: "scroll" + sr,
         LOAD_DATA_API: "load" + sr + ".data-api"
      },
      vh = "dropdown-item",
      it = "active",
      yh = '[data-spy="scroll"]',
      rf = ".nav, .list-group",
      fu = ".nav-link",
      ph = ".nav-item",
      uf = ".list-group-item",
      wh = ".dropdown",
      bh = ".dropdown-item",
      kh = ".dropdown-toggle",
      dh = "offset",
      ff = "position",
      si = function () {
         function i(n, i) {
            var r = this;
            this._element = n;
            this._scrollElement = "BODY" === n.tagName ? window : n;
            this._config = this._getConfig(i);
            this._selector = this._config.target + " " + fu + "," + this._config.target + " " + uf + "," + this._config.target + " " + bh;
            this._offsets = [];
            this._targets = [];
            this._activeTarget = null;
            this._scrollHeight = 0;
            t(this._scrollElement).on(uu.SCROLL, function (n) {
               return r._process(n)
            });
            this.refresh();
            this._process()
         }
         var n = i.prototype;
         return n.refresh = function () {
            var n = this,
               u = this._scrollElement === this._scrollElement.window ? dh : ff,
               i = "auto" === this._config.method ? u : this._config.method,
               f = i === ff ? this._getScrollTop() : 0;
            this._offsets = [];
            this._targets = [];
            this._scrollHeight = this._getScrollHeight();
            [].slice.call(document.querySelectorAll(this._selector)).map(function (n) {
               var u, e = r.getSelectorFromElement(n),
                  o;
               return (e && (u = document.querySelector(e)), u) && (o = u.getBoundingClientRect(), o.width || o.height) ? [t(u)[i]().top + f, e] : null
            }).filter(function (n) {
               return n
            }).sort(function (n, t) {
               return n[0] - t[0]
            }).forEach(function (t) {
               n._offsets.push(t[0]);
               n._targets.push(t[1])
            })
         }, n.dispose = function () {
            t.removeData(this._element, or);
            t(this._scrollElement).off(sr);
            this._element = null;
            this._scrollElement = null;
            this._config = null;
            this._selector = null;
            this._offsets = null;
            this._targets = null;
            this._activeTarget = null;
            this._scrollHeight = null
         }, n._getConfig = function (n) {
            if ("string" != typeof (n = f({}, tf, {}, "object" == typeof n && n ? n : {})).target) {
               var i = t(n.target).attr("id");
               i || (i = r.getUID(tt), t(n.target).attr("id", i));
               n.target = "#" + i
            }
            return r.typeCheckConfig(tt, n, ah), n
         }, n._getScrollTop = function () {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
         }, n._getScrollHeight = function () {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
         }, n._getOffsetHeight = function () {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
         }, n._process = function () {
            var t = this._getScrollTop() + this._config.offset,
               r = this._getScrollHeight(),
               u = this._config.offset + r - this._getOffsetHeight(),
               i, n;
            if (this._scrollHeight !== r && this.refresh(), u <= t) i = this._targets[this._targets.length - 1], this._activeTarget !== i && this._activate(i);
            else {
               if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
               for (n = this._offsets.length; n--;) this._activeTarget !== this._targets[n] && t >= this._offsets[n] && ("undefined" == typeof this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n])
            }
         }, n._activate = function (n) {
            this._activeTarget = n;
            this._clear();
            var r = this._selector.split(",").map(function (t) {
                  return t + '[data-target="' + n + '"],' + t + '[href="' + n + '"]'
               }),
               i = t([].slice.call(document.querySelectorAll(r.join(","))));
            i.hasClass(vh) ? (i.closest(wh).find(kh).addClass(it), i.addClass(it)) : (i.addClass(it), i.parents(rf).prev(fu + ", " + uf).addClass(it), i.parents(rf).prev(ph).children(fu).addClass(it));
            t(this._scrollElement).trigger(uu.ACTIVATE, {
               relatedTarget: n
            })
         }, n._clear = function () {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function (n) {
               return n.classList.contains(it)
            }).forEach(function (n) {
               return n.classList.remove(it)
            })
         }, i._jQueryInterface = function (n) {
            return this.each(function () {
               var r = t(this).data(or);
               if (r || (r = new i(this, "object" == typeof n && n), t(this).data(or, r)), "string" == typeof n) {
                  if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                  r[n]()
               }
            })
         }, c(i, null, [{
            key: "VERSION",
            get: function () {
               return "4.4.1"
            }
         }, {
            key: "Default",
            get: function () {
               return tf
            }
         }]), i
      }();
   t(window).on(uu.LOAD_DATA_API, function () {
      for (var n, i = [].slice.call(document.querySelectorAll(yh)), r = i.length; r--;) n = t(i[r]), si._jQueryInterface.call(n, n.data())
   });
   t.fn[tt] = si._jQueryInterface;
   t.fn[tt].Constructor = si;
   t.fn[tt].noConflict = function () {
      return t.fn[tt] = lh, si._jQueryInterface
   };
   var hr = "bs.tab",
      hi = "." + hr,
      gh = t.fn.tab,
      ci = {
         HIDE: "hide" + hi,
         HIDDEN: "hidden" + hi,
         SHOW: "show" + hi,
         SHOWN: "shown" + hi,
         CLICK_DATA_API: "click" + hi + ".data-api"
      },
      nc = "dropdown-menu",
      li = "active",
      tc = "disabled",
      ef = "fade",
      sf = "show",
      ic = ".dropdown",
      rc = ".nav, .list-group",
      hf = ".active",
      cf = "> li > .active",
      uc = ".dropdown-toggle",
      fc = "> .dropdown-menu .active",
      ai = function () {
         function n(n) {
            this._element = n
         }
         var i = n.prototype;
         return i.show = function () {
            var h = this,
               u, n, i, f, c, e, o, s;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(li) || t(this._element).hasClass(tc) || (i = t(this._element).closest(rc)[0], f = r.getSelectorFromElement(this._element), i && (c = "UL" === i.nodeName || "OL" === i.nodeName ? cf : hf, n = (n = t.makeArray(t(i).find(c)))[n.length - 1]), e = t.Event(ci.HIDE, {
               relatedTarget: this._element
            }), o = t.Event(ci.SHOW, {
               relatedTarget: n
            }), (n && t(n).trigger(e), t(this._element).trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (f && (u = document.querySelector(f)), this._activate(this._element, i), s = function () {
               var i = t.Event(ci.HIDDEN, {
                     relatedTarget: h._element
                  }),
                  r = t.Event(ci.SHOWN, {
                     relatedTarget: n
                  });
               t(n).trigger(i);
               t(h._element).trigger(r)
            }, u ? this._activate(u, u.parentNode, s) : s()))
         }, i.dispose = function () {
            t.removeData(this._element, hr);
            this._element = null
         }, i._activate = function (n, i, u) {
            function e() {
               return s._transitionComplete(n, f, u)
            }
            var s = this,
               f = (!i || "UL" !== i.nodeName && "OL" !== i.nodeName ? t(i).children(hf) : t(i).find(cf))[0],
               h = u && f && t(f).hasClass(ef),
               o;
            f && h ? (o = r.getTransitionDurationFromElement(f), t(f).removeClass(sf).one(r.TRANSITION_END, e).emulateTransitionEnd(o)) : e()
         }, i._transitionComplete = function (n, i, u) {
            var f, e, o;
            i && (t(i).removeClass(li), f = t(i.parentNode).find(fc)[0], f && t(f).removeClass(li), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1));
            (t(n).addClass(li), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !0), r.reflow(n), n.classList.contains(ef) && n.classList.add(sf), n.parentNode && t(n.parentNode).hasClass(nc)) && (e = t(n).closest(ic)[0], e && (o = [].slice.call(e.querySelectorAll(uc)), t(o).addClass(li)), n.setAttribute("aria-expanded", !0));
            u && u()
         }, n._jQueryInterface = function (i) {
            return this.each(function () {
               var u = t(this),
                  r = u.data(hr);
               if (r || (r = new n(this), u.data(hr, r)), "string" == typeof i) {
                  if ("undefined" == typeof r[i]) throw new TypeError('No method named "' + i + '"');
                  r[i]()
               }
            })
         }, c(n, null, [{
            key: "VERSION",
            get: function () {
               return "4.4.1"
            }
         }]), n
      }();
   t(document).on(ci.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (n) {
      n.preventDefault();
      ai._jQueryInterface.call(t(this), "show")
   });
   t.fn.tab = ai._jQueryInterface;
   t.fn.tab.Constructor = ai;
   t.fn.tab.noConflict = function () {
      return t.fn.tab = gh, ai._jQueryInterface
   };
   var lt = "toast",
      cr = "bs.toast",
      vi = "." + cr,
      ec = t.fn[lt],
      at = {
         CLICK_DISMISS: "click.dismiss" + vi,
         HIDE: "hide" + vi,
         HIDDEN: "hidden" + vi,
         SHOW: "show" + vi,
         SHOWN: "shown" + vi
      },
      oc = "fade",
      lf = "hide",
      yi = "show",
      af = "showing",
      sc = {
         animation: "boolean",
         autohide: "boolean",
         delay: "number"
      },
      vf = {
         animation: !0,
         autohide: !0,
         delay: 500
      },
      hc = '[data-dismiss="toast"]',
      lr = function () {
         function i(n, t) {
            this._element = n;
            this._config = this._getConfig(t);
            this._timeout = null;
            this._setListeners()
         }
         var n = i.prototype;
         return n.show = function () {
            var n = this,
               u = t.Event(at.SHOW),
               i, f;
            (t(this._element).trigger(u), u.isDefaultPrevented()) || (this._config.animation && this._element.classList.add(oc), i = function () {
               n._element.classList.remove(af);
               n._element.classList.add(yi);
               t(n._element).trigger(at.SHOWN);
               n._config.autohide && (n._timeout = setTimeout(function () {
                  n.hide()
               }, n._config.delay))
            }, (this._element.classList.remove(lf), r.reflow(this._element), this._element.classList.add(af), this._config.animation) ? (f = r.getTransitionDurationFromElement(this._element), t(this._element).one(r.TRANSITION_END, i).emulateTransitionEnd(f)) : i())
         }, n.hide = function () {
            if (this._element.classList.contains(yi)) {
               var n = t.Event(at.HIDE);
               t(this._element).trigger(n);
               n.isDefaultPrevented() || this._close()
            }
         }, n.dispose = function () {
            clearTimeout(this._timeout);
            this._timeout = null;
            this._element.classList.contains(yi) && this._element.classList.remove(yi);
            t(this._element).off(at.CLICK_DISMISS);
            t.removeData(this._element, cr);
            this._element = null;
            this._config = null
         }, n._getConfig = function (n) {
            return n = f({}, vf, {}, t(this._element).data(), {}, "object" == typeof n && n ? n : {}), r.typeCheckConfig(lt, n, this.constructor.DefaultType), n
         }, n._setListeners = function () {
            var n = this;
            t(this._element).on(at.CLICK_DISMISS, hc, function () {
               return n.hide()
            })
         }, n._close = function () {
            function n() {
               i._element.classList.add(lf);
               t(i._element).trigger(at.HIDDEN)
            }
            var i = this,
               u;
            (this._element.classList.remove(yi), this._config.animation) ? (u = r.getTransitionDurationFromElement(this._element), t(this._element).one(r.TRANSITION_END, n).emulateTransitionEnd(u)) : n()
         }, i._jQueryInterface = function (n) {
            return this.each(function () {
               var u = t(this),
                  r = u.data(cr);
               if (r || (r = new i(this, "object" == typeof n && n), u.data(cr, r)), "string" == typeof n) {
                  if ("undefined" == typeof r[n]) throw new TypeError('No method named "' + n + '"');
                  r[n](this)
               }
            })
         }, c(i, null, [{
            key: "VERSION",
            get: function () {
               return "4.4.1"
            }
         }, {
            key: "DefaultType",
            get: function () {
               return sc
            }
         }, {
            key: "Default",
            get: function () {
               return vf
            }
         }]), i
      }();
   t.fn[lt] = lr._jQueryInterface;
   t.fn[lt].Constructor = lr;
   t.fn[lt].noConflict = function () {
      return t.fn[lt] = ec, lr._jQueryInterface
   };
   n.Alert = rt;
   n.Button = wt;
   n.Carousel = ft;
   n.Collapse = ni;
   n.Dropdown = w;
   n.Modal = ri;
   n.Popover = er;
   n.Scrollspy = si;
   n.Tab = ai;
   n.Toast = lr;
   n.Tooltip = nt;
   n.Util = r;
   Object.defineProperty(n, "__esModule", {
      value: !0
   })
});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (n) {
   typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(jQuery)
})(function (n) {
   function i(n) {
      return t.raw ? n : encodeURIComponent(n)
   }

   function u(n) {
      return t.raw ? n : decodeURIComponent(n)
   }

   function f(n) {
      return i(t.json ? JSON.stringify(n) : String(n))
   }

   function e(n) {
      n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
      try {
         return n = decodeURIComponent(n.replace(o, " ")), t.json ? JSON.parse(n) : n
      } catch (i) {}
   }

   function r(i, r) {
      var u = t.raw ? i : e(i);
      return n.isFunction(r) ? r(u) : u
   }
   var o = /\+/g,
      t = n.cookie = function (e, o, s) {
         var y, a, h, v, c, p;
         if (o !== undefined && !n.isFunction(o)) return s = n.extend({}, t.defaults, s), typeof s.expires == "number" && (y = s.expires, a = s.expires = new Date, a.setTime(+a + y * 864e5)), document.cookie = [i(e), "=", f(o), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("");
         for (h = e ? undefined : {}, v = document.cookie ? document.cookie.split("; ") : [], c = 0, p = v.length; c < p; c++) {
            var w = v[c].split("="),
               b = u(w.shift()),
               l = w.join("=");
            if (e && e === b) {
               h = r(l, o);
               break
            }
            e || (l = r(l)) === undefined || (h[b] = l)
         }
         return h
      };
   t.defaults = {};
   n.removeCookie = function (t, i) {
      return n.cookie(t) === undefined ? !1 : (n.cookie(t, "", n.extend({}, i, {
         expires: -1
      })), !n.cookie(t))
   }
});
! function (n, t) {
   "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Swiper = t()
}(this, function () {
   "use strict";

   function t(n, t) {
      var s = [],
         r = 0,
         h, c, e, o;
      if (n && !t && n instanceof f) return n;
      if (n)
         if ("string" == typeof n)
            if (e = n.trim(), 0 <= e.indexOf("<") && 0 <= e.indexOf(">"))
               for (o = "div", 0 === e.indexOf("<li") && (o = "ul"), 0 === e.indexOf("<tr") && (o = "tbody"), 0 !== e.indexOf("<td") && 0 !== e.indexOf("<th") || (o = "tr"), 0 === e.indexOf("<tbody") && (o = "table"), 0 === e.indexOf("<option") && (o = "select"), (c = u.createElement(o)).innerHTML = e, r = 0; r < c.childNodes.length; r += 1) s.push(c.childNodes[r]);
            else
               for (h = t || "#" !== n[0] || n.match(/[ .<>:~]/) ? (t || u).querySelectorAll(n.trim()) : [u.getElementById(n.trim().split("#")[1])], r = 0; r < h.length; r += 1) h[r] && s.push(h[r]);
      else if (n.nodeType || n === i || n === u) s.push(n);
      else if (0 < n.length && n[0].nodeType)
         for (r = 0; r < n.length; r += 1) s.push(n[r]);
      return new f(s)
   }

   function it(n) {
      for (var i = [], t = 0; t < n.length; t += 1) - 1 === i.indexOf(n[t]) && i.push(n[t]);
      return i
   }

   function lt() {
      var n = this,
         t = n.params,
         i = n.el,
         r;
      if (!i || 0 !== i.offsetWidth) {
         t.breakpoints && n.setBreakpoint();
         var u = n.allowSlideNext,
            f = n.allowSlidePrev,
            e = n.snapGrid;
         (n.allowSlideNext = !0, n.allowSlidePrev = !0, n.updateSize(), n.updateSlides(), t.freeMode) ? (r = Math.min(Math.max(n.translate, n.maxTranslate()), n.minTranslate()), n.setTranslate(r), n.updateActiveIndex(), n.updateSlidesClasses(), t.autoHeight && n.updateAutoHeight()) : (n.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && n.isEnd && !n.params.centeredSlides ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0));
         n.allowSlidePrev = f;
         n.allowSlideNext = u;
         n.params.watchOverflow && e !== n.snapGrid && n.checkOverflow()
      }
   }
   var u = "undefined" == typeof document ? {
         body: {},
         addEventListener: function () {},
         removeEventListener: function () {},
         activeElement: {
            blur: function () {},
            nodeName: ""
         },
         querySelector: function () {
            return null
         },
         querySelectorAll: function () {
            return []
         },
         getElementById: function () {
            return null
         },
         createEvent: function () {
            return {
               initEvent: function () {}
            }
         },
         createElement: function () {
            return {
               children: [],
               childNodes: [],
               style: {},
               setAttribute: function () {},
               getElementsByTagName: function () {
                  return []
               }
            }
         },
         location: {
            hash: ""
         }
      } : document,
      i = "undefined" == typeof window ? {
         document: u,
         navigator: {
            userAgent: ""
         },
         location: {},
         history: {},
         CustomEvent: function () {
            return this
         },
         addEventListener: function () {},
         removeEventListener: function () {},
         getComputedStyle: function () {
            return {
               getPropertyValue: function () {
                  return ""
               }
            }
         },
         Image: function () {},
         Date: function () {},
         screen: {},
         setTimeout: function () {},
         clearTimeout: function () {}
      } : window,
      f = function (n) {
         for (var t = 0; t < n.length; t += 1) this[t] = n[t];
         return this.length = n.length, this
      },
      rt;
   t.fn = f.prototype;
   t.Class = f;
   t.Dom7 = f;
   rt = {
      addClass: function (n) {
         var r, i, t;
         if (void 0 === n) return this;
         for (r = n.split(" "), i = 0; i < r.length; i += 1)
            for (t = 0; t < this.length; t += 1) void 0 !== this[t] && void 0 !== this[t].classList && this[t].classList.add(r[i]);
         return this
      },
      removeClass: function (n) {
         for (var t, r = n.split(" "), i = 0; i < r.length; i += 1)
            for (t = 0; t < this.length; t += 1) void 0 !== this[t] && void 0 !== this[t].classList && this[t].classList.remove(r[i]);
         return this
      },
      hasClass: function (n) {
         return !!this[0] && this[0].classList.contains(n)
      },
      toggleClass: function (n) {
         for (var t, r = n.split(" "), i = 0; i < r.length; i += 1)
            for (t = 0; t < this.length; t += 1) void 0 !== this[t] && void 0 !== this[t].classList && this[t].classList.toggle(r[i]);
         return this
      },
      attr: function (n, t) {
         var u = arguments,
            i, r;
         if (1 === arguments.length && "string" == typeof n) return this[0] ? this[0].getAttribute(n) : void 0;
         for (i = 0; i < this.length; i += 1)
            if (2 === u.length) this[i].setAttribute(n, t);
            else
               for (r in n) this[i][r] = n[r], this[i].setAttribute(r, n[r]);
         return this
      },
      removeAttr: function (n) {
         for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(n);
         return this
      },
      data: function (n, t) {
         var i, r, u;
         if (void 0 !== t) {
            for (r = 0; r < this.length; r += 1)(i = this[r]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[n] = t;
            return this
         }
         if (i = this[0]) return i.dom7ElementDataStorage && n in i.dom7ElementDataStorage ? i.dom7ElementDataStorage[n] : (u = i.getAttribute("data-" + n), u || void 0)
      },
      transform: function (n) {
         for (var t, i = 0; i < this.length; i += 1) t = this[i].style, t.webkitTransform = n, t.transform = n;
         return this
      },
      transition: function (n) {
         var t, i;
         for ("string" != typeof n && (n += "ms"), t = 0; t < this.length; t += 1) i = this[t].style, i.webkitTransitionDuration = n, i.transitionDuration = n;
         return this
      },
      on: function () {
         function v(n) {
            var f = n.target,
               i, e, r;
            if (f)
               if (i = n.target.dom7EventData || [], i.indexOf(n) < 0 && i.unshift(n), t(f).is(l)) u.apply(f, i);
               else
                  for (e = t(f).parents(), r = 0; r < e.length; r += 1) t(e[r]).is(l) && u.apply(e[r], i)
         }

         function y(n) {
            var t = n && n.target && n.target.dom7EventData || [];
            t.indexOf(n) < 0 && t.unshift(n);
            u.apply(this, t)
         }
         for (var a, i, f, h, n, e, o, r = [], c = arguments.length; c--;) r[c] = arguments[c];
         var p = r[0],
            l = r[1],
            u = r[2],
            s = r[3];
         for ("function" == typeof r[1] && (p = (a = r)[0], u = a[1], s = a[2], l = void 0), s || (s = !1), f = p.split(" "), h = 0; h < this.length; h += 1)
            if (n = this[h], l)
               for (i = 0; i < f.length; i += 1) e = f[i], n.dom7LiveListeners || (n.dom7LiveListeners = {}), n.dom7LiveListeners[e] || (n.dom7LiveListeners[e] = []), n.dom7LiveListeners[e].push({
                  listener: u,
                  proxyListener: v
               }), n.addEventListener(e, v, s);
            else
               for (i = 0; i < f.length; i += 1) o = f[i], n.dom7Listeners || (n.dom7Listeners = {}), n.dom7Listeners[o] || (n.dom7Listeners[o] = []), n.dom7Listeners[o].push({
                  listener: u,
                  proxyListener: y
               }), n.addEventListener(o, y, s);
         return this
      },
      off: function () {
         for (var l, a, e, u, o, i, n, r, s, t = [], h = arguments.length; h--;) t[h] = arguments[h];
         var y = t[0],
            v = t[1],
            c = t[2],
            f = t[3];
         for ("function" == typeof t[1] && (y = (l = t)[0], c = l[1], f = l[2], v = void 0), f || (f = !1), a = y.split(" "), e = 0; e < a.length; e += 1)
            for (u = a[e], o = 0; o < this.length; o += 1)
               if (i = this[o], n = void 0, !v && i.dom7Listeners ? n = i.dom7Listeners[u] : v && i.dom7LiveListeners && (n = i.dom7LiveListeners[u]), n && n.length)
                  for (r = n.length - 1; 0 <= r; r -= 1) s = n[r], c && s.listener === c ? (i.removeEventListener(u, s.proxyListener, f), n.splice(r, 1)) : c || (i.removeEventListener(u, s.proxyListener, f), n.splice(r, 1));
         return this
      },
      trigger: function () {
         for (var o, f, n, t, r = [], e = arguments.length; e--;) r[e] = arguments[e];
         for (var h = r[0].split(" "), c = r[1], s = 0; s < h.length; s += 1)
            for (o = h[s], f = 0; f < this.length; f += 1) {
               n = this[f];
               t = void 0;
               try {
                  t = new i.CustomEvent(o, {
                     detail: c,
                     bubbles: !0,
                     cancelable: !0
                  })
               } catch (r) {
                  (t = u.createEvent("Event")).initEvent(o, !0, !0);
                  t.detail = c
               }
               n.dom7EventData = r.filter(function (n, t) {
                  return 0 < t
               });
               n.dispatchEvent(t);
               n.dom7EventData = [];
               delete n.dom7EventData
            }
         return this
      },
      transitionEnd: function (n) {
         function r(f) {
            if (f.target === this)
               for (n.call(this, f), t = 0; t < i.length; t += 1) u.off(i[t], r)
         }
         var t, i = ["webkitTransitionEnd", "transitionend"],
            u = this;
         if (n)
            for (t = 0; t < i.length; t += 1) u.on(i[t], r);
         return this
      },
      outerWidth: function (n) {
         if (0 < this.length) {
            if (n) {
               var t = this.styles();
               return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
            }
            return this[0].offsetWidth
         }
         return null
      },
      outerHeight: function (n) {
         if (0 < this.length) {
            if (n) {
               var t = this.styles();
               return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
            }
            return this[0].offsetHeight
         }
         return null
      },
      offset: function () {
         if (0 < this.length) {
            var n = this[0],
               t = n.getBoundingClientRect(),
               r = u.body,
               f = n.clientTop || r.clientTop || 0,
               e = n.clientLeft || r.clientLeft || 0,
               o = n === i ? i.scrollY : n.scrollTop,
               s = n === i ? i.scrollX : n.scrollLeft;
            return {
               top: t.top + o - f,
               left: t.left + s - e
            }
         }
         return null
      },
      css: function (n, t) {
         var r, u;
         if (1 === arguments.length) {
            if ("string" != typeof n) {
               for (r = 0; r < this.length; r += 1)
                  for (u in n) this[r].style[u] = n[u];
               return this
            }
            if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(n)
         }
         if (2 === arguments.length && "string" == typeof n) {
            for (r = 0; r < this.length; r += 1) this[r].style[n] = t;
            return this
         }
         return this
      },
      each: function (n) {
         if (!n) return this;
         for (var t = 0; t < this.length; t += 1)
            if (!1 === n.call(this[t], t, this[t])) return this;
         return this
      },
      html: function (n) {
         if (void 0 === n) return this[0] ? this[0].innerHTML : void 0;
         for (var t = 0; t < this.length; t += 1) this[t].innerHTML = n;
         return this
      },
      text: function (n) {
         if (void 0 === n) return this[0] ? this[0].textContent.trim() : null;
         for (var t = 0; t < this.length; t += 1) this[t].textContent = n;
         return this
      },
      is: function (n) {
         var o, e, r = this[0];
         if (!r || void 0 === n) return !1;
         if ("string" == typeof n) {
            if (r.matches) return r.matches(n);
            if (r.webkitMatchesSelector) return r.webkitMatchesSelector(n);
            if (r.msMatchesSelector) return r.msMatchesSelector(n);
            for (o = t(n), e = 0; e < o.length; e += 1)
               if (o[e] === r) return !0;
            return !1
         }
         if (n === u) return r === u;
         if (n === i) return r === i;
         if (n.nodeType || n instanceof f) {
            for (o = n.nodeType ? [n] : n, e = 0; e < o.length; e += 1)
               if (o[e] === r) return !0;
            return !1
         }
         return !1
      },
      index: function () {
         var t, n = this[0];
         if (n) {
            for (t = 0; null !== (n = n.previousSibling);) 1 === n.nodeType && (t += 1);
            return t
         }
      },
      eq: function (n) {
         if (void 0 === n) return this;
         var t, i = this.length;
         return new f(i - 1 < n ? [] : n < 0 ? (t = i + n) < 0 ? [] : [this[t]] : [this[n]])
      },
      append: function () {
         for (var n, i, t, r, e, o = [], s = arguments.length; s--;) o[s] = arguments[s];
         for (i = 0; i < o.length; i += 1)
            for (n = o[i], t = 0; t < this.length; t += 1)
               if ("string" == typeof n)
                  for (r = u.createElement("div"), r.innerHTML = n; r.firstChild;) this[t].appendChild(r.firstChild);
               else if (n instanceof f)
            for (e = 0; e < n.length; e += 1) this[t].appendChild(n[e]);
         else this[t].appendChild(n);
         return this
      },
      prepend: function (n) {
         for (var t, r = this, e, i = 0; i < this.length; i += 1)
            if ("string" == typeof n)
               for (e = u.createElement("div"), e.innerHTML = n, t = e.childNodes.length - 1; 0 <= t; t -= 1) r[i].insertBefore(e.childNodes[t], r[i].childNodes[0]);
            else if (n instanceof f)
            for (t = 0; t < n.length; t += 1) r[i].insertBefore(n[t], r[i].childNodes[0]);
         else r[i].insertBefore(n, r[i].childNodes[0]);
         return this
      },
      next: function (n) {
         return 0 < this.length ? n ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(n) ? new f([this[0].nextElementSibling]) : new f([]) : this[0].nextElementSibling ? new f([this[0].nextElementSibling]) : new f([]) : new f([])
      },
      nextAll: function (n) {
         var u = [],
            r = this[0],
            i;
         if (!r) return new f([]);
         for (; r.nextElementSibling;) i = r.nextElementSibling, n ? t(i).is(n) && u.push(i) : u.push(i), r = i;
         return new f(u)
      },
      prev: function (n) {
         if (0 < this.length) {
            var i = this[0];
            return n ? i.previousElementSibling && t(i.previousElementSibling).is(n) ? new f([i.previousElementSibling]) : new f([]) : i.previousElementSibling ? new f([i.previousElementSibling]) : new f([])
         }
         return new f([])
      },
      prevAll: function (n) {
         var u = [],
            r = this[0],
            i;
         if (!r) return new f([]);
         for (; r.previousElementSibling;) i = r.previousElementSibling, n ? t(i).is(n) && u.push(i) : u.push(i), r = i;
         return new f(u)
      },
      parent: function (n) {
         for (var r = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (n ? t(this[i].parentNode).is(n) && r.push(this[i].parentNode) : r.push(this[i].parentNode));
         return t(it(r))
      },
      parents: function (n) {
         for (var i, r = [], u = 0; u < this.length; u += 1)
            for (i = this[u].parentNode; i;) n ? t(i).is(n) && r.push(i) : r.push(i), i = i.parentNode;
         return t(it(r))
      },
      closest: function (n) {
         var t = this;
         return void 0 === n ? new f([]) : (t.is(n) || (t = t.parents(n).eq(0)), t)
      },
      find: function (n) {
         for (var i, t, u = [], r = 0; r < this.length; r += 1)
            for (i = this[r].querySelectorAll(n), t = 0; t < i.length; t += 1) u.push(i[t]);
         return new f(u)
      },
      children: function (n) {
         for (var r, i, u = [], e = 0; e < this.length; e += 1)
            for (r = this[e].childNodes, i = 0; i < r.length; i += 1) n ? 1 === r[i].nodeType && t(r[i]).is(n) && u.push(r[i]) : 1 === r[i].nodeType && u.push(r[i]);
         return new f(it(u))
      },
      remove: function () {
         for (var n = 0; n < this.length; n += 1) this[n].parentNode && this[n].parentNode.removeChild(this[n]);
         return this
      },
      add: function () {
         for (var n, i, r, u = [], f = arguments.length; f--;) u[f] = arguments[f];
         for (n = 0; n < u.length; n += 1)
            for (r = t(u[n]), i = 0; i < r.length; i += 1) this[this.length] = r[i], this.length += 1;
         return this
      },
      styles: function () {
         return this[0] ? i.getComputedStyle(this[0], null) : {}
      }
   };
   Object.keys(rt).forEach(function (n) {
      t.fn[n] = rt[n]
   });
   var a, p, w, n = {
         deleteProps: function (n) {
            var t = n;
            Object.keys(t).forEach(function (n) {
               try {
                  t[n] = null
               } catch (n) {}
               try {
                  delete t[n]
               } catch (n) {}
            })
         },
         nextTick: function (n, t) {
            return void 0 === t && (t = 0), setTimeout(n, t)
         },
         now: function () {
            return Date.now()
         },
         getTranslate: function (n, t) {
            var f, u, e, r;
            return void 0 === t && (t = "x"), r = i.getComputedStyle(n, null), i.WebKitCSSMatrix ? (6 < (u = r.transform || r.webkitTransform).split(",").length && (u = u.split(", ").map(function (n) {
               return n.replace(",", ".")
            }).join(", ")), e = new i.WebKitCSSMatrix("none" === u ? "" : u)) : f = (e = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (u = i.WebKitCSSMatrix ? e.m41 : 16 === f.length ? parseFloat(f[12]) : parseFloat(f[4])), "y" === t && (u = i.WebKitCSSMatrix ? e.m42 : 16 === f.length ? parseFloat(f[13]) : parseFloat(f[5])), u || 0
         },
         parseUrlQuery: function (n) {
            var r, f, u, e, o = {},
               t = n || i.location.href;
            if ("string" == typeof t && t.length)
               for (e = (f = (t = -1 < t.indexOf("?") ? t.replace(/\S*\?/, "") : "").split("&").filter(function (n) {
                     return "" !== n
                  })).length, r = 0; r < e; r += 1) u = f[r].replace(/#\S+/g, "").split("="), o[decodeURIComponent(u[0])] = void 0 === u[1] ? void 0 : decodeURIComponent(u[1]) || "";
            return o
         },
         isObject: function (n) {
            return "object" == typeof n && null !== n && n.constructor && n.constructor === Object
         },
         extend: function () {
            for (var r, f, i, t, o, u = [], e = arguments.length; e--;) u[e] = arguments[e];
            for (r = Object(u[0]), f = 1; f < u.length; f += 1)
               if (i = u[f], null != i)
                  for (var h = Object.keys(Object(i)), s = 0, c = h.length; s < c; s += 1) t = h[s], o = Object.getOwnPropertyDescriptor(i, t), void 0 !== o && o.enumerable && (n.isObject(r[t]) && n.isObject(i[t]) ? n.extend(r[t], i[t]) : !n.isObject(r[t]) && n.isObject(i[t]) ? (r[t] = {}, n.extend(r[t], i[t])) : r[t] = i[t]);
            return r
         }
      },
      r = (w = u.createElement("div"), {
         touch: i.Modernizr && !0 === i.Modernizr.touch || !!("ontouchstart" in i || i.DocumentTouch && u instanceof i.DocumentTouch),
         pointerEvents: !(!i.navigator.pointerEnabled && !i.PointerEvent),
         prefixedPointerEvents: !!i.navigator.msPointerEnabled,
         transition: (p = w.style, "transition" in p || "webkitTransition" in p || "MozTransition" in p),
         transforms3d: i.Modernizr && !0 === i.Modernizr.csstransforms3d || (a = w.style, "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a),
         flexbox: function () {
            for (var i = w.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n += 1)
               if (t[n] in i) return !0;
            return !1
         }(),
         observer: "MutationObserver" in i || "WebkitMutationObserver" in i,
         passiveListener: function () {
            var n = !1,
               t;
            try {
               t = Object.defineProperty({}, "passive", {
                  get: function () {
                     n = !0
                  }
               });
               i.addEventListener("testPassiveListener", null, t)
            } catch (n) {}
            return n
         }(),
         gestures: "ongesturestart" in i
      }),
      h = function (n) {
         void 0 === n && (n = {});
         var t = this;
         t.params = n;
         t.eventsListeners = {};
         t.params && t.params.on && Object.keys(t.params.on).forEach(function (n) {
            t.on(n, t.params.on[n])
         })
      },
      at = {
         components: {
            configurable: !0
         }
      };
   h.prototype.on = function (n, t, i) {
      var r = this,
         u;
      return "function" != typeof t ? r : (u = i ? "unshift" : "push", n.split(" ").forEach(function (n) {
         r.eventsListeners[n] || (r.eventsListeners[n] = []);
         r.eventsListeners[n][u](t)
      }), r)
   };
   h.prototype.once = function (n, t, i) {
      var r = this;
      return "function" != typeof t ? r : r.on(n, function i() {
         for (var f = [], u = arguments.length; u--;) f[u] = arguments[u];
         t.apply(r, f);
         r.off(n, i)
      }, i)
   };
   h.prototype.off = function (n, t) {
      var i = this;
      return i.eventsListeners && n.split(" ").forEach(function (n) {
         void 0 === t ? i.eventsListeners[n] = [] : i.eventsListeners[n] && i.eventsListeners[n].length && i.eventsListeners[n].forEach(function (r, u) {
            r === t && i.eventsListeners[n].splice(u, 1)
         })
      }), i
   };
   h.prototype.emit = function () {
      for (var i, r, u, t, n = [], f = arguments.length; f--;) n[f] = arguments[f];
      return t = this, t.eventsListeners && ("string" == typeof n[0] || Array.isArray(n[0]) ? (i = n[0], r = n.slice(1, n.length), u = t) : (i = n[0].events, r = n[0].data, u = n[0].context || t), (Array.isArray(i) ? i : i.split(" ")).forEach(function (n) {
         if (t.eventsListeners && t.eventsListeners[n]) {
            var i = [];
            t.eventsListeners[n].forEach(function (n) {
               i.push(n)
            });
            i.forEach(function (n) {
               n.apply(u, r)
            })
         }
      })), t
   };
   h.prototype.useModulesParams = function (t) {
      var i = this;
      i.modules && Object.keys(i.modules).forEach(function (r) {
         var u = i.modules[r];
         u.params && n.extend(t, u.params)
      })
   };
   h.prototype.useModules = function (n) {
      void 0 === n && (n = {});
      var t = this;
      t.modules && Object.keys(t.modules).forEach(function (i) {
         var r = t.modules[i],
            u = n[i] || {};
         r.instance && Object.keys(r.instance).forEach(function (n) {
            var i = r.instance[n];
            t[n] = "function" == typeof i ? i.bind(t) : i
         });
         r.on && t.on && Object.keys(r.on).forEach(function (n) {
            t.on(n, r.on[n])
         });
         r.create && r.create.bind(t)(u)
      })
   };
   at.components.set = function (n) {
      this.use && this.use(n)
   };
   h.installModule = function (t) {
      for (var i, u, f = [], r = arguments.length - 1; 0 < r--;) f[r] = arguments[r + 1];
      return i = this, i.prototype.modules || (i.prototype.modules = {}), u = t.name || Object.keys(i.prototype.modules).length + "_" + n.now(), (i.prototype.modules[u] = t).proto && Object.keys(t.proto).forEach(function (n) {
         i.prototype[n] = t.proto[n]
      }), t.static && Object.keys(t.static).forEach(function (n) {
         i[n] = t.static[n]
      }), t.install && t.install.apply(i, f), i
   };
   h.use = function (n) {
      for (var t, r = [], i = arguments.length - 1; 0 < i--;) r[i] = arguments[i + 1];
      return t = this, Array.isArray(n) ? (n.forEach(function (n) {
         return t.installModule(n)
      }), t) : t.installModule.apply(t, [n].concat(r))
   };
   Object.defineProperties(h, at);
   var gt = {
         updateSize: function () {
            var i, r, t = this,
               u = t.$el;
            i = void 0 !== t.params.width ? t.params.width : u[0].clientWidth;
            r = void 0 !== t.params.height ? t.params.height : u[0].clientHeight;
            0 === i && t.isHorizontal() || 0 === r && t.isVertical() || (i = i - parseInt(u.css("padding-left"), 10) - parseInt(u.css("padding-right"), 10), r = r - parseInt(u.css("padding-top"), 10) - parseInt(u.css("padding-bottom"), 10), n.extend(t, {
               width: i,
               height: r,
               size: t.isHorizontal() ? i : r
            }))
         },
         updateSlides: function () {
            var u = this,
               t = u.params,
               w = u.$wrapperEl,
               a = u.size,
               ht = u.rtlTranslate,
               dt = u.wrongRTL,
               bt = u.virtual && t.virtual.enabled,
               gt = bt ? u.virtual.slides.length : u.slides.length,
               l = w.children("." + u.params.slideClass),
               y = bt ? u.virtual.slides.length : l.length,
               f = [],
               b = [],
               ct = [],
               lt = t.slidesOffsetBefore,
               rt, k, o, s, tt, ut, it, ft, et, at;
            "function" == typeof lt && (lt = t.slidesOffsetBefore.call(u));
            rt = t.slidesOffsetAfter;
            "function" == typeof rt && (rt = t.slidesOffsetAfter.call(u));
            var ni = u.snapGrid.length,
               ti = u.snapGrid.length,
               h = t.spaceBetween,
               e = -lt,
               vt = 0,
               yt = 0;
            if (void 0 !== a) {
               "string" == typeof h && 0 <= h.indexOf("%") && (h = parseFloat(h.replace("%", "")) / 100 * a);
               u.virtualSize = -h;
               ht ? l.css({
                  marginLeft: "",
                  marginTop: ""
               }) : l.css({
                  marginRight: "",
                  marginBottom: ""
               });
               1 < t.slidesPerColumn && (k = Math.floor(y / t.slidesPerColumn) === y / u.params.slidesPerColumn ? y : Math.ceil(y / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (k = Math.max(k, t.slidesPerView * t.slidesPerColumn)));
               for (var d, g = t.slidesPerColumn, ot = k / g, kt = ot - (t.slidesPerColumn * ot - y), c = 0; c < y; c += 1) {
                  if (o = 0, s = l.eq(c), 1 < t.slidesPerColumn) {
                     var nt = void 0,
                        p = void 0,
                        v = void 0;
                     "column" === t.slidesPerColumnFill ? (v = c - (p = Math.floor(c / g)) * g, (kt < p || p === kt && v === g - 1) && g <= (v += 1) && (v = 0, p += 1), nt = p + v * k / g, s.css({
                        "-webkit-box-ordinal-group": nt,
                        "-moz-box-ordinal-group": nt,
                        "-ms-flex-order": nt,
                        "-webkit-order": nt,
                        order: nt
                     })) : p = c - (v = Math.floor(c / ot)) * ot;
                     s.css("margin-" + (u.isHorizontal() ? "top" : "left"), 0 !== v && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", p).attr("data-swiper-row", v)
                  }
                  if ("none" !== s.css("display")) {
                     if ("auto" === t.slidesPerView) {
                        var st = i.getComputedStyle(s[0], null),
                           pt = s[0].style.transform,
                           wt = s[0].style.webkitTransform;
                        pt && (s[0].style.transform = "none");
                        wt && (s[0].style.webkitTransform = "none");
                        o = t.roundLengths ? u.isHorizontal() ? s.outerWidth(!0) : s.outerHeight(!0) : u.isHorizontal() ? s[0].getBoundingClientRect().width + parseFloat(st.getPropertyValue("margin-left")) + parseFloat(st.getPropertyValue("margin-right")) : s[0].getBoundingClientRect().height + parseFloat(st.getPropertyValue("margin-top")) + parseFloat(st.getPropertyValue("margin-bottom"));
                        pt && (s[0].style.transform = pt);
                        wt && (s[0].style.webkitTransform = wt);
                        t.roundLengths && (o = Math.floor(o))
                     } else o = (a - (t.slidesPerView - 1) * h) / t.slidesPerView, t.roundLengths && (o = Math.floor(o)), l[c] && (u.isHorizontal() ? l[c].style.width = o + "px" : l[c].style.height = o + "px");
                     l[c] && (l[c].swiperSlideSize = o);
                     ct.push(o);
                     t.centeredSlides ? (e = e + o / 2 + vt / 2 + h, 0 === vt && 0 !== c && (e = e - a / 2 - h), 0 === c && (e = e - a / 2 - h), Math.abs(e) < .001 && (e = 0), t.roundLengths && (e = Math.floor(e)), yt % t.slidesPerGroup == 0 && f.push(e), b.push(e)) : (t.roundLengths && (e = Math.floor(e)), yt % t.slidesPerGroup == 0 && f.push(e), b.push(e), e = e + o + h);
                     u.virtualSize += o + h;
                     vt = o;
                     yt += 1
                  }
               }
               if (u.virtualSize = Math.max(u.virtualSize, a) + rt, ht && dt && ("slide" === t.effect || "coverflow" === t.effect) && w.css({
                     width: u.virtualSize + t.spaceBetween + "px"
                  }), r.flexbox && !t.setWrapperSize || (u.isHorizontal() ? w.css({
                     width: u.virtualSize + t.spaceBetween + "px"
                  }) : w.css({
                     height: u.virtualSize + t.spaceBetween + "px"
                  })), 1 < t.slidesPerColumn && (u.virtualSize = (o + t.spaceBetween) * k, u.virtualSize = Math.ceil(u.virtualSize / t.slidesPerColumn) - t.spaceBetween, u.isHorizontal() ? w.css({
                     width: u.virtualSize + t.spaceBetween + "px"
                  }) : w.css({
                     height: u.virtualSize + t.spaceBetween + "px"
                  }), t.centeredSlides)) {
                  for (d = [], tt = 0; tt < f.length; tt += 1) ut = f[tt], t.roundLengths && (ut = Math.floor(ut)), f[tt] < u.virtualSize + f[0] && d.push(ut);
                  f = d
               }
               if (!t.centeredSlides) {
                  for (d = [], it = 0; it < f.length; it += 1) ft = f[it], t.roundLengths && (ft = Math.floor(ft)), f[it] <= u.virtualSize - a && d.push(ft);
                  f = d;
                  1 < Math.floor(u.virtualSize - a) - Math.floor(f[f.length - 1]) && f.push(u.virtualSize - a)
               }(0 === f.length && (f = [0]), 0 !== t.spaceBetween && (u.isHorizontal() ? ht ? l.css({
                  marginLeft: h + "px"
               }) : l.css({
                  marginRight: h + "px"
               }) : l.css({
                  marginBottom: h + "px"
               })), t.centerInsufficientSlides) && (et = 0, (ct.forEach(function (n) {
                  et += n + (t.spaceBetween ? t.spaceBetween : 0)
               }), (et -= t.spaceBetween) < a) && (at = (a - et) / 2, f.forEach(function (n, t) {
                  f[t] = n - at
               }), b.forEach(function (n, t) {
                  b[t] = n + at
               })));
               n.extend(u, {
                  slides: l,
                  snapGrid: f,
                  slidesGrid: b,
                  slidesSizesGrid: ct
               });
               y !== gt && u.emit("slidesLengthChange");
               f.length !== ni && (u.params.watchOverflow && u.checkOverflow(), u.emit("snapGridLengthChange"));
               b.length !== ti && u.emit("slidesGridLengthChange");
               (t.watchSlidesProgress || t.watchSlidesVisibility) && u.updateSlidesOffset()
            }
         },
         updateAutoHeight: function (n) {
            var i, t = this,
               r = [],
               u = 0,
               f, e;
            if ("number" == typeof n ? t.setTransition(n) : !0 === n && t.setTransition(t.params.speed), "auto" !== t.params.slidesPerView && 1 < t.params.slidesPerView)
               for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                  if (f = t.activeIndex + i, f > t.slides.length) break;
                  r.push(t.slides.eq(f)[0])
               } else r.push(t.slides.eq(t.activeIndex)[0]);
            for (i = 0; i < r.length; i += 1) void 0 !== r[i] && (e = r[i].offsetHeight, u = u < e ? e : u);
            u && t.$wrapperEl.css("height", u + "px")
         },
         updateSlidesOffset: function () {
            for (var t = this.slides, n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = this.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
         },
         updateSlidesProgress: function (n) {
            var s, r, u, c, e, h;
            void 0 === n && (n = this && this.translate || 0);
            var i = this,
               o = i.params,
               f = i.slides,
               l = i.rtlTranslate;
            if (0 !== f.length) {
               for (void 0 === f[0].swiperSlideOffset && i.updateSlidesOffset(), s = -n, l && (s = n), f.removeClass(o.slideVisibleClass), i.visibleSlidesIndexes = [], i.visibleSlides = [], r = 0; r < f.length; r += 1) u = f[r], c = (s + (o.centeredSlides ? i.minTranslate() : 0) - u.swiperSlideOffset) / (u.swiperSlideSize + o.spaceBetween), o.watchSlidesVisibility && (e = -(s - u.swiperSlideOffset), h = e + i.slidesSizesGrid[r], (0 <= e && e < i.size || 0 < h && h <= i.size || e <= 0 && h >= i.size) && (i.visibleSlides.push(u), i.visibleSlidesIndexes.push(r), f.eq(r).addClass(o.slideVisibleClass))), u.progress = l ? -c : c;
               i.visibleSlides = t(i.visibleSlides)
            }
         },
         updateProgress: function (t) {
            void 0 === t && (t = this && this.translate || 0);
            var i = this,
               e = i.params,
               o = i.maxTranslate() - i.minTranslate(),
               f = i.progress,
               r = i.isBeginning,
               u = i.isEnd,
               s = r,
               h = u;
            0 === o ? u = r = !(f = 0) : (r = (f = (t - i.minTranslate()) / o) <= 0, u = 1 <= f);
            n.extend(i, {
               progress: f,
               isBeginning: r,
               isEnd: u
            });
            (e.watchSlidesProgress || e.watchSlidesVisibility) && i.updateSlidesProgress(t);
            r && !s && i.emit("reachBeginning toEdge");
            u && !h && i.emit("reachEnd toEdge");
            (s && !r || h && !u) && i.emit("fromEdge");
            i.emit("progress", f)
         },
         updateSlidesClasses: function () {
            var f, t = this,
               e = t.slides,
               n = t.params,
               i = t.$wrapperEl,
               o = t.activeIndex,
               s = t.realIndex,
               h = t.virtual && n.virtual.enabled,
               r, u;
            e.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass);
            (f = h ? t.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + o + '"]') : e.eq(o)).addClass(n.slideActiveClass);
            n.loop && (f.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(n.slideDuplicateActiveClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(n.slideDuplicateActiveClass));
            r = f.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
            n.loop && 0 === r.length && (r = e.eq(0)).addClass(n.slideNextClass);
            u = f.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
            n.loop && 0 === u.length && (u = e.eq(-1)).addClass(n.slidePrevClass);
            n.loop && (r.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), u.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + u.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + u.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
         },
         updateActiveIndex: function (t) {
            var o, i = this,
               e = i.rtlTranslate ? i.translate : -i.translate,
               f = i.slidesGrid,
               s = i.snapGrid,
               c = i.params,
               l = i.activeIndex,
               a = i.realIndex,
               v = i.snapIndex,
               u = t,
               r, h;
            if (void 0 === u) {
               for (r = 0; r < f.length; r += 1) void 0 !== f[r + 1] ? e >= f[r] && e < f[r + 1] - (f[r + 1] - f[r]) / 2 ? u = r : e >= f[r] && e < f[r + 1] && (u = r + 1) : e >= f[r] && (u = r);
               c.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
            }((o = 0 <= s.indexOf(e) ? s.indexOf(e) : Math.floor(u / c.slidesPerGroup)) >= s.length && (o = s.length - 1), u !== l) ? (h = parseInt(i.slides.eq(u).attr("data-swiper-slide-index") || u, 10), n.extend(i, {
               snapIndex: o,
               realIndex: h,
               previousIndex: l,
               activeIndex: u
            }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), a !== h && i.emit("realIndexChange"), i.emit("slideChange")) : o !== v && (i.snapIndex = o, i.emit("snapIndexChange"))
         },
         updateClickedSlide: function (n) {
            var i = this,
               f = i.params,
               r = t(n.target).closest("." + f.slideClass)[0],
               e = !1,
               u;
            if (r)
               for (u = 0; u < i.slides.length; u += 1) i.slides[u] === r && (e = !0);
            if (!r || !e) return i.clickedSlide = void 0, void(i.clickedIndex = void 0);
            i.clickedSlide = r;
            i.clickedIndex = i.virtual && i.params.virtual.enabled ? parseInt(t(r).attr("data-swiper-slide-index"), 10) : t(r).index();
            f.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
         }
      },
      ni = {
         getTranslate: function (t) {
            var i;
            void 0 === t && (t = this.isHorizontal() ? "x" : "y");
            var f = this.params,
               r = this.rtlTranslate,
               u = this.translate,
               e = this.$wrapperEl;
            return f.virtualTranslate ? r ? -u : u : (i = n.getTranslate(e[0], t), r && (i = -i), i || 0)
         },
         setTranslate: function (n, t) {
            var i = this,
               h = i.rtlTranslate,
               o = i.params,
               s = i.$wrapperEl,
               c = i.progress,
               u = 0,
               f = 0,
               e;
            i.isHorizontal() ? u = h ? -n : n : f = n;
            o.roundLengths && (u = Math.floor(u), f = Math.floor(f));
            o.virtualTranslate || (r.transforms3d ? s.transform("translate3d(" + u + "px, " + f + "px, 0px)") : s.transform("translate(" + u + "px, " + f + "px)"));
            i.previousTranslate = i.translate;
            i.translate = i.isHorizontal() ? u : f;
            e = i.maxTranslate() - i.minTranslate();
            (0 === e ? 0 : (n - i.minTranslate()) / e) !== c && i.updateProgress(n);
            i.emit("setTranslate", i.translate, t)
         },
         minTranslate: function () {
            return -this.snapGrid[0]
         },
         maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
         }
      },
      ti = {
         setTransition: function (n, t) {
            this.$wrapperEl.transition(n);
            this.emit("setTransition", n, t)
         },
         transitionStart: function (n, t) {
            var r;
            void 0 === n && (n = !0);
            var i = this,
               u = i.activeIndex,
               e = i.params,
               f = i.previousIndex;
            if (e.autoHeight && i.updateAutoHeight(), r = t, r || (r = f < u ? "next" : u < f ? "prev" : "reset"), i.emit("transitionStart"), n && u !== f) {
               if ("reset" === r) return void i.emit("slideResetTransitionStart");
               i.emit("slideChangeTransitionStart");
               "next" === r ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
            }
         },
         transitionEnd: function (n, t) {
            var r;
            void 0 === n && (n = !0);
            var i = this,
               u = i.activeIndex,
               f = i.previousIndex;
            if (i.animating = !1, i.setTransition(0), r = t, r || (r = f < u ? "next" : u < f ? "prev" : "reset"), i.emit("transitionEnd"), n && u !== f) {
               if ("reset" === r) return void i.emit("slideResetTransitionEnd");
               i.emit("slideChangeTransitionEnd");
               "next" === r ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
            }
         }
      },
      ii = {
         slideTo: function (n, t, i, u) {
            var f, e, a, s, o, c;
            void 0 === n && (n = 0);
            void 0 === t && (t = this.params.speed);
            void 0 === i && (i = !0);
            f = this;
            e = n;
            e < 0 && (e = 0);
            var h = f.params,
               v = f.snapGrid,
               y = f.slidesGrid,
               w = f.previousIndex,
               l = f.activeIndex,
               p = f.rtlTranslate;
            if (f.animating && h.preventInteractionOnTransition) return !1;
            if (a = Math.floor(e / h.slidesPerGroup), a >= v.length && (a = v.length - 1), (l || h.initialSlide || 0) === (w || 0) && i && f.emit("beforeSlideChangeStart"), o = -v[a], f.updateProgress(o), h.normalizeSlideIndex)
               for (c = 0; c < y.length; c += 1) - Math.floor(100 * o) >= Math.floor(100 * y[c]) && (e = c);
            return f.initialized && e !== l && (!f.allowSlideNext && o < f.translate && o < f.minTranslate() || !f.allowSlidePrev && o > f.translate && o > f.maxTranslate() && (l || 0) !== e) ? !1 : (s = l < e ? "next" : e < l ? "prev" : "reset", p && -o === f.translate || !p && o === f.translate ? (f.updateActiveIndex(e), h.autoHeight && f.updateAutoHeight(), f.updateSlidesClasses(), "slide" !== h.effect && f.setTranslate(o), "reset" !== s && (f.transitionStart(i, s), f.transitionEnd(i, s)), !1) : (0 !== t && r.transition ? (f.setTransition(t), f.setTranslate(o), f.updateActiveIndex(e), f.updateSlidesClasses(), f.emit("beforeTransitionStart", t, u), f.transitionStart(i, s), f.animating || (f.animating = !0, f.onSlideToWrapperTransitionEnd || (f.onSlideToWrapperTransitionEnd = function (n) {
               f && !f.destroyed && n.target === this && (f.$wrapperEl[0].removeEventListener("transitionend", f.onSlideToWrapperTransitionEnd), f.$wrapperEl[0].removeEventListener("webkitTransitionEnd", f.onSlideToWrapperTransitionEnd), f.onSlideToWrapperTransitionEnd = null, delete f.onSlideToWrapperTransitionEnd, f.transitionEnd(i, s))
            }), f.$wrapperEl[0].addEventListener("transitionend", f.onSlideToWrapperTransitionEnd), f.$wrapperEl[0].addEventListener("webkitTransitionEnd", f.onSlideToWrapperTransitionEnd))) : (f.setTransition(0), f.setTranslate(o), f.updateActiveIndex(e), f.updateSlidesClasses(), f.emit("beforeTransitionStart", t, u), f.transitionStart(i, s), f.transitionEnd(i, s)), !0))
         },
         slideToLoop: function (n, t, i, r) {
            void 0 === n && (n = 0);
            void 0 === t && (t = this.params.speed);
            void 0 === i && (i = !0);
            var u = n;
            return this.params.loop && (u += this.loopedSlides), this.slideTo(u, t, i, r)
         },
         slideNext: function (n, t, i) {
            void 0 === n && (n = this.params.speed);
            void 0 === t && (t = !0);
            var r = this,
               u = r.params,
               f = r.animating;
            return u.loop ? !f && (r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft, r.slideTo(r.activeIndex + u.slidesPerGroup, n, t, i)) : r.slideTo(r.activeIndex + u.slidesPerGroup, n, t, i)
         },
         slidePrev: function (n, t, i) {
            function u(n) {
               return n < 0 ? -Math.floor(Math.abs(n)) : Math.floor(n)
            }
            void 0 === n && (n = this.params.speed);
            void 0 === t && (t = !0);
            var r = this,
               l = r.params,
               a = r.animating,
               f = r.snapGrid,
               o = r.slidesGrid,
               v = r.rtlTranslate;
            if (l.loop) {
               if (a) return !1;
               r.loopFix();
               r._clientLeft = r.$wrapperEl[0].clientLeft
            }
            var e, s = u(v ? r.translate : -r.translate),
               h = f.map(function (n) {
                  return u(n)
               }),
               c = (o.map(function (n) {
                  return u(n)
               }), f[h.indexOf(s)], f[h.indexOf(s) - 1]);
            return void 0 !== c && (e = o.indexOf(c)) < 0 && (e = r.activeIndex - 1), r.slideTo(e, n, t, i)
         },
         slideReset: function (n, t, i) {
            return void 0 === n && (n = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, n, t, i)
         },
         slideToClosest: function (n, t, i) {
            var o, u;
            void 0 === n && (n = this.params.speed);
            void 0 === t && (t = !0);
            var r = this,
               f = r.activeIndex,
               e = Math.floor(f / r.params.slidesPerGroup);
            return e < r.snapGrid.length - 1 && (o = r.rtlTranslate ? r.translate : -r.translate, u = r.snapGrid[e], (r.snapGrid[e + 1] - u) / 2 < o - u && (f = r.params.slidesPerGroup)), r.slideTo(f, n, t, i)
         },
         slideToClickedSlide: function () {
            var f, i = this,
               u = i.params,
               o = i.$wrapperEl,
               e = "auto" === u.slidesPerView ? i.slidesPerViewDynamic() : u.slidesPerView,
               r = i.clickedIndex;
            if (u.loop) {
               if (i.animating) return;
               f = parseInt(t(i.clickedSlide).attr("data-swiper-slide-index"), 10);
               u.centeredSlides ? r < i.loopedSlides - e / 2 || r > i.slides.length - i.loopedSlides + e / 2 ? (i.loopFix(), r = o.children("." + u.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.' + u.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function () {
                  i.slideTo(r)
               })) : i.slideTo(r) : r > i.slides.length - e ? (i.loopFix(), r = o.children("." + u.slideClass + '[data-swiper-slide-index="' + f + '"]:not(.' + u.slideDuplicateClass + ")").eq(0).index(), n.nextTick(function () {
                  i.slideTo(r)
               })) : i.slideTo(r)
            } else i.slideTo(r)
         }
      },
      ri = {
         loopCreate: function () {
            var r = this,
               n = r.params,
               f = r.$wrapperEl,
               i, c, l, a, e, o, s, h;
            if (f.children("." + n.slideClass + "." + n.slideDuplicateClass).remove(), i = f.children("." + n.slideClass), n.loopFillGroupWithBlank && (c = n.slidesPerGroup - i.length % n.slidesPerGroup, c !== n.slidesPerGroup)) {
               for (l = 0; l < c; l += 1) a = t(u.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass), f.append(a);
               i = f.children("." + n.slideClass)
            }
            for ("auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = i.length), r.loopedSlides = parseInt(n.loopedSlides || n.slidesPerView, 10), r.loopedSlides += n.loopAdditionalSlides, r.loopedSlides > i.length && (r.loopedSlides = i.length), e = [], o = [], i.each(function (n, u) {
                  var f = t(u);
                  n < r.loopedSlides && o.push(u);
                  n < i.length && n >= i.length - r.loopedSlides && e.push(u);
                  f.attr("data-swiper-slide-index", n)
               }), s = 0; s < o.length; s += 1) f.append(t(o[s].cloneNode(!0)).addClass(n.slideDuplicateClass));
            for (h = e.length - 1; 0 <= h; h -= 1) f.prepend(t(e[h].cloneNode(!0)).addClass(n.slideDuplicateClass))
         },
         loopFix: function () {
            var i, n = this,
               o = n.params,
               r = n.activeIndex,
               f = n.slides,
               t = n.loopedSlides,
               s = n.allowSlidePrev,
               h = n.allowSlideNext,
               c = n.snapGrid,
               e = n.rtlTranslate,
               u;
            n.allowSlidePrev = !0;
            n.allowSlideNext = !0;
            u = -c[r] - n.getTranslate();
            r < t ? (i = f.length - 3 * t + r, i += t, n.slideTo(i, 0, !1, !0) && 0 !== u && n.setTranslate((e ? -n.translate : n.translate) - u)) : ("auto" === o.slidesPerView && 2 * t <= r || r >= f.length - t) && (i = -f.length + r + t, i += t, n.slideTo(i, 0, !1, !0) && 0 !== u && n.setTranslate((e ? -n.translate : n.translate) - u));
            n.allowSlidePrev = s;
            n.allowSlideNext = h
         },
         loopDestroy: function () {
            var t = this.$wrapperEl,
               n = this.params,
               i = this.slides;
            t.children("." + n.slideClass + "." + n.slideDuplicateClass).remove();
            i.removeAttr("data-swiper-slide-index")
         }
      },
      ui = {
         setGrabCursor: function (n) {
            if (!(r.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
               var t = this.el;
               t.style.cursor = "move";
               t.style.cursor = n ? "-webkit-grabbing" : "-webkit-grab";
               t.style.cursor = n ? "-moz-grabbin" : "-moz-grab";
               t.style.cursor = n ? "grabbing" : "grab"
            }
         },
         unsetGrabCursor: function () {
            r.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
         }
      },
      fi = {
         appendSlide: function (n) {
            var t = this,
               f = t.$wrapperEl,
               u = t.params,
               i;
            if (u.loop && t.loopDestroy(), "object" == typeof n && "length" in n)
               for (i = 0; i < n.length; i += 1) n[i] && f.append(n[i]);
            else f.append(n);
            u.loop && t.loopCreate();
            u.observer && r.observer || t.update()
         },
         prependSlide: function (n) {
            var t = this,
               u = t.params,
               e = t.$wrapperEl,
               o = t.activeIndex,
               f, i;
            if (u.loop && t.loopDestroy(), f = o + 1, "object" == typeof n && "length" in n) {
               for (i = 0; i < n.length; i += 1) n[i] && e.prepend(n[i]);
               f = o + n.length
            } else e.prepend(n);
            u.loop && t.loopCreate();
            u.observer && r.observer || t.update();
            t.slideTo(f, 0, !1)
         },
         addSlide: function (n, t) {
            var i = this,
               o = i.$wrapperEl,
               f = i.params,
               u = i.activeIndex,
               h, c, e, s;
            if (f.loop && (u -= i.loopedSlides, i.loopDestroy(), i.slides = o.children("." + f.slideClass)), h = i.slides.length, n <= 0) i.prependSlide(t);
            else if (h <= n) i.appendSlide(t);
            else {
               for (var l = n < u ? u + 1 : u, a = [], v = h - 1; n <= v; v -= 1) c = i.slides.eq(v), c.remove(), a.unshift(c);
               if ("object" == typeof t && "length" in t) {
                  for (e = 0; e < t.length; e += 1) t[e] && o.append(t[e]);
                  l = n < u ? u + t.length : u
               } else o.append(t);
               for (s = 0; s < a.length; s += 1) o.append(a[s]);
               f.loop && i.loopCreate();
               f.observer && r.observer || i.update();
               f.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1)
            }
         },
         removeSlide: function (n) {
            var t = this,
               f = t.params,
               s = t.$wrapperEl,
               o = t.activeIndex,
               u, i, e;
            if (f.loop && (o -= t.loopedSlides, t.loopDestroy(), t.slides = s.children("." + f.slideClass)), i = o, "object" == typeof n && "length" in n) {
               for (e = 0; e < n.length; e += 1) u = n[e], t.slides[u] && t.slides.eq(u).remove(), u < i && (i -= 1);
               i = Math.max(i, 0)
            } else u = n, t.slides[u] && t.slides.eq(u).remove(), u < i && (i -= 1), i = Math.max(i, 0);
            f.loop && t.loopCreate();
            f.observer && r.observer || t.update();
            f.loop ? t.slideTo(i + t.loopedSlides, 0, !1) : t.slideTo(i, 0, !1)
         },
         removeAllSlides: function () {
            for (var t = [], n = 0; n < this.slides.length; n += 1) t.push(n);
            this.removeSlide(t)
         }
      },
      e = function () {
         var t = i.navigator.userAgent,
            n = {
               ios: !1,
               android: !1,
               androidChrome: !1,
               desktop: !1,
               windows: !1,
               iphone: !1,
               ipod: !1,
               ipad: !1,
               cordova: i.cordova || i.phonegap,
               phonegap: i.cordova || i.phonegap
            },
            s = t.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
            c = t.match(/(Android);?[\s\/]+([\d.]+)?/),
            f = t.match(/(iPad).*OS\s([\d_]+)/),
            r = t.match(/(iPod)(.*OS\s([\d_]+))?/),
            e = !f && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            o, h;
         return (s && (n.os = "windows", n.osVersion = s[2], n.windows = !0), c && !s && (n.os = "android", n.osVersion = c[2], n.android = !0, n.androidChrome = 0 <= t.toLowerCase().indexOf("chrome")), (f || e || r) && (n.os = "ios", n.ios = !0), e && !r && (n.osVersion = e[2].replace(/_/g, "."), n.iphone = !0), f && (n.osVersion = f[2].replace(/_/g, "."), n.ipad = !0), r && (n.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, n.iphone = !0), n.ios && n.osVersion && 0 <= t.indexOf("Version/") && "10" === n.osVersion.split(".")[0] && (n.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]), n.desktop = !(n.os || n.android || n.webView), n.webView = (e || f || r) && t.match(/.*AppleWebKit(?!.*Safari)/i), n.os && "ios" === n.os) && (o = n.osVersion.split("."), h = u.querySelector('meta[name="viewport"]'), n.minimalUi = !n.webView && (r || e) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && h && 0 <= h.getAttribute("content").indexOf("minimal-ui")), n.pixelRatio = i.devicePixelRatio || 1, n
      }(),
      ei = {
         attachEvents: function () {
            var f = this,
               o = f.params,
               s = f.touchEvents,
               a = f.el,
               v = f.wrapperEl,
               h, c, l;
            f.onTouchStart = function (r) {
               var o = this,
                  s = o.touchEventsData,
                  e = o.params,
                  h = o.touches,
                  f, c;
               if ((!o.animating || !e.preventInteractionOnTransition) && (f = r, f.originalEvent && (f = f.originalEvent), s.isTouchEvent = "touchstart" === f.type, (s.isTouchEvent || !("which" in f) || 3 !== f.which) && !(!s.isTouchEvent && "button" in f && 0 < f.button || s.isTouched && s.isMoved)))
                  if (e.noSwiping && t(f.target).closest(e.noSwipingSelector ? e.noSwipingSelector : "." + e.noSwipingClass)[0]) o.allowClick = !0;
                  else if (!e.swipeHandler || t(f).closest(e.swipeHandler)[0]) {
                  h.currentX = "touchstart" === f.type ? f.targetTouches[0].pageX : f.pageX;
                  h.currentY = "touchstart" === f.type ? f.targetTouches[0].pageY : f.pageY;
                  var l = h.currentX,
                     v = h.currentY,
                     y = e.edgeSwipeDetection || e.iOSEdgeSwipeDetection,
                     a = e.edgeSwipeThreshold || e.iOSEdgeSwipeThreshold;
                  y && (l <= a || l >= i.screen.width - a) || ((n.extend(s, {
                     isTouched: !0,
                     isMoved: !1,
                     allowTouchCallbacks: !0,
                     isScrolling: void 0,
                     startMoving: void 0
                  }), h.startX = l, h.startY = v, s.touchStartTime = n.now(), o.allowClick = !0, o.updateSize(), o.swipeDirection = void 0, 0 < e.threshold && (s.allowThresholdMove = !1), "touchstart" !== f.type) && (c = !0, t(f.target).is(s.formElements) && (c = !1), u.activeElement && t(u.activeElement).is(s.formElements) && u.activeElement !== f.target && u.activeElement.blur(), c && o.allowTouchMove && e.touchStartPreventDefault && f.preventDefault()), o.emit("touchStart", f))
               }
            }.bind(f);
            f.onTouchMove = function (i) {
               var f = this,
                  r = f.touchEventsData,
                  s = f.params,
                  e = f.touches,
                  b = f.rtlTranslate,
                  o = i,
                  c, l, w, a, v, h, y, p;
               if (o.originalEvent && (o = o.originalEvent), r.isTouched) {
                  if (!r.isTouchEvent || "mousemove" !== o.type) {
                     if (c = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX, l = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY, o.preventedByNestedSwiper) return e.startX = c, void(e.startY = l);
                     if (!f.allowTouchMove) return f.allowClick = !1, void(r.isTouched && (n.extend(e, {
                        startX: c,
                        startY: l,
                        currentX: c,
                        currentY: l
                     }), r.touchStartTime = n.now()));
                     if (r.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                        if (f.isVertical()) {
                           if (l < e.startY && f.translate <= f.maxTranslate() || l > e.startY && f.translate >= f.minTranslate()) return r.isTouched = !1, void(r.isMoved = !1)
                        } else if (c < e.startX && f.translate <= f.maxTranslate() || c > e.startX && f.translate >= f.minTranslate()) return;
                     if (r.isTouchEvent && u.activeElement && o.target === u.activeElement && t(o.target).is(r.formElements)) return r.isMoved = !0, void(f.allowClick = !1);
                     if ((r.allowTouchCallbacks && f.emit("touchMove", o), !(o.targetTouches && 1 < o.targetTouches.length)) && (e.currentX = c, e.currentY = l, a = e.currentX - e.startX, v = e.currentY - e.startY, !(f.params.threshold && Math.sqrt(Math.pow(a, 2) + Math.pow(v, 2)) < f.params.threshold)))
                        if (void 0 === r.isScrolling && (f.isHorizontal() && e.currentY === e.startY || f.isVertical() && e.currentX === e.startX ? r.isScrolling = !1 : 25 <= a * a + v * v && (w = 180 * Math.atan2(Math.abs(v), Math.abs(a)) / Math.PI, r.isScrolling = f.isHorizontal() ? w > s.touchAngle : 90 - w > s.touchAngle)), r.isScrolling && f.emit("touchMoveOpposite", o), void 0 === r.startMoving && (e.currentX === e.startX && e.currentY === e.startY || (r.startMoving = !0)), r.isScrolling) r.isTouched = !1;
                        else if (r.startMoving) {
                        if (f.allowClick = !1, o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), r.isMoved || (s.loop && f.loopFix(), r.startTranslate = f.getTranslate(), f.setTransition(0), f.animating && f.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !s.grabCursor || !0 !== f.allowSlideNext && !0 !== f.allowSlidePrev || f.setGrabCursor(!0), f.emit("sliderFirstMove", o)), f.emit("sliderMove", o), r.isMoved = !0, h = f.isHorizontal() ? a : v, e.diff = h, h *= s.touchRatio, b && (h = -h), f.swipeDirection = 0 < h ? "prev" : "next", r.currentTranslate = h + r.startTranslate, y = !0, p = s.resistanceRatio, s.touchReleaseOnEdges && (p = 0), 0 < h && r.currentTranslate > f.minTranslate() ? (y = !1, s.resistance && (r.currentTranslate = f.minTranslate() - 1 + Math.pow(-f.minTranslate() + r.startTranslate + h, p))) : h < 0 && r.currentTranslate < f.maxTranslate() && (y = !1, s.resistance && (r.currentTranslate = f.maxTranslate() + 1 - Math.pow(f.maxTranslate() - r.startTranslate - h, p))), y && (o.preventedByNestedSwiper = !0), !f.allowSlideNext && "next" === f.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !f.allowSlidePrev && "prev" === f.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), 0 < s.threshold) {
                           if (!(Math.abs(h) > s.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate);
                           if (!r.allowThresholdMove) return r.allowThresholdMove = !0, e.startX = e.currentX, e.startY = e.currentY, r.currentTranslate = r.startTranslate, void(e.diff = f.isHorizontal() ? e.currentX - e.startX : e.currentY - e.startY)
                        }
                        s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (f.updateActiveIndex(), f.updateSlidesClasses()), s.freeMode && (0 === r.velocities.length && r.velocities.push({
                           position: e[f.isHorizontal() ? "startX" : "startY"],
                           time: r.touchStartTime
                        }), r.velocities.push({
                           position: e[f.isHorizontal() ? "currentX" : "currentY"],
                           time: n.now()
                        })), f.updateProgress(r.currentTranslate), f.setTranslate(r.currentTranslate))
                     }
                  }
               } else r.startMoving && r.isScrolling && f.emit("touchMoveOpposite", o)
            }.bind(f);
            f.onTouchEnd = function (t) {
               var i = this,
                  r = i.touchEventsData,
                  u = i.params,
                  ot = i.touches,
                  g = i.rtlTranslate,
                  nt = i.$wrapperEl,
                  e = i.slidesGrid,
                  h = i.snapGrid,
                  c = t,
                  l, w, a, b, tt, k, v, y, p, it;
               if (c.originalEvent && (c = c.originalEvent), r.allowTouchCallbacks && i.emit("touchEnd", c), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && u.grabCursor && i.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
               if (u.grabCursor && r.isMoved && r.isTouched && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!1), w = n.now(), a = w - r.touchStartTime, i.allowClick && (i.updateClickedSlide(c), i.emit("tap", c), a < 300 && 300 < w - r.lastClickTime && (r.clickTimeout && clearTimeout(r.clickTimeout), r.clickTimeout = n.nextTick(function () {
                     i && !i.destroyed && i.emit("click", c)
                  }, 300)), a < 300 && w - r.lastClickTime < 300 && (r.clickTimeout && clearTimeout(r.clickTimeout), i.emit("doubleTap", c))), r.lastClickTime = n.now(), n.nextTick(function () {
                     i.destroyed || (i.allowClick = !0)
                  }), !r.isTouched || !r.isMoved || !i.swipeDirection || 0 === ot.diff || r.currentTranslate === r.startTranslate) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
               if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, l = u.followFinger ? g ? i.translate : -i.translate : -r.currentTranslate, u.freeMode) {
                  if (l < -i.minTranslate()) return void i.slideTo(i.activeIndex);
                  if (l > -i.maxTranslate()) return void(i.slides.length < h.length ? i.slideTo(h.length - 1) : i.slideTo(i.slides.length - 1));
                  if (u.freeModeMomentum) {
                     if (1 < r.velocities.length) {
                        var rt = r.velocities.pop(),
                           ft = r.velocities.pop(),
                           st = rt.position - ft.position,
                           et = rt.time - ft.time;
                        i.velocity = st / et;
                        i.velocity /= 2;
                        Math.abs(i.velocity) < u.freeModeMinimumVelocity && (i.velocity = 0);
                        (150 < et || 300 < n.now() - rt.time) && (i.velocity = 0)
                     } else i.velocity = 0;
                     i.velocity *= u.freeModeMomentumVelocityRatio;
                     r.velocities.length = 0;
                     var d = 1e3 * u.freeModeMomentumRatio,
                        ht = i.velocity * d,
                        f = i.translate + ht;
                     if (g && (f = -f), k = !1, v = 20 * Math.abs(i.velocity) * u.freeModeMomentumBounceRatio, f < i.maxTranslate()) u.freeModeMomentumBounce ? (f + i.maxTranslate() < -v && (f = i.maxTranslate() - v), b = i.maxTranslate(), k = !0, r.allowMomentumBounce = !0) : f = i.maxTranslate(), u.loop && u.centeredSlides && (tt = !0);
                     else if (f > i.minTranslate()) u.freeModeMomentumBounce ? (f - i.minTranslate() > v && (f = i.minTranslate() + v), b = i.minTranslate(), k = !0, r.allowMomentumBounce = !0) : f = i.minTranslate(), u.loop && u.centeredSlides && (tt = !0);
                     else if (u.freeModeSticky) {
                        for (p = 0; p < h.length; p += 1)
                           if (h[p] > -f) {
                              y = p;
                              break
                           } f = -(f = Math.abs(h[y] - f) < Math.abs(h[y - 1] - f) || "next" === i.swipeDirection ? h[y] : h[y - 1])
                     }
                     if (tt && i.once("transitionEnd", function () {
                           i.loopFix()
                        }), 0 !== i.velocity) d = g ? Math.abs((-f - i.translate) / i.velocity) : Math.abs((f - i.translate) / i.velocity);
                     else if (u.freeModeSticky) return void i.slideToClosest();
                     u.freeModeMomentumBounce && k ? (i.updateProgress(b), i.setTransition(d), i.setTranslate(f), i.transitionStart(!0, i.swipeDirection), i.animating = !0, nt.transitionEnd(function () {
                        i && !i.destroyed && r.allowMomentumBounce && (i.emit("momentumBounce"), i.setTransition(u.speed), i.setTranslate(b), nt.transitionEnd(function () {
                           i && !i.destroyed && i.transitionEnd()
                        }))
                     })) : i.velocity ? (i.updateProgress(f), i.setTransition(d), i.setTranslate(f), i.transitionStart(!0, i.swipeDirection), i.animating || (i.animating = !0, nt.transitionEnd(function () {
                        i && !i.destroyed && i.transitionEnd()
                     }))) : i.updateProgress(f);
                     i.updateActiveIndex();
                     i.updateSlidesClasses()
                  } else if (u.freeModeSticky) return void i.slideToClosest();
                  (!u.freeModeMomentum || a >= u.longSwipesMs) && (i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses())
               } else {
                  for (var o = 0, ut = i.slidesSizesGrid[0], s = 0; s < e.length; s += u.slidesPerGroup) void 0 !== e[s + u.slidesPerGroup] ? l >= e[s] && l < e[s + u.slidesPerGroup] && (ut = e[(o = s) + u.slidesPerGroup] - e[s]) : l >= e[s] && (o = s, ut = e[e.length - 1] - e[e.length - 2]);
                  if (it = (l - e[o]) / ut, a > u.longSwipesMs) {
                     if (!u.longSwipes) return void i.slideTo(i.activeIndex);
                     "next" === i.swipeDirection && (it >= u.longSwipesRatio ? i.slideTo(o + u.slidesPerGroup) : i.slideTo(o));
                     "prev" === i.swipeDirection && (it > 1 - u.longSwipesRatio ? i.slideTo(o + u.slidesPerGroup) : i.slideTo(o))
                  } else {
                     if (!u.shortSwipes) return void i.slideTo(i.activeIndex);
                     "next" === i.swipeDirection && i.slideTo(o + u.slidesPerGroup);
                     "prev" === i.swipeDirection && i.slideTo(o)
                  }
               }
            }.bind(f);
            f.onClick = function (n) {
               this.allowClick || (this.params.preventClicks && n.preventDefault(), this.params.preventClicksPropagation && this.animating && (n.stopPropagation(), n.stopImmediatePropagation()))
            }.bind(f);
            h = "container" === o.touchEventsTarget ? a : v;
            c = !!o.nested;
            !r.touch && (r.pointerEvents || r.prefixedPointerEvents) ? (h.addEventListener(s.start, f.onTouchStart, !1), u.addEventListener(s.move, f.onTouchMove, c), u.addEventListener(s.end, f.onTouchEnd, !1)) : (r.touch && (l = !("touchstart" !== s.start || !r.passiveListener || !o.passiveListeners) && {
               passive: !0,
               capture: !1
            }, h.addEventListener(s.start, f.onTouchStart, l), h.addEventListener(s.move, f.onTouchMove, r.passiveListener ? {
               passive: !1,
               capture: c
            } : c), h.addEventListener(s.end, f.onTouchEnd, l)), (o.simulateTouch && !e.ios && !e.android || o.simulateTouch && !r.touch && e.ios) && (h.addEventListener("mousedown", f.onTouchStart, !1), u.addEventListener("mousemove", f.onTouchMove, c), u.addEventListener("mouseup", f.onTouchEnd, !1)));
            (o.preventClicks || o.preventClicksPropagation) && h.addEventListener("click", f.onClick, !0);
            f.on(e.ios || e.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", lt, !0)
         },
         detachEvents: function () {
            var n = this,
               t = n.params,
               i = n.touchEvents,
               h = n.el,
               c = n.wrapperEl,
               f = "container" === t.touchEventsTarget ? h : c,
               o = !!t.nested,
               s;
            !r.touch && (r.pointerEvents || r.prefixedPointerEvents) ? (f.removeEventListener(i.start, n.onTouchStart, !1), u.removeEventListener(i.move, n.onTouchMove, o), u.removeEventListener(i.end, n.onTouchEnd, !1)) : (r.touch && (s = !("onTouchStart" !== i.start || !r.passiveListener || !t.passiveListeners) && {
               passive: !0,
               capture: !1
            }, f.removeEventListener(i.start, n.onTouchStart, s), f.removeEventListener(i.move, n.onTouchMove, o), f.removeEventListener(i.end, n.onTouchEnd, s)), (t.simulateTouch && !e.ios && !e.android || t.simulateTouch && !r.touch && e.ios) && (f.removeEventListener("mousedown", n.onTouchStart, !1), u.removeEventListener("mousemove", n.onTouchMove, o), u.removeEventListener("mouseup", n.onTouchEnd, !1)));
            (t.preventClicks || t.preventClicksPropagation) && f.removeEventListener("click", n.onClick, !0);
            n.off(e.ios || e.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", lt)
         }
      },
      b, oi = {
         setBreakpoint: function () {
            var t = this,
               s = t.activeIndex,
               h = t.initialized,
               e = t.loopedSlides,
               u, i, r, f, o;
            void 0 === e && (e = 0);
            u = t.params;
            i = u.breakpoints;
            i && (!i || 0 !== Object.keys(i).length) && (r = t.getBreakpoint(i), r && t.currentBreakpoint !== r && (f = r in i ? i[r] : t.originalParams, o = u.loop && f.slidesPerView !== u.slidesPerView, n.extend(t.params, f), n.extend(t, {
               allowTouchMove: t.params.allowTouchMove,
               allowSlideNext: t.params.allowSlideNext,
               allowSlidePrev: t.params.allowSlidePrev
            }), t.currentBreakpoint = r, o && h && (t.loopDestroy(), t.loopCreate(), t.updateSlides(), t.slideTo(s - e + t.loopedSlides, 0, !1)), t.emit("breakpoint", f)))
         },
         getBreakpoint: function (n) {
            var t, r, f, u;
            if (n) {
               for (t = !1, r = [], Object.keys(n).forEach(function (n) {
                     r.push(n)
                  }), r.sort(function (n, t) {
                     return parseInt(n, 10) - parseInt(t, 10)
                  }), f = 0; f < r.length; f += 1) u = r[f], this.params.breakpointsInverse ? u <= i.innerWidth && (t = u) : u >= i.innerWidth && !t && (t = u);
               return t || "max"
            }
         }
      },
      v = {
         isIE: !!i.navigator.userAgent.match(/Trident/g) || !!i.navigator.userAgent.match(/MSIE/g),
         isEdge: !!i.navigator.userAgent.match(/Edge/g),
         isSafari: (b = i.navigator.userAgent.toLowerCase(), 0 <= b.indexOf("safari") && b.indexOf("chrome") < 0 && b.indexOf("android") < 0),
         isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)
      },
      vt = {
         init: !0,
         direction: "horizontal",
         touchEventsTarget: "container",
         initialSlide: 0,
         speed: 300,
         preventInteractionOnTransition: !1,
         edgeSwipeDetection: !1,
         edgeSwipeThreshold: 20,
         freeMode: !1,
         freeModeMomentum: !0,
         freeModeMomentumRatio: 1,
         freeModeMomentumBounce: !0,
         freeModeMomentumBounceRatio: 1,
         freeModeMomentumVelocityRatio: 1,
         freeModeSticky: !1,
         freeModeMinimumVelocity: .02,
         autoHeight: !1,
         setWrapperSize: !1,
         virtualTranslate: !1,
         effect: "slide",
         breakpoints: void 0,
         breakpointsInverse: !1,
         spaceBetween: 0,
         slidesPerView: 1,
         slidesPerColumn: 1,
         slidesPerColumnFill: "column",
         slidesPerGroup: 1,
         centeredSlides: !1,
         slidesOffsetBefore: 0,
         slidesOffsetAfter: 0,
         normalizeSlideIndex: !0,
         centerInsufficientSlides: !1,
         watchOverflow: !1,
         roundLengths: !1,
         touchRatio: 1,
         touchAngle: 45,
         simulateTouch: !0,
         shortSwipes: !0,
         longSwipes: !0,
         longSwipesRatio: .5,
         longSwipesMs: 300,
         followFinger: !0,
         allowTouchMove: !0,
         threshold: 0,
         touchMoveStopPropagation: !0,
         touchStartPreventDefault: !0,
         touchReleaseOnEdges: !1,
         uniqueNavElements: !0,
         resistance: !0,
         resistanceRatio: .85,
         watchSlidesProgress: !1,
         watchSlidesVisibility: !1,
         grabCursor: !1,
         preventClicks: !0,
         preventClicksPropagation: !0,
         slideToClickedSlide: !1,
         preloadImages: !0,
         updateOnImagesReady: !0,
         loop: !1,
         loopAdditionalSlides: 0,
         loopedSlides: null,
         loopFillGroupWithBlank: !1,
         allowSlidePrev: !0,
         allowSlideNext: !0,
         swipeHandler: null,
         noSwiping: !0,
         noSwipingClass: "swiper-no-swiping",
         noSwipingSelector: null,
         passiveListeners: !0,
         containerModifierClass: "swiper-container-",
         slideClass: "swiper-slide",
         slideBlankClass: "swiper-slide-invisible-blank",
         slideActiveClass: "swiper-slide-active",
         slideDuplicateActiveClass: "swiper-slide-duplicate-active",
         slideVisibleClass: "swiper-slide-visible",
         slideDuplicateClass: "swiper-slide-duplicate",
         slideNextClass: "swiper-slide-next",
         slideDuplicateNextClass: "swiper-slide-duplicate-next",
         slidePrevClass: "swiper-slide-prev",
         slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
         wrapperClass: "swiper-wrapper",
         runCallbacksOnInit: !0
      },
      ut = {
         update: gt,
         translate: ni,
         transition: ti,
         slide: ii,
         loop: ri,
         grabCursor: ui,
         manipulation: fi,
         events: ei,
         breakpoints: oi,
         checkOverflow: {
            checkOverflow: function () {
               var n = this,
                  t = n.isLocked;
               n.isLocked = 1 === n.snapGrid.length;
               n.allowSlideNext = !n.isLocked;
               n.allowSlidePrev = !n.isLocked;
               t !== n.isLocked && n.emit(n.isLocked ? "lock" : "unlock");
               t && t !== n.isLocked && (n.isEnd = !1, n.navigation.update())
            }
         },
         classes: {
            addClasses: function () {
               var i = this.classNames,
                  t = this.params,
                  u = this.rtl,
                  f = this.$el,
                  n = [];
               n.push(t.direction);
               t.freeMode && n.push("free-mode");
               r.flexbox || n.push("no-flexbox");
               t.autoHeight && n.push("autoheight");
               u && n.push("rtl");
               1 < t.slidesPerColumn && n.push("multirow");
               e.android && n.push("android");
               e.ios && n.push("ios");
               (v.isIE || v.isEdge) && (r.pointerEvents || r.prefixedPointerEvents) && n.push("wp8-" + t.direction);
               n.forEach(function (n) {
                  i.push(t.containerModifierClass + n)
               });
               f.addClass(i.join(" "))
            },
            removeClasses: function () {
               var n = this.$el,
                  t = this.classNames;
               n.removeClass(t.join(" "))
            }
         },
         images: {
            loadImage: function (n, t, r, u, f, e) {
               function s() {
                  e && e()
               }
               var o;
               n.complete && f ? s() : t ? ((o = new i.Image).onload = s, o.onerror = s, u && (o.sizes = u), r && (o.srcset = r), t && (o.src = t)) : s()
            },
            preloadImages: function () {
               function r() {
                  null != n && n && !n.destroyed && (void 0 !== n.imagesLoaded && (n.imagesLoaded += 1), n.imagesLoaded === n.imagesToLoad.length && (n.params.updateOnImagesReady && n.update(), n.emit("imagesReady")))
               }
               var n = this,
                  i, t;
               for (n.imagesToLoad = n.$el.find("img"), i = 0; i < n.imagesToLoad.length; i += 1) t = n.imagesToLoad[i], n.loadImage(t, t.currentSrc || t.getAttribute("src"), t.srcset || t.getAttribute("srcset"), t.sizes || t.getAttribute("sizes"), !0, r)
            }
         }
      },
      ft = {},
      o = function (i) {
         function u() {
            for (var w, s, e, f, v, o, y, l, h, a, c = [], p = arguments.length; p--;) c[p] = arguments[p];
            return 1 === c.length && c[0].constructor && c[0].constructor === Object ? e = c[0] : (s = (w = c)[0], e = w[1]), e || (e = {}), e = n.extend({}, e), s && !e.el && (e.el = s), i.call(this, e), Object.keys(ut).forEach(function (n) {
               Object.keys(ut[n]).forEach(function (t) {
                  u.prototype[t] || (u.prototype[t] = ut[n][t])
               })
            }), f = this, void 0 === f.modules && (f.modules = {}), Object.keys(f.modules).forEach(function (n) {
               var r = f.modules[n],
                  t, i;
               if (r.params) {
                  if (t = Object.keys(r.params)[0], i = r.params[t], "object" != typeof i || null === i) return;
                  if (!(t in e && "enabled" in i)) return;
                  !0 === e[t] && (e[t] = {
                     enabled: !0
                  });
                  "object" != typeof e[t] || "enabled" in e[t] || (e[t].enabled = !0);
                  e[t] || (e[t] = {
                     enabled: !1
                  })
               }
            }), v = n.extend({}, vt), f.useModulesParams(v), f.params = n.extend({}, v, ft, e), f.originalParams = n.extend({}, f.params), f.passedParams = n.extend({}, e), o = (f.$ = t)(f.params.el), (s = o[0]) ? 1 < o.length ? (y = [], o.each(function (t, i) {
               var r = n.extend({}, e, {
                  el: i
               });
               y.push(new u(r))
            }), y) : (s.swiper = f, o.data("swiper", f), a = o.children("." + f.params.wrapperClass), n.extend(f, {
               $el: o,
               el: s,
               $wrapperEl: a,
               wrapperEl: a[0],
               classNames: [],
               slides: t(),
               slidesGrid: [],
               snapGrid: [],
               slidesSizesGrid: [],
               isHorizontal: function () {
                  return "horizontal" === f.params.direction
               },
               isVertical: function () {
                  return "vertical" === f.params.direction
               },
               rtl: "rtl" === s.dir.toLowerCase() || "rtl" === o.css("direction"),
               rtlTranslate: "horizontal" === f.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === o.css("direction")),
               wrongRTL: "-webkit-box" === a.css("display"),
               activeIndex: 0,
               realIndex: 0,
               isBeginning: !0,
               isEnd: !1,
               translate: 0,
               previousTranslate: 0,
               progress: 0,
               velocity: 0,
               animating: !1,
               allowSlideNext: f.params.allowSlideNext,
               allowSlidePrev: f.params.allowSlidePrev,
               touchEvents: (l = ["touchstart", "touchmove", "touchend"], h = ["mousedown", "mousemove", "mouseup"], r.pointerEvents ? h = ["pointerdown", "pointermove", "pointerup"] : r.prefixedPointerEvents && (h = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), f.touchEventsTouch = {
                  start: l[0],
                  move: l[1],
                  end: l[2]
               }, f.touchEventsDesktop = {
                  start: h[0],
                  move: h[1],
                  end: h[2]
               }, r.touch || !f.params.simulateTouch ? f.touchEventsTouch : f.touchEventsDesktop),
               touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  formElements: "input, select, option, textarea, button, video",
                  lastClickTime: n.now(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0
               },
               allowClick: !0,
               allowTouchMove: f.params.allowTouchMove,
               touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0
               },
               imagesToLoad: [],
               imagesLoaded: 0
            }), f.useModules(), f.params.init && f.init(), f) : void 0
         }
         i && (u.__proto__ = i);
         var f = {
            extendedDefaults: {
               configurable: !0
            },
            defaults: {
               configurable: !0
            },
            Class: {
               configurable: !0
            },
            $: {
               configurable: !0
            }
         };
         return ((u.prototype = Object.create(i && i.prototype)).constructor = u).prototype.slidesPerViewDynamic = function () {
            var t = this,
               l = t.params,
               n = t.slides,
               c = t.slidesGrid,
               s = t.size,
               i = t.activeIndex,
               f = 1,
               e, h, r, u, o;
            if (l.centeredSlides) {
               for (h = n[i].swiperSlideSize, r = i + 1; r < n.length; r += 1) n[r] && !e && (f += 1, s < (h += n[r].swiperSlideSize) && (e = !0));
               for (u = i - 1; 0 <= u; u -= 1) n[u] && !e && (f += 1, s < (h += n[u].swiperSlideSize) && (e = !0))
            } else
               for (o = i + 1; o < n.length; o += 1) c[o] - c[i] < s && (f += 1);
            return f
         }, u.prototype.update = function () {
            function i() {
               var t = n.rtlTranslate ? -1 * n.translate : n.translate,
                  i = Math.min(Math.max(t, n.maxTranslate()), n.minTranslate());
               n.setTranslate(i);
               n.updateActiveIndex();
               n.updateSlidesClasses()
            }
            var n = this,
               r, t;
            n && !n.destroyed && (r = n.snapGrid, t = n.params, t.breakpoints && n.setBreakpoint(), n.updateSize(), n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.params.freeMode ? (i(), n.params.autoHeight && n.updateAutoHeight()) : (("auto" === n.params.slidesPerView || 1 < n.params.slidesPerView) && n.isEnd && !n.params.centeredSlides ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && r !== n.snapGrid && n.checkOverflow(), n.emit("update"))
         }, u.prototype.init = function () {
            var n = this;
            n.initialized || (n.emit("beforeInit"), n.params.breakpoints && n.setBreakpoint(), n.addClasses(), n.params.loop && n.loopCreate(), n.updateSize(), n.updateSlides(), n.params.watchOverflow && n.checkOverflow(), n.params.grabCursor && n.setGrabCursor(), n.params.preloadImages && n.preloadImages(), n.params.loop ? n.slideTo(n.params.initialSlide + n.loopedSlides, 0, n.params.runCallbacksOnInit) : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit), n.attachEvents(), n.initialized = !0, n.emit("init"))
         }, u.prototype.destroy = function (t, i) {
            void 0 === t && (t = !0);
            void 0 === i && (i = !0);
            var r = this,
               u = r.params,
               e = r.$el,
               o = r.$wrapperEl,
               f = r.slides;
            return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), u.loop && r.loopDestroy(), i && (r.removeClasses(), e.removeAttr("style"), o.removeAttr("style"), f && f.length && f.removeClass([u.slideVisibleClass, u.slideActiveClass, u.slideNextClass, u.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), r.emit("destroy"), Object.keys(r.eventsListeners).forEach(function (n) {
               r.off(n)
            }), !1 !== t && (r.$el[0].swiper = null, r.$el.data("swiper", null), n.deleteProps(r)), r.destroyed = !0), null
         }, u.extendDefaults = function (t) {
            n.extend(ft, t)
         }, f.extendedDefaults.get = function () {
            return ft
         }, f.defaults.get = function () {
            return vt
         }, f.Class.get = function () {
            return i
         }, f.$.get = function () {
            return t
         }, Object.defineProperties(u, f), u
      }(h),
      si = {
         name: "device",
         proto: {
            device: e
         },
         "static": {
            device: e
         }
      },
      hi = {
         name: "support",
         proto: {
            support: r
         },
         "static": {
            support: r
         }
      },
      ci = {
         name: "browser",
         proto: {
            browser: v
         },
         "static": {
            browser: v
         }
      },
      li = {
         name: "resize",
         create: function () {
            var t = this;
            n.extend(t, {
               resize: {
                  resizeHandler: function () {
                     t && !t.destroyed && t.initialized && (t.emit("beforeResize"), t.emit("resize"))
                  },
                  orientationChangeHandler: function () {
                     t && !t.destroyed && t.initialized && t.emit("orientationchange")
                  }
               }
            })
         },
         on: {
            init: function () {
               i.addEventListener("resize", this.resize.resizeHandler);
               i.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            },
            destroy: function () {
               i.removeEventListener("resize", this.resize.resizeHandler);
               i.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
         }
      },
      k = {
         func: i.MutationObserver || i.WebkitMutationObserver,
         attach: function (n, t) {
            void 0 === t && (t = {});
            var r = this,
               u = new k.func(function (n) {
                  if (1 !== n.length) {
                     var t = function () {
                        r.emit("observerUpdate", n[0])
                     };
                     i.requestAnimationFrame ? i.requestAnimationFrame(t) : i.setTimeout(t, 0)
                  } else r.emit("observerUpdate", n[0])
               });
            u.observe(n, {
               attributes: void 0 === t.attributes || t.attributes,
               childList: void 0 === t.childList || t.childList,
               characterData: void 0 === t.characterData || t.characterData
            });
            r.observer.observers.push(u)
         },
         init: function () {
            var n = this,
               i, t;
            if (r.observer && n.params.observer) {
               if (n.params.observeParents)
                  for (i = n.$el.parents(), t = 0; t < i.length; t += 1) n.observer.attach(i[t]);
               n.observer.attach(n.$el[0], {
                  childList: !1
               });
               n.observer.attach(n.$wrapperEl[0], {
                  attributes: !1
               })
            }
         },
         destroy: function () {
            this.observer.observers.forEach(function (n) {
               n.disconnect()
            });
            this.observer.observers = []
         }
      },
      ai = {
         name: "observer",
         params: {
            observer: !1,
            observeParents: !1
         },
         create: function () {
            n.extend(this, {
               observer: {
                  init: k.init.bind(this),
                  attach: k.attach.bind(this),
                  destroy: k.destroy.bind(this),
                  observers: []
               }
            })
         },
         on: {
            init: function () {
               this.observer.init()
            },
            destroy: function () {
               this.observer.destroy()
            }
         }
      },
      d = {
         update: function (t) {
            function nt() {
               i.updateSlides();
               i.updateProgress();
               i.updateSlidesClasses();
               i.lazy && i.params.lazy.enabled && i.lazy.load()
            }
            var i = this,
               v = i.params,
               y = v.slidesPerView,
               c = v.slidesPerGroup,
               ft = v.centeredSlides,
               tt = i.params.virtual,
               it = tt.addSlidesBefore,
               rt = tt.addSlidesAfter,
               f = i.virtual,
               p = f.from,
               l = f.to,
               s = f.slides,
               et = f.slidesGrid,
               ut = f.renderSlide,
               ot = f.offset,
               w, b, k, d, g, a, e, r;
            i.updateActiveIndex();
            d = i.activeIndex || 0;
            w = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top";
            ft ? (b = Math.floor(y / 2) + c + it, k = Math.floor(y / 2) + c + rt) : (b = y + (c - 1) + it, k = c + rt);
            var u = Math.max((d || 0) - k, 0),
               o = Math.min((d || 0) + b, s.length - 1),
               h = (i.slidesGrid[u] || 0) - (i.slidesGrid[0] || 0);
            if (n.extend(i.virtual, {
                  from: u,
                  to: o,
                  offset: h,
                  slidesGrid: i.slidesGrid
               }), p === u && l === o && !t) return i.slidesGrid !== et && h !== ot && i.slides.css(w, h + "px"), void i.updateProgress();
            if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, {
               offset: h,
               from: u,
               to: o,
               slides: function () {
                  for (var t = [], n = u; n <= o; n += 1) t.push(s[n]);
                  return t
               }()
            }), void nt();
            if (g = [], a = [], t) i.$wrapperEl.find("." + i.params.slideClass).remove();
            else
               for (e = p; e <= l; e += 1)(e < u || o < e) && i.$wrapperEl.find("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]').remove();
            for (r = 0; r < s.length; r += 1) u <= r && r <= o && (void 0 === l || t ? a.push(r) : (l < r && a.push(r), r < p && g.push(r)));
            a.forEach(function (n) {
               i.$wrapperEl.append(ut(s[n], n))
            });
            g.sort(function (n, t) {
               return n < t
            }).forEach(function (n) {
               i.$wrapperEl.prepend(ut(s[n], n))
            });
            i.$wrapperEl.children(".swiper-slide").css(w, h + "px");
            nt()
         },
         renderSlide: function (n, i) {
            var r = this,
               f = r.params.virtual,
               u;
            return f.cache && r.virtual.cache[i] ? r.virtual.cache[i] : (u = f.renderSlide ? t(f.renderSlide.call(r, n, i)) : t('<div class="' + r.params.slideClass + '" data-swiper-slide-index="' + i + '">' + n + "<\/div>"), u.attr("data-swiper-slide-index") || u.attr("data-swiper-slide-index", i), f.cache && (r.virtual.cache[i] = u), u)
         },
         appendSlide: function (n) {
            this.virtual.slides.push(n);
            this.virtual.update(!0)
         },
         prependSlide: function (n) {
            var t = this,
               i, r;
            (t.virtual.slides.unshift(n), t.params.virtual.cache) && (i = t.virtual.cache, r = {}, Object.keys(i).forEach(function (n) {
               r[n + 1] = i[n]
            }), t.virtual.cache = r);
            t.virtual.update(!0);
            t.slideNext(0)
         }
      },
      vi = {
         name: "virtual",
         params: {
            virtual: {
               enabled: !1,
               slides: [],
               cache: !0,
               renderSlide: null,
               renderExternal: null,
               addSlidesBefore: 0,
               addSlidesAfter: 0
            }
         },
         create: function () {
            var t = this;
            n.extend(t, {
               virtual: {
                  update: d.update.bind(t),
                  appendSlide: d.appendSlide.bind(t),
                  prependSlide: d.prependSlide.bind(t),
                  renderSlide: d.renderSlide.bind(t),
                  slides: t.params.virtual.slides,
                  cache: {}
               }
            })
         },
         on: {
            beforeInit: function () {
               var t = this,
                  i;
               t.params.virtual.enabled && (t.classNames.push(t.params.containerModifierClass + "virtual"), i = {
                  watchSlidesProgress: !0
               }, n.extend(t.params, i), n.extend(t.originalParams, i), t.virtual.update())
            },
            setTranslate: function () {
               this.params.virtual.enabled && this.virtual.update()
            }
         }
      },
      et = {
         handle: function (n) {
            var t = this,
               o = t.rtlTranslate,
               f = n,
               r, c, l, h, s;
            if ((f.originalEvent && (f = f.originalEvent), r = f.keyCode || f.charCode, !t.allowSlideNext && (t.isHorizontal() && 39 === r || t.isVertical() && 40 === r)) || !t.allowSlidePrev && (t.isHorizontal() && 37 === r || t.isVertical() && 38 === r)) return !1;
            if (!(f.shiftKey || f.altKey || f.ctrlKey || f.metaKey || u.activeElement && u.activeElement.nodeName && ("input" === u.activeElement.nodeName.toLowerCase() || "textarea" === u.activeElement.nodeName.toLowerCase()))) {
               if (t.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
                  if (c = !1, 0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                  var a = i.innerWidth,
                     v = i.innerHeight,
                     e = t.$el.offset();
                  for (o && (e.left -= t.$el[0].scrollLeft), l = [
                        [e.left, e.top],
                        [e.left + t.width, e.top],
                        [e.left, e.top + t.height],
                        [e.left + t.width, e.top + t.height]
                     ], h = 0; h < l.length; h += 1) s = l[h], 0 <= s[0] && s[0] <= a && 0 <= s[1] && s[1] <= v && (c = !0);
                  if (!c) return
               }
               t.isHorizontal() ? (37 !== r && 39 !== r || (f.preventDefault ? f.preventDefault() : f.returnValue = !1), (39 === r && !o || 37 === r && o) && t.slideNext(), (37 === r && !o || 39 === r && o) && t.slidePrev()) : (38 !== r && 40 !== r || (f.preventDefault ? f.preventDefault() : f.returnValue = !1), 40 === r && t.slideNext(), 38 === r && t.slidePrev());
               t.emit("keyPress", r)
            }
         },
         enable: function () {
            this.keyboard.enabled || (t(u).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
         },
         disable: function () {
            this.keyboard.enabled && (t(u).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
         }
      },
      yi = {
         name: "keyboard",
         params: {
            keyboard: {
               enabled: !1,
               onlyInViewport: !0
            }
         },
         create: function () {
            n.extend(this, {
               keyboard: {
                  enabled: !1,
                  enable: et.enable.bind(this),
                  disable: et.disable.bind(this),
                  handle: et.handle.bind(this)
               }
            })
         },
         on: {
            init: function () {
               this.params.keyboard.enabled && this.keyboard.enable()
            },
            destroy: function () {
               this.keyboard.enabled && this.keyboard.disable()
            }
         }
      },
      c = {
         lastScrollTime: n.now(),
         event: -1 < i.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
            var t = "onwheel",
               n = t in u,
               i;
            return n || (i = u.createElement("div"), i.setAttribute(t, "return;"), n = "function" == typeof i[t]), !n && u.implementation && u.implementation.hasFeature && !0 !== u.implementation.hasFeature("", "") && (n = u.implementation.hasFeature("Events.wheel", "3.0")), n
         }() ? "wheel" : "mousewheel",
         normalize: function (n) {
            var u = 0,
               t = 0,
               i = 0,
               r = 0;
            return "detail" in n && (t = n.detail), "wheelDelta" in n && (t = -n.wheelDelta / 120), "wheelDeltaY" in n && (t = -n.wheelDeltaY / 120), "wheelDeltaX" in n && (u = -n.wheelDeltaX / 120), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (u = t, t = 0), i = 10 * u, r = 10 * t, "deltaY" in n && (r = n.deltaY), "deltaX" in n && (i = n.deltaX), (i || r) && n.deltaMode && (1 === n.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !u && (u = i < 1 ? -1 : 1), r && !t && (t = r < 1 ? -1 : 1), {
               spinX: u,
               spinY: t,
               pixelX: i,
               pixelY: r
            }
         },
         handleMouseEnter: function () {
            this.mouseEntered = !0
         },
         handleMouseLeave: function () {
            this.mouseEntered = !1
         },
         handle: function (t) {
            var u = t,
               r = this,
               s = r.params.mousewheel;
            if (!r.mouseEntered && !s.releaseOnEdges) return !0;
            u.originalEvent && (u = u.originalEvent);
            var e = 0,
               h = r.rtlTranslate ? -1 : 1,
               f = c.normalize(u);
            if (s.forceToAxis)
               if (r.isHorizontal()) {
                  if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
                  e = f.pixelX * h
               } else {
                  if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
                  e = f.pixelY
               }
            else e = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * h : -f.pixelY;
            if (0 === e) return !0;
            if (s.invert && (e = -e), r.params.freeMode) {
               r.params.loop && r.loopFix();
               var o = r.getTranslate() + e * s.sensitivity,
                  l = r.isBeginning,
                  a = r.isEnd;
               if (o >= r.minTranslate() && (o = r.minTranslate()), o <= r.maxTranslate() && (o = r.maxTranslate()), r.setTransition(0), r.setTranslate(o), r.updateProgress(), r.updateActiveIndex(), r.updateSlidesClasses(), (!l && r.isBeginning || !a && r.isEnd) && r.updateSlidesClasses(), r.params.freeModeSticky && (clearTimeout(r.mousewheel.timeout), r.mousewheel.timeout = n.nextTick(function () {
                     r.slideToClosest()
                  }, 300)), r.emit("scroll", u), r.params.autoplay && r.params.autoplayDisableOnInteraction && r.autoplay.stop(), o === r.minTranslate() || o === r.maxTranslate()) return !0
            } else {
               if (60 < n.now() - r.mousewheel.lastScrollTime)
                  if (e < 0)
                     if (r.isEnd && !r.params.loop || r.animating) {
                        if (s.releaseOnEdges) return !0
                     } else r.slideNext(), r.emit("scroll", u);
               else if (r.isBeginning && !r.params.loop || r.animating) {
                  if (s.releaseOnEdges) return !0
               } else r.slidePrev(), r.emit("scroll", u);
               r.mousewheel.lastScrollTime = (new i.Date).getTime()
            }
            return u.preventDefault ? u.preventDefault() : u.returnValue = !1, !1
         },
         enable: function () {
            var n = this,
               i;
            return c.event ? n.mousewheel.enabled ? !1 : (i = n.$el, "container" !== n.params.mousewheel.eventsTarged && (i = t(n.params.mousewheel.eventsTarged)), i.on("mouseenter", n.mousewheel.handleMouseEnter), i.on("mouseleave", n.mousewheel.handleMouseLeave), i.on(c.event, n.mousewheel.handle), n.mousewheel.enabled = !0) : !1
         },
         disable: function () {
            var n = this,
               i;
            return c.event ? n.mousewheel.enabled ? (i = n.$el, "container" !== n.params.mousewheel.eventsTarged && (i = t(n.params.mousewheel.eventsTarged)), i.off(c.event, n.mousewheel.handle), !(n.mousewheel.enabled = !1)) : !1 : !1
         }
      },
      ot = {
         update: function () {
            var n = this,
               t = n.params.navigation;
            if (!n.params.loop) {
               var u = n.navigation,
                  i = u.$nextEl,
                  r = u.$prevEl;
               r && 0 < r.length && (n.isBeginning ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[n.params.watchOverflow && n.isLocked ? "addClass" : "removeClass"](t.lockClass));
               i && 0 < i.length && (n.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[n.params.watchOverflow && n.isLocked ? "addClass" : "removeClass"](t.lockClass))
            }
         },
         init: function () {
            var u, f, i = this,
               r = i.params.navigation;
            (r.nextEl || r.prevEl) && (r.nextEl && (u = t(r.nextEl), i.params.uniqueNavElements && "string" == typeof r.nextEl && 1 < u.length && 1 === i.$el.find(r.nextEl).length && (u = i.$el.find(r.nextEl))), r.prevEl && (f = t(r.prevEl), i.params.uniqueNavElements && "string" == typeof r.prevEl && 1 < f.length && 1 === i.$el.find(r.prevEl).length && (f = i.$el.find(r.prevEl))), u && 0 < u.length && u.on("click", function (n) {
               n.preventDefault();
               i.isEnd && !i.params.loop || i.slideNext()
            }), f && 0 < f.length && f.on("click", function (n) {
               n.preventDefault();
               i.isBeginning && !i.params.loop || i.slidePrev()
            }), n.extend(i.navigation, {
               $nextEl: u,
               nextEl: u && u[0],
               $prevEl: f,
               prevEl: f && f[0]
            }))
         },
         destroy: function () {
            var i = this.navigation,
               n = i.$nextEl,
               t = i.$prevEl;
            n && n.length && (n.off("click"), n.removeClass(this.params.navigation.disabledClass));
            t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass))
         }
      },
      g = {
         update: function () {
            var n = this,
               w = n.rtl,
               i = n.params.pagination,
               e, s, l, u, a;
            if (i.el && n.pagination.el && n.pagination.$el && 0 !== n.pagination.$el.length) {
               var r, h = n.virtual && n.params.virtual.enabled ? n.virtual.slides.length : n.slides.length,
                  f = n.pagination.$el,
                  o = n.params.loop ? Math.ceil((h - 2 * n.loopedSlides) / n.params.slidesPerGroup) : n.snapGrid.length;
               if (n.params.loop ? ((r = Math.ceil((n.activeIndex - n.loopedSlides) / n.params.slidesPerGroup)) > h - 1 - 2 * n.loopedSlides && (r -= h - 2 * n.loopedSlides), o - 1 < r && (r -= o), r < 0 && "bullets" !== n.params.paginationType && (r = o + r)) : r = void 0 !== n.snapIndex ? n.snapIndex : n.activeIndex || 0, "bullets" === i.type && n.pagination.bullets && 0 < n.pagination.bullets.length) {
                  if (u = n.pagination.bullets, i.dynamicBullets && (n.pagination.bulletSize = u.eq(0)[n.isHorizontal() ? "outerWidth" : "outerHeight"](!0), f.css(n.isHorizontal() ? "width" : "height", n.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), 1 < i.dynamicMainBullets && void 0 !== n.previousIndex && (n.pagination.dynamicBulletIndex += r - n.previousIndex, n.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? n.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : n.pagination.dynamicBulletIndex < 0 && (n.pagination.dynamicBulletIndex = 0)), e = r - n.pagination.dynamicBulletIndex, l = ((s = e + (Math.min(u.length, i.dynamicMainBullets) - 1)) + e) / 2), u.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), 1 < f.length) u.each(function (n, u) {
                     var f = t(u),
                        o = f.index();
                     o === r && f.addClass(i.bulletActiveClass);
                     i.dynamicBullets && (e <= o && o <= s && f.addClass(i.bulletActiveClass + "-main"), o === e && f.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), o === s && f.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                  });
                  else if (u.eq(r).addClass(i.bulletActiveClass), i.dynamicBullets) {
                     for (var b = u.eq(e), k = u.eq(s), c = e; c <= s; c += 1) u.eq(c).addClass(i.bulletActiveClass + "-main");
                     b.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev");
                     k.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
                  }
                  if (i.dynamicBullets) {
                     var d = Math.min(u.length, i.dynamicMainBullets + 4),
                        g = (n.pagination.bulletSize * d - n.pagination.bulletSize) / 2 - l * n.pagination.bulletSize,
                        nt = w ? "right" : "left";
                     u.css(n.isHorizontal() ? nt : "top", g + "px")
                  }
               }
               if ("fraction" === i.type && (f.find("." + i.currentClass).text(i.formatFractionCurrent(r + 1)), f.find("." + i.totalClass).text(i.formatFractionTotal(o))), "progressbar" === i.type) {
                  a = i.progressbarOpposite ? n.isHorizontal() ? "vertical" : "horizontal" : n.isHorizontal() ? "horizontal" : "vertical";
                  var v = (r + 1) / o,
                     y = 1,
                     p = 1;
                  "horizontal" === a ? y = v : p = v;
                  f.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + y + ") scaleY(" + p + ")").transition(n.params.speed)
               }
               "custom" === i.type && i.renderCustom ? (f.html(i.renderCustom(n, r + 1, o)), n.emit("paginationRender", n, f[0])) : n.emit("paginationUpdate", n, f[0]);
               f[n.params.watchOverflow && n.isLocked ? "addClass" : "removeClass"](i.lockClass)
            }
         },
         render: function () {
            var t = this,
               n = t.params.pagination,
               f, r;
            if (n.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
               var e = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                  u = t.pagination.$el,
                  i = "";
               if ("bullets" === n.type) {
                  for (f = t.params.loop ? Math.ceil((e - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length, r = 0; r < f; r += 1) i += n.renderBullet ? n.renderBullet.call(t, r, n.bulletClass) : "<" + n.bulletElement + ' class="' + n.bulletClass + '"><\/' + n.bulletElement + ">";
                  u.html(i);
                  t.pagination.bullets = u.find("." + n.bulletClass)
               }
               "fraction" === n.type && (i = n.renderFraction ? n.renderFraction.call(t, n.currentClass, n.totalClass) : '<span class="' + n.currentClass + '"><\/span> / <span class="' + n.totalClass + '"><\/span>', u.html(i));
               "progressbar" === n.type && (i = n.renderProgressbar ? n.renderProgressbar.call(t, n.progressbarFillClass) : '<span class="' + n.progressbarFillClass + '"><\/span>', u.html(i));
               "custom" !== n.type && t.emit("paginationRender", t.pagination.$el[0])
            }
         },
         init: function () {
            var u = this,
               i = u.params.pagination,
               r;
            i.el && (r = t(i.el), 0 !== r.length && (u.params.uniqueNavElements && "string" == typeof i.el && 1 < r.length && 1 === u.$el.find(i.el).length && (r = u.$el.find(i.el)), "bullets" === i.type && i.clickable && r.addClass(i.clickableClass), r.addClass(i.modifierClass + i.type), "bullets" === i.type && i.dynamicBullets && (r.addClass("" + i.modifierClass + i.type + "-dynamic"), u.pagination.dynamicBulletIndex = 0, i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)), "progressbar" === i.type && i.progressbarOpposite && r.addClass(i.progressbarOppositeClass), i.clickable && r.on("click", "." + i.bulletClass, function (n) {
               n.preventDefault();
               var i = t(this).index() * u.params.slidesPerGroup;
               u.params.loop && (i += u.loopedSlides);
               u.slideTo(i)
            }), n.extend(u.pagination, {
               $el: r,
               el: r[0]
            })))
         },
         destroy: function () {
            var n = this,
               t = n.params.pagination,
               i;
            t.el && n.pagination.el && n.pagination.$el && 0 !== n.pagination.$el.length && (i = n.pagination.$el, i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), n.pagination.bullets && n.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", "." + t.bulletClass))
         }
      },
      s = {
         setTranslate: function () {
            var t = this;
            if (t.params.scrollbar.el && t.scrollbar.el) {
               var o = t.scrollbar,
                  h = t.rtlTranslate,
                  c = t.progress,
                  i = o.dragSize,
                  e = o.trackSize,
                  u = o.$dragEl,
                  s = o.$el,
                  l = t.params.scrollbar,
                  f = i,
                  n = (e - i) * c;
               h ? 0 < (n = -n) ? (f = i - n, n = 0) : e < -n + i && (f = e + n) : n < 0 ? (f = i + n, n = 0) : e < n + i && (f = e - n);
               t.isHorizontal() ? (r.transforms3d ? u.transform("translate3d(" + n + "px, 0, 0)") : u.transform("translateX(" + n + "px)"), u[0].style.width = f + "px") : (r.transforms3d ? u.transform("translate3d(0px, " + n + "px, 0)") : u.transform("translateY(" + n + "px)"), u[0].style.height = f + "px");
               l.hide && (clearTimeout(t.scrollbar.timeout), s[0].style.opacity = 1, t.scrollbar.timeout = setTimeout(function () {
                  s[0].style.opacity = 0;
                  s.transition(400)
               }, 1e3))
            }
         },
         setTransition: function (n) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(n)
         },
         updateSize: function () {
            var t = this;
            if (t.params.scrollbar.el && t.scrollbar.el) {
               var i = t.scrollbar,
                  r = i.$dragEl,
                  u = i.$el;
               r[0].style.width = "";
               r[0].style.height = "";
               var f, o = t.isHorizontal() ? u[0].offsetWidth : u[0].offsetHeight,
                  e = t.size / t.virtualSize,
                  s = e * (o / t.size);
               f = "auto" === t.params.scrollbar.dragSize ? o * e : parseInt(t.params.scrollbar.dragSize, 10);
               t.isHorizontal() ? r[0].style.width = f + "px" : r[0].style.height = f + "px";
               u[0].style.display = 1 <= e ? "none" : "";
               t.params.scrollbarHide && (u[0].style.opacity = 0);
               n.extend(i, {
                  trackSize: o,
                  divider: e,
                  moveDivider: s,
                  dragSize: f
               });
               i.$el[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
            }
         },
         setDragPosition: function (n) {
            var i, t = this,
               r = t.scrollbar,
               e = t.rtlTranslate,
               o = r.$el,
               f = r.dragSize,
               s = r.trackSize,
               u;
            i = ((t.isHorizontal() ? "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX || n.clientX : "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY || n.clientY) - o.offset()[t.isHorizontal() ? "left" : "top"] - f / 2) / (s - f);
            i = Math.max(Math.min(i, 1), 0);
            e && (i = 1 - i);
            u = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * i;
            t.updateProgress(u);
            t.setTranslate(u);
            t.updateActiveIndex();
            t.updateSlidesClasses()
         },
         onDragStart: function (n) {
            var t = this,
               u = t.params.scrollbar,
               i = t.scrollbar,
               f = t.$wrapperEl,
               r = i.$el,
               e = i.$dragEl;
            t.scrollbar.isTouched = !0;
            n.preventDefault();
            n.stopPropagation();
            f.transition(100);
            e.transition(100);
            i.setDragPosition(n);
            clearTimeout(t.scrollbar.dragTimeout);
            r.transition(0);
            u.hide && r.css("opacity", 1);
            t.emit("scrollbarDragStart", n)
         },
         onDragMove: function (n) {
            var t = this.scrollbar,
               i = this.$wrapperEl,
               r = t.$el,
               u = t.$dragEl;
            this.scrollbar.isTouched && (n.preventDefault ? n.preventDefault() : n.returnValue = !1, t.setDragPosition(n), i.transition(0), r.transition(0), u.transition(0), this.emit("scrollbarDragMove", n))
         },
         onDragEnd: function (t) {
            var i = this,
               r = i.params.scrollbar,
               u = i.scrollbar.$el;
            i.scrollbar.isTouched && (i.scrollbar.isTouched = !1, r.hide && (clearTimeout(i.scrollbar.dragTimeout), i.scrollbar.dragTimeout = n.nextTick(function () {
               u.css("opacity", 0);
               u.transition(400)
            }, 1e3)), i.emit("scrollbarDragEnd", t), r.snapOnRelease && i.slideToClosest())
         },
         enableDraggable: function () {
            var n = this;
            if (n.params.scrollbar.el) {
               var c = n.scrollbar,
                  o = n.touchEvents,
                  s = n.touchEventsDesktop,
                  f = n.params,
                  i = c.$el[0],
                  t = !(!r.passiveListener || !f.passiveListeners) && {
                     passive: !1,
                     capture: !1
                  },
                  h = !(!r.passiveListener || !f.passiveListeners) && {
                     passive: !0,
                     capture: !1
                  };
               r.touch || !r.pointerEvents && !r.prefixedPointerEvents ? (r.touch && (i.addEventListener(o.start, n.scrollbar.onDragStart, t), i.addEventListener(o.move, n.scrollbar.onDragMove, t), i.addEventListener(o.end, n.scrollbar.onDragEnd, h)), (f.simulateTouch && !e.ios && !e.android || f.simulateTouch && !r.touch && e.ios) && (i.addEventListener("mousedown", n.scrollbar.onDragStart, t), u.addEventListener("mousemove", n.scrollbar.onDragMove, t), u.addEventListener("mouseup", n.scrollbar.onDragEnd, h))) : (i.addEventListener(s.start, n.scrollbar.onDragStart, t), u.addEventListener(s.move, n.scrollbar.onDragMove, t), u.addEventListener(s.end, n.scrollbar.onDragEnd, h))
            }
         },
         disableDraggable: function () {
            var n = this;
            if (n.params.scrollbar.el) {
               var c = n.scrollbar,
                  o = n.touchEvents,
                  s = n.touchEventsDesktop,
                  f = n.params,
                  i = c.$el[0],
                  t = !(!r.passiveListener || !f.passiveListeners) && {
                     passive: !1,
                     capture: !1
                  },
                  h = !(!r.passiveListener || !f.passiveListeners) && {
                     passive: !0,
                     capture: !1
                  };
               r.touch || !r.pointerEvents && !r.prefixedPointerEvents ? (r.touch && (i.removeEventListener(o.start, n.scrollbar.onDragStart, t), i.removeEventListener(o.move, n.scrollbar.onDragMove, t), i.removeEventListener(o.end, n.scrollbar.onDragEnd, h)), (f.simulateTouch && !e.ios && !e.android || f.simulateTouch && !r.touch && e.ios) && (i.removeEventListener("mousedown", n.scrollbar.onDragStart, t), u.removeEventListener("mousemove", n.scrollbar.onDragMove, t), u.removeEventListener("mouseup", n.scrollbar.onDragEnd, h))) : (i.removeEventListener(s.start, n.scrollbar.onDragStart, t), u.removeEventListener(s.move, n.scrollbar.onDragMove, t), u.removeEventListener(s.end, n.scrollbar.onDragEnd, h))
            }
         },
         init: function () {
            var i = this,
               r;
            if (i.params.scrollbar.el) {
               var e = i.scrollbar,
                  o = i.$el,
                  f = i.params.scrollbar,
                  u = t(f.el);
               i.params.uniqueNavElements && "string" == typeof f.el && 1 < u.length && 1 === o.find(f.el).length && (u = o.find(f.el));
               r = u.find("." + i.params.scrollbar.dragClass);
               0 === r.length && (r = t('<div class="' + i.params.scrollbar.dragClass + '"><\/div>'), u.append(r));
               n.extend(e, {
                  $el: u,
                  el: u[0],
                  $dragEl: r,
                  dragEl: r[0]
               });
               f.draggable && e.enableDraggable()
            }
         },
         destroy: function () {
            this.scrollbar.disableDraggable()
         }
      },
      st = {
         setTransform: function (n, i) {
            var a = this.rtl,
               f = t(n),
               s = a ? -1 : 1,
               h = f.attr("data-swiper-parallax") || "0",
               r = f.attr("data-swiper-parallax-x"),
               u = f.attr("data-swiper-parallax-y"),
               e = f.attr("data-swiper-parallax-scale"),
               o = f.attr("data-swiper-parallax-opacity"),
               c, l;
            (r || u ? (r = r || "0", u = u || "0") : this.isHorizontal() ? (r = h, u = "0") : (u = h, r = "0"), r = 0 <= r.indexOf("%") ? parseInt(r, 10) * i * s + "%" : r * i * s + "px", u = 0 <= u.indexOf("%") ? parseInt(u, 10) * i + "%" : u * i + "px", null != o) && (c = o - (o - 1) * (1 - Math.abs(i)), f[0].style.opacity = c);
            null == e ? f.transform("translate3d(" + r + ", " + u + ", 0px)") : (l = e - (e - 1) * (1 - Math.abs(i)), f.transform("translate3d(" + r + ", " + u + ", 0px) scale(" + l + ")"))
         },
         setTranslate: function () {
            var n = this,
               r = n.$el,
               u = n.slides,
               i = n.progress,
               f = n.snapGrid;
            r.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, r) {
               n.parallax.setTransform(r, i)
            });
            u.each(function (r, u) {
               var e = u.progress;
               1 < n.params.slidesPerGroup && "auto" !== n.params.slidesPerView && (e += Math.ceil(r / 2) - i * (f.length - 1));
               e = Math.min(Math.max(e, -1), 1);
               t(u).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
                  n.parallax.setTransform(i, e)
               })
            })
         },
         setTransition: function (n) {
            void 0 === n && (n = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (i, r) {
               var u = t(r),
                  f = parseInt(u.attr("data-swiper-parallax-duration"), 10) || n;
               0 === n && (f = 0);
               u.transition(f)
            })
         }
      },
      ht = {
         getDistanceBetweenTouches: function (n) {
            if (n.targetTouches.length < 2) return 1;
            var t = n.targetTouches[0].pageX,
               i = n.targetTouches[0].pageY,
               r = n.targetTouches[1].pageX,
               u = n.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(r - t, 2) + Math.pow(u - i, 2))
         },
         onGestureStart: function (n) {
            var u = this,
               e = u.params.zoom,
               f = u.zoom,
               i = f.gesture;
            if (f.fakeGestureTouched = !1, f.fakeGestureMoved = !1, !r.gestures) {
               if ("touchstart" !== n.type || "touchstart" === n.type && n.targetTouches.length < 2) return;
               f.fakeGestureTouched = !0;
               i.scaleStart = ht.getDistanceBetweenTouches(n)
            }
            i.$slideEl && i.$slideEl.length || (i.$slideEl = t(n.target).closest(".swiper-slide"), 0 === i.$slideEl.length && (i.$slideEl = u.slides.eq(u.activeIndex)), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + e.containerClass), i.maxRatio = i.$imageWrapEl.attr("data-swiper-zoom") || e.maxRatio, 0 !== i.$imageWrapEl.length) ? (i.$imageEl.transition(0), u.zoom.isScaling = !0) : i.$imageEl = void 0
         },
         onGestureChange: function (n) {
            var u = this.params.zoom,
               t = this.zoom,
               i = t.gesture;
            if (!r.gestures) {
               if ("touchmove" !== n.type || "touchmove" === n.type && n.targetTouches.length < 2) return;
               t.fakeGestureMoved = !0;
               i.scaleMove = ht.getDistanceBetweenTouches(n)
            }
            i.$imageEl && 0 !== i.$imageEl.length && (r.gestures ? this.zoom.scale = n.scale * t.currentScale : t.scale = i.scaleMove / i.scaleStart * t.currentScale, t.scale > i.maxRatio && (t.scale = i.maxRatio - 1 + Math.pow(t.scale - i.maxRatio + 1, .5)), t.scale < u.minRatio && (t.scale = u.minRatio + 1 - Math.pow(u.minRatio - t.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
         },
         onGestureEnd: function (n) {
            var u = this.params.zoom,
               t = this.zoom,
               i = t.gesture;
            if (!r.gestures) {
               if (!t.fakeGestureTouched || !t.fakeGestureMoved) return;
               if ("touchend" !== n.type || "touchend" === n.type && n.changedTouches.length < 2 && !e.android) return;
               t.fakeGestureTouched = !1;
               t.fakeGestureMoved = !1
            }
            i.$imageEl && 0 !== i.$imageEl.length && (t.scale = Math.max(Math.min(t.scale, i.maxRatio), u.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"), t.currentScale = t.scale, t.isScaling = !1, 1 === t.scale && (i.$slideEl = void 0))
         },
         onTouchStart: function (n) {
            var i = this.zoom,
               r = i.gesture,
               t = i.image;
            r.$imageEl && 0 !== r.$imageEl.length && (t.isTouched || (e.android && n.preventDefault(), t.isTouched = !0, t.touchesStart.x = "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX, t.touchesStart.y = "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY))
         },
         onTouchMove: function (t) {
            var e = this,
               f = e.zoom,
               u = f.gesture,
               i = f.image,
               r = f.velocity,
               o, s;
            if (u.$imageEl && 0 !== u.$imageEl.length && (e.allowClick = !1, i.isTouched && u.$slideEl) && (i.isMoved || (i.width = u.$imageEl[0].offsetWidth, i.height = u.$imageEl[0].offsetHeight, i.startX = n.getTranslate(u.$imageWrapEl[0], "x") || 0, i.startY = n.getTranslate(u.$imageWrapEl[0], "y") || 0, u.slideWidth = u.$slideEl[0].offsetWidth, u.slideHeight = u.$slideEl[0].offsetHeight, u.$imageWrapEl.transition(0), e.rtl && (i.startX = -i.startX, i.startY = -i.startY)), o = i.width * f.scale, s = i.height * f.scale, !(o < u.slideWidth && s < u.slideHeight))) {
               if ((i.minX = Math.min(u.slideWidth / 2 - o / 2, 0), i.maxX = -i.minX, i.minY = Math.min(u.slideHeight / 2 - s / 2, 0), i.maxY = -i.minY, i.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, i.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !i.isMoved && !f.isScaling) && (e.isHorizontal() && (Math.floor(i.minX) === Math.floor(i.startX) && i.touchesCurrent.x < i.touchesStart.x || Math.floor(i.maxX) === Math.floor(i.startX) && i.touchesCurrent.x > i.touchesStart.x) || !e.isHorizontal() && (Math.floor(i.minY) === Math.floor(i.startY) && i.touchesCurrent.y < i.touchesStart.y || Math.floor(i.maxY) === Math.floor(i.startY) && i.touchesCurrent.y > i.touchesStart.y))) return void(i.isTouched = !1);
               t.preventDefault();
               t.stopPropagation();
               i.isMoved = !0;
               i.currentX = i.touchesCurrent.x - i.touchesStart.x + i.startX;
               i.currentY = i.touchesCurrent.y - i.touchesStart.y + i.startY;
               i.currentX < i.minX && (i.currentX = i.minX + 1 - Math.pow(i.minX - i.currentX + 1, .8));
               i.currentX > i.maxX && (i.currentX = i.maxX - 1 + Math.pow(i.currentX - i.maxX + 1, .8));
               i.currentY < i.minY && (i.currentY = i.minY + 1 - Math.pow(i.minY - i.currentY + 1, .8));
               i.currentY > i.maxY && (i.currentY = i.maxY - 1 + Math.pow(i.currentY - i.maxY + 1, .8));
               r.prevPositionX || (r.prevPositionX = i.touchesCurrent.x);
               r.prevPositionY || (r.prevPositionY = i.touchesCurrent.y);
               r.prevTime || (r.prevTime = Date.now());
               r.x = (i.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2;
               r.y = (i.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2;
               Math.abs(i.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0);
               Math.abs(i.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0);
               r.prevPositionX = i.touchesCurrent.x;
               r.prevPositionY = i.touchesCurrent.y;
               r.prevTime = Date.now();
               u.$imageWrapEl.transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
         },
         onTouchEnd: function () {
            var i = this.zoom,
               r = i.gesture,
               n = i.image,
               t = i.velocity,
               e, o, s;
            if (r.$imageEl && 0 !== r.$imageEl.length) {
               if (!n.isTouched || !n.isMoved) return n.isTouched = !1, void(n.isMoved = !1);
               n.isTouched = !1;
               n.isMoved = !1;
               var u = 300,
                  f = 300,
                  l = t.x * u,
                  h = n.currentX + l,
                  a = t.y * f,
                  c = n.currentY + a;
               0 !== t.x && (u = Math.abs((h - n.currentX) / t.x));
               0 !== t.y && (f = Math.abs((c - n.currentY) / t.y));
               e = Math.max(u, f);
               n.currentX = h;
               n.currentY = c;
               o = n.width * i.scale;
               s = n.height * i.scale;
               n.minX = Math.min(r.slideWidth / 2 - o / 2, 0);
               n.maxX = -n.minX;
               n.minY = Math.min(r.slideHeight / 2 - s / 2, 0);
               n.maxY = -n.minY;
               n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX);
               n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY);
               r.$imageWrapEl.transition(e).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
            }
         },
         onTransitionEnd: function () {
            var t = this.zoom,
               n = t.gesture;
            n.$slideEl && this.previousIndex !== this.activeIndex && (n.$imageEl.transform("translate3d(0,0,0) scale(1)"), n.$imageWrapEl.transform("translate3d(0,0,0)"), n.$slideEl = void 0, n.$imageEl = void 0, n.$imageWrapEl = void 0, t.scale = 1, t.currentScale = 1)
         },
         toggle: function (n) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(n)
         },
         "in": function (n) {
            var s, h, b, k, u, f, d, g, nt, tt, c, l, a, v, y, p, e = this,
               r = e.zoom,
               o = e.params.zoom,
               i = r.gesture,
               w = r.image;
            (i.$slideEl || (i.$slideEl = e.clickedSlide ? t(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + o.containerClass)), i.$imageEl && 0 !== i.$imageEl.length) && (i.$slideEl.addClass("" + o.zoomedSlideClass), void 0 === w.touchesStart.x && n ? (s = "touchend" === n.type ? n.changedTouches[0].pageX : n.pageX, h = "touchend" === n.type ? n.changedTouches[0].pageY : n.pageY) : (s = w.touchesStart.x, h = w.touchesStart.y), r.scale = i.$imageWrapEl.attr("data-swiper-zoom") || o.maxRatio, r.currentScale = i.$imageWrapEl.attr("data-swiper-zoom") || o.maxRatio, n ? (y = i.$slideEl[0].offsetWidth, p = i.$slideEl[0].offsetHeight, b = i.$slideEl.offset().left + y / 2 - s, k = i.$slideEl.offset().top + p / 2 - h, d = i.$imageEl[0].offsetWidth, g = i.$imageEl[0].offsetHeight, nt = d * r.scale, tt = g * r.scale, a = -(c = Math.min(y / 2 - nt / 2, 0)), v = -(l = Math.min(p / 2 - tt / 2, 0)), (u = b * r.scale) < c && (u = c), a < u && (u = a), (f = k * r.scale) < l && (f = l), v < f && (f = v)) : f = u = 0, i.$imageWrapEl.transition(300).transform("translate3d(" + u + "px, " + f + "px,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + r.scale + ")"))
         },
         out: function () {
            var i = this,
               r = i.zoom,
               u = i.params.zoom,
               n = r.gesture;
            n.$slideEl || (n.$slideEl = i.clickedSlide ? t(i.clickedSlide) : i.slides.eq(i.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + u.containerClass));
            n.$imageEl && 0 !== n.$imageEl.length && (r.scale = 1, r.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass("" + u.zoomedSlideClass), n.$slideEl = void 0)
         },
         enable: function () {
            var n = this,
               t = n.zoom,
               i;
            t.enabled || (t.enabled = !0, i = !("touchstart" !== n.touchEvents.start || !r.passiveListener || !n.params.passiveListeners) && {
               passive: !0,
               capture: !1
            }, r.gestures ? (n.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i), n.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i), n.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === n.touchEvents.start && (n.$wrapperEl.on(n.touchEvents.start, ".swiper-slide", t.onGestureStart, i), n.$wrapperEl.on(n.touchEvents.move, ".swiper-slide", t.onGestureChange, i), n.$wrapperEl.on(n.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), n.$wrapperEl.on(n.touchEvents.move, "." + n.params.zoom.containerClass, t.onTouchMove))
         },
         disable: function () {
            var n = this,
               t = n.zoom,
               i;
            t.enabled && (n.zoom.enabled = !1, i = !("touchstart" !== n.touchEvents.start || !r.passiveListener || !n.params.passiveListeners) && {
               passive: !0,
               capture: !1
            }, r.gestures ? (n.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i), n.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i), n.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === n.touchEvents.start && (n.$wrapperEl.off(n.touchEvents.start, ".swiper-slide", t.onGestureStart, i), n.$wrapperEl.off(n.touchEvents.move, ".swiper-slide", t.onGestureChange, i), n.$wrapperEl.off(n.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), n.$wrapperEl.off(n.touchEvents.move, "." + n.params.zoom.containerClass, t.onTouchMove))
         }
      },
      yt = {
         loadInSlide: function (n, i) {
            var r, u, f, e;
            void 0 === i && (i = !0);
            r = this;
            u = r.params.lazy;
            void 0 !== n && 0 !== r.slides.length && (f = r.virtual && r.params.virtual.enabled ? r.$wrapperEl.children("." + r.params.slideClass + '[data-swiper-slide-index="' + n + '"]') : r.slides.eq(n), e = f.find("." + u.elementClass + ":not(." + u.loadedClass + "):not(." + u.loadingClass + ")"), !f.hasClass(u.elementClass) || f.hasClass(u.loadedClass) || f.hasClass(u.loadingClass) || (e = e.add(f[0])), 0 !== e.length && e.each(function (n, e) {
               var o = t(e);
               o.addClass(u.loadingClass);
               var s = o.attr("data-background"),
                  h = o.attr("data-src"),
                  c = o.attr("data-srcset"),
                  l = o.attr("data-sizes");
               r.loadImage(o[0], h || s, c, l, !1, function () {
                  var n, t, e;
                  null != r && r && (!r || r.params) && !r.destroyed && ((s ? (o.css("background-image", 'url("' + s + '")'), o.removeAttr("data-background")) : (c && (o.attr("srcset", c), o.removeAttr("data-srcset")), l && (o.attr("sizes", l), o.removeAttr("data-sizes")), h && (o.attr("src", h), o.removeAttr("data-src"))), o.addClass(u.loadedClass).removeClass(u.loadingClass), f.find("." + u.preloaderClass).remove(), r.params.loop && i) && (n = f.attr("data-swiper-slide-index"), f.hasClass(r.params.slideDuplicateClass) ? (t = r.$wrapperEl.children('[data-swiper-slide-index="' + n + '"]:not(.' + r.params.slideDuplicateClass + ")"), r.lazy.loadInSlide(t.index(), !1)) : (e = r.$wrapperEl.children("." + r.params.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]'), r.lazy.loadInSlide(e.index(), !1))), r.emit("lazyImageReady", f[0], o[0]))
               });
               r.emit("lazyImageLoad", f[0], o[0])
            }))
         },
         load: function () {
            function c(n) {
               if (l) {
                  if (o.children("." + i.slideClass + '[data-swiper-slide-index="' + n + '"]').length) return !0
               } else if (w[n]) return !0;
               return !1
            }

            function p(n) {
               return l ? t(n).attr("data-swiper-slide-index") : t(n).index()
            }
            var n = this,
               o = n.$wrapperEl,
               i = n.params,
               w = n.slides,
               r = n.activeIndex,
               l = n.virtual && i.virtual.enabled,
               s = i.lazy,
               u = i.slidesPerView,
               f, e, a, v;
            if ("auto" === u && (u = 0), n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0), n.params.watchSlidesVisibility) o.children("." + i.slideVisibleClass).each(function (i, r) {
               var u = l ? t(r).attr("data-swiper-slide-index") : t(r).index();
               n.lazy.loadInSlide(u)
            });
            else if (1 < u)
               for (f = r; f < r + u; f += 1) c(f) && n.lazy.loadInSlide(f);
            else n.lazy.loadInSlide(r);
            if (s.loadPrevNext)
               if (1 < u || s.loadPrevNextAmount && 1 < s.loadPrevNextAmount) {
                  for (var b = s.loadPrevNextAmount, y = u, k = Math.min(r + y + Math.max(b, y), w.length), d = Math.max(r - Math.max(y, b), 0), h = r + u; h < k; h += 1) c(h) && n.lazy.loadInSlide(h);
                  for (e = d; e < r; e += 1) c(e) && n.lazy.loadInSlide(e)
               } else a = o.children("." + i.slideNextClass), 0 < a.length && n.lazy.loadInSlide(p(a)), v = o.children("." + i.slidePrevClass), 0 < v.length && n.lazy.loadInSlide(p(v))
         }
      },
      y = {
         LinearSpline: function (n, t) {
            var i, u, e, r, f, o = function (n, t) {
               for (u = -1, i = n.length; 1 < i - u;) n[e = i + u >> 1] <= t ? u = e : i = e;
               return i
            };
            return this.x = n, this.y = t, this.lastIndex = n.length - 1, this.interpolate = function (n) {
               return n ? (f = o(this.x, n), r = f - 1, (n - this.x[r]) * (this.y[f] - this.y[r]) / (this.x[f] - this.x[r]) + this.y[r]) : 0
            }, this
         },
         getInterpolateFunction: function (n) {
            var t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new y.LinearSpline(t.slidesGrid, n.slidesGrid) : new y.LinearSpline(t.snapGrid, n.snapGrid))
         },
         setTranslate: function (n, t) {
            function e(n) {
               var t = i.rtlTranslate ? -i.translate : i.translate;
               "slide" === i.params.controller.by && (i.controller.getInterpolateFunction(n), u = -i.controller.spline.interpolate(-t));
               u && "container" !== i.params.controller.by || (s = (n.maxTranslate() - n.minTranslate()) / (i.maxTranslate() - i.minTranslate()), u = (t - i.minTranslate()) * s + n.minTranslate());
               i.params.controller.inverse && (u = n.maxTranslate() - u);
               n.updateProgress(u);
               n.setTranslate(u, i);
               n.updateActiveIndex();
               n.updateSlidesClasses()
            }
            var s, u, i = this,
               r = i.controller.control,
               f;
            if (Array.isArray(r))
               for (f = 0; f < r.length; f += 1) r[f] !== t && r[f] instanceof o && e(r[f]);
            else r instanceof o && t !== r && e(r)
         },
         setTransition: function (t, i) {
            function e(i) {
               i.setTransition(t, f);
               0 !== t && (i.transitionStart(), i.params.autoHeight && n.nextTick(function () {
                  i.updateAutoHeight()
               }), i.$wrapperEl.transitionEnd(function () {
                  r && (i.params.loop && "slide" === f.params.controller.by && i.loopFix(), i.transitionEnd())
               }))
            }
            var u, f = this,
               r = f.controller.control;
            if (Array.isArray(r))
               for (u = 0; u < r.length; u += 1) r[u] !== i && r[u] instanceof o && e(r[u]);
            else r instanceof o && i !== r && e(r)
         }
      },
      pt = {
         makeElFocusable: function (n) {
            return n.attr("tabIndex", "0"), n
         },
         addElRole: function (n, t) {
            return n.attr("role", t), n
         },
         addElLabel: function (n, t) {
            return n.attr("aria-label", t), n
         },
         disableEl: function (n) {
            return n.attr("aria-disabled", !0), n
         },
         enableEl: function (n) {
            return n.attr("aria-disabled", !1), n
         },
         onEnterKey: function (n) {
            var i = this,
               u = i.params.a11y,
               r;
            13 === n.keyCode && (r = t(n.target), i.navigation && i.navigation.$nextEl && r.is(i.navigation.$nextEl) && (i.isEnd && !i.params.loop || i.slideNext(), i.isEnd ? i.a11y.notify(u.lastSlideMessage) : i.a11y.notify(u.nextSlideMessage)), i.navigation && i.navigation.$prevEl && r.is(i.navigation.$prevEl) && (i.isBeginning && !i.params.loop || i.slidePrev(), i.isBeginning ? i.a11y.notify(u.firstSlideMessage) : i.a11y.notify(u.prevSlideMessage)), i.pagination && r.is("." + i.params.pagination.bulletClass) && r[0].click())
         },
         notify: function (n) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(n))
         },
         updateNavigation: function () {
            var n = this;
            if (!n.params.loop) {
               var r = n.navigation,
                  t = r.$nextEl,
                  i = r.$prevEl;
               i && 0 < i.length && (n.isBeginning ? n.a11y.disableEl(i) : n.a11y.enableEl(i));
               t && 0 < t.length && (n.isEnd ? n.a11y.disableEl(t) : n.a11y.enableEl(t))
            }
         },
         updatePagination: function () {
            var n = this,
               i = n.params.a11y;
            n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.bullets.each(function (r, u) {
               var f = t(u);
               n.a11y.makeElFocusable(f);
               n.a11y.addElRole(f, "button");
               n.a11y.addElLabel(f, i.paginationBulletMessage.replace(/{{index}}/, f.index() + 1))
            })
         },
         init: function () {
            var n = this,
               t, i, r;
            n.$el.append(n.a11y.liveRegion);
            r = n.params.a11y;
            n.navigation && n.navigation.$nextEl && (t = n.navigation.$nextEl);
            n.navigation && n.navigation.$prevEl && (i = n.navigation.$prevEl);
            t && (n.a11y.makeElFocusable(t), n.a11y.addElRole(t, "button"), n.a11y.addElLabel(t, r.nextSlideMessage), t.on("keydown", n.a11y.onEnterKey));
            i && (n.a11y.makeElFocusable(i), n.a11y.addElRole(i, "button"), n.a11y.addElLabel(i, r.prevSlideMessage), i.on("keydown", n.a11y.onEnterKey));
            n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.on("keydown", "." + n.params.pagination.bulletClass, n.a11y.onEnterKey)
         },
         destroy: function () {
            var t, i, n = this;
            n.a11y.liveRegion && 0 < n.a11y.liveRegion.length && n.a11y.liveRegion.remove();
            n.navigation && n.navigation.$nextEl && (t = n.navigation.$nextEl);
            n.navigation && n.navigation.$prevEl && (i = n.navigation.$prevEl);
            t && t.off("keydown", n.a11y.onEnterKey);
            i && i.off("keydown", n.a11y.onEnterKey);
            n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.off("keydown", "." + n.params.pagination.bulletClass, n.a11y.onEnterKey)
         }
      },
      l = {
         init: function () {
            var n = this,
               t;
            if (n.params.history) {
               if (!i.history || !i.history.pushState) return n.params.history.enabled = !1, void(n.params.hashNavigation.enabled = !0);
               t = n.history;
               t.initialized = !0;
               t.paths = l.getPathValues();
               (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, n.params.runCallbacksOnInit), n.params.history.replaceState || i.addEventListener("popstate", n.history.setHistoryPopState))
            }
         },
         destroy: function () {
            this.params.history.replaceState || i.removeEventListener("popstate", this.history.setHistoryPopState)
         },
         setHistoryPopState: function () {
            this.history.paths = l.getPathValues();
            this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
         },
         getPathValues: function () {
            var n = i.location.pathname.slice(1).split("/").filter(function (n) {
                  return "" !== n
               }),
               t = n.length;
            return {
               key: n[t - 2],
               value: n[t - 1]
            }
         },
         setHistory: function (n, t) {
            var f, r, u;
            this.history.initialized && this.params.history.enabled && (f = this.slides.eq(t), r = l.slugify(f.attr("data-history")), i.location.pathname.includes(n) || (r = n + "/" + r), u = i.history.state, u && u.value === r || (this.params.history.replaceState ? i.history.replaceState({
               value: r
            }, null, r) : i.history.pushState({
               value: r
            }, null, r)))
         },
         slugify: function (n) {
            return n.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
         },
         scrollToSlide: function (n, t, i) {
            var r = this,
               u, e, f, o;
            if (t)
               for (u = 0, e = r.slides.length; u < e; u += 1) f = r.slides.eq(u), l.slugify(f.attr("data-history")) !== t || f.hasClass(r.params.slideDuplicateClass) || (o = f.index(), r.slideTo(o, n, i));
            else r.slideTo(0, n, i)
         }
      },
      nt = {
         onHashCange: function () {
            var n = this,
               i = u.location.hash.replace("#", ""),
               t;
            if (i !== n.slides.eq(n.activeIndex).attr("data-hash")) {
               if (t = n.$wrapperEl.children("." + n.params.slideClass + '[data-hash="' + i + '"]').index(), void 0 === t) return;
               n.slideTo(t)
            }
         },
         setHash: function () {
            var n = this,
               t, r;
            n.hashNavigation.initialized && n.params.hashNavigation.enabled && (n.params.hashNavigation.replaceState && i.history && i.history.replaceState ? i.history.replaceState(null, null, "#" + n.slides.eq(n.activeIndex).attr("data-hash") || "") : (t = n.slides.eq(n.activeIndex), r = t.attr("data-hash") || t.attr("data-history"), u.location.hash = r || ""))
         },
         init: function () {
            var n = this,
               e, f, o, r, s;
            if (!(!n.params.hashNavigation.enabled || n.params.history && n.params.history.enabled)) {
               if (n.hashNavigation.initialized = !0, e = u.location.hash.replace("#", ""), e)
                  for (f = 0, o = n.slides.length; f < o; f += 1) r = n.slides.eq(f), (r.attr("data-hash") || r.attr("data-history")) !== e || r.hasClass(n.params.slideDuplicateClass) || (s = r.index(), n.slideTo(s, 0, n.params.runCallbacksOnInit, !0));
               n.params.hashNavigation.watchState && t(i).on("hashchange", n.hashNavigation.onHashCange)
            }
         },
         destroy: function () {
            this.params.hashNavigation.watchState && t(i).off("hashchange", this.hashNavigation.onHashCange)
         }
      },
      tt = {
         run: function () {
            var t = this,
               i = t.slides.eq(t.activeIndex),
               r = t.params.autoplay.delay;
            i.attr("data-swiper-autoplay") && (r = i.attr("data-swiper-autoplay") || t.params.autoplay.delay);
            t.autoplay.timeout = n.nextTick(function () {
               t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(), t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.params.loop ? (t.loopFix(), t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slideNext(t.params.speed, !0, !0), t.emit("autoplay"))
            }, r)
         },
         start: function () {
            var n = this;
            return void 0 === n.autoplay.timeout && !n.autoplay.running && (n.autoplay.running = !0, n.emit("autoplayStart"), n.autoplay.run(), !0)
         },
         stop: function () {
            var n = this;
            return !!n.autoplay.running && void 0 !== n.autoplay.timeout && (n.autoplay.timeout && (clearTimeout(n.autoplay.timeout), n.autoplay.timeout = void 0), n.autoplay.running = !1, n.emit("autoplayStop"), !0)
         },
         pause: function (n) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== n && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
         }
      },
      wt = {
         setTranslate: function () {
            for (var t, i, r, f, n = this, e = n.slides, u = 0; u < e.length; u += 1) t = n.slides.eq(u), i = -t[0].swiperSlideOffset, n.params.virtualTranslate || (i -= n.translate), r = 0, n.isHorizontal() || (r = i, i = 0), f = n.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0), t.css({
               opacity: f
            }).transform("translate3d(" + i + "px, " + r + "px, 0px)")
         },
         setTransition: function (n) {
            var t = this,
               r = t.slides,
               u = t.$wrapperEl,
               i;
            (r.transition(n), t.params.virtualTranslate && 0 !== n) && (i = !1, r.transitionEnd(function () {
               if (!i && t && !t.destroyed) {
                  i = !0;
                  t.animating = !1;
                  for (var r = ["webkitTransitionEnd", "transitionend"], n = 0; n < r.length; n += 1) u.trigger(r[n])
               }
            }))
         }
      },
      bt = {
         setTranslate: function () {
            var u, n = this,
               nt = n.$el,
               k = n.$wrapperEl,
               tt = n.slides,
               d = n.width,
               it = n.height,
               g = n.rtlTranslate,
               i = n.size,
               s = n.params.cubeEffect,
               f = n.isHorizontal(),
               st = n.virtual && n.params.virtual.enabled,
               c = 0,
               w, r, e, h, l, rt, a, y, ut;
            for (s.shadow && (f ? (0 === (u = k.find(".swiper-cube-shadow")).length && (u = t('<div class="swiper-cube-shadow"><\/div>'), k.append(u)), u.css({
                  height: d + "px"
               })) : 0 === (u = nt.find(".swiper-cube-shadow")).length && (u = t('<div class="swiper-cube-shadow"><\/div>'), nt.append(u))), w = 0; w < tt.length; w += 1) {
               r = tt.eq(w);
               e = w;
               st && (e = parseInt(r.attr("data-swiper-slide-index"), 10));
               h = 90 * e;
               l = Math.floor(h / 360);
               g && (h = -h, l = Math.floor(-h / 360));
               var p = Math.max(Math.min(r[0].progress, 1), -1),
                  o = 0,
                  ft = 0,
                  b = 0;
               e % 4 == 0 ? (o = 4 * -l * i, b = 0) : (e - 1) % 4 == 0 ? (o = 0, b = 4 * -l * i) : (e - 2) % 4 == 0 ? (o = i + 4 * l * i, b = i) : (e - 3) % 4 == 0 && (o = -i, b = 3 * i + 4 * i * l);
               g && (o = -o);
               f || (ft = o, o = 0);
               rt = "rotateX(" + (f ? 0 : -h) + "deg) rotateY(" + (f ? h : 0) + "deg) translate3d(" + o + "px, " + ft + "px, " + b + "px)";
               (p <= 1 && -1 < p && (c = 90 * e + 90 * p, g && (c = 90 * -e - 90 * p)), r.transform(rt), s.slideShadows) && (a = f ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"), y = f ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom"), 0 === a.length && (a = t('<div class="swiper-slide-shadow-' + (f ? "left" : "top") + '"><\/div>'), r.append(a)), 0 === y.length && (y = t('<div class="swiper-slide-shadow-' + (f ? "right" : "bottom") + '"><\/div>'), r.append(y)), a.length && (a[0].style.opacity = Math.max(-p, 0)), y.length && (y[0].style.opacity = Math.max(p, 0)))
            }
            if (k.css({
                  "-webkit-transform-origin": "50% 50% -" + i / 2 + "px",
                  "-moz-transform-origin": "50% 50% -" + i / 2 + "px",
                  "-ms-transform-origin": "50% 50% -" + i / 2 + "px",
                  "transform-origin": "50% 50% -" + i / 2 + "px"
               }), s.shadow)
               if (f) u.transform("translate3d(0px, " + (d / 2 + s.shadowOffset) + "px, " + -d / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + s.shadowScale + ")");
               else {
                  var et = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
                     ht = 1.5 - (Math.sin(2 * et * Math.PI / 360) / 2 + Math.cos(2 * et * Math.PI / 360) / 2),
                     ct = s.shadowScale,
                     ot = s.shadowScale / ht,
                     lt = s.shadowOffset;
                  u.transform("scale3d(" + ct + ", 1, " + ot + ") translate3d(0px, " + (it / 2 + lt) + "px, " + -it / 2 / ot + "px) rotateX(-90deg)")
               } ut = v.isSafari || v.isUiWebView ? -i / 2 : 0;
            k.transform("translate3d(0px,0," + ut + "px) rotateX(" + (n.isHorizontal() ? 0 : c) + "deg) rotateY(" + (n.isHorizontal() ? -c : 0) + "deg)")
         },
         setTransition: function (n) {
            var t = this.$el;
            this.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n);
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(n)
         }
      },
      kt = {
         setTranslate: function () {
            for (var n, r, u, f, i = this, o = i.slides, a = i.rtlTranslate, s = 0; s < o.length; s += 1) {
               n = o.eq(s);
               r = n[0].progress;
               i.params.flipEffect.limitRotation && (r = Math.max(Math.min(n[0].progress, 1), -1));
               var e = -180 * r,
                  c = 0,
                  h = -n[0].swiperSlideOffset,
                  l = 0;
               (i.isHorizontal() ? a && (e = -e) : (l = h, c = -e, e = h = 0), n[0].style.zIndex = -Math.abs(Math.round(r)) + o.length, i.params.flipEffect.slideShadows) && (u = i.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"), f = i.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom"), 0 === u.length && (u = t('<div class="swiper-slide-shadow-' + (i.isHorizontal() ? "left" : "top") + '"><\/div>'), n.append(u)), 0 === f.length && (f = t('<div class="swiper-slide-shadow-' + (i.isHorizontal() ? "right" : "bottom") + '"><\/div>'), n.append(f)), u.length && (u[0].style.opacity = Math.max(-r, 0)), f.length && (f[0].style.opacity = Math.max(r, 0)));
               n.transform("translate3d(" + h + "px, " + l + "px, 0px) rotateX(" + c + "deg) rotateY(" + e + "deg)")
            }
         },
         setTransition: function (n) {
            var t = this,
               r = t.slides,
               u = t.activeIndex,
               f = t.$wrapperEl,
               i;
            (r.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n), t.params.virtualTranslate && 0 !== n) && (i = !1, r.eq(u).transitionEnd(function () {
               if (!i && t && !t.destroyed) {
                  i = !0;
                  t.animating = !1;
                  for (var r = ["webkitTransitionEnd", "transitionend"], n = 0; n < r.length; n += 1) f.trigger(r[n])
               }
            }))
         }
      },
      dt = {
         setTranslate: function () {
            for (var p, o, s, f = this, nt = f.width, tt = f.height, w = f.slides, it = f.$wrapperEl, rt = f.slidesSizesGrid, e = f.params.coverflowEffect, n = f.isHorizontal(), b = f.translate, k = n ? nt / 2 - b : tt / 2 - b, d = n ? e.rotate : -e.rotate, ut = e.depth, h = 0, ft = w.length; h < ft; h += 1) {
               var u = w.eq(h),
                  g = rt[h],
                  i = (k - u[0].swiperSlideOffset - g / 2) / g * e.modifier,
                  c = n ? d * i : 0,
                  l = n ? 0 : d * i,
                  a = -ut * Math.abs(i),
                  v = n ? 0 : e.stretch * i,
                  y = n ? e.stretch * i : 0;
               Math.abs(y) < .001 && (y = 0);
               Math.abs(v) < .001 && (v = 0);
               Math.abs(a) < .001 && (a = 0);
               Math.abs(c) < .001 && (c = 0);
               Math.abs(l) < .001 && (l = 0);
               p = "translate3d(" + y + "px," + v + "px," + a + "px)  rotateX(" + l + "deg) rotateY(" + c + "deg)";
               (u.transform(p), u[0].style.zIndex = 1 - Math.abs(Math.round(i)), e.slideShadows) && (o = n ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"), s = n ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom"), 0 === o.length && (o = t('<div class="swiper-slide-shadow-' + (n ? "left" : "top") + '"><\/div>'), u.append(o)), 0 === s.length && (s = t('<div class="swiper-slide-shadow-' + (n ? "right" : "bottom") + '"><\/div>'), u.append(s)), o.length && (o[0].style.opacity = 0 < i ? i : 0), s.length && (s[0].style.opacity = 0 < -i ? -i : 0))
            }(r.pointerEvents || r.prefixedPointerEvents) && (it[0].style.perspectiveOrigin = k + "px 50%")
         },
         setTransition: function (n) {
            this.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n)
         }
      },
      ct = {
         init: function () {
            var t = this,
               i = t.params.thumbs,
               r = t.constructor;
            i.swiper instanceof r ? (t.thumbs.swiper = i.swiper, n.extend(t.thumbs.swiper.originalParams, {
               watchSlidesProgress: !0,
               slideToClickedSlide: !1
            }), n.extend(t.thumbs.swiper.params, {
               watchSlidesProgress: !0,
               slideToClickedSlide: !1
            })) : n.isObject(i.swiper) && (t.thumbs.swiper = new r(n.extend({}, i.swiper, {
               watchSlidesVisibility: !0,
               watchSlidesProgress: !0,
               slideToClickedSlide: !1
            })), t.thumbs.swiperCreated = !0);
            t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass);
            t.thumbs.swiper.on("tap", t.thumbs.onThumbClick)
         },
         onThumbClick: function () {
            var n = this,
               e = n.thumbs.swiper,
               o, r, i, u, f;
            e && (o = e.clickedIndex, null != o && ((r = e.params.loop ? parseInt(t(e.clickedSlide).attr("data-swiper-slide-index"), 10) : o, n.params.loop) && (i = n.activeIndex, n.slides.eq(i).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, i = n.activeIndex), u = n.slides.eq(i).prevAll('[data-swiper-slide-index="' + r + '"]').eq(0).index(), f = n.slides.eq(i).nextAll('[data-swiper-slide-index="' + r + '"]').eq(0).index(), r = void 0 === u ? f : void 0 === f ? u : f - i < i - u ? f : u), n.slideTo(r)))
         },
         update: function (n) {
            var i = this,
               t = i.thumbs.swiper,
               o, r, u, f, e, s, h, c, l;
            if (t)
               if (o = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView, i.realIndex !== t.realIndex && (u = t.activeIndex, t.params.loop ? (t.slides.eq(u).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, u = t.activeIndex), f = t.slides.eq(u).prevAll('[data-swiper-slide-index="' + i.realIndex + '"]').eq(0).index(), e = t.slides.eq(u).nextAll('[data-swiper-slide-index="' + i.realIndex + '"]').eq(0).index(), r = void 0 === f ? e : void 0 === e ? f : e - u < u - f ? e : f) : r = i.realIndex, t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = u < r ? r - Math.floor(o / 2) + 1 : r + Math.floor(o / 2) - 1 : u < r && (r = r - o + 1), t.slideTo(r, n ? 0 : void 0))), s = 1, h = i.params.thumbs.slideThumbActiveClass, 1 < i.params.slidesPerView && !i.params.centeredSlides && (s = i.params.slidesPerView), t.slides.removeClass(h), t.params.loop)
                  for (c = 0; c < s; c += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (i.realIndex + c) + '"]').addClass(h);
               else
                  for (l = 0; l < s; l += 1) t.slides.eq(i.realIndex + l).addClass(h)
         }
      },
      pi = [si, hi, ci, li, ai, vi, yi, {
         name: "mousewheel",
         params: {
            mousewheel: {
               enabled: !1,
               releaseOnEdges: !1,
               invert: !1,
               forceToAxis: !1,
               sensitivity: 1,
               eventsTarged: "container"
            }
         },
         create: function () {
            var t = this;
            n.extend(t, {
               mousewheel: {
                  enabled: !1,
                  enable: c.enable.bind(t),
                  disable: c.disable.bind(t),
                  handle: c.handle.bind(t),
                  handleMouseEnter: c.handleMouseEnter.bind(t),
                  handleMouseLeave: c.handleMouseLeave.bind(t),
                  lastScrollTime: n.now()
               }
            })
         },
         on: {
            init: function () {
               this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy: function () {
               this.mousewheel.enabled && this.mousewheel.disable()
            }
         }
      }, {
         name: "navigation",
         params: {
            navigation: {
               nextEl: null,
               prevEl: null,
               hideOnClick: !1,
               disabledClass: "swiper-button-disabled",
               hiddenClass: "swiper-button-hidden",
               lockClass: "swiper-button-lock"
            }
         },
         create: function () {
            n.extend(this, {
               navigation: {
                  init: ot.init.bind(this),
                  update: ot.update.bind(this),
                  destroy: ot.destroy.bind(this)
               }
            })
         },
         on: {
            init: function () {
               this.navigation.init();
               this.navigation.update()
            },
            toEdge: function () {
               this.navigation.update()
            },
            fromEdge: function () {
               this.navigation.update()
            },
            destroy: function () {
               this.navigation.destroy()
            },
            click: function (n) {
               var u = this.navigation,
                  i = u.$nextEl,
                  r = u.$prevEl;
               !this.params.navigation.hideOnClick || t(n.target).is(r) || t(n.target).is(i) || (i && i.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass))
            }
         }
      }, {
         name: "pagination",
         params: {
            pagination: {
               el: null,
               bulletElement: "span",
               clickable: !1,
               hideOnClick: !1,
               renderBullet: null,
               renderProgressbar: null,
               renderFraction: null,
               renderCustom: null,
               progressbarOpposite: !1,
               type: "bullets",
               dynamicBullets: !1,
               dynamicMainBullets: 1,
               formatFractionCurrent: function (n) {
                  return n
               },
               formatFractionTotal: function (n) {
                  return n
               },
               bulletClass: "swiper-pagination-bullet",
               bulletActiveClass: "swiper-pagination-bullet-active",
               modifierClass: "swiper-pagination-",
               currentClass: "swiper-pagination-current",
               totalClass: "swiper-pagination-total",
               hiddenClass: "swiper-pagination-hidden",
               progressbarFillClass: "swiper-pagination-progressbar-fill",
               progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
               clickableClass: "swiper-pagination-clickable",
               lockClass: "swiper-pagination-lock"
            }
         },
         create: function () {
            var t = this;
            n.extend(t, {
               pagination: {
                  init: g.init.bind(t),
                  render: g.render.bind(t),
                  update: g.update.bind(t),
                  destroy: g.destroy.bind(t),
                  dynamicBulletIndex: 0
               }
            })
         },
         on: {
            init: function () {
               this.pagination.init();
               this.pagination.render();
               this.pagination.update()
            },
            activeIndexChange: function () {
               this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            },
            snapIndexChange: function () {
               this.params.loop || this.pagination.update()
            },
            slidesLengthChange: function () {
               this.params.loop && (this.pagination.render(), this.pagination.update())
            },
            snapGridLengthChange: function () {
               this.params.loop || (this.pagination.render(), this.pagination.update())
            },
            destroy: function () {
               this.pagination.destroy()
            },
            click: function (n) {
               var i = this;
               i.params.pagination.el && i.params.pagination.hideOnClick && 0 < i.pagination.$el.length && !t(n.target).hasClass(i.params.pagination.bulletClass) && i.pagination.$el.toggleClass(i.params.pagination.hiddenClass)
            }
         }
      }, {
         name: "scrollbar",
         params: {
            scrollbar: {
               el: null,
               dragSize: "auto",
               hide: !1,
               draggable: !1,
               snapOnRelease: !0,
               lockClass: "swiper-scrollbar-lock",
               dragClass: "swiper-scrollbar-drag"
            }
         },
         create: function () {
            var t = this;
            n.extend(t, {
               scrollbar: {
                  init: s.init.bind(t),
                  destroy: s.destroy.bind(t),
                  updateSize: s.updateSize.bind(t),
                  setTranslate: s.setTranslate.bind(t),
                  setTransition: s.setTransition.bind(t),
                  enableDraggable: s.enableDraggable.bind(t),
                  disableDraggable: s.disableDraggable.bind(t),
                  setDragPosition: s.setDragPosition.bind(t),
                  onDragStart: s.onDragStart.bind(t),
                  onDragMove: s.onDragMove.bind(t),
                  onDragEnd: s.onDragEnd.bind(t),
                  isTouched: !1,
                  timeout: null,
                  dragTimeout: null
               }
            })
         },
         on: {
            init: function () {
               this.scrollbar.init();
               this.scrollbar.updateSize();
               this.scrollbar.setTranslate()
            },
            update: function () {
               this.scrollbar.updateSize()
            },
            resize: function () {
               this.scrollbar.updateSize()
            },
            observerUpdate: function () {
               this.scrollbar.updateSize()
            },
            setTranslate: function () {
               this.scrollbar.setTranslate()
            },
            setTransition: function (n) {
               this.scrollbar.setTransition(n)
            },
            destroy: function () {
               this.scrollbar.destroy()
            }
         }
      }, {
         name: "parallax",
         params: {
            parallax: {
               enabled: !1
            }
         },
         create: function () {
            n.extend(this, {
               parallax: {
                  setTransform: st.setTransform.bind(this),
                  setTranslate: st.setTranslate.bind(this),
                  setTransition: st.setTransition.bind(this)
               }
            })
         },
         on: {
            beforeInit: function () {
               this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            },
            init: function () {
               this.params.parallax && this.parallax.setTranslate()
            },
            setTranslate: function () {
               this.params.parallax && this.parallax.setTranslate()
            },
            setTransition: function (n) {
               this.params.parallax && this.parallax.setTransition(n)
            }
         }
      }, {
         name: "zoom",
         params: {
            zoom: {
               enabled: !1,
               maxRatio: 3,
               minRatio: 1,
               toggle: !0,
               containerClass: "swiper-zoom-container",
               zoomedSlideClass: "swiper-slide-zoomed"
            }
         },
         create: function () {
            var t = this,
               i = {
                  enabled: !1,
                  scale: 1,
                  currentScale: 1,
                  isScaling: !1,
                  gesture: {
                     $slideEl: void 0,
                     slideWidth: void 0,
                     slideHeight: void 0,
                     $imageEl: void 0,
                     $imageWrapEl: void 0,
                     maxRatio: 3
                  },
                  image: {
                     isTouched: void 0,
                     isMoved: void 0,
                     currentX: void 0,
                     currentY: void 0,
                     minX: void 0,
                     minY: void 0,
                     maxX: void 0,
                     maxY: void 0,
                     width: void 0,
                     height: void 0,
                     startX: void 0,
                     startY: void 0,
                     touchesStart: {},
                     touchesCurrent: {}
                  },
                  velocity: {
                     x: void 0,
                     y: void 0,
                     prevPositionX: void 0,
                     prevPositionY: void 0,
                     prevTime: void 0
                  }
               };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (n) {
               i[n] = ht[n].bind(t)
            });
            n.extend(t, {
               zoom: i
            })
         },
         on: {
            init: function () {
               this.params.zoom.enabled && this.zoom.enable()
            },
            destroy: function () {
               this.zoom.disable()
            },
            touchStart: function (n) {
               this.zoom.enabled && this.zoom.onTouchStart(n)
            },
            touchEnd: function (n) {
               this.zoom.enabled && this.zoom.onTouchEnd(n)
            },
            doubleTap: function (n) {
               this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(n)
            },
            transitionEnd: function () {
               this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
         }
      }, {
         name: "lazy",
         params: {
            lazy: {
               enabled: !1,
               loadPrevNext: !1,
               loadPrevNextAmount: 1,
               loadOnTransitionStart: !1,
               elementClass: "swiper-lazy",
               loadingClass: "swiper-lazy-loading",
               loadedClass: "swiper-lazy-loaded",
               preloaderClass: "swiper-lazy-preloader"
            }
         },
         create: function () {
            n.extend(this, {
               lazy: {
                  initialImageLoaded: !1,
                  load: yt.load.bind(this),
                  loadInSlide: yt.loadInSlide.bind(this)
               }
            })
         },
         on: {
            beforeInit: function () {
               this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            },
            init: function () {
               this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            },
            scroll: function () {
               this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            },
            resize: function () {
               this.params.lazy.enabled && this.lazy.load()
            },
            scrollbarDragMove: function () {
               this.params.lazy.enabled && this.lazy.load()
            },
            transitionStart: function () {
               var n = this;
               n.params.lazy.enabled && (n.params.lazy.loadOnTransitionStart || !n.params.lazy.loadOnTransitionStart && !n.lazy.initialImageLoaded) && n.lazy.load()
            },
            transitionEnd: function () {
               this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
         }
      }, {
         name: "controller",
         params: {
            controller: {
               control: void 0,
               inverse: !1,
               by: "slide"
            }
         },
         create: function () {
            var t = this;
            n.extend(t, {
               controller: {
                  control: t.params.controller.control,
                  getInterpolateFunction: y.getInterpolateFunction.bind(t),
                  setTranslate: y.setTranslate.bind(t),
                  setTransition: y.setTransition.bind(t)
               }
            })
         },
         on: {
            update: function () {
               this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            },
            resize: function () {
               this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            },
            observerUpdate: function () {
               this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            },
            setTranslate: function (n, t) {
               this.controller.control && this.controller.setTranslate(n, t)
            },
            setTransition: function (n, t) {
               this.controller.control && this.controller.setTransition(n, t)
            }
         }
      }, {
         name: "a11y",
         params: {
            a11y: {
               enabled: !0,
               notificationClass: "swiper-notification",
               prevSlideMessage: "Previous slide",
               nextSlideMessage: "Next slide",
               firstSlideMessage: "This is the first slide",
               lastSlideMessage: "This is the last slide",
               paginationBulletMessage: "Go to slide {{index}}"
            }
         },
         create: function () {
            var i = this;
            n.extend(i, {
               a11y: {
                  liveRegion: t('<span class="' + i.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"><\/span>')
               }
            });
            Object.keys(pt).forEach(function (n) {
               i.a11y[n] = pt[n].bind(i)
            })
         },
         on: {
            init: function () {
               this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
            },
            toEdge: function () {
               this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge: function () {
               this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate: function () {
               this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy: function () {
               this.params.a11y.enabled && this.a11y.destroy()
            }
         }
      }, {
         name: "history",
         params: {
            history: {
               enabled: !1,
               replaceState: !1,
               key: "slides"
            }
         },
         create: function () {
            var t = this;
            n.extend(t, {
               history: {
                  init: l.init.bind(t),
                  setHistory: l.setHistory.bind(t),
                  setHistoryPopState: l.setHistoryPopState.bind(t),
                  scrollToSlide: l.scrollToSlide.bind(t),
                  destroy: l.destroy.bind(t)
               }
            })
         },
         on: {
            init: function () {
               this.params.history.enabled && this.history.init()
            },
            destroy: function () {
               this.params.history.enabled && this.history.destroy()
            },
            transitionEnd: function () {
               this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
         }
      }, {
         name: "hash-navigation",
         params: {
            hashNavigation: {
               enabled: !1,
               replaceState: !1,
               watchState: !1
            }
         },
         create: function () {
            var t = this;
            n.extend(t, {
               hashNavigation: {
                  initialized: !1,
                  init: nt.init.bind(t),
                  destroy: nt.destroy.bind(t),
                  setHash: nt.setHash.bind(t),
                  onHashCange: nt.onHashCange.bind(t)
               }
            })
         },
         on: {
            init: function () {
               this.params.hashNavigation.enabled && this.hashNavigation.init()
            },
            destroy: function () {
               this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            },
            transitionEnd: function () {
               this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
         }
      }, {
         name: "autoplay",
         params: {
            autoplay: {
               enabled: !1,
               delay: 3e3,
               waitForTransition: !0,
               disableOnInteraction: !0,
               stopOnLastSlide: !1,
               reverseDirection: !1
            }
         },
         create: function () {
            var t = this;
            n.extend(t, {
               autoplay: {
                  running: !1,
                  paused: !1,
                  run: tt.run.bind(t),
                  start: tt.start.bind(t),
                  stop: tt.stop.bind(t),
                  pause: tt.pause.bind(t),
                  onTransitionEnd: function (n) {
                     t && !t.destroyed && t.$wrapperEl && n.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                  }
               }
            })
         },
         on: {
            init: function () {
               this.params.autoplay.enabled && this.autoplay.start()
            },
            beforeTransitionStart: function (n, t) {
               this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(n) : this.autoplay.stop())
            },
            sliderFirstMove: function () {
               this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            },
            destroy: function () {
               this.autoplay.running && this.autoplay.stop()
            }
         }
      }, {
         name: "effect-fade",
         params: {
            fadeEffect: {
               crossFade: !1
            }
         },
         create: function () {
            n.extend(this, {
               fadeEffect: {
                  setTranslate: wt.setTranslate.bind(this),
                  setTransition: wt.setTransition.bind(this)
               }
            })
         },
         on: {
            beforeInit: function () {
               var t = this,
                  i;
               "fade" === t.params.effect && (t.classNames.push(t.params.containerModifierClass + "fade"), i = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0
               }, n.extend(t.params, i), n.extend(t.originalParams, i))
            },
            setTranslate: function () {
               "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition: function (n) {
               "fade" === this.params.effect && this.fadeEffect.setTransition(n)
            }
         }
      }, {
         name: "effect-cube",
         params: {
            cubeEffect: {
               slideShadows: !0,
               shadow: !0,
               shadowOffset: 20,
               shadowScale: .94
            }
         },
         create: function () {
            n.extend(this, {
               cubeEffect: {
                  setTranslate: bt.setTranslate.bind(this),
                  setTransition: bt.setTransition.bind(this)
               }
            })
         },
         on: {
            beforeInit: function () {
               var t = this,
                  i;
               "cube" === t.params.effect && (t.classNames.push(t.params.containerModifierClass + "cube"), t.classNames.push(t.params.containerModifierClass + "3d"), i = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  resistanceRatio: 0,
                  spaceBetween: 0,
                  centeredSlides: !1,
                  virtualTranslate: !0
               }, n.extend(t.params, i), n.extend(t.originalParams, i))
            },
            setTranslate: function () {
               "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition: function (n) {
               "cube" === this.params.effect && this.cubeEffect.setTransition(n)
            }
         }
      }, {
         name: "effect-flip",
         params: {
            flipEffect: {
               slideShadows: !0,
               limitRotation: !0
            }
         },
         create: function () {
            n.extend(this, {
               flipEffect: {
                  setTranslate: kt.setTranslate.bind(this),
                  setTransition: kt.setTransition.bind(this)
               }
            })
         },
         on: {
            beforeInit: function () {
               var t = this,
                  i;
               "flip" === t.params.effect && (t.classNames.push(t.params.containerModifierClass + "flip"), t.classNames.push(t.params.containerModifierClass + "3d"), i = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0
               }, n.extend(t.params, i), n.extend(t.originalParams, i))
            },
            setTranslate: function () {
               "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition: function (n) {
               "flip" === this.params.effect && this.flipEffect.setTransition(n)
            }
         }
      }, {
         name: "effect-coverflow",
         params: {
            coverflowEffect: {
               rotate: 50,
               stretch: 0,
               depth: 100,
               modifier: 1,
               slideShadows: !0
            }
         },
         create: function () {
            n.extend(this, {
               coverflowEffect: {
                  setTranslate: dt.setTranslate.bind(this),
                  setTransition: dt.setTransition.bind(this)
               }
            })
         },
         on: {
            beforeInit: function () {
               var n = this;
               "coverflow" === n.params.effect && (n.classNames.push(n.params.containerModifierClass + "coverflow"), n.classNames.push(n.params.containerModifierClass + "3d"), n.params.watchSlidesProgress = !0, n.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function () {
               "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition: function (n) {
               "coverflow" === this.params.effect && this.coverflowEffect.setTransition(n)
            }
         }
      }, {
         name: "thumbs",
         params: {
            thumbs: {
               swiper: null,
               slideThumbActiveClass: "swiper-slide-thumb-active",
               thumbsContainerClass: "swiper-container-thumbs"
            }
         },
         create: function () {
            n.extend(this, {
               thumbs: {
                  swiper: null,
                  init: ct.init.bind(this),
                  update: ct.update.bind(this),
                  onThumbClick: ct.onThumbClick.bind(this)
               }
            })
         },
         on: {
            beforeInit: function () {
               var n = this.params.thumbs;
               n && n.swiper && (this.thumbs.init(), this.thumbs.update(!0))
            },
            slideChange: function () {
               this.thumbs.swiper && this.thumbs.update()
            },
            update: function () {
               this.thumbs.swiper && this.thumbs.update()
            },
            resize: function () {
               this.thumbs.swiper && this.thumbs.update()
            },
            observerUpdate: function () {
               this.thumbs.swiper && this.thumbs.update()
            },
            setTransition: function (n) {
               var t = this.thumbs.swiper;
               t && t.setTransition(n)
            },
            beforeDestroy: function () {
               var n = this.thumbs.swiper;
               n && this.thumbs.swiperCreated && n && n.destroy()
            }
         }
      }];
   return void 0 === o.use && (o.use = o.Class.use, o.installModule = o.Class.installModule), o.use(pi), o
});
/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
! function (n, t) {
   "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
      return t(n, i)
   }) : "object" == typeof module && module.exports ? module.exports = t(n, require("jquery")) : n.jQueryBridget = t(n, n.jQuery)
}(window, function (n, t) {
   "use strict";

   function i(i, u, o) {
      function s(n, t, r) {
         var u, e = "$()." + i + '("' + t + '")';
         return n.each(function (n, s) {
            var h = o.data(s, i),
               c, l;
            if (!h) return void f(i + " not initialized. Cannot call methods, i.e. " + e);
            if (c = h[t], !c || "_" == t.charAt(0)) return void f(e + " is not a valid method");
            l = c.apply(h, r);
            u = void 0 === u ? l : u
         }), void 0 !== u ? u : n
      }

      function h(n, t) {
         n.each(function (n, r) {
            var f = o.data(r, i);
            f ? (f.option(t), f._init()) : (f = new u(r, t), o.data(r, i, f))
         })
      }
      o = o || t || n.jQuery;
      o && (u.prototype.option || (u.prototype.option = function (n) {
         o.isPlainObject(n) && (this.options = o.extend(!0, this.options, n))
      }), o.fn[i] = function (n) {
         if ("string" == typeof n) {
            var t = e.call(arguments, 1);
            return s(this, n, t)
         }
         return h(this, n), this
      }, r(o))
   }

   function r(n) {
      !n || n && n.bridget || (n.bridget = i)
   }
   var e = Array.prototype.slice,
      u = n.console,
      f = "undefined" == typeof u ? function () {} : function (n) {
         u.error(n)
      };
   return r(t || n.jQuery), i
}),
function (n, t) {
   "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : n.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
   function t() {}
   var n = t.prototype;
   return n.on = function (n, t) {
      if (n && t) {
         var i = this._events = this._events || {},
            r = i[n] = i[n] || [];
         return -1 == r.indexOf(t) && r.push(t), this
      }
   }, n.once = function (n, t) {
      if (n && t) {
         this.on(n, t);
         var i = this._onceEvents = this._onceEvents || {},
            r = i[n] = i[n] || {};
         return r[t] = !0, this
      }
   }, n.off = function (n, t) {
      var i = this._events && this._events[n],
         r;
      if (i && i.length) return r = i.indexOf(t), -1 != r && i.splice(r, 1), this
   }, n.emitEvent = function (n, t) {
      var i = this._events && this._events[n],
         u, f, r, e;
      if (i && i.length) {
         for (i = i.slice(0), t = t || [], u = this._onceEvents && this._onceEvents[n], f = 0; f < i.length; f++) r = i[f], e = u && u[r], e && (this.off(n, r), delete u[r]), r.apply(this, t);
         return this
      }
   }, n.allOff = function () {
      delete this._events;
      delete this._onceEvents
   }, t
}),
function (n, t) {
   "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == typeof module && module.exports ? module.exports = t() : n.getSize = t()
}(window, function () {
   "use strict";

   function n(n) {
      var t = parseFloat(n),
         i = -1 == n.indexOf("%") && !isNaN(t);
      return i && t
   }

   function o() {}

   function s() {
      for (var t, r = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
         }, n = 0; f > n; n++) t = i[n], r[t] = 0;
      return r
   }

   function r(n) {
      var t = getComputedStyle(n);
      return t || c("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t
   }

   function h() {
      var i, f, o;
      e || (e = !0, i = document.createElement("div"), i.style.width = "200px", i.style.padding = "1px 2px 3px 4px", i.style.borderStyle = "solid", i.style.borderWidth = "1px 2px 3px 4px", i.style.boxSizing = "border-box", f = document.body || document.documentElement, f.appendChild(i), o = r(i), t = 200 == Math.round(n(o.width)), u.isBoxSizeOuter = t, f.removeChild(i))
   }

   function u(u) {
      var o, e, a, c, l;
      if (h(), "string" == typeof u && (u = document.querySelector(u)), u && "object" == typeof u && u.nodeType) {
         if (o = r(u), "none" == o.display) return s();
         for (e = {}, e.width = u.offsetWidth, e.height = u.offsetHeight, a = e.isBorderBox = "border-box" == o.boxSizing, c = 0; f > c; c++) {
            var v = i[c],
               nt = o[v],
               y = parseFloat(nt);
            e[v] = isNaN(y) ? 0 : y
         }
         var p = e.paddingLeft + e.paddingRight,
            w = e.paddingTop + e.paddingBottom,
            tt = e.marginLeft + e.marginRight,
            it = e.marginTop + e.marginBottom,
            b = e.borderLeftWidth + e.borderRightWidth,
            k = e.borderTopWidth + e.borderBottomWidth,
            d = a && t,
            g = n(o.width);
         return g !== !1 && (e.width = g + (d ? 0 : p + b)), l = n(o.height), l !== !1 && (e.height = l + (d ? 0 : w + k)), e.innerWidth = e.width - (p + b), e.innerHeight = e.height - (w + k), e.outerWidth = e.width + tt, e.outerHeight = e.height + it, e
      }
   }
   var t, c = "undefined" == typeof console ? o : function (n) {
         console.error(n)
      },
      i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      f = i.length,
      e = !1;
   return u
}),
function (n, t) {
   "use strict";
   "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : n.matchesSelector = t()
}(window, function () {
   "use strict";
   var n = function () {
      var t = window.Element.prototype,
         i, n, u, r;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (i = ["webkit", "moz", "ms", "o"], n = 0; n < i.length; n++)
         if (u = i[n], r = u + "MatchesSelector", t[r]) return r
   }();
   return function (t, i) {
      return t[n](i)
   }
}),
function (n, t) {
   "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
      return t(n, i)
   }) : "object" == typeof module && module.exports ? module.exports = t(n, require("desandro-matches-selector")) : n.fizzyUIUtils = t(n, n.matchesSelector)
}(window, function (n, t) {
   var i = {},
      u, r;
   return i.extend = function (n, t) {
      for (var i in t) n[i] = t[i];
      return n
   }, i.modulo = function (n, t) {
      return (n % t + t) % t
   }, u = Array.prototype.slice, i.makeArray = function (n) {
      if (Array.isArray(n)) return n;
      if (null === n || void 0 === n) return [];
      var t = "object" == typeof n && "number" == typeof n.length;
      return t ? u.call(n) : [n]
   }, i.removeFrom = function (n, t) {
      var i = n.indexOf(t); - 1 != i && n.splice(i, 1)
   }, i.getParent = function (n, i) {
      for (; n.parentNode && n != document.body;)
         if (n = n.parentNode, t(n, i)) return n
   }, i.getQueryElement = function (n) {
      return "string" == typeof n ? document.querySelector(n) : n
   }, i.handleEvent = function (n) {
      var t = "on" + n.type;
      this[t] && this[t](n)
   }, i.filterFindElements = function (n, r) {
      n = i.makeArray(n);
      var u = [];
      return n.forEach(function (n) {
         if (n instanceof HTMLElement) {
            if (!r) return void u.push(n);
            t(n, r) && u.push(n);
            for (var f = n.querySelectorAll(r), i = 0; i < f.length; i++) u.push(f[i])
         }
      }), u
   }, i.debounceMethod = function (n, t, i) {
      i = i || 100;
      var u = n.prototype[t],
         r = t + "Timeout";
      n.prototype[t] = function () {
         var f = this[r],
            t, n;
         clearTimeout(f);
         t = arguments;
         n = this;
         this[r] = setTimeout(function () {
            u.apply(n, t);
            delete n[r]
         }, i)
      }
   }, i.docReady = function (n) {
      var t = document.readyState;
      "complete" == t || "interactive" == t ? setTimeout(n) : document.addEventListener("DOMContentLoaded", n)
   }, i.toDashed = function (n) {
      return n.replace(/(.)([A-Z])/g, function (n, t, i) {
         return t + "-" + i
      }).toLowerCase()
   }, r = n.console, i.htmlInit = function (t, u) {
      i.docReady(function () {
         var e = i.toDashed(u),
            f = "data-" + e,
            s = document.querySelectorAll("[" + f + "]"),
            h = document.querySelectorAll(".js-" + e),
            c = i.makeArray(s).concat(i.makeArray(h)),
            l = f + "-options",
            o = n.jQuery;
         c.forEach(function (n) {
            var i, e = n.getAttribute(f) || n.getAttribute(l),
               s;
            try {
               i = e && JSON.parse(e)
            } catch (h) {
               return void(r && r.error("Error parsing " + f + " on " + n.className + ": " + h))
            }
            s = new t(n, i);
            o && o.data(n, u, s)
         })
      })
   }, i
}),
function (n, t) {
   "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (n.Outlayer = {}, n.Outlayer.Item = t(n.EvEmitter, n.getSize))
}(window, function (n, t) {
   "use strict";

   function l(n) {
      for (var t in n) return !1;
      return t = null, !0
   }

   function u(n, t) {
      n && (this.element = n, this.layout = t, this.position = {
         x: 0,
         y: 0
      }, this._create())
   }

   function a(n) {
      return n.replace(/([A-Z])/g, function (n) {
         return "-" + n.toLowerCase()
      })
   }
   var f = document.documentElement.style,
      r = "string" == typeof f.transition ? "transition" : "WebkitTransition",
      e = "string" == typeof f.transform ? "transform" : "WebkitTransform",
      o = {
         WebkitTransition: "webkitTransitionEnd",
         transition: "transitionend"
      } [r],
      v = {
         transform: e,
         transition: r,
         transitionDuration: r + "Duration",
         transitionProperty: r + "Property",
         transitionDelay: r + "Delay"
      },
      i = u.prototype = Object.create(n.prototype),
      s, h, c;
   return i.constructor = u, i._create = function () {
      this._transn = {
         ingProperties: {},
         clean: {},
         onEnd: {}
      };
      this.css({
         position: "absolute"
      })
   }, i.handleEvent = function (n) {
      var t = "on" + n.type;
      this[t] && this[t](n)
   }, i.getSize = function () {
      this.size = t(this.element)
   }, i.css = function (n) {
      var r = this.element.style,
         t, i;
      for (t in n) i = v[t] || t, r[i] = n[t]
   }, i.getPosition = function () {
      var r = getComputedStyle(this.element),
         u = this.layout._getOption("originLeft"),
         f = this.layout._getOption("originTop"),
         e = r[u ? "left" : "right"],
         o = r[f ? "top" : "bottom"],
         n = parseFloat(e),
         t = parseFloat(o),
         i = this.layout.size; - 1 != e.indexOf("%") && (n = n / 100 * i.width); - 1 != o.indexOf("%") && (t = t / 100 * i.height);
      n = isNaN(n) ? 0 : n;
      t = isNaN(t) ? 0 : t;
      n -= u ? i.paddingLeft : i.paddingRight;
      t -= f ? i.paddingTop : i.paddingBottom;
      this.position.x = n;
      this.position.y = t
   }, i.layoutPosition = function () {
      var r = this.layout.size,
         n = {},
         t = this.layout._getOption("originLeft"),
         i = this.layout._getOption("originTop"),
         u = t ? "paddingLeft" : "paddingRight",
         f = t ? "left" : "right",
         e = t ? "right" : "left",
         o = this.position.x + r[u];
      n[f] = this.getXValue(o);
      n[e] = "";
      var s = i ? "paddingTop" : "paddingBottom",
         h = i ? "top" : "bottom",
         c = i ? "bottom" : "top",
         l = this.position.y + r[s];
      n[h] = this.getYValue(l);
      n[c] = "";
      this.css(n);
      this.emitEvent("layout", [this])
   }, i.getXValue = function (n) {
      var t = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && !t ? n / this.layout.size.width * 100 + "%" : n + "px"
   }, i.getYValue = function (n) {
      var t = this.layout._getOption("horizontal");
      return this.layout.options.percentPosition && t ? n / this.layout.size.height * 100 + "%" : n + "px"
   }, i._transitionTo = function (n, t) {
      this.getPosition();
      var r = this.position.x,
         u = this.position.y,
         f = n == this.position.x && t == this.position.y;
      if (this.setPosition(n, t), f && !this.isTransitioning) return void this.layoutPosition();
      var e = n - r,
         o = t - u,
         i = {};
      i.transform = this.getTranslate(e, o);
      this.transition({
         to: i,
         onTransitionEnd: {
            transform: this.layoutPosition
         },
         isCleaning: !0
      })
   }, i.getTranslate = function (n, t) {
      var i = this.layout._getOption("originLeft"),
         r = this.layout._getOption("originTop");
      return n = i ? n : -n, t = r ? t : -t, "translate3d(" + n + "px, " + t + "px, 0)"
   }, i.goTo = function (n, t) {
      this.setPosition(n, t);
      this.layoutPosition()
   }, i.moveTo = i._transitionTo, i.setPosition = function (n, t) {
      this.position.x = parseFloat(n);
      this.position.y = parseFloat(t)
   }, i._nonTransition = function (n) {
      this.css(n.to);
      n.isCleaning && this._removeStyles(n.to);
      for (var t in n.onTransitionEnd) n.onTransitionEnd[t].call(this)
   }, i.transition = function (n) {
      var i, t, r;
      if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(n);
      i = this._transn;
      for (t in n.onTransitionEnd) i.onEnd[t] = n.onTransitionEnd[t];
      for (t in n.to) i.ingProperties[t] = !0, n.isCleaning && (i.clean[t] = !0);
      n.from && (this.css(n.from), r = this.element.offsetHeight, r = null);
      this.enableTransition(n.to);
      this.css(n.to);
      this.isTransitioning = !0
   }, s = "opacity," + a(e), i.enableTransition = function () {
      if (!this.isTransitioning) {
         var n = this.layout.options.transitionDuration;
         n = "number" == typeof n ? n + "ms" : n;
         this.css({
            transitionProperty: s,
            transitionDuration: n,
            transitionDelay: this.staggerDelay || 0
         });
         this.element.addEventListener(o, this, !1)
      }
   }, i.onwebkitTransitionEnd = function (n) {
      this.ontransitionend(n)
   }, i.onotransitionend = function (n) {
      this.ontransitionend(n)
   }, h = {
      "-webkit-transform": "transform"
   }, i.ontransitionend = function (n) {
      var t, i, r;
      n.target === this.element && (t = this._transn, i = h[n.propertyName] || n.propertyName, (delete t.ingProperties[i], l(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[n.propertyName] = "", delete t.clean[i]), i in t.onEnd) && (r = t.onEnd[i], r.call(this), delete t.onEnd[i]), this.emitEvent("transitionEnd", [this]))
   }, i.disableTransition = function () {
      this.removeTransitionStyles();
      this.element.removeEventListener(o, this, !1);
      this.isTransitioning = !1
   }, i._removeStyles = function (n) {
      var t = {};
      for (var i in n) t[i] = "";
      this.css(t)
   }, c = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: ""
   }, i.removeTransitionStyles = function () {
      this.css(c)
   }, i.stagger = function (n) {
      n = isNaN(n) ? 0 : n;
      this.staggerDelay = n + "ms"
   }, i.removeElem = function () {
      this.element.parentNode.removeChild(this.element);
      this.css({
         display: ""
      });
      this.emitEvent("remove", [this])
   }, i.remove = function () {
      return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
         this.removeElem()
      }), void this.hide()) : void this.removeElem()
   }, i.reveal = function () {
      delete this.isHidden;
      this.css({
         display: ""
      });
      var n = this.layout.options,
         t = {},
         i = this.getHideRevealTransitionEndProperty("visibleStyle");
      t[i] = this.onRevealTransitionEnd;
      this.transition({
         from: n.hiddenStyle,
         to: n.visibleStyle,
         isCleaning: !0,
         onTransitionEnd: t
      })
   }, i.onRevealTransitionEnd = function () {
      this.isHidden || this.emitEvent("reveal")
   }, i.getHideRevealTransitionEndProperty = function (n) {
      var t = this.layout.options[n],
         i;
      if (t.opacity) return "opacity";
      for (i in t) return i
   }, i.hide = function () {
      this.isHidden = !0;
      this.css({
         display: ""
      });
      var n = this.layout.options,
         t = {},
         i = this.getHideRevealTransitionEndProperty("hiddenStyle");
      t[i] = this.onHideTransitionEnd;
      this.transition({
         from: n.visibleStyle,
         to: n.hiddenStyle,
         isCleaning: !0,
         onTransitionEnd: t
      })
   }, i.onHideTransitionEnd = function () {
      this.isHidden && (this.css({
         display: "none"
      }), this.emitEvent("hide"))
   }, i.destroy = function () {
      this.css({
         position: "",
         left: "",
         right: "",
         top: "",
         bottom: "",
         transition: "",
         transform: ""
      })
   }, u
}),
function (n, t) {
   "use strict";
   "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, r, u, f) {
      return t(n, i, r, u, f)
   }) : "object" == typeof module && module.exports ? module.exports = t(n, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : n.Outlayer = t(n, n.EvEmitter, n.getSize, n.fizzyUIUtils, n.Outlayer.Item)
}(window, function (n, t, i, r, u) {
   "use strict";

   function e(n, t) {
      var i = r.getQueryElement(n),
         u, f;
      if (!i) return void(c && c.error("Bad element for " + this.constructor.namespace + ": " + (i || n)));
      this.element = i;
      o && (this.$element = o(this.element));
      this.options = r.extend({}, this.constructor.defaults);
      this.option(t);
      u = ++y;
      this.element.outlayerGUID = u;
      s[u] = this;
      this._create();
      f = this._getOption("initLayout");
      f && this.layout()
   }

   function h(n) {
      function t() {
         n.apply(this, arguments)
      }
      return t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t
   }

   function v(n) {
      var r;
      if ("number" == typeof n) return n;
      var t = n.match(/(^\d*\.?\d*)(\w*)/),
         i = t && t[1],
         u = t && t[2];
      return i.length ? (i = parseFloat(i), r = a[u] || 1, i * r) : 0
   }
   var c = n.console,
      o = n.jQuery,
      l = function () {},
      y = 0,
      s = {},
      f, a;
   return e.namespace = "outlayer", e.Item = u, e.defaults = {
      containerStyle: {
         position: "relative"
      },
      initLayout: !0,
      originLeft: !0,
      originTop: !0,
      resize: !0,
      resizeContainer: !0,
      transitionDuration: "0.4s",
      hiddenStyle: {
         opacity: 0,
         transform: "scale(0.001)"
      },
      visibleStyle: {
         opacity: 1,
         transform: "scale(1)"
      }
   }, f = e.prototype, r.extend(f, t.prototype), f.option = function (n) {
      r.extend(this.options, n)
   }, f._getOption = function (n) {
      var t = this.constructor.compatOptions[n];
      return t && void 0 !== this.options[t] ? this.options[t] : this.options[n]
   }, e.compatOptions = {
      initLayout: "isInitLayout",
      horizontal: "isHorizontal",
      layoutInstant: "isLayoutInstant",
      originLeft: "isOriginLeft",
      originTop: "isOriginTop",
      resize: "isResizeBound",
      resizeContainer: "isResizingContainer"
   }, f._create = function () {
      this.reloadItems();
      this.stamps = [];
      this.stamp(this.options.stamp);
      r.extend(this.element.style, this.options.containerStyle);
      var n = this._getOption("resize");
      n && this.bindResize()
   }, f.reloadItems = function () {
      this.items = this._itemize(this.element.children)
   }, f._itemize = function (n) {
      for (var i, r, u = this._filterFindItemElements(n), e = this.constructor.Item, f = [], t = 0; t < u.length; t++) i = u[t], r = new e(i, this), f.push(r);
      return f
   }, f._filterFindItemElements = function (n) {
      return r.filterFindElements(n, this.options.itemSelector)
   }, f.getItemElements = function () {
      return this.items.map(function (n) {
         return n.element
      })
   }, f.layout = function () {
      this._resetLayout();
      this._manageStamps();
      var n = this._getOption("layoutInstant"),
         t = void 0 !== n ? n : !this._isLayoutInited;
      this.layoutItems(this.items, t);
      this._isLayoutInited = !0
   }, f._init = f.layout, f._resetLayout = function () {
      this.getSize()
   }, f.getSize = function () {
      this.size = i(this.element)
   }, f._getMeasurement = function (n, t) {
      var u, r = this.options[n];
      r ? ("string" == typeof r ? u = this.element.querySelector(r) : r instanceof HTMLElement && (u = r), this[n] = u ? i(u)[t] : r) : this[n] = 0
   }, f.layoutItems = function (n, t) {
      n = this._getItemsForLayout(n);
      this._layoutItems(n, t);
      this._postLayout()
   }, f._getItemsForLayout = function (n) {
      return n.filter(function (n) {
         return !n.isIgnored
      })
   }, f._layoutItems = function (n, t) {
      if (this._emitCompleteOnItems("layout", n), n && n.length) {
         var i = [];
         n.forEach(function (n) {
            var r = this._getItemLayoutPosition(n);
            r.item = n;
            r.isInstant = t || n.isLayoutInstant;
            i.push(r)
         }, this);
         this._processLayoutQueue(i)
      }
   }, f._getItemLayoutPosition = function () {
      return {
         x: 0,
         y: 0
      }
   }, f._processLayoutQueue = function (n) {
      this.updateStagger();
      n.forEach(function (n, t) {
         this._positionItem(n.item, n.x, n.y, n.isInstant, t)
      }, this)
   }, f.updateStagger = function () {
      var n = this.options.stagger;
      return null === n || void 0 === n ? void(this.stagger = 0) : (this.stagger = v(n), this.stagger)
   }, f._positionItem = function (n, t, i, r, u) {
      r ? n.goTo(t, i) : (n.stagger(u * this.stagger), n.moveTo(t, i))
   }, f._postLayout = function () {
      this.resizeContainer()
   }, f.resizeContainer = function () {
      var t = this._getOption("resizeContainer"),
         n;
      t && (n = this._getContainerSize(), n && (this._setContainerMeasure(n.width, !0), this._setContainerMeasure(n.height, !1)))
   }, f._getContainerSize = l, f._setContainerMeasure = function (n, t) {
      if (void 0 !== n) {
         var i = this.size;
         i.isBorderBox && (n += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth);
         n = Math.max(n, 0);
         this.element.style[t ? "width" : "height"] = n + "px"
      }
   }, f._emitCompleteOnItems = function (n, t) {
      function r() {
         e.dispatchEvent(n + "Complete", null, [t])
      }

      function f() {
         i++;
         i == u && r()
      }
      var e = this,
         u = t.length,
         i;
      if (!t || !u) return void r();
      i = 0;
      t.forEach(function (t) {
         t.once(n, f)
      })
   }, f.dispatchEvent = function (n, t, i) {
      var u = t ? [t].concat(i) : i,
         r;
      (this.emitEvent(n, u), o) && ((this.$element = this.$element || o(this.element), t) ? (r = o.Event(t), r.type = n, this.$element.trigger(r, i)) : this.$element.trigger(n, i))
   }, f.ignore = function (n) {
      var t = this.getItem(n);
      t && (t.isIgnored = !0)
   }, f.unignore = function (n) {
      var t = this.getItem(n);
      t && delete t.isIgnored
   }, f.stamp = function (n) {
      n = this._find(n);
      n && (this.stamps = this.stamps.concat(n), n.forEach(this.ignore, this))
   }, f.unstamp = function (n) {
      n = this._find(n);
      n && n.forEach(function (n) {
         r.removeFrom(this.stamps, n);
         this.unignore(n)
      }, this)
   }, f._find = function (n) {
      if (n) return "string" == typeof n && (n = this.element.querySelectorAll(n)), n = r.makeArray(n)
   }, f._manageStamps = function () {
      this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
   }, f._getBoundingRect = function () {
      var t = this.element.getBoundingClientRect(),
         n = this.size;
      this._boundingRect = {
         left: t.left + n.paddingLeft + n.borderLeftWidth,
         top: t.top + n.paddingTop + n.borderTopWidth,
         right: t.right - (n.paddingRight + n.borderRightWidth),
         bottom: t.bottom - (n.paddingBottom + n.borderBottomWidth)
      }
   }, f._manageStamp = l, f._getElementOffset = function (n) {
      var t = n.getBoundingClientRect(),
         r = this._boundingRect,
         u = i(n);
      return {
         left: t.left - r.left - u.marginLeft,
         top: t.top - r.top - u.marginTop,
         right: r.right - t.right - u.marginRight,
         bottom: r.bottom - t.bottom - u.marginBottom
      }
   }, f.handleEvent = r.handleEvent, f.bindResize = function () {
      n.addEventListener("resize", this);
      this.isResizeBound = !0
   }, f.unbindResize = function () {
      n.removeEventListener("resize", this);
      this.isResizeBound = !1
   }, f.onresize = function () {
      this.resize()
   }, r.debounceMethod(e, "onresize", 100), f.resize = function () {
      this.isResizeBound && this.needsResizeLayout() && this.layout()
   }, f.needsResizeLayout = function () {
      var n = i(this.element),
         t = this.size && n;
      return t && n.innerWidth !== this.size.innerWidth
   }, f.addItems = function (n) {
      var t = this._itemize(n);
      return t.length && (this.items = this.items.concat(t)), t
   }, f.appended = function (n) {
      var t = this.addItems(n);
      t.length && (this.layoutItems(t, !0), this.reveal(t))
   }, f.prepended = function (n) {
      var t = this._itemize(n),
         i;
      t.length && (i = this.items.slice(0), this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i))
   }, f.reveal = function (n) {
      if (this._emitCompleteOnItems("reveal", n), n && n.length) {
         var t = this.updateStagger();
         n.forEach(function (n, i) {
            n.stagger(i * t);
            n.reveal()
         })
      }
   }, f.hide = function (n) {
      if (this._emitCompleteOnItems("hide", n), n && n.length) {
         var t = this.updateStagger();
         n.forEach(function (n, i) {
            n.stagger(i * t);
            n.hide()
         })
      }
   }, f.revealItemElements = function (n) {
      var t = this.getItems(n);
      this.reveal(t)
   }, f.hideItemElements = function (n) {
      var t = this.getItems(n);
      this.hide(t)
   }, f.getItem = function (n) {
      for (var t, i = 0; i < this.items.length; i++)
         if (t = this.items[i], t.element == n) return t
   }, f.getItems = function (n) {
      n = r.makeArray(n);
      var t = [];
      return n.forEach(function (n) {
         var i = this.getItem(n);
         i && t.push(i)
      }, this), t
   }, f.remove = function (n) {
      var t = this.getItems(n);
      this._emitCompleteOnItems("remove", t);
      t && t.length && t.forEach(function (n) {
         n.remove();
         r.removeFrom(this.items, n)
      }, this)
   }, f.destroy = function () {
      var n = this.element.style,
         t;
      n.height = "";
      n.position = "";
      n.width = "";
      this.items.forEach(function (n) {
         n.destroy()
      });
      this.unbindResize();
      t = this.element.outlayerGUID;
      delete s[t];
      delete this.element.outlayerGUID;
      o && o.removeData(this.element, this.constructor.namespace)
   }, e.data = function (n) {
      n = r.getQueryElement(n);
      var t = n && n.outlayerGUID;
      return t && s[t]
   }, e.create = function (n, t) {
      var i = h(e);
      return i.defaults = r.extend({}, e.defaults), r.extend(i.defaults, t), i.compatOptions = r.extend({}, e.compatOptions), i.namespace = n, i.data = e.data, i.Item = h(u), r.htmlInit(i, n), o && o.bridget && o.bridget(n, i), i
   }, a = {
      ms: 1,
      s: 1e3
   }, e.Item = u, e
}),
function (n, t) {
   "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : n.Masonry = t(n.Outlayer, n.getSize)
}(window, function (n, t) {
   var r = n.create("masonry"),
      i;
   return r.compatOptions.fitWidth = "isFitWidth", i = r.prototype, i._resetLayout = function () {
      this.getSize();
      this._getMeasurement("columnWidth", "outerWidth");
      this._getMeasurement("gutter", "outerWidth");
      this.measureColumns();
      this.colYs = [];
      for (var n = 0; n < this.cols; n++) this.colYs.push(0);
      this.maxY = 0;
      this.horizontalColIndex = 0
   }, i.measureColumns = function () {
      var n, i;
      (this.getContainerWidth(), this.columnWidth) || (n = this.items[0], i = n && n.element, this.columnWidth = i && t(i).outerWidth || this.containerWidth);
      var r = this.columnWidth += this.gutter,
         f = this.containerWidth + this.gutter,
         u = f / r,
         e = r - f % r,
         o = e && 1 > e ? "round" : "floor";
      u = Math[o](u);
      this.cols = Math.max(u, 1)
   }, i.getContainerWidth = function () {
      var i = this._getOption("fitWidth"),
         r = i ? this.element.parentNode : this.element,
         n = t(r);
      this.containerWidth = n && n.innerWidth
   }, i._getItemLayoutPosition = function (n) {
      n.getSize();
      var u = n.size.outerWidth % this.columnWidth,
         f = u && 1 > u ? "round" : "ceil",
         i = Math[f](n.size.outerWidth / this.columnWidth);
      i = Math.min(i, this.cols);
      for (var e = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", t = this[e](i, n), o = {
            x: this.columnWidth * t.col,
            y: t.y
         }, s = t.y + n.size.outerHeight, h = i + t.col, r = t.col; h > r; r++) this.colYs[r] = s;
      return o
   }, i._getTopColPosition = function (n) {
      var t = this._getTopColGroup(n),
         i = Math.min.apply(Math, t);
      return {
         col: t.indexOf(i),
         y: i
      }
   }, i._getTopColGroup = function (n) {
      if (2 > n) return this.colYs;
      for (var i = [], r = this.cols + 1 - n, t = 0; r > t; t++) i[t] = this._getColGroupY(t, n);
      return i
   }, i._getColGroupY = function (n, t) {
      if (2 > t) return this.colYs[n];
      var i = this.colYs.slice(n, n + t);
      return Math.max.apply(Math, i)
   }, i._getHorizontalColPosition = function (n, t) {
      var i = this.horizontalColIndex % this.cols,
         u = n > 1 && i + n > this.cols,
         r;
      return i = u ? 0 : i, r = t.size.outerWidth && t.size.outerHeight, this.horizontalColIndex = r ? i + n : this.horizontalColIndex, {
         col: i,
         y: this._getColGroupY(i, n)
      }
   }, i._manageStamp = function (n) {
      var e = t(n),
         r = this._getElementOffset(n),
         h = this._getOption("originLeft"),
         o = h ? r.left : r.right,
         s = o + e.outerWidth,
         f = Math.floor(o / this.columnWidth),
         i;
      f = Math.max(0, f);
      i = Math.floor(s / this.columnWidth);
      i -= s % this.columnWidth ? 0 : 1;
      i = Math.min(this.cols - 1, i);
      for (var c = this._getOption("originTop"), l = (c ? r.top : r.bottom) + e.outerHeight, u = f; i >= u; u++) this.colYs[u] = Math.max(l, this.colYs[u])
   }, i._getContainerSize = function () {
      this.maxY = Math.max.apply(Math, this.colYs);
      var n = {
         height: this.maxY
      };
      return this._getOption("fitWidth") && (n.width = this._getContainerFitWidth()), n
   }, i._getContainerFitWidth = function () {
      for (var n = 0, t = this.cols; --t && 0 === this.colYs[t];) n++;
      return (this.cols - n) * this.columnWidth - this.gutter
   }, i.needsResizeLayout = function () {
      var n = this.containerWidth;
      return this.getContainerWidth(), n != this.containerWidth
   }, r
});
$(document).ready(function () {
      var n, t;
      setTimeout(function () {
         $(".pageloader").fadeOut("slow")
      }, 500);
      self !== top ? $("body").addClass("iframe") : $("body").removeClass("iframe");
      n = window.location;
      $(".header .navbar-nav a").removeClass("active").parent().removeClass("active").closest(".nav-item").removeClass("active");
      t = $(".header .navbar-nav a").filter(function () {
         return this.href == n
      }).addClass("active").parent().addClass("active").closest(".nav-item").addClass("active")
   }),
   function (n) {
      n.fn.visible = function (t) {
         var r = n(this),
            u = n(window),
            f = u.scrollTop(),
            o = f + u.height(),
            i = r.offset().top,
            e = i + r.height(),
            s = t === !0 ? e : i,
            h = t === !0 ? i : e;
         return h <= o && s >= f
      }
   }(jQuery);
$(window).on("load", function () {
   $(".header").hasClass("fixed-top") === !0 ? $(".main-container > div:first-child").hasClass("banner-hero") === !0 ? $(".main-container").css("padding-top", "0") : setTimeout(function () {
      $(".main-container").css("padding-top", $(".header").outerHeight())
   }, 500) : $(".main-container > div:first-child").hasClass("banner-hero") === !0 ? $(".main-container").css("padding-top", "0") : $(".main-container").css("padding-top", "15px");
   $(".footer-tabs").length > 0 ? ($(".main-container").css({
      "padding-bottom": $(".footer-tabs").outerHeight()
   }), $(".footer").css({
      "padding-bottom": $(".footer-tabs").outerHeight() + 25
   })) : $(".footer").css({
      "padding-bottom": 15
   });
   $(this).scrollTop() >= 30 ? ($(".header").addClass("active"), $(".footer-spaces").addClass("active")) : ($(".header").removeClass("active"), $(".footer-spaces").removeClass("active"));
   $(".main-container").on("click", function () {
      $(".header .navbar-collapse.collapse").hasClass("show") === !0 && $(".header .navbar-collapse.collapse").removeClass("show");
      $(".sidebar-right").hasClass("active") === !0 && ($(".sidebar-right").removeClass("active"), $(".colorsettings").removeClass("active"));
      $(".sidebar-right-feedback").hasClass("active") === !0 && ($(".sidebar-right-feedback").removeClass("active"), $(".feedback").removeClass("active"));
      $(".search").hasClass("active") === !0 && $(".search").slideUp().removeClass("active");
      $("body").hasClass("sidemenu-open") === !0 && $("body").removeClass("sidemenu-open");
      $("body").hasClass("reveal-sidebar") === !0 && $("body").removeClass("reveal-sidebar")
   });
   $(".header, .footer").on("click", function () {
      $("body").hasClass("sidemenu-open") === !0 && $("body").removeClass("sidemenu-open");
      $("body").hasClass("reveal-sidebar") === !0 && $("body").removeClass("reveal-sidebar")
   });
   $(".search-btn").on("click", function () {
      $(".search").slideDown().addClass("active")
   });
   $(".background").each(function () {
      var n = $(this).find("img");
      $(this).css("background-image", "url(" + n.attr("src") + ")");
      n.hide()
   });
   $(".device-selection button.btn").on("click", function () {
      if ($(this).hasClass("active") !== !0) {
         var n = $(this).parent().find(".btn.active").attr("data-class"),
            t = $(this).attr("data-class");
         $(this).parent().find(".btn").removeClass("active");
         $(this).addClass("active").closest(".demo-view").find(".iframeselements").addClass(t).removeClass(n)
      }
   });
   if ($(".header .navbar").hasClass("navbar-expand-all") === !0) $(".main-container").on("click", function () {
      $(".header .navbar .navbar-collapse").removeClass("show")
   });
   $(".login-row").css("min-height", $(window).height() - 80);
   $(".hover-text span").on("mouseenter", function () {
      $(".demolive-wraper").slideDown();
      $(".close-demolive-wrapper").fadeIn();
      $(".fullscreen .demolive-wraper").on("mouseleave", function () {
         var n = $(this);
         n.closest(".fullscreen").hasClass("active") === !0 && (n.slideUp(), n.closest(".fullscreen").find(".close-demolive-wrapper").fadeOut())
      })
   });
   $(".fullscreen.active, .close-demolive-wrapper").on("click", function () {
      $(".demolive-wraper").slideUp();
      $(".close-demolive-wrapper").fadeOut()
   });
   $(".fullscreen-btn").on("click", function () {
      var n = $(this).closest(".fullscreen");
      n.toggleClass("active");
      $("body").toggleClass("overflow-hidden");
      $(".fullscreen").hasClass("active") !== !0 && $(".demolive-wraper").slideDown();
      document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.msRequestFullscreen ? document.documentElement.msRequestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
   });
   $(window).scroll(function () {
      $(this).scrollTop() > 200 ? ($(".scrollup").show(), setTimeout(function () {
         $(".scrollup").addClass("active")
      }, 500)) : ($(".scrollup").hide(), setTimeout(function () {
         $(".scrollup").removeClass("active")
      }, 500))
   });
   $(".scrollup").click(function () {
      return $("html, body").animate({
         scrollTop: 0
      }, 600), !1
   });
   $(window).scrollTop() + $(window).height() > $(document).height() - 100 ? $(".scrollup").addClass("atbottom") : $(".scrollup").removeClass("atbottom");
   $(".colorsettings").on("click", function () {
      $(this).toggleClass("active");
      $(".sidebar-right").toggleClass("active")
   });
   $(".feedback").on("click", function () {
      $(this).toggleClass("active");
      $(".sidebar-right-feedback").toggleClass("active")
   });
   $(".loading-btn ").on("click", function () {
      var n = $(this);
      n.addClass("active");
      setTimeout(function () {
         n.removeClass("active").blur()
      }, 3e3)
   });
   $(document).on("click", ".smoothscroll", function (n) {
      n.preventDefault();
      $("html, body").animate({
         scrollTop: $($.attr(this, "href")).offset().top
      }, 750)
   });
   $(".menu-btn").on("click", function (n) {
      n.stopPropagation();
      $("body").hasClass("sidemenu-open") == !0 ? ($("body").removeClass("sidemenu-open"), $("body").hasClass("reveal-sidebar") === !0 && $("body").removeClass("reveal-sidebar")) : ($("body").addClass("sidemenu-open"), $(".sidebar").hasClass("reveal-sidebar") === !0 && $("body").addClass("reveal-sidebar"))
   })
});
$(window).on("scroll", function () {
   $(this).scrollTop() >= 30 && $(".header").hasClass("fixed-top") === !0 ? ($(".header").addClass("active"), $(".footer-spaces").addClass("active")) : ($(".header").removeClass("active"), $(".footer-spaces").removeClass("active"));
   $(window).scrollTop() + $(window).height() > $(document).height() - 100 ? $(".scrollup").addClass("atbottom") : $(".scrollup").removeClass("atbottom")
});
$(window).on("resize", function () {
   $(".login-row").css("min-height", $(window).height() - 80)
});
$(document).ready(function () {
   if ($.type($.cookie("stylesheet")) != "undefined" && $.cookie("stylesheet") != "") {
      var n = $("#style");
      $("head").append('<link href="assets/css/style-' + $.cookie("stylesheet") + '.css" rel="stylesheet"  id="style">');
      setTimeout(function () {
         n.remove()
      }, 1e3);
      $(".colorselect").each(function () {
         var n = $(this).find('input[type="radio"]');
         n.next("label").attr("data-title") === $.cookie("stylesheet") && n.prop("checked", !0).parent().addClass("active")
      })
   } else $('.colorselect > input[type="radio"]').prop("checked", !1), $.cookie("stylesheet", "", {
      expires: 1
   });
   $('.colorselect > input[type="radio"]').on("click", function () {
      $(".colorselect").removeClass("active");
      var n = $(this).next().attr("data-title"),
         t = $("#style");
      $(this).is(":checked") ? ($.cookie("stylesheet", n, {
         expires: 1
      }), $("head").append('<link href="assets/css/style-' + n + '.css" rel="stylesheet"  id="style">'), setTimeout(function () {
         t.remove()
      }, 1e3), $(this).parent().addClass("active")) : $.cookie("stylesheet", "", {
         expires: 1
      })
   });
   $.type($.cookie("roundlayout")) != "undefined" && $.cookie("roundlayout") != "" && ($("#roundlayout").prop("checked", !0), $("#roundlayout").parent().addClass("active"), $("body").addClass($.cookie("roundlayout")));
   $("#roundlayout").on("click", function () {
      $(this).parent().addClass("active");
      $(this).is(":checked") ? ($.cookie("roundlayout", "ui-rounded", {
         expires: 1
      }), $("body").addClass("ui-rounded"), $("#roundlayout").parent().addClass("active")) : ($.removeCookie("roundlayout", ""), $("body").removeClass("ui-rounded"), $("#roundlayout").parent().removeClass("active"))
   });
   $.type($.cookie("rtllayout")) != "undefined" && $.cookie("rtllayout") != "" ? ($("#rtllayout").prop("checked", !0), $("#rtllayout").parent().addClass("active"), $("body").addClass($.cookie("rtllayout"))) : ($("#rtllayout").parent().removeClass("active"), $("#rtllayout").prop("checked", !1), $.removeCookie("rtllayout", ""));
   $("#rtllayout").on("click", function () {
      $(this).parent().addClass("active");
      $(this).is(":checked") ? ($.cookie("rtllayout", "rtl", {
         expires: 1
      }), $("body").addClass("rtl"), $("#rtllayout").parent().addClass("active")) : ($.removeCookie("rtllayout", ""), $("body").removeClass("rtl"), $("#rtllayout").parent().removeClass("active"))
   })
});
! function (n, t) {
   "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Sweetalert2 = t()
}(this, function () {
   "use strict";

   function c(n) {
      return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
         return typeof n
      } : function (n) {
         return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
      })(n)
   }

   function ct(n, t) {
      if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
   }

   function ei(n, t) {
      for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
   }

   function oi(n, t, i) {
      return t && ei(n.prototype, t), i && ei(n, i), n
   }

   function a() {
      return (a = Object.assign || function (n) {
         for (var t, i, r = 1; r < arguments.length; r++) {
            t = arguments[r];
            for (i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
         }
         return n
      }).apply(this, arguments)
   }

   function si(n, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      n.prototype = Object.create(t && t.prototype, {
         constructor: {
            value: n,
            writable: !0,
            configurable: !0
         }
      });
      t && lt(n, t)
   }

   function d(n) {
      return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (n) {
         return n.__proto__ || Object.getPrototypeOf(n)
      })(n)
   }

   function lt(n, t) {
      return (lt = Object.setPrototypeOf || function (n, t) {
         return n.__proto__ = t, n
      })(n, t)
   }

   function at() {
      return (at = function () {
         if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
         if ("function" == typeof Proxy) return !0;
         try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
         } catch (n) {
            return !1
         }
      }() ? Reflect.construct : function (n, t, i) {
         var r = [null],
            u;
         return r.push.apply(r, t), u = new(Function.bind.apply(n, r)), i && lt(u, i.prototype), u
      }).apply(null, arguments)
   }

   function hi(n, t) {
      return !t || "object" != typeof t && "function" != typeof t ? function (n) {
         if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
         return n
      }(n) : t
   }

   function vt(n, t, i) {
      return (vt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (n, t, i) {
         var u = function (n, t) {
               for (; !Object.prototype.hasOwnProperty.call(n, t) && null !== (n = d(n)););
               return n
            }(n, t),
            r;
         if (u) return r = Object.getOwnPropertyDescriptor(u, t), r.get ? r.get.call(i) : r.value
      })(n, t, i || n)
   }

   function ci(n) {
      var t = function n() {
         for (var r = arguments.length, i = new Array(r), t = 0; t < r; t++) i[t] = arguments[t];
         if (!(this instanceof n)) return at(n, i);
         Object.getPrototypeOf(n).apply(this, i)
      };
      return t.prototype = a(Object.create(n.prototype), {
         constructor: t
      }), "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n, t
   }

   function li() {
      var i = u.innerParams.get(this),
         t = u.domCache.get(this);
      i.showConfirmButton || (f(t.confirmButton), i.showCancelButton || f(t.actions));
      l([t.popup, t.actions], n.loading);
      t.popup.removeAttribute("aria-busy");
      t.popup.removeAttribute("data-loading");
      t.confirmButton.disabled = !1;
      t.cancelButton.disabled = !1
   }

   function ai(t) {
      var e = u.domCache.get(this),
         o, f;
      e.validationMessage.innerHTML = t;
      o = window.getComputedStyle(e.popup);
      e.validationMessage.style.marginLeft = "-".concat(o.getPropertyValue("padding-left"));
      e.validationMessage.style.marginRight = "-".concat(o.getPropertyValue("padding-right"));
      r(e.validationMessage);
      f = this.getInput();
      f && (f.setAttribute("aria-invalid", !0), f.setAttribute("aria-describedBy", n["validation-message"]), ki(f), i(f, n.inputerror))
   }

   function vi() {
      var i = u.domCache.get(this),
         t;
      i.validationMessage && f(i.validationMessage);
      t = this.getInput();
      t && (t.removeAttribute("aria-invalid"), t.removeAttribute("aria-describedBy"), l(t, n.inputerror))
   }

   function v() {
      var t, i;
      if ("undefined" != typeof window) {
         "undefined" == typeof Promise && b("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");
         ri = this;
         for (var r = arguments.length, f = new Array(r), n = 0; n < r; n++) f[n] = arguments[n];
         t = Object.freeze(this.constructor.argsToParams(f));
         Object.defineProperties(this, {
            params: {
               value: t,
               writable: !1,
               enumerable: !0
            }
         });
         i = this._main(this.params);
         u.promise.set(this, i)
      }
   }
   var yi = "SweetAlert2:",
      ut = function (n) {
         return Array.prototype.slice.call(n)
      },
      y = function (n) {
         console.warn("".concat(yi, " ").concat(n))
      },
      b = function (n) {
         console.error("".concat(yi, " ").concat(n))
      },
      pi = [],
      g = function (n) {
         -1 === pi.indexOf(n) && (pi.push(n), y(n))
      },
      yt = function (n) {
         return "function" == typeof n ? n() : n
      },
      pt = function (n) {
         return n && Promise.resolve(n) === n
      },
      wi = Object.freeze({
         cancel: "cancel",
         backdrop: "overlay",
         close: "close",
         esc: "esc",
         timer: "timer"
      }),
      bi = function (n) {
         var t = {};
         for (var i in n) t[n[i]] = "swal2-" + n[i];
         return t
      },
      n = bi(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "toast-column", "fade", "show", "hide", "noanimation", "close", "title", "header", "content", "actions", "confirm", "cancel", "footer", "icon", "icon-text", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progresssteps", "activeprogressstep", "progresscircle", "progressline", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl"]),
      k = bi(["success", "warning", "info", "question", "error"]),
      nt = {
         previousBodyPadding: null
      },
      tt = function (n, t) {
         return n.classList.contains(t)
      },
      ki = function (n) {
         if (n.focus(), "file" !== n.type) {
            var t = n.value;
            n.value = "";
            n.value = t
         }
      },
      di = function (n, t, i) {
         n && t && ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)), t.forEach(function (t) {
            n.forEach ? n.forEach(function (n) {
               i ? n.classList.add(t) : n.classList.remove(t)
            }) : i ? n.classList.add(t) : n.classList.remove(t)
         }))
      },
      i = function (n, t) {
         di(n, t, !0)
      },
      l = function (n, t) {
         di(n, t, !1)
      },
      e = function (n, t) {
         for (var i = 0; i < n.childNodes.length; i++)
            if (tt(n.childNodes[i], t)) return n.childNodes[i]
      },
      r = function (t) {
         t.style.opacity = "";
         t.style.display = t.id === n.content ? "block" : "flex"
      },
      f = function (n) {
         n.style.opacity = "";
         n.style.display = "none"
      },
      it = function (n) {
         return n && (n.offsetWidth || n.offsetHeight || n.getClientRects().length)
      },
      s = function () {
         return document.body.querySelector("." + n.container)
      },
      h = function (n) {
         var t = s();
         return t ? t.querySelector("." + n) : null
      },
      o = function () {
         return h(n.popup)
      },
      gi = function () {
         var t = o();
         return ut(t.querySelectorAll("." + n.icon))
      },
      nr = function () {
         return h(n.title)
      },
      ot = function () {
         return h(n.content)
      },
      tr = function () {
         return h(n.image)
      },
      ir = function () {
         return h(n.progresssteps)
      },
      rr = function () {
         return h(n["validation-message"])
      },
      ft = function () {
         return h(n.confirm)
      },
      et = function () {
         return h(n.cancel)
      },
      st = function () {
         return h(n.actions)
      },
      ur = function () {
         return h(n.footer)
      },
      wt = function () {
         return h(n.close)
      },
      bt = function () {
         var n = ut(o().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (n, t) {
               return n = parseInt(n.getAttribute("tabindex")), (t = parseInt(t.getAttribute("tabindex"))) < n ? 1 : n < t ? -1 : 0
            }),
            t = ut(o().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function (n) {
               return "-1" !== n.getAttribute("tabindex")
            });
         return function (n) {
            for (var i = [], t = 0; t < n.length; t++) - 1 === i.indexOf(n[t]) && i.push(n[t]);
            return i
         }(n.concat(t)).filter(function (n) {
            return it(n)
         })
      },
      fr = function () {
         return !kt() && !document.body.classList.contains(n["no-backdrop"])
      },
      kt = function () {
         return document.body.classList.contains(n["toast-shown"])
      },
      er = function () {
         return "undefined" == typeof window || "undefined" == typeof document
      },
      dr = '\n <div aria-labelledby="'.concat(n.title, '" aria-describedby="').concat(n.content, '" class="').concat(n.popup, '" tabindex="-1">\n   <div class="').concat(n.header, '">\n     <ul class="').concat(n.progresssteps, '"><\/ul>\n     <div class="').concat(n.icon, " ").concat(k.error, '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"><\/span><span class="swal2-x-mark-line-right"><\/span><\/span>\n     <\/div>\n     <div class="').concat(n.icon, " ").concat(k.question, '">\n       <span class="').concat(n["icon-text"], '">?<\/span>\n      <\/div>\n     <div class="').concat(n.icon, " ").concat(k.warning, '">\n       <span class="').concat(n["icon-text"], '">!<\/span>\n      <\/div>\n     <div class="').concat(n.icon, " ").concat(k.info, '">\n       <span class="').concat(n["icon-text"], '">i<\/span>\n      <\/div>\n     <div class="').concat(n.icon, " ").concat(k.success, '">\n       <div class="swal2-success-circular-line-left"><\/div>\n       <span class="swal2-success-line-tip"><\/span> <span class="swal2-success-line-long"><\/span>\n       <div class="swal2-success-ring"><\/div> <div class="swal2-success-fix"><\/div>\n       <div class="swal2-success-circular-line-right"><\/div>\n     <\/div>\n     <img class="').concat(n.image, '" />\n     <h2 class="').concat(n.title, '" id="').concat(n.title, '"><\/h2>\n     <button type="button" class="').concat(n.close, '">×<\/button>\n   <\/div>\n   <div class="').concat(n.content, '">\n     <div id="').concat(n.content, '"><\/div>\n     <input class="').concat(n.input, '" />\n     <input type="file" class="').concat(n.file, '" />\n     <div class="').concat(n.range, '">\n       <input type="range" />\n       <output><\/output>\n     <\/div>\n     <select class="').concat(n.select, '"><\/select>\n     <div class="').concat(n.radio, '"><\/div>\n     <label for="').concat(n.checkbox, '" class="').concat(n.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(n.label, '"><\/span>\n     <\/label>\n     <textarea class="').concat(n.textarea, '"><\/textarea>\n     <div class="').concat(n["validation-message"], '" id="').concat(n["validation-message"], '"><\/div>\n   <\/div>\n   <div class="').concat(n.actions, '">\n     <button type="button" class="').concat(n.confirm, '">OK<\/button>\n     <button type="button" class="').concat(n.cancel, '">Cancel<\/button>\n   <\/div>\n   <div class="').concat(n.footer, '">\n   <\/div>\n <\/div>\n').replace(/(^|\n)\s*/g, ""),
      or = function (t) {
         var a = s(),
            h, v, r;
         if (a && (a.parentNode.removeChild(a), l([document.documentElement, document.body], [n["no-backdrop"], n["toast-shown"], n["has-column"]])), !er()) {
            h = document.createElement("div");
            h.className = n.container;
            h.innerHTML = dr;
            v = "string" == typeof t.target ? document.querySelector(t.target) : t.target;
            v.appendChild(h);
            var y, c = o(),
               u = ot(),
               p = e(u, n.input),
               k = e(u, n.file),
               f = u.querySelector(".".concat(n.range, " input")),
               d = u.querySelector(".".concat(n.range, " output")),
               g = e(u, n.select),
               nt = u.querySelector(".".concat(n.checkbox, " input")),
               tt = e(u, n.textarea);
            return c.setAttribute("role", t.toast ? "alert" : "dialog"), c.setAttribute("aria-live", t.toast ? "polite" : "assertive"), t.toast || c.setAttribute("aria-modal", "true"), "rtl" === window.getComputedStyle(v).direction && i(s(), n.rtl), r = function (n) {
               w.isVisible() && y !== n.target.value && w.resetValidationMessage();
               y = n.target.value
            }, p.oninput = r, k.onchange = r, g.onchange = r, nt.onchange = r, tt.oninput = r, f.oninput = function (n) {
               r(n);
               d.value = f.value
            }, f.onchange = function (n) {
               r(n);
               f.nextSibling.value = f.value
            }, c
         }
         b("SweetAlert2 requires document to initialize")
      },
      dt = function (n, t) {
         if (!n) return f(t);
         if (n instanceof HTMLElement) t.appendChild(n);
         else if ("object" === c(n))
            if (t.innerHTML = "", 0 in n)
               for (var i = 0; i in n; i++) t.appendChild(n[i].cloneNode(!0));
            else t.appendChild(n.cloneNode(!0));
         else n && (t.innerHTML = n);
         r(t)
      },
      rt = function () {
         var i, n, t;
         if (er()) return !1;
         i = document.createElement("div");
         n = {
            WebkitAnimation: "webkitAnimationEnd",
            OAnimation: "oAnimationEnd oanimationend",
            animation: "animationend"
         };
         for (t in n)
            if (n.hasOwnProperty(t) && void 0 !== i.style[t]) return n[t];
         return !1
      }(),
      gr = function (t) {
         var s = st(),
            u = ft(),
            e = et(),
            o;
         (t.showConfirmButton || t.showCancelButton ? r(s) : f(s), t.showCancelButton ? e.style.display = "inline-block" : f(e), t.showConfirmButton ? u.style.removeProperty("display") : f(u), u.innerHTML = t.confirmButtonText, e.innerHTML = t.cancelButtonText, u.setAttribute("aria-label", t.confirmButtonAriaLabel), e.setAttribute("aria-label", t.cancelButtonAriaLabel), u.className = n.confirm, i(u, t.confirmButtonClass), e.className = n.cancel, i(e, t.cancelButtonClass), t.buttonsStyling) ? (i([u, e], n.styled), t.confirmButtonColor && (u.style.backgroundColor = t.confirmButtonColor), t.cancelButtonColor && (e.style.backgroundColor = t.cancelButtonColor), o = window.getComputedStyle(u).getPropertyValue("background-color"), u.style.borderLeftColor = o, u.style.borderRightColor = o) : (l([u, e], n.styled), u.style.backgroundColor = u.style.borderLeftColor = u.style.borderRightColor = "", e.style.backgroundColor = e.style.borderLeftColor = e.style.borderRightColor = "")
      },
      nu = function (t) {
         var i = ot().querySelector("#" + n.content);
         t.html ? dt(t.html, i) : t.text ? (i.textContent = t.text, r(i)) : f(i)
      },
      tu = function (t) {
         for (var u, o = gi(), e = 0; e < o.length; e++) f(o[e]);
         t.type && (-1 !== Object.keys(k).indexOf(t.type) ? (u = w.getPopup().querySelector(".".concat(n.icon, ".").concat(k[t.type])), r(u), t.animation && i(u, "swal2-animate-".concat(t.type, "-icon"))) : b('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(t.type, '"')))
      },
      iu = function (t) {
         var u = tr();
         t.imageUrl ? (u.setAttribute("src", t.imageUrl), u.setAttribute("alt", t.imageAlt), r(u), t.imageWidth ? u.setAttribute("width", t.imageWidth) : u.removeAttribute("width"), t.imageHeight ? u.setAttribute("height", t.imageHeight) : u.removeAttribute("height"), u.className = n.image, t.imageClass && i(u, t.imageClass)) : f(u)
      },
      sr = function (t) {
         var u = ir(),
            e = parseInt(null === t.currentProgressStep ? w.getQueueStep() : t.currentProgressStep, 10);
         t.progressSteps && t.progressSteps.length ? (r(u), u.innerHTML = "", e >= t.progressSteps.length && y("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), t.progressSteps.forEach(function (r, f) {
            var o = document.createElement("li"),
               s;
            (i(o, n.progresscircle), o.innerHTML = r, f === e && i(o, n.activeprogressstep), u.appendChild(o), f !== t.progressSteps.length - 1) && (s = document.createElement("li"), i(s, n.progressline), t.progressStepsDistance && (s.style.width = t.progressStepsDistance), u.appendChild(s))
         })) : f(u)
      },
      ru = function (n) {
         var t = nr();
         n.titleText ? t.innerText = n.titleText : n.title && ("string" == typeof n.title && (n.title = n.title.split("\n").join("<br />")), dt(n.title, t))
      },
      uu = function () {
         null === nt.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (nt.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = nt.previousBodyPadding + function () {
            var n, t;
            return "ontouchstart" in window || navigator.msMaxTouchPoints ? 0 : (n = document.createElement("div"), n.style.width = "50px", n.style.height = "50px", n.style.overflow = "scroll", document.body.appendChild(n), t = n.offsetWidth - n.clientWidth, document.body.removeChild(n), t)
         }() + "px")
      },
      hr = function () {
         return !!window.MSInputMethodContext && !!document.documentMode
      },
      gt = function () {
         var n = s(),
            t = o();
         n.style.removeProperty("align-items");
         t.offsetTop < 0 && (n.style.alignItems = "flex-start")
      },
      t = {},
      ht = function (r, u) {
         var e = s(),
            f = o(),
            h;
         f && (null !== r && "function" == typeof r && r(f), l(f, n.show), i(f, n.hide), h = function () {
            kt() ? cr(u) : (new Promise(function (n) {
               var i = window.scrollX,
                  r = window.scrollY;
               t.restoreFocusTimeout = setTimeout(function () {
                  t.previousActiveElement && t.previousActiveElement.focus ? (t.previousActiveElement.focus(), t.previousActiveElement = null) : document.body && document.body.focus();
                  n()
               }, 100);
               void 0 !== i && void 0 !== r && window.scrollTo(i, r)
            }).then(function () {
               return cr(u)
            }), t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
               capture: t.keydownListenerCapture
            }), t.keydownHandlerAdded = !1);
            e.parentNode && e.parentNode.removeChild(e);
            l([document.documentElement, document.body], [n.shown, n["height-auto"], n["no-backdrop"], n["toast-shown"], n["toast-column"]]);
            fr() && (null !== nt.previousBodyPadding && (document.body.style.paddingRight = nt.previousBodyPadding, nt.previousBodyPadding = null), function () {
               if (tt(document.body, n.iosfix)) {
                  var t = parseInt(document.body.style.top, 10);
                  l(document.body, n.iosfix);
                  document.body.style.top = "";
                  document.body.scrollTop = -1 * t
               }
            }(), "undefined" != typeof window && hr() && window.removeEventListener("resize", gt), ut(document.body.children).forEach(function (n) {
               n.hasAttribute("data-previous-aria-hidden") ? (n.setAttribute("aria-hidden", n.getAttribute("data-previous-aria-hidden")), n.removeAttribute("data-previous-aria-hidden")) : n.removeAttribute("aria-hidden")
            }))
         }, rt && !tt(f, n.noanimation) ? f.addEventListener(rt, function r() {
            f.removeEventListener(rt, r);
            tt(f, n.hide) && h()
         }) : h())
      },
      cr = function (n) {
         null !== n && "function" == typeof n && setTimeout(function () {
            n()
         })
      },
      lr = {
         title: "",
         titleText: "",
         text: "",
         html: "",
         footer: "",
         type: null,
         toast: !1,
         customClass: "",
         customContainerClass: "",
         target: "body",
         backdrop: !0,
         animation: !0,
         heightAuto: !0,
         allowOutsideClick: !0,
         allowEscapeKey: !0,
         allowEnterKey: !0,
         stopKeydownPropagation: !0,
         keydownListenerCapture: !1,
         showConfirmButton: !0,
         showCancelButton: !1,
         preConfirm: null,
         confirmButtonText: "OK",
         confirmButtonAriaLabel: "",
         confirmButtonColor: null,
         confirmButtonClass: null,
         cancelButtonText: "Cancel",
         cancelButtonAriaLabel: "",
         cancelButtonColor: null,
         cancelButtonClass: null,
         buttonsStyling: !0,
         reverseButtons: !1,
         focusConfirm: !0,
         focusCancel: !1,
         showCloseButton: !1,
         closeButtonAriaLabel: "Close this dialog",
         showLoaderOnConfirm: !1,
         imageUrl: null,
         imageWidth: null,
         imageHeight: null,
         imageAlt: "",
         imageClass: null,
         timer: null,
         width: null,
         padding: null,
         background: null,
         input: null,
         inputPlaceholder: "",
         inputValue: "",
         inputOptions: {},
         inputAutoTrim: !0,
         inputClass: null,
         inputAttributes: {},
         inputValidator: null,
         validationMessage: null,
         grow: !1,
         position: "center",
         progressSteps: [],
         currentProgressStep: null,
         progressStepsDistance: null,
         onBeforeOpen: null,
         onAfterClose: null,
         onOpen: null,
         onClose: null,
         useRejections: !1,
         expectRejections: !1
      },
      fu = ["useRejections", "expectRejections", "extraParams"],
      eu = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
      ar = function (n) {
         return lr.hasOwnProperty(n) || "extraParams" === n
      },
      vr = function (n) {
         return -1 !== fu.indexOf(n)
      },
      yr = function (n) {
         for (var t in n) ar(t) || y('Unknown parameter "'.concat(t, '"')), n.toast && -1 !== eu.indexOf(t) && y('The parameter "'.concat(t, '" is incompatible with toasts')), vr(t) && g('The parameter "'.concat(t, '" is deprecated and will be removed in the next major release.'))
      },
      pr = '"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.',
      ni = {},
      p = [],
      wr = function () {
         var t = o();
         t || w("");
         t = o();
         var u = st(),
            f = ft(),
            e = et();
         r(u);
         r(f);
         i([t, u], n.loading);
         f.disabled = !0;
         e.disabled = !0;
         t.setAttribute("data-loading", !0);
         t.setAttribute("aria-busy", !0);
         t.focus()
      },
      ou = Object.freeze({
         isValidParameter: ar,
         isDeprecatedParameter: vr,
         argsToParams: function (n) {
            var t = {};
            switch (c(n[0])) {
               case "object":
                  a(t, n[0]);
                  break;
               default:
                  ["title", "html", "type"].forEach(function (i, r) {
                     switch (c(n[r])) {
                        case "string":
                           t[i] = n[r];
                           break;
                        case "undefined":
                           break;
                        default:
                           b("Unexpected type of ".concat(i, '! Expected "string", got ').concat(c(n[r])))
                     }
                  })
            }
            return t
         },
         adaptInputValidator: function (n) {
            return function (t, i) {
               return n.call(this, t, i).then(function () {}, function (n) {
                  return n
               })
            }
         },
         close: ht,
         closePopup: ht,
         closeModal: ht,
         closeToast: ht,
         isVisible: function () {
            return !!o()
         },
         clickConfirm: function () {
            return ft().click()
         },
         clickCancel: function () {
            return et().click()
         },
         getContainer: s,
         getPopup: o,
         getTitle: nr,
         getContent: ot,
         getImage: tr,
         getIcons: gi,
         getCloseButton: wt,
         getButtonsWrapper: function () {
            return g("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"), h(n.actions)
         },
         getActions: st,
         getConfirmButton: ft,
         getCancelButton: et,
         getFooter: ur,
         getFocusableElements: bt,
         getValidationMessage: rr,
         isLoading: function () {
            return o().hasAttribute("data-loading")
         },
         fire: function () {
            for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++) i[n] = arguments[n];
            return at(this, i)
         },
         mixin: function (n) {
            return ci(function (t) {
               function i() {
                  return ct(this, i), hi(this, d(i).apply(this, arguments))
               }
               return si(i, t), oi(i, [{
                  key: "_main",
                  value: function (t) {
                     return vt(d(i.prototype), "_main", this).call(this, a({}, n, t))
                  }
               }]), i
            }(this))
         },
         queue: function (n) {
            var r = this,
               t, i;
            return p = n, t = function () {
               p = [];
               document.body.removeAttribute("data-swal2-queue-step")
            }, i = [], new Promise(function (n) {
               ! function u(f, e) {
                  f < p.length ? (document.body.setAttribute("data-swal2-queue-step", f), r(p[f]).then(function (r) {
                     void 0 !== r.value ? (i.push(r.value), u(f + 1, e)) : (t(), n({
                        dismiss: r.dismiss
                     }))
                  })) : (t(), n({
                     value: i
                  }))
               }(0)
            })
         },
         getQueueStep: function () {
            return document.body.getAttribute("data-swal2-queue-step")
         },
         insertQueueStep: function (n, t) {
            return t && t < p.length ? p.splice(t, 0, n) : p.push(n)
         },
         deleteQueueStep: function (n) {
            void 0 !== p[n] && p.splice(n, 1)
         },
         showLoading: wr,
         enableLoading: wr,
         getTimerLeft: function () {
            return t.timeout && t.timeout.getTimerLeft()
         },
         stopTimer: function () {
            return t.timeout && t.timeout.stop()
         },
         resumeTimer: function () {
            return t.timeout && t.timeout.start()
         },
         toggleTimer: function () {
            var n = t.timeout;
            return n && (n.running ? n.stop() : n.start())
         },
         increaseTimer: function (n) {
            return t.timeout && t.timeout.increase(n)
         },
         isTimerRunning: function () {
            return t.timeout && t.timeout.isRunning()
         }
      }),
      br = "function" == typeof Symbol ? Symbol : function () {
         function n(n) {
            return "__" + n + "_" + Math.floor(1e9 * Math.random()) + "_" + ++t + "__"
         }
         var t = 0;
         return n.iterator = n("Symbol.iterator"), n
      }(),
      ti = "function" == typeof WeakMap ? WeakMap : function (n, t, i) {
         function r() {
            t(this, n, {
               value: br("WeakMap")
            })
         }
         return r.prototype = {
            "delete": function (t) {
               delete t[this[n]]
            },
            get: function (t) {
               return t[this[n]]
            },
            has: function (t) {
               return i.call(t, this[n])
            },
            set: function (i, r) {
               t(i, this[n], {
                  configurable: !0,
                  value: r
               })
            }
         }, r
      }(br("WeakMap"), Object.defineProperty, {}.hasOwnProperty),
      u = {
         promise: new ti,
         innerParams: new ti,
         domCache: new ti
      },
      su = function wi(n, t) {
         ct(this, wi);
         var r, u, i = t;
         this.running = !1;
         this.start = function () {
            return this.running || (this.running = !0, u = new Date, r = setTimeout(n, i)), i
         };
         this.stop = function () {
            return this.running && (this.running = !1, clearTimeout(r), i -= new Date - u), i
         };
         this.increase = function (n) {
            var t = this.running;
            return t && this.stop(), i += n, t && this.start(), i
         };
         this.getTimerLeft = function () {
            return this.running && (this.stop(), this.start()), i
         };
         this.isRunning = function () {
            return this.running
         };
         this.start()
      },
      ii = {
         email: function (n, t) {
            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(n) ? Promise.resolve() : Promise.reject(t && t.validationMessage ? t.validationMessage : "Invalid email address")
         },
         url: function (n, t) {
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(n) ? Promise.resolve() : Promise.reject(t && t.validationMessage ? t.validationMessage : "Invalid URL")
         }
      },
      hu = function (u) {
         var e = s(),
            f = o();
         null !== u.onBeforeOpen && "function" == typeof u.onBeforeOpen && u.onBeforeOpen(f);
         u.animation ? (i(f, n.show), i(e, n.fade), l(f, n.hide)) : l(f, n.fade);
         r(f);
         e.style.overflowY = "hidden";
         rt && !tt(f, n.noanimation) ? f.addEventListener(rt, function u() {
            f.removeEventListener(rt, u);
            e.style.overflowY = "auto"
         }) : e.style.overflowY = "auto";
         i([document.documentElement, document.body, e], n.shown);
         u.heightAuto && u.backdrop && !u.toast && i([document.documentElement, document.body], n["height-auto"]);
         fr() && (uu(), function () {
            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !tt(document.body, n.iosfix)) {
               var t = document.body.scrollTop;
               document.body.style.top = -1 * t + "px";
               i(document.body, n.iosfix)
            }
         }(), "undefined" != typeof window && hr() && (gt(), window.addEventListener("resize", gt)), ut(document.body.children).forEach(function (n) {
            n === s() || function (n, t) {
               if ("function" == typeof n.contains) return n.contains(t)
            }(n, s()) || (n.hasAttribute("aria-hidden") && n.setAttribute("data-previous-aria-hidden", n.getAttribute("aria-hidden")), n.setAttribute("aria-hidden", "true"))
         }), setTimeout(function () {
            e.scrollTop = 0
         }));
         kt() || t.previousActiveElement || (t.previousActiveElement = document.activeElement);
         null !== u.onOpen && "function" == typeof u.onOpen && setTimeout(function () {
            u.onOpen(f)
         })
      },
      ri, kr = Object.freeze({
         hideLoading: li,
         disableLoading: li,
         getInput: function (t) {
            var r = u.innerParams.get(this),
               i = u.domCache.get(this);
            if (!(t = t || r.input)) return null;
            switch (t) {
               case "select":
               case "textarea":
               case "file":
                  return e(i.content, n[t]);
               case "checkbox":
                  return i.popup.querySelector(".".concat(n.checkbox, " input"));
               case "radio":
                  return i.popup.querySelector(".".concat(n.radio, " input:checked")) || i.popup.querySelector(".".concat(n.radio, " input:first-child"));
               case "range":
                  return i.popup.querySelector(".".concat(n.range, " input"));
               default:
                  return e(i.content, n.input)
            }
         },
         enableButtons: function () {
            var n = u.domCache.get(this);
            n.confirmButton.disabled = !1;
            n.cancelButton.disabled = !1
         },
         disableButtons: function () {
            var n = u.domCache.get(this);
            n.confirmButton.disabled = !0;
            n.cancelButton.disabled = !0
         },
         enableConfirmButton: function () {
            u.domCache.get(this).confirmButton.disabled = !1
         },
         disableConfirmButton: function () {
            u.domCache.get(this).confirmButton.disabled = !0
         },
         enableInput: function () {
            var n = this.getInput(),
               i, t;
            if (!n) return !1;
            if ("radio" === n.type)
               for (i = n.parentNode.parentNode.querySelectorAll("input"), t = 0; t < i.length; t++) i[t].disabled = !1;
            else n.disabled = !1
         },
         disableInput: function () {
            var n = this.getInput(),
               i, t;
            if (!n) return !1;
            if (n && "radio" === n.type)
               for (i = n.parentNode.parentNode.querySelectorAll("input"), t = 0; t < i.length; t++) i[t].disabled = !0;
            else n.disabled = !0
         },
         showValidationMessage: ai,
         resetValidationMessage: vi,
         resetValidationError: function () {
            g("Swal.resetValidationError() is deprecated and will be removed in the next major release, use Swal.resetValidationMessage() instead");
            vi.bind(this)()
         },
         showValidationError: function (n) {
            g("Swal.showValidationError() is deprecated and will be removed in the next major release, use Swal.showValidationMessage() instead");
            ai.bind(this)(n)
         },
         getProgressSteps: function () {
            return u.innerParams.get(this).progressSteps
         },
         setProgressSteps: function (n) {
            var t = a({}, u.innerParams.get(this), {
               progressSteps: n
            });
            u.innerParams.set(this, t);
            sr(t)
         },
         showProgressSteps: function () {
            var n = u.domCache.get(this);
            r(n.progressSteps)
         },
         hideProgressSteps: function () {
            var n = u.domCache.get(this);
            f(n.progressSteps)
         },
         _main: function (h) {
            var k = this,
               v, p, d;
            return yr(h), v = a({}, lr, h), ! function (t) {
               var u, e, a, v;
               t.inputValidator || Object.keys(ii).forEach(function (n) {
                  t.input === n && (t.inputValidator = t.expectRejections ? ii[n] : w.adaptInputValidator(ii[n]))
               });
               t.validationMessage && ("object" !== c(t.extraParams) && (t.extraParams = {}), t.extraParams.validationMessage = t.validationMessage);
               t.target && ("string" != typeof t.target || document.querySelector(t.target)) && ("string" == typeof t.target || t.target.appendChild) || (y('Target parameter is not valid, defaulting to "body"'), t.target = "body");
               "function" == typeof t.animation && (t.animation = t.animation.call());
               e = o();
               a = "string" == typeof t.target ? document.querySelector(t.target) : t.target;
               u = e && a && e.parentNode !== a.parentNode ? or(t) : e || or(t);
               t.width && (u.style.width = "number" == typeof t.width ? t.width + "px" : t.width);
               t.padding && (u.style.padding = "number" == typeof t.padding ? t.padding + "px" : t.padding);
               t.background && (u.style.background = t.background);
               for (var d = window.getComputedStyle(u).getPropertyValue("background-color"), k = u.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), p = 0; p < k.length; p++) k[p].style.backgroundColor = d;
               var h = s(),
                  b = wt(),
                  g = ur();
               (ru(t), nu(t), "string" == typeof t.backdrop ? s().style.background = t.backdrop : t.backdrop || i([document.documentElement, document.body], n["no-backdrop"]), !t.backdrop && t.allowOutsideClick && y('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), t.position in n ? i(h, n[t.position]) : (y('The "position" parameter is not valid, defaulting to "center"'), i(h, n.center)), t.grow && "string" == typeof t.grow) && (v = "grow-" + t.grow, v in n && i(h, n[v]));
               t.showCloseButton ? (b.setAttribute("aria-label", t.closeButtonAriaLabel), r(b)) : f(b);
               u.className = n.popup;
               t.toast ? (i([document.documentElement, document.body], n["toast-shown"]), i(u, n.toast)) : i(u, n.modal);
               t.customClass && i(u, t.customClass);
               t.customContainerClass && i(h, t.customContainerClass);
               sr(t);
               tu(t);
               iu(t);
               gr(t);
               dt(t.footer, g);
               !0 === t.animation ? l(u, n.noanimation) : i(u, n.noanimation);
               t.showLoaderOnConfirm && !t.preConfirm && y("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request")
            }(v), Object.freeze(v), u.innerParams.set(this, v), t.timeout && (t.timeout.stop(), delete t.timeout), clearTimeout(t.restoreFocusTimeout), p = {
               popup: o(),
               container: s(),
               content: ot(),
               actions: st(),
               confirmButton: ft(),
               cancelButton: et(),
               closeButton: wt(),
               validationMessage: rr(),
               progressSteps: ir()
            }, u.domCache.set(this, p), d = this.constructor, new Promise(function (u, o) {
               var wt = function (n) {
                     d.closePopup(v.onClose, v.onAfterClose);
                     v.useRejections ? u(n) : u({
                        value: n
                     })
                  },
                  h = function (n) {
                     d.closePopup(v.onClose, v.onAfterClose);
                     v.useRejections ? o(n) : u({
                        dismiss: n
                     })
                  },
                  ui = function (n) {
                     d.closePopup(v.onClose, v.onAfterClose);
                     o(n)
                  },
                  nt, et, kt, ot, dt, st, ht, a, w, tt, gt, rt, ct, ni;
               v.timer && (t.timeout = new su(function () {
                  h("timer");
                  delete t.timeout
               }, v.timer));
               v.input && setTimeout(function () {
                  var n = k.getInput();
                  n && ki(n)
               }, 0);
               for (var lt = function (n) {
                     if (v.showLoaderOnConfirm && d.showLoading(), v.preConfirm) {
                        k.resetValidationMessage();
                        var t = Promise.resolve().then(function () {
                           return v.preConfirm(n, v.extraParams)
                        });
                        v.expectRejections ? t.then(function (t) {
                           return wt(t || n)
                        }, function (n) {
                           k.hideLoading();
                           n && k.showValidationMessage(n)
                        }) : t.then(function (t) {
                           it(p.validationMessage) || !1 === t ? k.hideLoading() : wt(t || n)
                        }, function (n) {
                           return ui(n)
                        })
                     } else wt(n)
                  }, at = function (n) {
                     var i = n.target,
                        r = p.confirmButton,
                        u = p.cancelButton,
                        e = r && (r === i || r.contains(i)),
                        o = u && (u === i || u.contains(i)),
                        t, f;
                     switch (n.type) {
                        case "click":
                           e && d.isVisible() ? (k.disableButtons(), v.input) ? (t = function () {
                              var n = k.getInput();
                              if (!n) return null;
                              switch (v.input) {
                                 case "checkbox":
                                    return n.checked ? 1 : 0;
                                 case "radio":
                                    return n.checked ? n.value : null;
                                 case "file":
                                    return n.files.length ? n.files[0] : null;
                                 default:
                                    return v.inputAutoTrim ? n.value.trim() : n.value
                              }
                           }(), v.inputValidator ? (k.disableInput(), f = Promise.resolve().then(function () {
                              return v.inputValidator(t, v.extraParams)
                           }), v.expectRejections ? f.then(function () {
                              k.enableButtons();
                              k.enableInput();
                              lt(t)
                           }, function (n) {
                              k.enableButtons();
                              k.enableInput();
                              n && k.showValidationMessage(n)
                           }) : f.then(function (n) {
                              k.enableButtons();
                              k.enableInput();
                              n ? k.showValidationMessage(n) : lt(t)
                           }, function (n) {
                              return ui(n)
                           })) : k.getInput().checkValidity() ? lt(t) : (k.enableButtons(), k.showValidationMessage(v.validationMessage))) : lt(!0) : o && d.isVisible() && (k.disableButtons(), h(d.DismissReason.cancel))
                     }
                  }, ut = p.popup.querySelectorAll("button"), g = 0; g < ut.length; g++) ut[g].onclick = at, ut[g].onmouseover = at, ut[g].onmouseout = at, ut[g].onmousedown = at;
               (p.closeButton.onclick = function () {
                  h(d.DismissReason.close)
               }, v.toast) ? p.popup.onclick = function () {
                  v.showConfirmButton || v.showCancelButton || v.showCloseButton || v.input || h(d.DismissReason.close)
               }: (nt = !1, p.popup.onmousedown = function () {
                  p.container.onmouseup = function (n) {
                     p.container.onmouseup = void 0;
                     n.target === p.container && (nt = !0)
                  }
               }, p.container.onmousedown = function () {
                  p.popup.onmouseup = function (n) {
                     p.popup.onmouseup = void 0;
                     (n.target === p.popup || p.popup.contains(n.target)) && (nt = !0)
                  }
               }, p.container.onclick = function (n) {
                  nt ? nt = !1 : n.target === p.container && yt(v.allowOutsideClick) && h(d.DismissReason.backdrop)
               });
               v.reverseButtons ? p.confirmButton.parentNode.insertBefore(p.cancelButton, p.confirmButton) : p.confirmButton.parentNode.insertBefore(p.confirmButton, p.cancelButton);
               et = function (n, t) {
                  for (var i = bt(v.focusCancel), r = 0; r < i.length; r++) return (n += t) === i.length ? n = 0 : -1 === n && (n = i.length - 1), i[n].focus();
                  p.popup.focus()
               };
               t.keydownHandlerAdded && (t.keydownTarget.removeEventListener("keydown", t.keydownHandler, {
                  capture: t.keydownListenerCapture
               }), t.keydownHandlerAdded = !1);
               v.toast || (t.keydownHandler = function (n) {
                  return function (n, t) {
                     if (t.stopKeydownPropagation && n.stopPropagation(), "Enter" !== n.key || n.isComposing)
                        if ("Tab" === n.key) {
                           for (var f = n.target, u = bt(t.focusCancel), r = -1, i = 0; i < u.length; i++)
                              if (f === u[i]) {
                                 r = i;
                                 break
                              } n.shiftKey ? et(r, -1) : et(r, 1);
                           n.stopPropagation();
                           n.preventDefault()
                        } else -1 !== ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"].indexOf(n.key) ? document.activeElement === p.confirmButton && it(p.cancelButton) ? p.cancelButton.focus() : document.activeElement === p.cancelButton && it(p.confirmButton) && p.confirmButton.focus() : "Escape" !== n.key && "Esc" !== n.key || !0 !== yt(t.allowEscapeKey) || (n.preventDefault(), h(d.DismissReason.esc));
                     else if (n.target && k.getInput() && n.target.outerHTML === k.getInput().outerHTML) {
                        if (-1 !== ["textarea", "file"].indexOf(t.input)) return;
                        d.clickConfirm();
                        n.preventDefault()
                     }
                  }(n, v)
               }, t.keydownTarget = v.keydownListenerCapture ? window : p.popup, t.keydownListenerCapture = v.keydownListenerCapture, t.keydownTarget.addEventListener("keydown", t.keydownHandler, {
                  capture: t.keydownListenerCapture
               }), t.keydownHandlerAdded = !0);
               k.enableButtons();
               k.hideLoading();
               k.resetValidationMessage();
               v.toast && (v.input || v.footer || v.showCloseButton) ? i(document.body, n["toast-column"]) : l(document.body, n["toast-column"]);
               for (var s, ti, vt = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], ii = function (n) {
                     n.placeholder && !v.inputPlaceholder || (n.placeholder = v.inputPlaceholder)
                  }, ft = 0; ft < vt.length; ft++) {
                  if (kt = n[vt[ft]], ot = e(p.content, kt), s = k.getInput(vt[ft])) {
                     for (dt in s.attributes) s.attributes.hasOwnProperty(dt) && (st = s.attributes[dt].name, "type" !== st && "value" !== st && s.removeAttribute(st));
                     for (ht in v.inputAttributes) "range" === vt[ft] && "placeholder" === ht || s.setAttribute(ht, v.inputAttributes[ht])
                  }
                  ot.className = kt;
                  v.inputClass && i(ot, v.inputClass);
                  f(ot)
               }
               switch (v.input) {
                  case "text":
                  case "email":
                  case "password":
                  case "number":
                  case "tel":
                  case "url":
                     s = e(p.content, n.input);
                     "string" == typeof v.inputValue || "number" == typeof v.inputValue ? s.value = v.inputValue : pt(v.inputValue) || y('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(c(v.inputValue), '"'));
                     ii(s);
                     s.type = v.input;
                     r(s);
                     break;
                  case "file":
                     ii(s = e(p.content, n.file));
                     s.type = v.input;
                     r(s);
                     break;
                  case "range":
                     var ri = e(p.content, n.range),
                        fi = ri.querySelector("input"),
                        ei = ri.querySelector("output");
                     fi.value = v.inputValue;
                     fi.type = v.input;
                     ei.value = v.inputValue;
                     r(ri);
                     break;
                  case "select":
                     a = e(p.content, n.select);
                     (a.innerHTML = "", v.inputPlaceholder) && (w = document.createElement("option"), w.innerHTML = v.inputPlaceholder, w.value = "", w.disabled = !0, w.selected = !0, a.appendChild(w));
                     ti = function (n) {
                        n.forEach(function (n) {
                           var i = n[0],
                              r = n[1],
                              t = document.createElement("option");
                           t.value = i;
                           t.innerHTML = r;
                           v.inputValue.toString() === i.toString() && (t.selected = !0);
                           a.appendChild(t)
                        });
                        r(a);
                        a.focus()
                     };
                     break;
                  case "radio":
                     tt = e(p.content, n.radio);
                     tt.innerHTML = "";
                     ti = function (t) {
                        t.forEach(function (t) {
                           var f = t[0],
                              e = t[1],
                              i = document.createElement("input"),
                              u = document.createElement("label"),
                              r;
                           i.type = "radio";
                           i.name = n.radio;
                           i.value = f;
                           v.inputValue.toString() === f.toString() && (i.checked = !0);
                           r = document.createElement("span");
                           r.innerHTML = e;
                           r.className = n.label;
                           u.appendChild(i);
                           u.appendChild(r);
                           tt.appendChild(u)
                        });
                        r(tt);
                        var i = tt.querySelectorAll("input");
                        i.length && i[0].focus()
                     };
                     break;
                  case "checkbox":
                     gt = e(p.content, n.checkbox);
                     rt = k.getInput("checkbox");
                     rt.type = "checkbox";
                     rt.value = 1;
                     rt.id = n.checkbox;
                     rt.checked = Boolean(v.inputValue);
                     gt.querySelector("span").innerHTML = v.inputPlaceholder;
                     r(gt);
                     break;
                  case "textarea":
                     ct = e(p.content, n.textarea);
                     ct.value = v.inputValue;
                     ii(ct);
                     r(ct);
                     break;
                  case null:
                     break;
                  default:
                     b('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(v.input, '"'))
               }
               "select" === v.input || "radio" === v.input ? (ni = function (n) {
                  return ti((t = n, i = [], "undefined" != typeof Map && t instanceof Map ? t.forEach(function (n, t) {
                     i.push([t, n])
                  }) : Object.keys(t).forEach(function (n) {
                     i.push([n, t[n]])
                  }), i));
                  var t, i
               }, pt(v.inputOptions) ? (d.showLoading(), v.inputOptions.then(function (n) {
                  k.hideLoading();
                  ni(n)
               })) : "object" === c(v.inputOptions) ? ni(v.inputOptions) : b("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(c(v.inputOptions)))) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(v.input) && pt(v.inputValue) && (d.showLoading(), f(s), v.inputValue.then(function (n) {
                  s.value = "number" === v.input ? parseFloat(n) || 0 : n + "";
                  r(s);
                  s.focus();
                  k.hideLoading()
               }).catch(function (n) {
                  b("Error in inputValue promise: " + n);
                  s.value = "";
                  r(s);
                  s.focus();
                  k.hideLoading()
               }));
               hu(v);
               v.toast || (yt(v.allowEnterKey) ? v.focusCancel && it(p.cancelButton) ? p.cancelButton.focus() : v.focusConfirm && it(p.confirmButton) ? p.confirmButton.focus() : et(-1, 1) : document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur());
               p.container.scrollTop = 0
            })
         }
      }),
      ui, fi, w;
   return v.prototype.then = function (n, t) {
      return u.promise.get(this).then(n, t)
   }, v.prototype.catch = function (n) {
      return u.promise.get(this).catch(n)
   }, v.prototype.finally = function (n) {
      return u.promise.get(this).finally(n)
   }, a(v.prototype, kr), a(v, ou), Object.keys(kr).forEach(function (n) {
      v[n] = function () {
         var t;
         if (ri) return (t = ri)[n].apply(t, arguments)
      }
   }), v.DismissReason = wi, v.noop = function () {}, w = ci((ui = v, fi = function () {
      function n() {
         return ct(this, n), hi(this, d(n).apply(this, arguments))
      }
      return si(n, ui), oi(n, [{
         key: "_main",
         value: function (t) {
            return vt(d(n.prototype), "_main", this).call(this, a({}, ni, t))
         }
      }], [{
         key: "setDefaults",
         value: function (n) {
            if (g(pr), !n || "object" !== c(n)) throw new TypeError("SweetAlert2: The argument for setDefaults() is required and has to be a object");
            yr(n);
            Object.keys(n).forEach(function (t) {
               ui.isValidParameter(t) && (ni[t] = n[t])
            })
         }
      }, {
         key: "resetDefaults",
         value: function () {
            g(pr);
            ni = {}
         }
      }]), n
   }(), "undefined" != typeof window && "object" === c(window._swalDefaults) && fi.setDefaults(window._swalDefaults), fi)), w.default = w
});
"undefined" != typeof window && window.Sweetalert2 && (window.Sweetalert2.version = "7.33.1", window.swal = window.sweetAlert = window.Swal = window.SweetAlert = window.Sweetalert2);
"undefined" != typeof document && function (n, t) {
   var i = n.createElement("style");
   if (n.getElementsByTagName("head")[0].appendChild(i), i.styleSheet) i.styleSheet.disabled || (i.styleSheet.cssText = t);
   else try {
      i.innerHTML = t
   } catch (n) {
      i.innerText = t
   }
}(document, "@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0;z-index:1}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;z-index:1;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validation-message::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}");
"undefined" != typeof document && function (n, t) {
   var i = n.createElement("style");
   if (n.getElementsByTagName("head")[0].appendChild(i), i.styleSheet) i.styleSheet.disabled || (i.styleSheet.cssText = t);
   else try {
      i.innerHTML = t
   } catch (n) {
      i.innerText = t
   }
}(document, "@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0;z-index:1}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;z-index:1;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validation-message::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}");
/*!
 * jQuery & Zepto Lazy - v1.7.10
 * http://jquery.eisbehr.de/lazy/
 *
 * Copyright 2012 - 2018, Daniel 'Eisbehr' Kern
 *
 * Dual licensed under the MIT and GPL-2.0 licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl-2.0.html
 *
 * $("img.lazy").lazy();
 */
(function (n, t) {
   "use strict";

   function f(r, f, e, o, s) {
      function it() {
         if (ut = n.devicePixelRatio > 1, e = rt(e), f.delay >= 0 && setTimeout(function () {
               p(!0)
            }, f.delay), f.delay < 0 || f.combined) {
            o.e = lt(f.throttle, function (n) {
               n.type === "resize" && (w = b = -1);
               p(n.all)
            });
            o.a = function (n) {
               n = rt(n);
               e.push.apply(e, n)
            };
            o.g = function () {
               return e = i(e).filter(function () {
                  return !i(this).data(f.loadedName)
               })
            };
            o.f = function (n) {
               for (var t, i = 0; i < n.length; i++) t = e.filter(function () {
                  return this === n[i]
               }), t.length && p(!1, t)
            };
            p();
            i(f.appendScroll).on("scroll." + s + " resize." + s, o.e)
         }
      }

      function rt(n) {
         var v = f.defaultImage,
            p = f.placeholder,
            k = f.imageBase,
            s = f.srcsetAttribute,
            c = f.loaderAttribute,
            a = f._f || {},
            e, w;
         for (n = i(n).filter(function () {
               var n = i(this),
                  r = g(this);
               return !n.data(f.handledName) && (n.attr(f.attribute) || n.attr(s) || n.attr(c) || a[r] !== t)
            }).data("plugin_" + f.name, r), e = 0, w = n.length; e < w; e++) {
            var u = i(n[e]),
               o = g(n[e]),
               b = u.attr(f.imageBaseAttribute) || k;
            o === l && b && u.attr(s) && u.attr(s, ct(u.attr(s), b));
            a[o] === t || u.attr(c) || u.attr(c, a[o]);
            o === l && v && !u.attr(h) ? u.attr(h, v) : o !== l && p && (!u.css(y) || u.css(y) === "none") && u.css(y, "url('" + p + "')")
         }
         return n
      }

      function p(n, t) {
         var o;
         if (!e.length) {
            f.autoDestroy && r.destroy();
            return
         }
         var s = t || e,
            w = !1,
            nt = f.imageBase || "",
            b = f.srcsetAttribute,
            c = f.handledName;
         for (o = 0; o < s.length; o++)
            if (n || t || ot(s[o])) {
               var u = i(s[o]),
                  a = g(s[o]),
                  v = u.attr(f.attribute),
                  p = u.attr(f.imageBaseAttribute) || nt,
                  d = u.attr(f.loaderAttribute);
               !u.data(c) && (!f.visibleOnly || u.is(":visible")) && ((v || u.attr(b)) && (a === l && (p + v !== u.attr(h) || u.attr(b) !== u.attr(k)) || a !== l && p + v !== u.css(y)) || d) && (w = !0, u.data(c, !0), et(u, a, p, d))
            } w && (e = i(e).filter(function () {
            return !i(this).data(c)
         }))
      }

      function et(n, t, r, u) {
         var o, s, e, p;
         ++tt;
         o = function () {
            c("onError", n);
            nt();
            o = i.noop
         };
         c("beforeLoad", n);
         var b = f.attribute,
            g = f.srcsetAttribute,
            w = f.sizesAttribute,
            it = f.retinaAttribute,
            rt = f.removeAttribute,
            et = f.loadedName,
            ot = n.attr(it);
         if (u) {
            s = function () {
               rt && n.removeAttr(f.loaderAttribute);
               n.data(et, !0);
               c(ft, n);
               setTimeout(nt, 1);
               s = i.noop
            };
            n.off(v).one(v, o).one(a, s);
            c(u, n, function (t) {
               t ? (n.off(a), s()) : (n.off(v), o())
            }) || n.trigger(v)
         } else {
            e = i(new Image);
            e.one(v, o).one(a, function () {
               n.hide();
               t === l ? n.attr(d, e.attr(d)).attr(k, e.attr(k)).attr(h, e.attr(h)) : n.css(y, "url('" + e.attr(h) + "')");
               n[f.effect](f.effectTime);
               rt && (n.removeAttr(b + " " + g + " " + it + " " + f.imageBaseAttribute), w !== d && n.removeAttr(w));
               n.data(et, !0);
               c(ft, n);
               e.remove();
               nt()
            });
            p = (ut && ot ? ot : n.attr(b)) || "";
            e.attr(d, n.attr(w)).attr(k, n.attr(g)).attr(h, p ? r + p : null);
            e.complete && e.trigger(a)
         }
      }

      function ot(n) {
         var t = n.getBoundingClientRect(),
            r = f.scrollDirection,
            i = f.threshold,
            u = ht() + i > t.top && -i < t.bottom,
            e = st() + i > t.left && -i < t.right;
         return r === "vertical" ? u : r === "horizontal" ? e : u && e
      }

      function st() {
         return w >= 0 ? w : w = i(n).width()
      }

      function ht() {
         return b >= 0 ? b : b = i(n).height()
      }

      function g(n) {
         return n.tagName.toLowerCase()
      }

      function ct(n, t) {
         var r, i, u;
         if (t)
            for (r = n.split(","), n = "", i = 0, u = r.length; i < u; i++) n += t + r[i].trim() + (i !== u - 1 ? "," : "");
         return n
      }

      function lt(n, t) {
         var i, u = 0;
         return function (e, o) {
            function s() {
               u = +new Date;
               t.call(r, e)
            }
            var h = +new Date - u;
            i && clearTimeout(i);
            h > n || !f.enableThrottle || o ? s() : i = setTimeout(s, n - h)
         }
      }

      function nt() {
         --tt;
         e.length || tt || c("onFinishedAll")
      }

      function c(n) {
         return (n = f[n]) ? (n.apply(r, [].slice.call(arguments, 1)), !0) : !1
      }
      var tt = 0,
         w = -1,
         b = -1,
         ut = !1,
         ft = "afterLoad",
         a = "load",
         v = "error",
         l = "img",
         h = "src",
         k = "srcset",
         d = "sizes",
         y = "background-image";
      if (f.bind === "event" || u) it();
      else i(n).on(a + "." + s, it)
   }

   function r(r, u) {
      var o = this,
         h = i.extend({}, o.config, u),
         s = {},
         c = h.name + "-" + ++e;
      return o.config = function (n, i) {
         return i === t ? h[n] : (h[n] = i, o)
      }, o.addItems = function (n) {
         return s.a && s.a(i.type(n) === "string" ? i(n) : n), o
      }, o.getItems = function () {
         return s.g ? s.g() : {}
      }, o.update = function (n) {
         return s.e && s.e({}, !n), o
      }, o.force = function (n) {
         return s.f && s.f(i.type(n) === "string" ? i(n) : n), o
      }, o.loadAll = function () {
         return s.e && s.e({
            all: !0
         }, !0), o
      }, o.destroy = function () {
         return i(h.appendScroll).off("." + c, s.e), i(n).off("." + c), s = {}, t
      }, f(o, h, r, s, c), h.chainable ? r : o
   }
   var i = n.jQuery || n.Zepto,
      e = 0,
      u = !1;
   i.fn.Lazy = i.fn.lazy = function (n) {
      return new r(this, n)
   };
   i.Lazy = i.lazy = function (n, u, f) {
      var e, h, o, c, s, l;
      if (i.isFunction(u) && (f = u, u = []), i.isFunction(f)) {
         for (n = i.isArray(n) ? n : [n], u = i.isArray(u) ? u : [u], e = r.prototype.config, h = e._f || (e._f = {}), o = 0, c = n.length; o < c; o++)(e[n[o]] === t || i.isFunction(e[n[o]])) && (e[n[o]] = f);
         for (s = 0, l = u.length; s < l; s++) h[u[s]] = n[0]
      }
   };
   r.prototype.config = {
      name: "lazy",
      chainable: !0,
      autoDestroy: !0,
      bind: "load",
      threshold: 500,
      visibleOnly: !1,
      appendScroll: n,
      scrollDirection: "both",
      imageBase: null,
      defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
      placeholder: null,
      delay: -1,
      combined: !1,
      attribute: "data-src",
      srcsetAttribute: "data-srcset",
      sizesAttribute: "data-sizes",
      retinaAttribute: "data-retina",
      loaderAttribute: "data-loader",
      imageBaseAttribute: "data-imagebase",
      removeAttribute: !0,
      handledName: "handled",
      loadedName: "loaded",
      effect: "show",
      effectTime: 0,
      enableThrottle: !0,
      throttle: 250,
      beforeLoad: t,
      afterLoad: t,
      onError: t,
      onFinishedAll: t
   };
   i(n).on("load", function () {
      u = !0
   })
})(window);
/*! jQuery UI - v1.13.1 - 2022-05-30
 * http://jqueryui.com
 * Includes: effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, keycode.js, position.js, unique-id.js, widget.js, widgets/autocomplete.js, widgets/menu.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */
(function (n) {
   "use strict";
   typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
})(function (n) {
   "use strict";

   function f(n) {
      return n == null ? n + "" : typeof n == "object" ? l[ni.call(n)] || "object" : typeof n
   }

   function e(n, t, i) {
      var r = p[t.type] || {};
      return n == null ? i || !t.def ? null : t.def : (n = r.floor ? ~~n : parseFloat(n), isNaN(n)) ? t.def : r.mod ? (n + r.mod) % r.mod : Math.min(r.max, Math.max(0, n))
   }

   function y(n) {
      var f = t(),
         e = f._rgba = [];
      return (n = n.toLowerCase(), r(ii, function (t, i) {
         var r, s = i.re.exec(n),
            h = s && i.parse(s),
            o = i.space || "rgba";
         if (h) return r = f[o](h), f[u[o].cache] = r[u[o].cache], e = f._rgba = r._rgba, !1
      }), e.length) ? (e.join() === "0,0,0,0" && i.extend(e, o.transparent), f) : o[n]
   }

   function h(n, t, i) {
      return (i = (i + 1) % 1, i * 6 < 1) ? n + (t - n) * i * 6 : i * 2 < 1 ? t : i * 3 < 2 ? n + (t - n) * (2 / 3 - i) * 6 : n
   }
   var d, i, g, nt, tt, it, rt, ut, ft, et, ot, st, ht, ct, lt, at, c, vt, yt, pt, wt, bt, kt, dt, gt;
   n.ui = n.ui || {};
   d = n.ui.version = "1.13.1";
   i = n;
   /*!
    * jQuery Color Animations v2.2.0
    * https://github.com/jquery/jquery-color
    *
    * Copyright OpenJS Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    *
    * Date: Sun May 10 09:02:36 2020 +0200
    */
   var l = {},
      ni = l.toString,
      ti = /^([\-+])=\s*(\d+\.?\d*)/,
      ii = [{
         re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
         parse: function (n) {
            return [n[1], n[2], n[3], n[4]]
         }
      }, {
         re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
         parse: function (n) {
            return [n[1] * 2.55, n[2] * 2.55, n[3] * 2.55, n[4]]
         }
      }, {
         re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,
         parse: function (n) {
            return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16), n[4] ? (parseInt(n[4], 16) / 255).toFixed(2) : 1]
         }
      }, {
         re: /#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,
         parse: function (n) {
            return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16), n[4] ? (parseInt(n[4] + n[4], 16) / 255).toFixed(2) : 1]
         }
      }, {
         re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
         space: "hsla",
         parse: function (n) {
            return [n[1], n[2] / 100, n[3] / 100, n[4]]
         }
      }],
      t = i.Color = function (n, t, r, u) {
         return new i.Color.fn.parse(n, t, r, u)
      },
      u = {
         rgba: {
            props: {
               red: {
                  idx: 0,
                  type: "byte"
               },
               green: {
                  idx: 1,
                  type: "byte"
               },
               blue: {
                  idx: 2,
                  type: "byte"
               }
            }
         },
         hsla: {
            props: {
               hue: {
                  idx: 0,
                  type: "degrees"
               },
               saturation: {
                  idx: 1,
                  type: "percent"
               },
               lightness: {
                  idx: 2,
                  type: "percent"
               }
            }
         }
      },
      p = {
         byte: {
            floor: !0,
            max: 255
         },
         percent: {
            max: 1
         },
         degrees: {
            mod: 360,
            floor: !0
         }
      },
      w = t.support = {},
      b = i("<p>")[0],
      o, r = i.each;
   b.style.cssText = "background-color:rgba(1,1,1,.5)";
   w.rgba = b.style.backgroundColor.indexOf("rgba") > -1;
   r(u, function (n, t) {
      t.cache = "_" + n;
      t.props.alpha = {
         idx: 3,
         type: "percent",
         def: 1
      }
   });
   i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (n, t) {
      l["[object " + t + "]"] = t.toLowerCase()
   });
   t.fn = i.extend(t.prototype, {
      parse: function (n, s, h, c) {
         if (n === undefined) return this._rgba = [null, null, null, null], this;
         (n.jquery || n.nodeType) && (n = i(n).css(s), s = undefined);
         var l = this,
            a = f(n),
            v = this._rgba = [];
         return (s !== undefined && (n = [n, s, h, c], a = "array"), a === "string") ? this.parse(y(n) || o._default) : a === "array" ? (r(u.rgba.props, function (t, i) {
            v[i.idx] = e(n[i.idx], i)
         }), this) : a === "object" ? (n instanceof t ? r(u, function (t, i) {
            n[i.cache] && (l[i.cache] = n[i.cache].slice())
         }) : r(u, function (t, u) {
            var f = u.cache;
            r(u.props, function (t, i) {
               if (!l[f] && u.to) {
                  if (t === "alpha" || n[t] == null) return;
                  l[f] = u.to(l._rgba)
               }
               l[f][i.idx] = e(n[t], i, !0)
            });
            l[f] && i.inArray(null, l[f].slice(0, 3)) < 0 && (l[f][3] == null && (l[f][3] = 1), u.from && (l._rgba = u.from(l[f])))
         }), this) : void 0
      },
      is: function (n) {
         var e = t(n),
            i = !0,
            f = this;
         return r(u, function (n, t) {
            var o, u = e[t.cache];
            return u && (o = f[t.cache] || t.to && t.to(f._rgba) || [], r(t.props, function (n, t) {
               if (u[t.idx] != null) return i = u[t.idx] === o[t.idx]
            })), i
         }), i
      },
      _space: function () {
         var n = [],
            t = this;
         return r(u, function (i, r) {
            t[r.cache] && n.push(i)
         }), n.pop()
      },
      transition: function (n, i) {
         var f = t(n),
            h = f._space(),
            o = u[h],
            c = this.alpha() === 0 ? t("transparent") : this,
            l = c[o.cache] || o.to(c._rgba),
            s = l.slice();
         return f = f[o.cache], r(o.props, function (n, t) {
            var h = t.idx,
               r = l[h],
               u = f[h],
               o = p[t.type] || {};
            u !== null && (r === null ? s[h] = u : (o.mod && (u - r > o.mod / 2 ? r += o.mod : r - u > o.mod / 2 && (r -= o.mod)), s[h] = e((u - r) * i + r, t)))
         }), this[h](s)
      },
      blend: function (n) {
         if (this._rgba[3] === 1) return this;
         var r = this._rgba.slice(),
            u = r.pop(),
            f = t(n)._rgba;
         return t(i.map(r, function (n, t) {
            return (1 - u) * f[t] + u * n
         }))
      },
      toRgbaString: function () {
         var t = "rgba(",
            n = i.map(this._rgba, function (n, t) {
               return n != null ? n : t > 2 ? 1 : 0
            });
         return n[3] === 1 && (n.pop(), t = "rgb("), t + n.join() + ")"
      },
      toHslaString: function () {
         var t = "hsla(",
            n = i.map(this.hsla(), function (n, t) {
               return n == null && (n = t > 2 ? 1 : 0), t && t < 3 && (n = Math.round(n * 100) + "%"), n
            });
         return n[3] === 1 && (n.pop(), t = "hsl("), t + n.join() + ")"
      },
      toHexString: function (n) {
         var t = this._rgba.slice(),
            r = t.pop();
         return n && t.push(~~(r * 255)), "#" + i.map(t, function (n) {
            return n = (n || 0).toString(16), n.length === 1 ? "0" + n : n
         }).join("")
      },
      toString: function () {
         return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
      }
   });
   t.fn.parse.prototype = t.fn;
   u.hsla.to = function (n) {
      if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
      var i = n[0] / 255,
         r = n[1] / 255,
         f = n[2] / 255,
         s = n[3],
         u = Math.max(i, r, f),
         e = Math.min(i, r, f),
         t = u - e,
         o = u + e,
         h = o * .5,
         c, l;
      return c = e === u ? 0 : i === u ? 60 * (r - f) / t + 360 : r === u ? 60 * (f - i) / t + 120 : 60 * (i - r) / t + 240, l = t === 0 ? 0 : h <= .5 ? t / o : t / (2 - o), [Math.round(c) % 360, l, h, s == null ? 1 : s]
   };
   u.hsla.from = function (n) {
      if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
      var r = n[0] / 360,
         u = n[1],
         t = n[2],
         e = n[3],
         i = t <= .5 ? t * (1 + u) : t + u - t * u,
         f = 2 * t - i;
      return [Math.round(h(f, i, r + 1 / 3) * 255), Math.round(h(f, i, r) * 255), Math.round(h(f, i, r - 1 / 3) * 255), e]
   };
   r(u, function (n, i) {
      var o = i.props,
         u = i.cache,
         s = i.to,
         h = i.from;
      t.fn[n] = function (n) {
         if (s && !this[u] && (this[u] = s(this._rgba)), n === undefined) return this[u].slice();
         var c, l = f(n),
            a = l === "array" || l === "object" ? n : arguments,
            i = this[u].slice();
         return r(o, function (n, t) {
            var r = a[l === "object" ? n : t.idx];
            r == null && (r = i[t.idx]);
            i[t.idx] = e(r, t)
         }), h ? (c = t(h(i)), c[u] = i, c) : t(i)
      };
      r(o, function (i, r) {
         t.fn[i] || (t.fn[i] = function (t) {
            var u, e, o, h, s = f(t);
            return (h = i === "alpha" ? this._hsla ? "hsla" : "rgba" : n, u = this[h](), e = u[r.idx], s === "undefined") ? e : (s === "function" && (t = t.call(this, e), s = f(t)), t == null && r.empty) ? this : (s === "string" && (o = ti.exec(t), o && (t = e + parseFloat(o[2]) * (o[1] === "+" ? 1 : -1))), u[r.idx] = t, this[h](u))
         })
      })
   });
   t.hook = function (n) {
      var u = n.split(" ");
      r(u, function (n, r) {
         i.cssHooks[r] = {
            set: function (n, u) {
               var s, e, o = "";
               if (u !== "transparent" && (f(u) !== "string" || (s = y(u)))) {
                  if (u = t(s || u), !w.rgba && u._rgba[3] !== 1) {
                     for (e = r === "backgroundColor" ? n.parentNode : n;
                        (o === "" || o === "transparent") && e && e.style;) try {
                        o = i.css(e, "backgroundColor");
                        e = e.parentNode
                     } catch (h) {}
                     u = u.blend(o && o !== "transparent" ? o : "_default")
                  }
                  u = u.toRgbaString()
               }
               try {
                  n.style[r] = u
               } catch (h) {}
            }
         };
         i.fx.step[r] = function (n) {
            n.colorInit || (n.start = t(n.elem, r), n.end = t(n.end), n.colorInit = !0);
            i.cssHooks[r].set(n.elem, n.start.transition(n.end, n.pos))
         }
      })
   };
   t.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
   i.cssHooks.borderColor = {
      expand: function (n) {
         var t = {};
         return r(["Top", "Right", "Bottom", "Left"], function (i, r) {
            t["border" + r + "Color"] = n
         }), t
      }
   };
   o = i.Color.names = {
      aqua: "#00ffff",
      black: "#000000",
      blue: "#0000ff",
      fuchsia: "#ff00ff",
      gray: "#808080",
      green: "#008000",
      lime: "#00ff00",
      maroon: "#800000",
      navy: "#000080",
      olive: "#808000",
      purple: "#800080",
      red: "#ff0000",
      silver: "#c0c0c0",
      teal: "#008080",
      white: "#ffffff",
      yellow: "#ffff00",
      transparent: [null, null, null, 0],
      _default: "#ffffff"
   };
   /*!
    * jQuery UI Effects 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   var s = "ui-effects-",
      a = "ui-effects-style",
      v = "ui-effects-animated";
   n.effects = {
         effect: {}
      },
      function () {
         function r(n) {
            return n.replace(/-([\da-z])/gi, function (n, t) {
               return t.toUpperCase()
            })
         }

         function t(n) {
            var i, u, t = n.ownerDocument.defaultView ? n.ownerDocument.defaultView.getComputedStyle(n, null) : n.currentStyle,
               f = {};
            if (t && t.length && t[0] && t[t[0]])
               for (u = t.length; u--;) i = t[u], typeof t[i] == "string" && (f[r(i)] = t[i]);
            else
               for (i in t) typeof t[i] == "string" && (f[i] = t[i]);
            return f
         }

         function u(t, i) {
            var f = {},
               r, u;
            for (r in i) u = i[r], t[r] !== u && (e[r] || (n.fx.step[r] || !isNaN(parseFloat(u))) && (f[r] = u));
            return f
         }
         var f = ["add", "remove", "toggle"],
            e = {
               border: 1,
               borderBottom: 1,
               borderColor: 1,
               borderLeft: 1,
               borderRight: 1,
               borderTop: 1,
               borderWidth: 1,
               margin: 1,
               padding: 1
            };
         n.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, r) {
            n.fx.step[r] = function (n) {
               (n.end === "none" || n.setAttr) && (n.pos !== 1 || n.setAttr) || (i.style(n.elem, r, n.end), n.setAttr = !0)
            }
         });
         n.fn.addBack || (n.fn.addBack = function (n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
         });
         n.effects.animateClass = function (i, r, e, o) {
            var s = n.speed(r, e, o);
            return this.queue(function () {
               var e = n(this),
                  h = e.attr("class") || "",
                  o, r = s.children ? e.find("*").addBack() : e;
               r = r.map(function () {
                  var i = n(this);
                  return {
                     el: i,
                     start: t(this)
                  }
               });
               o = function () {
                  n.each(f, function (n, t) {
                     i[t] && e[t + "Class"](i[t])
                  })
               };
               o();
               r = r.map(function () {
                  return this.end = t(this.el[0]), this.diff = u(this.start, this.end), this
               });
               e.attr("class", h);
               r = r.map(function () {
                  var i = this,
                     t = n.Deferred(),
                     r = n.extend({}, s, {
                        queue: !1,
                        complete: function () {
                           t.resolve(i)
                        }
                     });
                  return this.el.animate(this.diff, r), t.promise()
               });
               n.when.apply(n, r.get()).done(function () {
                  o();
                  n.each(arguments, function () {
                     var t = this.el;
                     n.each(this.diff, function (n) {
                        t.css(n, "")
                     })
                  });
                  s.complete.call(e[0])
               })
            })
         };
         n.fn.extend({
            addClass: function (t) {
               return function (i, r, u, f) {
                  return r ? n.effects.animateClass.call(this, {
                     add: i
                  }, r, u, f) : t.apply(this, arguments)
               }
            }(n.fn.addClass),
            removeClass: function (t) {
               return function (i, r, u, f) {
                  return arguments.length > 1 ? n.effects.animateClass.call(this, {
                     remove: i
                  }, r, u, f) : t.apply(this, arguments)
               }
            }(n.fn.removeClass),
            toggleClass: function (t) {
               return function (i, r, u, f, e) {
                  return typeof r == "boolean" || r === undefined ? u ? n.effects.animateClass.call(this, r ? {
                     add: i
                  } : {
                     remove: i
                  }, u, f, e) : t.apply(this, arguments) : n.effects.animateClass.call(this, {
                     toggle: i
                  }, r, u, f)
               }
            }(n.fn.toggleClass),
            switchClass: function (t, i, r, u, f) {
               return n.effects.animateClass.call(this, {
                  add: i,
                  remove: t
               }, r, u, f)
            }
         })
      }(),
      function () {
         function t(t, i, r, u) {
            return n.isPlainObject(t) && (i = t, t = t.effect), t = {
               effect: t
            }, i == null && (i = {}), typeof i == "function" && (u = i, r = null, i = {}), (typeof i == "number" || n.fx.speeds[i]) && (u = r, r = i, i = {}), typeof r == "function" && (u = r, r = null), i && n.extend(t, i), r = r || i.duration, t.duration = n.fx.off ? 0 : typeof r == "number" ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default, t.complete = u || i.complete, t
         }

         function i(t) {
            return !t || typeof t == "number" || n.fx.speeds[t] ? !0 : typeof t == "string" && !n.effects.effect[t] ? !0 : typeof t == "function" ? !0 : typeof t == "object" && !t.effect ? !0 : !1
         }

         function r(n, t) {
            var r = t.outerWidth(),
               u = t.outerHeight(),
               i = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(n) || ["", 0, r, u, 0];
            return {
               top: parseFloat(i[1]) || 0,
               right: i[2] === "auto" ? r : parseFloat(i[2]),
               bottom: i[3] === "auto" ? u : parseFloat(i[3]),
               left: parseFloat(i[4]) || 0
            }
         }
         n.expr && n.expr.pseudos && n.expr.pseudos.animated && (n.expr.pseudos.animated = function (t) {
            return function (i) {
               return !!n(i).data(v) || t(i)
            }
         }(n.expr.pseudos.animated));
         n.uiBackCompat !== !1 && n.extend(n.effects, {
            save: function (n, t) {
               for (var i = 0, r = t.length; i < r; i++) t[i] !== null && n.data(s + t[i], n[0].style[t[i]])
            },
            restore: function (n, t) {
               for (var r, i = 0, u = t.length; i < u; i++) t[i] !== null && (r = n.data(s + t[i]), n.css(t[i], r))
            },
            setMode: function (n, t) {
               return t === "toggle" && (t = n.is(":hidden") ? "show" : "hide"), t
            },
            createWrapper: function (t) {
               if (t.parent().is(".ui-effects-wrapper")) return t.parent();
               var i = {
                     width: t.outerWidth(!0),
                     height: t.outerHeight(!0),
                     float: t.css("float")
                  },
                  u = n("<div><\/div>").addClass("ui-effects-wrapper").css({
                     fontSize: "100%",
                     background: "transparent",
                     border: "none",
                     margin: 0,
                     padding: 0
                  }),
                  f = {
                     width: t.width(),
                     height: t.height()
                  },
                  r = document.activeElement;
               try {
                  r.id
               } catch (e) {
                  r = document.body
               }
               return t.wrap(u), (t[0] === r || n.contains(t[0], r)) && n(r).trigger("focus"), u = t.parent(), t.css("position") === "static" ? (u.css({
                  position: "relative"
               }), t.css({
                  position: "relative"
               })) : (n.extend(i, {
                  position: t.css("position"),
                  zIndex: t.css("z-index")
               }), n.each(["top", "left", "bottom", "right"], function (n, r) {
                  i[r] = t.css(r);
                  isNaN(parseInt(i[r], 10)) && (i[r] = "auto")
               }), t.css({
                  position: "relative",
                  top: 0,
                  left: 0,
                  right: "auto",
                  bottom: "auto"
               })), t.css(f), u.css(i).show()
            },
            removeWrapper: function (t) {
               var i = document.activeElement;
               return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || n.contains(t[0], i)) && n(i).trigger("focus")), t
            }
         });
         n.extend(n.effects, {
            version: "1.13.1",
            define: function (t, i, r) {
               return r || (r = i, i = "effect"), n.effects.effect[t] = r, n.effects.effect[t].mode = i, r
            },
            scaledDimensions: function (n, t, i) {
               if (t === 0) return {
                  height: 0,
                  width: 0,
                  outerHeight: 0,
                  outerWidth: 0
               };
               var r = i !== "horizontal" ? (t || 100) / 100 : 1,
                  u = i !== "vertical" ? (t || 100) / 100 : 1;
               return {
                  height: n.height() * u,
                  width: n.width() * r,
                  outerHeight: n.outerHeight() * u,
                  outerWidth: n.outerWidth() * r
               }
            },
            clipToBox: function (n) {
               return {
                  width: n.clip.right - n.clip.left,
                  height: n.clip.bottom - n.clip.top,
                  left: n.clip.left,
                  top: n.clip.top
               }
            },
            unshift: function (n, t, i) {
               var r = n.queue();
               t > 1 && r.splice.apply(r, [1, 0].concat(r.splice(t, i)));
               n.dequeue()
            },
            saveStyle: function (n) {
               n.data(a, n[0].style.cssText)
            },
            restoreStyle: function (n) {
               n[0].style.cssText = n.data(a) || "";
               n.removeData(a)
            },
            mode: function (n, t) {
               var i = n.is(":hidden");
               return t === "toggle" && (t = i ? "show" : "hide"), (i ? t === "hide" : t === "show") && (t = "none"), t
            },
            getBaseline: function (n, t) {
               var i, r;
               switch (n[0]) {
                  case "top":
                     i = 0;
                     break;
                  case "middle":
                     i = .5;
                     break;
                  case "bottom":
                     i = 1;
                     break;
                  default:
                     i = n[0] / t.height
               }
               switch (n[1]) {
                  case "left":
                     r = 0;
                     break;
                  case "center":
                     r = .5;
                     break;
                  case "right":
                     r = 1;
                     break;
                  default:
                     r = n[1] / t.width
               }
               return {
                  x: r,
                  y: i
               }
            },
            createPlaceholder: function (t) {
               var i, r = t.css("position"),
                  u = t.position();
               return t.css({
                  marginTop: t.css("marginTop"),
                  marginBottom: t.css("marginBottom"),
                  marginLeft: t.css("marginLeft"),
                  marginRight: t.css("marginRight")
               }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(r) && (r = "absolute", i = n("<" + t[0].nodeName + ">").insertAfter(t).css({
                  display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                  visibility: "hidden",
                  marginTop: t.css("marginTop"),
                  marginBottom: t.css("marginBottom"),
                  marginLeft: t.css("marginLeft"),
                  marginRight: t.css("marginRight"),
                  float: t.css("float")
               }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), t.data(s + "placeholder", i)), t.css({
                  position: r,
                  left: u.left,
                  top: u.top
               }), i
            },
            removePlaceholder: function (n) {
               var t = s + "placeholder",
                  i = n.data(t);
               i && (i.remove(), n.removeData(t))
            },
            cleanUp: function (t) {
               n.effects.restoreStyle(t);
               n.effects.removePlaceholder(t)
            },
            setTransition: function (t, i, r, u) {
               return u = u || {}, n.each(i, function (n, i) {
                  var f = t.cssUnit(i);
                  f[0] > 0 && (u[i] = f[0] * r + f[1])
               }), u
            }
         });
         n.fn.extend({
            effect: function () {
               function o(t) {
                  function h() {
                     o.removeData(v);
                     n.effects.cleanUp(o);
                     i.mode === "hide" && o.hide();
                     s()
                  }

                  function s() {
                     typeof f == "function" && f.call(o[0]);
                     typeof t == "function" && t()
                  }
                  var o = n(this);
                  i.mode = c.shift();
                  n.uiBackCompat === !1 || u ? i.mode === "none" ? (o[r](), s()) : e.call(o[0], i, h) : (o.is(":hidden") ? r === "hide" : r === "show") ? (o[r](), s()) : e.call(o[0], i, s)
               }
               var i = t.apply(this, arguments),
                  e = n.effects.effect[i.effect],
                  u = e.mode,
                  s = i.queue,
                  h = s || "fx",
                  f = i.complete,
                  r = i.mode,
                  c = [],
                  l = function (t) {
                     var f = n(this),
                        i = n.effects.mode(f, r) || u;
                     f.data(v, !0);
                     c.push(i);
                     u && (i === "show" || i === u && i === "hide") && f.show();
                     u && i === "none" || n.effects.saveStyle(f);
                     typeof t == "function" && t()
                  };
               return n.fx.off || !e ? r ? this[r](i.duration, f) : this.each(function () {
                  f && f.call(this)
               }) : s === !1 ? this.each(l).each(o) : this.queue(h, l).queue(h, o)
            },
            show: function (n) {
               return function (r) {
                  if (i(r)) return n.apply(this, arguments);
                  var u = t.apply(this, arguments);
                  return u.mode = "show", this.effect.call(this, u)
               }
            }(n.fn.show),
            hide: function (n) {
               return function (r) {
                  if (i(r)) return n.apply(this, arguments);
                  var u = t.apply(this, arguments);
                  return u.mode = "hide", this.effect.call(this, u)
               }
            }(n.fn.hide),
            toggle: function (n) {
               return function (r) {
                  if (i(r) || typeof r == "boolean") return n.apply(this, arguments);
                  var u = t.apply(this, arguments);
                  return u.mode = "toggle", this.effect.call(this, u)
               }
            }(n.fn.toggle),
            cssUnit: function (t) {
               var i = this.css(t),
                  r = [];
               return n.each(["em", "px", "%", "pt"], function (n, t) {
                  i.indexOf(t) > 0 && (r = [parseFloat(i), t])
               }), r
            },
            cssClip: function (n) {
               return n ? this.css("clip", "rect(" + n.top + "px " + n.right + "px " + n.bottom + "px " + n.left + "px)") : r(this.css("clip"), this)
            },
            transfer: function (t, i) {
               var u = n(this),
                  r = n(t.to),
                  f = r.css("position") === "fixed",
                  e = n("body"),
                  o = f ? e.scrollTop() : 0,
                  s = f ? e.scrollLeft() : 0,
                  h = r.offset(),
                  a = {
                     top: h.top - o,
                     left: h.left - s,
                     height: r.innerHeight(),
                     width: r.innerWidth()
                  },
                  c = u.offset(),
                  l = n("<div class='ui-effects-transfer'><\/div>");
               l.appendTo("body").addClass(t.className).css({
                  top: c.top - o,
                  left: c.left - s,
                  height: u.innerHeight(),
                  width: u.innerWidth(),
                  position: f ? "fixed" : "absolute"
               }).animate(a, t.duration, t.easing, function () {
                  l.remove();
                  typeof i == "function" && i()
               })
            }
         });
         n.fx.step.clip = function (t) {
            t.clipInit || (t.start = n(t.elem).cssClip(), typeof t.end == "string" && (t.end = r(t.end, t.elem)), t.clipInit = !0);
            n(t.elem).cssClip({
               top: t.pos * (t.end.top - t.start.top) + t.start.top,
               right: t.pos * (t.end.right - t.start.right) + t.start.right,
               bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
               left: t.pos * (t.end.left - t.start.left) + t.start.left
            })
         }
      }(),
      function () {
         var t = {};
         n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (n, i) {
            t[i] = function (t) {
               return Math.pow(t, n + 2)
            }
         });
         n.extend(t, {
            Sine: function (n) {
               return 1 - Math.cos(n * Math.PI / 2)
            },
            Circ: function (n) {
               return 1 - Math.sqrt(1 - n * n)
            },
            Elastic: function (n) {
               return n === 0 || n === 1 ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin(((n - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function (n) {
               return n * n * (3 * n - 2)
            },
            Bounce: function (n) {
               for (var t, i = 4; n < ((t = Math.pow(2, --i)) - 1) / 11;);
               return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((t * 3 - 2) / 22 - n, 2)
            }
         });
         n.each(t, function (t, i) {
            n.easing["easeIn" + t] = i;
            n.easing["easeOut" + t] = function (n) {
               return 1 - i(1 - n)
            };
            n.easing["easeInOut" + t] = function (n) {
               return n < .5 ? i(n * 2) / 2 : 1 - i(n * -2 + 2) / 2
            }
         })
      }();
   c = n.effects;
   /*!
    * jQuery UI Effects Blind 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   g = n.effects.define("blind", "hide", function (t, i) {
      var e = {
            up: ["bottom", "top"],
            vertical: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            horizontal: ["right", "left"],
            right: ["left", "right"]
         },
         u = n(this),
         o = t.direction || "up",
         s = u.cssClip(),
         r = {
            clip: n.extend({}, s)
         },
         f = n.effects.createPlaceholder(u);
      r.clip[e[o][0]] = r.clip[e[o][1]];
      t.mode === "show" && (u.cssClip(r.clip), f && f.css(n.effects.clipToBox(r)), r.clip = s);
      f && f.animate(n.effects.clipToBox(r), t.duration, t.easing);
      u.animate(r, {
         queue: !1,
         duration: t.duration,
         easing: t.easing,
         complete: i
      })
   });
   /*!
    * jQuery UI Effects Bounce 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   nt = n.effects.define("bounce", function (t, i) {
      var e, o, a, u = n(this),
         p = t.mode,
         s = p === "hide",
         w = p === "show",
         h = t.direction || "up",
         r = t.distance,
         v = t.times || 5,
         b = v * 2 + (w || s ? 1 : 0),
         c = t.duration / b,
         l = t.easing,
         f = h === "up" || h === "down" ? "top" : "left",
         y = h === "up" || h === "left",
         k = 0,
         d = u.queue().length;
      for (n.effects.createPlaceholder(u), a = u.css(f), r || (r = u[f === "top" ? "outerHeight" : "outerWidth"]() / 3), w && (o = {
            opacity: 1
         }, o[f] = a, u.css("opacity", 0).css(f, y ? -r * 2 : r * 2).animate(o, c, l)), s && (r = r / Math.pow(2, v - 1)), o = {}, o[f] = a; k < v; k++) e = {}, e[f] = (y ? "-=" : "+=") + r, u.animate(e, c, l).animate(o, c, l), r = s ? r * 2 : r / 2;
      s && (e = {
         opacity: 0
      }, e[f] = (y ? "-=" : "+=") + r, u.animate(e, c, l));
      u.queue(i);
      n.effects.unshift(u, d, b + 1)
   });
   /*!
    * jQuery UI Effects Clip 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   tt = n.effects.define("clip", "hide", function (t, i) {
      var r, u = {},
         f = n(this),
         e = t.direction || "vertical",
         o = e === "both",
         s = o || e === "horizontal",
         h = o || e === "vertical";
      r = f.cssClip();
      u.clip = {
         top: h ? (r.bottom - r.top) / 2 : r.top,
         right: s ? (r.right - r.left) / 2 : r.right,
         bottom: h ? (r.bottom - r.top) / 2 : r.bottom,
         left: s ? (r.right - r.left) / 2 : r.left
      };
      n.effects.createPlaceholder(f);
      t.mode === "show" && (f.cssClip(u.clip), u.clip = r);
      f.animate(u, {
         queue: !1,
         duration: t.duration,
         easing: t.easing,
         complete: i
      })
   });
   /*!
    * jQuery UI Effects Drop 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   it = n.effects.define("drop", "hide", function (t, i) {
      var e, u = n(this),
         h = t.mode,
         c = h === "show",
         f = t.direction || "left",
         o = f === "up" || f === "down" ? "top" : "left",
         s = f === "up" || f === "left" ? "-=" : "+=",
         l = s === "+=" ? "-=" : "+=",
         r = {
            opacity: 0
         };
      n.effects.createPlaceholder(u);
      e = t.distance || u[o === "top" ? "outerHeight" : "outerWidth"](!0) / 2;
      r[o] = s + e;
      c && (u.css(r), r[o] = l + e, r.opacity = 1);
      u.animate(r, {
         queue: !1,
         duration: t.duration,
         easing: t.easing,
         complete: i
      })
   });
   /*!
    * jQuery UI Effects Explode 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   rt = n.effects.define("explode", "hide", function (t, i) {
      function b() {
         p.push(this);
         p.length === f * c && k()
      }

      function k() {
         e.css({
            visibility: "visible"
         });
         n(p).remove();
         i()
      }
      for (var r, l, a, v, y, f = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = f, e = n(this), d = t.mode, u = d === "show", w = e.show().css("visibility", "hidden").offset(), o = Math.ceil(e.outerWidth() / c), s = Math.ceil(e.outerHeight() / f), p = [], h = 0; h < f; h++)
         for (a = w.top + h * s, y = h - (f - 1) / 2, r = 0; r < c; r++) l = w.left + r * o, v = r - (c - 1) / 2, e.clone().appendTo("body").wrap("<div><\/div>").css({
            position: "absolute",
            visibility: "visible",
            left: -r * o,
            top: -h * s
         }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: o,
            height: s,
            left: l + (u ? v * o : 0),
            top: a + (u ? y * s : 0),
            opacity: u ? 0 : 1
         }).animate({
            left: l + (u ? 0 : v * o),
            top: a + (u ? 0 : y * s),
            opacity: u ? 1 : 0
         }, t.duration || 500, t.easing, b)
   });
   /*!
    * jQuery UI Effects Fade 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   ut = n.effects.define("fade", "toggle", function (t, i) {
      var r = t.mode === "show";
      n(this).css("opacity", r ? 0 : 1).animate({
         opacity: r ? 1 : 0
      }, {
         queue: !1,
         duration: t.duration,
         easing: t.easing,
         complete: i
      })
   });
   /*!
    * jQuery UI Effects Fold 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   ft = n.effects.define("fold", "hide", function (t, i) {
      var u = n(this),
         l = t.mode,
         v = l === "show",
         y = l === "hide",
         o = t.size || 15,
         a = /([0-9]+)%/.exec(o),
         p = !!t.horizFirst,
         f = p ? ["right", "bottom"] : ["bottom", "right"],
         s = t.duration / 2,
         h = n.effects.createPlaceholder(u),
         e = u.cssClip(),
         c = {
            clip: n.extend({}, e)
         },
         r = {
            clip: n.extend({}, e)
         },
         w = [e[f[0]], e[f[1]]],
         b = u.queue().length;
      a && (o = parseInt(a[1], 10) / 100 * w[y ? 0 : 1]);
      c.clip[f[0]] = o;
      r.clip[f[0]] = o;
      r.clip[f[1]] = 0;
      v && (u.cssClip(r.clip), h && h.css(n.effects.clipToBox(r)), r.clip = e);
      u.queue(function (i) {
         h && h.animate(n.effects.clipToBox(c), s, t.easing).animate(n.effects.clipToBox(r), s, t.easing);
         i()
      }).animate(c, s, t.easing).animate(r, s, t.easing).queue(i);
      n.effects.unshift(u, b, 4)
   });
   /*!
    * jQuery UI Effects Highlight 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   et = n.effects.define("highlight", "show", function (t, i) {
      var r = n(this),
         u = {
            backgroundColor: r.css("backgroundColor")
         };
      t.mode === "hide" && (u.opacity = 0);
      n.effects.saveStyle(r);
      r.css({
         backgroundImage: "none",
         backgroundColor: t.color || "#ffff99"
      }).animate(u, {
         queue: !1,
         duration: t.duration,
         easing: t.easing,
         complete: i
      })
   });
   /*!
    * jQuery UI Effects Size 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   ot = n.effects.define("size", function (t, i) {
      var l, r, p, u = n(this),
         v = ["fontSize"],
         s = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
         h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
         w = t.mode,
         y = w !== "effect",
         c = t.scale || "both",
         b = t.origin || ["middle", "center"],
         k = u.css("position"),
         a = u.position(),
         o = n.effects.scaledDimensions(u),
         f = t.from || o,
         e = t.to || n.effects.scaledDimensions(u, 0);
      n.effects.createPlaceholder(u);
      w === "show" && (p = f, f = e, e = p);
      r = {
         from: {
            y: f.height / o.height,
            x: f.width / o.width
         },
         to: {
            y: e.height / o.height,
            x: e.width / o.width
         }
      };
      (c === "box" || c === "both") && (r.from.y !== r.to.y && (f = n.effects.setTransition(u, s, r.from.y, f), e = n.effects.setTransition(u, s, r.to.y, e)), r.from.x !== r.to.x && (f = n.effects.setTransition(u, h, r.from.x, f), e = n.effects.setTransition(u, h, r.to.x, e)));
      (c === "content" || c === "both") && r.from.y !== r.to.y && (f = n.effects.setTransition(u, v, r.from.y, f), e = n.effects.setTransition(u, v, r.to.y, e));
      b && (l = n.effects.getBaseline(b, o), f.top = (o.outerHeight - f.outerHeight) * l.y + a.top, f.left = (o.outerWidth - f.outerWidth) * l.x + a.left, e.top = (o.outerHeight - e.outerHeight) * l.y + a.top, e.left = (o.outerWidth - e.outerWidth) * l.x + a.left);
      delete f.outerHeight;
      delete f.outerWidth;
      u.css(f);
      (c === "content" || c === "both") && (s = s.concat(["marginTop", "marginBottom"]).concat(v), h = h.concat(["marginLeft", "marginRight"]), u.find("*[width]").each(function () {
         var i = n(this),
            u = n.effects.scaledDimensions(i),
            f = {
               height: u.height * r.from.y,
               width: u.width * r.from.x,
               outerHeight: u.outerHeight * r.from.y,
               outerWidth: u.outerWidth * r.from.x
            },
            e = {
               height: u.height * r.to.y,
               width: u.width * r.to.x,
               outerHeight: u.height * r.to.y,
               outerWidth: u.width * r.to.x
            };
         r.from.y !== r.to.y && (f = n.effects.setTransition(i, s, r.from.y, f), e = n.effects.setTransition(i, s, r.to.y, e));
         r.from.x !== r.to.x && (f = n.effects.setTransition(i, h, r.from.x, f), e = n.effects.setTransition(i, h, r.to.x, e));
         y && n.effects.saveStyle(i);
         i.css(f);
         i.animate(e, t.duration, t.easing, function () {
            y && n.effects.restoreStyle(i)
         })
      }));
      u.animate(e, {
         queue: !1,
         duration: t.duration,
         easing: t.easing,
         complete: function () {
            var t = u.offset();
            e.opacity === 0 && u.css("opacity", f.opacity);
            y || (u.css("position", k === "static" ? "relative" : k).offset(t), n.effects.saveStyle(u));
            i()
         }
      })
   });
   /*!
    * jQuery UI Effects Scale 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   st = n.effects.define("scale", function (t, i) {
      var u = n(this),
         f = t.mode,
         e = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : f !== "effect" ? 0 : 100),
         r = n.extend(!0, {
            from: n.effects.scaledDimensions(u),
            to: n.effects.scaledDimensions(u, e, t.direction || "both"),
            origin: t.origin || ["middle", "center"]
         }, t);
      t.fade && (r.from.opacity = 1, r.to.opacity = 0);
      n.effects.effect.size.call(this, r, i)
   });
   /*!
    * jQuery UI Effects Puff 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   ht = n.effects.define("puff", "hide", function (t, i) {
      var r = n.extend(!0, {}, t, {
         fade: !0,
         percent: parseInt(t.percent, 10) || 150
      });
      n.effects.effect.scale.call(this, r, i)
   });
   /*!
    * jQuery UI Effects Pulsate 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   ct = n.effects.define("pulsate", "show", function (t, i) {
      var r = n(this),
         e = t.mode,
         o = e === "show",
         c = e === "hide",
         l = o || c,
         f = (t.times || 5) * 2 + (l ? 1 : 0),
         s = t.duration / f,
         u = 0,
         h = 1,
         a = r.queue().length;
      for ((o || !r.is(":visible")) && (r.css("opacity", 0).show(), u = 1); h < f; h++) r.animate({
         opacity: u
      }, s, t.easing), u = 1 - u;
      r.animate({
         opacity: u
      }, s, t.easing);
      r.queue(i);
      n.effects.unshift(r, a, f + 1)
   });
   /*!
    * jQuery UI Effects Shake 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   lt = n.effects.define("shake", function (t, i) {
      var l = 1,
         r = n(this),
         f = t.direction || "left",
         e = t.distance || 20,
         a = t.times || 3,
         v = a * 2 + 1,
         u = Math.round(t.duration / v),
         o = f === "up" || f === "down" ? "top" : "left",
         s = f === "up" || f === "left",
         h = {},
         c = {},
         y = {},
         p = r.queue().length;
      for (n.effects.createPlaceholder(r), h[o] = (s ? "-=" : "+=") + e, c[o] = (s ? "+=" : "-=") + e * 2, y[o] = (s ? "-=" : "+=") + e * 2, r.animate(h, u, t.easing); l < a; l++) r.animate(c, u, t.easing).animate(y, u, t.easing);
      r.animate(c, u, t.easing).animate(h, u / 2, t.easing).queue(i);
      n.effects.unshift(r, p, v + 1)
   });
   /*!
    * jQuery UI Effects Slide 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   at = n.effects.define("slide", "show", function (t, i) {
      var s, o, u = n(this),
         h = {
            up: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            right: ["left", "right"]
         },
         c = t.mode,
         f = t.direction || "left",
         e = f === "up" || f === "down" ? "top" : "left",
         l = f === "up" || f === "left",
         a = t.distance || u[e === "top" ? "outerHeight" : "outerWidth"](!0),
         r = {};
      n.effects.createPlaceholder(u);
      s = u.cssClip();
      o = u.position()[e];
      r[e] = (l ? -1 : 1) * a + o;
      r.clip = u.cssClip();
      r.clip[h[f][1]] = r.clip[h[f][0]];
      c === "show" && (u.cssClip(r.clip), u.css(e, r[e]), r.clip = s, r[e] = o);
      u.animate(r, {
         queue: !1,
         duration: t.duration,
         easing: t.easing,
         complete: i
      })
   });
   /*!
    * jQuery UI Effects Transfer 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   n.uiBackCompat !== !1 && (c = n.effects.define("transfer", function (t, i) {
      n(this).transfer(t, i)
   }));
   vt = c;
   /*!
    * jQuery UI Keycode 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   yt = n.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
   };
   /*!
    * jQuery UI Position 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    *
    * http://api.jqueryui.com/position/
    */
   (function () {
      function f(n, t, i) {
         return [parseFloat(n[0]) * (l.test(n[0]) ? t / 100 : 1), parseFloat(n[1]) * (l.test(n[1]) ? i / 100 : 1)]
      }

      function i(t, i) {
         return parseInt(n.css(t, i), 10) || 0
      }

      function e(n) {
         return n != null && n === n.window
      }

      function a(n) {
         var t = n[0];
         return t.nodeType === 9 ? {
            width: n.width(),
            height: n.height(),
            offset: {
               top: 0,
               left: 0
            }
         } : e(t) ? {
            width: n.width(),
            height: n.height(),
            offset: {
               top: n.scrollTop(),
               left: n.scrollLeft()
            }
         } : t.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
               top: t.pageY,
               left: t.pageX
            }
         } : {
            width: n.outerWidth(),
            height: n.outerHeight(),
            offset: n.offset()
         }
      }
      var u, r = Math.max,
         t = Math.abs,
         o = /left|center|right/,
         s = /top|center|bottom/,
         h = /[\+\-]\d+(\.[\d]+)?%?/,
         c = /^\w+/,
         l = /%$/,
         v = n.fn.position;
      n.position = {
         scrollbarWidth: function () {
            if (u !== undefined) return u;
            var r, i, t = n("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'><\/div><\/div>"),
               f = t.children()[0];
            return n("body").append(t), r = f.offsetWidth, t.css("overflow", "scroll"), i = f.offsetWidth, r === i && (i = t[0].clientWidth), t.remove(), u = r - i
         },
         getScrollInfo: function (t) {
            var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
               r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
               u = i === "scroll" || i === "auto" && t.width < t.element[0].scrollWidth,
               f = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
            return {
               width: f ? n.position.scrollbarWidth() : 0,
               height: u ? n.position.scrollbarWidth() : 0
            }
         },
         getWithinInfo: function (t) {
            var i = n(t || window),
               r = e(i[0]),
               u = !!i[0] && i[0].nodeType === 9,
               f = !r && !u;
            return {
               element: i,
               isWindow: r,
               isDocument: u,
               offset: f ? n(t).offset() : {
                  left: 0,
                  top: 0
               },
               scrollLeft: i.scrollLeft(),
               scrollTop: i.scrollTop(),
               width: i.outerWidth(),
               height: i.outerHeight()
            }
         }
      };
      n.fn.position = function (u) {
         if (!u || !u.of) return v.apply(this, arguments);
         u = n.extend({}, u);
         var w, e, l, p, y, k, d = typeof u.of == "string" ? n(document).find(u.of) : n(u.of),
            nt = n.position.getWithinInfo(u.within),
            tt = n.position.getScrollInfo(nt),
            b = (u.collision || "flip").split(" "),
            g = {};
         return k = a(d), d[0].preventDefault && (u.at = "left top"), e = k.width, l = k.height, p = k.offset, y = n.extend({}, p), n.each(["my", "at"], function () {
            var n = (u[this] || "").split(" "),
               t, i;
            n.length === 1 && (n = o.test(n[0]) ? n.concat(["center"]) : s.test(n[0]) ? ["center"].concat(n) : ["center", "center"]);
            n[0] = o.test(n[0]) ? n[0] : "center";
            n[1] = s.test(n[1]) ? n[1] : "center";
            t = h.exec(n[0]);
            i = h.exec(n[1]);
            g[this] = [t ? t[0] : 0, i ? i[0] : 0];
            u[this] = [c.exec(n[0])[0], c.exec(n[1])[0]]
         }), b.length === 1 && (b[1] = b[0]), u.at[0] === "right" ? y.left += e : u.at[0] === "center" && (y.left += e / 2), u.at[1] === "bottom" ? y.top += l : u.at[1] === "center" && (y.top += l / 2), w = f(g.at, e, l), y.left += w[0], y.top += w[1], this.each(function () {
            var v, k, s = n(this),
               h = s.outerWidth(),
               c = s.outerHeight(),
               it = i(this, "marginLeft"),
               rt = i(this, "marginTop"),
               ut = h + it + i(this, "marginRight") + tt.width,
               ft = c + rt + i(this, "marginBottom") + tt.height,
               o = n.extend({}, y),
               a = f(g.my, s.outerWidth(), s.outerHeight());
            u.my[0] === "right" ? o.left -= h : u.my[0] === "center" && (o.left -= h / 2);
            u.my[1] === "bottom" ? o.top -= c : u.my[1] === "center" && (o.top -= c / 2);
            o.left += a[0];
            o.top += a[1];
            v = {
               marginLeft: it,
               marginTop: rt
            };
            n.each(["left", "top"], function (t, i) {
               n.ui.position[b[t]] && n.ui.position[b[t]][i](o, {
                  targetWidth: e,
                  targetHeight: l,
                  elemWidth: h,
                  elemHeight: c,
                  collisionPosition: v,
                  collisionWidth: ut,
                  collisionHeight: ft,
                  offset: [w[0] + a[0], w[1] + a[1]],
                  my: u.my,
                  at: u.at,
                  within: nt,
                  elem: s
               })
            });
            u.using && (k = function (n) {
               var i = p.left - o.left,
                  v = i + e - h,
                  f = p.top - o.top,
                  y = f + l - c,
                  a = {
                     target: {
                        element: d,
                        left: p.left,
                        top: p.top,
                        width: e,
                        height: l
                     },
                     element: {
                        element: s,
                        left: o.left,
                        top: o.top,
                        width: h,
                        height: c
                     },
                     horizontal: v < 0 ? "left" : i > 0 ? "right" : "center",
                     vertical: y < 0 ? "top" : f > 0 ? "bottom" : "middle"
                  };
               e < h && t(i + v) < e && (a.horizontal = "center");
               l < c && t(f + y) < l && (a.vertical = "middle");
               a.important = r(t(i), t(v)) > r(t(f), t(y)) ? "horizontal" : "vertical";
               u.using.call(this, n, a)
            });
            s.offset(n.extend(o, {
               using: k
            }))
         })
      };
      n.ui.position = {
         fit: {
            left: function (n, t) {
               var e = t.within,
                  u = e.isWindow ? e.scrollLeft : e.offset.left,
                  o = e.width,
                  s = n.left - t.collisionPosition.marginLeft,
                  i = u - s,
                  f = s + t.collisionWidth - o - u,
                  h;
               t.collisionWidth > o ? i > 0 && f <= 0 ? (h = n.left + i + t.collisionWidth - o - u, n.left += i - h) : n.left = f > 0 && i <= 0 ? u : i > f ? u + o - t.collisionWidth : u : i > 0 ? n.left += i : f > 0 ? n.left -= f : n.left = r(n.left - s, n.left)
            },
            top: function (n, t) {
               var o = t.within,
                  u = o.isWindow ? o.scrollTop : o.offset.top,
                  e = t.within.height,
                  s = n.top - t.collisionPosition.marginTop,
                  i = u - s,
                  f = s + t.collisionHeight - e - u,
                  h;
               t.collisionHeight > e ? i > 0 && f <= 0 ? (h = n.top + i + t.collisionHeight - e - u, n.top += i - h) : n.top = f > 0 && i <= 0 ? u : i > f ? u + e - t.collisionHeight : u : i > 0 ? n.top += i : f > 0 ? n.top -= f : n.top = r(n.top - s, n.top)
            }
         },
         flip: {
            left: function (n, i) {
               var r = i.within,
                  y = r.offset.left + r.scrollLeft,
                  c = r.width,
                  o = r.isWindow ? r.scrollLeft : r.offset.left,
                  l = n.left - i.collisionPosition.marginLeft,
                  a = l - o,
                  v = l + i.collisionWidth - c - o,
                  u = i.my[0] === "left" ? -i.elemWidth : i.my[0] === "right" ? i.elemWidth : 0,
                  f = i.at[0] === "left" ? i.targetWidth : i.at[0] === "right" ? -i.targetWidth : 0,
                  e = -2 * i.offset[0],
                  s, h;
               a < 0 ? (s = n.left + u + f + e + i.collisionWidth - c - y, (s < 0 || s < t(a)) && (n.left += u + f + e)) : v > 0 && (h = n.left - i.collisionPosition.marginLeft + u + f + e - o, (h > 0 || t(h) < v) && (n.left += u + f + e))
            },
            top: function (n, i) {
               var r = i.within,
                  y = r.offset.top + r.scrollTop,
                  c = r.height,
                  o = r.isWindow ? r.scrollTop : r.offset.top,
                  l = n.top - i.collisionPosition.marginTop,
                  a = l - o,
                  v = l + i.collisionHeight - c - o,
                  p = i.my[1] === "top",
                  u = p ? -i.elemHeight : i.my[1] === "bottom" ? i.elemHeight : 0,
                  f = i.at[1] === "top" ? i.targetHeight : i.at[1] === "bottom" ? -i.targetHeight : 0,
                  e = -2 * i.offset[1],
                  s, h;
               a < 0 ? (h = n.top + u + f + e + i.collisionHeight - c - y, (h < 0 || h < t(a)) && (n.top += u + f + e)) : v > 0 && (s = n.top - i.collisionPosition.marginTop + u + f + e - o, (s > 0 || t(s) < v) && (n.top += u + f + e))
            }
         },
         flipfit: {
            left: function () {
               n.ui.position.flip.left.apply(this, arguments);
               n.ui.position.fit.left.apply(this, arguments)
            },
            top: function () {
               n.ui.position.flip.top.apply(this, arguments);
               n.ui.position.fit.top.apply(this, arguments)
            }
         }
      }
   })();
   pt = n.ui.position;
   /*!
    * jQuery UI Unique ID 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   wt = n.fn.extend({
      uniqueId: function () {
         var n = 0;
         return function () {
            return this.each(function () {
               this.id || (this.id = "ui-id-" + ++n)
            })
         }
      }(),
      removeUniqueId: function () {
         return this.each(function () {
            /^ui-id-\d+$/.test(this.id) && n(this).removeAttr("id")
         })
      }
   });
   /*!
    * jQuery UI Widget 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   var ri = 0,
      ui = Array.prototype.hasOwnProperty,
      k = Array.prototype.slice;
   n.cleanData = function (t) {
      return function (i) {
         for (var r, u, f = 0;
            (u = i[f]) != null; f++) r = n._data(u, "events"), r && r.remove && n(u).triggerHandler("remove");
         t(i)
      }
   }(n.cleanData);
   n.widget = function (t, i, r) {
      var f, u, o, h = {},
         e = t.split(".")[0],
         s;
      return t = t.split(".")[1], s = e + "-" + t, r || (r = i, i = n.Widget), Array.isArray(r) && (r = n.extend.apply(null, [{}].concat(r))), n.expr.pseudos[s.toLowerCase()] = function (t) {
         return !!n.data(t, s)
      }, n[e] = n[e] || {}, f = n[e][t], u = n[e][t] = function (n, t) {
         if (!this || !this._createWidget) return new u(n, t);
         arguments.length && this._createWidget(n, t)
      }, n.extend(u, f, {
         version: r.version,
         _proto: n.extend({}, r),
         _childConstructors: []
      }), o = new i, o.options = n.widget.extend({}, o.options), n.each(r, function (n, t) {
         if (typeof t != "function") {
            h[n] = t;
            return
         }
         h[n] = function () {
            function r() {
               return i.prototype[n].apply(this, arguments)
            }

            function u(t) {
               return i.prototype[n].apply(this, t)
            }
            return function () {
               var i = this._super,
                  f = this._superApply,
                  n;
               return this._super = r, this._superApply = u, n = t.apply(this, arguments), this._super = i, this._superApply = f, n
            }
         }()
      }), u.prototype = n.widget.extend(o, {
         widgetEventPrefix: f ? o.widgetEventPrefix || t : t
      }, h, {
         constructor: u,
         namespace: e,
         widgetName: t,
         widgetFullName: s
      }), f ? (n.each(f._childConstructors, function (t, i) {
         var r = i.prototype;
         n.widget(r.namespace + "." + r.widgetName, u, i._proto)
      }), delete f._childConstructors) : i._childConstructors.push(u), n.widget.bridge(t, u), u
   };
   n.widget.extend = function (t) {
      for (var f = k.call(arguments, 1), u = 0, e = f.length, i, r; u < e; u++)
         for (i in f[u]) r = f[u][i], ui.call(f[u], i) && r !== undefined && (t[i] = n.isPlainObject(r) ? n.isPlainObject(t[i]) ? n.widget.extend({}, t[i], r) : n.widget.extend({}, r) : r);
      return t
   };
   n.widget.bridge = function (t, i) {
      var r = i.prototype.widgetFullName || t;
      n.fn[t] = function (u) {
         var o = typeof u == "string",
            e = k.call(arguments, 1),
            f = this;
         return o ? this.length || u !== "instance" ? this.each(function () {
            var i, o = n.data(this, r);
            return u === "instance" ? (f = o, !1) : o ? typeof o[u] != "function" || u.charAt(0) === "_" ? n.error("no such method '" + u + "' for " + t + " widget instance") : (i = o[u].apply(o, e), i !== o && i !== undefined ? (f = i && i.jquery ? f.pushStack(i.get()) : i, !1) : void 0) : n.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + u + "'")
         }) : f = undefined : (e.length && (u = n.widget.extend.apply(null, [u].concat(e))), this.each(function () {
            var t = n.data(this, r);
            t ? (t.option(u || {}), t._init && t._init()) : n.data(this, r, new i(u, this))
         })), f
      }
   };
   n.Widget = function () {};
   n.Widget._childConstructors = [];
   n.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: {
         classes: {},
         disabled: !1,
         create: null
      },
      _createWidget: function (t, i) {
         i = n(i || this.defaultElement || this)[0];
         this.element = n(i);
         this.uuid = ri++;
         this.eventNamespace = "." + this.widgetName + this.uuid;
         this.bindings = n();
         this.hoverable = n();
         this.focusable = n();
         this.classesElementLookup = {};
         i !== this && (n.data(i, this.widgetFullName, this), this._on(!0, this.element, {
            remove: function (n) {
               n.target === i && this.destroy()
            }
         }), this.document = n(i.style ? i.ownerDocument : i.document || i), this.window = n(this.document[0].defaultView || this.document[0].parentWindow));
         this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t);
         this._create();
         this.options.disabled && this._setOptionDisabled(this.options.disabled);
         this._trigger("create", null, this._getCreateEventData());
         this._init()
      },
      _getCreateOptions: function () {
         return {}
      },
      _getCreateEventData: n.noop,
      _create: n.noop,
      _init: n.noop,
      destroy: function () {
         var t = this;
         this._destroy();
         n.each(this.classesElementLookup, function (n, i) {
            t._removeClass(i, n)
         });
         this.element.off(this.eventNamespace).removeData(this.widgetFullName);
         this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
         this.bindings.off(this.eventNamespace)
      },
      _destroy: n.noop,
      widget: function () {
         return this.element
      },
      option: function (t, i) {
         var e = t,
            r, u, f;
         if (arguments.length === 0) return n.widget.extend({}, this.options);
         if (typeof t == "string")
            if (e = {}, r = t.split("."), t = r.shift(), r.length) {
               for (u = e[t] = n.widget.extend({}, this.options[t]), f = 0; f < r.length - 1; f++) u[r[f]] = u[r[f]] || {}, u = u[r[f]];
               if (t = r.pop(), arguments.length === 1) return u[t] === undefined ? null : u[t];
               u[t] = i
            } else {
               if (arguments.length === 1) return this.options[t] === undefined ? null : this.options[t];
               e[t] = i
            } return this._setOptions(e), this
      },
      _setOptions: function (n) {
         for (var t in n) this._setOption(t, n[t]);
         return this
      },
      _setOption: function (n, t) {
         return n === "classes" && this._setOptionClasses(t), this.options[n] = t, n === "disabled" && this._setOptionDisabled(t), this
      },
      _setOptionClasses: function (t) {
         var i, u, r;
         for (i in t)(r = this.classesElementLookup[i], t[i] !== this.options.classes[i] && r && r.length) && (u = n(r.get()), this._removeClass(r, i), u.addClass(this._classes({
            element: u,
            keys: i,
            classes: t,
            add: !0
         })))
      },
      _setOptionDisabled: function (n) {
         this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!n);
         n && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
      },
      enable: function () {
         return this._setOptions({
            disabled: !1
         })
      },
      disable: function () {
         return this._setOptions({
            disabled: !0
         })
      },
      _classes: function (t) {
         function f() {
            var r = [];
            t.element.each(function (t, u) {
               var f = n.map(i.classesElementLookup, function (n) {
                  return n
               }).some(function (n) {
                  return n.is(u)
               });
               f || r.push(u)
            });
            i._on(n(r), {
               remove: "_untrackClassesElement"
            })
         }

         function u(u, e) {
            for (var s, o = 0; o < u.length; o++) s = i.classesElementLookup[u[o]] || n(), t.add ? (f(), s = n(n.uniqueSort(s.get().concat(t.element.get())))) : s = n(s.not(t.element).get()), i.classesElementLookup[u[o]] = s, r.push(u[o]), e && t.classes[u[o]] && r.push(t.classes[u[o]])
         }
         var r = [],
            i = this;
         return t = n.extend({
            element: this.element,
            classes: this.options.classes || {}
         }, t), t.keys && u(t.keys.match(/\S+/g) || [], !0), t.extra && u(t.extra.match(/\S+/g) || []), r.join(" ")
      },
      _untrackClassesElement: function (t) {
         var i = this;
         n.each(i.classesElementLookup, function (r, u) {
            n.inArray(t.target, u) !== -1 && (i.classesElementLookup[r] = n(u.not(t.target).get()))
         });
         this._off(n(t.target))
      },
      _removeClass: function (n, t, i) {
         return this._toggleClass(n, t, i, !1)
      },
      _addClass: function (n, t, i) {
         return this._toggleClass(n, t, i, !0)
      },
      _toggleClass: function (n, t, i, r) {
         r = typeof r == "boolean" ? r : i;
         var u = typeof n == "string" || n === null,
            f = {
               extra: u ? t : i,
               keys: u ? n : t,
               element: u ? this.element : n,
               add: r
            };
         return f.element.toggleClass(this._classes(f), r), this
      },
      _on: function (t, i, r) {
         var f, u = this;
         typeof t != "boolean" && (r = i, i = t, t = !1);
         r ? (i = f = n(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, f = this.widget());
         n.each(r, function (r, e) {
            function o() {
               if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled")) return (typeof e == "string" ? u[e] : e).apply(u, arguments)
            }
            typeof e != "string" && (o.guid = e.guid = e.guid || o.guid || n.guid++);
            var s = r.match(/^([\w:-]*)\s*(.*)$/),
               h = s[1] + u.eventNamespace,
               c = s[2];
            if (c) f.on(h, c, o);
            else i.on(h, o)
         })
      },
      _off: function (t, i) {
         i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
         t.off(i);
         this.bindings = n(this.bindings.not(t).get());
         this.focusable = n(this.focusable.not(t).get());
         this.hoverable = n(this.hoverable.not(t).get())
      },
      _delay: function (n, t) {
         function r() {
            return (typeof n == "string" ? i[n] : n).apply(i, arguments)
         }
         var i = this;
         return setTimeout(r, t || 0)
      },
      _hoverable: function (t) {
         this.hoverable = this.hoverable.add(t);
         this._on(t, {
            mouseenter: function (t) {
               this._addClass(n(t.currentTarget), null, "ui-state-hover")
            },
            mouseleave: function (t) {
               this._removeClass(n(t.currentTarget), null, "ui-state-hover")
            }
         })
      },
      _focusable: function (t) {
         this.focusable = this.focusable.add(t);
         this._on(t, {
            focusin: function (t) {
               this._addClass(n(t.currentTarget), null, "ui-state-focus")
            },
            focusout: function (t) {
               this._removeClass(n(t.currentTarget), null, "ui-state-focus")
            }
         })
      },
      _trigger: function (t, i, r) {
         var u, f, e = this.options[t];
         if (r = r || {}, i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent, f)
            for (u in f) u in i || (i[u] = f[u]);
         return this.element.trigger(i, r), !(typeof e == "function" && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
      }
   };
   n.each({
      show: "fadeIn",
      hide: "fadeOut"
   }, function (t, i) {
      n.Widget.prototype["_" + t] = function (r, u, f) {
         typeof u == "string" && (u = {
            effect: u
         });
         var o, e = u ? u === !0 || typeof u == "number" ? i : u.effect || i : t;
         u = u || {};
         typeof u == "number" ? u = {
            duration: u
         } : u === !0 && (u = {});
         o = !n.isEmptyObject(u);
         u.complete = f;
         u.delay && r.delay(u.delay);
         o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function (i) {
            n(this)[t]();
            f && f.call(r[0]);
            i()
         })
      }
   });
   bt = n.widget;
   kt = n.ui.safeActiveElement = function (n) {
      var t;
      try {
         t = n.activeElement
      } catch (i) {
         t = n.body
      }
      return t || (t = n.body), t.nodeName || (t = n.body), t
   };
   /*!
    * jQuery UI Menu 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   dt = n.widget("ui.menu", {
      version: "1.13.1",
      defaultElement: "<ul>",
      delay: 300,
      options: {
         icons: {
            submenu: "ui-icon-caret-1-e"
         },
         items: "> *",
         menus: "ul",
         position: {
            my: "left top",
            at: "right top"
         },
         role: "menu",
         blur: null,
         focus: null,
         select: null
      },
      _create: function () {
         this.activeMenu = this.element;
         this.mouseHandled = !1;
         this.lastMousePosition = {
            x: null,
            y: null
         };
         this.element.uniqueId().attr({
            role: this.options.role,
            tabIndex: 0
         });
         this._addClass("ui-menu", "ui-widget ui-widget-content");
         this._on({
            "mousedown .ui-menu-item": function (n) {
               n.preventDefault();
               this._activateItem(n)
            },
            "click .ui-menu-item": function (t) {
               var i = n(t.target),
                  r = n(n.ui.safeActiveElement(this.document[0]));
               !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && r.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
            },
            "mouseenter .ui-menu-item": "_activateItem",
            "mousemove .ui-menu-item": "_activateItem",
            mouseleave: "collapseAll",
            "mouseleave .ui-menu": "collapseAll",
            focus: function (n, t) {
               var i = this.active || this._menuItems().first();
               t || this.focus(n, i)
            },
            blur: function (t) {
               this._delay(function () {
                  var i = !n.contains(this.element[0], n.ui.safeActiveElement(this.document[0]));
                  i && this.collapseAll(t)
               })
            },
            keydown: "_keydown"
         });
         this.refresh();
         this._on(this.document, {
            click: function (n) {
               this._closeOnDocumentClick(n) && this.collapseAll(n, !0);
               this.mouseHandled = !1
            }
         })
      },
      _activateItem: function (t) {
         if (!this.previousFilter && (t.clientX !== this.lastMousePosition.x || t.clientY !== this.lastMousePosition.y)) {
            this.lastMousePosition = {
               x: t.clientX,
               y: t.clientY
            };
            var r = n(t.target).closest(".ui-menu-item"),
               i = n(t.currentTarget);
            r[0] === i[0] && (i.is(".ui-state-active") || (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, i)))
         }
      },
      _destroy: function () {
         var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
            i = t.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
         this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show();
         i.children().each(function () {
            var t = n(this);
            t.data("ui-menu-submenu-caret") && t.remove()
         })
      },
      _keydown: function (t) {
         var i, u, r, f, e = !0;
         switch (t.keyCode) {
            case n.ui.keyCode.PAGE_UP:
               this.previousPage(t);
               break;
            case n.ui.keyCode.PAGE_DOWN:
               this.nextPage(t);
               break;
            case n.ui.keyCode.HOME:
               this._move("first", "first", t);
               break;
            case n.ui.keyCode.END:
               this._move("last", "last", t);
               break;
            case n.ui.keyCode.UP:
               this.previous(t);
               break;
            case n.ui.keyCode.DOWN:
               this.next(t);
               break;
            case n.ui.keyCode.LEFT:
               this.collapse(t);
               break;
            case n.ui.keyCode.RIGHT:
               this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
               break;
            case n.ui.keyCode.ENTER:
            case n.ui.keyCode.SPACE:
               this._activate(t);
               break;
            case n.ui.keyCode.ESCAPE:
               this.collapse(t);
               break;
            default:
               e = !1;
               u = this.previousFilter || "";
               f = !1;
               r = t.keyCode >= 96 && t.keyCode <= 105 ? (t.keyCode - 96).toString() : String.fromCharCode(t.keyCode);
               clearTimeout(this.filterTimer);
               r === u ? f = !0 : r = u + r;
               i = this._filterMenuItems(r);
               i = f && i.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : i;
               i.length || (r = String.fromCharCode(t.keyCode), i = this._filterMenuItems(r));
               i.length ? (this.focus(t, i), this.previousFilter = r, this.filterTimer = this._delay(function () {
                  delete this.previousFilter
               }, 1e3)) : delete this.previousFilter
         }
         e && t.preventDefault()
      },
      _activate: function (n) {
         this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(n) : this.select(n))
      },
      refresh: function () {
         var u, t, f, i, e, r = this,
            s = this.options.icons.submenu,
            o = this.element.find(this.options.menus);
         this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length);
         f = o.filter(":not(.ui-menu)").hide().attr({
            role: this.options.role,
            "aria-hidden": "true",
            "aria-expanded": "false"
         }).each(function () {
            var t = n(this),
               i = t.prev(),
               u = n("<span>").data("ui-menu-submenu-caret", !0);
            r._addClass(u, "ui-menu-icon", "ui-icon " + s);
            i.attr("aria-haspopup", "true").prepend(u);
            t.attr("aria-labelledby", i.attr("id"))
         });
         this._addClass(f, "ui-menu", "ui-widget ui-widget-content ui-front");
         u = o.add(this.element);
         t = u.find(this.options.items);
         t.not(".ui-menu-item").each(function () {
            var t = n(this);
            r._isDivider(t) && r._addClass(t, "ui-menu-divider", "ui-widget-content")
         });
         i = t.not(".ui-menu-item, .ui-menu-divider");
         e = i.children().not(".ui-menu").uniqueId().attr({
            tabIndex: -1,
            role: this._itemRole()
         });
         this._addClass(i, "ui-menu-item")._addClass(e, "ui-menu-item-wrapper");
         t.filter(".ui-state-disabled").attr("aria-disabled", "true");
         this.active && !n.contains(this.element[0], this.active[0]) && this.blur()
      },
      _itemRole: function () {
         return {
            menu: "menuitem",
            listbox: "option"
         } [this.options.role]
      },
      _setOption: function (n, t) {
         if (n === "icons") {
            var i = this.element.find(".ui-menu-icon");
            this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, t.submenu)
         }
         this._super(n, t)
      },
      _setOptionDisabled: function (n) {
         this._super(n);
         this.element.attr("aria-disabled", String(n));
         this._toggleClass(null, "ui-state-disabled", !!n)
      },
      focus: function (n, t) {
         var i, r, u;
         this.blur(n, n && n.type === "focus");
         this._scrollIntoView(t);
         this.active = t.first();
         r = this.active.children(".ui-menu-item-wrapper");
         this._addClass(r, null, "ui-state-active");
         this.options.role && this.element.attr("aria-activedescendant", r.attr("id"));
         u = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");
         this._addClass(u, null, "ui-state-active");
         n && n.type === "keydown" ? this._close() : this.timer = this._delay(function () {
            this._close()
         }, this.delay);
         i = t.children(".ui-menu");
         i.length && n && /^mouse/.test(n.type) && this._startOpening(i);
         this.activeMenu = t.parent();
         this._trigger("focus", n, {
            item: t
         })
      },
      _scrollIntoView: function (t) {
         var e, o, i, r, u, f;
         this._hasScroll() && (e = parseFloat(n.css(this.activeMenu[0], "borderTopWidth")) || 0, o = parseFloat(n.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - e - o, r = this.activeMenu.scrollTop(), u = this.activeMenu.height(), f = t.outerHeight(), i < 0 ? this.activeMenu.scrollTop(r + i) : i + f > u && this.activeMenu.scrollTop(r + i - u + f))
      },
      blur: function (n, t) {
         (t || clearTimeout(this.timer), this.active) && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", n, {
            item: this.active
         }), this.active = null)
      },
      _startOpening: function (n) {
         (clearTimeout(this.timer), n.attr("aria-hidden") === "true") && (this.timer = this._delay(function () {
            this._close();
            this._open(n)
         }, this.delay))
      },
      _open: function (t) {
         var i = n.extend({
            "of": this.active
         }, this.options.position);
         clearTimeout(this.timer);
         this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true");
         t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
      },
      collapseAll: function (t, i) {
         clearTimeout(this.timer);
         this.timer = this._delay(function () {
            var r = i ? this.element : n(t && t.target).closest(this.element.find(".ui-menu"));
            r.length || (r = this.element);
            this._close(r);
            this.blur(t);
            this._removeClass(r.find(".ui-state-active"), null, "ui-state-active");
            this.activeMenu = r
         }, i ? 0 : this.delay)
      },
      _close: function (n) {
         n || (n = this.active ? this.active.parent() : this.element);
         n.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
      },
      _closeOnDocumentClick: function (t) {
         return !n(t.target).closest(".ui-menu").length
      },
      _isDivider: function (n) {
         return !/[^\-\u2014\u2013\s]/.test(n.text())
      },
      collapse: function (n) {
         var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
         t && t.length && (this._close(), this.focus(n, t))
      },
      expand: function (n) {
         var t = this.active && this._menuItems(this.active.children(".ui-menu")).first();
         t && t.length && (this._open(t.parent()), this._delay(function () {
            this.focus(n, t)
         }))
      },
      next: function (n) {
         this._move("next", "first", n)
      },
      previous: function (n) {
         this._move("prev", "last", n)
      },
      isFirstItem: function () {
         return this.active && !this.active.prevAll(".ui-menu-item").length
      },
      isLastItem: function () {
         return this.active && !this.active.nextAll(".ui-menu-item").length
      },
      _menuItems: function (n) {
         return (n || this.element).find(this.options.items).filter(".ui-menu-item")
      },
      _move: function (n, t, i) {
         var r;
         this.active && (r = n === "first" || n === "last" ? this.active[n === "first" ? "prevAll" : "nextAll"](".ui-menu-item").last() : this.active[n + "All"](".ui-menu-item").first());
         r && r.length && this.active || (r = this._menuItems(this.activeMenu)[t]());
         this.focus(i, r)
      },
      nextPage: function (t) {
         var i, u, r;
         if (!this.active) {
            this.next(t);
            return
         }
         this.isLastItem() || (this._hasScroll() ? (u = this.active.offset().top, r = this.element.innerHeight(), n.fn.jquery.indexOf("3.2.") === 0 && (r += this.element[0].offsetHeight - this.element.outerHeight()), this.active.nextAll(".ui-menu-item").each(function () {
            return i = n(this), i.offset().top - u - r < 0
         }), this.focus(t, i)) : this.focus(t, this._menuItems(this.activeMenu)[this.active ? "last" : "first"]()))
      },
      previousPage: function (t) {
         var i, u, r;
         if (!this.active) {
            this.next(t);
            return
         }
         this.isFirstItem() || (this._hasScroll() ? (u = this.active.offset().top, r = this.element.innerHeight(), n.fn.jquery.indexOf("3.2.") === 0 && (r += this.element[0].offsetHeight - this.element.outerHeight()), this.active.prevAll(".ui-menu-item").each(function () {
            return i = n(this), i.offset().top - u + r > 0
         }), this.focus(t, i)) : this.focus(t, this._menuItems(this.activeMenu).first()))
      },
      _hasScroll: function () {
         return this.element.outerHeight() < this.element.prop("scrollHeight")
      },
      select: function (t) {
         this.active = this.active || n(t.target).closest(".ui-menu-item");
         var i = {
            item: this.active
         };
         this.active.has(".ui-menu").length || this.collapseAll(t, !0);
         this._trigger("select", t, i)
      },
      _filterMenuItems: function (t) {
         var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
            r = new RegExp("^" + i, "i");
         return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
            return r.test(String.prototype.trim.call(n(this).children(".ui-menu-item-wrapper").text()))
         })
      }
   });
   /*!
    * jQuery UI Autocomplete 1.13.1
    * http://jqueryui.com
    *
    * Copyright jQuery Foundation and other contributors
    * Released under the MIT license.
    * http://jquery.org/license
    */
   n.widget("ui.autocomplete", {
      version: "1.13.1",
      defaultElement: "<input>",
      options: {
         appendTo: null,
         autoFocus: !1,
         delay: 300,
         minLength: 1,
         position: {
            my: "left top",
            at: "left bottom",
            collision: "none"
         },
         source: null,
         change: null,
         close: null,
         focus: null,
         open: null,
         response: null,
         search: null,
         select: null
      },
      requestIndex: 0,
      pending: 0,
      liveRegionTimer: null,
      _create: function () {
         var t, i, r, u = this.element[0].nodeName.toLowerCase(),
            f = u === "textarea",
            e = u === "input";
         this.isMultiLine = f || !e && this._isContentEditable(this.element);
         this.valueMethod = this.element[f || e ? "val" : "text"];
         this.isNewMenu = !0;
         this._addClass("ui-autocomplete-input");
         this.element.attr("autocomplete", "off");
         this._on(this.element, {
            keydown: function (u) {
               if (this.element.prop("readOnly")) {
                  t = !0;
                  r = !0;
                  i = !0;
                  return
               }
               t = !1;
               r = !1;
               i = !1;
               var f = n.ui.keyCode;
               switch (u.keyCode) {
                  case f.PAGE_UP:
                     t = !0;
                     this._move("previousPage", u);
                     break;
                  case f.PAGE_DOWN:
                     t = !0;
                     this._move("nextPage", u);
                     break;
                  case f.UP:
                     t = !0;
                     this._keyEvent("previous", u);
                     break;
                  case f.DOWN:
                     t = !0;
                     this._keyEvent("next", u);
                     break;
                  case f.ENTER:
                     this.menu.active && (t = !0, u.preventDefault(), this.menu.select(u));
                     break;
                  case f.TAB:
                     this.menu.active && this.menu.select(u);
                     break;
                  case f.ESCAPE:
                     this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(u), u.preventDefault());
                     break;
                  default:
                     i = !0;
                     this._searchTimeout(u)
               }
            },
            keypress: function (r) {
               if (t) {
                  t = !1;
                  (!this.isMultiLine || this.menu.element.is(":visible")) && r.preventDefault();
                  return
               }
               if (!i) {
                  var u = n.ui.keyCode;
                  switch (r.keyCode) {
                     case u.PAGE_UP:
                        this._move("previousPage", r);
                        break;
                     case u.PAGE_DOWN:
                        this._move("nextPage", r);
                        break;
                     case u.UP:
                        this._keyEvent("previous", r);
                        break;
                     case u.DOWN:
                        this._keyEvent("next", r)
                  }
               }
            },
            input: function (n) {
               if (r) {
                  r = !1;
                  n.preventDefault();
                  return
               }
               this._searchTimeout(n)
            },
            focus: function () {
               this.selectedItem = null;
               this.previous = this._value()
            },
            blur: function (n) {
               clearTimeout(this.searching);
               this.close(n);
               this._change(n)
            }
         });
         this._initSource();
         this.menu = n("<ul>").appendTo(this._appendTo()).menu({
            role: null
         }).hide().attr({
            unselectable: "on"
         }).menu("instance");
         this._addClass(this.menu.element, "ui-autocomplete", "ui-front");
         this._on(this.menu.element, {
            mousedown: function (n) {
               n.preventDefault()
            },
            menufocus: function (t, i) {
               var r, u;
               if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) {
                  this.menu.blur();
                  this.document.one("mousemove", function () {
                     n(t.target).trigger(t.originalEvent)
                  });
                  return
               }
               u = i.item.data("ui-autocomplete-item");
               !1 !== this._trigger("focus", t, {
                  item: u
               }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(u.value);
               r = i.item.attr("aria-label") || u.value;
               r && String.prototype.trim.call(r).length && (clearTimeout(this.liveRegionTimer), this.liveRegionTimer = this._delay(function () {
                  this.liveRegion.html(n("<div>").text(r))
               }, 100))
            },
            menuselect: function (t, i) {
               var r = i.item.data("ui-autocomplete-item"),
                  u = this.previous;
               this.element[0] !== n.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = u, this._delay(function () {
                  this.previous = u;
                  this.selectedItem = r
               }));
               !1 !== this._trigger("select", t, {
                  item: r
               }) && this._value(r.value);
               this.term = this._value();
               this.close(t);
               this.selectedItem = r
            }
         });
         this.liveRegion = n("<div>", {
            role: "status",
            "aria-live": "assertive",
            "aria-relevant": "additions"
         }).appendTo(this.document[0].body);
         this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
         this._on(this.window, {
            beforeunload: function () {
               this.element.removeAttr("autocomplete")
            }
         })
      },
      _destroy: function () {
         clearTimeout(this.searching);
         this.element.removeAttr("autocomplete");
         this.menu.element.remove();
         this.liveRegion.remove()
      },
      _setOption: function (n, t) {
         this._super(n, t);
         n === "source" && this._initSource();
         n === "appendTo" && this.menu.element.appendTo(this._appendTo());
         n === "disabled" && t && this.xhr && this.xhr.abort()
      },
      _isEventTargetInWidget: function (t) {
         var i = this.menu.element[0];
         return t.target === this.element[0] || t.target === i || n.contains(i, t.target)
      },
      _closeOnClickOutside: function (n) {
         this._isEventTargetInWidget(n) || this.close()
      },
      _appendTo: function () {
         var t = this.options.appendTo;
         return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
      },
      _initSource: function () {
         var i, r, t = this;
         Array.isArray(this.options.source) ? (i = this.options.source, this.source = function (t, r) {
            r(n.ui.autocomplete.filter(i, t.term))
         }) : typeof this.options.source == "string" ? (r = this.options.source, this.source = function (i, u) {
            t.xhr && t.xhr.abort();
            t.xhr = n.ajax({
               url: r,
               data: i,
               dataType: "json",
               success: function (n) {
                  u(n)
               },
               error: function () {
                  u([])
               }
            })
         }) : this.source = this.options.source
      },
      _searchTimeout: function (n) {
         clearTimeout(this.searching);
         this.searching = this._delay(function () {
            var t = this.term === this._value(),
               i = this.menu.element.is(":visible"),
               r = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
            t && (!t || i || r) || (this.selectedItem = null, this.search(null, n))
         }, this.options.delay)
      },
      search: function (n, t) {
         return (n = n != null ? n : this._value(), this.term = this._value(), n.length < this.options.minLength) ? this.close(t) : this._trigger("search", t) === !1 ? void 0 : this._search(n)
      },
      _search: function (n) {
         this.pending++;
         this._addClass("ui-autocomplete-loading");
         this.cancelSearch = !1;
         this.source({
            term: n
         }, this._response())
      },
      _response: function () {
         var n = ++this.requestIndex;
         return function (t) {
            n === this.requestIndex && this.__response(t);
            this.pending--;
            this.pending || this._removeClass("ui-autocomplete-loading")
         }.bind(this)
      },
      __response: function (n) {
         n && (n = this._normalize(n));
         this._trigger("response", null, {
            content: n
         });
         !this.options.disabled && n && n.length && !this.cancelSearch ? (this._suggest(n), this._trigger("open")) : this._close()
      },
      close: function (n) {
         this.cancelSearch = !0;
         this._close(n)
      },
      _close: function (n) {
         this._off(this.document, "mousedown");
         this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", n))
      },
      _change: function (n) {
         this.previous !== this._value() && this._trigger("change", n, {
            item: this.selectedItem
         })
      },
      _normalize: function (t) {
         return t.length && t[0].label && t[0].value ? t : n.map(t, function (t) {
            return typeof t == "string" ? {
               label: t,
               value: t
            } : n.extend({}, t, {
               label: t.label || t.value,
               value: t.value || t.label
            })
         })
      },
      _suggest: function (t) {
         var i = this.menu.element.empty();
         this._renderMenu(i, t);
         this.isNewMenu = !0;
         this.menu.refresh();
         i.show();
         this._resizeMenu();
         i.position(n.extend({
            "of": this.element
         }, this.options.position));
         this.options.autoFocus && this.menu.next();
         this._on(this.document, {
            mousedown: "_closeOnClickOutside"
         })
      },
      _resizeMenu: function () {
         var n = this.menu.element;
         n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
      },
      _renderMenu: function (t, i) {
         var r = this;
         n.each(i, function (n, i) {
            r._renderItemData(t, i)
         })
      },
      _renderItemData: function (n, t) {
         return this._renderItem(n, t).data("ui-autocomplete-item", t)
      },
      _renderItem: function (t, i) {
         return n("<li>").append(n("<div>").text(i.label)).appendTo(t)
      },
      _move: function (n, t) {
         if (!this.menu.element.is(":visible")) {
            this.search(null, t);
            return
         }
         if (this.menu.isFirstItem() && /^previous/.test(n) || this.menu.isLastItem() && /^next/.test(n)) {
            this.isMultiLine || this._value(this.term);
            this.menu.blur();
            return
         }
         this.menu[n](t)
      },
      widget: function () {
         return this.menu.element
      },
      _value: function () {
         return this.valueMethod.apply(this.element, arguments)
      },
      _keyEvent: function (n, t) {
         (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t), t.preventDefault())
      },
      _isContentEditable: function (n) {
         if (!n.length) return !1;
         var t = n.prop("contentEditable");
         return t === "inherit" ? this._isContentEditable(n.parent()) : t === "true"
      }
   });
   n.extend(n.ui.autocomplete, {
      escapeRegex: function (n) {
         return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
      },
      filter: function (t, i) {
         var r = new RegExp(n.ui.autocomplete.escapeRegex(i), "i");
         return n.grep(t, function (n) {
            return r.test(n.label || n.value || n)
         })
      }
   });
   n.widget("ui.autocomplete", n.ui.autocomplete, {
      options: {
         messages: {
            noResults: "No search results.",
            results: function (n) {
               return n + (n > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
            }
         }
      },
      __response: function (t) {
         var i;
         (this._superApply(arguments), this.options.disabled || this.cancelSearch) || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, clearTimeout(this.liveRegionTimer), this.liveRegionTimer = this._delay(function () {
            this.liveRegion.html(n("<div>").text(i))
         }, 100))
      }
   });
   gt = n.ui.autocomplete
})