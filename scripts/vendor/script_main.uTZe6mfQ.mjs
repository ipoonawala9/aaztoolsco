import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  F as n,
  L as r,
  M as i,
  N as a,
  O as o,
  P as s,
  R as c,
  S as l,
  _ as u,
  c as d,
  d as f,
  g as p,
  h as m,
  i as h,
  j as g,
  l as _,
  n as v,
  o as y,
  r as b,
  s as x,
  t as ee,
  u as S,
  v as C,
  w,
  z as T,
} from "./react.N6WDMTqS.mjs";
import { S as E, a as D, n as O, r as k, t as A } from "./motion.CXXzZ97F.mjs";
import {
  A as j,
  C as M,
  H as te,
  I as N,
  J as P,
  K as ne,
  L as F,
  O as I,
  Q as re,
  R as ie,
  S as ae,
  T as L,
  U as R,
  V as oe,
  W as z,
  Y as se,
  Z as ce,
  _t as le,
  a as ue,
  at as de,
  b as fe,
  c as pe,
  dt as me,
  et as he,
  f as ge,
  g as _e,
  gt as ve,
  h as ye,
  ht as be,
  i as xe,
  it as Se,
  k as Ce,
  l as we,
  lt as Te,
  m as Ee,
  mt as B,
  n as De,
  nt as V,
  ot as Oe,
  p as H,
  pt as U,
  r as W,
  rt as ke,
  st as G,
  t as K,
  tt as Ae,
  u as je,
  v as Me,
  vt as Ne,
  w as q,
  x as J,
} from "./framer.w0XhpZTx.mjs";
import { i as Pe, n as Fe, r as Ie, t as Le } from "./cLmGr4YRT.DQnmJDS3.mjs";
import { i as Re, n as ze, r as Be, t as Ve } from "./nBjcbhcMb.CUwcX5Fg.mjs";
import { i as He, n as Ue, r as We, t as Ge } from "./ROHSdZbe7.CFImGQhF.mjs";
import { n as Ke, t as qe } from "./Z6hqE64gp.B4DtTCGY.mjs";
import { n as Je, t as Ye } from "./cyy8t4bk7.C8CV_F0r.mjs";
function Y(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st = e(() => {
    (x(),
      R(),
      A(),
      w(),
      Pe(),
      Re(),
      He(),
      (Xe = [`C0A1R7els`, `PXdqmrIL7`, `ZCv6JDWov`]),
      (Ze = `framer-w0zOv`),
      (Qe = {
        C0A1R7els: `framer-v-utsrh3`,
        PXdqmrIL7: `framer-v-15xzok9`,
        ZCv6JDWov: `framer-v-1dxkafh`,
      }),
      ($e = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (et = {
        opacity: 0.5,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 0.45, ease: [0.33, 0, 0, 1.01], type: `tween` },
      }),
      (tt = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return _(D.Provider, { value: a, children: n });
      }),
      (nt = { Desktop: `C0A1R7els`, Phone: `ZCv6JDWov`, Tablet: `PXdqmrIL7` }),
      (rt = E.create(s)),
      (it = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: nt[r.variant] ?? r.variant ?? `C0A1R7els`,
      })),
      (at = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ot = B(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: c } = G(),
            l = V(),
            { style: u, className: d, layoutId: f, variant: p, ...m } = it(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: ee,
              setVariant: w,
              variants: T,
            } = U({
              cycleOrder: Xe,
              defaultVariant: `C0A1R7els`,
              ref: r,
              variant: p,
              variantClassNames: Qe,
            }),
            D = at(e, T),
            O = I(Ze, Le, Ve, Ge),
            A = () => h !== `ZCv6JDWov`,
            j = () => h === `ZCv6JDWov`;
          return _(k, {
            id: f ?? i,
            children: _(rt, {
              animate: T,
              initial: !1,
              children: _(tt, {
                value: $e,
                children: _(E.footer, {
                  ...m,
                  ...y,
                  className: I(O, `framer-utsrh3`, d, g),
                  "data-framer-name": `Desktop`,
                  layoutDependency: D,
                  layoutId: `C0A1R7els`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-cb52c7ff-f68b-4303-a0ef-7859c86603ee, rgb(245, 245, 245))`,
                    ...u,
                  },
                  ...Y(
                    {
                      PXdqmrIL7: { "data-framer-name": `Tablet` },
                      ZCv6JDWov: { "data-framer-name": `Phone` },
                    },
                    h,
                    b
                  ),
                  children: S(E.div, {
                    className: `framer-a4m4qr`,
                    "data-framer-name": `padding-global`,
                    layoutDependency: D,
                    layoutId: `lRliaIt8W`,
                    children: [
                      _(E.div, {
                        className: `framer-1aq57nz`,
                        "data-border": !0,
                        "data-framer-name": `left`,
                        layoutDependency: D,
                        layoutId: `HkkSAy_X3`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `var(--token-09157182-62f9-4e8c-8c92-548e46e620e0, rgba(0, 0, 0, 0.2))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                        variants: {
                          PXdqmrIL7: { "--border-right-width": `0px` },
                          ZCv6JDWov: { "--border-right-width": `0px` },
                        },
                        children: _(E.div, {
                          className: `framer-qbsjx7`,
                          "data-framer-name": `top`,
                          layoutDependency: D,
                          layoutId: `xLbCD7NiJ`,
                          children: S(E.div, {
                            className: `framer-108y8n7`,
                            "data-framer-name": `left`,
                            layoutDependency: D,
                            layoutId: `chAl0A7x9`,
                            children: [
                              _(H, {
                                href: { webPageId: `L8RstwUFZ` },
                                motionChild: !0,
                                nodeId: `xhZIkA22A`,
                                openInNewTab: !1,
                                scopeId: `ahU7NN8Bs`,
                                smoothScroll: !0,
                                children: _(E.a, {
                                  className: `framer-15v0vfu framer-8d7aal`,
                                  "data-framer-name": `logo`,
                                  layoutDependency: D,
                                  layoutId: `xhZIkA22A`,
                                  children: S(E.div, {
                                    className: `framer-qzs1qc`,
                                    "data-framer-name": `Footer logo`,
                                    layoutDependency: D,
                                    layoutId: `YJddLS4Zj`,
                                    children: [
                                      _(je, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 1928,
                                          intrinsicWidth: 2180,
                                          loading: ie(
                                            (l?.y || 0) +
                                              (0 + ((l?.height || 408) - 0 - 90) / 2) +
                                              0 +
                                              60 +
                                              0 +
                                              20 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1928,
                                          pixelWidth: 2180,
                                          sizes: `220px`,
                                          src: `../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png?width=2180&height=1928`,
                                          srcSet: `../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png 512w,../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png?scale-down-to=1024&width=2180&height=1928 1024w,../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png?scale-down-to=2048&width=2180&height=1928 2048w,../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png?width=2180&height=1928 2180w`,
                                        },
                                        className: `framer-13b7rn4`,
                                        "data-framer-name": `Logopng`,
                                        layoutDependency: D,
                                        layoutId: `cvC90qdn4`,
                                        ...Y(
                                          {
                                            PXdqmrIL7: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 1928,
                                                intrinsicWidth: 2180,
                                                loading: ie(
                                                  (l?.y || 0) +
                                                    (0 + ((l?.height || 682) - 0 - 710) / 2) +
                                                    80 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    20 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0
                                                ),
                                                pixelHeight: 1928,
                                                pixelWidth: 2180,
                                                sizes: `220px`,
                                                src: `../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png?width=2180&height=1928`,
                                                srcSet: `../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png 512w,../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png?scale-down-to=1024&width=2180&height=1928 1024w,../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png?scale-down-to=2048&width=2180&height=1928 2048w,../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png?width=2180&height=1928 2180w`,
                                              },
                                            },
                                            ZCv6JDWov: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                intrinsicHeight: 1928,
                                                intrinsicWidth: 2180,
                                                loading: ie(
                                                  (l?.y || 0) +
                                                    0 +
                                                    (((l?.height || 933) - 0 - 1211.2) / 2 +
                                                      0 +
                                                      0) +
                                                    80 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0
                                                ),
                                                pixelHeight: 1928,
                                                pixelWidth: 2180,
                                                sizes: `182px`,
                                                src: `../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png?width=2180&height=1928`,
                                                srcSet: `../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png 512w,../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png?scale-down-to=1024&width=2180&height=1928 1024w,../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png?scale-down-to=2048&width=2180&height=1928 2048w,../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png?width=2180&height=1928 2180w`,
                                              },
                                            },
                                          },
                                          h,
                                          b
                                        ),
                                      }),
                                      A() &&
                                        _(J, {
                                          __fromCanvasComponent: !0,
                                          children: _(s, {
                                            children: _(E.h3, {
                                              className: `framer-styles-preset-b5tsjq`,
                                              "data-styles-preset": `cLmGr4YRT`,
                                              children: `AAZ Tools Co.`,
                                            }),
                                          }),
                                          className: `framer-zl9q7l`,
                                          fonts: [`Inter`],
                                          layoutDependency: D,
                                          layoutId: `PsJLjIDW7`,
                                          style: {
                                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                                            "--framer-link-text-decoration": `underline`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                    ],
                                  }),
                                }),
                              }),
                              j() &&
                                _(J, {
                                  __fromCanvasComponent: !0,
                                  children: _(s, {
                                    children: _(E.h5, {
                                      className: `framer-styles-preset-b5tsjq`,
                                      "data-styles-preset": `cLmGr4YRT`,
                                      children: `AAZ Tools Co.`,
                                    }),
                                  }),
                                  className: `framer-1fkbck4`,
                                  fonts: [`Inter`],
                                  layoutDependency: D,
                                  layoutId: `NEJM8UJoF`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              _(E.div, {
                                className: `framer-lyszf8`,
                                "data-framer-name": `text`,
                                layoutDependency: D,
                                layoutId: `kwiKSlk3N`,
                                children: _(J, {
                                  __fromCanvasComponent: !0,
                                  children: _(s, {
                                    children: _(E.p, {
                                      style: {
                                        "--framer-letter-spacing": `-0.02em`,
                                        "--framer-line-height": `1.5em`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ff5d8a03-2efc-4a08-a84f-436b4c5962cc, rgba(24, 24, 24, 0.8)))`,
                                      },
                                      children: ` AAZ Tools Co – Supplying quality tools, machinery & safety products across India. Stockist- Authorised Dealer- Agent of top industrial brands. `,
                                    }),
                                  }),
                                  className: `framer-3r9g8r`,
                                  fonts: [`Inter`],
                                  layoutDependency: D,
                                  layoutId: `FDOrX559A`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-ff5d8a03-2efc-4a08-a84f-436b4c5962cc, rgba(24, 24, 24, 0.8))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      _(E.div, {
                        className: `framer-16gvor2`,
                        "data-framer-name": `right`,
                        layoutDependency: D,
                        layoutId: `zs6ZYUSo1`,
                        children: _(E.div, {
                          className: `framer-z9z36f`,
                          "data-framer-name": `top`,
                          layoutDependency: D,
                          layoutId: `xm9oju9HB`,
                          children: S(E.div, {
                            className: `framer-16o4g8o`,
                            "data-framer-name": `content`,
                            layoutDependency: D,
                            layoutId: `PkRWzxM9P`,
                            children: [
                              S(E.ul, {
                                className: `framer-1ixsqpa`,
                                "data-framer-name": `list`,
                                layoutDependency: D,
                                layoutId: `DTjIuSMq2`,
                                children: [
                                  _(H, {
                                    href: { webPageId: `L8RstwUFZ` },
                                    motionChild: !0,
                                    nodeId: `yoj0P8IwS`,
                                    openInNewTab: !1,
                                    scopeId: `ahU7NN8Bs`,
                                    smoothScroll: !0,
                                    children: _(E.a, {
                                      className: `framer-1rvv1wx framer-8d7aal`,
                                      "data-framer-name": `footer_link`,
                                      layoutDependency: D,
                                      layoutId: `yoj0P8IwS`,
                                      whileHover: et,
                                      children: _(J, {
                                        __fromCanvasComponent: !0,
                                        children: _(s, {
                                          children: _(E.p, {
                                            style: {
                                              "--framer-letter-spacing": `-0.02em`,
                                              "--framer-line-height": `1.5em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(24, 24, 24)))`,
                                            },
                                            children: _(H, {
                                              href: { webPageId: `augiA20Il` },
                                              motionChild: !0,
                                              nodeId: `QspGFNM8U`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `ahU7NN8Bs`,
                                              smoothScroll: !1,
                                              children: _(E.a, {
                                                className: `framer-styles-preset-qywj9v`,
                                                "data-styles-preset": `nBjcbhcMb`,
                                                children: `Home`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-vyfuia`,
                                        fonts: [`Inter`],
                                        layoutDependency: D,
                                        layoutId: `QspGFNM8U`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(24, 24, 24))`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        variants: {
                                          ZCv6JDWov: {
                                            "--extracted-r6o4lv": `rgba(24, 24, 24, 0.8)`,
                                          },
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...Y(
                                          {
                                            ZCv6JDWov: {
                                              children: _(s, {
                                                children: _(E.p, {
                                                  style: {
                                                    "--framer-letter-spacing": `-0.02em`,
                                                    "--framer-line-height": `1.5em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(24, 24, 24, 0.8))`,
                                                  },
                                                  children: _(H, {
                                                    href: { webPageId: `augiA20Il` },
                                                    motionChild: !0,
                                                    nodeId: `QspGFNM8U`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `ahU7NN8Bs`,
                                                    smoothScroll: !1,
                                                    children: _(E.a, {
                                                      className: `framer-styles-preset-qywj9v`,
                                                      "data-styles-preset": `nBjcbhcMb`,
                                                      children: `Home`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            },
                                          },
                                          h,
                                          b
                                        ),
                                      }),
                                    }),
                                  }),
                                  _(H, {
                                    href: { webPageId: `qPFmGLcvD` },
                                    motionChild: !0,
                                    nodeId: `tHAQ94NF0`,
                                    openInNewTab: !1,
                                    scopeId: `ahU7NN8Bs`,
                                    smoothScroll: !0,
                                    children: _(E.a, {
                                      className: `framer-1go74fe framer-8d7aal`,
                                      "data-framer-name": `footer_link`,
                                      layoutDependency: D,
                                      layoutId: `tHAQ94NF0`,
                                      whileHover: et,
                                      children: _(J, {
                                        __fromCanvasComponent: !0,
                                        children: _(s, {
                                          children: _(E.p, {
                                            style: {
                                              "--framer-letter-spacing": `-0.02em`,
                                              "--framer-line-height": `1.5em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(24, 24, 24)))`,
                                            },
                                            children: _(H, {
                                              href: { webPageId: `CFf_UwEef` },
                                              motionChild: !0,
                                              nodeId: `TAHXEqCCa`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `ahU7NN8Bs`,
                                              smoothScroll: !1,
                                              children: _(E.a, {
                                                className: `framer-styles-preset-qywj9v`,
                                                "data-styles-preset": `nBjcbhcMb`,
                                                children: `About Us`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-1lguh6u`,
                                        fonts: [`Inter`],
                                        layoutDependency: D,
                                        layoutId: `TAHXEqCCa`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(24, 24, 24))`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        variants: {
                                          ZCv6JDWov: {
                                            "--extracted-r6o4lv": `rgba(24, 24, 24, 0.8)`,
                                          },
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...Y(
                                          {
                                            ZCv6JDWov: {
                                              children: _(s, {
                                                children: _(E.p, {
                                                  style: {
                                                    "--framer-letter-spacing": `-0.02em`,
                                                    "--framer-line-height": `1.5em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(24, 24, 24, 0.8))`,
                                                  },
                                                  children: _(H, {
                                                    href: { webPageId: `CFf_UwEef` },
                                                    motionChild: !0,
                                                    nodeId: `TAHXEqCCa`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `ahU7NN8Bs`,
                                                    smoothScroll: !1,
                                                    children: _(E.a, {
                                                      className: `framer-styles-preset-qywj9v`,
                                                      "data-styles-preset": `nBjcbhcMb`,
                                                      children: `About Us`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            },
                                          },
                                          h,
                                          b
                                        ),
                                      }),
                                    }),
                                  }),
                                  _(H, {
                                    href: { webPageId: `ieMPuSMm6` },
                                    motionChild: !0,
                                    nodeId: `mSXBW52kT`,
                                    openInNewTab: !1,
                                    scopeId: `ahU7NN8Bs`,
                                    smoothScroll: !0,
                                    children: _(E.a, {
                                      className: `framer-i3cg6s framer-8d7aal`,
                                      "data-framer-name": `footer_link`,
                                      layoutDependency: D,
                                      layoutId: `mSXBW52kT`,
                                      whileHover: et,
                                      children: _(J, {
                                        __fromCanvasComponent: !0,
                                        children: _(s, {
                                          children: _(E.p, {
                                            style: {
                                              "--framer-letter-spacing": `-0.02em`,
                                              "--framer-line-height": `1.5em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(24, 24, 24)))`,
                                            },
                                            children: _(H, {
                                              href: { webPageId: `Pinumpnx5` },
                                              motionChild: !0,
                                              nodeId: `yC5FceRY4`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `ahU7NN8Bs`,
                                              smoothScroll: !1,
                                              children: _(E.a, {
                                                className: `framer-styles-preset-qywj9v`,
                                                "data-styles-preset": `nBjcbhcMb`,
                                                children: `Products`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-1c2suff`,
                                        fonts: [`Inter`],
                                        layoutDependency: D,
                                        layoutId: `yC5FceRY4`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(24, 24, 24))`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        variants: {
                                          ZCv6JDWov: {
                                            "--extracted-r6o4lv": `rgba(24, 24, 24, 0.8)`,
                                          },
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...Y(
                                          {
                                            ZCv6JDWov: {
                                              children: _(s, {
                                                children: _(E.p, {
                                                  style: {
                                                    "--framer-letter-spacing": `-0.02em`,
                                                    "--framer-line-height": `1.5em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(24, 24, 24, 0.8))`,
                                                  },
                                                  children: _(H, {
                                                    href: { webPageId: `Pinumpnx5` },
                                                    motionChild: !0,
                                                    nodeId: `yC5FceRY4`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `ahU7NN8Bs`,
                                                    smoothScroll: !1,
                                                    children: _(E.a, {
                                                      className: `framer-styles-preset-qywj9v`,
                                                      "data-styles-preset": `nBjcbhcMb`,
                                                      children: `Products`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            },
                                          },
                                          h,
                                          b
                                        ),
                                      }),
                                    }),
                                  }),
                                  _(H, {
                                    href: { webPageId: `zX41Lgqg6` },
                                    motionChild: !0,
                                    nodeId: `V7lS70qLT`,
                                    openInNewTab: !1,
                                    scopeId: `ahU7NN8Bs`,
                                    smoothScroll: !0,
                                    children: _(E.a, {
                                      className: `framer-13gewp1 framer-8d7aal`,
                                      "data-framer-name": `footer_link`,
                                      layoutDependency: D,
                                      layoutId: `V7lS70qLT`,
                                      whileHover: et,
                                      children: _(J, {
                                        __fromCanvasComponent: !0,
                                        children: _(s, {
                                          children: _(E.p, {
                                            style: {
                                              "--framer-letter-spacing": `-0.02em`,
                                              "--framer-line-height": `1.5em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(24, 24, 24)))`,
                                            },
                                            children: _(H, {
                                              href: { webPageId: `AIJK2IvNV` },
                                              motionChild: !0,
                                              nodeId: `D_3GUQFPx`,
                                              openInNewTab: !1,
                                              relValues: [],
                                              scopeId: `ahU7NN8Bs`,
                                              smoothScroll: !1,
                                              children: _(E.a, {
                                                className: `framer-styles-preset-qywj9v`,
                                                "data-styles-preset": `nBjcbhcMb`,
                                                children: `Contact Us`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-1augkuu`,
                                        fonts: [`Inter`],
                                        layoutDependency: D,
                                        layoutId: `D_3GUQFPx`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(24, 24, 24))`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        variants: {
                                          ZCv6JDWov: {
                                            "--extracted-r6o4lv": `rgba(24, 24, 24, 0.8)`,
                                          },
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...Y(
                                          {
                                            ZCv6JDWov: {
                                              children: _(s, {
                                                children: _(E.p, {
                                                  style: {
                                                    "--framer-letter-spacing": `-0.02em`,
                                                    "--framer-line-height": `1.5em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(24, 24, 24, 0.8))`,
                                                  },
                                                  children: _(H, {
                                                    href: { webPageId: `AIJK2IvNV` },
                                                    motionChild: !0,
                                                    nodeId: `D_3GUQFPx`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `ahU7NN8Bs`,
                                                    smoothScroll: !1,
                                                    children: _(E.a, {
                                                      className: `framer-styles-preset-qywj9v`,
                                                      "data-styles-preset": `nBjcbhcMb`,
                                                      children: `Contact Us`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            },
                                          },
                                          h,
                                          b
                                        ),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              S(E.ul, {
                                className: `framer-1gnzz6b`,
                                "data-framer-name": `list`,
                                layoutDependency: D,
                                layoutId: `AkfPmStG6`,
                                children: [
                                  _(H, {
                                    href: { webPageId: `AIJK2IvNV` },
                                    motionChild: !0,
                                    nodeId: `orCzVoIY6`,
                                    openInNewTab: !1,
                                    scopeId: `ahU7NN8Bs`,
                                    smoothScroll: !0,
                                    children: _(E.a, {
                                      className: `framer-lb3ps9 framer-8d7aal`,
                                      "data-framer-name": `footer_link`,
                                      layoutDependency: D,
                                      layoutId: `orCzVoIY6`,
                                      whileHover: et,
                                      children: _(J, {
                                        __fromCanvasComponent: !0,
                                        children: _(s, {
                                          children: _(E.p, {
                                            style: {
                                              "--framer-font-size": `14px`,
                                              "--framer-letter-spacing": `-0.02em`,
                                              "--framer-line-height": `1.5em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ff5d8a03-2efc-4a08-a84f-436b4c5962cc, rgba(24, 24, 24, 0.8)))`,
                                            },
                                            children: `AAZ TOOLS CO 1st floor, office no 9, 1043/44, Aman Plaza, Raviwar Peth, Pune- 411002`,
                                          }),
                                        }),
                                        className: `framer-13ubb13`,
                                        fonts: [`Inter`],
                                        layoutDependency: D,
                                        layoutId: `bH_9GJBk5`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-ff5d8a03-2efc-4a08-a84f-436b4c5962cc, rgba(24, 24, 24, 0.8))`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                        ...Y(
                                          {
                                            ZCv6JDWov: {
                                              children: _(s, {
                                                children: _(E.p, {
                                                  style: {
                                                    "--framer-letter-spacing": `-0.02em`,
                                                    "--framer-line-height": `1.5em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ff5d8a03-2efc-4a08-a84f-436b4c5962cc, rgba(24, 24, 24, 0.8)))`,
                                                  },
                                                  children: `AAZ TOOLS CO 1st floor, office no 9, 1043/44, Aman Plaza, Raviwar Peth, Pune- 411002`,
                                                }),
                                              }),
                                            },
                                          },
                                          h,
                                          b
                                        ),
                                      }),
                                    }),
                                  }),
                                  S(E.li, {
                                    className: `framer-12rm1ni`,
                                    "data-framer-name": `text`,
                                    layoutDependency: D,
                                    layoutId: `Gx4BhonCx`,
                                    children: [
                                      _(J, {
                                        __fromCanvasComponent: !0,
                                        children: _(s, {
                                          children: _(E.p, {
                                            style: {
                                              "--framer-font-size": `14px`,
                                              "--framer-letter-spacing": `-0.02em`,
                                              "--framer-line-height": `1.5em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ff5d8a03-2efc-4a08-a84f-436b4c5962cc, rgba(24, 24, 24, 0.8)))`,
                                            },
                                            children: _(H, {
                                              href: `aaztoolsco@hotmail.com`,
                                              motionChild: !0,
                                              nodeId: `jMlRuIbNS`,
                                              openInNewTab: !0,
                                              relValues: [],
                                              scopeId: `ahU7NN8Bs`,
                                              smoothScroll: !1,
                                              children: _(E.a, {
                                                className: `framer-styles-preset-qywj9v`,
                                                "data-styles-preset": `nBjcbhcMb`,
                                                children: `aaztoolsco@hotmail.com`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-1sg81j3`,
                                        fonts: [`Inter`],
                                        layoutDependency: D,
                                        layoutId: `jMlRuIbNS`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-ff5d8a03-2efc-4a08-a84f-436b4c5962cc, rgba(24, 24, 24, 0.8))`,
                                        },
                                        verticalAlignment: `top`,
                                        whileHover: et,
                                        withExternalLayout: !0,
                                        ...Y(
                                          {
                                            ZCv6JDWov: {
                                              children: _(s, {
                                                children: _(E.p, {
                                                  style: {
                                                    "--framer-letter-spacing": `-0.02em`,
                                                    "--framer-line-height": `1.5em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ff5d8a03-2efc-4a08-a84f-436b4c5962cc, rgba(24, 24, 24, 0.8)))`,
                                                  },
                                                  children: _(H, {
                                                    href: `aaztoolsco@hotmail.com`,
                                                    motionChild: !0,
                                                    nodeId: `jMlRuIbNS`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `ahU7NN8Bs`,
                                                    smoothScroll: !1,
                                                    children: _(E.a, {
                                                      className: `framer-styles-preset-qywj9v`,
                                                      "data-styles-preset": `nBjcbhcMb`,
                                                      children: `aaztoolsco@hotmail.com`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            },
                                          },
                                          h,
                                          b
                                        ),
                                      }),
                                      _(J, {
                                        __fromCanvasComponent: !0,
                                        children: _(s, {
                                          children: _(E.p, {
                                            style: {
                                              "--framer-font-size": `14px`,
                                              "--framer-letter-spacing": `-0.02em`,
                                              "--framer-line-height": `1.5em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(165, 165, 165))`,
                                            },
                                            children: _(H, {
                                              href: `https://www.instagram.com/aaztoolsco?igsh=ZjJuamNsdW15Ymtm`,
                                              motionChild: !0,
                                              nodeId: `KrXgkMGYp`,
                                              openInNewTab: !0,
                                              relValues: [],
                                              scopeId: `ahU7NN8Bs`,
                                              smoothScroll: !1,
                                              children: _(E.a, {
                                                className: `framer-styles-preset-qywj9v`,
                                                "data-styles-preset": `nBjcbhcMb`,
                                                children: `@aaztoolsco`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        className: `framer-ad2aw0`,
                                        fonts: [`Inter`],
                                        layoutDependency: D,
                                        layoutId: `KrXgkMGYp`,
                                        style: { "--extracted-r6o4lv": `rgb(165, 165, 165)` },
                                        verticalAlignment: `top`,
                                        whileHover: et,
                                        withExternalLayout: !0,
                                        ...Y(
                                          {
                                            ZCv6JDWov: {
                                              children: _(s, {
                                                children: _(E.p, {
                                                  style: {
                                                    "--framer-letter-spacing": `-0.02em`,
                                                    "--framer-line-height": `1.5em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(165, 165, 165))`,
                                                  },
                                                  children: _(H, {
                                                    href: `https://www.instagram.com/aaztoolsco?igsh=ZjJuamNsdW15Ymtm`,
                                                    motionChild: !0,
                                                    nodeId: `KrXgkMGYp`,
                                                    openInNewTab: !0,
                                                    relValues: [],
                                                    scopeId: `ahU7NN8Bs`,
                                                    smoothScroll: !1,
                                                    children: _(E.a, {
                                                      className: `framer-styles-preset-qywj9v`,
                                                      "data-styles-preset": `nBjcbhcMb`,
                                                      children: `@aaztoolsco`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            },
                                          },
                                          h,
                                          b
                                        ),
                                      }),
                                      S(E.div, {
                                        className: `framer-492506`,
                                        layoutDependency: D,
                                        layoutId: `sdP3IvX0J`,
                                        children: [
                                          _(J, {
                                            __fromCanvasComponent: !0,
                                            children: _(s, {
                                              children: _(E.p, {
                                                style: {
                                                  "--framer-font-size": `14px`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(0, 0, 0, 0.69))`,
                                                },
                                                children: _(H, {
                                                  href: `tel:9370277342`,
                                                  motionChild: !0,
                                                  nodeId: `mq25YkLTd`,
                                                  openInNewTab: !0,
                                                  relValues: [],
                                                  scopeId: `ahU7NN8Bs`,
                                                  smoothScroll: !1,
                                                  children: _(E.a, {
                                                    className: `framer-styles-preset-qywj9v`,
                                                    "data-styles-preset": `nBjcbhcMb`,
                                                    children: `9370277342`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            className: `framer-i58b5w`,
                                            fonts: [`Inter`],
                                            layoutDependency: D,
                                            layoutId: `mq25YkLTd`,
                                            style: { "--extracted-r6o4lv": `rgba(0, 0, 0, 0.69)` },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          _(J, {
                                            __fromCanvasComponent: !0,
                                            children: _(s, {
                                              children: _(E.p, {
                                                style: {
                                                  "--framer-font-size": `14px`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgba(0, 0, 0, 0.69))`,
                                                },
                                                children: _(H, {
                                                  href: `tel:9372444866`,
                                                  motionChild: !0,
                                                  nodeId: `aLrOTi3ch`,
                                                  openInNewTab: !0,
                                                  relValues: [],
                                                  scopeId: `ahU7NN8Bs`,
                                                  smoothScroll: !1,
                                                  children: _(E.a, {
                                                    className: `framer-styles-preset-qywj9v`,
                                                    "data-styles-preset": `nBjcbhcMb`,
                                                    children: `9372444866`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            className: `framer-jlyp0x`,
                                            fonts: [`Inter`],
                                            layoutDependency: D,
                                            layoutId: `aLrOTi3ch`,
                                            style: { "--extracted-r6o4lv": `rgba(0, 0, 0, 0.69)` },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          _(J, {
                                            __fromCanvasComponent: !0,
                                            children: _(s, {
                                              children: _(E.p, {
                                                className: `framer-styles-preset-1qkreg9`,
                                                "data-styles-preset": `ROHSdZbe7`,
                                                children: _(H, {
                                                  href: `tel:7507949522`,
                                                  motionChild: !0,
                                                  nodeId: `N8nS8R9gl`,
                                                  openInNewTab: !0,
                                                  relValues: [],
                                                  scopeId: `ahU7NN8Bs`,
                                                  smoothScroll: !1,
                                                  children: _(E.a, {
                                                    className: `framer-styles-preset-qywj9v`,
                                                    "data-styles-preset": `nBjcbhcMb`,
                                                    children: `7507949522`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            className: `framer-1cfsb09`,
                                            fonts: [`Inter`],
                                            layoutDependency: D,
                                            layoutId: `N8nS8R9gl`,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-w0zOv.framer-8d7aal, .framer-w0zOv .framer-8d7aal { display: block; }`,
          `.framer-w0zOv.framer-utsrh3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-w0zOv .framer-a4m4qr { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; max-width: 1200px; overflow: hidden; padding: 0px 32px 0px 32px; position: relative; width: 1px; }`,
          `.framer-w0zOv .framer-1aq57nz { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; max-width: 51%; overflow: hidden; padding: 60px 0px 30px 0px; position: relative; width: 1px; }`,
          `.framer-w0zOv .framer-qbsjx7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 20px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-w0zOv .framer-108y8n7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-w0zOv .framer-15v0vfu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-w0zOv .framer-qzs1qc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-w0zOv .framer-13b7rn4 { aspect-ratio: 1.122077922077922 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 196px); overflow: visible; position: relative; width: 220px; }`,
          `.framer-w0zOv .framer-zl9q7l, .framer-w0zOv .framer-1fkbck4 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-w0zOv .framer-lyszf8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; max-width: 70%; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-w0zOv .framer-3r9g8r, .framer-w0zOv .framer-i58b5w, .framer-w0zOv .framer-jlyp0x, .framer-w0zOv .framer-1cfsb09 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-w0zOv .framer-16gvor2 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 70px; height: min-content; justify-content: center; max-width: 50%; overflow: hidden; padding: 60px 0px 30px 0px; position: relative; width: 1px; }`,
          `.framer-w0zOv .framer-z9z36f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; padding: 0px 0px 0px 100px; position: relative; width: 100%; }`,
          `.framer-w0zOv .framer-16o4g8o { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: auto; justify-content: flex-start; overflow: hidden; padding: 16px 0px 0px 0px; position: relative; width: 1px; }`,
          `.framer-w0zOv .framer-1ixsqpa { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; list-style: none; margin: 0px; max-width: 50%; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-w0zOv .framer-1rvv1wx, .framer-w0zOv .framer-1go74fe, .framer-w0zOv .framer-i3cg6s, .framer-w0zOv .framer-13gewp1 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 6px 6px 6px 0px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
          `.framer-w0zOv .framer-vyfuia, .framer-w0zOv .framer-1lguh6u, .framer-w0zOv .framer-1c2suff, .framer-w0zOv .framer-1augkuu { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,
          `.framer-w0zOv .framer-1gnzz6b { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; list-style: none; margin: 0px; max-width: 50%; overflow: hidden; padding: 0px 0px 6px 0px; position: relative; width: 1px; }`,
          `.framer-w0zOv .framer-lb3ps9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 9px 0px 9px 0px; position: relative; text-decoration: none; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
          `.framer-w0zOv .framer-13ubb13 { flex: 1 0 0px; height: auto; overflow: hidden; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-w0zOv .framer-12rm1ni { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-w0zOv .framer-1sg81j3, .framer-w0zOv .framer-ad2aw0 { flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
          `.framer-w0zOv .framer-492506 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-w0zOv.framer-v-15xzok9.framer-utsrh3 { width: 810px; }`,
          `.framer-w0zOv.framer-v-15xzok9 .framer-a4m4qr { flex-direction: column; padding: 80px 32px 30px 32px; }`,
          `.framer-w0zOv.framer-v-15xzok9 .framer-1aq57nz, .framer-w0zOv.framer-v-1dxkafh .framer-1aq57nz { align-self: unset; flex: none; gap: 0px; height: min-content; justify-content: center; max-width: unset; padding: 0px; width: 100%; }`,
          `.framer-w0zOv.framer-v-15xzok9 .framer-qbsjx7 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 60px; justify-content: flex-start; }`,
          `.framer-w0zOv.framer-v-15xzok9 .framer-108y8n7 { flex: none; width: 100%; }`,
          `.framer-w0zOv.framer-v-15xzok9 .framer-16gvor2 { flex: none; gap: 40px; max-width: unset; padding: 50px 0px 0px 0px; width: 100%; }`,
          `.framer-w0zOv.framer-v-15xzok9 .framer-z9z36f { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 60px; justify-content: flex-start; padding: 0px; }`,
          `.framer-w0zOv.framer-v-15xzok9 .framer-16o4g8o { align-self: unset; flex: none; height: min-content; width: 100%; }`,
          `.framer-w0zOv.framer-v-15xzok9 .framer-1ixsqpa { gap: 8px; justify-content: flex-start; max-width: 35%; }`,
          `.framer-w0zOv.framer-v-15xzok9 .framer-1gnzz6b { align-self: stretch; height: auto; max-width: 40%; padding: 0px 0px 10px 0px; }`,
          `.framer-w0zOv.framer-v-15xzok9 .framer-492506 { gap: 2px; }`,
          `.framer-w0zOv.framer-v-1dxkafh.framer-utsrh3 { flex-direction: column; flex-wrap: wrap; overflow: visible; padding: 0px 20px 0px 20px; width: 390px; }`,
          `.framer-w0zOv.framer-v-1dxkafh .framer-a4m4qr { flex: none; flex-direction: column; order: 0; padding: 80px 16px 30px 16px; width: 100%; }`,
          `.framer-w0zOv.framer-v-1dxkafh .framer-qbsjx7, .framer-w0zOv.framer-v-1dxkafh .framer-z9z36f { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 50px; justify-content: center; padding: 0px; }`,
          `.framer-w0zOv.framer-v-1dxkafh .framer-108y8n7 { flex: none; gap: 24px; width: 100%; }`,
          `.framer-w0zOv.framer-v-1dxkafh .framer-13b7rn4 { height: var(--framer-aspect-ratio-supported, 162px); order: 0; width: 182px; }`,
          `.framer-w0zOv.framer-v-1dxkafh .framer-lyszf8 { max-width: unset; }`,
          `.framer-w0zOv.framer-v-1dxkafh .framer-16gvor2 { flex: none; gap: 40px; max-width: unset; padding: 40px 0px 0px 0px; width: 100%; }`,
          `.framer-w0zOv.framer-v-1dxkafh .framer-16o4g8o { align-self: unset; flex: none; flex-direction: column; gap: 40px; height: min-content; padding: 0px; width: 100%; }`,
          `.framer-w0zOv.framer-v-1dxkafh .framer-1ixsqpa { flex: none; justify-content: flex-start; max-width: unset; order: 1; width: 100%; }`,
          `.framer-w0zOv.framer-v-1dxkafh .framer-1gnzz6b { flex: none; gap: 20px; height: min-content; justify-content: flex-start; max-width: 80%; order: 0; width: 100%; }`,
          ...Fe,
          ...ze,
          ...Ue,
          `.framer-w0zOv[data-border="true"]::after, .framer-w0zOv [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-w0zOv`
      )),
      (ot.displayName = `AAZ Footer`),
      (ot.defaultProps = { height: 408, width: 1200 }),
      L(ot, {
        variant: {
          options: [`C0A1R7els`, `PXdqmrIL7`, `ZCv6JDWov`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: W.Enum,
        },
      }),
      q(
        ot,
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
          ...F(Ie),
          ...F(Be),
          ...F(We),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  ct,
  lt,
  ut,
  dt = e(() => {
    (R(),
      Ce.loadFonts([]),
      (ct = [{ explicitInter: !0, fonts: [] }]),
      (lt = [
        `.framer-g5wtz .framer-styles-preset-79x6wl:not(.rich-text-wrapper), .framer-g5wtz .framer-styles-preset-79x6wl.rich-text-wrapper a { --framer-link-hover-text-color: rgba(0, 0, 0, 0.57); --framer-link-text-color: #000000; }`,
      ]),
      (ut = `framer-g5wtz`));
  }),
  ft,
  pt,
  mt,
  ht = e(() => {
    (R(),
      Ce.loadFonts([`Inter`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (ft = [
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
              url: `../../assets/fonts/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
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
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (pt = [
        `.framer-frFF9 .framer-styles-preset-1h2dgto:not(.rich-text-wrapper), .framer-frFF9 .framer-styles-preset-1h2dgto.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: rgba(255, 255, 255, 0.8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 767px) and (min-width: 320px) { .framer-frFF9 .framer-styles-preset-1h2dgto:not(.rich-text-wrapper), .framer-frFF9 .framer-styles-preset-1h2dgto.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Karma", "Karma Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.04em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: rgba(255, 255, 255, 0.8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 319px) and (min-width: 0px) { .framer-frFF9 .framer-styles-preset-1h2dgto:not(.rich-text-wrapper), .framer-frFF9 .framer-styles-preset-1h2dgto.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Karma", "Karma Placeholder", serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: rgba(255, 255, 255, 0.8); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (mt = `framer-frFF9`));
  });
function gt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot = e(() => {
    (x(),
      R(),
      A(),
      w(),
      (_t = {
        BXkEXfMHY: { hover: !0 },
        dfJpz88Rf: { hover: !0 },
        ezmSAkIFs: { hover: !0 },
        falN1fDIC: { hover: !0 },
        FiYmjgYRN: { hover: !0 },
        OzMvYhxBE: { hover: !0 },
        SMvHw3CEy: { hover: !0 },
        YJnNmuhrO: { hover: !0 },
      }),
      (vt = [
        `falN1fDIC`,
        `dfJpz88Rf`,
        `BXkEXfMHY`,
        `ezmSAkIFs`,
        `YJnNmuhrO`,
        `OzMvYhxBE`,
        `SMvHw3CEy`,
        `FiYmjgYRN`,
      ]),
      (yt = `framer-P4VcL`),
      (bt = {
        BXkEXfMHY: `framer-v-4ztx1p`,
        dfJpz88Rf: `framer-v-11vi20h`,
        ezmSAkIFs: `framer-v-19ecn41`,
        falN1fDIC: `framer-v-16pbcx9`,
        FiYmjgYRN: `framer-v-1f9nfl7`,
        OzMvYhxBE: `framer-v-lmfbl7`,
        SMvHw3CEy: `framer-v-166ofh8`,
        YJnNmuhrO: `framer-v-5gzg29`,
      }),
      (xt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (St = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return _(D.Provider, { value: a, children: n });
      }),
      (Ct = E.create(s)),
      (wt = {
        "btn alternate / big": `YJnNmuhrO`,
        "btn alternate / small": `OzMvYhxBE`,
        "btn primary white / big": `SMvHw3CEy`,
        "btn primary white / small": `FiYmjgYRN`,
        "btn primary/big": `falN1fDIC`,
        "btn primary/small": `BXkEXfMHY`,
        "btn secondary/big": `dfJpz88Rf`,
        "btn secondary/small": `ezmSAkIFs`,
      }),
      (Tt = ({ btnText: e, click: t, height: n, id: r, link: i, newTab: a, width: o, ...s }) => ({
        ...s,
        a3AmWtoyK: t ?? s.a3AmWtoyK,
        BNEoSXub7: a ?? s.BNEoSXub7,
        rczEKI6tg: i ?? s.rczEKI6tg,
        variant: wt[s.variant] ?? s.variant ?? `falN1fDIC`,
        wmuc6oY5P: e ?? s.wmuc6oY5P ?? `Learn More`,
      })),
      (Et = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Dt = B(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: c } = G();
          V();
          let {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              wmuc6oY5P: p,
              rczEKI6tg: m,
              BNEoSXub7: h,
              a3AmWtoyK: g,
              ...v
            } = Tt(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: ee,
              gestureVariant: S,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = U({
              cycleOrder: vt,
              defaultVariant: `falN1fDIC`,
              enabledGestures: _t,
              ref: r,
              variant: f,
              variantClassNames: bt,
            }),
            A = Et(e, O),
            { activeVariantCallback: j, delay: M } = Ae(y),
            te = j(async (...e) => {
              if ((T({ isPressed: !1 }), g && (await g(...e)) === !1)) return !1;
            }),
            N = I(yt);
          return _(k, {
            id: d ?? i,
            children: _(Ct, {
              animate: O,
              initial: !1,
              children: _(St, {
                value: xt,
                children: _(H, {
                  href: m,
                  motionChild: !0,
                  nodeId: `falN1fDIC`,
                  openInNewTab: h,
                  scopeId: `lKlqiC_CJ`,
                  smoothScroll: !0,
                  children: _(E.a, {
                    ...v,
                    ...ee,
                    className: `${I(N, `framer-16pbcx9`, u, b)} framer-bk0kod`,
                    "data-border": !0,
                    "data-framer-name": `btn primary/big`,
                    "data-highlight": !0,
                    layoutDependency: A,
                    layoutId: `falN1fDIC`,
                    onTap: te,
                    ref: r,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-7a1396d4-66ef-449c-b5c8-17fb64a5937a, rgb(20, 60, 255))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-7a1396d4-66ef-449c-b5c8-17fb64a5937a, rgb(39, 99, 171))`,
                      ...l,
                    },
                    variants: {
                      "BXkEXfMHY-hover": {
                        "--border-color": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                        backgroundColor: `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                      },
                      "dfJpz88Rf-hover": {
                        "--border-color": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                        backgroundColor: `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                      },
                      "ezmSAkIFs-hover": {
                        "--border-color": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                        backgroundColor: `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                      },
                      "falN1fDIC-hover": {
                        "--border-color": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                        backgroundColor: `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                      },
                      "FiYmjgYRN-hover": {
                        "--border-color": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                        backgroundColor: `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                      },
                      "OzMvYhxBE-hover": {
                        "--border-color": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                        backgroundColor: `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                      },
                      "SMvHw3CEy-hover": {
                        "--border-color": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                        backgroundColor: `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                      },
                      "YJnNmuhrO-hover": {
                        "--border-color": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                        backgroundColor: `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                      },
                      dfJpz88Rf: {
                        "--border-color": `var(--token-09157182-62f9-4e8c-8c92-548e46e620e0, rgba(0, 0, 0, 0.2))`,
                        backgroundColor: `var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255))`,
                      },
                      ezmSAkIFs: {
                        "--border-color": `var(--token-09157182-62f9-4e8c-8c92-548e46e620e0, rgba(0, 0, 0, 0.2))`,
                        backgroundColor: `var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255))`,
                      },
                      FiYmjgYRN: {
                        "--border-color": `var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255))`,
                        backgroundColor: `var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255))`,
                      },
                      OzMvYhxBE: {
                        "--border-bottom-width": `0.5px`,
                        "--border-color": `var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255))`,
                        "--border-left-width": `0.5px`,
                        "--border-right-width": `0.5px`,
                        "--border-top-width": `0.5px`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      SMvHw3CEy: {
                        "--border-color": `var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255))`,
                        backgroundColor: `var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255))`,
                      },
                      YJnNmuhrO: {
                        "--border-bottom-width": `0.5px`,
                        "--border-color": `var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255))`,
                        "--border-left-width": `0.5px`,
                        "--border-right-width": `0.5px`,
                        "--border-top-width": `0.5px`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                    },
                    ...gt(
                      {
                        "BXkEXfMHY-hover": { "data-framer-name": void 0 },
                        "dfJpz88Rf-hover": { "data-framer-name": void 0 },
                        "ezmSAkIFs-hover": { "data-framer-name": void 0 },
                        "falN1fDIC-hover": { "data-framer-name": void 0 },
                        "FiYmjgYRN-hover": { "data-framer-name": void 0 },
                        "OzMvYhxBE-hover": { "data-framer-name": void 0 },
                        "SMvHw3CEy-hover": { "data-framer-name": void 0 },
                        "YJnNmuhrO-hover": { "data-framer-name": void 0 },
                        BXkEXfMHY: { "data-framer-name": `btn primary/small` },
                        dfJpz88Rf: { "data-framer-name": `btn secondary/big` },
                        ezmSAkIFs: { "data-framer-name": `btn secondary/small` },
                        FiYmjgYRN: { "data-framer-name": `btn primary white / small` },
                        OzMvYhxBE: { "data-framer-name": `btn alternate / small` },
                        SMvHw3CEy: { "data-framer-name": `btn primary white / big` },
                        YJnNmuhrO: { "data-framer-name": `btn alternate / big` },
                      },
                      y,
                      S
                    ),
                    children: _(J, {
                      __fromCanvasComponent: !0,
                      children: _(s, {
                        children: _(E.p, {
                          style: {
                            "--font-selector": `SW50ZXItTWVkaXVt`,
                            "--framer-font-size": `14px`,
                            "--framer-font-weight": `500`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255)))`,
                          },
                          children: `Learn More`,
                        }),
                      }),
                      className: `framer-nbss51`,
                      fonts: [`Inter-Medium`],
                      layoutDependency: A,
                      layoutId: `CMtFokgb9`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      text: p,
                      variants: {
                        "dfJpz88Rf-hover": {
                          "--extracted-r6o4lv": `var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255))`,
                        },
                        "ezmSAkIFs-hover": {
                          "--extracted-r6o4lv": `var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255))`,
                        },
                        "FiYmjgYRN-hover": {
                          "--extracted-r6o4lv": `var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255))`,
                        },
                        "SMvHw3CEy-hover": {
                          "--extracted-r6o4lv": `var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255))`,
                        },
                        dfJpz88Rf: {
                          "--extracted-r6o4lv": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(24, 24, 24))`,
                        },
                        ezmSAkIFs: {
                          "--extracted-r6o4lv": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(24, 24, 24))`,
                        },
                        FiYmjgYRN: {
                          "--extracted-r6o4lv": `var(--token-7a1396d4-66ef-449c-b5c8-17fb64a5937a, rgb(20, 60, 255))`,
                        },
                        SMvHw3CEy: {
                          "--extracted-r6o4lv": `var(--token-7a1396d4-66ef-449c-b5c8-17fb64a5937a, rgb(20, 60, 255))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...gt(
                        {
                          "dfJpz88Rf-hover": {
                            children: _(s, {
                              children: _(E.p, {
                                style: {
                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                  "--framer-font-size": `14px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255)))`,
                                },
                                children: `Learn More`,
                              }),
                            }),
                          },
                          "ezmSAkIFs-hover": {
                            children: _(s, {
                              children: _(E.p, {
                                style: {
                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                  "--framer-font-size": `14px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255)))`,
                                },
                                children: `Learn More`,
                              }),
                            }),
                          },
                          "FiYmjgYRN-hover": {
                            children: _(s, {
                              children: _(E.p, {
                                style: {
                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                  "--framer-font-size": `14px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255)))`,
                                },
                                children: `Learn More`,
                              }),
                            }),
                          },
                          "SMvHw3CEy-hover": {
                            children: _(s, {
                              children: _(E.p, {
                                style: {
                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                  "--framer-font-size": `14px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255)))`,
                                },
                                children: `Learn More`,
                              }),
                            }),
                          },
                          dfJpz88Rf: {
                            children: _(s, {
                              children: _(E.p, {
                                style: {
                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                  "--framer-font-size": `14px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(24, 24, 24)))`,
                                },
                                children: `Learn More`,
                              }),
                            }),
                          },
                          ezmSAkIFs: {
                            children: _(s, {
                              children: _(E.p, {
                                style: {
                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                  "--framer-font-size": `14px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(24, 24, 24)))`,
                                },
                                children: `Learn More`,
                              }),
                            }),
                          },
                          FiYmjgYRN: {
                            children: _(s, {
                              children: _(E.p, {
                                style: {
                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                  "--framer-font-size": `14px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7a1396d4-66ef-449c-b5c8-17fb64a5937a, rgb(20, 60, 255)))`,
                                },
                                children: `Learn More`,
                              }),
                            }),
                          },
                          SMvHw3CEy: {
                            children: _(s, {
                              children: _(E.p, {
                                style: {
                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                  "--framer-font-size": `14px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7a1396d4-66ef-449c-b5c8-17fb64a5937a, rgb(20, 60, 255)))`,
                                },
                                children: `Learn More`,
                              }),
                            }),
                          },
                        },
                        y,
                        S
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-P4VcL.framer-bk0kod, .framer-P4VcL .framer-bk0kod { display: block; }`,
          `.framer-P4VcL.framer-16pbcx9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 12px 24px 12px 24px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-P4VcL .framer-nbss51 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-P4VcL.framer-v-4ztx1p.framer-16pbcx9, .framer-P4VcL.framer-v-19ecn41.framer-16pbcx9, .framer-P4VcL.framer-v-lmfbl7.framer-16pbcx9, .framer-P4VcL.framer-v-1f9nfl7.framer-16pbcx9 { padding: 9px 16px 9px 16px; }`,
          `.framer-P4VcL[data-border="true"]::after, .framer-P4VcL [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-P4VcL`
      )),
      (Dt.displayName = `button`),
      (Dt.defaultProps = { height: 41, width: 125 }),
      L(Dt, {
        variant: {
          options: [
            `falN1fDIC`,
            `dfJpz88Rf`,
            `BXkEXfMHY`,
            `ezmSAkIFs`,
            `YJnNmuhrO`,
            `OzMvYhxBE`,
            `SMvHw3CEy`,
            `FiYmjgYRN`,
          ],
          optionTitles: [
            `btn primary/big`,
            `btn secondary/big`,
            `btn primary/small`,
            `btn secondary/small`,
            `btn alternate / big`,
            `btn alternate / small`,
            `btn primary white / big`,
            `btn primary white / small`,
          ],
          title: `Variant`,
          type: W.Enum,
        },
        wmuc6oY5P: {
          defaultValue: `Learn More`,
          displayTextArea: !1,
          title: `btn text`,
          type: W.String,
        },
        rczEKI6tg: { title: `Link`, type: W.Link },
        BNEoSXub7: { defaultValue: !1, title: `new tab`, type: W.Boolean },
        a3AmWtoyK: { title: `Click`, type: W.EventHandler },
      }),
      q(
        Dt,
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
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  X,
  It = e(() => {
    (x(),
      R(),
      A(),
      w(),
      (kt = `framer-2tAAF`),
      (At = { bQx7ehjBP: `framer-v-1yi634x` }),
      (jt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Mt = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return _(D.Provider, { value: a, children: n });
      }),
      (Nt = E.create(s)),
      (Pt = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Ft = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = B(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: s } = G(),
            c = V(),
            { style: l, className: u, layoutId: d, variant: f, ...p } = Pt(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: b,
              setGestureState: x,
              setVariant: ee,
              variants: S,
            } = U({ defaultVariant: `bQx7ehjBP`, ref: r, variant: f, variantClassNames: At }),
            w = Ft(e, S),
            T = I(kt);
          return _(k, {
            id: d ?? i,
            children: _(Nt, {
              animate: S,
              initial: !1,
              children: _(Mt, {
                value: jt,
                children: _(H, {
                  href: { webPageId: `augiA20Il` },
                  motionChild: !0,
                  nodeId: `bQx7ehjBP`,
                  openInNewTab: !1,
                  scopeId: `W3hws9M62`,
                  children: _(je, {
                    ...p,
                    ...v,
                    as: `a`,
                    background: {
                      alt: ``,
                      fit: `fill`,
                      intrinsicHeight: 1928,
                      intrinsicWidth: 2180,
                      loading: ie(c?.y || 0),
                      pixelHeight: 1928,
                      pixelWidth: 2180,
                      sizes: c?.width || `100vw`,
                      src: `../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png?width=2180&height=1928`,
                      srcSet: `../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png 512w,../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png?scale-down-to=1024&width=2180&height=1928 1024w,../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png?scale-down-to=2048&width=2180&height=1928 2048w,../../assets/images/SQeaplqb9s58Pcy0DnTNj3vrZY.png?width=2180&height=1928 2180w`,
                    },
                    className: `${I(T, `framer-1yi634x`, u, h)} framer-d3a2f4`,
                    "data-framer-name": `Variant 1`,
                    layoutDependency: w,
                    layoutId: `bQx7ehjBP`,
                    ref: r,
                    style: { ...l },
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-2tAAF.framer-d3a2f4, .framer-2tAAF .framer-d3a2f4 { display: block; }`,
          `.framer-2tAAF.framer-1yi634x { height: 50px; overflow: visible; position: relative; text-decoration: none; width: 56px; }`,
        ],
        `framer-2tAAF`
      )),
      (X.displayName = `Logopng`),
      (X.defaultProps = { height: 50, width: 56 }),
      q(X, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function Lt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  Z,
  qt = e(() => {
    (x(),
      R(),
      A(),
      w(),
      (Rt = [`ac_gKpGDi`, `p7dsU9cIJ`]),
      (zt = `framer-caUf9`),
      (Bt = { ac_gKpGDi: `framer-v-hqnvk2`, p7dsU9cIJ: `framer-v-b6tenm` }),
      (Vt = { damping: 40, delay: 0, mass: 1, stiffness: 600, type: `spring` }),
      (Ht = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return _(D.Provider, { value: a, children: n });
      }),
      (Ut = E.create(s)),
      (Wt = { Closed: `ac_gKpGDi`, Open: `p7dsU9cIJ` }),
      (Gt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Wt[r.variant] ?? r.variant ?? `ac_gKpGDi`,
      })),
      (Kt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = B(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: s } = G();
          V();
          let { style: c, className: l, layoutId: u, variant: d, ...f } = Gt(e),
            {
              baseVariant: p,
              classNames: m,
              clearLoadingGesture: h,
              gestureHandlers: g,
              gestureVariant: v,
              isLoading: y,
              setGestureState: b,
              setVariant: x,
              variants: ee,
            } = U({
              cycleOrder: Rt,
              defaultVariant: `ac_gKpGDi`,
              ref: r,
              variant: d,
              variantClassNames: Bt,
            }),
            S = Kt(e, ee),
            w = I(zt);
          return _(k, {
            id: u ?? i,
            children: _(Ut, {
              animate: ee,
              initial: !1,
              children: _(Ht, {
                value: Vt,
                children: _(E.div, {
                  ...f,
                  ...g,
                  className: I(w, `framer-hqnvk2`, l, m),
                  "data-framer-name": `Closed`,
                  layoutDependency: S,
                  layoutId: `ac_gKpGDi`,
                  ref: r,
                  style: { ...c },
                  ...Lt({ p7dsU9cIJ: { "data-framer-name": `Open` } }, p, v),
                  children: _(E.div, {
                    className: `framer-1vwd9i8`,
                    "data-framer-name": `Frame`,
                    layoutDependency: S,
                    layoutId: `HJMsOCh2I`,
                    style: { rotate: 0 },
                    variants: { p7dsU9cIJ: { rotate: -180 } },
                    children: _(ae, {
                      className: `framer-nnr0bj`,
                      "data-framer-name": `Icon`,
                      layout: `position`,
                      layoutDependency: S,
                      layoutId: `DYihnRczy`,
                      opacity: 1,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 14"><path d="M 3 5.5 L 7 9.5 L 11 5.5" fill="transparent" stroke-width="2" stroke="rgb(0, 0, 0)" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
                      svgContentId: 9826317624,
                      withExternalLayout: !0,
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-caUf9.framer-134v6m5, .framer-caUf9 .framer-134v6m5 { display: block; }`,
          `.framer-caUf9.framer-hqnvk2 { gap: 2px; height: 14px; overflow: visible; position: relative; width: 14px; }`,
          `.framer-caUf9 .framer-1vwd9i8 { flex: none; height: 14px; left: calc(50.00000000000002% - 14px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 14px / 2); width: 14px; }`,
          `.framer-caUf9 .framer-nnr0bj { flex: none; height: 14px; left: calc(50.00000000000002% - 14px / 2); position: absolute; top: calc(50.00000000000002% - 14px / 2); width: 14px; }`,
        ],
        `framer-caUf9`
      )),
      (Z.displayName = `Caret`),
      (Z.defaultProps = { height: 14, width: 14 }),
      L(Z, {
        variant: {
          options: [`ac_gKpGDi`, `p7dsU9cIJ`],
          optionTitles: [`Closed`, `Open`],
          title: `Variant`,
          type: W.Enum,
        },
      }),
      q(Z, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function Jt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn = e(() => {
    (x(),
      R(),
      A(),
      w(),
      qt(),
      (Yt = N(Z)),
      (Xt = [`yduVudu8N`, `BA0Elz9VC`]),
      (Zt = `framer-Tgejt`),
      (Qt = { BA0Elz9VC: `framer-v-1hxorr3`, yduVudu8N: `framer-v-19a564t` }),
      ($t = { damping: 40, delay: 0, mass: 1, stiffness: 600, type: `spring` }),
      (en = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return _(D.Provider, { value: a, children: n });
      }),
      (tn = E.create(s)),
      (nn = { Closed: `yduVudu8N`, Open: `BA0Elz9VC` }),
      (rn = ({ height: e, hover: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        DApvjrdfG: r ?? a.DApvjrdfG ?? `Product`,
        PWSlWeqS6: t ?? a.PWSlWeqS6,
        variant: nn[a.variant] ?? a.variant ?? `yduVudu8N`,
      })),
      (an = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (on = B(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: c } = G(),
            l = V(),
            {
              style: u,
              className: d,
              layoutId: f,
              variant: p,
              PWSlWeqS6: m,
              DApvjrdfG: h,
              ...g
            } = rn(e),
            {
              baseVariant: v,
              classNames: y,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: ee,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = U({
              cycleOrder: Xt,
              defaultVariant: `yduVudu8N`,
              ref: r,
              variant: p,
              variantClassNames: Qt,
            }),
            A = an(e, O),
            { activeVariantCallback: j, delay: te } = Ae(v),
            N = j(async (...e) => {
              if ((T({ isHovered: !0 }), m && (await m(...e)) === !1)) return !1;
            }),
            P = I(Zt);
          return _(k, {
            id: f ?? i,
            children: _(tn, {
              animate: O,
              initial: !1,
              children: _(en, {
                value: $t,
                children: S(E.div, {
                  ...g,
                  ...x,
                  className: I(P, `framer-19a564t`, d, y),
                  "data-framer-name": `Closed`,
                  "data-highlight": !0,
                  layoutDependency: A,
                  layoutId: `yduVudu8N`,
                  onMouseEnter: N,
                  ref: r,
                  style: { backgroundColor: `rgb(255, 255, 255)`, ...u },
                  ...Jt({ BA0Elz9VC: { "data-framer-name": `Open` } }, v, ee),
                  children: [
                    _(J, {
                      __fromCanvasComponent: !0,
                      children: _(s, {
                        children: _(E.p, {
                          style: {
                            "--font-selector": `SW50ZXItTWVkaXVt`,
                            "--framer-font-size": `15px`,
                            "--framer-font-weight": `500`,
                            "--framer-letter-spacing": `-0.01em`,
                            "--framer-line-height": `2em`,
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(68, 68, 68))`,
                          },
                          children: `Product`,
                        }),
                      }),
                      className: `framer-1pin0sh`,
                      fonts: [`Inter-Medium`],
                      layoutDependency: A,
                      layoutId: `stgcg9qcg`,
                      style: {
                        "--extracted-r6o4lv": `rgb(68, 68, 68)`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      text: h,
                      variants: { BA0Elz9VC: { "--extracted-r6o4lv": `rgb(136, 136, 136)` } },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Jt(
                        {
                          BA0Elz9VC: {
                            children: _(s, {
                              children: _(E.p, {
                                style: {
                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                  "--framer-font-size": `15px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-0.01em`,
                                  "--framer-line-height": `2em`,
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(136, 136, 136))`,
                                },
                                children: `Product`,
                              }),
                            }),
                          },
                        },
                        v,
                        ee
                      ),
                    }),
                    _(K, {
                      height: 14,
                      y: (l?.y || 0) + (5 + ((l?.height || 40) - 10 - 14) / 2),
                      children: _(M, {
                        className: `framer-2e47rm-container`,
                        layoutDependency: A,
                        layoutId: `VkikQTHzw-container`,
                        nodeId: `VkikQTHzw`,
                        rendersWithMotion: !0,
                        scopeId: `YbtlX76V7`,
                        children: _(Z, {
                          height: `100%`,
                          id: `VkikQTHzw`,
                          layoutId: `VkikQTHzw`,
                          variant: `ac_gKpGDi`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Tgejt.framer-1byb5xl, .framer-Tgejt .framer-1byb5xl { display: block; }`,
          `.framer-Tgejt.framer-19a564t { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 5px 0px 5px 0px; position: relative; width: min-content; }`,
          `.framer-Tgejt .framer-1pin0sh { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-Tgejt .framer-2e47rm-container { flex: none; height: auto; position: relative; width: auto; }`,
        ],
        `framer-Tgejt`
      )),
      (on.displayName = `Trigger`),
      (on.defaultProps = { height: 40, width: 74 }),
      L(on, {
        variant: {
          options: [`yduVudu8N`, `BA0Elz9VC`],
          optionTitles: [`Closed`, `Open`],
          title: `Variant`,
          type: W.Enum,
        },
        PWSlWeqS6: { title: `Hover`, type: W.EventHandler },
        DApvjrdfG: { defaultValue: `Product`, displayTextArea: !1, title: `Title`, type: W.String },
      }),
      q(
        on,
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
          ...Yt,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn = e(() => {
    (x(),
      R(),
      A(),
      w(),
      dt(),
      ht(),
      Ot(),
      It(),
      sn(),
      Ke(),
      (cn = N(X)),
      (ln = N(on)),
      (un = N(qe)),
      (dn = N(Dt)),
      (fn = [`fuZJiVgAg`, `h9hKilZ_Q`, `h0_SUWjyf`, `CVX3kRdvb`, `dWNznT6yQ`, `GRG8KlSWU`]),
      (pn = `framer-35WOu`),
      (mn = {
        CVX3kRdvb: `framer-v-xreia`,
        dWNznT6yQ: `framer-v-35auq8`,
        fuZJiVgAg: `framer-v-1h44n21`,
        GRG8KlSWU: `framer-v-1s3bljr`,
        h0_SUWjyf: `framer-v-s018at`,
        h9hKilZ_Q: `framer-v-10vw8ur`,
      }),
      (hn = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (gn = { delay: 0, duration: 0.6, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (_n = { damping: 40, delay: 0, mass: 1, stiffness: 600, type: `spring` }),
      (vn = { delay: 0.4, duration: 0.6, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (yn = {
        opacity: 0.5,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 36, delay: 0, mass: 4, stiffness: 125, type: `spring` },
      }),
      (bn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (xn = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return _(D.Provider, { value: a, children: n });
      }),
      (Sn = {
        "desktop / transparant": `fuZJiVgAg`,
        "desktop / white": `CVX3kRdvb`,
        "phone close / transparant": `h9hKilZ_Q`,
        "phone close / white": `dWNznT6yQ`,
        "phone open / transparant": `h0_SUWjyf`,
        "phone open / white": `GRG8KlSWU`,
      }),
      (Cn = E.create(s)),
      (wn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Sn[r.variant] ?? r.variant ?? `fuZJiVgAg`,
      })),
      (Tn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (En = B(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: c } = G(),
            l = V(),
            { style: u, className: d, layoutId: f, variant: p, ...m } = wn(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: x,
              setGestureState: ee,
              setVariant: w,
              variants: T,
            } = U({
              cycleOrder: fn,
              defaultVariant: `fuZJiVgAg`,
              ref: r,
              variant: p,
              variantClassNames: mn,
            }),
            D = Tn(e, T),
            { activeVariantCallback: O, delay: A } = Ae(h),
            j = O(async (...e) => {
              w(`h0_SUWjyf`);
            }),
            te = O(async (...e) => {
              w(`h9hKilZ_Q`);
            }),
            N = O(async (...e) => {
              w(`GRG8KlSWU`);
            }),
            P = O(async (...e) => {
              w(`dWNznT6yQ`);
            }),
            ne = O(async (...e) => {
              await A(() => w(`h9hKilZ_Q`), 200);
            }),
            F = O(async (...e) => {
              w(`dWNznT6yQ`);
            }),
            re = O(async (...e) => {
              await A(() => w(`h9hKilZ_Q`), 200);
            }),
            ie = I(pn, mt, ut),
            ae = () => !![`h9hKilZ_Q`, `h0_SUWjyf`, `dWNznT6yQ`, `GRG8KlSWU`].includes(h),
            L = () => h !== `GRG8KlSWU`,
            R = () => h === `GRG8KlSWU`;
          return (
            me(),
            _(k, {
              id: f ?? i,
              children: _(Cn, {
                animate: T,
                initial: !1,
                children: _(xn, {
                  value: hn,
                  children: _(E.nav, {
                    ...m,
                    ...y,
                    className: I(ie, `framer-1h44n21`, d, g),
                    "data-framer-name": `desktop / transparant`,
                    "data-hide-scrollbars": !0,
                    layoutDependency: D,
                    layoutId: `fuZJiVgAg`,
                    ref: r,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      ...u,
                    },
                    variants: {
                      CVX3kRdvb: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-cb52c7ff-f68b-4303-a0ef-7859c86603ee, rgb(240, 240, 240))`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                        backgroundColor: `var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255))`,
                      },
                      dWNznT6yQ: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-cb52c7ff-f68b-4303-a0ef-7859c86603ee, rgb(240, 240, 240))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `rgba(0, 0, 0, 0)`,
                      },
                      GRG8KlSWU: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgb(240, 240, 240)`,
                      },
                    },
                    ...Q(
                      {
                        CVX3kRdvb: { "data-border": !0, "data-framer-name": `desktop / white` },
                        dWNznT6yQ: { "data-border": !0, "data-framer-name": `phone close / white` },
                        GRG8KlSWU: { "data-framer-name": `phone open / white` },
                        h0_SUWjyf: { "data-framer-name": `phone open / transparant` },
                        h9hKilZ_Q: { "data-framer-name": `phone close / transparant` },
                      },
                      h,
                      b
                    ),
                    children: _(E.div, {
                      className: `framer-krqt7y`,
                      "data-framer-name": `nav`,
                      layoutDependency: D,
                      layoutId: `iVT6VHPef`,
                      style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                      variants: {
                        CVX3kRdvb: { backgroundColor: `rgba(0, 0, 0, 0)` },
                        dWNznT6yQ: {
                          backgroundColor: `var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255))`,
                        },
                        GRG8KlSWU: { backgroundColor: `rgb(255, 255, 255)` },
                        h0_SUWjyf: { backgroundColor: `rgb(255, 255, 255)` },
                      },
                      children: S(E.div, {
                        className: `framer-1mpe4n8`,
                        "data-framer-name": `nav_wrapper`,
                        layoutDependency: D,
                        layoutId: `WHR1bP6eH`,
                        style: { backgroundColor: `rgba(0, 0, 0, 0)` },
                        variants: { GRG8KlSWU: { backgroundColor: `rgb(255, 255, 255)` } },
                        children: [
                          S(E.div, {
                            className: `framer-6lnpgd`,
                            "data-framer-name": `logo_wrapper`,
                            layoutDependency: D,
                            layoutId: `rS9lTYGhi`,
                            children: [
                              _(H, {
                                href: { webPageId: `L8RstwUFZ` },
                                motionChild: !0,
                                nodeId: `KOUTAoYdR`,
                                openInNewTab: !1,
                                scopeId: `PLIwGxG46`,
                                smoothScroll: !0,
                                children: _(E.a, {
                                  className: `framer-17lxhox framer-1yxr3tt`,
                                  "data-framer-name": `logo`,
                                  layoutDependency: D,
                                  layoutId: `KOUTAoYdR`,
                                  children: _(K, {
                                    height: 50,
                                    width: `56px`,
                                    y:
                                      (l?.y || 0) +
                                      (0 + ((l?.height || 68) - 0 - 50) / 2) +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                    ...Q(
                                      {
                                        dWNznT6yQ: { y: (l?.y || 0) + 0 + 0 + 0 + 0 + 0 + 7 + 0 },
                                        GRG8KlSWU: { y: (l?.y || 0) + 0 + 0 + 0 + 0 + 0 + 7 + 0 },
                                        h0_SUWjyf: { y: (l?.y || 0) + 0 + 0 + 0 + 0 + 0 + 7 + 0 },
                                        h9hKilZ_Q: { y: (l?.y || 0) + 0 + 0 + 0 + 0 + 0 + 7 + 0 },
                                      },
                                      h,
                                      b
                                    ),
                                    children: _(M, {
                                      className: `framer-17elya3-container`,
                                      layoutDependency: D,
                                      layoutId: `sVbmjSuuJ-container`,
                                      nodeId: `sVbmjSuuJ`,
                                      rendersWithMotion: !0,
                                      scopeId: `PLIwGxG46`,
                                      children: _(X, {
                                        height: `100%`,
                                        id: `sVbmjSuuJ`,
                                        layoutId: `sVbmjSuuJ`,
                                        style: { height: `100%`, width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              ae() &&
                                S(E.div, {
                                  className: `framer-1r5pkh4`,
                                  "data-framer-name": `menu_icon`,
                                  layoutDependency: D,
                                  layoutId: `ptBxuKe6m`,
                                  ...Q(
                                    {
                                      dWNznT6yQ: { "data-highlight": !0, onTap: N },
                                      GRG8KlSWU: { "data-highlight": !0, onTap: P },
                                      h0_SUWjyf: { "data-highlight": !0, onTap: te },
                                      h9hKilZ_Q: { "data-highlight": !0, onTap: j },
                                    },
                                    h,
                                    b
                                  ),
                                  children: [
                                    _(E.div, {
                                      className: `framer-ptjugj`,
                                      "data-framer-name": `Bottom`,
                                      layoutDependency: D,
                                      layoutId: `tInanpoxP`,
                                      style: {
                                        backgroundColor: `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(24, 24, 24))`,
                                        borderBottomLeftRadius: 10,
                                        borderBottomRightRadius: 10,
                                        borderTopLeftRadius: 10,
                                        borderTopRightRadius: 10,
                                        rotate: 0,
                                      },
                                      variants: {
                                        dWNznT6yQ: {
                                          backgroundColor: `var(--token-6ddd8928-dd02-4cca-a094-896e4418f766, rgb(6, 6, 57))`,
                                          rotate: 0,
                                        },
                                        GRG8KlSWU: {
                                          backgroundColor: `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                                          rotate: -45,
                                        },
                                        h0_SUWjyf: {
                                          backgroundColor: `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                                          rotate: -45,
                                        },
                                        h9hKilZ_Q: { backgroundColor: `rgb(20, 20, 20)` },
                                      },
                                    }),
                                    _(E.div, {
                                      className: `framer-11pkdel`,
                                      "data-framer-name": `Top`,
                                      layoutDependency: D,
                                      layoutId: `ChASsO2uF`,
                                      style: {
                                        backgroundColor: `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(24, 24, 24))`,
                                        borderBottomLeftRadius: 10,
                                        borderBottomRightRadius: 10,
                                        borderTopLeftRadius: 10,
                                        borderTopRightRadius: 10,
                                        rotate: 0,
                                      },
                                      variants: {
                                        dWNznT6yQ: {
                                          backgroundColor: `var(--token-6ddd8928-dd02-4cca-a094-896e4418f766, rgb(6, 6, 57))`,
                                          rotate: 0,
                                        },
                                        GRG8KlSWU: {
                                          backgroundColor: `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                                          rotate: 45,
                                        },
                                        h0_SUWjyf: {
                                          backgroundColor: `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                                          rotate: 45,
                                        },
                                        h9hKilZ_Q: { backgroundColor: `rgb(20, 20, 20)` },
                                      },
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          _(xn, {
                            ...Q(
                              {
                                dWNznT6yQ: { value: vn },
                                GRG8KlSWU: { value: _n },
                                h0_SUWjyf: { value: _n },
                                h9hKilZ_Q: { value: gn },
                              },
                              h,
                              b
                            ),
                            children: S(E.div, {
                              className: `framer-11yso4j`,
                              "data-framer-name": `nav_menu`,
                              layoutDependency: D,
                              layoutId: `sDlz5JBMe`,
                              style: { opacity: 1 },
                              variants: {
                                CVX3kRdvb: { opacity: 1 },
                                dWNznT6yQ: { opacity: 0 },
                                GRG8KlSWU: { opacity: 1 },
                                h0_SUWjyf: { opacity: 1 },
                                h9hKilZ_Q: { opacity: 0 },
                              },
                              children: [
                                S(E.div, {
                                  className: `framer-1qg5zvg`,
                                  "data-framer-name": `nav_inner`,
                                  layoutDependency: D,
                                  layoutId: `VHxdi1_2E`,
                                  children: [
                                    _(H, {
                                      href: { webPageId: `qPFmGLcvD` },
                                      motionChild: !0,
                                      nodeId: `VLoZ5DgNs`,
                                      openInNewTab: !1,
                                      scopeId: `PLIwGxG46`,
                                      smoothScroll: !0,
                                      ...Q(
                                        { GRG8KlSWU: { href: { webPageId: `augiA20Il` } } },
                                        h,
                                        b
                                      ),
                                      children: _(E.a, {
                                        className: `framer-1sjepm framer-1yxr3tt`,
                                        "data-framer-name": `nav_link`,
                                        layoutDependency: D,
                                        layoutId: `VLoZ5DgNs`,
                                        whileHover: yn,
                                        ...Q(
                                          {
                                            GRG8KlSWU: { "data-highlight": !0, onTap: P },
                                            h0_SUWjyf: { "data-highlight": !0, onTap: ne },
                                          },
                                          h,
                                          b
                                        ),
                                        children: _(J, {
                                          __fromCanvasComponent: !0,
                                          children: _(s, {
                                            children: _(E.p, {
                                              style: {
                                                "--framer-font-size": `14px`,
                                                "--framer-line-height": `1.5em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255)))`,
                                              },
                                              children: `Home`,
                                            }),
                                          }),
                                          className: `framer-47bazq`,
                                          fonts: [`Inter`],
                                          layoutDependency: D,
                                          layoutId: `Pnk6ZnQ3G`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255))`,
                                            "--framer-paragraph-spacing": `0px`,
                                          },
                                          variants: {
                                            CVX3kRdvb: {
                                              "--extracted-r6o4lv": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                                            },
                                            GRG8KlSWU: {
                                              "--extracted-r6o4lv": `var(--token-070bc01f-a34a-451a-859d-6817ebd7ffc1, rgb(0, 0, 0))`,
                                            },
                                            h0_SUWjyf: {
                                              "--extracted-r6o4lv": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                                            },
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                          ...Q(
                                            {
                                              CVX3kRdvb: {
                                                children: _(s, {
                                                  children: _(E.p, {
                                                    style: {
                                                      "--framer-font-size": `14px`,
                                                      "--framer-line-height": `1.5em`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0)))`,
                                                    },
                                                    children: `Home`,
                                                  }),
                                                }),
                                              },
                                              GRG8KlSWU: {
                                                children: _(s, {
                                                  children: _(E.p, {
                                                    style: {
                                                      "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                      "--framer-font-size": `20px`,
                                                      "--framer-letter-spacing": `-0.04em`,
                                                      "--framer-line-height": `1.6em`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-070bc01f-a34a-451a-859d-6817ebd7ffc1, rgb(0, 0, 0)))`,
                                                    },
                                                    children: `Home`,
                                                  }),
                                                }),
                                              },
                                              h0_SUWjyf: {
                                                children: _(s, {
                                                  children: _(E.p, {
                                                    style: {
                                                      "--framer-font-size": `14px`,
                                                      "--framer-line-height": `1.5em`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0)))`,
                                                    },
                                                    children: `Home`,
                                                  }),
                                                }),
                                              },
                                            },
                                            h,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                    _(H, {
                                      href: { webPageId: `L8RstwUFZ` },
                                      motionChild: !0,
                                      nodeId: `yMAJtuSLj`,
                                      openInNewTab: !1,
                                      scopeId: `PLIwGxG46`,
                                      smoothScroll: !0,
                                      ...Q(
                                        {
                                          dWNznT6yQ: { href: void 0 },
                                          GRG8KlSWU: { href: { webPageId: `CFf_UwEef` } },
                                          h9hKilZ_Q: { href: void 0 },
                                        },
                                        h,
                                        b
                                      ),
                                      children: _(E.a, {
                                        className: `framer-e1m4ll framer-1yxr3tt`,
                                        "data-framer-name": `nav_link`,
                                        layoutDependency: D,
                                        layoutId: `yMAJtuSLj`,
                                        whileHover: yn,
                                        ...Q(
                                          {
                                            GRG8KlSWU: { "data-highlight": !0, onTap: P },
                                            h0_SUWjyf: { "data-highlight": !0, onTap: ne },
                                          },
                                          h,
                                          b
                                        ),
                                        children: _(J, {
                                          __fromCanvasComponent: !0,
                                          children: _(s, {
                                            children: _(E.p, {
                                              style: {
                                                "--framer-font-size": `14px`,
                                                "--framer-line-height": `1.5em`,
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255)))`,
                                              },
                                              children: `About`,
                                            }),
                                          }),
                                          className: `framer-ck771t`,
                                          fonts: [`Inter`],
                                          layoutDependency: D,
                                          layoutId: `pupPkFPJy`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-655c1f47-382b-46e2-bd33-bdfec16a29cd, rgb(255, 255, 255))`,
                                            "--framer-paragraph-spacing": `0px`,
                                          },
                                          variants: {
                                            CVX3kRdvb: {
                                              "--extracted-r6o4lv": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                                            },
                                            GRG8KlSWU: {
                                              "--extracted-r6o4lv": `var(--token-070bc01f-a34a-451a-859d-6817ebd7ffc1, rgb(0, 0, 0))`,
                                            },
                                            h0_SUWjyf: {
                                              "--extracted-r6o4lv": `var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0))`,
                                            },
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                          ...Q(
                                            {
                                              CVX3kRdvb: {
                                                children: _(s, {
                                                  children: _(E.p, {
                                                    style: {
                                                      "--framer-font-size": `14px`,
                                                      "--framer-line-height": `1.5em`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0)))`,
                                                    },
                                                    children: `About`,
                                                  }),
                                                }),
                                              },
                                              dWNznT6yQ: { verticalAlignment: `center` },
                                              GRG8KlSWU: {
                                                children: _(s, {
                                                  children: _(E.p, {
                                                    className: `framer-styles-preset-1h2dgto`,
                                                    "data-styles-preset": `N4oOmxiMl`,
                                                    style: {
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-070bc01f-a34a-451a-859d-6817ebd7ffc1, rgb(0, 0, 0)))`,
                                                    },
                                                    children: `About`,
                                                  }),
                                                }),
                                                verticalAlignment: `center`,
                                              },
                                              h0_SUWjyf: {
                                                children: _(s, {
                                                  children: _(E.p, {
                                                    style: {
                                                      "--framer-font-size": `14px`,
                                                      "--framer-line-height": `1.5em`,
                                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c63c5632-2d92-4593-a80f-4d310866cb5e, rgb(0, 0, 0)))`,
                                                    },
                                                    children: `About`,
                                                  }),
                                                }),
                                                verticalAlignment: `center`,
                                              },
                                              h9hKilZ_Q: { verticalAlignment: `center` },
                                            },
                                            h,
                                            b
                                          ),
                                        }),
                                      }),
                                    }),
                                    L() &&
                                      _(K, {
                                        height: 40,
                                        y:
                                          (l?.y || 0) +
                                          (0 + ((l?.height || 68) - 0 - 50) / 2) +
                                          0 +
                                          4.5 +
                                          0 +
                                          0 +
                                          2.5,
                                        ...Q(
                                          {
                                            dWNznT6yQ: {
                                              y: (l?.y || 0) + 0 + 0 + 0 + 0 + 74 + 0 + 0 + 0 + 98,
                                            },
                                            h0_SUWjyf: {
                                              y: (l?.y || 0) + 0 + 0 + 0 + 0 + 74 + 0 + 0 + 0 + 101,
                                            },
                                            h9hKilZ_Q: {
                                              y: (l?.y || 0) + 0 + 0 + 0 + 0 + 74 + 0 + 0 + 4 + 98,
                                            },
                                          },
                                          h,
                                          b
                                        ),
                                        children: _(M, {
                                          className: `framer-4vnxh7-container`,
                                          layoutDependency: D,
                                          layoutId: `mkyU_B6Rb-container`,
                                          nodeId: `mkyU_B6Rb`,
                                          rendersWithMotion: !0,
                                          scopeId: `PLIwGxG46`,
                                          children: _(on, {
                                            DApvjrdfG: `Product`,
                                            height: `100%`,
                                            id: `mkyU_B6Rb`,
                                            layoutId: `mkyU_B6Rb`,
                                            variant: bn(`yduVudu8N`),
                                            width: `100%`,
                                            ...Q({ CVX3kRdvb: { PWSlWeqS6: void 0 } }, h, b),
                                          }),
                                        }),
                                      }),
                                  ],
                                }),
                                S(E.div, {
                                  className: `framer-j6jbwb`,
                                  "data-framer-name": `button_group`,
                                  layoutDependency: D,
                                  layoutId: `QwH0Rq1ni`,
                                  children: [
                                    R() &&
                                      S(E.div, {
                                        className: `framer-11hj774`,
                                        "data-framer-name": `Links:Product`,
                                        layoutDependency: D,
                                        layoutId: `FRdKz31mi`,
                                        children: [
                                          _(J, {
                                            __fromCanvasComponent: !0,
                                            children: _(s, {
                                              children: _(E.p, {
                                                style: {
                                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                                  "--framer-font-size": `20px`,
                                                  "--framer-letter-spacing": `-0.04em`,
                                                  "--framer-line-height": `1.6em`,
                                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(153, 153, 153))`,
                                                },
                                                children: `Products`,
                                              }),
                                            }),
                                            className: `framer-7nl6t5`,
                                            fonts: [`Inter`],
                                            layoutDependency: D,
                                            layoutId: `iiLCmZVky`,
                                            style: {
                                              "--extracted-r6o4lv": `rgb(153, 153, 153)`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          _(E.div, {
                                            className: `framer-7sem9p`,
                                            "data-border": !0,
                                            "data-framer-name": `Item`,
                                            layoutDependency: D,
                                            layoutId: `irrXxyu1H`,
                                            style: {
                                              "--border-bottom-width": `1px`,
                                              "--border-color": `rgb(166, 166, 166)`,
                                              "--border-left-width": `0px`,
                                              "--border-right-width": `0px`,
                                              "--border-style": `solid`,
                                              "--border-top-width": `0px`,
                                            },
                                            children: _(J, {
                                              __fromCanvasComponent: !0,
                                              children: _(s, {
                                                children: _(E.p, {
                                                  style: {
                                                    "--framer-font-size": `14px`,
                                                    "--framer-letter-spacing": `-0.02em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-070bc01f-a34a-451a-859d-6817ebd7ffc1, rgb(0, 0, 0)))`,
                                                  },
                                                  children: _(H, {
                                                    href: { webPageId: `Pinumpnx5` },
                                                    motionChild: !0,
                                                    nodeId: `U8Gao2_LE`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `PLIwGxG46`,
                                                    smoothScroll: !1,
                                                    children: _(E.a, {
                                                      className: `framer-styles-preset-79x6wl`,
                                                      "data-styles-preset": `hFvKuWSVP`,
                                                      children: `Hand Tools`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-mv39my`,
                                              "data-highlight": !0,
                                              fonts: [`Inter`],
                                              layoutDependency: D,
                                              layoutId: `U8Gao2_LE`,
                                              onTap: P,
                                              style: {
                                                "--extracted-r6o4lv": `var(--token-070bc01f-a34a-451a-859d-6817ebd7ffc1, rgb(0, 0, 0))`,
                                                "--framer-paragraph-spacing": `0px`,
                                              },
                                              verticalAlignment: `center`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          _(E.div, {
                                            className: `framer-196twqi`,
                                            "data-border": !0,
                                            "data-framer-name": `Item`,
                                            layoutDependency: D,
                                            layoutId: `ZQfQqL114`,
                                            style: {
                                              "--border-bottom-width": `1px`,
                                              "--border-color": `rgb(166, 166, 166)`,
                                              "--border-left-width": `0px`,
                                              "--border-right-width": `0px`,
                                              "--border-style": `solid`,
                                              "--border-top-width": `0px`,
                                            },
                                            children: _(J, {
                                              __fromCanvasComponent: !0,
                                              children: _(s, {
                                                children: _(E.p, {
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-font-size": `14px`,
                                                    "--framer-letter-spacing": `-0.02em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-070bc01f-a34a-451a-859d-6817ebd7ffc1, rgb(0, 0, 0)))`,
                                                  },
                                                  children: _(H, {
                                                    href: { webPageId: `k3I5EzP4j` },
                                                    motionChild: !0,
                                                    nodeId: `SP6ET_TUm`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `PLIwGxG46`,
                                                    smoothScroll: !1,
                                                    children: _(E.a, {
                                                      className: `framer-styles-preset-79x6wl`,
                                                      "data-styles-preset": `hFvKuWSVP`,
                                                      children: `Power Tools`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-qr7o9s`,
                                              "data-highlight": !0,
                                              fonts: [`Inter`],
                                              layoutDependency: D,
                                              layoutId: `SP6ET_TUm`,
                                              onTap: P,
                                              style: {
                                                "--extracted-r6o4lv": `var(--token-070bc01f-a34a-451a-859d-6817ebd7ffc1, rgb(0, 0, 0))`,
                                                "--framer-paragraph-spacing": `0px`,
                                              },
                                              verticalAlignment: `center`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          _(E.div, {
                                            className: `framer-1ucdqpg`,
                                            "data-border": !0,
                                            "data-framer-name": `Item`,
                                            layoutDependency: D,
                                            layoutId: `VtZrHk7Q6`,
                                            style: {
                                              "--border-bottom-width": `1px`,
                                              "--border-color": `rgb(166, 166, 166)`,
                                              "--border-left-width": `0px`,
                                              "--border-right-width": `0px`,
                                              "--border-style": `solid`,
                                              "--border-top-width": `0px`,
                                            },
                                            children: _(J, {
                                              __fromCanvasComponent: !0,
                                              children: _(s, {
                                                children: _(E.p, {
                                                  style: {
                                                    "--framer-font-size": `14px`,
                                                    "--framer-letter-spacing": `-0.02em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-070bc01f-a34a-451a-859d-6817ebd7ffc1, rgb(0, 0, 0)))`,
                                                  },
                                                  children: _(H, {
                                                    href: { webPageId: `xidqw88KX` },
                                                    motionChild: !0,
                                                    nodeId: `xPycu7PDm`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `PLIwGxG46`,
                                                    smoothScroll: !1,
                                                    children: _(E.a, {
                                                      className: `framer-styles-preset-79x6wl`,
                                                      "data-styles-preset": `hFvKuWSVP`,
                                                      children: `Measuring & Digital meters`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-18i7plz`,
                                              "data-highlight": !0,
                                              fonts: [`Inter`],
                                              layoutDependency: D,
                                              layoutId: `xPycu7PDm`,
                                              onTap: P,
                                              style: {
                                                "--extracted-r6o4lv": `var(--token-070bc01f-a34a-451a-859d-6817ebd7ffc1, rgb(0, 0, 0))`,
                                                "--framer-paragraph-spacing": `0px`,
                                              },
                                              verticalAlignment: `center`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          _(E.div, {
                                            className: `framer-1fjcccu`,
                                            "data-border": !0,
                                            "data-framer-name": `Item`,
                                            layoutDependency: D,
                                            layoutId: `MA5Ujp1of`,
                                            style: {
                                              "--border-bottom-width": `1px`,
                                              "--border-color": `rgb(166, 166, 166)`,
                                              "--border-left-width": `0px`,
                                              "--border-right-width": `0px`,
                                              "--border-style": `solid`,
                                              "--border-top-width": `0px`,
                                            },
                                            children: _(J, {
                                              __fromCanvasComponent: !0,
                                              children: _(s, {
                                                children: _(E.p, {
                                                  style: {
                                                    "--framer-font-size": `14px`,
                                                    "--framer-letter-spacing": `-0.02em`,
                                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-070bc01f-a34a-451a-859d-6817ebd7ffc1, rgb(0, 0, 0)))`,
                                                  },
                                                  children: _(H, {
                                                    href: { webPageId: `AttXBZoeD` },
                                                    motionChild: !0,
                                                    nodeId: `gPvIZlTMG`,
                                                    openInNewTab: !1,
                                                    relValues: [],
                                                    scopeId: `PLIwGxG46`,
                                                    smoothScroll: !1,
                                                    children: _(E.a, {
                                                      className: `framer-styles-preset-79x6wl`,
                                                      "data-styles-preset": `hFvKuWSVP`,
                                                      children: `Fasteners, Safety items & Cable ties`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              className: `framer-1dr3bxo`,
                                              "data-highlight": !0,
                                              fonts: [`Inter`],
                                              layoutDependency: D,
                                              layoutId: `gPvIZlTMG`,
                                              onTap: P,
                                              style: {
                                                "--extracted-r6o4lv": `var(--token-070bc01f-a34a-451a-859d-6817ebd7ffc1, rgb(0, 0, 0))`,
                                                "--framer-paragraph-spacing": `0px`,
                                              },
                                              verticalAlignment: `center`,
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                          _(K, {
                                            height: 46,
                                            ...Q(
                                              {
                                                GRG8KlSWU: {
                                                  y:
                                                    (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    74 +
                                                    0 +
                                                    112 +
                                                    16 +
                                                    0 +
                                                    4 +
                                                    361,
                                                },
                                              },
                                              h,
                                              b
                                            ),
                                            children: _(M, {
                                              className: `framer-q1skj-container`,
                                              layoutDependency: D,
                                              layoutId: `gDLBepV9a-container`,
                                              nodeId: `gDLBepV9a`,
                                              rendersWithMotion: !0,
                                              scopeId: `PLIwGxG46`,
                                              children: _(qe, {
                                                height: `100%`,
                                                id: `gDLBepV9a`,
                                                layoutId: `gDLBepV9a`,
                                                PuJJv4mcP: `Contact us`,
                                                variant: bn(`RgTKWyphZ`),
                                                width: `100%`,
                                                YvTP0PxrM: F,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    L() &&
                                      _(fe, {
                                        links: [
                                          {
                                            href: { webPageId: `ieMPuSMm6` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `ieMPuSMm6` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `ieMPuSMm6` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `ieMPuSMm6` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `ieMPuSMm6` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          _(K, {
                                            height: 41,
                                            y:
                                              (l?.y || 0) +
                                              (0 + ((l?.height || 68) - 0 - 50) / 2) +
                                              0 +
                                              4.5 +
                                              0 +
                                              0 +
                                              0,
                                            ...Q(
                                              {
                                                dWNznT6yQ: {
                                                  width: `calc(min(${l?.width || `100vw`}, 1200px) - 32px)`,
                                                  y:
                                                    (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    74 +
                                                    0 +
                                                    138 +
                                                    16 +
                                                    0,
                                                },
                                                h0_SUWjyf: {
                                                  width: `calc(min(${l?.width || `100vw`}, 1200px) - 32px)`,
                                                  y:
                                                    (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    74 +
                                                    0 +
                                                    141 +
                                                    16 +
                                                    0,
                                                },
                                                h9hKilZ_Q: {
                                                  width: `calc(min(${l?.width || `100vw`}, 1200px) - 32px)`,
                                                  y:
                                                    (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    74 +
                                                    0 +
                                                    142 +
                                                    16 +
                                                    0,
                                                },
                                              },
                                              h,
                                              b
                                            ),
                                            children: _(M, {
                                              className: `framer-1cmxsqk-container`,
                                              layoutDependency: D,
                                              layoutId: `FvML3Q4Rx-container`,
                                              nodeId: `FvML3Q4Rx`,
                                              rendersWithMotion: !0,
                                              scopeId: `PLIwGxG46`,
                                              children: _(Dt, {
                                                BNEoSXub7: !1,
                                                height: `100%`,
                                                id: `FvML3Q4Rx`,
                                                layoutId: `FvML3Q4Rx`,
                                                rczEKI6tg: e[0],
                                                variant: bn(`BXkEXfMHY`),
                                                width: `100%`,
                                                wmuc6oY5P: `Contact Us`,
                                                ...Q(
                                                  {
                                                    CVX3kRdvb: { rczEKI6tg: e[3] },
                                                    dWNznT6yQ: {
                                                      rczEKI6tg: e[4],
                                                      style: { width: `100%` },
                                                      variant: bn(`falN1fDIC`),
                                                    },
                                                    h0_SUWjyf: {
                                                      a3AmWtoyK: re,
                                                      rczEKI6tg: e[2],
                                                      style: { width: `100%` },
                                                      variant: bn(`falN1fDIC`),
                                                    },
                                                    h9hKilZ_Q: {
                                                      rczEKI6tg: e[1],
                                                      style: { width: `100%` },
                                                      variant: bn(`falN1fDIC`),
                                                    },
                                                  },
                                                  h,
                                                  b
                                                ),
                                              }),
                                            }),
                                          }),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-35WOu.framer-1yxr3tt, .framer-35WOu .framer-1yxr3tt { display: block; }`,
          `.framer-35WOu.framer-1h44n21 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 68px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-35WOu .framer-krqt7y { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-35WOu .framer-1mpe4n8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px 32px 0px 32px; position: relative; width: 1px; }`,
          `.framer-35WOu .framer-6lnpgd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-35WOu .framer-17lxhox { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 9.62px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-35WOu .framer-17elya3-container { flex: none; height: 50px; position: relative; width: 56px; }`,
          `.framer-35WOu .framer-1r5pkh4 { flex: none; height: 40px; overflow: hidden; position: relative; width: 40px; }`,
          `.framer-35WOu .framer-ptjugj { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(62.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-35WOu .framer-11pkdel { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(37.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-35WOu .framer-11yso4j { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-35WOu .framer-1qg5zvg { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: auto; justify-content: flex-start; overflow: visible; padding: 4px 0px 0px 350px; position: relative; width: 1px; }`,
          `.framer-35WOu .framer-1sjepm, .framer-35WOu .framer-e1m4ll { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
          `.framer-35WOu .framer-47bazq, .framer-35WOu .framer-ck771t { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-35WOu .framer-4vnxh7-container, .framer-35WOu .framer-q1skj-container, .framer-35WOu .framer-1cmxsqk-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-35WOu .framer-j6jbwb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-35WOu .framer-11hj774 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 21px; height: min-content; justify-content: flex-start; padding: 4px 0px 0px 0px; position: relative; width: 358px; }`,
          `.framer-35WOu .framer-7nl6t5 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-35WOu .framer-7sem9p, .framer-35WOu .framer-196twqi, .framer-35WOu .framer-1ucdqpg, .framer-35WOu .framer-1fjcccu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: 56px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-35WOu .framer-mv39my, .framer-35WOu .framer-qr7o9s, .framer-35WOu .framer-18i7plz, .framer-35WOu .framer-1dr3bxo { -webkit-user-select: none; cursor: pointer; flex: 1 0 0px; height: 100%; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-35WOu.framer-v-10vw8ur.framer-1h44n21 { flex-direction: column; gap: 0px; height: 64px; overflow: hidden; width: 390px; }`,
          `.framer-35WOu.framer-v-10vw8ur .framer-krqt7y, .framer-35WOu.framer-v-35auq8 .framer-krqt7y { align-content: flex-start; align-items: flex-start; flex: none; order: 0; width: 100%; }`,
          `.framer-35WOu.framer-v-10vw8ur .framer-1mpe4n8, .framer-35WOu.framer-v-s018at .framer-1mpe4n8, .framer-35WOu.framer-v-35auq8 .framer-1mpe4n8, .framer-35WOu.framer-v-1s3bljr .framer-1mpe4n8 { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; justify-content: flex-start; padding: 0px 16px 0px 16px; width: 100%; }`,
          `.framer-35WOu.framer-v-10vw8ur .framer-6lnpgd, .framer-35WOu.framer-v-s018at .framer-6lnpgd, .framer-35WOu.framer-v-1s3bljr .framer-6lnpgd { gap: unset; height: 64px; justify-content: space-between; order: 0; width: 100%; z-index: 2; }`,
          `.framer-35WOu.framer-v-10vw8ur .framer-17lxhox { flex: 1 0 0px; order: 0; width: 1px; }`,
          `.framer-35WOu.framer-v-10vw8ur .framer-1r5pkh4, .framer-35WOu.framer-v-s018at .framer-1r5pkh4, .framer-35WOu.framer-v-35auq8 .framer-1r5pkh4, .framer-35WOu.framer-v-1s3bljr .framer-1r5pkh4 { cursor: pointer; height: 44px; order: 1; width: 44px; }`,
          `.framer-35WOu.framer-v-10vw8ur .framer-11yso4j, .framer-35WOu.framer-v-s018at .framer-11yso4j, .framer-35WOu.framer-v-35auq8 .framer-11yso4j, .framer-35WOu.framer-v-1s3bljr .framer-11yso4j { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; gap: 0px; justify-content: flex-start; order: 1; padding: 0px 0px 36px 0px; width: 100%; z-index: 2; }`,
          `.framer-35WOu.framer-v-10vw8ur .framer-1qg5zvg { align-self: unset; flex: none; flex-direction: column; gap: 0px; height: min-content; order: 0; padding: 4px 0px 0px 0px; width: 100%; }`,
          `.framer-35WOu.framer-v-10vw8ur .framer-1sjepm, .framer-35WOu.framer-v-35auq8 .framer-1sjepm { justify-content: flex-start; padding: 8px 0px 16px 0px; width: 100%; }`,
          `.framer-35WOu.framer-v-10vw8ur .framer-e1m4ll, .framer-35WOu.framer-v-35auq8 .framer-e1m4ll { gap: 15px; justify-content: flex-start; overflow: hidden; padding: 16px 0px 16px 0px; width: 100%; }`,
          `.framer-35WOu.framer-v-10vw8ur .framer-j6jbwb, .framer-35WOu.framer-v-s018at .framer-j6jbwb, .framer-35WOu.framer-v-35auq8 .framer-j6jbwb, .framer-35WOu.framer-v-1s3bljr .framer-j6jbwb { flex-direction: column; gap: 16px; order: 1; padding: 16px 0px 0px 0px; width: 100%; }`,
          `.framer-35WOu.framer-v-10vw8ur .framer-1cmxsqk-container, .framer-35WOu.framer-v-s018at .framer-1cmxsqk-container, .framer-35WOu.framer-v-35auq8 .framer-1cmxsqk-container { width: 100%; }`,
          `.framer-35WOu.framer-v-s018at.framer-1h44n21 { flex-direction: column; gap: 0px; height: min-content; overflow: hidden; width: 390px; }`,
          `.framer-35WOu.framer-v-s018at .framer-krqt7y, .framer-35WOu.framer-v-1s3bljr .framer-krqt7y { align-content: flex-start; align-items: flex-start; flex: none; height: calc(var(--framer-viewport-height, 100vh) * 1); order: 0; width: 100%; }`,
          `.framer-35WOu.framer-v-s018at .framer-17lxhox, .framer-35WOu.framer-v-35auq8 .framer-17lxhox, .framer-35WOu.framer-v-1s3bljr .framer-17lxhox { order: 0; }`,
          `.framer-35WOu.framer-v-s018at .framer-ptjugj, .framer-35WOu.framer-v-s018at .framer-11pkdel, .framer-35WOu.framer-v-1s3bljr .framer-ptjugj, .framer-35WOu.framer-v-1s3bljr .framer-11pkdel { bottom: 21px; height: unset; top: 21px; }`,
          `.framer-35WOu.framer-v-s018at .framer-1qg5zvg { align-self: unset; flex: none; flex-direction: column; gap: 0px; height: 141px; order: 0; padding: 0px; width: 100%; }`,
          `.framer-35WOu.framer-v-s018at .framer-1sjepm { cursor: pointer; justify-content: flex-start; order: 0; padding: 8px 0px 16px 0px; width: 100%; }`,
          `.framer-35WOu.framer-v-s018at .framer-e1m4ll { cursor: pointer; gap: 15px; height: 56px; justify-content: flex-start; order: 1; overflow: hidden; padding: 16px 0px 16px 0px; width: 100%; }`,
          `.framer-35WOu.framer-v-s018at .framer-4vnxh7-container { order: 2; }`,
          `.framer-35WOu.framer-v-35auq8.framer-1h44n21 { flex-direction: column; gap: 0px; height: 61px; overflow: hidden; width: 390px; }`,
          `.framer-35WOu.framer-v-35auq8 .framer-6lnpgd { gap: unset; height: 64px; justify-content: space-between; order: 0; padding: 0px 12px 0px 12px; width: 100%; z-index: 2; }`,
          `.framer-35WOu.framer-v-35auq8 .framer-1qg5zvg, .framer-35WOu.framer-v-1s3bljr .framer-1qg5zvg { align-self: unset; flex: none; flex-direction: column; gap: 0px; height: min-content; order: 0; padding: 0px; width: 100%; }`,
          `.framer-35WOu.framer-v-1s3bljr.framer-1h44n21 { flex-direction: column; gap: 0px; height: min-content; width: 390px; }`,
          `.framer-35WOu.framer-v-1s3bljr .framer-1sjepm { cursor: pointer; justify-content: flex-start; padding: 8px 0px 16px 0px; width: 100%; }`,
          `.framer-35WOu.framer-v-1s3bljr .framer-e1m4ll { cursor: pointer; gap: 15px; height: 56px; justify-content: flex-start; overflow: hidden; padding: 16px 0px 16px 0px; width: 100%; }`,
          ...pt,
          ...lt,
          `.framer-35WOu[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-35WOu [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
          `.framer-35WOu[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-35WOu [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
          `.framer-35WOu[data-hide-scrollbars="true"], .framer-35WOu [data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          `.framer-35WOu[data-border="true"]::after, .framer-35WOu [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-35WOu`
      )),
      (En.displayName = `AAZ Nav`),
      (En.defaultProps = { height: 68, width: 1200 }),
      L(En, {
        variant: {
          options: [`fuZJiVgAg`, `h9hKilZ_Q`, `h0_SUWjyf`, `CVX3kRdvb`, `dWNznT6yQ`, `GRG8KlSWU`],
          optionTitles: [
            `desktop / transparant`,
            `phone close / transparant`,
            `phone open / transparant`,
            `desktop / white`,
            `phone close / white`,
            `phone open / white`,
          ],
          title: `Variant`,
          type: W.Enum,
        },
      }),
      q(
        En,
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
          ...cn,
          ...ln,
          ...un,
          ...dn,
          ...F(ft),
          ...F(ct),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (En.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([j(X, {}, t), j(on, {}, t), j(qe, {}, t), j(Dt, {}, t)])
        ),
      }));
  }),
  On,
  kn,
  An,
  jn = e(() => {
    (R(),
      Ce.loadFonts([`Inter-Medium`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-MediumItalic`]),
      (On = [
        {
          explicitInter: !0,
          fonts: [
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
              url: `../../assets/fonts/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
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
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/khkJkwSL66WFg8SX6Wa726c.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/0E7IMbDzcGABpBwwqNEt60wU0w.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/NTJ0nQgIF0gcDelS14zQ9NR9Q.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/QrcNhgEPfRl0LS8qz5Ln8olanl8.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/JEXmejW8mXOYMtt0hyRg811kHac.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/Bo5CNzBv77CafbxOtKIkpw9egw.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/uy9s0iWuxiNnVt8EpTI3gzohpwo.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (kn = [
        `.framer-aMnbH .framer-styles-preset-1yy64kz:not(.rich-text-wrapper), .framer-aMnbH .framer-styles-preset-1yy64kz.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-aMnbH .framer-styles-preset-1yy64kz:not(.rich-text-wrapper), .framer-aMnbH .framer-styles-preset-1yy64kz.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-aMnbH .framer-styles-preset-1yy64kz:not(.rich-text-wrapper), .framer-aMnbH .framer-styles-preset-1yy64kz.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.6em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #000000; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (An = `framer-aMnbH`));
  }),
  Mn,
  Nn,
  Pn,
  Fn = e(() => {
    (R(),
      Ce.loadFonts([`Inter`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (Mn = [
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
              url: `../../assets/fonts/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
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
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (Nn = [
        `.framer-Hbqkn .framer-styles-preset-kp7a6u:not(.rich-text-wrapper), .framer-Hbqkn .framer-styles-preset-kp7a6u.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-070bc01f-a34a-451a-859d-6817ebd7ffc1, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-Hbqkn .framer-styles-preset-kp7a6u:not(.rich-text-wrapper), .framer-Hbqkn .framer-styles-preset-kp7a6u.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-070bc01f-a34a-451a-859d-6817ebd7ffc1, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-Hbqkn .framer-styles-preset-kp7a6u:not(.rich-text-wrapper), .framer-Hbqkn .framer-styles-preset-kp7a6u.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-070bc01f-a34a-451a-859d-6817ebd7ffc1, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Pn = `framer-Hbqkn`));
  }),
  In,
  Ln,
  Rn,
  zn = e(() => {
    (R(),
      Ce.loadFonts([]),
      (In = [{ explicitInter: !0, fonts: [] }]),
      (Ln = [
        `.framer-QjsPL .framer-styles-preset-19cdckt:not(.rich-text-wrapper), .framer-QjsPL .framer-styles-preset-19cdckt.rich-text-wrapper a { --framer-link-hover-text-color: #000000; --framer-link-text-color: rgba(0, 0, 0, 0.57); }`,
      ]),
      (Rn = `framer-QjsPL`));
  });
function Bn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  $,
  tr = e(() => {
    (x(),
      R(),
      A(),
      w(),
      dt(),
      Fn(),
      zn(),
      Ke(),
      (Vn = N(qe)),
      (Hn = ve(be(E.div))),
      (Un = [`rWTa8Px_5`, `AaEscSWT6`]),
      (Wn = `framer-yE9yU`),
      (Gn = { AaEscSWT6: `framer-v-o7w8sx`, rWTa8Px_5: `framer-v-nz8s5c` }),
      (Kn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 30, delay: 0, mass: 1, stiffness: 600, type: `spring` },
        x: 0,
        y: 0,
      }),
      (qn = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.9,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Jn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Yn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Xn = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return _(D.Provider, { value: a, children: n });
      }),
      (Zn = { Default: `rWTa8Px_5`, Phone: `AaEscSWT6` }),
      (Qn = E.create(s)),
      ($n = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        FhmzBHtLJ: e ?? i.FhmzBHtLJ,
        variant: Zn[i.variant] ?? i.variant ?? `rWTa8Px_5`,
      })),
      (er = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = B(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: c } = G(),
            l = V(),
            { style: u, className: d, layoutId: f, variant: p, FhmzBHtLJ: m, ...h } = $n(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: ee,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = U({
              cycleOrder: Un,
              defaultVariant: `rWTa8Px_5`,
              ref: r,
              variant: p,
              variantClassNames: Gn,
            }),
            O = er(e, D),
            { activeVariantCallback: A, delay: j } = Ae(g),
            te = A(async (...e) => {
              if (m && (await m(...e)) === !1) return !1;
              T(`rWTa8Px_5`);
            }),
            N = I(Wn, ut, Pn, Rn),
            P = () => g !== `AaEscSWT6`,
            ne = () => g === `AaEscSWT6`;
          return _(k, {
            id: f ?? i,
            children: _(Qn, {
              animate: D,
              initial: !1,
              children: _(Xn, {
                value: Jn,
                children: S(Hn, {
                  ...h,
                  ...b,
                  __framer__presenceAnimate: Kn,
                  __framer__presenceInitial: qn,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  className: I(N, `framer-nz8s5c`, d, v),
                  "data-border": !0,
                  "data-framer-appear-id": `nz8s5c`,
                  "data-framer-name": `Default`,
                  layoutDependency: O,
                  layoutId: `rWTa8Px_5`,
                  optimized: !0,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgb(238, 238, 238)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `rgb(255, 255, 255)`,
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    ...u,
                  },
                  variants: {
                    AaEscSWT6: {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                  },
                  ...Bn({ AaEscSWT6: { "data-framer-name": `Phone` } }, g, x),
                  children: [
                    _(E.div, {
                      className: `framer-1coni9p`,
                      "data-framer-name": `Item`,
                      layoutDependency: O,
                      layoutId: `Ty3iLeTSt`,
                      style: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `rgba(0, 0, 0, 0)`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                      },
                      variants: {
                        AaEscSWT6: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `rgb(166, 166, 166)`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                      },
                      ...Bn({ AaEscSWT6: { "data-border": !0 } }, g, x),
                      children: _(J, {
                        __fromCanvasComponent: !0,
                        children: _(s, {
                          children: _(E.p, {
                            style: {
                              "--font-selector": `SW50ZXItTWVkaXVt`,
                              "--framer-font-size": `15px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.01em`,
                              "--framer-line-height": `1.3em`,
                              "--framer-text-alignment": `left`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(17, 17, 17))`,
                            },
                            children: _(H, {
                              href: { webPageId: `Pinumpnx5` },
                              motionChild: !0,
                              nodeId: `BtdvhkblM`,
                              openInNewTab: !1,
                              relValues: [],
                              scopeId: `TeSwe3lUU`,
                              smoothScroll: !1,
                              children: _(E.a, {
                                className: `framer-styles-preset-79x6wl`,
                                "data-styles-preset": `hFvKuWSVP`,
                                children: `Hand Tools`,
                              }),
                            }),
                          }),
                        }),
                        className: `framer-a4yja8`,
                        fonts: [`Inter-Medium`],
                        layoutDependency: O,
                        layoutId: `BtdvhkblM`,
                        style: {
                          "--extracted-r6o4lv": `rgb(17, 17, 17)`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Bn(
                          {
                            AaEscSWT6: {
                              "data-highlight": !0,
                              children: _(s, {
                                children: _(E.p, {
                                  className: `framer-styles-preset-kp7a6u`,
                                  "data-styles-preset": `KPOL7SIJy`,
                                  children: _(H, {
                                    href: { webPageId: `Pinumpnx5` },
                                    motionChild: !0,
                                    nodeId: `BtdvhkblM`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `TeSwe3lUU`,
                                    smoothScroll: !1,
                                    children: _(E.a, {
                                      className: `framer-styles-preset-19cdckt`,
                                      "data-styles-preset": `yC7Htf11S`,
                                      children: `Hand Tools`,
                                    }),
                                  }),
                                }),
                              }),
                              fonts: [`Inter`],
                              onTap: void 0,
                              verticalAlignment: `center`,
                            },
                          },
                          g,
                          x
                        ),
                      }),
                    }),
                    _(E.div, {
                      className: `framer-lhnbk2`,
                      "data-framer-name": `Item`,
                      layoutDependency: O,
                      layoutId: `jQp1PBZPB`,
                      style: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `rgba(0, 0, 0, 0)`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                      },
                      variants: {
                        AaEscSWT6: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `rgb(166, 166, 166)`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                      },
                      ...Bn({ AaEscSWT6: { "data-border": !0 } }, g, x),
                      children: _(J, {
                        __fromCanvasComponent: !0,
                        children: _(s, {
                          children: _(E.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `SW50ZXItTWVkaXVt`,
                              "--framer-font-size": `15px`,
                              "--framer-font-weight": `500`,
                              "--framer-letter-spacing": `-0.01em`,
                              "--framer-line-height": `1.3em`,
                              "--framer-text-alignment": `left`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(17, 17, 17))`,
                            },
                            children: _(H, {
                              href: { webPageId: `k3I5EzP4j` },
                              motionChild: !0,
                              nodeId: `QnUG9Ja2x`,
                              openInNewTab: !1,
                              relValues: [],
                              scopeId: `TeSwe3lUU`,
                              smoothScroll: !1,
                              children: _(E.a, {
                                className: `framer-styles-preset-79x6wl`,
                                "data-styles-preset": `hFvKuWSVP`,
                                children: `Power Tools`,
                              }),
                            }),
                          }),
                        }),
                        className: `framer-ta5eqt`,
                        fonts: [`Inter-Medium`],
                        layoutDependency: O,
                        layoutId: `QnUG9Ja2x`,
                        style: {
                          "--extracted-r6o4lv": `rgb(17, 17, 17)`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Bn(
                          {
                            AaEscSWT6: {
                              children: _(s, {
                                children: _(E.p, {
                                  className: `framer-styles-preset-kp7a6u`,
                                  "data-styles-preset": `KPOL7SIJy`,
                                  dir: `auto`,
                                  children: _(H, {
                                    href: { webPageId: `k3I5EzP4j` },
                                    motionChild: !0,
                                    nodeId: `QnUG9Ja2x`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `TeSwe3lUU`,
                                    smoothScroll: !1,
                                    children: _(E.a, {
                                      className: `framer-styles-preset-19cdckt`,
                                      "data-styles-preset": `yC7Htf11S`,
                                      children: `Power Tools`,
                                    }),
                                  }),
                                }),
                              }),
                              fonts: [`Inter`],
                              verticalAlignment: `center`,
                            },
                          },
                          g,
                          x
                        ),
                      }),
                    }),
                    S(E.div, {
                      className: `framer-111jvfm`,
                      "data-framer-name": `Item`,
                      layoutDependency: O,
                      layoutId: `mDerV3zDy`,
                      style: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `rgba(0, 0, 0, 0)`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                      },
                      variants: {
                        AaEscSWT6: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `rgb(166, 166, 166)`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                      },
                      ...Bn({ AaEscSWT6: { "data-border": !0 } }, g, x),
                      children: [
                        _(J, {
                          __fromCanvasComponent: !0,
                          children: _(s, {
                            children: _(E.p, {
                              style: {
                                "--font-selector": `SW50ZXItTWVkaXVt`,
                                "--framer-font-size": `15px`,
                                "--framer-font-weight": `500`,
                                "--framer-letter-spacing": `-0.01em`,
                                "--framer-line-height": `1.3em`,
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(17, 17, 17))`,
                              },
                              children: _(H, {
                                href: { webPageId: `xidqw88KX` },
                                motionChild: !0,
                                nodeId: `uajzZnoaJ`,
                                openInNewTab: !1,
                                relValues: [],
                                scopeId: `TeSwe3lUU`,
                                smoothScroll: !1,
                                children: _(E.a, {
                                  className: `framer-styles-preset-79x6wl`,
                                  "data-styles-preset": `hFvKuWSVP`,
                                  children: `Measuring & Digital Meters`,
                                }),
                              }),
                            }),
                          }),
                          className: `framer-1l1131f`,
                          fonts: [`Inter-Medium`],
                          layoutDependency: O,
                          layoutId: `uajzZnoaJ`,
                          style: {
                            "--extracted-r6o4lv": `rgb(17, 17, 17)`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Bn(
                            {
                              AaEscSWT6: {
                                "data-highlight": !0,
                                children: _(s, {
                                  children: _(E.p, {
                                    className: `framer-styles-preset-kp7a6u`,
                                    "data-styles-preset": `KPOL7SIJy`,
                                    children: _(H, {
                                      href: { webPageId: `xidqw88KX` },
                                      motionChild: !0,
                                      nodeId: `uajzZnoaJ`,
                                      openInNewTab: !1,
                                      relValues: [],
                                      scopeId: `TeSwe3lUU`,
                                      smoothScroll: !1,
                                      children: _(E.a, {
                                        className: `framer-styles-preset-19cdckt`,
                                        "data-styles-preset": `yC7Htf11S`,
                                        children: `Measuring & Digital Meters`,
                                      }),
                                    }),
                                  }),
                                }),
                                fonts: [`Inter`],
                                onTap: void 0,
                                verticalAlignment: `center`,
                              },
                            },
                            g,
                            x
                          ),
                        }),
                        P() &&
                          _(J, {
                            __fromCanvasComponent: !0,
                            children: _(s, {
                              children: _(E.p, {
                                style: {
                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                  "--framer-font-size": `15px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-0.01em`,
                                  "--framer-line-height": `1.3em`,
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(17, 17, 17))`,
                                },
                                children: _(H, {
                                  href: { webPageId: `AttXBZoeD` },
                                  motionChild: !0,
                                  nodeId: `XjqWRrFN2`,
                                  openInNewTab: !1,
                                  relValues: [],
                                  scopeId: `TeSwe3lUU`,
                                  smoothScroll: !1,
                                  children: _(E.a, {
                                    className: `framer-styles-preset-79x6wl`,
                                    "data-styles-preset": `hFvKuWSVP`,
                                    children: `Fasteners, Safety items & Cable ties`,
                                  }),
                                }),
                              }),
                            }),
                            className: `framer-ju0adx`,
                            fonts: [`Inter-Medium`],
                            layoutDependency: O,
                            layoutId: `XjqWRrFN2`,
                            style: {
                              "--extracted-r6o4lv": `rgb(17, 17, 17)`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                      ],
                    }),
                    ne() &&
                      _(J, {
                        __fromCanvasComponent: !0,
                        children: _(s, {
                          children: _(E.p, {
                            style: {
                              "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                              "--framer-font-size": `20px`,
                              "--framer-letter-spacing": `-0.04em`,
                              "--framer-line-height": `1.6em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-070bc01f-a34a-451a-859d-6817ebd7ffc1, rgb(0, 0, 0)))`,
                            },
                            children: `Products`,
                          }),
                        }),
                        className: `framer-28qppa`,
                        fonts: [`Inter`],
                        layoutDependency: O,
                        layoutId: `ebDJXECVk`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-070bc01f-a34a-451a-859d-6817ebd7ffc1, rgb(0, 0, 0))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    ne() &&
                      _(K, {
                        ...Bn({ AaEscSWT6: { height: 46, y: (l?.y || 0) + 4 + 284 } }, g, x),
                        children: _(M, {
                          className: `framer-doar6c-container`,
                          layoutDependency: O,
                          layoutId: `Ebk69CdsW-container`,
                          nodeId: `Ebk69CdsW`,
                          rendersWithMotion: !0,
                          scopeId: `TeSwe3lUU`,
                          children: _(qe, {
                            height: `100%`,
                            id: `Ebk69CdsW`,
                            layoutId: `Ebk69CdsW`,
                            PuJJv4mcP: `Contact us`,
                            variant: Yn(`RgTKWyphZ`),
                            width: `100%`,
                            YvTP0PxrM: te,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-yE9yU.framer-18fmlzl, .framer-yE9yU .framer-18fmlzl { display: block; }`,
          `.framer-yE9yU.framer-nz8s5c { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; padding: 30px 15px 30px 15px; position: relative; width: 167px; }`,
          `.framer-yE9yU .framer-1coni9p, .framer-yE9yU .framer-lhnbk2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 120px; }`,
          `.framer-yE9yU .framer-a4yja8, .framer-yE9yU .framer-ta5eqt { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-yE9yU .framer-111jvfm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 120px; }`,
          `.framer-yE9yU .framer-1l1131f, .framer-yE9yU .framer-ju0adx { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-yE9yU .framer-28qppa { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-yE9yU .framer-doar6c-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-yE9yU.framer-v-o7w8sx.framer-nz8s5c { gap: 21px; padding: 4px 0px 0px 0px; width: 361px; }`,
          `.framer-yE9yU.framer-v-o7w8sx .framer-1coni9p { height: 56px; order: 1; width: 100%; }`,
          `.framer-yE9yU.framer-v-o7w8sx .framer-a4yja8 { cursor: pointer; height: 100%; }`,
          `.framer-yE9yU.framer-v-o7w8sx .framer-lhnbk2 { height: 56px; order: 2; width: 100%; }`,
          `.framer-yE9yU.framer-v-o7w8sx .framer-ta5eqt { height: 100%; }`,
          `.framer-yE9yU.framer-v-o7w8sx .framer-111jvfm { height: 56px; order: 3; width: 100%; }`,
          `.framer-yE9yU.framer-v-o7w8sx .framer-1l1131f { cursor: pointer; flex: 1 0 0px; height: 1px; }`,
          `.framer-yE9yU.framer-v-o7w8sx .framer-28qppa { order: 0; }`,
          `.framer-yE9yU.framer-v-o7w8sx .framer-doar6c-container { order: 4; }`,
          ...lt,
          ...Nn,
          ...Ln,
          `.framer-yE9yU[data-border="true"]::after, .framer-yE9yU [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-yE9yU`
      )),
      ($.displayName = `Links:Product`),
      ($.defaultProps = { height: 244, width: 167 }),
      L($, {
        variant: {
          options: [`rWTa8Px_5`, `AaEscSWT6`],
          optionTitles: [`Default`, `Phone`],
          title: `Variant`,
          type: W.Enum,
        },
        FhmzBHtLJ: { title: `Click`, type: W.EventHandler },
      }),
      q(
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
          ...Vn,
          ...F(ct),
          ...F(Mn),
          ...F(In),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([j(qe, {}, t)])) }));
  });
function nr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr = e(() => {
    (x(),
      R(),
      A(),
      w(),
      (rr = [`DRqxCILFY`, `F9Oq6Lb__`]),
      (ir = `framer-a896F`),
      (ar = { DRqxCILFY: `framer-v-xh4cbu`, F9Oq6Lb__: `framer-v-1bbwttw` }),
      (or = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (sr = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return _(D.Provider, { value: a, children: n });
      }),
      (cr = E.create(s)),
      (lr = { closed: `F9Oq6Lb__`, menu: `DRqxCILFY` }),
      (ur = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        KHbjxYqPR: e ?? i.KHbjxYqPR,
        variant: lr[i.variant] ?? i.variant ?? `DRqxCILFY`,
      })),
      (dr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (fr = B(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: s } = G();
          V();
          let { style: c, className: l, layoutId: u, variant: d, KHbjxYqPR: f, ...p } = ur(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: b,
              setGestureState: x,
              setVariant: ee,
              variants: w,
            } = U({
              cycleOrder: rr,
              defaultVariant: `DRqxCILFY`,
              ref: r,
              variant: d,
              variantClassNames: ar,
            }),
            T = dr(e, w),
            { activeVariantCallback: D, delay: O } = Ae(m),
            A = D(async (...e) => {
              if ((x({ isPressed: !1 }), f && (await f(...e)) === !1)) return !1;
            }),
            j = I(ir);
          return _(k, {
            id: u ?? i,
            children: _(cr, {
              animate: w,
              initial: !1,
              children: _(sr, {
                value: or,
                children: S(E.div, {
                  ...p,
                  ...v,
                  className: I(j, `framer-xh4cbu`, l, h),
                  "data-framer-name": `menu`,
                  "data-highlight": !0,
                  layoutDependency: T,
                  layoutId: `DRqxCILFY`,
                  onTap: A,
                  ref: r,
                  style: { backgroundColor: `rgba(255, 255, 255, 0)`, ...c },
                  ...nr({ F9Oq6Lb__: { "data-framer-name": `closed` } }, m, y),
                  children: [
                    _(E.div, {
                      className: `framer-juy17r`,
                      layoutDependency: T,
                      layoutId: `ocZdYIptC`,
                      style: { backgroundColor: `rgb(0, 0, 0)`, rotate: 0 },
                      variants: { F9Oq6Lb__: { rotate: 41 } },
                    }),
                    _(E.div, {
                      className: `framer-1ng9gqg`,
                      layoutDependency: T,
                      layoutId: `FZrUzX2mY`,
                      style: { backgroundColor: `rgb(0, 0, 0)`, rotate: 0 },
                      variants: { F9Oq6Lb__: { rotate: -42 } },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-a896F.framer-1sz6xjk, .framer-a896F .framer-1sz6xjk { display: block; }`,
          `.framer-a896F.framer-xh4cbu { cursor: pointer; height: 20px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 20px; }`,
          `.framer-a896F .framer-juy17r { flex: none; height: 2px; left: calc(50.00000000000002% - 16px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 5px; width: 16px; }`,
          `.framer-a896F .framer-1ng9gqg { bottom: 8px; flex: none; height: 2px; left: calc(50.00000000000002% - 16px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 16px; }`,
          `.framer-a896F.framer-v-1bbwttw .framer-juy17r { top: 8px; }`,
          `.framer-a896F.framer-v-1bbwttw .framer-1ng9gqg { bottom: unset; top: 8px; }`,
        ],
        `framer-a896F`
      )),
      (fr.displayName = `menu`),
      (fr.defaultProps = { height: 20, width: 20 }),
      L(fr, {
        variant: {
          options: [`DRqxCILFY`, `F9Oq6Lb__`],
          optionTitles: [`menu`, `closed`],
          title: `Variant`,
          type: W.Enum,
        },
        KHbjxYqPR: { title: `Click`, type: W.EventHandler },
      }),
      q(fr, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function mr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr = e(() => {
    (x(),
      R(),
      A(),
      w(),
      jn(),
      qt(),
      (hr = N(Z)),
      (gr = { Z6pO6koYF: { hover: !0 } }),
      (_r = `framer-XsynW`),
      (vr = { Z6pO6koYF: `framer-v-15cl584` }),
      (yr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (br = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return _(D.Provider, { value: a, children: n });
      }),
      (xr = E.create(s)),
      (Sr = ({ height: e, hover: t, id: n, width: r, ...i }) => ({
        ...i,
        llwgSjA2L: t ?? i.llwgSjA2L,
      })),
      (Cr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (wr = B(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: c } = G(),
            l = V(),
            { style: u, className: d, layoutId: f, variant: p, llwgSjA2L: m, ...h } = Sr(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: ee,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = U({
              defaultVariant: `Z6pO6koYF`,
              enabledGestures: gr,
              ref: r,
              variant: p,
              variantClassNames: vr,
            }),
            O = Cr(e, D),
            { activeVariantCallback: A, delay: j } = Ae(g),
            te = A(async (...e) => {
              if ((w({ isHovered: !0 }), m && (await m(...e)) === !1)) return !1;
            }),
            N = I(_r, An);
          return _(k, {
            id: f ?? i,
            children: _(xr, {
              animate: D,
              initial: !1,
              children: _(br, {
                value: yr,
                children: S(E.div, {
                  ...h,
                  ...b,
                  className: I(N, `framer-15cl584`, d, v),
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: O,
                  layoutId: `Z6pO6koYF`,
                  onMouseEnter: te,
                  ref: r,
                  style: { opacity: 1, ...u },
                  variants: { "Z6pO6koYF-hover": { opacity: 0.54 } },
                  ...mr({ "Z6pO6koYF-hover": { "data-framer-name": void 0 } }, g, x),
                  children: [
                    _(J, {
                      __fromCanvasComponent: !0,
                      children: _(s, {
                        children: _(E.p, {
                          className: `framer-styles-preset-1yy64kz`,
                          "data-styles-preset": `cpHa6hPFt`,
                          children: `Products`,
                        }),
                      }),
                      className: `framer-1l74xfn`,
                      fonts: [`Inter`],
                      layoutDependency: O,
                      layoutId: `LASBy_2fP`,
                      style: {
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    _(K, {
                      height: 14,
                      y: (l?.y || 0) + (5 + ((l?.height || 36) - 10 - 14) / 2),
                      children: _(M, {
                        className: `framer-z926un-container`,
                        layoutDependency: O,
                        layoutId: `VyP9VhCGw-container`,
                        nodeId: `VyP9VhCGw`,
                        rendersWithMotion: !0,
                        scopeId: `ZVHQppBQH`,
                        children: _(Z, {
                          height: `100%`,
                          id: `VyP9VhCGw`,
                          layoutId: `VyP9VhCGw`,
                          variant: `ac_gKpGDi`,
                          width: `100%`,
                          ...mr({ "Z6pO6koYF-hover": { variant: `p7dsU9cIJ` } }, g, x),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-XsynW.framer-1n5348d, .framer-XsynW .framer-1n5348d { display: block; }`,
          `.framer-XsynW.framer-15cl584 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 5px 0px 5px 0px; position: relative; width: min-content; }`,
          `.framer-XsynW .framer-1l74xfn { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-XsynW .framer-z926un-container { flex: none; height: auto; position: relative; width: auto; }`,
          ...kn,
        ],
        `framer-XsynW`
      )),
      (wr.displayName = `Product dropdown`),
      (wr.defaultProps = { height: 36, width: 85 }),
      L(wr, { llwgSjA2L: { title: `Hover`, type: W.EventHandler } }),
      q(
        wr,
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
          ...hr,
          ...F(On),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Er(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur = e(() => {
    (x(),
      R(),
      A(),
      w(),
      jn(),
      dt(),
      Re(),
      Je(),
      tr(),
      It(),
      pr(),
      Tr(),
      (Dr = N(X)),
      (Or = N(fr)),
      (kr = N(wr)),
      (Ar = N($)),
      (jr = N(Ye)),
      (Mr = [`wuTIYudL0`, `BHEnwcLNp`, `CyBlAxTuz`]),
      (Nr = `framer-XpGPQ`),
      (Pr = {
        BHEnwcLNp: `framer-v-1p07o1a`,
        CyBlAxTuz: `framer-v-od3eth`,
        wuTIYudL0: `framer-v-1mo47zq`,
      }),
      (Fr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ir = ({ children: e, blockDocumentScrolling: t, enabled: n = !0 }) => {
        let [r, i] = Te({ blockDocumentScrolling: t });
        return e({ hide: () => i(!1), show: () => i(!0), toggle: () => i(!r), visible: n && r });
      }),
      (Lr = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return _(D.Provider, { value: a, children: n });
      }),
      (Rr = E.create(s)),
      (zr = { "Phone open": `CyBlAxTuz`, Desktop: `wuTIYudL0`, Phone: `BHEnwcLNp` }),
      (Br = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: zr[r.variant] ?? r.variant ?? `wuTIYudL0`,
      })),
      (Vr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Hr = B(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: c } = G(),
            l = V(),
            { style: u, className: f, layoutId: p, variant: m, ...h } = Br(e),
            {
              baseVariant: g,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: ee,
              setGestureState: w,
              setVariant: T,
              variants: D,
            } = U({
              cycleOrder: Mr,
              defaultVariant: `wuTIYudL0`,
              ref: r,
              variant: m,
              variantClassNames: Pr,
            }),
            A = Vr(e, D),
            { activeVariantCallback: j, delay: te } = Ae(g),
            N = j(async (...e) => {
              T(`CyBlAxTuz`);
            }),
            P = j(async (...e) => {
              T(`BHEnwcLNp`);
            }),
            ne = ({ overlay: e, loadMore: t }) =>
              j(async (...t) => {
                e.show();
              }),
            F = I(Nr, An, Ve, ut),
            re = () => ![`BHEnwcLNp`, `CyBlAxTuz`].includes(g),
            ie = () => !![`BHEnwcLNp`, `CyBlAxTuz`].includes(g),
            L = o(null),
            R = o(null);
          return _(k, {
            id: p ?? i,
            children: _(Rr, {
              animate: D,
              initial: !1,
              children: _(Lr, {
                value: Fr,
                children: S(E.div, {
                  ...h,
                  ...b,
                  className: I(F, `framer-1mo47zq`, f, v),
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  layoutDependency: A,
                  layoutId: `wuTIYudL0`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgba(0, 0, 0, 0.08)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    ...u,
                  },
                  ...Er(
                    {
                      BHEnwcLNp: { "data-framer-name": `Phone` },
                      CyBlAxTuz: { "data-framer-name": `Phone open` },
                    },
                    g,
                    x
                  ),
                  children: [
                    re() &&
                      _(ae, {
                        className: `framer-1eeeodd`,
                        description: `An SVG icon of the Framer Logo.`,
                        layout: `position`,
                        layoutDependency: A,
                        layoutId: `YNiQNIHVL`,
                        opacity: 1,
                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 24"></svg>`,
                        svgContentId: 10571433833,
                        title: `Framer Logo`,
                        withExternalLayout: !0,
                      }),
                    S(E.div, {
                      className: `framer-r4v9kx`,
                      "data-framer-name": `Phone nav`,
                      layoutDependency: A,
                      layoutId: `HSb60bhp7`,
                      children: [
                        S(E.div, {
                          className: `framer-1mawpkp`,
                          "data-framer-name": `logo+menu`,
                          layoutDependency: A,
                          layoutId: `OdDSmlbRL`,
                          ...Er(
                            {
                              BHEnwcLNp: { "data-highlight": !0, onTap: N },
                              CyBlAxTuz: { "data-highlight": !0, onTap: P },
                            },
                            g,
                            x
                          ),
                          children: [
                            _(K, {
                              height: 50,
                              width: `56px`,
                              y: (l?.y || 0) + (20 + ((l?.height || 64) - 40 - 50) / 2) + 0 + 0,
                              ...Er(
                                {
                                  BHEnwcLNp: { y: (l?.y || 0) + 20 + 0 + 0 + 0 + 0 },
                                  CyBlAxTuz: { y: (l?.y || 0) + 20 + 0 + 0 + 0 + 0 },
                                },
                                g,
                                x
                              ),
                              children: _(M, {
                                className: `framer-12ya6hc-container`,
                                layoutDependency: A,
                                layoutId: `vL3QYMqF7-container`,
                                nodeId: `vL3QYMqF7`,
                                rendersWithMotion: !0,
                                scopeId: `J5AqCr0zM`,
                                children: _(X, {
                                  height: `100%`,
                                  id: `vL3QYMqF7`,
                                  layoutId: `vL3QYMqF7`,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                            ie() &&
                              _(K, {
                                ...Er(
                                  {
                                    BHEnwcLNp: {
                                      height: 20,
                                      width: `20px`,
                                      y: (l?.y || 0) + 20 + 0 + 0 + 0 + 15,
                                    },
                                    CyBlAxTuz: {
                                      height: 20,
                                      width: `20px`,
                                      y: (l?.y || 0) + 20 + 0 + 0 + 0 + 15,
                                    },
                                  },
                                  g,
                                  x
                                ),
                                children: _(M, {
                                  className: `framer-m8f8nt-container`,
                                  layoutDependency: A,
                                  layoutId: `iX00ou32Y-container`,
                                  nodeId: `iX00ou32Y`,
                                  rendersWithMotion: !0,
                                  scopeId: `J5AqCr0zM`,
                                  children: _(fr, {
                                    height: `100%`,
                                    id: `iX00ou32Y`,
                                    layoutId: `iX00ou32Y`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: `DRqxCILFY`,
                                    width: `100%`,
                                    ...Er({ CyBlAxTuz: { variant: `F9Oq6Lb__` } }, g, x),
                                  }),
                                }),
                              }),
                          ],
                        }),
                        S(E.div, {
                          className: `framer-1elma9p`,
                          layoutDependency: A,
                          layoutId: `hdel7OKYN`,
                          style: { opacity: 1 },
                          variants: { BHEnwcLNp: { opacity: 0 }, CyBlAxTuz: { opacity: 1 } },
                          children: [
                            S(E.div, {
                              className: `framer-nux7cv`,
                              "data-framer-name": `nav content`,
                              layoutDependency: A,
                              layoutId: `ZufpfHerl`,
                              children: [
                                _(E.div, {
                                  className: `framer-i6v4y0`,
                                  layoutDependency: A,
                                  layoutId: `xXvPSZLcO`,
                                }),
                                _(J, {
                                  __fromCanvasComponent: !0,
                                  children: _(s, {
                                    children: _(E.p, {
                                      className: `framer-styles-preset-1yy64kz`,
                                      "data-styles-preset": `cpHa6hPFt`,
                                      children: _(H, {
                                        href: { webPageId: `augiA20Il` },
                                        motionChild: !0,
                                        nodeId: `GxKh6Gdcb`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `J5AqCr0zM`,
                                        smoothScroll: !1,
                                        children: _(E.a, {
                                          className: `framer-styles-preset-qywj9v`,
                                          "data-styles-preset": `nBjcbhcMb`,
                                          children: `Home`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-11kxt5o`,
                                  fonts: [`Inter`],
                                  layoutDependency: A,
                                  layoutId: `GxKh6Gdcb`,
                                  style: { "--framer-paragraph-spacing": `0px` },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                _(J, {
                                  __fromCanvasComponent: !0,
                                  children: _(s, {
                                    children: _(E.p, {
                                      className: `framer-styles-preset-1yy64kz`,
                                      "data-styles-preset": `cpHa6hPFt`,
                                      children: _(H, {
                                        href: { webPageId: `CFf_UwEef` },
                                        motionChild: !0,
                                        nodeId: `uG1UqfDcA`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `J5AqCr0zM`,
                                        smoothScroll: !1,
                                        children: _(E.a, {
                                          className: `framer-styles-preset-79x6wl`,
                                          "data-styles-preset": `hFvKuWSVP`,
                                          children: `About `,
                                        }),
                                      }),
                                    }),
                                  }),
                                  className: `framer-1ut1r8k`,
                                  fonts: [`Inter`],
                                  layoutDependency: A,
                                  layoutId: `uG1UqfDcA`,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                re() &&
                                  _(Ir, {
                                    blockDocumentScrolling: !1,
                                    children: (e) =>
                                      _(d, {
                                        children: _(K, {
                                          height: 36,
                                          y:
                                            (l?.y || 0) +
                                            (20 + ((l?.height || 64) - 40 - 50) / 2) +
                                            2 +
                                            5 +
                                            0,
                                          children: S(M, {
                                            className: `framer-12shqq8-container`,
                                            id: `${p}-12shqq8`,
                                            layoutDependency: A,
                                            layoutId: `OzS1KYiEi-container`,
                                            nodeId: `OzS1KYiEi`,
                                            ref: L,
                                            rendersWithMotion: !0,
                                            scopeId: `J5AqCr0zM`,
                                            children: [
                                              _(wr, {
                                                height: `100%`,
                                                id: `OzS1KYiEi`,
                                                layoutId: `OzS1KYiEi`,
                                                llwgSjA2L: ne({ overlay: e }),
                                                width: `100%`,
                                              }),
                                              _(O, {
                                                children:
                                                  e.visible &&
                                                  _(ue, {
                                                    alignment: `center`,
                                                    anchorRef: L,
                                                    className: I(F, v),
                                                    collisionDetection: !1,
                                                    "data-framer-portal-id": `${p}-12shqq8`,
                                                    offsetX: 25.072972908878,
                                                    offsetY: 20.593729479845933,
                                                    onDismiss: e.hide,
                                                    placement: `bottom`,
                                                    safeArea: !0,
                                                    zIndex: 11,
                                                    children: _(K, {
                                                      height: 170,
                                                      width: `167px`,
                                                      y:
                                                        (l?.y || 0) +
                                                        (20 + ((l?.height || 64) - 40 - 50) / 2) +
                                                        2 +
                                                        5 +
                                                        0 +
                                                        -85,
                                                      children: _(M, {
                                                        className: `framer-s6cx0l-container`,
                                                        inComponentSlot: !0,
                                                        layoutDependency: A,
                                                        layoutId: `CZlMZQkPt-container`,
                                                        nodeId: `CZlMZQkPt`,
                                                        ref: R,
                                                        rendersWithMotion: !0,
                                                        role: `dialog`,
                                                        scopeId: `J5AqCr0zM`,
                                                        children: _($, {
                                                          height: `100%`,
                                                          id: `CZlMZQkPt`,
                                                          layoutId: `CZlMZQkPt`,
                                                          style: { width: `100%` },
                                                          variant: `rWTa8Px_5`,
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                  }),
                              ],
                            }),
                            ie() &&
                              _(K, {
                                ...Er(
                                  {
                                    BHEnwcLNp: {
                                      height: 170,
                                      width: `328px`,
                                      y: (l?.y || 0) + 20 + 0 + 0 + 60 + 0 + 127,
                                    },
                                    CyBlAxTuz: {
                                      height: 170,
                                      width: `328px`,
                                      y: (l?.y || 0) + 20 + 0 + 0 + 60 + 0 + 127,
                                    },
                                  },
                                  g,
                                  x
                                ),
                                children: _(M, {
                                  className: `framer-blvl8f-container`,
                                  layoutDependency: A,
                                  layoutId: `QNUfzE57F-container`,
                                  nodeId: `QNUfzE57F`,
                                  rendersWithMotion: !0,
                                  scopeId: `J5AqCr0zM`,
                                  children: _($, {
                                    height: `100%`,
                                    id: `QNUfzE57F`,
                                    layoutId: `QNUfzE57F`,
                                    style: { width: `100%` },
                                    variant: `AaEscSWT6`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            re() &&
                              _(K, {
                                height: 46,
                                y: (l?.y || 0) + (20 + ((l?.height || 64) - 40 - 50) / 2) + 2 + 0,
                                children: _(M, {
                                  className: `framer-zu57gu-container`,
                                  layoutDependency: A,
                                  layoutId: `csR03hvrJ-container`,
                                  nodeId: `csR03hvrJ`,
                                  rendersWithMotion: !0,
                                  scopeId: `J5AqCr0zM`,
                                  children: _(Ye, {
                                    height: `100%`,
                                    I1saNDFFs: `Contact us`,
                                    id: `csR03hvrJ`,
                                    layoutId: `csR03hvrJ`,
                                    variant: `GTFjN8aP8`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-XpGPQ.framer-16wmasy, .framer-XpGPQ .framer-16wmasy { display: block; }`,
          `.framer-XpGPQ.framer-1mo47zq { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 64px; justify-content: flex-start; overflow: visible; padding: 20px; position: relative; width: 1185px; }`,
          `.framer-XpGPQ .framer-1eeeodd { flex: none; height: 24px; position: relative; width: 16px; }`,
          `.framer-XpGPQ .framer-r4v9kx, .framer-XpGPQ .framer-1elma9p { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-XpGPQ .framer-1mawpkp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-XpGPQ .framer-12ya6hc-container { flex: none; height: 50px; position: relative; width: 56px; }`,
          `.framer-XpGPQ .framer-m8f8nt-container { flex: none; height: 20px; position: relative; width: 20px; }`,
          `.framer-XpGPQ .framer-nux7cv { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-XpGPQ .framer-i6v4y0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; min-height: 16px; min-width: 25px; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-XpGPQ .framer-11kxt5o, .framer-XpGPQ .framer-1ut1r8k { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-XpGPQ .framer-12shqq8-container, .framer-XpGPQ .framer-zu57gu-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-XpGPQ .framer-s6cx0l-container { height: auto; position: relative; width: 167px; }`,
          `.framer-XpGPQ .framer-blvl8f-container { flex: none; height: auto; position: relative; width: 328px; }`,
          `.framer-XpGPQ.framer-v-1p07o1a.framer-1mo47zq { flex-direction: column; gap: 0px; overflow: hidden; width: 390px; }`,
          `.framer-XpGPQ.framer-v-1p07o1a .framer-r4v9kx, .framer-XpGPQ.framer-v-od3eth .framer-r4v9kx { flex: none; flex-direction: column; width: 100%; }`,
          `.framer-XpGPQ.framer-v-1p07o1a .framer-1mawpkp, .framer-XpGPQ.framer-v-od3eth .framer-1mawpkp { cursor: pointer; gap: unset; justify-content: space-between; padding: 0px 0px 0px 20px; width: 100%; }`,
          `.framer-XpGPQ.framer-v-1p07o1a .framer-1elma9p, .framer-XpGPQ.framer-v-od3eth .framer-1elma9p { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; justify-content: flex-start; padding: 0px 20px 0px 20px; width: 100%; }`,
          `.framer-XpGPQ.framer-v-1p07o1a .framer-nux7cv, .framer-XpGPQ.framer-v-od3eth .framer-nux7cv { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; height: 117px; justify-content: flex-end; width: 100%; }`,
          `.framer-XpGPQ.framer-v-od3eth.framer-1mo47zq { flex-direction: column; gap: 0px; height: min-content; max-height: calc(var(--framer-viewport-height, 100vh) * 1); min-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: auto; overscroll-behavior: contain; padding: 20px 20px 120px 20px; width: 390px; }`,
          ...kn,
          ...ze,
          ...lt,
          `.framer-XpGPQ[data-border="true"]::after, .framer-XpGPQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-XpGPQ`
      )),
      (Hr.displayName = `Nav bar`),
      (Hr.defaultProps = { height: 64, width: 1185 }),
      L(Hr, {
        variant: {
          options: [`wuTIYudL0`, `BHEnwcLNp`, `CyBlAxTuz`],
          optionTitles: [`Desktop`, `Phone`, `Phone open`],
          title: `Variant`,
          type: W.Enum,
        },
      }),
      q(
        Hr,
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
          ...Dr,
          ...Or,
          ...kr,
          ...Ar,
          ...jr,
          ...F(On),
          ...F(Be),
          ...F(ct),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Wr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni = e(() => {
    (x(),
      R(),
      A(),
      w(),
      Ur(),
      (Gr = N(Hr)),
      (Kr = [`bIB_MF81i`, `am8PdONGJ`]),
      (qr = `framer-d2qa4`),
      (Jr = { am8PdONGJ: `framer-v-1ppq6fy`, bIB_MF81i: `framer-v-nx1zaz` }),
      (Yr = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (Xr = ({ value: e, children: n }) => {
        let r = t(D),
          i = e ?? r.transition,
          a = g(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return _(D.Provider, { value: a, children: n });
      }),
      (Zr = E.create(s)),
      (Qr = { Desktop: `bIB_MF81i`, Phone: `am8PdONGJ` }),
      ($r = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Qr[r.variant] ?? r.variant ?? `bIB_MF81i`,
      })),
      (ei = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ti = B(
        p(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = C(),
            { activeLocale: a, setLocale: s } = G(),
            c = V(),
            { style: l, className: u, layoutId: d, variant: f, ...p } = $r(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: b,
              setGestureState: x,
              setVariant: ee,
              variants: S,
            } = U({
              cycleOrder: Kr,
              defaultVariant: `bIB_MF81i`,
              ref: r,
              variant: f,
              variantClassNames: Jr,
            }),
            w = ei(e, S),
            { activeVariantCallback: T, delay: D } = Ae(m),
            O = T(async (...e) => {
              (x({ isPressed: !1 }), ee(`bIB_MF81i`));
            }),
            A = I(qr);
          return _(k, {
            id: d ?? i,
            children: _(Zr, {
              animate: S,
              initial: !1,
              children: _(Xr, {
                value: Yr,
                children: _(E.nav, {
                  ...p,
                  ...v,
                  className: I(A, `framer-nx1zaz`, u, h),
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  "data-highlight": !0,
                  layoutDependency: w,
                  layoutId: `bIB_MF81i`,
                  onTap: O,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgba(0, 0, 0, 0.08)`,
                    "--border-left-width": `0px`,
                    "--border-right-width": `0px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0px`,
                    backgroundColor: `rgb(255, 255, 255)`,
                    ...l,
                  },
                  ...Wr({ am8PdONGJ: { "data-framer-name": `Phone` } }, m, y),
                  children: _(E.div, {
                    className: `framer-10c8mmy`,
                    layoutDependency: w,
                    layoutId: `Z6FGtWGPc`,
                    children: _(E.div, {
                      className: `framer-ffhp6k`,
                      layoutDependency: w,
                      layoutId: `A36NHsm3F`,
                      children: _(K, {
                        height: 62,
                        width: `max(${c?.width || `100vw`}, 1px)`,
                        y: (c?.y || 0) + 0 + 0 + 0 + 0,
                        children: _(M, {
                          className: `framer-f63gsf-container`,
                          layoutDependency: w,
                          layoutId: `GsIPrA_q1-container`,
                          nodeId: `GsIPrA_q1`,
                          rendersWithMotion: !0,
                          scopeId: `RwRo9kmic`,
                          children: _(Hr, {
                            height: `100%`,
                            id: `GsIPrA_q1`,
                            layoutId: `GsIPrA_q1`,
                            style: { height: `100%`, width: `100%` },
                            variant: `wuTIYudL0`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-d2qa4.framer-1q1q1tp, .framer-d2qa4 .framer-1q1q1tp { display: block; }`,
          `.framer-d2qa4.framer-nx1zaz { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 62px; justify-content: flex-start; overflow: auto; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-d2qa4 .framer-10c8mmy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-d2qa4 .framer-ffhp6k { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-d2qa4 .framer-f63gsf-container { flex: 1 0 0px; height: 62px; position: relative; width: 1px; z-index: 1; }`,
          `.framer-d2qa4.framer-v-1ppq6fy.framer-nx1zaz { height: 336px; width: 390px; }`,
          `.framer-d2qa4[data-border="true"]::after, .framer-d2qa4 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-d2qa4`
      )),
      (ti.displayName = `Navigation`),
      (ti.defaultProps = { height: 62, width: 1200 }),
      L(ti, {
        variant: {
          options: [`bIB_MF81i`, `am8PdONGJ`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: W.Enum,
        },
      }),
      q(ti, [{ explicitInter: !0, fonts: [] }, ...Gr], { supportsExplicitInterCodegen: !0 }));
  }),
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi = e(() => {
    (x(),
      R(),
      A(),
      w(),
      st(),
      Dn(),
      ni(),
      (ri = N(En)),
      (ii = N(ti)),
      (ai = N(ot)),
      (oi = {
        bwv_VXuuM: `(min-width: 810px) and (max-width: 1199.98px)`,
        jvoAt8gJh: `(min-width: 1200px)`,
        mURrXKXBE: `(max-width: 809.98px)`,
      }),
      (si = () => typeof document < `u`),
      (ci = `framer-cudu6`),
      (li = {
        bwv_VXuuM: `framer-v-15wa0ic`,
        jvoAt8gJh: `framer-v-rezfdc`,
        mURrXKXBE: `framer-v-3yerd7`,
      }),
      (ui = {
        bwv_VXuuM: [`.framer-cudu6 .framer-92hyqj-container { width: 810px; }`],
        mURrXKXBE: [
          `.framer-cudu6.framer-rezfdc { overflow: visible; }`,
          `.framer-cudu6 .framer-92hyqj-container { width: 390px; }`,
        ],
      }),
      (di = Object.keys(ui)),
      (fi = { bwv_VXuuM: `.framer-15wa0ic-override`, mURrXKXBE: `.framer-3yerd7-override` }),
      (pi = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-cudu6.framer-1u003b9, .framer-cudu6 .framer-1u003b9 { display: block; }`,
        `.framer-cudu6.framer-rezfdc { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-cudu6 .framer-xj5qpj-container { flex: none; height: 61px; left: 0px; order: -1000; position: var(--framer-canvas-fixed-position, fixed); right: 0px; top: 0px; z-index: 9; }`,
        `.framer-cudu6 .framer-hwd8bp-container { flex: none; height: auto; left: 50%; order: -998; position: var(--framer-canvas-fixed-position, fixed); top: 0px; transform: translateX(-50%); width: 100%; z-index: 10; }`,
        `.framer-cudu6 .framer-2w4jt8 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-cudu6 .framer-92hyqj-container { flex: none; height: auto; order: 1004; position: relative; width: 100%; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (mi = {
        bwv_VXuuM: `(min-width: 810px) and (max-width: 1199.98px)`,
        jvoAt8gJh: `(min-width: 1200px)`,
        mURrXKXBE: `(max-width: 809.98px)`,
      }),
      (hi = ({ value: e }) =>
        Oe()
          ? null
          : _(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (gi = { Desktop: `jvoAt8gJh`, Phone: `mURrXKXBE`, Tablet: `bwv_VXuuM` }),
      (_i = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: gi[r.variant] ?? r.variant ?? `jvoAt8gJh`,
      })),
      (vi = p(function (e, t) {
        let n = o(null),
          r = t ?? n,
          i = C(),
          { activeLocale: a, setLocale: s } = G(),
          { style: c, className: l, layoutId: u, variant: d, children: f, ...p } = _i(e),
          [m, h] = de(d, oi, !1),
          g = I(ci),
          v = () => !si() || m === `mURrXKXBE`,
          y = () => !si() || m !== `mURrXKXBE`;
        return (
          Se({}),
          _(pe.Provider, {
            value: { isLayoutTemplate: !0, primaryVariantId: `jvoAt8gJh`, variantClassNames: li },
            children: S(k, {
              id: u ?? i,
              children: [
                _(hi, { value: `:root body { background: rgb(255, 255, 255); }` }),
                S(E.div, {
                  ...p,
                  className: I(g, `framer-rezfdc`, l),
                  "data-layout-template": !0,
                  ref: r,
                  style: { ...c },
                  children: [
                    v() &&
                      _(_e, {
                        breakpoint: m,
                        overrides: { mURrXKXBE: { height: 61, width: `100vw`, y: 0 } },
                        children: _(K, {
                          children: _(De, {
                            className: `framer-xj5qpj-container hidden-rezfdc hidden-15wa0ic`,
                            layoutScroll: !0,
                            nodeId: `R854FTWYT`,
                            scopeId: `Whylfzh59`,
                            children: _(En, {
                              height: `100%`,
                              id: `R854FTWYT`,
                              layoutId: `R854FTWYT`,
                              style: { height: `100%`, width: `100%` },
                              variant: `dWNznT6yQ`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    y() &&
                      _(K, {
                        height: 62,
                        width: `100vw`,
                        y: 0,
                        children: _(De, {
                          className: `framer-hwd8bp-container hidden-3yerd7`,
                          "data-framer-layout-hint-center-x": !0,
                          layoutScroll: !0,
                          nodeId: `DbZW7gjkk`,
                          scopeId: `Whylfzh59`,
                          children: _(ti, {
                            height: `100%`,
                            id: `DbZW7gjkk`,
                            layoutId: `DbZW7gjkk`,
                            style: { width: `100%` },
                            variant: `bIB_MF81i`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    f,
                    _(`div`, { className: `framer-2w4jt8` }),
                    _(_e, {
                      breakpoint: m,
                      overrides: { bwv_VXuuM: { width: `810px` }, mURrXKXBE: { width: `390px` } },
                      children: _(K, {
                        height: 408,
                        width: `100vw`,
                        y: 1e3,
                        children: _(De, {
                          className: `framer-92hyqj-container`,
                          nodeId: `t9rj6Eywx`,
                          scopeId: `Whylfzh59`,
                          children: _(_e, {
                            breakpoint: m,
                            overrides: {
                              bwv_VXuuM: { variant: `PXdqmrIL7` },
                              mURrXKXBE: { variant: `ZCv6JDWov` },
                            },
                            children: _(ot, {
                              height: `100%`,
                              id: `t9rj6Eywx`,
                              layoutId: `t9rj6Eywx`,
                              style: { width: `100%` },
                              variant: `C0A1R7els`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                _(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (yi = (e) =>
        e === Me.canvas || e === Me.export
          ? [
              ...pi,
              ...di.flatMap((e) => {
                let t = fi[e];
                return ui[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...pi, ...di.map((e) => `@media ${mi[e]} { ${ui[e].join(` `)} }`)]),
      (bi = B(vi, yi, `framer-cudu6`)),
      (bi.displayName = `Main Layout`),
      (bi.defaultProps = { height: 1e3, width: 1200 }),
      q(bi, [{ explicitInter: !0, fonts: [] }, ...ri, ...ii, ...ai], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function Si({ webPageId: e, children: t, style: n, ...r }) {
  let i = {}[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `CFf_UwEef`:
    case `AIJK2IvNV`:
    case `Pinumpnx5`:
    case `hW5bYoASU`:
    case `IKBH5KoAS`:
    case `zWW6Y7kj0`:
    case `iyJ7aVFGC`:
    case `vrtqDuZ1N`:
    case `w5flQh747`:
    case `xwZmx5rGV`:
    case `Kt0_CSjIS`:
    case `N9RqoK9k4`:
    case `iYbyZH4Eh`:
    case `OQVXftRNr`:
    case `Wn3p19Wl9`:
    case `qDXY6r3VV`:
    case `J3v0KTfTV`:
    case `ZMPQssinf`:
    case `RJiC3_m6d`:
    case `Vea9Qy0Wy`:
    case `OgpyitZkm`:
    case `sobzGzdAj`:
    case `f90th6GVN`:
    case `tpSZxEZ3Q`:
    case `J9Kmrbane`:
    case `AKUEwE6NV`:
    case `g4GB4oHqq`:
    case `DTGYWJVQv`:
    case `bk6UU2fjM`:
    case `cTlJe6NNs`:
    case `rqhiNRf61`:
    case `l3Ofj4TEr`:
    case `X9ehW9nmi`:
    case `FvOP7NiYt`:
    case `PFHt85mym`:
    case `To73YDgo1`:
    case `VuWc5fPpw`:
    case `jJlbLMk5O`:
    case `W_r2VV95C`:
    case `mALNsDe69`:
    case `Ts8npxzjJ`:
    case `oAMT9_Okf`:
    case `JHUE8GPa7`:
    case `WvUS4psHz`:
    case `pNF9wciH1`:
    case `Ck4ICy6d1`:
    case `ezZGKRdiC`:
    case `BIEKF77yI`:
    case `bN_Kd4zvg`:
    case `LEMsd6NKZ`:
    case `fRi0XqDcH`:
    case `xJC1rIa2q`:
    case `YoKc4A_3g`:
    case `RfwdPqeXZ`:
    case `GSOmLXkyw`:
    case `onrtkv5Mt`:
    case `MwM39S1e9`:
    case `MIpk7j8iV`:
    case `xEwFyYyRT`:
    case `WJ9h5Qa5O`:
    case `Q9uYEjBB8`:
    case `yuHWr9fJ4`:
    case `adgWJwWAv`:
    case `NDPxZFY57`:
    case `vgwdmCi8w`:
    case `vVD9Z3R9o`:
    case `Aipu9ivB9`:
    case `MK7UoJYTu`:
    case `tVmfkEp04`:
    case `natPZmXwR`:
    case `iTo4f0vNa`:
    case `K6ObOYBQA`:
    case `CnkHM0EVU`:
    case `zpfAKcJD2`:
    case `tNxpBwJFz`:
    case `AXP8w_jiy`:
    case `e3xjmT_e2`:
    case `s3puP6vtU`:
    case `XsyIKqhk6`:
    case `fQRECcwa1`:
    case `ir9vUy5dL`:
    case `qpbcB4GFy`:
    case `bFxeP6McM`:
    case `EilHJEx5E`:
    case `khz3yJyTm`:
    case `ykfND90zv`:
    case `d1wnevmRO`:
    case `EGds5Qwcq`:
    case `krziqjefP`:
    case `C7qHA1PRl`:
    case `BS6GVS12q`:
    case `CecR8fXEx`:
    case `ZCVYcZHRC`:
    case `kJDfKTWdE`:
    case `uWshyMrvZ`:
    case `TXKjcG0H4`:
    case `vRzG6Qc6J`:
    case `zVxyk4EMX`:
    case `Ea_TyMYoy`:
    case `dnyVn6cHR`:
    case `Ai7Y2E9MG`:
    case `uzQd8vkbU`:
    case `ZAMlC_on9`:
    case `WnaRNr5H3`:
    case `I3ZXnfl0c`:
    case `FPMuWMgra`:
    case `RbriVzgza`:
    case `oYxy3zMr7`:
    case `AAc_ysl5G`:
    case `RsOmwfylR`:
    case `AIP6acyMt`:
    case `jVzOZkO3m`:
    case `DGyJABte8`:
    case `PXdzRvl1m`:
    case `IvEuplfKk`:
    case `IHgg3FLZK`:
    case `jOndPxoLd`:
    case `SDBoKoCqJ`:
    case `y6rwRQvC2`:
    case `q9xugym0e`:
    case `VTSpHhn6D`:
    case `XTOoWky3G`:
    case `BrEu7j78n`:
    case `eN16WuNwM`:
    case `zj_rUtlZp`:
    case `BsPTtD7C5`:
    case `a_zViqoap`:
    case `Iy3Du0myi`:
    case `DCy1NNz6j`:
    case `R2rigjNAz`:
    case `oWuGsq9yp`:
    case `qxotXX72u`:
    case `E5aYY2PXA`:
    case `f03aAHi90`:
    case `xjKIVWikz`:
    case `MhKEpFh9_`:
    case `j39Cfkfcd`:
    case `JuiSZL20W`:
    case `sCRzKtpcd`:
    case `BsJmXv8f2`:
    case `huy0hzZNy`:
    case `fRICmNncB`:
    case `L4XXkv4Zj`:
    case `xidqw88KX`:
    case `k3I5EzP4j`:
    case `AttXBZoeD`:
    case `Ho1BNoNAX`:
    case `xcTlEC05v`:
    case `yIPN70dPu`:
      return f(bi, { ...i, key: `MainLayout`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function Ci(e) {
  switch (e) {
    case `augiA20Il`:
    case `CFf_UwEef`:
    case `AIJK2IvNV`:
    case `Pinumpnx5`:
    case `hW5bYoASU`:
    case `IKBH5KoAS`:
    case `zWW6Y7kj0`:
    case `iyJ7aVFGC`:
    case `vrtqDuZ1N`:
    case `w5flQh747`:
    case `xwZmx5rGV`:
    case `Kt0_CSjIS`:
    case `N9RqoK9k4`:
    case `iYbyZH4Eh`:
    case `OQVXftRNr`:
    case `Wn3p19Wl9`:
    case `qDXY6r3VV`:
    case `J3v0KTfTV`:
    case `ZMPQssinf`:
    case `RJiC3_m6d`:
    case `Vea9Qy0Wy`:
    case `OgpyitZkm`:
    case `sobzGzdAj`:
    case `f90th6GVN`:
    case `tpSZxEZ3Q`:
    case `J9Kmrbane`:
    case `AKUEwE6NV`:
    case `g4GB4oHqq`:
    case `DTGYWJVQv`:
    case `bk6UU2fjM`:
    case `cTlJe6NNs`:
    case `rqhiNRf61`:
    case `l3Ofj4TEr`:
    case `X9ehW9nmi`:
    case `FvOP7NiYt`:
    case `PFHt85mym`:
    case `To73YDgo1`:
    case `VuWc5fPpw`:
    case `jJlbLMk5O`:
    case `W_r2VV95C`:
    case `mALNsDe69`:
    case `Ts8npxzjJ`:
    case `oAMT9_Okf`:
    case `JHUE8GPa7`:
    case `WvUS4psHz`:
    case `pNF9wciH1`:
    case `Ck4ICy6d1`:
    case `ezZGKRdiC`:
    case `BIEKF77yI`:
    case `bN_Kd4zvg`:
    case `LEMsd6NKZ`:
    case `fRi0XqDcH`:
    case `xJC1rIa2q`:
    case `YoKc4A_3g`:
    case `RfwdPqeXZ`:
    case `GSOmLXkyw`:
    case `onrtkv5Mt`:
    case `MwM39S1e9`:
    case `MIpk7j8iV`:
    case `xEwFyYyRT`:
    case `WJ9h5Qa5O`:
    case `Q9uYEjBB8`:
    case `yuHWr9fJ4`:
    case `adgWJwWAv`:
    case `NDPxZFY57`:
    case `vgwdmCi8w`:
    case `vVD9Z3R9o`:
    case `Aipu9ivB9`:
    case `MK7UoJYTu`:
    case `tVmfkEp04`:
    case `natPZmXwR`:
    case `iTo4f0vNa`:
    case `K6ObOYBQA`:
    case `CnkHM0EVU`:
    case `zpfAKcJD2`:
    case `tNxpBwJFz`:
    case `AXP8w_jiy`:
    case `e3xjmT_e2`:
    case `s3puP6vtU`:
    case `XsyIKqhk6`:
    case `fQRECcwa1`:
    case `ir9vUy5dL`:
    case `qpbcB4GFy`:
    case `bFxeP6McM`:
    case `EilHJEx5E`:
    case `khz3yJyTm`:
    case `ykfND90zv`:
    case `d1wnevmRO`:
    case `EGds5Qwcq`:
    case `krziqjefP`:
    case `C7qHA1PRl`:
    case `BS6GVS12q`:
    case `CecR8fXEx`:
    case `ZCVYcZHRC`:
    case `kJDfKTWdE`:
    case `uWshyMrvZ`:
    case `TXKjcG0H4`:
    case `vRzG6Qc6J`:
    case `zVxyk4EMX`:
    case `Ea_TyMYoy`:
    case `dnyVn6cHR`:
    case `Ai7Y2E9MG`:
    case `uzQd8vkbU`:
    case `ZAMlC_on9`:
    case `WnaRNr5H3`:
    case `I3ZXnfl0c`:
    case `FPMuWMgra`:
    case `RbriVzgza`:
    case `oYxy3zMr7`:
    case `AAc_ysl5G`:
    case `RsOmwfylR`:
    case `AIP6acyMt`:
    case `jVzOZkO3m`:
    case `DGyJABte8`:
    case `PXdzRvl1m`:
    case `IvEuplfKk`:
    case `IHgg3FLZK`:
    case `jOndPxoLd`:
    case `SDBoKoCqJ`:
    case `y6rwRQvC2`:
    case `q9xugym0e`:
    case `VTSpHhn6D`:
    case `XTOoWky3G`:
    case `BrEu7j78n`:
    case `eN16WuNwM`:
    case `zj_rUtlZp`:
    case `BsPTtD7C5`:
    case `a_zViqoap`:
    case `Iy3Du0myi`:
    case `DCy1NNz6j`:
    case `R2rigjNAz`:
    case `oWuGsq9yp`:
    case `qxotXX72u`:
    case `E5aYY2PXA`:
    case `f03aAHi90`:
    case `xjKIVWikz`:
    case `MhKEpFh9_`:
    case `j39Cfkfcd`:
    case `JuiSZL20W`:
    case `sCRzKtpcd`:
    case `BsJmXv8f2`:
    case `huy0hzZNy`:
    case `fRICmNncB`:
    case `L4XXkv4Zj`:
    case `xidqw88KX`:
    case `k3I5EzP4j`:
    case `AttXBZoeD`:
    case `Ho1BNoNAX`:
    case `xcTlEC05v`:
    case `yIPN70dPu`:
      return [
        { hash: `rezfdc`, mediaQuery: `(min-width: 1200px)` },
        { hash: `15wa0ic`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `3yerd7`, mediaQuery: `(max-width: 809.98px)` },
      ];
    default:
      return;
  }
}
async function wi({
  routeId: e,
  pathVariables: t,
  canonicalPathVariables: r,
  localeId: c,
  collectionItemId: u,
  contentLocaleId: d,
  shouldResolveInitialRouteContentState: p = !1,
}) {
  let g = Di[e].page.preload();
  (re({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    ce(ji));
  let _ = f(Ee, {
    children: f(we, {
      children: f(ye, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        canonicalPathVariables: r,
        routes: Di,
        collectionUtils: ki,
        serverDatabaseClient: Ai,
        framerSiteId: ji,
        notFoundPage: z(() => import(`./SitesNotFoundPage.js@1.4.BucggN3R.mjs`)),
        isReducedMotion: void 0,
        localeId: c,
        locales: Oi,
        preserveQueryParams: void 0,
        siteCanonicalURL: `https://aaztoolsco.com`,
        EditorBar:
          T === void 0
            ? void 0
            : (() => {
                if (Ni) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return z(async () => {
                  T.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: ke, useLocaleInfo: G, useRouter: me },
                    react: {
                      createElement: f,
                      Fragment: s,
                      memo: m,
                      useCallback: i,
                      useEffect: a,
                      useRef: o,
                      useState: n,
                      useLayoutEffect: l,
                    },
                    "react-dom": { createPortal: h },
                  };
                  let { createEditorBar: e } = await import(`init.mjs`);
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        LayoutTemplate: Si,
        loadSnippetsModule: new ge(
          () => import(`./lp-LvNLuDRaZmtyNenTxbfiP80iQC0R6egAv0XksFBI.dObCGW41.mjs`)
        ),
        initialCollectionItemId: u,
        initialContentLocaleIdOverride: d,
      }),
    }),
    value: {
      global: {
        enter: {
          mask: { angle: 180, type: `wipe`, width: `100%` },
          opacity: 1,
          rotate: 0,
          rotate3d: !1,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          transition: {
            damping: 30,
            delay: 0,
            duration: 0.6,
            ease: [0.27, 0, 0.51, 1],
            mass: 1,
            stiffness: 400,
            type: `tween`,
          },
          x: `0px`,
          y: `0px`,
        },
      },
      routes: {},
    },
  });
  return (await g, _);
}
function Ti() {
  Mi && T.__framer_events.push(arguments);
}
async function Ei(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || T.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    Ti(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, a, o, s, c, l;
    if (e)
      ((l = JSON.parse(t.dataset.framerHydrateV2)),
        (r = l.routeId),
        (i = l.localeId),
        (a = l.contentLocaleId),
        (o = l.pathVariables),
        (s = l.canonicalPathVariables),
        (c = l.breakpoints),
        (r = P(Di, r)));
    else {
      P(Di, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((o ??= {}), (o[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = oe(Di, decodeURIComponent(location.pathname), !0, Oi);
        ((r = e.routeId), (i = e.localeId), (o = e.pathVariables));
      }
    }
    let d = wi({
      routeId: r,
      localeId: i,
      contentLocaleId: a,
      pathVariables: o,
      canonicalPathVariables: s,
      collectionItemId: e ? l?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    T !== void 0 &&
      (async () => {
        let e = Di[r],
          t = Oi.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n = l?.collectionItemId ?? null;
        if (n === null && e?.collectionId && ki) {
          let r = await ki[e.collectionId]?.(),
            [i] = Object.values(o);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let a = Intl.DateTimeFormat().resolvedOptions(),
          s = a.timeZone,
          c = a.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          T.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: ji,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: T.location.href,
              hostname: T.location.hostname || null,
              pathname: T.location.pathname || null,
              hash: T.location.hash || null,
              search: T.location.search || null,
              timezone: s,
              locale: c,
            },
            `eager`,
          ]),
          await Ne({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let f = await d;
    e
      ? (le(`framer-rewrite-breakpoints`, () => {
          (se(c), T.__framer_onRewriteBreakpoints?.(c));
        }),
        (Ni ? (e) => e() : u)(() => {
          (ne(), he(), ee(t, f, { onRecoverableError: n }));
        }))
      : b(t, { onRecoverableError: n }).render(f);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var Di, Oi, ki, Ai, ji, Mi, Ni;
e(() => {
  if (
    (r(),
    R(),
    w(),
    y(),
    v(),
    xi(),
    (Di = {
      augiA20Il: {
        elements: {},
        page: z(() => import(`./oJuDfHOULxyPdr6f8mpli0qb-0E_WS16RJWS_u88UZI.B8TLazXo.mjs`)),
        path: `/`,
      },
      CFf_UwEef: {
        elements: {},
        page: z(() => import(`./uo2V8bGJLoT_AbFkRycFIaPemnWu7uzrXpDxDUsgK40.tvKv-OjT.mjs`)),
        path: `/about-us`,
      },
      AIJK2IvNV: {
        elements: {},
        page: z(() => import(`./-L3DAJrYfubdK3vz1-1HHWNdm05Pvf_T3Nk06BKB_5Y.eB57m92V.mjs`)),
        path: `/contact-us`,
      },
      Pinumpnx5: {
        elements: { RxWODMFLp: `classes` },
        page: z(() => import(`./TX0dNq8NdWbl3id591Z15S9m0GHtScYTOyDkQf9iVf8.Ch45iGyz.mjs`)),
        path: `/products---hand-tools`,
      },
      hW5bYoASU: {
        elements: {},
        page: z(() => import(`./EWeAOvDMrNKVUmcPVTnO-d_vzIAC17yJnFuaK1ohFuI.Cyhm4XXW.mjs`)),
        path: `/combination-plier`,
      },
      IKBH5KoAS: {
        elements: {},
        page: z(() => import(`./xbIj_WOIZqTBhCbhfMb8fTKu791uoZraLrXK6A_mMzw.C0csQMqt.mjs`)),
        path: `/hammer-with-handle`,
      },
      zWW6Y7kj0: {
        elements: {},
        page: z(() => import(`./yhfDL_uf3IW5uvZIb7VIuhJia4XfDn1OBHkKPn36HWU.9ZFKxRQu.mjs`)),
        path: `/machinist-hammer-with-handle`,
      },
      iyJ7aVFGC: {
        elements: {},
        page: z(() => import(`./EZnwMgiWJhZUDsCd50lGNTNG8gcVLgPRr7B1aBfLRQg.B2NLVmp5.mjs`)),
        path: `/claw-hammer-with-handle`,
      },
      vrtqDuZ1N: {
        elements: {},
        page: z(() => import(`./E1H15V5f5ehHnHivWDMhNdYZNl6eH_pZASdC1SW0NnI.COyZYpeD.mjs`)),
        path: `/club-hammer-with-handle`,
      },
      w5flQh747: {
        elements: {},
        page: z(() => import(`./BML3TaAKJIKSJiMGVcQPE5Buxt4UBdoVXyN7w3Wda4Q.-7W4IhGG.mjs`)),
        path: `/sledge-hammer-head-tool`,
      },
      xwZmx5rGV: {
        elements: {},
        page: z(() => import(`./5SM9LKbzS_c84CFP71b6MesLGaQVW9N4Ffc0FjIhAUI.DMMznOFt.mjs`)),
        path: `/sledge-hammer-head-with-handle`,
      },
      Kt0_CSjIS: {
        elements: {},
        page: z(() => import(`./XfpkAXPnX3dsMzVxHEpuY8r0BQh9xOPwRWDEjzZhxIE.DKZWw0Km.mjs`)),
        path: `/electrician-hammer`,
      },
      N9RqoK9k4: {
        elements: {},
        page: z(() => import(`./UAwztkSB5nYeAL58zaKvf-tcp7knLLTh5VYHX2gWmn4.DBD5Lswk.mjs`)),
        path: `/nylson-or-soft-face`,
      },
      iYbyZH4Eh: {
        elements: {},
        page: z(() => import(`./2jlFFsdJk-SEf-71DPSf_ljy5gSXJq6RWxQX5xmOySc.CLIjZhND.mjs`)),
        path: `/compression-plier`,
      },
      OQVXftRNr: {
        elements: {},
        page: z(() => import(`./sNmxxD1QmQ7TIkRHsH26FIQR4eQGgd8kVoX_JPhW5So.DcZBFfqn.mjs`)),
        path: `/heavy-duty-compression-plier`,
      },
      Wn3p19Wl9: {
        elements: {},
        page: z(() => import(`./pkOJ9PD3VnJCPYrc2yFe_NzlJRAdPDdHkCiYUTH10tQ.C2Bbxx0f.mjs`)),
        path: `/compression-hydraulic-plier`,
      },
      qDXY6r3VV: {
        elements: {},
        page: z(() => import(`./kjy0N8EBOmWtAc-WxU8Ijf_6YXSXhjthAeitUQ8h4eg.JZEDKDtS.mjs`)),
        path: `/cable-cutter`,
      },
      J3v0KTfTV: {
        elements: {},
        page: z(() => import(`./iUb4BThcK3H-d-hR_8FMS3vLXKqVpl6VtfUwtj6HMI8.BGa703iu.mjs`)),
        path: `/compression-hydraulic-tool-jack`,
      },
      ZMPQssinf: {
        elements: {},
        page: z(() => import(`./wIQEu73bCDTXTIIjtHe5j8kZHf92hqjV6yqazuzC2SM.BGYmuY0k.mjs`)),
        path: `/compression-pump-tool`,
      },
      RJiC3_m6d: {
        elements: {},
        page: z(() => import(`./a02oX88RKSXEZsvq_lFvi98NUNwJMgYph0KOMa_S8CI.c9-GuCK9.mjs`)),
        path: `/compression-hydraluic-die-tool`,
      },
      Vea9Qy0Wy: {
        elements: {},
        page: z(() => import(`./NkpAPrUIOONE3YCvZ11zNt4Tqg427WXe1PnTmrhfSPk.CC3nh1PA.mjs`)),
        path: `/compression-cable-cutter`,
      },
      OgpyitZkm: {
        elements: {},
        page: z(() => import(`./kh8VSP56e7Scq7Mjv37iRq8ydahZNXIpQbbm-aoGqvc.CFVKGVj5.mjs`)),
        path: `/pincers-plier`,
      },
      sobzGzdAj: {
        elements: {},
        page: z(() => import(`./NPztxT7Bp_qUPsw0_jFXiDCdxdGMWBxpqPPElCx8b-0.ltCAy1at.mjs`)),
        path: `/side-cutting-plier`,
      },
      f90th6GVN: {
        elements: {},
        page: z(() => import(`./CLYAeVonM2awsPtUP9IpU0Pz4GpLLCiOfWH4mXJbOD0.tAJleJmz.mjs`)),
        path: `/vde-plier`,
      },
      tpSZxEZ3Q: {
        elements: {},
        page: z(() => import(`./Z0B-z-2LevriHEt8lMfc9SMq86uMTq_PcjiDQBC9Rhk.DF8j0U0T.mjs`)),
        path: `/water-pump-plier`,
      },
      J9Kmrbane: {
        elements: {},
        page: z(() => import(`./ilTGDnc8TRvmSq2GAlhmcwLCEpeyUwI9RG0f_juR_TI.kJ6glozG.mjs`)),
        path: `/circlip-plier`,
      },
      AKUEwE6NV: {
        elements: {},
        page: z(() => import(`./q9lGcFKagcZMKMeuZIVVrmNh8l3JsYI0o-9qtq1OBSY.BFUWgSWN.mjs`)),
        path: `/wire-stripping`,
      },
      g4GB4oHqq: {
        elements: {},
        page: z(() => import(`./zieJDRAypgcbEFtjUcrIgmd-OtD4ijodRYv92VEvGyc.BWM6S5vh.mjs`)),
        path: `/vde-plier-set`,
      },
      DTGYWJVQv: {
        elements: {},
        page: z(() => import(`./l9Cloh6ogN3CBWNca5zMoB410G7-1YJ9jQzOv7-FY3Y.Bs66wPc1.mjs`)),
        path: `/slip-joint-splier`,
      },
      bk6UU2fjM: {
        elements: {},
        page: z(() => import(`./j5-S1-ecbDaWQpWNrAc5Mqy5XTsjR-KQaUVugF9DYnE.CsEd-riB.mjs`)),
        path: `/nose-plier`,
      },
      cTlJe6NNs: {
        elements: {},
        page: z(() => import(`./BrbG5JtILzjtPF4NGueIOgYAIlSDqNiyADPalvRfTPI.Dg17W4ng.mjs`)),
        path: `/locking-plier`,
      },
      rqhiNRf61: {
        elements: {},
        page: z(() => import(`./sC-0QB3r42kzdKJOt0uXqHDRm8tjJRX4YF-M73eOWts.C1lhEApo.mjs`)),
        path: `/two-in-one-screwdriver`,
      },
      l3Ofj4TEr: {
        elements: {},
        page: z(() => import(`./3Giz0NNyeuNrdWb_dEdOB8xD5inLg_M5nflhO_HbVBc.DfzZaeo3.mjs`)),
        path: `/star-screwdriver`,
      },
      X9ehW9nmi: {
        elements: {},
        page: z(() => import(`./X8hHnCKfsSrflLEIPiKYT7iw6PGWHCZ3QpgXnjfUvQw.lCmnlu6Y.mjs`)),
        path: `/flat-insulated`,
      },
      FvOP7NiYt: {
        elements: {},
        page: z(() => import(`./8j4_Hs0n2Sf8Q_aT88ca0Vq6MpOR9akIknUcj6EJI6E.YyC_WJx7.mjs`)),
        path: `/black-tip-philips`,
      },
      PFHt85mym: {
        elements: {},
        page: z(() => import(`./1wbATBey25h-mK-kqWwajAf5hObwxD4m_VRC2Ylzn-c.CkGvRGvU.mjs`)),
        path: `/poker-screwdriver`,
      },
      To73YDgo1: {
        elements: {},
        page: z(() => import(`./lvfg3lvlA-N7rBNjufk_Xbfq-6eKj3jffpG25PDKm_A.DRxJUAcy.mjs`)),
        path: `/screwdriver-sets`,
      },
      VuWc5fPpw: {
        elements: {},
        page: z(() => import(`./UutsMMgYgA6rkpW2LiKudzVavcyJvlRBB7wWrMOocCg.bWmbrZlB.mjs`)),
        path: `/stubby-screwdriver`,
      },
      jJlbLMk5O: {
        elements: {},
        page: z(() => import(`./3yKOMrRqGLKA3FShxhFfd0gb2mOrG8wJHlvTiPb4AXw.cwJNTmwY.mjs`)),
        path: `/striking-screwdriver`,
      },
      W_r2VV95C: {
        elements: {},
        page: z(() => import(`./CRB6_upOxZmBdWHKwZ4MewdG-HggJ4V5hoV9h8wIuIc.BwFUzp3t.mjs`)),
        path: `/precision-set`,
      },
      mALNsDe69: {
        elements: {},
        page: z(() => import(`./_zRRrc88_7WbMT5xqejlecGMi1LpykPO76qDJUXuLF8.CIJ62OS8.mjs`)),
        path: `/screwdriver-bits-image`,
      },
      Ts8npxzjJ: {
        elements: {},
        page: z(() => import(`./VxBlKYsDBi7U73UFXdPndPyY52jBmNBHYIZbLIHevO4.C0XFW2my.mjs`)),
        path: `/digital-tester`,
      },
      oAMT9_Okf: {
        elements: {},
        page: z(() => import(`./kRiD9Yls0tCXednhVCElFefZaQEr6SH7Bwv3dQqwLyA.CmpZ8jKI.mjs`)),
        path: `/torx-screwdriver`,
      },
      JHUE8GPa7: {
        elements: {},
        page: z(() => import(`./LmD6JpfwMqARgAAaXeFhjWwj1mYVpMyyYv6sNVB3lQk.B-7JhomJ.mjs`)),
        path: `/bit-driver-image`,
      },
      WvUS4psHz: {
        elements: {},
        page: z(() => import(`./yOwpevpCZvUFySdElHdMdO__GpxDGdIeIiv7nzmEnog.HZ7UKoPp.mjs`)),
        path: `/line-tester`,
      },
      pNF9wciH1: {
        elements: {},
        page: z(() => import(`./WIF8sHM0X4lq7eVosyjSLW_BDmDUqVbfU8-crBjMdIM.CT9_s4jm.mjs`)),
        path: `/black-tip-two-in-one`,
      },
      Ck4ICy6d1: {
        elements: {},
        page: z(() => import(`./06J1_ZhlXiYe1qHTgavUDNmVsoOxwsFhg0qdZfl46n4.mwN7K9Rg.mjs`)),
        path: `/impact-socket-adaptor`,
      },
      ezZGKRdiC: {
        elements: {},
        page: z(() => import(`./fdSVgZ3jLsiLZHJROZ1W5u52wOZyJ2q7NItoisq6TRY.UDpJ4Lc7.mjs`)),
        path: `/imoact-socket-image`,
      },
      BIEKF77yI: {
        elements: {},
        page: z(() => import(`./_Ual79mcuEqrPmQpKf74ZK-kgjzVDB5k4_XBC3IWcM8.CigAhsU8.mjs`)),
        path: `/reduce-adaptors`,
      },
      bN_Kd4zvg: {
        elements: {},
        page: z(() => import(`./rrlNE2t8m5jgeYIS_lHi2UuF9_PsL4AKS7d5Uo1NDc8.U0FeR2FJ.mjs`)),
        path: `/image-socket`,
      },
      LEMsd6NKZ: {
        elements: {},
        page: z(() => import(`./XpUJ68W1H8p55Q6TOV6IzPKY5w4g7QH8iFLDTD5zZr8.CIDTEIAR.mjs`)),
        path: `/socket-accessories`,
      },
      fRi0XqDcH: {
        elements: {},
        page: z(() => import(`./Vm2kmDoMwBoIevR_1xkJdO5hR6SBnq9vhjbTKJLlZV4.CF1Rqct7.mjs`)),
        path: `/socket-sets`,
      },
      xJC1rIa2q: {
        elements: {},
        page: z(() => import(`./uIgWDL4dhE_sedB1L1I17uPoXw-yZ0epSidchkT5emA.C9AN-jUj.mjs`)),
        path: `/sockets`,
      },
      YoKc4A_3g: {
        elements: {},
        page: z(() => import(`./ebX7H_7uh6Z6cIn-f18ux1yGglLFvsDSC1C-o1V5Iac.ud2aI4-L.mjs`)),
        path: `/torque-wrench-socket`,
      },
      RfwdPqeXZ: {
        elements: {},
        page: z(() => import(`./A98u5CUpWo0xXL9QO65z6BMtEBRBZ9Kh5DQuQjsNrOg.C3-0-503.mjs`)),
        path: `/ratchet-handles`,
      },
      GSOmLXkyw: {
        elements: {},
        page: z(() => import(`./CuEAM7Ppc_9iuYInU5iXtPrqqQay1_U7djUQ13dgMPM.B1XE_dIR.mjs`)),
        path: `/tubular-spanner-set`,
      },
      onrtkv5Mt: {
        elements: {},
        page: z(() => import(`./RQAt9ObhrE_QxyVbHl64Gt7Z-yNP0DVE9veNQqPBYo8.fvm7CWb2.mjs`)),
        path: `/double-end-spanner`,
      },
      MwM39S1e9: {
        elements: {},
        page: z(() => import(`./E9xDZbauwvLUpRoBH5hxIz4kJvaaxAwJvdrBnbWIRFg.DN2tMhS-.mjs`)),
        path: `/double-end-spanner-set`,
      },
      MIpk7j8iV: {
        elements: {},
        page: z(() => import(`./DSdk9S_EbrevUyIE8bqQppHd1xrNZLrb9GAlGyr5TcE.BvaNGqAS.mjs`)),
        path: `/cross-rim-spanner`,
      },
      xEwFyYyRT: {
        elements: {},
        page: z(() => import(`./gVRHZLpBLv4RxAS9PGz9mlZh1PCPA-LxqqtGrc0WqFc.DRvME4_h.mjs`)),
        path: `/combination-spanner`,
      },
      WJ9h5Qa5O: {
        elements: {},
        page: z(() => import(`./zJMDHs1hg7ycWkr8Rv1ly_TIWNJeaEuRICQS558MkWo.BqFmPq-w.mjs`)),
        path: `/combination-spanner-set`,
      },
      Q9uYEjBB8: {
        elements: {},
        page: z(() => import(`./sH1mNdLMZwnsEX7K9DeVI6xRwfYRMcXjZECEJ5j8Gds.BTVeobSl.mjs`)),
        path: `/l-spanner`,
      },
      yuHWr9fJ4: {
        elements: {},
        page: z(() => import(`./O05VWTf7Y1eEag_kQ2bGsNVxDQ7ArFfxljW4yM-iMUA.DqvBYgtL.mjs`)),
        path: `/single-end-spanner`,
      },
      adgWJwWAv: {
        elements: {},
        page: z(() => import(`./FTIRlvcIwzwesEvXJZgoSw0WKJxUIwU1NVKiXIzD3sw.WSJtuXx6.mjs`)),
        path: `/slogging-end-spanner`,
      },
      NDPxZFY57: {
        elements: {},
        page: z(() => import(`./YgRIf2idmxKjzXTMD96JzqNyhhRJDbNDZUgYOumMGSk.BXiMINGg.mjs`)),
        path: `/slogging-ring-spanner`,
      },
      vgwdmCi8w: {
        elements: {},
        page: z(() => import(`./Gy-Vino0e4EHsJ5xLE_LqOcI3mSrKUROd-ACLaSwsYk.to-eXzjN.mjs`)),
        path: `/gear-wrench-combination`,
      },
      vVD9Z3R9o: {
        elements: {},
        page: z(() => import(`./AYt-Xqp4uHYWw0TG1WPjhwc6qnS8c-2zf56OXtLd7UA.p7ErVQr7.mjs`)),
        path: `/tubular-box-spanner`,
      },
      Aipu9ivB9: {
        elements: {},
        page: z(() => import(`./8l7fYiVJ_YiOVJb5-L66j8GPfqDgbgTicnx8QByiWB8.WZDYGHy9.mjs`)),
        path: `/digital-multimeters`,
      },
      MK7UoJYTu: {
        elements: {},
        page: z(() => import(`./UhZFOkF89iaw20yIF2aYIQEVwjnKfS7qvEC70kIQ5rM.JQyQwZSC.mjs`)),
        path: `/vernier-caliper`,
      },
      tVmfkEp04: {
        elements: {},
        page: z(() => import(`./LDdudBzTxJ2PRD45Uf2oFU5GcL3yq2W5JB6XBR4H950.CM6vDDt5.mjs`)),
        path: `/bullet-fastener`,
      },
      natPZmXwR: {
        elements: {},
        page: z(() => import(`./VDUy74U330N-Gza67acNH9Op56vxIAkSdD7C8N2ORgM.vqDng9Il.mjs`)),
        path: `/coloured-cable-tie`,
      },
      iTo4f0vNa: {
        elements: {},
        page: z(() => import(`./OKhtk_y7sWMVrZ1HZ_QvTdeW5b0MOuwTMq7C1OPELrg.67DfqKLj.mjs`)),
        path: `/stainless-steel-cable-tie`,
      },
      K6ObOYBQA: {
        elements: {},
        page: z(() => import(`./_FbKFs6nV1f8FhKxLWRpowwJMSaJJM3xITfsD41p36E.Ce3UvMAw.mjs`)),
        path: `/tag-cable-tie`,
      },
      CnkHM0EVU: {
        elements: {},
        page: z(() => import(`./9SOQeHSq843NdjuB-Fh0hgf7WZPez4FSKBUxyZChCdI.DJfZHw9O.mjs`)),
        path: `/security-steel-cable-tie`,
      },
      zpfAKcJD2: {
        elements: {},
        page: z(() => import(`./_xDworQsqziRmeRMdk5QHM6aJ_ZvyHuMlvey-WAGxos.M6p9HpjE.mjs`)),
        path: `/metal-tooth-cable-tie`,
      },
      tNxpBwJFz: {
        elements: {},
        page: z(() => import(`./ZytKr1G5r3srXvkToQxyWyXtFiYXHG4TAoNm2ZAqqg4.BTli_xZG.mjs`)),
        path: `/push-mount-cable-tie`,
      },
      AXP8w_jiy: {
        elements: {},
        page: z(() => import(`./so-LRJeSoxKm6vKi3dr-VU8WW30WH2XTOfHGv02SmvQ.DDjbHARn.mjs`)),
        path: `/cable-tie-uv-protection`,
      },
      e3xjmT_e2: {
        elements: {},
        page: z(() => import(`./ZsTBW5fh7qnYgkEHJfsiDMLcJNRbnAI_7mTOFNuPCug.3iTiI6UK.mjs`)),
        path: `/cable-tie-mount`,
      },
      s3puP6vtU: {
        elements: {},
        page: z(() => import(`./Fa58srj-RYWNOwujSdHRzXh7_2A32jImpzAqQ5G22Ho.CoWjkEnV.mjs`)),
        path: `/cable-tie`,
      },
      XsyIKqhk6: {
        elements: {},
        page: z(() => import(`./EkS8qXUZwDvgo04Dt1UvIganNYNhxnHQrf7OMz6OO6U.Dhn2s4ZW.mjs`)),
        path: `/cable-tie-flat-mount`,
      },
      fQRECcwa1: {
        elements: {},
        page: z(() => import(`./oeQJzdLJhFN8iZEZihhWgpXT00cQQEnakoBA8xFSIoY.B9Xoh4o5.mjs`)),
        path: `/pan-head-screw`,
      },
      ir9vUy5dL: {
        elements: {},
        page: z(() => import(`./MxzIsiaiAHhVIhCepnaaRWRo4whh9r2OezrspWMsc6c.NmQOUUcN.mjs`)),
        path: `/pop-rivet`,
      },
      qpbcB4GFy: {
        elements: {},
        page: z(() => import(`./y45CgNghEuPRvqLspKb1_K51JQAgMqKYoOnSEoESNfY.Id9LmE0B.mjs`)),
        path: `/self-tapping-screw`,
      },
      bFxeP6McM: {
        elements: {},
        page: z(() => import(`./FTezT3HW3QhddlgFvkbsksLQXDDKElGv8f6_P6oPRkk.65MD6hKU.mjs`)),
        path: `/counterstuck-socket-head-cap`,
      },
      EilHJEx5E: {
        elements: {},
        page: z(() => import(`./DeR68ZF0Eqezunrclmy-TMxXGkhN98xfn5UOefJ_Zxs.EY1T3wxj.mjs`)),
        path: `/socket-head-shoulder-screw`,
      },
      khz3yJyTm: {
        elements: {},
        page: z(() => import(`./fQzRvek4aTDm9cGZi1MryU_aWtSDkMOhnAFaW4CW5Mc.DfbpniTs.mjs`)),
        path: `/grub-screw`,
      },
      ykfND90zv: {
        elements: {},
        page: z(() => import(`./kwk7v50lERj3ktHi1UREPod8_nu5tlZLfoZjZiw7n64.TcxMfMgm.mjs`)),
        path: `/hex-head-bolt`,
      },
      d1wnevmRO: {
        elements: {},
        page: z(() => import(`./faJNFZfXb-NvZ_rOqIyqKVe_4l5m-1CJOj8YEMKnCAg.Beda8jmK.mjs`)),
        path: `/hex-nut`,
      },
      EGds5Qwcq: {
        elements: {},
        page: z(() => import(`./ZDoZudSs6CWsIBd-reW_VOCqPtfOmSwViYYVcC_-JhA.Ct_DrkWK.mjs`)),
        path: `/washer`,
      },
      krziqjefP: {
        elements: {},
        page: z(() => import(`./y8lo8rBrbOV9DP9eudi3z_6zCNTU5zNDMbciRa1TVn4.B_z_9G0S.mjs`)),
        path: `/safety-jacket`,
      },
      C7qHA1PRl: {
        elements: {},
        page: z(() => import(`./gGCuMpknnhao0MwtwnaXeA8aDG5B9Ezo9phfB8vGAyA.DGrT9AXy.mjs`)),
        path: `/safety-shoes`,
      },
      BS6GVS12q: {
        elements: {},
        page: z(() => import(`./viYpvE_jqjIBausjqhfolYAPeyNolg5prhhZLDy7dCo.BRTmXyJ5.mjs`)),
        path: `/safety-helmet`,
      },
      CecR8fXEx: {
        elements: {},
        page: z(() => import(`./usJCVlLf6QNWBInQhnjr8zov7t_0A3VmpZoUJa0b0v0.ARh_221z.mjs`)),
        path: `/safety-goggles`,
      },
      ZCVYcZHRC: {
        elements: {},
        page: z(() => import(`./47b4YUSVVRxa5bhUjjdCpeSfmy1E29_u8EoL8YYlVsI.CpCcJ---.mjs`)),
        path: `/safety-harness`,
      },
      kJDfKTWdE: {
        elements: {},
        page: z(() => import(`./FVPK4NX4qdb-EDiDe0BeeUz2ne8yKg5Owq7zbM2WyqE.CIKIgXVc.mjs`)),
        path: `/leather-hand-gloves`,
      },
      uWshyMrvZ: {
        elements: {},
        page: z(() => import(`./7C5LQ1x05vf_2ku3auJfea_oIoXuTw_kjU8ogWE3Kz8.DnGH308X.mjs`)),
        path: `/industrial-ladders`,
      },
      TXKjcG0H4: {
        elements: {},
        page: z(() => import(`./GW4wvNvukpdo67OmJazjguahLrWC5xviexHcliJJCOg.JxDnmdS_.mjs`)),
        path: `/lanyard-2`,
      },
      vRzG6Qc6J: {
        elements: {},
        page: z(() => import(`./vVyVEgs8TU0bWMVURui_h63HYhBRCs2752JiXIPX9LE.Vm44Z2ic.mjs`)),
        path: `/cut-resistant-gloves`,
      },
      zVxyk4EMX: {
        elements: {},
        page: z(() => import(`./GlZBRE9OarJk7bc1gj-eMsuEC9nW66I8mhFYbEJ8cx8.Kp_1Fz0x.mjs`)),
        path: `/fire-extinguisher`,
      },
      Ea_TyMYoy: {
        elements: {},
        page: z(() => import(`./jFxCrNbTKq9QGcXo12KF1Qg-HgUOsigxTYUfS7uEgt0.Ddt1GnK1.mjs`)),
        path: `/ear-plugs`,
      },
      dnyVn6cHR: {
        elements: {},
        page: z(() => import(`./MUWA9r2a9-wHszyzorhnDpYbrlthOE1TMCihEr7xTW4.pThF7D1y.mjs`)),
        path: `/impact-drill-machine`,
      },
      Ai7Y2E9MG: {
        elements: {},
        page: z(() => import(`./QIWAK2Dcmu7LrB2G0Ih90t_IHtLMIll7_r0qc_mjZ5I.Dt3RQjFJ.mjs`)),
        path: `/industrial-vaccum-cleaner`,
      },
      uzQd8vkbU: {
        elements: {},
        page: z(() => import(`./C3gGMkF9emYADieGan4kv-j5gOMtqw3RQqUGNdcYfyE.DMrbpECp.mjs`)),
        path: `/impact-wrench-machine`,
      },
      ZAMlC_on9: {
        elements: {},
        page: z(() => import(`./1ySef4chgalnX4bKq1M6iSlLRJfC2CltqRkKFpa5WrU.DYJ_KYeA.mjs`)),
        path: `/impact-wrench-dewalt`,
      },
      WnaRNr5H3: {
        elements: {},
        page: z(() => import(`./v3_aQmAhiOwignQpSDtaW7rJg0ITZ-tqO1NDo4LOJAQ.hEuwedp3.mjs`)),
        path: `/impact-drill-machine-dewalt`,
      },
      I3ZXnfl0c: {
        elements: {},
        page: z(() => import(`./BAy4zshqiIiUu9qPYZVK07kfwSEgjrjZHUm35SjAXk4.CGZXbUK1.mjs`)),
        path: `/demolition-hammer-dewalt`,
      },
      FPMuWMgra: {
        elements: {},
        page: z(() => import(`./1T6jOUmGWPtql7FHBT5xj6l-T7Kpmn1uDz06ylWC6vg.CiPibVDs.mjs`)),
        path: `/blower-dewalt`,
      },
      RbriVzgza: {
        elements: {},
        page: z(() => import(`./tw0ZXdX6QMngUMfRl3fJG1BGhM9c_bnBG73n44ifN4M.v0tBKJc0.mjs`)),
        path: `/angle-grinder-dewalt`,
      },
      oYxy3zMr7: {
        elements: {},
        page: z(() => import(`./Vp2UrLJMdsA6uTqqNOduylv8EdyENtCUenjibqwGrEQ.4VxlD7HF.mjs`)),
        path: `/impact-drill-machine-in`,
      },
      AAc_ysl5G: {
        elements: {},
        page: z(() => import(`./O8OruITJyVq7QEVNJxvFf8Blk51eQSvMBDoI1PVy6wk.CSKWaSr9.mjs`)),
        path: `/heat-gun-in`,
      },
      RsOmwfylR: {
        elements: {},
        page: z(() => import(`./_l611hFTcMXO3JsNtpCLQJOiHRom8sQ4THEpm5P94F4.CK36iNNx.mjs`)),
        path: `/blower-in`,
      },
      AIP6acyMt: {
        elements: {},
        page: z(() => import(`./iUXDEcct8LPl_yp_wXW2XxtyaEtSPmXfZ1zlo5_B4a4.C7Jl7wif.mjs`)),
        path: `/air-compressor-in`,
      },
      jVzOZkO3m: {
        elements: {},
        page: z(() => import(`./sYOc8GFhkfKF6lrMZVsREtlBrIe4iIgKQAycbEA7vYc.ScrHtqi7.mjs`)),
        path: `/angle-grinder-in`,
      },
      DGyJABte8: {
        elements: {},
        page: z(() => import(`./63J8k3t_ujrDL--l21S3dk6-xnLylDU86Yn2yNwZNdQ.6MpUvB9J.mjs`)),
        path: `/rotary-hammer`,
      },
      PXdzRvl1m: {
        elements: {},
        page: z(() => import(`./6gLy75kAewfEyFMCy9yI9KtWOk0IuGEPYBJ54GSWN9M.BpPXmx8C.mjs`)),
        path: `/blower-machine`,
      },
      IvEuplfKk: {
        elements: {},
        page: z(() => import(`./92T_XKpcNufnbypeOfKGnjp4RDbybCszvw0JRMVDIDM.BAYd3SVi.mjs`)),
        path: `/-demolition-hammer`,
      },
      IHgg3FLZK: {
        elements: {},
        page: z(() => import(`./7yxB5bIqmRE2Mz4sdbsd3QjZw8jNWr6HngXHiEvy_CM.1mO8PpBw.mjs`)),
        path: `/heat-gun`,
      },
      jOndPxoLd: {
        elements: {},
        page: z(() => import(`./oJsaeFTAPoB6htYCenbVCbmM9SZRUPD9jbZNAn-eTzs.Cs0SATFP.mjs`)),
        path: `/angle-grinder`,
      },
      SDBoKoCqJ: {
        elements: {},
        page: z(() => import(`./U28J1DAaLEpulMuvaTryXcpNaQoO7TYKVh2Gj6eMNHQ.BB68pAPH.mjs`)),
        path: `/cordless-drill-machine`,
      },
      y6rwRQvC2: {
        elements: {},
        page: z(() => import(`./20JGFSNVrvI3u69s-rfGb78si7PvDuikps2ylVHPb4k.CoRZ8IDO.mjs`)),
        path: `/digital-vernier-caliper`,
      },
      q9xugym0e: {
        elements: {},
        page: z(() => import(`./AygcNPREJIsCaqh5zfPLPsd9B582_LSCehRHyBM8zbs.DPXoC3t2.mjs`)),
        path: `/digital-and-dial-guages`,
      },
      VTSpHhn6D: {
        elements: {},
        page: z(() => import(`./_k3N_FqC5-sAPzAampc7yDALx6_5VnwyIcM8wmlH7t4.C0N1Dvnc.mjs`)),
        path: `/digital-and-manual-micrometer`,
      },
      XTOoWky3G: {
        elements: {},
        page: z(() => import(`./VPD5SnAgHT-z-ObR7ce4DJMzsYj53XXdvITJ5dTaEtI.D6rqwLrU.mjs`)),
        path: `/magnetic-stand`,
      },
      BrEu7j78n: {
        elements: {},
        page: z(() => import(`./g30y2_R2AgNLoE9yT3Spf56cTT-teBASdiA_QRxbmNk.J4YeoAYd.mjs`)),
        path: `/filler-gauges`,
      },
      eN16WuNwM: {
        elements: {},
        page: z(() => import(`./BMZwYnFNJ14KBulzj87RtcnNJ6XnaDfBkIm49NlYqyA.BBAoEUNG.mjs`)),
        path: `/clamp-multimeters`,
      },
      zj_rUtlZp: {
        elements: {},
        page: z(() => import(`./q7dDbV_gkLwEiMMpYIASaW9RyMy1ezhaDcPoyjkHsU8.CeRQ1qKq.mjs`)),
        path: `/ir-thermometer`,
      },
      BsPTtD7C5: {
        elements: {},
        page: z(() => import(`./VSvMqe3XfnPrS1DlQkD6r7oE500HcB8L93dxDQnnY8k.BpusEdLU.mjs`)),
        path: `/laser-distance-meters`,
      },
      a_zViqoap: {
        elements: {},
        page: z(() => import(`./_tE373C1tFCN39qZP83tKkpyFrQnskk7Lo5-00csEOQ.Y8JNs7a7.mjs`)),
        path: `/portable-ir-thermometer`,
      },
      Iy3Du0myi: {
        elements: {},
        page: z(() => import(`./Dtt6ceBn-fo-1sch8OLtwmcEXPOxH8zTrnsBRnW1g_U.BLvBl4bF.mjs`)),
        path: `/earth-resistance-meters`,
      },
      DCy1NNz6j: {
        elements: {},
        page: z(() => import(`./sVUoJcZudnvJ0o4wEKiQNeOGfOHwsUFRzVDc5VKNKxg.DxCsLFsX.mjs`)),
        path: `/torex-and-hex-bit`,
      },
      R2rigjNAz: {
        elements: {},
        page: z(() => import(`./NHXP9BNqqjnGfqPVnvWPfFstsbaCMN4fW2bYTrz5Fks.Behvgtc9.mjs`)),
        path: `/torex-and-hex-bit-set`,
      },
      oWuGsq9yp: {
        elements: { luFocdrtc: `classes-1`, RdwEiOQgZ: `classes` },
        page: z(() => import(`./GLlHZmSZR05FP_JBHfJRMW2cO_CmshtptxvvzHqu92o.C5mv6QQE.mjs`)),
        path: `/pliers-section---hand-tools`,
      },
      qxotXX72u: {
        elements: { rxsMpbhhS: `classes` },
        page: z(() => import(`./dQA8oRz6xG1WslSa_ARmQjglJAAts3KIsJGMnQHWYro.B7AlEr-4.mjs`)),
        path: `/hand-tools---crimping-tools`,
      },
      E5aYY2PXA: {
        elements: { Du6SaCi1c: `classes` },
        page: z(() => import(`./rffoU4ZzK-ZAPcszXuJuXh0ROVSfWDtEq4SuhwEuEWc.CPWUAdHo.mjs`)),
        path: `/hand-tools---hammers`,
      },
      f03aAHi90: {
        elements: { n7vjn3bqX: `classes` },
        page: z(() => import(`./8penYP_I8JGFTXti9QD86j4qxhdXWOYK3Zh-lLZz0Jw.Ch3Fhxvx.mjs`)),
        path: `/hand-tools---screwdrivers`,
      },
      xjKIVWikz: {
        elements: { oSo_RnFcU: `classes` },
        page: z(() => import(`./XmXbSoMBJuz5dtROu86exiKRZRLccYNeffL9bQdqeDc.Dqs_3_N-.mjs`)),
        path: `/hand-tools---sockets-and-adaptors`,
      },
      MhKEpFh9_: {
        elements: { eMZW2sKra: `classes` },
        page: z(() => import(`./-63pTpFIBHevvUAPp556hEHwYNiJ1wHI05Tn4J1JY_g.LLba-MJ2.mjs`)),
        path: `/hand-tools---spanners`,
      },
      j39Cfkfcd: {
        elements: { grzQXGNmg: `classes-2`, SHz8Rw6iK: `classes-1`, ull16T7QP: `classes` },
        page: z(() => import(`./3YSFLPVcH54a0E-gdzLQbyYcoBVDbGFaXIUK5_ECTnw.DnbgWtDJ.mjs`)),
        path: `/bosch`,
      },
      JuiSZL20W: {
        elements: { gsm409mS_: `classes`, OX5FoC4Da: `classes-1` },
        page: z(() => import(`./40djU4Mde9K-PHSB5yqCpNowIK7Sq3IuQD2MpMWix8E.DGgTwKcJ.mjs`)),
        path: `/ingco`,
      },
      sCRzKtpcd: {
        elements: { BQ4rZgcAp: `classes-2`, CDo_AQ7jg: `classes`, SHQlY7UPg: `classes-1` },
        page: z(() => import(`./fO_xOlvgEp00G7H47yf5qGy9tdfCEFf3F4uDScTvia8.BxHh76e6.mjs`)),
        path: `/dewalt`,
      },
      BsJmXv8f2: {
        elements: { dIASV1yj3: `classes` },
        page: z(() => import(`./Qqe2pWOksAilqECz3XfUJEDz5TAWd0Y-9XJtxjTcIqY.htODqGYA.mjs`)),
        path: `/multimeters-and-digital-meters---2nd-page-2`,
      },
      huy0hzZNy: {
        elements: { tBu8ebJMs: `classes` },
        page: z(() => import(`./-6Z_LhGoN-81su9kyb_jep51JXkn8SLXm9w61waHyXs.BdpJJonn.mjs`)),
        path: `/measuring-meters`,
      },
      fRICmNncB: {
        elements: { uXBPN8BUD: `classes` },
        page: z(() => import(`./zHxh5rcmpxwqfwnS-AMzRuY34G87xqwCXQc0PEkzptI.C62Yg4Zm.mjs`)),
        path: `/fasteners`,
      },
      L4XXkv4Zj: {
        elements: { F0LdEF5Vv: `classes` },
        page: z(() => import(`./2pouVXv2ikBrLJN3GxdZwp4r2V4MYQLWCrcjp7qFyJM.BmRFW-Rz.mjs`)),
        path: `/safety-items`,
      },
      xidqw88KX: {
        elements: {},
        page: z(() => import(`./O3K1oxl34tcUmVRs9WwLF_Jjy_7S0s09b5NHHrvRIgE.CRyY5ky1.mjs`)),
        path: `/products----measuring-and-digital-meters`,
      },
      k3I5EzP4j: {
        elements: {},
        page: z(() => import(`./OVFkOpfEasuzZl05Xt_0padiywrnNtNjv6MR9TeLj3w.Ba6Kkm0N.mjs`)),
        path: `/powertools_section`,
      },
      AttXBZoeD: {
        elements: {},
        page: z(() => import(`./r_r2BvrEQNOjaA-cHpUZxK3c84aKJvr0Or6Ikq_Cmx8.BMniM2xt.mjs`)),
        path: `/fasteners-and-safety-items`,
      },
      Ho1BNoNAX: {
        elements: { EOX2bwEvi: `classes-2`, zldnb6Z86: `classes-1`, zZP7DqLV7: `classes` },
        page: z(() => import(`./ZuVCDY8FdlHBSlTr-3RTivF5gOx27VivgKETPE_G6E0.D9_3M9Bc.mjs`)),
        path: `/others--hand-tools`,
      },
      xcTlEC05v: {
        elements: {},
        page: z(() => import(`./Mb9AqwbaOArnKPG1umpDCWDQEC4BgBncZnwX3iy-qGM.BOLExMuf.mjs`)),
        path: `/wood-screw`,
      },
      yIPN70dPu: {
        elements: { IikD8IlBv: `classes`, m2YVqE6PE: `classes-1`, VdncUIAEg: `classes-2` },
        page: z(() => import(`./JOLaOR5V_QuI8v9wOWtJjy7FThv2uyYJJUZwhjXvWrA.BXPIximm.mjs`)),
        path: `/cable-ties`,
      },
    }),
    (Oi = [{ code: `en-US`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (ki = {}),
    (Ai = void 0),
    (ji = `085b873231aec40255fe3f5817effb84da99e175e215c7da1a681bdca4cf8c7e`),
    (Mi = typeof document < `u`),
    (Ni = Mi && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(c.userAgent)),
    Mi)
  ) {
    ((T.__framer_importFromPackage = (e, t) => () =>
      f(xe, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (T.__framer_events = T.__framer_events || []),
      te());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? Ei(!0, e) : Ei(!1, e);
  }
})();
export { Ci as getLayoutTemplateBreakpoints, wi as getPageRoot };
//# sourceMappingURL=script_main.uTZe6mfQ.mjs.map
