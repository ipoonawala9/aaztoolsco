import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  O as t,
  P as n,
  c as r,
  g as i,
  i as a,
  j as ee,
  l as o,
  o as te,
  s,
  u as c,
  v as ne,
  w as l,
} from "./react.N6WDMTqS.mjs";
import { S as u, n as d, r as re, t as f } from "./motion.CXXzZ97F.mjs";
import {
  I as p,
  L as m,
  O as h,
  U as ie,
  at as ae,
  b as g,
  c as oe,
  ct as se,
  d as _,
  dt as ce,
  g as v,
  ht as y,
  it as le,
  lt as ue,
  mt as de,
  n as b,
  nt as fe,
  o as x,
  ot as pe,
  p as me,
  s as S,
  st as he,
  t as C,
  tt as ge,
  ut as _e,
  w,
  x as T,
  y as E,
} from "./framer.w0XhpZTx.mjs";
import { i as ve, n as D, r as ye, t as be } from "./nl385Jssa.BV16yEHR.mjs";
import { a as O, c as k, i as A, o as j, r as M, s as N } from "./shared.DPOhhryJ.mjs";
import { i as P, r as F } from "./cQxXulDZM.DXXtl8ZX.mjs";
import { n as I, t as L } from "./jNXHc0ip8.Bnggf-hw.mjs";
import xe, { t as Se } from "./9VBweEDEw2v2Rb3g8BkuMlED8jzt5fRIIxbfMa9K8jE.1sXVDVJS.mjs";
var R, z, B, V, H, U, W, G, Ce, we, K, Te, Ee, q, J, Y, X, Z, De, Oe, ke, Q, $;
e(() => {
  (s(),
    ie(),
    f(),
    l(),
    te(),
    j(),
    k(),
    A(),
    P(),
    I(),
    ve(),
    Se(),
    (R = p(N)),
    (z = p(F)),
    (B = y(b)),
    (V = y(T)),
    (H = p(L)),
    (U = p(O)),
    (W = p(M)),
    (G = {
      PJvxyckua: `(max-width: 809.98px)`,
      PTVfXZDWT: `(min-width: 1200px)`,
      vEtyCquII: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (Ce = `framer-2i7x2`),
    (we = {
      PJvxyckua: `framer-v-lo29kc`,
      PTVfXZDWT: `framer-v-8ccmy4`,
      vEtyCquII: `framer-v-1ki6owg`,
    }),
    (K = {
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
    (Te = { delay: 0, duration: 1, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` }),
    (Ee = { delay: 0.2, duration: 1, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` }),
    (q = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (J = (e, t) => `translateY(-50%) ${t}`),
    (Y = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
      }
    }),
    (X = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (Z = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = ue({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (De = ({ value: e }) =>
      pe()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Oe = { Desktop: `PTVfXZDWT`, Phone: `PJvxyckua`, Tablet: `vEtyCquII` }),
    (ke = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Oe[r.variant] ?? r.variant ?? `PTVfXZDWT`,
    })),
    (Q = de(
      i(function (e, i) {
        let te = t(null),
          s = i ?? te,
          l = ne(),
          { activeLocale: f, setLocale: p } = he(),
          m = fe(),
          { style: ie, className: y, layoutId: ue, variant: de, ...pe } = ke(e);
        se(ee(() => xe({}, f), [f]));
        let [w, ve] = ae(de, G, !1),
          { activeVariantCallback: D, delay: ye } = ge(void 0),
          k = ({ overlay: e, loadMore: t }) =>
            D(async (...t) => {
              e.toggle();
            }),
          A = ({ overlay: e, loadMore: t }) =>
            D(async (...t) => {
              e.hide();
            }),
          j = h(Ce, be),
          P = _e(`dIASV1yj3`),
          I = t(null);
        return (
          ce(),
          le({}),
          o(oe.Provider, {
            value: { primaryVariantId: `PTVfXZDWT`, variantClassNames: we },
            children: c(re, {
              id: ue ?? l,
              children: [
                o(De, { value: `html body { background: rgb(255, 255, 255); }` }),
                o(u.div, {
                  ...pe,
                  className: h(j, `framer-8ccmy4`, y),
                  ref: s,
                  style: { ...ie },
                  children: c(`section`, {
                    className: `framer-1as90ps`,
                    "data-framer-name": `Classes`,
                    id: P,
                    ref: I,
                    children: [
                      c(`div`, {
                        className: `framer-1fsp85l`,
                        "data-framer-name": `Text`,
                        children: [
                          o(me, {
                            href: { webPageId: `xidqw88KX` },
                            motionChild: !0,
                            nodeId: `HYr18HMNF`,
                            openInNewTab: !1,
                            scopeId: `BsJmXv8f2`,
                            children: o(u.a, {
                              className: `framer-q1lfp2 framer-ru7jxr`,
                              children: o(N, {
                                animated: !1,
                                BKVe8Pgvw: !0,
                                className: `framer-dwygg2`,
                                fICyAUQY1: !0,
                                layoutId: `GnTUvivbW`,
                                lKf_CQTz5: !0,
                              }),
                            }),
                          }),
                          o(v, {
                            breakpoint: w,
                            overrides: {
                              PJvxyckua: { y: (m?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
                              vEtyCquII: { y: (m?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
                            },
                            children: o(C, {
                              height: 26,
                              y: (m?.y || 0) + 0 + 0 + 96 + 0 + 0 + 36,
                              children: o(B, {
                                __framer__animate: { transition: Te },
                                __framer__animateOnce: !0,
                                __framer__enter: K,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-p46xwy-container`,
                                nodeId: `h9js2a65E`,
                                rendersWithMotion: !0,
                                scopeId: `BsJmXv8f2`,
                                children: o(F, {
                                  ggTbrSuHk: `Measuring and digital meters`,
                                  height: `100%`,
                                  id: `h9js2a65E`,
                                  layoutId: `h9js2a65E`,
                                  variant: `z6oSgdJxk`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          o(V, {
                            __framer__animate: { transition: Ee },
                            __framer__animateOnce: !0,
                            __framer__enter: K,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: o(n, {
                              children: o(`h3`, {
                                className: `framer-styles-preset-1d7ew99`,
                                "data-styles-preset": `nl385Jssa`,
                                children: `Digital Meters`,
                              }),
                            }),
                            className: `framer-stczzd`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      c(`div`, {
                        className: `framer-15c8eou`,
                        "data-framer-name": `ClassesGallery`,
                        children: [
                          o(Z, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `Aipu9ivB9` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Aipu9ivB9` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Aipu9ivB9` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: w,
                                      overrides: {
                                        PJvxyckua: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 0,
                                        },
                                        vEtyCquII: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 0,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 0,
                                        children: c(b, {
                                          className: `framer-1yjmeqv-container`,
                                          id: `1yjmeqv`,
                                          nodeId: `mZRr2ZuoV`,
                                          scopeId: `BsJmXv8f2`,
                                          children: [
                                            o(v, {
                                              breakpoint: w,
                                              overrides: {
                                                PJvxyckua: { oSlFkYxO1: t[2] },
                                                vEtyCquII: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(L, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 469,
                                                    src: `../../assets/images/zUIxsea74qJ16Q4PBAMjlxtyly8.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `mZRr2ZuoV`,
                                                jTs_fuWrm: k({ overlay: e }),
                                                JWP0bNV85: `Digital Multimeter`,
                                                layoutId: `mZRr2ZuoV`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            o(d, {
                                              children:
                                                e.visible &&
                                                o(r, {
                                                  children: a(
                                                    o(_, {
                                                      triggerId: `1yjmeqv`,
                                                      children: c(E, {
                                                        children: [
                                                          o(
                                                            u.div,
                                                            {
                                                              animate: {
                                                                opacity: 1,
                                                                transition: {
                                                                  delay: 0,
                                                                  duration: 0,
                                                                  ease: [0.5, 0, 0.88, 0.77],
                                                                  type: `tween`,
                                                                },
                                                              },
                                                              className: h(j, `framer-1b8vvta`),
                                                              "data-framer-portal-id": `1yjmeqv`,
                                                              exit: {
                                                                opacity: 0,
                                                                transition: {
                                                                  delay: 0,
                                                                  duration: 0,
                                                                  ease: [0.12, 0.23, 0.5, 1],
                                                                  type: `tween`,
                                                                },
                                                              },
                                                              initial: { opacity: 0 },
                                                              onTap: () => e.hide(),
                                                            },
                                                            `d1KpxvWEO`
                                                          ),
                                                          o(u.div, {
                                                            className: h(j, `framer-1u8g4e5`),
                                                            "data-framer-portal-id": `1yjmeqv`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-lnqfjx`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-nuh6vt`,
                                                                  children: [
                                                                    o(T, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: o(n, {
                                                                        children: o(`p`, {
                                                                          style: {
                                                                            "--font-selector": `SW50ZXItQm9sZA==`,
                                                                            "--framer-font-size": `20px`,
                                                                            "--framer-font-weight": `700`,
                                                                            "--framer-text-color": `rgb(71, 69, 69)`,
                                                                          },
                                                                          children: `Enquiry form`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-4bzw99`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-dd4zuh`,
                                                                      onTap: A({ overlay: e }),
                                                                      children: o(O, {
                                                                        animated: !1,
                                                                        className: `framer-ea7he4`,
                                                                        layoutId: `TqcIE36ye`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/2fb0700a-e5cd-4db4-b6ef-bfd9f26cf9b4/submit`,
                                                                  className: `framer-1qnys91`,
                                                                  nodeId: `X5i6nW1mD`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-12hx8x3`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Email`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-13hpq2s`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1g7xput`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-wu7bqa`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Mobile number`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1rkxx0e`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1ccw14e`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-7w5iky`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Product Name`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-ryf772`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1rwwnwx`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-s9hjd1`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Make, Model & Size`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-s93poj`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-j1xt6l`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(v, {
                                                                          breakpoint: w,
                                                                          overrides: {
                                                                            PJvxyckua: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-uowql8-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `mMUeGv932`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `BsJmXv8f2`,
                                                                              children: o(M, {
                                                                                height: `100%`,
                                                                                id: `mMUeGv932`,
                                                                                layoutId: `mMUeGv932`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: Y(
                                                                                  e,
                                                                                  {
                                                                                    pending: `n9wSMJDiA`,
                                                                                    success: `XKSibd1Ne`,
                                                                                  },
                                                                                  `Y6CHTJJM0`
                                                                                ),
                                                                                width: `100%`,
                                                                              }),
                                                                            }),
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                }),
                                                              ],
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                    X()
                                                  ),
                                                }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                          }),
                          o(Z, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `eN16WuNwM` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `eN16WuNwM` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `eN16WuNwM` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: w,
                                      overrides: {
                                        PJvxyckua: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 416,
                                        },
                                        vEtyCquII: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 0,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 0,
                                        children: c(b, {
                                          className: `framer-1x8l4af-container`,
                                          id: `1x8l4af`,
                                          nodeId: `Mkm4rAAcY`,
                                          scopeId: `BsJmXv8f2`,
                                          children: [
                                            o(v, {
                                              breakpoint: w,
                                              overrides: {
                                                PJvxyckua: { oSlFkYxO1: t[2] },
                                                vEtyCquII: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(L, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 402,
                                                    pixelWidth: 600,
                                                    src: `../../assets/images/dkl2yGW3ubtjM0z03PckON31e2c.png?width=600&height=402`,
                                                    srcSet: `../../assets/images/dkl2yGW3ubtjM0z03PckON31e2c.png 512w,../../assets/images/dkl2yGW3ubtjM0z03PckON31e2c.png?width=600&height=402 600w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `Mkm4rAAcY`,
                                                jTs_fuWrm: k({ overlay: e }),
                                                JWP0bNV85: `Clamp Multimeter`,
                                                layoutId: `Mkm4rAAcY`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            o(d, {
                                              children:
                                                e.visible &&
                                                o(r, {
                                                  children: a(
                                                    o(_, {
                                                      triggerId: `1x8l4af`,
                                                      children: c(E, {
                                                        children: [
                                                          o(
                                                            u.div,
                                                            {
                                                              animate: {
                                                                opacity: 1,
                                                                transition: {
                                                                  delay: 0,
                                                                  duration: 0,
                                                                  ease: [0.5, 0, 0.88, 0.77],
                                                                  type: `tween`,
                                                                },
                                                              },
                                                              className: h(j, `framer-1jto4or`),
                                                              "data-framer-portal-id": `1x8l4af`,
                                                              exit: {
                                                                opacity: 0,
                                                                transition: {
                                                                  delay: 0,
                                                                  duration: 0,
                                                                  ease: [0.12, 0.23, 0.5, 1],
                                                                  type: `tween`,
                                                                },
                                                              },
                                                              initial: { opacity: 0 },
                                                              onTap: () => e.hide(),
                                                            },
                                                            `FCobopJma`
                                                          ),
                                                          o(u.div, {
                                                            className: h(j, `framer-1bn42cd`),
                                                            "data-framer-portal-id": `1x8l4af`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-i6vpv1`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-1p7fplo`,
                                                                  children: [
                                                                    o(T, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: o(n, {
                                                                        children: o(`p`, {
                                                                          style: {
                                                                            "--font-selector": `SW50ZXItQm9sZA==`,
                                                                            "--framer-font-size": `20px`,
                                                                            "--framer-font-weight": `700`,
                                                                            "--framer-text-color": `rgb(71, 69, 69)`,
                                                                          },
                                                                          children: `Enquiry form`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-k3xvst`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-zj4y6q`,
                                                                      onTap: A({ overlay: e }),
                                                                      children: o(O, {
                                                                        animated: !1,
                                                                        className: `framer-9k6gnh`,
                                                                        layoutId: `E0g23Awxe`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/c30885c0-20c9-4320-ac3e-65615a49a725/submit`,
                                                                  className: `framer-xdlbnc`,
                                                                  nodeId: `gSvQCpVLQ`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-lgcnrl`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Email`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-zsjrdf`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1j4f30o`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1osqx7h`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Mobile number`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-ssfnsq`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-12x26x8`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1xx139o`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Product Name`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-7bxwa3`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1u4cnok`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-16cot7g`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Make, Model & Size`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1a33l01`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-aw7yt6`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(v, {
                                                                          breakpoint: w,
                                                                          overrides: {
                                                                            PJvxyckua: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-x1lajx-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `vfdvf_Csd`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `BsJmXv8f2`,
                                                                              children: o(M, {
                                                                                height: `100%`,
                                                                                id: `vfdvf_Csd`,
                                                                                layoutId: `vfdvf_Csd`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: Y(
                                                                                  e,
                                                                                  {
                                                                                    pending: `n9wSMJDiA`,
                                                                                    success: `XKSibd1Ne`,
                                                                                  },
                                                                                  `Y6CHTJJM0`
                                                                                ),
                                                                                width: `100%`,
                                                                              }),
                                                                            }),
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                }),
                                                              ],
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                    X()
                                                  ),
                                                }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                          }),
                          o(Z, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `zj_rUtlZp` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `zj_rUtlZp` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `zj_rUtlZp` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: w,
                                      overrides: {
                                        PJvxyckua: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 832,
                                        },
                                        vEtyCquII: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 416,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 0,
                                        children: c(b, {
                                          className: `framer-ivyel2-container`,
                                          id: `ivyel2`,
                                          nodeId: `u5V_S7JD4`,
                                          scopeId: `BsJmXv8f2`,
                                          children: [
                                            o(v, {
                                              breakpoint: w,
                                              overrides: {
                                                PJvxyckua: { oSlFkYxO1: t[2] },
                                                vEtyCquII: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(L, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 472,
                                                    pixelWidth: 450,
                                                    src: `../../assets/images/7Si0cBW7OBuI29Td1sNbQnQVSVI.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `u5V_S7JD4`,
                                                jTs_fuWrm: k({ overlay: e }),
                                                JWP0bNV85: `Infrared Thermometer`,
                                                layoutId: `u5V_S7JD4`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            o(d, {
                                              children:
                                                e.visible &&
                                                o(r, {
                                                  children: a(
                                                    o(_, {
                                                      triggerId: `ivyel2`,
                                                      children: c(E, {
                                                        children: [
                                                          o(
                                                            u.div,
                                                            {
                                                              animate: {
                                                                opacity: 1,
                                                                transition: {
                                                                  delay: 0,
                                                                  duration: 0,
                                                                  ease: [0.5, 0, 0.88, 0.77],
                                                                  type: `tween`,
                                                                },
                                                              },
                                                              className: h(j, `framer-10ezbt4`),
                                                              "data-framer-portal-id": `ivyel2`,
                                                              exit: {
                                                                opacity: 0,
                                                                transition: {
                                                                  delay: 0,
                                                                  duration: 0,
                                                                  ease: [0.12, 0.23, 0.5, 1],
                                                                  type: `tween`,
                                                                },
                                                              },
                                                              initial: { opacity: 0 },
                                                              onTap: () => e.hide(),
                                                            },
                                                            `m__080NKM`
                                                          ),
                                                          o(u.div, {
                                                            className: h(j, `framer-lhpcry`),
                                                            "data-framer-portal-id": `ivyel2`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-gkjy14`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-1w8maue`,
                                                                  children: [
                                                                    o(T, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: o(n, {
                                                                        children: o(`p`, {
                                                                          style: {
                                                                            "--font-selector": `SW50ZXItQm9sZA==`,
                                                                            "--framer-font-size": `20px`,
                                                                            "--framer-font-weight": `700`,
                                                                            "--framer-text-color": `rgb(71, 69, 69)`,
                                                                          },
                                                                          children: `Enquiry form`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-1g6vymc`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-16cx280`,
                                                                      onTap: A({ overlay: e }),
                                                                      children: o(O, {
                                                                        animated: !1,
                                                                        className: `framer-q8b6zh`,
                                                                        layoutId: `dkLp9tqEA`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/7ec00490-2feb-4c59-b332-35d180f1fb6f/submit`,
                                                                  className: `framer-g5wyfy`,
                                                                  nodeId: `WSKN8gY4O`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-nf40do`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Email`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1rgscuj`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-9yfpw9`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-m0xb7l`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Mobile number`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1fvdwz7`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-qja9aj`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-lpw3s4`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Product Name`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1vay4nr`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1kzcbru`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1fswrw3`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Make, Model & Size`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-mr8084`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-2p9vkk`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(v, {
                                                                          breakpoint: w,
                                                                          overrides: {
                                                                            PJvxyckua: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-w2ttvd-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `EvZ0COKc1`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `BsJmXv8f2`,
                                                                              children: o(M, {
                                                                                height: `100%`,
                                                                                id: `EvZ0COKc1`,
                                                                                layoutId: `EvZ0COKc1`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: Y(
                                                                                  e,
                                                                                  {
                                                                                    pending: `n9wSMJDiA`,
                                                                                    success: `XKSibd1Ne`,
                                                                                  },
                                                                                  `Y6CHTJJM0`
                                                                                ),
                                                                                width: `100%`,
                                                                              }),
                                                                            }),
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                }),
                                                              ],
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                    X()
                                                  ),
                                                }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                          }),
                          o(Z, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `BsPTtD7C5` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `BsPTtD7C5` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `BsPTtD7C5` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: w,
                                      overrides: {
                                        PJvxyckua: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1248,
                                        },
                                        vEtyCquII: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 416,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 416,
                                        children: c(b, {
                                          className: `framer-5wuka9-container`,
                                          id: `5wuka9`,
                                          nodeId: `I1RKnGm1k`,
                                          scopeId: `BsJmXv8f2`,
                                          children: [
                                            o(v, {
                                              breakpoint: w,
                                              overrides: {
                                                PJvxyckua: { oSlFkYxO1: t[2] },
                                                vEtyCquII: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(L, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 1040,
                                                    pixelWidth: 1560,
                                                    src: `../../assets/images/cmtZPTLKKz92cqUNWVsxUC636I.png?width=1560&height=1040`,
                                                    srcSet: `../../assets/images/cmtZPTLKKz92cqUNWVsxUC636I.png 512w,../../assets/images/cmtZPTLKKz92cqUNWVsxUC636I.png?scale-down-to=1024&width=1560&height=1040 1024w,../../assets/images/cmtZPTLKKz92cqUNWVsxUC636I.png?width=1560&height=1040 1560w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `I1RKnGm1k`,
                                                jTs_fuWrm: k({ overlay: e }),
                                                JWP0bNV85: `Laser Distance Meters`,
                                                layoutId: `I1RKnGm1k`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            o(d, {
                                              children:
                                                e.visible &&
                                                o(r, {
                                                  children: a(
                                                    o(_, {
                                                      triggerId: `5wuka9`,
                                                      children: c(E, {
                                                        children: [
                                                          o(
                                                            u.div,
                                                            {
                                                              animate: {
                                                                opacity: 1,
                                                                transition: {
                                                                  delay: 0,
                                                                  duration: 0,
                                                                  ease: [0.5, 0, 0.88, 0.77],
                                                                  type: `tween`,
                                                                },
                                                              },
                                                              className: h(j, `framer-1eu7chg`),
                                                              "data-framer-portal-id": `5wuka9`,
                                                              exit: {
                                                                opacity: 0,
                                                                transition: {
                                                                  delay: 0,
                                                                  duration: 0,
                                                                  ease: [0.12, 0.23, 0.5, 1],
                                                                  type: `tween`,
                                                                },
                                                              },
                                                              initial: { opacity: 0 },
                                                              onTap: () => e.hide(),
                                                            },
                                                            `lXnyOxMEl`
                                                          ),
                                                          o(u.div, {
                                                            className: h(j, `framer-mxb5fq`),
                                                            "data-framer-portal-id": `5wuka9`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-1bp3b8h`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-118vwsc`,
                                                                  children: [
                                                                    o(T, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: o(n, {
                                                                        children: o(`p`, {
                                                                          style: {
                                                                            "--font-selector": `SW50ZXItQm9sZA==`,
                                                                            "--framer-font-size": `20px`,
                                                                            "--framer-font-weight": `700`,
                                                                            "--framer-text-color": `rgb(71, 69, 69)`,
                                                                          },
                                                                          children: `Enquiry form`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-1qerepd`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-iqlz63`,
                                                                      onTap: A({ overlay: e }),
                                                                      children: o(O, {
                                                                        animated: !1,
                                                                        className: `framer-1yhufes`,
                                                                        layoutId: `ZDL_MRb8h`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/f93b4c05-daf5-41e8-b4c4-a883a630d905/submit`,
                                                                  className: `framer-dllpg3`,
                                                                  nodeId: `O2VyOje1W`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-9056s6`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Email`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-11555y4`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-vcym0n`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-njpnua`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Mobile number`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-hqytmm`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1aydbpp`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-wjtq7c`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Product Name`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-dmlglv`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-lt9e3k`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-99aj4k`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Make, Model & Size`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1ljqiiq`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-ojk49i`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(v, {
                                                                          breakpoint: w,
                                                                          overrides: {
                                                                            PJvxyckua: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-avwtp6-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `MGAgPXYof`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `BsJmXv8f2`,
                                                                              children: o(M, {
                                                                                height: `100%`,
                                                                                id: `MGAgPXYof`,
                                                                                layoutId: `MGAgPXYof`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: Y(
                                                                                  e,
                                                                                  {
                                                                                    pending: `n9wSMJDiA`,
                                                                                    success: `XKSibd1Ne`,
                                                                                  },
                                                                                  `Y6CHTJJM0`
                                                                                ),
                                                                                width: `100%`,
                                                                              }),
                                                                            }),
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                }),
                                                              ],
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                    X()
                                                  ),
                                                }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                          }),
                          o(Z, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `a_zViqoap` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `a_zViqoap` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `a_zViqoap` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: w,
                                      overrides: {
                                        PJvxyckua: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1664,
                                        },
                                        vEtyCquII: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 832,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 416,
                                        children: c(b, {
                                          className: `framer-wp9q1h-container`,
                                          id: `wp9q1h`,
                                          nodeId: `O_DuqWZLU`,
                                          scopeId: `BsJmXv8f2`,
                                          children: [
                                            o(v, {
                                              breakpoint: w,
                                              overrides: {
                                                PJvxyckua: { oSlFkYxO1: t[2] },
                                                vEtyCquII: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(L, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 450,
                                                    pixelWidth: 447,
                                                    src: `../../assets/images/wH3KKArJDQRuSbrrQPWJyA.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `O_DuqWZLU`,
                                                jTs_fuWrm: k({ overlay: e }),
                                                JWP0bNV85: `Portable Imager IR Thermometer`,
                                                layoutId: `O_DuqWZLU`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            o(d, {
                                              children:
                                                e.visible &&
                                                o(r, {
                                                  children: a(
                                                    o(_, {
                                                      triggerId: `wp9q1h`,
                                                      children: c(E, {
                                                        children: [
                                                          o(
                                                            u.div,
                                                            {
                                                              animate: {
                                                                opacity: 1,
                                                                transition: {
                                                                  delay: 0,
                                                                  duration: 0,
                                                                  ease: [0.5, 0, 0.88, 0.77],
                                                                  type: `tween`,
                                                                },
                                                              },
                                                              className: h(j, `framer-19e7nys`),
                                                              "data-framer-portal-id": `wp9q1h`,
                                                              exit: {
                                                                opacity: 0,
                                                                transition: {
                                                                  delay: 0,
                                                                  duration: 0,
                                                                  ease: [0.12, 0.23, 0.5, 1],
                                                                  type: `tween`,
                                                                },
                                                              },
                                                              initial: { opacity: 0 },
                                                              onTap: () => e.hide(),
                                                            },
                                                            `Ll4hpGriR`
                                                          ),
                                                          o(u.div, {
                                                            className: h(j, `framer-g2badk`),
                                                            "data-framer-portal-id": `wp9q1h`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-1jeqn89`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-1hqlj28`,
                                                                  children: [
                                                                    o(T, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: o(n, {
                                                                        children: o(`p`, {
                                                                          style: {
                                                                            "--font-selector": `SW50ZXItQm9sZA==`,
                                                                            "--framer-font-size": `20px`,
                                                                            "--framer-font-weight": `700`,
                                                                            "--framer-text-color": `rgb(71, 69, 69)`,
                                                                          },
                                                                          children: `Enquiry form`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-13tye5v`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-1ah8r3h`,
                                                                      onTap: A({ overlay: e }),
                                                                      children: o(O, {
                                                                        animated: !1,
                                                                        className: `framer-1tqris4`,
                                                                        layoutId: `cNRrjN1pt`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/72904f5a-9dde-4af7-9ef1-575db1031a70/submit`,
                                                                  className: `framer-cbeu31`,
                                                                  nodeId: `cWNWpMy1C`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-12yfs0n`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Email`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-ycmolj`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-k5zqwq`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1gikf40`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Mobile number`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-hxr0wo`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-gjqbtj`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-13rz9wz`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Product Name`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-dx3p4d`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1sqqy38`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1rupofg`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Make, Model & Size`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1cnfmje`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-lyode9`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(v, {
                                                                          breakpoint: w,
                                                                          overrides: {
                                                                            PJvxyckua: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-9vpzdo-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `zbN0dwDoU`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `BsJmXv8f2`,
                                                                              children: o(M, {
                                                                                height: `100%`,
                                                                                id: `zbN0dwDoU`,
                                                                                layoutId: `zbN0dwDoU`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: Y(
                                                                                  e,
                                                                                  {
                                                                                    pending: `n9wSMJDiA`,
                                                                                    success: `XKSibd1Ne`,
                                                                                  },
                                                                                  `Y6CHTJJM0`
                                                                                ),
                                                                                width: `100%`,
                                                                              }),
                                                                            }),
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                }),
                                                              ],
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                    X()
                                                  ),
                                                }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                          }),
                          o(Z, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `Iy3Du0myi` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Iy3Du0myi` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Iy3Du0myi` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: w,
                                      overrides: {
                                        PJvxyckua: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 2080,
                                        },
                                        vEtyCquII: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 832,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 416,
                                        children: c(b, {
                                          className: `framer-1blxnpl-container`,
                                          id: `1blxnpl`,
                                          nodeId: `GHm2mikqP`,
                                          scopeId: `BsJmXv8f2`,
                                          children: [
                                            o(v, {
                                              breakpoint: w,
                                              overrides: {
                                                PJvxyckua: { oSlFkYxO1: t[2] },
                                                vEtyCquII: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(L, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 347,
                                                    pixelWidth: 520,
                                                    src: `../../assets/images/6cvrfTEzZ7UVBvEAcUl89gJIe6Q.png?width=520&height=347`,
                                                    srcSet: `../../assets/images/6cvrfTEzZ7UVBvEAcUl89gJIe6Q.png 512w,../../assets/images/6cvrfTEzZ7UVBvEAcUl89gJIe6Q.png?width=520&height=347 520w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `GHm2mikqP`,
                                                jTs_fuWrm: k({ overlay: e }),
                                                JWP0bNV85: `Earth Resistance Tester`,
                                                layoutId: `GHm2mikqP`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            o(d, {
                                              children:
                                                e.visible &&
                                                o(r, {
                                                  children: a(
                                                    o(_, {
                                                      triggerId: `1blxnpl`,
                                                      children: c(E, {
                                                        children: [
                                                          o(
                                                            u.div,
                                                            {
                                                              animate: {
                                                                opacity: 1,
                                                                transition: {
                                                                  delay: 0,
                                                                  duration: 0,
                                                                  ease: [0.5, 0, 0.88, 0.77],
                                                                  type: `tween`,
                                                                },
                                                              },
                                                              className: h(j, `framer-64hsuj`),
                                                              "data-framer-portal-id": `1blxnpl`,
                                                              exit: {
                                                                opacity: 0,
                                                                transition: {
                                                                  delay: 0,
                                                                  duration: 0,
                                                                  ease: [0.12, 0.23, 0.5, 1],
                                                                  type: `tween`,
                                                                },
                                                              },
                                                              initial: { opacity: 0 },
                                                              onTap: () => e.hide(),
                                                            },
                                                            `o3EAcADYW`
                                                          ),
                                                          o(u.div, {
                                                            className: h(j, `framer-6ytshe`),
                                                            "data-framer-portal-id": `1blxnpl`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-1eebrwe`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-s5kwku`,
                                                                  children: [
                                                                    o(T, {
                                                                      __fromCanvasComponent: !0,
                                                                      children: o(n, {
                                                                        children: o(`p`, {
                                                                          style: {
                                                                            "--font-selector": `SW50ZXItQm9sZA==`,
                                                                            "--framer-font-size": `20px`,
                                                                            "--framer-font-weight": `700`,
                                                                            "--framer-text-color": `rgb(71, 69, 69)`,
                                                                          },
                                                                          children: `Enquiry form`,
                                                                        }),
                                                                      }),
                                                                      className: `framer-pje14n`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-flwp71`,
                                                                      onTap: A({ overlay: e }),
                                                                      children: o(O, {
                                                                        animated: !1,
                                                                        className: `framer-1nk595x`,
                                                                        layoutId: `rXEVpk_5H`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/ae37a484-e606-4a46-a5bf-463d62cd5c56/submit`,
                                                                  className: `framer-so71zz`,
                                                                  nodeId: `IMflcLn80`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-14wzdny`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Email`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1qk512a`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-16i6afs`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-khtvoo`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Mobile number`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1uqby09`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1img26p`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1wlry8g`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Product Name`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1ygt85n`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-18oidqy`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1qg6d0o`,
                                                                          children: [
                                                                            o(T, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: o(n, {
                                                                                children: o(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Make, Model & Size`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-5mu7h8`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-aof50a`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(v, {
                                                                          breakpoint: w,
                                                                          overrides: {
                                                                            PJvxyckua: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-4aran6-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `veqqezEWG`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `BsJmXv8f2`,
                                                                              children: o(M, {
                                                                                height: `100%`,
                                                                                id: `veqqezEWG`,
                                                                                layoutId: `veqqezEWG`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: Y(
                                                                                  e,
                                                                                  {
                                                                                    pending: `n9wSMJDiA`,
                                                                                    success: `XKSibd1Ne`,
                                                                                  },
                                                                                  `Y6CHTJJM0`
                                                                                ),
                                                                                width: `100%`,
                                                                              }),
                                                                            }),
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                }),
                                                              ],
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                    X()
                                                  ),
                                                }),
                                            }),
                                          ],
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
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-2i7x2.framer-ru7jxr, .framer-2i7x2 .framer-ru7jxr { display: block; }`,
        `.framer-2i7x2.framer-8ccmy4 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-2i7x2 .framer-1as90ps { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 96px 24px 96px 24px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-2i7x2 .framer-1fsp85l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2i7x2 .framer-q1lfp2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-2i7x2 .framer-dwygg2 { --1335ju: 2; --18mrqx2: #000000; --3it368: 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-2i7x2 .framer-p46xwy-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-2i7x2 .framer-stczzd { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-2i7x2 .framer-15c8eou { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2i7x2 .framer-1yjmeqv-container, .framer-2i7x2 .framer-1x8l4af-container, .framer-2i7x2 .framer-ivyel2-container, .framer-2i7x2 .framer-5wuka9-container, .framer-2i7x2 .framer-wp9q1h-container, .framer-2i7x2 .framer-1blxnpl-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-2i7x2.framer-1b8vvta, .framer-2i7x2.framer-1jto4or, .framer-2i7x2.framer-10ezbt4, .framer-2i7x2.framer-1eu7chg, .framer-2i7x2.framer-19e7nys, .framer-2i7x2.framer-64hsuj { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-2i7x2.framer-1u8g4e5, .framer-2i7x2.framer-1bn42cd, .framer-2i7x2.framer-lhpcry, .framer-2i7x2.framer-mxb5fq, .framer-2i7x2.framer-g2badk, .framer-2i7x2.framer-6ytshe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-2i7x2 .framer-lnqfjx, .framer-2i7x2 .framer-i6vpv1, .framer-2i7x2 .framer-gkjy14, .framer-2i7x2 .framer-1bp3b8h, .framer-2i7x2 .framer-1jeqn89, .framer-2i7x2 .framer-1eebrwe { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-2i7x2 .framer-nuh6vt, .framer-2i7x2 .framer-1p7fplo, .framer-2i7x2 .framer-1w8maue, .framer-2i7x2 .framer-118vwsc, .framer-2i7x2 .framer-1hqlj28, .framer-2i7x2 .framer-s5kwku { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-2i7x2 .framer-4bzw99, .framer-2i7x2 .framer-k3xvst, .framer-2i7x2 .framer-1g6vymc, .framer-2i7x2 .framer-1qerepd, .framer-2i7x2 .framer-13tye5v, .framer-2i7x2 .framer-pje14n { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-2i7x2 .framer-dd4zuh, .framer-2i7x2 .framer-zj4y6q, .framer-2i7x2 .framer-16cx280, .framer-2i7x2 .framer-iqlz63, .framer-2i7x2 .framer-1ah8r3h, .framer-2i7x2 .framer-flwp71 { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-2i7x2 .framer-ea7he4, .framer-2i7x2 .framer-9k6gnh, .framer-2i7x2 .framer-q8b6zh, .framer-2i7x2 .framer-1yhufes, .framer-2i7x2 .framer-1tqris4, .framer-2i7x2 .framer-1nk595x { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-2i7x2 .framer-1qnys91, .framer-2i7x2 .framer-xdlbnc, .framer-2i7x2 .framer-g5wyfy, .framer-2i7x2 .framer-dllpg3, .framer-2i7x2 .framer-cbeu31, .framer-2i7x2 .framer-so71zz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-2i7x2 .framer-12hx8x3, .framer-2i7x2 .framer-wu7bqa, .framer-2i7x2 .framer-7w5iky, .framer-2i7x2 .framer-s9hjd1, .framer-2i7x2 .framer-lgcnrl, .framer-2i7x2 .framer-1osqx7h, .framer-2i7x2 .framer-1xx139o, .framer-2i7x2 .framer-16cot7g, .framer-2i7x2 .framer-nf40do, .framer-2i7x2 .framer-m0xb7l, .framer-2i7x2 .framer-lpw3s4, .framer-2i7x2 .framer-1fswrw3, .framer-2i7x2 .framer-9056s6, .framer-2i7x2 .framer-njpnua, .framer-2i7x2 .framer-wjtq7c, .framer-2i7x2 .framer-99aj4k, .framer-2i7x2 .framer-12yfs0n, .framer-2i7x2 .framer-1gikf40, .framer-2i7x2 .framer-13rz9wz, .framer-2i7x2 .framer-1rupofg, .framer-2i7x2 .framer-14wzdny, .framer-2i7x2 .framer-khtvoo, .framer-2i7x2 .framer-1wlry8g, .framer-2i7x2 .framer-1qg6d0o { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2i7x2 .framer-13hpq2s, .framer-2i7x2 .framer-1rkxx0e, .framer-2i7x2 .framer-ryf772, .framer-2i7x2 .framer-s93poj, .framer-2i7x2 .framer-zsjrdf, .framer-2i7x2 .framer-ssfnsq, .framer-2i7x2 .framer-7bxwa3, .framer-2i7x2 .framer-1a33l01, .framer-2i7x2 .framer-1rgscuj, .framer-2i7x2 .framer-1fvdwz7, .framer-2i7x2 .framer-1vay4nr, .framer-2i7x2 .framer-mr8084, .framer-2i7x2 .framer-11555y4, .framer-2i7x2 .framer-hqytmm, .framer-2i7x2 .framer-dmlglv, .framer-2i7x2 .framer-1ljqiiq, .framer-2i7x2 .framer-ycmolj, .framer-2i7x2 .framer-hxr0wo, .framer-2i7x2 .framer-dx3p4d, .framer-2i7x2 .framer-1cnfmje, .framer-2i7x2 .framer-1qk512a, .framer-2i7x2 .framer-1uqby09, .framer-2i7x2 .framer-1ygt85n, .framer-2i7x2 .framer-5mu7h8 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-2i7x2 .framer-1g7xput, .framer-2i7x2 .framer-1ccw14e, .framer-2i7x2 .framer-1rwwnwx, .framer-2i7x2 .framer-j1xt6l, .framer-2i7x2 .framer-1j4f30o, .framer-2i7x2 .framer-12x26x8, .framer-2i7x2 .framer-1u4cnok, .framer-2i7x2 .framer-aw7yt6, .framer-2i7x2 .framer-9yfpw9, .framer-2i7x2 .framer-qja9aj, .framer-2i7x2 .framer-1kzcbru, .framer-2i7x2 .framer-2p9vkk, .framer-2i7x2 .framer-vcym0n, .framer-2i7x2 .framer-1aydbpp, .framer-2i7x2 .framer-lt9e3k, .framer-2i7x2 .framer-ojk49i, .framer-2i7x2 .framer-k5zqwq, .framer-2i7x2 .framer-gjqbtj, .framer-2i7x2 .framer-1sqqy38, .framer-2i7x2 .framer-lyode9, .framer-2i7x2 .framer-16i6afs, .framer-2i7x2 .framer-1img26p, .framer-2i7x2 .framer-18oidqy, .framer-2i7x2 .framer-aof50a { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-2i7x2 .framer-uowql8-container, .framer-2i7x2 .framer-x1lajx-container, .framer-2i7x2 .framer-w2ttvd-container, .framer-2i7x2 .framer-avwtp6-container, .framer-2i7x2 .framer-9vpzdo-container, .framer-2i7x2 .framer-4aran6-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        ...D,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-2i7x2.framer-8ccmy4 { width: 810px; } .framer-2i7x2 .framer-1as90ps { padding: 80px 24px 80px 24px; } .framer-2i7x2 .framer-15c8eou { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-2i7x2 .framer-lnqfjx, .framer-2i7x2 .framer-i6vpv1, .framer-2i7x2 .framer-gkjy14, .framer-2i7x2 .framer-1bp3b8h, .framer-2i7x2 .framer-1jeqn89, .framer-2i7x2 .framer-1eebrwe { height: min-content; width: min-content; } .framer-2i7x2 .framer-nuh6vt, .framer-2i7x2 .framer-1p7fplo, .framer-2i7x2 .framer-1w8maue, .framer-2i7x2 .framer-118vwsc, .framer-2i7x2 .framer-1hqlj28, .framer-2i7x2 .framer-s5kwku { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-2i7x2.framer-8ccmy4 { width: 390px; } .framer-2i7x2 .framer-1as90ps { padding: 80px 16px 80px 16px; } .framer-2i7x2 .framer-15c8eou { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-2i7x2 .framer-1yjmeqv-container { order: 0; } .framer-2i7x2.framer-1u8g4e5, .framer-2i7x2.framer-1bn42cd, .framer-2i7x2.framer-lhpcry, .framer-2i7x2.framer-mxb5fq, .framer-2i7x2.framer-g2badk, .framer-2i7x2.framer-6ytshe { padding: 60px 0px 0px 0px; } .framer-2i7x2 .framer-lnqfjx, .framer-2i7x2 .framer-i6vpv1, .framer-2i7x2 .framer-gkjy14, .framer-2i7x2 .framer-1bp3b8h, .framer-2i7x2 .framer-1jeqn89, .framer-2i7x2 .framer-1eebrwe { height: min-content; width: 300px; } .framer-2i7x2 .framer-1qnys91, .framer-2i7x2 .framer-xdlbnc, .framer-2i7x2 .framer-g5wyfy, .framer-2i7x2 .framer-dllpg3, .framer-2i7x2 .framer-cbeu31, .framer-2i7x2 .framer-so71zz { width: 261px; } .framer-2i7x2 .framer-1x8l4af-container { order: 1; } .framer-2i7x2 .framer-ivyel2-container { order: 2; } .framer-2i7x2 .framer-5wuka9-container { order: 3; } .framer-2i7x2 .framer-wp9q1h-container { order: 4; } .framer-2i7x2 .framer-1blxnpl-container { order: 5; }}`,
      ],
      `framer-2i7x2`
    )),
    (Q.displayName = `Power Tools 2Nd Page`),
    (Q.defaultProps = { height: 1479, width: 1200 }),
    w(
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
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
              weight: `500`,
            },
          ],
        },
        ...R,
        ...z,
        ...H,
        ...U,
        ...W,
        ...m(ye),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerBsJmXv8f2`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1200`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `{"dIASV1yj3":{"pattern":":dIASV1yj3","name":"classes"}}`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"vEtyCquII":{"layout":["fixed","fixed"]},"PJvxyckua":{"layout":["fixed","fixed"]}}}`,
            framerResponsiveScreen: ``,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicHeight: `1479`,
            framerAutoSizeImages: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=Qqe2pWOksAilqECz3XfUJEDz5TAWd0Y-9XJtxjTcIqY.htODqGYA.mjs.map
