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
import { S as f, a as ne, n as re, r as p, t as m } from "./motion.CXXzZ97F.mjs";
import {
  A as h,
  I as g,
  O as _,
  U as v,
  at as ie,
  b as ae,
  c as y,
  ct as oe,
  d as se,
  dt as ce,
  g as b,
  it as le,
  lt as x,
  mt as S,
  n as C,
  nt as ue,
  o as de,
  ot as w,
  s as T,
  st as fe,
  t as E,
  tt as D,
  w as O,
  x as k,
  y as pe,
} from "./framer.w0XhpZTx.mjs";
import { a as A, i as j, n as me, o as M, r as N, t as P } from "./shared.DPOhhryJ.mjs";
import he, { t as ge } from "./byTvUWgejMLs_VXcHPeqB2pRoc1ZW4XP7asWPJEDzds.yf0RREVO.mjs";
var F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    v(),
    m(),
    d(),
    s(),
    M(),
    j(),
    me(),
    ge(),
    (F = g(P)),
    (I = g(A)),
    (L = g(N)),
    (R = {
      fJkfxn7Kr: `(max-width: 809.98px)`,
      ub2A7EioE: `(min-width: 1200px)`,
      v_pko95gb: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (z = []),
    (B = `framer-tnSZI`),
    (V = {
      fJkfxn7Kr: `framer-v-1jhnjn5`,
      ub2A7EioE: `framer-v-1ghuo6q`,
      v_pko95gb: `framer-v-1lxcv5d`,
    }),
    (H = (e, t, n) => (e && t ? `position` : n)),
    (U = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (W = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
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
      let [i, a] = x({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (Y = { Desktop: `ub2A7EioE`, Phone: `fJkfxn7Kr`, Tablet: `v_pko95gb` }),
    (X = ({ value: e }) =>
      w()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `ub2A7EioE`,
    })),
    (Q = S(
      a(function (e, a) {
        let s = n(null),
          c = a ?? s,
          d = u(),
          { activeLocale: m, setLocale: h } = fe(),
          g = ue(),
          { style: v, className: x, layoutId: S, variant: w, ...O } = Z(e);
        oe(te(() => he({}, m), [m]));
        let [j, me] = ie(w, R, !1),
          { activeVariantCallback: M, delay: ge } = D(void 0),
          F = ({ overlay: e }) =>
            M(async (...t) => {
              e.toggle();
            }),
          I = ({ overlay: e }) =>
            M(async (...t) => {
              e.hide();
            }),
          L = _(B),
          z = t(y)?.isLayoutTemplate,
          Q = !!t(ne)?.transition?.layout,
          $ = H(z, Q);
        return (
          ce(),
          le({}),
          o(y.Provider, {
            value: {
              activeVariantId: j,
              humanReadableVariantMap: Y,
              primaryVariantId: `ub2A7EioE`,
              variantClassNames: V,
            },
            children: l(p, {
              id: S ?? d,
              children: [
                o(X, { value: `html body { background: rgb(255, 255, 255); }` }),
                o(f.div, {
                  ...O,
                  className: _(L, `framer-1ghuo6q`, x),
                  ref: c,
                  style: { ...v },
                  children: o(f.div, {
                    className: `framer-qq4l1o`,
                    layout: $,
                    children: o(J, {
                      dismissWithEsc: !0,
                      children: (e) =>
                        o(i, {
                          children: o(ae, {
                            links: [
                              { href: { webPageId: `sCRzKtpcd` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `sCRzKtpcd` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `sCRzKtpcd` }, implicitPathVariables: void 0 },
                            ],
                            children: (t) =>
                              o(b, {
                                breakpoint: j,
                                overrides: {
                                  fJkfxn7Kr: { width: `390px` },
                                  v_pko95gb: { width: `809px` },
                                },
                                children: o(E, {
                                  height: 441,
                                  width: `1120px`,
                                  y: (g?.y || 0) + 0 + 0 + 80,
                                  children: l(C, {
                                    className: `framer-7mjwpv-container`,
                                    id: `7mjwpv`,
                                    nodeId: `BSoNiYy89`,
                                    scopeId: `WnaRNr5H3`,
                                    children: [
                                      o(b, {
                                        breakpoint: j,
                                        overrides: {
                                          fJkfxn7Kr: { variant: W(`K_ycYaEcQ`), ZKclmvn_H: t[2] },
                                          v_pko95gb: { ZKclmvn_H: t[1] },
                                        },
                                        children: o(P, {
                                          C6KVezXmF: `DEWALT`,
                                          foHHv2HKv: F({ overlay: e }),
                                          height: `100%`,
                                          hvDKqkZQw: U(
                                            {
                                              pixelHeight: 2500,
                                              pixelWidth: 2500,
                                              src: `../../assets/images/8KXzVRjhJ0qQkL0rt7HzBjmFEE.png?width=2500&height=2500`,
                                              srcSet: `../../assets/images/8KXzVRjhJ0qQkL0rt7HzBjmFEE.png 512w,../../assets/images/8KXzVRjhJ0qQkL0rt7HzBjmFEE.png?scale-down-to=1024&width=2500&height=2500 1024w,../../assets/images/8KXzVRjhJ0qQkL0rt7HzBjmFEE.png?scale-down-to=2048&width=2500&height=2500 2048w,../../assets/images/8KXzVRjhJ0qQkL0rt7HzBjmFEE.png?width=2500&height=2500 2500w`,
                                            },
                                            ``
                                          ),
                                          id: `BSoNiYy89`,
                                          layoutId: `BSoNiYy89`,
                                          NF5me_oRa: `Delivers exceptional drilling power for wood, metal, concrete, and masonry applications.`,
                                          style: { width: `100%` },
                                          variant: W(`e8KDx5Yru`),
                                          width: `100%`,
                                          YFKMY7d12: `Impact Drill Machine`,
                                          ZKclmvn_H: t[0],
                                        }),
                                      }),
                                      o(re, {
                                        children:
                                          e.visible &&
                                          o(i, {
                                            children: ee(
                                              o(se, {
                                                triggerId: `7mjwpv`,
                                                children: l(pe, {
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
                                                        className: _(L, `framer-l68od2`),
                                                        "data-framer-portal-id": `7mjwpv`,
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
                                                      `pHphpIoCj`
                                                    ),
                                                    o(f.div, {
                                                      className: _(L, `framer-15zfoju`),
                                                      "data-framer-portal-id": `7mjwpv`,
                                                      transformTemplate: G,
                                                      children: l(f.div, {
                                                        className: `framer-12ems8s`,
                                                        children: [
                                                          l(f.div, {
                                                            className: `framer-1ulxqoz`,
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
                                                                className: `framer-8qf3vf`,
                                                                fonts: [`Inter-Bold`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                              o(f.div, {
                                                                className: `framer-1ola4fn`,
                                                                onTap: I({ overlay: e }),
                                                                children: o(A, {
                                                                  animated: !1,
                                                                  className: `framer-1owwihy`,
                                                                  layoutId: `XzAAU58JS`,
                                                                  UO5clYVeQ: !0,
                                                                }),
                                                              }),
                                                            ],
                                                          }),
                                                          o(de, {
                                                            action: `https://api.framer.com/forms/v1/forms/ed5abb1d-79e3-42e9-b0f5-33365f36cecb/submit`,
                                                            className: `framer-145qw5h`,
                                                            nodeId: `EEM6Dtin3`,
                                                            children: (e) =>
                                                              l(i, {
                                                                children: [
                                                                  l(f.label, {
                                                                    className: `framer-13w5r1c`,
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
                                                                        className: `framer-rsfl53`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(T, {
                                                                        className: `framer-j6vkxr`,
                                                                        inputName: `Email`,
                                                                        placeholder: ``,
                                                                        type: `text`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  l(f.label, {
                                                                    className: `framer-1xppnjm`,
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
                                                                        className: `framer-1365t5g`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(T, {
                                                                        className: `framer-173zwl1`,
                                                                        inputName: `Mobile Number`,
                                                                        placeholder: ``,
                                                                        required: !1,
                                                                        type: `tel`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  l(f.label, {
                                                                    className: `framer-nyu123`,
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
                                                                        className: `framer-7p060t`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(T, {
                                                                        className: `framer-1x4mv47`,
                                                                        inputName: `Product Name`,
                                                                        placeholder: ``,
                                                                        type: `text`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  l(f.label, {
                                                                    className: `framer-1eh9ip8`,
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
                                                                        className: `framer-uggl9p`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(T, {
                                                                        className: `framer-1j862l6`,
                                                                        inputName: `Make, Model & Size`,
                                                                        placeholder: ``,
                                                                        required: !0,
                                                                        type: `text`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  o(b, {
                                                                    breakpoint: j,
                                                                    overrides: {
                                                                      fJkfxn7Kr: { width: `221px` },
                                                                    },
                                                                    children: o(E, {
                                                                      width: `277px`,
                                                                      children: o(C, {
                                                                        className: `framer-1xs9rjv-container`,
                                                                        inComponentSlot: !0,
                                                                        isModuleExternal: !0,
                                                                        nodeId: `Y6iICHCoG`,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `WnaRNr5H3`,
                                                                        children: o(N, {
                                                                          height: `100%`,
                                                                          id: `Y6iICHCoG`,
                                                                          layoutId: `Y6iICHCoG`,
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
                                                                            W(`Y6CHTJJM0`)
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
        `.framer-tnSZI.framer-bnhci6, .framer-tnSZI .framer-bnhci6 { display: block; }`,
        `.framer-tnSZI.framer-1ghuo6q { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-tnSZI .framer-qq4l1o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-tnSZI .framer-7mjwpv-container { flex: none; height: auto; position: relative; width: 1120px; z-index: 0; }`,
        `.framer-tnSZI.framer-l68od2 { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; }`,
        `.framer-tnSZI.framer-15zfoju { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-tnSZI .framer-12ems8s { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-tnSZI .framer-1ulxqoz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-tnSZI .framer-8qf3vf { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-tnSZI .framer-1ola4fn { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-tnSZI .framer-1owwihy { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-tnSZI .framer-145qw5h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-tnSZI .framer-13w5r1c, .framer-tnSZI .framer-1xppnjm, .framer-tnSZI .framer-nyu123, .framer-tnSZI .framer-1eh9ip8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tnSZI .framer-rsfl53, .framer-tnSZI .framer-1365t5g, .framer-tnSZI .framer-7p060t, .framer-tnSZI .framer-uggl9p { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-tnSZI .framer-j6vkxr, .framer-tnSZI .framer-173zwl1, .framer-tnSZI .framer-1x4mv47, .framer-tnSZI .framer-1j862l6 { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-tnSZI .framer-1xs9rjv-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-tnSZI.framer-1ghuo6q { width: 810px; } .framer-tnSZI .framer-7mjwpv-container { width: 809px; } .framer-tnSZI .framer-12ems8s { height: min-content; width: min-content; } .framer-tnSZI .framer-1ulxqoz { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-tnSZI.framer-1ghuo6q, .framer-tnSZI .framer-7mjwpv-container { width: 390px; } .framer-tnSZI.framer-15zfoju { padding: 60px 0px 0px 0px; } .framer-tnSZI .framer-12ems8s { height: min-content; width: 300px; } .framer-tnSZI .framer-145qw5h { width: 261px; }}`,
      ],
      `framer-tnSZI`
    )),
    (Q.displayName = `Impact Drill Machine Dewalt`),
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
        ...F,
        ...I,
        ...L,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([h(P, {}, t), h(N, {}, t)])) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerWnaRNr5H3`,
          slots: [],
          annotations: {
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"v_pko95gb":{"layout":["fixed","fixed"]},"fJkfxn7Kr":{"layout":["fixed","fixed"]}}}`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `1000`,
            framerIntrinsicWidth: `1200`,
            framerScrollSections: `false`,
            framerAutoSizeImages: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, z as queryParamNames };
//# sourceMappingURL=v3_aQmAhiOwignQpSDtaW7rJg0ITZ-tqO1NDo4LOJAQ.hEuwedp3.mjs.map
