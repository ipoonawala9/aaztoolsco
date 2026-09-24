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
import F, { t as I } from "./KDSNoyKwZ84WBhGxcLiUKvlN7MfnGHxa-Ux5sbDJJjI.DqYc8r0y.mjs";
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
      KIKRVeLve: `(min-width: 1200px)`,
      NQHUxX9JI: `(max-width: 809.98px)`,
      S0Y36GpS8: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (V = `framer-TkRaO`),
    (H = {
      KIKRVeLve: `framer-v-13pgnqp`,
      NQHUxX9JI: `framer-v-1rxyczv`,
      S0Y36GpS8: `framer-v-q1juam`,
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
    (X = { Desktop: `KIKRVeLve`, Phone: `NQHUxX9JI`, Tablet: `S0Y36GpS8` }),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: X[r.variant] ?? r.variant ?? `KIKRVeLve`,
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
            value: { primaryVariantId: `KIKRVeLve`, variantClassNames: H },
            children: l(m, {
              id: T ?? d,
              children: [
                o(Y, { value: `html body { background: rgb(255, 255, 255); }` }),
                o(f.div, {
                  ...j,
                  className: _(X, `framer-13pgnqp`, C),
                  ref: c,
                  style: { ...S },
                  children: o(f.div, {
                    className: `framer-1dcvpr`,
                    layout: me,
                    children: o(J, {
                      dismissWithEsc: !0,
                      children: (e) =>
                        o(i, {
                          children: o(ie, {
                            links: [
                              { href: { webPageId: `yIPN70dPu` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `yIPN70dPu` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `yIPN70dPu` }, implicitPathVariables: void 0 },
                            ],
                            children: (t) =>
                              o(b, {
                                breakpoint: M,
                                overrides: {
                                  NQHUxX9JI: { width: `390px` },
                                  S0Y36GpS8: { width: `809px` },
                                },
                                children: o(D, {
                                  height: 441,
                                  width: `1120px`,
                                  y: (v?.y || 0) + 0 + 0 + 80,
                                  children: l(w, {
                                    className: `framer-1wipvcz-container`,
                                    id: `1wipvcz`,
                                    nodeId: `VGF2a5UEy`,
                                    scopeId: `natPZmXwR`,
                                    children: [
                                      o(b, {
                                        breakpoint: M,
                                        overrides: {
                                          NQHUxX9JI: { variant: `K_ycYaEcQ`, ZKclmvn_H: t[2] },
                                          S0Y36GpS8: { ZKclmvn_H: t[1] },
                                        },
                                        children: o(P, {
                                          C6KVezXmF: `Fasteners, Safety items & Cable ties`,
                                          foHHv2HKv: R({ overlay: e }),
                                          height: `100%`,
                                          hvDKqkZQw: W(
                                            {
                                              pixelHeight: 1500,
                                              pixelWidth: 1500,
                                              src: `../../assets/images/ieyYJNvBrpu6WM6UH9lgg0xYpEc.png?width=1500&height=1500`,
                                              srcSet: `../../assets/images/ieyYJNvBrpu6WM6UH9lgg0xYpEc.png 512w,../../assets/images/ieyYJNvBrpu6WM6UH9lgg0xYpEc.png?scale-down-to=1024&width=1500&height=1500 1024w,../../assets/images/ieyYJNvBrpu6WM6UH9lgg0xYpEc.png?width=1500&height=1500 1500w`,
                                            },
                                            ``
                                          ),
                                          id: `VGF2a5UEy`,
                                          layoutId: `VGF2a5UEy`,
                                          NF5me_oRa: `Colored cable ties help with easy identification and organization. They are available in multiple colors for coding and sorting. Commonly used in electrical, networking, and warehouse applications.`,
                                          style: { width: `100%` },
                                          variant: `e8KDx5Yru`,
                                          width: `100%`,
                                          YFKMY7d12: `Coloured Cable Tie`,
                                          ZKclmvn_H: t[0],
                                        }),
                                      }),
                                      o(p, {
                                        children:
                                          e.visible &&
                                          o(i, {
                                            children: ee(
                                              o(oe, {
                                                triggerId: `1wipvcz`,
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
                                                        className: _(X, `framer-ib1rui`),
                                                        "data-framer-portal-id": `1wipvcz`,
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
                                                      `FiJ1WNbjZ`
                                                    ),
                                                    o(f.div, {
                                                      className: _(X, `framer-ru7lzk`),
                                                      "data-framer-portal-id": `1wipvcz`,
                                                      transformTemplate: G,
                                                      children: l(f.div, {
                                                        className: `framer-1bg381g`,
                                                        children: [
                                                          l(f.div, {
                                                            className: `framer-1o5l9ll`,
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
                                                                className: `framer-owq40n`,
                                                                fonts: [`Inter-Bold`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                              o(f.div, {
                                                                className: `framer-xnr04d`,
                                                                onTap: z({ overlay: e }),
                                                                children: o(A, {
                                                                  animated: !1,
                                                                  className: `framer-1lsfn5t`,
                                                                  layoutId: `aCueIecZ_`,
                                                                  UO5clYVeQ: !0,
                                                                }),
                                                              }),
                                                            ],
                                                          }),
                                                          o(le, {
                                                            action: `https://api.framer.com/forms/v1/forms/d75e911c-0980-494c-8420-226dc7bad967/submit`,
                                                            className: `framer-1pfdzi5`,
                                                            nodeId: `BFqZahkDD`,
                                                            children: (e) =>
                                                              l(i, {
                                                                children: [
                                                                  l(f.label, {
                                                                    className: `framer-1pfcv29`,
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
                                                                        className: `framer-83meuw`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(E, {
                                                                        className: `framer-4oe4nq`,
                                                                        inputName: `Email`,
                                                                        placeholder: ``,
                                                                        type: `text`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  l(f.label, {
                                                                    className: `framer-1gjm0fb`,
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
                                                                        className: `framer-1q7poxw`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(E, {
                                                                        className: `framer-22az82`,
                                                                        inputName: `Mobile Number`,
                                                                        placeholder: ``,
                                                                        required: !1,
                                                                        type: `tel`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  l(f.label, {
                                                                    className: `framer-12gg00c`,
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
                                                                        className: `framer-moywnl`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(E, {
                                                                        className: `framer-rvcc3`,
                                                                        inputName: `Product Name`,
                                                                        placeholder: ``,
                                                                        type: `text`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  l(f.label, {
                                                                    className: `framer-12bldm7`,
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
                                                                        className: `framer-1ixamg`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(E, {
                                                                        className: `framer-1uy884i`,
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
                                                                      NQHUxX9JI: { width: `221px` },
                                                                    },
                                                                    children: o(D, {
                                                                      width: `277px`,
                                                                      children: o(w, {
                                                                        className: `framer-sek8o8-container`,
                                                                        inComponentSlot: !0,
                                                                        isModuleExternal: !0,
                                                                        nodeId: `pXA0IOVeL`,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `natPZmXwR`,
                                                                        children: o(N, {
                                                                          height: `100%`,
                                                                          id: `pXA0IOVeL`,
                                                                          layoutId: `pXA0IOVeL`,
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
        `.framer-TkRaO.framer-16a910u, .framer-TkRaO .framer-16a910u { display: block; }`,
        `.framer-TkRaO.framer-13pgnqp { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-TkRaO .framer-1dcvpr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-TkRaO .framer-1wipvcz-container { flex: none; height: auto; position: relative; width: 1120px; z-index: 0; }`,
        `.framer-TkRaO.framer-ib1rui { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; }`,
        `.framer-TkRaO.framer-ru7lzk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-TkRaO .framer-1bg381g { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-TkRaO .framer-1o5l9ll { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-TkRaO .framer-owq40n { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-TkRaO .framer-xnr04d { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-TkRaO .framer-1lsfn5t { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-TkRaO .framer-1pfdzi5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-TkRaO .framer-1pfcv29, .framer-TkRaO .framer-1gjm0fb, .framer-TkRaO .framer-12gg00c, .framer-TkRaO .framer-12bldm7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-TkRaO .framer-83meuw, .framer-TkRaO .framer-1q7poxw, .framer-TkRaO .framer-moywnl, .framer-TkRaO .framer-1ixamg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-TkRaO .framer-4oe4nq, .framer-TkRaO .framer-22az82, .framer-TkRaO .framer-rvcc3, .framer-TkRaO .framer-1uy884i { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-TkRaO .framer-sek8o8-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-TkRaO.framer-13pgnqp { width: 810px; } .framer-TkRaO .framer-1wipvcz-container { width: 809px; } .framer-TkRaO .framer-1bg381g { height: min-content; width: min-content; } .framer-TkRaO .framer-1o5l9ll { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-TkRaO.framer-13pgnqp, .framer-TkRaO .framer-1wipvcz-container { width: 390px; } .framer-TkRaO.framer-ru7lzk { padding: 60px 0px 0px 0px; } .framer-TkRaO .framer-1bg381g { height: min-content; width: 300px; } .framer-TkRaO .framer-1pfdzi5 { width: 261px; }}`,
      ],
      `framer-TkRaO`
    )),
    (Q.displayName = `Bullet Fastener`),
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
          name: `FramernatPZmXwR`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"S0Y36GpS8":{"layout":["fixed","fixed"]},"NQHUxX9JI":{"layout":["fixed","fixed"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `1000`,
            framerResponsiveScreen: `true`,
            framerIntrinsicWidth: `1200`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=VDUy74U330N-Gza67acNH9Op56vxIAkSdD7C8N2ORgM.vqDng9Il.mjs.map
