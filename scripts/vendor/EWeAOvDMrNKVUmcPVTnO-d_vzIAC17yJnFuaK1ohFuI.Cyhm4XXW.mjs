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
import ue, { t as L } from "./EDXlyd8KHT-T1c3qpZJgQqFasMFMPQvEa701V3zdGf0.DYcDBxFh.mjs";
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
      bZ1OAqvYI: `(max-width: 809.98px)`,
      n9a4QjpHc: `(min-width: 810px) and (max-width: 1199.98px)`,
      qR4HYqakt: `(min-width: 1200px)`,
    }),
    (H = `framer-bVf4e`),
    (U = {
      bZ1OAqvYI: `framer-v-u6q0qr`,
      n9a4QjpHc: `framer-v-14vk53s`,
      qR4HYqakt: `framer-v-1wdhrh8`,
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
    (X = { Desktop: `qR4HYqakt`, Phone: `bZ1OAqvYI`, Tablet: `n9a4QjpHc` }),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: X[r.variant] ?? r.variant ?? `qR4HYqakt`,
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
            value: { primaryVariantId: `qR4HYqakt`, variantClassNames: U },
            children: u(te, {
              id: T ?? f,
              children: [
                s(Y, { value: `html body { background: rgb(255, 255, 255); }` }),
                s(p.div, {
                  ...N,
                  className: g(X, `framer-1wdhrh8`, S),
                  ref: l,
                  style: { ...x },
                  children: s(`div`, {
                    className: `framer-1h5jc90`,
                    children: s(J, {
                      dismissWithEsc: !0,
                      children: (e) =>
                        s(r, {
                          children: s(re, {
                            links: [
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `oWuGsq9yp` }, implicitPathVariables: void 0 },
                            ],
                            children: (t) =>
                              s(y, {
                                breakpoint: P,
                                overrides: {
                                  bZ1OAqvYI: { width: `390px` },
                                  n9a4QjpHc: { width: `809px` },
                                },
                                children: s(O, {
                                  height: 441,
                                  width: `1120px`,
                                  y: (_?.y || 0) + 0 + 0 + 80,
                                  children: u(C, {
                                    className: `framer-1p6z78n-container`,
                                    id: `1p6z78n`,
                                    nodeId: `PlaMpnAlR`,
                                    scopeId: `hW5bYoASU`,
                                    children: [
                                      s(y, {
                                        breakpoint: P,
                                        overrides: {
                                          bZ1OAqvYI: { variant: `K_ycYaEcQ`, ZKclmvn_H: t[2] },
                                          n9a4QjpHc: { ZKclmvn_H: t[1] },
                                        },
                                        children: s(I, {
                                          C6KVezXmF: `Hand tools`,
                                          foHHv2HKv: z({ overlay: e }),
                                          height: `100%`,
                                          hvDKqkZQw: W(
                                            {
                                              pixelHeight: 1e3,
                                              pixelWidth: 1e3,
                                              src: `../../assets/images/CLtwNoBy9TbmmoXkknScOsSxpwo.webp?width=1000&height=1000`,
                                              srcSet: `../../assets/images/CLtwNoBy9TbmmoXkknScOsSxpwo.webp 512w,../../assets/images/CLtwNoBy9TbmmoXkknScOsSxpwo.webp?width=1000&height=1000 1000w`,
                                            },
                                            ``
                                          ),
                                          id: `PlaMpnAlR`,
                                          layoutId: `PlaMpnAlR`,
                                          NF5me_oRa: `A versatile, all-purpose plier designed for gripping, cutting, and bending wires. Crafted with durable steel jaws and ergonomic insulated handles for comfortable use. Ideal for electricians, technicians, and general household applications.`,
                                          style: { width: `100%` },
                                          variant: `e8KDx5Yru`,
                                          width: `100%`,
                                          YFKMY7d12: `Combination Plier`,
                                          ZKclmvn_H: t[0],
                                        }),
                                      }),
                                      s(ee, {
                                        children:
                                          e.visible &&
                                          s(r, {
                                            children: a(
                                              s(ae, {
                                                triggerId: `1p6z78n`,
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
                                                        className: g(X, `framer-1kk33dj`),
                                                        "data-framer-portal-id": `1p6z78n`,
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
                                                      `pc4yjFx2t`
                                                    ),
                                                    s(p.div, {
                                                      className: g(X, `framer-3nzivy`),
                                                      "data-framer-portal-id": `1p6z78n`,
                                                      transformTemplate: G,
                                                      children: u(p.div, {
                                                        className: `framer-2yi9ko`,
                                                        children: [
                                                          u(p.div, {
                                                            className: `framer-z0xodv`,
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
                                                                className: `framer-1hh5x8z`,
                                                                fonts: [`Inter-Bold`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                              s(p.div, {
                                                                className: `framer-obifk9`,
                                                                onTap: B({ overlay: e }),
                                                                children: s(M, {
                                                                  animated: !1,
                                                                  className: `framer-jpqdtx`,
                                                                  layoutId: `oNFCe5M7H`,
                                                                  UO5clYVeQ: !0,
                                                                }),
                                                              }),
                                                            ],
                                                          }),
                                                          s(se, {
                                                            action: `https://api.framer.com/forms/v1/forms/84ed9d2b-8c51-478e-8102-14eb04d1fde7/submit`,
                                                            className: `framer-1j3pn36`,
                                                            nodeId: `r_yUqkBZ9`,
                                                            children: (e) =>
                                                              u(r, {
                                                                children: [
                                                                  u(p.label, {
                                                                    className: `framer-1m197mf`,
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
                                                                        className: `framer-ibtna4`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      s(E, {
                                                                        className: `framer-exmscx`,
                                                                        inputName: `Email`,
                                                                        placeholder: ``,
                                                                        type: `text`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  u(p.label, {
                                                                    className: `framer-1uq8mli`,
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
                                                                        className: `framer-a9pgt5`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      s(E, {
                                                                        className: `framer-b4fjx0`,
                                                                        inputName: `Mobile Number`,
                                                                        placeholder: ``,
                                                                        required: !1,
                                                                        type: `tel`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  u(p.label, {
                                                                    className: `framer-1yl9jki`,
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
                                                                        className: `framer-2h4dnq`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      s(E, {
                                                                        className: `framer-1ighn6s`,
                                                                        inputName: `Product Name`,
                                                                        placeholder: ``,
                                                                        type: `text`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  u(p.label, {
                                                                    className: `framer-d9y4g3`,
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
                                                                        className: `framer-1kmgxvn`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      s(E, {
                                                                        className: `framer-132f9cm`,
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
                                                                      bZ1OAqvYI: { width: `221px` },
                                                                    },
                                                                    children: s(O, {
                                                                      width: `277px`,
                                                                      children: s(C, {
                                                                        className: `framer-qssl19-container`,
                                                                        inComponentSlot: !0,
                                                                        isModuleExternal: !0,
                                                                        nodeId: `R9BqnhqxQ`,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `hW5bYoASU`,
                                                                        children: s(F, {
                                                                          height: `100%`,
                                                                          id: `R9BqnhqxQ`,
                                                                          layoutId: `R9BqnhqxQ`,
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
        `.framer-bVf4e.framer-10ngum4, .framer-bVf4e .framer-10ngum4 { display: block; }`,
        `.framer-bVf4e.framer-1wdhrh8 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-bVf4e .framer-1h5jc90 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-bVf4e .framer-1p6z78n-container { flex: none; height: auto; position: relative; width: 1120px; z-index: 0; }`,
        `.framer-bVf4e.framer-1kk33dj { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; }`,
        `.framer-bVf4e.framer-3nzivy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-bVf4e .framer-2yi9ko { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-bVf4e .framer-z0xodv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-bVf4e .framer-1hh5x8z { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-bVf4e .framer-obifk9 { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-bVf4e .framer-jpqdtx { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-bVf4e .framer-1j3pn36 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-bVf4e .framer-1m197mf, .framer-bVf4e .framer-1uq8mli, .framer-bVf4e .framer-1yl9jki, .framer-bVf4e .framer-d9y4g3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bVf4e .framer-ibtna4, .framer-bVf4e .framer-a9pgt5, .framer-bVf4e .framer-2h4dnq, .framer-bVf4e .framer-1kmgxvn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-bVf4e .framer-exmscx, .framer-bVf4e .framer-b4fjx0, .framer-bVf4e .framer-1ighn6s, .framer-bVf4e .framer-132f9cm { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-bVf4e .framer-qssl19-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-bVf4e.framer-1wdhrh8 { width: 810px; } .framer-bVf4e .framer-1p6z78n-container { width: 809px; } .framer-bVf4e .framer-2yi9ko { height: min-content; width: min-content; } .framer-bVf4e .framer-z0xodv { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-bVf4e.framer-1wdhrh8, .framer-bVf4e .framer-1p6z78n-container { width: 390px; } .framer-bVf4e.framer-3nzivy { padding: 60px 0px 0px 0px; } .framer-bVf4e .framer-2yi9ko { height: min-content; width: 300px; } .framer-bVf4e .framer-1j3pn36 { width: 261px; }}`,
      ],
      `framer-bVf4e`
    )),
    (Q.displayName = `Page`),
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
          name: `FramerhW5bYoASU`,
          slots: [],
          annotations: {
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerIntrinsicHeight: `1000`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicWidth: `1200`,
            framerScrollSections: `* @framerResponsiveScreen`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"n9a4QjpHc":{"layout":["fixed","fixed"]},"bZ1OAqvYI":{"layout":["fixed","fixed"]}}}`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=EWeAOvDMrNKVUmcPVTnO-d_vzIAC17yJnFuaK1ohFuI.Cyhm4XXW.mjs.map
