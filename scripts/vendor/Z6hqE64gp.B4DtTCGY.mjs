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
  tt as C,
  w,
  x as T,
} from "./framer.w0XhpZTx.mjs";
function E(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R = e(() => {
    (s(),
      g(),
      p(),
      l(),
      (D = {
        epNilAtr0: { hover: !0 },
        QY81WVxaH: { hover: !0 },
        RgTKWyphZ: { hover: !0 },
        U5c6Y2LAB: { hover: !0 },
        W5rsRJ6Zc: { hover: !0 },
      }),
      (O = [`RgTKWyphZ`, `U5c6Y2LAB`, `W5rsRJ6Zc`, `QY81WVxaH`, `epNilAtr0`]),
      (k = `framer-o6wr4`),
      (A = {
        epNilAtr0: `framer-v-1sth742`,
        QY81WVxaH: `framer-v-z17kk`,
        RgTKWyphZ: `framer-v-rq2fim`,
        U5c6Y2LAB: `framer-v-zy5fvf`,
        W5rsRJ6Zc: `framer-v-1usdf7n`,
      }),
      (j = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (M = ({ value: e, children: n }) => {
        let r = t(d),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(d.Provider, { value: s, children: n });
      }),
      (N = u.create(r)),
      (P = {
        "Line button": `W5rsRJ6Zc`,
        "Small Vairant": `U5c6Y2LAB`,
        "Variant 5": `epNilAtr0`,
        Default: `RgTKWyphZ`,
        Large: `QY81WVxaH`,
      }),
      (F = ({ buttonLabel: e, click: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        PuJJv4mcP: e ?? a.PuJJv4mcP ?? `Contact us`,
        variant: P[a.variant] ?? a.variant ?? `RgTKWyphZ`,
        YvTP0PxrM: t ?? a.YvTP0PxrM,
      })),
      (I = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (L = _(
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
              PuJJv4mcP: x,
              YvTP0PxrM: w,
              ...P
            } = F(e),
            {
              baseVariant: L,
              classNames: R,
              clearLoadingGesture: z,
              gestureHandlers: B,
              gestureVariant: V,
              isLoading: H,
              setGestureState: U,
              setVariant: W,
              variants: G,
            } = b({
              cycleOrder: O,
              defaultVariant: `RgTKWyphZ`,
              enabledGestures: D,
              ref: a,
              variant: _,
              variantClassNames: A,
            }),
            K = I(e, G),
            { activeVariantCallback: q, delay: J } = C(L),
            Y = q(async (...e) => {
              if ((U({ isPressed: !1 }), w && (await w(...e)) === !1)) return !1;
            }),
            X = m(k);
          return o(f, {
            id: g ?? s,
            children: o(N, {
              animate: G,
              initial: !1,
              children: o(M, {
                value: j,
                children: o(y, {
                  href: { webPageId: `AIJK2IvNV` },
                  motionChild: !0,
                  nodeId: `RgTKWyphZ`,
                  openInNewTab: !1,
                  scopeId: `Z6hqE64gp`,
                  children: o(u.a, {
                    ...P,
                    ...B,
                    className: `${m(X, `framer-rq2fim`, h, R)} framer-1oqyhto`,
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    layoutDependency: K,
                    layoutId: `RgTKWyphZ`,
                    onTap: Y,
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
                      "epNilAtr0-hover": { backgroundColor: `rgb(0, 0, 0)` },
                      "QY81WVxaH-hover": {
                        backgroundColor: `var(--token-9582960f-05f7-42bf-a547-39d02e26bd72, rgb(0, 0, 0))`,
                      },
                      "RgTKWyphZ-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgb(0, 0, 0)`,
                      },
                      "U5c6Y2LAB-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgba(45, 53, 138, 0.78)`,
                      },
                      "W5rsRJ6Zc-hover": {
                        "--border-color": `rgba(45, 53, 138, 0)`,
                        backgroundColor: `rgb(247, 247, 247)`,
                      },
                      epNilAtr0: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                      QY81WVxaH: {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                      },
                      W5rsRJ6Zc: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `rgba(45, 53, 138, 0.76)`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `rgb(255, 255, 255)`,
                      },
                    },
                    ...E(
                      {
                        "epNilAtr0-hover": { "data-framer-name": void 0 },
                        "QY81WVxaH-hover": { "data-framer-name": void 0 },
                        "RgTKWyphZ-hover": { "data-framer-name": void 0 },
                        "U5c6Y2LAB-hover": { "data-framer-name": void 0 },
                        "W5rsRJ6Zc-hover": { "data-framer-name": void 0 },
                        epNilAtr0: { "data-framer-name": `Variant 5` },
                        QY81WVxaH: { "data-framer-name": `Large` },
                        U5c6Y2LAB: { "data-framer-name": `Small Vairant` },
                        W5rsRJ6Zc: { "data-border": !0, "data-framer-name": `Line button` },
                      },
                      L,
                      V
                    ),
                    children: o(T, {
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
                      className: `framer-1z1153s`,
                      fonts: [`Inter-Medium`],
                      layoutDependency: K,
                      layoutId: `ljH1G_ZPn`,
                      style: {
                        "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: x,
                      variants: {
                        "epNilAtr0-hover": { "--extracted-1w1cjl5": `rgb(255, 255, 255)` },
                        QY81WVxaH: { "--extracted-1w1cjl5": `rgb(255, 255, 255)` },
                        W5rsRJ6Zc: { "--extracted-r6o4lv": `rgb(45, 53, 138)` },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...E(
                        {
                          "epNilAtr0-hover": {
                            children: o(r, {
                              children: o(u.h6, {
                                style: {
                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                  "--framer-font-size": `15px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-0.04em`,
                                  "--framer-line-height": `1.4em`,
                                  "--framer-text-color": `var(--extracted-1w1cjl5, rgb(255, 255, 255))`,
                                },
                                children: `Contact us`,
                              }),
                            }),
                          },
                          epNilAtr0: {
                            children: o(r, {
                              children: o(u.h6, {
                                style: {
                                  "--font-selector": `SW50ZXItTWVkaXVt`,
                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                  "--framer-font-size": `15px`,
                                  "--framer-font-weight": `500`,
                                  "--framer-letter-spacing": `-0.04em`,
                                  "--framer-line-height": `1.4em`,
                                },
                                children: `Contact us`,
                              }),
                            }),
                          },
                          QY81WVxaH: {
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
                          W5rsRJ6Zc: {
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
                        },
                        L,
                        V
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
          `.framer-o6wr4.framer-1oqyhto, .framer-o6wr4 .framer-1oqyhto { display: block; }`,
          `.framer-o6wr4.framer-rq2fim { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px 24px 12px 24px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-o6wr4 .framer-1z1153s { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-o6wr4.framer-v-zy5fvf.framer-rq2fim { padding: 10px 20px 10px 20px; }`,
          `.framer-o6wr4.framer-v-z17kk.framer-rq2fim { padding: 15px 42px 15px 42px; }`,
          `.framer-o6wr4[data-border="true"]::after, .framer-o6wr4 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-o6wr4`
      )),
      (L.displayName = `Button`),
      (L.defaultProps = { height: 46, width: 118 }),
      h(L, {
        variant: {
          options: [`RgTKWyphZ`, `U5c6Y2LAB`, `W5rsRJ6Zc`, `QY81WVxaH`, `epNilAtr0`],
          optionTitles: [`Default`, `Small Vairant`, `Line button`, `Large`, `Variant 5`],
          title: `Variant`,
          type: x.Enum,
        },
        PuJJv4mcP: {
          defaultValue: `Contact us`,
          displayTextArea: !1,
          title: `Button Label`,
          type: x.String,
        },
        YvTP0PxrM: { title: `Click`, type: x.EventHandler },
      }),
      w(
        L,
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
export { R as n, L as t };
//# sourceMappingURL=Z6hqE64gp.B4DtTCGY.mjs.map
