import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  O as n,
  P as r,
  c as i,
  g as a,
  i as o,
  j as ee,
  l as s,
  o as te,
  s as ne,
  u as c,
  v as re,
  w as ie,
} from "./react.N6WDMTqS.mjs";
import { S as l, a as ae, n as u, r as oe, t as d } from "./motion.CXXzZ97F.mjs";
import {
  A as se,
  I as f,
  L as ce,
  O as p,
  U as le,
  at as ue,
  b as m,
  c as de,
  ct as fe,
  d as h,
  dt as pe,
  g,
  ht as _,
  it as me,
  lt as he,
  mt as ge,
  n as v,
  nt as _e,
  o as y,
  ot as b,
  p as ve,
  s as x,
  st as ye,
  t as S,
  tt as be,
  ut as xe,
  w as Se,
  x as C,
  y as w,
} from "./framer.w0XhpZTx.mjs";
import { i as T, n as Ce, r as E, t as we } from "./nl385Jssa.BV16yEHR.mjs";
import { a as D, c as O, i as k, o as Te, r as A, s as j } from "./shared.DPOhhryJ.mjs";
import { i as Ee, r as M } from "./cQxXulDZM.DXXtl8ZX.mjs";
import { n as De, t as N } from "./jNXHc0ip8.Bnggf-hw.mjs";
import Oe, { t as P } from "./JwheVIob4MDXrMV0zn8HQu5kg0cT4ekkcbgAOefyCXs.CtIqcT1s.mjs";
var F, I, L, R, z, B, V, ke, H, Ae, je, Me, Ne, U, W, G, K, q, J, Y, X, Z, Q, Pe, Fe, $, Ie;
e(() => {
  (ne(),
    le(),
    d(),
    ie(),
    te(),
    Te(),
    O(),
    k(),
    Ee(),
    De(),
    T(),
    P(),
    (F = f(j)),
    (I = f(M)),
    (L = _(v)),
    (R = _(C)),
    (z = f(N)),
    (B = f(D)),
    (V = f(A)),
    (ke = {
      DXl2Ffqj1: `(min-width: 810px) and (max-width: 1199.98px)`,
      ECjQ7eOU5: `(min-width: 1200px)`,
      o9v3D3f6Z: `(max-width: 809.98px)`,
    }),
    (H = () => typeof document < `u`),
    (Ae = []),
    (je = `framer-b7pcc`),
    (Me = {
      DXl2Ffqj1: `framer-v-zhnk3j`,
      ECjQ7eOU5: `framer-v-1ldbu0w`,
      o9v3D3f6Z: `framer-v-fxrwg`,
    }),
    (Ne = (e, t, n) => (e && t ? `position` : n)),
    (U = {
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
    (W = { delay: 0, duration: 1, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` }),
    (G = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (K = { delay: 0.2, duration: 1, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` }),
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
        default:
          return n;
      }
    }),
    (X = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (Z = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = he({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (Q = { Desktop: `ECjQ7eOU5`, Phone: `o9v3D3f6Z`, Tablet: `DXl2Ffqj1` }),
    (Pe = ({ value: e }) =>
      b()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Fe = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `ECjQ7eOU5`,
    })),
    ($ = ge(
      a(function (e, a) {
        let te = n(null),
          ne = a ?? te,
          ie = re(),
          { activeLocale: d, setLocale: se } = ye(),
          f = _e(),
          { style: ce, className: le, layoutId: _, variant: he, ...ge } = Fe(e);
        fe(ee(() => Oe({}, d), [d]));
        let [b, Se] = ue(he, ke, !1),
          { activeVariantCallback: T, delay: Ce } = be(void 0),
          E = ({ overlay: e }) =>
            T(async (...t) => {
              e.toggle();
            }),
          O = ({ overlay: e }) =>
            T(async (...t) => {
              e.hide();
            }),
          k = p(je, we),
          Te = () => !H() || b === `o9v3D3f6Z`,
          Ee = t(de)?.isLayoutTemplate,
          De = !!t(ae)?.transition?.layout,
          P = Ne(Ee, De),
          F = xe(`CDo_AQ7jg`),
          I = n(null),
          z = () => !H() || b !== `o9v3D3f6Z`;
        pe();
        let B = xe(`SHQlY7UPg`),
          V = n(null);
        return (
          me({}),
          s(de.Provider, {
            value: {
              activeVariantId: b,
              humanReadableVariantMap: Q,
              primaryVariantId: `ECjQ7eOU5`,
              variantClassNames: Me,
            },
            children: c(oe, {
              id: _ ?? ie,
              children: [
                s(Pe, { value: `html body { background: rgb(255, 255, 255); }` }),
                c(l.div, {
                  ...ge,
                  className: p(k, `framer-1ldbu0w`, le),
                  ref: ne,
                  style: { ...ce },
                  children: [
                    Te() &&
                      s(l.div, {
                        className: `framer-1p2ka61 hidden-1ldbu0w hidden-zhnk3j`,
                        "data-framer-name": `Phone`,
                        layout: P,
                        children: c(`section`, {
                          className: `framer-qmekzt`,
                          "data-framer-name": `Classes`,
                          id: F,
                          ref: I,
                          children: [
                            s(ve, {
                              href: { webPageId: `k3I5EzP4j` },
                              motionChild: !0,
                              nodeId: `vaFjeN75I`,
                              openInNewTab: !1,
                              scopeId: `sCRzKtpcd`,
                              children: s(l.a, {
                                className: `framer-1hw931c framer-151zwy0`,
                                children: s(j, {
                                  animated: !1,
                                  BKVe8Pgvw: !0,
                                  className: `framer-dp6uh`,
                                  fICyAUQY1: !0,
                                  layoutId: `sdw_m3dsW`,
                                  lKf_CQTz5: !0,
                                }),
                              }),
                            }),
                            c(`div`, {
                              className: `framer-woenuf`,
                              "data-framer-name": `Text`,
                              children: [
                                z() &&
                                  s(j, {
                                    animated: !1,
                                    BKVe8Pgvw: !0,
                                    className: `framer-kp3x5t hidden-fxrwg`,
                                    fICyAUQY1: !0,
                                    layoutId: `vkGzXTRh1`,
                                    lKf_CQTz5: !0,
                                  }),
                                z() &&
                                  s(ve, {
                                    href: { webPageId: `xidqw88KX` },
                                    motionChild: !0,
                                    nodeId: `McxDwRbD5`,
                                    openInNewTab: !1,
                                    scopeId: `sCRzKtpcd`,
                                    children: s(l.a, {
                                      className: `framer-nft98s hidden-fxrwg framer-151zwy0`,
                                      children: s(j, {
                                        animated: !1,
                                        BKVe8Pgvw: !0,
                                        className: `framer-16s12s`,
                                        fICyAUQY1: !0,
                                        layoutId: `ZJiUQ6Ppa`,
                                        lKf_CQTz5: !0,
                                      }),
                                    }),
                                  }),
                                s(g, {
                                  breakpoint: b,
                                  overrides: {
                                    o9v3D3f6Z: { y: (f?.y || 0) + 0 + 0 + 0 + 0 + 80 + 64 + 0 + 0 },
                                  },
                                  children: s(S, {
                                    height: 26,
                                    children: s(L, {
                                      __framer__animate: { transition: W },
                                      __framer__animateOnce: !0,
                                      __framer__enter: U,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-g9zj4d-container`,
                                      nodeId: `x8k17l5kn`,
                                      rendersWithMotion: !0,
                                      scopeId: `sCRzKtpcd`,
                                      children: s(M, {
                                        ggTbrSuHk: `Power tools`,
                                        height: `100%`,
                                        id: `x8k17l5kn`,
                                        layoutId: `x8k17l5kn`,
                                        variant: G(`z6oSgdJxk`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                s(R, {
                                  __framer__animate: { transition: K },
                                  __framer__animateOnce: !0,
                                  __framer__enter: U,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: s(r, {
                                    children: s(`h3`, {
                                      className: `framer-styles-preset-1d7ew99`,
                                      "data-styles-preset": `nl385Jssa`,
                                      dir: `auto`,
                                      children: `Dewalt`,
                                    }),
                                  }),
                                  className: `framer-eqswd3`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1ixzh8j`,
                              "data-framer-name": `ClassesGallery`,
                              children: [
                                s(Z, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(m, {
                                        links: [
                                          {
                                            href: { webPageId: `ZAMlC_on9` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `ZAMlC_on9` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(g, {
                                            breakpoint: b,
                                            overrides: {
                                              o9v3D3f6Z: {
                                                width: `358px`,
                                                y: (f?.y || 0) + 0 + 0 + 0 + 0 + 80 + 192.4 + 0 + 0,
                                              },
                                            },
                                            children: s(S, {
                                              height: 400,
                                              children: c(v, {
                                                className: `framer-1splvmt-container`,
                                                id: `1splvmt`,
                                                nodeId: `JoLU9xDUM`,
                                                scopeId: `sCRzKtpcd`,
                                                children: [
                                                  s(g, {
                                                    breakpoint: b,
                                                    overrides: { o9v3D3f6Z: { oSlFkYxO1: t[1] } },
                                                    children: s(N, {
                                                      BlDyCL1Hj: q(
                                                        {
                                                          pixelHeight: 543,
                                                          pixelWidth: 604,
                                                          src: `../../assets/images/laZNNZNR3aQls3JW71xsJjJ2O8.png`,
                                                          srcSet: `../../assets/images/laZNNZNR3aQls3JW71xsJjJ2O8.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/laZNNZNR3aQls3JW71xsJjJ2O8.png 604w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `JoLU9xDUM`,
                                                      jTs_fuWrm: E({ overlay: e }),
                                                      JWP0bNV85: `Impact Wrench Machine`,
                                                      layoutId: `JoLU9xDUM`,
                                                      oSlFkYxO1: t[0],
                                                      style: { width: `100%` },
                                                      variant: G(`ZKOecjUjr`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                  s(u, {
                                                    children:
                                                      e.visible &&
                                                      s(i, {
                                                        children: o(
                                                          s(h, {
                                                            triggerId: `1splvmt`,
                                                            children: c(w, {
                                                              children: [
                                                                s(
                                                                  l.div,
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
                                                                    className: p(
                                                                      k,
                                                                      `framer-18ob2p8`
                                                                    ),
                                                                    "data-framer-portal-id": `1splvmt`,
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
                                                                  `MjKKcwH0d`
                                                                ),
                                                                s(l.div, {
                                                                  className: p(k, `framer-9sbu5i`),
                                                                  "data-framer-portal-id": `1splvmt`,
                                                                  transformTemplate: J,
                                                                  children: c(l.div, {
                                                                    className: `framer-1h0oklg`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-afhvng`,
                                                                        children: [
                                                                          s(C, {
                                                                            __fromCanvasComponent:
                                                                              !0,
                                                                            children: s(r, {
                                                                              children: s(`p`, {
                                                                                style: {
                                                                                  "--font-selector": `SW50ZXItQm9sZA==`,
                                                                                  "--framer-font-size": `20px`,
                                                                                  "--framer-font-weight": `700`,
                                                                                  "--framer-text-color": `rgb(71, 69, 69)`,
                                                                                },
                                                                                children: `Enquiry form`,
                                                                              }),
                                                                            }),
                                                                            className: `framer-1aa5oab`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-rdtwut`,
                                                                            onTap: O({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(D, {
                                                                              animated: !1,
                                                                              className: `framer-1takuam`,
                                                                              layoutId: `eHITMZ77i`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(y, {
                                                                        action: `https://api.framer.com/forms/v1/forms/dd8d905e-9916-40b0-a903-15c003c124b8/submit`,
                                                                        className: `framer-2si3dn`,
                                                                        nodeId: `hPyjhYNhO`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-1gp4utf`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Email`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-125zyb`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-1v5dowb`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-5bsvup`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Mobile number`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-1w3kd1y`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-kj86z4`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1czcn5f`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Product Name`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-skx09b`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-16f72aa`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1we645n`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Make, Model & Size`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-1valt94`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-kta0k7`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(S, {
                                                                                width: `221px`,
                                                                                children: s(v, {
                                                                                  className: `framer-107gsmd-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `oWSAzVhi4`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `sCRzKtpcd`,
                                                                                  children: s(A, {
                                                                                    height: `100%`,
                                                                                    id: `oWSAzVhi4`,
                                                                                    layoutId: `oWSAzVhi4`,
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
                                                                                      G(`Y6CHTJJM0`)
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
                                s(Z, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(m, {
                                        links: [
                                          {
                                            href: { webPageId: `WnaRNr5H3` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `WnaRNr5H3` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(g, {
                                            breakpoint: b,
                                            overrides: {
                                              o9v3D3f6Z: {
                                                width: `358px`,
                                                y:
                                                  (f?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  80 +
                                                  192.4 +
                                                  0 +
                                                  416,
                                              },
                                            },
                                            children: s(S, {
                                              height: 400,
                                              children: c(v, {
                                                className: `framer-17juanc-container`,
                                                id: `17juanc`,
                                                nodeId: `qxw_FQfg_`,
                                                scopeId: `sCRzKtpcd`,
                                                children: [
                                                  s(g, {
                                                    breakpoint: b,
                                                    overrides: { o9v3D3f6Z: { oSlFkYxO1: t[1] } },
                                                    children: s(N, {
                                                      BlDyCL1Hj: q(
                                                        {
                                                          pixelHeight: 543,
                                                          pixelWidth: 604,
                                                          src: `../../assets/images/Ej1AgNrELSY87rjHdgbbu8KjZMk.png`,
                                                          srcSet: `../../assets/images/Ej1AgNrELSY87rjHdgbbu8KjZMk.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/Ej1AgNrELSY87rjHdgbbu8KjZMk.png 604w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `qxw_FQfg_`,
                                                      jTs_fuWrm: E({ overlay: e }),
                                                      JWP0bNV85: `Impact Drill Machine`,
                                                      layoutId: `qxw_FQfg_`,
                                                      oSlFkYxO1: t[0],
                                                      style: { width: `100%` },
                                                      variant: G(`ZKOecjUjr`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                  s(u, {
                                                    children:
                                                      e.visible &&
                                                      s(i, {
                                                        children: o(
                                                          s(h, {
                                                            triggerId: `17juanc`,
                                                            children: c(w, {
                                                              children: [
                                                                s(
                                                                  l.div,
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
                                                                    className: p(
                                                                      k,
                                                                      `framer-12ao85j`
                                                                    ),
                                                                    "data-framer-portal-id": `17juanc`,
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
                                                                  `mu_DD92_U`
                                                                ),
                                                                s(l.div, {
                                                                  className: p(k, `framer-3s3sqr`),
                                                                  "data-framer-portal-id": `17juanc`,
                                                                  transformTemplate: J,
                                                                  children: c(l.div, {
                                                                    className: `framer-159ikuq`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-281vm7`,
                                                                        children: [
                                                                          s(C, {
                                                                            __fromCanvasComponent:
                                                                              !0,
                                                                            children: s(r, {
                                                                              children: s(`p`, {
                                                                                style: {
                                                                                  "--font-selector": `SW50ZXItQm9sZA==`,
                                                                                  "--framer-font-size": `20px`,
                                                                                  "--framer-font-weight": `700`,
                                                                                  "--framer-text-color": `rgb(71, 69, 69)`,
                                                                                },
                                                                                children: `Enquiry form`,
                                                                              }),
                                                                            }),
                                                                            className: `framer-97pc9k`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-mdm138`,
                                                                            onTap: O({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(D, {
                                                                              animated: !1,
                                                                              className: `framer-1l9ige9`,
                                                                              layoutId: `f0nuD9JZT`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(y, {
                                                                        action: `https://api.framer.com/forms/v1/forms/14d5917d-ec1b-4f5c-8097-4942669520c0/submit`,
                                                                        className: `framer-ak9dex`,
                                                                        nodeId: `WYgAFrF73`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-pa54pu`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Email`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-1b6doly`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-1nyr3l2`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-15o1vel`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Mobile number`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-1ip8edi`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-gqun5a`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-ak8hzy`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Product Name`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-jg85fl`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-ol2q1x`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1cwubdd`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Make, Model & Size`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-uue3fh`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-oqhypr`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(S, {
                                                                                width: `221px`,
                                                                                children: s(v, {
                                                                                  className: `framer-h27ilo-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `QKIjF3kah`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `sCRzKtpcd`,
                                                                                  children: s(A, {
                                                                                    height: `100%`,
                                                                                    id: `QKIjF3kah`,
                                                                                    layoutId: `QKIjF3kah`,
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
                                                                                      G(`Y6CHTJJM0`)
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
                                s(Z, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(m, {
                                        links: [
                                          {
                                            href: { webPageId: `I3ZXnfl0c` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `I3ZXnfl0c` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(g, {
                                            breakpoint: b,
                                            overrides: {
                                              o9v3D3f6Z: {
                                                width: `358px`,
                                                y:
                                                  (f?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  80 +
                                                  192.4 +
                                                  0 +
                                                  832,
                                              },
                                            },
                                            children: s(S, {
                                              height: 400,
                                              children: c(v, {
                                                className: `framer-icoorn-container`,
                                                id: `icoorn`,
                                                nodeId: `GohFqCsuW`,
                                                scopeId: `sCRzKtpcd`,
                                                children: [
                                                  s(g, {
                                                    breakpoint: b,
                                                    overrides: { o9v3D3f6Z: { oSlFkYxO1: t[1] } },
                                                    children: s(N, {
                                                      BlDyCL1Hj: q(
                                                        {
                                                          pixelHeight: 543,
                                                          pixelWidth: 604,
                                                          src: `../../assets/images/WnTbgjlbMc3PyDvo9dRnTj9tl4.png`,
                                                          srcSet: `../../assets/images/WnTbgjlbMc3PyDvo9dRnTj9tl4.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/WnTbgjlbMc3PyDvo9dRnTj9tl4.png 604w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `GohFqCsuW`,
                                                      jTs_fuWrm: E({ overlay: e }),
                                                      JWP0bNV85: `Demolition Hammer`,
                                                      layoutId: `GohFqCsuW`,
                                                      oSlFkYxO1: t[0],
                                                      style: { width: `100%` },
                                                      variant: G(`ZKOecjUjr`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                  s(u, {
                                                    children:
                                                      e.visible &&
                                                      s(i, {
                                                        children: o(
                                                          s(h, {
                                                            triggerId: `icoorn`,
                                                            children: c(w, {
                                                              children: [
                                                                s(
                                                                  l.div,
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
                                                                    className: p(
                                                                      k,
                                                                      `framer-95yimg`
                                                                    ),
                                                                    "data-framer-portal-id": `icoorn`,
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
                                                                  `qjYHG4GDb`
                                                                ),
                                                                s(l.div, {
                                                                  className: p(k, `framer-xoig27`),
                                                                  "data-framer-portal-id": `icoorn`,
                                                                  transformTemplate: J,
                                                                  children: c(l.div, {
                                                                    className: `framer-n3u11h`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-y2ti5j`,
                                                                        children: [
                                                                          s(C, {
                                                                            __fromCanvasComponent:
                                                                              !0,
                                                                            children: s(r, {
                                                                              children: s(`p`, {
                                                                                style: {
                                                                                  "--font-selector": `SW50ZXItQm9sZA==`,
                                                                                  "--framer-font-size": `20px`,
                                                                                  "--framer-font-weight": `700`,
                                                                                  "--framer-text-color": `rgb(71, 69, 69)`,
                                                                                },
                                                                                children: `Enquiry form`,
                                                                              }),
                                                                            }),
                                                                            className: `framer-1phqjd5`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-1jw6yk9`,
                                                                            onTap: O({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(D, {
                                                                              animated: !1,
                                                                              className: `framer-1r61olg`,
                                                                              layoutId: `xz5PKCiO9`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(y, {
                                                                        action: `https://api.framer.com/forms/v1/forms/13049f2e-c93f-44af-99a0-a38469a8e470/submit`,
                                                                        className: `framer-b2ycxg`,
                                                                        nodeId: `G0FHNueZm`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-o2kjow`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Email`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-1mbtbxb`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-1idzsl8`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1el4f1y`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Mobile number`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-1qdtwbe`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-1lg2o9e`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-jk1kih`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Product Name`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-17ctkwu`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-1i40w6q`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-15h4xrd`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Make, Model & Size`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-86x7jv`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-1yhgvf`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(S, {
                                                                                width: `221px`,
                                                                                children: s(v, {
                                                                                  className: `framer-111bimu-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `fiUXHyUp3`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `sCRzKtpcd`,
                                                                                  children: s(A, {
                                                                                    height: `100%`,
                                                                                    id: `fiUXHyUp3`,
                                                                                    layoutId: `fiUXHyUp3`,
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
                                                                                      G(`Y6CHTJJM0`)
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
                                s(Z, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(m, {
                                        links: [
                                          {
                                            href: { webPageId: `FPMuWMgra` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `FPMuWMgra` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(g, {
                                            breakpoint: b,
                                            overrides: {
                                              o9v3D3f6Z: {
                                                width: `358px`,
                                                y:
                                                  (f?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  80 +
                                                  192.4 +
                                                  0 +
                                                  1248,
                                              },
                                            },
                                            children: s(S, {
                                              height: 400,
                                              children: c(v, {
                                                className: `framer-46ac56-container`,
                                                id: `46ac56`,
                                                nodeId: `clpmmFGFD`,
                                                scopeId: `sCRzKtpcd`,
                                                children: [
                                                  s(g, {
                                                    breakpoint: b,
                                                    overrides: { o9v3D3f6Z: { oSlFkYxO1: t[1] } },
                                                    children: s(N, {
                                                      BlDyCL1Hj: q(
                                                        {
                                                          pixelHeight: 543,
                                                          pixelWidth: 604,
                                                          src: `../../assets/images/8umhxsHFMcoAeNfjlm4IlyHg.png`,
                                                          srcSet: `../../assets/images/8umhxsHFMcoAeNfjlm4IlyHg.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/8umhxsHFMcoAeNfjlm4IlyHg.png 604w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `clpmmFGFD`,
                                                      jTs_fuWrm: E({ overlay: e }),
                                                      JWP0bNV85: `Blower`,
                                                      layoutId: `clpmmFGFD`,
                                                      oSlFkYxO1: t[0],
                                                      style: { width: `100%` },
                                                      variant: G(`ZKOecjUjr`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                  s(u, {
                                                    children:
                                                      e.visible &&
                                                      s(i, {
                                                        children: o(
                                                          s(h, {
                                                            triggerId: `46ac56`,
                                                            children: c(w, {
                                                              children: [
                                                                s(
                                                                  l.div,
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
                                                                    className: p(
                                                                      k,
                                                                      `framer-1vgdq5d`
                                                                    ),
                                                                    "data-framer-portal-id": `46ac56`,
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
                                                                  `CzPSqUZm0`
                                                                ),
                                                                s(l.div, {
                                                                  className: p(k, `framer-1vj859p`),
                                                                  "data-framer-portal-id": `46ac56`,
                                                                  transformTemplate: J,
                                                                  children: c(l.div, {
                                                                    className: `framer-xhuebj`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-z948pm`,
                                                                        children: [
                                                                          s(C, {
                                                                            __fromCanvasComponent:
                                                                              !0,
                                                                            children: s(r, {
                                                                              children: s(`p`, {
                                                                                style: {
                                                                                  "--font-selector": `SW50ZXItQm9sZA==`,
                                                                                  "--framer-font-size": `20px`,
                                                                                  "--framer-font-weight": `700`,
                                                                                  "--framer-text-color": `rgb(71, 69, 69)`,
                                                                                },
                                                                                children: `Enquiry form`,
                                                                              }),
                                                                            }),
                                                                            className: `framer-1jsiuy1`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-jdj6oh`,
                                                                            onTap: O({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(D, {
                                                                              animated: !1,
                                                                              className: `framer-1qn9dky`,
                                                                              layoutId: `Ucklnru9E`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(y, {
                                                                        action: `https://api.framer.com/forms/v1/forms/c9045ffc-d6fd-4322-ac0f-c7851c60f6f5/submit`,
                                                                        className: `framer-1ohlqgn`,
                                                                        nodeId: `CTbD19h_g`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-iwpw4l`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Email`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-1gt3zfj`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-a8bv1`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1bnx7l8`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Mobile number`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-tvkrdf`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-gl8o30`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-83fcx3`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Product Name`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-1cf2e9d`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-vktxk3`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-uz6l1e`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Make, Model & Size`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-1o0f004`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-15l440`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(S, {
                                                                                width: `221px`,
                                                                                children: s(v, {
                                                                                  className: `framer-13a6m6-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `JTc3BDpKr`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `sCRzKtpcd`,
                                                                                  children: s(A, {
                                                                                    height: `100%`,
                                                                                    id: `JTc3BDpKr`,
                                                                                    layoutId: `JTc3BDpKr`,
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
                                                                                      G(`Y6CHTJJM0`)
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
                                s(Z, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(m, {
                                        links: [
                                          {
                                            href: { webPageId: `RbriVzgza` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `RbriVzgza` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(g, {
                                            breakpoint: b,
                                            overrides: {
                                              o9v3D3f6Z: {
                                                width: `358px`,
                                                y:
                                                  (f?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  80 +
                                                  192.4 +
                                                  0 +
                                                  1664,
                                              },
                                            },
                                            children: s(S, {
                                              height: 400,
                                              children: c(v, {
                                                className: `framer-sqp3lm-container`,
                                                id: `sqp3lm`,
                                                nodeId: `MzcV0Lhsd`,
                                                scopeId: `sCRzKtpcd`,
                                                children: [
                                                  s(g, {
                                                    breakpoint: b,
                                                    overrides: { o9v3D3f6Z: { oSlFkYxO1: t[1] } },
                                                    children: s(N, {
                                                      BlDyCL1Hj: q(
                                                        {
                                                          pixelHeight: 522,
                                                          pixelWidth: 587,
                                                          src: `../../assets/images/zJZYRTwSj3WMJxWJnh0z1iTahtk.png`,
                                                          srcSet: `../../assets/images/zJZYRTwSj3WMJxWJnh0z1iTahtk.png?scale-down-to=512&width=587&height=522 512w,../../assets/images/zJZYRTwSj3WMJxWJnh0z1iTahtk.png 587w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `MzcV0Lhsd`,
                                                      jTs_fuWrm: E({ overlay: e }),
                                                      JWP0bNV85: `Angle Grinder`,
                                                      layoutId: `MzcV0Lhsd`,
                                                      oSlFkYxO1: t[0],
                                                      style: { width: `100%` },
                                                      variant: G(`ZKOecjUjr`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                  s(u, {
                                                    children:
                                                      e.visible &&
                                                      s(i, {
                                                        children: o(
                                                          s(h, {
                                                            triggerId: `sqp3lm`,
                                                            children: c(w, {
                                                              children: [
                                                                s(
                                                                  l.div,
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
                                                                    className: p(
                                                                      k,
                                                                      `framer-1lh31ue`
                                                                    ),
                                                                    "data-framer-portal-id": `sqp3lm`,
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
                                                                  `bOiVWBub0`
                                                                ),
                                                                s(l.div, {
                                                                  className: p(k, `framer-1avnyar`),
                                                                  "data-framer-portal-id": `sqp3lm`,
                                                                  transformTemplate: J,
                                                                  children: c(l.div, {
                                                                    className: `framer-1f9l38a`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-10ebtz3`,
                                                                        children: [
                                                                          s(C, {
                                                                            __fromCanvasComponent:
                                                                              !0,
                                                                            children: s(r, {
                                                                              children: s(`p`, {
                                                                                style: {
                                                                                  "--font-selector": `SW50ZXItQm9sZA==`,
                                                                                  "--framer-font-size": `20px`,
                                                                                  "--framer-font-weight": `700`,
                                                                                  "--framer-text-color": `rgb(71, 69, 69)`,
                                                                                },
                                                                                children: `Enquiry form`,
                                                                              }),
                                                                            }),
                                                                            className: `framer-db6w5a`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-k82t3i`,
                                                                            onTap: O({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(D, {
                                                                              animated: !1,
                                                                              className: `framer-1vkdjxq`,
                                                                              layoutId: `IJpwThbXX`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(y, {
                                                                        action: `https://api.framer.com/forms/v1/forms/04676a03-ec07-4390-af50-318e78f03898/submit`,
                                                                        className: `framer-1ugwrgr`,
                                                                        nodeId: `nerYildfb`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-w4xm68`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Email`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-nu355h`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-ehwdy9`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-5xbwuq`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Mobile number`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-1m8znfp`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-1vtamdb`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-4m28qv`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Product Name`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-q619vd`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-1jg1ps1`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-vt8xl6`,
                                                                                children: [
                                                                                  s(C, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: s(r, {
                                                                                      children: s(
                                                                                        `p`,
                                                                                        {
                                                                                          style: {
                                                                                            "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                            "--framer-font-size": `12px`,
                                                                                            "--framer-font-weight": `500`,
                                                                                            "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                          },
                                                                                          children: `Make, Model & Size`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-at2yyh`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(x, {
                                                                                    className: `framer-1k6zjsk`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(S, {
                                                                                width: `221px`,
                                                                                children: s(v, {
                                                                                  className: `framer-stjwey-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `hHzzzeuR7`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `sCRzKtpcd`,
                                                                                  children: s(A, {
                                                                                    height: `100%`,
                                                                                    id: `hHzzzeuR7`,
                                                                                    layoutId: `hHzzzeuR7`,
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
                                                                                      G(`Y6CHTJJM0`)
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
                    z() &&
                      c(l.section, {
                        className: `framer-16fh309 hidden-fxrwg`,
                        "data-framer-name": `Classes`,
                        id: B,
                        layout: P,
                        ref: V,
                        children: [
                          s(ve, {
                            href: { webPageId: `k3I5EzP4j` },
                            motionChild: !0,
                            nodeId: `tXeBCRV0O`,
                            openInNewTab: !1,
                            scopeId: `sCRzKtpcd`,
                            children: s(l.a, {
                              className: `framer-y5pmnn framer-151zwy0`,
                              children: s(j, {
                                animated: !1,
                                BKVe8Pgvw: !0,
                                className: `framer-1w1yfon`,
                                fICyAUQY1: !0,
                                layoutId: `YJkV4ECoO`,
                                lKf_CQTz5: !0,
                              }),
                            }),
                          }),
                          c(`div`, {
                            className: `framer-p1egi7`,
                            "data-framer-name": `Text`,
                            children: [
                              s(g, {
                                breakpoint: b,
                                overrides: {
                                  DXl2Ffqj1: { y: (f?.y || 0) + 0 + 0 + 80 + 64 + 0 + 0 },
                                },
                                children: s(S, {
                                  height: 26,
                                  y: (f?.y || 0) + 0 + 0 + 96 + 64 + 0 + 0,
                                  children: s(L, {
                                    __framer__animate: { transition: W },
                                    __framer__animateOnce: !0,
                                    __framer__enter: U,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1md28bc-container`,
                                    nodeId: `HagO6ppIi`,
                                    rendersWithMotion: !0,
                                    scopeId: `sCRzKtpcd`,
                                    children: s(M, {
                                      ggTbrSuHk: `Power tools`,
                                      height: `100%`,
                                      id: `HagO6ppIi`,
                                      layoutId: `HagO6ppIi`,
                                      variant: G(`z6oSgdJxk`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              s(R, {
                                __framer__animate: { transition: K },
                                __framer__animateOnce: !0,
                                __framer__enter: U,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: s(r, {
                                  children: s(`h3`, {
                                    className: `framer-styles-preset-1d7ew99`,
                                    "data-styles-preset": `nl385Jssa`,
                                    dir: `auto`,
                                    children: `Dewalt`,
                                  }),
                                }),
                                className: `framer-vhzdqz`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          c(`div`, {
                            className: `framer-y5i0cp`,
                            "data-framer-name": `ClassesGallery`,
                            children: [
                              s(Z, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  s(i, {
                                    children: s(m, {
                                      links: [
                                        {
                                          href: { webPageId: `ZAMlC_on9` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `ZAMlC_on9` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(g, {
                                          breakpoint: b,
                                          overrides: {
                                            DXl2Ffqj1: {
                                              width: `max((min(${f?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (f?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 0,
                                            },
                                          },
                                          children: s(S, {
                                            height: 400,
                                            width: `max((min(${f?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (f?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 0,
                                            children: c(v, {
                                              className: `framer-5f8zdk-container`,
                                              id: `5f8zdk`,
                                              nodeId: `nGReYMQKg`,
                                              scopeId: `sCRzKtpcd`,
                                              children: [
                                                s(g, {
                                                  breakpoint: b,
                                                  overrides: { DXl2Ffqj1: { oSlFkYxO1: t[1] } },
                                                  children: s(N, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 543,
                                                        pixelWidth: 554,
                                                        src: `../../assets/images/YWv1pXrPeahJtzYIxB95O59VQ.png?width=554&height=543`,
                                                        srcSet: `../../assets/images/YWv1pXrPeahJtzYIxB95O59VQ.png 512w,../../assets/images/YWv1pXrPeahJtzYIxB95O59VQ.png?width=554&height=543 554w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `nGReYMQKg`,
                                                    jTs_fuWrm: E({ overlay: e }),
                                                    JWP0bNV85: `Impact Wrench Machine`,
                                                    layoutId: `nGReYMQKg`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: G(`ZKOecjUjr`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `5f8zdk`,
                                                          children: c(w, {
                                                            children: [
                                                              s(
                                                                l.div,
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
                                                                  className: p(k, `framer-1ublxpn`),
                                                                  "data-framer-portal-id": `5f8zdk`,
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
                                                                `qBvZPq2fk`
                                                              ),
                                                              s(l.div, {
                                                                className: p(k, `framer-1oo9520`),
                                                                "data-framer-portal-id": `5f8zdk`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-dn76v2`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-y7exp8`,
                                                                      children: [
                                                                        s(C, {
                                                                          __fromCanvasComponent: !0,
                                                                          children: s(r, {
                                                                            children: s(`p`, {
                                                                              style: {
                                                                                "--font-selector": `SW50ZXItQm9sZA==`,
                                                                                "--framer-font-size": `20px`,
                                                                                "--framer-font-weight": `700`,
                                                                                "--framer-text-color": `rgb(71, 69, 69)`,
                                                                              },
                                                                              children: `Enquiry form`,
                                                                            }),
                                                                          }),
                                                                          className: `framer-icuejr`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-14cjt86`,
                                                                          onTap: O({ overlay: e }),
                                                                          children: s(D, {
                                                                            animated: !1,
                                                                            className: `framer-hsxfqh`,
                                                                            layoutId: `bggGtKR91`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      action: `https://api.framer.com/forms/v1/forms/187b978c-8230-448a-ac01-64cb406c3f05/submit`,
                                                                      className: `framer-1ukcgi9`,
                                                                      nodeId: `Y5E6sY_lD`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-ce6s22`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Email`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-142sort`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1dsu9ry`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1oycyv0`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Mobile number`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-zni9qe`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-w32ffq`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-fx54ed`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Product Name`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-6970yv`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1jvdb7b`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-13zgu3t`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Make, Model & Size`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-1u8ckpf`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-5x3bf7`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(S, {
                                                                              width: `277px`,
                                                                              children: s(v, {
                                                                                className: `framer-186gagh-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `gliTF0B0N`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `sCRzKtpcd`,
                                                                                children: s(A, {
                                                                                  height: `100%`,
                                                                                  id: `gliTF0B0N`,
                                                                                  layoutId: `gliTF0B0N`,
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
                                                                                    G(`Y6CHTJJM0`)
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
                              s(Z, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  s(i, {
                                    children: s(m, {
                                      links: [
                                        {
                                          href: { webPageId: `WnaRNr5H3` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `WnaRNr5H3` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(g, {
                                          breakpoint: b,
                                          overrides: {
                                            DXl2Ffqj1: {
                                              width: `max((min(${f?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (f?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 0,
                                            },
                                          },
                                          children: s(S, {
                                            height: 400,
                                            width: `max((min(${f?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (f?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 0,
                                            children: c(v, {
                                              className: `framer-10wl5mp-container`,
                                              id: `10wl5mp`,
                                              nodeId: `EtHOgVbgx`,
                                              scopeId: `sCRzKtpcd`,
                                              children: [
                                                s(g, {
                                                  breakpoint: b,
                                                  overrides: { DXl2Ffqj1: { oSlFkYxO1: t[1] } },
                                                  children: s(N, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 524,
                                                        pixelWidth: 578,
                                                        src: `../../assets/images/aOjhSxDsEyMJyEmCRqQRJXCFge0.png?width=578&height=524`,
                                                        srcSet: `../../assets/images/aOjhSxDsEyMJyEmCRqQRJXCFge0.png 512w,../../assets/images/aOjhSxDsEyMJyEmCRqQRJXCFge0.png?width=578&height=524 578w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `EtHOgVbgx`,
                                                    jTs_fuWrm: E({ overlay: e }),
                                                    JWP0bNV85: `Impact Drill Machine`,
                                                    layoutId: `EtHOgVbgx`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: G(`ZKOecjUjr`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `10wl5mp`,
                                                          children: c(w, {
                                                            children: [
                                                              s(
                                                                l.div,
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
                                                                  className: p(k, `framer-4orijw`),
                                                                  "data-framer-portal-id": `10wl5mp`,
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
                                                                `DcC_P_a9n`
                                                              ),
                                                              s(l.div, {
                                                                className: p(k, `framer-16stams`),
                                                                "data-framer-portal-id": `10wl5mp`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-2icwjo`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-pdj08r`,
                                                                      children: [
                                                                        s(C, {
                                                                          __fromCanvasComponent: !0,
                                                                          children: s(r, {
                                                                            children: s(`p`, {
                                                                              style: {
                                                                                "--font-selector": `SW50ZXItQm9sZA==`,
                                                                                "--framer-font-size": `20px`,
                                                                                "--framer-font-weight": `700`,
                                                                                "--framer-text-color": `rgb(71, 69, 69)`,
                                                                              },
                                                                              children: `Enquiry form`,
                                                                            }),
                                                                          }),
                                                                          className: `framer-r3aym8`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-25asc7`,
                                                                          onTap: O({ overlay: e }),
                                                                          children: s(D, {
                                                                            animated: !1,
                                                                            className: `framer-d8um59`,
                                                                            layoutId: `TFmuOX71M`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      action: `https://api.framer.com/forms/v1/forms/c7db6c73-cd0a-48d0-9253-d2a62254ff37/submit`,
                                                                      className: `framer-c8w2c0`,
                                                                      nodeId: `Xkuq4Akja`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-13ddi5`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Email`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-jie0uh`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1i9zov6`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-vh35gc`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Mobile number`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-daaieu`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-17huj29`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-103tzmn`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Product Name`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-1mvqfep`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1k9w6y5`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1fru6v4`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Make, Model & Size`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-hsyc5w`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-49g4o9`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(S, {
                                                                              width: `277px`,
                                                                              children: s(v, {
                                                                                className: `framer-1i791dj-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `sU_kqHvtr`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `sCRzKtpcd`,
                                                                                children: s(A, {
                                                                                  height: `100%`,
                                                                                  id: `sU_kqHvtr`,
                                                                                  layoutId: `sU_kqHvtr`,
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
                                                                                    G(`Y6CHTJJM0`)
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
                              s(Z, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  s(i, {
                                    children: s(m, {
                                      links: [
                                        {
                                          href: { webPageId: `I3ZXnfl0c` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `I3ZXnfl0c` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(g, {
                                          breakpoint: b,
                                          overrides: {
                                            DXl2Ffqj1: {
                                              width: `max((min(${f?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (f?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 416,
                                            },
                                          },
                                          children: s(S, {
                                            height: 400,
                                            width: `max((min(${f?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (f?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 0,
                                            children: c(v, {
                                              className: `framer-fiwlxw-container`,
                                              id: `fiwlxw`,
                                              nodeId: `QpnN0TLse`,
                                              scopeId: `sCRzKtpcd`,
                                              children: [
                                                s(g, {
                                                  breakpoint: b,
                                                  overrides: { DXl2Ffqj1: { oSlFkYxO1: t[1] } },
                                                  children: s(N, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 621,
                                                        pixelWidth: 714,
                                                        src: `../../assets/images/0WYuHr0Gc596AtmEsEztbBrCko.png?width=714&height=621`,
                                                        srcSet: `../../assets/images/0WYuHr0Gc596AtmEsEztbBrCko.png 512w,../../assets/images/0WYuHr0Gc596AtmEsEztbBrCko.png?width=714&height=621 714w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `QpnN0TLse`,
                                                    jTs_fuWrm: E({ overlay: e }),
                                                    JWP0bNV85: `Demolition Hammer`,
                                                    layoutId: `QpnN0TLse`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: G(`ZKOecjUjr`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `fiwlxw`,
                                                          children: c(w, {
                                                            children: [
                                                              s(
                                                                l.div,
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
                                                                  className: p(k, `framer-42sbb3`),
                                                                  "data-framer-portal-id": `fiwlxw`,
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
                                                                `zLhsfU93s`
                                                              ),
                                                              s(l.div, {
                                                                className: p(k, `framer-urkkfj`),
                                                                "data-framer-portal-id": `fiwlxw`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-y7l0ra`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-wj09dq`,
                                                                      children: [
                                                                        s(C, {
                                                                          __fromCanvasComponent: !0,
                                                                          children: s(r, {
                                                                            children: s(`p`, {
                                                                              style: {
                                                                                "--font-selector": `SW50ZXItQm9sZA==`,
                                                                                "--framer-font-size": `20px`,
                                                                                "--framer-font-weight": `700`,
                                                                                "--framer-text-color": `rgb(71, 69, 69)`,
                                                                              },
                                                                              children: `Enquiry form`,
                                                                            }),
                                                                          }),
                                                                          className: `framer-1y1axb7`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-19ge6cm`,
                                                                          onTap: O({ overlay: e }),
                                                                          children: s(D, {
                                                                            animated: !1,
                                                                            className: `framer-ox1kud`,
                                                                            layoutId: `cRZihoAiE`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      action: `https://api.framer.com/forms/v1/forms/07f06d15-8fc1-4929-b4d9-616d5736df4f/submit`,
                                                                      className: `framer-1u5jxdb`,
                                                                      nodeId: `epQ1v7IpD`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-ryteob`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Email`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-1c03khf`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-fyd3np`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-fnou8h`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Mobile number`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-gfrdbg`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1c612ni`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-fn0zas`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Product Name`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-39z44t`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-obhgad`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1l9k7df`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Make, Model & Size`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-1k3s2ya`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-v5r4nu`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(S, {
                                                                              width: `277px`,
                                                                              children: s(v, {
                                                                                className: `framer-1mpvnd1-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `M11GCUIdJ`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `sCRzKtpcd`,
                                                                                children: s(A, {
                                                                                  height: `100%`,
                                                                                  id: `M11GCUIdJ`,
                                                                                  layoutId: `M11GCUIdJ`,
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
                                                                                    G(`Y6CHTJJM0`)
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
                              s(Z, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  s(i, {
                                    children: s(m, {
                                      links: [
                                        {
                                          href: { webPageId: `FPMuWMgra` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `FPMuWMgra` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(g, {
                                          breakpoint: b,
                                          overrides: {
                                            DXl2Ffqj1: {
                                              width: `max((min(${f?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (f?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 416,
                                            },
                                          },
                                          children: s(S, {
                                            height: 400,
                                            width: `max((min(${f?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (f?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 416,
                                            children: c(v, {
                                              className: `framer-183omq9-container`,
                                              id: `183omq9`,
                                              nodeId: `zRh0YcR3P`,
                                              scopeId: `sCRzKtpcd`,
                                              children: [
                                                s(g, {
                                                  breakpoint: b,
                                                  overrides: { DXl2Ffqj1: { oSlFkYxO1: t[1] } },
                                                  children: s(N, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 621,
                                                        pixelWidth: 714,
                                                        src: `../../assets/images/KQGX0wWU7kaqEMYlP4Xhic0s.png?width=714&height=621`,
                                                        srcSet: `../../assets/images/KQGX0wWU7kaqEMYlP4Xhic0s.png 512w,../../assets/images/KQGX0wWU7kaqEMYlP4Xhic0s.png?width=714&height=621 714w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `zRh0YcR3P`,
                                                    jTs_fuWrm: E({ overlay: e }),
                                                    JWP0bNV85: `Blower `,
                                                    layoutId: `zRh0YcR3P`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: G(`ZKOecjUjr`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `183omq9`,
                                                          children: c(w, {
                                                            children: [
                                                              s(
                                                                l.div,
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
                                                                  className: p(k, `framer-96si5`),
                                                                  "data-framer-portal-id": `183omq9`,
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
                                                                `TA9QeUJ60`
                                                              ),
                                                              s(l.div, {
                                                                className: p(k, `framer-qi4twy`),
                                                                "data-framer-portal-id": `183omq9`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-1ww39ti`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-1s806f3`,
                                                                      children: [
                                                                        s(C, {
                                                                          __fromCanvasComponent: !0,
                                                                          children: s(r, {
                                                                            children: s(`p`, {
                                                                              style: {
                                                                                "--font-selector": `SW50ZXItQm9sZA==`,
                                                                                "--framer-font-size": `20px`,
                                                                                "--framer-font-weight": `700`,
                                                                                "--framer-text-color": `rgb(71, 69, 69)`,
                                                                              },
                                                                              children: `Enquiry form`,
                                                                            }),
                                                                          }),
                                                                          className: `framer-flgl9v`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-1a6ba9a`,
                                                                          onTap: O({ overlay: e }),
                                                                          children: s(D, {
                                                                            animated: !1,
                                                                            className: `framer-1l2so8z`,
                                                                            layoutId: `g1imIBWez`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      action: `https://api.framer.com/forms/v1/forms/433ea379-7ee7-4bb7-9e49-00f7464beed0/submit`,
                                                                      className: `framer-3fkfz9`,
                                                                      nodeId: `rOAj_Tufi`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-75ggey`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Email`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-owwu2s`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-6y8t0j`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1khf29k`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Mobile number`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-1r0u0dy`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-19hvl2`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-17e5fci`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Product Name`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-kn8b71`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1t6u5xr`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-odxfx3`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Make, Model & Size`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-uajs6e`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-mtuyo0`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(S, {
                                                                              width: `277px`,
                                                                              children: s(v, {
                                                                                className: `framer-9n024-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `uPGlJdJQC`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `sCRzKtpcd`,
                                                                                children: s(A, {
                                                                                  height: `100%`,
                                                                                  id: `uPGlJdJQC`,
                                                                                  layoutId: `uPGlJdJQC`,
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
                                                                                    G(`Y6CHTJJM0`)
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
                              s(Z, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  s(i, {
                                    children: s(m, {
                                      links: [
                                        {
                                          href: { webPageId: `RbriVzgza` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `RbriVzgza` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(g, {
                                          breakpoint: b,
                                          overrides: {
                                            DXl2Ffqj1: {
                                              width: `max((min(${f?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (f?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 832,
                                            },
                                          },
                                          children: s(S, {
                                            height: 400,
                                            width: `max((min(${f?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (f?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 416,
                                            children: c(v, {
                                              className: `framer-16u8b4f-container`,
                                              id: `16u8b4f`,
                                              nodeId: `pibTjvELe`,
                                              scopeId: `sCRzKtpcd`,
                                              children: [
                                                s(g, {
                                                  breakpoint: b,
                                                  overrides: { DXl2Ffqj1: { oSlFkYxO1: t[1] } },
                                                  children: s(N, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 621,
                                                        pixelWidth: 714,
                                                        src: `../../assets/images/WPSNjnoAgWr2wbx5om2ghgyxbHk.png?width=714&height=621`,
                                                        srcSet: `../../assets/images/WPSNjnoAgWr2wbx5om2ghgyxbHk.png 512w,../../assets/images/WPSNjnoAgWr2wbx5om2ghgyxbHk.png?width=714&height=621 714w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `pibTjvELe`,
                                                    jTs_fuWrm: E({ overlay: e }),
                                                    JWP0bNV85: `Angle Grinder`,
                                                    layoutId: `pibTjvELe`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: G(`ZKOecjUjr`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `16u8b4f`,
                                                          children: c(w, {
                                                            children: [
                                                              s(
                                                                l.div,
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
                                                                  className: p(k, `framer-1p4um1u`),
                                                                  "data-framer-portal-id": `16u8b4f`,
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
                                                                `gfLxDBGTA`
                                                              ),
                                                              s(l.div, {
                                                                className: p(k, `framer-1h0dsz3`),
                                                                "data-framer-portal-id": `16u8b4f`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-jpq4mz`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-1hl9zy3`,
                                                                      children: [
                                                                        s(C, {
                                                                          __fromCanvasComponent: !0,
                                                                          children: s(r, {
                                                                            children: s(`p`, {
                                                                              style: {
                                                                                "--font-selector": `SW50ZXItQm9sZA==`,
                                                                                "--framer-font-size": `20px`,
                                                                                "--framer-font-weight": `700`,
                                                                                "--framer-text-color": `rgb(71, 69, 69)`,
                                                                              },
                                                                              children: `Enquiry form`,
                                                                            }),
                                                                          }),
                                                                          className: `framer-cnv0fo`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-pl8z0m`,
                                                                          onTap: O({ overlay: e }),
                                                                          children: s(D, {
                                                                            animated: !1,
                                                                            className: `framer-47ku2l`,
                                                                            layoutId: `fUzcSHVV_`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      action: `https://api.framer.com/forms/v1/forms/f01ac28e-950a-41e1-8c9d-7cdbcf42f93f/submit`,
                                                                      className: `framer-a1hdak`,
                                                                      nodeId: `HfMDQxBAk`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-fpvp94`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Email`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-1xa699j`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-7wh1qd`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1qb2zm4`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Mobile number`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-ktf9ny`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-883ad`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-17sev2f`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Product Name`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-1ggtbe4`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1gsp0si`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1tu81j6`,
                                                                              children: [
                                                                                s(C, {
                                                                                  __fromCanvasComponent:
                                                                                    !0,
                                                                                  children: s(r, {
                                                                                    children: s(
                                                                                      `p`,
                                                                                      {
                                                                                        style: {
                                                                                          "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                          "--framer-font-size": `12px`,
                                                                                          "--framer-font-weight": `500`,
                                                                                          "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                        },
                                                                                        children: `Make, Model & Size`,
                                                                                      }
                                                                                    ),
                                                                                  }),
                                                                                  className: `framer-cjzxz5`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-192fmaz`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(S, {
                                                                              width: `277px`,
                                                                              children: s(v, {
                                                                                className: `framer-3dc1nc-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `SQVjlXGc_`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `sCRzKtpcd`,
                                                                                children: s(A, {
                                                                                  height: `100%`,
                                                                                  id: `SQVjlXGc_`,
                                                                                  layoutId: `SQVjlXGc_`,
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
                                                                                    G(`Y6CHTJJM0`)
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
                  ],
                }),
                s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-b7pcc.framer-151zwy0, .framer-b7pcc .framer-151zwy0 { display: block; }`,
        `.framer-b7pcc.framer-1ldbu0w { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-b7pcc .framer-1p2ka61 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 2370px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 390px; }`,
        `.framer-b7pcc .framer-qmekzt { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 80px 16px 80px 16px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-b7pcc .framer-1hw931c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 24px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 24px; }`,
        `.framer-b7pcc .framer-dp6uh, .framer-b7pcc .framer-kp3x5t { --1335ju: 2; --18mrqx2: #000000; --3it368: 1; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-b7pcc .framer-woenuf, .framer-b7pcc .framer-p1egi7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-b7pcc .framer-nft98s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-b7pcc .framer-16s12s { --1335ju: 2; --18mrqx2: #000000; --3it368: 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-b7pcc .framer-g9zj4d-container, .framer-b7pcc .framer-1md28bc-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-b7pcc .framer-eqswd3, .framer-b7pcc .framer-vhzdqz { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-b7pcc .framer-1ixzh8j { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-b7pcc .framer-1splvmt-container, .framer-b7pcc .framer-17juanc-container, .framer-b7pcc .framer-icoorn-container, .framer-b7pcc .framer-46ac56-container, .framer-b7pcc .framer-sqp3lm-container, .framer-b7pcc .framer-5f8zdk-container, .framer-b7pcc .framer-10wl5mp-container, .framer-b7pcc .framer-fiwlxw-container, .framer-b7pcc .framer-183omq9-container, .framer-b7pcc .framer-16u8b4f-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-b7pcc.framer-18ob2p8, .framer-b7pcc.framer-12ao85j, .framer-b7pcc.framer-95yimg, .framer-b7pcc.framer-1vgdq5d, .framer-b7pcc.framer-1lh31ue, .framer-b7pcc.framer-1ublxpn, .framer-b7pcc.framer-4orijw, .framer-b7pcc.framer-42sbb3, .framer-b7pcc.framer-96si5, .framer-b7pcc.framer-1p4um1u { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-b7pcc.framer-9sbu5i, .framer-b7pcc.framer-3s3sqr, .framer-b7pcc.framer-xoig27, .framer-b7pcc.framer-1vj859p, .framer-b7pcc.framer-1avnyar { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 60px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-b7pcc .framer-1h0oklg, .framer-b7pcc .framer-159ikuq, .framer-b7pcc .framer-n3u11h, .framer-b7pcc .framer-xhuebj, .framer-b7pcc .framer-1f9l38a { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 300px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-b7pcc .framer-afhvng, .framer-b7pcc .framer-281vm7, .framer-b7pcc .framer-y2ti5j, .framer-b7pcc .framer-z948pm, .framer-b7pcc .framer-10ebtz3, .framer-b7pcc .framer-y7exp8, .framer-b7pcc .framer-pdj08r, .framer-b7pcc .framer-wj09dq, .framer-b7pcc .framer-1s806f3, .framer-b7pcc .framer-1hl9zy3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-b7pcc .framer-1aa5oab, .framer-b7pcc .framer-97pc9k, .framer-b7pcc .framer-1phqjd5, .framer-b7pcc .framer-1jsiuy1, .framer-b7pcc .framer-db6w5a, .framer-b7pcc .framer-icuejr, .framer-b7pcc .framer-r3aym8, .framer-b7pcc .framer-1y1axb7, .framer-b7pcc .framer-flgl9v, .framer-b7pcc .framer-cnv0fo { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-b7pcc .framer-rdtwut, .framer-b7pcc .framer-mdm138, .framer-b7pcc .framer-1jw6yk9, .framer-b7pcc .framer-jdj6oh, .framer-b7pcc .framer-k82t3i, .framer-b7pcc .framer-14cjt86, .framer-b7pcc .framer-25asc7, .framer-b7pcc .framer-19ge6cm, .framer-b7pcc .framer-1a6ba9a, .framer-b7pcc .framer-pl8z0m { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-b7pcc .framer-1takuam, .framer-b7pcc .framer-1l9ige9, .framer-b7pcc .framer-1r61olg, .framer-b7pcc .framer-1qn9dky, .framer-b7pcc .framer-1vkdjxq, .framer-b7pcc .framer-hsxfqh, .framer-b7pcc .framer-d8um59, .framer-b7pcc .framer-ox1kud, .framer-b7pcc .framer-1l2so8z, .framer-b7pcc .framer-47ku2l { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-b7pcc .framer-2si3dn, .framer-b7pcc .framer-ak9dex, .framer-b7pcc .framer-b2ycxg, .framer-b7pcc .framer-1ohlqgn, .framer-b7pcc .framer-1ugwrgr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 261px; }`,
        `.framer-b7pcc .framer-1gp4utf, .framer-b7pcc .framer-5bsvup, .framer-b7pcc .framer-1czcn5f, .framer-b7pcc .framer-1we645n, .framer-b7pcc .framer-pa54pu, .framer-b7pcc .framer-15o1vel, .framer-b7pcc .framer-ak8hzy, .framer-b7pcc .framer-1cwubdd, .framer-b7pcc .framer-o2kjow, .framer-b7pcc .framer-1el4f1y, .framer-b7pcc .framer-jk1kih, .framer-b7pcc .framer-15h4xrd, .framer-b7pcc .framer-iwpw4l, .framer-b7pcc .framer-1bnx7l8, .framer-b7pcc .framer-83fcx3, .framer-b7pcc .framer-uz6l1e, .framer-b7pcc .framer-w4xm68, .framer-b7pcc .framer-5xbwuq, .framer-b7pcc .framer-4m28qv, .framer-b7pcc .framer-vt8xl6, .framer-b7pcc .framer-ce6s22, .framer-b7pcc .framer-1oycyv0, .framer-b7pcc .framer-fx54ed, .framer-b7pcc .framer-13zgu3t, .framer-b7pcc .framer-13ddi5, .framer-b7pcc .framer-vh35gc, .framer-b7pcc .framer-103tzmn, .framer-b7pcc .framer-1fru6v4, .framer-b7pcc .framer-ryteob, .framer-b7pcc .framer-fnou8h, .framer-b7pcc .framer-fn0zas, .framer-b7pcc .framer-1l9k7df, .framer-b7pcc .framer-75ggey, .framer-b7pcc .framer-1khf29k, .framer-b7pcc .framer-17e5fci, .framer-b7pcc .framer-odxfx3, .framer-b7pcc .framer-fpvp94, .framer-b7pcc .framer-1qb2zm4, .framer-b7pcc .framer-17sev2f, .framer-b7pcc .framer-1tu81j6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-b7pcc .framer-125zyb, .framer-b7pcc .framer-1w3kd1y, .framer-b7pcc .framer-skx09b, .framer-b7pcc .framer-1valt94, .framer-b7pcc .framer-1b6doly, .framer-b7pcc .framer-1ip8edi, .framer-b7pcc .framer-jg85fl, .framer-b7pcc .framer-uue3fh, .framer-b7pcc .framer-1mbtbxb, .framer-b7pcc .framer-1qdtwbe, .framer-b7pcc .framer-17ctkwu, .framer-b7pcc .framer-86x7jv, .framer-b7pcc .framer-1gt3zfj, .framer-b7pcc .framer-tvkrdf, .framer-b7pcc .framer-1cf2e9d, .framer-b7pcc .framer-1o0f004, .framer-b7pcc .framer-nu355h, .framer-b7pcc .framer-1m8znfp, .framer-b7pcc .framer-q619vd, .framer-b7pcc .framer-at2yyh, .framer-b7pcc .framer-142sort, .framer-b7pcc .framer-zni9qe, .framer-b7pcc .framer-6970yv, .framer-b7pcc .framer-1u8ckpf, .framer-b7pcc .framer-jie0uh, .framer-b7pcc .framer-daaieu, .framer-b7pcc .framer-1mvqfep, .framer-b7pcc .framer-hsyc5w, .framer-b7pcc .framer-1c03khf, .framer-b7pcc .framer-gfrdbg, .framer-b7pcc .framer-39z44t, .framer-b7pcc .framer-1k3s2ya, .framer-b7pcc .framer-owwu2s, .framer-b7pcc .framer-1r0u0dy, .framer-b7pcc .framer-kn8b71, .framer-b7pcc .framer-uajs6e, .framer-b7pcc .framer-1xa699j, .framer-b7pcc .framer-ktf9ny, .framer-b7pcc .framer-1ggtbe4, .framer-b7pcc .framer-cjzxz5 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-b7pcc .framer-1v5dowb, .framer-b7pcc .framer-kj86z4, .framer-b7pcc .framer-16f72aa, .framer-b7pcc .framer-kta0k7, .framer-b7pcc .framer-1nyr3l2, .framer-b7pcc .framer-gqun5a, .framer-b7pcc .framer-ol2q1x, .framer-b7pcc .framer-oqhypr, .framer-b7pcc .framer-1idzsl8, .framer-b7pcc .framer-1lg2o9e, .framer-b7pcc .framer-1i40w6q, .framer-b7pcc .framer-1yhgvf, .framer-b7pcc .framer-a8bv1, .framer-b7pcc .framer-gl8o30, .framer-b7pcc .framer-vktxk3, .framer-b7pcc .framer-15l440, .framer-b7pcc .framer-ehwdy9, .framer-b7pcc .framer-1vtamdb, .framer-b7pcc .framer-1jg1ps1, .framer-b7pcc .framer-1k6zjsk, .framer-b7pcc .framer-1dsu9ry, .framer-b7pcc .framer-w32ffq, .framer-b7pcc .framer-1jvdb7b, .framer-b7pcc .framer-5x3bf7, .framer-b7pcc .framer-1i9zov6, .framer-b7pcc .framer-17huj29, .framer-b7pcc .framer-1k9w6y5, .framer-b7pcc .framer-49g4o9, .framer-b7pcc .framer-fyd3np, .framer-b7pcc .framer-1c612ni, .framer-b7pcc .framer-obhgad, .framer-b7pcc .framer-v5r4nu, .framer-b7pcc .framer-6y8t0j, .framer-b7pcc .framer-19hvl2, .framer-b7pcc .framer-1t6u5xr, .framer-b7pcc .framer-mtuyo0, .framer-b7pcc .framer-7wh1qd, .framer-b7pcc .framer-883ad, .framer-b7pcc .framer-1gsp0si, .framer-b7pcc .framer-192fmaz { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-b7pcc .framer-107gsmd-container, .framer-b7pcc .framer-h27ilo-container, .framer-b7pcc .framer-111bimu-container, .framer-b7pcc .framer-13a6m6-container, .framer-b7pcc .framer-stjwey-container, .framer-b7pcc .framer-186gagh-container, .framer-b7pcc .framer-1i791dj-container, .framer-b7pcc .framer-1mpvnd1-container, .framer-b7pcc .framer-9n024-container, .framer-b7pcc .framer-3dc1nc-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-b7pcc .framer-16fh309 { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 96px 24px 96px 24px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-b7pcc .framer-y5pmnn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 800px; }`,
        `.framer-b7pcc .framer-1w1yfon { --1335ju: 1.7; --18mrqx2: #000000; --3it368: 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-b7pcc .framer-y5i0cp { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-b7pcc.framer-1oo9520, .framer-b7pcc.framer-16stams, .framer-b7pcc.framer-urkkfj, .framer-b7pcc.framer-qi4twy, .framer-b7pcc.framer-1h0dsz3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-b7pcc .framer-dn76v2, .framer-b7pcc .framer-2icwjo, .framer-b7pcc .framer-y7l0ra, .framer-b7pcc .framer-1ww39ti, .framer-b7pcc .framer-jpq4mz { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-b7pcc .framer-1ukcgi9, .framer-b7pcc .framer-c8w2c0, .framer-b7pcc .framer-1u5jxdb, .framer-b7pcc .framer-3fkfz9, .framer-b7pcc .framer-a1hdak { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        ...Ce,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-b7pcc.framer-1ldbu0w { width: 810px; } .framer-b7pcc .framer-16fh309 { padding: 80px 24px 80px 24px; } .framer-b7pcc .framer-y5i0cp { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-b7pcc .framer-dn76v2, .framer-b7pcc .framer-2icwjo, .framer-b7pcc .framer-y7l0ra, .framer-b7pcc .framer-1ww39ti, .framer-b7pcc .framer-jpq4mz { height: min-content; width: min-content; } .framer-b7pcc .framer-y7exp8, .framer-b7pcc .framer-pdj08r, .framer-b7pcc .framer-wj09dq, .framer-b7pcc .framer-1s806f3, .framer-b7pcc .framer-1hl9zy3 { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-b7pcc.framer-1ldbu0w { width: 390px; }}`,
      ],
      `framer-b7pcc`
    )),
    ($.displayName = `Ingco`),
    ($.defaultProps = { height: 1609, width: 1200 }),
    Se(
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
        ...F,
        ...I,
        ...z,
        ...B,
        ...V,
        ...ce(E),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (t.locale, Promise.allSettled([se(M, {}, t), se(N, {}, t), se(A, {}, t)])),
    }),
    (Ie = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramersCRzKtpcd`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
            framerScrollSections: `{"CDo_AQ7jg":{"pattern":":CDo_AQ7jg","name":"classes"},"SHQlY7UPg":{"pattern":":SHQlY7UPg","name":"classes"}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `1609`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"DXl2Ffqj1":{"layout":["fixed","fixed"]},"o9v3D3f6Z":{"layout":["fixed","fixed"]}}}`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ie as __FramerMetadata__, $ as default, Ae as queryParamNames };
//# sourceMappingURL=fO_xOlvgEp00G7H47yf5qGy9tdfCEFf3F4uDScTvia8.BxHh76e6.mjs.map
