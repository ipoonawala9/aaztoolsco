import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  O as t,
  P as n,
  c as r,
  g as i,
  i as a,
  j as ee,
  l as o,
  o as te,
  s,
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
  p as S,
  s as C,
  st as me,
  t as w,
  tt as he,
  ut as ge,
  w as T,
  x as E,
  y as D,
} from "./framer.w0XhpZTx.mjs";
import { i as _e, n as O, r as ve, t as ye } from "./nl385Jssa.BV16yEHR.mjs";
import { a as k, c as A, i as j, o as M, r as N, s as P } from "./shared.DPOhhryJ.mjs";
import { i as F, r as I } from "./cQxXulDZM.DXXtl8ZX.mjs";
import { n as L, t as R } from "./jNXHc0ip8.Bnggf-hw.mjs";
import be, { t as xe } from "./CjGn_j_H9-CaGIQPcZTYChxHo0rJ4gs9zk2r9Qc-RMM.BOjuPavt.mjs";
var z, B, V, H, U, W, G, Se, Ce, we, K, Te, Ee, q, J, Y, X, Z, De, Oe, ke, Q, $;
e(() => {
  (s(),
    ie(),
    f(),
    l(),
    te(),
    M(),
    A(),
    j(),
    F(),
    L(),
    _e(),
    xe(),
    (z = p(P)),
    (B = p(I)),
    (V = y(b)),
    (H = y(E)),
    (U = p(R)),
    (W = p(k)),
    (G = p(N)),
    (Se = {
      LfF_fN1hL: `(min-width: 1200px)`,
      Ne_bdqsWB: `(min-width: 810px) and (max-width: 1199.98px)`,
      YYNDlPTBp: `(max-width: 809.98px)`,
    }),
    (Ce = `framer-9RCuZ`),
    (we = {
      LfF_fN1hL: `framer-v-1ixc89k`,
      Ne_bdqsWB: `framer-v-18ud9vv`,
      YYNDlPTBp: `framer-v-14eibc7`,
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
    (Te = { delay: 0, duration: 1, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` }),
    (Ee = { delay: 0.2, duration: 1, ease: [0.12, 0.23, 0.17, 0.99], type: `tween` }),
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
      let [i, a] = ue({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (De = ({ value: e }) =>
      pe()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Oe = { Desktop: `LfF_fN1hL`, Phone: `YYNDlPTBp`, Tablet: `Ne_bdqsWB` }),
    (ke = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Oe[r.variant] ?? r.variant ?? `LfF_fN1hL`,
    })),
    (Q = de(
      i(function (e, i) {
        let te = t(null),
          s = i ?? te,
          l = ne(),
          { activeLocale: f, setLocale: p } = me(),
          m = fe(),
          { style: ie, className: y, layoutId: ue, variant: de, ...pe } = ke(e);
        se(ee(() => be({}, f), [f]));
        let [T, _e] = ae(de, Se, !1),
          { activeVariantCallback: O, delay: ve } = he(void 0),
          A = ({ overlay: e, loadMore: t }) =>
            O(async (...t) => {
              e.toggle();
            }),
          j = ({ overlay: e, loadMore: t }) =>
            O(async (...t) => {
              e.hide();
            }),
          M = h(Ce, ye),
          F = ge(`F0LdEF5Vv`),
          L = t(null);
        return (
          ce(),
          le({}),
          o(oe.Provider, {
            value: { primaryVariantId: `LfF_fN1hL`, variantClassNames: we },
            children: c(re, {
              id: ue ?? l,
              children: [
                o(De, { value: `html body { background: rgb(255, 255, 255); }` }),
                o(u.div, {
                  ...pe,
                  className: h(M, `framer-1ixc89k`, y),
                  ref: s,
                  style: { ...ie },
                  children: c(`section`, {
                    className: `framer-d02bma`,
                    "data-framer-name": `Classes`,
                    id: F,
                    ref: L,
                    children: [
                      c(`div`, {
                        className: `framer-1p1ntce`,
                        "data-framer-name": `Text`,
                        children: [
                          o(S, {
                            href: { webPageId: `xidqw88KX` },
                            motionChild: !0,
                            nodeId: `oaBIL7y3i`,
                            openInNewTab: !1,
                            scopeId: `L4XXkv4Zj`,
                            children: o(u.a, {
                              className: `framer-1uajj1u framer-1t9yadn`,
                              children: o(S, {
                                href: { webPageId: `AttXBZoeD` },
                                motionChild: !0,
                                nodeId: `h6Thf0wmn`,
                                openInNewTab: !1,
                                scopeId: `L4XXkv4Zj`,
                                children: o(u.a, {
                                  className: `framer-1b35eg1 framer-1t9yadn`,
                                  children: o(P, {
                                    animated: !1,
                                    BKVe8Pgvw: !0,
                                    className: `framer-qo3jv7`,
                                    fICyAUQY1: !0,
                                    layoutId: `ji9ssYGuS`,
                                    lKf_CQTz5: !0,
                                  }),
                                }),
                              }),
                            }),
                          }),
                          o(v, {
                            breakpoint: T,
                            overrides: {
                              Ne_bdqsWB: { y: (m?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
                              YYNDlPTBp: { y: (m?.y || 0) + 0 + 0 + 80 + 0 + 0 + 36 },
                            },
                            children: o(w, {
                              height: 26,
                              y: (m?.y || 0) + 0 + 0 + 96 + 0 + 0 + 36,
                              children: o(V, {
                                __framer__animate: { transition: Te },
                                __framer__animateOnce: !0,
                                __framer__enter: K,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-161jjm4-container`,
                                nodeId: `g2wyFMkwN`,
                                rendersWithMotion: !0,
                                scopeId: `L4XXkv4Zj`,
                                children: o(I, {
                                  ggTbrSuHk: `Fasteners & Safety items`,
                                  height: `100%`,
                                  id: `g2wyFMkwN`,
                                  layoutId: `g2wyFMkwN`,
                                  variant: `z6oSgdJxk`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          o(H, {
                            __framer__animate: { transition: Ee },
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
                                children: `Safety items`,
                              }),
                            }),
                            className: `framer-1v6woxn`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      c(`div`, {
                        className: `framer-4p671f`,
                        "data-framer-name": `ClassesGallery`,
                        children: [
                          o(Z, {
                            dismissWithEsc: !0,
                            children: (e) =>
                              o(r, {
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `krziqjefP` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `krziqjefP` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `krziqjefP` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        Ne_bdqsWB: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 0,
                                        },
                                        YYNDlPTBp: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 0,
                                        },
                                      },
                                      children: o(w, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 0,
                                        children: c(b, {
                                          className: `framer-9648gf-container`,
                                          id: `9648gf`,
                                          nodeId: `zrXsK8n6p`,
                                          scopeId: `L4XXkv4Zj`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                Ne_bdqsWB: { oSlFkYxO1: t[1] },
                                                YYNDlPTBp: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(R, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 600,
                                                    pixelWidth: 600,
                                                    src: `../../assets/images/9nxkFTLd1PUkb6OsRweUtLBnNg.png?width=600&height=600`,
                                                    srcSet: `../../assets/images/9nxkFTLd1PUkb6OsRweUtLBnNg.png 512w,../../assets/images/9nxkFTLd1PUkb6OsRweUtLBnNg.png?width=600&height=600 600w`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `zrXsK8n6p`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Safety Jacket`,
                                                layoutId: `zrXsK8n6p`,
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
                                                      triggerId: `9648gf`,
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
                                                              className: h(M, `framer-1se3kca`),
                                                              "data-framer-portal-id": `9648gf`,
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
                                                            `Sz8FWuu3h`
                                                          ),
                                                          o(u.div, {
                                                            className: h(M, `framer-hbygu`),
                                                            "data-framer-portal-id": `9648gf`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-12ochva`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-16s1wt1`,
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
                                                                      className: `framer-1fk2b0p`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-152dpip`,
                                                                      onTap: j({ overlay: e }),
                                                                      children: o(k, {
                                                                        animated: !1,
                                                                        className: `framer-1o0cnj7`,
                                                                        layoutId: `tC30xhq8R`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/b433e43c-3c61-4156-b0e9-c78dab92437d/submit`,
                                                                  className: `framer-1ljxlsv`,
                                                                  nodeId: `bofe6Jv1e`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-1ywycyi`,
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
                                                                              className: `framer-1ih4gjf`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-hpknbq`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-ep6en6`,
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
                                                                              className: `framer-do35xu`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-541p3s`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1g0fra4`,
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
                                                                              className: `framer-1tw64we`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-11vwbf9`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1x3mr71`,
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
                                                                              className: `framer-1hn71te`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-ameyj4`,
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
                                                                            YYNDlPTBp: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(w, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-1k4g1g-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `CBsxi1KLv`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `L4XXkv4Zj`,
                                                                              children: o(N, {
                                                                                height: `100%`,
                                                                                id: `CBsxi1KLv`,
                                                                                layoutId: `CBsxi1KLv`,
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
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `C7qHA1PRl` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `C7qHA1PRl` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `C7qHA1PRl` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        Ne_bdqsWB: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 0,
                                        },
                                        YYNDlPTBp: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 416,
                                        },
                                      },
                                      children: o(w, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 0,
                                        children: c(b, {
                                          className: `framer-14ap142-container`,
                                          id: `14ap142`,
                                          nodeId: `P1LANhMF0`,
                                          scopeId: `L4XXkv4Zj`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                Ne_bdqsWB: { oSlFkYxO1: t[1] },
                                                YYNDlPTBp: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(R, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 344,
                                                    pixelWidth: 500,
                                                    src: `../../assets/images/NhRrITiEKbP0I8Pn9CYtMnpA5o.webp`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `P1LANhMF0`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Safety Shoes`,
                                                layoutId: `P1LANhMF0`,
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
                                                      triggerId: `14ap142`,
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
                                                              className: h(M, `framer-s5vnfm`),
                                                              "data-framer-portal-id": `14ap142`,
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
                                                            `B0DdIYD7h`
                                                          ),
                                                          o(u.div, {
                                                            className: h(M, `framer-1fajsp0`),
                                                            "data-framer-portal-id": `14ap142`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-1hbdwsg`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-129iu0y`,
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
                                                                      className: `framer-343sbq`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-1ka579s`,
                                                                      onTap: j({ overlay: e }),
                                                                      children: o(k, {
                                                                        animated: !1,
                                                                        className: `framer-10oy0ec`,
                                                                        layoutId: `JQkunWymT`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/c45f435d-5c22-4015-ac79-64c9fb9e74ec/submit`,
                                                                  className: `framer-1aedbpz`,
                                                                  nodeId: `AyoFaMO6M`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-cre05n`,
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
                                                                              className: `framer-1hvh6he`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-h1d7d8`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-6sfn6i`,
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
                                                                              className: `framer-1i4cr9a`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-mn84sq`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1sfsadk`,
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
                                                                              className: `framer-pcjig5`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1juiptk`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-125a4zd`,
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
                                                                              className: `framer-1xxpkto`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1l2qqab`,
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
                                                                            YYNDlPTBp: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(w, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-z9thnx-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `iVzf5ikQw`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `L4XXkv4Zj`,
                                                                              children: o(N, {
                                                                                height: `100%`,
                                                                                id: `iVzf5ikQw`,
                                                                                layoutId: `iVzf5ikQw`,
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
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `BS6GVS12q` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `BS6GVS12q` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `BS6GVS12q` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        Ne_bdqsWB: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 416,
                                        },
                                        YYNDlPTBp: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 832,
                                        },
                                      },
                                      children: o(w, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 0,
                                        children: c(b, {
                                          className: `framer-3fhxgn-container`,
                                          id: `3fhxgn`,
                                          nodeId: `ZBqQ9jWpQ`,
                                          scopeId: `L4XXkv4Zj`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                Ne_bdqsWB: { oSlFkYxO1: t[1] },
                                                YYNDlPTBp: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(R, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 500,
                                                    pixelWidth: 500,
                                                    src: `../../assets/images/1uysVJHExD0oWec4S1pCWXDOfw.webp`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `ZBqQ9jWpQ`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Safety Helmet`,
                                                layoutId: `ZBqQ9jWpQ`,
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
                                                      triggerId: `3fhxgn`,
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
                                                              className: h(M, `framer-1nqha97`),
                                                              "data-framer-portal-id": `3fhxgn`,
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
                                                            `uCCShTUn0`
                                                          ),
                                                          o(u.div, {
                                                            className: h(M, `framer-1ljuhz0`),
                                                            "data-framer-portal-id": `3fhxgn`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-61k3ba`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-ha408l`,
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
                                                                      className: `framer-1dxejd4`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-121rzx6`,
                                                                      onTap: j({ overlay: e }),
                                                                      children: o(k, {
                                                                        animated: !1,
                                                                        className: `framer-b7mqbu`,
                                                                        layoutId: `xBzd5_NCQ`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/161220b6-4c07-4e53-a1d7-b4010c8515b1/submit`,
                                                                  className: `framer-1eow0jf`,
                                                                  nodeId: `YP4izcYy8`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-14v1dpj`,
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
                                                                              className: `framer-17u0ako`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1mb1734`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-96o3ev`,
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
                                                                              className: `framer-1lfnjhr`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-6g2uh8`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-oqcl62`,
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
                                                                              className: `framer-1sjxdkl`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-13opko3`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-louefv`,
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
                                                                              className: `framer-6xms0o`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-ia11xp`,
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
                                                                            YYNDlPTBp: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(w, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-50rzo7-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `dBzyrEoOw`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `L4XXkv4Zj`,
                                                                              children: o(N, {
                                                                                height: `100%`,
                                                                                id: `dBzyrEoOw`,
                                                                                layoutId: `dBzyrEoOw`,
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
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `CecR8fXEx` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `CecR8fXEx` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `CecR8fXEx` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        Ne_bdqsWB: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 416,
                                        },
                                        YYNDlPTBp: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1248,
                                        },
                                      },
                                      children: o(w, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 416,
                                        children: c(b, {
                                          className: `framer-1qyjcx4-container`,
                                          id: `1qyjcx4`,
                                          nodeId: `mqXA_Tvr7`,
                                          scopeId: `L4XXkv4Zj`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                Ne_bdqsWB: { oSlFkYxO1: t[1] },
                                                YYNDlPTBp: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(R, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 285,
                                                    pixelWidth: 500,
                                                    src: `../../assets/images/9OKw0JLZSfl5rSvqjPs4xZnLw.webp`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `mqXA_Tvr7`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Safety Goggles`,
                                                layoutId: `mqXA_Tvr7`,
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
                                                      triggerId: `1qyjcx4`,
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
                                                              className: h(M, `framer-1ekhm4a`),
                                                              "data-framer-portal-id": `1qyjcx4`,
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
                                                            `YkPSLRfqO`
                                                          ),
                                                          o(u.div, {
                                                            className: h(M, `framer-14fml1k`),
                                                            "data-framer-portal-id": `1qyjcx4`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-10y9hng`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-cbnxll`,
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
                                                                      className: `framer-gecwz4`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-mvay9b`,
                                                                      onTap: j({ overlay: e }),
                                                                      children: o(k, {
                                                                        animated: !1,
                                                                        className: `framer-uc1dao`,
                                                                        layoutId: `pYFUhSLjo`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/6cb63b6e-c393-453e-a964-5c75d652949a/submit`,
                                                                  className: `framer-1com5m3`,
                                                                  nodeId: `IZjVI7JZO`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-ldky8q`,
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
                                                                              className: `framer-f2z894`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-g6h8nw`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1p88gma`,
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
                                                                              className: `framer-1pcccr7`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1741i7i`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-24ivny`,
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
                                                                              className: `framer-1xmoc3q`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1fj1tgy`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-18rhikv`,
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
                                                                              className: `framer-150w8qb`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1rvnxk1`,
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
                                                                            YYNDlPTBp: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(w, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-1cjypzf-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `DTehbcn9y`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `L4XXkv4Zj`,
                                                                              children: o(N, {
                                                                                height: `100%`,
                                                                                id: `DTehbcn9y`,
                                                                                layoutId: `DTehbcn9y`,
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
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `ZCVYcZHRC` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `ZCVYcZHRC` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `ZCVYcZHRC` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        Ne_bdqsWB: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 832,
                                        },
                                        YYNDlPTBp: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1664,
                                        },
                                      },
                                      children: o(w, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 416,
                                        children: c(b, {
                                          className: `framer-1pyb0rk-container`,
                                          id: `1pyb0rk`,
                                          nodeId: `MvXRWLBgT`,
                                          scopeId: `L4XXkv4Zj`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                Ne_bdqsWB: { oSlFkYxO1: t[1] },
                                                YYNDlPTBp: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(R, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 469,
                                                    pixelWidth: 364,
                                                    src: `../../assets/images/ErGUJ1FEShiDCtrB4fyKAvf0.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `MvXRWLBgT`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Safety Harness`,
                                                layoutId: `MvXRWLBgT`,
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
                                                      triggerId: `1pyb0rk`,
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
                                                              className: h(M, `framer-p8bmu8`),
                                                              "data-framer-portal-id": `1pyb0rk`,
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
                                                            `AFFNPJWeA`
                                                          ),
                                                          o(u.div, {
                                                            className: h(M, `framer-1ndgm7n`),
                                                            "data-framer-portal-id": `1pyb0rk`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-1ataxxr`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-h5lq30`,
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
                                                                      className: `framer-lcwr10`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-584q0f`,
                                                                      onTap: j({ overlay: e }),
                                                                      children: o(k, {
                                                                        animated: !1,
                                                                        className: `framer-1gnrvgh`,
                                                                        layoutId: `M4vLJ0eIn`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/0a2dcdb7-8312-447f-95a5-3a793473905f/submit`,
                                                                  className: `framer-1jk62nc`,
                                                                  nodeId: `tmLsMPNIc`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-zor7lt`,
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
                                                                              className: `framer-dmw9mz`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1slka5y`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1dt7eb2`,
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
                                                                              className: `framer-atndn1`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1opbrfq`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1fb8wrj`,
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
                                                                              className: `framer-1glc9zb`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-15pwibh`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-2o1gza`,
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
                                                                              className: `framer-tedqk1`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-11huky9`,
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
                                                                            YYNDlPTBp: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(w, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-mkhegp-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `Are3gNfmg`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `L4XXkv4Zj`,
                                                                              children: o(N, {
                                                                                height: `100%`,
                                                                                id: `Are3gNfmg`,
                                                                                layoutId: `Are3gNfmg`,
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
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `uWshyMrvZ` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `uWshyMrvZ` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `uWshyMrvZ` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        Ne_bdqsWB: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 832,
                                        },
                                        YYNDlPTBp: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 2080,
                                        },
                                      },
                                      children: o(w, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 416,
                                        children: c(b, {
                                          className: `framer-spa6ut-container`,
                                          id: `spa6ut`,
                                          nodeId: `kszfSCTzV`,
                                          scopeId: `L4XXkv4Zj`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                Ne_bdqsWB: { oSlFkYxO1: t[1] },
                                                YYNDlPTBp: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(R, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 477,
                                                    pixelWidth: 432,
                                                    src: `../../assets/images/MkyxLDiPh4pI5i2rowc49MZmtkQ.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `kszfSCTzV`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Industrial Ladders`,
                                                layoutId: `kszfSCTzV`,
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
                                                      triggerId: `spa6ut`,
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
                                                              className: h(M, `framer-c2mp9u`),
                                                              "data-framer-portal-id": `spa6ut`,
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
                                                            `XdB2127sb`
                                                          ),
                                                          o(u.div, {
                                                            className: h(M, `framer-4t9je7`),
                                                            "data-framer-portal-id": `spa6ut`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-pddqc7`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-1hb565o`,
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
                                                                      className: `framer-1qjg1jg`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-13lxqno`,
                                                                      onTap: j({ overlay: e }),
                                                                      children: o(k, {
                                                                        animated: !1,
                                                                        className: `framer-shlxh6`,
                                                                        layoutId: `Tu9g7zUtB`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/1b3db05c-7b5c-463b-af22-62b1ad2ba6df/submit`,
                                                                  className: `framer-1xxmc6l`,
                                                                  nodeId: `HvAnOMGn5`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-1fldj8y`,
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
                                                                              className: `framer-jwjsb2`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-i42ix5`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-4uzsp4`,
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
                                                                              className: `framer-1dw3spx`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1hox8w3`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1xxiel4`,
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
                                                                              className: `framer-1g7qpou`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1v1ezo4`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1ktfjmh`,
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
                                                                              className: `framer-1wfx74l`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1adrtm9`,
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
                                                                            YYNDlPTBp: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(w, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-ltcfo2-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `Neh2QsPpd`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `L4XXkv4Zj`,
                                                                              children: o(N, {
                                                                                height: `100%`,
                                                                                id: `Neh2QsPpd`,
                                                                                layoutId: `Neh2QsPpd`,
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
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `TXKjcG0H4` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `TXKjcG0H4` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `TXKjcG0H4` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        Ne_bdqsWB: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1248,
                                        },
                                        YYNDlPTBp: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 2496,
                                        },
                                      },
                                      children: o(w, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 832,
                                        children: c(b, {
                                          className: `framer-1uqwswp-container`,
                                          id: `1uqwswp`,
                                          nodeId: `yJ94bYoLG`,
                                          scopeId: `L4XXkv4Zj`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                Ne_bdqsWB: { oSlFkYxO1: t[1] },
                                                YYNDlPTBp: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(R, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 250,
                                                    pixelWidth: 250,
                                                    src: `../../assets/images/XYtv7rRCefvmBn1oipuleoHEMY.webp`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `yJ94bYoLG`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Lanyard`,
                                                layoutId: `yJ94bYoLG`,
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
                                                      triggerId: `1uqwswp`,
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
                                                              className: h(M, `framer-kfjbll`),
                                                              "data-framer-portal-id": `1uqwswp`,
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
                                                            `PTQPQJeLA`
                                                          ),
                                                          o(u.div, {
                                                            className: h(M, `framer-1feiizq`),
                                                            "data-framer-portal-id": `1uqwswp`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-1mujunj`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-9hfu4q`,
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
                                                                      className: `framer-1l567fv`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-1x3b00g`,
                                                                      onTap: j({ overlay: e }),
                                                                      children: o(k, {
                                                                        animated: !1,
                                                                        className: `framer-ancil6`,
                                                                        layoutId: `JYxQb4OXc`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/ab7826b5-6c9c-4c9d-a5ce-d2f223f0b021/submit`,
                                                                  className: `framer-1bw7ok`,
                                                                  nodeId: `k7dJxDl9S`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-ddfax3`,
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
                                                                              className: `framer-1jr86wa`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-xrwnd1`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-r94ku0`,
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
                                                                              className: `framer-1uzqvdj`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-z1j10r`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-131vgdl`,
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
                                                                              className: `framer-44qfe7`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-ikx6b3`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1jfelj8`,
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
                                                                              className: `framer-15lv1wd`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-12hs04h`,
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
                                                                            YYNDlPTBp: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(w, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-1yyoqkf-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `Q8ieTt5_p`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `L4XXkv4Zj`,
                                                                              children: o(N, {
                                                                                height: `100%`,
                                                                                id: `Q8ieTt5_p`,
                                                                                layoutId: `Q8ieTt5_p`,
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
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `vRzG6Qc6J` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `vRzG6Qc6J` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `vRzG6Qc6J` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        Ne_bdqsWB: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1248,
                                        },
                                        YYNDlPTBp: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 2912,
                                        },
                                      },
                                      children: o(w, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 832,
                                        children: c(b, {
                                          className: `framer-19klxjf-container`,
                                          id: `19klxjf`,
                                          nodeId: `GMoEVLinz`,
                                          scopeId: `L4XXkv4Zj`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                Ne_bdqsWB: { oSlFkYxO1: t[1] },
                                                YYNDlPTBp: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(R, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 413,
                                                    pixelWidth: 392,
                                                    src: `../../assets/images/lhfxoWecsx7M2SBGDDLd8L8f0.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `GMoEVLinz`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Cut Resistant Gloves`,
                                                layoutId: `GMoEVLinz`,
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
                                                      triggerId: `19klxjf`,
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
                                                              className: h(M, `framer-1vmmtw6`),
                                                              "data-framer-portal-id": `19klxjf`,
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
                                                            `CYklsGtdo`
                                                          ),
                                                          o(u.div, {
                                                            className: h(M, `framer-y6mt7q`),
                                                            "data-framer-portal-id": `19klxjf`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-1nyqpoh`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-daiac6`,
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
                                                                      className: `framer-xwdp40`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-1bkhkh4`,
                                                                      onTap: j({ overlay: e }),
                                                                      children: o(k, {
                                                                        animated: !1,
                                                                        className: `framer-etiwx7`,
                                                                        layoutId: `KXRd64vCN`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/ec692670-61cc-4067-a128-782758a8ab79/submit`,
                                                                  className: `framer-1vhyed0`,
                                                                  nodeId: `fJLstuUje`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-yaxb32`,
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
                                                                              className: `framer-z2vtut`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1p0s5al`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-pnr03a`,
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
                                                                              className: `framer-km9u14`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1w40qwq`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1uxhbuk`,
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
                                                                              className: `framer-13a5wzn`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-kknihy`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-zwzpp`,
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
                                                                              className: `framer-77nfeo`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1mflxfe`,
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
                                                                            YYNDlPTBp: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(w, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-f0t7t6-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `SwVkgfx8W`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `L4XXkv4Zj`,
                                                                              children: o(N, {
                                                                                height: `100%`,
                                                                                id: `SwVkgfx8W`,
                                                                                layoutId: `SwVkgfx8W`,
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
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `zVxyk4EMX` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `zVxyk4EMX` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `zVxyk4EMX` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        Ne_bdqsWB: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1664,
                                        },
                                        YYNDlPTBp: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 3328,
                                        },
                                      },
                                      children: o(w, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 832,
                                        children: c(b, {
                                          className: `framer-34hvs6-container`,
                                          id: `34hvs6`,
                                          nodeId: `RO1jHF826`,
                                          scopeId: `L4XXkv4Zj`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                Ne_bdqsWB: { oSlFkYxO1: t[1] },
                                                YYNDlPTBp: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(R, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 508,
                                                    pixelWidth: 415,
                                                    src: `../../assets/images/MNai20fPkJMR8goIvNiX5mfnSA.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `RO1jHF826`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Fire Extinguisher`,
                                                layoutId: `RO1jHF826`,
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
                                                      triggerId: `34hvs6`,
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
                                                              className: h(M, `framer-1rw9sdv`),
                                                              "data-framer-portal-id": `34hvs6`,
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
                                                            `HHN4Cu6z2`
                                                          ),
                                                          o(u.div, {
                                                            className: h(M, `framer-bkpp06`),
                                                            "data-framer-portal-id": `34hvs6`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-1jst3i9`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-iffk7`,
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
                                                                      className: `framer-mj2yph`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-1mg79rv`,
                                                                      onTap: j({ overlay: e }),
                                                                      children: o(k, {
                                                                        animated: !1,
                                                                        className: `framer-1jopl2f`,
                                                                        layoutId: `eMWuKXUK2`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/93cdd8d7-50fd-452e-9104-e88d00cbf9cb/submit`,
                                                                  className: `framer-1o6zqtp`,
                                                                  nodeId: `de3tjppbI`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-1gb8ril`,
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
                                                                              className: `framer-5zwma1`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1e4j11o`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-6vf2cq`,
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
                                                                              className: `framer-38lgre`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-15ykjxs`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1tk1au7`,
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
                                                                              className: `framer-1nz01um`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1ata4ts`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1t456z1`,
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
                                                                              className: `framer-bn83xe`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-15rait9`,
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
                                                                            YYNDlPTBp: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(w, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-1exdb1h-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `tiRixKNPw`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `L4XXkv4Zj`,
                                                                              children: o(N, {
                                                                                height: `100%`,
                                                                                id: `tiRixKNPw`,
                                                                                layoutId: `tiRixKNPw`,
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
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `Ea_TyMYoy` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Ea_TyMYoy` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Ea_TyMYoy` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        Ne_bdqsWB: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 1664,
                                        },
                                        YYNDlPTBp: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 3744,
                                        },
                                      },
                                      children: o(w, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 1248,
                                        children: c(b, {
                                          className: `framer-1x5vqyd-container`,
                                          id: `1x5vqyd`,
                                          nodeId: `IrnZz1BYm`,
                                          scopeId: `L4XXkv4Zj`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                Ne_bdqsWB: { oSlFkYxO1: t[1] },
                                                YYNDlPTBp: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(R, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 455,
                                                    pixelWidth: 455,
                                                    src: `../../assets/images/SIgN0rUsmgBpYXk92BcMZOs14.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `IrnZz1BYm`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Ear Plugs`,
                                                layoutId: `IrnZz1BYm`,
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
                                                      triggerId: `1x5vqyd`,
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
                                                              className: h(M, `framer-2kx9af`),
                                                              "data-framer-portal-id": `1x5vqyd`,
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
                                                            `HT7C44u52`
                                                          ),
                                                          o(u.div, {
                                                            className: h(M, `framer-1mx85zp`),
                                                            "data-framer-portal-id": `1x5vqyd`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-1eysi5f`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-f5uojo`,
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
                                                                      className: `framer-6knrkl`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-xf29x0`,
                                                                      onTap: j({ overlay: e }),
                                                                      children: o(k, {
                                                                        animated: !1,
                                                                        className: `framer-phmx2y`,
                                                                        layoutId: `bhHQ0sAcu`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/fa8f09ba-4a40-42b2-a10a-63ca1c76a44c/submit`,
                                                                  className: `framer-rrqyv4`,
                                                                  nodeId: `Bsm_QbCFy`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-134tdqm`,
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
                                                                              className: `framer-xn9nhu`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-wgqvx2`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-9z69t1`,
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
                                                                              className: `framer-1tqdm8p`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-7dbwf0`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1is7tlu`,
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
                                                                              className: `framer-1yf2bv6`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-97pkdv`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1r8i1eu`,
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
                                                                              className: `framer-1jwoa2v`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1g18g7k`,
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
                                                                            YYNDlPTBp: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(w, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-18wpkil-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `yrOVSiFJ3`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `L4XXkv4Zj`,
                                                                              children: o(N, {
                                                                                height: `100%`,
                                                                                id: `yrOVSiFJ3`,
                                                                                layoutId: `yrOVSiFJ3`,
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
                                children: o(g, {
                                  links: [
                                    {
                                      href: { webPageId: `kJDfKTWdE` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `kJDfKTWdE` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `kJDfKTWdE` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (t) =>
                                    o(v, {
                                      breakpoint: T,
                                      overrides: {
                                        Ne_bdqsWB: {
                                          width: `max((min(${m?.width || `100vw`}, 1128px) - 64px) / 2, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 2080,
                                        },
                                        YYNDlPTBp: {
                                          width: `max(min(${m?.width || `100vw`}, 1128px) - 32px, 50px)`,
                                          y: (m?.y || 0) + 0 + 0 + 80 + 164.4 + 0 + 4160,
                                        },
                                      },
                                      children: o(w, {
                                        height: 400,
                                        width: `max((min(${m?.width || `100vw`}, 1128px) - 80px) / 3, 50px)`,
                                        y: (m?.y || 0) + 0 + 0 + 96 + 164.4 + 0 + 1248,
                                        children: c(b, {
                                          className: `framer-1gtwp6z-container`,
                                          id: `1gtwp6z`,
                                          nodeId: `oCPUzP35j`,
                                          scopeId: `L4XXkv4Zj`,
                                          children: [
                                            o(v, {
                                              breakpoint: T,
                                              overrides: {
                                                Ne_bdqsWB: { oSlFkYxO1: t[1] },
                                                YYNDlPTBp: { oSlFkYxO1: t[2] },
                                              },
                                              children: o(R, {
                                                BlDyCL1Hj: q(
                                                  {
                                                    pixelHeight: 491,
                                                    pixelWidth: 465,
                                                    src: `../../assets/images/WBxrzsR04VV6FqDKAepiHY1YfX8.png`,
                                                  },
                                                  ``
                                                ),
                                                height: `100%`,
                                                id: `oCPUzP35j`,
                                                jTs_fuWrm: A({ overlay: e }),
                                                JWP0bNV85: `Leather Hand Gloves`,
                                                layoutId: `oCPUzP35j`,
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
                                                      triggerId: `1gtwp6z`,
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
                                                              className: h(M, `framer-1mwzvzh`),
                                                              "data-framer-portal-id": `1gtwp6z`,
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
                                                            `B86vi75hK`
                                                          ),
                                                          o(u.div, {
                                                            className: h(M, `framer-1gi7oj4`),
                                                            "data-framer-portal-id": `1gtwp6z`,
                                                            transformTemplate: J,
                                                            children: c(u.div, {
                                                              className: `framer-1v1wmzh`,
                                                              children: [
                                                                c(u.div, {
                                                                  className: `framer-1a9ibvo`,
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
                                                                      className: `framer-40qkwj`,
                                                                      fonts: [`Inter-Bold`],
                                                                      verticalAlignment: `top`,
                                                                      withExternalLayout: !0,
                                                                    }),
                                                                    o(u.div, {
                                                                      className: `framer-17w7w88`,
                                                                      onTap: j({ overlay: e }),
                                                                      children: o(k, {
                                                                        animated: !1,
                                                                        className: `framer-18k92qd`,
                                                                        layoutId: `uUfa1_9sg`,
                                                                        UO5clYVeQ: !0,
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                                o(x, {
                                                                  action: `https://api.framer.com/forms/v1/forms/8e573046-f158-44b7-a64d-fcd9008e7444/submit`,
                                                                  className: `framer-uowpnw`,
                                                                  nodeId: `umqqfai4R`,
                                                                  children: (e) =>
                                                                    c(r, {
                                                                      children: [
                                                                        c(u.label, {
                                                                          className: `framer-1z34cc`,
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
                                                                              className: `framer-wmgwme`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-shwv2w`,
                                                                              inputName: `Email`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-fnvtlt`,
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
                                                                              className: `framer-y497v6`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1yrtzlz`,
                                                                              inputName: `Mobile Number`,
                                                                              placeholder: ``,
                                                                              required: !1,
                                                                              type: `tel`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-jjw1fp`,
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
                                                                              className: `framer-jc4rc6`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-14w7hbs`,
                                                                              inputName: `Product Name`,
                                                                              placeholder: ``,
                                                                              type: `text`,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        c(u.label, {
                                                                          className: `framer-1rt5yyo`,
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
                                                                              className: `framer-8jvgpt`,
                                                                              fonts: [
                                                                                `Inter-Medium`,
                                                                              ],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                            o(C, {
                                                                              className: `framer-1afciou`,
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
                                                                            YYNDlPTBp: {
                                                                              width: `221px`,
                                                                            },
                                                                          },
                                                                          children: o(w, {
                                                                            width: `277px`,
                                                                            children: o(b, {
                                                                              className: `framer-1p0cxuh-container`,
                                                                              inComponentSlot: !0,
                                                                              isModuleExternal: !0,
                                                                              nodeId: `QzbWVEtCI`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `L4XXkv4Zj`,
                                                                              children: o(N, {
                                                                                height: `100%`,
                                                                                id: `QzbWVEtCI`,
                                                                                layoutId: `QzbWVEtCI`,
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
        `.framer-9RCuZ.framer-1t9yadn, .framer-9RCuZ .framer-1t9yadn { display: block; }`,
        `.framer-9RCuZ.framer-1ixc89k { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-9RCuZ .framer-d02bma { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1128px; overflow: visible; padding: 96px 24px 96px 24px; position: relative; scroll-margin-top: 40px; width: 100%; }`,
        `.framer-9RCuZ .framer-1p1ntce { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9RCuZ .framer-1uajj1u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-9RCuZ .framer-1b35eg1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-9RCuZ .framer-qo3jv7 { --1335ju: 2; --18mrqx2: #000000; --3it368: 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-9RCuZ .framer-161jjm4-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-9RCuZ .framer-1v6woxn { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-9RCuZ .framer-4p671f { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9RCuZ .framer-9648gf-container, .framer-9RCuZ .framer-14ap142-container, .framer-9RCuZ .framer-3fhxgn-container, .framer-9RCuZ .framer-1qyjcx4-container, .framer-9RCuZ .framer-1pyb0rk-container, .framer-9RCuZ .framer-spa6ut-container, .framer-9RCuZ .framer-1uqwswp-container, .framer-9RCuZ .framer-19klxjf-container, .framer-9RCuZ .framer-34hvs6-container, .framer-9RCuZ .framer-1x5vqyd-container, .framer-9RCuZ .framer-1gtwp6z-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-9RCuZ.framer-1se3kca, .framer-9RCuZ.framer-s5vnfm, .framer-9RCuZ.framer-1nqha97, .framer-9RCuZ.framer-1ekhm4a, .framer-9RCuZ.framer-p8bmu8, .framer-9RCuZ.framer-c2mp9u, .framer-9RCuZ.framer-kfjbll, .framer-9RCuZ.framer-1vmmtw6, .framer-9RCuZ.framer-1rw9sdv, .framer-9RCuZ.framer-2kx9af, .framer-9RCuZ.framer-1mwzvzh { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-9RCuZ.framer-hbygu, .framer-9RCuZ.framer-1fajsp0, .framer-9RCuZ.framer-1ljuhz0, .framer-9RCuZ.framer-14fml1k, .framer-9RCuZ.framer-1ndgm7n, .framer-9RCuZ.framer-4t9je7, .framer-9RCuZ.framer-1feiizq, .framer-9RCuZ.framer-y6mt7q, .framer-9RCuZ.framer-bkpp06, .framer-9RCuZ.framer-1mx85zp, .framer-9RCuZ.framer-1gi7oj4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-9RCuZ .framer-12ochva, .framer-9RCuZ .framer-1hbdwsg, .framer-9RCuZ .framer-61k3ba, .framer-9RCuZ .framer-10y9hng, .framer-9RCuZ .framer-1ataxxr, .framer-9RCuZ .framer-pddqc7, .framer-9RCuZ .framer-1mujunj, .framer-9RCuZ .framer-1nyqpoh, .framer-9RCuZ .framer-1jst3i9, .framer-9RCuZ .framer-1eysi5f, .framer-9RCuZ .framer-1v1wmzh { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-9RCuZ .framer-16s1wt1, .framer-9RCuZ .framer-129iu0y, .framer-9RCuZ .framer-ha408l, .framer-9RCuZ .framer-cbnxll, .framer-9RCuZ .framer-h5lq30, .framer-9RCuZ .framer-1hb565o, .framer-9RCuZ .framer-9hfu4q, .framer-9RCuZ .framer-daiac6, .framer-9RCuZ .framer-iffk7, .framer-9RCuZ .framer-f5uojo, .framer-9RCuZ .framer-1a9ibvo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-9RCuZ .framer-1fk2b0p, .framer-9RCuZ .framer-343sbq, .framer-9RCuZ .framer-1dxejd4, .framer-9RCuZ .framer-gecwz4, .framer-9RCuZ .framer-lcwr10, .framer-9RCuZ .framer-1qjg1jg, .framer-9RCuZ .framer-1l567fv, .framer-9RCuZ .framer-xwdp40, .framer-9RCuZ .framer-mj2yph, .framer-9RCuZ .framer-6knrkl, .framer-9RCuZ .framer-40qkwj { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-9RCuZ .framer-152dpip, .framer-9RCuZ .framer-1ka579s, .framer-9RCuZ .framer-121rzx6, .framer-9RCuZ .framer-mvay9b, .framer-9RCuZ .framer-584q0f, .framer-9RCuZ .framer-13lxqno, .framer-9RCuZ .framer-1x3b00g, .framer-9RCuZ .framer-1bkhkh4, .framer-9RCuZ .framer-1mg79rv, .framer-9RCuZ .framer-xf29x0, .framer-9RCuZ .framer-17w7w88 { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-9RCuZ .framer-1o0cnj7, .framer-9RCuZ .framer-10oy0ec, .framer-9RCuZ .framer-b7mqbu, .framer-9RCuZ .framer-uc1dao, .framer-9RCuZ .framer-1gnrvgh, .framer-9RCuZ .framer-shlxh6, .framer-9RCuZ .framer-ancil6, .framer-9RCuZ .framer-etiwx7, .framer-9RCuZ .framer-1jopl2f, .framer-9RCuZ .framer-phmx2y, .framer-9RCuZ .framer-18k92qd { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-9RCuZ .framer-1ljxlsv, .framer-9RCuZ .framer-1aedbpz, .framer-9RCuZ .framer-1eow0jf, .framer-9RCuZ .framer-1com5m3, .framer-9RCuZ .framer-1jk62nc, .framer-9RCuZ .framer-1xxmc6l, .framer-9RCuZ .framer-1bw7ok, .framer-9RCuZ .framer-1vhyed0, .framer-9RCuZ .framer-1o6zqtp, .framer-9RCuZ .framer-rrqyv4, .framer-9RCuZ .framer-uowpnw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-9RCuZ .framer-1ywycyi, .framer-9RCuZ .framer-ep6en6, .framer-9RCuZ .framer-1g0fra4, .framer-9RCuZ .framer-1x3mr71, .framer-9RCuZ .framer-cre05n, .framer-9RCuZ .framer-6sfn6i, .framer-9RCuZ .framer-1sfsadk, .framer-9RCuZ .framer-125a4zd, .framer-9RCuZ .framer-14v1dpj, .framer-9RCuZ .framer-96o3ev, .framer-9RCuZ .framer-oqcl62, .framer-9RCuZ .framer-louefv, .framer-9RCuZ .framer-ldky8q, .framer-9RCuZ .framer-1p88gma, .framer-9RCuZ .framer-24ivny, .framer-9RCuZ .framer-18rhikv, .framer-9RCuZ .framer-zor7lt, .framer-9RCuZ .framer-1dt7eb2, .framer-9RCuZ .framer-1fb8wrj, .framer-9RCuZ .framer-2o1gza, .framer-9RCuZ .framer-1fldj8y, .framer-9RCuZ .framer-4uzsp4, .framer-9RCuZ .framer-1xxiel4, .framer-9RCuZ .framer-1ktfjmh, .framer-9RCuZ .framer-ddfax3, .framer-9RCuZ .framer-r94ku0, .framer-9RCuZ .framer-131vgdl, .framer-9RCuZ .framer-1jfelj8, .framer-9RCuZ .framer-yaxb32, .framer-9RCuZ .framer-pnr03a, .framer-9RCuZ .framer-1uxhbuk, .framer-9RCuZ .framer-zwzpp, .framer-9RCuZ .framer-1gb8ril, .framer-9RCuZ .framer-6vf2cq, .framer-9RCuZ .framer-1tk1au7, .framer-9RCuZ .framer-1t456z1, .framer-9RCuZ .framer-134tdqm, .framer-9RCuZ .framer-9z69t1, .framer-9RCuZ .framer-1is7tlu, .framer-9RCuZ .framer-1r8i1eu, .framer-9RCuZ .framer-1z34cc, .framer-9RCuZ .framer-fnvtlt, .framer-9RCuZ .framer-jjw1fp, .framer-9RCuZ .framer-1rt5yyo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9RCuZ .framer-1ih4gjf, .framer-9RCuZ .framer-do35xu, .framer-9RCuZ .framer-1tw64we, .framer-9RCuZ .framer-1hn71te, .framer-9RCuZ .framer-1hvh6he, .framer-9RCuZ .framer-1i4cr9a, .framer-9RCuZ .framer-pcjig5, .framer-9RCuZ .framer-1xxpkto, .framer-9RCuZ .framer-17u0ako, .framer-9RCuZ .framer-1lfnjhr, .framer-9RCuZ .framer-1sjxdkl, .framer-9RCuZ .framer-6xms0o, .framer-9RCuZ .framer-f2z894, .framer-9RCuZ .framer-1pcccr7, .framer-9RCuZ .framer-1xmoc3q, .framer-9RCuZ .framer-150w8qb, .framer-9RCuZ .framer-dmw9mz, .framer-9RCuZ .framer-atndn1, .framer-9RCuZ .framer-1glc9zb, .framer-9RCuZ .framer-tedqk1, .framer-9RCuZ .framer-jwjsb2, .framer-9RCuZ .framer-1dw3spx, .framer-9RCuZ .framer-1g7qpou, .framer-9RCuZ .framer-1wfx74l, .framer-9RCuZ .framer-1jr86wa, .framer-9RCuZ .framer-1uzqvdj, .framer-9RCuZ .framer-44qfe7, .framer-9RCuZ .framer-15lv1wd, .framer-9RCuZ .framer-z2vtut, .framer-9RCuZ .framer-km9u14, .framer-9RCuZ .framer-13a5wzn, .framer-9RCuZ .framer-77nfeo, .framer-9RCuZ .framer-5zwma1, .framer-9RCuZ .framer-38lgre, .framer-9RCuZ .framer-1nz01um, .framer-9RCuZ .framer-bn83xe, .framer-9RCuZ .framer-xn9nhu, .framer-9RCuZ .framer-1tqdm8p, .framer-9RCuZ .framer-1yf2bv6, .framer-9RCuZ .framer-1jwoa2v, .framer-9RCuZ .framer-wmgwme, .framer-9RCuZ .framer-y497v6, .framer-9RCuZ .framer-jc4rc6, .framer-9RCuZ .framer-8jvgpt { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-9RCuZ .framer-hpknbq, .framer-9RCuZ .framer-541p3s, .framer-9RCuZ .framer-11vwbf9, .framer-9RCuZ .framer-ameyj4, .framer-9RCuZ .framer-h1d7d8, .framer-9RCuZ .framer-mn84sq, .framer-9RCuZ .framer-1juiptk, .framer-9RCuZ .framer-1l2qqab, .framer-9RCuZ .framer-1mb1734, .framer-9RCuZ .framer-6g2uh8, .framer-9RCuZ .framer-13opko3, .framer-9RCuZ .framer-ia11xp, .framer-9RCuZ .framer-g6h8nw, .framer-9RCuZ .framer-1741i7i, .framer-9RCuZ .framer-1fj1tgy, .framer-9RCuZ .framer-1rvnxk1, .framer-9RCuZ .framer-1slka5y, .framer-9RCuZ .framer-1opbrfq, .framer-9RCuZ .framer-15pwibh, .framer-9RCuZ .framer-11huky9, .framer-9RCuZ .framer-i42ix5, .framer-9RCuZ .framer-1hox8w3, .framer-9RCuZ .framer-1v1ezo4, .framer-9RCuZ .framer-1adrtm9, .framer-9RCuZ .framer-xrwnd1, .framer-9RCuZ .framer-z1j10r, .framer-9RCuZ .framer-ikx6b3, .framer-9RCuZ .framer-12hs04h, .framer-9RCuZ .framer-1p0s5al, .framer-9RCuZ .framer-1w40qwq, .framer-9RCuZ .framer-kknihy, .framer-9RCuZ .framer-1mflxfe, .framer-9RCuZ .framer-1e4j11o, .framer-9RCuZ .framer-15ykjxs, .framer-9RCuZ .framer-1ata4ts, .framer-9RCuZ .framer-15rait9, .framer-9RCuZ .framer-wgqvx2, .framer-9RCuZ .framer-7dbwf0, .framer-9RCuZ .framer-97pkdv, .framer-9RCuZ .framer-1g18g7k, .framer-9RCuZ .framer-shwv2w, .framer-9RCuZ .framer-1yrtzlz, .framer-9RCuZ .framer-14w7hbs, .framer-9RCuZ .framer-1afciou { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-9RCuZ .framer-1k4g1g-container, .framer-9RCuZ .framer-z9thnx-container, .framer-9RCuZ .framer-50rzo7-container, .framer-9RCuZ .framer-1cjypzf-container, .framer-9RCuZ .framer-mkhegp-container, .framer-9RCuZ .framer-ltcfo2-container, .framer-9RCuZ .framer-1yyoqkf-container, .framer-9RCuZ .framer-f0t7t6-container, .framer-9RCuZ .framer-1exdb1h-container, .framer-9RCuZ .framer-18wpkil-container, .framer-9RCuZ .framer-1p0cxuh-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        ...O,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-9RCuZ.framer-1ixc89k { width: 810px; } .framer-9RCuZ .framer-d02bma { padding: 80px 24px 80px 24px; } .framer-9RCuZ .framer-4p671f { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-9RCuZ .framer-12ochva, .framer-9RCuZ .framer-1hbdwsg, .framer-9RCuZ .framer-61k3ba, .framer-9RCuZ .framer-10y9hng, .framer-9RCuZ .framer-1ataxxr, .framer-9RCuZ .framer-pddqc7, .framer-9RCuZ .framer-1mujunj, .framer-9RCuZ .framer-1nyqpoh, .framer-9RCuZ .framer-1jst3i9, .framer-9RCuZ .framer-1eysi5f, .framer-9RCuZ .framer-1v1wmzh { height: min-content; width: min-content; } .framer-9RCuZ .framer-16s1wt1, .framer-9RCuZ .framer-129iu0y, .framer-9RCuZ .framer-ha408l, .framer-9RCuZ .framer-cbnxll, .framer-9RCuZ .framer-h5lq30, .framer-9RCuZ .framer-1hb565o, .framer-9RCuZ .framer-9hfu4q, .framer-9RCuZ .framer-daiac6, .framer-9RCuZ .framer-iffk7, .framer-9RCuZ .framer-f5uojo, .framer-9RCuZ .framer-1a9ibvo { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-9RCuZ.framer-1ixc89k { width: 390px; } .framer-9RCuZ .framer-d02bma { padding: 80px 16px 80px 16px; } .framer-9RCuZ .framer-4p671f { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-9RCuZ .framer-9648gf-container { order: 0; } .framer-9RCuZ.framer-hbygu, .framer-9RCuZ.framer-1fajsp0, .framer-9RCuZ.framer-1ljuhz0, .framer-9RCuZ.framer-14fml1k, .framer-9RCuZ.framer-1ndgm7n, .framer-9RCuZ.framer-4t9je7, .framer-9RCuZ.framer-1feiizq, .framer-9RCuZ.framer-y6mt7q, .framer-9RCuZ.framer-bkpp06, .framer-9RCuZ.framer-1mx85zp, .framer-9RCuZ.framer-1gi7oj4 { padding: 60px 0px 0px 0px; } .framer-9RCuZ .framer-12ochva, .framer-9RCuZ .framer-1hbdwsg, .framer-9RCuZ .framer-61k3ba, .framer-9RCuZ .framer-10y9hng, .framer-9RCuZ .framer-1ataxxr, .framer-9RCuZ .framer-pddqc7, .framer-9RCuZ .framer-1mujunj, .framer-9RCuZ .framer-1nyqpoh, .framer-9RCuZ .framer-1jst3i9, .framer-9RCuZ .framer-1eysi5f, .framer-9RCuZ .framer-1v1wmzh { height: min-content; width: 300px; } .framer-9RCuZ .framer-1ljxlsv, .framer-9RCuZ .framer-1aedbpz, .framer-9RCuZ .framer-1eow0jf, .framer-9RCuZ .framer-1com5m3, .framer-9RCuZ .framer-1jk62nc, .framer-9RCuZ .framer-1xxmc6l, .framer-9RCuZ .framer-1bw7ok, .framer-9RCuZ .framer-1vhyed0, .framer-9RCuZ .framer-1o6zqtp, .framer-9RCuZ .framer-rrqyv4, .framer-9RCuZ .framer-uowpnw { width: 261px; } .framer-9RCuZ .framer-14ap142-container { order: 1; } .framer-9RCuZ .framer-3fhxgn-container { order: 2; } .framer-9RCuZ .framer-1qyjcx4-container { order: 3; } .framer-9RCuZ .framer-1pyb0rk-container { order: 4; } .framer-9RCuZ .framer-spa6ut-container { order: 5; } .framer-9RCuZ .framer-1uqwswp-container { order: 6; } .framer-9RCuZ .framer-19klxjf-container { order: 7; } .framer-9RCuZ .framer-34hvs6-container { order: 8; } .framer-9RCuZ .framer-1x5vqyd-container { order: 9; } .framer-9RCuZ .framer-1gtwp6z-container { order: 10; }}`,
      ],
      `framer-9RCuZ`
    )),
    (Q.displayName = `Fasteners`),
    (Q.defaultProps = { height: 2311, width: 1200 }),
    T(
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
        ...z,
        ...B,
        ...U,
        ...W,
        ...G,
        ...m(ve),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerL4XXkv4Zj`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
            framerResponsiveScreen: ``,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"Ne_bdqsWB":{"layout":["fixed","fixed"]},"YYNDlPTBp":{"layout":["fixed","fixed"]}}}`,
            framerScrollSections: `{"F0LdEF5Vv":{"pattern":":F0LdEF5Vv","name":"classes"}}`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerIntrinsicHeight: `2311`,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1200`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=2pouVXv2ikBrLJN3GxdZwp4r2V4MYQLWCrcjp7qFyJM.BmRFW-Rz.mjs.map
