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
import xe, { t as Se } from "./OwVDg4fh097DrVpf5FkVqK3eWVbbG3iJrjdf6THFDko.sn1kiUH3.mjs";
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
      qML9e_DAR: `(min-width: 1200px)`,
      Vi6CNWQVY: `(min-width: 810px) and (max-width: 1199.98px)`,
      yfbBVg1wg: `(max-width: 809.98px)`,
    }),
    (Ce = `framer-9ZYL5`),
    (we = {
      qML9e_DAR: `framer-v-17qar63`,
      Vi6CNWQVY: `framer-v-1af8isy`,
      yfbBVg1wg: `framer-v-10kb040`,
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
    (Oe = { Desktop: `qML9e_DAR`, Phone: `yfbBVg1wg`, Tablet: `Vi6CNWQVY` }),
    (ke = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Oe[r.variant] ?? r.variant ?? `qML9e_DAR`,
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
          P = _e(`tBu8ebJMs`),
          I = t(null);
        return (
          ce(),
          le({}),
          o(oe.Provider, {
            value: { primaryVariantId: `qML9e_DAR`, variantClassNames: we },
            children: c(re, {
              id: ue ?? l,
              children: [
                o(De, { value: `html body { background: rgb(255, 255, 255); }` }),
                o(u.div, {
                  ...pe,
                  className: h(j, `framer-17qar63`, y),
                  ref: s,
                  style: { ...ie },
                  children: c(`section`, {
                    className: `framer-76aupj`,
                    "data-framer-name": `Classes`,
                    id: P,
                    ref: I,
                    children: [
                      c(`div`, {
                        className: `framer-1oaheyl`,
                        "data-framer-name": `Text`,
                        children: [
                          o(me, {
                            href: { webPageId: `xidqw88KX` },
                            motionChild: !0,
                            nodeId: `FOaTVBAIM`,
                            openInNewTab: !1,
                            scopeId: `huy0hzZNy`,
                            children: o(u.a, {
                              className: `framer-16p115y framer-1ub0c81`,
                              children: o(N, {
                                animated: !1,
                                BKVe8Pgvw: !0,
                                className: `framer-1yuzrd3`,
                                fICyAUQY1: !0,
                                layoutId: `QmlQuRE7R`,
                                lKf_CQTz5: !0,
                              }),
                            }),
                          }),
                          o(v, {
                            breakpoint: w,
                            overrides: {
                              Vi6CNWQVY: { y: (m?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
                              yfbBVg1wg: { y: (m?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
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
                                className: `framer-6rofby-container`,
                                nodeId: `crDWLMEuo`,
                                rendersWithMotion: !0,
                                scopeId: `huy0hzZNy`,
                                children: o(F, {
                                  ggTbrSuHk: `Measuring and digital meters`,
                                  height: `100%`,
                                  id: `crDWLMEuo`,
                                  layoutId: `crDWLMEuo`,
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
                                children: `Measuring meters`,
                              }),
                            }),
                            className: `framer-epfx06`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      c(`div`, {
                        className: `framer-hch66h`,
                        "data-framer-name": `ClassesGallery`,
                        children: [
                          o(Z, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `MK7UoJYTu` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `MK7UoJYTu` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `MK7UoJYTu` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: w,
                                      overrides: {
                                        Vi6CNWQVY: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 0,
                                        },
                                        yfbBVg1wg: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 0,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 0,
                                        children: c(b, {
                                          className: `framer-8ho29i-container`,
                                          id: `8ho29i`,
                                          nodeId: `SBeq5Owqz`,
                                          scopeId: `huy0hzZNy`,
                                          children: [
                                            o(v, {
                                              breakpoint: w,
                                              overrides: {
                                                Vi6CNWQVY: { oSlFkYxO1: t[1] },
                                                yfbBVg1wg: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(L, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 834,
                                                    src: `../../assets/images/57VidEWoxls6xvjkNodFg5osvBM.png?width=834&height=469`,
                                                    srcSet: `../../assets/images/57VidEWoxls6xvjkNodFg5osvBM.png 512w,../../assets/images/57VidEWoxls6xvjkNodFg5osvBM.png?width=834&height=469 834w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `SBeq5Owqz`,
                                                jTs_fuWrm: k({ overlay: e }),
                                                JWP0bNV85: `Vernier Caliper`,
                                                layoutId: `SBeq5Owqz`,
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
                                                      triggerId: `8ho29i`,
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
                                                              className: h(j, `framer-1xwhqz7`),
                                                              "data-framer-portal-id": `8ho29i`,
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
                                                            `gQIlr3Hh_`
                                                          ),
                                                          o(u.div, {
                                                            className: h(j, `framer-z6zsta`),
                                                            "data-framer-portal-id": `8ho29i`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-13ttqt9`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-1fde46o`,
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
                                                                      className: `framer-1lsrxrz`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-1ftkarz`,
                                                                      onTap: A({ overlay: e }),
                                                                      children: o(O, {
                                                                        animated: !1,
                                                                        className: `framer-1nb3dao`,
                                                                        layoutId: `WTJStvp6R`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/b433e43c-3c61-4156-b0e9-c78dab92437d/submit`,
                                                                  className: `framer-lil7n6`,
                                                                  nodeId: `Uh8B85jEI`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-xbdxtm`,
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
                                                                              className: `framer-t43trd`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-da185w`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1gvrknb`,
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
                                                                              className: `framer-1xim9jd`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1jk5acs`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-2qhh4r`,
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
                                                                              className: `framer-dsoxai`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1p2x31s`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1uygx0z`,
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
                                                                              className: `framer-12jnm4w`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-ykb3px`,
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
                                                                            yfbBVg1wg: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-ymx4x5-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `PbmS5lkKn`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `huy0hzZNy`,
                                                                              children: o(M, {
                                                                                height: `100%`,
                                                                                id: `PbmS5lkKn`,
                                                                                layoutId: `PbmS5lkKn`,
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
                                      href: { webPageId: `y6rwRQvC2` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `y6rwRQvC2` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `y6rwRQvC2` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: w,
                                      overrides: {
                                        Vi6CNWQVY: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 0,
                                        },
                                        yfbBVg1wg: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 416,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 0,
                                        children: c(b, {
                                          className: `framer-7zrvc0-container`,
                                          id: `7zrvc0`,
                                          nodeId: `ANRJ11k15`,
                                          scopeId: `huy0hzZNy`,
                                          children: [
                                            o(v, {
                                              breakpoint: w,
                                              overrides: {
                                                Vi6CNWQVY: { oSlFkYxO1: t[1] },
                                                yfbBVg1wg: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(L, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 798,
                                                    pixelWidth: 1420,
                                                    src: `../../assets/images/EbghHPscJTwJnxk4QN71hEnOw.webp?width=1420&height=798`,
                                                    srcSet: `../../assets/images/EbghHPscJTwJnxk4QN71hEnOw.webp 512w,../../assets/images/EbghHPscJTwJnxk4QN71hEnOw.webp?scale-down-to=1024&width=1420&height=798 1024w,../../assets/images/EbghHPscJTwJnxk4QN71hEnOw.webp?width=1420&height=798 1420w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `ANRJ11k15`,
                                                jTs_fuWrm: k({ overlay: e }),
                                                JWP0bNV85: ` Digital Vernier Caliper`,
                                                layoutId: `ANRJ11k15`,
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
                                                      triggerId: `7zrvc0`,
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
                                                              className: h(j, `framer-1n5p41k`),
                                                              "data-framer-portal-id": `7zrvc0`,
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
                                                            `ZKRi3jMtU`
                                                          ),
                                                          o(u.div, {
                                                            className: h(j, `framer-1n45h00`),
                                                            "data-framer-portal-id": `7zrvc0`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-aq7d2i`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-5dh5zc`,
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
                                                                      className: `framer-1iuw7lk`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-1kyxg1p`,
                                                                      onTap: A({ overlay: e }),
                                                                      children: o(O, {
                                                                        animated: !1,
                                                                        className: `framer-938szu`,
                                                                        layoutId: `E3AHyLmsv`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/c45f435d-5c22-4015-ac79-64c9fb9e74ec/submit`,
                                                                  className: `framer-12wqgow`,
                                                                  nodeId: `KBzAh8UJV`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-3ixdql`,
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
                                                                              className: `framer-7tlm0b`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-13ihff9`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-h8utqi`,
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
                                                                              className: `framer-q0po6u`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1jef0j2`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1hn9hkf`,
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
                                                                              className: `framer-1uqbg07`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-lf94tw`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1ykivcy`,
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
                                                                              className: `framer-1gsqxa5`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1sawubx`,
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
                                                                            yfbBVg1wg: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-1dueiea-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `mG9Tpvtah`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `huy0hzZNy`,
                                                                              children: o(M, {
                                                                                height: `100%`,
                                                                                id: `mG9Tpvtah`,
                                                                                layoutId: `mG9Tpvtah`,
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
                                      href: { webPageId: `q9xugym0e` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `q9xugym0e` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `q9xugym0e` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: w,
                                      overrides: {
                                        Vi6CNWQVY: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 416,
                                        },
                                        yfbBVg1wg: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 832,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 0,
                                        children: c(b, {
                                          className: `framer-1g9ap43-container`,
                                          id: `1g9ap43`,
                                          nodeId: `pYExdBRpL`,
                                          scopeId: `huy0hzZNy`,
                                          children: [
                                            o(v, {
                                              breakpoint: w,
                                              overrides: {
                                                Vi6CNWQVY: { oSlFkYxO1: t[1] },
                                                yfbBVg1wg: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(L, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 731,
                                                    src: `../../assets/images/m1vifpo0Kmx8QZ8IDKv4vKQLc.png?width=731&height=469`,
                                                    srcSet: `../../assets/images/m1vifpo0Kmx8QZ8IDKv4vKQLc.png 512w,../../assets/images/m1vifpo0Kmx8QZ8IDKv4vKQLc.png?width=731&height=469 731w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `pYExdBRpL`,
                                                jTs_fuWrm: k({ overlay: e }),
                                                JWP0bNV85: `Digital & Dial Guages`,
                                                layoutId: `pYExdBRpL`,
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
                                                      triggerId: `1g9ap43`,
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
                                                              className: h(j, `framer-1v7rnn9`),
                                                              "data-framer-portal-id": `1g9ap43`,
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
                                                            `zbM3ndOa5`
                                                          ),
                                                          o(u.div, {
                                                            className: h(j, `framer-uv83s7`),
                                                            "data-framer-portal-id": `1g9ap43`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-gwjqr1`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-1i4sucl`,
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
                                                                      className: `framer-h2hoj5`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-nmlzbo`,
                                                                      onTap: A({ overlay: e }),
                                                                      children: o(O, {
                                                                        animated: !1,
                                                                        className: `framer-14bky6u`,
                                                                        layoutId: `Z7grC2LrK`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/161220b6-4c07-4e53-a1d7-b4010c8515b1/submit`,
                                                                  className: `framer-15jn1w7`,
                                                                  nodeId: `UMYT1Pz4e`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-1ehyc1v`,
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
                                                                              className: `framer-1trpu4m`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-3m3c5v`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1rxe64g`,
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
                                                                              className: `framer-1j9nqfw`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-wa0giw`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-2x1aen`,
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
                                                                              className: `framer-l5x2hq`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-5mxrua`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-aiq0q`,
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
                                                                              className: `framer-tu4ed1`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1xaqkl1`,
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
                                                                            yfbBVg1wg: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-125ih3u-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `Pc8Ijt_88`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `huy0hzZNy`,
                                                                              children: o(M, {
                                                                                height: `100%`,
                                                                                id: `Pc8Ijt_88`,
                                                                                layoutId: `Pc8Ijt_88`,
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
                                      href: { webPageId: `VTSpHhn6D` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `VTSpHhn6D` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `VTSpHhn6D` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: w,
                                      overrides: {
                                        Vi6CNWQVY: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 416,
                                        },
                                        yfbBVg1wg: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1248,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 416,
                                        children: c(b, {
                                          className: `framer-1qasv79-container`,
                                          id: `1qasv79`,
                                          nodeId: `VFQs8VKdM`,
                                          scopeId: `huy0hzZNy`,
                                          children: [
                                            o(v, {
                                              breakpoint: w,
                                              overrides: {
                                                Vi6CNWQVY: { oSlFkYxO1: t[1] },
                                                yfbBVg1wg: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(L, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 649,
                                                    pixelWidth: 1499,
                                                    src: `../../assets/images/uWVTYYrfZr20vaV4x6MwdUfKTvM.webp?width=1499&height=649`,
                                                    srcSet: `../../assets/images/uWVTYYrfZr20vaV4x6MwdUfKTvM.webp 512w,../../assets/images/uWVTYYrfZr20vaV4x6MwdUfKTvM.webp?scale-down-to=1024&width=1499&height=649 1024w,../../assets/images/uWVTYYrfZr20vaV4x6MwdUfKTvM.webp?width=1499&height=649 1499w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `VFQs8VKdM`,
                                                jTs_fuWrm: k({ overlay: e }),
                                                JWP0bNV85: `Digital & Manual Micrometer`,
                                                layoutId: `VFQs8VKdM`,
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
                                                      triggerId: `1qasv79`,
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
                                                              className: h(j, `framer-ryznzd`),
                                                              "data-framer-portal-id": `1qasv79`,
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
                                                            `zG7xlhf9D`
                                                          ),
                                                          o(u.div, {
                                                            className: h(j, `framer-17zhhpg`),
                                                            "data-framer-portal-id": `1qasv79`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-exq8ro`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-1q9f18n`,
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
                                                                      className: `framer-u8mvjq`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-a9cdgg`,
                                                                      onTap: A({ overlay: e }),
                                                                      children: o(O, {
                                                                        animated: !1,
                                                                        className: `framer-gydl37`,
                                                                        layoutId: `fS9KvgT25`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/6cb63b6e-c393-453e-a964-5c75d652949a/submit`,
                                                                  className: `framer-1gmiifn`,
                                                                  nodeId: `RZHrrmHuR`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-1rpi0cq`,
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
                                                                              className: `framer-pwylco`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-vz2dl2`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-xxos5i`,
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
                                                                              className: `framer-19d4faj`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-bz2hrj`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1j18vnu`,
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
                                                                              className: `framer-pancam`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-18lnv3d`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1rq7btf`,
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
                                                                              className: `framer-173g81w`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1mk3kkl`,
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
                                                                            yfbBVg1wg: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-lnk9i9-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `Q2AGjX_mU`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `huy0hzZNy`,
                                                                              children: o(M, {
                                                                                height: `100%`,
                                                                                id: `Q2AGjX_mU`,
                                                                                layoutId: `Q2AGjX_mU`,
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
                                      href: { webPageId: `XTOoWky3G` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `XTOoWky3G` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `XTOoWky3G` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: w,
                                      overrides: {
                                        Vi6CNWQVY: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 832,
                                        },
                                        yfbBVg1wg: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1664,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 416,
                                        children: c(b, {
                                          className: `framer-89pxx9-container`,
                                          id: `89pxx9`,
                                          nodeId: `JiGtsdEro`,
                                          scopeId: `huy0hzZNy`,
                                          children: [
                                            o(v, {
                                              breakpoint: w,
                                              overrides: {
                                                Vi6CNWQVY: { oSlFkYxO1: t[1] },
                                                yfbBVg1wg: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(L, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 618,
                                                    src: `../../assets/images/fdQxGJxerX223Cda73bXGWAhhA.png?width=618&height=469`,
                                                    srcSet: `../../assets/images/fdQxGJxerX223Cda73bXGWAhhA.png 512w,../../assets/images/fdQxGJxerX223Cda73bXGWAhhA.png?width=618&height=469 618w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `JiGtsdEro`,
                                                jTs_fuWrm: k({ overlay: e }),
                                                JWP0bNV85: `Magnetic Stand`,
                                                layoutId: `JiGtsdEro`,
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
                                                      triggerId: `89pxx9`,
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
                                                              className: h(j, `framer-13emtfu`),
                                                              "data-framer-portal-id": `89pxx9`,
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
                                                            `sso4Sym7N`
                                                          ),
                                                          o(u.div, {
                                                            className: h(j, `framer-a7f5uu`),
                                                            "data-framer-portal-id": `89pxx9`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-rtdj1a`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-ow1moo`,
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
                                                                      className: `framer-1dytj7p`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-zp6sw2`,
                                                                      onTap: A({ overlay: e }),
                                                                      children: o(O, {
                                                                        animated: !1,
                                                                        className: `framer-z6vm9m`,
                                                                        layoutId: `mruj8kHyI`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/0a2dcdb7-8312-447f-95a5-3a793473905f/submit`,
                                                                  className: `framer-nyq42l`,
                                                                  nodeId: `U9_695rTM`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-q05qiu`,
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
                                                                              className: `framer-1ml1lxy`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1fmadys`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-tl4gk`,
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
                                                                              className: `framer-64l9yl`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1vkz07o`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-orkwnm`,
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
                                                                              className: `framer-1ay8jky`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1h8w3fl`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-pej4or`,
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
                                                                              className: `framer-tb3vsl`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-17sb2kg`,
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
                                                                            yfbBVg1wg: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-1ut4mhz-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `op80vcDs9`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `huy0hzZNy`,
                                                                              children: o(M, {
                                                                                height: `100%`,
                                                                                id: `op80vcDs9`,
                                                                                layoutId: `op80vcDs9`,
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
                                      href: { webPageId: `BrEu7j78n` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `BrEu7j78n` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `BrEu7j78n` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: w,
                                      overrides: {
                                        Vi6CNWQVY: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 832,
                                        },
                                        yfbBVg1wg: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 2080,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 416,
                                        children: c(b, {
                                          className: `framer-14tqdds-container`,
                                          id: `14tqdds`,
                                          nodeId: `x8vAerdKq`,
                                          scopeId: `huy0hzZNy`,
                                          children: [
                                            o(v, {
                                              breakpoint: w,
                                              overrides: {
                                                Vi6CNWQVY: { oSlFkYxO1: t[1] },
                                                yfbBVg1wg: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(L, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 442,
                                                    pixelWidth: 442,
                                                    src: `../../assets/images/TnUzpGPJKfsef8VtFmx3S15KlKQ.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `x8vAerdKq`,
                                                jTs_fuWrm: k({ overlay: e }),
                                                JWP0bNV85: `Feeler Guage`,
                                                layoutId: `x8vAerdKq`,
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
                                                      triggerId: `14tqdds`,
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
                                                              className: h(j, `framer-wc0uci`),
                                                              "data-framer-portal-id": `14tqdds`,
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
                                                            `zYRZycWLk`
                                                          ),
                                                          o(u.div, {
                                                            className: h(j, `framer-abe49h`),
                                                            "data-framer-portal-id": `14tqdds`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-1wizadi`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-67g3cs`,
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
                                                                      className: `framer-1w8a9ky`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-timicf`,
                                                                      onTap: A({ overlay: e }),
                                                                      children: o(O, {
                                                                        animated: !1,
                                                                        className: `framer-18dmwdw`,
                                                                        layoutId: `Srb4t6XCx`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/1b3db05c-7b5c-463b-af22-62b1ad2ba6df/submit`,
                                                                  className: `framer-1tby8t`,
                                                                  nodeId: `UdluXNJbv`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-15pl1o8`,
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
                                                                              className: `framer-1fq6rv`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1mp7ume`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-anysnv`,
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
                                                                              className: `framer-1m6mpfu`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-qgxjjr`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-13oe10a`,
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
                                                                              className: `framer-1xzf8wb`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1tg9nin`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-es7guq`,
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
                                                                              className: `framer-husd3s`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-63n4iz`,
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
                                                                            yfbBVg1wg: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-18qakml-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `CAtg8gYCq`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `huy0hzZNy`,
                                                                              children: o(M, {
                                                                                height: `100%`,
                                                                                id: `CAtg8gYCq`,
                                                                                layoutId: `CAtg8gYCq`,
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
        `.framer-9ZYL5.framer-1ub0c81, .framer-9ZYL5 .framer-1ub0c81 { display: block; }`,
        `.framer-9ZYL5.framer-17qar63 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-9ZYL5 .framer-76aupj { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 96px 24px 96px 24px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-9ZYL5 .framer-1oaheyl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9ZYL5 .framer-16p115y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-9ZYL5 .framer-1yuzrd3 { --1335ju: 2; --18mrqx2: #000000; --3it368: 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-9ZYL5 .framer-6rofby-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-9ZYL5 .framer-epfx06 { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-9ZYL5 .framer-hch66h { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9ZYL5 .framer-8ho29i-container, .framer-9ZYL5 .framer-7zrvc0-container, .framer-9ZYL5 .framer-1g9ap43-container, .framer-9ZYL5 .framer-1qasv79-container, .framer-9ZYL5 .framer-89pxx9-container, .framer-9ZYL5 .framer-14tqdds-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-9ZYL5.framer-1xwhqz7, .framer-9ZYL5.framer-1n5p41k, .framer-9ZYL5.framer-1v7rnn9, .framer-9ZYL5.framer-ryznzd, .framer-9ZYL5.framer-13emtfu, .framer-9ZYL5.framer-wc0uci { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-9ZYL5.framer-z6zsta, .framer-9ZYL5.framer-1n45h00, .framer-9ZYL5.framer-uv83s7, .framer-9ZYL5.framer-17zhhpg, .framer-9ZYL5.framer-a7f5uu, .framer-9ZYL5.framer-abe49h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-9ZYL5 .framer-13ttqt9, .framer-9ZYL5 .framer-aq7d2i, .framer-9ZYL5 .framer-gwjqr1, .framer-9ZYL5 .framer-exq8ro, .framer-9ZYL5 .framer-rtdj1a, .framer-9ZYL5 .framer-1wizadi { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-9ZYL5 .framer-1fde46o, .framer-9ZYL5 .framer-5dh5zc, .framer-9ZYL5 .framer-1i4sucl, .framer-9ZYL5 .framer-1q9f18n, .framer-9ZYL5 .framer-ow1moo, .framer-9ZYL5 .framer-67g3cs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-9ZYL5 .framer-1lsrxrz, .framer-9ZYL5 .framer-1iuw7lk, .framer-9ZYL5 .framer-h2hoj5, .framer-9ZYL5 .framer-u8mvjq, .framer-9ZYL5 .framer-1dytj7p, .framer-9ZYL5 .framer-1w8a9ky { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-9ZYL5 .framer-1ftkarz, .framer-9ZYL5 .framer-1kyxg1p, .framer-9ZYL5 .framer-nmlzbo, .framer-9ZYL5 .framer-a9cdgg, .framer-9ZYL5 .framer-zp6sw2, .framer-9ZYL5 .framer-timicf { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-9ZYL5 .framer-1nb3dao, .framer-9ZYL5 .framer-938szu, .framer-9ZYL5 .framer-14bky6u, .framer-9ZYL5 .framer-gydl37, .framer-9ZYL5 .framer-z6vm9m, .framer-9ZYL5 .framer-18dmwdw { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-9ZYL5 .framer-lil7n6, .framer-9ZYL5 .framer-12wqgow, .framer-9ZYL5 .framer-15jn1w7, .framer-9ZYL5 .framer-1gmiifn, .framer-9ZYL5 .framer-nyq42l, .framer-9ZYL5 .framer-1tby8t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-9ZYL5 .framer-xbdxtm, .framer-9ZYL5 .framer-1gvrknb, .framer-9ZYL5 .framer-2qhh4r, .framer-9ZYL5 .framer-1uygx0z, .framer-9ZYL5 .framer-3ixdql, .framer-9ZYL5 .framer-h8utqi, .framer-9ZYL5 .framer-1hn9hkf, .framer-9ZYL5 .framer-1ykivcy, .framer-9ZYL5 .framer-1ehyc1v, .framer-9ZYL5 .framer-1rxe64g, .framer-9ZYL5 .framer-2x1aen, .framer-9ZYL5 .framer-aiq0q, .framer-9ZYL5 .framer-1rpi0cq, .framer-9ZYL5 .framer-xxos5i, .framer-9ZYL5 .framer-1j18vnu, .framer-9ZYL5 .framer-1rq7btf, .framer-9ZYL5 .framer-q05qiu, .framer-9ZYL5 .framer-tl4gk, .framer-9ZYL5 .framer-orkwnm, .framer-9ZYL5 .framer-pej4or, .framer-9ZYL5 .framer-15pl1o8, .framer-9ZYL5 .framer-anysnv, .framer-9ZYL5 .framer-13oe10a, .framer-9ZYL5 .framer-es7guq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9ZYL5 .framer-t43trd, .framer-9ZYL5 .framer-1xim9jd, .framer-9ZYL5 .framer-dsoxai, .framer-9ZYL5 .framer-12jnm4w, .framer-9ZYL5 .framer-7tlm0b, .framer-9ZYL5 .framer-q0po6u, .framer-9ZYL5 .framer-1uqbg07, .framer-9ZYL5 .framer-1gsqxa5, .framer-9ZYL5 .framer-1trpu4m, .framer-9ZYL5 .framer-1j9nqfw, .framer-9ZYL5 .framer-l5x2hq, .framer-9ZYL5 .framer-tu4ed1, .framer-9ZYL5 .framer-pwylco, .framer-9ZYL5 .framer-19d4faj, .framer-9ZYL5 .framer-pancam, .framer-9ZYL5 .framer-173g81w, .framer-9ZYL5 .framer-1ml1lxy, .framer-9ZYL5 .framer-64l9yl, .framer-9ZYL5 .framer-1ay8jky, .framer-9ZYL5 .framer-tb3vsl, .framer-9ZYL5 .framer-1fq6rv, .framer-9ZYL5 .framer-1m6mpfu, .framer-9ZYL5 .framer-1xzf8wb, .framer-9ZYL5 .framer-husd3s { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-9ZYL5 .framer-da185w, .framer-9ZYL5 .framer-1jk5acs, .framer-9ZYL5 .framer-1p2x31s, .framer-9ZYL5 .framer-ykb3px, .framer-9ZYL5 .framer-13ihff9, .framer-9ZYL5 .framer-1jef0j2, .framer-9ZYL5 .framer-lf94tw, .framer-9ZYL5 .framer-1sawubx, .framer-9ZYL5 .framer-3m3c5v, .framer-9ZYL5 .framer-wa0giw, .framer-9ZYL5 .framer-5mxrua, .framer-9ZYL5 .framer-1xaqkl1, .framer-9ZYL5 .framer-vz2dl2, .framer-9ZYL5 .framer-bz2hrj, .framer-9ZYL5 .framer-18lnv3d, .framer-9ZYL5 .framer-1mk3kkl, .framer-9ZYL5 .framer-1fmadys, .framer-9ZYL5 .framer-1vkz07o, .framer-9ZYL5 .framer-1h8w3fl, .framer-9ZYL5 .framer-17sb2kg, .framer-9ZYL5 .framer-1mp7ume, .framer-9ZYL5 .framer-qgxjjr, .framer-9ZYL5 .framer-1tg9nin, .framer-9ZYL5 .framer-63n4iz { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-9ZYL5 .framer-ymx4x5-container, .framer-9ZYL5 .framer-1dueiea-container, .framer-9ZYL5 .framer-125ih3u-container, .framer-9ZYL5 .framer-lnk9i9-container, .framer-9ZYL5 .framer-1ut4mhz-container, .framer-9ZYL5 .framer-18qakml-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        ...D,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-9ZYL5.framer-17qar63 { width: 810px; } .framer-9ZYL5 .framer-76aupj { padding: 80px 24px 80px 24px; } .framer-9ZYL5 .framer-hch66h { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-9ZYL5 .framer-13ttqt9, .framer-9ZYL5 .framer-aq7d2i, .framer-9ZYL5 .framer-gwjqr1, .framer-9ZYL5 .framer-exq8ro, .framer-9ZYL5 .framer-rtdj1a, .framer-9ZYL5 .framer-1wizadi { height: min-content; width: min-content; } .framer-9ZYL5 .framer-1fde46o, .framer-9ZYL5 .framer-5dh5zc, .framer-9ZYL5 .framer-1i4sucl, .framer-9ZYL5 .framer-1q9f18n, .framer-9ZYL5 .framer-ow1moo, .framer-9ZYL5 .framer-67g3cs { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-9ZYL5.framer-17qar63 { width: 390px; } .framer-9ZYL5 .framer-76aupj { padding: 80px 16px 80px 16px; } .framer-9ZYL5 .framer-hch66h { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-9ZYL5 .framer-8ho29i-container { order: 0; } .framer-9ZYL5.framer-z6zsta, .framer-9ZYL5.framer-1n45h00, .framer-9ZYL5.framer-uv83s7, .framer-9ZYL5.framer-17zhhpg, .framer-9ZYL5.framer-a7f5uu, .framer-9ZYL5.framer-abe49h { padding: 60px 0px 0px 0px; } .framer-9ZYL5 .framer-13ttqt9, .framer-9ZYL5 .framer-aq7d2i, .framer-9ZYL5 .framer-gwjqr1, .framer-9ZYL5 .framer-exq8ro, .framer-9ZYL5 .framer-rtdj1a, .framer-9ZYL5 .framer-1wizadi { height: min-content; width: 300px; } .framer-9ZYL5 .framer-lil7n6, .framer-9ZYL5 .framer-12wqgow, .framer-9ZYL5 .framer-15jn1w7, .framer-9ZYL5 .framer-1gmiifn, .framer-9ZYL5 .framer-nyq42l, .framer-9ZYL5 .framer-1tby8t { width: 261px; } .framer-9ZYL5 .framer-7zrvc0-container { order: 1; } .framer-9ZYL5 .framer-1g9ap43-container { order: 2; } .framer-9ZYL5 .framer-1qasv79-container { order: 3; } .framer-9ZYL5 .framer-89pxx9-container { order: 4; } .framer-9ZYL5 .framer-14tqdds-container { order: 5; }}`,
      ],
      `framer-9ZYL5`
    )),
    (Q.displayName = `Multimeters And Digital Meters 2Nd Page 2`),
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
        default: {
          type: `reactComponent`,
          name: `Framerhuy0hzZNy`,
          slots: [],
          annotations: {
            framerScrollSections: `{"tBu8ebJMs":{"pattern":":tBu8ebJMs","name":"classes"}}`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"Vi6CNWQVY":{"layout":["fixed","fixed"]},"yfbBVg1wg":{"layout":["fixed","fixed"]}}}`,
            framerResponsiveScreen: ``,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `1479`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=-6Z_LhGoN-81su9kyb_jep51JXkn8SLXm9w61waHyXs.BdpJJonn.mjs.map
