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
import be, { t as xe } from "./0QdA_MZUDAwlSGhPv9mveevk3KcMhZ9zyfWPFc-C5Mg.CdNCI2H6.mjs";
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
      nJbIz8DJn: `(min-width: 1200px)`,
      UC6CMYqpe: `(min-width: 810px) and (max-width: 1199.98px)`,
      W9G7QfdEH: `(max-width: 809.98px)`,
    }),
    (De = `framer-tq1zC`),
    (Oe = {
      nJbIz8DJn: `framer-v-1kguw6`,
      UC6CMYqpe: `framer-v-7v56j8`,
      W9G7QfdEH: `framer-v-1352uoj`,
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
    (Me = { Desktop: `nJbIz8DJn`, Phone: `W9G7QfdEH`, Tablet: `UC6CMYqpe` }),
    (Ne = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Me[r.variant] ?? r.variant ?? `nJbIz8DJn`,
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
          I = he(`n7vjn3bqX`),
          z = t(null);
        return (
          se(),
          ce({}),
          o(ae.Provider, {
            value: { primaryVariantId: `nJbIz8DJn`, variantClassNames: Oe },
            children: l(ne, {
              id: x ?? u,
              children: [
                o(je, { value: `html body { background: rgb(255, 255, 255); }` }),
                o(d.div, {
                  ...de,
                  className: g(F, `framer-1kguw6`, b),
                  ref: c,
                  style: { ...re },
                  children: l(`section`, {
                    className: `framer-1jbt433`,
                    "data-framer-name": `Classes`,
                    id: I,
                    ref: z,
                    children: [
                      l(`div`, {
                        className: `framer-3u0r3n`,
                        "data-framer-name": `Text`,
                        children: [
                          o(fe, {
                            href: { webPageId: `Pinumpnx5` },
                            motionChild: !0,
                            nodeId: `VfVacComk`,
                            openInNewTab: !1,
                            scopeId: `f03aAHi90`,
                            children: o(d.a, {
                              className: `framer-1b7j369 framer-xjh9s7`,
                              children: o(R, {
                                animated: !1,
                                BKVe8Pgvw: !0,
                                className: `framer-188637a`,
                                fICyAUQY1: !0,
                                layoutId: `B0lJ7Qj8c`,
                                lKf_CQTz5: !0,
                              }),
                            }),
                          }),
                          o(y, {
                            breakpoint: D,
                            overrides: {
                              UC6CMYqpe: { y: (h?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
                              W9G7QfdEH: { y: (h?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
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
                                className: `framer-120clgb-container`,
                                nodeId: `chvS513ca`,
                                rendersWithMotion: !0,
                                scopeId: `f03aAHi90`,
                                children: o(B, {
                                  ggTbrSuHk: `Hand tools`,
                                  height: `100%`,
                                  id: `chvS513ca`,
                                  layoutId: `chvS513ca`,
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
                                children: `Screwdrivers`,
                              }),
                            }),
                            className: `framer-n5xusk`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          o(T, {
                            children: o(S, {
                              className: `framer-u7q0sf-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `EI85Job8c`,
                              scopeId: `f03aAHi90`,
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
                                id: `EI85Job8c`,
                                layoutId: `EI85Job8c`,
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
                                    className: `framer-xqb0`,
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
                                    className: `framer-notbdg`,
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
                                    className: `framer-1i6btla`,
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
                                    className: `framer-1wcgvn3`,
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
                        className: `framer-12jrmhe`,
                        "data-framer-name": `ClassesGallery`,
                        children: [
                          o(Z, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(_, {
                                  links: [
                                    {
                                      href: { webPageId: `rqhiNRf61` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `rqhiNRf61` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `rqhiNRf61` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        UC6CMYqpe: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 0,
                                        },
                                        W9G7QfdEH: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 0,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 0,
                                        children: l(S, {
                                          className: `framer-sazpvw-container`,
                                          id: `sazpvw`,
                                          nodeId: `jEzZRf3G6`,
                                          scopeId: `f03aAHi90`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                UC6CMYqpe: { oSlFkYxO1: t[1] },
                                                W9G7QfdEH: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 500,
                                                    pixelWidth: 500,
                                                    src: `../../assets/images/8xF6JYHHl7VZQ5ZIVgC8ScvMrH4.webp`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `jEzZRf3G6`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Two in One Screwdriver`,
                                                layoutId: `jEzZRf3G6`,
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
                                                      triggerId: `sazpvw`,
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
                                                              className: g(F, `framer-1wy07xv`),
                                                              "data-framer-portal-id": `sazpvw`,
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
                                                            `iYSF7hJom`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-157rfqb`),
                                                            "data-framer-portal-id": `sazpvw`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-uzb1oh`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1ozcieb`,
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
                                                                      className: `framer-dti1ch`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-ulpetx`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-od2t9a`,
                                                                        layoutId: `Dsesv8QeC`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/b119419e-f21f-46f3-bd04-a6f291054e6a/submit`,
                                                                  className: `framer-1o7zqpy`,
                                                                  nodeId: `mpFaQ3KTM`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-ecjvih`,
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
                                                                              className: `framer-1ng6vh2`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-r99msf`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1wdipxk`,
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
                                                                              className: `framer-1sfixw`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1yrdt2s`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-ku0dpt`,
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
                                                                              className: `framer-1129353`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1bgu4vo`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-13wlexb`,
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
                                                                              className: `framer-15je8lr`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1ikz2st`,
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
                                                                            W9G7QfdEH: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1u1kff-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `lav6RXbXl`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `f03aAHi90`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `lav6RXbXl`,
                                                                                layoutId: `lav6RXbXl`,
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
                                      href: { webPageId: `l3Ofj4TEr` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `l3Ofj4TEr` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `l3Ofj4TEr` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        UC6CMYqpe: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 0,
                                        },
                                        W9G7QfdEH: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 416,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 0,
                                        children: l(S, {
                                          className: `framer-w8uj7e-container`,
                                          id: `w8uj7e`,
                                          nodeId: `LHxPGFgTN`,
                                          scopeId: `f03aAHi90`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                UC6CMYqpe: { oSlFkYxO1: t[1] },
                                                W9G7QfdEH: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 250,
                                                    pixelWidth: 250,
                                                    src: `../../assets/images/BwOcXouiQQMkoOgx4x8rLlWo53M.webp`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `LHxPGFgTN`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Star Screwdriver`,
                                                layoutId: `LHxPGFgTN`,
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
                                                      triggerId: `w8uj7e`,
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
                                                              className: g(F, `framer-1rix0lo`),
                                                              "data-framer-portal-id": `w8uj7e`,
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
                                                            `Cq2pzSCOM`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-bslpcj`),
                                                            "data-framer-portal-id": `w8uj7e`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-1lnjxll`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-14awdpo`,
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
                                                                      className: `framer-14fsvab`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-57msjs`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-844mfy`,
                                                                        layoutId: `I3rZ8hxa6`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/6bc9645f-faa2-4818-ad38-c5837aa8ca02/submit`,
                                                                  className: `framer-11ub1fs`,
                                                                  nodeId: `iVC_GnNMw`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1cwadap`,
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
                                                                              className: `framer-5gbl76`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1fb830j`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-19a57sy`,
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
                                                                              className: `framer-15mjpom`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-kaqyig`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-vfgdoh`,
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
                                                                              className: `framer-1nuer7f`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1bdw8pc`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-7d9ef4`,
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
                                                                              className: `framer-l1mft0`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-qacymw`,
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
                                                                            W9G7QfdEH: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-e2kjo7-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `K5mJOaigg`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `f03aAHi90`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `K5mJOaigg`,
                                                                                layoutId: `K5mJOaigg`,
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
                                      href: { webPageId: `X9ehW9nmi` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `X9ehW9nmi` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `X9ehW9nmi` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        UC6CMYqpe: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 416,
                                        },
                                        W9G7QfdEH: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 832,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 0,
                                        children: l(S, {
                                          className: `framer-hxd3a4-container`,
                                          id: `hxd3a4`,
                                          nodeId: `XDLP6Sfii`,
                                          scopeId: `f03aAHi90`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                UC6CMYqpe: { oSlFkYxO1: t[1] },
                                                W9G7QfdEH: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 469,
                                                    src: `../../assets/images/L5rbT57vB3EbQZGR0EJthUUU.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `XDLP6Sfii`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Insulated Screwdriver`,
                                                layoutId: `XDLP6Sfii`,
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
                                                      triggerId: `hxd3a4`,
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
                                                              className: g(F, `framer-1stcgpy`),
                                                              "data-framer-portal-id": `hxd3a4`,
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
                                                            `JIFoGygDn`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-1hpswve`),
                                                            "data-framer-portal-id": `hxd3a4`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-3p7s34`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1x1nlfy`,
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
                                                                      className: `framer-s4gkmz`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-z2t9js`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-12ayv9a`,
                                                                        layoutId: `B4opC4BwJ`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/3543a41c-7c02-4bd3-b6cf-287f60d11722/submit`,
                                                                  className: `framer-1jtbffj`,
                                                                  nodeId: `ikEeJVDm_`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-e98h5g`,
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
                                                                              className: `framer-1xh0212`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1gewegc`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-ebwx15`,
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
                                                                              className: `framer-16ugf8n`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-17epk4o`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-13jkirw`,
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
                                                                              className: `framer-dpw4k4`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1hitoo2`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-9l1k0i`,
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
                                                                              className: `framer-kpe3z1`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1ua5spf`,
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
                                                                            W9G7QfdEH: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-18vl63-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `hjyHhg7pn`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `f03aAHi90`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `hjyHhg7pn`,
                                                                                layoutId: `hjyHhg7pn`,
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
                                      href: { webPageId: `FvOP7NiYt` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `FvOP7NiYt` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `FvOP7NiYt` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        UC6CMYqpe: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 416,
                                        },
                                        W9G7QfdEH: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1248,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 416,
                                        children: l(S, {
                                          className: `framer-r41gjx-container`,
                                          id: `r41gjx`,
                                          nodeId: `rdTYJbe9e`,
                                          scopeId: `f03aAHi90`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                UC6CMYqpe: { oSlFkYxO1: t[1] },
                                                W9G7QfdEH: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 372,
                                                    pixelWidth: 423,
                                                    src: `../../assets/images/d3jXYx0iaZDMNFk3MZwGDceTBk.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `rdTYJbe9e`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Black Tip Philips Screwdriver`,
                                                layoutId: `rdTYJbe9e`,
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
                                                      triggerId: `r41gjx`,
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
                                                              className: g(F, `framer-1i3a1vy`),
                                                              "data-framer-portal-id": `r41gjx`,
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
                                                            `PY7hyd3i3`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-s4rge4`),
                                                            "data-framer-portal-id": `r41gjx`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-1ha3aw9`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1qivgu3`,
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
                                                                      className: `framer-xd81pp`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-xcm519`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-7vpltw`,
                                                                        layoutId: `E_swGyIRi`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/14a7f70b-eba6-471d-b1f3-ae93823a6c4f/submit`,
                                                                  className: `framer-1p8zw61`,
                                                                  nodeId: `N0nq0KhLx`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1h4zgff`,
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
                                                                              className: `framer-1twdk3y`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-h0vgzf`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1hwfwyp`,
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
                                                                              className: `framer-1i7cx4p`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-hbaqev`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1d8it2a`,
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
                                                                              className: `framer-1ekflz8`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-wezmn6`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1yuyy79`,
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
                                                                              className: `framer-1os1nsq`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-i9rzwx`,
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
                                                                            W9G7QfdEH: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-78u6v9-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `WmBBknzZi`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `f03aAHi90`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `WmBBknzZi`,
                                                                                layoutId: `WmBBknzZi`,
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
                                      href: { webPageId: `PFHt85mym` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `PFHt85mym` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `PFHt85mym` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        UC6CMYqpe: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 832,
                                        },
                                        W9G7QfdEH: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1664,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 416,
                                        children: l(S, {
                                          className: `framer-10qeir1-container`,
                                          id: `10qeir1`,
                                          nodeId: `o5sH7sDAW`,
                                          scopeId: `f03aAHi90`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                UC6CMYqpe: { oSlFkYxO1: t[1] },
                                                W9G7QfdEH: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 710,
                                                    src: `../../assets/images/7JFRiuwfgME0hsEBoGekuG7vk8I.png?width=710&height=469`,
                                                    srcSet: `../../assets/images/7JFRiuwfgME0hsEBoGekuG7vk8I.png 512w,../../assets/images/7JFRiuwfgME0hsEBoGekuG7vk8I.png?width=710&height=469 710w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `o5sH7sDAW`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Poker Screwdriver`,
                                                layoutId: `o5sH7sDAW`,
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
                                                      triggerId: `10qeir1`,
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
                                                              className: g(F, `framer-mfnwlf`),
                                                              "data-framer-portal-id": `10qeir1`,
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
                                                            `SDcPmo1sv`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-3eho2u`),
                                                            "data-framer-portal-id": `10qeir1`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-15v1uph`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-ubxeek`,
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
                                                                      className: `framer-16c6clj`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-tf2x9c`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-7ux4b0`,
                                                                        layoutId: `n93S_IFJM`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/a65047bd-0d5f-4893-bc47-1866c9bf12d6/submit`,
                                                                  className: `framer-78avtu`,
                                                                  nodeId: `PS1BoRciN`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1jfsdd8`,
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
                                                                              className: `framer-1vcl0it`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-kzun31`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-10z5hk1`,
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
                                                                              className: `framer-vojbfn`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-12jls6a`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1yh4nsn`,
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
                                                                              className: `framer-1g1613y`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-11cg3rx`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-4urj82`,
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
                                                                              className: `framer-12plhxf`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-6x36j9`,
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
                                                                            W9G7QfdEH: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-njx7gt-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `uP6sxijSg`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `f03aAHi90`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `uP6sxijSg`,
                                                                                layoutId: `uP6sxijSg`,
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
                                      href: { webPageId: `To73YDgo1` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `To73YDgo1` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `To73YDgo1` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        UC6CMYqpe: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 832,
                                        },
                                        W9G7QfdEH: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2080,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 416,
                                        children: l(S, {
                                          className: `framer-p7d0na-container`,
                                          id: `p7d0na`,
                                          nodeId: `oI2MVwhir`,
                                          scopeId: `f03aAHi90`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                UC6CMYqpe: { oSlFkYxO1: t[1] },
                                                W9G7QfdEH: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 600,
                                                    pixelWidth: 700,
                                                    src: `../../assets/images/W0rw0H7LB4A1dE0raPCdPX9M.jpeg?width=700&height=600`,
                                                    srcSet: `../../assets/images/W0rw0H7LB4A1dE0raPCdPX9M.jpeg 512w,../../assets/images/W0rw0H7LB4A1dE0raPCdPX9M.jpeg?width=700&height=600 700w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `oI2MVwhir`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Screwdriver Sets`,
                                                layoutId: `oI2MVwhir`,
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
                                                      triggerId: `p7d0na`,
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
                                                              className: g(F, `framer-4pljpe`),
                                                              "data-framer-portal-id": `p7d0na`,
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
                                                            `jsnCHETR1`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-1x871ax`),
                                                            "data-framer-portal-id": `p7d0na`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-kvrt6k`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-l63y4s`,
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
                                                                      className: `framer-1mt7sw0`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1ujw0nx`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1n03lbp`,
                                                                        layoutId: `ReFHRRw6W`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/13090096-52ed-431d-ba23-02aa24fa25b0/submit`,
                                                                  className: `framer-5k36q0`,
                                                                  nodeId: `YfbRiZhoE`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-43gfig`,
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
                                                                              className: `framer-1k2wm76`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-17bos95`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1nr02ba`,
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
                                                                              className: `framer-3mqnga`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-ispq2v`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1rw8fhm`,
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
                                                                              className: `framer-1ymsqxz`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-164pzu8`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1taidio`,
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
                                                                              className: `framer-1gz7tdk`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-qdiw08`,
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
                                                                            W9G7QfdEH: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1h1gbox-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `FVSLeUgLn`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `f03aAHi90`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `FVSLeUgLn`,
                                                                                layoutId: `FVSLeUgLn`,
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
                                      href: { webPageId: `VuWc5fPpw` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `VuWc5fPpw` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `VuWc5fPpw` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        UC6CMYqpe: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1248,
                                        },
                                        W9G7QfdEH: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2496,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 832,
                                        children: l(S, {
                                          className: `framer-13eerks-container`,
                                          id: `13eerks`,
                                          nodeId: `QH8YkJ2xy`,
                                          scopeId: `f03aAHi90`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                UC6CMYqpe: { oSlFkYxO1: t[1] },
                                                W9G7QfdEH: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 469,
                                                    src: `../../assets/images/tSm7q0FiAgdGoVAjIEt3Cf8kCoA.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `QH8YkJ2xy`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Stubby Screwdriver`,
                                                layoutId: `QH8YkJ2xy`,
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
                                                      triggerId: `13eerks`,
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
                                                              className: g(F, `framer-q4mu2e`),
                                                              "data-framer-portal-id": `13eerks`,
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
                                                            `uLgg4TzEA`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-9eeyn1`),
                                                            "data-framer-portal-id": `13eerks`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-6flyct`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-uleyr3`,
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
                                                                      className: `framer-a1mbjm`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-jn5svy`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1wyi5oa`,
                                                                        layoutId: `xlO1CTiOF`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/13a029c6-6bf8-4eb1-9d99-604bc98b6f80/submit`,
                                                                  className: `framer-vwnmex`,
                                                                  nodeId: `W2hoGh8cZ`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-t5th9f`,
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
                                                                              className: `framer-10esizu`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-moascx`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1ao1m7g`,
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
                                                                              className: `framer-1rf26ks`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1ahdyl0`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-jff33w`,
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
                                                                              className: `framer-vio7pd`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-inn8ie`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-8geik7`,
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
                                                                              className: `framer-1mpbyf`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-lipepx`,
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
                                                                            W9G7QfdEH: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1gcah9z-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `ovcZTtplQ`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `f03aAHi90`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `ovcZTtplQ`,
                                                                                layoutId: `ovcZTtplQ`,
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
                                      href: { webPageId: `jJlbLMk5O` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `jJlbLMk5O` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `jJlbLMk5O` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        UC6CMYqpe: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1248,
                                        },
                                        W9G7QfdEH: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2912,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 832,
                                        children: l(S, {
                                          className: `framer-fn9nuv-container`,
                                          id: `fn9nuv`,
                                          nodeId: `PqPBN0IAB`,
                                          scopeId: `f03aAHi90`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                UC6CMYqpe: { oSlFkYxO1: t[1] },
                                                W9G7QfdEH: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 350,
                                                    pixelWidth: 600,
                                                    src: `../../assets/images/62lqZuHRd2JfZov7DLphnHg9vw.png?width=600&height=350`,
                                                    srcSet: `../../assets/images/62lqZuHRd2JfZov7DLphnHg9vw.png 512w,../../assets/images/62lqZuHRd2JfZov7DLphnHg9vw.png?width=600&height=350 600w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `PqPBN0IAB`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Striking Screwdriver`,
                                                layoutId: `PqPBN0IAB`,
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
                                                      triggerId: `fn9nuv`,
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
                                                              className: g(F, `framer-15w5f12`),
                                                              "data-framer-portal-id": `fn9nuv`,
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
                                                            `rN1Lr54Be`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-4orld2`),
                                                            "data-framer-portal-id": `fn9nuv`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-1s6tvt7`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1gzls5q`,
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
                                                                      className: `framer-fs1v08`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-zy1tzf`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-nela2f`,
                                                                        layoutId: `FQ9Yl7O_H`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/c5d28268-775d-4fd6-b3ba-93736d1b4512/submit`,
                                                                  className: `framer-1sjmz9a`,
                                                                  nodeId: `vXNrOeXX5`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1kh95x6`,
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
                                                                              className: `framer-ohajpb`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1clx76q`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-emw85d`,
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
                                                                              className: `framer-1j7nh5i`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-dntn8v`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1xey2d5`,
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
                                                                              className: `framer-7i6n0d`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-cld4m6`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-j9jq1b`,
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
                                                                              className: `framer-10ogx76`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-15wqt07`,
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
                                                                            W9G7QfdEH: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1cv2kdz-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `ZKj4UoBEm`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `f03aAHi90`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `ZKj4UoBEm`,
                                                                                layoutId: `ZKj4UoBEm`,
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
                                      href: { webPageId: `WvUS4psHz` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `WvUS4psHz` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `WvUS4psHz` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        UC6CMYqpe: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1664,
                                        },
                                        W9G7QfdEH: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 3328,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 832,
                                        children: l(S, {
                                          className: `framer-p29baj-container`,
                                          id: `p29baj`,
                                          nodeId: `gtrsQ_SDp`,
                                          scopeId: `f03aAHi90`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                UC6CMYqpe: { oSlFkYxO1: t[1] },
                                                W9G7QfdEH: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 593,
                                                    pixelWidth: 593,
                                                    src: `../../assets/images/zLXl98jVucnubR6z9IOkuai1kM.png?width=593&height=593`,
                                                    srcSet: `../../assets/images/zLXl98jVucnubR6z9IOkuai1kM.png 512w,../../assets/images/zLXl98jVucnubR6z9IOkuai1kM.png?width=593&height=593 593w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `gtrsQ_SDp`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Line Tester`,
                                                layoutId: `gtrsQ_SDp`,
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
                                                      triggerId: `p29baj`,
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
                                                              className: g(F, `framer-1e0nmxo`),
                                                              "data-framer-portal-id": `p29baj`,
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
                                                            `QQz_CGuYX`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-11s9jma`),
                                                            "data-framer-portal-id": `p29baj`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-ydj3wt`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1rnetfe`,
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
                                                                      className: `framer-tj0nm5`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-j1bjy2`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1po9osn`,
                                                                        layoutId: `DLi9STOEL`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/968b7282-51bb-4dd3-87fa-758ab11b0ce3/submit`,
                                                                  className: `framer-1ky4vx8`,
                                                                  nodeId: `xQiu7WHbF`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1su0vrw`,
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
                                                                              className: `framer-o84una`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-x39vj5`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1x4yv97`,
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
                                                                              className: `framer-gdo7ag`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-12gevrp`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1siif5i`,
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
                                                                              className: `framer-htyyy9`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-o23mgk`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1nkznkv`,
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
                                                                              className: `framer-192kyf9`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1suw8k`,
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
                                                                            W9G7QfdEH: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1193lg6-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `AmjPPQJxw`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `f03aAHi90`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `AmjPPQJxw`,
                                                                                layoutId: `AmjPPQJxw`,
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
                                      href: { webPageId: `Ts8npxzjJ` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Ts8npxzjJ` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Ts8npxzjJ` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        UC6CMYqpe: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1664,
                                        },
                                        W9G7QfdEH: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 3744,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 1248,
                                        children: l(S, {
                                          className: `framer-1wg377f-container`,
                                          id: `1wg377f`,
                                          nodeId: `oWv0RNqzv`,
                                          scopeId: `f03aAHi90`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                UC6CMYqpe: { oSlFkYxO1: t[1] },
                                                W9G7QfdEH: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 469,
                                                    src: `../../assets/images/KVm8Vn3h3JF8XemIrHl4NDRyp90.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `oWv0RNqzv`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Digital Tester`,
                                                layoutId: `oWv0RNqzv`,
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
                                                      triggerId: `1wg377f`,
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
                                                              className: g(F, `framer-1yj5t1x`),
                                                              "data-framer-portal-id": `1wg377f`,
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
                                                            `E8H0kUCJl`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-18ydgup`),
                                                            "data-framer-portal-id": `1wg377f`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-17r492d`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1s944e7`,
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
                                                                      className: `framer-tqmssk`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1y75pqe`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1vwl6iw`,
                                                                        layoutId: `FsHOwPexK`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/d50adcce-655c-4fb5-9d2a-12300db65517/submit`,
                                                                  className: `framer-11vc23v`,
                                                                  nodeId: `xuQugPOUa`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-14vrg8h`,
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
                                                                              className: `framer-lsa9i0`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-pgvrhv`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1eabrzb`,
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
                                                                              className: `framer-1h2g34e`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-14kb4rs`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-od39d9`,
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
                                                                              className: `framer-k5s1ne`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-178fkiz`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1cacquq`,
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
                                                                              className: `framer-1wbnjlt`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1fv3e8l`,
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
                                                                            W9G7QfdEH: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1bc6i9v-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `h2XDQHA4i`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `f03aAHi90`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `h2XDQHA4i`,
                                                                                layoutId: `h2XDQHA4i`,
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
                                      href: { webPageId: `W_r2VV95C` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `W_r2VV95C` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `W_r2VV95C` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        UC6CMYqpe: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2080,
                                        },
                                        W9G7QfdEH: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 4160,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 1248,
                                        children: l(S, {
                                          className: `framer-lv8cyx-container`,
                                          id: `lv8cyx`,
                                          nodeId: `cyESMUvsS`,
                                          scopeId: `f03aAHi90`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                UC6CMYqpe: { oSlFkYxO1: t[1] },
                                                W9G7QfdEH: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 249,
                                                    pixelWidth: 360,
                                                    src: `../../assets/images/iiE3CGBmoch2D980GyR87hWr3j0.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `cyESMUvsS`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Precision Screwdriver Set`,
                                                layoutId: `cyESMUvsS`,
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
                                                      triggerId: `lv8cyx`,
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
                                                              className: g(F, `framer-1pywz81`),
                                                              "data-framer-portal-id": `lv8cyx`,
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
                                                            `zBz88d1vG`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-djqxmv`),
                                                            "data-framer-portal-id": `lv8cyx`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-yurlpj`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-oecjoa`,
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
                                                                      className: `framer-1x7yjsr`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-11drte1`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1odwvqm`,
                                                                        layoutId: `KxKkOd2VY`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/bd0475f7-2a93-4c1a-acde-c15e24d714bc/submit`,
                                                                  className: `framer-1hkxxgh`,
                                                                  nodeId: `cj37pvhhO`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1f9jwzl`,
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
                                                                              className: `framer-eqbmfe`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-18k4rr5`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-18erj1y`,
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
                                                                              className: `framer-nodph5`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1bk0w39`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1b1igi1`,
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
                                                                              className: `framer-1wgs83j`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-g8giue`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1uxmf91`,
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
                                                                              className: `framer-124bh0h`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-15sjhiy`,
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
                                                                            W9G7QfdEH: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-8vo2ki-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `RdGXQOGAc`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `f03aAHi90`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `RdGXQOGAc`,
                                                                                layoutId: `RdGXQOGAc`,
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
                                      href: { webPageId: `oAMT9_Okf` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `oAMT9_Okf` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `oAMT9_Okf` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        UC6CMYqpe: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2080,
                                        },
                                        W9G7QfdEH: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 4576,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 1248,
                                        children: l(S, {
                                          className: `framer-7eao3m-container`,
                                          id: `7eao3m`,
                                          nodeId: `YJT3tsRJO`,
                                          scopeId: `f03aAHi90`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                UC6CMYqpe: { oSlFkYxO1: t[1] },
                                                W9G7QfdEH: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 372,
                                                    pixelWidth: 423,
                                                    src: `../../assets/images/d4bFehHMV9UKLaV9JaO8D9ORxyo.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `YJT3tsRJO`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Torx Screwdriver`,
                                                layoutId: `YJT3tsRJO`,
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
                                                      triggerId: `7eao3m`,
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
                                                              className: g(F, `framer-pyrqdd`),
                                                              "data-framer-portal-id": `7eao3m`,
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
                                                            `GY__JrkG3`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-llbafy`),
                                                            "data-framer-portal-id": `7eao3m`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-nk0nhc`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-lry03p`,
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
                                                                      className: `framer-1yxtl42`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-r9rw77`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-fkkpye`,
                                                                        layoutId: `a1nEbUrks`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/cadb5f49-3254-4591-9ec8-8a11fd6d31eb/submit`,
                                                                  className: `framer-1e7tmzo`,
                                                                  nodeId: `ERQf8cSL9`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1dqgaju`,
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
                                                                              className: `framer-4p7d2k`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-14jiu2d`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-81w78o`,
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
                                                                              className: `framer-tgl23a`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-jhirco`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-7rtt2b`,
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
                                                                              className: `framer-1g7yo0o`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1mws6t3`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-3p65i8`,
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
                                                                              className: `framer-1604jpx`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-9nr23e`,
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
                                                                            W9G7QfdEH: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-6w9f81-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `sPHUI9EfO`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `f03aAHi90`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `sPHUI9EfO`,
                                                                                layoutId: `sPHUI9EfO`,
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
                                      href: { webPageId: `mALNsDe69` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `mALNsDe69` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `mALNsDe69` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        UC6CMYqpe: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2496,
                                        },
                                        W9G7QfdEH: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 4992,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 1664,
                                        children: l(S, {
                                          className: `framer-1f439q8-container`,
                                          id: `1f439q8`,
                                          nodeId: `PvFYrV1yQ`,
                                          scopeId: `f03aAHi90`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                UC6CMYqpe: { oSlFkYxO1: t[1] },
                                                W9G7QfdEH: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 469,
                                                    src: `../../assets/images/uMjMFMOHMR28NBPJYBQTjmk1o.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `PvFYrV1yQ`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Screwdriver Bits `,
                                                layoutId: `PvFYrV1yQ`,
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
                                                      triggerId: `1f439q8`,
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
                                                              className: g(F, `framer-cidvas`),
                                                              "data-framer-portal-id": `1f439q8`,
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
                                                            `sUQrG6Bf8`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-fdwk7q`),
                                                            "data-framer-portal-id": `1f439q8`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-1owc1ac`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-8i0ti3`,
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
                                                                      className: `framer-2ov2gf`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1meffeb`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1qr8u1j`,
                                                                        layoutId: `TZ4GPR2Kg`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/77d4e09b-befe-42ba-9fdf-8663dac49e80/submit`,
                                                                  className: `framer-plfsm5`,
                                                                  nodeId: `hTBD1_97X`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-7vl686`,
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
                                                                              className: `framer-p9ols4`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-x48m1j`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-2zpozn`,
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
                                                                              className: `framer-1j23mae`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-11812h`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1faz906`,
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
                                                                              className: `framer-9a9k9n`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-y7d1f7`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-hyk3al`,
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
                                                                              className: `framer-1owg4ec`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-17p4bam`,
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
                                                                            W9G7QfdEH: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-ofl8x0-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `uKE1wT91b`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `f03aAHi90`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `uKE1wT91b`,
                                                                                layoutId: `uKE1wT91b`,
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
                                      href: { webPageId: `JHUE8GPa7` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `JHUE8GPa7` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `JHUE8GPa7` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        UC6CMYqpe: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2496,
                                        },
                                        W9G7QfdEH: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 5408,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 1664,
                                        children: l(S, {
                                          className: `framer-1wryd7z-container`,
                                          id: `1wryd7z`,
                                          nodeId: `BwhYxdEPB`,
                                          scopeId: `f03aAHi90`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                UC6CMYqpe: { oSlFkYxO1: t[1] },
                                                W9G7QfdEH: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 392,
                                                    pixelWidth: 407,
                                                    src: `../../assets/images/jVdN8owPBMG0ZPkFzJmPmxKE4w.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `BwhYxdEPB`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Bit Driver Set`,
                                                layoutId: `BwhYxdEPB`,
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
                                                      triggerId: `1wryd7z`,
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
                                                              className: g(F, `framer-qdtqcn`),
                                                              "data-framer-portal-id": `1wryd7z`,
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
                                                            `kqKbap7G0`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-ds6rkv`),
                                                            "data-framer-portal-id": `1wryd7z`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-c6m8br`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1ifxasl`,
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
                                                                      className: `framer-1uuvbp`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-185va9`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1j19myx`,
                                                                        layoutId: `Iu7DJQR4f`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/157c4125-8873-46e7-9663-7d7ce26095a7/submit`,
                                                                  className: `framer-189sxui`,
                                                                  nodeId: `n28jzjPTa`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-rhf7j2`,
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
                                                                              className: `framer-8zlixn`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-q116wf`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-uvitdh`,
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
                                                                              className: `framer-12ekpqm`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-11ks7sn`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1ubm885`,
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
                                                                              className: `framer-19qkj82`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-age9hh`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1xuhjmt`,
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
                                                                              className: `framer-a4f2ps`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1lmu3mt`,
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
                                                                            W9G7QfdEH: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-13t3uf2-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `UcDtg1Uyz`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `f03aAHi90`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `UcDtg1Uyz`,
                                                                                layoutId: `UcDtg1Uyz`,
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
                                      href: { webPageId: `pNF9wciH1` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `pNF9wciH1` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `pNF9wciH1` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        UC6CMYqpe: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2912,
                                        },
                                        W9G7QfdEH: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 5824,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 1664,
                                        children: l(S, {
                                          className: `framer-5x5qug-container`,
                                          id: `5x5qug`,
                                          nodeId: `WT9G_8bVV`,
                                          scopeId: `f03aAHi90`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                UC6CMYqpe: { oSlFkYxO1: t[1] },
                                                W9G7QfdEH: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 379,
                                                    pixelWidth: 650,
                                                    src: `../../assets/images/OUkdV2Y1vcnptDnHuR1VgWFo8.png?width=650&height=379`,
                                                    srcSet: `../../assets/images/OUkdV2Y1vcnptDnHuR1VgWFo8.png 512w,../../assets/images/OUkdV2Y1vcnptDnHuR1VgWFo8.png?width=650&height=379 650w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `WT9G_8bVV`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Black Tip Two in one Screwdriver`,
                                                layoutId: `WT9G_8bVV`,
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
                                                      triggerId: `5x5qug`,
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
                                                              className: g(F, `framer-x406w0`),
                                                              "data-framer-portal-id": `5x5qug`,
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
                                                            `OLiwg6yHO`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-1smu9uk`),
                                                            "data-framer-portal-id": `5x5qug`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-xh3iej`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1jvbss1`,
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
                                                                      className: `framer-jsdxq0`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-4eoco2`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1oubsl1`,
                                                                        layoutId: `n46k0POGK`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/37a63c50-4afd-4dae-8bb1-8c52e178cee6/submit`,
                                                                  className: `framer-3um7zk`,
                                                                  nodeId: `Vmmx9QLwD`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-q9r4o9`,
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
                                                                              className: `framer-16ee7qf`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1uein87`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-kgckmf`,
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
                                                                              className: `framer-9ki8ck`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1edye47`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-e0t3lo`,
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
                                                                              className: `framer-1xb7tl1`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-13qob72`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-qruulv`,
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
                                                                              className: `framer-1ln5i07`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-24v6yz`,
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
                                                                            W9G7QfdEH: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-rm64g0-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `sH1BdVx1A`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `f03aAHi90`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `sH1BdVx1A`,
                                                                                layoutId: `sH1BdVx1A`,
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
        `.framer-tq1zC.framer-xjh9s7, .framer-tq1zC .framer-xjh9s7 { display: block; }`,
        `.framer-tq1zC.framer-1kguw6 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-tq1zC .framer-1jbt433 { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 96px 24px 96px 24px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-tq1zC .framer-3u0r3n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tq1zC .framer-1b7j369 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-tq1zC .framer-188637a { --1335ju: 2; --18mrqx2: #000000; --3it368: 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-tq1zC .framer-120clgb-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-tq1zC .framer-n5xusk { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-tq1zC .framer-u7q0sf-container { flex: none; height: 100px; position: relative; width: 339px; }`,
        `.framer-tq1zC .framer-xqb0 { height: 50px; overflow: visible; position: relative; width: 50px; }`,
        `.framer-tq1zC .framer-notbdg { aspect-ratio: 1.6008403361344539 / 1; height: var(--framer-aspect-ratio-supported, 50px); overflow: visible; position: relative; width: 80px; }`,
        `.framer-tq1zC .framer-1i6btla { aspect-ratio: 1.842433697347894 / 1; height: var(--framer-aspect-ratio-supported, 43px); overflow: visible; position: relative; width: 79px; }`,
        `.framer-tq1zC .framer-1wcgvn3 { aspect-ratio: 3.0225409836065578 / 1; height: var(--framer-aspect-ratio-supported, 23px); overflow: visible; position: relative; width: 70px; }`,
        `.framer-tq1zC .framer-12jrmhe { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tq1zC .framer-sazpvw-container, .framer-tq1zC .framer-w8uj7e-container, .framer-tq1zC .framer-hxd3a4-container, .framer-tq1zC .framer-r41gjx-container, .framer-tq1zC .framer-10qeir1-container, .framer-tq1zC .framer-p7d0na-container, .framer-tq1zC .framer-13eerks-container, .framer-tq1zC .framer-fn9nuv-container, .framer-tq1zC .framer-p29baj-container, .framer-tq1zC .framer-1wg377f-container, .framer-tq1zC .framer-lv8cyx-container, .framer-tq1zC .framer-7eao3m-container, .framer-tq1zC .framer-1f439q8-container, .framer-tq1zC .framer-1wryd7z-container, .framer-tq1zC .framer-5x5qug-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-tq1zC.framer-1wy07xv, .framer-tq1zC.framer-1rix0lo, .framer-tq1zC.framer-1stcgpy, .framer-tq1zC.framer-1i3a1vy, .framer-tq1zC.framer-mfnwlf, .framer-tq1zC.framer-4pljpe, .framer-tq1zC.framer-q4mu2e, .framer-tq1zC.framer-15w5f12, .framer-tq1zC.framer-1e0nmxo, .framer-tq1zC.framer-1yj5t1x, .framer-tq1zC.framer-1pywz81, .framer-tq1zC.framer-pyrqdd, .framer-tq1zC.framer-cidvas, .framer-tq1zC.framer-qdtqcn, .framer-tq1zC.framer-x406w0 { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-tq1zC.framer-157rfqb, .framer-tq1zC.framer-bslpcj, .framer-tq1zC.framer-1hpswve, .framer-tq1zC.framer-s4rge4, .framer-tq1zC.framer-3eho2u, .framer-tq1zC.framer-1x871ax, .framer-tq1zC.framer-9eeyn1, .framer-tq1zC.framer-4orld2, .framer-tq1zC.framer-11s9jma, .framer-tq1zC.framer-18ydgup, .framer-tq1zC.framer-djqxmv, .framer-tq1zC.framer-llbafy, .framer-tq1zC.framer-fdwk7q, .framer-tq1zC.framer-ds6rkv, .framer-tq1zC.framer-1smu9uk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-tq1zC .framer-uzb1oh, .framer-tq1zC .framer-1lnjxll, .framer-tq1zC .framer-3p7s34, .framer-tq1zC .framer-1ha3aw9, .framer-tq1zC .framer-15v1uph, .framer-tq1zC .framer-kvrt6k, .framer-tq1zC .framer-6flyct, .framer-tq1zC .framer-1s6tvt7, .framer-tq1zC .framer-ydj3wt, .framer-tq1zC .framer-17r492d, .framer-tq1zC .framer-yurlpj, .framer-tq1zC .framer-nk0nhc, .framer-tq1zC .framer-1owc1ac, .framer-tq1zC .framer-c6m8br, .framer-tq1zC .framer-xh3iej { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-tq1zC .framer-1ozcieb, .framer-tq1zC .framer-14awdpo, .framer-tq1zC .framer-1x1nlfy, .framer-tq1zC .framer-1qivgu3, .framer-tq1zC .framer-ubxeek, .framer-tq1zC .framer-l63y4s, .framer-tq1zC .framer-uleyr3, .framer-tq1zC .framer-1gzls5q, .framer-tq1zC .framer-1rnetfe, .framer-tq1zC .framer-1s944e7, .framer-tq1zC .framer-oecjoa, .framer-tq1zC .framer-lry03p, .framer-tq1zC .framer-8i0ti3, .framer-tq1zC .framer-1ifxasl, .framer-tq1zC .framer-1jvbss1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-tq1zC .framer-dti1ch, .framer-tq1zC .framer-14fsvab, .framer-tq1zC .framer-s4gkmz, .framer-tq1zC .framer-xd81pp, .framer-tq1zC .framer-16c6clj, .framer-tq1zC .framer-1mt7sw0, .framer-tq1zC .framer-a1mbjm, .framer-tq1zC .framer-fs1v08, .framer-tq1zC .framer-tj0nm5, .framer-tq1zC .framer-tqmssk, .framer-tq1zC .framer-1x7yjsr, .framer-tq1zC .framer-1yxtl42, .framer-tq1zC .framer-2ov2gf, .framer-tq1zC .framer-1uuvbp, .framer-tq1zC .framer-jsdxq0 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-tq1zC .framer-ulpetx, .framer-tq1zC .framer-57msjs, .framer-tq1zC .framer-z2t9js, .framer-tq1zC .framer-xcm519, .framer-tq1zC .framer-tf2x9c, .framer-tq1zC .framer-1ujw0nx, .framer-tq1zC .framer-jn5svy, .framer-tq1zC .framer-zy1tzf, .framer-tq1zC .framer-j1bjy2, .framer-tq1zC .framer-1y75pqe, .framer-tq1zC .framer-11drte1, .framer-tq1zC .framer-r9rw77, .framer-tq1zC .framer-1meffeb, .framer-tq1zC .framer-185va9, .framer-tq1zC .framer-4eoco2 { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-tq1zC .framer-od2t9a, .framer-tq1zC .framer-844mfy, .framer-tq1zC .framer-12ayv9a, .framer-tq1zC .framer-7vpltw, .framer-tq1zC .framer-7ux4b0, .framer-tq1zC .framer-1n03lbp, .framer-tq1zC .framer-1wyi5oa, .framer-tq1zC .framer-nela2f, .framer-tq1zC .framer-1po9osn, .framer-tq1zC .framer-1vwl6iw, .framer-tq1zC .framer-1odwvqm, .framer-tq1zC .framer-fkkpye, .framer-tq1zC .framer-1qr8u1j, .framer-tq1zC .framer-1j19myx, .framer-tq1zC .framer-1oubsl1 { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-tq1zC .framer-1o7zqpy, .framer-tq1zC .framer-11ub1fs, .framer-tq1zC .framer-1jtbffj, .framer-tq1zC .framer-1p8zw61, .framer-tq1zC .framer-78avtu, .framer-tq1zC .framer-5k36q0, .framer-tq1zC .framer-vwnmex, .framer-tq1zC .framer-1sjmz9a, .framer-tq1zC .framer-1ky4vx8, .framer-tq1zC .framer-11vc23v, .framer-tq1zC .framer-1hkxxgh, .framer-tq1zC .framer-1e7tmzo, .framer-tq1zC .framer-plfsm5, .framer-tq1zC .framer-189sxui, .framer-tq1zC .framer-3um7zk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-tq1zC .framer-ecjvih, .framer-tq1zC .framer-1wdipxk, .framer-tq1zC .framer-ku0dpt, .framer-tq1zC .framer-13wlexb, .framer-tq1zC .framer-1cwadap, .framer-tq1zC .framer-19a57sy, .framer-tq1zC .framer-vfgdoh, .framer-tq1zC .framer-7d9ef4, .framer-tq1zC .framer-e98h5g, .framer-tq1zC .framer-ebwx15, .framer-tq1zC .framer-13jkirw, .framer-tq1zC .framer-9l1k0i, .framer-tq1zC .framer-1h4zgff, .framer-tq1zC .framer-1hwfwyp, .framer-tq1zC .framer-1d8it2a, .framer-tq1zC .framer-1yuyy79, .framer-tq1zC .framer-1jfsdd8, .framer-tq1zC .framer-10z5hk1, .framer-tq1zC .framer-1yh4nsn, .framer-tq1zC .framer-4urj82, .framer-tq1zC .framer-43gfig, .framer-tq1zC .framer-1nr02ba, .framer-tq1zC .framer-1rw8fhm, .framer-tq1zC .framer-1taidio, .framer-tq1zC .framer-t5th9f, .framer-tq1zC .framer-1ao1m7g, .framer-tq1zC .framer-jff33w, .framer-tq1zC .framer-8geik7, .framer-tq1zC .framer-1kh95x6, .framer-tq1zC .framer-emw85d, .framer-tq1zC .framer-1xey2d5, .framer-tq1zC .framer-j9jq1b, .framer-tq1zC .framer-1su0vrw, .framer-tq1zC .framer-1x4yv97, .framer-tq1zC .framer-1siif5i, .framer-tq1zC .framer-1nkznkv, .framer-tq1zC .framer-14vrg8h, .framer-tq1zC .framer-1eabrzb, .framer-tq1zC .framer-od39d9, .framer-tq1zC .framer-1cacquq, .framer-tq1zC .framer-1f9jwzl, .framer-tq1zC .framer-18erj1y, .framer-tq1zC .framer-1b1igi1, .framer-tq1zC .framer-1uxmf91, .framer-tq1zC .framer-1dqgaju, .framer-tq1zC .framer-81w78o, .framer-tq1zC .framer-7rtt2b, .framer-tq1zC .framer-3p65i8, .framer-tq1zC .framer-7vl686, .framer-tq1zC .framer-2zpozn, .framer-tq1zC .framer-1faz906, .framer-tq1zC .framer-hyk3al, .framer-tq1zC .framer-rhf7j2, .framer-tq1zC .framer-uvitdh, .framer-tq1zC .framer-1ubm885, .framer-tq1zC .framer-1xuhjmt, .framer-tq1zC .framer-q9r4o9, .framer-tq1zC .framer-kgckmf, .framer-tq1zC .framer-e0t3lo, .framer-tq1zC .framer-qruulv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tq1zC .framer-1ng6vh2, .framer-tq1zC .framer-1sfixw, .framer-tq1zC .framer-1129353, .framer-tq1zC .framer-15je8lr, .framer-tq1zC .framer-5gbl76, .framer-tq1zC .framer-15mjpom, .framer-tq1zC .framer-1nuer7f, .framer-tq1zC .framer-l1mft0, .framer-tq1zC .framer-1xh0212, .framer-tq1zC .framer-16ugf8n, .framer-tq1zC .framer-dpw4k4, .framer-tq1zC .framer-kpe3z1, .framer-tq1zC .framer-1twdk3y, .framer-tq1zC .framer-1i7cx4p, .framer-tq1zC .framer-1ekflz8, .framer-tq1zC .framer-1os1nsq, .framer-tq1zC .framer-1vcl0it, .framer-tq1zC .framer-vojbfn, .framer-tq1zC .framer-1g1613y, .framer-tq1zC .framer-12plhxf, .framer-tq1zC .framer-1k2wm76, .framer-tq1zC .framer-3mqnga, .framer-tq1zC .framer-1ymsqxz, .framer-tq1zC .framer-1gz7tdk, .framer-tq1zC .framer-10esizu, .framer-tq1zC .framer-1rf26ks, .framer-tq1zC .framer-vio7pd, .framer-tq1zC .framer-1mpbyf, .framer-tq1zC .framer-ohajpb, .framer-tq1zC .framer-1j7nh5i, .framer-tq1zC .framer-7i6n0d, .framer-tq1zC .framer-10ogx76, .framer-tq1zC .framer-o84una, .framer-tq1zC .framer-gdo7ag, .framer-tq1zC .framer-htyyy9, .framer-tq1zC .framer-192kyf9, .framer-tq1zC .framer-lsa9i0, .framer-tq1zC .framer-1h2g34e, .framer-tq1zC .framer-k5s1ne, .framer-tq1zC .framer-1wbnjlt, .framer-tq1zC .framer-eqbmfe, .framer-tq1zC .framer-nodph5, .framer-tq1zC .framer-1wgs83j, .framer-tq1zC .framer-124bh0h, .framer-tq1zC .framer-4p7d2k, .framer-tq1zC .framer-tgl23a, .framer-tq1zC .framer-1g7yo0o, .framer-tq1zC .framer-1604jpx, .framer-tq1zC .framer-p9ols4, .framer-tq1zC .framer-1j23mae, .framer-tq1zC .framer-9a9k9n, .framer-tq1zC .framer-1owg4ec, .framer-tq1zC .framer-8zlixn, .framer-tq1zC .framer-12ekpqm, .framer-tq1zC .framer-19qkj82, .framer-tq1zC .framer-a4f2ps, .framer-tq1zC .framer-16ee7qf, .framer-tq1zC .framer-9ki8ck, .framer-tq1zC .framer-1xb7tl1, .framer-tq1zC .framer-1ln5i07 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-tq1zC .framer-r99msf, .framer-tq1zC .framer-1yrdt2s, .framer-tq1zC .framer-1bgu4vo, .framer-tq1zC .framer-1ikz2st, .framer-tq1zC .framer-1fb830j, .framer-tq1zC .framer-kaqyig, .framer-tq1zC .framer-1bdw8pc, .framer-tq1zC .framer-qacymw, .framer-tq1zC .framer-1gewegc, .framer-tq1zC .framer-17epk4o, .framer-tq1zC .framer-1hitoo2, .framer-tq1zC .framer-1ua5spf, .framer-tq1zC .framer-h0vgzf, .framer-tq1zC .framer-hbaqev, .framer-tq1zC .framer-wezmn6, .framer-tq1zC .framer-i9rzwx, .framer-tq1zC .framer-kzun31, .framer-tq1zC .framer-12jls6a, .framer-tq1zC .framer-11cg3rx, .framer-tq1zC .framer-6x36j9, .framer-tq1zC .framer-17bos95, .framer-tq1zC .framer-ispq2v, .framer-tq1zC .framer-164pzu8, .framer-tq1zC .framer-qdiw08, .framer-tq1zC .framer-moascx, .framer-tq1zC .framer-1ahdyl0, .framer-tq1zC .framer-inn8ie, .framer-tq1zC .framer-lipepx, .framer-tq1zC .framer-1clx76q, .framer-tq1zC .framer-dntn8v, .framer-tq1zC .framer-cld4m6, .framer-tq1zC .framer-15wqt07, .framer-tq1zC .framer-x39vj5, .framer-tq1zC .framer-12gevrp, .framer-tq1zC .framer-o23mgk, .framer-tq1zC .framer-1suw8k, .framer-tq1zC .framer-pgvrhv, .framer-tq1zC .framer-14kb4rs, .framer-tq1zC .framer-178fkiz, .framer-tq1zC .framer-1fv3e8l, .framer-tq1zC .framer-18k4rr5, .framer-tq1zC .framer-1bk0w39, .framer-tq1zC .framer-g8giue, .framer-tq1zC .framer-15sjhiy, .framer-tq1zC .framer-14jiu2d, .framer-tq1zC .framer-jhirco, .framer-tq1zC .framer-1mws6t3, .framer-tq1zC .framer-9nr23e, .framer-tq1zC .framer-x48m1j, .framer-tq1zC .framer-11812h, .framer-tq1zC .framer-y7d1f7, .framer-tq1zC .framer-17p4bam, .framer-tq1zC .framer-q116wf, .framer-tq1zC .framer-11ks7sn, .framer-tq1zC .framer-age9hh, .framer-tq1zC .framer-1lmu3mt, .framer-tq1zC .framer-1uein87, .framer-tq1zC .framer-1edye47, .framer-tq1zC .framer-13qob72, .framer-tq1zC .framer-24v6yz { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-tq1zC .framer-1u1kff-container, .framer-tq1zC .framer-e2kjo7-container, .framer-tq1zC .framer-18vl63-container, .framer-tq1zC .framer-78u6v9-container, .framer-tq1zC .framer-njx7gt-container, .framer-tq1zC .framer-1h1gbox-container, .framer-tq1zC .framer-1gcah9z-container, .framer-tq1zC .framer-1cv2kdz-container, .framer-tq1zC .framer-1193lg6-container, .framer-tq1zC .framer-1bc6i9v-container, .framer-tq1zC .framer-8vo2ki-container, .framer-tq1zC .framer-6w9f81-container, .framer-tq1zC .framer-ofl8x0-container, .framer-tq1zC .framer-13t3uf2-container, .framer-tq1zC .framer-rm64g0-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        ..._e,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-tq1zC.framer-1kguw6 { width: 810px; } .framer-tq1zC .framer-1jbt433 { padding: 80px 24px 80px 24px; } .framer-tq1zC .framer-12jrmhe { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-tq1zC .framer-uzb1oh, .framer-tq1zC .framer-1lnjxll, .framer-tq1zC .framer-3p7s34, .framer-tq1zC .framer-1ha3aw9, .framer-tq1zC .framer-15v1uph, .framer-tq1zC .framer-kvrt6k, .framer-tq1zC .framer-6flyct, .framer-tq1zC .framer-1s6tvt7, .framer-tq1zC .framer-ydj3wt, .framer-tq1zC .framer-17r492d, .framer-tq1zC .framer-yurlpj, .framer-tq1zC .framer-nk0nhc, .framer-tq1zC .framer-1owc1ac, .framer-tq1zC .framer-c6m8br, .framer-tq1zC .framer-xh3iej { height: min-content; width: min-content; } .framer-tq1zC .framer-1ozcieb, .framer-tq1zC .framer-14awdpo, .framer-tq1zC .framer-1x1nlfy, .framer-tq1zC .framer-1qivgu3, .framer-tq1zC .framer-ubxeek, .framer-tq1zC .framer-l63y4s, .framer-tq1zC .framer-uleyr3, .framer-tq1zC .framer-1gzls5q, .framer-tq1zC .framer-1rnetfe, .framer-tq1zC .framer-1s944e7, .framer-tq1zC .framer-oecjoa, .framer-tq1zC .framer-lry03p, .framer-tq1zC .framer-8i0ti3, .framer-tq1zC .framer-1ifxasl, .framer-tq1zC .framer-1jvbss1 { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-tq1zC.framer-1kguw6 { width: 390px; } .framer-tq1zC .framer-1jbt433 { padding: 80px 16px 80px 16px; } .framer-tq1zC .framer-12jrmhe { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-tq1zC .framer-sazpvw-container { order: 0; } .framer-tq1zC.framer-157rfqb, .framer-tq1zC.framer-bslpcj, .framer-tq1zC.framer-1hpswve, .framer-tq1zC.framer-s4rge4, .framer-tq1zC.framer-3eho2u, .framer-tq1zC.framer-1x871ax, .framer-tq1zC.framer-9eeyn1, .framer-tq1zC.framer-4orld2, .framer-tq1zC.framer-11s9jma, .framer-tq1zC.framer-18ydgup, .framer-tq1zC.framer-djqxmv, .framer-tq1zC.framer-llbafy, .framer-tq1zC.framer-fdwk7q, .framer-tq1zC.framer-ds6rkv, .framer-tq1zC.framer-1smu9uk { padding: 60px 0px 0px 0px; } .framer-tq1zC .framer-uzb1oh, .framer-tq1zC .framer-1lnjxll, .framer-tq1zC .framer-3p7s34, .framer-tq1zC .framer-1ha3aw9, .framer-tq1zC .framer-15v1uph, .framer-tq1zC .framer-kvrt6k, .framer-tq1zC .framer-6flyct, .framer-tq1zC .framer-1s6tvt7, .framer-tq1zC .framer-ydj3wt, .framer-tq1zC .framer-17r492d, .framer-tq1zC .framer-yurlpj, .framer-tq1zC .framer-nk0nhc, .framer-tq1zC .framer-1owc1ac, .framer-tq1zC .framer-c6m8br, .framer-tq1zC .framer-xh3iej { height: min-content; width: 300px; } .framer-tq1zC .framer-1o7zqpy, .framer-tq1zC .framer-11ub1fs, .framer-tq1zC .framer-1jtbffj, .framer-tq1zC .framer-1p8zw61, .framer-tq1zC .framer-78avtu, .framer-tq1zC .framer-5k36q0, .framer-tq1zC .framer-vwnmex, .framer-tq1zC .framer-1sjmz9a, .framer-tq1zC .framer-1ky4vx8, .framer-tq1zC .framer-11vc23v, .framer-tq1zC .framer-1hkxxgh, .framer-tq1zC .framer-1e7tmzo, .framer-tq1zC .framer-plfsm5, .framer-tq1zC .framer-189sxui, .framer-tq1zC .framer-3um7zk { width: 261px; } .framer-tq1zC .framer-w8uj7e-container { order: 1; } .framer-tq1zC .framer-hxd3a4-container { order: 2; } .framer-tq1zC .framer-r41gjx-container { order: 3; } .framer-tq1zC .framer-10qeir1-container { order: 4; } .framer-tq1zC .framer-p7d0na-container { order: 5; } .framer-tq1zC .framer-13eerks-container { order: 6; } .framer-tq1zC .framer-fn9nuv-container { order: 7; } .framer-tq1zC .framer-p29baj-container { order: 8; } .framer-tq1zC .framer-1wg377f-container { order: 9; } .framer-tq1zC .framer-lv8cyx-container { order: 10; } .framer-tq1zC .framer-7eao3m-container { order: 11; } .framer-tq1zC .framer-1f439q8-container { order: 12; } .framer-tq1zC .framer-1wryd7z-container { order: 13; } .framer-tq1zC .framer-5x5qug-container { order: 14; }}`,
      ],
      `framer-tq1zC`
    )),
    (Q.displayName = `Pliers Section Hand Tools`),
    (Q.defaultProps = { height: 2839, width: 1200 }),
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
          name: `Framerf03aAHi90`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerIntrinsicHeight: `2839`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"UC6CMYqpe":{"layout":["fixed","fixed"]},"W9G7QfdEH":{"layout":["fixed","fixed"]}}}`,
            framerResponsiveScreen: ``,
            framerScrollSections: `{"n7vjn3bqX":{"pattern":":n7vjn3bqX","name":"classes"}}`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerContractVersion: `1`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=8penYP_I8JGFTXti9QD86j4qxhdXWOYK3Zh-lLZz0Jw.Ch3Fhxvx.mjs.map
