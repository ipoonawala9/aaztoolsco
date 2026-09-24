import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  O as n,
  P as r,
  g as ee,
  j as te,
  l as i,
  s as a,
  u as o,
  v as ne,
  w as s,
} from "./react.N6WDMTqS.mjs";
import { S as c, a as re, r as ie, t as l } from "./motion.CXXzZ97F.mjs";
import {
  A as u,
  I as d,
  L as f,
  O as p,
  S as ae,
  U as m,
  at as oe,
  b as h,
  c as se,
  ct as ce,
  dt as le,
  g,
  ht as _,
  it as ue,
  mt as v,
  n as y,
  nt as de,
  ot as b,
  st as fe,
  t as x,
  u as S,
  w as C,
  x as w,
} from "./framer.w0XhpZTx.mjs";
import { n as pe, t as T } from "./Ticker.QfylVvbQ.mjs";
import { i as E, n as D, r as O, t as me } from "./nl385Jssa.BV16yEHR.mjs";
import { i as k, r as A } from "./cQxXulDZM.DXXtl8ZX.mjs";
import {
  a as j,
  c as he,
  i as ge,
  n as _e,
  o as ve,
  r as ye,
  s as be,
  t as xe,
} from "./q2YiQ1HWO.pIGuwFIU.mjs";
import { n as Se, t as M } from "./szrJOgEFA.Cstbr50J.mjs";
import Ce, { t as we } from "./iTF9r_G45xG5_Ha859oDrqQr6YmFd4cBQeCSBKOLabk.D-naXLs0.mjs";
var N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (a(),
    m(),
    l(),
    s(),
    pe(),
    k(),
    he(),
    ve(),
    ge(),
    _e(),
    Se(),
    E(),
    we(),
    (N = d(A)),
    (P = _(y)),
    (F = _(w)),
    (I = d(T)),
    (L = d(M)),
    (R = {
      HqdvFx71S: `(min-width: 1200px)`,
      iQFgaXPm_: `(max-width: 809.98px)`,
      tqgRq8HZX: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (z = () => typeof document < `u`),
    (B = []),
    (V = `framer-RGxh4`),
    (H = {
      HqdvFx71S: `framer-v-1vkwicx`,
      iQFgaXPm_: `framer-v-1mimaqv`,
      tqgRq8HZX: `framer-v-18azjf`,
    }),
    (U = (e, t, n) => (e && t ? `position` : n)),
    (W = {
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
    (G = { delay: 0, duration: 1, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` }),
    (K = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (q = { delay: 0.2, duration: 1, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` }),
    (J = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Y = { Desktop: `HqdvFx71S`, Phone: `iQFgaXPm_`, Tablet: `tqgRq8HZX` }),
    (X = ({ value: e }) =>
      b()
        ? null
        : i(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `HqdvFx71S`,
    })),
    (Q = v(
      ee(function (e, ee) {
        let a = n(null),
          s = ee ?? a,
          l = ne(),
          { activeLocale: u, setLocale: d } = fe(),
          f = de(),
          { style: m, className: _, layoutId: v, variant: b, ...C } = Z(e);
        ce(te(() => Ce({}, u), [u]));
        let [w, pe] = oe(b, R, !1),
          E = p(V, me),
          D = t(se)?.isLayoutTemplate,
          O = !!t(re)?.transition?.layout,
          k = U(D, O);
        le();
        let j = () => !z() || w === `iQFgaXPm_`;
        return (
          ue({}),
          i(se.Provider, {
            value: {
              activeVariantId: w,
              humanReadableVariantMap: Y,
              primaryVariantId: `HqdvFx71S`,
              variantClassNames: H,
            },
            children: o(ie, {
              id: v ?? l,
              children: [
                i(X, { value: `html body { background: rgb(255, 255, 255); }` }),
                i(c.div, {
                  ...C,
                  className: p(E, `framer-1vkwicx`, _),
                  ref: s,
                  style: { ...m },
                  children: o(c.section, {
                    className: `framer-1yjkgbk`,
                    "data-framer-name": `Products`,
                    layout: k,
                    children: [
                      i(`div`, {
                        className: `framer-d27dls`,
                        "data-framer-name": `Text`,
                        children: o(`div`, {
                          className: `framer-1bo8utu`,
                          children: [
                            i(g, {
                              breakpoint: w,
                              overrides: {
                                iQFgaXPm_: { y: (f?.y || 0) + 0 + 0 + 80 + 0 + 0 + 0 + 0 + 0 },
                                tqgRq8HZX: { y: (f?.y || 0) + 0 + 0 + 80 + 0 + 0 + 0 + 0 + 0 },
                              },
                              children: i(x, {
                                height: 26,
                                y: (f?.y || 0) + 0 + 0 + 96 + 0 + 0 + 0 + 0 + 0,
                                children: i(P, {
                                  __framer__animate: { transition: G },
                                  __framer__animateOnce: !0,
                                  __framer__enter: W,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 0.6,
                                  className: `framer-rvakc7-container`,
                                  nodeId: `gaMC1Ns4R`,
                                  rendersWithMotion: !0,
                                  scopeId: `k3I5EzP4j`,
                                  children: i(A, {
                                    ggTbrSuHk: `Products`,
                                    height: `100%`,
                                    id: `gaMC1Ns4R`,
                                    layoutId: `gaMC1Ns4R`,
                                    variant: K(`z6oSgdJxk`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                            i(g, {
                              breakpoint: w,
                              overrides: {
                                iQFgaXPm_: {
                                  children: i(r, {
                                    children: i(`h3`, {
                                      className: `framer-styles-preset-1d7ew99`,
                                      "data-styles-preset": `nl385Jssa`,
                                      dir: `auto`,
                                      children: `Power tools`,
                                    }),
                                  }),
                                },
                                tqgRq8HZX: {
                                  children: i(r, {
                                    children: i(`h3`, {
                                      className: `framer-styles-preset-1d7ew99`,
                                      "data-styles-preset": `nl385Jssa`,
                                      children: `Measuring & Digital Meters`,
                                    }),
                                  }),
                                },
                              },
                              children: i(F, {
                                __framer__animate: { transition: q },
                                __framer__animateOnce: !0,
                                __framer__enter: W,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: i(r, {
                                  children: i(`h3`, {
                                    className: `framer-styles-preset-1d7ew99`,
                                    "data-styles-preset": `nl385Jssa`,
                                    dir: `auto`,
                                    children: `Power Tools`,
                                  }),
                                }),
                                className: `framer-1couoc9`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            i(x, {
                              children: i(y, {
                                className: `framer-1snnam0-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `LfrblK9P6`,
                                scopeId: `k3I5EzP4j`,
                                children: i(T, {
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
                                  id: `LfrblK9P6`,
                                  layoutId: `LfrblK9P6`,
                                  padding: 0,
                                  paddingBottom: 0,
                                  paddingLeft: 0,
                                  paddingPerSide: !1,
                                  paddingRight: 0,
                                  paddingTop: 0,
                                  sizingOptions: { heightType: !0, widthType: !0 },
                                  slots: [
                                    i(S, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 309.3333333333333,
                                        intrinsicWidth: 862.6666666666666,
                                        pixelHeight: 464,
                                        pixelWidth: 1294,
                                        sizes: `85px`,
                                        src: `../../assets/images/v1dEPSCMjmMi6WcTj2TgnG7lnmI.png?width=1294&height=464`,
                                        srcSet: `../../assets/images/v1dEPSCMjmMi6WcTj2TgnG7lnmI.png 512w,../../assets/images/v1dEPSCMjmMi6WcTj2TgnG7lnmI.png?scale-down-to=1024&width=1294&height=464 1024w,../../assets/images/v1dEPSCMjmMi6WcTj2TgnG7lnmI.png?width=1294&height=464 1294w`,
                                      },
                                      className: `framer-17o2r19`,
                                      "data-framer-name": `Logo 14`,
                                    }),
                                    i(S, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 456,
                                        intrinsicWidth: 1077.3333333333333,
                                        pixelHeight: 684,
                                        pixelWidth: 1616,
                                        sizes: `99px`,
                                        src: `../../assets/images/dT9CC32eS1Blonrb2VXQpLkru84.png?width=1616&height=684`,
                                        srcSet: `../../assets/images/dT9CC32eS1Blonrb2VXQpLkru84.png 512w,../../assets/images/dT9CC32eS1Blonrb2VXQpLkru84.png?scale-down-to=1024&width=1616&height=684 1024w,../../assets/images/dT9CC32eS1Blonrb2VXQpLkru84.png?width=1616&height=684 1616w`,
                                      },
                                      className: `framer-1oribfj`,
                                      "data-framer-name": `Logo2`,
                                    }),
                                    i(S, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 286,
                                        intrinsicWidth: 582,
                                        pixelHeight: 429,
                                        pixelWidth: 873,
                                        sizes: `100px`,
                                        src: `../../assets/images/3j1Xhw2wSvC61vEtWLAuidiSc.png?width=873&height=429`,
                                        srcSet: `../../assets/images/3j1Xhw2wSvC61vEtWLAuidiSc.png 512w,../../assets/images/3j1Xhw2wSvC61vEtWLAuidiSc.png?width=873&height=429 873w`,
                                      },
                                      className: `framer-131ezab`,
                                      "data-framer-name": `Logo 8`,
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
                      o(`div`, {
                        className: `framer-1hfbgp7`,
                        "data-framer-name": `ClassesGallery`,
                        children: [
                          i(h, {
                            links: [
                              { href: { webPageId: `j39Cfkfcd` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `fRICmNncB` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `j39Cfkfcd` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `BsJmXv8f2` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `j39Cfkfcd` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              i(g, {
                                breakpoint: w,
                                overrides: {
                                  iQFgaXPm_: {
                                    width: `319px`,
                                    y: (f?.y || 0) + 0 + 0 + 80 + 216.4 + 0 + 0,
                                  },
                                  tqgRq8HZX: {
                                    width: `328.5px`,
                                    y: (f?.y || 0) + 0 + 0 + 80 + 216.4 + 0 + 0,
                                  },
                                },
                                children: i(x, {
                                  height: 399,
                                  width: `max((${f?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y: (f?.y || 0) + 0 + 0 + 96 + 216.4 + 0 + 0,
                                  children: i(y, {
                                    className: `framer-soq724-container`,
                                    nodeId: `zRa2kI930`,
                                    scopeId: `k3I5EzP4j`,
                                    children: i(g, {
                                      breakpoint: w,
                                      overrides: {
                                        iQFgaXPm_: { uL9qbEmnu: e[3], ZHrtcxY3l: e[4] },
                                        tqgRq8HZX: {
                                          uL9qbEmnu: e[1],
                                          vxhDk_2Ee: `Angle grinders`,
                                          ZHrtcxY3l: e[2],
                                        },
                                      },
                                      children: i(M, {
                                        cYMryRtIV: J(
                                          {
                                            pixelHeight: 281,
                                            pixelWidth: 500,
                                            src: `../../assets/images/Uh7u99ox45Czs7hf2mO4XFVm35s.jpg`,
                                          },
                                          ``
                                        ),
                                        height: `100%`,
                                        id: `zRa2kI930`,
                                        layoutId: `zRa2kI930`,
                                        r0i2S6TZx: `BOSCH`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: K(`Ths73yLaQ`),
                                        vxhDk_2Ee: `PLIERS`,
                                        width: `100%`,
                                        ZHrtcxY3l: e[0],
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                          i(h, {
                            links: [
                              { href: { webPageId: `JuiSZL20W` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `fRICmNncB` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `JuiSZL20W` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `BsJmXv8f2` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `JuiSZL20W` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              i(g, {
                                breakpoint: w,
                                overrides: {
                                  iQFgaXPm_: {
                                    width: `319px`,
                                    y: (f?.y || 0) + 0 + 0 + 80 + 216.4 + 0 + 415,
                                  },
                                  tqgRq8HZX: {
                                    width: `328.5px`,
                                    y: (f?.y || 0) + 0 + 0 + 80 + 216.4 + 0 + 0,
                                  },
                                },
                                children: i(x, {
                                  height: 399,
                                  width: `max((${f?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y: (f?.y || 0) + 0 + 0 + 96 + 216.4 + 0 + 0,
                                  children: i(y, {
                                    className: `framer-1twxyub-container`,
                                    nodeId: `eVi4h_HQi`,
                                    scopeId: `k3I5EzP4j`,
                                    children: i(g, {
                                      breakpoint: w,
                                      overrides: {
                                        iQFgaXPm_: {
                                          cYMryRtIV: J(
                                            {
                                              pixelHeight: 667,
                                              pixelWidth: 1920,
                                              positionX: `77.3%`,
                                              positionY: `50.9%`,
                                              src: `../../assets/images/aNAnr3jlro3ouAzbNPulPtz4U.png?width=1920&height=667`,
                                              srcSet: `../../assets/images/aNAnr3jlro3ouAzbNPulPtz4U.png 512w,../../assets/images/aNAnr3jlro3ouAzbNPulPtz4U.png?scale-down-to=1024&width=1920&height=667 1024w,../../assets/images/aNAnr3jlro3ouAzbNPulPtz4U.png?width=1920&height=667 1920w`,
                                            },
                                            ``
                                          ),
                                          uL9qbEmnu: e[3],
                                          ZHrtcxY3l: e[4],
                                        },
                                        tqgRq8HZX: {
                                          cYMryRtIV: J(
                                            {
                                              pixelHeight: 667,
                                              pixelWidth: 1920,
                                              positionX: `79.3%`,
                                              positionY: `47.5%`,
                                              src: `../../assets/images/aNAnr3jlro3ouAzbNPulPtz4U.png?width=1920&height=667`,
                                              srcSet: `../../assets/images/aNAnr3jlro3ouAzbNPulPtz4U.png 512w,../../assets/images/aNAnr3jlro3ouAzbNPulPtz4U.png?scale-down-to=1024&width=1920&height=667 1024w,../../assets/images/aNAnr3jlro3ouAzbNPulPtz4U.png?width=1920&height=667 1920w`,
                                            },
                                            ``
                                          ),
                                          uL9qbEmnu: e[1],
                                          vxhDk_2Ee: `Angle grinders`,
                                          ZHrtcxY3l: e[2],
                                        },
                                      },
                                      children: i(M, {
                                        cYMryRtIV: J(
                                          {
                                            pixelHeight: 667,
                                            pixelWidth: 1920,
                                            positionX: `98%`,
                                            positionY: `43.9%`,
                                            src: `../../assets/images/aNAnr3jlro3ouAzbNPulPtz4U.png?width=1920&height=667`,
                                            srcSet: `../../assets/images/aNAnr3jlro3ouAzbNPulPtz4U.png 512w,../../assets/images/aNAnr3jlro3ouAzbNPulPtz4U.png?scale-down-to=1024&width=1920&height=667 1024w,../../assets/images/aNAnr3jlro3ouAzbNPulPtz4U.png?width=1920&height=667 1920w`,
                                          },
                                          ``
                                        ),
                                        height: `100%`,
                                        id: `eVi4h_HQi`,
                                        layoutId: `eVi4h_HQi`,
                                        r0i2S6TZx: `INGCO`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: K(`Ths73yLaQ`),
                                        vxhDk_2Ee: `PLIERS`,
                                        width: `100%`,
                                        ZHrtcxY3l: e[0],
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                          i(h, {
                            links: [
                              { href: { webPageId: `sCRzKtpcd` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `fRICmNncB` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `sCRzKtpcd` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `BsJmXv8f2` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `sCRzKtpcd` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              i(g, {
                                breakpoint: w,
                                overrides: {
                                  iQFgaXPm_: {
                                    width: `319px`,
                                    y: (f?.y || 0) + 0 + 0 + 80 + 216.4 + 0 + 830,
                                  },
                                  tqgRq8HZX: {
                                    width: `328.5px`,
                                    y: (f?.y || 0) + 0 + 0 + 80 + 216.4 + 0 + 415,
                                  },
                                },
                                children: i(x, {
                                  height: 399,
                                  width: `max((${f?.width || `100vw`} - 132px) / 3, 50px)`,
                                  y: (f?.y || 0) + 0 + 0 + 96 + 216.4 + 0 + 0,
                                  children: i(y, {
                                    className: `framer-13nzhjq-container`,
                                    nodeId: `FAgBMAlg8`,
                                    scopeId: `k3I5EzP4j`,
                                    children: i(g, {
                                      breakpoint: w,
                                      overrides: {
                                        iQFgaXPm_: { uL9qbEmnu: e[3], ZHrtcxY3l: e[4] },
                                        tqgRq8HZX: {
                                          uL9qbEmnu: e[1],
                                          vxhDk_2Ee: `Angle grinders`,
                                          ZHrtcxY3l: e[2],
                                        },
                                      },
                                      children: i(M, {
                                        cYMryRtIV: J(
                                          {
                                            pixelHeight: 660,
                                            pixelWidth: 660,
                                            src: `../../assets/images/Fdn4siR3hzivFv4WiL7HuVkapJw.png?width=660&height=660`,
                                            srcSet: `../../assets/images/Fdn4siR3hzivFv4WiL7HuVkapJw.png 512w,../../assets/images/Fdn4siR3hzivFv4WiL7HuVkapJw.png?width=660&height=660 660w`,
                                          },
                                          ``
                                        ),
                                        height: `100%`,
                                        id: `FAgBMAlg8`,
                                        layoutId: `FAgBMAlg8`,
                                        r0i2S6TZx: `DEWALT`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: K(`Ths73yLaQ`),
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
                      j() &&
                        i(g, {
                          breakpoint: w,
                          overrides: {
                            iQFgaXPm_: {
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 12" overflow="visible"><path d="M 0.5 0 C 0.776 0 1 2.686 1 6 C 1 9.314 0.776 12 0.5 12 C 0.224 12 0 9.314 0 6 C 0 2.686 0.224 0 0.5 0 Z" fill="#CCC"></path></svg>`,
                            },
                          },
                          children: i(ae, {
                            className: `framer-ef6wnp hidden-1vkwicx hidden-18azjf`,
                            requiresOverflowVisible: !1,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1 12" overflow="visible"></svg>`,
                            withExternalLayout: !0,
                          }),
                        }),
                    ],
                  }),
                }),
                i(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-RGxh4.framer-17pdbzc, .framer-RGxh4 .framer-17pdbzc { display: block; }`,
        `.framer-RGxh4.framer-1vkwicx { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-RGxh4 .framer-1yjkgbk { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 96px 50px 96px 50px; position: relative; width: 100%; }`,
        `.framer-RGxh4 .framer-d27dls { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-RGxh4 .framer-1bo8utu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-RGxh4 .framer-rvakc7-container { flex: none; height: auto; opacity: 0.6; position: relative; width: auto; }`,
        `.framer-RGxh4 .framer-1couoc9 { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-RGxh4 .framer-1snnam0-container { flex: none; height: 80px; position: relative; width: 310px; }`,
        `.framer-RGxh4 .framer-17o2r19 { aspect-ratio: 2.788793103448276 / 1; height: var(--framer-aspect-ratio-supported, 30px); overflow: visible; position: relative; width: 85px; }`,
        `.framer-RGxh4 .framer-1oribfj { aspect-ratio: 2.3625730994152043 / 1; height: var(--framer-aspect-ratio-supported, 42px); overflow: visible; position: relative; width: 99px; }`,
        `.framer-RGxh4 .framer-131ezab { aspect-ratio: 2.034965034965035 / 1; height: var(--framer-aspect-ratio-supported, 49px); overflow: visible; position: relative; width: 100px; }`,
        `.framer-RGxh4 .framer-1hfbgp7 { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-RGxh4 .framer-soq724-container, .framer-RGxh4 .framer-1twxyub-container, .framer-RGxh4 .framer-13nzhjq-container { align-self: start; flex: none; height: 399px; justify-self: start; position: relative; width: 100%; }`,
        `.framer-RGxh4 .framer-ef6wnp { height: 12px; position: relative; width: 1px; }`,
        ...D,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-RGxh4.framer-1vkwicx { width: 810px; } .framer-RGxh4 .framer-1yjkgbk { padding: 80px 50px 80px 50px; width: 773px; } .framer-RGxh4 .framer-1hfbgp7 { grid-template-columns: repeat(2, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-RGxh4.framer-1vkwicx { width: 390px; } .framer-RGxh4 .framer-1yjkgbk { padding: 80px 16px 80px 16px; width: 351px; } .framer-RGxh4 .framer-1snnam0-container { width: 174px; } .framer-RGxh4 .framer-1hfbgp7 { grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ],
      `framer-RGxh4`
    )),
    (Q.displayName = `Powertools_section`),
    (Q.defaultProps = { height: 1232, width: 1200 }),
    C(
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
        ...N,
        ...I,
        ...L,
        ...f(O),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          u(A, {}, t),
          u(M, {}, t),
          u(xe, {}, t),
          u(be, {}, t),
          u(j, {}, t),
          u(ye, {}, t),
        ])
      ),
    }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `Framerk3I5EzP4j`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerAcceptsLayoutTemplate: `true`,
            framerAutoSizeImages: `true`,
            framerColorSyntax: `true`,
            framerIntrinsicHeight: `1232`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicWidth: `1200`,
            framerImmutableVariables: `true`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"tqgRq8HZX":{"layout":["fixed","fixed"]},"iQFgaXPm_":{"layout":["fixed","fixed"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `false`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, B as queryParamNames };
//# sourceMappingURL=OVFkOpfEasuzZl05Xt_0padiywrnNtNjv6MR9TeLj3w.Ba6Kkm0N.mjs.map
