import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  O as t,
  P as n,
  c as r,
  g as i,
  i as a,
  j as o,
  l as s,
  o as c,
  s as l,
  u,
  v as d,
  w as f,
} from "./react.N6WDMTqS.mjs";
import { S as p, n as ee, r as te, t as m } from "./motion.CXXzZ97F.mjs";
import {
  I as h,
  O as g,
  U as _,
  at as ne,
  b as re,
  c as ie,
  ct as v,
  d as ae,
  dt as oe,
  g as y,
  it as b,
  lt as x,
  mt as S,
  n as C,
  nt as w,
  o as se,
  ot as T,
  s as E,
  st as D,
  t as O,
  tt as k,
  w as A,
  x as j,
  y as ce,
} from "./framer.w0XhpZTx.mjs";
import { a as M, i as N, n as P, o as le, r as F, t as I } from "./shared.DPOhhryJ.mjs";
import ue, { t as L } from "./FzeznbWWwTQ2KrLHWlV5XGNJcCfBbYDLWPNrdNdUMb8.CKtXOuXC.mjs";
var R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (l(),
    _(),
    m(),
    f(),
    c(),
    le(),
    N(),
    P(),
    L(),
    (R = h(I)),
    (z = h(M)),
    (B = h(F)),
    (V = {
      JdxTi_UaK: `(max-width: 809.98px)`,
      qpw_Rnimf: `(min-width: 810px) and (max-width: 1199.98px)`,
      r7R_ByJjs: `(min-width: 1200px)`,
    }),
    (H = `framer-dq9BA`),
    (U = {
      JdxTi_UaK: `framer-v-np9ry`,
      qpw_Rnimf: `framer-v-1xaekx9`,
      r7R_ByJjs: `framer-v-1lf75q4`,
    }),
    (W = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (G = (e, t) => `translateY(-50%) ${t}`),
    (K = (e, t, n) => {
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
    (q = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (J = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = x({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (Y = ({ value: e }) =>
      T()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (X = { Desktop: `r7R_ByJjs`, Phone: `JdxTi_UaK`, Tablet: `qpw_Rnimf` }),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: X[r.variant] ?? r.variant ?? `r7R_ByJjs`,
    })),
    (Q = S(
      i(function (e, i) {
        let c = t(null),
          l = i ?? c,
          f = d(),
          { activeLocale: m, setLocale: h } = D(),
          _ = w(),
          { style: x, className: S, layoutId: T, variant: A, ...N } = Z(e);
        v(o(() => ue({}, m), [m]));
        let [P, le] = ne(A, V, !1),
          { activeVariantCallback: L, delay: R } = k(void 0),
          z = ({ overlay: e, loadMore: t }) =>
            L(async (...t) => {
              e.toggle();
            }),
          B = ({ overlay: e, loadMore: t }) =>
            L(async (...t) => {
              e.hide();
            }),
          X = g(H);
        return (
          oe(),
          b({}),
          s(ie.Provider, {
            value: { primaryVariantId: `r7R_ByJjs`, variantClassNames: U },
            children: u(te, {
              id: T ?? f,
              children: [
                s(Y, { value: `html body { background: rgb(255, 255, 255); }` }),
                s(p.div, {
                  ...N,
                  className: g(X, `framer-1lf75q4`, S),
                  ref: l,
                  style: { ...x },
                  children: s(`div`, {
                    className: `framer-w3wgyk`,
                    children: s(J, {
                      dismissWithEsc: !0,
                      children: (e) =>
                        s(r, {
                          children: s(re, {
                            links: [
                              { href: { webPageId: `huy0hzZNy` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `huy0hzZNy` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `huy0hzZNy` }, implicitPathVariables: void 0 },
                            ],
                            children: (t) =>
                              s(y, {
                                breakpoint: P,
                                overrides: {
                                  JdxTi_UaK: { width: `390px` },
                                  qpw_Rnimf: { width: `809px` },
                                },
                                children: s(O, {
                                  height: 441,
                                  width: `1120px`,
                                  y: (_?.y || 0) + 0 + 0 + 80,
                                  children: u(C, {
                                    className: `framer-1d96z0x-container`,
                                    id: `1d96z0x`,
                                    nodeId: `A8rtEOHff`,
                                    scopeId: `XTOoWky3G`,
                                    children: [
                                      s(y, {
                                        breakpoint: P,
                                        overrides: {
                                          JdxTi_UaK: { variant: `K_ycYaEcQ`, ZKclmvn_H: t[2] },
                                          qpw_Rnimf: { ZKclmvn_H: t[1] },
                                        },
                                        children: s(I, {
                                          C6KVezXmF: `Measuring and Digital meters`,
                                          foHHv2HKv: z({ overlay: e }),
                                          height: `100%`,
                                          hvDKqkZQw: W(
                                            {
                                              pixelHeight: 469,
                                              pixelWidth: 618,
                                              src: `../../assets/images/fdQxGJxerX223Cda73bXGWAhhA.png?width=618&height=469`,
                                              srcSet: `../../assets/images/fdQxGJxerX223Cda73bXGWAhhA.png 512w,../../assets/images/fdQxGJxerX223Cda73bXGWAhhA.png?width=618&height=469 618w`,
                                            },
                                            ``
                                          ),
                                          id: `A8rtEOHff`,
                                          layoutId: `A8rtEOHff`,
                                          NF5me_oRa: `A stable and adjustable base used to hold dial indicators, gauges, or other measuring instruments in place. Its strong magnetic base ensures firm positioning on metal surfaces, allowing accurate and hands-free measurements.`,
                                          style: { width: `100%` },
                                          variant: `e8KDx5Yru`,
                                          width: `100%`,
                                          YFKMY7d12: `Magnetic Stand`,
                                          ZKclmvn_H: t[0],
                                        }),
                                      }),
                                      s(ee, {
                                        children:
                                          e.visible &&
                                          s(r, {
                                            children: a(
                                              s(ae, {
                                                triggerId: `1d96z0x`,
                                                children: u(ce, {
                                                  children: [
                                                    s(
                                                      p.div,
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
                                                        className: g(X, `framer-uvffy7`),
                                                        "data-framer-portal-id": `1d96z0x`,
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
                                                      `DCr2tvIqG`
                                                    ),
                                                    s(p.div, {
                                                      className: g(X, `framer-13glfta`),
                                                      "data-framer-portal-id": `1d96z0x`,
                                                      transformTemplate: G,
                                                      children: u(p.div, {
                                                        className: `framer-1gp7jvt`,
                                                        children: [
                                                          u(p.div, {
                                                            className: `framer-1dpav3r`,
                                                            children: [
                                                              s(j, {
                                                                __fromCanvasComponent: !0,
                                                                children: s(n, {
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
                                                                className: `framer-1mx7v3w`,
                                                                fonts: [`Inter-Bold`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                              s(p.div, {
                                                                className: `framer-11f2quo`,
                                                                onTap: B({ overlay: e }),
                                                                children: s(M, {
                                                                  animated: !1,
                                                                  className: `framer-12f2h22`,
                                                                  layoutId: `I9U8ynHd8`,
                                                                  UO5clYVeQ: !0,
                                                                }),
                                                              }),
                                                            ],
                                                          }),
                                                          s(se, {
                                                            action: `https://api.framer.com/forms/v1/forms/c6e01891-a9be-4ea2-aade-b42330fdd496/submit`,
                                                            className: `framer-pvrt88`,
                                                            nodeId: `ZPCojoJye`,
                                                            children: (e) =>
                                                              u(r, {
                                                                children: [
                                                                  u(p.label, {
                                                                    className: `framer-1rplxo3`,
                                                                    children: [
                                                                      s(j, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: s(n, {
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
                                                                        className: `framer-1we0nl9`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      s(E, {
                                                                        className: `framer-kl12q3`,
                                                                        inputName: `Email`,
                                                                        placeholder: ``,
                                                                        type: `text`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  u(p.label, {
                                                                    className: `framer-eg1q7n`,
                                                                    children: [
                                                                      s(j, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: s(n, {
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
                                                                        className: `framer-9gu37u`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      s(E, {
                                                                        className: `framer-7k97xx`,
                                                                        inputName: `Mobile Number`,
                                                                        placeholder: ``,
                                                                        required: !1,
                                                                        type: `tel`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  u(p.label, {
                                                                    className: `framer-e1ucto`,
                                                                    children: [
                                                                      s(j, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: s(n, {
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
                                                                        className: `framer-wwbrwl`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      s(E, {
                                                                        className: `framer-e8x90v`,
                                                                        inputName: `Product Name`,
                                                                        placeholder: ``,
                                                                        type: `text`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  u(p.label, {
                                                                    className: `framer-1saemub`,
                                                                    children: [
                                                                      s(j, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: s(n, {
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
                                                                        className: `framer-y1unnw`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      s(E, {
                                                                        className: `framer-sex1k5`,
                                                                        inputName: `Make, Model & Size`,
                                                                        placeholder: ``,
                                                                        required: !0,
                                                                        type: `text`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  s(y, {
                                                                    breakpoint: P,
                                                                    overrides: {
                                                                      JdxTi_UaK: { width: `221px` },
                                                                    },
                                                                    children: s(O, {
                                                                      width: `277px`,
                                                                      children: s(C, {
                                                                        className: `framer-ox4njq-container`,
                                                                        inComponentSlot: !0,
                                                                        isModuleExternal: !0,
                                                                        nodeId: `yGuhTeSW_`,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `XTOoWky3G`,
                                                                        children: s(F, {
                                                                          height: `100%`,
                                                                          id: `yGuhTeSW_`,
                                                                          layoutId: `yGuhTeSW_`,
                                                                          style: {
                                                                            height: `100%`,
                                                                            width: `100%`,
                                                                          },
                                                                          type: `submit`,
                                                                          variant: K(
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
                                              q()
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
        `.framer-dq9BA.framer-83w22k, .framer-dq9BA .framer-83w22k { display: block; }`,
        `.framer-dq9BA.framer-1lf75q4 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-dq9BA .framer-w3wgyk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-dq9BA .framer-1d96z0x-container { flex: none; height: auto; position: relative; width: 1120px; z-index: 0; }`,
        `.framer-dq9BA.framer-uvffy7 { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; }`,
        `.framer-dq9BA.framer-13glfta { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-dq9BA .framer-1gp7jvt { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-dq9BA .framer-1dpav3r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-dq9BA .framer-1mx7v3w { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-dq9BA .framer-11f2quo { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-dq9BA .framer-12f2h22 { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-dq9BA .framer-pvrt88 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-dq9BA .framer-1rplxo3, .framer-dq9BA .framer-eg1q7n, .framer-dq9BA .framer-e1ucto, .framer-dq9BA .framer-1saemub { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-dq9BA .framer-1we0nl9, .framer-dq9BA .framer-9gu37u, .framer-dq9BA .framer-wwbrwl, .framer-dq9BA .framer-y1unnw { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-dq9BA .framer-kl12q3, .framer-dq9BA .framer-7k97xx, .framer-dq9BA .framer-e8x90v, .framer-dq9BA .framer-sex1k5 { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-dq9BA .framer-ox4njq-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-dq9BA.framer-1lf75q4 { width: 810px; } .framer-dq9BA .framer-1d96z0x-container { width: 809px; } .framer-dq9BA .framer-1gp7jvt { height: min-content; width: min-content; } .framer-dq9BA .framer-1dpav3r { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-dq9BA.framer-1lf75q4, .framer-dq9BA .framer-1d96z0x-container { width: 390px; } .framer-dq9BA.framer-13glfta { padding: 60px 0px 0px 0px; } .framer-dq9BA .framer-1gp7jvt { height: min-content; width: 300px; } .framer-dq9BA .framer-pvrt88 { width: 261px; }}`,
      ],
      `framer-dq9BA`
    )),
    (Q.displayName = `Digital And Manual Micrometer`),
    (Q.defaultProps = { height: 1e3, width: 1200 }),
    A(
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
        ...R,
        ...z,
        ...B,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerXTOoWky3G`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerAutoSizeImages: `true`,
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1200`,
            framerIntrinsicHeight: `1000`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"qpw_Rnimf":{"layout":["fixed","fixed"]},"JdxTi_UaK":{"layout":["fixed","fixed"]}}}`,
            framerScrollSections: `* @framerResponsiveScreen`,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=VPD5SnAgHT-z-ObR7ce4DJMzsYj53XXdvITJ5dTaEtI.D6rqwLrU.mjs.map
