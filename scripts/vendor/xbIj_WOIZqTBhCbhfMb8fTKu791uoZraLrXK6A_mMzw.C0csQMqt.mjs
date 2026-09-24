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
import ue, { t as L } from "./EzGxt8_HNdkbINYfEo6lrJojAzk2Jen_xG8n9EMdQ8Q.DIO3GOqS.mjs";
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
      H6pdNNabS: `(min-width: 810px) and (max-width: 1199.98px)`,
      lEDhw9rks: `(min-width: 1200px)`,
      Rkz4OiYPw: `(max-width: 809.98px)`,
    }),
    (H = `framer-dHURO`),
    (U = {
      H6pdNNabS: `framer-v-9qbl7u`,
      lEDhw9rks: `framer-v-1ns7b2e`,
      Rkz4OiYPw: `framer-v-7pbl1l`,
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
    (X = { Desktop: `lEDhw9rks`, Phone: `Rkz4OiYPw`, Tablet: `H6pdNNabS` }),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: X[r.variant] ?? r.variant ?? `lEDhw9rks`,
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
            value: { primaryVariantId: `lEDhw9rks`, variantClassNames: U },
            children: u(te, {
              id: T ?? f,
              children: [
                s(Y, { value: `html body { background: rgb(255, 255, 255); }` }),
                s(p.div, {
                  ...N,
                  className: g(X, `framer-1ns7b2e`, S),
                  ref: l,
                  style: { ...x },
                  children: s(`div`, {
                    className: `framer-6wwffv`,
                    children: s(J, {
                      dismissWithEsc: !0,
                      children: (e) =>
                        s(r, {
                          children: s(re, {
                            links: [
                              { href: { webPageId: `E5aYY2PXA` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `E5aYY2PXA` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `E5aYY2PXA` }, implicitPathVariables: void 0 },
                            ],
                            children: (t) =>
                              s(y, {
                                breakpoint: P,
                                overrides: {
                                  H6pdNNabS: { width: `809px` },
                                  Rkz4OiYPw: { width: `390px` },
                                },
                                children: s(O, {
                                  height: 441,
                                  width: `1120px`,
                                  y: (_?.y || 0) + 0 + 0 + 80,
                                  children: u(C, {
                                    className: `framer-awzgs5-container`,
                                    id: `awzgs5`,
                                    nodeId: `V59wxS71S`,
                                    scopeId: `IKBH5KoAS`,
                                    children: [
                                      s(y, {
                                        breakpoint: P,
                                        overrides: {
                                          H6pdNNabS: { ZKclmvn_H: t[1] },
                                          Rkz4OiYPw: { variant: `K_ycYaEcQ`, ZKclmvn_H: t[2] },
                                        },
                                        children: s(I, {
                                          C6KVezXmF: `Hand tools`,
                                          foHHv2HKv: z({ overlay: e }),
                                          height: `100%`,
                                          hvDKqkZQw: W(
                                            {
                                              pixelHeight: 500,
                                              pixelWidth: 500,
                                              src: `../../assets/images/BRyqdN6QlROwhd4nvMFxKbRprNs.webp`,
                                            },
                                            ``
                                          ),
                                          id: `V59wxS71S`,
                                          layoutId: `V59wxS71S`,
                                          NF5me_oRa: `A general-purpose hammer ideal for daily use in workshops and homes. Built with a durable steel head and a comfortable wooden handle for a firm grip.`,
                                          style: { width: `100%` },
                                          variant: `e8KDx5Yru`,
                                          width: `100%`,
                                          YFKMY7d12: `Hammer with Handle`,
                                          ZKclmvn_H: t[0],
                                        }),
                                      }),
                                      s(ee, {
                                        children:
                                          e.visible &&
                                          s(r, {
                                            children: a(
                                              s(ae, {
                                                triggerId: `awzgs5`,
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
                                                        className: g(X, `framer-13iw4yw`),
                                                        "data-framer-portal-id": `awzgs5`,
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
                                                      `JIoOZx6DM`
                                                    ),
                                                    s(p.div, {
                                                      className: g(X, `framer-131xb86`),
                                                      "data-framer-portal-id": `awzgs5`,
                                                      transformTemplate: G,
                                                      children: u(p.div, {
                                                        className: `framer-ftrfcc`,
                                                        children: [
                                                          u(p.div, {
                                                            className: `framer-ihfjtb`,
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
                                                                className: `framer-1xlxhnm`,
                                                                fonts: [`Inter-Bold`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                              s(p.div, {
                                                                className: `framer-4motf5`,
                                                                onTap: B({ overlay: e }),
                                                                children: s(M, {
                                                                  animated: !1,
                                                                  className: `framer-18u4hn9`,
                                                                  layoutId: `y4hqpGxvj`,
                                                                  UO5clYVeQ: !0,
                                                                }),
                                                              }),
                                                            ],
                                                          }),
                                                          s(se, {
                                                            action: `https://api.framer.com/forms/v1/forms/e2d17d03-3dd9-45df-8014-4ce706c87b1d/submit`,
                                                            className: `framer-l5x3ho`,
                                                            nodeId: `kRjM80_Sm`,
                                                            children: (e) =>
                                                              u(r, {
                                                                children: [
                                                                  u(p.label, {
                                                                    className: `framer-ibsljj`,
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
                                                                        className: `framer-y4qee8`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      s(E, {
                                                                        className: `framer-v4qlz`,
                                                                        inputName: `Email`,
                                                                        placeholder: ``,
                                                                        type: `text`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  u(p.label, {
                                                                    className: `framer-1bqi5m`,
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
                                                                        className: `framer-18kze76`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      s(E, {
                                                                        className: `framer-1muwi64`,
                                                                        inputName: `Mobile Number`,
                                                                        placeholder: ``,
                                                                        required: !1,
                                                                        type: `tel`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  u(p.label, {
                                                                    className: `framer-1nh0fon`,
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
                                                                        className: `framer-zh5d4y`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      s(E, {
                                                                        className: `framer-1739r0d`,
                                                                        inputName: `Product name`,
                                                                        placeholder: ``,
                                                                        type: `text`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  u(p.label, {
                                                                    className: `framer-r8l060`,
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
                                                                        className: `framer-2ftbr0`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      s(E, {
                                                                        className: `framer-1w6pk4b`,
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
                                                                      Rkz4OiYPw: { width: `221px` },
                                                                    },
                                                                    children: s(O, {
                                                                      width: `277px`,
                                                                      children: s(C, {
                                                                        className: `framer-m2i3hk-container`,
                                                                        inComponentSlot: !0,
                                                                        isModuleExternal: !0,
                                                                        nodeId: `qddSkjt3w`,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `IKBH5KoAS`,
                                                                        children: s(F, {
                                                                          height: `100%`,
                                                                          id: `qddSkjt3w`,
                                                                          layoutId: `qddSkjt3w`,
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
        `.framer-dHURO.framer-1rlru4z, .framer-dHURO .framer-1rlru4z { display: block; }`,
        `.framer-dHURO.framer-1ns7b2e { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-dHURO .framer-6wwffv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-dHURO .framer-awzgs5-container { flex: none; height: auto; position: relative; width: 1120px; z-index: 0; }`,
        `.framer-dHURO.framer-13iw4yw { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; }`,
        `.framer-dHURO.framer-131xb86 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-dHURO .framer-ftrfcc { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-dHURO .framer-ihfjtb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-dHURO .framer-1xlxhnm { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-dHURO .framer-4motf5 { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-dHURO .framer-18u4hn9 { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-dHURO .framer-l5x3ho { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-dHURO .framer-ibsljj, .framer-dHURO .framer-1bqi5m, .framer-dHURO .framer-1nh0fon, .framer-dHURO .framer-r8l060 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-dHURO .framer-y4qee8, .framer-dHURO .framer-18kze76, .framer-dHURO .framer-zh5d4y, .framer-dHURO .framer-2ftbr0 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-dHURO .framer-v4qlz, .framer-dHURO .framer-1muwi64, .framer-dHURO .framer-1739r0d, .framer-dHURO .framer-1w6pk4b { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-dHURO .framer-m2i3hk-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-dHURO.framer-1ns7b2e { width: 810px; } .framer-dHURO .framer-awzgs5-container { width: 809px; } .framer-dHURO .framer-ftrfcc { height: min-content; width: min-content; } .framer-dHURO .framer-ihfjtb { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-dHURO.framer-1ns7b2e, .framer-dHURO .framer-awzgs5-container { width: 390px; } .framer-dHURO.framer-131xb86 { padding: 60px 0px 0px 0px; } .framer-dHURO .framer-ftrfcc { height: min-content; width: 300px; } .framer-dHURO .framer-l5x3ho { width: 261px; }}`,
      ],
      `framer-dHURO`
    )),
    (Q.displayName = `Combination Plier`),
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
          name: `FramerIKBH5KoAS`,
          slots: [],
          annotations: {
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `* @framerResponsiveScreen`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"H6pdNNabS":{"layout":["fixed","fixed"]},"Rkz4OiYPw":{"layout":["fixed","fixed"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerIntrinsicHeight: `1000`,
            framerComponentViewportWidth: `true`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=xbIj_WOIZqTBhCbhfMb8fTKu791uoZraLrXK6A_mMzw.C0csQMqt.mjs.map
