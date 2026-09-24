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
import be, { t as xe } from "./ZE1MlXGS_r3tYTZ0mYz9BTCGUi6a58M12R9y7XXxAXg.DlKO6h14.mjs";
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
      h6OlMIKnC: `(max-width: 809.98px)`,
      Jbyd9hvB9: `(min-width: 1200px)`,
      MNQvetrSc: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (De = `framer-zdz9l`),
    (Oe = {
      h6OlMIKnC: `framer-v-1lbm0jh`,
      Jbyd9hvB9: `framer-v-1svngq9`,
      MNQvetrSc: `framer-v-k831fh`,
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
    (Me = { Desktop: `Jbyd9hvB9`, Phone: `h6OlMIKnC`, Tablet: `MNQvetrSc` }),
    (Ne = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Me[r.variant] ?? r.variant ?? `Jbyd9hvB9`,
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
          I = he(`rxsMpbhhS`),
          z = t(null);
        return (
          se(),
          ce({}),
          o(ae.Provider, {
            value: { primaryVariantId: `Jbyd9hvB9`, variantClassNames: Oe },
            children: l(ne, {
              id: x ?? u,
              children: [
                o(je, { value: `html body { background: rgb(255, 255, 255); }` }),
                o(d.div, {
                  ...de,
                  className: g(F, `framer-1svngq9`, b),
                  ref: c,
                  style: { ...re },
                  children: l(`section`, {
                    className: `framer-1vdrr6l`,
                    "data-framer-name": `Classes`,
                    id: I,
                    ref: z,
                    children: [
                      l(`div`, {
                        className: `framer-17nciau`,
                        "data-framer-name": `Text`,
                        children: [
                          o(fe, {
                            href: { webPageId: `Pinumpnx5` },
                            motionChild: !0,
                            nodeId: `cMs_4pBsE`,
                            openInNewTab: !1,
                            scopeId: `qxotXX72u`,
                            children: o(d.a, {
                              className: `framer-1qcs1lr framer-1dnknpl`,
                              children: o(R, {
                                animated: !1,
                                BKVe8Pgvw: !0,
                                className: `framer-1s92mo5`,
                                fICyAUQY1: !0,
                                layoutId: `kxPUZUCKU`,
                                lKf_CQTz5: !0,
                              }),
                            }),
                          }),
                          o(y, {
                            breakpoint: D,
                            overrides: {
                              h6OlMIKnC: { y: (h?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
                              MNQvetrSc: { y: (h?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
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
                                className: `framer-1gga1ez-container`,
                                nodeId: `IwSkLujt5`,
                                rendersWithMotion: !0,
                                scopeId: `qxotXX72u`,
                                children: o(B, {
                                  ggTbrSuHk: `Hand tools`,
                                  height: `100%`,
                                  id: `IwSkLujt5`,
                                  layoutId: `IwSkLujt5`,
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
                                children: `Crimping Tools`,
                              }),
                            }),
                            className: `framer-1qa9wxn`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          o(T, {
                            children: o(S, {
                              className: `framer-puuaqm-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `akQ0eE6ih`,
                              scopeId: `qxotXX72u`,
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
                                id: `akQ0eE6ih`,
                                layoutId: `akQ0eE6ih`,
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
                                    className: `framer-9yk2l8`,
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
                                    className: `framer-wb8yzr`,
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
                                    className: `framer-1npv38g`,
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
                                    className: `framer-4i1yv1`,
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
                        className: `framer-fgkqxm`,
                        "data-framer-name": `ClassesGallery`,
                        children: [
                          o(Z, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(_, {
                                  links: [
                                    {
                                      href: { webPageId: `iYbyZH4Eh` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `iYbyZH4Eh` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `iYbyZH4Eh` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        h6OlMIKnC: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 0,
                                        },
                                        MNQvetrSc: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 0,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 0,
                                        children: l(S, {
                                          className: `framer-kmoulj-container`,
                                          id: `kmoulj`,
                                          nodeId: `qZpK43HMx`,
                                          scopeId: `qxotXX72u`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                h6OlMIKnC: { oSlFkYxO1: t[2] },
                                                MNQvetrSc: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 469,
                                                    src: `../../assets/images/3xmrTCGOTIoJlR6UEqKg5a8EKSA.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `qZpK43HMx`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Compression Plier`,
                                                layoutId: `qZpK43HMx`,
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
                                                      triggerId: `kmoulj`,
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
                                                              className: g(F, `framer-1i9mzcj`),
                                                              "data-framer-portal-id": `kmoulj`,
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
                                                            `f6bMzcsZO`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-1kyvh36`),
                                                            "data-framer-portal-id": `kmoulj`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-okwjje`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-11vgyoh`,
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
                                                                      className: `framer-18z4cf1`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1f9l8qv`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-1yrbov6`,
                                                                        layoutId: `Rt_aOZsun`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/eafc6912-170d-4c41-8f5a-bd97e41069ae/submit`,
                                                                  className: `framer-yx9ftq`,
                                                                  nodeId: `gbUuhMHaO`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-5su1qn`,
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
                                                                              className: `framer-133xxbl`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-i4ts0y`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1emxq08`,
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
                                                                              className: `framer-ubsb4f`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-q04lrs`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1diezp3`,
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
                                                                              className: `framer-1lrue94`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1i0uh1l`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-27ueg1`,
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
                                                                              className: `framer-zcd5v7`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-6oq78u`,
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
                                                                            h6OlMIKnC: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1gantdy-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `nIk_5vRJY`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `qxotXX72u`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `nIk_5vRJY`,
                                                                                layoutId: `nIk_5vRJY`,
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
                                      href: { webPageId: `OQVXftRNr` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `OQVXftRNr` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `OQVXftRNr` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        h6OlMIKnC: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 416,
                                        },
                                        MNQvetrSc: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 0,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 0,
                                        children: l(S, {
                                          className: `framer-gl9f1x-container`,
                                          id: `gl9f1x`,
                                          nodeId: `oiAOV8dI_`,
                                          scopeId: `qxotXX72u`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                h6OlMIKnC: { oSlFkYxO1: t[2] },
                                                MNQvetrSc: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 469,
                                                    src: `../../assets/images/DQosZobnANXnk8D4X2NGtsj8vBk.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `oiAOV8dI_`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Heavy Duty Compression Plier`,
                                                layoutId: `oiAOV8dI_`,
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
                                                      triggerId: `gl9f1x`,
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
                                                              className: g(F, `framer-1la1z19`),
                                                              "data-framer-portal-id": `gl9f1x`,
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
                                                            `cJBrRTPYa`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-dqur1j`),
                                                            "data-framer-portal-id": `gl9f1x`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-12p6nsl`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-189a4hy`,
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
                                                                      className: `framer-1yt1f53`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1jl0di6`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-px9fuy`,
                                                                        layoutId: `kxgg3xNnG`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/28359dae-c1ce-4389-914d-3314b736b21b/submit`,
                                                                  className: `framer-xacc3j`,
                                                                  nodeId: `puIyLhtGG`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-i0twoi`,
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
                                                                              className: `framer-ht0z8c`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-djeboi`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1yih2j9`,
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
                                                                              className: `framer-1su979k`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1an2kxz`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-107ysjp`,
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
                                                                              className: `framer-92qftn`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1xpgj5k`,
                                                                              inputName: `Product name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-hmm0y4`,
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
                                                                              className: `framer-1ioackl`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-6fxch4`,
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
                                                                            h6OlMIKnC: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-bhkjj5-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `khdv80YWN`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `qxotXX72u`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `khdv80YWN`,
                                                                                layoutId: `khdv80YWN`,
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
                                      href: { webPageId: `Wn3p19Wl9` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Wn3p19Wl9` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Wn3p19Wl9` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        h6OlMIKnC: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 832,
                                        },
                                        MNQvetrSc: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 416,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 0,
                                        children: l(S, {
                                          className: `framer-1jst8nv-container`,
                                          id: `1jst8nv`,
                                          nodeId: `ciJ2j7PVj`,
                                          scopeId: `qxotXX72u`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                h6OlMIKnC: { oSlFkYxO1: t[2] },
                                                MNQvetrSc: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 469,
                                                    src: `../../assets/images/i3qkn9yOG7S7giw7lZhKIDzGtI.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `ciJ2j7PVj`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Compression Hydraulic tool `,
                                                layoutId: `ciJ2j7PVj`,
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
                                                      triggerId: `1jst8nv`,
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
                                                              className: g(F, `framer-zilf76`),
                                                              "data-framer-portal-id": `1jst8nv`,
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
                                                            `nU5k1E63P`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-1hajwwe`),
                                                            "data-framer-portal-id": `1jst8nv`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-1viv5mk`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1d70isn`,
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
                                                                      className: `framer-1hwpz5v`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1fsy7p1`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-l7ejyn`,
                                                                        layoutId: `Fhoc3sBHT`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/4b524622-c428-488c-97e7-dec04cadb5ae/submit`,
                                                                  className: `framer-g2istf`,
                                                                  nodeId: `eiy5Q9An1`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-kjt0w5`,
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
                                                                              className: `framer-8evg32`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-19p0tqh`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-7dq61e`,
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
                                                                              className: `framer-krzmk`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1cg1a9w`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-16p0pxy`,
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
                                                                              className: `framer-wlhp6n`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-5b36e1`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1ms7of1`,
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
                                                                              className: `framer-1c8g23w`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-79llqv`,
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
                                                                            h6OlMIKnC: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-s1m8kf-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `iXMCde86X`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `qxotXX72u`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `iXMCde86X`,
                                                                                layoutId: `iXMCde86X`,
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
                                      href: { webPageId: `qDXY6r3VV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `qDXY6r3VV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `qDXY6r3VV` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        h6OlMIKnC: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1248,
                                        },
                                        MNQvetrSc: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 416,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 416,
                                        children: l(S, {
                                          className: `framer-gaqke3-container`,
                                          id: `gaqke3`,
                                          nodeId: `bB4f1IqKg`,
                                          scopeId: `qxotXX72u`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                h6OlMIKnC: { oSlFkYxO1: t[2] },
                                                MNQvetrSc: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 373,
                                                    pixelWidth: 800,
                                                    src: `../../assets/images/AkOipBAFnIigEn8b6qhl5InoY.png?width=800&height=373`,
                                                    srcSet: `../../assets/images/AkOipBAFnIigEn8b6qhl5InoY.png 512w,../../assets/images/AkOipBAFnIigEn8b6qhl5InoY.png?width=800&height=373 800w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `bB4f1IqKg`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Hydraulic Tool Cable Cutter`,
                                                layoutId: `bB4f1IqKg`,
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
                                                      triggerId: `gaqke3`,
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
                                                              className: g(F, `framer-m4xa0u`),
                                                              "data-framer-portal-id": `gaqke3`,
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
                                                            `CkwRSYtUu`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-aeiat1`),
                                                            "data-framer-portal-id": `gaqke3`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-y1c8mo`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-16156p1`,
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
                                                                      className: `framer-1exl5h9`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-19o1qx4`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-8cjnp6`,
                                                                        layoutId: `mVktyMB9j`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/647c3911-1841-44f1-aab3-e01fe511647f/submit`,
                                                                  className: `framer-9maxwh`,
                                                                  nodeId: `AONuzmW3K`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-p2axfc`,
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
                                                                              className: `framer-14a22cb`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-qkc0ef`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-eavn7p`,
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
                                                                              className: `framer-137jzbx`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-8towho`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1qzrl7w`,
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
                                                                              className: `framer-l3un9u`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1692hzr`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1healmx`,
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
                                                                              className: `framer-1ut3yug`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1y3xdam`,
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
                                                                            h6OlMIKnC: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1g2xjw5-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `lvH4gukLt`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `qxotXX72u`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `lvH4gukLt`,
                                                                                layoutId: `lvH4gukLt`,
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
                                      href: { webPageId: `J3v0KTfTV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `J3v0KTfTV` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `J3v0KTfTV` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        h6OlMIKnC: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1664,
                                        },
                                        MNQvetrSc: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 832,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 416,
                                        children: l(S, {
                                          className: `framer-1whk6wc-container`,
                                          id: `1whk6wc`,
                                          nodeId: `zmrtsjt6I`,
                                          scopeId: `qxotXX72u`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                h6OlMIKnC: { oSlFkYxO1: t[2] },
                                                MNQvetrSc: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 600,
                                                    pixelWidth: 800,
                                                    src: `../../assets/images/Q4VyVn8g23hWbbJcVf6cVOZ8V0.jpg?width=800&height=600`,
                                                    srcSet: `../../assets/images/Q4VyVn8g23hWbbJcVf6cVOZ8V0.jpg 512w,../../assets/images/Q4VyVn8g23hWbbJcVf6cVOZ8V0.jpg?width=800&height=600 800w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `zmrtsjt6I`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Compression Hydraulic Tool Jack`,
                                                layoutId: `zmrtsjt6I`,
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
                                                      triggerId: `1whk6wc`,
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
                                                              className: g(F, `framer-vmf592`),
                                                              "data-framer-portal-id": `1whk6wc`,
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
                                                            `ejqZWtkax`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-xhl512`),
                                                            "data-framer-portal-id": `1whk6wc`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-r1933l`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-4nksqa`,
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
                                                                      className: `framer-64pnfr`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-fgp9ne`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-941xmm`,
                                                                        layoutId: `cBL8QvcFL`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/05dcb6ae-767c-40ef-af24-74319915bf67/submit`,
                                                                  className: `framer-r8l6nk`,
                                                                  nodeId: `ultbGXXy0`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-14ztsuh`,
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
                                                                              className: `framer-1xhh4bh`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-wd5kng`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-aujne4`,
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
                                                                              className: `framer-r0ww66`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-wm1g6q`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-18be2kd`,
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
                                                                              className: `framer-gx3ito`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-qg0ay9`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-arjy6b`,
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
                                                                              className: `framer-1wj20bt`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-22rbb8`,
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
                                                                            h6OlMIKnC: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-wes8wi-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `cWRrqGQV7`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `qxotXX72u`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `cWRrqGQV7`,
                                                                                layoutId: `cWRrqGQV7`,
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
                                      href: { webPageId: `ZMPQssinf` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `ZMPQssinf` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `ZMPQssinf` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        h6OlMIKnC: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2080,
                                        },
                                        MNQvetrSc: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 832,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 416,
                                        children: l(S, {
                                          className: `framer-18dgplf-container`,
                                          id: `18dgplf`,
                                          nodeId: `DDO6VpzIX`,
                                          scopeId: `qxotXX72u`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                h6OlMIKnC: { oSlFkYxO1: t[2] },
                                                MNQvetrSc: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 248,
                                                    pixelWidth: 500,
                                                    src: `../../assets/images/tC16pVcLrBU7W8H0SzqJJo5kr6g.webp`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `DDO6VpzIX`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Compression Hydraulic Pump`,
                                                layoutId: `DDO6VpzIX`,
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
                                                      triggerId: `18dgplf`,
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
                                                              className: g(F, `framer-1wq8x67`),
                                                              "data-framer-portal-id": `18dgplf`,
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
                                                            `j3rgMxv2q`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-7wkbmt`),
                                                            "data-framer-portal-id": `18dgplf`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-xehq6t`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1959rrs`,
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
                                                                      className: `framer-10k432c`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-16q8gmp`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-3we0h1`,
                                                                        layoutId: `Vb57IJZKW`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/64e31fb1-600d-46a5-9c47-3f40ec1f025c/submit`,
                                                                  className: `framer-ltaqof`,
                                                                  nodeId: `v18qVhM3t`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-t7onya`,
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
                                                                              className: `framer-4pmqqt`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1dmvqba`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-11i6g46`,
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
                                                                              className: `framer-fcxjpi`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1a5ms44`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-a4ecnt`,
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
                                                                              className: `framer-1sgeu7z`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-tptj4v`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-t63vue`,
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
                                                                              className: `framer-1fu9pss`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1xlwvnw`,
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
                                                                            h6OlMIKnC: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1f19h66-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `lTUEShSQn`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `qxotXX72u`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `lTUEShSQn`,
                                                                                layoutId: `lTUEShSQn`,
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
                                      href: { webPageId: `RJiC3_m6d` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `RJiC3_m6d` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `RJiC3_m6d` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        h6OlMIKnC: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2496,
                                        },
                                        MNQvetrSc: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1248,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 832,
                                        children: l(S, {
                                          className: `framer-18gxfo6-container`,
                                          id: `18gxfo6`,
                                          nodeId: `gAU1zQX4B`,
                                          scopeId: `qxotXX72u`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                h6OlMIKnC: { oSlFkYxO1: t[2] },
                                                MNQvetrSc: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 458,
                                                    src: `../../assets/images/DxdbESLGWueK1Xl4DmWRzqEb2xo.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `gAU1zQX4B`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Compression Hydraluic Die Tool`,
                                                layoutId: `gAU1zQX4B`,
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
                                                      triggerId: `18gxfo6`,
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
                                                              className: g(F, `framer-1xjmxrf`),
                                                              "data-framer-portal-id": `18gxfo6`,
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
                                                            `L4kgWw8cs`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-1koryn2`),
                                                            "data-framer-portal-id": `18gxfo6`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-bg80ln`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1fxgzwh`,
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
                                                                      className: `framer-q7hqna`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-1i3i6qk`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-4ygtar`,
                                                                        layoutId: `R83GDhmzz`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/510e1cc5-7b9f-4a88-b444-e4c9f2c16cf4/submit`,
                                                                  className: `framer-3aqvjy`,
                                                                  nodeId: `fD5HM689v`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-1exejo3`,
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
                                                                              className: `framer-1pb651o`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-3y81g9`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1oh511u`,
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
                                                                              className: `framer-1egitd9`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1v91ki8`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-14r94t`,
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
                                                                              className: `framer-6kbouz`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-k9crpv`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-i7lgn3`,
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
                                                                              className: `framer-1419551`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1jk21fw`,
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
                                                                            h6OlMIKnC: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-7ep4js-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `upmSkSkR7`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `qxotXX72u`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `upmSkSkR7`,
                                                                                layoutId: `upmSkSkR7`,
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
                                      href: { webPageId: `Vea9Qy0Wy` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Vea9Qy0Wy` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Vea9Qy0Wy` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(y, {
                                      breakpoint: D,
                                      overrides: {
                                        h6OlMIKnC: {
                                          width: `max(min(${h?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 2912,
                                        },
                                        MNQvetrSc: {
                                          width: `max((min(${h?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (h?.y || 0) + 0 + 0 + 80 + 276.4 + 0 + 1248,
                                        },
                                      },
                                      children: o(T, {
                                        height: 400,
                                        width: `max((min(${h?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (h?.y || 0) + 0 + 0 + 96 + 276.4 + 0 + 832,
                                        children: l(S, {
                                          className: `framer-12yhti7-container`,
                                          id: `12yhti7`,
                                          nodeId: `JbCW4XS78`,
                                          scopeId: `qxotXX72u`,
                                          children: [
                                            o(y, {
                                              breakpoint: D,
                                              overrides: {
                                                h6OlMIKnC: { oSlFkYxO1: t[2] },
                                                MNQvetrSc: { oSlFkYxO1: t[1] },
                                              },
                                              children: o(V, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 315,
                                                    pixelWidth: 500,
                                                    src: `../../assets/images/ma0mI34l4KbwKpqJRSzTIC3Rmc.jpg`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `JbCW4XS78`,
                                                jTs_fuWrm: M({ overlay: e }),
                                                JWP0bNV85: `Compression Tool Cable Cutter`,
                                                layoutId: `JbCW4XS78`,
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
                                                      triggerId: `12yhti7`,
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
                                                              className: g(F, `framer-1xgluqd`),
                                                              "data-framer-portal-id": `12yhti7`,
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
                                                            `mxEToY9f_`
                                                          ),
                                                          o(d.div, {
                                                            className: g(F, `framer-ukx7rw`),
                                                            "data-framer-portal-id": `12yhti7`,
                                                            transformTemplate: J,
                                                            children: l(d.div, {
                                                              className: `framer-ijmor2`,
                                                              children: [
                                                                l(d.div, {
                                                                  className: `framer-1cvg5q`,
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
                                                                      className: `framer-1mj91da`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(d.div, {
                                                                      className: `framer-x9yky0`,
                                                                      onTap: P({ overlay: e }),
                                                                      children: o(N, {
                                                                        animated: !1,
                                                                        className: `framer-yrkyu1`,
                                                                        layoutId: `S78WPYMWl`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(C, {
                                                                  action: `https://api.framer.com/forms/v1/forms/1e712f6b-bdc5-4689-81f2-bd5a18318907/submit`,
                                                                  className: `framer-1nzyfwz`,
                                                                  nodeId: `hhYeZLpLm`,
                                                                  children: (e) =>
                                                                    l(r, {
                                                                      children: [
                                                                        l(d.label, {
                                                                          className: `framer-166844k`,
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
                                                                              className: `framer-nmg4nf`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1vqh3xb`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-1kds5ol`,
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
                                                                              className: `framer-1d3q97y`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-d6sd76`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-13jkg5h`,
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
                                                                              className: `framer-1pr56e6`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-1799j0w`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        l(d.label, {
                                                                          className: `framer-kgjcj6`,
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
                                                                              className: `framer-1xsd8nq`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(w, {
                                                                              className: `framer-113ws5j`,
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
                                                                            h6OlMIKnC: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(T, {
                                                                            width: `277px`,
                                                                            children: o(S, {
                                                                              className: `framer-1ixmb0-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `H7eOGv1jZ`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `qxotXX72u`,
                                                                              children: o(L, {
                                                                                height: `100%`,
                                                                                id: `H7eOGv1jZ`,
                                                                                layoutId: `H7eOGv1jZ`,
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
        `.framer-zdz9l.framer-1dnknpl, .framer-zdz9l .framer-1dnknpl { display: block; }`,
        `.framer-zdz9l.framer-1svngq9 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-zdz9l .framer-1vdrr6l { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 96px 24px 96px 24px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-zdz9l .framer-17nciau { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zdz9l .framer-1qcs1lr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-zdz9l .framer-1s92mo5 { --1335ju: 2; --18mrqx2: #000000; --3it368: 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-zdz9l .framer-1gga1ez-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-zdz9l .framer-1qa9wxn { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-zdz9l .framer-puuaqm-container { flex: none; height: 100px; position: relative; width: 339px; }`,
        `.framer-zdz9l .framer-9yk2l8 { height: 50px; overflow: visible; position: relative; width: 50px; }`,
        `.framer-zdz9l .framer-wb8yzr { aspect-ratio: 1.6008403361344539 / 1; height: var(--framer-aspect-ratio-supported, 50px); overflow: visible; position: relative; width: 80px; }`,
        `.framer-zdz9l .framer-1npv38g { aspect-ratio: 1.842433697347894 / 1; height: var(--framer-aspect-ratio-supported, 43px); overflow: visible; position: relative; width: 79px; }`,
        `.framer-zdz9l .framer-4i1yv1 { aspect-ratio: 3.0225409836065578 / 1; height: var(--framer-aspect-ratio-supported, 23px); overflow: visible; position: relative; width: 70px; }`,
        `.framer-zdz9l .framer-fgkqxm { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zdz9l .framer-kmoulj-container, .framer-zdz9l .framer-gl9f1x-container, .framer-zdz9l .framer-1jst8nv-container, .framer-zdz9l .framer-gaqke3-container, .framer-zdz9l .framer-1whk6wc-container, .framer-zdz9l .framer-18dgplf-container, .framer-zdz9l .framer-18gxfo6-container, .framer-zdz9l .framer-12yhti7-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-zdz9l.framer-1i9mzcj, .framer-zdz9l.framer-1la1z19, .framer-zdz9l.framer-zilf76, .framer-zdz9l.framer-m4xa0u, .framer-zdz9l.framer-vmf592, .framer-zdz9l.framer-1wq8x67, .framer-zdz9l.framer-1xjmxrf, .framer-zdz9l.framer-1xgluqd { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-zdz9l.framer-1kyvh36, .framer-zdz9l.framer-dqur1j, .framer-zdz9l.framer-1hajwwe, .framer-zdz9l.framer-aeiat1, .framer-zdz9l.framer-xhl512, .framer-zdz9l.framer-7wkbmt, .framer-zdz9l.framer-1koryn2, .framer-zdz9l.framer-ukx7rw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-zdz9l .framer-okwjje, .framer-zdz9l .framer-12p6nsl, .framer-zdz9l .framer-1viv5mk, .framer-zdz9l .framer-y1c8mo, .framer-zdz9l .framer-r1933l, .framer-zdz9l .framer-xehq6t, .framer-zdz9l .framer-bg80ln, .framer-zdz9l .framer-ijmor2 { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-zdz9l .framer-11vgyoh, .framer-zdz9l .framer-189a4hy, .framer-zdz9l .framer-1d70isn, .framer-zdz9l .framer-16156p1, .framer-zdz9l .framer-4nksqa, .framer-zdz9l .framer-1959rrs, .framer-zdz9l .framer-1fxgzwh, .framer-zdz9l .framer-1cvg5q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-zdz9l .framer-18z4cf1, .framer-zdz9l .framer-1yt1f53, .framer-zdz9l .framer-1hwpz5v, .framer-zdz9l .framer-1exl5h9, .framer-zdz9l .framer-64pnfr, .framer-zdz9l .framer-10k432c, .framer-zdz9l .framer-q7hqna, .framer-zdz9l .framer-1mj91da { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-zdz9l .framer-1f9l8qv, .framer-zdz9l .framer-1jl0di6, .framer-zdz9l .framer-1fsy7p1, .framer-zdz9l .framer-19o1qx4, .framer-zdz9l .framer-fgp9ne, .framer-zdz9l .framer-16q8gmp, .framer-zdz9l .framer-1i3i6qk, .framer-zdz9l .framer-x9yky0 { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-zdz9l .framer-1yrbov6, .framer-zdz9l .framer-px9fuy, .framer-zdz9l .framer-l7ejyn, .framer-zdz9l .framer-8cjnp6, .framer-zdz9l .framer-941xmm, .framer-zdz9l .framer-3we0h1, .framer-zdz9l .framer-4ygtar, .framer-zdz9l .framer-yrkyu1 { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-zdz9l .framer-yx9ftq, .framer-zdz9l .framer-xacc3j, .framer-zdz9l .framer-g2istf, .framer-zdz9l .framer-9maxwh, .framer-zdz9l .framer-r8l6nk, .framer-zdz9l .framer-ltaqof, .framer-zdz9l .framer-3aqvjy, .framer-zdz9l .framer-1nzyfwz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-zdz9l .framer-5su1qn, .framer-zdz9l .framer-1emxq08, .framer-zdz9l .framer-1diezp3, .framer-zdz9l .framer-27ueg1, .framer-zdz9l .framer-i0twoi, .framer-zdz9l .framer-1yih2j9, .framer-zdz9l .framer-107ysjp, .framer-zdz9l .framer-hmm0y4, .framer-zdz9l .framer-kjt0w5, .framer-zdz9l .framer-7dq61e, .framer-zdz9l .framer-16p0pxy, .framer-zdz9l .framer-1ms7of1, .framer-zdz9l .framer-p2axfc, .framer-zdz9l .framer-eavn7p, .framer-zdz9l .framer-1qzrl7w, .framer-zdz9l .framer-1healmx, .framer-zdz9l .framer-14ztsuh, .framer-zdz9l .framer-aujne4, .framer-zdz9l .framer-18be2kd, .framer-zdz9l .framer-arjy6b, .framer-zdz9l .framer-t7onya, .framer-zdz9l .framer-11i6g46, .framer-zdz9l .framer-a4ecnt, .framer-zdz9l .framer-t63vue, .framer-zdz9l .framer-1exejo3, .framer-zdz9l .framer-1oh511u, .framer-zdz9l .framer-14r94t, .framer-zdz9l .framer-i7lgn3, .framer-zdz9l .framer-166844k, .framer-zdz9l .framer-1kds5ol, .framer-zdz9l .framer-13jkg5h, .framer-zdz9l .framer-kgjcj6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-zdz9l .framer-133xxbl, .framer-zdz9l .framer-ubsb4f, .framer-zdz9l .framer-1lrue94, .framer-zdz9l .framer-zcd5v7, .framer-zdz9l .framer-ht0z8c, .framer-zdz9l .framer-1su979k, .framer-zdz9l .framer-92qftn, .framer-zdz9l .framer-1ioackl, .framer-zdz9l .framer-8evg32, .framer-zdz9l .framer-krzmk, .framer-zdz9l .framer-wlhp6n, .framer-zdz9l .framer-1c8g23w, .framer-zdz9l .framer-14a22cb, .framer-zdz9l .framer-137jzbx, .framer-zdz9l .framer-l3un9u, .framer-zdz9l .framer-1ut3yug, .framer-zdz9l .framer-1xhh4bh, .framer-zdz9l .framer-r0ww66, .framer-zdz9l .framer-gx3ito, .framer-zdz9l .framer-1wj20bt, .framer-zdz9l .framer-4pmqqt, .framer-zdz9l .framer-fcxjpi, .framer-zdz9l .framer-1sgeu7z, .framer-zdz9l .framer-1fu9pss, .framer-zdz9l .framer-1pb651o, .framer-zdz9l .framer-1egitd9, .framer-zdz9l .framer-6kbouz, .framer-zdz9l .framer-1419551, .framer-zdz9l .framer-nmg4nf, .framer-zdz9l .framer-1d3q97y, .framer-zdz9l .framer-1pr56e6, .framer-zdz9l .framer-1xsd8nq { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-zdz9l .framer-i4ts0y, .framer-zdz9l .framer-q04lrs, .framer-zdz9l .framer-1i0uh1l, .framer-zdz9l .framer-6oq78u, .framer-zdz9l .framer-djeboi, .framer-zdz9l .framer-1an2kxz, .framer-zdz9l .framer-1xpgj5k, .framer-zdz9l .framer-6fxch4, .framer-zdz9l .framer-19p0tqh, .framer-zdz9l .framer-1cg1a9w, .framer-zdz9l .framer-5b36e1, .framer-zdz9l .framer-79llqv, .framer-zdz9l .framer-qkc0ef, .framer-zdz9l .framer-8towho, .framer-zdz9l .framer-1692hzr, .framer-zdz9l .framer-1y3xdam, .framer-zdz9l .framer-wd5kng, .framer-zdz9l .framer-wm1g6q, .framer-zdz9l .framer-qg0ay9, .framer-zdz9l .framer-22rbb8, .framer-zdz9l .framer-1dmvqba, .framer-zdz9l .framer-1a5ms44, .framer-zdz9l .framer-tptj4v, .framer-zdz9l .framer-1xlwvnw, .framer-zdz9l .framer-3y81g9, .framer-zdz9l .framer-1v91ki8, .framer-zdz9l .framer-k9crpv, .framer-zdz9l .framer-1jk21fw, .framer-zdz9l .framer-1vqh3xb, .framer-zdz9l .framer-d6sd76, .framer-zdz9l .framer-1799j0w, .framer-zdz9l .framer-113ws5j { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-zdz9l .framer-1gantdy-container, .framer-zdz9l .framer-bhkjj5-container, .framer-zdz9l .framer-s1m8kf-container, .framer-zdz9l .framer-1g2xjw5-container, .framer-zdz9l .framer-wes8wi-container, .framer-zdz9l .framer-1f19h66-container, .framer-zdz9l .framer-7ep4js-container, .framer-zdz9l .framer-1ixmb0-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        ..._e,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-zdz9l.framer-1svngq9 { width: 810px; } .framer-zdz9l .framer-1vdrr6l { padding: 80px 24px 80px 24px; } .framer-zdz9l .framer-fgkqxm { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-zdz9l .framer-okwjje, .framer-zdz9l .framer-12p6nsl, .framer-zdz9l .framer-1viv5mk, .framer-zdz9l .framer-y1c8mo, .framer-zdz9l .framer-r1933l, .framer-zdz9l .framer-xehq6t, .framer-zdz9l .framer-bg80ln, .framer-zdz9l .framer-ijmor2 { height: min-content; width: min-content; } .framer-zdz9l .framer-11vgyoh, .framer-zdz9l .framer-189a4hy, .framer-zdz9l .framer-1d70isn, .framer-zdz9l .framer-16156p1, .framer-zdz9l .framer-4nksqa, .framer-zdz9l .framer-1959rrs, .framer-zdz9l .framer-1fxgzwh, .framer-zdz9l .framer-1cvg5q { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-zdz9l.framer-1svngq9 { width: 390px; } .framer-zdz9l .framer-1vdrr6l { padding: 80px 16px 80px 16px; } .framer-zdz9l .framer-fgkqxm { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-zdz9l .framer-kmoulj-container { order: 0; } .framer-zdz9l.framer-1kyvh36, .framer-zdz9l.framer-dqur1j, .framer-zdz9l.framer-1hajwwe, .framer-zdz9l.framer-aeiat1, .framer-zdz9l.framer-xhl512, .framer-zdz9l.framer-7wkbmt, .framer-zdz9l.framer-1koryn2, .framer-zdz9l.framer-ukx7rw { padding: 60px 0px 0px 0px; } .framer-zdz9l .framer-okwjje, .framer-zdz9l .framer-12p6nsl, .framer-zdz9l .framer-1viv5mk, .framer-zdz9l .framer-y1c8mo, .framer-zdz9l .framer-r1933l, .framer-zdz9l .framer-xehq6t, .framer-zdz9l .framer-bg80ln, .framer-zdz9l .framer-ijmor2 { height: min-content; width: 300px; } .framer-zdz9l .framer-yx9ftq, .framer-zdz9l .framer-xacc3j, .framer-zdz9l .framer-g2istf, .framer-zdz9l .framer-9maxwh, .framer-zdz9l .framer-r8l6nk, .framer-zdz9l .framer-ltaqof, .framer-zdz9l .framer-3aqvjy, .framer-zdz9l .framer-1nzyfwz { width: 261px; } .framer-zdz9l .framer-gl9f1x-container { order: 1; } .framer-zdz9l .framer-1jst8nv-container { order: 2; } .framer-zdz9l .framer-gaqke3-container { order: 3; } .framer-zdz9l .framer-1whk6wc-container { order: 4; } .framer-zdz9l .framer-18dgplf-container { order: 5; } .framer-zdz9l .framer-18gxfo6-container { order: 6; } .framer-zdz9l .framer-12yhti7-container { order: 7; }}`,
      ],
      `framer-zdz9l`
    )),
    (Q.displayName = `Pliers Section Hand Tools`),
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
        default: {
          type: `reactComponent`,
          name: `FramerqxotXX72u`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `{"rxsMpbhhS":{"pattern":":rxsMpbhhS","name":"classes"}}`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: ``,
            framerIntrinsicHeight: `2007`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"MNQvetrSc":{"layout":["fixed","fixed"]},"h6OlMIKnC":{"layout":["fixed","fixed"]}}}`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1200`,
            framerAutoSizeImages: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=dQA8oRz6xG1WslSa_ARmQjglJAAts3KIsJGMnQHWYro.B7AlEr-4.mjs.map
