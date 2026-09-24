import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  O as t,
  P as n,
  c as r,
  g as i,
  i as a,
  j as ee,
  l as o,
  o as s,
  s as c,
  u as l,
  v as te,
  w as u,
} from "./react.N6WDMTqS.mjs";
import { S as d, n as f, r as ne, t as p } from "./motion.CXXzZ97F.mjs";
import {
  I as m,
  L as h,
  O as g,
  U as re,
  at as ie,
  b as _,
  c as ae,
  ct as oe,
  d as v,
  dt as se,
  g as y,
  ht as b,
  it as ce,
  lt as x,
  mt as le,
  n as S,
  nt as ue,
  o as C,
  ot as de,
  p as fe,
  s as w,
  st as pe,
  t as T,
  tt as me,
  u as E,
  ut as he,
  w as D,
  x as O,
  y as k,
} from "./framer.w0XhpZTx.mjs";
import { n as ge, t as A } from "./Ticker.QfylVvbQ.mjs";
import { i as j, n as _e, r as M, t as ve } from "./nl385Jssa.BV16yEHR.mjs";
import { a as N, c as P, i as F, o as I, r as L, s as R } from "./shared.DPOhhryJ.mjs";
import { i as z, r as B } from "./cQxXulDZM.DXXtl8ZX.mjs";
import { n as ye, t as V } from "./jNXHc0ip8.Bnggf-hw.mjs";
import be, { t as xe } from "./q4gHw0dRfY0SoYcTqWDlorYSIBWIUSCIvK3fznZIvj4.D7NELNI7.mjs";
var H, U, W, G, Se, Ce, we, Te, Ee, De, Oe, K, ke, Ae, q, J, Y, X, Z, je, Me, Ne, Q, $;
e(() => {
  (c(),
    re(),
    p(),
    u(),
    s(),
    I(),
    ge(),
    P(),
    F(),
    z(),
    ye(),
    j(),
    xe(),
    (H = m(R)),
    (U = m(B)),
    (W = b(S)),
    (G = b(O)),
    (Se = m(A)),
    (Ce = m(V)),
    (we = m(N)),
    (Te = m(L)),
    (Ee = {
      bqKUw88e7: `(min-width: 810px) and (max-width: 1199.98px)`,
      r2B5hOPfk: `(min-width: 1200px)`,
      Se4c8WZGo: `(max-width: 809.98px)`,
    }),
    (De = `framer-5JV82`),
    (Oe = {
      bqKUw88e7: `framer-v-1kvq92x`,
      r2B5hOPfk: `framer-v-5f5rpm`,
      Se4c8WZGo: `framer-v-82e2od`,
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
    (ke = { delay: 0, duration: 1, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` }),
    (Ae = { delay: 0.2, duration: 1, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` }),
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
      let [i, a] = x({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (je = ({ value: e }) =>
      de()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Me = { Desktop: `r2B5hOPfk`, Phone: `Se4c8WZGo`, Tablet: `bqKUw88e7` }),
    (Ne = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Me[r.variant] ?? r.variant ?? `r2B5hOPfk`,
    })),
    (Q = le(
      i(function (e, i) {
        let s = t(null),
          c = i ?? s,
          u = te(),
          { activeLocale: p, setLocale: m } = pe(),
          h = ue(),
          { style: re, className: b, layoutId: x, variant: le, ...de } = Ne(e);
        oe(ee(() => be({}, p), [p]));
        let [D, ge] = ie(le, Ee, !1),
          { activeVariantCallback: j, delay: _e } = me(void 0),
          M = ({ overlay: e, loadMore: t }) =>
            j(async (...t) => {
              e.toggle();
            }),
          P = ({ overlay: e, loadMore: t }) =>
            j(async (...t) => {
              e.hide();
            }),
          F = g(De, ve),
          I = he(`Du6SaCi1c`),
          z = t(null);
        return (
          se(),
          ce({}),
          o(ae.Provider, {
            value: { primaryVariantId: `r2B5hOPfk`, variantClassNames: Oe },
            children: l(ne, {
              id: x ?? u,
              children: [
                o(je, { value: `html body { background: rgb(255, 255, 255); }` }),
                o(d.div, {
                  ...de,
                  className: g(F, `framer-5f5rpm`, b),
                  ref: c,
                  style: { ...re },
                  children: l(`section`, {
                    className: `framer-pje9eg`,
                    "data-framer-name": `Classes`,
                    id: I,
                    ref: z,
                    children: [
                      l(`div`, {
                        className: `framer-sdb4c6`,
                        "data-framer-name": `Text`,
                        children: [
                          o(fe, {
                            href: { webPageId: `Pinumpnx5` },
                            motionChild: !0,
                            nodeId: `b_msvOqEx`,
                            openInNewTab: !1,
                            scopeId: `E5aYY2PXA`,
                            children: o(d.a, {
                              className: `framer-1bsvewu framer-1d1c6vz`,
                              children: o(R, {
                                animated: !1,
                                BKVe8Pgvw: !0,
                                className: `framer-1i3mols`,
                                fICyAUQY1: !0,
                                layoutId: `rnrF7xgeH`,
                                lKf_CQTz5: !0,
                              }),
                            }),
                          }),
                          o(y, {
                            breakpoint: D,
                            overrides: {
                              bqKUw88e7: { y: (h?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
                              Se4c8WZGo: { y: (h?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
                            },
                            children: o(T, {
                              height: 26,
                              y: (h?.y || 0) + 0 + 0 + 96 + 0 + 0 + 36,
                              children: o(W, {
                                __framer__animate: { transition: ke },
                                __framer__animateOnce: !0,
                                __framer__enter: K,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-r6mqro-container`,
                                nodeId: `CKQ4WXus4`,
                                rendersWithMotion: !0,
                                scopeId: `E5aYY2PXA`,
                                children: o(B, {
                                  ggTbrSuHk: `Hand tools`,
                                  height: `100%`,
                                  id: `CKQ4WXus4`,
                                  layoutId: `CKQ4WXus4`,
                                  variant: `z6oSgdJxk`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          o(G, {
                            __framer__animate: { transition: Ae },
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
                                children: `Hammers`,
                              }),
                            }),
                            className: `framer-14ta3ft`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          o(T, {
                            children: o(S, {
                              className: `framer-bwsarv-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `dSeJXFXoE`,
                              scopeId: `E5aYY2PXA`,
                              children: o(A, {
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
                                id: `dSeJXFXoE`,
                                layoutId: `dSeJXFXoE`,
                                padding: 0,
                                paddingBottom: 0,
                                paddingLeft: 0,
                                paddingPerSide: !1,
                                paddingRight: 0,
                                paddingTop: 0,
                                sizingOptions: { heightType: !0, widthType: !0 },
                                slots: [
                                  o(E, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 434.6666666666667,
                                      intrinsicWidth: 454.6666666666667,
                                      pixelHeight: 652,
                                      pixelWidth: 682,
                                      sizes: `50px`,
                                      src: `../../assets/images/zX1iZ7EJf6QCxXebWkxGWri5oM.png`,
                                      srcSet: `../../assets/images/zX1iZ7EJf6QCxXebWkxGWri5oM.png 512w,../../assets/images/zX1iZ7EJf6QCxXebWkxGWri5oM.png?width=682&height=652 682w`,
                                    },
                                    className: `framer-14oc4wa`,
                                    "data-framer-name": `Logo 1`,
                                  }),
                                  o(E, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 476,
                                      intrinsicWidth: 762,
                                      pixelHeight: 714,
                                      pixelWidth: 1143,
                                      sizes: `80px`,
                                      src: `../../assets/images/xOPVop93UFXkHDlJh7HULhpDrL0.png?scale-down-to=1024&width=1143&height=714`,
                                      srcSet: `../../assets/images/xOPVop93UFXkHDlJh7HULhpDrL0.png 512w,../../assets/images/xOPVop93UFXkHDlJh7HULhpDrL0.png?scale-down-to=1024&width=1143&height=714 1024w,../../assets/images/xOPVop93UFXkHDlJh7HULhpDrL0.png?width=1143&height=714 1143w`,
                                    },
                                    className: `framer-6u4u0n`,
                                    "data-framer-name": `Logo 6`,
                                  }),
                                  o(E, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 427.3333333333333,
                                      intrinsicWidth: 787.3333333333334,
                                      pixelHeight: 641,
                                      pixelWidth: 1181,
                                      sizes: `79px`,
                                      src: `../../assets/images/ch2reDt2SZFnjfdWnbfJwLHtNE.png?scale-down-to=1024&width=1181&height=641`,
                                      srcSet: `../../assets/images/ch2reDt2SZFnjfdWnbfJwLHtNE.png 512w,../../assets/images/ch2reDt2SZFnjfdWnbfJwLHtNE.png?scale-down-to=1024&width=1181&height=641 1024w,../../assets/images/ch2reDt2SZFnjfdWnbfJwLHtNE.png?width=1181&height=641 1181w`,
                                    },
                                    className: `framer-csj23e`,
                                    "data-framer-name": `Logo 7`,
                                  }),
                                  o(E, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 325.3333333333333,
                                      intrinsicWidth: 983.3333333333334,
                                      pixelHeight: 488,
                                      pixelWidth: 1475,
                                      sizes: `70px`,
                                      src: `../../assets/images/cLXzFi7RzaDcFgAJaZLunSX0nY.png?scale-down-to=1024&width=1475&height=488`,
                                      srcSet: `../../assets/images/cLXzFi7RzaDcFgAJaZLunSX0nY.png 512w,../../assets/images/cLXzFi7RzaDcFgAJaZLunSX0nY.png?scale-down-to=1024&width=1475&height=488 1024w,../../assets/images/cLXzFi7RzaDcFgAJaZLunSX0nY.png?width=1475&height=488 1475w`,
                                    },
                                    className: `framer-1dnlzbd`,
                                    "data-framer-name": `Logo 15`,
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
                      l(`div`, {
                        className: `framer-10s7eiu`,
                        "data-framer-name": `ClassesGallery`,
                        children: [
                          o(Z, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(_, {
                                  links: [
                                    {
                                      href: { webPageId: `IKBH5KoAS` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `IKBH5KoAS` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `IKBH5KoAS` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        bqKUw88e7: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 0,
                                        },
                                        Se4c8WZGo: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 0,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 0,
                                        children: l(S, {
                                          className: `framer-wxsk5j-container`,
                                          id: `wxsk5j`,
                                          nodeId: `V7r2qxa5V`,
                                          scopeId: `E5aYY2PXA`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                bqKUw88e7: { oSlFkYxO1: t[1] },
                                                Se4c8WZGo: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 500,
                                                    pixelWidth: 500,
                                                    src: `../../assets/images/BRyqdN6QlROwhd4nvMFxKbRprNs.webp`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `V7r2qxa5V`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Hammer with Handle`,
                                                layoutId: `V7r2qxa5V`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            o(f, {
                                              children:
                                                e.visible &&
                                                o(r, {
                                                  children: a(
                                                    o(v, {
                                                      triggerId: `wxsk5j`,
                                                      children: l(k, {
                                                        children: [
                                                          o(
                                                            d.div,
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
                                                              className: g(F, `framer-pv599v`),
                                                              "data-framer-portal-id": `wxsk5j`,
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
                                                            `PeV8J5Ste`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-1n0v7c3`),
                                                            "data-framer-portal-id": `wxsk5j`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-1hcruwn`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-z3iv6i`,
                                                                  children: [
                                                                    o(O, {
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
                                                                      className: `framer-11o5iff`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-pdhbpu`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1rgny96`,
                                                                        layoutId: `A5ZEUCRqE`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/f8482e6e-a71b-4501-a095-1757dcff143a/submit`,
                                                                  className: `framer-1kmifib`,
                                                                  nodeId: `BRA_9y2ku`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1icg5qa`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-oni46j`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-cdauyp`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-12w2hpl`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-t2m6kj`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-f3arj6`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-6a0zw1`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-18zcmem`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-hxdaxl`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1a9rhox`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-1c9yivk`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-if6p37`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(y, {
                                                                          breakpoint: D,
                                                                          overrides: {
                                                                            Se4c8WZGo: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-vm5acw-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `je8k6nnOA`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `E5aYY2PXA`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `je8k6nnOA`,
                                                                                layoutId: `je8k6nnOA`,
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
                                children: o(_, {
                                  links: [
                                    {
                                      href: { webPageId: `zWW6Y7kj0` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `zWW6Y7kj0` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `zWW6Y7kj0` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        bqKUw88e7: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 0,
                                        },
                                        Se4c8WZGo: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 416,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 0,
                                        children: l(S, {
                                          className: `framer-1a3las2-container`,
                                          id: `1a3las2`,
                                          nodeId: `ofX_Mb8qi`,
                                          scopeId: `E5aYY2PXA`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                bqKUw88e7: { oSlFkYxO1: t[1] },
                                                Se4c8WZGo: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 154,
                                                    pixelWidth: 374,
                                                    src: `../../assets/images/yaEeIaM8INfZt9Rcty8JMp2g6k.webp`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `ofX_Mb8qi`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Machinist Hammer with Handle`,
                                                layoutId: `ofX_Mb8qi`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            o(f, {
                                              children:
                                                e.visible &&
                                                o(r, {
                                                  children: a(
                                                    o(v, {
                                                      triggerId: `1a3las2`,
                                                      children: l(k, {
                                                        children: [
                                                          o(
                                                            d.div,
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
                                                              className: g(F, `framer-1i1ckmu`),
                                                              "data-framer-portal-id": `1a3las2`,
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
                                                            `MZNTZ3NMY`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-1i0uyfs`),
                                                            "data-framer-portal-id": `1a3las2`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-cda68m`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-ufjqoa`,
                                                                  children: [
                                                                    o(O, {
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
                                                                      className: `framer-1dxyeps`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-y11t6x`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1tvafkc`,
                                                                        layoutId: `ARg_0Wcn1`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/09418642-e13b-4bff-9607-a67c8d3f87d3/submit`,
                                                                  className: `framer-xmueo4`,
                                                                  nodeId: `rXfnRlMCO`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-jsbiqw`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-1u3ccji`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1w2zjp0`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1kdnv27`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-1559dfl`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-ptkxji`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-pgemn6`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-eu4kb`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-qui8lb`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1ptzkdq`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-c0r8uj`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-xh1b7r`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(y, {
                                                                          breakpoint: D,
                                                                          overrides: {
                                                                            Se4c8WZGo: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1pzhid4-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `SlkUAWHqh`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `E5aYY2PXA`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `SlkUAWHqh`,
                                                                                layoutId: `SlkUAWHqh`,
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
                                children: o(_, {
                                  links: [
                                    {
                                      href: { webPageId: `iyJ7aVFGC` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `iyJ7aVFGC` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `iyJ7aVFGC` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        bqKUw88e7: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 416,
                                        },
                                        Se4c8WZGo: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 832,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 0,
                                        children: l(S, {
                                          className: `framer-11zp1oo-container`,
                                          id: `11zp1oo`,
                                          nodeId: `maFLSH_VR`,
                                          scopeId: `E5aYY2PXA`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                bqKUw88e7: { oSlFkYxO1: t[1] },
                                                Se4c8WZGo: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 3456,
                                                    pixelWidth: 3456,
                                                    src: `../../assets/images/GlXQD4HvHkhBCiaR8imZQ1zxy4g.png?width=3456&height=3456`,
                                                    srcSet: `../../assets/images/GlXQD4HvHkhBCiaR8imZQ1zxy4g.png 512w,../../assets/images/GlXQD4HvHkhBCiaR8imZQ1zxy4g.png?scale-down-to=1024&width=3456&height=3456 1024w,../../assets/images/GlXQD4HvHkhBCiaR8imZQ1zxy4g.png?scale-down-to=2048&width=3456&height=3456 2048w,../../assets/images/GlXQD4HvHkhBCiaR8imZQ1zxy4g.png?width=3456&height=3456 3456w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `maFLSH_VR`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Claw Hammer with Handle`,
                                                layoutId: `maFLSH_VR`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            o(f, {
                                              children:
                                                e.visible &&
                                                o(r, {
                                                  children: a(
                                                    o(v, {
                                                      triggerId: `11zp1oo`,
                                                      children: l(k, {
                                                        children: [
                                                          o(
                                                            d.div,
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
                                                              className: g(F, `framer-1malzva`),
                                                              "data-framer-portal-id": `11zp1oo`,
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
                                                            `NuDTcVo3v`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-1awqrsn`),
                                                            "data-framer-portal-id": `11zp1oo`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-hx2btd`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-flshjq`,
                                                                  children: [
                                                                    o(O, {
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
                                                                      className: `framer-tf2jun`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-19it0ne`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-yq0fzs`,
                                                                        layoutId: `YhUW9uKGl`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/17793203-538c-4dd8-8ef5-6d62fdebd281/submit`,
                                                                  className: `framer-1d77spl`,
                                                                  nodeId: `g6pQfS0Gr`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-rwyq59`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-1anye57`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1aqq5s1`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1oqg3mg`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-1thjrl6`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1j9oyjf`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1spwlky`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-zgfqff`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1xmt47z`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-nbj6ki`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-1fpio9a`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-17t4q6v`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(y, {
                                                                          breakpoint: D,
                                                                          overrides: {
                                                                            Se4c8WZGo: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1kfz6iy-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `SfZwHaiFz`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `E5aYY2PXA`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `SfZwHaiFz`,
                                                                                layoutId: `SfZwHaiFz`,
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
                                children: o(_, {
                                  links: [
                                    {
                                      href: { webPageId: `vrtqDuZ1N` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `vrtqDuZ1N` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `vrtqDuZ1N` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        bqKUw88e7: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 416,
                                        },
                                        Se4c8WZGo: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1248,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 416,
                                        children: l(S, {
                                          className: `framer-q7x4le-container`,
                                          id: `q7x4le`,
                                          nodeId: `vWbmW8CFy`,
                                          scopeId: `E5aYY2PXA`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                bqKUw88e7: { oSlFkYxO1: t[1] },
                                                Se4c8WZGo: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 469,
                                                    src: `../../assets/images/hsxPOvXitkemmI8H9HFoA7e7xg.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `vWbmW8CFy`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Club Hammer with Handle`,
                                                layoutId: `vWbmW8CFy`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            o(f, {
                                              children:
                                                e.visible &&
                                                o(r, {
                                                  children: a(
                                                    o(v, {
                                                      triggerId: `q7x4le`,
                                                      children: l(k, {
                                                        children: [
                                                          o(
                                                            d.div,
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
                                                              className: g(F, `framer-1bhys7h`),
                                                              "data-framer-portal-id": `q7x4le`,
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
                                                            `e_9yP7aI2`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-4484o0`),
                                                            "data-framer-portal-id": `q7x4le`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-1apojab`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-160o7ig`,
                                                                  children: [
                                                                    o(O, {
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
                                                                      className: `framer-1wvmoa1`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-me2781`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-189fwkr`,
                                                                        layoutId: `b1mgIH2wY`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/9c9e5c6b-e9e0-4325-b6bd-f936a8168092/submit`,
                                                                  className: `framer-1050z5m`,
                                                                  nodeId: `IPQ3RgnM1`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1i2y5wl`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-1pvvl40`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-om6jqq`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-28awv`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-drpja`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-ycacu4`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-kbnm0a`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-1cm7mie`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-3w0y3m`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-hf74nh`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-kj4d39`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1ovkdxi`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(y, {
                                                                          breakpoint: D,
                                                                          overrides: {
                                                                            Se4c8WZGo: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-b7w151-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `n9qr3m7Iz`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `E5aYY2PXA`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `n9qr3m7Iz`,
                                                                                layoutId: `n9qr3m7Iz`,
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
                                children: o(_, {
                                  links: [
                                    {
                                      href: { webPageId: `w5flQh747` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `w5flQh747` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `w5flQh747` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        bqKUw88e7: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 832,
                                        },
                                        Se4c8WZGo: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1664,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 416,
                                        children: l(S, {
                                          className: `framer-dl3jih-container`,
                                          id: `dl3jih`,
                                          nodeId: `pWkPljcgy`,
                                          scopeId: `E5aYY2PXA`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                bqKUw88e7: { oSlFkYxO1: t[1] },
                                                Se4c8WZGo: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 469,
                                                    src: `../../assets/images/98mpG3ieLsis3UlrxoJGRCx3Cso.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `pWkPljcgy`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Sledge Hammer Head`,
                                                layoutId: `pWkPljcgy`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            o(f, {
                                              children:
                                                e.visible &&
                                                o(r, {
                                                  children: a(
                                                    o(v, {
                                                      triggerId: `dl3jih`,
                                                      children: l(k, {
                                                        children: [
                                                          o(
                                                            d.div,
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
                                                              className: g(F, `framer-asxrkj`),
                                                              "data-framer-portal-id": `dl3jih`,
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
                                                            `nGpILvVHd`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-o3wi8`),
                                                            "data-framer-portal-id": `dl3jih`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-h1y09a`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-991kt7`,
                                                                  children: [
                                                                    o(O, {
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
                                                                      className: `framer-7788f`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-29v4gj`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-x9oygv`,
                                                                        layoutId: `Qn4w6sLTU`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/d8fb41da-405b-46df-ad7d-39b5d654fb73/submit`,
                                                                  className: `framer-1w07ibw`,
                                                                  nodeId: `MUQ6u9ayj`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-u52jl1`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-12cw2tj`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-d2otyx`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1t3sgs4`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-1juvrdb`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-rpp811`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-2xujx4`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-1o214j`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-kyb7a7`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-pjh8pv`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-gonzcf`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-u45rkk`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(y, {
                                                                          breakpoint: D,
                                                                          overrides: {
                                                                            Se4c8WZGo: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1lji0jw-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `zI4SXwc3s`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `E5aYY2PXA`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `zI4SXwc3s`,
                                                                                layoutId: `zI4SXwc3s`,
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
                                children: o(_, {
                                  links: [
                                    {
                                      href: { webPageId: `xwZmx5rGV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `xwZmx5rGV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `xwZmx5rGV` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        bqKUw88e7: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 832,
                                        },
                                        Se4c8WZGo: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2080,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 416,
                                        children: l(S, {
                                          className: `framer-7yqird-container`,
                                          id: `7yqird`,
                                          nodeId: `ClxkpExdJ`,
                                          scopeId: `E5aYY2PXA`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                bqKUw88e7: { oSlFkYxO1: t[1] },
                                                Se4c8WZGo: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 469,
                                                    src: `../../assets/images/QMIVQ39n37glUTeIxNImRejA6Tk.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `ClxkpExdJ`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Sledge Hammer Head with Handle`,
                                                layoutId: `ClxkpExdJ`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            o(f, {
                                              children:
                                                e.visible &&
                                                o(r, {
                                                  children: a(
                                                    o(v, {
                                                      triggerId: `7yqird`,
                                                      children: l(k, {
                                                        children: [
                                                          o(
                                                            d.div,
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
                                                              className: g(F, `framer-ccyr9j`),
                                                              "data-framer-portal-id": `7yqird`,
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
                                                            `QCH07ea7k`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-o2pv74`),
                                                            "data-framer-portal-id": `7yqird`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-uhzx5y`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-f2oclb`,
                                                                  children: [
                                                                    o(O, {
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
                                                                      className: `framer-xgwtyc`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1crgbfh`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1hf8c0v`,
                                                                        layoutId: `UwOWXrMtH`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/e2645800-910f-4f78-8e2e-914eb7ceb775/submit`,
                                                                  className: `framer-1h2fx8s`,
                                                                  nodeId: `KjCB1HZ2R`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-8a6vya`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-ossb59`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1m0zcn3`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1rbr763`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-gmi6gj`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-oh23n5`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1mqozcz`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-b29m5u`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1xhl5ce`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-h1fghm`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-1mkkk7w`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-ysbvmx`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(y, {
                                                                          breakpoint: D,
                                                                          overrides: {
                                                                            Se4c8WZGo: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1xh8edv-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `AXigS360e`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `E5aYY2PXA`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `AXigS360e`,
                                                                                layoutId: `AXigS360e`,
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
                                children: o(_, {
                                  links: [
                                    {
                                      href: { webPageId: `Kt0_CSjIS` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Kt0_CSjIS` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Kt0_CSjIS` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        bqKUw88e7: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1248,
                                        },
                                        Se4c8WZGo: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2496,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 832,
                                        children: l(S, {
                                          className: `framer-1bn1r9m-container`,
                                          id: `1bn1r9m`,
                                          nodeId: `p49kzn7UD`,
                                          scopeId: `E5aYY2PXA`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                bqKUw88e7: { oSlFkYxO1: t[1] },
                                                Se4c8WZGo: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 600,
                                                    pixelWidth: 600,
                                                    src: `../../assets/images/f4PtK4pbZfrkYVeihCgLehrSM4.png?width=600&height=600`,
                                                    srcSet: `../../assets/images/f4PtK4pbZfrkYVeihCgLehrSM4.png 512w,../../assets/images/f4PtK4pbZfrkYVeihCgLehrSM4.png?width=600&height=600 600w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `p49kzn7UD`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Electrician Hammer`,
                                                layoutId: `p49kzn7UD`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            o(f, {
                                              children:
                                                e.visible &&
                                                o(r, {
                                                  children: a(
                                                    o(v, {
                                                      triggerId: `1bn1r9m`,
                                                      children: l(k, {
                                                        children: [
                                                          o(
                                                            d.div,
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
                                                              className: g(F, `framer-1ekqqye`),
                                                              "data-framer-portal-id": `1bn1r9m`,
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
                                                            `N9BdsvQoh`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-8z9i13`),
                                                            "data-framer-portal-id": `1bn1r9m`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-5ly1m6`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-b2jogw`,
                                                                  children: [
                                                                    o(O, {
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
                                                                      className: `framer-1pwkyzj`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1nm7p53`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-14fk8g2`,
                                                                        layoutId: `PSvgFjuqS`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/e8cedbea-4cdb-48a7-be0c-66eb95ddf630/submit`,
                                                                  className: `framer-zxzwv3`,
                                                                  nodeId: `sxQH7Ywd7`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-w3yeve`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-kdf9t6`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-yen5eg`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-17r7zq3`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-1bzb7ab`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-ni5y7u`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1xs5rib`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-kqykmx`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1o8hoav`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1wf0zma`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-11qlhsh`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-togpgq`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(y, {
                                                                          breakpoint: D,
                                                                          overrides: {
                                                                            Se4c8WZGo: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-g85aum-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `Z6kYvT9sj`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `E5aYY2PXA`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `Z6kYvT9sj`,
                                                                                layoutId: `Z6kYvT9sj`,
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
                                children: o(_, {
                                  links: [
                                    {
                                      href: { webPageId: `N9RqoK9k4` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `N9RqoK9k4` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `N9RqoK9k4` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        bqKUw88e7: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1248,
                                        },
                                        Se4c8WZGo: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2912,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 832,
                                        children: l(S, {
                                          className: `framer-xyex8h-container`,
                                          id: `xyex8h`,
                                          nodeId: `Ck5DUWax7`,
                                          scopeId: `E5aYY2PXA`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                bqKUw88e7: { oSlFkYxO1: t[1] },
                                                Se4c8WZGo: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 745,
                                                    pixelWidth: 1500,
                                                    src: `../../assets/images/Pka5YypnPpC3ir7sS3OzlEx66M.webp?width=1500&height=745`,
                                                    srcSet: `../../assets/images/Pka5YypnPpC3ir7sS3OzlEx66M.webp 512w,../../assets/images/Pka5YypnPpC3ir7sS3OzlEx66M.webp?scale-down-to=1024&width=1500&height=745 1024w,../../assets/images/Pka5YypnPpC3ir7sS3OzlEx66M.webp?width=1500&height=745 1500w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `Ck5DUWax7`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Nylon or Soft Face Hammer`,
                                                layoutId: `Ck5DUWax7`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            o(f, {
                                              children:
                                                e.visible &&
                                                o(r, {
                                                  children: a(
                                                    o(v, {
                                                      triggerId: `xyex8h`,
                                                      children: l(k, {
                                                        children: [
                                                          o(
                                                            d.div,
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
                                                              className: g(F, `framer-s7a7vl`),
                                                              "data-framer-portal-id": `xyex8h`,
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
                                                            `YQmyeV3im`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-1fzkxvl`),
                                                            "data-framer-portal-id": `xyex8h`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-vkz2vk`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-zdskl`,
                                                                  children: [
                                                                    o(O, {
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
                                                                      className: `framer-edtc9j`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-btt3sx`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1ogfn44`,
                                                                        layoutId: `W5c4tsHo0`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/660b5043-dc14-45b7-b199-204cf6231715/submit`,
                                                                  className: `framer-16as6z5`,
                                                                  nodeId: `yTuSIaa7r`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-6pd3a4`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-nl1kx9`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1ujopgh`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1bj72da`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-597msl`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-x0pxe8`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-5o1cab`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-1jwehv5`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-bn2suk`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1qt7kdh`,
                                                                          children: [
                                                                            o(O, {
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
                                                                              className: `framer-1kw30fo`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-if6cuj`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(y, {
                                                                          breakpoint: D,
                                                                          overrides: {
                                                                            Se4c8WZGo: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1asvgyo-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `BXuLT2Ru7`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `E5aYY2PXA`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `BXuLT2Ru7`,
                                                                                layoutId: `BXuLT2Ru7`,
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
        `.framer-5JV82.framer-1d1c6vz, .framer-5JV82 .framer-1d1c6vz { display: block; }`,
        `.framer-5JV82.framer-5f5rpm { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-5JV82 .framer-pje9eg { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 96px 24px 96px 24px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-5JV82 .framer-sdb4c6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5JV82 .framer-1bsvewu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-5JV82 .framer-1i3mols { --1335ju: 2; --18mrqx2: #000000; --3it368: 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-5JV82 .framer-r6mqro-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-5JV82 .framer-14ta3ft { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-5JV82 .framer-bwsarv-container { flex: none; height: 100px; position: relative; width: 339px; }`,
        `.framer-5JV82 .framer-14oc4wa { height: 50px; overflow: visible; position: relative; width: 50px; }`,
        `.framer-5JV82 .framer-6u4u0n { aspect-ratio: 1.6008403361344539 / 1; height: var(--framer-aspect-ratio-supported, 50px); overflow: visible; position: relative; width: 80px; }`,
        `.framer-5JV82 .framer-csj23e { aspect-ratio: 1.842433697347894 / 1; height: var(--framer-aspect-ratio-supported, 43px); overflow: visible; position: relative; width: 79px; }`,
        `.framer-5JV82 .framer-1dnlzbd { aspect-ratio: 3.0225409836065578 / 1; height: var(--framer-aspect-ratio-supported, 23px); overflow: visible; position: relative; width: 70px; }`,
        `.framer-5JV82 .framer-10s7eiu { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5JV82 .framer-wxsk5j-container, .framer-5JV82 .framer-1a3las2-container, .framer-5JV82 .framer-11zp1oo-container, .framer-5JV82 .framer-q7x4le-container, .framer-5JV82 .framer-dl3jih-container, .framer-5JV82 .framer-7yqird-container, .framer-5JV82 .framer-1bn1r9m-container, .framer-5JV82 .framer-xyex8h-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-5JV82.framer-pv599v, .framer-5JV82.framer-1i1ckmu, .framer-5JV82.framer-1malzva, .framer-5JV82.framer-1bhys7h, .framer-5JV82.framer-asxrkj, .framer-5JV82.framer-ccyr9j, .framer-5JV82.framer-1ekqqye, .framer-5JV82.framer-s7a7vl { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-5JV82.framer-1n0v7c3, .framer-5JV82.framer-1i0uyfs, .framer-5JV82.framer-1awqrsn, .framer-5JV82.framer-4484o0, .framer-5JV82.framer-o3wi8, .framer-5JV82.framer-o2pv74, .framer-5JV82.framer-8z9i13, .framer-5JV82.framer-1fzkxvl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-5JV82 .framer-1hcruwn, .framer-5JV82 .framer-cda68m, .framer-5JV82 .framer-hx2btd, .framer-5JV82 .framer-1apojab, .framer-5JV82 .framer-h1y09a, .framer-5JV82 .framer-uhzx5y, .framer-5JV82 .framer-5ly1m6, .framer-5JV82 .framer-vkz2vk { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-5JV82 .framer-z3iv6i, .framer-5JV82 .framer-ufjqoa, .framer-5JV82 .framer-flshjq, .framer-5JV82 .framer-160o7ig, .framer-5JV82 .framer-991kt7, .framer-5JV82 .framer-f2oclb, .framer-5JV82 .framer-b2jogw, .framer-5JV82 .framer-zdskl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-5JV82 .framer-11o5iff, .framer-5JV82 .framer-1dxyeps, .framer-5JV82 .framer-tf2jun, .framer-5JV82 .framer-1wvmoa1, .framer-5JV82 .framer-7788f, .framer-5JV82 .framer-xgwtyc, .framer-5JV82 .framer-1pwkyzj, .framer-5JV82 .framer-edtc9j { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-5JV82 .framer-pdhbpu, .framer-5JV82 .framer-y11t6x, .framer-5JV82 .framer-19it0ne, .framer-5JV82 .framer-me2781, .framer-5JV82 .framer-29v4gj, .framer-5JV82 .framer-1crgbfh, .framer-5JV82 .framer-1nm7p53, .framer-5JV82 .framer-btt3sx { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-5JV82 .framer-1rgny96, .framer-5JV82 .framer-1tvafkc, .framer-5JV82 .framer-yq0fzs, .framer-5JV82 .framer-189fwkr, .framer-5JV82 .framer-x9oygv, .framer-5JV82 .framer-1hf8c0v, .framer-5JV82 .framer-14fk8g2, .framer-5JV82 .framer-1ogfn44 { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-5JV82 .framer-1kmifib, .framer-5JV82 .framer-xmueo4, .framer-5JV82 .framer-1d77spl, .framer-5JV82 .framer-1050z5m, .framer-5JV82 .framer-1w07ibw, .framer-5JV82 .framer-1h2fx8s, .framer-5JV82 .framer-zxzwv3, .framer-5JV82 .framer-16as6z5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-5JV82 .framer-1icg5qa, .framer-5JV82 .framer-12w2hpl, .framer-5JV82 .framer-6a0zw1, .framer-5JV82 .framer-1a9rhox, .framer-5JV82 .framer-jsbiqw, .framer-5JV82 .framer-1kdnv27, .framer-5JV82 .framer-pgemn6, .framer-5JV82 .framer-1ptzkdq, .framer-5JV82 .framer-rwyq59, .framer-5JV82 .framer-1oqg3mg, .framer-5JV82 .framer-1spwlky, .framer-5JV82 .framer-nbj6ki, .framer-5JV82 .framer-1i2y5wl, .framer-5JV82 .framer-28awv, .framer-5JV82 .framer-kbnm0a, .framer-5JV82 .framer-hf74nh, .framer-5JV82 .framer-u52jl1, .framer-5JV82 .framer-1t3sgs4, .framer-5JV82 .framer-2xujx4, .framer-5JV82 .framer-pjh8pv, .framer-5JV82 .framer-8a6vya, .framer-5JV82 .framer-1rbr763, .framer-5JV82 .framer-1mqozcz, .framer-5JV82 .framer-h1fghm, .framer-5JV82 .framer-w3yeve, .framer-5JV82 .framer-17r7zq3, .framer-5JV82 .framer-1xs5rib, .framer-5JV82 .framer-1wf0zma, .framer-5JV82 .framer-6pd3a4, .framer-5JV82 .framer-1bj72da, .framer-5JV82 .framer-5o1cab, .framer-5JV82 .framer-1qt7kdh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-5JV82 .framer-oni46j, .framer-5JV82 .framer-t2m6kj, .framer-5JV82 .framer-18zcmem, .framer-5JV82 .framer-1c9yivk, .framer-5JV82 .framer-1u3ccji, .framer-5JV82 .framer-1559dfl, .framer-5JV82 .framer-eu4kb, .framer-5JV82 .framer-c0r8uj, .framer-5JV82 .framer-1anye57, .framer-5JV82 .framer-1thjrl6, .framer-5JV82 .framer-zgfqff, .framer-5JV82 .framer-1fpio9a, .framer-5JV82 .framer-1pvvl40, .framer-5JV82 .framer-drpja, .framer-5JV82 .framer-1cm7mie, .framer-5JV82 .framer-kj4d39, .framer-5JV82 .framer-12cw2tj, .framer-5JV82 .framer-1juvrdb, .framer-5JV82 .framer-1o214j, .framer-5JV82 .framer-gonzcf, .framer-5JV82 .framer-ossb59, .framer-5JV82 .framer-gmi6gj, .framer-5JV82 .framer-b29m5u, .framer-5JV82 .framer-1mkkk7w, .framer-5JV82 .framer-kdf9t6, .framer-5JV82 .framer-1bzb7ab, .framer-5JV82 .framer-kqykmx, .framer-5JV82 .framer-11qlhsh, .framer-5JV82 .framer-nl1kx9, .framer-5JV82 .framer-597msl, .framer-5JV82 .framer-1jwehv5, .framer-5JV82 .framer-1kw30fo { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-5JV82 .framer-cdauyp, .framer-5JV82 .framer-f3arj6, .framer-5JV82 .framer-hxdaxl, .framer-5JV82 .framer-if6p37, .framer-5JV82 .framer-1w2zjp0, .framer-5JV82 .framer-ptkxji, .framer-5JV82 .framer-qui8lb, .framer-5JV82 .framer-xh1b7r, .framer-5JV82 .framer-1aqq5s1, .framer-5JV82 .framer-1j9oyjf, .framer-5JV82 .framer-1xmt47z, .framer-5JV82 .framer-17t4q6v, .framer-5JV82 .framer-om6jqq, .framer-5JV82 .framer-ycacu4, .framer-5JV82 .framer-3w0y3m, .framer-5JV82 .framer-1ovkdxi, .framer-5JV82 .framer-d2otyx, .framer-5JV82 .framer-rpp811, .framer-5JV82 .framer-kyb7a7, .framer-5JV82 .framer-u45rkk, .framer-5JV82 .framer-1m0zcn3, .framer-5JV82 .framer-oh23n5, .framer-5JV82 .framer-1xhl5ce, .framer-5JV82 .framer-ysbvmx, .framer-5JV82 .framer-yen5eg, .framer-5JV82 .framer-ni5y7u, .framer-5JV82 .framer-1o8hoav, .framer-5JV82 .framer-togpgq, .framer-5JV82 .framer-1ujopgh, .framer-5JV82 .framer-x0pxe8, .framer-5JV82 .framer-bn2suk, .framer-5JV82 .framer-if6cuj { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-5JV82 .framer-vm5acw-container, .framer-5JV82 .framer-1pzhid4-container, .framer-5JV82 .framer-1kfz6iy-container, .framer-5JV82 .framer-b7w151-container, .framer-5JV82 .framer-1lji0jw-container, .framer-5JV82 .framer-1xh8edv-container, .framer-5JV82 .framer-g85aum-container, .framer-5JV82 .framer-1asvgyo-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        ..._e,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-5JV82.framer-5f5rpm { width: 810px; } .framer-5JV82 .framer-pje9eg { padding: 80px 24px 80px 24px; } .framer-5JV82 .framer-10s7eiu { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-5JV82 .framer-1hcruwn, .framer-5JV82 .framer-cda68m, .framer-5JV82 .framer-hx2btd, .framer-5JV82 .framer-1apojab, .framer-5JV82 .framer-h1y09a, .framer-5JV82 .framer-uhzx5y, .framer-5JV82 .framer-5ly1m6, .framer-5JV82 .framer-vkz2vk { height: min-content; width: min-content; } .framer-5JV82 .framer-z3iv6i, .framer-5JV82 .framer-ufjqoa, .framer-5JV82 .framer-flshjq, .framer-5JV82 .framer-160o7ig, .framer-5JV82 .framer-991kt7, .framer-5JV82 .framer-f2oclb, .framer-5JV82 .framer-b2jogw, .framer-5JV82 .framer-zdskl { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-5JV82.framer-5f5rpm { width: 390px; } .framer-5JV82 .framer-pje9eg { padding: 80px 16px 80px 16px; } .framer-5JV82 .framer-10s7eiu { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-5JV82 .framer-wxsk5j-container { order: 0; } .framer-5JV82.framer-1n0v7c3, .framer-5JV82.framer-1i0uyfs, .framer-5JV82.framer-1awqrsn, .framer-5JV82.framer-4484o0, .framer-5JV82.framer-o3wi8, .framer-5JV82.framer-o2pv74, .framer-5JV82.framer-8z9i13, .framer-5JV82.framer-1fzkxvl { padding: 60px 0px 0px 0px; } .framer-5JV82 .framer-1hcruwn, .framer-5JV82 .framer-cda68m, .framer-5JV82 .framer-hx2btd, .framer-5JV82 .framer-1apojab, .framer-5JV82 .framer-h1y09a, .framer-5JV82 .framer-uhzx5y, .framer-5JV82 .framer-5ly1m6, .framer-5JV82 .framer-vkz2vk { height: min-content; width: 300px; } .framer-5JV82 .framer-1kmifib, .framer-5JV82 .framer-xmueo4, .framer-5JV82 .framer-1d77spl, .framer-5JV82 .framer-1050z5m, .framer-5JV82 .framer-1w07ibw, .framer-5JV82 .framer-1h2fx8s, .framer-5JV82 .framer-zxzwv3, .framer-5JV82 .framer-16as6z5 { width: 261px; } .framer-5JV82 .framer-1a3las2-container { order: 1; } .framer-5JV82 .framer-11zp1oo-container { order: 2; } .framer-5JV82 .framer-q7x4le-container { order: 3; } .framer-5JV82 .framer-dl3jih-container { order: 4; } .framer-5JV82 .framer-7yqird-container { order: 5; } .framer-5JV82 .framer-1bn1r9m-container { order: 6; } .framer-5JV82 .framer-xyex8h-container { order: 7; }}`,
      ],
      `framer-5JV82`
    )),
    (Q.displayName = `Hand Tools Crimping Tools`),
    (Q.defaultProps = { height: 2007, width: 1200 }),
    D(
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
        ...H,
        ...U,
        ...Se,
        ...Ce,
        ...we,
        ...Te,
        ...h(M),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerE5aYY2PXA`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"bqKUw88e7":{"layout":["fixed","fixed"]},"Se4c8WZGo":{"layout":["fixed","fixed"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicWidth: `1200`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `2007`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: ``,
            framerColorSyntax: `true`,
            framerScrollSections: `{"Du6SaCi1c":{"pattern":":Du6SaCi1c","name":"classes"}}`,
            framerContractVersion: `1`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=rffoU4ZzK-ZAPcszXuJuXh0ROVSfWDtEq4SuhwEuEWc.CPWUAdHo.mjs.map
