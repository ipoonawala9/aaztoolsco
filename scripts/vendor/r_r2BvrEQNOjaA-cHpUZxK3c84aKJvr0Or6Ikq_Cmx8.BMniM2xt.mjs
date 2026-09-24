import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  O as n,
  P as r,
  g as i,
  j as ee,
  l as a,
  s as o,
  u as s,
  v as c,
  w as l,
} from "./react.N6WDMTqS.mjs";
import { S as u, a as te, r as ne, t as d } from "./motion.CXXzZ97F.mjs";
import {
  I as f,
  L as re,
  O as p,
  U as m,
  at as h,
  b as g,
  c as _,
  ct as ie,
  dt as ae,
  g as v,
  ht as y,
  it as oe,
  mt as b,
  n as x,
  nt as se,
  ot as S,
  st as ce,
  t as C,
  u as w,
  w as T,
  x as E,
} from "./framer.w0XhpZTx.mjs";
import { n as D, t as O } from "./Ticker.QfylVvbQ.mjs";
import { i as k, n as A, r as j, t as le } from "./nl385Jssa.BV16yEHR.mjs";
import { i as M, r as N } from "./cQxXulDZM.DXXtl8ZX.mjs";
import { n as P, t as F } from "./szrJOgEFA.Cstbr50J.mjs";
import ue, { t as de } from "./iyHilRisjwUyrWmoLOlUek4bfaFECnnLl07EeN0kPrU.DCUQOv8q.mjs";
var I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (o(),
    m(),
    d(),
    l(),
    D(),
    M(),
    P(),
    k(),
    de(),
    (I = f(N)),
    (L = y(x)),
    (R = y(E)),
    (z = f(O)),
    (B = f(F)),
    (V = {
      aAxhKm4PY: `(max-width: 809.98px)`,
      AFT_CF_Jl: `(min-width: 810px) and (max-width: 1199.98px)`,
      phWQu6bQT: `(min-width: 1200px)`,
    }),
    (H = `framer-F32RE`),
    (U = {
      aAxhKm4PY: `framer-v-40nvfu`,
      AFT_CF_Jl: `framer-v-1agmisp`,
      phWQu6bQT: `framer-v-rzjy7r`,
    }),
    (W = (e, t, n) => (e && t ? `position` : n)),
    (G = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (K = { delay: 0, duration: 1, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` }),
    (q = { delay: 0.2, duration: 1, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` }),
    (J = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Y = ({ value: e }) =>
      S()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (X = { Desktop: `phWQu6bQT`, Phone: `aAxhKm4PY`, Tablet: `AFT_CF_Jl` }),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: X[r.variant] ?? r.variant ?? `phWQu6bQT`,
    })),
    (Q = b(
      i(function (e, i) {
        let o = n(null),
          l = i ?? o,
          d = c(),
          { activeLocale: f, setLocale: re } = ce(),
          m = se(),
          { style: y, className: b, layoutId: S, variant: T, ...E } = Z(e);
        ie(ee(() => ue({}, f), [f]));
        let [D, k] = h(T, V, !1),
          A = p(H, le),
          j = t(_)?.isLayoutTemplate,
          M = !!t(te)?.transition?.layout,
          P = W(j, M);
        return (
          ae(),
          oe({}),
          a(_.Provider, {
            value: { primaryVariantId: `phWQu6bQT`, variantClassNames: U },
            children: s(ne, {
              id: S ?? d,
              children: [
                a(Y, { value: `html body { background: rgb(255, 255, 255); }` }),
                a(u.div, {
                  ...E,
                  className: p(A, `framer-rzjy7r`, b),
                  ref: l,
                  style: { ...y },
                  children: s(u.section, {
                    className: `framer-3oueix`,
                    "data-framer-name": `Products`,
                    layout: P,
                    children: [
                      a(`div`, {
                        className: `framer-hcgwvu`,
                        "data-framer-name": `Text`,
                        children: s(`div`, {
                          className: `framer-1velfok`,
                          children: [
                            a(v, {
                              breakpoint: D,
                              overrides: {
                                aAxhKm4PY: { y: (m?.y || 0) + 0 + 0 + 80 + 0 + 0 + 0 + 0 + 0 },
                                AFT_CF_Jl: { y: (m?.y || 0) + 0 + 0 + 80 + 0 + 0 + 0 + 0 + 0 },
                              },
                              children: a(C, {
                                height: 26,
                                y: (m?.y || 0) + 0 + 0 + 96 + 0 + 0 + 0 + 0 + 0,
                                children: a(L, {
                                  __framer__animate: { transition: K },
                                  __framer__animateOnce: !0,
                                  __framer__enter: G,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 0.6,
                                  className: `framer-y895h3-container`,
                                  nodeId: `HfBGYoQZc`,
                                  rendersWithMotion: !0,
                                  scopeId: `AttXBZoeD`,
                                  children: a(N, {
                                    ggTbrSuHk: `Products`,
                                    height: `100%`,
                                    id: `HfBGYoQZc`,
                                    layoutId: `HfBGYoQZc`,
                                    variant: `z6oSgdJxk`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                            a(v, {
                              breakpoint: D,
                              overrides: {
                                aAxhKm4PY: {
                                  children: a(r, {
                                    children: a(`h3`, {
                                      className: `framer-styles-preset-1d7ew99`,
                                      "data-styles-preset": `nl385Jssa`,
                                      children: `Fasteners & Safety items`,
                                    }),
                                  }),
                                },
                              },
                              children: a(R, {
                                __framer__animate: { transition: q },
                                __framer__animateOnce: !0,
                                __framer__enter: G,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: a(r, {
                                  children: a(`h3`, {
                                    className: `framer-styles-preset-1d7ew99`,
                                    "data-styles-preset": `nl385Jssa`,
                                    children: `Fasteners, Safety items and Cable ties`,
                                  }),
                                }),
                                className: `framer-juyes6`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            a(C, {
                              children: a(x, {
                                className: `framer-10t9xj-container`,
                                id: `10t9xj`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `hQZrFjrDG`,
                                scopeId: `AttXBZoeD`,
                                children: a(O, {
                                  alignment: `center`,
                                  direction: `left`,
                                  fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !0,
                                    fadeInset: 0,
                                    fadeWidth: 0,
                                    overflow: !1,
                                  },
                                  gap: 10,
                                  height: `100%`,
                                  hoverFactor: 1,
                                  id: `hQZrFjrDG`,
                                  layoutId: `hQZrFjrDG`,
                                  padding: 0,
                                  paddingBottom: 0,
                                  paddingLeft: 0,
                                  paddingPerSide: !1,
                                  paddingRight: 0,
                                  paddingTop: 0,
                                  sizingOptions: { heightType: !0, widthType: !0 },
                                  slots: [
                                    a(w, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 154.66666666666666,
                                        intrinsicWidth: 287.3333333333333,
                                        pixelHeight: 232,
                                        pixelWidth: 431,
                                        sizes: `100px`,
                                        src: `../../assets/images/Lg585XYMUoxdctqQMDgCzjX3aA.png`,
                                      },
                                      className: `framer-17s5e5g`,
                                      "data-framer-name": `Karam Logo`,
                                    }),
                                    a(w, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 133.33333333333334,
                                        intrinsicWidth: 233.33333333333334,
                                        pixelHeight: 200,
                                        pixelWidth: 350,
                                        sizes: `100px`,
                                        src: `../../assets/images/ZIaUoDOvRWsBHoMtNO6Rd2C05w.png`,
                                      },
                                      className: `framer-74hdo2`,
                                      "data-framer-name": `Unbrako Logo`,
                                    }),
                                    a(w, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 300.6666666666667,
                                        intrinsicWidth: 761.3333333333334,
                                        pixelHeight: 451,
                                        pixelWidth: 1142,
                                        sizes: `99px`,
                                        src: `../../assets/images/VxBuxEWmIqMuzAO5pZ3QHdbW1w.png?width=1142&height=451`,
                                        srcSet: `../../assets/images/VxBuxEWmIqMuzAO5pZ3QHdbW1w.png 512w,../../assets/images/VxBuxEWmIqMuzAO5pZ3QHdbW1w.png?scale-down-to=1024&width=1142&height=451 1024w,../../assets/images/VxBuxEWmIqMuzAO5pZ3QHdbW1w.png?width=1142&height=451 1142w`,
                                      },
                                      className: `framer-19lzgeg`,
                                      "data-framer-name": `Logo 4`,
                                    }),
                                  ],
                                  speed: 20,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      s(`div`, {
                        className: `framer-1ort211`,
                        "data-framer-name": `ClassesGallery`,
                        children: [
                          a(g, {
                            links: [
                              { href: { webPageId: `fRICmNncB` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `fRICmNncB` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `fRICmNncB` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `BsJmXv8f2` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `fRICmNncB` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              a(v, {
                                breakpoint: D,
                                overrides: {
                                  aAxhKm4PY: {
                                    width: `319px`,
                                    y: (m?.y || 0) + 0 + 0 + 80 + 216.4 + 0 + 0,
                                  },
                                  AFT_CF_Jl: {
                                    width: `328.5px`,
                                    y: (m?.y || 0) + 0 + 0 + 80 + 216.4 + 0 + 0,
                                  },
                                },
                                children: a(C, {
                                  height: 399,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y: (m?.y || 0) + 0 + 0 + 96 + 216.4 + 0 + 0,
                                  children: a(x, {
                                    className: `framer-imwims-container`,
                                    nodeId: `RBsi7nwnK`,
                                    scopeId: `AttXBZoeD`,
                                    children: a(v, {
                                      breakpoint: D,
                                      overrides: {
                                        aAxhKm4PY: { uL9qbEmnu: e[3], ZHrtcxY3l: e[4] },
                                        AFT_CF_Jl: {
                                          uL9qbEmnu: e[1],
                                          vxhDk_2Ee: `Angle grinders`,
                                          ZHrtcxY3l: e[2],
                                        },
                                      },
                                      children: a(F, {
                                        cYMryRtIV: J(
                                          {
                                            pixelHeight: 600,
                                            pixelWidth: 700,
                                            src: `../../assets/images/QJMtLoKZxNOO2pi5VkgJIRr2Fp4.jpg?width=700&height=600`,
                                            srcSet: `../../assets/images/QJMtLoKZxNOO2pi5VkgJIRr2Fp4.jpg 512w,../../assets/images/QJMtLoKZxNOO2pi5VkgJIRr2Fp4.jpg?width=700&height=600 700w`,
                                          },
                                          ``
                                        ),
                                        height: `100%`,
                                        id: `RBsi7nwnK`,
                                        layoutId: `RBsi7nwnK`,
                                        r0i2S6TZx: `FASTENERS`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: `Ths73yLaQ`,
                                        vxhDk_2Ee: `PLIERS`,
                                        width: `100%`,
                                        ZHrtcxY3l: e[0],
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                          a(g, {
                            links: [
                              { href: { webPageId: `L4XXkv4Zj` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `fRICmNncB` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `L4XXkv4Zj` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `BsJmXv8f2` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `L4XXkv4Zj` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              a(v, {
                                breakpoint: D,
                                overrides: {
                                  aAxhKm4PY: {
                                    width: `319px`,
                                    y: (m?.y || 0) + 0 + 0 + 80 + 216.4 + 0 + 415,
                                  },
                                  AFT_CF_Jl: {
                                    width: `328.5px`,
                                    y: (m?.y || 0) + 0 + 0 + 80 + 216.4 + 0 + 0,
                                  },
                                },
                                children: a(C, {
                                  height: 399,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y: (m?.y || 0) + 0 + 0 + 96 + 216.4 + 0 + 0,
                                  children: a(x, {
                                    className: `framer-pv4ep3-container`,
                                    nodeId: `Zir5Xs08D`,
                                    scopeId: `AttXBZoeD`,
                                    children: a(v, {
                                      breakpoint: D,
                                      overrides: {
                                        aAxhKm4PY: { uL9qbEmnu: e[3], ZHrtcxY3l: e[4] },
                                        AFT_CF_Jl: {
                                          uL9qbEmnu: e[1],
                                          vxhDk_2Ee: `Angle grinders`,
                                          ZHrtcxY3l: e[2],
                                        },
                                      },
                                      children: a(F, {
                                        cYMryRtIV: J(
                                          {
                                            pixelHeight: 4151,
                                            pixelWidth: 6226,
                                            src: `../../assets/images/f18XXUvEW7roObqHfDzJTWGBDs.jpg?width=6226&height=4151`,
                                            srcSet: `../../assets/images/f18XXUvEW7roObqHfDzJTWGBDs.jpg 512w,../../assets/images/f18XXUvEW7roObqHfDzJTWGBDs.jpg?scale-down-to=1024&width=6226&height=4151 1024w,../../assets/images/f18XXUvEW7roObqHfDzJTWGBDs.jpg?scale-down-to=2048&width=6226&height=4151 2048w,../../assets/images/f18XXUvEW7roObqHfDzJTWGBDs.jpg?scale-down-to=4096&width=6226&height=4151 4096w,../../assets/images/f18XXUvEW7roObqHfDzJTWGBDs.jpg?width=6226&height=4151 6226w`,
                                          },
                                          ``
                                        ),
                                        height: `100%`,
                                        id: `Zir5Xs08D`,
                                        layoutId: `Zir5Xs08D`,
                                        r0i2S6TZx: `SAFETY ITEMS`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: `Ths73yLaQ`,
                                        vxhDk_2Ee: `PLIERS`,
                                        width: `100%`,
                                        ZHrtcxY3l: e[0],
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                          a(g, {
                            links: [
                              { href: { webPageId: `yIPN70dPu` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `fRICmNncB` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `yIPN70dPu` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `BsJmXv8f2` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `yIPN70dPu` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              a(v, {
                                breakpoint: D,
                                overrides: {
                                  aAxhKm4PY: {
                                    width: `319px`,
                                    y: (m?.y || 0) + 0 + 0 + 80 + 216.4 + 0 + 830,
                                  },
                                  AFT_CF_Jl: {
                                    width: `328.5px`,
                                    y: (m?.y || 0) + 0 + 0 + 80 + 216.4 + 0 + 415,
                                  },
                                },
                                children: a(C, {
                                  height: 399,
                                  width: `max((${m?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y: (m?.y || 0) + 0 + 0 + 96 + 216.4 + 0 + 0,
                                  children: a(x, {
                                    className: `framer-ur2wtr-container`,
                                    nodeId: `ROrRnSgIG`,
                                    scopeId: `AttXBZoeD`,
                                    children: a(v, {
                                      breakpoint: D,
                                      overrides: {
                                        aAxhKm4PY: { uL9qbEmnu: e[3], ZHrtcxY3l: e[4] },
                                        AFT_CF_Jl: {
                                          uL9qbEmnu: e[1],
                                          vxhDk_2Ee: `Angle grinders`,
                                          ZHrtcxY3l: e[2],
                                        },
                                      },
                                      children: a(F, {
                                        cYMryRtIV: J(
                                          {
                                            pixelHeight: 800,
                                            pixelWidth: 800,
                                            src: `../../assets/images/ZKIVQADyUoCmn390IL9e997TZMU.jpeg?width=800&height=800`,
                                            srcSet: `../../assets/images/ZKIVQADyUoCmn390IL9e997TZMU.jpeg 512w,../../assets/images/ZKIVQADyUoCmn390IL9e997TZMU.jpeg?width=800&height=800 800w`,
                                          },
                                          ``
                                        ),
                                        height: `100%`,
                                        id: `ROrRnSgIG`,
                                        layoutId: `ROrRnSgIG`,
                                        r0i2S6TZx: `CABLE TIES`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: `Ths73yLaQ`,
                                        vxhDk_2Ee: `PLIERS`,
                                        width: `100%`,
                                        ZHrtcxY3l: e[0],
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-F32RE.framer-f8s0b9, .framer-F32RE .framer-f8s0b9 { display: block; }`,
        `.framer-F32RE.framer-rzjy7r { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-F32RE .framer-3oueix { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 96px 50px 96px 50px; position: relative; width: 100%; }`,
        `.framer-F32RE .framer-hcgwvu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-F32RE .framer-1velfok { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-F32RE .framer-y895h3-container { flex: none; height: auto; opacity: 0.6; position: relative; width: auto; }`,
        `.framer-F32RE .framer-juyes6 { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-F32RE .framer-10t9xj-container { flex: none; height: 80px; position: relative; width: 335px; }`,
        `.framer-F32RE .framer-17s5e5g { aspect-ratio: 1.8577586206896552 / 1; height: var(--framer-aspect-ratio-supported, 54px); overflow: visible; position: relative; width: 100px; }`,
        `.framer-F32RE .framer-74hdo2 { aspect-ratio: 1.75 / 1; height: var(--framer-aspect-ratio-supported, 57px); overflow: visible; position: relative; width: 100px; }`,
        `.framer-F32RE .framer-19lzgeg { aspect-ratio: 2.532150776053215 / 1; height: var(--framer-aspect-ratio-supported, 39px); overflow: visible; position: relative; width: 99px; }`,
        `.framer-F32RE .framer-1ort211 { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-F32RE .framer-imwims-container, .framer-F32RE .framer-pv4ep3-container, .framer-F32RE .framer-ur2wtr-container { align-self: start; flex: none; height: 399px; justify-self: start; position: relative; width: 100%; }`,
        ...A,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-F32RE.framer-rzjy7r { width: 810px; } .framer-F32RE .framer-3oueix { padding: 80px 50px 80px 50px; width: 773px; } .framer-F32RE .framer-1ort211 { grid-template-columns: repeat(2, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-F32RE.framer-rzjy7r { width: 390px; } .framer-F32RE .framer-3oueix { padding: 80px 16px 80px 16px; width: 351px; } .framer-F32RE .framer-10t9xj-container { width: 328px; } .framer-F32RE .framer-1ort211 { grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ],
      `framer-F32RE`
    )),
    (Q.displayName = `Products Measuring And Digital Meters`),
    (Q.defaultProps = { height: 1232, width: 1200 }),
    T(
      Q,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
          ],
        },
        ...I,
        ...z,
        ...B,
        ...re(j),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerAttXBZoeD`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"AFT_CF_Jl":{"layout":["fixed","fixed"]},"aAxhKm4PY":{"layout":["fixed","fixed"]}}}`,
            framerScrollSections: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicWidth: `1200`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `1232`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=r_r2BvrEQNOjaA-cHpUZxK3c84aKJvr0Or6Ikq_Cmx8.BMniM2xt.mjs.map
