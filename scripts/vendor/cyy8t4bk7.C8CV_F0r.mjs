import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  O as n,
  P as r,
  g as i,
  j as a,
  l as o,
  s,
  v as c,
  w as l,
} from "./react.N6WDMTqS.mjs";
import { S as u, a as d, r as f, t as p } from "./motion.CXXzZ97F.mjs";
import {
  O as m,
  T as h,
  U as g,
  mt as _,
  nt as v,
  p as y,
  pt as b,
  r as x,
  st as S,
  w as C,
  x as w,
} from "./framer.w0XhpZTx.mjs";
function T(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L = e(() => {
    (s(),
      g(),
      p(),
      l(),
      (E = {
        GTFjN8aP8: { hover: !0 },
        lxv9FTdIM: { hover: !0 },
        y5FCLEAb_: { hover: !0 },
        ZvpNlCH2g: { hover: !0 },
      }),
      (D = [`GTFjN8aP8`, `lxv9FTdIM`, `y5FCLEAb_`, `ZvpNlCH2g`]),
      (O = `framer-NAYOI`),
      (k = {
        GTFjN8aP8: `framer-v-9ztp99`,
        lxv9FTdIM: `framer-v-149lx46`,
        y5FCLEAb_: `framer-v-izcymy`,
        ZvpNlCH2g: `framer-v-1lws44s`,
      }),
      (A = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (j = ({ value: e, children: n }) => {
        let r = t(d),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(d.Provider, { value: s, children: n });
      }),
      (M = u.create(r)),
      (N = {
        "Line button": `y5FCLEAb_`,
        "Small Vairant": `lxv9FTdIM`,
        Default: `GTFjN8aP8`,
        Large: `ZvpNlCH2g`,
      }),
      (P = ({ height: e, id: t, link4: n, title: r, width: i, ...a }) => ({
        ...a,
        I1saNDFFs: r ?? a.I1saNDFFs ?? `contact us`,
        qF3haB09r: n ?? a.qF3haB09r,
        variant: N[a.variant] ?? a.variant ?? `GTFjN8aP8`,
      })),
      (F = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (I = _(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = c(),
            { activeLocale: l, setLocale: d } = S();
          v();
          let {
              style: p,
              className: h,
              layoutId: g,
              variant: _,
              I1saNDFFs: x,
              qF3haB09r: C,
              ...N
            } = P(e),
            {
              baseVariant: I,
              classNames: L,
              clearLoadingGesture: R,
              gestureHandlers: z,
              gestureVariant: B,
              isLoading: V,
              setGestureState: H,
              setVariant: U,
              variants: W,
            } = b({
              cycleOrder: D,
              defaultVariant: `GTFjN8aP8`,
              enabledGestures: E,
              ref: a,
              variant: _,
              variantClassNames: k,
            }),
            G = F(e, W),
            K = m(O);
          return o(f, {
            id: g ?? s,
            children: o(M, {
              animate: W,
              initial: !1,
              children: o(j, {
                value: A,
                children: o(y, {
                  clickTrackingId: ``,
                  href: { webPageId: `AIJK2IvNV` },
                  motionChild: !0,
                  nodeId: `GTFjN8aP8`,
                  openInNewTab: !1,
                  scopeId: `cyy8t4bk7`,
                  ...T({ ZvpNlCH2g: { href: C } }, I, B),
                  children: o(u.a, {
                    ...N,
                    ...z,
                    className: `${m(K, `framer-9ztp99`, h, L)} framer-149feq7`,
                    "data-framer-name": `Default`,
                    layoutDependency: G,
                    layoutId: `GTFjN8aP8`,
                    ref: a,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      backgroundColor: `rgb(45, 53, 138)`,
                      ...p,
                    },
                    variants: {
                      "GTFjN8aP8-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgb(0, 0, 0)`,
                      },
                      "lxv9FTdIM-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgba(45, 53, 138, 0.78)`,
                      },
                      "y5FCLEAb_-hover": {
                        "--border-color": `rgba(45, 53, 138, 0)`,
                        backgroundColor: `rgb(247, 247, 247)`,
                      },
                      "ZvpNlCH2g-hover": {
                        backgroundColor: `var(--token-9582960f-05f7-42bf-a547-39d02e26bd72, rgb(0, 0, 0))`,
                      },
                      y5FCLEAb_: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `rgba(45, 53, 138, 0.76)`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      ZvpNlCH2g: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                      },
                    },
                    ...T(
                      {
                        "GTFjN8aP8-hover": { "data-framer-name": void 0 },
                        "lxv9FTdIM-hover": { "data-framer-name": void 0 },
                        "y5FCLEAb_-hover": { "data-framer-name": void 0 },
                        "ZvpNlCH2g-hover": { "data-framer-name": void 0 },
                        lxv9FTdIM: { "data-framer-name": `Small Vairant` },
                        y5FCLEAb_: { "data-border": !0, "data-framer-name": `Line button` },
                        ZvpNlCH2g: { "data-framer-name": `Large` },
                      },
                      I,
                      B
                    ),
                    children: o(w, {
                      __fromCanvasComponent: !0,
                      children: o(r, {
                        children: o(u.p, {
                          style: {
                            "--font-selector": `SW50ZXItTWVkaXVt`,
                            "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                            "--framer-font-size": `14px`,
                            "--framer-font-weight": `500`,
                            "--framer-letter-spacing": `-0.02em`,
                            "--framer-line-height": `1.6em`,
                            "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                          },
                          children: `Contact us`,
                        }),
                      }),
                      className: `framer-n650xy`,
                      "data-framer-name": `Contact us`,
                      fonts: [`Inter-Medium`],
                      layoutDependency: G,
                      layoutId: `WvnLjXhzc`,
                      style: {
                        "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: x,
                      variants: {
                        y5FCLEAb_: { "--extracted-r6o4lv": `rgb(45, 53, 138)` },
                        ZvpNlCH2g: { "--extracted-1w1cjl5": `rgb(255, 255, 255)` },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...T(
                        {
                          y5FCLEAb_: {
                            children: o(r, {
                              children: o(u.p, {
                                style: {
                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                  "--framer-font-size": `14px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-0.02em`,
                                  "--framer-line-height": `1.6em`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(45, 53, 138))`,
                                },
                                children: `Contact us`,
                              }),
                            }),
                          },
                          ZvpNlCH2g: {
                            children: o(r, {
                              children: o(u.h6, {
                                style: {
                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                  "--framer-font-size": `20px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-0.04em`,
                                  "--framer-line-height": `1.4em`,
                                  "--framer-text-color": `var(--extracted-1w1cjl5, rgb(255, 255, 255))`,
                                },
                                children: `Contact us`,
                              }),
                            }),
                          },
                        },
                        I,
                        B
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
          `.framer-NAYOI.framer-149feq7, .framer-NAYOI .framer-149feq7 { display: block; }`,
          `.framer-NAYOI.framer-9ztp99 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px 24px 12px 24px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-NAYOI .framer-n650xy { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-NAYOI.framer-v-149lx46.framer-9ztp99 { padding: 10px 20px 10px 20px; }`,
          `.framer-NAYOI.framer-v-1lws44s.framer-9ztp99 { padding: 15px 42px 15px 42px; }`,
          `.framer-NAYOI.framer-v-1lws44s .framer-n650xy { order: 0; }`,
          `.framer-NAYOI[data-border="true"]::after, .framer-NAYOI [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-NAYOI`
      )),
      (I.displayName = `Button 2`),
      (I.defaultProps = { height: 46, width: 116 }),
      h(I, {
        variant: {
          options: [`GTFjN8aP8`, `lxv9FTdIM`, `y5FCLEAb_`, `ZvpNlCH2g`],
          optionTitles: [`Default`, `Small Vairant`, `Line button`, `Large`],
          title: `Variant`,
          type: x.Enum,
        },
        I1saNDFFs: {
          defaultValue: `contact us`,
          displayTextArea: !1,
          title: `Title`,
          type: x.String,
        },
        qF3haB09r: { title: `Link 4`, type: x.Link },
      }),
      C(
        I,
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
  });
export { L as n, I as t };
//# sourceMappingURL=cyy8t4bk7.C8CV_F0r.mjs.map
