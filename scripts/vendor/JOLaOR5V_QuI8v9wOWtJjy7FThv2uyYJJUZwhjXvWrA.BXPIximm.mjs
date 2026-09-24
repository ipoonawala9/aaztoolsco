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
import { S as l, a as ae, n as u, r as oe, t as se } from "./motion.CXXzZ97F.mjs";
import {
  I as d,
  L as f,
  O as p,
  U as ce,
  at as le,
  b as m,
  c as ue,
  ct as de,
  d as h,
  dt as fe,
  g,
  ht as _,
  it as pe,
  lt as me,
  mt as he,
  n as v,
  nt as ge,
  o as y,
  ot as _e,
  p as b,
  s as x,
  st as ve,
  t as S,
  tt as ye,
  ut as C,
  w,
  x as T,
  y as E,
} from "./framer.w0XhpZTx.mjs";
import { i as be, n as D, r as xe, t as Se } from "./nl385Jssa.BV16yEHR.mjs";
import { a as O, c as k, i as A, o as j, r as M, s as N } from "./shared.DPOhhryJ.mjs";
import { i as Ce, r as P } from "./cQxXulDZM.DXXtl8ZX.mjs";
import { n as we, t as F } from "./jNXHc0ip8.Bnggf-hw.mjs";
import Te, { t as Ee } from "./vcPXj94Xx84A9qV5eml0JeqVzjGLSRK3wQVHr0jVEZA.BpM10aXu.mjs";
var I, L, R, z, B, V, H, De, U, Oe, ke, Ae, W, G, K, q, J, Y, X, Z, je, Me, Ne, Q, $;
e(() => {
  (ne(),
    ce(),
    se(),
    ie(),
    te(),
    j(),
    k(),
    A(),
    Ce(),
    we(),
    be(),
    Ee(),
    (I = d(N)),
    (L = d(P)),
    (R = _(v)),
    (z = _(T)),
    (B = d(F)),
    (V = d(O)),
    (H = d(M)),
    (De = {
      cZ43xLDwk: `(min-width: 1200px)`,
      dQetuOrvK: `(max-width: 809.98px)`,
      K4L7_usyj: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (U = () => typeof document < `u`),
    (Oe = `framer-2OpoY`),
    (ke = {
      cZ43xLDwk: `framer-v-2l3yge`,
      dQetuOrvK: `framer-v-11y81x8`,
      K4L7_usyj: `framer-v-s1phfx`,
    }),
    (Ae = (e, t, n) => (e && t ? `position` : n)),
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
      let [i, a] = me({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (je = ({ value: e }) =>
      _e()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Me = { Desktop: `cZ43xLDwk`, Phone: `dQetuOrvK`, Tablet: `K4L7_usyj` }),
    (Ne = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Me[r.variant] ?? r.variant ?? `cZ43xLDwk`,
    })),
    (Q = he(
      a(function (e, a) {
        let te = n(null),
          ne = a ?? te,
          ie = re(),
          { activeLocale: se, setLocale: d } = ve(),
          f = ge(),
          { style: ce, className: _, layoutId: me, variant: he, ..._e } = Ne(e);
        de(ee(() => Te({}, se), [se]));
        let [w, be] = le(he, De, !1),
          { activeVariantCallback: D, delay: xe } = ye(void 0),
          k = ({ overlay: e }) =>
            D(async (...t) => {
              e.toggle();
            }),
          A = ({ overlay: e }) =>
            D(async (...t) => {
              e.hide();
            }),
          j = p(Oe, Se),
          Ce = () => !U() || w === `K4L7_usyj`,
          we = t(ue)?.isLayoutTemplate,
          Ee = !!t(ae)?.transition?.layout,
          I = Ae(we, Ee),
          L = C(`IikD8IlBv`),
          B = n(null);
        fe();
        let V = () => !U() || w !== `K4L7_usyj`,
          H = C(`m2YVqE6PE`),
          Me = n(null),
          Q = () => !U() || w === `dQetuOrvK`,
          $ = C(`VdncUIAEg`),
          Pe = n(null),
          Fe = () => !U() || w !== `dQetuOrvK`;
        return (
          pe({}),
          s(ue.Provider, {
            value: { primaryVariantId: `cZ43xLDwk`, variantClassNames: ke },
            children: c(oe, {
              id: me ?? ie,
              children: [
                s(je, { value: `html body { background: rgb(255, 255, 255); }` }),
                c(l.div, {
                  ..._e,
                  className: p(j, `framer-2l3yge`, _),
                  ref: ne,
                  style: { ...ce },
                  children: [
                    Ce() &&
                      c(l.section, {
                        className: `framer-cuz8fz hidden-2l3yge hidden-11y81x8`,
                        "data-framer-name": `Classes`,
                        id: L,
                        layout: I,
                        ref: B,
                        children: [
                          c(`div`, {
                            className: `framer-hozn8k`,
                            "data-framer-name": `Text`,
                            children: [
                              s(b, {
                                href: { webPageId: `AttXBZoeD` },
                                motionChild: !0,
                                nodeId: `t0qmcuSeY`,
                                openInNewTab: !1,
                                scopeId: `yIPN70dPu`,
                                children: s(l.a, {
                                  className: `framer-5fh5gu framer-1eh5aws`,
                                  children: s(b, {
                                    href: { webPageId: `AttXBZoeD` },
                                    motionChild: !0,
                                    nodeId: `cketlvUno`,
                                    openInNewTab: !1,
                                    scopeId: `yIPN70dPu`,
                                    children: s(l.a, {
                                      className: `framer-1hk2oxz framer-1eh5aws`,
                                      children: s(N, {
                                        animated: !1,
                                        BKVe8Pgvw: !0,
                                        className: `framer-1vnbng8`,
                                        fICyAUQY1: !0,
                                        layoutId: `OKGrHD6Es`,
                                        lKf_CQTz5: !0,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              s(g, {
                                breakpoint: w,
                                overrides: {
                                  K4L7_usyj: { y: (f?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
                                },
                                children: s(S, {
                                  height: 26,
                                  children: s(R, {
                                    __framer__animate: { transition: G },
                                    __framer__animateOnce: !0,
                                    __framer__enter: W,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-so1o9p-container`,
                                    nodeId: `QD_Um8_lh`,
                                    rendersWithMotion: !0,
                                    scopeId: `yIPN70dPu`,
                                    children: s(P, {
                                      ggTbrSuHk: `Fasteners, Safety items & Cable ties`,
                                      height: `100%`,
                                      id: `QD_Um8_lh`,
                                      layoutId: `QD_Um8_lh`,
                                      variant: `z6oSgdJxk`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              s(z, {
                                __framer__animate: { transition: K },
                                __framer__animateOnce: !0,
                                __framer__enter: W,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: s(r, {
                                  children: s(`h3`, {
                                    className: `framer-styles-preset-1d7ew99`,
                                    "data-styles-preset": `nl385Jssa`,
                                    children: `Cable Ties`,
                                  }),
                                }),
                                className: `framer-1opnv6v`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          c(`div`, {
                            className: `framer-1086k5t`,
                            "data-framer-name": `ClassesGallery`,
                            children: [
                              s(Z, {
                                dismissWithEsc: !0,
                                children: (e) =>
                                  s(i, {
                                    children: s(m, {
                                      links: [
                                        {
                                          href: { webPageId: `iTo4f0vNa` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `iTo4f0vNa` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(g, {
                                          breakpoint: w,
                                          overrides: {
                                            K4L7_usyj: {
                                              width: `373px`,
                                              y: (f?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 0,
                                            },
                                          },
                                          children: s(S, {
                                            height: 400,
                                            children: c(v, {
                                              className: `framer-1qv2fui-container`,
                                              id: `1qv2fui`,
                                              nodeId: `XMd26Sbh9`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(g, {
                                                  breakpoint: w,
                                                  overrides: { K4L7_usyj: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 450,
                                                        pixelWidth: 447,
                                                        src: `../../assets/images/GUiRf8E5CZMWQhD8F5T2HblIDc.png`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `XMd26Sbh9`,
                                                    jTs_fuWrm: k({ overlay: e }),
                                                    JWP0bNV85: `Stainless Steel Cable Tie`,
                                                    layoutId: `XMd26Sbh9`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: `ZKOecjUjr`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `1qv2fui`,
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
                                                                  className: p(j, `framer-whnvvf`),
                                                                  "data-framer-portal-id": `1qv2fui`,
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
                                                                `wdgbdVGem`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-1ma7u7p`),
                                                                "data-framer-portal-id": `1qv2fui`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-1u6cn0o`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-1qc14zx`,
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
                                                                          className: `framer-1q4l34d`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-143zjqj`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-s96vsd`,
                                                                            layoutId: `HP2QRHmV8`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      action: `https://api.framer.com/forms/v1/forms/3808ded1-3f07-49ec-a593-3027e7f8a1e0/submit`,
                                                                      className: `framer-2g2zsx`,
                                                                      nodeId: `reQiZ7E70`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-1k6sjgs`,
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
                                                                                  className: `framer-12p60zs`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1w1wvse`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1c1faxv`,
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
                                                                                  className: `framer-1mf5ebz`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-165fsur`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-oaxrgj`,
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
                                                                                  className: `framer-1vlwm3q`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-uult9t`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-q6jkxe`,
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
                                                                                  className: `framer-1c4rub5`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1u3cbtk`,
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
                                                                                className: `framer-xexx15-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `NQXddgwtA`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `NQXddgwtA`,
                                                                                  layoutId: `NQXddgwtA`,
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
                                          href: { webPageId: `K6ObOYBQA` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `K6ObOYBQA` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(g, {
                                          breakpoint: w,
                                          overrides: {
                                            K4L7_usyj: {
                                              width: `373px`,
                                              y: (f?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 0,
                                            },
                                          },
                                          children: s(S, {
                                            height: 400,
                                            children: c(v, {
                                              className: `framer-gwezt4-container`,
                                              id: `gwezt4`,
                                              nodeId: `U3puH5TjL`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(g, {
                                                  breakpoint: w,
                                                  overrides: { K4L7_usyj: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 450,
                                                        pixelWidth: 447,
                                                        src: `../../assets/images/6HbmwHz9Ug0Cg3U1Z7d95EVlI3U.png`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `U3puH5TjL`,
                                                    jTs_fuWrm: k({ overlay: e }),
                                                    JWP0bNV85: `Tag Cable Tie`,
                                                    layoutId: `U3puH5TjL`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: `ZKOecjUjr`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `gwezt4`,
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
                                                                  className: p(j, `framer-1ytq4fb`),
                                                                  "data-framer-portal-id": `gwezt4`,
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
                                                                `SbqYEvREF`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-1d4mil0`),
                                                                "data-framer-portal-id": `gwezt4`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-zzdkee`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-dcrkn`,
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
                                                                          className: `framer-17kg9vu`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-1g6pchs`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-19kg0bu`,
                                                                            layoutId: `Wg0SjayYb`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      action: `https://api.framer.com/forms/v1/forms/8bde5045-26e2-4031-827e-2eee298f5c0f/submit`,
                                                                      className: `framer-zj0p5g`,
                                                                      nodeId: `VfrGeEmNx`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-1fajd0i`,
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
                                                                                  className: `framer-xz8b5c`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-mv8cvn`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-5mvpcd`,
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
                                                                                  className: `framer-15xkopf`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-tr1q0z`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1ti3ak`,
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
                                                                                  className: `framer-1oje0n4`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-86wv0d`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-8s912e`,
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
                                                                                  className: `framer-ct147n`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1pyao6g`,
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
                                                                                className: `framer-1y9z7g9-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `HnyruFaaU`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `HnyruFaaU`,
                                                                                  layoutId: `HnyruFaaU`,
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
                                          href: { webPageId: `CnkHM0EVU` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `CnkHM0EVU` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(g, {
                                          breakpoint: w,
                                          overrides: {
                                            K4L7_usyj: {
                                              width: `373px`,
                                              y: (f?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 416,
                                            },
                                          },
                                          children: s(S, {
                                            height: 400,
                                            children: c(v, {
                                              className: `framer-xcro7w-container`,
                                              id: `xcro7w`,
                                              nodeId: `qlxtF2yM0`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(g, {
                                                  breakpoint: w,
                                                  overrides: { K4L7_usyj: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 2400,
                                                        pixelWidth: 3200,
                                                        src: `../../assets/images/E8O7Nh8j4y8Rczr3bHzZ1nWEw.jpeg?width=3200&height=2400`,
                                                        srcSet: `../../assets/images/E8O7Nh8j4y8Rczr3bHzZ1nWEw.jpeg?scale-down-to=512&width=3200&height=2400 512w,../../assets/images/E8O7Nh8j4y8Rczr3bHzZ1nWEw.jpeg?scale-down-to=1024&width=3200&height=2400 1024w,../../assets/images/E8O7Nh8j4y8Rczr3bHzZ1nWEw.jpeg 2048w,../../assets/images/E8O7Nh8j4y8Rczr3bHzZ1nWEw.jpeg?width=3200&height=2400 3200w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `qlxtF2yM0`,
                                                    jTs_fuWrm: k({ overlay: e }),
                                                    JWP0bNV85: `Security Seal Cable Tie`,
                                                    layoutId: `qlxtF2yM0`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: `ZKOecjUjr`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `xcro7w`,
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
                                                                  className: p(j, `framer-12txb1w`),
                                                                  "data-framer-portal-id": `xcro7w`,
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
                                                                `TuBZ4JY9W`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-1khqtn`),
                                                                "data-framer-portal-id": `xcro7w`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-1xvig31`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-ghosye`,
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
                                                                          className: `framer-cpkjkv`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-asm8vc`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-91qif0`,
                                                                            layoutId: `eWjAIE4pt`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      action: `https://api.framer.com/forms/v1/forms/d6e7b0d8-147d-4453-8e16-800e3f765543/submit`,
                                                                      className: `framer-1r7cotd`,
                                                                      nodeId: `U05VgjH5Q`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-1evy5r2`,
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
                                                                                  className: `framer-1xbbrul`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1xccupl`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1cr13yy`,
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
                                                                                  className: `framer-25k63v`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-168gl4s`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-yuoasj`,
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
                                                                                  className: `framer-lsx6cs`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-fuzp4k`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-uvlgoq`,
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
                                                                                  className: `framer-c4ha4l`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-16wb8tq`,
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
                                                                                className: `framer-gxffhw-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `xoo1dl5gK`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `xoo1dl5gK`,
                                                                                  layoutId: `xoo1dl5gK`,
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
                                          href: { webPageId: `zpfAKcJD2` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `zpfAKcJD2` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(g, {
                                          breakpoint: w,
                                          overrides: {
                                            K4L7_usyj: {
                                              width: `373px`,
                                              y: (f?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 416,
                                            },
                                          },
                                          children: s(S, {
                                            height: 400,
                                            children: c(v, {
                                              className: `framer-1fmggwi-container`,
                                              id: `1fmggwi`,
                                              nodeId: `wYZfM3RQv`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(g, {
                                                  breakpoint: w,
                                                  overrides: { K4L7_usyj: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 450,
                                                        pixelWidth: 447,
                                                        src: `../../assets/images/3Gfh4KwKvJdLd293OVJNkgGCH0.png`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `wYZfM3RQv`,
                                                    jTs_fuWrm: k({ overlay: e }),
                                                    JWP0bNV85: `Metal Tooth Cable Tie`,
                                                    layoutId: `wYZfM3RQv`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: `ZKOecjUjr`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `1fmggwi`,
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
                                                                  className: p(j, `framer-dur6jx`),
                                                                  "data-framer-portal-id": `1fmggwi`,
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
                                                                `oRVFjTv3y`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-cmvfo2`),
                                                                "data-framer-portal-id": `1fmggwi`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-1r6eddc`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-awwng4`,
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
                                                                          className: `framer-qnub7r`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-4x27sg`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-15lr09l`,
                                                                            layoutId: `koKZlt_tj`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      action: `https://api.framer.com/forms/v1/forms/5b2f87b0-174c-4e20-9356-631462fbaef5/submit`,
                                                                      className: `framer-19ejums`,
                                                                      nodeId: `AQBnCAsUd`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-1y47fe0`,
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
                                                                                  className: `framer-d1wj67`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-80wswx`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1wlqyd5`,
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
                                                                                  className: `framer-e0d3s7`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-efu2v0`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-kc7ipd`,
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
                                                                                  className: `framer-8mugth`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-450dhb`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-103n2ch`,
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
                                                                                  className: `framer-1f2o20k`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1nmdl27`,
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
                                                                                className: `framer-szt1az-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `RrcF2qTYY`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `RrcF2qTYY`,
                                                                                  layoutId: `RrcF2qTYY`,
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
                                          href: { webPageId: `tNxpBwJFz` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `tNxpBwJFz` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(g, {
                                          breakpoint: w,
                                          overrides: {
                                            K4L7_usyj: {
                                              width: `373px`,
                                              y: (f?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 832,
                                            },
                                          },
                                          children: s(S, {
                                            height: 400,
                                            children: c(v, {
                                              className: `framer-1u9hc7v-container`,
                                              id: `1u9hc7v`,
                                              nodeId: `XPc6fQ4D1`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(g, {
                                                  breakpoint: w,
                                                  overrides: { K4L7_usyj: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 450,
                                                        pixelWidth: 447,
                                                        src: `../../assets/images/fxIJOG10Q8Qy4ezAOw8Nn7IvJA.png`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `XPc6fQ4D1`,
                                                    jTs_fuWrm: k({ overlay: e }),
                                                    JWP0bNV85: `Push Mount`,
                                                    layoutId: `XPc6fQ4D1`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: `ZKOecjUjr`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `1u9hc7v`,
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
                                                                  className: p(j, `framer-oi8rgc`),
                                                                  "data-framer-portal-id": `1u9hc7v`,
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
                                                                `GSBimAiox`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-1g3v6vy`),
                                                                "data-framer-portal-id": `1u9hc7v`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-11io8qh`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-eun8dj`,
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
                                                                          className: `framer-82ptrt`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-nnou28`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-1vayaie`,
                                                                            layoutId: `zdp6IJB2w`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      action: `https://api.framer.com/forms/v1/forms/94445d44-38fa-475d-9567-2ec384d2a616/submit`,
                                                                      className: `framer-1tnok9l`,
                                                                      nodeId: `bcP45nbC0`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-16cqszw`,
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
                                                                                  className: `framer-zyciey`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1dw8wcz`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-146ibk7`,
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
                                                                                  className: `framer-1syeo6i`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1s2lpf3`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-8yo2mw`,
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
                                                                                  className: `framer-3yrxio`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-uk3q13`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-165tw5y`,
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
                                                                                  className: `framer-1kfscrw`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-18fhha1`,
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
                                                                                className: `framer-1ad9cm-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `KmpoKCNO4`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `KmpoKCNO4`,
                                                                                  layoutId: `KmpoKCNO4`,
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
                                          href: { webPageId: `AXP8w_jiy` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `AXP8w_jiy` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(g, {
                                          breakpoint: w,
                                          overrides: {
                                            K4L7_usyj: {
                                              width: `373px`,
                                              y: (f?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 832,
                                            },
                                          },
                                          children: s(S, {
                                            height: 400,
                                            children: c(v, {
                                              className: `framer-75lx4n-container`,
                                              id: `75lx4n`,
                                              nodeId: `a8GDHlgDD`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(g, {
                                                  breakpoint: w,
                                                  overrides: { K4L7_usyj: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 1e3,
                                                        pixelWidth: 1e3,
                                                        src: `../../assets/images/ic3Qw04OwMxBS1ctGLX9lgBmOc.png`,
                                                        srcSet: `../../assets/images/ic3Qw04OwMxBS1ctGLX9lgBmOc.png?scale-down-to=512&width=1000&height=1000 512w,../../assets/images/ic3Qw04OwMxBS1ctGLX9lgBmOc.png 1000w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `a8GDHlgDD`,
                                                    jTs_fuWrm: k({ overlay: e }),
                                                    JWP0bNV85: `Cable Tie UV Protection`,
                                                    layoutId: `a8GDHlgDD`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: `ZKOecjUjr`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `75lx4n`,
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
                                                                  className: p(j, `framer-h3ddgk`),
                                                                  "data-framer-portal-id": `75lx4n`,
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
                                                                `pnntSVwwL`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-pbg1jl`),
                                                                "data-framer-portal-id": `75lx4n`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-imaqrh`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-2xr05j`,
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
                                                                          className: `framer-1kbe1bz`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-16l3u6s`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-1t85kro`,
                                                                            layoutId: `qy5LH2GTk`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      action: `https://api.framer.com/forms/v1/forms/a652eb65-b808-4828-af0a-709e32aecdaa/submit`,
                                                                      className: `framer-1ip61a5`,
                                                                      nodeId: `tAayxpL9D`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-10eoxj0`,
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
                                                                                  className: `framer-1060iwi`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-ud4j4f`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-s4sfx0`,
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
                                                                                  className: `framer-1e4im0z`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-6mbbaa`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1xuejun`,
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
                                                                                  className: `framer-6plnx9`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-l4gx2r`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-40ar5u`,
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
                                                                                  className: `framer-d166zn`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-lr3clx`,
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
                                                                                className: `framer-62gyns-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `YueN249hs`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `YueN249hs`,
                                                                                  layoutId: `YueN249hs`,
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
                                          href: { webPageId: `e3xjmT_e2` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `e3xjmT_e2` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(g, {
                                          breakpoint: w,
                                          overrides: {
                                            K4L7_usyj: {
                                              width: `373px`,
                                              y: (f?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1248,
                                            },
                                          },
                                          children: s(S, {
                                            height: 400,
                                            children: c(v, {
                                              className: `framer-2mizqk-container`,
                                              id: `2mizqk`,
                                              nodeId: `wFRbhHKm1`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(g, {
                                                  breakpoint: w,
                                                  overrides: { K4L7_usyj: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 214,
                                                        pixelWidth: 320,
                                                        src: `../../assets/images/WXYNZt5T1WBnj5vMCxxwRUuZY0.webp`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `wFRbhHKm1`,
                                                    jTs_fuWrm: k({ overlay: e }),
                                                    JWP0bNV85: `Cable Tie Mount`,
                                                    layoutId: `wFRbhHKm1`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: `ZKOecjUjr`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `2mizqk`,
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
                                                                  className: p(j, `framer-1g89tj9`),
                                                                  "data-framer-portal-id": `2mizqk`,
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
                                                                `rWWdlEcxN`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-xw7pye`),
                                                                "data-framer-portal-id": `2mizqk`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-4t8tgs`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-1hn910s`,
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
                                                                          className: `framer-yj1qm6`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-1x7c2y4`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-a5b5i4`,
                                                                            layoutId: `NDhR0OW2g`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      action: `https://api.framer.com/forms/v1/forms/f893c5b9-79fe-47dd-9358-6ce0e2053e31/submit`,
                                                                      className: `framer-1rm1a03`,
                                                                      nodeId: `Bpps7pDzw`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-180yt0r`,
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
                                                                                  className: `framer-1dixv24`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1mb9n6c`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1cef712`,
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
                                                                                  className: `framer-cyffnd`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-oxcch0`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-18latnc`,
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
                                                                                  className: `framer-1iswml3`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-155frkd`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1imr9wo`,
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
                                                                                  className: `framer-8mrl89`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-ed95eu`,
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
                                                                                className: `framer-z6n04t-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `H7zzgcV1s`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `H7zzgcV1s`,
                                                                                  layoutId: `H7zzgcV1s`,
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
                                          href: { webPageId: `s3puP6vtU` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `s3puP6vtU` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(g, {
                                          breakpoint: w,
                                          overrides: {
                                            K4L7_usyj: {
                                              width: `373px`,
                                              y: (f?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1248,
                                            },
                                          },
                                          children: s(S, {
                                            height: 400,
                                            children: c(v, {
                                              className: `framer-okhh8i-container`,
                                              id: `okhh8i`,
                                              nodeId: `mW9N3KkTD`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(g, {
                                                  breakpoint: w,
                                                  overrides: { K4L7_usyj: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 350,
                                                        pixelWidth: 776,
                                                        src: `../../assets/images/pC3mtgGlEXZ4NI2eOFwzgQdSHpQ.png`,
                                                        srcSet: `../../assets/images/pC3mtgGlEXZ4NI2eOFwzgQdSHpQ.png?scale-down-to=512&width=776&height=350 512w,../../assets/images/pC3mtgGlEXZ4NI2eOFwzgQdSHpQ.png 776w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `mW9N3KkTD`,
                                                    jTs_fuWrm: k({ overlay: e }),
                                                    JWP0bNV85: `Cable Tie`,
                                                    layoutId: `mW9N3KkTD`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: `ZKOecjUjr`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `okhh8i`,
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
                                                                  className: p(j, `framer-ruuhf5`),
                                                                  "data-framer-portal-id": `okhh8i`,
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
                                                                `WjkvzUO_S`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-12a5i9s`),
                                                                "data-framer-portal-id": `okhh8i`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-1nhau90`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-1jhazuu`,
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
                                                                          className: `framer-18m7ib5`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-1wpnudw`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-12hw5mj`,
                                                                            layoutId: `PITceLN1o`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      action: `https://api.framer.com/forms/v1/forms/bf4cd2ea-6624-48a4-a078-ececd0000b8f/submit`,
                                                                      className: `framer-1q7gtm8`,
                                                                      nodeId: `jgh0JBLkI`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-ul7whg`,
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
                                                                                  className: `framer-vhnzhf`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-2bi3np`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1qir9z0`,
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
                                                                                  className: `framer-20slp8`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-hftgth`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1ifsy2k`,
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
                                                                                  className: `framer-ta64z8`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1yzk1vw`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-jdx2or`,
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
                                                                                  className: `framer-157azdd`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-91zdxj`,
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
                                                                                className: `framer-1oy794r-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `qxaak_fFl`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `qxaak_fFl`,
                                                                                  layoutId: `qxaak_fFl`,
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
                                          href: { webPageId: `XsyIKqhk6` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `XsyIKqhk6` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(g, {
                                          breakpoint: w,
                                          overrides: {
                                            K4L7_usyj: {
                                              width: `373px`,
                                              y: (f?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1664,
                                            },
                                          },
                                          children: s(S, {
                                            height: 400,
                                            children: c(v, {
                                              className: `framer-5a2rbt-container`,
                                              id: `5a2rbt`,
                                              nodeId: `l2e6MyadS`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(g, {
                                                  breakpoint: w,
                                                  overrides: { K4L7_usyj: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 798,
                                                        pixelWidth: 1420,
                                                        src: `../../assets/images/uMY6WYaU8mFfkz6ONSp6y670Ss.webp`,
                                                        srcSet: `../../assets/images/uMY6WYaU8mFfkz6ONSp6y670Ss.webp?scale-down-to=512&width=1420&height=798 512w,../../assets/images/uMY6WYaU8mFfkz6ONSp6y670Ss.webp?scale-down-to=1024&width=1420&height=798 1024w,../../assets/images/uMY6WYaU8mFfkz6ONSp6y670Ss.webp 1420w`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `l2e6MyadS`,
                                                    jTs_fuWrm: k({ overlay: e }),
                                                    JWP0bNV85: `Cable Tie Flat Mount`,
                                                    layoutId: `l2e6MyadS`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: `ZKOecjUjr`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `5a2rbt`,
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
                                                                  className: p(j, `framer-hl3yfn`),
                                                                  "data-framer-portal-id": `5a2rbt`,
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
                                                                `A2v9Jkrqv`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-wtprs2`),
                                                                "data-framer-portal-id": `5a2rbt`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-4gvfn`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-1c9kq3k`,
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
                                                                          className: `framer-1p44l50`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-8fpr9p`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-15kd3aw`,
                                                                            layoutId: `mqyUmZ3QY`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      action: `https://api.framer.com/forms/v1/forms/9864fb7f-0a2f-46a4-9d6a-1fc9862e9f3c/submit`,
                                                                      className: `framer-r7d5qh`,
                                                                      nodeId: `cTX84S1Pc`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-1g2bcry`,
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
                                                                                  className: `framer-9qg6cv`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-qhjghu`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-18g294o`,
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
                                                                                  className: `framer-8xn4xr`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1xqexve`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1epp1l2`,
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
                                                                                  className: `framer-1jh9spa`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1cj2gxp`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1pafpr6`,
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
                                                                                  className: `framer-1vq6md5`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1l5v0e2`,
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
                                                                                className: `framer-16x8nd1-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `s8A7A6Y2k`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `s8A7A6Y2k`,
                                                                                  layoutId: `s8A7A6Y2k`,
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
                                          href: { webPageId: `natPZmXwR` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { webPageId: `natPZmXwR` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (t) =>
                                        s(g, {
                                          breakpoint: w,
                                          overrides: {
                                            K4L7_usyj: {
                                              width: `373px`,
                                              y: (f?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1664,
                                            },
                                          },
                                          children: s(S, {
                                            height: 400,
                                            children: c(v, {
                                              className: `framer-1mmragd-container`,
                                              id: `1mmragd`,
                                              nodeId: `CfJYjy9qX`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(g, {
                                                  breakpoint: w,
                                                  overrides: { K4L7_usyj: { oSlFkYxO1: t[1] } },
                                                  children: s(F, {
                                                    BlDyCL1Hj: q(
                                                      {
                                                        pixelHeight: 450,
                                                        pixelWidth: 447,
                                                        src: `../../assets/images/dqlXMuDyFJpDLpNt44rXN8OWYLI.png`,
                                                      },
                                                      ``
                                                    ),
                                                    height: `100%`,
                                                    id: `CfJYjy9qX`,
                                                    jTs_fuWrm: k({ overlay: e }),
                                                    JWP0bNV85: `Coloured Cable Tie`,
                                                    layoutId: `CfJYjy9qX`,
                                                    oSlFkYxO1: t[0],
                                                    style: { width: `100%` },
                                                    variant: `ZKOecjUjr`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `1mmragd`,
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
                                                                  className: p(j, `framer-1bpvwaf`),
                                                                  "data-framer-portal-id": `1mmragd`,
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
                                                                `xs3T3cvaE`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-1tt2weq`),
                                                                "data-framer-portal-id": `1mmragd`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-193y8mg`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-1ybm3wt`,
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
                                                                          className: `framer-178tswv`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-1d2bm7d`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-1m3j6uu`,
                                                                            layoutId: `PBLgSAlDO`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      action: `https://api.framer.com/forms/v1/forms/2f044b79-2b1e-47ee-9d8a-ef1df7cce8a8/submit`,
                                                                      className: `framer-wwoae4`,
                                                                      nodeId: `V5pgJogJA`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-dhq0gv`,
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
                                                                                  className: `framer-kgpcnr`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1tqmpmn`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1eekiyx`,
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
                                                                                  className: `framer-1mqz4er`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1y9vb35`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1p0z2rg`,
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
                                                                                  className: `framer-ahw37b`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-aciaam`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1uhuwth`,
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
                                                                                  className: `framer-v9zid`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-ev0fyn`,
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
                                                                                className: `framer-11ar9u6-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `vzHYjNJXt`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `vzHYjNJXt`,
                                                                                  layoutId: `vzHYjNJXt`,
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
                    V() &&
                      c(l.section, {
                        className: `framer-opfamz hidden-s1phfx`,
                        "data-framer-name": `Classes`,
                        id: H,
                        layout: I,
                        ref: Me,
                        children: [
                          Q() &&
                            c(`section`, {
                              className: `framer-1ecitmq hidden-2l3yge`,
                              "data-framer-name": `Classes`,
                              id: $,
                              ref: Pe,
                              children: [
                                c(`div`, {
                                  className: `framer-179eaxy`,
                                  "data-framer-name": `Text`,
                                  children: [
                                    s(b, {
                                      href: { webPageId: `AttXBZoeD` },
                                      motionChild: !0,
                                      nodeId: `chvBXBFZ1`,
                                      openInNewTab: !1,
                                      scopeId: `yIPN70dPu`,
                                      children: s(l.a, {
                                        className: `framer-jmdu3p framer-1eh5aws`,
                                        children: s(b, {
                                          href: { webPageId: `AttXBZoeD` },
                                          motionChild: !0,
                                          nodeId: `aEajY405U`,
                                          openInNewTab: !1,
                                          scopeId: `yIPN70dPu`,
                                          children: s(l.a, {
                                            className: `framer-72arzb framer-1eh5aws`,
                                            children: s(N, {
                                              animated: !1,
                                              BKVe8Pgvw: !0,
                                              className: `framer-zhstii`,
                                              fICyAUQY1: !0,
                                              layoutId: `nkDJBJ5XZ`,
                                              lKf_CQTz5: !0,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    s(g, {
                                      breakpoint: w,
                                      overrides: {
                                        dQetuOrvK: {
                                          y: (f?.y || 0) + 0 + 0 + 96 + 0 + 0 + 0 + 0 + 36,
                                        },
                                      },
                                      children: s(S, {
                                        height: 26,
                                        children: s(R, {
                                          __framer__animate: { transition: G },
                                          __framer__animateOnce: !0,
                                          __framer__enter: W,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-r0jd21-container`,
                                          nodeId: `dod8lhSdF`,
                                          rendersWithMotion: !0,
                                          scopeId: `yIPN70dPu`,
                                          children: s(P, {
                                            ggTbrSuHk: `Fasteners, Safety items & Cable ties`,
                                            height: `100%`,
                                            id: `dod8lhSdF`,
                                            layoutId: `dod8lhSdF`,
                                            variant: `z6oSgdJxk`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    s(z, {
                                      __framer__animate: { transition: K },
                                      __framer__animateOnce: !0,
                                      __framer__enter: W,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __fromCanvasComponent: !0,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      children: s(r, {
                                        children: s(`h3`, {
                                          className: `framer-styles-preset-1d7ew99`,
                                          "data-styles-preset": `nl385Jssa`,
                                          children: `Cable Ties`,
                                        }),
                                      }),
                                      className: `framer-1t7r456`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                c(`div`, {
                                  className: `framer-jwbmkg`,
                                  "data-framer-name": `ClassesGallery`,
                                  children: [
                                    s(Z, {
                                      dismissWithEsc: !0,
                                      children: (e) =>
                                        s(i, {
                                          children: s(m, {
                                            links: [
                                              {
                                                href: { webPageId: `iTo4f0vNa` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `iTo4f0vNa` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (t) =>
                                              s(g, {
                                                breakpoint: w,
                                                overrides: {
                                                  dQetuOrvK: {
                                                    width: `323px`,
                                                    y:
                                                      (f?.y || 0) +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      0 +
                                                      0 +
                                                      164.4 +
                                                      0 +
                                                      0,
                                                  },
                                                },
                                                children: s(S, {
                                                  height: 400,
                                                  children: c(v, {
                                                    className: `framer-1ml48y-container`,
                                                    id: `1ml48y`,
                                                    nodeId: `ai5Nn5sWs`,
                                                    scopeId: `yIPN70dPu`,
                                                    children: [
                                                      s(g, {
                                                        breakpoint: w,
                                                        overrides: {
                                                          dQetuOrvK: { oSlFkYxO1: t[1] },
                                                        },
                                                        children: s(F, {
                                                          BlDyCL1Hj: q(
                                                            {
                                                              pixelHeight: 450,
                                                              pixelWidth: 447,
                                                              src: `../../assets/images/GUiRf8E5CZMWQhD8F5T2HblIDc.png`,
                                                            },
                                                            ``
                                                          ),
                                                          height: `100%`,
                                                          id: `ai5Nn5sWs`,
                                                          jTs_fuWrm: k({ overlay: e }),
                                                          JWP0bNV85: `Stainless Steel Cable Tie`,
                                                          layoutId: `ai5Nn5sWs`,
                                                          oSlFkYxO1: t[0],
                                                          style: { width: `100%` },
                                                          variant: `ZKOecjUjr`,
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                      s(u, {
                                                        children:
                                                          e.visible &&
                                                          s(i, {
                                                            children: o(
                                                              s(h, {
                                                                triggerId: `1ml48y`,
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
                                                                            ease: [
                                                                              0.5, 0, 0.88, 0.77,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        className: p(
                                                                          j,
                                                                          `framer-1ipw95r`
                                                                        ),
                                                                        "data-framer-portal-id": `1ml48y`,
                                                                        exit: {
                                                                          opacity: 0,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.12, 0.23, 0.5, 1,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        initial: { opacity: 0 },
                                                                        onTap: () => e.hide(),
                                                                      },
                                                                      `kHGbvn8vI`
                                                                    ),
                                                                    s(l.div, {
                                                                      className: p(
                                                                        j,
                                                                        `framer-1dripwe`
                                                                      ),
                                                                      "data-framer-portal-id": `1ml48y`,
                                                                      transformTemplate: J,
                                                                      children: c(l.div, {
                                                                        className: `framer-1yhpmtv`,
                                                                        children: [
                                                                          c(l.div, {
                                                                            className: `framer-18rrhhj`,
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
                                                                                className: `framer-uuj2dg`,
                                                                                fonts: [
                                                                                  `Inter-Bold`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              s(l.div, {
                                                                                className: `framer-ffkkf8`,
                                                                                onTap: A({
                                                                                  overlay: e,
                                                                                }),
                                                                                children: s(O, {
                                                                                  animated: !1,
                                                                                  className: `framer-1ncm6bu`,
                                                                                  layoutId: `ypZVpoFVL`,
                                                                                  UO5clYVeQ: !0,
                                                                                }),
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          s(y, {
                                                                            className: `framer-18epkk8`,
                                                                            nodeId: `wnYiiEZM7`,
                                                                            children: (e) =>
                                                                              c(i, {
                                                                                children: [
                                                                                  c(l.label, {
                                                                                    className: `framer-1ycbn5g`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Email`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-50kygf`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-qiff8c`,
                                                                                        inputName: `Email`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-1avqweb`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Mobile number`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-47x0u9`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-1w0zywz`,
                                                                                        inputName: `Mobile Number`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !1,
                                                                                        type: `tel`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-13wydlu`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Product Name`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-14as6c1`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-14vn1gx`,
                                                                                        inputName: `Product Name`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-symhiq`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Make, Model & Size`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-h6e7e8`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-a5vi5f`,
                                                                                        inputName: `Make, Model & Size`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !0,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  s(S, {
                                                                                    width: `221px`,
                                                                                    children: s(v, {
                                                                                      className: `framer-1jzzcdy-container`,
                                                                                      inComponentSlot:
                                                                                        !0,
                                                                                      isModuleExternal:
                                                                                        !0,
                                                                                      nodeId: `GA6wTbtHh`,
                                                                                      rendersWithMotion:
                                                                                        !0,
                                                                                      scopeId: `yIPN70dPu`,
                                                                                      children: s(
                                                                                        M,
                                                                                        {
                                                                                          height: `100%`,
                                                                                          id: `GA6wTbtHh`,
                                                                                          layoutId: `GA6wTbtHh`,
                                                                                          style: {
                                                                                            height: `100%`,
                                                                                            width: `100%`,
                                                                                          },
                                                                                          type: `submit`,
                                                                                          variant:
                                                                                            Y(
                                                                                              e,
                                                                                              {
                                                                                                pending: `n9wSMJDiA`,
                                                                                                success: `XKSibd1Ne`,
                                                                                              },
                                                                                              `Y6CHTJJM0`
                                                                                            ),
                                                                                          width: `100%`,
                                                                                        }
                                                                                      ),
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
                                                href: { webPageId: `K6ObOYBQA` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `K6ObOYBQA` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (t) =>
                                              s(g, {
                                                breakpoint: w,
                                                overrides: {
                                                  dQetuOrvK: {
                                                    width: `323px`,
                                                    y:
                                                      (f?.y || 0) +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      0 +
                                                      0 +
                                                      164.4 +
                                                      0 +
                                                      416,
                                                  },
                                                },
                                                children: s(S, {
                                                  height: 400,
                                                  children: c(v, {
                                                    className: `framer-7jgraq-container`,
                                                    id: `7jgraq`,
                                                    nodeId: `CV7wE0wPw`,
                                                    scopeId: `yIPN70dPu`,
                                                    children: [
                                                      s(g, {
                                                        breakpoint: w,
                                                        overrides: {
                                                          dQetuOrvK: { oSlFkYxO1: t[1] },
                                                        },
                                                        children: s(F, {
                                                          BlDyCL1Hj: q(
                                                            {
                                                              pixelHeight: 450,
                                                              pixelWidth: 447,
                                                              src: `../../assets/images/6HbmwHz9Ug0Cg3U1Z7d95EVlI3U.png`,
                                                            },
                                                            ``
                                                          ),
                                                          height: `100%`,
                                                          id: `CV7wE0wPw`,
                                                          jTs_fuWrm: k({ overlay: e }),
                                                          JWP0bNV85: `Tag Cable Tie`,
                                                          layoutId: `CV7wE0wPw`,
                                                          oSlFkYxO1: t[0],
                                                          style: { width: `100%` },
                                                          variant: `ZKOecjUjr`,
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                      s(u, {
                                                        children:
                                                          e.visible &&
                                                          s(i, {
                                                            children: o(
                                                              s(h, {
                                                                triggerId: `7jgraq`,
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
                                                                            ease: [
                                                                              0.5, 0, 0.88, 0.77,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        className: p(
                                                                          j,
                                                                          `framer-1x2la28`
                                                                        ),
                                                                        "data-framer-portal-id": `7jgraq`,
                                                                        exit: {
                                                                          opacity: 0,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.12, 0.23, 0.5, 1,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        initial: { opacity: 0 },
                                                                        onTap: () => e.hide(),
                                                                      },
                                                                      `wC4WpEXUk`
                                                                    ),
                                                                    s(l.div, {
                                                                      className: p(
                                                                        j,
                                                                        `framer-vlzc60`
                                                                      ),
                                                                      "data-framer-portal-id": `7jgraq`,
                                                                      transformTemplate: J,
                                                                      children: c(l.div, {
                                                                        className: `framer-1r0m9pk`,
                                                                        children: [
                                                                          c(l.div, {
                                                                            className: `framer-17cmu9t`,
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
                                                                                className: `framer-f2cppv`,
                                                                                fonts: [
                                                                                  `Inter-Bold`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              s(l.div, {
                                                                                className: `framer-jueti2`,
                                                                                onTap: A({
                                                                                  overlay: e,
                                                                                }),
                                                                                children: s(O, {
                                                                                  animated: !1,
                                                                                  className: `framer-2j5m79`,
                                                                                  layoutId: `oBJTvMLBh`,
                                                                                  UO5clYVeQ: !0,
                                                                                }),
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          s(y, {
                                                                            className: `framer-1g4schj`,
                                                                            nodeId: `Ip6Q3jLoj`,
                                                                            children: (e) =>
                                                                              c(i, {
                                                                                children: [
                                                                                  c(l.label, {
                                                                                    className: `framer-1m3xvtn`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Email`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-11e0tbe`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-cqv3ak`,
                                                                                        inputName: `Email`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-ko48rr`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Mobile number`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1qrkot2`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-hc6m81`,
                                                                                        inputName: `Mobile Number`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !1,
                                                                                        type: `tel`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-14nqe7q`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Product Name`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1ar5yas`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-1tccihc`,
                                                                                        inputName: `Product Name`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-1dg74h1`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Make, Model & Size`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1q4qvfg`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-1by98xf`,
                                                                                        inputName: `Make, Model & Size`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !0,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  s(S, {
                                                                                    width: `221px`,
                                                                                    children: s(v, {
                                                                                      className: `framer-14ot7sy-container`,
                                                                                      inComponentSlot:
                                                                                        !0,
                                                                                      isModuleExternal:
                                                                                        !0,
                                                                                      nodeId: `jKci2I7v0`,
                                                                                      rendersWithMotion:
                                                                                        !0,
                                                                                      scopeId: `yIPN70dPu`,
                                                                                      children: s(
                                                                                        M,
                                                                                        {
                                                                                          height: `100%`,
                                                                                          id: `jKci2I7v0`,
                                                                                          layoutId: `jKci2I7v0`,
                                                                                          style: {
                                                                                            height: `100%`,
                                                                                            width: `100%`,
                                                                                          },
                                                                                          type: `submit`,
                                                                                          variant:
                                                                                            Y(
                                                                                              e,
                                                                                              {
                                                                                                pending: `n9wSMJDiA`,
                                                                                                success: `XKSibd1Ne`,
                                                                                              },
                                                                                              `Y6CHTJJM0`
                                                                                            ),
                                                                                          width: `100%`,
                                                                                        }
                                                                                      ),
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
                                                href: { webPageId: `CnkHM0EVU` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `CnkHM0EVU` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (t) =>
                                              s(g, {
                                                breakpoint: w,
                                                overrides: {
                                                  dQetuOrvK: {
                                                    width: `323px`,
                                                    y:
                                                      (f?.y || 0) +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      0 +
                                                      0 +
                                                      164.4 +
                                                      0 +
                                                      832,
                                                  },
                                                },
                                                children: s(S, {
                                                  height: 400,
                                                  children: c(v, {
                                                    className: `framer-hxj2gy-container`,
                                                    id: `hxj2gy`,
                                                    nodeId: `Ml7I8ar9b`,
                                                    scopeId: `yIPN70dPu`,
                                                    children: [
                                                      s(g, {
                                                        breakpoint: w,
                                                        overrides: {
                                                          dQetuOrvK: { oSlFkYxO1: t[1] },
                                                        },
                                                        children: s(F, {
                                                          BlDyCL1Hj: q(
                                                            {
                                                              pixelHeight: 2400,
                                                              pixelWidth: 3200,
                                                              src: `../../assets/images/E8O7Nh8j4y8Rczr3bHzZ1nWEw.jpeg?width=3200&height=2400`,
                                                              srcSet: `../../assets/images/E8O7Nh8j4y8Rczr3bHzZ1nWEw.jpeg?scale-down-to=512&width=3200&height=2400 512w,../../assets/images/E8O7Nh8j4y8Rczr3bHzZ1nWEw.jpeg?scale-down-to=1024&width=3200&height=2400 1024w,../../assets/images/E8O7Nh8j4y8Rczr3bHzZ1nWEw.jpeg 2048w,../../assets/images/E8O7Nh8j4y8Rczr3bHzZ1nWEw.jpeg?width=3200&height=2400 3200w`,
                                                            },
                                                            ``
                                                          ),
                                                          height: `100%`,
                                                          id: `Ml7I8ar9b`,
                                                          jTs_fuWrm: k({ overlay: e }),
                                                          JWP0bNV85: `Security Seal Cable Tie`,
                                                          layoutId: `Ml7I8ar9b`,
                                                          oSlFkYxO1: t[0],
                                                          style: { width: `100%` },
                                                          variant: `ZKOecjUjr`,
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                      s(u, {
                                                        children:
                                                          e.visible &&
                                                          s(i, {
                                                            children: o(
                                                              s(h, {
                                                                triggerId: `hxj2gy`,
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
                                                                            ease: [
                                                                              0.5, 0, 0.88, 0.77,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        className: p(
                                                                          j,
                                                                          `framer-1gynr7s`
                                                                        ),
                                                                        "data-framer-portal-id": `hxj2gy`,
                                                                        exit: {
                                                                          opacity: 0,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.12, 0.23, 0.5, 1,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        initial: { opacity: 0 },
                                                                        onTap: () => e.hide(),
                                                                      },
                                                                      `Faps5dCO7`
                                                                    ),
                                                                    s(l.div, {
                                                                      className: p(
                                                                        j,
                                                                        `framer-1rt0vmz`
                                                                      ),
                                                                      "data-framer-portal-id": `hxj2gy`,
                                                                      transformTemplate: J,
                                                                      children: c(l.div, {
                                                                        className: `framer-1p4ekc6`,
                                                                        children: [
                                                                          c(l.div, {
                                                                            className: `framer-13wohn7`,
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
                                                                                className: `framer-a4kn9z`,
                                                                                fonts: [
                                                                                  `Inter-Bold`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              s(l.div, {
                                                                                className: `framer-1v3emyj`,
                                                                                onTap: A({
                                                                                  overlay: e,
                                                                                }),
                                                                                children: s(O, {
                                                                                  animated: !1,
                                                                                  className: `framer-eu6of1`,
                                                                                  layoutId: `ni4VrHFTZ`,
                                                                                  UO5clYVeQ: !0,
                                                                                }),
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          s(y, {
                                                                            className: `framer-1bbvr5i`,
                                                                            nodeId: `Y7Nlr_1yf`,
                                                                            children: (e) =>
                                                                              c(i, {
                                                                                children: [
                                                                                  c(l.label, {
                                                                                    className: `framer-1yizkby`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Email`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-zkopc8`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-eb6kd2`,
                                                                                        inputName: `Email`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-1haposc`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Mobile number`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-tzvotm`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-19khr7w`,
                                                                                        inputName: `Mobile Number`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !1,
                                                                                        type: `tel`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-1qmao93`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Product Name`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1ct8dq5`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-19c8va7`,
                                                                                        inputName: `Product Name`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-its19x`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Make, Model & Size`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-wdbalp`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-1v0elh6`,
                                                                                        inputName: `Make, Model & Size`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !0,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  s(S, {
                                                                                    width: `221px`,
                                                                                    children: s(v, {
                                                                                      className: `framer-1qpndxk-container`,
                                                                                      inComponentSlot:
                                                                                        !0,
                                                                                      isModuleExternal:
                                                                                        !0,
                                                                                      nodeId: `D4NjJEFkU`,
                                                                                      rendersWithMotion:
                                                                                        !0,
                                                                                      scopeId: `yIPN70dPu`,
                                                                                      children: s(
                                                                                        M,
                                                                                        {
                                                                                          height: `100%`,
                                                                                          id: `D4NjJEFkU`,
                                                                                          layoutId: `D4NjJEFkU`,
                                                                                          style: {
                                                                                            height: `100%`,
                                                                                            width: `100%`,
                                                                                          },
                                                                                          type: `submit`,
                                                                                          variant:
                                                                                            Y(
                                                                                              e,
                                                                                              {
                                                                                                pending: `n9wSMJDiA`,
                                                                                                success: `XKSibd1Ne`,
                                                                                              },
                                                                                              `Y6CHTJJM0`
                                                                                            ),
                                                                                          width: `100%`,
                                                                                        }
                                                                                      ),
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
                                                href: { webPageId: `zpfAKcJD2` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `zpfAKcJD2` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (t) =>
                                              s(g, {
                                                breakpoint: w,
                                                overrides: {
                                                  dQetuOrvK: {
                                                    width: `323px`,
                                                    y:
                                                      (f?.y || 0) +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      0 +
                                                      0 +
                                                      164.4 +
                                                      0 +
                                                      1248,
                                                  },
                                                },
                                                children: s(S, {
                                                  height: 400,
                                                  children: c(v, {
                                                    className: `framer-9ghiom-container`,
                                                    id: `9ghiom`,
                                                    nodeId: `ws_U6vSz7`,
                                                    scopeId: `yIPN70dPu`,
                                                    children: [
                                                      s(g, {
                                                        breakpoint: w,
                                                        overrides: {
                                                          dQetuOrvK: { oSlFkYxO1: t[1] },
                                                        },
                                                        children: s(F, {
                                                          BlDyCL1Hj: q(
                                                            {
                                                              pixelHeight: 450,
                                                              pixelWidth: 447,
                                                              src: `../../assets/images/3Gfh4KwKvJdLd293OVJNkgGCH0.png`,
                                                            },
                                                            ``
                                                          ),
                                                          height: `100%`,
                                                          id: `ws_U6vSz7`,
                                                          jTs_fuWrm: k({ overlay: e }),
                                                          JWP0bNV85: `Metal Tooth Cable Tie`,
                                                          layoutId: `ws_U6vSz7`,
                                                          oSlFkYxO1: t[0],
                                                          style: { width: `100%` },
                                                          variant: `ZKOecjUjr`,
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                      s(u, {
                                                        children:
                                                          e.visible &&
                                                          s(i, {
                                                            children: o(
                                                              s(h, {
                                                                triggerId: `9ghiom`,
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
                                                                            ease: [
                                                                              0.5, 0, 0.88, 0.77,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        className: p(
                                                                          j,
                                                                          `framer-721dwp`
                                                                        ),
                                                                        "data-framer-portal-id": `9ghiom`,
                                                                        exit: {
                                                                          opacity: 0,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.12, 0.23, 0.5, 1,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        initial: { opacity: 0 },
                                                                        onTap: () => e.hide(),
                                                                      },
                                                                      `B9qn48Hyj`
                                                                    ),
                                                                    s(l.div, {
                                                                      className: p(
                                                                        j,
                                                                        `framer-1uwjdwv`
                                                                      ),
                                                                      "data-framer-portal-id": `9ghiom`,
                                                                      transformTemplate: J,
                                                                      children: c(l.div, {
                                                                        className: `framer-19c0cit`,
                                                                        children: [
                                                                          c(l.div, {
                                                                            className: `framer-hzk2o6`,
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
                                                                                className: `framer-1ue1dvf`,
                                                                                fonts: [
                                                                                  `Inter-Bold`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              s(l.div, {
                                                                                className: `framer-1hfnfba`,
                                                                                onTap: A({
                                                                                  overlay: e,
                                                                                }),
                                                                                children: s(O, {
                                                                                  animated: !1,
                                                                                  className: `framer-1xk9z9a`,
                                                                                  layoutId: `VcqYPvsZo`,
                                                                                  UO5clYVeQ: !0,
                                                                                }),
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          s(y, {
                                                                            className: `framer-1dkwvm2`,
                                                                            nodeId: `oM_k30wPc`,
                                                                            children: (e) =>
                                                                              c(i, {
                                                                                children: [
                                                                                  c(l.label, {
                                                                                    className: `framer-zfn8pv`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Email`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1csx11r`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-7p9gku`,
                                                                                        inputName: `Email`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-nuo1am`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Mobile number`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-15uyzhb`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-qnvvgm`,
                                                                                        inputName: `Mobile Number`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !1,
                                                                                        type: `tel`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-szpgic`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Product Name`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-11n6ny3`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-1elpdoc`,
                                                                                        inputName: `Product Name`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-1y0yewr`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Make, Model & Size`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1mb78gg`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-1l4igt7`,
                                                                                        inputName: `Make, Model & Size`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !0,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  s(S, {
                                                                                    width: `221px`,
                                                                                    children: s(v, {
                                                                                      className: `framer-1ixp8zh-container`,
                                                                                      inComponentSlot:
                                                                                        !0,
                                                                                      isModuleExternal:
                                                                                        !0,
                                                                                      nodeId: `s7qmlomxQ`,
                                                                                      rendersWithMotion:
                                                                                        !0,
                                                                                      scopeId: `yIPN70dPu`,
                                                                                      children: s(
                                                                                        M,
                                                                                        {
                                                                                          height: `100%`,
                                                                                          id: `s7qmlomxQ`,
                                                                                          layoutId: `s7qmlomxQ`,
                                                                                          style: {
                                                                                            height: `100%`,
                                                                                            width: `100%`,
                                                                                          },
                                                                                          type: `submit`,
                                                                                          variant:
                                                                                            Y(
                                                                                              e,
                                                                                              {
                                                                                                pending: `n9wSMJDiA`,
                                                                                                success: `XKSibd1Ne`,
                                                                                              },
                                                                                              `Y6CHTJJM0`
                                                                                            ),
                                                                                          width: `100%`,
                                                                                        }
                                                                                      ),
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
                                                href: { webPageId: `tNxpBwJFz` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `tNxpBwJFz` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (t) =>
                                              s(g, {
                                                breakpoint: w,
                                                overrides: {
                                                  dQetuOrvK: {
                                                    width: `323px`,
                                                    y:
                                                      (f?.y || 0) +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      0 +
                                                      0 +
                                                      164.4 +
                                                      0 +
                                                      1664,
                                                  },
                                                },
                                                children: s(S, {
                                                  height: 400,
                                                  children: c(v, {
                                                    className: `framer-7g7vgb-container`,
                                                    id: `7g7vgb`,
                                                    nodeId: `bijlTTRkd`,
                                                    scopeId: `yIPN70dPu`,
                                                    children: [
                                                      s(g, {
                                                        breakpoint: w,
                                                        overrides: {
                                                          dQetuOrvK: { oSlFkYxO1: t[1] },
                                                        },
                                                        children: s(F, {
                                                          BlDyCL1Hj: q(
                                                            {
                                                              pixelHeight: 450,
                                                              pixelWidth: 447,
                                                              src: `../../assets/images/fxIJOG10Q8Qy4ezAOw8Nn7IvJA.png`,
                                                            },
                                                            ``
                                                          ),
                                                          height: `100%`,
                                                          id: `bijlTTRkd`,
                                                          jTs_fuWrm: k({ overlay: e }),
                                                          JWP0bNV85: `Push Mount`,
                                                          layoutId: `bijlTTRkd`,
                                                          oSlFkYxO1: t[0],
                                                          style: { width: `100%` },
                                                          variant: `ZKOecjUjr`,
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                      s(u, {
                                                        children:
                                                          e.visible &&
                                                          s(i, {
                                                            children: o(
                                                              s(h, {
                                                                triggerId: `7g7vgb`,
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
                                                                            ease: [
                                                                              0.5, 0, 0.88, 0.77,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        className: p(
                                                                          j,
                                                                          `framer-1aniyxi`
                                                                        ),
                                                                        "data-framer-portal-id": `7g7vgb`,
                                                                        exit: {
                                                                          opacity: 0,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.12, 0.23, 0.5, 1,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        initial: { opacity: 0 },
                                                                        onTap: () => e.hide(),
                                                                      },
                                                                      `vERG6zdgx`
                                                                    ),
                                                                    s(l.div, {
                                                                      className: p(
                                                                        j,
                                                                        `framer-igh8ma`
                                                                      ),
                                                                      "data-framer-portal-id": `7g7vgb`,
                                                                      transformTemplate: J,
                                                                      children: c(l.div, {
                                                                        className: `framer-19kftbe`,
                                                                        children: [
                                                                          c(l.div, {
                                                                            className: `framer-1om6h6z`,
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
                                                                                className: `framer-ndcx7z`,
                                                                                fonts: [
                                                                                  `Inter-Bold`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              s(l.div, {
                                                                                className: `framer-8ob2mt`,
                                                                                onTap: A({
                                                                                  overlay: e,
                                                                                }),
                                                                                children: s(O, {
                                                                                  animated: !1,
                                                                                  className: `framer-98krgk`,
                                                                                  layoutId: `DSaY2Bl7I`,
                                                                                  UO5clYVeQ: !0,
                                                                                }),
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          s(y, {
                                                                            className: `framer-1kaqpfx`,
                                                                            nodeId: `DKhfUCxLy`,
                                                                            children: (e) =>
                                                                              c(i, {
                                                                                children: [
                                                                                  c(l.label, {
                                                                                    className: `framer-vneovh`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Email`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-awby6f`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-1q0lih3`,
                                                                                        inputName: `Email`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-1hblkpt`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Mobile number`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-zi0vct`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-1vwnnvt`,
                                                                                        inputName: `Mobile Number`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !1,
                                                                                        type: `tel`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-mbiyxn`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Product Name`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1rvqecg`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-14iuvsb`,
                                                                                        inputName: `Product Name`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-carvei`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Make, Model & Size`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1rzo5or`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-1rr8xca`,
                                                                                        inputName: `Make, Model & Size`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !0,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  s(S, {
                                                                                    width: `221px`,
                                                                                    children: s(v, {
                                                                                      className: `framer-xn6f2u-container`,
                                                                                      inComponentSlot:
                                                                                        !0,
                                                                                      isModuleExternal:
                                                                                        !0,
                                                                                      nodeId: `MCtFtOdFD`,
                                                                                      rendersWithMotion:
                                                                                        !0,
                                                                                      scopeId: `yIPN70dPu`,
                                                                                      children: s(
                                                                                        M,
                                                                                        {
                                                                                          height: `100%`,
                                                                                          id: `MCtFtOdFD`,
                                                                                          layoutId: `MCtFtOdFD`,
                                                                                          style: {
                                                                                            height: `100%`,
                                                                                            width: `100%`,
                                                                                          },
                                                                                          type: `submit`,
                                                                                          variant:
                                                                                            Y(
                                                                                              e,
                                                                                              {
                                                                                                pending: `n9wSMJDiA`,
                                                                                                success: `XKSibd1Ne`,
                                                                                              },
                                                                                              `Y6CHTJJM0`
                                                                                            ),
                                                                                          width: `100%`,
                                                                                        }
                                                                                      ),
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
                                                href: { webPageId: `AXP8w_jiy` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `AXP8w_jiy` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (t) =>
                                              s(g, {
                                                breakpoint: w,
                                                overrides: {
                                                  dQetuOrvK: {
                                                    width: `323px`,
                                                    y:
                                                      (f?.y || 0) +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      0 +
                                                      0 +
                                                      164.4 +
                                                      0 +
                                                      2080,
                                                  },
                                                },
                                                children: s(S, {
                                                  height: 400,
                                                  children: c(v, {
                                                    className: `framer-10yitsd-container`,
                                                    id: `10yitsd`,
                                                    nodeId: `Kc03yU3dx`,
                                                    scopeId: `yIPN70dPu`,
                                                    children: [
                                                      s(g, {
                                                        breakpoint: w,
                                                        overrides: {
                                                          dQetuOrvK: { oSlFkYxO1: t[1] },
                                                        },
                                                        children: s(F, {
                                                          BlDyCL1Hj: q(
                                                            {
                                                              pixelHeight: 1e3,
                                                              pixelWidth: 1e3,
                                                              src: `../../assets/images/ic3Qw04OwMxBS1ctGLX9lgBmOc.png`,
                                                              srcSet: `../../assets/images/ic3Qw04OwMxBS1ctGLX9lgBmOc.png?scale-down-to=512&width=1000&height=1000 512w,../../assets/images/ic3Qw04OwMxBS1ctGLX9lgBmOc.png 1000w`,
                                                            },
                                                            ``
                                                          ),
                                                          height: `100%`,
                                                          id: `Kc03yU3dx`,
                                                          jTs_fuWrm: k({ overlay: e }),
                                                          JWP0bNV85: `Cable Tie UV Protection`,
                                                          layoutId: `Kc03yU3dx`,
                                                          oSlFkYxO1: t[0],
                                                          style: { width: `100%` },
                                                          variant: `ZKOecjUjr`,
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                      s(u, {
                                                        children:
                                                          e.visible &&
                                                          s(i, {
                                                            children: o(
                                                              s(h, {
                                                                triggerId: `10yitsd`,
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
                                                                            ease: [
                                                                              0.5, 0, 0.88, 0.77,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        className: p(
                                                                          j,
                                                                          `framer-gerag1`
                                                                        ),
                                                                        "data-framer-portal-id": `10yitsd`,
                                                                        exit: {
                                                                          opacity: 0,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.12, 0.23, 0.5, 1,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        initial: { opacity: 0 },
                                                                        onTap: () => e.hide(),
                                                                      },
                                                                      `ADuLZBGTI`
                                                                    ),
                                                                    s(l.div, {
                                                                      className: p(
                                                                        j,
                                                                        `framer-1kcvtel`
                                                                      ),
                                                                      "data-framer-portal-id": `10yitsd`,
                                                                      transformTemplate: J,
                                                                      children: c(l.div, {
                                                                        className: `framer-52hsx8`,
                                                                        children: [
                                                                          c(l.div, {
                                                                            className: `framer-1hwmfem`,
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
                                                                                className: `framer-1xgu4s0`,
                                                                                fonts: [
                                                                                  `Inter-Bold`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              s(l.div, {
                                                                                className: `framer-16h8rox`,
                                                                                onTap: A({
                                                                                  overlay: e,
                                                                                }),
                                                                                children: s(O, {
                                                                                  animated: !1,
                                                                                  className: `framer-nko9dd`,
                                                                                  layoutId: `mRyfIwdjg`,
                                                                                  UO5clYVeQ: !0,
                                                                                }),
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          s(y, {
                                                                            className: `framer-bpc7h8`,
                                                                            nodeId: `p0B544czG`,
                                                                            children: (e) =>
                                                                              c(i, {
                                                                                children: [
                                                                                  c(l.label, {
                                                                                    className: `framer-vdic0t`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Email`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1fswuj0`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-dqzzel`,
                                                                                        inputName: `Email`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-fzhac6`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Mobile number`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1v2ds7t`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-1glz8t7`,
                                                                                        inputName: `Mobile Number`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !1,
                                                                                        type: `tel`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-14qqc9f`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Product Name`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1ftgl69`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-k9r0q7`,
                                                                                        inputName: `Product Name`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-83886s`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Make, Model & Size`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1b5qvf5`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-1x1hh88`,
                                                                                        inputName: `Make, Model & Size`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !0,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  s(S, {
                                                                                    width: `221px`,
                                                                                    children: s(v, {
                                                                                      className: `framer-18qz16p-container`,
                                                                                      inComponentSlot:
                                                                                        !0,
                                                                                      isModuleExternal:
                                                                                        !0,
                                                                                      nodeId: `F5Jl5si_L`,
                                                                                      rendersWithMotion:
                                                                                        !0,
                                                                                      scopeId: `yIPN70dPu`,
                                                                                      children: s(
                                                                                        M,
                                                                                        {
                                                                                          height: `100%`,
                                                                                          id: `F5Jl5si_L`,
                                                                                          layoutId: `F5Jl5si_L`,
                                                                                          style: {
                                                                                            height: `100%`,
                                                                                            width: `100%`,
                                                                                          },
                                                                                          type: `submit`,
                                                                                          variant:
                                                                                            Y(
                                                                                              e,
                                                                                              {
                                                                                                pending: `n9wSMJDiA`,
                                                                                                success: `XKSibd1Ne`,
                                                                                              },
                                                                                              `Y6CHTJJM0`
                                                                                            ),
                                                                                          width: `100%`,
                                                                                        }
                                                                                      ),
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
                                                href: { webPageId: `e3xjmT_e2` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `e3xjmT_e2` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (t) =>
                                              s(g, {
                                                breakpoint: w,
                                                overrides: {
                                                  dQetuOrvK: {
                                                    width: `323px`,
                                                    y:
                                                      (f?.y || 0) +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      0 +
                                                      0 +
                                                      164.4 +
                                                      0 +
                                                      2496,
                                                  },
                                                },
                                                children: s(S, {
                                                  height: 400,
                                                  children: c(v, {
                                                    className: `framer-1ppa30-container`,
                                                    id: `1ppa30`,
                                                    nodeId: `NBhVi_ZaF`,
                                                    scopeId: `yIPN70dPu`,
                                                    children: [
                                                      s(g, {
                                                        breakpoint: w,
                                                        overrides: {
                                                          dQetuOrvK: { oSlFkYxO1: t[1] },
                                                        },
                                                        children: s(F, {
                                                          BlDyCL1Hj: q(
                                                            {
                                                              pixelHeight: 214,
                                                              pixelWidth: 320,
                                                              src: `../../assets/images/WXYNZt5T1WBnj5vMCxxwRUuZY0.webp`,
                                                            },
                                                            ``
                                                          ),
                                                          height: `100%`,
                                                          id: `NBhVi_ZaF`,
                                                          jTs_fuWrm: k({ overlay: e }),
                                                          JWP0bNV85: `Cable Tie Mount`,
                                                          layoutId: `NBhVi_ZaF`,
                                                          oSlFkYxO1: t[0],
                                                          style: { width: `100%` },
                                                          variant: `ZKOecjUjr`,
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                      s(u, {
                                                        children:
                                                          e.visible &&
                                                          s(i, {
                                                            children: o(
                                                              s(h, {
                                                                triggerId: `1ppa30`,
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
                                                                            ease: [
                                                                              0.5, 0, 0.88, 0.77,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        className: p(
                                                                          j,
                                                                          `framer-1jiidwv`
                                                                        ),
                                                                        "data-framer-portal-id": `1ppa30`,
                                                                        exit: {
                                                                          opacity: 0,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.12, 0.23, 0.5, 1,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        initial: { opacity: 0 },
                                                                        onTap: () => e.hide(),
                                                                      },
                                                                      `Mn9WZvy2K`
                                                                    ),
                                                                    s(l.div, {
                                                                      className: p(
                                                                        j,
                                                                        `framer-1mqcf3g`
                                                                      ),
                                                                      "data-framer-portal-id": `1ppa30`,
                                                                      transformTemplate: J,
                                                                      children: c(l.div, {
                                                                        className: `framer-wmgmz2`,
                                                                        children: [
                                                                          c(l.div, {
                                                                            className: `framer-1dtemzp`,
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
                                                                                className: `framer-r7q8h3`,
                                                                                fonts: [
                                                                                  `Inter-Bold`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              s(l.div, {
                                                                                className: `framer-5g55vz`,
                                                                                onTap: A({
                                                                                  overlay: e,
                                                                                }),
                                                                                children: s(O, {
                                                                                  animated: !1,
                                                                                  className: `framer-16vpj9w`,
                                                                                  layoutId: `zSManhGHF`,
                                                                                  UO5clYVeQ: !0,
                                                                                }),
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          s(y, {
                                                                            className: `framer-180o8hu`,
                                                                            nodeId: `KgAxqY838`,
                                                                            children: (e) =>
                                                                              c(i, {
                                                                                children: [
                                                                                  c(l.label, {
                                                                                    className: `framer-d2srrf`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Email`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-125b4d7`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-ynzy5f`,
                                                                                        inputName: `Email`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-2f54kh`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Mobile number`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-5q21lk`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-1nlji5i`,
                                                                                        inputName: `Mobile Number`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !1,
                                                                                        type: `tel`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-b6o0i`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Product Name`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1dy8f8k`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-bflh9d`,
                                                                                        inputName: `Product Name`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-1cslsvx`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Make, Model & Size`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1jfkt5r`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-16d048j`,
                                                                                        inputName: `Make, Model & Size`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !0,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  s(S, {
                                                                                    width: `221px`,
                                                                                    children: s(v, {
                                                                                      className: `framer-1nc1yho-container`,
                                                                                      inComponentSlot:
                                                                                        !0,
                                                                                      isModuleExternal:
                                                                                        !0,
                                                                                      nodeId: `ohDWeJnX6`,
                                                                                      rendersWithMotion:
                                                                                        !0,
                                                                                      scopeId: `yIPN70dPu`,
                                                                                      children: s(
                                                                                        M,
                                                                                        {
                                                                                          height: `100%`,
                                                                                          id: `ohDWeJnX6`,
                                                                                          layoutId: `ohDWeJnX6`,
                                                                                          style: {
                                                                                            height: `100%`,
                                                                                            width: `100%`,
                                                                                          },
                                                                                          type: `submit`,
                                                                                          variant:
                                                                                            Y(
                                                                                              e,
                                                                                              {
                                                                                                pending: `n9wSMJDiA`,
                                                                                                success: `XKSibd1Ne`,
                                                                                              },
                                                                                              `Y6CHTJJM0`
                                                                                            ),
                                                                                          width: `100%`,
                                                                                        }
                                                                                      ),
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
                                                href: { webPageId: `s3puP6vtU` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `s3puP6vtU` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (t) =>
                                              s(g, {
                                                breakpoint: w,
                                                overrides: {
                                                  dQetuOrvK: {
                                                    width: `323px`,
                                                    y:
                                                      (f?.y || 0) +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      0 +
                                                      0 +
                                                      164.4 +
                                                      0 +
                                                      2912,
                                                  },
                                                },
                                                children: s(S, {
                                                  height: 400,
                                                  children: c(v, {
                                                    className: `framer-7sdcrh-container`,
                                                    id: `7sdcrh`,
                                                    nodeId: `iiTfn1CaE`,
                                                    scopeId: `yIPN70dPu`,
                                                    children: [
                                                      s(g, {
                                                        breakpoint: w,
                                                        overrides: {
                                                          dQetuOrvK: { oSlFkYxO1: t[1] },
                                                        },
                                                        children: s(F, {
                                                          BlDyCL1Hj: q(
                                                            {
                                                              pixelHeight: 350,
                                                              pixelWidth: 776,
                                                              src: `../../assets/images/pC3mtgGlEXZ4NI2eOFwzgQdSHpQ.png`,
                                                              srcSet: `../../assets/images/pC3mtgGlEXZ4NI2eOFwzgQdSHpQ.png?scale-down-to=512&width=776&height=350 512w,../../assets/images/pC3mtgGlEXZ4NI2eOFwzgQdSHpQ.png 776w`,
                                                            },
                                                            ``
                                                          ),
                                                          height: `100%`,
                                                          id: `iiTfn1CaE`,
                                                          jTs_fuWrm: k({ overlay: e }),
                                                          JWP0bNV85: `Cable Tie`,
                                                          layoutId: `iiTfn1CaE`,
                                                          oSlFkYxO1: t[0],
                                                          style: { width: `100%` },
                                                          variant: `ZKOecjUjr`,
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                      s(u, {
                                                        children:
                                                          e.visible &&
                                                          s(i, {
                                                            children: o(
                                                              s(h, {
                                                                triggerId: `7sdcrh`,
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
                                                                            ease: [
                                                                              0.5, 0, 0.88, 0.77,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        className: p(
                                                                          j,
                                                                          `framer-ldhnif`
                                                                        ),
                                                                        "data-framer-portal-id": `7sdcrh`,
                                                                        exit: {
                                                                          opacity: 0,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.12, 0.23, 0.5, 1,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        initial: { opacity: 0 },
                                                                        onTap: () => e.hide(),
                                                                      },
                                                                      `kyA0LAqqH`
                                                                    ),
                                                                    s(l.div, {
                                                                      className: p(
                                                                        j,
                                                                        `framer-1cpiy9v`
                                                                      ),
                                                                      "data-framer-portal-id": `7sdcrh`,
                                                                      transformTemplate: J,
                                                                      children: c(l.div, {
                                                                        className: `framer-15ih426`,
                                                                        children: [
                                                                          c(l.div, {
                                                                            className: `framer-2rdu0d`,
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
                                                                                className: `framer-12l0pnj`,
                                                                                fonts: [
                                                                                  `Inter-Bold`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              s(l.div, {
                                                                                className: `framer-1yy86pt`,
                                                                                onTap: A({
                                                                                  overlay: e,
                                                                                }),
                                                                                children: s(O, {
                                                                                  animated: !1,
                                                                                  className: `framer-1tfleew`,
                                                                                  layoutId: `JbiQro4hV`,
                                                                                  UO5clYVeQ: !0,
                                                                                }),
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          s(y, {
                                                                            className: `framer-o3s791`,
                                                                            nodeId: `BYvfPrTm4`,
                                                                            children: (e) =>
                                                                              c(i, {
                                                                                children: [
                                                                                  c(l.label, {
                                                                                    className: `framer-lk46ly`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Email`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-zmxfas`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-36cxp2`,
                                                                                        inputName: `Email`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-2lurak`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Mobile number`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-l40voq`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-cqyg3f`,
                                                                                        inputName: `Mobile Number`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !1,
                                                                                        type: `tel`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-qh2t73`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Product Name`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-199wh8n`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-qi9r6d`,
                                                                                        inputName: `Product Name`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-yknpz6`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Make, Model & Size`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-a046gl`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-1iq4zw8`,
                                                                                        inputName: `Make, Model & Size`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !0,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  s(S, {
                                                                                    width: `221px`,
                                                                                    children: s(v, {
                                                                                      className: `framer-1mrw7v5-container`,
                                                                                      inComponentSlot:
                                                                                        !0,
                                                                                      isModuleExternal:
                                                                                        !0,
                                                                                      nodeId: `hii7OQuBk`,
                                                                                      rendersWithMotion:
                                                                                        !0,
                                                                                      scopeId: `yIPN70dPu`,
                                                                                      children: s(
                                                                                        M,
                                                                                        {
                                                                                          height: `100%`,
                                                                                          id: `hii7OQuBk`,
                                                                                          layoutId: `hii7OQuBk`,
                                                                                          style: {
                                                                                            height: `100%`,
                                                                                            width: `100%`,
                                                                                          },
                                                                                          type: `submit`,
                                                                                          variant:
                                                                                            Y(
                                                                                              e,
                                                                                              {
                                                                                                pending: `n9wSMJDiA`,
                                                                                                success: `XKSibd1Ne`,
                                                                                              },
                                                                                              `Y6CHTJJM0`
                                                                                            ),
                                                                                          width: `100%`,
                                                                                        }
                                                                                      ),
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
                                                href: { webPageId: `XsyIKqhk6` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `XsyIKqhk6` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (t) =>
                                              s(g, {
                                                breakpoint: w,
                                                overrides: {
                                                  dQetuOrvK: {
                                                    width: `323px`,
                                                    y:
                                                      (f?.y || 0) +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      0 +
                                                      0 +
                                                      164.4 +
                                                      0 +
                                                      3328,
                                                  },
                                                },
                                                children: s(S, {
                                                  height: 400,
                                                  children: c(v, {
                                                    className: `framer-1ai61kz-container`,
                                                    id: `1ai61kz`,
                                                    nodeId: `A0voLXgjh`,
                                                    scopeId: `yIPN70dPu`,
                                                    children: [
                                                      s(g, {
                                                        breakpoint: w,
                                                        overrides: {
                                                          dQetuOrvK: { oSlFkYxO1: t[1] },
                                                        },
                                                        children: s(F, {
                                                          BlDyCL1Hj: q(
                                                            {
                                                              pixelHeight: 798,
                                                              pixelWidth: 1420,
                                                              src: `../../assets/images/uMY6WYaU8mFfkz6ONSp6y670Ss.webp`,
                                                              srcSet: `../../assets/images/uMY6WYaU8mFfkz6ONSp6y670Ss.webp?scale-down-to=512&width=1420&height=798 512w,../../assets/images/uMY6WYaU8mFfkz6ONSp6y670Ss.webp?scale-down-to=1024&width=1420&height=798 1024w,../../assets/images/uMY6WYaU8mFfkz6ONSp6y670Ss.webp 1420w`,
                                                            },
                                                            ``
                                                          ),
                                                          height: `100%`,
                                                          id: `A0voLXgjh`,
                                                          jTs_fuWrm: k({ overlay: e }),
                                                          JWP0bNV85: `Cable Tie Flat Mount`,
                                                          layoutId: `A0voLXgjh`,
                                                          oSlFkYxO1: t[0],
                                                          style: { width: `100%` },
                                                          variant: `ZKOecjUjr`,
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                      s(u, {
                                                        children:
                                                          e.visible &&
                                                          s(i, {
                                                            children: o(
                                                              s(h, {
                                                                triggerId: `1ai61kz`,
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
                                                                            ease: [
                                                                              0.5, 0, 0.88, 0.77,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        className: p(
                                                                          j,
                                                                          `framer-t89wx5`
                                                                        ),
                                                                        "data-framer-portal-id": `1ai61kz`,
                                                                        exit: {
                                                                          opacity: 0,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.12, 0.23, 0.5, 1,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        initial: { opacity: 0 },
                                                                        onTap: () => e.hide(),
                                                                      },
                                                                      `fWzjjNagm`
                                                                    ),
                                                                    s(l.div, {
                                                                      className: p(
                                                                        j,
                                                                        `framer-18166j9`
                                                                      ),
                                                                      "data-framer-portal-id": `1ai61kz`,
                                                                      transformTemplate: J,
                                                                      children: c(l.div, {
                                                                        className: `framer-19dhwne`,
                                                                        children: [
                                                                          c(l.div, {
                                                                            className: `framer-lmh4ca`,
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
                                                                                className: `framer-pefe9a`,
                                                                                fonts: [
                                                                                  `Inter-Bold`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              s(l.div, {
                                                                                className: `framer-165976v`,
                                                                                onTap: A({
                                                                                  overlay: e,
                                                                                }),
                                                                                children: s(O, {
                                                                                  animated: !1,
                                                                                  className: `framer-178gbx`,
                                                                                  layoutId: `wNvklVdn4`,
                                                                                  UO5clYVeQ: !0,
                                                                                }),
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          s(y, {
                                                                            className: `framer-sp24l2`,
                                                                            nodeId: `fgSkysksn`,
                                                                            children: (e) =>
                                                                              c(i, {
                                                                                children: [
                                                                                  c(l.label, {
                                                                                    className: `framer-3kq65u`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Email`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1sa1pg6`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-z5g0qb`,
                                                                                        inputName: `Email`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-ufbz1o`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Mobile number`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-119vtim`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-k238x4`,
                                                                                        inputName: `Mobile Number`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !1,
                                                                                        type: `tel`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-1nuti9w`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Product Name`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-o930et`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-f6e1qn`,
                                                                                        inputName: `Product Name`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-ltapim`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Make, Model & Size`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1gto85k`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-1gl53tr`,
                                                                                        inputName: `Make, Model & Size`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !0,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  s(S, {
                                                                                    width: `221px`,
                                                                                    children: s(v, {
                                                                                      className: `framer-1brgeul-container`,
                                                                                      inComponentSlot:
                                                                                        !0,
                                                                                      isModuleExternal:
                                                                                        !0,
                                                                                      nodeId: `TV812QniU`,
                                                                                      rendersWithMotion:
                                                                                        !0,
                                                                                      scopeId: `yIPN70dPu`,
                                                                                      children: s(
                                                                                        M,
                                                                                        {
                                                                                          height: `100%`,
                                                                                          id: `TV812QniU`,
                                                                                          layoutId: `TV812QniU`,
                                                                                          style: {
                                                                                            height: `100%`,
                                                                                            width: `100%`,
                                                                                          },
                                                                                          type: `submit`,
                                                                                          variant:
                                                                                            Y(
                                                                                              e,
                                                                                              {
                                                                                                pending: `n9wSMJDiA`,
                                                                                                success: `XKSibd1Ne`,
                                                                                              },
                                                                                              `Y6CHTJJM0`
                                                                                            ),
                                                                                          width: `100%`,
                                                                                        }
                                                                                      ),
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
                                                href: { webPageId: `natPZmXwR` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `natPZmXwR` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (t) =>
                                              s(g, {
                                                breakpoint: w,
                                                overrides: {
                                                  dQetuOrvK: {
                                                    width: `323px`,
                                                    y:
                                                      (f?.y || 0) +
                                                      0 +
                                                      0 +
                                                      96 +
                                                      0 +
                                                      0 +
                                                      164.4 +
                                                      0 +
                                                      3744,
                                                  },
                                                },
                                                children: s(S, {
                                                  height: 400,
                                                  children: c(v, {
                                                    className: `framer-1e00pyo-container`,
                                                    id: `1e00pyo`,
                                                    nodeId: `aZBChEhAQ`,
                                                    scopeId: `yIPN70dPu`,
                                                    children: [
                                                      s(g, {
                                                        breakpoint: w,
                                                        overrides: {
                                                          dQetuOrvK: { oSlFkYxO1: t[1] },
                                                        },
                                                        children: s(F, {
                                                          BlDyCL1Hj: q(
                                                            {
                                                              pixelHeight: 450,
                                                              pixelWidth: 447,
                                                              src: `../../assets/images/dqlXMuDyFJpDLpNt44rXN8OWYLI.png`,
                                                            },
                                                            ``
                                                          ),
                                                          height: `100%`,
                                                          id: `aZBChEhAQ`,
                                                          jTs_fuWrm: k({ overlay: e }),
                                                          JWP0bNV85: `Coloured Cable Tie`,
                                                          layoutId: `aZBChEhAQ`,
                                                          oSlFkYxO1: t[0],
                                                          style: { width: `100%` },
                                                          variant: `ZKOecjUjr`,
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                      s(u, {
                                                        children:
                                                          e.visible &&
                                                          s(i, {
                                                            children: o(
                                                              s(h, {
                                                                triggerId: `1e00pyo`,
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
                                                                            ease: [
                                                                              0.5, 0, 0.88, 0.77,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        className: p(
                                                                          j,
                                                                          `framer-89vlnb`
                                                                        ),
                                                                        "data-framer-portal-id": `1e00pyo`,
                                                                        exit: {
                                                                          opacity: 0,
                                                                          transition: {
                                                                            delay: 0,
                                                                            duration: 0,
                                                                            ease: [
                                                                              0.12, 0.23, 0.5, 1,
                                                                            ],
                                                                            type: `tween`,
                                                                          },
                                                                        },
                                                                        initial: { opacity: 0 },
                                                                        onTap: () => e.hide(),
                                                                      },
                                                                      `EWF_JNMta`
                                                                    ),
                                                                    s(l.div, {
                                                                      className: p(
                                                                        j,
                                                                        `framer-14xfdnd`
                                                                      ),
                                                                      "data-framer-portal-id": `1e00pyo`,
                                                                      transformTemplate: J,
                                                                      children: c(l.div, {
                                                                        className: `framer-hpt12y`,
                                                                        children: [
                                                                          c(l.div, {
                                                                            className: `framer-1fz67sx`,
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
                                                                                className: `framer-1jdfkg5`,
                                                                                fonts: [
                                                                                  `Inter-Bold`,
                                                                                ],
                                                                                verticalAlignment: `top`,
                                                                                withExternalLayout:
                                                                                  !0,
                                                                              }),
                                                                              s(l.div, {
                                                                                className: `framer-nwpyz5`,
                                                                                onTap: A({
                                                                                  overlay: e,
                                                                                }),
                                                                                children: s(O, {
                                                                                  animated: !1,
                                                                                  className: `framer-1lz06p3`,
                                                                                  layoutId: `sdZhzy5ZF`,
                                                                                  UO5clYVeQ: !0,
                                                                                }),
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          s(y, {
                                                                            className: `framer-1hv5z40`,
                                                                            nodeId: `ChWyQwpJM`,
                                                                            children: (e) =>
                                                                              c(i, {
                                                                                children: [
                                                                                  c(l.label, {
                                                                                    className: `framer-1ly8h1e`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Email`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-3z02e1`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-3b08ea`,
                                                                                        inputName: `Email`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-1666lka`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Mobile number`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1j1qkdn`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-19mztmc`,
                                                                                        inputName: `Mobile Number`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !1,
                                                                                        type: `tel`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-1nn6l3n`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Product Name`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-1q49q4h`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-1705ylu`,
                                                                                        inputName: `Product Name`,
                                                                                        placeholder: ``,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  c(l.label, {
                                                                                    className: `framer-1du1n1s`,
                                                                                    children: [
                                                                                      s(T, {
                                                                                        __fromCanvasComponent:
                                                                                          !0,
                                                                                        children: s(
                                                                                          r,
                                                                                          {
                                                                                            children:
                                                                                              s(
                                                                                                `p`,
                                                                                                {
                                                                                                  style:
                                                                                                    {
                                                                                                      "--font-selector": `SW50ZXItTWVkaXVt`,
                                                                                                      "--framer-font-size": `12px`,
                                                                                                      "--framer-font-weight": `500`,
                                                                                                      "--framer-text-color": `rgb(136, 136, 136)`,
                                                                                                    },
                                                                                                  children: `Make, Model & Size`,
                                                                                                }
                                                                                              ),
                                                                                          }
                                                                                        ),
                                                                                        className: `framer-18zs56m`,
                                                                                        fonts: [
                                                                                          `Inter-Medium`,
                                                                                        ],
                                                                                        verticalAlignment: `top`,
                                                                                        withExternalLayout:
                                                                                          !0,
                                                                                      }),
                                                                                      s(x, {
                                                                                        className: `framer-c6g5yc`,
                                                                                        inputName: `Make, Model & Size`,
                                                                                        placeholder: ``,
                                                                                        required:
                                                                                          !0,
                                                                                        type: `text`,
                                                                                      }),
                                                                                    ],
                                                                                  }),
                                                                                  s(S, {
                                                                                    width: `221px`,
                                                                                    children: s(v, {
                                                                                      className: `framer-112bq01-container`,
                                                                                      inComponentSlot:
                                                                                        !0,
                                                                                      isModuleExternal:
                                                                                        !0,
                                                                                      nodeId: `qlzvsYsRK`,
                                                                                      rendersWithMotion:
                                                                                        !0,
                                                                                      scopeId: `yIPN70dPu`,
                                                                                      children: s(
                                                                                        M,
                                                                                        {
                                                                                          height: `100%`,
                                                                                          id: `qlzvsYsRK`,
                                                                                          layoutId: `qlzvsYsRK`,
                                                                                          style: {
                                                                                            height: `100%`,
                                                                                            width: `100%`,
                                                                                          },
                                                                                          type: `submit`,
                                                                                          variant:
                                                                                            Y(
                                                                                              e,
                                                                                              {
                                                                                                pending: `n9wSMJDiA`,
                                                                                                success: `XKSibd1Ne`,
                                                                                              },
                                                                                              `Y6CHTJJM0`
                                                                                            ),
                                                                                          width: `100%`,
                                                                                        }
                                                                                      ),
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
                          Fe() &&
                            c(`div`, {
                              className: `framer-1f5zvs hidden-11y81x8`,
                              "data-framer-name": `Text`,
                              children: [
                                s(b, {
                                  href: { webPageId: `AttXBZoeD` },
                                  motionChild: !0,
                                  nodeId: `zIzPjZdtj`,
                                  openInNewTab: !1,
                                  scopeId: `yIPN70dPu`,
                                  children: s(l.a, {
                                    className: `framer-16wrzhp framer-1eh5aws`,
                                    children: s(b, {
                                      href: { webPageId: `AttXBZoeD` },
                                      motionChild: !0,
                                      nodeId: `AQUHWvKum`,
                                      openInNewTab: !1,
                                      scopeId: `yIPN70dPu`,
                                      children: s(l.a, {
                                        className: `framer-m3xpl0 framer-1eh5aws`,
                                        children: s(N, {
                                          animated: !1,
                                          BKVe8Pgvw: !0,
                                          className: `framer-1aior7j`,
                                          fICyAUQY1: !0,
                                          layoutId: `UbsRAKvg4`,
                                          lKf_CQTz5: !0,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                s(S, {
                                  height: 26,
                                  y: (f?.y || 0) + 0 + 0 + 96 + 0 + 0 + 36,
                                  children: s(R, {
                                    __framer__animate: { transition: G },
                                    __framer__animateOnce: !0,
                                    __framer__enter: W,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-10mkai9-container`,
                                    nodeId: `U94Q3F3Dr`,
                                    rendersWithMotion: !0,
                                    scopeId: `yIPN70dPu`,
                                    children: s(P, {
                                      ggTbrSuHk: `Fasteners, Safety items & Cable ties`,
                                      height: `100%`,
                                      id: `U94Q3F3Dr`,
                                      layoutId: `U94Q3F3Dr`,
                                      variant: `z6oSgdJxk`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                s(z, {
                                  __framer__animate: { transition: K },
                                  __framer__animateOnce: !0,
                                  __framer__enter: W,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0.5,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: s(r, {
                                    children: s(`h3`, {
                                      className: `framer-styles-preset-1d7ew99`,
                                      "data-styles-preset": `nl385Jssa`,
                                      children: `Cable Ties`,
                                    }),
                                  }),
                                  className: `framer-8rv0jd`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          Fe() &&
                            c(`div`, {
                              className: `framer-v0cixz hidden-11y81x8`,
                              "data-framer-name": `ClassesGallery`,
                              children: [
                                s(Z, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(m, {
                                        links: [
                                          {
                                            href: { webPageId: `iTo4f0vNa` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(S, {
                                            height: 400,
                                            width: `349.3333px`,
                                            y: (f?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 0,
                                            children: c(v, {
                                              className: `framer-1iw72pn-container`,
                                              id: `1iw72pn`,
                                              nodeId: `PTuwo8bio`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(F, {
                                                  BlDyCL1Hj: q(
                                                    {
                                                      pixelHeight: 450,
                                                      pixelWidth: 447,
                                                      src: `../../assets/images/GUiRf8E5CZMWQhD8F5T2HblIDc.png`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `PTuwo8bio`,
                                                  jTs_fuWrm: k({ overlay: e }),
                                                  JWP0bNV85: `Stainless Steel Cable tie`,
                                                  layoutId: `PTuwo8bio`,
                                                  oSlFkYxO1: t[0],
                                                  style: { width: `100%` },
                                                  variant: `ZKOecjUjr`,
                                                  width: `100%`,
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `1iw72pn`,
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
                                                                  className: p(j, `framer-k0reh2`),
                                                                  "data-framer-portal-id": `1iw72pn`,
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
                                                                `dRtCQc4_k`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-167bnjk`),
                                                                "data-framer-portal-id": `1iw72pn`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-18rja6v`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-1qpg4u8`,
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
                                                                          className: `framer-14aczs0`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-clh1gj`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-9a78cl`,
                                                                            layoutId: `dCS5154UL`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      className: `framer-huou78`,
                                                                      nodeId: `u726uQAKR`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-1fkl1wo`,
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
                                                                                  className: `framer-19a9cr9`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-htq2gv`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1clq9a6`,
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
                                                                                  className: `framer-13afytq`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-4lftvz`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1m9lrlu`,
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
                                                                                  className: `framer-1dv3nyz`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-gz4344`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1kk2o5e`,
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
                                                                                  className: `framer-rq7var`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1fr85bf`,
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
                                                                                className: `framer-1ls5sfj-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `bieOPM0cY`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `bieOPM0cY`,
                                                                                  layoutId: `bieOPM0cY`,
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
                                s(Z, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(m, {
                                        links: [
                                          {
                                            href: { webPageId: `K6ObOYBQA` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(S, {
                                            height: 400,
                                            width: `349.3333px`,
                                            y: (f?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 0,
                                            children: c(v, {
                                              className: `framer-1mt7klw-container`,
                                              id: `1mt7klw`,
                                              nodeId: `Jxw7sJODq`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(F, {
                                                  BlDyCL1Hj: q(
                                                    {
                                                      pixelHeight: 450,
                                                      pixelWidth: 447,
                                                      src: `../../assets/images/6HbmwHz9Ug0Cg3U1Z7d95EVlI3U.png`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `Jxw7sJODq`,
                                                  jTs_fuWrm: k({ overlay: e }),
                                                  JWP0bNV85: `Tag Cable Tie`,
                                                  layoutId: `Jxw7sJODq`,
                                                  oSlFkYxO1: t[0],
                                                  style: { width: `100%` },
                                                  variant: `ZKOecjUjr`,
                                                  width: `100%`,
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `1mt7klw`,
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
                                                                  className: p(j, `framer-1hk0k6g`),
                                                                  "data-framer-portal-id": `1mt7klw`,
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
                                                                `TrlzVOeiT`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-ui9npn`),
                                                                "data-framer-portal-id": `1mt7klw`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-zz0gfj`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-1vaifsw`,
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
                                                                          className: `framer-16ta59n`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-lj6c7w`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-mk58x0`,
                                                                            layoutId: `GPw2FARa7`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      className: `framer-sin0th`,
                                                                      nodeId: `JRoDr1pkK`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-1p8xgrr`,
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
                                                                                  className: `framer-wdfxtj`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1e0s39`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-r3008l`,
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
                                                                                  className: `framer-17w2je0`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-mxmm86`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-v53j1s`,
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
                                                                                  className: `framer-ykslwp`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-fzp4n5`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1ony4sd`,
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
                                                                                  className: `framer-1wjk3z8`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-xisp36`,
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
                                                                                className: `framer-1lafv7e-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `FyGOV5TjU`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `FyGOV5TjU`,
                                                                                  layoutId: `FyGOV5TjU`,
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
                                s(Z, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(m, {
                                        links: [
                                          {
                                            href: { webPageId: `CnkHM0EVU` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(S, {
                                            height: 400,
                                            width: `349.3333px`,
                                            y: (f?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 0,
                                            children: c(v, {
                                              className: `framer-jbfsan-container`,
                                              id: `jbfsan`,
                                              nodeId: `Ywl6Y7gEt`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(F, {
                                                  BlDyCL1Hj: q(
                                                    {
                                                      pixelHeight: 2400,
                                                      pixelWidth: 3200,
                                                      src: `../../assets/images/E8O7Nh8j4y8Rczr3bHzZ1nWEw.jpeg?width=3200&height=2400`,
                                                      srcSet: `../../assets/images/E8O7Nh8j4y8Rczr3bHzZ1nWEw.jpeg?scale-down-to=512&width=3200&height=2400 512w,../../assets/images/E8O7Nh8j4y8Rczr3bHzZ1nWEw.jpeg?scale-down-to=1024&width=3200&height=2400 1024w,../../assets/images/E8O7Nh8j4y8Rczr3bHzZ1nWEw.jpeg 2048w,../../assets/images/E8O7Nh8j4y8Rczr3bHzZ1nWEw.jpeg?width=3200&height=2400 3200w`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `Ywl6Y7gEt`,
                                                  jTs_fuWrm: k({ overlay: e }),
                                                  JWP0bNV85: `Security Seal Cable Tie`,
                                                  layoutId: `Ywl6Y7gEt`,
                                                  oSlFkYxO1: t[0],
                                                  style: { width: `100%` },
                                                  variant: `ZKOecjUjr`,
                                                  width: `100%`,
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `jbfsan`,
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
                                                                  className: p(j, `framer-1kcclit`),
                                                                  "data-framer-portal-id": `jbfsan`,
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
                                                                `jhX6ABkNr`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-6elw4e`),
                                                                "data-framer-portal-id": `jbfsan`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-bj4xky`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-1ep50ok`,
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
                                                                          className: `framer-qwhq8y`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-vz6mj2`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-1xw308d`,
                                                                            layoutId: `p0ZPj7_7b`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      className: `framer-r8fyou`,
                                                                      nodeId: `ye8QJCDWU`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-8z3jhm`,
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
                                                                                  className: `framer-11jkupo`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1lzqba2`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-bs2m82`,
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
                                                                                  className: `framer-1e1fl1e`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-sfw063`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-orjb7c`,
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
                                                                                  className: `framer-fh2x6p`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-l170lx`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1qc5j9o`,
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
                                                                                  className: `framer-rhggxw`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1mzf8k2`,
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
                                                                                className: `framer-ho6n8e-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `W54aXZEca`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `W54aXZEca`,
                                                                                  layoutId: `W54aXZEca`,
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
                                s(Z, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(m, {
                                        links: [
                                          {
                                            href: { webPageId: `zpfAKcJD2` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(S, {
                                            height: 400,
                                            width: `349.3333px`,
                                            y: (f?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 416,
                                            children: c(v, {
                                              className: `framer-1q6v9ru-container`,
                                              id: `1q6v9ru`,
                                              nodeId: `jhsEdSU3u`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(F, {
                                                  BlDyCL1Hj: q(
                                                    {
                                                      pixelHeight: 450,
                                                      pixelWidth: 447,
                                                      src: `../../assets/images/3Gfh4KwKvJdLd293OVJNkgGCH0.png`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `jhsEdSU3u`,
                                                  jTs_fuWrm: k({ overlay: e }),
                                                  JWP0bNV85: `Metal Tooth Cable Tie`,
                                                  layoutId: `jhsEdSU3u`,
                                                  oSlFkYxO1: t[0],
                                                  style: { width: `100%` },
                                                  variant: `ZKOecjUjr`,
                                                  width: `100%`,
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `1q6v9ru`,
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
                                                                  className: p(j, `framer-6dhdjr`),
                                                                  "data-framer-portal-id": `1q6v9ru`,
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
                                                                `yS2V6VyOa`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-154ksbm`),
                                                                "data-framer-portal-id": `1q6v9ru`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-1vi20dz`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-38e4ws`,
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
                                                                          className: `framer-m5yez8`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-1ekqbwu`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-k9fhn7`,
                                                                            layoutId: `Enq1qqpA9`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      className: `framer-q0vqp1`,
                                                                      nodeId: `AC2N6nB07`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-1d5l8mm`,
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
                                                                                  className: `framer-1tm5eie`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-k81s3y`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-a5zg83`,
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
                                                                                  className: `framer-1kugqfr`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1y3h5aw`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-jjx6vr`,
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
                                                                                  className: `framer-e6c3ad`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-2k3343`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-xbzyyy`,
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
                                                                                  className: `framer-6sora7`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1iet3bz`,
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
                                                                                className: `framer-1bc0i09-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `YS2Y5OE1v`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `YS2Y5OE1v`,
                                                                                  layoutId: `YS2Y5OE1v`,
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
                                s(Z, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(m, {
                                        links: [
                                          {
                                            href: { webPageId: `tNxpBwJFz` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(S, {
                                            height: 400,
                                            width: `349.3333px`,
                                            y: (f?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 416,
                                            children: c(v, {
                                              className: `framer-ctlx23-container`,
                                              id: `ctlx23`,
                                              nodeId: `AYPPtRncD`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(F, {
                                                  BlDyCL1Hj: q(
                                                    {
                                                      pixelHeight: 450,
                                                      pixelWidth: 447,
                                                      src: `../../assets/images/fxIJOG10Q8Qy4ezAOw8Nn7IvJA.png`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `AYPPtRncD`,
                                                  jTs_fuWrm: k({ overlay: e }),
                                                  JWP0bNV85: `Push Mount `,
                                                  layoutId: `AYPPtRncD`,
                                                  oSlFkYxO1: t[0],
                                                  style: { width: `100%` },
                                                  variant: `ZKOecjUjr`,
                                                  width: `100%`,
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `ctlx23`,
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
                                                                  className: p(j, `framer-1ahx038`),
                                                                  "data-framer-portal-id": `ctlx23`,
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
                                                                `qeRVa16Nz`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-ct196w`),
                                                                "data-framer-portal-id": `ctlx23`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-1jovz5o`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-ii95lr`,
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
                                                                          className: `framer-12v2q7i`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-qgriwn`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-1hnzr1f`,
                                                                            layoutId: `ZqwbwDj6N`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      className: `framer-skw0hr`,
                                                                      nodeId: `MXJMyhncs`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-4c3koc`,
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
                                                                                  className: `framer-1ji0zur`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1ze3aa`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-3nzk16`,
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
                                                                                  className: `framer-17z7u2a`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1bvi3h1`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1rge0xm`,
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
                                                                                  className: `framer-1biarbf`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1wggo71`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-aljoyx`,
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
                                                                                  className: `framer-8fa04s`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-16frh91`,
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
                                                                                className: `framer-na395h-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `r8pYNns9V`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `r8pYNns9V`,
                                                                                  layoutId: `r8pYNns9V`,
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
                                s(Z, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(m, {
                                        links: [
                                          {
                                            href: { webPageId: `AXP8w_jiy` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(S, {
                                            height: 400,
                                            width: `349.3333px`,
                                            y: (f?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 416,
                                            children: c(v, {
                                              className: `framer-1lx832l-container`,
                                              id: `1lx832l`,
                                              nodeId: `kx8Ta4hwY`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(F, {
                                                  BlDyCL1Hj: q(
                                                    {
                                                      pixelHeight: 1e3,
                                                      pixelWidth: 1e3,
                                                      src: `../../assets/images/ic3Qw04OwMxBS1ctGLX9lgBmOc.png`,
                                                      srcSet: `../../assets/images/ic3Qw04OwMxBS1ctGLX9lgBmOc.png?scale-down-to=512&width=1000&height=1000 512w,../../assets/images/ic3Qw04OwMxBS1ctGLX9lgBmOc.png 1000w`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `kx8Ta4hwY`,
                                                  jTs_fuWrm: k({ overlay: e }),
                                                  JWP0bNV85: `Cable Tie UV Protection`,
                                                  layoutId: `kx8Ta4hwY`,
                                                  oSlFkYxO1: t[0],
                                                  style: { width: `100%` },
                                                  variant: `ZKOecjUjr`,
                                                  width: `100%`,
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `1lx832l`,
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
                                                                  className: p(j, `framer-k3b4l`),
                                                                  "data-framer-portal-id": `1lx832l`,
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
                                                                `zTcy2FOLX`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-25bk54`),
                                                                "data-framer-portal-id": `1lx832l`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-2szpqy`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-11h2xm8`,
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
                                                                          className: `framer-1iy3cnk`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-6uaoqd`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-x636cm`,
                                                                            layoutId: `Qa0QkJlRj`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      className: `framer-1sjuvje`,
                                                                      nodeId: `bEdnjW4AU`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-1d2rxh7`,
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
                                                                                  className: `framer-1v4p5h5`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-53afmf`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1w5b5pa`,
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
                                                                                  className: `framer-3fuid4`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1ra5oxw`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-hr6lhl`,
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
                                                                                  className: `framer-138kmuf`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-feknxx`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-kb5fui`,
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
                                                                                  className: `framer-1uzwq2x`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-11mmxdp`,
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
                                                                                className: `framer-18jy387-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `HU4nRS2Jk`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `HU4nRS2Jk`,
                                                                                  layoutId: `HU4nRS2Jk`,
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
                                s(Z, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(m, {
                                        links: [
                                          {
                                            href: { webPageId: `e3xjmT_e2` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(S, {
                                            height: 400,
                                            width: `349.3333px`,
                                            y: (f?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 832,
                                            children: c(v, {
                                              className: `framer-1cyl63w-container`,
                                              id: `1cyl63w`,
                                              nodeId: `flU4h6D52`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(F, {
                                                  BlDyCL1Hj: q(
                                                    {
                                                      pixelHeight: 214,
                                                      pixelWidth: 320,
                                                      src: `../../assets/images/WXYNZt5T1WBnj5vMCxxwRUuZY0.webp`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `flU4h6D52`,
                                                  jTs_fuWrm: k({ overlay: e }),
                                                  JWP0bNV85: `Cable Tie Mount`,
                                                  layoutId: `flU4h6D52`,
                                                  oSlFkYxO1: t[0],
                                                  style: { width: `100%` },
                                                  variant: `ZKOecjUjr`,
                                                  width: `100%`,
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `1cyl63w`,
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
                                                                  className: p(j, `framer-rwru8f`),
                                                                  "data-framer-portal-id": `1cyl63w`,
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
                                                                `ZexDnuc4p`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-1w3mwpp`),
                                                                "data-framer-portal-id": `1cyl63w`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-1uvz0rn`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-jxb9qu`,
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
                                                                          className: `framer-88epff`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-dmpvby`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-1edipnx`,
                                                                            layoutId: `zndoNdnNp`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      className: `framer-1kqmn2`,
                                                                      nodeId: `UQCY8bldQ`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-1c727po`,
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
                                                                                  className: `framer-1jhktv5`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-ht7gy0`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1melbc6`,
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
                                                                                  className: `framer-1lsj8m3`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-xka5zr`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1cp7ktt`,
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
                                                                                  className: `framer-1ogut9l`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-dfrwy4`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-10e9bu2`,
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
                                                                                  className: `framer-sngmov`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1oblxrq`,
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
                                                                                className: `framer-16al4t7-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `Fa51LCpF6`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `Fa51LCpF6`,
                                                                                  layoutId: `Fa51LCpF6`,
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
                                s(Z, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(m, {
                                        links: [
                                          {
                                            href: { webPageId: `s3puP6vtU` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(S, {
                                            height: 400,
                                            width: `349.3333px`,
                                            y: (f?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 832,
                                            children: c(v, {
                                              className: `framer-1t8rqld-container`,
                                              id: `1t8rqld`,
                                              nodeId: `t1XQLH9GE`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(F, {
                                                  BlDyCL1Hj: q(
                                                    {
                                                      pixelHeight: 350,
                                                      pixelWidth: 776,
                                                      src: `../../assets/images/pC3mtgGlEXZ4NI2eOFwzgQdSHpQ.png`,
                                                      srcSet: `../../assets/images/pC3mtgGlEXZ4NI2eOFwzgQdSHpQ.png?scale-down-to=512&width=776&height=350 512w,../../assets/images/pC3mtgGlEXZ4NI2eOFwzgQdSHpQ.png 776w`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `t1XQLH9GE`,
                                                  jTs_fuWrm: k({ overlay: e }),
                                                  JWP0bNV85: `Cable Tie`,
                                                  layoutId: `t1XQLH9GE`,
                                                  oSlFkYxO1: t[0],
                                                  style: { width: `100%` },
                                                  variant: `ZKOecjUjr`,
                                                  width: `100%`,
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `1t8rqld`,
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
                                                                  className: p(j, `framer-25936b`),
                                                                  "data-framer-portal-id": `1t8rqld`,
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
                                                                `M5U1sL91a`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-kzhva5`),
                                                                "data-framer-portal-id": `1t8rqld`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-1453d4w`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-1g3vdh2`,
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
                                                                          className: `framer-182ben0`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-1kfes7e`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-14ag8e5`,
                                                                            layoutId: `eMfKrw3eR`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      className: `framer-18rlkf5`,
                                                                      nodeId: `ASWSOwFwG`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-148418e`,
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
                                                                                  className: `framer-172vum5`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-pkrg2r`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-zhpq5j`,
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
                                                                                  className: `framer-1u5zrfb`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1luj7u1`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1ito482`,
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
                                                                                  className: `framer-1d9m5wb`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-xrthnw`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-1gc00ul`,
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
                                                                                  className: `framer-k6rrr8`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-128n466`,
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
                                                                                className: `framer-tarnja-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `qWV3AZEWD`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `qWV3AZEWD`,
                                                                                  layoutId: `qWV3AZEWD`,
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
                                s(Z, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(m, {
                                        links: [
                                          {
                                            href: { webPageId: `XsyIKqhk6` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(S, {
                                            height: 400,
                                            width: `349.3333px`,
                                            y: (f?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 832,
                                            children: c(v, {
                                              className: `framer-1ia3x5q-container`,
                                              id: `1ia3x5q`,
                                              nodeId: `zYTtwycVo`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(F, {
                                                  BlDyCL1Hj: q(
                                                    {
                                                      pixelHeight: 717,
                                                      pixelWidth: 1118,
                                                      src: `../../assets/images/9xd0C8GeldA4AZhdJGC0eZwecY.jpg?width=1118&height=717`,
                                                      srcSet: `../../assets/images/9xd0C8GeldA4AZhdJGC0eZwecY.jpg 512w,../../assets/images/9xd0C8GeldA4AZhdJGC0eZwecY.jpg?scale-down-to=1024&width=1118&height=717 1024w,../../assets/images/9xd0C8GeldA4AZhdJGC0eZwecY.jpg?width=1118&height=717 1118w`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `zYTtwycVo`,
                                                  jTs_fuWrm: k({ overlay: e }),
                                                  JWP0bNV85: `Cable Tie Flat Mount`,
                                                  layoutId: `zYTtwycVo`,
                                                  oSlFkYxO1: t[0],
                                                  style: { width: `100%` },
                                                  variant: `ZKOecjUjr`,
                                                  width: `100%`,
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `1ia3x5q`,
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
                                                                  className: p(j, `framer-yiv8p5`),
                                                                  "data-framer-portal-id": `1ia3x5q`,
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
                                                                `mxZfxwsVc`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-pnynj5`),
                                                                "data-framer-portal-id": `1ia3x5q`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-1g2ez3z`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-112ih1s`,
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
                                                                          className: `framer-12pq2tn`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-15kjsyy`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-1s3bwpe`,
                                                                            layoutId: `OkNSIUur0`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      className: `framer-kf7fa6`,
                                                                      nodeId: `CBzqkacG_`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-1heyxy6`,
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
                                                                                  className: `framer-5ilsds`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-122fvgy`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-37bfcz`,
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
                                                                                  className: `framer-14xpwjk`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-81l07p`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-r5s3dw`,
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
                                                                                  className: `framer-1x38ssi`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-h9xd2t`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-yhqyjq`,
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
                                                                                  className: `framer-3pbzwd`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1drsgom`,
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
                                                                                className: `framer-1mo1sjy-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `fu56grpig`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `fu56grpig`,
                                                                                  layoutId: `fu56grpig`,
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
                                s(Z, {
                                  dismissWithEsc: !0,
                                  children: (e) =>
                                    s(i, {
                                      children: s(m, {
                                        links: [
                                          {
                                            href: { webPageId: `natPZmXwR` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (t) =>
                                          s(S, {
                                            height: 400,
                                            width: `349.3333px`,
                                            y: (f?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 1248,
                                            children: c(v, {
                                              className: `framer-km5tlg-container`,
                                              id: `km5tlg`,
                                              nodeId: `y4umpL94e`,
                                              scopeId: `yIPN70dPu`,
                                              children: [
                                                s(F, {
                                                  BlDyCL1Hj: q(
                                                    {
                                                      pixelHeight: 450,
                                                      pixelWidth: 447,
                                                      src: `../../assets/images/dqlXMuDyFJpDLpNt44rXN8OWYLI.png`,
                                                    },
                                                    ``
                                                  ),
                                                  height: `100%`,
                                                  id: `y4umpL94e`,
                                                  jTs_fuWrm: k({ overlay: e }),
                                                  JWP0bNV85: `Coloured Cable Tie`,
                                                  layoutId: `y4umpL94e`,
                                                  oSlFkYxO1: t[0],
                                                  style: { width: `100%` },
                                                  variant: `ZKOecjUjr`,
                                                  width: `100%`,
                                                }),
                                                s(u, {
                                                  children:
                                                    e.visible &&
                                                    s(i, {
                                                      children: o(
                                                        s(h, {
                                                          triggerId: `km5tlg`,
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
                                                                  className: p(j, `framer-hyb5gd`),
                                                                  "data-framer-portal-id": `km5tlg`,
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
                                                                `t6rJuwHB_`
                                                              ),
                                                              s(l.div, {
                                                                className: p(j, `framer-11wce95`),
                                                                "data-framer-portal-id": `km5tlg`,
                                                                transformTemplate: J,
                                                                children: c(l.div, {
                                                                  className: `framer-1biofdj`,
                                                                  children: [
                                                                    c(l.div, {
                                                                      className: `framer-zwdt25`,
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
                                                                          className: `framer-1clqdxb`,
                                                                          fonts: [`Inter-Bold`],
                                                                          verticalAlignment: `top`,
                                                                          withExternalLayout: !0,
                                                                        }),
                                                                        s(l.div, {
                                                                          className: `framer-1i7r5az`,
                                                                          onTap: A({ overlay: e }),
                                                                          children: s(O, {
                                                                            animated: !1,
                                                                            className: `framer-r5spmb`,
                                                                            layoutId: `YYoo5_Zgh`,
                                                                            UO5clYVeQ: !0,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    s(y, {
                                                                      className: `framer-139dno6`,
                                                                      nodeId: `pxWAmP32d`,
                                                                      children: (e) =>
                                                                        c(i, {
                                                                          children: [
                                                                            c(l.label, {
                                                                              className: `framer-1yhuiro`,
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
                                                                                  className: `framer-1o86oaq`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-1a622cg`,
                                                                                  inputName: `Email`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-uqf6w8`,
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
                                                                                  className: `framer-vz4wa4`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-173v7rf`,
                                                                                  inputName: `Mobile Number`,
                                                                                  placeholder: ``,
                                                                                  required: !1,
                                                                                  type: `tel`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-jr4w5c`,
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
                                                                                  className: `framer-1vouumi`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-c46jsn`,
                                                                                  inputName: `Product Name`,
                                                                                  placeholder: ``,
                                                                                  type: `text`,
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            c(l.label, {
                                                                              className: `framer-16tjb72`,
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
                                                                                  className: `framer-19u6hnv`,
                                                                                  fonts: [
                                                                                    `Inter-Medium`,
                                                                                  ],
                                                                                  verticalAlignment: `top`,
                                                                                  withExternalLayout:
                                                                                    !0,
                                                                                }),
                                                                                s(x, {
                                                                                  className: `framer-y1u47t`,
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
                                                                                className: `framer-1wwe4cg-container`,
                                                                                inComponentSlot: !0,
                                                                                isModuleExternal:
                                                                                  !0,
                                                                                nodeId: `owO17b2X6`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `yIPN70dPu`,
                                                                                children: s(M, {
                                                                                  height: `100%`,
                                                                                  id: `owO17b2X6`,
                                                                                  layoutId: `owO17b2X6`,
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
        `.framer-2OpoY.framer-1eh5aws, .framer-2OpoY .framer-1eh5aws { display: block; }`,
        `.framer-2OpoY.framer-2l3yge { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-2OpoY .framer-cuz8fz { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 80px 24px 80px 24px; position: relative; scroll-margin-top: 40px; width: 810px; }`,
        `.framer-2OpoY .framer-hozn8k, .framer-2OpoY .framer-179eaxy, .framer-2OpoY .framer-1f5zvs { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2OpoY .framer-5fh5gu, .framer-2OpoY .framer-jmdu3p, .framer-2OpoY .framer-16wrzhp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-2OpoY .framer-1hk2oxz, .framer-2OpoY .framer-72arzb, .framer-2OpoY .framer-m3xpl0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-2OpoY .framer-1vnbng8, .framer-2OpoY .framer-zhstii, .framer-2OpoY .framer-1aior7j { --1335ju: 2; --18mrqx2: #000000; --3it368: 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-2OpoY .framer-so1o9p-container, .framer-2OpoY .framer-r0jd21-container, .framer-2OpoY .framer-10mkai9-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-2OpoY .framer-1opnv6v, .framer-2OpoY .framer-1t7r456, .framer-2OpoY .framer-8rv0jd { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-2OpoY .framer-1086k5t { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2OpoY .framer-1qv2fui-container, .framer-2OpoY .framer-gwezt4-container, .framer-2OpoY .framer-xcro7w-container, .framer-2OpoY .framer-1fmggwi-container, .framer-2OpoY .framer-1u9hc7v-container, .framer-2OpoY .framer-75lx4n-container, .framer-2OpoY .framer-2mizqk-container, .framer-2OpoY .framer-okhh8i-container, .framer-2OpoY .framer-5a2rbt-container, .framer-2OpoY .framer-1mmragd-container, .framer-2OpoY .framer-1ml48y-container, .framer-2OpoY .framer-7jgraq-container, .framer-2OpoY .framer-hxj2gy-container, .framer-2OpoY .framer-9ghiom-container, .framer-2OpoY .framer-7g7vgb-container, .framer-2OpoY .framer-10yitsd-container, .framer-2OpoY .framer-1ppa30-container, .framer-2OpoY .framer-7sdcrh-container, .framer-2OpoY .framer-1ai61kz-container, .framer-2OpoY .framer-1e00pyo-container, .framer-2OpoY .framer-1iw72pn-container, .framer-2OpoY .framer-1mt7klw-container, .framer-2OpoY .framer-jbfsan-container, .framer-2OpoY .framer-1q6v9ru-container, .framer-2OpoY .framer-ctlx23-container, .framer-2OpoY .framer-1lx832l-container, .framer-2OpoY .framer-1cyl63w-container, .framer-2OpoY .framer-1t8rqld-container, .framer-2OpoY .framer-1ia3x5q-container, .framer-2OpoY .framer-km5tlg-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-2OpoY.framer-whnvvf, .framer-2OpoY.framer-1ytq4fb, .framer-2OpoY.framer-12txb1w, .framer-2OpoY.framer-dur6jx, .framer-2OpoY.framer-oi8rgc, .framer-2OpoY.framer-h3ddgk, .framer-2OpoY.framer-1g89tj9, .framer-2OpoY.framer-ruuhf5, .framer-2OpoY.framer-hl3yfn, .framer-2OpoY.framer-1bpvwaf, .framer-2OpoY.framer-1ipw95r, .framer-2OpoY.framer-1x2la28, .framer-2OpoY.framer-1gynr7s, .framer-2OpoY.framer-721dwp, .framer-2OpoY.framer-1aniyxi, .framer-2OpoY.framer-gerag1, .framer-2OpoY.framer-1jiidwv, .framer-2OpoY.framer-ldhnif, .framer-2OpoY.framer-t89wx5, .framer-2OpoY.framer-89vlnb, .framer-2OpoY.framer-k0reh2, .framer-2OpoY.framer-1hk0k6g, .framer-2OpoY.framer-1kcclit, .framer-2OpoY.framer-6dhdjr, .framer-2OpoY.framer-1ahx038, .framer-2OpoY.framer-k3b4l, .framer-2OpoY.framer-rwru8f, .framer-2OpoY.framer-25936b, .framer-2OpoY.framer-yiv8p5, .framer-2OpoY.framer-hyb5gd { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-2OpoY.framer-1ma7u7p, .framer-2OpoY.framer-1d4mil0, .framer-2OpoY.framer-1khqtn, .framer-2OpoY.framer-cmvfo2, .framer-2OpoY.framer-1g3v6vy, .framer-2OpoY.framer-pbg1jl, .framer-2OpoY.framer-xw7pye, .framer-2OpoY.framer-12a5i9s, .framer-2OpoY.framer-wtprs2, .framer-2OpoY.framer-1tt2weq, .framer-2OpoY.framer-167bnjk, .framer-2OpoY.framer-ui9npn, .framer-2OpoY.framer-6elw4e, .framer-2OpoY.framer-154ksbm, .framer-2OpoY.framer-ct196w, .framer-2OpoY.framer-25bk54, .framer-2OpoY.framer-1w3mwpp, .framer-2OpoY.framer-kzhva5, .framer-2OpoY.framer-pnynj5, .framer-2OpoY.framer-11wce95 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-2OpoY .framer-1u6cn0o, .framer-2OpoY .framer-zzdkee, .framer-2OpoY .framer-1xvig31, .framer-2OpoY .framer-1r6eddc, .framer-2OpoY .framer-11io8qh, .framer-2OpoY .framer-imaqrh, .framer-2OpoY .framer-4t8tgs, .framer-2OpoY .framer-1nhau90, .framer-2OpoY .framer-4gvfn, .framer-2OpoY .framer-193y8mg { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-2OpoY .framer-1qc14zx, .framer-2OpoY .framer-dcrkn, .framer-2OpoY .framer-ghosye, .framer-2OpoY .framer-awwng4, .framer-2OpoY .framer-eun8dj, .framer-2OpoY .framer-2xr05j, .framer-2OpoY .framer-1hn910s, .framer-2OpoY .framer-1jhazuu, .framer-2OpoY .framer-1c9kq3k, .framer-2OpoY .framer-1ybm3wt { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; }`,
        `.framer-2OpoY .framer-1q4l34d, .framer-2OpoY .framer-17kg9vu, .framer-2OpoY .framer-cpkjkv, .framer-2OpoY .framer-qnub7r, .framer-2OpoY .framer-82ptrt, .framer-2OpoY .framer-1kbe1bz, .framer-2OpoY .framer-yj1qm6, .framer-2OpoY .framer-18m7ib5, .framer-2OpoY .framer-1p44l50, .framer-2OpoY .framer-178tswv, .framer-2OpoY .framer-uuj2dg, .framer-2OpoY .framer-f2cppv, .framer-2OpoY .framer-a4kn9z, .framer-2OpoY .framer-1ue1dvf, .framer-2OpoY .framer-ndcx7z, .framer-2OpoY .framer-1xgu4s0, .framer-2OpoY .framer-r7q8h3, .framer-2OpoY .framer-12l0pnj, .framer-2OpoY .framer-pefe9a, .framer-2OpoY .framer-1jdfkg5, .framer-2OpoY .framer-14aczs0, .framer-2OpoY .framer-16ta59n, .framer-2OpoY .framer-qwhq8y, .framer-2OpoY .framer-m5yez8, .framer-2OpoY .framer-12v2q7i, .framer-2OpoY .framer-1iy3cnk, .framer-2OpoY .framer-88epff, .framer-2OpoY .framer-182ben0, .framer-2OpoY .framer-12pq2tn, .framer-2OpoY .framer-1clqdxb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-2OpoY .framer-143zjqj, .framer-2OpoY .framer-1g6pchs, .framer-2OpoY .framer-asm8vc, .framer-2OpoY .framer-4x27sg, .framer-2OpoY .framer-nnou28, .framer-2OpoY .framer-16l3u6s, .framer-2OpoY .framer-1x7c2y4, .framer-2OpoY .framer-1wpnudw, .framer-2OpoY .framer-8fpr9p, .framer-2OpoY .framer-1d2bm7d, .framer-2OpoY .framer-ffkkf8, .framer-2OpoY .framer-jueti2, .framer-2OpoY .framer-1v3emyj, .framer-2OpoY .framer-1hfnfba, .framer-2OpoY .framer-8ob2mt, .framer-2OpoY .framer-16h8rox, .framer-2OpoY .framer-5g55vz, .framer-2OpoY .framer-1yy86pt, .framer-2OpoY .framer-165976v, .framer-2OpoY .framer-nwpyz5, .framer-2OpoY .framer-clh1gj, .framer-2OpoY .framer-lj6c7w, .framer-2OpoY .framer-vz6mj2, .framer-2OpoY .framer-1ekqbwu, .framer-2OpoY .framer-qgriwn, .framer-2OpoY .framer-6uaoqd, .framer-2OpoY .framer-dmpvby, .framer-2OpoY .framer-1kfes7e, .framer-2OpoY .framer-15kjsyy, .framer-2OpoY .framer-1i7r5az { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-2OpoY .framer-s96vsd, .framer-2OpoY .framer-19kg0bu, .framer-2OpoY .framer-91qif0, .framer-2OpoY .framer-15lr09l, .framer-2OpoY .framer-1vayaie, .framer-2OpoY .framer-1t85kro, .framer-2OpoY .framer-a5b5i4, .framer-2OpoY .framer-12hw5mj, .framer-2OpoY .framer-15kd3aw, .framer-2OpoY .framer-1m3j6uu, .framer-2OpoY .framer-1ncm6bu, .framer-2OpoY .framer-2j5m79, .framer-2OpoY .framer-eu6of1, .framer-2OpoY .framer-1xk9z9a, .framer-2OpoY .framer-98krgk, .framer-2OpoY .framer-nko9dd, .framer-2OpoY .framer-16vpj9w, .framer-2OpoY .framer-1tfleew, .framer-2OpoY .framer-178gbx, .framer-2OpoY .framer-1lz06p3, .framer-2OpoY .framer-9a78cl, .framer-2OpoY .framer-mk58x0, .framer-2OpoY .framer-1xw308d, .framer-2OpoY .framer-k9fhn7, .framer-2OpoY .framer-1hnzr1f, .framer-2OpoY .framer-x636cm, .framer-2OpoY .framer-1edipnx, .framer-2OpoY .framer-14ag8e5, .framer-2OpoY .framer-1s3bwpe, .framer-2OpoY .framer-r5spmb { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-2OpoY .framer-2g2zsx, .framer-2OpoY .framer-zj0p5g, .framer-2OpoY .framer-1r7cotd, .framer-2OpoY .framer-19ejums, .framer-2OpoY .framer-1tnok9l, .framer-2OpoY .framer-1ip61a5, .framer-2OpoY .framer-1rm1a03, .framer-2OpoY .framer-1q7gtm8, .framer-2OpoY .framer-r7d5qh, .framer-2OpoY .framer-wwoae4, .framer-2OpoY .framer-huou78, .framer-2OpoY .framer-sin0th, .framer-2OpoY .framer-r8fyou, .framer-2OpoY .framer-q0vqp1, .framer-2OpoY .framer-skw0hr, .framer-2OpoY .framer-1sjuvje, .framer-2OpoY .framer-1kqmn2, .framer-2OpoY .framer-18rlkf5, .framer-2OpoY .framer-kf7fa6, .framer-2OpoY .framer-139dno6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-2OpoY .framer-1k6sjgs, .framer-2OpoY .framer-1c1faxv, .framer-2OpoY .framer-oaxrgj, .framer-2OpoY .framer-q6jkxe, .framer-2OpoY .framer-1fajd0i, .framer-2OpoY .framer-5mvpcd, .framer-2OpoY .framer-1ti3ak, .framer-2OpoY .framer-8s912e, .framer-2OpoY .framer-1evy5r2, .framer-2OpoY .framer-1cr13yy, .framer-2OpoY .framer-yuoasj, .framer-2OpoY .framer-uvlgoq, .framer-2OpoY .framer-1y47fe0, .framer-2OpoY .framer-1wlqyd5, .framer-2OpoY .framer-kc7ipd, .framer-2OpoY .framer-103n2ch, .framer-2OpoY .framer-16cqszw, .framer-2OpoY .framer-146ibk7, .framer-2OpoY .framer-8yo2mw, .framer-2OpoY .framer-165tw5y, .framer-2OpoY .framer-10eoxj0, .framer-2OpoY .framer-s4sfx0, .framer-2OpoY .framer-1xuejun, .framer-2OpoY .framer-40ar5u, .framer-2OpoY .framer-180yt0r, .framer-2OpoY .framer-1cef712, .framer-2OpoY .framer-18latnc, .framer-2OpoY .framer-1imr9wo, .framer-2OpoY .framer-ul7whg, .framer-2OpoY .framer-1qir9z0, .framer-2OpoY .framer-1ifsy2k, .framer-2OpoY .framer-jdx2or, .framer-2OpoY .framer-1g2bcry, .framer-2OpoY .framer-18g294o, .framer-2OpoY .framer-1epp1l2, .framer-2OpoY .framer-1pafpr6, .framer-2OpoY .framer-dhq0gv, .framer-2OpoY .framer-1eekiyx, .framer-2OpoY .framer-1p0z2rg, .framer-2OpoY .framer-1uhuwth, .framer-2OpoY .framer-1ycbn5g, .framer-2OpoY .framer-1avqweb, .framer-2OpoY .framer-13wydlu, .framer-2OpoY .framer-symhiq, .framer-2OpoY .framer-1m3xvtn, .framer-2OpoY .framer-ko48rr, .framer-2OpoY .framer-14nqe7q, .framer-2OpoY .framer-1dg74h1, .framer-2OpoY .framer-1yizkby, .framer-2OpoY .framer-1haposc, .framer-2OpoY .framer-1qmao93, .framer-2OpoY .framer-its19x, .framer-2OpoY .framer-zfn8pv, .framer-2OpoY .framer-nuo1am, .framer-2OpoY .framer-szpgic, .framer-2OpoY .framer-1y0yewr, .framer-2OpoY .framer-vneovh, .framer-2OpoY .framer-1hblkpt, .framer-2OpoY .framer-mbiyxn, .framer-2OpoY .framer-carvei, .framer-2OpoY .framer-vdic0t, .framer-2OpoY .framer-fzhac6, .framer-2OpoY .framer-14qqc9f, .framer-2OpoY .framer-83886s, .framer-2OpoY .framer-d2srrf, .framer-2OpoY .framer-2f54kh, .framer-2OpoY .framer-b6o0i, .framer-2OpoY .framer-1cslsvx, .framer-2OpoY .framer-lk46ly, .framer-2OpoY .framer-2lurak, .framer-2OpoY .framer-qh2t73, .framer-2OpoY .framer-yknpz6, .framer-2OpoY .framer-3kq65u, .framer-2OpoY .framer-ufbz1o, .framer-2OpoY .framer-1nuti9w, .framer-2OpoY .framer-ltapim, .framer-2OpoY .framer-1ly8h1e, .framer-2OpoY .framer-1666lka, .framer-2OpoY .framer-1nn6l3n, .framer-2OpoY .framer-1du1n1s, .framer-2OpoY .framer-1fkl1wo, .framer-2OpoY .framer-1clq9a6, .framer-2OpoY .framer-1m9lrlu, .framer-2OpoY .framer-1kk2o5e, .framer-2OpoY .framer-1p8xgrr, .framer-2OpoY .framer-r3008l, .framer-2OpoY .framer-v53j1s, .framer-2OpoY .framer-1ony4sd, .framer-2OpoY .framer-8z3jhm, .framer-2OpoY .framer-bs2m82, .framer-2OpoY .framer-orjb7c, .framer-2OpoY .framer-1qc5j9o, .framer-2OpoY .framer-1d5l8mm, .framer-2OpoY .framer-a5zg83, .framer-2OpoY .framer-jjx6vr, .framer-2OpoY .framer-xbzyyy, .framer-2OpoY .framer-4c3koc, .framer-2OpoY .framer-3nzk16, .framer-2OpoY .framer-1rge0xm, .framer-2OpoY .framer-aljoyx, .framer-2OpoY .framer-1d2rxh7, .framer-2OpoY .framer-1w5b5pa, .framer-2OpoY .framer-hr6lhl, .framer-2OpoY .framer-kb5fui, .framer-2OpoY .framer-1c727po, .framer-2OpoY .framer-1melbc6, .framer-2OpoY .framer-1cp7ktt, .framer-2OpoY .framer-10e9bu2, .framer-2OpoY .framer-148418e, .framer-2OpoY .framer-zhpq5j, .framer-2OpoY .framer-1ito482, .framer-2OpoY .framer-1gc00ul, .framer-2OpoY .framer-1heyxy6, .framer-2OpoY .framer-37bfcz, .framer-2OpoY .framer-r5s3dw, .framer-2OpoY .framer-yhqyjq, .framer-2OpoY .framer-1yhuiro, .framer-2OpoY .framer-uqf6w8, .framer-2OpoY .framer-jr4w5c, .framer-2OpoY .framer-16tjb72 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2OpoY .framer-12p60zs, .framer-2OpoY .framer-1mf5ebz, .framer-2OpoY .framer-1vlwm3q, .framer-2OpoY .framer-1c4rub5, .framer-2OpoY .framer-xz8b5c, .framer-2OpoY .framer-15xkopf, .framer-2OpoY .framer-1oje0n4, .framer-2OpoY .framer-ct147n, .framer-2OpoY .framer-1xbbrul, .framer-2OpoY .framer-25k63v, .framer-2OpoY .framer-lsx6cs, .framer-2OpoY .framer-c4ha4l, .framer-2OpoY .framer-d1wj67, .framer-2OpoY .framer-e0d3s7, .framer-2OpoY .framer-8mugth, .framer-2OpoY .framer-1f2o20k, .framer-2OpoY .framer-zyciey, .framer-2OpoY .framer-1syeo6i, .framer-2OpoY .framer-3yrxio, .framer-2OpoY .framer-1kfscrw, .framer-2OpoY .framer-1060iwi, .framer-2OpoY .framer-1e4im0z, .framer-2OpoY .framer-6plnx9, .framer-2OpoY .framer-d166zn, .framer-2OpoY .framer-1dixv24, .framer-2OpoY .framer-cyffnd, .framer-2OpoY .framer-1iswml3, .framer-2OpoY .framer-8mrl89, .framer-2OpoY .framer-vhnzhf, .framer-2OpoY .framer-20slp8, .framer-2OpoY .framer-ta64z8, .framer-2OpoY .framer-157azdd, .framer-2OpoY .framer-9qg6cv, .framer-2OpoY .framer-8xn4xr, .framer-2OpoY .framer-1jh9spa, .framer-2OpoY .framer-1vq6md5, .framer-2OpoY .framer-kgpcnr, .framer-2OpoY .framer-1mqz4er, .framer-2OpoY .framer-ahw37b, .framer-2OpoY .framer-v9zid, .framer-2OpoY .framer-50kygf, .framer-2OpoY .framer-47x0u9, .framer-2OpoY .framer-14as6c1, .framer-2OpoY .framer-h6e7e8, .framer-2OpoY .framer-11e0tbe, .framer-2OpoY .framer-1qrkot2, .framer-2OpoY .framer-1ar5yas, .framer-2OpoY .framer-1q4qvfg, .framer-2OpoY .framer-zkopc8, .framer-2OpoY .framer-tzvotm, .framer-2OpoY .framer-1ct8dq5, .framer-2OpoY .framer-wdbalp, .framer-2OpoY .framer-1csx11r, .framer-2OpoY .framer-15uyzhb, .framer-2OpoY .framer-11n6ny3, .framer-2OpoY .framer-1mb78gg, .framer-2OpoY .framer-awby6f, .framer-2OpoY .framer-zi0vct, .framer-2OpoY .framer-1rvqecg, .framer-2OpoY .framer-1rzo5or, .framer-2OpoY .framer-1fswuj0, .framer-2OpoY .framer-1v2ds7t, .framer-2OpoY .framer-1ftgl69, .framer-2OpoY .framer-1b5qvf5, .framer-2OpoY .framer-125b4d7, .framer-2OpoY .framer-5q21lk, .framer-2OpoY .framer-1dy8f8k, .framer-2OpoY .framer-1jfkt5r, .framer-2OpoY .framer-zmxfas, .framer-2OpoY .framer-l40voq, .framer-2OpoY .framer-199wh8n, .framer-2OpoY .framer-a046gl, .framer-2OpoY .framer-1sa1pg6, .framer-2OpoY .framer-119vtim, .framer-2OpoY .framer-o930et, .framer-2OpoY .framer-1gto85k, .framer-2OpoY .framer-3z02e1, .framer-2OpoY .framer-1j1qkdn, .framer-2OpoY .framer-1q49q4h, .framer-2OpoY .framer-18zs56m, .framer-2OpoY .framer-19a9cr9, .framer-2OpoY .framer-13afytq, .framer-2OpoY .framer-1dv3nyz, .framer-2OpoY .framer-rq7var, .framer-2OpoY .framer-wdfxtj, .framer-2OpoY .framer-17w2je0, .framer-2OpoY .framer-ykslwp, .framer-2OpoY .framer-1wjk3z8, .framer-2OpoY .framer-11jkupo, .framer-2OpoY .framer-1e1fl1e, .framer-2OpoY .framer-fh2x6p, .framer-2OpoY .framer-rhggxw, .framer-2OpoY .framer-1tm5eie, .framer-2OpoY .framer-1kugqfr, .framer-2OpoY .framer-e6c3ad, .framer-2OpoY .framer-6sora7, .framer-2OpoY .framer-1ji0zur, .framer-2OpoY .framer-17z7u2a, .framer-2OpoY .framer-1biarbf, .framer-2OpoY .framer-8fa04s, .framer-2OpoY .framer-1v4p5h5, .framer-2OpoY .framer-3fuid4, .framer-2OpoY .framer-138kmuf, .framer-2OpoY .framer-1uzwq2x, .framer-2OpoY .framer-1jhktv5, .framer-2OpoY .framer-1lsj8m3, .framer-2OpoY .framer-1ogut9l, .framer-2OpoY .framer-sngmov, .framer-2OpoY .framer-172vum5, .framer-2OpoY .framer-1u5zrfb, .framer-2OpoY .framer-1d9m5wb, .framer-2OpoY .framer-k6rrr8, .framer-2OpoY .framer-5ilsds, .framer-2OpoY .framer-14xpwjk, .framer-2OpoY .framer-1x38ssi, .framer-2OpoY .framer-3pbzwd, .framer-2OpoY .framer-1o86oaq, .framer-2OpoY .framer-vz4wa4, .framer-2OpoY .framer-1vouumi, .framer-2OpoY .framer-19u6hnv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-2OpoY .framer-1w1wvse, .framer-2OpoY .framer-165fsur, .framer-2OpoY .framer-uult9t, .framer-2OpoY .framer-1u3cbtk, .framer-2OpoY .framer-mv8cvn, .framer-2OpoY .framer-tr1q0z, .framer-2OpoY .framer-86wv0d, .framer-2OpoY .framer-1pyao6g, .framer-2OpoY .framer-1xccupl, .framer-2OpoY .framer-168gl4s, .framer-2OpoY .framer-fuzp4k, .framer-2OpoY .framer-16wb8tq, .framer-2OpoY .framer-80wswx, .framer-2OpoY .framer-efu2v0, .framer-2OpoY .framer-450dhb, .framer-2OpoY .framer-1nmdl27, .framer-2OpoY .framer-1dw8wcz, .framer-2OpoY .framer-1s2lpf3, .framer-2OpoY .framer-uk3q13, .framer-2OpoY .framer-18fhha1, .framer-2OpoY .framer-ud4j4f, .framer-2OpoY .framer-6mbbaa, .framer-2OpoY .framer-l4gx2r, .framer-2OpoY .framer-lr3clx, .framer-2OpoY .framer-1mb9n6c, .framer-2OpoY .framer-oxcch0, .framer-2OpoY .framer-155frkd, .framer-2OpoY .framer-ed95eu, .framer-2OpoY .framer-2bi3np, .framer-2OpoY .framer-hftgth, .framer-2OpoY .framer-1yzk1vw, .framer-2OpoY .framer-91zdxj, .framer-2OpoY .framer-qhjghu, .framer-2OpoY .framer-1xqexve, .framer-2OpoY .framer-1cj2gxp, .framer-2OpoY .framer-1l5v0e2, .framer-2OpoY .framer-1tqmpmn, .framer-2OpoY .framer-1y9vb35, .framer-2OpoY .framer-aciaam, .framer-2OpoY .framer-ev0fyn, .framer-2OpoY .framer-qiff8c, .framer-2OpoY .framer-1w0zywz, .framer-2OpoY .framer-14vn1gx, .framer-2OpoY .framer-a5vi5f, .framer-2OpoY .framer-cqv3ak, .framer-2OpoY .framer-hc6m81, .framer-2OpoY .framer-1tccihc, .framer-2OpoY .framer-1by98xf, .framer-2OpoY .framer-eb6kd2, .framer-2OpoY .framer-19khr7w, .framer-2OpoY .framer-19c8va7, .framer-2OpoY .framer-1v0elh6, .framer-2OpoY .framer-7p9gku, .framer-2OpoY .framer-qnvvgm, .framer-2OpoY .framer-1elpdoc, .framer-2OpoY .framer-1l4igt7, .framer-2OpoY .framer-1q0lih3, .framer-2OpoY .framer-1vwnnvt, .framer-2OpoY .framer-14iuvsb, .framer-2OpoY .framer-1rr8xca, .framer-2OpoY .framer-dqzzel, .framer-2OpoY .framer-1glz8t7, .framer-2OpoY .framer-k9r0q7, .framer-2OpoY .framer-1x1hh88, .framer-2OpoY .framer-ynzy5f, .framer-2OpoY .framer-1nlji5i, .framer-2OpoY .framer-bflh9d, .framer-2OpoY .framer-16d048j, .framer-2OpoY .framer-36cxp2, .framer-2OpoY .framer-cqyg3f, .framer-2OpoY .framer-qi9r6d, .framer-2OpoY .framer-1iq4zw8, .framer-2OpoY .framer-z5g0qb, .framer-2OpoY .framer-k238x4, .framer-2OpoY .framer-f6e1qn, .framer-2OpoY .framer-1gl53tr, .framer-2OpoY .framer-3b08ea, .framer-2OpoY .framer-19mztmc, .framer-2OpoY .framer-1705ylu, .framer-2OpoY .framer-c6g5yc, .framer-2OpoY .framer-htq2gv, .framer-2OpoY .framer-4lftvz, .framer-2OpoY .framer-gz4344, .framer-2OpoY .framer-1fr85bf, .framer-2OpoY .framer-1e0s39, .framer-2OpoY .framer-mxmm86, .framer-2OpoY .framer-fzp4n5, .framer-2OpoY .framer-xisp36, .framer-2OpoY .framer-1lzqba2, .framer-2OpoY .framer-sfw063, .framer-2OpoY .framer-l170lx, .framer-2OpoY .framer-1mzf8k2, .framer-2OpoY .framer-k81s3y, .framer-2OpoY .framer-1y3h5aw, .framer-2OpoY .framer-2k3343, .framer-2OpoY .framer-1iet3bz, .framer-2OpoY .framer-1ze3aa, .framer-2OpoY .framer-1bvi3h1, .framer-2OpoY .framer-1wggo71, .framer-2OpoY .framer-16frh91, .framer-2OpoY .framer-53afmf, .framer-2OpoY .framer-1ra5oxw, .framer-2OpoY .framer-feknxx, .framer-2OpoY .framer-11mmxdp, .framer-2OpoY .framer-ht7gy0, .framer-2OpoY .framer-xka5zr, .framer-2OpoY .framer-dfrwy4, .framer-2OpoY .framer-1oblxrq, .framer-2OpoY .framer-pkrg2r, .framer-2OpoY .framer-1luj7u1, .framer-2OpoY .framer-xrthnw, .framer-2OpoY .framer-128n466, .framer-2OpoY .framer-122fvgy, .framer-2OpoY .framer-81l07p, .framer-2OpoY .framer-h9xd2t, .framer-2OpoY .framer-1drsgom, .framer-2OpoY .framer-1a622cg, .framer-2OpoY .framer-173v7rf, .framer-2OpoY .framer-c46jsn, .framer-2OpoY .framer-y1u47t { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-2OpoY .framer-xexx15-container, .framer-2OpoY .framer-1y9z7g9-container, .framer-2OpoY .framer-gxffhw-container, .framer-2OpoY .framer-szt1az-container, .framer-2OpoY .framer-1ad9cm-container, .framer-2OpoY .framer-62gyns-container, .framer-2OpoY .framer-z6n04t-container, .framer-2OpoY .framer-1oy794r-container, .framer-2OpoY .framer-16x8nd1-container, .framer-2OpoY .framer-11ar9u6-container, .framer-2OpoY .framer-1jzzcdy-container, .framer-2OpoY .framer-14ot7sy-container, .framer-2OpoY .framer-1qpndxk-container, .framer-2OpoY .framer-1ixp8zh-container, .framer-2OpoY .framer-xn6f2u-container, .framer-2OpoY .framer-18qz16p-container, .framer-2OpoY .framer-1nc1yho-container, .framer-2OpoY .framer-1mrw7v5-container, .framer-2OpoY .framer-1brgeul-container, .framer-2OpoY .framer-112bq01-container, .framer-2OpoY .framer-1ls5sfj-container, .framer-2OpoY .framer-1lafv7e-container, .framer-2OpoY .framer-ho6n8e-container, .framer-2OpoY .framer-1bc0i09-container, .framer-2OpoY .framer-na395h-container, .framer-2OpoY .framer-18jy387-container, .framer-2OpoY .framer-16al4t7-container, .framer-2OpoY .framer-tarnja-container, .framer-2OpoY .framer-1mo1sjy-container, .framer-2OpoY .framer-1wwe4cg-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-2OpoY .framer-opfamz { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 96px 24px 96px 24px; position: relative; scroll-margin-top: 40px; width: 1128px; }`,
        `.framer-2OpoY .framer-1ecitmq { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px 16px 0px 16px; position: relative; scroll-margin-top: 40px; width: 355px; }`,
        `.framer-2OpoY .framer-jwbmkg { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2OpoY.framer-1dripwe, .framer-2OpoY.framer-vlzc60, .framer-2OpoY.framer-1rt0vmz, .framer-2OpoY.framer-1uwjdwv, .framer-2OpoY.framer-igh8ma, .framer-2OpoY.framer-1kcvtel, .framer-2OpoY.framer-1mqcf3g, .framer-2OpoY.framer-1cpiy9v, .framer-2OpoY.framer-18166j9, .framer-2OpoY.framer-14xfdnd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 60px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-2OpoY .framer-1yhpmtv, .framer-2OpoY .framer-1r0m9pk, .framer-2OpoY .framer-1p4ekc6, .framer-2OpoY .framer-19c0cit, .framer-2OpoY .framer-19kftbe, .framer-2OpoY .framer-52hsx8, .framer-2OpoY .framer-wmgmz2, .framer-2OpoY .framer-15ih426, .framer-2OpoY .framer-19dhwne, .framer-2OpoY .framer-hpt12y { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 300px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-2OpoY .framer-18rrhhj, .framer-2OpoY .framer-17cmu9t, .framer-2OpoY .framer-13wohn7, .framer-2OpoY .framer-hzk2o6, .framer-2OpoY .framer-1om6h6z, .framer-2OpoY .framer-1hwmfem, .framer-2OpoY .framer-1dtemzp, .framer-2OpoY .framer-2rdu0d, .framer-2OpoY .framer-lmh4ca, .framer-2OpoY .framer-1fz67sx, .framer-2OpoY .framer-1qpg4u8, .framer-2OpoY .framer-1vaifsw, .framer-2OpoY .framer-1ep50ok, .framer-2OpoY .framer-38e4ws, .framer-2OpoY .framer-ii95lr, .framer-2OpoY .framer-11h2xm8, .framer-2OpoY .framer-jxb9qu, .framer-2OpoY .framer-1g3vdh2, .framer-2OpoY .framer-112ih1s, .framer-2OpoY .framer-zwdt25 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-2OpoY .framer-18epkk8, .framer-2OpoY .framer-1g4schj, .framer-2OpoY .framer-1bbvr5i, .framer-2OpoY .framer-1dkwvm2, .framer-2OpoY .framer-1kaqpfx, .framer-2OpoY .framer-bpc7h8, .framer-2OpoY .framer-180o8hu, .framer-2OpoY .framer-o3s791, .framer-2OpoY .framer-sp24l2, .framer-2OpoY .framer-1hv5z40 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 261px; }`,
        `.framer-2OpoY .framer-v0cixz { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2OpoY .framer-18rja6v, .framer-2OpoY .framer-zz0gfj, .framer-2OpoY .framer-bj4xky, .framer-2OpoY .framer-1vi20dz, .framer-2OpoY .framer-1jovz5o, .framer-2OpoY .framer-2szpqy, .framer-2OpoY .framer-1uvz0rn, .framer-2OpoY .framer-1453d4w, .framer-2OpoY .framer-1g2ez3z, .framer-2OpoY .framer-1biofdj { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        ...D,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-2OpoY.framer-2l3yge { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-2OpoY.framer-2l3yge { height: 2595px; width: 390px; } .framer-2OpoY .framer-opfamz { width: 404px; } .framer-2OpoY .framer-1ecitmq { order: 0; }}`,
      ],
      `framer-2OpoY`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 2413, width: 1200 }),
    w(
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
        ...I,
        ...L,
        ...B,
        ...V,
        ...H,
        ...f(xe),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FrameryIPN70dPu`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"K4L7_usyj":{"layout":["fixed","fixed"]},"dQetuOrvK":{"layout":["fixed","fixed"]}}}`,
            framerColorSyntax: `true`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerScrollSections: `{"IikD8IlBv":{"pattern":":IikD8IlBv","name":"classes"},"m2YVqE6PE":{"pattern":":m2YVqE6PE","name":"classes"},"VdncUIAEg":{"pattern":":VdncUIAEg","name":"classes"}}`,
            framerIntrinsicWidth: `1200`,
            framerIntrinsicHeight: `2413`,
            framerDisplayContentsDiv: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=JOLaOR5V_QuI8v9wOWtJjy7FThv2uyYJJUZwhjXvWrA.BXPIximm.mjs.map
