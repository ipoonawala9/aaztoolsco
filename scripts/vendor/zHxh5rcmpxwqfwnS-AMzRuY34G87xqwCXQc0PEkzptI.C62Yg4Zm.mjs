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
  o as c,
  s as l,
  u,
  v as te,
  w as d,
} from "./react.N6WDMTqS.mjs";
import { S as f, a as ne, n as p, r as re, t as m } from "./motion.CXXzZ97F.mjs";
import {
  I as h,
  L as g,
  O as _,
  U as v,
  at as ie,
  b as y,
  c as b,
  ct as ae,
  d as x,
  dt as oe,
  g as S,
  ht as C,
  it as se,
  lt as ce,
  mt as le,
  n as w,
  nt as ue,
  o as T,
  ot as E,
  p as de,
  s as D,
  st as fe,
  t as O,
  tt as pe,
  ut as me,
  w as k,
  x as A,
  y as j,
} from "./framer.w0XhpZTx.mjs";
import { i as he, n as M, r as ge, t as _e } from "./nl385Jssa.BV16yEHR.mjs";
import { a as N, c as P, i as F, o as I, r as L, s as R } from "./shared.DPOhhryJ.mjs";
import { i as z, r as B } from "./cQxXulDZM.DXXtl8ZX.mjs";
import { n as V, t as H } from "./jNXHc0ip8.Bnggf-hw.mjs";
import ve, { t as U } from "./GCVQweiq6prAhtWqF21LdFAFqJ7aHw-I9ADcdLY8ujo.D2qMQ7c2.mjs";
var W, G, K, ye, be, xe, Se, Ce, we, Te, Ee, q, De, Oe, J, Y, X, Z, Q, ke, Ae, je, $, Me;
e(() => {
  (l(),
    v(),
    m(),
    d(),
    c(),
    I(),
    P(),
    F(),
    z(),
    V(),
    he(),
    U(),
    (W = h(R)),
    (G = h(B)),
    (K = C(w)),
    (ye = C(A)),
    (be = h(H)),
    (xe = h(N)),
    (Se = h(L)),
    (Ce = {
      c8Ug5IVxO: `(min-width: 810px) and (max-width: 1199.98px)`,
      Gu032CfIU: `(min-width: 1200px)`,
      HOpW4Jbxe: `(max-width: 809.98px)`,
    }),
    (we = `framer-Iy931`),
    (Te = {
      c8Ug5IVxO: `framer-v-1vynk0e`,
      Gu032CfIU: `framer-v-12lqiqr`,
      HOpW4Jbxe: `framer-v-19yva8a`,
    }),
    (Ee = (e, t, n) => (e && t ? `position` : n)),
    (q = {
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
    (De = { delay: 0, duration: 1, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` }),
    (Oe = { delay: 0.2, duration: 1, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` }),
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
      let [i, a] = ce({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (ke = ({ value: e }) =>
      E()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ae = { Desktop: `Gu032CfIU`, Phone: `HOpW4Jbxe`, Tablet: `c8Ug5IVxO` }),
    (je = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Ae[r.variant] ?? r.variant ?? `Gu032CfIU`,
    })),
    ($ = le(
      a(function (e, a) {
        let c = n(null),
          l = a ?? c,
          d = te(),
          { activeLocale: m, setLocale: h } = fe(),
          g = ue(),
          { style: v, className: C, layoutId: ce, variant: le, ...E } = je(e);
        ae(ee(() => ve({}, m), [m]));
        let [k, he] = ie(le, Ce, !1),
          { activeVariantCallback: M, delay: ge } = pe(void 0),
          P = ({ overlay: e }) =>
            M(async (...t) => {
              e.toggle();
            }),
          F = ({ overlay: e }) =>
            M(async (...t) => {
              e.hide();
            }),
          I = _(we, _e),
          z = t(b)?.isLayoutTemplate,
          V = !!t(ne)?.transition?.layout,
          U = Ee(z, V),
          W = me(`uXBPN8BUD`),
          G = n(null);
        return (
          oe(),
          se({}),
          s(b.Provider, {
            value: { primaryVariantId: `Gu032CfIU`, variantClassNames: Te },
            children: u(re, {
              id: ce ?? d,
              children: [
                s(ke, { value: `html body { background: rgb(255, 255, 255); }` }),
                s(f.div, {
                  ...E,
                  className: _(I, `framer-12lqiqr`, C),
                  ref: l,
                  style: { ...v },
                  children: u(f.section, {
                    className: `framer-bm4rlr`,
                    "data-framer-name": `Classes`,
                    id: W,
                    layout: U,
                    ref: G,
                    children: [
                      u(`div`, {
                        className: `framer-tog1zg`,
                        "data-framer-name": `Text`,
                        children: [
                          s(de, {
                            href: { webPageId: `xidqw88KX` },
                            motionChild: !0,
                            nodeId: `Ci_xxM1mM`,
                            openInNewTab: !1,
                            scopeId: `fRICmNncB`,
                            children: s(f.a, {
                              className: `framer-wjadb6 framer-peipon`,
                              children: s(de, {
                                href: { webPageId: `AttXBZoeD` },
                                motionChild: !0,
                                nodeId: `h1S6xWcXG`,
                                openInNewTab: !1,
                                scopeId: `fRICmNncB`,
                                children: s(f.a, {
                                  className: `framer-1fpyqud framer-peipon`,
                                  children: s(R, {
                                    animated: !1,
                                    BKVe8Pgvw: !0,
                                    className: `framer-hsc3wa`,
                                    fICyAUQY1: !0,
                                    layoutId: `eI4YRvhbd`,
                                    lKf_CQTz5: !0,
                                  }),
                                }),
                              }),
                            }),
                          }),
                          s(S, {
                            breakpoint: k,
                            overrides: {
                              c8Ug5IVxO: { y: (g?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
                              HOpW4Jbxe: { y: (g?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
                            },
                            children: s(O, {
                              height: 26,
                              y: (g?.y || 0) + 0 + 0 + 96 + 0 + 0 + 36,
                              children: s(K, {
                                __framer__animate: { transition: De },
                                __framer__animateOnce: !0,
                                __framer__enter: q,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-zilzg2-container`,
                                nodeId: `dWUEGFehi`,
                                rendersWithMotion: !0,
                                scopeId: `fRICmNncB`,
                                children: s(B, {
                                  ggTbrSuHk: `Fasteners & Safety items`,
                                  height: `100%`,
                                  id: `dWUEGFehi`,
                                  layoutId: `dWUEGFehi`,
                                  variant: `z6oSgdJxk`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          s(ye, {
                            __framer__animate: { transition: Oe },
                            __framer__animateOnce: !0,
                            __framer__enter: q,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: s(r, {
                              children: s(`h3`, {
                                className: `framer-styles-preset-1d7ew99`,
                                "data-styles-preset": `nl385Jssa`,
                                children: `Fasteners`,
                              }),
                            }),
                            className: `framer-1f38980`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      u(`div`, {
                        className: `framer-18hl125`,
                        "data-framer-name": `ClassesGallery`,
                        children: [
                          s(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              s(i, {
                                children: s(y, {
                                  links: [
                                    {
                                      href: { webPageId: `tVmfkEp04` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `tVmfkEp04` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `tVmfkEp04` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    s(S, {
                                      breakpoint: k,
                                      overrides: {
                                        c8Ug5IVxO: {
                                          width: `max((min(${g?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 0,
                                        },
                                        HOpW4Jbxe: {
                                          width: `max(min(${g?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 0,
                                        },
                                      },
                                      children: s(O, {
                                        height: 400,
                                        width: `max((min(${g?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (g?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 0,
                                        children: u(w, {
                                          className: `framer-1n3uomx-container`,
                                          id: `1n3uomx`,
                                          nodeId: `ZeTFssnt5`,
                                          scopeId: `fRICmNncB`,
                                          children: [
                                            s(S, {
                                              breakpoint: k,
                                              overrides: {
                                                c8Ug5IVxO: { oSlFkYxO1: t[1] },
                                                HOpW4Jbxe: { oSlFkYxO1: t[2] },
                                              },
                                              children: s(H, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 450,
                                                    pixelWidth: 447,
                                                    src: `../../assets/images/dDbxk3LOS6CIlD9c2BFywpoL4kQ.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `ZeTFssnt5`,
                                                jTs_fuWrm: P({ overlay: e }),
                                                JWP0bNV85: `Bullet Fastener`,
                                                layoutId: `ZeTFssnt5`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            s(p, {
                                              children:
                                                e.visible &&
                                                s(i, {
                                                  children: o(
                                                    s(x, {
                                                      triggerId: `1n3uomx`,
                                                      children: u(j, {
                                                        children: [
                                                          s(
                                                            f.div,
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
                                                              className: _(I, `framer-vqjxaf`),
                                                              "data-framer-portal-id": `1n3uomx`,
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
                                                            `HWDabr9NN`
                                                          ),
                                                          s(f.div, {
                                                            className: _(I, `framer-1vh1kqa`),
                                                            "data-framer-portal-id": `1n3uomx`,
                                                            transformTemplate: Y,
                                                            children: u(f.div, {
                                                              className: `framer-1p98bxg`,
                                                              children: [
                                                                u(f.div, {
                                                                  className: `framer-1ixax77`,
                                                                  children: [
                                                                    s(A, {
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
                                                                      className: `framer-1umu0uq`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    s(f.div, {
                                                                      className: `framer-mdpl8e`,
                                                                      onTap: F({ overlay: e }),
                                                                      children: s(N, {
                                                                        animated: !1,
                                                                        className: `framer-zyuld8`,
                                                                        layoutId: `gpAiPKH4j`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                s(T, {
                                                                  action: `https://api.framer.com/forms/v1/forms/03e86c7f-121a-4018-936f-51d41111180e/submit`,
                                                                  className: `framer-1ds56h`,
                                                                  nodeId: `MCZSdFDz8`,
                                                                  children: (e) =>
                                                                    u(i, {
                                                                      children: [
                                                                        u(f.label, {
                                                                          className: `framer-tlik35`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Email`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1ruejpt`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-f40ni`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-1u0xqlz`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Mobile number`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-p8jwhw`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-b0srhg`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-kubod8`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Product Name`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1jvwnc0`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-148glh`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-12xqm01`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Make, Model & Size`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-13w22nr`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-168p6d2`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        s(S, {
                                                                          breakpoint: k,
                                                                          overrides: {
                                                                            HOpW4Jbxe: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: s(O, {
                                                                            width: `277px`,
                                                                            children: s(w, {
                                                                              className: `framer-lbm4eo-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `NmH2r0dM3`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `fRICmNncB`,
                                                                              children: s(L, {
                                                                                height: `100%`,
                                                                                id: `NmH2r0dM3`,
                                                                                layoutId: `NmH2r0dM3`,
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
                          s(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              s(i, {
                                children: s(y, {
                                  links: [
                                    {
                                      href: { webPageId: `fQRECcwa1` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `fQRECcwa1` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `fQRECcwa1` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    s(S, {
                                      breakpoint: k,
                                      overrides: {
                                        c8Ug5IVxO: {
                                          width: `max((min(${g?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 0,
                                        },
                                        HOpW4Jbxe: {
                                          width: `max(min(${g?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 416,
                                        },
                                      },
                                      children: s(O, {
                                        height: 400,
                                        width: `max((min(${g?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (g?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 0,
                                        children: u(w, {
                                          className: `framer-h9eujo-container`,
                                          id: `h9eujo`,
                                          nodeId: `sxDFTvgpn`,
                                          scopeId: `fRICmNncB`,
                                          children: [
                                            s(S, {
                                              breakpoint: k,
                                              overrides: {
                                                c8Ug5IVxO: { oSlFkYxO1: t[1] },
                                                HOpW4Jbxe: { oSlFkYxO1: t[2] },
                                              },
                                              children: s(H, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 450,
                                                    pixelWidth: 447,
                                                    src: `../../assets/images/sR9gQMTd2xY7bJ1y4dkpqCzDd8.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `sxDFTvgpn`,
                                                jTs_fuWrm: P({ overlay: e }),
                                                JWP0bNV85: `Pan Head Screw`,
                                                layoutId: `sxDFTvgpn`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            s(p, {
                                              children:
                                                e.visible &&
                                                s(i, {
                                                  children: o(
                                                    s(x, {
                                                      triggerId: `h9eujo`,
                                                      children: u(j, {
                                                        children: [
                                                          s(
                                                            f.div,
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
                                                              className: _(I, `framer-rm1axi`),
                                                              "data-framer-portal-id": `h9eujo`,
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
                                                            `N4tIPDLtB`
                                                          ),
                                                          s(f.div, {
                                                            className: _(I, `framer-ntyveq`),
                                                            "data-framer-portal-id": `h9eujo`,
                                                            transformTemplate: Y,
                                                            children: u(f.div, {
                                                              className: `framer-b9rcm`,
                                                              children: [
                                                                u(f.div, {
                                                                  className: `framer-1wigvdd`,
                                                                  children: [
                                                                    s(A, {
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
                                                                      className: `framer-k2yyo9`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    s(f.div, {
                                                                      className: `framer-11vw2st`,
                                                                      onTap: F({ overlay: e }),
                                                                      children: s(N, {
                                                                        animated: !1,
                                                                        className: `framer-og327h`,
                                                                        layoutId: `kWSZexUs7`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                s(T, {
                                                                  action: `https://api.framer.com/forms/v1/forms/c45f435d-5c22-4015-ac79-64c9fb9e74ec/submit`,
                                                                  className: `framer-ao6qk`,
                                                                  nodeId: `pU65yZCvv`,
                                                                  children: (e) =>
                                                                    u(i, {
                                                                      children: [
                                                                        u(f.label, {
                                                                          className: `framer-ahk0xw`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Email`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1qkwrht`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-zwux2j`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-x7zixt`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Mobile number`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-lsmfkg`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-s0869l`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-18t63ms`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Product Name`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-ba2kba`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-yh55vn`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-1eayai`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Make, Model & Size`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1rhfd75`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-17798iz`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        s(S, {
                                                                          breakpoint: k,
                                                                          overrides: {
                                                                            HOpW4Jbxe: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: s(O, {
                                                                            width: `277px`,
                                                                            children: s(w, {
                                                                              className: `framer-tbzuzm-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `z13s6yEKf`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `fRICmNncB`,
                                                                              children: s(L, {
                                                                                height: `100%`,
                                                                                id: `z13s6yEKf`,
                                                                                layoutId: `z13s6yEKf`,
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
                          s(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              s(i, {
                                children: s(y, {
                                  links: [
                                    {
                                      href: { webPageId: `ir9vUy5dL` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `ir9vUy5dL` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `ir9vUy5dL` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    s(S, {
                                      breakpoint: k,
                                      overrides: {
                                        c8Ug5IVxO: {
                                          width: `max((min(${g?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 416,
                                        },
                                        HOpW4Jbxe: {
                                          width: `max(min(${g?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 832,
                                        },
                                      },
                                      children: s(O, {
                                        height: 400,
                                        width: `max((min(${g?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (g?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 0,
                                        children: u(w, {
                                          className: `framer-1lw7b40-container`,
                                          id: `1lw7b40`,
                                          nodeId: `JoHsOzlss`,
                                          scopeId: `fRICmNncB`,
                                          children: [
                                            s(S, {
                                              breakpoint: k,
                                              overrides: {
                                                c8Ug5IVxO: { oSlFkYxO1: t[1] },
                                                HOpW4Jbxe: { oSlFkYxO1: t[2] },
                                              },
                                              children: s(H, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 360,
                                                    pixelWidth: 567,
                                                    src: `../../assets/images/meIzYwODhACEjm20tphzzRhurTI.png?width=567&height=360`,
                                                    srcSet: `../../assets/images/meIzYwODhACEjm20tphzzRhurTI.png 512w,../../assets/images/meIzYwODhACEjm20tphzzRhurTI.png?width=567&height=360 567w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `JoHsOzlss`,
                                                jTs_fuWrm: P({ overlay: e }),
                                                JWP0bNV85: `Pop Rivet Image`,
                                                layoutId: `JoHsOzlss`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            s(p, {
                                              children:
                                                e.visible &&
                                                s(i, {
                                                  children: o(
                                                    s(x, {
                                                      triggerId: `1lw7b40`,
                                                      children: u(j, {
                                                        children: [
                                                          s(
                                                            f.div,
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
                                                              className: _(I, `framer-69qwkd`),
                                                              "data-framer-portal-id": `1lw7b40`,
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
                                                            `ZBRENILwc`
                                                          ),
                                                          s(f.div, {
                                                            className: _(I, `framer-7h7wqe`),
                                                            "data-framer-portal-id": `1lw7b40`,
                                                            transformTemplate: Y,
                                                            children: u(f.div, {
                                                              className: `framer-1jtgeay`,
                                                              children: [
                                                                u(f.div, {
                                                                  className: `framer-38b4qn`,
                                                                  children: [
                                                                    s(A, {
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
                                                                      className: `framer-ipz6jy`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    s(f.div, {
                                                                      className: `framer-icbkh4`,
                                                                      onTap: F({ overlay: e }),
                                                                      children: s(N, {
                                                                        animated: !1,
                                                                        className: `framer-1pvsd6z`,
                                                                        layoutId: `RuOliHITo`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                s(T, {
                                                                  action: `https://api.framer.com/forms/v1/forms/161220b6-4c07-4e53-a1d7-b4010c8515b1/submit`,
                                                                  className: `framer-1cbbeik`,
                                                                  nodeId: `Iuo8ChjTb`,
                                                                  children: (e) =>
                                                                    u(i, {
                                                                      children: [
                                                                        u(f.label, {
                                                                          className: `framer-kcroil`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Email`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-19q9f1y`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-1ry4v4q`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-cxjt3x`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Mobile number`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-ivofjh`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-1fw8026`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-vgdjlb`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Product Name`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-u4ax1w`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-8ixlat`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-cm5ruf`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Make, Model & Size`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-p5a35u`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-8vblzw`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        s(S, {
                                                                          breakpoint: k,
                                                                          overrides: {
                                                                            HOpW4Jbxe: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: s(O, {
                                                                            width: `277px`,
                                                                            children: s(w, {
                                                                              className: `framer-1oxsxmj-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `EICIi5O8k`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `fRICmNncB`,
                                                                              children: s(L, {
                                                                                height: `100%`,
                                                                                id: `EICIi5O8k`,
                                                                                layoutId: `EICIi5O8k`,
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
                          s(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              s(i, {
                                children: s(y, {
                                  links: [
                                    {
                                      href: { webPageId: `qpbcB4GFy` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `qpbcB4GFy` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `qpbcB4GFy` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    s(S, {
                                      breakpoint: k,
                                      overrides: {
                                        c8Ug5IVxO: {
                                          width: `max((min(${g?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 416,
                                        },
                                        HOpW4Jbxe: {
                                          width: `max(min(${g?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1248,
                                        },
                                      },
                                      children: s(O, {
                                        height: 400,
                                        width: `max((min(${g?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (g?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 416,
                                        children: u(w, {
                                          className: `framer-fnko7i-container`,
                                          id: `fnko7i`,
                                          nodeId: `a6R0un8ks`,
                                          scopeId: `fRICmNncB`,
                                          children: [
                                            s(S, {
                                              breakpoint: k,
                                              overrides: {
                                                c8Ug5IVxO: { oSlFkYxO1: t[1] },
                                                HOpW4Jbxe: { oSlFkYxO1: t[2] },
                                              },
                                              children: s(H, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 261,
                                                    pixelWidth: 348,
                                                    src: `../../assets/images/riN8Sg2BYEiwE1Grsda39DUNcs.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `a6R0un8ks`,
                                                jTs_fuWrm: P({ overlay: e }),
                                                JWP0bNV85: `Self Tapping Screw`,
                                                layoutId: `a6R0un8ks`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            s(p, {
                                              children:
                                                e.visible &&
                                                s(i, {
                                                  children: o(
                                                    s(x, {
                                                      triggerId: `fnko7i`,
                                                      children: u(j, {
                                                        children: [
                                                          s(
                                                            f.div,
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
                                                              className: _(I, `framer-1taxpnm`),
                                                              "data-framer-portal-id": `fnko7i`,
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
                                                            `SOv9MYdNT`
                                                          ),
                                                          s(f.div, {
                                                            className: _(I, `framer-v0fh2g`),
                                                            "data-framer-portal-id": `fnko7i`,
                                                            transformTemplate: Y,
                                                            children: u(f.div, {
                                                              className: `framer-1a294ak`,
                                                              children: [
                                                                u(f.div, {
                                                                  className: `framer-1v9tqyv`,
                                                                  children: [
                                                                    s(A, {
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
                                                                      className: `framer-1mdgxuw`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    s(f.div, {
                                                                      className: `framer-7h58e6`,
                                                                      onTap: F({ overlay: e }),
                                                                      children: s(N, {
                                                                        animated: !1,
                                                                        className: `framer-1hz1fxv`,
                                                                        layoutId: `ZTMGp24DK`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                s(T, {
                                                                  action: `https://api.framer.com/forms/v1/forms/6cb63b6e-c393-453e-a964-5c75d652949a/submit`,
                                                                  className: `framer-5ekdvo`,
                                                                  nodeId: `WNeRjbus1`,
                                                                  children: (e) =>
                                                                    u(i, {
                                                                      children: [
                                                                        u(f.label, {
                                                                          className: `framer-yhev0r`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Email`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-adrp14`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-i034d`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-1ymgs3g`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Mobile number`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1hwjoqy`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-1pbmigf`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-5alazz`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Product Name`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1ut2d2l`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-4g7i41`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-tdasva`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Make, Model & Size`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1ozx4z4`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-sddqaz`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        s(S, {
                                                                          breakpoint: k,
                                                                          overrides: {
                                                                            HOpW4Jbxe: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: s(O, {
                                                                            width: `277px`,
                                                                            children: s(w, {
                                                                              className: `framer-1oy2nf0-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `sFB0DTW7S`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `fRICmNncB`,
                                                                              children: s(L, {
                                                                                height: `100%`,
                                                                                id: `sFB0DTW7S`,
                                                                                layoutId: `sFB0DTW7S`,
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
                          s(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              s(i, {
                                children: s(y, {
                                  links: [
                                    {
                                      href: { webPageId: `xcTlEC05v` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `xcTlEC05v` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `xcTlEC05v` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    s(S, {
                                      breakpoint: k,
                                      overrides: {
                                        c8Ug5IVxO: {
                                          width: `max((min(${g?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 832,
                                        },
                                        HOpW4Jbxe: {
                                          width: `max(min(${g?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1664,
                                        },
                                      },
                                      children: s(O, {
                                        height: 400,
                                        width: `max((min(${g?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (g?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 416,
                                        children: u(w, {
                                          className: `framer-v4x62l-container`,
                                          id: `v4x62l`,
                                          nodeId: `LuwMJTItB`,
                                          scopeId: `fRICmNncB`,
                                          children: [
                                            s(S, {
                                              breakpoint: k,
                                              overrides: {
                                                c8Ug5IVxO: { oSlFkYxO1: t[1] },
                                                HOpW4Jbxe: { oSlFkYxO1: t[2] },
                                              },
                                              children: s(H, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 350,
                                                    pixelWidth: 350,
                                                    src: `../../assets/images/sdQ0cx3n1VsV8x05eXTYH4IE4w.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `LuwMJTItB`,
                                                jTs_fuWrm: P({ overlay: e }),
                                                JWP0bNV85: `Wood Screw`,
                                                layoutId: `LuwMJTItB`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            s(p, {
                                              children:
                                                e.visible &&
                                                s(i, {
                                                  children: o(
                                                    s(x, {
                                                      triggerId: `v4x62l`,
                                                      children: u(j, {
                                                        children: [
                                                          s(
                                                            f.div,
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
                                                              className: _(I, `framer-o50nn8`),
                                                              "data-framer-portal-id": `v4x62l`,
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
                                                            `S7tnJDrFF`
                                                          ),
                                                          s(f.div, {
                                                            className: _(I, `framer-1n6igzd`),
                                                            "data-framer-portal-id": `v4x62l`,
                                                            transformTemplate: Y,
                                                            children: u(f.div, {
                                                              className: `framer-1kvo4wz`,
                                                              children: [
                                                                u(f.div, {
                                                                  className: `framer-1mku8ja`,
                                                                  children: [
                                                                    s(A, {
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
                                                                      className: `framer-1x9m45p`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    s(f.div, {
                                                                      className: `framer-9skuwn`,
                                                                      onTap: F({ overlay: e }),
                                                                      children: s(N, {
                                                                        animated: !1,
                                                                        className: `framer-1vulhmd`,
                                                                        layoutId: `yrtfnQDXQ`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                s(T, {
                                                                  action: `https://api.framer.com/forms/v1/forms/82508fa6-8000-4b34-8396-40efa465b5f8/submit`,
                                                                  className: `framer-diisrg`,
                                                                  nodeId: `QM7ICIC8K`,
                                                                  children: (e) =>
                                                                    u(i, {
                                                                      children: [
                                                                        u(f.label, {
                                                                          className: `framer-mnyzj1`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Email`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-155j7xz`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-55qwn1`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-5oum9e`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Mobile number`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-g30v3h`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-117gg76`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-n4m8xg`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Product Name`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-q06bmv`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-s0xfi3`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-1uwn70g`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Make, Model & Size`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-16txrjf`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-rqru3b`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        s(S, {
                                                                          breakpoint: k,
                                                                          overrides: {
                                                                            HOpW4Jbxe: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: s(O, {
                                                                            width: `277px`,
                                                                            children: s(w, {
                                                                              className: `framer-1gfesxd-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `rA_nGmd89`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `fRICmNncB`,
                                                                              children: s(L, {
                                                                                height: `100%`,
                                                                                id: `rA_nGmd89`,
                                                                                layoutId: `rA_nGmd89`,
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
                          s(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              s(i, {
                                children: s(y, {
                                  links: [
                                    {
                                      href: { webPageId: `bFxeP6McM` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `bFxeP6McM` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `bFxeP6McM` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    s(S, {
                                      breakpoint: k,
                                      overrides: {
                                        c8Ug5IVxO: {
                                          width: `max((min(${g?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 832,
                                        },
                                        HOpW4Jbxe: {
                                          width: `max(min(${g?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 2080,
                                        },
                                      },
                                      children: s(O, {
                                        height: 400,
                                        width: `max((min(${g?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (g?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 416,
                                        children: u(w, {
                                          className: `framer-119dqqm-container`,
                                          id: `119dqqm`,
                                          nodeId: `sov0iuAIW`,
                                          scopeId: `fRICmNncB`,
                                          children: [
                                            s(S, {
                                              breakpoint: k,
                                              overrides: {
                                                c8Ug5IVxO: { oSlFkYxO1: t[1] },
                                                HOpW4Jbxe: { oSlFkYxO1: t[2] },
                                              },
                                              children: s(H, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 500,
                                                    pixelWidth: 500,
                                                    src: `../../assets/images/yI6Z0mvp5RPYdNXgI4VxI7qH4mw.webp`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `sov0iuAIW`,
                                                jTs_fuWrm: P({ overlay: e }),
                                                JWP0bNV85: `Counterstuck Socket Head Cap`,
                                                layoutId: `sov0iuAIW`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            s(p, {
                                              children:
                                                e.visible &&
                                                s(i, {
                                                  children: o(
                                                    s(x, {
                                                      triggerId: `119dqqm`,
                                                      children: u(j, {
                                                        children: [
                                                          s(
                                                            f.div,
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
                                                              className: _(I, `framer-1csprfk`),
                                                              "data-framer-portal-id": `119dqqm`,
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
                                                            `fbKYcBpOn`
                                                          ),
                                                          s(f.div, {
                                                            className: _(I, `framer-t8twsi`),
                                                            "data-framer-portal-id": `119dqqm`,
                                                            transformTemplate: Y,
                                                            children: u(f.div, {
                                                              className: `framer-vd6ua5`,
                                                              children: [
                                                                u(f.div, {
                                                                  className: `framer-1649un7`,
                                                                  children: [
                                                                    s(A, {
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
                                                                      className: `framer-f89b28`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    s(f.div, {
                                                                      className: `framer-1e4zh1u`,
                                                                      onTap: F({ overlay: e }),
                                                                      children: s(N, {
                                                                        animated: !1,
                                                                        className: `framer-1j6z13f`,
                                                                        layoutId: `XnTjZu2t7`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                s(T, {
                                                                  action: `https://api.framer.com/forms/v1/forms/0a2dcdb7-8312-447f-95a5-3a793473905f/submit`,
                                                                  className: `framer-7u9k3i`,
                                                                  nodeId: `qckrxUf7g`,
                                                                  children: (e) =>
                                                                    u(i, {
                                                                      children: [
                                                                        u(f.label, {
                                                                          className: `framer-1l1qter`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Email`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-cb36k8`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-6omoqa`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-l8jizz`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Mobile number`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-qh8iqi`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-1r1yx35`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-14zeuyr`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Product Name`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-budtpy`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-q2pziu`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-dq2fin`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Make, Model & Size`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1o9sunr`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-9mn47e`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        s(S, {
                                                                          breakpoint: k,
                                                                          overrides: {
                                                                            HOpW4Jbxe: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: s(O, {
                                                                            width: `277px`,
                                                                            children: s(w, {
                                                                              className: `framer-ptsxq-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `ACSBnXoa5`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `fRICmNncB`,
                                                                              children: s(L, {
                                                                                height: `100%`,
                                                                                id: `ACSBnXoa5`,
                                                                                layoutId: `ACSBnXoa5`,
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
                          s(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              s(i, {
                                children: s(y, {
                                  links: [
                                    {
                                      href: { webPageId: `EilHJEx5E` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `EilHJEx5E` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `EilHJEx5E` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    s(S, {
                                      breakpoint: k,
                                      overrides: {
                                        c8Ug5IVxO: {
                                          width: `max((min(${g?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1248,
                                        },
                                        HOpW4Jbxe: {
                                          width: `max(min(${g?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 2496,
                                        },
                                      },
                                      children: s(O, {
                                        height: 400,
                                        width: `max((min(${g?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (g?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 832,
                                        children: u(w, {
                                          className: `framer-1xujqd8-container`,
                                          id: `1xujqd8`,
                                          nodeId: `X1GNWV3Jz`,
                                          scopeId: `fRICmNncB`,
                                          children: [
                                            s(S, {
                                              breakpoint: k,
                                              overrides: {
                                                c8Ug5IVxO: { oSlFkYxO1: t[1] },
                                                HOpW4Jbxe: { oSlFkYxO1: t[2] },
                                              },
                                              children: s(H, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 411,
                                                    pixelWidth: 447,
                                                    src: `../../assets/images/iKfl5RGH4sOPiAri15nrgbM6Y.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `X1GNWV3Jz`,
                                                jTs_fuWrm: P({ overlay: e }),
                                                JWP0bNV85: `Socket Head Shoulder Screw`,
                                                layoutId: `X1GNWV3Jz`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            s(p, {
                                              children:
                                                e.visible &&
                                                s(i, {
                                                  children: o(
                                                    s(x, {
                                                      triggerId: `1xujqd8`,
                                                      children: u(j, {
                                                        children: [
                                                          s(
                                                            f.div,
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
                                                              className: _(I, `framer-1bohcp0`),
                                                              "data-framer-portal-id": `1xujqd8`,
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
                                                            `QLucc1rnQ`
                                                          ),
                                                          s(f.div, {
                                                            className: _(I, `framer-rtqygm`),
                                                            "data-framer-portal-id": `1xujqd8`,
                                                            transformTemplate: Y,
                                                            children: u(f.div, {
                                                              className: `framer-1nl19ir`,
                                                              children: [
                                                                u(f.div, {
                                                                  className: `framer-1hycov8`,
                                                                  children: [
                                                                    s(A, {
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
                                                                      className: `framer-l88cqc`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    s(f.div, {
                                                                      className: `framer-wariyg`,
                                                                      onTap: F({ overlay: e }),
                                                                      children: s(N, {
                                                                        animated: !1,
                                                                        className: `framer-xz6cym`,
                                                                        layoutId: `zWLvdiNnv`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                s(T, {
                                                                  action: `https://api.framer.com/forms/v1/forms/1b3db05c-7b5c-463b-af22-62b1ad2ba6df/submit`,
                                                                  className: `framer-22an50`,
                                                                  nodeId: `mRPCwQBKQ`,
                                                                  children: (e) =>
                                                                    u(i, {
                                                                      children: [
                                                                        u(f.label, {
                                                                          className: `framer-14cp39l`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Email`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-h86yio`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-1bz175e`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-5w2dl8`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Mobile number`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-24xazh`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-a8q92u`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-1qwhf53`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Product Name`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1m8s0sj`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-96qdzd`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-uswv51`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Make, Model & Size`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-w0iglg`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-10xin8f`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        s(S, {
                                                                          breakpoint: k,
                                                                          overrides: {
                                                                            HOpW4Jbxe: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: s(O, {
                                                                            width: `277px`,
                                                                            children: s(w, {
                                                                              className: `framer-18vg8wk-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `GmW1koy5U`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `fRICmNncB`,
                                                                              children: s(L, {
                                                                                height: `100%`,
                                                                                id: `GmW1koy5U`,
                                                                                layoutId: `GmW1koy5U`,
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
                          s(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              s(i, {
                                children: s(y, {
                                  links: [
                                    {
                                      href: { webPageId: `khz3yJyTm` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `khz3yJyTm` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `khz3yJyTm` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    s(S, {
                                      breakpoint: k,
                                      overrides: {
                                        c8Ug5IVxO: {
                                          width: `max((min(${g?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1248,
                                        },
                                        HOpW4Jbxe: {
                                          width: `max(min(${g?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 2912,
                                        },
                                      },
                                      children: s(O, {
                                        height: 400,
                                        width: `max((min(${g?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (g?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 832,
                                        children: u(w, {
                                          className: `framer-x0eu0s-container`,
                                          id: `x0eu0s`,
                                          nodeId: `goS9fV6nD`,
                                          scopeId: `fRICmNncB`,
                                          children: [
                                            s(S, {
                                              breakpoint: k,
                                              overrides: {
                                                c8Ug5IVxO: { oSlFkYxO1: t[1] },
                                                HOpW4Jbxe: { oSlFkYxO1: t[2] },
                                              },
                                              children: s(H, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 420,
                                                    pixelWidth: 420,
                                                    src: `../../assets/images/ivduilrz90993oswgARSn7z6Q28.webp`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `goS9fV6nD`,
                                                jTs_fuWrm: P({ overlay: e }),
                                                JWP0bNV85: `Grub Screw`,
                                                layoutId: `goS9fV6nD`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            s(p, {
                                              children:
                                                e.visible &&
                                                s(i, {
                                                  children: o(
                                                    s(x, {
                                                      triggerId: `x0eu0s`,
                                                      children: u(j, {
                                                        children: [
                                                          s(
                                                            f.div,
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
                                                              className: _(I, `framer-blh4fn`),
                                                              "data-framer-portal-id": `x0eu0s`,
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
                                                            `mUnuMJYlc`
                                                          ),
                                                          s(f.div, {
                                                            className: _(I, `framer-1h3cbd`),
                                                            "data-framer-portal-id": `x0eu0s`,
                                                            transformTemplate: Y,
                                                            children: u(f.div, {
                                                              className: `framer-12tfrw0`,
                                                              children: [
                                                                u(f.div, {
                                                                  className: `framer-prqqm4`,
                                                                  children: [
                                                                    s(A, {
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
                                                                      className: `framer-hbx861`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    s(f.div, {
                                                                      className: `framer-w1xhtp`,
                                                                      onTap: F({ overlay: e }),
                                                                      children: s(N, {
                                                                        animated: !1,
                                                                        className: `framer-155cky0`,
                                                                        layoutId: `ebH9Elfnz`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                s(T, {
                                                                  action: `https://api.framer.com/forms/v1/forms/ab7826b5-6c9c-4c9d-a5ce-d2f223f0b021/submit`,
                                                                  className: `framer-1cinqir`,
                                                                  nodeId: `zklLIPwmb`,
                                                                  children: (e) =>
                                                                    u(i, {
                                                                      children: [
                                                                        u(f.label, {
                                                                          className: `framer-1808qf3`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Email`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-sdp1h`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-11b3s9d`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-1938f54`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Mobile number`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-16m27sn`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-1o0giq`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-3l5e3e`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Product Name`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1az9jpb`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-cmrgwt`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-16i1fsc`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Make, Model & Size`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-uxuvcm`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-ba11t9`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        s(S, {
                                                                          breakpoint: k,
                                                                          overrides: {
                                                                            HOpW4Jbxe: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: s(O, {
                                                                            width: `277px`,
                                                                            children: s(w, {
                                                                              className: `framer-1tycx9u-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `H8TMF_c9f`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `fRICmNncB`,
                                                                              children: s(L, {
                                                                                height: `100%`,
                                                                                id: `H8TMF_c9f`,
                                                                                layoutId: `H8TMF_c9f`,
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
                          s(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              s(i, {
                                children: s(y, {
                                  links: [
                                    {
                                      href: { webPageId: `ykfND90zv` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `ykfND90zv` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `ykfND90zv` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    s(S, {
                                      breakpoint: k,
                                      overrides: {
                                        c8Ug5IVxO: {
                                          width: `max((min(${g?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1664,
                                        },
                                        HOpW4Jbxe: {
                                          width: `max(min(${g?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 3328,
                                        },
                                      },
                                      children: s(O, {
                                        height: 400,
                                        width: `max((min(${g?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (g?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 832,
                                        children: u(w, {
                                          className: `framer-18rjnga-container`,
                                          id: `18rjnga`,
                                          nodeId: `NtiLSDwJc`,
                                          scopeId: `fRICmNncB`,
                                          children: [
                                            s(S, {
                                              breakpoint: k,
                                              overrides: {
                                                c8Ug5IVxO: { oSlFkYxO1: t[1] },
                                                HOpW4Jbxe: { oSlFkYxO1: t[2] },
                                              },
                                              children: s(H, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 313,
                                                    pixelWidth: 374,
                                                    src: `../../assets/images/8aQQPFM2oLn3Zaibzz096Ni0.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `NtiLSDwJc`,
                                                jTs_fuWrm: P({ overlay: e }),
                                                JWP0bNV85: `Hex Head Bolt`,
                                                layoutId: `NtiLSDwJc`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            s(p, {
                                              children:
                                                e.visible &&
                                                s(i, {
                                                  children: o(
                                                    s(x, {
                                                      triggerId: `18rjnga`,
                                                      children: u(j, {
                                                        children: [
                                                          s(
                                                            f.div,
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
                                                              className: _(I, `framer-2i1ad`),
                                                              "data-framer-portal-id": `18rjnga`,
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
                                                            `VYHhnEK7A`
                                                          ),
                                                          s(f.div, {
                                                            className: _(I, `framer-1e87gs`),
                                                            "data-framer-portal-id": `18rjnga`,
                                                            transformTemplate: Y,
                                                            children: u(f.div, {
                                                              className: `framer-1c3ji9t`,
                                                              children: [
                                                                u(f.div, {
                                                                  className: `framer-1b3b7pk`,
                                                                  children: [
                                                                    s(A, {
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
                                                                      className: `framer-okugra`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    s(f.div, {
                                                                      className: `framer-z0anog`,
                                                                      onTap: F({ overlay: e }),
                                                                      children: s(N, {
                                                                        animated: !1,
                                                                        className: `framer-iki3zg`,
                                                                        layoutId: `QJlizu6qH`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                s(T, {
                                                                  action: `https://api.framer.com/forms/v1/forms/ec692670-61cc-4067-a128-782758a8ab79/submit`,
                                                                  className: `framer-178dyvv`,
                                                                  nodeId: `sqi7Zift1`,
                                                                  children: (e) =>
                                                                    u(i, {
                                                                      children: [
                                                                        u(f.label, {
                                                                          className: `framer-1kmw5hy`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Email`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-172zzuf`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-zu3p9h`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-13fsc05`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Mobile number`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-m8p56l`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-b40dvv`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-1g0pqkx`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Product Name`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1p4zr8h`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-4bcrxj`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-1ufnftx`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Make, Model & Size`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1gxemxc`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-1dq6rl2`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        s(S, {
                                                                          breakpoint: k,
                                                                          overrides: {
                                                                            HOpW4Jbxe: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: s(O, {
                                                                            width: `277px`,
                                                                            children: s(w, {
                                                                              className: `framer-mod627-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `uP4cdCwmg`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `fRICmNncB`,
                                                                              children: s(L, {
                                                                                height: `100%`,
                                                                                id: `uP4cdCwmg`,
                                                                                layoutId: `uP4cdCwmg`,
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
                          s(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              s(i, {
                                children: s(y, {
                                  links: [
                                    {
                                      href: { webPageId: `d1wnevmRO` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `d1wnevmRO` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `d1wnevmRO` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    s(S, {
                                      breakpoint: k,
                                      overrides: {
                                        c8Ug5IVxO: {
                                          width: `max((min(${g?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1664,
                                        },
                                        HOpW4Jbxe: {
                                          width: `max(min(${g?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 3744,
                                        },
                                      },
                                      children: s(O, {
                                        height: 400,
                                        width: `max((min(${g?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (g?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 1248,
                                        children: u(w, {
                                          className: `framer-1whpgwg-container`,
                                          id: `1whpgwg`,
                                          nodeId: `IxYqGpDhQ`,
                                          scopeId: `fRICmNncB`,
                                          children: [
                                            s(S, {
                                              breakpoint: k,
                                              overrides: {
                                                c8Ug5IVxO: { oSlFkYxO1: t[1] },
                                                HOpW4Jbxe: { oSlFkYxO1: t[2] },
                                              },
                                              children: s(H, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 469,
                                                    src: `../../assets/images/HBefZjPJpRvCuhh5tEsiBvVwqM.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `IxYqGpDhQ`,
                                                jTs_fuWrm: P({ overlay: e }),
                                                JWP0bNV85: `Hex Nut`,
                                                layoutId: `IxYqGpDhQ`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            s(p, {
                                              children:
                                                e.visible &&
                                                s(i, {
                                                  children: o(
                                                    s(x, {
                                                      triggerId: `1whpgwg`,
                                                      children: u(j, {
                                                        children: [
                                                          s(
                                                            f.div,
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
                                                              className: _(I, `framer-1ejhzxm`),
                                                              "data-framer-portal-id": `1whpgwg`,
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
                                                            `P8oTayo_X`
                                                          ),
                                                          s(f.div, {
                                                            className: _(I, `framer-opn10s`),
                                                            "data-framer-portal-id": `1whpgwg`,
                                                            transformTemplate: Y,
                                                            children: u(f.div, {
                                                              className: `framer-xar4cz`,
                                                              children: [
                                                                u(f.div, {
                                                                  className: `framer-1lt7aro`,
                                                                  children: [
                                                                    s(A, {
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
                                                                      className: `framer-1czmw88`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    s(f.div, {
                                                                      className: `framer-sf3q9u`,
                                                                      onTap: F({ overlay: e }),
                                                                      children: s(N, {
                                                                        animated: !1,
                                                                        className: `framer-q02je1`,
                                                                        layoutId: `GocpPmifE`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                s(T, {
                                                                  action: `https://api.framer.com/forms/v1/forms/93cdd8d7-50fd-452e-9104-e88d00cbf9cb/submit`,
                                                                  className: `framer-mil9yx`,
                                                                  nodeId: `r7UktlSBa`,
                                                                  children: (e) =>
                                                                    u(i, {
                                                                      children: [
                                                                        u(f.label, {
                                                                          className: `framer-1860o0f`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Email`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1q0ts4p`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-ad1ffq`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-1a9cs99`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Mobile number`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-19s1ade`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-fcer81`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-a4tndc`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Product Name`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-ikwzjc`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-f87z69`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-16au0ym`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Make, Model & Size`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-4cqtja`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-t8j7bj`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        s(S, {
                                                                          breakpoint: k,
                                                                          overrides: {
                                                                            HOpW4Jbxe: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: s(O, {
                                                                            width: `277px`,
                                                                            children: s(w, {
                                                                              className: `framer-ylga02-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `XoUQRTgp1`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `fRICmNncB`,
                                                                              children: s(L, {
                                                                                height: `100%`,
                                                                                id: `XoUQRTgp1`,
                                                                                layoutId: `XoUQRTgp1`,
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
                          s(Q, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              s(i, {
                                children: s(y, {
                                  links: [
                                    {
                                      href: { webPageId: `EGds5Qwcq` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `EGds5Qwcq` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `EGds5Qwcq` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    s(S, {
                                      breakpoint: k,
                                      overrides: {
                                        c8Ug5IVxO: {
                                          width: `max((min(${g?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 2080,
                                        },
                                        HOpW4Jbxe: {
                                          width: `max(min(${g?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (g?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 4160,
                                        },
                                      },
                                      children: s(O, {
                                        height: 400,
                                        width: `max((min(${g?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (g?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 1248,
                                        children: u(w, {
                                          className: `framer-lswp3f-container`,
                                          id: `lswp3f`,
                                          nodeId: `qiLh3eDRs`,
                                          scopeId: `fRICmNncB`,
                                          children: [
                                            s(S, {
                                              breakpoint: k,
                                              overrides: {
                                                c8Ug5IVxO: { oSlFkYxO1: t[1] },
                                                HOpW4Jbxe: { oSlFkYxO1: t[2] },
                                              },
                                              children: s(H, {
                                                BlDyCL1Hj: J(
                                                  {
                                                    pixelHeight: 540,
                                                    pixelWidth: 760,
                                                    src: `../../assets/images/GbvD953LHz7UDRqRistphurjQw.jpg?width=760&height=540`,
                                                    srcSet: `../../assets/images/GbvD953LHz7UDRqRistphurjQw.jpg 512w,../../assets/images/GbvD953LHz7UDRqRistphurjQw.jpg?width=760&height=540 760w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `qiLh3eDRs`,
                                                jTs_fuWrm: P({ overlay: e }),
                                                JWP0bNV85: `Washer`,
                                                layoutId: `qiLh3eDRs`,
                                                oSlFkYxO1: t[0],
                                                style: { width: `100%` },
                                                variant: `ZKOecjUjr`,
                                                width: `100%`,
                                              }),
                                            }),
                                            s(p, {
                                              children:
                                                e.visible &&
                                                s(i, {
                                                  children: o(
                                                    s(x, {
                                                      triggerId: `lswp3f`,
                                                      children: u(j, {
                                                        children: [
                                                          s(
                                                            f.div,
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
                                                              className: _(I, `framer-f8mbll`),
                                                              "data-framer-portal-id": `lswp3f`,
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
                                                            `tQRVGM6_K`
                                                          ),
                                                          s(f.div, {
                                                            className: _(I, `framer-hxdxsb`),
                                                            "data-framer-portal-id": `lswp3f`,
                                                            transformTemplate: Y,
                                                            children: u(f.div, {
                                                              className: `framer-1a0sym7`,
                                                              children: [
                                                                u(f.div, {
                                                                  className: `framer-rrboeq`,
                                                                  children: [
                                                                    s(A, {
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
                                                                      className: `framer-1c24i3e`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    s(f.div, {
                                                                      className: `framer-1irrrph`,
                                                                      onTap: F({ overlay: e }),
                                                                      children: s(N, {
                                                                        animated: !1,
                                                                        className: `framer-13hqi9f`,
                                                                        layoutId: `IXuOGJfHr`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                s(T, {
                                                                  action: `https://api.framer.com/forms/v1/forms/fa8f09ba-4a40-42b2-a10a-63ca1c76a44c/submit`,
                                                                  className: `framer-mdh9xe`,
                                                                  nodeId: `fw9vDzzxH`,
                                                                  children: (e) =>
                                                                    u(i, {
                                                                      children: [
                                                                        u(f.label, {
                                                                          className: `framer-1k92boh`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Email`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-17ocizi`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-5thjv8`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-1vfsikd`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Mobile number`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-vbb5yl`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-h5424b`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-h1d0dj`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Product Name`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1qhuut8`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-393nou`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        u(f.label, {
                                                                          className: `framer-1u7tjt5`,
                                                                          children: [
                                                                            s(A, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: s(r, {
                                                                                children: s(`p`, {
                                                                                  style: {
                                                                                    "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                    "--framer-font-size": `12px`,
                                                                                    "--framer-font-weight": `500`,
                                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                  },
                                                                                  children: `Make, Model & Size`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-1q3l92n`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            s(D, {
                                                                              className: `framer-1q1fizn`,
                                                                              inputName: `Make, Model & Size`,
                                                                              placeholder: ``,
                                                                              required: !0,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        s(S, {
                                                                          breakpoint: k,
                                                                          overrides: {
                                                                            HOpW4Jbxe: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: s(O, {
                                                                            width: `277px`,
                                                                            children: s(w, {
                                                                              className: `framer-1gafzq0-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `URhIWaT1B`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `fRICmNncB`,
                                                                              children: s(L, {
                                                                                height: `100%`,
                                                                                id: `URhIWaT1B`,
                                                                                layoutId: `URhIWaT1B`,
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
                s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Iy931.framer-peipon, .framer-Iy931 .framer-peipon { display: block; }`,
        `.framer-Iy931.framer-12lqiqr { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-Iy931 .framer-bm4rlr { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 96px 24px 96px 24px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-Iy931 .framer-tog1zg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Iy931 .framer-wjadb6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-Iy931 .framer-1fpyqud { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-Iy931 .framer-hsc3wa { --1335ju: 2; --18mrqx2: #000000; --3it368: 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-Iy931 .framer-zilzg2-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Iy931 .framer-1f38980 { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Iy931 .framer-18hl125 { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Iy931 .framer-1n3uomx-container, .framer-Iy931 .framer-h9eujo-container, .framer-Iy931 .framer-1lw7b40-container, .framer-Iy931 .framer-fnko7i-container, .framer-Iy931 .framer-v4x62l-container, .framer-Iy931 .framer-119dqqm-container, .framer-Iy931 .framer-1xujqd8-container, .framer-Iy931 .framer-x0eu0s-container, .framer-Iy931 .framer-18rjnga-container, .framer-Iy931 .framer-1whpgwg-container, .framer-Iy931 .framer-lswp3f-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-Iy931.framer-vqjxaf, .framer-Iy931.framer-rm1axi, .framer-Iy931.framer-69qwkd, .framer-Iy931.framer-1taxpnm, .framer-Iy931.framer-o50nn8, .framer-Iy931.framer-1csprfk, .framer-Iy931.framer-1bohcp0, .framer-Iy931.framer-blh4fn, .framer-Iy931.framer-2i1ad, .framer-Iy931.framer-1ejhzxm, .framer-Iy931.framer-f8mbll { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-Iy931.framer-1vh1kqa, .framer-Iy931.framer-ntyveq, .framer-Iy931.framer-7h7wqe, .framer-Iy931.framer-v0fh2g, .framer-Iy931.framer-1n6igzd, .framer-Iy931.framer-t8twsi, .framer-Iy931.framer-rtqygm, .framer-Iy931.framer-1h3cbd, .framer-Iy931.framer-1e87gs, .framer-Iy931.framer-opn10s, .framer-Iy931.framer-hxdxsb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-Iy931 .framer-1p98bxg, .framer-Iy931 .framer-b9rcm, .framer-Iy931 .framer-1jtgeay, .framer-Iy931 .framer-1a294ak, .framer-Iy931 .framer-1kvo4wz, .framer-Iy931 .framer-vd6ua5, .framer-Iy931 .framer-1nl19ir, .framer-Iy931 .framer-12tfrw0, .framer-Iy931 .framer-1c3ji9t, .framer-Iy931 .framer-xar4cz, .framer-Iy931 .framer-1a0sym7 { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-Iy931 .framer-1ixax77, .framer-Iy931 .framer-1wigvdd, .framer-Iy931 .framer-38b4qn, .framer-Iy931 .framer-1v9tqyv, .framer-Iy931 .framer-1mku8ja, .framer-Iy931 .framer-1649un7, .framer-Iy931 .framer-1hycov8, .framer-Iy931 .framer-prqqm4, .framer-Iy931 .framer-1b3b7pk, .framer-Iy931 .framer-1lt7aro, .framer-Iy931 .framer-rrboeq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Iy931 .framer-1umu0uq, .framer-Iy931 .framer-k2yyo9, .framer-Iy931 .framer-ipz6jy, .framer-Iy931 .framer-1mdgxuw, .framer-Iy931 .framer-1x9m45p, .framer-Iy931 .framer-f89b28, .framer-Iy931 .framer-l88cqc, .framer-Iy931 .framer-hbx861, .framer-Iy931 .framer-okugra, .framer-Iy931 .framer-1czmw88, .framer-Iy931 .framer-1c24i3e { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Iy931 .framer-mdpl8e, .framer-Iy931 .framer-11vw2st, .framer-Iy931 .framer-icbkh4, .framer-Iy931 .framer-7h58e6, .framer-Iy931 .framer-9skuwn, .framer-Iy931 .framer-1e4zh1u, .framer-Iy931 .framer-wariyg, .framer-Iy931 .framer-w1xhtp, .framer-Iy931 .framer-z0anog, .framer-Iy931 .framer-sf3q9u, .framer-Iy931 .framer-1irrrph { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-Iy931 .framer-zyuld8, .framer-Iy931 .framer-og327h, .framer-Iy931 .framer-1pvsd6z, .framer-Iy931 .framer-1hz1fxv, .framer-Iy931 .framer-1vulhmd, .framer-Iy931 .framer-1j6z13f, .framer-Iy931 .framer-xz6cym, .framer-Iy931 .framer-155cky0, .framer-Iy931 .framer-iki3zg, .framer-Iy931 .framer-q02je1, .framer-Iy931 .framer-13hqi9f { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-Iy931 .framer-1ds56h, .framer-Iy931 .framer-ao6qk, .framer-Iy931 .framer-1cbbeik, .framer-Iy931 .framer-5ekdvo, .framer-Iy931 .framer-diisrg, .framer-Iy931 .framer-7u9k3i, .framer-Iy931 .framer-22an50, .framer-Iy931 .framer-1cinqir, .framer-Iy931 .framer-178dyvv, .framer-Iy931 .framer-mil9yx, .framer-Iy931 .framer-mdh9xe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-Iy931 .framer-tlik35, .framer-Iy931 .framer-1u0xqlz, .framer-Iy931 .framer-kubod8, .framer-Iy931 .framer-12xqm01, .framer-Iy931 .framer-ahk0xw, .framer-Iy931 .framer-x7zixt, .framer-Iy931 .framer-18t63ms, .framer-Iy931 .framer-1eayai, .framer-Iy931 .framer-kcroil, .framer-Iy931 .framer-cxjt3x, .framer-Iy931 .framer-vgdjlb, .framer-Iy931 .framer-cm5ruf, .framer-Iy931 .framer-yhev0r, .framer-Iy931 .framer-1ymgs3g, .framer-Iy931 .framer-5alazz, .framer-Iy931 .framer-tdasva, .framer-Iy931 .framer-mnyzj1, .framer-Iy931 .framer-5oum9e, .framer-Iy931 .framer-n4m8xg, .framer-Iy931 .framer-1uwn70g, .framer-Iy931 .framer-1l1qter, .framer-Iy931 .framer-l8jizz, .framer-Iy931 .framer-14zeuyr, .framer-Iy931 .framer-dq2fin, .framer-Iy931 .framer-14cp39l, .framer-Iy931 .framer-5w2dl8, .framer-Iy931 .framer-1qwhf53, .framer-Iy931 .framer-uswv51, .framer-Iy931 .framer-1808qf3, .framer-Iy931 .framer-1938f54, .framer-Iy931 .framer-3l5e3e, .framer-Iy931 .framer-16i1fsc, .framer-Iy931 .framer-1kmw5hy, .framer-Iy931 .framer-13fsc05, .framer-Iy931 .framer-1g0pqkx, .framer-Iy931 .framer-1ufnftx, .framer-Iy931 .framer-1860o0f, .framer-Iy931 .framer-1a9cs99, .framer-Iy931 .framer-a4tndc, .framer-Iy931 .framer-16au0ym, .framer-Iy931 .framer-1k92boh, .framer-Iy931 .framer-1vfsikd, .framer-Iy931 .framer-h1d0dj, .framer-Iy931 .framer-1u7tjt5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Iy931 .framer-1ruejpt, .framer-Iy931 .framer-p8jwhw, .framer-Iy931 .framer-1jvwnc0, .framer-Iy931 .framer-13w22nr, .framer-Iy931 .framer-1qkwrht, .framer-Iy931 .framer-lsmfkg, .framer-Iy931 .framer-ba2kba, .framer-Iy931 .framer-1rhfd75, .framer-Iy931 .framer-19q9f1y, .framer-Iy931 .framer-ivofjh, .framer-Iy931 .framer-u4ax1w, .framer-Iy931 .framer-p5a35u, .framer-Iy931 .framer-adrp14, .framer-Iy931 .framer-1hwjoqy, .framer-Iy931 .framer-1ut2d2l, .framer-Iy931 .framer-1ozx4z4, .framer-Iy931 .framer-155j7xz, .framer-Iy931 .framer-g30v3h, .framer-Iy931 .framer-q06bmv, .framer-Iy931 .framer-16txrjf, .framer-Iy931 .framer-cb36k8, .framer-Iy931 .framer-qh8iqi, .framer-Iy931 .framer-budtpy, .framer-Iy931 .framer-1o9sunr, .framer-Iy931 .framer-h86yio, .framer-Iy931 .framer-24xazh, .framer-Iy931 .framer-1m8s0sj, .framer-Iy931 .framer-w0iglg, .framer-Iy931 .framer-sdp1h, .framer-Iy931 .framer-16m27sn, .framer-Iy931 .framer-1az9jpb, .framer-Iy931 .framer-uxuvcm, .framer-Iy931 .framer-172zzuf, .framer-Iy931 .framer-m8p56l, .framer-Iy931 .framer-1p4zr8h, .framer-Iy931 .framer-1gxemxc, .framer-Iy931 .framer-1q0ts4p, .framer-Iy931 .framer-19s1ade, .framer-Iy931 .framer-ikwzjc, .framer-Iy931 .framer-4cqtja, .framer-Iy931 .framer-17ocizi, .framer-Iy931 .framer-vbb5yl, .framer-Iy931 .framer-1qhuut8, .framer-Iy931 .framer-1q3l92n { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Iy931 .framer-f40ni, .framer-Iy931 .framer-b0srhg, .framer-Iy931 .framer-148glh, .framer-Iy931 .framer-168p6d2, .framer-Iy931 .framer-zwux2j, .framer-Iy931 .framer-s0869l, .framer-Iy931 .framer-yh55vn, .framer-Iy931 .framer-17798iz, .framer-Iy931 .framer-1ry4v4q, .framer-Iy931 .framer-1fw8026, .framer-Iy931 .framer-8ixlat, .framer-Iy931 .framer-8vblzw, .framer-Iy931 .framer-i034d, .framer-Iy931 .framer-1pbmigf, .framer-Iy931 .framer-4g7i41, .framer-Iy931 .framer-sddqaz, .framer-Iy931 .framer-55qwn1, .framer-Iy931 .framer-117gg76, .framer-Iy931 .framer-s0xfi3, .framer-Iy931 .framer-rqru3b, .framer-Iy931 .framer-6omoqa, .framer-Iy931 .framer-1r1yx35, .framer-Iy931 .framer-q2pziu, .framer-Iy931 .framer-9mn47e, .framer-Iy931 .framer-1bz175e, .framer-Iy931 .framer-a8q92u, .framer-Iy931 .framer-96qdzd, .framer-Iy931 .framer-10xin8f, .framer-Iy931 .framer-11b3s9d, .framer-Iy931 .framer-1o0giq, .framer-Iy931 .framer-cmrgwt, .framer-Iy931 .framer-ba11t9, .framer-Iy931 .framer-zu3p9h, .framer-Iy931 .framer-b40dvv, .framer-Iy931 .framer-4bcrxj, .framer-Iy931 .framer-1dq6rl2, .framer-Iy931 .framer-ad1ffq, .framer-Iy931 .framer-fcer81, .framer-Iy931 .framer-f87z69, .framer-Iy931 .framer-t8j7bj, .framer-Iy931 .framer-5thjv8, .framer-Iy931 .framer-h5424b, .framer-Iy931 .framer-393nou, .framer-Iy931 .framer-1q1fizn { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-Iy931 .framer-lbm4eo-container, .framer-Iy931 .framer-tbzuzm-container, .framer-Iy931 .framer-1oxsxmj-container, .framer-Iy931 .framer-1oy2nf0-container, .framer-Iy931 .framer-1gfesxd-container, .framer-Iy931 .framer-ptsxq-container, .framer-Iy931 .framer-18vg8wk-container, .framer-Iy931 .framer-1tycx9u-container, .framer-Iy931 .framer-mod627-container, .framer-Iy931 .framer-ylga02-container, .framer-Iy931 .framer-1gafzq0-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        ...M,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-Iy931.framer-12lqiqr { width: 810px; } .framer-Iy931 .framer-bm4rlr { padding: 80px 24px 80px 24px; } .framer-Iy931 .framer-18hl125 { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-Iy931 .framer-1p98bxg, .framer-Iy931 .framer-b9rcm, .framer-Iy931 .framer-1jtgeay, .framer-Iy931 .framer-1a294ak, .framer-Iy931 .framer-1kvo4wz, .framer-Iy931 .framer-vd6ua5, .framer-Iy931 .framer-1nl19ir, .framer-Iy931 .framer-12tfrw0, .framer-Iy931 .framer-1c3ji9t, .framer-Iy931 .framer-xar4cz, .framer-Iy931 .framer-1a0sym7 { height: min-content; width: min-content; } .framer-Iy931 .framer-1ixax77, .framer-Iy931 .framer-1wigvdd, .framer-Iy931 .framer-38b4qn, .framer-Iy931 .framer-1v9tqyv, .framer-Iy931 .framer-1mku8ja, .framer-Iy931 .framer-1649un7, .framer-Iy931 .framer-1hycov8, .framer-Iy931 .framer-prqqm4, .framer-Iy931 .framer-1b3b7pk, .framer-Iy931 .framer-1lt7aro, .framer-Iy931 .framer-rrboeq { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-Iy931.framer-12lqiqr { width: 390px; } .framer-Iy931 .framer-bm4rlr { padding: 80px 16px 80px 16px; } .framer-Iy931 .framer-18hl125 { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-Iy931 .framer-1n3uomx-container { order: 0; } .framer-Iy931.framer-1vh1kqa, .framer-Iy931.framer-ntyveq, .framer-Iy931.framer-7h7wqe, .framer-Iy931.framer-v0fh2g, .framer-Iy931.framer-1n6igzd, .framer-Iy931.framer-t8twsi, .framer-Iy931.framer-rtqygm, .framer-Iy931.framer-1h3cbd, .framer-Iy931.framer-1e87gs, .framer-Iy931.framer-opn10s, .framer-Iy931.framer-hxdxsb { padding: 60px 0px 0px 0px; } .framer-Iy931 .framer-1p98bxg, .framer-Iy931 .framer-b9rcm, .framer-Iy931 .framer-1jtgeay, .framer-Iy931 .framer-1a294ak, .framer-Iy931 .framer-1kvo4wz, .framer-Iy931 .framer-vd6ua5, .framer-Iy931 .framer-1nl19ir, .framer-Iy931 .framer-12tfrw0, .framer-Iy931 .framer-1c3ji9t, .framer-Iy931 .framer-xar4cz, .framer-Iy931 .framer-1a0sym7 { height: min-content; width: 300px; } .framer-Iy931 .framer-1ds56h, .framer-Iy931 .framer-ao6qk, .framer-Iy931 .framer-1cbbeik, .framer-Iy931 .framer-5ekdvo, .framer-Iy931 .framer-diisrg, .framer-Iy931 .framer-7u9k3i, .framer-Iy931 .framer-22an50, .framer-Iy931 .framer-1cinqir, .framer-Iy931 .framer-178dyvv, .framer-Iy931 .framer-mil9yx, .framer-Iy931 .framer-mdh9xe { width: 261px; } .framer-Iy931 .framer-h9eujo-container { order: 1; } .framer-Iy931 .framer-1lw7b40-container { order: 2; } .framer-Iy931 .framer-fnko7i-container { order: 3; } .framer-Iy931 .framer-v4x62l-container { order: 4; } .framer-Iy931 .framer-119dqqm-container { order: 5; } .framer-Iy931 .framer-1xujqd8-container { order: 6; } .framer-Iy931 .framer-x0eu0s-container { order: 7; } .framer-Iy931 .framer-18rjnga-container { order: 8; } .framer-Iy931 .framer-1whpgwg-container { order: 9; } .framer-Iy931 .framer-lswp3f-container { order: 10; }}`,
      ],
      `framer-Iy931`
    )),
    ($.displayName = `Measuring Meters`),
    ($.defaultProps = { height: 2311, width: 1200 }),
    k(
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
        ...W,
        ...G,
        ...be,
        ...xe,
        ...Se,
        ...g(ge),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Me = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerfRICmNncB`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"c8Ug5IVxO":{"layout":["fixed","fixed"]},"HOpW4Jbxe":{"layout":["fixed","fixed"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `2311`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1200`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `{"uXBPN8BUD":{"pattern":":uXBPN8BUD","name":"classes"}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Me as __FramerMetadata__, $ as default };
//# sourceMappingURL=zHxh5rcmpxwqfwnS-AMzRuY34G87xqwCXQc0PEkzptI.C62Yg4Zm.mjs.map
