import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  O as n,
  P as r,
  g as i,
  j as a,
  l as o,
  s,
  u as c,
  v as l,
  w as u,
} from "./react.N6WDMTqS.mjs";
import { S as d, a as f, r as p, t as m } from "./motion.CXXzZ97F.mjs";
import {
  C as h,
  I as g,
  O as _,
  R as v,
  T as y,
  U as b,
  mt as x,
  nt as S,
  pt as C,
  r as w,
  st as T,
  t as E,
  tt as D,
  u as O,
  w as k,
  x as A,
} from "./framer.w0XhpZTx.mjs";
import { n as j, t as M } from "./cQxXulDZM.DXXtl8ZX.mjs";
function N(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q = e(() => {
    (s(),
      b(),
      m(),
      u(),
      j(),
      (P = g(M)),
      (F = [`ZKOecjUjr`, `zKknDDBVl`]),
      (I = `framer-6hPUL`),
      (L = { zKknDDBVl: `framer-v-qjiksf`, ZKOecjUjr: `framer-v-119fhuy` }),
      (R = { delay: 0, duration: 0.4, ease: [0, 0, 1, 1], type: `tween` }),
      (z = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (B = (e, t) => `translate(-50%, -50%) ${t}`),
      (V = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          s = a(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return o(f.Provider, { value: s, children: n });
      }),
      (H = d.create(r)),
      (U = { Default: `ZKOecjUjr`, Phone: `zKknDDBVl` }),
      (W = ({
        click: e,
        height: t,
        id: n,
        image3: r,
        internalCard: i,
        overlay: a,
        title3: o,
        width: s,
        ...c
      }) => ({
        ...c,
        BlDyCL1Hj: r ??
          c.BlDyCL1Hj ?? {
            alt: ``,
            pixelHeight: 215,
            pixelWidth: 500,
            src: `https://framerusercontent.com/images/xkuhSkorfdORvFnF7hFwhX2xw.webp?width=500&height=215`,
          },
        jTs_fuWrm: a ?? c.jTs_fuWrm,
        JWP0bNV85: o ?? c.JWP0bNV85 ?? `SPANNERS`,
        oSlFkYxO1: i ?? c.oSlFkYxO1,
        p02QWLOH4: e ?? c.p02QWLOH4,
        variant: U[c.variant] ?? c.variant ?? `ZKOecjUjr`,
      })),
      (G = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = x(
        i(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = l(),
            { activeLocale: u, setLocale: f } = T(),
            m = S(),
            {
              style: g,
              className: y,
              layoutId: b,
              variant: x,
              BlDyCL1Hj: w,
              JWP0bNV85: k,
              oSlFkYxO1: j,
              jTs_fuWrm: P,
              p02QWLOH4: U,
              ...K
            } = W(e),
            {
              baseVariant: q,
              classNames: J,
              clearLoadingGesture: ee,
              gestureHandlers: Y,
              gestureVariant: X,
              isLoading: te,
              setGestureState: Z,
              setVariant: ne,
              variants: Q,
            } = C({
              cycleOrder: F,
              defaultVariant: `ZKOecjUjr`,
              ref: a,
              variant: x,
              variantClassNames: L,
            }),
            $ = G(e, Q),
            { activeVariantCallback: re, delay: ie } = D(q),
            ae = re(async (...e) => {
              if (
                (Z({ isPressed: !1 }),
                (P && (await P(...e)) === !1) || (U && (await U(...e)) === !1))
              )
                return !1;
            }),
            oe = _(I);
          return o(p, {
            id: b ?? s,
            children: o(H, {
              animate: Q,
              initial: !1,
              children: o(V, {
                value: R,
                children: c(d.div, {
                  ...K,
                  ...Y,
                  className: _(oe, `framer-119fhuy`, y, J),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: $,
                  layoutId: `ZKOecjUjr`,
                  onTap: ae,
                  ref: a,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-5cf586a1-80af-4ef4-a7bb-0d326e7b90fa, rgb(203, 213, 225))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-37b21b3d-3e44-4bf1-bf68-f20e67e05dae, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    ...g,
                  },
                  ...N({ zKknDDBVl: { "data-framer-name": `Phone` } }, q, X),
                  children: [
                    o(d.div, {
                      className: `framer-kr2dsz`,
                      layoutDependency: $,
                      layoutId: `FNKwWiy2S`,
                      children: o(O, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: v(
                            (m?.y || 0) +
                              0 +
                              (((m?.height || 400) -
                                0 -
                                (Math.max(0, ((m?.height || 400) - 0 - 284) / 1) * 1 +
                                  140 +
                                  112 +
                                  32)) /
                                2 +
                                0 +
                                0) +
                              12 +
                              ((Math.max(0, ((m?.height || 400) - 0 - 284) / 1) * 1 - 12 - 230) /
                                2 +
                                0 +
                                0)
                          ),
                          pixelHeight: 215,
                          pixelWidth: 500,
                          sizes: `calc(${m?.width || `100vw`} - 24px)`,
                          ...z(w),
                        },
                        className: `framer-iz5znv`,
                        fitImageDimension: `height`,
                        layoutDependency: $,
                        layoutId: `OeIG1nbCr`,
                        style: {
                          borderBottomLeftRadius: 8,
                          borderBottomRightRadius: 8,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        },
                        ...N(
                          {
                            zKknDDBVl: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: v(
                                  (m?.y || 0) +
                                    0 +
                                    (((m?.height || 400) -
                                      0 -
                                      (Math.max(0, ((m?.height || 400) - 0 - 284) / 1) * 1 +
                                        140 +
                                        112 +
                                        32)) /
                                      2 +
                                      0 +
                                      0) +
                                    12 +
                                    ((Math.max(0, ((m?.height || 400) - 0 - 284) / 1) * 1 -
                                      12 -
                                      142) /
                                      2 +
                                      0 +
                                      0)
                                ),
                                pixelHeight: 215,
                                pixelWidth: 500,
                                sizes: `calc(${m?.width || `100vw`} - 24px)`,
                                ...z(w),
                              },
                            },
                          },
                          q,
                          X
                        ),
                      }),
                    }),
                    o(d.div, {
                      className: `framer-1szgf3n`,
                      layoutDependency: $,
                      layoutId: `kYRFcfbOB`,
                      children: o(A, {
                        __fromCanvasComponent: !0,
                        children: o(r, {
                          children: o(d.p, {
                            style: {
                              "--font-selector": `R0Y7RE0gU2Fucy01MDA=`,
                              "--framer-font-family": `"DM Sans", "DM Sans Placeholder", sans-serif`,
                              "--framer-font-size": `20px`,
                              "--framer-font-weight": `500`,
                              "--framer-line-height": `28px`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-fa4dcb27-7179-41c9-bbdc-0fe7fe502e97, rgb(255, 255, 255)))`,
                            },
                            children: `SPANNERS`,
                          }),
                        }),
                        className: `framer-1eoskfy`,
                        fonts: [`GF;DM Sans-500`],
                        layoutDependency: $,
                        layoutId: `UDCFQwJmD`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-fa4dcb27-7179-41c9-bbdc-0fe7fe502e97, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: k,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                    o(d.div, {
                      className: `framer-m0qf7u`,
                      layoutDependency: $,
                      layoutId: `QqZkG5_6f`,
                      children: c(d.div, {
                        className: `framer-1v9jezv`,
                        layoutDependency: $,
                        layoutId: `NCrSGL7WA`,
                        children: [
                          o(E, {
                            height: 40,
                            width: `100px`,
                            y:
                              (m?.y || 0) +
                              0 +
                              (((m?.height || 400) -
                                0 -
                                (Math.max(0, ((m?.height || 400) - 0 - 284) / 1) * 1 +
                                  140 +
                                  112 +
                                  32)) /
                                2 +
                                (Math.max(0, ((m?.height || 400) - 0 - 284) / 1) * 1 + 140) +
                                32) +
                              0 +
                              0 +
                              0 +
                              0,
                            children: o(h, {
                              className: `framer-nb2ya2-container`,
                              layoutDependency: $,
                              layoutId: `mRfdbypuj-container`,
                              nodeId: `mRfdbypuj`,
                              rendersWithMotion: !0,
                              scopeId: `jNXHc0ip8`,
                              children: o(M, {
                                height: `100%`,
                                id: `mRfdbypuj`,
                                layoutId: `mRfdbypuj`,
                                RI5H2JEqr: j,
                                style: { height: `100%`, width: `100%` },
                                variant: `L0ZpVUzqu`,
                                width: `100%`,
                              }),
                            }),
                          }),
                          o(d.div, {
                            className: `framer-ge54xv`,
                            "data-border": !0,
                            "data-framer-name": `Product buttons final`,
                            layoutDependency: $,
                            layoutId: `XBXgNSsuU`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-fb66e8e3-c8ed-45a6-a584-138c63c1331d, rgb(45, 53, 138))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                            },
                            children: o(A, {
                              __fromCanvasComponent: !0,
                              children: o(r, {
                                children: o(d.p, {
                                  style: {
                                    "--framer-font-size": `14px`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-fb66e8e3-c8ed-45a6-a584-138c63c1331d, rgb(45, 53, 138)))`,
                                  },
                                  children: `Enquiry`,
                                }),
                              }),
                              className: `framer-1mf663w`,
                              fonts: [`Inter`],
                              layoutDependency: $,
                              layoutId: `eDPXEh8xg`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-fb66e8e3-c8ed-45a6-a584-138c63c1331d, rgb(45, 53, 138))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              transformTemplate: B,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-6hPUL.framer-1l3vyp6, .framer-6hPUL .framer-1l3vyp6 { display: block; }`,
          `.framer-6hPUL.framer-119fhuy { align-content: flex-end; align-items: flex-end; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: 400px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 560px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-6hPUL .framer-kr2dsz { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 1px; justify-content: center; overflow: visible; padding: 12px 12px 0px 12px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-6hPUL .framer-iz5znv { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-6hPUL .framer-1szgf3n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 24px; position: relative; width: 100%; }`,
          `.framer-6hPUL .framer-1eoskfy { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-6hPUL .framer-m0qf7u { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px 24px 24px 24px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-6hPUL .framer-1v9jezv { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-6hPUL .framer-nb2ya2-container { flex: none; height: 40px; position: relative; width: 100px; }`,
          `.framer-6hPUL .framer-ge54xv { flex: none; height: 40px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100px; }`,
          `.framer-6hPUL .framer-1mf663w { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre; width: auto; }`,
          `.framer-6hPUL.framer-v-qjiksf.framer-119fhuy { width: 355px; }`,
          `.framer-6hPUL.framer-v-qjiksf .framer-iz5znv { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; order: 0; padding: 0px; }`,
          `.framer-6hPUL[data-border="true"]::after, .framer-6hPUL [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-6hPUL`
      )),
      (K.displayName = `ImageGalley 4`),
      (K.defaultProps = { height: 400, width: 560 }),
      y(K, {
        variant: {
          options: [`ZKOecjUjr`, `zKknDDBVl`],
          optionTitles: [`Default`, `Phone`],
          title: `Variant`,
          type: w.Enum,
        },
        BlDyCL1Hj: {
          __defaultAssetReference: `data:framer/asset-reference,xkuhSkorfdORvFnF7hFwhX2xw.webp?originalFilename=Double+end+spanner+image+%28website%29.webp&width=500&height=215`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,xkuhSkorfdORvFnF7hFwhX2xw.webp?originalFilename=Double+end+spanner+image+%28website%29.webp&width=500&height=215`,
          },
          title: `Image 3`,
          type: w.ResponsiveImage,
        },
        JWP0bNV85: {
          defaultValue: `SPANNERS`,
          displayTextArea: !1,
          title: `Title 3`,
          type: w.String,
        },
        oSlFkYxO1: { title: `Internal Card`, type: w.Link },
        jTs_fuWrm: { title: `Overlay`, type: w.EventHandler },
        p02QWLOH4: { title: `Click`, type: w.EventHandler },
      }),
      k(
        K,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `DM Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `DM Sans`,
                url: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2`,
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
          ...P,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { q as n, K as t };
//# sourceMappingURL=jNXHc0ip8.Bnggf-hw.mjs.map
