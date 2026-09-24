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
import he, { t as ge } from "./kqQoLFA7j8R4ovYGv_6cn9Vatt2YWZQkCn-c114mwUQ.wcxbIh3-.mjs";
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
      c_UQLZxBy: `(min-width: 810px) and (max-width: 1199.98px)`,
      mERnWbWRJ: `(max-width: 809.98px)`,
      RCNJloZNC: `(min-width: 1200px)`,
    }),
    (z = []),
    (B = `framer-HtDrv`),
    (V = {
      c_UQLZxBy: `framer-v-1l69mno`,
      mERnWbWRJ: `framer-v-1o077j9`,
      RCNJloZNC: `framer-v-18tuyb2`,
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
    (Y = { Desktop: `RCNJloZNC`, Phone: `mERnWbWRJ`, Tablet: `c_UQLZxBy` }),
    (X = ({ value: e }) =>
      w()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `RCNJloZNC`,
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
              primaryVariantId: `RCNJloZNC`,
              variantClassNames: V,
            },
            children: l(p, {
              id: S ?? d,
              children: [
                o(X, { value: `html body { background: rgb(255, 255, 255); }` }),
                o(f.div, {
                  ...O,
                  className: _(L, `framer-18tuyb2`, x),
                  ref: c,
                  style: { ...v },
                  children: o(f.div, {
                    className: `framer-t2nx7x`,
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
                                  c_UQLZxBy: { width: `809px` },
                                  mERnWbWRJ: { width: `390px` },
                                },
                                children: o(E, {
                                  height: 441,
                                  width: `1120px`,
                                  y: (g?.y || 0) + 0 + 0 + 80,
                                  children: l(C, {
                                    className: `framer-1kkyi7p-container`,
                                    id: `1kkyi7p`,
                                    nodeId: `C_GLFd1MC`,
                                    scopeId: `FPMuWMgra`,
                                    children: [
                                      o(b, {
                                        breakpoint: j,
                                        overrides: {
                                          c_UQLZxBy: { ZKclmvn_H: t[1] },
                                          mERnWbWRJ: { variant: W(`K_ycYaEcQ`), ZKclmvn_H: t[2] },
                                        },
                                        children: o(P, {
                                          C6KVezXmF: `DEWALT`,
                                          foHHv2HKv: F({ overlay: e }),
                                          height: `100%`,
                                          hvDKqkZQw: U(
                                            {
                                              pixelHeight: 619,
                                              pixelWidth: 1e3,
                                              src: `../../assets/images/CikcmBjDwU7LDevL6SaEUds1srE.jpeg?width=1000&height=619`,
                                              srcSet: `../../assets/images/CikcmBjDwU7LDevL6SaEUds1srE.jpeg 512w,../../assets/images/CikcmBjDwU7LDevL6SaEUds1srE.jpeg?width=1000&height=619 1000w`,
                                            },
                                            ``
                                          ),
                                          id: `C_GLFd1MC`,
                                          layoutId: `C_GLFd1MC`,
                                          NF5me_oRa: `Provides powerful airflow for removing dust, debris, and dirt from workspaces and equipment.`,
                                          style: { width: `100%` },
                                          variant: W(`e8KDx5Yru`),
                                          width: `100%`,
                                          YFKMY7d12: `Blower`,
                                          ZKclmvn_H: t[0],
                                        }),
                                      }),
                                      o(re, {
                                        children:
                                          e.visible &&
                                          o(i, {
                                            children: ee(
                                              o(se, {
                                                triggerId: `1kkyi7p`,
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
                                                        className: _(L, `framer-1jfdfo3`),
                                                        "data-framer-portal-id": `1kkyi7p`,
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
                                                      `Jb2GvpVzt`
                                                    ),
                                                    o(f.div, {
                                                      className: _(L, `framer-ykh3bk`),
                                                      "data-framer-portal-id": `1kkyi7p`,
                                                      transformTemplate: G,
                                                      children: l(f.div, {
                                                        className: `framer-plg2ol`,
                                                        children: [
                                                          l(f.div, {
                                                            className: `framer-4rze04`,
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
                                                                className: `framer-1bqbior`,
                                                                fonts: [`Inter-Bold`],
                                                                verticalAlignment: `top`,
                                                                withExternalLayout: !0,
                                                              }),
                                                              o(f.div, {
                                                                className: `framer-pvbv40`,
                                                                onTap: I({ overlay: e }),
                                                                children: o(A, {
                                                                  animated: !1,
                                                                  className: `framer-1vu1qng`,
                                                                  layoutId: `EK4nmfin2`,
                                                                  UO5clYVeQ: !0,
                                                                }),
                                                              }),
                                                            ],
                                                          }),
                                                          o(de, {
                                                            action: `https://api.framer.com/forms/v1/forms/ed5abb1d-79e3-42e9-b0f5-33365f36cecb/submit`,
                                                            className: `framer-eujst0`,
                                                            nodeId: `jsgvjYp6A`,
                                                            children: (e) =>
                                                              l(i, {
                                                                children: [
                                                                  l(f.label, {
                                                                    className: `framer-14rc1f7`,
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
                                                                        className: `framer-89j6j9`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(T, {
                                                                        className: `framer-q8povs`,
                                                                        inputName: `Email`,
                                                                        placeholder: ``,
                                                                        type: `text`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  l(f.label, {
                                                                    className: `framer-16xwepg`,
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
                                                                        className: `framer-k8j4io`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(T, {
                                                                        className: `framer-189ynvr`,
                                                                        inputName: `Mobile Number`,
                                                                        placeholder: ``,
                                                                        required: !1,
                                                                        type: `tel`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  l(f.label, {
                                                                    className: `framer-ugay4h`,
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
                                                                        className: `framer-18wi1v2`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(T, {
                                                                        className: `framer-1o4bdbd`,
                                                                        inputName: `Product Name`,
                                                                        placeholder: ``,
                                                                        type: `text`,
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  l(f.label, {
                                                                    className: `framer-r2ygq4`,
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
                                                                        className: `framer-xkxbrq`,
                                                                        fonts: [`Inter-Medium`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      o(T, {
                                                                        className: `framer-ermexg`,
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
                                                                      mERnWbWRJ: { width: `221px` },
                                                                    },
                                                                    children: o(E, {
                                                                      width: `277px`,
                                                                      children: o(C, {
                                                                        className: `framer-1sxa0q7-container`,
                                                                        inComponentSlot: !0,
                                                                        isModuleExternal: !0,
                                                                        nodeId: `Tt5YdGk1Q`,
                                                                        rendersWithMotion: !0,
                                                                        scopeId: `FPMuWMgra`,
                                                                        children: o(N, {
                                                                          height: `100%`,
                                                                          id: `Tt5YdGk1Q`,
                                                                          layoutId: `Tt5YdGk1Q`,
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
        `.framer-HtDrv.framer-i6mp6o, .framer-HtDrv .framer-i6mp6o { display: block; }`,
        `.framer-HtDrv.framer-18tuyb2 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-HtDrv .framer-t2nx7x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-HtDrv .framer-1kkyi7p-container { flex: none; height: auto; position: relative; width: 1120px; z-index: 0; }`,
        `.framer-HtDrv.framer-1jfdfo3 { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; }`,
        `.framer-HtDrv.framer-ykh3bk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: fixed; top: 50%; transform: translateY(-50%); width: 100%; z-index: 10; }`,
        `.framer-HtDrv .framer-plg2ol { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 489px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 353px; will-change: var(--framer-will-change-override, transform); z-index: 10; }`,
        `.framer-HtDrv .framer-4rze04 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-HtDrv .framer-1bqbior { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-HtDrv .framer-pvbv40 { align-content: center; align-items: center; background-color: rgba(97, 94, 94, 0); cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-HtDrv .framer-1vu1qng { --43q7um: #000000; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 24px; }`,
        `.framer-HtDrv .framer-eujst0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 20px; position: relative; width: 317px; }`,
        `.framer-HtDrv .framer-14rc1f7, .framer-HtDrv .framer-16xwepg, .framer-HtDrv .framer-ugay4h, .framer-HtDrv .framer-r2ygq4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-HtDrv .framer-89j6j9, .framer-HtDrv .framer-k8j4io, .framer-HtDrv .framer-18wi1v2, .framer-HtDrv .framer-xkxbrq { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-HtDrv .framer-q8povs, .framer-HtDrv .framer-189ynvr, .framer-HtDrv .framer-1o4bdbd, .framer-HtDrv .framer-ermexg { --framer-input-background: rgba(187, 187, 187, 0.15); --framer-input-border-bottom-width: 1px; --framer-input-border-color: rgba(136, 136, 136, 0.1); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #999999; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: #999999; flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-HtDrv .framer-1sxa0q7-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-HtDrv.framer-18tuyb2 { width: 810px; } .framer-HtDrv .framer-1kkyi7p-container { width: 809px; } .framer-HtDrv .framer-plg2ol { height: min-content; width: min-content; } .framer-HtDrv .framer-4rze04 { align-self: stretch; width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-HtDrv.framer-18tuyb2, .framer-HtDrv .framer-1kkyi7p-container { width: 390px; } .framer-HtDrv.framer-ykh3bk { padding: 60px 0px 0px 0px; } .framer-HtDrv .framer-plg2ol { height: min-content; width: 300px; } .framer-HtDrv .framer-eujst0 { width: 261px; }}`,
      ],
      `framer-HtDrv`
    )),
    (Q.displayName = `Blower Dewalt`),
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
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerFPMuWMgra`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicWidth: `1200`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"c_UQLZxBy":{"layout":["fixed","fixed"]},"mERnWbWRJ":{"layout":["fixed","fixed"]}}}`,
            framerIntrinsicHeight: `1000`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `false`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, z as queryParamNames };
//# sourceMappingURL=1T6jOUmGWPtql7FHBT5xj6l-T7Kpmn1uDz06ylWC6vg.CiPibVDs.mjs.map
