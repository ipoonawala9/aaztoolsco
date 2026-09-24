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
  U as ce,
  X as le,
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
  mt as y,
  n as b,
  nt as ge,
  o as x,
  ot as _e,
  p as S,
  s as C,
  st as ve,
  t as w,
  tt as ye,
  ut as be,
  w as T,
  x as E,
  y as D,
} from "./framer.w0XhpZTx.mjs";
import { i as xe, n as Se, r as Ce, t as we } from "./nl385Jssa.BV16yEHR.mjs";
import { a as O, c as k, i as Te, o as Ee, r as A, s as j } from "./shared.DPOhhryJ.mjs";
import { i as M, r as N } from "./cQxXulDZM.DXXtl8ZX.mjs";
import { n as P, t as F } from "./jNXHc0ip8.Bnggf-hw.mjs";
import De, { t as Oe } from "./zgx22lbhywpuVX6uCAox9TN8GQ2tzJjlDX6c7vOc-84._MFHvkp7.mjs";
var I, L, R, z, B, V, ke, Ae, H, je, Me, Ne, Pe, U, W, G, K, q, J, Y, X, Z, Q, Fe, Ie, $, Le;
e(() => {
  (ne(),
    ce(),
    d(),
    ie(),
    te(),
    Ee(),
    k(),
    Te(),
    M(),
    P(),
    xe(),
    Oe(),
    (I = p(j)),
    (L = p(N)),
    (R = v(b)),
    (z = v(E)),
    (B = p(F)),
    (V = p(O)),
    (ke = p(A)),
    (Ae = {
      GLvce3doQ: `(max-width: 809.98px)`,
      nVRGrM4Oq: `(min-width: 810px) and (max-width: 1199.98px)`,
      V3xMj1aF_: `(min-width: 1200px)`,
    }),
    (H = () => typeof document < `u`),
    (je = []),
    (Me = `framer-yAICj`),
    (Ne = {
      GLvce3doQ: `framer-v-57yq89`,
      nVRGrM4Oq: `framer-v-85jke0`,
      V3xMj1aF_: `framer-v-1b4hic8`,
    }),
    (Pe = (e, t, n) => (e && t ? `position` : n)),
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
    (Q = { Desktop: `V3xMj1aF_`, Phone: `GLvce3doQ`, Tablet: `nVRGrM4Oq` }),
    (Fe = ({ value: e }) =>
      _e()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ie = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `V3xMj1aF_`,
    })),
    ($ = y(
      a(function (e, a) {
        let te = n(null),
          ne = a ?? te,
          ie = re(),
          { activeLocale: d, setLocale: f } = ve(),
          p = ge(),
          { style: se, className: ce, layoutId: le, variant: v, ...he } = Ie(e);
        fe(ee(() => De({}, d), [d]));
        let [y, _e] = ue(v, Ae, !1),
          T = m(Me, we),
          xe = () => !H() || y === `GLvce3doQ`,
          Se = t(de)?.isLayoutTemplate,
          Ce = !!t(ae)?.transition?.layout,
          k = Pe(Se, Ce),
          Te = be(`gsm409mS_`),
          Ee = n(null),
          M = () => !H() || y !== `GLvce3doQ`;
        pe();
        let { activeVariantCallback: P, delay: Oe } = ye(void 0),
          I = ({ overlay: e }) =>
            P(async (...t) => {
              e.toggle();
            }),
          L = ({ overlay: e }) =>
            P(async (...t) => {
              e.hide();
            }),
          B = be(`OX5FoC4Da`),
          V = n(null);
        return (
          me({}),
          s(de.Provider, {
            value: {
              activeVariantId: y,
              humanReadableVariantMap: Q,
              primaryVariantId: `V3xMj1aF_`,
              variantClassNames: Ne,
            },
            children: c(oe, {
              id: le ?? ie,
              children: [
                s(Fe, { value: `html body { background: rgb(255, 255, 255); }` }),
                c(l.div, {
                  ...he,
                  className: m(T, `framer-1b4hic8`, ce),
                  ref: ne,
                  style: { ...se },
                  children: [
                    xe() &&
                      s(l.div, {
                        className: `framer-91vxwi hidden-1b4hic8 hidden-85jke0`,
                        "data-framer-name": `Phone`,
                        layout: k,
                        children: c(`section`, {
                          className: `framer-ccey4e`,
                          "data-framer-name": `Classes`,
                          id: Te,
                          ref: Ee,
                          children: [
                            s(S, {
                              href: { webPageId: `k3I5EzP4j` },
                              motionChild: !0,
                              nodeId: `iaUiyTWjg`,
                              openInNewTab: !1,
                              scopeId: `JuiSZL20W`,
                              children: s(l.a, {
                                className: `framer-ai4cpb framer-98n549`,
                                children: s(j, {
                                  animated: !1,
                                  BKVe8Pgvw: !0,
                                  className: `framer-1adqswf`,
                                  fICyAUQY1: !0,
                                  layoutId: `OzLmy_X9B`,
                                  lKf_CQTz5: !0,
                                }),
                              }),
                            }),
                            c(`div`, {
                              className: `framer-1vt7es1`,
                              "data-framer-name": `Text`,
                              children: [
                                M() &&
                                  s(j, {
                                    animated: !1,
                                    BKVe8Pgvw: !0,
                                    className: `framer-eo1ibl hidden-57yq89`,
                                    fICyAUQY1: !0,
                                    layoutId: `qSNuVoslY`,
                                    lKf_CQTz5: !0,
                                  }),
                                M() &&
                                  s(S, {
                                    href: { webPageId: `xidqw88KX` },
                                    motionChild: !0,
                                    nodeId: `tejWAbNHj`,
                                    openInNewTab: !1,
                                    scopeId: `JuiSZL20W`,
                                    children: s(l.a, {
                                      className: `framer-c8zj9z hidden-57yq89 framer-98n549`,
                                      children: s(j, {
                                        animated: !1,
                                        BKVe8Pgvw: !0,
                                        className: `framer-1m1s9am`,
                                        fICyAUQY1: !0,
                                        layoutId: `BUcR3D3ue`,
                                        lKf_CQTz5: !0,
                                      }),
                                    }),
                                  }),
                                s(_, {
                                  breakpoint: y,
                                  overrides: {
                                    GLvce3doQ: { y: (p?.y || 0) + 0 + 0 + 0 + 0 + 80 + 64 + 0 + 0 },
                                  },
                                  children: s(w, {
                                    height: 26,
                                    children: s(R, {
                                      __framer__animate: { transition: W },
                                      __framer__animateOnce: !0,
                                      __framer__enter: U,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-shaakm-container`,
                                      nodeId: `ilZsnjNo3`,
                                      rendersWithMotion: !0,
                                      scopeId: `JuiSZL20W`,
                                      children: s(N, {
                                        ggTbrSuHk: `Power Tools`,
                                        height: `100%`,
                                        id: `ilZsnjNo3`,
                                        layoutId: `ilZsnjNo3`,
                                        variant: G(`z6oSgdJxk`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                s(z, {
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
                                      children: `INGCO`,
                                    }),
                                  }),
                                  className: `framer-17g3jmj`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            c(`div`, {
                              className: `framer-pzk74k`,
                              "data-framer-name": `ClassesGallery`,
                              children: [
                                s(Z, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(h, {
                                        links: [
                                          {
                                            href: { webPageId: `uzQd8vkbU` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `uzQd8vkbU` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(_, {
                                            breakpoint: y,
                                            overrides: {
                                              GLvce3doQ: {
                                                width: `358px`,
                                                y: (p?.y || 0) + 0 + 0 + 0 + 0 + 80 + 192.4 + 0 + 0,
                                              },
                                            },
                                            children: s(w, {
                                              height: 400,
                                              children: c(b, {
                                                className: `framer-1x72h8l-container`,
                                                id: `1x72h8l`,
                                                nodeId: `st5UrPCO7`,
                                                scopeId: `JuiSZL20W`,
                                                children: [
                                                  s(_, {
                                                    breakpoint: y,
                                                    overrides: { GLvce3doQ: { oSlFkYxO1: t[1] } },
                                                    children: s(F, {
                                                      BlDyCL1Hj: q(
                                                        {
                                                          pixelHeight: 5304,
                                                          pixelWidth: 7952,
                                                          src: `../../assets/images/iAqXP7d4ncOiOzc4r9s87VihDI.png?width=7952&height=5304`,
                                                          srcSet: `../../assets/images/iAqXP7d4ncOiOzc4r9s87VihDI.png 512w,../../assets/images/iAqXP7d4ncOiOzc4r9s87VihDI.png?scale-down-to=1024&width=7952&height=5304 1024w,../../assets/images/iAqXP7d4ncOiOzc4r9s87VihDI.png 2048w,../../assets/images/iAqXP7d4ncOiOzc4r9s87VihDI.png?scale-down-to=4096&width=7952&height=5304 4096w,../../assets/images/iAqXP7d4ncOiOzc4r9s87VihDI.png?width=7952&height=5304 7952w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `st5UrPCO7`,
                                                      jTs_fuWrm: I({ overlay: e }),
                                                      JWP0bNV85: `Impact Wrench Machine`,
                                                      layoutId: `st5UrPCO7`,
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
                                                          s(g, {
                                                            triggerId: `1x72h8l`,
                                                            children: c(D, {
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
                                                                      T,
                                                                      `framer-zqp31l`
                                                                    ),
                                                                    "data-framer-portal-id": `1x72h8l`,
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
                                                                  `XG_HRZDY0`
                                                                ),
                                                                s(l.div, {
                                                                  className: m(T, `framer-1lra66p`),
                                                                  "data-framer-portal-id": `1x72h8l`,
                                                                  transformTemplate: J,
                                                                  children: c(l.div, {
                                                                    className: `framer-m4plf4`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-8de0gc`,
                                                                        children: [
                                                                          s(E, {
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
                                                                            className: `framer-14jaeyh`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-1naeuhg`,
                                                                            onTap: L({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(O, {
                                                                              animated: !1,
                                                                              className: `framer-x61wk`,
                                                                              layoutId: `bzhVR9y2P`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(x, {
                                                                        action: `https://api.framer.com/forms/v1/forms/f80699a1-3a92-4070-b3b8-13cad32cd023/submit`,
                                                                        className: `framer-rf6rvk`,
                                                                        nodeId: `rFceHyUlB`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-s2p5cb`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-m7v7ak`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-ngw7b8`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1tiu1az`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-1jbe05h`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-10yqwcz`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-oip2is`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-1mm51n`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-mpslg`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-13fs7ea`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-1bhi8t1`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-11k2ns3`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(w, {
                                                                                width: `221px`,
                                                                                children: s(b, {
                                                                                  className: `framer-2pc6kd-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `FQ9eNYmww`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `JuiSZL20W`,
                                                                                  children: s(A, {
                                                                                    height: `100%`,
                                                                                    id: `FQ9eNYmww`,
                                                                                    layoutId: `FQ9eNYmww`,
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
                                      children: s(h, {
                                        links: [
                                          {
                                            href: { webPageId: `oYxy3zMr7` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `oYxy3zMr7` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(_, {
                                            breakpoint: y,
                                            overrides: {
                                              GLvce3doQ: {
                                                width: `358px`,
                                                y:
                                                  (p?.y || 0) +
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
                                            children: s(w, {
                                              height: 400,
                                              children: c(b, {
                                                className: `framer-1h339t4-container`,
                                                id: `1h339t4`,
                                                nodeId: `no1VosEp7`,
                                                scopeId: `JuiSZL20W`,
                                                children: [
                                                  s(_, {
                                                    breakpoint: y,
                                                    overrides: { GLvce3doQ: { oSlFkYxO1: t[1] } },
                                                    children: s(F, {
                                                      BlDyCL1Hj: q(
                                                        {
                                                          pixelHeight: 5304,
                                                          pixelWidth: 7952,
                                                          src: `../../assets/images/8l76QTcE70Gi34ToKWcKPUObso.png?width=7952&height=5304`,
                                                          srcSet: `../../assets/images/8l76QTcE70Gi34ToKWcKPUObso.png 512w,../../assets/images/8l76QTcE70Gi34ToKWcKPUObso.png?scale-down-to=1024&width=7952&height=5304 1024w,../../assets/images/8l76QTcE70Gi34ToKWcKPUObso.png 2048w,../../assets/images/8l76QTcE70Gi34ToKWcKPUObso.png?scale-down-to=4096&width=7952&height=5304 4096w,../../assets/images/8l76QTcE70Gi34ToKWcKPUObso.png?width=7952&height=5304 7952w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `no1VosEp7`,
                                                      jTs_fuWrm: I({ overlay: e }),
                                                      JWP0bNV85: `Impact Drill Machine`,
                                                      layoutId: `no1VosEp7`,
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
                                                          s(g, {
                                                            triggerId: `1h339t4`,
                                                            children: c(D, {
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
                                                                      T,
                                                                      `framer-1vbzy3y`
                                                                    ),
                                                                    "data-framer-portal-id": `1h339t4`,
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
                                                                  `t4qPLiUjg`
                                                                ),
                                                                s(l.div, {
                                                                  className: m(T, `framer-9lz4ys`),
                                                                  "data-framer-portal-id": `1h339t4`,
                                                                  transformTemplate: J,
                                                                  children: c(l.div, {
                                                                    className: `framer-n8xonx`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-1ifbse2`,
                                                                        children: [
                                                                          s(E, {
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
                                                                            className: `framer-vbi5m6`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-pwl1nn`,
                                                                            onTap: L({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(O, {
                                                                              animated: !1,
                                                                              className: `framer-8h1e5m`,
                                                                              layoutId: `CHjLGh4j_`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(x, {
                                                                        action: `https://api.framer.com/forms/v1/forms/5aa70cbd-9959-4245-8515-d64187421ff3/submit`,
                                                                        className: `framer-1pcbcwd`,
                                                                        nodeId: `ejnZal51U`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-1lggp3l`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-g6k7i0`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1d3njpn`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-jrso87`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-4zt7db`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-fy9erf`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1wsewwv`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-1dcc6n0`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1tm9snn`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-h1929y`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-583os7`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1wfei93`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(w, {
                                                                                width: `221px`,
                                                                                children: s(b, {
                                                                                  className: `framer-jebtrx-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `s0k9hBJ9O`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `JuiSZL20W`,
                                                                                  children: s(A, {
                                                                                    height: `100%`,
                                                                                    id: `s0k9hBJ9O`,
                                                                                    layoutId: `s0k9hBJ9O`,
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
                                      children: s(h, {
                                        links: [
                                          {
                                            href: { webPageId: `AAc_ysl5G` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `AAc_ysl5G` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(_, {
                                            breakpoint: y,
                                            overrides: {
                                              GLvce3doQ: {
                                                width: `358px`,
                                                y:
                                                  (p?.y || 0) +
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
                                            children: s(w, {
                                              height: 400,
                                              children: c(b, {
                                                className: `framer-18n5iqu-container`,
                                                id: `18n5iqu`,
                                                nodeId: `QqCfXl_iP`,
                                                scopeId: `JuiSZL20W`,
                                                children: [
                                                  s(_, {
                                                    breakpoint: y,
                                                    overrides: { GLvce3doQ: { oSlFkYxO1: t[1] } },
                                                    children: s(F, {
                                                      BlDyCL1Hj: q(
                                                        {
                                                          pixelHeight: 543,
                                                          pixelWidth: 604,
                                                          src: `../../assets/images/I6Db1Zy8sGGm5iQAH7fQamHxrg.png`,
                                                          srcSet: `../../assets/images/I6Db1Zy8sGGm5iQAH7fQamHxrg.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/I6Db1Zy8sGGm5iQAH7fQamHxrg.png 604w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `QqCfXl_iP`,
                                                      jTs_fuWrm: I({ overlay: e }),
                                                      JWP0bNV85: `Heat Gun`,
                                                      layoutId: `QqCfXl_iP`,
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
                                                          s(g, {
                                                            triggerId: `18n5iqu`,
                                                            children: c(D, {
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
                                                                      T,
                                                                      `framer-1t5y0ck`
                                                                    ),
                                                                    "data-framer-portal-id": `18n5iqu`,
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
                                                                  `QKBYeCFA6`
                                                                ),
                                                                s(l.div, {
                                                                  className: m(T, `framer-10yk015`),
                                                                  "data-framer-portal-id": `18n5iqu`,
                                                                  transformTemplate: J,
                                                                  children: c(l.div, {
                                                                    className: `framer-1vnqjwc`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-4f93nd`,
                                                                        children: [
                                                                          s(E, {
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
                                                                            className: `framer-1fwdo5k`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-3imxxu`,
                                                                            onTap: L({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(O, {
                                                                              animated: !1,
                                                                              className: `framer-1x2yvk4`,
                                                                              layoutId: `pFupQy88s`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(x, {
                                                                        action: `https://api.framer.com/forms/v1/forms/ec124b9f-7dc4-4da9-af77-607a40837bc2/submit`,
                                                                        className: `framer-1ysxzlv`,
                                                                        nodeId: `yP7Bd9pO_`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-qgwgba`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-112z2yk`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1lxblap`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-9xm8vp`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-1jp6z8x`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-17hq9ey`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1u77gyi`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-psidn3`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-fz0jpt`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-vulcip`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-fykrdj`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-qv3yvw`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(w, {
                                                                                width: `221px`,
                                                                                children: s(b, {
                                                                                  className: `framer-1a04qxg-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `fnRfhG9MP`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `JuiSZL20W`,
                                                                                  children: s(A, {
                                                                                    height: `100%`,
                                                                                    id: `fnRfhG9MP`,
                                                                                    layoutId: `fnRfhG9MP`,
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
                                      children: s(h, {
                                        links: [
                                          {
                                            href: { webPageId: `RsOmwfylR` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `RsOmwfylR` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(_, {
                                            breakpoint: y,
                                            overrides: {
                                              GLvce3doQ: {
                                                width: `358px`,
                                                y:
                                                  (p?.y || 0) +
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
                                            children: s(w, {
                                              height: 400,
                                              children: c(b, {
                                                className: `framer-1vxvvj8-container`,
                                                id: `1vxvvj8`,
                                                nodeId: `waqGyFimY`,
                                                scopeId: `JuiSZL20W`,
                                                children: [
                                                  s(_, {
                                                    breakpoint: y,
                                                    overrides: { GLvce3doQ: { oSlFkYxO1: t[1] } },
                                                    children: s(F, {
                                                      BlDyCL1Hj: q(
                                                        {
                                                          pixelHeight: 543,
                                                          pixelWidth: 604,
                                                          src: `../../assets/images/QlhJjQuea2n2VzR2CxjCRXCdI.png`,
                                                          srcSet: `../../assets/images/QlhJjQuea2n2VzR2CxjCRXCdI.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/QlhJjQuea2n2VzR2CxjCRXCdI.png 604w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `waqGyFimY`,
                                                      jTs_fuWrm: I({ overlay: e }),
                                                      JWP0bNV85: `Blower`,
                                                      layoutId: `waqGyFimY`,
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
                                                          s(g, {
                                                            triggerId: `1vxvvj8`,
                                                            children: c(D, {
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
                                                                      T,
                                                                      `framer-vuixlf`
                                                                    ),
                                                                    "data-framer-portal-id": `1vxvvj8`,
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
                                                                  `O6FqJATFV`
                                                                ),
                                                                s(l.div, {
                                                                  className: m(T, `framer-1jwynsr`),
                                                                  "data-framer-portal-id": `1vxvvj8`,
                                                                  transformTemplate: J,
                                                                  children: c(l.div, {
                                                                    className: `framer-1dwcob2`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-kwgc1v`,
                                                                        children: [
                                                                          s(E, {
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
                                                                            className: `framer-zilvlu`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-17davaj`,
                                                                            onTap: L({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(O, {
                                                                              animated: !1,
                                                                              className: `framer-diizmk`,
                                                                              layoutId: `Q3lJDn_lZ`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(x, {
                                                                        action: `https://api.framer.com/forms/v1/forms/f27b2008-943f-4ccf-9a55-48432ea86b40/submit`,
                                                                        className: `framer-b42ut8`,
                                                                        nodeId: `sVObTn9Tn`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-dyeakz`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-rfryad`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-w72w5z`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1uh5l8w`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-53prs4`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-12z09v6`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-15flq1y`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-17oa864`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-fyfxq6`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-rxk6yn`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-lcngif`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-lxedo1`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(w, {
                                                                                width: `221px`,
                                                                                children: s(b, {
                                                                                  className: `framer-1tqywpx-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `BxDq8ivdl`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `JuiSZL20W`,
                                                                                  children: s(A, {
                                                                                    height: `100%`,
                                                                                    id: `BxDq8ivdl`,
                                                                                    layoutId: `BxDq8ivdl`,
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
                                      children: s(h, {
                                        links: [
                                          {
                                            href: { webPageId: `jVzOZkO3m` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `jVzOZkO3m` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(_, {
                                            breakpoint: y,
                                            overrides: {
                                              GLvce3doQ: {
                                                width: `358px`,
                                                y:
                                                  (p?.y || 0) +
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
                                            children: s(w, {
                                              height: 400,
                                              children: c(b, {
                                                className: `framer-1g8owy5-container`,
                                                id: `1g8owy5`,
                                                nodeId: `o6iXa0epy`,
                                                scopeId: `JuiSZL20W`,
                                                children: [
                                                  s(_, {
                                                    breakpoint: y,
                                                    overrides: { GLvce3doQ: { oSlFkYxO1: t[1] } },
                                                    children: s(F, {
                                                      BlDyCL1Hj: q(
                                                        {
                                                          pixelHeight: 543,
                                                          pixelWidth: 604,
                                                          src: `../../assets/images/GQBSmKGePnRFyYqkQ1oPVzeFE.png`,
                                                          srcSet: `../../assets/images/GQBSmKGePnRFyYqkQ1oPVzeFE.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/GQBSmKGePnRFyYqkQ1oPVzeFE.png 604w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `o6iXa0epy`,
                                                      jTs_fuWrm: I({ overlay: e }),
                                                      JWP0bNV85: `Angle Grinder`,
                                                      layoutId: `o6iXa0epy`,
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
                                                          s(g, {
                                                            triggerId: `1g8owy5`,
                                                            children: c(D, {
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
                                                                      T,
                                                                      `framer-nh4x1g`
                                                                    ),
                                                                    "data-framer-portal-id": `1g8owy5`,
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
                                                                  `yPSPDQS1d`
                                                                ),
                                                                s(l.div, {
                                                                  className: m(T, `framer-ey4x4r`),
                                                                  "data-framer-portal-id": `1g8owy5`,
                                                                  transformTemplate: J,
                                                                  children: c(l.div, {
                                                                    className: `framer-nmsmw1`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-9plrqw`,
                                                                        children: [
                                                                          s(E, {
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
                                                                            className: `framer-1mu897x`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-z9yj7q`,
                                                                            onTap: L({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(O, {
                                                                              animated: !1,
                                                                              className: `framer-ue41dk`,
                                                                              layoutId: `otro__Ywk`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(x, {
                                                                        action: `https://api.framer.com/forms/v1/forms/4a7521fe-a89d-4b2f-bea7-4d440918a480/submit`,
                                                                        className: `framer-18h4x8n`,
                                                                        nodeId: `xTNF5OtGv`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-tdnp0d`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-1i0eqpg`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-4gek0x`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1mey3ga`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-9ndjhc`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-10tsxj`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1u5gs1s`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-4jy6u0`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-5jzuta`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-3oqk1k`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-74qh3t`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-tvndqd`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(w, {
                                                                                width: `221px`,
                                                                                children: s(b, {
                                                                                  className: `framer-1t3too4-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `yPw7TzM4g`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `JuiSZL20W`,
                                                                                  children: s(A, {
                                                                                    height: `100%`,
                                                                                    id: `yPw7TzM4g`,
                                                                                    layoutId: `yPw7TzM4g`,
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
                                      children: s(h, {
                                        links: [
                                          {
                                            href: { webPageId: `AIP6acyMt` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `AIP6acyMt` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(_, {
                                            breakpoint: y,
                                            overrides: {
                                              GLvce3doQ: {
                                                width: `358px`,
                                                y:
                                                  (p?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  80 +
                                                  192.4 +
                                                  0 +
                                                  2080,
                                              },
                                            },
                                            children: s(w, {
                                              height: 400,
                                              children: c(b, {
                                                className: `framer-g0964q-container`,
                                                id: `g0964q`,
                                                nodeId: `YDmO4YSVm`,
                                                scopeId: `JuiSZL20W`,
                                                children: [
                                                  s(_, {
                                                    breakpoint: y,
                                                    overrides: { GLvce3doQ: { oSlFkYxO1: t[1] } },
                                                    children: s(F, {
                                                      BlDyCL1Hj: q(
                                                        {
                                                          pixelHeight: 543,
                                                          pixelWidth: 604,
                                                          src: `../../assets/images/sDwWv48fhBCTu8ZSHfhoDfdDEMg.png`,
                                                          srcSet: `../../assets/images/sDwWv48fhBCTu8ZSHfhoDfdDEMg.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/sDwWv48fhBCTu8ZSHfhoDfdDEMg.png 604w`,
                                                        },
                                                        ``
                                                      ),
                                                      height: `100%`,
                                                      id: `YDmO4YSVm`,
                                                      jTs_fuWrm: I({ overlay: e }),
                                                      JWP0bNV85: `Air compressor`,
                                                      layoutId: `YDmO4YSVm`,
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
                                                          s(g, {
                                                            triggerId: `g0964q`,
                                                            children: c(D, {
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
                                                                      T,
                                                                      `framer-4rj1wu`
                                                                    ),
                                                                    "data-framer-portal-id": `g0964q`,
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
                                                                  `NJfswqLCA`
                                                                ),
                                                                s(l.div, {
                                                                  className: m(T, `framer-117gv7x`),
                                                                  "data-framer-portal-id": `g0964q`,
                                                                  transformTemplate: J,
                                                                  children: c(l.div, {
                                                                    className: `framer-1achecs`,
                                                                    children: [
                                                                      c(l.div, {
                                                                        className: `framer-14x37f1`,
                                                                        children: [
                                                                          s(E, {
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
                                                                            className: `framer-1pd5rm1`,
                                                                            fonts: [`Inter-Bold`],
                                                                            verticalAlignment: `top`,
                                                                            withExternalLayout: !0,
                                                                          }),
                                                                          s(l.div, {
                                                                            className: `framer-u478b3`,
                                                                            onTap: L({
                                                                              overlay: e,
                                                                            }),
                                                                            children: s(O, {
                                                                              animated: !1,
                                                                              className: `framer-vztjc5`,
                                                                              layoutId: `jBT1_0jx7`,
                                                                              UO5clYVeQ: !0,
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                      s(x, {
                                                                        action: `https://api.framer.com/forms/v1/forms/d6c33253-08d3-4af0-ad19-14f64a0335a8/submit`,
                                                                        className: `framer-jzdgjv`,
                                                                        nodeId: `ucMh2JdQB`,
                                                                        children: (e) =>
                                                                          c(i, {
                                                                            children: [
                                                                              c(l.label, {
                                                                                className: `framer-gus7tt`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-4dquqc`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1qgv7a1`,
                                                                                    inputName: `Email`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-2dn42g`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-1rgo491`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-1680u98`,
                                                                                    inputName: `Mobile Number`,
                                                                                    placeholder: ``,
                                                                                    required: !1,
                                                                                    type: `tel`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1hqerl9`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-tr923g`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-152dx90`,
                                                                                    inputName: `Product Name`,
                                                                                    placeholder: ``,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              c(l.label, {
                                                                                className: `framer-1l0k952`,
                                                                                children: [
                                                                                  s(E, {
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
                                                                                    className: `framer-1jbh2mv`,
                                                                                    fonts: [
                                                                                      `Inter-Medium`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                  s(C, {
                                                                                    className: `framer-5ft10b`,
                                                                                    inputName: `Make, Model & Size`,
                                                                                    placeholder: ``,
                                                                                    required: !0,
                                                                                    type: `text`,
                                                                                  }),
                                                                                ],
                                                                              }),
                                                                              s(w, {
                                                                                width: `221px`,
                                                                                children: s(b, {
                                                                                  className: `framer-1i7g61p-container`,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  isModuleExternal:
                                                                                    !0,
                                                                                  nodeId: `sOHbf4Lx5`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `JuiSZL20W`,
                                                                                  children: s(A, {
                                                                                    height: `100%`,
                                                                                    id: `sOHbf4Lx5`,
                                                                                    layoutId: `sOHbf4Lx5`,
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
                    M() &&
                      c(l.section, {
                        className: `framer-ruzxq5 hidden-57yq89`,
                        "data-framer-name": `Classes`,
                        id: B,
                        layout: k,
                        ref: V,
                        children: [
                          s(S, {
                            href: { webPageId: `k3I5EzP4j` },
                            motionChild: !0,
                            nodeId: `FPeYJgjyv`,
                            openInNewTab: !1,
                            scopeId: `JuiSZL20W`,
                            children: s(l.a, {
                              className: `framer-ii066p framer-98n549`,
                              children: s(j, {
                                animated: !1,
                                BKVe8Pgvw: !0,
                                className: `framer-1xpssg7`,
                                fICyAUQY1: !0,
                                layoutId: `vagj80Rbs`,
                                lKf_CQTz5: !0,
                              }),
                            }),
                          }),
                          c(`div`, {
                            className: `framer-1bxto5f`,
                            "data-framer-name": `Text`,
                            children: [
                              s(_, {
                                breakpoint: y,
                                overrides: {
                                  nVRGrM4Oq: { y: (p?.y || 0) + 0 + 0 + 80 + 64 + 0 + 0 },
                                },
                                children: s(w, {
                                  height: 26,
                                  y: (p?.y || 0) + 0 + 0 + 96 + 64 + 0 + 0,
                                  children: s(R, {
                                    __framer__animate: { transition: W },
                                    __framer__animateOnce: !0,
                                    __framer__enter: U,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1540dj9-container`,
                                    nodeId: `YYIVV4lfU`,
                                    rendersWithMotion: !0,
                                    scopeId: `JuiSZL20W`,
                                    children: s(N, {
                                      ggTbrSuHk: `Products`,
                                      height: `100%`,
                                      id: `YYIVV4lfU`,
                                      layoutId: `YYIVV4lfU`,
                                      variant: G(`z6oSgdJxk`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              s(z, {
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
                                    children: `INGCO`,
                                  }),
                                }),
                                className: `framer-3fvlll`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          c(`div`, {
                            className: `framer-fgory5`,
                            "data-framer-name": `ClassesGallery`,
                            children: [
                              s(Z, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  s(i, {
                                    children: s(h, {
                                      links: [
                                        {
                                          href: { webPageId: `uzQd8vkbU` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `uzQd8vkbU` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(_, {
                                          breakpoint: y,
                                          overrides: {
                                            nVRGrM4Oq: {
                                              width: `max((min(${p?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (p?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 0,
                                            },
                                          },
                                          children: s(w, {
                                            height: 400,
                                            width: `max((min(${p?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (p?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 0,
                                            children: c(b, {
                                              className: `framer-1wbw8v6-container`,
                                              id: `1wbw8v6`,
                                              nodeId: `cSUqPGRPY`,
                                              scopeId: `JuiSZL20W`,
                                              children: [
                                                s(_, {
                                                  breakpoint: y,
                                                  overrides: { nVRGrM4Oq: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 5304,
                                                        pixelWidth: 7952,
                                                        src: `../../assets/images/iAqXP7d4ncOiOzc4r9s87VihDI.png?width=7952&height=5304`,
                                                        srcSet: `../../assets/images/iAqXP7d4ncOiOzc4r9s87VihDI.png 512w,../../assets/images/iAqXP7d4ncOiOzc4r9s87VihDI.png?scale-down-to=1024&width=7952&height=5304 1024w,../../assets/images/iAqXP7d4ncOiOzc4r9s87VihDI.png 2048w,../../assets/images/iAqXP7d4ncOiOzc4r9s87VihDI.png?scale-down-to=4096&width=7952&height=5304 4096w,../../assets/images/iAqXP7d4ncOiOzc4r9s87VihDI.png?width=7952&height=5304 7952w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `cSUqPGRPY`,
                                                    jTs_fuWrm: I({ overlay: e }),
                                                    JWP0bNV85: `Impact Wrench Machine`,
                                                    layoutId: `cSUqPGRPY`,
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
                                                        s(g, {
                                                          triggerId: `1wbw8v6`,
                                                          children: c(D, {
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
                                                                  className: m(T, `framer-1yhyqiy`),
                                                                  "data-framer-portal-id": `1wbw8v6`,
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
                                                                `GjUoGxo4l`
                                                              ),
                                                              s(l.div, {
                                                                className: m(T, `framer-1p2nff5`),
                                                                "data-framer-portal-id": `1wbw8v6`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-1c9shqj`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-s9glqy`,
                                                                      children: [
                                                                        s(E, {
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
                                                                          className: `framer-772y8g`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-192ag29`,
                                                                          onTap: L({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-9q6n5x`,
                                                                            layoutId: `zZmZc4V9D`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(x, {
                                                                      action: `https://api.framer.com/forms/v1/forms/187b978c-8230-448a-ac01-64cb406c3f05/submit`,
                                                                      className: `framer-7pwhys`,
                                                                      nodeId: `rLTjcvS9d`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-73o0py`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-181e9m6`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-1khr420`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-18wggws`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-1uibkqa`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-11w95x8`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1rp5n7g`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-1aomykb`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-kx3u0p`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1fpm3hq`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-ug5faf`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-qkgodb`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(w, {
                                                                              width: `277px`,
                                                                              children: s(b, {
                                                                                className: `framer-1s6llmu-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `cm2LURRWd`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `JuiSZL20W`,
                                                                                children: s(A, {
                                                                                  height: `100%`,
                                                                                  id: `cm2LURRWd`,
                                                                                  layoutId: `cm2LURRWd`,
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
                                    children: s(h, {
                                      links: [
                                        {
                                          href: { webPageId: `oYxy3zMr7` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `oYxy3zMr7` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(_, {
                                          breakpoint: y,
                                          overrides: {
                                            nVRGrM4Oq: {
                                              width: `max((min(${p?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (p?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 0,
                                            },
                                          },
                                          children: s(w, {
                                            height: 400,
                                            width: `max((min(${p?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (p?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 0,
                                            children: c(b, {
                                              className: `framer-1ek4sra-container`,
                                              id: `1ek4sra`,
                                              nodeId: `eO_VhwUHQ`,
                                              scopeId: `JuiSZL20W`,
                                              children: [
                                                s(_, {
                                                  breakpoint: y,
                                                  overrides: { nVRGrM4Oq: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 5304,
                                                        pixelWidth: 7952,
                                                        src: `../../assets/images/8l76QTcE70Gi34ToKWcKPUObso.png?width=7952&height=5304`,
                                                        srcSet: `../../assets/images/8l76QTcE70Gi34ToKWcKPUObso.png 512w,../../assets/images/8l76QTcE70Gi34ToKWcKPUObso.png?scale-down-to=1024&width=7952&height=5304 1024w,../../assets/images/8l76QTcE70Gi34ToKWcKPUObso.png 2048w,../../assets/images/8l76QTcE70Gi34ToKWcKPUObso.png?scale-down-to=4096&width=7952&height=5304 4096w,../../assets/images/8l76QTcE70Gi34ToKWcKPUObso.png?width=7952&height=5304 7952w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `eO_VhwUHQ`,
                                                    jTs_fuWrm: I({ overlay: e }),
                                                    JWP0bNV85: `Impact Drill Machine`,
                                                    layoutId: `eO_VhwUHQ`,
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
                                                        s(g, {
                                                          triggerId: `1ek4sra`,
                                                          children: c(D, {
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
                                                                  className: m(T, `framer-3241sf`),
                                                                  "data-framer-portal-id": `1ek4sra`,
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
                                                                `WzEsKiOUU`
                                                              ),
                                                              s(l.div, {
                                                                className: m(T, `framer-10sq6tr`),
                                                                "data-framer-portal-id": `1ek4sra`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-cn9yte`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-1wms01b`,
                                                                      children: [
                                                                        s(E, {
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
                                                                          className: `framer-pja4uw`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-1dm9x2w`,
                                                                          onTap: L({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-146hroj`,
                                                                            layoutId: `Hyxc5oLi1`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(x, {
                                                                      action: `https://api.framer.com/forms/v1/forms/c7db6c73-cd0a-48d0-9253-d2a62254ff37/submit`,
                                                                      className: `framer-1tlk14n`,
                                                                      nodeId: `zmzc0WhD0`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-e64zk4`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-92szvc`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-6l94nn`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-ztzamp`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-1nq8pyk`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-1o3zauh`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1nwj48s`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-c1r6lp`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-dpnffk`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1u7z0mk`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-1mhsf82`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-12god8r`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(w, {
                                                                              width: `277px`,
                                                                              children: s(b, {
                                                                                className: `framer-1hl8n7o-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `gLdUF3Qfo`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `JuiSZL20W`,
                                                                                children: s(A, {
                                                                                  height: `100%`,
                                                                                  id: `gLdUF3Qfo`,
                                                                                  layoutId: `gLdUF3Qfo`,
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
                                    children: s(h, {
                                      links: [
                                        {
                                          href: { webPageId: `AAc_ysl5G` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `AAc_ysl5G` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(_, {
                                          breakpoint: y,
                                          overrides: {
                                            nVRGrM4Oq: {
                                              width: `max((min(${p?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (p?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 416,
                                            },
                                          },
                                          children: s(w, {
                                            height: 400,
                                            width: `max((min(${p?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (p?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 0,
                                            children: c(b, {
                                              className: `framer-1x3etqz-container`,
                                              id: `1x3etqz`,
                                              nodeId: `pDoC6Ksoi`,
                                              scopeId: `JuiSZL20W`,
                                              children: [
                                                s(_, {
                                                  breakpoint: y,
                                                  overrides: { nVRGrM4Oq: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 543,
                                                        pixelWidth: 604,
                                                        src: `../../assets/images/I6Db1Zy8sGGm5iQAH7fQamHxrg.png`,
                                                        srcSet: `../../assets/images/I6Db1Zy8sGGm5iQAH7fQamHxrg.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/I6Db1Zy8sGGm5iQAH7fQamHxrg.png 604w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `pDoC6Ksoi`,
                                                    jTs_fuWrm: I({ overlay: e }),
                                                    JWP0bNV85: `Heat Gun`,
                                                    layoutId: `pDoC6Ksoi`,
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
                                                        s(g, {
                                                          triggerId: `1x3etqz`,
                                                          children: c(D, {
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
                                                                  className: m(T, `framer-1fgkd78`),
                                                                  "data-framer-portal-id": `1x3etqz`,
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
                                                                `GcCVz0Bqc`
                                                              ),
                                                              s(l.div, {
                                                                className: m(T, `framer-8pe2z8`),
                                                                "data-framer-portal-id": `1x3etqz`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-t9qpdv`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-gt6c43`,
                                                                      children: [
                                                                        s(E, {
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
                                                                          className: `framer-1g5385n`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-1lk5h0c`,
                                                                          onTap: L({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-1fnp5w5`,
                                                                            layoutId: `ufie1FvCe`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(x, {
                                                                      action: `https://api.framer.com/forms/v1/forms/07f06d15-8fc1-4929-b4d9-616d5736df4f/submit`,
                                                                      className: `framer-5943gd`,
                                                                      nodeId: `S6_gafuHK`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-lpheuy`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-14rhyo1`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-18gvmwu`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-qtu5ir`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-1a2prs2`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-fjhk3i`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1yx9zmf`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-tzlmru`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-1ibx9d6`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-blon9j`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-1c61lqm`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-64yqjp`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(w, {
                                                                              width: `277px`,
                                                                              children: s(b, {
                                                                                className: `framer-14hy5eb-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `ABscybVNT`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `JuiSZL20W`,
                                                                                children: s(A, {
                                                                                  height: `100%`,
                                                                                  id: `ABscybVNT`,
                                                                                  layoutId: `ABscybVNT`,
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
                                    children: s(h, {
                                      links: [
                                        {
                                          href: { webPageId: `RsOmwfylR` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `RsOmwfylR` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(_, {
                                          breakpoint: y,
                                          overrides: {
                                            nVRGrM4Oq: {
                                              width: `max((min(${p?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (p?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 416,
                                            },
                                          },
                                          children: s(w, {
                                            height: 400,
                                            width: `max((min(${p?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (p?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 416,
                                            children: c(b, {
                                              className: `framer-ilpodf-container`,
                                              id: `ilpodf`,
                                              nodeId: `a6CCo_DHN`,
                                              scopeId: `JuiSZL20W`,
                                              children: [
                                                s(_, {
                                                  breakpoint: y,
                                                  overrides: { nVRGrM4Oq: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 543,
                                                        pixelWidth: 604,
                                                        src: `../../assets/images/QlhJjQuea2n2VzR2CxjCRXCdI.png`,
                                                        srcSet: `../../assets/images/QlhJjQuea2n2VzR2CxjCRXCdI.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/QlhJjQuea2n2VzR2CxjCRXCdI.png 604w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `a6CCo_DHN`,
                                                    jTs_fuWrm: I({ overlay: e }),
                                                    JWP0bNV85: `Blower `,
                                                    layoutId: `a6CCo_DHN`,
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
                                                        s(g, {
                                                          triggerId: `ilpodf`,
                                                          children: c(D, {
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
                                                                  className: m(T, `framer-1jwfmbw`),
                                                                  "data-framer-portal-id": `ilpodf`,
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
                                                                `yCW6epnPS`
                                                              ),
                                                              s(l.div, {
                                                                className: m(T, `framer-pmgcw1`),
                                                                "data-framer-portal-id": `ilpodf`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-14brei0`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-14hotq8`,
                                                                      children: [
                                                                        s(E, {
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
                                                                          className: `framer-1nff6g3`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-f518kl`,
                                                                          onTap: L({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-28lnrx`,
                                                                            layoutId: `FyJ0Yx1b4`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(x, {
                                                                      action: `https://api.framer.com/forms/v1/forms/433ea379-7ee7-4bb7-9e49-00f7464beed0/submit`,
                                                                      className: `framer-topd8r`,
                                                                      nodeId: `XdFfaCOjP`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-x5jcsu`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-1rgim38`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-cgqf7f`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-5c5c82`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-3anflm`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-zs7a4r`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1mc6t4k`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-87s2eb`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-yuyky2`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-bnfdc2`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-1yt263o`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-arnuxo`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(w, {
                                                                              width: `277px`,
                                                                              children: s(b, {
                                                                                className: `framer-sqk36w-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `IMkASoTTZ`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `JuiSZL20W`,
                                                                                children: s(A, {
                                                                                  height: `100%`,
                                                                                  id: `IMkASoTTZ`,
                                                                                  layoutId: `IMkASoTTZ`,
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
                                    children: s(h, {
                                      links: [
                                        {
                                          href: { webPageId: `jVzOZkO3m` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `jVzOZkO3m` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(_, {
                                          breakpoint: y,
                                          overrides: {
                                            nVRGrM4Oq: {
                                              width: `max((min(${p?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (p?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 832,
                                            },
                                          },
                                          children: s(w, {
                                            height: 400,
                                            width: `max((min(${p?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (p?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 416,
                                            children: c(b, {
                                              className: `framer-8gmf8v-container`,
                                              id: `8gmf8v`,
                                              nodeId: `dGh5VpcCd`,
                                              scopeId: `JuiSZL20W`,
                                              children: [
                                                s(_, {
                                                  breakpoint: y,
                                                  overrides: { nVRGrM4Oq: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 543,
                                                        pixelWidth: 604,
                                                        src: `../../assets/images/GQBSmKGePnRFyYqkQ1oPVzeFE.png`,
                                                        srcSet: `../../assets/images/GQBSmKGePnRFyYqkQ1oPVzeFE.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/GQBSmKGePnRFyYqkQ1oPVzeFE.png 604w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `dGh5VpcCd`,
                                                    jTs_fuWrm: I({ overlay: e }),
                                                    JWP0bNV85: `Angle Grinder`,
                                                    layoutId: `dGh5VpcCd`,
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
                                                        s(g, {
                                                          triggerId: `8gmf8v`,
                                                          children: c(D, {
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
                                                                  className: m(T, `framer-1oadyzk`),
                                                                  "data-framer-portal-id": `8gmf8v`,
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
                                                                `yGH06hbfb`
                                                              ),
                                                              s(l.div, {
                                                                className: m(T, `framer-19eprhe`),
                                                                "data-framer-portal-id": `8gmf8v`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-10dfg34`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-1eqi80p`,
                                                                      children: [
                                                                        s(E, {
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
                                                                          className: `framer-6kftne`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-1jo1kje`,
                                                                          onTap: L({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-4lkp5l`,
                                                                            layoutId: `xZ6pyL3vV`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(x, {
                                                                      action: `https://api.framer.com/forms/v1/forms/f01ac28e-950a-41e1-8c9d-7cdbcf42f93f/submit`,
                                                                      className: `framer-1gk7rzi`,
                                                                      nodeId: `mAugjMc7f`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-r9er04`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-e3ii88`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-1ht39xp`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1w4pqxn`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-ldebqz`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-1akm132`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1d8he0d`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-16o61oj`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-11mb6kh`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-103hynq`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-1283ol3`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-dfz5ev`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(w, {
                                                                              width: `277px`,
                                                                              children: s(b, {
                                                                                className: `framer-1851qyw-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `h2yxzvLmQ`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `JuiSZL20W`,
                                                                                children: s(A, {
                                                                                  height: `100%`,
                                                                                  id: `h2yxzvLmQ`,
                                                                                  layoutId: `h2yxzvLmQ`,
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
                                    children: s(h, {
                                      links: [
                                        {
                                          href: { webPageId: `AIP6acyMt` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `AIP6acyMt` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(_, {
                                          breakpoint: y,
                                          overrides: {
                                            nVRGrM4Oq: {
                                              width: `max((min(${p?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                              y: (p?.y || 0) + 0 + 0 + 80 + 192.4 + 0 + 832,
                                            },
                                          },
                                          children: s(w, {
                                            height: 400,
                                            width: `max((min(${p?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                            y: (p?.y || 0) + 0 + 0 + 96 + 192.4 + 0 + 416,
                                            children: c(b, {
                                              className: `framer-y44stj-container`,
                                              id: `y44stj`,
                                              nodeId: `A8zwgZ9NZ`,
                                              scopeId: `JuiSZL20W`,
                                              children: [
                                                s(_, {
                                                  breakpoint: y,
                                                  overrides: { nVRGrM4Oq: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 543,
                                                        pixelWidth: 604,
                                                        src: `../../assets/images/sDwWv48fhBCTu8ZSHfhoDfdDEMg.png`,
                                                        srcSet: `../../assets/images/sDwWv48fhBCTu8ZSHfhoDfdDEMg.png?scale-down-to=512&width=604&height=543 512w,../../assets/images/sDwWv48fhBCTu8ZSHfhoDfdDEMg.png 604w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `A8zwgZ9NZ`,
                                                    jTs_fuWrm: I({ overlay: e }),
                                                    JWP0bNV85: `Air Compressor`,
                                                    layoutId: `A8zwgZ9NZ`,
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
                                                        s(g, {
                                                          triggerId: `y44stj`,
                                                          children: c(D, {
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
                                                                  className: m(T, `framer-j1n559`),
                                                                  "data-framer-portal-id": `y44stj`,
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
                                                                `L7SQ4IvII`
                                                              ),
                                                              s(l.div, {
                                                                className: m(T, `framer-79rhah`),
                                                                "data-framer-portal-id": `y44stj`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-1xtv34z`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-18fp9j7`,
                                                                      children: [
                                                                        s(E, {
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
                                                                          className: `framer-1o6xl53`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-zif05y`,
                                                                          onTap: L({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-kn1vb1`,
                                                                            layoutId: `e1idOSu_p`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(x, {
                                                                      action: `https://api.framer.com/forms/v1/forms/c97f1c0b-00d9-44f9-9777-dc5724d9ed63/submit`,
                                                                      className: `framer-woq9ry`,
                                                                      nodeId: `vA0ih0nFH`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-1f4uf9q`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-17szddy`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-1krfxmz`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-r2ui6i`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-blwem`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-ej87wu`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-x4r4to`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-1unysys`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-1rc75vz`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-12102fm`,
                                                                              children: [
                                                                                s(E, {
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
                                                                                  className: `framer-1mcsxhh`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(C, {
                                                                                  className: `framer-1fmcxan`,
                                                                                  inputName: `Make, Model & Size`,
                                                                                  placeholder: ``,
                                                                                  required: !0,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            s(w, {
                                                                              width: `277px`,
                                                                              children: s(b, {
                                                                                className: `framer-1muaprw-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `KjhnY85_x`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `JuiSZL20W`,
                                                                                children: s(A, {
                                                                                  height: `100%`,
                                                                                  id: `KjhnY85_x`,
                                                                                  layoutId: `KjhnY85_x`,
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
        `.framer-yAICj.framer-98n549, .framer-yAICj .framer-98n549 { display: block; }`,
        `.framer-yAICj.framer-1b4hic8 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-yAICj .framer-91vxwi { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 2768px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 390px; }`,
        `.framer-yAICj .framer-ccey4e { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 80px 16px 80px 16px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-yAICj .framer-ai4cpb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 24px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 24px; }`,
        `.framer-yAICj .framer-1adqswf, .framer-yAICj .framer-eo1ibl { --1335ju: 2; --18mrqx2: #000000; --3it368: 1; aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 24px; }`,
        `.framer-yAICj .framer-1vt7es1, .framer-yAICj .framer-1bxto5f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-yAICj .framer-c8zj9z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-yAICj .framer-1m1s9am { --1335ju: 2; --18mrqx2: #000000; --3it368: 1; flex: none; height: auto; position: relative; width: 24px; }`,
        `.framer-yAICj .framer-shaakm-container, .framer-yAICj .framer-1540dj9-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-yAICj .framer-17g3jmj, .framer-yAICj .framer-3fvlll { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-yAICj .framer-pzk74k { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-yAICj .framer-1x72h8l-container, .framer-yAICj .framer-1h339t4-container, .framer-yAICj .framer-18n5iqu-container, .framer-yAICj .framer-1vxvvj8-container, .framer-yAICj .framer-1g8owy5-container, .framer-yAICj .framer-g0964q-container, .framer-yAICj .framer-1wbw8v6-container, .framer-yAICj .framer-1ek4sra-container, .framer-yAICj .framer-1x3etqz-container, .framer-yAICj .framer-ilpodf-container, .framer-yAICj .framer-8gmf8v-container, .framer-yAICj .framer-y44stj-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-yAICj.framer-zqp31l, .framer-yAICj.framer-1vbzy3y, .framer-yAICj.framer-1t5y0ck, .framer-yAICj.framer-vuixlf, .framer-yAICj.framer-nh4x1g, .framer-yAICj.framer-4rj1wu, .framer-yAICj.framer-1yhyqiy, .framer-yAICj.framer-3241sf, .framer-yAICj.framer-1fgkd78, .framer-yAICj.framer-1jwfmbw, .framer-yAICj.framer-1oadyzk, .framer-yAICj.framer-j1n559 { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-yAICj.framer-1lra66p, .framer-yAICj.framer-9lz4ys, .framer-yAICj.framer-10yk015, .framer-yAICj.framer-1jwynsr, .framer-yAICj.framer-ey4x4r, .framer-yAICj.framer-117gv7x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 60px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-yAICj .framer-m4plf4, .framer-yAICj .framer-n8xonx, .framer-yAICj .framer-1vnqjwc, .framer-yAICj .framer-1dwcob2, .framer-yAICj .framer-nmsmw1, .framer-yAICj .framer-1achecs { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 300px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-yAICj .framer-8de0gc, .framer-yAICj .framer-1ifbse2, .framer-yAICj .framer-4f93nd, .framer-yAICj .framer-kwgc1v, .framer-yAICj .framer-9plrqw, .framer-yAICj .framer-14x37f1, .framer-yAICj .framer-s9glqy, .framer-yAICj .framer-1wms01b, .framer-yAICj .framer-gt6c43, .framer-yAICj .framer-14hotq8, .framer-yAICj .framer-1eqi80p, .framer-yAICj .framer-18fp9j7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-yAICj .framer-14jaeyh, .framer-yAICj .framer-vbi5m6, .framer-yAICj .framer-1fwdo5k, .framer-yAICj .framer-zilvlu, .framer-yAICj .framer-1mu897x, .framer-yAICj .framer-1pd5rm1, .framer-yAICj .framer-772y8g, .framer-yAICj .framer-pja4uw, .framer-yAICj .framer-1g5385n, .framer-yAICj .framer-1nff6g3, .framer-yAICj .framer-6kftne, .framer-yAICj .framer-1o6xl53 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-yAICj .framer-1naeuhg, .framer-yAICj .framer-pwl1nn, .framer-yAICj .framer-3imxxu, .framer-yAICj .framer-17davaj, .framer-yAICj .framer-z9yj7q, .framer-yAICj .framer-u478b3, .framer-yAICj .framer-192ag29, .framer-yAICj .framer-1dm9x2w, .framer-yAICj .framer-1lk5h0c, .framer-yAICj .framer-f518kl, .framer-yAICj .framer-1jo1kje, .framer-yAICj .framer-zif05y { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-yAICj .framer-x61wk, .framer-yAICj .framer-8h1e5m, .framer-yAICj .framer-1x2yvk4, .framer-yAICj .framer-diizmk, .framer-yAICj .framer-ue41dk, .framer-yAICj .framer-vztjc5, .framer-yAICj .framer-9q6n5x, .framer-yAICj .framer-146hroj, .framer-yAICj .framer-1fnp5w5, .framer-yAICj .framer-28lnrx, .framer-yAICj .framer-4lkp5l, .framer-yAICj .framer-kn1vb1 { --43q7um: #000000; flex: none; height: auto; position: relative; width: 24px; }`,
        `.framer-yAICj .framer-rf6rvk, .framer-yAICj .framer-1pcbcwd, .framer-yAICj .framer-1ysxzlv, .framer-yAICj .framer-b42ut8, .framer-yAICj .framer-18h4x8n, .framer-yAICj .framer-jzdgjv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 261px; }`,
        `.framer-yAICj .framer-s2p5cb, .framer-yAICj .framer-1tiu1az, .framer-yAICj .framer-oip2is, .framer-yAICj .framer-13fs7ea, .framer-yAICj .framer-1lggp3l, .framer-yAICj .framer-jrso87, .framer-yAICj .framer-1wsewwv, .framer-yAICj .framer-h1929y, .framer-yAICj .framer-qgwgba, .framer-yAICj .framer-9xm8vp, .framer-yAICj .framer-1u77gyi, .framer-yAICj .framer-vulcip, .framer-yAICj .framer-dyeakz, .framer-yAICj .framer-1uh5l8w, .framer-yAICj .framer-15flq1y, .framer-yAICj .framer-rxk6yn, .framer-yAICj .framer-tdnp0d, .framer-yAICj .framer-1mey3ga, .framer-yAICj .framer-1u5gs1s, .framer-yAICj .framer-3oqk1k, .framer-yAICj .framer-gus7tt, .framer-yAICj .framer-2dn42g, .framer-yAICj .framer-1hqerl9, .framer-yAICj .framer-1l0k952, .framer-yAICj .framer-73o0py, .framer-yAICj .framer-18wggws, .framer-yAICj .framer-1rp5n7g, .framer-yAICj .framer-1fpm3hq, .framer-yAICj .framer-e64zk4, .framer-yAICj .framer-ztzamp, .framer-yAICj .framer-1nwj48s, .framer-yAICj .framer-1u7z0mk, .framer-yAICj .framer-lpheuy, .framer-yAICj .framer-qtu5ir, .framer-yAICj .framer-1yx9zmf, .framer-yAICj .framer-blon9j, .framer-yAICj .framer-x5jcsu, .framer-yAICj .framer-5c5c82, .framer-yAICj .framer-1mc6t4k, .framer-yAICj .framer-bnfdc2, .framer-yAICj .framer-r9er04, .framer-yAICj .framer-1w4pqxn, .framer-yAICj .framer-1d8he0d, .framer-yAICj .framer-103hynq, .framer-yAICj .framer-1f4uf9q, .framer-yAICj .framer-r2ui6i, .framer-yAICj .framer-x4r4to, .framer-yAICj .framer-12102fm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-yAICj .framer-m7v7ak, .framer-yAICj .framer-1jbe05h, .framer-yAICj .framer-1mm51n, .framer-yAICj .framer-1bhi8t1, .framer-yAICj .framer-g6k7i0, .framer-yAICj .framer-4zt7db, .framer-yAICj .framer-1dcc6n0, .framer-yAICj .framer-583os7, .framer-yAICj .framer-112z2yk, .framer-yAICj .framer-1jp6z8x, .framer-yAICj .framer-psidn3, .framer-yAICj .framer-fykrdj, .framer-yAICj .framer-rfryad, .framer-yAICj .framer-53prs4, .framer-yAICj .framer-17oa864, .framer-yAICj .framer-lcngif, .framer-yAICj .framer-1i0eqpg, .framer-yAICj .framer-9ndjhc, .framer-yAICj .framer-4jy6u0, .framer-yAICj .framer-74qh3t, .framer-yAICj .framer-4dquqc, .framer-yAICj .framer-1rgo491, .framer-yAICj .framer-tr923g, .framer-yAICj .framer-1jbh2mv, .framer-yAICj .framer-181e9m6, .framer-yAICj .framer-1uibkqa, .framer-yAICj .framer-1aomykb, .framer-yAICj .framer-ug5faf, .framer-yAICj .framer-92szvc, .framer-yAICj .framer-1nq8pyk, .framer-yAICj .framer-c1r6lp, .framer-yAICj .framer-1mhsf82, .framer-yAICj .framer-14rhyo1, .framer-yAICj .framer-1a2prs2, .framer-yAICj .framer-tzlmru, .framer-yAICj .framer-1c61lqm, .framer-yAICj .framer-1rgim38, .framer-yAICj .framer-3anflm, .framer-yAICj .framer-87s2eb, .framer-yAICj .framer-1yt263o, .framer-yAICj .framer-e3ii88, .framer-yAICj .framer-ldebqz, .framer-yAICj .framer-16o61oj, .framer-yAICj .framer-1283ol3, .framer-yAICj .framer-17szddy, .framer-yAICj .framer-blwem, .framer-yAICj .framer-1unysys, .framer-yAICj .framer-1mcsxhh { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-yAICj .framer-ngw7b8, .framer-yAICj .framer-10yqwcz, .framer-yAICj .framer-mpslg, .framer-yAICj .framer-11k2ns3, .framer-yAICj .framer-1d3njpn, .framer-yAICj .framer-fy9erf, .framer-yAICj .framer-1tm9snn, .framer-yAICj .framer-1wfei93, .framer-yAICj .framer-1lxblap, .framer-yAICj .framer-17hq9ey, .framer-yAICj .framer-fz0jpt, .framer-yAICj .framer-qv3yvw, .framer-yAICj .framer-w72w5z, .framer-yAICj .framer-12z09v6, .framer-yAICj .framer-fyfxq6, .framer-yAICj .framer-lxedo1, .framer-yAICj .framer-4gek0x, .framer-yAICj .framer-10tsxj, .framer-yAICj .framer-5jzuta, .framer-yAICj .framer-tvndqd, .framer-yAICj .framer-1qgv7a1, .framer-yAICj .framer-1680u98, .framer-yAICj .framer-152dx90, .framer-yAICj .framer-5ft10b, .framer-yAICj .framer-1khr420, .framer-yAICj .framer-11w95x8, .framer-yAICj .framer-kx3u0p, .framer-yAICj .framer-qkgodb, .framer-yAICj .framer-6l94nn, .framer-yAICj .framer-1o3zauh, .framer-yAICj .framer-dpnffk, .framer-yAICj .framer-12god8r, .framer-yAICj .framer-18gvmwu, .framer-yAICj .framer-fjhk3i, .framer-yAICj .framer-1ibx9d6, .framer-yAICj .framer-64yqjp, .framer-yAICj .framer-cgqf7f, .framer-yAICj .framer-zs7a4r, .framer-yAICj .framer-yuyky2, .framer-yAICj .framer-arnuxo, .framer-yAICj .framer-1ht39xp, .framer-yAICj .framer-1akm132, .framer-yAICj .framer-11mb6kh, .framer-yAICj .framer-dfz5ev, .framer-yAICj .framer-1krfxmz, .framer-yAICj .framer-ej87wu, .framer-yAICj .framer-1rc75vz, .framer-yAICj .framer-1fmcxan { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-yAICj .framer-2pc6kd-container, .framer-yAICj .framer-jebtrx-container, .framer-yAICj .framer-1a04qxg-container, .framer-yAICj .framer-1tqywpx-container, .framer-yAICj .framer-1t3too4-container, .framer-yAICj .framer-1i7g61p-container, .framer-yAICj .framer-1s6llmu-container, .framer-yAICj .framer-1hl8n7o-container, .framer-yAICj .framer-14hy5eb-container, .framer-yAICj .framer-sqk36w-container, .framer-yAICj .framer-1851qyw-container, .framer-yAICj .framer-1muaprw-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-yAICj .framer-ruzxq5 { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 96px 24px 96px 24px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-yAICj .framer-ii066p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 800px; }`,
        `.framer-yAICj .framer-1xpssg7 { --1335ju: 1.7; --18mrqx2: #000000; --3it368: 1; flex: none; height: auto; position: relative; width: 24px; }`,
        `.framer-yAICj .framer-fgory5 { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-yAICj.framer-1p2nff5, .framer-yAICj.framer-10sq6tr, .framer-yAICj.framer-8pe2z8, .framer-yAICj.framer-pmgcw1, .framer-yAICj.framer-19eprhe, .framer-yAICj.framer-79rhah { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-yAICj .framer-1c9shqj, .framer-yAICj .framer-cn9yte, .framer-yAICj .framer-t9qpdv, .framer-yAICj .framer-14brei0, .framer-yAICj .framer-10dfg34, .framer-yAICj .framer-1xtv34z { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-yAICj .framer-7pwhys, .framer-yAICj .framer-1tlk14n, .framer-yAICj .framer-5943gd, .framer-yAICj .framer-topd8r, .framer-yAICj .framer-1gk7rzi, .framer-yAICj .framer-woq9ry { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        ...Se,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-yAICj.framer-1b4hic8 { width: 810px; } .framer-yAICj .framer-ruzxq5 { padding: 80px 24px 80px 24px; } .framer-yAICj .framer-fgory5 { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-yAICj .framer-1c9shqj, .framer-yAICj .framer-cn9yte, .framer-yAICj .framer-t9qpdv, .framer-yAICj .framer-14brei0, .framer-yAICj .framer-10dfg34, .framer-yAICj .framer-1xtv34z { height: min-content; width: min-content; } .framer-yAICj .framer-s9glqy, .framer-yAICj .framer-1wms01b, .framer-yAICj .framer-gt6c43, .framer-yAICj .framer-14hotq8, .framer-yAICj .framer-1eqi80p, .framer-yAICj .framer-18fp9j7 { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-yAICj.framer-1b4hic8 { width: 390px; }}`,
      ],
      `framer-yAICj`
    )),
    ($.displayName = `Bosch`),
    ($.defaultProps = { height: 1609, width: 1200 }),
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
        ...I,
        ...L,
        ...B,
        ...V,
        ...ke,
        ...se(Ce),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => le([() => f(N, {}, t), () => f(F, {}, t), () => f(A, {}, t)], t),
    }),
    (Le = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerJuiSZL20W`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerContractVersion: `1`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerScrollSections: `{"gsm409mS_":{"pattern":":gsm409mS_","name":"classes"},"OX5FoC4Da":{"pattern":":OX5FoC4Da","name":"classes"}}`,
            framerIntrinsicHeight: `1609`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"nVRGrM4Oq":{"layout":["fixed","fixed"]},"GLvce3doQ":{"layout":["fixed","fixed"]}}}`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Le as __FramerMetadata__, $ as default, je as queryParamNames };
//# sourceMappingURL=40djU4Mde9K-PHSB5yqCpNowIK7Sq3IuQD2MpMWix8E.DGgTwKcJ.mjs.map
