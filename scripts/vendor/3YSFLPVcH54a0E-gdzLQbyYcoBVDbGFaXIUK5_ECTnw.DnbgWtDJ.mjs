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
  A as f,
  I as p,
  L as se,
  O as m,
  S as ce,
  U as le,
  at as ue,
  b as h,
  c as de,
  ct as fe,
  d as g,
  dt as pe,
  g as _,
  ht as v,
  it as me,
  lt as he,
  mt as ge,
  n as y,
  nt as _e,
  o as b,
  ot as x,
  p as S,
  s as C,
  st as ve,
  t as w,
  tt as ye,
  ut as be,
  w as xe,
  x as T,
  y as E,
} from "./framer.w0XhpZTx.mjs";
import { i as D, n as Se, r as O, t as Ce } from "./nl385Jssa.BV16yEHR.mjs";
import { a as k, c as A, i as j, o as we, r as M, s as N } from "./shared.DPOhhryJ.mjs";
import { i as Te, r as P } from "./cQxXulDZM.DXXtl8ZX.mjs";
import { n as Ee, t as F } from "./jNXHc0ip8.Bnggf-hw.mjs";
import De, { t as I } from "./7lHpQ33gziIMRFJlolr_ng601g3jBRWUQlGwTqPDxOE.vFi6DHUp.mjs";
var L, R, z, B, V, H, U, Oe, W, ke, Ae, je, Me, G, K, q, Ne, J, Y, X, Z, Q, Pe, Fe, Ie, $, Le;
e(() => {
  (ne(),
    le(),
    d(),
    ie(),
    te(),
    we(),
    A(),
    j(),
    Te(),
    Ee(),
    D(),
    I(),
    (L = p(N)),
    (R = p(P)),
    (z = v(y)),
    (B = v(T)),
    (V = p(F)),
    (H = p(k)),
    (U = p(M)),
    (Oe = {
      LPB0OcwSo: `(min-width: 810px) and (max-width: 1199.98px)`,
      qKpTxfdFM: `(max-width: 809.98px)`,
      Rt8KukSKU: `(min-width: 1200px)`,
    }),
    (W = () => typeof document < `u`),
    (ke = []),
    (Ae = `framer-4ooyf`),
    (je = {
      LPB0OcwSo: `framer-v-npta23`,
      qKpTxfdFM: `framer-v-djswzd`,
      Rt8KukSKU: `framer-v-phc6b8`,
    }),
    (Me = (e, t, n) => (e && t ? `position` : n)),
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
    (q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Ne = { delay: 0.2, duration: 1, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` }),
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
        default:
          return n;
      }
    }),
    (Z = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (Q = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = he({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (Pe = { Desktop: `Rt8KukSKU`, Phone: `qKpTxfdFM`, Tablet: `LPB0OcwSo` }),
    (Fe = ({ value: e }) =>
      x()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ie = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Pe[r.variant] ?? r.variant ?? `Rt8KukSKU`,
    })),
    ($ = ge(
      a(function (e, a) {
        let te = n(null),
          ne = a ?? te,
          ie = re(),
          { activeLocale: d, setLocale: f } = ve(),
          p = _e(),
          { style: se, className: le, layoutId: v, variant: he, ...ge } = Ie(e);
        fe(ee(() => De({}, d), [d]));
        let [x, xe] = ue(he, Oe, !1),
          { activeVariantCallback: D, delay: Se } = ye(void 0),
          O = ({ overlay: e }) =>
            D(async (...t) => {
              e.toggle();
            }),
          A = ({ overlay: e }) =>
            D(async (...t) => {
              e.hide();
            }),
          j = m(Ae, Ce),
          we = () => !W() || x === `qKpTxfdFM`,
          Te = t(de)?.isLayoutTemplate,
          Ee = !!t(ae)?.transition?.layout,
          I = Me(Te, Ee),
          L = be(`ull16T7QP`),
          R = n(null),
          V = () => !W() || x !== `qKpTxfdFM`;
        pe();
        let H = be(`grzQXGNmg`),
          U = n(null);
        return (
          me({}),
          s(de.Provider, {
            value: {
              activeVariantId: x,
              humanReadableVariantMap: Pe,
              primaryVariantId: `Rt8KukSKU`,
              variantClassNames: je,
            },
            children: c(oe, {
              id: v ?? ie,
              children: [
                s(Fe, { value: `html body { background: rgb(255, 255, 255); }` }),
                c(l.div, {
                  ...ge,
                  className: m(j, `framer-phc6b8`, le),
                  ref: ne,
                  style: { ...se },
                  children: [
                    we() &&
                      s(l.div, {
                        className: `framer-1ntwl1w hidden-phc6b8 hidden-npta23`,
                        "data-framer-name": `Phone`,
                        layout: I,
                        children: c(`section`, {
                          className: `framer-141r430`,
                          "data-framer-name": `Classes`,
                          id: L,
                          ref: R,
                          children: [
                            V() &&
                              s(`div`, {
                                className: `framer-1swkhxe hidden-djswzd`,
                                children: s(N, {
                                  animated: !1,
                                  BKVe8Pgvw: !0,
                                  className: `framer-1d2nsw0`,
                                  fICyAUQY1: !0,
                                  layoutId: `hKuSYQhJS`,
                                  lKf_CQTz5: !0,
                                }),
                              }),
                            c(`div`, {
                              className: `framer-d2ua68`,
                              "data-framer-name": `Text`,
                              children: [
                                s(S, {
                                  href: { webPageId: `k3I5EzP4j` },
                                  motionChild: !0,
                                  nodeId: `Zp6YKVSuh`,
                                  openInNewTab: !1,
                                  scopeId: `j39Cfkfcd`,
                                  children: s(l.a, {
                                    className: `framer-i7e3ti framer-1q2mogs`,
                                    children: s(N, {
                                      animated: !1,
                                      BKVe8Pgvw: !0,
                                      className: `framer-mnfn04`,
                                      fICyAUQY1: !0,
                                      layoutId: `NTmtYWC1Q`,
                                      lKf_CQTz5: !0,
                                    }),
                                  }),
                                }),
                                V() &&
                                  s(N, {
                                    animated: !1,
                                    BKVe8Pgvw: !0,
                                    className: `framer-ia9lcp hidden-djswzd`,
                                    fICyAUQY1: !0,
                                    layoutId: `gDVzKQhXy`,
                                    lKf_CQTz5: !0,
                                  }),
                                V() &&
                                  s(S, {
                                    href: { webPageId: `k3I5EzP4j` },
                                    motionChild: !0,
                                    nodeId: `RaMd_lIw0`,
                                    openInNewTab: !1,
                                    scopeId: `j39Cfkfcd`,
                                    children: s(l.a, {
                                      className: `framer-acewh5 hidden-djswzd framer-1q2mogs`,
                                    }),
                                  }),
                                V() &&
                                  s(N, {
                                    animated: !1,
                                    BKVe8Pgvw: !0,
                                    className: `framer-vvl20q hidden-djswzd`,
                                    fICyAUQY1: !0,
                                    layoutId: `b3MuCaI0v`,
                                    lKf_CQTz5: !0,
                                  }),
                                V() &&
                                  s(S, {
                                    href: { webPageId: `k3I5EzP4j` },
                                    motionChild: !0,
                                    nodeId: `xAD8lrvZx`,
                                    openInNewTab: !1,
                                    scopeId: `j39Cfkfcd`,
                                    children: s(l.a, {
                                      className: `framer-1msgf82 hidden-djswzd framer-1q2mogs`,
                                      children: s(N, {
                                        animated: !1,
                                        BKVe8Pgvw: !0,
                                        className: `framer-1d6kv7j`,
                                        fICyAUQY1: !0,
                                        layoutId: `IxLOLgNxI`,
                                        lKf_CQTz5: !0,
                                      }),
                                    }),
                                  }),
                                s(_, {
                                  breakpoint: x,
                                  overrides: {
                                    qKpTxfdFM: { y: (p?.y || 0) + 0 + 0 + 0 + 0 + 80 + 0 + 0 + 36 },
                                  },
                                  children: s(w, {
                                    height: 26,
                                    children: s(z, {
                                      __framer__animate: { transition: K },
                                      __framer__animateOnce: !0,
                                      __framer__enter: G,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1ea31nh-container`,
                                      nodeId: `ua8VUDiYj`,
                                      rendersWithMotion: !0,
                                      scopeId: `j39Cfkfcd`,
                                      children: s(P, {
                                        ggTbrSuHk: `Power tools`,
                                        height: `100%`,
                                        id: `ua8VUDiYj`,
                                        layoutId: `ua8VUDiYj`,
                                        variant: q(`z6oSgdJxk`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                s(B, {
                                  __framer__animate: { transition: Ne },
                                  __framer__animateOnce: !0,
                                  __framer__enter: G,
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
                                      children: `Bosch`,
                                    }),
                                  }),
                                  className: `framer-fc7ykm`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-1vmmwu`,
                              "data-framer-name": `ClassesGallery`,
                              children: [
                                s(Q, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(h, {
                                        links: [
                                          {
                                            href: { webPageId: `dnyVn6cHR` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `dnyVn6cHR` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(_, {
                                            breakpoint: x,
                                            overrides: {
                                              qKpTxfdFM: {
                                                width: `358px`,
                                                y: (p?.y || 0) + 0 + 0 + 0 + 0 + 80 + 164.4 + 0 + 0,
                                              },
                                            },
                                            children: s(w, {
                                              height: 400,
                                              children: c(y, {
                                                className: `framer-o8y498-container`,
                                                id: `o8y498`,
                                                nodeId: `UnJvpt2FL`,
                                                scopeId: `j39Cfkfcd`,
                                                children: [
                                                  s(_, {
                                                    breakpoint: x,
                                                    overrides: { qKpTxfdFM: { oSlFkYxO1: t[1] } },
                                                    children: s(F, {
                                                      BlDyCL1Hj: J(
                                                        {
                                                          pixelHeight: 543,
                                                          pixelWidth: 604,
                                                          src: `../../assets/images/mAbDWreU4nO6eUrFNjtZM7RUU.png`,
                                                          srcSet: `../../assets/images/mAbDWreU4nO6eUrFNjtZM7RUU.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/mAbDWreU4nO6eUrFNjtZM7RUU.png 604w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `UnJvpt2FL`,
                                                      jTs_fuWrm: O({ overlay: e }),
                                                      JWP0bNV85: `Impact Drill Machine`,
                                                      layoutId: `UnJvpt2FL`,
                                                      oSlFkYxO1: t[0],
                                                      style: { width: `100%` },
                                                      variant: q(`ZKOecjUjr`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                  s(u, {
                                                    children:
                                                      e.visible &&
                                                      s(i, {
                                                        children: o(
                                                          s(g, {
                                                            triggerId: `o8y498`,
                                                            children: c(E, {
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
                                                                    className: m(
                                                                      j,
                                                                      `framer-1vd9tza`
                                                                    ),
                                                                    "data-framer-portal-id": `o8y498`,
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
                                                                  `jvgbPR88d`
                                                                ),
                                                                s(l.div, {
                                                                  className: m(j, `framer-1un704k`),
                                                                  "data-framer-portal-id": `o8y498`,
                                                                  transformTemplate: Y,
                                                                  children: c(l.div, {
                                                                    className: `framer-1k7xslk`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-1cegufu`,
                                                                        children: [
                                                                          s(T, {
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
                                                                            className: `framer-jixa3a`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-1h5qfua`,
                                                                            onTap: A({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(k, {
                                                                              animated: !1,
                                                                              className: `framer-12vfso1`,
                                                                              layoutId: `p7NzxRQez`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(b, {
                                                                        action: `https://api.framer.com/forms/v1/forms/54d36927-8ee0-448e-b44a-dd0c4def7190/submit`,
                                                                        className: `framer-1g0am2v`,
                                                                        nodeId: `Z2XkRpovZ`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-f6b74l`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-1k2lp3u`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-os0ogr`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-thuhpd`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-11pk74w`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1qlfu0f`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1eq03n8`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-o1gg6j`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-71ay83`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-owrjk9`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-11i2d20`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-qot0g1`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(w, {
                                                                                width: `221px`,
                                                                                children: s(y, {
                                                                                  className: `framer-gxztf7-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `gvGzt5o6o`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `j39Cfkfcd`,
                                                                                  children: s(M, {
                                                                                    height: `100%`,
                                                                                    id: `gvGzt5o6o`,
                                                                                    layoutId: `gvGzt5o6o`,
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
                                                                                      q(`Y6CHTJJM0`)
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
                                s(Q, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(h, {
                                        links: [
                                          {
                                            href: { webPageId: `Ai7Y2E9MG` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `Ai7Y2E9MG` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(_, {
                                            breakpoint: x,
                                            overrides: {
                                              qKpTxfdFM: {
                                                width: `358px`,
                                                y:
                                                  (p?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  80 +
                                                  164.4 +
                                                  0 +
                                                  416,
                                              },
                                            },
                                            children: s(w, {
                                              height: 400,
                                              children: c(y, {
                                                className: `framer-wb52c5-container`,
                                                id: `wb52c5`,
                                                nodeId: `dZiqpCxZ_`,
                                                scopeId: `j39Cfkfcd`,
                                                children: [
                                                  s(_, {
                                                    breakpoint: x,
                                                    overrides: { qKpTxfdFM: { oSlFkYxO1: t[1] } },
                                                    children: s(F, {
                                                      BlDyCL1Hj: J(
                                                        {
                                                          pixelHeight: 543,
                                                          pixelWidth: 604,
                                                          src: `../../assets/images/weSjLWfaP0JSPERcFVU8Pdbc.png`,
                                                          srcSet: `../../assets/images/weSjLWfaP0JSPERcFVU8Pdbc.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/weSjLWfaP0JSPERcFVU8Pdbc.png 604w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `dZiqpCxZ_`,
                                                      jTs_fuWrm: O({ overlay: e }),
                                                      JWP0bNV85: `Industrial Vaccum cleaner`,
                                                      layoutId: `dZiqpCxZ_`,
                                                      oSlFkYxO1: t[0],
                                                      style: { width: `100%` },
                                                      variant: q(`ZKOecjUjr`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                  s(u, {
                                                    children:
                                                      e.visible &&
                                                      s(i, {
                                                        children: o(
                                                          s(g, {
                                                            triggerId: `wb52c5`,
                                                            children: c(E, {
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
                                                                    className: m(
                                                                      j,
                                                                      `framer-1qlsyqf`
                                                                    ),
                                                                    "data-framer-portal-id": `wb52c5`,
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
                                                                  `dKuoxysa6`
                                                                ),
                                                                s(l.div, {
                                                                  className: m(j, `framer-rfddui`),
                                                                  "data-framer-portal-id": `wb52c5`,
                                                                  transformTemplate: Y,
                                                                  children: c(l.div, {
                                                                    className: `framer-wcn2g4`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-ldgwsr`,
                                                                        children: [
                                                                          s(T, {
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
                                                                            className: `framer-1jsdiun`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-q966xi`,
                                                                            onTap: A({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(k, {
                                                                              animated: !1,
                                                                              className: `framer-1sifw24`,
                                                                              layoutId: `Nq5IG6TTU`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(b, {
                                                                        action: `https://api.framer.com/forms/v1/forms/43d5f9b7-f5f5-412c-965d-ff5646187ac2/submit`,
                                                                        className: `framer-1wnwn0k`,
                                                                        nodeId: `zIqBMMkTa`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-3mml9d`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-1ac3l0i`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-mq3va0`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-esav2x`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-12nc4ts`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1llu5tu`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-eajmp`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-aqxuik`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1w98go4`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1llkgq6`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-kjsrdq`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1m7w88`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(w, {
                                                                                width: `221px`,
                                                                                children: s(y, {
                                                                                  className: `framer-1qq8d8x-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `kkhGg8ZJD`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `j39Cfkfcd`,
                                                                                  children: s(M, {
                                                                                    height: `100%`,
                                                                                    id: `kkhGg8ZJD`,
                                                                                    layoutId: `kkhGg8ZJD`,
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
                                                                                      q(`Y6CHTJJM0`)
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
                                s(Q, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(h, {
                                        links: [
                                          {
                                            href: { webPageId: `DGyJABte8` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `DGyJABte8` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(_, {
                                            breakpoint: x,
                                            overrides: {
                                              qKpTxfdFM: {
                                                width: `358px`,
                                                y:
                                                  (p?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  80 +
                                                  164.4 +
                                                  0 +
                                                  832,
                                              },
                                            },
                                            children: s(w, {
                                              height: 400,
                                              children: c(y, {
                                                className: `framer-167ht9z-container`,
                                                id: `167ht9z`,
                                                nodeId: `fjXvhzQ4R`,
                                                scopeId: `j39Cfkfcd`,
                                                children: [
                                                  s(_, {
                                                    breakpoint: x,
                                                    overrides: { qKpTxfdFM: { oSlFkYxO1: t[1] } },
                                                    children: s(F, {
                                                      BlDyCL1Hj: J(
                                                        {
                                                          pixelHeight: 543,
                                                          pixelWidth: 604,
                                                          src: `../../assets/images/hwKaWha33WmeAN0z8fmvNnwhY8A.png`,
                                                          srcSet: `../../assets/images/hwKaWha33WmeAN0z8fmvNnwhY8A.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/hwKaWha33WmeAN0z8fmvNnwhY8A.png 604w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `fjXvhzQ4R`,
                                                      jTs_fuWrm: O({ overlay: e }),
                                                      JWP0bNV85: `Rotary Hammer`,
                                                      layoutId: `fjXvhzQ4R`,
                                                      oSlFkYxO1: t[0],
                                                      style: { width: `100%` },
                                                      variant: q(`ZKOecjUjr`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                  s(u, {
                                                    children:
                                                      e.visible &&
                                                      s(i, {
                                                        children: o(
                                                          s(g, {
                                                            triggerId: `167ht9z`,
                                                            children: c(E, {
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
                                                                    className: m(
                                                                      j,
                                                                      `framer-pyiwoq`
                                                                    ),
                                                                    "data-framer-portal-id": `167ht9z`,
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
                                                                  `jzI7E9t8R`
                                                                ),
                                                                s(l.div, {
                                                                  className: m(j, `framer-7uchiu`),
                                                                  "data-framer-portal-id": `167ht9z`,
                                                                  transformTemplate: Y,
                                                                  children: c(l.div, {
                                                                    className: `framer-re9cxf`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-5nwikt`,
                                                                        children: [
                                                                          s(T, {
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
                                                                            className: `framer-92h292`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-1pvt232`,
                                                                            onTap: A({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(k, {
                                                                              animated: !1,
                                                                              className: `framer-4lse2`,
                                                                              layoutId: `BeMNu5NO1`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(b, {
                                                                        action: `https://api.framer.com/forms/v1/forms/5bedae37-446b-43ca-b21b-98bcc636d289/submit`,
                                                                        className: `framer-1vuiap8`,
                                                                        nodeId: `hzUZJXyZc`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-1rrthho`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-xu2wt5`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-bjy8jy`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-i6ctkn`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-1n24lpj`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1ty52af`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-3fzolp`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-1az5d9`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-17uns7n`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-cqauab`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-97iojs`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1h1r9mc`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(w, {
                                                                                width: `221px`,
                                                                                children: s(y, {
                                                                                  className: `framer-sm37b9-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `Ler0NcTGE`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `j39Cfkfcd`,
                                                                                  children: s(M, {
                                                                                    height: `100%`,
                                                                                    id: `Ler0NcTGE`,
                                                                                    layoutId: `Ler0NcTGE`,
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
                                                                                      q(`Y6CHTJJM0`)
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
                                s(Q, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(h, {
                                        links: [
                                          {
                                            href: { webPageId: `PXdzRvl1m` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `PXdzRvl1m` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(_, {
                                            breakpoint: x,
                                            overrides: {
                                              qKpTxfdFM: {
                                                width: `358px`,
                                                y:
                                                  (p?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  80 +
                                                  164.4 +
                                                  0 +
                                                  1248,
                                              },
                                            },
                                            children: s(w, {
                                              height: 400,
                                              children: c(y, {
                                                className: `framer-1qos6na-container`,
                                                id: `1qos6na`,
                                                nodeId: `A6TMEkiXJ`,
                                                scopeId: `j39Cfkfcd`,
                                                children: [
                                                  s(_, {
                                                    breakpoint: x,
                                                    overrides: { qKpTxfdFM: { oSlFkYxO1: t[1] } },
                                                    children: s(F, {
                                                      BlDyCL1Hj: J(
                                                        {
                                                          pixelHeight: 543,
                                                          pixelWidth: 604,
                                                          src: `../../assets/images/w3eH2PHy9WaNocClP89M0Baiz4Y.png`,
                                                          srcSet: `../../assets/images/w3eH2PHy9WaNocClP89M0Baiz4Y.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/w3eH2PHy9WaNocClP89M0Baiz4Y.png 604w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `A6TMEkiXJ`,
                                                      jTs_fuWrm: O({ overlay: e }),
                                                      JWP0bNV85: `Blower`,
                                                      layoutId: `A6TMEkiXJ`,
                                                      oSlFkYxO1: t[0],
                                                      style: { width: `100%` },
                                                      variant: q(`ZKOecjUjr`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                  s(u, {
                                                    children:
                                                      e.visible &&
                                                      s(i, {
                                                        children: o(
                                                          s(g, {
                                                            triggerId: `1qos6na`,
                                                            children: c(E, {
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
                                                                    className: m(
                                                                      j,
                                                                      `framer-1qwqkuy`
                                                                    ),
                                                                    "data-framer-portal-id": `1qos6na`,
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
                                                                  `OtXdpm5jX`
                                                                ),
                                                                s(l.div, {
                                                                  className: m(j, `framer-scdgmg`),
                                                                  "data-framer-portal-id": `1qos6na`,
                                                                  transformTemplate: Y,
                                                                  children: c(l.div, {
                                                                    className: `framer-14t3xdl`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-1kdrgly`,
                                                                        children: [
                                                                          s(T, {
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
                                                                            className: `framer-aj6mc3`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-9uboa`,
                                                                            onTap: A({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(k, {
                                                                              animated: !1,
                                                                              className: `framer-130ytd4`,
                                                                              layoutId: `KPAs2hfi2`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(b, {
                                                                        action: `https://api.framer.com/forms/v1/forms/cbc34c3a-3673-458a-8fd3-ab7f948be97f/submit`,
                                                                        className: `framer-nmamkj`,
                                                                        nodeId: `f3qu_s5da`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-1x9xtem`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-1p77t50`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-8m8lzj`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-iwa73v`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-48eopw`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-4epk0p`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-174dpwk`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-14vivgk`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1lnpfp4`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1qbh0wy`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-ntncjm`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1nbpfus`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(w, {
                                                                                width: `221px`,
                                                                                children: s(y, {
                                                                                  className: `framer-1od314p-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `NrOUUeG1_`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `j39Cfkfcd`,
                                                                                  children: s(M, {
                                                                                    height: `100%`,
                                                                                    id: `NrOUUeG1_`,
                                                                                    layoutId: `NrOUUeG1_`,
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
                                                                                      q(`Y6CHTJJM0`)
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
                                s(Q, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(h, {
                                        links: [
                                          {
                                            href: { webPageId: `IvEuplfKk` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `IvEuplfKk` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(_, {
                                            breakpoint: x,
                                            overrides: {
                                              qKpTxfdFM: {
                                                width: `358px`,
                                                y:
                                                  (p?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  80 +
                                                  164.4 +
                                                  0 +
                                                  1664,
                                              },
                                            },
                                            children: s(w, {
                                              height: 400,
                                              children: c(y, {
                                                className: `framer-mdrskk-container`,
                                                id: `mdrskk`,
                                                nodeId: `jvuG9xYP1`,
                                                scopeId: `j39Cfkfcd`,
                                                children: [
                                                  s(_, {
                                                    breakpoint: x,
                                                    overrides: { qKpTxfdFM: { oSlFkYxO1: t[1] } },
                                                    children: s(F, {
                                                      BlDyCL1Hj: J(
                                                        {
                                                          pixelHeight: 543,
                                                          pixelWidth: 604,
                                                          src: `../../assets/images/WG059Clj0EFbLXnp8MqvKUW06ls.png`,
                                                          srcSet: `../../assets/images/WG059Clj0EFbLXnp8MqvKUW06ls.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/WG059Clj0EFbLXnp8MqvKUW06ls.png 604w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `jvuG9xYP1`,
                                                      jTs_fuWrm: O({ overlay: e }),
                                                      JWP0bNV85: `Demolition Hammer`,
                                                      layoutId: `jvuG9xYP1`,
                                                      oSlFkYxO1: t[0],
                                                      style: { width: `100%` },
                                                      variant: q(`ZKOecjUjr`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                  s(u, {
                                                    children:
                                                      e.visible &&
                                                      s(i, {
                                                        children: o(
                                                          s(g, {
                                                            triggerId: `mdrskk`,
                                                            children: c(E, {
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
                                                                    className: m(
                                                                      j,
                                                                      `framer-10znqdg`
                                                                    ),
                                                                    "data-framer-portal-id": `mdrskk`,
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
                                                                  `UcVujoMXK`
                                                                ),
                                                                s(l.div, {
                                                                  className: m(j, `framer-a6iorh`),
                                                                  "data-framer-portal-id": `mdrskk`,
                                                                  transformTemplate: Y,
                                                                  children: c(l.div, {
                                                                    className: `framer-16hrtrh`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-19rh886`,
                                                                        children: [
                                                                          s(T, {
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
                                                                            className: `framer-u4fcx7`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-3xrql`,
                                                                            onTap: A({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(k, {
                                                                              animated: !1,
                                                                              className: `framer-11a9idg`,
                                                                              layoutId: `jPCoYxSPb`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(b, {
                                                                        action: `https://api.framer.com/forms/v1/forms/de80be30-ad8a-438c-92b0-516e87fd2800/submit`,
                                                                        className: `framer-1v376sm`,
                                                                        nodeId: `FiAGrckw9`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-vwm8ok`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-1ty36q1`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1v5obev`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1r9qdl7`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-13t2vg8`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1uk9qtb`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-19korym`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-vfb7ij`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-teg51f`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-nrtwlv`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-1s7j01j`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-dzrujk`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(w, {
                                                                                width: `221px`,
                                                                                children: s(y, {
                                                                                  className: `framer-14ydogy-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `twBVtBjiF`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `j39Cfkfcd`,
                                                                                  children: s(M, {
                                                                                    height: `100%`,
                                                                                    id: `twBVtBjiF`,
                                                                                    layoutId: `twBVtBjiF`,
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
                                                                                      q(`Y6CHTJJM0`)
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
                                s(Q, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(h, {
                                        links: [
                                          {
                                            href: { webPageId: `IHgg3FLZK` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `IHgg3FLZK` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(_, {
                                            breakpoint: x,
                                            overrides: {
                                              qKpTxfdFM: {
                                                width: `358px`,
                                                y:
                                                  (p?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  80 +
                                                  164.4 +
                                                  0 +
                                                  2080,
                                              },
                                            },
                                            children: s(w, {
                                              height: 400,
                                              children: c(y, {
                                                className: `framer-18qiad0-container`,
                                                id: `18qiad0`,
                                                nodeId: `y9rHyjnaz`,
                                                scopeId: `j39Cfkfcd`,
                                                children: [
                                                  s(_, {
                                                    breakpoint: x,
                                                    overrides: { qKpTxfdFM: { oSlFkYxO1: t[1] } },
                                                    children: s(F, {
                                                      BlDyCL1Hj: J(
                                                        {
                                                          pixelHeight: 543,
                                                          pixelWidth: 604,
                                                          src: `../../assets/images/KkpZd0sNWNBdbFSK13wtUvuGW8.png`,
                                                          srcSet: `../../assets/images/KkpZd0sNWNBdbFSK13wtUvuGW8.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/KkpZd0sNWNBdbFSK13wtUvuGW8.png 604w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `y9rHyjnaz`,
                                                      jTs_fuWrm: O({ overlay: e }),
                                                      JWP0bNV85: `Heat Gun`,
                                                      layoutId: `y9rHyjnaz`,
                                                      oSlFkYxO1: t[0],
                                                      style: { width: `100%` },
                                                      variant: q(`ZKOecjUjr`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                  s(u, {
                                                    children:
                                                      e.visible &&
                                                      s(i, {
                                                        children: o(
                                                          s(g, {
                                                            triggerId: `18qiad0`,
                                                            children: c(E, {
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
                                                                    className: m(
                                                                      j,
                                                                      `framer-h19qso`
                                                                    ),
                                                                    "data-framer-portal-id": `18qiad0`,
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
                                                                  `thMrkPhdf`
                                                                ),
                                                                s(l.div, {
                                                                  className: m(j, `framer-pmujch`),
                                                                  "data-framer-portal-id": `18qiad0`,
                                                                  transformTemplate: Y,
                                                                  children: c(l.div, {
                                                                    className: `framer-15d9kt0`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-dhtw9f`,
                                                                        children: [
                                                                          s(T, {
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
                                                                            className: `framer-1kyodq8`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-97msso`,
                                                                            onTap: A({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(k, {
                                                                              animated: !1,
                                                                              className: `framer-1phq8c3`,
                                                                              layoutId: `idZ_cYiC1`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(b, {
                                                                        action: `https://api.framer.com/forms/v1/forms/9cf51fb4-136d-4eea-a51c-63fd8312cd93/submit`,
                                                                        className: `framer-1n502ox`,
                                                                        nodeId: `VJ_E8ZXX6`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-jztmir`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-b07d27`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1jb7vcd`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-2rhijp`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-1tgkr00`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1kfky0o`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1oloe5l`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-bzv736`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-anhsti`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1h3d4w7`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-4zppji`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-z63xpk`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(w, {
                                                                                width: `221px`,
                                                                                children: s(y, {
                                                                                  className: `framer-2kak0w-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `mW5MJHfH6`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `j39Cfkfcd`,
                                                                                  children: s(M, {
                                                                                    height: `100%`,
                                                                                    id: `mW5MJHfH6`,
                                                                                    layoutId: `mW5MJHfH6`,
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
                                                                                      q(`Y6CHTJJM0`)
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
                                s(Q, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(h, {
                                        links: [
                                          {
                                            href: { webPageId: `jOndPxoLd` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `jOndPxoLd` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(_, {
                                            breakpoint: x,
                                            overrides: {
                                              qKpTxfdFM: {
                                                width: `358px`,
                                                y:
                                                  (p?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  80 +
                                                  164.4 +
                                                  0 +
                                                  2496,
                                              },
                                            },
                                            children: s(w, {
                                              height: 400,
                                              children: c(y, {
                                                className: `framer-fm1qei-container`,
                                                id: `fm1qei`,
                                                nodeId: `LXIWqlygL`,
                                                scopeId: `j39Cfkfcd`,
                                                children: [
                                                  s(_, {
                                                    breakpoint: x,
                                                    overrides: { qKpTxfdFM: { oSlFkYxO1: t[1] } },
                                                    children: s(F, {
                                                      BlDyCL1Hj: J(
                                                        {
                                                          pixelHeight: 543,
                                                          pixelWidth: 604,
                                                          src: `../../assets/images/tLsIJBpqrNOrQxc10bkza13hIt4.png`,
                                                          srcSet: `../../assets/images/tLsIJBpqrNOrQxc10bkza13hIt4.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/tLsIJBpqrNOrQxc10bkza13hIt4.png 604w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `LXIWqlygL`,
                                                      jTs_fuWrm: O({ overlay: e }),
                                                      JWP0bNV85: `Angle Grinder`,
                                                      layoutId: `LXIWqlygL`,
                                                      oSlFkYxO1: t[0],
                                                      style: { width: `100%` },
                                                      variant: q(`ZKOecjUjr`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                  s(u, {
                                                    children:
                                                      e.visible &&
                                                      s(i, {
                                                        children: o(
                                                          s(g, {
                                                            triggerId: `fm1qei`,
                                                            children: c(E, {
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
                                                                    className: m(
                                                                      j,
                                                                      `framer-1mefr1q`
                                                                    ),
                                                                    "data-framer-portal-id": `fm1qei`,
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
                                                                  `Q3DhvdZ_e`
                                                                ),
                                                                s(l.div, {
                                                                  className: m(j, `framer-sqespg`),
                                                                  "data-framer-portal-id": `fm1qei`,
                                                                  transformTemplate: Y,
                                                                  children: c(l.div, {
                                                                    className: `framer-i4cjl1`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-1fl3qhw`,
                                                                        children: [
                                                                          s(T, {
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
                                                                            className: `framer-1pu4rgf`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-1wbaffi`,
                                                                            onTap: A({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(k, {
                                                                              animated: !1,
                                                                              className: `framer-ctejka`,
                                                                              layoutId: `xGuGrGpdR`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(b, {
                                                                        action: `https://api.framer.com/forms/v1/forms/d4065172-66ea-4278-8264-dc4e6dc20f56/submit`,
                                                                        className: `framer-pqmteq`,
                                                                        nodeId: `KQZeOUybS`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-15tqgpt`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-kcs8gz`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1jpqzhx`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1um04jt`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-l5nu9j`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1sqo2uc`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1cxb2im`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-4zac0m`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-yb8q3f`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-kyahmn`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-jlrbye`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-15kihit`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(w, {
                                                                                width: `221px`,
                                                                                children: s(y, {
                                                                                  className: `framer-pv41ue-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `hbnx5MU6P`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `j39Cfkfcd`,
                                                                                  children: s(M, {
                                                                                    height: `100%`,
                                                                                    id: `hbnx5MU6P`,
                                                                                    layoutId: `hbnx5MU6P`,
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
                                                                                      q(`Y6CHTJJM0`)
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
                                s(Q, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(h, {
                                        links: [
                                          {
                                            href: { webPageId: `SDBoKoCqJ` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `SDBoKoCqJ` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(_, {
                                            breakpoint: x,
                                            overrides: {
                                              qKpTxfdFM: {
                                                width: `358px`,
                                                y:
                                                  (p?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  80 +
                                                  164.4 +
                                                  0 +
                                                  2912,
                                              },
                                            },
                                            children: s(w, {
                                              height: 400,
                                              children: c(y, {
                                                className: `framer-zturbv-container`,
                                                id: `zturbv`,
                                                nodeId: `x8T5UTAwd`,
                                                scopeId: `j39Cfkfcd`,
                                                children: [
                                                  s(_, {
                                                    breakpoint: x,
                                                    overrides: { qKpTxfdFM: { oSlFkYxO1: t[1] } },
                                                    children: s(F, {
                                                      BlDyCL1Hj: J(
                                                        {
                                                          pixelHeight: 543,
                                                          pixelWidth: 604,
                                                          src: `../../assets/images/u5gNm4itXfpBEB7J2FuFMI4FBn4.png`,
                                                          srcSet: `../../assets/images/u5gNm4itXfpBEB7J2FuFMI4FBn4.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/u5gNm4itXfpBEB7J2FuFMI4FBn4.png 604w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `x8T5UTAwd`,
                                                      jTs_fuWrm: O({ overlay: e }),
                                                      JWP0bNV85: `Cordless Drill Machine`,
                                                      layoutId: `x8T5UTAwd`,
                                                      oSlFkYxO1: t[0],
                                                      style: { width: `100%` },
                                                      variant: q(`ZKOecjUjr`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                  s(u, {
                                                    children:
                                                      e.visible &&
                                                      s(i, {
                                                        children: o(
                                                          s(g, {
                                                            triggerId: `zturbv`,
                                                            children: c(E, {
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
                                                                    className: m(
                                                                      j,
                                                                      `framer-7xu9qy`
                                                                    ),
                                                                    "data-framer-portal-id": `zturbv`,
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
                                                                  `A7ERNxkvH`
                                                                ),
                                                                s(l.div, {
                                                                  className: m(j, `framer-adu4cz`),
                                                                  "data-framer-portal-id": `zturbv`,
                                                                  transformTemplate: Y,
                                                                  children: c(l.div, {
                                                                    className: `framer-9v63bh`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-1hk37lb`,
                                                                        children: [
                                                                          s(T, {
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
                                                                            className: `framer-bf272x`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-1rsrwd8`,
                                                                            onTap: A({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(k, {
                                                                              animated: !1,
                                                                              className: `framer-15yxh8r`,
                                                                              layoutId: `cankq42At`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(b, {
                                                                        action: `https://api.framer.com/forms/v1/forms/3e59019c-8aa8-4f90-8327-8b1476ce6c41/submit`,
                                                                        className: `framer-1x3gth3`,
                                                                        nodeId: `hcqldpJjY`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-lzrrk0`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-1o91408`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-lyuhsn`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-6bkbc5`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-1ex3amh`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-16ata0f`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-137thje`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-9zb599`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1h2r787`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-17r9djg`,
                                                                                children: [
                                                                                  s(T, {
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
                                                                                    className: `framer-1p92esn`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-pebmbg`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(w, {
                                                                                width: `221px`,
                                                                                children: s(y, {
                                                                                  className: `framer-18qt3w8-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `tenjEsa3h`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `j39Cfkfcd`,
                                                                                  children: s(M, {
                                                                                    height: `100%`,
                                                                                    id: `tenjEsa3h`,
                                                                                    layoutId: `tenjEsa3h`,
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
                                                                                      q(`Y6CHTJJM0`)
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
                              ],
                            }),
                          ],
                        }),
                      }),
                    V() &&
                      c(l.section, {
                        className: `framer-1e1y793 hidden-djswzd`,
                        "data-framer-name": `Classes`,
                        id: H,
                        layout: I,
                        ref: U,
                        children: [
                          s(S, {
                            href: { webPageId: `k3I5EzP4j` },
                            motionChild: !0,
                            nodeId: `RsCnhlgjf`,
                            openInNewTab: !1,
                            scopeId: `j39Cfkfcd`,
                            children: c(l.a, {
                              className: `framer-16n39x9 framer-1q2mogs`,
                              children: [
                                s(N, {
                                  animated: !1,
                                  BKVe8Pgvw: !0,
                                  className: `framer-vdsrko`,
                                  fICyAUQY1: !0,
                                  layoutId: `Y1g7jYirc`,
                                  lKf_CQTz5: !0,
                                }),
                                s(ce, {
                                  className: `framer-sx9wmp`,
                                  requiresOverflowVisible: !1,
                                  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4 2" overflow="visible"><path d="M 2 0 C 3.105 0 4 0.448 4 1 C 4 1.552 3.105 2 2 2 C 0.895 2 0 1.552 0 1 C 0 0.448 0.895 0 2 0 Z" fill="#CCC"></path></svg>`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                          c(`div`, {
                            className: `framer-1f2doif`,
                            "data-framer-name": `Text`,
                            children: [
                              s(_, {
                                breakpoint: x,
                                overrides: {
                                  LPB0OcwSo: { y: (p?.y || 0) + 0 + 0 + 80 + 64 + 0 + 0 },
                                },
                                children: s(w, {
                                  height: 26,
                                  y: (p?.y || 0) + 0 + 0 + 96 + 64 + 0 + 0,
                                  children: s(z, {
                                    __framer__animate: { transition: K },
                                    __framer__animateOnce: !0,
                                    __framer__enter: G,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-28w0yw-container`,
                                    nodeId: `i2CSaleu5`,
                                    rendersWithMotion: !0,
                                    scopeId: `j39Cfkfcd`,
                                    children: s(P, {
                                      ggTbrSuHk: `Powertools`,
                                      height: `100%`,
                                      id: `i2CSaleu5`,
                                      layoutId: `i2CSaleu5`,
                                      variant: q(`z6oSgdJxk`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              s(B, {
                                __framer__animate: { transition: Ne },
                                __framer__animateOnce: !0,
                                __framer__enter: G,
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
                                    children: `Bosch`,
                                  }),
                                }),
                                className: `framer-8kywjd`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          c(`div`, {
                            className: `framer-zjwka4`,
                            "data-framer-name": `ClassesGallery`,
                            children: [
                              s(Q, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  s(i, {
                                    children: s(h, {
                                      links: [
                                        {
                                          href: { webPageId: `dnyVn6cHR` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `dnyVn6cHR` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(_, {
                                          breakpoint: x,
                                          overrides: {
                                            LPB0OcwSo: {
                                              width: `max((min(${p?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (p?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 0,
                                            },
                                          },
                                          children: s(w, {
                                            height: 400,
                                            width: `max((min(${p?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (p?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 0,
                                            children: c(y, {
                                              className: `framer-8di9iw-container`,
                                              id: `8di9iw`,
                                              nodeId: `MQwJaNSqn`,
                                              scopeId: `j39Cfkfcd`,
                                              children: [
                                                s(_, {
                                                  breakpoint: x,
                                                  overrides: { LPB0OcwSo: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: J(
                                                      {
                                                        pixelHeight: 262,
                                                        pixelWidth: 400,
                                                        src: `../../assets/images/SF0YWn1LwhAYKOpL2P1iLq6OUfM.png`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `MQwJaNSqn`,
                                                    jTs_fuWrm: O({ overlay: e }),
                                                    JWP0bNV85: `Impact Drill Machine`,
                                                    layoutId: `MQwJaNSqn`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: q(`ZKOecjUjr`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(g, {
                                                          triggerId: `8di9iw`,
                                                          children: c(E, {
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
                                                                  className: m(j, `framer-1ec8vsn`),
                                                                  "data-framer-portal-id": `8di9iw`,
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
                                                                `ehWREI4Rb`
                                                              ),
                                                              s(l.div, {
                                                                className: m(j, `framer-xti9yk`),
                                                                "data-framer-portal-id": `8di9iw`,
                                                                transformTemplate: Y,
                                                                children: c(l.div, {
                                                                  className: `framer-1w030wv`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-jjubzx`,
                                                                      children: [
                                                                        s(T, {
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
                                                                          className: `framer-p1hzju`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-kaf3z5`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(k, {
                                                                            animated: !1,
                                                                            className: `framer-uu9jq`,
                                                                            layoutId: `CkX3x067x`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(b, {
                                                                      action: `https://api.framer.com/forms/v1/forms/187b978c-8230-448a-ac01-64cb406c3f05/submit`,
                                                                      className: `framer-1lcep3l`,
                                                                      nodeId: `ynS0AKbwe`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-z52cht`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-wb17n7`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-18y2yjq`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1scxua9`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-1w5qsyv`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-1fpt9br`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1w8pc7f`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-grlz6m`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-1vvbeo5`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-18pcyqu`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-1mfuwat`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-cht76y`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(w, {
                                                                              width: `277px`,
                                                                              children: s(y, {
                                                                                className: `framer-1ozcnez-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `Q7fkWb09l`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `j39Cfkfcd`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `Q7fkWb09l`,
                                                                                  layoutId: `Q7fkWb09l`,
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
                                                                                    q(`Y6CHTJJM0`)
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
                              s(Q, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  s(i, {
                                    children: s(h, {
                                      links: [
                                        {
                                          href: { webPageId: `Ai7Y2E9MG` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `Ai7Y2E9MG` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(_, {
                                          breakpoint: x,
                                          overrides: {
                                            LPB0OcwSo: {
                                              width: `max((min(${p?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (p?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 0,
                                            },
                                          },
                                          children: s(w, {
                                            height: 400,
                                            width: `max((min(${p?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (p?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 0,
                                            children: c(y, {
                                              className: `framer-1000ixf-container`,
                                              id: `1000ixf`,
                                              nodeId: `wiAuyrBZL`,
                                              scopeId: `j39Cfkfcd`,
                                              children: [
                                                s(_, {
                                                  breakpoint: x,
                                                  overrides: { LPB0OcwSo: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: J(
                                                      {
                                                        pixelHeight: 373,
                                                        pixelWidth: 544,
                                                        src: `../../assets/images/Gk9XyPvV7S0gVUAxJqnbN6cDJcY.png?width=544&height=373`,
                                                        srcSet: `../../assets/images/Gk9XyPvV7S0gVUAxJqnbN6cDJcY.png 512w,../../assets/images/Gk9XyPvV7S0gVUAxJqnbN6cDJcY.png?width=544&height=373 544w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `wiAuyrBZL`,
                                                    jTs_fuWrm: O({ overlay: e }),
                                                    JWP0bNV85: `Industrial Vaccum Cleaner`,
                                                    layoutId: `wiAuyrBZL`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: q(`ZKOecjUjr`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(g, {
                                                          triggerId: `1000ixf`,
                                                          children: c(E, {
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
                                                                  className: m(j, `framer-10yik9v`),
                                                                  "data-framer-portal-id": `1000ixf`,
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
                                                                `Ng9B1gDRD`
                                                              ),
                                                              s(l.div, {
                                                                className: m(j, `framer-15gv3wh`),
                                                                "data-framer-portal-id": `1000ixf`,
                                                                transformTemplate: Y,
                                                                children: c(l.div, {
                                                                  className: `framer-19wn8hh`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-kz8t7u`,
                                                                      children: [
                                                                        s(T, {
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
                                                                          className: `framer-1lga465`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-d9exze`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(k, {
                                                                            animated: !1,
                                                                            className: `framer-1ys2ee6`,
                                                                            layoutId: `Yk8fF6p1o`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(b, {
                                                                      action: `https://api.framer.com/forms/v1/forms/c7db6c73-cd0a-48d0-9253-d2a62254ff37/submit`,
                                                                      className: `framer-1g85ii3`,
                                                                      nodeId: `WLKzFriRR`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-19z9mf2`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-5q4h5s`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-11gaqcy`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-hqkdrj`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-rwyrgi`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-mvzpu8`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-sd5ste`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-1mm4ioq`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-1bttfhc`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-12hse5s`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-g3gnvh`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-qystka`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(w, {
                                                                              width: `277px`,
                                                                              children: s(y, {
                                                                                className: `framer-1bq62a1-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `twLIRin_U`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `j39Cfkfcd`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `twLIRin_U`,
                                                                                  layoutId: `twLIRin_U`,
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
                                                                                    q(`Y6CHTJJM0`)
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
                              s(Q, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  s(i, {
                                    children: s(h, {
                                      links: [
                                        {
                                          href: { webPageId: `DGyJABte8` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `DGyJABte8` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(_, {
                                          breakpoint: x,
                                          overrides: {
                                            LPB0OcwSo: {
                                              width: `max((min(${p?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (p?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 416,
                                            },
                                          },
                                          children: s(w, {
                                            height: 400,
                                            width: `max((min(${p?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (p?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 0,
                                            children: c(y, {
                                              className: `framer-1tvezwm-container`,
                                              id: `1tvezwm`,
                                              nodeId: `QnrHkF2bf`,
                                              scopeId: `j39Cfkfcd`,
                                              children: [
                                                s(_, {
                                                  breakpoint: x,
                                                  overrides: { LPB0OcwSo: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: J(
                                                      {
                                                        pixelHeight: 528,
                                                        pixelWidth: 800,
                                                        src: `../../assets/images/tLaJdv8GP6jd0L8bOje1r6RZgg.png?width=800&height=528`,
                                                        srcSet: `../../assets/images/tLaJdv8GP6jd0L8bOje1r6RZgg.png 512w,../../assets/images/tLaJdv8GP6jd0L8bOje1r6RZgg.png?width=800&height=528 800w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `QnrHkF2bf`,
                                                    jTs_fuWrm: O({ overlay: e }),
                                                    JWP0bNV85: `Rotary Hammer`,
                                                    layoutId: `QnrHkF2bf`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: q(`ZKOecjUjr`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(g, {
                                                          triggerId: `1tvezwm`,
                                                          children: c(E, {
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
                                                                  className: m(j, `framer-c5hgqm`),
                                                                  "data-framer-portal-id": `1tvezwm`,
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
                                                                `NhSVHh4O7`
                                                              ),
                                                              s(l.div, {
                                                                className: m(j, `framer-1e5pcnk`),
                                                                "data-framer-portal-id": `1tvezwm`,
                                                                transformTemplate: Y,
                                                                children: c(l.div, {
                                                                  className: `framer-kc6ow6`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-6jl1cd`,
                                                                      children: [
                                                                        s(T, {
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
                                                                          className: `framer-1wl2kwz`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-w7e2ev`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(k, {
                                                                            animated: !1,
                                                                            className: `framer-1ptgjph`,
                                                                            layoutId: `GXQJqBBef`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(b, {
                                                                      action: `https://api.framer.com/forms/v1/forms/07f06d15-8fc1-4929-b4d9-616d5736df4f/submit`,
                                                                      className: `framer-1ljgmtg`,
                                                                      nodeId: `Ic2JKZYWK`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-r221on`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-syykns`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-ayzrxl`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-qif1am`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-1vjluvc`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-hf4a2s`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1aho97x`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-1auw5js`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-1o1tfjv`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-mfea33`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-mjnoa5`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-jycasi`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(w, {
                                                                              width: `277px`,
                                                                              children: s(y, {
                                                                                className: `framer-192265n-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `rGI_wCLmr`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `j39Cfkfcd`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `rGI_wCLmr`,
                                                                                  layoutId: `rGI_wCLmr`,
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
                                                                                    q(`Y6CHTJJM0`)
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
                              s(Q, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  s(i, {
                                    children: s(h, {
                                      links: [
                                        {
                                          href: { webPageId: `PXdzRvl1m` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `PXdzRvl1m` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(_, {
                                          breakpoint: x,
                                          overrides: {
                                            LPB0OcwSo: {
                                              width: `max((min(${p?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (p?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 416,
                                            },
                                          },
                                          children: s(w, {
                                            height: 400,
                                            width: `max((min(${p?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (p?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 416,
                                            children: c(y, {
                                              className: `framer-1ke5030-container`,
                                              id: `1ke5030`,
                                              nodeId: `qDLS_Yvw3`,
                                              scopeId: `j39Cfkfcd`,
                                              children: [
                                                s(_, {
                                                  breakpoint: x,
                                                  overrides: { LPB0OcwSo: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: J(
                                                      {
                                                        pixelHeight: 373,
                                                        pixelWidth: 800,
                                                        src: `../../assets/images/asa10aYiGpfLYpeaYOjk0bWG0J8.webp?width=800&height=373`,
                                                        srcSet: `../../assets/images/asa10aYiGpfLYpeaYOjk0bWG0J8.webp 512w,../../assets/images/asa10aYiGpfLYpeaYOjk0bWG0J8.webp?width=800&height=373 800w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `qDLS_Yvw3`,
                                                    jTs_fuWrm: O({ overlay: e }),
                                                    JWP0bNV85: `Blower `,
                                                    layoutId: `qDLS_Yvw3`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: q(`ZKOecjUjr`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(g, {
                                                          triggerId: `1ke5030`,
                                                          children: c(E, {
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
                                                                  className: m(j, `framer-fx5gk8`),
                                                                  "data-framer-portal-id": `1ke5030`,
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
                                                                `x49kV5zI_`
                                                              ),
                                                              s(l.div, {
                                                                className: m(j, `framer-1bz8irt`),
                                                                "data-framer-portal-id": `1ke5030`,
                                                                transformTemplate: Y,
                                                                children: c(l.div, {
                                                                  className: `framer-1t41w2a`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-7yvgjk`,
                                                                      children: [
                                                                        s(T, {
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
                                                                          className: `framer-1qrf204`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-1nx7vy2`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(k, {
                                                                            animated: !1,
                                                                            className: `framer-159mgpv`,
                                                                            layoutId: `pEdRNXW0_`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(b, {
                                                                      action: `https://api.framer.com/forms/v1/forms/433ea379-7ee7-4bb7-9e49-00f7464beed0/submit`,
                                                                      className: `framer-1k4owvk`,
                                                                      nodeId: `sR7BYkuCH`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-4d6d8l`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-1o712jo`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-115gyed`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1e0wyrz`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-12gpzym`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-ffkbpx`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-5l7rf5`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-178i2jo`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-15zhopx`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-4outek`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-vx6h4k`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-63dmmc`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(w, {
                                                                              width: `277px`,
                                                                              children: s(y, {
                                                                                className: `framer-1bv723-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `q2fSMDdzD`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `j39Cfkfcd`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `q2fSMDdzD`,
                                                                                  layoutId: `q2fSMDdzD`,
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
                                                                                    q(`Y6CHTJJM0`)
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
                              s(Q, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  s(i, {
                                    children: s(h, {
                                      links: [
                                        {
                                          href: { webPageId: `IvEuplfKk` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `IvEuplfKk` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(_, {
                                          breakpoint: x,
                                          overrides: {
                                            LPB0OcwSo: {
                                              width: `max((min(${p?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (p?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 832,
                                            },
                                          },
                                          children: s(w, {
                                            height: 400,
                                            width: `max((min(${p?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (p?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 416,
                                            children: c(y, {
                                              className: `framer-rh9bag-container`,
                                              id: `rh9bag`,
                                              nodeId: `NO5zN9sRi`,
                                              scopeId: `j39Cfkfcd`,
                                              children: [
                                                s(_, {
                                                  breakpoint: x,
                                                  overrides: { LPB0OcwSo: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: J(
                                                      {
                                                        pixelHeight: 476,
                                                        pixelWidth: 740,
                                                        src: `../../assets/images/SeHgBpMT4NYB2eYQNsT35zmAI.webp?width=740&height=476`,
                                                        srcSet: `../../assets/images/SeHgBpMT4NYB2eYQNsT35zmAI.webp 512w,../../assets/images/SeHgBpMT4NYB2eYQNsT35zmAI.webp?width=740&height=476 740w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `NO5zN9sRi`,
                                                    jTs_fuWrm: O({ overlay: e }),
                                                    JWP0bNV85: ` Demolition Hammer`,
                                                    layoutId: `NO5zN9sRi`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: q(`ZKOecjUjr`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(g, {
                                                          triggerId: `rh9bag`,
                                                          children: c(E, {
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
                                                                  className: m(j, `framer-112ye8e`),
                                                                  "data-framer-portal-id": `rh9bag`,
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
                                                                `IX_TyQSUC`
                                                              ),
                                                              s(l.div, {
                                                                className: m(j, `framer-1cy9hvu`),
                                                                "data-framer-portal-id": `rh9bag`,
                                                                transformTemplate: Y,
                                                                children: c(l.div, {
                                                                  className: `framer-pve6sy`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-1n5dhu9`,
                                                                      children: [
                                                                        s(T, {
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
                                                                          className: `framer-1hskpko`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-1n0u1wm`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(k, {
                                                                            animated: !1,
                                                                            className: `framer-13v4b54`,
                                                                            layoutId: `tS2hGWtGd`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(b, {
                                                                      action: `https://api.framer.com/forms/v1/forms/910622d0-9b2a-4189-8390-55fbd3777424/submit`,
                                                                      className: `framer-14f8yif`,
                                                                      nodeId: `nO8VRc0Fs`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-1jeahso`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-1miijol`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-elmqx5`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-6852h7`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-1gotbpv`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-1vtrlot`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1oowsx9`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-7t1x0z`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-1oe7e65`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-ppyby7`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-1qmamm4`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-jtg4lb`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(w, {
                                                                              width: `277px`,
                                                                              children: s(y, {
                                                                                className: `framer-1ntldwf-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `eO6poU5R_`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `j39Cfkfcd`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `eO6poU5R_`,
                                                                                  layoutId: `eO6poU5R_`,
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
                                                                                    q(`Y6CHTJJM0`)
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
                              s(Q, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  s(i, {
                                    children: s(h, {
                                      links: [
                                        {
                                          href: { webPageId: `IHgg3FLZK` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `IHgg3FLZK` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(_, {
                                          breakpoint: x,
                                          overrides: {
                                            LPB0OcwSo: {
                                              width: `max((min(${p?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (p?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 832,
                                            },
                                          },
                                          children: s(w, {
                                            height: 400,
                                            width: `max((min(${p?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (p?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 416,
                                            children: c(y, {
                                              className: `framer-hi9oxl-container`,
                                              id: `hi9oxl`,
                                              nodeId: `tAJBrwr7T`,
                                              scopeId: `j39Cfkfcd`,
                                              children: [
                                                s(_, {
                                                  breakpoint: x,
                                                  overrides: { LPB0OcwSo: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: J(
                                                      {
                                                        pixelHeight: 334,
                                                        pixelWidth: 544,
                                                        src: `../../assets/images/oANrh3NCksKRqF7UFcFzzoCoP5U.png?width=544&height=334`,
                                                        srcSet: `../../assets/images/oANrh3NCksKRqF7UFcFzzoCoP5U.png 512w,../../assets/images/oANrh3NCksKRqF7UFcFzzoCoP5U.png?width=544&height=334 544w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `tAJBrwr7T`,
                                                    jTs_fuWrm: O({ overlay: e }),
                                                    JWP0bNV85: `Heat Gun`,
                                                    layoutId: `tAJBrwr7T`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: q(`ZKOecjUjr`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(g, {
                                                          triggerId: `hi9oxl`,
                                                          children: c(E, {
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
                                                                  className: m(j, `framer-lw9azv`),
                                                                  "data-framer-portal-id": `hi9oxl`,
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
                                                                `HAUvUiwKY`
                                                              ),
                                                              s(l.div, {
                                                                className: m(j, `framer-1l5ny9k`),
                                                                "data-framer-portal-id": `hi9oxl`,
                                                                transformTemplate: Y,
                                                                children: c(l.div, {
                                                                  className: `framer-3bo1c`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-um5s6n`,
                                                                      children: [
                                                                        s(T, {
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
                                                                          className: `framer-lg0nqp`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-1afgnw5`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(k, {
                                                                            animated: !1,
                                                                            className: `framer-se9z5m`,
                                                                            layoutId: `yodIeE3HD`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(b, {
                                                                      action: `https://api.framer.com/forms/v1/forms/c2870947-c6bb-4615-b7b5-38bfe3be72c1/submit`,
                                                                      className: `framer-1xns3qg`,
                                                                      nodeId: `T3DksGZTP`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-1xlraxv`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-vcip7o`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-83qa4n`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1uxrziv`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-1rs7dko`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-j2dmif`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1ibyw88`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-4vvhbx`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-tkgl5y`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-10vxxlg`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-b2rpbe`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-28204q`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(w, {
                                                                              width: `277px`,
                                                                              children: s(y, {
                                                                                className: `framer-qflxf-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `aKlUGFULo`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `j39Cfkfcd`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `aKlUGFULo`,
                                                                                  layoutId: `aKlUGFULo`,
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
                                                                                    q(`Y6CHTJJM0`)
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
                              s(Q, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  s(i, {
                                    children: s(h, {
                                      links: [
                                        {
                                          href: { webPageId: `jOndPxoLd` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `jOndPxoLd` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(_, {
                                          breakpoint: x,
                                          overrides: {
                                            LPB0OcwSo: {
                                              width: `max((min(${p?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (p?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 1248,
                                            },
                                          },
                                          children: s(w, {
                                            height: 400,
                                            width: `max((min(${p?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (p?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 832,
                                            children: c(y, {
                                              className: `framer-pmjqzr-container`,
                                              id: `pmjqzr`,
                                              nodeId: `bSH2MnlSL`,
                                              scopeId: `j39Cfkfcd`,
                                              children: [
                                                s(_, {
                                                  breakpoint: x,
                                                  overrides: { LPB0OcwSo: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: J(
                                                      {
                                                        pixelHeight: 461,
                                                        pixelWidth: 800,
                                                        src: `../../assets/images/kqXNdrdvZIFgoJIg6JemdBlab1g.webp?width=800&height=461`,
                                                        srcSet: `../../assets/images/kqXNdrdvZIFgoJIg6JemdBlab1g.webp 512w,../../assets/images/kqXNdrdvZIFgoJIg6JemdBlab1g.webp?width=800&height=461 800w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `bSH2MnlSL`,
                                                    jTs_fuWrm: O({ overlay: e }),
                                                    JWP0bNV85: `Angle Grinder`,
                                                    layoutId: `bSH2MnlSL`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: q(`ZKOecjUjr`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(g, {
                                                          triggerId: `pmjqzr`,
                                                          children: c(E, {
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
                                                                  className: m(j, `framer-ftmqpp`),
                                                                  "data-framer-portal-id": `pmjqzr`,
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
                                                                `mdEW3A2gC`
                                                              ),
                                                              s(l.div, {
                                                                className: m(j, `framer-f2vtu7`),
                                                                "data-framer-portal-id": `pmjqzr`,
                                                                transformTemplate: Y,
                                                                children: c(l.div, {
                                                                  className: `framer-1kqpj11`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-13t7v2d`,
                                                                      children: [
                                                                        s(T, {
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
                                                                          className: `framer-1xortpk`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-sczwpk`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(k, {
                                                                            animated: !1,
                                                                            className: `framer-1ply01t`,
                                                                            layoutId: `gbCXWnnas`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(b, {
                                                                      action: `https://api.framer.com/forms/v1/forms/f01ac28e-950a-41e1-8c9d-7cdbcf42f93f/submit`,
                                                                      className: `framer-6w1hxi`,
                                                                      nodeId: `DieR8fRye`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-1l3r8z0`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-1ez5czi`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-1js3a14`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-mpmdvo`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-bkoeco`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-q2hzrg`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-izzvq8`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-wtjy96`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-117qnpc`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-19hf0dn`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-vnss6a`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-1d2v93g`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(w, {
                                                                              width: `277px`,
                                                                              children: s(y, {
                                                                                className: `framer-n5427c-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `X5g12c9UZ`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `j39Cfkfcd`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `X5g12c9UZ`,
                                                                                  layoutId: `X5g12c9UZ`,
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
                                                                                    q(`Y6CHTJJM0`)
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
                              s(Q, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  s(i, {
                                    children: s(h, {
                                      links: [
                                        {
                                          href: { webPageId: `SDBoKoCqJ` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `SDBoKoCqJ` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(_, {
                                          breakpoint: x,
                                          overrides: {
                                            LPB0OcwSo: {
                                              width: `max((min(${p?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (p?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 1248,
                                            },
                                          },
                                          children: s(w, {
                                            height: 400,
                                            width: `max((min(${p?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (p?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 832,
                                            children: c(y, {
                                              className: `framer-jtrxvw-container`,
                                              id: `jtrxvw`,
                                              nodeId: `FuRgcf9hn`,
                                              scopeId: `j39Cfkfcd`,
                                              children: [
                                                s(_, {
                                                  breakpoint: x,
                                                  overrides: { LPB0OcwSo: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: J(
                                                      {
                                                        pixelHeight: 543,
                                                        pixelWidth: 604,
                                                        src: `../../assets/images/u5gNm4itXfpBEB7J2FuFMI4FBn4.png`,
                                                        srcSet: `../../assets/images/u5gNm4itXfpBEB7J2FuFMI4FBn4.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/u5gNm4itXfpBEB7J2FuFMI4FBn4.png 604w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `FuRgcf9hn`,
                                                    jTs_fuWrm: O({ overlay: e }),
                                                    JWP0bNV85: `Cordless Drill Machine`,
                                                    layoutId: `FuRgcf9hn`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: q(`ZKOecjUjr`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(g, {
                                                          triggerId: `jtrxvw`,
                                                          children: c(E, {
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
                                                                  className: m(j, `framer-3s3l0i`),
                                                                  "data-framer-portal-id": `jtrxvw`,
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
                                                                `UxkXEQGX5`
                                                              ),
                                                              s(l.div, {
                                                                className: m(j, `framer-5k8ts6`),
                                                                "data-framer-portal-id": `jtrxvw`,
                                                                transformTemplate: Y,
                                                                children: c(l.div, {
                                                                  className: `framer-zyncqu`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-2hbn7`,
                                                                      children: [
                                                                        s(T, {
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
                                                                          className: `framer-1f9a6nb`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-164qx11`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(k, {
                                                                            animated: !1,
                                                                            className: `framer-lqbzsc`,
                                                                            layoutId: `qveXMLOR1`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(b, {
                                                                      action: `https://api.framer.com/forms/v1/forms/c97f1c0b-00d9-44f9-9777-dc5724d9ed63/submit`,
                                                                      className: `framer-1fn3m3u`,
                                                                      nodeId: `b35j3EXwR`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-1lxwkc0`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-1t0lnre`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-oc1c8i`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-17zd2ou`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-1r4xrmp`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-1xhfx1f`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-144ziwy`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-mfgv1l`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-77bnrn`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1n4yrmh`,
                                                                              children: [
                                                                                s(T, {
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
                                                                                  className: `framer-1u4zikl`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-nn6hvg`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(w, {
                                                                              width: `277px`,
                                                                              children: s(y, {
                                                                                className: `framer-1h8hyc5-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `EgDvndzqn`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `j39Cfkfcd`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `EgDvndzqn`,
                                                                                  layoutId: `EgDvndzqn`,
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
                                                                                    q(`Y6CHTJJM0`)
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
        `.framer-4ooyf.framer-1q2mogs, .framer-4ooyf .framer-1q2mogs { display: block; }`,
        `.framer-4ooyf.framer-phc6b8 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-4ooyf .framer-1ntwl1w { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 3624px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 390px; }`,
        `.framer-4ooyf .framer-141r430 { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 80px 16px 80px 16px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-4ooyf .framer-1swkhxe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 24px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 24px; }`,
        `.framer-4ooyf .framer-1d2nsw0, .framer-4ooyf .framer-mnfn04, .framer-4ooyf .framer-ia9lcp { --1335ju: 2; --18mrqx2: #000000; --3it368: 1; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-4ooyf .framer-d2ua68, .framer-4ooyf .framer-1f2doif { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-4ooyf .framer-i7e3ti { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 24px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 24px; }`,
        `.framer-4ooyf .framer-acewh5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; min-height: 24px; min-width: 24px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-4ooyf .framer-vvl20q, .framer-4ooyf .framer-1d6kv7j { --1335ju: 2; --18mrqx2: #000000; --3it368: 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-4ooyf .framer-1msgf82 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-4ooyf .framer-1ea31nh-container, .framer-4ooyf .framer-28w0yw-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-4ooyf .framer-fc7ykm, .framer-4ooyf .framer-8kywjd { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-4ooyf .framer-1vmmwu { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-4ooyf .framer-o8y498-container, .framer-4ooyf .framer-wb52c5-container, .framer-4ooyf .framer-167ht9z-container, .framer-4ooyf .framer-1qos6na-container, .framer-4ooyf .framer-mdrskk-container, .framer-4ooyf .framer-18qiad0-container, .framer-4ooyf .framer-fm1qei-container, .framer-4ooyf .framer-zturbv-container, .framer-4ooyf .framer-8di9iw-container, .framer-4ooyf .framer-1000ixf-container, .framer-4ooyf .framer-1tvezwm-container, .framer-4ooyf .framer-1ke5030-container, .framer-4ooyf .framer-rh9bag-container, .framer-4ooyf .framer-hi9oxl-container, .framer-4ooyf .framer-pmjqzr-container, .framer-4ooyf .framer-jtrxvw-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-4ooyf.framer-1vd9tza, .framer-4ooyf.framer-1qlsyqf, .framer-4ooyf.framer-pyiwoq, .framer-4ooyf.framer-1qwqkuy, .framer-4ooyf.framer-10znqdg, .framer-4ooyf.framer-h19qso, .framer-4ooyf.framer-1mefr1q, .framer-4ooyf.framer-7xu9qy, .framer-4ooyf.framer-1ec8vsn, .framer-4ooyf.framer-10yik9v, .framer-4ooyf.framer-c5hgqm, .framer-4ooyf.framer-fx5gk8, .framer-4ooyf.framer-112ye8e, .framer-4ooyf.framer-lw9azv, .framer-4ooyf.framer-ftmqpp, .framer-4ooyf.framer-3s3l0i { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-4ooyf.framer-1un704k, .framer-4ooyf.framer-rfddui, .framer-4ooyf.framer-7uchiu, .framer-4ooyf.framer-scdgmg, .framer-4ooyf.framer-a6iorh, .framer-4ooyf.framer-pmujch, .framer-4ooyf.framer-sqespg, .framer-4ooyf.framer-adu4cz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 60px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-4ooyf .framer-1k7xslk, .framer-4ooyf .framer-wcn2g4, .framer-4ooyf .framer-re9cxf, .framer-4ooyf .framer-14t3xdl, .framer-4ooyf .framer-16hrtrh, .framer-4ooyf .framer-15d9kt0, .framer-4ooyf .framer-i4cjl1, .framer-4ooyf .framer-9v63bh { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 300px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-4ooyf .framer-1cegufu, .framer-4ooyf .framer-ldgwsr, .framer-4ooyf .framer-5nwikt, .framer-4ooyf .framer-1kdrgly, .framer-4ooyf .framer-19rh886, .framer-4ooyf .framer-dhtw9f, .framer-4ooyf .framer-1fl3qhw, .framer-4ooyf .framer-1hk37lb, .framer-4ooyf .framer-jjubzx, .framer-4ooyf .framer-kz8t7u, .framer-4ooyf .framer-6jl1cd, .framer-4ooyf .framer-7yvgjk, .framer-4ooyf .framer-1n5dhu9, .framer-4ooyf .framer-um5s6n, .framer-4ooyf .framer-13t7v2d, .framer-4ooyf .framer-2hbn7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-4ooyf .framer-jixa3a, .framer-4ooyf .framer-1jsdiun, .framer-4ooyf .framer-92h292, .framer-4ooyf .framer-aj6mc3, .framer-4ooyf .framer-u4fcx7, .framer-4ooyf .framer-1kyodq8, .framer-4ooyf .framer-1pu4rgf, .framer-4ooyf .framer-bf272x, .framer-4ooyf .framer-p1hzju, .framer-4ooyf .framer-1lga465, .framer-4ooyf .framer-1wl2kwz, .framer-4ooyf .framer-1qrf204, .framer-4ooyf .framer-1hskpko, .framer-4ooyf .framer-lg0nqp, .framer-4ooyf .framer-1xortpk, .framer-4ooyf .framer-1f9a6nb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-4ooyf .framer-1h5qfua, .framer-4ooyf .framer-q966xi, .framer-4ooyf .framer-1pvt232, .framer-4ooyf .framer-9uboa, .framer-4ooyf .framer-3xrql, .framer-4ooyf .framer-97msso, .framer-4ooyf .framer-1wbaffi, .framer-4ooyf .framer-1rsrwd8, .framer-4ooyf .framer-kaf3z5, .framer-4ooyf .framer-d9exze, .framer-4ooyf .framer-w7e2ev, .framer-4ooyf .framer-1nx7vy2, .framer-4ooyf .framer-1n0u1wm, .framer-4ooyf .framer-1afgnw5, .framer-4ooyf .framer-sczwpk, .framer-4ooyf .framer-164qx11 { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-4ooyf .framer-12vfso1, .framer-4ooyf .framer-1sifw24, .framer-4ooyf .framer-4lse2, .framer-4ooyf .framer-130ytd4, .framer-4ooyf .framer-11a9idg, .framer-4ooyf .framer-1phq8c3, .framer-4ooyf .framer-ctejka, .framer-4ooyf .framer-15yxh8r, .framer-4ooyf .framer-uu9jq, .framer-4ooyf .framer-1ys2ee6, .framer-4ooyf .framer-1ptgjph, .framer-4ooyf .framer-159mgpv, .framer-4ooyf .framer-13v4b54, .framer-4ooyf .framer-se9z5m, .framer-4ooyf .framer-1ply01t, .framer-4ooyf .framer-lqbzsc { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-4ooyf .framer-1g0am2v, .framer-4ooyf .framer-1wnwn0k, .framer-4ooyf .framer-1vuiap8, .framer-4ooyf .framer-nmamkj, .framer-4ooyf .framer-1v376sm, .framer-4ooyf .framer-1n502ox, .framer-4ooyf .framer-pqmteq, .framer-4ooyf .framer-1x3gth3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 261px; }`,
        `.framer-4ooyf .framer-f6b74l, .framer-4ooyf .framer-thuhpd, .framer-4ooyf .framer-1eq03n8, .framer-4ooyf .framer-owrjk9, .framer-4ooyf .framer-3mml9d, .framer-4ooyf .framer-esav2x, .framer-4ooyf .framer-eajmp, .framer-4ooyf .framer-1llkgq6, .framer-4ooyf .framer-1rrthho, .framer-4ooyf .framer-i6ctkn, .framer-4ooyf .framer-3fzolp, .framer-4ooyf .framer-cqauab, .framer-4ooyf .framer-1x9xtem, .framer-4ooyf .framer-iwa73v, .framer-4ooyf .framer-174dpwk, .framer-4ooyf .framer-1qbh0wy, .framer-4ooyf .framer-vwm8ok, .framer-4ooyf .framer-1r9qdl7, .framer-4ooyf .framer-19korym, .framer-4ooyf .framer-nrtwlv, .framer-4ooyf .framer-jztmir, .framer-4ooyf .framer-2rhijp, .framer-4ooyf .framer-1oloe5l, .framer-4ooyf .framer-1h3d4w7, .framer-4ooyf .framer-15tqgpt, .framer-4ooyf .framer-1um04jt, .framer-4ooyf .framer-1cxb2im, .framer-4ooyf .framer-kyahmn, .framer-4ooyf .framer-lzrrk0, .framer-4ooyf .framer-6bkbc5, .framer-4ooyf .framer-137thje, .framer-4ooyf .framer-17r9djg, .framer-4ooyf .framer-z52cht, .framer-4ooyf .framer-1scxua9, .framer-4ooyf .framer-1w8pc7f, .framer-4ooyf .framer-18pcyqu, .framer-4ooyf .framer-19z9mf2, .framer-4ooyf .framer-hqkdrj, .framer-4ooyf .framer-sd5ste, .framer-4ooyf .framer-12hse5s, .framer-4ooyf .framer-r221on, .framer-4ooyf .framer-qif1am, .framer-4ooyf .framer-1aho97x, .framer-4ooyf .framer-mfea33, .framer-4ooyf .framer-4d6d8l, .framer-4ooyf .framer-1e0wyrz, .framer-4ooyf .framer-5l7rf5, .framer-4ooyf .framer-4outek, .framer-4ooyf .framer-1jeahso, .framer-4ooyf .framer-6852h7, .framer-4ooyf .framer-1oowsx9, .framer-4ooyf .framer-ppyby7, .framer-4ooyf .framer-1xlraxv, .framer-4ooyf .framer-1uxrziv, .framer-4ooyf .framer-1ibyw88, .framer-4ooyf .framer-10vxxlg, .framer-4ooyf .framer-1l3r8z0, .framer-4ooyf .framer-mpmdvo, .framer-4ooyf .framer-izzvq8, .framer-4ooyf .framer-19hf0dn, .framer-4ooyf .framer-1lxwkc0, .framer-4ooyf .framer-17zd2ou, .framer-4ooyf .framer-144ziwy, .framer-4ooyf .framer-1n4yrmh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-4ooyf .framer-1k2lp3u, .framer-4ooyf .framer-11pk74w, .framer-4ooyf .framer-o1gg6j, .framer-4ooyf .framer-11i2d20, .framer-4ooyf .framer-1ac3l0i, .framer-4ooyf .framer-12nc4ts, .framer-4ooyf .framer-aqxuik, .framer-4ooyf .framer-kjsrdq, .framer-4ooyf .framer-xu2wt5, .framer-4ooyf .framer-1n24lpj, .framer-4ooyf .framer-1az5d9, .framer-4ooyf .framer-97iojs, .framer-4ooyf .framer-1p77t50, .framer-4ooyf .framer-48eopw, .framer-4ooyf .framer-14vivgk, .framer-4ooyf .framer-ntncjm, .framer-4ooyf .framer-1ty36q1, .framer-4ooyf .framer-13t2vg8, .framer-4ooyf .framer-vfb7ij, .framer-4ooyf .framer-1s7j01j, .framer-4ooyf .framer-b07d27, .framer-4ooyf .framer-1tgkr00, .framer-4ooyf .framer-bzv736, .framer-4ooyf .framer-4zppji, .framer-4ooyf .framer-kcs8gz, .framer-4ooyf .framer-l5nu9j, .framer-4ooyf .framer-4zac0m, .framer-4ooyf .framer-jlrbye, .framer-4ooyf .framer-1o91408, .framer-4ooyf .framer-1ex3amh, .framer-4ooyf .framer-9zb599, .framer-4ooyf .framer-1p92esn, .framer-4ooyf .framer-wb17n7, .framer-4ooyf .framer-1w5qsyv, .framer-4ooyf .framer-grlz6m, .framer-4ooyf .framer-1mfuwat, .framer-4ooyf .framer-5q4h5s, .framer-4ooyf .framer-rwyrgi, .framer-4ooyf .framer-1mm4ioq, .framer-4ooyf .framer-g3gnvh, .framer-4ooyf .framer-syykns, .framer-4ooyf .framer-1vjluvc, .framer-4ooyf .framer-1auw5js, .framer-4ooyf .framer-mjnoa5, .framer-4ooyf .framer-1o712jo, .framer-4ooyf .framer-12gpzym, .framer-4ooyf .framer-178i2jo, .framer-4ooyf .framer-vx6h4k, .framer-4ooyf .framer-1miijol, .framer-4ooyf .framer-1gotbpv, .framer-4ooyf .framer-7t1x0z, .framer-4ooyf .framer-1qmamm4, .framer-4ooyf .framer-vcip7o, .framer-4ooyf .framer-1rs7dko, .framer-4ooyf .framer-4vvhbx, .framer-4ooyf .framer-b2rpbe, .framer-4ooyf .framer-1ez5czi, .framer-4ooyf .framer-bkoeco, .framer-4ooyf .framer-wtjy96, .framer-4ooyf .framer-vnss6a, .framer-4ooyf .framer-1t0lnre, .framer-4ooyf .framer-1r4xrmp, .framer-4ooyf .framer-mfgv1l, .framer-4ooyf .framer-1u4zikl { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-4ooyf .framer-os0ogr, .framer-4ooyf .framer-1qlfu0f, .framer-4ooyf .framer-71ay83, .framer-4ooyf .framer-qot0g1, .framer-4ooyf .framer-mq3va0, .framer-4ooyf .framer-1llu5tu, .framer-4ooyf .framer-1w98go4, .framer-4ooyf .framer-1m7w88, .framer-4ooyf .framer-bjy8jy, .framer-4ooyf .framer-1ty52af, .framer-4ooyf .framer-17uns7n, .framer-4ooyf .framer-1h1r9mc, .framer-4ooyf .framer-8m8lzj, .framer-4ooyf .framer-4epk0p, .framer-4ooyf .framer-1lnpfp4, .framer-4ooyf .framer-1nbpfus, .framer-4ooyf .framer-1v5obev, .framer-4ooyf .framer-1uk9qtb, .framer-4ooyf .framer-teg51f, .framer-4ooyf .framer-dzrujk, .framer-4ooyf .framer-1jb7vcd, .framer-4ooyf .framer-1kfky0o, .framer-4ooyf .framer-anhsti, .framer-4ooyf .framer-z63xpk, .framer-4ooyf .framer-1jpqzhx, .framer-4ooyf .framer-1sqo2uc, .framer-4ooyf .framer-yb8q3f, .framer-4ooyf .framer-15kihit, .framer-4ooyf .framer-lyuhsn, .framer-4ooyf .framer-16ata0f, .framer-4ooyf .framer-1h2r787, .framer-4ooyf .framer-pebmbg, .framer-4ooyf .framer-18y2yjq, .framer-4ooyf .framer-1fpt9br, .framer-4ooyf .framer-1vvbeo5, .framer-4ooyf .framer-cht76y, .framer-4ooyf .framer-11gaqcy, .framer-4ooyf .framer-mvzpu8, .framer-4ooyf .framer-1bttfhc, .framer-4ooyf .framer-qystka, .framer-4ooyf .framer-ayzrxl, .framer-4ooyf .framer-hf4a2s, .framer-4ooyf .framer-1o1tfjv, .framer-4ooyf .framer-jycasi, .framer-4ooyf .framer-115gyed, .framer-4ooyf .framer-ffkbpx, .framer-4ooyf .framer-15zhopx, .framer-4ooyf .framer-63dmmc, .framer-4ooyf .framer-elmqx5, .framer-4ooyf .framer-1vtrlot, .framer-4ooyf .framer-1oe7e65, .framer-4ooyf .framer-jtg4lb, .framer-4ooyf .framer-83qa4n, .framer-4ooyf .framer-j2dmif, .framer-4ooyf .framer-tkgl5y, .framer-4ooyf .framer-28204q, .framer-4ooyf .framer-1js3a14, .framer-4ooyf .framer-q2hzrg, .framer-4ooyf .framer-117qnpc, .framer-4ooyf .framer-1d2v93g, .framer-4ooyf .framer-oc1c8i, .framer-4ooyf .framer-1xhfx1f, .framer-4ooyf .framer-77bnrn, .framer-4ooyf .framer-nn6hvg { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-4ooyf .framer-gxztf7-container, .framer-4ooyf .framer-1qq8d8x-container, .framer-4ooyf .framer-sm37b9-container, .framer-4ooyf .framer-1od314p-container, .framer-4ooyf .framer-14ydogy-container, .framer-4ooyf .framer-2kak0w-container, .framer-4ooyf .framer-pv41ue-container, .framer-4ooyf .framer-18qt3w8-container, .framer-4ooyf .framer-1ozcnez-container, .framer-4ooyf .framer-1bq62a1-container, .framer-4ooyf .framer-192265n-container, .framer-4ooyf .framer-1bv723-container, .framer-4ooyf .framer-1ntldwf-container, .framer-4ooyf .framer-qflxf-container, .framer-4ooyf .framer-n5427c-container, .framer-4ooyf .framer-1h8hyc5-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-4ooyf .framer-1e1y793 { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 96px 24px 96px 24px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-4ooyf .framer-16n39x9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 800px; }`,
        `.framer-4ooyf .framer-vdsrko { --1335ju: 1.7; --18mrqx2: #000000; --3it368: 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-4ooyf .framer-sx9wmp { height: 2px; position: relative; width: 4px; }`,
        `.framer-4ooyf .framer-zjwka4 { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-4ooyf.framer-xti9yk, .framer-4ooyf.framer-15gv3wh, .framer-4ooyf.framer-1e5pcnk, .framer-4ooyf.framer-1bz8irt, .framer-4ooyf.framer-1cy9hvu, .framer-4ooyf.framer-1l5ny9k, .framer-4ooyf.framer-f2vtu7, .framer-4ooyf.framer-5k8ts6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-4ooyf .framer-1w030wv, .framer-4ooyf .framer-19wn8hh, .framer-4ooyf .framer-kc6ow6, .framer-4ooyf .framer-1t41w2a, .framer-4ooyf .framer-pve6sy, .framer-4ooyf .framer-3bo1c, .framer-4ooyf .framer-1kqpj11, .framer-4ooyf .framer-zyncqu { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-4ooyf .framer-1lcep3l, .framer-4ooyf .framer-1g85ii3, .framer-4ooyf .framer-1ljgmtg, .framer-4ooyf .framer-1k4owvk, .framer-4ooyf .framer-14f8yif, .framer-4ooyf .framer-1xns3qg, .framer-4ooyf .framer-6w1hxi, .framer-4ooyf .framer-1fn3m3u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        ...Se,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-4ooyf.framer-phc6b8 { width: 810px; } .framer-4ooyf .framer-1e1y793 { padding: 80px 24px 80px 24px; } .framer-4ooyf .framer-zjwka4 { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-4ooyf .framer-1w030wv, .framer-4ooyf .framer-19wn8hh, .framer-4ooyf .framer-kc6ow6, .framer-4ooyf .framer-1t41w2a, .framer-4ooyf .framer-pve6sy, .framer-4ooyf .framer-3bo1c, .framer-4ooyf .framer-1kqpj11, .framer-4ooyf .framer-zyncqu { height: min-content; width: min-content; } .framer-4ooyf .framer-jjubzx, .framer-4ooyf .framer-kz8t7u, .framer-4ooyf .framer-6jl1cd, .framer-4ooyf .framer-7yvgjk, .framer-4ooyf .framer-1n5dhu9, .framer-4ooyf .framer-um5s6n, .framer-4ooyf .framer-13t7v2d, .framer-4ooyf .framer-2hbn7 { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-4ooyf.framer-phc6b8 { width: 390px; } .framer-4ooyf .framer-i7e3ti { order: 0; } .framer-4ooyf .framer-1ea31nh-container { order: 5; } .framer-4ooyf .framer-fc7ykm { order: 6; }}`,
      ],
      `framer-4ooyf`
    )),
    ($.displayName = `Hand Tools 2Nd Page`),
    ($.defaultProps = { height: 2025, width: 1200 }),
    xe(
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
        ...L,
        ...R,
        ...V,
        ...H,
        ...U,
        ...se(O),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (t.locale, Promise.allSettled([f(P, {}, t), f(F, {}, t), f(M, {}, t)])),
    }),
    (Le = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `Framerj39Cfkfcd`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `2025`,
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicWidth: `1200`,
            framerAutoSizeImages: `true`,
            framerScrollSections: `{"ull16T7QP":{"pattern":":ull16T7QP","name":"classes"},"grzQXGNmg":{"pattern":":grzQXGNmg","name":"classes"}}`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"LPB0OcwSo":{"layout":["fixed","fixed"]},"qKpTxfdFM":{"layout":["fixed","fixed"]}}}`,
            framerComponentViewportWidth: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Le as __FramerMetadata__, $ as default, ke as queryParamNames };
//# sourceMappingURL=3YSFLPVcH54a0E-gdzLQbyYcoBVDbGFaXIUK5_ECTnw.DnbgWtDJ.mjs.map
