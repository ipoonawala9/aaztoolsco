import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  O as n,
  P as r,
  c as i,
  g as a,
  i as ee,
  j as te,
  l as o,
  o as s,
  s as c,
  u as l,
  v as u,
  w as d,
} from "./react.N6WDMTqS.mjs";
import { S as f, a as ne, n as p, r as m, t as h } from "./motion.CXXzZ97F.mjs";
import {
  I as g,
  O as _,
  U as v,
  at as re,
  b as ie,
  c as y,
  ct as ae,
  d as oe,
  dt as se,
  g as b,
  it as x,
  lt as S,
  mt as C,
  n as w,
  nt as ce,
  o as le,
  ot as T,
  s as E,
  st as ue,
  t as D,
  tt as de,
  w as O,
  x as k,
  y as fe,
} from "./framer.w0XhpZTx.mjs";
import { a as A, i as j, n as M, o as pe, r as N, t as P } from "./shared.DPOhhryJ.mjs";
import F, { t as I } from "./frHeyL7xcsNufi7i-mQzydlXgHlsh3WKEg4bnzx-X2Y.BuZgG8QK.mjs";
var L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    v(),
    h(),
    d(),
    s(),
    pe(),
    j(),
    M(),
    I(),
    (L = g(P)),
    (R = g(A)),
    (z = g(N)),
    (B = {
      bQZ7EWjhj: `(max-width: 809.98px)`,
      tIPX0IwtF: `(min-width: 1200px)`,
      uN_mp8_Ds: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (V = `framer-43V3J`),
    (H = {
      bQZ7EWjhj: `framer-v-b5vzqd`,
      tIPX0IwtF: `framer-v-v45hwb`,
      uN_mp8_Ds: `framer-v-1r03q16`,
    }),
    (U = (e, t, n) => (e && t ? `position` : n)),
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
        default:
          return n;
      }
    }),
    (q = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (J = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = S({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (Y = ({ value: e }) =>
      T()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (X = { Desktop: `tIPX0IwtF`, Phone: `bQZ7EWjhj`, Tablet: `uN_mp8_Ds` }),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: X[r.variant] ?? r.variant ?? `tIPX0IwtF`,
    })),
    (Q = C(
      a(function (e, a) {
        let s = n(null),
          c = a ?? s,
          d = u(),
          { activeLocale: h, setLocale: g } = ue(),
          v = ce(),
          { style: S, className: C, layoutId: T, variant: O, ...j } = Z(e);
        ae(te(() => F({}, h), [h]));
        let [M, pe] = re(O, B, !1),
          { activeVariantCallback: I, delay: L } = de(void 0),
          R = ({ overlay: e }) =>
            I(async (...t) => {
              e.toggle();
            }),
          z = ({ overlay: e }) =>
            I(async (...t) => {
              e.hide();
            }),
          X = _(V),
          Q = t(y)?.isLayoutTemplate,
          $ = !!t(ne)?.transition?.layout,
          me = U(Q, $);
        return (
          se(),
          x({}),
          o(y.Provider, {
            value: { primaryVariantId: `tIPX0IwtF`, variantClassNames: H },
            children: l(m, {
              id: T ?? d,
              children: [
                o(Y, { value: `html body { background: rgb(255, 255, 255); }` }),
                o(f.div, {
                  ...j,
                  className: _(X, `framer-v45hwb`, C),
                  ref: c,
                  style: { ...S },
                  children: o(f.div, {
                    className: `framer-frgsld`,
                    layout: me,
                    children: o(J, {
                      dismissWithEsc: !0,
                      children: (e) =>
                        o(i, {
                          children: o(ie, {
                            links: [
                              { href: { webPageId: `fRICmNncB` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `fRICmNncB` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `fRICmNncB` }, implicitPathVariables: void 0 },
                            ],
                            children: (t) =>
                              o(b, {
                                breakpoint: M,
                                overrides: {
                                  bQZ7EWjhj: { width: `390px` },
                                  uN_mp8_Ds: { width: `809px` },
                                },
                                children: o(D, {
                                  height: 441,
                                  width: `1120px`,
                                  y: (v?.y || 0) + 0 + 0 + 80,
                                  children: l(w, {
                                    className: `framer-5h3x8s-container`,
                                    id: `5h3x8s`,
                                    nodeId: `O3affhB64`,
                                    scopeId: `fQRECcwa1`,
                                    children: [
                                      o(b, {
                                        breakpoint: M,
                                        overrides: {
                                          bQZ7EWjhj: { variant: `K_ycYaEcQ`, ZKclmvn_H: t[2] },
                                          uN_mp8_Ds: { ZKclmvn_H: t[1] },
                                        },
                                        children: o(P, {
                                          C6KVezXmF: `Fasteners and Safety items`,
                                          foHHv2HKv: R({ overlay: e }),
                                          height: `100%`,
                                          hvDKqkZQw: W(
                                            {
                                              pixelHeight: 450,
                                              pixelWidth: 447,
                                              src: `../../assets/images/sR9gQMTd2xY7bJ1y4dkpqCzDd8.png`,
                                            },
                                            ``
                                          ),
                                          id: `O3affhB64`,
                                          layoutId: `O3affhB64`,
                                          NF5me_oRa: `High-quality pan head screws designed for secure and reliable fastening. Ideal for metal, wood, and plastic applications, offering a clean finish and long-lasting performance for general hardware and electrical use.`,
                                          style: { width: `100%` },
                                          variant: `e8KDx5Yru`,
                                          width: `100%`,
                                          YFKMY7d12: `Pan head screw`,
                                          ZKclmvn_H: t[0],
                                        }),
                                      }),
                                      o(p, {
                                        children:
                                          e.visible &&
                                          o(i, {
                                            children: ee(
                                              o(oe, {
                                                triggerId: `5h3x8s`,
                                                children: l(fe, {
                                                  children: [
                                                    o(
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
                                                        className: _(X, `framer-unx83w`),
                                                        "data-framer-portal-id": `5h3x8s`,
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
                                                      `r9zmssHrH`
                                                    ),
                                                    o(f.div, {
                                                      className: _(X, `framer-xtqnz2`),
                                                      "data-framer-portal-id": `5h3x8s`,
                                                      transformTemplate: G,
                                                      children: l(f.div, {
                                                        className: `framer-14l4h05`,
                                                        children: [
                                                          l(f.div, {
                                                            className: `framer-1sx4q9r`,
                                                            children: [
                                                              o(k, {
                                                                __fromCanvasComponent: !0,
                                                                children: o(r, {
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
                                                                className: `framer-npdbow`,
                                                                fonts: [`Inter-Bold`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                              o(f.div, {
                                                                className: `framer-16wzvtt`,
                                                                onTap: z({ overlay: e }),
                                                                children: o(A, {
                                                                  animated: !1,
                                                                  className: `framer-18h2x51`,
                                                                  layoutId: `bFD7bY5NU`,
                                                                  UO5clYVeQ: !0,
                                                                }),
                                                              }),
                                                            ],
                                                          }),
                                                          o(le, {
                                                            action: `https://api.framer.com/forms/v1/forms/d75e911c-0980-494c-8420-226dc7bad967/submit`,
                                                            className: `framer-1rx83h9`,
                                                            nodeId: `h85XPdETp`,
                                                            children: (e) =>
                                                              l(i, {
                                                                children: [
                                                                  l(f.label, {
                                                                    className: `framer-zv97bp`,
                                                                    children: [
                                                                      o(k, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: o(r, {
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
                                                                        className: `framer-1xdjf09`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(E, {
                                                                        className: `framer-1oje8ej`,
                                                                        inputName: `Email`,
                                                                        placeholder: ``,
                                                                        type: `text`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  l(f.label, {
                                                                    className: `framer-1vzrhkl`,
                                                                    children: [
                                                                      o(k, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: o(r, {
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
                                                                        className: `framer-ddinqj`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(E, {
                                                                        className: `framer-v0tg6f`,
                                                                        inputName: `Mobile Number`,
                                                                        placeholder: ``,
                                                                        required: !1,
                                                                        type: `tel`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  l(f.label, {
                                                                    className: `framer-7sqgk`,
                                                                    children: [
                                                                      o(k, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: o(r, {
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
                                                                        className: `framer-1y0vw3b`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(E, {
                                                                        className: `framer-1g974z0`,
                                                                        inputName: `Product Name`,
                                                                        placeholder: ``,
                                                                        type: `text`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  l(f.label, {
                                                                    className: `framer-bows87`,
                                                                    children: [
                                                                      o(k, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: o(r, {
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
                                                                        className: `framer-duakh`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(E, {
                                                                        className: `framer-9s2isz`,
                                                                        inputName: `Make, Model & Size`,
                                                                        placeholder: ``,
                                                                        required: !0,
                                                                        type: `text`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  o(b, {
                                                                    breakpoint: M,
                                                                    overrides: {
                                                                      bQZ7EWjhj: { width: `221px` },
                                                                    },
                                                                    children: o(D, {
                                                                      width: `277px`,
                                                                      children: o(w, {
                                                                        className: `framer-1m4nkv4-container`,
                                                                        inComponentSlot: !0,
                                                                        isModuleExternal: !0,
                                                                        nodeId: `JpZvNdsAt`,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `fQRECcwa1`,
                                                                        children: o(N, {
                                                                          height: `100%`,
                                                                          id: `JpZvNdsAt`,
                                                                          layoutId: `JpZvNdsAt`,
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
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-43V3J.framer-1ewc41k, .framer-43V3J .framer-1ewc41k { display: block; }`,
        `.framer-43V3J.framer-v45hwb { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-43V3J .framer-frgsld { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-43V3J .framer-5h3x8s-container { flex: none; height: auto; position: relative; width: 1120px; z-index: 0; }`,
        `.framer-43V3J.framer-unx83w { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; }`,
        `.framer-43V3J.framer-xtqnz2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-43V3J .framer-14l4h05 { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-43V3J .framer-1sx4q9r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-43V3J .framer-npdbow { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-43V3J .framer-16wzvtt { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-43V3J .framer-18h2x51 { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-43V3J .framer-1rx83h9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-43V3J .framer-zv97bp, .framer-43V3J .framer-1vzrhkl, .framer-43V3J .framer-7sqgk, .framer-43V3J .framer-bows87 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-43V3J .framer-1xdjf09, .framer-43V3J .framer-ddinqj, .framer-43V3J .framer-1y0vw3b, .framer-43V3J .framer-duakh { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-43V3J .framer-1oje8ej, .framer-43V3J .framer-v0tg6f, .framer-43V3J .framer-1g974z0, .framer-43V3J .framer-9s2isz { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-43V3J .framer-1m4nkv4-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-43V3J.framer-v45hwb { width: 810px; } .framer-43V3J .framer-5h3x8s-container { width: 809px; } .framer-43V3J .framer-14l4h05 { height: min-content; width: min-content; } .framer-43V3J .framer-1sx4q9r { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-43V3J.framer-v45hwb, .framer-43V3J .framer-5h3x8s-container { width: 390px; } .framer-43V3J.framer-xtqnz2 { padding: 60px 0px 0px 0px; } .framer-43V3J .framer-14l4h05 { height: min-content; width: 300px; } .framer-43V3J .framer-1rx83h9 { width: 261px; }}`,
      ],
      `framer-43V3J`
    )),
    (Q.displayName = `Cable Tie`),
    (Q.defaultProps = { height: 1e3, width: 1200 }),
    O(
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
        ...L,
        ...R,
        ...z,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerfQRECcwa1`,
          slots: [],
          annotations: {
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `1000`,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"uN_mp8_Ds":{"layout":["fixed","fixed"]},"bQZ7EWjhj":{"layout":["fixed","fixed"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerImmutableVariables: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=oeQJzdLJhFN8iZEZihhWgpXT00cQQEnakoBA8xFSIoY.B9Xoh4o5.mjs.map
