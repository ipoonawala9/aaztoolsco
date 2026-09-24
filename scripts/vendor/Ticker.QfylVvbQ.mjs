import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  L as n,
  M as r,
  N as i,
  O as a,
  S as o,
  T as s,
  _ as ee,
  g as c,
  j as te,
  k as ne,
  l,
  s as u,
  u as re,
  w as ie,
  y as ae,
  z as d,
} from "./react.N6WDMTqS.mjs";
import {
  I as oe,
  N as se,
  R as ce,
  S as le,
  U as ue,
  h as de,
  r as fe,
  t as pe,
} from "./motion.CXXzZ97F.mjs";
import { T as me, U as f, r as p, v as m } from "./framer.w0XhpZTx.mjs";
var h,
  g = e(() => {
    h = (e) => e;
  }),
  he = e(() => {
    g();
  }),
  ge = e(() => {
    he();
  });
function _e(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var _ = e(() => {}),
  v,
  y = e(() => {
    ((v = {}),
      Object.defineProperty(v, "__esModule", { value: !0 }),
      (v.warning = function () {}),
      (v.invariant = function () {}),
      v.__esModule,
      v.warning,
      v.invariant);
  }),
  b = e(() => {
    g();
  });
function x(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function S(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = x(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : H[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function C(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function ve({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = U.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return C(e, n);
        },
      });
    });
}
function w(e) {
  e.forEach(ve);
}
function T() {
  typeof ResizeObserver < `u` && (W = new ResizeObserver(w));
}
function E(e, t) {
  W || T();
  let n = x(e);
  return (
    n.forEach((e) => {
      let n = U.get(e);
      (n || ((n = new Set()), U.set(e, n)), n.add(t), W?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = U.get(e);
        (n?.delete(t), (n != null && n.size) || W == null || W.unobserve(e));
      });
    }
  );
}
function D() {
  ((K = () => {
    let e = { width: d.innerWidth, height: d.innerHeight },
      t = { target: d, size: e, contentSize: e };
    G.forEach((e) => e(t));
  }),
    d.addEventListener(`resize`, K));
}
function O(e) {
  return (
    G.add(e),
    K || D(),
    () => {
      (G.delete(e), !G.size && K && (K = void 0));
    }
  );
}
function ye(e, t) {
  return typeof e == `function` ? O(e) : E(e, t);
}
function k(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function A(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  be = e(() => {
    (n(),
      g(),
      ge(),
      _(),
      y(),
      b(),
      (j = [``, `X`, `Y`, `Z`]),
      (M = [`translate`, `scale`, `rotate`, `skew`]),
      (N = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
      (P = {
        translate: {
          syntax: `<length-percentage>`,
          initialValue: `0px`,
          toDefaultUnit: (e) => e + `px`,
        },
        rotate: N,
        scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: h },
        skew: N,
      }),
      (F = new Map()),
      (I = (e) => `--motion-${e}`),
      (L = [`x`, `y`, `z`]),
      M.forEach((e) => {
        j.forEach((t) => {
          (L.push(e + t), F.set(I(e + t), P[e]));
        });
      }),
      new Set(L),
      (R = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
      (z = {
        cssRegisterProperty: () =>
          typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
        partialKeyframes: () => {
          try {
            R({ opacity: [1] });
          } catch {
            return !1;
          }
          return !0;
        },
        finished: () => !!R({ opacity: [0, 1] }).finished,
      }),
      (B = {}),
      (V = {}));
    for (let e in z) V[e] = () => (B[e] === void 0 && (B[e] = z[e]()), B[e]);
    ((H = { any: 0, all: 1 }),
      (U = new WeakMap()),
      (G = new Set()),
      (q = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return S(
            e,
            (r) => {
              if ((t(), A(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), A(e, `viewleave`, t));
                };
            },
            _e(r, [`once`])
          );
        },
      }),
      (J = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), k(e, t, r));
      }),
      (Y = {
        inView: q,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = J(e, `hoverstart`, t),
              i = J(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = (t) => {
                (n(), k(e, `pressend`, t), d.removeEventListener(`pointerup`, r));
              },
              i = (n) => {
                (t(), k(e, `pressstart`, n), d.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, i),
              () => {
                (e.removeEventListener(`pointerdown`, i), d.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(Y)]);
  });
function X(e) {
  let {
      slots: n = [],
      gap: c,
      padding: u,
      paddingPerSide: ie,
      paddingTop: ae,
      paddingRight: d,
      paddingBottom: pe,
      paddingLeft: me,
      speed: f,
      hoverFactor: p,
      direction: h,
      alignment: g,
      sizingOptions: he,
      fadeOptions: ge,
      style: _e,
    } = e,
    { fadeContent: _, overflow: v, fadeWidth: y, fadeInset: b, fadeAlpha: x } = ge,
    { widthType: S, heightType: C } = he,
    ve = ie ? `${ae}px ${d}px ${pe}px ${me}px` : `${u}px`,
    w = m.current(),
    T = w === m.canvas || w === m.export,
    E = xe(),
    D = n.filter(Boolean),
    O = s.count(D),
    k = O > 0,
    A = oe(0),
    j = Se(h === !0 ? `left` : h, E),
    M = j === `left` || j === `right`,
    N = we[j];
  ue(A, N);
  let P = a(null),
    F = te(() => [{ current: null }, { current: null }], []),
    [I, L] = t({ parent: null, children: null }),
    R = null,
    z = [],
    B = 0,
    V = 0;
  (T && ((B = O ? Math.floor(10 / O) : 0), (V = 1)),
    !T &&
      k &&
      I.parent &&
      ((B = Math.round((I.parent / I.children) * 2) + 1), (B = Math.min(B, Ce)), (V = 1)));
  let H = r(() => {
      if (k && P.current) {
        let e = M ? P.current.offsetWidth : P.current.offsetHeight,
          t = F[0].current ? (M ? F[0].current.offsetLeft : F[0].current.offsetTop) : 0,
          n =
            (F[1].current
              ? M
                ? F[1].current.offsetLeft + F[1].current.offsetWidth
                : F[1].current.offsetTop + F[1].current.offsetHeight
              : 0) -
            t +
            c;
        ee(() => {
          L({ parent: e, children: n });
        });
      }
    }, []),
    U = T ? { contentVisibility: `auto` } : {};
  if (k) {
    if (!T) {
      let e = a(!0);
      o(
        () => (
          de.read(H, !1, !0),
          ye(P.current, ({ contentSize: t }) => {
            (!e.current && (t.width || t.height) && de.read(H, !1, !0), (e.current = !1));
          })
        ),
        []
      );
    }
    R = s.map(D, (e, t) => {
      let n;
      (t === 0 && (n = F[E === `rtl` && M ? 1 : 0]),
        t === D.length - 1 && (n = F[E === `rtl` && M ? 0 : 1]));
      let r = { width: S ? e.props?.width : `100%`, height: C ? e.props?.height : `100%` };
      return l(fe, {
        inherit: `id`,
        children: l(Z, {
          ref: n,
          style: r,
          children: ne(
            e,
            {
              style: { ...e.props?.style, ...r, flexShrink: 0, ...U },
              layoutId: e.props.layoutId ? e.props.layoutId + `-original-` + t : void 0,
            },
            e.props?.children
          ),
        }),
      });
    });
  }
  let W = T ? !0 : se(P);
  if (!T)
    for (let e = 0; e < B; e++)
      z = z.concat(
        s.map(D, (t, n) => {
          let r = {
            width: S ? t.props?.width : `100%`,
            height: C ? t.props?.height : `100%`,
            willChange: W ? `transform` : void 0,
          };
          return l(
            fe,
            {
              inherit: `id`,
              children: l(
                Z,
                {
                  style: r,
                  children: ne(
                    t,
                    {
                      key: e + ` ` + n,
                      style: {
                        ...t.props?.style,
                        width: S ? t.props?.width : `100%`,
                        height: C ? t.props?.height : `100%`,
                        flexShrink: 0,
                        ...U,
                      },
                      layoutId: t.props.layoutId ? t.props.layoutId + `-dupe-` + e : void 0,
                    },
                    t.props?.children
                  ),
                },
                e + `li` + n
              ),
            },
            e + `lg` + n
          );
        })
      );
  let G = I.children + I.children * Math.round(I.parent / I.children);
  (a(null), a(null), a(0));
  let K = a(!1),
    q = ce(),
    J = a(null),
    Y = a(null);
  if (!T) {
    i(() => {
      if (!(q || !G || !f))
        return (
          (Y.current = J.current.animate(
            { transform: [N(0), N(G)] },
            {
              duration: (Math.abs(G) / f) * 1e3,
              iterations: 1 / 0,
              iterationStart: +(E === `rtl`),
              easing: `linear`,
            }
          )),
          () => Y.current.cancel()
        );
    }, [p, G, f, E]);
    let e = r(() => {
      if (!Y.current) return;
      let e = document.hidden;
      W && !e && Y.current.playState === `paused`
        ? Y.current.play()
        : (!W || e) && Y.current.playState === `running` && Y.current.pause();
    }, [W]);
    (i(() => {
      e();
    }, [W, p, G, f]),
      i(
        () => (
          document.addEventListener(`visibilitychange`, e),
          () => {
            document.removeEventListener(`visibilitychange`, e);
          }
        ),
        [e]
      ));
  }
  let be = M ? `to right` : `to bottom`,
    X = y / 2,
    Ae = 100 - y / 2,
    je = `linear-gradient(${be}, rgba(0, 0, 0, ${x}) ${ke(b, 0, X)}%, rgba(0, 0, 0, 1) ${X}%, rgba(0, 0, 0, 1) ${Ae}%, rgba(0, 0, 0, ${x}) ${100 - b}%)`;
  return k
    ? l(`section`, {
        style: {
          ...Q,
          opacity: V,
          WebkitMaskImage: _ ? je : void 0,
          maskImage: _ ? je : void 0,
          overflow: v ? `visible` : `hidden`,
          padding: ve,
        },
        ref: P,
        children: re(le.ul, {
          ref: J,
          style: {
            ...Q,
            gap: c,
            top: h === `bottom` && $(G) ? -G : void 0,
            left: h === `right` && $(G) ? G * (E === `rtl` ? 1 : -1) : void 0,
            placeItems: g,
            position: `relative`,
            flexDirection: M ? `row` : `column`,
            ..._e,
            willChange: T || !W ? `auto` : `transform`,
            transform: N(0),
          },
          onMouseEnter: () => {
            ((K.current = !0), Y.current && (Y.current.playbackRate = p));
          },
          onMouseLeave: () => {
            ((K.current = !1), Y.current && (Y.current.playbackRate = 1));
          },
          children: [R, z],
        }),
      })
    : re(`section`, {
        style: Te,
        children: [
          l(`div`, { style: Ee, children: `✨` }),
          l(`p`, { style: De, children: `Connect to Content` }),
          l(`p`, {
            style: Oe,
            children: `Add layers or components to infinitely loop on your page.`,
          }),
        ],
      });
}
function xe() {
  return !d || !d.document || !d.document.documentElement
    ? `ltr`
    : d.document.documentElement.dir === `rtl`
      ? `rtl`
      : `ltr`;
}
function Se(e, t) {
  return t === `rtl` ? (e === `left` ? `right` : e === `right` ? `left` : e) : e;
}
var Ce,
  we,
  Z,
  Q,
  Te,
  Ee,
  De,
  Oe,
  ke,
  $,
  Ae = e(() => {
    (n(),
      u(),
      ie(),
      f(),
      pe(),
      be(),
      (Ce = 100),
      (we = {
        left: (e) => `translateX(-${e}px)`,
        right: (e) => `translateX(${e}px)`,
        top: (e) => `translateY(-${e}px)`,
        bottom: (e) => `translateY(${e}px)`,
      }),
      (Z = c(({ children: e, ...t }, n) => {
        let r = a(),
          o = se(r);
        return (
          ae(n, () => r.current),
          i(() => {
            let e = r.current;
            e &&
              (o
                ? e.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.dataset.origTabIndex;
                    t ? (e.tabIndex = t) : e.removeAttribute(`tabIndex`);
                  })
                : e.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.getAttribute(`tabIndex`);
                    (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                  }));
          }, [o]),
          l(`li`, { ...t, "aria-hidden": !o, ref: r, children: e })
        );
      })),
      (X.defaultProps = {
        gap: 10,
        padding: 10,
        sizingOptions: { widthType: !0, heightType: !0 },
        fadeOptions: { fadeContent: !0, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        direction: !0,
      }),
      me(X, {
        slots: { type: p.Array, title: `Children`, control: { type: p.ComponentInstance } },
        speed: {
          type: p.Number,
          title: `Speed`,
          min: 0,
          max: 1e3,
          defaultValue: 100,
          unit: `%`,
          displayStepper: !0,
          step: 5,
        },
        direction: {
          type: p.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        alignment: {
          type: p.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: p.Number, title: `Gap` },
        padding: {
          title: `Padding`,
          type: p.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        sizingOptions: {
          type: p.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: p.Boolean,
              title: `Width`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
            heightType: {
              type: p.Boolean,
              title: `Height`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
          },
        },
        fadeOptions: {
          type: p.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: p.Boolean, title: `Fade`, defaultValue: !0 },
            overflow: {
              type: p.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: p.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: p.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: p.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        hoverFactor: {
          type: p.Number,
          title: `Hover`,
          min: 0,
          max: 1,
          unit: `x`,
          defaultValue: 1,
          step: 0.1,
          displayStepper: !0,
          description: `Slows down the speed while you are hovering.`,
        },
      }),
      (Q = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (Te = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Ee = { fontSize: 32, marginBottom: 10 }),
      (De = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Oe = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: `center` }),
      (ke = (e, t, n) => Math.min(Math.max(e, t), n)),
      ($ = (e) => typeof e == `number` && !isNaN(e)));
  });
export { Ae as n, X as t };
//# sourceMappingURL=Ticker.QfylVvbQ.mjs.map
