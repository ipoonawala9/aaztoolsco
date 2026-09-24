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
  s as te,
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
  u as w,
  ut as _e,
  w as T,
  x as E,
  y as D,
} from "./framer.w0XhpZTx.mjs";
import { n as ve, t as O } from "./Ticker.QfylVvbQ.mjs";
import { i as k, n as ye, r as A, t as be } from "./nl385Jssa.BV16yEHR.mjs";
import { a as j, c as M, i as N, o as P, r as F, s as I } from "./shared.DPOhhryJ.mjs";
import { i as L, r as R } from "./cQxXulDZM.DXXtl8ZX.mjs";
import { n as z, t as B } from "./jNXHc0ip8.Bnggf-hw.mjs";
import xe, { t as V } from "./sb1Q_yuA-YAv2pBOBBnjnXzwsa5ZtgKFoW0bgBtX2vM.DcdZ5Or9.mjs";
var H, Se, U, Ce, we, Te, Ee, De, Oe, W, ke, Ae, G, K, q, J, Y, X, Z, Q, je, Me, Ne, $, Pe;
e(() => {
  (te(),
    ie(),
    f(),
    l(),
    s(),
    P(),
    ve(),
    M(),
    N(),
    L(),
    z(),
    k(),
    V(),
    (H = p(I)),
    (Se = p(R)),
    (U = y(b)),
    (Ce = y(E)),
    (we = p(O)),
    (Te = p(B)),
    (Ee = p(j)),
    (De = p(F)),
    (Oe = {
      dxYCPQwE1: `(max-width: 809.98px)`,
      IwgLxcoOT: `(min-width: 1200px)`,
      PJ7H0_AZs: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (W = () => typeof document < `u`),
    (ke = `framer-dS7O9`),
    (Ae = {
      dxYCPQwE1: `framer-v-1gd4er6`,
      IwgLxcoOT: `framer-v-1h8mrbj`,
      PJ7H0_AZs: `framer-v-10iy4tm`,
    }),
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
    (Y = (e, t) => `translateY(-50%) ${t}`),
    (X = (e, t, n) => {
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
    (Z = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (Q = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = ue({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (je = ({ value: e }) =>
      pe()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Me = { Desktop: `IwgLxcoOT`, Phone: `dxYCPQwE1`, Tablet: `PJ7H0_AZs` }),
    (Ne = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Me[r.variant] ?? r.variant ?? `IwgLxcoOT`,
    })),
    ($ = de(
      i(function (e, i) {
        let s = t(null),
          te = i ?? s,
          l = ne(),
          { activeLocale: f, setLocale: p } = he(),
          m = fe(),
          { style: ie, className: y, layoutId: ue, variant: de, ...pe } = Ne(e);
        se(ee(() => xe({}, f), [f]));
        let [T, ve] = ae(de, Oe, !1),
          { activeVariantCallback: k, delay: ye } = ge(void 0),
          A = ({ overlay: e, loadMore: t }) =>
            k(async (...t) => {
              e.toggle();
            }),
          M = ({ overlay: e, loadMore: t }) =>
            k(async (...t) => {
              e.hide();
            }),
          N = h(ke, be),
          P = _e(`eMZW2sKra`),
          L = t(null);
        ce();
        let z = () => !W() || T === `dxYCPQwE1`,
          V = () => !W() || T !== `dxYCPQwE1`;
        return (
          le({}),
          o(oe.Provider, {
            value: { primaryVariantId: `IwgLxcoOT`, variantClassNames: Ae },
            children: c(re, {
              id: ue ?? l,
              children: [
                o(je, { value: `html body { background: rgb(255, 255, 255); }` }),
                o(u.div, {
                  ...pe,
                  className: h(N, `framer-1h8mrbj`, y),
                  ref: te,
                  style: { ...ie },
                  children: c(`section`, {
                    className: `framer-x11sx0`,
                    "data-framer-name": `Classes`,
                    id: P,
                    ref: L,
                    children: [
                      c(`div`, {
                        className: `framer-m8my2h`,
                        "data-framer-name": `Text`,
                        children: [
                          o(me, {
                            href: { webPageId: `Pinumpnx5` },
                            motionChild: !0,
                            nodeId: `GcwMFLB0u`,
                            openInNewTab: !1,
                            scopeId: `MhKEpFh9_`,
                            children: o(u.a, {
                              className: `framer-dootbr framer-1jdbqzi`,
                              children: o(I, {
                                animated: !1,
                                BKVe8Pgvw: !0,
                                className: `framer-n2eua6`,
                                fICyAUQY1: !0,
                                layoutId: `qqlYZYc6m`,
                                lKf_CQTz5: !0,
                              }),
                            }),
                          }),
                          o(v, {
                            breakpoint: T,
                            overrides: {
                              dxYCPQwE1: { y: (m?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
                              PJ7H0_AZs: { y: (m?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
                            },
                            children: o(C, {
                              height: 26,
                              y: (m?.y || 0) + 0 + 0 + 96 + 0 + 0 + 36,
                              children: o(U, {
                                __framer__animate: { transition: K },
                                __framer__animateOnce: !0,
                                __framer__enter: G,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-19fzkl6-container`,
                                nodeId: `t3Jj1rl_E`,
                                rendersWithMotion: !0,
                                scopeId: `MhKEpFh9_`,
                                children: o(R, {
                                  ggTbrSuHk: `Hand tools`,
                                  height: `100%`,
                                  id: `t3Jj1rl_E`,
                                  layoutId: `t3Jj1rl_E`,
                                  variant: `z6oSgdJxk`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          o(Ce, {
                            __framer__animate: { transition: q },
                            __framer__animateOnce: !0,
                            __framer__enter: G,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: o(n, {
                              children: o(`h3`, {
                                className: `framer-styles-preset-1d7ew99`,
                                "data-styles-preset": `nl385Jssa`,
                                children: `Spanners`,
                              }),
                            }),
                            className: `framer-ljk66k`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          o(C, {
                            children: o(b, {
                              className: `framer-1kejc5g-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `loI8dEtcW`,
                              scopeId: `MhKEpFh9_`,
                              children: o(O, {
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
                                id: `loI8dEtcW`,
                                layoutId: `loI8dEtcW`,
                                padding: 0,
                                paddingBottom: 0,
                                paddingLeft: 0,
                                paddingPerSide: !1,
                                paddingRight: 0,
                                paddingTop: 0,
                                sizingOptions: { heightType: !0, widthType: !0 },
                                slots: [
                                  o(w, {
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
                                    className: `framer-xjs84y`,
                                    "data-framer-name": `Logo 1`,
                                  }),
                                  o(w, {
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
                                    className: `framer-1tj6gtj`,
                                    "data-framer-name": `Logo 6`,
                                  }),
                                  o(w, {
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
                                    className: `framer-1nsfvd2`,
                                    "data-framer-name": `Logo 7`,
                                  }),
                                  o(w, {
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
                                    className: `framer-5uo1nd`,
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
                      c(`div`, {
                        className: `framer-11u03tc`,
                        "data-framer-name": `ClassesGallery`,
                        children: [
                          o(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `GSOmLXkyw` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `GSOmLXkyw` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `GSOmLXkyw` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        dxYCPQwE1: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 0,
                                        },
                                        PJ7H0_AZs: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 0,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 0,
                                        children: c(b, {
                                          className: `framer-1g4j6gj-container`,
                                          id: `1g4j6gj`,
                                          nodeId: `DMd9JwYRa`,
                                          scopeId: `MhKEpFh9_`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                dxYCPQwE1: { oSlFkYxO1: t[2] },
                                                PJ7H0_AZs: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(B, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 441,
                                                    pixelWidth: 566,
                                                    src: `../../assets/images/LnCdGVp4DQMETNtS8gWW27dkk.webp?width=566&height=441`,
                                                    srcSet: `../../assets/images/LnCdGVp4DQMETNtS8gWW27dkk.webp 512w,../../assets/images/LnCdGVp4DQMETNtS8gWW27dkk.webp?width=566&height=441 566w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `DMd9JwYRa`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Tubular Spanner Set`,
                                                layoutId: `DMd9JwYRa`,
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
                                                      triggerId: `1g4j6gj`,
                                                      children: c(D, {
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
                                                              className: h(N, `framer-w7abkz`),
                                                              "data-framer-portal-id": `1g4j6gj`,
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
                                                            `P84cxQt1W`
                                                          ),
                                                          o(u.div, {
                                                            className: h(N, `framer-x237s6`),
                                                            "data-framer-portal-id": `1g4j6gj`,
                                                            transformTemplate: Y,
                                                            children: c(u.div, {
                                                              className: `framer-m87586`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-btn5pp`,
                                                                  children: [
                                                                    o(E, {
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
                                                                      className: `framer-euzcc9`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-1h8umfx`,
                                                                      onTap: M({ overlay: e }),
                                                                      children: o(j, {
                                                                        animated: !1,
                                                                        className: `framer-1p8jz9r`,
                                                                        layoutId: `XdVH63sXG`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/cb37d973-7003-4681-abe3-90effd94cc16/submit`,
                                                                  className: `framer-1sv76ph`,
                                                                  nodeId: `jwoQmKsZo`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-ck5ojk`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-dh49oi`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-om9r3s`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-ktmo5z`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-1iuz5ol`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-lzfugw`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1wd7eu9`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-3caooz`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-h1qzdr`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1j0kl7q`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-1jjqygh`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-pcp84u`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(v, {
                                                                          breakpoint: T,
                                                                          overrides: {
                                                                            dxYCPQwE1: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-ldw7ws-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `E2ri_jtq5`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `MhKEpFh9_`,
                                                                              children: o(F, {
                                                                                height: `100%`,
                                                                                id: `E2ri_jtq5`,
                                                                                layoutId: `E2ri_jtq5`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: X(
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
                                                    Z()
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
                          o(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `onrtkv5Mt` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `onrtkv5Mt` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `onrtkv5Mt` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        dxYCPQwE1: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 416,
                                        },
                                        PJ7H0_AZs: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 0,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 0,
                                        children: c(b, {
                                          className: `framer-1lvddvw-container`,
                                          id: `1lvddvw`,
                                          nodeId: `SGfGwTPwV`,
                                          scopeId: `MhKEpFh9_`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                dxYCPQwE1: { oSlFkYxO1: t[2] },
                                                PJ7H0_AZs: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(B, {
                                                height: `100%`,
                                                id: `SGfGwTPwV`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Double End Spanner`,
                                                layoutId: `SGfGwTPwV`,
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
                                                      triggerId: `1lvddvw`,
                                                      children: c(D, {
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
                                                              className: h(N, `framer-nxu5v1`),
                                                              "data-framer-portal-id": `1lvddvw`,
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
                                                            `e91oHXSmN`
                                                          ),
                                                          o(u.div, {
                                                            className: h(N, `framer-1yspkht`),
                                                            "data-framer-portal-id": `1lvddvw`,
                                                            transformTemplate: Y,
                                                            children: c(u.div, {
                                                              className: `framer-9x9hi3`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-1bycfdf`,
                                                                  children: [
                                                                    o(E, {
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
                                                                      className: `framer-117epb7`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-1qp6oo8`,
                                                                      onTap: M({ overlay: e }),
                                                                      children: o(j, {
                                                                        animated: !1,
                                                                        className: `framer-143lgez`,
                                                                        layoutId: `Y0l5x3LVv`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/9cf5f9d6-1621-4ae2-8071-be532b4d294b/submit`,
                                                                  className: `framer-1phs92q`,
                                                                  nodeId: `GZQGK1LHA`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-14wxphe`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-1rlljqv`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-ad8qon`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1d4kxzs`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-1gqb8he`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-peq90q`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-7tgjm6`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-1zqqur`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-7g76zl`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-cr8752`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-csyfqw`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-shopro`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(v, {
                                                                          breakpoint: T,
                                                                          overrides: {
                                                                            dxYCPQwE1: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-rr02ki-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `wbd1M12gf`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `MhKEpFh9_`,
                                                                              children: o(F, {
                                                                                height: `100%`,
                                                                                id: `wbd1M12gf`,
                                                                                layoutId: `wbd1M12gf`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: X(
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
                                                    Z()
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
                          o(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `MIpk7j8iV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `MIpk7j8iV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `MIpk7j8iV` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        dxYCPQwE1: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 832,
                                        },
                                        PJ7H0_AZs: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 416,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 0,
                                        children: c(b, {
                                          className: `framer-4fdjaq-container`,
                                          id: `4fdjaq`,
                                          nodeId: `OOrOqA5Ea`,
                                          scopeId: `MhKEpFh9_`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                dxYCPQwE1: { oSlFkYxO1: t[2] },
                                                PJ7H0_AZs: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(B, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 469,
                                                    src: `../../assets/images/dSuF3OP402ySAstbMRQo8cohAtM.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `OOrOqA5Ea`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Cross Rim Spanner`,
                                                layoutId: `OOrOqA5Ea`,
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
                                                      triggerId: `4fdjaq`,
                                                      children: c(D, {
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
                                                              className: h(N, `framer-1nnagyv`),
                                                              "data-framer-portal-id": `4fdjaq`,
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
                                                            `ROMUyRQR3`
                                                          ),
                                                          o(u.div, {
                                                            className: h(N, `framer-ojwi34`),
                                                            "data-framer-portal-id": `4fdjaq`,
                                                            transformTemplate: Y,
                                                            children: c(u.div, {
                                                              className: `framer-a1ky55`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-1wkkrr9`,
                                                                  children: [
                                                                    o(E, {
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
                                                                      className: `framer-1v2ka4m`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-a5o2ie`,
                                                                      onTap: M({ overlay: e }),
                                                                      children: o(j, {
                                                                        animated: !1,
                                                                        className: `framer-1v82xxj`,
                                                                        layoutId: `KlWO2oTlQ`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/f158301f-6c9d-4518-a6ec-8743f3e3e180/submit`,
                                                                  className: `framer-1iy4ytt`,
                                                                  nodeId: `YGGFMxgOy`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-3l2zxq`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-138a2uh`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-siq49s`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-uhmxot`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-1u56ab6`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1nkzpep`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-bq59df`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-kad0bk`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1tvgqij`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-4ggm7h`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-1evznh2`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-6z67pp`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(v, {
                                                                          breakpoint: T,
                                                                          overrides: {
                                                                            dxYCPQwE1: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-1y9gz57-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `eAX2DI9h_`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `MhKEpFh9_`,
                                                                              children: o(F, {
                                                                                height: `100%`,
                                                                                id: `eAX2DI9h_`,
                                                                                layoutId: `eAX2DI9h_`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: X(
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
                                                    Z()
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
                          o(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `xEwFyYyRT` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `xEwFyYyRT` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `xEwFyYyRT` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        dxYCPQwE1: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1248,
                                        },
                                        PJ7H0_AZs: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 416,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 416,
                                        children: c(b, {
                                          className: `framer-1sxbd4x-container`,
                                          id: `1sxbd4x`,
                                          nodeId: `tu0xXi_39`,
                                          scopeId: `MhKEpFh9_`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                dxYCPQwE1: { oSlFkYxO1: t[2] },
                                                PJ7H0_AZs: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(B, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 500,
                                                    pixelWidth: 500,
                                                    src: `../../assets/images/aomniLUOw0dsFq957bVLlcBVSY.webp`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `tu0xXi_39`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Combination Spanner`,
                                                layoutId: `tu0xXi_39`,
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
                                                      triggerId: `1sxbd4x`,
                                                      children: c(D, {
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
                                                              className: h(N, `framer-b2srq7`),
                                                              "data-framer-portal-id": `1sxbd4x`,
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
                                                            `xJ8yMaap4`
                                                          ),
                                                          o(u.div, {
                                                            className: h(N, `framer-z95j3y`),
                                                            "data-framer-portal-id": `1sxbd4x`,
                                                            transformTemplate: Y,
                                                            children: c(u.div, {
                                                              className: `framer-1jwnp97`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-83v228`,
                                                                  children: [
                                                                    o(E, {
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
                                                                      className: `framer-107kess`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-c4cell`,
                                                                      onTap: M({ overlay: e }),
                                                                      children: o(j, {
                                                                        animated: !1,
                                                                        className: `framer-kyfxom`,
                                                                        layoutId: `YuZ4pM2UP`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/b7964186-18a7-44f1-a227-7fa44ecf9b26/submit`,
                                                                  className: `framer-buao3s`,
                                                                  nodeId: `cbl8OT5BF`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-10ribev`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-lkfxtd`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-18pgsoi`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1i93k9x`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-npl13q`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-wn8smw`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-iqhdyl`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-15miptk`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-17oc8ko`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-ij8ngr`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-uj86s9`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1e0nnsx`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(v, {
                                                                          breakpoint: T,
                                                                          overrides: {
                                                                            dxYCPQwE1: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-ceshpk-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `NrroMr8af`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `MhKEpFh9_`,
                                                                              children: o(F, {
                                                                                height: `100%`,
                                                                                id: `NrroMr8af`,
                                                                                layoutId: `NrroMr8af`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: X(
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
                                                    Z()
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
                          o(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `WJ9h5Qa5O` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `WJ9h5Qa5O` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `WJ9h5Qa5O` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        dxYCPQwE1: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1664,
                                        },
                                        PJ7H0_AZs: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 832,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 416,
                                        children: c(b, {
                                          className: `framer-9eewzy-container`,
                                          id: `9eewzy`,
                                          nodeId: `sSQGnYtO4`,
                                          scopeId: `MhKEpFh9_`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                dxYCPQwE1: { oSlFkYxO1: t[2] },
                                                PJ7H0_AZs: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(B, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 618,
                                                    pixelWidth: 884,
                                                    src: `../../assets/images/FHwxbDkFjSRhsaNp0DR327XQS4.png?width=884&height=618`,
                                                    srcSet: `../../assets/images/FHwxbDkFjSRhsaNp0DR327XQS4.png 512w,../../assets/images/FHwxbDkFjSRhsaNp0DR327XQS4.png?width=884&height=618 884w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `sSQGnYtO4`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Combination Spanner Set`,
                                                layoutId: `sSQGnYtO4`,
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
                                                      triggerId: `9eewzy`,
                                                      children: c(D, {
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
                                                              className: h(N, `framer-11t3o47`),
                                                              "data-framer-portal-id": `9eewzy`,
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
                                                            `JMoZU0goH`
                                                          ),
                                                          o(u.div, {
                                                            className: h(N, `framer-t2m446`),
                                                            "data-framer-portal-id": `9eewzy`,
                                                            transformTemplate: Y,
                                                            children: c(u.div, {
                                                              className: `framer-xkt670`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-14zoz02`,
                                                                  children: [
                                                                    o(E, {
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
                                                                      className: `framer-tpimk0`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-mj8gdh`,
                                                                      onTap: M({ overlay: e }),
                                                                      children: o(j, {
                                                                        animated: !1,
                                                                        className: `framer-ii4utf`,
                                                                        layoutId: `QXqGaif3e`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/d166021f-d5e8-4432-a0e6-1a707534f1bf/submit`,
                                                                  className: `framer-1ylkov1`,
                                                                  nodeId: `TcpsaR1nV`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-1giyfgc`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-es97q9`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1c6ee6x`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-lh55u4`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-akykvr`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1fjes0d`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-yv69ox`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-1wcwiyq`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1pq173y`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1g48lr0`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-1nyo65y`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-119h8sq`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(v, {
                                                                          breakpoint: T,
                                                                          overrides: {
                                                                            dxYCPQwE1: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-1jb5kai-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `FiCW_DQez`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `MhKEpFh9_`,
                                                                              children: o(F, {
                                                                                height: `100%`,
                                                                                id: `FiCW_DQez`,
                                                                                layoutId: `FiCW_DQez`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: X(
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
                                                    Z()
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
                          z() &&
                            o(Q, {
                              dismissWithEsc: !0,
                              children: (e) =>
                                o(r, {
                                  children: o(g, {
                                    links: [
                                      {
                                        href: { webPageId: `onrtkv5Mt` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `onrtkv5Mt` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (t) =>
                                      o(v, {
                                        breakpoint: T,
                                        overrides: {
                                          dxYCPQwE1: {
                                            height: 400,
                                            width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                            y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2080,
                                          },
                                        },
                                        children: o(C, {
                                          children: c(U, {
                                            __framer__animate: { transition: K },
                                            __framer__animateOnce: !0,
                                            __framer__enter: G,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1m7wgj4-container hidden-1h8mrbj hidden-10iy4tm`,
                                            id: `1m7wgj4`,
                                            nodeId: `T9eg2qwrU`,
                                            rendersWithMotion: !0,
                                            scopeId: `MhKEpFh9_`,
                                            children: [
                                              o(v, {
                                                breakpoint: T,
                                                overrides: { dxYCPQwE1: { oSlFkYxO1: t[1] } },
                                                children: o(B, {
                                                  BlDyCL1Hj: J(
                                                    {
                                                      pixelHeight: 965,
                                                      pixelWidth: 1772,
                                                      src: `../../assets/images/85w2j8h86titir9kHX4sKQIJJ4Q.png`,
                                                      srcSet: `../../assets/images/85w2j8h86titir9kHX4sKQIJJ4Q.png?scale-down-to=512&width=1772&height=965 512w,../../assets/images/85w2j8h86titir9kHX4sKQIJJ4Q.png?scale-down-to=1024&width=1772&height=965 1024w,../../assets/images/85w2j8h86titir9kHX4sKQIJJ4Q.png 1772w`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `T9eg2qwrU`,
                                                  jTs_fuWrm: A({ overlay: e }),
                                                  JWP0bNV85: `Double Hand Spanner`,
                                                  layoutId: `T9eg2qwrU`,
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
                                                        triggerId: `1m7wgj4`,
                                                        children: c(D, {
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
                                                                className: h(N, `framer-1itf4ra`),
                                                                "data-framer-portal-id": `1m7wgj4`,
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
                                                              `HPrmIh3nR`
                                                            ),
                                                            o(u.div, {
                                                              className: h(N, `framer-mxz3pz`),
                                                              "data-framer-portal-id": `1m7wgj4`,
                                                              transformTemplate: Y,
                                                              children: c(u.div, {
                                                                className: `framer-1bgeq2a`,
                                                                children: [
                                                                  c(u.div, {
                                                                    className: `framer-1cxdvqe`,
                                                                    children: [
                                                                      o(E, {
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
                                                                        className: `framer-1908ps6`,
                                                                        fonts: [`Inter-Bold`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(u.div, {
                                                                        className: `framer-1k82ogd`,
                                                                        onTap: M({ overlay: e }),
                                                                        children: o(j, {
                                                                          animated: !1,
                                                                          className: `framer-4u2rwc`,
                                                                          layoutId: `jm4EpEWoZ`,
                                                                          UO5clYVeQ: !0,
                                                                        }),
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  o(x, {
                                                                    className: `framer-1ttbytm`,
                                                                    nodeId: `UxB449eX9`,
                                                                    children: (e) =>
                                                                      c(r, {
                                                                        children: [
                                                                          c(u.label, {
                                                                            className: `framer-1xnt0la`,
                                                                            children: [
                                                                              o(E, {
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
                                                                                    children: `Name`,
                                                                                  }),
                                                                                }),
                                                                                className: `framer-19n6i2a`,
                                                                                fonts: [
                                                                                  `Inter-Medium`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              o(S, {
                                                                                className: `framer-1bvfjbq`,
                                                                                inputName: `Name`,
                                                                                placeholder: ``,
                                                                                type: `text`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          c(u.label, {
                                                                            className: `framer-zhbssv`,
                                                                            children: [
                                                                              o(E, {
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
                                                                                className: `framer-a73v5j`,
                                                                                fonts: [
                                                                                  `Inter-Medium`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              o(S, {
                                                                                className: `framer-1y4556g`,
                                                                                inputName: `Email`,
                                                                                placeholder: ``,
                                                                                required: !1,
                                                                                type: `email`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          c(u.label, {
                                                                            className: `framer-1qw620p`,
                                                                            children: [
                                                                              o(E, {
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
                                                                                className: `framer-1prckmk`,
                                                                                fonts: [
                                                                                  `Inter-Medium`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              o(S, {
                                                                                className: `framer-1iz781r`,
                                                                                inputName: `Mobile Number`,
                                                                                placeholder: ``,
                                                                                type: `tel`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          c(u.label, {
                                                                            className: `framer-7agh8f`,
                                                                            children: [
                                                                              o(E, {
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
                                                                                className: `framer-xiwhnf`,
                                                                                fonts: [
                                                                                  `Inter-Medium`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              o(S, {
                                                                                className: `framer-j01zht`,
                                                                                inputName: `Make, Model & Size`,
                                                                                placeholder: ``,
                                                                                type: `text`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          o(C, {
                                                                            width: `221px`,
                                                                            children: o(b, {
                                                                              className: `framer-5jas5-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `Xu8Tuxk90`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `MhKEpFh9_`,
                                                                              children: o(F, {
                                                                                height: `100%`,
                                                                                id: `Xu8Tuxk90`,
                                                                                layoutId: `Xu8Tuxk90`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: X(
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
                                                                        ],
                                                                      }),
                                                                  }),
                                                                ],
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      }),
                                                      Z()
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
                          z() &&
                            o(Q, {
                              dismissWithEsc: !0,
                              children: (e) =>
                                o(r, {
                                  children: o(g, {
                                    links: [
                                      {
                                        href: { webPageId: `Q9uYEjBB8` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `Q9uYEjBB8` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (t) =>
                                      o(v, {
                                        breakpoint: T,
                                        overrides: {
                                          dxYCPQwE1: {
                                            height: 400,
                                            width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                            y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2496,
                                          },
                                        },
                                        children: o(C, {
                                          children: c(U, {
                                            __framer__animate: { transition: K },
                                            __framer__animateOnce: !0,
                                            __framer__enter: G,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-h76w3k-container hidden-1h8mrbj hidden-10iy4tm`,
                                            id: `h76w3k`,
                                            nodeId: `TvoDNq71F`,
                                            rendersWithMotion: !0,
                                            scopeId: `MhKEpFh9_`,
                                            children: [
                                              o(v, {
                                                breakpoint: T,
                                                overrides: { dxYCPQwE1: { oSlFkYxO1: t[1] } },
                                                children: o(B, {
                                                  BlDyCL1Hj: J(
                                                    {
                                                      pixelHeight: 160,
                                                      pixelWidth: 360,
                                                      src: `../../assets/images/dcntVv3wmgF75c2s2s0fZLgr5T8.png`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `TvoDNq71F`,
                                                  jTs_fuWrm: A({ overlay: e }),
                                                  JWP0bNV85: `L Spanner with Jack Hole`,
                                                  layoutId: `TvoDNq71F`,
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
                                                        triggerId: `h76w3k`,
                                                        children: c(D, {
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
                                                                className: h(N, `framer-h3ug4r`),
                                                                "data-framer-portal-id": `h76w3k`,
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
                                                              `jcCKDLdNS`
                                                            ),
                                                            o(u.div, {
                                                              className: h(N, `framer-1pn4l1z`),
                                                              "data-framer-portal-id": `h76w3k`,
                                                              transformTemplate: Y,
                                                              children: c(u.div, {
                                                                className: `framer-1xy46j9`,
                                                                children: [
                                                                  c(u.div, {
                                                                    className: `framer-cwvibe`,
                                                                    children: [
                                                                      o(E, {
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
                                                                        className: `framer-yr7pi2`,
                                                                        fonts: [`Inter-Bold`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(u.div, {
                                                                        className: `framer-u1ts1`,
                                                                        onTap: M({ overlay: e }),
                                                                        children: o(j, {
                                                                          animated: !1,
                                                                          className: `framer-1qrdpjx`,
                                                                          layoutId: `Gb51aaRFm`,
                                                                          UO5clYVeQ: !0,
                                                                        }),
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  o(x, {
                                                                    className: `framer-1ui8m9c`,
                                                                    nodeId: `ujuuDJ3ci`,
                                                                    children: (e) =>
                                                                      c(r, {
                                                                        children: [
                                                                          c(u.label, {
                                                                            className: `framer-1da2nm4`,
                                                                            children: [
                                                                              o(E, {
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
                                                                                    children: `Name`,
                                                                                  }),
                                                                                }),
                                                                                className: `framer-vey7iq`,
                                                                                fonts: [
                                                                                  `Inter-Medium`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              o(S, {
                                                                                className: `framer-hm79o3`,
                                                                                inputName: `Name`,
                                                                                placeholder: ``,
                                                                                type: `text`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          c(u.label, {
                                                                            className: `framer-1bx7560`,
                                                                            children: [
                                                                              o(E, {
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
                                                                                className: `framer-11jo7xn`,
                                                                                fonts: [
                                                                                  `Inter-Medium`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              o(S, {
                                                                                className: `framer-1oyhb0t`,
                                                                                inputName: `Email`,
                                                                                placeholder: ``,
                                                                                required: !1,
                                                                                type: `email`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          c(u.label, {
                                                                            className: `framer-16e2zzn`,
                                                                            children: [
                                                                              o(E, {
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
                                                                                className: `framer-o0hn9x`,
                                                                                fonts: [
                                                                                  `Inter-Medium`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              o(S, {
                                                                                className: `framer-1rr4nlv`,
                                                                                inputName: `Mobile Number`,
                                                                                placeholder: ``,
                                                                                type: `tel`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          c(u.label, {
                                                                            className: `framer-geog9w`,
                                                                            children: [
                                                                              o(E, {
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
                                                                                className: `framer-1gn2aoe`,
                                                                                fonts: [
                                                                                  `Inter-Medium`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              o(S, {
                                                                                className: `framer-11o4bj`,
                                                                                inputName: `Make, Model & Size`,
                                                                                placeholder: ``,
                                                                                type: `text`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          o(C, {
                                                                            width: `221px`,
                                                                            children: o(b, {
                                                                              className: `framer-1vd7aa-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `saC8DY2G7`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `MhKEpFh9_`,
                                                                              children: o(F, {
                                                                                height: `100%`,
                                                                                id: `saC8DY2G7`,
                                                                                layoutId: `saC8DY2G7`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: X(
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
                                                                        ],
                                                                      }),
                                                                  }),
                                                                ],
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      }),
                                                      Z()
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
                          V() &&
                            o(Q, {
                              dismissWithEsc: !0,
                              children: (e) =>
                                o(r, {
                                  children: o(g, {
                                    links: [
                                      {
                                        href: { webPageId: `MwM39S1e9` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `MwM39S1e9` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (t) =>
                                      o(v, {
                                        breakpoint: T,
                                        overrides: {
                                          PJ7H0_AZs: {
                                            width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                            y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 832,
                                          },
                                        },
                                        children: o(C, {
                                          height: 400,
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 416,
                                          children: c(b, {
                                            className: `framer-10zrlyx-container hidden-1gd4er6`,
                                            id: `10zrlyx`,
                                            nodeId: `HOiIZPnWZ`,
                                            scopeId: `MhKEpFh9_`,
                                            children: [
                                              o(v, {
                                                breakpoint: T,
                                                overrides: { PJ7H0_AZs: { oSlFkYxO1: t[1] } },
                                                children: o(B, {
                                                  BlDyCL1Hj: J(
                                                    {
                                                      pixelHeight: 965,
                                                      pixelWidth: 1772,
                                                      src: `../../assets/images/85w2j8h86titir9kHX4sKQIJJ4Q.png`,
                                                      srcSet: `../../assets/images/85w2j8h86titir9kHX4sKQIJJ4Q.png?scale-down-to=512&width=1772&height=965 512w,../../assets/images/85w2j8h86titir9kHX4sKQIJJ4Q.png?scale-down-to=1024&width=1772&height=965 1024w,../../assets/images/85w2j8h86titir9kHX4sKQIJJ4Q.png 1772w`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `HOiIZPnWZ`,
                                                  jTs_fuWrm: A({ overlay: e }),
                                                  JWP0bNV85: `Double End Spanner Set`,
                                                  layoutId: `HOiIZPnWZ`,
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
                                                        triggerId: `10zrlyx`,
                                                        children: c(D, {
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
                                                                className: h(N, `framer-oisxvl`),
                                                                "data-framer-portal-id": `10zrlyx`,
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
                                                              `IbPXbzgo4`
                                                            ),
                                                            o(u.div, {
                                                              className: h(N, `framer-b57fae`),
                                                              "data-framer-portal-id": `10zrlyx`,
                                                              transformTemplate: Y,
                                                              children: c(u.div, {
                                                                className: `framer-1rot7pq`,
                                                                children: [
                                                                  c(u.div, {
                                                                    className: `framer-1k3l3ny`,
                                                                    children: [
                                                                      o(E, {
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
                                                                        className: `framer-17ecqsg`,
                                                                        fonts: [`Inter-Bold`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(u.div, {
                                                                        className: `framer-gtkfem`,
                                                                        onTap: M({ overlay: e }),
                                                                        children: o(j, {
                                                                          animated: !1,
                                                                          className: `framer-dxk8kz`,
                                                                          layoutId: `wsJQRAnKf`,
                                                                          UO5clYVeQ: !0,
                                                                        }),
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  o(x, {
                                                                    action: `https://api.framer.com/forms/v1/forms/4f20fc83-e5ee-4df7-973c-e935ecd9c6ea/submit`,
                                                                    className: `framer-j20sm3`,
                                                                    nodeId: `qz71KKQqO`,
                                                                    children: (e) =>
                                                                      c(r, {
                                                                        children: [
                                                                          c(u.label, {
                                                                            className: `framer-2ecfrt`,
                                                                            children: [
                                                                              o(E, {
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
                                                                                className: `framer-196hfmb`,
                                                                                fonts: [
                                                                                  `Inter-Medium`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              o(S, {
                                                                                className: `framer-1qasas9`,
                                                                                inputName: `Email`,
                                                                                placeholder: ``,
                                                                                type: `text`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          c(u.label, {
                                                                            className: `framer-69tqdo`,
                                                                            children: [
                                                                              o(E, {
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
                                                                                className: `framer-1um7vwc`,
                                                                                fonts: [
                                                                                  `Inter-Medium`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              o(S, {
                                                                                className: `framer-2dq145`,
                                                                                inputName: `Mobile Number`,
                                                                                placeholder: ``,
                                                                                required: !1,
                                                                                type: `tel`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          c(u.label, {
                                                                            className: `framer-8emaqq`,
                                                                            children: [
                                                                              o(E, {
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
                                                                                className: `framer-1ifr9j6`,
                                                                                fonts: [
                                                                                  `Inter-Medium`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              o(S, {
                                                                                className: `framer-yx3pdu`,
                                                                                inputName: `Product Name`,
                                                                                placeholder: ``,
                                                                                type: `text`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          c(u.label, {
                                                                            className: `framer-2znmiu`,
                                                                            children: [
                                                                              o(E, {
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
                                                                                className: `framer-xjrll1`,
                                                                                fonts: [
                                                                                  `Inter-Medium`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              o(S, {
                                                                                className: `framer-1avgtsj`,
                                                                                inputName: `Make, Model & Size`,
                                                                                placeholder: ``,
                                                                                required: !0,
                                                                                type: `text`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-1jo1hd7-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `JExW9u0Jg`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `MhKEpFh9_`,
                                                                              children: o(F, {
                                                                                height: `100%`,
                                                                                id: `JExW9u0Jg`,
                                                                                layoutId: `JExW9u0Jg`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: X(
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
                                                                        ],
                                                                      }),
                                                                  }),
                                                                ],
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      }),
                                                      Z()
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
                          V() &&
                            o(Q, {
                              dismissWithEsc: !0,
                              children: (e) =>
                                o(r, {
                                  children: o(g, {
                                    links: [
                                      {
                                        href: { webPageId: `Q9uYEjBB8` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `Q9uYEjBB8` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (t) =>
                                      o(v, {
                                        breakpoint: T,
                                        overrides: {
                                          PJ7H0_AZs: {
                                            width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                            y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1248,
                                          },
                                        },
                                        children: o(C, {
                                          height: 400,
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 832,
                                          children: c(b, {
                                            className: `framer-713go8-container hidden-1gd4er6`,
                                            id: `713go8`,
                                            nodeId: `sQ6bC_tkf`,
                                            scopeId: `MhKEpFh9_`,
                                            children: [
                                              o(v, {
                                                breakpoint: T,
                                                overrides: { PJ7H0_AZs: { oSlFkYxO1: t[1] } },
                                                children: o(B, {
                                                  BlDyCL1Hj: J(
                                                    {
                                                      pixelHeight: 160,
                                                      pixelWidth: 360,
                                                      src: `../../assets/images/dcntVv3wmgF75c2s2s0fZLgr5T8.png`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `sQ6bC_tkf`,
                                                  jTs_fuWrm: A({ overlay: e }),
                                                  JWP0bNV85: `L Spanner with Jack Hole`,
                                                  layoutId: `sQ6bC_tkf`,
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
                                                        triggerId: `713go8`,
                                                        children: c(D, {
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
                                                                className: h(N, `framer-1s2kv2t`),
                                                                "data-framer-portal-id": `713go8`,
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
                                                              `eDr8Xr0G1`
                                                            ),
                                                            o(u.div, {
                                                              className: h(N, `framer-48forh`),
                                                              "data-framer-portal-id": `713go8`,
                                                              transformTemplate: Y,
                                                              children: c(u.div, {
                                                                className: `framer-1ot37by`,
                                                                children: [
                                                                  c(u.div, {
                                                                    className: `framer-omoj9z`,
                                                                    children: [
                                                                      o(E, {
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
                                                                        className: `framer-1ms3bbt`,
                                                                        fonts: [`Inter-Bold`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(u.div, {
                                                                        className: `framer-1kgj6oa`,
                                                                        onTap: M({ overlay: e }),
                                                                        children: o(j, {
                                                                          animated: !1,
                                                                          className: `framer-1vkss9j`,
                                                                          layoutId: `KFwR_PAzN`,
                                                                          UO5clYVeQ: !0,
                                                                        }),
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  o(x, {
                                                                    action: `https://api.framer.com/forms/v1/forms/e6f77722-3e41-4aa4-989f-f674a7bddf95/submit`,
                                                                    className: `framer-rz7i87`,
                                                                    nodeId: `dcIZKCvFb`,
                                                                    children: (e) =>
                                                                      c(r, {
                                                                        children: [
                                                                          c(u.label, {
                                                                            className: `framer-ms2gje`,
                                                                            children: [
                                                                              o(E, {
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
                                                                                className: `framer-x7x2pe`,
                                                                                fonts: [
                                                                                  `Inter-Medium`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              o(S, {
                                                                                className: `framer-1mc190t`,
                                                                                inputName: `Email`,
                                                                                placeholder: ``,
                                                                                type: `text`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          c(u.label, {
                                                                            className: `framer-dwxa3m`,
                                                                            children: [
                                                                              o(E, {
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
                                                                                className: `framer-16oi1es`,
                                                                                fonts: [
                                                                                  `Inter-Medium`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              o(S, {
                                                                                className: `framer-1cxdr9w`,
                                                                                inputName: `Mobile Number`,
                                                                                placeholder: ``,
                                                                                required: !1,
                                                                                type: `tel`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          c(u.label, {
                                                                            className: `framer-i1tryp`,
                                                                            children: [
                                                                              o(E, {
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
                                                                                className: `framer-8j8jwa`,
                                                                                fonts: [
                                                                                  `Inter-Medium`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              o(S, {
                                                                                className: `framer-1eut6ib`,
                                                                                inputName: `Product Name`,
                                                                                placeholder: ``,
                                                                                type: `text`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          c(u.label, {
                                                                            className: `framer-1rkb1t7`,
                                                                            children: [
                                                                              o(E, {
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
                                                                                className: `framer-qbdc50`,
                                                                                fonts: [
                                                                                  `Inter-Medium`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              o(S, {
                                                                                className: `framer-19jt7xx`,
                                                                                inputName: `Make, Model & Size`,
                                                                                placeholder: ``,
                                                                                required: !0,
                                                                                type: `text`,
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-rdtfq2-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `tyrNDvNUg`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `MhKEpFh9_`,
                                                                              children: o(F, {
                                                                                height: `100%`,
                                                                                id: `tyrNDvNUg`,
                                                                                layoutId: `tyrNDvNUg`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: X(
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
                                                                        ],
                                                                      }),
                                                                  }),
                                                                ],
                                                              }),
                                                            }),
                                                          ],
                                                        }),
                                                      }),
                                                      Z()
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
                          o(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `yuHWr9fJ4` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `yuHWr9fJ4` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `yuHWr9fJ4` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        dxYCPQwE1: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2912,
                                        },
                                        PJ7H0_AZs: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1248,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 832,
                                        children: c(b, {
                                          className: `framer-cwlwsb-container`,
                                          id: `cwlwsb`,
                                          nodeId: `yBqJgw2rR`,
                                          scopeId: `MhKEpFh9_`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                dxYCPQwE1: { oSlFkYxO1: t[2] },
                                                PJ7H0_AZs: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(B, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 273,
                                                    pixelWidth: 512,
                                                    src: `../../assets/images/7Q1WtdK3OhKmtybwNTTMStofX4Y.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `yBqJgw2rR`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Single End Spanner`,
                                                layoutId: `yBqJgw2rR`,
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
                                                      triggerId: `cwlwsb`,
                                                      children: c(D, {
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
                                                              className: h(N, `framer-16dxyab`),
                                                              "data-framer-portal-id": `cwlwsb`,
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
                                                            `i4QPspiIV`
                                                          ),
                                                          o(u.div, {
                                                            className: h(N, `framer-ha1hkn`),
                                                            "data-framer-portal-id": `cwlwsb`,
                                                            transformTemplate: Y,
                                                            children: c(u.div, {
                                                              className: `framer-b53j56`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-ngl1ap`,
                                                                  children: [
                                                                    o(E, {
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
                                                                      className: `framer-1e44uzz`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-v4ede0`,
                                                                      onTap: M({ overlay: e }),
                                                                      children: o(j, {
                                                                        animated: !1,
                                                                        className: `framer-me5ulv`,
                                                                        layoutId: `k6qCGCUGr`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/4d952a05-eb6d-4670-83f2-15b1cf04a4e7/submit`,
                                                                  className: `framer-vusbdh`,
                                                                  nodeId: `v8tm0m3he`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-160wxvc`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-p7nfjd`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-5vo98h`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1jyi1i0`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-1aba92c`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-13xcbiv`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1q81efg`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-15q2jc0`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1cgc6jn`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-f90axf`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-1mxdtzo`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-8o1roh`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(v, {
                                                                          breakpoint: T,
                                                                          overrides: {
                                                                            dxYCPQwE1: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-wk8ppm-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `Xv40r9Q_H`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `MhKEpFh9_`,
                                                                              children: o(F, {
                                                                                height: `100%`,
                                                                                id: `Xv40r9Q_H`,
                                                                                layoutId: `Xv40r9Q_H`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: X(
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
                                                    Z()
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
                          o(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `adgWJwWAv` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `adgWJwWAv` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `adgWJwWAv` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        dxYCPQwE1: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 3328,
                                        },
                                        PJ7H0_AZs: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1664,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 832,
                                        children: c(b, {
                                          className: `framer-17orm6t-container`,
                                          id: `17orm6t`,
                                          nodeId: `J7ajCQq_X`,
                                          scopeId: `MhKEpFh9_`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                dxYCPQwE1: { oSlFkYxO1: t[2] },
                                                PJ7H0_AZs: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(B, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 802,
                                                    pixelWidth: 2e3,
                                                    src: `../../assets/images/anGr1KLHR393DXwm2MRVacLfnI.png?width=2000&height=802`,
                                                    srcSet: `../../assets/images/anGr1KLHR393DXwm2MRVacLfnI.png 512w,../../assets/images/anGr1KLHR393DXwm2MRVacLfnI.png?scale-down-to=1024&width=2000&height=802 1024w,../../assets/images/anGr1KLHR393DXwm2MRVacLfnI.png?width=2000&height=802 2000w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `J7ajCQq_X`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Slogging Open End Spanner`,
                                                layoutId: `J7ajCQq_X`,
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
                                                      triggerId: `17orm6t`,
                                                      children: c(D, {
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
                                                              className: h(N, `framer-yveldw`),
                                                              "data-framer-portal-id": `17orm6t`,
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
                                                            `ho93EoUX2`
                                                          ),
                                                          o(u.div, {
                                                            className: h(N, `framer-1xxt9pn`),
                                                            "data-framer-portal-id": `17orm6t`,
                                                            transformTemplate: Y,
                                                            children: c(u.div, {
                                                              className: `framer-19v44e7`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-195nttb`,
                                                                  children: [
                                                                    o(E, {
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
                                                                      className: `framer-1oe4vnv`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-ytjwhs`,
                                                                      onTap: M({ overlay: e }),
                                                                      children: o(j, {
                                                                        animated: !1,
                                                                        className: `framer-887u8d`,
                                                                        layoutId: `ct7MuNTbJ`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/81ba486e-d955-4249-b31e-6196f2d80193/submit`,
                                                                  className: `framer-1dc6z10`,
                                                                  nodeId: `jsgpphnMl`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-agji90`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-l0aiw2`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-10jenga`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1g49glu`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-b8mgog`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1hwfbou`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1iittaz`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-1lajfo4`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-9ngm6l`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-xonscl`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-72w63`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-lwnu4l`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(v, {
                                                                          breakpoint: T,
                                                                          overrides: {
                                                                            dxYCPQwE1: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-18cvr0y-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `QrxysBNJY`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `MhKEpFh9_`,
                                                                              children: o(F, {
                                                                                height: `100%`,
                                                                                id: `QrxysBNJY`,
                                                                                layoutId: `QrxysBNJY`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: X(
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
                                                    Z()
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
                          o(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `NDPxZFY57` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `NDPxZFY57` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `NDPxZFY57` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        dxYCPQwE1: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 3744,
                                        },
                                        PJ7H0_AZs: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1664,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 1248,
                                        children: c(b, {
                                          className: `framer-1yhz822-container`,
                                          id: `1yhz822`,
                                          nodeId: `m01g1ZGWB`,
                                          scopeId: `MhKEpFh9_`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                dxYCPQwE1: { oSlFkYxO1: t[2] },
                                                PJ7H0_AZs: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(B, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 851,
                                                    pixelWidth: 2048,
                                                    src: `../../assets/images/z64LI5YPPmAga7sg430smKNWdS0.png?width=2048&height=851`,
                                                    srcSet: `../../assets/images/z64LI5YPPmAga7sg430smKNWdS0.png 512w,../../assets/images/z64LI5YPPmAga7sg430smKNWdS0.png?scale-down-to=1024&width=2048&height=851 1024w,../../assets/images/z64LI5YPPmAga7sg430smKNWdS0.png?width=2048&height=851 2048w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `m01g1ZGWB`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Slogging Ring Spanner`,
                                                layoutId: `m01g1ZGWB`,
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
                                                      triggerId: `1yhz822`,
                                                      children: c(D, {
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
                                                              className: h(N, `framer-1vu2vuc`),
                                                              "data-framer-portal-id": `1yhz822`,
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
                                                            `GEYP18kxk`
                                                          ),
                                                          o(u.div, {
                                                            className: h(N, `framer-rflii7`),
                                                            "data-framer-portal-id": `1yhz822`,
                                                            transformTemplate: Y,
                                                            children: c(u.div, {
                                                              className: `framer-9zly9q`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-c5u7v7`,
                                                                  children: [
                                                                    o(E, {
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
                                                                      className: `framer-1paz4gx`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-15ibgfd`,
                                                                      onTap: M({ overlay: e }),
                                                                      children: o(j, {
                                                                        animated: !1,
                                                                        className: `framer-18hdie9`,
                                                                        layoutId: `KEPYWx8s5`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/c6a50928-f091-4bf8-b6b8-6c7b975dfd4c/submit`,
                                                                  className: `framer-fx9frt`,
                                                                  nodeId: `Wn2_4wpy5`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-yr7rm1`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-11rcw9s`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-l7of3t`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-itvmvc`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-n6f4s9`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-cpu1um`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-mugdsf`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-th5pwq`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-r93o27`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1p8juu1`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-1vsco9v`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1mtq52p`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(v, {
                                                                          breakpoint: T,
                                                                          overrides: {
                                                                            dxYCPQwE1: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-1gyhpvt-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `cP2C7VTSv`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `MhKEpFh9_`,
                                                                              children: o(F, {
                                                                                height: `100%`,
                                                                                id: `cP2C7VTSv`,
                                                                                layoutId: `cP2C7VTSv`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: X(
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
                                                    Z()
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
                          o(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `vgwdmCi8w` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `vgwdmCi8w` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `vgwdmCi8w` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        dxYCPQwE1: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 4160,
                                        },
                                        PJ7H0_AZs: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2080,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 1248,
                                        children: c(b, {
                                          className: `framer-1708aya-container`,
                                          id: `1708aya`,
                                          nodeId: `oBQQiX7PH`,
                                          scopeId: `MhKEpFh9_`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                dxYCPQwE1: { oSlFkYxO1: t[2] },
                                                PJ7H0_AZs: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(B, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 564,
                                                    pixelWidth: 1200,
                                                    src: `../../assets/images/Rk4IIF5Pdbb8TmWFsE05NiBBg0U.png?width=1200&height=564`,
                                                    srcSet: `../../assets/images/Rk4IIF5Pdbb8TmWFsE05NiBBg0U.png 512w,../../assets/images/Rk4IIF5Pdbb8TmWFsE05NiBBg0U.png?scale-down-to=1024&width=1200&height=564 1024w,../../assets/images/Rk4IIF5Pdbb8TmWFsE05NiBBg0U.png?width=1200&height=564 1200w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `oBQQiX7PH`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Gear Wrench Combination`,
                                                layoutId: `oBQQiX7PH`,
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
                                                      triggerId: `1708aya`,
                                                      children: c(D, {
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
                                                              className: h(N, `framer-yz1osw`),
                                                              "data-framer-portal-id": `1708aya`,
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
                                                            `MptiGd2g8`
                                                          ),
                                                          o(u.div, {
                                                            className: h(N, `framer-16dsi3w`),
                                                            "data-framer-portal-id": `1708aya`,
                                                            transformTemplate: Y,
                                                            children: c(u.div, {
                                                              className: `framer-kxgdro`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-twjwx0`,
                                                                  children: [
                                                                    o(E, {
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
                                                                      className: `framer-11ilczl`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-1xweiv`,
                                                                      onTap: M({ overlay: e }),
                                                                      children: o(j, {
                                                                        animated: !1,
                                                                        className: `framer-bkubma`,
                                                                        layoutId: `LQg55bXUl`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/af5bad98-894e-482e-931d-9617b7747197/submit`,
                                                                  className: `framer-1s0qbnw`,
                                                                  nodeId: `HbIHsxzxu`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-15zi071`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-i5nd0z`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-lwqbs1`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1uxe73j`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-otyyvo`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-vj28n2`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1eegv3r`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-1b7bhxn`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1i695uf`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1xnhr7t`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-1bq6j1a`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-i7vuiu`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(v, {
                                                                          breakpoint: T,
                                                                          overrides: {
                                                                            dxYCPQwE1: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-1wxem6l-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `u6f_ndKRS`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `MhKEpFh9_`,
                                                                              children: o(F, {
                                                                                height: `100%`,
                                                                                id: `u6f_ndKRS`,
                                                                                layoutId: `u6f_ndKRS`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: X(
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
                                                    Z()
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
                          o(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `vVD9Z3R9o` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `vVD9Z3R9o` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `vVD9Z3R9o` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        dxYCPQwE1: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 4576,
                                        },
                                        PJ7H0_AZs: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2080,
                                        },
                                      },
                                      children: o(C, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 1248,
                                        children: c(b, {
                                          className: `framer-16grnj7-container`,
                                          id: `16grnj7`,
                                          nodeId: `UFXOoISAS`,
                                          scopeId: `MhKEpFh9_`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                dxYCPQwE1: { oSlFkYxO1: t[2] },
                                                PJ7H0_AZs: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(B, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 1057,
                                                    pixelWidth: 1558,
                                                    src: `../../assets/images/qZO7WcAtBuSfxuHj3NvL1CE1ydQ.png?width=1558&height=1057`,
                                                    srcSet: `../../assets/images/qZO7WcAtBuSfxuHj3NvL1CE1ydQ.png 512w,../../assets/images/qZO7WcAtBuSfxuHj3NvL1CE1ydQ.png?scale-down-to=1024&width=1558&height=1057 1024w,../../assets/images/qZO7WcAtBuSfxuHj3NvL1CE1ydQ.png?width=1558&height=1057 1558w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `UFXOoISAS`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Tubular Box Spanner`,
                                                layoutId: `UFXOoISAS`,
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
                                                      triggerId: `16grnj7`,
                                                      children: c(D, {
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
                                                              className: h(N, `framer-1mwav6x`),
                                                              "data-framer-portal-id": `16grnj7`,
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
                                                            `XI17sP25Z`
                                                          ),
                                                          o(u.div, {
                                                            className: h(N, `framer-17j5mhv`),
                                                            "data-framer-portal-id": `16grnj7`,
                                                            transformTemplate: Y,
                                                            children: c(u.div, {
                                                              className: `framer-1dmh6ws`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-12ezo6d`,
                                                                  children: [
                                                                    o(E, {
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
                                                                      className: `framer-1y2nt18`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-6yu8h8`,
                                                                      onTap: M({ overlay: e }),
                                                                      children: o(j, {
                                                                        animated: !1,
                                                                        className: `framer-12qlzo0`,
                                                                        layoutId: `A9jUEdmbY`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/48b15350-a70d-4857-80ae-6235d975b0f3/submit`,
                                                                  className: `framer-gymtl0`,
                                                                  nodeId: `Eo2LRGquQ`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-pexshf`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-fzryiy`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-753hsp`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-ab03hz`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-78d9za`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-ck0ghu`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-nhm1vd`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-lpeirl`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-1882j9d`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-4sbjjv`,
                                                                          children: [
                                                                            o(E, {
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
                                                                              className: `framer-1md93w`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(S, {
                                                                              className: `framer-mqtla9`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        o(v, {
                                                                          breakpoint: T,
                                                                          overrides: {
                                                                            dxYCPQwE1: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(C, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-124krub-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `OHGQRMXzO`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `MhKEpFh9_`,
                                                                              children: o(F, {
                                                                                height: `100%`,
                                                                                id: `OHGQRMXzO`,
                                                                                layoutId: `OHGQRMXzO`,
                                                                                style: {
                                                                                  height: `100%`,
                                                                                  width: `100%`,
                                                                                },
                                                                                type: `submit`,
                                                                                variant: X(
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
                                                    Z()
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
        `.framer-dS7O9.framer-1jdbqzi, .framer-dS7O9 .framer-1jdbqzi { display: block; }`,
        `.framer-dS7O9.framer-1h8mrbj { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-dS7O9 .framer-x11sx0 { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 96px 24px 96px 24px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-dS7O9 .framer-m8my2h { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-dS7O9 .framer-dootbr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-dS7O9 .framer-n2eua6 { --1335ju: 2; --18mrqx2: #000000; --3it368: 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-dS7O9 .framer-19fzkl6-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-dS7O9 .framer-ljk66k { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-dS7O9 .framer-1kejc5g-container { flex: none; height: 100px; position: relative; width: 339px; }`,
        `.framer-dS7O9 .framer-xjs84y { height: 50px; overflow: visible; position: relative; width: 50px; }`,
        `.framer-dS7O9 .framer-1tj6gtj { aspect-ratio: 1.6008403361344539 / 1; height: var(--framer-aspect-ratio-supported, 50px); overflow: visible; position: relative; width: 80px; }`,
        `.framer-dS7O9 .framer-1nsfvd2 { aspect-ratio: 1.842433697347894 / 1; height: var(--framer-aspect-ratio-supported, 43px); overflow: visible; position: relative; width: 79px; }`,
        `.framer-dS7O9 .framer-5uo1nd { aspect-ratio: 3.0225409836065578 / 1; height: var(--framer-aspect-ratio-supported, 23px); overflow: visible; position: relative; width: 70px; }`,
        `.framer-dS7O9 .framer-11u03tc { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-dS7O9 .framer-1g4j6gj-container, .framer-dS7O9 .framer-1lvddvw-container, .framer-dS7O9 .framer-4fdjaq-container, .framer-dS7O9 .framer-1sxbd4x-container, .framer-dS7O9 .framer-9eewzy-container, .framer-dS7O9 .framer-1m7wgj4-container, .framer-dS7O9 .framer-h76w3k-container, .framer-dS7O9 .framer-10zrlyx-container, .framer-dS7O9 .framer-713go8-container, .framer-dS7O9 .framer-cwlwsb-container, .framer-dS7O9 .framer-17orm6t-container, .framer-dS7O9 .framer-1yhz822-container, .framer-dS7O9 .framer-1708aya-container, .framer-dS7O9 .framer-16grnj7-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-dS7O9.framer-w7abkz, .framer-dS7O9.framer-nxu5v1, .framer-dS7O9.framer-1nnagyv, .framer-dS7O9.framer-b2srq7, .framer-dS7O9.framer-11t3o47, .framer-dS7O9.framer-oisxvl, .framer-dS7O9.framer-1s2kv2t, .framer-dS7O9.framer-16dxyab, .framer-dS7O9.framer-yveldw, .framer-dS7O9.framer-1vu2vuc, .framer-dS7O9.framer-yz1osw, .framer-dS7O9.framer-1mwav6x { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-dS7O9.framer-x237s6, .framer-dS7O9.framer-1yspkht, .framer-dS7O9.framer-ojwi34, .framer-dS7O9.framer-z95j3y, .framer-dS7O9.framer-t2m446, .framer-dS7O9.framer-b57fae, .framer-dS7O9.framer-48forh, .framer-dS7O9.framer-ha1hkn, .framer-dS7O9.framer-1xxt9pn, .framer-dS7O9.framer-rflii7, .framer-dS7O9.framer-16dsi3w, .framer-dS7O9.framer-17j5mhv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-dS7O9 .framer-m87586, .framer-dS7O9 .framer-9x9hi3, .framer-dS7O9 .framer-a1ky55, .framer-dS7O9 .framer-1jwnp97, .framer-dS7O9 .framer-xkt670, .framer-dS7O9 .framer-1rot7pq, .framer-dS7O9 .framer-1ot37by, .framer-dS7O9 .framer-b53j56, .framer-dS7O9 .framer-19v44e7, .framer-dS7O9 .framer-9zly9q, .framer-dS7O9 .framer-kxgdro, .framer-dS7O9 .framer-1dmh6ws { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-dS7O9 .framer-btn5pp, .framer-dS7O9 .framer-1bycfdf, .framer-dS7O9 .framer-1wkkrr9, .framer-dS7O9 .framer-83v228, .framer-dS7O9 .framer-14zoz02, .framer-dS7O9 .framer-1cxdvqe, .framer-dS7O9 .framer-cwvibe, .framer-dS7O9 .framer-1k3l3ny, .framer-dS7O9 .framer-omoj9z, .framer-dS7O9 .framer-ngl1ap, .framer-dS7O9 .framer-195nttb, .framer-dS7O9 .framer-c5u7v7, .framer-dS7O9 .framer-twjwx0, .framer-dS7O9 .framer-12ezo6d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-dS7O9 .framer-euzcc9, .framer-dS7O9 .framer-117epb7, .framer-dS7O9 .framer-1v2ka4m, .framer-dS7O9 .framer-107kess, .framer-dS7O9 .framer-tpimk0, .framer-dS7O9 .framer-1908ps6, .framer-dS7O9 .framer-yr7pi2, .framer-dS7O9 .framer-17ecqsg, .framer-dS7O9 .framer-1ms3bbt, .framer-dS7O9 .framer-1e44uzz, .framer-dS7O9 .framer-1oe4vnv, .framer-dS7O9 .framer-1paz4gx, .framer-dS7O9 .framer-11ilczl, .framer-dS7O9 .framer-1y2nt18 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-dS7O9 .framer-1h8umfx, .framer-dS7O9 .framer-1qp6oo8, .framer-dS7O9 .framer-a5o2ie, .framer-dS7O9 .framer-c4cell, .framer-dS7O9 .framer-mj8gdh, .framer-dS7O9 .framer-1k82ogd, .framer-dS7O9 .framer-u1ts1, .framer-dS7O9 .framer-gtkfem, .framer-dS7O9 .framer-1kgj6oa, .framer-dS7O9 .framer-v4ede0, .framer-dS7O9 .framer-ytjwhs, .framer-dS7O9 .framer-15ibgfd, .framer-dS7O9 .framer-1xweiv, .framer-dS7O9 .framer-6yu8h8 { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-dS7O9 .framer-1p8jz9r, .framer-dS7O9 .framer-143lgez, .framer-dS7O9 .framer-1v82xxj, .framer-dS7O9 .framer-kyfxom, .framer-dS7O9 .framer-ii4utf, .framer-dS7O9 .framer-4u2rwc, .framer-dS7O9 .framer-1qrdpjx, .framer-dS7O9 .framer-dxk8kz, .framer-dS7O9 .framer-1vkss9j, .framer-dS7O9 .framer-me5ulv, .framer-dS7O9 .framer-887u8d, .framer-dS7O9 .framer-18hdie9, .framer-dS7O9 .framer-bkubma, .framer-dS7O9 .framer-12qlzo0 { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-dS7O9 .framer-1sv76ph, .framer-dS7O9 .framer-1phs92q, .framer-dS7O9 .framer-1iy4ytt, .framer-dS7O9 .framer-buao3s, .framer-dS7O9 .framer-1ylkov1, .framer-dS7O9 .framer-j20sm3, .framer-dS7O9 .framer-rz7i87, .framer-dS7O9 .framer-vusbdh, .framer-dS7O9 .framer-1dc6z10, .framer-dS7O9 .framer-fx9frt, .framer-dS7O9 .framer-1s0qbnw, .framer-dS7O9 .framer-gymtl0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-dS7O9 .framer-ck5ojk, .framer-dS7O9 .framer-ktmo5z, .framer-dS7O9 .framer-1wd7eu9, .framer-dS7O9 .framer-1j0kl7q, .framer-dS7O9 .framer-14wxphe, .framer-dS7O9 .framer-1d4kxzs, .framer-dS7O9 .framer-7tgjm6, .framer-dS7O9 .framer-cr8752, .framer-dS7O9 .framer-3l2zxq, .framer-dS7O9 .framer-uhmxot, .framer-dS7O9 .framer-bq59df, .framer-dS7O9 .framer-4ggm7h, .framer-dS7O9 .framer-10ribev, .framer-dS7O9 .framer-1i93k9x, .framer-dS7O9 .framer-iqhdyl, .framer-dS7O9 .framer-ij8ngr, .framer-dS7O9 .framer-1giyfgc, .framer-dS7O9 .framer-lh55u4, .framer-dS7O9 .framer-yv69ox, .framer-dS7O9 .framer-1g48lr0, .framer-dS7O9 .framer-1xnt0la, .framer-dS7O9 .framer-zhbssv, .framer-dS7O9 .framer-1qw620p, .framer-dS7O9 .framer-7agh8f, .framer-dS7O9 .framer-1da2nm4, .framer-dS7O9 .framer-1bx7560, .framer-dS7O9 .framer-16e2zzn, .framer-dS7O9 .framer-geog9w, .framer-dS7O9 .framer-2ecfrt, .framer-dS7O9 .framer-69tqdo, .framer-dS7O9 .framer-8emaqq, .framer-dS7O9 .framer-2znmiu, .framer-dS7O9 .framer-ms2gje, .framer-dS7O9 .framer-dwxa3m, .framer-dS7O9 .framer-i1tryp, .framer-dS7O9 .framer-1rkb1t7, .framer-dS7O9 .framer-160wxvc, .framer-dS7O9 .framer-1jyi1i0, .framer-dS7O9 .framer-1q81efg, .framer-dS7O9 .framer-f90axf, .framer-dS7O9 .framer-agji90, .framer-dS7O9 .framer-1g49glu, .framer-dS7O9 .framer-1iittaz, .framer-dS7O9 .framer-xonscl, .framer-dS7O9 .framer-yr7rm1, .framer-dS7O9 .framer-itvmvc, .framer-dS7O9 .framer-mugdsf, .framer-dS7O9 .framer-1p8juu1, .framer-dS7O9 .framer-15zi071, .framer-dS7O9 .framer-1uxe73j, .framer-dS7O9 .framer-1eegv3r, .framer-dS7O9 .framer-1xnhr7t, .framer-dS7O9 .framer-pexshf, .framer-dS7O9 .framer-ab03hz, .framer-dS7O9 .framer-nhm1vd, .framer-dS7O9 .framer-4sbjjv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-dS7O9 .framer-dh49oi, .framer-dS7O9 .framer-1iuz5ol, .framer-dS7O9 .framer-3caooz, .framer-dS7O9 .framer-1jjqygh, .framer-dS7O9 .framer-1rlljqv, .framer-dS7O9 .framer-1gqb8he, .framer-dS7O9 .framer-1zqqur, .framer-dS7O9 .framer-csyfqw, .framer-dS7O9 .framer-138a2uh, .framer-dS7O9 .framer-1u56ab6, .framer-dS7O9 .framer-kad0bk, .framer-dS7O9 .framer-1evznh2, .framer-dS7O9 .framer-lkfxtd, .framer-dS7O9 .framer-npl13q, .framer-dS7O9 .framer-15miptk, .framer-dS7O9 .framer-uj86s9, .framer-dS7O9 .framer-es97q9, .framer-dS7O9 .framer-akykvr, .framer-dS7O9 .framer-1wcwiyq, .framer-dS7O9 .framer-1nyo65y, .framer-dS7O9 .framer-19n6i2a, .framer-dS7O9 .framer-a73v5j, .framer-dS7O9 .framer-1prckmk, .framer-dS7O9 .framer-xiwhnf, .framer-dS7O9 .framer-vey7iq, .framer-dS7O9 .framer-11jo7xn, .framer-dS7O9 .framer-o0hn9x, .framer-dS7O9 .framer-1gn2aoe, .framer-dS7O9 .framer-196hfmb, .framer-dS7O9 .framer-1um7vwc, .framer-dS7O9 .framer-1ifr9j6, .framer-dS7O9 .framer-xjrll1, .framer-dS7O9 .framer-x7x2pe, .framer-dS7O9 .framer-16oi1es, .framer-dS7O9 .framer-8j8jwa, .framer-dS7O9 .framer-qbdc50, .framer-dS7O9 .framer-p7nfjd, .framer-dS7O9 .framer-1aba92c, .framer-dS7O9 .framer-15q2jc0, .framer-dS7O9 .framer-1mxdtzo, .framer-dS7O9 .framer-l0aiw2, .framer-dS7O9 .framer-b8mgog, .framer-dS7O9 .framer-1lajfo4, .framer-dS7O9 .framer-72w63, .framer-dS7O9 .framer-11rcw9s, .framer-dS7O9 .framer-n6f4s9, .framer-dS7O9 .framer-th5pwq, .framer-dS7O9 .framer-1vsco9v, .framer-dS7O9 .framer-i5nd0z, .framer-dS7O9 .framer-otyyvo, .framer-dS7O9 .framer-1b7bhxn, .framer-dS7O9 .framer-1bq6j1a, .framer-dS7O9 .framer-fzryiy, .framer-dS7O9 .framer-78d9za, .framer-dS7O9 .framer-lpeirl, .framer-dS7O9 .framer-1md93w { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-dS7O9 .framer-om9r3s, .framer-dS7O9 .framer-lzfugw, .framer-dS7O9 .framer-h1qzdr, .framer-dS7O9 .framer-pcp84u, .framer-dS7O9 .framer-ad8qon, .framer-dS7O9 .framer-peq90q, .framer-dS7O9 .framer-7g76zl, .framer-dS7O9 .framer-shopro, .framer-dS7O9 .framer-siq49s, .framer-dS7O9 .framer-1nkzpep, .framer-dS7O9 .framer-1tvgqij, .framer-dS7O9 .framer-6z67pp, .framer-dS7O9 .framer-18pgsoi, .framer-dS7O9 .framer-wn8smw, .framer-dS7O9 .framer-17oc8ko, .framer-dS7O9 .framer-1e0nnsx, .framer-dS7O9 .framer-1c6ee6x, .framer-dS7O9 .framer-1fjes0d, .framer-dS7O9 .framer-1pq173y, .framer-dS7O9 .framer-119h8sq, .framer-dS7O9 .framer-1bvfjbq, .framer-dS7O9 .framer-1y4556g, .framer-dS7O9 .framer-1iz781r, .framer-dS7O9 .framer-j01zht, .framer-dS7O9 .framer-hm79o3, .framer-dS7O9 .framer-1oyhb0t, .framer-dS7O9 .framer-1rr4nlv, .framer-dS7O9 .framer-11o4bj, .framer-dS7O9 .framer-1qasas9, .framer-dS7O9 .framer-2dq145, .framer-dS7O9 .framer-yx3pdu, .framer-dS7O9 .framer-1avgtsj, .framer-dS7O9 .framer-1mc190t, .framer-dS7O9 .framer-1cxdr9w, .framer-dS7O9 .framer-1eut6ib, .framer-dS7O9 .framer-19jt7xx, .framer-dS7O9 .framer-5vo98h, .framer-dS7O9 .framer-13xcbiv, .framer-dS7O9 .framer-1cgc6jn, .framer-dS7O9 .framer-8o1roh, .framer-dS7O9 .framer-10jenga, .framer-dS7O9 .framer-1hwfbou, .framer-dS7O9 .framer-9ngm6l, .framer-dS7O9 .framer-lwnu4l, .framer-dS7O9 .framer-l7of3t, .framer-dS7O9 .framer-cpu1um, .framer-dS7O9 .framer-r93o27, .framer-dS7O9 .framer-1mtq52p, .framer-dS7O9 .framer-lwqbs1, .framer-dS7O9 .framer-vj28n2, .framer-dS7O9 .framer-1i695uf, .framer-dS7O9 .framer-i7vuiu, .framer-dS7O9 .framer-753hsp, .framer-dS7O9 .framer-ck0ghu, .framer-dS7O9 .framer-1882j9d, .framer-dS7O9 .framer-mqtla9 { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-dS7O9 .framer-ldw7ws-container, .framer-dS7O9 .framer-rr02ki-container, .framer-dS7O9 .framer-1y9gz57-container, .framer-dS7O9 .framer-ceshpk-container, .framer-dS7O9 .framer-1jb5kai-container, .framer-dS7O9 .framer-5jas5-container, .framer-dS7O9 .framer-1vd7aa-container, .framer-dS7O9 .framer-1jo1hd7-container, .framer-dS7O9 .framer-rdtfq2-container, .framer-dS7O9 .framer-wk8ppm-container, .framer-dS7O9 .framer-18cvr0y-container, .framer-dS7O9 .framer-1gyhpvt-container, .framer-dS7O9 .framer-1wxem6l-container, .framer-dS7O9 .framer-124krub-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-dS7O9.framer-1itf4ra, .framer-dS7O9.framer-h3ug4r { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; }`,
        `.framer-dS7O9.framer-mxz3pz, .framer-dS7O9.framer-1pn4l1z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 60px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-dS7O9 .framer-1bgeq2a, .framer-dS7O9 .framer-1xy46j9 { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 300px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-dS7O9 .framer-1ttbytm, .framer-dS7O9 .framer-1ui8m9c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 261px; }`,
        ...ye,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-dS7O9.framer-1h8mrbj { width: 810px; } .framer-dS7O9 .framer-x11sx0 { padding: 80px 24px 80px 24px; } .framer-dS7O9 .framer-11u03tc { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-dS7O9 .framer-m87586, .framer-dS7O9 .framer-9x9hi3, .framer-dS7O9 .framer-a1ky55, .framer-dS7O9 .framer-1jwnp97, .framer-dS7O9 .framer-xkt670, .framer-dS7O9 .framer-1rot7pq, .framer-dS7O9 .framer-1ot37by, .framer-dS7O9 .framer-b53j56, .framer-dS7O9 .framer-19v44e7, .framer-dS7O9 .framer-9zly9q, .framer-dS7O9 .framer-kxgdro, .framer-dS7O9 .framer-1dmh6ws { height: min-content; width: min-content; } .framer-dS7O9 .framer-btn5pp, .framer-dS7O9 .framer-1bycfdf, .framer-dS7O9 .framer-1wkkrr9, .framer-dS7O9 .framer-83v228, .framer-dS7O9 .framer-14zoz02, .framer-dS7O9 .framer-1k3l3ny, .framer-dS7O9 .framer-omoj9z, .framer-dS7O9 .framer-ngl1ap, .framer-dS7O9 .framer-195nttb, .framer-dS7O9 .framer-c5u7v7, .framer-dS7O9 .framer-twjwx0, .framer-dS7O9 .framer-12ezo6d { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-dS7O9.framer-1h8mrbj { width: 390px; } .framer-dS7O9 .framer-x11sx0 { padding: 80px 16px 80px 16px; } .framer-dS7O9 .framer-11u03tc { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-dS7O9 .framer-1g4j6gj-container { order: 0; } .framer-dS7O9.framer-x237s6, .framer-dS7O9.framer-1yspkht, .framer-dS7O9.framer-ojwi34, .framer-dS7O9.framer-z95j3y, .framer-dS7O9.framer-t2m446, .framer-dS7O9.framer-ha1hkn, .framer-dS7O9.framer-1xxt9pn, .framer-dS7O9.framer-rflii7, .framer-dS7O9.framer-16dsi3w, .framer-dS7O9.framer-17j5mhv { padding: 60px 0px 0px 0px; } .framer-dS7O9 .framer-m87586, .framer-dS7O9 .framer-9x9hi3, .framer-dS7O9 .framer-a1ky55, .framer-dS7O9 .framer-1jwnp97, .framer-dS7O9 .framer-xkt670, .framer-dS7O9 .framer-b53j56, .framer-dS7O9 .framer-19v44e7, .framer-dS7O9 .framer-9zly9q, .framer-dS7O9 .framer-kxgdro, .framer-dS7O9 .framer-1dmh6ws { height: min-content; width: 300px; } .framer-dS7O9 .framer-1sv76ph, .framer-dS7O9 .framer-1phs92q, .framer-dS7O9 .framer-1iy4ytt, .framer-dS7O9 .framer-buao3s, .framer-dS7O9 .framer-1ylkov1, .framer-dS7O9 .framer-vusbdh, .framer-dS7O9 .framer-1dc6z10, .framer-dS7O9 .framer-fx9frt, .framer-dS7O9 .framer-1s0qbnw, .framer-dS7O9 .framer-gymtl0 { width: 261px; } .framer-dS7O9 .framer-1lvddvw-container { order: 1; } .framer-dS7O9 .framer-4fdjaq-container { order: 2; } .framer-dS7O9 .framer-1sxbd4x-container { order: 3; } .framer-dS7O9 .framer-9eewzy-container { order: 4; } .framer-dS7O9 .framer-1m7wgj4-container { order: 5; } .framer-dS7O9.framer-1itf4ra, .framer-dS7O9.framer-h3ug4r { z-index: 10; } .framer-dS7O9 .framer-h76w3k-container { order: 6; } .framer-dS7O9 .framer-cwlwsb-container { order: 9; } .framer-dS7O9 .framer-17orm6t-container { order: 10; } .framer-dS7O9 .framer-1yhz822-container { order: 11; } .framer-dS7O9 .framer-1708aya-container { order: 12; } .framer-dS7O9 .framer-16grnj7-container { order: 13; }}`,
      ],
      `framer-dS7O9`
    )),
    ($.displayName = `Hand Tools Sockets And Adaptors`),
    ($.defaultProps = { height: 2423, width: 1200 }),
    T(
      $,
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
        ...Se,
        ...we,
        ...Te,
        ...Ee,
        ...De,
        ...m(A),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Pe = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerMhKEpFh9_`,
          slots: [],
          annotations: {
            framerResponsiveScreen: ``,
            framerScrollSections: `{"eMZW2sKra":{"pattern":":eMZW2sKra","name":"classes"}}`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"PJ7H0_AZs":{"layout":["fixed","fixed"]},"dxYCPQwE1":{"layout":["fixed","fixed"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicHeight: `2423`,
            framerDisplayContentsDiv: `false`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Pe as __FramerMetadata__, $ as default };
//# sourceMappingURL=-63pTpFIBHevvUAPp556hEHwYNiJ1wHI05Tn4J1JY_g.LLba-MJ2.mjs.map
