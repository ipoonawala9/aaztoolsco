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
import be, { t as xe } from "./aVZgDrgIJKH9-5fDco2mNOnuN7_GF33iEqrtAQjqYhw.BnqX652a.mjs";
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
      sAUC6_sUs: `(min-width: 1200px)`,
      TJrr5POxI: `(min-width: 810px) and (max-width: 1199.98px)`,
      uZmwPd_YE: `(max-width: 809.98px)`,
    }),
    (De = `framer-Wemd3`),
    (Oe = {
      sAUC6_sUs: `framer-v-1tj1kow`,
      TJrr5POxI: `framer-v-v8arbx`,
      uZmwPd_YE: `framer-v-6j35g6`,
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
    (Me = { Desktop: `sAUC6_sUs`, Phone: `uZmwPd_YE`, Tablet: `TJrr5POxI` }),
    (Ne = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Me[r.variant] ?? r.variant ?? `sAUC6_sUs`,
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
          I = he(`oSo_RnFcU`),
          z = t(null);
        return (
          se(),
          ce({}),
          o(ae.Provider, {
            value: { primaryVariantId: `sAUC6_sUs`, variantClassNames: Oe },
            children: l(ne, {
              id: x ?? u,
              children: [
                o(je, { value: `html body { background: rgb(255, 255, 255); }` }),
                o(d.div, {
                  ...de,
                  className: g(F, `framer-1tj1kow`, b),
                  ref: c,
                  style: { ...re },
                  children: l(`section`, {
                    className: `framer-hrdyjy`,
                    "data-framer-name": `Classes`,
                    id: I,
                    ref: z,
                    children: [
                      l(`div`, {
                        className: `framer-10cq9jh`,
                        "data-framer-name": `Text`,
                        children: [
                          o(fe, {
                            href: { webPageId: `Pinumpnx5` },
                            motionChild: !0,
                            nodeId: `bjVp4pYwB`,
                            openInNewTab: !1,
                            scopeId: `xjKIVWikz`,
                            children: o(d.a, {
                              className: `framer-oee6ds framer-1jv4p3m`,
                              children: o(R, {
                                animated: !1,
                                BKVe8Pgvw: !0,
                                className: `framer-mm34x5`,
                                fICyAUQY1: !0,
                                layoutId: `RyWH0Hqh8`,
                                lKf_CQTz5: !0,
                              }),
                            }),
                          }),
                          o(y, {
                            breakpoint: D,
                            overrides: {
                              TJrr5POxI: { y: (h?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
                              uZmwPd_YE: { y: (h?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
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
                                className: `framer-2tj74o-container`,
                                nodeId: `DcPuHYa94`,
                                rendersWithMotion: !0,
                                scopeId: `xjKIVWikz`,
                                children: o(B, {
                                  ggTbrSuHk: `Hand tools`,
                                  height: `100%`,
                                  id: `DcPuHYa94`,
                                  layoutId: `DcPuHYa94`,
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
                                children: `Sockets,Socket sets & Adaptors`,
                              }),
                            }),
                            className: `framer-gukqjk`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          o(T, {
                            children: o(S, {
                              className: `framer-yivijs-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `P07SI2I6A`,
                              scopeId: `xjKIVWikz`,
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
                                id: `P07SI2I6A`,
                                layoutId: `P07SI2I6A`,
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
                                    className: `framer-12s4xcg`,
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
                                    className: `framer-1d3wgvm`,
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
                                    className: `framer-1mnde08`,
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
                                    className: `framer-1owhm63`,
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
                        className: `framer-5pr6q0`,
                        "data-framer-name": `ClassesGallery`,
                        children: [
                          o(Z, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(_, {
                                  links: [
                                    {
                                      href: { webPageId: `Ck4ICy6d1` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Ck4ICy6d1` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Ck4ICy6d1` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        TJrr5POxI: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 0,
                                        },
                                        uZmwPd_YE: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 0,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 0,
                                        children: l(S, {
                                          className: `framer-1uikccx-container`,
                                          id: `1uikccx`,
                                          nodeId: `yZ7Kamo7k`,
                                          scopeId: `xjKIVWikz`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                TJrr5POxI: { oSlFkYxO1: t[1] },
                                                uZmwPd_YE: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 793,
                                                    pixelWidth: 367,
                                                    src: `../../assets/images/Aqpsax8vNnBl86ApN5PiufXczg.png`,
                                                    srcSet: `../../assets/images/Aqpsax8vNnBl86ApN5PiufXczg.png 367w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `yZ7Kamo7k`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Impact Socket Adaptor, Reducer Set`,
                                                layoutId: `yZ7Kamo7k`,
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
                                                      triggerId: `1uikccx`,
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
                                                              className: g(F, `framer-19ey6qs`),
                                                              "data-framer-portal-id": `1uikccx`,
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
                                                            `BfjmX0vkS`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-qfv2kc`),
                                                            "data-framer-portal-id": `1uikccx`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-1hg6g3l`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-17klav2`,
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
                                                                      className: `framer-1e7cwak`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-iviey`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1k5x114`,
                                                                        layoutId: `m_LRh8EYy`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/0d8dcca0-0396-4434-a0b5-4dc407efbe83/submit`,
                                                                  className: `framer-1vaixfa`,
                                                                  nodeId: `oX34mnwfh`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1vtc6zz`,
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
                                                                              className: `framer-dsdlmf`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-liqqvc`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-14xtlg7`,
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
                                                                              className: `framer-1qc7sm3`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1xkk08z`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-fzkmff`,
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
                                                                              className: `framer-6d8ziv`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1xri7f6`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-85vqgb`,
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
                                                                              className: `framer-g26y6e`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1en0pw1`,
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
                                                                            uZmwPd_YE: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-yx1ruv-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `ImPA2FDWD`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `xjKIVWikz`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `ImPA2FDWD`,
                                                                                layoutId: `ImPA2FDWD`,
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
                                      href: { webPageId: `BIEKF77yI` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `BIEKF77yI` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `BIEKF77yI` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        TJrr5POxI: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 0,
                                        },
                                        uZmwPd_YE: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 416,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 0,
                                        children: l(S, {
                                          className: `framer-14n9bsl-container`,
                                          id: `14n9bsl`,
                                          nodeId: `PbOYJVqbB`,
                                          scopeId: `xjKIVWikz`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                TJrr5POxI: { oSlFkYxO1: t[1] },
                                                uZmwPd_YE: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 804,
                                                    pixelWidth: 1462,
                                                    src: `../../assets/images/rVh3YntQjPrcxppVKhjV6w7N1E.jpg?width=1462&height=804`,
                                                    srcSet: `../../assets/images/rVh3YntQjPrcxppVKhjV6w7N1E.jpg 512w,../../assets/images/rVh3YntQjPrcxppVKhjV6w7N1E.jpg?scale-down-to=1024&width=1462&height=804 1024w,../../assets/images/rVh3YntQjPrcxppVKhjV6w7N1E.jpg?width=1462&height=804 1462w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `PbOYJVqbB`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Adaptors`,
                                                layoutId: `PbOYJVqbB`,
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
                                                      triggerId: `14n9bsl`,
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
                                                              className: g(F, `framer-1xihhyj`),
                                                              "data-framer-portal-id": `14n9bsl`,
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
                                                            `YSRwrKEjo`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-p55f74`),
                                                            "data-framer-portal-id": `14n9bsl`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-2ugvyp`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-hkc9fo`,
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
                                                                      className: `framer-z0vvdu`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-mys67p`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1d66hrh`,
                                                                        layoutId: `JS23BCISU`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/fd67c66c-6a14-41af-a954-b354031cfad6/submit`,
                                                                  className: `framer-16ocan3`,
                                                                  nodeId: `E8oHIANRq`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1d3avbm`,
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
                                                                              className: `framer-15xqr58`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1pe692m`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-be3koc`,
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
                                                                              className: `framer-1xm7w90`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1w0v4m5`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-fov3dh`,
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
                                                                              className: `framer-t5ndhy`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-cftynt`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-2wf84m`,
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
                                                                              className: `framer-1qg7k9v`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-19ycnqk`,
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
                                                                            uZmwPd_YE: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-wh2qzz-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `S3upi6bto`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `xjKIVWikz`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `S3upi6bto`,
                                                                                layoutId: `S3upi6bto`,
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
                                      href: { webPageId: `bN_Kd4zvg` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `bN_Kd4zvg` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `bN_Kd4zvg` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        TJrr5POxI: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 416,
                                        },
                                        uZmwPd_YE: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 832,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 0,
                                        children: l(S, {
                                          className: `framer-54xpa3-container`,
                                          id: `54xpa3`,
                                          nodeId: `RGaUozCzn`,
                                          scopeId: `xjKIVWikz`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                TJrr5POxI: { oSlFkYxO1: t[1] },
                                                uZmwPd_YE: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 469,
                                                    src: `../../assets/images/gXgq3Gwvf0pZJHDIPAv0Gdyxc.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `RGaUozCzn`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Impact Socket Adaptor `,
                                                layoutId: `RGaUozCzn`,
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
                                                      triggerId: `54xpa3`,
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
                                                              className: g(F, `framer-mdysj`),
                                                              "data-framer-portal-id": `54xpa3`,
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
                                                            `IwSetXiqk`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-h27t5h`),
                                                            "data-framer-portal-id": `54xpa3`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-nzd0lu`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-hyt7xl`,
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
                                                                      className: `framer-3qubi2`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1pfwa32`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1kotg7a`,
                                                                        layoutId: `HiRAXTUQV`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/e0b5dae2-fa43-496a-a7f6-221190f07a00/submit`,
                                                                  className: `framer-1pzvo8`,
                                                                  nodeId: `CV6OINPHU`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-17ve526`,
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
                                                                              className: `framer-1r56p8p`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1nywj3e`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-7it2hu`,
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
                                                                              className: `framer-2sylt`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1w5xm3`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-14loyg2`,
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
                                                                              className: `framer-1ybr6kj`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-jjkhxi`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-g2gt5a`,
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
                                                                              className: `framer-ouy2vx`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-9dwek`,
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
                                                                            uZmwPd_YE: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-zyp0gk-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `WTIPYSdfm`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `xjKIVWikz`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `WTIPYSdfm`,
                                                                                layoutId: `WTIPYSdfm`,
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
                                      href: { webPageId: `LEMsd6NKZ` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `LEMsd6NKZ` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `LEMsd6NKZ` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        TJrr5POxI: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 416,
                                        },
                                        uZmwPd_YE: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1248,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 416,
                                        children: l(S, {
                                          className: `framer-rlztga-container`,
                                          id: `rlztga`,
                                          nodeId: `tZ5dQYoIt`,
                                          scopeId: `xjKIVWikz`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                TJrr5POxI: { oSlFkYxO1: t[1] },
                                                uZmwPd_YE: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 469,
                                                    src: `../../assets/images/owP5Z92JidlN3CEwhSOgt7jLBW4.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `tZ5dQYoIt`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Socket Accessories `,
                                                layoutId: `tZ5dQYoIt`,
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
                                                      triggerId: `rlztga`,
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
                                                              className: g(F, `framer-1y8w63g`),
                                                              "data-framer-portal-id": `rlztga`,
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
                                                            `B2ARclEhr`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-1u7dq9n`),
                                                            "data-framer-portal-id": `rlztga`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-1jkj5x6`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-pf57ur`,
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
                                                                      className: `framer-793gzb`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-xc8wcb`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1esbvy2`,
                                                                        layoutId: `wlbLVCe7c`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/71a9dd79-ca75-40a7-8df4-bbf63f6e8bcd/submit`,
                                                                  className: `framer-niee77`,
                                                                  nodeId: `uETcpm_gd`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-78etio`,
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
                                                                              className: `framer-14fm3nb`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-eu9fn`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-10r8siv`,
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
                                                                              className: `framer-1rgwkur`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1wmf3sk`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-6cbgfq`,
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
                                                                              className: `framer-1tlw5oe`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-16rw37m`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-fdbh25`,
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
                                                                              className: `framer-1dopap3`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-ey7i7t`,
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
                                                                            uZmwPd_YE: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1b1h5ep-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `Lr9sCzJSN`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `xjKIVWikz`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `Lr9sCzJSN`,
                                                                                layoutId: `Lr9sCzJSN`,
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
                                      href: { webPageId: `fRi0XqDcH` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `fRi0XqDcH` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `fRi0XqDcH` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        TJrr5POxI: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 832,
                                        },
                                        uZmwPd_YE: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1664,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 416,
                                        children: l(S, {
                                          className: `framer-81ecxz-container`,
                                          id: `81ecxz`,
                                          nodeId: `G2AhQTY5g`,
                                          scopeId: `xjKIVWikz`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                TJrr5POxI: { oSlFkYxO1: t[1] },
                                                uZmwPd_YE: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 335,
                                                    pixelWidth: 745,
                                                    src: `../../assets/images/TMwFTGJ8x0ug4MXiPbjXNdHs5x8.webp?width=745&height=335`,
                                                    srcSet: `../../assets/images/TMwFTGJ8x0ug4MXiPbjXNdHs5x8.webp 512w,../../assets/images/TMwFTGJ8x0ug4MXiPbjXNdHs5x8.webp?width=745&height=335 745w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `G2AhQTY5g`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Socket Sets`,
                                                layoutId: `G2AhQTY5g`,
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
                                                      triggerId: `81ecxz`,
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
                                                              className: g(F, `framer-qbrb6k`),
                                                              "data-framer-portal-id": `81ecxz`,
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
                                                            `sBoKBTwe6`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-17x3ruk`),
                                                            "data-framer-portal-id": `81ecxz`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-1ylqa3v`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1vquhcb`,
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
                                                                      className: `framer-qcfj8u`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-194k4rp`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1wcfr4s`,
                                                                        layoutId: `WwGVTVy7r`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/1499f14c-ac8e-481f-a106-c553526fa80a/submit`,
                                                                  className: `framer-1o1npx`,
                                                                  nodeId: `AQs0X1GNx`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1bqdwlo`,
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
                                                                              className: `framer-17het3l`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1yz57e2`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-40pxku`,
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
                                                                              className: `framer-1nx4ykl`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-koqaqs`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-ap1bkl`,
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
                                                                              className: `framer-1onlmu2`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-tln5bd`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-xm0jhs`,
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
                                                                              className: `framer-1g3ehik`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1lzru5f`,
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
                                                                            uZmwPd_YE: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1slbb02-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `KV3MeQkEC`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `xjKIVWikz`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `KV3MeQkEC`,
                                                                                layoutId: `KV3MeQkEC`,
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
                                      href: { webPageId: `xJC1rIa2q` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `xJC1rIa2q` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `xJC1rIa2q` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        TJrr5POxI: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 832,
                                        },
                                        uZmwPd_YE: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2080,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 416,
                                        children: l(S, {
                                          className: `framer-1feri7-container`,
                                          id: `1feri7`,
                                          nodeId: `NG_GU8yVO`,
                                          scopeId: `xjKIVWikz`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                TJrr5POxI: { oSlFkYxO1: t[1] },
                                                uZmwPd_YE: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 704,
                                                    src: `../../assets/images/IpSCVuLxtwU6ZDhHbmcBGLVQdo.png?width=704&height=469`,
                                                    srcSet: `../../assets/images/IpSCVuLxtwU6ZDhHbmcBGLVQdo.png 512w,../../assets/images/IpSCVuLxtwU6ZDhHbmcBGLVQdo.png?width=704&height=469 704w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `NG_GU8yVO`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Sockets`,
                                                layoutId: `NG_GU8yVO`,
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
                                                      triggerId: `1feri7`,
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
                                                              className: g(F, `framer-i5wsh0`),
                                                              "data-framer-portal-id": `1feri7`,
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
                                                            `FGa6eXIzU`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-1tbis58`),
                                                            "data-framer-portal-id": `1feri7`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-482lwm`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-tf8ekr`,
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
                                                                      className: `framer-3me8uu`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-10pih3w`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-34wyqm`,
                                                                        layoutId: `qc8aA2Qmp`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/216432ee-b803-45db-a84d-345b31dbbd5f/submit`,
                                                                  className: `framer-4y9pvu`,
                                                                  nodeId: `BuSNwBxwy`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-kfen89`,
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
                                                                              className: `framer-8gt875`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-f4hjyx`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-6j4djg`,
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
                                                                              className: `framer-19wompo`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-cr5ien`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1hznd7g`,
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
                                                                              className: `framer-1c26e75`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1yzgrnw`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1d63no0`,
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
                                                                              className: `framer-5ly02r`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1vddrmw`,
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
                                                                            uZmwPd_YE: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-17mhn42-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `FOvHp3H2c`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `xjKIVWikz`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `FOvHp3H2c`,
                                                                                layoutId: `FOvHp3H2c`,
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
                                      href: { webPageId: `RfwdPqeXZ` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `RfwdPqeXZ` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `RfwdPqeXZ` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        TJrr5POxI: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1248,
                                        },
                                        uZmwPd_YE: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2496,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 832,
                                        children: l(S, {
                                          className: `framer-1t8cmlu-container`,
                                          id: `1t8cmlu`,
                                          nodeId: `tMnSEFjgp`,
                                          scopeId: `xjKIVWikz`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                TJrr5POxI: { oSlFkYxO1: t[1] },
                                                uZmwPd_YE: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 1098,
                                                    src: `../../assets/images/6l2JYnI9wRYBKxAQmG3mfoWJs.png?width=1098&height=469`,
                                                    srcSet: `../../assets/images/6l2JYnI9wRYBKxAQmG3mfoWJs.png 512w,../../assets/images/6l2JYnI9wRYBKxAQmG3mfoWJs.png?scale-down-to=1024&width=1098&height=469 1024w,../../assets/images/6l2JYnI9wRYBKxAQmG3mfoWJs.png?width=1098&height=469 1098w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `tMnSEFjgp`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Ratchet Handles`,
                                                layoutId: `tMnSEFjgp`,
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
                                                      triggerId: `1t8cmlu`,
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
                                                              className: g(F, `framer-18rxnp5`),
                                                              "data-framer-portal-id": `1t8cmlu`,
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
                                                            `a2Jv1VK_4`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-ldceg0`),
                                                            "data-framer-portal-id": `1t8cmlu`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-1hltiw5`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-hnbmug`,
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
                                                                      className: `framer-1fidqmf`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-vts1j9`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-15ps3im`,
                                                                        layoutId: `w7BeIIBdA`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/dd3b86c7-e955-42b0-b056-1d0091b261c0/submit`,
                                                                  className: `framer-1p9udo`,
                                                                  nodeId: `y8oz1afMX`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-cm0nqv`,
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
                                                                              className: `framer-1w019a`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-ssdsj2`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-n8kmym`,
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
                                                                              className: `framer-jvud0c`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-xh874s`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1dd5tca`,
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
                                                                              className: `framer-buxbyq`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1gdrvrk`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1hyc0f5`,
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
                                                                              className: `framer-hyj7fs`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-fr90nz`,
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
                                                                            uZmwPd_YE: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1pdu4rw-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `K1qw_kISB`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `xjKIVWikz`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `K1qw_kISB`,
                                                                                layoutId: `K1qw_kISB`,
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
                                      href: { webPageId: `ezZGKRdiC` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `ezZGKRdiC` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `ezZGKRdiC` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        TJrr5POxI: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1248,
                                        },
                                        uZmwPd_YE: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2912,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 832,
                                        children: l(S, {
                                          className: `framer-19ymfta-container`,
                                          id: `19ymfta`,
                                          nodeId: `bx7LcZxri`,
                                          scopeId: `xjKIVWikz`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                TJrr5POxI: { oSlFkYxO1: t[1] },
                                                uZmwPd_YE: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 600,
                                                    pixelWidth: 600,
                                                    src: `../../assets/images/U6GoiOxOfimLsoMiR3IdrHpGAas.png?width=600&height=600`,
                                                    srcSet: `../../assets/images/U6GoiOxOfimLsoMiR3IdrHpGAas.png 512w,../../assets/images/U6GoiOxOfimLsoMiR3IdrHpGAas.png?width=600&height=600 600w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `bx7LcZxri`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Impact Socket`,
                                                layoutId: `bx7LcZxri`,
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
                                                      triggerId: `19ymfta`,
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
                                                              className: g(F, `framer-11pp7sm`),
                                                              "data-framer-portal-id": `19ymfta`,
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
                                                            `iAnQ_38R8`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-1i351tz`),
                                                            "data-framer-portal-id": `19ymfta`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-pbswfe`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-h1n3p6`,
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
                                                                      className: `framer-126q60n`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1tt74fi`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-d2t6fo`,
                                                                        layoutId: `zoVxM7gmL`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/ef36c8da-2bf6-46d8-ac3c-88138678cf71/submit`,
                                                                  className: `framer-11t4g6v`,
                                                                  nodeId: `X5w9qkybY`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-dxnity`,
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
                                                                              className: `framer-1mz9n0o`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1syub9`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1px0i1d`,
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
                                                                              className: `framer-e5wnan`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-r0vr53`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1ps57o6`,
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
                                                                              className: `framer-16i7laj`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-r1lol3`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1c33glh`,
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
                                                                              className: `framer-1kmr3fq`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-iz1rj9`,
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
                                                                            uZmwPd_YE: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-ggofs8-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `ASqMC58IU`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `xjKIVWikz`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `ASqMC58IU`,
                                                                                layoutId: `ASqMC58IU`,
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
                                      href: { webPageId: `YoKc4A_3g` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `YoKc4A_3g` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `YoKc4A_3g` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        TJrr5POxI: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1664,
                                        },
                                        uZmwPd_YE: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 3328,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 832,
                                        children: l(S, {
                                          className: `framer-9vzi8f-container`,
                                          id: `9vzi8f`,
                                          nodeId: `BVHu_C1GE`,
                                          scopeId: `xjKIVWikz`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                TJrr5POxI: { oSlFkYxO1: t[1] },
                                                uZmwPd_YE: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 208,
                                                    pixelWidth: 500,
                                                    src: `../../assets/images/DnrqFTI8OsSztYVCAtF2WXYSM9s.webp`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `BVHu_C1GE`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Torque Wrench socket`,
                                                layoutId: `BVHu_C1GE`,
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
                                                      triggerId: `9vzi8f`,
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
                                                              className: g(F, `framer-18682wh`),
                                                              "data-framer-portal-id": `9vzi8f`,
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
                                                            `W3PwcQdbB`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-1w75kht`),
                                                            "data-framer-portal-id": `9vzi8f`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-1nc291c`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-13smmi2`,
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
                                                                      className: `framer-1ma2lxr`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1oh1pm7`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1fcl8bo`,
                                                                        layoutId: `TKp6tZR41`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/e881ac2c-3ced-4798-b733-5c8c83255f49/submit`,
                                                                  className: `framer-1vvimhd`,
                                                                  nodeId: `ccE6QTkhx`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-zawg8a`,
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
                                                                              className: `framer-1imomgx`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1xh9gbg`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-2xidv7`,
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
                                                                              className: `framer-1revc69`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-18d9nh9`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1hva7gz`,
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
                                                                              className: `framer-2pcgzw`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-e1ohwf`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-9cq6kl`,
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
                                                                              className: `framer-rrv1f3`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-16j0k5z`,
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
                                                                            uZmwPd_YE: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1rc9bk0-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `ZbPnZdomy`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `xjKIVWikz`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `ZbPnZdomy`,
                                                                                layoutId: `ZbPnZdomy`,
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
                                      href: { webPageId: `DCy1NNz6j` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `DCy1NNz6j` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `DCy1NNz6j` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        TJrr5POxI: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1664,
                                        },
                                        uZmwPd_YE: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 3744,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 1248,
                                        children: l(S, {
                                          className: `framer-1h38xyy-container`,
                                          id: `1h38xyy`,
                                          nodeId: `BmBNpA1jw`,
                                          scopeId: `xjKIVWikz`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                TJrr5POxI: { oSlFkYxO1: t[1] },
                                                uZmwPd_YE: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 533,
                                                    pixelWidth: 510,
                                                    src: `../../assets/images/1NBXt69WxBLw1nDTxxJzf67VlY.png`,
                                                    srcSet: `../../assets/images/1NBXt69WxBLw1nDTxxJzf67VlY.png 510w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `BmBNpA1jw`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Torex and Hex Bit Socket`,
                                                layoutId: `BmBNpA1jw`,
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
                                                      triggerId: `1h38xyy`,
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
                                                              className: g(F, `framer-4f92dj`),
                                                              "data-framer-portal-id": `1h38xyy`,
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
                                                            `CKDMp3m93`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-iwyk4z`),
                                                            "data-framer-portal-id": `1h38xyy`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-bp20sn`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-79rtws`,
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
                                                                      className: `framer-1uua44q`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1dujfuv`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1bia2hl`,
                                                                        layoutId: `zuJgA0tvC`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/aaac9eea-1f84-4213-b048-7938eeffdfc6/submit`,
                                                                  className: `framer-s7d6bl`,
                                                                  nodeId: `UuVCAVctK`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1cogmoc`,
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
                                                                              className: `framer-z4b4vi`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1uwq2m`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-47y5e3`,
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
                                                                              className: `framer-1de9xys`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-11dbi4m`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-clftah`,
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
                                                                              className: `framer-oxkf4i`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1kozffd`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1s31ww9`,
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
                                                                              className: `framer-3ylxry`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1pzais2`,
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
                                                                            uZmwPd_YE: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1kjk8ev-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `vNuNXEqw7`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `xjKIVWikz`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `vNuNXEqw7`,
                                                                                layoutId: `vNuNXEqw7`,
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
                                      href: { webPageId: `R2rigjNAz` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `R2rigjNAz` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `R2rigjNAz` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        TJrr5POxI: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2080,
                                        },
                                        uZmwPd_YE: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 4160,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 1248,
                                        children: l(S, {
                                          className: `framer-1eq1p24-container`,
                                          id: `1eq1p24`,
                                          nodeId: `hU4eh7Gwh`,
                                          scopeId: `xjKIVWikz`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                TJrr5POxI: { oSlFkYxO1: t[1] },
                                                uZmwPd_YE: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 591,
                                                    pixelWidth: 541,
                                                    src: `../../assets/images/1Ry9k9T5qWdIo7LZuJi2HisHbw.png`,
                                                    srcSet: `../../assets/images/1Ry9k9T5qWdIo7LZuJi2HisHbw.png 541w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `hU4eh7Gwh`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Torex and Hex Bit Set`,
                                                layoutId: `hU4eh7Gwh`,
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
                                                      triggerId: `1eq1p24`,
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
                                                              className: g(F, `framer-1bine71`),
                                                              "data-framer-portal-id": `1eq1p24`,
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
                                                            `vFeKeLDIW`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-16ym3ra`),
                                                            "data-framer-portal-id": `1eq1p24`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-l2566s`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1869mf9`,
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
                                                                      className: `framer-ex72pj`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-12ylqc6`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-svx5ct`,
                                                                        layoutId: `t3R6g7cqF`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/e12b03e0-e205-4402-8bbb-323d2194abca/submit`,
                                                                  className: `framer-1xv4g4z`,
                                                                  nodeId: `Bs2svuV3a`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1cj0ttf`,
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
                                                                              className: `framer-1if2p7j`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1egkbz`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-smx6p`,
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
                                                                              className: `framer-1kfeym8`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-ux5wse`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-10f7t8f`,
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
                                                                              className: `framer-218hdc`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1nh56ds`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-jonfp3`,
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
                                                                              className: `framer-rgoej9`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-urskmm`,
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
                                                                            uZmwPd_YE: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-yna8rx-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `EJQMLW8dn`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `xjKIVWikz`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `EJQMLW8dn`,
                                                                                layoutId: `EJQMLW8dn`,
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
        `.framer-Wemd3.framer-1jv4p3m, .framer-Wemd3 .framer-1jv4p3m { display: block; }`,
        `.framer-Wemd3.framer-1tj1kow { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-Wemd3 .framer-hrdyjy { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 96px 24px 96px 24px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-Wemd3 .framer-10cq9jh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wemd3 .framer-oee6ds { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-Wemd3 .framer-mm34x5 { --1335ju: 2; --18mrqx2: #000000; --3it368: 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-Wemd3 .framer-2tj74o-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Wemd3 .framer-gukqjk { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Wemd3 .framer-yivijs-container { flex: none; height: 100px; position: relative; width: 339px; }`,
        `.framer-Wemd3 .framer-12s4xcg { height: 50px; overflow: visible; position: relative; width: 50px; }`,
        `.framer-Wemd3 .framer-1d3wgvm { aspect-ratio: 1.6008403361344539 / 1; height: var(--framer-aspect-ratio-supported, 50px); overflow: visible; position: relative; width: 80px; }`,
        `.framer-Wemd3 .framer-1mnde08 { aspect-ratio: 1.842433697347894 / 1; height: var(--framer-aspect-ratio-supported, 43px); overflow: visible; position: relative; width: 79px; }`,
        `.framer-Wemd3 .framer-1owhm63 { aspect-ratio: 3.0225409836065578 / 1; height: var(--framer-aspect-ratio-supported, 23px); overflow: visible; position: relative; width: 70px; }`,
        `.framer-Wemd3 .framer-5pr6q0 { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wemd3 .framer-1uikccx-container, .framer-Wemd3 .framer-14n9bsl-container, .framer-Wemd3 .framer-54xpa3-container, .framer-Wemd3 .framer-rlztga-container, .framer-Wemd3 .framer-81ecxz-container, .framer-Wemd3 .framer-1feri7-container, .framer-Wemd3 .framer-1t8cmlu-container, .framer-Wemd3 .framer-19ymfta-container, .framer-Wemd3 .framer-9vzi8f-container, .framer-Wemd3 .framer-1h38xyy-container, .framer-Wemd3 .framer-1eq1p24-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-Wemd3.framer-19ey6qs, .framer-Wemd3.framer-1xihhyj, .framer-Wemd3.framer-mdysj, .framer-Wemd3.framer-1y8w63g, .framer-Wemd3.framer-qbrb6k, .framer-Wemd3.framer-i5wsh0, .framer-Wemd3.framer-18rxnp5, .framer-Wemd3.framer-11pp7sm, .framer-Wemd3.framer-18682wh, .framer-Wemd3.framer-4f92dj, .framer-Wemd3.framer-1bine71 { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-Wemd3.framer-qfv2kc, .framer-Wemd3.framer-p55f74, .framer-Wemd3.framer-h27t5h, .framer-Wemd3.framer-1u7dq9n, .framer-Wemd3.framer-17x3ruk, .framer-Wemd3.framer-1tbis58, .framer-Wemd3.framer-ldceg0, .framer-Wemd3.framer-1i351tz, .framer-Wemd3.framer-1w75kht, .framer-Wemd3.framer-iwyk4z, .framer-Wemd3.framer-16ym3ra { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-Wemd3 .framer-1hg6g3l, .framer-Wemd3 .framer-2ugvyp, .framer-Wemd3 .framer-nzd0lu, .framer-Wemd3 .framer-1jkj5x6, .framer-Wemd3 .framer-1ylqa3v, .framer-Wemd3 .framer-482lwm, .framer-Wemd3 .framer-1hltiw5, .framer-Wemd3 .framer-pbswfe, .framer-Wemd3 .framer-1nc291c, .framer-Wemd3 .framer-bp20sn, .framer-Wemd3 .framer-l2566s { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-Wemd3 .framer-17klav2, .framer-Wemd3 .framer-hkc9fo, .framer-Wemd3 .framer-hyt7xl, .framer-Wemd3 .framer-pf57ur, .framer-Wemd3 .framer-1vquhcb, .framer-Wemd3 .framer-tf8ekr, .framer-Wemd3 .framer-hnbmug, .framer-Wemd3 .framer-h1n3p6, .framer-Wemd3 .framer-13smmi2, .framer-Wemd3 .framer-79rtws, .framer-Wemd3 .framer-1869mf9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wemd3 .framer-1e7cwak, .framer-Wemd3 .framer-z0vvdu, .framer-Wemd3 .framer-3qubi2, .framer-Wemd3 .framer-793gzb, .framer-Wemd3 .framer-qcfj8u, .framer-Wemd3 .framer-3me8uu, .framer-Wemd3 .framer-1fidqmf, .framer-Wemd3 .framer-126q60n, .framer-Wemd3 .framer-1ma2lxr, .framer-Wemd3 .framer-1uua44q, .framer-Wemd3 .framer-ex72pj { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Wemd3 .framer-iviey, .framer-Wemd3 .framer-mys67p, .framer-Wemd3 .framer-1pfwa32, .framer-Wemd3 .framer-xc8wcb, .framer-Wemd3 .framer-194k4rp, .framer-Wemd3 .framer-10pih3w, .framer-Wemd3 .framer-vts1j9, .framer-Wemd3 .framer-1tt74fi, .framer-Wemd3 .framer-1oh1pm7, .framer-Wemd3 .framer-1dujfuv, .framer-Wemd3 .framer-12ylqc6 { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-Wemd3 .framer-1k5x114, .framer-Wemd3 .framer-1d66hrh, .framer-Wemd3 .framer-1kotg7a, .framer-Wemd3 .framer-1esbvy2, .framer-Wemd3 .framer-1wcfr4s, .framer-Wemd3 .framer-34wyqm, .framer-Wemd3 .framer-15ps3im, .framer-Wemd3 .framer-d2t6fo, .framer-Wemd3 .framer-1fcl8bo, .framer-Wemd3 .framer-1bia2hl, .framer-Wemd3 .framer-svx5ct { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-Wemd3 .framer-1vaixfa, .framer-Wemd3 .framer-16ocan3, .framer-Wemd3 .framer-1pzvo8, .framer-Wemd3 .framer-niee77, .framer-Wemd3 .framer-1o1npx, .framer-Wemd3 .framer-4y9pvu, .framer-Wemd3 .framer-1p9udo, .framer-Wemd3 .framer-11t4g6v, .framer-Wemd3 .framer-1vvimhd, .framer-Wemd3 .framer-s7d6bl, .framer-Wemd3 .framer-1xv4g4z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-Wemd3 .framer-1vtc6zz, .framer-Wemd3 .framer-14xtlg7, .framer-Wemd3 .framer-fzkmff, .framer-Wemd3 .framer-85vqgb, .framer-Wemd3 .framer-1d3avbm, .framer-Wemd3 .framer-be3koc, .framer-Wemd3 .framer-fov3dh, .framer-Wemd3 .framer-2wf84m, .framer-Wemd3 .framer-17ve526, .framer-Wemd3 .framer-7it2hu, .framer-Wemd3 .framer-14loyg2, .framer-Wemd3 .framer-g2gt5a, .framer-Wemd3 .framer-78etio, .framer-Wemd3 .framer-10r8siv, .framer-Wemd3 .framer-6cbgfq, .framer-Wemd3 .framer-fdbh25, .framer-Wemd3 .framer-1bqdwlo, .framer-Wemd3 .framer-40pxku, .framer-Wemd3 .framer-ap1bkl, .framer-Wemd3 .framer-xm0jhs, .framer-Wemd3 .framer-kfen89, .framer-Wemd3 .framer-6j4djg, .framer-Wemd3 .framer-1hznd7g, .framer-Wemd3 .framer-1d63no0, .framer-Wemd3 .framer-cm0nqv, .framer-Wemd3 .framer-n8kmym, .framer-Wemd3 .framer-1dd5tca, .framer-Wemd3 .framer-1hyc0f5, .framer-Wemd3 .framer-dxnity, .framer-Wemd3 .framer-1px0i1d, .framer-Wemd3 .framer-1ps57o6, .framer-Wemd3 .framer-1c33glh, .framer-Wemd3 .framer-zawg8a, .framer-Wemd3 .framer-2xidv7, .framer-Wemd3 .framer-1hva7gz, .framer-Wemd3 .framer-9cq6kl, .framer-Wemd3 .framer-1cogmoc, .framer-Wemd3 .framer-47y5e3, .framer-Wemd3 .framer-clftah, .framer-Wemd3 .framer-1s31ww9, .framer-Wemd3 .framer-1cj0ttf, .framer-Wemd3 .framer-smx6p, .framer-Wemd3 .framer-10f7t8f, .framer-Wemd3 .framer-jonfp3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wemd3 .framer-dsdlmf, .framer-Wemd3 .framer-1qc7sm3, .framer-Wemd3 .framer-6d8ziv, .framer-Wemd3 .framer-g26y6e, .framer-Wemd3 .framer-15xqr58, .framer-Wemd3 .framer-1xm7w90, .framer-Wemd3 .framer-t5ndhy, .framer-Wemd3 .framer-1qg7k9v, .framer-Wemd3 .framer-1r56p8p, .framer-Wemd3 .framer-2sylt, .framer-Wemd3 .framer-1ybr6kj, .framer-Wemd3 .framer-ouy2vx, .framer-Wemd3 .framer-14fm3nb, .framer-Wemd3 .framer-1rgwkur, .framer-Wemd3 .framer-1tlw5oe, .framer-Wemd3 .framer-1dopap3, .framer-Wemd3 .framer-17het3l, .framer-Wemd3 .framer-1nx4ykl, .framer-Wemd3 .framer-1onlmu2, .framer-Wemd3 .framer-1g3ehik, .framer-Wemd3 .framer-8gt875, .framer-Wemd3 .framer-19wompo, .framer-Wemd3 .framer-1c26e75, .framer-Wemd3 .framer-5ly02r, .framer-Wemd3 .framer-1w019a, .framer-Wemd3 .framer-jvud0c, .framer-Wemd3 .framer-buxbyq, .framer-Wemd3 .framer-hyj7fs, .framer-Wemd3 .framer-1mz9n0o, .framer-Wemd3 .framer-e5wnan, .framer-Wemd3 .framer-16i7laj, .framer-Wemd3 .framer-1kmr3fq, .framer-Wemd3 .framer-1imomgx, .framer-Wemd3 .framer-1revc69, .framer-Wemd3 .framer-2pcgzw, .framer-Wemd3 .framer-rrv1f3, .framer-Wemd3 .framer-z4b4vi, .framer-Wemd3 .framer-1de9xys, .framer-Wemd3 .framer-oxkf4i, .framer-Wemd3 .framer-3ylxry, .framer-Wemd3 .framer-1if2p7j, .framer-Wemd3 .framer-1kfeym8, .framer-Wemd3 .framer-218hdc, .framer-Wemd3 .framer-rgoej9 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Wemd3 .framer-liqqvc, .framer-Wemd3 .framer-1xkk08z, .framer-Wemd3 .framer-1xri7f6, .framer-Wemd3 .framer-1en0pw1, .framer-Wemd3 .framer-1pe692m, .framer-Wemd3 .framer-1w0v4m5, .framer-Wemd3 .framer-cftynt, .framer-Wemd3 .framer-19ycnqk, .framer-Wemd3 .framer-1nywj3e, .framer-Wemd3 .framer-1w5xm3, .framer-Wemd3 .framer-jjkhxi, .framer-Wemd3 .framer-9dwek, .framer-Wemd3 .framer-eu9fn, .framer-Wemd3 .framer-1wmf3sk, .framer-Wemd3 .framer-16rw37m, .framer-Wemd3 .framer-ey7i7t, .framer-Wemd3 .framer-1yz57e2, .framer-Wemd3 .framer-koqaqs, .framer-Wemd3 .framer-tln5bd, .framer-Wemd3 .framer-1lzru5f, .framer-Wemd3 .framer-f4hjyx, .framer-Wemd3 .framer-cr5ien, .framer-Wemd3 .framer-1yzgrnw, .framer-Wemd3 .framer-1vddrmw, .framer-Wemd3 .framer-ssdsj2, .framer-Wemd3 .framer-xh874s, .framer-Wemd3 .framer-1gdrvrk, .framer-Wemd3 .framer-fr90nz, .framer-Wemd3 .framer-1syub9, .framer-Wemd3 .framer-r0vr53, .framer-Wemd3 .framer-r1lol3, .framer-Wemd3 .framer-iz1rj9, .framer-Wemd3 .framer-1xh9gbg, .framer-Wemd3 .framer-18d9nh9, .framer-Wemd3 .framer-e1ohwf, .framer-Wemd3 .framer-16j0k5z, .framer-Wemd3 .framer-1uwq2m, .framer-Wemd3 .framer-11dbi4m, .framer-Wemd3 .framer-1kozffd, .framer-Wemd3 .framer-1pzais2, .framer-Wemd3 .framer-1egkbz, .framer-Wemd3 .framer-ux5wse, .framer-Wemd3 .framer-1nh56ds, .framer-Wemd3 .framer-urskmm { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-Wemd3 .framer-yx1ruv-container, .framer-Wemd3 .framer-wh2qzz-container, .framer-Wemd3 .framer-zyp0gk-container, .framer-Wemd3 .framer-1b1h5ep-container, .framer-Wemd3 .framer-1slbb02-container, .framer-Wemd3 .framer-17mhn42-container, .framer-Wemd3 .framer-1pdu4rw-container, .framer-Wemd3 .framer-ggofs8-container, .framer-Wemd3 .framer-1rc9bk0-container, .framer-Wemd3 .framer-1kjk8ev-container, .framer-Wemd3 .framer-yna8rx-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        ..._e,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-Wemd3.framer-1tj1kow { width: 810px; } .framer-Wemd3 .framer-hrdyjy { padding: 80px 24px 80px 24px; } .framer-Wemd3 .framer-5pr6q0 { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-Wemd3 .framer-1hg6g3l, .framer-Wemd3 .framer-2ugvyp, .framer-Wemd3 .framer-nzd0lu, .framer-Wemd3 .framer-1jkj5x6, .framer-Wemd3 .framer-1ylqa3v, .framer-Wemd3 .framer-482lwm, .framer-Wemd3 .framer-1hltiw5, .framer-Wemd3 .framer-pbswfe, .framer-Wemd3 .framer-1nc291c, .framer-Wemd3 .framer-bp20sn, .framer-Wemd3 .framer-l2566s { height: min-content; width: min-content; } .framer-Wemd3 .framer-17klav2, .framer-Wemd3 .framer-hkc9fo, .framer-Wemd3 .framer-hyt7xl, .framer-Wemd3 .framer-pf57ur, .framer-Wemd3 .framer-1vquhcb, .framer-Wemd3 .framer-tf8ekr, .framer-Wemd3 .framer-hnbmug, .framer-Wemd3 .framer-h1n3p6, .framer-Wemd3 .framer-13smmi2, .framer-Wemd3 .framer-79rtws, .framer-Wemd3 .framer-1869mf9 { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-Wemd3.framer-1tj1kow { width: 390px; } .framer-Wemd3 .framer-hrdyjy { padding: 80px 16px 80px 16px; } .framer-Wemd3 .framer-5pr6q0 { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-Wemd3 .framer-1uikccx-container { order: 0; } .framer-Wemd3.framer-qfv2kc, .framer-Wemd3.framer-p55f74, .framer-Wemd3.framer-h27t5h, .framer-Wemd3.framer-1u7dq9n, .framer-Wemd3.framer-17x3ruk, .framer-Wemd3.framer-1tbis58, .framer-Wemd3.framer-ldceg0, .framer-Wemd3.framer-1i351tz, .framer-Wemd3.framer-1w75kht, .framer-Wemd3.framer-iwyk4z, .framer-Wemd3.framer-16ym3ra { padding: 60px 0px 0px 0px; } .framer-Wemd3 .framer-1hg6g3l, .framer-Wemd3 .framer-2ugvyp, .framer-Wemd3 .framer-nzd0lu, .framer-Wemd3 .framer-1jkj5x6, .framer-Wemd3 .framer-1ylqa3v, .framer-Wemd3 .framer-482lwm, .framer-Wemd3 .framer-1hltiw5, .framer-Wemd3 .framer-pbswfe, .framer-Wemd3 .framer-1nc291c, .framer-Wemd3 .framer-bp20sn, .framer-Wemd3 .framer-l2566s { height: min-content; width: 300px; } .framer-Wemd3 .framer-1vaixfa, .framer-Wemd3 .framer-16ocan3, .framer-Wemd3 .framer-1pzvo8, .framer-Wemd3 .framer-niee77, .framer-Wemd3 .framer-1o1npx, .framer-Wemd3 .framer-4y9pvu, .framer-Wemd3 .framer-1p9udo, .framer-Wemd3 .framer-11t4g6v, .framer-Wemd3 .framer-1vvimhd, .framer-Wemd3 .framer-s7d6bl, .framer-Wemd3 .framer-1xv4g4z { width: 261px; } .framer-Wemd3 .framer-14n9bsl-container { order: 1; } .framer-Wemd3 .framer-54xpa3-container { order: 2; } .framer-Wemd3 .framer-rlztga-container { order: 3; } .framer-Wemd3 .framer-81ecxz-container { order: 4; } .framer-Wemd3 .framer-1feri7-container { order: 5; } .framer-Wemd3 .framer-1t8cmlu-container { order: 6; } .framer-Wemd3 .framer-19ymfta-container { order: 7; } .framer-Wemd3 .framer-9vzi8f-container { order: 8; } .framer-Wemd3 .framer-1h38xyy-container { order: 9; } .framer-Wemd3 .framer-1eq1p24-container { order: 10; }}`,
      ],
      `framer-Wemd3`
    )),
    (Q.displayName = `Hand Tools Scredrivers`),
    (Q.defaultProps = { height: 2423, width: 1200 }),
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
        default: {
          type: `reactComponent`,
          name: `FramerxjKIVWikz`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `2423`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"TJrr5POxI":{"layout":["fixed","fixed"]},"uZmwPd_YE":{"layout":["fixed","fixed"]}}}`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: ``,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `{"oSo_RnFcU":{"pattern":":oSo_RnFcU","name":"classes"}}`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=XmXbSoMBJuz5dtROu86exiKRZRLccYNeffL9bQdqeDc.Dqs_3_N-.mjs.map
