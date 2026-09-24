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
import be, { t as xe } from "./7tUsiDpJjnSY903gLuh7hb-5U-RbV7w1U8TF1xi9THA.D9IoNtTb.mjs";
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
      pciZGFaoL: `(max-width: 809.98px)`,
      r_j7h4f7Y: `(min-width: 810px) and (max-width: 1199.98px)`,
      VBPiU8BaS: `(min-width: 1200px)`,
    }),
    (De = `framer-Ux9Fe`),
    (Oe = {
      pciZGFaoL: `framer-v-1th2mpa`,
      r_j7h4f7Y: `framer-v-c67w4y`,
      VBPiU8BaS: `framer-v-1u4izcv`,
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
    (Me = { Desktop: `VBPiU8BaS`, Phone: `pciZGFaoL`, Tablet: `r_j7h4f7Y` }),
    (Ne = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Me[r.variant] ?? r.variant ?? `VBPiU8BaS`,
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
          I = he(`RdwEiOQgZ`),
          z = t(null);
        return (
          se(),
          ce({}),
          o(ae.Provider, {
            value: { primaryVariantId: `VBPiU8BaS`, variantClassNames: Oe },
            children: l(ne, {
              id: x ?? u,
              children: [
                o(je, { value: `html body { background: rgb(255, 255, 255); }` }),
                o(d.div, {
                  ...de,
                  className: g(F, `framer-1u4izcv`, b),
                  ref: c,
                  style: { ...re },
                  children: l(`section`, {
                    className: `framer-14nhq4r`,
                    "data-framer-name": `Classes`,
                    id: I,
                    ref: z,
                    children: [
                      l(`div`, {
                        className: `framer-1pig2dg`,
                        "data-framer-name": `Text`,
                        children: [
                          o(fe, {
                            href: { webPageId: `Pinumpnx5` },
                            motionChild: !0,
                            nodeId: `AY0xAfjH6`,
                            openInNewTab: !1,
                            scopeId: `oWuGsq9yp`,
                            children: o(d.a, {
                              className: `framer-10lleg3 framer-bou425`,
                              children: o(R, {
                                animated: !1,
                                BKVe8Pgvw: !0,
                                className: `framer-1djocfc`,
                                fICyAUQY1: !0,
                                layoutId: `XE0iD_OLF`,
                                lKf_CQTz5: !0,
                              }),
                            }),
                          }),
                          o(y, {
                            breakpoint: D,
                            overrides: {
                              pciZGFaoL: { y: (h?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
                              r_j7h4f7Y: { y: (h?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
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
                                className: `framer-bt0p8u-container`,
                                nodeId: `W_1KHZMxL`,
                                rendersWithMotion: !0,
                                scopeId: `oWuGsq9yp`,
                                children: o(B, {
                                  ggTbrSuHk: `Hand tools`,
                                  height: `100%`,
                                  id: `W_1KHZMxL`,
                                  layoutId: `W_1KHZMxL`,
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
                                children: `Pliers`,
                              }),
                            }),
                            className: `framer-8fz9lj`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          o(T, {
                            children: o(S, {
                              className: `framer-5l024b-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `sOWaWHFfy`,
                              scopeId: `oWuGsq9yp`,
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
                                id: `sOWaWHFfy`,
                                layoutId: `sOWaWHFfy`,
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
                                    className: `framer-1rk79o2`,
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
                                    className: `framer-1igra9u`,
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
                                    className: `framer-2yglru`,
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
                                    className: `framer-gyo93e`,
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
                        className: `framer-p0onri`,
                        "data-framer-name": `ClassesGallery`,
                        children: [
                          o(Z, {
                            blockDocumentScrolling: !0,
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(_, {
                                  links: [
                                    {
                                      href: { webPageId: `hW5bYoASU` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `hW5bYoASU` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `hW5bYoASU` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        pciZGFaoL: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 0,
                                        },
                                        r_j7h4f7Y: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 0,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 271.4 + 0 + 0,
                                        children: l(S, {
                                          className: `framer-1w19zgr-container`,
                                          id: `1w19zgr`,
                                          nodeId: `OwcK3dyXZ`,
                                          scopeId: `oWuGsq9yp`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                pciZGFaoL: {
                                                  oSlFkYxO1: t[2],
                                                  variant: e.visible ? `zKknDDBVl` : `ZKOecjUjr`,
                                                },
                                                r_j7h4f7Y: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 1e3,
                                                    pixelWidth: 1e3,
                                                    src: `../../assets/images/CLtwNoBy9TbmmoXkknScOsSxpwo.webp?width=1000&height=1000`,
                                                    srcSet: `../../assets/images/CLtwNoBy9TbmmoXkknScOsSxpwo.webp 512w,../../assets/images/CLtwNoBy9TbmmoXkknScOsSxpwo.webp?width=1000&height=1000 1000w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `OwcK3dyXZ`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Combination Plier`,
                                                layoutId: `OwcK3dyXZ`,
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
                                                      triggerId: `1w19zgr`,
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
                                                              className: g(F, `framer-9d1ulv`),
                                                              "data-framer-portal-id": `1w19zgr`,
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
                                                            `VmvHr87be`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-tz5424`),
                                                            "data-framer-portal-id": `1w19zgr`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-gf71l1`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-btp1py`,
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
                                                                      className: `framer-1db4u43`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-346gbk`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-10phzff`,
                                                                        layoutId: `YJucaFxtL`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/a572f771-e71d-4780-8c43-6c862045d718/submit`,
                                                                  className: `framer-14wudx6`,
                                                                  nodeId: `DvCvAcuzs`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1xict1u`,
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
                                                                              className: `framer-1ucei70`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1e70eq1`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-112v1gj`,
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
                                                                              className: `framer-6ocdm4`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-dmbuj5`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1pjwq9t`,
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
                                                                              className: `framer-13cl89n`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1pw8jbs`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-73rx6p`,
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
                                                                              className: `framer-b46tyn`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1j8plcv`,
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
                                                                            pciZGFaoL: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-jcf0ob-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `oeWlbSXtS`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `oWuGsq9yp`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `oeWlbSXtS`,
                                                                                layoutId: `oeWlbSXtS`,
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
                                      href: { webPageId: `OgpyitZkm` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `OgpyitZkm` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `OgpyitZkm` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        pciZGFaoL: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 416,
                                        },
                                        r_j7h4f7Y: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 0,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 271.4 + 0 + 0,
                                        children: l(S, {
                                          className: `framer-1neihbq-container`,
                                          id: `1neihbq`,
                                          nodeId: `lStHWTM4u`,
                                          scopeId: `oWuGsq9yp`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                pciZGFaoL: { oSlFkYxO1: t[2] },
                                                r_j7h4f7Y: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 1280,
                                                    pixelWidth: 1280,
                                                    src: `../../assets/images/4HL8cSSZl6STLWFTCHpJ4J0zHSc.webp?width=1280&height=1280`,
                                                    srcSet: `../../assets/images/4HL8cSSZl6STLWFTCHpJ4J0zHSc.webp 512w,../../assets/images/4HL8cSSZl6STLWFTCHpJ4J0zHSc.webp?scale-down-to=1024&width=1280&height=1280 1024w,../../assets/images/4HL8cSSZl6STLWFTCHpJ4J0zHSc.webp?width=1280&height=1280 1280w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `lStHWTM4u`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Pincers Plier`,
                                                layoutId: `lStHWTM4u`,
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
                                                      triggerId: `1neihbq`,
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
                                                              className: g(F, `framer-evupob`),
                                                              "data-framer-portal-id": `1neihbq`,
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
                                                            `EuHIwDjav`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-ey2a4q`),
                                                            "data-framer-portal-id": `1neihbq`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-dkhjh2`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-ww0nto`,
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
                                                                      className: `framer-cc1vav`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1te444b`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-186nwhu`,
                                                                        layoutId: `JE_b1N2IE`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/06e217ba-067e-4725-814a-8d45e6673d7f/submit`,
                                                                  className: `framer-1enpfpq`,
                                                                  nodeId: `wkVh8tbve`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-18i9n6f`,
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
                                                                              className: `framer-11inmjf`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-qulxli`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1dn1bky`,
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
                                                                              className: `framer-1wk9i13`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1q7yfm0`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1uz7i62`,
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
                                                                              className: `framer-14zz20y`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1hpd7u8`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-hgvd6f`,
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
                                                                              className: `framer-x2qlm0`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1drtjx1`,
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
                                                                            pciZGFaoL: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1m4ht7n-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `MmFI0qUXj`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `oWuGsq9yp`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `MmFI0qUXj`,
                                                                                layoutId: `MmFI0qUXj`,
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
                                      href: { webPageId: `sobzGzdAj` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `sobzGzdAj` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `sobzGzdAj` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        pciZGFaoL: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 832,
                                        },
                                        r_j7h4f7Y: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 416,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 271.4 + 0 + 0,
                                        children: l(S, {
                                          className: `framer-bttjk-container`,
                                          id: `bttjk`,
                                          nodeId: `UyBFZIA8Y`,
                                          scopeId: `oWuGsq9yp`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                pciZGFaoL: { oSlFkYxO1: t[2] },
                                                r_j7h4f7Y: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 1e3,
                                                    pixelWidth: 1e3,
                                                    src: `../../assets/images/c4PjjjTCfIPGZxZxq3VXynOZdg.png?width=1000&height=1000`,
                                                    srcSet: `../../assets/images/c4PjjjTCfIPGZxZxq3VXynOZdg.png 512w,../../assets/images/c4PjjjTCfIPGZxZxq3VXynOZdg.png?width=1000&height=1000 1000w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `UyBFZIA8Y`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Side Cutting Plier`,
                                                layoutId: `UyBFZIA8Y`,
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
                                                      triggerId: `bttjk`,
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
                                                              className: g(F, `framer-1nf476o`),
                                                              "data-framer-portal-id": `bttjk`,
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
                                                            `xh0pezYHQ`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-sfdjwy`),
                                                            "data-framer-portal-id": `bttjk`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-10v8dzl`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-19lty67`,
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
                                                                      className: `framer-bwadhj`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-q2ajkq`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-9b5o3g`,
                                                                        layoutId: `nwPA9ANdf`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/ca94787a-2a46-46b1-a9f1-cd221c68ee6c/submit`,
                                                                  className: `framer-nhmqqd`,
                                                                  nodeId: `OJxhzhLSG`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-caa7m3`,
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
                                                                              className: `framer-19loq19`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1ln25lk`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-16r4lym`,
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
                                                                              className: `framer-1xba33f`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-12ixv9s`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1ycozbw`,
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
                                                                              className: `framer-y5loxo`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1h4ofpg`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-sflygk`,
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
                                                                              className: `framer-vzfcl`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-ibmyk9`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(y, {
                                                                          breakpoint: D,
                                                                          overrides: {
                                                                            pciZGFaoL: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-ugdls4-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `dfGPvHPVy`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `oWuGsq9yp`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `dfGPvHPVy`,
                                                                                layoutId: `dfGPvHPVy`,
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
                                      href: { webPageId: `f90th6GVN` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `f90th6GVN` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `f90th6GVN` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        pciZGFaoL: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 1248,
                                        },
                                        r_j7h4f7Y: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 416,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 271.4 + 0 + 416,
                                        children: l(S, {
                                          className: `framer-kz0gpt-container`,
                                          id: `kz0gpt`,
                                          nodeId: `OiAglSdDw`,
                                          scopeId: `oWuGsq9yp`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                pciZGFaoL: { oSlFkYxO1: t[2] },
                                                r_j7h4f7Y: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 1e3,
                                                    pixelWidth: 1e3,
                                                    src: `../../assets/images/qtjwrDRFeqxtxdEIkrm0PV99WY8.png?width=1000&height=1000`,
                                                    srcSet: `../../assets/images/qtjwrDRFeqxtxdEIkrm0PV99WY8.png 512w,../../assets/images/qtjwrDRFeqxtxdEIkrm0PV99WY8.png?width=1000&height=1000 1000w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `OiAglSdDw`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `VDE Plier`,
                                                layoutId: `OiAglSdDw`,
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
                                                      triggerId: `kz0gpt`,
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
                                                              className: g(F, `framer-1uy71yg`),
                                                              "data-framer-portal-id": `kz0gpt`,
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
                                                            `QXkld9jCV`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-x0mzmm`),
                                                            "data-framer-portal-id": `kz0gpt`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-1s6e29y`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-19xi4hc`,
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
                                                                      className: `framer-1l2zwks`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-sz2s31`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1t5end9`,
                                                                        layoutId: `tOqa5ZZla`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/ac19a6d6-fc57-46ed-aeba-a2cbfb2fa749/submit`,
                                                                  className: `framer-1gni9y6`,
                                                                  nodeId: `hQhYfMeSk`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-77bv4k`,
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
                                                                              className: `framer-1ud89xt`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1gyn2g9`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-nzml2p`,
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
                                                                              className: `framer-1mlgu4f`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1xa8ct1`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-12l1h7m`,
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
                                                                              className: `framer-ee4god`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-ulvcxu`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-8q3wme`,
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
                                                                              className: `framer-3xpgqj`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-14s0nsm`,
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
                                                                            pciZGFaoL: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-clbmax-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `oCnCFfqez`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `oWuGsq9yp`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `oCnCFfqez`,
                                                                                layoutId: `oCnCFfqez`,
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
                                      href: { webPageId: `tpSZxEZ3Q` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `tpSZxEZ3Q` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `tpSZxEZ3Q` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        pciZGFaoL: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 1664,
                                        },
                                        r_j7h4f7Y: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 832,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 271.4 + 0 + 416,
                                        children: l(S, {
                                          className: `framer-1lc5zqj-container`,
                                          id: `1lc5zqj`,
                                          nodeId: `Z3q4EJG47`,
                                          scopeId: `oWuGsq9yp`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                pciZGFaoL: { oSlFkYxO1: t[2] },
                                                r_j7h4f7Y: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 360,
                                                    pixelWidth: 360,
                                                    src: `../../assets/images/270iEA1wCy2UfDjPaoK8ORZROpY.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `Z3q4EJG47`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Water Pump Plier`,
                                                layoutId: `Z3q4EJG47`,
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
                                                      triggerId: `1lc5zqj`,
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
                                                              className: g(F, `framer-1kz3j0c`),
                                                              "data-framer-portal-id": `1lc5zqj`,
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
                                                            `Y3EccIOUv`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-4wzct8`),
                                                            "data-framer-portal-id": `1lc5zqj`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-ez5pja`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-zlf4d9`,
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
                                                                      className: `framer-j3kjhb`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-xmq11d`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1espihs`,
                                                                        layoutId: `eiVjfva3K`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/73d3e2be-fb4f-4044-a417-63792a6dfe5b/submit`,
                                                                  className: `framer-uxm9xn`,
                                                                  nodeId: `NFTabw94k`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1dyoi1l`,
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
                                                                              className: `framer-1n39mv3`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1p9w07q`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-h92q3d`,
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
                                                                              className: `framer-r59o60`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1s5s183`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-m2rubg`,
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
                                                                              className: `framer-1h1iea7`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1oalvd6`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-sfex27`,
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
                                                                              className: `framer-1eff3d8`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1jqtgx6`,
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
                                                                            pciZGFaoL: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-147888x-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `XD2Z73xGx`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `oWuGsq9yp`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `XD2Z73xGx`,
                                                                                layoutId: `XD2Z73xGx`,
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
                                      href: { webPageId: `J9Kmrbane` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `J9Kmrbane` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `J9Kmrbane` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        pciZGFaoL: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 2080,
                                        },
                                        r_j7h4f7Y: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 832,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 271.4 + 0 + 416,
                                        children: l(S, {
                                          className: `framer-n70q04-container`,
                                          id: `n70q04`,
                                          nodeId: `K8YyUDpKZ`,
                                          scopeId: `oWuGsq9yp`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                pciZGFaoL: { oSlFkYxO1: t[2] },
                                                r_j7h4f7Y: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 485,
                                                    pixelWidth: 485,
                                                    src: `../../assets/images/7CfMAjH7qIynCH7VAhCfEXYNeg.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `K8YyUDpKZ`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Circlip Pliers`,
                                                layoutId: `K8YyUDpKZ`,
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
                                                      triggerId: `n70q04`,
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
                                                              className: g(F, `framer-u5mpvi`),
                                                              "data-framer-portal-id": `n70q04`,
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
                                                            `JrmpZGkQ1`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-1sfqc5f`),
                                                            "data-framer-portal-id": `n70q04`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-7mzvo7`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1yj6fsd`,
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
                                                                      className: `framer-12ntvhl`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1j4rkrh`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1ym3xwn`,
                                                                        layoutId: `JVNLrGLXc`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/e213a764-1bd6-4028-a166-dbe8a8227ac1/submit`,
                                                                  className: `framer-ca47f4`,
                                                                  nodeId: `vAMKpWBbH`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-e2e8q6`,
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
                                                                              className: `framer-abn9t1`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1t1g9te`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1plw2wm`,
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
                                                                              className: `framer-1lfh4qc`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-uqslw5`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-12y69co`,
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
                                                                              className: `framer-3py1sx`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1ezexyl`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1p72o81`,
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
                                                                              className: `framer-1hyrr1t`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-muag2w`,
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
                                                                            pciZGFaoL: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-rocmx5-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `IihbW7nwT`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `oWuGsq9yp`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `IihbW7nwT`,
                                                                                layoutId: `IihbW7nwT`,
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
                                      href: { webPageId: `AKUEwE6NV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `AKUEwE6NV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `AKUEwE6NV` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        pciZGFaoL: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 2496,
                                        },
                                        r_j7h4f7Y: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 1248,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 271.4 + 0 + 832,
                                        children: l(S, {
                                          className: `framer-8yfudo-container`,
                                          id: `8yfudo`,
                                          nodeId: `J4kpNeF2Y`,
                                          scopeId: `oWuGsq9yp`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                pciZGFaoL: { oSlFkYxO1: t[2] },
                                                r_j7h4f7Y: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 469,
                                                    src: `../../assets/images/TCk6zPwdSYVf4HHj7HvmsHpsnKk.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `J4kpNeF2Y`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Wire Stripping `,
                                                layoutId: `J4kpNeF2Y`,
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
                                                      triggerId: `8yfudo`,
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
                                                              className: g(F, `framer-mp9gfw`),
                                                              "data-framer-portal-id": `8yfudo`,
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
                                                            `Fx1PGaqrM`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-qk718w`),
                                                            "data-framer-portal-id": `8yfudo`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-drlz6v`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-yv5dmo`,
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
                                                                      className: `framer-1ssal4w`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1w46nok`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-64b0sl`,
                                                                        layoutId: `hRRqh3JBp`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/7970d59b-41bc-406b-9d83-e1abbfa93f6a/submit`,
                                                                  className: `framer-ez6onb`,
                                                                  nodeId: `UPi9DM4V3`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-mwoq79`,
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
                                                                              className: `framer-1aynt6z`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1qhmc0l`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-p0omrw`,
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
                                                                              className: `framer-k2105t`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1ngz35l`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-rci9z8`,
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
                                                                              className: `framer-qp2s29`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1p0vi7c`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1oriy2v`,
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
                                                                              className: `framer-1ohmxv2`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-8xmsbq`,
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
                                                                            pciZGFaoL: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1pgcohu-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `HMW5cX1MW`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `oWuGsq9yp`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `HMW5cX1MW`,
                                                                                layoutId: `HMW5cX1MW`,
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
                                      href: { webPageId: `g4GB4oHqq` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `g4GB4oHqq` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `g4GB4oHqq` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        pciZGFaoL: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 2912,
                                        },
                                        r_j7h4f7Y: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 1248,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 271.4 + 0 + 832,
                                        children: l(S, {
                                          className: `framer-8rsx1n-container`,
                                          id: `8rsx1n`,
                                          nodeId: `Z5xKRAAtk`,
                                          scopeId: `oWuGsq9yp`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                pciZGFaoL: { oSlFkYxO1: t[2] },
                                                r_j7h4f7Y: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 729,
                                                    pixelWidth: 1200,
                                                    src: `../../assets/images/ipaTdNUg1Ih85ilSesyg9JCNtM.png?width=1200&height=729`,
                                                    srcSet: `../../assets/images/ipaTdNUg1Ih85ilSesyg9JCNtM.png 512w,../../assets/images/ipaTdNUg1Ih85ilSesyg9JCNtM.png?scale-down-to=1024&width=1200&height=729 1024w,../../assets/images/ipaTdNUg1Ih85ilSesyg9JCNtM.png?width=1200&height=729 1200w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `Z5xKRAAtk`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `VDE Plier Set`,
                                                layoutId: `Z5xKRAAtk`,
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
                                                      triggerId: `8rsx1n`,
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
                                                              className: g(F, `framer-k0kark`),
                                                              "data-framer-portal-id": `8rsx1n`,
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
                                                            `v7LmS8UW_`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-tnhozf`),
                                                            "data-framer-portal-id": `8rsx1n`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-ao6pb6`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1lam628`,
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
                                                                      className: `framer-yuoze2`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1txy0kc`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-w5sxt3`,
                                                                        layoutId: `ioDR4cQoN`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/de9b0671-7104-4f73-8983-6b732bcd42b5/submit`,
                                                                  className: `framer-8tanq7`,
                                                                  nodeId: `zfzEtgfni`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-6wvbuo`,
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
                                                                              className: `framer-8u0s8i`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-kb1k1`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1ibqtq9`,
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
                                                                              className: `framer-1hu8g53`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-hzu1tl`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-s9jso`,
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
                                                                              className: `framer-1b16g5z`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-16johxs`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-lx5h5x`,
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
                                                                              className: `framer-1x5b6iv`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-pcyh1p`,
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
                                                                            pciZGFaoL: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1x7ieco-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `tb4ziGIVV`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `oWuGsq9yp`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `tb4ziGIVV`,
                                                                                layoutId: `tb4ziGIVV`,
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
                                      href: { webPageId: `DTGYWJVQv` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `DTGYWJVQv` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `DTGYWJVQv` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        pciZGFaoL: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 3328,
                                        },
                                        r_j7h4f7Y: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 1664,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 271.4 + 0 + 832,
                                        children: l(S, {
                                          className: `framer-4742ib-container`,
                                          id: `4742ib`,
                                          nodeId: `fyl9qNEoA`,
                                          scopeId: `oWuGsq9yp`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                pciZGFaoL: { oSlFkYxO1: t[2] },
                                                r_j7h4f7Y: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 1301,
                                                    pixelWidth: 1800,
                                                    src: `../../assets/images/htMZ8Tc76ctCDLADd08GUehD10M.png?width=1800&height=1301`,
                                                    srcSet: `../../assets/images/htMZ8Tc76ctCDLADd08GUehD10M.png 512w,../../assets/images/htMZ8Tc76ctCDLADd08GUehD10M.png?scale-down-to=1024&width=1800&height=1301 1024w,../../assets/images/htMZ8Tc76ctCDLADd08GUehD10M.png?width=1800&height=1301 1800w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `fyl9qNEoA`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Slip Joint Plier`,
                                                layoutId: `fyl9qNEoA`,
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
                                                      triggerId: `4742ib`,
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
                                                              className: g(F, `framer-mdnmes`),
                                                              "data-framer-portal-id": `4742ib`,
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
                                                            `G4dFoyLSi`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-13i7fk9`),
                                                            "data-framer-portal-id": `4742ib`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-xkfgn2`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1ra39zr`,
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
                                                                      className: `framer-hyasad`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-4butlg`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-ehtzmi`,
                                                                        layoutId: `AjnHVHq6I`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/a1d73d2e-4343-445b-a642-161d5a956635/submit`,
                                                                  className: `framer-4e7rjn`,
                                                                  nodeId: `uYy6n9wKd`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-gq74rv`,
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
                                                                              className: `framer-h6gny8`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1obonsz`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-qrli`,
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
                                                                              className: `framer-1ceyzge`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1o74vgf`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-2rlxxu`,
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
                                                                              className: `framer-dqyuld`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-jk6rle`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-elyrs9`,
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
                                                                              className: `framer-q88c7w`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1dmlfbf`,
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
                                                                            pciZGFaoL: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1e5zfx4-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `wFXE3d4_J`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `oWuGsq9yp`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `wFXE3d4_J`,
                                                                                layoutId: `wFXE3d4_J`,
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
                                      href: { webPageId: `bk6UU2fjM` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `bk6UU2fjM` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `bk6UU2fjM` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        pciZGFaoL: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 3744,
                                        },
                                        r_j7h4f7Y: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 1664,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 271.4 + 0 + 1248,
                                        children: l(S, {
                                          className: `framer-1pdor85-container`,
                                          id: `1pdor85`,
                                          nodeId: `EpGJ3t5WB`,
                                          scopeId: `oWuGsq9yp`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                pciZGFaoL: { oSlFkYxO1: t[2] },
                                                r_j7h4f7Y: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 1e3,
                                                    pixelWidth: 1e3,
                                                    src: `../../assets/images/EP6XEaQr86RnC55v1mHvB4PkU.webp?width=1000&height=1000`,
                                                    srcSet: `../../assets/images/EP6XEaQr86RnC55v1mHvB4PkU.webp 512w,../../assets/images/EP6XEaQr86RnC55v1mHvB4PkU.webp?width=1000&height=1000 1000w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `EpGJ3t5WB`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Nose Plier`,
                                                layoutId: `EpGJ3t5WB`,
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
                                                      triggerId: `1pdor85`,
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
                                                              className: g(F, `framer-1gwu03l`),
                                                              "data-framer-portal-id": `1pdor85`,
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
                                                            `nJsi0lVqn`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-2wsl94`),
                                                            "data-framer-portal-id": `1pdor85`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-1y0iwhy`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1s46emi`,
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
                                                                      className: `framer-19u4jsy`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1h2a7fv`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-s0qs6n`,
                                                                        layoutId: `AonylurF6`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/dd95bd5c-b3ea-48d4-89c0-dcc766e25754/submit`,
                                                                  className: `framer-r535o5`,
                                                                  nodeId: `kqXllPMlw`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-hhbnyc`,
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
                                                                              className: `framer-i0qob1`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-yfinyd`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1gp1cg`,
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
                                                                              className: `framer-q5fqa5`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1g7ciby`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-8qur2v`,
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
                                                                              className: `framer-zqh5jy`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1ky16xv`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1gkyr7x`,
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
                                                                              className: `framer-17crvn2`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1q77582`,
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
                                                                            pciZGFaoL: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1yihbgy-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `a9cdjM1pC`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `oWuGsq9yp`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `a9cdjM1pC`,
                                                                                layoutId: `a9cdjM1pC`,
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
                                      href: { webPageId: `cTlJe6NNs` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `cTlJe6NNs` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `cTlJe6NNs` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        pciZGFaoL: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 4160,
                                        },
                                        r_j7h4f7Y: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 271.4 + 0 + 2080,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 271.4 + 0 + 1248,
                                        children: l(S, {
                                          className: `framer-asewem-container`,
                                          id: `asewem`,
                                          nodeId: `BYucP76oq`,
                                          scopeId: `oWuGsq9yp`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                pciZGFaoL: { oSlFkYxO1: t[2] },
                                                r_j7h4f7Y: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 485,
                                                    pixelWidth: 485,
                                                    src: `../../assets/images/asHeJkCUaA1bXw72iJbll03aI.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `BYucP76oq`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Locking Plier`,
                                                layoutId: `BYucP76oq`,
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
                                                      triggerId: `asewem`,
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
                                                              className: g(F, `framer-1fvf0wn`),
                                                              "data-framer-portal-id": `asewem`,
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
                                                            `JSahaffSh`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-1meep98`),
                                                            "data-framer-portal-id": `asewem`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-k75oya`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-19tphrv`,
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
                                                                      className: `framer-1moq7zs`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-qh61m6`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-13j0vbx`,
                                                                        layoutId: `dtmlKi7A7`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/162d76c3-c0c4-4ea4-8a91-ff3e24e76a3d/submit`,
                                                                  className: `framer-1lvrfjo`,
                                                                  nodeId: `JKoELu1TW`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1f70745`,
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
                                                                              className: `framer-1vduxak`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-l4455b`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-h92f3o`,
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
                                                                              className: `framer-1wkla1l`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-118yj7h`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1e6ssab`,
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
                                                                              className: `framer-149s77p`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-olva7w`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-141gonq`,
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
                                                                              className: `framer-g92bzq`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-6rgyn3`,
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
                                                                            pciZGFaoL: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1psqmb7-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `UIzFqGW2d`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `oWuGsq9yp`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `UIzFqGW2d`,
                                                                                layoutId: `UIzFqGW2d`,
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
        `.framer-Ux9Fe.framer-bou425, .framer-Ux9Fe .framer-bou425 { display: block; }`,
        `.framer-Ux9Fe.framer-1u4izcv { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-Ux9Fe .framer-14nhq4r { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 96px 24px 30px 24px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-Ux9Fe .framer-1pig2dg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ux9Fe .framer-10lleg3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-Ux9Fe .framer-1djocfc { --1335ju: 1.7; --18mrqx2: #000000; --3it368: 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-Ux9Fe .framer-bt0p8u-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Ux9Fe .framer-8fz9lj { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Ux9Fe .framer-5l024b-container { flex: none; height: 100px; position: relative; width: 339px; }`,
        `.framer-Ux9Fe .framer-1rk79o2 { height: 50px; overflow: visible; position: relative; width: 50px; }`,
        `.framer-Ux9Fe .framer-1igra9u { aspect-ratio: 1.6008403361344539 / 1; height: var(--framer-aspect-ratio-supported, 50px); overflow: visible; position: relative; width: 80px; }`,
        `.framer-Ux9Fe .framer-2yglru { aspect-ratio: 1.842433697347894 / 1; height: var(--framer-aspect-ratio-supported, 43px); overflow: visible; position: relative; width: 79px; }`,
        `.framer-Ux9Fe .framer-gyo93e { aspect-ratio: 3.0225409836065578 / 1; height: var(--framer-aspect-ratio-supported, 23px); overflow: visible; position: relative; width: 70px; }`,
        `.framer-Ux9Fe .framer-p0onri { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ux9Fe .framer-1w19zgr-container, .framer-Ux9Fe .framer-1neihbq-container, .framer-Ux9Fe .framer-bttjk-container, .framer-Ux9Fe .framer-kz0gpt-container, .framer-Ux9Fe .framer-1lc5zqj-container, .framer-Ux9Fe .framer-n70q04-container, .framer-Ux9Fe .framer-8yfudo-container, .framer-Ux9Fe .framer-8rsx1n-container, .framer-Ux9Fe .framer-4742ib-container, .framer-Ux9Fe .framer-1pdor85-container, .framer-Ux9Fe .framer-asewem-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-Ux9Fe.framer-9d1ulv, .framer-Ux9Fe.framer-evupob, .framer-Ux9Fe.framer-1nf476o, .framer-Ux9Fe.framer-1uy71yg, .framer-Ux9Fe.framer-1kz3j0c, .framer-Ux9Fe.framer-u5mpvi, .framer-Ux9Fe.framer-k0kark, .framer-Ux9Fe.framer-mdnmes, .framer-Ux9Fe.framer-1gwu03l, .framer-Ux9Fe.framer-1fvf0wn { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-Ux9Fe.framer-tz5424, .framer-Ux9Fe.framer-ey2a4q, .framer-Ux9Fe.framer-sfdjwy, .framer-Ux9Fe.framer-x0mzmm, .framer-Ux9Fe.framer-4wzct8, .framer-Ux9Fe.framer-1sfqc5f, .framer-Ux9Fe.framer-qk718w, .framer-Ux9Fe.framer-tnhozf, .framer-Ux9Fe.framer-13i7fk9, .framer-Ux9Fe.framer-2wsl94, .framer-Ux9Fe.framer-1meep98 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-Ux9Fe .framer-gf71l1, .framer-Ux9Fe .framer-dkhjh2, .framer-Ux9Fe .framer-10v8dzl, .framer-Ux9Fe .framer-1s6e29y, .framer-Ux9Fe .framer-ez5pja, .framer-Ux9Fe .framer-7mzvo7, .framer-Ux9Fe .framer-drlz6v, .framer-Ux9Fe .framer-ao6pb6, .framer-Ux9Fe .framer-xkfgn2, .framer-Ux9Fe .framer-1y0iwhy, .framer-Ux9Fe .framer-k75oya { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-Ux9Fe .framer-btp1py, .framer-Ux9Fe .framer-ww0nto, .framer-Ux9Fe .framer-19lty67, .framer-Ux9Fe .framer-19xi4hc, .framer-Ux9Fe .framer-zlf4d9, .framer-Ux9Fe .framer-1yj6fsd, .framer-Ux9Fe .framer-yv5dmo, .framer-Ux9Fe .framer-1lam628, .framer-Ux9Fe .framer-1ra39zr, .framer-Ux9Fe .framer-1s46emi, .framer-Ux9Fe .framer-19tphrv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ux9Fe .framer-1db4u43, .framer-Ux9Fe .framer-cc1vav, .framer-Ux9Fe .framer-bwadhj, .framer-Ux9Fe .framer-1l2zwks, .framer-Ux9Fe .framer-j3kjhb, .framer-Ux9Fe .framer-12ntvhl, .framer-Ux9Fe .framer-1ssal4w, .framer-Ux9Fe .framer-yuoze2, .framer-Ux9Fe .framer-hyasad, .framer-Ux9Fe .framer-19u4jsy, .framer-Ux9Fe .framer-1moq7zs { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Ux9Fe .framer-346gbk, .framer-Ux9Fe .framer-1te444b, .framer-Ux9Fe .framer-q2ajkq, .framer-Ux9Fe .framer-sz2s31, .framer-Ux9Fe .framer-xmq11d, .framer-Ux9Fe .framer-1j4rkrh, .framer-Ux9Fe .framer-1w46nok, .framer-Ux9Fe .framer-1txy0kc, .framer-Ux9Fe .framer-4butlg, .framer-Ux9Fe .framer-1h2a7fv, .framer-Ux9Fe .framer-qh61m6 { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-Ux9Fe .framer-10phzff, .framer-Ux9Fe .framer-186nwhu, .framer-Ux9Fe .framer-9b5o3g, .framer-Ux9Fe .framer-1t5end9, .framer-Ux9Fe .framer-1espihs, .framer-Ux9Fe .framer-1ym3xwn, .framer-Ux9Fe .framer-64b0sl, .framer-Ux9Fe .framer-w5sxt3, .framer-Ux9Fe .framer-ehtzmi, .framer-Ux9Fe .framer-s0qs6n, .framer-Ux9Fe .framer-13j0vbx { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-Ux9Fe .framer-14wudx6, .framer-Ux9Fe .framer-1enpfpq, .framer-Ux9Fe .framer-nhmqqd, .framer-Ux9Fe .framer-1gni9y6, .framer-Ux9Fe .framer-uxm9xn, .framer-Ux9Fe .framer-ca47f4, .framer-Ux9Fe .framer-ez6onb, .framer-Ux9Fe .framer-8tanq7, .framer-Ux9Fe .framer-4e7rjn, .framer-Ux9Fe .framer-r535o5, .framer-Ux9Fe .framer-1lvrfjo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-Ux9Fe .framer-1xict1u, .framer-Ux9Fe .framer-112v1gj, .framer-Ux9Fe .framer-1pjwq9t, .framer-Ux9Fe .framer-73rx6p, .framer-Ux9Fe .framer-18i9n6f, .framer-Ux9Fe .framer-1dn1bky, .framer-Ux9Fe .framer-1uz7i62, .framer-Ux9Fe .framer-hgvd6f, .framer-Ux9Fe .framer-caa7m3, .framer-Ux9Fe .framer-16r4lym, .framer-Ux9Fe .framer-1ycozbw, .framer-Ux9Fe .framer-sflygk, .framer-Ux9Fe .framer-77bv4k, .framer-Ux9Fe .framer-nzml2p, .framer-Ux9Fe .framer-12l1h7m, .framer-Ux9Fe .framer-8q3wme, .framer-Ux9Fe .framer-1dyoi1l, .framer-Ux9Fe .framer-h92q3d, .framer-Ux9Fe .framer-m2rubg, .framer-Ux9Fe .framer-sfex27, .framer-Ux9Fe .framer-e2e8q6, .framer-Ux9Fe .framer-1plw2wm, .framer-Ux9Fe .framer-12y69co, .framer-Ux9Fe .framer-1p72o81, .framer-Ux9Fe .framer-mwoq79, .framer-Ux9Fe .framer-p0omrw, .framer-Ux9Fe .framer-rci9z8, .framer-Ux9Fe .framer-1oriy2v, .framer-Ux9Fe .framer-6wvbuo, .framer-Ux9Fe .framer-1ibqtq9, .framer-Ux9Fe .framer-s9jso, .framer-Ux9Fe .framer-lx5h5x, .framer-Ux9Fe .framer-gq74rv, .framer-Ux9Fe .framer-qrli, .framer-Ux9Fe .framer-2rlxxu, .framer-Ux9Fe .framer-elyrs9, .framer-Ux9Fe .framer-hhbnyc, .framer-Ux9Fe .framer-1gp1cg, .framer-Ux9Fe .framer-8qur2v, .framer-Ux9Fe .framer-1gkyr7x, .framer-Ux9Fe .framer-1f70745, .framer-Ux9Fe .framer-h92f3o, .framer-Ux9Fe .framer-1e6ssab, .framer-Ux9Fe .framer-141gonq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Ux9Fe .framer-1ucei70, .framer-Ux9Fe .framer-6ocdm4, .framer-Ux9Fe .framer-13cl89n, .framer-Ux9Fe .framer-b46tyn, .framer-Ux9Fe .framer-11inmjf, .framer-Ux9Fe .framer-1wk9i13, .framer-Ux9Fe .framer-14zz20y, .framer-Ux9Fe .framer-x2qlm0, .framer-Ux9Fe .framer-19loq19, .framer-Ux9Fe .framer-1xba33f, .framer-Ux9Fe .framer-y5loxo, .framer-Ux9Fe .framer-vzfcl, .framer-Ux9Fe .framer-1ud89xt, .framer-Ux9Fe .framer-1mlgu4f, .framer-Ux9Fe .framer-ee4god, .framer-Ux9Fe .framer-3xpgqj, .framer-Ux9Fe .framer-1n39mv3, .framer-Ux9Fe .framer-r59o60, .framer-Ux9Fe .framer-1h1iea7, .framer-Ux9Fe .framer-1eff3d8, .framer-Ux9Fe .framer-abn9t1, .framer-Ux9Fe .framer-1lfh4qc, .framer-Ux9Fe .framer-3py1sx, .framer-Ux9Fe .framer-1hyrr1t, .framer-Ux9Fe .framer-1aynt6z, .framer-Ux9Fe .framer-k2105t, .framer-Ux9Fe .framer-qp2s29, .framer-Ux9Fe .framer-1ohmxv2, .framer-Ux9Fe .framer-8u0s8i, .framer-Ux9Fe .framer-1hu8g53, .framer-Ux9Fe .framer-1b16g5z, .framer-Ux9Fe .framer-1x5b6iv, .framer-Ux9Fe .framer-h6gny8, .framer-Ux9Fe .framer-1ceyzge, .framer-Ux9Fe .framer-dqyuld, .framer-Ux9Fe .framer-q88c7w, .framer-Ux9Fe .framer-i0qob1, .framer-Ux9Fe .framer-q5fqa5, .framer-Ux9Fe .framer-zqh5jy, .framer-Ux9Fe .framer-17crvn2, .framer-Ux9Fe .framer-1vduxak, .framer-Ux9Fe .framer-1wkla1l, .framer-Ux9Fe .framer-149s77p, .framer-Ux9Fe .framer-g92bzq { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Ux9Fe .framer-1e70eq1, .framer-Ux9Fe .framer-dmbuj5, .framer-Ux9Fe .framer-1pw8jbs, .framer-Ux9Fe .framer-1j8plcv, .framer-Ux9Fe .framer-qulxli, .framer-Ux9Fe .framer-1q7yfm0, .framer-Ux9Fe .framer-1hpd7u8, .framer-Ux9Fe .framer-1drtjx1, .framer-Ux9Fe .framer-1ln25lk, .framer-Ux9Fe .framer-12ixv9s, .framer-Ux9Fe .framer-1h4ofpg, .framer-Ux9Fe .framer-ibmyk9, .framer-Ux9Fe .framer-1gyn2g9, .framer-Ux9Fe .framer-1xa8ct1, .framer-Ux9Fe .framer-ulvcxu, .framer-Ux9Fe .framer-14s0nsm, .framer-Ux9Fe .framer-1p9w07q, .framer-Ux9Fe .framer-1s5s183, .framer-Ux9Fe .framer-1oalvd6, .framer-Ux9Fe .framer-1jqtgx6, .framer-Ux9Fe .framer-1t1g9te, .framer-Ux9Fe .framer-uqslw5, .framer-Ux9Fe .framer-1ezexyl, .framer-Ux9Fe .framer-muag2w, .framer-Ux9Fe .framer-1qhmc0l, .framer-Ux9Fe .framer-1ngz35l, .framer-Ux9Fe .framer-1p0vi7c, .framer-Ux9Fe .framer-8xmsbq, .framer-Ux9Fe .framer-kb1k1, .framer-Ux9Fe .framer-hzu1tl, .framer-Ux9Fe .framer-16johxs, .framer-Ux9Fe .framer-pcyh1p, .framer-Ux9Fe .framer-1obonsz, .framer-Ux9Fe .framer-1o74vgf, .framer-Ux9Fe .framer-jk6rle, .framer-Ux9Fe .framer-1dmlfbf, .framer-Ux9Fe .framer-yfinyd, .framer-Ux9Fe .framer-1g7ciby, .framer-Ux9Fe .framer-1ky16xv, .framer-Ux9Fe .framer-1q77582, .framer-Ux9Fe .framer-l4455b, .framer-Ux9Fe .framer-118yj7h, .framer-Ux9Fe .framer-olva7w, .framer-Ux9Fe .framer-6rgyn3 { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-Ux9Fe .framer-jcf0ob-container, .framer-Ux9Fe .framer-1m4ht7n-container, .framer-Ux9Fe .framer-ugdls4-container, .framer-Ux9Fe .framer-clbmax-container, .framer-Ux9Fe .framer-147888x-container, .framer-Ux9Fe .framer-rocmx5-container, .framer-Ux9Fe .framer-1pgcohu-container, .framer-Ux9Fe .framer-1x7ieco-container, .framer-Ux9Fe .framer-1e5zfx4-container, .framer-Ux9Fe .framer-1yihbgy-container, .framer-Ux9Fe .framer-1psqmb7-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-Ux9Fe.framer-mp9gfw { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; }`,
        ..._e,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-Ux9Fe.framer-1u4izcv { width: 810px; } .framer-Ux9Fe .framer-14nhq4r { padding: 80px 24px 50px 24px; } .framer-Ux9Fe .framer-p0onri { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-Ux9Fe .framer-gf71l1, .framer-Ux9Fe .framer-dkhjh2, .framer-Ux9Fe .framer-10v8dzl, .framer-Ux9Fe .framer-1s6e29y, .framer-Ux9Fe .framer-ez5pja, .framer-Ux9Fe .framer-7mzvo7, .framer-Ux9Fe .framer-drlz6v, .framer-Ux9Fe .framer-ao6pb6, .framer-Ux9Fe .framer-xkfgn2, .framer-Ux9Fe .framer-1y0iwhy, .framer-Ux9Fe .framer-k75oya { height: min-content; width: min-content; } .framer-Ux9Fe .framer-btp1py, .framer-Ux9Fe .framer-ww0nto, .framer-Ux9Fe .framer-19lty67, .framer-Ux9Fe .framer-19xi4hc, .framer-Ux9Fe .framer-zlf4d9, .framer-Ux9Fe .framer-1yj6fsd, .framer-Ux9Fe .framer-yv5dmo, .framer-Ux9Fe .framer-1lam628, .framer-Ux9Fe .framer-1ra39zr, .framer-Ux9Fe .framer-1s46emi, .framer-Ux9Fe .framer-19tphrv { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-Ux9Fe.framer-1u4izcv { width: 390px; } .framer-Ux9Fe .framer-14nhq4r { padding: 80px 16px 40px 16px; } .framer-Ux9Fe .framer-p0onri { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-Ux9Fe .framer-1w19zgr-container { order: 0; } .framer-Ux9Fe.framer-tz5424, .framer-Ux9Fe.framer-ey2a4q, .framer-Ux9Fe.framer-sfdjwy, .framer-Ux9Fe.framer-x0mzmm, .framer-Ux9Fe.framer-4wzct8, .framer-Ux9Fe.framer-1sfqc5f, .framer-Ux9Fe.framer-qk718w, .framer-Ux9Fe.framer-tnhozf, .framer-Ux9Fe.framer-13i7fk9, .framer-Ux9Fe.framer-2wsl94, .framer-Ux9Fe.framer-1meep98 { padding: 60px 0px 0px 0px; } .framer-Ux9Fe .framer-gf71l1, .framer-Ux9Fe .framer-dkhjh2, .framer-Ux9Fe .framer-10v8dzl, .framer-Ux9Fe .framer-1s6e29y, .framer-Ux9Fe .framer-ez5pja, .framer-Ux9Fe .framer-7mzvo7, .framer-Ux9Fe .framer-drlz6v, .framer-Ux9Fe .framer-ao6pb6, .framer-Ux9Fe .framer-xkfgn2, .framer-Ux9Fe .framer-1y0iwhy, .framer-Ux9Fe .framer-k75oya { height: min-content; width: 300px; } .framer-Ux9Fe .framer-14wudx6, .framer-Ux9Fe .framer-1enpfpq, .framer-Ux9Fe .framer-nhmqqd, .framer-Ux9Fe .framer-1gni9y6, .framer-Ux9Fe .framer-uxm9xn, .framer-Ux9Fe .framer-ca47f4, .framer-Ux9Fe .framer-ez6onb, .framer-Ux9Fe .framer-8tanq7, .framer-Ux9Fe .framer-4e7rjn, .framer-Ux9Fe .framer-r535o5, .framer-Ux9Fe .framer-1lvrfjo { width: 261px; } .framer-Ux9Fe .framer-1neihbq-container { order: 1; } .framer-Ux9Fe .framer-bttjk-container { order: 2; } .framer-Ux9Fe .framer-kz0gpt-container { order: 3; } .framer-Ux9Fe .framer-1lc5zqj-container { order: 4; } .framer-Ux9Fe .framer-n70q04-container { order: 5; } .framer-Ux9Fe .framer-8yfudo-container { order: 6; } .framer-Ux9Fe .framer-8rsx1n-container { order: 7; } .framer-Ux9Fe .framer-4742ib-container { order: 8; } .framer-Ux9Fe .framer-1pdor85-container { order: 9; } .framer-Ux9Fe .framer-asewem-container { order: 10; }}`,
      ],
      `framer-Ux9Fe`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 2352, width: 1200 }),
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
          name: `FrameroWuGsq9yp`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `2352`,
            framerResponsiveScreen: ``,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"r_j7h4f7Y":{"layout":["fixed","fixed"]},"pciZGFaoL":{"layout":["fixed","fixed"]}}}`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `{"RdwEiOQgZ":{"pattern":":RdwEiOQgZ","name":"classes"}}`,
            framerColorSyntax: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=GLlHZmSZR05FP_JBHfJRMW2cO_CmshtptxvvzHqu92o.C5mv6QQE.mjs.map
